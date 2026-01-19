const mongoose = require('mongoose');

function connectTodb() {
    
    mongoose.connect(`mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PWD}@mongo:27017/DockerLearn?authSource=admin`)
    .then(() => {
        console.log(" DB connected to Node.js (Docker MongoDB)");
    })
    .catch((error) => {
        console.log(" Failed to connect database:", error.message);
    });
}

module.exports = connectTodb;