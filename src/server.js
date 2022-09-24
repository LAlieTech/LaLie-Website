
const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT || 3000 ;

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/index.html'));
});

app.use('/', router);
app.listen(port);


  console.log('Server is running.... Yay!!')

