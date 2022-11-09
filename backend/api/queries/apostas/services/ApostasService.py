from api.queries.apostas.repositories import ApostaRepository

def get_aposta_by_id(id):
    return ApostaRepository.find_by_id(id)