let persons = [
	{
		id_personnel : 1, 
		surname : "Бородина", 
		name : "Ксения", 
		patronymic : "Алексеевна", 
		post : "Преподаватель", 
		category : "Соответствие занимаемой должности", 
		level_edu : "Высшее профессиональное", 
		experience : { total : 21.3, college : 14.5 }, 
		email : undefined,

		education : [
			{
				"institution" : "Санкт-Петербургский государственный университет (СПбГУ)", 
				"qualification" : "Информационные системы и технологии", 
				"specialty" : "Безопасность киберфизических систем", 
				"year_receipts" : 1993, 
				"year_release" : 1998
			},

			{
				"institution" : "Московский государственный университет имени М.В.Ломоносова", 
				"qualification" : "Факультет вычислительной математики и кибернетики", 
				"specialty" : "Прикладная математика и информатика", 
				"year_receipts" : 1990, 
				"year_release" : 2001
			}
		],

		courses : ["Профессия веб-разработчик", "Fullstack разработчик на Python", "Профессия Frontend-разработчик PRO"] 
	},
	{
		id_personnel : 2, 
		surname : "Кошкина", 
		name : "Вера", 
		patronymic : "Николаевна", 
		post : "Преподаватель",  
		category : "Соответствие занимаемой должности", 
		level_edu : "Высшее профессиональное", 
		experience: { total : 29.1, college : 29.1 },
		email : "kos_verni@mail.ru",
		education : [
			{
				"institution" : "Уральский федеральный университет", 
				"qualification" : "Компьютерные и информационные науки", 
				"specialty" : "Математическое моделирование, численные методы и комплексы программ", 
				"year_receipts" : 1995, 
				"year_release" : 2000
			},
			{
				"institution" : "Университет «Синергия»", 
				"qualification" : "Программирование", 
				"specialty" : "Программирование", 
				"year_receipts" : 2018, 
				"year_release" : 2022
			}
		],

		courses : ["Разработка web-проектов", "Основы баз данных и SQL"] 
	},
	{
		id_personnel : 3, 
		surname : "Рыбкина", 
		name : "Ольга", 
		patronymic : "Витальевна", 
		post : "Преподаватель", 
		category : "Соответствие занимаемой должности", 
		level_edu : "Высшее профессиональное ", 
		experience: { total : 21.3, college : 14.5 },  
		email : "rubkina-olga99@mail.ru",
		education : [
			{
				"institution" : "Санкт-Петербургский политехнический университет Петра Великого", 
				"qualification" : "Информационные системы и технологии", 
				"specialty" : "Информационные системы и технологии", 
				"year_receipts" : 1995, 
				"year_release" : 2001
			},
			{
				"institution" : "ВШЭ", 
				"qualification" : "Разработка информационных систем для бизнеса", 
				"specialty" : "Разработка информационных систем для бизнеса", 
				"year_receipts" : 2005, 
				"year_release" : 2010
			}
		],

		courses : ["PHP для начинающих", "Программирование на Python"] 		

	},		
	{
		id_personnel : 4, 
		surname : 'Маркова', 
		name : 'Елизавета', 
		patronymic : 'Андреевна', 
		post : 'Преподаватель', 
		category : 'Первая', 
		level_edu : 'Высшее профессиональное ', 
		experience : { total : 19.11, college : 16.5 }, 
		email : 'markova.el@gmail.com',
		education : [
			{
				"institution" : "Уральский федеральный университет", 
				"qualification" : "Прикладная информатика", 
				"specialty" : "Прикладная информатика в аналитической экономике", 
				"year_receipts" : 2000, 
				"year_release" : 2010
			},
			{
				"institution" : "Санкт-Петербургский политехнический университет Петра Великого", 
				"qualification" : "Системное программирование", 
				"specialty" : "Прикладная математика и информатика", 
				"year_receipts" : 2012, 
				"year_release" : 2017
			}
		],

		courses : ["Системное администрирование", "Разработка Web, мультимедийных приложений, программного обеспечения", "Инфографика"] 
	}	
]