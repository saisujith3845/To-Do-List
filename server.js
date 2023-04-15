import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import path from 'path';

const app = express();

dotenv.config();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);


app.use(express.static(path.join('./client/build')));

app.get("*",function(req,res){
    res.sendFile(path.join('./client/build/index.html'));
});

Connection();

app.listen(process.env.PORT || 8000, () => console.log(`Your server is running successfully on PORT `));