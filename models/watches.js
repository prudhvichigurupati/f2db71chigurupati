const mongoose = require("mongoose")
const watchesSchema = mongoose.Schema({
    watch_Name: String,
    country: String,
    price: Number
})

module.exports = mongoose.model("watches", watchesSchema)