DROP DATABASE IF EXISTS taxii78n5opqacc3;
CREATE DATABASE taxii78n5opqacc3;
USE taxii78n5opqacc3;


/* Create a table for all your star wars characters */
CREATE TABLE burgers (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR( 255) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY ( id )
);
