"use strict";(self.webpackChunkimage_effects=self.webpackChunkimage_effects||[]).push([[235],{235:(e,n,t)=>{t.a(e,(async(e,r)=>{try{t.r(n),t.d(n,{__wbg_log_7bb108d119bafbc1:()=>c.UO,__wbg_set_wasm:()=>c.oT,__wbindgen_object_drop_ref:()=>c.ug,__wbindgen_string_new:()=>c.h4,__wbindgen_throw:()=>c.Or,grayscale:()=>c.se});var o=t(530),c=t(838),_=e([o]);o=(_.then?(await _)():_)[0],(0,c.oT)(o),r()}catch(e){r(e)}}))},838:(e,n,t)=>{let r;function o(e){r=e}t.d(n,{Or:()=>T,UO:()=>m,h4:()=>y,oT:()=>o,se:()=>h,ug:()=>p}),e=t.hmd(e);let c=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();let _=null;function i(){return null!==_&&0!==_.byteLength||(_=new Uint8Array(r.memory.buffer)),_}function u(e,n){return c.decode(i().subarray(e,e+n))}const d=new Array(128).fill(void 0);d.push(void 0,null,!0,!1);let f=d.length;function l(e){return d[e]}let a=0,g=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const s="function"==typeof g.encodeInto?function(e,n){return g.encodeInto(e,n)}:function(e,n){const t=g.encode(e);return n.set(t),{read:e.length,written:t.length}};let b=null;function w(){return null!==b&&0!==b.byteLength||(b=new Int32Array(r.memory.buffer)),b}function h(e){try{const o=r.__wbindgen_add_to_stack_pointer(-16),c=function(e,n,t){if(void 0===t){const t=g.encode(e),r=n(t.length);return i().subarray(r,r+t.length).set(t),a=t.length,r}let r=e.length,o=n(r);const c=i();let _=0;for(;_<r;_++){const n=e.charCodeAt(_);if(n>127)break;c[o+_]=n}if(_!==r){0!==_&&(e=e.slice(_)),o=t(o,r,r=_+3*e.length);const n=i().subarray(o+_,o+r);_+=s(e,n).written}return a=_,o}(e,r.__wbindgen_malloc,r.__wbindgen_realloc),_=a;r.grayscale(o,c,_);var n=w()[o/4+0],t=w()[o/4+1];return u(n,t)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(n,t)}}function y(e,n){return function(e){f===d.length&&d.push(d.length+1);const n=f;return f=d[n],d[n]=e,n}(u(e,n))}function p(e){!function(e){const n=l(e);(function(e){e<132||(d[e]=f,f=e)})(e)}(e)}function m(e){console.log(l(e))}function T(e,n){throw new Error(u(e,n))}},530:(e,n,t)=>{var r=t(838);e.exports=t.v(n,e.id,"c87978e9fd4dfb6e01f3",{"./index_bg.js":{__wbindgen_string_new:r.h4,__wbindgen_object_drop_ref:r.ug,__wbg_log_7bb108d119bafbc1:r.UO,__wbindgen_throw:r.Or}})}}]);