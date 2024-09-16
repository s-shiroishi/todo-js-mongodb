import mongoose from 'mongoose';
import { MONGODB_URI } from '../../config.js';

export const dbConnection = async () => {
    try{
        await mongoose.connect(MONGODB_URI);
        console.log('データベース接続中');
    }catch(err){
        console.error('データベース接続エラー:', err.message);
        throw err;
    };
};