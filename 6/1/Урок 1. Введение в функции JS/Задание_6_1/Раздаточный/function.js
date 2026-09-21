// объявляем функцию fnPechoraPRO ()
function fnPechoraPRO () {
	// инициирукм строку (вставляемый контент)
	let msg = `
		<a href='https://vk.com/pechora_pro'>Добро пожаловать на pechoraPRO!</a>
	`;
	// выбор целевого элемента, вставка контента 
	document.getElementById("welcome").innerHTML = msg;
}