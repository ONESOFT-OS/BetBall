from dataclasses import dataclass


@dataclass
class UserDTO:
    nickname: str
    email: str
    password: str
