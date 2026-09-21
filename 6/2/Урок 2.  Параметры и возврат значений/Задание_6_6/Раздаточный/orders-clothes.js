/*
	0 - индефикатор // id
	1 - Название // title
	2 - Бренд // brand
	3 - Цвет // color
	4 - Страна // country
	5 - Капюшон // hood 
	6 - Размер // size
	7 - Цена // price
	8 - путь к изображению // image	
*/

let orders = [
	{
		user: {
			name: "Аркадий",
			surname: "Рамазанов",
			email: "arkadiy1970@mail.ru",
			phone: "8-915-880-16-32"
		},
		order_info: {
			order_id: "1337423",
			order_date: "30.05.2023",
			delivery_type: "По адресу",
			discount: "1.5%",
			total_price: 80.790,
			address: {
				city: "Энгельс",
				street: "Молодежный переулок",
				house: "21",
				flat: "-"
			}
		},
		products: [
			{
				id: 1533,
				title: 'Пальто',
				brand: 'Cap Horn',
				color: 'Синий',
				country: 'Китай',
				hood: 'Отсутствует',
				size: '50',
				price: 17.990,
				image: 'images/palto-cap.jpg'
			},
			{
				id: 6112,
				title: 'Утепленная стеганая куртка',
				brand: 'D.Molina',
				color: 'Серый',
				country: 'Китай',
				hood: 'Отсутствует',
				size: '50',
				price: 33.000,
				image: 'images/steganaya-dmolina.jpg'
			},
			{
				id: 7513,
				title: 'Пуховик',
				brand: 'MARCO DI RADI',
				color: 'Синий',
				country: 'Китай',
				hood: 'Есть',
				size: '50',
				price: 29.800,
				image: 'images/pyxovik-marco.jpg'
			}
		]
	},

	{
		user: {
			name: "Павел",
			surname: "Волков",
			email: "pavel-volk@mail.ru",
			phone: "8-912-592-31-82"
		},
		order_info: {
			order_id: "1337424",
			order_date: "08.06.2023",
			delivery_type: "По адресу",
			discount: "2%",
			total_price: 79.580,
			address: {
				city: "Москва",
				street: "Белореченская",
				house: "31",
				flat: "125"
			}
		},
		products: [
			{
				id: 1275,
				title: 'Утепленная стеганая куртка',
				brand: 'MARCO DI RADI',
				color: 'Синий',
				country: 'Китай',
				hood: 'Есть',
				size: '52',
				price: 25.590,
				image: 'images/steganaya-marco.jpg'
			},
			{
				id: 2213,
				title: 'Пальто',
				brand: 'Allsaints',
				color: 'Коричневый',
				country: 'Китай',
				hood: 'Отсутствует',
				size: '50',
				price: 53.990,
				image: 'images/palto-allsaints.jpg'
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
		order_info: {
			order_id: "1337425",
			order_date: "14.06.2023",
			delivery_type: "Пункт выдачи",
			discount: "5%",
			total_price: 229.900,
			address: {
				city: "Тольятти",
				street: "Коммунистическая",
				house: "2",
				flat: "98"
			}
		},
		products: [
			{
				id: 1454,
				title: 'Парка',
				brand: 'Woolrich',
				color: 'Синий',
				country: 'Вьетнам',
				hood: 'Есть',
				size: '48',
				price: 92.500,
				image: 'images/parka-woolrich.jpg'
			},
			{
				id: 8133,
				title: 'Пуховик',
				brand: 'Geox',
				color: 'Черный',
				country: 'Китай',
				hood: 'Есть',
				size: '48',
				price: 46.000,
				image: 'images/pyxovik-geox.jpg'
			},
			{
				id: 2935,
				title: 'Стеганая куртка',
				brand: 'Sand',
				color: 'Черный',
				country: 'Китай',
				hood: 'Есть',
				size: '50',
				price: 41.900,
				image: 'images/kyrtka-sand.jpg'
			},	
			{
				id: 1057,
				title: 'Стеганая куртка',
				brand: 'Ea7',
				color: 'Синий',
				country: 'Китай',
				hood: 'Отсутствует',
				size: '50',
				price: 49.500,
				image: 'images/kyrtka-ea7.jpg'
			}
		]
	}
]