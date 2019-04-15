-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: kinduct
-- ------------------------------------------------------
-- Server version	5.7.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `player`
--

DROP TABLE IF EXISTS `player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `player` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(10) unsigned NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `province` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player`
--

LOCK TABLES `player` WRITE;
/*!40000 ALTER TABLE `player` DISABLE KEYS */;
INSERT INTO `player` VALUES (68,'b',0,'b','b','b'),(69,'',0,'','',''),(70,'',0,'','',''),(71,'b',0,'b','b','b'),(72,'',0,'','',''),(73,'',0,'','',''),(74,'balakjd',29,'halifax','TasN','IasN'),(75,'bjd',29,'halifax','TasN','IasN'),(76,'vatsa',29,'','TasN','IasN'),(77,'bala',29,'halifax','TasN','IasN'),(78,'vatsa',29,'halifax','TasN','IasN'),(79,'bala',29,'halifax','TasN','IasN'),(80,'jaggu',29,'halifax','TasN','IasN'),(81,'xhellerx',99,'halifax','TasN','IasN'),(82,'xhellerx',99,'halifax','TasN','IasN'),(83,'yhellerx',299,'halifax','TasN','IasN'),(84,'xhellerx',99,'halifax','TasN','IasN'),(85,'pphellerx',299,'halifax','TasN','IasN'),(86,'xhellerx',99,'halifax','TasN','IasN'),(87,'pphellerx',299,'halifax','TasN','IasN'),(88,'xhellerx',99,'halifax','TasN','IasN'),(89,'xhellerx',99,'halifax','TasN','IasN'),(90,'xhellerx',99,'halifax','TasN','IasN'),(91,'woooo',299,'halifax','TasN','IasN'),(92,'xhellerx',99,'halifax','TasN','IasN'),(93,'xhellerx',99,'halifax','TasN','IasN'),(94,'xhellerx',99,'halifax','TasN','IasN'),(95,'poooo',299,'BC','TasN','IasN'),(96,'xhellerx',99,'halifax','TasN','IasN'),(97,'xhellerx',99,'halifax','TasN','IasN'),(98,'xhellerx',99,'halifax','TasN','IasN'),(99,'lpoooo',299,'Moncton','TasN','CA'),(100,'vatsa',29,'halifax','TasN','IasN'),(101,'vatsa',29,'halifax','TasN','IasN'),(102,'vatsa',29,'halifax','TasN','IasN'),(103,'xhellerx',99,'halifax','TasN','IasN'),(104,'lol',299,'Moncton','TasN','CA'),(105,'xhellerx',99,'halifax','TasN','IasN'),(106,'xhellerx',99,'halifax','TasN','IasN'),(107,'xhellerx',99,'halifax','TasN','IasN'),(108,'vatsa',29,'halifax','TasN','IasN'),(109,'vatsa',29,'halifax','TasN','IasN'),(110,'vatsa',29,'halifax','TasN','IasN'),(111,'vatsa',29,'halifax','TasN','IasN'),(112,'vatsa',29,'halifax','TasN','IasN'),(113,'vatsa',29,'halifax','TasN','IasN'),(114,'vatsa',29,'halifax','TasN','IasN'),(115,'vatsa',29,'halifax','TasN','IasN'),(116,'vatsa',29,'halifax','TasN','IasN'),(117,'vatsa',29,'halifax','TasN','IasN'),(118,'vatsa',29,'halifax','TasN','IasN'),(119,'vatsa',29,'halifax','TasN','IasN'),(120,'vatsa',29,'halifax','TasN','IasN'),(121,'vatsa',29,'halifax','TasN','IasN'),(122,'vatsa',29,'halifax','TasN','IasN'),(123,'vatsa',29,'halifax','TasN','IasN'),(124,'vatsa',29,'halifax','TasN','IasN'),(125,'bala',29,'halifax','TasN','IasN');
/*!40000 ALTER TABLE `player` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-14 22:02:36
