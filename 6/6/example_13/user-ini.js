// импортируем объект user
import { user } from './user.js';

// переопределяем свойства объекта
user.login = prompt("Введите значение login:");
user.email = prompt("Введите значение email:");
user.role = "SuperAdmin";