var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [
	{"id":1,"name":"Chewing Gum","color":"Red"},
	{"id":2,"name":"Pez","color":"Green"},
	{"id":3,"name":"Marshmallow","color":"Pink"},
	{"id":4,"name":"Candy Stick","color":"Blue"}
];

//What would need to go into candies
//in order to pass our first test?


//Get the Candies
router.get('/', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	res.json(candies);
});

// Fill out the rest of the routes here


//Get ONE candy
router.get('/:id', (req, res) => {
	var myCandy = candies.filter((element) => {
		return element.id == req.params.id;
	});
	res.json(myCandy[0]);
});

//Add a candy
router.post('/', function(req, res) {
	candies.push(req.body);
	res.json(candies);

});


//Update
router.put('/:id', function(req, res) {
	var newCandy =req.params.id;
	for (var i= 0; candies.length; i++) {
		if (dnewCandy ==candies[i].id) {
			candies[i].name = req.body.name;
			candies[i].color.body.color;
		}

	}
	res.send("Updated!");
});

//Delete
router.delete('/:id', function(req, res) {
	var deleteCandy = req.params.id;
	for (var i = 0; i < candies.length; i++) {
		if (deleteCandy == candies[i].id) {
			candies.pop(candies[i]);
		}
	}
	res.send("Deleted!");
});



module.exports = router;


