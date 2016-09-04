var expect = require("chai").expect;
var tools = require("../lib/tools");
var nock = require("nock");

describe("Tools", function(){

	describe("calculateAge()", function(){
		it("shoud print the name and age of the person", function(){
			var results = tools.calculateAge({ name: "Waqid", yearBorn: 1988 });
			expect(results).to.equal("Waqid is 28 years old");
		});
	});


	describe("loadOrgWiki()", function(){


		before(function(){

			nock("https://en.wikipedia.org").get("/wiki/Facebook").reply(200,"Facebook wiki page");

		});

		it("load Facebook's wiki page", function(done){
			tools.loadOrgWiki({name: "Facebook"}, function(html){
				// expect(html).to.be.ok;
				expect(html).to.equal("Facebook wiki page");
				done();
			});
		});
	});



});




