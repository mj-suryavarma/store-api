const mongoose = require('mongoose');


// const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    name : {
        type : String ,
        required : [true, 'product name must be provided']
    },
    price : {
        type : Number,
        required : [true, 'product price must be provided']
    },
    featured : {
        type : Boolean,
        default : false,
    },
    reating : {
        type : Number,
        default : 4.6
    },
    createdAt : {
        type : Date,
        default : Date.now(),
    },
    company : {
        type : String,
        enum: {
            values : ['ikea', 'liddy', 'caressa', 'marcos'],
            message : '{VALUE} is not supported',
        },
        // enum : ['ekia', 'liddy', 'caressa', 'marcos'],

    },

})

module.exports = mongoose.model('product',productSchema);
