import express from 'express';
import {getAllTasks, getSingleTask, createTask, updateTask, deleteTask} from '../controllers/tasks.js';

export const taskRouter = express.Router();

taskRouter.get('/', getAllTasks);
taskRouter.get('/:id', getSingleTask);
taskRouter.post('/', createTask);
taskRouter.put('/:id', updateTask);
taskRouter.delete('/:id', deleteTask);
