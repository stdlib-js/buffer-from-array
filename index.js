// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).array2buffer=t(r.require$$0)}(this,(function(r){"use strict";var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,o=Object.defineProperty,u=Object.prototype,i=u.toString,f=u.__defineGetter__,c=u.__defineSetter__,l=u.__lookupGetter__,a=u.__lookupSetter__;n=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?o:function(r,t,e){var n,o,p,y;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(l.call(r,t)||a.call(r,t)?(n=r.__proto__,r.__proto__=u,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),p="get"in e,y="set"in e,o&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&f&&f.call(r,t,e.get),y&&c&&c.call(r,t,e.set),r};var p=n;function y(r,t,e){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function b(r){return"boolean"==typeof r}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var g,w="function"==typeof Symbol?Symbol.toStringTag:"";g=v()?function(r){var t,e,n,o,u;if(null==r)return d.call(r);e=r[w],u=w,t=null!=(o=r)&&m.call(o,u);try{r[w]=void 0}catch(t){return d.call(r)}return n=d.call(r),t?r[w]=e:delete r[w],n}:function(r){return d.call(r)};var h=g,_=Boolean.prototype.toString;var j=v();function S(r){return"object"==typeof r&&(r instanceof Boolean||(j?function(r){try{return _.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function E(r){return b(r)||S(r)}function B(){return new Function("return this;")()}y(E,"isPrimitive",b),y(E,"isObject",S);var O="object"==typeof self?self:null,T="object"==typeof window?window:null,A="object"==typeof global?global:null;var P=function(r){if(arguments.length){if(!b(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return B()}if(O)return O;if(T)return T;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),x=P.document&&P.document.childNodes,C=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var k,G=/^\s*function\s*([^(]*)/i;y(V,"REGEXP",G),k=Array.isArray?Array.isArray:function(r){return"[object Array]"===h(r)};var L=k;function M(r){return null!==r&&"object"==typeof r}var q=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!L(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(M);function F(r){return M(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function I(r){var t,e,n;if(("Object"===(e=h(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=G.exec(n.toString()))return t[1]}return F(r)?"Buffer":e}y(M,"isObjectLikeArray",q);var R="function"==typeof t||"object"==typeof C||"function"==typeof x?function(r){return I(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?I(r).toLowerCase():t};var U="function"==typeof Buffer?Buffer:null;var $,N=r.Buffer;$=function(){var r,t;if("function"!=typeof U)return!1;try{r=F(t="function"==typeof U.from?U.from([1,2,3,4]):new U([1,2,3,4]))&&1===t[0]&&2===t[1]&&3===t[2]&&4===t[3]}catch(t){r=!1}return r}()?N:function(){throw new Error("not implemented")};var X,z=$,D=(X=z.from,"function"===R(X)),H=Math.floor;function J(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(t=r.length,H(t)===t)&&r.length>=0&&r.length<=9007199254740991;var t}function K(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}return D?function(r){if(!J(r))throw new TypeError(K("08836",r));return z.from(r)}:function(r){if(!J(r))throw new TypeError(K("08836",r));return new z(r)}}));
//# sourceMappingURL=index.js.map
