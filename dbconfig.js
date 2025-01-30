const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url);

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected to the database");
})

db.on('error',(error) => {
    console.log("Error connecting to the database : "+error);
});

module.exports = db;