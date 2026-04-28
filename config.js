const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=471fa0153e6c68cc",
    ALIVE_IMG : process.env.ALIVE_IMG  || "",
    ALIVE_MSG : process.env.ALIVE_MSG  || "pakaya",
};
