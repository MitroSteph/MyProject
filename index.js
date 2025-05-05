import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/login', (req, res) => {
    res.json();
});

app.listen(4000, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('OK');
});

