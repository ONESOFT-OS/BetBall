from queries.core.db import  executeQuery, executeSelection, connection
from queries.utils.service import tutple_to_dict


# Retorna uma lista com todos os usuários cadastrados.
# @return Lista de dicionário. O nome, clube e caminho da imagem.
def get_users():
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


def user_exists(email):
    if len(get_user_by_email(email))==0:
        return False
    else:
        return True


def login_user(email, password):
    query = f"""
    SELECT nickname, email FROM usuario
    WHERE email = '{email}' AND
    senha = '{password}'
    """
    user_return = executeSelection(connection, query)
    if len(user_return)!=0:
        users_dict = [tutple_to_dict('nickname','email', tupla=user) for user in user_return]
        return users_dict[0]
    else:
         return None


# Retorna uma lista com todos os usuário cadastrados.
# @param tipo de usuário.
# @return Dicionário. O nickname e email de cada usuário.
def get_users_by_type(type_):
    pass


# Retorna uma lista com todos os colaboradores cadastrados.
# @return Lista de dicionário. O nickname.
def get_collaborators():
    query = """
    SELECT nickname FROM colaborador
    """
    collaborators = executeSelection(connection, query)
    return collaborators

def type_user(nickname):
    query = f"""
    SELECT nickname FROM apostador WHERE nickname = '{nickname}'
    """
    valid = executeSelection(connection, query)
    if valid != []:
        return "Punter"
    else:
        print("admin")
        newQuery = f"""
            SELECT isAdmin FROM colaborador WHERE nickname = '{nickname}'
        """
        isAdmin = executeSelection(connection, newQuery)
        if isAdmin[0][0] == 1:
            return "Admin"
        else:
            return "Employee"

def get_email(nickname):
    query = f"""
    SELECT email FROM usuario WHERE nickname = '{nickname}'
    """
    result = executeSelection(connection, query)
    return result[0][0]


def update_user(nickname,email, senha):
    query = f"""
        UPDATE usuario SET
        (
        email = '{email}',
        senha = '{senha}',
    )
    WHERE = '{nickname}'
    """
    executeQuery(connection, query)
