const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });


//-------------------------DataBase Configuration-------------------------//
const db = require('./config/mongoose');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

