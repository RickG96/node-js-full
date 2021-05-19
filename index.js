var express = require('express');
var app = express();
const port = 3000;

app.use((req, res, next) => {
    res.status(404).send('Sorry cant find that!');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`);
});