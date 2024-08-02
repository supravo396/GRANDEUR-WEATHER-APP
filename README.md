GRANDEUR WEATHER APP

The Grandeur Weather App is a simple web application that provides current weather information and hourly forecasts for any city in the world. 
This application fetches data from the OpenWeatherMap API and displays it in an easy-to-read format, making it convenient for users to get weather updates quickly.

Features:
1. Current Weather Information: Displays the current temperature, weather description, and weather icon for the entered city.
2. Hourly Forecast: Provides a forecast for the next 24 hours, updated every 3 hours, with temperature and weather icons.
3. Responsive Design: The app is designed to work on various devices and screen sizes, ensuring a consistent user experience.

Technologies Used:
1. HTML: The structure of the application.
2. CSS: Styling the user interface.
3. JavaScript: Fetching data from the API and updating the UI dynamically.
4. OpenWeatherMap API: Provides weather data.

To run the app locally, follow these steps:
1. Clone the Repository:     git clone https://github.com/yourusername/weather-app.git
                             cd weather-app
2. Open the index.html File: Open the index.html file in your preferred web browser.
3. Enter a City Name:  In the input box, enter the name of the city you wish to get weather information for, and click the "SEARCH" button.

How It Works:
User Input: The user enters a city name in the input box and clicks the "SEARCH" button.

Fetching Data:

The app sends a request to the OpenWeatherMap API to get current weather and hourly forecast data for the entered city.
The API returns data in JSON format.
Displaying Data:

The app processes the JSON data and updates the UI with the current temperature, weather description, and weather icons.
The hourly forecast section displays the temperature and weather icons for each 3-hour interval over the next 24 hours.
Error Handling:

If the city is not found or there is an issue with the API, an error message is displayed to the user.
