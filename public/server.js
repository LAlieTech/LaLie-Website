
// const express = require('express');
// const https = require('http');
// const fs = require('fs');
// const app = express();
// const path = require('path');
// const router = express.Router();
// const port = process.env.PORT || 4000 ;

// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'index.html'));
// });

// app.use('/', router);
// app.listen(port);


//   console.log('Server is running.... Yay!!')


const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "index.html");
  });

app.listen(3000);

console.log('Now the server is running in url: http://127.0.0.1:3000');


