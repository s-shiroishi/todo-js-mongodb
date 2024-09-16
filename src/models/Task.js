import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'タスク名を入力してください。'],
        min: 5,
        max: 20
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date().toISOString()
    }
});

export const Task = mongoose.model('tasks', taskSchema);