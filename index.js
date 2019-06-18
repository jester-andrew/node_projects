const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get('/math', doMath)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function doMath(req, res) {
    console.log('doing some math!');

    let weight = req.query.weight;
    let serviceId = req.query.service;
    let basePrice;
    let rate = 0;
    let message = '';
    let validWeight = true;

    if (serviceId == 1) {
        basePrice = 0.55;
        if (weight > 3.5) {
            validWeight = false;
        }
    } else if (serviceId == 2) {
        basePrice = 0.5;
        if (weight > 3.5) {
            validWeight = false;
        }
    } else if (serviceId == 3) {
        basePrice = 1;
        if (weight > 13) {
            validWeight = false;
        }
    } else {
        basePrice = 3.66;
        if (weight > 13) {
            validWeight = false;
        }
    }

    if (validWeight) {
        if (serviceId <= 3) {
            if (weight <= 1) {
                rate = basePrice;
            } else if (weight > 1 && weight <= 2) {

                rate = basePrice + 0.15;

            } else if (weight > 2 && weight <= 3) {

                rate = basePrice + 0.30;

            } else if (weight > 3 && weight <= 4) {

                rate = basePrice + 0.45;

            } else if (weight > 4 && weight <= 5) {

                rate = basePrice + 0.60;

            } else if (weight > 5 && weight <= 6) {

                rate = basePrice + 0.75;

            } else if (weight > 6 && weight <= 7) {

                rate = basePrice + 0.90;

            } else if (weight > 7 && weight <= 8) {

                rate = basePrice + 1.05;

            } else if (weight > 8 && weight <= 9) {

                rate = basePrice + 1.20;

            } else if (weight > 9 && weight <= 10) {

                rate = basePrice + 1.35;

            } else if (weight > 10 && weight <= 11) {

                rate = basePrice + 1.5;

            } else if (weight > 11 && weight <= 12) {

                rate = basePrice + 1.65;

            } else if (weight > 12 && weight <= 13) {

                rate = basePrice + 1.80;

            }
        } else {
            if (weight <= 4) {
                rate = 3.66;
            } else if (weight > 4 && weight <= 8) {
                rate = 4.39;
            } else if (weight > 8 && weight <= 12) {
                rate = 5.19;
            } else if (weight > 12 && weight <= 13) {
                rate = 5.71;
            }
        }
    } else {
        message = "Sorry that is not a valide Weight for this service.";
    }

    let params = { price: rate.toFixed(2), message: message };
    res.render("pages/output", params);
    res.end();
}

console.log("listening on port: " + PORT);