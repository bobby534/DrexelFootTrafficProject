// Author: Dawson De Mond 4/17/2024
import Styles from '../place/place.module.css'
export function Place(props){
    let liveColor = props.placeLive ? "Green" : "Red";

    return(
        <>
            <div className={Styles.container}>
                <div className={Styles.placeName}>Place: {props.placeName}</div>
                <div>Address: {props.placeAddress}</div>
                <div>Description: {props.placeDescription}</div>
                <div>Percentage: {props.placePercentage}</div>
                <div>
                    <strong style={{color: liveColor,}}>Live:</strong>
                    <div className={Styles.placeLive}> {props.placeLive ? "Live" : "Not Live"}</div>
                </div>
            </div>
        </>
    );
}

Place.defaultProps = {
    placeName: "-",
    placeAddress: "-",
    placeDescription: "-",
    placePercentage: "-%",
    placeLive: false
}

export default Place