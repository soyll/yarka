// константа pi / экспортируем
export const pi = Math.PI; 

// квадрат числа / НЕ экспортируем
const fnSquare = (x) => {
	return x * x;
};

// куб числа / НЕ экспортируем
var fnCube = (x) => {
	return x * x * x;
};

// площадь круга / экспортируем
export let fnAreaCircle = (r) => {
	let res = pi * fnSquare(r);  
	res = res.toFixed(2);
	return res;
}; 

// площадь треугольника / экспортируем
export function fnAreaTriangle (a, h) {
	return (a * h) / 2; 
};