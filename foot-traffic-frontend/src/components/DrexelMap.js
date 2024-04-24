// Modified: Dawson De Mond 4/24/2024
import React from 'react';
import { Map, GeoJson, GeoJsonFeature } from "pigeon-maps"
import { maptiler } from 'pigeon-maps/providers'
import interpolateRGB from '../utils/interpolation';
const maptilerProvider = maptiler('we4hc2pgxyp5biKojrCC', 'streets-v2')


function MapFeatures(places) {
  let featureElements = [];
  for (var place of places) {
    if (place.hasOwnProperty("cached")) {
      if(place.cached.coordinates.length != 2) continue;
      let interpolatedRGB = interpolateRGB({r:0,g:255,b:75}, {r:255,g:0,b:0}, place.cached.busyness.percentage);
      featureElements.push(
        <GeoJsonFeature 
          svgAttributes={{
            fill: interpolatedRGB,
            r: "20",
          }}
          key={place.id} 
          feature={{
          type: "Feature",
          geometry: { type: "Point", coordinates: [parseFloat(place.cached.coordinates[1]), parseFloat(place.cached.coordinates[0])] },
          properties: { id: place.id },
        }} />
      )
    }
  }
  return featureElements;
}

export function DrexelMap(props) {
  const features = MapFeatures(props.places);

  return (
    <Map
      height={props.height}
      width={props.width}
      defaultCenter={[39.9566, -75.1899]}
      defaultZoom={17}
      maxZoom={20}
      minZoom={16}
      provider={maptilerProvider}
      dprs={[1, 2]}>
      <GeoJson >
        {features}
      </GeoJson>
    </Map>
  )
}

export default DrexelMap;
