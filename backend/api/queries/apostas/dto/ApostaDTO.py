from dataclasses import dataclass

@dataclass()
class ApostaDTO:
    nickname: str
    email: str
    password: str
