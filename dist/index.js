"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(v){throw (e=0, v)}};};var o=i(function(A,a){
var l=require('@stdlib/assert-is-function/dist'),c=require('@stdlib/buffer-ctor/dist'),q=l(c.from);a.exports=q
});var s=i(function(C,t){
var m=require('@stdlib/assert-is-collection/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),y=require('@stdlib/buffer-ctor/dist');function w(r){if(!m(r))throw new TypeError(p('0GJ2u',r));return y.from(r)}t.exports=w
});var n=i(function(E,f){
var b=require('@stdlib/assert-is-collection/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),x=require('@stdlib/buffer-ctor/dist');function h(r){if(!b(r))throw new TypeError(d('0GJ2u',r));return new x(r)}f.exports=h
});var B=o(),g=s(),j=n(),u;B?u=g:u=j;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
