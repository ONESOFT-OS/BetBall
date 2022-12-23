from passlib.context import CryptContext

pwd_context = CryptContext(schemes=['bcrypt'])


# Retorna o hash de uma senha
# @return String. 
def generate_hash(password):
    return pwd_context.hash(password)


# Verifica se um determinado hash corresponde a uma determinada senha.
# @return Boolean. 
def verify_hash(password, _hash):
    return pwd_context.verify(password, _hash)
