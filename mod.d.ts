/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="node"/>
/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@main/index.d.ts"/>

import { Buffer } from 'buffer';
import { Collection } from '@stdlib/types/array';

/**
* Allocates a buffer using an octet array.
*
* @param arr - octet array
* @returns new `Buffer` instance
*
* @example
* var fromArray = require( `@stdlib/buffer/from-array` );
*
* var buf = fromArray( [ 1, 2, 3, 4 ] );
* // returns <Buffer>
*/
declare function fromArray( arr: Collection<number> ): Buffer;


// EXPORTS //

export = fromArray;