// Author: Nathan Sherman 4/10/2024
// Modified: Dawson De Mond 4/17/2024 
import Place from './place/place'
import Select from './select/select'
import Header from './header/header'
import fetchAPI from '../fetchAPI';

async function getPlaces(){
    const placesJSON = await fetchAPI();

    let placesArray = [];

    placesJSON.forEach(element => {
        if(!element.hasOwnProperty("cached")){
            return
        }

        const {name, address, description, id, cached:{busyness:{live, percentage, status}, coordinates}} = element;
        placesArray.push(
            <Place 
                placeKey={id}
                placeName={name} 
                placeAddress={address}
                placeDescription={description}
                placePercentage={percentage}
                placeLive={live}
                placeStatus={status}
            />
        );
    });
    return placesArray;
}

let places = await getPlaces();

export function Sidebar(props) {
    return (
        <div className="sidebar" style={{width: props.width, height: props.height}}>  
           <Header header="Drexel Foot Traffic"/> 
           <Select/>
           {places}
        </div>
    )
}

export default Sidebar;
