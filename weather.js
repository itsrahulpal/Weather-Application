let apiKey="5323001de33dcbaf30a7ad46bb967f8f"
let searchBtn = document.querySelector("#search-btn");
let weatherData = document.querySelector("#weather-data");

searchBtn.addEventListener("click",async()=>{
    let cityName= document.querySelector("#city-name").value.trim();
    if(cityName===""){
        weatherData.innerHTML=`<h3 style="color:red;text-align:center">Enter a City Name...</h3>`
        return;
    }
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
        console.log(res);
         if(!res.ok){
            weatherData.innerHTML = `<h3 style="color:red;text-align:center">City Not Found..</h3>`;
            return;
         }
         let data = await res.json();
         console.log(data);
         weatherData.innerHTML =`
         <h2 style="color:orange;">${data.name},${data.sys.country}</h2>
         <h3>Temperature: ${data.main.temp} °C </h3>
         <p> <b>Wind Speed :</b>${data.wind.speed} m/s</p>
         <p><b>Humidity :</b>${data.main.humidity} g/m<sup>3</sup></p>
         <p><b>Pressure :</b>${data.main.pressure} Pa</p>`;
         
    }
    catch(error){
console.log(error,"Error in Fetching API");

    }
});