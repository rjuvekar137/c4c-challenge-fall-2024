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
    partners = JSON.parse(data);
    console.log('Partners read from disk.')
  });
}

function writePartners() {
  fs.writeFile("backend/data/partners.json", JSON.stringify(partners, null, 4), (error) => {
    if (error) {
      cconsole.log('An error has occurred ', error);
      return;
    }
    console.log('Partners saved to disk.');
  })
}

function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
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

app.get('/', (req, res) => {
  res.status(200).send(partners);
});

// add a partner
app.post('/partners', (req, res) => {
  const {thumbnailUrl, name, description, active} = req.body;
  if (!name || !thumbnailUrl || !description) {
    return res.status(400).send('Missing information for partner');
  }

  const id = generateUUID();
  const newPartner = {thumbnailUrl, name, description, active};
  partners[id] = newPartner;
  writePartners()
  console.log("Added new partner: "+id)
  newPartner["id"] = id;
  res.status(201).send(newPartner);
});

// get all partners
app.get('/partners', (req, res) => {
  res.status(200).send(partners);
});

// get a single partner by id
app.get('/partners/:id', (req, res) => {
  var id = req.params.id
  if ( !partners[id] ) {
    return res.status(400).send('Partner not found: '+id);
  }
  res.status(200).send(partners[id]);
});

// update a partner
app.put('/partners/:id', (req, res) => {
  var id = req.params.id
  if ( !partners[id] ) {
    return res.status(400).send('Partner not found: '+id);
  }
  const {thumbnailUrl, name, description, active} = req.body;
  if (!name || !thumbnailUrl || !description) {
    return res.status(400).send('Missing information for partner');
  }
  const newPartner = {thumbnailUrl, name, description, active};
  partners[id] = newPartner;
  writePartners()
  console.log("Updated partner: "+id)
  res.status(200).send(newPartner);
});

// delete a partner
app.delete('/partners/:id', (req, res) => {
  var id = req.params.id
  partners[id] = null
  delete partners[id]
  writePartners()
  console.log('Deleted partner: '+id)
  res.status(204).send(partners);
});

// Start the backend
app.listen(port, () => {
  console.log(`Express server starting on port ${port}!`);
});
