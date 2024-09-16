import express from 'express';
import cors from 'cors';

import { taskRouter } from './routers/tasks.js';
import { dbConnection } from './db/connection.js';
import { PORT } from '../config.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/tasks', taskRouter);

const main = async () => {
    try{
        await dbConnection();
        app.listen(PORT, () => {
            console.log(`サーバーが http://localhost:${PORT} で起動しました`);
        });
    }catch(err){
        console.error('サーバー起動エラー:', err.message);
        process.exit(1);
    };
};

main();

