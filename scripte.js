document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'de5bffeda2cc7512ea3d562a3c9283b2'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
                document.getElementById('description').textContent = data.weather[0].description;
                document.getElementById('temperature').textContent = `${data.main.temp} °C`;
            } else {
                alert('City not found!');
            }
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});
