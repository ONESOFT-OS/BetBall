from queries.core.db import createDBConnection, executeQuery, executeSelection
from queries.core.env import DB_USER, DB_PASSWORD, DB_HOST, DB_NAME


connection = createDBConnection(DB_HOST, DB_USER, '', DB_NAME)


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
    ('{name}', '{club_id}','{image_src}');
    """
    executeQuery(connection, query)


