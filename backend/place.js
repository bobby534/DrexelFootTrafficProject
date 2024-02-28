const places = [
    {
        name:"Buckley Green",
        address:"30 N 33rd St, Philadelphia, PA 19104",
        description:"Straightforward park at Drexel University with volleyball courts, a BBQ grill & more.",
        id:"fc262f75-4992-4d9a-8a15-df0584602eb"
    },
    {
        name: "Daskalakis Athletic Center",
        address: "3301 Market St, Philadelphia, PA 19104",
        description: "Daskalakis Athletic Center is a 300,000 square feet athletic and recreational facility in Philadelphia, Pennsylvania. The facility is best known for its 2,509-seat multi-purpose arena that is home to multiple Drexel University Dragons sports teams including basketball and wrestling.",
        id: "9e802b0e-ca9a-4618-bd97-23cc95e8c38f",
    },
    {
        name:"Drexel Park",
        address:"3100 Powelton Ave, Philadelphia, PA 19104",
        description:"This 2.5-acre open park area features walking paths, benches & views of the city's skyline.",
        id:"4eb578be-f599-4c4d-9428-cb04ec032780"
    },
    {
        name:"Drexel University Recreation Center",
        address:"3301 Market St, Philadelphia, PA 19104",
        description:"Members-only gym at Drexel University featuring a pool, classes, squash, a climbing wall & more.",
        id:"08df1de7-61ba-484c-9255-45f846053a77"
    },
    {
        name:"Drexel Square",
        address:"Philadelphia, PA 19104",
        description: null,
        id:"ad75121e-d95b-450c-bbb3-60c138f69785"
    },
    {
        name:"Library Learning Terrace",
        address:"Race Street Hall, 3300 Market St",
        description: null,
        id:"a10885e2-4d2a-47aa-bb52-a5abe2cbba87"
    },
    {
        name:"Northside Dining Terrace",
        address:"203 N 34th St, Philadelphia, PA 19104",
        description: "Cafeteria",
        id:"f1fad892-ddfd-4c23-bee1-52b5366ab376"
    },
    {
        name:"Urban Eatery",
        address:"3400 Lancaster Ave, Philadelphia, PA 19104",
        description:"Cafeteria",
        id:"8b29ef67-d58f-4447-9cd5-aab52e74376e"
    },
    {
        name:"Hagerty Library",
        address:"Race Street Hall, 3300 Market St, Philadelphia, PA 19104",
        description: null,
        id:"ff995cf7-c56f-48f3-85c1-b334ecab2a6d"
    },
    {
        name:"7-Eleven",
        address:"3401 Lancaster Ave, Philadelphia, PA 19104",
        description:"Convenience chain offering grab-&-go bites & beverages, plus assorted newsstand items.",
        id:"f6343079-f0f4-4718-9bb1-724d48b4b099"
    },
    {
        name:"Saxbys Drexel University",
        address:"65 N 34th St, Philadelphia, PA 19104",
        description:"Relaxed coffeehouse chain offering small-batch coffees & light fare such as sandwiches.",
        id:"1aa6d20d-e6c9-4cfc-9936-a25eaa69faa5"
    },
    {
        name:"Old Nelson Food Company",
        address:"3438-3448 Lancaster Ave, Philadelphia, PA 19104",
        description: null,
        id:"92ee19d7-6f6a-47f1-90cb-d96cf0f8beb1"
    },
    {
        name:"Blaze Pizza",
        address:"3400 Lancaster Ave Unit 8, Philadelphia, PA 19104",
        description:"Hip counter-serve pizzeria dishing up crispy, thin-crust pies made with creative toppings & sauces.",
        id:"e3ee1aff-1f31-4bca-8a74-88dda767c93d"
    },
    {
        name:"Wawa",
        address:"3300 Market St, Philadelphia, PA 19104",
        description:"Convenience store chain known for sandwiches & coffee. Many offer fuel & are open 24/7.",
        id:"2ca744e9-1efe-4e6b-8d41-13c9564689de"
    },
    {
        name:"Barnes & Noble at Drexel University",
        address:"3250 Chestnut St, Philadelphia, PA 19104",
        description:"Bookseller chain with a broad selection of titles for adults & kids, plus magazines & gifts.",
        id:"2ca744e9-1efe-4e6b-8d41-13c9564689de"
    },
    {
        name:"The Board and Brew",
        address:"33rd & Chestnut, 3200 Chestnut St, Philadelphia, PA 19104",
        description: "Restaurant",
        id:"74c04169-787d-4a08-81fd-80d4a6b072c6"
    },
    {
        name:"Hand and Stone Massage and Facial Spa",
        address:"3200 Chestnut St 2nd Flr, Philadelphia, PA 19104",
        description:"Massage therapist",
        id:"8e8f91cc-06d5-4a50-96ca-02fcfb7d9715"
    },
    {
        name:"Lascala's Fire University City",
        address:"3200 Chestnut St, Philadelphia, PA 19104",
        description:"Restaurant",
        id:"19b70f1d-9d7a-482f-bc47-2565cd1db18f"
    },
    {
        name:"Shake Shack University City",
        address:"3200 Chestnut St, Philadelphia, PA 19104",
        description:"Hip, counter-serve chain for gourmet takes on fast-food classics like burgers & frozen custard.",
        id:"9b7e3ced-0cf0-4d02-9068-b700b71af36c"
    },
    {
        name:"Supercuts",
        address:"3200 Chestnut St, Philadelphia, PA 19104",
        description:"Hair salon",
        id:"a578caea-b7aa-422d-8df9-41d76e71fcc7"
    },
    {
        name:"CM Chicken",
        address:"3180 Chestnut St, Philadelphia, PA 19104",
        description:"Chicken restaurant",
        id:"771d5ca0-d9e2-4876-8667-131a6ff231aa"
    },
    {
        name:"Greek from Greece, gfg café cuisine",
        address:"107 N 33rd St, Philadelphia, PA 19104",
        description:"Cafe",
        id:"bfeba394-5406-4e42-904f-38a134b7382c"
    },
    {
        name:"vybe urgent care",
        address:"3550 Market St Ste 102, Philadelphia, PA 19104",
        description:"Urgent care center",
        id:"694090a3-aad3-425e-8206-a6558afdbfb5"
    },
    {
        name:"Wells Fargo Bank",
        address:"3550 Market St, Philadelphia, PA 19104",
        description:"Bank",
        id:"c2ce5f57-bca1-49ce-8508-ed0b867fd63e"
    },
    {
        name:"Han Dynasty",
        address:"3711 Market St, Philadelphia, PA 19104",
        description:"Spicy Sichuan dishes like dan dan noodles are heat-rated by number at this informal restaurant.",
        id:"549d6448-930d-4073-bcb6-4c92a5a2f8db"
    },
    {
        name:"Market St & 38th St",
        address:"Philadelphia, PA 19104",
        description:"Bus stop",
        id:"Bus stop"
    }
]

exports.places = places;

// {
//     name:"",
//     address:"",
//     description:"",
//     id:""
// },