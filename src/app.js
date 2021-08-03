//Feature #1
let now=new Date();
let hours=now.getHours();
let minutes=now.getMinutes();
let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day=days[now.getDay()];
let h1=document.querySelector ("li");
h1.innerHTML=`${day}, ${hours}:${minutes}`;

//Feature #2
function showLocation(event) {
  event.preventDefault();
  let apiKey = "0bca7a6e963a4888aee2f2257270c526";
let city = document.querySelector("#location-input").value;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let passwordForm = document.querySelector("#location-submit");
passwordForm.addEventListener("submit", showLocation);

//Real Time Temperature//
function showTemperature(response) {
  console.log(response);
  let city = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#real-feel").innerHTML = Math.round(response.data.main.feels_like) + " ºC";
  document.querySelector("#weather").innerHTML = response.data.weather[0].description;
  document.querySelector("#wind").innerHTML = response.data.wind.speed + " km/h";
  document.querySelector("#max-temperature").innerHTML = Math.round(response.data.main.temp_max) + " ºc";
  document.querySelector("#min-temperature").innerHTML = Math.round(response.data.main.temp_min) + " ºC";
  document.querySelector("#humidity").innerHTML = response.data.main.humidity + " %";
  document.querySelector("h1").innerHTML= city;
}


//Bonus Point
function showWeather(response) {
let currentTemperature = document.querySelector("#temperature");
currentTemperature.innerHTML = Math.round(response.data.main.temp);
}
function currentPosition(position) {
let apiKey = "0bca7a6e963a4888aee2f2257270c526";
let lat = position.coords.latitude;
let lon = position.coords.longitude;
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
axios.get(url).then(showWeather);
}
navigator.geolocation.getCurrentPosition(currentPosition);






