const form = document.forms[0]
const chooseDate = form.elements[0];
const dateBtn = form.elements[1];

function getDayInfo(date) {
    console.log('Введена дата: ' + date)
    let curDate = firstDayOfMonth(date);
    console.log('первый день месяца выбранной даты: ' + curDate);
    let finalWeeks = getWeekNum(date, curDate);
    console.log(finalWeeks)
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

chooseDate.addEventListener('input', () => {
    let date = new Date(chooseDate.value);
    weeksCount = 1;
    getDayInfo(date);
})

dateBtn.addEventListener('click', () => {
    let date = new Date();
    weeksCount = 1;
    getDayInfo(date);
})

