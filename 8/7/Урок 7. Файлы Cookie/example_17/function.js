// функции для работы с cookie

// функция установки сookie 
function setCookie(name, value, minute=1){
	var d = new Date();
	d.setTime(d.getTime() + (minute * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = name + "=" + value + "; " + expires + "; path=/; samesite=strict";	
};