from queries.core.db import executeQuery, executeSelection, connection
from queries.utils.service import format_date, tutple_to_dict


def addParticipation(id_team, id_game):
    queryParticipation = f"""
    INSERT INTO participacao (id_time, id_jogo) VALUES 
    (
        '{id_team}',
        {id_game}
    );
    """
    response = executeQuery(connection, queryParticipation)
    return