document.querySelector(".btn").addEventListener("click", function() {
  weather()
})

document.querySelector(".search-bar").addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    weather();
  }
})

function weather() {
  const cityName = document.querySelector(".search-bar").value
  const apiKey = "8bc891d4edf502d80f3ce51da8a8dad1"
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid="+ apiKey +"&units="+ unit
  weatherData(cityName, url)
}

function weatherData(_cityName, url) {
  fetch(url)
      .then((response) => {
              if (!response.ok) {
                alert("No weather found.");
                // throw new Error("No weather found.");
              }
                return response.json()
            })
      .then((data) => this.info(data))

}

function info(data) {
  const { name } = data
  const { icon, description } = data.weather[0]
  const { temp, humidity } = data.main
  const { speed } = data.wind

  document.querySelector(".city").innerText = "Weather in " + name
  document.querySelector(".search-bar").value = ""
  document.querySelector('.temp').innerText = temp + " °C"
  document.querySelector('.description').innerText = description
  document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%"
  document.querySelector('.wind').innerText = "Wind Speed: " + speed + " Km/h"
  document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "," + "landscape')";
  document.querySelector('.weather-icon').style.display = "none"
  document.querySelector('.weather').style.display = "block"
  
}
