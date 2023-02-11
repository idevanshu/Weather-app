const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'yourapikey',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    cityName.innerHTML = city.charAt(0).toUpperCase() + city.slice(1);
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            // console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            wind_speed2.innerHTML = response.wind_speed
            humidity2.innerHTML = response.humidity
        })
        .catch(err => console.error(err));
        console.clear()
    }
    
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        getWeather(city.value)
    })
    
    getWeather("Delhi")
    console.clear()