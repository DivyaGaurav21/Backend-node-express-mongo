const mongoose = require('mongoose')
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


module.exports = db;