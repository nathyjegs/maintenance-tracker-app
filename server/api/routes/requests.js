const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Request = require('../models/request');

router.get('/', (req, res, next) => {
	res.status(200).send('Handling GET requests to /requests');
});

router.post('/', (req, res, next) => {
	const request = new Request({
		_id: new mongoose.Types.ObjectId(),
		requestId: req.body.requestId,
		quantity: req.body.quantity
	});
	request.save()
	.then(result => {
		console.log(result);
	})
	.catch(err => console.log(err));
	res.status(201).json({
		message: 'request was created',
		createdRequest: request
	});
});

router.get('/:requestId', (req, res, next) =>{
	const id = req.params.requestId;
	if (id === 'special') {
		res.status(200).json({
			message: 'You just discovered the special ID',
			id: id
		});
	} else {
		res.status(200).json({
			message: 'You passed an ID'
		});
	}
});

router.patch('/:requestId', (req, res, next) => {
	res.status(200).json({
		message: 'Updated request!'
	});
})

router.delete('/:requestId', (req, res, next) => {
	res.status(200).json({
		message: 'deleted request!'
	});
})

module.exports = router;