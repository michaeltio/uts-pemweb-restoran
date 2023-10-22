CREATE DATABASE restoran;
USE restoran;

CREATE TABLE menu(
    id_menu     INT AUTO_INCREMENT,
    img_menu    VARCHAR(50),
    name_menu   VARCHAR(50),
    desc_menu   VARCHAR (255),
    type_menu   VARCHAR(50),
    price       INT,
    PRIMARY KEY(id_menu)
);

CREATE TABLE user(
    id_user     INT AUTO_INCREMENT,
    firstname   VARCHAR(25),
    lastname    VARCHAR(25),
    email       VARCHAR(50),
    password    VARCHAR(128),
    gender      CHAR(1),
    birth       DATE,
    roles       BOOLEAN,
    PRIMARY KEY(id_user)
);

CREATE TABLE order(
    id_order    INT AUTO_INCREMENT,
    id_user     INT,
    id_menu     INT,
    isFinish    INT,
    PRIMARY KEY(id_order),
    FOREIGN KEY(id_user) REFERENCES user (id_user),
    FOREIGN KEY(id_menu) REFERENCES user (id_menu),
);

