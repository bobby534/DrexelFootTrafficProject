const NodeCache = require("node-cache");
const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors)
const port = 3000;

const busyCache = new NodeCache();
const { places } = require("./place.js");
const { getBusyness } = require("./google.js");

(async function () {
    for (const place of places) {
        let busyness = await getBusyness(place);
        if (busyness.success) {
            busyCache.set(place.id, busyness, 15 * 60)
            console.log(`Succesfully cached busyness of ${place.name}: ${busyness.percentage}`)
        } else {
            console.log(`Failed to get busyness of ${place.name}`)
        }
    }
})();

app.get("/places", (_, res) => {
    return res.send(places);
})

app.get("/places/:id", (req, res) => {
    if (req.params.id === "") return res.sendStatus(400);

    for (const place of places) {
        if (req.params.id === place.id) return res.send(place);
    }

    return res.sendStatus(404);
})

app.get("/places/:id/busyness", async (req, res) => {
    if (req.params.id === "") return res.sendStatus(400);

    for (const place of places) {
        if (req.params.id === place.id) {
            if (busyCache.has(place.id)) return res.send(busyCache.get(place.id));

            let busyness = await getBusyness(place);
            if (busyness.success) {
                res.statusCode = 200;
                busyCache.set(place.id, busyness, 15 * 60);
            } else {
                res.statusCode = 500;
            }

            return res.send(busyness);
        }
    }

    return res.sendStatus(404);
})

app.listen(port, () => {
    console.log(`Foot Traffic API listening on port ${port}`)
})