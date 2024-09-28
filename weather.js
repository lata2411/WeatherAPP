let input = document.querySelector("input");
let search = document.querySelector("button");
let city = document.querySelector("h2");
let temp = document.querySelectorAll("h3")[0];
let climate = document.querySelectorAll("h3")[1];
let output = document.querySelector("#output");
// let api = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`; // use Backtice
// let apiKey = `5863f3acb164b45f2435b1cbceae7dca`;
console.log(input,search,city,temp,climate); 
console.log(input.value);

search.addEventListener("click" ,async ()=>{
    // console.log(input.value);
    try{

    
    let apiKey = `5863f3acb164b45f2435b1cbceae7dca`;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`; // use Backtice
    let dataFromInternet = await fetch(api);
    
    let weatherData = await dataFromInternet.json();
    city.innerHTML = `city name: ${weatherData.name}`;
    temp.innerHTML = `temp: ${Math.floor(weatherData.main.temp-273)}`;
    climate.innerHTML = `climate: ${weatherData.weather[0].main}`;
    console.log(weatherData);
    }
    catch(e){
       console.log(e);
       output.innerHTML = "invalid city name";
    }
})