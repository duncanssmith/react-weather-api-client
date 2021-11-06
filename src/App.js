import React, { useState } from "react";
import Axios from "axios";

import "./App.css";

function App() {

  // const [count, setCount] = useState("")
  const [weather, setWeather] = useState("")
  const example = [1,2,3,4,5,6]

  const getWeather = () => {
    Axios.get(API_URL).then((response)=>{
      console.log(response);

      // clone the response
      // const data = [...example]
      // const items = example.slice()
      const items = [].concat(response.data) 

      // console.log("ITEMS: " + response.data)

      items.forEach(function(item){
          console.log('Duncan ' + item.city.name)
      })

      setWeather("City: " + response.data.city.name + ", " +  response.data.city.country + ", " +
          " Datetime: " + response.data.list[0].dt_txt  + " " +
          " Clouds: " + response.data.list[0].clouds.all + "%, " +
          " Desc: " + response.data.list[0].weather[0].description +
          " Temp: " + response.data.list[0].main.temp + " deg C " +
          " Temp min: " + response.data.list[0].main.temp_min + " deg C " +
          " Temp max: "  + response.data.list[0].main.temp_max + " deg C " +
          " Humidity: " + response.data.list[0].main.humidity + "% " +
          " Wind direction: " + response.data.list[0].wind.deg + " degrees " +
          " Wind speed: " + response.data.list[0].wind.speed + " " +
          " Count of data points: " + response.data.cnt)
      // setWeather(response.data.list)
      // setCount(response.data.cnt)
    });
  }
  console.log("DS DEBUG");
  return <div>
    Hello World <button onClick={getWeather}>Get weather right now</button>
    <br/>
    <hr/>
    {/* {count} */}
    {weather}
    <hr/>
    </div>;
}

export default App;
