async function status() {
    let data = { success: false };

    await fetch('http://localhost:3000/status')
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

export default status