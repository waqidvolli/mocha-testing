var https = require('https');

module.exports = {
	
	calculateAge(person){

		var currentYear = new Date().getFullYear();
		var age = currentYear - person.yearBorn;
		return `${person.name} is ${age} years old`;
	},

	loadOrgWiki(org, callback){

		var url = `https://en.wikipedia.org/wiki/${org.name}`;
		https.get(url, function(res){
			var body = '';

			res.setEncoding('UTF-8');

			res.on('data', function(chunk){
				body+=chunk;
			});

			res.on('end', function(){
				callback(body);
			});

		});

	}

}