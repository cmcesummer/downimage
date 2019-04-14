const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.send('wangtao\'s files');
});

app.listen(2019, () => {
    console.log('open')
});

