from fastapi import FastAPI
from pydantic import BaseModel

from queries.queries import get_users_by_type, get_users, get_clubs

class User(BaseModel):
    email: str
    password: str


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
async def login(user: User):
    return user



app = FastAPI()

