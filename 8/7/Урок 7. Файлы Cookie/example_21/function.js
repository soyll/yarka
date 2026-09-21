// функции для работы с cookie

// функция установки сookie 
function setCookie(name, value, minute=1){
	var d = new Date();
	d.setTime(d.getTime() + (minute * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = name + "=" + value + "; " + expires + "; path=/; samesite=strict";	
};

// функция вывода всех сookie	
function outCookie() {
	let cookies = document.cookie.split('; ');

	if(document.cookie != '') {
		for (cookie of cookies) {
			[key, val] = cookie.split('=');
			document.write(key, ' -> ', val, '<p>');
		}			
	} else 
		document.write("<p>Файлы cookie для страницы не установлены</p>");
}

// функция получения cookie по ключу 
function getCookie(name) {
	let decodedCookie = decodeURIComponent(document.cookie);
	let arr = decodedCookie.split(';');
	name = name + "=";

	for(var i = 0; i < arr.length; i++) {
		
		var cookie = arr[i];

		// избавляемся от возможных ведущих пробелов
		while (cookie.charAt(0) == ' ') {
			cookie = cookie.substring(1); 
		}

		// извлекаем значение cookie
		if (cookie.indexOf(name) == 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}
	return "";
}	

// функция проверки cookie 
function hasCookie(name) {
	var val = getCookie(name);
	if (val != "") {
		document.write("<p>Cookie " + name + " = " + val);
	} else {
		document.write("<p>Cookie с именем " + name + " на странице не найден");
	}
}

// функция удаления сookie 
function delCookie(name) {
	setCookie(name, "", -1);
}