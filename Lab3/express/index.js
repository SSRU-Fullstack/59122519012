const express = require('express');
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var userRoute = require('./route/users')
app.use('/users', userRoute)


app.get('/', (req, res) => {
     res.redirect('/eiei');
});

app.get('/bye', (req, res) => {
    res.send("Good bye");
    //  res.json({
    //      "eiei" : "123456",
    //     "names" : [
    //         'singha',"pee","koa"
    //     ]
    //  });
});

app.listen(555, () => {
    console.log(`Server started on port 3000`);
});

