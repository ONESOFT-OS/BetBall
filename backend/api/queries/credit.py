from queries.core.db import  executeQuery, executeSelection, connection

def get_balance(nickname):
    query = f"""
        SELECT credito FROM apostador WHERE nickname = '{nickname}'
    """
    return executeSelection(connection, query)

def user_deposit(nickname, value):
    query = f"""
    UPDATE apostador SET
    credito = credito + '{value}'
    WHERE nickname =  '{nickname}'
    """
    return executeQuery(connection, query)

def user_withdraw(nickname, value):
    query = f"""
    UPDATE apostador SET
    credito = credito - '{value}'
    WHERE nickname =  '{nickname}'
    """
    return executeQuery(connection, query)

