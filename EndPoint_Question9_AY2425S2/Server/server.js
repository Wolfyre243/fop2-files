const express = require('express');
const fs      = require('fs');
const app     = express();
const parse   = require("csv-parse").parse;

app.use(express.json());

let population2023;

async function readPopulation() {
   const promise = () => new Promise((resolve, reject) => {
      const rData = [];

      fs.createReadStream(".\\Server\\data\\2023_population.csv")
         .pipe(parse({ delimiter: ',' }))
         .on('data', function (csvrow) {
            rData.push(csvrow);
         })
         .on('end', function () {
            resolve(rData)
         })
         .on('error', function (err) {
            reject(err);
         });
   });

   population2023 = await promise();
   population2023 = population2023
      .map(([Country,Region,Population,AreaPerSqm,PopDensityPerSqm,GDPpercapital,LiteracyPercent]) => ({
         Country: Country.trim(),Region: Region.trim(),Population,AreaPerSqm,PopDensityPerSqm,GDPpercapital,LiteracyPercent
      }));
   // Remove first row
   population2023.shift();
   return "done";
}

// Query by Town
function getAllData() {
   return population2023;
}

// Query by Town
function getCountry() {
   let qetAllCountry = (population2023) => {
      let unique_country = [
         ...new Set(population2023.map((element) => element.Country)),
      ];
      return unique_country;
   };
   qCountry = qetAllCountry(population2023)
   return qCountry;
}

// Query by Brand
function qryByCountry(qcountry) {
   let dcountry = population2023.filter(data => data.Country.toLowerCase() == qcountry.toLowerCase());
   return dcountry;
}

// -------------------------------------------------------------------------------
// This responds on the homepage
app.get('/', function (req, res) {
   console.log("End Point Host");
   res.send('Endpoint Data Host!');
})

// This responds a POST request for the homepage e.g. http://localhost:8081/allpopulationdata
app.get('/allpopulationdata', function (req, res) {
   allPData = getAllData();
   res.status(200).json(allPData);
})

// Endpoint Phone Brand e.g. http://localhost:8081/getcountry
app.get('/getcountry', function (req, res) {
   country = getCountry().sort();
   res.status(200).json(country);
})

// Endpoint Query Model by Brand e.g. http://localhost:8081/qrycountry/China 
app.get('/qrycountry/:country', (req, res) => {
   let qCountry = req.params.country ;	

   console.log(qCountry);
   let bycountry = qryByCountry(qCountry);
   res.status(200).json(bycountry);
});

readPopulation().then((status)=> {
   console.log(status);
   let server = app.listen(8081, function () {
      let host = server.address().address
      let port = server.address().port
      console.log("Example app listening at http://localhost:" + port);
   })
});