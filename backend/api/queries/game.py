from queries.core.db import createDBConnection, executeQuery, executeSelection, connection
from queries.utils.service import format_date


# @param game_id, nickname do colaborador, data de inicio do jogo, data final, status do jogo
def add_game(game_id, collaborator_nick, start_date, end_date, isDone=False):
    print('ADD GAME')
    datas = format_date(start_date)
    datae = format_date(end_date)
    query = f"""
    INSERT INTO jogos VALUES
    (
        '{game_id}',
        '{collaborator_nick}',
        '{datas}',
        '{datae}',
        '{isDone}'
    );
    """
    executeQuery(connection, query)


def list_game_by_id(game_id):
    query = f"""
        SELECT * FROM jogos WHERE id_jogo = '{game_id}'
    """
    executeQuery(connection, query)
