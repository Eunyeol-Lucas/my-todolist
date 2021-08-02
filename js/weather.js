const API_KEY = "Input Your API";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather p:first-child");
            const city = document.querySelector("#weather p:last-child");
            city.innerText = `🌏: ${data.name}`;
            const temp = Math.round(data.main.temp * 10) /10
            const Temp = temp => {
                if (temp>30) {
                    return "☀️"
                } else if (temp>10) {
                    return "⛅️"
                } else {
                    return "☃️"
                }
            }

            weather.innerText = `🌈: ${data.weather[0].main} ${Temp(temp)}: ${temp}℃`;
        });
}
function onGeoError() {
    alert("Can't find yo. Noe weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
