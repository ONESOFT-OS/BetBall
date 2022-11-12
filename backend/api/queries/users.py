from queries.core.db import createDBConnection, executeQuery, executeSelection, connection


# from core.db import createDBConnection, executeQuery, executeSelection, connection
# from utils.service import tutple_to_dict, format_date

from datetime import datetime


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
    return executeQuery(connection, query)


# Retorna uma lista com todos os usuários cadastrados.
# @return Lista de dicionário. O nome, clube e caminho da imagem.
def get_users():
    from queries.utils.service import tutple_to_dict
    query = """
    SELECT nickname, email FROM usuario
    """
    users = executeSelection(connection, query)
    users_dict = [tutple_to_dict('nickname','email', tupla=user) for user in users]
    return users_dict


def get_user_by_email(email):
    query = f"""
    SELECT nickname FROM usuario
    WHERE email = '{email}'
    """
    user = executeSelection(connection, query)
    return user


def login_user(email, password):
    query = f"""
    SELECT nickname FROM usuario
    WHERE email = '{email}' AND 
    senha = '{password}' 
    """
    user = executeSelection(connection, query)
    return user

# Retorna uma lista com todos os usuário cadastrados.
# @param tipo de usuário.
# @return Dicionário. O nickname e email de cada usuário.
def get_users_by_type(type_):
    pass


# @param nickname de um usuário
def create_collaborator(nickname):
    query = f"""
    INSERT INTO colaborador VALUES
    (
        '{nickname}',
        'False'
    );
    """
    executeQuery(connection, query)


# Retorna uma lista com todos os colaboradores cadastrados.
# @return Lista de dicionário. O nickname.
def get_collaborators():
    query = """
    SELECT nickname FROM colaborador
    """
    collaborators = executeSelection(connection, query)
    return collaborators

print(login_user('ritakassiane@gmail.com', '100000'))