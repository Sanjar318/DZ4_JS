let name = prompt('Введите ваше имя');
let age = +prompt('Введите год рождения');
let lastyears = +prompt('Введите нынишний год');

function infoPlayer() {
    if (!isNaN(name) && isNaN(age) && isNaN(lastyears)) {
        alert('Пошло что-то не так');
    } else {
        alert(`Ваше имя: ${name}
        Ваш год рождения: ${age}
        Нынешний год: ${lastyears}`);
        console.log(`${name}, Ваш возраст: ${lastyears - age}`);
        alert(`${name}, Твой возраст: ${lastyears - age}, Примеры будут зависить от твоего возроста! не буду желать удачи )`)
    }
}

infoPlayer();

let num = +prompt('Введите сколько примеров вы хотите решить');
let operators = ['+', '-', '*', '/']; 

function random() {
    for (let i = 0; i < num; i++) {
        let rand1 = Math.round(Math.random() * (lastyears - age));
        let rand2 = Math.round(Math.random() * (lastyears - age));
        let operator = operators[Math.floor(Math.random() * operators.length)];
        let user = +prompt(`Введите правельный ответ ${rand1} ${operator} ${rand2} = ?`);
        if (!isNaN(operators)) {
    
        } else {
            let resul;
            switch (operator) {
                case '+':
                    resul = rand1 + rand2;
                    break;
                case '-':
                    resul = rand1 - rand2;
                    break;
                case '*':
                    resul = rand1 * rand2;
                    break;
                case '/':
                    resul = rand1 / rand2;
                default:
                    break;
            }
            if (resul == user) {
                console.log(`Верный ответ: ${rand1} ${operator} ${rand2} = ${Math.round(resul)} Молодец!: ${user}`);
                alert(`Верный ответ: ${rand1} ${operator} ${rand2} = ${Math.round(resul) Молодец!`);
            } else {
                console.log(`Верный ответ: ${rand1} ${operator} ${rand2} = ${Math.round(resul) Ты дал(а) не верный ответ: ${user}`);
                alert(`Верный ответ: ${rand1} ${operator} ${rand2} = ${Math.round(resul) Ты дал(а) не верный ответ: ${user}`);
            }
            
        }
    }
}

random();
