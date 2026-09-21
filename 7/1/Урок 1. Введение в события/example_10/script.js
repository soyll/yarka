// функция вывода данных массива film
function fnOutData() {
		
	let table = "";
	
	film.forEach( (obj) => {
		table += `
			<li><b>${obj.title}</b>
				<ul>
					<li>Режиссер: ${obj.director}</li>
					<li>Год: ${obj.year}</li>
					<li>Страна: ${obj.country}</li>
				</ul>
			</li>
		`;
	} );
	
	// вставка контента в документ
	document.querySelector("#con").innerHTML = `<ol>${table}</ol>`;
}