from queries.core.db import executeQuery, executeSelection, connection
from queries.utils.service import format_date, tutple_to_dict
from queries.team import get_club_by_id

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


# Retorna as informações de uma match cadastrada
# @return Dicionário. Id do jogo, times jogando, placar atual.
def get_match_by_id(game_id):
    data = {
            "game_id":game_id,
            "teams": {
                    {
                        "name": "",
                        "current_goals": 0,
                        "image_src": ""
                    },

                    {
                        "name": "",
                        "current_goals": 0,
                        "image_src": ""
                    }
                } 
    }

    query = f"""
    SELECT * FROM participacao WHERE id_jogo = '{ game_id }'
    """
    matchs = executeSelection(connection, query)
    match_list_dict = [tutple_to_dict('team_id', 'game_id', 'goals', tupla=match) for match in matchs]

    for match in match_list_dict:
        club = get_club_by_id(match['team_id'])
        club['goals'] = match['goals']
        data['teams'].add(club)
    return data


# Retorna uma lista com todos os jogos cadastrados.
# @return Lista de dicionário. Id do jogo, times jogando, placar atual.
def get_games():
    pass

def list_game_by_id(game_id):
    query = f"""
        SELECT * FROM jogos WHERE id_jogo = '{game_id}'
    """
    executeQuery(connection, query)
