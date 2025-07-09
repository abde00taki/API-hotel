-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 10 juil. 2025 à 01:49
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `hotel_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `claient`
--

CREATE TABLE `claient` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `message` varchar(200) DEFAULT NULL,
  `statuss` varchar(10) DEFAULT 'unread'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `claient`
--

INSERT INTO `claient` (`id`, `name`, `email`, `message`, `statuss`) VALUES
(4, 'test', 'abde@gmail.com', 'sjadhashs', 'readed'),
(7, 'jalal sadeq', 'jalalsadeq724@gmail.com', 'hello ma boy', 'readed'),
(11, 'ahmed', 'ahmed@gmail.com', 'hellow abde rrahmane', 'readed'),
(16, 'sdisdiauy', 'jhfdsiu@dufyiu.jhdu', 'jkhdfiudy', 'readed'),
(17, 'siii', 'iiiii@shjjs.ooo', 'iiiii\n', 'readed'),
(22, 'abde rrahmane', 'abde@gmail.com', 'jndsjisjdndslkjoidsjij', 'readed');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(40) NOT NULL,
  `desc` text NOT NULL,
  `price` decimal(9,2) NOT NULL,
  `image` varchar(100) NOT NULL,
  `star` decimal(2,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `title`, `desc`, `price`, `image`, `star`) VALUES
(2, 'badroom', 'its the best apartment in our hotel', 50000.00, '1751999747622-badroom1.jpg', 4.5),
(3, 'apartment', 'its the best apartment in ourhotel', 6000.00, '1751999799033-badroom2.jpg', 4.5),
(4, 'apartment', 'its the best apartment in ourhotel', 3000.00, '1751999824947-badroom3.jpg', 4.5),
(5, 'apartment', 'its the best apartment in ourhotel', 7000.00, '1751999846267-badroom4.jpg', 4.5),
(6, 'apartment', 'its the best apartment in our hotel', 6500.00, '1751999870330-badroom5.jpg', 4.5),
(7, '2 bed', 'its the best badroomin our hotel', 3000.00, '1751999902598-badroom6.jpg', 4.5),
(8, 'apartment', 'its the best apartment in my hotel', 7005.00, '1751999925604-badroom2.jpg', 4.5),
(9, 'apartment', 'its the best apartment in my hotel', 6000.00, '1751999941582-badroom4.jpg', 4.5),
(10, 'apartment', 'its the best apartment in my hotel', 3000.00, '1751999958080-badroom1.jpg', 4.5);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `claient`
--
ALTER TABLE `claient`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `claient`
--
ALTER TABLE `claient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
