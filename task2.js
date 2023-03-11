const numHour = +prompt('Введите количество часов','');
if (numHour == '' || numHour == 'null' || typeof(numHour) !== 'number' ) {
    alert ('Отменено')
} else {
    let numSec = numHour*3600;
        alert(numSec);
}
