var expect = require("chai").expect;

var rewire = require("rewire");
var olympics = rewire("../lib/olympics");

describe("Olympics", function(){

	beforeEach(function(){

		this.testData = [
			{
				"name" : "India",
				"gold" : 0,
				"silver" : 1,
				"bronze" : 1
			}
		];

		olympics.__set__("olympicsData", this.testData);	

	});

	describe("getMedalCount()", function(){
		it("shoud print the total medal count", function(){
			var results = olympics.getMedalCount({ name: "India"});
			expect(results).to.equal("India won 2 medals");
		});
	});



});




