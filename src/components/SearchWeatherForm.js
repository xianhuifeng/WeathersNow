import { Component } from 'react'
import { Loader } from './Loader'

export class SearchWeatherForm extends Component {

  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  /**
   * handle form submit.
   * TODO: Form validation on Frontend. 
   */
  submit(e) {
    e.preventDefault()
    this.props.onFetchWeather(this.refs._city.value)
  }

  render() {

    const { city, isLoading, onFetchWeather } = this.props

    return (
      <div className="search-weather">
        <div className="feather-cover"></div>
        <form onSubmit={this.submit}>
          <input type="text" ref="_city"
            defaultValue={city} />
          <button>Search</button>
          <Loader isLoading={isLoading} />
        </form>
      </div>
    )
  }
}