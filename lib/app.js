'use strict'

// Dependencies
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');

// Create server
const app = express();

// Disable  x powered
app.disable('x-powered-by');

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

module.exports = app;