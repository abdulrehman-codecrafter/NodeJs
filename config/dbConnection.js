const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        console.log(process.env.DB_URL)
        await mongoose.connect(process.env.DB_URL)
        console.log('Database connected')
    }
    catch (err) {
        console.log("error connecting to database", err)
    }
    
}

module.exports = dbConnection;