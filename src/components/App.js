import { Component } from 'react'
import { SearchWeatherForm } from './SearchWeatherForm'
import { ShowWeather } from './ShowWeather'

export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      city: "London, UK",
      isLoading: false,
      hasError: false,
      errorMessage: ""
    }

    this.fetchWeather = this.fetchWeather.bind(this)
  }

  fetchWeather(city) {
    this.setState({ isLoading: true })

    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3445f33ffd943bca0c24fa0e485ff489"

    //Fetch weather, dispatch state
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          this.setState({ errorMessage: response.statusText })
          throw new Error(response.statusText)
        }

        this.setState({ isLoading: false,hasError: false})

        return response
      })
      .then((response) => response.json())
      .then((weather) => this.setState({ weather}))
      .catch(() => this.setState({hasError: true}))
  }

  render() {
		return (
			<div className="app">
        <SearchWeatherForm  city={this.state.city}
                            isLoading={this.state.isLoading}
                            hasError={this.state.hasError}
                            errorMessage={this.state.errorMessage}
                            onFetchWeather={this.fetchWeather}/>	
        <ShowWeather />	
			</div>
		)
	}
}