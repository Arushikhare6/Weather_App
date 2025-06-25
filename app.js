const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(`${config.baseUrl}${city}&appid=${config.apiKey}`);
  const data = await response.json();

  if (data.cod === "404") {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    return;
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".weather").style.animation = "fadeInWeather 0.7s ease forwards";
 

  // Update weather icon
  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "images/clouds.png"; break;
    case "Clear":
      weatherIcon.src = "images/clear.png"; break;
    case "Rain":
      weatherIcon.src = "images/rain.png"; break;
    case "Drizzle":
      weatherIcon.src = "images/drizzle.png"; break;
    case "Mist":
      weatherIcon.src = "images/mist.png"; break;
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

