from fastapi import FastAPI
from model.login import Login

from queries.queries import get_users_by_type, get_users, get_clubs
from queries.users import get_users

from queries.utils.service import user_exists

app = FastAPI()


@app.get('/users')
def users():
    users = get_users()
    return {"users": users}


@app.get('/users/{id}')
def users():
    users = get_users_by_type('funcionnário')
    return users[id]


@app.post('/login')
async def login(login: Login):
    if user_exists(login.email):
        return {
            'status': 'Autorizado'
        }
    else: 
        return {
            'Error': 'Usuário não cadastrado no sistema'
        }





