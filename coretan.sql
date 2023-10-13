CREATE DATABASE restoran;
USE restoran;

CREATE TABLE menu(
    id_menu     CHAR(4),
    name_menu   VARCHAR(50),
    type_menu  VARCHAR(50),
    image      VARCHAR(50),
    description   VARCHAR (255),
    price       INT,
    PRIMARY KEY(id_menu)
);

CREATE TABLE user(
    id_user INT AUTO_INCREMENT,
    email VARCHAR(50),
    firstname VARCHAR(25),
    lastname VARCHAR(25),
    gender CHAR(1),
    birth DATE,
    password VARCHAR(128),

    roles BOOLEAN,
    PRIMARY KEY(id_user)

);

CREATE TABLE order(
    id_order INT AUTO_INCREMENT,
    id_pembeli INT,
    id menu,
    FOREIGN KEY(id_pembeli) REFERENCES user (id_user);
);

