# undefined-killer

Simple solution to this problem: `TypeError: Cannot set property 'x' of undefined`
You'll be able to set the properties of the specified path even if it did not exist.

## Getting Started
```javascript
var uk = require('undefined-killer');
```

## Example
```javascript
var tmpObject = { "a": { "b": 123 } };
tmpObject.setProperty('a.b.c.d', { e: [1,2,3] });
console.log(JSON.stringify(tmpObject));
```

## License

MIT License

Copyright (C) 2015 Andrii Kolomiichenko (bboywilld@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
