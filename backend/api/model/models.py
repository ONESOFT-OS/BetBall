from pydantic import BaseModel


class Login(BaseModel):
    email: str
    password: str

class User(BaseModel):
    nickname: str
    email: str

class UserInDB(User):
    hashed_password: str

class Cadastro(BaseModel):
    nickname: str
    email: str
    password: str