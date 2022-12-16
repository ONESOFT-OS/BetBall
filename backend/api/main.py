from queries.participation import updateParticipationGoals
from queries.users import get_user_by_email
from fastapi import Depends, FastAPI, HTTPException, Response
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse
import json


from model.models import Login, User, Cadastro, Game, EditGame, CadastroColaboratorAdmin, Match, Deposit, Withdraw, Email, Balance

from queries.users import type_user
from queries.credit import user_deposit, get_balance, user_withdraw
from queries.queries import get_clubs
from queries.users import get_users, get_users_by_type
from queries.users import login_user, get_email
from queries.register import register_user, register_apostador, register_admin, register_collaborator
from queries.game import add_game, list_game_by_id, edit_datetime_game
from queries.team import get_clubs_by_game

from random import randint

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




@app.get('/users')
async def users():
    return get_users()


@app.get('/users/{id}')
async def users():
    users = get_users_by_type('funcionnário')
    return users[id]


@app.post('/token')
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user_dict = login_user(form_data.username, form_data.password)
    dict_reponse ={}
    if not user_dict:
        dict_reponse['token'] = "error"
        raise HTTPException(status_code=400, detail=f"{dict_reponse}")
    else:
        nickname = get_user_by_email(form_data.username)
        dict_reponse["token"] = "success"
        dict_reponse["role"] = type_user(nickname[0][0])
        json_string = json.dumps(dict_reponse)
        return Response(content=f"{json_string}", status_code=200, media_type="application/json")


@app.post('/register/punter')
async def cadastro(cadastro: Cadastro):
    result = register_user(cadastro.nickname, cadastro.email, cadastro.password)
    if result == True:
         return register_apostador(cadastro.nickname)
    else:
        return result

# PS: add_game sera alterada posteriormente para lidar com o autoincrement no campo de game_id
@app.post('/register/game')
async def register_game(game: Game):
    if add_game(game.collaborator_nickname, game.end_datetime, game.team1_id, game.team2_id):
        data = {
            "nickname": game.collaborator_nickname,
        }
        raise HTTPException(status_code=200, detail=f"{data}")
    else:
        raise HTTPException(status_code=400, detail="O Jogo ja existe")


@app.post('/register/user')
async def registerUser(user: CadastroColaboratorAdmin):
    result = register_user(user.nickname, user.email, user.password)

    if(user.isAdmin == 1):
        result = register_admin(user.nickname)
    else:
        result = register_collaborator(user.nickname)

    return result


# @app.get('/game/match')
# async def match(match: Match):
#     match_data = get_poster_by_id(match.game_id)
#     return match_data

@app.get('/teams')
async def match():
    return get_clubs()

@app.get('/game/{id}')
async def getGame(id):
    auxGame = list_game_by_id(id)
    endDate = str(auxGame['date']).split(" ")
    game = {
        'idGame'            : auxGame['idGame'],
        'nickColaborador'   : auxGame['nickColaborador'],
        'endDate'           : endDate[0],
        'endTime'           : endDate[1],
        'isFinish'          : auxGame['isFinish'],
    }
    return game

@app.get('/team/game/{gameId}')
async def getTeansInGame(gameId):
    response = get_clubs_by_game(gameId)
    return response

@app.put('/update/game')
async def updateGame(game : EditGame):
    response = edit_datetime_game(game.idGame, game.end_datetime)
    if (not response):
        return response

    response = updateParticipationGoals(game.idGame, game.idTeam1, game.goalTeam1)
    if (not response):
        return response

    response = updateParticipationGoals(game.idGame, game.idTeam2, game.goalTeam2)
    if (not response):
        return response

    return True

@app.post('/perfil/deposit')
async def deposit(deposit: Deposit):
    if deposit.value > 0:
        return user_deposit(deposit.nickname, deposit.value)
    else:
        return False

@app.post('/perfil/withdraw')
async def deposit(withdraw: Withdraw):
    balance = get_balance(withdraw.nickname)
    if balance[0][0] > withdraw.value :
        return user_withdraw(withdraw.nickname, withdraw.value)
    else:
        return False

@app.post('/getnick')
async def get_nick(email:Email):
    var = get_user_by_email(email.email)
    return var

@app.post('/getbalance')
async def get_balance_by_nick(balance: Balance):
     sale = get_balance(balance.nickname)
     sale = sale[0][0]
     return sale

@app.post('/getemail')
async def get_email_by_nick(balance: Balance):
    email = get_email(balance.nickname)
    return email


@app.post('/recover_password')
async def recover_password(email: Email) -> Response:
    var = get_user_by_email(email.email)
