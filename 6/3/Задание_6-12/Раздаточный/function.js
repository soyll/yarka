// функция получения данных о заказе по его идентификатору
function fnGetOrderData(id) {
    // проходим циклом по всем заказам
    for (let order of orders) {
        // если идентификатор заказа ракен искомому
        if (order.order_info.order_id == id) {
            // возвращаем данные о заказе
            return order;
        }
    }    
}

// функция форматного вывода данных о заказе 
function fnOutOrder(data) {
    with (data.user) {
        user = `
            Заказчик: <b>${name}  ${surname}</b></br>
            Телефон: <b>${phone}</b><br>
            E-mail: <b>${email}</b><p>
        `;
    }

    with (data.order_info) {
        order = `            
            Дата заказа: <b>${order_date}</b></br>
            Скидка: <b>${discount}</b></br>
            Стоимость: <b>${total_price}</b></br>
            Тип заказа: <b>${delivery_type}</b></br>
            Доставка: 
            г. <b>${address.city}</b>,
            ул. <b>${address.street}</b>,
            д. <b>${address.house}</b>,
            кв. <b>${address.flat}</b><p>
        `;
    }

    products = "<h3>Заказ</h3>";

    for (product of data.products) {
        with (product) {
            products += `
               Идентификатор товара: <b>${id}</b><br>
               Название: <b>${title}</b><br>
               Бренд: <b>${brand}</b><br>
               Цвет: <b>${color}</b><br>
               Страна изотовитель: <b>${country}</b><br>
               Наличие капюшона: <b>${hood}</b><br>
               Размер: <b>${size}</b><br>
               Цена: <b>${price}</b><br>
               Изображение:<br><img src='${image}' width='250px'>
               <hr>           
            `;
        }
    }

    out = `
        <h2>Сведения о заказе с идентификатором: ${data.order_info.order_id}</h2>
        <div> ${user} ${order}  ${products} </div>
    `;

    // вывод форматных данных в браузер
    document.write(out);
}