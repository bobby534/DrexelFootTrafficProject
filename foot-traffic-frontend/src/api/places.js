async function places() {
    let data = { success: false };

    await fetch('http://localhost:3000/places')
        .then(response => response.json())
        .then(json => {
            data.success = true
            data.response = json
        })
        .catch(error => {
            data.error = error
        });
    
    return data
}

export default places