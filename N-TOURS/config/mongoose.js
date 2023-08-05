const mongoose = require('mongoose');

const fs = require('fs');
const Tour = require('../models/tourModel')

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

//---------------------------code for configure mongodb by mongoose-------------------------------//
mongoose.set('strictQuery', false);
async function mongoconfig() {
    // await mongoose.connect(process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD));
    await mongoose.connect(process.env.DATABASE_LOCAL);
}
mongoconfig().catch(err => console.log(err));

const db = mongoose.connection;
// if error then pritnt message
db.on('error', console.error.bind(console, 'error in connectin DB'));
// server is up then run a message 
db.once('open', () => {
    console.log('Succesfully !! Connected to the DataBase');
})



// const tours = fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json` , 'utf-8');
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

const importData = async () => {
    try {
        await Tour.create(tours);
        console.log("successfully data is imported from file")
    } catch (err) {
        console.log(err);
    }
}

//delete all data in document
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log("Deleted all data in document")
    } catch (err) {
        console.log(err);
    }
}

importData();

module.exports = db;