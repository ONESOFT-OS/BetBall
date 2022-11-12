from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

from model.models import Login, User, Cadastro

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
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user


async def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user



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


# @app.post('/login')
# async def login(login: Login):
#     if login_user(login.email, login.password):
#         return {
#             'status': 'Autorizado'
#         }
#     else: 
#         return {
#             'Error': 'Usuário não cadastrado no sistema'
#         }

@app.post('/token')
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    print(f'ca:{form_data.username}')
    user_dict = login_user(form_data.username, form_data.password)
    if not user_dict:
        raise HTTPException(status_code=400, detail="Usuário ou senha incorreto")
    else: 
        raise HTTPException(status_code=200, detail="Authenticated!")


@app.post('/cadastro')
async def cadastro(cadastro: Cadastro):
    return register_user(cadastro.nickname, cadastro.email, cadastro.password)