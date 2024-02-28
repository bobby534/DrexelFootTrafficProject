const topBusyLocationsDiv = document.getElementById('topBusyLocations');
const locationsDiv = document.getElementById('locations');

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
    

    let percentages = [];


    places.forEach(async element => {
        // Deconstruct element
        const { name, address, description, cached } = element;
        // Get busyness
        if (!element.hasOwnProperty("cached")) {
            return
        }

        percentages.push({name: name, percent: cached.percentage});

        // If busyness
        if(cached.success){           
            let div = document.createElement('div');
            // Append data to div
            div.innerHTML += 
            `
                Location / Place: ${name}<br><br>
                Address: ${address}<br><br>
                Description: ${description !== null ? description : "None"}<br><br>
                Live: ${cached.live}<br><br>
                Busyness: ${cached.busyness}<br><br>
                Busyness Percentage: ${(cached.percentage).toFixed(2)} % <br><br>
                <br>
                <br>
            `;
            // Append to locations div
            locationsDiv.append(div);
        }
        
    });

    percentages.sort((a, b)=>{
        return b.percent - a.percent;
    });

    // Display top 5 locations based on busyness percentage
    for(let i = 0; i < 5; i++){
        // Append data to div
        let div = document.createElement('div');
        div.innerHTML += 
        `
            Rank : #${i + 1}<br><br>
            Location / Place: ${percentages[i].name}<br><br>
            Busyness Percentage: ${(percentages[i].percent).toFixed(2)} % <br><br>
            <br>
            <br>
        `;
        // Add top busy locations to top busy locations div
        topBusyLocationsDiv.append(div);

    };



}

fetchAPI();

            
