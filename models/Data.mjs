import mongoose from 'mongoose'

const { Schema } = mongoose

const dataSchema  = new Schema({
    Title:{
       type : String,
       required: true
    },
})

const Todo = mongoose.model("Todo" , dataSchema)

export default Todo