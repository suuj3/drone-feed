const express = require('express');
const http = require('http');
const { WebSocketServer } = require('ws');
const path = require('path');
const app = express();


const server = http.createServer(app);
const wss = new WebSocketServer({ server });

app.use(express.static(path.join(__dirname, 'public')));

function getRandomData() {
    // Latitude: Random number between -90 and 90 with 5 decimal places
    const latitude = (Math.random() * 180 - 90).toFixed(5);
    // Longitude: Random number between -180 and 180 with 5 decimal places
    const longitude = (Math.random() * 360 - 180).toFixed(5);
    // Altitude: Random number between 0 and 1000 meters with 2 decimal places
    const altitude = (Math.random() * 5000).toFixed(2);
    // Start time: Random past time within the last 30 days
    const pastMillis = Math.random() * 2592000000; // 30 days in milliseconds
    
    const startTime = new Date(Date.now() - pastMillis).toISOString();

    const endTime = new Date(Date.now() + pastMillis).toISOString();

    return { latitude, longitude, altitude, startTime, endTime };
  }

wss.on('connection', (ws) => {
  console.log('Client connected');
  setInterval(() => {
    const data = getRandomData();
    ws.send(JSON.stringify(data));
  }, 800); // Send data every 1 second
});

app.get('/data', (req, res) => {
  res.json(getRandomData());
});

server.listen(4000, () => {
  console.log(`Server is listening on port 4000`);
});
