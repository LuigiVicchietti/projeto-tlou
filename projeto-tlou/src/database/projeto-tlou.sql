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
name VARCHAR(90) NOT NULL
);
SELECT * FROM quiz;
TRUNCATE TABLE quiz;

CREATE TABLE question (
idquestion INT AUTO_INCREMENT,
question INT NOT NULL,
answer INT NOT NULL, CONSTRAINT chkAnswer CHECK (answer IN(1, 2, 3,  4, 5)),
fkQuiz_question INT, CONSTRAINT fkQuiz_question FOREIGN KEY (fkQuiz_question) REFERENCES quiz(idquiz),
CONSTRAINT pkQuestion PRIMARY KEY (idquestion, fkQuiz_question)
);
SELECT * FROM question;
TRUNCATE TABLE question;

CREATE TABLE answer_user (
idanswer_user INT,
answer INT NOT NULL, CONSTRAINT chkAnswer_user CHECK (answer IN(1, 2, 3,  4, 5)),
status TINYINT NOT NULL, CONSTRAINT chkStatus CHECK (status IN(0, 1)),
timeSend DATETIME NOT NULL,
fkQuiz_answer INT, CONSTRAINT fkQuiz_answer FOREIGN KEY (fkQuiz_answer) REFERENCES quiz(idquiz),
fkQuestion INT, CONSTRAINT fkQuestion_answer FOREIGN KEY (fkQuestion) REFERENCES question(idquestion),
fkUser_answer INT, CONSTRAINT fkUser_answer FOREIGN KEY (fkUser_answer) REFERENCES user(iduser),
CONSTRAINT pkAnswer_user PRIMARY KEY (idanswer_user, fkQuestion, fkUser_answer)
);
SELECT * FROM answer_user;
TRUNCATE TABLE answer_user;

CREATE TABLE quiz_finish (
idquiz_finish INT,
timeFinish DATETIME NOT NULL,
likeQuiz TINYINT NOT NULL DEFAULT 0,  CONSTRAINT chkLike CHECK (likeQuiz IN(0, 1)),
fkQuiz INT, CONSTRAINT fkQuiz_finish FOREIGN KEY (fkQuiz) REFERENCES quiz(idquiz),
fkUser INT, CONSTRAINT fkUser_finish FOREIGN KEY (fkUser) REFERENCES user(iduser)
);
SELECT * FROM quiz_finish;
TRUNCATE TABLE quiz_finish;