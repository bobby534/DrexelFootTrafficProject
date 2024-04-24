// Author: Nathan Sherman 4/10/2024
// Modified: Dawson De Mond 4/17/2024 
// Modified: Nathan Sherman 4/19/2024
import Place from './place/place'
import Select from './select/select'
import Header from './header/header'

function mapPlaces(places) {
    let placeElements = [];
    console.log(places);
    for (var place of places) {
        if (place.hasOwnProperty("cached")) {
            placeElements.push(
                <Place
                    key={place.id}
                    placeName={place.name}
                    placeAddress={place.address}
                    placeDescription={place.description}
                    placePercentage={place.cached.busyness.percentage}
                    placeLive={place.cached.busyness.live}
                    placeStatus={place.cached.busyness.status}
                />
            )
        }
    }
    return placeElements;
}

export function Sidebar(props) {
    const places = mapPlaces(props.places)

    return (
        <div className="sidebar" style={{ width: props.width, height: props.height }}>
            <Header header="Drexel Foot Traffic" status={props.status} />
            <Select />
            {places}
        </div>
    )
}

export default Sidebar;
