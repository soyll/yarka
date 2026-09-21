-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 06 2023 г., 13:18
-- Версия сервера: 5.7.29
-- Версия PHP: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `db_distance`
--
CREATE DATABASE IF NOT EXISTS `db_distance` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `db_distance`;

-- --------------------------------------------------------

--
-- Структура таблицы `courses`
--

DROP TABLE IF EXISTS `courses`;
CREATE TABLE IF NOT EXISTS `courses` (
  `id_courses` int(6) NOT NULL AUTO_INCREMENT,
  `id_personnel` int(6) NOT NULL,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` int(3) DEFAULT NULL,
  `requirement` json DEFAULT NULL,
  `theme` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `price` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_courses`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

--
-- Очистить таблицу перед добавлением данных `courses`
--

TRUNCATE TABLE `courses`;
--
-- Дамп данных таблицы `courses`
--

INSERT DELAYED IGNORE INTO `courses` (`id_courses`, `id_personnel`, `name`, `duration`, `requirement`, `theme`, `price`) VALUES
(1, 1, 'Курсы программирования для начинающих', 100, NULL, '', '20.000'),
(2, 2, 'Курсы программирования web-сайтов', 150, NULL, '', '25.000'),
(3, 3, 'Эксперт — программист Java с навыками рефакторинга (комплексная программа)', 200, NULL, '', '70.000'),
(4, 3, 'Эксперт по разработке приложений под мобильную платформу iOS (iPhone и iPad) (комплексная программа)', 200, NULL, '', '90.000'),
(5, 4, 'Основы программирования и баз данных', 120, NULL, '', '75.000'),
(6, 4, 'Программирование на языке C (Си)', 90, NULL, '', '60.000'),
(7, 5, 'Fullstack разработчик на Python', 220, NULL, '', '110.000'),
(8, 5, 'Профессия веб-разработчик', 100, NULL, '', '50.000'),
(9, 5, 'Профессия Android-разработчик', 150, NULL, '', '40.000'),
(10, 6, 'Java до профи: основы, UI дизайн и Android разработка', 170, NULL, '', '60.000'),
(11, 6, 'Изучение Python до профи / Основы, Django, TKinter', 140, NULL, '', '50.000'),
(12, 6, 'Современная вёрстка адаптивного веб-сайта', 150, NULL, '', '30.000'),
(13, 6, 'Видеокурс по PHP, MySQL / Создание динамического сайта', 60, NULL, '', '20.000'),
(14, 6, 'Изучение JavaScript: от нуля и до создания сайта', 70, NULL, '', '25.000'),
(15, 1, 'Создание Андроид игры на движке Unity', 160, NULL, '', '70.000'),
(16, 1, 'Создание игры под платформу iOS на Unity', 160, NULL, '', '65.000'),
(17, 2, 'Digital-старт: первый шаг к востребованной профессии', 200, NULL, '', '60.000'),
(18, 7, 'Программирование для всех начинающих. Изучаем язык VBA под Excel', 100, NULL, '', '40.000'),
(19, 7, 'Основы C++. Программирование для начинающих', 100, NULL, '', '40.000'),
(20, 7, 'Разработка приложений под Android. Базовый курс', 100, NULL, '', '40.000'),
(21, 7, 'Kotlin. Уроки по основам разработки android-приложений', 120, NULL, '', '20.000'),
(22, 8, 'Ключевые аспекты веб-разработки на PHP', 40, NULL, '', '20.000'),
(23, 8, 'Основы HTML, CSS и веб-дизайна', 40, NULL, '', '15.000'),
(24, 8, 'Ключевые аспекты разработки на Python', 30, NULL, '', '15.000'),
(25, 8, 'Основы современной вёрстки', 50, NULL, '', '15.000'),
(26, 9, 'Курсы по программированию на PHP. Лёгкий старт для начинающих', 90, NULL, '', '30.000'),
(27, 9, 'Изучение JavaScript от нуля до гуру', 120, NULL, '', '70.000'),
(28, 9, 'Уроки по основам разработки android-приложений на Java', 40, NULL, '', '15.000'),
(29, 9, 'Курс «Разработка на Java»', 190, NULL, '', '50.000'),
(30, 10, 'Язык программирования PYTHON', 80, NULL, '', '25.000'),
(31, 10, 'Python программирование', 200, NULL, '', '90.000'),
(32, 10, 'Изучение PHP для начинающих', 60, NULL, '', '25.000'),
(33, 10, 'С нуля до Junior PHP Developer', 150, NULL, '', '60.000'),
(34, 10, 'Паскаль с нуля. Основы программирования', 40, NULL, '', '10.000'),
(35, 2, 'HTML5 уроки с нуля для начинающих', 50, NULL, '', '10.000'),
(36, 2, 'iOS программирование в Xcode', 90, NULL, '', '25.000'),
(37, 2, 'Структура и интерпретация компьютерных программ', 30, NULL, '', '20.000');

-- --------------------------------------------------------

--
-- Структура таблицы `education`
--

DROP TABLE IF EXISTS `education`;
CREATE TABLE IF NOT EXISTS `education` (
  `id_education` int(6) NOT NULL AUTO_INCREMENT,
  `id_personnel` int(6) NOT NULL,
  `institution` varchar(200) NOT NULL,
  `qualification` varchar(200) DEFAULT NULL,
  `specialty` varchar(200) DEFAULT NULL,
  `years` json DEFAULT NULL,
  `note` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_education`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Очистить таблицу перед добавлением данных `education`
--

TRUNCATE TABLE `education`;
--
-- Дамп данных таблицы `education`
--

INSERT DELAYED IGNORE INTO `education` (`id_education`, `id_personnel`, `institution`, `qualification`, `specialty`, `years`, `note`) VALUES
(1, 1, 'Санкт-Петербургский национальный исследовательский университет информационных технологий, механики и оптики (Университет ИТМО)', 'Факультет информационных технологий и программирования', 'Разработка программного обеспечения / Software Engineering', '2003', ''),
(2, 2, 'Московский физико-технический институт (государственный университет) (МФТИ)', 'Факультет информационной безопасности и компьютерных технологий', 'Технологии разработки телекоммуникационных систем', '1999', ''),
(3, 3, 'Московский государственный университет имени М.В. Ломоносова (МГУ)', 'Факультет лазерной и световой инженерии', 'Разработка корпоративных информационных систем', '2007', ''),
(4, 4, 'Московский физико-технический институт (государственный университет) (МФТИ) ', 'Факультет фотоники и оптоинформатики', 'Информационные технологии и сервисы в телекоммуникациях', '1989', ''),
(5, 5, 'Московский государственный институт электронной техники (технический университет) ', 'Факультет инфокоммуникационных технологий', 'Программное обеспечение радиоэлектронных систем', '2005', ''),
(6, 6, 'Санкт-Петербургский государственный политехнический университет Петра Великого (СПбПУ)', 'Автоматизация технологических процессов и производств', 'Программное обеспечение в инфокоммуникациях', '1984', ''),
(7, 7, 'Санкт-Петербургский государственный политехнический университет Петра Великого (СПбПУ)', 'Физико-технический факультет', 'Информационные технологии в проектировании бортовой электроники', '2001', ''),
(8, 8, 'Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)', 'Информатика и вычислительная техника', 'Веб-технологии', '1989', ''),
(9, 9, 'Коми государственый педагогический институт', 'Программная инженерия', 'Информационные системы бизнеса(СОП)', '1999', ''),
(10, 10, 'Сыктывкарский государственный университет', 'Автоматизация технологических процессов и производств', 'Машинное обучение и анализ данных', '2015', ''),
(11, 2, 'Национальный исследовательский ядерный университет «МИФИ» (МИФИ)', 'Прикладная математика и информатика', 'Компьютерная графика и веб-дизайн', '1989', ''),
(12, 5, 'Санкт-Петербургский государственный университет (СПбГУ)', 'Информационные системы и технологии', 'Безопасность киберфизических систем', '1993', ''),
(13, 6, 'Московский государственный технический университет имени Н.Э. Баумана (МГТУ (им. Н.Э. Баумана))', 'Физико-технический факультет', 'Информационные технологии в проектировании бортовой электроники', '2011', ''),
(14, 10, 'Московский государственный университет имени М.В. Ломоносова (МГУ)', 'Мехатроника и робототехника', 'Интеллектуальные технологии в робототехнике', '1995', ''),
(15, 9, 'Санкт-Петербургский государственный университет (СПбГУ)', 'Факультет инфокоммуникационных технологий', 'Информационные технологии в теплофизике(СОП)', '2002', ''),
(16, 7, 'Московский государственный технический университет имени Н.Э. Баумана (МГТУ (им. Н.Э. Баумана))', 'Электроэнергетика и электротехника', 'Информационные системы для техносферной и экологической безопасности', '1981', ''),
(17, 3, 'Сыктывкарский государственный университет', 'Управление в технических системах', 'Интеллектуальные системы в гуманитарной среде', '1983', '');

-- --------------------------------------------------------

--
-- Структура таблицы `personnel`
--

DROP TABLE IF EXISTS `personnel`;
CREATE TABLE IF NOT EXISTS `personnel` (
  `id_personnel` int(1) NOT NULL AUTO_INCREMENT,
  `surname` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `patronymic` varchar(50) NOT NULL,
  `post` varchar(100) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `level_edu` varchar(100) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `actual` tinyint(1) DEFAULT '1',
  `hidden` tinyint(1) DEFAULT '0',
  `note` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id_personnel`),
  UNIQUE KEY `personnel` (`surname`,`name`,`patronymic`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Очистить таблицу перед добавлением данных `personnel`
--

TRUNCATE TABLE `personnel`;
--
-- Дамп данных таблицы `personnel`
--

INSERT DELAYED IGNORE INTO `personnel` (`id_personnel`, `surname`, `name`, `patronymic`, `post`, `category`, `level_edu`, `rating`, `actual`, `hidden`, `note`) VALUES
(1, 'Курманова', 'Фаина', 'Галимзяновна', 'Преподаватель ', 'Высшая', 'Высшее профессиональное', 4.75, 1, 0, ''),
(2, 'Трост', 'Дмитрий', 'Юрьевич', 'Программист', 'Первая', 'Высшее профессиональное', 4.56, 1, 0, ''),
(3, 'Баринов', 'Владимир', 'Викторович', ' Заведующий отделением', 'Высшая', 'Высшее профессиональное ', 4.9, 1, 0, ''),
(4, 'Лаврова', 'Елизавета', 'Викторовна', 'Методист', 'Высшая', 'Высшее профессиональное ', 4.87, 1, 0, ''),
(5, 'Бородин', 'Константин', 'Алексеевич', 'Старший преподаватель', 'Высшая', 'Высшее профессиональное ', 4.8, 1, 0, ''),
(6, 'Кунга', 'Екатерина', 'Александровна', 'Преподаватель', 'Первая', 'Высшее профессиональное ', 5, 1, 0, ''),
(7, 'Косимцев', 'Евгений', 'Сергеевич', 'Преподаватель', 'Высшая', 'Высшее профессиональное', 4.8, 1, 0, ''),
(8, 'Друбин', 'Виктор ', 'Игнатьевич', 'Заведующий отделением', 'Высшая', 'Высшее профессиональное ', 4.86, 1, 0, ''),
(9, 'Рудина', 'Елизавета', 'Леонтьевна', 'Преподаватель', 'Высшая', 'Высшее профессиональное ', 4.78, 0, 0, ''),
(10, 'Шевелев', 'Владимир', 'Константинович', 'Системный администратор', 'Высшая', 'Высшее профессиональное', 4.9, 1, 0, '');

-- --------------------------------------------------------

--
-- Структура таблицы `person_data`
--

DROP TABLE IF EXISTS `person_data`;
CREATE TABLE IF NOT EXISTS `person_data` (
  `id_personnel` int(6) NOT NULL AUTO_INCREMENT,
  `login` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pwd` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date DEFAULT NULL,
  `sex` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card_owner` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card_number` varchar(19) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card_date` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card_cvc` int(3) DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_personnel`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Очистить таблицу перед добавлением данных `person_data`
--

TRUNCATE TABLE `person_data`;
--
-- Дамп данных таблицы `person_data`
--

INSERT DELAYED IGNORE INTO `person_data` (`id_personnel`, `login`, `pwd`, `date`, `sex`, `card_owner`, `card_number`, `card_date`, `card_cvc`, `email`, `site`) VALUES
(1, 'user@01', 'Password@01', '1992-05-12', 'f', 'KURMANOVA FAINA', '1625 6253 7264 7453', '12/25', 388, 'kag-gal@pechora.ru', 'https://pechora.ru/kurmanova/'),
(2, 'user@02', 'Password@02', '1985-02-21', 'm', 'TROST DMITRIY', '1625 6253 7264 7453', '02/26', 326, 'dim-team-12@gmail.com', 'https://pechora.ru/trost/'),
(3, 'user@03', 'Password@03', '1970-03-23', 'm', 'BARINOV VLADIMIR', '1254 4568 4687 2135', '07/24', 781, 'mix-s200@yandex.ru', 'https://pechora.ru/barinov/'),
(4, 'user@04', 'Password@04', '1980-01-10', 'f', 'LAVROVA ELIZAVETA', '1254 4568 4687 2135', '07/24', 115, 'methodist@pechora.ru', 'https://pechora.ru/lavrova/'),
(5, 'user@05', 'Password@05', '1979-10-11', 'm', 'BORODIN KONSTANTIN', '1254 4568 4687 2135', '11/24', 132, 'borodin-2000@gmail.com', 'https://pechora.ru/borodin/'),
(6, 'user@06', 'Password@06', '1990-03-19', 'f', 'KUNGA EKATERINA', '1254 4568 4687 2135', '12/25', 325, 'kunga-ek@yandex.ru', 'https://infourok.ru/user/kunga/'),
(7, 'user@07', 'Password@07', '1998-10-12', 'm', 'KOSIMTSEV EVGENIY', '1254 4568 4687 2135', '01/26', 772, 'kosim_vse@pechora.ru', 'https://pechora.ru/kosimzev/'),
(8, 'user@08', 'Password@08', '1975-06-20', 'm', 'DRUBIN VIKTOR', '1254 4568 4687 2135', '05/24', 359, 'dru-bin@pechora.ru', 'https://pechora.ru/drubin/'),
(9, 'user@09', 'Password@09', '1987-07-15', 'f', 'RUDINA ELIZAVETA', '1254 4568 4687 2135', '05/24', 127, 'rudina89125529221@yandex.ru', 'https://pechora.ru/rudina/'),
(10, 'user@10', 'Password@10', '1991-10-14', 'm', 'SHEVELEV VLADIMIR', '1254 4568 4687 2135', '02/26', 521, 'shevelev-vk@pechora-pet.ru', 'https://pechora.ru/shevelev/');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
