import { Component } from 'react'
import 'whatwg-fetch'

export class SearchWeatherForm extends Component {

  constructor(props) {
    super(props)
		this.submit = this.submit.bind(this)
	}

  submit(e) {
      e.preventDefault()
      this.props.onFetchWeather(this.refs._city.value)
  }
    

  render () {

    const { city, isLoading, hasError, errorMessage, onFetchWeather } = this.props

    return (
        <form onSubmit={this.submit}>
          <input type="text" ref="_city"
					   defaultValue={city}/>

          <button>Search</button>
          <p>{hasError ? errorMessage : ""}</p>
        </form>
      )
  }
}