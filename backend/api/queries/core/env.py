import os

APP_ENV = os.environ.get("APP_ENV", "development")

DB_USER = os.environ.get("root")
DB_PASSWORD = os.environ.get("")
DB_HOST = os.environ.get("localhost")
DB_PORT = os.environ.get("MYSQL_PORT")
DB_NAME = os.environ.get("betball")