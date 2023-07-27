CREATE DATABASE moviedb;
USE moviedb;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `release_year` varchar(255) DEFAULT NULL,
  `published` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `roles` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`roleId`,`userId`),
  KEY `userId` (`userId`),
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

Insert into movies values (1,"John Wick : Chapter 4", "action", "JW4", "1 h 2 m" , "It’s a recent movie", "2023",false, "2023-06-14","2023-06-14");
Insert into movies values (2,"Little Mermaid", "musical", "LM", "2 h 20 m" , "It’s a old movie", "1989",false, "2023-06-14","2023-06-14");

Insert into roles values (1,"admin", "2023-06-14","2023-06-14");
Insert into roles values (2,"moderator", "2023-06-14","2023-06-14");
Insert into roles values (3,"user", "2023-06-14","2023-06-14");

Insert into users values (1,"admin0" , "admin0@gmail.com" , " $2a$08$TyWGXQdXEkjMtgGya9vR1ervs6o.2AFok/I2hgKCvdGimGfIequSC
","2023-06-14", "2023-06-14");
Insert into users values (2,"mod0" , "mod0@gmail.com" , " $2a$08$TyWGXQdXEkjMtgGya9vR1ervs6o.2AFok/I2hgKCvdGimGfIequSC
","2023-06-14", "2023-06-14");
Insert into users values (3,"user0" , "user0@gmail.com" , " $2a$08$TyWGXQdXEkjMtgGya9vR1ervs6o.2AFok/I2hgKCvdGimGfIequSC
","2023-06-14", "2023-06-14");

Insert into user_roles values ("2023-06-14","2023-06-14",1,1);
Insert into user_roles values ("2023-06-14","2023-06-14",2,2);
Insert into user_roles values ("2023-06-14","2023-06-14",3,3);
