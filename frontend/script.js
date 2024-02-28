const topBusyLocationsDiv = document.getElementById('topBusyLocations');
const locationsDiv = document.getElementById('locations');

async function getBusy(id){
    const response = await fetch(`http://localhost:3000/places/${id}/busyness`);
    const busyness = await response.json();
    return busyness;
}

async function fetchAPI(){
    const response = await fetch('http://localhost:3000/places');
    const places = await response.json();

    //Append header to top busy locations div
    topBusyLocationsDiv.innerHTML += `<h1>Top Busy Locations:</h1>`
    // Append header to locations div
    locationsDiv.innerHTML +=  `<h1>Locations (Alphabetical):</h1>`;

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
            let div = document.createElement('div');
            // Append data to div
            div.innerHTML += 
            `
                Location / Place: ${name}<br><br>
                Address: ${address}<br><br>
                Description: ${description !== null ? description : "None"}<br><br>
                Live: ${busyness.live}<br><br>
                Busyness: ${busyness.busyness}<br><br>
                Busyness Percentage: ${busyness.percentage} % <br><br>
                <br>
                <br>
            `;
            // Append to locations div
            locationsDiv.append(div);
        }
        
    });
}

fetchAPI();

            
