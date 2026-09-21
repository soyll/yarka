// импортируем массив
import teams from './teams.js';

// определяем и экспортируем функцию получения данных
// передаем параметр по умолчанию - импортированный массив teams
export function fnGetData(data=teams) {
    let res = '';
    // перебираем элементы массива teams
    for (let i=0; i<data.length; i++) {

        // для вложенного массива стилей группы 
        // -> вызываем вспомогательную функцию вывода списка
        let list = fnOutList(data[i][6]);
        
        res += `
            <h3>${data[i][1]}</h3>
            <ol>${list}</ol>
        `;
    } 
    // возвращаем результат
    return res;
};

// определяем вспомогательную функцию вывода списка
function fnOutList(arr) {
    let res = '';
    for (let i=0; i<arr.length; i++) {
        res += '<li>' + arr[i] + '</li>';
    };

    // возвращаем результат
    return res;
}