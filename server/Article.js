const { Schema, model } = require('mongoose')

const Article = new Schema({
    _id: String,
    data: Object,

}, { timestamps: true })

module.exports = model('Article', Article)