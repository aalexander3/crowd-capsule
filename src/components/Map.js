import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"
import { scaleLinear } from "d3-scale"
import { CoolMap } from '../static/world-50m.js'

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

class Map extends Component {

  state={
    cities: [],
    highestCount: 0
  }

  componentDidMount() {
    fetch("http://localhost:3000/locations")
    .then(resp=> resp.json())
    .then(data => this.setState(data))
  }

  cityScale = scaleLinear().domain([0,this.state.highestCount+1]).range([1,4])

  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{ scale: 205 }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies geography={CoolMap}>
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  geography.id !== "ATA" && (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: "#669AA5",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: "#4A7F89",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#669AA5",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
              ))}
            </Geographies>
            <Markers>
              {
                this.state.cities.map((city, i) => (
                  <Marker key={i} marker={city}>
                    <circle onMouseEnter={() => this.props.hover(city)} onMouseLeave={this.props.leave}
                      cx={0}
                      cy={0}
                      r={this.cityScale(city.count)}
                      fill="rgba(	144, 178, 123 ,0.8)"
                      stroke="#90B27B"
                      strokeWidth="2"
                    />
                  </Marker>
                ))
              }
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }

}

export default Map;
