//d246dd5ef140e3ec8bdd616e9a0a42ef   -> unique API Key

function getWeather(){   //get the weather related details
    const apiKey = 'd246dd5ef140e3ec8bdd616e9a0a42ef';
    const city = document.getElementById('city').value //check for id=city in html file and capture it

    if(!city){
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch (currentWeatherUrl)   //fetch current weather data
        .then(response => response.json()) //passing the response as a json
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather data:',error);
            alert('Error fetching current weather data. Please try again.');
        });

    fetch (forecastUrl) //fetch current forecast data
        .then(response => response.json()) //passing the response as a json
        .then(data => {
            displayHourlyForecast(data.list);
        })
        .catch(error => {
            console.error('Error fetching hourly forecast data:',error);
            alert('Error fetching hourly forecast data. Please try again.');
        });
}

// In JavaScript, the .then() method is used primarily with Promises to handle the result of asynchronous operations. 
//Promises are a modern way to manage asynchronous tasks, such as fetching data from a server, reading files, or waiting for a timeout. 
//The .then() method allows you to define what should happen when a Promise is fulfilled or resolved successfully.

function displayWeather(data){
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    //clear previous content
    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    if(data.cod === '404'){
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else{
        const cityName = data.name;
        const temperature = Math.round(data.main.temp-273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    
        const temperatureHTML =`
            <p>${temperature}°C</p>
        `;

        const weatherHtml = `
            <p>${cityName}</p>
            <p>${description}</p>
        `;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage(); //take the icon code from the API as per the current weather and show it
    }
}

function displayHourlyForecast(hourlyData){
    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    const next24Hours = hourlyData.slice(0,8);

    next24Hours.forEach(item => {   //slice the data for the next 24hrs into 3hr intervals
        const dateTime = new Date(item.dt*1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hour Weather Icon">
                <span>${temperature}°C</span>
            </div>
        `;
        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}

function showImage(){
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
}