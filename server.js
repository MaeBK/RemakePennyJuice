const MongoClient = require('mongodb').MongoClient;
const cors = require("cors")
const bodyParser = require("body-parser")


// starts express server
const express = require('express');
const app = express();
const port = process.env.PORT|| 8080;
     
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => console.log(`Listening on port ${port}`));


MongoClient.connect(process.env.MONGODB_URI , { useNewUrlParser: true }, (err, client) => {
    console.log("Connected to database :D :D :D :D ");
    const db = client.db('penny-juice');
    const collection = db.collection('penny-juice-products');
   
    app.get('/data', (req, res) => {
        console.log("GET request received... also youre a nerd.");
        collection.find().toArray()
        .then (docs => {
            res.send(docs);
        });
    });
    
    // app.post('/contacts', (req, res) => {
    //     db.collection('contacts').insertOne(req.body)
    //     console.log(req.body);
    // });

    // app.get('/contacts', (req, res) => {
    //     contactsCollection.find().toArray()
    //     .then (docs => {
    //         res.send(docs);
    //     });
    // });

});