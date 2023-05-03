console.log(`Задача №1 Конвертация скоростей`)
let kmh = 36, ms = 20;
console.log(`${kmh} км/ч соотвествует ${kmh / 3600 * 1000} м/с`);
console.log(`${ms} км/ч соотвествует ${ms * 3600 / 1000} км/ч`);
// alert(kmh + " км/ч соответствует " + kmh / 3600 * 1000 + " м/с");
// alert(ms + " м/c соответствует " + ms * 3600 / 1000 + " км/ч");


console.log(`\nЗадача №2 Прямоугольник`)
let a = 3, b = 4, c = 5;
let p = (a+b+c)/2;
if (a+b>c && a+c>b && b+c>a) {
    console.log(`Треугольник существует`);
    console.log(`Периметр P = ${a+b+c}`);
    console.log(`Площадь S = ${Math.sqrt(p*(p-a)*(p-b)*(p-c))}`);
    console.log(`Отношение P/S = ${(a+b+c)/Math.sqrt(p*(p-a)*(p-b)*(p-c))}`);
} else {
    console.log(`Треугольник не существует`);
}


console.log(`\nЗадача №3 Fizz-Buzz`)
var number = prompt('Введите число больше 0:');
if (!isNaN(number) && number >= 0) {
    for (let i = 0; i < number; i++) {
        if (number % 5 == 0) {
            console.log(`fizz buzz`);
        }
        else if (number % 2 == 0) {
            console.log(`buzz`);
        }
        else {
            console.log(`fizz`);
        }
    }
}
else {
    console.log(`ЧИСЛО! И отрицательные вводить не нужно`);
}


console.log(`\nЗадача №4 Елка к новому году`)
let TreeString = "";
for (let i = 0; i < 13; i++) {
    let SaveString = 0;
    if (i % 2 == 0) {
        SaveString = "#".repeat(i) + "\n";
    }
    else {
        SaveString = "*".repeat(i) + "\n";
    }
    TreeString += SaveString;
}
TreeString += "||";
console.log(TreeString);


console.log(`\nЗадача №5 Угадай число`)
let game = true;
plan = 11;
while (game) {
    var numb = prompt('Угадай число:');
    if (!isNaN(numb)) {
        if (plan == numb) {
            console.log (`Угадано`);
            break;
        }
        else if (plan > numb) {
            console.log (`Загаданное число больше`);
        }
        else {
            console.log (`Загаданное число меньше`);
        }
    }
    else {
        console.log(`Вы ввели не число`);
    }
}


console.log(`\nЗадача №6 Деление`)
n = prompt("Введите число n > 0");
x = prompt("Введите число x > 0");
y = prompt("Введите число y > 0");
if (n % 1 == 0 && x % 1 == 0 && y % 1 == 0 && n > 0 && x > 0 && y > 0) {
    if (n % x == 0 && n % y == 0) {
        console.log (`n = ${n}, x = ${x}, y = ${y} => true`);
    }
    else {
        console.log (`n = ${n}, x = ${x}, y = ${y} => false`);
    }
}
else {
    console.log (`Введите целое и неотрицательное число больше 0`);
}


console.log(`\nЗадача №7 Кварталы`)
let month = prompt("Введите номер месяц");
if (month <= 3) {
    console.log (`месяц ${month} => 1 квартал`);
}else if(month<=6) {
    console.log(`месяц ${month} => 2 квартал`);
}else if(month<=9) {
    console.log(`месяц ${month} => 3 квартал`);
}else if(month<=12) {
    console.log(`месяц ${month} => 4 квартал`);
}
