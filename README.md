# Properties loader for webpack

## Installation

`npm install ...`

## Usage

``` javascript
var json = require("properties!./file.properties");
// => returns file.properties content as json parsed object
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
