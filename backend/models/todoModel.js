import mongoose, {} from "mongoose";
const {ObjectId} = mongoose.Schema.Types;

const TodosSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    postedBy: {
        type: ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

const Todos = mongoose.model('Todos', TodosSchema);

export default Todos;