const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }   
})

const Todo=mongoose.model('todo',todoSchema);

module.exports=Todo;