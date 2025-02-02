import { useState, useEffect } from 'react';
import useWindowDimensions from "../utils/windowDimensions";
import DrexelMap from '../components/DrexelMap';
import Sidebar from "../components/Sidebar";
import API from '../api/api';

export function Map() {
    const [focus, setFocus] = useState([]);
    const [status, setStatus] = useState({});
    const [places, setPlaces] = useState([]);
    const [markerCoords, setMarker] = useState([39.9566, -75.1899]);
    const { height, width } = useWindowDimensions();

    const handleFocus = (coords) => {
        setFocus(coords)
    }

    // Fetch places from API and set the state
    const getPlaces = async () => {
        let status = await API.status();
        if (!status.success) {
            setTimeout(getPlaces, 10000);
            return
        }
        setStatus(status.response);

        if (status.response.updating) {
            setTimeout(getPlaces, 10000);
            return
        }
        
        let places = await API.places();
        if (!places.success) {
            setTimeout(getPlaces, 10000);
            return
        }

        setPlaces(places.response)
        setTimeout(getPlaces, 15 * 60 * 1000);
    }

    // Only grab from API on first render
    useEffect(() => {
        getPlaces()
    }, [])

    return (
        <div className="wrapper">
            <DrexelMap markerCoords={markerCoords} focus={focus} height={height} width={width * 3 / 4} places={places}/>
            <Sidebar setMarker={setMarker} handleFocus={handleFocus} height={height} width={width * 1 / 4} places={places} status={status}/>
        </div>
    )
}

export default Map;
