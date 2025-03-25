import Todos from "../models/todoModel.js";

const todoController = {
    createTodo: async (req, res) => {
        try {
            const { text } = req.body

            if (!text) return res.status(400).json({ message: 'please enter all fields' })

            const newTodo = await Todos({ text, postedBy: req.user }).populate('postedBy', '-password')

            await newTodo.save();

            return res.status(201).json({ message: 'Todo created successfully.', data: newTodo })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    deleteTodo: async (req, res) => {
        try {
            const { todoId } = req.params;

            const todo = await Todos.find({ todoId });
            if (!todo) return res.status(400).json({ message: 'Todo not found' });

            const deletedAuth = await Todos.findByIdAndDelete(todo);

            return res.status(200).json({ msg: 'Todo deleted successfully', deletedAuth })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    editTodo: async (req, res) => {
        try {

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    getAllTodo: async (req, res) => {
        try {
            const todos = await Todos.find().sort({ createdAt: -1 }).populate('postedBy', '-password')
            return res.status(200).json({ message: 'My todos', todos });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    getMyTodo: async (req, res) => {
        try {
            const todos = await Todos.find({postedBy: req.user._id}).sort({ createdAt: -1 }).populate('postedBy', '-password')
            return res.status(200).json({ message: 'My todos', todos });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
}

export default todoController;