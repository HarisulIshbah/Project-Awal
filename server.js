const express = require('express');
const app = express();

// require connectDB
const connectDB = require('./config/db');

// Dan memanggil Konek database
connectDB();

app.get('/', (req, res) => res.json('API Works!'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`));