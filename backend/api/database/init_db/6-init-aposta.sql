use `BetBall`;
SET character_set_client = utf8;
INSERT INTO aposta (nick_apostador, id_jogo, id_time, valor_aposta, valor_ganho) VALUES
    ('User1', 1, '2', 100,  200),
    ('User2', 1, '1', 100,    0),
    ('User1', 3, '4', 200, null),
    ('User2', 3, '5', 300, null),
    ('User3', 3, '5',  50, null);
    