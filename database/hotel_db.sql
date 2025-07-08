-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 08 juil. 2025 à 14:42
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
(1, 'hello world hello', 'jdhjkdsjndj', 678.00, '1751976711224-Full-Stack-Developer.jpg', 3.5),
(2, 'badroom', 'its the best apartment in my hotel', 50000.00, 'apartment.jpeg', 4.5),
(3, 'apartment', 'its the best apartment in my hotel', 6000.00, 'apartment.jpeg', 4.5),
(4, 'apartment', 'its the best apartment in my hotel', 3000.00, 'apartment.jpeg', 4.5),
(5, 'apartment', 'its the best apartment in my hotel', 7000.00, 'apartment.jpeg', 4.5),
(6, 'apartment', 'its the best apartment in my hotel', 6500.00, 'apartment.jpeg', 4.5),
(7, 'apartment', 'its the best apartment in my hotel', 3000.00, 'apartment.jpeg', 4.5),
(8, 'apartment', 'its the best apartment in my hotel', 7005.00, 'apartment.jpeg', 4.5),
(9, 'apartment', 'its the best apartment in my hotel', 6000.00, 'apartment.jpeg', 4.5),
(10, 'apartment', 'its the best apartment in my hotel', 3000.00, 'apartment.jpeg', 4.5),
(12, 'test', 'jdhusd', 7676.00, '1751922542035-Full-Stack-Developer.jpg', 4.0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
