const express = require('express');
var bodyParser = require('body-parser');
var keycloak = require('keycloak-connect');

const app = express();
const port = process.env.PORT || 8080;
const www = process.env.WWW || './';

app.use(express.static(www));

console.log(`serving ${www}`);

app.get('*', (req, res) => {
    res.send('Service Up!');
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
