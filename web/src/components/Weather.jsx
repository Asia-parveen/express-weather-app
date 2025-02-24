import React, { useEffect, useState } from "react";
import axios from "axios";
import { WiDaySunny, WiCloud, WiRain, WiSnow } from "react-icons/wi";

const Weather = () => {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        axios.get("https://express-weather-app-production.up.railway.app/api/weather")
            .then(response => setWeather(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container">
            <h2 className="text-2xl font-bold text-center mb-4">Weather App</h2>
            {weather.length > 0 ? (
                weather.map((item) => (
                    <div key={item.id} className="bg-blue-100 p-4 rounded-lg shadow-md mb-4">
                        <p className="text-lg font-semibold">City: {item.city}</p>
                        <p>Temperature: {item.temperature}°C</p>
                        <p>Condition: {item.condition} <WiDaySunny/></p>
                    </div>
                ))
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
}

export default Weather;





// import React, { useEffect, useState } from 'react'
// import axios from "axios"

// const Weather = () => {
//     const [weather, setWeather]= useState([])
//     useEffect(() => {
//         axios.get("http://localhost:3000/api/weather")
//         .then(Response => setWeather(Response.data))
//         .catch(error => console.log(error)) 
//     }, []) 

    
//   return (
//     <div>
//     <h2>Weather App</h2>
//     {weather.length > 0 ? (
//         weather.map((item) => (
//             <div key={item.id}>
//                 <p>City: {item.city}</p>
//                 <p>Temperature: {item.temperature}</p>
//                 <p>Condition: {item.condition}</p>
//                 <hr />
//             </div>
//         ))
//     ) : (
//         <p>Loading weather data...</p>
//     )}
// </div>
//   )
// }

// export default Weather