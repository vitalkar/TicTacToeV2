const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

routes.get('/users', () => {

});

routes.post('/users', (req, res) => {
    console.log(req.body);

    //save new user to db
});

routes.get('/rooms', () => {

});

routes.post('/rooms', () => {

});


module.exports = routes;