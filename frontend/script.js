const locationsDiv = document.getElementById('locations');

async function getBusy(id){
    const response = await fetch(`http://localhost:3000/places/${id}/busyness`);
    const busyness = await response.json();
    return busyness;
}

async function fetchAPI(){
    const response = await fetch('http://localhost:3000/places');
    const places = await response.json();

    // Sort elements in places array alphabetically
    places.sort((a,b)=>{
        return a.name.localeCompare(b.name);
    });

    places.forEach(async element => {
        // Deconstruct element
        const { name, address, id, description} = element;
        // Get busyness
        const busyness = await getBusy(id);

        // If busyness
        if(busyness.success){
            // Create a div to contain place
            let div = document.createElement('div');
            // Append data to div
            div.innerHTML += 
            `
                Location: ${name}<br>
                Address: ${address}<br>
                Description: ${description ? description !== null : "None"}<br>
                Live: ${busyness.live}<br>
                Busyness: ${busyness.busyness}<br>
                Busyness Percent: ${busyness.percentage}<br>
                <br>
                <br>
            `;
            // Append to locations div
            locationsDiv.append(div);
        }

    
        
    });

}

fetchAPI();