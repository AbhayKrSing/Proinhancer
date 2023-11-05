const mongoose = require('mongoose')

const connectmongo = async () => {
    try {
        await mongoose.connect('mongodb+srv://kabhay849:tF3fPnlmdLeodXsh@cluster0.ynob7gq.mongodb.net/?retryWrites=true&w=majority');
        console.log("connected to db")
    }
    catch (error) {
        console.log(error.message)
    }
}
module.exports = connectmongo