# Arquivo destinado a funções para manipulação de dados

from queries.users import get_user_by_email
from datetime import datetime

# Retorna um objeto date
# @param String no formato mes-dia-ano
# @return Date. 
def format_date(date_str):
    date_object = datetime.strptime(date_str, '%m-%d-%Y').date()
    print(type(date_object))
    print(date_object)  # printed in default format
    return date_object

# Retorna um dicionário de uma instância escolhida.
# @param chaves desse dicionário.
# @return Dicionário. Os atributos passado por parâmetro.

def tutple_to_dict(*atributos, tupla):
    dicionario = {}
    index_tupla = 0
    if len(atributos) == len(tupla):
        for atributo in atributos:
            dicionario[atributo]=tupla[index_tupla]
            index_tupla+=1
    return dicionario
format_date('09-10-2022')


# Retorna um booleano correspondente a existência do usuário.
# @param email do usuário.
# @return Booleano. 
def user_exists(email):
    return len(get_user_by_email(email))!=0