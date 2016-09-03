var expect = require("chai").expect;
var tools = require("../lib/tools");


describe("Tools", function(){

	describe("calculateAge()", function(){
		it("shoud print the name and age of the person", function(){
			var results = tools.calculateAge({ name: "Waqid", yearBorn: 1988 });
			expect(results).to.equal("Waqid is 28 years old");
		});
	});


	describe("loadOrgWiki()", function(){
		it("load Facebook's wiki page", function(done){
			tools.loadOrgWiki({name: "Facebook"}, function(html){
				expect(html).to.be.ok;
				done();
			});
		});
	});



});




