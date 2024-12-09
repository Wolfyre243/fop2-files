const express = require('express');
const fs = require('fs');
const app = express();
const parse = require("csv-parse").parse;
const cors = require('cors');
app.use(cors());

app.use(express.json());

let usSuperStoreData;

async function readAllUSSuperStore() {
   return new Promise((resolve, reject) => {
      const rData = [];

      fs.createReadStream(".\\data\\US_Superstore.csv")
         .pipe(parse({ delimiter: ',', from_line: 2 }))
         .on('data', function (csvrow) {
            let newRecord = {
               rowID                : csvrow[0],
               orderID              : csvrow[1],
               orderDate           : csvrow[2],
               shipDate            : csvrow[3],
               shipMode            : csvrow[4],
               customerID           : csvrow[5],
               customerName        : csvrow[6],
               segment              : csvrow[7],
               country              : csvrow[8],
               city                 : csvrow[9],
               state                : csvrow[10],
               postalCode           : csvrow[11],
               region               : csvrow[12],
               productID            : csvrow[13],
               category             : csvrow[14],
               subCategory         : csvrow[15],
               productName         : csvrow[16],
               sales                : parseFloat(csvrow[17]),
               quantity             : parseInt(csvrow[18]),
               discount             : parseFloat(csvrow[19]),
               profit               : parseFloat(csvrow[20]),
        
            };
            rData.push(newRecord);
         })
         .on('end', function () {
            resolve(rData)
         })
         .on('error', function (err) {
            reject(err);
         });
   });
}

// This responds with " Nothing" on the homepage
app.get('/', function (req, res) {
   console.log("Host data ready");
   res.send('Your Data Host is Ready!');
})

// Endpoint All Data e.g. http://localhost:8081/allussuperstore
app.get('/allussuperstore', function (req, res) {
   console.log("All US Super Store Data");
   res.send(usSuperStoreData);
})

// Endpoint Query Gender e.g. http://localhost:8081/bysegment/Consumer
app.get('/bysegment/:segment', (req, res) => {
   let segment = req.params.segment;
   const result = usSuperStoreData.filter((usSuperStoreData) => { return usSuperStoreData.segment == segment})
   res.status(200);
   res.type('application/json');
   res.json(result);   
});

// Endpoint Query By Category e.g. http://localhost:8081/bycategory/Furniture
app.get('/bycategory/:category', (req, res) => {
   let category = req.params.category;
   const result = usSuperStoreData.filter((usSuperStoreData) => { return usSuperStoreData.category == category})
   res.status(200);
   res.type('application/json');
   res.json(result);     
});

// Endpoint Query Season e.g. http://localhost:8081/bycustomername/Darrin Van Huff
app.get('/bycustomername/:customername', (req, res) => {   
   let customername = req.params.customername ;
   const result = usSuperStoreData.filter((usSuperStoreData) => { return usSuperStoreData.customerName == customername})
   res.status(200);
   res.type('application/json');
   res.json(result);     
});

// Endpoint Query Promo_Code_Used e.g. http://localhost:8081/byshipmode/Standard Class
app.get('/byshipmode/:shipmode', (req, res) => {   
   let shipmode = req.params.shipmode ;
   const result = usSuperStoreData.filter((usSuperStoreData) => { return usSuperStoreData.shipMode == shipmode})
   res.status(200);
   res.type('application/json');
   res.json(result);     
});

readAllUSSuperStore().then((alldata) => {
   usSuperStoreData = alldata;
   const server = app.listen(8081, 'localhost', () => {
      const host = server.address().address
      const port = server.address().port
      console.log(`Example app listening at http://${host}:${port}`);
   })
}).catch((error) => {
   console.log("Error:", error)
});
// to run the server: node server