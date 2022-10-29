from api.queries.core.db import createDBConnection, executeQuery, executeSelection

connection = createDBConnection("localhost", "root", '', 'betball')


class UsersRepository:
    def create(self, UserDTO):
        query = f"""
        INSERT INTO usuario(nickname, email, senha) VALUES
        (
            '{UserDTO.nickname}',
            '{UserDTO.email}',
            '{UserDTO.password}'
        );
        """
        executeQuery(connection, query)

    def find_by_id(self, _id):
        query = f"""
        SELECT * FROM usuario WHERE id = '{_id}'
        """
        executeQuery(connection, query)

    def update(self, _id, UserDTO):
        query = f"""
        UPDATE usuario SET 
        (
            nickname = '{UserDTO.nickname}',
            email = '{UserDTO.email}',
            password = '{UserDTO.password}',
        )
        WHERE ID =  '{_id}'
        """

        executeQuery(connection, query)

    def delete(self, _id):
        query = f""" DELETE FROM usuario WHERE id = '{_id}' """

        executeQuery(connection, query)
