	<!-- статичный вывод -->
	<div>
		<h3>Atom Heart Mother</h3>
		Идентификатор альбома: 1<br />
		Дата выхода: 10 октября 1970 <br />
		Лейбл: EMI, Harvest, Capitol<br />
		Формат: LP, CD<br />
		Статус:  Золотой (USA)
	</div>
	
<?php
	// серверный сценарий  
	
	// однострочный вывод
	echo '<div>';
	echo '<h3>Atom Heart Mother</h3>';
	echo 'Идентификатор альбома: 1<br />'; 
	echo 'Дата выхода: 10 октября 1970 <br />';
	echo 'Лейбл: EMI, Harvest, Capitol<br />';
	echo 'Формат: LP, CD<br />';
	echo 'Статус:  Золотой (USA)';
	echo '</div>';

	// многострочный вывод
	echo <<<HERE
		<div>
		<h3>Atom Heart Mother</h3>
		Идентификатор альбома: 1<br />
		Дата выхода: 10 октября 1970 <br />
		Лейбл: EMI, Harvest, Capitol<br />
		Формат: LP, CD<br />
		Статус:  Золотой (USA)
		</div>
	HERE;
?>