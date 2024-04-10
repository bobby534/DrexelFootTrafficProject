import useWindowDimensions from "../utils/windowDimensions";
import DrexelMap from '../components/DrexelMap';
import Sidebar from "../components/Sidebar";

export function Map() {
    const { height, width } = useWindowDimensions();

    return (
        <div className="wrapper">
            <DrexelMap height={height} width={width * 3/4} />
            <Sidebar height={height} width={width * 1/4} />
        </div>
    )
}

export default Map;
