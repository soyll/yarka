let orders = [
	{
		bill: "N-2201/11-5",
		vendor: {
			date: "15.01.2023",
			name: "Иоганн Кристоф Фридрих фон Шиллер",
			discount: 0,
			payment: "Нет"
		},
		product: [
			{
				id: 2,
				title: 'Ультрабук HUAWEI MateBook D 15 BoM-WFQ9',
				gpu: 'AMD Radeon Graphics',
				cpu: 'AMD Ryzen 5 5500U',
				cpu_cores: 6,
				ram: '16 ГБ',
				diagonal: "15.6'",
				price: 62.999,
				img: "huawei-matebook-d-15bom-wfq9.jpg"
			}
		]
	},

	{
		bill: "N-1103/12-1",
		vendor: {
			date: "12.01.2023",
			
			name: "Гегель Георг Вильгельм Фридрих",
			discount: 15,
			payment: "Нет"
		},
		product: [
			{
				id: 1,
				title: 'Ноутбук HUAWEI MateBook D16 RLEF-X',
				gpu: 'Intel Iris Xe Graphics',
				cpu: 'Intel Core i5-12500H',
				cpu_cores: 12,
				ram: '16 ГБ',
				diagonal: "16'",
				price: 76.299,
				img: "huawei-matebook-d16-rlef-x.jpg"
			},
			{
				id: 3,
				title: 'Ноутбук MSI GF76 Katana 11SC-483XRU',
				gpu: 'GeForce GTX 1650',
				cpu: 'Intel Core i5-11400H',
				cpu_cores: 6,
				ram: '8 ГБ',
				diagonal: "17.3'",
				price: 59.399,
				img: "msi-gf76-katana11sc-483xru.jpg"
			}
		]		
	},

	{
		bill: "G-1353/28-10",
		vendor: {
			date: "14.01.2023",
			name: "Достоевский Федор Михайлович",
			discount: 5,
			payment: "Да"
		},
		product: [
			{
				id: 2,
				title: 'Ультрабук HUAWEI MateBook D 15 BoM-WFQ9',
				gpu: 'AMD Radeon Graphics',
				cpu: 'AMD Ryzen 5 5500U',
				cpu_cores: 6,
				ram: '16 ГБ',
				diagonal: "15.6'",
				price: 62.999,
				img: "huawei-matebook-d-15bom-wfq9.jpg"
			}
		]	
	}
]

export { orders };