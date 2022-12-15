from queries.core.db import  executeQuery, executeSelection, connection

def user_deposit(nickname, value):
    query = f"""
    UPDATE apostador SET
    credito = credito + '{value}'
    WHERE nickname =  '{nickname}'
    """
    return executeQuery(connection, query)

