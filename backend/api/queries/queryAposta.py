
from select import select
from core.db import createDBConnection, executeQuery, executeSelection
from core.env import DB_USER, DB_PASSWORD, DB_HOST, DB_NAME

connection = createDBConnection("localhost", "root", '', 'betball')
aposta = {
    1:{
       'nickname': '@user1',
       'valor': '10,00',
       'time': 'Flamengo'
    },
    2:{
        'nickname': '@user2',
        'valor': '100,00',
        'time': 'Palmeiras'
    },
    3:{
        'nickname': '@user3',
        'valor': '200,00',
        'time': 'Internacional'       
    },
}

# Retorna uma lista com todas as apostas salvas.
# Retorna o nickname, o valor da aposta e o time apostado
def get_aposta():
    return aposta

# @param nickname, valor, time
def add_aposta(nickname, valor, time):
    print('entrou')
    query = f"""
    INSERT INTO apostas  VALUES
    ('{nickname}', '{valor}','{time}');
    """
    executeQuery(connection, query)

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

