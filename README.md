<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# array2buffer

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Allocate a [buffer][@stdlib/buffer/ctor] using an octet array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/buffer-from-array
```

</section>

<section class="usage">

## Usage

```javascript
var array2buffer = require( '@stdlib/buffer-from-array' );
```

#### array2buffer( arr )

Allocates a [buffer][@stdlib/buffer/ctor] using an `array` (or array-like `object`) of octets.

```javascript
var buf = array2buffer( [ 1, 2, 3, 4 ] );
// returns <Buffer>[ 1, 2, 3, 4 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array2buffer = require( '@stdlib/buffer-from-array' );

var octets;
var buf;
var str;
var i;

// Define a string we want to convert to a buffer:
str = 'this is a string.';

// Manually convert the string to an array of octets...
octets = new Array( str.length );
for ( i = 0; i < str.length; i++ ) {
    octets[ i ] = str.charCodeAt( i ) % 256;
}

// Create a buffer from the octet array:
buf = array2buffer( octets );
console.log( buf.toString() );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/buffer-from-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/buffer-from-array

[test-image]: https://github.com/stdlib-js/buffer-from-array/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/buffer-from-array/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/buffer-from-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/buffer-from-array?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/buffer-from-array
[dependencies-url]: https://david-dm.org/stdlib-js/buffer-from-array/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/buffer-from-array/main/LICENSE

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer-ctor

</section>

<!-- /.links -->
