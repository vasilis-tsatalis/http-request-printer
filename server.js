'use strict';
// load npm modules
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
// const body_parser = require('body-parser');
require('dotenv/config');

// Logging function
const accessLogStream = require('./middleware/logging');

const BASE_URL = process.env.BASE_URL || '/api';
const PORT = process.env.PORT || 4445;

const app = express();

app.use(cors());
app.use(express.json({limit: process.env.REQUEST_LIMIT}));
app.use(express.urlencoded({extended: true, limit: process.env.REQUEST_LIMIT}));

// setup the logger - keep access logs file or not
if (process.env.WRITE_ACCESS_LOGS == 'Y') {
  app.use(morgan('combined', { stream: accessLogStream }));  
};

// Routes
app.use(BASE_URL, require("./routes/api"));

//----------HTTP SERVER----------//
const server = app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});