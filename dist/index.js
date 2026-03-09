"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=i(function(k,a){
var v=require('@stdlib/assert-is-function/dist'),l=require('@stdlib/buffer-ctor/dist'),c=v(l.from);a.exports=c
});var s=i(function(A,t){
var q=require('@stdlib/assert-is-collection/dist'),m=require('@stdlib/error-tools-fmtprodmsg/dist'),p=require('@stdlib/buffer-ctor/dist');function y(r){if(!q(r))throw new TypeError(m('0GJ2u',r));return p.from(r)}t.exports=y
});var n=i(function(C,f){
var w=require('@stdlib/assert-is-collection/dist'),b=require('@stdlib/error-tools-fmtprodmsg/dist'),d=require('@stdlib/buffer-ctor/dist');function x(r){if(!w(r))throw new TypeError(b('0GJ2u',r));return new d(r)}f.exports=x
});var h=o(),B=s(),g=n(),u;h?u=B:u=g;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
