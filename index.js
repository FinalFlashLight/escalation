const express = require('express');
const cors = require('cors');
const {json} = require('body-parser');
const port = 3000;
const config = require('./server/config');
const app = express();
app.use(cors());
app.use(json());
app.use('/', express.static(__dirname + '/public'));

app.listen(port, function(){
  console.log('listening on port ' + port);
})
