Example:
```javascript
async function getWeather(city) {
  const apiKey = "YOUR_API_KEY"; // Replace with a real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    console.log(`🌤️ Weather in ${data.name}: ${data.main.temp}°C`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getWeather("New York");

```

🔹 This fetches weather details for a city using **OpenWeatherMap API**.  
🔹 Replace `"YOUR_API_KEY"` with a valid API key.

## **Summary**

✅ **API Basics:** APIs let your app **fetch/send data**.  
✅ **Using `fetch()`:** Makes HTTP requests to APIs.  
✅ **Async/Await:** Simplifies handling responses.  
✅ **Handling Errors:** Always check `response.ok`.