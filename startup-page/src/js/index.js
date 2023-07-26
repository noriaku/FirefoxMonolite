// @noriaku | Kalos Lazo

//===: get username :===
async function handle_get_username() {
    const response = await fetch('src/database/profile.json');
    const data = await response.json();
    const username = data.username;

    const user_name_elements = document.getElementsByClassName("username");
    for (let i = 0; i < user_name_elements.length; i++) {
        user_name_elements[i].textContent = username;
    }
}

//===: current date implementation :===
function handle_current_date() {
    const current_date_element = document.getElementById('current_date');
    const now = new Date();
    const month = now.toLocaleString('default', { month: 'short' });
    const day = now.getDate();

    current_date_element.textContent = `${month} ${day}`;
}

//===: get weather implementation :===
async function handle_current_weather() {
    const current_weather_element = document.getElementById('current_weather');
    // const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY&units=metric&appid=YOUR_API_KEY');
    const data = await response.json();
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;

    current_weather_element.textContent = `${temperature}°C | ${description}`;
};

//===: current time implementation :===
function handle_current_time() {
    const current_time_element = document.getElementById('current_time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    current_time_element.textContent = `${hours}:${minutes}`;
};

handle_current_time();
handle_current_date();
// handle_current_weather();
handle_get_username();

setInterval(handle_current_time, 60000);
