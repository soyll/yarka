// отдаем (экспортируем) во внешний файл функцию
// функция-выражение
export let fnSayHello = (name) => {
	name = fnUpperCase (name);
	alert ("Hello, " + name + "!");
}

// вспомогательная функция модуля
// функция-инструкция
function fnUpperCase (name) {
	name = name.toUpperCase();
	return name;
}