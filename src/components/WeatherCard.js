import { Component } from 'react'
// import SnowFlake from 'react-icons/lib/ti/weather-snow'

export class WeatherCard extends Component {

  	constructor(props) {
      super(props)
        this.MapWeatherIcon = this.MapWeatherIcon.bind(this)
        this.ConvertWeatherTemp = this.ConvertWeatherTemp.bind(this)
    }

    MapWeatherIcon(name) {
      return "http://openweathermap.org/img/w/"+ name + ".png";
    }

    ConvertWeatherTemp(temp) {
      return (temp / 10).toFixed(1) + "℃";
    }
    
    render () {

      const { city, weather } = this.props

      return (
        <div className="weather-card">
          <p>Weather In {city}</p>
          <p>We found the current weather in {weather.name}, {weather.sys.country} for you: </p>
          <img src={this.MapWeatherIcon(weather.weather[0].icon)} />
          <p>{weather.weather[0].description}</p>
          <p>{this.ConvertWeatherTemp(weather.main.temp)}</p>
        </div>
      )
  }
}