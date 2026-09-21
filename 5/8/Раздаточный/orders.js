let orders = [
	{
		user: {
			name: "Павел",
			surname: "Волков",
			email: "pavel-volk@mail.ru",
			phone: "8-912-592-31-82"
		},
		order: {
			num: "12-946/4",
			order_date: "08.06.2023",
			delivery_type: "По адресу",
			discount: "2%",
			total_price: 15388.00,
			adress: {
				city: "Москва",
				street: "Белореченская улица",
				house: "31"
			}
		},
		products: [
			{
				category: "clothes",
				articul: "RTLACB138001",
				name: "Носки из хлопка SUPIMA",
				brand: "UNIQLO",
				color: "Синий",
				season: "Мульти",
				price: 399.00,
				image: "images/socks-supima.jpg"
			},
			{
				category: "clothes",
				articul: "MP002XM0984Y",
				name: "Брюки",
				brand: "O'stin",
				color: "Черный",
				season: "Демисезон",
				price: 3799.00,
				image: "images/trousers-ostin.jpg"
			},
			{
				category: "clothes",
				articul: "VRNHN7G40ZCX",
				name: "Дубленка CLAUDE",
				brand: "Mango Man",
				color: "Коричневый",
				season: "Мульти",
				price: 11190.00,
				image: "images/sheepskin-claude.jpg"
			}
		]
	},

	{
		user: {
			name: "Аркадий",
			surname: "Рамазанов",
			email: "arkadiy1970@mail.ru",
			phone: "8-915-880-16-32"
		},
		order: {
			num: "2341/4",
			order_date: "30.05.2023",
			delivery_type: "По адресу",
			discount: "1.5%",
			total_price: 119299.00,
			adress: {
				city: "Энгельс",
				street: "Молодежный переулок",
				house: "21"
			}
		},
		products: [
			{
				category: "laptop",
				articul: "7YE70TCON7LD",
				name: "Ноутбук HUAWEI MateBook D16 RLEF-X",
				gpu: "Intel Iris Xe Graphics",
				cpu: "Intel Core i5-12500H",
				cpu_cores: 12,
				ram: '16 ГБ',
				diagonal: "16'",
				price: 76299.00,
				image: "images/huawei-matebook-d16-rlef-x.jpg"
			},
			{
				category: "tv",
				articul: "MP002XM0984Y",
			    name: "Телевизор LED DEXP H24F7000E",
			    model: "H24F7000E", 
			    firm: "DEXP", 
				diagonal: "24", 
			    matrix: "LED", 
			    frequency: "60 Гц", 
			    perm: "HD", 
			    price: 25000.00,
			    image: "images/H24F7000E.jpg"
			},
			{
				category: "tv",			   
			    articul: "R5GOTXN0MP1M",
			    name: "Телевизор LED Harper 24R470T",
				diagonal: "24", 
			    matrix: "LED", 
			    frequency: "50 Гц", 
			    firm: "Harper", 
			    model: "24R470T", 
			    perm: "HD", 
			    price: 18000.00, 
			    image: "images/24R470T.jpg"
			}
		]
	},

	{
		user: {
			name: "Кирилл",
			surname: "Тетерин",
			email: "kirill04091978@gmail.com",
			phone: "8-939-100-46-27"
		},
		order: {
			num: "7633/2",
			order_date: "14.06.2023",
			delivery_type: "Пункт выдачи",
			discount: "5%",
			total_price: 79580.00,
			adress: {
				city: "Тольятти",
				street: "Коммунистическая улица",
				house: "2"
			}
		},
		products: [
			{
				category: "clothes",
				articul: "FNF7F6E8YU5Y",
				name: "Утепленная стеганая куртка",
				brand: "MARCO DI RADI",
				color: "Синий",
				season: "Китай",
				price: 25590.00,
				image: "images/steganaya-marco.jpg"
			},

			{
				category: "clothes",
				articul: "KEP16B0DQZK5",
				name: "Пальто",
				brand: "Allsaints",
				color: "Коричневый",
				season: "Мульти",
				price: 53990.00,
				image: "images/palto-allsaints.jpg"
			}
		]
	}
]