var should = require('should');
var jsdom = require('jsdom');
var compare = require('dom-compare').compare;

should.Assertion.add('html', function(expected) {
    this.params = { operator: 'to equal an html string' };

    var source = jsdom.jsdom(this.obj);
    expected = jsdom.jsdom(expected);

    var result = compare(source, expected, {
        stripSpaces: true
    });

    result.getResult().should.be.ok();
});
