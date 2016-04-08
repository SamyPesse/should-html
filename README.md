# should-html

> HTML testing assertion for should.js.

### Installation

```
$ npm install should-html --save-dev
```

### Example

```js
var should = require('should');
require('should-html');

it('should return valid html', function() {
    '<div id="test" class="myDiv">Hello World</div>'.should.be.html('<div class="myDiv" id="test">Hello World</div>');
});
```