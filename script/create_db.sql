DROP TABLE IF EXISTS FORUM_LIKES;
DROP TABLE IF EXISTS FORUM_MESSAGES;
DROP TABLE IF EXISTS FORUM_CHANNELS;
DROP SEQUENCE IF EXISTS FORUM_CHANNELS_SEQ_ID;

create table FORUM_MESSAGES (
  idmessage INT PRIMARY KEY NOT NULL,
  texte VARCHAR(512),
  dateEnvoi TIMESTAMP,
  idcours VARCHAR(50),
  auteur VARCHAR(75)
);

create table FORUM_LIKES (
  idmessage INT,
  auteur VARCHAR(75),
  PRIMARY KEY (idmessage,auteur),
  FOREIGN KEY (idmessage) REFERENCES FORUM_MESSAGES(idmessage)
);

create sequence forum_channels_seq_id start with 1;
CREATE TABLE forum_channels (
    id int DEFAULT NEXTVAL('forum_channels_seq_id'),
    coursname varchar unique
  );

insert into FORUM_MESSAGES (idmessage, texte, dateEnvoi, idcours, auteur) values (1, 'suscipit nulla elit ac nulla sed vel enim sit amet', '2020-04-06 20:30:58', 'in', 'Martin');
insert into FORUM_MESSAGES (idmessage, texte, dateEnvoi, idcours, auteur) values (2, 'sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis', '2020-04-05 06:35:31', 'vulputate ut', 'Paul');
insert into FORUM_MESSAGES (idmessage, texte, dateEnvoi, idcours, auteur) values (3, 'consequat ut nulla sed accumsan felis ut at dolor quis', '2020-03-26 13:14:04', 'pulvinar nulla', 'Pierre');
insert into FORUM_MESSAGES (idmessage, texte, dateEnvoi, idcours, auteur) values (4, 'nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet', '2020-03-24 15:39:40', 'dui vel sem sed sagittis', 'Jacques');
insert into FORUM_MESSAGES (idmessage, texte, dateEnvoi, idcours, auteur) values (5, 'fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis', '2020-03-19 13:49:13', 'tempor turpis', 'Tommy');
insert into FORUM_MESSAGES (idmessage, texte, dateEnvoi, idcours, auteur) values (6, 'duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce', '2020-03-19 17:30:05', 'ac', 'Pierre');
insert into FORUM_MESSAGES (idmessage, texte, dateEnvoi, idcours, auteur) values (7, 'venenatis tristique fusce congue diam id ornare imperdiet sapien', '2020-03-26 14:29:25', 'massa id lobortis', 'Tommy');
insert into FORUM_MESSAGES (idmessage, texte, dateEnvoi, idcours, auteur) values (8, 'fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc', '2020-03-31 03:58:06', 'sodales scelerisque', 'Paul');
insert into FORUM_MESSAGES (idmessage, texte, dateEnvoi, idcours, auteur) values (9, 'vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac', '2020-04-06 10:30:51', 'vehicula condimentum curabitur in', 'Jacques');
insert into FORUM_MESSAGES (idmessage, texte, dateEnvoi, idcours, auteur) values (10, 'congue eget semper rutrum nulla nunc purus phasellus in felis donec', '2020-03-18 14:03:16', 'volutpat convallis morbi', 'Martin');

insert into FORUM_MESSAGES (idmessage, texte, dateEnvoi, idcours, auteur) values (-1, 'Texte de test Bis', '2020-02-01 20:30:58', 'Cours de test', 'Auteur de test');
insert into FORUM_MESSAGES (idmessage, texte, dateEnvoi, idcours, auteur) values (0, 'Texte de test', '2020-01-01 20:30:58', 'Cours de test', 'Auteur de test');

insert into FORUM_LIKES (idmessage, auteur) values (1, 'Tommy');
insert into FORUM_LIKES (idmessage, auteur) values (2, 'Paul');
insert into FORUM_LIKES (idmessage, auteur) values (2, 'Pierre');
insert into FORUM_LIKES (idmessage, auteur) values (10, 'Paul');
insert into FORUM_LIKES (idmessage, auteur) values (4, 'Tommy');
insert into FORUM_LIKES (idmessage, auteur) values (2, 'Tommy');
insert into FORUM_LIKES (idmessage, auteur) values (1, 'Jacques');
insert into FORUM_LIKES (idmessage, auteur) values (6, 'Pierre');
insert into FORUM_LIKES (idmessage, auteur) values (8, 'Tommy');
insert into FORUM_LIKES (idmessage, auteur) values (6, 'Tommy');
insert into FORUM_LIKES (idmessage, auteur) values (0, 'Auteur de test bis');
insert into FORUM_LIKES (idmessage, auteur) values (0, 'Auteur de test');