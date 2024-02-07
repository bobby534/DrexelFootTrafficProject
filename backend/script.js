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
        null,
        null,
        "55",
        "None"
    ),
    new Place
    (
        "Administrative Services Building",
        null,
        null,
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
        null,
        null,
        "87A",
        "None"
    ),
    new Place
    (
        "General Services Building",
        "ChIJH-NntVHGxokRGMCOBg1Wn_I",
        "3367 Market St, Philadelphia, PA 19104, USA",
        "16",
        "None"
    ),
    new Place
    (
        "Gerri C. LeBow Hall Bennett S. LeBow College of Business Goodwin College of Professional Studies",
        "ChIJIaAzSk7GxokRzVISqOci45I",
        "LeBow Hall, 3220 Market St, Philadelphia, PA 19104, USA",
        "61",
        "None"
    ),
    new Place
    (
        "Handschumacher Dining Center",
        "ChIJaazLcWbHxokRQKoLGvt6sk0",
        "3250 Chestnut St, Philadelphia, PA 19104, USA",
        "9C",
        "Dining"
    ),
    new Place
    (
        "Health Sciences Building",
        "ChIJGZ2Iq0THxokRzWcrgoDr5JY",
        "60 N 36th St, Philadelphia, PA 19104, USA",
        "180",
        "None"
    ),
    new Place
    (
        "James Creese Student Center",
        "ChIJuTpv6k_GxokR1XWFyM6z3Fg",
        "3210 Chestnut St, Philadelphia, PA 19104, USA",
        "8",
        "None"
    ),
    new Place
    (
        "Kline Law Building and Library Thomas R. Kline School of Law",
        "ChIJO7iMzFHGxokRKXEVTIm9B9I",
        "3320 Market St, Philadelphia, PA 19104, USA",
        "90",
        "None"
    ),
    new Place
    (
        "Korman Center",
        "ChIJHxaDzU_GxokRPtCaqzWf7_o",
        "The Korman Center, 3315 Market St, Philadelphia, PA 19104, USA",
        "6",
        "None"
    ),
    new Place
    (
        "Language and Communication Center",
        "ChIJ0ZJvhE3GxokRrMLkFQ9Tv1w",
        "Language and Communication Center, 229 N 33rd St, Philadelphia, PA 19104, USA",
        "48",
        "None"
    ),
    new Place
    (
        "LeBow Engineering Center College of Engineering",
        "ChIJt5o_HU_GxokR0tnj1Dou6DQ",
        "3100 Market St, Philadelphia, PA 19104, USA",
        "27",
        "None"
    ),
    new Place
    (
        "Library Learning Terrace",
        null,
        null,
        "29A",
        "None"
    ),
    new Place
    (
        "Lincoln Plaza (3020 Market Street)",
        "ChIJBRk62k7GxokRR6oU7h3HU6Y",
        "3020 Market St, Philadelphia, PA 19104, USA",
        "176",
        "None"
    ),
    new Place
    (
        "Lindy Center for Civic Engagement",
        "ChIJzWlg6E3GxokRxhYeLUU2OSE",
        "3210 Cherry St, Philadelphia, PA 19104, USA",
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
        "Main Building",
        "ChIJUQ15qE_GxokR-r7EzZFSt24",
        "3141 Chestnut St, Philadelphia, PA 19104, USA",
        "1",
        "None"
    ),
    new Place
    (
        "Mandell Theater",
        "ChIJmbE05E_GxokRURahtsnoKQg",
        "3220 Chestnut St, Philadelphia, PA 19104, USA",
        "9A",
        "None"
    ),
    new Place
    (
        "Nesbitt Hall Dornsife School of Public Health",
        "ChIJ88tqoC3GxokRfGEXPnfkapY",
        "Nesbitt Hall, 3215 Market St, Philadelphia, PA 19104, USA",
        "13",
        "None"
    ),
    new Place
    (
        "Northside Dining Terrace",
        "ChIJ15AmYdHHxokRz5F1lP5PtIs",
        "203 N 34th St, Philadelphia, PA 19104, USA",
        "19A",
        "Dining"
    ),
    new Place
    (
        "Parking Garage",
        "ChIJzxoYxfTHxokRK7BKcRB1M_I",
        "1500 Walnut St, Philadelphia, PA 19102, USA",
        "16",
        "None"
    ),
    new Place
    (
        "Paul Peck Alumni Center",
        "ChIJ__-__07GxokR50SrCwyis_A",
        "Peck Alumni Center, Philadelphia, PA 19104, USA",
        "60",
        "None"
    ),
    new Place
    (
        "Pearlstein Business Learning Center Charles D. Close School of Entrepreneurship",
        "ChIJuTZM-03GxokRZhcKt0R-bhI",
        "3230 Market Street Pearlstein Suite 402, Philadelphia, PA 19104, USA",
        "53",
        "None"
    ),
    new Place
    (
        "PSA Building",
        "ChIJpeNoeE3GxokRpjyvOg7RynU",
        "Psychology, Sociology, and Anthropology Building, 229 N 33rd St, Philadelphia, PA 19104, USA",
        "47",
        "None"
    ),
    new Place
    (
        "Randell Hall",
        "ChIJ5ycfBk_GxokRMAvUhOKzv3c",
        "Randell Hall, Philadelphia, PA 19104, USA",
        "2",
        "None"
    ),
    new Place
    (
        "Raymond G. Perelman Center for Jewish Life",
        "ChIJMabUPFLGxokRJ99DV1bk89g",
        "118 N 34th St, Philadelphia, PA 19104, USA",
        "52",
        "None"
    ),
    new Place
    (
        "Bentley Hall Pennoni Honors College",
        "ChIJXYXy4U_GxokRg8w9sNCn_So",
        "3250 Chestnut Street, 5016 MacAlister Hall, Philadelphia, PA 19104, USA",
        "20",
        "Residence Hall"
    ),
    new Place
    (
        "Caneris Hall",
        "ChIJR7cAbU7GxokRE_GECesGGSM",
        "115 N 32nd St, Philadelphia, PA 19104, USA",
        "26",
        "Residence Hall"
    ),
    new Place
    (
        "Kelly Hall",
        "ChIJr38UE1LGxokRmzp3fqDFoA4",
        "203 N 34th St, Philadelphia, PA 19104, USA",
        "19",
        "Residence Hall"
    ),
    new Place
    (
        "Millennium Hall",
        "ChIJHR2Ob1LGxokRQeRCLxcJqco",
        "223 N 34th St, Philadelphia, PA 19104, USA",
        "31",
        "Residence Hall"
    ),
    new Place
    (
        "Myers Hall",
        "ChIJySGDd1LGxokRI7nUWuzNzUw",
        "Myers Hall, 3301 Race St, Philadelphia, PA 19104, USA",
        "21",
        "Residence Hall"
    ),
    new Place
    (
        "North Hall",
        "ChIJQc-K7E3GxokRdd_OzRXVJYY",
        "3200 Race St, Philadelphia, PA 19104, USA",
        "24",
        "Residence Hall"
    ),
    new Place
    (
        "Race Street Residences",
        "ChIJ_6e_C1LGxokRXGMRYDZh_ek",
        "Race Street Hall, 3300 Race St, Philadelphia, PA 19104, USA",
        "29",
        "Residence Hall"
    ),
    new Place
    (
        "Towers Hall",
        "ChIJXUuFHlLGxokR6P2a3kW5eqY",
        "101 N 34th St, Philadelphia, PA 19104, USA",
        "22",
        "Residence Hall"
    ),
    new Place
    (
        "Van Rensselaer Hall",
        "ChIJt2nKfFLGxokRunN2W3YdaRY",
        "Van Rensselaer Hall, 3320 Powelton Ave, Philadelphia, PA 19104, USA",
        "17",
        "Residence Hall"
    ),
    new Place
    (
        "Ross Commons",
        "ChIJFTJtUnrHxokRkezWuAX_tF0",
        "229 N 34th St, Philadelphia, PA 19104, USA",
        "18",
        "Residence Hall"
    ),
    new Place
    (
        "Rush Building",
        "ChIJ66594lHGxokRZvsc4ce_nyg",
        "30 N 33rd St, Philadelphia, PA 19104, USA",
        "10",
        "Residence Hall"
    ),
    new Place
    (
        "Alpha Sigma Alpha",
        null,
        null,
        "39",
        "Sorority House"
    ),
    new Place
    (
        "Delta Phi Epsilon",
        null,
        null,
        "46",
        "Sorority House"
    ),
    new Place
    (
        "Delta Zeta",
        "ChIJv9ygP1LGxokRo0iu23CPmEg",
        "202 N 34th St, Philadelphia, PA 19104, USA",
        "36",
        "Sorority House"
    ),
    new Place
    (
        "Phi Sigma Sigma",
        "ChIJc0t_-FLGxokRoMzR_906y-4",
        "3411 Powelton Ave, Philadelphia, PA 19104, USA",
        "33",
        "Sorority House"
    )
    ,
    new Place
    (
        "Stratton Hall",
        "ChIJyVmKuU_GxokRktG6VSUEC8E",
        "3201 Chestnut St, Philadelphia, PA 19104, USA",
        "5",
        "None"
    ),
    new Place
    (
        "Tennis Courts",
        null,
        null,
        "50",
        "None"
    ),
    new Place
    (
        "The Study at University City (Hotel)",
        "ChIJb4XbJVDGxokRldvYy_ll05s",
        "20 S 33rd St, Philadelphia, PA 19104, USA",
        "101",
        "None"
    ),
    new Place
    (
        "The Summit",
        "ChIJRajzkFHGxokRLgwWfs1ECqQ",
        "3400 Lancaster Ave, Philadelphia, PA 19104, USA",
        "23",
        "None"
    ),
    new Place
    (
        "University Crossings",
        "ChIJGfOlak7GxokRrHN9VAOtCEM",
        "3175 John F Kennedy Blvd, Philadelphia, PA 19104, USA",
        "89",
        "None"
    ),
    new Place
    (
        "Urban Eatery",
        "ChIJH_2okFHGxokR9BAIWfuSvyo",
        "3400 Lancaster Ave, Philadelphia, PA 19104, USA",
        "23A",
        "Dining"
    ),
    new Place
    (
        "URBN Center Antoinette Westphal College of Media Arts & Design",
        "ChIJ-9YCTVjHxokRSxP0lzlzkMU",
        "URBN Center, 3501 Market St, Philadelphia, PA 19104, USA",
        "71",
        "None"
    ),
    new Place
    (
        "URBN Center Annex",
        null,
        null,
        "72",
        "None"
    ),
    new Place
    (
        "Vidas Athletic Complex",
        "ChIJhetWwvvGxokRTtZHO45-c0w",
        "4300 Powelton Ave, Philadelphia, PA 19104, USA",
        "25",
        "None"
    ),
    new Place
    (
        "W.W. Hagerty Library",
        "ChIJhUuWzFHGxokRU96-cUW8gTg",
        "Race Street Hall, 3300 Market St, Philadelphia, PA 19104, USA",
        "15",
        "None"
    ),
    new Place
    (
        "208 N. 35th Street",
        "ChIJdTUHylPGxokRLTVwF0siMfY",
        "208 N 35th St, Philadelphia, PA 19104, USA",
        "41",
        "None"
    ),
    new Place
    (
        "400 N. 31st Street",
        "ChIJzfyOMU3GxokR5vIqvr1ltNc",
        "400 N 31st St, Philadelphia, PA 19104, USA",
        "56",
        "None"
    ),
    new Place
    (
        "3101 Market Street",
        "EiszMTAxIE1hcmtldCBTdCwgUGhpbGFkZWxwaGlhLCBQQSAxOTEwNCwgVVNBIjESLwoUChIJUzn1507GxokRUluy9EFbJogQnRgqFAoSCaFjX2P4xsaJETITdAyUHKvQ",
        "3101 Market St, Philadelphia, PA 19104, USA",
        "88A",
        "None"
    ),
    new Place
    (
        "3201 Arch Street",
        "EikzMjAxIEFyY2ggU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxMDQsIFVTQSIxEi8KFAoSCc_y6d9NxsaJEfQLhomcnueXEIEZKhQKEgmVE-wjLMbGiRE8stM3w3agJQ",
        "3201 Arch St, Philadelphia, PA 19104, USA",
        "81",
        "None"
    )
    ,
    new Place
    (
        "3210 Cherry Street",
        "ChIJA_7owk3GxokRsaOAIfqJ-Dk",
        "3210 Cherry St, Philadelphia, PA 19104, USA",
        "55B",
        "None"
    )
    ,
    new Place
    (
        "3401 Market Street School of Education",
        "ChIJpy-Io1HGxokR4ZTflHxm47E",
        "3401 Market St, Philadelphia, PA 19104, USA",
        "170",
        "None"
    )
    ,
    new Place
    (
        "3608 Powelton Avenue",
        "ChIJmQ5Tk1PGxokRkFJHSqxN29Q",
        "3608 Powelton Ave, Philadelphia, PA 19104, USA",
        "99",
        "None"
    ) ,
    new Place
    (
        "3675 Market Street College of Computing & Informatics",
        "ChIJ4X68HU7GxokRsoBfLssslB0",
        "3675 Market St 10th floor, Philadelphia, PA 19104, USA",
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
        // Filter out locations with no address and name
        // Display only locations that have an address and a name
        if(name !== null && address !== null){
            // Place data of each place into div and place append to the locations div
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