// объявление многострочной стрелочной функции
var welcome = () => {
	
	let user = prompt("Представьтесь, пожалуйста");

	if (user == null ||  user.replace(/\s/g, '') == "")
		document.write ("<h1>Здрасссьте вам ...</h1>");
	else 
		document.write ("<h1>Добро пожаловать, уважаемый ", user, "!</h1>");
}