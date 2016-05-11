var should = require('should');
require('../');

describe('should-html', function() {

    it('should correctly compare html (equal)', function() {
        '<div id="test" class="myDiv">Hello World</div>'.should.be.html('<div class="myDiv" id="test">Hello World</div>')
    });

    it('should correctly compare html with withespaces (equal)', function() {
        '<div id="test" class="myDiv">\n\nHello World\n\n</div>'.should.be.html('<div class="myDiv" id="test">Hello World</div>')
    });

    it('should correctly compare html (different)', function() {
        '<div id="test" class="myDiv2">Hello World</div>'.should.not.be.html('<div class="myDiv" id="test">Hello World</div>')
    });

});
