import React from 'react';
import fetchAPI from '../fetchAPI';
import { Map, GeoJson, GeoJsonFeature } from "pigeon-maps"
import { maptiler } from 'pigeon-maps/providers'
const maptilerProvider = maptiler('we4hc2pgxyp5biKojrCC', 'streets-v2')

async function getPoints(){
  let placesJSON = await fetchAPI();

  let points =[];
  
  placesJSON.forEach(element => {
    if(!element.hasOwnProperty("cached")){
      return
    }
    const {cached:{coordinates}} = element;
    
    let coords = [coordinates[1], coordinates[0]];

    const geoJsonFeatureSample = {
      type: "Feature",
      geometry: { type: "Point", coordinates: {coords} },
      properties: { prop0: "value0" },
    };

    points.push(
     <GeoJsonFeature feature={geoJsonFeatureSample}/>
    )
    return points
  });
}



const geoJsonFeatureSample = {
    type: "Feature",
    geometry: { type: "Point", coordinates: [-75.190623, 39.956274] },
    properties: { prop0: "value0" },
};

export function DrexelMap(props) {
    return (
        <Map
            height={props.height}
            width={props.width}
            defaultCenter={[39.9566, -75.1899]}
            defaultZoom={17}
            maxZoom={20}
            minZoom={16}
        provider={maptilerProvider}
        dprs={[1, 2]}
        >
            <GeoJson
      svgAttributes={{
        fill: "#d6362b80",
        r: "20",
      }}
    >           
            <GeoJsonFeature feature={geoJsonFeatureSample}/>
            </GeoJson>
        </Map>
    )
}

export default DrexelMap;
