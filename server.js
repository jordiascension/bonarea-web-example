const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/bonarea-web-example'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/bonarea-web-example/index.html'));});
app.listen(process.env.PORT || 8080);