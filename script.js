const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3dfe11c41cmshfb407f9eb885bc2p1feb0ajsn664e82cb6e6c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=> {
 cityName.innerHTML = city
	 
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
	
		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
	    wind_speed2.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
   getWeather(city.value)
})

getWeather("Delhi");

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata' , options)
.then(response => response.json())
.then((response) => {
	console.log(response)

	kol_cloud_pct.innerHTML = response.cloud_pct
	kol_feels_like.innerHTML = response.feels_like
	kol_humidity.innerHTML = response.humidity
	kol_humidity.innerHTML = response.humidity
	kol_max_temp.innerHTML = response.max_temp
	kol_min_temp.innerHTML = response.min_temp
	kol_sunrise.innerHTML = response.sunrise
	kol_sunset.innerHTML = response.sunset
	kol_temp.innerHTML = response.temp
	kol_wind_degrees.innerHTML = response.wind_degrees
	kol_wind_speed.innerHTML = response.wind_speed
	kol_wind_speed.innerHTML = response.wind_speed
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow' , options)
.then(response => response.json())
.then((response) => {
	console.log(response)

	lko_cloud_pct.innerHTML = response.cloud_pct
	lko_feels_like.innerHTML = response.feels_like
	lko_humidity.innerHTML = response.humidmum
	lko_humidity.innerHTML = response.humidity
	lko_max_temp.innerHTML = response.max_temp
	lko_min_temp.innerHTML = response.min_temp
	lko_sunrise.innerHTML = response.sunrise
	lko_sunset.innerHTML = response.sunset
	lko_temp.innerHTML = response.temp
	lko_wind_degrees.innerHTML = response.wind_degrees
	lko_wind_speed.innerHTML = response.wind_speed
	lko_wind_speed.innerHTML = response.wind_speed
})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai' , options)
.then(response => response.json())
.then((response) => {
	console.log(response)

	mum_cloud_pct.innerHTML = response.cloud_pct
	mum_feels_like.innerHTML = response.feels_like
	mum_humidity.innerHTML = response.humidity
	mum_humidity.innerHTML = response.humidity
	mum_max_temp.innerHTML = response.max_temp
	mum_min_temp.innerHTML = response.min_temp
	mum_sunrise.innerHTML = response.sunrise
	mum_sunset.innerHTML = response.sunset
	mum_temp.innerHTML = response.temp
	mum_wind_degrees.innerHTML = response.wind_degrees
	mum_wind_speed.innerHTML = response.wind_speed
	mum_wind_speed.innerHTML = response.wind_speed
})
.catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore' , options)
.then(response => response.json())
.then((response) => {
	console.log(response)

	Ban_cloud_pct.innerHTML = response.cloud_pct
	Ban_feels_like.innerHTML = response.feels_like
	Ban_humidity.innerHTML = response.humidity
	Ban_humidity.innerHTML = response.humidity
	Ban_max_temp.innerHTML = response.max_temp
	Ban_min_temp.innerHTML = response.min_temp
	Ban_sunrise.innerHTML = response.sunrise
	Ban_sunset.innerHTML = response.sunset
	Ban_temp.innerHTML = response.temp
	Ban_wind_degrees.innerHTML = response.wind_degrees
	Ban_wind_speed.innerHTML = response.wind_speed
	Ban_wind_speed.innerHTML = response.wind_speed
})
.catch(err => console.error(err));