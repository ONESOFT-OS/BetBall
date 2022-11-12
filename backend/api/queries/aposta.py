
from select import select
from core.db import createDBConnection, executeQuery, executeSelection
from core.env import DB_USER, DB_PASSWORD, DB_HOST, DB_NAME

connection = createDBConnection("localhost", "root", '', 'betball')


def create(nickname, valor, time):
    query = f"""
        INSERT INTO apostas  VALUES
        ('{nickname}', '{valor}','{time}');
        """
    executeQuery(connection, query)


def find_by_id(_id):
    query = f"""
    SELECT * FROM apostas WHERE id = '{_id}'
    """
    executeQuery(connection, query)


def update(_id, nickname, valor, time):
    query = f"""
    UPDATE apostas SET 
    (
        nickname = '{nickname}',
        valor = '{valor}',
        time = '{time}',
    )
    WHERE ID =  '{_id}'
    """

    executeQuery(connection, query)

def delete(self, _id):
    query = f""" DELETE FROM apostas WHERE id = '{_id}' """

    executeQuery(connection, query)

