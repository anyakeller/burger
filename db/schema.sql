DROP DATABASE IF EXISTS mgmdi30n2d7qk1ue;
CREATE DATABASE mgmdi30n2d7qk1ue;
USE mgmdi30n2d7qk1ue;


/* Create a table for all your star wars characters */
CREATE TABLE burgers (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR( 255) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY ( id )
);
