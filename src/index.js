import React from 'react'
import { render } from 'react-dom'
import './stylesheets/index.scss'
import './stylesheets/ui.scss'
import { App } from './components/App'
window.React = React

render(
	<App />,
	document.getElementById('react-container')
)