from fastapi import FastAPI

from queries.queries import get_users_by_type


app = FastAPI()


@app.get('/users')
def users():
    users = get_users_by_type('funcionnário')
    return {"users": users}

@app.get('/users/{id}')
def users():
    users = get_users_by_type('funcionnário')
    return users[id]
