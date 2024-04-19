// Author: Dawson De Mond 4/17/2024
import Styles from '../place/place.module.css'
export function Place(props){
    let liveColor = props.placeLive ? "Green" : "Red";

    return(
        <>
            <div className={Styles.container}>
                <div className={Styles.placeName}>Place: {props.placeName}</div>
                <div><strong>Address:</strong> {props.placeAddress}</div>
                <div><strong>Description:</strong> {props.placeDescription}</div>
                <div><strong>Status:</strong> {props.placeStatus}</div>
                <div><strong>Percentage:</strong> {props.placePercentage}%</div>
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
    placeLive: false,
    placeStatus:"-"
}

export default Place