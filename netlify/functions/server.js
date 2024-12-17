const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, '../build')));

// Serve the index.html file on the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Wrap the express app as a serverless function
module.exports.handler = serverless(app);
