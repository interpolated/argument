import React, { Component } from 'react'
import MapComponent from './map/map_component'
import SplashText from './splashtext/splashtext_component'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <MapComponent />
        <SplashText />
      </div>
    )
  }
}

export default App
