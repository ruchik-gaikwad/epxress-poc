const express = require('express');
const app = express();
const activity = require('./api/activity/index');

app.use('/api/v1', activity)

app.get('/', function(res, res) {
    res.send({
        data: {
            "hello": "world"
        }
    })
})

app.listen(process.env.QWERTY || '8000', function() {
    console.log('i am running on ', process.env.QWERTY)
})