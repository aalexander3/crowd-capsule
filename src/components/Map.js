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

const cityScale = scaleLinear()
  .domain([0,37843])
  .range([1,25])

class Map extends Component {

  state={
    cities: [
      { "name": "Tokyo", "coordinates": [139.6917,35.6895], "population": 37843 },
      { "name": "Jakarta", "coordinates": [106.8650,-6.1751], "population": 30539 },
      { "name": "Delhi", "coordinates": [77.1025,28.7041], "population": 24998 },
      { "name": "Manila", "coordinates": [120.9842,14.5995], "population": 24123 },
      { "name": "Seoul", "coordinates": [126.9780,37.5665], "population": 23480 },
      { "name": "Shanghai", "coordinates": [121.4737,31.2304], "population": 23416 },
      { "name": "Karachi", "coordinates": [67.0099,24.8615], "population": 22123 },
      { "name": "Beijing", "coordinates": [116.4074,39.9042], "population": 21009 },
      { "name": "New York", "coordinates": [-74.0059,40.7128], "population": 20630 },
      { "name": "Guangzhou", "coordinates": [113.2644,23.1291], "population": 20597 },
      { "name": "Sao Paulo", "coordinates": [-46.6333,-23.5505], "population": 20365 },
      { "name": "Mexico City", "coordinates": [-99.1332,19.4326], "population": 20063 },
      { "name": "Mumbai", "coordinates": [72.8777,19.0760], "population": 17712 },
      { "name": "Osaka", "coordinates": [135.5022,34.6937], "population": 17444 },
      { "name": "Moscow", "coordinates": [37.6173,55.7558], "population": 16170 },
      { "name": "Dhaka", "coordinates": [90.4125,23.8103], "population": 15669 },
      { "name": "Greater Cairo", "coordinates": [31.2357,30.0444], "population": 15600 },
      { "name": "Los Angeles", "coordinates": [-118.2437,34.0522], "population": 15058 },
      { "name": "Bangkok", "coordinates": [100.5018,13.7563], "population": 14998 },
      { "name": "Kolkata", "coordinates": [88.3639,22.5726], "population": 14667 },
      { "name": "Buenos Aires", "coordinates": [-58.3816,-34.6037], "population": 14122 },
      { "name": "Tehran", "coordinates": [51.3890,35.6892], "population": 13532 },
      { "name": "Istanbul", "coordinates": [28.9784,41.0082], "population": 13287 },
      { "name": "Lagos", "coordinates": [3.3792,6.5244], "population": 13123 },
      { "name": "Shenzhen", "coordinates": [114.0579,22.5431], "population": 12084 },
      { "name": "Rio de Janeiro", "coordinates": [-43.1729,-22.9068], "population": 11727 },
      { "name": "Kinshasa", "coordinates": [15.2663,-4.4419], "population": 11587 },
      { "name": "Tianjin", "coordinates": [117.3616,39.3434], "population": 10920 },
      { "name": "Paris", "coordinates": [2.3522,48.8566], "population": 10858 },
      { "name": "Lima", "coordinates": [-77.0428,-12.0464], "population": 10750 }
    ]
  }
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
                    <circle
                      cx={0}
                      cy={0}
                      r={cityScale(city.population)}
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
