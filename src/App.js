import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {

  const [weather, setWeather] = useState("")

  //  Axios.get("https://api.openweathermap.org/data/2.5/weather?q=London&mode=json&units=metric&appid=786986c790691a6fe26c60fcd9fae106").then((response)=>{

  const getWeather = () => {
    Axios.get("https://api.openweathermap.org/data/2.5/forecast?q=London&mode=json&units=metric&appid=786986c790691a6fe26c60fcd9fae106").then((response)=>{

      // console.log(response);
      // console.log(response.data.list);

      const items = [].concat(response.data.list) 
      const results = []
      const loc = response.data.city.name + " " + response.data.city.country

      items.forEach(function(item){
          // console.log('At ' + item.dt_txt)
          // console.log('Clouds ' + item.clouds.all)
          // console.log('Temp ' + item.main.temp)
          // console.log('Wind ' + item.wind.speed)
          const result = []
          // result.push('{"At": "' + '"' + item.dt_txt + '"')
          // result.push('"Clouds": ' + '"' + item.clouds.all + '"')
          // result.push('"Temp": ' + '"' + item.main.temp + '"')
          // result.push('"Wind": ' + '"' + item.wind.speed + '"}')
          result.push('At: ' + item.dt_txt )
          result.push('Clouds: ' +  item.clouds.all )
          result.push('Temp: ' + item.main.temp )
          result.push('Wind: ' + item.wind.speed )
          results.push(result)
      })

      // console.log(loc)
      console.log(results)

      // console.log(results.map((item) => <li>{item}</li>))

      // const mappedResults = results.map((item) => <li>{item}</li>)
      let weatherString = ''

      results.forEach(function(dataPoint){
        weatherString = weatherString + '<td>' + dataPoint[0] + '</td><td>' + dataPoint[1] + '</td><td>' + dataPoint[2] + '</td>'
      })

      // console.log(mappedResults)

      setWeather(loc + " " + results)

    });
  }

  return <div>
    <button onClick={getWeather}>Get weather</button>
    <hr/>
    { weather }

        <hr/>
    </div>;
}

export default App;