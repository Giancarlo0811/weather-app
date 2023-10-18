const apiKey = '8c426de565f180f09e8badb25dd5bbad';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&q=';
const inputCity = document.querySelector('#city-name');
const searchBtn = document.querySelector('.search-img');
const weatherIcon = document.querySelector('#weather-icon');
const weatherContainer = document.querySelector('.weather-container');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`,{mode: 'cors'});
    const data = await response.json();

    document.querySelector('.celsius').textContent = `${Math.round(data.main.temp)}°C`;
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.humidity-percentage').textContent = `${data.main.humidity}%`;
    document.querySelector('.speed').textContent = `${data.wind.speed} km/h`;
    weatherContainer.style.display = 'flex';

    if(data.weather[0].main == 'Clouds') {
        weatherIcon.src = './images/clouds.png';
    } 
    else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = './images/clear.png';
    } 
    else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = './images/rain.png';
    } 
    else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = './images/drizzle.png';
    } 
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = './images/mist.png';
    }
}



searchBtn.addEventListener('click', () => {
    if (inputCity.value == '') {
        alert('Debes introducir el nombre de una ciudad');
    } else {
        checkWeather(inputCity.value);
        inputCity.value = '';
    }
});