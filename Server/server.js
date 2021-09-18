const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3000;//Nodemon
app.use(cors());

let rawdata = fs.readFileSync('data.json');
let students = JSON.parse(rawdata);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/obtenerEstudiantes', function (req, res) {
	res.send(students);
});

app.post('/data', function (req, res) {
	let alumno = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		avatar: req.body.avatar
	}
	console.log(alumno);
	res.send(200);
});

app.listen(port, function() {
	console.log("Servidor escuchando en http://localhost:"+port);
});