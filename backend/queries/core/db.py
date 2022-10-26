from databases import Database
from env import DB_USER, DB_PASSWORD, DB_HOST, DB_NAME

db_connect_string = 'mysql://%s:%s@%s/%s?charset=utf8' % (
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
)

database = Database(db_connect_string)
