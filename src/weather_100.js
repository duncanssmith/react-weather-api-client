import React from "react";
import Axios from "axios";

import "App.css";

function App() {
    const getWeather = () => {
        Axios.get("https://api.openweathermap.org/data/2.5/forecast?q=London&mode=json&units=metric&appid=786986c790691a6fe26c60fcd9fae106").then((response)=>{
            console.log(response);
        });
    }
    return <div>Hello Duncan <button>Get weather right now</button></div>;
}

export default App;