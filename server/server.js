const express = require('express');
const bodyParser = require('body-parser');
var io = require('socket.io');

const app = express();
// const router = app.Router();
const PORT = 3001;
// const db = require('./db/db');
const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

//todo change name if necessary

app.get('/', (req, res) => {    
    res.send('hello');
});

// router

//todo how to include two routes here ( / , /enter ) 

//todo create models

//todo seperate route module
// router.post('/enter', (req, res) => {

// });



//get all active users
// app.get('/users/', (req, res) => {
//     console.log('yo');
// });
// //add a user
// router.post('users/', () => {});
// //get user
// router.get('users/:id', () => {});
// //update user
// router.put('/users/:id', () => {});



//todo room managment
// app.use('api', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));