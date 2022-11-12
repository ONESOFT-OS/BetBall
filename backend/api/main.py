from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

from model.models import Login, User

from queries.queries import get_clubs
from queries.users import get_users, get_users_by_type
from queries.utils.service import login_user

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def fake_decode_token(token):
    return User(
        username=token + "fakedecoded", email="john@example.com"
    )


async def get_current_user(token: str = Depends(oauth2_scheme)):
    user = fake_decode_token(token)
    return user


@app.get('/users')
async def users(token: str = Depends(oauth2_scheme)):
    users = get_users()
    return {"token": token}


@app.get("/users/me")
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user


@app.get('/users/{id}')
async def users():
    users = get_users_by_type('funcionnário')
    return users[id]


@app.post('/login')
async def login(login: Login):
    if login_user(login.email, login.password):
        return {
            'status': 'Autorizado'
        }
    else: 
        return {
            'Error': 'Usuário não cadastrado no sistema'
        }

# @app.post('/login')
# async def login(form_data: OAuth2PasswordRequestForm = Depends()):
#     user_dict = login_user(form_data.email, login.password)
#     if not user_dict:
#         raise HTTPException(status_code=400, detail="Usuário ou senha incorreto")


