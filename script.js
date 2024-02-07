/*
-----------------------------------
START OF PLACE CLASS
-----------------------------------
*/

// Define the place class
class Place{

    constructor(placeName, placeId, placeAddress, mapNumber, category){
        this.placeName = placeName;
        this.placeId = placeId;
        this.placeAddress = placeAddress;
        this.mapNumber = mapNumber;
        this.category = category;
    };

    getPlaceName(){
        return this.placeName;
    };

    getPlaceId(){
        return this.placeId;
    };

    getPlaceAddress(){
        return this.placeAddress;
    };

}

/*
-----------------------------------
END OF PLACE CLASS
-----------------------------------
*/


/*
-----------------------------------
START OF DISPLAYING DATA
-----------------------------------
*/

// Grab div to place locations into
const locationsDiv = document.getElementById('locations');


// Initialize a list of locations that can be looped through
// FINISH ADDING ALL LOCATIONS
const locations = 
[
    new Place
    (
        "Academic Building",
        "None",
        "None",
        "55",
        "None"
    ),
    new Place
    (
        "Administrative Services Building",
        "None",
        "None",
        "59",
        "None"
    ), 
    new Place
    (
        "Alumni Engineering Labs",
        "ChIJ25OjGk_GxokRNgh_y6Od2xs",
        "Alumni Engineering Laboratory, 3100 Ludlow St, Philadelphia, PA 19104, USA",
        "4",
        "None"
    ),
     new Place
    (
        "Armory, Arlen Specter US Squash Center, Army ROTC",
        "ChIJGVVQeAPHxokR8bllqIpAj_Q",
        "25 N 33rd St, Philadelphia, PA 19104, USA",
        "28",
        "None"
    ),
    new Place
    (
        "Bossone Research Enterprise Center School of Biomedical Engineering, Science, and Health Systems",
        "ChIJGby0_k7GxokRK1F98bkXC2k",
        "3140 Market St, Philadelphia, PA 19104",
        "7",
        "None"
    ),
    new Place
    (
        "Buckley Green",
        "ChIJG_zlAU7GxokRoHC_tAMY410",
        "30 N 33rd St, Philadelphia, PA 19104",
        "86",
        "None"
    ),
    new Place
    (
        "Bulletin Building (One Drexel Plaza)",
        "ChIJm5Aa0sHHxokR5MTYDpgcq7A",
        "3025 Market St, Philadelphia, PA 19104, USA",
        "88",
        "None"
    ),
    new Place
    (
        "Center for Automation Technology",
        "ChIJm15vHE_GxokRZZ8NF1bTnh4",
        "3101 Ludlow St, Philadelphia, PA 19104",
        "27A",
        "None"
    ),
    new Place
    (
        "Chestnut Square",
        "ChIJNWMy70_GxokRdmqq6W7PuA8",
        "3200 Chestnut St, Philadelphia, PA 19104, USA",
        "62 & 62A",
        "None"
    ),
    new Place
    (
        "Constantine N. Papadakis Integrated Sciences Building",
        "ChIJFeHbKVDGxokRcmJlLDhZil4",
        "3245 Chestnut St, Philadelphia, PA 19104",
        "58",
        "None"
    ),
    new Place
    (
        "Curtis Hall",
        "ChIJDfyRD0_GxokReYaHjBZwi6s",
        "3101 Chestnut St, Philadelphia, PA 19104",
        "3",
        "None"
    ),
    new Place
    (
        "Daskalakis Athletic Center",
        "ChIJVyQ9w1HGxokRUX3Wii-3Usw",
        "3301 Market St, Philadelphia, PA 19104",
        "14",
        "None"
    ),
    new Place
    (
        "Design Arts Annex",
        "ChIJm3Zh6E3GxokRgHq6uREMDe8",
        "Philadelphia, PA 19104",
        "55A",
        "None"
    ),
    new Place
    (
        "Disque Hall",
        "ChIJoVdfsU_GxokRhqNxBCNip4k",
        "Disque Hall, 3201 Chestnut St, Philadelphia, PA 19104, USA",
        "12",
        "None"
    ),
    new Place
    (
        "Dornsife Center for Neighborhood Partnerships",
        "ChIJCxpe6bnHxokRNzg3l0q9-Bk",
        "3509 Spring Garden St, Philadelphia, PA 19104",
        "98",
        "None"
    ),
    new Place
    (
        "Drexel Park",
        "ChIJeT2_PU3GxokRxy-syQPARmM",
        "3100 Powelton Ave, Philadelphia, PA 19104",
        "57",
        "None"
    ),
    new Place
    (
        "Drexel Police Station",
        "ChIJRZZF4U3GxokRPATSfoww6NU",
        "Drexel Police Station, Philadelphia, PA 19104, USA",
        "55C",
        "None"
    ),
    new Place
    (
        "Drexel Recreation Center",
        "ChIJG90e2FHGxokRCSij2weegb0",
        "3301 Market St, Philadelphia, PA 19104, USA",
        "14A",
        "None"
    ),
    new Place
    (
        "Drexel Smart House",
        "ChIJbUN_NFLGxokRtsn5WhL9qVQ",
        "3425 Race St, Philadelphia, PA 19104",
        "40",
        "None"
    ),
    new Place
    (
        "Drexel Square",
        "ChIJX9WAy07GxokRiuA3vkeFpg0",
        "Philadelphia, PA 19104",
        "91",
        "None"
    )
]

