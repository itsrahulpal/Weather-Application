let apiKey="5323001de33dcbaf30a7ad46bb967f8f"
let searchBtn = document.querySelector("#search-btn");
let weatherData = document.querySelector("#weather-data");

searchBtn.addEventListener("click",()=>{
    let cityName= document.querySelector("#city-name").value.trim();
    if(cityName===""){
        weatherData.innerHTML=`<h3 style="color:red;text-align:center">Enter a City Name...</h3>`
    }
    try{

    }
    catch(error){
console.log(error,"Error in Fetching API");

    }
});