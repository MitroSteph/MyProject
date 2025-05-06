import express from 'express';
import config from 'dotenv';
config.config();


const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/login', (req, res) => {
    res.json({
        result: 'ok'
    });
});

app.listen(3000, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('OK');
});