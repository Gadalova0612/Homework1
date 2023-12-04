//Задание 1
let password = 'пароль';
let userInpyt = prompt ("Введите пароль");
if (userInpyt === password) {
    alert("Пароль введен верно")
}else {
    alert("Пароль введен неправильно")
}

//Задание 2
let c = 5;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//Задание 3
let d = 5;
let e = 15;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}
//Задание 4
let a = '2';
let b = '3'; 
alert(Number(a) + Number (b));

//Задание 5
let monthNumber = 12;
switch (monthNumber) {
    case 1:
    case 2:
    case 3:
   alert("Зима");
        break;
    case 4:
    case 5:
    case 6:
     alert("Весна");
        break;
    case 7:
    case 8:
    case 9:
     alert("Лето"); 
    case 10:
    case 11:
    case 12:
     alert("Осень");
     
    default:
        alert("неизвестный месяц");
        break;
}

