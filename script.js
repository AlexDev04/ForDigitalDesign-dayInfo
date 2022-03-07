const form = document.forms[0]
const chooseDate = form.elements[0];
const dateBtn = form.elements[1];
const text = document.getElementById('text');

function getDayInfo(date) {
    console.log('Введена дата: ' + date)
    let curDate = firstDayOfMonth(date);
    console.log('первый день месяца выбранной даты: ' + curDate);
    let finalWeeks = getWeekNum(date, curDate);
    console.log(finalWeeks)

    text.innerHTML = writeDay(date) + ', ' + finalWeeks + ' неделя '
        + writeMonth(date) + ' ' + date.getFullYear() + ' года';
}

function firstDayOfMonth(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    return new Date(year, month, 1)
}
let weeksCount = 1;
function getWeekNum(date, curDate) {
    console.log('Счетчик недель после вызова функции: ' + weeksCount)
    if (curDate.getDate() < date.getDate()) {
        curDate.setDate(curDate.getDate() + 1);

        if(curDate.getDay() !== 1) {
            console.log(curDate + ' не понедельник, счетчик недель: ' + weeksCount);
            return getWeekNum(date, curDate);
        }
        else if(curDate.getDay() === 1) {
            weeksCount++;
            console.log(curDate + ' - понедельник, счетчик недель: ' + weeksCount)
            return getWeekNum(date, curDate)
        }
    }
    else {
        console.log('Число недель для вывода: ' + weeksCount);
        return weeksCount;
        //weeksCount = 1
    }

}

function writeMonth(date) {
    let month;
    switch (date.getMonth()) {
        case 0:
            month = 'Января';
            break;
        case 1:
            month = 'Февраля';
            break;
        case 2:
            month = 'Марта';
            break;
        case 3:
            month = 'Апреля';
            break;
        case 4:
            month = 'Мая';
            break;
        case 5:
            month = 'Июня';
            break;
        case 6:
            month = 'Июля';
            break;
        case 7:
            month = 'Августа';
            break;
        case 8:
            month = 'Сентября';
            break;
        case 9:
            month = 'Октября';
            break;
        case 10:
            month = 'Ноября';
            break;
        case 11:
            month = 'Декабря';
            break;
        default:
            month = 'Нет такого месяца'
            break;
    }
    return month;
}

function writeDay(date) {
    let day;
    switch (date.getDay()) {
        case 0:
            day = 'Воскресенье';
            break;
        case 1:
            day = 'Понедельник';
            break;
        case 2:
            day = 'Вторник';
            break;
        case 3:
            day = 'Среда';
            break;
        case 4:
            day = 'Четверг';
            break;
        case 5:
            day = 'Пятница';
            break;
        case 6:
            day = 'Суббота';
            break;
        default:
            day = 'нет такого дня недели';
            break;
    }
    return day;
}

chooseDate.addEventListener('input', () => {
    let date = new Date(chooseDate.value);
    getDayInfo(date);
    weeksCount = 1;
})

dateBtn.addEventListener('click', () => {
    let date = new Date();

    getDayInfo(date);
    weeksCount = 1;
})

