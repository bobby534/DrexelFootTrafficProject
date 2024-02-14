/*
-----------------------------------
START OF PLACE CLASS
-----------------------------------
*/

// Define the place class
class Place{

    constructor(placeName, placeId, placeAddress, mapNumber, category, description){
        this.placeName = placeName;
        this.placeId = placeId;
        this.placeAddress = placeAddress;
        this.mapNumber = mapNumber;
        this.category = category;
        this.description = description;
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

    getDescription(){
        return this.description
    }

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
        "None",
    ),
    new Place
    (
        "Administrative Services Building",
        null,
        null,
        "59",
        "None",
    ), 
    new Place
    (
        "Alumni Engineering Labs",
        "ChIJ25OjGk_GxokRNgh_y6Od2xs",
        "Alumni Engineering Laboratory, 3100 Ludlow St, Philadelphia, PA 19104, USA",
        "4",
        "None",
    ),
     new Place
    (
        "Armory, Arlen Specter US Squash Center, Army ROTC",
        "ChIJGVVQeAPHxokR8bllqIpAj_Q",
        "25 N 33rd St, Philadelphia, PA 19104, USA",
        "28",
        "None",
        "The Arlen Specter US Squash Center opened in the summer of 2021 as the new home of the sport in the U.S.The Specter Center is housed in the historic Pennsylvania State Armory Building on Drexel University’s campus and Philadelphia’s burgeoning University City. The facility features 18 singles courts—including 2 all-glass exhibition courts—and 2 North American Doubles Courts. The Specter Center houses the U.S. Squash Hall of Fame, a high-performance training center for Team USA athletes, the US Squash National Headquarters, and a Learning & Innovation Center through which SquashSmarts will expand its intensive out-of-school academic and athletic mentoring program. The Specter Center will host numerous local, national and international competitions throughout the year, and fields the country’s first urban, school district supported public school squash league.\nThe Specter Center anchors the US Squash Community Affiliate Network, and joins existing Community Affiliate partners across the country that share best practices and models to welcome and integrate people of all playing abilities, ages, faiths, and multicultural and socioeconomic backgrounds."
    ),
    new Place
    (
        "Bossone Research Enterprise Center School of Biomedical Engineering, Science, and Health Systems",
        "ChIJGby0_k7GxokRK1F98bkXC2k",
        "3140 Market St, Philadelphia, PA 19104",
        "7",
        "None",
        "The mission of the School of Biomedical Engineering, Science and Health Systems is to promote health and quality of life through education, research and innovation that integrates engineering and life sciences in a global context."
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
        "None",
        "The College of Arts and Sciences’ Gold LEED-certified Papadakis Integrated Sciences Building is home to North America’s largest living biowall - and the only wall of its kind in a U.S. university. The landmark facility is named in honor of Drexel’s 12th president, Constantine N. Papadakis, PhD. During his tenure, Papadakis recognized the need for greater space to serve the biomedical sciences, a field that quickly flourished after the University’s merger with the College of Medicine.The 150,000 square-foot building, designed by world-renowned architects Diamond & Schmitt and executed by Turner Construction, houses 44 research and teaching laboratories for biology, chemistry and biomedical engineering. The focal point of the atrium is the 22-foot wide, 80-foot tall living biowall, designed by Nedlaw Living Walls and maintained by Parker Plants.Biology research faculty, whose work ranges from biodiversity conservation to cancer and Alzheimer’s research, each have a lab in the building that is equipped with the latest technology (not to mention some of the best views of University City)."
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
        "None",
        "The Daskalakis Athletic Center (DAC) is the home of Drexel Athletics. The facility includes a swimming pool located on the lower level, five squash courts, a golf center, and a gymnasium featuring courts for recreational, intramural, club volleyball, and basketball. The DAC primarily services varsity sports."
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
        "None",
        "The Dornsife Center for Neighborhood Partnerships is Drexel's community-based resource center, where the Drexel community and West Philadelphia residents and partners collaborate on issues of shared importance."
    ),
    new Place
    (
        "Drexel Park",
        "ChIJeT2_PU3GxokRxy-syQPARmM",
        "3100 Powelton Ave, Philadelphia, PA 19104",
        "57",
        "None",
        "Drexel Park is a large public green space located on 32nd Street and Powelton Avenue, near Drexel University's campus.The former Consolidated Laundry industrial site is now an open green space serving as a recreational facility for both Drexel's students and the Powelton community. The park, opened in 2008, includes more than 45 trees, walking paths, lighting, and benches."
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
        "None",
        "Drexel Smart House is a student-led, faculty-supported, multidisciplinary organization that promotes innovations in Philadelphia. The 3425 Race Street property serves both as a tool for student-led projects to develop these innovations and as a connection between Drexel Smart House and the surrounding community, enabling Drexel Smart House to spread its benefits beyond the University."
    ),
    new Place
    (
        "Drexel Square",
        "ChIJX9WAy07GxokRiuA3vkeFpg0",
        "Philadelphia, PA 19104",
        "91",
        "None",
        "Drexel Square is an activated community park, lined with soaring dawn redwood trees, that serves as the gateway into Schuylkill Yards. It is a gathering space for thousands of residents, students, workers, and travelers in University City. A breath of fresh air nestled in the cityscape, a place to pause and feel the sunshine on your face. Come here to connect, to disconnect, to do whatever is needed to make the day a great one."
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
        "None",
        "Propelled by an over 100-year history of uniting academia and industry, Drexel University’s Bennett S. LeBow College of Business is redefining business education through partnerships. We connect driven students with expert faculty and leading organizations to drive innovation and ignite the potential in all. As the pace of change – the demand for change — can be felt across every company, community and continent, we prepare leaders to be and do more than ever before. At LeBow, we don’t wait for others to define the future — we roll up our sleeves and get to work shaping the future we want to see."
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
        "None",
        "The 65,000-square-foot (6,000 m2) complex features a moot courtroom, a two-floor library, a two-story atrium for meetings and casual conversation, faculty/staff offices, and several rooms available for students to meet and work. The building also shares Drexel's campus-wide wireless Internet access. The law school also has a second building, the Kline Institute of Trial Advocacy located at 1200 Chestnut St, Philadelphia, PA 19107."
    ),
    new Place
    (
        "Korman Center",
        "ChIJHxaDzU_GxokRPtCaqzWf7_o",
        "The Korman Center, 3315 Market St, Philadelphia, PA 19104, USA",
        "6",
        "None",
        "The Korman Center originally opened as the University Library in 1959, but was converted to multi-purpose space in the 1980s and currently houses campus technical support, a student study lounge, and offices. Drexel University wanted to reinvent and expand the center and undertook a project to renovate the building and construct a new 3,500 sq ft addition that features a curtain wall facade with exterior sunshades. SGH provided building enclosure consulting services for the project and also served as engineer of record for the roof replacement."
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
        "None",
        "The Lindy Center for Civic Engagement at Drexel University aims to promote social responsibility and public service by facilitating community-based experiential learning for students, faculty, and staff. The center provides education, engagement, and reflection opportunities to help students, staff, and faculty advance their understanding of social issues, build relationships with their communities, and become agents of social change for a more just world. Civic engagement is the act of working to make a difference in community life through collective, public problem-solving to reach a shared vision. Drexel University fosters an environment where students, faculty, and staff develop knowledge and skills to create a more just and equitable world."
    ),
    new Place
    (
        "MacAlister Hall College of Arts and Sciences",
        "",
        "",
        "9B",
        "None",
        "Designed by Paul Henon, MacAlister Hall was completed in 1973. Originally it was known as the Educational Activities Center and was later renamed in honor of the university's first president. Currently, this building houses the university bookstore, student organization offices, classrooms, and practice rooms. Among these uses, it also serves as the home of the studios for WKDU and DUTV as well as the College of Arts and Sciences, the Department of Performing Arts, and Instructional Media Services (IRT)."
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
        "Dining",
        "Located in the heart of the campus residential district, Northside Dining Terrace offers retail favorites including: Chick-fil-A, Wild Blue Sushi, and our Local Restaurant Row. In a rush? The Northside Dining Terrace features The Market for all your convenience needs as well. Stop by for a delicious meal and all your grab n’ go needs!"
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
        "None",
        "The Raymond G. Perelman Center for Jewish Life at Drexel University, designed by San Francisco-based Natoma Architects, is a new Hillel that anchors Jewish life on campus. The center was made possible with a $6 million gift from Perelman, a prominent Philadelphia philanthropist, and is the first building at Drexel constructed entirely through private philanthropy. It is the first standalone facility at Drexel dedicated to Jewish student life. The center has meeting rooms, a kosher café, and outdoor spaces for studying or group meetings. The center connects the three prayer gatherings, conservative, orthodox, and reform, with a central court that opens with a circular cut, an absent dome to the sky above. The James E. Marks Intercultural Center, located down the street from Perelman, is home to many of the spiritual and religious life groups at Drexel."
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
        "None",
        "The Antoinette Westphal College of Media Arts & Design, formerly the Nesbitt College of Design Arts, is one of the colleges of Drexel University. In 2005, the college was renamed after alumna Antoinette Passo Westphal at the request of her husband after one of the largest private donations to the university in its history."
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
        "None",
        "W.W. Hagerty Library holds an extensive collection of materials for all major fields in library and information science and information systems. The library houses nearly half a million books, periodicals, microforms, and non-print materials. Its strengths include technology, pure science, business, design, nutrition, and information science. The social sciences, architecture, fine arts, and general literature are also represented in the collection."
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
        "None",
        "The College of Computing & Informatics (CCI) contributes to theory and practice along dimensions that include technical, human, organizational, policy and societal considerations. This broad perspective positions the College to address the complex, multi-disciplinary problems that are increasingly common as society becomes more dependent on information technology. CCI is home to one of the oldest continually ALA-accredited library and information science programs in the country: the Library and Information Science major in the College's Master of Science in Information degree program. The College is a founding member of the iSchools Caucus of 29 prominent colleges dedicated to advancing the information field in the 21st Century. Currently, CCI administrative offices, labs and classrooms are located on the 9th, 10th and 11th floors of the state-of-the-art uCity Square building at 3675 Market Street. CCI's move to 3675 Market in March 2019 brought together our students, faculty, and professional staff together under one roof for the first time in the College's history (click here to view Drexel University's main campus map)."
    )
    
   
]

function displayLocations(locations){
    locationsDiv.innerHTML += `<h1>Avaliable Locations</h1>`
    locations.forEach(place => {
        // Object destructure each place in the locations array
        // Grab place name and place address
        const {placeName : name, placeAddress : address, mapNumber : mapNum, category : cat, description: des = "None"} = place;
        // Filter out locations with no address and name
        // Display only locations that have an address and a name
        if(name !== null && address !== null){
            // Create a new div
            let div = document.createElement('div');
            // Append data of place instance to div
            div.innerHTML += 
            `
                Location: ${name}<br>
                Address: ${address}<br>
                Map Number: ${mapNum}<br>
                Category: ${cat}<br>
                Description:<br>${des}
                <br>
                <br>
            `;
            // Append div to locations div in index.html file
            locationsDiv.append(div);
        }
    });
    
}

displayLocations(locations);

/*
-----------------------------------
END OF DISPLAYING DATA
-----------------------------------
*/