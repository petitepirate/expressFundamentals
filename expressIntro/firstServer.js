const express = require('express');

const app = express();


//this will go at the very bottom of your file
app.listen(3000, function() {
    console.log('App on port 3000')
})
