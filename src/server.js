const express = require('express');
const app = express();
const cors = require('cors');
const imageRoutes = require('./routes/imageRoutes');
const path = require('path');
require('dotenv').config();

const port = process.env.PORT || 4000;

const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true 
};
app.use(cors(corsOptions));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', imageRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
