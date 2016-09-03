module.exports = {
	
	calculateAge(person){

		var currentYear = new Date().getFullYear();
		var age = currentYear - person.yearBorn
		return `${person.name} is ${age} years old`;
	}

}