!function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function s(e){return document.createElement(e)}function l(e){return document.createTextNode(e)}function d(){return l(" ")}function f(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e){return""===e?void 0:+e}function v(e,t){t=""+t,e.data!==t&&(e.data=t)}function g(e,t){(null!=t||e.value)&&(e.value=t)}let h;function y(e){h=e}const w=[],b=[],x=[],T=[],$=Promise.resolve();let M=!1;function E(e){x.push(e)}let _=!1;const I=new Set;function k(){if(!_){_=!0;do{for(let e=0;e<w.length;e+=1){const t=w[e];y(t),j(t.$$)}for(w.length=0;b.length;)b.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];I.has(t)||(I.add(t),t())}x.length=0}while(w.length);for(;T.length;)T.pop()();M=!1,_=!1,I.clear()}}function j(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const S=new Set;function O(e,t){-1===e.$$.dirty[0]&&(w.push(e),M||(M=!0,$.then(k)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function A(i,a,u,s,l,d,f=[-1]){const p=h;y(i);const m=a.props||{},v=i.$$={fragment:null,ctx:null,props:d,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:f};let g=!1;if(v.ctx=u?u(i,m,(e,t,...n)=>{const r=n.length?n[0]:t;return v.ctx&&l(v.ctx[e],v.ctx[e]=r)&&(v.bound[e]&&v.bound[e](r),g&&O(i,e)),t}):[],v.update(),g=!0,r(v.before_update),v.fragment=!!s&&s(v.ctx),a.target){if(a.hydrate){const e=function(e){return Array.from(e.childNodes)}(a.target);v.fragment&&v.fragment.l(e),e.forEach(c)}else v.fragment&&v.fragment.c();a.intro&&((w=i.$$.fragment)&&w.i&&(S.delete(w),w.i(b))),function(e,n,i){const{fragment:a,on_mount:u,on_destroy:c,after_update:s}=e.$$;a&&a.m(n,i),E(()=>{const n=u.map(t).filter(o);c?c.push(...n):r(n),e.$$.on_mount=[]}),s.forEach(E)}(i,a.target,a.anchor),k()}var w,b;y(p)}const R=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,q=new WeakMap;var L;const N=((e,t)=>n=>{const r=t.get(n);let o=void 0===r?n.size:r<1073741824?r+1:0;if(!n.has(o))return e(n,o);if(n.size<536870912){for(;n.has(o);)o=Math.floor(1073741824*Math.random());return e(n,o)}if(n.size>R)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;n.has(o);)o=Math.floor(Math.random()*R);return e(n,o)})((L=q,(e,t)=>(L.set(e,t),t)),q);let D=null;const P=((e,t)=>()=>{if(null!==D)return D;const n=new Blob([t],{type:"application/javascript; charset=utf-8"}),r=URL.createObjectURL(n);return D=e(r),D.setTimeout(()=>URL.revokeObjectURL(r),0),D})(e=>{const t=new Map([[0,()=>{}]]),n=new Map([[0,()=>{}]]),r=new Map,o=new Worker(e);o.addEventListener("message",({data:e})=>{if(void 0!==(o=e).method&&"call"===o.method){const{params:{timerId:o,timerType:i}}=e;if("interval"===i){const e=t.get(o);if("number"==typeof e){const t=r.get(e);if(void 0===t||t.timerId!==o||t.timerType!==i)throw new Error("The timer is in an undefined state.")}else{if(void 0===e)throw new Error("The timer is in an undefined state.");e()}}else if("timeout"===i){const e=n.get(o);if("number"==typeof e){const t=r.get(e);if(void 0===t||t.timerId!==o||t.timerType!==i)throw new Error("The timer is in an undefined state.")}else{if(void 0===e)throw new Error("The timer is in an undefined state.");e(),n.delete(o)}}}else{if(!(e=>null===e.error&&"number"==typeof e.id)(e)){const{error:{message:t}}=e;throw new Error(t)}{const{id:o}=e,i=r.get(o);if(void 0===i)throw new Error("The timer is in an undefined state.");const{timerId:a,timerType:u}=i;r.delete(o),"interval"===u?t.delete(a):n.delete(a)}}var o});return{clearInterval:e=>{const n=N(r);r.set(n,{timerId:e,timerType:"interval"}),t.set(e,n),o.postMessage({id:n,method:"clear",params:{timerId:e,timerType:"interval"}})},clearTimeout:e=>{const t=N(r);r.set(t,{timerId:e,timerType:"timeout"}),n.set(e,t),o.postMessage({id:t,method:"clear",params:{timerId:e,timerType:"timeout"}})},setInterval:(e,n)=>{const r=N(t);return t.set(r,()=>{e(),"function"==typeof t.get(r)&&o.postMessage({id:null,method:"set",params:{delay:n,now:performance.now(),timerId:r,timerType:"interval"}})}),o.postMessage({id:null,method:"set",params:{delay:n,now:performance.now(),timerId:r,timerType:"interval"}}),r},setTimeout:(e,t)=>{const r=N(n);return n.set(r,e),o.postMessage({id:null,method:"set",params:{delay:t,now:performance.now(),timerId:r,timerType:"timeout"}}),r}}},'!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return d}));const r=new Map,o=new Map,i=e=>{const t=r.get(e);if(void 0===t)throw new Error(\'There is no interval scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(t),r.delete(e)},u=e=>{const t=o.get(e);if(void 0===t)throw new Error(\'There is no timeout scheduled with the given id "\'.concat(e,\'".\'));clearTimeout(t),o.delete(e)},f=(e,t)=>{let n,r;if("performance"in self){const o=performance.now();n=o,r=e-Math.max(0,o-t)}else n=Date.now(),r=e;return{expected:n+r,remainingDelay:r}},c=(e,t,n,r)=>{const o="performance"in self?performance.now():Date.now();o>n?postMessage({id:null,method:"call",params:{timerId:t,timerType:r}}):e.set(t,setTimeout(c,n-o,e,t,n,r))},a=(e,t,n)=>{const{expected:o,remainingDelay:i}=f(e,n);r.set(t,setTimeout(c,i,r,t,o,"interval"))},d=(e,t,n)=>{const{expected:r,remainingDelay:i}=f(e,n);o.set(t,setTimeout(c,i,o,t,r,"timeout"))}},function(e,t,n){"use strict";n.r(t);var r=n(2);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);var i=n(3);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var u=n(4);for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);var f=n(5);for(var o in f)"default"!==o&&function(e){n.d(t,e,(function(){return f[e]}))}(o);var c=n(6);for(var o in c)"default"!==o&&function(e){n.d(t,e,(function(){return c[e]}))}(o);var a=n(7);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);var d=n(8);for(var o in d)"default"!==o&&function(e){n.d(t,e,(function(){return d[e]}))}(o);var s=n(9);for(var o in s)"default"!==o&&function(e){n.d(t,e,(function(){return s[e]}))}(o)},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(11);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);var i=n(12);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var u=n(13);for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o)},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);var u=n(10);for(var i in u)"default"!==i&&function(e){n.d(t,e,(function(){return u[e]}))}(i);addEventListener("message",({data:e})=>{try{if("clear"===e.method){const{id:t,params:{timerId:n,timerType:o}}=e;if("interval"===o)Object(r.a)(n),postMessage({error:null,id:t});else{if("timeout"!==o)throw new Error(\'The given type "\'.concat(o,\'" is not supported\'));Object(r.b)(n),postMessage({error:null,id:t})}}else{if("set"!==e.method)throw new Error(\'The given method "\'.concat(e.method,\'" is not supported\'));{const{params:{delay:t,now:n,timerId:o,timerType:i}}=e;if("interval"===i)Object(r.c)(t,o,n);else{if("timeout"!==i)throw new Error(\'The given type "\'.concat(i,\'" is not supported\'));Object(r.d)(t,o,n)}}}}catch(t){postMessage({error:{message:t.message},id:e.id,result:null})}})}]);'),C=(e,t)=>P().setInterval(e,t);function U(t){let n,r;return{c(){n=s("button"),n.textContent="Stop",p(n,"class","svelte-xqx7uc")},m(e,o,i){u(e,n,o),i&&r(),r=f(n,"click",t[10])},p:e,d(e){e&&c(n),r()}}}function z(e){let t,n,o,i,m,v;return{c(){t=s("button"),n=l("Start"),o=d(),i=s("button"),m=l("Test (Play 3 beats)"),t.disabled=e[8],p(t,"class","svelte-xqx7uc"),i.disabled=e[8],p(i,"class","svelte-xqx7uc")},m(c,s,l){u(c,t,s),a(t,n),u(c,o,s),u(c,i,s),a(i,m),l&&r(v),v=[f(t,"click",e[9]),f(i,"click",e[11])]},p(e,n){256&n&&(t.disabled=e[8]),256&n&&(i.disabled=e[8])},d(e){e&&c(t),e&&c(o),e&&c(i),r(v)}}}function H(e){let t;function n(e,t){return e[4]>0?F:B}let r=n(e),o=r(e);return{c(){o.c(),t=l("")},m(e,n){o.m(e,n),u(e,t,n)},p(e,i){r===(r=n(e))&&o?o.p(e,i):(o.d(1),o=r(e),o&&(o.c(),o.m(t.parentNode,t)))},d(e){o.d(e),e&&c(t)}}}function B(e){let t,n,r,o,i;return{c(){t=s("div"),n=l("Stokes: "),r=l(e[3]),o=l(" / "),i=l(e[6]),p(t,"class","font-mono")},m(e,c){u(e,t,c),a(t,n),a(t,r),a(t,o),a(t,i)},p(e,t){8&t&&v(r,e[3]),64&t&&v(i,e[6])},d(e){e&&c(t)}}}function F(e){let t,n,r;return{c(){t=s("div"),n=l("Ready? "),r=l(e[4])},m(e,o){u(e,t,o),a(t,n),a(t,r)},p(e,t){16&t&&v(r,e[4])},d(e){e&&c(t)}}}function G(e){let t,n,o,i,m,h,y,w,b,x,T,$,M,E,_,I,k,j,S,O;return{c(){t=s("div"),n=s("div"),o=s("label"),i=l("Duration\n                        "),m=s("input"),h=d(),y=s("div"),w=s("output"),b=l(e[5]),x=d(),T=s("div"),$=s("div"),M=s("label"),E=l("Strokes per Minute\n                        "),_=s("input"),I=d(),k=s("div"),j=s("output"),S=l(e[1]),p(m,"step","15"),p(m,"min","15"),p(m,"max","1800"),p(m,"type","range"),p(m,"class","svelte-xqx7uc"),p(n,"class","col-span-5"),p(w,"class","flex self-end"),p(y,"class","col-span-1 flex pb-1"),p(t,"class","grid grid-cols-6 gap-4"),p(_,"step","10"),p(_,"min","10"),p(_,"max","400"),p(_,"type","range"),p(_,"class","svelte-xqx7uc"),p($,"class","col-span-5"),p(j,"class","flex self-end"),p(k,"class","col-span-1 flex pb-1"),p(T,"class","grid grid-cols-6 gap-4")},m(c,s,l){u(c,t,s),a(t,n),a(n,o),a(o,i),a(o,m),g(m,e[0]),a(t,h),a(t,y),a(y,w),a(w,b),u(c,x,s),u(c,T,s),a(T,$),a($,M),a(M,E),a(M,_),g(_,e[1]),a(T,I),a(T,k),a(k,j),a(j,S),l&&r(O),O=[f(m,"change",e[20]),f(m,"input",e[20]),f(_,"change",e[21]),f(_,"input",e[21])]},p(e,t){1&t&&g(m,e[0]),32&t&&v(b,e[5]),2&t&&g(_,e[1]),2&t&&v(S,e[1])},d(e){e&&c(t),e&&c(x),e&&c(T),r(O)}}}function W(t){let n,o,i,m,h,y,w,b,x,T,$,M,E,_,I,k,j,S=100*t[2]+"";function O(e,t){return e[7]?U:z}let A=O(t),R=A(t),q=t[7]&&H(t),L=!t[7]&&G(t);return{c(){n=s("div"),o=s("div"),i=s("div"),R.c(),m=d(),q&&q.c(),h=d(),L&&L.c(),y=d(),w=s("div"),b=s("div"),x=s("label"),T=l("Volume\n                    "),$=s("input"),M=d(),E=s("div"),_=s("output"),I=l(S),k=l("%"),p($,"step","0.1"),p($,"min","0"),p($,"max","1"),p($,"type","range"),p($,"class","svelte-xqx7uc"),p(b,"class","col-span-5"),p(_,"class","flex self-end"),p(E,"class","col-span-1 flex pb-1"),p(w,"class","grid grid-cols-6 gap-4"),p(o,"class","grid grid-flow-row gap-4"),p(n,"class","container mx-auto px-4 py-4")},m(e,c,s){u(e,n,c),a(n,o),a(o,i),R.m(i,null),a(o,m),q&&q.m(o,null),a(o,h),L&&L.m(o,null),a(o,y),a(o,w),a(w,b),a(b,x),a(x,T),a(x,$),g($,t[2]),a(w,M),a(w,E),a(E,_),a(_,I),a(_,k),s&&r(j),j=[f($,"change",t[22]),f($,"input",t[22])]},p(e,[t]){A===(A=O(e))&&R?R.p(e,t):(R.d(1),R=A(e),R&&(R.c(),R.m(i,null))),e[7]?q?q.p(e,t):(q=H(e),q.c(),q.m(o,h)):q&&(q.d(1),q=null),e[7]?L&&(L.d(1),L=null):L?L.p(e,t):(L=G(e),L.c(),L.m(o,y)),4&t&&g($,e[2]),4&t&&S!==(S=100*e[2]+"")&&v(I,S)},i:e,o:e,d(e){e&&c(n),R.d(),q&&q.d(),L&&L.d(),r(j)}}}function X(e,t,n){let r,o=60,i=100,a=.8,u=0,c=4,s="",l=0,d=!1,f=!1;const p=new Howl({src:["assets/kick-drum.wav"]}),v=new Howl({src:["assets/cum.mp3"]}),g=new Tone.Synth({oscillator:{type:"triangle",modulationType:"sine",modulationIndex:3,harmonicity:3.4},envelope:{attack:.001,decay:.1,sustain:.01,release:.1}}).toDestination(),h=()=>{g.triggerAttackRelease("A1","16n")},y=()=>{g.triggerAttackRelease("C3","4n")},w=()=>{g.triggerAttackRelease("C5","4n")},b=()=>{n(7,d=!0),n(6,l=Math.round(o*i/60)),r=C(function e(){return c>0?n(4,c-=1):n(3,u+=1),u===l?(v.play(),x()):c>0?y():0===c&&0===u?w():h(),e}(),60/i*1e3)},x=()=>{var e;n(7,d=!1),n(3,u=0),n(4,c=4),e=r,P().clearInterval(e)},T=()=>{d&&(x(),b())};return e.$$.update=()=>{if(2&e.$$.dirty&&i&&T(),4&e.$$.dirty&&a&&Howler.volume(a),1&e.$$.dirty&&o)if(o<=60)n(5,s=`${o} seconds`);else{const e=(o%60).toString().padStart(2,"0");n(5,s=`${Math.floor(o/60)}:${e} minutes`)}},[o,i,a,u,c,s,l,d,f,b,x,()=>{n(8,f=!0),n(6,l=3),r=C(function e(){return n(3,u+=1),console.log("Test beat"),h(),u===l&&(n(8,f=!1),x()),e}(),60/i*1e3)},r,p,v,g,h,y,w,T,function(){o=m(this.value),n(0,o)},function(){i=m(this.value),n(1,i)},function(){a=m(this.value),n(2,a)}]}new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}{constructor(e){super(),A(this,e,X,W,i,{})}}({target:document.body})}();
//# sourceMappingURL=index.js.map
