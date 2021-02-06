-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- 생성 시간: 21-02-06 11:19
-- 서버 버전: 5.7.32
-- PHP 버전: 7.3.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `cdance`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `restaurant_contact`
--

CREATE TABLE `restaurant_contact` (
  `idx` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `interest` varchar(250) NOT NULL,
  `message` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='restaurant_contact';

--
-- 테이블의 덤프 데이터 `restaurant_contact`
--

INSERT INTO `restaurant_contact` (`idx`, `name`, `email`, `interest`, `message`) VALUES
(1, 'Lee Soon', 'Lee@restaurant.com', 'oil pasta', 'group reservation for 10');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `restaurant_contact`
--
ALTER TABLE `restaurant_contact`
  ADD PRIMARY KEY (`idx`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `restaurant_contact`
--
ALTER TABLE `restaurant_contact`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
