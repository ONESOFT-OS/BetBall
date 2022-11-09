from api.queries.core.db import createDBConnection, executeQuery, executeSelection

connection = createDBConnection("localhost", "root", '', 'betball')


class ApostaRepository:
    def create(self, ApostaDTO):
        query = f"""
            INSERT INTO apostas  VALUES
            ('{ApostaDTO.nickname}', '{ApostaDTO.valor}','{ApostaDTO.time}');
            """
        executeQuery(connection, query)

    def find_by_id(self, _id):
        query = f"""
        SELECT * FROM apostas WHERE id = '{_id}'
        """
        executeQuery(connection, query)

    def update(self, _id, ApostaDTO):
        query = f"""
        UPDATE apostas SET 
        (
            nickname = '{ApostaDTO.nickname}',
            valor = '{ApostaDTO.valor}',
            time = '{ApostaDTO.time}',
        )
        WHERE ID =  '{_id}'
        """

        executeQuery(connection, query)

    def delete(self, _id):
        query = f""" DELETE FROM apostas WHERE id = '{_id}' """

        executeQuery(connection, query)
