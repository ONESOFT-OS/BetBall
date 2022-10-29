# Arquivo destinado a funções para manipulação de dados


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
