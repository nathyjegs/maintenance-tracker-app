// const Joi = require('joi');
const express = require('express');

const app = express();
app.use(express.json());
const port = (process.env.PORT || 3000);


app.get('/', (req, res) => {
	res.status(200).send('It works!');
});


app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});


module.exports =app;