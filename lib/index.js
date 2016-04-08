var should = require('should');
var pretty = require('pretty');
var himalaya = require('himalaya');
var equal = require('deep-equal');

/*
    Normalize an HTML string

    @param {String} source
    @return {String}
*/
function normalizeHTML(source) {
    source = pretty(source);
    return himalaya.parse(source);
}


should.Assertion.add('html', function(expected) {
    this.params = { operator: 'to equal an html string' };

    var source = normalizeHTML(this.obj);
    expected = normalizeHTML(expected);

    equal(source, expected).should.be.ok();
});
