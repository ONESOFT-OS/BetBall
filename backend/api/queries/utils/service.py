# Arquivo destinado a funções para manipulação de dados


from datetime import datetime

datetime_str = '09/19/18'

datetime_object = datetime.strptime(datetime_str, '%m/%d/%y')

print(type(datetime_object))
print(datetime_object)  # printed in default format

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

# Retorna um objeto date
# @param String no formato mes/dia/ano
# @return Date. 
def format_date(date_string):
    return datetime.strptime(date_string, '%m/%d/%y')
    