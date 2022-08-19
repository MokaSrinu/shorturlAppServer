const mongoose = require('mongoose')

async function connectDatabase() {
    const dbUri = "mongodb+srv://SrinuMoka:OqjIrK6OafEvTOk1@cluster0.rdtayns.mongodb.net/shorturlapp?retryWrites=true&w=majority"

    try {
        await mongoose.connect(dbUri)
        console.log('Connected to Database');
    } catch (error) {
        console.log('Error connecting to database')
        throw error
    }
}

module.exports = connectDatabase;