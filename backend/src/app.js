const express = require('express')
const cors = require('cors')

const fieldserviceRoutes = require('./routes/fieldservice.routes');

const app = express();

app.use(express.json());
app.use(cors())
app.use('/api/fieldservice', fieldserviceRoutes);

module.exports = app;
