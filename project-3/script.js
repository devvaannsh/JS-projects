const log = console.log;

const clock = document.querySelector("#clock");
const time = document.querySelector("#time");
const date = document.querySelector("#date");

function displayTime() {
    const now = new Date();
    
    const currHour = now.getHours() < 13 ? String(now.getHours()).padStart(2, 0) : String(now.getHours()-12).padStart(2, 0); // to fetch hours in 12-hour format   
    const currMinute = String(now.getMinutes()).padStart(2, 0);
    const currSecond = String(now.getSeconds()).padStart(2, 0);
    const currMeridiem = now.getHours() < 13 ? 'AM' : 'PM'; // AM/PM
    const currDate = String(now.getDate()).padStart(2, 0);
    const currMonth = String(now.getMonth() + 1).padStart(2, 0); // as january is 0;
    const currYear = String(now.getFullYear()); // padStart not required as always 4 characters

    time.textContent = `${currHour} : ${currMinute} : ${currSecond} ${currMeridiem}`;
    date.textContent = `${currDate} / ${currMonth} / ${currYear}`;
}

setInterval(displayTime, 1000);

