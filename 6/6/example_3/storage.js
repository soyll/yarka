// отдаем (экспортируем) во внешний файл функцию
// функция-выражение
export let fnSayHello = (name) => {
	name = fnUpperCase (name);
	alert ("Hello, " + name + "!");
}

// экспортируем вспомогательную функцию модуля
// функция-инструкция
export function fnUpperCase (name) {
	name = name.toUpperCase() + "!";
	return name;
}