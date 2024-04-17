import Place from './place/place'
import Select from './select/select'
import Header from './header/header'

export function Sidebar(props) {
    return (
        <div className="sidebar" style={{width: props.width, height: props.height}}>  
           <Header header="Drexel Foot Traffic"/> 
           <Select/>
           <Place/>
        </div>
    )
}

export default Sidebar;
