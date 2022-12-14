CREATE DATABASE `BetBall`;
use `BetBall`;

CREATE TABLE `usuario` (
    `nickname` varchar(50) PRIMARY KEY,
    `email` varchar(50) UNIQUE NOT NULL,
    `senha` varchar(100) NOT NULL
) DEFAULT CHARSET=utf8mb4;

CREATE TABLE `apostador` (
    nickname varchar(50) PRIMARY KEY REFERENCES usuario (nickname),
    `credito` int
 ) DEFAULT CHARSET=utf8mb4;

CREATE TABLE `colaborador` (
    nickname varchar(50) PRIMARY KEY REFERENCES usuario (nickname),
    `isAdmin` boolean NOT NULL DEFAULT 0
) DEFAULT CHARSET=utf8mb4;

CREATE TABLE `jogos` (
    `id_jogo` int PRIMARY KEY AUTO_INCREMENT, 
    `nick_colaborador` varchar(50),
    `data_fim_aposta` datetime,
    `isDone` boolean NOT NULL DEFAULT 0
) DEFAULT CHARSET=utf8mb4;

CREATE TABLE `times` (
    `nome` varchar(50),
    `id_time` varchar(50) PRIMARY KEY,
    `brasao` varchar(50)
) DEFAULT CHARSET=utf8mb4;

CREATE TABLE `participacao` (
    `id_time` varchar(50),
    `id_jogo` int,
    `gols` int DEFAULT 0,
    PRIMARY KEY(`id_time`,`id_jogo`)
) DEFAULT CHARSET=utf8mb4;

CREATE TABLE `aposta` (
    `nick_apostador` varchar(50),
    `id_jogo` int,
    `id_time` varchar(50),
    /*`credito_aposta` int NOT NULL,*/
    `valor_aposta` int NOT NULL,
    `valor_ganho` int,
    PRIMARY KEY(`id_time`,`id_jogo`,`nick_apostador`)
) DEFAULT CHARSET=utf8mb4;

CREATE TABLE `log` (
  `data` datetime(6) PRIMARY KEY default now(6),
  `texto` varchar(255)
) DEFAULT CHARSET=utf8mb4;

ALTER TABLE `jogos` ADD FOREIGN KEY (`nick_colaborador`) REFERENCES `colaborador` (`nickname`);
ALTER TABLE `participacao` ADD FOREIGN KEY (`id_time`) REFERENCES `times` (`id_time`);
ALTER TABLE `participacao` ADD FOREIGN KEY (`id_jogo`) REFERENCES `jogos` (`id_jogo`);
ALTER TABLE `aposta` ADD FOREIGN KEY (`nick_apostador`) REFERENCES `apostador` (`nickname`);
ALTER TABLE `aposta` ADD FOREIGN KEY (`id_jogo`) REFERENCES `participacao` (`id_jogo`);
ALTER TABLE `aposta` ADD FOREIGN KEY (`id_time`) REFERENCES `participacao` (`id_time`);

/*
-- BD Antigo Para Comparação --
CREATE TABLE `usuario` (
    `nickname` varchar(50) UNIQUE PRIMARY KEY,
    `email` varchar(50) UNIQUE NOT NULL,
    `senha` varchar(32) NOT NULL
) DEFAULT CHARSET=utf8mb4;

CREATE TABLE `aposta` (
    `nick_apostador` varchar(50),
    `id_jogo` varchar(50),
    `credito_aposta` int NOT NULL,
    `valor_aposta` int NOT NULL,
    `valor_ganho` int NOT NULL
) DEFAULT CHARSET=utf8mb4;

CREATE TABLE `apostador` (
    nickname varchar(50) PRIMARY KEY REFERENCES usuario (nickname),
    `credito` int
 ) DEFAULT CHARSET=utf8mb4;

CREATE TABLE `colaborador` (
    nickname varchar(50) PRIMARY KEY REFERENCES usuario (nickname),
    `isAdmin` boolean NOT NULL DEFAULT 0
) DEFAULT CHARSET=utf8mb4;

CREATE TABLE `jogos` (
    `id_jogo` varchar(50) PRIMARY KEY,
    `nick_colaborador` varchar(50),
    `data_fim_aposta` date,
    `data_jogo` date,
    `isDone` boolean
) DEFAULT CHARSET=utf8mb4;

CREATE TABLE `times` (
    `nome` varchar(50),
    `id_time` varchar(50) PRIMARY KEY,
    `brasao` varchar(50)
) DEFAULT CHARSET=utf8mb4;

CREATE TABLE `participacao` (
    `id_time` varchar(50),
    `id_jogo` varchar(50),
    `gols` int DEFAULT 0
) DEFAULT CHARSET=utf8mb4;

CREATE TABLE `log` (
  `data` datetime(6) PRIMARY KEY default now(6),
  `texto` varchar(255)
) DEFAULT CHARSET=utf8mb4;


ALTER TABLE `aposta` ADD FOREIGN KEY (`nick_apostador`) REFERENCES `usuario` (`nickname`);
ALTER TABLE `aposta` ADD FOREIGN KEY (`id_jogo`) REFERENCES `jogos` (`id_jogo`);
ALTER TABLE `participacao` ADD FOREIGN KEY (`id_time`) REFERENCES `times` (`id_time`);
ALTER TABLE `participacao` ADD FOREIGN KEY (`id_jogo`) REFERENCES `jogos` (`id_jogo`);
*/