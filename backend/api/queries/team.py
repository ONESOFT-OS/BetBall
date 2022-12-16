from queries.core.db import executeQuery, executeSelection, connection
from queries.utils.service import tutple_to_dict


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


# Retorna um dicionario com as informações de um time cadastrado.
# @return Dicionário. Nome, id, diretório da imagem.
def get_club_by_id(club_id):
    query = f"""
    SELECT * FROM times WHERE id_time = '{ club_id }'
    """
    club = executeSelection(connection, query)
    club_dict = tutple_to_dict('team_name', 'team_id', 'image_src', tupla=club[0])
    return club_dict


def get_clubs_by_game(game_id):
    query = f"""
        SELECT times.id_time, times.nome, times.brasao, participacao.gols
        FROM (participacao JOIN times ON times.id_time = participacao.id_time)
        where participacao.id_jogo = {game_id}
    """
    clubs = executeSelection(connection, query)
    return [tutple_to_dict('club_id', 'club_name', 'photo_link', tupla=time) for time in clubs]