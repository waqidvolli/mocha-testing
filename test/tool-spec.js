var expect = require("chai").expect;
var tools = require("../lib/tools");
describe("calculateAge()", function(){

	it("shoud print the name and age of the person", function(){

		var results = tools.calculateAge({ name: "Waqid", yearBorn: 1988 });

		expect(results).to.equal("Waqid is 25 years old");

	});

})