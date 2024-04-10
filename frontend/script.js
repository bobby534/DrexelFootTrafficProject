const topBusyLocationsDiv = document.getElementById('topBusyLocations');
let locationsDiv = document.getElementById('locations');
const searchBar = document.getElementById('searchBar');
const sortLocationsSelect = document.getElementById('sortLocationsSelect');
const sortBtn = document.getElementById('sortBtn');


function sortBusynessData(){
    let sortType = sortLocationsSelect.value;
    let divArray = Array.from(locationsDiv.querySelectorAll('div.place'));
    // Sort based on select option value
    switch(sortType){
        // By busyness percentage descending.
        case "DescendingP":
            divArray.sort((a, b)=>{
                let aPercentage = parseInt(a.querySelector('#placePercentage').textContent);
                let bPercentage = parseInt(b.querySelector('#placePercentage').textContent);
                return bPercentage - aPercentage;
            });
             // Reset/Clear locations div
             locationsDiv.innerHTML = "";
             locationsDiv.innerHTML += `<h1>Locations (Percentage Ascending):</h1>`;
             divArray.forEach((place)=>{
                 locationsDiv.appendChild(place);
             });
            break;
            break;
        // By busyness percentage ascending.
        case "AscendingP":
            divArray.sort((a, b)=>{
                let aPercentage = parseInt(a.querySelector('#placePercentage').textContent);
                let bPercentage = parseInt(b.querySelector('#placePercentage').textContent);
                return aPercentage - bPercentage;
            });
             // Reset/Clear locations div
             locationsDiv.innerHTML = "";
             locationsDiv.innerHTML += `<h1>Locations (Percentage Ascending):</h1>`;
             divArray.forEach((place)=>{
                 locationsDiv.appendChild(place);
             });
             console.log(locationsDiv.childElementCount);
            break;
        // Alphabetically descending.
        case "DescendingA":
            divArray.sort((a, b)=>{
                let aName = a.querySelector('#placeName').textContent;
                let bName = b.querySelector('#placeName').textContent;
                return bName.localeCompare(aName);
            });
            // Reset/Clear locations div
            locationsDiv.innerHTML = "";
            locationsDiv.innerHTML += `<h1>Locations (Alphabetical Descending):</h1>`;
            divArray.forEach((place)=>{
                locationsDiv.appendChild(place);
            });
            break;
        // Alphabetically ascending.
        case "AscendingA":            
            divArray.sort((a, b)=>{
                let aName = a.querySelector('#placeName').textContent;
                let bName = b.querySelector('#placeName').textContent;
                return aName.localeCompare(bName);
            });
            // Reset/Clear locations div
            locationsDiv.innerHTML = "";
            locationsDiv.innerHTML += `<h1>Locations (Alphabetical Ascending):</h1>`;
            divArray.forEach((place)=>{
                locationsDiv.appendChild(place);
            });
            break;
        default:
            return;    
    }
}

sortBtn.addEventListener('click', sortBusynessData);

// FIX SEARCH BAR FUNCTIONALITY

// function handleSearchInput(e){
//     let descendants = locationsDiv.getElementsByClassName('place');
//     if(e.keyCode == 8){
//         if(searchBar.value === ""){
//             return;
//         }
//         for (let i = 0; i < descendants.length; i++) {
//             const element = descendants[i];
//             const text = element.textContent;
//             let regex = new RegExp(searchBar.value, 'i');
//             let isMatch = regex.test(text.trim());

//             if(isMatch){
//                 // Hide child
//                 element.style.display = 'none';
//                 if(element.style.display === 'none'){
//                     element.style.display = 'block';
//                 }
//             }
//         }
//     }else{
//         for (let i = 0; i < descendants.length; i++) {
//             const element = descendants[i];
//             const placeText = element.textContent.toLowerCase().trim();
//             // UPDATE REGEX TO FULLY MATCH CORRECTLY
//             let query = searchBar.value.toLowerCase().trim();
//             let regex = new RegExp(query, 'i');
//             let isMatch = regex.test(placeText);

//             if(!isMatch){
//                 // Hide child
//                 element.style.display = 'none';
//             }
//         }
   
//    }
// }

// FIX SEARCH BAR

// searchBar.addEventListener('keyup',(e)=>{
//    handleSearchInput(e);
// });


async function fetchAPI(){
    const response = await fetch('http://localhost:3000/places');
    const places = await response.json();

    //Append header to top busy locations div
    topBusyLocationsDiv.innerHTML += `<h1>Top Busy Locations:</h1>`
    // Append header to locations div
    locationsDiv.innerHTML +=  `<h1>Locations (Alphabetical Ascending):</h1>`;

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
            div.className = "place";
            // Append data to div
            div.innerHTML += 
            `
                <div>
                <h1 id="placeName">${name}</h1>
                ${description !== null ? `<h4>${description}</h4>` : ""}
                </div>
                <span>
                ${cached.live ? `${name} is <strong>${cached.busyness.toLowerCase()}</strong> at this moment` : `${name} is <strong>${cached.busyness.toLowerCase()}</strong> at this time`}, at <strong id="placePercentage">${Math.round(cached.percentage)}% capacity</strong>.
                </span>
                <h5>${address}</h5>
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

            
