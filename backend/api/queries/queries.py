from queries.core.db import createDBConnection, executeQuery, executeSelection, connection
from queries.utils.service import tutple_to_dict, format_date

from datetime import datetime



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


# Retorna uma lista com todas as apostas salvas.
# Retorna o nickname, o valor da aposta e o time apostado
def get_aposta():
    query = """
    SELECT * FROM aposta
    """
    apostas = users = executeSelection(connection, query)
    return apostas
