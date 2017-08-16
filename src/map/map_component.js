import React, { Component } from 'react'
import ReactMap, {Layer, Source} from 'react-mapbox-gl'
import MapboxDraw from '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

const accessToken = 'pk.eyJ1IjoiZ2FydGhkYmVldGxlIiwiYSI6ImNpcHl5emhrdjB5YmxoY25yczF6MHhhc2IifQ.2Ld30uLqcffVv-RUAWk_qQ'
const style = 'mapbox://styles/garthdbeetle/cj67in7a10iwe2smqs1pw6pid'

const Map = ReactMap({
  accessToken
})

const mapStyle = {
  height: '100vh',
  width: '100vw'
}

const _onCLick = (m, e) => {
  console.log(e.lngLat)
}



class MapComponent extends Component {

  componentWillMount(){
    console.log(MapboxDraw);
    this.setState({
      center :[155.4245403625426,-10.11582550013361]
    })
    this.setState({selectedId:''})
  }
  
  _onStyleLoad = (map, event) => {
    const draw = new MapboxDraw()
    map.addControl(draw)
    this.setState({draw:draw})
  }

  render () {
    return (
      <Map
        // onStyleLoad={this._onStyleLoad}
        onClick={_onCLick}
        center={[149.07714244251417, -26.837047688755582]}
        pitch={55}
        zoom={[4]}
        bearing={320}
        dragRotate={false}
        style={style}
        containerStyle={mapStyle}
      />
    )
  }
}

export default MapComponent
