
const express = require('express');
const cors = require('cors');
const app=express(
    
)
const webRoutes = require('./PhotoUpload');

app.use(cors());
app.use(webRoutes);

app.listen(5000, () => console.log("Running on Port 5000"))
