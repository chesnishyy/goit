/**
 * Created by agent on 18.09.2016.
 */
var arrName = [];

for (var i = 0; i < 5; i++) {
    arrName[i] = prompt('');
}

var userName = prompt('Введите имя пользователя');

for (var i = 0; i < 5; i++) {
    if (arrName[i] == userName) {
        alert(userName + ', вы успешно вошли');
    }
    else {
        alert('Имя пользователя указано не верно');
    }
}