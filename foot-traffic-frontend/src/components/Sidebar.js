// Author: Nathan Sherman 4/10/2024
// Modified: Dawson De Mond 4/17/2024 
// Modified: Nathan Sherman 4/19/2024
// Modified: Dawson De Mond 5/8/2024
import Place from './place/place'
import Select from './select/select'
import Header from './header/header'
import { useState } from 'react';

function mapPlaces(places, handleFocus, sortOption, setMarkerCallBack) {
    let placeElements = [];
    for (var place of places) {
        if (place.hasOwnProperty("cached")) {
            placeElements.push(
                <Place
                    setMarker={setMarkerCallBack}
                    handleFocus={handleFocus}
                    key={place.id}
                    placeName={place.name}
                    placeAddress={place.address}
                    placeDescription={place.description}
                    placePercentage={place.cached.busyness.percentage}
                    placeLive={place.cached.busyness.live}
                    placeStatus={place.cached.busyness.status}
                    placeCoordinates={place.cached.coordinates}
                />
            )
        }
    }
    // Descending Percentage
    if(sortOption === "DP"){
        placeElements.sort((a, b)=>{
            return b.props.placePercentage - a.props.placePercentage;
        });
    }
    // Ascending Percentage
    else if(sortOption === "AP"){
        placeElements.sort((a, b)=>{
            return a.props.placePercentage - b.props.placePercentage;
        });
    }
    // Descending Alphabetical
    else if(sortOption === "DA"){
        placeElements.sort((a, b)=>{
            return b.props.placeName.localeCompare(a.props.placeName);
        });
    }
    // Ascending Alphabetical
    else if(sortOption === "AA"){
        placeElements.sort((a, b)=>{
            return a.props.placeName.localeCompare(b.props.placeName);
        });
    }
    // Sort Place Elements
    return placeElements;
}

export function Sidebar(props) {

    const [sortOption, setSortOption] = useState('DP');
    const places = mapPlaces(props.places, props.handleFocus, sortOption, props.setMarker);

    return (
        <div className="sidebar" style={{ width: props.width, height: props.height }}>
            <Header header="Drexel Foot Traffic" status={props.status} />
            <Select setSortOption={setSortOption}/>
            {places}
        </div>
    )
}

export default Sidebar;
