const express = require('express');
const basicAuth = require('basic-auth-connect');

const app = express();

const username = process.env.BASIC_AUTH_USERNAME;
const password = process.env.BASIC_AUTH_PASSWORD;

if (username && password) {
  app.use(basicAuth(username, password));
}

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/html' + req.url, function (err) {
        res.status(404);
        res.end('Not Found! : ' + req.path);
    });
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
