const apiKey = "5323001de33dcbaf30a7ad46bb967f8f";
const searchBtn = document.querySelector("#search-btn");
const weatherData = document.querySelector("#weather-data");
const themeToggleBtn = document.querySelector("#theme-toggle");

searchBtn.addEventListener("click", async () => {
    const cityName = document.querySelector("#city-name").value.trim();

    if (cityName === "") {
        weatherData.innerHTML = `<h3 style="color:red;text-align:center">Enter a City Name...</h3>`;
        return;
    }

    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);

        if (!res.ok) {
            weatherData.innerHTML = `<h3 style="color:red;text-align:center">City Not Found..</h3>`;
            return;
        }

        const data = await res.json();
        weatherData.innerHTML = `
         <h2 style="color:orange;">${data.name}, ${data.sys.country}</h2>
         <h3>Temperature: ${data.main.temp} C</h3>
         <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>
         <p><b>Humidity:</b> ${data.main.humidity}%</p>
         <p><b>Pressure:</b> ${data.main.pressure} hPa</p>`;
    } catch (error) {
        console.error(error, "Error in Fetching API");
        weatherData.innerHTML = `<h3 style="color:red;text-align:center">Unable to fetch weather details.</h3>`;
    }
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggleBtn.innerHTML = "Light Mode";
}

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggleBtn.innerHTML = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggleBtn.innerHTML = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});
