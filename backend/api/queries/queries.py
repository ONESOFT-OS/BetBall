from core.db import createDBConnection, executeQuery, executeSelection
from core.env import DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
from utils.service import tutple_to_dict

connection = createDBConnection("localhost", "root", '', 'betball')


users = {
    1:{
    'nickname': '@rodrigo.s.damasceno',
    "email": "rodrigo.s.damasceno@gmail.com"
    },
    2:{
    'nickname': '@ritakassiane',
    "email": "ritakassiane@gmail.com"
    },
    3:{
    'nickname': '@pauloqueiroz',
    "email": "pauloqueiroz@gmail.com"
    },
}

# Retorna uma lista com todos os usuário cadastrados.
# @param tipo de usuário.
# @return Dicionário. O nickname e email de cada usuário.
def get_users_by_type(type_):
    print(type_)
    return users


# @param nome do time, id, e diretório da imagem.
def add_football_club(name, club_id, image_src):
    query = f"""
    INSERT INTO times  VALUES
    (
        '{name}', 
        '{club_id}',
        '{image_src}'
    );
    """
    executeQuery(connection, query)


# Retorna uma lista com todos os times de futebol cadastrados.
# @return Lista de dicionário. O nome, clube e caminho da imagem.
def get_clubs():
    query = """SELECT * FROM times"""
    clubs = executeSelection(connection, query)
    clubs_dict = [tutple_to_dict('club_name', 'club_id', 'photo_link',tupla=time) for time in clubs]
    return clubs_dict


# @param nickname, email, e senha.
def register_user(nickname, email, password):
    query = f"""
    INSERT INTO usuario (nickname, email, senha) VALUES
    (
        '{nickname}',
        '{email}',
        '{password}'
    );
    """
    executeQuery(connection, query)

# Retorna uma lista com todos os usuários cadastrados.
# @return Lista de dicionário. O nome, clube e caminho da imagem.
def get_users():
    query = """
    SELECT nickname, email FROM usuario
    """
    users = executeSelection(connection, query)
    users_dict = [tutple_to_dict('nickname','email', tupla=user) for user in users]
    return users_dict



