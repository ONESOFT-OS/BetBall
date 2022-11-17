from core.db import createDBConnection, executeQuery, executeSelection
from core.env import DB_USER, DB_PASSWORD, DB_HOST, DB_NAME

connection = createDBConnection("localhost", "root", '', 'betball')


def create(nickname, id_jogo, credito_apost, valor_aposta, valor_ganho):
    query = f"""
        INSERT INTO apostas VALUES ('{nickname}', '{id_jogo}', '{credito_apost}', '{valor_aposta}','{valor_ganho}');
        """
    executeQuery(connection, query)


def find_by_game_id(_id):
    query = f"""
    SELECT * FROM apostas WHERE id_jogo = '{_id}'
    """
    executeQuery(connection, query)

def indexAll():
    query = f""" SELECT * FROM apostas; """

    executeQuery(connection, query)


def update(nickname, id_jogo, credito_apost, valor_aposta, valor_ganho):
    query = f"""
    UPDATE apostas SET
    (
        nickname = '{nickname}',
        credito_apost = '{credito_apost}',
        valor_aposta = '{valor_aposta}',
        valor_ganho = '{valor_ganho}'
    )
    WHERE id_jogo =  '{id_jogo}'
    """

    executeQuery(connection, query)

def delete(self, id_jogo):
    query = f""" DELETE FROM apostas WHERE id_jogo = '{id_jogo}' """

    executeQuery(connection, query)
