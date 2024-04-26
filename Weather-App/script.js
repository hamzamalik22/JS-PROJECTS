let input = document.querySelector('#input');
let btn = document.querySelector('#search');
let img = document.querySelector('#img');
let temperature = document.querySelector('#temperature');
let humidity = document.querySelector('#humidity');
let wind_speed = document.querySelector('#wind_speed');
let mylocation = document.querySelector('#myCity');

let api_key = '939325bdae1a160f6ecfca04abcfe0a9';



async function getWeather(city){
    await console.log('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}');
    const fetched = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
    
    if (!fetched.ok) {
        alert('Enter Correct City name');
    }
    
    let data = await fetched.json();

    console.log(data);

    if(city.toLowerCase() === data.name.toLowerCase()){
        if (data.weather[0].main == 'Clear'){
            img.src = './images/clear.png';
        }
        else if(data.weather[0].main == 'Clouds'){
            img.src = './images/clouds.png';
        }
        else if(data.weather[0].main == 'Rain'){
            img.src = './images/rain.png';
        }
        else if(data.weather[0].main == 'Drizzle'){
            img.src = './images/drizzle.png';
        }
        else if(data.weather[0].main == 'Mist'){
            img.src = './images/mist.png';
        }
        else if(data.weather[0].main == 'Snow'){
            img.src = './images/snow.png';
        }
        else if(data.weather[0].main == 'Wind'){
            img.src = './images/wind.png';
        }
        
        mylocation.textContent = data.name;
    
        temperature.textContent = Math.round((data.main.temp - 273));
        
        humidity.textContent = data.main.humidity;
    
        wind_speed.textContent = data.wind.speed;
    }

}

btn.addEventListener('click',()=>{
    if(input.value != ''){
        getWeather(input.value);
        input.value = '';
    }
})

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        getWeather(input.value);
        input.value = '';
    }
});
