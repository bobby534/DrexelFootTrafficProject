const NodeCache = require("node-cache");
const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())
const port = 3001;

let updating = false;
const busyCache = new NodeCache();
const places = require("./places.json");
const { getBusyness } = require("./google.js");

async function updatePlaces() {
    console.log("Updating places now...")

    updating = true
    let busynessArray = await getBusyness(places);
    for (var place of places) {
        if (busynessArray[place.id]) {
            busyCache.set(place.id, busynessArray[place.id], 60 * 60)
        }
    }
    updating = false
}

(async function () {
    updatePlaces()
    setInterval(updatePlaces, 1000 * 60 * 30)
})();

app.get("/places", (_, res) => {
    let newPlaces = places;
    for (var place of newPlaces) {
        place.cached = busyCache.get(place.id)
    }

    return res.send(newPlaces);
})

app.get("/places/:id", (req, res) => {
    if (req.params.id === "") return res.sendStatus(400);

    for (var place of places) {
        if (req.params.id === place.id) {
            place.cached = busyCache.get(place.id)
            return res.send(place);
        }
    }

    return res.sendStatus(404);
})

app.listen(port, () => {
    console.log(`Foot Traffic API listening on port ${port}`)
})