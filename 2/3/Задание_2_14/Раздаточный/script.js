	let content = document.body.firstElementChild.nextElementSibling.children;
	let text = content.item(0);
	let author = content.item(1).children;
	let title = content.item(2);
	let date = content.item(3);
	let characters = content.item(4).children;

	// 
	let obj = {};

	//
	obj.text = text.innerHTML;

	obj.author = {
		name : author.item(0).innerText, 
		patronymic : author.item(1).innerText, 
		surname : author.item(2).innerText
	};

	obj.title = title.innerText;

	obj.date = date.innerText;

	obj.characters = [
		characters.item(0).innerText,
		characters.item(1).innerText,
		characters.item(2).innerText,
		characters.item(3).innerText,
	];