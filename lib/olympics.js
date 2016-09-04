var olympicsData = require('../data/olympics');

module.exports = {
	
	getMedalCount(country){
		var c = getCountryDetails(country.name);
		if(c==null){
			return `Country - ${country.name} not found`;
		}
		var total_medals = c.gold+c.silver+c.bronze;
		return `${country.name} won ${total_medals} medals`;
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