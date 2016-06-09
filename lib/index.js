var should = require('should');
var jsdom = require('jsdom');
var compare = require('dom-compare').compare;


should.Assertion.add('html', function(expected) {
    this.params = { operator: 'to equal an html string' };

    var source = jsdom.jsdom(this.obj);
    expected = jsdom.jsdom(expected);

    var result = compare(expected, source, {
        stripSpaces: true
    });

    var diff = result.getDifferences();

    if (!result.equals()) {
        throw new Error(diff[0].node + ': ' + diff[0].message);
    }
});
