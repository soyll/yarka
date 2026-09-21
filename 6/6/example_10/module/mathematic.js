// константа pi
const pi = Math.PI;

// квадрат числа
const fnSquare = (x) => {
	return x * x;
};

// куб числа
var fnCube = (x) => {
	return x * x * x;
};

// площадь круга
let fnAreaCircle = (r) => {
	let res = pi * fnSquare(r);  
	res = res.toFixed(2);
	return res;
};

// площадь треугольника
function fnAreaTriangle (a, h) {
	return (a * h) / 2; 
};

// экспорт дефолтного значения (функции)
export default fnAreaCircle;

// экспорт константы pi
export { pi };

// экспорт функции
export { fnAreaTriangle };