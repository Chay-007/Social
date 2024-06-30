-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 29, 2024 at 04:27 PM
-- Server version: 8.0.33
-- PHP Version: 8.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `profcymaglobal_social`
--

-- --------------------------------------------------------

--
-- Table structure for table `apposes`
--

CREATE TABLE `apposes` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `appose_post_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `star` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `apposes`
--

INSERT INTO `apposes` (`id`, `posts_id`, `appose_post_id`, `user_id`, `star`, `reason`, `image`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(15, 660, 661, 126, '4', 'oppose 4 start', '', 1, '2024-03-09 13:22:09', '2024-03-09 13:22:09', NULL),
(19, 681, 682, 145, '4.5', 'ghhvv', '', 1, '2024-03-13 05:31:54', '2024-03-13 05:31:54', NULL),
(21, 801, 802, 172, '2', 'This is the worst pg which I\'ve seen , it\'s not worthy. Its charging too much rent.', 'admin/home/appose/6701rn_image_picker_lib_temp_8d06774c-5800-446e-8981-7a83b93cc6d9.jpg', 1, '2024-03-30 18:16:32', '2024-03-30 18:16:32', NULL),
(22, 801, 803, 172, '2.5', 'May be you are staying in different PG, The rent is reasonable', 'admin/home/appose/2743rn_image_picker_lib_temp_6015df0f-566a-427b-92b6-8603ebecbaef.jpg', 1, '2024-03-30 18:23:40', '2024-03-30 18:23:40', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `block_chats`
--

CREATE TABLE `block_chats` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `chat_with` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `block_chats`
--

INSERT INTO `block_chats` (`id`, `user_id`, `chat_with`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(5, 129, 170, 1, '2024-04-21 14:35:18', '2024-04-21 14:35:18', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `book_mark_comments`
--

CREATE TABLE `book_mark_comments` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `comment_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Entertainment', 1, '2024-02-19 13:54:37', '2024-02-19 13:54:37', NULL),
(2, 'Sports', 1, '2024-02-19 13:54:42', '2024-02-19 13:54:42', NULL),
(3, 'Careers', 1, '2024-02-19 13:54:48', '2024-02-19 13:54:48', NULL),
(4, 'Arts and Culture', 1, '2024-02-19 13:54:54', '2024-02-19 13:54:54', NULL),
(5, 'Travel and Outdoor', 1, '2024-02-19 13:55:01', '2024-02-19 13:55:01', NULL),
(6, 'Food and Drinks', 1, '2024-02-19 13:55:06', '2024-02-19 13:55:06', NULL),
(7, 'Fashion and Beauty', 1, '2024-02-19 13:55:12', '2024-02-19 13:55:12', NULL),
(8, 'Business and Finance', 1, '2024-02-19 13:55:18', '2024-02-19 13:55:18', NULL),
(9, 'Gaming', 1, '2024-02-19 13:55:22', '2024-02-19 13:55:22', NULL),
(10, 'Health and Fitness', 1, '2024-02-19 13:55:27', '2024-02-19 13:55:27', NULL),
(11, 'Politics', 1, '2024-02-19 13:55:32', '2024-03-15 06:01:53', NULL),
(12, 'ASDFcgvc', 1, '2024-03-15 06:02:00', '2024-03-15 06:02:45', '2024-03-15 06:02:45');

-- --------------------------------------------------------

--
-- Table structure for table `chat_images`
--

CREATE TABLE `chat_images` (
  `id` bigint UNSIGNED NOT NULL,
  `file` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `community_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` bigint UNSIGNED NOT NULL,
  `country_id` bigint UNSIGNED NOT NULL,
  `state_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `country_id`, `state_id`, `name`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, 'Pune', 1, '2023-12-06 10:22:01', '2023-12-16 04:54:58', '2023-12-16 04:54:58'),
(2, 1, 4, 'Pune', 1, '2023-12-16 04:57:05', '2023-12-16 04:57:05', NULL),
(3, 1, 4, 'Mumbai', 1, '2023-12-16 04:57:17', '2023-12-16 04:57:17', NULL),
(4, 1, 5, 'Pune', 1, '2023-12-16 04:57:52', '2023-12-16 04:57:52', NULL),
(5, 3, 10, 'hollywood', 1, '2023-12-29 08:40:02', '2024-03-14 09:09:13', '2024-03-14 09:09:13'),
(6, 3, 10, 'xr', 1, '2023-12-29 12:56:05', '2024-03-14 09:09:10', '2024-03-14 09:09:10'),
(7, 1, 12, 'ASDF', 1, '2024-03-15 06:01:00', '2024-03-15 06:01:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `comment` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `file` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `posts_id`, `user_id`, `comment`, `file`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(8, 637, 126, 'Hi', '', 1, '2024-03-09 04:23:58', '2024-03-09 04:23:58', NULL),
(9, 637, 126, 'this is first comment', '', 1, '2024-03-09 04:26:29', '2024-03-09 04:26:29', NULL),
(10, 637, 126, 'this is second comment', '', 1, '2024-03-09 04:26:49', '2024-03-09 04:26:49', NULL),
(11, 637, 126, 'this is third comment', '', 1, '2024-03-09 04:27:13', '2024-03-09 04:27:13', NULL),
(12, 658, 128, 'this is first comment', '', 1, '2024-03-09 12:30:43', '2024-03-09 12:30:43', NULL),
(13, 659, 128, 'bshdj', '', 1, '2024-03-09 12:34:13', '2024-03-09 12:34:13', NULL),
(14, 659, 126, 'New comment', '', 1, '2024-03-09 12:37:37', '2024-03-09 12:37:37', NULL),
(15, 659, 128, 'comment count', '', 1, '2024-03-09 12:39:23', '2024-03-09 12:39:23', NULL),
(16, 657, 128, 'ghjhj', '', 1, '2024-03-09 12:43:28', '2024-03-09 12:43:28', NULL),
(17, 657, 128, 'yxcyfhgxgxxvh', '', 1, '2024-03-09 12:43:38', '2024-03-09 12:43:38', NULL),
(18, 657, 128, 'ucvuuhchccb', '', 1, '2024-03-09 12:43:47', '2024-03-09 12:43:47', NULL),
(19, 657, 128, 'chchcch', '', 1, '2024-03-09 12:44:17', '2024-03-09 12:44:17', NULL),
(20, 657, 128, 'ugcucuivj', '', 1, '2024-03-09 12:44:23', '2024-03-09 12:44:23', NULL),
(21, 657, 128, 'dhddhdhdf', '', 1, '2024-03-09 12:45:03', '2024-03-09 12:45:03', NULL),
(22, 657, 128, 'dhdhxhxhcj', '', 1, '2024-03-09 12:45:10', '2024-03-09 12:45:10', NULL),
(23, 657, 128, 'hchchcjj', '', 1, '2024-03-09 12:45:14', '2024-03-09 12:45:14', NULL),
(27, 659, 143, 'comments not increasing', '', 1, '2024-03-09 13:01:36', '2024-03-09 13:01:36', NULL),
(28, 657, 143, 'hgccgyu', '', 1, '2024-03-09 13:10:32', '2024-03-09 13:10:32', NULL),
(29, 657, 143, 'guuhg', '', 1, '2024-03-09 13:10:48', '2024-03-09 13:10:48', NULL),
(30, 658, 126, 'jxjcjccjc', '', 1, '2024-03-09 13:11:51', '2024-03-09 13:11:51', NULL),
(31, 660, 128, 'jvvjvjjvhvhvhguv', '', 1, '2024-03-09 13:18:27', '2024-03-09 13:18:27', NULL),
(32, 661, 143, 'hdhdhdhdhs', '', 1, '2024-03-09 13:23:51', '2024-03-09 13:23:51', NULL),
(33, 660, 128, 'jvcjxkxxxj', '', 1, '2024-03-09 13:25:16', '2024-03-09 13:25:16', NULL),
(34, 657, 128, 'hffhdhdx', '', 1, '2024-03-09 13:26:44', '2024-03-09 13:26:44', NULL),
(35, 661, 143, 'hxjcci', '', 1, '2024-03-09 13:27:32', '2024-03-09 13:27:32', NULL),
(36, 662, 128, 'tccyvuih', '', 1, '2024-03-09 13:30:56', '2024-03-09 13:30:56', NULL),
(37, 662, 128, 'jbvhgb', '', 1, '2024-03-09 13:58:12', '2024-03-09 13:58:12', NULL),
(38, 661, 128, 'txtcctcyhvhv', '', 1, '2024-03-11 05:02:09', '2024-03-11 05:02:09', NULL),
(39, 559, 144, 'hey', '', 1, '2024-03-11 06:39:45', '2024-03-11 06:39:45', NULL),
(40, 662, 143, 'hxjxidi', '', 1, '2024-03-11 06:44:19', '2024-03-11 06:44:19', NULL),
(43, 669, 128, 'hhgyyhh', '', 1, '2024-03-11 13:13:43', '2024-03-11 13:13:43', NULL),
(44, 673, 128, 'hdudiei', '', 1, '2024-03-11 13:28:14', '2024-03-11 13:28:14', NULL),
(45, 673, 128, 'jshebdhxbd', '', 1, '2024-03-11 13:28:21', '2024-03-11 13:28:21', NULL),
(46, 661, 126, 'hwuu', '', 1, '2024-03-11 13:49:14', '2024-03-11 13:49:14', NULL),
(47, 674, 128, 'hey', '', 1, '2024-03-11 13:57:04', '2024-03-11 13:57:04', NULL),
(51, 681, 145, 'ysusijedb', '', 1, '2024-03-13 04:29:34', '2024-03-13 04:29:34', NULL),
(52, 681, 128, 'chvuvuvujh', '', 1, '2024-03-13 05:26:09', '2024-03-13 05:26:09', NULL),
(53, 694, 126, 'hdhdududu', '', 1, '2024-03-13 07:29:18', '2024-03-13 07:29:18', NULL),
(54, 700, 128, 'ucvuvvivhvhv', '', 1, '2024-03-13 07:57:21', '2024-03-13 07:57:21', NULL),
(55, 700, 128, 'ucvucccchvi', '', 1, '2024-03-13 07:57:29', '2024-03-13 07:57:29', NULL),
(56, 700, 128, 'hcvhvjcvig', '', 1, '2024-03-13 07:57:34', '2024-03-13 07:57:34', NULL),
(57, 700, 128, 'jvvjibbobho', '', 1, '2024-03-13 07:57:40', '2024-03-13 07:57:40', NULL),
(58, 700, 128, 'jvvjihivibbi', '', 1, '2024-03-13 07:57:47', '2024-03-13 07:57:47', NULL),
(59, 699, 128, 'nkkk', '', 1, '2024-03-13 11:08:36', '2024-03-13 11:08:36', NULL),
(60, 760, 146, 'hsjsis', '', 1, '2024-03-19 05:44:31', '2024-03-19 05:44:31', NULL),
(61, 769, 146, 'tcvtgy', '', 1, '2024-03-19 06:10:33', '2024-03-19 06:10:33', NULL),
(62, 765, 146, 'tvvtvggy', '', 1, '2024-03-19 07:00:28', '2024-03-19 07:00:28', NULL),
(63, 765, 146, 'vyvy vy', '', 1, '2024-03-19 07:00:37', '2024-03-19 07:00:37', NULL),
(64, 777, 126, 'hzhdudud', '', 1, '2024-03-19 07:41:52', '2024-03-19 07:41:52', NULL),
(65, 647, 126, 'hui', '', 1, '2024-03-19 09:00:30', '2024-03-19 09:00:30', NULL),
(66, 783, 146, 'fvvy uu', '', 1, '2024-03-19 11:10:02', '2024-03-19 11:10:02', NULL),
(67, 801, 172, 'Hi, anyone staying in this PG,  let\'s meet', '', 1, '2024-03-30 18:15:15', '2024-03-30 18:15:15', NULL),
(68, 802, 172, 'Hi', '', 1, '2024-03-30 18:17:46', '2024-03-30 18:17:46', NULL),
(69, 814, 174, 'kiraak ga undi movie assalu Radhika Entry mamulga ledu mari', '', 1, '2024-04-01 15:33:22', '2024-04-01 15:33:22', NULL),
(70, 809, 175, '😂😂', '', 1, '2024-04-02 16:43:23', '2024-04-02 16:43:23', NULL),
(71, 816, 174, 'yes', '', 1, '2024-04-02 19:03:15', '2024-04-02 19:03:15', NULL),
(72, 833, 159, 'demo@google.com', '', 1, '2024-04-18 13:43:02', '2024-04-18 13:43:02', NULL),
(73, 858, 172, 'Yeah it\'s true', 'admin/home/profile/3208IMG-20240421-WA0001.jpg', 1, '2024-04-21 08:02:20', '2024-04-21 08:02:20', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `comment_book_marks`
--

CREATE TABLE `comment_book_marks` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `comment_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comment_book_marks`
--

INSERT INTO `comment_book_marks` (`id`, `user_id`, `comment_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(19, 128, 14, 1, '2024-03-09 12:37:53', '2024-03-09 12:37:53', NULL),
(20, 126, 30, 1, '2024-03-09 13:12:01', '2024-03-09 13:12:01', NULL),
(22, 126, 61, 1, '2024-03-19 11:26:10', '2024-03-19 11:26:10', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `comment_replies`
--

CREATE TABLE `comment_replies` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `comment_id` bigint UNSIGNED NOT NULL,
  `reply` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comment_replies`
--

INSERT INTO `comment_replies` (`id`, `user_id`, `comment_id`, `reply`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(6, 128, 16, 'jvh', 1, '2024-03-09 13:26:07', '2024-03-09 13:26:07', NULL),
(8, 128, 28, 'gnunyvtby', 1, '2024-03-09 13:26:59', '2024-03-09 13:26:59', NULL),
(9, 128, 35, 'chhfvii', 1, '2024-03-11 05:02:42', '2024-03-11 05:02:42', NULL),
(10, 128, 51, 'hjvvj', 1, '2024-03-13 05:26:34', '2024-03-13 05:26:34', NULL),
(11, 172, 69, 'Aite urgent ga night iBomma lo chusesta', 1, '2024-04-01 15:41:19', '2024-04-01 15:41:19', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `comment_stars`
--

CREATE TABLE `comment_stars` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `comment_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comment_stars`
--

INSERT INTO `comment_stars` (`id`, `user_id`, `comment_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(22, 128, 13, 1, '2024-03-09 12:37:06', '2024-03-09 12:37:06', NULL),
(23, 126, 13, 1, '2024-03-09 12:37:20', '2024-03-09 12:37:20', NULL),
(24, 128, 14, 1, '2024-03-09 12:37:51', '2024-03-09 12:37:51', NULL),
(25, 126, 30, 1, '2024-03-09 13:11:58', '2024-03-09 13:11:58', NULL),
(26, 126, 12, 1, '2024-03-09 13:12:00', '2024-03-09 13:12:00', NULL),
(34, 172, 70, 1, '2024-04-02 16:44:49', '2024-04-02 16:44:49', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `communities`
--

CREATE TABLE `communities` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `community_no` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `community_visibility` enum('Public','Private') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Public',
  `mute_notification` tinyint(1) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `communities`
--

INSERT INTO `communities` (`id`, `user_id`, `community_no`, `name`, `logo`, `description`, `community_visibility`, `mute_notification`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(35, 126, '61392', 'Holiwood', 'admin/home/community/61392myCommunityProfile.jpg', 'uvuvjb', 'Public', 0, 1, '2024-03-06 09:46:27', '2024-03-06 09:46:27', NULL),
(36, 126, '72861', 'One Member', NULL, 'hhj', 'Public', 0, 1, '2024-03-06 09:49:54', '2024-03-06 09:49:54', NULL),
(38, 157, '90273', 'social is life', 'admin/home/community/90273myCommunityProfile.jpg', 'this is discription', 'Public', 0, 1, '2024-03-21 05:41:27', '2024-03-30 08:10:25', NULL),
(39, 172, '63164', 'Friends', 'public/img/groupdefault.png', 'Friends to hangout', 'Public', 0, 1, '2024-03-30 16:40:26', '2024-03-30 16:40:26', NULL),
(40, 172, '19752', 'Buddies', 'public/img/groupdefault.png', 'Just ChitChat', 'Public', 0, 1, '2024-04-03 10:01:31', '2024-04-03 10:01:31', NULL),
(41, 129, '53113', 'Testing', 'public/img/groupdefault.png', 'To Test the features', 'Public', 0, 1, '2024-04-21 07:53:36', '2024-04-21 07:53:36', NULL),
(42, 188, '65016', 'hfuxudhxyd', 'public/img/groupdefault.png', 'udusudu', 'Public', 0, 1, '2024-04-21 10:17:16', '2024-04-21 10:17:16', NULL),
(43, 187, '59848', 'New Test Community', 'public/img/groupdefault.png', 'About', 'Public', 0, 1, '2024-04-22 07:01:53', '2024-04-22 07:01:53', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `community_members`
--

CREATE TABLE `community_members` (
  `id` bigint UNSIGNED NOT NULL,
  `community_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `member_status` enum('admin','moderator','member') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'member',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `community_members`
--

INSERT INTO `community_members` (`id`, `community_id`, `user_id`, `member_status`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(166, 35, 128, 'member', 1, '2024-03-06 09:46:27', '2024-03-06 09:46:27', NULL),
(167, 35, 126, 'admin', 1, '2024-03-06 09:46:27', '2024-03-06 09:46:27', NULL),
(168, 36, 125, 'member', 1, '2024-03-06 09:49:54', '2024-03-06 09:49:54', NULL),
(169, 36, 126, 'admin', 1, '2024-03-06 09:49:54', '2024-03-06 09:49:54', NULL),
(170, 35, 129, 'member', 1, '2024-03-07 05:42:39', '2024-03-07 05:42:39', NULL),
(173, 35, 132, 'member', 1, '2024-03-07 12:20:50', '2024-03-07 12:20:50', NULL),
(177, 35, 146, 'member', 1, '2024-03-13 06:23:22', '2024-03-13 06:23:22', NULL),
(181, 38, 153, 'member', 1, '2024-03-21 05:41:27', '2024-03-21 05:41:27', NULL),
(182, 38, 154, 'member', 1, '2024-03-21 05:41:27', '2024-03-21 05:41:27', NULL),
(183, 38, 155, 'member', 1, '2024-03-21 05:41:27', '2024-03-21 05:41:27', NULL),
(184, 38, 156, 'member', 1, '2024-03-21 05:41:27', '2024-03-21 05:41:27', NULL),
(185, 38, 157, 'admin', 1, '2024-03-21 05:41:27', '2024-03-21 05:41:27', NULL),
(188, 39, 142, 'member', 1, '2024-03-30 16:40:26', '2024-03-30 16:40:26', NULL),
(189, 39, 170, 'member', 1, '2024-03-30 16:40:26', '2024-03-30 16:40:26', NULL),
(190, 39, 171, 'member', 1, '2024-03-30 16:40:26', '2024-03-30 16:40:26', NULL),
(191, 39, 172, 'admin', 1, '2024-03-30 16:40:26', '2024-03-30 16:40:26', NULL),
(192, 38, 175, 'member', 1, '2024-04-02 16:49:54', '2024-04-02 16:49:54', NULL),
(193, 36, 175, 'member', 1, '2024-04-02 16:49:55', '2024-04-02 16:49:55', NULL),
(194, 35, 175, 'member', 1, '2024-04-02 16:49:56', '2024-04-02 16:49:56', NULL),
(195, 39, 175, 'member', 1, '2024-04-03 05:43:36', '2024-04-03 05:43:36', NULL),
(196, 40, 176, 'member', 1, '2024-04-03 10:01:31', '2024-04-03 10:01:31', NULL),
(197, 40, 179, 'member', 1, '2024-04-03 10:01:31', '2024-04-03 10:01:31', NULL),
(198, 40, 181, 'member', 1, '2024-04-03 10:01:31', '2024-04-03 10:01:31', NULL),
(199, 40, 172, 'admin', 1, '2024-04-03 10:01:31', '2024-04-03 10:01:31', NULL),
(200, 40, 175, 'member', 1, '2024-04-03 17:37:09', '2024-04-03 17:37:09', NULL),
(201, 36, 159, 'member', 1, '2024-04-05 23:01:11', '2024-04-05 23:01:11', NULL),
(202, 38, 159, 'member', 1, '2024-04-05 23:01:12', '2024-04-05 23:01:12', NULL),
(203, 39, 159, 'member', 1, '2024-04-07 10:58:40', '2024-04-07 10:58:40', NULL),
(204, 40, 159, 'member', 1, '2024-04-07 10:58:42', '2024-04-07 10:58:42', NULL),
(205, 35, 185, 'member', 1, '2024-04-15 08:04:37', '2024-04-15 08:04:37', NULL),
(206, 36, 185, 'member', 1, '2024-04-15 08:04:38', '2024-04-15 08:04:38', NULL),
(207, 38, 185, 'member', 1, '2024-04-15 08:04:40', '2024-04-15 08:04:40', NULL),
(208, 38, 186, 'member', 1, '2024-04-15 16:56:03', '2024-04-15 16:56:03', NULL),
(209, 36, 186, 'member', 1, '2024-04-15 16:56:06', '2024-04-15 16:56:06', NULL),
(210, 35, 186, 'member', 1, '2024-04-15 16:56:08', '2024-04-15 16:56:08', NULL),
(211, 39, 186, 'member', 1, '2024-04-15 16:57:45', '2024-04-15 16:57:45', NULL),
(212, 40, 186, 'member', 1, '2024-04-15 16:57:45', '2024-04-15 16:57:45', NULL),
(213, 41, 130, 'member', 1, '2024-04-21 07:53:36', '2024-04-21 07:53:36', NULL),
(214, 41, 182, 'member', 1, '2024-04-21 07:53:36', '2024-04-21 07:53:36', NULL),
(215, 41, 129, 'admin', 1, '2024-04-21 07:53:36', '2024-04-21 07:53:36', NULL),
(216, 40, 182, 'member', 1, '2024-04-21 08:10:39', '2024-04-21 08:10:39', NULL),
(217, 42, 129, 'member', 1, '2024-04-21 10:17:16', '2024-04-21 10:17:16', NULL),
(218, 42, 172, 'member', 1, '2024-04-21 10:17:16', '2024-04-21 10:17:16', NULL),
(219, 42, 188, 'admin', 1, '2024-04-21 10:17:16', '2024-04-21 10:17:16', NULL),
(220, 35, 187, 'member', 1, '2024-04-22 06:33:47', '2024-04-22 06:33:47', NULL),
(221, 38, 187, 'member', 1, '2024-04-22 06:33:48', '2024-04-22 06:33:48', NULL),
(222, 43, 143, 'member', 1, '2024-04-22 07:01:53', '2024-04-22 07:01:53', NULL),
(223, 43, 145, 'member', 1, '2024-04-22 07:01:53', '2024-04-22 07:01:53', NULL),
(224, 43, 146, 'member', 1, '2024-04-22 07:01:53', '2024-04-22 07:01:53', NULL),
(225, 43, 182, 'member', 1, '2024-04-22 07:01:53', '2024-04-22 07:01:53', NULL),
(226, 43, 187, 'admin', 1, '2024-04-22 07:01:53', '2024-04-22 07:01:53', NULL),
(227, 35, 145, 'member', 1, '2024-04-23 06:35:41', '2024-04-23 06:35:41', NULL),
(228, 35, 147, 'member', 1, '2024-04-23 06:35:41', '2024-04-23 06:35:41', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `community_tags`
--

CREATE TABLE `community_tags` (
  `id` bigint UNSIGNED NOT NULL,
  `community_id` bigint UNSIGNED NOT NULL,
  `tag_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `community_tags`
--

INSERT INTO `community_tags` (`id`, `community_id`, `tag_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(119, 36, 20, 1, '2024-03-06 09:49:54', '2024-03-06 09:49:54', NULL),
(123, 38, 20, 1, '2024-03-21 05:41:27', '2024-03-21 05:41:27', NULL),
(124, 38, 24, 1, '2024-03-21 05:41:27', '2024-03-21 05:41:27', NULL),
(125, 38, 26, 1, '2024-03-21 05:41:27', '2024-03-21 05:41:27', NULL),
(126, 38, 30, 1, '2024-03-21 05:41:27', '2024-03-21 05:41:27', NULL),
(127, 38, 34, 1, '2024-03-21 05:41:27', '2024-03-21 05:41:27', NULL),
(128, 38, 36, 1, '2024-03-21 05:41:27', '2024-03-21 05:41:27', NULL),
(129, 39, 20, 1, '2024-03-30 16:40:26', '2024-03-30 16:40:26', NULL),
(130, 39, 48, 1, '2024-03-30 16:40:26', '2024-03-30 16:40:26', NULL),
(131, 39, 44, 1, '2024-03-30 16:40:26', '2024-03-30 16:40:26', NULL),
(132, 39, 47, 1, '2024-03-30 16:40:26', '2024-03-30 16:40:26', NULL),
(133, 39, 125, 1, '2024-03-30 16:40:26', '2024-03-30 16:40:26', NULL),
(134, 39, 126, 1, '2024-03-30 16:40:26', '2024-03-30 16:40:26', NULL),
(135, 39, 127, 1, '2024-03-30 16:40:26', '2024-03-30 16:40:26', NULL),
(136, 39, 131, 1, '2024-03-30 16:40:26', '2024-03-30 16:40:26', NULL),
(150, 41, 123, 1, '2024-04-21 07:53:36', '2024-04-21 07:53:36', NULL),
(151, 41, 124, 1, '2024-04-21 07:53:36', '2024-04-21 07:53:36', NULL),
(152, 41, 127, 1, '2024-04-21 07:53:36', '2024-04-21 07:53:36', NULL),
(153, 41, 163, 1, '2024-04-21 07:53:36', '2024-04-21 07:53:36', NULL),
(154, 41, 165, 1, '2024-04-21 07:53:36', '2024-04-21 07:53:36', NULL),
(155, 40, 20, 1, '2024-04-21 08:10:39', '2024-04-21 08:10:39', NULL),
(156, 40, 24, 1, '2024-04-21 08:10:39', '2024-04-21 08:10:39', NULL),
(157, 40, 26, 1, '2024-04-21 08:10:39', '2024-04-21 08:10:39', NULL),
(158, 40, 36, 1, '2024-04-21 08:10:39', '2024-04-21 08:10:39', NULL),
(159, 40, 39, 1, '2024-04-21 08:10:39', '2024-04-21 08:10:39', NULL),
(160, 40, 42, 1, '2024-04-21 08:10:39', '2024-04-21 08:10:39', NULL),
(161, 40, 48, 1, '2024-04-21 08:10:39', '2024-04-21 08:10:39', NULL),
(162, 40, 55, 1, '2024-04-21 08:10:39', '2024-04-21 08:10:39', NULL),
(163, 40, 63, 1, '2024-04-21 08:10:39', '2024-04-21 08:10:39', NULL),
(164, 40, 76, 1, '2024-04-21 08:10:39', '2024-04-21 08:10:39', NULL),
(165, 40, 44, 1, '2024-04-21 08:10:39', '2024-04-21 08:10:39', NULL),
(166, 40, 47, 1, '2024-04-21 08:10:39', '2024-04-21 08:10:39', NULL),
(167, 40, 52, 1, '2024-04-21 08:10:39', '2024-04-21 08:10:39', NULL),
(168, 42, 20, 1, '2024-04-21 10:17:16', '2024-04-21 10:17:16', NULL),
(169, 42, 24, 1, '2024-04-21 10:17:16', '2024-04-21 10:17:16', NULL),
(170, 43, 20, 1, '2024-04-22 07:01:53', '2024-04-22 07:01:53', NULL),
(171, 43, 24, 1, '2024-04-22 07:01:53', '2024-04-22 07:01:53', NULL),
(172, 43, 26, 1, '2024-04-22 07:01:53', '2024-04-22 07:01:53', NULL),
(173, 43, 44, 1, '2024-04-22 07:01:53', '2024-04-22 07:01:53', NULL),
(174, 43, 47, 1, '2024-04-22 07:01:53', '2024-04-22 07:01:53', NULL),
(175, 35, 60, 1, '2024-04-23 06:35:41', '2024-04-23 06:35:41', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'India', 1, '2023-12-06 10:21:24', '2023-12-16 04:56:01', NULL),
(2, 'Aust', 1, '2023-12-06 13:42:09', '2024-03-14 09:04:48', '2024-03-14 09:04:48'),
(3, 'USA', 1, '2023-12-29 08:39:21', '2024-03-14 09:04:45', '2024-03-14 09:04:45');

-- --------------------------------------------------------

--
-- Table structure for table `days`
--

CREATE TABLE `days` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `days`
--

INSERT INTO `days` (`id`, `name`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '1', 1, '2023-12-12 11:01:19', '2023-12-16 05:50:36', NULL),
(2, '2Days', 1, '2023-12-12 11:01:19', '2023-12-16 05:50:38', '2023-12-16 05:50:38'),
(3, '3Days', 1, '2023-12-12 11:01:19', '2023-12-16 05:50:41', '2023-12-16 05:50:41'),
(4, '4Days', 1, '2023-12-12 11:01:19', '2023-12-16 05:50:43', '2023-12-16 05:50:43'),
(5, '3', 1, '2023-12-12 11:01:19', '2024-03-07 06:57:00', NULL),
(6, '7', 1, '2023-12-16 05:29:33', '2023-12-16 05:29:49', '2023-12-16 05:29:49'),
(7, '7', 1, '2023-12-16 05:43:55', '2024-03-07 06:57:09', NULL),
(8, '30', 1, '2023-12-16 05:43:55', '2024-03-07 06:57:12', '2024-03-07 06:57:12'),
(9, '45', 1, '2023-12-16 05:50:59', '2024-03-07 06:57:14', '2024-03-07 06:57:14'),
(10, '15', 1, '2024-03-15 06:03:52', '2024-03-15 06:03:52', NULL),
(11, '30', 1, '2024-03-15 06:04:03', '2024-03-15 06:04:03', NULL),
(12, '45', 1, '2024-03-15 06:04:03', '2024-03-15 06:04:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `favourite_chats`
--

CREATE TABLE `favourite_chats` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `chat_with` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `favourite_chats`
--

INSERT INTO `favourite_chats` (`id`, `user_id`, `chat_with`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(56, 126, 152, 1, '2024-03-19 11:26:47', '2024-03-19 11:26:47', NULL),
(57, 172, 171, 1, '2024-03-30 16:43:03', '2024-03-30 16:43:03', NULL),
(58, 172, 175, 1, '2024-04-03 05:46:44', '2024-04-03 05:46:44', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE `friends` (
  `id` bigint UNSIGNED NOT NULL,
  `send_by` bigint UNSIGNED NOT NULL,
  `send_to` bigint UNSIGNED NOT NULL,
  `friends_status` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`id`, `send_by`, `send_to`, `friends_status`, `created_at`, `updated_at`) VALUES
(129, 126, 128, 1, '2024-03-07 14:05:11', '2024-03-09 04:33:44'),
(132, 129, 130, 1, '2024-03-08 07:13:14', '2024-03-08 07:36:30'),
(135, 130, 142, 1, '2024-03-09 04:06:23', '2024-03-09 09:06:12'),
(140, 142, 129, 1, '2024-03-10 14:11:36', '2024-03-10 14:14:18'),
(170, 172, 171, 1, '2024-03-30 16:31:41', '2024-04-02 12:36:14'),
(171, 172, 142, 3, '2024-03-30 16:32:14', '2024-03-30 16:32:14'),
(172, 172, 129, 1, '2024-03-30 16:32:36', '2024-04-17 15:10:02'),
(173, 172, 175, 1, '2024-04-02 16:44:16', '2024-04-02 16:44:52'),
(175, 176, 172, 1, '2024-04-02 16:45:06', '2024-04-02 17:11:05'),
(176, 177, 175, 1, '2024-04-02 16:48:08', '2024-04-02 16:49:41'),
(177, 177, 171, 1, '2024-04-02 16:48:17', '2024-04-04 13:12:55'),
(178, 178, 172, 1, '2024-04-02 16:52:35', '2024-04-02 17:11:09'),
(180, 172, 177, 3, '2024-04-02 18:06:29', '2024-04-02 18:06:29'),
(181, 175, 171, 1, '2024-04-03 05:43:27', '2024-04-04 13:12:54'),
(182, 172, 181, 3, '2024-04-03 09:50:35', '2024-04-03 09:50:35'),
(183, 172, 179, 1, '2024-04-03 09:51:03', '2024-04-03 09:54:29'),
(184, 172, 174, 3, '2024-04-03 14:03:51', '2024-04-03 14:03:51'),
(185, 172, 183, 1, '2024-04-05 14:05:05', '2024-04-05 17:10:11'),
(186, 183, 171, 3, '2024-04-05 17:10:16', '2024-04-05 17:10:16'),
(187, 183, 175, 3, '2024-04-05 17:10:18', '2024-04-05 17:10:18'),
(188, 172, 182, 1, '2024-04-11 17:30:24', '2024-04-21 07:35:33'),
(189, 159, 146, 1, '2024-04-17 07:45:12', '2024-04-20 11:20:03'),
(190, 159, 172, 3, '2024-04-18 13:41:51', '2024-04-18 13:41:51'),
(191, 145, 146, 1, '2024-04-20 11:44:43', '2024-04-20 11:44:53'),
(192, 188, 182, 1, '2024-04-21 10:09:14', '2024-04-24 07:19:51'),
(193, 188, 172, 1, '2024-04-21 10:09:38', '2024-04-21 10:10:37'),
(194, 187, 146, 1, '2024-04-22 06:34:08', '2024-04-22 06:34:19'),
(195, 145, 187, 3, '2024-04-23 06:30:24', '2024-04-23 06:30:24'),
(196, 145, 126, 1, '2024-04-23 06:34:17', '2024-04-23 06:37:35');

-- --------------------------------------------------------

--
-- Table structure for table `friend_statuses`
--

CREATE TABLE `friend_statuses` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `friend_statuses`
--

INSERT INTO `friend_statuses` (`id`, `name`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Accepted', 1, '2023-12-18 06:45:31', '2023-12-18 06:45:31', NULL),
(2, 'Rejected', 1, '2023-12-18 06:45:31', '2023-12-18 06:45:31', NULL),
(3, 'Request', 1, '2023-12-18 06:46:09', '2023-12-18 06:46:09', NULL),
(4, 'UnFriend', 1, '2023-12-29 07:47:13', '2023-12-29 07:47:13', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `interests`
--

CREATE TABLE `interests` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `interests`
--

INSERT INTO `interests` (`id`, `name`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Coding', 1, '2023-12-06 10:19:16', '2023-12-06 10:19:16', NULL),
(2, 'UI/UX', 1, '2023-12-06 10:19:34', '2023-12-16 05:19:42', '2023-12-16 05:19:42'),
(3, 'Designing', 1, '2023-12-06 10:19:34', '2023-12-16 05:19:45', '2023-12-16 05:19:45'),
(4, 'saccas', 1, '2023-12-06 13:58:19', '2023-12-06 13:58:34', '2023-12-06 13:58:34'),
(5, 'Designing', 1, '2023-12-16 05:19:55', '2023-12-16 05:19:55', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(9, '2021_02_09_073331_create_permission_tables', 1),
(10, '2023_07_11_154650_create_countries_table', 1),
(11, '2023_07_11_154714_create_states_table', 1),
(12, '2023_07_11_154737_create_cities_table', 1),
(13, '2023_12_06_130805_create_user_profiles_table', 1),
(14, '2023_12_06_131437_create_interests_table', 1),
(16, '2023_12_08_121345_create_categories_table', 2),
(22, '2023_12_11_144012_create_days_table', 4),
(27, '2023_12_11_174444_create_chat_images_table', 4),
(28, '2023_12_12_102220_create_tags_table', 5),
(30, '2023_12_11_144508_create_where_to_posts_table', 6),
(31, '2023_12_11_144930_create_surveys_table', 7),
(32, '2023_12_11_145551_create_survey_questions_table', 7),
(33, '2023_12_11_145601_create_survey_questions_images_table', 7),
(34, '2023_12_11_150042_create_survey_questions_options_table', 7),
(35, '2023_12_12_143116_create_survey_tags_table', 7),
(36, '2023_12_12_173007_create_polls_table', 8),
(37, '2023_12_12_173023_create_poll_options_table', 8),
(38, '2023_12_12_173059_create_poll_images_table', 8),
(39, '2023_12_12_173408_create_poll_tags_table', 8),
(40, '2023_12_13_153206_create_seeks_table', 9),
(41, '2023_12_13_153510_create_seek_tags_table', 9),
(42, '2023_12_13_165056_create_communities_table', 10),
(43, '2023_12_13_170626_create_community_members_table', 10),
(44, '2023_12_13_171049_create_community_tags_table', 10),
(45, '2023_12_13_174128_add_mute_notification_to_communities_table', 10),
(46, '2023_12_13_180226_add_latlong_to_user_profiles_table', 10),
(47, '2023_12_11_144509_create_post_masters_table', 11),
(48, '2023_12_11_144510_create_posts_table', 11),
(49, '2023_12_14_120223_create_comments_table', 11),
(50, '2023_12_14_120235_create_likes_table', 11),
(51, '2023_12_14_120247_create_shares_table', 11),
(52, '2023_12_14_123614_add_pasts_id_to_surveys_table', 11),
(53, '2023_12_14_123628_add_pasts_id_to_polls_table', 11),
(54, '2023_12_14_123729_add_pasts_id_to_seeks_table', 11),
(55, '2023_12_14_181800_create_reviews_table', 11),
(56, '2023_12_14_181812_create_review_tags_table', 11),
(57, '2023_12_15_162307_add_logo_to_communities_table', 12),
(58, '2023_12_15_101008_create_points_table', 13),
(59, '2023_12_15_101916_create_saved_posts_table', 13),
(60, '2023_12_15_114951_create_friend_statuses_table', 13),
(61, '2023_12_15_115016_create_friends_table', 13),
(62, '2023_12_06_131446_create_user_interests_table', 14),
(63, '2023_12_20_105820_add_interset_to_user_interests_table', 14),
(64, '2023_12_20_162838_create_reviews_images_table', 15),
(65, '2023_12_20_162901_create_seeks_images_table', 15),
(66, '2023_12_20_180953_create_reposts_table', 16),
(67, '2023_12_21_125343_create_votes_table', 17),
(68, '2023_12_21_145858_add_repost_id_to_reposts_table', 17),
(69, '2023_12_21_152635_create_apposes_table', 17),
(70, '2023_12_21_171728_create_user_post_reviews_table', 18),
(71, '2023_12_22_111821_create_survey_ans_table', 19),
(72, '2023_12_26_110621_create_book_mark_comments_table', 20),
(73, '2023_12_28_164822_add_community_id_to_chat_images_table', 21),
(74, '2023_12_28_174202_create_favourite_chats_table', 21),
(75, '2023_12_28_174214_create_block_chats_table', 21),
(76, '2023_12_28_183308_add_chat_id_to_block_chats_table', 22),
(77, '2023_12_29_120507_create_share_post_comunnities_table', 22),
(78, '2023_12_29_180959_add_social_login_id_to_users_table', 22),
(79, '2024_01_04_100959_create_user_seraches_table', 23),
(80, '2024_01_04_122346_create_comment_replies_table', 24),
(81, '2024_01_04_122358_create_comment_stars_table', 24),
(82, '2024_01_04_122448_create_comment_book_marks_table', 24),
(83, '2024_01_04_175157_add_last_seen_to_users_table', 25),
(84, '2024_01_04_181111_add_hyper_link_to_reviews_table', 26),
(85, '2024_01_04_182611_create_report_posts_table', 27),
(86, '2024_01_05_170558_create_user_chat_images_table', 28),
(87, '2024_01_06_154747_create_start_reviews_table', 29),
(89, '2024_01_08_131655_add_hyper_link_to_seeks_table', 30),
(90, '2024_01_09_104625_create_previous_chats_table', 31),
(91, '2024_01_11_144053_create_notification_settings_table', 32),
(93, '2024_01_22_152928_create_post_tags_table', 34),
(94, '2024_01_22_162556_create_poll_users_table', 35),
(95, '2024_01_23_112937_add_discription_to_where_to_posts_table', 36),
(96, '2024_01_23_114014_add_hyperlink_to_polls_table', 37),
(97, '2024_01_23_114030_add_hyperlink_to_surveys_table', 38),
(98, '2024_01_22_110313_create_notifications_table', 39),
(99, '2024_01_24_120222_create_user_mute_notifications_table', 40),
(100, '2024_01_25_191220_add_repost_status_to_posts_table', 41),
(101, '2024_01_27_153734_add_image_to_apposes_table', 42),
(102, '2024_01_29_102709_add_day_id_to_posts_table', 43),
(103, '2024_01_30_155238_add_member_status_to_community_members_table', 44),
(104, '2024_01_30_173303_create_save_messsages_table', 45),
(105, '2024_01_31_155930_add_oppose_status_to_posts_table', 46),
(106, '2024_02_03_170343_add_file_to_comments_table', 47),
(107, '2024_02_05_203654_add_address_to_posts_table', 48),
(108, '2024_02_09_144355_add_rexperince_option_to_surveys_table', 49),
(109, '2024_02_09_145815_create_post_user_experiences_table', 50),
(110, '2024_02_09_150035_create_post_user_select_below_options_table', 51),
(111, '2024_02_12_125615_add_lat_long_to_posts_table', 52),
(112, '2024_02_15_103653_add_end_date_to_posts_table', 53),
(113, '2024_02_21_120522_add_image_to_user_post_reviews_table', 54),
(114, '2024_03_02_112057_add_city_to_posts_table', 55);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint UNSIGNED NOT NULL,
  `model_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `send_by` bigint UNSIGNED DEFAULT NULL,
  `community_id` bigint UNSIGNED DEFAULT NULL,
  `my_id` bigint UNSIGNED DEFAULT NULL,
  `post_id` bigint UNSIGNED DEFAULT NULL,
  `body` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notification_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subtype` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `user_id`, `send_by`, `community_id`, `my_id`, `post_id`, `body`, `notification_type`, `subtype`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1049, 126, 128, NULL, 128, 559, 'John wick Give You Point On Your Post', 'points', 'Review', 0, '2024-03-06 09:45:26', '2024-03-06 09:45:26', NULL),
(1050, 126, 128, NULL, 128, 559, 'John wick Give You Point On Your Post', 'points', 'Review', 0, '2024-03-06 09:45:28', '2024-03-06 09:45:28', NULL),
(1052, 128, 126, NULL, 126, NULL, 'Walter White Send A Friend Request', 'FriendRequest', NULL, 0, '2024-03-07 14:05:11', '2024-03-07 14:05:11', NULL),
(1062, 130, 129, NULL, 129, NULL, 'Chaitanya Vakalapudi Send A Friend Request', 'FriendRequest', NULL, 0, '2024-03-08 06:51:33', '2024-03-08 06:51:33', NULL),
(1063, 130, 129, NULL, 129, NULL, 'Chaitanya Vakalapudi Send A Friend Request', 'FriendRequest', NULL, 0, '2024-03-08 07:13:14', '2024-03-08 07:13:14', NULL),
(1065, 130, 129, NULL, 129, 639, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Review', 0, '2024-03-08 07:48:54', '2024-03-08 07:48:54', NULL),
(1066, 130, 129, NULL, 129, 640, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Review', 0, '2024-03-08 08:04:09', '2024-03-08 08:04:09', NULL),
(1067, 130, 129, NULL, 129, 641, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Seek', 0, '2024-03-08 08:21:58', '2024-03-08 08:21:58', NULL),
(1068, 129, 130, NULL, 130, 642, 'Spectator Posted Smothing', 'Post', 'Poll', 0, '2024-03-08 10:58:23', '2024-03-08 10:58:23', NULL),
(1069, 142, 129, NULL, 129, NULL, 'Chaitanya Vakalapudi Send A Friend Request', 'FriendRequest', NULL, 0, '2024-03-09 04:03:06', '2024-03-09 04:03:06', NULL),
(1070, 142, 130, NULL, 130, NULL, 'Spectator Send A Friend Request', 'FriendRequest', NULL, 0, '2024-03-09 04:06:23', '2024-03-09 04:06:23', NULL),
(1077, 126, 132, NULL, 132, 559, 'badmash2000 Give You Point On Your Post', 'points', 'Review', 0, '2024-03-09 05:23:27', '2024-03-09 05:23:27', NULL),
(1079, 126, 128, NULL, 128, 649, 'John wick Posted Smothing', 'Post', 'Survey', 0, '2024-03-09 06:12:08', '2024-03-09 06:12:08', NULL),
(1082, 126, 128, NULL, 128, 650, 'John wick Posted Smothing', 'Post', 'Survey', 0, '2024-03-09 06:13:25', '2024-03-09 06:13:25', NULL),
(1086, 128, 126, NULL, 126, 651, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-09 06:25:18', '2024-03-09 06:25:18', NULL),
(1088, 128, 126, NULL, 126, 652, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-09 06:30:31', '2024-03-09 06:30:31', NULL),
(1090, 126, 128, NULL, 128, 653, 'John wick Posted Smothing', 'Post', 'Review', 0, '2024-03-09 07:17:51', '2024-03-09 07:17:51', NULL),
(1091, 126, 128, NULL, 128, 654, 'John wick Posted Smothing', 'Post', 'Seek', 0, '2024-03-09 07:18:31', '2024-03-09 07:18:31', NULL),
(1092, 128, 126, NULL, 126, 655, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-09 07:26:54', '2024-03-09 07:26:54', NULL),
(1094, 128, 126, NULL, 126, 656, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-09 12:11:12', '2024-03-09 12:11:12', NULL),
(1096, 128, 126, NULL, 126, 657, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-09 12:23:25', '2024-03-09 12:23:25', NULL),
(1098, 128, 126, NULL, 126, 658, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-09 12:24:41', '2024-03-09 12:24:41', NULL),
(1100, 126, 128, NULL, 128, 658, 'John wick Commented On Your Post', 'comment', 'Survey', 0, '2024-03-09 12:30:43', '2024-03-09 12:30:43', NULL),
(1101, 128, 126, NULL, 126, 659, 'Walter White Commented On Your Post', 'comment', 'Survey', 0, '2024-03-09 12:37:37', '2024-03-09 12:37:37', NULL),
(1102, 126, 128, NULL, 128, 657, 'John wick Commented On Your Post', 'comment', 'Survey', 0, '2024-03-09 12:43:28', '2024-03-09 12:43:28', NULL),
(1103, 126, 128, NULL, 128, 657, 'John wick Commented On Your Post', 'comment', 'Survey', 0, '2024-03-09 12:43:38', '2024-03-09 12:43:38', NULL),
(1104, 126, 128, NULL, 128, 657, 'John wick Commented On Your Post', 'comment', 'Survey', 0, '2024-03-09 12:43:47', '2024-03-09 12:43:47', NULL),
(1105, 126, 128, NULL, 128, 657, 'John wick Commented On Your Post', 'comment', 'Survey', 0, '2024-03-09 12:44:17', '2024-03-09 12:44:17', NULL),
(1106, 126, 128, NULL, 128, 657, 'John wick Commented On Your Post', 'comment', 'Survey', 0, '2024-03-09 12:44:23', '2024-03-09 12:44:23', NULL),
(1107, 126, 128, NULL, 128, 657, 'John wick Commented On Your Post', 'comment', 'Survey', 0, '2024-03-09 12:45:03', '2024-03-09 12:45:03', NULL),
(1108, 126, 128, NULL, 128, 657, 'John wick Commented On Your Post', 'comment', 'Survey', 0, '2024-03-09 12:45:10', '2024-03-09 12:45:10', NULL),
(1109, 126, 128, NULL, 128, 657, 'John wick Commented On Your Post', 'comment', 'Survey', 0, '2024-03-09 12:45:14', '2024-03-09 12:45:14', NULL),
(1113, 128, 143, NULL, 143, 659, 'Arjun Reddy Commented On Your Post', 'comment', 'Survey', 0, '2024-03-09 13:01:36', '2024-03-09 13:01:36', NULL),
(1114, 126, 143, NULL, 143, 657, 'Arjun Reddy Commented On Your Post', 'comment', 'Survey', 0, '2024-03-09 13:10:32', '2024-03-09 13:10:32', NULL),
(1115, 126, 143, NULL, 143, 657, 'Arjun Reddy Commented On Your Post', 'comment', 'Survey', 0, '2024-03-09 13:10:48', '2024-03-09 13:10:48', NULL),
(1116, 128, 126, NULL, 126, 660, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-03-09 13:16:03', '2024-03-09 13:16:03', NULL),
(1118, 126, 128, NULL, 128, 660, 'John wick Give You Point On Your Post', 'points', 'Review', 0, '2024-03-09 13:17:50', '2024-03-09 13:17:50', NULL),
(1119, 126, 128, NULL, 128, 660, 'John wick Give You Point On Your Post', 'points', 'Review', 0, '2024-03-09 13:17:59', '2024-03-09 13:17:59', NULL),
(1120, 126, 128, NULL, 128, 660, 'John wick Give You Point On Your Post', 'points', 'Review', 0, '2024-03-09 13:18:15', '2024-03-09 13:18:15', NULL),
(1121, 126, 128, NULL, 128, 660, 'John wick Commented On Your Post', 'comment', 'recommend', 0, '2024-03-09 13:18:27', '2024-03-09 13:18:27', NULL),
(1122, 126, 143, NULL, 143, 660, 'Arjun Reddy Give You Point On Your Post', 'points', 'Review', 0, '2024-03-09 13:22:34', '2024-03-09 13:22:34', NULL),
(1123, 128, 143, NULL, 143, 661, 'Arjun Reddy Commented On Your Post', 'comment', 'recommend', 0, '2024-03-09 13:23:51', '2024-03-09 13:23:51', NULL),
(1124, 126, 128, NULL, 128, 660, 'John wick Commented On Your Post', 'comment', 'recommend', 0, '2024-03-09 13:25:16', '2024-03-09 13:25:16', NULL),
(1125, 126, 128, NULL, 128, 657, 'John wick Commented On Your Post', 'comment', 'Survey', 0, '2024-03-09 13:26:44', '2024-03-09 13:26:44', NULL),
(1126, 128, 143, NULL, 143, 661, 'Arjun Reddy Commented On Your Post', 'comment', 'recommend', 0, '2024-03-09 13:27:32', '2024-03-09 13:27:32', NULL),
(1127, 128, 126, NULL, 126, 662, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-03-09 13:30:01', '2024-03-09 13:30:01', NULL),
(1129, 126, 128, NULL, 128, 662, 'John wick Give You Point On Your Post', 'points', 'Review', 0, '2024-03-09 13:30:51', '2024-03-09 13:30:51', NULL),
(1130, 126, 128, NULL, 128, 662, 'John wick Commented On Your Post', 'comment', 'recommend', 0, '2024-03-09 13:30:56', '2024-03-09 13:30:56', NULL),
(1131, 126, 128, NULL, 128, 662, 'John wick Commented On Your Post', 'comment', 'recommend', 0, '2024-03-09 13:58:12', '2024-03-09 13:58:12', NULL),
(1132, 126, 128, NULL, 128, 662, 'John wick Give You Point On Your Post', 'points', 'Review', 0, '2024-03-09 13:59:05', '2024-03-09 13:59:05', NULL),
(1135, 130, 129, NULL, 129, 663, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Survey', 0, '2024-03-10 14:09:18', '2024-03-10 14:09:18', NULL),
(1136, 142, 129, NULL, 129, 663, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Survey', 0, '2024-03-10 14:09:18', '2024-03-10 14:09:18', NULL),
(1138, 129, 142, NULL, 142, NULL, 'Ravikiran kasarapu Send A Friend Request', 'FriendRequest', NULL, 1, '2024-03-10 14:11:36', '2024-03-11 05:45:52', NULL),
(1139, 126, 144, NULL, 144, 559, 'Prajwal Narkhede Commented On Your Post', 'comment', 'recommend', 0, '2024-03-11 06:39:45', '2024-03-11 06:39:45', NULL),
(1140, 126, 144, NULL, 144, 559, 'Prajwal Narkhede Give You Point On Your Post', 'points', 'Review', 0, '2024-03-11 06:40:02', '2024-03-11 06:40:02', NULL),
(1141, 126, 144, NULL, 144, 559, 'Prajwal Narkhede Give You Point On Your Post', 'points', 'Review', 0, '2024-03-11 06:40:09', '2024-03-11 06:40:09', NULL),
(1142, 126, 144, NULL, 144, 559, 'Prajwal Narkhede Give You Point On Your Post', 'points', 'Review', 0, '2024-03-11 06:40:22', '2024-03-11 06:40:22', NULL),
(1143, 126, 144, NULL, 144, 660, 'Prajwal Narkhede Give You Point On Your Post', 'points', 'Review', 0, '2024-03-11 06:42:28', '2024-03-11 06:42:28', NULL),
(1144, 126, 143, NULL, 143, 662, 'Arjun Reddy Give You Point On Your Post', 'points', 'Review', 0, '2024-03-11 06:44:10', '2024-03-11 06:44:10', NULL),
(1145, 126, 143, NULL, 143, 662, 'Arjun Reddy Commented On Your Post', 'comment', 'recommend', 0, '2024-03-11 06:44:19', '2024-03-11 06:44:19', NULL),
(1148, 128, 126, NULL, 126, 654, 'Walter White Give You Reviewed On Your Post', 'Review', 'recommend', 0, '2024-03-11 13:03:40', '2024-03-11 13:03:40', NULL),
(1149, 128, 126, NULL, 126, 654, 'Walter White Give You Reviewed On Your Post', 'Review', 'recommend', 0, '2024-03-11 13:05:38', '2024-03-11 13:05:38', NULL),
(1150, 143, 128, NULL, 128, 669, 'John wick Commented On Your Post', 'comment', 'Survey', 0, '2024-03-11 13:13:43', '2024-03-11 13:13:43', NULL),
(1151, 126, 128, NULL, 128, 672, 'John wick Posted Smothing', 'Post', 'Review', 0, '2024-03-11 13:23:26', '2024-03-11 13:23:26', NULL),
(1152, 128, 126, NULL, 126, 654, 'Walter White Give You Reviewed On Your Post', 'Review', 'recommend', 0, '2024-03-11 13:24:11', '2024-03-11 13:24:11', NULL),
(1153, 128, 126, NULL, 126, 673, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-03-11 13:27:58', '2024-03-11 13:27:58', NULL),
(1155, 126, 128, NULL, 128, 673, 'John wick Give You Point On Your Post', 'points', 'Review', 0, '2024-03-11 13:28:10', '2024-03-11 13:28:10', NULL),
(1156, 126, 128, NULL, 128, 673, 'John wick Commented On Your Post', 'comment', 'recommend', 0, '2024-03-11 13:28:14', '2024-03-11 13:28:14', NULL),
(1157, 126, 128, NULL, 128, 673, 'John wick Commented On Your Post', 'comment', 'recommend', 0, '2024-03-11 13:28:21', '2024-03-11 13:28:21', NULL),
(1158, 126, 128, NULL, 128, 674, 'John wick Posted Smothing', 'Post', 'Survey', 0, '2024-03-11 13:44:34', '2024-03-11 13:44:34', NULL),
(1159, 128, 126, NULL, 126, 675, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-11 13:46:39', '2024-03-11 13:46:39', NULL),
(1161, 128, 126, NULL, 126, 661, 'Walter White Commented On Your Post', 'comment', 'recommend', 0, '2024-03-11 13:49:14', '2024-03-11 13:49:14', NULL),
(1169, 129, 130, NULL, 130, 677, 'Spectator Posted Smothing', 'Post', 'Poll', 0, '2024-03-12 14:24:46', '2024-03-12 14:24:46', NULL),
(1170, 142, 130, NULL, 130, 677, 'Spectator Posted Smothing', 'Post', 'Poll', 0, '2024-03-12 14:24:46', '2024-03-12 14:24:46', NULL),
(1173, 129, 130, NULL, 130, 678, 'Spectator Posted Smothing', 'Post', 'Review', 1, '2024-03-12 14:26:25', '2024-03-12 16:17:52', NULL),
(1174, 142, 130, NULL, 130, 678, 'Spectator Posted Smothing', 'Post', 'Review', 0, '2024-03-12 14:26:26', '2024-03-12 14:26:26', NULL),
(1177, 129, 130, NULL, 130, 679, 'Spectator Posted Smothing', 'Post', 'Seek', 1, '2024-03-12 14:28:33', '2024-03-12 16:17:02', NULL),
(1178, 142, 130, NULL, 130, 679, 'Spectator Posted Smothing', 'Post', 'Seek', 0, '2024-03-12 14:28:33', '2024-03-12 14:28:33', NULL),
(1182, 145, 128, NULL, 128, 681, 'John wick Give You Point On Your Post', 'points', 'Review', 0, '2024-03-13 05:26:00', '2024-03-13 05:26:00', NULL),
(1183, 145, 128, NULL, 128, 681, 'John wick Commented On Your Post', 'comment', 'recommend', 0, '2024-03-13 05:26:09', '2024-03-13 05:26:09', NULL),
(1184, 145, 143, NULL, 143, 680, 'Arjun Reddy Give You Point On Your Post', 'points', 'Review', 0, '2024-03-13 05:30:43', '2024-03-13 05:30:43', NULL),
(1185, 145, 143, NULL, 143, 681, 'Arjun Reddy Give You Point On Your Post', 'points', 'Review', 0, '2024-03-13 05:31:03', '2024-03-13 05:31:03', NULL),
(1186, 126, 128, NULL, 128, 688, 'John wick Posted Smothing', 'Post', 'Survey', 0, '2024-03-13 06:16:16', '2024-03-13 06:16:16', NULL),
(1187, 126, 128, NULL, 128, 689, 'John wick Posted Smothing', 'Post', 'Survey', 0, '2024-03-13 06:17:17', '2024-03-13 06:17:17', NULL),
(1188, 126, 128, NULL, 128, 690, 'John wick Posted Smothing', 'Post', 'Survey', 0, '2024-03-13 06:18:09', '2024-03-13 06:18:09', NULL),
(1189, 126, 128, NULL, 128, 691, 'John wick Posted Smothing', 'Post', 'Review', 0, '2024-03-13 06:19:08', '2024-03-13 06:19:08', NULL),
(1190, 126, 128, NULL, 128, 692, 'John wick Posted Smothing', 'Post', 'Seek', 0, '2024-03-13 06:20:29', '2024-03-13 06:20:29', NULL),
(1191, 128, 146, NULL, 146, 692, 'Mrunal Thakur Give You Reviewed On Your Post', 'Review', 'recommend', 0, '2024-03-13 06:21:33', '2024-03-13 06:21:33', NULL),
(1192, 128, 126, NULL, 126, 693, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-13 07:02:17', '2024-03-13 07:02:17', NULL),
(1194, 146, 126, NULL, 126, 694, 'Walter White Commented On Your Post', 'comment', 'poll', 1, '2024-03-13 07:29:18', '2024-03-19 11:56:47', NULL),
(1195, 126, 128, NULL, 128, 696, 'John wick Posted Smothing', 'Post', 'Survey', 0, '2024-03-13 07:38:43', '2024-03-13 07:38:43', NULL),
(1196, 126, 128, NULL, 128, 697, 'John wick Posted Smothing', 'Post', 'Survey', 0, '2024-03-13 07:40:49', '2024-03-13 07:40:49', NULL),
(1197, 128, 126, NULL, 126, 698, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-03-13 07:44:56', '2024-03-13 07:44:56', NULL),
(1199, 126, 128, NULL, 128, 699, 'John wick Posted Smothing', 'Post', 'Review', 0, '2024-03-13 07:48:48', '2024-03-13 07:48:48', NULL),
(1200, 128, 126, NULL, 126, 700, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-03-13 07:56:48', '2024-03-13 07:56:48', NULL),
(1202, 126, 128, NULL, 128, 700, 'John wick Give You Point On Your Post', 'points', 'Review', 0, '2024-03-13 07:57:06', '2024-03-13 07:57:06', NULL),
(1203, 126, 128, NULL, 128, 700, 'John wick Commented On Your Post', 'comment', 'recommend', 0, '2024-03-13 07:57:21', '2024-03-13 07:57:21', NULL),
(1204, 126, 128, NULL, 128, 700, 'John wick Commented On Your Post', 'comment', 'recommend', 0, '2024-03-13 07:57:29', '2024-03-13 07:57:29', NULL),
(1205, 126, 128, NULL, 128, 700, 'John wick Commented On Your Post', 'comment', 'recommend', 0, '2024-03-13 07:57:34', '2024-03-13 07:57:34', NULL),
(1206, 126, 128, NULL, 128, 700, 'John wick Commented On Your Post', 'comment', 'recommend', 0, '2024-03-13 07:57:40', '2024-03-13 07:57:40', NULL),
(1207, 126, 128, NULL, 128, 700, 'John wick Commented On Your Post', 'comment', 'recommend', 0, '2024-03-13 07:57:47', '2024-03-13 07:57:47', NULL),
(1208, 126, 128, NULL, 128, 701, 'John wick Posted Smothing', 'Post', 'Seek', 0, '2024-03-13 11:27:09', '2024-03-13 11:27:09', NULL),
(1235, 126, 128, NULL, 128, 702, 'John wick Posted Smothing', 'Post', 'Survey', 0, '2024-03-13 11:49:38', '2024-03-13 11:49:38', NULL),
(1236, 126, 128, NULL, 128, 703, 'John wick Posted Smothing', 'Post', 'Poll', 0, '2024-03-13 11:59:06', '2024-03-13 11:59:06', NULL),
(1237, 128, 128, NULL, 128, 692, 'John wick Give You Reviewed On Your Post', 'Review', 'recommend', 0, '2024-03-13 12:04:31', '2024-03-13 12:04:31', NULL),
(1238, 128, 128, NULL, 128, 701, 'John wick Give You Reviewed On Your Post', 'Review', 'recommend', 0, '2024-03-13 12:04:58', '2024-03-13 12:04:58', NULL),
(1239, 126, 128, NULL, 128, 544, 'John wick Give You Point On Your Post', 'points', 'Review', 0, '2024-03-13 12:12:18', '2024-03-13 12:12:18', NULL),
(1240, 132, 128, NULL, 128, 647, 'John wick Give You Point On Your Post', 'points', 'Review', 1, '2024-03-13 12:14:46', '2024-04-17 12:48:46', NULL),
(1241, 126, 128, NULL, 128, 704, 'John wick Posted Smothing', 'Post', 'Poll', 0, '2024-03-13 12:17:48', '2024-03-13 12:17:48', NULL),
(1242, 128, 126, NULL, 126, 705, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-13 12:26:40', '2024-03-13 12:26:40', NULL),
(1244, 126, 128, NULL, 128, 706, 'John wick Posted Smothing', 'Post', 'Survey', 0, '2024-03-13 12:44:31', '2024-03-13 12:44:31', NULL),
(1245, 128, 126, NULL, 126, 707, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-13 12:51:42', '2024-03-13 12:51:42', NULL),
(1247, 129, 130, NULL, 130, 711, 'Spectator Posted Smothing', 'Post', 'Review', 1, '2024-03-13 16:30:56', '2024-03-13 16:32:17', NULL),
(1248, 142, 130, NULL, 130, 711, 'Spectator Posted Smothing', 'Post', 'Review', 0, '2024-03-13 16:30:57', '2024-03-13 16:30:57', NULL),
(1251, 128, 126, NULL, 126, 712, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-14 05:02:22', '2024-03-14 05:02:22', NULL),
(1253, 130, 129, NULL, 129, 713, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Review', 0, '2024-03-14 07:17:40', '2024-03-14 07:17:40', NULL),
(1255, 142, 129, NULL, 129, 713, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Review', 0, '2024-03-14 07:17:40', '2024-03-14 07:17:40', NULL),
(1256, 128, 126, NULL, 126, 714, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-14 09:28:08', '2024-03-14 09:28:08', NULL),
(1258, 128, 126, NULL, 126, 715, 'Walter White Posted Smothing', 'Post', 'Poll', 0, '2024-03-14 09:31:42', '2024-03-14 09:31:42', NULL),
(1260, 128, 126, NULL, 126, 716, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-14 09:32:44', '2024-03-14 09:32:44', NULL),
(1262, 128, 126, NULL, 126, 717, 'Walter White Posted Smothing', 'Post', 'Poll', 0, '2024-03-14 09:33:54', '2024-03-14 09:33:54', NULL),
(1264, 128, 146, NULL, 146, 701, 'Mrunal Thakur Give You Reviewed On Your Post', 'Review', 'recommend', 0, '2024-03-14 09:40:30', '2024-03-14 09:40:30', NULL),
(1265, 130, 129, NULL, 129, 719, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Review', 0, '2024-03-14 16:42:29', '2024-03-14 16:42:29', NULL),
(1267, 142, 129, NULL, 129, 719, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Review', 0, '2024-03-14 16:42:29', '2024-03-14 16:42:29', NULL),
(1268, 146, 149, NULL, 149, 723, 'Peater parker Give You Reviewed On Your Post', 'Review', 'recommend', 1, '2024-03-15 05:20:09', '2024-03-19 11:56:51', NULL),
(1269, 128, 126, NULL, 126, 734, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-15 06:30:04', '2024-03-15 06:30:04', NULL),
(1271, 128, 126, NULL, 126, 735, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-03-15 06:31:33', '2024-03-15 06:31:33', NULL),
(1273, 126, 128, NULL, 128, 740, 'John wick Posted Smothing', 'Post', 'Survey', 0, '2024-03-15 12:57:53', '2024-03-15 12:57:53', NULL),
(1274, 126, 128, NULL, 128, 742, 'John wick Posted Smothing', 'Post', 'Survey', 0, '2024-03-15 13:05:30', '2024-03-15 13:05:30', NULL),
(1275, 126, 128, NULL, 128, 743, 'John wick Posted Smothing', 'Post', 'Review', 0, '2024-03-15 13:08:43', '2024-03-15 13:08:43', NULL),
(1276, 126, 128, NULL, 128, 744, 'John wick Posted Smothing', 'Post', 'Review', 0, '2024-03-15 13:11:02', '2024-03-15 13:11:02', NULL),
(1277, 128, 126, NULL, 126, 745, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-15 13:12:57', '2024-03-15 13:12:57', NULL),
(1278, 128, 126, NULL, 126, 746, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-15 13:14:37', '2024-03-15 13:14:37', NULL),
(1279, 128, 126, NULL, 126, 747, 'Walter White Posted Smothing', 'Post', 'Poll', 0, '2024-03-15 13:16:11', '2024-03-15 13:16:11', NULL),
(1280, 126, 128, 35, 128, 753, 'John wick Posted Smothing', 'CommunityPost', 'Survey', 1, '2024-03-15 13:24:47', '2024-04-23 04:59:13', NULL),
(1281, 126, 128, NULL, 128, 754, 'John wick Posted Smothing', 'Post', 'Review', 1, '2024-03-15 13:31:18', '2024-03-19 12:04:18', NULL),
(1282, 128, 126, NULL, 126, 755, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-03-15 13:32:13', '2024-03-15 13:32:13', NULL),
(1283, 126, 128, NULL, 128, 756, 'John wick Posted Smothing', 'Post', 'Review', 1, '2024-03-15 13:35:39', '2024-03-19 12:04:14', NULL),
(1284, 128, 126, NULL, 126, 757, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-03-15 13:37:05', '2024-03-15 13:37:05', NULL),
(1285, 128, 126, NULL, 126, 758, 'Walter White Posted Smothing', 'Post', 'Poll', 0, '2024-03-18 05:36:41', '2024-03-18 05:36:41', NULL),
(1286, 130, 129, NULL, 129, 760, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Poll', 0, '2024-03-18 11:07:23', '2024-03-18 11:07:23', NULL),
(1287, 142, 129, NULL, 129, 760, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Poll', 0, '2024-03-18 11:07:24', '2024-03-18 11:07:24', NULL),
(1288, 129, 130, NULL, 130, 761, 'Spectator Posted Smothing', 'Post', 'Seek', 0, '2024-03-18 11:23:03', '2024-03-18 11:23:03', NULL),
(1289, 142, 130, NULL, 130, 761, 'Spectator Posted Smothing', 'Post', 'Seek', 0, '2024-03-18 11:23:03', '2024-03-18 11:23:03', NULL),
(1290, 128, 126, NULL, 126, 762, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-19 05:39:17', '2024-03-19 05:39:17', NULL),
(1291, 128, 126, NULL, 126, 763, 'Walter White Posted Smothing', 'Post', 'Poll', 0, '2024-03-19 05:43:18', '2024-03-19 05:43:18', NULL),
(1292, 129, 146, NULL, 146, 760, 'Mrunal Thakur Commented On Your Post', 'comment', 'poll', 0, '2024-03-19 05:44:31', '2024-03-19 05:44:31', NULL),
(1293, 130, 146, NULL, 146, 761, 'Mrunal Thakur Give You Reviewed On Your Post', 'Review', 'recommend', 0, '2024-03-19 05:44:53', '2024-03-19 05:44:53', NULL),
(1294, 130, 146, NULL, 146, 761, 'Mrunal Thakur Give You Reviewed On Your Post', 'Review', 'recommend', 0, '2024-03-19 05:45:08', '2024-03-19 05:45:08', NULL),
(1295, 128, 126, NULL, 126, 764, 'Walter White Posted Smothing', 'Post', 'Poll', 0, '2024-03-19 05:49:28', '2024-03-19 05:49:28', NULL),
(1296, 130, 146, NULL, 146, 761, 'Mrunal Thakur Give You Reviewed On Your Post', 'Review', 'recommend', 0, '2024-03-19 05:53:29', '2024-03-19 05:53:29', NULL),
(1297, 128, 126, NULL, 126, 766, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-03-19 05:56:26', '2024-03-19 05:56:26', NULL),
(1298, 128, 126, NULL, 126, 767, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-03-19 05:59:23', '2024-03-19 05:59:23', NULL),
(1299, 126, 128, NULL, 128, 768, 'John wick Posted Smothing', 'Post', 'Survey', 1, '2024-03-19 06:01:22', '2024-03-19 12:04:11', NULL),
(1300, 128, 126, NULL, 126, 769, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-19 06:04:28', '2024-03-19 06:04:28', NULL),
(1301, 130, 155, NULL, 155, 761, 'Tejas Langote Give You Reviewed On Your Post', 'Review', 'recommend', 0, '2024-03-19 06:08:11', '2024-03-19 06:08:11', NULL),
(1302, 126, 146, NULL, 146, 769, 'Mrunal Thakur Commented On Your Post', 'comment', 'Survey', 0, '2024-03-19 06:10:33', '2024-03-19 06:10:33', NULL),
(1303, 155, 126, NULL, 126, 774, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 06:54:45', '2024-03-19 06:54:45', NULL),
(1304, 146, 126, NULL, 126, 772, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 06:55:11', '2024-03-19 06:55:11', NULL),
(1305, 128, 126, NULL, 126, 775, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-03-19 06:58:49', '2024-03-19 06:58:49', NULL),
(1306, 128, 126, NULL, 126, 777, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-03-19 07:04:35', '2024-03-19 07:04:35', NULL),
(1307, 146, 126, NULL, 126, 776, 'Walter White Give You Point On Your Post', 'points', 'Review', 1, '2024-03-19 07:41:29', '2024-03-19 11:56:54', NULL),
(1308, 146, 126, NULL, 126, 770, 'Walter White Give You Point On Your Post', 'points', 'Review', 1, '2024-03-19 07:41:34', '2024-03-19 11:56:55', NULL),
(1309, 128, 126, NULL, 126, 778, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-03-19 07:47:38', '2024-03-19 07:47:38', NULL),
(1310, 128, 126, NULL, 126, 780, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-03-19 07:51:06', '2024-03-19 07:51:06', NULL),
(1311, 145, 126, NULL, 126, 681, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 08:57:23', '2024-03-19 08:57:23', NULL),
(1312, 132, 126, NULL, 126, 647, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 09:00:21', '2024-04-17 12:48:44', '2024-04-17 12:48:44'),
(1313, 132, 126, NULL, 126, 647, 'Walter White Commented On Your Post', 'comment', 'recommend', 1, '2024-03-19 09:00:30', '2024-04-17 12:48:47', NULL),
(1314, 155, 126, NULL, 126, 771, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 10:05:21', '2024-03-19 10:05:21', NULL),
(1315, 128, 126, 35, 126, 783, 'Walter White Posted Smothing', 'CommunityPost', 'Survey', 0, '2024-03-19 11:08:29', '2024-03-19 11:08:29', NULL),
(1316, 130, 126, NULL, 126, 761, 'Walter White Give You Reviewed On Your Post', 'Review', 'recommend', 0, '2024-03-19 11:09:05', '2024-03-19 11:09:05', NULL),
(1317, 126, 146, NULL, 146, 783, 'Mrunal Thakur Commented On Your Post', 'comment', 'Survey', 0, '2024-03-19 11:10:02', '2024-03-19 11:10:02', NULL),
(1318, 128, 126, NULL, 126, 784, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-03-19 11:11:41', '2024-03-19 11:11:41', NULL),
(1319, 146, 126, NULL, 126, NULL, 'Walter White Send A Friend Request', 'FriendRequest', NULL, 1, '2024-03-19 11:11:55', '2024-03-19 11:56:55', NULL),
(1320, 128, 126, NULL, 126, 743, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:13:39', '2024-03-19 11:13:39', NULL),
(1321, 128, 126, NULL, 126, 744, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:14:50', '2024-03-19 11:14:50', NULL),
(1322, 146, 126, NULL, 126, 736, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:39', '2024-03-19 11:16:39', NULL),
(1323, 146, 126, NULL, 126, 736, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:40', '2024-03-19 11:16:40', NULL),
(1324, 146, 126, NULL, 126, 779, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:46', '2024-03-19 11:16:46', NULL),
(1325, 146, 126, NULL, 126, 779, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:49', '2024-03-19 11:16:49', NULL),
(1326, 146, 126, NULL, 126, 779, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:50', '2024-03-19 11:16:50', NULL),
(1327, 146, 126, NULL, 126, 779, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:50', '2024-03-19 11:16:50', NULL),
(1328, 146, 126, NULL, 126, 779, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:51', '2024-03-19 11:16:51', NULL),
(1329, 146, 126, NULL, 126, 779, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:51', '2024-03-19 11:16:51', NULL),
(1330, 146, 126, NULL, 126, 779, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:52', '2024-03-19 11:16:52', NULL),
(1331, 146, 126, NULL, 126, 779, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:52', '2024-03-19 11:16:52', NULL),
(1332, 146, 126, NULL, 126, 779, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:53', '2024-03-19 11:16:53', NULL),
(1333, 146, 126, NULL, 126, 779, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:53', '2024-03-19 11:16:53', NULL),
(1334, 146, 126, NULL, 126, 779, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:54', '2024-03-19 11:16:54', NULL),
(1335, 146, 126, NULL, 126, 779, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:54', '2024-03-19 11:16:54', NULL),
(1336, 146, 126, NULL, 126, 779, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:54', '2024-03-19 11:16:54', NULL),
(1337, 146, 126, NULL, 126, 779, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:16:55', '2024-03-19 11:16:55', NULL),
(1338, 129, 126, NULL, 126, 713, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:17:07', '2024-03-19 11:17:07', NULL),
(1339, 129, 126, NULL, 126, 713, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:17:07', '2024-03-19 11:17:07', NULL),
(1340, 129, 126, NULL, 126, 713, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:17:08', '2024-03-19 11:17:08', NULL),
(1341, 129, 126, NULL, 126, 713, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:17:08', '2024-03-19 11:17:08', NULL),
(1342, 129, 126, NULL, 126, 713, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:17:09', '2024-03-19 11:17:09', NULL),
(1343, 129, 126, NULL, 126, 713, 'Walter White Give You Point On Your Post', 'points', 'Review', 1, '2024-03-19 11:17:09', '2024-04-23 06:03:15', NULL),
(1344, 129, 126, NULL, 126, 713, 'Walter White Give You Point On Your Post', 'points', 'Review', 1, '2024-03-19 11:17:22', '2024-04-23 06:03:14', NULL),
(1345, 129, 126, NULL, 126, 713, 'Walter White Give You Point On Your Post', 'points', 'Review', 1, '2024-03-19 11:17:23', '2024-03-24 02:41:46', NULL),
(1346, 129, 126, NULL, 126, 713, 'Walter White Give You Point On Your Post', 'points', 'Review', 1, '2024-03-19 11:17:23', '2024-04-23 06:03:14', NULL),
(1347, 129, 126, NULL, 126, 713, 'Walter White Give You Point On Your Post', 'points', 'Review', 1, '2024-03-19 11:17:24', '2024-03-24 02:41:44', NULL),
(1348, 129, 126, NULL, 126, 713, 'Walter White Give You Point On Your Post', 'points', 'Review', 1, '2024-03-19 11:17:25', '2024-03-24 02:41:45', NULL),
(1349, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:43:51', '2024-03-19 11:43:51', NULL),
(1350, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:43:58', '2024-03-19 11:43:58', NULL),
(1351, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:43:58', '2024-03-19 11:43:58', NULL),
(1352, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:43:59', '2024-03-19 11:43:59', NULL),
(1353, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:43:59', '2024-03-19 11:43:59', NULL),
(1354, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:43:59', '2024-03-19 11:43:59', NULL),
(1355, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:44:00', '2024-03-19 11:44:00', NULL),
(1356, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:44:00', '2024-03-19 11:44:00', NULL),
(1357, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:44:01', '2024-03-19 11:44:01', NULL),
(1358, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:44:01', '2024-03-19 11:44:01', NULL),
(1359, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:44:02', '2024-03-19 11:44:02', NULL),
(1360, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 1, '2024-03-19 11:44:02', '2024-03-19 11:56:40', NULL),
(1361, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:44:02', '2024-03-19 11:44:02', NULL),
(1362, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 1, '2024-03-19 11:44:03', '2024-04-22 07:22:50', NULL),
(1363, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 1, '2024-03-19 11:44:03', '2024-04-22 07:22:05', NULL),
(1364, 146, 126, NULL, 126, 765, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:44:04', '2024-03-19 11:44:04', NULL),
(1365, 146, 126, NULL, 126, 729, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:44:15', '2024-03-19 11:44:15', NULL),
(1366, 146, 126, NULL, 126, 724, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:44:16', '2024-03-19 11:44:16', NULL),
(1367, 126, 146, NULL, 146, 780, 'Mrunal Thakur Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:54:32', '2024-03-19 11:54:32', NULL),
(1368, 126, 146, NULL, 146, 780, 'Mrunal Thakur Give You Point On Your Post', 'points', 'Review', 1, '2024-03-19 11:54:34', '2024-03-19 12:04:07', '2024-03-19 12:04:07'),
(1369, 126, 146, NULL, 146, 780, 'Mrunal Thakur Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:54:35', '2024-03-19 11:54:35', NULL),
(1370, 126, 146, NULL, 146, 777, 'Mrunal Thakur Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:54:51', '2024-03-19 11:54:51', NULL),
(1371, 145, 146, NULL, 146, 681, 'Mrunal Thakur Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:55:19', '2024-03-19 11:55:19', NULL),
(1372, 145, 146, NULL, 146, 681, 'Mrunal Thakur Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:55:20', '2024-03-19 11:55:20', NULL),
(1373, 126, 146, NULL, 146, 544, 'Mrunal Thakur Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:55:37', '2024-03-19 11:55:37', NULL),
(1374, 126, 146, NULL, 146, 544, 'Mrunal Thakur Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 11:55:40', '2024-03-19 11:55:40', NULL),
(1375, 155, 126, NULL, 126, NULL, 'Walter White Send A Friend Request', 'FriendRequest', NULL, 0, '2024-03-19 12:00:20', '2024-03-19 12:00:20', NULL),
(1376, 128, 126, NULL, 126, 785, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-19 12:05:26', '2024-03-19 12:05:26', NULL),
(1377, 128, 126, NULL, 126, 786, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-19 12:07:19', '2024-03-19 12:07:19', NULL),
(1378, 146, 126, NULL, 126, 779, 'Walter White Give You Point On Your Post', 'points', 'Review', 0, '2024-03-19 12:16:38', '2024-03-19 12:16:38', NULL),
(1379, 128, 126, NULL, 126, 787, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-19 12:18:53', '2024-03-19 12:18:53', NULL),
(1380, 128, 126, NULL, 126, 790, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-19 12:53:46', '2024-03-19 12:53:46', NULL),
(1381, 128, 126, NULL, 126, 792, 'Walter White Posted Smothing', 'Post', 'Survey', 0, '2024-03-19 13:09:12', '2024-03-19 13:09:12', NULL),
(1382, 130, 129, NULL, 129, 794, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Seek', 0, '2024-03-19 13:57:33', '2024-03-19 13:57:33', NULL),
(1383, 142, 129, NULL, 129, 794, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Seek', 0, '2024-03-19 13:57:33', '2024-03-19 13:57:33', NULL),
(1384, 130, 129, NULL, 129, 795, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Poll', 0, '2024-03-19 13:58:47', '2024-03-19 13:58:47', NULL),
(1385, 142, 129, NULL, 129, 795, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Poll', 0, '2024-03-19 13:58:47', '2024-03-19 13:58:47', NULL),
(1386, 130, 129, NULL, 129, 796, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Review', 0, '2024-03-19 13:59:38', '2024-03-19 13:59:38', NULL),
(1387, 142, 129, NULL, 129, 796, 'Chaitanya Vakalapudi Posted Smothing', 'Post', 'Review', 0, '2024-03-19 13:59:38', '2024-03-19 13:59:38', NULL),
(1388, 129, 158, NULL, 158, 796, 'Ram Give You Point On Your Post', 'points', 'Review', 1, '2024-03-23 15:52:00', '2024-03-24 02:41:39', NULL),
(1389, 129, 160, NULL, 160, 640, 'ViRtual2092 Give You Point On Your Post', 'points', 'Review', 1, '2024-03-28 17:44:53', '2024-04-23 06:03:12', NULL),
(1390, 129, 160, NULL, 160, 640, 'ViRtual2092 Give You Point On Your Post', 'points', 'Review', 1, '2024-03-28 17:44:56', '2024-04-23 06:03:11', NULL),
(1391, 129, 160, NULL, 160, 796, 'ViRtual2092 Give You Point On Your Post', 'points', 'Review', 1, '2024-03-28 17:45:00', '2024-04-23 06:03:09', NULL),
(1392, 126, 160, NULL, 160, 780, 'ViRtual2092 Give You Point On Your Post', 'points', 'Review', 0, '2024-03-28 17:57:02', '2024-03-28 17:57:02', NULL),
(1395, 171, 172, NULL, 172, NULL, 'Chay Send A Friend Request', 'FriendRequest', NULL, 1, '2024-03-30 16:31:41', '2024-03-31 16:21:24', NULL),
(1396, 142, 172, NULL, 172, NULL, 'Chay Send A Friend Request', 'FriendRequest', NULL, 0, '2024-03-30 16:32:14', '2024-03-30 16:32:14', NULL),
(1397, 129, 172, NULL, 172, NULL, 'Chay Send A Friend Request', 'FriendRequest', NULL, 0, '2024-03-30 16:32:36', '2024-03-30 16:32:36', NULL),
(1398, 172, 170, NULL, 170, 801, 'hello980 Give You Point On Your Post', 'points', 'Review', 1, '2024-03-30 17:45:47', '2024-03-30 17:49:40', '2024-03-30 17:49:40'),
(1399, 172, 170, NULL, 170, 801, 'hello980 Give You Point On Your Post', 'points', 'Review', 1, '2024-03-30 17:45:48', '2024-03-30 17:49:39', '2024-03-30 17:49:39'),
(1400, 172, 170, NULL, 170, 801, 'hello980 Give You Point On Your Post', 'points', 'Review', 1, '2024-03-30 17:45:53', '2024-03-30 17:49:37', '2024-03-30 17:49:37'),
(1401, 172, 170, NULL, 170, 801, 'hello980 Give You Point On Your Post', 'points', 'Review', 1, '2024-03-30 17:46:04', '2024-03-30 17:49:36', '2024-03-30 17:49:36'),
(1402, 172, 170, NULL, 170, 801, 'hello980 Give You Point On Your Post', 'points', 'Review', 1, '2024-03-30 17:46:33', '2024-03-30 17:49:34', '2024-03-30 17:49:34'),
(1403, 172, 170, NULL, 170, 801, 'hello980 Give You Point On Your Post', 'points', 'Review', 1, '2024-03-30 17:46:36', '2024-03-30 17:49:33', '2024-03-30 17:49:33'),
(1404, 172, 170, NULL, 170, 801, 'hello980 Give You Point On Your Post', 'points', 'Review', 1, '2024-03-30 17:46:48', '2024-03-30 17:49:27', '2024-03-30 17:49:27'),
(1405, 172, 170, NULL, 170, 801, 'hello980 Give You Point On Your Post', 'points', 'Review', 1, '2024-03-30 17:46:59', '2024-03-30 17:49:15', '2024-03-30 17:49:15'),
(1406, 172, 170, NULL, 170, 801, 'hello980 Give You Point On Your Post', 'points', 'Review', 1, '2024-03-30 17:47:04', '2024-03-30 17:49:11', '2024-03-30 17:49:11'),
(1407, 172, 170, NULL, 170, 801, 'hello980 Give You Point On Your Post', 'points', 'Review', 1, '2024-03-30 17:49:59', '2024-03-30 17:50:11', NULL),
(1408, 170, 172, NULL, 172, 802, 'Chay Commented On Your Post', 'comment', 'recommend', 0, '2024-03-30 18:17:46', '2024-03-30 18:17:46', NULL),
(1409, 172, 171, NULL, 171, 814, 'Vamsi Krishna Chava Give You Point On Your Post', 'points', 'Review', 1, '2024-03-31 16:18:32', '2024-03-31 16:20:24', NULL),
(1410, 172, 171, NULL, 171, 814, 'Vamsi Krishna Chava Give You Point On Your Post', 'points', 'Review', 1, '2024-03-31 16:18:48', '2024-03-31 16:20:25', NULL),
(1411, 172, 174, NULL, 174, 814, 'Teja Dadi Give You Point On Your Post', 'points', 'Review', 0, '2024-04-01 15:32:56', '2024-04-01 15:32:56', NULL),
(1412, 172, 174, NULL, 174, 814, 'Teja Dadi Commented On Your Post', 'comment', 'recommend', 0, '2024-04-01 15:33:22', '2024-04-01 15:33:22', NULL),
(1413, 172, 175, NULL, 175, 809, 'sandeep Commented On Your Post', 'comment', 'recommend', 1, '2024-04-02 16:43:23', '2024-04-02 16:43:54', NULL),
(1414, 175, 172, NULL, 172, NULL, 'Chay Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-02 16:44:16', '2024-04-02 16:44:16', NULL),
(1415, 171, 175, NULL, 175, NULL, 'sandeep Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-02 16:45:01', '2024-04-02 16:45:01', NULL),
(1416, 172, 176, NULL, 176, NULL, 'koti rajesh Send A Friend Request', 'FriendRequest', NULL, 1, '2024-04-02 16:45:06', '2024-04-02 18:38:33', NULL),
(1417, 172, 175, NULL, 175, 814, 'sandeep Give You Point On Your Post', 'points', 'Review', 1, '2024-04-02 16:47:06', '2024-04-02 18:38:33', NULL),
(1418, 172, 175, NULL, 175, 813, 'sandeep Give You Point On Your Post', 'points', 'Review', 1, '2024-04-02 16:47:10', '2024-04-02 18:38:32', NULL),
(1419, 172, 175, NULL, 175, 813, 'sandeep Give You Point On Your Post', 'points', 'Review', 1, '2024-04-02 16:47:16', '2024-04-02 17:10:40', NULL),
(1420, 175, 177, NULL, 177, NULL, 'dinesh143GK Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-02 16:48:08', '2024-04-02 16:48:08', NULL),
(1421, 171, 177, NULL, 177, NULL, 'dinesh143GK Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-02 16:48:17', '2024-04-02 16:48:17', NULL),
(1422, 172, 178, NULL, 178, 807, 'Raju@VEGESNA711 Give You Point On Your Post', 'points', 'Review', 1, '2024-04-02 16:52:18', '2024-04-02 18:38:31', NULL),
(1423, 172, 178, NULL, 178, NULL, 'Raju@VEGESNA711 Send A Friend Request', 'FriendRequest', NULL, 1, '2024-04-02 16:52:35', '2024-04-02 17:11:02', NULL),
(1424, 177, 172, NULL, 172, NULL, 'Chay Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-02 17:11:13', '2024-04-02 17:11:13', NULL),
(1425, 177, 172, NULL, 172, NULL, 'Chay Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-02 18:06:29', '2024-04-02 18:06:29', NULL),
(1426, 174, 181, NULL, 181, 817, 'charan Give You Point On Your Post', 'points', 'Review', 0, '2024-04-02 18:45:36', '2024-04-02 18:45:36', NULL),
(1427, 172, 174, NULL, 174, 816, 'Teja Dadi Commented On Your Post', 'comment', 'recommend', 1, '2024-04-02 19:03:15', '2024-04-03 05:22:00', NULL),
(1428, 171, 172, NULL, 172, 818, 'Chay Posted Smothing', 'Post', 'Survey', 0, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL),
(1429, 175, 172, NULL, 172, 818, 'Chay Posted Smothing', 'Post', 'Survey', 0, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL),
(1430, 176, 172, NULL, 172, 818, 'Chay Posted Smothing', 'Post', 'Survey', 0, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL),
(1431, 178, 172, NULL, 172, 818, 'Chay Posted Smothing', 'Post', 'Survey', 0, '2024-04-03 05:42:10', '2024-04-03 05:42:10', NULL),
(1432, 171, 175, NULL, 175, NULL, 'sandeep Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-03 05:43:27', '2024-04-03 05:43:27', NULL),
(1433, 181, 172, NULL, 172, NULL, 'Chay Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-03 09:50:35', '2024-04-03 09:50:35', NULL),
(1434, 179, 172, NULL, 172, NULL, 'Chay Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-03 09:51:03', '2024-04-03 09:51:03', NULL),
(1435, 171, 172, NULL, 172, 819, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-03 10:09:24', '2024-04-03 10:09:24', NULL),
(1436, 175, 172, NULL, 172, 819, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-03 10:09:24', '2024-04-03 10:09:24', NULL),
(1437, 176, 172, NULL, 172, 819, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-03 10:09:24', '2024-04-03 10:09:24', NULL),
(1438, 178, 172, NULL, 172, 819, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-03 10:09:24', '2024-04-03 10:09:24', NULL),
(1439, 179, 172, NULL, 172, 819, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-03 10:09:25', '2024-04-03 10:09:25', NULL),
(1440, 174, 172, NULL, 172, NULL, 'Chay Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-03 14:03:51', '2024-04-03 14:03:51', NULL),
(1441, 171, 172, NULL, 172, 820, 'Chay Posted Smothing', 'Post', 'Seek', 0, '2024-04-03 14:57:16', '2024-04-03 14:57:16', NULL),
(1442, 175, 172, NULL, 172, 820, 'Chay Posted Smothing', 'Post', 'Seek', 0, '2024-04-03 14:57:16', '2024-04-03 14:57:16', NULL),
(1443, 176, 172, NULL, 172, 820, 'Chay Posted Smothing', 'Post', 'Seek', 0, '2024-04-03 14:57:17', '2024-04-03 14:57:17', NULL),
(1444, 178, 172, NULL, 172, 820, 'Chay Posted Smothing', 'Post', 'Seek', 0, '2024-04-03 14:57:17', '2024-04-03 14:57:17', NULL),
(1445, 179, 172, NULL, 172, 820, 'Chay Posted Smothing', 'Post', 'Seek', 0, '2024-04-03 14:57:17', '2024-04-03 14:57:17', NULL),
(1446, 171, 172, NULL, 172, 821, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-04 10:57:58', '2024-04-04 10:57:58', NULL),
(1447, 175, 172, NULL, 172, 821, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-04 10:57:58', '2024-04-04 10:57:58', NULL),
(1448, 176, 172, NULL, 172, 821, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-04 10:57:59', '2024-04-04 10:57:59', NULL),
(1449, 178, 172, NULL, 172, 821, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-04 10:57:59', '2024-04-04 10:57:59', NULL),
(1450, 179, 172, NULL, 172, 821, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-04 10:57:59', '2024-04-04 10:57:59', NULL),
(1451, 171, 172, NULL, 172, 824, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-04 13:23:40', '2024-04-04 13:23:40', NULL),
(1452, 175, 172, NULL, 172, 824, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-04 13:23:41', '2024-04-04 13:23:41', NULL),
(1453, 176, 172, NULL, 172, 824, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-04 13:23:41', '2024-04-04 13:23:41', NULL),
(1454, 178, 172, NULL, 172, 824, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-04 13:23:41', '2024-04-04 13:23:41', NULL),
(1455, 179, 172, NULL, 172, 824, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-04 13:23:41', '2024-04-04 13:23:41', NULL),
(1456, 171, 172, NULL, 172, 825, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-04 13:30:43', '2024-04-04 13:30:43', NULL),
(1457, 175, 172, NULL, 172, 825, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-04 13:30:43', '2024-04-04 13:30:43', NULL),
(1458, 176, 172, NULL, 172, 825, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-04 13:30:44', '2024-04-04 13:30:44', NULL),
(1459, 178, 172, NULL, 172, 825, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-04 13:30:46', '2024-04-04 13:30:46', NULL),
(1460, 179, 172, NULL, 172, 825, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-04 13:30:46', '2024-04-04 13:30:46', NULL),
(1461, 183, 172, NULL, 172, NULL, 'Chay Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-05 14:05:05', '2024-04-05 14:05:05', NULL),
(1462, 171, 183, NULL, 183, NULL, 'Surya Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-05 17:10:16', '2024-04-05 17:10:16', NULL),
(1463, 175, 183, NULL, 183, NULL, 'Surya Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-05 17:10:18', '2024-04-05 17:10:18', NULL),
(1464, 171, 172, NULL, 172, 827, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-07 18:05:58', '2024-04-07 18:05:58', NULL),
(1465, 175, 172, NULL, 172, 827, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-07 18:05:58', '2024-04-07 18:05:58', NULL),
(1466, 176, 172, NULL, 172, 827, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-07 18:05:58', '2024-04-07 18:05:58', NULL),
(1467, 178, 172, NULL, 172, 827, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-07 18:05:59', '2024-04-07 18:05:59', NULL),
(1468, 179, 172, NULL, 172, 827, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-07 18:05:59', '2024-04-07 18:05:59', NULL),
(1469, 183, 172, NULL, 172, 827, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-07 18:05:59', '2024-04-07 18:05:59', NULL),
(1470, 172, 175, NULL, 175, 827, 'sandeep Give You Point On Your Post', 'points', 'Review', 1, '2024-04-07 18:06:16', '2024-04-07 18:06:29', NULL),
(1471, 171, 172, NULL, 172, 828, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-11 15:17:14', '2024-04-11 15:17:14', NULL),
(1472, 175, 172, NULL, 172, 828, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-11 15:17:14', '2024-04-11 15:17:14', NULL),
(1473, 176, 172, NULL, 172, 828, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-11 15:17:14', '2024-04-11 15:17:14', NULL),
(1474, 178, 172, NULL, 172, 828, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-11 15:17:15', '2024-04-11 15:17:15', NULL),
(1475, 179, 172, NULL, 172, 828, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-11 15:17:15', '2024-04-11 15:17:15', NULL),
(1476, 183, 172, NULL, 172, 828, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-11 15:17:15', '2024-04-11 15:17:15', NULL),
(1477, 182, 172, NULL, 172, NULL, 'Chay Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-11 17:30:24', '2024-04-11 17:30:24', NULL),
(1478, 171, 172, NULL, 172, 833, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-15 12:56:21', '2024-04-15 12:56:21', NULL),
(1479, 175, 172, NULL, 172, 833, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-15 12:56:21', '2024-04-15 12:56:21', NULL),
(1480, 176, 172, NULL, 172, 833, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-15 12:56:21', '2024-04-15 12:56:21', NULL),
(1481, 178, 172, NULL, 172, 833, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-15 12:56:21', '2024-04-15 12:56:21', NULL),
(1482, 179, 172, NULL, 172, 833, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-15 12:56:22', '2024-04-15 12:56:22', NULL),
(1483, 183, 172, NULL, 172, 833, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-15 12:56:22', '2024-04-15 12:56:22', NULL),
(1484, 172, 186, NULL, 186, 828, 'ayush14 Give You Point On Your Post', 'points', 'Review', 1, '2024-04-15 16:55:00', '2024-04-16 11:49:26', NULL),
(1485, 171, 172, NULL, 172, 834, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-16 10:29:56', '2024-04-16 10:29:56', NULL),
(1486, 175, 172, NULL, 172, 834, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-16 10:29:56', '2024-04-16 10:29:56', NULL),
(1487, 176, 172, NULL, 172, 834, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-16 10:29:56', '2024-04-16 10:29:56', NULL),
(1488, 178, 172, NULL, 172, 834, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-16 10:29:57', '2024-04-16 10:29:57', NULL),
(1489, 179, 172, NULL, 172, 834, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-16 10:29:57', '2024-04-16 10:29:57', NULL),
(1490, 183, 172, NULL, 172, 834, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-16 10:29:57', '2024-04-16 10:29:57', NULL),
(1491, 146, 159, NULL, 159, NULL, 'demo@google.com Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-17 07:45:12', '2024-04-17 07:45:12', NULL),
(1492, 129, 130, NULL, 130, 835, 'Spectator Posted Smothing', 'Post', 'Poll', 0, '2024-04-18 04:42:56', '2024-04-18 04:42:56', NULL),
(1493, 142, 130, NULL, 130, 835, 'Spectator Posted Smothing', 'Post', 'Poll', 0, '2024-04-18 04:42:57', '2024-04-18 04:42:57', NULL),
(1494, 126, 128, NULL, 128, 837, 'John wick Posted Smothing', 'Post', 'Poll', 0, '2024-04-18 08:54:16', '2024-04-18 08:54:16', NULL),
(1495, 172, 159, NULL, 159, NULL, 'demo@google.com Send A Friend Request', 'FriendRequest', NULL, 1, '2024-04-18 13:41:51', '2024-04-20 13:04:54', NULL);
INSERT INTO `notifications` (`id`, `user_id`, `send_by`, `community_id`, `my_id`, `post_id`, `body`, `notification_type`, `subtype`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1496, 172, 159, NULL, 159, 833, 'demo@google.com Commented On Your Post', 'comment', 'poll', 0, '2024-04-18 13:43:02', '2024-04-18 13:43:02', NULL),
(1497, 130, 129, NULL, 129, 840, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-20 08:02:07', '2024-04-20 08:02:07', NULL),
(1498, 142, 129, NULL, 129, 840, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-20 08:02:07', '2024-04-20 08:02:07', NULL),
(1499, 172, 129, NULL, 129, 840, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-20 08:02:07', '2024-04-20 08:02:07', NULL),
(1500, 159, 146, NULL, 146, 849, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-20 11:22:29', '2024-04-20 11:22:29', NULL),
(1501, 159, 146, NULL, 146, 850, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-20 11:37:51', '2024-04-20 11:37:51', NULL),
(1502, 159, 146, NULL, 146, 851, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-20 11:42:37', '2024-04-20 11:42:37', NULL),
(1503, 146, 145, NULL, 145, NULL, 'Yuktesh Jadhav Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-20 11:44:43', '2024-04-20 11:44:43', NULL),
(1504, 146, 145, NULL, 145, 852, 'Yuktesh Jadhav Posted Smothing', 'Post', 'Survey', 0, '2024-04-20 11:56:09', '2024-04-20 11:56:09', NULL),
(1505, 159, 146, NULL, 146, 853, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-20 11:59:03', '2024-04-20 11:59:03', NULL),
(1506, 145, 146, NULL, 146, 853, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-20 11:59:03', '2024-04-20 11:59:03', NULL),
(1507, 146, 145, NULL, 145, 854, 'Yuktesh Jadhav Posted Smothing', 'Post', 'Survey', 1, '2024-04-20 12:00:42', '2024-04-22 07:22:13', NULL),
(1508, 146, 145, NULL, 145, 855, 'Yuktesh Jadhav Posted Smothing', 'Post', 'Survey', 1, '2024-04-20 12:02:03', '2024-04-22 07:21:18', NULL),
(1509, 130, 129, NULL, 129, 856, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-20 12:52:17', '2024-04-20 12:52:17', NULL),
(1510, 142, 129, NULL, 129, 856, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-20 12:52:17', '2024-04-20 12:52:17', NULL),
(1511, 172, 129, NULL, 129, 856, 'Chay Posted Smothing', 'Post', 'Poll', 1, '2024-04-20 12:52:17', '2024-04-20 13:04:31', NULL),
(1512, 171, 172, NULL, 172, 857, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 06:37:19', '2024-04-21 06:37:19', NULL),
(1513, 129, 172, NULL, 172, 857, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 06:37:19', '2024-04-21 06:37:19', NULL),
(1514, 175, 172, NULL, 172, 857, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 06:37:20', '2024-04-21 06:37:20', NULL),
(1515, 176, 172, NULL, 172, 857, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 06:37:20', '2024-04-21 06:37:20', NULL),
(1516, 178, 172, NULL, 172, 857, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 06:37:20', '2024-04-21 06:37:20', NULL),
(1517, 179, 172, NULL, 172, 857, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 06:37:20', '2024-04-21 06:37:20', NULL),
(1518, 183, 172, NULL, 172, 857, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 06:37:20', '2024-04-21 06:37:20', NULL),
(1519, 171, 172, NULL, 172, 858, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 06:54:08', '2024-04-21 06:54:08', NULL),
(1520, 129, 172, NULL, 172, 858, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 06:54:08', '2024-04-21 06:54:08', NULL),
(1521, 175, 172, NULL, 172, 858, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 06:54:08', '2024-04-21 06:54:08', NULL),
(1522, 176, 172, NULL, 172, 858, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 06:54:08', '2024-04-21 06:54:08', NULL),
(1523, 178, 172, NULL, 172, 858, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 06:54:08', '2024-04-21 06:54:08', NULL),
(1524, 179, 172, NULL, 172, 858, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 06:54:08', '2024-04-21 06:54:08', NULL),
(1525, 183, 172, NULL, 172, 858, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 06:54:08', '2024-04-21 06:54:08', NULL),
(1526, 129, 130, NULL, 130, 859, 'Spectator Posted Smothing', 'Post', 'Review', 0, '2024-04-21 07:29:56', '2024-04-21 07:29:56', NULL),
(1527, 142, 130, NULL, 130, 859, 'Spectator Posted Smothing', 'Post', 'Review', 0, '2024-04-21 07:29:56', '2024-04-21 07:29:56', NULL),
(1528, 130, 129, NULL, 129, 860, 'Chay Posted Smothing', 'Post', 'Poll', 1, '2024-04-21 07:31:56', '2024-04-21 07:54:32', NULL),
(1529, 142, 129, NULL, 129, 860, 'Chay Posted Smothing', 'Post', 'Poll', 0, '2024-04-21 07:31:56', '2024-04-21 07:31:56', NULL),
(1530, 172, 129, NULL, 129, 860, 'Chay Posted Smothing', 'Post', 'Poll', 1, '2024-04-21 07:31:56', '2024-04-21 07:58:17', NULL),
(1531, 172, 182, NULL, 182, 861, 'Peter Posted Smothing', 'Post', 'Seek', 1, '2024-04-21 07:37:05', '2024-04-21 07:58:03', NULL),
(1532, 171, 172, NULL, 172, 862, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 07:39:53', '2024-04-21 07:39:53', NULL),
(1533, 129, 172, NULL, 172, 862, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 07:39:53', '2024-04-21 07:39:53', NULL),
(1534, 175, 172, NULL, 172, 862, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 07:39:53', '2024-04-21 07:39:53', NULL),
(1535, 176, 172, NULL, 172, 862, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 07:39:53', '2024-04-21 07:39:53', NULL),
(1536, 178, 172, NULL, 172, 862, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 07:39:53', '2024-04-21 07:39:53', NULL),
(1537, 179, 172, NULL, 172, 862, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 07:39:53', '2024-04-21 07:39:53', NULL),
(1538, 183, 172, NULL, 172, 862, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 07:39:53', '2024-04-21 07:39:53', NULL),
(1539, 182, 172, NULL, 172, 862, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 07:39:53', '2024-04-21 07:39:53', NULL),
(1540, 172, 182, 40, 182, 867, 'Peter Posted Smothing', 'CommunityPost', 'Review', 0, '2024-04-21 08:33:27', '2024-04-21 08:33:27', NULL),
(1541, 182, 188, NULL, 188, NULL, 'Praveen Kumar Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-21 10:09:14', '2024-04-21 10:09:14', NULL),
(1542, 172, 188, NULL, 188, NULL, 'Praveen Kumar Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-21 10:09:38', '2024-04-21 10:09:38', NULL),
(1543, 171, 172, NULL, 172, 869, 'Brian Posted Smothing', 'Post', 'Poll', 0, '2024-04-21 10:20:04', '2024-04-21 10:20:04', NULL),
(1544, 129, 172, NULL, 172, 869, 'Brian Posted Smothing', 'Post', 'Poll', 0, '2024-04-21 10:20:04', '2024-04-21 10:20:04', NULL),
(1545, 175, 172, NULL, 172, 869, 'Brian Posted Smothing', 'Post', 'Poll', 0, '2024-04-21 10:20:04', '2024-04-21 10:20:04', NULL),
(1546, 176, 172, NULL, 172, 869, 'Brian Posted Smothing', 'Post', 'Poll', 0, '2024-04-21 10:20:04', '2024-04-21 10:20:04', NULL),
(1547, 178, 172, NULL, 172, 869, 'Brian Posted Smothing', 'Post', 'Poll', 0, '2024-04-21 10:20:04', '2024-04-21 10:20:04', NULL),
(1548, 179, 172, NULL, 172, 869, 'Brian Posted Smothing', 'Post', 'Poll', 0, '2024-04-21 10:20:04', '2024-04-21 10:20:04', NULL),
(1549, 183, 172, NULL, 172, 869, 'Brian Posted Smothing', 'Post', 'Poll', 0, '2024-04-21 10:20:04', '2024-04-21 10:20:04', NULL),
(1550, 182, 172, NULL, 172, 869, 'Brian Posted Smothing', 'Post', 'Poll', 0, '2024-04-21 10:20:04', '2024-04-21 10:20:04', NULL),
(1551, 188, 172, NULL, 172, 869, 'Brian Posted Smothing', 'Post', 'Poll', 0, '2024-04-21 10:20:04', '2024-04-21 10:20:04', NULL),
(1552, 171, 172, NULL, 172, 870, 'Brian Posted Smothing', 'Post', 'Seek', 0, '2024-04-21 10:21:39', '2024-04-21 10:21:39', NULL),
(1553, 129, 172, NULL, 172, 870, 'Brian Posted Smothing', 'Post', 'Seek', 1, '2024-04-21 10:21:39', '2024-04-23 06:03:23', NULL),
(1554, 175, 172, NULL, 172, 870, 'Brian Posted Smothing', 'Post', 'Seek', 0, '2024-04-21 10:21:39', '2024-04-21 10:21:39', NULL),
(1555, 176, 172, NULL, 172, 870, 'Brian Posted Smothing', 'Post', 'Seek', 0, '2024-04-21 10:21:39', '2024-04-21 10:21:39', NULL),
(1556, 178, 172, NULL, 172, 870, 'Brian Posted Smothing', 'Post', 'Seek', 0, '2024-04-21 10:21:39', '2024-04-21 10:21:39', NULL),
(1557, 179, 172, NULL, 172, 870, 'Brian Posted Smothing', 'Post', 'Seek', 0, '2024-04-21 10:21:39', '2024-04-21 10:21:39', NULL),
(1558, 183, 172, NULL, 172, 870, 'Brian Posted Smothing', 'Post', 'Seek', 0, '2024-04-21 10:21:39', '2024-04-21 10:21:39', NULL),
(1559, 182, 172, NULL, 172, 870, 'Brian Posted Smothing', 'Post', 'Seek', 0, '2024-04-21 10:21:39', '2024-04-21 10:21:39', NULL),
(1560, 188, 172, NULL, 172, 870, 'Brian Posted Smothing', 'Post', 'Seek', 0, '2024-04-21 10:21:39', '2024-04-21 10:21:39', NULL),
(1561, 172, 182, NULL, 182, 871, 'Peter Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:25:04', '2024-04-21 10:25:04', NULL),
(1562, 171, 172, NULL, 172, 872, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:27:32', '2024-04-21 10:27:32', NULL),
(1563, 129, 172, NULL, 172, 872, 'Brian Posted Smothing', 'Post', 'Review', 1, '2024-04-21 10:27:32', '2024-04-21 14:37:53', NULL),
(1564, 175, 172, NULL, 172, 872, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:27:32', '2024-04-21 10:27:32', NULL),
(1565, 176, 172, NULL, 172, 872, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:27:32', '2024-04-21 10:27:32', NULL),
(1566, 178, 172, NULL, 172, 872, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:27:32', '2024-04-21 10:27:32', NULL),
(1567, 179, 172, NULL, 172, 872, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:27:32', '2024-04-21 10:27:32', NULL),
(1568, 183, 172, NULL, 172, 872, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:27:32', '2024-04-21 10:27:32', NULL),
(1569, 182, 172, NULL, 172, 872, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:27:32', '2024-04-21 10:27:32', NULL),
(1570, 188, 172, NULL, 172, 872, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:27:32', '2024-04-21 10:27:32', NULL),
(1571, 171, 172, NULL, 172, 873, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:44:20', '2024-04-21 10:44:20', NULL),
(1572, 129, 172, NULL, 172, 873, 'Brian Posted Smothing', 'Post', 'Review', 1, '2024-04-21 10:44:20', '2024-04-21 14:37:45', NULL),
(1573, 175, 172, NULL, 172, 873, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:44:20', '2024-04-21 10:44:20', NULL),
(1574, 176, 172, NULL, 172, 873, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:44:20', '2024-04-21 10:44:20', NULL),
(1575, 178, 172, NULL, 172, 873, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:44:20', '2024-04-21 10:44:20', NULL),
(1576, 179, 172, NULL, 172, 873, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:44:20', '2024-04-21 10:44:20', NULL),
(1577, 183, 172, NULL, 172, 873, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:44:20', '2024-04-21 10:44:20', NULL),
(1578, 182, 172, NULL, 172, 873, 'Brian Posted Smothing', 'Post', 'Review', 1, '2024-04-21 10:44:20', '2024-04-24 08:06:45', NULL),
(1579, 188, 172, NULL, 172, 873, 'Brian Posted Smothing', 'Post', 'Review', 1, '2024-04-21 10:44:20', '2024-04-21 10:45:25', NULL),
(1580, 171, 172, NULL, 172, 874, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:47:05', '2024-04-21 10:47:05', NULL),
(1581, 129, 172, NULL, 172, 874, 'Brian Posted Smothing', 'Post', 'Review', 1, '2024-04-21 10:47:05', '2024-04-21 14:37:41', NULL),
(1582, 175, 172, NULL, 172, 874, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:47:05', '2024-04-21 10:47:05', NULL),
(1583, 176, 172, NULL, 172, 874, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:47:05', '2024-04-21 10:47:05', NULL),
(1584, 178, 172, NULL, 172, 874, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:47:05', '2024-04-21 10:47:05', NULL),
(1585, 179, 172, NULL, 172, 874, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:47:05', '2024-04-21 10:47:05', NULL),
(1586, 183, 172, NULL, 172, 874, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:47:05', '2024-04-21 10:47:05', NULL),
(1587, 182, 172, NULL, 172, 874, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:47:05', '2024-04-21 10:47:05', NULL),
(1588, 188, 172, NULL, 172, 874, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-21 10:47:05', '2024-04-21 10:47:05', NULL),
(1589, 187, 146, NULL, 146, 876, 'Mrunal Thakur Give You Reviewed On Your Post', 'Review', 'recommend', 1, '2024-04-22 06:29:51', '2024-04-22 07:21:26', NULL),
(1590, 159, 146, NULL, 146, 877, 'Mrunal Thakur Posted Smothing', 'Post', 'Poll', 0, '2024-04-22 06:32:24', '2024-04-22 06:32:24', NULL),
(1591, 145, 146, NULL, 146, 877, 'Mrunal Thakur Posted Smothing', 'Post', 'Poll', 0, '2024-04-22 06:32:24', '2024-04-22 06:32:24', NULL),
(1592, 146, 187, NULL, 187, NULL, 'Aditya20 Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-22 06:34:08', '2024-04-22 06:34:08', NULL),
(1593, 159, 146, NULL, 146, 878, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-22 06:35:04', '2024-04-22 06:35:04', NULL),
(1594, 145, 146, NULL, 146, 878, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-22 06:35:04', '2024-04-22 06:35:04', NULL),
(1595, 187, 146, NULL, 146, 878, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 1, '2024-04-22 06:35:04', '2024-04-22 07:21:29', NULL),
(1596, 159, 146, NULL, 146, 879, 'Mrunal Thakur Posted Smothing', 'Post', 'Poll', 0, '2024-04-22 06:38:51', '2024-04-22 06:38:51', NULL),
(1597, 145, 146, NULL, 146, 879, 'Mrunal Thakur Posted Smothing', 'Post', 'Poll', 0, '2024-04-22 06:38:52', '2024-04-22 06:38:52', NULL),
(1598, 187, 146, NULL, 146, 879, 'Mrunal Thakur Posted Smothing', 'Post', 'Poll', 1, '2024-04-22 06:38:52', '2024-04-22 07:21:05', NULL),
(1599, 146, 187, NULL, 187, 880, 'Aditya20 Posted Smothing', 'Post', 'Review', 0, '2024-04-22 06:51:45', '2024-04-22 06:51:45', NULL),
(1600, 146, 187, 43, 187, 881, 'Aditya20 Posted Smothing', 'CommunityPost', 'Survey', 1, '2024-04-22 07:07:45', '2024-04-22 07:22:17', NULL),
(1601, 146, 187, 35, 187, 882, 'Aditya20 Posted Smothing', 'CommunityPost', 'Review', 0, '2024-04-22 07:18:19', '2024-04-22 07:18:19', NULL),
(1602, 159, 146, NULL, 146, 883, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-22 07:25:25', '2024-04-22 07:25:25', NULL),
(1603, 145, 146, NULL, 146, 883, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-22 07:25:25', '2024-04-22 07:25:25', NULL),
(1604, 187, 146, NULL, 146, 883, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-22 07:25:25', '2024-04-22 07:25:25', NULL),
(1605, 146, 187, 43, 187, 885, 'Aditya20 Posted Smothing', 'CommunityPost', 'Seek', 0, '2024-04-22 07:27:16', '2024-04-22 07:27:16', NULL),
(1606, 159, 146, 43, 146, 886, 'Mrunal Thakur Posted Smothing', 'CommunityPost', 'Survey', 0, '2024-04-22 07:31:16', '2024-04-22 07:31:16', NULL),
(1607, 145, 146, 43, 146, 886, 'Mrunal Thakur Posted Smothing', 'CommunityPost', 'Survey', 0, '2024-04-22 07:31:16', '2024-04-22 07:31:16', NULL),
(1608, 187, 146, 43, 146, 886, 'Mrunal Thakur Posted Smothing', 'CommunityPost', 'Survey', 1, '2024-04-22 07:31:17', '2024-04-22 07:46:23', NULL),
(1609, 146, 187, NULL, 187, 887, 'Aditya20 Posted Smothing', 'Post', 'Seek', 0, '2024-04-22 07:32:53', '2024-04-22 07:32:53', NULL),
(1610, 187, 146, NULL, 146, 887, 'Mrunal Thakur Give You Reviewed On Your Post', 'Review', 'recommend', 0, '2024-04-22 07:34:13', '2024-04-22 07:34:13', NULL),
(1611, 159, 146, NULL, 146, 888, 'Mrunal Thakur Posted Smothing', 'Post', 'Poll', 0, '2024-04-22 07:36:03', '2024-04-22 07:36:03', NULL),
(1612, 145, 146, NULL, 146, 888, 'Mrunal Thakur Posted Smothing', 'Post', 'Poll', 0, '2024-04-22 07:36:03', '2024-04-22 07:36:03', NULL),
(1613, 187, 146, NULL, 146, 888, 'Mrunal Thakur Posted Smothing', 'Post', 'Poll', 0, '2024-04-22 07:36:03', '2024-04-22 07:36:03', NULL),
(1614, 146, 187, NULL, 187, 889, 'Aditya20 Posted Smothing', 'Post', 'Survey', 0, '2024-04-22 07:38:08', '2024-04-22 07:38:08', NULL),
(1615, 146, 187, NULL, 187, 890, 'Aditya20 Posted Smothing', 'Post', 'Survey', 0, '2024-04-22 07:39:10', '2024-04-22 07:39:10', NULL),
(1616, 146, 187, NULL, 187, 891, 'Aditya20 Posted Smothing', 'Post', 'Survey', 0, '2024-04-22 07:40:05', '2024-04-22 07:40:05', NULL),
(1617, 159, 146, NULL, 146, 892, 'Mrunal Thakur Posted Smothing', 'Post', 'Review', 0, '2024-04-22 07:51:52', '2024-04-22 07:51:52', NULL),
(1618, 145, 146, NULL, 146, 892, 'Mrunal Thakur Posted Smothing', 'Post', 'Review', 0, '2024-04-22 07:51:52', '2024-04-22 07:51:52', NULL),
(1619, 187, 146, NULL, 146, 892, 'Mrunal Thakur Posted Smothing', 'Post', 'Review', 0, '2024-04-22 07:51:52', '2024-04-22 07:51:52', NULL),
(1620, 146, 187, NULL, 187, 893, 'Aditya20 Posted Smothing', 'Post', 'Survey', 0, '2024-04-22 07:53:57', '2024-04-22 07:53:57', NULL),
(1621, 171, 172, NULL, 172, 894, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:10:39', '2024-04-22 13:10:39', NULL),
(1622, 129, 172, NULL, 172, 894, 'Brian Posted Smothing', 'Post', 'Review', 1, '2024-04-22 13:10:39', '2024-04-22 13:14:03', NULL),
(1623, 175, 172, NULL, 172, 894, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:10:39', '2024-04-22 13:10:39', NULL),
(1624, 176, 172, NULL, 172, 894, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:10:39', '2024-04-22 13:10:39', NULL),
(1625, 178, 172, NULL, 172, 894, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:10:39', '2024-04-22 13:10:39', NULL),
(1626, 179, 172, NULL, 172, 894, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:10:39', '2024-04-22 13:10:39', NULL),
(1627, 183, 172, NULL, 172, 894, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:10:39', '2024-04-22 13:10:39', NULL),
(1628, 182, 172, NULL, 172, 894, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:10:39', '2024-04-22 13:10:39', NULL),
(1629, 188, 172, NULL, 172, 894, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:10:39', '2024-04-22 13:10:39', NULL),
(1630, 130, 129, NULL, 129, 895, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:26:58', '2024-04-22 13:26:58', NULL),
(1631, 142, 129, NULL, 129, 895, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:26:58', '2024-04-22 13:26:58', NULL),
(1632, 172, 129, NULL, 129, 895, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:26:58', '2024-04-22 13:26:58', NULL),
(1633, 171, 172, NULL, 172, 896, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:28:37', '2024-04-22 13:28:37', NULL),
(1634, 129, 172, NULL, 172, 896, 'Brian Posted Smothing', 'Post', 'Review', 1, '2024-04-22 13:28:37', '2024-04-23 06:02:59', NULL),
(1635, 175, 172, NULL, 172, 896, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:28:37', '2024-04-22 13:28:37', NULL),
(1636, 176, 172, NULL, 172, 896, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:28:37', '2024-04-22 13:28:37', NULL),
(1637, 178, 172, NULL, 172, 896, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:28:37', '2024-04-22 13:28:37', NULL),
(1638, 179, 172, NULL, 172, 896, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:28:37', '2024-04-22 13:28:37', NULL),
(1639, 183, 172, NULL, 172, 896, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:28:37', '2024-04-22 13:28:37', NULL),
(1640, 182, 172, NULL, 172, 896, 'Brian Posted Smothing', 'Post', 'Review', 1, '2024-04-22 13:28:37', '2024-04-24 08:06:51', NULL),
(1641, 188, 172, NULL, 172, 896, 'Brian Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:28:37', '2024-04-22 13:28:37', NULL),
(1642, 130, 129, NULL, 129, 897, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:29:51', '2024-04-22 13:29:51', NULL),
(1643, 142, 129, NULL, 129, 897, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:29:51', '2024-04-22 13:29:51', NULL),
(1644, 172, 129, NULL, 129, 897, 'Chay Posted Smothing', 'Post', 'Review', 1, '2024-04-22 13:29:51', '2024-04-24 06:37:18', NULL),
(1645, 146, 187, NULL, 187, 898, 'Aditya20 Posted Smothing', 'Post', 'Survey', 0, '2024-04-22 13:39:08', '2024-04-22 13:39:08', NULL),
(1646, 146, 187, NULL, 187, 899, 'Aditya20 Posted Smothing', 'Post', 'Survey', 0, '2024-04-22 13:58:12', '2024-04-22 13:58:12', NULL),
(1647, 146, 187, NULL, 187, 900, 'Aditya20 Posted Smothing', 'Post', 'Review', 0, '2024-04-22 13:59:42', '2024-04-22 13:59:42', NULL),
(1648, 146, 187, NULL, 187, 901, 'Aditya20 Posted Smothing', 'Post', 'Seek', 0, '2024-04-22 14:01:13', '2024-04-22 14:01:13', NULL),
(1649, 146, 187, NULL, 187, 902, 'Aditya20 Posted Smothing', 'Post', 'Survey', 0, '2024-04-22 14:05:32', '2024-04-22 14:05:32', NULL),
(1650, 146, 187, 43, 187, 904, 'Aditya20 Posted Smothing', 'CommunityPost', 'Review', 0, '2024-04-23 04:47:29', '2024-04-23 04:47:29', NULL),
(1651, 146, 187, 38, 187, 905, 'Aditya20 Posted Smothing', 'CommunityPost', 'Review', 0, '2024-04-23 04:50:56', '2024-04-23 04:50:56', NULL),
(1652, 128, 126, 35, 126, 907, 'Walter White Posted Smothing', 'CommunityPost', 'Review', 0, '2024-04-23 05:05:15', '2024-04-23 05:05:15', NULL),
(1653, 187, 145, NULL, 145, NULL, 'Yuktesh Jadhav Send A Friend Request', 'FriendRequest', NULL, 0, '2024-04-23 06:30:24', '2024-04-23 06:30:24', NULL),
(1654, 126, 145, NULL, 145, NULL, 'Yuktesh Jadhav Send A Friend Request', 'FriendRequest', NULL, 1, '2024-04-23 06:34:17', '2024-04-23 06:38:42', NULL),
(1655, 146, 145, 35, 145, 908, 'Yuktesh Jadhav Posted Smothing', 'CommunityPost', 'Review', 0, '2024-04-23 06:36:39', '2024-04-23 06:36:39', NULL),
(1656, 146, 145, NULL, 145, 909, 'Yuktesh Jadhav Posted Smothing', 'Post', 'Review', 0, '2024-04-23 06:38:08', '2024-04-23 06:38:08', NULL),
(1657, 126, 145, NULL, 145, 909, 'Yuktesh Jadhav Posted Smothing', 'Post', 'Review', 0, '2024-04-23 06:38:08', '2024-04-23 06:38:08', NULL),
(1658, 146, 145, 35, 145, 910, 'Yuktesh Jadhav Posted Smothing', 'CommunityPost', 'Review', 0, '2024-04-23 06:39:05', '2024-04-23 06:39:05', NULL),
(1659, 126, 145, 35, 145, 910, 'Yuktesh Jadhav Posted Smothing', 'CommunityPost', 'Review', 1, '2024-04-23 06:39:05', '2024-04-23 06:39:34', NULL),
(1660, 146, 145, 35, 145, 911, 'Yuktesh Jadhav Posted Smothing', 'CommunityPost', 'Review', 0, '2024-04-23 06:58:55', '2024-04-23 06:58:55', NULL),
(1661, 126, 145, 35, 145, 911, 'Yuktesh Jadhav Posted Smothing', 'CommunityPost', 'Review', 0, '2024-04-23 06:58:55', '2024-04-23 06:58:55', NULL),
(1662, 187, 145, NULL, 145, 905, 'Yuktesh Jadhav Give You Point On Your Post', 'points', 'Review', 0, '2024-04-23 06:59:33', '2024-04-23 06:59:33', NULL),
(1663, 146, 145, 35, 145, 912, 'Yuktesh Jadhav Posted Smothing', 'CommunityPost', 'Survey', 0, '2024-04-23 07:00:42', '2024-04-23 07:00:42', NULL),
(1664, 126, 145, 35, 145, 912, 'Yuktesh Jadhav Posted Smothing', 'CommunityPost', 'Survey', 1, '2024-04-23 07:00:43', '2024-04-23 07:09:20', NULL),
(1665, 146, 145, NULL, 145, 913, 'Yuktesh Jadhav Posted Smothing', 'Post', 'Seek', 0, '2024-04-23 07:21:57', '2024-04-23 07:21:57', NULL),
(1666, 126, 145, NULL, 145, 913, 'Yuktesh Jadhav Posted Smothing', 'Post', 'Seek', 0, '2024-04-23 07:21:57', '2024-04-23 07:21:57', NULL),
(1667, 146, 145, 35, 145, 914, 'Yuktesh Jadhav Posted Smothing', 'CommunityPost', 'Review', 0, '2024-04-23 07:25:44', '2024-04-23 07:25:44', NULL),
(1668, 126, 145, 35, 145, 914, 'Yuktesh Jadhav Posted Smothing', 'CommunityPost', 'Review', 1, '2024-04-23 07:25:44', '2024-04-23 07:31:06', NULL),
(1669, 146, 145, 35, 145, 915, 'Yuktesh Jadhav Posted Smothing', 'CommunityPost', 'Seek', 0, '2024-04-23 07:33:21', '2024-04-23 07:33:21', NULL),
(1670, 126, 145, 35, 145, 915, 'Yuktesh Jadhav Posted Smothing', 'CommunityPost', 'Seek', 1, '2024-04-23 07:33:21', '2024-04-23 07:34:59', NULL),
(1671, 146, 145, 35, 145, 916, 'Yuktesh Jadhav Posted Smothing', 'CommunityPost', 'Review', 0, '2024-04-23 07:38:53', '2024-04-23 07:38:53', NULL),
(1672, 126, 145, 35, 145, 916, 'Yuktesh Jadhav Posted Smothing', 'CommunityPost', 'Review', 0, '2024-04-23 07:38:53', '2024-04-23 07:38:53', NULL),
(1673, 146, 145, 35, 145, 917, 'Yuktesh Jadhav Posted Smothing', 'CommunityPost', 'Review', 0, '2024-04-23 07:42:14', '2024-04-23 07:42:14', NULL),
(1674, 126, 145, 35, 145, 917, 'Yuktesh Jadhav Posted Smothing', 'CommunityPost', 'Review', 0, '2024-04-23 07:42:14', '2024-04-23 07:42:14', NULL),
(1675, 129, 130, NULL, 130, 918, 'Spectator Posted Smothing', 'Post', 'Review', 0, '2024-04-23 12:34:55', '2024-04-23 12:34:55', NULL),
(1676, 142, 130, NULL, 130, 918, 'Spectator Posted Smothing', 'Post', 'Review', 0, '2024-04-23 12:34:55', '2024-04-23 12:34:55', NULL),
(1677, 129, 130, NULL, 130, 919, 'Spectator Posted Smothing', 'Post', 'Review', 0, '2024-04-23 12:42:56', '2024-04-23 12:42:56', NULL),
(1678, 142, 130, NULL, 130, 919, 'Spectator Posted Smothing', 'Post', 'Review', 0, '2024-04-23 12:42:56', '2024-04-23 12:42:56', NULL),
(1679, 129, 130, NULL, 130, 920, 'Spectator Posted Smothing', 'Post', 'Review', 0, '2024-04-23 12:44:41', '2024-04-23 12:44:41', NULL),
(1680, 142, 130, NULL, 130, 920, 'Spectator Posted Smothing', 'Post', 'Review', 0, '2024-04-23 12:44:41', '2024-04-23 12:44:41', NULL),
(1681, 128, 126, NULL, 126, 921, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-04-24 05:01:58', '2024-04-24 05:01:58', NULL),
(1682, 145, 126, NULL, 126, 921, 'Walter White Posted Smothing', 'Post', 'Review', 0, '2024-04-24 05:01:58', '2024-04-24 05:01:58', NULL),
(1683, 159, 146, NULL, 146, 922, 'Mrunal Thakur Posted Smothing', 'Post', 'Seek', 0, '2024-04-24 05:34:47', '2024-04-24 05:34:47', NULL),
(1684, 145, 146, NULL, 146, 922, 'Mrunal Thakur Posted Smothing', 'Post', 'Seek', 0, '2024-04-24 05:34:47', '2024-04-24 05:34:47', NULL),
(1685, 187, 146, NULL, 146, 922, 'Mrunal Thakur Posted Smothing', 'Post', 'Seek', 0, '2024-04-24 05:34:47', '2024-04-24 05:34:47', NULL),
(1686, 159, 146, NULL, 146, 923, 'Mrunal Thakur Posted Smothing', 'Post', 'Review', 0, '2024-04-24 05:37:48', '2024-04-24 05:37:48', NULL),
(1687, 145, 146, NULL, 146, 923, 'Mrunal Thakur Posted Smothing', 'Post', 'Review', 0, '2024-04-24 05:37:48', '2024-04-24 05:37:48', NULL),
(1688, 187, 146, NULL, 146, 923, 'Mrunal Thakur Posted Smothing', 'Post', 'Review', 0, '2024-04-24 05:37:48', '2024-04-24 05:37:48', NULL),
(1689, 159, 146, NULL, 146, 924, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-24 05:50:13', '2024-04-24 05:50:13', NULL),
(1690, 145, 146, NULL, 146, 924, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-24 05:50:14', '2024-04-24 05:50:14', NULL),
(1691, 187, 146, NULL, 146, 924, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-24 05:50:14', '2024-04-24 05:50:14', NULL),
(1692, 159, 146, NULL, 146, 925, 'Mrunal Thakur Posted Smothing', 'Post', 'Poll', 0, '2024-04-24 05:52:36', '2024-04-24 05:52:36', NULL),
(1693, 145, 146, NULL, 146, 925, 'Mrunal Thakur Posted Smothing', 'Post', 'Poll', 0, '2024-04-24 05:52:36', '2024-04-24 05:52:36', NULL),
(1694, 187, 146, NULL, 146, 925, 'Mrunal Thakur Posted Smothing', 'Post', 'Poll', 0, '2024-04-24 05:52:36', '2024-04-24 05:52:36', NULL),
(1695, 159, 146, NULL, 146, 926, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-24 06:01:12', '2024-04-24 06:01:12', NULL),
(1696, 145, 146, NULL, 146, 926, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-24 06:01:12', '2024-04-24 06:01:12', NULL),
(1697, 187, 146, NULL, 146, 926, 'Mrunal Thakur Posted Smothing', 'Post', 'Survey', 0, '2024-04-24 06:01:12', '2024-04-24 06:01:12', NULL),
(1698, 130, 129, NULL, 129, 927, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-24 06:29:24', '2024-04-24 06:29:24', NULL),
(1699, 142, 129, NULL, 129, 927, 'Chay Posted Smothing', 'Post', 'Review', 0, '2024-04-24 06:29:24', '2024-04-24 06:29:24', NULL),
(1700, 172, 129, NULL, 129, 927, 'Chay Posted Smothing', 'Post', 'Review', 1, '2024-04-24 06:29:24', '2024-04-24 06:36:55', NULL),
(1701, 159, 146, NULL, 146, 928, 'Mrunal Thakur Posted Smothing', 'Post', 'Seek', 0, '2024-04-24 07:49:40', '2024-04-24 07:49:40', NULL),
(1702, 145, 146, NULL, 146, 928, 'Mrunal Thakur Posted Smothing', 'Post', 'Seek', 0, '2024-04-24 07:49:40', '2024-04-24 07:49:40', NULL),
(1703, 187, 146, NULL, 146, 928, 'Mrunal Thakur Posted Smothing', 'Post', 'Seek', 0, '2024-04-24 07:49:40', '2024-04-24 07:49:40', NULL),
(1704, 172, 182, NULL, 182, 929, 'Peter Posted Smothing', 'Post', 'Review', 0, '2024-04-24 14:56:45', '2024-04-24 14:56:45', NULL),
(1705, 188, 182, NULL, 182, 929, 'Peter Posted Smothing', 'Post', 'Review', 0, '2024-04-24 14:56:45', '2024-04-24 14:56:45', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `notification_settings`
--

CREATE TABLE `notification_settings` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `post_notification` tinyint(1) NOT NULL DEFAULT '1',
  `like_notification` tinyint(1) NOT NULL DEFAULT '1',
  `friend_request_notification` tinyint(1) NOT NULL DEFAULT '1',
  `addInto_community_notification` tinyint(1) NOT NULL DEFAULT '1',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notification_settings`
--

INSERT INTO `notification_settings` (`id`, `user_id`, `post_notification`, `like_notification`, `friend_request_notification`, `addInto_community_notification`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(274, 125, 1, 1, 1, 1, 1, '2024-03-05 13:01:27', '2024-03-05 13:01:27', NULL),
(275, 126, 1, 1, 1, 1, 1, '2024-03-05 16:29:13', '2024-03-05 16:29:13', NULL),
(277, 126, 1, 1, 1, 1, 1, '2024-03-06 05:02:24', '2024-03-06 05:02:24', NULL),
(278, 126, 1, 1, 1, 1, 1, '2024-03-06 05:04:59', '2024-03-06 05:04:59', NULL),
(280, 128, 1, 1, 1, 1, 1, '2024-03-06 05:48:46', '2024-03-06 05:48:46', NULL),
(281, 129, 1, 1, 1, 1, 1, '2024-03-06 08:15:00', '2024-03-11 15:13:02', NULL),
(282, 130, 1, 1, 1, 1, 1, '2024-03-06 08:24:57', '2024-03-06 08:24:57', NULL),
(283, 126, 1, 1, 1, 1, 1, '2024-03-06 08:44:27', '2024-03-06 08:44:27', NULL),
(284, 128, 1, 1, 1, 1, 1, '2024-03-06 11:29:14', '2024-03-06 11:29:14', NULL),
(285, 128, 1, 1, 1, 1, 1, '2024-03-06 11:33:56', '2024-03-06 11:33:56', NULL),
(286, 126, 1, 1, 1, 1, 1, '2024-03-07 04:32:50', '2024-03-07 04:32:50', NULL),
(288, 128, 1, 1, 1, 1, 1, '2024-03-07 09:14:50', '2024-03-07 09:14:50', NULL),
(289, 132, 1, 1, 1, 1, 1, '2024-03-07 12:09:40', '2024-03-07 12:09:40', NULL),
(291, 126, 1, 1, 1, 1, 1, '2024-03-07 13:36:35', '2024-03-07 13:36:35', NULL),
(292, 128, 1, 1, 1, 1, 1, '2024-03-07 13:51:58', '2024-03-07 13:51:58', NULL),
(293, 128, 1, 1, 1, 1, 1, '2024-03-08 04:24:58', '2024-03-08 04:24:58', NULL),
(294, 126, 1, 1, 1, 1, 1, '2024-03-08 04:43:58', '2024-03-08 04:43:58', NULL),
(303, 126, 1, 1, 1, 1, 1, '2024-03-08 07:17:00', '2024-03-08 07:17:00', NULL),
(304, 128, 1, 1, 1, 1, 1, '2024-03-08 07:17:20', '2024-03-08 07:17:20', NULL),
(305, 126, 1, 1, 1, 1, 1, '2024-03-08 07:24:12', '2024-03-08 07:24:12', NULL),
(306, 126, 1, 1, 1, 1, 1, '2024-03-08 07:47:52', '2024-03-08 07:47:52', NULL),
(307, 142, 1, 1, 1, 1, 1, '2024-03-08 13:14:33', '2024-03-08 13:14:33', NULL),
(308, 126, 1, 1, 1, 1, 1, '2024-03-09 04:23:33', '2024-03-09 04:23:33', NULL),
(309, 128, 1, 1, 1, 1, 1, '2024-03-09 04:32:56', '2024-03-09 04:32:56', NULL),
(312, 126, 1, 1, 1, 1, 1, '2024-03-09 07:15:11', '2024-03-09 07:15:11', NULL),
(313, 128, 1, 1, 1, 1, 1, '2024-03-09 07:16:15', '2024-03-09 07:16:15', NULL),
(314, 128, 1, 1, 1, 1, 1, '2024-03-09 12:06:03', '2024-03-09 12:06:03', NULL),
(315, 143, 1, 1, 1, 1, 1, '2024-03-09 12:51:16', '2024-03-09 12:51:16', NULL),
(316, 126, 1, 1, 1, 1, 1, '2024-03-09 13:09:01', '2024-03-09 13:09:01', NULL),
(317, 143, 1, 1, 1, 1, 1, '2024-03-09 13:10:05', '2024-03-09 13:10:05', NULL),
(318, 128, 1, 1, 1, 1, 1, '2024-03-09 13:17:35', '2024-03-09 13:17:35', NULL),
(319, 128, 1, 1, 1, 1, 1, '2024-03-09 13:57:54', '2024-03-09 13:57:54', NULL),
(320, 144, 1, 1, 1, 1, 1, '2024-03-11 06:00:49', '2024-03-11 06:00:49', NULL),
(321, 143, 1, 1, 1, 1, 1, '2024-03-11 06:43:54', '2024-03-11 06:43:54', NULL),
(322, 128, 1, 1, 1, 1, 1, '2024-03-11 07:47:56', '2024-03-11 07:47:56', NULL),
(323, 128, 1, 1, 1, 1, 1, '2024-03-11 12:10:35', '2024-03-11 12:10:35', NULL),
(324, 143, 1, 1, 1, 1, 1, '2024-03-11 12:55:51', '2024-03-11 12:55:51', NULL),
(325, 126, 1, 1, 1, 1, 1, '2024-03-11 13:02:06', '2024-03-11 13:02:06', NULL),
(326, 128, 1, 1, 1, 1, 1, '2024-03-11 13:08:57', '2024-03-11 13:08:57', NULL),
(327, 1, 1, 1, 1, 1, 1, '2024-03-12 11:20:25', '2024-03-12 11:20:25', NULL),
(329, 145, 1, 1, 1, 1, 1, '2024-03-12 12:36:32', '2024-03-12 12:36:32', NULL),
(330, 128, 1, 1, 1, 1, 1, '2024-03-13 05:25:41', '2024-03-13 05:25:41', NULL),
(331, 143, 1, 1, 1, 1, 1, '2024-03-13 05:30:19', '2024-03-13 05:30:19', NULL),
(332, 146, 1, 1, 1, 1, 1, '2024-03-13 06:05:00', '2024-03-13 06:05:00', NULL),
(333, 126, 1, 1, 1, 1, 1, '2024-03-13 06:26:10', '2024-03-13 06:26:10', NULL),
(334, 147, 1, 1, 1, 1, 1, '2024-03-13 09:51:28', '2024-03-13 09:51:28', NULL),
(335, 126, 1, 1, 1, 1, 1, '2024-03-13 09:59:50', '2024-03-13 09:59:50', NULL),
(336, 128, 1, 1, 1, 1, 1, '2024-03-13 10:02:48', '2024-03-13 10:02:48', NULL),
(337, 128, 1, 1, 1, 1, 1, '2024-03-13 11:03:22', '2024-03-13 11:03:22', NULL),
(338, 146, 1, 1, 1, 1, 1, '2024-03-13 11:53:35', '2024-03-13 11:53:35', NULL),
(339, 126, 1, 1, 1, 1, 1, '2024-03-13 12:25:36', '2024-03-13 12:25:36', NULL),
(340, 126, 1, 1, 1, 1, 1, '2024-03-14 04:29:18', '2024-03-14 04:29:18', NULL),
(341, 146, 1, 1, 1, 1, 1, '2024-03-14 05:02:47', '2024-03-14 05:02:47', NULL),
(344, 146, 1, 1, 1, 1, 1, '2024-03-14 09:26:42', '2024-03-14 09:26:42', NULL),
(345, 128, 1, 1, 1, 1, 1, '2024-03-14 09:48:12', '2024-03-14 09:48:12', NULL),
(346, 126, 1, 1, 1, 1, 1, '2024-03-15 04:28:31', '2024-03-15 04:28:31', NULL),
(347, 146, 1, 1, 1, 1, 1, '2024-03-15 04:36:24', '2024-03-15 04:36:24', NULL),
(348, 149, 1, 1, 1, 1, 1, '2024-03-15 04:56:35', '2024-03-15 04:56:35', NULL),
(349, 149, 1, 1, 1, 1, 1, '2024-03-15 05:18:56', '2024-03-15 05:18:56', NULL),
(350, 150, 1, 1, 1, 1, 1, '2024-03-15 11:19:53', '2024-03-15 11:19:53', NULL),
(352, 152, 1, 1, 1, 1, 1, '2024-03-15 11:26:38', '2024-03-15 11:26:38', NULL),
(353, 149, 1, 1, 1, 1, 1, '2024-03-15 12:27:29', '2024-03-15 12:27:29', NULL),
(354, 128, 1, 1, 1, 1, 1, '2024-03-15 12:30:36', '2024-03-15 12:30:36', NULL),
(355, 126, 1, 1, 1, 1, 1, '2024-03-15 12:31:47', '2024-03-15 12:31:47', NULL),
(356, 146, 1, 1, 1, 1, 1, '2024-03-15 12:32:03', '2024-03-15 12:32:03', NULL),
(357, 149, 1, 1, 1, 1, 1, '2024-03-15 12:34:37', '2024-03-15 12:34:37', NULL),
(358, 128, 1, 1, 1, 1, 1, '2024-03-15 12:56:02', '2024-03-15 12:56:02', NULL),
(359, 146, 1, 1, 1, 1, 1, '2024-03-15 12:58:57', '2024-03-15 12:58:57', NULL),
(360, 149, 1, 1, 1, 1, 1, '2024-03-15 12:59:13', '2024-03-15 12:59:13', NULL),
(361, 126, 1, 1, 1, 1, 1, '2024-03-15 13:09:08', '2024-03-15 13:09:08', NULL),
(362, 126, 1, 1, 1, 1, 1, '2024-03-18 05:31:31', '2024-03-18 05:31:31', NULL),
(363, 154, 1, 1, 1, 1, 1, '2024-03-18 06:16:40', '2024-03-18 06:16:40', NULL),
(364, 155, 1, 1, 1, 1, 1, '2024-03-19 04:39:29', '2024-03-19 04:39:29', NULL),
(365, 128, 1, 1, 1, 1, 1, '2024-03-19 05:18:43', '2024-03-19 05:18:43', NULL),
(366, 156, 1, 1, 1, 1, 1, '2024-03-19 05:33:34', '2024-03-19 05:33:34', NULL),
(367, 126, 1, 1, 1, 1, 1, '2024-03-19 05:37:02', '2024-03-19 05:37:02', NULL),
(368, 146, 1, 1, 1, 1, 1, '2024-03-19 05:40:56', '2024-03-19 05:40:56', NULL),
(369, 128, 1, 1, 1, 1, 1, '2024-03-19 05:59:55', '2024-03-19 05:59:55', NULL),
(370, 126, 1, 1, 1, 1, 1, '2024-03-19 06:01:48', '2024-03-19 06:01:48', NULL),
(371, 128, 1, 1, 1, 1, 1, '2024-03-19 06:07:57', '2024-03-19 06:07:57', NULL),
(372, 126, 1, 1, 1, 1, 1, '2024-03-19 06:09:39', '2024-03-19 06:09:39', NULL),
(373, 155, 1, 1, 1, 1, 1, '2024-03-19 06:37:34', '2024-03-19 06:37:34', NULL),
(374, 126, 1, 1, 1, 1, 1, '2024-03-19 06:54:18', '2024-03-19 06:54:18', NULL),
(375, 146, 1, 1, 1, 1, 1, '2024-03-19 06:59:33', '2024-03-19 06:59:33', NULL),
(376, 146, 1, 1, 1, 1, 1, '2024-03-19 07:38:03', '2024-03-19 07:38:03', NULL),
(377, 126, 1, 1, 1, 1, 1, '2024-03-19 07:41:16', '2024-03-19 07:41:16', NULL),
(378, 146, 1, 1, 1, 1, 1, '2024-03-19 07:48:38', '2024-03-19 07:48:38', NULL),
(379, 126, 1, 1, 1, 1, 1, '2024-03-19 11:30:30', '2024-03-19 11:30:30', NULL),
(380, 126, 1, 1, 1, 1, 1, '2024-03-19 11:41:25', '2024-03-19 11:41:25', NULL),
(381, 126, 1, 1, 1, 1, 1, '2024-03-19 12:45:22', '2024-03-19 12:45:22', NULL),
(382, 146, 1, 1, 1, 1, 1, '2024-03-19 12:47:13', '2024-03-19 12:47:13', NULL),
(383, 126, 1, 1, 1, 1, 1, '2024-03-19 13:05:29', '2024-03-19 13:05:29', NULL),
(384, 157, 1, 1, 1, 1, 1, '2024-03-21 05:33:53', '2024-03-21 05:33:53', NULL),
(385, 157, 1, 1, 1, 1, 1, '2024-03-21 05:40:07', '2024-03-21 05:40:07', NULL),
(386, 158, 1, 1, 1, 1, 1, '2024-03-22 02:05:43', '2024-03-22 02:05:43', NULL),
(387, 157, 1, 1, 1, 1, 1, '2024-03-26 12:57:01', '2024-03-26 12:57:01', NULL),
(388, 159, 1, 1, 1, 1, 1, '2024-03-26 12:58:14', '2024-04-16 07:52:35', NULL),
(389, 159, 1, 1, 1, 1, 1, '2024-03-26 12:58:14', '2024-03-26 12:58:14', NULL),
(390, 159, 1, 1, 1, 1, 1, '2024-03-26 12:58:28', '2024-03-26 12:58:28', NULL),
(391, 159, 1, 1, 1, 1, 1, '2024-03-26 13:00:32', '2024-03-26 13:00:32', NULL),
(392, 159, 1, 1, 1, 1, 1, '2024-03-26 13:01:31', '2024-03-26 13:01:31', NULL),
(393, 159, 1, 1, 1, 1, 1, '2024-03-26 13:08:35', '2024-03-26 13:08:35', NULL),
(394, 159, 1, 1, 1, 1, 1, '2024-03-26 13:10:30', '2024-03-26 13:10:30', NULL),
(395, 159, 1, 1, 1, 1, 1, '2024-03-26 13:10:55', '2024-03-26 13:10:55', NULL),
(396, 159, 1, 1, 1, 1, 1, '2024-03-26 13:21:11', '2024-03-26 13:21:11', NULL),
(397, 159, 1, 1, 1, 1, 1, '2024-03-26 13:24:35', '2024-03-26 13:24:35', NULL),
(398, 159, 1, 1, 1, 1, 1, '2024-03-26 13:24:59', '2024-03-26 13:24:59', NULL),
(399, 160, 1, 1, 1, 1, 1, '2024-03-28 17:40:16', '2024-03-28 17:40:16', NULL),
(400, 159, 1, 1, 1, 1, 1, '2024-03-29 12:05:11', '2024-03-29 12:05:11', NULL),
(401, 159, 1, 1, 1, 1, 1, '2024-03-29 13:07:21', '2024-03-29 13:07:21', NULL),
(402, 159, 1, 1, 1, 1, 1, '2024-03-29 17:26:43', '2024-03-29 17:26:43', NULL),
(403, 161, 1, 1, 1, 1, 1, '2024-03-30 06:00:32', '2024-03-30 06:00:32', NULL),
(406, 170, 1, 1, 1, 1, 1, '2024-03-30 08:16:35', '2024-03-30 08:16:35', NULL),
(407, 170, 1, 1, 1, 1, 1, '2024-03-30 08:18:57', '2024-03-30 08:18:57', NULL),
(408, 170, 1, 1, 1, 1, 1, '2024-03-30 08:20:54', '2024-03-30 08:20:54', NULL),
(409, 171, 1, 1, 1, 1, 1, '2024-03-30 14:42:29', '2024-03-30 14:42:29', NULL),
(410, 172, 1, 1, 1, 1, 1, '2024-03-30 16:28:33', '2024-03-30 16:28:33', NULL),
(411, 173, 1, 1, 1, 1, 1, '2024-03-30 16:44:51', '2024-03-30 16:44:51', NULL),
(412, 172, 1, 1, 1, 1, 1, '2024-03-31 03:17:23', '2024-03-31 03:17:23', NULL),
(413, 172, 1, 1, 1, 1, 1, '2024-03-31 03:28:44', '2024-03-31 03:28:44', NULL),
(414, 172, 1, 1, 1, 1, 1, '2024-03-31 03:30:07', '2024-03-31 03:30:07', NULL),
(415, 159, 1, 1, 1, 1, 1, '2024-03-31 11:02:22', '2024-03-31 11:02:22', NULL),
(416, 159, 1, 1, 1, 1, 1, '2024-04-01 08:55:39', '2024-04-01 08:55:39', NULL),
(417, 159, 1, 1, 1, 1, 1, '2024-04-01 09:15:51', '2024-04-01 09:15:51', NULL),
(418, 174, 1, 1, 1, 1, 1, '2024-04-01 15:28:45', '2024-04-01 15:28:45', NULL),
(419, 159, 1, 1, 1, 1, 1, '2024-04-01 16:01:15', '2024-04-01 16:01:15', NULL),
(420, 159, 1, 1, 1, 1, 1, '2024-04-01 18:58:08', '2024-04-01 18:58:08', NULL),
(421, 159, 1, 1, 1, 1, 1, '2024-04-02 04:59:23', '2024-04-02 04:59:23', NULL),
(422, 175, 1, 1, 1, 1, 1, '2024-04-02 16:27:51', '2024-04-02 16:27:51', NULL),
(423, 176, 1, 1, 1, 1, 1, '2024-04-02 16:42:10', '2024-04-02 16:42:10', NULL),
(424, 177, 1, 1, 1, 1, 1, '2024-04-02 16:43:01', '2024-04-02 16:43:01', NULL),
(425, 178, 1, 1, 1, 1, 1, '2024-04-02 16:49:05', '2024-04-02 16:49:05', NULL),
(426, 179, 1, 1, 1, 1, 1, '2024-04-02 17:40:49', '2024-04-02 17:40:49', NULL),
(427, 180, 1, 1, 1, 1, 1, '2024-04-02 17:53:20', '2024-04-02 17:53:20', NULL),
(428, 181, 1, 1, 1, 1, 1, '2024-04-02 18:42:55', '2024-04-02 18:42:55', NULL),
(429, 172, 1, 1, 1, 1, 1, '2024-04-03 07:07:34', '2024-04-03 07:07:34', NULL),
(430, 159, 1, 1, 1, 1, 1, '2024-04-04 06:03:56', '2024-04-04 06:03:56', NULL),
(431, 182, 1, 1, 1, 1, 1, '2024-04-04 11:02:53', '2024-04-04 11:02:53', NULL),
(432, 172, 1, 1, 1, 1, 1, '2024-04-04 11:09:06', '2024-04-04 11:09:06', NULL),
(433, 182, 1, 1, 1, 1, 1, '2024-04-04 11:19:06', '2024-04-04 11:19:06', NULL),
(434, 172, 1, 1, 1, 1, 1, '2024-04-04 11:29:59', '2024-04-04 11:29:59', NULL),
(435, 182, 1, 1, 1, 1, 1, '2024-04-04 13:14:30', '2024-04-04 13:14:30', NULL),
(436, 172, 1, 1, 1, 1, 1, '2024-04-04 13:22:24', '2024-04-04 13:22:24', NULL),
(437, 182, 1, 1, 1, 1, 1, '2024-04-04 13:31:40', '2024-04-04 13:31:40', NULL),
(438, 172, 1, 1, 1, 1, 1, '2024-04-04 15:13:41', '2024-04-04 15:13:41', NULL),
(439, 183, 1, 1, 1, 1, 1, '2024-04-04 16:49:29', '2024-04-04 16:49:29', NULL),
(440, 184, 1, 1, 1, 1, 1, '2024-04-04 17:09:13', '2024-04-04 17:09:13', NULL),
(441, 159, 1, 1, 1, 1, 1, '2024-04-05 01:52:59', '2024-04-05 01:52:59', NULL),
(442, 182, 1, 1, 1, 1, 1, '2024-04-05 04:19:12', '2024-04-05 04:19:12', NULL),
(443, 172, 1, 1, 1, 1, 1, '2024-04-05 06:04:55', '2024-04-05 06:04:55', NULL),
(444, 172, 1, 1, 1, 1, 1, '2024-04-05 14:04:33', '2024-04-05 14:04:33', NULL),
(445, 159, 1, 1, 1, 1, 1, '2024-04-05 22:59:54', '2024-04-05 22:59:54', NULL),
(446, 182, 1, 1, 1, 1, 1, '2024-04-06 08:47:40', '2024-04-06 08:47:40', NULL),
(447, 159, 1, 1, 1, 1, 1, '2024-04-06 13:01:54', '2024-04-06 13:01:54', NULL),
(448, 159, 1, 1, 1, 1, 1, '2024-04-06 16:17:14', '2024-04-06 16:17:14', NULL),
(449, 172, 1, 1, 1, 1, 1, '2024-04-06 17:54:21', '2024-04-06 17:54:21', NULL),
(450, 159, 1, 1, 1, 1, 1, '2024-04-07 10:57:10', '2024-04-07 10:57:10', NULL),
(451, 159, 1, 1, 1, 1, 1, '2024-04-08 01:58:42', '2024-04-08 01:58:42', NULL),
(452, 159, 1, 1, 1, 1, 1, '2024-04-08 07:55:35', '2024-04-08 07:55:35', NULL),
(453, 159, 1, 1, 1, 1, 1, '2024-04-08 21:56:48', '2024-04-08 21:56:48', NULL),
(454, 159, 1, 1, 1, 1, 1, '2024-04-09 03:55:10', '2024-04-09 03:55:10', NULL),
(455, 182, 1, 1, 1, 1, 1, '2024-04-09 04:51:26', '2024-04-09 04:51:26', NULL),
(456, 159, 1, 1, 1, 1, 1, '2024-04-09 04:56:12', '2024-04-09 04:56:12', NULL),
(457, 172, 1, 1, 1, 1, 1, '2024-04-09 07:24:37', '2024-04-09 07:24:37', NULL),
(458, 182, 1, 1, 1, 1, 1, '2024-04-09 07:59:00', '2024-04-09 07:59:00', NULL),
(459, 159, 1, 1, 1, 1, 1, '2024-04-10 02:26:46', '2024-04-10 02:26:46', NULL),
(460, 159, 1, 1, 1, 1, 1, '2024-04-10 02:36:00', '2024-04-10 02:36:00', NULL),
(461, 159, 1, 1, 1, 1, 1, '2024-04-10 10:27:34', '2024-04-10 10:27:34', NULL),
(462, 159, 1, 1, 1, 1, 1, '2024-04-10 12:45:34', '2024-04-10 12:45:34', NULL),
(463, 159, 1, 1, 1, 1, 1, '2024-04-10 13:07:26', '2024-04-10 13:07:26', NULL),
(464, 172, 1, 1, 1, 1, 1, '2024-04-11 06:54:11', '2024-04-11 06:54:11', NULL),
(465, 182, 1, 1, 1, 1, 1, '2024-04-11 17:18:51', '2024-04-11 17:18:51', NULL),
(466, 172, 1, 1, 1, 1, 1, '2024-04-11 17:28:49', '2024-04-11 17:28:49', NULL),
(467, 182, 1, 1, 1, 1, 1, '2024-04-11 19:09:06', '2024-04-11 19:09:06', NULL),
(468, 159, 1, 1, 1, 1, 1, '2024-04-12 01:56:17', '2024-04-12 01:56:17', NULL),
(469, 172, 1, 1, 1, 1, 1, '2024-04-12 06:13:47', '2024-04-12 06:13:47', NULL),
(470, 159, 1, 1, 1, 1, 1, '2024-04-12 06:32:53', '2024-04-12 06:32:53', NULL),
(471, 172, 1, 1, 1, 1, 1, '2024-04-12 06:34:00', '2024-04-12 06:34:00', NULL),
(472, 159, 1, 1, 1, 1, 1, '2024-04-13 01:57:28', '2024-04-13 01:57:28', NULL),
(473, 159, 1, 1, 1, 1, 1, '2024-04-13 14:54:59', '2024-04-13 14:54:59', NULL),
(474, 159, 1, 1, 1, 1, 1, '2024-04-13 23:55:37', '2024-04-13 23:55:37', NULL),
(475, 182, 1, 1, 1, 1, 1, '2024-04-14 12:05:45', '2024-04-14 12:05:45', NULL),
(476, 159, 1, 1, 1, 1, 1, '2024-04-14 17:56:05', '2024-04-14 17:56:05', NULL),
(477, 159, 1, 1, 1, 1, 1, '2024-04-15 00:54:05', '2024-04-15 00:54:05', NULL),
(478, 159, 1, 1, 1, 1, 1, '2024-04-15 06:13:45', '2024-04-15 06:13:45', NULL),
(479, 185, 1, 1, 1, 1, 1, '2024-04-15 08:01:42', '2024-04-15 08:01:42', NULL),
(480, 182, 1, 1, 1, 1, 1, '2024-04-15 12:31:18', '2024-04-15 12:31:18', NULL),
(481, 172, 1, 1, 1, 1, 1, '2024-04-15 12:34:46', '2024-04-15 12:34:46', NULL),
(482, 182, 1, 1, 1, 1, 1, '2024-04-15 12:58:34', '2024-04-15 12:58:34', NULL),
(483, 172, 1, 1, 1, 1, 1, '2024-04-15 13:50:00', '2024-04-15 13:50:00', NULL),
(484, 186, 1, 1, 1, 1, 1, '2024-04-15 16:48:43', '2024-04-15 16:48:43', NULL),
(485, 182, 1, 1, 1, 1, 1, '2024-04-16 04:40:53', '2024-04-16 04:40:53', NULL),
(486, 159, 1, 1, 1, 1, 1, '2024-04-16 07:23:22', '2024-04-16 07:23:22', NULL),
(487, 172, 1, 1, 1, 1, 1, '2024-04-16 07:40:52', '2024-04-16 07:40:52', NULL),
(488, 159, 1, 1, 1, 1, 1, '2024-04-16 07:48:57', '2024-04-16 07:48:57', NULL),
(489, 172, 1, 1, 1, 1, 1, '2024-04-16 10:25:38', '2024-04-16 10:25:38', NULL),
(490, 159, 1, 1, 1, 1, 1, '2024-04-16 13:56:32', '2024-04-16 13:56:32', NULL),
(491, 159, 1, 1, 1, 1, 1, '2024-04-16 21:54:57', '2024-04-16 21:54:57', NULL),
(492, 146, 1, 1, 1, 1, 1, '2024-04-17 05:21:42', '2024-04-17 05:21:42', NULL),
(493, 146, 1, 1, 1, 1, 1, '2024-04-17 07:42:37', '2024-04-17 07:42:37', NULL),
(494, 172, 1, 1, 1, 1, 1, '2024-04-17 07:54:08', '2024-04-17 07:54:08', NULL),
(495, 182, 1, 1, 1, 1, 1, '2024-04-17 07:55:51', '2024-04-17 07:55:51', NULL),
(496, 159, 1, 1, 1, 1, 1, '2024-04-17 11:02:20', '2024-04-17 11:02:20', NULL),
(497, 172, 1, 1, 1, 1, 1, '2024-04-17 15:11:07', '2024-04-17 15:11:07', NULL),
(498, 159, 1, 1, 1, 1, 1, '2024-04-17 21:42:20', '2024-04-17 21:42:20', NULL),
(499, 159, 1, 1, 1, 1, 1, '2024-04-18 06:44:58', '2024-04-18 06:44:58', NULL),
(500, 159, 1, 1, 1, 1, 1, '2024-04-18 06:48:13', '2024-04-18 06:48:13', NULL),
(502, 146, 1, 1, 1, 1, 1, '2024-04-18 07:06:16', '2024-04-18 07:06:16', NULL),
(503, 146, 1, 1, 1, 1, 1, '2024-04-18 07:08:32', '2024-04-18 07:08:32', NULL),
(504, 187, 1, 1, 1, 1, 1, '2024-04-18 07:26:33', '2024-04-18 07:26:33', NULL),
(505, 146, 1, 1, 1, 1, 1, '2024-04-18 07:34:31', '2024-04-18 07:34:31', NULL),
(506, 159, 1, 1, 1, 1, 1, '2024-04-18 07:55:12', '2024-04-18 07:55:12', NULL),
(507, 146, 1, 1, 1, 1, 1, '2024-04-18 10:31:57', '2024-04-18 10:31:57', NULL),
(508, 132, 1, 1, 1, 1, 1, '2024-04-18 12:22:18', '2024-04-18 12:22:18', NULL),
(509, 146, 1, 1, 1, 1, 1, '2024-04-18 12:36:29', '2024-04-18 12:36:29', NULL),
(510, 187, 1, 1, 1, 1, 1, '2024-04-18 12:39:34', '2024-04-18 12:39:34', NULL),
(511, 187, 1, 1, 1, 1, 1, '2024-04-18 13:09:45', '2024-04-18 13:09:45', NULL),
(512, 159, 1, 1, 1, 1, 1, '2024-04-18 13:37:13', '2024-04-18 13:37:13', NULL),
(513, 159, 1, 1, 1, 1, 1, '2024-04-18 13:37:19', '2024-04-18 13:37:19', NULL),
(514, 159, 1, 1, 1, 1, 1, '2024-04-18 13:39:09', '2024-04-18 13:39:09', NULL),
(515, 159, 1, 1, 1, 1, 1, '2024-04-18 13:40:25', '2024-04-18 13:40:25', NULL),
(516, 159, 1, 1, 1, 1, 1, '2024-04-18 13:40:30', '2024-04-18 13:40:30', NULL),
(517, 159, 1, 1, 1, 1, 1, '2024-04-18 14:38:21', '2024-04-18 14:38:21', NULL),
(518, 182, 1, 1, 1, 1, 1, '2024-04-18 14:55:12', '2024-04-18 14:55:12', NULL),
(519, 129, 1, 1, 1, 1, 1, '2024-04-19 07:15:53', '2024-04-19 07:15:53', NULL),
(520, 172, 1, 1, 1, 1, 1, '2024-04-20 03:07:23', '2024-04-20 03:07:23', NULL),
(521, 182, 1, 1, 1, 1, 1, '2024-04-20 03:08:41', '2024-04-20 03:08:41', NULL),
(522, 172, 1, 1, 1, 1, 1, '2024-04-20 07:59:35', '2024-04-20 07:59:35', NULL),
(523, 146, 1, 1, 1, 1, 1, '2024-04-20 10:15:00', '2024-04-20 10:15:00', NULL),
(524, 145, 1, 1, 1, 1, 1, '2024-04-20 10:22:28', '2024-04-20 10:22:28', NULL),
(525, 145, 1, 1, 1, 1, 1, '2024-04-20 10:53:34', '2024-04-20 10:53:34', NULL),
(526, 172, 1, 1, 1, 1, 1, '2024-04-20 12:55:39', '2024-04-20 12:55:39', NULL),
(527, 172, 1, 1, 1, 1, 1, '2024-04-21 05:29:26', '2024-04-21 05:29:26', NULL),
(528, 182, 1, 1, 1, 1, 1, '2024-04-21 05:29:54', '2024-04-21 05:29:54', NULL),
(529, 172, 1, 1, 1, 1, 1, '2024-04-21 06:16:46', '2024-04-21 06:16:46', NULL),
(530, 172, 1, 1, 1, 1, 1, '2024-04-21 06:27:43', '2024-04-21 06:27:43', NULL),
(531, 182, 1, 1, 1, 1, 1, '2024-04-21 06:57:06', '2024-04-21 06:57:06', NULL),
(532, 172, 1, 1, 1, 1, 1, '2024-04-21 06:59:11', '2024-04-21 06:59:11', NULL),
(533, 182, 1, 1, 1, 1, 1, '2024-04-21 07:34:35', '2024-04-21 07:34:35', NULL),
(534, 172, 1, 1, 1, 1, 1, '2024-04-21 07:37:45', '2024-04-21 07:37:45', NULL),
(535, 172, 1, 1, 1, 1, 1, '2024-04-21 07:40:29', '2024-04-21 07:40:29', NULL),
(536, 182, 1, 1, 1, 1, 1, '2024-04-21 07:41:17', '2024-04-21 07:41:17', NULL),
(537, 172, 1, 1, 1, 1, 1, '2024-04-21 07:42:07', '2024-04-21 07:42:07', NULL),
(538, 172, 1, 1, 1, 1, 1, '2024-04-21 07:57:52', '2024-04-21 07:57:52', NULL),
(539, 182, 1, 1, 1, 1, 1, '2024-04-21 08:11:16', '2024-04-21 08:11:16', NULL),
(540, 172, 1, 1, 1, 1, 1, '2024-04-21 08:34:30', '2024-04-21 08:34:30', NULL),
(541, 188, 1, 1, 1, 1, 1, '2024-04-21 10:03:32', '2024-04-21 10:03:32', NULL),
(542, 172, 1, 1, 1, 1, 1, '2024-04-21 10:10:22', '2024-04-21 10:10:22', NULL),
(543, 182, 1, 1, 1, 1, 1, '2024-04-21 10:23:20', '2024-04-21 10:23:20', NULL),
(544, 172, 1, 1, 1, 1, 1, '2024-04-21 10:26:33', '2024-04-21 10:26:33', NULL),
(545, 182, 1, 1, 1, 1, 1, '2024-04-21 10:28:39', '2024-04-21 10:28:39', NULL),
(546, 172, 1, 1, 1, 1, 1, '2024-04-21 10:30:18', '2024-04-21 10:30:18', NULL),
(547, 146, 1, 1, 1, 1, 1, '2024-04-22 06:19:55', '2024-04-22 06:19:55', NULL),
(548, 187, 1, 1, 1, 1, 1, '2024-04-22 06:25:35', '2024-04-22 06:25:35', NULL),
(549, 172, 1, 1, 1, 1, 1, '2024-04-22 13:05:09', '2024-04-22 13:05:09', NULL),
(550, 172, 1, 1, 1, 1, 1, '2024-04-22 13:27:57', '2024-04-22 13:27:57', NULL),
(551, 172, 1, 1, 1, 1, 1, '2024-04-22 13:30:35', '2024-04-22 13:30:35', NULL),
(552, 159, 1, 1, 1, 1, 1, '2024-04-23 04:49:42', '2024-04-23 04:49:42', NULL),
(553, 126, 1, 1, 1, 1, 1, '2024-04-23 04:56:20', '2024-04-23 04:56:20', NULL),
(554, 145, 1, 1, 1, 1, 1, '2024-04-23 05:07:33', '2024-04-23 05:07:33', NULL),
(555, 126, 1, 1, 1, 1, 1, '2024-04-23 05:11:59', '2024-04-23 05:11:59', NULL),
(556, 126, 1, 1, 1, 1, 1, '2024-04-23 06:19:31', '2024-04-23 06:19:31', NULL),
(557, 126, 1, 1, 1, 1, 1, '2024-04-23 06:25:45', '2024-04-23 06:25:45', NULL),
(558, 126, 1, 1, 1, 1, 1, '2024-04-23 06:33:11', '2024-04-23 06:33:11', NULL),
(559, 126, 1, 1, 1, 1, 1, '2024-04-23 06:59:30', '2024-04-23 06:59:30', NULL),
(560, 126, 1, 1, 1, 1, 1, '2024-04-23 07:08:59', '2024-04-23 07:08:59', NULL),
(561, 172, 1, 1, 1, 1, 1, '2024-04-23 10:35:33', '2024-04-23 10:35:33', NULL),
(562, 187, 1, 1, 1, 1, 1, '2024-04-23 13:06:57', '2024-04-23 13:06:57', NULL),
(563, 126, 1, 1, 1, 1, 1, '2024-04-24 04:56:45', '2024-04-24 04:56:45', NULL),
(564, 187, 1, 1, 1, 1, 1, '2024-04-24 05:30:46', '2024-04-24 05:30:46', NULL),
(565, 146, 1, 1, 1, 1, 1, '2024-04-24 05:33:31', '2024-04-24 05:33:31', NULL),
(566, 172, 1, 1, 1, 1, 1, '2024-04-24 06:31:24', '2024-04-24 06:31:24', NULL),
(567, 182, 1, 1, 1, 1, 1, '2024-04-24 07:14:24', '2024-04-24 07:14:24', NULL),
(568, 159, 1, 1, 1, 1, 1, '2024-04-25 05:41:51', '2024-04-25 05:41:51', NULL),
(569, 159, 1, 1, 1, 1, 1, '2024-04-25 05:43:22', '2024-04-25 05:43:22', NULL),
(570, 159, 1, 1, 1, 1, 1, '2024-04-25 05:44:27', '2024-04-25 05:44:27', NULL),
(571, 159, 1, 1, 1, 1, 1, '2024-04-25 05:44:38', '2024-04-25 05:44:38', NULL),
(572, 159, 1, 1, 1, 1, 1, '2024-04-25 09:03:21', '2024-04-25 09:03:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `client_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('00089be0677b72ed4f4ccbeed376df6dc0e3ffc9cc540abda163c439f893ecad90fa910ec09ce261', 161, 1, 'MyApp', '[]', 0, '2024-03-30 06:00:32', '2024-03-30 06:00:32', '2025-03-30 11:30:32'),
('009a7eee54019ba3300bec55809a9c926a5a3e564b1b66a32e915adde612f3ca3b7f25d9ada36dd4', 129, 1, 'MyApp', '[]', 0, '2024-03-08 07:31:29', '2024-03-08 07:31:29', '2025-03-08 13:01:29'),
('009ff0e3854f0c6ee32b683f6a5dbe7b8fcf004028d2eef09cdabd1a88c21414b1c8c563ff2b33e2', 175, 1, 'MyApp', '[]', 0, '2024-04-02 16:27:51', '2024-04-02 16:27:51', '2025-04-02 21:57:51'),
('00a3d360eb9e42bcf4e7e0f06ff7ad3569bd053a1480e3eaaef91ff256752d363b14640229d23f3d', 186, 1, 'MyApp', '[]', 0, '2024-04-15 16:48:43', '2024-04-15 16:48:43', '2025-04-15 22:18:43'),
('00bf27595090d98a9a06d0a5e89c6acaaaf70aa87dee1c00cd47c8b6fb4d98fa862f93a5e644b1ea', 56, 1, 'MyApp', '[]', 0, '2024-02-05 06:53:32', '2024-02-05 06:53:32', '2025-02-05 12:23:32'),
('00ea8c85063354f0f0b03d5627fa9e695fd46c4c2899da82f5fe1d8469eb712f93b52842766dc07a', 128, 1, 'MyApp', '[]', 0, '2024-03-13 10:02:48', '2024-03-13 10:02:48', '2025-03-13 15:32:48'),
('0120de74109d3053eead7ed4f420af3be96ebdcf17c2ecdb256fd42a30116f41a8ba8feeb106595d', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:23:27', '2023-12-11 06:23:27', '2024-12-11 11:53:27'),
('016ed18e2c19c5a31b657f26ae3a5caf0bc490674147680a429310ff66c966baf44a0d3dbf27d7d8', 80, 1, 'MyApp', '[]', 0, '2024-03-05 10:14:17', '2024-03-05 10:14:17', '2025-03-05 15:44:17'),
('01751c87630fe8510a1e24cb633464e0a528421aceff4cd277fe12689dd63c83cd50e7e2e913c69a', 37, 1, 'MyApp', '[]', 0, '2023-12-26 12:31:30', '2023-12-26 12:31:30', '2024-12-26 18:01:30'),
('01fa11519f815db4e06fd160973519f376665822899bcc9d44bddb34ce43a08335d153142d4f91a3', 56, 1, 'MyApp', '[]', 0, '2024-01-25 13:11:27', '2024-01-25 13:11:27', '2025-01-25 18:41:27'),
('0230819992a0ea0ef545befd1704bfe9321c0a92ae90b917b400cdcadb6eb5b9858c56245be4b20d', 159, 1, 'MyApp', '[]', 0, '2024-03-29 17:26:43', '2024-03-29 17:26:43', '2025-03-29 22:56:43'),
('025910fcc950e7154b3f5172364d22de27e4121c0433003a673b41b2a356a7eb0c0c0645dc01990b', 126, 1, 'MyApp', '[]', 0, '2024-03-19 06:09:39', '2024-03-19 06:09:39', '2025-03-19 11:39:39'),
('0283a0bd8b4bc26ecfe0024e67352d74493614e2b5f893b8cfa057fa373ecb829c1bb22dae86e05c', 59, 1, 'MyApp', '[]', 0, '2024-01-22 06:20:07', '2024-01-22 06:20:07', '2025-01-22 11:50:07'),
('03382edd8c3f9c1d4109c48357f2cb4ad4be349b59678cde6007360178def3d3defa2e63c88208c3', 11, 1, 'MyApp', '[]', 0, '2023-12-12 09:07:05', '2023-12-12 09:07:05', '2024-12-12 14:37:05'),
('03538550268fad34d5bf8818fc489f93d02085f2aee39015df48c20208b8e7f9253ecc41d1d049c0', 159, 1, 'MyApp', '[]', 0, '2024-03-26 13:01:31', '2024-03-26 13:01:31', '2025-03-26 18:31:31'),
('03b516c197a6c2d1533ab8e4b83b707404681cc36001c7235b67030cdd5b20e4d7e632cc8a6cef1d', 159, 1, 'MyApp', '[]', 0, '2024-03-26 13:10:55', '2024-03-26 13:10:55', '2025-03-26 18:40:55'),
('03e6e1e69dbdf5aaf227ffc95f43999d3e586895704b4def232a423fb095ca85db527a69b7865ddc', 12, 1, 'MyApp', '[]', 0, '2023-12-22 06:40:43', '2023-12-22 06:40:43', '2024-12-22 12:10:43'),
('03fa1580b191695038323397fdd4d50101109e16a47624649028c96c94a9e84abeb57761a4f3832e', 129, 1, 'MyApp', '[]', 0, '2024-04-17 14:39:41', '2024-04-17 14:39:41', '2025-04-17 20:09:41'),
('042cb9fa9bc9f3993123b7b6a1c93a4a361487f4c09f88ba0d90a9eab5b8b1bfd342499dcb125c39', 146, 1, 'MyApp', '[]', 0, '2024-04-18 10:31:57', '2024-04-18 10:31:57', '2025-04-18 16:01:57'),
('043d05b15402212b172f5e2d7aa0a7a91282adb156128a0fd198ffa4f30edf6970bcad90601d18cd', 148, 1, 'MyApp', '[]', 0, '2024-03-14 09:24:45', '2024-03-14 09:24:45', '2025-03-14 14:54:45'),
('044e139ffbf2fddb52f084e4f1a792865326bdd36d35a1b9ac3c882c2b0094a3305ee8e2e5e6548e', 172, 1, 'MyApp', '[]', 0, '2024-03-31 03:17:23', '2024-03-31 03:17:23', '2025-03-31 08:47:23'),
('0459069d3b120818dd9de53a6f1ebed8f21c0b5dfee95285358682e1f31d6152169da7acf307fa54', 10, 1, 'MyApp', '[]', 0, '2023-12-11 07:22:14', '2023-12-11 07:22:14', '2024-12-11 12:52:14'),
('04783c2935e3a8a298d61fef426abb769e91ba2a8b2a3466f934fbfa96e0c296a548c1b4697c33a9', 149, 1, 'MyApp', '[]', 0, '2024-03-15 12:27:29', '2024-03-15 12:27:29', '2025-03-15 17:57:29'),
('05128564396ade61a8561a86048bddc414c2335680431a5e4f74159f69a3b5723e7ccdef367e90f3', 80, 1, 'MyApp', '[]', 0, '2024-02-27 10:07:33', '2024-02-27 10:07:33', '2025-02-27 15:37:33'),
('05259ec1a73b6111635b4bc87d0c46c3c1441db9e1c3fe079d0f8aebb041ced9868af495302a1bfb', 151, 1, 'MyApp', '[]', 0, '2024-03-15 11:24:09', '2024-03-15 11:24:09', '2025-03-15 16:54:09'),
('055d160612ed0edda5fb25d81e0c9f625ce0437d57ae7106eaedd0e25699bbfc5cf1781dc6d37eb8', 12, 1, 'MyApp', '[]', 0, '2023-12-27 09:24:56', '2023-12-27 09:24:56', '2024-12-27 14:54:56'),
('055f8ce562654c81645de25330c73a09026a0296970dd2e7f6d114b3ab6096d5650204ef13e491af', 159, 1, 'MyApp', '[]', 0, '2024-04-18 13:37:19', '2024-04-18 13:37:19', '2025-04-18 19:07:19'),
('0589abf7f838d9185785b4291ab594a35acf2d9b834702907fd89f7b3a0194b7c63a1d0b4dcb3d38', 59, 1, 'MyApp', '[]', 0, '2024-01-23 11:21:00', '2024-01-23 11:21:00', '2025-01-23 16:51:00'),
('058e09b0cbb7fd43a9a1eb0315abc537a910058b7c79bb15254e52372a8089103b19181c7545f89b', 58, 1, 'MyApp', '[]', 0, '2024-02-15 07:36:51', '2024-02-15 07:36:51', '2025-02-15 13:06:51'),
('05c7abb9a2373c3e98ab6acc2318165419ccd88beab87abe7500e1c22de2cebe37e9e9054f4d0786', 12, 1, 'MyApp', '[]', 0, '2023-12-22 11:30:16', '2023-12-22 11:30:16', '2024-12-22 17:00:16'),
('065411d29da86fb27ac385d35afc67eed4b25f75659d73e5bbc0cd004fe70d90b45399a232266453', 130, 1, 'MyApp', '[]', 0, '2024-03-08 07:13:32', '2024-03-08 07:13:32', '2025-03-08 12:43:32'),
('067a66deca7d32abd528f008f095747fe0280de706158e507562e9e7f21d228c0baf2833f25e9535', 56, 1, 'MyApp', '[]', 0, '2024-01-23 09:42:12', '2024-01-23 09:42:12', '2025-01-23 15:12:12'),
('068bef29c07e7c205158ddc244c9e2459500cf2c8e1e2acb8eee3844f51e62fb5e9736350bf38721', 56, 1, 'MyApp', '[]', 0, '2024-02-07 06:06:15', '2024-02-07 06:06:15', '2025-02-07 11:36:15'),
('06def19f352ea5a6f706683772ef9e6c49591b5d3d057c2eb5584f917c59b2b0200e3ab3e2e47219', 172, 1, 'MyApp', '[]', 0, '2024-04-21 06:59:11', '2024-04-21 06:59:11', '2025-04-21 12:29:11'),
('0742d49ec62b92cabdcfaa4350f0f1d0ad1236a2bff0da5bd2b28867894406e5b21c68d7aa43c02b', 128, 1, 'MyApp', '[]', 0, '2024-03-09 12:06:03', '2024-03-09 12:06:03', '2025-03-09 17:36:03'),
('07791f4a20b310673397fc74aa071f12ea347ce1784538cbeee504af5788ca0e0c5f97127efe743c', 39, 1, 'MyApp', '[]', 0, '2023-12-28 06:14:56', '2023-12-28 06:14:56', '2024-12-28 11:44:56'),
('077df797bf54ac4edc390104a5376a82c5dad0858b321d6524f6fcae13e67372d1aaee0aa3767dca', 12, 1, 'MyApp', '[]', 0, '2023-12-16 11:34:11', '2023-12-16 11:34:11', '2024-12-16 17:04:11'),
('077e4701c64f3490b53fe31ba94d752af038ed600f547784bd7e4d215ec89f8a9aac86e357af2bba', 129, 1, 'MyApp', '[]', 0, '2024-04-21 06:25:35', '2024-04-21 06:25:35', '2025-04-21 11:55:35'),
('07a9ed7d557a24e76fbaa8fc2600dbcefb064d38f6b60d0a6e7beea0609a4f26569b334dd471f0da', 146, 1, 'MyApp', '[]', 0, '2024-03-15 12:32:03', '2024-03-15 12:32:03', '2025-03-15 18:02:03'),
('0814551b27aaf547838db4fb4081eda2a2af6f0caa818c609825150726f05acccf4c1bd43476bd15', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:21:41', '2023-12-11 06:21:41', '2024-12-11 11:51:41'),
('088d20e06f67f0410594d3687f50095b402dd121f1ed4560305545ce88b66327b1b76b5dbc08712b', 41, 1, 'MyApp', '[]', 0, '2023-12-29 06:27:00', '2023-12-29 06:27:00', '2024-12-29 11:57:00'),
('08ca10e1996729284c65174286de34e6ad178cfa4f897fcc91e8341149ec95c7dd691deb4d3d11f2', 93, 1, 'MyApp', '[]', 0, '2024-02-06 05:22:05', '2024-02-06 05:22:05', '2025-02-06 10:52:05'),
('09031e13c0ce80bc179b77bf6c04fc440ea8ae76a64c833076afe977bd0b9c3df2607745c6c3dbed', 91, 1, 'MyApp', '[]', 0, '2024-03-05 10:12:15', '2024-03-05 10:12:15', '2025-03-05 15:42:15'),
('093b5affff5fb88bd90c3d2d066ad65b342335755ad96a54b05815021f51c20042a55a8268a59aa1', 35, 1, 'MyApp', '[]', 0, '2023-12-22 07:07:04', '2023-12-22 07:07:04', '2024-12-22 12:37:04'),
('095adf5af0fb964c9b486faa94aa7a1bf17e50ed0972656270396e56f839b39c57e050713105d67d', 137, 1, 'MyApp', '[]', 0, '2024-03-08 05:32:06', '2024-03-08 05:32:06', '2025-03-08 11:02:06'),
('09c39c1f0360367dcd78df9376025a4cc230f5fbf5f8b86adcf375b90415a74858e1699f8557b66f', 130, 1, 'MyApp', '[]', 0, '2024-03-18 11:10:03', '2024-03-18 11:10:03', '2025-03-18 16:40:03'),
('09dbf375f5b2261dc188e638a9930039f3abc6cdbb247626d75f9945799e9f02fb321ef6101952e0', 139, 1, 'MyApp', '[]', 0, '2024-03-15 11:26:18', '2024-03-15 11:26:18', '2025-03-15 16:56:18'),
('09e62c77deb3607f779124b76faba78811419af65e631c90d659c98419fe1f2bda667346dfd3bdbb', 130, 1, 'MyApp', '[]', 0, '2024-03-14 07:17:56', '2024-03-14 07:17:56', '2025-03-14 12:47:56'),
('09ea6d48ba797e6cb9dab26c58932fecb98ee2d5102554b0377357d7d2f04f77d3b175366731abf5', 57, 1, 'MyApp', '[]', 0, '2024-01-22 04:48:05', '2024-01-22 04:48:05', '2025-01-22 10:18:05'),
('0ad1bdf2c6d6e9a65e11be686fd51d89150b8a78b60b835e07a01ef326fdb4dbf2e4ba9da8cf0549', 81, 1, 'MyApp', '[]', 0, '2024-02-23 11:57:55', '2024-02-23 11:57:55', '2025-02-23 17:27:55'),
('0ae4bb814ba3a6ac7d0648d92cb107dce6fb9a94202ac6e0cb2f77a93037b1b6e87a33ed1a036423', 52, 1, 'MyApp', '[]', 0, '2024-01-11 12:30:13', '2024-01-11 12:30:13', '2025-01-11 18:00:13'),
('0af2a5c0366757db9f98718b820ea0b4f58fbc9031876f70e7cfa84cc44f54d12c11c2d93662aa59', 18, 1, 'MyApp', '[]', 0, '2023-12-15 04:14:32', '2023-12-15 04:14:32', '2024-12-15 09:44:32'),
('0b12eb1c40ae4e6a07a0cdacfc30cf270df7d47588dc3e56ad6b66d37f5e092268e6f78889953dae', 57, 1, 'MyApp', '[]', 0, '2024-01-20 12:34:03', '2024-01-20 12:34:03', '2025-01-20 18:04:03'),
('0b422ab6a9ea2a1718ea2c8b3c94b01fd1c0bf50f0998bb6b9dc0a45249744f6f468a6c95644cb42', 95, 1, 'MyApp', '[]', 0, '2024-02-16 05:36:45', '2024-02-16 05:36:45', '2025-02-16 11:06:45'),
('0bd44a74a84f6ef9e9d4b0248e0636080456bc2dc3c2fdd1489baaf78373bebf076137998e68cf93', 172, 1, 'MyApp', '[]', 0, '2024-04-03 07:07:34', '2024-04-03 07:07:34', '2025-04-03 12:37:34'),
('0c1115834e16dbd6cdd7d00e6b05763575b77efacbb81aaffff26e16e134dfda2bcad2167fd30fe1', 56, 1, 'MyApp', '[]', 0, '2024-02-10 09:08:33', '2024-02-10 09:08:33', '2025-02-10 14:38:33'),
('0c629b020383f1840fba75a2d7406dde0f3498c7d54c1a94a696f242b9b6a2813a69d49b02c1408f', 56, 1, 'MyApp', '[]', 0, '2024-02-02 07:04:34', '2024-02-02 07:04:34', '2025-02-02 12:34:34'),
('0d0d7cccd06a892086079f2d93c03f1cd4262ea72639fa7aaa2f8a406fd85123ae8c377f6447508f', 146, 1, 'MyApp', '[]', 0, '2024-04-17 07:42:37', '2024-04-17 07:42:37', '2025-04-17 13:12:37'),
('0d142bac77d61ae176f46b05a6b82c49d3ebae876ee5aff52b0cbd460cf090276858f1d92c5427bc', 85, 1, 'MyApp', '[]', 0, '2024-02-06 04:32:19', '2024-02-06 04:32:19', '2025-02-06 10:02:19'),
('0d5437a030585b12bd0d7f98e9c79859dd24c075833363f050eb3475b75b076bb2cd8137b3eb5305', 159, 1, 'MyApp', '[]', 0, '2024-04-01 16:01:15', '2024-04-01 16:01:15', '2025-04-01 21:31:15'),
('0df9b975a567ccda4f27f1ec1f8e6603e9f3bf82163d2814d026cd669ead6d729b3d3ad4079ff58e', 159, 1, 'MyApp', '[]', 0, '2024-04-04 06:03:56', '2024-04-04 06:03:56', '2025-04-04 11:33:56'),
('0e366428550e03049b17756cb8493c46962fb0b1b0329a00cbfe3f5574f151acc73096a5829990bb', 1, 1, 'MyApp', '[]', 0, '2023-12-18 13:39:36', '2023-12-18 13:39:36', '2024-12-18 19:09:36'),
('0e4cd0aa9b631c1abb047c99494bf64c0f679b3aed28689ef2cee0708eaf02bcbe3feff9d8418609', 26, 1, 'MyApp', '[]', 0, '2023-12-15 15:17:38', '2023-12-15 15:17:38', '2024-12-15 20:47:38'),
('0e510bc8b8bdd8f73e0a27ddfa37011a6db0288b9f47cc59056518c2e04d0bd9ecf54e1eb61cc62a', 52, 1, 'MyApp', '[]', 0, '2024-01-11 13:22:17', '2024-01-11 13:22:17', '2025-01-11 18:52:17'),
('0e9710e4f19b4800c5e7988e5fe93fdf0dc1ed26ecd67b1843a3bbbc3044b4d6aac2ed7254cc8433', 76, 1, 'MyApp', '[]', 0, '2024-03-05 16:46:40', '2024-03-05 16:46:40', '2025-03-05 22:16:40'),
('0e9855a96651884695ac6ca3346f3ec87fcb6c9b1f3c8994d14fb946918ba9620d2828f71dcf303a', 20, 1, 'MyApp', '[]', 0, '2023-12-15 07:38:42', '2023-12-15 07:38:42', '2024-12-15 13:08:42'),
('0ea203c27afb889a1268b7444369653be66d71ccd7daff5fb3d16de0e4822c1db4b26b4f862c9336', 159, 1, 'MyApp', '[]', 0, '2024-04-25 05:44:38', '2024-04-25 05:44:38', '2025-04-25 11:14:38'),
('0ee083824f119976dcfa76ef5d06732f30f0b8de1a314ba3d2e89c647fca268ef470a971e0bd0d02', 88, 1, 'MyApp', '[]', 0, '2024-02-16 06:46:42', '2024-02-16 06:46:42', '2025-02-16 12:16:42'),
('0ef7a89ac370af7262cc94ae88e0830eb0417bb0467e745db5977ec2a419f5772bedf19635d10128', 170, 1, 'MyApp', '[]', 0, '2024-03-30 08:18:57', '2024-03-30 08:18:57', '2025-03-30 13:48:57'),
('0f025bfead663ef2796b082ed6caa57c4f004d01af827b0eaa379cfaafa3b35a330201ea7fa3e34d', 4, 1, 'MyApp', '[]', 0, '2023-12-07 06:01:18', '2023-12-07 06:01:18', '2024-12-07 11:31:18'),
('0f3e30261aa795e5a6fca456fb6cf8ac938104a8670004bc684f4bbb1260ea30dbcb10847d5a6920', 53, 1, 'MyApp', '[]', 0, '2024-01-12 04:40:22', '2024-01-12 04:40:22', '2025-01-12 10:10:22'),
('0f4d4210273803c635dcbf2424e4be95c4b3c07c4b0cd2079af8f7215ec3951d13a49741dfd9760a', 129, 1, 'MyApp', '[]', 0, '2024-04-22 15:33:44', '2024-04-22 15:33:44', '2025-04-22 21:03:44'),
('0f58b56d9bc323aff879455ea30e5d14131e323cd99d00b65e23edc9011003e0a99f613540d45312', 12, 1, 'MyApp', '[]', 0, '2023-12-15 10:11:55', '2023-12-15 10:11:55', '2024-12-15 15:41:55'),
('0f7a7a658e8f3897d5d1ac70ea631297af56c5a01eb588396327805a1ba42a353716d8682b5af2c2', 159, 1, 'MyApp', '[]', 0, '2024-03-26 13:08:35', '2024-03-26 13:08:35', '2025-03-26 18:38:35'),
('1048d67bd59b58d6b7508dd7523ec759b204a6d9efde8cdef25178d24a2e0179b6a1810531b008ff', 59, 1, 'MyApp', '[]', 0, '2024-01-22 05:13:25', '2024-01-22 05:13:25', '2025-01-22 10:43:25'),
('10509788bddd4c055a16c2f6616312c3819a7bc1f275d75f56894edb8f1c3bf385d440ec148983c1', 81, 1, 'MyApp', '[]', 0, '2024-01-29 04:38:18', '2024-01-29 04:38:18', '2025-01-29 10:08:18'),
('1076be5378cd6ed4e141e96cd8e9350f7dd3fed9e3797b8dd524afcc789459ea3319de623de88940', 169, 1, 'MyApp', '[]', 0, '2024-03-30 07:46:17', '2024-03-30 07:46:17', '2025-03-30 13:16:17'),
('1085e1b1e22ade5aa6a769efd64ad1cb1c0a24de61608cdae1372c260bfb353370c89dbc269ccef9', 12, 1, 'MyApp', '[]', 0, '2023-12-15 13:25:34', '2023-12-15 13:25:34', '2024-12-15 18:55:34'),
('108a34cd09870d726ce89a570bf6e1bd2a22af9ca5d2f37d3393285107027902731c688851f4717f', 130, 1, 'MyApp', '[]', 0, '2024-04-21 05:27:21', '2024-04-21 05:27:21', '2025-04-21 10:57:21'),
('11093ec67bb4e4b2c744c5f4aeb8bcbfad38a2e849fbec24abd99b722992a7ad7da6fe1a35083365', 129, 1, 'MyApp', '[]', 0, '2024-04-23 10:28:27', '2024-04-23 10:28:27', '2025-04-23 15:58:27'),
('112049652d0c38bbc415f1fa64af833d0d9b8d68ea83e555208a3404ea90a333f37a5a08034a033e', 85, 1, 'MyApp', '[]', 0, '2024-02-02 05:38:03', '2024-02-02 05:38:03', '2025-02-02 11:08:03'),
('114c5a1b9957f2b576fdb555e81154f81209243e1560fea21ae5718af6840073591495b5f1cb14a3', 130, 1, 'MyApp', '[]', 0, '2024-04-21 10:02:31', '2024-04-21 10:02:31', '2025-04-21 15:32:31'),
('115955cf7625cd684f972072b47780db4c77811cb6620506c0b97bd20f49528ff975900ca08aed02', 172, 1, 'MyApp', '[]', 0, '2024-04-15 12:34:46', '2024-04-15 12:34:46', '2025-04-15 18:04:46'),
('11d8666387cea5c80ef943d8a5ccbe5dbd1ab7c0b090b7ea5071d1c784192627d166a674f47b48e5', 130, 1, 'MyApp', '[]', 0, '2024-03-06 14:09:47', '2024-03-06 14:09:47', '2025-03-06 19:39:47'),
('11e3676657d1cab53abc6f37019340afa7fc7cdca791977c6dbe7e0198afdcb7d4f9da9d22f1b677', 180, 1, 'MyApp', '[]', 0, '2024-04-02 17:53:20', '2024-04-02 17:53:20', '2025-04-02 23:23:20'),
('12169f075823f96f55746b851afdb2a56fe82ce41314bb136aa10aa936795535b835d8b5317526c8', 82, 1, 'MyApp', '[]', 0, '2024-01-24 11:34:05', '2024-01-24 11:34:05', '2025-01-24 17:04:05'),
('1250edce646156d04ac26f13a029bfeaa278f0f279b853abdca0e63db73c0b3860a49cddc5c383e1', 56, 1, 'MyApp', '[]', 0, '2024-02-07 05:48:46', '2024-02-07 05:48:46', '2025-02-07 11:18:46'),
('12793b715b0373d207767b84808a993f86898e4c28886a502b957555181b6eabab4d66dc1ff85325', 6, 1, 'MyApp', '[]', 0, '2023-12-15 10:25:23', '2023-12-15 10:25:23', '2024-12-15 15:55:23'),
('1281c8a2ddeb191ab3571bae462d96821bf6a1280705dbcbc0e35b44acee9f471d82a93cbe23f099', 172, 1, 'MyApp', '[]', 0, '2024-04-04 11:29:59', '2024-04-04 11:29:59', '2025-04-04 16:59:59'),
('1288abfeb9d732d200a9de1fa1a6bb4ba8b598d9193c454256fe5b66f125e2f93615f86145931c20', 59, 1, 'MyApp', '[]', 0, '2024-01-27 06:07:23', '2024-01-27 06:07:23', '2025-01-27 11:37:23'),
('129b7d158af0443452d120f9ff21478ff32fa83e7584e70c67c458b1c91afecf41689e87104abb64', 129, 1, 'MyApp', '[]', 0, '2024-04-20 08:01:01', '2024-04-20 08:01:01', '2025-04-20 13:31:01'),
('12a9083b1c5f351e6b3dff75dab1e77de98787ed435f7c1a238de828c2fda44534480fc739652b20', 56, 1, 'MyApp', '[]', 0, '2024-02-06 05:18:53', '2024-02-06 05:18:53', '2025-02-06 10:48:53'),
('12c078ebcb635084d69dbed0916dbd91cbb0fac8292a5401e8788835cd9ed3101cf9207252dc267f', 56, 1, 'MyApp', '[]', 0, '2024-02-06 06:29:49', '2024-02-06 06:29:49', '2025-02-06 11:59:49'),
('12e996f9c181ea9a830dafb796d01c900d9ca81a27700145116f169d6c9ebd79cdda0b5a2897909c', 126, 1, 'MyApp', '[]', 0, '2024-03-13 12:25:36', '2024-03-13 12:25:36', '2025-03-13 17:55:36'),
('1370a6b8b663bfd865f0a165b634f6a1ef4c89c538c1848e252b220309fde5b9d008b2d5bc461fef', 130, 1, 'MyApp', '[]', 0, '2024-03-19 17:52:55', '2024-03-19 17:52:55', '2025-03-19 23:22:55'),
('1376583220c00b2993a4865cfc318ec5a0d0379774e25b2bf7410588c34b5d55eb6a56f9238fc46d', 172, 1, 'MyApp', '[]', 0, '2024-03-31 03:30:07', '2024-03-31 03:30:07', '2025-03-31 09:00:07'),
('1478177728a45386e1629e8aade504ef33160aee501e78d0ee72b8a9a5aa72e375ffe234a40cd888', 57, 1, 'MyApp', '[]', 0, '2024-01-25 13:55:49', '2024-01-25 13:55:49', '2025-01-25 19:25:49'),
('148ae32d2c52379147c215402207010f186c21f5988892fa5b64ba752e0014d9e631dec2079fb895', 58, 1, 'MyApp', '[]', 0, '2024-01-22 05:02:58', '2024-01-22 05:02:58', '2025-01-22 10:32:58'),
('1497cacc0269c2c119dad529e116f8c23e0e21bda113b758f97be4245aa6d65bd478c333bdc61670', 59, 1, 'MyApp', '[]', 0, '2024-01-24 07:45:40', '2024-01-24 07:45:40', '2025-01-24 13:15:40'),
('14e01aad9907eaf67f442d9636a613522992dd4bedfeb97e904ec7b3d36be5f2ed09e7734bafd2ec', 150, 1, 'MyApp', '[]', 0, '2024-03-15 11:19:53', '2024-03-15 11:19:53', '2025-03-15 16:49:53'),
('153109ed6541124138bb0605de2c18cee6afd593f742bfad35fcbcab346d136e90917634ba8644de', 86, 1, 'MyApp', '[]', 0, '2024-02-02 12:45:28', '2024-02-02 12:45:28', '2025-02-02 18:15:28'),
('1548898e42ff0edd11677f124e5944e53c6a298f4a73b176e91549b2f370e4079b9a234ad4fc0807', 15, 1, 'MyApp', '[]', 0, '2023-12-14 18:29:42', '2023-12-14 18:29:42', '2024-12-14 23:59:42'),
('1551b5c14e4bd273ed4b9c4f62ac9038f63961a708de615a66ff118c4a1b86a47f7693021c4eda7d', 159, 1, 'MyApp', '[]', 0, '2024-04-08 01:58:42', '2024-04-08 01:58:42', '2025-04-08 07:28:42'),
('15cabf2b621e8266bb08434971b9a8444014887e41a26808526e7f2826d073b520913497ca10c793', 12, 1, 'MyApp', '[]', 0, '2023-12-15 10:32:28', '2023-12-15 10:32:28', '2024-12-15 16:02:28'),
('15d27c99b6ba3c7d422000e9ec600f702b64bcc244231517a05ec1f712cfbf79dfdd29b2b18dc05e', 91, 1, 'MyApp', '[]', 0, '2024-03-05 11:54:15', '2024-03-05 11:54:15', '2025-03-05 17:24:15'),
('160249bc52c2ed911c575ed66c4ac1ac6a66bfade3c0e4e9ff201fb7f9114ce83b44d2c566757a9e', 159, 1, 'MyApp', '[]', 0, '2024-04-08 21:56:48', '2024-04-08 21:56:48', '2025-04-09 03:26:48'),
('163be4477b33dd7f8e8e06d8a86d64183afca1d46ec0595829ea07f79693cf9a56dff1fe7e470580', 172, 1, 'MyApp', '[]', 0, '2024-04-20 03:07:23', '2024-04-20 03:07:23', '2025-04-20 08:37:23'),
('163caa1f317694dcb00a4ba90c90f2695d283a06d32b8353ffd66ec75e3fee7938ce8fef1a7b7417', 20, 1, 'MyApp', '[]', 0, '2023-12-19 07:08:06', '2023-12-19 07:08:06', '2024-12-19 12:38:06'),
('165b97b82144a6898faf2f9444a7875721a56813a65a67c9c237ce9bae1a62c74e9782e91eddf08f', 56, 1, 'MyApp', '[]', 0, '2024-01-23 10:45:16', '2024-01-23 10:45:16', '2025-01-23 16:15:16'),
('1685284957cf786601920f786a6976575eff033b9e5867d3912bd7649aea483b5cd8af2755d9586f', 128, 1, 'MyApp', '[]', 0, '2024-03-19 05:18:43', '2024-03-19 05:18:43', '2025-03-19 10:48:43'),
('16ab39529ec5870f3262b904dd0fa8f09e23515eb97dbf197cfae8e917c2c5548e64314b43200406', 11, 1, 'MyApp', '[]', 0, '2023-12-12 07:24:42', '2023-12-12 07:24:42', '2024-12-12 12:54:42'),
('16bf8e2ec2125253fa246a08bcd2c3c1006d923008a2a5879b1023bd5929fc3c3d0c70afc9b17fc1', 12, 1, 'MyApp', '[]', 0, '2023-12-13 04:56:53', '2023-12-13 04:56:53', '2024-12-13 10:26:53'),
('179c586804b4c96923964aea29534d23146508e4cabb6407e2d0cef5e167181c2e817bb40ab6beea', 56, 1, 'MyApp', '[]', 0, '2024-02-14 06:33:13', '2024-02-14 06:33:13', '2025-02-14 12:03:13'),
('17ca086150e0fc86bb83ee9070d898791ebfd22663062ee6efa324996729d27afc2d0dc0a78b5fb5', 6, 1, 'MyApp', '[]', 0, '2023-12-12 05:52:19', '2023-12-12 05:52:19', '2024-12-12 11:22:19'),
('17d82861be161579261da5507e447a4cd1700281d93c9bbc14fac5c31cbea03319087968b4e2d2d5', 129, 1, 'MyApp', '[]', 0, '2024-03-09 07:32:51', '2024-03-09 07:32:51', '2025-03-09 13:02:51'),
('180b8bb57419d340d4e9adc1f79342968ab167009676664a210777b4bdac43b46808dea78c6a77f0', 146, 1, 'MyApp', '[]', 0, '2024-04-22 06:19:55', '2024-04-22 06:19:55', '2025-04-22 11:49:55'),
('1855f4c6b8bb243846efdf68ae22a91edc3600b3cb3d6296572a23e55ca91c8981fcb7f1b3cda637', 117, 1, 'MyApp', '[]', 0, '2024-03-02 17:35:24', '2024-03-02 17:35:24', '2025-03-02 23:05:24'),
('185777e67fec5a00de647ce27ce231bdf18ff71e7837dbc815490f240efc9f005ae210064bd21c02', 93, 1, 'MyApp', '[]', 0, '2024-02-06 05:14:21', '2024-02-06 05:14:21', '2025-02-06 10:44:21'),
('18a8679ccb72480f52b13b0747e36a70d0514b37598e9255ba5e7092f86732b9306cd4e969cb45b6', 85, 1, 'MyApp', '[]', 0, '2024-02-05 09:16:56', '2024-02-05 09:16:56', '2025-02-05 14:46:56'),
('18bbbb9c0d213464ecd43ee4931e8edbe35422836a9e5596a073b7b3781e35f44b02b86ccc2d806b', 159, 1, 'MyApp', '[]', 0, '2024-03-26 13:24:59', '2024-03-26 13:24:59', '2025-03-26 18:54:59'),
('192f1eb3675ec5a8d7a93350a28f642bcd783c7e2f5e247437090f2f67270c49e69dc8c0a2a763cc', 128, 1, 'MyApp', '[]', 0, '2024-03-07 13:51:58', '2024-03-07 13:51:58', '2025-03-07 19:21:58'),
('1963fd10d43f67bc076934b437aaa9e4278554d61b90b2ed22fc41433d2dde10d0cab5c482b46c67', 6, 1, 'MyApp', '[]', 0, '2023-12-16 13:06:20', '2023-12-16 13:06:20', '2024-12-16 18:36:20'),
('198d29bc21ca181347000e27a95bcf3783a755ae124a916b60a0d39ce045c72e76df3134ee2d3721', 59, 1, 'MyApp', '[]', 0, '2024-01-27 05:07:45', '2024-01-27 05:07:45', '2025-01-27 10:37:45'),
('19ceb2faea23b238f705e525cf7e8318d1b9d18afd7c93243f675a2bfc01f286e573e289c7c47710', 11, 1, 'MyApp', '[]', 0, '2023-12-12 07:06:42', '2023-12-12 07:06:42', '2024-12-12 12:36:42'),
('19df47aa87e7341ad71126dee0e589cd7813bb9b40787ce1469e9061560d975137e61549e881dfda', 13, 1, 'MyApp', '[]', 0, '2023-12-12 12:01:28', '2023-12-12 12:01:28', '2024-12-12 17:31:28'),
('19ed96f94521ad64bfa178c8ccc3195df7e5ab5f1cb7006a2ea65b26201331f3eb961b010ddcf3eb', 71, 1, 'MyApp', '[]', 0, '2024-01-20 12:38:23', '2024-01-20 12:38:23', '2025-01-20 18:08:23'),
('19f767f62661c2d0fd21b9371fe6039279d601d3be9af65edb41c569383b7ffaa949e567477c1774', 129, 1, 'MyApp', '[]', 0, '2024-04-17 14:42:59', '2024-04-17 14:42:59', '2025-04-17 20:12:59'),
('1a056337ede1c9260b04155367a94d13e5f34fcee36955adfc3886328727eb847481f70ed3580203', 56, 1, 'MyApp', '[]', 0, '2024-02-02 04:29:44', '2024-02-02 04:29:44', '2025-02-02 09:59:44'),
('1a5e5128209b9c91aac1889ac80133cd5fb2d9181e7580efde817bc409a52451e60e6eb5a7320d7a', 52, 1, 'MyApp', '[]', 0, '2024-01-13 04:57:09', '2024-01-13 04:57:09', '2025-01-13 10:27:09'),
('1acae3b53bafcea5cd22a0e01a552719fc44d907b3bd65e8d9ec0baf09deaef5b3a14eb839e31c0e', 142, 1, 'MyApp', '[]', 0, '2024-03-09 09:02:45', '2024-03-09 09:02:45', '2025-03-09 14:32:45'),
('1b50b90807b24dee58977b00b0e482a0b1d365e6e15ffb80ae0f8be69b2d1dddcc2ad6221df5d4f8', 56, 1, 'MyApp', '[]', 0, '2024-02-01 05:11:09', '2024-02-01 05:11:09', '2025-02-01 10:41:09'),
('1b7cd8d1893785b4ed16abd905aceca5f24eaf7691b366f3405e12213e26d188c0a598486fbc07eb', 182, 1, 'MyApp', '[]', 0, '2024-04-20 03:08:41', '2024-04-20 03:08:41', '2025-04-20 08:38:41'),
('1b98deeab94fcbb3441e15f2564992fe45d708cba68a308d4e034bd08f3a0a6cc7927b0d6f281b6d', 60, 1, 'MyApp', '[]', 0, '2024-02-15 07:58:39', '2024-02-15 07:58:39', '2025-02-15 13:28:39'),
('1bd834934be8655e90a70a8cb812ed322c4bdca4ab0c68abd1169322c4ece70c90113a650500c6ad', 155, 1, 'MyApp', '[]', 0, '2024-04-18 12:51:58', '2024-04-18 12:51:58', '2025-04-18 18:21:58'),
('1c355a4b52e67f17f031b7d5a3d430389f1d6ca15688b5d5f7c3c3c6a004945800bff1a27daa91d4', 126, 1, 'MyApp', '[]', 0, '2024-03-08 07:47:53', '2024-03-08 07:47:53', '2025-03-08 13:17:53'),
('1c48f255f68192a8049e8f73e58f6f9ac69b69bbd2c8baf1fed880ca98144dd34e4b7888e371f182', 59, 1, 'MyApp', '[]', 0, '2024-01-25 13:56:04', '2024-01-25 13:56:04', '2025-01-25 19:26:04'),
('1c789d19793fff91cc4a0859a8a7a9c7399f0887679d53a614d8ae47b3d07a25b3cdabac9358c785', 40, 1, 'MyApp', '[]', 0, '2023-12-29 10:52:32', '2023-12-29 10:52:32', '2024-12-29 16:22:32'),
('1c995c6590a6444122ae26d8d189b33d2c7cc1b093f02581c13aeb86f90464ae3ca4bd11037dff27', 129, 1, 'MyApp', '[]', 0, '2024-03-08 08:14:00', '2024-03-08 08:14:00', '2025-03-08 13:44:00'),
('1cadf1ab43ebd48cbffa995b43f90871dd5eb1716c432d4e34cfc285d7224f13bf65bacac83b0a81', 52, 1, 'MyApp', '[]', 0, '2024-01-11 13:01:37', '2024-01-11 13:01:37', '2025-01-11 18:31:37'),
('1cc48f43c1c2902938662775d7d76c174b0b0a9717b2184585866d5b66870a5946bac69e597e7cec', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:25:08', '2023-12-11 06:25:08', '2024-12-11 11:55:08'),
('1ccd0268989dbf4bdfec232a5a14d9b950ed0ab5653f0cd48cd31f8c544750d38c6cb16ccedc81d5', 85, 1, 'MyApp', '[]', 0, '2024-02-06 06:00:29', '2024-02-06 06:00:29', '2025-02-06 11:30:29'),
('1ce584cb0861f8ea7d19e391aea417b07c25284f9facf2ef9c904e55a02007049666d2cc9b2ebe4f', 128, 1, 'MyApp', '[]', 0, '2024-03-09 13:17:35', '2024-03-09 13:17:35', '2025-03-09 18:47:35'),
('1d1ef4ac9ed13c7d6b608535e488062f60c82d25a557a4023bcb839ba1fd32eeff62a522b342dc03', 172, 1, 'MyApp', '[]', 0, '2024-04-20 07:59:35', '2024-04-20 07:59:35', '2025-04-20 13:29:35'),
('1d5676aa743237873d0c1a6e8e2e37033275015f2ab839ce5f06c4219e5b7d44493695fd4b4dba5a', 159, 1, 'MyApp', '[]', 0, '2024-04-17 21:42:20', '2024-04-17 21:42:20', '2025-04-18 03:12:20'),
('1d6940b00bbb302b43f52e9c6964eb138351c2986610cf7adfb928406002cdb44e3090d1258d497b', 135, 1, 'MyApp', '[]', 0, '2024-03-08 05:30:54', '2024-03-08 05:30:54', '2025-03-08 11:00:54'),
('1d77f3e07ddcef33f8361fa29ed1dcca8c337721700ab287b5a6acbd4f7131d76420419ad19a42f2', 126, 1, 'MyApp', '[]', 0, '2024-04-23 07:08:59', '2024-04-23 07:08:59', '2025-04-23 12:38:59'),
('1e77ab955a3f6cdd93b3fa99f8095ac1d7104687868675cecae459effa2f69d0b560f210418b8157', 46, 1, 'MyApp', '[]', 0, '2023-12-29 11:47:43', '2023-12-29 11:47:43', '2024-12-29 17:17:43'),
('1ed10b2ca98280dd9d3508253fcd91e3e1c948d937a2c3e0a1479e1ad5b80c1c5b62d2c3a043e66c', 31, 1, 'MyApp', '[]', 0, '2023-12-22 07:07:47', '2023-12-22 07:07:47', '2024-12-22 12:37:47'),
('1ee938d0403e066d461e7b5e9c415bb30e1a6acabf108093cb4793bbad4f0e6c85296f6fb577b6b5', 57, 1, 'MyApp', '[]', 0, '2024-01-22 04:54:45', '2024-01-22 04:54:45', '2025-01-22 10:24:45'),
('1ef08836486ff25c1e7dc2e129d40563b2a7ddcd53717ddb01e9434b82e3f27e5ebb3859a9650d18', 1, 1, 'MyApp', '[]', 0, '2024-03-12 11:20:25', '2024-03-12 11:20:25', '2025-03-12 16:50:25'),
('1f221ecd400d1ed86c96d9e9d60a6d0a484a599acced0bcb59cc91652fd84300da3de8bacff786c4', 12, 1, 'MyApp', '[]', 0, '2023-12-14 15:10:17', '2023-12-14 15:10:17', '2024-12-14 20:40:17'),
('1fc16099e175c8669c2f6180552080af5ae78ac367b04779fdf099e316f78bb434ee609510090dba', 85, 1, 'MyApp', '[]', 0, '2024-02-06 07:24:12', '2024-02-06 07:24:12', '2025-02-06 12:54:12'),
('20103b835a2ca8e64c188ecb6e369bcd7c03be332d5c84b01871404bc735f9bd24726806dc7f705d', 172, 1, 'MyApp', '[]', 0, '2024-04-21 05:29:26', '2024-04-21 05:29:26', '2025-04-21 10:59:26'),
('201b0dff34d3fab51d6aa834a6a7138e60691fab538ac7f9848b9320dd26b521b9fc98ee2455a73b', 126, 1, 'MyApp', '[]', 0, '2024-04-23 06:25:45', '2024-04-23 06:25:45', '2025-04-23 11:55:45'),
('2031907b37bf65e451decf235ad13e440c939558d1014c4bd53df9ac0864526648b819d0d671b3ea', 41, 1, 'MyApp', '[]', 0, '2023-12-29 04:52:23', '2023-12-29 04:52:23', '2024-12-29 10:22:23'),
('205b303c42779389ecc470b1bbaa6d67c6e773d942d0649f939f87356a93463223e9cb0f0209e341', 3, 1, 'MyApp', '[]', 0, '2024-01-08 05:33:51', '2024-01-08 05:33:51', '2025-01-08 11:03:51'),
('215361eb3bccaad2d835e1f95c86a756e221c44d9312f383cda4b4410051cca400cd9d0400c7ac16', 155, 1, 'MyApp', '[]', 0, '2024-04-17 12:45:58', '2024-04-17 12:45:58', '2025-04-17 18:15:58'),
('218e2efe8364e69a4789a5ea04035ffb23eb06b4fcfdcd399d8d785144d4f00d4582413198b0d427', 182, 1, 'MyApp', '[]', 0, '2024-04-17 07:55:51', '2024-04-17 07:55:51', '2025-04-17 13:25:51'),
('21c382a54df85e6bbf82f7d38f8598b2ed37ffaca93c187f62a473c9ff96f6950e9bf9ea495c19e1', 46, 1, 'MyApp', '[]', 0, '2023-12-29 12:15:17', '2023-12-29 12:15:17', '2024-12-29 17:45:17'),
('2259b66cffdb1024f336347d3e385ee5f5d3f77e551757eec7c9bcb3e811748105b38aa65ddde756', 56, 1, 'MyApp', '[]', 0, '2024-02-07 05:22:48', '2024-02-07 05:22:48', '2025-02-07 10:52:48'),
('228a42cc028da6f65dc7e2439c31dff70a70c57bff0f3b71856d0a99253b2953e532c44564a05d8b', 44, 1, 'MyApp', '[]', 0, '2023-12-29 04:53:11', '2023-12-29 04:53:11', '2024-12-29 10:23:11'),
('229ac1a2f7a9a078b8d5281cd9b0d8b0cd5e4cba922ba23b0a93e6a342e9bc31a7a04b35f3f33c85', 158, 1, 'MyApp', '[]', 0, '2024-03-22 02:05:43', '2024-03-22 02:05:43', '2025-03-22 07:35:43'),
('22ebea666d4ef0c9dcf7f38a7556ec5a1f2e36877ccf06300310b4600aaa90fb35478faf509841db', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:26:24', '2023-12-11 06:26:24', '2024-12-11 11:56:24'),
('22f46143432dd6a68dfeda7a26d614742631c63e075496fd585f494ee78382212522c2208083cd7c', 11, 1, 'MyApp', '[]', 0, '2023-12-11 12:16:34', '2023-12-11 12:16:34', '2024-12-11 17:46:34'),
('242df30a3345465d2b0ab69f0038606cc380081100107d2b3f583eb42104e5f61b5e4ae17fd9729e', 182, 1, 'MyApp', '[]', 0, '2024-04-09 04:51:26', '2024-04-09 04:51:26', '2025-04-09 10:21:26'),
('2469359bf9300de2f5344db67f7e02d49e14e3b29529eae28fa78f9d18103f66c0cce227ba015fb7', 172, 1, 'MyApp', '[]', 0, '2024-04-11 17:28:49', '2024-04-11 17:28:49', '2025-04-11 22:58:49'),
('2539b5974ec78d901eebd80a0620aa079f87ff14a0fe1046b54e62aebecfb69156dbfe04990e2216', 11, 1, 'MyApp', '[]', 0, '2023-12-12 07:01:20', '2023-12-12 07:01:20', '2024-12-12 12:31:20'),
('25729491c69c4464c2e6b87a41337bd43e94291d75f666970c9a7c2d85c0efd861e3051d7a98ccfa', 129, 1, 'MyApp', '[]', 0, '2024-03-14 16:38:01', '2024-03-14 16:38:01', '2025-03-14 22:08:01'),
('25773eb181b7392aa455e1072de5c6d47003fd9ebc8a1f4cb4ea36a942c0aeebefc40e0687d14dfb', 12, 1, 'MyApp', '[]', 0, '2023-12-28 06:58:15', '2023-12-28 06:58:15', '2024-12-28 12:28:15'),
('258f85fc5caf18c06b276619f2ea15914af14245b1e94b51da0c12f75e3ce4a2bb586dff6a3b0379', 6, 1, 'MyApp', '[]', 0, '2023-12-12 06:50:09', '2023-12-12 06:50:09', '2024-12-12 12:20:09'),
('25951552645ad883c8418640e0bf2d7f3a4198d0e9380a7a5c4aaf19722beaaf216696466c212a19', 31, 1, 'MyApp', '[]', 0, '2023-12-22 07:08:28', '2023-12-22 07:08:28', '2024-12-22 12:38:28'),
('25acb4129438b1504a82b33006ae12db38b2a4298966f1ce7c7c52279904f2f0eb38265bdfdb1922', 85, 1, 'MyApp', '[]', 0, '2024-03-05 10:08:55', '2024-03-05 10:08:55', '2025-03-05 15:38:55'),
('25fcd6d9ab4c73901278a8f1002710e76f1668fc1e91b56bf9f297cf8c9926e076b1e06b59385334', 126, 1, 'MyApp', '[]', 0, '2024-03-13 06:26:10', '2024-03-13 06:26:10', '2025-03-13 11:56:10'),
('265b7cf7ec45ae34a595d967f8cab739ff8ad37f047b664ab33432c8bab4b96312fef8f7ab929197', 6, 1, 'MyApp', '[]', 0, '2023-12-12 12:06:08', '2023-12-12 12:06:08', '2024-12-12 17:36:08'),
('267e151b2893a8226dd8dbf592816c8278b699b4e191653a3668cda001b524b5c351162521b33c22', 59, 1, 'MyApp', '[]', 0, '2024-02-15 07:57:56', '2024-02-15 07:57:56', '2025-02-15 13:27:56'),
('2743258bc5a17e48399a0ae9f8df349e654a9b19f9eac10c7fb4bc478f07e8bebad4e23113ecaaa3', 11, 1, 'MyApp', '[]', 0, '2023-12-12 07:02:21', '2023-12-12 07:02:21', '2024-12-12 12:32:21'),
('283169e371b9cf16b032393b9557c033acb08bc24314084de87d654b66c2c2a86680f081d50ee7a4', 29, 1, 'MyApp', '[]', 0, '2023-12-18 06:59:35', '2023-12-18 06:59:35', '2024-12-18 12:29:35'),
('285ba45fc4a5ccc17a6dc14f6714c50c2a057f56c48397e7dbea2d53742f25501d09c997823d5895', 140, 1, 'MyApp', '[]', 0, '2024-03-08 05:42:22', '2024-03-08 05:42:22', '2025-03-08 11:12:22'),
('2861c3b43edae466ea8765f044fd6944fc47deefa5f24f10754f51d1e1f37ec2a4e966686dc025b4', 59, 1, 'MyApp', '[]', 0, '2024-01-22 05:03:39', '2024-01-22 05:03:39', '2025-01-22 10:33:39'),
('28e74a82305cfce5f465db5b4bee1169d66195c1ac5882ad33666c2645d5e7904f47ef6c62a6c20a', 22, 1, 'MyApp', '[]', 0, '2023-12-15 07:50:06', '2023-12-15 07:50:06', '2024-12-15 13:20:06'),
('290ca8d23d5aeb2ebe84b6fdf8c7afde59102c092613c188557eafabb2843ba89a6ffb0808247c9a', 80, 1, 'MyApp', '[]', 0, '2024-02-03 04:31:10', '2024-02-03 04:31:10', '2025-02-03 10:01:10'),
('292309fae4857fe08688078bb2dfa3fc7f29962a5be15c74d003a4efa218ba578d3abc31d3fde17b', 8, 1, 'MyApp', '[]', 0, '2023-12-11 05:45:52', '2023-12-11 05:45:52', '2024-12-11 11:15:52'),
('2a38439093de9aa82c087170fb6c77f7ff7f1823c4d470f8f8b200f6ef8d1c5e59b3be6ccd65002d', 12, 1, 'MyApp', '[]', 0, '2023-12-22 06:45:17', '2023-12-22 06:45:17', '2024-12-22 12:15:17'),
('2a42739b116e44d3466b02abf28c5d47437af2f1a47c0ecc10cd70a2cce04bf8f56f4ed89cba1c36', 159, 1, 'MyApp', '[]', 0, '2024-04-10 13:07:26', '2024-04-10 13:07:26', '2025-04-10 18:37:26'),
('2aa1d1ea1040e862aa1349572ae9baa239036d17b46949bd48da70d8a1a37024a5a065e870ab1609', 159, 1, 'MyApp', '[]', 0, '2024-04-18 14:38:21', '2024-04-18 14:38:21', '2025-04-18 20:08:21'),
('2af73c95764837bc0039d3f5a68eb36fc4426f17b762ddd6fbe5fc3b17dbd11bd72ddc459d882598', 128, 1, 'MyApp', '[]', 0, '2024-03-08 04:24:58', '2024-03-08 04:24:58', '2025-03-08 09:54:58'),
('2af7ebff415dcdc88b9fce9aa2c7d978d705da0dca14325c83a91053c1cac7b5d017e36691792a85', 80, 1, 'MyApp', '[]', 0, '2024-01-25 09:53:50', '2024-01-25 09:53:50', '2025-01-25 15:23:50'),
('2b2188532826d2009cca323ade6f75bafc5c281d02bd0a53526ca74e2b4c940ca4635bd5fd1650b7', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:24:01', '2023-12-11 06:24:01', '2024-12-11 11:54:01'),
('2bc11e75799412eb403bae6288149f581578aece5b1df0780230af0ded6c2d9a18b5cf1638a54668', 81, 1, 'MyApp', '[]', 0, '2024-02-01 05:55:33', '2024-02-01 05:55:33', '2025-02-01 11:25:33'),
('2c6b76fe13fb9750d1ed1365a5163972cb6448c66c989687d11be70d9fdd78b3e445020002869c37', 85, 1, 'MyApp', '[]', 0, '2024-02-29 10:49:47', '2024-02-29 10:49:47', '2025-03-01 16:19:47'),
('2d4ed6999f430f52d2da184c9cf683bdf4dc260c71f586ad23c164645c921b89debd3fd03379d963', 42, 1, 'MyApp', '[]', 0, '2023-12-29 04:52:40', '2023-12-29 04:52:40', '2024-12-29 10:22:40'),
('2d51a7b15aaa0e70f3da0c95603584b7dbf031fc438d829b7e754a91962e6c56c3426272fe6b8808', 159, 1, 'MyApp', '[]', 0, '2024-04-18 07:55:12', '2024-04-18 07:55:12', '2025-04-18 13:25:12'),
('2d6b570aa344d3042c60202e9a6934858c15acff4a01eb778dc5270a8c1f7442cc1b7cf3c3b4b579', 130, 1, 'MyApp', '[]', 0, '2024-03-17 02:29:35', '2024-03-17 02:29:35', '2025-03-17 07:59:35'),
('2d7fc5b1cb25b9c7c24474b0ea182c73d3f8d966737567562c9d646911dfd2c5d953713d37c303b4', 16, 1, 'MyApp', '[]', 0, '2023-12-14 18:31:24', '2023-12-14 18:31:24', '2024-12-15 00:01:24'),
('2dea124810434c5ad799d5489efd5327738478956fb7e4ca1adad4b063d7f39a57765b27cde76862', 160, 1, 'MyApp', '[]', 0, '2024-03-28 17:40:16', '2024-03-28 17:40:16', '2025-03-28 23:10:16'),
('2e94f0912408d5c0d291867787d05a0db349785a75cf0f15d34bf0ebc1430ecef1fa9973349e4881', 56, 1, 'MyApp', '[]', 0, '2024-02-03 05:36:26', '2024-02-03 05:36:26', '2025-02-03 11:06:26'),
('2f1e9142874eb57a8cc775ce788da4d29d3500349ab6eec26ba4bbedc426026cee686ab7b6f46254', 56, 1, 'MyApp', '[]', 0, '2024-02-05 06:11:38', '2024-02-05 06:11:38', '2025-02-05 11:41:38'),
('2f2d5c43f317273fa183e86f629d87a83874e13e1290bdf983a77118c0f4fa1a8fb5801d69f1675e', 96, 1, 'MyApp', '[]', 0, '2024-02-06 08:40:44', '2024-02-06 08:40:44', '2025-02-06 14:10:44'),
('2f653c4bce5359891f0fbfc1b40a0c2498be24677aa6019eea34dccb8411253455ad28b7395bacc6', 128, 1, 'MyApp', '[]', 0, '2024-03-15 12:30:36', '2024-03-15 12:30:36', '2025-03-15 18:00:36'),
('2f93a4a12a659e14aeed09836bdad8c9f0dbbde364331f032db80064d018f644c47bf1129d3a8314', 80, 1, 'MyApp', '[]', 0, '2024-03-02 06:08:32', '2024-03-02 06:08:32', '2025-03-02 11:38:32'),
('2fda279d7fc7eb3fcb65632d741f122163d9cbc96f8634ca6379367e1cb5b115042785eee4f01ff6', 12, 1, 'MyApp', '[]', 0, '2023-12-29 12:18:10', '2023-12-29 12:18:10', '2024-12-29 17:48:10'),
('2fee960f5d127dd6ea404b9700c646d46b8ceaf274700cb7e23738b9d8185462b4cbae9ae0bfbb0a', 159, 1, 'MyApp', '[]', 0, '2024-04-05 01:52:59', '2024-04-05 01:52:59', '2025-04-05 07:22:59'),
('30146cbde102200b9bf604661ce62eb9da28de7308a8f90570b45cce35626205a6f799f6ec156ae2', 59, 1, 'MyApp', '[]', 0, '2024-01-27 04:20:56', '2024-01-27 04:20:56', '2025-01-27 09:50:56'),
('3077d7aca32129622af578df203c39a81f067933a3a54af22e21068377080ef25be0256e6586aaa9', 159, 1, 'MyApp', '[]', 0, '2024-04-13 14:54:59', '2024-04-13 14:54:59', '2025-04-13 20:24:59'),
('3102d96e584ede2d2d32d38c8e3fd78bfb8bed6cad4d207007e45fe74f98f98447bd2dc6cb11efc4', 12, 1, 'MyApp', '[]', 0, '2023-12-15 11:25:52', '2023-12-15 11:25:52', '2024-12-15 16:55:52'),
('31254794b618d94ce06de4f9d1620104812fd2c4f703cf3eedfa904f6ce16f16a114e8c153ad4024', 60, 1, 'MyApp', '[]', 0, '2024-02-26 06:37:21', '2024-02-26 06:37:21', '2025-02-26 12:07:21'),
('3194b9a2d6d19e3582a91458205535380e5c8db6f0b12701d6a878afab52f72ce10b2556e69096e3', 12, 1, 'MyApp', '[]', 0, '2023-12-12 05:04:48', '2023-12-12 05:04:48', '2024-12-12 10:34:48'),
('31abe8fd3f0ef1c8b9d1f75925166bfee7cfdd4b280ff8fc6b33b6b6dfd07cada39db3776fe860e7', 155, 1, 'MyApp', '[]', 0, '2024-03-19 06:18:25', '2024-03-19 06:18:25', '2025-03-19 11:48:25'),
('322d816fd5f8fb3f358dbd900cb0ebe13710cd3f7dc7146c7a74d0efa4c45171a4c3a10147ad65c4', 88, 1, 'MyApp', '[]', 0, '2024-03-03 13:19:48', '2024-03-03 13:19:48', '2025-03-03 18:49:48'),
('325d99a7ce0b8d29ada2b43917d3c132743a59a6778e5c7a4bef3232611569f2a06d8cfffdff6c1f', 130, 1, 'MyApp', '[]', 0, '2024-04-20 08:00:38', '2024-04-20 08:00:38', '2025-04-20 13:30:38'),
('327fb3d47229205781edb53785d7f3a208993682d17a6b8d6b9d7f5bfe52c16b2e6a232fbbe5eaaf', 172, 1, 'MyApp', '[]', 0, '2024-04-12 06:13:47', '2024-04-12 06:13:47', '2025-04-12 11:43:47'),
('3285dccfb03b30d0dc3dc109a93523f2274f8a46f59d3ba7fb60be7a693bca5c387ca1337fbe7ab3', 12, 1, 'MyApp', '[]', 0, '2023-12-24 08:55:46', '2023-12-24 08:55:46', '2024-12-24 14:25:46'),
('32953ca29266f9d7454e2978526b1ce3644c3ee8d2d30e7478338bf901aea14ae9c751342a811f29', 172, 1, 'MyApp', '[]', 0, '2024-03-30 16:28:33', '2024-03-30 16:28:33', '2025-03-30 21:58:33'),
('329621e848930b86a05dfa0839aba38cdab86a565777d32850b1cc59247ec4f8c672e75f60909cb3', 59, 1, 'MyApp', '[]', 0, '2024-01-30 05:48:16', '2024-01-30 05:48:16', '2025-01-30 11:18:16'),
('32a4b46df79c535204816cc589d26601b84decf2086c95022e65b0dd22e4503dae7d643e4c253c63', 159, 1, 'MyApp', '[]', 0, '2024-03-31 11:02:22', '2024-03-31 11:02:22', '2025-03-31 16:32:22'),
('32f293e5c8c436f59dd6e84600d5f5a1948aa03952abb53ae94d5bef2db0665b605ef4ee1c0ec3d5', 56, 1, 'MyApp', '[]', 0, '2024-01-22 04:48:49', '2024-01-22 04:48:49', '2025-01-22 10:18:49'),
('33c20239cbc3f069af056c6ad91e269f6b4038cfe7aec7517201eee15691a30b0729d42f62d25972', 159, 1, 'MyApp', '[]', 0, '2024-04-10 12:45:34', '2024-04-10 12:45:34', '2025-04-10 18:15:34'),
('33fd72f873fc90519f92697300da37171281236886fb8eabc2f8567acc5171870436028d31627cd3', 128, 1, 'MyApp', '[]', 0, '2024-03-07 09:14:50', '2024-03-07 09:14:50', '2025-03-07 14:44:50'),
('341f90bcae9567bcce7d4c5c6e80eee35fa0a934d0879b06f2ad8c45bdc381eb3fa1f5010a884431', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:22:27', '2023-12-11 06:22:27', '2024-12-11 11:52:27'),
('3421abf2ace0a948cf1126681d6ec1cfebe968a63ef0155c7e01e26902dbe67547b34b65bd158375', 76, 1, 'MyApp', '[]', 0, '2024-03-03 13:20:11', '2024-03-03 13:20:11', '2025-03-03 18:50:11'),
('343c2370fe7c80ce2ad6f264b72cfe4e0481b9bf2393e5e0e6647b515e4a6fb152b358552450ddfe', 129, 1, 'MyApp', '[]', 0, '2024-03-15 11:46:45', '2024-03-15 11:46:45', '2025-03-15 17:16:45'),
('345fab1e49a415109a9c0ce1fb2bd558edc0a5f9955a27e2e6437790618080c872d394d08b8a04d9', 12, 1, 'MyApp', '[]', 0, '2023-12-15 10:56:54', '2023-12-15 10:56:54', '2024-12-15 16:26:54'),
('3471e2b706cd3e3994103536b8671d46c67db803e6993f4f060568b4a6ffaa708cd8156378958d5e', 80, 1, 'MyApp', '[]', 0, '2024-03-02 06:32:22', '2024-03-02 06:32:22', '2025-03-02 12:02:22'),
('34aead55e24d6b7068603723ed592758018a5f1cd8b5af4b186a69c3d14143a4cd50d82836dad8fb', 146, 1, 'MyApp', '[]', 0, '2024-03-15 12:58:57', '2024-03-15 12:58:57', '2025-03-15 18:28:57'),
('34bf8e86249aa149f88db8d7371628a671183ef291fab257a0b5a561a2f8099a1e28e7beb48ef436', 84, 1, 'MyApp', '[]', 0, '2024-01-27 05:39:41', '2024-01-27 05:39:41', '2025-01-27 11:09:41'),
('34fe388575d282156d838b7c5b3bf07e5e72b2958ed12232d6b656333e2b67fd76a5e7063e986584', 132, 1, 'MyApp', '[]', 0, '2024-03-08 05:30:03', '2024-03-08 05:30:03', '2025-03-08 11:00:03'),
('3536db1c2f47c17d35990013f3207c487bbd87cd57cb51c8623b810c313323cef0105f5284707c4f', 159, 1, 'MyApp', '[]', 0, '2024-04-01 18:58:08', '2024-04-01 18:58:08', '2025-04-02 00:28:08'),
('3564abbb5bed557feb2fd3be7602c9837d287cdad107db66e2d3b15f7f8707e145ffe0b1565b6195', 12, 1, 'MyApp', '[]', 0, '2023-12-15 10:53:34', '2023-12-15 10:53:34', '2024-12-15 16:23:34'),
('3571ded324ffc0f8c35dfc098324c39804abcec2cadf7adc95572ff3fd7d67fe149a7595868f8533', 20, 1, 'MyApp', '[]', 0, '2023-12-15 07:39:09', '2023-12-15 07:39:09', '2024-12-15 13:09:09'),
('35c99b6400b56c54085446b96a808bb2a141e568371b2ef68807f8b11be6c1c26de08fc4c1482459', 12, 1, 'MyApp', '[]', 0, '2023-12-18 13:06:57', '2023-12-18 13:06:57', '2024-12-18 18:36:57'),
('35d2837d4f93f44d7443997a36e13a33d27051224c5549ae2958cb7b720fd189954ca7c34e27e858', 57, 1, 'MyApp', '[]', 0, '2024-01-31 05:51:31', '2024-01-31 05:51:31', '2025-01-31 11:21:31'),
('366a00b226023aae6ea47da34dcf90780cbbfc3468585d7da86aa99b76299ee0b21b8bfaefb120bb', 53, 1, 'MyApp', '[]', 0, '2024-01-12 04:48:42', '2024-01-12 04:48:42', '2025-01-12 10:18:42'),
('3769151cb354ef7cb870e0c74726bb2226580d355b695fbf9a7261767c73d62a448f98f59699bf32', 182, 1, 'MyApp', '[]', 0, '2024-04-15 12:31:18', '2024-04-15 12:31:18', '2025-04-15 18:01:18'),
('377eb68d9150ce3235ed3c6887f7e33bc5055724ec7bb4ee1f80d1eb9118520d34385ee76fe87002', 159, 1, 'MyApp', '[]', 0, '2024-04-25 05:41:51', '2024-04-25 05:41:51', '2025-04-25 11:11:51'),
('39203ee8c83dc06168314e26ba476e7c202bc26afed0b4e7d9e30e74dcb389f6d4be204988a52c77', 159, 1, 'MyApp', '[]', 0, '2024-04-17 11:02:20', '2024-04-17 11:02:20', '2025-04-17 16:32:20'),
('399fb0044555b82ff236f3c6e2121e663983559c5aaf39e55a02fc182b1de73ccdb4a037592b0383', 56, 1, 'MyApp', '[]', 0, '2024-02-10 17:31:48', '2024-02-10 17:31:48', '2025-02-10 23:01:48'),
('3abd439f712b569250c9436551de04e7d8e28a10ee8b1753393861edd68381cb70e08fe91ece0a21', 5, 1, 'MyApp', '[]', 0, '2024-01-11 05:25:46', '2024-01-11 05:25:46', '2025-01-11 10:55:46'),
('3ba9b90141598cf645f699c99cf6a18a4bb7cb742751417ded1a01193f60c3c0100b348477fdc7c1', 59, 1, 'MyApp', '[]', 0, '2024-01-31 12:15:53', '2024-01-31 12:15:53', '2025-01-31 17:45:53'),
('3c27c974e8dccc1e882d2615f0c998cb392061f9f4e55d84eb05ac3aee55ec706520b5aba6cfaf15', 56, 1, 'MyApp', '[]', 0, '2024-02-01 14:01:46', '2024-02-01 14:01:46', '2025-02-01 19:31:46'),
('3c5af13a554e52c2103acaebc5285099a74405fb7c0cc099bf4b5ba89a05c80c3d8441706ca83253', 59, 1, 'MyApp', '[]', 0, '2024-01-27 05:11:56', '2024-01-27 05:11:56', '2025-01-27 10:41:56'),
('3c63756e89ee8c5e2568eb7cafa443f201df922454e5aca9116e70e963ce78c60022392663f52a4b', 6, 1, 'MyApp', '[]', 0, '2023-12-12 07:06:57', '2023-12-12 07:06:57', '2024-12-12 12:36:57'),
('3c801c2b78e04ee66edbf096b36d389f3f9a42e3ef729ae8dfe1a7412f6732da6139c73a8ea7cc3c', 35, 1, 'MyApp', '[]', 0, '2023-12-22 06:43:40', '2023-12-22 06:43:40', '2024-12-22 12:13:40'),
('3c9f7b5d7a80c32839c964017552d6011626290922fd8ddcfe7e35d96c628dce608ccb883358b61f', 6, 1, 'MyApp', '[]', 0, '2023-12-21 05:33:51', '2023-12-21 05:33:51', '2024-12-21 11:03:51'),
('3cf74ec958640c84ff68659c3b536c1d0e2b92618edd0d7470753f556133196a5658b24b96e11321', 76, 1, 'MyApp', '[]', 0, '2024-01-24 08:58:56', '2024-01-24 08:58:56', '2025-01-24 14:28:56'),
('3d60e6195702d4ff2c98da5d0cf1bc56686b589598be41693b6d715c64496c04771672497fa1c7b9', 53, 1, 'MyApp', '[]', 0, '2024-01-12 05:54:11', '2024-01-12 05:54:11', '2025-01-12 11:24:11'),
('3dd2f2387dacd30576872e7a71e889846f10f0e9b2ef22022385b8bb65260b36157d5af74a2db596', 11, 1, 'MyApp', '[]', 0, '2023-12-11 12:10:20', '2023-12-11 12:10:20', '2024-12-11 17:40:20'),
('3de5c4964daca0bc812fa771a8038266889eb565715db855b8925e3ea8575043ea12515176dbaaaf', 129, 1, 'MyApp', '[]', 0, '2024-03-07 05:16:41', '2024-03-07 05:16:41', '2025-03-07 10:46:41'),
('3dea9ad012916713bcbdd1dc0306cbe11612e023a495393a8ef1ceec8d7660228aac71fa8b9dfdae', 56, 1, 'MyApp', '[]', 0, '2024-02-06 08:49:39', '2024-02-06 08:49:39', '2025-02-06 14:19:39'),
('3df2fa4cf657dae092f427633154f59a38569677876d70fa58bec41b6d7580470183fedf8145d492', 9, 1, 'MyApp', '[]', 0, '2023-12-12 04:42:10', '2023-12-12 04:42:10', '2024-12-12 10:12:10'),
('3dff1bebd5bf6a0d5e0034c639e65127c35c9c64e64c6e4183fdb4c3418c779d9bd09c306e1b0630', 170, 1, 'MyApp', '[]', 0, '2024-03-30 08:16:35', '2024-03-30 08:16:35', '2025-03-30 13:46:35'),
('3e74cb7d4d90880071f6a1b51b9d9cab1f43fb267883c729a71482fe176b683d5547b6fc9867ac52', 11, 1, 'MyApp', '[]', 0, '2023-12-11 12:25:28', '2023-12-11 12:25:28', '2024-12-11 17:55:28'),
('3e8fe76863e59fd1ac24e1b4e75131f0cbb84c3ca6c7369edf2233e47f6023ae4c18d2114bc431a6', 130, 1, 'MyApp', '[]', 0, '2024-03-06 08:24:57', '2024-03-06 08:24:57', '2025-03-06 13:54:57'),
('3ec8fd8e065d9590bae4dabefb0ba2b235180d47f7b690558482a6218a58a44169ee71307a5c0274', 129, 1, 'MyApp', '[]', 0, '2024-04-21 06:58:34', '2024-04-21 06:58:34', '2025-04-21 12:28:34'),
('3ef4075fda58475561ffe6d5882ceb0dda1012c328fd230ef23340374973f2417fba67bddc6e8669', 24, 1, 'MyApp', '[]', 0, '2023-12-29 11:25:47', '2023-12-29 11:25:47', '2024-12-29 16:55:47'),
('3f877272e26df300e8e746982d30f14ab643e846b45ac23002ee12507bf901e0d53935542e8c53e7', 89, 1, 'MyApp', '[]', 0, '2024-02-03 08:02:44', '2024-02-03 08:02:44', '2025-02-03 13:32:44'),
('3f87f5d3d973fc00e70eb94b039807a278a8a75b79c6f7977edff5fc083d6a9c2b060372156a8c7e', 157, 1, 'MyApp', '[]', 0, '2024-03-21 05:33:53', '2024-03-21 05:33:53', '2025-03-21 11:03:53'),
('3fa70d2a2ae1f8ae96cca4cfe22da55aa3785c02a2772df3816f2606979eeecc5c127f1eb31fa174', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:22:39', '2023-12-11 06:22:39', '2024-12-11 11:52:39'),
('3fab88dd72045e8a1120e1deeb63194d644e3cf0ff6fd03906bffc71f9bac673c29bc2463373daef', 146, 1, 'MyApp', '[]', 0, '2024-03-19 07:38:03', '2024-03-19 07:38:03', '2025-03-19 13:08:03'),
('3fc32b2d6c2f31523cb8561d8c5f83b03b994f732a1e9488e47ca5ff8f215424165bcd4538bc467d', 126, 1, 'MyApp', '[]', 0, '2024-04-23 04:56:20', '2024-04-23 04:56:20', '2025-04-23 10:26:20'),
('3fd3f7a109c3bb8bbdcef45878f9a5904d17719a0dcf5611b9a459b7da17f503e54017b2a0687745', 11, 1, 'MyApp', '[]', 0, '2023-12-12 07:01:24', '2023-12-12 07:01:24', '2024-12-12 12:31:24'),
('40392f9e2113fd1ae714bd8acdeda5e6378756f808eb55e8508d8617a5879c5ca55980d49929c6a5', 56, 1, 'MyApp', '[]', 0, '2024-01-23 08:56:37', '2024-01-23 08:56:37', '2025-01-23 14:26:37'),
('4077b57cad0028b2a0fb8169537e4265bfb2eded96d322a8ff4ab1d282bed726a35f50f248da4a91', 59, 1, 'MyApp', '[]', 0, '2024-01-23 12:30:06', '2024-01-23 12:30:06', '2025-01-23 18:00:06'),
('40b2e9342302faf45ff973896734ebcee1a62f312485ef87726af1aa19528b2adc5c8f735ce8d5e5', 56, 1, 'MyApp', '[]', 0, '2024-01-24 11:12:20', '2024-01-24 11:12:20', '2025-01-24 16:42:20'),
('40fd90336800ac87828b1cf1cc48129defef106310b3665183f11cb6542071f03d41479d239ec8e1', 85, 1, 'MyApp', '[]', 0, '2024-02-05 14:48:54', '2024-02-05 14:48:54', '2025-02-05 20:18:54'),
('4101ea9d558bdb0a1640dbd2c881faa3e76f996be83553375ea944a2bfed55f3ab537c6fbd60f631', 129, 1, 'MyApp', '[]', 0, '2024-04-20 08:00:11', '2024-04-20 08:00:11', '2025-04-20 13:30:11'),
('4119bb009b9fbd3dc8d6b93a556358d0e46cc173fa31996904e934764c48d2f0f2a5f6dcf0d72005', 28, 1, 'MyApp', '[]', 0, '2023-12-16 12:59:09', '2023-12-16 12:59:09', '2024-12-16 18:29:09'),
('41766c88155fc57956ce1f2b20a0922764dfaa60a3d70a98b2e1c6bf23be734b0584316571672677', 80, 1, 'MyApp', '[]', 0, '2024-01-25 09:39:34', '2024-01-25 09:39:34', '2025-01-25 15:09:34'),
('41b1d4d4b31616835364cbc4143e0a5b2162418085a73ca4f3d10bb944ec22b94569cdfdb46c1939', 55, 1, 'MyApp', '[]', 0, '2024-01-25 12:44:39', '2024-01-25 12:44:39', '2025-01-25 18:14:39'),
('422ecaabf58ef4366bac52c9132ab01e539cf7f9d1b7e3b301eec2b11606cc896cfe334ea8111097', 76, 1, 'MyApp', '[]', 0, '2024-02-24 03:04:22', '2024-02-24 03:04:22', '2025-02-24 08:34:22'),
('4250c2830ba23d15e6c88c8bac5571c067d955edbd6c7947d9c5cb75baf6f1b74726e32a62b152b1', 130, 1, 'MyApp', '[]', 0, '2024-03-08 08:04:26', '2024-03-08 08:04:26', '2025-03-08 13:34:26'),
('4279b26d31545fbca2550ac1c12e7cf19c3b5919e03f0f413a5fd85e79c46449ac50344d8ecf3270', 129, 1, 'MyApp', '[]', 0, '2024-04-17 16:39:50', '2024-04-17 16:39:50', '2025-04-17 22:09:50'),
('429420ae4abab06c988b2e3a728f71344f454447452e15b194cd1f31c14355d50053640e34cff310', 129, 1, 'MyApp', '[]', 0, '2024-03-06 13:54:28', '2024-03-06 13:54:28', '2025-03-06 19:24:28'),
('42c7b4015775a242367b23827112ca49f063483a49f557cc92650ac8136cf167877ffb32a0854ff2', 126, 1, 'MyApp', '[]', 0, '2024-03-06 08:44:27', '2024-03-06 08:44:27', '2025-03-06 14:14:27'),
('42c8f6af3f5e664c4cc8e45ca84da0ff8266218275a7a05dddd0070587ba4e870484e40359e86215', 12, 1, 'MyApp', '[]', 0, '2023-12-18 09:35:11', '2023-12-18 09:35:11', '2024-12-18 15:05:11'),
('43711bde788abad888abbaf724e119db4aed0d8c3abc5540b091c4c44a46123bdb089fef6eb3e317', 129, 1, 'MyApp', '[]', 0, '2024-04-23 12:11:11', '2024-04-23 12:11:11', '2025-04-23 17:41:11'),
('43a040d3619f4f291f3147a25fd993b8bccf52ea0ab1d139793e938c4257cb22ede5f58b7f7dd965', 146, 1, 'MyApp', '[]', 0, '2024-04-20 10:15:00', '2024-04-20 10:15:00', '2025-04-20 15:45:00'),
('43c544f9b356c4b06565f47c0091cc0c19a3e2a8e925d8bdbce3884e6c42e5d4a95de47e887a6cd1', 182, 1, 'MyApp', '[]', 0, '2024-04-18 14:55:12', '2024-04-18 14:55:12', '2025-04-18 20:25:12'),
('445643605da76b1545de3385f293b66a365e02ab4ed1d7048648d7f10bad6621e11a05169188feba', 146, 1, 'MyApp', '[]', 0, '2024-04-18 07:34:31', '2024-04-18 07:34:31', '2025-04-18 13:04:31'),
('446ee6a2ce77ccd683a831d1469b4149ddfaab745a4bce16175e47657b5da69d0b22695325a99e8c', 56, 1, 'MyApp', '[]', 0, '2024-02-03 06:38:58', '2024-02-03 06:38:58', '2025-02-03 12:08:58');
INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('449f36c9c97a5ed1496b76879cc78d544e1e9d28adeb4dee193a0ca14c2e4d8618a6663e03c70d0a', 6, 1, 'MyApp', '[]', 0, '2023-12-18 06:41:56', '2023-12-18 06:41:56', '2024-12-18 12:11:56'),
('44c881059b5d104aa921ea0d79a676723cd9d9e5aebf5ed720ca695aa3dd3331e13bea6612126842', 12, 1, 'MyApp', '[]', 0, '2023-12-15 06:56:01', '2023-12-15 06:56:01', '2024-12-15 12:26:01'),
('44d2d87340bbd1f71b67843db6374a0181c22104d346cd14a48fb050f8ceffdf00a577c073ef7c5d', 149, 1, 'MyApp', '[]', 0, '2024-03-15 05:18:56', '2024-03-15 05:18:56', '2025-03-15 10:48:56'),
('456760168d281aa393e23521adb0920425a43dac4cc35d5cbed7515b78f5af8a756953dff470f40f', 148, 1, 'MyApp', '[]', 0, '2024-03-14 09:24:00', '2024-03-14 09:24:00', '2025-03-14 14:54:00'),
('4567ff07e59f30d1f454ef01b12e79c81f1d98b2e81505f8397b07d785d329046d6a9ea645fbae75', 12, 1, 'MyApp', '[]', 0, '2023-12-15 09:20:24', '2023-12-15 09:20:24', '2024-12-15 14:50:24'),
('45b8d29afc7bd4bfd317ae2eb40c93c2bfc0226ad4f863f9d556b8a97c8bc9e9fdd7537a68de3e5f', 111, 1, 'MyApp', '[]', 0, '2024-03-04 06:23:14', '2024-03-04 06:23:14', '2025-03-04 11:53:14'),
('45c884f7a11a9f4620210297a79b915f231d9080721cbb7a7dff70457f268ba91dc797f019fa6405', 143, 1, 'MyApp', '[]', 0, '2024-03-11 06:43:54', '2024-03-11 06:43:54', '2025-03-11 12:13:54'),
('45d655d22722758602980c26c33e99d4a7fb2942651a0afb04c9c6c6e43140afb5ed8c60ec40e564', 58, 1, 'MyApp', '[]', 0, '2024-01-22 04:49:28', '2024-01-22 04:49:28', '2025-01-22 10:19:28'),
('45e7c702304df4c3c34e1c8efa37836b4b5b22e15cbffdbfad001d296241ca1fa2881a360c5150d8', 80, 1, 'MyApp', '[]', 0, '2024-02-05 10:12:32', '2024-02-05 10:12:32', '2025-02-05 15:42:32'),
('4629781e74f8e4aed4331ebbdacc10f78b99adaf493bce36d1a56b54b7c871bd08caca2991715263', 12, 1, 'MyApp', '[]', 0, '2023-12-20 13:38:04', '2023-12-20 13:38:04', '2024-12-20 19:08:04'),
('462d89b3f741e11b08276f7bb0b4b0ba4b868981af92f60da2be47e0dd9a284aa6f380f7bd384211', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:26:54', '2023-12-11 06:26:54', '2024-12-11 11:56:54'),
('4664ec734d24abfac5b895d1e76c5252a038660a803b3d0297bf03ddf3b4138ee1ee53ac41f77b2d', 6, 1, 'MyApp', '[]', 0, '2023-12-15 13:26:08', '2023-12-15 13:26:08', '2024-12-15 18:56:08'),
('466eaa248ff7c4f3b1514f97ec2159ba5c69029ea7b60837305999d88aeadab5bbdc3d533f3fe19c', 147, 1, 'MyApp', '[]', 0, '2024-03-13 09:51:28', '2024-03-13 09:51:28', '2025-03-13 15:21:28'),
('4683c8f10bc4c0778b9e01d0e63704b6bba05e26954295111e2fefe3f064268660ea54b809887fdf', 81, 1, 'MyApp', '[]', 0, '2024-02-27 06:26:01', '2024-02-27 06:26:01', '2025-02-27 11:56:01'),
('469eb1b2812e6027cd252dc526cda3c6268d05c4909d0353e08ce5c012958ee7ae2554dfb74a92b7', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:23:40', '2023-12-11 06:23:40', '2024-12-11 11:53:40'),
('478840e82b6dfbaaa561a206cd54c8f8b020695e9b004916b37ca1647ee9a9dd56a0b58f91974157', 146, 1, 'MyApp', '[]', 0, '2024-03-19 05:40:56', '2024-03-19 05:40:56', '2025-03-19 11:10:56'),
('485590a900d64e302060ef3f56e3039ef06ab1ded79cf3f3fb23da13036b2473aae42b1b3439fbcc', 172, 1, 'MyApp', '[]', 0, '2024-04-11 06:54:11', '2024-04-11 06:54:11', '2025-04-11 12:24:11'),
('485f2ed930f581a4b776474359c398098be33aa615beef84216318d3ce844864b72abae5c5aab8a9', 80, 1, 'MyApp', '[]', 0, '2024-02-02 12:53:09', '2024-02-02 12:53:09', '2025-02-02 18:23:09'),
('48dce295f4a47da2205bb8967b2a42d44c029f81b2930317b0c7af91c6b763cd68f4a37043265182', 12, 1, 'MyApp', '[]', 0, '2023-12-12 10:52:01', '2023-12-12 10:52:01', '2024-12-12 16:22:01'),
('48f094da361822cdd494f43f4466f25977675c88840a5026277146b81f18bbb2acd1f0ceb9485fb9', 76, 1, 'MyApp', '[]', 0, '2024-03-03 10:00:56', '2024-03-03 10:00:56', '2025-03-03 15:30:56'),
('490a14f9138ffc1cc1c71c3ca5fcd5896a89c1ec2f1b06541270e50301028dd8f2e85d5d26efa22e', 126, 1, 'MyApp', '[]', 0, '2024-03-18 05:31:31', '2024-03-18 05:31:31', '2025-03-18 11:01:31'),
('4912d126167aa6ed9fcdf71fee71a819a6064df1c4c8fdfa37423ed10417d4ea68c0f8501c197c64', 130, 1, 'MyApp', '[]', 0, '2024-03-07 10:35:54', '2024-03-07 10:35:54', '2025-03-07 16:05:54'),
('49c8d070fd29481e2ba3397f5362e9faebd411e2f6a81bac62796ef0aba3a18ea5f6c5e6199020d7', 129, 1, 'MyApp', '[]', 0, '2024-03-10 14:01:43', '2024-03-10 14:01:43', '2025-03-10 19:31:43'),
('4a1b5b3b11d04a5f7764247bdbe3da8adbd7ba9c34cdaee3f900ca6205023b5056cccbd254188825', 126, 1, 'MyApp', '[]', 0, '2024-03-09 07:15:11', '2024-03-09 07:15:11', '2025-03-09 12:45:11'),
('4a37ec743be9084916e5b0e249be246fa8b65ec4ef47eeee583f5f121c6dfe16d720803af08d8c3b', 6, 1, 'MyApp', '[]', 0, '2023-12-12 10:27:41', '2023-12-12 10:27:41', '2024-12-12 15:57:41'),
('4a4d025971257f34dc2c331b538d30371aa8764929ebc68e6c84800ff59b88551fdc41d9a2ebaa57', 129, 1, 'MyApp', '[]', 0, '2024-04-24 06:28:44', '2024-04-24 06:28:44', '2025-04-24 11:58:44'),
('4aa0e8fcf078ac1c5e8f7ce535f42df2e0eb246bdaec5470114b5998ef17d681e8fc87e748a16b47', 128, 1, 'MyApp', '[]', 0, '2024-03-14 09:48:12', '2024-03-14 09:48:12', '2025-03-14 15:18:12'),
('4aade6564368f569772fa5dd3786b82f0c8644219357f1eb8f03f2a98a93ecff4cf796622d819489', 130, 1, 'MyApp', '[]', 0, '2024-03-28 13:52:51', '2024-03-28 13:52:51', '2025-03-28 19:22:51'),
('4abcdfabde75b6dba7cbfb414e57c1e9fe88b3844d9dbda80ce8e6de556bc9de3aacdfe0f781fd8d', 187, 1, 'MyApp', '[]', 0, '2024-04-20 10:12:57', '2024-04-20 10:12:57', '2025-04-20 15:42:57'),
('4afd44341bc94be5d150cc621281a1fc70abceced1d31f1f8ce885d186d8952c45fb95759d8402b9', 130, 1, 'MyApp', '[]', 0, '2024-04-18 09:21:16', '2024-04-18 09:21:16', '2025-04-18 14:51:16'),
('4b0b4b1f1f3dec3a2a26b1f995d4888050fe056c39a916821cf65e487abc1e4c1a235c311e5e4232', 133, 1, 'MyApp', '[]', 0, '2024-03-08 04:51:51', '2024-03-08 04:51:51', '2025-03-08 10:21:51'),
('4b25a8d52b79ddb1ebefc2e42c657508d1413ab50b3ba32aa7dfd893f0361babfaea5a4c47cdc043', 130, 1, 'MyApp', '[]', 0, '2024-04-20 12:54:42', '2024-04-20 12:54:42', '2025-04-20 18:24:42'),
('4b28582561b423daac25f33d31b9997211172b8951150df0fba65e59ef6a9b6de889ae9eadb3cc68', 70, 1, 'MyApp', '[]', 0, '2024-01-20 12:36:57', '2024-01-20 12:36:57', '2025-01-20 18:06:57'),
('4b472e04b012b0f59ec9526e5dd20ca56cf2e881c7db9854dfd7555d9ce5d823c9a9fcdd869f7579', 55, 1, 'MyApp', '[]', 0, '2024-01-25 07:00:06', '2024-01-25 07:00:06', '2025-01-25 12:30:06'),
('4bd8b27fd6491696d0968f336eda0fb2e7a6c77fdfa328057a11d84c17f1b0e32414f44596166477', 59, 1, 'MyApp', '[]', 0, '2024-02-03 11:32:44', '2024-02-03 11:32:44', '2025-02-03 17:02:44'),
('4c88d5c4add49a8d9cda34d439459f479e62dfad9bb1b41c1eace7a718d7b885f9228fef09e250ab', 55, 1, 'MyApp', '[]', 0, '2024-01-25 13:46:50', '2024-01-25 13:46:50', '2025-01-25 19:16:50'),
('4cca6d02388a3fbd5fd0fd7752b6ea3cea2b44b2cabcde6d8690f788c7a7bcbce0db4757a63e511c', 130, 1, 'MyApp', '[]', 0, '2024-03-06 13:51:24', '2024-03-06 13:51:24', '2025-03-06 19:21:24'),
('4ce38d8942117c1bd39f63d7386b2e872bc733c29c0086e15ae3be8e706a95cd538585d5f4cc367c', 114, 1, 'MyApp', '[]', 0, '2024-02-29 07:52:00', '2024-02-29 07:52:00', '2025-03-01 13:22:00'),
('4cf832369024cb03fe8d54d59f3b0f074d5314318c3d7882a2e00a200b1088e32f4b3d792b94dfbc', 80, 1, 'MyApp', '[]', 0, '2024-02-29 09:43:45', '2024-02-29 09:43:45', '2025-03-01 15:13:45'),
('4d0ebfc87da79609495f9358cd69cd68e2e0f60a756eed9615533fc094e3c1afd84cedab719e81a4', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:28:03', '2023-12-11 06:28:03', '2024-12-11 11:58:03'),
('4d10bbea9e4128c292d061510b5abffa064367d6875d8134fd2301f35bd7205c9d75dfd619b8930b', 59, 1, 'MyApp', '[]', 0, '2024-01-20 12:34:15', '2024-01-20 12:34:15', '2025-01-20 18:04:15'),
('4d8d935ebe9ed319480b65a39e4fee0a93d0bd1fe5ebfccd01806df72562a326abb551b95c03aa19', 98, 1, 'MyApp', '[]', 0, '2024-02-06 13:24:15', '2024-02-06 13:24:15', '2025-02-06 18:54:15'),
('4e0ed66e6b62af2ab17fe121d2444a7bb7e096e588aa749accebadf545bbccdcf0c793641a9f729f', 59, 1, 'MyApp', '[]', 0, '2024-01-27 04:39:07', '2024-01-27 04:39:07', '2025-01-27 10:09:07'),
('4e16b6c41554d6f4cd491d4e196caf604d6b35d0fb954244db4a9621c580f54cfaba23790901b625', 129, 1, 'MyApp', '[]', 0, '2024-03-08 08:02:16', '2024-03-08 08:02:16', '2025-03-08 13:32:16'),
('4e4f8ccdd9dd23586ef7a219a4c4e8a63edf0512b9c5ca452c4ad61cfb6923dbae74018e34b6b7ed', 85, 1, 'MyApp', '[]', 0, '2024-02-05 09:25:56', '2024-02-05 09:25:56', '2025-02-05 14:55:56'),
('4ec831b1dcf6a0c1d2dc2e4aef0a228ba0ac16ebb24232ee1a16c9088fa05215c5007a259040fbd0', 129, 1, 'MyApp', '[]', 0, '2024-04-22 13:28:51', '2024-04-22 13:28:51', '2025-04-22 18:58:51'),
('4f4cda3f63196e70806b76e747abd4ed72d546a194900e28c6166afa3f8d326800290dc0587c3cb2', 111, 1, 'MyApp', '[]', 0, '2024-02-27 10:25:21', '2024-02-27 10:25:21', '2025-02-27 15:55:21'),
('4f60772c17218d218eaaf7bf3115446c08423cf647adc50dc2e7175b62fe9d9c9a588499323bee40', 10, 1, 'MyApp', '[]', 0, '2023-12-11 07:23:00', '2023-12-11 07:23:00', '2024-12-11 12:53:00'),
('4fb056504e20a10787cebe9578e62721c157b4459a6c8984541e3c45c645e6f0f528dddb8434bf7b', 56, 1, 'MyApp', '[]', 0, '2024-01-23 09:49:31', '2024-01-23 09:49:31', '2025-01-23 15:19:31'),
('50054691a348b10dc9f069ad2a60c099587782b001279a71abef3de3e7e017d117d5a740305b68d2', 6, 1, 'MyApp', '[]', 0, '2023-12-14 12:22:20', '2023-12-14 12:22:20', '2024-12-14 17:52:20'),
('5036653e06e9511728dfc1c729cd7f66effd38dc56a5af1d56d9e41ca828a632242a930b6b119079', 12, 1, 'MyApp', '[]', 0, '2023-12-15 10:49:46', '2023-12-15 10:49:46', '2024-12-15 16:19:46'),
('506d797157443643581dff09fe85c04da22418a85330c2787ce18ffb2ecbe3f6e4e33faa55e62961', 6, 1, 'MyApp', '[]', 0, '2023-12-13 07:20:34', '2023-12-13 07:20:34', '2024-12-13 12:50:34'),
('511a3cc6840f0ca784858e25d6b73e8a5ce31350727dfb68ca6860ff170b2769002a933dcdda53d3', 6, 1, 'MyApp', '[]', 0, '2023-12-21 06:50:01', '2023-12-21 06:50:01', '2024-12-21 12:20:01'),
('5176c9fe2899699f62c3e5da7ea73bebede93cccf4ff52c3b73ea09916d89d13f5747af8b1a058d2', 12, 1, 'MyApp', '[]', 0, '2023-12-15 10:49:42', '2023-12-15 10:49:42', '2024-12-15 16:19:42'),
('5185892802805da6a4766f3c3df1db49cc439afdc11d0b61a75e9b7deaea8ad3508b9b4a811bc194', 126, 1, 'MyApp', '[]', 0, '2024-03-19 11:41:25', '2024-03-19 11:41:25', '2025-03-19 17:11:25'),
('51a9da473cfa4f2a6ea619cdde1df0c09e3d0d403a857e7e3977539a6c2e156f7a5d635b8a73b0be', 91, 1, 'MyApp', '[]', 0, '2024-02-29 10:49:07', '2024-02-29 10:49:07', '2025-03-01 16:19:07'),
('51ff12c5fb30739b81b76fbe5f140830c1fcfb639fe0904dab18316c9f8c703069e88bd6b0c060e3', 56, 1, 'MyApp', '[]', 0, '2024-02-01 09:50:31', '2024-02-01 09:50:31', '2025-02-01 15:20:31'),
('526a464752a245c4a963666795910d8d374fbbb7969d409a7236aefe4138e6857659e54892561093', 80, 1, 'MyApp', '[]', 0, '2024-01-25 06:54:45', '2024-01-25 06:54:45', '2025-01-25 12:24:45'),
('52990a8322ce52b939cf7991898b56ee0cf55a8dcedbe16176196328a940a2e6a8b58687a0983181', 126, 1, 'MyApp', '[]', 0, '2024-03-19 06:01:48', '2024-03-19 06:01:48', '2025-03-19 11:31:48'),
('52a5e21e2e4b93a3e2e556aff4075e71bd9ea110c5ffc7918f5c5531b5a9651fdfc6876be7927bbb', 130, 1, 'MyApp', '[]', 0, '2024-04-21 07:54:13', '2024-04-21 07:54:13', '2025-04-21 13:24:13'),
('52fa994f3be94c22d9a39b7088f70f1284fedbcfbb2600326e14b1e49757df2395c50337be57915a', 126, 1, 'MyApp', '[]', 0, '2024-03-08 07:17:00', '2024-03-08 07:17:00', '2025-03-08 12:47:00'),
('53556064a9f4eaee2e0564fb80c33260aeab3066e20474acdc87004b918878cd191ef9f745509f78', 80, 1, 'MyApp', '[]', 0, '2024-02-02 07:31:23', '2024-02-02 07:31:23', '2025-02-02 13:01:23'),
('5399882f9d385214dbb41f9dba0b55a893ffc7a6940b4e239dd41fe9d5c8a11b7ee9dc2a9b063c9a', 85, 1, 'MyApp', '[]', 0, '2024-03-02 09:27:36', '2024-03-02 09:27:36', '2025-03-02 14:57:36'),
('53e490f9f145fc75111aad1b28b61047bafc83075daa91b034f1da86d37d610d1ed04e15ab86bc78', 155, 1, 'MyApp', '[]', 0, '2024-03-19 06:53:45', '2024-03-19 06:53:45', '2025-03-19 12:23:45'),
('53e8df20573834acc1ae0c06472e86bec611e200adec46fb81f7e3cc486b0f1691978ae9c7c306f3', 146, 1, 'MyApp', '[]', 0, '2024-03-13 11:53:35', '2024-03-13 11:53:35', '2025-03-13 17:23:35'),
('5458869b5e8ec477fabb54485bb7eacf2758ee124a5329f72a090b1e196c21ae9ee0db25d9ecf816', 159, 1, 'MyApp', '[]', 0, '2024-03-26 12:58:14', '2024-03-26 12:58:14', '2025-03-26 18:28:14'),
('54687b3e38929413615146d3eb6e8ea300caf12669999d2f9aa6033822ed81e4eec090dba9e57833', 118, 1, 'MyApp', '[]', 0, '2024-03-02 17:37:35', '2024-03-02 17:37:35', '2025-03-02 23:07:35'),
('54a03c77cd15431b188eac55b493e9089abff7f7d7a07c4a09a1aae0b15a01b330643310806f614f', 56, 1, 'MyApp', '[]', 0, '2024-02-21 12:53:27', '2024-02-21 12:53:27', '2025-02-21 18:23:27'),
('54adf28ef337269ca2ece9ec18d9eca0d737bf5e1dc9a2aa0759a3b04d41232cc695cb0d65e8287c', 68, 1, 'MyApp', '[]', 0, '2024-01-20 12:36:47', '2024-01-20 12:36:47', '2025-01-20 18:06:47'),
('5506310c0e55d6822327a617d2954da0d3a5fd252e85f949f3bd844a4089b4ccf6a4fbf98f8d90f3', 85, 1, 'MyApp', '[]', 0, '2024-02-06 09:21:15', '2024-02-06 09:21:15', '2025-02-06 14:51:15'),
('5561880e17fd8c853c7dca2afb868ffd4f3fb38b2030c23880cfefb25ec81ce70276aeb6713c506b', 43, 1, 'MyApp', '[]', 0, '2023-12-29 06:24:45', '2023-12-29 06:24:45', '2024-12-29 11:54:45'),
('55a207d69fc2b99bc4135efd801af9478bad1fab855bd81a29ecf9d179c8403f472a86101b5d15b9', 129, 1, 'MyApp', '[]', 0, '2024-03-08 08:17:40', '2024-03-08 08:17:40', '2025-03-08 13:47:40'),
('562019e1a2a18ce8f99404e5e8fd509409c98bf3d7472f39090e9d1719f4fe1b5909edd2a700fd65', 57, 1, 'MyApp', '[]', 0, '2024-02-22 12:11:03', '2024-02-22 12:11:03', '2025-02-22 17:41:03'),
('56232792294c17e56391116f0680af2e1f3031a32c96fc52db466b262da48ad3108cf5cb61bb2066', 57, 1, 'MyApp', '[]', 0, '2024-02-13 14:31:06', '2024-02-13 14:31:06', '2025-02-13 20:01:06'),
('564d3fcdd43680e2714106b5094e84a9a268f93f83236917968547e65d9ace2983a07b785a299c8c', 80, 1, 'MyApp', '[]', 0, '2024-03-02 09:15:35', '2024-03-02 09:15:35', '2025-03-02 14:45:35'),
('5652e421ccfa86aea6b9e188e7456ac6234b9a58809c89e03bd7b9c1c8ec6150a524ca3a132fd243', 12, 1, 'MyApp', '[]', 0, '2023-12-15 04:18:05', '2023-12-15 04:18:05', '2024-12-15 09:48:05'),
('5694be9805682e16df0e0796c275ccdf473279a913c2f280a244d348a1e6b1110ab18a63d9a1146d', 155, 1, 'MyApp', '[]', 0, '2024-03-19 05:09:21', '2024-03-19 05:09:21', '2025-03-19 10:39:21'),
('56c912b2357f0cba30ff9081a2c7a726d6d92a740eb94f56108fa67f7c94c98db106f2af7c1d8618', 56, 1, 'MyApp', '[]', 0, '2024-01-24 09:28:16', '2024-01-24 09:28:16', '2025-01-24 14:58:16'),
('576bc7d928560b38fba68de64b445c9902eb35189694e6a6cfde31c53c141e6f301c751b4ed98a60', 158, 1, 'MyApp', '[]', 0, '2024-03-22 02:09:58', '2024-03-22 02:09:58', '2025-03-22 07:39:58'),
('576e74ff6bd7749bd76a8116a3840de0a57e3130797c61c414abe9c26aa4cf99d29263cb1496a822', 159, 1, 'MyApp', '[]', 0, '2024-04-08 07:55:35', '2024-04-08 07:55:35', '2025-04-08 13:25:35'),
('580dea6c29a5852f875e8286a8172d7864d9c23335fced1044d9e053de8868f9f4a2742786a98a0c', 56, 1, 'MyApp', '[]', 0, '2024-01-22 04:58:23', '2024-01-22 04:58:23', '2025-01-22 10:28:23'),
('583f3addd0bb6a19a3a111a436cef1a8da781066a0873011418e26f3ea7c8001fd70538dc225b298', 56, 1, 'MyApp', '[]', 0, '2024-02-06 05:50:00', '2024-02-06 05:50:00', '2025-02-06 11:20:00'),
('5842893611343b8917c7a2e3fa4dceda6cd78344c97ac8ec1f2261f979657f36549c7405b7d0b688', 182, 1, 'MyApp', '[]', 0, '2024-04-21 08:11:16', '2024-04-21 08:11:16', '2025-04-21 13:41:16'),
('58af5bc4ab548ab3c07dc7587d781139e66205174e61cfcbdf9c2275721cf91c96d5541e96ed8fd3', 85, 1, 'MyApp', '[]', 0, '2024-02-05 13:20:24', '2024-02-05 13:20:24', '2025-02-05 18:50:24'),
('58c1f6fcfe8d920e3b822d5e45a1432073fc385e85926fd9392e0f905807b6c4e387ea1a6764c385', 6, 1, 'MyApp', '[]', 0, '2023-12-12 06:27:06', '2023-12-12 06:27:06', '2024-12-12 11:57:06'),
('599406a509fb98e92f1d4d25dd1a333595f760a7958eafed38a43bc45dca52086e191f4762083f65', 12, 1, 'MyApp', '[]', 0, '2023-12-16 09:31:35', '2023-12-16 09:31:35', '2024-12-16 15:01:35'),
('5a199b2f79759b49321d37ec8103ba95c78f4444d100f028c55fda0d6bc24cc3141b46dffc99fe40', 182, 1, 'MyApp', '[]', 0, '2024-04-16 04:40:53', '2024-04-16 04:40:53', '2025-04-16 10:10:53'),
('5a24e9d559e0e1b8caf16d071bdf53d19f552e58766bb3ae236c1cbcdb7f6b8f937eb660fde081f0', 56, 1, 'MyApp', '[]', 0, '2024-02-01 09:49:27', '2024-02-01 09:49:27', '2025-02-01 15:19:27'),
('5a6aeb316638b3e31ea8dd95d7e69350aaed35fcdf09228fd22beab4a704b592142ae6647dd54f45', 13, 1, 'MyApp', '[]', 0, '2023-12-12 11:21:26', '2023-12-12 11:21:26', '2024-12-12 16:51:26'),
('5aa43bf161f70168c8b13f17812f63521e1f63d54d5186470d940ed79f77598bbb4b8bd1d2baccef', 187, 1, 'MyApp', '[]', 0, '2024-04-18 13:09:45', '2024-04-18 13:09:45', '2025-04-18 18:39:45'),
('5ad494d985e07e9a37609e9134c124ce24e0fb9bd1fb24451c311f1346627415fb05b573f74d15c9', 159, 1, 'MyApp', '[]', 0, '2024-04-18 13:39:09', '2024-04-18 13:39:09', '2025-04-18 19:09:09'),
('5b6d37957df4cb0fae86c30017149722ee683a7f54f3dc158dbf1b5d85b6270cdde49b34cf49da66', 56, 1, 'MyApp', '[]', 0, '2024-02-19 13:37:35', '2024-02-19 13:37:35', '2025-02-19 19:07:35'),
('5b9778499238a1a95745efa968c0a47e85631d399321ada279a4f4c4f0d8682055dca3a06906e2e7', 15, 1, 'MyApp', '[]', 0, '2023-12-14 18:28:57', '2023-12-14 18:28:57', '2024-12-14 23:58:57'),
('5bdbf857ed9d80add8f8798a3c33d73c604fba1289770e105ac626dd8a6c78727a32d646e1d73e65', 159, 1, 'MyApp', '[]', 0, '2024-04-10 02:36:00', '2024-04-10 02:36:00', '2025-04-10 08:06:00'),
('5c35bbbde1bb1705a0741848a15310f33b996a62d70b2c5f14f1cb5a57f2f9cd5c7d5f2caad094d0', 132, 1, 'MyApp', '[]', 0, '2024-04-17 12:48:25', '2024-04-17 12:48:25', '2025-04-17 18:18:25'),
('5c43c118bee09fc047a5aba3635b64d0f0a86f31bbc625edae5a8fdeb26e388b99c3c15fa9616c56', 56, 1, 'MyApp', '[]', 0, '2024-02-13 15:03:29', '2024-02-13 15:03:29', '2025-02-13 20:33:29'),
('5c45bb5709f5edbf2a0da4acb6d2d01901012eaed05843b8f768d956612c39d0479e175d321e6b88', 12, 1, 'MyApp', '[]', 0, '2023-12-28 06:06:18', '2023-12-28 06:06:18', '2024-12-28 11:36:18'),
('5c6d04bf0cef20e6bbd2563e88f6ecf351cdec976b995a50327cbe2bf1238c0ce9959c80b6deeb0a', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:30:02', '2023-12-11 06:30:02', '2024-12-11 12:00:02'),
('5ce5792aa833a751010a62c7dd22c13a62ecb046358578e07dbbfb5c57f979d982b7a41b86ec2c29', 159, 1, 'MyApp', '[]', 0, '2024-04-01 09:15:51', '2024-04-01 09:15:51', '2025-04-01 14:45:51'),
('5d27abf0d7ab6f081b22a3768d76f64de2b1ec10c846a5d1e0ec39749f402eee88bf61e00f34923c', 12, 1, 'MyApp', '[]', 0, '2023-12-15 05:39:20', '2023-12-15 05:39:20', '2024-12-15 11:09:20'),
('5d92c0dcbd4b8814bd9ec4680abdb72bb04275bfee064aa7a1ec4fa47852bf44659c9d48026e6d4c', 91, 1, 'MyApp', '[]', 0, '2024-02-05 13:11:42', '2024-02-05 13:11:42', '2025-02-05 18:41:42'),
('5db0562e0fc0bb2a2662fe4aff53b9c0a20f8c4bf2eb380e806048375750821b648ff2fb4a7aeab7', 88, 1, 'MyApp', '[]', 0, '2024-02-03 07:08:03', '2024-02-03 07:08:03', '2025-02-03 12:38:03'),
('5de6209ee5c6986dff8fb409b9dbf3586018ab2d3fc00044d82b871a955f7ecba178af3811304829', 126, 1, 'MyApp', '[]', 0, '2024-03-15 12:31:47', '2024-03-15 12:31:47', '2025-03-15 18:01:47'),
('5e4cf1ce3931ae5d416a94b5f5766d49748f3070c1efe836d4e81823b2cf0f7dccf4e5cd30b599ac', 126, 1, 'MyApp', '[]', 0, '2024-04-23 06:59:30', '2024-04-23 06:59:30', '2025-04-23 12:29:30'),
('5ebbf3830a286cef16a8716532d787d9f8d292c3b146681944b75aac3597c34446533e796e498b8b', 12, 1, 'MyApp', '[]', 0, '2023-12-15 10:12:53', '2023-12-15 10:12:53', '2024-12-15 15:42:53'),
('5f00084700beefa3f738c3cf3cfef039b17340c446e7d249e18e2af8e2bcf0b9b7669c729b25e4c0', 9, 1, 'MyApp', '[]', 0, '2023-12-11 07:18:02', '2023-12-11 07:18:02', '2024-12-11 12:48:02'),
('5fa4e4619ebf14dca7bb663ed42993d57a3eaab51d0a2aafc244d688bf325eaea8426be7b9c371a6', 172, 1, 'MyApp', '[]', 0, '2024-04-22 13:05:09', '2024-04-22 13:05:09', '2025-04-22 18:35:09'),
('5faaa46550a6fc3764f98f6e4ea1ba733536ca7f010ee5dfc6ac2c42ae7cd83855253616e3a47a67', 31, 1, 'MyApp', '[]', 0, '2023-12-18 12:27:14', '2023-12-18 12:27:14', '2024-12-18 17:57:14'),
('5fb3c4c1026301f3f3cf39386aa8522b6a8ebaf20b027a339d1c0248d05b580ec9f9f4377d33f7ab', 126, 1, 'MyApp', '[]', 0, '2024-03-14 04:29:18', '2024-03-14 04:29:18', '2025-03-14 09:59:18'),
('5fea5aa141cb3c045441329feab079f05d1020f891f4db51fc851f3a7fad050ce4b54693272b64c6', 55, 1, 'MyApp', '[]', 0, '2024-01-25 12:52:21', '2024-01-25 12:52:21', '2025-01-25 18:22:21'),
('612715988048303d01f5da000de9133d378a407b47609647bf00a95886db000e2565dbceee227c6d', 57, 1, 'MyApp', '[]', 0, '2024-02-13 09:15:37', '2024-02-13 09:15:37', '2025-02-13 14:45:37'),
('61278a7e4bc76f469782e51ab858e0077dcd5fc55f7ae31cecb5f6edaa1278c217dd99abfc8cda59', 131, 1, 'MyApp', '[]', 0, '2024-03-07 12:52:47', '2024-03-07 12:52:47', '2025-03-07 18:22:47'),
('61483c7170a1493f34963be391e77da534010e5a9890c556b7c75efb8bdb272978ec0009470ba635', 56, 1, 'MyApp', '[]', 0, '2024-02-01 09:50:37', '2024-02-01 09:50:37', '2025-02-01 15:20:37'),
('6167f69541130b01f1897a0808211bd7a4a5bac811262c95b096a25668204db4a3f25d2f5eafba00', 85, 1, 'MyApp', '[]', 0, '2024-02-05 13:09:36', '2024-02-05 13:09:36', '2025-02-05 18:39:36'),
('61c97c0dc9ef450b0282c19593905e281f0e9ffa71eca52b9076ec123a770c3ee1a43ca5f6901b08', 159, 1, 'MyApp', '[]', 0, '2024-04-15 00:54:05', '2024-04-15 00:54:05', '2025-04-15 06:24:05'),
('61ca13c0e0947327ed2c1823adc5af237665353db3c49de16d67661697ce7e0e2f1d713a922a7233', 6, 1, 'MyApp', '[]', 0, '2023-12-14 12:22:40', '2023-12-14 12:22:40', '2024-12-14 17:52:40'),
('61cd53294e6445a3da88cafe1c38c2a71d4134b9341995fae92abc747ab9b307b6ed6e2544fe61e8', 12, 1, 'MyApp', '[]', 0, '2023-12-15 11:14:20', '2023-12-15 11:14:20', '2024-12-15 16:44:20'),
('61e669fde2302df798543f3d6744af258c5c0037ecd3986a71e35bbfb387802f58c7815f3bf4214b', 159, 1, 'MyApp', '[]', 0, '2024-03-29 12:05:11', '2024-03-29 12:05:11', '2025-03-29 17:35:11'),
('62db6878d426cfeea2231ed59539dc949f6da1eeea3c442304a551b3c84c91e868e565677c3a071c', 8, 1, 'MyApp', '[]', 0, '2023-12-11 06:17:00', '2023-12-11 06:17:00', '2024-12-11 11:47:00'),
('630a5b7e0dbd17ac76ec0f2668340e13fdfc7502cd29b53ee8b28261045510b88163546ce860883a', 85, 1, 'MyApp', '[]', 0, '2024-03-06 04:57:06', '2024-03-06 04:57:06', '2025-03-06 10:27:06'),
('63552efb71134dc455ca3065026cbf817d12033af9345168a7c8c9912c5fd760da77950a4728e258', 172, 1, 'MyApp', '[]', 0, '2024-04-05 14:04:33', '2024-04-05 14:04:33', '2025-04-05 19:34:33'),
('6365e32b487e8e34170037ba9398735f2fbf8b65ec7d3c64dacdf2e1d8f137e822da9fb368473b8b', 60, 1, 'MyApp', '[]', 0, '2024-02-10 09:04:54', '2024-02-10 09:04:54', '2025-02-10 14:34:54'),
('6366acf0345709a378d72c8700129c640545f6358b4e1973bde698c86cd2f5dc2a777595472f45f2', 56, 1, 'MyApp', '[]', 0, '2024-01-22 13:57:45', '2024-01-22 13:57:45', '2025-01-22 19:27:45'),
('63e582e872cb25024416ffe517549af796002fc4dbf6f3920b9b8a3802ed34554ae1c8e1af00a844', 131, 1, 'MyApp', '[]', 0, '2024-03-07 04:48:58', '2024-03-07 04:48:58', '2025-03-07 10:18:58'),
('6489f76a89eb4bc87148e16fbca5f93a8cac1ef0ae610123ba49c71e56b2e7417b16d6a3fd39895c', 11, 1, 'MyApp', '[]', 0, '2023-12-12 07:11:10', '2023-12-12 07:11:10', '2024-12-12 12:41:10'),
('653cfd28143f0c3973cf25153b9ba4940b116aab80c405dcbbf625dfb0dbe7d93bb7c1a50b806373', 12, 1, 'MyApp', '[]', 0, '2023-12-28 06:07:52', '2023-12-28 06:07:52', '2024-12-28 11:37:52'),
('6546ec4ccd75012c9bf54447a53053e054812f4f8025f23f028cdf4785de0561c6fc8b4534a7024a', 56, 1, 'MyApp', '[]', 0, '2024-02-15 07:35:07', '2024-02-15 07:35:07', '2025-02-15 13:05:07'),
('65ff057de25b89f6d0173be0a84cd1821a0084d666a6caf02714c9232121f68e30423cd40c0b0de3', 159, 1, 'MyApp', '[]', 0, '2024-04-18 06:48:13', '2024-04-18 06:48:13', '2025-04-18 12:18:13'),
('6606fb7c03f9698c495a496aa52dbb007250fd660d2836026e6e4011d79daefbd1ea8523a47255c0', 31, 1, 'MyApp', '[]', 0, '2023-12-22 07:07:46', '2023-12-22 07:07:46', '2024-12-22 12:37:46'),
('6683f28bbd5c9f02cfa913f8263a07efc10a537f9746064995db732bdf4d6d5f11ca22944832e2aa', 56, 1, 'MyApp', '[]', 0, '2024-02-03 04:39:54', '2024-02-03 04:39:54', '2025-02-03 10:09:54'),
('66d14398a57aad01c5a4e2b90f6d7b4f3bdab28f677a86e432df7ec4a6c4517b069f89f468a6fbd9', 9, 1, 'MyApp', '[]', 0, '2023-12-12 11:00:12', '2023-12-12 11:00:12', '2024-12-12 16:30:12'),
('682a07ec789ad274fa04441254b1fc82a8f9fe581aabdd04c2c3ae59d64dec0edade2969ec324f79', 59, 1, 'MyApp', '[]', 0, '2024-02-02 04:56:57', '2024-02-02 04:56:57', '2025-02-02 10:26:57'),
('68407d2df306e9c067ab6446ae22e01acdd9d55149dcfa6806f34cd71d234cfbff642ee173ee9b87', 128, 1, 'MyApp', '[]', 0, '2024-03-19 05:59:55', '2024-03-19 05:59:55', '2025-03-19 11:29:55'),
('6859d08963aa0f3c38d8a3ce8ca8fc86ea2c05c77f83495db7788bed840e6ec2a6818a10e3e4f229', 78, 1, 'MyApp', '[]', 0, '2024-03-05 12:29:23', '2024-03-05 12:29:23', '2025-03-05 17:59:23'),
('686a0ca2462f3494e7699a443006a465358a7df55560b950c13e9079aada51a40ba6db2fe3f5489f', 57, 1, 'MyApp', '[]', 0, '2024-01-22 04:38:04', '2024-01-22 04:38:04', '2025-01-22 10:08:04'),
('686c2466e8fdc1807729b75de38619367a246debf84f96f46cd6c5ebaca9f42be2612bb7417406ff', 85, 1, 'MyApp', '[]', 0, '2024-03-04 06:00:27', '2024-03-04 06:00:27', '2025-03-04 11:30:27'),
('689ba6d24f8da0f89ef2e1ffc867cc69600b4cc27002a58955cd21293e089e6b0ca949b3f3733ff1', 159, 1, 'MyApp', '[]', 0, '2024-04-16 07:48:57', '2024-04-16 07:48:57', '2025-04-16 13:18:57'),
('68fda7b0a2a941e76eb52b1039b8885a483d7af723360eb2f33ce10ae5075aca72dd7fecd9cc8bdd', 159, 1, 'MyApp', '[]', 0, '2024-03-26 13:21:11', '2024-03-26 13:21:11', '2025-03-26 18:51:11'),
('691d555b9b5174d4ddb028a35309dde827ea6ac02fc14abe57e515028f6e68a4b64e9840a6ce7c0e', 56, 1, 'MyApp', '[]', 0, '2024-01-22 04:53:58', '2024-01-22 04:53:58', '2025-01-22 10:23:58'),
('6922d660f820e5b6a02244b6aaffbf2585d3e5708594095635281cbe12444c4e2d0edd44c76c8f59', 183, 1, 'MyApp', '[]', 0, '2024-04-04 16:49:29', '2024-04-04 16:49:29', '2025-04-04 22:19:29'),
('69735eef0f540ff1b941661f3ff3e8c089250d64013cfa8cb9c2bdb7a22da2491ecdbfc76de85412', 159, 1, 'MyApp', '[]', 0, '2024-04-12 01:56:17', '2024-04-12 01:56:17', '2025-04-12 07:26:17'),
('69c619666db082b30746d35e4e4681d93952dde8cc8b2b373e8b583a92f7ccc05882584192199872', 56, 1, 'MyApp', '[]', 0, '2024-02-14 14:18:03', '2024-02-14 14:18:03', '2025-02-14 19:48:03'),
('69ccd31edab3236875bfe331f0fda5b85ac0edebb6b8eb20602bf6c8674f2d6d8b32a63fc4bed832', 85, 1, 'MyApp', '[]', 0, '2024-02-05 09:54:00', '2024-02-05 09:54:00', '2025-02-05 15:24:00'),
('69cda1320eaa0db54203a6da104fe48dfb94d8b21ee799dadf10af8440959294f6cf70f47bfd3799', 80, 1, 'MyApp', '[]', 0, '2024-02-02 12:44:33', '2024-02-02 12:44:33', '2025-02-02 18:14:33'),
('69e7bf1df42b583b19854a97daddc91dc32c2258ea25d4a0660d10a469cf4bea0d089abc4eec96c6', 172, 1, 'MyApp', '[]', 0, '2024-04-21 07:40:29', '2024-04-21 07:40:29', '2025-04-21 13:10:29'),
('69f1f92f050491a25684bb1a2a97005fb81c6b3a1cae252cb637aa8e431efe8d831e6c06fcddfc1d', 25, 1, 'MyApp', '[]', 0, '2023-12-15 14:53:51', '2023-12-15 14:53:51', '2024-12-15 20:23:51'),
('6a09d959e0e2f4aa8b628dbe7ef55bbe36c1d4f13ef8efe2cbb2076c752c8c67b8f49cb450e22b13', 56, 1, 'MyApp', '[]', 0, '2024-01-24 06:17:21', '2024-01-24 06:17:21', '2025-01-24 11:47:21'),
('6a15415593bed4d04839599baf49b5b832e10a646033325a85933b2ea7b184b7d90c9a3970badb2d', 94, 1, 'MyApp', '[]', 0, '2024-02-06 05:16:57', '2024-02-06 05:16:57', '2025-02-06 10:46:57'),
('6b24f7ed21d5a38d263ffcf88bc804aa83d9abc06e9d80abe1fc3d5621ec114f0f04a9af75ba67f6', 36, 1, 'MyApp', '[]', 0, '2023-12-26 07:56:31', '2023-12-26 07:56:31', '2024-12-26 13:26:31'),
('6b8856f0042324aaba56aa6068ce51845f58c4dd6712edba019698a83a741539662b6e1629e15a22', 12, 1, 'MyApp', '[]', 0, '2023-12-29 10:58:48', '2023-12-29 10:58:48', '2024-12-29 16:28:48'),
('6bc299da010b7fc86da58527ae10ce4c5c35d59aebce332621e4dcb078c322842116d7bdc3b38314', 126, 1, 'MyApp', '[]', 0, '2024-03-05 16:29:13', '2024-03-05 16:29:13', '2025-03-05 21:59:13'),
('6bdec9ac1309d0d2a081e12f218cfea08268a5f2c386e66e3d6d900d9d4f60b35222c7f74a616dfb', 80, 1, 'MyApp', '[]', 0, '2024-02-07 04:27:30', '2024-02-07 04:27:30', '2025-02-07 09:57:30'),
('6c4b4c868d64a0baa2826c1e0e298ba3bc6f4c748e305b83e54ebc6acd58253edc9b95b9cf26b21c', 59, 1, 'MyApp', '[]', 0, '2024-01-22 04:56:19', '2024-01-22 04:56:19', '2025-01-22 10:26:19'),
('6c58f81d838f42e22c30e0a1cdf96dc91e9e26218a7f91420e6beedfb032988b68820f9f3502baa9', 154, 1, 'MyApp', '[]', 0, '2024-03-18 06:16:40', '2024-03-18 06:16:40', '2025-03-18 11:46:40'),
('6c7bc83efa492b62b2adc46659a842c104c369d62b4fce0e0ba487efd2eac7eca80d495108f0c580', 128, 1, 'MyApp', '[]', 0, '2024-03-11 12:10:35', '2024-03-11 12:10:35', '2025-03-11 17:40:35'),
('6cce365c4e991120d2aa98a3deb4ff40ba22d78d0942dc6238d9a371f686ef8508989d080fb666f8', 7, 1, 'MyApp', '[]', 0, '2023-12-11 05:41:48', '2023-12-11 05:41:48', '2024-12-11 11:11:48'),
('6d223356c5e57d8a35bf813a1361b0b777ab9c7b7eca40e0513bb2fbf9e810cb88afb3dba5713e27', 130, 1, 'MyApp', '[]', 0, '2024-03-10 07:52:11', '2024-03-10 07:52:11', '2025-03-10 13:22:11'),
('6d40d748c55c818fa758573690b9cbdf57bc51300cec5a433f956048d94e0febfdd14087b278bbb7', 57, 1, 'MyApp', '[]', 0, '2024-02-13 06:01:39', '2024-02-13 06:01:39', '2025-02-13 11:31:39'),
('6d799205c534acb119116ba6619ff813224291e0d128f55b1ab4482539bde10991be82ba6cdc734f', 182, 1, 'MyApp', '[]', 0, '2024-04-21 07:34:35', '2024-04-21 07:34:35', '2025-04-21 13:04:35'),
('6dbb483f65fde72f6b963140b92f83c12a241e7bc3fd661edda7e431f45efe27add14ee2d32d9f75', 56, 1, 'MyApp', '[]', 0, '2024-02-03 07:59:47', '2024-02-03 07:59:47', '2025-02-03 13:29:47'),
('6e16759e69e692bb17b4dc342f1f3bb93f30aed4e0fbd5552300eee23a3dd8212149acb21b5695ef', 31, 1, 'MyApp', '[]', 0, '2023-12-22 07:14:38', '2023-12-22 07:14:38', '2024-12-22 12:44:38'),
('6e1c89b4e42089b42aba7232c947a2f743a381dc9696baadc0d076b9ee94061ff2aed166a0909e1f', 5, 1, 'MyApp', '[]', 0, '2023-12-07 06:06:49', '2023-12-07 06:06:49', '2024-12-07 11:36:49'),
('6e2296fcad56e22918581c2fda5f011adb0c7a96bf3e465ceb74af80c66c18805875552132c9b72d', 136, 1, 'MyApp', '[]', 0, '2024-03-08 05:31:27', '2024-03-08 05:31:27', '2025-03-08 11:01:27'),
('6e25ecb40126caf24ac47b1eef53b013e668519ab593b28fbee6d7cf713c6a20bec5f48312ca4b90', 177, 1, 'MyApp', '[]', 0, '2024-04-02 16:43:01', '2024-04-02 16:43:01', '2025-04-02 22:13:01'),
('6e25fa47462e4a2e709b26a37dcf58aa7ad78dcac44a9ecb94bdd99d05be84fa517f1d571b6181cd', 80, 1, 'MyApp', '[]', 0, '2024-02-05 14:48:47', '2024-02-05 14:48:47', '2025-02-05 20:18:47'),
('6e2b9d14f5cbf6179c08686f86a8cc0043281f823a5729c072777c885953e99769e762011224dd3d', 130, 1, 'MyApp', '[]', 0, '2024-04-18 03:25:39', '2024-04-18 03:25:39', '2025-04-18 08:55:39'),
('6e829af775ceacc127a23a39d6d796b03b4924223fe9ef5e206a8bc8f7c48892fbe3cbe14c20dd8b', 159, 1, 'MyApp', '[]', 0, '2024-03-26 13:00:32', '2024-03-26 13:00:32', '2025-03-26 18:30:32'),
('6ed9b8998459dc9894221c4ed9e762c00b77eac6830676e5e08c7a0a5b66df94f90a59f80a889b5b', 129, 1, 'MyApp', '[]', 0, '2024-03-13 16:31:18', '2024-03-13 16:31:18', '2025-03-13 22:01:18'),
('6ef660a4d4a415929483961004d9fd14193c6e1fa74273bdcebc62ef96834fe41253dcde6f6cc156', 130, 1, 'MyApp', '[]', 0, '2024-04-21 07:28:41', '2024-04-21 07:28:41', '2025-04-21 12:58:41'),
('6f1462fb3020779677e02d16cedcd25148229067aeb2073d7107aabee087b5c533f3cc0bdb98c4bd', 129, 1, 'MyApp', '[]', 0, '2024-04-20 12:50:23', '2024-04-20 12:50:23', '2025-04-20 18:20:23'),
('6f4dc3c159ec08cf5b6c2e4a8d710838b42a8c75c2bf3e43fde621d88b6db24161bd265b9fe0eb92', 80, 1, 'MyApp', '[]', 0, '2024-02-05 14:23:15', '2024-02-05 14:23:15', '2025-02-05 19:53:15'),
('6f91ab863ac95bb3a3356b83fb546e6cd0222457df68f456cd6e8962ca5d1416c33a0f6e37888062', 77, 1, 'MyApp', '[]', 0, '2024-02-21 12:12:09', '2024-02-21 12:12:09', '2025-02-21 17:42:09'),
('6f9c7848e36e843b6a4f6e65f95c3ead3b33215655454ee5dddf096755acc1735de0d897dc9097ff', 157, 1, 'MyApp', '[]', 0, '2024-03-21 05:40:07', '2024-03-21 05:40:07', '2025-03-21 11:10:07'),
('6fc4f99a9bab671ffac8be6d6690dc48a8ab30953c0c1f80affa4428c95127f698b42d94aa1227ee', 126, 1, 'MyApp', '[]', 0, '2024-03-09 04:23:33', '2024-03-09 04:23:33', '2025-03-09 09:53:33'),
('6fca7d2c0473a108593343936e64a6e8c39886f7200031c4f138a074f60ae4fc2ab95d629a937111', 53, 1, 'MyApp', '[]', 0, '2024-01-12 04:55:46', '2024-01-12 04:55:46', '2025-01-12 10:25:46'),
('6fe97ef7b3f780827e16f3004c0584060e13d2efa3b77ab9b05f0e9fb3bef9cadf4a651c80a6cb5a', 111, 1, 'MyApp', '[]', 0, '2024-02-27 06:51:16', '2024-02-27 06:51:16', '2025-02-27 12:21:16'),
('706ca0e9b329b512802c06019e17dfdb4083e6e367bbe94728e9a2d0bfabc5b6e798cbf72363278f', 172, 1, 'MyApp', '[]', 0, '2024-04-15 13:50:00', '2024-04-15 13:50:00', '2025-04-15 19:20:00'),
('7071c0948928a684d7734be9aa784f3c43222ea21fbcd956482617a714bc207cec68a724756390c9', 6, 1, 'MyApp', '[]', 0, '2023-12-19 05:54:19', '2023-12-19 05:54:19', '2024-12-19 11:24:19'),
('714cc37b71d04880a4663619a002b64b1b710f30b806e806c2c81c5ab8fccd708f1857d5e7c8b9f9', 5, 1, 'MyApp', '[]', 0, '2024-01-11 09:50:52', '2024-01-11 09:50:52', '2025-01-11 15:20:52'),
('71769f8a0a9546809ed0fefcd430a204462b7bf60436dd44ab206ff0866cb93e75a594ceeaaac98d', 182, 1, 'MyApp', '[]', 0, '2024-04-04 11:19:06', '2024-04-04 11:19:06', '2025-04-04 16:49:06'),
('71d3953567dfcb01185e717eeccde70e186d88c94a05f60ae3c7672fd7633bebaf4c4a5cd2297452', 81, 1, 'MyApp', '[]', 0, '2024-02-06 05:59:52', '2024-02-06 05:59:52', '2025-02-06 11:29:52'),
('7249c1d7f699f186dbfffa40e460716c38ff5e698c4f48dd0e0e523611bf9463dd39c5b64bf799ff', 129, 1, 'MyApp', '[]', 0, '2024-03-19 11:54:10', '2024-03-19 11:54:10', '2025-03-19 17:24:10'),
('7260591dfed7908b7f698f99ed6fd1258b89a5e44f5efd6978b4c7e084dc5741fbd809c1b287235d', 129, 1, 'MyApp', '[]', 0, '2024-03-10 07:54:21', '2024-03-10 07:54:21', '2025-03-10 13:24:21'),
('726d54d180bf871759b3be1de98603aa1fba0805b26d41d78e8cd3ee7db2f050dcf8e93ddbdbcf8b', 48, 1, 'MyApp', '[]', 0, '2023-12-29 11:56:36', '2023-12-29 11:56:36', '2024-12-29 17:26:36'),
('736961dfdc9d78d27b78758af569555426c3b3ff9d9c21b8bd4309453639a08c325c0bacd7ec5262', 129, 1, 'MyApp', '[]', 0, '2024-03-06 14:16:10', '2024-03-06 14:16:10', '2025-03-06 19:46:10'),
('737bebc856edf5a7b7cd791926fb7dc8bdce4214a781bdc2a2862b4f029fa7397c62d57ac4d21360', 172, 1, 'MyApp', '[]', 0, '2024-03-31 03:28:44', '2024-03-31 03:28:44', '2025-03-31 08:58:44'),
('739f131a319f9823b4901af1e88cf7221afdcdce0782bb98eb46d163a2addcecafd6a31cae71a468', 60, 1, 'MyApp', '[]', 0, '2024-01-20 12:34:21', '2024-01-20 12:34:21', '2025-01-20 18:04:21'),
('740c7d958c8e08a403049e2dd9c877a8f551b3c13b30bade49ca304aecd57a2ed8a788adfeb114c6', 126, 1, 'MyApp', '[]', 0, '2024-03-15 04:28:31', '2024-03-15 04:28:31', '2025-03-15 09:58:31'),
('746136e1a770ffae0bb4f5f4ada015a37b6325e0298256a5353b4601a068e9efeb356046f71f1d32', 4, 1, 'MyApp', '[]', 0, '2023-12-07 06:02:40', '2023-12-07 06:02:40', '2024-12-07 11:32:40'),
('747408e9da7f71412cec1d9985cebe31806421ce5ab279ba4c039053776834d22255ca26a2df6469', 172, 1, 'MyApp', '[]', 0, '2024-04-21 10:10:22', '2024-04-21 10:10:22', '2025-04-21 15:40:22'),
('74c567ac0b6d75b33cf880017adb69c3fdab176712090d7c996b83e1715f416f0ae350a8c08f9a8c', 130, 1, 'MyApp', '[]', 0, '2024-03-08 07:36:23', '2024-03-08 07:36:23', '2025-03-08 13:06:23'),
('74f4bf9e7b4ca6490db615704e5f2843261a5825d2373bed77c991c3fdc858c4386ae588b034812e', 182, 1, 'MyApp', '[]', 0, '2024-04-21 10:28:39', '2024-04-21 10:28:39', '2025-04-21 15:58:39'),
('75032b22185d290a4e12adbc64c6d02eb9c82ab871da200728464a7a7fb36d4c8c7cba629a692dc9', 76, 1, 'MyApp', '[]', 0, '2024-02-28 15:42:16', '2024-02-28 15:42:16', '2025-02-28 21:12:16'),
('7514f3a7bca6c2cc0e74f74811a31801f3eb33ae4c68c172bea1bcff985704138b4bececd2eb5b23', 81, 1, 'MyApp', '[]', 0, '2024-01-24 13:48:48', '2024-01-24 13:48:48', '2025-01-24 19:18:48'),
('756bc6e6cb9d28afd2333d2dcfd2c8fe0bb37624d9ee868bd79b879fc8f030557318df6402165235', 56, 1, 'MyApp', '[]', 0, '2024-02-13 14:54:54', '2024-02-13 14:54:54', '2025-02-13 20:24:54'),
('75b131e8196c537091e4af43766917eae650445fe7ff4d5d954b1ceb6affab09e5f70480a6956c57', 12, 1, 'MyApp', '[]', 0, '2023-12-18 09:49:30', '2023-12-18 09:49:30', '2024-12-18 15:19:30'),
('75b52ab378951f4c72573a0beaaea11e5d61d4455a8be8c4ae1edffcd43d8495628606c1a9bd16c7', 55, 1, 'MyApp', '[]', 0, '2024-02-06 13:34:11', '2024-02-06 13:34:11', '2025-02-06 19:04:11'),
('75d7a7a65aa00cf698aceeb6dadf424759f69ce2eb32bc0efc055b0c20a48a01f74ae4e6f3a2642c', 182, 1, 'MyApp', '[]', 0, '2024-04-21 05:29:55', '2024-04-21 05:29:55', '2025-04-21 10:59:55'),
('7620e60f212d2799d5af001e650ba39406104fec780e86c7453e139915ac1a1c609a9c5ff0cdbd5f', 130, 1, 'MyApp', '[]', 0, '2024-03-12 14:27:42', '2024-03-12 14:27:42', '2025-03-12 19:57:42'),
('76c205685f4c9bb1a2eccb9c718717f1bbd4d6b74f5dd842001594fcc866ff698190af78d7065c88', 56, 1, 'MyApp', '[]', 0, '2024-02-06 11:12:48', '2024-02-06 11:12:48', '2025-02-06 16:42:48'),
('76e61686e4a67a21d15116fd1a81f6b26f51e5ac7cf39ec6a423dac30e962adcda603708e9f1b154', 12, 1, 'MyApp', '[]', 0, '2023-12-29 05:50:48', '2023-12-29 05:50:48', '2024-12-29 11:20:48'),
('77766550782d0abf5b641e65397d5f81e4454c282f7a10d01712d86f25cf3c114efa8d8b0c1d5d45', 57, 1, 'MyApp', '[]', 0, '2024-02-15 07:36:09', '2024-02-15 07:36:09', '2025-02-15 13:06:09'),
('782097df71ce5fe37bb956243c887c27a66ca0475f378eea7f9619c7caa95596179364817b82c3ba', 11, 1, 'MyApp', '[]', 0, '2023-12-11 07:43:54', '2023-12-11 07:43:54', '2024-12-11 13:13:54'),
('784e6eadd88713d16ef157a449ef9b98f2199c61d90e1d2e74e8b265feed8d6b3978391d7d86fd1e', 56, 1, 'MyApp', '[]', 0, '2024-01-27 04:40:17', '2024-01-27 04:40:17', '2025-01-27 10:10:17'),
('78e55f9f43e5bbbaf62b5cf52d52bf8a19226a5dc340972809df0ebf2a3fa0c94c52c43788954a96', 185, 1, 'MyApp', '[]', 0, '2024-04-15 08:01:42', '2024-04-15 08:01:42', '2025-04-15 13:31:42'),
('78fdc0714818d6395e28e747892aa9805c933a08deac6839880cdf2a531d968b90cc329feaef62c7', 51, 1, 'MyApp', '[]', 0, '2024-01-12 05:59:52', '2024-01-12 05:59:52', '2025-01-12 11:29:52'),
('792ea8e22df57c4c116289373b32182e3495ee5b645ffef87d267b83b337ee8614e8915ef3dbddd6', 3, 1, 'MyApp', '[]', 0, '2023-12-29 13:43:32', '2023-12-29 13:43:32', '2024-12-29 19:13:32'),
('7983d15a60ec82641c1201e04283165f1131eb076913cea6819d1733605c4c02dfff4aa32e109177', 130, 1, 'MyApp', '[]', 0, '2024-03-07 09:08:59', '2024-03-07 09:08:59', '2025-03-07 14:38:59'),
('798fb81e87884696c4fe51b8944655f73749aa50b64704924d0e1fb32d161c8f65d686430584a419', 145, 1, 'MyApp', '[]', 0, '2024-04-20 10:53:34', '2024-04-20 10:53:34', '2025-04-20 16:23:34'),
('79a0532afb5367832e31ae45cfe3fe82302290ab77df15898aa63c9bc53b7ae502972439050ccd14', 143, 1, 'MyApp', '[]', 0, '2024-03-09 12:51:16', '2024-03-09 12:51:16', '2025-03-09 18:21:16'),
('79a4a59633c3bf1e48c1ebfa75d5d400ea310fcca31ba23d5bb9faabbd875ef387732a4fd7d5b9c2', 172, 1, 'MyApp', '[]', 0, '2024-04-22 13:27:57', '2024-04-22 13:27:57', '2025-04-22 18:57:57'),
('79f5cbcd0c017b9f75d38ae8b7d45217e75b6b4d1c6bb46222f6bee34560c2f82cdef89f25027ce4', 19, 1, 'MyApp', '[]', 0, '2023-12-15 04:19:30', '2023-12-15 04:19:30', '2024-12-15 09:49:30'),
('7a26ca4c79923f960a80278449c4bce8b4dd089bf93e3a467ade6e136d42df2aa832415a61759368', 114, 1, 'MyApp', '[]', 0, '2024-02-29 07:53:28', '2024-02-29 07:53:28', '2025-03-01 13:23:28'),
('7a819451368c47e2cc96183b199e264141a3de63a4a219c40a337c8b57381282b583b3f4fbc3edad', 131, 1, 'MyApp', '[]', 0, '2024-03-07 12:46:21', '2024-03-07 12:46:21', '2025-03-07 18:16:21'),
('7a8e871f89a0e4224a2a840b36c9b1ba7f8c0006e61f5d8a95111eb5446b72e22af9e66e58c6b27b', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:25:00', '2023-12-11 06:25:00', '2024-12-11 11:55:00'),
('7a92db475a1f452b08db21799d2cf1b1036f3fac7bc679f8eed864f9ad0e2e562e60772aae63141a', 55, 1, 'MyApp', '[]', 0, '2024-01-20 12:26:20', '2024-01-20 12:26:20', '2025-01-20 17:56:20'),
('7ac34a7939091693709976b0a4935a4dab568c901b6edce6abd552772705dab28168fca4b51a5e18', 126, 1, 'MyApp', '[]', 0, '2024-04-23 05:11:59', '2024-04-23 05:11:59', '2025-04-23 10:41:59'),
('7b0b112d87287768677612c1d5463474c6b872fc7e46e88a742ad22b3a4456fedc71e284aa3d6e78', 11, 1, 'MyApp', '[]', 0, '2023-12-13 05:08:45', '2023-12-13 05:08:45', '2024-12-13 10:38:45'),
('7ba2e79aa5f8f8336bdbc78a8680db0572788115cd6b24d4df1b9ac527deb99579672693f4f8c108', 59, 1, 'MyApp', '[]', 0, '2024-01-24 06:18:46', '2024-01-24 06:18:46', '2025-01-24 11:48:46'),
('7be02ffc31398896f77b84e92fdc0b2189c57fa799a917040c3c7f9e79e93e0b65cf8e2a86cb7f4b', 11, 1, 'MyApp', '[]', 0, '2023-12-11 09:50:45', '2023-12-11 09:50:45', '2024-12-11 15:20:45'),
('7c328ca3e22cb53a0924881039bed663fe3bce3b843b112f64200dd4565f12e6153f42a9f712ad2c', 56, 1, 'MyApp', '[]', 0, '2024-01-30 13:23:59', '2024-01-30 13:23:59', '2025-01-30 18:53:59'),
('7c5d81f51016fd35429b076696fb650630f4898a318cc48361189203a746083157305183c78fbfa0', 159, 1, 'MyApp', '[]', 0, '2024-04-07 10:57:10', '2024-04-07 10:57:10', '2025-04-07 16:27:10'),
('7cbcffe74e80129421c4d575a97f0712aae989e745ea27079cef4d1acf264c7c3cc40d9fc15a7793', 12, 1, 'MyApp', '[]', 0, '2023-12-22 11:31:56', '2023-12-22 11:31:56', '2024-12-22 17:01:56'),
('7cef68786406d2f7b8a8a170299930bd12770626377a34ddec41508c75450f148442be0ac3538bb8', 5, 1, 'MyApp', '[]', 0, '2024-01-11 09:55:01', '2024-01-11 09:55:01', '2025-01-11 15:25:01'),
('7d0bf2d265ced7247e6e73136cf92fc8a2c4a92009c77a3277fb2a0bf6069b6c1372bfe26694cee1', 12, 1, 'MyApp', '[]', 0, '2023-12-12 12:29:34', '2023-12-12 12:29:34', '2024-12-12 17:59:34'),
('7d41782ab47650aae7076bdccfe86fd4fb6307ded33e9083cd226c6ac39e56ca873eb9950687b3a1', 3, 1, 'MyApp', '[]', 0, '2023-12-06 10:14:27', '2023-12-06 10:14:27', '2024-12-06 15:44:27'),
('7d4fb7169ec3d92fe3f7286348a4e8866686e595b35327351381689b794ef77443cf56281d0a2a64', 129, 1, 'MyApp', '[]', 0, '2024-03-06 13:31:55', '2024-03-06 13:31:55', '2025-03-06 19:01:55'),
('7d5967d74f1cc0676731e2790be75e230a09f78a19abb2daf9763737b6b488a8dcf7b2d2173bbc47', 129, 1, 'MyApp', '[]', 0, '2024-03-08 06:52:23', '2024-03-08 06:52:23', '2025-03-08 12:22:23'),
('7d6084b872862d893db5cac6fb425e33ec438176074de4397ed6a041adebdd1a9f28a6fb87efb980', 124, 1, 'MyApp', '[]', 0, '2024-03-05 12:38:58', '2024-03-05 12:38:58', '2025-03-05 18:08:58'),
('7d7cd440b200c2d9e9922cf2d960d4e8ed872d4d42d63dc3c5083632a5bee0efad05d1fe9905c673', 20, 1, 'MyApp', '[]', 0, '2023-12-16 10:56:31', '2023-12-16 10:56:31', '2024-12-16 16:26:31'),
('7de2d4409a8d1318a1942a013f6795f2442c13675600c3961b1e1a6316808dd08b64f2a73a7aa4e3', 76, 1, 'MyApp', '[]', 0, '2024-03-02 07:13:39', '2024-03-02 07:13:39', '2025-03-02 12:43:39'),
('7e0ff637f569ecbed3d2cbdbfb5b5743d9fea3583b577aae2725d869cfa23c65785916670d1cc0c3', 58, 1, 'MyApp', '[]', 0, '2024-01-22 04:55:43', '2024-01-22 04:55:43', '2025-01-22 10:25:43'),
('7e164817b3ee4c1638b11ed6776282218003df88bcac190fc92a5dbe7aafae2702cca7fd8cd6a9c7', 59, 1, 'MyApp', '[]', 0, '2024-01-23 11:05:35', '2024-01-23 11:05:35', '2025-01-23 16:35:35'),
('7e3e873ce7115420c57d2867a913a48a580b76bd34a434aa62b4c6625aac280df72046381b187ab9', 132, 1, 'MyApp', '[]', 0, '2024-04-18 12:52:13', '2024-04-18 12:52:13', '2025-04-18 18:22:13'),
('7e84eabb2a86b0b9b62cc1cfa8e55ffd800feb417edae4e0fb7b18976c1538f6e711d52f53681f59', 12, 1, 'MyApp', '[]', 0, '2023-12-12 04:35:43', '2023-12-12 04:35:43', '2024-12-12 10:05:43'),
('7eb27ec0892919944262bd7df00151a056dc532569e2391d0580979f38552cdbaa8257289c72cc12', 3, 1, 'MyApp', '[]', 0, '2023-12-22 05:42:52', '2023-12-22 05:42:52', '2024-12-22 11:12:52'),
('7f4abaa81951c0f85876c99c2abfa39975f2856e5f1657be32f75934226d1236f2f2c22a0f6b9507', 69, 1, 'MyApp', '[]', 0, '2024-01-20 12:36:53', '2024-01-20 12:36:53', '2025-01-20 18:06:53'),
('7f811d72fdfba6faf978410b54a8dcde2f4f7d662aaa3eb43e2ef6b09b0c4c1bd8ad7e462eb42358', 129, 1, 'MyApp', '[]', 0, '2024-03-08 07:35:18', '2024-03-08 07:35:18', '2025-03-08 13:05:18'),
('7fa91012dc0c2ce4274b6bc527b3a0f600eaeddcb2664df27e80f1fb9be4e98e79cc1b844bdaa9ae', 159, 1, 'MyApp', '[]', 0, '2024-04-13 01:57:28', '2024-04-13 01:57:28', '2025-04-13 07:27:28'),
('7fc0a65f3710f4a73eae57b6e7fa3f4e6849f1c58dcef830bb67d6bc029b77a45dac52da8dafd120', 129, 1, 'MyApp', '[]', 0, '2024-03-06 14:01:53', '2024-03-06 14:01:53', '2025-03-06 19:31:53'),
('80165f6015ad7ea26db29a27c81428fb2d82415a7e97db7440326f7ab49f45bb50783f16ea0cc255', 130, 1, 'MyApp', '[]', 0, '2024-03-24 03:30:12', '2024-03-24 03:30:12', '2025-03-24 09:00:12'),
('8044b0e35ded6ae8f40efeb22052d6db120357e26201d4c73591fdfb46a180ecae8d1e8e699a7899', 52, 1, 'MyApp', '[]', 0, '2024-01-12 07:10:55', '2024-01-12 07:10:55', '2025-01-12 12:40:55'),
('80548527414bd37c08a1195dbc966e2cf91e47a4e401c4914c171f4c0c246d61aa49d5f1c09d901f', 129, 1, 'MyApp', '[]', 0, '2024-04-19 07:15:53', '2024-04-19 07:15:53', '2025-04-19 12:45:53'),
('8075bdbae3f2ffbea52e8faf776526a6a2580f97ea8f75e20a98ac2b2e437918dee9773113caa03a', 73, 1, 'MyApp', '[]', 0, '2024-01-20 12:38:32', '2024-01-20 12:38:32', '2025-01-20 18:08:32'),
('80abffeda8a3ff2e17efcd52c9e6bbee138e0319fc7be2ea4e32de026e69ae5af91740a991eb3631', 138, 1, 'MyApp', '[]', 0, '2024-03-08 05:32:54', '2024-03-08 05:32:54', '2025-03-08 11:02:54'),
('80b7783622b30bf0f15b66871697c755a9e0b1ec01e4198e361cfa91596ec369c84e3bcd026cd676', 172, 1, 'MyApp', '[]', 0, '2024-04-21 06:16:46', '2024-04-21 06:16:46', '2025-04-21 11:46:46'),
('80c80ae0f80d5ce11e4620d0878509ea44a2219a5a343033fb7bdec955a8c9953ea41d7c69971a5c', 130, 1, 'MyApp', '[]', 0, '2024-04-23 12:29:01', '2024-04-23 12:29:01', '2025-04-23 17:59:01'),
('80d06c66f900cd7b1d672932687a2dbf7b35df24db4195822d6dba96a827a2f285a283e6b5020220', 59, 1, 'MyApp', '[]', 0, '2024-01-23 13:36:09', '2024-01-23 13:36:09', '2025-01-23 19:06:09'),
('81372b9689c4397aa12fe909c701323382a1cd62e86ee7634ac3e2948b23813274a01ceecea0aea5', 56, 1, 'MyApp', '[]', 0, '2024-02-12 06:38:29', '2024-02-12 06:38:29', '2025-02-12 12:08:29'),
('817d4d41a7cb2ef5310cf8c229afb3f0260672b1ce8112c7a18916dcc016341955451996c0185c90', 182, 1, 'MyApp', '[]', 0, '2024-04-06 08:47:40', '2024-04-06 08:47:40', '2025-04-06 14:17:40'),
('81a955c8ba5c3fdba0310259de8cc2a24e2b505749d63b6f82efac3acfda5b4804433affa43a5fcf', 187, 1, 'MyApp', '[]', 0, '2024-04-18 07:26:33', '2024-04-18 07:26:33', '2025-04-18 12:56:33'),
('81a96df20393b3135849a84de0b1a897297d55c7d0ae31bdb8b53149ff22cae3744c8b492ae120af', 159, 1, 'MyApp', '[]', 0, '2024-04-02 04:59:23', '2024-04-02 04:59:23', '2025-04-02 10:29:23'),
('81e8054a9c4e4204afe5f0f1683c9dfd9c7cce820ed4b0a6c8f3c795f3352a2db8e70c4a67422c6b', 159, 1, 'MyApp', '[]', 0, '2024-04-13 23:55:37', '2024-04-13 23:55:37', '2025-04-14 05:25:37'),
('821a0f2d833f7ffa344d1c171a40d0476ec45ce17919cffcf49a08124842bfcb847cd07379908cef', 129, 1, 'MyApp', '[]', 0, '2024-04-24 14:57:34', '2024-04-24 14:57:34', '2025-04-24 20:27:34'),
('82541031919d4a1d9130d4bf60acff1d3530859f794680af98f5649f5dd14ab628347c46066ca513', 130, 1, 'MyApp', '[]', 0, '2024-03-06 13:55:31', '2024-03-06 13:55:31', '2025-03-06 19:25:31'),
('829001fd1708fdc141b7f431d35fad785a71668b528f906f60fe303e475180844ee4a2ed445287ab', 20, 1, 'MyApp', '[]', 0, '2023-12-20 04:53:04', '2023-12-20 04:53:04', '2024-12-20 10:23:04'),
('82acbb33ff837be9374b4fcf37e559b6a35e9bba4178463dd994e4dc3405934023cd8ebeda90d872', 130, 1, 'MyApp', '[]', 0, '2024-03-06 15:21:13', '2024-03-06 15:21:13', '2025-03-06 20:51:13'),
('82bb9751f9bdac9a9e45fc749358567ab8f959b5a4754d2e84d2b9541323c9bbfa1d7240b1f10048', 56, 1, 'MyApp', '[]', 0, '2024-01-23 10:09:36', '2024-01-23 10:09:36', '2025-01-23 15:39:36'),
('82cc374130cd7c7bfd7b6853c1d580a90a9de55a22f32cb4716b9a286efcee11ac9a8beaa3d8dbc7', 55, 1, 'MyApp', '[]', 0, '2024-01-20 12:35:52', '2024-01-20 12:35:52', '2025-01-20 18:05:52'),
('82cf5c4d37cd0b360b73d9c3282d20243077338295be1bf76479ce08dc0db7ade631fe488d1ec445', 56, 1, 'MyApp', '[]', 0, '2024-02-15 06:14:10', '2024-02-15 06:14:10', '2025-02-15 11:44:10'),
('831796c3fcd86cd1c493ae4e58960a7e058a705436a7ad8dc068a0ff5f79ed1b823838d909d2cd5d', 40, 1, 'MyApp', '[]', 0, '2023-12-29 10:26:29', '2023-12-29 10:26:29', '2024-12-29 15:56:29'),
('832967f5408a00f44b3c132d16dc240da98f391166056f641bbd5bf34cc0d32e7a045304d5352760', 157, 1, 'MyApp', '[]', 0, '2024-03-26 12:57:01', '2024-03-26 12:57:01', '2025-03-26 18:27:01'),
('8359c9d69f1d756d200541347396b2da94d009a846bc6524e48fbae8fd1e37fd5cccc08234b5d2d2', 3, 1, 'MyApp', '[]', 0, '2023-12-22 05:42:52', '2023-12-22 05:42:52', '2024-12-22 11:12:52'),
('8376cf830aacf869aed7e1e99685c756bd86708c7804ac16fcbff420f4fe7c86d9aca09c4acce809', 128, 1, 'MyApp', '[]', 0, '2024-03-13 05:25:41', '2024-03-13 05:25:41', '2025-03-13 10:55:41'),
('8386b461f38038bed38d8efd843b0b22dd027c738c4868ba5276cd28d54e96535f803d4302267df0', 56, 1, 'MyApp', '[]', 0, '2024-02-06 15:34:27', '2024-02-06 15:34:27', '2025-02-06 21:04:27'),
('83e64ffc64f316c4d4b913cb281ba3dff8ed2168b8b51f4ee6029bf03725788144cb685f25954ba0', 60, 1, 'MyApp', '[]', 0, '2024-01-25 05:16:45', '2024-01-25 05:16:45', '2025-01-25 10:46:45'),
('84043b78b88590faf5fb7ffced64581d6076c51176a2a0f4d2858d4491a42db1e21bce559930e6f4', 59, 1, 'MyApp', '[]', 0, '2024-01-23 09:56:54', '2024-01-23 09:56:54', '2025-01-23 15:26:54'),
('840a465fce01d13734d7515d7d6bac389368813846e8195e5a1825c57a3089fbf1afd3441455021c', 85, 1, 'MyApp', '[]', 0, '2024-02-05 13:07:48', '2024-02-05 13:07:48', '2025-02-05 18:37:48'),
('8458cfe5fdd288225b3a7705eb1e20e5d4fbf2f70c5fbbc349f3145f4554850574aad870b6503ae6', 55, 1, 'MyApp', '[]', 0, '2024-01-31 13:11:54', '2024-01-31 13:11:54', '2025-01-31 18:41:54'),
('847a82c9d053dcaa079eea0dc107e76bf2ebc5f895285cb82c3f05037b5d7d9f217e798492399508', 56, 1, 'MyApp', '[]', 0, '2024-02-14 08:46:08', '2024-02-14 08:46:08', '2025-02-14 14:16:08'),
('8488603d7e43cbadd16e9990a4e5ac4b58455d47d49dc393367126890781597047c5ae169dbe1393', 141, 1, 'MyApp', '[]', 0, '2024-03-08 05:45:21', '2024-03-08 05:45:21', '2025-03-08 11:15:21'),
('84bfb92fc5b0ecb8ebb25fc7edef5cb5ea425f7aa767a9627d1014458eadb17f9ad55a8c1cc7baf9', 57, 1, 'MyApp', '[]', 0, '2024-01-22 04:58:45', '2024-01-22 04:58:45', '2025-01-22 10:28:45'),
('851013677a61eccecafb66533e0727bcd95178d69e984ac4e56d80cafa3e0448097276cf023c3a1d', 129, 1, 'MyApp', '[]', 0, '2024-03-08 04:47:34', '2024-03-08 04:47:34', '2025-03-08 10:17:34'),
('851efb234e30bca7825eb73d0200cdb5a83dbc439b7fcec65d6d2c6580e36e3fae40a2a114feafc0', 143, 1, 'MyApp', '[]', 0, '2024-03-11 12:55:51', '2024-03-11 12:55:51', '2025-03-11 18:25:51'),
('8562ef5bba5679d643635146d6901aa162710e8c1bcb1cd9f57e575179253e5e637f1f09693181fa', 12, 1, 'MyApp', '[]', 0, '2023-12-27 07:49:55', '2023-12-27 07:49:55', '2024-12-27 13:19:55'),
('8570600f2bdb83f69ff0dfd49a0911316b65e268568926115cd1ac99126dd93e22eb30261eb6197c', 146, 1, 'MyApp', '[]', 0, '2024-04-18 12:36:29', '2024-04-18 12:36:29', '2025-04-18 18:06:29'),
('85c3d2e0b92b7a6bb369f0d5cc9c145b2d5901b68c975e23be5d2ff7dec9c77fe52374f25280789c', 159, 1, 'MyApp', '[]', 0, '2024-04-25 05:43:22', '2024-04-25 05:43:22', '2025-04-25 11:13:22'),
('862ea2dcf44eaff5549695bf7dd9d8627362293f3be41559c369520528216c02c988822d21f3f327', 88, 1, 'MyApp', '[]', 0, '2024-03-02 07:13:51', '2024-03-02 07:13:51', '2025-03-02 12:43:51'),
('864d6d936287b2c7bec6f8d6916b6553043710c55d720e958b0d7e064a447487cbf18b23123df3bd', 72, 1, 'MyApp', '[]', 0, '2024-01-20 12:38:28', '2024-01-20 12:38:28', '2025-01-20 18:08:28');
INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('864ff55d624b71023ca62407093daa2cf3db12d269be2c31d237f706c2de3e167f41d6de9bd14f2b', 12, 1, 'MyApp', '[]', 0, '2023-12-13 04:48:11', '2023-12-13 04:48:11', '2024-12-13 10:18:11'),
('86a8344173b7939b2d34968587dcef27cbec13a6b8154f2011f2d970be09f938887f377d2e6e5dca', 6, 1, 'MyApp', '[]', 0, '2023-12-15 04:25:55', '2023-12-15 04:25:55', '2024-12-15 09:55:55'),
('86c1f188bd2cf8c89845c9bd2b0170a3a4268060a8a7e68102237b4c4ee559b77ba4e452ed0cb5de', 56, 1, 'MyApp', '[]', 0, '2024-01-22 06:01:59', '2024-01-22 06:01:59', '2025-01-22 11:31:59'),
('8702fd037a15bba5564fa6f6fa269e9fcb1bf0c63a4060cfca69c750ddd3c42295b6be632d086a3d', 139, 1, 'MyApp', '[]', 0, '2024-03-09 05:25:45', '2024-03-09 05:25:45', '2025-03-09 10:55:45'),
('871798251913fbc916cc79ae38da9e9ec13afd55d06b4be19b02d15e581d12293e53a19ac258efd8', 170, 1, 'MyApp', '[]', 0, '2024-03-30 08:20:54', '2024-03-30 08:20:54', '2025-03-30 13:50:54'),
('87277a40c36c78f1a75d866a7d7ab0d0e14db3f3b68a4cb905701b1b1b71b03165f7d6e849991c68', 168, 1, 'MyApp', '[]', 0, '2024-03-30 06:33:51', '2024-03-30 06:33:51', '2025-03-30 12:03:51'),
('87777191c36f7e78f57e5343ee76486bee956282b935fb010ce18d0e24647f9ead8404112a7e7098', 155, 1, 'MyApp', '[]', 0, '2024-03-19 06:45:22', '2024-03-19 06:45:22', '2025-03-19 12:15:22'),
('884489ff116f409dd473c646bffc70ef0944d9d24a94c66c8e4a9e6f0c930516fa5f542b49ea4bc8', 85, 1, 'MyApp', '[]', 0, '2024-02-05 11:28:22', '2024-02-05 11:28:22', '2025-02-05 16:58:22'),
('88fac424068bdd28dd1a9e70fb07ff2e637c1c1776e52c72659894fab1c1000ec6cc1bbf834f761b', 155, 1, 'MyApp', '[]', 0, '2024-03-19 06:37:34', '2024-03-19 06:37:34', '2025-03-19 12:07:34'),
('892cefe86d9060381ffdb0d4dfd411ee88974dcf6de0d38eb98b297ec56510bb641c7a9aa2883e99', 130, 1, 'MyApp', '[]', 0, '2024-03-08 06:53:05', '2024-03-08 06:53:05', '2025-03-08 12:23:05'),
('896615c94e087249ba591998679df7d2388da750b04f5808521e138d760399c7160d56f4fe4e03ea', 85, 1, 'MyApp', '[]', 0, '2024-02-07 11:27:31', '2024-02-07 11:27:31', '2025-02-07 16:57:31'),
('89a11f63682d386e4c55dd41e581c758e559d4f895f55b6dff9e986f4de08d5de52a6b1418517e50', 129, 1, 'MyApp', '[]', 0, '2024-03-08 07:36:44', '2024-03-08 07:36:44', '2025-03-08 13:06:44'),
('89e3d5b85deeddcd8bb64323e22e6d8a3f7b780ab02dd427460360e2fce483bd8e3675a6597e3367', 12, 1, 'MyApp', '[]', 0, '2023-12-18 09:43:45', '2023-12-18 09:43:45', '2024-12-18 15:13:45'),
('8a81a7895fc8bf59f3dcc20fbd42f04cbcf978404323dbeef6374fb2d94e10e71f12dfa8b57fa56d', 12, 1, 'MyApp', '[]', 0, '2023-12-29 06:28:54', '2023-12-29 06:28:54', '2024-12-29 11:58:54'),
('8b370bac0cf00d34427a25af6dbecd3aa50282fb49e0f69ca3c7d3948c0be0f9ac5eb9afa94861aa', 32, 1, 'MyApp', '[]', 0, '2023-12-21 06:18:37', '2023-12-21 06:18:37', '2024-12-21 11:48:37'),
('8bd8c1588a79226e33df2359585af8e37622303d96b920ad0f4e29707296f0468728aef4acbf02ad', 1, 1, 'MyApp', '[]', 0, '2023-12-15 05:35:10', '2023-12-15 05:35:10', '2024-12-15 11:05:10'),
('8be588a5c30514932d20d4fbffd7bacae3cda501945af3a57b5234a4736c88dd8bc5e995571c2d7a', 128, 1, 'MyApp', '[]', 0, '2024-03-09 13:57:54', '2024-03-09 13:57:54', '2025-03-09 19:27:54'),
('8c7750bdb51b4a185d4a5d5c459afcecf4e97f7ba28a4cf968c728295df96a281eb32f66fa7da3fd', 55, 1, 'MyApp', '[]', 0, '2024-02-05 13:08:48', '2024-02-05 13:08:48', '2025-02-05 18:38:48'),
('8cbb7f6cbae21c91e447dc5da34d60e7e84360f9a84bbfdd5dd6176dbb08b09bf65440ec942b80f8', 145, 1, 'MyApp', '[]', 0, '2024-04-23 06:58:07', '2024-04-23 06:58:07', '2025-04-23 12:28:07'),
('8ce0cb73693e34fab95291ea7cca3f6f8ebf9d30e0c1eb6c3efcb540e48a3608d8a55ce96e1088a7', 56, 1, 'MyApp', '[]', 0, '2024-01-22 05:06:31', '2024-01-22 05:06:31', '2025-01-22 10:36:31'),
('8d54310ac5962b53789f4d60847bf4b5c682e45e28b94f8f093dc0a3bc7e3433fd1d830d7e54000e', 115, 1, 'MyApp', '[]', 0, '2024-03-01 09:54:24', '2024-03-01 09:54:24', '2025-03-01 15:24:24'),
('8d9acb2237c89d003d9c9e49a0b4cda7eaf226cb40d15eff607c496fbda9f8f49b692d4d61ef8611', 129, 1, 'MyApp', '[]', 0, '2024-03-13 16:26:02', '2024-03-13 16:26:02', '2025-03-13 21:56:02'),
('8e03ea91f3f67c18203a4ed76257893973380e70b33cd475c18436fd359fde61a661b7c0660e53bc', 149, 1, 'MyApp', '[]', 0, '2024-03-15 12:59:13', '2024-03-15 12:59:13', '2025-03-15 18:29:13'),
('8e1261c9ed3ad682e39aa225d4d0ff145edd0fdbe1a479f2de948e59f2a5debdf88fd2cf292edc77', 80, 1, 'MyApp', '[]', 0, '2024-03-02 06:34:29', '2024-03-02 06:34:29', '2025-03-02 12:04:29'),
('8e17b1f501060fb3b4c318ab7d7c11df67ebc3daa8cfc29780cc18f7f38e791a162e24dc3aeb4764', 77, 1, 'MyApp', '[]', 0, '2024-02-28 15:51:04', '2024-02-28 15:51:04', '2025-02-28 21:21:04'),
('8e849dc0afecb3cd1321efb9a986cbe6796ae2f6800e00c78774cb5a375bf0e65a0a7f2fb0d38cbe', 142, 1, 'MyApp', '[]', 0, '2024-03-08 13:14:33', '2024-03-08 13:14:33', '2025-03-08 18:44:33'),
('8f1f69cefa1feb3a3cef1970575b89a35c340141afce8d91091a4c0a3ec88fe0d4666398cea55de6', 159, 1, 'MyApp', '[]', 0, '2024-04-16 21:54:57', '2024-04-16 21:54:57', '2025-04-17 03:24:57'),
('8f26773d8d296ba799a07bc6f9f830de3fb2111a2fc5c5d567beb875f823e18f9769751a8e0d805b', 129, 1, 'MyApp', '[]', 0, '2024-03-08 10:59:12', '2024-03-08 10:59:12', '2025-03-08 16:29:12'),
('8f6e14f3eddaa71fdde794a3d63ac9921cc0a5adcc57872f2ae363743c531a8abc8067ab537aa6dd', 61, 1, 'MyApp', '[]', 0, '2024-01-20 12:34:55', '2024-01-20 12:34:55', '2025-01-20 18:04:55'),
('8f865afb71ce65f224bb757eccc5add7ac830b3874e59a7240622c4ee7cfa88d805e3bfdb60d9b08', 129, 1, 'MyApp', '[]', 0, '2024-04-21 05:28:15', '2024-04-21 05:28:15', '2025-04-21 10:58:15'),
('901543fd1bfbc47c33069cd0136fd4566b4d1a09f743ad312836570f81cc603347ab9cec408a8b5b', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:25:54', '2023-12-11 06:25:54', '2024-12-11 11:55:54'),
('90273cfe579f61cc5c70bcb3909fc44241103d9b6c681cd03009cdd5786a7c48cdafd83b3bed7ec2', 129, 1, 'MyApp', '[]', 0, '2024-04-21 07:30:09', '2024-04-21 07:30:09', '2025-04-21 13:00:09'),
('903a7dc8221c4bba6df71f7a8889a1bee45655b15bf84e8867a46de1e698cfa8894160b0bb87aa46', 159, 1, 'MyApp', '[]', 0, '2024-04-18 13:40:30', '2024-04-18 13:40:30', '2025-04-18 19:10:30'),
('905b66f3889f75fcece6a1dc04b169402471f3de4eeb8a85ff0c7b37c3af38dd45cbf59f26807df7', 128, 1, 'MyApp', '[]', 0, '2024-03-06 05:48:46', '2024-03-06 05:48:46', '2025-03-06 11:18:46'),
('90768e1eb68e4d8554f2c5045b6274e9f9895fae3bafa51f2ca4ff49fad86252d38d5f0ba407e595', 60, 1, 'MyApp', '[]', 0, '2024-02-15 07:37:31', '2024-02-15 07:37:31', '2025-02-15 13:07:31'),
('9096d0cfda160af7ff5b149312edb10528150cc08fd4425720802278adfc765f5ba08650f6aa8e83', 172, 1, 'MyApp', '[]', 0, '2024-04-20 12:55:39', '2024-04-20 12:55:39', '2025-04-20 18:25:39'),
('90b25c941986b614bfc43350418a393229030e81d901bdf49b50adca7abc5c7dc96ac467ce3ee337', 6, 1, 'MyApp', '[]', 0, '2023-12-11 06:13:06', '2023-12-11 06:13:06', '2024-12-11 11:43:06'),
('90be7217d61de28bfcae77ececda86f676f3bbe0c64c501028bda30ca3140e651603387b14db9b2a', 139, 1, 'MyApp', '[]', 0, '2024-03-09 05:53:03', '2024-03-09 05:53:03', '2025-03-09 11:23:03'),
('918200aa6cc5456385c34e06b015e88aa7aeabad31d7b094cf3e96601a7b45d3561d0af547d06ad9', 90, 1, 'MyApp', '[]', 0, '2024-02-05 11:33:06', '2024-02-05 11:33:06', '2025-02-05 17:03:06'),
('91d146753c3a6c6cc6d368ce8cab7b33993dc3c2a7cbda95a57c9b4ebc77830ad5a69583b278b3b6', 182, 1, 'MyApp', '[]', 0, '2024-04-21 06:57:06', '2024-04-21 06:57:06', '2025-04-21 12:27:06'),
('91e983daf558760b6074e3b898875af1a6072b6757ea427ead7faeb9a5d32d02dc9ba2507b26ccee', 19, 1, 'MyApp', '[]', 0, '2023-12-29 11:22:04', '2023-12-29 11:22:04', '2024-12-29 16:52:04'),
('91f46c082477fa1d522fcf57daf8bb46c26fa15e529b02edd044fcb0cb44e6161a6300b594bd8a78', 12, 1, 'MyApp', '[]', 0, '2023-12-16 07:30:41', '2023-12-16 07:30:41', '2024-12-16 13:00:41'),
('92970dccd7c75c5c428c8f3fe61132af7ad644313e3a719ceab18e51a55689f7bec330a2993848b8', 129, 1, 'MyApp', '[]', 0, '2024-03-11 05:39:45', '2024-03-11 05:39:45', '2025-03-11 11:09:45'),
('92c6713d7323cfb3e0af77785921aea2444056cae127ba46143de991651c2e717e0b2b8689cb6a76', 9, 1, 'MyApp', '[]', 0, '2023-12-12 11:04:01', '2023-12-12 11:04:01', '2024-12-12 16:34:01'),
('92efaa99fd7d39cc611f30d406fc328322eb8f13f94b509ad52ec30a2dbf9c0222e90680dd518a43', 63, 1, 'MyApp', '[]', 0, '2024-01-20 12:35:04', '2024-01-20 12:35:04', '2025-01-20 18:05:04'),
('930f3c74c542e51a43d8c21d48a2b12c9ac44dd7c2a2ff2c6954e159b9332268ad186a43fb054d78', 78, 1, 'MyApp', '[]', 0, '2024-01-23 06:57:26', '2024-01-23 06:57:26', '2025-01-23 12:27:26'),
('935bd79b7db92819f07addf89ce0ab6ddd41436c72296fdffbd8d341a7e8420f9c905bdb5f13f898', 60, 1, 'MyApp', '[]', 0, '2024-02-14 05:56:56', '2024-02-14 05:56:56', '2025-02-14 11:26:56'),
('9393f308ace798ff7d0629cebdc188d81cff9aa3ea03ac12e9d3d5a02e0f49fadf8cf06fa438c38a', 62, 1, 'MyApp', '[]', 0, '2024-01-20 12:35:00', '2024-01-20 12:35:00', '2025-01-20 18:05:00'),
('93d70c664a052b75123d81a20bb2edaa6c4a80120ed2706d26fe1f39e3402c2f65f7f120577e1f08', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:23:04', '2023-12-11 06:23:04', '2024-12-11 11:53:04'),
('943f0a3e0b9d51654d3176d334aefe5f2c7244116b12a0583194fdf2606c98be5c1f675b483625d1', 155, 1, 'MyApp', '[]', 0, '2024-03-19 04:39:29', '2024-03-19 04:39:29', '2025-03-19 10:09:29'),
('9488c07cedcd870294f1ec08ac0a4f320674662d6c0a20fb17fe3323b9bb1011b3e353466a0b917b', 130, 1, 'MyApp', '[]', 0, '2024-03-06 14:11:50', '2024-03-06 14:11:50', '2025-03-06 19:41:50'),
('94a86aaebf64a4f97b63186a5082c87f05725dab83e1fd2f6f0e2968a7637b945c833d2ef86b368a', 11, 1, 'MyApp', '[]', 0, '2023-12-11 09:51:34', '2023-12-11 09:51:34', '2024-12-11 15:21:34'),
('94c0deae410b8c6c4fc13e8e68ad0ad8534a3649f1fe395292719eb29255da414c79ba08c341d651', 65, 1, 'MyApp', '[]', 0, '2024-01-20 12:35:15', '2024-01-20 12:35:15', '2025-01-20 18:05:15'),
('95478aca1114d571de982c00a4670d2b467391ed9415d59c41110cdee69e97e943cdc2e1b8161d3c', 145, 1, 'MyApp', '[]', 0, '2024-04-20 10:22:28', '2024-04-20 10:22:28', '2025-04-20 15:52:28'),
('954c4b342b008687804241438a392db5d61605183a153945622e5cb23c9b62a60827644b12ab1fee', 80, 1, 'MyApp', '[]', 0, '2024-01-24 10:01:31', '2024-01-24 10:01:31', '2025-01-24 15:31:31'),
('95bc35d688757d7635aa4541ba55a1397100684eb51976a9b68adeeb283610bcdfc1fc72bde1fc51', 172, 1, 'MyApp', '[]', 0, '2024-04-04 15:13:41', '2024-04-04 15:13:41', '2025-04-04 20:43:41'),
('961030a45f591b84d6a59340c5f68a751cfb6ed7e4b62fd9c106c586bd8c93b901191c919e994e61', 56, 1, 'MyApp', '[]', 0, '2024-01-23 11:19:35', '2024-01-23 11:19:35', '2025-01-23 16:49:35'),
('9657d35d8fd5bca9369ac63804576ca0ac8430052d998cff4252960f176d0b2cfd2ca4dd6a8982a4', 172, 1, 'MyApp', '[]', 0, '2024-04-05 06:04:55', '2024-04-05 06:04:55', '2025-04-05 11:34:55'),
('96663cf76bdea68e7fb971d4511389a0981bd0adcdec762df908e33324f411aaa31cd9ac417049e0', 10, 1, 'MyApp', '[]', 0, '2023-12-11 07:19:34', '2023-12-11 07:19:34', '2024-12-11 12:49:34'),
('96c823fb14f82f865359dcfb3d3077640c66d6081521d7f47aa81dc8b42d09e65404953e0ad7204e', 159, 1, 'MyApp', '[]', 0, '2024-03-26 13:24:35', '2024-03-26 13:24:35', '2025-03-26 18:54:35'),
('970e920fa43383d6e45a73ddb47e886237b28d05cbd56c46c5fd822ef6e1fd3bb051b04e5752e235', 51, 1, 'MyApp', '[]', 0, '2024-01-11 12:29:34', '2024-01-11 12:29:34', '2025-01-11 17:59:34'),
('9727ddd72f410391e481c81e796f9f2a24e8cdc02ea78d9db1966132d16cfee9ed82e1990c3470c7', 182, 1, 'MyApp', '[]', 0, '2024-04-04 13:31:40', '2024-04-04 13:31:40', '2025-04-04 19:01:40'),
('9774416cdf83115c21cf0fe928bc23e3d50c552549ab41fe248630a6057e2fd242b9cd42cde86fd1', 12, 1, 'MyApp', '[]', 0, '2023-12-28 07:13:08', '2023-12-28 07:13:08', '2024-12-28 12:43:08'),
('97a8b0a07928278fa36def0e82bb54dae8c690e21148285ba5bddfb867268321d654a66ea371a8f4', 129, 1, 'MyApp', '[]', 0, '2024-03-06 08:15:00', '2024-03-06 08:15:00', '2025-03-06 13:45:00'),
('982ca4c7c576877eb3e1ef23e7ec29c6a3efa117ab93df307d273730b241e9e1876f66dccf5b199f', 59, 1, 'MyApp', '[]', 0, '2024-01-23 09:07:11', '2024-01-23 09:07:11', '2025-01-23 14:37:11'),
('988f9e11b4c541da5ad1ad2d2c43aec465539db984ce90f0dae18275762a537080fb5cbe3c980a10', 128, 1, 'MyApp', '[]', 0, '2024-03-15 12:56:02', '2024-03-15 12:56:02', '2025-03-15 18:26:02'),
('98976b17e4049253943a6dc3cb8619c36351b1cbf278ad7dd3a0b12a8e2a112ee4c207269f4846bc', 126, 1, 'MyApp', '[]', 0, '2024-03-09 13:09:01', '2024-03-09 13:09:01', '2025-03-09 18:39:01'),
('99003d35fe76e738023453ab51a429a6fe97a34e6e5165fc3dcaa5c996b676e158a2f476b810320d', 146, 1, 'MyApp', '[]', 0, '2024-04-18 07:08:32', '2024-04-18 07:08:32', '2025-04-18 12:38:32'),
('994602aa8060319c1e0715501332145e78ec115baf627a7ce641fa4a0011980b3823880e3de753b2', 130, 1, 'MyApp', '[]', 0, '2024-03-13 16:29:29', '2024-03-13 16:29:29', '2025-03-13 21:59:29'),
('99465d652905eeb61b4b8d38a9e8d26c77465046f6cf2698658decfcde5c14a03ee300ac8f8f7852', 128, 1, 'MyApp', '[]', 0, '2024-03-11 07:47:56', '2024-03-11 07:47:56', '2025-03-11 13:17:56'),
('99473a31aaf9116b5ae424a892bdb344fe36b6bc3a40f336eb19e16860a4d55db46cf7a127b682f8', 80, 1, 'MyApp', '[]', 0, '2024-02-02 07:15:07', '2024-02-02 07:15:07', '2025-02-02 12:45:07'),
('994f13e296345667bd7c43bf6dba440d45facd6c703bbb89d92b4199fce30734cd7653c4fcabee2f', 159, 1, 'MyApp', '[]', 0, '2024-04-06 16:17:14', '2024-04-06 16:17:14', '2025-04-06 21:47:14'),
('99d700d0923a44ddd803868b03c0b1908e0d7f844b0e37af20ae4b5d39bd766886f45ee56fe3eb9f', 52, 1, 'MyApp', '[]', 0, '2024-01-11 14:21:08', '2024-01-11 14:21:08', '2025-01-11 19:51:08'),
('99f9eca819f5a968cb6266801df0b1f6ed36f647e1a692a3b1550c12d70c12a1071dd1a80bd6de0e', 146, 1, 'MyApp', '[]', 0, '2024-03-13 06:05:00', '2024-03-13 06:05:00', '2025-03-13 11:35:00'),
('9a15d21c5a76cd86094320cb6c8819e0bdcc72e4a63f15f39be36e1d8bab931615cdae1eaf353bfe', 20, 1, 'MyApp', '[]', 0, '2023-12-18 04:56:34', '2023-12-18 04:56:34', '2024-12-18 10:26:34'),
('9a4be96652707716238746ee7dee93cc37f88a708af98fa2631efc7243525014d89184ac42d429da', 188, 1, 'MyApp', '[]', 0, '2024-04-21 10:03:32', '2024-04-21 10:03:32', '2025-04-21 15:33:32'),
('9b442b44b24eb6c187c4ec855b44f0116937caf7a26ef79ba2f1efe2927a9b843c88308b1546f0a9', 130, 1, 'MyApp', '[]', 0, '2024-03-11 16:06:04', '2024-03-11 16:06:04', '2025-03-11 21:36:04'),
('9bb263785c1ac72d25e166716531c11181aa4635191b30dca22394e54fd3d7532c043039d8a14fde', 126, 1, 'MyApp', '[]', 0, '2024-03-06 05:04:59', '2024-03-06 05:04:59', '2025-03-06 10:34:59'),
('9c36858f2767973419179a0e6f0cca8219220b2741f8c7eb022777cd6bb882d4b82e30a5f7fc3199', 11, 1, 'MyApp', '[]', 0, '2023-12-12 10:48:32', '2023-12-12 10:48:32', '2024-12-12 16:18:32'),
('9c48aba542a5219232440a21d8a12a4cd789689ec2d7c04975c2eb99726ac5f4c5c9519f5de18b6e', 172, 1, 'MyApp', '[]', 0, '2024-04-17 15:11:07', '2024-04-17 15:11:07', '2025-04-17 20:41:07'),
('9c6e8bd2d31bd7bcbb018e85d5b2512912806a0b8b03aa0eae606c6fd4b8f09f68540ae474710583', 59, 1, 'MyApp', '[]', 0, '2024-02-01 17:56:13', '2024-02-01 17:56:13', '2025-02-01 23:26:13'),
('9c81bb8c68aa7ce1db89373f53b4aed3f69dd15b19a6bd2542f1489876d6437b9e95b8ce136902cf', 129, 1, 'MyApp', '[]', 0, '2024-04-27 06:51:00', '2024-04-27 06:51:00', '2025-04-27 12:21:00'),
('9cfbe49921a36ea67a0aabae7294893e181bf684a234f144175737da4e8093c39845f76b83f02a73', 159, 1, 'MyApp', '[]', 0, '2024-04-10 02:26:46', '2024-04-10 02:26:46', '2025-04-10 07:56:46'),
('9d98b797874eec88f876f65328d505578f7422c87dcca4639db670035c2ab0ac94b72c764169bcd1', 129, 1, 'MyApp', '[]', 0, '2024-03-20 07:47:21', '2024-03-20 07:47:21', '2025-03-20 13:17:21'),
('9d9f541e4f8b0b4733934f445fae4ac5ecfaff289619eeed68dbe70ad48b45143573676dd64406a5', 40, 1, 'MyApp', '[]', 0, '2023-12-29 04:51:55', '2023-12-29 04:51:55', '2024-12-29 10:21:55'),
('9ddac57f80dc4de8c955fb4bb88b4194ac393b03bb9af8bc45d16f57b6eaef5e02d0d3486db3fcb8', 56, 1, 'MyApp', '[]', 0, '2024-02-13 08:33:15', '2024-02-13 08:33:15', '2025-02-13 14:03:15'),
('9e07fe5bdbe5922877591471ebfe57a07d7a22869920d808e3a128991e7a87bcbc411a3330faba18', 11, 1, 'MyApp', '[]', 0, '2023-12-11 12:09:35', '2023-12-11 12:09:35', '2024-12-11 17:39:35'),
('9e111ffcf048c344d26aa32f39139c5fb6c9565c879757994405fb22412c46bedfad1666abe6e22a', 182, 1, 'MyApp', '[]', 0, '2024-04-21 10:23:20', '2024-04-21 10:23:20', '2025-04-21 15:53:20'),
('9e1530e176b5792a0f081cafa8be32ab97b38d1d4f8b8d81192ffb7ead37366cdd1b0d0926e866b4', 128, 1, 'MyApp', '[]', 0, '2024-03-09 07:16:15', '2024-03-09 07:16:15', '2025-03-09 12:46:15'),
('9e4a1a8bda38a5d4d5af0fb962d256b2fad97b5c30066651cd2e8f85d733ca596e55882787e5415b', 126, 1, 'MyApp', '[]', 0, '2024-03-07 04:32:50', '2024-03-07 04:32:50', '2025-03-07 10:02:50'),
('9e89f80c3b8b59673f84a97a062c2d476cb6e63f4f5b748638983a99b404b233fabe21c2d0d5533e', 130, 1, 'MyApp', '[]', 0, '2024-04-21 06:58:07', '2024-04-21 06:58:07', '2025-04-21 12:28:07'),
('9ea5a86a1dd2331f86b036adbc0f9563d3e0ef8072075a11d67f0a262b8b43b020cca8463814bc05', 83, 1, 'MyApp', '[]', 0, '2024-01-25 13:30:07', '2024-01-25 13:30:07', '2025-01-25 19:00:07'),
('9ed56048a03d7ae9d58f99232bf982af47e2ad92044959da1efabac7a2b81c25da676f37738545ab', 45, 1, 'MyApp', '[]', 0, '2023-12-29 11:33:34', '2023-12-29 11:33:34', '2024-12-29 17:03:34'),
('9f138e20a47b305cf80c9d363aedf51ec1a20ef1447a2210d6ccd6b18078cf2d470e808d33883236', 8, 1, 'MyApp', '[]', 0, '2023-12-11 05:46:57', '2023-12-11 05:46:57', '2024-12-11 11:16:57'),
('9f5d181b60c522c300fc3c271c82b49e2a2b69c8dc714ea0db080e8940513ddf7f8c0c50ca8b2d79', 172, 1, 'MyApp', '[]', 0, '2024-04-21 08:34:30', '2024-04-21 08:34:30', '2025-04-21 14:04:30'),
('9f6c825efa71ba3757a273e3d2b73e56aa3b3b4d1e9989f22b8c4c8a1c1048cc06c8b4acfbdf24eb', 56, 1, 'MyApp', '[]', 0, '2024-02-05 14:25:46', '2024-02-05 14:25:46', '2025-02-05 19:55:46'),
('9f8a2d6c5f00daca50d6b9ca883700643ab0cd9109ae06e06ec70b106bbe0f5c9e5541d7a5a77b65', 40, 1, 'MyApp', '[]', 0, '2023-12-29 09:04:57', '2023-12-29 09:04:57', '2024-12-29 14:34:57'),
('9fda37cb89db338cf7922a4994b8726719bbe096cadf1e97b83cde0641e035a9f56b59d8b4f46534', 159, 1, 'MyApp', '[]', 0, '2024-04-12 06:32:53', '2024-04-12 06:32:53', '2025-04-12 12:02:53'),
('9fe08d0ab1408db11ea63a1655257684976b05871d07f45d4b6effa1f59bf9605232007afaf28ea8', 11, 1, 'MyApp', '[]', 0, '2023-12-12 10:17:55', '2023-12-12 10:17:55', '2024-12-12 15:47:55'),
('a0019ccbd0e9896e300d2674d7b4a6c865e91208fd8301bfcb351957c4fd3da7f042e7b9ab7d4763', 156, 1, 'MyApp', '[]', 0, '2024-03-19 05:33:34', '2024-03-19 05:33:34', '2025-03-19 11:03:34'),
('a01b1cad3d05cef8e1322efb739f9ae7ff1a3e053ffe8089a95c3f7d4d419df05dbdb1733a4e361c', 85, 1, 'MyApp', '[]', 0, '2024-02-02 05:20:21', '2024-02-02 05:20:21', '2025-02-02 10:50:21'),
('a0afec382aa44741600c393b94e205d965e4881a03de94faf809b51c16630c88a98af2f94ec17d62', 129, 1, 'MyApp', '[]', 0, '2024-03-12 04:17:23', '2024-03-12 04:17:23', '2025-03-12 09:47:23'),
('a0ba1f60e77a4648c2459a59017fd93a46283d8802429ad040fc1445bf75f4355aa96e589dc37425', 60, 1, 'MyApp', '[]', 0, '2024-02-15 07:06:27', '2024-02-15 07:06:27', '2025-02-15 12:36:27'),
('a0fb3e020513cf3d5d6c0744343226308130e96e018376b57c702360566a4d66b8d13c905b6dd5cc', 56, 1, 'MyApp', '[]', 0, '2024-01-20 12:32:37', '2024-01-20 12:32:37', '2025-01-20 18:02:37'),
('a13c84e9b8b3b583047b599ddd22955ef1d3ebab4a673265f0b14f12b9d5c725e872968b1fa8896f', 12, 1, 'MyApp', '[]', 0, '2023-12-29 10:55:54', '2023-12-29 10:55:54', '2024-12-29 16:25:54'),
('a157d2164499232d7197ac46501100ea921e52f344b1431f7cb12de85af2436d1b0001aa849a49e3', 129, 1, 'MyApp', '[]', 0, '2024-04-19 16:20:37', '2024-04-19 16:20:37', '2025-04-19 21:50:37'),
('a1780836590089e13c7cedf0d91ac8b80372c279e55f18f26596c78aedb23cee5c5153fdfa69f9a6', 55, 1, 'MyApp', '[]', 0, '2024-02-05 13:53:26', '2024-02-05 13:53:26', '2025-02-05 19:23:26'),
('a17b503299163f8643e77b0b3e315d1e271c8a95db0c6490ca1f8b4659ee756369cf9cbd5f5e58d6', 9, 1, 'MyApp', '[]', 0, '2023-12-11 07:07:49', '2023-12-11 07:07:49', '2024-12-11 12:37:49'),
('a1a2d9fe12fdd6d6b986a623eae92d8823aca32b4f80b81b6342e5145d4cafc7a32258d163e2b3d9', 130, 1, 'MyApp', '[]', 0, '2024-04-21 06:24:40', '2024-04-21 06:24:40', '2025-04-21 11:54:40'),
('a21e7efc33d83a73b3777b269907edca87e6f56d5e5edc0cf4648ed7afc09ba1369c5daa3d4910e7', 159, 1, 'MyApp', '[]', 0, '2024-04-16 13:56:32', '2024-04-16 13:56:32', '2025-04-16 19:26:32'),
('a28beda6754c4791ccdeae440935ec6334959270b09cb7740f2ac30a3febb470c472e836428695e4', 132, 1, 'MyApp', '[]', 0, '2024-03-07 12:09:40', '2024-03-07 12:09:40', '2025-03-07 17:39:40'),
('a28c8f3b767dc487371adfab7fe6993ab3404fd47342c28d3a4c2c7cc9e4a8d7071ea19037f9078a', 145, 1, 'MyApp', '[]', 0, '2024-04-20 10:17:10', '2024-04-20 10:17:10', '2025-04-20 15:47:10'),
('a2a8cc2ff2fd502888e90b3d5a7bb89bc1ef2a092ac14b842bc3843e1695e5220402f5cf8cf810c9', 56, 1, 'MyApp', '[]', 0, '2024-01-31 06:02:26', '2024-01-31 06:02:26', '2025-01-31 11:32:26'),
('a2d087e3ac3e98e69a57f5ff8289fe643f9f850543a470e2c5674b4a58e790514d7964f34fb75dda', 146, 1, 'MyApp', '[]', 0, '2024-03-14 05:02:47', '2024-03-14 05:02:47', '2025-03-14 10:32:47'),
('a321471d4f30bd5ee7fb8aac90addea7dd92d2a521fcbc88f6cd038b08003d8ef9325f55e4c3cf73', 77, 1, 'MyApp', '[]', 0, '2024-01-23 02:24:58', '2024-01-23 02:24:58', '2025-01-23 07:54:58'),
('a3387f6fca225732842c5b8e2afcdfa84049973752180cb521ce3c3bd727b3287b371d98d2d4417c', 126, 1, 'MyApp', '[]', 0, '2024-04-23 06:33:11', '2024-04-23 06:33:11', '2025-04-23 12:03:11'),
('a33a60ca7cca4663a79deab23f76e30257d8f6d59c3f44423dea497db04209cc5613eb093d0a8144', 59, 1, 'MyApp', '[]', 0, '2024-01-23 10:15:55', '2024-01-23 10:15:55', '2025-01-23 15:45:55'),
('a3a978e9d671258df67c9822fa1988611765d905da3788dadbce40f018d0a34133202247be48b085', 146, 1, 'MyApp', '[]', 0, '2024-03-19 07:48:38', '2024-03-19 07:48:38', '2025-03-19 13:18:38'),
('a42a2f19541a213ecacbd86572d4749c7c7584fc03576725bf40186667f32d5f1f1d992b6ffb8269', 146, 1, 'MyApp', '[]', 0, '2024-04-17 05:21:42', '2024-04-17 05:21:42', '2025-04-17 10:51:42'),
('a4b02406bd04506fed87851927b03d380ff9063a3296d3a2d06bf23687d7ede697025e4512858d26', 111, 1, 'MyApp', '[]', 0, '2024-03-04 09:34:33', '2024-03-04 09:34:33', '2025-03-04 15:04:33'),
('a4ebde71b4b994b8acd7f167de8da19945b517c187ae645abed3b1f0fb7db39bc4a2d02ba9f34236', 182, 1, 'MyApp', '[]', 0, '2024-04-24 07:14:24', '2024-04-24 07:14:24', '2025-04-24 12:44:24'),
('a5304f2c4657aee32c9713b33b4fdfa9c3704c09b6570fbf50b25377b6a923c100fb5025d78963b9', 128, 1, 'MyApp', '[]', 0, '2024-03-13 11:03:22', '2024-03-13 11:03:22', '2025-03-13 16:33:22'),
('a5a74fbb44db306ec62736d2c0be831e00fdf30d26c394adf0964de13e7b267ad41c7fee56b5bb65', 172, 1, 'MyApp', '[]', 0, '2024-04-23 10:35:33', '2024-04-23 10:35:33', '2025-04-23 16:05:33'),
('a5dcf43a66f6d63bdc706d9e26fd8487bdd114f831feafa857086eb97dbfd712ced90f51fe79ad74', 20, 1, 'MyApp', '[]', 0, '2023-12-15 11:09:40', '2023-12-15 11:09:40', '2024-12-15 16:39:40'),
('a5ecb618ec66add84aea550f9d12a3cf9fbbbcc807016548b008ebfe79e72264f2115110afeb29b4', 139, 1, 'MyApp', '[]', 0, '2024-03-09 04:28:42', '2024-03-09 04:28:42', '2025-03-09 09:58:42'),
('a5f8f537eac4aee4fbd44c380e97b8490757308906cf67a6e4ecb0c75634f3b0b61c34da8769ce36', 85, 1, 'MyApp', '[]', 0, '2024-02-05 13:10:39', '2024-02-05 13:10:39', '2025-02-05 18:40:39'),
('a6aa8fcf7a28a50a36bbf22216f1d5723dd2c94fb04ee91402ab27dbb087b3c17d048599438dcbeb', 23, 1, 'MyApp', '[]', 0, '2023-12-15 09:57:36', '2023-12-15 09:57:36', '2024-12-15 15:27:36'),
('a743c486ec18d34addba9b9e2468aa0777bf45e236a76ead9b51fcffdfb0bf6592136d9ef426f9db', 143, 1, 'MyApp', '[]', 0, '2024-03-09 13:10:05', '2024-03-09 13:10:05', '2025-03-09 18:40:05'),
('a74bf291c5703f8762dbb7644bb5ac953d03733fb843246ba225b4fec7f866ce69cc45734e534664', 133, 1, 'MyApp', '[]', 0, '2024-03-07 13:00:16', '2024-03-07 13:00:16', '2025-03-07 18:30:16'),
('a756675b93e2a29fff200ba852fc8082fcec083e7bd6ac76ab27f0257750bc48708ff5a1e9bed556', 11, 1, 'MyApp', '[]', 0, '2023-12-12 07:18:37', '2023-12-12 07:18:37', '2024-12-12 12:48:37'),
('a7c50388f04fcb3bab542ac220cda3777d6174af4b17fabe505986625aeb6fca11e1defe7d58c968', 59, 1, 'MyApp', '[]', 0, '2024-02-05 09:44:31', '2024-02-05 09:44:31', '2025-02-05 15:14:31'),
('a840662883db739f8abc4ec6df0a60bf97ebd41eb71ba53ece086d2f59df73f5aceba48fdb6d2e38', 159, 1, 'MyApp', '[]', 0, '2024-04-15 06:13:45', '2024-04-15 06:13:45', '2025-04-15 11:43:45'),
('a862c0115a2a1958d19c01cf0924a50645cd8aa78bf34c6b4a891e366bf61002de43dd7c63755361', 81, 1, 'MyApp', '[]', 0, '2024-01-25 06:54:41', '2024-01-25 06:54:41', '2025-01-25 12:24:41'),
('a88478b30ca3ac68de6359e1a599589d172f5e5955dd929cdf83c6c40200c93def44896652052277', 56, 1, 'MyApp', '[]', 0, '2024-02-05 14:25:29', '2024-02-05 14:25:29', '2025-02-05 19:55:29'),
('a899b9515eec14645a659084be734f9b228d9ae3fafe39ce056465bfad8db6e7f9f750205b911053', 56, 1, 'MyApp', '[]', 0, '2024-01-29 07:54:18', '2024-01-29 07:54:18', '2025-01-29 13:24:18'),
('a8fa062bab773d8de66e7e0173332eb2794cc8ae64a7e9d3a50297b3f4d1402bfc2a9c0b890a3e84', 99, 1, 'MyApp', '[]', 0, '2024-02-06 13:52:23', '2024-02-06 13:52:23', '2025-02-06 19:22:23'),
('a9053fbf54e91bfc22a187993c332b5d4334c66b4e6e168ccf456d70f4b37fb95ce9a9a00ae90acf', 129, 1, 'MyApp', '[]', 0, '2024-03-12 14:28:47', '2024-03-12 14:28:47', '2025-03-12 19:58:47'),
('aa1e30add665a4c681844bb5ff24c1507c2c8cec74a7bac4578e153ea0ef75be429af52b9f8bd702', 83, 1, 'MyApp', '[]', 0, '2024-01-27 05:38:52', '2024-01-27 05:38:52', '2025-01-27 11:08:52'),
('aa73fa9ef2dbbd2c44919eddf41e0a20d9579d80273bea327c442556825d9dc313a9dd301a1c2748', 60, 1, 'MyApp', '[]', 0, '2024-02-15 06:38:08', '2024-02-15 06:38:08', '2025-02-15 12:08:08'),
('aabc05e70b85aaf87647432dd054e491d052aa718d62b9be0f4d61ffbd601c30acb332c209aac348', 132, 1, 'MyApp', '[]', 0, '2024-03-09 06:15:09', '2024-03-09 06:15:09', '2025-03-09 11:45:09'),
('ab6af1123d693a87821b93bd2e26fe00cd95203cd4b2557035728e5087fa4d04df5681cfbb5b25e8', 129, 1, 'MyApp', '[]', 0, '2024-03-06 14:10:38', '2024-03-06 14:10:38', '2025-03-06 19:40:38'),
('ab8123abc3f7016307c379f13f3f38ec474bc38a8bec48f5e9cf58a6bd2ba9e99aa20651abe781f7', 88, 1, 'MyApp', '[]', 0, '2024-03-05 15:20:04', '2024-03-05 15:20:04', '2025-03-05 20:50:04'),
('ab9cdfc4479352cd4342620a741502cccdbd88a09a2650dbc7e723386ad2c66fea3d6dfee2b73645', 12, 1, 'MyApp', '[]', 0, '2023-12-12 06:29:49', '2023-12-12 06:29:49', '2024-12-12 11:59:49'),
('abb354afb5cf5825f814dc755573f49f7af58e37f0b51ff3b1664f6c38fee61ac079f6ddf919c6cf', 172, 1, 'MyApp', '[]', 0, '2024-04-21 07:37:45', '2024-04-21 07:37:45', '2025-04-21 13:07:45'),
('abc9ea31874069d83a0a26d9851b8159fa829f95f16e3fd8247544af2b5ce1a724ba8a17eb722d39', 130, 1, 'MyApp', '[]', 0, '2024-03-08 07:49:26', '2024-03-08 07:49:26', '2025-03-08 13:19:26'),
('abfaac9ef89b261caaf248cffcd793eebea07c53473230cf508344e8981b1028767601b62ae67d04', 55, 1, 'MyApp', '[]', 0, '2024-02-06 05:22:54', '2024-02-06 05:22:54', '2025-02-06 10:52:54'),
('ac315e89d5eb195c393675f046824cd37a1e57f80b4b13e45ddb648c0a95c3a1aafbd2dba35fd4ef', 28, 1, 'MyApp', '[]', 0, '2023-12-16 13:07:51', '2023-12-16 13:07:51', '2024-12-16 18:37:51'),
('ad2fd11c62bff4797644f53ceceadcde80fc217b53d383a3413505893513bf75212ba5ca5d303ae3', 59, 1, 'MyApp', '[]', 0, '2024-01-22 04:50:36', '2024-01-22 04:50:36', '2025-01-22 10:20:36'),
('ad51c6109f5d3f43661d4f2b8a94268fbd9f4b713ba514c47e80ce606635bf8d9b23038f09916a5a', 182, 1, 'MyApp', '[]', 0, '2024-04-11 19:09:06', '2024-04-11 19:09:06', '2025-04-12 00:39:06'),
('ad83af7dc42f7e8693d0114410060e0d519dc4ff45551f60eab048051a4d47a06df4c97f1e43a0f0', 139, 1, 'MyApp', '[]', 0, '2024-03-09 06:21:31', '2024-03-09 06:21:31', '2025-03-09 11:51:31'),
('ae9c6c5805f54f9435af4cf24425d60fec6ce05051798f710bd383864389aaf830b0ea0bac7ab827', 9, 1, 'MyApp', '[]', 0, '2023-12-12 05:05:12', '2023-12-12 05:05:12', '2024-12-12 10:35:12'),
('aefde030ce569488f73ccd15818827bd02160f1b268a8791bab940108a5e3ba8467861732249a2c9', 33, 1, 'MyApp', '[]', 0, '2023-12-21 06:26:11', '2023-12-21 06:26:11', '2024-12-21 11:56:11'),
('af2c7b27399757b5672bcf918c5d24a5ab8741b98a58d3060021728d68f997b8dfe017138b0dffd5', 87, 1, 'MyApp', '[]', 0, '2024-02-03 04:29:18', '2024-02-03 04:29:18', '2025-02-03 09:59:18'),
('af49a809184914acb6d989fb86f54d711cef87193ef0f4eff5bb0ad3c5e5a043c645257afe814ba3', 56, 1, 'MyApp', '[]', 0, '2024-01-22 05:57:14', '2024-01-22 05:57:14', '2025-01-22 11:27:14'),
('af5f7f1ac2cb010880d1fa92847940264c850335f6a7cbd1fda616f2ccfb302b69777a5fdc9a25b4', 80, 1, 'MyApp', '[]', 0, '2024-02-27 06:25:45', '2024-02-27 06:25:45', '2025-02-27 11:55:45'),
('afa51e5c365a194b7b63a1079b95b522c9753f00a012ebd9c5669334a62761379971b8ea30737624', 125, 1, 'MyApp', '[]', 0, '2024-03-05 13:01:27', '2024-03-05 13:01:27', '2025-03-05 18:31:27'),
('aff23d9c28c2c06a9b751e4e8f61adc71a6739b68bd8ffb3969a9886015eb4063c9dafb62a4bafda', 59, 1, 'MyApp', '[]', 0, '2024-02-15 07:11:01', '2024-02-15 07:11:01', '2025-02-15 12:41:01'),
('b07c164abbfe6eb3082e16dac7e3a39ef3a9f9181bed8e693b63a49ab3cae768cf47702278bcd824', 149, 1, 'MyApp', '[]', 0, '2024-03-15 12:34:37', '2024-03-15 12:34:37', '2025-03-15 18:04:37'),
('b0fdb14629965419d25633c8e75dd7e59a6513da1b1599d8afc71960ec9a0543095f35e6e3473e0f', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:24:18', '2023-12-11 06:24:18', '2024-12-11 11:54:18'),
('b152974bd76b2040f01a2f21335ad3d9c3a3350e624e87391892c1a901d1db89925b201de7643b7c', 149, 1, 'MyApp', '[]', 0, '2024-03-15 04:56:35', '2024-03-15 04:56:35', '2025-03-15 10:26:35'),
('b167c450b9fd81a38b31c9928f5608915298c114cb171a8e4587c6354a8dc455b32e1c056c17831a', 159, 1, 'MyApp', '[]', 0, '2024-04-25 09:03:21', '2024-04-25 09:03:21', '2025-04-25 14:33:21'),
('b170753165cca99df7ef55c3012236a0bd941ce9a00c61f100ed86502b8393d63531a01651bb2206', 80, 1, 'MyApp', '[]', 0, '2024-02-06 09:25:31', '2024-02-06 09:25:31', '2025-02-06 14:55:31'),
('b18918e57910891c0a0e1859d2359407a08b521993835cc4116f2ccdf321b04a3ee77ca08197a460', 130, 1, 'MyApp', '[]', 0, '2024-03-14 16:42:42', '2024-03-14 16:42:42', '2025-03-14 22:12:42'),
('b28c39057d435ab17a98e695db68ef174cacefa4c550b0f5dc3d6b14867fcbf3947e99a971aabb62', 60, 1, 'MyApp', '[]', 0, '2024-01-23 12:29:10', '2024-01-23 12:29:10', '2025-01-23 17:59:10'),
('b2a848be7d4fe9358454fe8a7b5ce272417216a2b4d424114ea9d1a0634296b2c8d8fd3b5ab13d81', 145, 1, 'MyApp', '[]', 0, '2024-03-12 12:36:32', '2024-03-12 12:36:32', '2025-03-12 18:06:32'),
('b31af86a5ed11a043e25091323f0962f3455c754e571cd525cf5c0d09a20e2be64225bf82eaa98f6', 81, 1, 'MyApp', '[]', 0, '2024-01-31 08:01:46', '2024-01-31 08:01:46', '2025-01-31 13:31:46'),
('b44d78d7270303a2ef1aa9270b6fa61bcfbcda27391022230c408cc188aace1f81f2eb40ecf3156e', 56, 1, 'MyApp', '[]', 0, '2024-01-31 04:55:45', '2024-01-31 04:55:45', '2025-01-31 10:25:45'),
('b4558d28c75419c5d119424a4a72d51961978f80cc367a1c845f18cdccf9966a8f1363e763436fd7', 11, 1, 'MyApp', '[]', 0, '2023-12-12 07:18:30', '2023-12-12 07:18:30', '2024-12-12 12:48:30'),
('b4b2b60f2ba966b5e0cb11ac6327486c56adfda8141891f854d037f77610720977a866ec8d362e7d', 172, 1, 'MyApp', '[]', 0, '2024-04-16 10:25:38', '2024-04-16 10:25:38', '2025-04-16 15:55:38'),
('b4b6d2f083d49a47fcc4267a7a49fe8a9cab34b73fb5cbf3564e7e7eb3f3e1ddce5a262e86791cc2', 57, 1, 'MyApp', '[]', 0, '2024-01-22 05:06:41', '2024-01-22 05:06:41', '2025-01-22 10:36:41'),
('b4c3b24c0d236d3fba037ce4a7c96a3197e69a41bce25b1b5b7643bb5a68cec6fa5e77642535f6b4', 12, 1, 'MyApp', '[]', 0, '2023-12-15 11:12:45', '2023-12-15 11:12:45', '2024-12-15 16:42:45'),
('b51bd01fe86f85979bb2d442094d116ad05a5ee02003e3580f510cef21e1541d132606a1fddd3897', 6, 1, 'MyApp', '[]', 0, '2023-12-16 07:35:18', '2023-12-16 07:35:18', '2024-12-16 13:05:18'),
('b523a1bf92d24a6e59f8fc010504ecea72f3972aed3d8deab58089e450a865c09a722daeeb1b6cae', 130, 1, 'MyApp', '[]', 0, '2024-03-12 06:06:14', '2024-03-12 06:06:14', '2025-03-12 11:36:14'),
('b52cd0dc3e8e91c54bf75de710c0eacf2db597630dac8fc505ac0f81a632a6af14f1b0a2df837db2', 55, 1, 'MyApp', '[]', 0, '2024-02-06 13:55:48', '2024-02-06 13:55:48', '2025-02-06 19:25:48'),
('b536c1430fe4e11cf8681f990a6710b547d2858b445d63561464823fa34672083d1586ca9a1dd972', 11, 1, 'MyApp', '[]', 0, '2023-12-12 10:40:05', '2023-12-12 10:40:05', '2024-12-12 16:10:05'),
('b5cb210e9ca5ac49f4ba9a45f17c1942fc890bbb54bdabcb1e0b7a273d8dbca21bd31da2be8e2676', 105, 1, 'MyApp', '[]', 0, '2024-02-21 09:38:54', '2024-02-21 09:38:54', '2025-02-21 15:08:54'),
('b6197b991d9b61efa2f7ad5a78e6210c2d3057597ae8184eade8d575948d86c62ac2ecb3ee359538', 107, 1, 'MyApp', '[]', 0, '2024-02-27 06:26:07', '2024-02-27 06:26:07', '2025-02-27 11:56:07'),
('b638b4fe1781350cac2459b63c70678de1d4a3c1ff067650e02e7db56d6a041d79df38b3ac91f576', 56, 1, 'MyApp', '[]', 0, '2024-01-31 12:26:56', '2024-01-31 12:26:56', '2025-01-31 17:56:56'),
('b78b1b4cf45acaea45c1f88bb43223a03e4425e04136f95fb0f75c761a7e197bd4b2de29cc2d06e6', 12, 1, 'MyApp', '[]', 0, '2023-12-15 09:37:59', '2023-12-15 09:37:59', '2024-12-15 15:07:59'),
('b7b5e228c26b5b3f3880827d3ef640ba0c0006c2575845d50cabf76bf94054429c1c02295573bcc6', 60, 1, 'MyApp', '[]', 0, '2024-02-15 07:32:42', '2024-02-15 07:32:42', '2025-02-15 13:02:42'),
('b847408e8c0a3898d227e8e5ab0147562cc4c6dcc5cbc3e58e82eed91a13300df082766c9d89d362', 11, 1, 'MyApp', '[]', 0, '2023-12-11 11:22:28', '2023-12-11 11:22:28', '2024-12-11 16:52:28'),
('b85a903615b03d4bf20705a1cb529ec179c762acbcd8fe6518527fba458416306ffea2beb651136a', 66, 1, 'MyApp', '[]', 0, '2024-01-20 12:36:39', '2024-01-20 12:36:39', '2025-01-20 18:06:39'),
('b8bd6984ca8f7429c8ea8c339e640278d13581edcc2f98056d22fb32cfa52e6a226dc4622a77f3d4', 172, 1, 'MyApp', '[]', 0, '2024-04-21 07:42:07', '2024-04-21 07:42:07', '2025-04-21 13:12:07'),
('b8cc6357c208b2b631b5330d6ffd75497491c4bc5c27c4c7a7739213b2edac8237bd76525beefdd8', 182, 1, 'MyApp', '[]', 0, '2024-04-04 13:14:30', '2024-04-04 13:14:30', '2025-04-04 18:44:30'),
('b90ad49a84b08ee94775f6d065fe8a0a737561722c8958e7e855877697e114a4f9f7648b06ec8592', 139, 1, 'MyApp', '[]', 0, '2024-03-15 10:57:52', '2024-03-15 10:57:52', '2025-03-15 16:27:52'),
('b90b8c24b65687e53b23ade8fecca355fc3e66d4f22f7528718ae6577db7de2bdf9dfc0808c3f7e2', 130, 1, 'MyApp', '[]', 0, '2024-03-12 14:25:09', '2024-03-12 14:25:09', '2025-03-12 19:55:09'),
('b98b08f6d0b2f085b99d2e44848ffa7f145d7f7fabb0b62d5f15dfa22eaaa15ecb2c87f2349631f8', 23, 1, 'MyApp', '[]', 0, '2023-12-15 10:07:32', '2023-12-15 10:07:32', '2024-12-15 15:37:32'),
('b98e962fd48991fd61eadeeb38876d67a41a14554cf40bb20ad5fd0770bdcefc1b188c22cb129268', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:56:19', '2023-12-11 06:56:19', '2024-12-11 12:26:19'),
('b9a7a1993c198275883fca26b6918729d886bbb07be6245bd0cbd62160f618e01b727d6bc285f3c4', 81, 1, 'MyApp', '[]', 0, '2024-02-01 09:39:04', '2024-02-01 09:39:04', '2025-02-01 15:09:04'),
('b9c445892925075c088d524f5f988b5327529370300a5f8d6d8a928d3f3d93a4e61c376ed5dd9c9f', 101, 1, 'MyApp', '[]', 0, '2024-02-06 14:10:24', '2024-02-06 14:10:24', '2025-02-06 19:40:24'),
('ba120dea97bd86c4ba3bf50f9ac67c9c57f89c5cd62cf3b020f2b23eb509ea4782a0700bed07b708', 80, 1, 'MyApp', '[]', 0, '2024-02-02 12:57:50', '2024-02-02 12:57:50', '2025-02-02 18:27:50'),
('ba45e9398fc0bb7da66af23a04ef8a4d0053113543bdd01ef51be00d00b2e3e6848f6e9f2dad0c29', 7, 1, 'MyApp', '[]', 0, '2023-12-11 05:12:14', '2023-12-11 05:12:14', '2024-12-11 10:42:14'),
('ba62230147673c14c7c65d344b14a09fb527292560d45ef8838c9729eec2b831edc02907fd7f262c', 41, 1, 'MyApp', '[]', 0, '2023-12-29 04:56:44', '2023-12-29 04:56:44', '2024-12-29 10:26:44'),
('babc5447ed3463887beebdae9a4642369b2cc2019daa47bb3da4d250e672b057be149d68aad0c58e', 80, 1, 'MyApp', '[]', 0, '2024-03-02 06:33:53', '2024-03-02 06:33:53', '2025-03-02 12:03:53'),
('bb33d1b3cfdfd038400ac5422d6c940d79247c370232fc760d49963bbdf5e82d4af1706b7641308d', 129, 1, 'MyApp', '[]', 0, '2024-03-12 14:26:58', '2024-03-12 14:26:58', '2025-03-12 19:56:58'),
('bb5ea0f53d63043f3dc16984749336e7e4b4e89ae61cfbf81bbd1aa20705d68393cdbe1c51d899ce', 12, 1, 'MyApp', '[]', 0, '2023-12-15 13:33:47', '2023-12-15 13:33:47', '2024-12-15 19:03:47'),
('bb93dd6a72bef03775a96e6dc25384798e884235a2d1fd139ad96d266606058a69ca4341d8879506', 172, 1, 'MyApp', '[]', 0, '2024-04-04 13:22:24', '2024-04-04 13:22:24', '2025-04-04 18:52:24'),
('bbfcdd5023cdff4923bc063b10e63b3615f69484a667992249d2e781539344a97079e1e8f9a77b31', 17, 1, 'MyApp', '[]', 0, '2023-12-15 04:13:34', '2023-12-15 04:13:34', '2024-12-15 09:43:34'),
('bc07c0e1bc75157915423df7f0dedc4bdbc4a8da6fbc5abbbf0ef3d20ba2a21973a14fd9fd9972ea', 53, 1, 'MyApp', '[]', 0, '2024-01-12 04:42:46', '2024-01-12 04:42:46', '2025-01-12 10:12:46'),
('bc1278a8b60a41b50911219cbbebe2be6255884ed17b1ef28adc9fead2a22b33f966e176edba66c2', 182, 1, 'MyApp', '[]', 0, '2024-04-15 12:58:34', '2024-04-15 12:58:34', '2025-04-15 18:28:34'),
('bc3851e559a03e4a3ab698a9ef8390d732b0f3e2e826c0908b77a7dbafb53580f5aa938bea9b0c9f', 184, 1, 'MyApp', '[]', 0, '2024-04-04 17:09:13', '2024-04-04 17:09:13', '2025-04-04 22:39:13'),
('bc58a1b728f2262475875d157e33a1cda396bdd5eb36c2bae066904f77ee9782f82768aa05ece80b', 55, 1, 'MyApp', '[]', 0, '2024-01-25 13:29:50', '2024-01-25 13:29:50', '2025-01-25 18:59:50'),
('bd3b7e05aaf45df663247011f2c403b8abe509b24504e31136e2ff75e0a5ab34eda106324767e644', 81, 1, 'MyApp', '[]', 0, '2024-02-03 12:02:30', '2024-02-03 12:02:30', '2025-02-03 17:32:30'),
('bd754679516c508c1190141c4b0ddf9df8d379083aac1f7add281c2e5bf9aae3760da5ac1b7b494a', 130, 1, 'MyApp', '[]', 0, '2024-04-22 13:27:15', '2024-04-22 13:27:15', '2025-04-22 18:57:15'),
('bd877a22657d9f13e096ba99590ffc523534f0aa7071e93fdda5097ec8b73542afcced34421e7c9a', 59, 1, 'MyApp', '[]', 0, '2024-01-31 13:17:17', '2024-01-31 13:17:17', '2025-01-31 18:47:17'),
('bda0a349e664965026fe9feecc406f747b9f3ff48d0cf4f3cf9899faf8b8ddad834bfb80b0f9f7ba', 76, 1, 'MyApp', '[]', 0, '2024-01-22 15:15:51', '2024-01-22 15:15:51', '2025-01-22 20:45:51'),
('bda41536679b3b1c3fc0ccc9bc6c3c5ef645ac54fcb3b7119f549feb4ca2371e8a4552d1d11dc32e', 187, 1, 'MyApp', '[]', 0, '2024-04-22 06:25:35', '2024-04-22 06:25:35', '2025-04-22 11:55:35'),
('bdd2ef8f0bf0b5ad01648f9326c86fe0fe94622d6ea77828861842f900115c2868bd48d1beb24790', 88, 1, 'MyApp', '[]', 0, '2024-03-03 16:16:40', '2024-03-03 16:16:40', '2025-03-03 21:46:40'),
('be39286cdafc89d345ed430ad6fc7969bb30329ffe96b7693c3bf6f40106362d89281c35632c4b95', 76, 1, 'MyApp', '[]', 0, '2024-03-02 11:54:13', '2024-03-02 11:54:13', '2025-03-02 17:24:13'),
('be894347d3075b0479a0c6b1ca18d471796632f1d5267eb70e5f805b390cf6f512656b3b1f3556bb', 80, 1, 'MyApp', '[]', 0, '2024-02-29 09:52:49', '2024-02-29 09:52:49', '2025-03-01 15:22:49'),
('beaf3e1311f83b81ca137cc4db7f9eba6e67cb997c9d0c3ae6936a7a410f25f2ce9e184b1170f47e', 55, 1, 'MyApp', '[]', 0, '2024-02-06 09:43:01', '2024-02-06 09:43:01', '2025-02-06 15:13:01'),
('bf03aa4da474132561e6e0664daaef72012856153c2dfa568e8d0d6625249497bcde242896b18f26', 80, 1, 'MyApp', '[]', 0, '2024-02-05 13:09:39', '2024-02-05 13:09:39', '2025-02-05 18:39:39'),
('bf0dfa3ee19934062f08486fa0f1449d06e73f3f7375ddc9a2f0184f6c6c9ac24904b00ed1c45792', 11, 1, 'MyApp', '[]', 0, '2023-12-11 12:34:40', '2023-12-11 12:34:40', '2024-12-11 18:04:40'),
('bf56f842ed3d4b26674081326971bfec6aada905bf783011948dbf43bf5bd3d9df2d5e9934f3a1d5', 81, 1, 'MyApp', '[]', 0, '2024-01-24 11:09:12', '2024-01-24 11:09:12', '2025-01-24 16:39:12'),
('bf97744493f69d2f6a072c55620f0a98d612bf0ddf31b2a2143709ca7284e8710c3768c0cec24033', 80, 1, 'MyApp', '[]', 0, '2024-01-24 08:46:49', '2024-01-24 08:46:49', '2025-01-24 14:16:49'),
('c07dd286775441f9269d02fb5ab273592aaddce02e9557c1c556bab5bc61d1177919a6929bfc12f2', 24, 1, 'MyApp', '[]', 0, '2023-12-15 14:55:07', '2023-12-15 14:55:07', '2024-12-15 20:25:07'),
('c09490a1b3d84715b5d6f9b08eaad0dd6f81b6e0898bc81f81b3602a7342ec566b9280b887dce663', 13, 1, 'MyApp', '[]', 0, '2023-12-12 11:09:39', '2023-12-12 11:09:39', '2024-12-12 16:39:39'),
('c11ad07dde27ed7b7beba1c45d7753a7637496e1e17536c8dd9571dbd28f390466304d54dcb38b43', 85, 1, 'MyApp', '[]', 0, '2024-02-07 05:51:56', '2024-02-07 05:51:56', '2025-02-07 11:21:56'),
('c121e9f98a1fa8881b747a43a8f6e5dc1899f7ec76fae4c6debe80be0652c8d6a8f99211b4a4a5bb', 129, 1, 'MyApp', '[]', 0, '2024-03-07 05:29:58', '2024-03-07 05:29:58', '2025-03-07 10:59:58'),
('c13024bfb42b867f0d808d28212a8453813636602822d71759e5036235bd38ab4852721a8b907597', 42, 1, 'MyApp', '[]', 0, '2023-12-29 04:55:38', '2023-12-29 04:55:38', '2024-12-29 10:25:38'),
('c13381e7ad11cd1fb44ed04b2688002aadce12a46806e3c367f705eb6ec6fa0132d3fc5577ef4ba0', 6, 1, 'MyApp', '[]', 0, '2023-12-14 11:48:24', '2023-12-14 11:48:24', '2024-12-14 17:18:24'),
('c14b9d1137e1bbfeb45b253c0402e11fe9c0b99c79d2792298f15868fca3049afe50dfc84cb718bb', 74, 1, 'MyApp', '[]', 0, '2024-01-20 12:38:36', '2024-01-20 12:38:36', '2025-01-20 18:08:36'),
('c155e34cd477c8e2b73aed9d08ab3b1b56d36e4d49bab7bf116c56b9fd9409ababe3a37aeb772b8d', 126, 1, 'MyApp', '[]', 0, '2024-03-15 13:09:08', '2024-03-15 13:09:08', '2025-03-15 18:39:08'),
('c156628fb4a6fc8d8783f7b6ca6fa2bd3894b04ba6f4fe5a0b97bcf999ee491e5cab8c115ab6bfb5', 179, 1, 'MyApp', '[]', 0, '2024-04-02 17:40:49', '2024-04-02 17:40:49', '2025-04-02 23:10:49'),
('c1a08fda6d27c3c829d13c9748ae4df26a97a2986d2e07e8899e612fbee8df0e4c9a0712f76fb3b5', 129, 1, 'MyApp', '[]', 0, '2024-03-08 06:54:15', '2024-03-08 06:54:15', '2025-03-08 12:24:15'),
('c1ae0d6caefe4e1e62464afb63b0a8d6d1ec04fe05d3fa18fb91dc37dda40f25639b745bac6412a6', 80, 1, 'MyApp', '[]', 0, '2024-02-02 05:57:47', '2024-02-02 05:57:47', '2025-02-02 11:27:47'),
('c1ff5452a4ccc703d6efe35f1a1e4fdfbe95c4848ce41329282492910add2900cea89c36e600d3b8', 130, 1, 'MyApp', '[]', 0, '2024-03-10 14:38:21', '2024-03-10 14:38:21', '2025-03-10 20:08:21'),
('c220927d9b7b15cd5762e87e5a4146da0f73da50e7d257cebdb4ce554abc6b1b3bda5392f303337f', 12, 1, 'MyApp', '[]', 0, '2023-12-24 04:56:44', '2023-12-24 04:56:44', '2024-12-24 10:26:44'),
('c2699957d5888ecba3bf0c4ae9bdcc79c80085482b44d4d1c584d2dc5479ad2d0a2bc7d4bf86999a', 172, 1, 'MyApp', '[]', 0, '2024-04-17 07:54:08', '2024-04-17 07:54:08', '2025-04-17 13:24:08'),
('c26ab5334d67002b6d4c9356f62498bb0d1142ca2f4b8b7abc030b894847356f1d3bf21d8cfd1cff', 11, 1, 'MyApp', '[]', 0, '2023-12-11 07:44:01', '2023-12-11 07:44:01', '2024-12-11 13:14:01'),
('c26b0dfc56425b12e6c772dd854a4d229e6fce23e8e16b9f4df7157523ed8933a7083086d041aa6b', 130, 1, 'MyApp', '[]', 0, '2024-03-08 07:32:44', '2024-03-08 07:32:44', '2025-03-08 13:02:44'),
('c2737ceae51603df49f1dc06274f0d00b47da33a6ce72e39498f2b369d6b2b61a0615fb40976672a', 6, 1, 'MyApp', '[]', 0, '2023-12-12 05:53:14', '2023-12-12 05:53:14', '2024-12-12 11:23:14'),
('c2827323437a1cdec9794df74c780f32e9ffac1982d87b5d68bef406f693f5523f3382aed9d70b7b', 57, 1, 'MyApp', '[]', 0, '2024-01-31 04:54:22', '2024-01-31 04:54:22', '2025-01-31 10:24:22'),
('c2872c53695e9097a9d01fb8f84c6219d4a3afede8dcab8bb15b8fd036782b76c2170bd2343a7c84', 80, 1, 'MyApp', '[]', 0, '2024-01-25 09:55:40', '2024-01-25 09:55:40', '2025-01-25 15:25:40'),
('c2896bf8cb35b78636ef109e545d9073d8363de2b2da2fd81b21f9726327a18b3e93b6ece6c9aae9', 126, 1, 'MyApp', '[]', 0, '2024-03-13 09:59:50', '2024-03-13 09:59:50', '2025-03-13 15:29:50'),
('c2c4948f2efda0a614f5627ea1f1d4a2b0795510d2047352ab55ddd81e659f6a5134d475af60e8fc', 23, 1, 'MyApp', '[]', 0, '2023-12-15 09:42:52', '2023-12-15 09:42:52', '2024-12-15 15:12:52'),
('c2f8e569e9640bf75039a13caccc86daf0a80a3dfd7d0d9d950767d7384d32ddfed27dcfeaddb5df', 182, 1, 'MyApp', '[]', 0, '2024-04-09 07:59:00', '2024-04-09 07:59:00', '2025-04-09 13:29:00'),
('c318a5135338c797aa78015de9a9185ef0a06030350c5560df28649774f8b43dc72687a5e17571b5', 12, 1, 'MyApp', '[]', 0, '2023-12-12 04:39:26', '2023-12-12 04:39:26', '2024-12-12 10:09:26'),
('c31f7d7608ac7f6f2474ae67b04a8c68157439db80493b076710113142a8dc8219e746907ba5c6d5', 80, 1, 'MyApp', '[]', 0, '2024-03-02 06:04:59', '2024-03-02 06:04:59', '2025-03-02 11:34:59'),
('c3d04dfc33dde59155234decba12322e55bb52650bc3436a8ea39a472baa2c85c960a2c5c119d9c9', 126, 1, 'MyApp', '[]', 0, '2024-03-08 07:24:12', '2024-03-08 07:24:12', '2025-03-08 12:54:12'),
('c408f5c3791e38abc248850c41c58aa35972d6764aff9b08a7f556e26694ccabb7d789e1868a8324', 80, 1, 'MyApp', '[]', 0, '2024-02-03 04:23:55', '2024-02-03 04:23:55', '2025-02-03 09:53:55'),
('c507392de99980fc041fd28f4a4b35e9e5472a8512a7068e3b788b0228183a6d6d70c8dcbad6bc69', 30, 1, 'MyApp', '[]', 0, '2023-12-18 10:22:50', '2023-12-18 10:22:50', '2024-12-18 15:52:50'),
('c69aab0c13ffb2fb8da15aa3e9c676d0db6a2505950ce9a057a1e7c5de6240b13fc6d579860ee643', 173, 1, 'MyApp', '[]', 0, '2024-03-30 16:44:51', '2024-03-30 16:44:51', '2025-03-30 22:14:51'),
('c69c63e375f52eab1182332eb86e74c6a3b9492e40c09c361b11c2c4b1af66a2eb38742f9196670f', 12, 1, 'MyApp', '[]', 0, '2023-12-29 05:18:38', '2023-12-29 05:18:38', '2024-12-29 10:48:38'),
('c6e2fcd99789a1986b5b687766ffe1e5daacf2195eb6f10ea956f47dca3e15f74721ddc2d2d65a1f', 12, 1, 'MyApp', '[]', 0, '2023-12-26 13:42:36', '2023-12-26 13:42:36', '2024-12-26 19:12:36'),
('c6f42b1e8a4b7a885e9006ca56ad47c03c7b22719c0fbc9cbfa3858b90cbe6118b6b12ff5877b9b0', 67, 1, 'MyApp', '[]', 0, '2024-01-20 12:36:43', '2024-01-20 12:36:43', '2025-01-20 18:06:43'),
('c74a5482ae6155e45b027fa32b70fded44d3c3222bdd247161464d1c4d1e526923425cd03f5029eb', 132, 1, 'MyApp', '[]', 0, '2024-04-18 12:22:18', '2024-04-18 12:22:18', '2025-04-18 17:52:18'),
('c750c9f66120fff88ea0a6e2561111c983c5fa4a0f443ffaa1c80a4a3134b342aa34786abd407283', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:22:01', '2023-12-11 06:22:01', '2024-12-11 11:52:01'),
('c7c37ea71112a117ed0c3b6851c96659998cdb40597bce1ea443341dce3a0d7aa133e70e88dbab11', 174, 1, 'MyApp', '[]', 0, '2024-04-01 15:28:45', '2024-04-01 15:28:45', '2025-04-01 20:58:45'),
('c80a22839747fdb11f35400ff5d8a6658769bb9962ac79df5f78b97faabe3e0fac5b066293c07a83', 6, 1, 'MyApp', '[]', 0, '2023-12-12 06:50:08', '2023-12-12 06:50:08', '2024-12-12 12:20:08'),
('c84aba31624dbd5dc1c48d908e93a06e775b6738afa2727809d057233956e561809b21deb943cd7a', 95, 1, 'MyApp', '[]', 0, '2024-02-06 07:54:03', '2024-02-06 07:54:03', '2025-02-06 13:24:03'),
('c856ce298312710d1aba4f448410ae5ffec9a558ea8b48289752e642318bd3fcc0ff038b8267a6fe', 83, 1, 'MyApp', '[]', 0, '2024-01-25 13:56:31', '2024-01-25 13:56:31', '2025-01-25 19:26:31'),
('c86ed57b76c167c29e409a334fcb57a9207fc49ad4e3c1f11fa08cd6f7a103e2771236c0cb7d815d', 152, 1, 'MyApp', '[]', 0, '2024-03-15 11:26:39', '2024-03-15 11:26:39', '2025-03-15 16:56:39'),
('c8eedaf5b57b8393d61d07d63cee3cd3bc5c1e4c361f169ec0073b1ebce811a207e8b5350757dec8', 80, 1, 'MyApp', '[]', 0, '2024-02-02 07:22:20', '2024-02-02 07:22:20', '2025-02-02 12:52:20'),
('c914777a4db57c900a7c2e0e177421138e83ec6a7cb7eda04f093c45c005b62fa89f736f0352aaf4', 78, 1, 'MyApp', '[]', 0, '2024-01-25 06:27:18', '2024-01-25 06:27:18', '2025-01-25 11:57:18'),
('c93fde0b45f0fa40a93045570883237a4d82c7e6b92a70fc18cdfb8b120af27f308b215d31738ebf', 80, 1, 'MyApp', '[]', 0, '2024-01-24 09:42:32', '2024-01-24 09:42:32', '2025-01-24 15:12:32'),
('c943ce66a3787039bdac12ab97e58fafd3197bbfd2a9294c4669ae2ce3a35391a8fb4d1f129fc01a', 8, 1, 'MyApp', '[]', 0, '2023-12-11 06:20:18', '2023-12-11 06:20:18', '2024-12-11 11:50:18'),
('c97a3ed24407f8d3afbf8cd26c69dff84394573473c71cc9ffd9a13414d87138615e97aec5554deb', 100, 1, 'MyApp', '[]', 0, '2024-02-06 14:04:25', '2024-02-06 14:04:25', '2025-02-06 19:34:25'),
('c9f2077113b4529e7c6f1c178594c5d4a7c02eafb49327b1c63a5458589ef515faab9f2cbf8601f2', 56, 1, 'MyApp', '[]', 0, '2024-01-31 05:44:05', '2024-01-31 05:44:05', '2025-01-31 11:14:05'),
('ca7ce6cedfe29ef3bfd439363f0a301caa9aa0d0fd4b289cd1f1a0e3defc8d049776c39c50ff5a74', 134, 1, 'MyApp', '[]', 0, '2024-03-08 05:12:34', '2024-03-08 05:12:34', '2025-03-08 10:42:34'),
('ca9c249eb640313d9fba88ec4d2def425587b44bc8afa2981d08233bbd8adf44703fcc4077e15f1e', 11, 1, 'MyApp', '[]', 0, '2023-12-11 09:50:58', '2023-12-11 09:50:58', '2024-12-11 15:20:58'),
('cab3f8013501c101fc559e9bd74e2034b8d512b4bc8ed93a4d2435c8a561808423c320dabc069dad', 80, 1, 'MyApp', '[]', 0, '2024-02-06 04:32:45', '2024-02-06 04:32:45', '2025-02-06 10:02:45'),
('caeb8481bcb4a9a50a7815cd2aba908e8a3d398b4279d96a8b15ead67731c8cc58dd897d8699d672', 11, 1, 'MyApp', '[]', 0, '2023-12-11 12:12:55', '2023-12-11 12:12:55', '2024-12-11 17:42:55'),
('cb940a4ae15498c6018626da409ee44f5f016ca47d50e48f62884bdc0e87269f68de6bc72f91e7bd', 187, 1, 'MyApp', '[]', 0, '2024-04-23 13:06:57', '2024-04-23 13:06:57', '2025-04-23 18:36:57'),
('cbbb564e2428c5c6cc416f026fbd46707352e02bd83aa430e59cdfffbc8b9048a34e8d1b4aee7288', 43, 1, 'MyApp', '[]', 0, '2023-12-29 04:55:13', '2023-12-29 04:55:13', '2024-12-29 10:25:13'),
('cbd5bd1b9b8664817c2552f766ea058069b4587168d772883691426b397144098a7511347bae3392', 130, 1, 'MyApp', '[]', 0, '2024-03-09 04:04:13', '2024-03-09 04:04:13', '2025-03-09 09:34:13'),
('cbf16ebb744e7b410a5fb983dea5fabc43a0c81471bc63460d7989fb5acd347c446392938f6074c4', 132, 1, 'MyApp', '[]', 0, '2024-03-09 05:18:34', '2024-03-09 05:18:34', '2025-03-09 10:48:34'),
('cbf1e0949a70636d60d610a3d8c30e52233cbe52d7cb3af7b91799667f4f0c920de72abe7b03ce1e', 130, 1, 'MyApp', '[]', 0, '2024-03-20 07:46:20', '2024-03-20 07:46:20', '2025-03-20 13:16:20'),
('cd6b2a729159a3ce9cf44c9d9bc122cddca84752f8ae798eabdd8a8db1ad4a2b2817139bf338c4e9', 129, 1, 'MyApp', '[]', 0, '2024-04-21 06:26:33', '2024-04-21 06:26:33', '2025-04-21 11:56:33'),
('cd99ad8b3e65de6aeb84e67814a08ec34881797046c0b0296e49f948a6a33c19f81139f906f46a11', 56, 1, 'MyApp', '[]', 0, '2024-02-02 05:07:32', '2024-02-02 05:07:32', '2025-02-02 10:37:32'),
('ce25f7f6d4e9d1056f60678d149be788215dfb6b50d626bb6a726a608d7bc32767425d215a511956', 55, 1, 'MyApp', '[]', 0, '2024-02-26 11:02:12', '2024-02-26 11:02:12', '2025-02-26 16:32:12'),
('ce2a192215dd7bf7f4d6873c7b5b51e32782e20530fed577cb4e18063445ed8a98ad76b977541d84', 56, 1, 'MyApp', '[]', 0, '2024-01-20 12:47:41', '2024-01-20 12:47:41', '2025-01-20 18:17:41'),
('ce33b2da01d4507bec98b25aab90e3949c58316f221055757dae8a79aa86873470df93abb7178d54', 130, 1, 'MyApp', '[]', 0, '2024-04-21 07:32:34', '2024-04-21 07:32:34', '2025-04-21 13:02:34'),
('ce7bd5f4a71e2178ede9b2196f1e01ec44644fe9d9720f68fd54dad8e42f7cb541b894d136efe585', 9, 1, 'MyApp', '[]', 0, '2023-12-11 07:08:23', '2023-12-11 07:08:23', '2024-12-11 12:38:23'),
('cedabcba3b8ff4b4fb887570eba5bece25842c47aa4fffd5c5e879002a961c036d874a9f44144b5c', 12, 1, 'MyApp', '[]', 0, '2023-12-16 05:27:52', '2023-12-16 05:27:52', '2024-12-16 10:57:52'),
('cf03b6e6b4c2c7838c6c09e27d59f6c1251694edcfff0293f1f933c8d753b824f94d86756a0703de', 60, 1, 'MyApp', '[]', 0, '2024-01-25 05:35:22', '2024-01-25 05:35:22', '2025-01-25 11:05:22'),
('cf4620f889a73dfb130d098265e6866002755930ca76ef03c9d99c44b4ecc23614020a2d6ffe18dd', 56, 1, 'MyApp', '[]', 0, '2024-02-02 13:05:29', '2024-02-02 13:05:29', '2025-02-02 18:35:29'),
('cf7362e9a148cf8f188969ef3756babe186e60c050798b36fb61acc6f36d711458bfc3e9819a6064', 80, 1, 'MyApp', '[]', 0, '2024-03-04 06:05:37', '2024-03-04 06:05:37', '2025-03-04 11:35:37'),
('cf8c0f3ce8b1dd93d1bdf3701b85046a76e381e3079beb39023be719e4dfc400816194d360b5cf47', 59, 1, 'MyApp', '[]', 0, '2024-01-24 07:46:53', '2024-01-24 07:46:53', '2025-01-24 13:16:53');
INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('cfa382438fb4b3e28ec8e00d7005cfbd7e457836d7cba7c0bcffdcf6dfd9e74f46b36bfa65b26bf4', 12, 1, 'MyApp', '[]', 0, '2023-12-16 09:49:19', '2023-12-16 09:49:19', '2024-12-16 15:19:19'),
('cfdc2f4fcbae8f7c7903c05568af382610f80c9fdb4de78e50ac7915f635f942e5090fed2c818b85', 85, 1, 'MyApp', '[]', 0, '2024-02-06 13:25:04', '2024-02-06 13:25:04', '2025-02-06 18:55:04'),
('d0556943272653ba399aa94695eca9edd081ab8c5206eab7d53b13ee52c777b273636663a42e72bb', 159, 1, 'MyApp', '[]', 0, '2024-03-29 13:07:21', '2024-03-29 13:07:21', '2025-03-29 18:37:21'),
('d06229e2e5a00c8f27af94c8adeffb15219cfebc10e9cdd8239f81021f73e7edef2914973797ec6f', 60, 1, 'MyApp', '[]', 0, '2024-02-15 07:12:02', '2024-02-15 07:12:02', '2025-02-15 12:42:02'),
('d092adbe2a2e639ec3ca8778e2a67221edbc892b060cb4b6f8bb34dee611598bec4d4ce15a60863d', 6, 1, 'MyApp', '[]', 0, '2023-12-11 06:12:43', '2023-12-11 06:12:43', '2024-12-11 11:42:43'),
('d09e42f23cc7e8d865c68078f709065b786676fedfb2f385b4a62d290a8684ade34a334317a250f9', 129, 1, 'MyApp', '[]', 0, '2024-03-28 13:52:40', '2024-03-28 13:52:40', '2025-03-28 19:22:40'),
('d0b91524e532e89f9372dd2992d67699cdb6112b05a62dce0f987e772fd618b18d73f69a16bb7934', 37, 1, 'MyApp', '[]', 0, '2023-12-26 12:31:12', '2023-12-26 12:31:12', '2024-12-26 18:01:12'),
('d0d0745ab26c5e19c9078ff1d113fadb65f21abdc9e6bb9dc36ea16d2b4516262e6db9a009c215ac', 172, 1, 'MyApp', '[]', 0, '2024-04-21 07:57:52', '2024-04-21 07:57:52', '2025-04-21 13:27:52'),
('d1005a23b463fc757e55d8c29395f9a2f5f19ccce2481a4bb4b1f3b8a8027157f2084f55365e814f', 129, 1, 'MyApp', '[]', 0, '2024-03-18 06:41:16', '2024-03-18 06:41:16', '2025-03-18 12:11:16'),
('d1406081d6d72e175e525901aeb3a68a69645489591947ac8c2e458199e61da5e3e5b7a7dcbb2f9b', 12, 1, 'MyApp', '[]', 0, '2023-12-16 04:58:03', '2023-12-16 04:58:03', '2024-12-16 10:28:03'),
('d294e425c8446e59fa728fb01a99ca67797c2180e08e51b98fbdcc2cf3be90b5bccd2ad152bbbcae', 6, 1, 'MyApp', '[]', 0, '2023-12-18 10:29:18', '2023-12-18 10:29:18', '2024-12-18 15:59:18'),
('d2c1e7812b84f358a425d7f2cfee33a8320ec6f03bd3b4c08faa7cd71e02d3d66b7777cbce331160', 187, 1, 'MyApp', '[]', 0, '2024-04-24 05:30:46', '2024-04-24 05:30:46', '2025-04-24 11:00:46'),
('d309a045b8d0d8ec40a32bc32843f20e6fdbc9c8998846b19b437aedd1b7b1e75619c9270ad2163f', 80, 1, 'MyApp', '[]', 0, '2024-01-25 04:53:32', '2024-01-25 04:53:32', '2025-01-25 10:23:32'),
('d31ffc9bed45ccfccfc4362d235434d7762a5d1413dc111cea3e6e620c1404437346ac3ad9120995', 77, 1, 'MyApp', '[]', 0, '2024-02-28 17:07:21', '2024-02-28 17:07:21', '2025-02-28 22:37:21'),
('d32f54f940059ce370114b90b235bd7aa6c627741ead775fca50728f789a865757a41a2ffa93e525', 171, 1, 'MyApp', '[]', 0, '2024-03-30 14:42:29', '2024-03-30 14:42:29', '2025-03-30 20:12:29'),
('d3c963696084e203e15b590a9ceec4132d55c75d4f98db8aff77d3fd613ec0b4afac03e424710744', 129, 1, 'MyApp', '[]', 0, '2024-04-22 13:11:01', '2024-04-22 13:11:01', '2025-04-22 18:41:01'),
('d40f5b81e2751e8ba280d54f181e854ad86807dcbecd2a6eceb507479f989fa1143f9d1f582072b7', 129, 1, 'MyApp', '[]', 0, '2024-03-07 05:18:41', '2024-03-07 05:18:41', '2025-03-07 10:48:41'),
('d41125f97cf69422435358b95cdaee306fb48a09d7726026b5f69f32f12175a41c30ef13388f05f7', 9, 1, 'MyApp', '[]', 0, '2023-12-11 07:07:08', '2023-12-11 07:07:08', '2024-12-11 12:37:08'),
('d4da55e4dd4502fca15105e993ee4b00d99fc85ce2c16c276040a34c19870c2654d32b638995673f', 172, 1, 'MyApp', '[]', 0, '2024-04-09 07:24:37', '2024-04-09 07:24:37', '2025-04-09 12:54:37'),
('d5515985f2845eb8bf65731ce84753dbac0db41783fe376b8cedf54587b0deea8094179d08fb0090', 97, 1, 'MyApp', '[]', 0, '2024-02-06 09:41:47', '2024-02-06 09:41:47', '2025-02-06 15:11:47'),
('d573861e5a4c4c20f64dfd70cfbbcb5fa89aeb104b635d8fc77776cadb02797768487a7b409bb5aa', 52, 1, 'MyApp', '[]', 0, '2024-01-12 06:38:06', '2024-01-12 06:38:06', '2025-01-12 12:08:06'),
('d583e879fb04588e2317a18d7136413c4896e66317b3ccf054b7cd9e9d84cade478b6a9010030d4d', 159, 1, 'MyApp', '[]', 0, '2024-04-10 10:27:34', '2024-04-10 10:27:34', '2025-04-10 15:57:34'),
('d5af8f619a06d8832cafb3b5a8924e68a7f448086726357dfa913681a8a67d767417d7eaf0042da8', 159, 1, 'MyApp', '[]', 0, '2024-04-05 22:59:54', '2024-04-05 22:59:54', '2025-04-06 04:29:54'),
('d5afefadaf0210009b9a2c40fdf0f11e5af427df254ffab00c0912d273ae8e6deb2f606630234406', 6, 1, 'MyApp', '[]', 0, '2023-12-11 05:10:45', '2023-12-11 05:10:45', '2024-12-11 10:40:45'),
('d5b9f0dc6f9729d6b155fddaf02c91b05ae85ea3e4fa62aa827a16b302b98e7460fe5e305e9fc01c', 12, 1, 'MyApp', '[]', 0, '2023-12-29 09:07:08', '2023-12-29 09:07:08', '2024-12-29 14:37:08'),
('d5c3e6f08c702b3ff9b2784e169c2eeb9815737d40782d7a17c00e1042aa704af5fc8e25323f463a', 139, 1, 'MyApp', '[]', 0, '2024-03-09 05:02:11', '2024-03-09 05:02:11', '2025-03-09 10:32:11'),
('d5dc3a008225f9a5b665636d6f9138ad8092fb59d2096126c08d5f893079eab1e4a7d22e3f912512', 85, 1, 'MyApp', '[]', 0, '2024-03-04 06:15:03', '2024-03-04 06:15:03', '2025-03-04 11:45:03'),
('d607337190d9eb1f9d1d82f2b3d43907b2d8d78d07e83172e04c35e5339c3168b937dc8a297c3840', 59, 1, 'MyApp', '[]', 0, '2024-01-27 04:19:19', '2024-01-27 04:19:19', '2025-01-27 09:49:19'),
('d6188af14baa7efa8b3fc6cdd89529bb768f14c23e8010f24300d2426f65c43c9cc63f402c68bdeb', 126, 1, 'MyApp', '[]', 0, '2024-03-19 11:30:30', '2024-03-19 11:30:30', '2025-03-19 17:00:30'),
('d65ac355a2a917ba3d935ef14e9771f0ba660b1b9c2d6e0aba510d59bc91306d082f636ab471ae7f', 141, 1, 'MyApp', '[]', 0, '2024-04-18 07:04:17', '2024-04-18 07:04:17', '2025-04-18 12:34:17'),
('d65b821632faf5d63b642478a67d77bcb8e52c6b58e011b78081952544b2d1d3b42ac330366157c5', 12, 1, 'MyApp', '[]', 0, '2023-12-16 08:52:31', '2023-12-16 08:52:31', '2024-12-16 14:22:31'),
('d6856b09514b8ffadd75b4c7ab482caf9be8200c345232c5d12a068667f792c4086ea208aa490394', 12, 1, 'MyApp', '[]', 0, '2023-12-27 06:01:42', '2023-12-27 06:01:42', '2024-12-27 11:31:42'),
('d693adf8c2a9694a4fd336aec931ce4d300ba9a89f093ad645883f7294390ab3d19788c25999f3e7', 143, 1, 'MyApp', '[]', 0, '2024-03-13 05:30:19', '2024-03-13 05:30:19', '2025-03-13 11:00:19'),
('d69ecca550157eaf08b06c8847973c5c2dba6ab592fbddc14b76163edc6975e9437fc70551be6585', 85, 1, 'MyApp', '[]', 0, '2024-03-05 12:25:33', '2024-03-05 12:25:33', '2025-03-05 17:55:33'),
('d6e6a231e34bcddd95176846420177176e95d29aefd1b828f90e4039f5bc81bfa1a643b15a87a276', 129, 1, 'MyApp', '[]', 0, '2024-03-07 10:35:07', '2024-03-07 10:35:07', '2025-03-07 16:05:07'),
('d70f7702865a48d0982fc178d478757450fe2b6af643c56132ed5acb6665ceff75e777b9f00c21d6', 159, 1, 'MyApp', '[]', 0, '2024-04-16 07:23:22', '2024-04-16 07:23:22', '2025-04-16 12:53:22'),
('d7cbe4f86350753ecefc411bcc3858279f3b06c42248229954795f21218d8ef95d181c27d7ac6331', 51, 1, 'MyApp', '[]', 0, '2024-01-12 04:46:54', '2024-01-12 04:46:54', '2025-01-12 10:16:54'),
('d7e5283a8a85cd2b90e411eed0df1da0dabe2ba2769204af46f56cbc76cbc0eb626260f4ba0657c0', 31, 1, 'MyApp', '[]', 0, '2023-12-22 07:13:36', '2023-12-22 07:13:36', '2024-12-22 12:43:36'),
('d7e7062e2ed74ce91630ddfe43a1e6385c6314dd4a9d7bc218832538e3830b978675c8bf1a88ddef', 12, 1, 'MyApp', '[]', 0, '2023-12-15 10:32:29', '2023-12-15 10:32:29', '2024-12-15 16:02:29'),
('d805fec1ae4f26ad8bf258e9a1e32a6d01579f2194747c4838cee50d5453cf8d60ca0330eb198216', 40, 1, 'MyApp', '[]', 0, '2023-12-29 10:49:21', '2023-12-29 10:49:21', '2024-12-29 16:19:21'),
('d83aea1789015ebbbc2589ad8f7185b40c127ce71536917e1d538f26898bce77713e09cb080b7f01', 64, 1, 'MyApp', '[]', 0, '2024-01-20 12:35:10', '2024-01-20 12:35:10', '2025-01-20 18:05:10'),
('d89b4378c42beb8603a796f8e451b70135cd38f8a63c4849cf5db7b6362eed3edda419971bdda13e', 128, 1, 'MyApp', '[]', 0, '2024-03-06 11:29:14', '2024-03-06 11:29:14', '2025-03-06 16:59:14'),
('d8d6554b5a00acab693697f5fd3bb69288daf5decf10d1de81516bb8c6c8bb0b4c19daf519c0334a', 34, 1, 'MyApp', '[]', 0, '2023-12-21 06:30:47', '2023-12-21 06:30:47', '2024-12-21 12:00:47'),
('d92dcf5bb25fe0668527d288823317726640aeedf3e1be8b41a58a6193cb03b2ebbf5a56bdf2f0fe', 59, 1, 'MyApp', '[]', 0, '2024-01-24 12:14:00', '2024-01-24 12:14:00', '2025-01-24 17:44:00'),
('d92e721d9ffe209a095a970143b6680e26d513934573feea134b4ef629cc08a0f1d1ab24a86731ce', 56, 1, 'MyApp', '[]', 0, '2024-02-12 05:42:11', '2024-02-12 05:42:11', '2025-02-12 11:12:11'),
('d96f07da94466604ea0743c109ee238cbeea3a8c41413d4ed2169e8ad21bda3f12a26c2a0fa8c9dd', 130, 1, 'MyApp', '[]', 0, '2024-03-19 08:12:28', '2024-03-19 08:12:28', '2025-03-19 13:42:28'),
('d9a4a53547aee682224ce243b092c9019ff675adee9f1b55caf1efc1b68cfdea7f3d98ec9b58345d', 9, 1, 'MyApp', '[]', 0, '2023-12-11 06:26:37', '2023-12-11 06:26:37', '2024-12-11 11:56:37'),
('da1fe811d50d00feb1e9262a8ef583e03ec4360a12c1c041432383a895c316106bf7c633709c0cf1', 130, 1, 'MyApp', '[]', 0, '2024-03-08 06:51:45', '2024-03-08 06:51:45', '2025-03-08 12:21:45'),
('daf5eb0fb7fc8d9a51d8dfca1df1cf6693013b3d4c75c24ff92cd723dc8b0d93ceb251daa2f17910', 12, 1, 'MyApp', '[]', 0, '2023-12-16 10:15:18', '2023-12-16 10:15:18', '2024-12-16 15:45:18'),
('db010e167a19f30fa21de23faa7efd44c910a4e63463f04e8f4eee61b208c25664e008d33d62c2d6', 129, 1, 'MyApp', '[]', 0, '2024-03-27 14:01:53', '2024-03-27 14:01:53', '2025-03-27 19:31:53'),
('db2c3b1d8985eb55983b0aa29038d9635939a8a53edda775508bb5d4b8e0032a6df739216686fcbe', 129, 1, 'MyApp', '[]', 0, '2024-04-21 07:42:42', '2024-04-21 07:42:42', '2025-04-21 13:12:42'),
('db64ed7151751d0dcfdcf11c52516fb7f91dcb2d7da08b76f7dd5adb436c0133f86de254b94aad46', 146, 1, 'MyApp', '[]', 0, '2024-04-24 05:33:31', '2024-04-24 05:33:31', '2025-04-24 11:03:31'),
('db7e1edcd3311005f386210c64d2671d24591e667b4d578a3ba21b69b3441da56604e594f11d148f', 85, 1, 'MyApp', '[]', 0, '2024-03-04 09:26:03', '2024-03-04 09:26:03', '2025-03-04 14:56:03'),
('db9e8efca4f7a90f40837561424f7ad6700d1f882f2ffc14dc50feaf9b31e641514b909077fd7d1a', 56, 1, 'MyApp', '[]', 0, '2024-01-24 07:44:43', '2024-01-24 07:44:43', '2025-01-24 13:14:43'),
('dbe065396c5e0e97af36236b542b1e3a730fa238651e0f0855acb2ce76c9dff51e2720501347aa53', 159, 1, 'MyApp', '[]', 0, '2024-03-26 12:58:28', '2024-03-26 12:58:28', '2025-03-26 18:28:28'),
('dbef57d48b8f91bbd1af7956696283335e649b6ef7e25eeddd675146ac5de3930e68470aa2b515a2', 159, 1, 'MyApp', '[]', 0, '2024-04-18 13:37:13', '2024-04-18 13:37:13', '2025-04-18 19:07:13'),
('dbf7465c77ab0668785bd7a68242faaa6832ad09bc7f0cdb718fdc320b2a4a792a336e37815da821', 46, 1, 'MyApp', '[]', 0, '2023-12-29 11:35:00', '2023-12-29 11:35:00', '2024-12-29 17:05:00'),
('dbff43e1ddc0b360533322c20aaaa21d550fa8c475d918286d2bd79dd34304c97b653e7e3dffbc70', 77, 1, 'MyApp', '[]', 0, '2024-01-23 15:23:35', '2024-01-23 15:23:35', '2025-01-23 20:53:35'),
('dc2852539a9a87780a24f818f4655267ab6730eb38a388185fd88e6fc99f98395c2bbbb85e01fe38', 176, 1, 'MyApp', '[]', 0, '2024-04-02 16:42:11', '2024-04-02 16:42:11', '2025-04-02 22:12:11'),
('dc49c0aec1a75803eae1ed4f099c3f65dee10ce837c3fc131d92ce0fd756494d536cdd399d544255', 12, 1, 'MyApp', '[]', 0, '2023-12-15 11:25:56', '2023-12-15 11:25:56', '2024-12-15 16:55:56'),
('dc5837f43b0731d53aaddf3fb80dda9ea241b1c0607fd2b38525f3f6845814fcaac5461759ed6b7a', 159, 1, 'MyApp', '[]', 0, '2024-04-18 06:44:58', '2024-04-18 06:44:58', '2025-04-18 12:14:58'),
('dc66ba575a6268cd28466dae775eaf4d390ee26ccadde0fc7b807c35a0a2cfd8dfda8a8abaf41663', 128, 1, 'MyApp', '[]', 0, '2024-03-09 04:32:57', '2024-03-09 04:32:57', '2025-03-09 10:02:57'),
('dc7e63c2a8cd40be1b49a7efc7e406c4a4f445b11215bc587bcba6cbb63cdf36981e32193d0c7963', 146, 1, 'MyApp', '[]', 0, '2024-03-19 06:59:33', '2024-03-19 06:59:33', '2025-03-19 12:29:33'),
('dca10d00dd14ac9855bb8da920af75b55ddc93df0b5c6af00bfa505c1aa73164deb01bb70f7a5b9c', 12, 1, 'MyApp', '[]', 0, '2023-12-18 13:57:42', '2023-12-18 13:57:42', '2024-12-18 19:27:42'),
('dcc01b684a0fbc3ca0ce617a3edc54536125442f0d27b4f7301cc4fa68c7729a0c541dd6320a2f65', 159, 1, 'MyApp', '[]', 0, '2024-04-01 08:55:39', '2024-04-01 08:55:39', '2025-04-01 14:25:39'),
('dcf4d11abeddaf679a3adc22e6faa57bbd7a7f2537eedef8b773ef3be460b040c6e841a567ae0605', 146, 1, 'MyApp', '[]', 0, '2024-03-14 09:26:42', '2024-03-14 09:26:42', '2025-03-14 14:56:42'),
('dcfe323fcada4281cff82190dc5cd3e4603ecd2d91ef6024fb3fd4a7f344059d2d74c7f53726c202', 75, 1, 'MyApp', '[]', 0, '2024-01-20 12:38:40', '2024-01-20 12:38:40', '2025-01-20 18:08:40'),
('dd0d918c720f3009ff3a4b9df0871ff519ae36d6ea5df710d845fd433ac9dac4637c060483883c16', 6, 1, 'MyApp', '[]', 0, '2023-12-11 05:37:46', '2023-12-11 05:37:46', '2024-12-11 11:07:46'),
('dd5624ab6732ed54ee81d9273e16228dece0d47e4eea9afb06ceab97887a0fca4a66c00fcd01f2ce', 126, 1, 'MyApp', '[]', 0, '2024-03-11 13:02:06', '2024-03-11 13:02:06', '2025-03-11 18:32:06'),
('dd6412a6712d0041396d87f889fcc990250235d82186519b4c0bc1ea83dc0acb7b6c63544789def7', 181, 1, 'MyApp', '[]', 0, '2024-04-02 18:42:55', '2024-04-02 18:42:55', '2025-04-03 00:12:55'),
('dd66ae227a3a724dde6beee835ae8e2e787eac2ef1918b1d6163779dc92df55c03380142df545b7a', 21, 1, 'MyApp', '[]', 0, '2023-12-15 07:41:12', '2023-12-15 07:41:12', '2024-12-15 13:11:12'),
('dd834c0bf9a1d31732ee42831c156dbbc61a72ebc071f84e76bef96e91781fa96d06e1281a828f31', 12, 1, 'MyApp', '[]', 0, '2023-12-15 10:01:47', '2023-12-15 10:01:47', '2024-12-15 15:31:47'),
('dda330ef9f74e1e6d2eb6fd8afade33972b446564d15220b1864198247588052edfc583f96e7673b', 135, 1, 'MyApp', '[]', 0, '2024-03-08 05:29:51', '2024-03-08 05:29:51', '2025-03-08 10:59:51'),
('dda710fc8fce4dd8b2398e46619b9e028d39c7214143fbcf14bf381a1327813923611746f399afd2', 47, 1, 'MyApp', '[]', 0, '2023-12-29 11:48:13', '2023-12-29 11:48:13', '2024-12-29 17:18:13'),
('dde9cc223a3a1513eff088d42d8750a0b8951fe672b83edb16827183fe416800c2e8092621d8db3e', 172, 1, 'MyApp', '[]', 0, '2024-04-06 17:54:21', '2024-04-06 17:54:21', '2025-04-06 23:24:21'),
('de105b428e3b5337a8c8f93f02fec56166b29464a50a240a6a7aa916115e5e6117297a113ef55e0c', 144, 1, 'MyApp', '[]', 0, '2024-03-11 06:00:49', '2024-03-11 06:00:49', '2025-03-11 11:30:49'),
('de1c7071b5c813ccf589e3afe84cbe7ba2a3c5fdf740dd42cfb32b45dcd2386bce2b278ba714cc60', 6, 1, 'MyApp', '[]', 0, '2023-12-20 05:13:40', '2023-12-20 05:13:40', '2024-12-20 10:43:40'),
('de569bec4e786e044c8f6f343b2441b32a7fc2d21490847eac3b3a0682da3e94d880a8f4661b2191', 129, 1, 'MyApp', '[]', 0, '2024-03-08 08:23:04', '2024-03-08 08:23:04', '2025-03-08 13:53:04'),
('deabbcc0b05aeed4b55a466707014ec49482b44da0f157866585bcf3cc04d41017a16e4f1c05e07b', 11, 1, 'MyApp', '[]', 0, '2023-12-12 07:02:10', '2023-12-12 07:02:10', '2024-12-12 12:32:10'),
('def5a829c3687b32afc3622117d94a34b7af3a4533e6d1711a913251427028a9c8522ce62b0ac042', 172, 1, 'MyApp', '[]', 0, '2024-04-21 06:27:43', '2024-04-21 06:27:43', '2025-04-21 11:57:43'),
('dfc135c7608f4cd70876f3550c3993570c57ab0959e7a8bbf4060bbd89007b1453a34c3fde33f824', 145, 1, 'MyApp', '[]', 0, '2024-03-13 14:10:24', '2024-03-13 14:10:24', '2025-03-13 19:40:24'),
('e02cc0baccc17fb91e59e0b93efc254aab3650968e2cd86ab1480cc58d8e102d2e75082bd1a7a2e8', 24, 1, 'MyApp', '[]', 0, '2023-12-15 10:34:46', '2023-12-15 10:34:46', '2024-12-15 16:04:46'),
('e0346fc02d55bcf4eca81a7fda7897371cd28b1d2fdd7bf4c299b606a575991b738916854c5cf582', 40, 1, 'MyApp', '[]', 0, '2023-12-29 10:57:52', '2023-12-29 10:57:52', '2024-12-29 16:27:52'),
('e039741698f3fe6da651445dd4ba1428b07aa5c9ed049b28cf115d02b114623a51fd5065917a1c1d', 182, 1, 'MyApp', '[]', 0, '2024-04-04 11:02:53', '2024-04-04 11:02:53', '2025-04-04 16:32:53'),
('e09d57b84b6de4456f914378b5a2ec98de8aaf627399a4deaf1cca5dce9e68f855afbfc39309a126', 9, 1, 'MyApp', '[]', 0, '2023-12-11 12:34:35', '2023-12-11 12:34:35', '2024-12-11 18:04:35'),
('e0af88554d5283870209096681c9177dd9ec042ba27617565b671093f6ccbdfb49397975a40418a7', 172, 1, 'MyApp', '[]', 0, '2024-04-21 10:30:18', '2024-04-21 10:30:18', '2025-04-21 16:00:18'),
('e0b434be5c3c1b7b9cccd4895606e740583263c78172557470755e3c089c42e6c8ff4aedaf558f3b', 92, 1, 'MyApp', '[]', 0, '2024-02-05 14:40:50', '2024-02-05 14:40:50', '2025-02-05 20:10:50'),
('e17cb87c85b9be294e5f66204d0084efc158ced8ff747f6a9756ef1f346f60f8ec3c1bb33c0d4479', 89, 1, 'MyApp', '[]', 0, '2024-02-03 07:48:31', '2024-02-03 07:48:31', '2025-02-03 13:18:31'),
('e1a13c594c199f0a022c9d4d19b9dca73075d71eb7164d9a89748a5b7d11f75c7b08bb70568307aa', 56, 1, 'MyApp', '[]', 0, '2024-01-24 06:25:46', '2024-01-24 06:25:46', '2025-01-24 11:55:46'),
('e1ab8fd5aa6b956fdaf2f3d6732984c74007a1116ec8c9225f42184316f9ed4a6e898d68ff64fe9c', 128, 1, 'MyApp', '[]', 0, '2024-03-06 11:33:56', '2024-03-06 11:33:56', '2025-03-06 17:03:56'),
('e1bc59ea9f27e7b27c1ce1e6589b0a77b6260cfac06ce175c8ffda30a2f66bb2285935cb6d6eefd8', 88, 1, 'MyApp', '[]', 0, '2024-02-21 09:27:28', '2024-02-21 09:27:28', '2025-02-21 14:57:28'),
('e21f8a8a8c89d6d5bbfc2e9c8c5aa4aa53d6beee2eae8ee9a9feee1c716536d1f000a4e573803620', 57, 1, 'MyApp', '[]', 0, '2024-01-31 05:16:27', '2024-01-31 05:16:27', '2025-01-31 10:46:27'),
('e22d9697a327d2544c62fa06f7344af208db2ed6a884353c434cea1394a90c113aac1a21e324a96e', 55, 1, 'MyApp', '[]', 0, '2024-01-22 05:05:46', '2024-01-22 05:05:46', '2025-01-22 10:35:46'),
('e281bda50587d064a40d158f9c1128915dd8c9a12e8d11b0268a67546f1f2e2f5053fc1e12b809e3', 12, 1, 'MyApp', '[]', 0, '2023-12-15 09:13:00', '2023-12-15 09:13:00', '2024-12-15 14:43:00'),
('e2b3dfc73eaeb0a7591545dc80f29836599a13257cdb570fabf75c7417c10c84ae8a53557b055cd6', 114, 1, 'MyApp', '[]', 0, '2024-02-29 05:24:53', '2024-02-29 05:24:53', '2025-03-01 10:54:53'),
('e300d105b7e8d77a5352ffed60fba44104dd11c7ace9d35c24011a41815c4aea7280382eb6c04a31', 56, 1, 'MyApp', '[]', 0, '2024-02-10 09:06:08', '2024-02-10 09:06:08', '2025-02-10 14:36:08'),
('e3058303d52185cfbec2f2f9b5251f5df17f0822dc10886e53c1ef25a564e1eec869eb680e01613b', 126, 1, 'MyApp', '[]', 0, '2024-03-08 04:43:58', '2024-03-08 04:43:58', '2025-03-08 10:13:58'),
('e317db3f1dfd2e7a75962e9dc51eb072b80ab2d8a890b2297fb17639cb4f1041acf891f5608f688d', 81, 1, 'MyApp', '[]', 0, '2024-01-31 12:42:05', '2024-01-31 12:42:05', '2025-01-31 18:12:05'),
('e31940fdde5fa52afadbb41c84577fe4cf1f62874032db758f6b5e191aa6a61e7247fe85299f46d1', 129, 1, 'MyApp', '[]', 0, '2024-04-18 14:59:01', '2024-04-18 14:59:01', '2025-04-18 20:29:01'),
('e360204c9a85f717dc006b4a7a8474f623178e4ddf4b0db21f7fcf0367e9494790e9ebb9007c91e1', 159, 1, 'MyApp', '[]', 0, '2024-04-23 04:49:42', '2024-04-23 04:49:42', '2025-04-23 10:19:42'),
('e36db3fa3b5d322d561a6738ae5e98c48b4a8725a30b76e914baaab2ed4325f6150ce304b11f1e99', 55, 1, 'MyApp', '[]', 0, '2024-01-24 08:48:25', '2024-01-24 08:48:25', '2025-01-24 14:18:25'),
('e383a74428276924135c3f76d5db26c9c240d1df45d9955f81840a260b7d8d584cd3d68b4780a082', 178, 1, 'MyApp', '[]', 0, '2024-04-02 16:49:05', '2024-04-02 16:49:05', '2025-04-02 22:19:05'),
('e3f0b4813e6ce39bf2719858741319dca5255e46eca73df0c676c0f13ccfb74ab6a9d1e8cd7a7a9b', 56, 1, 'MyApp', '[]', 0, '2024-02-06 12:35:10', '2024-02-06 12:35:10', '2025-02-06 18:05:10'),
('e41c5af2e4f4fb46ba530e0947e1d790346ad4db2092adc7b2b3023200878e700af7fd48d21491a4', 80, 1, 'MyApp', '[]', 0, '2024-01-24 09:41:21', '2024-01-24 09:41:21', '2025-01-24 15:11:21'),
('e46c8dc9bdf99a2f78ea618241f06e67d67622ada7490d2d2801d6828df8777d2beae60103447718', 81, 1, 'MyApp', '[]', 0, '2024-01-25 13:30:26', '2024-01-25 13:30:26', '2025-01-25 19:00:26'),
('e480586c9ebd23ee944f5c30b6657136898c33beef128cbd757d5c565f90b69bc1afb8ede6d7da2a', 129, 1, 'MyApp', '[]', 0, '2024-03-08 06:15:01', '2024-03-08 06:15:01', '2025-03-08 11:45:01'),
('e4f8ae0481273ffb87b13200c1ea06ff304d98721cab7dde8d8ef95cd2ee114301d3e86ffd1f31fb', 76, 1, 'MyApp', '[]', 0, '2024-02-19 14:34:35', '2024-02-19 14:34:35', '2025-02-19 20:04:35'),
('e50651efd4d79986c70f30afb1fc8423408d867f875fe1f65325d88ed019358a569bbfe4e123af29', 182, 1, 'MyApp', '[]', 0, '2024-04-14 12:05:45', '2024-04-14 12:05:45', '2025-04-14 17:35:45'),
('e5233bcfa98fab05b296eb25c3abfe30cf557fa68984fbf2c96e834b15e93733b62cc3095294798f', 59, 1, 'MyApp', '[]', 0, '2024-01-23 09:42:41', '2024-01-23 09:42:41', '2025-01-23 15:12:41'),
('e52daf2960fc6e38515f105aaa48f23ab9810a939d4128c3c89a194f0327c65ae3d1256f11ceddf0', 145, 1, 'MyApp', '[]', 0, '2024-04-23 05:07:33', '2024-04-23 05:07:33', '2025-04-23 10:37:33'),
('e5410e69fb3aeda003b920d6547583b773d0350f855f568952e73a3458eb762a6c9c2c34f96aa3e7', 129, 1, 'MyApp', '[]', 0, '2024-03-06 12:06:22', '2024-03-06 12:06:22', '2025-03-06 17:36:22'),
('e55db68230177cae02421a22c17c35da529b839e20b52c657f9aae5d174335a3b9ba342792b9dd2e', 58, 1, 'MyApp', '[]', 0, '2024-02-15 07:10:36', '2024-02-15 07:10:36', '2025-02-15 12:40:36'),
('e568b2e15a797b4622b10e79dc01464d2692b94fd984e087e9ddb5d7025fdc373a9eadbc080e5087', 6, 1, 'MyApp', '[]', 0, '2023-12-14 12:28:08', '2023-12-14 12:28:08', '2024-12-14 17:58:08'),
('e5a9e8affbb32e8e67ac04fad391b2cf3a47b7d61efa6f18e3ea1105191506ea109de908c529d676', 56, 1, 'MyApp', '[]', 0, '2024-01-31 11:00:05', '2024-01-31 11:00:05', '2025-01-31 16:30:05'),
('e5bc5b130500f4de9ad8b668b06cca3439a21323d3504618caa1fd47ef50f0dc8f47ae1531e4233a', 139, 1, 'MyApp', '[]', 0, '2024-03-12 11:22:36', '2024-03-12 11:22:36', '2025-03-12 16:52:36'),
('e5f31df1731d556a033edd930bcaaad8a55993ccb2e7f252b39acb74464ac27d647f4ef039c7f169', 172, 1, 'MyApp', '[]', 0, '2024-04-21 10:26:33', '2024-04-21 10:26:33', '2025-04-21 15:56:33'),
('e64b5e2099ec39fa69b0902fbd9e75473cdfb0290c3221a887db4835d88a3b3e50a3faac7649153c', 59, 1, 'MyApp', '[]', 0, '2024-01-30 05:24:34', '2024-01-30 05:24:34', '2025-01-30 10:54:34'),
('e6dd6d643e368ff2cf90662e0651d7af6f4d76b718eeab7bfe30225e4a13728e2577f49abe463b96', 126, 1, 'MyApp', '[]', 0, '2024-03-19 06:54:18', '2024-03-19 06:54:18', '2025-03-19 12:24:18'),
('e6e75e7286a83f718abbe249d9d5517a26014ac57b3d28b24031ce5a25b28ed3bf4a6a045d6c9610', 172, 1, 'MyApp', '[]', 0, '2024-04-04 11:09:06', '2024-04-04 11:09:06', '2025-04-04 16:39:06'),
('e762c2e3a6c7c527f8968e16e1169a42f5540c08fe1c99e425887201aa95055cd31f6a2aab8fd17d', 159, 1, 'MyApp', '[]', 0, '2024-04-25 05:44:27', '2024-04-25 05:44:27', '2025-04-25 11:14:27'),
('e77766bddb55faad1dc099189af4cfc3fb0e4916b51d9f3fa01b99efabb6e4944028024786faa9ad', 7, 1, 'MyApp', '[]', 0, '2023-12-11 05:11:49', '2023-12-11 05:11:49', '2024-12-11 10:41:49'),
('e7bf31141439177edcf6a6cf1e3f0decf3683c3ba3a18fb8281e0a5ba453a66c941df84fc40088fb', 11, 1, 'MyApp', '[]', 0, '2023-12-12 07:24:38', '2023-12-12 07:24:38', '2024-12-12 12:54:38'),
('e7e1602a8a59c39d768aba778f5d6340d7f8a9afd1cd942acc306f7cb1fe855e40d7b363182c482c', 12, 1, 'MyApp', '[]', 0, '2023-12-20 13:08:07', '2023-12-20 13:08:07', '2024-12-20 18:38:07'),
('e85f6c3e504903e164ef3ed5f3f6769720bd33f51de15fd2a59bf7c76502d44fc25a58c94b8030b9', 76, 1, 'MyApp', '[]', 0, '2024-03-03 16:17:12', '2024-03-03 16:17:12', '2025-03-03 21:47:12'),
('e8890a0e896273ae69192b6f543f9414d27aa2b7020b58dcdcd55df8d4456eabc282dcd2931d412e', 126, 1, 'MyApp', '[]', 0, '2024-04-23 06:19:31', '2024-04-23 06:19:31', '2025-04-23 11:49:31'),
('e8e852b57f7b5ceb1c2469d25385ca5843c522e4cf19176291633c5c32371c2ee607a6055612b950', 129, 1, 'MyApp', '[]', 0, '2024-04-21 14:32:52', '2024-04-21 14:32:52', '2025-04-21 20:02:52'),
('e8ff6a3e9b53221f6834711785db9ec554084cb9c888b7690f851b8b9f35e53adf2846267fe64484', 60, 1, 'MyApp', '[]', 0, '2024-01-22 05:03:55', '2024-01-22 05:03:55', '2025-01-22 10:33:55'),
('e9680d55740dbaf4f80c77306d73338287df07c519e1db8a164c618c4d3b01f7adfa10bac48316b7', 51, 1, 'MyApp', '[]', 0, '2024-01-12 04:42:16', '2024-01-12 04:42:16', '2025-01-12 10:12:16'),
('ea134615937275d7d2b996f6a2af3f4b228d12f17d5c09bdea615e2aaecda7afa4a9ea2b0e59ee25', 85, 1, 'MyApp', '[]', 0, '2024-02-29 08:58:03', '2024-02-29 08:58:03', '2025-03-01 14:28:03'),
('ea32c04419268ff91b45f877c6021a4dec7d424493f0a3c3de1da68aa9b1445a60adcaeec6382336', 12, 1, 'MyApp', '[]', 0, '2023-12-28 05:23:47', '2023-12-28 05:23:47', '2024-12-28 10:53:47'),
('eaab43d347e5eb6aca1dbbde04f0215d5f096b4bb5e033776e8f3fc7ae446ac9999ed24a2054ce01', 12, 1, 'MyApp', '[]', 0, '2023-12-15 08:45:30', '2023-12-15 08:45:30', '2024-12-15 14:15:30'),
('eab1e162d94bdba59b1bf8c029621577ccb66d525ed47b9a34a79365bc5dde46b49505d0581975eb', 12, 1, 'MyApp', '[]', 0, '2023-12-18 09:49:30', '2023-12-18 09:49:30', '2024-12-18 15:19:30'),
('ead79d115340514f2e2a6e8c7dd58d6a4efc760cfdeec7cb41c1a83bc757f76d9574637eb3b27946', 56, 1, 'MyApp', '[]', 0, '2024-01-25 14:29:57', '2024-01-25 14:29:57', '2025-01-25 19:59:57'),
('eb110eac2f3b528b05dda0ffc4707c78b2976d02962c2bacdd700e973dfcb4ee7da3f23645af95ff', 126, 1, 'MyApp', '[]', 0, '2024-03-19 13:05:29', '2024-03-19 13:05:29', '2025-03-19 18:35:29'),
('eb23379e26120fe9bd47824bca021f90e399eae6c7762aba38c05a06eeff97560b8f021e060cf53c', 172, 1, 'MyApp', '[]', 0, '2024-04-16 07:40:52', '2024-04-16 07:40:52', '2025-04-16 13:10:52'),
('eb781c97a314cfdb03284d7b66911207d2ca6d424fed42120406240628748f3d9ce35c9d8493c686', 159, 1, 'MyApp', '[]', 0, '2024-04-09 03:55:10', '2024-04-09 03:55:10', '2025-04-09 09:25:10'),
('eba61260472a7e47862bced28a066b18c428833505c10280a1270706276e78e22af997255ac0f698', 139, 1, 'MyApp', '[]', 0, '2024-03-08 05:33:46', '2024-03-08 05:33:46', '2025-03-08 11:03:46'),
('ebea863abd81da571ad4d268928be1ec9dd4f2942bbd926f7ad077975486af2ab5ca5642d632fd96', 128, 1, 'MyApp', '[]', 0, '2024-03-11 13:08:57', '2024-03-11 13:08:57', '2025-03-11 18:38:57'),
('ec55490ac623308656c79b399d1f7c9d88d19561a45469c56829e283b40a519995044befb7c22c87', 126, 1, 'MyApp', '[]', 0, '2024-03-07 13:36:35', '2024-03-07 13:36:35', '2025-03-07 19:06:35'),
('ec6a9fbf59544a7c47789115eab12306d1401a7b56d6999f4de03f56786a1a4ae19a7229d226592a', 106, 1, 'MyApp', '[]', 0, '2024-02-23 11:50:58', '2024-02-23 11:50:58', '2025-02-23 17:20:58'),
('ec6f795bd022e61e18495c3f5d6df080f717df86438675ca4d9e0e15135c307b8b0e2570387ff042', 126, 1, 'MyApp', '[]', 0, '2024-03-19 05:37:02', '2024-03-19 05:37:02', '2025-03-19 11:07:02'),
('ed02cc23086fca8de961070577fd4fd52189455285526ec5039ce526a47e64e8b6cc1f7dc743bbeb', 159, 1, 'MyApp', '[]', 0, '2024-04-06 13:01:54', '2024-04-06 13:01:54', '2025-04-06 18:31:54'),
('ed0839ca067a7ef0269b4a1a23ba0bb7d986c6e64c7ec05cb4e790f242bd19d8c7a9ca61222720fa', 127, 1, 'MyApp', '[]', 0, '2024-03-06 05:17:41', '2024-03-06 05:17:41', '2025-03-06 10:47:41'),
('ed3f1588a95bf104b50994b9bddf16e325d6583f88beffae1a417dfb81a6b31f0336fb0bec4c4c74', 182, 1, 'MyApp', '[]', 0, '2024-04-21 07:41:17', '2024-04-21 07:41:17', '2025-04-21 13:11:17'),
('ed4ee9d22b01eadb3f88e125099728e4ba0829180b2b89c621e7be4e705a2a16d2c86f3c94b21ef3', 56, 1, 'MyApp', '[]', 0, '2024-01-22 05:58:14', '2024-01-22 05:58:14', '2025-01-22 11:28:14'),
('ed8a23e3c9f954cfcf09edc44b503a5f674603ebfb2978fc0b0141091138ed055cab28747a33b68c', 12, 1, 'MyApp', '[]', 0, '2023-12-19 07:49:01', '2023-12-19 07:49:01', '2024-12-19 13:19:01'),
('ede4aec5b995eb9a04b7f9bc8636cdfdce913a8fa86cac9f0ac0fabd0cf824a02d69254dc20f41cd', 58, 1, 'MyApp', '[]', 0, '2024-01-20 12:34:10', '2024-01-20 12:34:10', '2025-01-20 18:04:10'),
('ee0d6126f04eb1f5483a8964e6a8f8f6091cf7943ec95e21702a4799751bfde51b6499835c302243', 159, 1, 'MyApp', '[]', 0, '2024-03-26 13:10:30', '2024-03-26 13:10:30', '2025-03-26 18:40:30'),
('ee304515a65fbdb2fc86108dcd58d46c582d1bf627d162b3f7d8cbe06ff757f4df3d451ef313009b', 3, 1, 'MyApp', '[]', 0, '2023-12-29 13:53:20', '2023-12-29 13:53:20', '2024-12-29 19:23:20'),
('ee3555c8116fcfacb572fc1f53cfd755ef67a58596401b067596e9a36c167bd2b05da6613385a719', 12, 1, 'MyApp', '[]', 0, '2023-12-14 18:32:32', '2023-12-14 18:32:32', '2024-12-15 00:02:32'),
('ee41bd8e50abe69b7b89a86633fc1b83729e0f5f43dae739793eada2ed77a1d26c7cbd197f930ff5', 128, 1, 'MyApp', '[]', 0, '2024-03-19 06:07:57', '2024-03-19 06:07:57', '2025-03-19 11:37:57'),
('ee4907c2b9002cfe4ba15cfa54cfc797719692dc7d43398d10f27cc48bd043f5eeaa99b6a817316f', 80, 1, 'MyApp', '[]', 0, '2024-01-25 09:52:39', '2024-01-25 09:52:39', '2025-01-25 15:22:39'),
('eeb162777944385340fe59a79f3ae6379b4004e0dd24297472d5f7816e5022916abac9e1ce66a7f6', 14, 1, 'MyApp', '[]', 0, '2023-12-14 15:46:17', '2023-12-14 15:46:17', '2024-12-14 21:16:17'),
('eebe38ca2ba03e3b69e368e329b171ba95f8da2fdbbcec0663db64f1de58aa753c9ee973d350822f', 126, 1, 'MyApp', '[]', 0, '2024-03-19 12:45:22', '2024-03-19 12:45:22', '2025-03-19 18:15:22'),
('ef231f1f615206516077e5c9d09800ef792eade55cb3d580ee0b1020c1f3db505ab2d1c0277dea59', 56, 1, 'MyApp', '[]', 0, '2024-02-05 14:24:35', '2024-02-05 14:24:35', '2025-02-05 19:54:35'),
('ef9c99a085070474d1b0dc32902ca9d1f1dc5a6f423571beac0de39058656ac890ed064095aad612', 85, 1, 'MyApp', '[]', 0, '2024-02-06 14:01:31', '2024-02-06 14:01:31', '2025-02-06 19:31:31'),
('efdc22903cdcfcb644d996b38643ee9282070fc33069e9982df04eb1193627db3093d35dd5d02324', 146, 1, 'MyApp', '[]', 0, '2024-03-15 04:36:24', '2024-03-15 04:36:24', '2025-03-15 10:06:24'),
('f0013ce92ed1be3e10b3b7a91972465233de1b57fd7caa93cb1fe3b124716b3c567faaa557eb2ed4', 129, 1, 'MyApp', '[]', 0, '2024-04-21 07:27:25', '2024-04-21 07:27:25', '2025-04-21 12:57:25'),
('f01c95160b695b1861c7f780c93dc9add48b26502a7876e4e1752ccbb5a68caf0fa32205abc3c86a', 12, 1, 'MyApp', '[]', 0, '2023-12-12 08:54:46', '2023-12-12 08:54:46', '2024-12-12 14:24:46'),
('f0678ad8ac702db000a3124ac463eb571ef7b2bce6051a6eef2efecdce7bb9f0db5aa659d3973dd4', 43, 1, 'MyApp', '[]', 0, '2023-12-29 04:52:55', '2023-12-29 04:52:55', '2024-12-29 10:22:55'),
('f0acc8dae5f9ae9029d926eac6f02796ccc4cb19477659473e000be6bce85a55ec3e200b0e0918ac', 129, 1, 'MyApp', '[]', 0, '2024-03-28 16:55:35', '2024-03-28 16:55:35', '2025-03-28 22:25:35'),
('f0bbc56525a841a5a8d5cc42a7ac170141662d50a5a53d56bbd27b6a4053d42a550851a4bcd6a0fb', 56, 1, 'MyApp', '[]', 0, '2024-02-07 05:21:20', '2024-02-07 05:21:20', '2025-02-07 10:51:20'),
('f0bf59edf096159eedd0bc6a6e9c42cb31e4459e375eddb4c1f36227237071365e67297b132b88d3', 40, 1, 'MyApp', '[]', 0, '2023-12-29 04:57:01', '2023-12-29 04:57:01', '2024-12-29 10:27:01'),
('f0d121b8173d7da90a5efdaea16e002cda266cb2b3b0cbfc3195b6eddfb4b5e0917f2d72a3e89cf5', 129, 1, 'MyApp', '[]', 0, '2024-04-21 09:59:12', '2024-04-21 09:59:12', '2025-04-21 15:29:12'),
('f10fab0a66545f2d3bbd3b6528db044e893145dfb8af1e0bedab198c01a842ac01688be771eb29ea', 182, 1, 'MyApp', '[]', 0, '2024-04-05 04:19:12', '2024-04-05 04:19:12', '2025-04-05 09:49:12'),
('f132fe9030acd7bed65ebc7d7a839bee11098fb96a3fcc072552a6fca6960a386821f95c24a4282a', 102, 1, 'MyApp', '[]', 0, '2024-02-18 15:04:06', '2024-02-18 15:04:06', '2025-02-18 20:34:06'),
('f168472ed084c471c80283d29272e320c391fcedbe493a3812ca2378e130c92d647dacdf2c0bc98d', 77, 1, 'MyApp', '[]', 0, '2024-02-21 09:45:10', '2024-02-21 09:45:10', '2025-02-21 15:15:10'),
('f1852e706d0dbd4a91638b077b729d61169a39bd858ac4408d61cced2bc23079202ff0168c564c44', 79, 1, 'MyApp', '[]', 0, '2024-01-24 08:07:06', '2024-01-24 08:07:06', '2025-01-24 13:37:06'),
('f1d5eeec55c70f770b13670937ec3a64bd14e6dba29f3a14f9e30c4434c376ac192ee1cb0066bea0', 159, 1, 'MyApp', '[]', 0, '2024-04-18 13:40:25', '2024-04-18 13:40:25', '2025-04-18 19:10:25'),
('f28a303a4bc37f07a8696b2a8f0a67b709ec5fda5ef77c4d8f6d3dc68ce09264acc05edde0d85514', 146, 1, 'MyApp', '[]', 0, '2024-04-18 07:06:16', '2024-04-18 07:06:16', '2025-04-18 12:36:16'),
('f2ed1e3976826c2a334038f8d4aa2de1d0c7f9dd0cef248c145448df751cf95cf107752d5c1fba52', 59, 1, 'MyApp', '[]', 0, '2024-01-24 10:17:34', '2024-01-24 10:17:34', '2025-01-24 15:47:34'),
('f323033d928c1182266008d0ec7e08628ec670bcfb5fe9f9e3b743799456a19b06a5c9aead6a9a3d', 59, 1, 'MyApp', '[]', 0, '2024-01-27 04:20:28', '2024-01-27 04:20:28', '2025-01-27 09:50:28'),
('f33de821ff52a64186d5840978b29db5eaa956fcdeb6211177e757cc1216d1b8d0993ca83a57b765', 80, 1, 'MyApp', '[]', 0, '2024-02-06 04:21:32', '2024-02-06 04:21:32', '2025-02-06 09:51:32'),
('f3d66d6da7107e00a4969f8d3d986a0a21d230655147e743980623baac4e9c262805656e26454c32', 172, 1, 'MyApp', '[]', 0, '2024-04-12 06:34:00', '2024-04-12 06:34:00', '2025-04-12 12:04:00'),
('f4110aa5e4bc2eb1b7396b368d5f7fc6835d2d1905dbd399e6bb468d97150bc5ce316bfdbf3ed64c', 159, 1, 'MyApp', '[]', 0, '2024-04-09 04:56:12', '2024-04-09 04:56:12', '2025-04-09 10:26:12'),
('f434905eb21805bbfdf6288740066e70bca5aa140490d6bd5f185126f48d6dfe722a6729779126c5', 52, 1, 'MyApp', '[]', 0, '2024-01-12 07:22:57', '2024-01-12 07:22:57', '2025-01-12 12:52:57'),
('f49453da4cab877593c2602e533bcd6f1e0bf21234d5c2d109874329ff220efe16af1acf3c6d0412', 38, 1, 'MyApp', '[]', 0, '2023-12-27 08:55:41', '2023-12-27 08:55:41', '2024-12-27 14:25:41'),
('f4adcf57c26c39cd6a7df0d6600314d965f0a8c4ec26452a03ae8f746a8e5064dc644eb9aca08ca5', 182, 1, 'MyApp', '[]', 0, '2024-04-11 17:18:51', '2024-04-11 17:18:51', '2025-04-11 22:48:51'),
('f4e73581ab63bc7cfd62c734b16b4c8c9e392d905b8b61c7fddec8419a0042a28338d31affea3cf7', 12, 1, 'MyApp', '[]', 0, '2023-12-26 12:32:52', '2023-12-26 12:32:52', '2024-12-26 18:02:52'),
('f5490f73439516ec99f976651b26146ac216e4809113460c0e04fda5e38f25e6bbd255198bba10c7', 85, 1, 'MyApp', '[]', 0, '2024-02-26 11:48:33', '2024-02-26 11:48:33', '2025-02-26 17:18:33'),
('f5494896b86dd53b552ed5b8f5940952bc29c96c7782cead3c1d5ad0d796867f976a666722c47b16', 52, 1, 'MyApp', '[]', 0, '2024-01-12 07:04:14', '2024-01-12 07:04:14', '2025-01-12 12:34:14'),
('f54a7ab9a4b7be57f6593290b2eebf1b9456a155d680fe244e9dc90a345c83a69e2fcdf7c7745462', 56, 1, 'MyApp', '[]', 0, '2024-02-03 05:53:17', '2024-02-03 05:53:17', '2025-02-03 11:23:17'),
('f58d1f8769e7b918c96f46f0dcb492922c9e2193b0565c4d3642aff22fde0c69d772da33071303c5', 159, 1, 'MyApp', '[]', 0, '2024-03-26 12:58:14', '2024-03-26 12:58:14', '2025-03-26 18:28:14'),
('f5da9dc1bcd665613e7a8a0d547963769918b9fc1f5fc10fd0810ef4015c5df7c561309633db610e', 128, 1, 'MyApp', '[]', 0, '2024-03-08 07:17:20', '2024-03-08 07:17:20', '2025-03-08 12:47:20'),
('f5e28e1e3b8d98b319134e7d08f15486d15c47fd940a8e825a4dc840b69c39c08b37363c2c191a37', 6, 1, 'MyApp', '[]', 0, '2023-12-11 06:21:12', '2023-12-11 06:21:12', '2024-12-11 11:51:12'),
('f654c85adab46bd3468a048c3b24b170a87a311e970276a705e60dd90218bfea84c6ce007364dcb6', 130, 1, 'MyApp', '[]', 0, '2024-03-08 09:15:57', '2024-03-08 09:15:57', '2025-03-08 14:45:57'),
('f6ad6d483a2566432363d4da3515a0ef710160d1f7e916446267871f5737bfeab5866f06c043bb6e', 60, 1, 'MyApp', '[]', 0, '2024-01-22 04:57:50', '2024-01-22 04:57:50', '2025-01-22 10:27:50'),
('f6bda97d4658ad426975fb21a49113549391b0fea292d258f3e278367d4a997c67736eee98303d21', 85, 1, 'MyApp', '[]', 0, '2024-02-27 06:20:46', '2024-02-27 06:20:46', '2025-02-27 11:50:46'),
('f792d54818904544100d9376e05228aa5e0a98f2be7b6c7fdd313ab718fa0e63a01fc65139c0b57d', 126, 1, 'MyApp', '[]', 0, '2024-03-06 05:02:24', '2024-03-06 05:02:24', '2025-03-06 10:32:24'),
('f7a6f56c48983af64b5781c7997408b2fd167037d38955a19181801cab609623b5b374bd0f4e60cb', 11, 1, 'MyApp', '[]', 0, '2023-12-12 07:11:13', '2023-12-12 07:11:13', '2024-12-12 12:41:13'),
('f7e22d93c749c290641a368702b9aa7afee11030e19932c8cd886d3a85df14d5a2ef154d493c6a55', 56, 1, 'MyApp', '[]', 0, '2024-02-09 05:42:58', '2024-02-09 05:42:58', '2025-02-09 11:12:58'),
('f7e503941ee9ab79ab514a6663e9596e789eab1c9c46c68d3727a5983b3729f885deb3142a5da10d', 76, 1, 'MyApp', '[]', 0, '2024-02-21 09:49:47', '2024-02-21 09:49:47', '2025-02-21 15:19:47'),
('f844090065180743d4273ecd33efece1360ce177ccab1a650528188c10372ab4fd4e5e12f78a3bee', 36, 1, 'MyApp', '[]', 0, '2023-12-22 07:17:11', '2023-12-22 07:17:11', '2024-12-22 12:47:11'),
('f8ab0a85e5c68bdf6bb4f13dc936b230fb1680bdddcbea89f10519f3624c9f95fcff4f9f0fab74e1', 27, 1, 'MyApp', '[]', 0, '2023-12-16 12:16:55', '2023-12-16 12:16:55', '2024-12-16 17:46:55'),
('f91286c6ee57cd67f8070d77e74d9343071b6e288814b5e730c0fe39f81c1a968152db2858d4bd49', 187, 1, 'MyApp', '[]', 0, '2024-04-18 12:39:34', '2024-04-18 12:39:34', '2025-04-18 18:09:34'),
('f93953520b11637fd80490ef2c15094eccd88ada3c5943747cd9f3bca6e8c026bc83e6b14d44da66', 129, 1, 'MyApp', '[]', 0, '2024-03-08 09:14:33', '2024-03-08 09:14:33', '2025-03-08 14:44:33'),
('f942996e113cf8484354434be53d979ea7db222cf33b5a539e71142432672389082f7959db131ea6', 126, 1, 'MyApp', '[]', 0, '2024-04-24 04:56:45', '2024-04-24 04:56:45', '2025-04-24 10:26:45'),
('f942d080f748ac59c79af967ad327889f476d07f64edbb65f9862fca20db0be5a3853c85ac90b63d', 88, 1, 'MyApp', '[]', 0, '2024-03-03 09:59:53', '2024-03-03 09:59:53', '2025-03-03 15:29:53'),
('f96cb3c84efec520c6ae24f3d0b931df10e6fae7bc34ddb20b5c00a81e896ca72b7b46b09c8139df', 130, 1, 'MyApp', '[]', 0, '2024-03-08 08:15:58', '2024-03-08 08:15:58', '2025-03-08 13:45:58'),
('f97682f74db0679681b9ff87afc6964c8f87f07ddb53b961e13d725ca8b8b249305dcc5145f97832', 11, 1, 'MyApp', '[]', 0, '2023-12-11 12:35:56', '2023-12-11 12:35:56', '2024-12-11 18:05:56'),
('f9b06bda503d89b7524085f6045926d7d05f6386429245b5f4ce6af0b3b7f9cc8d71bec9a29f0c4f', 80, 1, 'MyApp', '[]', 0, '2024-03-04 09:33:33', '2024-03-04 09:33:33', '2025-03-04 15:03:33'),
('f9bcab5b199deab339ee04fceb822ca809ed01c7a1a66d3412a3edd0165585e1511c5d2ed62cb342', 80, 1, 'MyApp', '[]', 0, '2024-03-04 09:39:10', '2024-03-04 09:39:10', '2025-03-04 15:09:10'),
('f9c790bf654584aeaa6f6469d0ff71dc5f1aafc6a19f86207538d4e3c5124d98a4560ad9f268a991', 116, 1, 'MyApp', '[]', 0, '2024-03-02 17:17:41', '2024-03-02 17:17:41', '2025-03-02 22:47:41'),
('fab2cf82ef696de057dce603e15b1297a4c58dc142061e8db78412eac746b264fd14bce4474ab008', 91, 1, 'MyApp', '[]', 0, '2024-02-29 08:46:39', '2024-02-29 08:46:39', '2025-03-01 14:16:39'),
('faf2abd2d1f8ea4e35392f4460b13b014d21c58bb876c81484dcab580b114614988c002cabc6b6c9', 60, 1, 'MyApp', '[]', 0, '2024-01-22 04:52:02', '2024-01-22 04:52:02', '2025-01-22 10:22:02'),
('faf923bbd586b3f88c7312846cf375e689e032d49bd16c343d3858be17b886bd5ff81877ea58085a', 129, 1, 'MyApp', '[]', 0, '2024-03-19 13:56:28', '2024-03-19 13:56:28', '2025-03-19 19:26:28'),
('fb27cc971e4cc31a3f353da198579c4b42214a0d66e59143aeb88aa60de56139700703b3ce42e6d4', 130, 1, 'MyApp', '[]', 0, '2024-03-10 08:02:55', '2024-03-10 08:02:55', '2025-03-10 13:32:55'),
('fb50fecfbc097ea3ec133b9fc80a21e3f586e3b1e1a8139de02e6c8e63fae782b5992550260e2358', 37, 1, 'MyApp', '[]', 0, '2023-12-26 13:48:47', '2023-12-26 13:48:47', '2024-12-26 19:18:47'),
('fb7eb14f6260d4c8db296d29f32f3ef50e717a15fa1372f02dfdf8065cb0956a2ccdf2f6b4905f09', 54, 1, 'MyApp', '[]', 0, '2024-01-12 06:38:32', '2024-01-12 06:38:32', '2025-01-12 12:08:32'),
('fc574e8203a20ad6d97f33a066a0a1780c1c1b79e8717535b428017800e774323e0851a6b5335380', 129, 1, 'MyApp', '[]', 0, '2024-03-12 04:16:49', '2024-03-12 04:16:49', '2025-03-12 09:46:49'),
('fc5accb524872f744b6ad5d21b665a827a348c8d7e388afd5c8d12eaf7c5b428dd00bbd0395d7e54', 8, 1, 'MyApp', '[]', 0, '2023-12-11 06:03:52', '2023-12-11 06:03:52', '2024-12-11 11:33:52'),
('fc6ceeb963a69ad47a286008efe0aa4c0ab5fec571ad3b11b0d3d6e95ef67bd075f135fbfd7995df', 172, 1, 'MyApp', '[]', 0, '2024-04-22 13:30:35', '2024-04-22 13:30:35', '2025-04-22 19:00:35'),
('fcf7c0c1bceae1427ca2c17aae24a0acbd81bbb80ff0beac2a654f30fca775018438274108ab9ba0', 172, 1, 'MyApp', '[]', 0, '2024-04-24 06:31:24', '2024-04-24 06:31:24', '2025-04-24 12:01:24'),
('fd2d812112307e6bfdb267ef55ad22dcf80a7f1d9e3188a1a0768078376b41cff6e469fd5c73917b', 56, 1, 'MyApp', '[]', 0, '2024-02-05 07:38:43', '2024-02-05 07:38:43', '2025-02-05 13:08:43'),
('fd968a4d39f53d242d178cb5650197ff3549d63b287458fee13e7946e4535438af3191b2a24b932a', 58, 1, 'MyApp', '[]', 0, '2024-02-10 09:08:05', '2024-02-10 09:08:05', '2025-02-10 14:38:05'),
('fddd444dd6fb2d52b304d4d11a306279ec2224eedf7ad24bf9867892c959fb431e55129289f3716a', 159, 1, 'MyApp', '[]', 0, '2024-04-14 17:56:05', '2024-04-14 17:56:05', '2025-04-14 23:26:05'),
('fde41dcb288cab0cf50d643266319efe6efaf3567b43fcac2adf69575bff0c239d95aabbef9ed51c', 146, 1, 'MyApp', '[]', 0, '2024-03-19 12:47:13', '2024-03-19 12:47:13', '2025-03-19 18:17:13'),
('fe52e086f296c5a702cab60ca90a32ee0323e453585c4f13430ccd8f8d8c4c2d7cb0776a813423ec', 129, 1, 'MyApp', '[]', 0, '2024-04-21 06:55:27', '2024-04-21 06:55:27', '2025-04-21 12:25:27'),
('fe838cdcc876783bb3cf563c27e01be733c02cc38c2a0bbf8b95207a123224218161f69e4ce11731', 57, 1, 'MyApp', '[]', 0, '2024-02-14 09:14:06', '2024-02-14 09:14:06', '2025-02-14 14:44:06'),
('fecb5e9459165d70d81c758b51800a4c09d87ad4efecaa592c2678a555082bf59f77c7a515ec2732', 78, 1, 'MyApp', '[]', 0, '2024-03-05 12:35:34', '2024-03-05 12:35:34', '2025-03-05 18:05:34'),
('fee202396a65530029a92f55a88c67385c4daf7ea174efd469baaf4746fe3b92cc9228b6fa25a00a', 126, 1, 'MyApp', '[]', 0, '2024-03-19 07:41:16', '2024-03-19 07:41:16', '2025-03-19 13:11:16'),
('ffbf83016029d077b9fd6d4a840176c6298972c4a56fca9d4e7c22ec591267d6eddc0525945669cb', 129, 1, 'MyApp', '[]', 0, '2024-03-18 11:29:19', '2024-03-18 11:29:19', '2025-03-18 16:59:19');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `client_id` bigint UNSIGNED NOT NULL,
  `scopes` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 's', '7nrdpMGlEVZVKwhnh6vbFxlPrwsA6ERG8Fr2JFJb', NULL, 'http://localhost', 1, 0, 0, '2023-12-06 10:14:06', '2023-12-06 10:14:06');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint UNSIGNED NOT NULL,
  `client_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2023-12-06 10:14:06', '2023-12-06 10:14:06');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'role-list', 'web', '2023-12-06 09:46:00', '2023-12-06 09:46:00'),
(2, 'role-create', 'web', '2023-12-06 09:46:00', '2023-12-06 09:46:00'),
(3, 'role-edit', 'web', '2023-12-06 09:46:00', '2023-12-06 09:46:00'),
(4, 'role-delete', 'web', '2023-12-06 09:46:00', '2023-12-06 09:46:00'),
(5, 'user-list', 'web', '2023-12-06 09:46:00', '2023-12-06 09:46:00'),
(6, 'user-create', 'web', '2023-12-06 09:46:00', '2023-12-06 09:46:00'),
(7, 'user-edit', 'web', '2023-12-06 09:46:00', '2023-12-06 09:46:00'),
(8, 'user-delete', 'web', '2023-12-06 09:46:00', '2023-12-06 09:46:00');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `points`
--

CREATE TABLE `points` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `points`
--

INSERT INTO `points` (`id`, `posts_id`, `user_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(97, 559, 128, 1, '2024-03-06 09:45:26', '2024-03-06 09:45:27', '2024-03-06 09:45:27'),
(98, 559, 128, 1, '2024-03-06 09:45:28', '2024-03-06 09:45:29', '2024-03-06 09:45:29'),
(99, 647, 132, 1, '2024-03-09 05:23:25', '2024-03-09 05:23:25', NULL),
(100, 559, 132, 1, '2024-03-09 05:23:27', '2024-03-09 05:23:27', NULL),
(108, 544, 126, 1, '2024-03-09 11:30:34', '2024-03-09 11:30:36', '2024-03-09 11:30:36'),
(109, 660, 126, 1, '2024-03-09 13:16:38', '2024-03-09 13:16:38', NULL),
(110, 660, 128, 1, '2024-03-09 13:17:50', '2024-03-09 13:17:51', '2024-03-09 13:17:51'),
(111, 660, 128, 1, '2024-03-09 13:17:59', '2024-03-09 13:18:02', '2024-03-09 13:18:02'),
(112, 660, 128, 1, '2024-03-09 13:18:15', '2024-03-09 13:18:15', NULL),
(113, 660, 143, 1, '2024-03-09 13:22:34', '2024-03-09 13:22:34', NULL),
(114, 662, 128, 1, '2024-03-09 13:30:51', '2024-03-09 13:58:58', '2024-03-09 13:58:58'),
(115, 662, 128, 1, '2024-03-09 13:59:05', '2024-03-09 13:59:05', NULL),
(116, 559, 144, 1, '2024-03-11 06:40:02', '2024-03-11 06:40:08', '2024-03-11 06:40:08'),
(117, 559, 144, 1, '2024-03-11 06:40:09', '2024-03-11 06:40:17', '2024-03-11 06:40:17'),
(118, 559, 144, 1, '2024-03-11 06:40:22', '2024-03-11 06:40:22', NULL),
(119, 660, 144, 1, '2024-03-11 06:42:28', '2024-03-11 06:42:28', NULL),
(120, 662, 143, 1, '2024-03-11 06:44:10', '2024-03-11 06:44:10', NULL),
(121, 673, 128, 1, '2024-03-11 13:28:10', '2024-03-11 13:28:10', NULL),
(123, 681, 128, 1, '2024-03-13 05:26:00', '2024-03-13 05:26:00', NULL),
(124, 680, 143, 1, '2024-03-13 05:30:43', '2024-03-13 05:30:43', NULL),
(125, 681, 143, 1, '2024-03-13 05:31:03', '2024-03-13 05:31:03', NULL),
(126, 700, 128, 1, '2024-03-13 07:57:06', '2024-03-13 07:57:06', NULL),
(127, 699, 128, 1, '2024-03-13 11:08:31', '2024-03-13 11:08:31', NULL),
(128, 544, 128, 1, '2024-03-13 12:12:18', '2024-03-13 12:12:18', NULL),
(129, 647, 128, 1, '2024-03-13 12:14:46', '2024-03-13 12:14:46', NULL),
(130, 774, 126, 1, '2024-03-19 06:54:45', '2024-03-19 06:54:45', NULL),
(131, 772, 126, 1, '2024-03-19 06:55:11', '2024-03-19 06:55:11', NULL),
(132, 765, 146, 1, '2024-03-19 07:00:24', '2024-03-19 07:00:24', NULL),
(133, 775, 126, 1, '2024-03-19 07:03:57', '2024-03-19 07:03:57', NULL),
(134, 776, 126, 1, '2024-03-19 07:41:29', '2024-03-19 07:41:29', NULL),
(135, 770, 126, 1, '2024-03-19 07:41:34', '2024-03-19 07:41:34', NULL),
(136, 766, 126, 1, '2024-03-19 07:41:38', '2024-03-19 07:41:38', NULL),
(137, 777, 126, 1, '2024-03-19 07:41:48', '2024-03-19 07:41:48', NULL),
(138, 681, 126, 1, '2024-03-19 08:57:23', '2024-03-19 08:57:23', NULL),
(139, 735, 126, 1, '2024-03-19 08:57:28', '2024-03-19 08:57:28', NULL),
(140, 647, 126, 1, '2024-03-19 09:00:21', '2024-03-19 09:00:21', NULL),
(141, 771, 126, 1, '2024-03-19 10:05:21', '2024-03-19 10:05:21', NULL),
(142, 767, 126, 1, '2024-03-19 11:04:53', '2024-03-19 11:04:53', NULL),
(143, 559, 126, 1, '2024-03-19 11:05:02', '2024-03-19 11:05:02', NULL),
(144, 544, 126, 1, '2024-03-19 11:05:14', '2024-03-19 11:05:17', '2024-03-19 11:05:17'),
(145, 544, 126, 1, '2024-03-19 11:05:18', '2024-03-19 11:05:18', NULL),
(146, 743, 126, 1, '2024-03-19 11:13:39', '2024-03-19 11:13:39', NULL),
(147, 744, 126, 1, '2024-03-19 11:14:50', '2024-03-19 11:14:50', NULL),
(148, 736, 126, 1, '2024-03-19 11:16:39', '2024-03-19 11:16:39', '2024-03-19 11:16:39'),
(149, 736, 126, 1, '2024-03-19 11:16:40', '2024-03-19 11:16:40', NULL),
(150, 780, 126, 1, '2024-03-19 11:16:45', '2024-03-19 11:16:45', NULL),
(151, 779, 126, 1, '2024-03-19 11:16:46', '2024-03-19 11:16:49', '2024-03-19 11:16:49'),
(152, 779, 126, 1, '2024-03-19 11:16:49', '2024-03-19 11:16:50', '2024-03-19 11:16:50'),
(153, 779, 126, 1, '2024-03-19 11:16:50', '2024-03-19 11:16:50', '2024-03-19 11:16:50'),
(154, 779, 126, 1, '2024-03-19 11:16:50', '2024-03-19 11:16:51', '2024-03-19 11:16:51'),
(155, 779, 126, 1, '2024-03-19 11:16:51', '2024-03-19 11:16:51', '2024-03-19 11:16:51'),
(156, 779, 126, 1, '2024-03-19 11:16:51', '2024-03-19 11:16:52', '2024-03-19 11:16:52'),
(157, 779, 126, 1, '2024-03-19 11:16:52', '2024-03-19 11:16:52', '2024-03-19 11:16:52'),
(158, 779, 126, 1, '2024-03-19 11:16:52', '2024-03-19 11:16:52', '2024-03-19 11:16:52'),
(159, 779, 126, 1, '2024-03-19 11:16:53', '2024-03-19 11:16:53', '2024-03-19 11:16:53'),
(160, 779, 126, 1, '2024-03-19 11:16:53', '2024-03-19 11:16:53', '2024-03-19 11:16:53'),
(161, 779, 126, 1, '2024-03-19 11:16:54', '2024-03-19 11:16:54', '2024-03-19 11:16:54'),
(162, 779, 126, 1, '2024-03-19 11:16:54', '2024-03-19 11:16:54', '2024-03-19 11:16:54'),
(163, 779, 126, 1, '2024-03-19 11:16:54', '2024-03-19 11:16:55', '2024-03-19 11:16:55'),
(164, 779, 126, 1, '2024-03-19 11:16:55', '2024-03-19 11:16:55', '2024-03-19 11:16:55'),
(165, 713, 126, 1, '2024-03-19 11:17:07', '2024-03-19 11:17:07', '2024-03-19 11:17:07'),
(166, 713, 126, 1, '2024-03-19 11:17:07', '2024-03-19 11:17:08', '2024-03-19 11:17:08'),
(167, 713, 126, 1, '2024-03-19 11:17:08', '2024-03-19 11:17:08', '2024-03-19 11:17:08'),
(168, 713, 126, 1, '2024-03-19 11:17:08', '2024-03-19 11:17:08', '2024-03-19 11:17:08'),
(169, 713, 126, 1, '2024-03-19 11:17:09', '2024-03-19 11:17:09', '2024-03-19 11:17:09'),
(170, 713, 126, 1, '2024-03-19 11:17:09', '2024-03-19 11:17:10', '2024-03-19 11:17:10'),
(171, 713, 126, 1, '2024-03-19 11:17:22', '2024-03-19 11:17:23', '2024-03-19 11:17:23'),
(172, 713, 126, 1, '2024-03-19 11:17:23', '2024-03-19 11:17:23', '2024-03-19 11:17:23'),
(173, 713, 126, 1, '2024-03-19 11:17:23', '2024-03-19 11:17:23', '2024-03-19 11:17:23'),
(174, 713, 126, 1, '2024-03-19 11:17:24', '2024-03-19 11:17:24', '2024-03-19 11:17:24'),
(175, 713, 126, 1, '2024-03-19 11:17:25', '2024-03-19 11:17:25', NULL),
(176, 784, 126, 1, '2024-03-19 11:29:44', '2024-03-19 11:29:44', NULL),
(177, 765, 126, 1, '2024-03-19 11:43:51', '2024-03-19 11:43:58', '2024-03-19 11:43:58'),
(178, 757, 126, 1, '2024-03-19 11:43:54', '2024-03-19 11:43:54', NULL),
(179, 765, 126, 1, '2024-03-19 11:43:58', '2024-03-19 11:43:58', '2024-03-19 11:43:58'),
(180, 765, 126, 1, '2024-03-19 11:43:58', '2024-03-19 11:43:58', '2024-03-19 11:43:58'),
(181, 765, 126, 1, '2024-03-19 11:43:59', '2024-03-19 11:43:59', '2024-03-19 11:43:59'),
(182, 765, 126, 1, '2024-03-19 11:43:59', '2024-03-19 11:43:59', '2024-03-19 11:43:59'),
(183, 765, 126, 1, '2024-03-19 11:43:59', '2024-03-19 11:44:00', '2024-03-19 11:44:00'),
(184, 765, 126, 1, '2024-03-19 11:44:00', '2024-03-19 11:44:00', '2024-03-19 11:44:00'),
(185, 765, 126, 1, '2024-03-19 11:44:00', '2024-03-19 11:44:00', '2024-03-19 11:44:00'),
(186, 765, 126, 1, '2024-03-19 11:44:01', '2024-03-19 11:44:01', '2024-03-19 11:44:01'),
(187, 765, 126, 1, '2024-03-19 11:44:01', '2024-03-19 11:44:01', '2024-03-19 11:44:01'),
(188, 765, 126, 1, '2024-03-19 11:44:02', '2024-03-19 11:44:02', '2024-03-19 11:44:02'),
(189, 765, 126, 1, '2024-03-19 11:44:02', '2024-03-19 11:44:02', '2024-03-19 11:44:02'),
(190, 765, 126, 1, '2024-03-19 11:44:02', '2024-03-19 11:44:02', '2024-03-19 11:44:02'),
(191, 765, 126, 1, '2024-03-19 11:44:03', '2024-03-19 11:44:03', '2024-03-19 11:44:03'),
(192, 765, 126, 1, '2024-03-19 11:44:03', '2024-03-19 11:44:03', '2024-03-19 11:44:03'),
(193, 765, 126, 1, '2024-03-19 11:44:04', '2024-03-19 11:44:04', NULL),
(194, 729, 126, 1, '2024-03-19 11:44:15', '2024-03-19 11:44:15', NULL),
(195, 724, 126, 1, '2024-03-19 11:44:16', '2024-03-19 11:44:16', NULL),
(196, 780, 146, 1, '2024-03-19 11:54:32', '2024-03-19 11:54:33', '2024-03-19 11:54:33'),
(197, 780, 146, 1, '2024-03-19 11:54:34', '2024-03-19 11:54:35', '2024-03-19 11:54:35'),
(198, 780, 146, 1, '2024-03-19 11:54:35', '2024-03-19 11:54:35', NULL),
(199, 772, 146, 1, '2024-03-19 11:54:43', '2024-03-19 11:54:43', NULL),
(200, 777, 146, 1, '2024-03-19 11:54:51', '2024-03-19 11:54:51', NULL),
(201, 681, 146, 1, '2024-03-19 11:55:19', '2024-03-19 11:55:20', '2024-03-19 11:55:20'),
(202, 681, 146, 1, '2024-03-19 11:55:20', '2024-03-19 11:55:21', '2024-03-19 11:55:21'),
(203, 544, 146, 1, '2024-03-19 11:55:37', '2024-03-19 11:55:40', '2024-03-19 11:55:40'),
(204, 544, 146, 1, '2024-03-19 11:55:40', '2024-03-19 11:55:40', NULL),
(205, 778, 126, 1, '2024-03-19 12:16:34', '2024-03-19 12:16:35', '2024-03-19 12:16:35'),
(206, 779, 126, 1, '2024-03-19 12:16:38', '2024-03-19 12:16:38', NULL),
(207, 796, 158, 1, '2024-03-23 15:52:00', '2024-03-23 15:52:02', '2024-03-23 15:52:02'),
(208, 640, 160, 1, '2024-03-28 17:44:53', '2024-03-28 17:44:54', '2024-03-28 17:44:54'),
(209, 640, 160, 1, '2024-03-28 17:44:56', '2024-03-28 17:44:56', NULL),
(210, 796, 160, 1, '2024-03-28 17:45:00', '2024-03-28 17:45:00', NULL),
(211, 780, 160, 1, '2024-03-28 17:57:02', '2024-03-28 17:57:03', '2024-03-28 17:57:03'),
(212, 796, 129, 1, '2024-03-29 19:33:46', '2024-03-29 19:33:48', '2024-03-29 19:33:48'),
(213, 796, 129, 1, '2024-03-29 19:33:54', '2024-03-29 19:33:54', '2024-03-29 19:33:54'),
(214, 639, 129, 1, '2024-03-29 19:35:15', '2024-03-29 19:35:16', '2024-03-29 19:35:16'),
(217, 801, 170, 1, '2024-03-30 17:45:47', '2024-03-30 17:45:47', '2024-03-30 17:45:47'),
(218, 801, 170, 1, '2024-03-30 17:45:48', '2024-03-30 17:45:49', '2024-03-30 17:45:49'),
(219, 801, 170, 1, '2024-03-30 17:45:53', '2024-03-30 17:45:54', '2024-03-30 17:45:54'),
(220, 801, 170, 1, '2024-03-30 17:46:04', '2024-03-30 17:46:05', '2024-03-30 17:46:05'),
(221, 801, 170, 1, '2024-03-30 17:46:33', '2024-03-30 17:46:34', '2024-03-30 17:46:34'),
(222, 801, 170, 1, '2024-03-30 17:46:36', '2024-03-30 17:46:48', '2024-03-30 17:46:48'),
(223, 801, 170, 1, '2024-03-30 17:46:48', '2024-03-30 17:46:55', '2024-03-30 17:46:55'),
(224, 801, 170, 1, '2024-03-30 17:46:59', '2024-03-30 17:47:00', '2024-03-30 17:47:00'),
(225, 801, 170, 1, '2024-03-30 17:47:04', '2024-03-30 17:47:04', '2024-03-30 17:47:04'),
(226, 801, 170, 1, '2024-03-30 17:49:59', '2024-03-30 17:49:59', NULL),
(227, 801, 172, 1, '2024-03-30 17:50:34', '2024-03-30 17:50:34', '2024-03-30 17:50:34'),
(228, 814, 171, 1, '2024-03-31 16:18:32', '2024-03-31 16:18:33', '2024-03-31 16:18:33'),
(229, 814, 171, 1, '2024-03-31 16:18:48', '2024-03-31 16:18:48', NULL),
(230, 814, 174, 1, '2024-04-01 15:32:56', '2024-04-01 15:32:56', NULL),
(231, 814, 175, 1, '2024-04-02 16:47:06', '2024-04-02 16:47:06', NULL),
(232, 813, 175, 1, '2024-04-02 16:47:10', '2024-04-02 16:47:15', '2024-04-02 16:47:15'),
(233, 813, 175, 1, '2024-04-02 16:47:16', '2024-04-02 16:47:16', NULL),
(234, 807, 178, 1, '2024-04-02 16:52:18', '2024-04-02 16:52:19', '2024-04-02 16:52:19'),
(235, 817, 181, 1, '2024-04-02 18:45:36', '2024-04-02 18:45:36', NULL),
(236, 816, 172, 1, '2024-04-03 15:07:57', '2024-04-03 15:07:57', NULL),
(237, 827, 175, 1, '2024-04-07 18:06:16', '2024-04-07 18:06:16', NULL),
(238, 828, 186, 1, '2024-04-15 16:55:00', '2024-04-15 16:55:00', NULL),
(239, 911, 145, 1, '2024-04-23 06:59:24', '2024-04-23 06:59:24', NULL),
(240, 910, 145, 1, '2024-04-23 06:59:24', '2024-04-23 06:59:24', NULL),
(241, 909, 145, 1, '2024-04-23 06:59:26', '2024-04-23 06:59:26', NULL),
(242, 908, 145, 1, '2024-04-23 06:59:27', '2024-04-23 06:59:27', NULL),
(243, 905, 145, 1, '2024-04-23 06:59:33', '2024-04-23 06:59:33', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `polls`
--

CREATE TABLE `polls` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `where_to_post_id` bigint UNSIGNED NOT NULL,
  `anonymous_survey` tinyint(1) NOT NULL DEFAULT '0',
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `hyperlink` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `question` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `multi_option_select` tinyint(1) NOT NULL DEFAULT '0',
  `below_option` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `lat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `long` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `day_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `polls`
--

INSERT INTO `polls` (`id`, `posts_id`, `user_id`, `where_to_post_id`, `anonymous_survey`, `description`, `hyperlink`, `question`, `multi_option_select`, `below_option`, `status`, `lat`, `long`, `day_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(91, 538, 126, 1, 0, 'poll public post\nfor same tag\n7 day', NULL, 'hshsh', 0, '0', 1, '18.597346', '73.7905', 5, '2024-03-05 17:27:29', '2024-03-05 17:27:29', NULL),
(92, 540, 126, 1, 0, 'poll post with different tag\n7 day', NULL, 'hdduduue', 0, '0', 1, '18.5953006', '73.7887222', 5, '2024-03-05 17:32:11', '2024-03-05 17:32:11', NULL),
(93, 543, 126, 7, 0, 'Social poll post\n7 day', NULL, 'Who will win this match', 0, '0', 1, '18.5953002', '73.7886858', 5, '2024-03-05 17:42:27', '2024-03-05 17:42:27', NULL),
(94, 554, 126, 4, 0, 'poll home post with different location', NULL, 'bzhjd', 0, '0', 1, '18.6297811', '73.7997094', 5, '2024-03-06 09:26:10', '2024-03-06 09:26:10', NULL),
(95, 555, 126, 1, 0, 'Public poll post with different location match tag\n7 day', NULL, 'gxgchc', 0, '0', 1, '25.3176452', '82.9739144', 5, '2024-03-06 09:35:19', '2024-03-06 09:35:19', NULL),
(96, 558, 128, 7, 0, 'Social poll post 7 day', NULL, 'hvvj j', 0, '0', 1, '18.521333237475513', '73.76955192536116', 5, '2024-03-06 09:43:39', '2024-03-06 09:43:39', NULL),
(97, 567, 129, 1, 0, 'u5stuzut%8', NULL, 'puciytizti', 0, '0', 1, '28.4949762', '77.0895421', 5, '2024-03-06 13:49:52', '2024-03-06 13:49:52', NULL),
(98, 568, 129, 1, 0, '86 FX itzt8%', NULL, 'kg,it,ti%mvgkg', 0, '0', 1, '28.4949762', '77.0895421', 5, '2024-03-06 13:55:21', '2024-03-06 13:55:21', NULL),
(99, 569, 129, 1, 0, 'yxkyztk', NULL, 'kyskyYkzky', 0, '0', 1, '28.4594965', '77.0266383', 5, '2024-03-06 14:07:29', '2024-03-06 14:07:29', NULL),
(100, 570, 129, 4, 0, NULL, NULL, 'o6so6skyKy', 0, '0', 1, '28.4594965', '77.0266383', 5, '2024-03-06 14:11:38', '2024-03-06 14:11:38', NULL),
(101, 571, 130, 1, 0, NULL, NULL, 'fthu bubbv', 0, '0', 1, '12.9715987', '77.5945627', 5, '2024-03-06 14:15:52', '2024-03-06 14:15:52', NULL),
(107, 607, 128, 1, 0, 'asdfasdfasf', 'asfasfasfasfa', 'asfasfasfaf', 0, '0', 1, '18.516726', '73.856255', 1, '2024-03-07 11:03:14', '2024-03-07 11:03:14', NULL),
(109, 610, 126, 1, 0, NULL, NULL, 'Poll public post', 0, '0', 1, '19.0759837', '72.8776559', 5, '2024-03-07 13:45:51', '2024-03-07 13:45:51', NULL),
(110, 611, 126, 4, 0, NULL, NULL, 'Home survey post', 0, '0', 1, NULL, NULL, 1, '2024-03-07 13:48:12', '2024-03-07 13:48:12', NULL),
(113, 620, 126, 4, 0, 'poll image', NULL, 'gc h h', 0, '0', 1, NULL, NULL, 1, '2024-03-08 04:45:22', '2024-03-08 04:45:22', NULL),
(114, 642, 130, 4, 0, NULL, NULL, 'b3hev3 wu', 0, '0', 1, NULL, NULL, 5, '2024-03-08 10:58:23', '2024-03-08 10:58:23', NULL),
(116, 677, 130, 1, 0, NULL, NULL, 'beuebueb', 0, '0', 1, '28.4594965', '77.0266383', 5, '2024-03-12 14:24:46', '2024-03-12 14:24:46', NULL),
(117, 684, 143, 4, 0, 'Poll Home post with different location\nindore', NULL, 'jvvjj', 0, '0', 1, '22.7195687', '75.8577258', 5, '2024-03-13 05:47:24', '2024-03-13 05:47:24', NULL),
(118, 694, 146, 4, 0, 'Home poll post', NULL, 'jjj', 0, '0', 1, '18.5431299', '73.8526112', 5, '2024-03-13 07:17:17', '2024-03-13 07:17:17', NULL),
(119, 703, 128, 1, 0, 'public poll post with perticular location in city\nsame tag 1d', NULL, 'nnn', 0, '0', 1, '18.4529322', '73.86523799999999', 1, '2024-03-13 11:59:06', '2024-03-13 11:59:06', NULL),
(120, 704, 128, 1, 0, 'public poll post with different tag\ncity 1 day', NULL, 'hh', 0, '0', 1, '18.5204303', '73.8567437', 1, '2024-03-13 12:17:48', '2024-03-13 12:17:48', NULL),
(121, 715, 126, 4, 0, 'Home poll post without location', NULL, 'hu', 0, '0', 1, NULL, NULL, 1, '2024-03-14 09:31:42', '2024-03-14 09:31:42', NULL),
(122, 717, 126, 1, 0, 'public poll post without location different tag', NULL, 'hjj', 0, '0', 1, NULL, NULL, 1, '2024-03-14 09:33:54', '2024-03-14 09:33:54', NULL),
(123, 721, 146, 4, 0, 'three days', NULL, 'HOME poll post with current city location', 0, '0', 1, NULL, NULL, 5, '2024-03-15 04:41:38', '2024-03-15 04:41:38', NULL),
(124, 747, 126, 2, 0, 'my circle post with different tag', 'poll', 'h. jb', 0, '0', 1, '18.5204198', '73.7720663', 1, '2024-03-15 13:16:11', '2024-03-15 13:16:11', NULL),
(125, 758, 126, 1, 0, NULL, NULL, 'Test Test Test', 0, '0', 1, NULL, NULL, 11, '2024-03-18 05:36:41', '2024-03-18 05:36:41', NULL),
(126, 759, 154, 1, 0, 'Hello this poll is for testing purposes', 'test', 'Test poll', 0, '0', 1, NULL, NULL, 12, '2024-03-18 06:21:16', '2024-03-18 06:21:16', NULL),
(127, 760, 129, 4, 1, 'itxtzit', NULL, 'ifuf,it,it,', 0, '1', 1, NULL, NULL, 7, '2024-03-18 11:07:23', '2024-03-18 11:07:23', NULL),
(128, 763, 126, 1, 1, 'anonymous poll post with location public', NULL, 'tccttvtctvt', 0, '0', 1, '18.5204303', '73.8567437', 5, '2024-03-19 05:43:18', '2024-03-19 05:43:18', NULL),
(129, 764, 126, 1, 0, 'Poll public post with different tag city location', NULL, 'uh', 0, '0', 1, '18.5204303', '73.8567437', 5, '2024-03-19 05:49:28', '2024-03-19 05:49:28', NULL),
(130, 789, 146, 4, 0, 'Poll home post with different location', NULL, 'cv.', 0, '0', 1, '19.101812316949562', '72.87463020533323', 7, '2024-03-19 12:51:55', '2024-03-19 12:51:55', NULL),
(131, 791, 146, 4, 0, 'Home survey post different location', NULL, 'cfffy', 0, '0', 1, '19.1178548', '72.8631304', 7, '2024-03-19 12:54:57', '2024-03-19 12:54:57', NULL),
(132, 795, 129, 4, 1, 'fvtcd r fctf', NULL, 'frtgt', 0, '0', 1, NULL, NULL, 5, '2024-03-19 13:58:47', '2024-03-19 13:58:47', NULL),
(133, 800, 172, 4, 0, 'All IPL fans , assemble', NULL, 'Which Team is going to Win this season', 0, '0', 1, NULL, NULL, 11, '2024-03-30 17:08:52', '2024-03-30 17:08:52', NULL),
(134, 810, 172, 4, 1, 'I think MI management has to realise this', NULL, 'Who is the Best Captain of MI?', 0, '1', 1, NULL, NULL, 11, '2024-03-31 03:57:39', '2024-03-31 03:57:39', NULL),
(135, 819, 172, 4, 1, 'I can\'t decide which movie to see in theatre', NULL, 'Suggest a good movie to watch', 0, '0', 1, NULL, NULL, 10, '2024-04-03 10:09:24', '2024-04-03 10:09:24', NULL),
(136, 821, 172, 4, 0, 'I want to join this Gym (Gym Armour), please suggest', NULL, 'Has anyone been to this Gym', 0, '1', 1, '28.4891643', '77.0969698', 10, '2024-04-04 10:57:58', '2024-04-04 10:57:58', NULL),
(137, 822, 182, 4, 0, 'Location Testing Post', NULL, 'Are u in Bangalore?', 0, '0', 1, '12.9715987', '77.5945627', 10, '2024-04-04 11:08:09', '2024-04-04 11:08:09', NULL),
(138, 823, 182, 4, 0, 'I want to know the places to Visit in a single day in Vizag', NULL, 'Which of these places I can visit?', 1, '1', 1, '17.6868159', '83.2184815', 10, '2024-04-04 11:24:19', '2024-04-04 11:24:19', NULL),
(139, 824, 172, 4, 0, 'Testing Location', NULL, 'Are u in Bangalore?', 0, '0', 1, '12.9715987', '77.5945627', 7, '2024-04-04 13:23:40', '2024-04-04 13:23:40', NULL),
(140, 825, 172, 4, 0, NULL, NULL, 'Are u in DLF phase 3', 0, '0', 1, '28.4916812', '77.094897', 7, '2024-04-04 13:30:43', '2024-04-04 13:30:43', NULL),
(141, 826, 182, 4, 0, NULL, NULL, 'Chennai Location Post', 0, '0', 1, '13.0826802', '80.2707184', 10, '2024-04-04 15:11:28', '2024-04-04 15:11:28', NULL),
(142, 832, 182, 4, 0, 'Location Testing', NULL, 'Are u in Bangalore?', 0, '0', 1, '12.9715987', '77.5945627', 5, '2024-04-15 12:33:48', '2024-04-15 12:33:48', NULL),
(143, 833, 172, 4, 1, 'Location Testing', NULL, 'Are u in Visakhapatnam ?', 0, '0', 1, '17.6868159', '83.2184815', 7, '2024-04-15 12:56:21', '2024-04-15 12:56:21', NULL),
(144, 834, 172, 4, 1, 'Testing', NULL, 'Are u Human?', 0, '0', 1, '12.9715987', '77.5945627', 5, '2024-04-16 10:29:56', '2024-04-16 10:29:56', NULL),
(145, 835, 130, 4, 1, 'Location Testing', NULL, 'Are u in Bangalore?', 0, '0', 1, '12.9715987', '77.5945627', 5, '2024-04-18 04:42:56', '2024-04-18 04:42:56', NULL),
(146, 837, 128, 1, 0, 'asdfasdfasf', 'asfasfasfasfa', 'asfasfasfaf', 0, '0', 1, '18.516726', '73.856255', 1, '2024-04-18 08:54:16', '2024-04-18 08:54:16', NULL),
(147, 839, 182, 4, 1, 'Location Testing', NULL, 'Are u in Bangalore?', 0, '0', 1, NULL, NULL, 5, '2024-04-20 07:58:36', '2024-04-20 07:58:36', NULL),
(148, 840, 129, 4, 1, 'Location Testing', NULL, 'Are u in Bangalore?', 0, '0', 1, '12.9715987', '77.5945627', 5, '2024-04-20 08:02:07', '2024-04-20 08:02:07', NULL),
(149, 856, 129, 4, 1, NULL, NULL, 'Are u in Bangalore?', 0, '0', 1, '12.9715987', '77.5945627', 7, '2024-04-20 12:52:17', '2024-04-20 12:52:17', NULL),
(150, 860, 129, 1, 0, 'Testing', NULL, 'vwhys', 0, '0', 1, NULL, NULL, 5, '2024-04-21 07:31:56', '2024-04-21 07:31:56', NULL),
(151, 869, 172, 1, 0, 'Testing location Public Post', NULL, 'Are u in Bangalore?', 0, '0', 1, '12.9715987', '77.5945627', 5, '2024-04-21 10:20:04', '2024-04-21 10:20:04', NULL),
(152, 877, 146, 7, 0, 'social poll post', 'j k', 'ch h j', 0, '0', 1, '18.51886655096011', '73.77281282097101', 5, '2024-04-22 06:32:24', '2024-04-22 06:32:24', NULL),
(153, 879, 146, 2, 0, 'My circle post with match tag', 'same location', 'ivbijv', 0, '0', 1, '18.5204295', '73.7719978', 5, '2024-04-22 06:38:51', '2024-04-22 06:38:51', NULL),
(154, 888, 146, 4, 0, 'Home poll without location', NULL, 'jdjdj', 0, '0', 1, NULL, NULL, 7, '2024-04-22 07:36:03', '2024-04-22 07:36:03', NULL),
(155, 925, 146, 7, 0, 'social without location', 'poll', 'cujb', 0, '0', 1, '18.5204157', '73.7720125', 5, '2024-04-24 05:52:36', '2024-04-24 05:52:36', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `poll_images`
--

CREATE TABLE `poll_images` (
  `id` bigint UNSIGNED NOT NULL,
  `poll_id` bigint UNSIGNED NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `poll_images`
--

INSERT INTO `poll_images` (`id`, `poll_id`, `image`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(155, 91, 'admin/home/pollQuestion/0318IMG-20240229-WA0004.jpg', 1, '2024-03-05 17:27:29', '2024-03-05 17:27:29', NULL),
(156, 92, 'admin/home/pollQuestion/7256images (7).jpeg', 1, '2024-03-05 17:32:11', '2024-03-05 17:32:11', NULL),
(157, 93, 'admin/home/pollQuestion/8035images (4).jpeg', 1, '2024-03-05 17:42:27', '2024-03-05 17:42:27', NULL),
(158, 94, 'admin/home/pollQuestion/1892images.jpeg', 1, '2024-03-06 09:26:10', '2024-03-06 09:26:10', NULL),
(159, 95, 'admin/home/pollQuestion/5934Ahilya_Ghat_by_the_Ganges,_Varanasi.jpg', 1, '2024-03-06 09:35:19', '2024-03-06 09:35:19', NULL),
(160, 96, 'admin/home/pollQuestion/7083images (15).jpeg', 1, '2024-03-06 09:43:39', '2024-03-06 09:43:39', NULL),
(161, 97, 'admin/home/pollQuestion/2846halloween-6880.gif', 1, '2024-03-06 13:49:52', '2024-03-06 13:49:52', NULL),
(162, 97, 'admin/home/pollQuestion/1630null-20240302-WA0001.jpg', 1, '2024-03-06 13:49:52', '2024-03-06 13:49:52', NULL),
(163, 98, 'admin/home/pollQuestion/2940null-20240302-WA0001.jpg', 1, '2024-03-06 13:55:21', '2024-03-06 13:55:21', NULL),
(164, 98, 'admin/home/pollQuestion/3485null-20240229-WA0029.jpg', 1, '2024-03-06 13:55:21', '2024-03-06 13:55:21', NULL),
(165, 99, 'admin/home/pollQuestion/0423null-20240302-WA0002.jpg', 1, '2024-03-06 14:07:29', '2024-03-06 14:07:29', NULL),
(166, 99, 'admin/home/pollQuestion/9876Screenshot_20240219_202911.jpg', 1, '2024-03-06 14:07:29', '2024-03-06 14:07:29', NULL),
(167, 100, 'admin/home/pollQuestion/2587null-20240224-WA0006.jpg', 1, '2024-03-06 14:11:38', '2024-03-06 14:11:38', NULL),
(168, 100, 'admin/home/pollQuestion/7961null-20240220-WA0001.jpg', 1, '2024-03-06 14:11:38', '2024-03-06 14:11:38', NULL),
(169, 101, 'admin/home/pollQuestion/2308null-20240302-WA0001.jpg', 1, '2024-03-06 14:15:52', '2024-03-06 14:15:52', NULL),
(170, 101, 'admin/home/pollQuestion/6397null-20240229-WA0029.jpg', 1, '2024-03-06 14:15:52', '2024-03-06 14:15:52', NULL),
(175, 107, 'admin/home/pollQuestion/2069luca-david-HjXbVnnITvE-unsplash.jpg', 1, '2024-03-07 11:03:14', '2024-03-07 11:03:14', NULL),
(177, 113, 'admin/home/pollQuestion/3071IMG-20240308-WA0001.jpg', 1, '2024-03-08 04:45:22', '2024-03-08 04:45:22', NULL),
(178, 117, 'admin/home/pollQuestion/3056images (11).jpeg', 1, '2024-03-13 05:47:24', '2024-03-13 05:47:24', NULL),
(179, 118, 'admin/home/pollQuestion/7195illustration-delhi-bus-depot-passengers-260nw-1573585564.jpg', 1, '2024-03-13 07:17:17', '2024-03-13 07:17:17', NULL),
(180, 119, 'admin/home/pollQuestion/5021images (11).jpeg', 1, '2024-03-13 11:59:06', '2024-03-13 11:59:06', NULL),
(181, 121, 'admin/home/pollQuestion/0765images.jpeg', 1, '2024-03-14 09:31:42', '2024-03-14 09:31:42', NULL),
(182, 123, 'admin/home/pollQuestion/3510IMG-20240308-WA0001.jpg', 1, '2024-03-15 04:41:38', '2024-03-15 04:41:38', NULL),
(183, 133, 'admin/home/pollQuestion/0916Screenshot_20240330_223519.jpg', 1, '2024-03-30 17:08:52', '2024-03-30 17:08:52', NULL),
(184, 134, 'admin/home/pollQuestion/7201Screenshot_20240330_223050.jpg', 1, '2024-03-31 03:57:39', '2024-03-31 03:57:39', NULL),
(185, 155, 'admin/home/pollQuestion/39181711966892325.jpg', 1, '2024-04-24 05:52:36', '2024-04-24 05:52:36', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `poll_options`
--

CREATE TABLE `poll_options` (
  `id` bigint UNSIGNED NOT NULL,
  `poll_id` bigint UNSIGNED NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `options` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `poll_options`
--

INSERT INTO `poll_options` (`id`, `poll_id`, `image`, `options`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(201, 91, 'admin/home/pollOption/9350IMG-20240229-WA0002.jpg', 'bxnz', 1, '2024-03-05 17:27:29', '2024-03-05 17:27:29', NULL),
(202, 91, 'admin/home/pollOption/2675IMG-20240229-WA0001.jpg', 'sjjs', 1, '2024-03-05 17:27:29', '2024-03-05 17:27:29', NULL),
(203, 92, 'admin/home/pollOption/6547IMG-20240229-WA0003.jpg', 'urur', 1, '2024-03-05 17:32:11', '2024-03-05 17:32:11', NULL),
(204, 92, 'admin/home/pollOption/0125IMG-20240229-WA0004.jpg', 'hehrh', 1, '2024-03-05 17:32:11', '2024-03-05 17:32:11', NULL),
(205, 93, 'admin/home/pollOption/8231IMG-20240229-WA0002.jpg', 'India', 1, '2024-03-05 17:42:27', '2024-03-05 17:42:27', NULL),
(206, 93, 'admin/home/pollOption/4186IMG-20240229-WA0003.jpg', 'Australia', 1, '2024-03-05 17:42:27', '2024-03-05 17:42:27', NULL),
(207, 94, 'admin/home/pollOption/6803images (9).jpeg', 'zhxhj', 1, '2024-03-06 09:26:10', '2024-03-06 09:26:10', NULL),
(208, 94, 'admin/home/pollOption/0238images (10).jpeg', 'hHsj', 1, '2024-03-06 09:26:10', '2024-03-06 09:26:10', NULL),
(209, 95, 'admin/home/pollOption/7029IMG-20240229-WA0003.jpg', 'fcct', 1, '2024-03-06 09:35:19', '2024-03-06 09:35:19', NULL),
(210, 95, 'admin/home/pollOption/8961IMG-20240229-WA0000.jpg', 'rxctct', 1, '2024-03-06 09:35:19', '2024-03-06 09:35:19', NULL),
(211, 95, 'admin/home/pollOption/3209IMG-20240229-WA0003.jpg', 'None', 1, '2024-03-06 09:35:19', '2024-03-06 09:35:19', NULL),
(212, 96, 'admin/home/pollOption/0568IMG-20240229-WA0001.jpg', 'xcgg', 1, '2024-03-06 09:43:39', '2024-03-06 09:43:39', NULL),
(213, 96, 'admin/home/pollOption/7826IMG-20240229-WA0003.jpg', 'ghu', 1, '2024-03-06 09:43:39', '2024-03-06 09:43:39', NULL),
(214, 96, 'admin/home/pollOption/8643IMG-20240229-WA0001.jpg', 'None', 1, '2024-03-06 09:43:39', '2024-03-06 09:43:39', NULL),
(215, 97, 'admin/home/pollOption/9386halloween-6880.gif', '7rz7r47Ur', 1, '2024-03-06 13:49:52', '2024-03-06 13:49:52', NULL),
(216, 97, 'admin/home/pollOption/9324null-20240302-WA0001.jpg', 'if,itzt8zti', 1, '2024-03-06 13:49:52', '2024-03-06 13:49:52', NULL),
(217, 98, 'admin/home/pollOption/4587null-20240302-WA0001.jpg', 'jg,ktztokg', 1, '2024-03-06 13:55:21', '2024-03-06 13:55:21', NULL),
(218, 98, 'admin/home/pollOption/9603null-20240229-WA0029.jpg', 'jti5i,kg,gk,', 1, '2024-03-06 13:55:21', '2024-03-06 13:55:21', NULL),
(219, 99, 'admin/home/pollOption/1079null-20240302-WA0002.jpg', 'fkkyzyks', 1, '2024-03-06 14:07:29', '2024-03-06 14:07:29', NULL),
(220, 99, 'admin/home/pollOption/1487Screenshot_20240219_202911.jpg', 'hktzitit', 1, '2024-03-06 14:07:29', '2024-03-06 14:07:29', NULL),
(221, 100, 'admin/home/pollOption/0573null-20240224-WA0006.jpg', '85z85zitz', 1, '2024-03-06 14:11:38', '2024-03-06 14:11:38', NULL),
(222, 100, 'admin/home/pollOption/3792null-20240220-WA0001.jpg', 'itzitzgizit', 1, '2024-03-06 14:11:38', '2024-03-06 14:11:38', NULL),
(223, 101, 'admin/home/pollOption/7125null-20240302-WA0001.jpg', 'sdr incexvtvc', 1, '2024-03-06 14:15:52', '2024-03-06 14:15:52', NULL),
(224, 101, 'admin/home/pollOption/2014null-20240229-WA0029.jpg', 'segvkim fr6hb', 1, '2024-03-06 14:15:52', '2024-03-06 14:15:52', NULL),
(227, 107, 'admin/home/pollOption/2485kitichen3.jpg', 'Yes', 1, '2024-03-07 11:03:14', '2024-03-07 11:03:14', NULL),
(228, 107, NULL, 'no', 1, '2024-03-07 11:03:14', '2024-03-07 11:03:14', NULL),
(229, 107, 'admin/home/pollOption/0735baramatiLogo.png', 'None', 1, '2024-03-07 11:03:14', '2024-03-07 11:03:14', NULL),
(234, 109, NULL, 'One', 1, '2024-03-07 13:45:51', '2024-03-07 13:45:51', NULL),
(235, 109, NULL, 'Two', 1, '2024-03-07 13:45:51', '2024-03-07 13:45:51', NULL),
(236, 109, NULL, 'None', 1, '2024-03-07 13:45:51', '2024-03-07 13:45:51', NULL),
(237, 110, 'admin/home/pollOption/2640images (15).jpeg', 'One', 1, '2024-03-07 13:48:12', '2024-03-07 13:48:12', NULL),
(238, 110, NULL, 'Two', 1, '2024-03-07 13:48:12', '2024-03-07 13:48:12', NULL),
(239, 110, NULL, 'None', 1, '2024-03-07 13:48:12', '2024-03-07 13:48:12', NULL),
(244, 113, NULL, 'hcvuvu', 1, '2024-03-08 04:45:22', '2024-03-08 04:45:22', NULL),
(245, 113, NULL, 'h. u', 1, '2024-03-08 04:45:22', '2024-03-08 04:45:22', NULL),
(246, 114, NULL, 'itit,it,itoyy9civ', 1, '2024-03-08 10:58:23', '2024-03-08 10:58:23', NULL),
(247, 114, NULL, 'goytizoy', 1, '2024-03-08 10:58:23', '2024-03-08 10:58:23', NULL),
(251, 116, NULL, 'wb6sbwus', 1, '2024-03-12 14:24:46', '2024-03-12 14:24:46', NULL),
(252, 116, NULL, 'n3isneinz', 1, '2024-03-12 14:24:46', '2024-03-12 14:24:46', NULL),
(253, 117, NULL, 'bbb', 1, '2024-03-13 05:47:24', '2024-03-13 05:47:24', NULL),
(254, 117, NULL, 'bbbh', 1, '2024-03-13 05:47:24', '2024-03-13 05:47:24', NULL),
(255, 117, NULL, 'None', 1, '2024-03-13 05:47:24', '2024-03-13 05:47:24', NULL),
(256, 118, NULL, 'jj', 1, '2024-03-13 07:17:17', '2024-03-13 07:17:17', NULL),
(257, 118, NULL, 'jjj', 1, '2024-03-13 07:17:17', '2024-03-13 07:17:17', NULL),
(258, 119, NULL, 'nnn', 1, '2024-03-13 11:59:06', '2024-03-13 11:59:06', NULL),
(259, 119, NULL, 'nk', 1, '2024-03-13 11:59:06', '2024-03-13 11:59:06', NULL),
(260, 120, 'admin/home/pollOption/7035images (15).jpeg', 'hhh', 1, '2024-03-13 12:17:48', '2024-03-13 12:17:48', NULL),
(261, 120, 'admin/home/pollOption/6293images (15).jpeg', 'hhhh', 1, '2024-03-13 12:17:48', '2024-03-13 12:17:48', NULL),
(262, 121, NULL, 'uu', 1, '2024-03-14 09:31:42', '2024-03-14 09:31:42', NULL),
(263, 121, NULL, 'uuui', 1, '2024-03-14 09:31:42', '2024-03-14 09:31:42', NULL),
(264, 122, NULL, 'hhj', 1, '2024-03-14 09:33:54', '2024-03-14 09:33:54', NULL),
(265, 122, NULL, 'huii', 1, '2024-03-14 09:33:54', '2024-03-14 09:33:54', NULL),
(266, 123, NULL, 'hshs', 1, '2024-03-15 04:41:38', '2024-03-15 04:41:38', NULL),
(267, 123, NULL, 'hshsh', 1, '2024-03-15 04:41:38', '2024-03-15 04:41:38', NULL),
(268, 123, NULL, 'None', 1, '2024-03-15 04:41:38', '2024-03-15 04:41:38', NULL),
(269, 124, NULL, 'vh hj', 1, '2024-03-15 13:16:11', '2024-03-15 13:16:11', NULL),
(270, 124, NULL, 'uvj j jv', 1, '2024-03-15 13:16:11', '2024-03-15 13:16:11', NULL),
(271, 125, NULL, 'Test 1', 1, '2024-03-18 05:36:41', '2024-03-18 05:36:41', NULL),
(272, 125, NULL, 'Test 2', 1, '2024-03-18 05:36:41', '2024-03-18 05:36:41', NULL),
(273, 126, NULL, 'test ans 1', 1, '2024-03-18 06:21:16', '2024-03-18 06:21:16', NULL),
(274, 126, NULL, 'test ans 2', 1, '2024-03-18 06:21:16', '2024-03-18 06:21:16', NULL),
(275, 127, NULL, '7ritg', 1, '2024-03-18 11:07:23', '2024-03-18 11:07:23', NULL),
(276, 127, NULL, '85itigzi', 1, '2024-03-18 11:07:23', '2024-03-18 11:07:23', NULL),
(277, 128, NULL, 'tfctft', 1, '2024-03-19 05:43:18', '2024-03-19 05:43:18', NULL),
(278, 128, NULL, 'tfctt', 1, '2024-03-19 05:43:18', '2024-03-19 05:43:18', NULL),
(279, 129, NULL, 'jj', 1, '2024-03-19 05:49:28', '2024-03-19 05:49:28', NULL),
(280, 129, NULL, 'jj', 1, '2024-03-19 05:49:28', '2024-03-19 05:49:28', NULL),
(281, 130, NULL, 'cyug', 1, '2024-03-19 12:51:55', '2024-03-19 12:51:55', NULL),
(282, 130, NULL, 'txfx', 1, '2024-03-19 12:51:55', '2024-03-19 12:51:55', NULL),
(283, 131, NULL, 'ftc', 1, '2024-03-19 12:54:57', '2024-03-19 12:54:57', NULL),
(284, 131, NULL, 'tfyfy', 1, '2024-03-19 12:54:57', '2024-03-19 12:54:57', NULL),
(285, 132, NULL, 'drgby', 1, '2024-03-19 13:58:47', '2024-03-19 13:58:47', NULL),
(286, 132, NULL, 'drhbtc', 1, '2024-03-19 13:58:47', '2024-03-19 13:58:47', NULL),
(287, 133, 'admin/home/pollOption/9608Screenshot_20240330_222719.jpg', 'CSK', 1, '2024-03-30 17:08:52', '2024-03-30 17:08:52', NULL),
(288, 133, 'admin/home/pollOption/6145Screenshot_20240330_222925.jpg', 'RCB', 1, '2024-03-30 17:08:52', '2024-03-30 17:08:52', NULL),
(289, 133, 'admin/home/pollOption/7498Screenshot_20240330_223050.jpg', 'MI', 1, '2024-03-30 17:08:52', '2024-03-30 17:08:52', NULL),
(290, 133, 'admin/home/pollOption/5701Screenshot_20240330_223242.jpg', 'GT', 1, '2024-03-30 17:08:52', '2024-03-30 17:08:52', NULL),
(291, 134, 'admin/home/pollOption/5730Screenshot_20240331_092401.jpg', 'HitMan', 1, '2024-03-31 03:57:39', '2024-03-31 03:57:39', NULL),
(292, 134, 'admin/home/pollOption/4617Screenshot_2024_0331_092446.jpg', 'Hardik Pandya', 1, '2024-03-31 03:57:39', '2024-03-31 03:57:39', NULL),
(293, 134, NULL, 'None', 1, '2024-03-31 03:57:39', '2024-03-31 03:57:39', NULL),
(294, 135, 'admin/home/pollOption/8024Screenshot_20240331_094208.jpg', 'Tillu 2', 1, '2024-04-03 10:09:24', '2024-04-03 10:09:24', NULL),
(295, 135, NULL, 'Manjummel Boys', 1, '2024-04-03 10:09:24', '2024-04-03 10:09:24', NULL),
(296, 135, NULL, 'Godzilla x Kong', 1, '2024-04-03 10:09:24', '2024-04-03 10:09:24', NULL),
(297, 136, NULL, 'Yes, it is well equipped and Gym trainers will help you', 1, '2024-04-04 10:57:58', '2024-04-04 10:57:58', NULL),
(298, 136, NULL, 'No, I have never been to this', 1, '2024-04-04 10:57:58', '2024-04-04 10:57:58', NULL),
(299, 136, NULL, 'Yes, but it is not good, No Trainer will help.', 1, '2024-04-04 10:57:58', '2024-04-04 10:57:58', NULL),
(300, 137, NULL, 'Yes', 1, '2024-04-04 11:08:09', '2024-04-04 11:08:09', NULL),
(301, 137, NULL, 'No', 1, '2024-04-04 11:08:09', '2024-04-04 11:08:09', NULL),
(302, 138, NULL, 'RK Beach', 1, '2024-04-04 11:24:19', '2024-04-04 11:24:19', NULL),
(303, 138, NULL, 'LightHouse', 1, '2024-04-04 11:24:19', '2024-04-04 11:24:19', NULL),
(304, 138, NULL, 'Shopping Malls', 1, '2024-04-04 11:24:19', '2024-04-04 11:24:19', NULL),
(305, 138, NULL, 'Submarine', 1, '2024-04-04 11:24:19', '2024-04-04 11:24:19', NULL),
(306, 139, NULL, 'Yes', 1, '2024-04-04 13:23:40', '2024-04-04 13:23:40', NULL),
(307, 139, NULL, 'No', 1, '2024-04-04 13:23:40', '2024-04-04 13:23:40', NULL),
(308, 140, NULL, 'Yes', 1, '2024-04-04 13:30:43', '2024-04-04 13:30:43', NULL),
(309, 140, NULL, 'No', 1, '2024-04-04 13:30:43', '2024-04-04 13:30:43', NULL),
(310, 141, NULL, 'Yes', 1, '2024-04-04 15:11:28', '2024-04-04 15:11:28', NULL),
(311, 141, NULL, 'No', 1, '2024-04-04 15:11:28', '2024-04-04 15:11:28', NULL),
(312, 142, NULL, 'No', 1, '2024-04-15 12:33:48', '2024-04-15 12:33:48', NULL),
(313, 142, NULL, 'Yes', 1, '2024-04-15 12:33:48', '2024-04-15 12:33:48', NULL),
(314, 143, NULL, 'I don\'t know', 1, '2024-04-15 12:56:21', '2024-04-15 12:56:21', NULL),
(315, 143, NULL, 'Yes', 1, '2024-04-15 12:56:21', '2024-04-15 12:56:21', NULL),
(316, 144, NULL, 'Yes', 1, '2024-04-16 10:29:56', '2024-04-16 10:29:56', NULL),
(317, 144, NULL, 'No', 1, '2024-04-16 10:29:56', '2024-04-16 10:29:56', NULL),
(318, 145, NULL, 'No', 1, '2024-04-18 04:42:56', '2024-04-18 04:42:56', NULL),
(319, 145, NULL, 'Yes', 1, '2024-04-18 04:42:56', '2024-04-18 04:42:56', NULL),
(320, 146, NULL, 'Yes', 1, '2024-04-18 08:54:16', '2024-04-18 08:54:16', NULL),
(321, 146, NULL, 'no', 1, '2024-04-18 08:54:16', '2024-04-18 08:54:16', NULL),
(322, 146, NULL, 'None', 1, '2024-04-18 08:54:16', '2024-04-18 08:54:16', NULL),
(323, 147, NULL, 'No', 1, '2024-04-20 07:58:36', '2024-04-20 07:58:36', NULL),
(324, 147, NULL, 'Yes', 1, '2024-04-20 07:58:36', '2024-04-20 07:58:36', NULL),
(325, 148, NULL, 'Yes', 1, '2024-04-20 08:02:07', '2024-04-20 08:02:07', NULL),
(326, 148, NULL, 'No', 1, '2024-04-20 08:02:07', '2024-04-20 08:02:07', NULL),
(327, 149, NULL, 'Yes', 1, '2024-04-20 12:52:17', '2024-04-20 12:52:17', NULL),
(328, 149, NULL, 'No', 1, '2024-04-20 12:52:17', '2024-04-20 12:52:17', NULL),
(329, 150, NULL, 'vusbeusb', 1, '2024-04-21 07:31:56', '2024-04-21 07:31:56', NULL),
(330, 150, NULL, 'jisbbeu', 1, '2024-04-21 07:31:56', '2024-04-21 07:31:56', NULL),
(331, 151, NULL, 'No', 1, '2024-04-21 10:20:04', '2024-04-21 10:20:04', NULL),
(332, 151, NULL, 'Yes', 1, '2024-04-21 10:20:04', '2024-04-21 10:20:04', NULL),
(333, 152, NULL, 'cghvn', 1, '2024-04-22 06:32:24', '2024-04-22 06:32:24', NULL),
(334, 152, NULL, 'hvvhhv', 1, '2024-04-22 06:32:24', '2024-04-22 06:32:24', NULL),
(335, 153, NULL, 'uggug', 1, '2024-04-22 06:38:51', '2024-04-22 06:38:51', NULL),
(336, 153, NULL, 'jvvvj', 1, '2024-04-22 06:38:51', '2024-04-22 06:38:51', NULL),
(337, 154, NULL, 'ee dndj', 1, '2024-04-22 07:36:03', '2024-04-22 07:36:03', NULL),
(338, 154, NULL, 'ddjdj', 1, '2024-04-22 07:36:03', '2024-04-22 07:36:03', NULL),
(339, 155, 'admin/home/pollOption/03281711967161952.jpg', 'hcvu', 1, '2024-04-24 05:52:36', '2024-04-24 05:52:36', NULL),
(340, 155, 'admin/home/pollOption/9026Screenshot_20240402-110220.jpg', 'ugvuig', 1, '2024-04-24 05:52:36', '2024-04-24 05:52:36', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `poll_tags`
--

CREATE TABLE `poll_tags` (
  `id` bigint UNSIGNED NOT NULL,
  `poll_id` bigint UNSIGNED NOT NULL,
  `tag_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `poll_users`
--

CREATE TABLE `poll_users` (
  `id` bigint UNSIGNED NOT NULL,
  `post_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint UNSIGNED NOT NULL,
  `post_master_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `where_to_post_id` bigint UNSIGNED NOT NULL,
  `day_id` bigint UNSIGNED DEFAULT NULL,
  `repost_status` tinyint(1) NOT NULL DEFAULT '0',
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `long` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `end_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `oppose` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `post_master_id`, `user_id`, `where_to_post_id`, `day_id`, `repost_status`, `address`, `city`, `lat`, `long`, `end_date`, `status`, `created_at`, `updated_at`, `deleted_at`, `oppose`) VALUES
(537, 1, 126, 1, 5, 0, 'BLOCK-B, DWARKA DHEESH RESIDENCY SOCIETY, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027, India', 'Pimpri-Chinchwad', '18.5953006', '73.7887222', '2024-03-12 22:55:52', 1, '2024-03-05 17:25:53', '2024-03-05 17:25:53', NULL, 0),
(538, 2, 126, 1, 5, 0, 'Kokane Chowk, Dwarkadheesh Gardens, Rahatani, Pimpri-Chinchwad, Maharashtra, India', 'Pimpri-Chinchwad', '18.597346', '73.7905', '2024-03-12 22:57:29', 1, '2024-03-05 17:27:29', '2024-03-05 17:27:29', NULL, 0),
(539, 1, 126, 1, 5, 0, 'BLOCK-B, DWARKA DHEESH RESIDENCY SOCIETY, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027, India', 'Pimpri-Chinchwad', '18.5953006', '73.7887222', '2024-03-12 22:59:08', 1, '2024-03-05 17:29:08', '2024-03-05 17:29:08', NULL, 0),
(540, 2, 126, 1, 5, 0, 'BLOCK-B, DWARKA DHEESH RESIDENCY SOCIETY, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027, India', 'Pimpri-Chinchwad', '18.5953006', '73.7887222', '2024-03-12 23:02:11', 1, '2024-03-05 17:32:11', '2024-03-05 17:32:11', NULL, 0),
(541, 1, 126, 1, 5, 0, 'BLOCK-B, DWARKA DHEESH RESIDENCY SOCIETY, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027, India', 'Pimpri-Chinchwad', '18.595308', '73.7886817', '2024-03-12 23:04:45', 1, '2024-03-05 17:34:45', '2024-03-05 17:34:45', NULL, 0),
(542, 1, 126, 4, 5, 0, 'BLOCK-B, DWARKA DHEESH RESIDENCY SOCIETY, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027, India', 'Pimpri-Chinchwad', '18.595308', '73.7886817', '2024-03-12 23:05:49', 1, '2024-03-05 17:35:50', '2024-03-05 17:35:50', NULL, 0),
(543, 2, 126, 7, 5, 0, 'BLOCK-B, DWARKA DHEESH RESIDENCY SOCIETY, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027, India', 'Pimpri-Chinchwad', '18.5953002', '73.7886858', '2024-03-12 23:12:26', 1, '2024-03-05 17:42:27', '2024-03-05 17:42:27', NULL, 0),
(544, 3, 126, 7, NULL, 0, '411017, Kokane Chowk, Dwarkadheesh Gardens, Rahatani, Pimpri-Chinchwad, Maharashtra 411027, India', 'Pimpri-Chinchwad', '18.59731827585421', '73.79031959921122', '', 1, '2024-03-05 17:44:16', '2024-03-05 17:44:16', NULL, 0),
(545, 1, 126, 1, 1, 0, 'Kolhapur, Maharashtra, India', 'Kolhapur', '16.7049873', '74.24325270000001', '2024-03-07 10:56:01', 1, '2024-03-06 05:26:02', '2024-03-06 05:26:02', NULL, 0),
(546, 1, 128, 4, 5, 0, NULL, '', NULL, NULL, '2024-03-13 11:25:36', 1, '2024-03-06 05:55:36', '2024-03-06 05:55:36', NULL, 0),
(547, 1, 126, 4, 5, 0, 'Surat, Gujarat, India', 'Surat', '21.1702401', '72.83106070000001', '2024-03-13 11:32:20', 1, '2024-03-06 06:02:21', '2024-03-06 06:02:21', NULL, 0),
(548, 1, 126, 1, 5, 0, 'Surat, Gujarat, India', 'Surat', '21.1702401', '72.83106070000001', '2024-03-13 11:34:31', 1, '2024-03-06 06:04:32', '2024-03-06 06:04:32', NULL, 0),
(549, 1, 126, 1, 5, 0, 'Surat, Gujarat, India', 'Surat', '21.1702401', '72.83106070000001', '2024-03-13 11:36:00', 1, '2024-03-06 06:06:01', '2024-03-06 06:06:01', NULL, 0),
(550, 4, 126, 4, 5, 0, 'Mulshi, Maharashtra, India', 'Mulshi', '18.5010536', '73.5137654', '2024-03-13 13:00:17', 1, '2024-03-06 07:30:18', '2024-03-06 07:30:18', NULL, 0),
(551, 1, 126, 1, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-13 14:46:06', 1, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL, 0),
(552, 1, 126, 1, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-13 14:50:24', 1, '2024-03-06 09:20:24', '2024-03-06 09:20:24', NULL, 0),
(553, 1, 126, 4, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-13 14:54:51', 1, '2024-03-06 09:24:51', '2024-03-06 09:24:51', NULL, 0),
(554, 2, 126, 4, 5, 0, 'Pimpri-Chinchwad, Maharashtra, India', 'Pimpri-Chinchwad', '18.6297811', '73.7997094', '2024-03-13 14:56:09', 1, '2024-03-06 09:26:10', '2024-03-06 09:26:10', NULL, 0),
(555, 2, 126, 1, 5, 0, 'Varanasi, Uttar Pradesh, India', 'Varanasi', '25.3176452', '82.9739144', '2024-03-13 15:05:19', 1, '2024-03-06 09:35:19', '2024-03-06 09:35:19', NULL, 0),
(556, 1, 126, 1, 5, 0, NULL, '', NULL, NULL, '2024-03-13 15:07:15', 1, '2024-03-06 09:37:15', '2024-03-06 09:37:15', NULL, 0),
(557, 1, 126, 4, 5, 0, 'Varanasi, Uttar Pradesh, India', 'Varanasi', '25.3176452', '82.9739144', '2024-03-13 15:10:31', 1, '2024-03-06 09:40:31', '2024-03-06 09:40:31', NULL, 0),
(558, 2, 128, 7, 5, 0, '608, SATYAM SHREY, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.521333237475513', '73.76955192536116', '2024-03-13 15:13:39', 1, '2024-03-06 09:43:39', '2024-03-06 09:43:39', NULL, 0),
(559, 3, 126, 7, NULL, 0, 'Bengaluru - Mumbai Hwy, Bhunde Vasti, Bavdhan, Pune, Maharashtra 411021, India', 'Pune', '18.518264418446776', '73.76884214580059', '', 1, '2024-03-06 09:44:59', '2024-03-06 09:44:59', NULL, 0),
(560, 1, 126, 3, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-13 15:17:43', 1, '2024-03-06 09:47:44', '2024-03-06 09:47:44', NULL, 0),
(561, 1, 126, 4, 5, 0, 'Shivaji Nagar, Pune, Maharashtra, India', 'Pune', '18.5314419', '73.8445617', '2024-03-13 15:22:28', 1, '2024-03-06 09:52:29', '2024-03-06 09:52:29', NULL, 0),
(562, 1, 126, 1, 5, 0, 'Jaipur, Rajasthan, India', 'Jaipur', '26.9124336', '75.7872709', '2024-03-13 15:28:51', 1, '2024-03-06 09:58:51', '2024-03-06 09:58:51', NULL, 0),
(563, 1, 126, 1, 5, 0, 'Jaipur, Rajasthan, India', 'Jaipur', '26.9124336', '75.7872709', '2024-03-13 15:31:21', 1, '2024-03-06 10:01:21', '2024-03-06 10:01:21', NULL, 0),
(564, 1, 128, 4, 1, 0, 'Kagal, Maharashtra, India', 'Kagal', '16.5886465', '74.3085454', '2024-03-07 17:05:00', 1, '2024-03-06 11:35:00', '2024-03-06 11:35:00', NULL, 0),
(565, 1, 126, 4, 5, 0, 'Mumbai, Maharashtra, India', 'Mumbai', '19.0759837', '72.8776559', '2024-03-13 17:08:45', 1, '2024-03-06 11:38:45', '2024-03-06 11:38:45', NULL, 0),
(566, 1, 129, 4, 5, 0, 'DLF Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana, India', 'Gurugram', '28.4949762', '77.0895421', '2024-03-13 19:14:11', 1, '2024-03-06 13:44:12', '2024-03-06 13:44:12', NULL, 0),
(567, 2, 129, 1, 5, 0, 'DLF Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana, India', 'Gurugram', '28.4949762', '77.0895421', '2024-03-13 19:19:52', 1, '2024-03-06 13:49:52', '2024-03-06 13:49:52', NULL, 0),
(568, 2, 129, 1, 5, 0, 'DLF Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana, India', 'Gurugram', '28.4949762', '77.0895421', '2024-03-13 19:25:20', 1, '2024-03-06 13:55:21', '2024-03-06 13:55:21', NULL, 0),
(569, 2, 129, 1, 5, 0, 'Gurugram, Haryana, India', 'Gurugram', '28.4594965', '77.0266383', '2024-03-13 19:37:28', 1, '2024-03-06 14:07:29', '2024-03-06 14:07:29', NULL, 0),
(570, 2, 129, 4, 5, 0, 'Gurugram, Haryana, India', 'Gurugram', '28.4594965', '77.0266383', '2024-03-13 19:41:37', 1, '2024-03-06 14:11:38', '2024-03-06 14:11:38', NULL, 0),
(571, 2, 130, 1, 5, 0, 'Bangalore, Karnataka, India', 'Bengaluru', '12.9715987', '77.5945627', '2024-03-13 19:45:52', 1, '2024-03-06 14:15:52', '2024-03-06 14:15:52', NULL, 0),
(601, 1, 128, 4, 1, 0, 'Pune', 'Pune', '18.516726', '73.856255', '2024-03-08 15:31:45', 1, '2024-03-07 10:01:46', '2024-03-07 10:01:46', NULL, 0),
(607, 2, 128, 1, 1, 0, 'Pune', 'Pune', '18.516726', '73.856255', '2024-03-08 16:33:13', 1, '2024-03-07 11:03:14', '2024-03-07 11:03:14', NULL, 0),
(609, 1, 126, 1, 5, 0, 'Mumbai, Maharashtra, India', 'Mumbai', '19.0759837', '72.8776559', '2024-03-10 19:14:40', 1, '2024-03-07 13:44:41', '2024-03-07 13:44:41', NULL, 0),
(610, 2, 126, 1, 5, 0, 'Mumbai, Maharashtra, India', 'Mumbai', '19.0759837', '72.8776559', '2024-03-10 19:15:51', 1, '2024-03-07 13:45:51', '2024-03-07 13:45:51', NULL, 0),
(611, 2, 126, 4, 1, 0, NULL, '', NULL, NULL, '2024-03-08 19:18:12', 1, '2024-03-07 13:48:12', '2024-03-07 13:48:12', NULL, 0),
(612, 1, 126, 1, 5, 0, 'Pimpri-Chinchwad, Maharashtra, India', 'Pimpri-Chinchwad', '18.6297811', '73.7997094', '2024-03-11 08:47:59', 1, '2024-03-08 03:17:59', '2024-03-08 03:17:59', NULL, 0),
(613, 1, 126, 1, 5, 0, 'Pimpri-Chinchwad, Maharashtra, India', 'Pimpri-Chinchwad', '18.6297811', '73.7997094', '2024-03-11 08:47:59', 1, '2024-03-08 03:18:00', '2024-03-08 03:18:00', NULL, 0),
(614, 1, 126, 1, 5, 0, 'Pimpri-Chinchwad, Maharashtra, India', 'Pimpri-Chinchwad', '18.6297811', '73.7997094', '2024-03-11 08:49:38', 1, '2024-03-08 03:19:38', '2024-03-08 03:19:38', NULL, 0),
(615, 1, 128, 4, 1, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-09 09:56:38', 1, '2024-03-08 04:26:39', '2024-03-08 04:26:39', NULL, 0),
(616, 1, 128, 4, 1, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-09 10:04:40', 1, '2024-03-08 04:34:40', '2024-03-08 04:34:40', NULL, 0),
(620, 2, 126, 4, 1, 0, NULL, '', NULL, NULL, '2024-03-09 10:15:22', 1, '2024-03-08 04:45:22', '2024-03-08 04:45:22', NULL, 0),
(634, 1, 128, 4, 1, 0, 'Pune', 'Pune', '18.516726', '73.856255', '2024-03-09 11:10:11', 1, '2024-03-08 05:40:11', '2024-03-08 05:40:11', NULL, 0),
(636, 1, 126, 4, 5, 0, 'Katraj, Pune, Maharashtra, India', 'Pune', '18.4529322', '73.86523799999999', '2024-03-11 11:18:00', 1, '2024-03-08 05:48:01', '2024-03-08 05:48:01', NULL, 0),
(637, 1, 126, 7, 1, 0, 'GQ8F+93P, Near Periwinkle, Siddharth Nagar, Bavdhan, Pune, Maharashtra 411021, India', 'Pune', '18.515930578577176', '73.77265959978104', '2024-03-09 11:20:51', 1, '2024-03-08 05:50:52', '2024-03-08 05:50:52', NULL, 0),
(638, 3, 130, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-08 07:34:37', '2024-03-08 07:34:37', NULL, 0),
(639, 3, 129, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-08 07:48:54', '2024-03-08 07:48:54', NULL, 0),
(640, 3, 129, 1, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-08 08:04:09', '2024-03-08 08:04:09', NULL, 0),
(641, 4, 129, 4, 5, 0, NULL, '', NULL, NULL, '2024-03-11 13:51:58', 1, '2024-03-08 08:21:58', '2024-03-08 08:21:58', NULL, 0),
(642, 2, 130, 4, 5, 0, NULL, '', NULL, NULL, '2024-03-11 16:28:23', 1, '2024-03-08 10:58:23', '2024-03-08 10:58:23', NULL, 0),
(647, 3, 132, 7, NULL, 0, 'Block A, Patil Nagar, Bavdhan, Sunarwadi, Pune, Maharashtra 411021, India', 'Sunarwadi', '18.520151559509788', '73.77229783684015', '', 1, '2024-03-09 05:20:44', '2024-03-09 05:20:44', NULL, 0),
(649, 1, 128, 1, 5, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204159', '73.7720659', '2024-03-12 11:42:07', 1, '2024-03-09 06:12:08', '2024-03-09 06:12:08', NULL, 0),
(650, 1, 128, 2, 5, 0, NULL, '', NULL, NULL, '2024-03-12 11:43:25', 1, '2024-03-09 06:13:25', '2024-03-09 06:13:25', NULL, 0),
(651, 1, 126, 4, 5, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204339', '73.7720251', '2024-03-12 11:55:18', 1, '2024-03-09 06:25:18', '2024-03-09 06:25:18', NULL, 0),
(652, 1, 126, 2, 5, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204345', '73.7720429', '2024-03-12 12:00:30', 1, '2024-03-09 06:30:31', '2024-03-09 06:30:31', NULL, 0),
(653, 3, 128, 2, NULL, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '', 1, '2024-03-09 07:17:51', '2024-03-09 07:17:51', NULL, 0),
(654, 4, 128, 2, 5, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204228', '73.7720422', '2024-03-12 12:48:31', 1, '2024-03-09 07:18:31', '2024-03-09 07:18:31', NULL, 0),
(655, 1, 126, 1, 7, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-16 12:56:54', 1, '2024-03-09 07:26:54', '2024-03-09 07:26:54', NULL, 0),
(656, 1, 126, 4, 5, 0, 'Shivajinagar, Pune, Maharashtra, India', 'Pune', '18.5314419', '73.8445617', '2024-03-12 17:41:12', 1, '2024-03-09 12:11:12', '2024-03-09 12:11:12', NULL, 0),
(657, 1, 126, 4, 7, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-16 17:53:24', 1, '2024-03-09 12:23:25', '2024-03-09 12:23:25', NULL, 0),
(658, 1, 126, 2, 7, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.520424', '73.7720448', '2024-03-16 17:54:41', 1, '2024-03-09 12:24:41', '2024-03-09 12:24:41', NULL, 0),
(659, 1, 128, 4, 1, 1, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204146', '73.7720658', '2024-03-10 18:03:36', 1, '2024-03-09 12:33:37', '2024-03-09 12:33:37', NULL, 0),
(660, 3, 126, 2, NULL, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204153', '73.7720716', '', 1, '2024-03-09 13:16:03', '2024-03-09 13:16:03', NULL, 0),
(661, 3, 128, 4, NULL, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204025', '73.7720743', '', 1, '2024-03-09 13:22:09', '2024-03-09 13:22:09', NULL, 1),
(662, 3, 126, 2, NULL, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5203929', '73.77207', '', 1, '2024-03-09 13:30:01', '2024-03-09 13:30:01', NULL, 0),
(663, 1, 129, 4, 5, 0, NULL, '', NULL, NULL, '2024-03-13 19:39:18', 1, '2024-03-10 14:09:18', '2024-03-10 14:09:18', NULL, 0),
(667, 1, 143, 4, 7, 0, 'Shivaji Nagar, Pune, Maharashtra, India', 'Pune', '18.5314419', '73.8445617', '2024-03-18 18:30:50', 1, '2024-03-11 13:00:50', '2024-03-11 13:00:50', NULL, 0),
(668, 4, 126, 1, 7, 1, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204368', '73.7720351', '2024-03-18 18:35:10', 1, '2024-03-11 13:05:10', '2024-03-11 13:05:10', NULL, 0),
(669, 1, 143, 4, 7, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204128', '73.7720456', '2024-03-18 18:39:59', 1, '2024-03-11 13:10:00', '2024-03-11 13:10:00', NULL, 0),
(670, 3, 143, 4, NULL, 0, 'Ayodhya, Uttar Pradesh, India', 'Ayodhya', '26.7921605', '82.1997954', '', 1, '2024-03-11 13:13:20', '2024-03-11 13:13:20', NULL, 0),
(671, 1, 143, 4, 7, 0, 'Ayodhya, Uttar Pradesh, India', 'Ayodhya', '26.7921605', '82.1997954', '2024-03-18 18:51:48', 1, '2024-03-11 13:21:48', '2024-03-11 13:21:48', NULL, 0),
(672, 3, 128, 2, NULL, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204059', '73.7720629', '', 1, '2024-03-11 13:23:26', '2024-03-11 13:23:26', NULL, 0),
(673, 3, 126, 2, NULL, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204164', '73.7720367', '', 1, '2024-03-11 13:27:58', '2024-03-11 13:27:58', NULL, 0),
(674, 1, 128, 4, 7, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-18 19:14:33', 1, '2024-03-11 13:44:34', '2024-03-11 13:44:34', NULL, 0),
(675, 1, 126, 1, 7, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-18 19:16:39', 1, '2024-03-11 13:46:39', '2024-03-11 13:46:39', NULL, 0),
(677, 2, 130, 1, 5, 0, 'Gurugram, Haryana, India', 'Gurugram', '28.4594965', '77.0266383', '2024-03-15 19:54:46', 1, '2024-03-12 14:24:46', '2024-03-12 14:24:46', NULL, 0),
(678, 3, 130, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-12 14:26:25', '2024-03-12 14:26:25', NULL, 0),
(679, 4, 130, 1, 1, 0, NULL, '', NULL, NULL, '2024-03-13 19:58:33', 1, '2024-03-12 14:28:33', '2024-03-12 14:28:33', NULL, 0),
(680, 3, 145, 2, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-13 04:26:41', '2024-03-13 04:26:41', NULL, 0),
(681, 3, 145, 4, NULL, 0, 'Profcyma Career Solutions LLP|Online MBA Programs|Online Degree Programs|Distance MBA|Best Online Education Service Provider|, Pashan Road, near Suryadutta College, Patil Nagar, Bavdhan, Pune, Maharashtra, India', 'Pune', '18.5204091', '73.7719807', '', 1, '2024-03-13 04:29:04', '2024-03-13 04:29:04', NULL, 0),
(682, 3, 143, 7, NULL, 0, 'GQF9+9H7, Bhunde Vasti, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.52377509174022', '73.7690744921565', '', 1, '2024-03-13 05:31:54', '2024-03-13 05:31:54', NULL, 1),
(683, 1, 143, 4, 5, 0, 'Indore, Madhya Pradesh, India', 'Indore', '22.7195687', '75.8577258', '2024-03-16 11:16:15', 1, '2024-03-13 05:46:16', '2024-03-13 05:46:16', NULL, 0),
(684, 2, 143, 4, 5, 0, 'Indore, Madhya Pradesh, India', 'Indore', '22.7195687', '75.8577258', '2024-03-16 11:17:24', 1, '2024-03-13 05:47:24', '2024-03-13 05:47:24', NULL, 0),
(685, 1, 143, 1, 5, 0, 'Indore, Madhya Pradesh, India', 'Indore', '22.7195687', '75.8577258', '2024-03-16 11:18:28', 1, '2024-03-13 05:48:28', '2024-03-13 05:48:28', NULL, 0),
(686, 1, 143, 1, 5, 0, 'Indore, Madhya Pradesh, India', 'Indore', '22.7195687', '75.8577258', '2024-03-16 11:19:34', 1, '2024-03-13 05:49:34', '2024-03-13 05:49:34', NULL, 0),
(687, 1, 143, 2, 5, 0, NULL, '', NULL, NULL, '2024-03-16 11:20:41', 1, '2024-03-13 05:50:41', '2024-03-13 05:50:41', NULL, 0),
(688, 1, 128, 4, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-16 11:46:16', 1, '2024-03-13 06:16:16', '2024-03-13 06:16:16', NULL, 0),
(689, 1, 128, 1, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-16 11:47:17', 1, '2024-03-13 06:17:17', '2024-03-13 06:17:17', NULL, 0),
(690, 1, 128, 1, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-16 11:48:09', 1, '2024-03-13 06:18:09', '2024-03-13 06:18:09', NULL, 0),
(691, 3, 128, 2, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-13 06:19:08', '2024-03-13 06:19:08', NULL, 0),
(692, 4, 128, 4, 1, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-14 11:50:29', 1, '2024-03-13 06:20:29', '2024-03-13 06:20:29', NULL, 0),
(693, 1, 126, 4, 5, 0, 'Shaniwar Wada, Shaniwar Peth, Pune, Maharashtra, India', 'Pune', '18.5194647', '73.8553175', '2024-03-16 12:32:17', 1, '2024-03-13 07:02:17', '2024-03-13 07:02:17', NULL, 0),
(694, 2, 146, 4, 5, 0, 'Wakdewadi New Bus Stand,Pune, Old Mumbai - Pune Highway, Sagar Society, Wakadewadi, Bopodi, Pune, Maharashtra, India', 'Pune', '18.5431299', '73.8526112', '2024-03-16 12:47:17', 1, '2024-03-13 07:17:17', '2024-03-13 07:17:17', NULL, 0),
(695, 2, 126, 7, 1, 1, '2nd Floor, Office No 3, M No. 734, Opp High Class Society, Pashan Rd, near Suryadutta College, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5203939', '73.7719752', '2024-03-14 13:00:01', 1, '2024-03-13 07:30:01', '2024-03-13 07:30:01', NULL, 0),
(696, 1, 128, 2, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-16 13:08:43', 1, '2024-03-13 07:38:43', '2024-03-13 07:39:56', '2024-03-13 07:39:56', 0),
(697, 1, 128, 2, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-16 13:10:49', 1, '2024-03-13 07:40:49', '2024-03-13 07:40:49', NULL, 0),
(698, 3, 126, 2, NULL, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '', 1, '2024-03-13 07:44:56', '2024-03-13 07:44:56', NULL, 0),
(699, 3, 128, 2, NULL, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '', 1, '2024-03-13 07:48:48', '2024-03-13 07:48:48', NULL, 0),
(700, 3, 126, 2, NULL, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '', 1, '2024-03-13 07:56:48', '2024-03-13 07:56:48', NULL, 0),
(701, 4, 128, 4, 1, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204285', '73.7720533', '2024-03-14 16:57:09', 1, '2024-03-13 11:27:09', '2024-03-13 11:27:09', NULL, 0),
(702, 1, 128, 4, 1, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204203', '73.7720379', '2024-03-14 17:19:38', 1, '2024-03-13 11:49:38', '2024-03-13 11:49:38', NULL, 0),
(703, 2, 128, 1, 1, 0, 'Katraj, Pune, Maharashtra, India', 'Pune', '18.4529322', '73.86523799999999', '2024-03-14 17:29:05', 1, '2024-03-13 11:59:06', '2024-03-13 11:59:06', NULL, 0),
(704, 2, 128, 1, 1, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-14 17:47:47', 1, '2024-03-13 12:17:48', '2024-03-13 12:17:48', NULL, 0),
(705, 1, 126, 2, 1, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204306', '73.7720524', '2024-03-14 17:56:40', 1, '2024-03-13 12:26:40', '2024-03-13 12:26:40', NULL, 0),
(706, 1, 128, 4, 1, 0, 'Shree Siddhivinayak Temple, SK Bole Road, Prabhadevi, Mumbai, Maharashtra, India', 'Mumbai', '19.01699', '72.8303997', '2024-03-14 18:14:31', 1, '2024-03-13 12:44:31', '2024-03-13 12:44:31', NULL, 0),
(707, 1, 126, 1, 1, 0, 'ISKCON Sri Sri Radha Madan Gopal Mandir - Nashik, Poornima Stop, General Arun Kumar Vaidya Nagar, Dwarka, Nashik, Maharashtra, India', 'Nashik', '19.9871235', '73.7969715', '2024-03-14 18:21:41', 1, '2024-03-13 12:51:42', '2024-03-13 12:51:42', NULL, 0),
(708, 1, 126, 1, 1, 1, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204265', '73.7720357', '2024-03-14 18:29:02', 1, '2024-03-13 12:59:02', '2024-03-13 12:59:02', NULL, 0),
(709, 1, 145, 4, 1, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204235', '73.7720415', '2024-03-12 19:41:18', 1, '2024-03-13 14:11:18', '2024-03-13 14:11:18', NULL, 0),
(710, 1, 145, 4, 1, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204142', '73.7720398', '2024-03-12 20:17:25', 1, '2024-03-13 14:47:25', '2024-03-13 14:47:25', NULL, 0),
(711, 3, 130, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-13 16:30:56', '2024-03-13 16:30:56', NULL, 0),
(712, 1, 126, 4, 1, 0, NULL, '', NULL, NULL, '2024-03-15 10:32:22', 1, '2024-03-14 05:02:22', '2024-03-14 05:02:22', NULL, 0),
(713, 3, 129, 4, NULL, 0, NULL, NULL, NULL, NULL, '', 1, '2024-03-14 07:17:40', '2024-03-14 07:17:40', NULL, 0),
(714, 1, 126, 4, 1, 0, NULL, NULL, NULL, NULL, '2024-03-15 14:58:08', 1, '2024-03-14 09:28:08', '2024-03-14 09:28:08', NULL, 0),
(715, 2, 126, 4, 1, 0, NULL, NULL, NULL, NULL, '2024-03-15 15:01:42', 1, '2024-03-14 09:31:42', '2024-03-14 09:31:42', NULL, 0),
(716, 1, 126, 1, 1, 0, NULL, NULL, NULL, NULL, '2024-03-15 15:02:44', 1, '2024-03-14 09:32:44', '2024-03-14 09:32:44', NULL, 0),
(717, 2, 126, 1, 1, 0, NULL, NULL, NULL, NULL, '2024-03-15 15:03:54', 1, '2024-03-14 09:33:54', '2024-03-14 09:33:54', NULL, 0),
(718, 1, 146, 4, 1, 0, NULL, '', NULL, NULL, '2024-03-15 15:16:49', 1, '2024-03-14 09:46:49', '2024-03-14 09:46:49', NULL, 0),
(719, 3, 129, 1, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-14 16:42:29', '2024-03-14 16:42:29', NULL, 0),
(720, 1, 146, 4, 5, 0, NULL, '', NULL, NULL, '2024-03-18 10:09:03', 1, '2024-03-15 04:39:03', '2024-03-15 04:39:03', NULL, 0),
(721, 2, 146, 4, 5, 0, NULL, '', NULL, NULL, '2024-03-18 10:11:38', 1, '2024-03-15 04:41:38', '2024-03-15 04:41:38', NULL, 0),
(722, 3, 146, 4, NULL, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '', 1, '2024-03-15 04:44:21', '2024-03-15 04:44:21', NULL, 0),
(723, 4, 146, 4, 5, 0, 'GVC3+JVC, Apte Ghat, Shaniwar Peth, Pune, Maharashtra 411030, India', 'Pune', '18.521996715713705', '73.85423328727484', '2024-03-18 10:16:44', 1, '2024-03-15 04:46:44', '2024-03-15 04:46:44', NULL, 0),
(724, 3, 146, 1, NULL, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204259', '73.7720186', '', 1, '2024-03-15 05:11:19', '2024-03-15 05:11:19', NULL, 0),
(725, 3, 146, 1, NULL, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.52042', '73.772042', '', 1, '2024-03-15 05:25:16', '2024-03-15 05:25:16', NULL, 0),
(726, 1, 146, 1, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-18 11:01:25', 1, '2024-03-15 05:31:25', '2024-03-15 05:31:25', NULL, 0),
(727, 1, 146, 1, 5, 0, NULL, '', NULL, NULL, '2024-03-18 11:09:40', 1, '2024-03-15 05:39:40', '2024-03-15 05:39:40', NULL, 0),
(728, 1, 146, 1, 5, 0, NULL, '', NULL, NULL, '2024-03-18 11:10:48', 1, '2024-03-15 05:40:48', '2024-03-15 05:40:48', NULL, 0),
(729, 3, 146, 1, NULL, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204251', '73.7720215', '', 1, '2024-03-15 05:42:13', '2024-03-15 05:42:13', NULL, 0),
(730, 4, 146, 1, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-18 11:14:12', 1, '2024-03-15 05:44:12', '2024-03-15 05:44:12', NULL, 0),
(731, 4, 146, 1, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-18 11:16:02', 1, '2024-03-15 05:46:02', '2024-03-15 05:46:02', NULL, 0),
(732, 4, 146, 1, 5, 0, NULL, '', NULL, NULL, '2024-03-18 11:17:55', 1, '2024-03-15 05:47:55', '2024-03-15 05:47:55', NULL, 0),
(733, 4, 146, 1, 5, 0, NULL, '', NULL, NULL, '2024-03-18 11:19:13', 1, '2024-03-15 05:49:13', '2024-03-15 05:49:13', NULL, 0),
(734, 1, 126, 1, 1, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204286', '73.772035', '2024-03-16 12:00:04', 1, '2024-03-15 06:30:04', '2024-03-15 06:30:04', NULL, 0),
(735, 3, 126, 7, NULL, 0, 'Bapuji bwa mandir, Patil Nagar, Bavdhan, Pune, Maharashtra 411021, India', 'Pune', '18.51896287924893', '73.77205274999142', '', 1, '2024-03-15 06:31:33', '2024-03-15 06:31:33', NULL, 0),
(736, 3, 146, 4, NULL, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204255', '73.7720287', '', 1, '2024-03-15 06:33:14', '2024-03-15 06:33:14', NULL, 0),
(737, 4, 149, 4, 1, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5203992', '73.7720595', '2024-03-16 18:07:23', 1, '2024-03-15 12:37:23', '2024-03-15 12:37:23', NULL, 0),
(738, 1, 146, 4, 1, 0, NULL, '', NULL, NULL, '2024-03-16 18:09:55', 1, '2024-03-15 12:39:55', '2024-03-15 12:39:55', NULL, 0),
(739, 1, 146, 1, 1, 0, 'Indore, Madhya Pradesh, India', 'Indore', '22.7195687', '75.8577258', '2024-03-16 18:16:38', 1, '2024-03-15 12:46:38', '2024-03-15 12:46:38', NULL, 0),
(740, 1, 128, 4, 1, 0, 'Wakdewadi, Shivajinagar, Pune, Maharashtra, India', 'Pune', '18.5424091', '73.8521981', '2024-03-16 18:27:53', 1, '2024-03-15 12:57:53', '2024-03-15 12:57:53', NULL, 0),
(741, 1, 149, 4, 1, 0, 'Katraj, Pune, Maharashtra, India', 'Pune', '18.4529322', '73.86523799999999', '2024-03-16 18:32:43', 1, '2024-03-15 13:02:43', '2024-03-15 13:02:43', NULL, 0),
(742, 1, 128, 1, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-18 18:35:30', 1, '2024-03-15 13:05:30', '2024-03-15 13:05:30', NULL, 0),
(743, 3, 128, 2, NULL, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '', 1, '2024-03-15 13:08:43', '2024-03-15 13:08:43', NULL, 0),
(744, 3, 128, 2, NULL, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204308', '73.7720411', '', 1, '2024-03-15 13:11:02', '2024-03-15 13:11:02', NULL, 0),
(745, 1, 126, 4, 5, 0, NULL, '', NULL, NULL, '2024-03-18 18:42:57', 1, '2024-03-15 13:12:57', '2024-03-15 13:12:57', NULL, 0),
(746, 1, 126, 2, 5, 0, NULL, '', NULL, NULL, '2024-03-18 18:44:37', 1, '2024-03-15 13:14:37', '2024-03-15 13:14:37', NULL, 0),
(747, 2, 126, 2, 1, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204198', '73.7720663', '2024-03-16 18:46:11', 1, '2024-03-15 13:16:11', '2024-03-15 13:16:11', NULL, 0),
(753, 1, 128, 3, 1, 0, NULL, '', NULL, NULL, '2024-03-16 18:54:47', 1, '2024-03-15 13:24:47', '2024-03-15 13:24:47', NULL, 0),
(754, 3, 128, 2, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-15 13:31:18', '2024-03-15 13:31:18', NULL, 0),
(755, 3, 126, 2, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-15 13:32:13', '2024-03-15 13:32:13', NULL, 0),
(756, 3, 128, 1, NULL, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204302', '73.7720684', '', 1, '2024-03-15 13:35:39', '2024-03-15 13:35:39', NULL, 0),
(757, 3, 126, 1, NULL, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204324', '73.7720511', '', 1, '2024-03-15 13:37:05', '2024-03-15 13:37:05', NULL, 0),
(758, 2, 126, 1, 11, 0, NULL, '', NULL, NULL, '2024-04-17 11:06:41', 1, '2024-03-18 05:36:41', '2024-03-18 05:36:41', NULL, 0),
(759, 2, 154, 1, 12, 0, NULL, '', NULL, NULL, '2024-05-02 11:51:16', 1, '2024-03-18 06:21:16', '2024-03-18 06:21:16', NULL, 0),
(760, 2, 129, 4, 7, 0, NULL, '', NULL, NULL, '2024-03-25 16:37:23', 1, '2024-03-18 11:07:23', '2024-03-18 11:07:23', NULL, 0),
(761, 4, 130, 4, 7, 0, NULL, '', NULL, NULL, '2024-03-25 16:53:03', 1, '2024-03-18 11:23:03', '2024-03-18 11:23:03', NULL, 0),
(762, 1, 126, 4, 5, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204258', '73.7720269', '2024-03-22 11:09:17', 1, '2024-03-19 05:39:17', '2024-03-19 05:39:17', NULL, 0),
(763, 2, 126, 1, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-22 11:13:18', 1, '2024-03-19 05:43:18', '2024-03-19 05:43:18', NULL, 0),
(764, 2, 126, 1, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-22 11:19:28', 1, '2024-03-19 05:49:28', '2024-03-19 05:49:28', NULL, 0),
(765, 3, 146, 1, NULL, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204256', '73.7720388', '', 1, '2024-03-19 05:55:28', '2024-03-19 05:55:28', NULL, 0),
(766, 3, 126, 4, NULL, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '', 1, '2024-03-19 05:56:26', '2024-03-19 05:56:26', NULL, 0),
(767, 3, 126, 2, NULL, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204293', '73.7720421', '', 1, '2024-03-19 05:59:23', '2024-03-19 05:59:23', NULL, 0),
(768, 1, 128, 2, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-22 11:31:22', 1, '2024-03-19 06:01:22', '2024-03-19 06:01:22', NULL, 0),
(769, 1, 126, 4, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-03-22 11:34:28', 1, '2024-03-19 06:04:28', '2024-03-19 06:04:28', NULL, 0),
(770, 3, 146, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-19 06:18:58', '2024-03-19 06:18:58', NULL, 0),
(771, 3, 155, 1, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-19 06:20:28', '2024-03-19 06:20:28', NULL, 0),
(772, 3, 146, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-19 06:23:03', '2024-03-19 06:23:03', NULL, 0),
(773, 1, 146, 4, 5, 0, NULL, '', NULL, NULL, '2024-03-22 11:56:36', 1, '2024-03-19 06:26:36', '2024-03-19 06:26:36', NULL, 0),
(774, 3, 155, 1, NULL, 0, NULL, '', NULL, NULL, NULL, 1, '2024-03-19 06:46:45', '2024-03-19 06:46:45', NULL, 0),
(775, 3, 126, 4, NULL, 0, NULL, '', NULL, NULL, NULL, 1, '2024-03-19 06:58:49', '2024-03-19 07:04:04', '2024-03-19 07:04:04', 0),
(776, 3, 146, 4, NULL, 0, NULL, '', NULL, NULL, NULL, 1, '2024-03-19 07:02:24', '2024-03-19 07:02:24', NULL, 0),
(777, 3, 126, 4, NULL, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204231', '73.7720538', NULL, 1, '2024-03-19 07:04:35', '2024-03-19 07:04:35', NULL, 0),
(778, 3, 126, 4, NULL, 0, NULL, '', NULL, NULL, NULL, 1, '2024-03-19 07:47:38', '2024-03-19 07:47:38', NULL, 0),
(779, 3, 146, 4, NULL, 0, NULL, '', NULL, NULL, NULL, 1, '2024-03-19 07:50:22', '2024-03-19 07:50:22', NULL, 0),
(780, 3, 126, 4, NULL, 0, NULL, '', NULL, NULL, NULL, 1, '2024-03-19 07:51:06', '2024-03-19 07:51:06', NULL, 0),
(781, 1, 146, 4, 7, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204317', '73.7720239', '2024-03-26 14:35:22', 1, '2024-03-19 09:05:22', '2024-03-19 09:05:22', NULL, 0),
(782, 1, 146, 1, 7, 0, 'Shivaji Nagar, Pune, Maharashtra, India', 'Pune', '18.5314419', '73.8445617', '2024-03-26 14:36:34', 1, '2024-03-19 09:06:35', '2024-03-19 09:06:35', NULL, 0),
(783, 1, 126, 3, 5, 0, NULL, '', NULL, NULL, '2024-03-22 16:38:29', 1, '2024-03-19 11:08:29', '2024-03-19 11:08:29', NULL, 0),
(784, 3, 126, 2, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-19 11:11:41', '2024-03-19 11:11:41', NULL, 0),
(785, 1, 126, 4, 5, 0, NULL, '', NULL, NULL, '2024-03-22 17:35:26', 1, '2024-03-19 12:05:26', '2024-03-19 12:06:33', '2024-03-19 12:06:33', 0),
(786, 1, 126, 4, 7, 0, NULL, '', NULL, NULL, '2024-03-26 17:37:19', 1, '2024-03-19 12:07:19', '2024-03-19 12:07:19', NULL, 0),
(787, 1, 126, 4, 7, 0, 'NP-13, Kolivery Village, Navpada, Sunder Nagar, Santacruz East, Mumbai, Maharashtra 400029, India', 'Mumbai', '19.098159712565547', '72.87522364407778', '2024-03-26 17:48:52', 1, '2024-03-19 12:18:53', '2024-03-19 12:18:53', NULL, 0),
(788, 1, 146, 1, 7, 0, 'Wakdewadi, Shivajinagar, Pune, Maharashtra, India', 'Pune', '18.5424091', '73.8521981', '2024-03-26 18:18:51', 1, '2024-03-19 12:48:51', '2024-03-19 12:48:51', NULL, 0),
(789, 2, 146, 4, 7, 0, '4V2F+VVM Chhatrapati Shivaji Maharaj international airport, Chhatrapati Shivaji Maharaj Int\'l Airport Rd, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400047, India', 'Mumbai', '19.101812316949562', '72.87463020533323', '2024-03-26 18:21:55', 1, '2024-03-19 12:51:55', '2024-03-19 12:51:55', NULL, 0),
(790, 1, 126, 4, 7, 0, 'Mumbai, Maharashtra, India', 'Mumbai', '19.0759837', '72.8776559', '2024-03-26 18:23:46', 1, '2024-03-19 12:53:46', '2024-03-19 12:53:46', NULL, 0),
(791, 2, 146, 4, 7, 0, 'Andheri East, Mumbai, Maharashtra, India', 'Mumbai', '19.1178548', '72.8631304', '2024-03-26 18:24:57', 1, '2024-03-19 12:54:57', '2024-03-19 12:54:57', NULL, 0),
(792, 1, 126, 1, 7, 0, 'Office No 2. MNO 734, 2nd Floor, opposite of High Class Society, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204309', '73.772001', '2024-03-26 18:39:12', 1, '2024-03-19 13:09:12', '2024-03-19 13:09:12', NULL, 0),
(793, 3, 146, 4, NULL, 0, 'Katraj, Pune, Maharashtra, India', 'Pune', '18.4529322', '73.86523799999999', '', 1, '2024-03-19 13:12:18', '2024-03-19 13:12:18', NULL, 0),
(794, 4, 129, 4, 5, 0, NULL, '', NULL, NULL, '2024-03-22 19:27:33', 1, '2024-03-19 13:57:33', '2024-03-19 13:57:33', NULL, 0),
(795, 2, 129, 4, 5, 0, NULL, '', NULL, NULL, '2024-03-22 19:28:47', 1, '2024-03-19 13:58:47', '2024-03-19 13:58:47', NULL, 0),
(796, 3, 129, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-19 13:59:38', '2024-03-19 13:59:38', NULL, 0),
(799, 1, 171, 1, 5, 0, NULL, '', NULL, NULL, '2024-04-02 20:16:11', 1, '2024-03-30 14:46:11', '2024-03-30 14:46:11', NULL, 0),
(800, 2, 172, 4, 11, 0, NULL, '', NULL, NULL, '2024-04-29 22:38:52', 1, '2024-03-30 17:08:52', '2024-03-30 17:08:52', NULL, 0),
(801, 3, 172, 4, NULL, 0, 'U-10 Road, U Block, DLF Phase 3, Sector 24, Gurugram, Haryana, India', 'Gurugram', '28.4938382', '77.0939741', '', 1, '2024-03-30 17:15:12', '2024-03-30 17:15:12', NULL, 0),
(802, 3, 170, 4, NULL, 0, 'U10/18, Galli No 19, U Block, DLF Phase 3, Sector 24, Gurugram, Haryana 122022, India', 'Gurugram', '28.4937728', '77.0940943', '', 1, '2024-03-30 18:16:32', '2024-03-30 18:16:32', NULL, 1),
(803, 3, 172, 4, NULL, 0, 'U10/17, Galli No 19, U Block, DLF Phase 3, Sector 24, Gurugram, Haryana 122022, India', 'Gurugram', '28.4937605', '77.0941446', '', 1, '2024-03-30 18:23:40', '2024-03-30 18:23:40', NULL, 1),
(804, 1, 170, 4, 5, 0, NULL, '', NULL, NULL, '2024-04-03 00:09:58', 1, '2024-03-30 18:39:58', '2024-03-30 18:39:58', NULL, 0),
(805, 1, 172, 4, 11, 0, NULL, '', NULL, NULL, '2024-04-30 00:11:53', 1, '2024-03-30 18:41:53', '2024-03-30 18:41:53', NULL, 0),
(806, 4, 172, 4, 11, 0, NULL, '', NULL, NULL, '2024-04-30 00:41:23', 1, '2024-03-30 19:11:23', '2024-03-30 19:11:23', NULL, 0),
(807, 3, 172, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-31 03:34:44', '2024-03-31 03:34:44', NULL, 0),
(808, 3, 172, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-31 03:38:37', '2024-03-31 03:38:37', NULL, 0),
(809, 3, 172, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-31 03:46:13', '2024-03-31 03:46:13', NULL, 0),
(810, 2, 172, 4, 11, 0, NULL, '', NULL, NULL, '2024-04-30 09:27:39', 1, '2024-03-31 03:57:39', '2024-03-31 03:57:39', NULL, 0),
(811, 3, 172, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-31 04:03:31', '2024-03-31 04:03:31', NULL, 0),
(812, 4, 172, 4, 10, 0, NULL, '', NULL, NULL, '2024-04-15 09:49:41', 1, '2024-03-31 04:19:41', '2024-03-31 04:19:41', NULL, 0),
(813, 3, 172, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-31 04:23:06', '2024-03-31 04:23:06', NULL, 0),
(814, 3, 172, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-03-31 06:13:50', '2024-03-31 06:13:50', NULL, 0),
(815, 3, 174, 1, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-01 15:49:51', '2024-04-01 15:49:51', NULL, 0),
(816, 3, 172, 4, NULL, 0, 'Om Sai Ram Andhra PG & Mess, opp. Ramada Central Hotel, Sector 45, Gurugram, Haryana, India', 'Gurugram', '28.4486364', '77.0719242', '', 1, '2024-04-01 15:51:08', '2024-04-01 15:51:08', NULL, 0),
(817, 3, 174, 1, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-01 15:54:17', '2024-04-01 15:54:17', NULL, 0),
(818, 1, 172, 4, 11, 0, NULL, '', NULL, NULL, '2024-05-03 11:12:09', 1, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL, 0),
(819, 2, 172, 4, 10, 0, NULL, '', NULL, NULL, '2024-04-18 15:39:24', 1, '2024-04-03 10:09:24', '2024-04-03 10:09:24', NULL, 0),
(820, 4, 172, 7, 7, 0, 'DLF Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana, India', 'Gurugram', '28.4949762', '77.0895421', '2024-04-10 20:27:15', 1, '2024-04-03 14:57:16', '2024-04-03 14:57:16', NULL, 0),
(821, 2, 172, 4, 10, 0, 'Gym Armour, U Block, DLF Phase 3, Sector 24, Gurugram, Haryana, India', 'Gurugram', '28.4891643', '77.0969698', '2024-04-19 16:27:58', 1, '2024-04-04 10:57:58', '2024-04-04 10:57:58', NULL, 0),
(822, 2, 182, 4, 10, 0, 'Bangalore, Karnataka, India', 'Bengaluru', '12.9715987', '77.5945627', '2024-04-19 16:38:09', 1, '2024-04-04 11:08:09', '2024-04-04 11:08:09', NULL, 0),
(823, 2, 182, 4, 10, 0, 'Visakhapatnam, Andhra Pradesh, India', 'Visakhapatnam', '17.6868159', '83.2184815', '2024-04-19 16:54:18', 1, '2024-04-04 11:24:19', '2024-04-04 11:24:19', NULL, 0),
(824, 2, 172, 4, 7, 0, 'Bangalore, Karnataka, India', 'Bengaluru', '12.9715987', '77.5945627', '2024-04-11 18:53:40', 1, '2024-04-04 13:23:40', '2024-04-20 03:07:58', '2024-04-20 03:07:58', 0),
(825, 2, 172, 4, 7, 0, 'DLF Phase 3, Sector 24, Gurugram, Haryana, India', 'Gurugram', '28.4916812', '77.094897', '2024-04-11 19:00:43', 1, '2024-04-04 13:30:43', '2024-04-04 13:30:43', NULL, 0),
(826, 2, 182, 4, 10, 0, 'Chennai, Tamil Nadu, India', 'Chennai', '13.0826802', '80.2707184', '2024-04-19 20:41:27', 1, '2024-04-04 15:11:28', '2024-04-20 03:09:07', '2024-04-20 03:09:07', 0),
(827, 3, 172, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-07 18:05:58', '2024-04-07 18:05:58', NULL, 0),
(828, 3, 172, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-11 15:17:14', '2024-04-11 15:17:14', NULL, 0),
(829, 3, 182, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-11 17:23:56', '2024-04-11 17:23:56', NULL, 0),
(830, 3, 182, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-11 19:10:27', '2024-04-11 19:10:27', NULL, 0),
(831, 3, 182, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-14 12:07:25', '2024-04-14 12:07:25', NULL, 0),
(832, 2, 182, 4, 5, 0, 'Bangalore, Karnataka, India', NULL, '12.9715987', '77.5945627', '2024-04-18 18:03:48', 1, '2024-04-15 12:33:48', '2024-04-20 03:08:56', '2024-04-20 03:08:56', 0),
(833, 2, 172, 4, 7, 0, 'Visakhapatnam, Andhra Pradesh, India', NULL, '17.6868159', '83.2184815', '2024-04-22 18:26:21', 1, '2024-04-15 12:56:21', '2024-04-15 12:56:21', NULL, 0),
(834, 2, 172, 4, 5, 0, 'Bangalore, Karnataka, India', NULL, '12.9715987', '77.5945627', '2024-04-19 15:59:56', 1, '2024-04-16 10:29:56', '2024-04-16 10:30:21', '2024-04-16 10:30:21', 0),
(835, 2, 130, 4, 5, 0, 'Bangalore, Karnataka, India', NULL, '12.9715987', '77.5945627', '2024-04-21 10:12:56', 1, '2024-04-18 04:42:56', '2024-04-20 08:00:46', '2024-04-20 08:00:46', 0),
(836, 1, 187, 1, 7, 0, 'Chennai, Tamil Nadu, India', NULL, '13.0826802', '80.2707184', '2024-04-25 13:03:32', 1, '2024-04-18 07:33:32', '2024-04-18 07:33:32', NULL, 0),
(837, 2, 128, 1, 1, 0, 'Pune', NULL, '18.516726', '73.856255', '2024-04-19 14:24:15', 1, '2024-04-18 08:54:16', '2024-04-18 08:54:16', NULL, 0),
(838, 1, 146, 1, 5, 0, 'Kanyakumari, Tamil Nadu, India', NULL, '8.0843512', '77.54950190000001', '2024-04-21 18:09:15', 1, '2024-04-18 12:39:15', '2024-04-18 12:39:15', NULL, 0),
(839, 2, 182, 4, 5, 0, NULL, '', NULL, NULL, '2024-04-23 13:28:36', 1, '2024-04-20 07:58:36', '2024-04-20 07:58:44', '2024-04-20 07:58:44', 0),
(840, 2, 129, 4, 5, 0, 'Bangalore, Karnataka, India', NULL, '12.9715987', '77.5945627', '2024-04-23 13:32:07', 1, '2024-04-20 08:02:07', '2024-04-21 06:25:54', '2024-04-21 06:25:54', 0),
(841, 1, 146, 1, 5, 0, 'Kashmir, Himachal Pradesh, India', NULL, '31.6318889', '76.4020704', '2024-04-23 15:58:42', 1, '2024-04-20 10:28:42', '2024-04-20 10:28:42', NULL, 0),
(842, 1, 146, 1, 5, 0, 'Office No 2. MNO 734, 2nd Floor, opposite of High Class Society, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', NULL, '18.5204202', '73.7720033', '2024-04-23 16:02:48', 1, '2024-04-20 10:32:48', '2024-04-20 10:32:48', NULL, 0),
(843, 1, 146, 7, 7, 0, 'GANGA LEGEND, 33, J Block, MIDC, Bhosari, Pimpri-Chinchwad, Pune, Maharashtra 411021, India', NULL, '18.52343302442369', '73.77375327050686', '2024-04-27 16:35:35', 1, '2024-04-20 11:05:36', '2024-04-20 11:05:36', NULL, 0),
(844, 1, 146, 4, 5, 0, 'Jammu, Jai Jawan Nagar, Ranjeet Nagar, Sangamvadi, Pune, Maharashtra, India', NULL, '18.5441975', '73.87268279999999', '2024-04-23 16:39:23', 1, '2024-04-20 11:09:23', '2024-04-20 11:09:23', NULL, 0),
(845, 1, 146, 1, 5, 0, 'Yavatmal, Maharashtra, India', NULL, '20.3899385', '78.1306846', '2024-04-23 16:42:26', 1, '2024-04-20 11:12:26', '2024-04-20 11:12:26', NULL, 0),
(846, 1, 146, 1, 5, 0, 'Pune, Maharashtra, India', NULL, '18.5204303', '73.8567437', '2024-04-23 16:43:32', 1, '2024-04-20 11:13:32', '2024-04-20 11:13:32', NULL, 0),
(847, 1, 146, 1, 5, 0, 'Survey No 270, Besides DSK Toyota Showroom, Mum-Blore highway, Bhunde Vasti, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', NULL, '18.521316706120956', '73.7675342336297', '2024-04-23 16:45:50', 1, '2024-04-20 11:15:50', '2024-04-20 11:15:50', NULL, 0),
(848, 1, 146, 1, 5, 0, 'Office No 2. MNO 734, 2nd Floor, opposite of High Class Society, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', NULL, '18.5204304', '73.7719991', '2024-04-23 16:47:12', 1, '2024-04-20 11:17:12', '2024-04-20 11:17:12', NULL, 0),
(849, 1, 146, 4, 5, 0, 'Surat, Gujarat, India', 'Surat', '21.1702401', '72.83106070000001', '2024-04-23 16:52:29', 1, '2024-04-20 11:22:29', '2024-04-20 11:22:29', NULL, 0),
(850, 1, 146, 4, 5, 0, 'WRXG+27 Antkil, Uttarakhand, India', 'Antkil', '29.947525341269806', '78.8256761804223', '2024-04-23 17:07:51', 1, '2024-04-20 11:37:51', '2024-04-20 11:37:51', NULL, 0),
(851, 1, 146, 2, 5, 0, '104, Seetai Corner, 411021, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.523301410980213', '73.77210069447756', '2024-04-23 17:12:37', 1, '2024-04-20 11:42:37', '2024-04-20 11:42:37', NULL, 0),
(852, 1, 145, 4, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-04-23 17:26:09', 1, '2024-04-20 11:56:09', '2024-04-20 11:56:09', NULL, 0),
(853, 1, 146, 4, 5, 0, 'Goa, India', 'Bandoli', '15.2993265', '74.12399599999999', '2024-04-23 17:29:03', 1, '2024-04-20 11:59:03', '2024-04-20 11:59:03', NULL, 0),
(854, 1, 145, 4, 5, 0, '2nd Floor, Office No 3, M No. 734, Opp High Class Society, Pashan Rd, near Suryadutta College, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5203904', '73.7720038', '2024-04-23 17:30:42', 1, '2024-04-20 12:00:42', '2024-04-20 12:01:03', '2024-04-20 12:01:03', 0),
(855, 1, 145, 4, 5, 0, 'Delhi, India', 'New Delhi', '28.7040592', '77.10249019999999', '2024-04-23 17:32:02', 1, '2024-04-20 12:02:03', '2024-04-20 12:02:03', NULL, 0),
(856, 2, 129, 4, 7, 0, 'Bangalore, Karnataka, India', 'Bengaluru', '12.9715987', '77.5945627', '2024-04-27 18:22:17', 1, '2024-04-20 12:52:17', '2024-04-20 12:52:17', NULL, 0),
(857, 3, 172, 4, NULL, 0, 'Arun Jaitley Stadium, Jawaharlal Nehru Marg, Feroze Shah Kotla, Raj Ghat, New Delhi, Delhi, India', 'New Delhi', '28.637923', '77.2431735', '', 1, '2024-04-21 06:37:19', '2024-04-21 06:37:49', '2024-04-21 06:37:49', 0),
(858, 3, 172, 4, NULL, 0, 'Arun Jaitley Stadium, Jawaharlal Nehru Marg, Feroze Shah Kotla, Raj Ghat, New Delhi, Delhi, India', 'New Delhi', '28.637923', '77.2431735', '', 1, '2024-04-21 06:54:08', '2024-04-21 06:54:08', NULL, 0),
(859, 3, 130, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-21 07:29:56', '2024-04-21 07:29:56', NULL, 0),
(860, 2, 129, 1, 5, 0, NULL, '', NULL, NULL, '2024-04-24 13:01:56', 1, '2024-04-21 07:31:56', '2024-04-21 07:31:56', NULL, 0),
(861, 4, 182, 2, 5, 0, NULL, '', NULL, NULL, '2024-04-24 13:07:05', 1, '2024-04-21 07:37:05', '2024-04-21 07:37:05', NULL, 0),
(862, 3, 172, 2, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-21 07:39:53', '2024-04-21 07:39:53', NULL, 0),
(867, 3, 182, 3, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-21 08:33:27', '2024-04-21 08:33:27', NULL, 0),
(869, 2, 172, 1, 5, 0, 'Bangalore, Karnataka, India', 'Bengaluru', '12.9715987', '77.5945627', '2024-04-24 15:50:04', 1, '2024-04-21 10:20:04', '2024-04-21 10:20:04', NULL, 0),
(870, 4, 172, 1, 5, 0, NULL, '', NULL, NULL, '2024-04-24 15:51:39', 1, '2024-04-21 10:21:39', '2024-04-21 10:21:39', NULL, 0),
(871, 3, 182, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-21 10:25:04', '2024-04-21 10:25:04', NULL, 0),
(872, 3, 172, 2, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-21 10:27:32', '2024-04-21 10:27:32', NULL, 0),
(873, 3, 172, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-21 10:44:20', '2024-04-21 10:44:20', NULL, 0),
(874, 3, 172, 1, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-21 10:47:05', '2024-04-21 10:47:05', NULL, 0),
(875, 1, 187, 7, 5, 0, 'Office No 2. MNO 734, 2nd Floor, opposite of High Class Society, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204249', '73.7720015', '2024-04-25 11:56:59', 1, '2024-04-22 06:26:59', '2024-04-22 06:26:59', NULL, 0),
(876, 4, 187, 7, 5, 0, 'Office No 2. MNO 734, 2nd Floor, opposite of High Class Society, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204261', '73.7720033', '2024-04-25 11:59:26', 1, '2024-04-22 06:29:26', '2024-04-22 06:29:26', NULL, 0),
(877, 2, 146, 7, 5, 0, 'Shop No. 1, Sr No. 348/1, Chatan Prasad Building, P-21, India Rod Place Bavdhan, Pune, Patil Nagar, Hingne Khurd, Patil Nagar, Bavdhan, Pune, Maharashtra 411021, India', 'Pune', '18.51886655096011', '73.77281282097101', '2024-04-25 12:02:24', 1, '2024-04-22 06:32:24', '2024-04-22 06:32:24', NULL, 0),
(878, 1, 146, 2, 5, 0, NULL, '', NULL, NULL, '2024-04-25 12:05:04', 1, '2024-04-22 06:35:04', '2024-04-22 06:35:04', NULL, 0),
(879, 2, 146, 2, 5, 0, 'Office No 2. MNO 734, 2nd Floor, opposite of High Class Society, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204295', '73.7719978', '2024-04-25 12:08:51', 1, '2024-04-22 06:38:51', '2024-04-22 06:38:51', NULL, 0);
INSERT INTO `posts` (`id`, `post_master_id`, `user_id`, `where_to_post_id`, `day_id`, `repost_status`, `address`, `city`, `lat`, `long`, `end_date`, `status`, `created_at`, `updated_at`, `deleted_at`, `oppose`) VALUES
(880, 3, 187, 2, NULL, 0, 'Mumbai, Maharashtra, India', 'Mumbai', '19.0759837', '72.8776559', '', 1, '2024-04-22 06:51:45', '2024-04-22 06:51:45', NULL, 0),
(881, 1, 187, 3, 7, 0, 'GQM7+4G Pune, Maharashtra, India', 'Pune', '18.532791307095977', '73.763827085495', '2024-04-29 12:37:45', 1, '2024-04-22 07:07:45', '2024-04-22 07:07:45', NULL, 0),
(882, 3, 187, 3, NULL, 0, 'Mumbai, Maharashtra, India', 'Mumbai', '19.0759837', '72.8776559', '', 1, '2024-04-22 07:18:19', '2024-04-22 07:18:19', NULL, 0),
(883, 1, 146, 7, 5, 0, 'Office No 2. MNO 734, 2nd Floor, opposite of High Class Society, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204295', '73.7719978', '2024-04-25 12:55:25', 1, '2024-04-22 07:25:25', '2024-04-22 07:25:25', NULL, 0),
(885, 4, 187, 3, 5, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204268', '73.772013', '2024-04-25 12:57:16', 1, '2024-04-22 07:27:16', '2024-04-22 07:27:16', NULL, 0),
(886, 1, 146, 3, 5, 0, 'Office No 2. MNO 734, 2nd Floor, opposite of High Class Society, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204295', '73.7719978', '2024-04-25 13:01:16', 1, '2024-04-22 07:31:16', '2024-04-22 07:31:16', NULL, 0),
(887, 4, 187, 2, 5, 0, NULL, '', NULL, NULL, '2024-04-25 13:02:53', 1, '2024-04-22 07:32:53', '2024-04-22 07:32:53', NULL, 0),
(888, 2, 146, 4, 7, 0, NULL, '', NULL, NULL, '2024-04-29 13:06:03', 1, '2024-04-22 07:36:03', '2024-04-22 07:36:03', NULL, 0),
(889, 1, 187, 4, 5, 0, 'Pune, Maharashtra, India', 'Pune', '18.5204303', '73.8567437', '2024-04-25 13:08:08', 1, '2024-04-22 07:38:08', '2024-04-22 07:38:08', NULL, 0),
(890, 1, 187, 4, 5, 0, '2nd Floor, Office No 3, M No. 734, Opp High Class Society, Pashan Rd, near Suryadutta College, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204027', '73.7720019', '2024-04-25 13:09:10', 1, '2024-04-22 07:39:10', '2024-04-22 07:39:10', NULL, 0),
(891, 1, 187, 4, 7, 0, NULL, '', NULL, NULL, '2024-04-29 13:10:05', 1, '2024-04-22 07:40:05', '2024-04-22 07:40:05', NULL, 0),
(892, 3, 146, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-22 07:51:52', '2024-04-22 07:51:52', NULL, 0),
(893, 1, 187, 4, 7, 0, 'Mumbai, Maharashtra, India', 'Mumbai', '19.0759837', '72.8776559', '2024-04-29 13:23:57', 1, '2024-04-22 07:53:57', '2024-04-22 07:53:57', NULL, 0),
(894, 3, 172, 4, NULL, 0, 'Arun Jaitley Stadium, Jawaharlal Nehru Marg, Feroze Shah Kotla, Raj Ghat, New Delhi, Delhi, India', 'New Delhi', '28.637923', '77.2431735', '', 1, '2024-04-22 13:10:39', '2024-04-22 13:10:39', NULL, 0),
(895, 3, 129, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-22 13:26:58', '2024-04-22 13:26:58', NULL, 0),
(896, 3, 172, 4, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-22 13:28:37', '2024-04-22 13:28:37', NULL, 0),
(897, 3, 129, 2, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-22 13:29:51', '2024-04-22 13:29:51', NULL, 0),
(898, 1, 187, 7, 5, 0, '2nd Floor, Office No 3, M No. 734, Opp High Class Society, Pashan Rd, near Suryadutta College, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5203873', '73.7720033', '2024-04-25 19:09:08', 1, '2024-04-22 13:39:08', '2024-04-22 13:39:08', NULL, 0),
(899, 1, 187, 7, 5, 0, 'GQC9+J5X, Bhunde Vasti, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.521734122334482', '73.76846831291914', '2024-04-25 19:28:12', 1, '2024-04-22 13:58:12', '2024-04-22 13:58:12', NULL, 0),
(900, 3, 187, 7, NULL, 0, 'GQ9C+HJ9, near shivsena office, Patil Nagar, Bavdhan, Pune, Maharashtra 411021, India', 'Pune', '18.51901915020445', '73.77176206558943', '', 1, '2024-04-22 13:59:42', '2024-04-22 13:59:42', NULL, 0),
(901, 4, 187, 7, 5, 0, 'D.S.K. Toyota Showroom, Bhunde Vasti, Bavdhan, Sunarwadi, Pune, Maharashtra 411021, India', 'Sunarwadi', '18.522406818368655', '73.76890115439892', '2024-04-25 19:31:13', 1, '2024-04-22 14:01:13', '2024-04-22 14:01:13', NULL, 0),
(902, 1, 187, 7, 5, 0, 'GQF9+9H7, Bhunde Vasti, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.523322074933358', '73.76906577497721', '2024-04-25 19:35:32', 1, '2024-04-22 14:05:32', '2024-04-22 14:05:32', NULL, 0),
(904, 3, 187, 3, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-23 04:47:29', '2024-04-23 04:47:29', NULL, 0),
(905, 3, 187, 3, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-23 04:50:56', '2024-04-23 04:50:56', NULL, 0),
(907, 3, 126, 3, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-23 05:05:15', '2024-04-23 05:05:15', NULL, 0),
(908, 3, 145, 3, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-23 06:36:39', '2024-04-23 06:36:39', NULL, 0),
(909, 3, 145, 1, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-23 06:38:08', '2024-04-23 06:38:08', NULL, 0),
(910, 3, 145, 3, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-23 06:39:05', '2024-04-23 06:39:05', NULL, 0),
(911, 3, 145, 3, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-23 06:58:55', '2024-04-23 06:58:55', NULL, 0),
(912, 1, 145, 3, 1, 0, NULL, '', NULL, NULL, '2024-04-24 12:30:42', 1, '2024-04-23 07:00:42', '2024-04-23 07:00:42', NULL, 0),
(913, 4, 145, 4, 1, 0, NULL, '', NULL, NULL, '2024-04-24 12:51:57', 1, '2024-04-23 07:21:57', '2024-04-23 07:21:57', NULL, 0),
(914, 3, 145, 3, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-23 07:25:44', '2024-04-23 07:25:44', NULL, 0),
(915, 4, 145, 3, 10, 0, NULL, '', NULL, NULL, '2024-05-08 13:03:21', 1, '2024-04-23 07:33:21', '2024-04-23 07:33:21', NULL, 0),
(916, 3, 145, 3, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-23 07:38:53', '2024-04-23 07:38:53', NULL, 0),
(917, 3, 145, 3, NULL, 0, NULL, '', NULL, NULL, '', 1, '2024-04-23 07:42:14', '2024-04-23 07:42:14', NULL, 0),
(918, 3, 130, 7, NULL, 0, 'U19/2, Galli No. 15, U Block, DLF Phase 3, Sector 24, Gurugram, Haryana 122022, India', 'Gurugram', '28.495285019657015', '77.09497980773449', '', 1, '2024-04-23 12:34:55', '2024-04-23 12:34:55', NULL, 0),
(919, 3, 130, 7, NULL, 0, '16, Street No. 1, U Block, DLF Phase 2, Sector 24, Gurugram, Haryana 122022, India', 'Gurugram', '28.490788418966577', '77.09285113960505', '', 1, '2024-04-23 12:42:56', '2024-04-23 12:42:56', NULL, 0),
(920, 3, 130, 7, NULL, 0, 'A4/57, Galli Number 55, Nathupur, Sector 24, Gurugram, Haryana 122022, India', 'Gurugram', '28.490763961178278', '77.0966712757945', '', 1, '2024-04-23 12:44:41', '2024-04-23 12:44:41', NULL, 0),
(921, 3, 126, 7, NULL, 0, '2nd Floor, Office No 3, M No. 734, Opp High Class Society, Pashan Rd, near Suryadutta College, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5203995', '73.7720002', '', 1, '2024-04-24 05:01:58', '2024-04-24 05:01:58', NULL, 0),
(922, 4, 146, 7, 5, 0, 'Office No 2. MNO 734, 2nd Floor, opposite of High Class Society, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204184', '73.7720001', '2024-04-27 11:04:47', 1, '2024-04-24 05:34:47', '2024-04-24 05:34:47', NULL, 0),
(923, 3, 146, 7, NULL, 0, 'Office No 2. MNO 734, 2nd Floor, opposite of High Class Society, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.52042', '73.7720089', '', 1, '2024-04-24 05:37:48', '2024-04-24 05:37:48', NULL, 0),
(924, 1, 146, 7, 5, 0, 'Office No 2. MNO 734, 2nd Floor, opposite of High Class Society, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204201', '73.7719976', '2024-04-27 11:20:13', 1, '2024-04-24 05:50:13', '2024-04-24 05:50:13', NULL, 0),
(925, 2, 146, 7, 5, 0, '1st Floor, Office No 1, M No. 734, Pashan Rd, opp. High Class Society, near Suryadatta College of Management, Patil Nagar, Bavdhan, Pune, Sunarwadi, Maharashtra 411021, India', 'Pune', '18.5204157', '73.7720125', '2024-04-27 11:22:36', 1, '2024-04-24 05:52:36', '2024-04-24 05:52:36', NULL, 0),
(926, 1, 146, 4, 5, 0, NULL, '', NULL, NULL, '2024-04-27 11:31:12', 1, '2024-04-24 06:01:12', '2024-04-24 06:01:12', NULL, 0),
(927, 3, 129, 7, NULL, 0, '9B, phase 3, DLF Cyber City, DLF Phase 2, Sector 29, Gurugram, Haryana 122002, India', 'Gurugram', '28.4951973', '77.0933456', '', 1, '2024-04-24 06:29:24', '2024-04-24 06:29:24', NULL, 0),
(928, 4, 146, 7, 5, 0, 'GQFC+H4 Pune, Maharashtra, India', 'Pune', '18.523932773098107', '73.77035591751337', '2024-04-27 13:19:40', 1, '2024-04-24 07:49:40', '2024-04-24 07:49:40', NULL, 0),
(929, 3, 182, 7, NULL, 0, 'U10/17, Galli No 19, U Block, DLF Phase 3, Sector 24, Gurugram, Haryana 122022, India', 'Gurugram', '28.4937641', '77.0941627', '', 1, '2024-04-24 14:56:45', '2024-04-24 14:56:45', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `post_masters`
--

CREATE TABLE `post_masters` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post_masters`
--

INSERT INTO `post_masters` (`id`, `name`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Survey', 1, '2023-12-14 01:59:17', '2023-12-14 01:59:17', NULL),
(2, 'Poll', 1, '2023-12-14 01:59:17', '2023-12-14 01:59:17', NULL),
(3, 'Review', 1, '2023-12-14 01:59:17', '2023-12-14 01:59:17', NULL),
(4, 'Seek', 1, '2023-12-14 01:59:17', '2023-12-14 01:59:17', NULL),
(5, 'Repost', 1, '2023-12-21 12:19:10', '2023-12-21 12:19:10', NULL),
(6, 'Appose', 1, '2023-12-21 12:34:15', '2023-12-21 12:19:10', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `post_tags`
--

CREATE TABLE `post_tags` (
  `id` bigint UNSIGNED NOT NULL,
  `post_id` bigint UNSIGNED NOT NULL,
  `tags_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post_tags`
--

INSERT INTO `post_tags` (`id`, `post_id`, `tags_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(827, 537, 20, 1, '2024-03-05 17:25:53', '2024-03-05 17:25:53', NULL),
(828, 537, 24, 1, '2024-03-05 17:25:53', '2024-03-05 17:25:53', NULL),
(829, 538, 20, 1, '2024-03-05 17:27:29', '2024-03-05 17:27:29', NULL),
(830, 538, 24, 1, '2024-03-05 17:27:29', '2024-03-05 17:27:29', NULL),
(831, 538, 26, 1, '2024-03-05 17:27:29', '2024-03-05 17:27:29', NULL),
(832, 539, 149, 1, '2024-03-05 17:29:08', '2024-03-05 17:29:08', NULL),
(833, 539, 152, 1, '2024-03-05 17:29:08', '2024-03-05 17:29:08', NULL),
(834, 540, 32, 1, '2024-03-05 17:32:11', '2024-03-05 17:32:11', NULL),
(835, 541, 20, 1, '2024-03-05 17:34:45', '2024-03-05 17:34:45', NULL),
(836, 541, 24, 1, '2024-03-05 17:34:45', '2024-03-05 17:34:45', NULL),
(837, 542, 47, 1, '2024-03-05 17:35:50', '2024-03-05 17:35:50', NULL),
(838, 543, 44, 1, '2024-03-05 17:42:27', '2024-03-05 17:42:27', NULL),
(839, 544, 54, 1, '2024-03-05 17:44:16', '2024-03-05 17:44:16', NULL),
(840, 545, 20, 1, '2024-03-06 05:26:02', '2024-03-06 05:26:02', NULL),
(841, 545, 24, 1, '2024-03-06 05:26:02', '2024-03-06 05:26:02', NULL),
(842, 546, 13, 1, '2024-03-06 05:55:36', '2024-03-06 05:55:36', NULL),
(843, 547, 155, 1, '2024-03-06 06:02:21', '2024-03-06 06:02:21', NULL),
(844, 548, 105, 1, '2024-03-06 06:04:32', '2024-03-06 06:04:32', NULL),
(845, 549, 24, 1, '2024-03-06 06:06:01', '2024-03-06 06:06:01', NULL),
(846, 550, 6, 1, '2024-03-06 07:30:18', '2024-03-06 07:30:18', NULL),
(847, 551, 20, 1, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL),
(848, 551, 24, 1, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL),
(849, 551, 26, 1, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL),
(850, 551, 44, 1, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL),
(851, 551, 47, 1, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL),
(852, 551, 153, 1, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL),
(853, 551, 154, 1, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL),
(854, 551, 155, 1, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL),
(855, 551, 156, 1, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL),
(856, 551, 157, 1, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL),
(857, 552, 104, 1, '2024-03-06 09:20:24', '2024-03-06 09:20:24', NULL),
(858, 553, 95, 1, '2024-03-06 09:24:51', '2024-03-06 09:24:51', NULL),
(859, 554, 73, 1, '2024-03-06 09:26:10', '2024-03-06 09:26:10', NULL),
(860, 555, 20, 1, '2024-03-06 09:35:19', '2024-03-06 09:35:19', NULL),
(861, 555, 24, 1, '2024-03-06 09:35:19', '2024-03-06 09:35:19', NULL),
(862, 556, 15, 1, '2024-03-06 09:37:15', '2024-03-06 09:37:15', NULL),
(863, 557, 29, 1, '2024-03-06 09:40:31', '2024-03-06 09:40:31', NULL),
(864, 558, 3, 1, '2024-03-06 09:43:39', '2024-03-06 09:43:39', NULL),
(865, 559, 3, 1, '2024-03-06 09:44:59', '2024-03-06 09:44:59', NULL),
(866, 560, 60, 1, '2024-03-06 09:47:44', '2024-03-06 09:47:44', NULL),
(867, 561, 57, 1, '2024-03-06 09:52:29', '2024-03-06 09:52:29', NULL),
(868, 562, 39, 1, '2024-03-06 09:58:51', '2024-03-06 09:58:51', NULL),
(869, 562, 48, 1, '2024-03-06 09:58:51', '2024-03-06 09:58:51', NULL),
(870, 563, 24, 1, '2024-03-06 10:01:21', '2024-03-06 10:01:21', NULL),
(871, 563, 36, 1, '2024-03-06 10:01:21', '2024-03-06 10:01:21', NULL),
(872, 563, 39, 1, '2024-03-06 10:01:21', '2024-03-06 10:01:21', NULL),
(873, 564, 20, 1, '2024-03-06 11:35:00', '2024-03-06 11:35:00', NULL),
(874, 564, 24, 1, '2024-03-06 11:35:00', '2024-03-06 11:35:00', NULL),
(875, 565, 24, 1, '2024-03-06 11:38:45', '2024-03-06 11:38:45', NULL),
(876, 566, 59, 1, '2024-03-06 13:44:12', '2024-03-06 13:44:12', NULL),
(877, 566, 62, 1, '2024-03-06 13:44:12', '2024-03-06 13:44:12', NULL),
(878, 567, 20, 1, '2024-03-06 13:49:52', '2024-03-06 13:49:52', NULL),
(879, 567, 24, 1, '2024-03-06 13:49:52', '2024-03-06 13:49:52', NULL),
(880, 568, 93, 1, '2024-03-06 13:55:21', '2024-03-06 13:55:21', NULL),
(881, 568, 95, 1, '2024-03-06 13:55:21', '2024-03-06 13:55:21', NULL),
(882, 569, 93, 1, '2024-03-06 14:07:29', '2024-03-06 14:07:29', NULL),
(883, 569, 95, 1, '2024-03-06 14:07:29', '2024-03-06 14:07:29', NULL),
(884, 570, 62, 1, '2024-03-06 14:11:38', '2024-03-06 14:11:38', NULL),
(885, 570, 64, 1, '2024-03-06 14:11:38', '2024-03-06 14:11:38', NULL),
(886, 571, 20, 1, '2024-03-06 14:15:52', '2024-03-06 14:15:52', NULL),
(887, 571, 24, 1, '2024-03-06 14:15:52', '2024-03-06 14:15:52', NULL),
(967, 609, 20, 1, '2024-03-07 13:44:41', '2024-03-07 13:44:41', NULL),
(968, 609, 30, 1, '2024-03-07 13:44:41', '2024-03-07 13:44:41', NULL),
(969, 610, 44, 1, '2024-03-07 13:45:51', '2024-03-07 13:45:51', NULL),
(970, 610, 47, 1, '2024-03-07 13:45:51', '2024-03-07 13:45:51', NULL),
(971, 611, 44, 1, '2024-03-07 13:48:12', '2024-03-07 13:48:12', NULL),
(972, 611, 47, 1, '2024-03-07 13:48:12', '2024-03-07 13:48:12', NULL),
(973, 612, 24, 1, '2024-03-08 03:17:59', '2024-03-08 03:17:59', NULL),
(974, 612, 15, 1, '2024-03-08 03:17:59', '2024-03-08 03:17:59', NULL),
(975, 613, 24, 1, '2024-03-08 03:18:00', '2024-03-08 03:18:00', NULL),
(976, 613, 15, 1, '2024-03-08 03:18:00', '2024-03-08 03:18:00', NULL),
(977, 614, 20, 1, '2024-03-08 03:19:38', '2024-03-08 03:19:38', NULL),
(978, 614, 24, 1, '2024-03-08 03:19:38', '2024-03-08 03:19:38', NULL),
(979, 614, 42, 1, '2024-03-08 03:19:38', '2024-03-08 03:19:38', NULL),
(980, 615, 24, 1, '2024-03-08 04:26:39', '2024-03-08 04:26:39', NULL),
(981, 615, 26, 1, '2024-03-08 04:26:39', '2024-03-08 04:26:39', NULL),
(982, 616, 20, 1, '2024-03-08 04:34:40', '2024-03-08 04:34:40', NULL),
(995, 620, 20, 1, '2024-03-08 04:45:22', '2024-03-08 04:45:22', NULL),
(996, 620, 24, 1, '2024-03-08 04:45:22', '2024-03-08 04:45:22', NULL),
(997, 620, 34, 1, '2024-03-08 04:45:22', '2024-03-08 04:45:22', NULL),
(1011, 636, 30, 1, '2024-03-08 05:48:01', '2024-03-08 05:48:01', NULL),
(1012, 636, 34, 1, '2024-03-08 05:48:01', '2024-03-08 05:48:01', NULL),
(1013, 636, 39, 1, '2024-03-08 05:48:01', '2024-03-08 05:48:01', NULL),
(1014, 636, 51, 1, '2024-03-08 05:48:01', '2024-03-08 05:48:01', NULL),
(1015, 636, 58, 1, '2024-03-08 05:48:01', '2024-03-08 05:48:01', NULL),
(1016, 637, 24, 1, '2024-03-08 05:50:52', '2024-03-08 05:50:52', NULL),
(1017, 638, 20, 1, '2024-03-08 07:34:37', '2024-03-08 07:34:37', NULL),
(1018, 638, 63, 1, '2024-03-08 07:34:37', '2024-03-08 07:34:37', NULL),
(1019, 638, 76, 1, '2024-03-08 07:34:37', '2024-03-08 07:34:37', NULL),
(1020, 639, 101, 1, '2024-03-08 07:48:54', '2024-03-08 07:48:54', NULL),
(1021, 639, 113, 1, '2024-03-08 07:48:54', '2024-03-08 07:48:54', NULL),
(1022, 640, 93, 1, '2024-03-08 08:04:09', '2024-03-08 08:04:09', NULL),
(1023, 640, 95, 1, '2024-03-08 08:04:09', '2024-03-08 08:04:09', NULL),
(1024, 641, 191, 1, '2024-03-08 08:21:58', '2024-03-08 08:21:58', NULL),
(1025, 642, 2, 1, '2024-03-08 10:58:23', '2024-03-08 10:58:23', NULL),
(1026, 642, 9, 1, '2024-03-08 10:58:23', '2024-03-08 10:58:23', NULL),
(1056, 647, 20, 1, '2024-03-09 05:20:44', '2024-03-09 05:20:44', NULL),
(1057, 647, 24, 1, '2024-03-09 05:20:44', '2024-03-09 05:20:44', NULL),
(1058, 647, 26, 1, '2024-03-09 05:20:44', '2024-03-09 05:20:44', NULL),
(1059, 647, 30, 1, '2024-03-09 05:20:44', '2024-03-09 05:20:44', NULL),
(1060, 647, 34, 1, '2024-03-09 05:20:44', '2024-03-09 05:20:44', NULL),
(1061, 647, 36, 1, '2024-03-09 05:20:44', '2024-03-09 05:20:44', NULL),
(1062, 647, 39, 1, '2024-03-09 05:20:44', '2024-03-09 05:20:44', NULL),
(1063, 647, 42, 1, '2024-03-09 05:20:44', '2024-03-09 05:20:44', NULL),
(1064, 647, 48, 1, '2024-03-09 05:20:44', '2024-03-09 05:20:44', NULL),
(1073, 649, 44, 1, '2024-03-09 06:12:08', '2024-03-09 06:12:08', NULL),
(1074, 649, 47, 1, '2024-03-09 06:12:08', '2024-03-09 06:12:08', NULL),
(1075, 649, 52, 1, '2024-03-09 06:12:08', '2024-03-09 06:12:08', NULL),
(1076, 649, 54, 1, '2024-03-09 06:12:08', '2024-03-09 06:12:08', NULL),
(1077, 650, 47, 1, '2024-03-09 06:13:25', '2024-03-09 06:13:25', NULL),
(1078, 650, 52, 1, '2024-03-09 06:13:25', '2024-03-09 06:13:25', NULL),
(1079, 650, 57, 1, '2024-03-09 06:13:25', '2024-03-09 06:13:25', NULL),
(1080, 651, 2, 1, '2024-03-09 06:25:18', '2024-03-09 06:25:18', NULL),
(1081, 651, 3, 1, '2024-03-09 06:25:18', '2024-03-09 06:25:18', NULL),
(1082, 652, 52, 1, '2024-03-09 06:30:31', '2024-03-09 06:30:31', NULL),
(1083, 652, 57, 1, '2024-03-09 06:30:31', '2024-03-09 06:30:31', NULL),
(1084, 652, 62, 1, '2024-03-09 06:30:31', '2024-03-09 06:30:31', NULL),
(1085, 653, 30, 1, '2024-03-09 07:17:51', '2024-03-09 07:17:51', NULL),
(1086, 653, 39, 1, '2024-03-09 07:17:51', '2024-03-09 07:17:51', NULL),
(1087, 654, 24, 1, '2024-03-09 07:18:31', '2024-03-09 07:18:31', NULL),
(1088, 654, 26, 1, '2024-03-09 07:18:31', '2024-03-09 07:18:31', NULL),
(1089, 655, 20, 1, '2024-03-09 07:26:54', '2024-03-09 07:26:54', NULL),
(1090, 655, 24, 1, '2024-03-09 07:26:54', '2024-03-09 07:26:54', NULL),
(1091, 656, 20, 1, '2024-03-09 12:11:12', '2024-03-09 12:11:12', NULL),
(1092, 656, 26, 1, '2024-03-09 12:11:12', '2024-03-09 12:11:12', NULL),
(1093, 656, 60, 1, '2024-03-09 12:11:12', '2024-03-09 12:11:12', NULL),
(1094, 657, 97, 1, '2024-03-09 12:23:25', '2024-03-09 12:23:25', NULL),
(1095, 657, 104, 1, '2024-03-09 12:23:25', '2024-03-09 12:23:25', NULL),
(1096, 657, 106, 1, '2024-03-09 12:23:25', '2024-03-09 12:23:25', NULL),
(1097, 658, 80, 1, '2024-03-09 12:24:41', '2024-03-09 12:24:41', NULL),
(1098, 660, 24, 1, '2024-03-09 13:16:03', '2024-03-09 13:16:03', NULL),
(1099, 660, 39, 1, '2024-03-09 13:16:03', '2024-03-09 13:16:03', NULL),
(1100, 660, 42, 1, '2024-03-09 13:16:03', '2024-03-09 13:16:03', NULL),
(1101, 660, 51, 1, '2024-03-09 13:16:03', '2024-03-09 13:16:03', NULL),
(1102, 662, 24, 1, '2024-03-09 13:30:01', '2024-03-09 13:30:01', NULL),
(1103, 662, 39, 1, '2024-03-09 13:30:01', '2024-03-09 13:30:01', NULL),
(1104, 662, 55, 1, '2024-03-09 13:30:01', '2024-03-09 13:30:01', NULL),
(1105, 663, 52, 1, '2024-03-10 14:09:18', '2024-03-10 14:09:18', NULL),
(1106, 663, 66, 1, '2024-03-10 14:09:18', '2024-03-10 14:09:18', NULL),
(1107, 667, 4, 1, '2024-03-11 13:00:50', '2024-03-11 13:00:50', NULL),
(1108, 667, 7, 1, '2024-03-11 13:00:50', '2024-03-11 13:00:50', NULL),
(1109, 667, 9, 1, '2024-03-11 13:00:50', '2024-03-11 13:00:50', NULL),
(1110, 669, 55, 1, '2024-03-11 13:10:00', '2024-03-11 13:10:00', NULL),
(1111, 670, 44, 1, '2024-03-11 13:13:20', '2024-03-11 13:13:20', NULL),
(1112, 670, 47, 1, '2024-03-11 13:13:20', '2024-03-11 13:13:20', NULL),
(1113, 671, 15, 1, '2024-03-11 13:21:48', '2024-03-11 13:21:48', NULL),
(1114, 671, 18, 1, '2024-03-11 13:21:48', '2024-03-11 13:21:48', NULL),
(1115, 672, 60, 1, '2024-03-11 13:23:26', '2024-03-11 13:23:26', NULL),
(1116, 673, 20, 1, '2024-03-11 13:27:58', '2024-03-11 13:27:58', NULL),
(1117, 673, 24, 1, '2024-03-11 13:27:58', '2024-03-11 13:27:58', NULL),
(1118, 673, 26, 1, '2024-03-11 13:27:58', '2024-03-11 13:27:58', NULL),
(1119, 674, 2, 1, '2024-03-11 13:44:34', '2024-03-11 13:44:34', NULL),
(1120, 674, 3, 1, '2024-03-11 13:44:34', '2024-03-11 13:44:34', NULL),
(1121, 675, 20, 1, '2024-03-11 13:46:39', '2024-03-11 13:46:39', NULL),
(1122, 675, 24, 1, '2024-03-11 13:46:39', '2024-03-11 13:46:39', NULL),
(1123, 675, 26, 1, '2024-03-11 13:46:39', '2024-03-11 13:46:39', NULL),
(1130, 677, 93, 1, '2024-03-12 14:24:46', '2024-03-12 14:24:46', NULL),
(1131, 677, 95, 1, '2024-03-12 14:24:46', '2024-03-12 14:24:46', NULL),
(1132, 678, 36, 1, '2024-03-12 14:26:25', '2024-03-12 14:26:25', NULL),
(1133, 678, 60, 1, '2024-03-12 14:26:25', '2024-03-12 14:26:25', NULL),
(1134, 679, 20, 1, '2024-03-12 14:28:33', '2024-03-12 14:28:33', NULL),
(1135, 679, 24, 1, '2024-03-12 14:28:33', '2024-03-12 14:28:33', NULL),
(1136, 680, 24, 1, '2024-03-13 04:26:41', '2024-03-13 04:26:41', NULL),
(1137, 681, 26, 1, '2024-03-13 04:29:04', '2024-03-13 04:29:04', NULL),
(1138, 683, 48, 1, '2024-03-13 05:46:16', '2024-03-13 05:46:16', NULL),
(1139, 683, 61, 1, '2024-03-13 05:46:16', '2024-03-13 05:46:16', NULL),
(1140, 684, 6, 1, '2024-03-13 05:47:24', '2024-03-13 05:47:24', NULL),
(1141, 684, 8, 1, '2024-03-13 05:47:24', '2024-03-13 05:47:24', NULL),
(1142, 685, 20, 1, '2024-03-13 05:48:28', '2024-03-13 05:48:28', NULL),
(1143, 685, 24, 1, '2024-03-13 05:48:28', '2024-03-13 05:48:28', NULL),
(1144, 685, 26, 1, '2024-03-13 05:48:28', '2024-03-13 05:48:28', NULL),
(1145, 685, 61, 1, '2024-03-13 05:48:28', '2024-03-13 05:48:28', NULL),
(1146, 686, 108, 1, '2024-03-13 05:49:34', '2024-03-13 05:49:34', NULL),
(1147, 686, 110, 1, '2024-03-13 05:49:34', '2024-03-13 05:49:34', NULL),
(1148, 687, 20, 1, '2024-03-13 05:50:41', '2024-03-13 05:50:41', NULL),
(1149, 688, 13, 1, '2024-03-13 06:16:16', '2024-03-13 06:16:16', NULL),
(1150, 689, 46, 1, '2024-03-13 06:17:17', '2024-03-13 06:17:17', NULL),
(1151, 690, 20, 1, '2024-03-13 06:18:09', '2024-03-13 06:18:09', NULL),
(1152, 690, 26, 1, '2024-03-13 06:18:09', '2024-03-13 06:18:09', NULL),
(1153, 690, 34, 1, '2024-03-13 06:18:09', '2024-03-13 06:18:09', NULL),
(1154, 690, 44, 1, '2024-03-13 06:18:09', '2024-03-13 06:18:09', NULL),
(1155, 690, 47, 1, '2024-03-13 06:18:09', '2024-03-13 06:18:09', NULL),
(1156, 690, 1, 1, '2024-03-13 06:18:09', '2024-03-13 06:18:09', NULL),
(1157, 691, 155, 1, '2024-03-13 06:19:08', '2024-03-13 06:19:08', NULL),
(1158, 692, 20, 1, '2024-03-13 06:20:29', '2024-03-13 06:20:29', NULL),
(1159, 692, 24, 1, '2024-03-13 06:20:29', '2024-03-13 06:20:29', NULL),
(1160, 692, 34, 1, '2024-03-13 06:20:29', '2024-03-13 06:20:29', NULL),
(1161, 693, 14, 1, '2024-03-13 07:02:17', '2024-03-13 07:02:17', NULL),
(1162, 694, 68, 1, '2024-03-13 07:17:17', '2024-03-13 07:17:17', NULL),
(1163, 696, 151, 1, '2024-03-13 07:38:43', '2024-03-13 07:38:43', NULL),
(1164, 697, 72, 1, '2024-03-13 07:40:49', '2024-03-13 07:40:49', NULL),
(1165, 698, 66, 1, '2024-03-13 07:44:56', '2024-03-13 07:44:56', NULL),
(1166, 699, 75, 1, '2024-03-13 07:48:48', '2024-03-13 07:48:48', NULL),
(1167, 700, 20, 1, '2024-03-13 07:56:48', '2024-03-13 07:56:48', NULL),
(1168, 700, 24, 1, '2024-03-13 07:56:48', '2024-03-13 07:56:48', NULL),
(1169, 701, 34, 1, '2024-03-13 11:27:09', '2024-03-13 11:27:09', NULL),
(1170, 702, 61, 1, '2024-03-13 11:49:38', '2024-03-13 11:49:38', NULL),
(1171, 703, 20, 1, '2024-03-13 11:59:06', '2024-03-13 11:59:06', NULL),
(1172, 703, 24, 1, '2024-03-13 11:59:06', '2024-03-13 11:59:06', NULL),
(1173, 703, 26, 1, '2024-03-13 11:59:06', '2024-03-13 11:59:06', NULL),
(1174, 704, 107, 1, '2024-03-13 12:17:48', '2024-03-13 12:17:48', NULL),
(1175, 705, 115, 1, '2024-03-13 12:26:40', '2024-03-13 12:26:40', NULL),
(1176, 706, 5, 1, '2024-03-13 12:44:31', '2024-03-13 12:44:31', NULL),
(1177, 706, 9, 1, '2024-03-13 12:44:31', '2024-03-13 12:44:31', NULL),
(1178, 707, 191, 1, '2024-03-13 12:51:42', '2024-03-13 12:51:42', NULL),
(1179, 709, 20, 1, '2024-03-13 14:11:18', '2024-03-13 14:11:18', NULL),
(1180, 709, 24, 1, '2024-03-13 14:11:18', '2024-03-13 14:11:18', NULL),
(1181, 709, 26, 1, '2024-03-13 14:11:18', '2024-03-13 14:11:18', NULL),
(1182, 709, 30, 1, '2024-03-13 14:11:18', '2024-03-13 14:11:18', NULL),
(1183, 709, 34, 1, '2024-03-13 14:11:18', '2024-03-13 14:11:18', NULL),
(1184, 709, 36, 1, '2024-03-13 14:11:18', '2024-03-13 14:11:18', NULL),
(1185, 710, 20, 1, '2024-03-13 14:47:25', '2024-03-13 14:47:25', NULL),
(1186, 710, 24, 1, '2024-03-13 14:47:25', '2024-03-13 14:47:25', NULL),
(1187, 711, 8, 1, '2024-03-13 16:30:56', '2024-03-13 16:30:56', NULL),
(1188, 711, 18, 1, '2024-03-13 16:30:56', '2024-03-13 16:30:56', NULL),
(1189, 712, 30, 1, '2024-03-14 05:02:22', '2024-03-14 05:02:22', NULL),
(1190, 712, 48, 1, '2024-03-14 05:02:22', '2024-03-14 05:02:22', NULL),
(1191, 712, 51, 1, '2024-03-14 05:02:22', '2024-03-14 05:02:22', NULL),
(1192, 713, 11, 1, '2024-03-14 07:17:40', '2024-03-14 07:17:40', NULL),
(1193, 713, 17, 1, '2024-03-14 07:17:40', '2024-03-14 07:17:40', NULL),
(1194, 714, 61, 1, '2024-03-14 09:28:08', '2024-03-14 09:28:08', NULL),
(1195, 715, 48, 1, '2024-03-14 09:31:42', '2024-03-14 09:31:42', NULL),
(1196, 716, 20, 1, '2024-03-14 09:32:44', '2024-03-14 09:32:44', NULL),
(1197, 716, 24, 1, '2024-03-14 09:32:44', '2024-03-14 09:32:44', NULL),
(1198, 716, 26, 1, '2024-03-14 09:32:44', '2024-03-14 09:32:44', NULL),
(1199, 717, 69, 1, '2024-03-14 09:33:54', '2024-03-14 09:33:54', NULL),
(1200, 718, 73, 1, '2024-03-14 09:46:49', '2024-03-14 09:46:49', NULL),
(1201, 719, 54, 1, '2024-03-14 16:42:29', '2024-03-14 16:42:29', NULL),
(1202, 719, 66, 1, '2024-03-14 16:42:29', '2024-03-14 16:42:29', NULL),
(1203, 720, 60, 1, '2024-03-15 04:39:03', '2024-03-15 04:39:03', NULL),
(1204, 720, 63, 1, '2024-03-15 04:39:03', '2024-03-15 04:39:03', NULL),
(1205, 721, 51, 1, '2024-03-15 04:41:38', '2024-03-15 04:41:38', NULL),
(1206, 721, 58, 1, '2024-03-15 04:41:38', '2024-03-15 04:41:38', NULL),
(1207, 721, 61, 1, '2024-03-15 04:41:38', '2024-03-15 04:41:38', NULL),
(1208, 722, 26, 1, '2024-03-15 04:44:21', '2024-03-15 04:44:21', NULL),
(1209, 722, 36, 1, '2024-03-15 04:44:21', '2024-03-15 04:44:21', NULL),
(1210, 722, 42, 1, '2024-03-15 04:44:21', '2024-03-15 04:44:21', NULL),
(1211, 722, 58, 1, '2024-03-15 04:44:21', '2024-03-15 04:44:21', NULL),
(1212, 722, 44, 1, '2024-03-15 04:44:21', '2024-03-15 04:44:21', NULL),
(1213, 722, 47, 1, '2024-03-15 04:44:21', '2024-03-15 04:44:21', NULL),
(1214, 722, 54, 1, '2024-03-15 04:44:21', '2024-03-15 04:44:21', NULL),
(1215, 723, 1, 1, '2024-03-15 04:46:44', '2024-03-15 04:46:44', NULL),
(1216, 723, 5, 1, '2024-03-15 04:46:44', '2024-03-15 04:46:44', NULL),
(1217, 724, 20, 1, '2024-03-15 05:11:19', '2024-03-15 05:11:19', NULL),
(1218, 724, 24, 1, '2024-03-15 05:11:19', '2024-03-15 05:11:19', NULL),
(1219, 724, 26, 1, '2024-03-15 05:11:19', '2024-03-15 05:11:19', NULL),
(1220, 725, 153, 1, '2024-03-15 05:25:16', '2024-03-15 05:25:16', NULL),
(1221, 726, 20, 1, '2024-03-15 05:31:25', '2024-03-15 05:31:25', NULL),
(1222, 726, 24, 1, '2024-03-15 05:31:25', '2024-03-15 05:31:25', NULL),
(1223, 726, 26, 1, '2024-03-15 05:31:25', '2024-03-15 05:31:25', NULL),
(1224, 726, 30, 1, '2024-03-15 05:31:25', '2024-03-15 05:31:25', NULL),
(1225, 726, 34, 1, '2024-03-15 05:31:25', '2024-03-15 05:31:25', NULL),
(1226, 726, 36, 1, '2024-03-15 05:31:25', '2024-03-15 05:31:25', NULL),
(1227, 727, 20, 1, '2024-03-15 05:39:40', '2024-03-15 05:39:40', NULL),
(1228, 727, 24, 1, '2024-03-15 05:39:40', '2024-03-15 05:39:40', NULL),
(1229, 727, 26, 1, '2024-03-15 05:39:40', '2024-03-15 05:39:40', NULL),
(1230, 728, 97, 1, '2024-03-15 05:40:48', '2024-03-15 05:40:48', NULL),
(1231, 729, 20, 1, '2024-03-15 05:42:13', '2024-03-15 05:42:13', NULL),
(1232, 729, 24, 1, '2024-03-15 05:42:13', '2024-03-15 05:42:13', NULL),
(1233, 729, 26, 1, '2024-03-15 05:42:13', '2024-03-15 05:42:13', NULL),
(1234, 730, 20, 1, '2024-03-15 05:44:12', '2024-03-15 05:44:12', NULL),
(1235, 730, 24, 1, '2024-03-15 05:44:12', '2024-03-15 05:44:12', NULL),
(1236, 730, 26, 1, '2024-03-15 05:44:12', '2024-03-15 05:44:12', NULL),
(1237, 731, 12, 1, '2024-03-15 05:46:02', '2024-03-15 05:46:02', NULL),
(1238, 732, 20, 1, '2024-03-15 05:47:55', '2024-03-15 05:47:55', NULL),
(1239, 732, 24, 1, '2024-03-15 05:47:55', '2024-03-15 05:47:55', NULL),
(1240, 732, 26, 1, '2024-03-15 05:47:55', '2024-03-15 05:47:55', NULL),
(1241, 733, 153, 1, '2024-03-15 05:49:13', '2024-03-15 05:49:13', NULL),
(1242, 734, 120, 1, '2024-03-15 06:30:04', '2024-03-15 06:30:04', NULL),
(1243, 735, 20, 1, '2024-03-15 06:31:33', '2024-03-15 06:31:33', NULL),
(1244, 735, 24, 1, '2024-03-15 06:31:33', '2024-03-15 06:31:33', NULL),
(1245, 735, 34, 1, '2024-03-15 06:31:33', '2024-03-15 06:31:33', NULL),
(1246, 736, 24, 1, '2024-03-15 06:33:14', '2024-03-15 06:33:14', NULL),
(1247, 737, 51, 1, '2024-03-15 12:37:23', '2024-03-15 12:37:23', NULL),
(1248, 737, 60, 1, '2024-03-15 12:37:23', '2024-03-15 12:37:23', NULL),
(1249, 737, 63, 1, '2024-03-15 12:37:23', '2024-03-15 12:37:23', NULL),
(1250, 738, 11, 1, '2024-03-15 12:39:55', '2024-03-15 12:39:55', NULL),
(1251, 739, 51, 1, '2024-03-15 12:46:38', '2024-03-15 12:46:38', NULL),
(1252, 739, 58, 1, '2024-03-15 12:46:38', '2024-03-15 12:46:38', NULL),
(1253, 740, 54, 1, '2024-03-15 12:57:53', '2024-03-15 12:57:53', NULL),
(1254, 740, 57, 1, '2024-03-15 12:57:53', '2024-03-15 12:57:53', NULL),
(1255, 740, 62, 1, '2024-03-15 12:57:53', '2024-03-15 12:57:53', NULL),
(1256, 741, 52, 1, '2024-03-15 13:02:43', '2024-03-15 13:02:43', NULL),
(1257, 741, 59, 1, '2024-03-15 13:02:43', '2024-03-15 13:02:43', NULL),
(1258, 742, 11, 1, '2024-03-15 13:05:30', '2024-03-15 13:05:30', NULL),
(1259, 743, 20, 1, '2024-03-15 13:08:43', '2024-03-15 13:08:43', NULL),
(1260, 743, 24, 1, '2024-03-15 13:08:43', '2024-03-15 13:08:43', NULL),
(1261, 743, 26, 1, '2024-03-15 13:08:43', '2024-03-15 13:08:43', NULL),
(1262, 744, 20, 1, '2024-03-15 13:11:02', '2024-03-15 13:11:02', NULL),
(1263, 744, 24, 1, '2024-03-15 13:11:02', '2024-03-15 13:11:02', NULL),
(1264, 745, 20, 1, '2024-03-15 13:12:57', '2024-03-15 13:12:57', NULL),
(1265, 745, 24, 1, '2024-03-15 13:12:57', '2024-03-15 13:12:57', NULL),
(1266, 745, 26, 1, '2024-03-15 13:12:57', '2024-03-15 13:12:57', NULL),
(1267, 746, 20, 1, '2024-03-15 13:14:37', '2024-03-15 13:14:37', NULL),
(1268, 746, 24, 1, '2024-03-15 13:14:37', '2024-03-15 13:14:37', NULL),
(1269, 746, 26, 1, '2024-03-15 13:14:37', '2024-03-15 13:14:37', NULL),
(1270, 747, 19, 1, '2024-03-15 13:16:11', '2024-03-15 13:16:11', NULL),
(1271, 753, 60, 1, '2024-03-15 13:24:47', '2024-03-15 13:24:47', NULL),
(1272, 754, 154, 1, '2024-03-15 13:31:18', '2024-03-15 13:31:18', NULL),
(1273, 755, 20, 1, '2024-03-15 13:32:13', '2024-03-15 13:32:13', NULL),
(1274, 755, 24, 1, '2024-03-15 13:32:13', '2024-03-15 13:32:13', NULL),
(1275, 755, 26, 1, '2024-03-15 13:32:13', '2024-03-15 13:32:13', NULL),
(1276, 755, 30, 1, '2024-03-15 13:32:13', '2024-03-15 13:32:13', NULL),
(1277, 755, 34, 1, '2024-03-15 13:32:13', '2024-03-15 13:32:13', NULL),
(1278, 755, 36, 1, '2024-03-15 13:32:13', '2024-03-15 13:32:13', NULL),
(1279, 756, 20, 1, '2024-03-15 13:35:39', '2024-03-15 13:35:39', NULL),
(1280, 756, 24, 1, '2024-03-15 13:35:39', '2024-03-15 13:35:39', NULL),
(1281, 756, 26, 1, '2024-03-15 13:35:39', '2024-03-15 13:35:39', NULL),
(1282, 757, 20, 1, '2024-03-15 13:37:05', '2024-03-15 13:37:05', NULL),
(1283, 757, 24, 1, '2024-03-15 13:37:05', '2024-03-15 13:37:05', NULL),
(1284, 757, 26, 1, '2024-03-15 13:37:05', '2024-03-15 13:37:05', NULL),
(1285, 757, 34, 1, '2024-03-15 13:37:05', '2024-03-15 13:37:05', NULL),
(1286, 758, 20, 1, '2024-03-18 05:36:41', '2024-03-18 05:36:41', NULL),
(1287, 758, 24, 1, '2024-03-18 05:36:41', '2024-03-18 05:36:41', NULL),
(1288, 758, 26, 1, '2024-03-18 05:36:41', '2024-03-18 05:36:41', NULL),
(1289, 759, 42, 1, '2024-03-18 06:21:16', '2024-03-18 06:21:16', NULL),
(1290, 759, 48, 1, '2024-03-18 06:21:16', '2024-03-18 06:21:16', NULL),
(1291, 759, 51, 1, '2024-03-18 06:21:16', '2024-03-18 06:21:16', NULL),
(1292, 760, 42, 1, '2024-03-18 11:07:23', '2024-03-18 11:07:23', NULL),
(1293, 760, 60, 1, '2024-03-18 11:07:23', '2024-03-18 11:07:23', NULL),
(1294, 760, 69, 1, '2024-03-18 11:07:23', '2024-03-18 11:07:23', NULL),
(1295, 761, 18, 1, '2024-03-18 11:23:03', '2024-03-18 11:23:03', NULL),
(1296, 761, 31, 1, '2024-03-18 11:23:03', '2024-03-18 11:23:03', NULL),
(1297, 762, 53, 1, '2024-03-19 05:39:17', '2024-03-19 05:39:17', NULL),
(1298, 763, 20, 1, '2024-03-19 05:43:18', '2024-03-19 05:43:18', NULL),
(1299, 763, 24, 1, '2024-03-19 05:43:18', '2024-03-19 05:43:18', NULL),
(1300, 763, 26, 1, '2024-03-19 05:43:18', '2024-03-19 05:43:18', NULL),
(1301, 764, 115, 1, '2024-03-19 05:49:28', '2024-03-19 05:49:28', NULL),
(1302, 765, 24, 1, '2024-03-19 05:55:28', '2024-03-19 05:55:28', NULL),
(1303, 765, 26, 1, '2024-03-19 05:55:28', '2024-03-19 05:55:28', NULL),
(1304, 766, 184, 1, '2024-03-19 05:56:26', '2024-03-19 05:56:26', NULL),
(1305, 767, 20, 1, '2024-03-19 05:59:23', '2024-03-19 05:59:23', NULL),
(1306, 767, 24, 1, '2024-03-19 05:59:23', '2024-03-19 05:59:23', NULL),
(1307, 767, 26, 1, '2024-03-19 05:59:23', '2024-03-19 05:59:23', NULL),
(1308, 768, 20, 1, '2024-03-19 06:01:22', '2024-03-19 06:01:22', NULL),
(1309, 768, 24, 1, '2024-03-19 06:01:22', '2024-03-19 06:01:22', NULL),
(1310, 768, 26, 1, '2024-03-19 06:01:22', '2024-03-19 06:01:22', NULL),
(1311, 768, 34, 1, '2024-03-19 06:01:22', '2024-03-19 06:01:22', NULL),
(1312, 768, 39, 1, '2024-03-19 06:01:22', '2024-03-19 06:01:22', NULL),
(1313, 769, 56, 1, '2024-03-19 06:04:28', '2024-03-19 06:04:28', NULL),
(1314, 770, 3, 1, '2024-03-19 06:18:58', '2024-03-19 06:18:58', NULL),
(1315, 771, 20, 1, '2024-03-19 06:20:28', '2024-03-19 06:20:28', NULL),
(1316, 771, 24, 1, '2024-03-19 06:20:28', '2024-03-19 06:20:28', NULL),
(1317, 771, 26, 1, '2024-03-19 06:20:28', '2024-03-19 06:20:28', NULL),
(1318, 771, 30, 1, '2024-03-19 06:20:28', '2024-03-19 06:20:28', NULL),
(1319, 771, 34, 1, '2024-03-19 06:20:28', '2024-03-19 06:20:28', NULL),
(1320, 772, 20, 1, '2024-03-19 06:23:03', '2024-03-19 06:23:03', NULL),
(1321, 772, 24, 1, '2024-03-19 06:23:03', '2024-03-19 06:23:03', NULL),
(1322, 772, 26, 1, '2024-03-19 06:23:03', '2024-03-19 06:23:03', NULL),
(1323, 773, 6, 1, '2024-03-19 06:26:36', '2024-03-19 06:26:36', NULL),
(1324, 773, 8, 1, '2024-03-19 06:26:36', '2024-03-19 06:26:36', NULL),
(1325, 773, 10, 1, '2024-03-19 06:26:36', '2024-03-19 06:26:36', NULL),
(1326, 774, 20, 1, '2024-03-19 06:46:45', '2024-03-19 06:46:45', NULL),
(1327, 774, 24, 1, '2024-03-19 06:46:45', '2024-03-19 06:46:45', NULL),
(1328, 774, 26, 1, '2024-03-19 06:46:45', '2024-03-19 06:46:45', NULL),
(1329, 774, 30, 1, '2024-03-19 06:46:45', '2024-03-19 06:46:45', NULL),
(1330, 774, 34, 1, '2024-03-19 06:46:45', '2024-03-19 06:46:45', NULL),
(1331, 774, 36, 1, '2024-03-19 06:46:45', '2024-03-19 06:46:45', NULL),
(1332, 775, 24, 1, '2024-03-19 06:58:49', '2024-03-19 06:58:49', NULL),
(1333, 775, 26, 1, '2024-03-19 06:58:49', '2024-03-19 06:58:49', NULL),
(1334, 775, 34, 1, '2024-03-19 06:58:49', '2024-03-19 06:58:49', NULL),
(1335, 775, 51, 1, '2024-03-19 06:58:49', '2024-03-19 06:58:49', NULL),
(1336, 776, 19, 1, '2024-03-19 07:02:24', '2024-03-19 07:02:24', NULL),
(1337, 777, 20, 1, '2024-03-19 07:04:35', '2024-03-19 07:04:35', NULL),
(1338, 777, 24, 1, '2024-03-19 07:04:35', '2024-03-19 07:04:35', NULL),
(1339, 778, 20, 1, '2024-03-19 07:47:38', '2024-03-19 07:47:38', NULL),
(1340, 778, 24, 1, '2024-03-19 07:47:38', '2024-03-19 07:47:38', NULL),
(1341, 779, 39, 1, '2024-03-19 07:50:22', '2024-03-19 07:50:22', NULL),
(1342, 779, 42, 1, '2024-03-19 07:50:22', '2024-03-19 07:50:22', NULL),
(1343, 780, 6, 1, '2024-03-19 07:51:06', '2024-03-19 07:51:06', NULL),
(1344, 780, 8, 1, '2024-03-19 07:51:06', '2024-03-19 07:51:06', NULL),
(1345, 781, 4, 1, '2024-03-19 09:05:22', '2024-03-19 09:05:22', NULL),
(1346, 782, 20, 1, '2024-03-19 09:06:35', '2024-03-19 09:06:35', NULL),
(1347, 782, 24, 1, '2024-03-19 09:06:35', '2024-03-19 09:06:35', NULL),
(1348, 782, 26, 1, '2024-03-19 09:06:35', '2024-03-19 09:06:35', NULL),
(1349, 783, 60, 1, '2024-03-19 11:08:29', '2024-03-19 11:08:29', NULL),
(1350, 784, 68, 1, '2024-03-19 11:11:41', '2024-03-19 11:11:41', NULL),
(1351, 785, 54, 1, '2024-03-19 12:05:26', '2024-03-19 12:05:26', NULL),
(1352, 786, 54, 1, '2024-03-19 12:07:19', '2024-03-19 12:07:19', NULL),
(1353, 786, 70, 1, '2024-03-19 12:07:19', '2024-03-19 12:07:19', NULL),
(1354, 787, 24, 1, '2024-03-19 12:18:53', '2024-03-19 12:18:53', NULL),
(1355, 787, 26, 1, '2024-03-19 12:18:53', '2024-03-19 12:18:53', NULL),
(1356, 788, 11, 1, '2024-03-19 12:48:51', '2024-03-19 12:48:51', NULL),
(1357, 789, 23, 1, '2024-03-19 12:51:55', '2024-03-19 12:51:55', NULL),
(1358, 790, 51, 1, '2024-03-19 12:53:46', '2024-03-19 12:53:46', NULL),
(1359, 791, 52, 1, '2024-03-19 12:54:57', '2024-03-19 12:54:57', NULL),
(1360, 792, 20, 1, '2024-03-19 13:09:12', '2024-03-19 13:09:12', NULL),
(1361, 792, 24, 1, '2024-03-19 13:09:12', '2024-03-19 13:09:12', NULL),
(1362, 792, 26, 1, '2024-03-19 13:09:12', '2024-03-19 13:09:12', NULL),
(1363, 793, 3, 1, '2024-03-19 13:12:18', '2024-03-19 13:12:18', NULL),
(1364, 793, 5, 1, '2024-03-19 13:12:18', '2024-03-19 13:12:18', NULL),
(1365, 794, 4, 1, '2024-03-19 13:57:33', '2024-03-19 13:57:33', NULL),
(1366, 794, 14, 1, '2024-03-19 13:57:33', '2024-03-19 13:57:33', NULL),
(1367, 795, 19, 1, '2024-03-19 13:58:47', '2024-03-19 13:58:47', NULL),
(1368, 795, 45, 1, '2024-03-19 13:58:47', '2024-03-19 13:58:47', NULL),
(1369, 796, 62, 1, '2024-03-19 13:59:38', '2024-03-19 13:59:38', NULL),
(1370, 796, 64, 1, '2024-03-19 13:59:38', '2024-03-19 13:59:38', NULL),
(1374, 799, 93, 1, '2024-03-30 14:46:11', '2024-03-30 14:46:11', NULL),
(1375, 800, 44, 1, '2024-03-30 17:08:52', '2024-03-30 17:08:52', NULL),
(1376, 800, 47, 1, '2024-03-30 17:08:52', '2024-03-30 17:08:52', NULL),
(1377, 801, 194, 1, '2024-03-30 17:15:12', '2024-03-30 17:15:12', NULL),
(1378, 804, 121, 1, '2024-03-30 18:39:58', '2024-03-30 18:39:58', NULL),
(1379, 804, 161, 1, '2024-03-30 18:39:58', '2024-03-30 18:39:58', NULL),
(1380, 804, 162, 1, '2024-03-30 18:39:58', '2024-03-30 18:39:58', NULL),
(1381, 804, 165, 1, '2024-03-30 18:39:58', '2024-03-30 18:39:58', NULL),
(1382, 804, 168, 1, '2024-03-30 18:39:58', '2024-03-30 18:39:58', NULL),
(1383, 804, 169, 1, '2024-03-30 18:39:58', '2024-03-30 18:39:58', NULL),
(1384, 804, 170, 1, '2024-03-30 18:39:58', '2024-03-30 18:39:58', NULL),
(1385, 805, 161, 1, '2024-03-30 18:41:53', '2024-03-30 18:41:53', NULL),
(1386, 805, 162, 1, '2024-03-30 18:41:53', '2024-03-30 18:41:53', NULL),
(1387, 805, 165, 1, '2024-03-30 18:41:53', '2024-03-30 18:41:53', NULL),
(1388, 805, 168, 1, '2024-03-30 18:41:53', '2024-03-30 18:41:53', NULL),
(1389, 805, 169, 1, '2024-03-30 18:41:53', '2024-03-30 18:41:53', NULL),
(1390, 806, 20, 1, '2024-03-30 19:11:23', '2024-03-30 19:11:23', NULL),
(1391, 806, 36, 1, '2024-03-30 19:11:23', '2024-03-30 19:11:23', NULL),
(1392, 806, 51, 1, '2024-03-30 19:11:23', '2024-03-30 19:11:23', NULL),
(1393, 807, 44, 1, '2024-03-31 03:34:44', '2024-03-31 03:34:44', NULL),
(1394, 807, 47, 1, '2024-03-31 03:34:44', '2024-03-31 03:34:44', NULL),
(1395, 807, 52, 1, '2024-03-31 03:34:44', '2024-03-31 03:34:44', NULL),
(1396, 808, 20, 1, '2024-03-31 03:38:37', '2024-03-31 03:38:37', NULL),
(1397, 808, 34, 1, '2024-03-31 03:38:37', '2024-03-31 03:38:37', NULL),
(1398, 808, 48, 1, '2024-03-31 03:38:37', '2024-03-31 03:38:37', NULL),
(1399, 808, 63, 1, '2024-03-31 03:38:37', '2024-03-31 03:38:37', NULL),
(1400, 809, 20, 1, '2024-03-31 03:46:13', '2024-03-31 03:46:13', NULL),
(1401, 809, 48, 1, '2024-03-31 03:46:13', '2024-03-31 03:46:13', NULL),
(1402, 810, 44, 1, '2024-03-31 03:57:39', '2024-03-31 03:57:39', NULL),
(1403, 810, 47, 1, '2024-03-31 03:57:39', '2024-03-31 03:57:39', NULL),
(1404, 810, 52, 1, '2024-03-31 03:57:39', '2024-03-31 03:57:39', NULL),
(1405, 811, 48, 1, '2024-03-31 04:03:31', '2024-03-31 04:03:31', NULL),
(1406, 812, 20, 1, '2024-03-31 04:19:41', '2024-03-31 04:19:41', NULL),
(1407, 813, 48, 1, '2024-03-31 04:23:06', '2024-03-31 04:23:06', NULL),
(1408, 813, 44, 1, '2024-03-31 04:23:06', '2024-03-31 04:23:06', NULL),
(1409, 813, 47, 1, '2024-03-31 04:23:06', '2024-03-31 04:23:06', NULL),
(1410, 814, 20, 1, '2024-03-31 06:13:50', '2024-03-31 06:13:50', NULL),
(1411, 814, 48, 1, '2024-03-31 06:13:50', '2024-03-31 06:13:50', NULL),
(1412, 815, 99, 1, '2024-04-01 15:49:51', '2024-04-01 15:49:51', NULL),
(1413, 815, 101, 1, '2024-04-01 15:49:51', '2024-04-01 15:49:51', NULL),
(1414, 815, 103, 1, '2024-04-01 15:49:51', '2024-04-01 15:49:51', NULL),
(1415, 816, 194, 1, '2024-04-01 15:51:08', '2024-04-01 15:51:08', NULL),
(1416, 817, 20, 1, '2024-04-01 15:54:17', '2024-04-01 15:54:17', NULL),
(1417, 818, 20, 1, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL),
(1418, 819, 20, 1, '2024-04-03 10:09:24', '2024-04-03 10:09:24', NULL),
(1419, 820, 93, 1, '2024-04-03 14:57:16', '2024-04-03 14:57:16', NULL),
(1420, 820, 99, 1, '2024-04-03 14:57:16', '2024-04-03 14:57:16', NULL),
(1421, 821, 130, 1, '2024-04-04 10:57:58', '2024-04-04 10:57:58', NULL),
(1422, 821, 140, 1, '2024-04-04 10:57:58', '2024-04-04 10:57:58', NULL),
(1423, 821, 152, 1, '2024-04-04 10:57:58', '2024-04-04 10:57:58', NULL),
(1424, 822, 46, 1, '2024-04-04 11:08:09', '2024-04-04 11:08:09', NULL),
(1425, 823, 13, 1, '2024-04-04 11:24:19', '2024-04-04 11:24:19', NULL),
(1426, 823, 25, 1, '2024-04-04 11:24:19', '2024-04-04 11:24:19', NULL),
(1427, 824, 20, 1, '2024-04-04 13:23:40', '2024-04-04 13:23:40', NULL),
(1428, 825, 7, 1, '2024-04-04 13:30:43', '2024-04-04 13:30:43', NULL),
(1429, 826, 48, 1, '2024-04-04 15:11:28', '2024-04-04 15:11:28', NULL),
(1430, 827, 48, 1, '2024-04-07 18:05:58', '2024-04-07 18:05:58', NULL),
(1431, 828, 48, 1, '2024-04-11 15:17:14', '2024-04-11 15:17:14', NULL),
(1432, 829, 48, 1, '2024-04-11 17:23:56', '2024-04-11 17:23:56', NULL),
(1433, 830, 48, 1, '2024-04-11 19:10:27', '2024-04-11 19:10:27', NULL),
(1434, 831, 48, 1, '2024-04-14 12:07:25', '2024-04-14 12:07:25', NULL),
(1435, 832, 20, 1, '2024-04-15 12:33:48', '2024-04-15 12:33:48', NULL),
(1436, 833, 20, 1, '2024-04-15 12:56:21', '2024-04-15 12:56:21', NULL),
(1437, 834, 20, 1, '2024-04-16 10:29:56', '2024-04-16 10:29:56', NULL),
(1438, 835, 20, 1, '2024-04-18 04:42:56', '2024-04-18 04:42:56', NULL),
(1439, 836, 79, 1, '2024-04-18 07:33:32', '2024-04-18 07:33:32', NULL),
(1440, 838, 160, 1, '2024-04-18 12:39:15', '2024-04-18 12:39:15', NULL),
(1441, 839, 20, 1, '2024-04-20 07:58:36', '2024-04-20 07:58:36', NULL),
(1442, 840, 20, 1, '2024-04-20 08:02:07', '2024-04-20 08:02:07', NULL),
(1443, 841, 176, 1, '2024-04-20 10:28:42', '2024-04-20 10:28:42', NULL),
(1444, 842, 138, 1, '2024-04-20 10:32:48', '2024-04-20 10:32:48', NULL),
(1445, 843, 61, 1, '2024-04-20 11:05:36', '2024-04-20 11:05:36', NULL),
(1446, 844, 5, 1, '2024-04-20 11:09:23', '2024-04-20 11:09:23', NULL),
(1447, 845, 20, 1, '2024-04-20 11:12:26', '2024-04-20 11:12:26', NULL),
(1448, 846, 20, 1, '2024-04-20 11:13:32', '2024-04-20 11:13:32', NULL),
(1449, 846, 24, 1, '2024-04-20 11:13:32', '2024-04-20 11:13:32', NULL),
(1450, 846, 26, 1, '2024-04-20 11:13:32', '2024-04-20 11:13:32', NULL),
(1451, 847, 190, 1, '2024-04-20 11:15:50', '2024-04-20 11:15:50', NULL),
(1452, 848, 151, 1, '2024-04-20 11:17:12', '2024-04-20 11:17:12', NULL),
(1453, 849, 6, 1, '2024-04-20 11:22:29', '2024-04-20 11:22:29', NULL),
(1454, 849, 8, 1, '2024-04-20 11:22:29', '2024-04-20 11:22:29', NULL),
(1455, 850, 81, 1, '2024-04-20 11:37:51', '2024-04-20 11:37:51', NULL),
(1456, 851, 26, 1, '2024-04-20 11:42:37', '2024-04-20 11:42:37', NULL),
(1457, 851, 36, 1, '2024-04-20 11:42:37', '2024-04-20 11:42:37', NULL),
(1458, 852, 66, 1, '2024-04-20 11:56:09', '2024-04-20 11:56:09', NULL),
(1459, 853, 22, 1, '2024-04-20 11:59:03', '2024-04-20 11:59:03', NULL),
(1460, 854, 31, 1, '2024-04-20 12:00:42', '2024-04-20 12:00:42', NULL),
(1461, 855, 20, 1, '2024-04-20 12:02:03', '2024-04-20 12:02:03', NULL),
(1462, 855, 24, 1, '2024-04-20 12:02:03', '2024-04-20 12:02:03', NULL),
(1463, 855, 26, 1, '2024-04-20 12:02:03', '2024-04-20 12:02:03', NULL),
(1464, 856, 20, 1, '2024-04-20 12:52:17', '2024-04-20 12:52:17', NULL),
(1465, 857, 44, 1, '2024-04-21 06:37:19', '2024-04-21 06:37:19', NULL),
(1466, 857, 47, 1, '2024-04-21 06:37:19', '2024-04-21 06:37:19', NULL),
(1467, 858, 44, 1, '2024-04-21 06:54:08', '2024-04-21 06:54:08', NULL),
(1468, 858, 47, 1, '2024-04-21 06:54:08', '2024-04-21 06:54:08', NULL),
(1469, 858, 52, 1, '2024-04-21 06:54:08', '2024-04-21 06:54:08', NULL),
(1470, 859, 119, 1, '2024-04-21 07:29:56', '2024-04-21 07:29:56', NULL),
(1471, 859, 184, 1, '2024-04-21 07:29:56', '2024-04-21 07:29:56', NULL),
(1472, 860, 20, 1, '2024-04-21 07:31:56', '2024-04-21 07:31:56', NULL),
(1473, 860, 24, 1, '2024-04-21 07:31:56', '2024-04-21 07:31:56', NULL),
(1474, 860, 26, 1, '2024-04-21 07:31:56', '2024-04-21 07:31:56', NULL),
(1475, 860, 6, 1, '2024-04-21 07:31:56', '2024-04-21 07:31:56', NULL),
(1476, 860, 10, 1, '2024-04-21 07:31:56', '2024-04-21 07:31:56', NULL),
(1477, 860, 18, 1, '2024-04-21 07:31:56', '2024-04-21 07:31:56', NULL),
(1478, 861, 86, 1, '2024-04-21 07:37:05', '2024-04-21 07:37:05', NULL),
(1479, 861, 87, 1, '2024-04-21 07:37:05', '2024-04-21 07:37:05', NULL),
(1480, 862, 154, 1, '2024-04-21 07:39:53', '2024-04-21 07:39:53', NULL),
(1481, 862, 157, 1, '2024-04-21 07:39:53', '2024-04-21 07:39:53', NULL),
(1482, 867, 20, 1, '2024-04-21 08:33:27', '2024-04-21 08:33:27', NULL),
(1483, 867, 24, 1, '2024-04-21 08:33:27', '2024-04-21 08:33:27', NULL),
(1484, 869, 20, 1, '2024-04-21 10:20:04', '2024-04-21 10:20:04', NULL),
(1485, 870, 26, 1, '2024-04-21 10:21:39', '2024-04-21 10:21:39', NULL),
(1486, 871, 26, 1, '2024-04-21 10:25:04', '2024-04-21 10:25:04', NULL),
(1487, 872, 24, 1, '2024-04-21 10:27:32', '2024-04-21 10:27:32', NULL),
(1488, 872, 26, 1, '2024-04-21 10:27:32', '2024-04-21 10:27:32', NULL),
(1489, 872, 48, 1, '2024-04-21 10:27:32', '2024-04-21 10:27:32', NULL),
(1490, 873, 20, 1, '2024-04-21 10:44:20', '2024-04-21 10:44:20', NULL),
(1491, 873, 139, 1, '2024-04-21 10:44:20', '2024-04-21 10:44:20', NULL),
(1492, 874, 26, 1, '2024-04-21 10:47:05', '2024-04-21 10:47:05', NULL),
(1493, 875, 54, 1, '2024-04-22 06:26:59', '2024-04-22 06:26:59', NULL),
(1494, 876, 59, 1, '2024-04-22 06:29:26', '2024-04-22 06:29:26', NULL),
(1495, 877, 4, 1, '2024-04-22 06:32:24', '2024-04-22 06:32:24', NULL),
(1496, 878, 15, 1, '2024-04-22 06:35:04', '2024-04-22 06:35:04', NULL),
(1497, 879, 42, 1, '2024-04-22 06:38:51', '2024-04-22 06:38:51', NULL),
(1498, 879, 44, 1, '2024-04-22 06:38:51', '2024-04-22 06:38:51', NULL),
(1499, 879, 47, 1, '2024-04-22 06:38:51', '2024-04-22 06:38:51', NULL),
(1500, 880, 44, 1, '2024-04-22 06:51:45', '2024-04-22 06:51:45', NULL),
(1501, 880, 47, 1, '2024-04-22 06:51:45', '2024-04-22 06:51:45', NULL),
(1502, 880, 59, 1, '2024-04-22 06:51:45', '2024-04-22 06:51:45', NULL),
(1503, 881, 20, 1, '2024-04-22 07:07:45', '2024-04-22 07:07:45', NULL),
(1504, 881, 24, 1, '2024-04-22 07:07:45', '2024-04-22 07:07:45', NULL),
(1505, 882, 60, 1, '2024-04-22 07:18:19', '2024-04-22 07:18:19', NULL),
(1506, 883, 51, 1, '2024-04-22 07:25:25', '2024-04-22 07:25:25', NULL),
(1507, 885, 20, 1, '2024-04-22 07:27:16', '2024-04-22 07:27:16', NULL),
(1508, 885, 24, 1, '2024-04-22 07:27:16', '2024-04-22 07:27:16', NULL),
(1509, 886, 20, 1, '2024-04-22 07:31:16', '2024-04-22 07:31:16', NULL),
(1510, 886, 24, 1, '2024-04-22 07:31:16', '2024-04-22 07:31:16', NULL),
(1511, 887, 53, 1, '2024-04-22 07:32:53', '2024-04-22 07:32:53', NULL),
(1512, 887, 194, 1, '2024-04-22 07:32:53', '2024-04-22 07:32:53', NULL),
(1513, 888, 6, 1, '2024-04-22 07:36:03', '2024-04-22 07:36:03', NULL),
(1514, 889, 65, 1, '2024-04-22 07:38:08', '2024-04-22 07:38:08', NULL),
(1515, 890, 10, 1, '2024-04-22 07:39:10', '2024-04-22 07:39:10', NULL),
(1516, 891, 61, 1, '2024-04-22 07:40:05', '2024-04-22 07:40:05', NULL),
(1517, 892, 14, 1, '2024-04-22 07:51:52', '2024-04-22 07:51:52', NULL),
(1518, 893, 65, 1, '2024-04-22 07:53:57', '2024-04-22 07:53:57', NULL),
(1519, 894, 44, 1, '2024-04-22 13:10:39', '2024-04-22 13:10:39', NULL),
(1520, 894, 47, 1, '2024-04-22 13:10:39', '2024-04-22 13:10:39', NULL),
(1521, 894, 52, 1, '2024-04-22 13:10:39', '2024-04-22 13:10:39', NULL),
(1522, 895, 20, 1, '2024-04-22 13:26:58', '2024-04-22 13:26:58', NULL),
(1523, 896, 44, 1, '2024-04-22 13:28:37', '2024-04-22 13:28:37', NULL),
(1524, 897, 8, 1, '2024-04-22 13:29:51', '2024-04-22 13:29:51', NULL),
(1525, 897, 12, 1, '2024-04-22 13:29:51', '2024-04-22 13:29:51', NULL),
(1526, 898, 15, 1, '2024-04-22 13:39:08', '2024-04-22 13:39:08', NULL),
(1527, 899, 60, 1, '2024-04-22 13:58:12', '2024-04-22 13:58:12', NULL),
(1528, 900, 64, 1, '2024-04-22 13:59:42', '2024-04-22 13:59:42', NULL),
(1529, 901, 9, 1, '2024-04-22 14:01:13', '2024-04-22 14:01:13', NULL),
(1530, 902, 58, 1, '2024-04-22 14:05:32', '2024-04-22 14:05:32', NULL),
(1531, 902, 61, 1, '2024-04-22 14:05:32', '2024-04-22 14:05:32', NULL),
(1532, 904, 20, 1, '2024-04-23 04:47:29', '2024-04-23 04:47:29', NULL),
(1533, 905, 20, 1, '2024-04-23 04:50:56', '2024-04-23 04:50:56', NULL),
(1534, 907, 60, 1, '2024-04-23 05:05:15', '2024-04-23 05:05:15', NULL),
(1535, 908, 60, 1, '2024-04-23 06:36:39', '2024-04-23 06:36:39', NULL),
(1536, 909, 60, 1, '2024-04-23 06:38:08', '2024-04-23 06:38:08', NULL),
(1537, 910, 60, 1, '2024-04-23 06:39:05', '2024-04-23 06:39:05', NULL),
(1538, 911, 60, 1, '2024-04-23 06:58:55', '2024-04-23 06:58:55', NULL),
(1539, 912, 60, 1, '2024-04-23 07:00:42', '2024-04-23 07:00:42', NULL),
(1540, 913, 60, 1, '2024-04-23 07:21:57', '2024-04-23 07:21:57', NULL),
(1541, 914, 60, 1, '2024-04-23 07:25:44', '2024-04-23 07:25:44', NULL),
(1542, 915, 60, 1, '2024-04-23 07:33:21', '2024-04-23 07:33:21', NULL),
(1543, 916, 60, 1, '2024-04-23 07:38:53', '2024-04-23 07:38:53', NULL),
(1544, 917, 60, 1, '2024-04-23 07:42:14', '2024-04-23 07:42:14', NULL),
(1545, 918, 44, 1, '2024-04-23 12:34:55', '2024-04-23 12:34:55', NULL),
(1546, 919, 48, 1, '2024-04-23 12:42:56', '2024-04-23 12:42:56', NULL),
(1547, 920, 47, 1, '2024-04-23 12:44:41', '2024-04-23 12:44:41', NULL),
(1548, 920, 57, 1, '2024-04-23 12:44:41', '2024-04-23 12:44:41', NULL),
(1549, 921, 24, 1, '2024-04-24 05:01:58', '2024-04-24 05:01:58', NULL),
(1550, 921, 30, 1, '2024-04-24 05:01:58', '2024-04-24 05:01:58', NULL),
(1551, 922, 54, 1, '2024-04-24 05:34:47', '2024-04-24 05:34:47', NULL),
(1552, 923, 44, 1, '2024-04-24 05:37:48', '2024-04-24 05:37:48', NULL),
(1553, 924, 51, 1, '2024-04-24 05:50:13', '2024-04-24 05:50:13', NULL),
(1554, 925, 5, 1, '2024-04-24 05:52:36', '2024-04-24 05:52:36', NULL),
(1555, 926, 26, 1, '2024-04-24 06:01:12', '2024-04-24 06:01:12', NULL),
(1556, 927, 20, 1, '2024-04-24 06:29:24', '2024-04-24 06:29:24', NULL),
(1557, 928, 58, 1, '2024-04-24 07:49:40', '2024-04-24 07:49:40', NULL),
(1558, 929, 44, 1, '2024-04-24 14:56:45', '2024-04-24 14:56:45', NULL),
(1559, 929, 47, 1, '2024-04-24 14:56:45', '2024-04-24 14:56:45', NULL),
(1560, 929, 52, 1, '2024-04-24 14:56:45', '2024-04-24 14:56:45', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `post_user_experiences`
--

CREATE TABLE `post_user_experiences` (
  `id` bigint UNSIGNED NOT NULL,
  `post_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `experience` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post_user_experiences`
--

INSERT INTO `post_user_experiences` (`id`, `post_id`, `user_id`, `experience`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(27, 561, 128, '', 1, '2024-03-06 10:19:52', '2024-03-06 10:19:52', NULL),
(28, 551, 129, '', 1, '2024-03-06 12:09:12', '2024-03-06 12:09:12', NULL),
(31, 566, 142, '', 1, '2024-03-08 17:19:38', '2024-03-08 17:19:38', NULL),
(32, 652, 126, '', 1, '2024-03-09 07:21:42', '2024-03-09 07:21:42', NULL),
(33, 658, 128, '', 1, '2024-03-09 12:32:57', '2024-03-09 12:32:57', NULL),
(34, 657, 128, '', 1, '2024-03-09 12:47:58', '2024-03-09 12:47:58', NULL),
(35, 658, 143, '', 1, '2024-03-09 12:55:16', '2024-03-09 12:55:16', NULL),
(36, 657, 143, '', 1, '2024-03-09 12:57:30', '2024-03-09 12:57:30', NULL),
(37, 634, 143, '', 1, '2024-03-09 13:02:17', '2024-03-09 13:02:17', NULL),
(38, 616, 143, '', 1, '2024-03-09 13:02:34', '2024-03-09 13:02:34', NULL),
(39, 658, 126, '', 1, '2024-03-09 13:11:37', '2024-03-09 13:11:37', NULL),
(40, 669, 128, '', 1, '2024-03-11 13:13:36', '2024-03-11 13:13:36', NULL),
(41, 674, 143, '', 1, '2024-03-13 05:32:13', '2024-03-13 05:32:13', NULL),
(42, 693, 128, '', 1, '2024-03-13 07:32:40', '2024-03-13 07:32:40', NULL),
(43, 541, 128, '', 1, '2024-03-13 11:14:22', '2024-03-13 11:14:22', NULL),
(44, 702, 128, '', 1, '2024-03-13 11:51:40', '2024-03-13 11:51:40', NULL),
(45, 667, 128, '', 1, '2024-03-13 12:06:21', '2024-03-13 12:06:21', NULL),
(46, 718, 130, '', 1, '2024-03-14 11:28:24', '2024-03-14 11:28:24', NULL),
(48, 769, 146, '', 1, '2024-03-19 06:05:00', '2024-03-19 06:05:00', NULL),
(49, 769, 128, '', 1, '2024-03-19 06:08:17', '2024-03-19 06:08:17', NULL),
(50, 769, 126, '', 1, '2024-03-19 06:10:20', '2024-03-19 06:10:20', NULL),
(51, 739, 146, '', 1, '2024-03-19 07:00:56', '2024-03-19 07:00:56', NULL),
(52, 783, 146, '', 1, '2024-03-19 11:10:13', '2024-03-19 11:10:13', NULL),
(53, 785, 126, '', 1, '2024-03-19 12:05:50', '2024-03-19 12:05:50', NULL),
(54, 799, 172, '', 1, '2024-03-30 16:30:47', '2024-03-30 16:30:47', NULL),
(55, 804, 170, '1', 1, '2024-03-30 18:41:16', '2024-03-30 18:41:16', NULL),
(56, 805, 170, '', 1, '2024-03-30 18:43:16', '2024-03-30 18:43:16', NULL),
(57, 799, 171, '', 1, '2024-03-31 16:16:12', '2024-03-31 16:16:12', NULL),
(58, 799, 175, '', 1, '2024-04-02 16:41:58', '2024-04-02 16:41:58', NULL),
(59, 805, 175, '', 1, '2024-04-02 16:42:55', '2024-04-02 16:42:55', NULL),
(60, 818, 172, '', 1, '2024-04-03 05:42:51', '2024-04-03 05:42:51', NULL),
(61, 818, 175, '', 1, '2024-04-03 17:36:46', '2024-04-03 17:36:46', NULL),
(62, 818, 159, '', 1, '2024-04-16 07:51:24', '2024-04-16 07:51:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `post_user_select_below_options`
--

CREATE TABLE `post_user_select_below_options` (
  `id` bigint UNSIGNED NOT NULL,
  `post_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `que_id` bigint UNSIGNED DEFAULT NULL,
  `below_option` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post_user_select_below_options`
--

INSERT INTO `post_user_select_below_options` (`id`, `post_id`, `user_id`, `que_id`, `below_option`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(63, 561, 128, 212, NULL, 1, '2024-03-06 10:19:52', '2024-03-06 10:19:52', NULL),
(64, 551, 129, 206, NULL, 1, '2024-03-06 12:09:12', '2024-03-06 12:09:12', NULL),
(67, 566, 142, 217, NULL, 1, '2024-03-08 17:19:38', '2024-03-08 17:19:38', NULL),
(68, 652, 126, 275, NULL, 1, '2024-03-09 07:21:42', '2024-03-09 07:21:42', NULL),
(69, 658, 128, 279, NULL, 1, '2024-03-09 12:32:57', '2024-03-09 12:32:57', NULL),
(70, 657, 128, 278, NULL, 1, '2024-03-09 12:47:58', '2024-03-09 12:47:58', NULL),
(71, 658, 143, 279, NULL, 1, '2024-03-09 12:55:16', '2024-03-09 12:55:16', NULL),
(72, 657, 143, 278, NULL, 1, '2024-03-09 12:57:30', '2024-03-09 12:57:30', NULL),
(73, 634, 143, 267, NULL, 1, '2024-03-09 13:02:17', '2024-03-09 13:02:17', NULL),
(74, 616, 143, 252, NULL, 1, '2024-03-09 13:02:34', '2024-03-09 13:02:34', NULL),
(75, 658, 126, 279, NULL, 1, '2024-03-09 13:11:37', '2024-03-09 13:11:37', NULL),
(76, 669, 128, 282, NULL, 1, '2024-03-11 13:13:36', '2024-03-11 13:13:36', NULL),
(77, 674, 143, 284, NULL, 1, '2024-03-13 05:32:13', '2024-03-13 05:32:13', NULL),
(78, 693, 128, 293, NULL, 1, '2024-03-13 07:32:40', '2024-03-13 07:32:40', NULL),
(79, 541, 128, 199, NULL, 1, '2024-03-13 11:14:22', '2024-03-13 11:14:22', NULL),
(80, 702, 128, 296, NULL, 1, '2024-03-13 11:51:40', '2024-03-13 11:51:40', NULL),
(81, 667, 128, 281, NULL, 1, '2024-03-13 12:06:21', '2024-03-13 12:06:21', NULL),
(82, 718, 130, 305, NULL, 1, '2024-03-14 11:28:24', '2024-03-14 11:28:24', NULL),
(84, 760, 126, NULL, 'uui', 1, '2024-03-19 06:03:16', '2024-03-19 06:03:16', NULL),
(85, 769, 146, 321, 'ABC', 1, '2024-03-19 06:05:00', '2024-03-19 06:05:00', NULL),
(86, 769, 128, 321, 'Hello', 1, '2024-03-19 06:08:17', '2024-03-19 06:08:17', NULL),
(87, 769, 126, 321, NULL, 1, '2024-03-19 06:10:20', '2024-03-19 06:10:20', NULL),
(88, 739, 146, 312, NULL, 1, '2024-03-19 07:00:56', '2024-03-19 07:00:56', NULL),
(89, 783, 146, 325, NULL, 1, '2024-03-19 11:10:13', '2024-03-19 11:10:13', NULL),
(90, 785, 126, 326, NULL, 1, '2024-03-19 12:05:50', '2024-03-19 12:05:50', NULL),
(91, 785, 126, 326, NULL, 1, '2024-03-19 12:05:50', '2024-03-19 12:05:50', NULL),
(92, 799, 172, 332, NULL, 1, '2024-03-30 16:30:47', '2024-03-30 16:30:47', NULL),
(93, 804, 170, 333, NULL, 1, '2024-03-30 18:41:16', '2024-03-30 18:41:16', NULL),
(94, 805, 170, 334, NULL, 1, '2024-03-30 18:43:16', '2024-03-30 18:43:16', NULL),
(95, 799, 171, 332, NULL, 1, '2024-03-31 16:16:12', '2024-03-31 16:16:12', NULL),
(96, 810, 175, NULL, 'too early to assess', 1, '2024-04-02 16:35:07', '2024-04-02 16:35:07', NULL),
(97, 799, 175, 332, NULL, 1, '2024-04-02 16:41:58', '2024-04-02 16:41:58', NULL),
(98, 805, 175, 334, NULL, 1, '2024-04-02 16:42:55', '2024-04-02 16:42:55', NULL),
(99, 818, 172, 335, NULL, 1, '2024-04-03 05:42:51', '2024-04-03 05:42:51', NULL),
(100, 818, 172, 336, NULL, 1, '2024-04-03 05:42:51', '2024-04-03 05:42:51', NULL),
(101, 818, 175, 335, NULL, 1, '2024-04-03 17:36:46', '2024-04-03 17:36:46', NULL),
(102, 818, 175, 335, NULL, 1, '2024-04-03 17:36:46', '2024-04-03 17:36:46', NULL),
(103, 818, 175, 335, NULL, 1, '2024-04-03 17:36:46', '2024-04-03 17:36:46', NULL),
(104, 818, 175, 335, NULL, 1, '2024-04-03 17:36:46', '2024-04-03 17:36:46', NULL),
(105, 818, 175, 335, NULL, 1, '2024-04-03 17:36:46', '2024-04-03 17:36:46', NULL),
(106, 818, 175, 336, NULL, 1, '2024-04-03 17:36:46', '2024-04-03 17:36:46', NULL),
(107, 823, 175, NULL, 'floating bridge', 1, '2024-04-05 04:11:26', '2024-04-05 04:11:26', NULL),
(108, 821, 172, NULL, 'ftgyy', 1, '2024-04-05 04:16:52', '2024-04-05 04:16:52', NULL),
(109, 810, 172, NULL, 'b3jv3ue', 1, '2024-04-05 04:17:16', '2024-04-05 04:17:16', NULL),
(110, 823, 159, NULL, 'zoakqd', 1, '2024-04-06 16:20:03', '2024-04-06 16:20:03', NULL),
(111, 818, 159, 335, 'mu', 1, '2024-04-16 07:51:24', '2024-04-16 07:51:24', NULL),
(112, 818, 159, 336, NULL, 1, '2024-04-16 07:51:24', '2024-04-16 07:51:24', NULL),
(113, 821, 129, NULL, 'dtvgvh', 1, '2024-04-18 14:59:42', '2024-04-18 14:59:42', NULL),
(114, 823, 129, NULL, 'ch yhuj', 1, '2024-04-18 15:00:23', '2024-04-18 15:00:23', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `previous_chats`
--

CREATE TABLE `previous_chats` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `chat_with` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `previous_chats`
--

INSERT INTO `previous_chats` (`id`, `user_id`, `chat_with`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(301, 142, 129, 1, '2024-03-11 19:46:56', '2024-03-11 19:46:56', NULL),
(303, 142, 130, 1, '2024-03-11 19:47:08', '2024-03-11 19:47:08', NULL),
(307, 126, 128, 1, '2024-03-13 08:47:06', '2024-03-13 08:47:06', NULL),
(308, 126, 147, 1, '2024-03-19 11:27:34', '2024-03-19 11:27:34', NULL),
(310, 146, 126, 1, '2024-03-19 11:43:10', '2024-03-19 11:43:10', NULL),
(311, 157, 149, 1, '2024-03-21 05:42:22', '2024-03-21 05:42:22', NULL),
(314, 130, 129, 1, '2024-03-28 13:54:22', '2024-03-28 13:54:22', NULL),
(321, 172, 174, 1, '2024-04-01 15:45:31', '2024-04-01 15:45:31', NULL),
(323, 172, 171, 1, '2024-04-02 13:14:07', '2024-04-02 13:14:07', NULL),
(340, 172, 175, 1, '2024-04-04 03:39:18', '2024-04-04 03:39:18', NULL),
(345, 172, 183, 1, '2024-04-06 03:38:57', '2024-04-06 03:38:57', NULL),
(347, 186, 185, 1, '2024-04-16 18:23:45', '2024-04-16 18:23:45', NULL),
(348, 146, 160, 1, '2024-04-17 07:44:00', '2024-04-17 07:44:00', NULL),
(349, 159, 146, 1, '2024-04-17 07:45:19', '2024-04-17 07:45:19', NULL),
(350, 130, 175, 1, '2024-04-18 03:26:52', '2024-04-18 03:26:52', NULL),
(351, 145, 155, 1, '2024-04-20 11:08:02', '2024-04-20 11:08:02', NULL),
(353, 130, 172, 1, '2024-04-21 07:56:58', '2024-04-21 07:56:58', NULL),
(355, 130, 182, 1, '2024-04-21 07:57:27', '2024-04-21 07:57:27', NULL),
(357, 188, 172, 1, '2024-04-21 10:13:45', '2024-04-21 10:13:45', NULL),
(364, 145, 126, 1, '2024-04-23 06:27:29', '2024-04-23 06:27:29', NULL),
(365, 172, 182, 1, '2024-04-24 07:14:07', '2024-04-24 07:14:07', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `report_posts`
--

CREATE TABLE `report_posts` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `report_posts`
--

INSERT INTO `report_posts` (`id`, `user_id`, `posts_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(5, 159, 809, 1, '2024-04-01 16:03:33', '2024-04-01 16:03:33', NULL),
(6, 159, 833, 1, '2024-04-18 13:41:50', '2024-04-18 13:41:50', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `reposts`
--

CREATE TABLE `reposts` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `repost_id` bigint UNSIGNED NOT NULL,
  `thoughts` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `long` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reposts`
--

INSERT INTO `reposts` (`id`, `posts_id`, `repost_id`, `thoughts`, `lat`, `long`, `user_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(34, 658, 659, 'this is my new repost with another user posted post', '18.5204146', '73.7720658', 126, 1, '2024-03-09 12:33:37', '2024-03-09 12:33:37', NULL),
(35, 654, 668, NULL, '18.5204368', '73.7720351', 128, 1, '2024-03-11 13:05:10', '2024-03-11 13:05:10', NULL),
(36, 694, 695, NULL, '18.5203939', '73.7719752', 146, 1, '2024-03-13 07:30:01', '2024-03-13 07:30:01', NULL),
(37, 702, 708, NULL, '18.5204265', '73.7720357', 128, 1, '2024-03-13 12:59:02', '2024-03-13 12:59:02', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `where_to_post_id` bigint UNSIGNED NOT NULL,
  `review` tinyint(1) NOT NULL DEFAULT '0',
  `opinion` tinyint(1) NOT NULL DEFAULT '0',
  `product_service_que` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `hyper_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reating` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `online_product_service` tinyint(1) NOT NULL DEFAULT '0',
  `recommend` tinyint(1) NOT NULL DEFAULT '1',
  `beware` tinyint(1) NOT NULL DEFAULT '1',
  `lat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `long` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `posts_id`, `user_id`, `where_to_post_id`, `review`, `opinion`, `product_service_que`, `description`, `hyper_link`, `reating`, `online_product_service`, `recommend`, `beware`, `lat`, `long`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(88, 544, 126, 7, 1, 0, 'Social Review', 'Social Review \n7 day', NULL, '2.5', 0, 1, 0, '18.59731827585421', '73.79031959921122', 1, '2024-03-05 17:44:16', '2024-03-05 17:44:16', NULL),
(89, 559, 126, 7, 1, 0, 'Social', 'Social Review post', NULL, '1.5', 0, 1, 0, '18.518264418446776', '73.76884214580059', 1, '2024-03-06 09:44:59', '2024-03-06 09:44:59', NULL),
(91, 638, 130, 4, 1, 0, 'Hanuman Movie', 'Great experience , good movie', NULL, '3.5', 0, 1, 0, NULL, NULL, 1, '2024-03-08 07:34:37', '2024-03-08 07:34:37', NULL),
(92, 639, 129, 4, 1, 0, 'Restaurant', 'It\'s the worst Biriyani I have ever eaten. Very bad', NULL, '0.5', 0, 1, 0, NULL, NULL, 1, '2024-03-08 07:48:54', '2024-03-08 07:48:54', NULL),
(93, 640, 129, 1, 1, 0, 'RC yvgtctct', 'rvu testgcttv', NULL, '2.5', 0, 1, 0, NULL, NULL, 1, '2024-03-08 08:04:09', '2024-03-08 08:04:09', NULL),
(95, 647, 132, 7, 1, 0, 'uvuvu', 'ivivivi', 'uviviv', '4.5', 1, 1, 0, '18.520151559509788', '73.77229783684015', 1, '2024-03-09 05:20:44', '2024-03-09 05:20:44', NULL),
(97, 653, 128, 2, 1, 0, 'rr', 'Review my circle', 'ft', '2', 0, 1, 0, '18.5204303', '73.8567437', 1, '2024-03-09 07:17:51', '2024-03-09 07:17:51', NULL),
(98, 660, 126, 2, 1, 0, 'my circle', 'ycchcufi', 'Review', '3', 0, 1, 0, '18.5204153', '73.7720716', 1, '2024-03-09 13:16:03', '2024-03-09 13:16:03', NULL),
(99, 662, 126, 2, 1, 0, 'yvvu', 'New reviews My Circle', NULL, '2', 0, 1, 0, '18.5203929', '73.77207', 1, '2024-03-09 13:30:01', '2024-03-09 13:30:01', NULL),
(100, 670, 143, 4, 1, 0, 'jj.', 'Home review post', 'Ayodhya', '3.5', 0, 1, 0, '26.7921605', '82.1997954', 1, '2024-03-11 13:13:20', '2024-03-11 13:13:20', NULL),
(101, 672, 128, 2, 1, 0, 'gklh', 'review my circle', 'vhi', '3', 0, 1, 0, '18.5204059', '73.7720629', 1, '2024-03-11 13:23:26', '2024-03-11 13:23:26', NULL),
(102, 673, 126, 2, 1, 0, 'bh', 'My circle post review', 'bbb', '3', 0, 1, 0, '18.5204164', '73.7720367', 1, '2024-03-11 13:27:58', '2024-03-11 13:27:58', NULL),
(104, 678, 130, 4, 1, 0, '5x7r7t7t7', 'ig8tt88g 8y', NULL, '1', 0, 0, 1, NULL, NULL, 1, '2024-03-12 14:26:25', '2024-03-12 14:26:25', NULL),
(105, 680, 145, 2, 1, 0, 'notebook', 'ydieuejeue', 'www.ghjs.com', '2.5', 1, 1, 0, NULL, NULL, 1, '2024-03-13 04:26:41', '2024-03-13 04:26:41', NULL),
(106, 681, 145, 4, 1, 0, 'phone', 'heuueue', 'www.mibile.com', '3', 1, 1, 0, '18.5204091', '73.7719807', 1, '2024-03-13 04:29:04', '2024-03-13 04:29:04', NULL),
(107, 691, 128, 2, 1, 0, 'gc h', 'Review post with different tag\nwithout location \nMy circle', 'chvh', '3.5', 0, 1, 0, NULL, NULL, 1, '2024-03-13 06:19:08', '2024-03-13 06:19:08', NULL),
(108, 698, 126, 2, 1, 0, 'st', 'Review post My Circle with different tag in city', NULL, '2', 0, 1, 0, '18.5204303', '73.8567437', 1, '2024-03-13 07:44:56', '2024-03-13 07:44:56', NULL),
(109, 699, 128, 2, 1, 0, 'hh', 'My circle review post with different tag city location 12345667', 'hhh', '3', 0, 1, 0, '18.5204303', '73.8567437', 1, '2024-03-13 07:48:48', '2024-03-13 07:48:48', NULL),
(110, 700, 126, 2, 1, 0, 'hh', 'My circle review post with match tag', 'hhh', '2.5', 0, 1, 0, '18.5204303', '73.8567437', 1, '2024-03-13 07:56:48', '2024-03-13 07:56:48', NULL),
(111, 711, 130, 4, 1, 0, 'veu 3ue hebuehu', 'veh eue uevuehue', NULL, '1.5', 0, 0, 1, NULL, NULL, 1, '2024-03-13 16:30:56', '2024-03-13 16:30:56', NULL),
(112, 713, 129, 4, 1, 0, '7f7titigog', 'ud,if,itxiyoyo', NULL, '1.5', 0, 0, 1, NULL, NULL, 1, '2024-03-14 07:17:40', '2024-03-14 07:17:40', NULL),
(113, 719, 129, 1, 1, 0, 'euhs eusbeubd', 'beube7z', NULL, '2.5', 0, 1, 0, NULL, NULL, 1, '2024-03-14 16:42:29', '2024-03-14 16:42:29', NULL),
(114, 722, 146, 4, 1, 0, 'dp', 'Home review post', 'wi', '3', 0, 1, 0, '18.5204303', '73.8567437', 1, '2024-03-15 04:44:21', '2024-03-15 04:44:21', NULL),
(115, 724, 146, 1, 1, 0, 'cc', 'Public Review post with location current \nmatch tag', 'fuh', '2.5', 0, 1, 0, '18.5204259', '73.7720186', 1, '2024-03-15 05:11:19', '2024-03-15 05:11:19', NULL),
(116, 725, 146, 1, 1, 0, 'jvvu', 'public review without match tag', 'current location', '0.5', 0, 1, 0, '18.52042', '73.772042', 1, '2024-03-15 05:25:16', '2024-03-15 05:25:16', NULL),
(117, 729, 146, 1, 1, 0, 'chb', 'Review post with current location match tag\n3 day', 'chhc', '3', 0, 1, 0, '18.5204251', '73.7720215', 1, '2024-03-15 05:42:13', '2024-03-15 05:42:13', NULL),
(118, 735, 126, 7, 1, 0, 'vjnv', 'Social review current location match tag', NULL, '2.5', 0, 1, 0, '18.51896287924893', '73.77205274999142', 1, '2024-03-15 06:31:33', '2024-03-15 06:31:33', NULL),
(119, 736, 146, 4, 1, 0, 'ff', 'Home review post with current location', NULL, '2', 0, 1, 0, '18.5204255', '73.7720287', 1, '2024-03-15 06:33:14', '2024-03-15 06:33:14', NULL),
(120, 743, 128, 2, 1, 0, 'jjj', 'review My Circle match tag', 'bhj', '1.5', 0, 1, 0, '18.5204303', '73.8567437', 1, '2024-03-15 13:08:43', '2024-03-15 13:08:43', NULL),
(121, 744, 128, 2, 1, 0, 'uuu', 'My circle review post with match tag', 'bhu', '2.5', 0, 1, 0, '18.5204308', '73.7720411', 1, '2024-03-15 13:11:02', '2024-03-15 13:11:02', NULL),
(122, 754, 128, 2, 1, 0, 'chhcch', 'review post with different tag without location My Circle', NULL, '2.5', 0, 1, 0, NULL, NULL, 1, '2024-03-15 13:31:18', '2024-03-15 13:31:18', NULL),
(123, 755, 126, 2, 1, 0, 'vj kv', 'review post with match tag without location', 'chhv', '2', 0, 1, 0, NULL, NULL, 1, '2024-03-15 13:32:13', '2024-03-15 13:32:13', NULL),
(124, 756, 128, 1, 1, 0, 'public', 'review post with match tag Pune location\npublic', 'ihbo', '5', 0, 1, 0, '18.5204302', '73.7720684', 1, '2024-03-15 13:35:39', '2024-03-15 13:35:39', NULL),
(125, 757, 126, 1, 1, 0, 'ch k', 'public review post with match tag current location', 'jvnl', '2.5', 0, 1, 0, '18.5204324', '73.7720511', 1, '2024-03-15 13:37:05', '2024-03-15 13:37:05', NULL),
(126, 765, 146, 1, 0, 1, NULL, 'Hello my opinion', 'j j', NULL, 0, 0, 0, '18.5204256', '73.7720388', 1, '2024-03-19 05:55:28', '2024-03-19 05:55:28', NULL),
(127, 766, 126, 4, 0, 1, NULL, 'My opinion home post', NULL, NULL, 0, 0, 0, '18.5204303', '73.8567437', 1, '2024-03-19 05:56:26', '2024-03-19 05:56:26', NULL),
(128, 767, 126, 2, 0, 1, NULL, 'My circle opinion', NULL, NULL, 0, 0, 0, '18.5204293', '73.7720421', 1, '2024-03-19 05:59:23', '2024-03-19 05:59:23', NULL),
(129, 770, 146, 4, 0, 1, NULL, 'opinion post home', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-03-19 06:18:58', '2024-03-19 06:18:58', NULL),
(130, 771, 155, 1, 0, 1, NULL, 'fr tvt ubu', 'tctv', NULL, 0, 0, 0, NULL, NULL, 1, '2024-03-19 06:20:28', '2024-03-19 06:20:28', NULL),
(131, 772, 146, 4, 0, 1, NULL, 'hchxjckc', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-03-19 06:23:03', '2024-03-19 06:23:03', NULL),
(132, 774, 155, 1, 1, 0, 'tvybh', 'ybubu', 'g u u', '4.5', 0, 1, 0, NULL, NULL, 1, '2024-03-19 06:46:45', '2024-03-19 06:46:45', NULL),
(133, 775, 126, 4, 0, 1, NULL, 'Opinion home post', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-03-19 06:58:49', '2024-03-19 06:58:49', NULL),
(134, 776, 146, 4, 0, 1, NULL, 'Opinion home post', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-03-19 07:02:24', '2024-03-19 07:02:24', NULL),
(135, 777, 126, 4, 0, 1, NULL, 'opinion home post', NULL, NULL, 0, 0, 0, '18.5204231', '73.7720538', 1, '2024-03-19 07:04:35', '2024-03-19 07:04:35', NULL),
(136, 778, 126, 4, 1, 0, 'cc', 'vvvvv', 'vbbt', '4.5', 0, 1, 0, NULL, NULL, 1, '2024-03-19 07:47:38', '2024-03-19 07:47:38', NULL),
(137, 779, 146, 4, 1, 0, 'j. j', 'chchchc', 'ivbiv', '2.5', 0, 1, 0, NULL, NULL, 1, '2024-03-19 07:50:22', '2024-03-19 07:50:22', NULL),
(138, 780, 126, 4, 0, 1, NULL, 'opinion home post', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-03-19 07:51:06', '2024-03-19 07:51:06', NULL),
(139, 784, 126, 2, 0, 1, NULL, 'Opinion my circle post', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-03-19 11:11:41', '2024-03-19 11:11:41', NULL),
(140, 793, 146, 4, 0, 1, NULL, 'Opinion post home Pune location', NULL, NULL, 0, 0, 0, '18.4529322', '73.86523799999999', 1, '2024-03-19 13:12:18', '2024-03-19 13:12:18', NULL),
(141, 796, 129, 4, 0, 1, NULL, 'fvtgtgtg', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-03-19 13:59:38', '2024-03-19 13:59:38', NULL),
(142, 801, 172, 4, 1, 0, 'Yadav Property PG, U 10 road, phases 3', 'Nice PG to stay in DLF phase 3. Good maintenance with fully furnished rooms, 2 persons easily can stay.', NULL, '4', 0, 1, 0, '28.4938382', '77.0939741', 1, '2024-03-30 17:15:12', '2024-03-30 17:15:12', NULL),
(143, 807, 172, 4, 0, 1, NULL, 'Ravi Shastri on Hardik\'s hunger for Captaincy!', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-03-31 03:34:44', '2024-03-31 03:34:44', NULL),
(144, 808, 172, 4, 1, 0, 'The GoatLife Movie', 'Don\'t Miss This Realistic Cinema Experience In Theatres ❤️\n\n#TheGoatLife #PrithvirajSukumaran', NULL, '4', 0, 1, 0, NULL, NULL, 1, '2024-03-31 03:38:37', '2024-03-31 03:38:37', NULL),
(145, 809, 172, 4, 0, 1, NULL, 'Reason For Hituu', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-03-31 03:46:13', '2024-03-31 03:46:13', NULL),
(146, 811, 172, 4, 0, 1, NULL, 'Society Towards Boys 😞\n\n#dollychaiwala #VadaPavgirl', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-03-31 04:03:31', '2024-03-31 04:03:31', NULL),
(147, 813, 172, 4, 0, 1, NULL, 'Excellent comeback from LSG', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-03-31 04:23:06', '2024-03-31 04:23:06', NULL),
(148, 814, 172, 4, 0, 1, NULL, 'E samajam veli vestharemo 🏃', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-03-31 06:13:50', '2024-03-31 06:13:50', NULL),
(149, 815, 174, 1, 1, 0, 'Biryani Plant', 'The Food At Biryani Planet is too bad, It is simply a masala product of no use. Highly Recommend not to go and have food from here', NULL, '0.5', 0, 1, 0, NULL, NULL, 1, '2024-04-01 15:49:51', '2024-04-01 15:49:51', NULL),
(150, 816, 172, 4, 1, 0, 'Om Sai Ram Andhra Mess and PG', 'I liked the food , compared to any other Telugu PG, Affordable rent, Nice Telugu community to stay in Gurgaon.', NULL, '3.5', 0, 1, 0, '28.4486364', '77.0719242', 1, '2024-04-01 15:51:08', '2024-04-01 15:51:08', NULL),
(151, 817, 174, 1, 1, 0, 'PVR Mall MGF Metropolis', 'Movie Theatre Experience is Good but still needs to improve in facilities', NULL, '0.5', 0, 1, 0, NULL, NULL, 1, '2024-04-01 15:54:17', '2024-04-01 15:54:17', NULL),
(152, 827, 172, 4, 0, 1, NULL, 'Bro choose violence', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-04-07 18:05:58', '2024-04-07 18:05:58', NULL),
(153, 828, 172, 4, 0, 1, NULL, 'reels chusi mosapokandi frends 😞', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-04-11 15:17:14', '2024-04-11 15:17:14', NULL),
(154, 829, 182, 4, 0, 1, NULL, 'guruji😆', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-04-11 17:23:56', '2024-04-11 17:23:56', NULL),
(155, 830, 182, 4, 0, 1, NULL, 'chethabadi aina chesi cup gelavandra', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-04-11 19:10:27', '2024-04-11 19:10:27', NULL),
(156, 831, 182, 4, 0, 1, NULL, 'Best performance 😁', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-04-14 12:07:25', '2024-04-14 12:07:25', NULL),
(157, 857, 172, 4, 1, 0, 'Arun Jaitley Stadium, New Delhi', 'Match viewing experience is awesome 🤗 but There is no network to use internet and no one accepting UPI payments to buy anything, not even water u can buy. I was shocked by knowing that Bisleri water bottle costs 150 and u need to pay only cash to buy. Take cash , it is must .', NULL, '2', 0, 0, 1, '28.637923', '77.2431735', 1, '2024-04-21 06:37:19', '2024-04-21 06:37:19', NULL),
(158, 858, 172, 4, 1, 0, 'Arun Jaitley Stadium, New Delhi', 'Match viewing experience is awesome 🥳🎉🤗 but there is no network to use internet and no one is accepting UPI payments to buy anything , not even water u can buy. I was shocked by knowing that Bisleri water bottle costs 150 and u need to pay only cash to buy.\nBeware of Network Issue and take cash and don\'t bring any electronic gadgets like ear pods, smart watch etc except Mobile phone.', NULL, '2', 0, 0, 1, '28.637923', '77.2431735', 1, '2024-04-21 06:54:08', '2024-04-21 06:54:08', NULL),
(159, 859, 130, 4, 1, 0, 'Testing', 'ehsue uusbe eu hsyve', NULL, '1.5', 0, 0, 1, NULL, NULL, 1, '2024-04-21 07:29:56', '2024-04-21 07:29:56', NULL),
(160, 862, 172, 2, 0, 1, NULL, 'Testing MyCircle Post', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-04-21 07:39:53', '2024-04-21 07:39:53', NULL),
(161, 867, 182, 3, 0, 1, NULL, 'Testing Community Post', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-04-21 08:33:27', '2024-04-21 08:33:27', NULL),
(163, 871, 182, 4, 0, 1, NULL, 'Testing Home Posts', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-04-21 10:25:04', '2024-04-21 10:25:04', NULL),
(164, 872, 172, 2, 0, 1, NULL, 'Testing MyCircle Post', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-04-21 10:27:32', '2024-04-21 10:27:32', NULL),
(165, 873, 172, 4, 0, 1, NULL, 'Testing Home Post', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-04-21 10:44:20', '2024-04-21 10:44:20', NULL),
(166, 874, 172, 1, 0, 1, NULL, 'Testing Public Post', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-04-21 10:47:05', '2024-04-21 10:47:05', NULL),
(167, 880, 187, 2, 1, 0, 'yhd', 'My circle review post with different locations \n\nmatch tag', NULL, '3.5', 0, 1, 0, '19.0759837', '72.8776559', 1, '2024-04-22 06:51:45', '2024-04-22 06:51:45', NULL),
(168, 882, 187, 3, 1, 0, 'guhioh', 'Community post review', NULL, '2', 0, 1, 0, '19.0759837', '72.8776559', 1, '2024-04-22 07:18:19', '2024-04-22 07:18:19', NULL),
(169, 892, 146, 4, 1, 0, 'home review without location', 'Home different tag', NULL, '3', 0, 1, 0, NULL, NULL, 1, '2024-04-22 07:51:52', '2024-04-22 07:51:52', NULL),
(170, 894, 172, 4, 1, 0, 'Arun Jaitley Stadium, New Delhi', 'Match viewing experience is awesome 🤗 but there is no network to use internet and no one is accepting UPI payments to buy anything , not even water u can buy. I was shocked by knowing that Bisleri water bottle costs 150 rs u need to pay only cash to buy. \nBeware of Network Issue and Bring Cash to visit Match in stadium', NULL, '2', 0, 0, 1, '28.637923', '77.2431735', 1, '2024-04-22 13:10:39', '2024-04-22 13:10:39', NULL),
(171, 895, 129, 4, 0, 1, NULL, 'Testing Home Post', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-04-22 13:26:58', '2024-04-22 13:26:58', NULL),
(172, 896, 172, 4, 0, 1, NULL, 'Testing Home Post', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-04-22 13:28:37', '2024-04-22 13:28:37', NULL),
(173, 897, 129, 2, 0, 1, NULL, 'Testing MyCircle Post', NULL, NULL, 0, 0, 0, NULL, NULL, 1, '2024-04-22 13:29:51', '2024-04-22 13:29:51', NULL),
(174, 900, 187, 7, 1, 0, 'Review social', 'Social review post', NULL, '3', 0, 1, 0, '18.51901915020445', '73.77176206558943', 1, '2024-04-22 13:59:42', '2024-04-22 13:59:42', NULL),
(176, 904, 187, 3, 1, 0, 'my product', 'good product', 'www.myproduct.com', '4.5', 1, 1, 0, NULL, NULL, 1, '2024-04-23 04:47:29', '2024-04-23 04:47:29', NULL),
(177, 905, 187, 3, 1, 0, 'abc', 'abc', 'abc', '4', 1, 1, 0, NULL, NULL, 1, '2024-04-23 04:50:56', '2024-04-23 04:50:56', NULL),
(179, 907, 126, 3, 1, 0, 'xyz', 'xyz', 'xyz', '4', 0, 1, 0, NULL, NULL, 1, '2024-04-23 05:05:15', '2024-04-23 05:05:15', NULL),
(180, 908, 145, 3, 1, 0, 'sjjsjsjs', 'sksjdkd', 'ksisisis', '3.5', 0, 1, 0, NULL, NULL, 1, '2024-04-23 06:36:39', '2024-04-23 06:36:39', NULL),
(181, 909, 145, 1, 1, 0, 'jsjsjs', 'hshshshhs', 'hshhshs', '4', 0, 1, 0, NULL, NULL, 1, '2024-04-23 06:38:08', '2024-04-23 06:38:08', NULL),
(182, 910, 145, 3, 1, 0, 'jjsjs', 'sjsjjs', 'jsjs', '3', 0, 1, 0, NULL, NULL, 1, '2024-04-23 06:39:05', '2024-04-23 06:39:05', NULL),
(183, 911, 145, 3, 1, 0, 'mejejjejj', 'jejejeej', 'nenennen', '3.5', 0, 1, 0, NULL, NULL, 1, '2024-04-23 06:58:55', '2024-04-23 06:58:55', NULL),
(184, 914, 145, 3, 1, 0, 'jsjsjsjssj', 'shwhsehshs', '2jsshsshwhw', '3.5', 0, 1, 0, NULL, NULL, 1, '2024-04-23 07:25:44', '2024-04-23 07:25:44', NULL),
(185, 916, 145, 3, 1, 0, 'hdidj', 'dvwfw', 'sbsjsj', '3.5', 0, 1, 0, NULL, NULL, 1, '2024-04-23 07:38:53', '2024-04-23 07:38:53', NULL),
(186, 917, 145, 3, 1, 0, 'hVuc', 'ufucu', '7fuv', '4.5', 0, 1, 0, NULL, NULL, 1, '2024-04-23 07:42:14', '2024-04-23 07:42:14', NULL),
(187, 918, 130, 7, 0, 1, NULL, 'Testing Social Post', NULL, NULL, 0, 0, 0, '28.495285019657015', '77.09497980773449', 1, '2024-04-23 12:34:55', '2024-04-23 12:34:55', NULL),
(188, 919, 130, 7, 0, 1, NULL, 'Testing Social Post', NULL, NULL, 0, 0, 0, '28.490788418966577', '77.09285113960505', 1, '2024-04-23 12:42:56', '2024-04-23 12:42:56', NULL),
(189, 920, 130, 7, 0, 1, NULL, 'Testing Social Post', NULL, NULL, 0, 0, 0, '28.490763961178278', '77.0966712757945', 1, '2024-04-23 12:44:41', '2024-04-23 12:44:41', NULL),
(190, 921, 126, 7, 1, 0, 'abc', 'abc', 'abc', '4.5', 0, 1, 0, '18.5203995', '73.7720002', 1, '2024-04-24 05:01:58', '2024-04-24 05:01:58', NULL),
(191, 923, 146, 7, 1, 0, 'gusis', 'review social post without location', NULL, '2.5', 0, 1, 0, '18.52042', '73.7720089', 1, '2024-04-24 05:37:48', '2024-04-24 05:37:48', NULL),
(192, 927, 129, 7, 0, 1, NULL, 'Testing Social Post', NULL, NULL, 0, 0, 0, '28.4951973', '77.0933456', 1, '2024-04-24 06:29:24', '2024-04-24 06:29:24', NULL),
(193, 929, 182, 7, 0, 1, NULL, 'Social Post Testing', NULL, NULL, 0, 0, 0, '28.4937641', '77.0941627', 1, '2024-04-24 14:56:45', '2024-04-24 14:56:45', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `reviews_images`
--

CREATE TABLE `reviews_images` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reviews_images`
--

INSERT INTO `reviews_images` (`id`, `posts_id`, `image`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(50, 544, 'admin/home/review/6045images (5).jpeg', 1, '2024-03-05 17:44:16', '2024-03-05 17:44:16', NULL),
(52, 647, 'admin/home/review/4560mrousavy3045142720794540836.jpg', 1, '2024-03-09 05:20:44', '2024-03-09 05:20:44', NULL),
(55, 662, 'admin/home/review/2097Ahilya_Ghat_by_the_Ganges,_Varanasi.jpg', 1, '2024-03-09 13:30:01', '2024-03-09 13:30:01', NULL),
(56, 680, 'admin/home/review/4175IMG-20240312-WA0002.jpg', 1, '2024-03-13 04:26:41', '2024-03-13 04:26:41', NULL),
(57, 681, 'admin/home/review/2856Screenshot_20240310_064215.jpg', 1, '2024-03-13 04:29:04', '2024-03-13 04:29:04', NULL),
(58, 698, 'admin/home/review/8629images (14).jpeg', 1, '2024-03-13 07:44:56', '2024-03-13 07:44:56', NULL),
(59, 771, 'admin/home/review/491824847896.png', 1, '2024-03-19 06:20:28', '2024-03-19 06:20:28', NULL),
(60, 774, 'admin/home/review/8570IMG-20240319-WA0001.jpg', 1, '2024-03-19 06:46:45', '2024-03-19 06:46:45', NULL),
(61, 774, 'admin/home/review/1643IMG-20240319-WA0002.jpg', 1, '2024-03-19 06:46:45', '2024-03-19 06:46:45', NULL),
(62, 774, 'admin/home/review/6759IMG-20240319-WA0003.jpg', 1, '2024-03-19 06:46:45', '2024-03-19 06:46:45', NULL),
(63, 774, 'admin/home/review/0836IMG-20240319-WA0004.jpg', 1, '2024-03-19 06:46:45', '2024-03-19 06:46:45', NULL),
(64, 807, 'admin/home/review/8590IMG_20240331_090414.jpg', 1, '2024-03-31 03:34:44', '2024-03-31 03:34:44', NULL),
(65, 808, 'admin/home/review/3854IMG_20240331_090712.jpg', 1, '2024-03-31 03:38:37', '2024-03-31 03:38:37', NULL),
(66, 809, 'admin/home/review/0968Screenshot_20240331_091529.jpg', 1, '2024-03-31 03:46:13', '2024-03-31 03:46:13', NULL),
(67, 811, 'admin/home/review/0924IMG_20240331_093116.jpg', 1, '2024-03-31 04:03:31', '2024-03-31 04:03:31', NULL),
(68, 813, 'admin/home/review/2916Screenshot_20240331_095213.jpg', 1, '2024-03-31 04:23:06', '2024-03-31 04:23:06', NULL),
(69, 814, 'admin/home/review/9048Screenshot_20240331_114155.jpg', 1, '2024-03-31 06:13:50', '2024-03-31 06:13:50', NULL),
(70, 816, 'admin/home/review/3209rn_image_picker_lib_temp_eec1433f-3e34-403a-8f5b-83ffa998b8e6.jpg', 1, '2024-04-01 15:51:08', '2024-04-01 15:51:08', NULL),
(71, 817, 'admin/home/review/9417images (3).jpeg', 1, '2024-04-01 15:54:17', '2024-04-01 15:54:17', NULL),
(72, 827, 'admin/home/review/4213IMG_20240407_233506.jpg', 1, '2024-04-07 18:05:58', '2024-04-07 18:05:58', NULL),
(73, 828, 'public/admin/home/review/07291000062004.mp4', 1, '2024-04-11 15:17:14', '2024-04-11 15:17:14', NULL),
(74, 829, 'admin/home/review/4350Screenshot_20240411_224809.jpg', 1, '2024-04-11 17:23:56', '2024-04-11 17:23:56', NULL),
(75, 830, 'admin/home/review/7453Screenshot_20240412_003814.jpg', 1, '2024-04-11 19:10:27', '2024-04-11 19:10:27', NULL),
(76, 831, 'public/admin/home/review/79131000062211.mp4', 1, '2024-04-14 12:07:25', '2024-04-14 12:07:25', NULL),
(77, 858, 'admin/home/review/6831IMG-20240421-WA0000.jpg', 1, '2024-04-21 06:54:08', '2024-04-21 06:54:08', NULL),
(78, 858, 'admin/home/review/2173Screenshot_20240421_120828.jpg', 1, '2024-04-21 06:54:08', '2024-04-21 06:54:08', NULL),
(79, 867, 'admin/home/review/8164IMG_20240421_114931.jpg', 1, '2024-04-21 08:33:27', '2024-04-21 08:33:27', NULL),
(80, 904, 'admin/home/review/7192Screenshot_20240416-204319_One UI Home.jpg', 1, '2024-04-23 04:47:29', '2024-04-23 04:47:29', NULL),
(81, 905, 'admin/home/review/3017Screenshot_20240416-204319_One UI Home.jpg', 1, '2024-04-23 04:50:56', '2024-04-23 04:50:56', NULL),
(82, 918, 'admin/home/review/6958IMG-20240421-WA0000.jpg', 1, '2024-04-23 12:34:55', '2024-04-23 12:34:55', NULL),
(83, 919, 'admin/home/review/0984IMG_20240421_114931.jpg', 1, '2024-04-23 12:42:56', '2024-04-23 12:42:56', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `review_tags`
--

CREATE TABLE `review_tags` (
  `id` bigint UNSIGNED NOT NULL,
  `review_id` bigint UNSIGNED NOT NULL,
  `tag_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'web', '2023-12-06 09:45:55', '2023-12-06 09:45:55');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `saved_posts`
--

CREATE TABLE `saved_posts` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `saved_posts`
--

INSERT INTO `saved_posts` (`id`, `posts_id`, `user_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(28, 810, 159, 1, '2024-03-31 11:04:06', '2024-03-31 11:04:08', '2024-03-31 11:04:08');

-- --------------------------------------------------------

--
-- Table structure for table `save_messsages`
--

CREATE TABLE `save_messsages` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `friend_id` bigint UNSIGNED DEFAULT NULL,
  `count` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `seeks`
--

CREATE TABLE `seeks` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `where_to_post_id` bigint UNSIGNED NOT NULL,
  `review` tinyint(1) NOT NULL DEFAULT '0',
  `suggestion` tinyint(1) NOT NULL DEFAULT '0',
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `descriptionSecond` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `hyperLink` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `lat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `long` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `day_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `seeks`
--

INSERT INTO `seeks` (`id`, `posts_id`, `user_id`, `where_to_post_id`, `review`, `suggestion`, `description`, `descriptionSecond`, `hyperLink`, `status`, `lat`, `long`, `day_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(66, 550, 126, 4, 1, 0, 'seek home', NULL, NULL, 1, '18.5010536', '73.5137654', 5, '2024-03-06 07:30:18', '2024-03-06 07:30:18', NULL),
(67, 641, 129, 4, 1, 0, 'Laptop HP i7 8gb', 'bwhsjs jsjwbh2h', NULL, 1, NULL, NULL, 5, '2024-03-08 08:21:58', '2024-03-08 08:21:58', NULL),
(69, 654, 128, 2, 1, 0, 'Seek My Circle', NULL, NULL, 1, '18.5204228', '73.7720422', 5, '2024-03-09 07:18:31', '2024-03-09 07:18:31', NULL),
(70, 679, 130, 1, 1, 0, 'jf,utztizit', 'ogiyxoyxoy', NULL, 1, NULL, NULL, 1, '2024-03-12 14:28:33', '2024-03-12 14:28:33', NULL),
(71, 692, 128, 4, 1, 0, 'Seek home with location city', 'cc', 'ss', 1, '18.5204303', '73.8567437', 1, '2024-03-13 06:20:29', '2024-03-13 06:20:29', NULL),
(72, 701, 128, 4, 1, 0, 'current location', NULL, 'Seek home post', 1, '18.5204285', '73.7720533', 1, '2024-03-13 11:27:09', '2024-03-13 11:27:09', NULL),
(73, 723, 146, 4, 1, 0, 'Home seek post with location', '3 day', 'hui', 1, '18.521996715713705', '73.85423328727484', 5, '2024-03-15 04:46:44', '2024-03-15 04:46:44', NULL),
(74, 730, 146, 1, 1, 0, 'public seek post with city location match tag', 'vj', '3 day', 1, '18.5204303', '73.8567437', 5, '2024-03-15 05:44:12', '2024-03-15 05:44:12', NULL),
(75, 731, 146, 1, 1, 0, 'Public seek post with different tag City location', 'Three', 'day', 1, '18.5204303', '73.8567437', 5, '2024-03-15 05:46:02', '2024-03-15 05:46:02', NULL),
(76, 732, 146, 1, 1, 0, 'Seek post with match tag without location', 'three', 'daily', 1, NULL, NULL, 5, '2024-03-15 05:47:55', '2024-03-15 05:47:55', NULL),
(77, 733, 146, 1, 1, 0, 'Seek public post with different tag', 'three days', 'Without location', 1, NULL, NULL, 5, '2024-03-15 05:49:13', '2024-03-15 05:49:13', NULL),
(78, 737, 149, 4, 1, 0, 'hdjfiffi', 'description', 'iffii', 1, '18.5203992', '73.7720595', 1, '2024-03-15 12:37:23', '2024-03-15 12:37:23', NULL),
(79, 761, 130, 4, 0, 1, '8tzoyoy', '9yx8yz9yz', NULL, 1, NULL, NULL, 7, '2024-03-18 11:23:03', '2024-03-18 11:23:03', NULL),
(80, 794, 129, 4, 0, 1, 'thycrhbu', 'f byvgftv', NULL, 1, NULL, NULL, 5, '2024-03-19 13:57:33', '2024-03-19 13:57:33', NULL),
(82, 806, 172, 4, 0, 1, 'Sci-fi webseries in any language', 'I want to watch sci-fi webseries.', NULL, 1, NULL, NULL, 11, '2024-03-30 19:11:23', '2024-03-30 19:11:23', NULL),
(83, 812, 172, 4, 1, 0, 'Tillu Square Movie', 'I got mixed feelings while watching the trailer, Anyone who watched it, share your Reviews.       Note: Non Spoilers please 🥺', NULL, 1, NULL, NULL, 10, '2024-03-31 04:19:41', '2024-03-31 04:19:41', NULL),
(84, 820, 172, 7, 1, 0, 'yvyx u yvuvuv', NULL, NULL, 1, '28.4949762', '77.0895421', 7, '2024-04-03 14:57:16', '2024-04-03 14:57:16', NULL),
(85, 861, 182, 2, 1, 0, 'ufudidu', 'Testing', NULL, 1, NULL, NULL, 5, '2024-04-21 07:37:05', '2024-04-21 07:37:05', NULL),
(90, 870, 172, 1, 1, 0, 'hxydjxuzbx', 'Testing Public Post', NULL, 1, NULL, NULL, 5, '2024-04-21 10:21:39', '2024-04-21 10:21:39', NULL),
(91, 876, 187, 7, 1, 0, 'Social seek post', NULL, NULL, 1, '18.5204261', '73.7720033', 5, '2024-04-22 06:29:26', '2024-04-22 06:29:26', NULL),
(93, 885, 187, 3, 1, 0, 'Community post', NULL, NULL, 1, '18.5204268', '73.772013', 5, '2024-04-22 07:27:16', '2024-04-22 07:27:16', NULL),
(94, 887, 187, 2, 1, 0, 'My circle seek', 'Different tag', NULL, 1, NULL, NULL, 5, '2024-04-22 07:32:53', '2024-04-22 07:32:53', NULL),
(95, 901, 187, 7, 1, 0, 'Seek social', 'df', 'seek', 1, '18.522406818368655', '73.76890115439892', 5, '2024-04-22 14:01:13', '2024-04-22 14:01:13', NULL),
(96, 913, 145, 4, 1, 0, 'It\'s so helpful website', 'This is Google link please check it', 'www.google.com', 1, NULL, NULL, 1, '2024-04-23 07:21:57', '2024-04-23 07:21:57', NULL),
(97, 915, 145, 3, 1, 0, 'sbsb', 'sjjd', 'djhd', 1, NULL, NULL, 10, '2024-04-23 07:33:21', '2024-04-23 07:33:21', NULL),
(98, 922, 146, 7, 1, 0, 'Social post without location', NULL, NULL, 1, '18.5204184', '73.7720001', 5, '2024-04-24 05:34:47', '2024-04-24 05:34:47', NULL),
(99, 928, 146, 7, 1, 0, 'social meter check', NULL, NULL, 1, '18.523932773098107', '73.77035591751337', 5, '2024-04-24 07:49:40', '2024-04-24 07:49:40', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `seeks_images`
--

CREATE TABLE `seeks_images` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `seeks_images`
--

INSERT INTO `seeks_images` (`id`, `posts_id`, `image`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(39, 692, 'admin/home/seek/5132IMG-20240229-WA0004.jpg', 1, '2024-03-13 06:20:29', '2024-03-13 06:20:29', NULL),
(40, 701, 'admin/home/seek/4071images (15).jpeg', 1, '2024-03-13 11:27:09', '2024-03-13 11:27:09', NULL),
(42, 806, 'admin/home/seek/8125IMG_20240331_004026.jpg', 1, '2024-03-30 19:11:23', '2024-03-30 19:11:23', NULL),
(43, 812, 'admin/home/seek/5968Screenshot_20240331_094303.jpg', 1, '2024-03-31 04:19:41', '2024-03-31 04:19:41', NULL),
(44, 913, 'admin/home/seek/6783rn_image_picker_lib_temp_46060afd-caf4-4efa-913e-8bd8e5b6b9ca.jpg', 1, '2024-04-23 07:21:57', '2024-04-23 07:21:57', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `seek_tags`
--

CREATE TABLE `seek_tags` (
  `id` bigint UNSIGNED NOT NULL,
  `seek_id` bigint UNSIGNED NOT NULL,
  `tag_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shares`
--

CREATE TABLE `shares` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `shares`
--

INSERT INTO `shares` (`id`, `posts_id`, `user_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(9, 657, 128, 1, '2024-03-11 05:09:22', '2024-03-11 05:09:22', NULL),
(10, 654, 126, 1, '2024-03-11 13:04:07', '2024-03-11 13:04:07', NULL),
(11, 654, 126, 1, '2024-03-11 13:04:38', '2024-03-11 13:04:38', NULL),
(12, 669, 128, 1, '2024-03-11 13:14:06', '2024-03-11 13:14:06', NULL),
(13, 669, 128, 1, '2024-03-11 13:14:44', '2024-03-11 13:14:44', NULL),
(14, 658, 128, 1, '2024-03-11 14:02:14', '2024-03-11 14:02:14', NULL),
(15, 652, 128, 1, '2024-03-11 14:02:40', '2024-03-11 14:02:40', NULL),
(19, 674, 126, 1, '2024-03-11 14:14:04', '2024-03-11 14:14:04', NULL),
(20, 692, 146, 1, '2024-03-13 06:23:04', '2024-03-13 06:23:04', NULL),
(21, 692, 146, 1, '2024-03-13 06:23:35', '2024-03-13 06:23:35', NULL),
(22, 688, 146, 1, '2024-03-13 06:41:32', '2024-03-13 06:41:32', NULL),
(23, 694, 126, 1, '2024-03-13 07:27:36', '2024-03-13 07:27:36', NULL),
(24, 692, 126, 1, '2024-03-13 07:28:42', '2024-03-13 07:28:42', NULL),
(25, 658, 128, 1, '2024-03-13 07:31:13', '2024-03-13 07:31:13', NULL),
(26, 688, 128, 1, '2024-03-13 07:31:43', '2024-03-13 07:31:43', NULL),
(27, 694, 128, 1, '2024-03-13 07:32:04', '2024-03-13 07:32:04', NULL),
(28, 692, 126, 1, '2024-03-13 08:40:26', '2024-03-13 08:40:26', NULL),
(29, 688, 126, 1, '2024-03-13 08:41:31', '2024-03-13 08:41:31', NULL),
(30, 634, 126, 1, '2024-03-13 08:45:39', '2024-03-13 08:45:39', NULL),
(31, 681, 126, 1, '2024-03-13 08:47:03', '2024-03-13 08:47:03', NULL),
(32, 639, 129, 1, '2024-03-29 03:52:09', '2024-03-29 03:52:09', NULL),
(33, 796, 159, 1, '2024-03-29 12:08:02', '2024-03-29 12:08:02', NULL),
(34, 793, 159, 1, '2024-03-29 12:08:22', '2024-03-29 12:08:22', NULL),
(35, 827, 159, 1, '2024-04-10 13:08:00', '2024-04-10 13:08:00', NULL),
(36, 826, 159, 1, '2024-04-10 13:08:30', '2024-04-10 13:08:30', NULL),
(37, 832, 159, 1, '2024-04-18 13:41:06', '2024-04-18 13:41:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `share_post_comunnities`
--

CREATE TABLE `share_post_comunnities` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `community_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `share_post_comunnities`
--

INSERT INTO `share_post_comunnities` (`id`, `posts_id`, `community_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(42, 560, 35, 1, '2024-03-06 09:47:44', '2024-03-06 09:47:44', NULL),
(43, 753, 35, 1, '2024-03-15 13:24:47', '2024-03-15 13:24:47', NULL),
(44, 783, 35, 1, '2024-03-19 11:08:29', '2024-03-19 11:08:29', NULL),
(45, 867, 40, 1, '2024-04-21 08:33:27', '2024-04-21 08:33:27', NULL),
(46, 881, 43, 1, '2024-04-22 07:07:45', '2024-04-22 07:07:45', NULL),
(47, 882, 35, 1, '2024-04-22 07:18:19', '2024-04-22 07:18:19', NULL),
(48, 885, 43, 1, '2024-04-22 07:27:16', '2024-04-22 07:27:16', NULL),
(49, 886, 43, 1, '2024-04-22 07:31:16', '2024-04-22 07:31:16', NULL),
(50, 904, 43, 1, '2024-04-23 04:47:29', '2024-04-23 04:47:29', NULL),
(51, 905, 38, 1, '2024-04-23 04:50:56', '2024-04-23 04:50:56', NULL),
(52, 907, 35, 1, '2024-04-23 05:05:15', '2024-04-23 05:05:15', NULL),
(53, 908, 35, 1, '2024-04-23 06:36:39', '2024-04-23 06:36:39', NULL),
(54, 910, 35, 1, '2024-04-23 06:39:05', '2024-04-23 06:39:05', NULL),
(55, 911, 35, 1, '2024-04-23 06:58:55', '2024-04-23 06:58:55', NULL),
(56, 912, 35, 1, '2024-04-23 07:00:42', '2024-04-23 07:00:42', NULL),
(57, 914, 35, 1, '2024-04-23 07:25:44', '2024-04-23 07:25:44', NULL),
(58, 915, 35, 1, '2024-04-23 07:33:21', '2024-04-23 07:33:21', NULL),
(59, 916, 35, 1, '2024-04-23 07:38:53', '2024-04-23 07:38:53', NULL),
(60, 917, 35, 1, '2024-04-23 07:42:14', '2024-04-23 07:42:14', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `start_reviews`
--

CREATE TABLE `start_reviews` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `type` enum('star','bookMark') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'star',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `start_reviews`
--

INSERT INTO `start_reviews` (`id`, `user_id`, `posts_id`, `type`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(8, 128, 701, 'star', 1, '2024-03-13 12:05:16', '2024-03-13 12:05:16', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` bigint UNSIGNED NOT NULL,
  `country_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`id`, `country_id`, `name`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'Maharashtra', 1, '2023-12-06 10:21:41', '2023-12-16 04:47:28', '2023-12-16 04:47:28'),
(2, 1, 'UP', 1, '2023-12-06 10:21:51', '2023-12-16 04:45:14', '2023-12-16 04:45:14'),
(3, 1, 'Maharastra', 1, '2023-12-16 04:50:50', '2023-12-16 04:51:11', '2023-12-16 04:51:11'),
(4, 1, 'Maharashtra', 1, '2023-12-16 04:51:34', '2023-12-16 04:51:34', NULL),
(5, 1, 'Punjab', 1, '2023-12-16 04:51:49', '2023-12-16 04:53:05', NULL),
(6, 1, 'Haryana', 1, '2023-12-16 04:52:24', '2023-12-16 04:52:24', NULL),
(7, 2, 'Maharastra', 1, '2023-12-16 04:53:33', '2023-12-16 04:54:10', '2023-12-16 04:54:10'),
(8, 2, 'Argentina', 1, '2023-12-16 04:54:24', '2024-03-14 09:05:04', '2024-03-14 09:05:04'),
(9, 2, 'Maharasht', 1, '2023-12-16 04:54:36', '2023-12-16 04:54:40', '2023-12-16 04:54:40'),
(10, 3, 'los aligelis', 1, '2023-12-29 08:39:41', '2024-03-14 09:05:02', '2024-03-14 09:05:02'),
(11, 1, 'hgdhghdf', 1, '2023-12-29 12:55:35', '2024-03-14 09:04:58', '2024-03-14 09:04:58'),
(12, 1, 'Mp', 1, '2024-03-15 05:59:59', '2024-03-15 05:59:59', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `surveys`
--

CREATE TABLE `surveys` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `where_to_post_id` bigint UNSIGNED NOT NULL,
  `anonymous_survey` tinyint(1) NOT NULL DEFAULT '0',
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `hyperlink` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `lat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `long` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `day_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `experience_option` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `surveys`
--

INSERT INTO `surveys` (`id`, `posts_id`, `user_id`, `where_to_post_id`, `anonymous_survey`, `description`, `hyperlink`, `status`, `lat`, `long`, `day_id`, `created_at`, `updated_at`, `deleted_at`, `experience_option`) VALUES
(224, 537, 126, 1, 0, 'Survey public post\nfor match tag\n7 day', NULL, 1, '18.5953006', '73.7887222', 5, '2024-03-05 17:25:53', '2024-03-05 17:25:53', NULL, 0),
(225, 539, 126, 1, 0, 'Public survey post with different tag\n7 day', NULL, 1, '18.5953006', '73.7887222', 5, '2024-03-05 17:29:08', '2024-03-05 17:29:08', NULL, 0),
(226, 541, 126, 1, 0, 'HOME post survey with match tag\n7 day', NULL, 1, '18.595308', '73.7886817', 5, '2024-03-05 17:34:45', '2024-03-05 17:34:45', NULL, 0),
(227, 542, 126, 1, 0, 'Home survey post with different tag\n7 day', NULL, 1, '18.595308', '73.7886817', 5, '2024-03-05 17:35:50', '2024-03-05 17:35:50', NULL, 0),
(228, 545, 126, 1, 0, 'eysysu', 'hshhs', 1, '16.7049873', '74.24325270000001', 1, '2024-03-06 05:26:02', '2024-03-06 05:26:02', NULL, 0),
(229, 546, 128, 4, 0, 'Home post survey\n7 day\ndifferent tags \nwithout Surat location', NULL, 1, NULL, NULL, 5, '2024-03-06 05:55:36', '2024-03-06 05:55:36', NULL, 0),
(230, 547, 126, 4, 0, 'Home survey post with different tag\n7 day', NULL, 1, '21.1702401', '72.83106070000001', 5, '2024-03-06 06:02:21', '2024-03-06 06:02:21', NULL, 0),
(231, 548, 126, 1, 0, 'Public survey post with different tag\n7 day', NULL, 1, '21.1702401', '72.83106070000001', 5, '2024-03-06 06:04:32', '2024-03-06 06:04:32', NULL, 0),
(232, 549, 126, 1, 0, 'public survey post with match tag\n7 day', NULL, 1, '21.1702401', '72.83106070000001', 5, '2024-03-06 06:06:01', '2024-03-06 06:06:01', NULL, 0),
(233, 551, 126, 1, 0, 'Public survey post City location\nwith match tag\n7 day', NULL, 1, '18.5204303', '73.8567437', 5, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL, 0),
(234, 552, 126, 1, 0, 'public survey post with different tag\ncity\n7 day', NULL, 1, '18.5204303', '73.8567437', 5, '2024-03-06 09:20:24', '2024-03-06 09:20:24', NULL, 0),
(235, 553, 126, 4, 0, 'HOME survey post with city location', NULL, 1, '18.5204303', '73.8567437', 5, '2024-03-06 09:24:51', '2024-03-06 09:24:51', NULL, 0),
(236, 556, 126, 1, 0, 'Public survey post with different tag different location\none day', NULL, 1, NULL, NULL, 5, '2024-03-06 09:37:15', '2024-03-06 09:37:15', NULL, 0),
(237, 557, 126, 4, 0, 'Home survey post with different location\n7 day', NULL, 1, '25.3176452', '82.9739144', 5, '2024-03-06 09:40:31', '2024-03-06 09:40:31', NULL, 0),
(238, 560, 126, 3, 0, 'Community post', NULL, 1, '18.5204303', '73.8567437', 5, '2024-03-06 09:47:44', '2024-03-06 09:47:44', NULL, 0),
(239, 561, 126, 4, 0, 'Home survey post with small location', NULL, 1, '18.5314419', '73.8445617', 5, '2024-03-06 09:52:29', '2024-03-06 09:52:29', NULL, 0),
(240, 562, 126, 1, 0, 'Public survey post with different location and different tag', NULL, 1, '26.9124336', '75.7872709', 5, '2024-03-06 09:58:51', '2024-03-06 09:58:51', NULL, 0),
(241, 563, 126, 1, 0, 'Public survey post with different location match tag', NULL, 1, '26.9124336', '75.7872709', 5, '2024-03-06 10:01:21', '2024-03-06 10:01:21', NULL, 0),
(242, 564, 128, 4, 0, 'dyfyfy', 'uffu', 1, '16.5886465', '74.3085454', 1, '2024-03-06 11:35:00', '2024-03-06 11:35:00', NULL, 0),
(243, 565, 126, 4, 0, 'Home post', NULL, 1, '19.0759837', '72.8776559', 5, '2024-03-06 11:38:45', '2024-03-06 11:38:45', NULL, 0),
(244, 566, 129, 4, 0, 'yr,7r,6rz7rz7r,', NULL, 1, '28.4949762', '77.0895421', 5, '2024-03-06 13:44:12', '2024-03-06 13:44:12', NULL, 0),
(272, 601, 128, 4, 0, 'Testing', 'https://latitude.to/map/in/india/cities/pune', 1, '18.516726', '73.856255', 1, '2024-03-07 10:01:46', '2024-03-07 10:01:46', NULL, 0),
(274, 609, 126, 1, 0, NULL, NULL, 1, '19.0759837', '72.8776559', 5, '2024-03-07 13:44:41', '2024-03-07 13:44:41', NULL, 0),
(275, 612, 126, 1, 0, 'public survey post', NULL, 1, '18.6297811', '73.7997094', 5, '2024-03-08 03:17:59', '2024-03-08 03:17:59', NULL, 0),
(276, 613, 126, 1, 0, 'public survey post', NULL, 1, '18.6297811', '73.7997094', 5, '2024-03-08 03:18:00', '2024-03-08 03:18:00', NULL, 0),
(277, 614, 126, 1, 0, NULL, NULL, 1, '18.6297811', '73.7997094', 5, '2024-03-08 03:19:38', '2024-03-08 03:19:38', NULL, 0),
(278, 615, 128, 4, 0, NULL, NULL, 1, '18.5204303', '73.8567437', 1, '2024-03-08 04:26:39', '2024-03-08 04:26:39', NULL, 0),
(279, 616, 128, 4, 0, 'All images home', NULL, 1, '18.5204303', '73.8567437', 1, '2024-03-08 04:34:40', '2024-03-08 04:34:40', NULL, 0),
(294, 634, 128, 4, 0, 'Testing', 'https://latitude.to/map/in/india/cities/pune', 1, '18.516726', '73.856255', 1, '2024-03-08 05:40:11', '2024-03-08 05:40:11', NULL, 0),
(296, 636, 126, 4, 0, 'Home image', NULL, 1, '18.4529322', '73.86523799999999', 5, '2024-03-08 05:48:01', '2024-03-08 05:48:01', NULL, 0),
(297, 637, 126, 7, 0, 'fidd', NULL, 1, '18.515930578577176', '73.77265959978104', 1, '2024-03-08 05:50:52', '2024-03-08 05:50:52', NULL, 0),
(299, 649, 128, 1, 0, 'my circle', NULL, 1, '18.5204159', '73.7720659', 5, '2024-03-09 06:12:08', '2024-03-09 06:12:08', NULL, 0),
(300, 650, 128, 2, 0, 'ycgvhv', NULL, 1, NULL, NULL, 5, '2024-03-09 06:13:25', '2024-03-09 06:13:25', NULL, 0),
(301, 651, 126, 4, 0, 'hshdid', NULL, 1, '18.5204339', '73.7720251', 5, '2024-03-09 06:25:18', '2024-03-09 06:25:18', NULL, 0),
(302, 652, 126, 2, 0, 'my', NULL, 1, '18.5204345', '73.7720429', 5, '2024-03-09 06:30:31', '2024-03-09 06:30:31', NULL, 0),
(303, 655, 126, 1, 0, 'public survey post', NULL, 1, '18.5204303', '73.8567437', 7, '2024-03-09 07:26:54', '2024-03-09 07:26:54', NULL, 0),
(304, 656, 126, 4, 0, NULL, NULL, 1, '18.5314419', '73.8445617', 5, '2024-03-09 12:11:12', '2024-03-09 12:11:12', NULL, 0),
(305, 657, 126, 4, 0, 'home survey', NULL, 1, '18.5204303', '73.8567437', 7, '2024-03-09 12:23:25', '2024-03-09 12:23:25', NULL, 0),
(306, 658, 126, 2, 0, 'My circle with location', NULL, 1, '18.520424', '73.7720448', 7, '2024-03-09 12:24:41', '2024-03-09 12:24:41', NULL, 0),
(307, 663, 129, 4, 0, 'ejbs euzbsj eu', NULL, 1, NULL, NULL, 5, '2024-03-10 14:09:18', '2024-03-10 14:09:18', NULL, 0),
(308, 667, 143, 4, 0, 'Shivaji Nagar Pune survey post home', NULL, 1, '18.5314419', '73.8445617', 7, '2024-03-11 13:00:50', '2024-03-11 13:00:50', NULL, 0),
(309, 669, 143, 4, 0, 'Home survey post Pune', NULL, 1, '18.5204128', '73.7720456', 7, '2024-03-11 13:10:00', '2024-03-11 13:10:00', NULL, 0),
(310, 671, 143, 4, 0, 'Home survey post', 'Ayodhya', 1, '26.7921605', '82.1997954', 7, '2024-03-11 13:21:48', '2024-03-11 13:21:48', NULL, 0),
(311, 674, 128, 4, 0, 'Home Survey post city pune', NULL, 1, '18.5204303', '73.8567437', 7, '2024-03-11 13:44:34', '2024-03-11 13:44:34', NULL, 0),
(312, 675, 126, 1, 0, 'public survey post with match tag city', NULL, 1, '18.5204303', '73.8567437', 7, '2024-03-11 13:46:39', '2024-03-11 13:46:39', NULL, 0),
(313, 683, 143, 4, 0, 'Home survey post with different location\nIndore', NULL, 1, '22.7195687', '75.8577258', 5, '2024-03-13 05:46:16', '2024-03-13 05:46:16', NULL, 0),
(314, 685, 143, 1, 0, 'Public survey post with different location\nindore\nmatch tag', NULL, 1, '22.7195687', '75.8577258', 5, '2024-03-13 05:48:28', '2024-03-13 05:48:28', NULL, 0),
(315, 686, 143, 1, 0, 'public survey post with different tag\nindore', NULL, 1, '22.7195687', '75.8577258', 5, '2024-03-13 05:49:34', '2024-03-13 05:49:34', NULL, 0),
(316, 687, 143, 2, 0, 'Review My Circle without location', NULL, 1, NULL, NULL, 5, '2024-03-13 05:50:41', '2024-03-13 05:50:41', NULL, 0),
(317, 688, 128, 4, 0, 'Home survey post City location', NULL, 1, '18.5204303', '73.8567437', 5, '2024-03-13 06:16:16', '2024-03-13 06:16:16', NULL, 0),
(318, 689, 128, 1, 0, 'public survey post with city location\ndifferent tags', NULL, 1, '18.5204303', '73.8567437', 5, '2024-03-13 06:17:17', '2024-03-13 06:17:17', NULL, 0),
(319, 690, 128, 1, 0, 'public survey post with match tag city location', NULL, 1, '18.5204303', '73.8567437', 5, '2024-03-13 06:18:09', '2024-03-13 06:18:09', NULL, 0),
(320, 693, 126, 4, 0, 'Home survey post with perticular location in city', NULL, 1, '18.5194647', '73.8553175', 5, '2024-03-13 07:02:17', '2024-03-13 07:02:17', NULL, 0),
(321, 696, 128, 2, 0, 'My circle post with different tag in city', NULL, 1, '18.5204303', '73.8567437', 5, '2024-03-13 07:38:43', '2024-03-13 07:38:43', NULL, 0),
(322, 697, 128, 2, 0, 'My circle survey post with different tag', NULL, 1, '18.5204303', '73.8567437', 5, '2024-03-13 07:40:49', '2024-03-13 07:40:49', NULL, 0),
(323, 702, 128, 4, 0, 'Home survey post\n1', NULL, 1, '18.5204203', '73.7720379', 1, '2024-03-13 11:49:38', '2024-03-13 11:49:38', NULL, 0),
(324, 705, 126, 2, 0, 'My circle post with different tag \n1 day', NULL, 1, '18.5204306', '73.7720524', 1, '2024-03-13 12:26:40', '2024-03-13 12:26:40', NULL, 0),
(325, 706, 128, 4, 0, 'Home survey different location perticular\n1 day', NULL, 1, '19.01699', '72.8303997', 1, '2024-03-13 12:44:31', '2024-03-13 12:44:31', NULL, 0),
(326, 707, 126, 1, 0, 'Public survey post with different location perticular different tag 1day', NULL, 1, '19.9871235', '73.7969715', 1, '2024-03-13 12:51:42', '2024-03-13 12:51:42', NULL, 0),
(327, 709, 145, 4, 0, 'djdjddjdj', 'sujdjd', 1, '18.5204235', '73.7720415', 1, '2024-03-13 14:11:18', '2024-03-13 14:11:18', NULL, 0),
(328, 710, 145, 4, 0, 'ggg', 'hhh', 1, '18.5204142', '73.7720398', 1, '2024-03-13 14:47:25', '2024-03-13 14:47:25', NULL, 0),
(329, 712, 126, 4, 0, 'Without location Home survey post', NULL, 1, NULL, NULL, 1, '2024-03-14 05:02:22', '2024-03-14 05:02:22', NULL, 0),
(330, 714, 126, 4, 0, 'Home survey post without location\n1 day', NULL, 1, NULL, NULL, 1, '2024-03-14 09:28:08', '2024-03-14 09:28:08', NULL, 0),
(331, 716, 126, 1, 0, 'Public survey post without location match tag', NULL, 1, NULL, NULL, 1, '2024-03-14 09:32:44', '2024-03-14 09:32:44', NULL, 0),
(332, 718, 146, 4, 0, 'Home survey post without location', NULL, 1, NULL, NULL, 1, '2024-03-14 09:46:49', '2024-03-14 09:46:49', NULL, 0),
(333, 720, 146, 4, 0, 'Home survey post with location 3 day', NULL, 1, NULL, NULL, 5, '2024-03-15 04:39:03', '2024-03-15 04:39:03', NULL, 1),
(334, 726, 146, 1, 0, 'Public survey post with city location\nmatch tag\n3 day', 'vhhv', 1, '18.5204303', '73.8567437', 5, '2024-03-15 05:31:25', '2024-03-15 05:31:25', NULL, 0),
(335, 727, 146, 1, 0, 'Public survey post with match tag without location\n3 day', 'hh j', 1, NULL, NULL, 5, '2024-03-15 05:39:40', '2024-03-15 05:39:40', NULL, 0),
(336, 728, 146, 1, 0, 'Public survey post with different tag without location\n3 days', NULL, 1, NULL, NULL, 5, '2024-03-15 05:40:48', '2024-03-15 05:40:48', NULL, 0),
(337, 734, 126, 1, 0, 'public survey post with different tag current location', NULL, 1, '18.5204286', '73.772035', 1, '2024-03-15 06:30:04', '2024-03-15 06:30:04', NULL, 0),
(338, 738, 146, 4, 0, 'home survey post \ncheck description', NULL, 1, NULL, NULL, 1, '2024-03-15 12:39:55', '2024-03-15 12:39:55', NULL, 0),
(339, 739, 146, 1, 0, 'public survey post with different location different tags', 'kbkbkb', 1, '22.7195687', '75.8577258', 1, '2024-03-15 12:46:38', '2024-03-15 12:46:38', NULL, 0),
(340, 740, 128, 4, 0, 'Home survey post with perticular location', NULL, 1, '18.5424091', '73.8521981', 1, '2024-03-15 12:57:53', '2024-03-15 12:57:53', NULL, 0),
(341, 741, 149, 4, 0, 'Home survey post perticular location', NULL, 1, '18.4529322', '73.86523799999999', 1, '2024-03-15 13:02:43', '2024-03-15 13:02:43', NULL, 0),
(342, 742, 128, 1, 0, 'Public survey post with different tag', NULL, 1, '18.5204303', '73.8567437', 5, '2024-03-15 13:05:30', '2024-03-15 13:05:30', NULL, 0),
(343, 745, 126, 4, 0, 'review post with match tag Home', NULL, 1, NULL, NULL, 5, '2024-03-15 13:12:57', '2024-03-15 13:12:57', NULL, 0),
(344, 746, 126, 2, 0, 'My circle survey post with match tag', NULL, 1, NULL, NULL, 5, '2024-03-15 13:14:37', '2024-03-15 13:14:37', NULL, 0),
(350, 753, 128, 3, 0, 'community post survey without location', 'cvv', 1, NULL, NULL, 1, '2024-03-15 13:24:47', '2024-03-15 13:24:47', NULL, 0),
(351, 762, 126, 4, 1, 'Anonymous survey post with location \nhome', NULL, 1, '18.5204258', '73.7720269', 5, '2024-03-19 05:39:17', '2024-03-19 05:39:17', NULL, 0),
(352, 768, 128, 2, 0, 'My circle post with location', 'crcr', 1, '18.5204303', '73.8567437', 5, '2024-03-19 06:01:22', '2024-03-19 06:01:22', NULL, 0),
(353, 769, 126, 4, 0, 'option Home survey post', NULL, 1, '18.5204303', '73.8567437', 5, '2024-03-19 06:04:28', '2024-03-19 06:04:28', NULL, 0),
(354, 773, 146, 4, 0, 'Home survey post', NULL, 1, NULL, NULL, 5, '2024-03-19 06:26:36', '2024-03-19 06:26:36', NULL, 0),
(355, 781, 146, 4, 0, 'Perticular location in city home survey post', 'ghu 777', 1, '18.5204317', '73.7720239', 7, '2024-03-19 09:05:22', '2024-03-19 09:05:22', NULL, 0),
(356, 782, 146, 1, 0, 'perticular location in city public survey post with match tag', 'hhh77', 1, '18.5314419', '73.8445617', 7, '2024-03-19 09:06:35', '2024-03-19 09:06:35', NULL, 0),
(357, 783, 126, 3, 0, 'community post survey', NULL, 1, NULL, NULL, 5, '2024-03-19 11:08:29', '2024-03-19 11:08:29', NULL, 0),
(358, 785, 126, 4, 1, 'survey public post home', NULL, 1, NULL, NULL, 5, '2024-03-19 12:05:26', '2024-03-19 12:05:26', NULL, 0),
(359, 786, 126, 4, 1, 'home survey post', NULL, 1, NULL, NULL, 7, '2024-03-19 12:07:19', '2024-03-19 12:07:19', NULL, 0),
(360, 787, 126, 4, 0, 'Home post with different location dadar', 'ybyb Air port', 1, '19.098159712565547', '72.87522364407778', 7, '2024-03-19 12:18:53', '2024-03-19 12:18:53', NULL, 0),
(361, 788, 146, 1, 0, 'public survey post with different tag perticular location', NULL, 1, '18.5424091', '73.8521981', 7, '2024-03-19 12:48:51', '2024-03-19 12:48:51', NULL, 0),
(362, 790, 126, 4, 0, 'Home survey post', NULL, 1, '19.0759837', '72.8776559', 7, '2024-03-19 12:53:46', '2024-03-19 12:53:46', NULL, 0),
(363, 792, 126, 1, 0, 'public survey post with current location public post with match tag', NULL, 1, '18.5204309', '73.772001', 7, '2024-03-19 13:09:12', '2024-03-19 13:09:12', NULL, 0),
(364, 799, 171, 1, 1, 'what is the best food', NULL, 1, NULL, NULL, 5, '2024-03-30 14:46:11', '2024-03-30 14:46:11', NULL, 0),
(365, 804, 170, 4, 1, '2024 Elections', NULL, 1, NULL, NULL, 5, '2024-03-30 18:39:58', '2024-03-30 18:39:58', NULL, 1),
(366, 805, 172, 4, 0, 'This year elections are going to be more entertaining than IPL.', NULL, 1, NULL, NULL, 11, '2024-03-30 18:41:53', '2024-03-30 18:41:53', NULL, 0),
(367, 818, 172, 4, 0, 'Just wanted to know how easy it is to u to find features', NULL, 1, NULL, NULL, 11, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL, 0),
(368, 836, 187, 1, 0, 'public location post', NULL, 1, '13.0826802', '80.2707184', 7, '2024-04-18 07:33:32', '2024-04-18 07:33:32', NULL, 0),
(369, 838, 146, 1, 0, 'public survey post\ndifferent tag\nlocation different', NULL, 1, '8.0843512', '77.54950190000001', 5, '2024-04-18 12:39:15', '2024-04-18 12:39:15', NULL, 0),
(370, 841, 146, 1, 0, 'public location post', NULL, 1, '31.6318889', '76.4020704', 5, '2024-04-20 10:28:42', '2024-04-20 10:28:42', NULL, 0),
(371, 842, 146, 1, 0, 'location', NULL, 1, '18.5204202', '73.7720033', 5, '2024-04-20 10:32:48', '2024-04-20 10:32:48', NULL, 0),
(372, 843, 146, 7, 0, 'uccjc', NULL, 1, '18.52343302442369', '73.77375327050686', 7, '2024-04-20 11:05:36', '2024-04-20 11:05:36', NULL, 0),
(373, 844, 146, 4, 0, 'home', NULL, 1, '18.5441975', '73.87268279999999', 5, '2024-04-20 11:09:23', '2024-04-20 11:09:23', NULL, 0),
(374, 845, 146, 1, 0, 'public match tag', NULL, 1, '20.3899385', '78.1306846', 5, '2024-04-20 11:12:26', '2024-04-20 11:12:26', NULL, 0),
(375, 846, 146, 1, 0, 'pune public', NULL, 1, '18.5204303', '73.8567437', 5, '2024-04-20 11:13:32', '2024-04-20 11:13:32', NULL, 0),
(376, 847, 146, 1, 0, NULL, NULL, 1, '18.521316706120956', '73.7675342336297', 5, '2024-04-20 11:15:50', '2024-04-20 11:15:50', NULL, 0),
(377, 848, 146, 1, 0, 'public different tag', NULL, 1, '18.5204304', '73.7719991', 5, '2024-04-20 11:17:12', '2024-04-20 11:17:12', NULL, 0),
(378, 849, 146, 4, 0, 'home', NULL, 1, '21.1702401', '72.83106070000001', 5, '2024-04-20 11:22:29', '2024-04-20 11:22:29', NULL, 0),
(379, 850, 146, 4, 0, 'home different locations', NULL, 1, '29.947525341269806', '78.8256761804223', 5, '2024-04-20 11:37:51', '2024-04-20 11:37:51', NULL, 0),
(380, 851, 146, 2, 0, 'my circle', NULL, 1, '18.523301410980213', '73.77210069447756', 5, '2024-04-20 11:42:37', '2024-04-20 11:42:37', NULL, 0),
(381, 852, 145, 4, 0, 'home', NULL, 1, '18.5204303', '73.8567437', 5, '2024-04-20 11:56:09', '2024-04-20 11:56:09', NULL, 0),
(382, 853, 146, 4, 0, 'home goa', NULL, 1, '15.2993265', '74.12399599999999', 5, '2024-04-20 11:59:03', '2024-04-20 11:59:03', NULL, 0),
(383, 854, 145, 4, 0, 'home deli', NULL, 1, '18.5203904', '73.7720038', 5, '2024-04-20 12:00:42', '2024-04-20 12:00:42', NULL, 0),
(384, 855, 145, 4, 0, 'delu home', NULL, 1, '28.7040592', '77.10249019999999', 5, '2024-04-20 12:02:03', '2024-04-20 12:02:03', NULL, 0),
(385, 875, 187, 7, 0, 'social post', NULL, 1, '18.5204249', '73.7720015', 5, '2024-04-22 06:26:59', '2024-04-22 06:26:59', NULL, 0),
(386, 878, 146, 2, 0, 'my circle post survey', 'different tags', 1, NULL, NULL, 5, '2024-04-22 06:35:04', '2024-04-22 06:35:04', NULL, 0),
(387, 881, 187, 3, 0, 'Community post', NULL, 1, '18.532791307095977', '73.763827085495', 7, '2024-04-22 07:07:45', '2024-04-22 07:07:45', NULL, 0),
(388, 883, 146, 7, 0, 'Social post', 'hdhd', 1, '18.5204295', '73.7719978', 5, '2024-04-22 07:25:25', '2024-04-22 07:25:25', NULL, 0),
(389, 886, 146, 3, 0, 'testing', NULL, 1, '18.5204295', '73.7719978', 5, '2024-04-22 07:31:16', '2024-04-22 07:31:16', NULL, 0),
(390, 889, 187, 4, 0, 'home post with location', NULL, 1, '18.5204303', '73.8567437', 5, '2024-04-22 07:38:08', '2024-04-22 07:38:08', NULL, 0),
(391, 890, 187, 4, 0, 'home Survey with location', NULL, 1, '18.5204027', '73.7720019', 5, '2024-04-22 07:39:10', '2024-04-22 07:39:10', NULL, 0),
(392, 891, 187, 4, 0, 'Home post without location', NULL, 1, NULL, NULL, 7, '2024-04-22 07:40:05', '2024-04-22 07:40:05', NULL, 0),
(393, 893, 187, 4, 0, 'Home with different locations', NULL, 1, '19.0759837', '72.8776559', 7, '2024-04-22 07:53:57', '2024-04-22 07:53:57', NULL, 0),
(394, 898, 187, 7, 0, 'this is new one \nsocial post', 'this is new post', 1, '18.5203873', '73.7720033', 5, '2024-04-22 13:39:08', '2024-04-22 13:39:08', NULL, 0),
(395, 899, 187, 7, 0, 'Social poll post', NULL, 1, '18.521734122334482', '73.76846831291914', 5, '2024-04-22 13:58:12', '2024-04-22 13:58:12', NULL, 0),
(396, 902, 187, 7, 0, 'social post without location', NULL, 1, '18.523322074933358', '73.76906577497721', 5, '2024-04-22 14:05:32', '2024-04-22 14:05:32', NULL, 0),
(397, 912, 145, 3, 0, 'sjssjsjs', 'bsshshs', 1, NULL, NULL, 1, '2024-04-23 07:00:42', '2024-04-23 07:00:42', NULL, 0),
(398, 924, 146, 7, 0, 'Social Survey without location', NULL, 1, '18.5204201', '73.7719976', 5, '2024-04-24 05:50:13', '2024-04-24 05:50:13', NULL, 0),
(399, 926, 146, 4, 0, 'home Survey post without location', NULL, 1, NULL, NULL, 5, '2024-04-24 06:01:12', '2024-04-24 06:01:12', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `survey_ans`
--

CREATE TABLE `survey_ans` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `question_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `option_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `survey_ans`
--

INSERT INTO `survey_ans` (`id`, `posts_id`, `question_id`, `user_id`, `option_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(56, 561, 212, 128, 509, 1, '2024-03-06 10:19:52', '2024-03-06 10:19:52', NULL),
(57, 551, 206, 129, 495, 1, '2024-03-06 12:09:12', '2024-03-06 12:09:12', NULL),
(60, 566, 217, 142, 521, 1, '2024-03-08 17:19:38', '2024-03-08 17:19:38', NULL),
(61, 652, 275, 126, 602, 1, '2024-03-09 07:21:42', '2024-03-09 07:21:42', NULL),
(62, 658, 279, 128, 614, 1, '2024-03-09 12:32:57', '2024-03-09 12:32:57', NULL),
(63, 657, 278, 128, 611, 1, '2024-03-09 12:47:58', '2024-03-09 12:47:58', NULL),
(64, 658, 279, 143, 613, 1, '2024-03-09 12:55:16', '2024-03-09 12:55:16', NULL),
(65, 657, 278, 143, 610, 1, '2024-03-09 12:57:30', '2024-03-09 12:57:30', NULL),
(66, 634, 267, 143, 578, 1, '2024-03-09 13:02:17', '2024-03-09 13:02:17', NULL),
(67, 616, 252, 143, 570, 1, '2024-03-09 13:02:34', '2024-03-09 13:02:34', NULL),
(68, 658, 279, 126, 612, 1, '2024-03-09 13:11:37', '2024-03-09 13:11:37', NULL),
(69, 669, 282, 128, 621, 1, '2024-03-11 13:13:36', '2024-03-11 13:13:36', NULL),
(70, 674, 284, 143, 626, 1, '2024-03-13 05:32:13', '2024-03-13 05:32:13', NULL),
(71, 693, 293, 128, 645, 1, '2024-03-13 07:32:40', '2024-03-13 07:32:40', NULL),
(72, 541, 199, 128, 480, 1, '2024-03-13 11:14:22', '2024-03-13 11:14:22', NULL),
(73, 702, 296, 128, 651, 1, '2024-03-13 11:51:40', '2024-03-13 11:51:40', NULL),
(74, 667, 281, 128, 618, 1, '2024-03-13 12:06:21', '2024-03-13 12:06:21', NULL),
(75, 718, 305, 130, 670, 1, '2024-03-14 11:28:24', '2024-03-14 11:28:24', NULL),
(77, 769, 321, 146, 706, 1, '2024-03-19 06:05:00', '2024-03-19 06:05:00', NULL),
(78, 769, 321, 128, 706, 1, '2024-03-19 06:08:17', '2024-03-19 06:08:17', NULL),
(79, 769, 321, 126, 705, 1, '2024-03-19 06:10:20', '2024-03-19 06:10:20', NULL),
(80, 739, 312, 146, 685, 1, '2024-03-19 07:00:56', '2024-03-19 07:00:56', NULL),
(81, 783, 325, 146, 715, 1, '2024-03-19 11:10:13', '2024-03-19 11:10:13', NULL),
(82, 785, 326, 126, 716, 1, '2024-03-19 12:05:50', '2024-03-19 12:05:50', NULL),
(83, 785, 326, 126, 717, 1, '2024-03-19 12:05:50', '2024-03-19 12:05:50', NULL),
(84, 799, 332, 172, 730, 1, '2024-03-30 16:30:47', '2024-03-30 16:30:47', NULL),
(85, 804, 333, 170, 732, 1, '2024-03-30 18:41:16', '2024-03-30 18:41:16', NULL),
(86, 805, 334, 170, 735, 1, '2024-03-30 18:43:16', '2024-03-30 18:43:16', NULL),
(87, 799, 332, 171, 730, 1, '2024-03-31 16:16:12', '2024-03-31 16:16:12', NULL),
(88, 799, 332, 175, 730, 1, '2024-04-02 16:41:58', '2024-04-02 16:41:58', NULL),
(89, 805, 334, 175, 735, 1, '2024-04-02 16:42:55', '2024-04-02 16:42:55', NULL),
(90, 818, 335, 172, 739, 1, '2024-04-03 05:42:51', '2024-04-03 05:42:51', NULL),
(91, 818, 336, 172, 741, 1, '2024-04-03 05:42:51', '2024-04-03 05:42:51', NULL),
(92, 818, 335, 175, 736, 1, '2024-04-03 17:36:46', '2024-04-03 17:36:46', NULL),
(93, 818, 335, 175, 737, 1, '2024-04-03 17:36:46', '2024-04-03 17:36:46', NULL),
(94, 818, 335, 175, 738, 1, '2024-04-03 17:36:46', '2024-04-03 17:36:46', NULL),
(95, 818, 335, 175, 739, 1, '2024-04-03 17:36:46', '2024-04-03 17:36:46', NULL),
(96, 818, 335, 175, 740, 1, '2024-04-03 17:36:46', '2024-04-03 17:36:46', NULL),
(97, 818, 336, 175, 744, 1, '2024-04-03 17:36:46', '2024-04-03 17:36:46', NULL),
(98, 818, 335, 159, 740, 1, '2024-04-16 07:51:24', '2024-04-16 07:51:24', NULL),
(99, 818, 336, 159, 742, 1, '2024-04-16 07:51:24', '2024-04-16 07:51:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `survey_questions`
--

CREATE TABLE `survey_questions` (
  `id` bigint UNSIGNED NOT NULL,
  `survey_id` bigint UNSIGNED NOT NULL,
  `question` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `multi_option_select` tinyint(1) NOT NULL DEFAULT '0',
  `below_option` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `survey_questions`
--

INSERT INTO `survey_questions` (`id`, `survey_id`, `question`, `multi_option_select`, `below_option`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(197, 224, 'hhggg', 0, '0', 1, '2024-03-05 17:25:53', '2024-03-05 17:25:53', NULL),
(198, 225, 'hdhddudu', 0, '0', 1, '2024-03-05 17:29:08', '2024-03-05 17:29:08', NULL),
(199, 226, 'gxhxhd', 0, '0', 1, '2024-03-05 17:34:45', '2024-03-05 17:34:45', NULL),
(200, 227, 'bdjddu', 0, '0', 1, '2024-03-05 17:35:50', '2024-03-05 17:35:50', NULL),
(201, 228, 'hshshs', 0, '0', 1, '2024-03-06 05:26:02', '2024-03-06 05:26:02', NULL),
(202, 229, 'hcvhhv', 0, '0', 1, '2024-03-06 05:55:36', '2024-03-06 05:55:36', NULL),
(203, 230, 'vb h', 0, '0', 1, '2024-03-06 06:02:21', '2024-03-06 06:02:21', NULL),
(204, 231, 'vhcvikh', 0, '0', 1, '2024-03-06 06:04:32', '2024-03-06 06:04:32', NULL),
(205, 232, 'hcvhvhhv', 0, '0', 1, '2024-03-06 06:06:01', '2024-03-06 06:06:01', NULL),
(206, 233, 'jdjdjjd', 0, '0', 1, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL),
(207, 234, 'hdhdh', 0, '0', 1, '2024-03-06 09:20:24', '2024-03-06 09:20:24', NULL),
(208, 235, 'hzju', 0, '0', 1, '2024-03-06 09:24:51', '2024-03-06 09:24:51', NULL),
(209, 236, 'vvihh', 0, '0', 1, '2024-03-06 09:37:15', '2024-03-06 09:37:15', NULL),
(210, 237, 'xrxrfx', 0, '0', 1, '2024-03-06 09:40:31', '2024-03-06 09:40:31', NULL),
(211, 238, 'fyhfhg', 0, '0', 1, '2024-03-06 09:47:44', '2024-03-06 09:47:44', NULL),
(212, 239, 'hxjxj', 0, '0', 1, '2024-03-06 09:52:29', '2024-03-06 09:52:29', NULL),
(213, 240, 'gc hh', 0, '0', 1, '2024-03-06 09:58:51', '2024-03-06 09:58:51', NULL),
(214, 241, 'vhhvvjb', 0, '0', 1, '2024-03-06 10:01:21', '2024-03-06 10:01:21', NULL),
(215, 242, 'fufufu', 0, '0', 1, '2024-03-06 11:35:00', '2024-03-06 11:35:00', NULL),
(216, 243, 'jzxjj', 0, '0', 1, '2024-03-06 11:38:45', '2024-03-06 11:38:45', NULL),
(217, 244, 'veheue  ehshev', 0, '0', 1, '2024-03-06 13:44:12', '2024-03-06 13:44:12', NULL),
(245, 272, 'Its latitude and longitude is correct', 0, '0', 1, '2024-03-07 10:01:46', '2024-03-07 10:01:46', NULL),
(247, 274, 'New question', 0, '0', 1, '2024-03-07 13:44:41', '2024-03-07 13:44:41', NULL),
(248, 275, 'vuughcgujv', 0, '0', 1, '2024-03-08 03:17:59', '2024-03-08 03:17:59', NULL),
(249, 276, 'vuughcgujv', 0, '0', 1, '2024-03-08 03:18:00', '2024-03-08 03:18:00', NULL),
(250, 277, 'public with image', 0, '0', 1, '2024-03-08 03:19:38', '2024-03-08 03:19:38', NULL),
(251, 278, 'Home post with image', 0, '0', 1, '2024-03-08 04:26:39', '2024-03-08 04:26:39', NULL),
(252, 279, 'jxjxkj', 0, '0', 1, '2024-03-08 04:34:40', '2024-03-08 04:34:40', NULL),
(267, 294, 'Its latitude and longitude is correct', 0, '0', 1, '2024-03-08 05:40:11', '2024-03-08 05:40:11', NULL),
(269, 296, 'hhcjg', 0, '0', 1, '2024-03-08 05:48:01', '2024-03-08 05:48:01', NULL),
(270, 297, 'vkv', 0, '0', 1, '2024-03-08 05:50:52', '2024-03-08 05:50:52', NULL),
(272, 299, 'g hvvuvuv', 0, '0', 1, '2024-03-09 06:12:08', '2024-03-09 06:12:08', NULL),
(273, 300, 'My circle', 0, '0', 1, '2024-03-09 06:13:25', '2024-03-09 06:13:25', NULL),
(274, 301, 'My friend', 0, '0', 1, '2024-03-09 06:25:18', '2024-03-09 06:25:18', NULL),
(275, 302, 'my circle', 0, '0', 1, '2024-03-09 06:30:31', '2024-03-09 06:30:31', NULL),
(276, 303, 'xghjgj', 0, '0', 1, '2024-03-09 07:26:54', '2024-03-09 07:26:54', NULL),
(277, 304, 'Multi select', 0, '0', 1, '2024-03-09 12:11:12', '2024-03-09 12:11:12', NULL),
(278, 305, 'Pune location Survey post', 1, '0', 1, '2024-03-09 12:23:25', '2024-03-09 12:23:25', NULL),
(279, 306, 'hdjduu', 0, '0', 1, '2024-03-09 12:24:41', '2024-03-09 12:24:41', NULL),
(280, 307, 'ehhz eus sjus', 0, '0', 1, '2024-03-10 14:09:18', '2024-03-10 14:09:18', NULL),
(281, 308, 'fxfxc', 0, '0', 1, '2024-03-11 13:00:50', '2024-03-11 13:00:50', NULL),
(282, 309, 'xgh hh n', 0, '0', 1, '2024-03-11 13:10:00', '2024-03-11 13:10:00', NULL),
(283, 310, 'bcncvj', 0, '0', 1, '2024-03-11 13:21:48', '2024-03-11 13:21:48', NULL),
(284, 311, 'hchvvuu', 0, '0', 1, '2024-03-11 13:44:34', '2024-03-11 13:44:34', NULL),
(285, 312, 'uu', 0, '0', 1, '2024-03-11 13:46:39', '2024-03-11 13:46:39', NULL),
(286, 313, 'bbn', 0, '0', 1, '2024-03-13 05:46:16', '2024-03-13 05:46:16', NULL),
(287, 314, 'bbb', 0, '0', 1, '2024-03-13 05:48:28', '2024-03-13 05:48:28', NULL),
(288, 315, 'hjjj', 0, '0', 1, '2024-03-13 05:49:34', '2024-03-13 05:49:34', NULL),
(289, 316, 'hhj', 0, '0', 1, '2024-03-13 05:50:41', '2024-03-13 05:50:41', NULL),
(290, 317, 'hchv', 0, '0', 1, '2024-03-13 06:16:16', '2024-03-13 06:16:16', NULL),
(291, 318, 'g. hh', 0, '0', 1, '2024-03-13 06:17:17', '2024-03-13 06:17:17', NULL),
(292, 319, 'xgcggcgc', 0, '0', 1, '2024-03-13 06:18:09', '2024-03-13 06:18:09', NULL),
(293, 320, 'hzhzjj', 0, '0', 1, '2024-03-13 07:02:17', '2024-03-13 07:02:17', NULL),
(294, 321, 'hjj', 0, '0', 1, '2024-03-13 07:38:43', '2024-03-13 07:38:43', NULL),
(295, 322, 'vbh', 0, '0', 1, '2024-03-13 07:40:49', '2024-03-13 07:40:49', NULL),
(296, 323, 'hhh', 0, '0', 1, '2024-03-13 11:49:38', '2024-03-13 11:49:38', NULL),
(297, 324, 'hjh', 0, '0', 1, '2024-03-13 12:26:40', '2024-03-13 12:26:40', NULL),
(298, 325, 'chhj', 0, '0', 1, '2024-03-13 12:44:31', '2024-03-13 12:44:31', NULL),
(299, 326, 'txtxfx', 0, '0', 1, '2024-03-13 12:51:42', '2024-03-13 12:51:42', NULL),
(300, 327, 'nsbdbdbbd', 0, '0', 1, '2024-03-13 14:11:18', '2024-03-13 14:11:18', NULL),
(301, 328, 'vgh', 0, '0', 1, '2024-03-13 14:47:25', '2024-03-13 14:47:25', NULL),
(302, 329, '1 day', 0, '0', 1, '2024-03-14 05:02:22', '2024-03-14 05:02:22', NULL),
(303, 330, 'bhhh', 0, '0', 1, '2024-03-14 09:28:08', '2024-03-14 09:28:08', NULL),
(304, 331, 'hhh', 0, '0', 1, '2024-03-14 09:32:44', '2024-03-14 09:32:44', NULL),
(305, 332, 'hhkb', 0, '0', 1, '2024-03-14 09:46:49', '2024-03-14 09:46:49', NULL),
(306, 333, 'hhhh', 1, '0', 1, '2024-03-15 04:39:03', '2024-03-15 04:39:03', NULL),
(307, 334, 'vuhc', 0, '0', 1, '2024-03-15 05:31:25', '2024-03-15 05:31:25', NULL),
(308, 335, 'cyhv', 0, '0', 1, '2024-03-15 05:39:40', '2024-03-15 05:39:40', NULL),
(309, 336, 'vhvjvuvuv', 0, '0', 1, '2024-03-15 05:40:48', '2024-03-15 05:40:48', NULL),
(310, 337, 'hch', 0, '0', 1, '2024-03-15 06:30:04', '2024-03-15 06:30:04', NULL),
(311, 338, 'bhgg', 0, '0', 1, '2024-03-15 12:39:55', '2024-03-15 12:39:55', NULL),
(312, 339, 'hvvhvu', 0, '0', 1, '2024-03-15 12:46:38', '2024-03-15 12:46:38', NULL),
(313, 340, 'hcvvi', 0, '0', 1, '2024-03-15 12:57:53', '2024-03-15 12:57:53', NULL),
(314, 341, 'hhhh', 0, '0', 1, '2024-03-15 13:02:43', '2024-03-15 13:02:43', NULL),
(315, 342, 'jxjxjd', 0, '0', 1, '2024-03-15 13:05:30', '2024-03-15 13:05:30', NULL),
(316, 343, 'vuvhvv', 0, '0', 1, '2024-03-15 13:12:57', '2024-03-15 13:12:57', NULL),
(317, 344, 'j j', 0, '0', 1, '2024-03-15 13:14:37', '2024-03-15 13:14:37', NULL),
(318, 350, 'bbhh', 0, '0', 1, '2024-03-15 13:24:47', '2024-03-15 13:24:47', NULL),
(319, 351, 'cggvh', 0, '0', 1, '2024-03-19 05:39:17', '2024-03-19 05:39:17', NULL),
(320, 352, 'vv hh', 0, '0', 1, '2024-03-19 06:01:22', '2024-03-19 06:01:22', NULL),
(321, 353, 'gbbt', 0, '1', 1, '2024-03-19 06:04:28', '2024-03-19 06:04:28', NULL),
(322, 354, 'vtyvg', 0, '0', 1, '2024-03-19 06:26:36', '2024-03-19 06:26:36', NULL),
(323, 355, 'bhj', 0, '0', 1, '2024-03-19 09:05:22', '2024-03-19 09:05:22', NULL),
(324, 356, 'bbb', 0, '0', 1, '2024-03-19 09:06:35', '2024-03-19 09:06:35', NULL),
(325, 357, 'tbbyunyb', 0, '0', 1, '2024-03-19 11:08:29', '2024-03-19 11:08:29', NULL),
(326, 358, 'dfctv', 1, '0', 1, '2024-03-19 12:05:26', '2024-03-19 12:05:26', NULL),
(327, 359, 'dctv', 0, '0', 1, '2024-03-19 12:07:19', '2024-03-19 12:07:19', NULL),
(328, 360, 'j. j', 0, '0', 1, '2024-03-19 12:18:53', '2024-03-19 12:18:53', NULL),
(329, 361, 'Pune', 0, '0', 1, '2024-03-19 12:48:51', '2024-03-19 12:48:51', NULL),
(330, 362, 'dcfvt', 0, '0', 1, '2024-03-19 12:53:46', '2024-03-19 12:53:46', NULL),
(331, 363, 'ndjsj', 0, '0', 1, '2024-03-19 13:09:12', '2024-03-19 13:09:12', NULL),
(332, 364, 'what is the best food', 0, '0', 1, '2024-03-30 14:46:11', '2024-03-30 14:46:11', NULL),
(333, 365, 'which party will get the majority in upcoming elections', 0, '0', 1, '2024-03-30 18:39:58', '2024-03-30 18:39:58', NULL),
(334, 366, 'Which party is going to Win?', 0, '0', 1, '2024-03-30 18:41:53', '2024-03-30 18:41:53', NULL),
(335, 367, 'Has anyone Used the Chatting feature yet?', 1, '1', 1, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL),
(336, 367, 'Has anyone discovered the \"Discovered by\" in Map after searching any location in Social Tab', 0, '1', 1, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL),
(337, 368, 'public location post', 0, '0', 1, '2024-04-18 07:33:32', '2024-04-18 07:33:32', NULL),
(338, 369, 'bbshssj', 0, '0', 1, '2024-04-18 12:39:15', '2024-04-18 12:39:15', NULL),
(339, 370, 'nskxks', 0, '0', 1, '2024-04-20 10:28:42', '2024-04-20 10:28:42', NULL),
(340, 371, 'bbb', 0, '0', 1, '2024-04-20 10:32:48', '2024-04-20 10:32:48', NULL),
(341, 372, 'hvvh', 0, '0', 1, '2024-04-20 11:05:36', '2024-04-20 11:05:36', NULL),
(342, 373, 'bhg', 0, '0', 1, '2024-04-20 11:09:23', '2024-04-20 11:09:23', NULL),
(343, 374, 'bhhbbb', 0, '0', 1, '2024-04-20 11:12:26', '2024-04-20 11:12:26', NULL),
(344, 375, 'nnn', 0, '0', 1, '2024-04-20 11:13:32', '2024-04-20 11:13:32', NULL),
(345, 376, 'bhu', 0, '0', 1, '2024-04-20 11:15:50', '2024-04-20 11:15:50', NULL),
(346, 377, 'hjj', 0, '0', 1, '2024-04-20 11:17:12', '2024-04-20 11:17:12', NULL),
(347, 378, 'hjj', 0, '0', 1, '2024-04-20 11:22:29', '2024-04-20 11:22:29', NULL),
(348, 379, 'hssusu', 0, '0', 1, '2024-04-20 11:37:51', '2024-04-20 11:37:51', NULL),
(349, 380, 'hxjj', 0, '0', 1, '2024-04-20 11:42:37', '2024-04-20 11:42:37', NULL),
(350, 381, 'yssy', 0, '0', 1, '2024-04-20 11:56:09', '2024-04-20 11:56:09', NULL),
(351, 382, 'hhj', 0, '0', 1, '2024-04-20 11:59:03', '2024-04-20 11:59:03', NULL),
(352, 383, 'cjci', 0, '0', 1, '2024-04-20 12:00:42', '2024-04-20 12:00:42', NULL),
(353, 384, 'dhfh', 0, '0', 1, '2024-04-20 12:02:03', '2024-04-20 12:02:03', NULL),
(354, 385, 'jcvjgi', 0, '0', 1, '2024-04-22 06:26:59', '2024-04-22 06:26:59', NULL),
(355, 386, 'gc h b', 0, '0', 1, '2024-04-22 06:35:04', '2024-04-22 06:35:04', NULL),
(356, 387, 'hcvj', 0, '0', 1, '2024-04-22 07:07:45', '2024-04-22 07:07:45', NULL),
(357, 388, 'jjsjdk', 0, '0', 1, '2024-04-22 07:25:25', '2024-04-22 07:25:25', NULL),
(358, 389, 'h bun', 0, '0', 1, '2024-04-22 07:31:16', '2024-04-22 07:31:16', NULL),
(359, 390, 'bhv', 0, '0', 1, '2024-04-22 07:38:08', '2024-04-22 07:38:08', NULL),
(360, 391, 'ghghhh', 0, '0', 1, '2024-04-22 07:39:10', '2024-04-22 07:39:10', NULL),
(361, 392, 'chhvvh', 0, '0', 1, '2024-04-22 07:40:05', '2024-04-22 07:40:05', NULL),
(362, 393, 'jbbjkb', 0, '0', 1, '2024-04-22 07:53:57', '2024-04-22 07:53:57', NULL),
(363, 394, 'ghjhh', 0, '0', 1, '2024-04-22 13:39:08', '2024-04-22 13:39:08', NULL),
(364, 395, 'jvvjvj', 0, '0', 1, '2024-04-22 13:58:12', '2024-04-22 13:58:12', NULL),
(365, 396, 'jbjbjg', 0, '0', 1, '2024-04-22 14:05:32', '2024-04-22 14:05:32', NULL),
(366, 397, 'is good', 0, '0', 1, '2024-04-23 07:00:42', '2024-04-23 07:00:42', NULL),
(367, 398, 'hvhuhi', 0, '0', 1, '2024-04-24 05:50:13', '2024-04-24 05:50:13', NULL),
(368, 399, 'bsbnsj', 0, '0', 1, '2024-04-24 06:01:12', '2024-04-24 06:01:12', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `survey_questions_images`
--

CREATE TABLE `survey_questions_images` (
  `id` bigint UNSIGNED NOT NULL,
  `survey_question_id` bigint UNSIGNED NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `survey_questions_images`
--

INSERT INTO `survey_questions_images` (`id`, `survey_question_id`, `image`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(326, 197, 'admin/home/surveyQuestion/3750images (2).jpeg', 1, '2024-03-05 17:25:53', '2024-03-05 17:25:53', NULL),
(327, 198, 'admin/home/surveyQuestion/3015images.jpeg', 1, '2024-03-05 17:29:08', '2024-03-05 17:29:08', NULL),
(328, 199, 'admin/home/surveyQuestion/3598images (6).jpeg', 1, '2024-03-05 17:34:45', '2024-03-05 17:34:45', NULL),
(329, 200, 'admin/home/surveyQuestion/9504images (3).jpeg', 1, '2024-03-05 17:35:50', '2024-03-05 17:35:50', NULL),
(330, 201, 'admin/home/surveyQuestion/1827IMG_20240304_233649.jpg', 1, '2024-03-06 05:26:02', '2024-03-06 05:26:02', NULL),
(331, 201, 'admin/home/surveyQuestion/4270IMG_20240304_233655.jpg', 1, '2024-03-06 05:26:02', '2024-03-06 05:26:02', NULL),
(332, 201, 'admin/home/surveyQuestion/7392IMG_20240304_233726.jpg', 1, '2024-03-06 05:26:02', '2024-03-06 05:26:02', NULL),
(333, 202, 'admin/home/surveyQuestion/9160i.jpeg', 1, '2024-03-06 05:55:36', '2024-03-06 05:55:36', NULL),
(334, 203, 'admin/home/surveyQuestion/8370images (2).jpeg', 1, '2024-03-06 06:02:21', '2024-03-06 06:02:21', NULL),
(335, 204, 'admin/home/surveyQuestion/5786images.jpeg', 1, '2024-03-06 06:04:32', '2024-03-06 06:04:32', NULL),
(336, 205, 'admin/home/surveyQuestion/2963Staff Selection Advt..PNG', 1, '2024-03-06 06:06:01', '2024-03-06 06:06:01', NULL),
(337, 206, 'admin/home/surveyQuestion/3167images (10).jpeg', 1, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL),
(338, 207, 'admin/home/surveyQuestion/1205images (11).jpeg', 1, '2024-03-06 09:20:24', '2024-03-06 09:20:24', NULL),
(339, 208, 'admin/home/surveyQuestion/3856images (12).jpeg', 1, '2024-03-06 09:24:51', '2024-03-06 09:24:51', NULL),
(340, 209, 'admin/home/surveyQuestion/9783images (13).jpeg', 1, '2024-03-06 09:37:15', '2024-03-06 09:37:15', NULL),
(341, 210, 'admin/home/surveyQuestion/5064images (14).jpeg', 1, '2024-03-06 09:40:31', '2024-03-06 09:40:31', NULL),
(342, 211, 'admin/home/surveyQuestion/1349images.jpeg', 1, '2024-03-06 09:47:44', '2024-03-06 09:47:44', NULL),
(343, 212, 'admin/home/surveyQuestion/0248images (7).jpeg', 1, '2024-03-06 09:52:29', '2024-03-06 09:52:29', NULL),
(344, 213, 'admin/home/surveyQuestion/6208images (6).jpeg', 1, '2024-03-06 09:58:51', '2024-03-06 09:58:51', NULL),
(345, 214, 'admin/home/surveyQuestion/1950images (14).jpeg', 1, '2024-03-06 10:01:21', '2024-03-06 10:01:21', NULL),
(346, 215, 'admin/home/surveyQuestion/0936luca-david-HjXbVnnITvE-unsplash.jpg', 1, '2024-03-06 11:35:00', '2024-03-06 11:35:00', NULL),
(347, 216, 'admin/home/surveyQuestion/1625images (15).jpeg', 1, '2024-03-06 11:38:45', '2024-03-06 11:38:45', NULL),
(348, 217, 'admin/home/surveyQuestion/5829bird-10648.gif', 1, '2024-03-06 13:44:12', '2024-03-06 13:44:12', NULL),
(349, 217, 'admin/home/surveyQuestion/6054null-20240302-WA0002.jpg', 1, '2024-03-06 13:44:12', '2024-03-06 13:44:12', NULL),
(352, 267, 'admin/home/surveyQuestion/9287luca-david-HjXbVnnITvE-unsplash.jpg', 1, '2024-03-08 05:40:11', '2024-03-08 05:40:11', NULL),
(353, 267, 'admin/home/surveyQuestion/2485luca-david-HjXbVnnITvE-unsplash.jpg', 1, '2024-03-08 05:40:11', '2024-03-08 05:40:11', NULL),
(357, 269, 'admin/home/surveyQuestion/7894IMG-20240308-WA0001.jpg', 1, '2024-03-08 05:48:01', '2024-03-08 05:48:01', NULL),
(360, 288, 'admin/home/surveyQuestion/9614Staff Selection Advt..PNG', 1, '2024-03-13 05:49:34', '2024-03-13 05:49:34', NULL),
(361, 289, 'admin/home/surveyQuestion/2137IMG-20240308-WA0001.jpg', 1, '2024-03-13 05:50:41', '2024-03-13 05:50:41', NULL),
(362, 290, 'admin/home/surveyQuestion/4978images (10).jpeg', 1, '2024-03-13 06:16:16', '2024-03-13 06:16:16', NULL),
(363, 293, 'admin/home/surveyQuestion/1495images (12).jpeg', 1, '2024-03-13 07:02:17', '2024-03-13 07:02:17', NULL),
(364, 298, 'admin/home/surveyQuestion/0831Screenshot_2024-03-13-18-13-19-287_com.google.android.apps.maps.jpg', 1, '2024-03-13 12:44:31', '2024-03-13 12:44:31', NULL),
(365, 303, 'admin/home/surveyQuestion/6493Screenshot_2024-03-13-18-47-16-728_com.google.android.apps.maps.jpg', 1, '2024-03-14 09:28:08', '2024-03-14 09:28:08', NULL),
(366, 313, 'admin/home/surveyQuestion/1239images.jpeg', 1, '2024-03-15 12:57:53', '2024-03-15 12:57:53', NULL),
(367, 326, 'admin/home/surveyQuestion/5842images (10).jpeg', 1, '2024-03-19 12:05:26', '2024-03-19 12:05:26', NULL),
(368, 327, 'admin/home/surveyQuestion/8167IMG-20240308-WA0002.jpg', 1, '2024-03-19 12:07:19', '2024-03-19 12:07:19', NULL),
(369, 329, 'admin/home/surveyQuestion/8273images.jpeg', 1, '2024-03-19 12:48:51', '2024-03-19 12:48:51', NULL),
(370, 334, 'admin/home/surveyQuestion/8570stock-vector-indian-general-election-with-inked-finger-and-evm-machine-concept-vector-illustration-2426829803.jpg', 1, '2024-03-30 18:41:53', '2024-03-30 18:41:53', NULL),
(371, 337, 'admin/home/surveyQuestion/84071711967171479.jpg', 1, '2024-04-18 07:33:32', '2024-04-18 07:33:32', NULL),
(372, 338, 'admin/home/surveyQuestion/9084Screenshot_20240416-204319_One UI Home.jpg', 1, '2024-04-18 12:39:15', '2024-04-18 12:39:15', NULL),
(373, 339, 'admin/home/surveyQuestion/41281711967024885.jpg', 1, '2024-04-20 10:28:42', '2024-04-20 10:28:42', NULL),
(374, 366, 'admin/home/surveyQuestion/5901Screenshot_20240330_121255.jpg', 1, '2024-04-23 07:00:42', '2024-04-23 07:00:42', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `survey_questions_options`
--

CREATE TABLE `survey_questions_options` (
  `id` bigint UNSIGNED NOT NULL,
  `survey_question_id` bigint UNSIGNED NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `options` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `survey_questions_options`
--

INSERT INTO `survey_questions_options` (`id`, `survey_question_id`, `image`, `options`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(475, 197, 'admin/home/surveyOption/9561IMG-20240229-WA0002.jpg', 'vbg', 1, '2024-03-05 17:25:53', '2024-03-05 17:25:53', NULL),
(476, 197, 'admin/home/surveyOption/6342IMG-20240229-WA0000.jpg', 'vgg', 1, '2024-03-05 17:25:53', '2024-03-05 17:25:53', NULL),
(477, 198, 'admin/home/surveyOption/2580IMG-20240229-WA0003.jpg', 'vbv', 1, '2024-03-05 17:29:08', '2024-03-05 17:29:08', NULL),
(478, 198, 'admin/home/surveyOption/1503IMG-20240229-WA0000.jpg', 'vvv', 1, '2024-03-05 17:29:08', '2024-03-05 17:29:08', NULL),
(479, 199, 'admin/home/surveyOption/7350IMG-20240229-WA0004.jpg', 'hddhd', 1, '2024-03-05 17:34:45', '2024-03-05 17:34:45', NULL),
(480, 199, 'admin/home/surveyOption/3218Screenshot_2024-03-03-07-57-40-951_com.google.android.apps.adm.jpg', 'dhdh', 1, '2024-03-05 17:34:45', '2024-03-05 17:34:45', NULL),
(481, 200, 'admin/home/surveyOption/3910i.jpeg', 'hhh', 1, '2024-03-05 17:35:50', '2024-03-05 17:35:50', NULL),
(482, 200, 'admin/home/surveyOption/3296images (3).jpeg', 'hhh', 1, '2024-03-05 17:35:50', '2024-03-05 17:35:50', NULL),
(483, 201, 'admin/home/surveyOption/2378IMG_20240304_233649.jpg', 'bshs', 1, '2024-03-06 05:26:02', '2024-03-06 05:26:02', NULL),
(484, 201, 'admin/home/surveyOption/0915IMG_20240304_233544.jpg', 'suuss', 1, '2024-03-06 05:26:02', '2024-03-06 05:26:02', NULL),
(485, 201, 'admin/home/surveyOption/4609IMG_20240304_233649.jpg', 'susus7', 1, '2024-03-06 05:26:02', '2024-03-06 05:26:02', NULL),
(486, 201, 'admin/home/surveyOption/6359IMG_20240304_233655.jpg', 'suus', 1, '2024-03-06 05:26:02', '2024-03-06 05:26:02', NULL),
(487, 202, 'admin/home/surveyOption/4290IMG-20240229-WA0001.jpg', 'bvvh', 1, '2024-03-06 05:55:36', '2024-03-06 05:55:36', NULL),
(488, 202, 'admin/home/surveyOption/3819images (1).jpeg', 'gchcgc', 1, '2024-03-06 05:55:36', '2024-03-06 05:55:36', NULL),
(489, 203, 'admin/home/surveyOption/9825IMG-20240229-WA0003.jpg', 'v. hvj', 1, '2024-03-06 06:02:21', '2024-03-06 06:02:21', NULL),
(490, 203, 'admin/home/surveyOption/1850IMG-20240229-WA0000.jpg', 'chhhvvj', 1, '2024-03-06 06:02:21', '2024-03-06 06:02:21', NULL),
(491, 204, 'admin/home/surveyOption/8953images (1).jpeg', 'hvjvv', 1, '2024-03-06 06:04:32', '2024-03-06 06:04:32', NULL),
(492, 204, 'admin/home/surveyOption/8016i.jpeg', 'ycvuug', 1, '2024-03-06 06:04:32', '2024-03-06 06:04:32', NULL),
(493, 205, 'admin/home/surveyOption/7956IMG-20240229-WA0003.jpg', 'hh', 1, '2024-03-06 06:06:01', '2024-03-06 06:06:01', NULL),
(494, 205, 'admin/home/surveyOption/4027IMG-20240229-WA0000.jpg', 'hcvhjv', 1, '2024-03-06 06:06:01', '2024-03-06 06:06:01', NULL),
(495, 206, 'admin/home/surveyOption/4892IMG-20240229-WA0002.jpg', 'ghh', 1, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL),
(496, 206, 'admin/home/surveyOption/7186IMG-20240229-WA0004.jpg', 'hhh', 1, '2024-03-06 09:16:06', '2024-03-06 09:16:06', NULL),
(497, 207, 'admin/home/surveyOption/9681IMG-20240229-WA0002.jpg', 'hshd', 1, '2024-03-06 09:20:24', '2024-03-06 09:20:24', NULL),
(498, 207, 'admin/home/surveyOption/2149IMG-20240229-WA0004.jpg', 'udud', 1, '2024-03-06 09:20:24', '2024-03-06 09:20:24', NULL),
(499, 207, 'admin/home/surveyOption/2148IMG-20240229-WA0002.jpg', 'None', 1, '2024-03-06 09:20:24', '2024-03-06 09:20:24', NULL),
(500, 208, 'admin/home/surveyOption/0235images (5).jpeg', 'jnn', 1, '2024-03-06 09:24:51', '2024-03-06 09:24:51', NULL),
(501, 208, 'admin/home/surveyOption/6154images (6).jpeg', 'nnn', 1, '2024-03-06 09:24:51', '2024-03-06 09:24:51', NULL),
(502, 209, 'admin/home/surveyOption/1463IMG-20240229-WA0002.jpg', 'xcfvgv', 1, '2024-03-06 09:37:15', '2024-03-06 09:37:15', NULL),
(503, 209, 'admin/home/surveyOption/5719IMG-20240229-WA0000.jpg', 'gugyg', 1, '2024-03-06 09:37:15', '2024-03-06 09:37:15', NULL),
(504, 210, 'admin/home/surveyOption/9382IMG-20240229-WA0001.jpg', 'c ggg', 1, '2024-03-06 09:40:31', '2024-03-06 09:40:31', NULL),
(505, 210, 'admin/home/surveyOption/1209IMG-20240229-WA0003.jpg', 'tctcct', 1, '2024-03-06 09:40:31', '2024-03-06 09:40:31', NULL),
(506, 211, 'admin/home/surveyOption/2803IMG-20240229-WA0001.jpg', 'gccgvh', 1, '2024-03-06 09:47:44', '2024-03-06 09:47:44', NULL),
(507, 211, 'admin/home/surveyOption/5621IMG-20240229-WA0003.jpg', 'cttcyg', 1, '2024-03-06 09:47:44', '2024-03-06 09:47:44', NULL),
(508, 212, 'admin/home/surveyOption/0734IMG-20240229-WA0001.jpg', 'bbn', 1, '2024-03-06 09:52:29', '2024-03-06 09:52:29', NULL),
(509, 212, 'admin/home/surveyOption/0138IMG-20240229-WA0000.jpg', 'bhj', 1, '2024-03-06 09:52:29', '2024-03-06 09:52:29', NULL),
(510, 212, 'admin/home/surveyOption/5261IMG-20240229-WA0001.jpg', 'None', 1, '2024-03-06 09:52:29', '2024-03-06 09:52:29', NULL),
(511, 213, 'admin/home/surveyOption/0125IMG-20240229-WA0002.jpg', 'tfctf', 1, '2024-03-06 09:58:51', '2024-03-06 09:58:51', NULL),
(512, 213, 'admin/home/surveyOption/0932IMG-20240229-WA0000.jpg', 'txtdfd', 1, '2024-03-06 09:58:51', '2024-03-06 09:58:51', NULL),
(513, 213, 'admin/home/surveyOption/9583IMG-20240229-WA0002.jpg', 'None', 1, '2024-03-06 09:58:51', '2024-03-06 09:58:51', NULL),
(514, 214, 'admin/home/surveyOption/2904IMG-20240229-WA0003.jpg', 'b b', 1, '2024-03-06 10:01:21', '2024-03-06 10:01:21', NULL),
(515, 214, 'admin/home/surveyOption/2037IMG-20240229-WA0000.jpg', 'jvbkbk', 1, '2024-03-06 10:01:21', '2024-03-06 10:01:21', NULL),
(516, 215, 'admin/home/surveyOption/6305IMG_20240304_233649.jpg', 'vjvj', 1, '2024-03-06 11:35:00', '2024-03-06 11:35:00', NULL),
(517, 215, 'admin/home/surveyOption/8246IMG_20240304_233655.jpg', 'g7gu', 1, '2024-03-06 11:35:00', '2024-03-06 11:35:00', NULL),
(518, 216, 'admin/home/surveyOption/7916IMG-20240229-WA0001.jpg', 'jnn bn', 1, '2024-03-06 11:38:45', '2024-03-06 11:38:45', NULL),
(519, 216, 'admin/home/surveyOption/3950IMG-20240229-WA0003.jpg', 'nbn', 1, '2024-03-06 11:38:45', '2024-03-06 11:38:45', NULL),
(520, 216, 'admin/home/surveyOption/5461IMG-20240229-WA0001.jpg', 'None', 1, '2024-03-06 11:38:45', '2024-03-06 11:38:45', NULL),
(521, 217, 'admin/home/surveyOption/9468bird-10648.gif', '74wruTj', 1, '2024-03-06 13:44:12', '2024-03-06 13:44:12', NULL),
(522, 217, 'admin/home/surveyOption/0672null-20240302-WA0002.jpg', '8tx8tzif,', 1, '2024-03-06 13:44:12', '2024-03-06 13:44:12', NULL),
(552, 245, 'admin/home/surveyOption/0547vecteezy_data-protection-cyber-security-privacy-business-internet_6899440.jpg', 'Yes', 1, '2024-03-07 10:01:46', '2024-03-07 10:01:46', NULL),
(553, 245, 'admin/home/surveyOption/1946luca-david-HjXbVnnITvE-unsplash.jpg', 'No', 1, '2024-03-07 10:01:46', '2024-03-07 10:01:46', NULL),
(554, 245, 'admin/home/surveyOption/5012luca-david-HjXbVnnITvE-unsplash.jpg', 'Both', 1, '2024-03-07 10:01:46', '2024-03-07 10:01:46', NULL),
(555, 245, NULL, 'None', 1, '2024-03-07 10:01:46', '2024-03-07 10:01:46', NULL),
(560, 247, NULL, 'One', 1, '2024-03-07 13:44:41', '2024-03-07 13:44:41', NULL),
(561, 247, NULL, 'Two', 1, '2024-03-07 13:44:41', '2024-03-07 13:44:41', NULL),
(562, 248, NULL, 'Jh', 1, '2024-03-08 03:17:59', '2024-03-08 03:17:59', NULL),
(563, 248, NULL, 'hvhvvujv', 1, '2024-03-08 03:17:59', '2024-03-08 03:17:59', NULL),
(564, 249, NULL, 'Jh', 1, '2024-03-08 03:18:00', '2024-03-08 03:18:00', NULL),
(565, 249, NULL, 'hvhvvujv', 1, '2024-03-08 03:18:00', '2024-03-08 03:18:00', NULL),
(566, 250, NULL, 'ycvyvu', 1, '2024-03-08 03:19:38', '2024-03-08 03:19:38', NULL),
(567, 250, NULL, 'hvyvh', 1, '2024-03-08 03:19:38', '2024-03-08 03:19:38', NULL),
(568, 251, NULL, 'gxgcch', 1, '2024-03-08 04:26:39', '2024-03-08 04:26:39', NULL),
(569, 251, NULL, 'gchcch', 1, '2024-03-08 04:26:39', '2024-03-08 04:26:39', NULL),
(570, 252, 'admin/home/surveyOption/7185IMG-20240308-WA0001.jpg', 'bhh', 1, '2024-03-08 04:34:40', '2024-03-08 04:34:40', NULL),
(571, 252, 'admin/home/surveyOption/9280IMG-20240308-WA0002.jpg', 'hhh', 1, '2024-03-08 04:34:40', '2024-03-08 04:34:40', NULL),
(577, 267, 'admin/home/surveyOption/2845vecteezy_data-protection-cyber-security-privacy-business-internet_6899440.jpg', 'Yes', 1, '2024-03-08 05:40:11', '2024-03-08 05:40:11', NULL),
(578, 267, 'admin/home/surveyOption/3562luca-david-HjXbVnnITvE-unsplash.jpg', 'No', 1, '2024-03-08 05:40:11', '2024-03-08 05:40:11', NULL),
(579, 267, 'admin/home/surveyOption/9043luca-david-HjXbVnnITvE-unsplash.jpg', 'Both', 1, '2024-03-08 05:40:11', '2024-03-08 05:40:11', NULL),
(580, 267, NULL, 'None', 1, '2024-03-08 05:40:11', '2024-03-08 05:40:11', NULL),
(584, 269, 'admin/home/surveyOption/8240images (15).jpeg', 'xhh cj', 1, '2024-03-08 05:48:01', '2024-03-08 05:48:01', NULL),
(585, 269, NULL, 'cychcjv', 1, '2024-03-08 05:48:01', '2024-03-08 05:48:01', NULL),
(586, 269, NULL, 'None', 1, '2024-03-08 05:48:01', '2024-03-08 05:48:01', NULL),
(587, 270, NULL, 'jghfjg', 1, '2024-03-08 05:50:52', '2024-03-08 05:50:52', NULL),
(588, 270, NULL, 'gnngmgnmy', 1, '2024-03-08 05:50:52', '2024-03-08 05:50:52', NULL),
(589, 270, NULL, 'None', 1, '2024-03-08 05:50:52', '2024-03-08 05:50:52', NULL),
(593, 272, NULL, 'gvvvui', 1, '2024-03-09 06:12:08', '2024-03-09 06:12:08', NULL),
(594, 272, NULL, 'hvjvv ub', 1, '2024-03-09 06:12:08', '2024-03-09 06:12:08', NULL),
(595, 273, NULL, 'h vhvh', 1, '2024-03-09 06:13:25', '2024-03-09 06:13:25', NULL),
(596, 273, NULL, 'guh', 1, '2024-03-09 06:13:25', '2024-03-09 06:13:25', NULL),
(597, 274, NULL, 'bbb', 1, '2024-03-09 06:25:18', '2024-03-09 06:25:18', NULL),
(598, 274, NULL, 'bbbh', 1, '2024-03-09 06:25:18', '2024-03-09 06:25:18', NULL),
(599, 274, NULL, 'None', 1, '2024-03-09 06:25:18', '2024-03-09 06:25:18', NULL),
(600, 275, 'admin/home/surveyOption/5137IMG-20240308-WA0001.jpg', 'vvv', 1, '2024-03-09 06:30:31', '2024-03-09 06:30:31', NULL),
(601, 275, 'admin/home/surveyOption/0297images (15).jpeg', 'hbhh', 1, '2024-03-09 06:30:31', '2024-03-09 06:30:31', NULL),
(602, 275, NULL, 'None', 1, '2024-03-09 06:30:31', '2024-03-09 06:30:31', NULL),
(603, 276, NULL, 'gfcyvu', 1, '2024-03-09 07:26:54', '2024-03-09 07:26:54', NULL),
(604, 276, NULL, 'yccgf', 1, '2024-03-09 07:26:54', '2024-03-09 07:26:54', NULL),
(605, 277, NULL, 'jjj', 1, '2024-03-09 12:11:12', '2024-03-09 12:11:12', NULL),
(606, 277, NULL, 'in nnn', 1, '2024-03-09 12:11:12', '2024-03-09 12:11:12', NULL),
(607, 277, NULL, 'nnnn', 1, '2024-03-09 12:11:12', '2024-03-09 12:11:12', NULL),
(608, 277, NULL, 'None', 1, '2024-03-09 12:11:12', '2024-03-09 12:11:12', NULL),
(609, 278, NULL, 'tcgc', 1, '2024-03-09 12:23:25', '2024-03-09 12:23:25', NULL),
(610, 278, NULL, 'tfftfy', 1, '2024-03-09 12:23:25', '2024-03-09 12:23:25', NULL),
(611, 278, NULL, 'None', 1, '2024-03-09 12:23:25', '2024-03-09 12:23:25', NULL),
(612, 279, NULL, 'jdfijr', 1, '2024-03-09 12:24:41', '2024-03-09 12:24:41', NULL),
(613, 279, NULL, 'jdfifi', 1, '2024-03-09 12:24:41', '2024-03-09 12:24:41', NULL),
(614, 279, NULL, 'None', 1, '2024-03-09 12:24:41', '2024-03-09 12:24:41', NULL),
(615, 280, 'admin/home/surveyOption/3281bird-10648.gif', 'shuzbej', 1, '2024-03-10 14:09:18', '2024-03-10 14:09:18', NULL),
(616, 280, NULL, 'hsbejbsusb', 1, '2024-03-10 14:09:18', '2024-03-10 14:09:18', NULL),
(617, 281, NULL, 'rxcrfc', 1, '2024-03-11 13:00:50', '2024-03-11 13:00:50', NULL),
(618, 281, NULL, 'fccfgc', 1, '2024-03-11 13:00:50', '2024-03-11 13:00:50', NULL),
(619, 281, NULL, 'None', 1, '2024-03-11 13:00:50', '2024-03-11 13:00:50', NULL),
(620, 282, NULL, 'cyhch', 1, '2024-03-11 13:10:00', '2024-03-11 13:10:00', NULL),
(621, 282, NULL, 'cuucvi', 1, '2024-03-11 13:10:00', '2024-03-11 13:10:00', NULL),
(622, 282, NULL, 'None', 1, '2024-03-11 13:10:00', '2024-03-11 13:10:00', NULL),
(623, 283, NULL, 'cbbc', 1, '2024-03-11 13:21:48', '2024-03-11 13:21:48', NULL),
(624, 283, NULL, 'cbc j', 1, '2024-03-11 13:21:48', '2024-03-11 13:21:48', NULL),
(625, 284, NULL, 'hjvjv', 1, '2024-03-11 13:44:34', '2024-03-11 13:44:34', NULL),
(626, 284, NULL, 'h  jvj', 1, '2024-03-11 13:44:34', '2024-03-11 13:44:34', NULL),
(627, 285, NULL, 'jjhh', 1, '2024-03-11 13:46:39', '2024-03-11 13:46:39', NULL),
(628, 285, NULL, 'hjj', 1, '2024-03-11 13:46:39', '2024-03-11 13:46:39', NULL),
(629, 286, NULL, 'bb', 1, '2024-03-13 05:46:16', '2024-03-13 05:46:16', NULL),
(630, 286, NULL, 'bbb', 1, '2024-03-13 05:46:16', '2024-03-13 05:46:16', NULL),
(631, 287, NULL, 'bbb', 1, '2024-03-13 05:48:28', '2024-03-13 05:48:28', NULL),
(632, 287, NULL, 'bhhi', 1, '2024-03-13 05:48:28', '2024-03-13 05:48:28', NULL),
(633, 288, NULL, 'bhh', 1, '2024-03-13 05:49:34', '2024-03-13 05:49:34', NULL),
(634, 288, NULL, 'bh', 1, '2024-03-13 05:49:34', '2024-03-13 05:49:34', NULL),
(635, 289, NULL, 'jjj', 1, '2024-03-13 05:50:41', '2024-03-13 05:50:41', NULL),
(636, 289, NULL, 'hhh', 1, '2024-03-13 05:50:41', '2024-03-13 05:50:41', NULL),
(637, 290, NULL, 'yfygugu', 1, '2024-03-13 06:16:16', '2024-03-13 06:16:16', NULL),
(638, 290, NULL, 'gygug', 1, '2024-03-13 06:16:16', '2024-03-13 06:16:16', NULL),
(639, 291, NULL, 'gcgccgch', 1, '2024-03-13 06:17:17', '2024-03-13 06:17:17', NULL),
(640, 291, NULL, 'cyycv', 1, '2024-03-13 06:17:17', '2024-03-13 06:17:17', NULL),
(641, 292, NULL, 'gfgcgc', 1, '2024-03-13 06:18:09', '2024-03-13 06:18:09', NULL),
(642, 292, NULL, 'tfyffyyf', 1, '2024-03-13 06:18:09', '2024-03-13 06:18:09', NULL),
(643, 292, NULL, 'None', 1, '2024-03-13 06:18:09', '2024-03-13 06:18:09', NULL),
(644, 293, NULL, 'hhh', 1, '2024-03-13 07:02:17', '2024-03-13 07:02:17', NULL),
(645, 293, NULL, 'hhh', 1, '2024-03-13 07:02:17', '2024-03-13 07:02:17', NULL),
(646, 294, NULL, 'jjj', 1, '2024-03-13 07:38:43', '2024-03-13 07:38:43', NULL),
(647, 294, NULL, 'jj', 1, '2024-03-13 07:38:43', '2024-03-13 07:38:43', NULL),
(648, 295, NULL, 'hhj', 1, '2024-03-13 07:40:49', '2024-03-13 07:40:49', NULL),
(649, 295, NULL, 'ghji', 1, '2024-03-13 07:40:49', '2024-03-13 07:40:49', NULL),
(650, 296, NULL, 'gg', 1, '2024-03-13 11:49:38', '2024-03-13 11:49:38', NULL),
(651, 296, NULL, 'hhhh', 1, '2024-03-13 11:49:38', '2024-03-13 11:49:38', NULL),
(652, 297, NULL, 'hhh', 1, '2024-03-13 12:26:40', '2024-03-13 12:26:40', NULL),
(653, 297, NULL, 'bhh', 1, '2024-03-13 12:26:40', '2024-03-13 12:26:40', NULL),
(654, 298, NULL, 'hjk', 1, '2024-03-13 12:44:31', '2024-03-13 12:44:31', NULL),
(655, 298, NULL, 'guguugih', 1, '2024-03-13 12:44:31', '2024-03-13 12:44:31', NULL),
(656, 299, NULL, 'rr r', 1, '2024-03-13 12:51:42', '2024-03-13 12:51:42', NULL),
(657, 299, NULL, 'dtdttx', 1, '2024-03-13 12:51:42', '2024-03-13 12:51:42', NULL),
(658, 300, NULL, 'bdhdbdh', 1, '2024-03-13 14:11:18', '2024-03-13 14:11:18', NULL),
(659, 300, NULL, 'dbdbbd', 1, '2024-03-13 14:11:18', '2024-03-13 14:11:18', NULL),
(660, 301, NULL, 'yy', 1, '2024-03-13 14:47:25', '2024-03-13 14:47:25', NULL),
(661, 301, NULL, 'yyy', 1, '2024-03-13 14:47:25', '2024-03-13 14:47:25', NULL),
(662, 302, NULL, 'vh', 1, '2024-03-14 05:02:22', '2024-03-14 05:02:22', NULL),
(663, 302, NULL, 'gh', 1, '2024-03-14 05:02:22', '2024-03-14 05:02:22', NULL),
(664, 302, NULL, 'None', 1, '2024-03-14 05:02:22', '2024-03-14 05:02:22', NULL),
(665, 303, NULL, 'bbb', 1, '2024-03-14 09:28:08', '2024-03-14 09:28:08', NULL),
(666, 303, NULL, 'bh', 1, '2024-03-14 09:28:08', '2024-03-14 09:28:08', NULL),
(667, 303, NULL, 'None', 1, '2024-03-14 09:28:08', '2024-03-14 09:28:08', NULL),
(668, 304, NULL, 'hhh', 1, '2024-03-14 09:32:44', '2024-03-14 09:32:44', NULL),
(669, 304, NULL, 'hhhh', 1, '2024-03-14 09:32:44', '2024-03-14 09:32:44', NULL),
(670, 305, NULL, 'Richa', 1, '2024-03-14 09:46:49', '2024-03-14 09:46:49', NULL),
(671, 305, NULL, 'v chint', 1, '2024-03-14 09:46:49', '2024-03-14 09:46:49', NULL),
(672, 306, NULL, 'hhhh', 1, '2024-03-15 04:39:03', '2024-03-15 04:39:03', NULL),
(673, 306, NULL, 'r didi', 1, '2024-03-15 04:39:03', '2024-03-15 04:39:03', NULL),
(674, 306, NULL, 'None', 1, '2024-03-15 04:39:03', '2024-03-15 04:39:03', NULL),
(675, 307, NULL, 'yccyy', 1, '2024-03-15 05:31:25', '2024-03-15 05:31:25', NULL),
(676, 307, NULL, 'cgvfcc', 1, '2024-03-15 05:31:25', '2024-03-15 05:31:25', NULL),
(677, 308, NULL, 'guv', 1, '2024-03-15 05:39:40', '2024-03-15 05:39:40', NULL),
(678, 308, NULL, 'gugu', 1, '2024-03-15 05:39:40', '2024-03-15 05:39:40', NULL),
(679, 309, NULL, 'FC vj', 1, '2024-03-15 05:40:48', '2024-03-15 05:40:48', NULL),
(680, 309, NULL, 'vhbibbi', 1, '2024-03-15 05:40:48', '2024-03-15 05:40:48', NULL),
(681, 310, NULL, 'cyhch', 1, '2024-03-15 06:30:04', '2024-03-15 06:30:04', NULL),
(682, 310, NULL, 'cycyvu', 1, '2024-03-15 06:30:04', '2024-03-15 06:30:04', NULL),
(683, 311, NULL, 'bhh', 1, '2024-03-15 12:39:55', '2024-03-15 12:39:55', NULL),
(684, 311, NULL, 'hhjj', 1, '2024-03-15 12:39:55', '2024-03-15 12:39:55', NULL),
(685, 312, NULL, 'cuch', 1, '2024-03-15 12:46:38', '2024-03-15 12:46:38', NULL),
(686, 312, NULL, 'cyugy', 1, '2024-03-15 12:46:38', '2024-03-15 12:46:38', NULL),
(687, 313, NULL, 'chcvi', 1, '2024-03-15 12:57:53', '2024-03-15 12:57:53', NULL),
(688, 313, NULL, 'uvivi', 1, '2024-03-15 12:57:53', '2024-03-15 12:57:53', NULL),
(689, 314, NULL, 'ff', 1, '2024-03-15 13:02:43', '2024-03-15 13:02:43', NULL),
(690, 314, NULL, 'tghhuu', 1, '2024-03-15 13:02:43', '2024-03-15 13:02:43', NULL),
(691, 315, NULL, 'usud', 1, '2024-03-15 13:05:30', '2024-03-15 13:05:30', NULL),
(692, 315, NULL, 'nnznx', 1, '2024-03-15 13:05:30', '2024-03-15 13:05:30', NULL),
(693, 315, NULL, 'None', 1, '2024-03-15 13:05:30', '2024-03-15 13:05:30', NULL),
(694, 316, NULL, 'cjcu', 1, '2024-03-15 13:12:57', '2024-03-15 13:12:57', NULL),
(695, 316, NULL, 'yfhc', 1, '2024-03-15 13:12:57', '2024-03-15 13:12:57', NULL),
(696, 316, NULL, 'None', 1, '2024-03-15 13:12:57', '2024-03-15 13:12:57', NULL),
(697, 317, NULL, 'vuvihg', 1, '2024-03-15 13:14:37', '2024-03-15 13:14:37', NULL),
(698, 317, NULL, 'cujvjgi', 1, '2024-03-15 13:14:37', '2024-03-15 13:14:37', NULL),
(699, 318, NULL, 'hhhy', 1, '2024-03-15 13:24:47', '2024-03-15 13:24:47', NULL),
(700, 318, NULL, 'hhuu', 1, '2024-03-15 13:24:47', '2024-03-15 13:24:47', NULL),
(701, 319, NULL, 'vyvy uu', 1, '2024-03-19 05:39:17', '2024-03-19 05:39:17', NULL),
(702, 319, NULL, 'gvvuiy', 1, '2024-03-19 05:39:17', '2024-03-19 05:39:17', NULL),
(703, 320, NULL, 'ycvhvj', 1, '2024-03-19 06:01:22', '2024-03-19 06:01:22', NULL),
(704, 320, NULL, 'cyhvujv', 1, '2024-03-19 06:01:22', '2024-03-19 06:01:22', NULL),
(705, 321, NULL, 'tbyb', 1, '2024-03-19 06:04:28', '2024-03-19 06:04:28', NULL),
(706, 321, NULL, 'byybb', 1, '2024-03-19 06:04:28', '2024-03-19 06:04:28', NULL),
(707, 322, NULL, 'ygyg', 1, '2024-03-19 06:26:36', '2024-03-19 06:26:36', NULL),
(708, 322, NULL, 'ycvyu', 1, '2024-03-19 06:26:36', '2024-03-19 06:26:36', NULL),
(709, 322, NULL, 'None', 1, '2024-03-19 06:26:36', '2024-03-19 06:26:36', NULL),
(710, 323, NULL, 'ghh', 1, '2024-03-19 09:05:22', '2024-03-19 09:05:22', NULL),
(711, 323, NULL, 'hhh', 1, '2024-03-19 09:05:22', '2024-03-19 09:05:22', NULL),
(712, 324, NULL, 'bbbb', 1, '2024-03-19 09:06:35', '2024-03-19 09:06:35', NULL),
(713, 324, NULL, 'bbv', 1, '2024-03-19 09:06:35', '2024-03-19 09:06:35', NULL),
(714, 325, NULL, 'yhhy', 1, '2024-03-19 11:08:29', '2024-03-19 11:08:29', NULL),
(715, 325, NULL, 'vgvy', 1, '2024-03-19 11:08:29', '2024-03-19 11:08:29', NULL),
(716, 326, NULL, 'vv', 1, '2024-03-19 12:05:26', '2024-03-19 12:05:26', NULL),
(717, 326, NULL, 'ghv', 1, '2024-03-19 12:05:26', '2024-03-19 12:05:26', NULL),
(718, 326, NULL, 'None', 1, '2024-03-19 12:05:26', '2024-03-19 12:05:26', NULL),
(719, 327, NULL, 'tvgt', 1, '2024-03-19 12:07:19', '2024-03-19 12:07:19', NULL),
(720, 327, NULL, 's,ct', 1, '2024-03-19 12:07:19', '2024-03-19 12:07:19', NULL),
(721, 327, NULL, 'None', 1, '2024-03-19 12:07:19', '2024-03-19 12:07:19', NULL),
(722, 328, NULL, 'hh bj', 1, '2024-03-19 12:18:53', '2024-03-19 12:18:53', NULL),
(723, 328, NULL, 'g gbu', 1, '2024-03-19 12:18:53', '2024-03-19 12:18:53', NULL),
(724, 329, NULL, 'YES', 1, '2024-03-19 12:48:51', '2024-03-19 12:48:51', NULL),
(725, 329, NULL, 'no', 1, '2024-03-19 12:48:51', '2024-03-19 12:48:51', NULL),
(726, 330, NULL, 'f f', 1, '2024-03-19 12:53:46', '2024-03-19 12:53:46', NULL),
(727, 330, NULL, 'r f tc', 1, '2024-03-19 12:53:46', '2024-03-19 12:53:46', NULL),
(728, 331, NULL, 'sjajja', 1, '2024-03-19 13:09:12', '2024-03-19 13:09:12', NULL),
(729, 331, NULL, 'udududu', 1, '2024-03-19 13:09:12', '2024-03-19 13:09:12', NULL),
(730, 332, NULL, 'biryani', 1, '2024-03-30 14:46:11', '2024-03-30 14:46:11', NULL),
(731, 332, NULL, 'roti', 1, '2024-03-30 14:46:11', '2024-03-30 14:46:11', NULL),
(732, 333, NULL, 'congress', 1, '2024-03-30 18:39:58', '2024-03-30 18:39:58', NULL),
(733, 333, NULL, 'BJP', 1, '2024-03-30 18:39:58', '2024-03-30 18:39:58', NULL),
(734, 334, 'admin/home/surveyOption/6087Screenshot_20240331_000101.jpg', 'Congress might win with INDIA alliance', 1, '2024-03-30 18:41:53', '2024-03-30 18:41:53', NULL),
(735, 334, 'admin/home/surveyOption/1486Screenshot_20240331_000026.jpg', 'BJP again', 1, '2024-03-30 18:41:53', '2024-03-30 18:41:53', NULL),
(736, 335, NULL, 'Where the hell is that option to Chat', 1, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL),
(737, 335, NULL, 'I don\'t even know that feature exists', 1, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL),
(738, 335, NULL, 'I don\'t like the positioning of Chat feature. It\'s not easy to find to Use.', 1, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL),
(739, 335, NULL, 'I have Used it and found nothing special', 1, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL),
(740, 335, NULL, 'I have used it and it\'s interesting.', 1, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL),
(741, 336, NULL, 'Not yet', 1, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL),
(742, 336, NULL, 'Yes, but Not interested about that 😏', 1, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL),
(743, 336, NULL, 'Where is that feature 🧐', 1, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL),
(744, 336, NULL, 'Yes, it\'s interesting', 1, '2024-04-03 05:42:09', '2024-04-03 05:42:09', NULL),
(745, 337, NULL, '1', 1, '2024-04-18 07:33:32', '2024-04-18 07:33:32', NULL),
(746, 337, NULL, '1', 1, '2024-04-18 07:33:32', '2024-04-18 07:33:32', NULL),
(747, 338, NULL, 'a', 1, '2024-04-18 12:39:15', '2024-04-18 12:39:15', NULL),
(748, 338, NULL, 'aaa', 1, '2024-04-18 12:39:15', '2024-04-18 12:39:15', NULL),
(749, 339, NULL, 'bh', 1, '2024-04-20 10:28:42', '2024-04-20 10:28:42', NULL),
(750, 339, NULL, 'vvb', 1, '2024-04-20 10:28:42', '2024-04-20 10:28:42', NULL),
(751, 340, NULL, 'gg', 1, '2024-04-20 10:32:48', '2024-04-20 10:32:48', NULL),
(752, 340, NULL, 'hhh', 1, '2024-04-20 10:32:48', '2024-04-20 10:32:48', NULL),
(753, 341, NULL, 'jgvj', 1, '2024-04-20 11:05:36', '2024-04-20 11:05:36', NULL),
(754, 341, NULL, 'ufuffh', 1, '2024-04-20 11:05:36', '2024-04-20 11:05:36', NULL),
(755, 342, NULL, 'bbb', 1, '2024-04-20 11:09:23', '2024-04-20 11:09:23', NULL),
(756, 342, NULL, 'bbb', 1, '2024-04-20 11:09:23', '2024-04-20 11:09:23', NULL),
(757, 343, NULL, 'bbb', 1, '2024-04-20 11:12:26', '2024-04-20 11:12:26', NULL),
(758, 343, NULL, 'bbb', 1, '2024-04-20 11:12:26', '2024-04-20 11:12:26', NULL),
(759, 344, NULL, 'nn', 1, '2024-04-20 11:13:32', '2024-04-20 11:13:32', NULL),
(760, 344, NULL, 'nn', 1, '2024-04-20 11:13:32', '2024-04-20 11:13:32', NULL),
(761, 345, NULL, 'hhj', 1, '2024-04-20 11:15:50', '2024-04-20 11:15:50', NULL),
(762, 345, NULL, 'bhh', 1, '2024-04-20 11:15:50', '2024-04-20 11:15:50', NULL),
(763, 346, NULL, 'nnk', 1, '2024-04-20 11:17:12', '2024-04-20 11:17:12', NULL),
(764, 346, NULL, 'nkk', 1, '2024-04-20 11:17:12', '2024-04-20 11:17:12', NULL),
(765, 347, NULL, 'bhj', 1, '2024-04-20 11:22:29', '2024-04-20 11:22:29', NULL),
(766, 347, NULL, 'bhj', 1, '2024-04-20 11:22:29', '2024-04-20 11:22:29', NULL),
(767, 348, NULL, 'jsjjd', 1, '2024-04-20 11:37:51', '2024-04-20 11:37:51', NULL),
(768, 348, NULL, 'skskxo', 1, '2024-04-20 11:37:51', '2024-04-20 11:37:51', NULL),
(769, 349, NULL, 'jsjdj', 1, '2024-04-20 11:42:37', '2024-04-20 11:42:37', NULL),
(770, 349, NULL, 'jzjxdk', 1, '2024-04-20 11:42:37', '2024-04-20 11:42:37', NULL),
(771, 350, NULL, 'ufuf', 1, '2024-04-20 11:56:09', '2024-04-20 11:56:09', NULL),
(772, 350, NULL, 'ufhffu', 1, '2024-04-20 11:56:09', '2024-04-20 11:56:09', NULL),
(773, 351, NULL, 'hjk', 1, '2024-04-20 11:59:03', '2024-04-20 11:59:03', NULL),
(774, 351, NULL, 'nkkl', 1, '2024-04-20 11:59:03', '2024-04-20 11:59:03', NULL),
(775, 352, NULL, 'duch', 1, '2024-04-20 12:00:42', '2024-04-20 12:00:42', NULL),
(776, 352, NULL, 'tuuf', 1, '2024-04-20 12:00:42', '2024-04-20 12:00:42', NULL),
(777, 353, NULL, 'itut', 1, '2024-04-20 12:02:03', '2024-04-20 12:02:03', NULL),
(778, 353, NULL, 'dyfu', 1, '2024-04-20 12:02:03', '2024-04-20 12:02:03', NULL),
(779, 354, NULL, 'chhv', 1, '2024-04-22 06:26:59', '2024-04-22 06:26:59', NULL),
(780, 354, NULL, 'fyuc', 1, '2024-04-22 06:26:59', '2024-04-22 06:26:59', NULL),
(781, 355, NULL, 'bujb', 1, '2024-04-22 06:35:04', '2024-04-22 06:35:04', NULL),
(782, 355, NULL, 'hvuv', 1, '2024-04-22 06:35:04', '2024-04-22 06:35:04', NULL),
(783, 356, NULL, 'gchcv', 1, '2024-04-22 07:07:45', '2024-04-22 07:07:45', NULL),
(784, 356, NULL, 'gyvuvu', 1, '2024-04-22 07:07:45', '2024-04-22 07:07:45', NULL),
(785, 357, NULL, 'sisjskss', 1, '2024-04-22 07:25:25', '2024-04-22 07:25:25', NULL),
(786, 357, NULL, 'jsjs', 1, '2024-04-22 07:25:25', '2024-04-22 07:25:25', NULL),
(787, 358, NULL, 'uvubb', 1, '2024-04-22 07:31:16', '2024-04-22 07:31:16', NULL),
(788, 358, NULL, 'hvbu', 1, '2024-04-22 07:31:16', '2024-04-22 07:31:16', NULL),
(789, 359, NULL, 'vb', 1, '2024-04-22 07:38:08', '2024-04-22 07:38:08', NULL),
(790, 359, NULL, 'ygvuvu', 1, '2024-04-22 07:38:08', '2024-04-22 07:38:08', NULL),
(791, 360, NULL, 'hggugu', 1, '2024-04-22 07:39:10', '2024-04-22 07:39:10', NULL),
(792, 360, NULL, 'hggu', 1, '2024-04-22 07:39:10', '2024-04-22 07:39:10', NULL),
(793, 361, NULL, 'hghghg', 1, '2024-04-22 07:40:05', '2024-04-22 07:40:05', NULL),
(794, 361, NULL, 'guug', 1, '2024-04-22 07:40:05', '2024-04-22 07:40:05', NULL),
(795, 362, NULL, 'hvbj', 1, '2024-04-22 07:53:57', '2024-04-22 07:53:57', NULL),
(796, 362, NULL, 'hggj', 1, '2024-04-22 07:53:57', '2024-04-22 07:53:57', NULL),
(797, 363, NULL, 'bbhj', 1, '2024-04-22 13:39:08', '2024-04-22 13:39:08', NULL),
(798, 363, NULL, 'bjjk', 1, '2024-04-22 13:39:08', '2024-04-22 13:39:08', NULL),
(799, 364, NULL, 'fhch', 1, '2024-04-22 13:58:12', '2024-04-22 13:58:12', NULL),
(800, 364, NULL, 'hch', 1, '2024-04-22 13:58:12', '2024-04-22 13:58:12', NULL),
(801, 365, NULL, 'guigo', 1, '2024-04-22 14:05:32', '2024-04-22 14:05:32', NULL),
(802, 365, NULL, 'jgbibko', 1, '2024-04-22 14:05:32', '2024-04-22 14:05:32', NULL),
(803, 366, NULL, 'yes', 1, '2024-04-23 07:00:42', '2024-04-23 07:00:42', NULL),
(804, 366, NULL, 'no', 1, '2024-04-23 07:00:42', '2024-04-23 07:00:42', NULL),
(805, 367, NULL, 'buib', 1, '2024-04-24 05:50:13', '2024-04-24 05:50:13', NULL),
(806, 367, NULL, 'hbhb', 1, '2024-04-24 05:50:13', '2024-04-24 05:50:13', NULL),
(807, 368, NULL, 'jsjsj', 1, '2024-04-24 06:01:12', '2024-04-24 06:01:12', NULL),
(808, 368, NULL, 'ksms', 1, '2024-04-24 06:01:12', '2024-04-24 06:01:12', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `survey_tags`
--

CREATE TABLE `survey_tags` (
  `id` bigint UNSIGNED NOT NULL,
  `survey_id` bigint UNSIGNED NOT NULL,
  `tag_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `category_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `user_id`, `category_id`, `name`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 3, 'Education', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(2, 1, 3, 'Competitive Exams', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(3, 1, 3, 'NITS', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(4, 1, 3, 'IITS', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(5, 1, 3, 'MBBS', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(6, 1, 4, 'Books', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(7, 1, 3, 'AIIMS', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(8, 1, 4, 'Astrology', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(9, 1, 3, 'IIM', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(10, 1, 4, 'Painting', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(11, 1, 3, 'Universities', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(12, 1, 4, 'Art', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(13, 1, 5, 'Travel Blogger/Vlogger', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(14, 1, 3, 'Job Searching and Networking', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(15, 1, 4, 'Photography', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(16, 1, 5, 'Automobiles', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(17, 1, 3, 'Construction', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(18, 1, 4, 'Screen Writing', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(19, 1, 5, 'Motor bikes', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(20, 1, 1, 'Movies', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(21, 1, 3, 'UPSC', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(22, 1, 4, 'Knitting', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(23, 1, 5, 'Air Travel', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(24, 1, 1, 'Music', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(25, 1, 5, 'Budget Travel', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(26, 1, 1, 'Dance', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(27, 1, 3, 'JEE MAINS', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(28, 1, 4, 'Literature', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(29, 1, 5, 'Road Trips', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(30, 1, 1, 'Anime', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(31, 1, 4, 'Fiction', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(32, 1, 5, 'Railway Transport', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(33, 1, 3, 'CAT', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(34, 1, 1, 'Actors', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(35, 1, 5, 'Airlines', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(36, 1, 1, 'WebSeries', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(37, 1, 3, 'EAMCET', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(38, 1, 5, 'Hotels', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(39, 1, 1, 'OTT platforms', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(40, 1, 3, 'IT Companies', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(41, 1, 5, 'Hiking', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(42, 1, 1, 'Cinematic Universe', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(43, 1, 3, 'Tech Personality', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(44, 1, 2, 'Cricket', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(45, 1, 5, 'Camping', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(46, 1, 3, 'Employment', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(47, 1, 2, 'IPL', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(48, 1, 1, 'Memes', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(49, 1, 5, 'Trekking', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(50, 1, 3, 'Profession', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(51, 1, 1, 'Television', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(52, 1, 2, 'Premier Leagues', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(53, 1, 5, 'Surfing', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(54, 1, 2, 'Kabaddi', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(55, 1, 1, 'Directors', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(56, 1, 5, 'Scuba Diving', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(57, 1, 2, 'Volley Ball', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(58, 1, 1, 'Genre Films', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(59, 1, 2, 'Basket Ball', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(60, 1, 1, 'Movie Franchises', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(61, 1, 1, 'Documentaries', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(62, 1, 2, 'Foot Ball', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(63, 1, 1, 'PAN-INDIA', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(64, 1, 2, 'Chess', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(65, 1, 1, 'Comics', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(66, 1, 2, 'Badminton', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(67, 1, 1, 'TV Shows', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(68, 1, 2, 'Tennis', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(69, 1, 1, 'Reality Shows', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(70, 1, 2, 'Table Tennis', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(71, 1, 1, 'Celebrity', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(72, 1, 2, 'WWE', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(73, 1, 1, 'Awards', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(74, 1, 2, 'NBA', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(75, 1, 2, 'MMA', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(76, 1, 1, 'South Indian Movies', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(77, 1, 2, 'NFL', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(78, 1, 1, 'North Indian Movies', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(79, 1, 1, 'Regional Movies', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(80, 1, 2, 'Hockey', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(81, 1, 2, 'Swimming', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(82, 1, 7, 'Fashion', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(83, 1, 7, 'Tattoos', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(84, 1, 7, 'MakeUp', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(85, 1, 7, 'Skin Care', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(86, 1, 7, 'Hair care', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(87, 1, 7, 'Beauty Influencer', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(88, 1, 7, 'Watches', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(89, 1, 7, 'Sneakers', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(90, 1, 7, 'Shoes', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(91, 1, 7, 'Perfumes and Fragrances', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(92, 1, 7, 'Shopping', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(93, 1, 6, 'Cooking', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(94, 1, 7, 'Men\'s Style', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(95, 1, 6, 'Chef', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(96, 1, 7, 'Women\'s Style', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(97, 1, 6, 'Vegetarian', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(98, 1, 7, 'Jewelry', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(99, 1, 6, 'Fast Foods', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(100, 1, 7, 'Spa', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(101, 1, 6, 'Restaurant', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(102, 1, 7, 'Beauty Parlour', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(103, 1, 6, 'Food Influencer', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(104, 1, 6, 'Soft Drink', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(105, 1, 6, 'BBQ and Grills', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(106, 1, 6, 'Cuisines', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(107, 1, 6, 'Spicy Food', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(108, 1, 6, 'Baking', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(109, 1, 6, 'Sweets and Desserts', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(110, 1, 6, 'Sausages', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(111, 1, 6, 'Fruits', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(112, 1, 6, 'Chips', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(113, 1, 6, 'Biryani', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(114, 1, 6, 'Hotel', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(115, 1, 6, 'Alcohol', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(116, 1, 6, 'Tea', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(117, 1, 6, 'Coffee', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(118, 1, 6, 'Non Vegetarian', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(119, 1, 6, 'South Indian Food', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(120, 1, 6, 'North Indian Food', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(121, 1, 8, 'Investing', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(122, 1, 8, 'Stock Market', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(123, 1, 8, 'Venture Capital', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(124, 1, 8, 'Gold', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(125, 1, 8, 'Business Personality', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(126, 1, 8, 'StartUp', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(127, 1, 8, 'Business', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(128, 1, 8, 'Advertising', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(129, 1, 10, 'Sporting Goods', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(130, 1, 10, 'Fitness Influencer', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(131, 1, 8, 'Marketing', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(132, 1, 10, 'Athletic Apparel', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(133, 1, 8, 'Accounting', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(134, 1, 10, 'Gym Wear', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(135, 1, 8, 'Financial services', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(136, 1, 10, 'Shoes and Clothing', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(137, 1, 8, 'Economy', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(138, 1, 10, 'Yoga', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(139, 1, 8, 'Tax', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(140, 1, 10, 'Gym', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(141, 1, 8, 'GST', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(142, 1, 10, 'Protein Drinks', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(143, 1, 10, 'Diet', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(144, 1, 10, 'Healthy Food', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(145, 1, 10, 'Health', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(146, 1, 10, 'Hospital', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(147, 1, 10, 'Medicine', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(148, 1, 10, 'Treatment', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(149, 1, 10, 'Surgery', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(150, 1, 10, 'Operation', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(151, 1, 10, 'Disease', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(152, 1, 10, 'Body Building', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(153, 1, 9, 'Video Games', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(154, 1, 9, 'Mobile Games', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(155, 1, 9, 'Gaming Influencer', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(156, 1, 9, 'PC Gaming', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(157, 1, 9, 'Play Station', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(158, 1, 9, 'PUBG', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(159, 1, 9, 'Freefire', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(160, 1, 9, 'COD', 1, '2024-02-19 08:35:56', '2024-02-19 08:35:56', NULL),
(161, 1, 11, 'Elections', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(162, 1, 11, 'Voters', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(163, 1, 11, 'Parliament Meetings', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(164, 1, 11, 'Assembly Meetings', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(165, 1, 11, 'Election Campaigns', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(166, 1, 11, 'Government Schemes', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(167, 1, 11, 'Government Projects', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(168, 1, 11, 'BJP', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(169, 1, 11, 'Congress', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(170, 1, 11, 'Regional Parties', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(171, 1, 11, 'National Parties', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(172, 1, 11, 'Articles', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(173, 1, 11, 'Constitution', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(174, 1, 11, 'State Budget', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(175, 1, 11, 'Central Budget', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(176, 1, 11, 'Ministers', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(177, 1, 11, 'National Security', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(178, 1, 11, 'Public Services', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(179, 1, 11, 'Human Rights', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(180, 1, 11, 'Protests', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(181, 1, 11, 'Government Orders', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(182, 1, 11, 'Ex gratia', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(183, 1, 11, 'Pensions', 1, '2024-02-19 08:35:57', '2024-02-19 08:35:57', NULL),
(184, 1, 6, 'Dosa', 1, '2024-02-19 09:21:42', '2024-02-19 09:21:42', NULL),
(189, 128, 2, 'CSK', 1, '2024-03-06 06:16:04', '2024-03-06 06:16:04', NULL),
(190, 128, 2, 'India', 1, '2024-03-06 06:16:26', '2024-03-06 06:16:26', NULL),
(191, 129, 9, 'Gaming Laptop', 1, '2024-03-08 08:21:22', '2024-03-08 08:21:22', NULL),
(192, 1, 11, 'dhgvd', 1, '2024-03-15 06:03:10', '2024-03-15 06:03:10', NULL),
(193, 171, 6, 'biryani', 1, '2024-03-30 14:45:35', '2024-03-30 14:45:35', NULL),
(194, 172, 5, 'PG hostel', 1, '2024-03-30 17:13:58', '2024-03-30 17:13:58', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `device_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('admin','customer') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'customer',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_ssen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `online_status` tinyint(1) NOT NULL DEFAULT '1',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `social_login_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `mobile_number`, `device_key`, `type`, `email_verified_at`, `password`, `last_ssen`, `online_status`, `status`, `remember_token`, `social_login_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'social', 'social@gmail.com', '9718577938', NULL, 'admin', NULL, '$2y$10$YE84VfwylEH/za/xE86pteRrBhadnSoHhxcDVL7I48JxqDeG3n60S', NULL, 1, 1, NULL, NULL, '2023-12-06 09:45:55', '2023-12-06 09:45:55', NULL),
(125, 'Ankur Jain', 'ankur.jain@profcyma.com', '8784545544', NULL, 'customer', NULL, '$2y$10$/qSjpMXiXOGPExmxoK7MEuv4R6ikXZO5xn31alPmkfAnbD3JzBYfK', NULL, 1, 1, NULL, NULL, '2024-03-05 13:01:27', '2024-03-05 16:25:54', NULL),
(126, 'Walter White', 'adityamadkar20@gmail.com', '9797949797', 'evH75xsCRp-bmrTb__giqC:APA91bGag4yk8VwUDkICvk-M76aFunbyubJu-qdJFg-rLoVsESZP5r_3OJxqY7s32VIQQfkW6a55Y20kiydSyiC8B4PFX5txMcI9rXyIH6g2Ip37fHiEY-Ti_-9EmzCl9bNBKzxN86sj', 'customer', NULL, '$2y$10$MZ4baedAL0KohUYKmAh1VesTJ7nVB4fYeUjhIBppmtluPnPQvwpb.', NULL, 1, 1, NULL, NULL, '2024-03-05 16:29:13', '2024-04-24 04:56:45', NULL),
(128, 'John wick', 'adityamadkar07@gmail.com', '9058755757', NULL, 'customer', NULL, '$2y$10$tzfg7tZk7oT5cXRVeGoHT.5UegmiAqIbUaIF609koyPGe.TNmfoJW', NULL, 1, 1, NULL, NULL, '2024-03-06 05:48:46', '2024-03-19 06:09:29', NULL),
(129, 'Chay', 'chaituvakalapudi@gmail.com', NULL, 'cTgU3nZNSaiaTZydMK-q_B:APA91bGcXFd8XctMdszxQ7zLVhRuVXO4ryBy_UXs173gwvKza64zrgMC2Bf0NWmLntsulLygmWIe2CuiZjL5DuqQ8xlLmEZqiSKSZWLqmpfygwSip4sTms23lE_GPTxuNy_MxrwxH9cB', 'customer', NULL, '$2y$10$Q8XUUpQlBIEogy1rR75vDO/UbjK5.hmREti/76yKUi4j1mxRXw8z.', NULL, 1, 1, NULL, NULL, '2024-03-06 08:15:00', '2024-04-27 06:51:00', NULL),
(130, 'Spectator', 'spectator465@gmail.com', NULL, 'fe1vH86jRISzfiTgL93SKu:APA91bF9Qa2jjwZp4XttnEMOUtjlaB-q7USYm3HfHOI_ma6AMXM6dWJ0uJxHJQewSpQ1ZfWcscDd1OeitM9X1zqxu3Jyi1M-EO8IweMLSgoCdIJlUTxS5AuIF9uCcWGye1SWy8jwEMMG', 'customer', NULL, '$2y$10$YakVcqfas8AQadx8TxKHS.wzX0fIQXIgjuZdtStLUIgJrtThmU3uC', NULL, 1, 1, NULL, NULL, '2024-03-06 08:24:57', '2024-04-23 12:29:01', NULL),
(132, 'badmash2000', 'sonutejas2000@gmail.com', NULL, 'dUeWiW_6Rvy8pstflhPaF1:APA91bEleZ-mjkKO8_rlBiAexI6JeA8FwszBgY9X2_wmCxFxD_YgsWbo0VZ5-JnRxs0tbbiSnlOstFxWhOtAfN2XduQVNOt4P87B7KQvGwZxfrGKF_xuoKNhA9HQ1nOUUQQftThqaJuk', 'customer', NULL, '$2y$10$qYUya0iD2oXIt1qdiOs3A.W6EbHFPSmxdmCoQjVe4.e5aHfqQFQMu', NULL, 1, 1, NULL, NULL, '2024-03-07 12:09:40', '2024-04-18 12:52:13', NULL),
(142, 'Ravikiran kasarapu', 'ravikirankasarapu132@gmail.com', NULL, 'esNohMySSle1n3qVXNvimA:APA91bFn8lgiHfgzU2ISHI99Zo1w9gocCJtnQB9Npd4Ovv9X-KZyXuqeyge-Vm5GZz6c5tyYfm66FtO0M-UOhhXgjVo07DUd5g2DjRolk6cm1i-YDFnJhbm11xbDXwSpCRrPOORTww2f', 'customer', NULL, '$2y$10$MxE0j1/4XUsRJWmSImD6NuY.WijUs5uNVzjVT.LuId6VZJUE0hP2u', NULL, 1, 1, NULL, NULL, '2024-03-08 13:14:33', '2024-03-09 09:02:45', NULL),
(143, 'Arjun Reddy', 'arjun.mane@profcyma.com', '1685855885', NULL, 'customer', NULL, '$2y$10$d0oJ4gmQ9yMvleXUe0Izne1j/9qB9.NJx8nH9nL9z8dAISNzZ8X9q', NULL, 1, 1, NULL, NULL, '2024-03-09 12:51:16', '2024-03-13 06:26:00', NULL),
(144, 'Prajwal Narkhede', 'prajwal.narkhede@profcyma.com', NULL, NULL, 'customer', NULL, '$2y$10$Db/0XUJ8KvJQ9tn7BZYh9e89WeYDdWHeU.LDNZSCAzN105qonr/G.', NULL, 1, 1, NULL, NULL, '2024-03-11 06:00:49', '2024-03-11 12:10:01', NULL),
(145, 'Yuktesh Jadhav', 'yuktesh.jadhav@profcyma.com', NULL, 'dw9-peGXSZuUpa9EnAivrf:APA91bFoThWihjHQ5u7KJ62PsTvCuKA9pZfM8sINARkj1FTrcgId4yP78zcJPUOfjcw_74a9NZDGW_anTmmKMlz1ekihJsyYR1dprwZrhRcaSs0TJW2jIRaFF_K3I-e19bFprtQMIlEj', 'customer', NULL, '$2y$10$lTpOnr8hasxtKm9ZajHeSeQfq8x4NnYkMCpEVvKiE.q0SQN5nFkru', NULL, 1, 1, NULL, NULL, '2024-03-12 12:36:32', '2024-04-23 06:58:07', NULL),
(146, 'Mrunal Thakur', 'mrunali.zoting@profcyma.com', '7066918985', 'fx0QExgmQCirhixWV4myAg:APA91bHfFakNgni-r93c-EWuXKVy1MorTPs1xLpw1CrSIaoJjd3lED8rLdy5osMMlNounsvBPpttmOcxL3PWmqIFesNebCbg1oRxEInzMc0rQiapTk_OOMtfPhrrXCobeDUKr_u3yPp8', 'customer', NULL, '$2y$10$Hz2Ug4Jeua8636zoPEYAzeI1FuERJAvkNxnkngQoCFTS/61V/cwNi', NULL, 1, 1, NULL, NULL, '2024-03-13 06:05:00', '2024-04-24 05:33:31', NULL),
(147, 'YUKTESH JADHAV', 'yukteshjadhav007@gmail.com', NULL, NULL, 'customer', NULL, '$2y$10$yydK2XjEblm/Ba6aHK8UV.NjoiycxscSVkoZh0HvxJoCL.t/QK//y', NULL, 1, 1, NULL, NULL, '2024-03-13 09:51:28', '2024-03-13 10:01:23', NULL),
(149, 'Peater parker', 'peater@gmail.com', NULL, 'dBixEvB0SPmYeSKywUwYWw:APA91bF4wuAxUgSoapBUMJpdSS73nPTZAzQ86-gZ7Ac1nu0AdtEw6DCB32LvYceN1-s2PZ8KQXK1uxGqUP5q7-PdGEW3VsrsKRhh3297xxjlRKReQF5hyR-sN-dpVLX7nmR6NPIR102G', 'customer', NULL, '$2y$10$1NsZPcD1iftOhrxBOiobVuAu9Y45wtoU8lBJrAktj2V7J/aGd3/PO', NULL, 1, 1, NULL, NULL, '2024-03-15 04:56:35', '2024-03-15 12:59:13', NULL),
(150, 'new acc', 'abc@example.com', '5682868683', NULL, 'customer', NULL, '$2y$10$VOvu.iT96ftKvOZhKzqcXe3NQTWIXjvn8XtZzanMNSk.T2WrCVXtG', NULL, 1, 1, NULL, NULL, '2024-03-15 11:19:53', '2024-03-15 11:24:00', NULL),
(152, 'Tejas Langote', 'tejaslangote@gmail.com', NULL, NULL, 'customer', NULL, '$2y$10$fD/B6kUV5/xtmKlzTuGTf.Z/we/tw9hvU7QybqweA.c.ZYJdF6rU6', NULL, 1, 1, NULL, NULL, '2024-03-15 11:26:38', '2024-03-16 06:37:10', NULL),
(153, 'Tejas Langote', '', NULL, NULL, 'customer', NULL, '$2y$10$CsisZs17ZGpzXnGU8eB/ee4a4PhY28.Vy3RwJaXQJhZWM2ujxc/fq', NULL, 1, 1, NULL, '122097005342138490', '2024-03-16 06:37:28', '2024-03-16 06:37:28', NULL),
(154, 'DishuM', 'disha.marathe@profcyma.com', '9130530883', 'eGSUxyboR82p3n-KKSWzOk:APA91bEAmwgmeY8TgdzU6uuPSlk-dxcACoRQ-4zBDCAn7FSeiF0ayFUDGwbwmsLc2UacSocWWEGrAIWEA0vT_kWpzNSjbk54mOpzy77NKtZ4zzzJRZ3Ue-KtzVFjdBKT3k9AceG9WSdJ', 'customer', NULL, '$2y$10$NdlRPDMr4XIDM7EAAr0oi.FKWM1jyd7wcXdgnJC8/lVg4j1D54KYq', NULL, 1, 1, NULL, NULL, '2024-03-18 06:16:40', '2024-03-18 06:16:40', NULL),
(155, 'Tejas Langote', 'tejas.langote@profcyma.com', NULL, NULL, 'customer', NULL, '$2y$10$9Pil.wVmKxlZdUAZEL0niOKCN/vkea7FJB9VTMWChls60BAX4u8sm', NULL, 1, 1, NULL, NULL, '2024-03-19 04:39:29', '2024-04-18 12:52:07', NULL),
(156, 'poonamchawariya98@gm', 'poonamchawariya98@gmail.com', '9623045231', 'eMrkmI-sRhCNVPs8wwfmZT:APA91bG2qdSTFwoBhhSYDfTN2BLx2KXyS6oC7nQ9r7_wJnqR_V8YTen1SQMZBdahE22bm0xBaoIr8Q_KEEHgh01oKxv9_U3C_Exrii7O8b70VaEWFytrCs3NOSSOH0DSou6-bMKMv0uU', 'customer', NULL, '$2y$10$xZLagNtkETkTLksZCbhHdODJmkyCQ/Sbl0b0puaweuTFSWNaHLP.W', NULL, 1, 1, NULL, NULL, '2024-03-19 05:33:34', '2024-03-19 05:33:34', NULL),
(157, 'demo', 'demo@gmail.com', '1234567890', NULL, 'customer', NULL, '$2y$10$8bWcxT85gHVgvt2EAm6n1O/26h4JcyNz7j07Ow0avVjqu5KFFgAHS', NULL, 1, 1, NULL, NULL, '2024-03-21 05:33:53', '2024-03-30 06:04:13', NULL),
(158, 'Ram', 'sandhyavakalapudi13@gmail.com', NULL, 'et5hp52dRIK1nxnPHdilV4:APA91bHKii3E2DtH0b3JCmdsCX1Cpc0G56wKFJ8b9Xli26tToSWODm7qq4BZh9EFoc9qiMZ12jgKR0G0t8unGS3M5oEZTyuCTcP10QmpmnK4xwLfZxMM47jnE3mRFPIYOl0YkjJQxau9', 'customer', NULL, '$2y$10$9FIA1OXLqUyVUNdsO3HLPOKIVVQ5BoJdIsSPPIJYlB6qK2xuA.K0i', NULL, 1, 1, NULL, NULL, '2024-03-22 02:05:43', '2024-03-22 02:09:58', NULL),
(159, 'demo@google.com', 'demo@google.com', NULL, 'cHtQqZw1TvyI0AngonQh9A:APA91bG44ta1kN8pLVh2TislsxgmSihQjS6GmPfPhOWzdwFPBN1EyCwi7jGHqU-Qn4hOx_FVjoCwmzF-PeyIe5UX5AOJApUcTZm1G2QmDS7gYcW0DA3_orG7c3WwHjAd5_RpxXkdXlaK', 'customer', NULL, '$2y$10$7pFA1l25fbxjfyUlkBYYy.sm4oZfSTf6fnxYWNE5KsHmYcGmg/xw2', NULL, 1, 1, NULL, NULL, '2024-03-26 12:58:14', '2024-04-25 09:03:21', NULL),
(160, 'ViRtual2092', 'virtual2092@gmail.com', '7876360130', 'e56SRTHDTeurTtw94BvhhG:APA91bFeXO41-TKm8UjaD88Jbf_1fDLUJXTSicVneXJwZ4JEceiVB-LdelfN3hqRaEl83wd_SrPkHUnUJrgBSGemc2W1Ydmvy2DeSLBAYJrZR7OMWH-2ngGHjFaeuTeVEEsOb4BXPiqj', 'customer', NULL, '$2y$10$vPtYlJrXJtaYowb1O2sHhOgZ0.Rp2B3evEiiUfUVAevmEYKBkeX16', NULL, 1, 1, NULL, NULL, '2024-03-28 17:40:16', '2024-03-28 17:40:16', NULL),
(161, 'Saurabh', 'saurabh.pharate@profcyma.com', '9975279190', 'c35sR4ovT0KzVy_VdsA_sA:APA91bE7yqc0jP6H7VmckgtkJmHslM93z8bULhiB5G6yZ9zGZuL6yvflz7I1q_QHI9DgP3HAxt7OHNbKyC17ddA0PR-BkymUk2wM4xsMB3dqpuhVNtzzXM8QWv4c2gMdfwi30u8IwoHk', 'customer', NULL, '$2y$10$Pq75krjJuLFoTQnpqYDIf.cQc/e6TbuP1P/ILDsAno8jphJuRXEE2', NULL, 1, 1, NULL, NULL, '2024-03-30 06:00:31', '2024-03-30 06:00:32', NULL),
(170, 'hello980', 'praveen@gmail.com', '7095380810', 'dTLzCv7mQy2LXLz4qv2JiR:APA91bFvHCT1pmmB3xNvpxt7PLNmrhBaKpnmT4OloH35njTxmgDkBgBA-sDwJg6e-S6llq_bZpD1Oxi2zqidy5eUyWBJJpaqof_hWnz9TnRJPILsccxK6dxbGL7a_K8KsYE3uwzBUcfI', 'customer', NULL, '$2y$10$2YFTcYmLzbZyRqPiLlQv/OIC/.8M.kRT9R92/ZPScks/AwJn2e35u', NULL, 1, 1, NULL, NULL, '2024-03-30 08:16:35', '2024-03-30 08:20:54', NULL),
(171, 'Vamsi Krishna Chava', 'chavavamsi29@gmail.com', '9494288767', 'emO0e3bhS1KVkxcBmKrBpY:APA91bEJmkDMDtp9-kL-dqdbwZHR3W8Gw1zzWu6eQcZicpPs6xoDHUVxS6c46PKwkbQDyLDrpfr0v2XphYypgwR_YDCx6Q77HFLolVVZU8GsFGnJRXTtgV4HOu6_urD99cwjTnzC-bSB', 'customer', NULL, '$2y$10$yOzjc.xCklSqrPLiVDy.jOmXenMMvWwYHVON0OSijhrkEIbH5FYO2', NULL, 1, 1, NULL, NULL, '2024-03-30 14:42:29', '2024-03-30 14:42:29', NULL),
(172, 'Brian', 'hi@gmail.com', '7993793482', NULL, 'customer', NULL, '$2y$10$Or57hGGlxb8qi6gvGJliVuM8DtjfpQkIIDbZ11OwuS2zpFwDYP04C', NULL, 1, 1, NULL, NULL, '2024-03-30 16:28:32', '2024-04-24 07:14:12', NULL),
(173, 'rk reddy', 'ravikirankasarapu13h2@gmail.com', '7075816826', NULL, 'customer', NULL, '$2y$10$Bjlgsm2Hp9FS2eH9/BAuYesEVmtp0fbaZmvMzVHIXQWE85X.6jzza', NULL, 1, 1, NULL, NULL, '2024-03-30 16:44:51', '2024-04-04 14:47:27', NULL),
(174, 'Teja Dadi', 'tejaeinstein007@gmail.com', '9315350373', 'cBVXNO-GRUSO__nMB7homK:APA91bED3UDUHckoUIyxzle9NcfVZ0IfPoKRelhMNr5tHU9MSW1kpPVFh6Itl1ZO_jRstxTdbxVbxpRwvzMMUkXnRngVNdiQPeno4Ii9PPbWAgS7-AuIGFLR9V5h2sa17A46PbkxE6zu', 'customer', NULL, '$2y$10$FbfoKxovqYFHP9zgYaoHkORVbXs7dBAp5a6cbyNJJwRcNZ5sYQhoW', NULL, 1, 1, NULL, NULL, '2024-04-01 15:28:45', '2024-04-01 15:28:45', NULL),
(175, 'sandeep', 'yandrapusandeep47@gmail.com', '7981084640', 'fTlB0KpsTg-O7xO7ReoAUb:APA91bGPulbxDIDNUGfMMjX8NzUI151WR3a-uLetrgzmaFtAEMx_-5mbisB_Q1IzBnPak3paETmClWqDbmdNT14ofTCQDLAgedJuak10JaQNelitq3uTvZQkKUVcqmcXb5ZbKYNISiDB', 'customer', NULL, '$2y$10$l7Ur/nV9lCDGrUOB6cWWAupMgxr3gNSFwIOHCfKB.EzetE5eBSg0.', NULL, 1, 1, NULL, NULL, '2024-04-02 16:27:51', '2024-04-02 16:27:51', NULL),
(176, 'koti rajesh', 'kotirajakotiraja765@gmail.com', '6301880439', 'e53lac0-QLy5SyuwGUaCJp:APA91bF_oHG_ey27Iqq-5RHcsMo-2_q0AxWS8MN8crk2qUPWR9bNWI6b3XNJcDgoMCur4Fg5Hvcy_So6o0V7mviC097wOPYc3qoCD8x67LZQI-n_zgNTCrpWVQSQRB1F4N-ofckJNrV5', 'customer', NULL, '$2y$10$xXn6l0z3SfFRxt1mM8cTdOxzELf6ariwKbQeLVK3fs2zTnTdrTm6W', NULL, 1, 1, NULL, NULL, '2024-04-02 16:42:10', '2024-04-02 16:42:10', NULL),
(177, 'dinesh143GK', 'dineshgasiganti143@gmail.com', '8179252500', NULL, 'customer', NULL, '$2y$10$WVnk/pXfiKfuPzGUQPDDRe2JZ4t35s/jitpE5DoOhmmjTzTlLbiJO', NULL, 1, 1, NULL, NULL, '2024-04-02 16:43:01', '2024-04-02 16:43:01', NULL),
(178, 'Raju@VEGESNA711', 'vamsivegesna123@gmail.com', '8639404463', 'e6oic4diRBO4daNXIQ_-Ry:APA91bH6janbPqwGsVr-mkL2B8fUbDmwDE-O_EFa7q0cb3M8UmA2DZc-FyU15wiQUgbdXuADVmq6dsZLnWijqWDQFRZAn0VjfpJvDL25BoYCw5nuKOpGMMt9WcjehWMJtD-4cXgGCZHu', 'customer', NULL, '$2y$10$/nqhct5vIgL.4f74pU2yzuI.SFJrAZegJ9MbMWxWJmkEIo8Ww.bOu', NULL, 1, 1, NULL, NULL, '2024-04-02 16:49:05', '2024-04-02 16:49:05', NULL),
(179, 'nitesh', 'nulinitesh3@gmail.com', '9314245672', 'flkKr9koSuGb0QJNZK5ewf:APA91bHbd0HbN9rwEnb7N-msskMA1zsMI453QTDvsK3m4tVUloKz-g9-hKkxe36ngYmU0PRTAAh0ndlkrPmmcz5tpiLj3pJGr1mSM8W_LKulOalqGVr_AKzzHZyWCSU2JCtnCjsimGjw', 'customer', NULL, '$2y$10$5HhNWj.j9wjH/g6JgGhgXOz4bMUbOO7WIjMFEQdUYeDzcOMlERghS', NULL, 1, 1, NULL, NULL, '2024-04-02 17:40:49', '2024-04-02 17:40:49', NULL),
(180, 'veeradsp', 'dharavathvprasad77@gmail.com', '9705318709', 'dZJCKfrwQ2q_CWxa6rGlle:APA91bGgO-NT6z6AD8Sgjg0qTcrvxrMbAK5_nFLmu09yU9_4MQ3walQGGgMs388OgDhsHAuizOvZ9Hb8rQDLAsp6fuNK7V5PUoFvodjVqRJjB7SXVgqM3aHrWDXhaILel8bq5APkomQ8', 'customer', NULL, '$2y$10$3gDn7i/qsDKWNZ8leLHnGuRgWUv/im.HI3Rxi68fl0qEJ4m8h8j7O', NULL, 1, 1, NULL, NULL, '2024-04-02 17:53:20', '2024-04-02 17:53:20', NULL),
(181, 'charan', 'kodatisaicharan1702@gmail.com', '9676900283', 'f1oqZOJoRyas_uyOHshFUu:APA91bGm_424ppb9ZZHS0bSx08QRiJfuaTlhu-pBRFCkt9uZna_6OoKe-xBF1MLhiB6O8j5d9V07YReQSRjDa3tVja154nn7rGNgzo_h0E-GPhj3uzd8_3Y88zyTuap2W8ADHSxKAubO', 'customer', NULL, '$2y$10$TYA7sjTnd7STN5EaqEHgTu4TG4GZFA6KUz.wquXrNM7kBD.aZwZcG', NULL, 1, 1, NULL, NULL, '2024-04-02 18:42:55', '2024-04-02 18:42:55', NULL),
(182, 'Peter', 'chay@gmail.com', NULL, NULL, 'customer', NULL, '$2y$10$ifwQSBgr1jx0gKDvTdlSLeTC2WcGLcFE8PJaeRWg8gXCl.cXiebWq', NULL, 1, 1, NULL, NULL, '2024-04-04 11:02:53', '2024-04-24 14:57:17', NULL),
(183, 'Surya', 'suryaprakashchokkapu@gmail.com', '9381824655', 'fEgUdxFcR1KbQvaM_-1viR:APA91bGRFB6BW7BHbw1kL2kbipHkbdZ455N4hc5KUCqzsuBfAscVuqsLXgdB2BwNkwlHLQs9qJ_i-McxwlSeNUi2QqO1g6zBOdkcDGX9s8-HgRKWus3SqdXnY1y3JKZX5Y4eIooH4KR_', 'customer', NULL, '$2y$10$BuNzVr3/EiD2sttqAcByzOwSFHRJBC/3qjm9mOhaPygzbGFgJQ7sm', NULL, 1, 1, NULL, NULL, '2024-04-04 16:49:29', '2024-04-04 16:49:29', NULL),
(184, 'rkreddy', 'ravikirankasarapu1321@gmail.com', NULL, 'dVZJX2-cQIyhxoXZivH-tl:APA91bHEaPYKj5AbYA7uTxzTmXkm8eQfaI2zjvE-bVLcBRQ2wJkDofzbTNDemjGxaaReaYQ31LbEEB64wc0-uGvbKeYgOuh5xOpcb8n_by23RHZCyVrh0A8M8641F-BHs4QDPfz1xCQ6', 'customer', NULL, '$2y$10$h0SvBTU.9mEIv1p4VDxjrehDPKY/e/9kg08qVQZu37iYqcGpcgjZi', NULL, 1, 1, NULL, NULL, '2024-04-04 17:09:13', '2024-04-04 17:09:13', NULL),
(185, 'omera8462@gmail.com', 'omera8462@gmail.com', '8790079063', 'eC9JFtjuS_CUj-u9D7OT8x:APA91bEs-4WEr3rMVXq7QetRzxim4LvjXaAEaRdSH_lkA3rlIij78E5hZSDK6ToRrzVCrkAotXg-7JWwDNxybNnH13zuJcee_VVHtcHuzQ_r0RsZiFtyiVhwUr2pw6H5gHzoV6wgzrB3', 'customer', NULL, '$2y$10$h5VSgJ9eTxlPdVqBKxPR9ePVif0t6oeiaKlMrZnWSU25gJ8BG4jQq', NULL, 1, 1, NULL, NULL, '2024-04-15 08:01:42', '2024-04-15 08:01:42', NULL),
(186, 'ayush14', 'ayushbinjolabinjoo@gmail.com', '9997939466', 'fY7QxatvTWSAqumzb8y70i:APA91bEKwyyd_Cc4_AZf4qFltLSNYV6KGKNUubSw5Cv_VE3nC1gwJtv3qtsa7FoHsmqFBzotncrt1zcJLtLFI1H-aA35fTbeyicmvb37qNVUNV49xEkIwLIxWkoBSstnrpldR_WPdH4O', 'customer', NULL, '$2y$10$n8Rmku9aPNhu57D77B6oH.F/SU2uKnOyTAriKk0MlnS0SOaIXXzsi', NULL, 1, 1, NULL, NULL, '2024-04-15 16:48:43', '2024-04-15 16:48:43', NULL),
(187, 'Aditya20', 'aditya.madkar@profcyma.com', '9595642020', 'ebjc043dRciDDw1cpDzHmO:APA91bEmgnPsUCr8mHwpzJ1hPQKX3qfNLHsQ6D_dfVLN6qehg2GMvH19UmRlCI3YsrioZsHgx7TYoEefibDCyPm0eYoBbbMf9rLQlMhupBQu6oNEAASx88gk8-JA7PPPkzUf7mGabCAa', 'customer', NULL, '$2y$10$gcIu5mVP6UMjkCUG9EsjvOqWofA7enu.2uyK9nRKK40jPyAj/k7gm', NULL, 1, 1, NULL, NULL, '2024-04-18 07:26:33', '2024-04-24 05:30:46', NULL),
(188, 'Praveen', 'praveenkumarboddeda1998@gmail.com', NULL, 'fLL2zWqCT82GFCNDcocWx3:APA91bFzk3IYZfkXzpkv9Nk49jLY_MMdH4vDwgZvj22wzszT7wJM5Hs68ok9ASeJMWXK05hr20-ROnzeJaBXMcR-Vos4LSmvWwArxLbeC3cFSbJaDpc1TKzUTPczGxMkFYXblDZxt6JH', 'customer', NULL, '$2y$10$DhvL5YVTVWjElX.BGVCU1ecQsoKeCtY54sRw5AjXmuhHkFpRgka8S', NULL, 1, 1, NULL, NULL, '2024-04-21 10:03:32', '2024-04-21 10:52:25', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_chat_images`
--

CREATE TABLE `user_chat_images` (
  `id` bigint UNSIGNED NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_chat_images`
--

INSERT INTO `user_chat_images` (`id`, `image`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, NULL, 1, '2024-01-06 12:26:52', '2024-01-06 12:26:52', NULL),
(2, NULL, 1, '2024-01-06 12:28:02', '2024-01-06 12:28:02', NULL),
(3, NULL, 1, '2024-01-06 12:28:42', '2024-01-06 12:28:42', NULL),
(4, 'admin/home/chatImage/7514camera 1.png', 1, '2024-01-06 12:29:27', '2024-01-06 12:29:27', NULL),
(5, 'admin/home/chatImage/4520IMAGES_0.jpg', 1, '2024-01-25 06:40:42', '2024-01-25 06:40:42', NULL),
(6, 'admin/home/chatImage/4829IMAGES_0.jpg', 1, '2024-01-27 15:33:01', '2024-01-27 15:33:01', NULL),
(7, 'admin/home/chatImage/1052IMAGES_0.jpg', 1, '2024-01-27 15:33:23', '2024-01-27 15:33:23', NULL),
(8, 'admin/home/chatImage/2478IMAGES_0.jpg', 1, '2024-01-27 15:33:28', '2024-01-27 15:33:28', NULL),
(9, 'admin/home/chatImage/5180IMAGES_0.jpg', 1, '2024-04-03 05:44:59', '2024-04-03 05:44:59', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_interests`
--

CREATE TABLE `user_interests` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `interest_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_interests`
--

INSERT INTO `user_interests` (`id`, `user_id`, `interest_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(342, 125, 20, 1, '2024-03-05 13:02:01', '2024-03-05 13:02:01', NULL),
(343, 125, 24, 1, '2024-03-05 13:02:01', '2024-03-05 13:02:01', NULL),
(344, 125, 26, 1, '2024-03-05 13:02:01', '2024-03-05 13:02:01', NULL),
(345, 125, 1, 1, '2024-03-05 13:02:01', '2024-03-05 13:02:01', NULL),
(392, 132, 20, 1, '2024-03-07 12:10:34', '2024-03-07 12:10:34', NULL),
(393, 132, 30, 1, '2024-03-07 12:10:34', '2024-03-07 12:10:34', NULL),
(394, 132, 34, 1, '2024-03-07 12:10:34', '2024-03-07 12:10:34', NULL),
(395, 132, 36, 1, '2024-03-07 12:10:34', '2024-03-07 12:10:34', NULL),
(396, 132, 48, 1, '2024-03-07 12:10:34', '2024-03-07 12:10:34', NULL),
(397, 132, 55, 1, '2024-03-07 12:10:34', '2024-03-07 12:10:34', NULL),
(398, 132, 61, 1, '2024-03-07 12:10:34', '2024-03-07 12:10:34', NULL),
(399, 132, 65, 1, '2024-03-07 12:10:34', '2024-03-07 12:10:34', NULL),
(400, 132, 67, 1, '2024-03-07 12:10:34', '2024-03-07 12:10:34', NULL),
(401, 132, 69, 1, '2024-03-07 12:10:34', '2024-03-07 12:10:34', NULL),
(402, 132, 71, 1, '2024-03-07 12:10:34', '2024-03-07 12:10:34', NULL),
(403, 128, 24, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(404, 128, 44, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(405, 128, 47, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(406, 128, 52, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(407, 128, 54, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(408, 128, 57, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(409, 128, 62, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(410, 128, 64, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(411, 128, 70, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(412, 128, 80, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(413, 128, 8, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(414, 128, 10, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(415, 128, 12, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(416, 128, 15, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(417, 128, 93, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(418, 128, 95, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(419, 128, 99, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(420, 128, 101, 1, '2024-03-07 12:34:16', '2024-03-07 12:34:16', NULL),
(467, 142, 30, 1, '2024-03-09 09:03:37', '2024-03-09 09:03:37', NULL),
(468, 142, 42, 1, '2024-03-09 09:03:37', '2024-03-09 09:03:37', NULL),
(469, 142, 48, 1, '2024-03-09 09:03:37', '2024-03-09 09:03:37', NULL),
(470, 143, 24, 1, '2024-03-09 12:52:13', '2024-03-09 12:52:13', NULL),
(471, 143, 26, 1, '2024-03-09 12:52:13', '2024-03-09 12:52:13', NULL),
(472, 143, 4, 1, '2024-03-09 12:52:13', '2024-03-09 12:52:13', NULL),
(473, 143, 5, 1, '2024-03-09 12:52:13', '2024-03-09 12:52:13', NULL),
(474, 144, 20, 1, '2024-03-11 06:04:07', '2024-03-11 06:04:07', NULL),
(475, 144, 24, 1, '2024-03-11 06:04:07', '2024-03-11 06:04:07', NULL),
(476, 144, 44, 1, '2024-03-11 06:04:07', '2024-03-11 06:04:07', NULL),
(487, 146, 20, 1, '2024-03-13 06:09:36', '2024-03-13 06:09:36', NULL),
(488, 146, 26, 1, '2024-03-13 06:09:36', '2024-03-13 06:09:36', NULL),
(489, 146, 34, 1, '2024-03-13 06:09:36', '2024-03-13 06:09:36', NULL),
(490, 146, 36, 1, '2024-03-13 06:09:36', '2024-03-13 06:09:36', NULL),
(491, 147, 20, 1, '2024-03-13 09:52:04', '2024-03-13 09:52:04', NULL),
(492, 147, 24, 1, '2024-03-13 09:52:04', '2024-03-13 09:52:04', NULL),
(493, 147, 26, 1, '2024-03-13 09:52:04', '2024-03-13 09:52:04', NULL),
(494, 147, 34, 1, '2024-03-13 09:52:04', '2024-03-13 09:52:04', NULL),
(495, 147, 36, 1, '2024-03-13 09:52:04', '2024-03-13 09:52:04', NULL),
(501, 149, 24, 1, '2024-03-15 05:12:42', '2024-03-15 05:12:42', NULL),
(502, 149, 26, 1, '2024-03-15 05:12:42', '2024-03-15 05:12:42', NULL),
(503, 149, 34, 1, '2024-03-15 05:12:42', '2024-03-15 05:12:42', NULL),
(504, 149, 36, 1, '2024-03-15 05:12:42', '2024-03-15 05:12:42', NULL),
(505, 150, 20, 1, '2024-03-15 11:22:29', '2024-03-15 11:22:29', NULL),
(506, 150, 24, 1, '2024-03-15 11:22:29', '2024-03-15 11:22:29', NULL),
(507, 150, 26, 1, '2024-03-15 11:22:29', '2024-03-15 11:22:29', NULL),
(512, 152, 20, 1, '2024-03-15 11:27:23', '2024-03-15 11:27:23', NULL),
(513, 152, 24, 1, '2024-03-15 11:27:23', '2024-03-15 11:27:23', NULL),
(514, 152, 26, 1, '2024-03-15 11:27:23', '2024-03-15 11:27:23', NULL),
(515, 152, 30, 1, '2024-03-15 11:27:23', '2024-03-15 11:27:23', NULL),
(516, 152, 34, 1, '2024-03-15 11:27:23', '2024-03-15 11:27:23', NULL),
(517, 152, 36, 1, '2024-03-15 11:27:23', '2024-03-15 11:27:23', NULL),
(518, 154, 30, 1, '2024-03-18 06:18:21', '2024-03-18 06:18:21', NULL),
(519, 154, 34, 1, '2024-03-18 06:18:21', '2024-03-18 06:18:21', NULL),
(520, 154, 36, 1, '2024-03-18 06:18:21', '2024-03-18 06:18:21', NULL),
(521, 154, 1, 1, '2024-03-18 06:18:21', '2024-03-18 06:18:21', NULL),
(522, 154, 15, 1, '2024-03-18 06:18:21', '2024-03-18 06:18:21', NULL),
(523, 154, 99, 1, '2024-03-18 06:18:21', '2024-03-18 06:18:21', NULL),
(524, 154, 101, 1, '2024-03-18 06:18:21', '2024-03-18 06:18:21', NULL),
(539, 156, 48, 1, '2024-03-19 05:35:57', '2024-03-19 05:35:57', NULL),
(540, 156, 44, 1, '2024-03-19 05:35:57', '2024-03-19 05:35:57', NULL),
(541, 155, 20, 1, '2024-03-19 05:59:48', '2024-03-19 05:59:48', NULL),
(542, 155, 24, 1, '2024-03-19 05:59:48', '2024-03-19 05:59:48', NULL),
(543, 155, 26, 1, '2024-03-19 05:59:48', '2024-03-19 05:59:48', NULL),
(544, 155, 1, 1, '2024-03-19 05:59:48', '2024-03-19 05:59:48', NULL),
(545, 155, 2, 1, '2024-03-19 05:59:48', '2024-03-19 05:59:48', NULL),
(546, 155, 7, 1, '2024-03-19 05:59:48', '2024-03-19 05:59:48', NULL),
(547, 155, 11, 1, '2024-03-19 05:59:48', '2024-03-19 05:59:48', NULL),
(567, 126, 20, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(568, 126, 24, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(569, 126, 26, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(570, 126, 44, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(571, 126, 47, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(572, 126, 52, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(573, 126, 54, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(574, 126, 57, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(575, 126, 59, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(576, 126, 64, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(577, 126, 6, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(578, 126, 8, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(579, 126, 10, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(580, 126, 12, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(581, 126, 15, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(582, 126, 18, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(583, 126, 22, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(584, 126, 28, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(585, 126, 31, 1, '2024-03-19 13:05:53', '2024-03-19 13:05:53', NULL),
(586, 157, 20, 1, '2024-03-21 05:34:59', '2024-03-21 05:34:59', NULL),
(587, 157, 24, 1, '2024-03-21 05:34:59', '2024-03-21 05:34:59', NULL),
(588, 157, 26, 1, '2024-03-21 05:34:59', '2024-03-21 05:34:59', NULL),
(589, 157, 30, 1, '2024-03-21 05:34:59', '2024-03-21 05:34:59', NULL),
(590, 157, 34, 1, '2024-03-21 05:34:59', '2024-03-21 05:34:59', NULL),
(591, 157, 36, 1, '2024-03-21 05:34:59', '2024-03-21 05:34:59', NULL),
(592, 157, 39, 1, '2024-03-21 05:34:59', '2024-03-21 05:34:59', NULL),
(593, 157, 42, 1, '2024-03-21 05:34:59', '2024-03-21 05:34:59', NULL),
(594, 158, 52, 1, '2024-03-22 02:08:09', '2024-03-22 02:08:09', NULL),
(595, 158, 66, 1, '2024-03-22 02:08:09', '2024-03-22 02:08:09', NULL),
(596, 158, 72, 1, '2024-03-22 02:08:09', '2024-03-22 02:08:09', NULL),
(610, 160, 20, 1, '2024-03-28 17:41:37', '2024-03-28 17:41:37', NULL),
(611, 160, 24, 1, '2024-03-28 17:41:37', '2024-03-28 17:41:37', NULL),
(612, 160, 63, 1, '2024-03-28 17:41:37', '2024-03-28 17:41:37', NULL),
(613, 160, 65, 1, '2024-03-28 17:41:37', '2024-03-28 17:41:37', NULL),
(614, 160, 67, 1, '2024-03-28 17:41:37', '2024-03-28 17:41:37', NULL),
(615, 160, 69, 1, '2024-03-28 17:41:37', '2024-03-28 17:41:37', NULL),
(616, 159, 1, 1, '2024-03-29 12:06:40', '2024-03-29 12:06:40', NULL),
(617, 159, 2, 1, '2024-03-29 12:06:40', '2024-03-29 12:06:40', NULL),
(618, 159, 3, 1, '2024-03-29 12:06:40', '2024-03-29 12:06:40', NULL),
(619, 159, 4, 1, '2024-03-29 12:06:40', '2024-03-29 12:06:40', NULL),
(620, 159, 5, 1, '2024-03-29 12:06:40', '2024-03-29 12:06:40', NULL),
(621, 161, 24, 1, '2024-03-30 06:02:29', '2024-03-30 06:02:29', NULL),
(622, 161, 26, 1, '2024-03-30 06:02:29', '2024-03-30 06:02:29', NULL),
(623, 161, 69, 1, '2024-03-30 06:02:29', '2024-03-30 06:02:29', NULL),
(624, 161, 52, 1, '2024-03-30 06:02:29', '2024-03-30 06:02:29', NULL),
(625, 161, 66, 1, '2024-03-30 06:02:29', '2024-03-30 06:02:29', NULL),
(626, 161, 68, 1, '2024-03-30 06:02:29', '2024-03-30 06:02:29', NULL),
(644, 170, 13, 1, '2024-03-30 08:17:45', '2024-03-30 08:17:45', NULL),
(645, 171, 77, 1, '2024-03-30 14:43:23', '2024-03-30 14:43:23', NULL),
(665, 174, 24, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(666, 174, 65, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(667, 174, 47, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(668, 174, 75, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(669, 174, 81, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(670, 174, 40, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(671, 174, 6, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(672, 174, 10, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(673, 174, 18, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(674, 174, 31, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(675, 174, 13, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(676, 174, 19, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(677, 174, 25, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(678, 174, 29, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(679, 174, 93, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(680, 174, 95, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(681, 174, 82, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(682, 174, 83, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(683, 174, 88, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(684, 174, 90, 1, '2024-04-01 15:32:40', '2024-04-01 15:32:40', NULL),
(685, 175, 20, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(686, 175, 24, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(687, 175, 48, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(688, 175, 44, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(689, 175, 47, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(690, 175, 52, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(691, 175, 54, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(692, 175, 1, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(693, 175, 25, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(694, 175, 32, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(695, 175, 194, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(696, 175, 93, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(697, 175, 113, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(698, 175, 115, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(699, 175, 116, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(700, 175, 118, 1, '2024-04-02 16:32:40', '2024-04-02 16:32:40', NULL),
(701, 176, 25, 1, '2024-04-02 16:44:06', '2024-04-02 16:44:06', NULL),
(702, 176, 29, 1, '2024-04-02 16:44:06', '2024-04-02 16:44:06', NULL),
(703, 176, 45, 1, '2024-04-02 16:44:06', '2024-04-02 16:44:06', NULL),
(704, 176, 56, 1, '2024-04-02 16:44:06', '2024-04-02 16:44:06', NULL),
(705, 176, 121, 1, '2024-04-02 16:44:06', '2024-04-02 16:44:06', NULL),
(706, 176, 122, 1, '2024-04-02 16:44:06', '2024-04-02 16:44:06', NULL),
(707, 176, 123, 1, '2024-04-02 16:44:06', '2024-04-02 16:44:06', NULL),
(708, 176, 135, 1, '2024-04-02 16:44:06', '2024-04-02 16:44:06', NULL),
(709, 176, 140, 1, '2024-04-02 16:44:06', '2024-04-02 16:44:06', NULL),
(710, 176, 142, 1, '2024-04-02 16:44:06', '2024-04-02 16:44:06', NULL),
(711, 177, 20, 1, '2024-04-02 16:47:03', '2024-04-02 16:47:03', NULL),
(712, 177, 36, 1, '2024-04-02 16:47:03', '2024-04-02 16:47:03', NULL),
(713, 177, 44, 1, '2024-04-02 16:47:03', '2024-04-02 16:47:03', NULL),
(714, 177, 47, 1, '2024-04-02 16:47:03', '2024-04-02 16:47:03', NULL),
(715, 177, 1, 1, '2024-04-02 16:47:03', '2024-04-02 16:47:03', NULL),
(716, 177, 3, 1, '2024-04-02 16:47:03', '2024-04-02 16:47:03', NULL),
(717, 177, 4, 1, '2024-04-02 16:47:03', '2024-04-02 16:47:03', NULL),
(718, 178, 20, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(719, 178, 24, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(720, 178, 30, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(721, 178, 34, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(722, 178, 42, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(723, 178, 55, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(724, 178, 60, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(725, 178, 76, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(726, 178, 44, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(727, 178, 47, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(728, 178, 54, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(729, 178, 57, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(730, 178, 66, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(731, 178, 81, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(732, 178, 190, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(733, 178, 3, 1, '2024-04-02 16:51:23', '2024-04-02 16:51:23', NULL),
(734, 179, 20, 1, '2024-04-02 17:41:59', '2024-04-02 17:41:59', NULL),
(735, 179, 30, 1, '2024-04-02 17:41:59', '2024-04-02 17:41:59', NULL),
(736, 180, 44, 1, '2024-04-02 17:55:34', '2024-04-02 17:55:34', NULL),
(737, 180, 54, 1, '2024-04-02 17:55:34', '2024-04-02 17:55:34', NULL),
(738, 181, 20, 1, '2024-04-02 18:45:25', '2024-04-02 18:45:25', NULL),
(739, 181, 24, 1, '2024-04-02 18:45:25', '2024-04-02 18:45:25', NULL),
(740, 181, 34, 1, '2024-04-02 18:45:25', '2024-04-02 18:45:25', NULL),
(741, 181, 36, 1, '2024-04-02 18:45:25', '2024-04-02 18:45:25', NULL),
(742, 181, 39, 1, '2024-04-02 18:45:25', '2024-04-02 18:45:25', NULL),
(743, 181, 48, 1, '2024-04-02 18:45:25', '2024-04-02 18:45:25', NULL),
(744, 181, 63, 1, '2024-04-02 18:45:25', '2024-04-02 18:45:25', NULL),
(745, 181, 67, 1, '2024-04-02 18:45:25', '2024-04-02 18:45:25', NULL),
(763, 183, 20, 1, '2024-04-04 16:51:25', '2024-04-04 16:51:25', NULL),
(764, 183, 121, 1, '2024-04-04 16:51:25', '2024-04-04 16:51:25', NULL),
(765, 183, 122, 1, '2024-04-04 16:51:25', '2024-04-04 16:51:25', NULL),
(766, 183, 139, 1, '2024-04-04 16:51:25', '2024-04-04 16:51:25', NULL),
(767, 183, 141, 1, '2024-04-04 16:51:25', '2024-04-04 16:51:25', NULL),
(768, 183, 166, 1, '2024-04-04 16:51:25', '2024-04-04 16:51:25', NULL),
(769, 184, 9, 1, '2024-04-04 17:09:58', '2024-04-04 17:09:58', NULL),
(770, 182, 20, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(771, 182, 24, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(772, 182, 26, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(773, 182, 34, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(774, 182, 39, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(775, 182, 42, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(776, 182, 48, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(777, 182, 76, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(778, 182, 78, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(779, 182, 79, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(780, 182, 44, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(781, 182, 47, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(782, 182, 52, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(783, 182, 189, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(784, 182, 161, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(785, 182, 162, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(786, 182, 165, 1, '2024-04-11 17:20:52', '2024-04-11 17:20:52', NULL),
(787, 186, 24, 1, '2024-04-15 16:54:01', '2024-04-15 16:54:01', NULL),
(788, 186, 30, 1, '2024-04-15 16:54:01', '2024-04-15 16:54:01', NULL),
(789, 186, 57, 1, '2024-04-15 16:54:01', '2024-04-15 16:54:01', NULL),
(790, 186, 40, 1, '2024-04-15 16:54:01', '2024-04-15 16:54:01', NULL),
(793, 145, 24, 1, '2024-04-20 10:18:02', '2024-04-20 10:18:02', NULL),
(794, 145, 26, 1, '2024-04-20 10:18:02', '2024-04-20 10:18:02', NULL),
(795, 145, 30, 1, '2024-04-20 10:18:02', '2024-04-20 10:18:02', NULL),
(796, 145, 34, 1, '2024-04-20 10:18:02', '2024-04-20 10:18:02', NULL),
(797, 145, 36, 1, '2024-04-20 10:18:02', '2024-04-20 10:18:02', NULL),
(798, 172, 20, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(799, 172, 24, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(800, 172, 34, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(801, 172, 36, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(802, 172, 39, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(803, 172, 42, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(804, 172, 48, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(805, 172, 51, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(806, 172, 58, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(807, 172, 60, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(808, 172, 61, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(809, 172, 71, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(810, 172, 76, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(811, 172, 44, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(812, 172, 47, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(813, 172, 77, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(814, 172, 171, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(815, 172, 172, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(816, 172, 177, 1, '2024-04-21 06:17:39', '2024-04-21 06:17:39', NULL),
(817, 130, 20, 1, '2024-04-21 07:33:07', '2024-04-21 07:33:07', NULL),
(818, 130, 93, 1, '2024-04-21 07:33:07', '2024-04-21 07:33:07', NULL),
(819, 130, 95, 1, '2024-04-21 07:33:07', '2024-04-21 07:33:07', NULL),
(856, 188, 20, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(857, 188, 76, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(858, 188, 79, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(859, 188, 64, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(860, 188, 1, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(861, 188, 40, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(862, 188, 6, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(863, 188, 8, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(864, 188, 10, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(865, 188, 12, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(866, 188, 15, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(867, 188, 23, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(868, 188, 35, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(869, 188, 49, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(870, 188, 112, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(871, 188, 113, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(872, 188, 119, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(873, 188, 94, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(874, 188, 121, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(875, 188, 122, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(876, 188, 131, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(877, 188, 133, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(878, 188, 135, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(879, 188, 137, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(880, 188, 139, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(881, 188, 141, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(882, 188, 154, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(883, 188, 138, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(884, 188, 161, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(885, 188, 165, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(886, 188, 166, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(887, 188, 167, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(888, 188, 170, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(889, 188, 173, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(890, 188, 175, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(891, 188, 183, 1, '2024-04-21 10:52:25', '2024-04-21 10:52:25', NULL),
(892, 129, 20, 1, '2024-04-21 14:33:36', '2024-04-21 14:33:36', NULL),
(893, 129, 24, 1, '2024-04-21 14:33:36', '2024-04-21 14:33:36', NULL),
(894, 129, 26, 1, '2024-04-21 14:33:36', '2024-04-21 14:33:36', NULL),
(895, 129, 34, 1, '2024-04-21 14:33:36', '2024-04-21 14:33:36', NULL),
(896, 129, 44, 1, '2024-04-21 14:33:36', '2024-04-21 14:33:36', NULL),
(897, 129, 47, 1, '2024-04-21 14:33:36', '2024-04-21 14:33:36', NULL),
(898, 129, 54, 1, '2024-04-21 14:33:36', '2024-04-21 14:33:36', NULL),
(899, 129, 57, 1, '2024-04-21 14:33:36', '2024-04-21 14:33:36', NULL),
(900, 129, 2, 1, '2024-04-21 14:33:36', '2024-04-21 14:33:36', NULL),
(901, 129, 3, 1, '2024-04-21 14:33:36', '2024-04-21 14:33:36', NULL),
(902, 129, 11, 1, '2024-04-21 14:33:36', '2024-04-21 14:33:36', NULL),
(903, 129, 14, 1, '2024-04-21 14:33:36', '2024-04-21 14:33:36', NULL),
(904, 129, 6, 1, '2024-04-21 14:33:36', '2024-04-21 14:33:36', NULL),
(905, 129, 10, 1, '2024-04-21 14:33:36', '2024-04-21 14:33:36', NULL),
(906, 129, 31, 1, '2024-04-21 14:33:36', '2024-04-21 14:33:36', NULL),
(909, 187, 42, 1, '2024-04-22 06:37:56', '2024-04-22 06:37:56', NULL),
(910, 187, 61, 1, '2024-04-22 06:37:56', '2024-04-22 06:37:56', NULL),
(911, 187, 44, 1, '2024-04-22 06:37:56', '2024-04-22 06:37:56', NULL),
(912, 187, 47, 1, '2024-04-22 06:37:56', '2024-04-22 06:37:56', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_mute_notifications`
--

CREATE TABLE `user_mute_notifications` (
  `id` bigint UNSIGNED NOT NULL,
  `mute_by` bigint UNSIGNED NOT NULL,
  `muted_to` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_post_reviews`
--

CREATE TABLE `user_post_reviews` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `star` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discription` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_post_reviews`
--

INSERT INTO `user_post_reviews` (`id`, `posts_id`, `user_id`, `star`, `discription`, `image`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(3, 654, 126, '2.5', 'fbtybu', '', 1, '2024-03-11 13:03:40', '2024-03-11 13:03:40', NULL),
(4, 654, 126, '3.5', 'ghjo', '', 1, '2024-03-11 13:05:38', '2024-03-11 13:05:38', NULL),
(5, 654, 126, '3', 'vjk', '', 1, '2024-03-11 13:24:11', '2024-03-11 13:24:11', NULL),
(6, 692, 146, '3', 'ghyg', '', 1, '2024-03-13 06:21:33', '2024-03-13 06:21:33', NULL),
(7, 692, 128, '5', 'yhh', '', 1, '2024-03-13 12:04:31', '2024-03-13 12:04:31', NULL),
(8, 701, 128, '4.5', 'h', 'admin/home/userReviewImage/9615images (13).jpeg', 1, '2024-03-13 12:04:58', '2024-03-13 12:04:58', NULL),
(9, 701, 146, '2.5', 't', '', 1, '2024-03-14 09:40:30', '2024-03-14 09:40:30', NULL),
(10, 723, 149, '2.5', 'yyy', '', 1, '2024-03-15 05:20:09', '2024-03-15 05:20:09', NULL),
(11, 761, 146, '2.5', 'hurir', '', 1, '2024-03-19 05:44:53', '2024-03-19 05:44:53', NULL),
(12, 761, 146, '3.5', 'gsyd', '', 1, '2024-03-19 05:45:08', '2024-03-19 05:45:08', NULL),
(13, 761, 146, '1.5', 'fuhc', '', 1, '2024-03-19 05:53:29', '2024-03-19 05:53:29', NULL),
(14, 761, 155, '4', 'ycuc', '', 1, '2024-03-19 06:08:11', '2024-03-19 06:08:11', NULL),
(15, 761, 126, '2.5', 'chh', '', 1, '2024-03-19 11:09:05', '2024-03-19 11:09:05', NULL),
(16, 876, 146, '3.5', 'rty', '', 1, '2024-04-22 06:29:51', '2024-04-22 06:29:51', NULL),
(17, 887, 146, '1', 'jdjif', '', 1, '2024-04-22 07:34:13', '2024-04-22 07:34:13', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_profiles`
--

CREATE TABLE `user_profiles` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `gender` enum('male','female') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dob` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `blood_group` enum('A+','AB+','B-','O+','A-','AB-','B+','O-') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profession` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `education` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `long` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_profiles`
--

INSERT INTO `user_profiles` (`id`, `user_id`, `gender`, `dob`, `blood_group`, `profession`, `image`, `description`, `education`, `linkedin`, `lat`, `long`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(83, 125, 'male', 'Fri Mar 01 2024 12:00:00 GMT+0530', 'B+', 'Developer', NULL, NULL, 'MA', NULL, '18.5953047', '73.7887188', 1, '2024-03-05 13:02:01', '2024-03-05 16:25:44', NULL),
(84, 126, 'male', 'Thu Mar 06 2003 12:00:00 GMT+0530', 'AB-', 'QA', 'admin/home/profile/0643myProfile.jpg', 'gssh', 'MCA', NULL, '18.5204077', '73.7720045', 1, '2024-03-05 16:30:24', '2024-04-24 05:20:35', NULL),
(86, 128, 'male', 'Thu Mar 12 1987 12:00:00 GMT+0530', 'AB+', 'Killer', 'admin/home/profile/0486myProfile.jpg', 'cggc', 'MBA', NULL, '18.5204316', '73.7720431', 1, '2024-03-06 05:50:41', '2024-03-30 06:08:44', NULL),
(87, 130, 'male', 'Tue Mar 05 2024 12:00:00 GMT+0530', 'A-', 'bsube hisheuu', NULL, 'Svudb heuheu', 'brbjs ueib3u', NULL, '28.4951998', '77.0933489', 1, '2024-03-06 08:26:32', '2024-04-24 05:39:55', NULL),
(88, 129, 'male', 'Tue Feb 14 2012 12:00:00 GMT+0530', 'A+', 'eh 3yev3 heh', NULL, 'v4he h3 he 3hbe', 'v3hevue', NULL, '28.493762', '77.0941794', 1, '2024-03-06 12:07:08', '2024-04-27 06:51:19', NULL),
(90, 132, 'male', 'Thu Mar 07 2024 12:00:00 GMT+0530', 'A+', 'jsns', NULL, NULL, 'udbddjnd', 'zhxj', '18.5204293', '73.7719882', 1, '2024-03-07 12:10:34', '2024-04-18 12:52:27', NULL),
(99, 142, 'male', 'Wed Feb 14 2024 12:00:00 GMT+0530', 'A+', 'gwywvusvehu', NULL, 'vejdueh8eh', 'geudhv3ueu', NULL, '28.4937794', '77.0941273', 1, '2024-03-08 13:14:33', '2024-03-30 16:40:55', NULL),
(100, 143, 'male', 'Thu Mar 10 1994 12:00:00 GMT+0530', 'AB+', 'chchhc', 'admin/home/profile/3762myProfile.jpg', NULL, 'cygc', NULL, '18.5204359', '73.7720458', 1, '2024-03-09 12:52:13', '2024-03-13 06:25:59', NULL),
(101, 144, 'male', 'Fri Jan 08 1999 12:00:00 GMT+0530', 'O+', 'IT Professional', NULL, 'hey world', 'BBA', NULL, '18.5204304', '73.7720431', 1, '2024-03-11 06:00:49', '2024-03-11 12:09:54', NULL),
(102, 145, 'male', 'Tue Mar 12 2024 12:00:00 GMT+0530', 'O+', 'yssysyys', NULL, 'dgdydyse', 'syydddyy', NULL, '18.5204239', '73.7720089', 1, '2024-03-12 12:36:32', '2024-04-23 07:42:20', NULL),
(103, 146, 'female', 'Fri Mar 01 1996 12:00:00 GMT+0530', 'A+', 'gvv', 'admin/home/profile/5471myProfile.jpg', NULL, 'MBA', NULL, '18.5204231', '73.7720156', 1, '2024-03-13 06:06:15', '2024-04-24 12:59:53', NULL),
(104, 147, 'male', 'Wed Mar 13 2024 12:00:00 GMT+0530', 'AB+', 'ev3g3', NULL, NULL, 'ef3v', 'evec', '18.5202223', '73.7719897', 1, '2024-03-13 09:51:28', '2024-03-13 09:56:12', NULL),
(106, 149, 'male', 'Sun Jan 07 2024 12:00:00 GMT+0530', 'AB-', 'cg', 'admin/home/profile/3014myProfile.jpg', NULL, 'ggccg', NULL, '18.5204225', '73.7720509', 1, '2024-03-15 04:59:13', '2024-03-15 13:35:56', NULL),
(107, 150, 'male', 'Fri Mar 15 2024 12:00:00 GMT+0530', 'A+', 'ucuci', 'public/img/social-logo.png', 'uvuvuv', 'ycucu', 'ucuvi', '18.5204082', '73.7720633', 1, '2024-03-15 11:22:29', '2024-03-15 11:22:46', NULL),
(109, 152, 'male', 'Fri Mar 01 2024 12:00:00 GMT+0530', 'A+', 'sksj', 'public/img/noimageprofile.jpg', 'yo', 'tsish', 'ksdnns', '18.5203987', '73.7720716', 1, '2024-03-15 11:26:38', '2024-03-16 06:37:09', NULL),
(110, 154, 'female', 'Sat Feb 20 1999 12:00:00 GMT+0530', 'B+', 'test', 'public/img/noimageprofile.jpg', 'Test test test', 'Test', NULL, '18.5204309', '73.7720615', 1, '2024-03-18 06:18:21', '2024-03-18 06:21:23', NULL),
(111, 155, 'male', 'Thu Mar 14 2024 12:00:00 GMT+0530', 'A+', 'nothing', 'admin/home/profile/6031myProfile.jpg', NULL, 'nothing', 'nothing', '18.5204315', '73.7720016', 1, '2024-03-19 04:39:29', '2024-04-18 12:52:06', NULL),
(112, 156, 'female', 'Fri Mar 01 2024 12:00:00 GMT+0530', 'AB+', 'Developer', NULL, NULL, 'mca', 'hhjj', '18.5204281', '73.7720215', 1, '2024-03-19 05:34:19', '2024-03-19 05:36:18', NULL),
(113, 157, 'male', 'Sat Jan 01 2000 12:00:00 GMT+0530', 'A+', 'demo', NULL, 'hi there it\'s me demo', 'demo', 'demo', '18.520434', '73.7720418', 1, '2024-03-21 05:34:59', '2024-03-30 06:04:10', NULL),
(114, 158, 'male', 'Tue Mar 16 1993 12:00:00 GMT+0530', 'A+', 'sfvhbjb', NULL, 'vhbjbhvg', 'fyhuhj', NULL, '16.7880323', '81.7222706', 1, '2024-03-22 02:05:43', '2024-04-08 09:30:55', NULL),
(115, 160, 'male', 'Sun Mar 28 1999 12:00:00 GMT+0530', 'B+', 'IT', NULL, NULL, 'graduated', NULL, '28.4486406', '77.0718741', 1, '2024-03-28 17:41:37', '2024-03-28 18:04:27', NULL),
(116, 159, 'male', 'Fri Mar 01 2024 12:00:00 GMT+0530', 'A+', 'example', NULL, NULL, 'example', 'example', '14.6525627', '121.0358603', 1, '2024-03-29 12:06:40', '2024-04-25 09:03:40', NULL),
(117, 161, 'male', 'Sun Mar 22 1998 12:00:00 GMT+0530', 'A-', 'kamgar', 'admin/home/profile/6147myProfile.jpg', 'life is race to bhago', 'BE', NULL, '18.6498017', '73.7790583', 1, '2024-03-30 06:02:29', '2024-03-31 14:39:56', NULL),
(120, 170, 'male', 'Sat Mar 30 2024 12:00:00 GMT+0530', 'A+', 'student', NULL, 'hello', 'intermediate', NULL, '28.4937518', '77.0941449', 1, '2024-03-30 08:17:45', '2024-03-31 07:20:05', NULL),
(121, 171, 'male', 'Sat Sep 29 2001 12:00:00 GMT+0530', 'O+', 'na', NULL, 'testing', 'b tech', NULL, '12.9754054', '77.7512101', 1, '2024-03-30 14:43:23', '2024-04-06 10:52:26', NULL),
(122, 172, 'male', 'Wed Mar 12 1997 12:00:00 GMT+0530', 'A+', 'Software Developer', 'admin/home/profile/8105myProfile.jpg', 'I am a writer', 'B.Tech', NULL, '28.4951918', '77.0933336', 1, '2024-03-30 16:30:17', '2024-04-24 07:08:45', NULL),
(123, 174, 'male', 'Sat Jul 13 1996 12:00:00 GMT+0530', 'O+', 'Project Manager', 'admin/home/profile/9047myProfile.jpg', 'Solo Traveller 🌍\nTech Savvy 🧑‍💻', 'Mechanical Engineering', NULL, '28.4486385', '77.0718748', 1, '2024-04-01 15:32:40', '2024-04-02 19:02:59', NULL),
(124, 175, 'male', 'Sat Apr 29 2000 12:00:00 GMT+0530', 'O+', 'IT employee', NULL, '..', 'Engineering', NULL, '17.9579419', '83.0490588', 1, '2024-04-02 16:32:40', '2024-04-07 18:06:12', NULL),
(125, 176, 'male', 'Sun Sep 05 1999 12:00:00 GMT+0530', 'O+', 'student', NULL, NULL, 'BTech', 'kotirajeshnagothu', '17.7380423', '83.3330139', 1, '2024-04-02 16:44:06', '2024-04-02 16:44:13', NULL),
(126, 177, 'male', 'Sun Jan 23 2000 12:00:00 GMT+0530', 'O+', 'Tech Manager MVG', NULL, NULL, 'B.Tech', NULL, '17.4854905', '78.3976192', 1, '2024-04-02 16:47:03', '2024-04-02 16:51:06', NULL),
(127, 178, 'male', 'Wed Nov 07 2001 12:00:00 GMT+0530', 'O+', 'Software engineer', NULL, NULL, 'B.Tech', NULL, '16.7431638', '81.8458273', 1, '2024-04-02 16:51:23', '2024-04-02 16:55:38', NULL),
(128, 179, 'male', 'Tue Apr 02 2024 12:00:00 GMT+0530', 'O+', 'Abcd', NULL, NULL, 'Bewarse', NULL, '16.6550409', '81.7447028', 1, '2024-04-02 17:41:59', '2024-04-03 19:20:49', NULL),
(129, 180, 'male', 'Sun Apr 25 1999 12:00:00 GMT+0530', 'B+', 'Employee', NULL, 'Employee', 'Btech', NULL, '12.9211382', '77.6168377', 1, '2024-04-02 17:55:34', '2024-04-02 19:03:59', NULL),
(130, 181, 'male', 'Sat Feb 17 2001 12:00:00 GMT+0530', 'O+', 'NA', NULL, 'bio', 'graduation', 'https://www.linkedin.com/in/sai-charan-85783a177', '17.439276', '78.4468755', 1, '2024-04-02 18:45:25', '2024-04-03 11:21:42', NULL),
(131, 182, 'male', 'Tue Apr 13 1993 12:00:00 GMT+0530', 'O+', 'Accountant', 'admin/home/profile/5160myProfile.jpg', 'I am a Family Guy', 'B.Tech', NULL, '28.4937593', '77.0941735', 1, '2024-04-04 11:05:36', '2024-04-24 14:57:06', NULL),
(132, 183, 'male', 'Mon Jul 30 2001 12:00:00 GMT+0530', 'B+', 'Civil Engineering', NULL, NULL, 'B. Tech', NULL, '23.0093737', '72.5288053', 1, '2024-04-04 16:51:25', '2024-04-05 17:32:42', NULL),
(133, 184, 'male', 'Tue Apr 03 2012 12:00:00 GMT+0530', 'O+', 'ji', NULL, 'hyy', 'uh', NULL, '28.4402447', '77.075376', 1, '2024-04-04 17:09:58', '2024-04-04 17:10:04', NULL),
(134, 186, 'male', 'Sat Aug 14 1999 12:00:00 GMT+0530', 'A+', 'IT employee', NULL, 'Will fill in later...', 'NIT silchar', NULL, '30.3455876', '78.0650222', 1, '2024-04-15 16:54:01', '2024-04-16 19:46:35', NULL),
(135, 187, 'male', 'Thu Apr 18 2024 12:00:00 GMT+0530', 'A+', 'qa', 'admin/home/profile/8472myProfile.jpg', NULL, 'ba', NULL, '18.5204272', '73.7720104', 1, '2024-04-18 07:27:18', '2024-04-23 04:55:01', NULL),
(136, 188, 'male', 'Sat Jun 20 1998 12:00:00 GMT+0530', 'AB+', 'IT Sector', NULL, NULL, 'Graduation', NULL, '28.4937538', '77.0941569', 1, '2024-04-21 10:08:18', '2024-04-21 10:52:10', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_seraches`
--

CREATE TABLE `user_seraches` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `key_word` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_seraches`
--

INSERT INTO `user_seraches` (`id`, `user_id`, `key_word`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(76, 125, 'Aditya', 1, '2024-03-05 13:03:38', '2024-03-05 13:03:38', NULL),
(77, 125, 'satara', 1, '2024-03-05 13:03:52', '2024-03-05 13:03:52', NULL),
(78, 125, 'Surat', 1, '2024-03-05 13:08:21', '2024-03-05 13:08:21', NULL),
(79, 126, 'pune', 1, '2024-03-05 16:58:42', '2024-03-05 16:58:42', NULL),
(80, 126, 'Mumbai', 1, '2024-03-05 16:59:48', '2024-03-05 16:59:48', NULL),
(82, 126, 'kokane chowk', 1, '2024-03-06 05:31:46', '2024-03-06 05:31:46', NULL),
(83, 126, 'shivar chowk', 1, '2024-03-06 05:32:28', '2024-03-06 05:32:28', NULL),
(84, 126, 'shiwat', 1, '2024-03-06 05:32:40', '2024-03-06 05:32:40', NULL),
(85, 126, 'shiwar', 1, '2024-03-06 05:32:50', '2024-03-06 05:32:50', NULL),
(86, 126, 'dwarka dheesh', 1, '2024-03-06 05:34:21', '2024-03-06 05:34:21', NULL),
(87, 126, 'Surat', 1, '2024-03-06 05:55:58', '2024-03-06 05:55:58', NULL),
(93, 126, 'ott', 1, '2024-03-06 06:25:51', '2024-03-06 06:25:51', NULL),
(98, 126, 'mulshi', 1, '2024-03-06 07:33:34', '2024-03-06 07:33:34', NULL),
(107, 126, 'music', 1, '2024-03-06 10:27:30', '2024-03-06 10:27:30', NULL),
(110, 126, 'kagal', 1, '2024-03-06 11:36:13', '2024-03-06 11:36:13', NULL),
(111, 126, 'kokane chowk pimple saudagar', 1, '2024-03-06 11:43:17', '2024-03-06 11:43:17', NULL),
(112, 126, 'Walter White', 1, '2024-03-06 11:45:18', '2024-03-06 11:45:18', NULL),
(119, 126, 'John wick', 1, '2024-03-07 05:39:54', '2024-03-07 05:39:54', NULL),
(137, 130, 'veheue', 1, '2024-03-08 07:13:57', '2024-03-08 07:13:57', NULL),
(141, 143, 'Mumbai', 1, '2024-03-09 12:54:08', '2024-03-09 12:54:08', NULL),
(142, 143, 'surat', 1, '2024-03-09 12:54:19', '2024-03-09 12:54:19', NULL),
(143, 143, 'gurgaon', 1, '2024-03-09 12:54:30', '2024-03-09 12:54:30', NULL),
(144, 143, 'gurgram', 1, '2024-03-09 12:54:38', '2024-03-09 12:54:38', NULL),
(145, 130, 'ravi', 1, '2024-03-10 07:54:01', '2024-03-10 07:54:01', NULL),
(147, 130, 'tejas', 1, '2024-03-10 08:03:12', '2024-03-10 08:03:12', NULL),
(151, 126, 'indore', 1, '2024-03-13 06:57:37', '2024-03-13 06:57:37', NULL),
(152, 146, 'Pune', 1, '2024-03-13 11:54:52', '2024-03-13 11:54:52', NULL),
(153, 128, 'Mumbai', 1, '2024-03-13 12:44:56', '2024-03-13 12:44:56', NULL),
(154, 126, 'nashik', 1, '2024-03-13 12:52:07', '2024-03-13 12:52:07', NULL),
(155, 128, 'bavdhan', 1, '2024-03-13 14:05:19', '2024-03-13 14:05:19', NULL),
(156, 128, 'indor', 1, '2024-03-13 14:05:53', '2024-03-13 14:05:53', NULL),
(157, 128, 'katraj', 1, '2024-03-13 14:06:43', '2024-03-13 14:06:43', NULL),
(159, 126, 'mrunal', 1, '2024-03-14 04:49:31', '2024-03-14 04:49:31', NULL),
(160, 126, 'Mrunal Thakur', 1, '2024-03-14 04:49:45', '2024-03-14 04:49:45', NULL),
(161, 126, 'Yuktes', 1, '2024-03-14 04:50:15', '2024-03-14 04:50:15', NULL),
(162, 126, 'Arjun Reddy', 1, '2024-03-14 04:50:50', '2024-03-14 04:50:50', NULL),
(163, 126, 'Spectator', 1, '2024-03-14 04:53:00', '2024-03-14 04:53:00', NULL),
(164, 130, 'bueue', 1, '2024-03-14 08:55:50', '2024-03-14 08:55:50', NULL),
(165, 130, 'beue', 1, '2024-03-14 08:56:12', '2024-03-14 08:56:12', NULL),
(166, 146, 'Walter White', 1, '2024-03-14 09:34:27', '2024-03-14 09:34:27', NULL),
(167, 146, 'John wick', 1, '2024-03-14 10:05:57', '2024-03-14 10:05:57', NULL),
(168, 130, 'hhkb', 1, '2024-03-14 11:28:37', '2024-03-14 11:28:37', NULL),
(169, 130, 'without', 1, '2024-03-14 11:29:19', '2024-03-14 11:29:19', NULL),
(170, 130, 'bhhh', 1, '2024-03-14 11:29:48', '2024-03-14 11:29:48', NULL),
(171, 130, 'hjj', 1, '2024-03-14 11:30:05', '2024-03-14 11:30:05', NULL),
(172, 130, 'day', 1, '2024-03-14 11:30:55', '2024-03-14 11:30:55', NULL),
(173, 128, 'music', 1, '2024-03-14 12:24:45', '2024-03-14 12:24:45', NULL),
(174, 128, 'pune', 1, '2024-03-14 12:29:52', '2024-03-14 12:29:52', NULL),
(175, 128, 'poll', 1, '2024-03-14 12:31:33', '2024-03-14 12:31:33', NULL),
(176, 128, 'Ex gratia', 1, '2024-03-14 12:40:06', '2024-03-14 12:40:06', NULL),
(177, 128, 'hokey', 1, '2024-03-14 12:46:17', '2024-03-14 12:46:17', NULL),
(178, 128, 'Alcohol', 1, '2024-03-14 12:46:30', '2024-03-14 12:46:30', NULL),
(179, 146, 'indore', 1, '2024-03-15 06:23:39', '2024-03-15 06:23:39', NULL),
(181, 149, 'indor', 1, '2024-03-15 12:47:09', '2024-03-15 12:47:09', NULL),
(182, 149, 'pune', 1, '2024-03-15 12:47:48', '2024-03-15 12:47:48', NULL),
(183, 149, 'Walter white', 1, '2024-03-15 12:48:17', '2024-03-15 12:48:17', NULL),
(187, 146, 'Mumbai', 1, '2024-03-19 12:19:19', '2024-03-19 12:19:19', NULL),
(191, 160, 's', 1, '2024-03-28 17:47:33', '2024-03-28 17:47:33', NULL),
(192, 170, 'u-10/18', 1, '2024-03-30 18:19:42', '2024-03-30 18:19:42', NULL),
(193, 178, 'teja dadi', 1, '2024-04-02 16:55:20', '2024-04-02 16:55:20', NULL),
(194, 179, 'Koti', 1, '2024-04-02 17:50:13', '2024-04-02 17:50:13', NULL),
(195, 181, 'Dinesh', 1, '2024-04-02 18:46:34', '2024-04-02 18:46:34', NULL),
(196, 181, 'chey', 1, '2024-04-02 18:46:44', '2024-04-02 18:46:44', NULL),
(198, 182, 'ambience', 1, '2024-04-15 12:08:12', '2024-04-15 12:08:12', NULL),
(199, 159, 'demo@google.com', 1, '2024-04-18 13:45:00', '2024-04-18 13:45:00', NULL),
(200, 145, 'kokne chowk', 1, '2024-04-20 11:05:59', '2024-04-20 11:05:59', NULL),
(201, 145, 'mrunal', 1, '2024-04-20 11:44:19', '2024-04-20 11:44:19', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `votes`
--

CREATE TABLE `votes` (
  `id` bigint UNSIGNED NOT NULL,
  `posts_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `option_id` bigint UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `votes`
--

INSERT INTO `votes` (`id`, `posts_id`, `user_id`, `option_id`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(325, 554, 129, 208, 1, '2024-03-06 12:09:26', '2024-03-06 12:09:27', '2024-03-06 12:09:27'),
(355, 610, 126, 235, 1, '2024-03-07 13:46:15', '2024-03-07 13:46:16', '2024-03-07 13:46:16'),
(356, 611, 126, 239, 1, '2024-03-07 13:48:34', '2024-03-07 13:48:40', '2024-03-07 13:48:40'),
(357, 538, 126, 201, 1, '2024-03-07 13:51:12', '2024-03-07 13:51:12', NULL),
(379, 694, 126, 256, 1, '2024-03-13 07:52:47', '2024-03-13 07:52:47', NULL),
(383, 703, 128, 259, 1, '2024-03-13 12:11:08', '2024-03-13 12:11:09', '2024-03-13 12:11:09'),
(385, 543, 128, 206, 1, '2024-03-13 12:12:49', '2024-03-13 12:12:49', '2024-03-13 12:12:49'),
(387, 694, 128, 257, 1, '2024-03-13 12:14:29', '2024-03-13 12:14:29', NULL),
(388, 558, 128, 214, 1, '2024-03-13 12:15:29', '2024-03-13 12:15:31', '2024-03-13 12:15:31'),
(390, 721, 149, 266, 1, '2024-03-15 05:21:04', '2024-03-15 05:21:04', NULL),
(399, 717, 146, 264, 1, '2024-03-15 06:27:28', '2024-03-15 06:27:29', '2024-03-15 06:27:29'),
(402, 721, 130, 267, 1, '2024-03-17 09:19:19', '2024-03-17 09:19:19', NULL),
(403, 760, 130, 276, 1, '2024-03-18 11:29:02', '2024-03-18 11:29:02', NULL),
(405, 760, 155, 276, 1, '2024-03-19 05:19:56', '2024-03-19 05:19:56', NULL),
(411, 760, 126, 276, 1, '2024-03-19 06:03:18', '2024-03-19 06:03:18', NULL),
(413, 758, 146, 271, 1, '2024-03-19 06:28:20', '2024-03-19 06:28:20', NULL),
(414, 763, 146, 277, 1, '2024-03-19 06:28:22', '2024-03-19 06:28:22', NULL),
(419, 704, 146, 261, 1, '2024-03-19 07:07:36', '2024-03-19 07:07:36', NULL),
(421, 791, 157, 283, 1, '2024-03-21 05:51:05', '2024-03-21 05:51:05', NULL),
(423, 759, 160, 274, 1, '2024-03-28 17:42:50', '2024-03-28 17:42:51', '2024-03-28 17:42:51'),
(430, 800, 170, 287, 1, '2024-03-31 07:28:26', '2024-03-31 07:28:26', NULL),
(431, 810, 174, 292, 1, '2024-04-01 15:34:20', '2024-04-01 15:34:20', NULL),
(433, 810, 159, 291, 1, '2024-04-02 09:13:55', '2024-04-02 09:13:55', NULL),
(442, 800, 175, 288, 1, '2024-04-02 16:42:10', '2024-04-02 16:42:10', NULL),
(444, 810, 175, 291, 1, '2024-04-02 16:43:55', '2024-04-02 16:43:55', NULL),
(445, 810, 177, 292, 1, '2024-04-02 16:48:49', '2024-04-02 16:48:49', NULL),
(446, 800, 178, 287, 1, '2024-04-02 16:54:21', '2024-04-02 16:54:21', NULL),
(450, 819, 181, 294, 1, '2024-04-03 11:22:10', '2024-04-03 11:22:11', '2024-04-03 11:22:11'),
(451, 819, 172, 295, 1, '2024-04-03 15:11:14', '2024-04-04 03:48:55', '2024-04-04 03:48:55'),
(452, 825, 173, 309, 1, '2024-04-04 14:45:54', '2024-04-04 14:45:54', NULL),
(453, 823, 175, 302, 1, '2024-04-05 04:10:59', '2024-04-05 04:10:59', NULL),
(454, 823, 175, 303, 1, '2024-04-05 04:10:59', '2024-04-05 04:10:59', NULL),
(455, 823, 175, 304, 1, '2024-04-05 04:11:00', '2024-04-05 04:11:00', NULL),
(456, 823, 175, 305, 1, '2024-04-05 04:11:02', '2024-04-05 04:11:02', NULL),
(457, 825, 175, 309, 1, '2024-04-05 16:00:53', '2024-04-05 16:00:53', NULL),
(458, 810, 183, 291, 1, '2024-04-05 16:35:51', '2024-04-05 16:35:51', NULL),
(459, 824, 171, 306, 1, '2024-04-06 10:52:13', '2024-04-06 10:52:13', NULL),
(460, 823, 159, 303, 1, '2024-04-06 13:03:06', '2024-04-06 13:03:09', '2024-04-06 13:03:09'),
(461, 823, 159, 303, 1, '2024-04-06 13:03:19', '2024-04-06 13:03:21', '2024-04-06 13:03:21'),
(462, 823, 159, 303, 1, '2024-04-06 16:19:34', '2024-04-06 16:19:36', '2024-04-06 16:19:36'),
(463, 823, 159, 303, 1, '2024-04-06 16:19:39', '2024-04-06 16:19:48', '2024-04-06 16:19:48'),
(464, 823, 159, 303, 1, '2024-04-06 16:19:50', '2024-04-06 16:20:06', '2024-04-06 16:20:06'),
(465, 823, 159, 303, 1, '2024-04-06 16:20:09', '2024-04-06 16:20:11', '2024-04-06 16:20:11'),
(466, 823, 159, 303, 1, '2024-04-06 16:20:21', '2024-04-06 16:20:23', '2024-04-06 16:20:23'),
(467, 823, 159, 305, 1, '2024-04-06 16:20:25', '2024-04-06 16:20:25', NULL),
(468, 823, 159, 303, 1, '2024-04-06 16:20:26', '2024-04-06 16:20:29', '2024-04-06 16:20:29'),
(469, 823, 159, 303, 1, '2024-04-08 21:57:55', '2024-04-08 21:57:58', '2024-04-08 21:57:58'),
(470, 823, 159, 303, 1, '2024-04-08 21:58:00', '2024-04-08 21:58:10', '2024-04-08 21:58:10'),
(471, 823, 159, 303, 1, '2024-04-08 21:58:12', '2024-04-08 21:58:17', '2024-04-08 21:58:17'),
(472, 823, 159, 303, 1, '2024-04-08 21:58:19', '2024-04-08 21:58:21', '2024-04-08 21:58:21'),
(473, 823, 159, 303, 1, '2024-04-08 21:58:23', '2024-04-08 21:58:52', '2024-04-08 21:58:52'),
(474, 823, 159, 303, 1, '2024-04-08 21:58:59', '2024-04-08 21:59:01', '2024-04-08 21:59:01'),
(475, 823, 159, 303, 1, '2024-04-08 21:59:04', '2024-04-08 21:59:05', '2024-04-08 21:59:05'),
(476, 823, 159, 303, 1, '2024-04-08 21:59:07', '2024-04-08 21:59:17', '2024-04-08 21:59:17'),
(477, 823, 159, 303, 1, '2024-04-08 21:59:19', '2024-04-08 21:59:24', '2024-04-08 21:59:24'),
(478, 823, 159, 303, 1, '2024-04-08 21:59:25', '2024-04-08 21:59:28', '2024-04-08 21:59:28'),
(479, 823, 159, 303, 1, '2024-04-08 21:59:30', '2024-04-08 21:59:57', '2024-04-08 21:59:57'),
(480, 823, 159, 303, 1, '2024-04-08 21:59:59', '2024-04-09 03:56:14', '2024-04-09 03:56:14'),
(481, 823, 159, 303, 1, '2024-04-09 03:56:17', '2024-04-09 03:56:18', '2024-04-09 03:56:18'),
(482, 823, 159, 303, 1, '2024-04-09 03:56:27', '2024-04-09 03:56:29', '2024-04-09 03:56:29'),
(483, 823, 159, 303, 1, '2024-04-09 03:56:34', '2024-04-09 03:56:36', '2024-04-09 03:56:36'),
(484, 823, 159, 303, 1, '2024-04-09 03:56:37', '2024-04-09 03:56:40', '2024-04-09 03:56:40'),
(485, 823, 159, 303, 1, '2024-04-09 04:57:46', '2024-04-09 04:57:46', NULL),
(486, 821, 172, 297, 1, '2024-04-12 08:41:12', '2024-04-12 08:41:13', '2024-04-12 08:41:13'),
(487, 826, 185, 310, 1, '2024-04-15 08:03:56', '2024-04-15 08:03:56', NULL),
(488, 823, 185, 302, 1, '2024-04-15 08:03:59', '2024-04-15 08:03:59', NULL),
(489, 822, 185, 301, 1, '2024-04-15 08:04:01', '2024-04-15 08:04:01', NULL),
(490, 821, 185, 297, 1, '2024-04-15 08:04:04', '2024-04-15 08:04:04', NULL),
(491, 833, 186, 314, 1, '2024-04-15 16:54:23', '2024-04-15 16:54:23', NULL),
(492, 832, 186, 312, 1, '2024-04-15 16:54:31', '2024-04-15 16:54:31', NULL),
(493, 826, 186, 311, 1, '2024-04-15 16:55:13', '2024-04-15 16:55:13', NULL),
(494, 822, 186, 301, 1, '2024-04-15 16:55:30', '2024-04-15 16:55:30', NULL),
(495, 822, 159, 300, 1, '2024-04-16 07:04:21', '2024-04-16 07:04:21', NULL),
(496, 821, 159, 297, 1, '2024-04-16 07:04:25', '2024-04-16 07:04:25', NULL),
(501, 819, 159, 294, 1, '2024-04-16 07:50:06', '2024-04-16 07:50:07', '2024-04-16 07:50:07'),
(503, 833, 159, 315, 1, '2024-04-18 13:41:57', '2024-04-18 13:41:57', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `where_to_posts`
--

CREATE TABLE `where_to_posts` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `where_to_posts`
--

INSERT INTO `where_to_posts` (`id`, `name`, `description`, `image`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Public', 'To All Users having at least one common Tag on their Profile', 'public/admin/home/wherePost/5217Icon fa-solid-earth-americas.png', 1, '2023-12-13 06:35:10', '2024-03-19 15:57:27', NULL),
(2, 'My Circle', 'To All Friends', 'public/admin/home/wherePost/5413group-users.png', 1, '2023-12-13 06:35:13', '2024-03-19 15:57:48', NULL),
(3, 'Community', 'To All Community members', 'public/admin/home/wherePost/7803online-community.png', 1, '2023-12-13 06:35:15', '2024-03-19 15:58:36', NULL),
(4, 'Home', 'To All Users', 'public/admin/home/wherePost/7635Icon fa-solid-earth-americas.png', 1, '2023-12-13 06:35:17', '2024-03-19 15:58:06', NULL),
(5, 'Only me', NULL, 'public/admin/home/wherePost/9864onlyme.png', 0, '2023-12-13 06:35:22', '2024-01-23 07:57:11', '2024-03-14 09:11:30'),
(6, 'WhatsApp', NULL, 'public/admin/home/wherePost/9172whatsapp.png', 0, '2023-12-16 06:48:44', '2024-01-23 07:57:09', '2024-03-14 09:11:33'),
(7, 'Social', 'To All Users in 500 meters around me.', 'public/admin/home/wherePost/3752Glyph.png', 1, '2024-02-12 05:41:24', '2024-03-19 15:58:52', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apposes`
--
ALTER TABLE `apposes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `apposes_posts_id_index` (`posts_id`),
  ADD KEY `apposes_appose_post_id_index` (`appose_post_id`),
  ADD KEY `apposes_user_id_index` (`user_id`),
  ADD KEY `apposes_star_index` (`star`),
  ADD KEY `apposes_reason_index` (`reason`),
  ADD KEY `apposes_status_index` (`status`),
  ADD KEY `apposes_image_index` (`image`);

--
-- Indexes for table `block_chats`
--
ALTER TABLE `block_chats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `block_chats_user_id_index` (`user_id`),
  ADD KEY `block_chats_status_index` (`status`),
  ADD KEY `block_chats_chat_with_index` (`chat_with`);

--
-- Indexes for table `book_mark_comments`
--
ALTER TABLE `book_mark_comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_mark_comments_posts_id_index` (`posts_id`),
  ADD KEY `book_mark_comments_user_id_index` (`user_id`),
  ADD KEY `book_mark_comments_comment_id_index` (`comment_id`),
  ADD KEY `book_mark_comments_status_index` (`status`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories_name_index` (`name`),
  ADD KEY `categories_status_index` (`status`);

--
-- Indexes for table `chat_images`
--
ALTER TABLE `chat_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chat_images_file_index` (`file`),
  ADD KEY `chat_images_status_index` (`status`),
  ADD KEY `chat_images_community_id_index` (`community_id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cities_country_id_index` (`country_id`),
  ADD KEY `cities_state_id_index` (`state_id`),
  ADD KEY `cities_name_index` (`name`),
  ADD KEY `cities_status_index` (`status`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_posts_id_index` (`posts_id`),
  ADD KEY `comments_user_id_index` (`user_id`),
  ADD KEY `comments_status_index` (`status`),
  ADD KEY `comments_file_index` (`file`);

--
-- Indexes for table `comment_book_marks`
--
ALTER TABLE `comment_book_marks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_book_marks_user_id_index` (`user_id`),
  ADD KEY `comment_book_marks_comment_id_index` (`comment_id`),
  ADD KEY `comment_book_marks_status_index` (`status`);

--
-- Indexes for table `comment_replies`
--
ALTER TABLE `comment_replies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_replies_user_id_index` (`user_id`),
  ADD KEY `comment_replies_comment_id_index` (`comment_id`),
  ADD KEY `comment_replies_reply_index` (`reply`),
  ADD KEY `comment_replies_status_index` (`status`);

--
-- Indexes for table `comment_stars`
--
ALTER TABLE `comment_stars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_stars_user_id_index` (`user_id`),
  ADD KEY `comment_stars_comment_id_index` (`comment_id`),
  ADD KEY `comment_stars_status_index` (`status`);

--
-- Indexes for table `communities`
--
ALTER TABLE `communities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `communities_user_id_index` (`user_id`),
  ADD KEY `communities_community_no_index` (`community_no`),
  ADD KEY `communities_name_index` (`name`),
  ADD KEY `communities_status_index` (`status`),
  ADD KEY `communities_mute_notification_index` (`mute_notification`),
  ADD KEY `communities_logo_index` (`logo`);

--
-- Indexes for table `community_members`
--
ALTER TABLE `community_members`
  ADD PRIMARY KEY (`id`),
  ADD KEY `community_members_community_id_index` (`community_id`),
  ADD KEY `community_members_user_id_index` (`user_id`),
  ADD KEY `community_members_status_index` (`status`);

--
-- Indexes for table `community_tags`
--
ALTER TABLE `community_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `community_tags_community_id_index` (`community_id`),
  ADD KEY `community_tags_tag_id_index` (`tag_id`),
  ADD KEY `community_tags_status_index` (`status`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `countries_name_index` (`name`),
  ADD KEY `countries_status_index` (`status`);

--
-- Indexes for table `days`
--
ALTER TABLE `days`
  ADD PRIMARY KEY (`id`),
  ADD KEY `days_name_index` (`name`),
  ADD KEY `days_status_index` (`status`);

--
-- Indexes for table `favourite_chats`
--
ALTER TABLE `favourite_chats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `favourite_chats_user_id_index` (`user_id`),
  ADD KEY `favourite_chats_chat_with_index` (`chat_with`),
  ADD KEY `favourite_chats_status_index` (`status`);

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`),
  ADD KEY `friends_send_by_index` (`send_by`),
  ADD KEY `friends_send_to_index` (`send_to`),
  ADD KEY `friends_friends_status_index` (`friends_status`);

--
-- Indexes for table `friend_statuses`
--
ALTER TABLE `friend_statuses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `friend_statuses_name_index` (`name`),
  ADD KEY `friend_statuses_status_index` (`status`);

--
-- Indexes for table `interests`
--
ALTER TABLE `interests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `interests_name_index` (`name`),
  ADD KEY `interests_status_index` (`status`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `likes_posts_id_index` (`posts_id`),
  ADD KEY `likes_user_id_index` (`user_id`),
  ADD KEY `likes_status_index` (`status`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_user_id_index` (`user_id`),
  ADD KEY `notifications_send_by_index` (`send_by`),
  ADD KEY `notifications_community_id_index` (`community_id`),
  ADD KEY `notifications_my_id_index` (`my_id`),
  ADD KEY `notifications_post_id_index` (`post_id`),
  ADD KEY `notifications_body_index` (`body`),
  ADD KEY `notifications_notification_type_index` (`notification_type`),
  ADD KEY `notifications_subtype_index` (`subtype`),
  ADD KEY `notifications_status_index` (`status`);

--
-- Indexes for table `notification_settings`
--
ALTER TABLE `notification_settings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notification_settings_user_id_index` (`user_id`),
  ADD KEY `notification_settings_post_notification_index` (`post_notification`),
  ADD KEY `notification_settings_like_notification_index` (`like_notification`),
  ADD KEY `notification_settings_friend_request_notification_index` (`friend_request_notification`),
  ADD KEY `notification_settings_addinto_community_notification_index` (`addInto_community_notification`),
  ADD KEY `notification_settings_status_index` (`status`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `points`
--
ALTER TABLE `points`
  ADD PRIMARY KEY (`id`),
  ADD KEY `points_posts_id_index` (`posts_id`),
  ADD KEY `points_user_id_index` (`user_id`),
  ADD KEY `points_status_index` (`status`);

--
-- Indexes for table `polls`
--
ALTER TABLE `polls`
  ADD PRIMARY KEY (`id`),
  ADD KEY `polls_user_id_index` (`user_id`),
  ADD KEY `polls_where_to_post_id_index` (`where_to_post_id`),
  ADD KEY `polls_anonymous_survey_index` (`anonymous_survey`),
  ADD KEY `polls_multi_option_select_index` (`multi_option_select`),
  ADD KEY `polls_below_option_index` (`below_option`),
  ADD KEY `polls_status_index` (`status`),
  ADD KEY `polls_lat_index` (`lat`),
  ADD KEY `polls_long_index` (`long`),
  ADD KEY `polls_day_id_index` (`day_id`),
  ADD KEY `polls_posts_id_index` (`posts_id`),
  ADD KEY `polls_hyperlink_index` (`hyperlink`);

--
-- Indexes for table `poll_images`
--
ALTER TABLE `poll_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `poll_images_poll_id_index` (`poll_id`),
  ADD KEY `poll_images_image_index` (`image`),
  ADD KEY `poll_images_status_index` (`status`);

--
-- Indexes for table `poll_options`
--
ALTER TABLE `poll_options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `poll_options_poll_id_index` (`poll_id`),
  ADD KEY `poll_options_image_index` (`image`),
  ADD KEY `poll_options_options_index` (`options`),
  ADD KEY `poll_options_status_index` (`status`);

--
-- Indexes for table `poll_tags`
--
ALTER TABLE `poll_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `poll_tags_poll_id_index` (`poll_id`),
  ADD KEY `poll_tags_tag_id_index` (`tag_id`),
  ADD KEY `poll_tags_status_index` (`status`);

--
-- Indexes for table `poll_users`
--
ALTER TABLE `poll_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `poll_users_post_id_index` (`post_id`),
  ADD KEY `poll_users_user_id_index` (`user_id`),
  ADD KEY `poll_users_status_index` (`status`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_post_master_id_index` (`post_master_id`),
  ADD KEY `posts_user_id_index` (`user_id`),
  ADD KEY `posts_status_index` (`status`),
  ADD KEY `where_to_post_id` (`where_to_post_id`),
  ADD KEY `posts_repost_status_index` (`repost_status`),
  ADD KEY `posts_day_id_index` (`day_id`),
  ADD KEY `posts_oppose_index` (`oppose`),
  ADD KEY `posts_address_index` (`address`),
  ADD KEY `posts_lat_index` (`lat`),
  ADD KEY `posts_long_index` (`long`),
  ADD KEY `posts_end_date_index` (`end_date`),
  ADD KEY `posts_city_index` (`city`);

--
-- Indexes for table `post_masters`
--
ALTER TABLE `post_masters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_masters_name_index` (`name`),
  ADD KEY `post_masters_status_index` (`status`);

--
-- Indexes for table `post_tags`
--
ALTER TABLE `post_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_tags_post_id_index` (`post_id`),
  ADD KEY `post_tags_tags_id_index` (`tags_id`),
  ADD KEY `post_tags_status_index` (`status`);

--
-- Indexes for table `post_user_experiences`
--
ALTER TABLE `post_user_experiences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_user_experiences_post_id_index` (`post_id`),
  ADD KEY `post_user_experiences_user_id_index` (`user_id`),
  ADD KEY `post_user_experiences_experience_index` (`experience`),
  ADD KEY `post_user_experiences_status_index` (`status`);

--
-- Indexes for table `post_user_select_below_options`
--
ALTER TABLE `post_user_select_below_options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_user_select_below_options_post_id_index` (`post_id`),
  ADD KEY `post_user_select_below_options_user_id_index` (`user_id`),
  ADD KEY `post_user_select_below_options_que_id_index` (`que_id`),
  ADD KEY `post_user_select_below_options_below_option_index` (`below_option`),
  ADD KEY `post_user_select_below_options_status_index` (`status`);

--
-- Indexes for table `previous_chats`
--
ALTER TABLE `previous_chats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `previous_chats_user_id_index` (`user_id`),
  ADD KEY `previous_chats_chat_with_index` (`chat_with`),
  ADD KEY `previous_chats_status_index` (`status`);

--
-- Indexes for table `report_posts`
--
ALTER TABLE `report_posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `report_posts_user_id_index` (`user_id`),
  ADD KEY `report_posts_posts_id_index` (`posts_id`),
  ADD KEY `report_posts_status_index` (`status`);

--
-- Indexes for table `reposts`
--
ALTER TABLE `reposts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reposts_posts_id_index` (`posts_id`),
  ADD KEY `reposts_user_id_index` (`user_id`),
  ADD KEY `reposts_status_index` (`status`),
  ADD KEY `reposts_thoughts_index` (`thoughts`),
  ADD KEY `reposts_lat_index` (`lat`),
  ADD KEY `reposts_long_index` (`long`),
  ADD KEY `repost_id` (`repost_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_posts_id_index` (`posts_id`),
  ADD KEY `reviews_user_id_index` (`user_id`),
  ADD KEY `reviews_where_to_post_id_index` (`where_to_post_id`),
  ADD KEY `reviews_review_index` (`review`),
  ADD KEY `reviews_opinion_index` (`opinion`),
  ADD KEY `reviews_online_product_service_index` (`online_product_service`),
  ADD KEY `reviews_recommend_index` (`recommend`),
  ADD KEY `reviews_beware_index` (`beware`),
  ADD KEY `reviews_lat_index` (`lat`),
  ADD KEY `reviews_long_index` (`long`),
  ADD KEY `reviews_status_index` (`status`),
  ADD KEY `reviews_hyper_link_index` (`hyper_link`);

--
-- Indexes for table `reviews_images`
--
ALTER TABLE `reviews_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_images_posts_id_index` (`posts_id`),
  ADD KEY `reviews_images_image_index` (`image`),
  ADD KEY `reviews_images_status_index` (`status`);

--
-- Indexes for table `review_tags`
--
ALTER TABLE `review_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `review_tags_review_id_index` (`review_id`),
  ADD KEY `review_tags_tag_id_index` (`tag_id`),
  ADD KEY `review_tags_status_index` (`status`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `saved_posts`
--
ALTER TABLE `saved_posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `saved_posts_posts_id_index` (`posts_id`),
  ADD KEY `saved_posts_user_id_index` (`user_id`),
  ADD KEY `saved_posts_status_index` (`status`);

--
-- Indexes for table `save_messsages`
--
ALTER TABLE `save_messsages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `save_messsages_user_id_index` (`user_id`),
  ADD KEY `save_messsages_friend_id_index` (`friend_id`),
  ADD KEY `save_messsages_count_index` (`count`),
  ADD KEY `save_messsages_status_index` (`status`);

--
-- Indexes for table `seeks`
--
ALTER TABLE `seeks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seeks_user_id_index` (`user_id`),
  ADD KEY `seeks_where_to_post_id_index` (`where_to_post_id`),
  ADD KEY `seeks_review_index` (`review`),
  ADD KEY `seeks_suggestion_index` (`suggestion`),
  ADD KEY `seeks_status_index` (`status`),
  ADD KEY `seeks_lat_index` (`lat`),
  ADD KEY `seeks_long_index` (`long`),
  ADD KEY `seeks_day_id_index` (`day_id`),
  ADD KEY `seeks_posts_id_index` (`posts_id`),
  ADD KEY `seeks_hyperlink_index` (`hyperLink`);

--
-- Indexes for table `seeks_images`
--
ALTER TABLE `seeks_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seeks_images_posts_id_index` (`posts_id`),
  ADD KEY `seeks_images_image_index` (`image`),
  ADD KEY `seeks_images_status_index` (`status`);

--
-- Indexes for table `seek_tags`
--
ALTER TABLE `seek_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seek_tags_seek_id_index` (`seek_id`),
  ADD KEY `seek_tags_tag_id_index` (`tag_id`),
  ADD KEY `seek_tags_status_index` (`status`);

--
-- Indexes for table `shares`
--
ALTER TABLE `shares`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shares_posts_id_index` (`posts_id`),
  ADD KEY `shares_user_id_index` (`user_id`),
  ADD KEY `shares_status_index` (`status`);

--
-- Indexes for table `share_post_comunnities`
--
ALTER TABLE `share_post_comunnities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `share_post_comunnities_posts_id_index` (`posts_id`),
  ADD KEY `share_post_comunnities_community_id_index` (`community_id`),
  ADD KEY `share_post_comunnities_status_index` (`status`);

--
-- Indexes for table `start_reviews`
--
ALTER TABLE `start_reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `start_reviews_user_id_index` (`user_id`),
  ADD KEY `start_reviews_posts_id_index` (`posts_id`),
  ADD KEY `start_reviews_status_index` (`status`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`),
  ADD KEY `states_country_id_index` (`country_id`),
  ADD KEY `states_name_index` (`name`),
  ADD KEY `states_status_index` (`status`);

--
-- Indexes for table `surveys`
--
ALTER TABLE `surveys`
  ADD PRIMARY KEY (`id`),
  ADD KEY `surveys_user_id_index` (`user_id`),
  ADD KEY `surveys_where_to_post_id_index` (`where_to_post_id`),
  ADD KEY `surveys_anonymous_survey_index` (`anonymous_survey`),
  ADD KEY `surveys_status_index` (`status`),
  ADD KEY `surveys_lat_index` (`lat`),
  ADD KEY `surveys_long_index` (`long`),
  ADD KEY `surveys_day_id_index` (`day_id`),
  ADD KEY `surveys_posts_id_index` (`posts_id`),
  ADD KEY `surveys_hyperlink_index` (`hyperlink`),
  ADD KEY `surveys_experience_option_index` (`experience_option`);

--
-- Indexes for table `survey_ans`
--
ALTER TABLE `survey_ans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `survey_ans_posts_id_index` (`posts_id`),
  ADD KEY `survey_ans_question_id_index` (`question_id`),
  ADD KEY `survey_ans_user_id_index` (`user_id`),
  ADD KEY `survey_ans_option_id_index` (`option_id`),
  ADD KEY `survey_ans_status_index` (`status`);

--
-- Indexes for table `survey_questions`
--
ALTER TABLE `survey_questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `survey_questions_survey_id_index` (`survey_id`),
  ADD KEY `survey_questions_multi_option_select_index` (`multi_option_select`),
  ADD KEY `survey_questions_below_option_index` (`below_option`),
  ADD KEY `survey_questions_status_index` (`status`);

--
-- Indexes for table `survey_questions_images`
--
ALTER TABLE `survey_questions_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `survey_questions_images_survey_question_id_index` (`survey_question_id`),
  ADD KEY `survey_questions_images_image_index` (`image`),
  ADD KEY `survey_questions_images_status_index` (`status`);

--
-- Indexes for table `survey_questions_options`
--
ALTER TABLE `survey_questions_options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `survey_questions_options_survey_question_id_index` (`survey_question_id`),
  ADD KEY `survey_questions_options_image_index` (`image`),
  ADD KEY `survey_questions_options_options_index` (`options`),
  ADD KEY `survey_questions_options_status_index` (`status`);

--
-- Indexes for table `survey_tags`
--
ALTER TABLE `survey_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `survey_tags_survey_id_index` (`survey_id`),
  ADD KEY `survey_tags_tag_id_index` (`tag_id`),
  ADD KEY `survey_tags_status_index` (`status`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tags_user_id_index` (`user_id`),
  ADD KEY `tags_category_id_index` (`category_id`),
  ADD KEY `tags_name_index` (`name`),
  ADD KEY `tags_status_index` (`status`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_mobile_number_unique` (`mobile_number`),
  ADD KEY `users_status_index` (`status`),
  ADD KEY `users_social_login_id_index` (`social_login_id`),
  ADD KEY `users_last_ssen_index` (`last_ssen`),
  ADD KEY `users_online_status_index` (`online_status`);

--
-- Indexes for table `user_chat_images`
--
ALTER TABLE `user_chat_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_chat_images_image_index` (`image`),
  ADD KEY `user_chat_images_status_index` (`status`);

--
-- Indexes for table `user_interests`
--
ALTER TABLE `user_interests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_interests_user_id_index` (`user_id`),
  ADD KEY `user_interests_status_index` (`status`),
  ADD KEY `user_interests_interest_id_index` (`interest_id`);

--
-- Indexes for table `user_mute_notifications`
--
ALTER TABLE `user_mute_notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_mute_notifications_mute_by_index` (`mute_by`),
  ADD KEY `user_mute_notifications_muted_to_index` (`muted_to`);

--
-- Indexes for table `user_post_reviews`
--
ALTER TABLE `user_post_reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_post_reviews_posts_id_index` (`posts_id`),
  ADD KEY `user_post_reviews_user_id_index` (`user_id`),
  ADD KEY `user_post_reviews_star_index` (`star`),
  ADD KEY `user_post_reviews_discription_index` (`discription`),
  ADD KEY `user_post_reviews_status_index` (`status`),
  ADD KEY `user_post_reviews_image_index` (`image`);

--
-- Indexes for table `user_profiles`
--
ALTER TABLE `user_profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_profiles_user_id_index` (`user_id`),
  ADD KEY `user_profiles_dob_index` (`dob`),
  ADD KEY `user_profiles_profession_index` (`profession`),
  ADD KEY `user_profiles_image_index` (`image`),
  ADD KEY `user_profiles_description_index` (`description`(768)),
  ADD KEY `user_profiles_education_index` (`education`),
  ADD KEY `user_profiles_linkedin_index` (`linkedin`),
  ADD KEY `user_profiles_status_index` (`status`),
  ADD KEY `user_profiles_lat_index` (`lat`),
  ADD KEY `user_profiles_long_index` (`long`);

--
-- Indexes for table `user_seraches`
--
ALTER TABLE `user_seraches`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_seraches_user_id_index` (`user_id`),
  ADD KEY `user_seraches_key_word_index` (`key_word`),
  ADD KEY `user_seraches_status_index` (`status`);

--
-- Indexes for table `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `votes_posts_id_index` (`posts_id`),
  ADD KEY `votes_user_id_index` (`user_id`),
  ADD KEY `votes_option_id_index` (`option_id`),
  ADD KEY `votes_status_index` (`status`);

--
-- Indexes for table `where_to_posts`
--
ALTER TABLE `where_to_posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `where_to_posts_name_index` (`name`),
  ADD KEY `where_to_posts_image_index` (`image`),
  ADD KEY `where_to_posts_status_index` (`status`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `apposes`
--
ALTER TABLE `apposes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `block_chats`
--
ALTER TABLE `block_chats`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `book_mark_comments`
--
ALTER TABLE `book_mark_comments`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `chat_images`
--
ALTER TABLE `chat_images`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `comment_book_marks`
--
ALTER TABLE `comment_book_marks`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `comment_replies`
--
ALTER TABLE `comment_replies`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `comment_stars`
--
ALTER TABLE `comment_stars`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `communities`
--
ALTER TABLE `communities`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `community_members`
--
ALTER TABLE `community_members`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=229;

--
-- AUTO_INCREMENT for table `community_tags`
--
ALTER TABLE `community_tags`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=176;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `days`
--
ALTER TABLE `days`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `favourite_chats`
--
ALTER TABLE `favourite_chats`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `friends`
--
ALTER TABLE `friends`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=197;

--
-- AUTO_INCREMENT for table `friend_statuses`
--
ALTER TABLE `friend_statuses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `interests`
--
ALTER TABLE `interests`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1706;

--
-- AUTO_INCREMENT for table `notification_settings`
--
ALTER TABLE `notification_settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=573;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `points`
--
ALTER TABLE `points`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=244;

--
-- AUTO_INCREMENT for table `polls`
--
ALTER TABLE `polls`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;

--
-- AUTO_INCREMENT for table `poll_images`
--
ALTER TABLE `poll_images`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=186;

--
-- AUTO_INCREMENT for table `poll_options`
--
ALTER TABLE `poll_options`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=341;

--
-- AUTO_INCREMENT for table `poll_tags`
--
ALTER TABLE `poll_tags`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `poll_users`
--
ALTER TABLE `poll_users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=930;

--
-- AUTO_INCREMENT for table `post_masters`
--
ALTER TABLE `post_masters`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `post_tags`
--
ALTER TABLE `post_tags`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1561;

--
-- AUTO_INCREMENT for table `post_user_experiences`
--
ALTER TABLE `post_user_experiences`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `post_user_select_below_options`
--
ALTER TABLE `post_user_select_below_options`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT for table `previous_chats`
--
ALTER TABLE `previous_chats`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=366;

--
-- AUTO_INCREMENT for table `report_posts`
--
ALTER TABLE `report_posts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `reposts`
--
ALTER TABLE `reposts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=194;

--
-- AUTO_INCREMENT for table `reviews_images`
--
ALTER TABLE `reviews_images`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `review_tags`
--
ALTER TABLE `review_tags`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `saved_posts`
--
ALTER TABLE `saved_posts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `save_messsages`
--
ALTER TABLE `save_messsages`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `seeks`
--
ALTER TABLE `seeks`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT for table `seeks_images`
--
ALTER TABLE `seeks_images`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `seek_tags`
--
ALTER TABLE `seek_tags`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `shares`
--
ALTER TABLE `shares`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `share_post_comunnities`
--
ALTER TABLE `share_post_comunnities`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `start_reviews`
--
ALTER TABLE `start_reviews`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `surveys`
--
ALTER TABLE `surveys`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=400;

--
-- AUTO_INCREMENT for table `survey_ans`
--
ALTER TABLE `survey_ans`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT for table `survey_questions`
--
ALTER TABLE `survey_questions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=369;

--
-- AUTO_INCREMENT for table `survey_questions_images`
--
ALTER TABLE `survey_questions_images`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=375;

--
-- AUTO_INCREMENT for table `survey_questions_options`
--
ALTER TABLE `survey_questions_options`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=809;

--
-- AUTO_INCREMENT for table `survey_tags`
--
ALTER TABLE `survey_tags`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=195;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=189;

--
-- AUTO_INCREMENT for table `user_chat_images`
--
ALTER TABLE `user_chat_images`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user_interests`
--
ALTER TABLE `user_interests`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=913;

--
-- AUTO_INCREMENT for table `user_mute_notifications`
--
ALTER TABLE `user_mute_notifications`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user_post_reviews`
--
ALTER TABLE `user_post_reviews`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `user_profiles`
--
ALTER TABLE `user_profiles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;

--
-- AUTO_INCREMENT for table `user_seraches`
--
ALTER TABLE `user_seraches`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=202;

--
-- AUTO_INCREMENT for table `votes`
--
ALTER TABLE `votes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=504;

--
-- AUTO_INCREMENT for table `where_to_posts`
--
ALTER TABLE `where_to_posts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `apposes`
--
ALTER TABLE `apposes`
  ADD CONSTRAINT `apposes_appose_post_id_foreign` FOREIGN KEY (`appose_post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `apposes_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `apposes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `block_chats`
--
ALTER TABLE `block_chats`
  ADD CONSTRAINT `block_chats_chat_with_foreign` FOREIGN KEY (`chat_with`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `block_chats_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `book_mark_comments`
--
ALTER TABLE `book_mark_comments`
  ADD CONSTRAINT `book_mark_comments_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `book_mark_comments_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `book_mark_comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `chat_images`
--
ALTER TABLE `chat_images`
  ADD CONSTRAINT `chat_images_community_id_foreign` FOREIGN KEY (`community_id`) REFERENCES `communities` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `cities_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cities_state_id_foreign` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `comment_book_marks`
--
ALTER TABLE `comment_book_marks`
  ADD CONSTRAINT `comment_book_marks_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comment_book_marks_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `comment_replies`
--
ALTER TABLE `comment_replies`
  ADD CONSTRAINT `comment_replies_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comment_replies_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `comment_stars`
--
ALTER TABLE `comment_stars`
  ADD CONSTRAINT `comment_stars_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comment_stars_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `communities`
--
ALTER TABLE `communities`
  ADD CONSTRAINT `communities_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `community_members`
--
ALTER TABLE `community_members`
  ADD CONSTRAINT `community_members_community_id_foreign` FOREIGN KEY (`community_id`) REFERENCES `communities` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `community_members_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `community_tags`
--
ALTER TABLE `community_tags`
  ADD CONSTRAINT `community_tags_community_id_foreign` FOREIGN KEY (`community_id`) REFERENCES `communities` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `community_tags_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `favourite_chats`
--
ALTER TABLE `favourite_chats`
  ADD CONSTRAINT `favourite_chats_chat_with_foreign` FOREIGN KEY (`chat_with`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `favourite_chats_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `friends`
--
ALTER TABLE `friends`
  ADD CONSTRAINT `friends_friends_status_foreign` FOREIGN KEY (`friends_status`) REFERENCES `friend_statuses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `friends_send_by_foreign` FOREIGN KEY (`send_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `friends_send_to_foreign` FOREIGN KEY (`send_to`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `likes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_community_id_foreign` FOREIGN KEY (`community_id`) REFERENCES `communities` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `notifications_my_id_foreign` FOREIGN KEY (`my_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `notifications_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `notifications_send_by_foreign` FOREIGN KEY (`send_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `notifications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `notification_settings`
--
ALTER TABLE `notification_settings`
  ADD CONSTRAINT `notification_settings_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `points`
--
ALTER TABLE `points`
  ADD CONSTRAINT `points_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `points_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `polls`
--
ALTER TABLE `polls`
  ADD CONSTRAINT `polls_day_id_foreign` FOREIGN KEY (`day_id`) REFERENCES `days` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `polls_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `polls_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `polls_where_to_post_id_foreign` FOREIGN KEY (`where_to_post_id`) REFERENCES `where_to_posts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `poll_images`
--
ALTER TABLE `poll_images`
  ADD CONSTRAINT `poll_images_poll_id_foreign` FOREIGN KEY (`poll_id`) REFERENCES `polls` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `poll_options`
--
ALTER TABLE `poll_options`
  ADD CONSTRAINT `poll_options_poll_id_foreign` FOREIGN KEY (`poll_id`) REFERENCES `polls` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `poll_tags`
--
ALTER TABLE `poll_tags`
  ADD CONSTRAINT `poll_tags_poll_id_foreign` FOREIGN KEY (`poll_id`) REFERENCES `polls` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `poll_tags_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `poll_users`
--
ALTER TABLE `poll_users`
  ADD CONSTRAINT `poll_users_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `poll_users_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_day_id_foreign` FOREIGN KEY (`day_id`) REFERENCES `days` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`where_to_post_id`) REFERENCES `where_to_posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `posts_post_master_id_foreign` FOREIGN KEY (`post_master_id`) REFERENCES `post_masters` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `post_tags`
--
ALTER TABLE `post_tags`
  ADD CONSTRAINT `post_tags_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `post_tags_tags_id_foreign` FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `post_user_experiences`
--
ALTER TABLE `post_user_experiences`
  ADD CONSTRAINT `post_user_experiences_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `post_user_experiences_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `post_user_select_below_options`
--
ALTER TABLE `post_user_select_below_options`
  ADD CONSTRAINT `post_user_select_below_options_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `post_user_select_below_options_que_id_foreign` FOREIGN KEY (`que_id`) REFERENCES `survey_questions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `post_user_select_below_options_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `previous_chats`
--
ALTER TABLE `previous_chats`
  ADD CONSTRAINT `previous_chats_chat_with_foreign` FOREIGN KEY (`chat_with`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `previous_chats_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `report_posts`
--
ALTER TABLE `report_posts`
  ADD CONSTRAINT `report_posts_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `report_posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reposts`
--
ALTER TABLE `reposts`
  ADD CONSTRAINT `reposts_ibfk_1` FOREIGN KEY (`repost_id`) REFERENCES `posts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `reposts_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reposts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_where_to_post_id_foreign` FOREIGN KEY (`where_to_post_id`) REFERENCES `where_to_posts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reviews_images`
--
ALTER TABLE `reviews_images`
  ADD CONSTRAINT `reviews_images_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `review_tags`
--
ALTER TABLE `review_tags`
  ADD CONSTRAINT `review_tags_review_id_foreign` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `review_tags_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `saved_posts`
--
ALTER TABLE `saved_posts`
  ADD CONSTRAINT `saved_posts_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `saved_posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `save_messsages`
--
ALTER TABLE `save_messsages`
  ADD CONSTRAINT `save_messsages_friend_id_foreign` FOREIGN KEY (`friend_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `save_messsages_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `seeks`
--
ALTER TABLE `seeks`
  ADD CONSTRAINT `seeks_day_id_foreign` FOREIGN KEY (`day_id`) REFERENCES `days` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `seeks_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `seeks_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `seeks_where_to_post_id_foreign` FOREIGN KEY (`where_to_post_id`) REFERENCES `where_to_posts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `seeks_images`
--
ALTER TABLE `seeks_images`
  ADD CONSTRAINT `seeks_images_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `seek_tags`
--
ALTER TABLE `seek_tags`
  ADD CONSTRAINT `seek_tags_seek_id_foreign` FOREIGN KEY (`seek_id`) REFERENCES `seeks` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `seek_tags_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `shares`
--
ALTER TABLE `shares`
  ADD CONSTRAINT `shares_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `shares_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `share_post_comunnities`
--
ALTER TABLE `share_post_comunnities`
  ADD CONSTRAINT `share_post_comunnities_community_id_foreign` FOREIGN KEY (`community_id`) REFERENCES `communities` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `share_post_comunnities_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `start_reviews`
--
ALTER TABLE `start_reviews`
  ADD CONSTRAINT `start_reviews_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `start_reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `states`
--
ALTER TABLE `states`
  ADD CONSTRAINT `states_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `surveys`
--
ALTER TABLE `surveys`
  ADD CONSTRAINT `surveys_day_id_foreign` FOREIGN KEY (`day_id`) REFERENCES `days` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `surveys_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `surveys_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `surveys_where_to_post_id_foreign` FOREIGN KEY (`where_to_post_id`) REFERENCES `where_to_posts` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `survey_ans`
--
ALTER TABLE `survey_ans`
  ADD CONSTRAINT `survey_ans_option_id_foreign` FOREIGN KEY (`option_id`) REFERENCES `survey_questions_options` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `survey_ans_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `survey_ans_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `survey_questions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `survey_ans_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `survey_questions`
--
ALTER TABLE `survey_questions`
  ADD CONSTRAINT `survey_questions_survey_id_foreign` FOREIGN KEY (`survey_id`) REFERENCES `surveys` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `survey_questions_images`
--
ALTER TABLE `survey_questions_images`
  ADD CONSTRAINT `survey_questions_images_survey_question_id_foreign` FOREIGN KEY (`survey_question_id`) REFERENCES `survey_questions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `survey_questions_options`
--
ALTER TABLE `survey_questions_options`
  ADD CONSTRAINT `survey_questions_options_survey_question_id_foreign` FOREIGN KEY (`survey_question_id`) REFERENCES `survey_questions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `survey_tags`
--
ALTER TABLE `survey_tags`
  ADD CONSTRAINT `survey_tags_survey_id_foreign` FOREIGN KEY (`survey_id`) REFERENCES `surveys` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `survey_tags_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tags`
--
ALTER TABLE `tags`
  ADD CONSTRAINT `tags_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tags_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_interests`
--
ALTER TABLE `user_interests`
  ADD CONSTRAINT `user_interests_interest_id_foreign` FOREIGN KEY (`interest_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_interests_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_mute_notifications`
--
ALTER TABLE `user_mute_notifications`
  ADD CONSTRAINT `user_mute_notifications_mute_by_foreign` FOREIGN KEY (`mute_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_mute_notifications_muted_to_foreign` FOREIGN KEY (`muted_to`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_post_reviews`
--
ALTER TABLE `user_post_reviews`
  ADD CONSTRAINT `user_post_reviews_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_post_reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_profiles`
--
ALTER TABLE `user_profiles`
  ADD CONSTRAINT `user_profiles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_seraches`
--
ALTER TABLE `user_seraches`
  ADD CONSTRAINT `user_seraches_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `votes`
--
ALTER TABLE `votes`
  ADD CONSTRAINT `votes_option_id_foreign` FOREIGN KEY (`option_id`) REFERENCES `poll_options` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `votes_posts_id_foreign` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `votes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
