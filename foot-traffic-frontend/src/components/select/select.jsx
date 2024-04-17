/*// Author: Dawson De Mond 4/17/2024*/

import Styles from './select.module.css'
function select(){
    return(
    <>
        <select className={Styles.select}>
            <option>Descending (Percentage)</option>
            <option>Ascending (Percentage)</option>
            <option>Descending (Alphabetically)</option>
            <option>Ascending (Alphabetically)</option>
        </select>
    </>
    );
}

export default select