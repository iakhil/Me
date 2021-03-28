const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser")
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.get("/", function(req, res)
{
	const url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

https.get(url, function(response){

	console.log(response.statusCode);
	response.on("data", function(data){
		const fact = JSON.parse(data).joke;
		console.log(fact);

	res.render("disp", {x: fact})
	});
})

})

app.get("/", function(req, res) {
	res.render("disp");
})




app.listen(3000, function(req, res){
	console.log("Server is up!");
})