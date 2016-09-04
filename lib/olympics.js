var olympicsData = require('../data/olympics');

module.exports = {
	
	getMedalCount(country, complete){
		var c = getCountryDetails(country.name);
		if(c==null){
			console.log("Not found");
			complete(`Country - ${country.name} not found`);
			return false;
		}
		var total_medals = c.gold+c.silver+c.bronze;
		console.log(total_medals);
		complete(`${country.name} won ${total_medals} medals`);
		return true
	}

}

function getCountryDetails(name){
	var i = olympicsData.map(item => item.name).indexOf(name);
	if (i === -1) {
	    return null;
	} else {
	    return olympicsData[i];
	}
}