/*// Author: Dawson De Mond 4/17/2024*/
// Modified: Dawson De Mond 5/8/2024


import { useState } from 'react';
import Styles from './select.module.css'



function handleChange(event, setSortOption){
    setSortOption(event.target.value);
}

function select(props){
    return(
    <>
        <select onChange={(e)=>{handleChange(e, props.setSortOption);}}className={Styles.select}>
            <option value="DP">Descending (Percentage)</option>
            <option value="AP">Ascending (Percentage)</option>
            <option value="DA">Descending (Alphabetically)</option>
            <option value="AA">Ascending (Alphabetically)</option>
        </select>
    </>
    );
}

export default select