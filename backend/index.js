const NodeCache = require("node-cache");
const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())
const port = 3000;

let updating = false;
let lastUpdated = 0;
const locationCache = new NodeCache();
const places = require("./places.json");
const { getLocationsData } = require("./location.js");

async function updatePlaces() {
    console.log("Updating places now...")

    updating = true
    let locationData = await getLocationsData(places);
    for (var place of places) {
        if (locationData[place.id]) {
            locationCache.set(place.id, locationData[place.id], 60 * 60)
        }
    }
    updating = false
    lastUpdated = Math.floor(Date.now() / 1000);
}

(async function () {
    updatePlaces()
    setInterval(updatePlaces, 1000 * 60 * 30)
})();

app.get("/status", (_, res) => {
    return res.send({
        updating: updating,
        lastUpdated: lastUpdated,
        cacheSize: locationCache.stats.keys
    });
})

app.get("/places", (_, res) => {
    let newPlaces = places;
    for (var place of newPlaces) {
        place.cached = locationCache.get(place.id)
    }

    return res.send(newPlaces);
})

app.get("/places/:id", (req, res) => {
    if (req.params.id === "") return res.sendStatus(400);

    for (var place of places) {
        if (req.params.id === place.id) {
            place.cached = locationCache.get(place.id)
            return res.send(place);
        }
    }

    return res.sendStatus(404);
})

app.listen(port, () => {
    console.log(`Foot Traffic API listening on port ${port}`)
})