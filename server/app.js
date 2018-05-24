// const Joi = require('joi');
const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');

const requestRoutes = require('./api/routes/requests');

mongoose.connect('mongodb+srv://server1:' + process.env.MONGO_ATLAS_PW + 
	'@server-jbfht.mongodb.net/test?retryWrites=true')


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 
		"Origin, X-Requested-With, Content-Type, Accept, Authorization");
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE')
		return res.status(200).json({});
	}
	next();
})

// lll
app.use('/requests', requestRoutes);

app.use((req, res, next) => {
	const error = new Error('Not found');
	error.status = 404;
	next(error);
})

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	})
})


// const requestRoutes = require('./api/routes/requests')


// app.get('/', (req, res) => {
// 	res.status(200).send('It works!');
// });


// app.listen(port, () => {
// 	console.log(`Listening on port ${port}`);
// });


module.exports =app;