async function fetchAPI(){
    const response = await fetch('http://localhost:3000/places');
    const placesJSON = await response.json();
    return placesJSON;
}

export default fetchAPI