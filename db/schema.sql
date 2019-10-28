DROP DATABASE IF EXISTS JAWS_DB_NAME;
CREATE DATABASE JAWS_DB_NAME;
USE JAWS_DB_NAME;


/* Create a table for all your star wars characters */
CREATE TABLE burgers (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR( 255) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY ( id )
);
