let reviews = document.querySelectorAll(".review"); /* Все отзывы */
let line = document.querySelector(".slider-line"); /* Блок в котором отзывы расположены в строку */
let width;
let count = 0;  /* Номер слайда */

/* Функция адаптивности */
function sliderChangeWidth() {
	width = document.querySelector(".slider").offsetWidth;
	line.style.width = width * reviews.length + "px";
	reviews.forEach(item => {
		item.style.width = width + "px";
		item.style.height = "auto";
	})
}

function moveSlider() {
	line.style.transform = "translate(-" + width * count + "px)";
}

/* Следующий слайд */
document.querySelector(".next").addEventListener("click", function() {
	count++;

	if (count >= reviews.length) {
		count = 0;
	}

	moveSlider();
});

/* Предыдущий слайд */
document.querySelector(".prev").addEventListener("click", function() {
	count--;

	if (count < 0) {
		count = reviews.length - 1;
	}

	moveSlider();
});

sliderChangeWidth();
window.addEventListener("resize", sliderChangeWidth);