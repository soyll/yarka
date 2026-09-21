// при загрузке документа добавляем элементы checkbox к списку
function fnLoad() {
	
	document.getElementById("show-hide").style.display="none";
	
	// выбор элемментов списка
	lis = document.querySelectorAll("#codecs ol li");

	for (li of lis) {
		// добавление <input type='checkbox'> в конец каждого элемента списка
		li.insertAdjacentHTML("beforeend", "<input type='checkbox'>");
	}
}

// скрываем выбранные элементы списка 
function fnHideSelect() {
	// выбор элементов списка с атрибутом checked
	inputs = document.querySelectorAll("#codecs ol li input:checked");	
	
	// если есть выбранные <input type='checkbox'>
	if(inputs.length) {
		document.getElementById("show-hide").style.display="block";
		document.getElementById("hide-select").style.display="none";
			
		for (input of inputs) {
			// поиск и скрытие родительского элемента для input:checked
			input.closest("li").style.display = "none";
		}	
	}
}

// отображаем исходный список
function fnShowHide() {
	
	document.getElementById("show-hide").style.display="none";
	document.getElementById("hide-select").style.display="block";
	
	// выбор элементов списка
	lis = document.querySelectorAll("#codecs ol li");
	
	for (li of lis) {
		// для каждого элемента списка устанавливаем display = list-item
		li.style.display = "list-item";
	}
}	
