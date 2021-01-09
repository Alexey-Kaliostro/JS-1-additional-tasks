//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-16");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-
/*

Задача: склад товаров
Задание
Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

available - общее количество товаров на складе
ordered - единиц товара в заказе
Используя ветвления дополни код функции так, что:

Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка 'На складе недостаточно товаров!'.
В противном случае записывается строка 'Заказ оформлен, с вами свяжется менеджер'.
Тесты
Объявлена функция checkStorage(available, ordered).
Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
Вызов checkStorage(100, 130) возвращает 'На складе недостаточно товаров!'.
Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
Вызов checkStorage(200, 150) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
Вызов checkStorage(150, 180) возвращает 'На складе недостаточно товаров!'.

*/

//Task START

function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
ordered <= available ? message = 'Заказ оформлен, с вами свяжется менеджер' : message = 'На складе недостаточно товаров!';

  // Пиши код выше этой строки
  return message;
}


//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");


