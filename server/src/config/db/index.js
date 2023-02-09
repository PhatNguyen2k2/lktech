const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://lktech:like@lktech.5f85s8d.mongodb.net/test');
        console.log('Connected')
    } catch (error) {
        console.log('error')
    }
}

module.exports = { connect }