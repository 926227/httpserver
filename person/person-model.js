const mongoose = require('mongoose')const personSchema = new mongoose.Schema({  name: String,  age: String,  hobbies: [String]})module.exports = mongoose.model('Person', personSchema)