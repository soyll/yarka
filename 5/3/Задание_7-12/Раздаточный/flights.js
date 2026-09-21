// JS объект ответа сервера
let flights = 
{
    "data": {
        "items": 
        [
            {
                "code": "MGERS",
                "cost": 40000,
                "flights": 
                [
                    {
                        "flight_id": 1,
                        "flight_code": "FP2100",
                        "from": {
                            "city": "Moscow",
                            "airport": "Sheremetyevo",
                            "iata": "SVO",
                            "date": "2023-06-01",
                            "time": "08:35"
                        },
                        "to": {
                            "city": "Kazan",
                            "airport": "Kazan",
                            "iata": "KZN",
                            "date": "2023-06-01",
                            "time": "10:05"
                        },
                        "cost": 10500,
                        "availability": 58
                    },
                    {
                        "flight_id": 2,
                        "flight_code": "FP1200",
                        "from": {
                            "city": "Kazan",
                            "airport": "Kazan",
                            "iata": "KZN",
                            "date": "2023-06-2",
                            "time": "12:00"
                        },
                        "to": {
                            "city": "Moscow",
                            "airport": "Sheremetyevo",
                            "iata": "SVO",
                            "date": "2023-06-2",
                            "time": "13:35"
                        },
                        "cost": 9500,
                        "availability": 58
                    }
                ]
            },
			{
                "code": "MSADS",
                "cost": 71250,
                "flights": 
                [
                    {
                        "flight_id": 3,
                        "flight_code": "S7-1012",
                        "from": {
                            "city": "St-Petersburg",
                            "airport": "Pulkovo",
                            "iata": "LED",
                            "date": "2023-06-01",
                            "time": "15:10"
                        },
                        "to": {
                            "city": "Moscow",
                            "airport": "Domodedovo",
                            "iata": "DME",
                            "date": "2023-06-01",
                            "time": "16:50"
                        },
                        "cost": 35625,
                        "availability": 58
                    },
                    {
                        "flight_id": 4,
                        "flight_code": "F1201",
                        "from": {
                            "city": "Moscow",
                            "airport": "Vnukovo",
                            "iata": "VKO",
                            "date": "2023-06-02",
                            "time": "19:10"
                        },
                        "to": {
                            "city": "St-Petersburg",
                            "airport": "Pulkovo",
                            "iata": "LED",
                            "date": "2023-06-02",
                            "time": "20:30"
                        },
                        "cost": 35625,
                        "availability": 58
                    }
                ]
            },
			{
                "code": "ADAKM",
                "cost": 146000,
                "flights": 
                [
                    {
                        "flight_id": 5,
                        "flight_code": "U6-262",
                        "from": {
                            "city": "Ekaterinburg",
                            "airport": "Koltsovo",
                            "iata": "SVX",
                            "date": "2023-06-02",
                            "time": "07:15"
                        },
                        "to": {
                            "city": "Moscow",
                            "airport": "Domodedovo",
                            "iata": "DME",
                            "date": "2023-06-02",
                            "time": "9:40"
                        },
                        "cost": 73000,
                        "availability": 58
                    },
                    {
                        "flight_id": 6,
                        "flight_code": "U6-299",
                        "from": {
                            "city": "Moscow",
                            "airport": "Domodedovo",
                            "iata": "DME",
                            "date": "2023-06-02",
                            "time": "19:45"
                        },
                        "to": {
                            "city": "Ekaterinburg",
                            "airport": "Koltsovo",
                            "iata": "SVX",
                            "date": "2023-06-02",
                            "time": "21:55"
                        },
                        "cost": 73000,
                        "availability": 58
                    }
                ]
            }
        ]
    }
}