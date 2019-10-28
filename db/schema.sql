DROP DATABASE IF EXISTS ijnsbuuvulvy1q8k;
CREATE DATABASE ijnsbuuvulvy1q8k;
USE ijnsbuuvulvy1q8k;


/* Create a table for all your star wars characters */
CREATE TABLE burgers (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR( 255) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY ( id )
);
