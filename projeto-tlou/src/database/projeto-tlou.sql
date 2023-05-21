CREATE DATABASE projetoTlou;
USE projetoTlou;
-- DROP DATABASE projetoTlou;

CREATE TABLE user (
iduser INT PRIMARY KEY AUTO_INCREMENT
, username VARCHAR(45) NOT NULL
, email VARCHAR(100) NOT NULL
, password VARCHAR(45) NOT NULL
);
SELECT * FROM user;
TRUNCATE TABLE user;

CREATE TABLE quiz (
idquiz INT PRIMARY KEY  AUTO_INCREMENT,
name VARCHAR(90) NOT NULL,
descQuiz VARCHAR(3000) NOT NULL
);
SELECT * FROM quiz;
TRUNCATE TABLE quiz;

CREATE TABLE question (
idquestion INT AUTO_INCREMENT,
question INT NOT NULL, CONSTRAINT chkQuestion CHECK (question IN(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)),
answer INT NOT NULL, CONSTRAINT chkAnswer CHECK (answer IN(1, 2, 3, 4)),
fkQuiz_question INT, CONSTRAINT fkQuiz_question FOREIGN KEY (fkQuiz_question) REFERENCES quiz(idquiz),
CONSTRAINT pkQuestion PRIMARY KEY (idquestion, fkQuiz_question)
);
SELECT * FROM question;
TRUNCATE TABLE question;

CREATE TABLE answer_user (
idanswer_user INT,
answer INT NOT NULL, CONSTRAINT chkAnswer_user CHECK (answer IN(1, 2, 3, 4)),
status TINYINT NOT NULL, CONSTRAINT chkStatus CHECK (status IN(0, 1)),
timeSend TIME NOT NULL,
fkQuiz_answer INT, CONSTRAINT fkQuiz_answer FOREIGN KEY (fkQuiz_answer) REFERENCES quiz(idquiz),
fkQuestion INT, CONSTRAINT fkQuestion_answer FOREIGN KEY (fkQuestion) REFERENCES question(idquestion),
fkUser_answer INT, CONSTRAINT fkUser_answer FOREIGN KEY (fkUser_answer) REFERENCES user(iduser),
CONSTRAINT pkAnswer_user PRIMARY KEY (idanswer_user, fkQuiz_answer, fkQuestion, fkUser_answer)
);
SELECT * FROM answer_user;
TRUNCATE TABLE answer_user;

CREATE TABLE quiz_like (
idquiz_like INT,
likeQuiz TINYINT NOT NULL DEFAULT 0,  CONSTRAINT chkLike CHECK (likeQuiz IN(0, 1)),
fkQuiz INT, CONSTRAINT fkQuiz_like FOREIGN KEY (fkQuiz) REFERENCES quiz(idquiz),
fkUser INT, CONSTRAINT fkUser_like FOREIGN KEY (fkUser) REFERENCES user(iduser),
CONSTRAINT pkQuiz_like PRIMARY KEY (idquiz_like, fkQuiz, fkUser)
);
SELECT * FROM quiz_like;
TRUNCATE TABLE quiz_like;

-- INSERTS:
-- User Padrão
INSERT INTO user(username, email, password) VALUES
('admin', 'admin@gmail.com', 1234),
('lulugas', 'lulugas@gmail.com', 1234);
-- Quiz Geral
INSERT INTO quiz(name, descQuiz) VALUES
('Quiz Geral', 'Pronto para desafiar seus conhecimentos sobre a série de jogos de The Last of Us?! Este quiz contém 12 perguntas com quatro possíveis respostas para cada uma delas, sendo as perguntas baseadas na série e no game de The Last of Us.');
-- Questões do Quiz Geral
INSERT INTO question(question, answer, fkQuiz_question) VALUES
(1, 4, 1), (2, 2, 1), (3, 1, 1), (4, 3, 1),
(5, 3, 1), (6, 3, 1), (7, 4, 1), (8, 2, 1),
(9, 4, 1), (10, 2, 1), (11, 2, 1), (12, 1, 1);

-- Quiz gabaritado pelo User 1
INSERT INTO answer_user VALUES
(1, 4, 1, '10:30:00', 1, 1, 1),
(1, 2, 1, '10:30:00', 1, 2, 1),
(1, 1, 1, '10:30:00', 1, 3, 1),
(1, 3, 1, '10:30:00', 1, 4, 1),
(1, 3, 1, '10:30:00', 1, 5, 1),
(1, 3, 1, '10:30:00', 1, 6, 1),
(1, 4, 1, '10:30:00', 1, 7, 1),
(1, 2, 1, '10:30:00', 1, 8, 1),
(1, 4, 1, '10:30:00', 1, 9, 1),
(1, 2, 1, '10:30:00', 1, 10, 1),
(1, 2, 1, '10:30:00', 1, 11, 1),
(1, 1, 1, '10:30:00', 1, 12, 1);
-- Quiz feito, porém não gabaritado pelo user 2
INSERT INTO answer_user VALUES
(1, 4, 1, '10:31:00', 1, 1, 2),
(1, 2, 1, '10:31:00', 1, 2, 2),
(1, 2, 0, '10:31:00', 1, 3, 2),
(1, 4, 0, '10:31:00', 1, 4, 2),
(1, 3, 1, '10:31:00', 1, 5, 2),
(1, 3, 1, '10:31:00', 1, 6, 2),
(1, 1, 0, '10:31:00', 1, 7, 2),
(1, 2, 1, '10:31:00', 1, 8, 2),
(1, 4, 1, '10:31:00', 1, 9, 2),
(1, 2, 1, '10:31:00', 1, 10, 2),
(1, 3, 0, '10:31:00', 1, 11, 2),
(1, 2, 0, '10:31:00', 1, 12, 2);

-- Curtidas no Quiz Geral
INSERT INTO quiz_like VALUES
(1, 1, 1, 1),
(1, 1, 1, 2);