
const functions = require('firebase-functions');
const PUBLISHABLE_KEY = "pk_test_51KX8PlFCgzobWk2QMKzkudYNtmdjFf5IpdEup5Rnrk2eoCMsXblcMXot3gvBcqkdo94UHFUE4EQ0l8RmlKZbesT900gUyPvyi6";
const SECRET_KEY = "sk_test_51KX8PlFCgzobWk2QpMYnrZVqAFH4uAgws0xdn8NyxKj9DuLtr5xCdfwSCloW7uPt8lTNfJQdrx1isLlaCm1U2P6I00HHOETbOg";

exports.payWithStripe = functions.https.onRequest((request, response) => {
    // Set your secret key: remember to change this to your live secret key in production
    // See your keys here: https://dashboard.stripe.com/account/apikeys

    // eslint-disable-next-line promise/catch-or-return
    stripe.charges.create({
        amount: request.body.amount,
        currency: request.body.currency,
        source: request.body.token,
    }).then((charge) => {
            // asynchronously called
            response.send(charge);
        })
        .catch(err =>{
            console.log(err);
        });

});