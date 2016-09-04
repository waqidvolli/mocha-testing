var expect = require("chai").expect;

var rewire = require("rewire");
var olympics = rewire("../lib/olympics");

var sinon = require("sinon");

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

		this.console = {
			log: sinon.spy(),
		};

		olympics.__set__("olympicsData", this.testData);	
		olympics.__set__("console", this.console)
	});

	describe("getMedalCount()", function(){
		it("shoud print the total medal count", function(done){
			var _this = this;
			olympics.getMedalCount({ name: "India"}, function(results){

				expect(_this.console.log.callCount).to.equal(1);
				// expect(results).to.equal("India won 2 medals");
				done();

			});
			
		});
	});



});




