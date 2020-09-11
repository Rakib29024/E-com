
require('dotenv').config();

module.exports={
    APP : process.env.APP_NAME,
    KEY : process.env.APP_KEY,
    DB : process.env.APP_DATABASE,
    PORT : process.env.APP_PORT,
};