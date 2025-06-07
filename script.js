const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dayClasses = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];


document.querySelectorAll('.week div').forEach((element, i) => {
    element.textContent = dayNames[i];
    dayClasses.forEach(cls => element.classList.remove(cls));
    element.classList.add(dayClasses[i]);
});


let todayLabel = document.querySelector('.digital-clock .today-label');
if (!todayLabel) {
    todayLabel = document.createElement('div');
    todayLabel.className = 'today-label';
    document.querySelector('.digital-clock').appendChild(todayLabel);
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = now.getDay();


    const date = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();


    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;


    let dateElem = document.querySelector('.date');
    if (!dateElem) {
        dateElem = document.createElement('div');
        dateElem.className = 'date';
        const weekElem = document.querySelector('.week');
        weekElem.parentNode.insertBefore(dateElem, weekElem.nextSibling);
    }
    dateElem.textContent = `Date: ${date}/${month}/${year}`;


    document.querySelectorAll('.week div').forEach((element, i) => {
        element.classList.toggle('active', i === day);
    });


    todayLabel.textContent = ` ${dayNames[day]}`;
}


updateClock();
setInterval(updateClock, 1000);
