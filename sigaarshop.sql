-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Gegenereerd op: 28 jan 2022 om 14:56
-- Serverversie: 8.0.27
-- PHP-versie: 8.0.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sigaarshop`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `vat` decimal(2,2) NOT NULL,
  `stock` int NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Gegevens worden geëxporteerd voor tabel `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `vat`, `stock`, `image`, `created_at`, `update_at`, `deleted_at`) VALUES
(1, 'Humidor compleet set', '19.99', '0.00', 20, 'meestverkocht3.jpg', '2022-01-11 13:02:21', '2022-01-11 13:02:21', '2022-01-11 13:02:21'),
(2, 'Sigaar bundel', '25.99', '0.00', 2, 'meestverkocht2.jpg\r\n', '2022-01-12 08:12:43', '2022-01-12 08:12:43', '2022-01-12 08:12:43'),
(3, 'Houten asbak', '12.95', '0.00', 33, 'meestverkocht1.jpg', '2022-01-12 08:15:42', '2022-01-12 08:15:42', '2022-01-12 08:15:42'),
(4, 'Zippo', '15.95', '0.00', 23, 'meestverkocht4.jpg', '2022-01-12 08:15:42', '2022-01-12 08:15:42', '2022-01-12 08:15:42'),
(5, 'Glazen asbak', '34.95', '0.00', 53, 'meestverkocht5.jpg', '2022-01-12 08:18:08', '2022-01-12 08:18:08', '2022-01-12 08:18:08'),
(6, 'Karaf set luxe', '34.95', '0.00', 13, 'meestverkocht6.jpg', '2022-01-12 08:18:08', '2022-01-12 08:18:08', '2022-01-12 08:18:08'),
(7, 'Aansterker deluxe', '17.95', '0.00', 33, 'aansteker2.jpeg', '2022-01-12 08:21:05', '2022-01-12 08:21:05', '2022-01-12 08:21:05'),
(8, 'Aansteker stormbestendig', '12.95', '0.00', 53, 'aansteker3.jpeg', '2022-01-12 08:21:05', '2022-01-12 08:21:05', '2022-01-12 08:21:05'),
(9, 'Aansteker 3 vlams', '14.95', '0.00', 23, 'aansteker4.jpeg', '2022-01-12 08:24:27', '2022-01-12 08:24:27', '2022-01-12 08:24:27'),
(10, 'Asbak ovaal', '12.95', '0.00', 23, 'asbak2.jpeg', '2022-01-12 08:24:27', '2022-01-12 08:24:27', '2022-01-12 08:24:27'),
(11, 'Asbak hout en uitschuifbaar', '18.95', '0.00', 13, 'asbak3.jpeg', '2022-01-12 08:26:00', '2022-01-12 08:26:00', '2022-01-12 08:26:00'),
(12, 'Asbak tafelmodel', '29.95', '0.00', 13, 'asbak4.jpeg', '2022-01-12 08:26:00', '2022-01-12 08:26:00', '2022-01-12 08:26:00'),
(13, 'Asbak alu. inc. houder', '24.95', '0.00', 23, 'asbak5.jpeg', '2022-01-12 08:27:22', '2022-01-12 08:27:22', '2022-01-12 08:27:22'),
(14, 'Asbak inc. houder', '17.95', '0.00', 13, 'asbak6.jpeg', '2022-01-12 08:27:22', '2022-01-12 08:27:22', '2022-01-12 08:27:22'),
(15, 'Asbak luxe', '29.95', '0.00', 23, 'asbak7.jpeg', '2022-01-12 08:28:29', '2022-01-12 08:28:29', '2022-01-12 08:28:29'),
(16, 'Asbak Montecristo de luxe', '29.95', '0.00', 23, 'asbak8.jpeg', '2022-01-12 08:28:29', '2022-01-12 08:28:29', '2022-01-12 08:28:29'),
(17, 'Karaf set 7 delig', '36.95', '0.00', 13, 'karafset1.jpeg', '2022-01-25 08:19:29', '2022-01-25 08:19:29', '2022-01-25 08:19:29'),
(18, 'Karaf set 13 delig', '29.95', '0.00', 13, 'karafset2.jpeg', '2022-01-25 08:22:06', '2022-01-25 08:22:06', '2022-01-25 08:22:06'),
(19, 'Karaf set 4 delig inc houder', '44.95', '0.00', 13, 'karafset4.jpeg', '2022-01-25 08:22:06', '2022-01-25 08:22:06', '2022-01-25 08:22:06'),
(20, 'Karaf set 4 delig inc houder', '44.95', '0.00', 13, 'karafset4.jpeg', '2022-01-25 08:25:25', '2022-01-25 08:25:25', '2022-01-25 08:25:25'),
(21, 'Karaf set 13 delig ovaal', '33.95', '0.00', 13, 'karafset5.jpeg', '2022-01-25 08:25:25', '2022-01-25 08:25:25', '2022-01-25 08:25:25'),
(22, 'Karaf set 2 delig', '29.95', '0.00', 13, 'karafset6.jpeg', '2022-01-25 08:29:11', '2022-01-25 08:29:11', '2022-01-25 08:29:11'),
(23, 'Karaf Deluxe', '28.95', '0.00', 13, 'karafset7.jpg', '2022-01-25 08:29:11', '2022-01-25 08:29:11', '2022-01-25 08:29:11'),
(24, 'Karaf met kurk', '27.95', '0.00', 13, 'karafset8.jpg', '2022-01-25 08:30:50', '2022-01-25 08:30:50', '2022-01-25 08:30:50'),
(25, 'legends Cigar', '22.95', '0.00', 13, 'merk1.jpeg', '2022-01-25 08:30:50', '2022-01-25 08:30:50', '2022-01-25 08:30:50'),
(26, 'Mail cuban Cigars', '24.95', '0.00', 35, 'merk3.jpeg', '2022-01-25 08:31:50', '2022-01-25 08:31:50', '2022-01-25 08:31:50'),
(27, 'Mail cuban Cigars', '34.95', '0.00', 13, 'merk3.jpeg', '2022-01-25 08:34:26', '2022-01-25 08:34:26', '2022-01-25 08:34:26'),
(28, 'Esto Warenhouse', '24.95', '0.00', 13, 'merk5.jpeg', '2022-01-25 08:31:50', '2022-01-25 08:31:50', '2022-01-25 08:31:50'),
(29, 'Cigar City Brewing', '24.95', '0.00', 13, 'merk6.jpeg', '2022-01-25 08:35:04', '2022-01-25 08:35:04', '2022-01-25 08:35:04'),
(30, 'Corona Cigar Co', '24.95', '0.00', 13, 'merk9.png', '2022-01-25 08:35:04', '2022-01-25 08:35:04', '2022-01-25 08:35:04'),
(31, 'Dontoirac Cigars', '24.95', '0.00', 13, 'merk10.png', '2022-01-25 08:36:25', '2022-01-25 08:36:25', '2022-01-25 08:36:25'),
(32, 'TIT Trinidad', '24.95', '0.00', 13, 'merk11.png', '2022-01-25 08:36:25', '2022-01-25 08:36:25', '2022-01-25 08:36:25'),
(33, 'Cuban Cigar Victoria ', '34.95', '0.00', 13, 'merk12.jpeg', '2022-01-25 08:37:16', '2022-01-25 08:37:16', '2022-01-25 08:37:16'),
(34, 'Hoyo de Monterrey Habana', '25.95', '0.00', 13, 'merk13.jpeg', '2022-01-25 08:37:16', '2022-01-25 08:37:16', '2022-01-25 08:37:16'),
(35, 'Cuban Cigar', '22.95', '0.00', 13, 'merk14.png', '2022-01-25 08:38:27', '2022-01-25 08:38:27', '2022-01-25 08:38:27'),
(36, 'Arturo Fuente', '24.95', '0.00', 13, 'merk15.jpeg', '2022-01-25 08:38:27', '2022-01-25 08:38:27', '2022-01-25 08:38:27'),
(37, 'Hazelnoot Cigar', '19.95', '0.00', 13, 'merk20.jpg', '2022-01-25 08:39:20', '2022-01-25 08:39:20', '2022-01-25 08:39:20'),
(38, 'la place', '11.95', '0.00', 13, 'merk21.jpeg', '2022-01-25 08:39:20', '2022-01-25 08:39:20', '2022-01-25 08:39:20'),
(39, 'Jumbo Cigar', '24.95', '0.00', 13, 'merk22.jpeg', '2022-01-25 08:41:19', '2022-01-25 08:41:19', '2022-01-25 08:41:19'),
(40, 'Sigaarhouder leer met sigaarknipper', '29.95', '0.00', 13, 'sigaarhouder1.jpeg', '2022-01-25 08:41:19', '2022-01-25 08:41:19', '2022-01-25 08:41:19'),
(41, 'Sigaarhouder hout', '25.95', '0.00', 13, 'sigaarhouder2.jpeg', '2022-01-25 08:42:42', '2022-01-25 08:42:42', '2022-01-25 08:42:42'),
(42, 'Sigaarhouder leder met sigaarknipper', '19.95', '0.00', 13, 'sigaarhouder3.jpeg', '2022-01-25 08:42:42', '2022-01-25 08:42:42', '2022-01-25 08:42:42'),
(43, 'Sigaarknipper\'', '9.95', '0.00', 13, 'sigaarknipper1.jpeg', '2022-01-25 08:44:41', '2022-01-25 08:44:41', '2022-01-25 08:44:41'),
(44, 'Sigaarknipper schaarvorm\'', '9.95', '0.00', 13, 'sigaarknipper2.jpeg', '2022-01-25 08:44:41', '2022-01-25 08:44:41', '2022-01-25 08:44:41'),
(45, 'Sigaarknipper standaard', '8.95', '0.00', 13, 'sigaarknipper3.jpeg', '2022-01-25 08:45:44', '2022-01-25 08:45:44', '2022-01-25 08:45:44'),
(46, 'Sigaarknipper luxe', '19.95', '0.00', 13, 'sigaarknipper4.jpeg', '2022-01-25 08:45:44', '2022-01-25 08:45:44', '2022-01-25 08:45:44'),
(47, 'Sigaarknipper goud/carbon', '9.95', '0.00', 13, 'sigaarknipper5.jpeg', '2022-01-25 08:46:40', '2022-01-25 08:46:40', '2022-01-25 08:46:40'),
(48, 'Sigaarknipper deluxe', '14.95', '0.00', 13, 'sigaarknipper6.jpg', '2022-01-25 08:46:40', '2022-01-25 08:46:40', '2022-01-25 08:46:40'),
(49, 'Sigaarknipper hand', '9.95', '0.00', 13, 'sigaarknipper7.jpg', '2022-01-25 08:47:39', '2022-01-25 08:47:39', '2022-01-25 08:47:39');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `first_name` varchar(80) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT voor een tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
