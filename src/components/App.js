import { Component } from 'react'
import { SearchWeatherForm } from './SearchWeatherForm'
import { WeatherCard } from './WeatherCard'
import { ErrorCard } from './ErrorCard'
import { Header } from './Header'
import { PRE_URL, APPID } from '../constants'
import 'whatwg-fetch'

export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      city: "Shanghai",
      isLoading: false,
      hasError: false,
      errorMessage: ""
    }

    this.fetchWeather = this.fetchWeather.bind(this)
  }

  /**
   * handle fetching weather from http://openweathermap.org/ API
   * @param {String} city 
   */
  fetchWeather(city) {
    this.setState({ isLoading: true })

    const url = PRE_URL + city + APPID

    fetch(url)//Fetch weather and dispatch state
      .then((response) => {
        this.setState({ isLoading: false })

        if (!response.ok) {
          this.setState({ errorMessage: response.statusText })
          throw new Error(response.statusText)
        }

        return response
      })
      .then((response) => response.json())
      .then((weather) => this.setState({ weather: weather, city: city, hasError: false }))
      .catch(() => this.setState({ weather: null, hasError: true }))
  }

  componentDidMount() {
    this.fetchWeather(this.state.city);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <SearchWeatherForm city={this.state.city}
          isLoading={this.state.isLoading}
          onFetchWeather={this.fetchWeather} />
        {!this.state.hasError && this.state.weather ?
          <WeatherCard weather={this.state.weather}
            city={this.state.city} /> :
          <ErrorCard errorMessage={this.state.errorMessage} />
        }
      </div>
    )
  }
}