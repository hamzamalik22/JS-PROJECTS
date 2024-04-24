let input = document.querySelector('#input');
let btn = document.querySelector('#search');
let img = document.querySelector('#img');
let temperature = document.querySelector('#temperature');
let city = document.querySelector('#city');
let humidity = document.querySelector('#humidity');
let wind_speed = document.querySelector('#wind_speed');

api_key = '939325bdae1a160f6ecfca04abcfe0a9';

request = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api_key}`;

console.log(request);



fetch(request)
.then(raw => raw.json())
.then(result => {

})


