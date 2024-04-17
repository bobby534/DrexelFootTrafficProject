import Styles from './header.module.css'

function header(props){
    return(
        <>
                <div className={Styles.container}>
                    <h1 className={Styles.header}>{props.header}</h1>
                </div>
        </>

    );
}

export default header