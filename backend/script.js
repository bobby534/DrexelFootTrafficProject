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

    getMapNumber(){
        return this.mapNumber;
    }

    getCategory(){
        return this.category;
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
    ),
    new Place
    (
        "Alpha Chi Rho",
        "ChIJzycTQFLGxokRprWesFOAK_8",
        "206 N 34th St, Philadelphia, PA 19104, USA",
        "30",
        "Fraternity House"
    ),
    new Place
    (
        "Alpha Epsilon Pi",
        "ChIJsY0d7BPHxokRO8MNv_-KrWY",
        "4040 Walnut St, Philadelphia, PA 19104, USA",
        "30",
        "Fraternity House"
    ),
    new Place
    (
        "Alpha Pi Lambda",
        "ChIJoaUZgE3GxokRqU2UE8GPI9g",
        "216 N 33rd St, Philadelphia, PA 19104, USA",
        "37",
        "Fraternity House"
    ),
    new Place
    (
        "Delta Sigma Phi",
        "ChIJmfB-QlLGxokRBCAwUNZ1MWo",
        "214 N 34th St, Philadelphia, PA 19104, USA",
        "45",
        "Fraternity House"
    ),
    new Place
    (
        "Lambda Chi Alpha",
        "ChIJuwJa9FLGxokRgc1JK05WXmY",
        "3401 Powelton Ave, Philadelphia, PA 19104, USA",
        "35",
        "Fraternity House"
    ),
    new Place
    (
        "Pi Kappa Alpha",
        "ChIJRcnrQVLGxokR_4o96y8tLyk",
        "210 N 34th St, Philadelphia, PA 19104, USA",
        "39",
        "Fraternity House"
    ),
    new Place
    (
        "Pi Kappa Phi",
        "ChIJdTpA9lLGxokRz-VoSLIT97U",
        "3405 Powelton Ave, Philadelphia, PA 19104, USA",
        "34",
        "Fraternity House"
    ),
    new Place
    (
        "Sigma Alpha Mu",
        "ChIJKVpHgAvHxokRBnoorT98w9g",
        "3400 Powelton Ave, Philadelphia, PA 19104, USA",
        "501",
        "Fraternity House"
    ),
    new Place
    (
        "Sigma Phi Epsilon",
        "ChIJxQewePfGxokRX0uxyLB1Smc",
        "4028 Walnut St, Philadelphia, PA 19104, USA",
        "36",
        "Fraternity House"
    ),
    new Place
    (
        "Tau Kappa Epsilon",
        "ChIJ9QMMVlLGxokR2vli-Av5jds",
        "3421 Powelton Ave, Philadelphia, PA 19104, USA",
        "32",
        "Fraternity House"
    ),
    new Place
    (
        "Theta Chi",
        "ChIJm9X-Z1LGxokRJnKjWat4nQE",
        "216 N 34th St, Philadelphia, PA 19104, USA",
        "38",
        "Fraternity House"
    ),
    new Place
    (
        "Gateway Garden",
        "",
        "",
        "87A",
        "None"
    ),
    new Place
    (
        "General Services Building",
        "",
        "",
        "16",
        "None"
    ),
    new Place
    (
        "Gerri C. LeBow Hall Bennett S. LeBow College of Business Goodwin College of Professional Studies",
        "",
        "",
        "61",
        "None"
    ),
    new Place
    (
        "Handschumacher Dining Center",
        "",
        "",
        "9C",
        "Dining"
    ),
    new Place
    (
        "Health Sciences Building",
        "",
        "",
        "180",
        "None"
    ),
    new Place
    (
        "James Creese Student Center",
        "",
        "",
        "8",
        "None"
    ),
    new Place
    (
        "Kline Law Building and Library Thomas R. Kline School of Law",
        "",
        "",
        "90",
        "None"
    ),
    new Place
    (
        "Korman Center",
        "",
        "",
        "6",
        "None"
    ),
    new Place
    (
        "Language and Communication Center",
        "",
        "",
        "48",
        "None"
    ),
    new Place
    (
        "LeBow Engineering Center College of Engineering",
        "",
        "",
        "27",
        "None"
    ),
    new Place
    (
        "Library Learning Terrace",
        "",
        "",
        "29A",
        "None"
    ),
    new Place
    (
        "Lincoln Plaza (3020 Market Street)",
        "",
        "",
        "176",
        "None"
    ),
    new Place
    (
        "Lindy Center for Civic Engagement",
        "",
        "",
        "81A",
        "None"
    ),
    new Place
    (
        "MacAlister Hall College of Arts and Sciences",
        "",
        "",
        "9B",
        "None"
    ),
    new Place
    (
        "Main Building (Admissions Visit Center)",
        "",
        "",
        "1",
        "None"
    ),
    new Place
    (
        "Mandell Theater",
        "",
        "",
        "9A",
        "None"
    ),
    new Place
    (
        "Nesbitt Hall Dornsife School of Public Health",
        "",
        "",
        "13",
        "None"
    ),
    new Place
    (
        "Northside Dining Terrace",
        "",
        "",
        "19A",
        "Dining"
    ),
    new Place
    (
        "Parking Garage",
        "",
        "",
        "16",
        "None"
    ),
    new Place
    (
        "Paul Peck Alumni Center",
        "",
        "",
        "60",
        "None"
    ),
    new Place
    (
        "Pearlstein Business Learning Center Charles D. Close School of Entrepreneurship",
        "",
        "",
        "53",
        "None"
    ),
    new Place
    (
        "PSA Building",
        "",
        "",
        "47",
        "None"
    ),
    new Place
    (
        "Randell Hall",
        "",
        "",
        "2",
        "None"
    ),
    new Place
    (
        "Raymond G. Perelman Center for Jewish Life",
        "",
        "",
        "52",
        "None"
    ),
    new Place
    (
        "Bentley Hall Pennoni Honors College",
        "",
        "",
        "20",
        "Residence Hall"
    ),
    new Place
    (
        "Caneris Hall",
        "",
        "",
        "26",
        "Residence Hall"
    ),
    new Place
    (
        "Kelly Hall",
        "",
        "",
        "19",
        "Residence Hall"
    ),
    new Place
    (
        "Millennium Hall",
        "",
        "",
        "31",
        "Residence Hall"
    ),
    new Place
    (
        "Myers Hall",
        "",
        "",
        "21",
        "Residence Hall"
    ),
    new Place
    (
        "North Hall",
        "",
        "",
        "24",
        "Residence Hall"
    ),
    new Place
    (
        "Race Street Residences",
        "",
        "",
        "29",
        "Residence Hall"
    ),
    new Place
    (
        "Towers Hall",
        "",
        "",
        "22",
        "Residence Hall"
    ),
    new Place
    (
        "Van Rensselaer Hall",
        "",
        "",
        "17",
        "Residence Hall"
    ),
    new Place
    (
        "Ross Commons",
        "",
        "",
        "18",
        "Residence Hall"
    ),
    new Place
    (
        "Rush Building",
        "",
        "",
        "10",
        "Residence Hall"
    ),
    new Place
    (
        "Alpha Sigma Alpha",
        "",
        "",
        "39",
        "Sorority House"
    ),
    new Place
    (
        "Delta Phi Epsilon",
        "",
        "",
        "46",
        "Sorority House"
    ),
    new Place
    (
        "Delta Zeta",
        "",
        "",
        "36",
        "Sorority House"
    ),
    new Place
    (
        "Phi Sigma Sigma",
        "",
        "",
        "33",
        "Sorority House"
    )
    ,
    new Place
    (
        "Stratton Hall",
        "",
        "",
        "5",
        "None"
    ),
    new Place
    (
        "Tennis Courts",
        "",
        "",
        "50",
        "None"
    ),
    new Place
    (
        "The Study at University City (Hotel)",
        "",
        "",
        "101",
        "None"
    ),
    new Place
    (
        "The Summit",
        "",
        "",
        "23",
        "None"
    ),
    new Place
    (
        "University Crossings",
        "",
        "",
        "89",
        "None"
    ),
    new Place
    (
        "Urban Eatery",
        "",
        "",
        "23A",
        "Dining"
    ),
    new Place
    (
        "URBN Center Antoinette Westphal College of Media Arts & Design",
        "",
        "",
        "71",
        "None"
    ),
    new Place
    (
        "URBN Center Annex",
        "",
        "",
        "72",
        "None"
    ),
    new Place
    (
        "Vidas Athletic Complex",
        "",
        "",
        "25",
        "None"
    ),
    new Place
    (
        "W.W. Hagerty Library",
        "",
        "",
        "15",
        "None"
    ),
    new Place
    (
        "208 N. 35th Street",
        "",
        "208 N. 35th Street",
        "41",
        "None"
    ),
    new Place
    (
        "400 N. 31st Street",
        "",
        "400 N. 31st Street",
        "56",
        "None"
    ),
    new Place
    (
        "3101 Market Street",
        "",
        "3101 Market Street",
        "88A",
        "None"
    ),
    new Place
    (
        "3201 Arch Street",
        "",
        "",
        "81",
        "None"
    )
    ,
    new Place
    (
        "3210 Cherry Street",
        "",
        "3210 Cherry Street",
        "55B",
        "None"
    )
    ,
    new Place
    (
        "3401 Market Street School of Education",
        "",
        "",
        "170",
        "None"
    )
    ,
    new Place
    (
        "3608 Powelton Avenue",
        "",
        "3608 Powelton Avenue",
        "99",
        "None"
    ) ,
    new Place
    (
        "3675 Market Street College of Computing & Informatics",
        "",
        "",
        "178",
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
       
        locationsDiv.innerHTML += 
        `<div>
            Location: ${name}<br>
            Address: ${address}<br>
            Map Number: ${mapNum}<br>
            Category: ${cat}<br>
            <br>
        </div>`
        
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