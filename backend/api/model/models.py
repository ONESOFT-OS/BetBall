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

class CadastroColaboratorAdmin(BaseModel):
    nickname: str
    email: str
    password: str
    isAdmin: int

class Game(BaseModel):
    collaborator_nickname: str
    end_datetime: str
    team1_id: str
    team2_id: str
    
""" 
-- Antiga Classe Game --
class Game(BaseModel):
    collaborator_nickname: str
    start_datetime: str
    end_datetime: str
"""
class EditGame(BaseModel):
    idGame : int
    end_datetime: str

class Match(BaseModel):
    game_id: str

class Deposit(BaseModel):
    nickname: str
    value: int

class Withdraw(BaseModel):
    nickname: str
    value: int

class Email(BaseModel):
    email: str