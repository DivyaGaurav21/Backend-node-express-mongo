
const mongoose = require('mongoose')

//-----------------code for configure mongodb by mongoose-----------------------//
mongoose.set('strictQuery', false);
async function mongoconfig() {
    await mongoose.connect("mongodb://127.0.0.1:27017/social_media");
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