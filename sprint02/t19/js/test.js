'use strict';
  
describe("checkBrackets", function() {

    it("search missing `)`", function() {
        assert.equal(checkBrackets("()((()))(()"), 1);
        assert.equal(checkBrackets("()"), "ok");
        assert.equal(checkBrackets("(((("), 4);
        assert.equal(checkBrackets("))"), 2);
        assert.equal(checkBrackets("()()()()))))"), 4);
        assert.equal(checkBrackets("((((((((("), 9);
    });
    it("ssffdsdsffsdfsd `)`", function() {
        assert.equal(checkBrackets("()((()))(()"), 2);
        assert.equal(checkBrackets("()"), "ok");
        assert.equal(checkBrackets("(((("), 4);
        assert.equal(checkBrackets("))"), 3);
        assert.equal(checkBrackets("()()()()))))"), 4);
        assert.equal(checkBrackets("((((((((("), 9);
    });


});