from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware

from model.models import Login, User, Cadastro, Game

from queries.queries import get_clubs
from queries.users import get_users, get_users_by_type
from queries.users import login_user
from queries.register import register_user, register_apostador
from queries.game import add_game

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
    if not user_dict:
        raise HTTPException(status_code=400, detail="Usuário ou senha incorreto")
    else: 
        raise HTTPException(status_code=200, detail="Authenticated!")


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
    if add_game(randint(4567,8798), game.collaborator_nickname, game.start_datetime, game.end_datetime):
        data = {
            "nickname": game.collaborator_nickname,
        }
        raise HTTPException(status_code=200, detail=f"{data}")
    else: 
        raise HTTPException(status_code=400, detail="O Jogo ja existe")

