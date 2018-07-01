const port = require('../config/config').PORT;
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
require('colors');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    res.send('Hellos World')
});
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    res.status(200).json({
        id,
        persona: body
    });
});

app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined || (typeof body.nombre !== 'string')) {
        res.status(400).json({
            status: '400',
            message: 'No introduciste un nombre valido'
        });
    } else {
        res.status(200).json({
            persona: body
        });
    }
});

app.delete('/usuario/:id', (req, res) => {
    res.send('Hellos World')
});

app.listen(port, () => {
    console.log('Servidor ejecutado en el puerto '.magenta + port);
});