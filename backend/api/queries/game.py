from queries.core.db import createDBConnection, executeQuery, executeSelection, connection
from queries.utils.service import format_date, tutple_to_dict


# @param game_id, nickname do colaborador, data de inicio do jogo, data final, status do jogo
def add_game(collaborator_nick, end_date, id_team1, id_team2, isDone=False):
    print('ADD GAME')
    date = format_date(end_date)
    queryNewGame = f"""
    INSERT INTO jogos (nick_colaborador, data_fim_aposta, isDone) VALUES
    (
        '{collaborator_nick}',
        '{date}',
        '{isDone}'
    );
    """
    executeQuery(connection, queryNewGame)

    queryGetNewGame = f"""
    SELECT MAX (id_jogo)
    FROM jogos
    """
    newGame = executeSelection(connection, queryGetNewGame)
    id_NewGame = newGame.index(0)[0]

    queryNewParticipation = f"""
    INSERT INTO participacao (id_time, id_jogo) VALUES
    (
        '{id_team1}',
        '{id_NewGame}',
    );
    """
    executeQuery(connection, queryNewParticipation)

    queryNewParticipation = f"""
    INSERT INTO participacao (id_time, id_jogo) VALUES
    (
        '{id_team2}',
        '{id_NewGame}',
    );
    """
    executeQuery(connection, queryNewParticipation)

{
    "game_id":"",
    "out_team": 
        {
            "name": "",
            "current_goals": 0,
            "image_src": ""
        },
    "home_team":
        {
            "name": "",
            "current_goals": 0,
            "image_src": ""
        }
}

# Retorna as informações de um jogo cadastrado
# @return Dicionário. Id do jogo, times jogando, placar atual.
def get_poster_by_id(game_id):
    query = f"""
    SELECT * FROM participacao WHERE id_jogo = '{ game_id }'
    """
    partidas = executeSelection(connection, query)
    partida_dict = [tutple_to_dict('team_id', 'game_id', 'goals', tupla=partida) for partida in partidas]
    

# Retorna uma lista com todos os jogos cadastrados.
# @return Lista de dicionário. Id do jogo, times jogando, placar atual.
def get_games():
    pass

def list_game_by_id(game_id):
    query = f"""
        SELECT * FROM jogos WHERE id_jogo = '{game_id}'
    """
    executeQuery(connection, query)
