import express from 'express';
import fs from "fs";
import path from "path";

const app = express();
const port = 4000;

// partner data in JSON format
var partners = readPartners();

function readPartners() {
  fs.readFile("backend/data/partners.json", "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    partners = data;
    console.log('Partners read from disk.')
  });
}

function writePartners() {
  fs.writeFile("backend/data/partners.json", JSON.stringify(partners), (error) => {
    if (error) {
      cconsole.log('An error has occurred ', error);
      return;
    }
    console.log('Partners saved to disk.');
  })
}

/* 
  APPLICATION MIDDLEWARE
  This section contains some server configuration.
  You will likely not need to change anything here to meet the requirements.
  (but you are welcome to, if you'd like)
*/

// Parse request bodies as JSON
app.use(express.json());
// Enable CORS for the frontend so it can call the backend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

/*
  APPLICATION ROUTES
*/

// add a partner
app.post('/partners', (req, res) => {
  // logic to add a partner
});

// get all partners
app.get('/partners', (req, res) => {
  res.status(200).send(partners);
});

// get a single partner by id
app.get('/partners/:id', (req, res) => {
  // logic to get a single partner
});

// update a partner
app.put('/partners/:id', (req, res) => {
  // logic to update a partner
});

// delete a partner
app.delete('/partners/:id', (req, res) => {
  // logic to delete a partner
});

// Start the backend
app.listen(port, () => {
  console.log(`Express server starting on port ${port}!`);
});
