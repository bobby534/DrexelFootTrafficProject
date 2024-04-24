import Styles from './header.module.css'

function header(props){
    return(
        <>
                <div className={Styles.container}>
                    <h1 className={Styles.header}>{props.header}</h1>
                    <p>{props.status.updating ? "Last Updated: Updating" : `Last Updated: ${(new Date(props.status.lastUpdated * 1000)).toLocaleTimeString()}`}</p>
                </div>
        </>

    );
}

export default header