function displayLocations(locations){
    locationsDiv.innerHTML += `<h1>Avaliable Locations</h1>`
    locations.forEach(place => {
        // Object destructure each place in the locations array
        // Grab place name and place address
        const {placeName : name, placeId : id, placeAddress : address, mapNumber : mapNum, category : cat} = place;
        // Place data of each place into div and place append to the locations div
        // Filter out locations with no google place id
        if(id !== "" && id.toLowerCase() !== "none"){
            locationsDiv.innerHTML += 
            `<div>
                Location: ${name}<br>
                Address: ${address}<br>
                Map Number: ${mapNum}<br>
                Category: ${cat}<br>
                <br>
            </div>`
        }
    });
    
}

displayLocations(locations);

/*
-----------------------------------
END OF DISPLAYING DATA
-----------------------------------
*/


/*
-----------------------------------
BEGIN OF FETCHING POPULAR TIMES DATA
-----------------------------------
*/

// Define API URL
// Placeholder API
// REPLACE WITH ACTUAL API
let API = 'https://catfact.ninja/fact';
// Define API Key
// REPLACE WITH GOOGLE API KEY
let APIKey = '';
// Define API headers
let APIHeaders = {};

// Error handling for API call
function onError(err){
    // Display error on error
    console.log("Error invoked:", err)
}

// On success for API call
// Chain more promises here -- return new Promise 
function onSuccess(data){
    // Display result on success
    console.log("Success invoked:", data)
}

// To occur after every API call
// Successful or Unsuccessful
function onFinally(){
    console.log("API call finished")
}

// Define Function to Call API
function fetchPopularTimes(){
    return new Promise((resolve, reject)=>{
        // Pass in API and headers
        fetch(API, APIHeaders)
            .then((response)=>{
                if(response.ok || response.status == 200){
                    // Response is okay, parse JSON
                    return response.json();
                }
            })
            .then((data)=>{
                // Pass resolved data
                resolve(data);
            })
            .catch((err)=>{
                // If API call response is unsuccessful, reject promise
                reject(err);
        });
    });
}

// Promise chaining
fetchPopularTimes()
    .then(onSuccess)
    .catch(onError)
    .finally(onFinally);


/*
-----------------------------------
END OF FETCHING POPULAR TIMES DATA
-----------------------------------
*/