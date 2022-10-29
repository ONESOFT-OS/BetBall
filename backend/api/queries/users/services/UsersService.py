from api.queries.users.repositories import UsersRepository


def get_user_by_id(id):
    return UsersRepository().getById(id)
