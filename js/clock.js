const day = document.getElementById("day");
const clock = document.getElementById("clock");

function getClock() {
    const date = new Date();
    
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1).padStart(2,"0");
    const days = String(date.getDate()).padStart(2,"0");
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    day.innerText = `${year}. ${month}. ${days}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
} 

getClock();
setInterval(getClock, 1000);
