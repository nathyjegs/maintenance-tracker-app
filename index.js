import Joi from 'joi';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './server/routes/';
import requests from './server/models/requests.js';



const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = (process.env.PORT || 3000);

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Maintenance Tracker API'
	});
});

// // app.get('*', (req, res) => {
// // 	res.status(404).json({
// // 		error: "The resource you're looking for is not available"
// // 	});
// // });

// app.get('/api/requests', (req, res) => {
// 	res.send(requests);
// });

// app.get('/api/requests/:id', (req, res) => {
// 	const request = requests.find(r => r.id === parseInt(req.params.id));
// 	if (!request) return res.status(404).send("The resource you're looking for is not available");
// 	res.send(request)
// });

// app.post('/api/requests', (req, res) => {
// 	// validate
// 	const { error } = validateRequest(req.body); 

// 	// if invalid return 400
// 	if (error) return res.status(400).send(error.details[0].message); //400 Bad request
// 	const request = {
// 		id: requests.length + 1,
// 		name: req.body.name
// 	};
// 	requests.push(request);
// 	res.send(request);
// });

// app.put('/api/requests/:id', (req, res) => {
// 	// look up the request
// 	const request = requests.find(r => r.id === parseInt(req.params.id));
// 	// doesn't exist? return 404
// 	if (!request) return res.status(404).send("The request with the give ID is invalid");

// 	// validate
// 	const { error } = validateRequest(req.body); 

// 	// if invalid return 400
// 	if (error) return res.status(400).send(error.details[0].message);
// 	//update request
// 	request.name = req.body.name;
// 	// return updated request
// 	res.send(request)

// });

// app.delete('/api/requests/:id', (req, res) => {
// 	// find the request
// 	const request = requests.find(r => r.id === parseInt(req.params.id));

// 	// 404, if not existing
// 	if (!request) return res.status(404).send("The request with the give ID is invalid");

// 	// delete
// 	const index = requests.indexOf(request);
// 	requests.splice(index, 1)
// 	// return the deleted request
// 	res.send(request)
// })

// function validateRequest(request) {
// 	const schema = {
// 		name: Joi.string().min(3).required()
// 	};
// 	return Joi.validate(request, schema);
// }



app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

export default app;