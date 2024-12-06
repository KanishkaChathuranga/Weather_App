const apiKey = "7f2f0b24bee2431d8cc52758240312";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherResult = document.getElementById("weatherResult");

  if (!city) {
    weatherResult.innerHTML = "<div class='alert alert-warning'>Please enter a city name!</div>";
    return;
  }

  fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error fetching weather data.");
      }
      return response.json();
    })
    .then(data => {
      weatherResult.innerHTML = `
        <div class="mt-4">
          <img src="https:${data.current.condition.icon}" alt="Weather Icon" class="weather-icon mb-3">
          <h2>${data.location.name}, ${data.location.country}</h2>
          <h3>${data.current.temp_c}°C - ${data.current.condition.text}</h3>
          <p>Humidity: ${data.current.humidity}%</p>
          <p>Wind: ${data.current.wind_kph} kph</p>
        </div>
      `;
    })
    .catch(error => {
      weatherResult.innerHTML = "<div class='alert alert-danger'>Error fetching weather data.</div>";
    });
}
