import { Component } from 'react'

export class WeatherCard extends Component {

  constructor(props) {
    super(props)
    this.MapWeatherIcon = this.MapWeatherIcon.bind(this)
    this.ConvertWeatherTemp = this.ConvertWeatherTemp.bind(this)
  }

  MapWeatherIcon(name) {
    return "http://openweathermap.org/img/w/" + name + ".png";
  }

  ConvertWeatherTemp(temp) {
    return (temp / 10).toFixed(1) + "℃";
  }

  render() {

    const { city, weather } = this.props

    return (
      <div className="weather-card-wrapper">
        <div className="weather-card">
          <p className="weather-card-title">Weather In {city}</p>
          <p className="weather-card-description">We found the current weather in {weather.name}, {weather.sys.country} for you: </p>
          <img src={this.MapWeatherIcon(weather.weather[0].icon)} width="100px" />
          <div className="weather-card-detail">
            <span className="weather-card-description">{weather.weather[0].description}</span>
            <span className="weather-card-description">{this.ConvertWeatherTemp(weather.main.temp)}</span>
          </div>
        </div>
      </div>
    )
  }
}