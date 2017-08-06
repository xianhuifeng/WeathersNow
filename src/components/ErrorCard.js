import { Component } from 'react'

export class ErrorCard extends Component {

  	constructor(props) {
		  super(props)
    }
    
    render () {

      const { errorMessage } = this.props

      return (
        <div className="error-card">
          <p>{errorMessage}</p>
        </div>
      )
  }
}