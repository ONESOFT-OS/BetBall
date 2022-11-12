import mysql.connector
from mysql.connector import Error


def createDBConnection(host_name, user_name, user_password, db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name
        )
        print("MySQL Database connection successful")
    except Error as err:
        print(f"Error: '{err}'")

    return connection

def executeQuery(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        return True
    except Error as err:
        return err

def executeSelection(connection,query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        myresult = cursor.fetchall()
        return myresult
    except Error as err:
        return err

connection = createDBConnection("localhost", "root", '', 'betball')
