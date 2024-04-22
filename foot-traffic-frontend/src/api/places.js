async function places() {
    const response = await fetch('http://localhost:3000/places');
    const placesJSON = await response.json();
    return placesJSON;
}

export default places