import { Task } from "../models/Task.js";

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({});
        res.json(tasks);
    }catch(err){
        console.error(err.message);
    };
};

const getSingleTask = async (req, res) => {
    try{
        const task = await Task.findById(req.params.id).exec();
        res.json(task);
    }catch(err){
        console.error(err.message);
    };
};

const createTask = async (req, res) => {
    try{
        const newTask = await Task.create({
            name: req.body.name
        });
        res.json(newTask);
    }catch(err){
        console.error(err.message);
    };
};

const updateTask = async (req, res) => {
    try{
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            {name: req.body.name, completed: req.body.completed},
            {new: true}
        );
        res.json(task);
    }catch(err){
        console.error(err.message);
    };
};

const deleteTask = async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(
            req.params.id
        );
        res.json(task);
    }catch(err){
        console.error(err.message);
    };
};

export {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
};