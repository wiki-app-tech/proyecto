const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./TacticalMap-BzsjgucL.js","./rolldown-runtime-hePW80VL.js","./TacticalMap-vh-t_kPv.css","./MermaidDiagrams-B81guGmi.js","./chunk-Y2CYZVJY-DsF7k-Jl.js","./src-B6xuSHsQ.js","./chunk-I66GZJ75-VjinmxlZ.js","./chunk-NSK5VX7P-CIk-oURo.js","./dist-v5Q1xZ2K.js","./chunk-4I5QYGJK-CTsR7hYs.js","./chunk-WRU74C26-s8BaV152.js","./chunk-7BUUIJ7U-Bb538aSH.js","./chunk-UBXNYLIW-CIKyaV0Z.js","./chunk-W5SLKNZC-xg6WGn9E.js","./chunk-QR6OTTB3-BaoragOh.js","./rough.esm-Dy-Kn_BL.js","./chunk-7Z6QIM7H-DIwh1F9p.js","./line-CqjnbKoZ.js","./path-fybaL0A-.js","./array-BifhSqXX.js"])))=>i.map(i=>d[i]);
import{r as e,t}from"./rolldown-runtime-hePW80VL.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=t((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function F(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var I=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},L={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=L,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:F}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,I)}catch(e){I(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),r=t(((e,t)=>{t.exports=n()})),i=t((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),a=t(((e,t)=>{t.exports=i()})),o=t((e=>{var t=r();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return s(e,t,null,r)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)}},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.8`})),s=t(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=o()})),c=t((e=>{var t=a(),n=r(),i=s();function o(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(o(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(o(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),j=Symbol.iterator;function M(e){return typeof e!=`object`||!e?null:(e=j&&e[j]||e[`@@iterator`],typeof e==`function`?e:null)}var N=Symbol.for(`react.client.reference`);function P(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===N?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?P(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return P(e(t))}catch{}}return null}var F=Array.isArray,I=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},ee=[],te=-1;function ne(e){return{current:e}}function re(e){0>te||(e.current=ee[te],ee[te]=null,te--)}function z(e,t){te++,ee[te]=e.current,e.current=t}var ie=ne(null),ae=ne(null),B=ne(null),oe=ne(null);function se(e,t){switch(z(B,t),z(ae,e),z(ie,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}re(ie),z(ie,e)}function ce(){re(ie),re(ae),re(B)}function le(e){e.memoizedState!==null&&z(oe,e);var t=ie.current,n=Hd(t,e.type);t!==n&&(z(ae,e),z(ie,n))}function V(e){ae.current===e&&(re(ie),re(ae)),oe.current===e&&(re(oe),Qf._currentValue=R)}var ue,de;function fe(e){if(ue===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ue=t&&t[1]||``,de=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ue+e+de}var pe=!1;function me(e,t){if(!e||pe)return``;pe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{pe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?fe(n):``}function he(e,t){switch(e.tag){case 26:case 27:case 5:return fe(e.type);case 16:return fe(`Lazy`);case 13:return e.child!==t&&t!==null?fe(`Suspense Fallback`):fe(`Suspense`);case 19:return fe(`SuspenseList`);case 0:case 15:return me(e.type,!1);case 11:return me(e.type.render,!1);case 1:return me(e.type,!0);case 31:return fe(`Activity`);default:return``}}function ge(e){try{var t=``,n=null;do t+=he(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var _e=Object.prototype.hasOwnProperty,ve=t.unstable_scheduleCallback,ye=t.unstable_cancelCallback,H=t.unstable_shouldYield,be=t.unstable_requestPaint,xe=t.unstable_now,U=t.unstable_getCurrentPriorityLevel,W=t.unstable_ImmediatePriority,G=t.unstable_UserBlockingPriority,K=t.unstable_NormalPriority,q=t.unstable_LowPriority,Se=t.unstable_IdlePriority,Ce=t.log,we=t.unstable_setDisableYieldValue,J=null,Te=null;function Ee(e){if(typeof Ce==`function`&&we(e),Te&&typeof Te.setStrictMode==`function`)try{Te.setStrictMode(J,e)}catch{}}var De=Math.clz32?Math.clz32:Ae,Oe=Math.log,ke=Math.LN2;function Ae(e){return e>>>=0,e===0?32:31-(Oe(e)/ke|0)|0}var je=256,Me=262144,Ne=4194304;function Y(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Y(n))):i=Y(o):i=Y(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Y(n))):i=Y(o)):i=Y(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Fe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ie(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Ne;return Ne<<=1,!(Ne&62914560)&&(Ne=4194304),e}function Le(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Re(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ze(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-De(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Be(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Be(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-De(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ve(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function He(e,t){var n=t&-t;return n=n&42?1:Ue(n),(n&(e.suspendedLanes|t))===0?n:0}function Ue(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function We(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ge(){var e=L.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function Ke(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var qe=Math.random().toString(36).slice(2),Je=`__reactFiber$`+qe,Ye=`__reactProps$`+qe,Xe=`__reactContainer$`+qe,Ze=`__reactEvents$`+qe,Qe=`__reactListeners$`+qe,$e=`__reactHandles$`+qe,et=`__reactResources$`+qe,tt=`__reactMarker$`+qe;function nt(e){delete e[Je],delete e[Ye],delete e[Ze],delete e[Qe],delete e[$e]}function rt(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[Je])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function it(e){if(e=e[Je]||e[Xe]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function at(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ot(e){var t=e[et];return t||=e[et]={hoistableStyles:new Map,hoistableScripts:new Map},t}function st(e){e[tt]=!0}var ct=new Set,lt={};function ut(e,t){dt(e,t),dt(e+`Capture`,t)}function dt(e,t){for(lt[e]=t,e=0;e<t.length;e++)ct.add(t[e])}var ft=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),pt={},mt={};function ht(e){return _e.call(mt,e)?!0:_e.call(pt,e)?!1:ft.test(e)?mt[e]=!0:(pt[e]=!0,!1)}function gt(e,t,n){if(ht(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function _t(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function vt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function yt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function xt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function St(e){if(!e._valueTracker){var t=bt(e)?`checked`:`value`;e._valueTracker=xt(e,t,``+e[t])}}function Ct(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=bt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Tt=/[\n"\\]/g;function Et(e){return e.replace(Tt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Dt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+yt(t)):e.value!==``+yt(t)&&(e.value=``+yt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):kt(e,o,yt(n)):kt(e,o,yt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+yt(s):e.removeAttribute(`name`)}function Ot(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){St(e);return}n=n==null?``:``+yt(n),t=t==null?n:``+yt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),St(e)}function kt(e,t,n){t===`number`&&wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function At(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function jt(e,t,n){if(t!=null&&(t=``+yt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+yt(n)}function Mt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(o(92));if(F(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}n??=``,t=n}n=yt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),St(e)}function Nt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Ft(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Pt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function It(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(o(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Ft(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&Ft(e,a,t[a])}function Lt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Rt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bt(e){return zt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Vt(){}var Ht=null;function Ut(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wt=null,Gt=null;function Kt(e){var t=it(e);if(t&&(e=t.stateNode)){var n=e[Ye]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Dt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Et(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Ye]||null;if(!i)throw Error(o(90));Dt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ct(r)}break a;case`textarea`:jt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&At(e,!!n.multiple,t,!1)}}}var qt=!1;function Jt(e,t,n){if(qt)return e(t,n);qt=!0;try{return e(t)}finally{if(qt=!1,(Wt!==null||Gt!==null)&&(_u(),Wt&&(t=Wt,e=Gt,Gt=Wt=null,Kt(t),e)))for(t=0;t<e.length;t++)Kt(e[t])}}function Yt(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Ye]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(o(231,t,typeof n));return n}var Xt=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),Zt=!1;if(Xt)try{var Qt={};Object.defineProperty(Qt,"passive",{get:function(){Zt=!0}}),window.addEventListener(`test`,Qt,Qt),window.removeEventListener(`test`,Qt,Qt)}catch{Zt=!1}var $t=null,en=null,tn=null;function nn(){if(tn)return tn;var e,t=en,n=t.length,r,i=`value`in $t?$t.value:$t.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return tn=i.slice(e,1<r?1-r:void 0)}function rn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function an(){return!0}function on(){return!1}function Z(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?an:on,this.isPropagationStopped=on,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=an)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=an)},persist:function(){},isPersistent:an}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=Z(sn),ln=h({},sn,{view:0,detail:0}),un=Z(ln),dn,fn,pn,mn=h({},ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==pn&&(pn&&e.type===`mousemove`?(dn=e.screenX-pn.screenX,fn=e.screenY-pn.screenY):fn=dn=0,pn=e),dn)},movementY:function(e){return`movementY`in e?e.movementY:fn}}),hn=Z(mn),gn=Z(h({},mn,{dataTransfer:0})),_n=Z(h({},ln,{relatedTarget:0})),vn=Z(h({},sn,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=Z(h({},sn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),bn=Z(h({},sn,{data:0})),xn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Sn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Cn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cn[e])?!!t[e]:!1}function Tn(){return wn}var En=Z(h({},ln,{key:function(e){if(e.key){var t=xn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=rn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Sn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tn,charCode:function(e){return e.type===`keypress`?rn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?rn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Dn=Z(h({},mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),On=Z(h({},ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tn})),kn=Z(h({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0})),An=Z(h({},mn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),jn=Z(h({},sn,{newState:0,oldState:0})),Mn=[9,13,27,32],Nn=Xt&&`CompositionEvent`in window,Pn=null;Xt&&`documentMode`in document&&(Pn=document.documentMode);var Fn=Xt&&`TextEvent`in window&&!Pn,In=Xt&&(!Nn||Pn&&8<Pn&&11>=Pn),Ln=` `,Rn=!1;function zn(e,t){switch(e){case`keyup`:return Mn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Bn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Vn=!1;function Hn(e,t){switch(e){case`compositionend`:return Bn(t);case`keypress`:return t.which===32?(Rn=!0,Ln):null;case`textInput`:return e=t.data,e===Ln&&Rn?null:e;default:return null}}function Un(e,t){if(Vn)return e===`compositionend`||!Nn&&zn(e,t)?(e=nn(),tn=en=$t=null,Vn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return In&&t.locale!==`ko`?null:t.data;default:return null}}var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Wn[e.type]:t===`textarea`}function Kn(e,t,n,r){Wt?Gt?Gt.push(r):Gt=[r]:Wt=r,t=Td(t,`onChange`),0<t.length&&(n=new cn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var qn=null,Jn=null;function Yn(e){_d(e,0)}function Xn(e){if(Ct(at(e)))return e}function Zn(e,t){if(e===`change`)return t}var Qn=!1;if(Xt){var $n;if(Xt){var er=`oninput`in document;if(!er){var tr=document.createElement(`div`);tr.setAttribute(`oninput`,`return;`),er=typeof tr.oninput==`function`}$n=er}else $n=!1;Qn=$n&&(!document.documentMode||9<document.documentMode)}function nr(){qn&&(qn.detachEvent(`onpropertychange`,rr),Jn=qn=null)}function rr(e){if(e.propertyName===`value`&&Xn(Jn)){var t=[];Kn(t,Jn,e,Ut(e)),Jt(Yn,t)}}function ir(e,t,n){e===`focusin`?(nr(),qn=t,Jn=n,qn.attachEvent(`onpropertychange`,rr)):e===`focusout`&&nr()}function ar(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Xn(Jn)}function or(e,t){if(e===`click`)return Xn(t)}function sr(e,t){if(e===`input`||e===`change`)return Xn(t)}function cr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var lr=typeof Object.is==`function`?Object.is:cr;function ur(e,t){if(lr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_e.call(t,i)||!lr(e[i],t[i]))return!1}return!0}function dr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fr(e,t){var n=dr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=dr(n)}}function pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=wt(e.document)}return t}function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var gr=Xt&&`documentMode`in document&&11>=document.documentMode,_r=null,vr=null,yr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;br||_r==null||_r!==wt(r)||(r=_r,`selectionStart`in r&&hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&ur(yr,r)||(yr=r,r=Td(vr,`onSelect`),0<r.length&&(t=new cn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=_r)))}function Sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Cr={animationend:Sr(`Animation`,`AnimationEnd`),animationiteration:Sr(`Animation`,`AnimationIteration`),animationstart:Sr(`Animation`,`AnimationStart`),transitionrun:Sr(`Transition`,`TransitionRun`),transitionstart:Sr(`Transition`,`TransitionStart`),transitioncancel:Sr(`Transition`,`TransitionCancel`),transitionend:Sr(`Transition`,`TransitionEnd`)},wr={},Tr={};Xt&&(Tr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),`TransitionEvent`in window||delete Cr.transitionend.transition);function Er(e){if(wr[e])return wr[e];if(!Cr[e])return e;var t=Cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tr)return wr[e]=t[n];return e}var Dr=Er(`animationend`),Or=Er(`animationiteration`),kr=Er(`animationstart`),Ar=Er(`transitionrun`),jr=Er(`transitionstart`),Mr=Er(`transitioncancel`),Nr=Er(`transitionend`),Pr=new Map,Fr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Fr.push(`scrollEnd`);function Ir(e,t){Pr.set(e,t),ut(t,[e])}var Lr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Rr=[],zr=0,Br=0;function Vr(){for(var e=zr,t=Br=zr=0;t<e;){var n=Rr[t];Rr[t++]=null;var r=Rr[t];Rr[t++]=null;var i=Rr[t];Rr[t++]=null;var a=Rr[t];if(Rr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Gr(n,i,a)}}function Hr(e,t,n,r){Rr[zr++]=e,Rr[zr++]=t,Rr[zr++]=n,Rr[zr++]=r,Br|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ur(e,t,n,r){return Hr(e,t,n,r),Kr(e)}function Wr(e,t){return Hr(e,null,null,t),Kr(e)}function Gr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-De(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Kr(e){if(50<cu)throw cu=0,lu=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var qr={};function Jr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yr(e,t,n,r){return new Jr(e,t,n,r)}function Xr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zr(e,t){var n=e.alternate;return n===null?(n=Yr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Qr(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $r(e,t,n,r,i,a){var s=0;if(r=e,typeof e==`function`)Xr(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ie.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=Yr(31,n,t,i),e.elementType=k,e.lanes=a,e;case y:return ei(n.children,i,a,t);case b:s=8,i|=24;break;case x:return e=Yr(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case T:return e=Yr(13,n,t,i),e.elementType=T,e.lanes=a,e;case E:return e=Yr(19,n,t,i),e.elementType=E,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(o(130,e===null?`null`:typeof e,``)),r=null}return t=Yr(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function ei(e,t,n,r){return e=Yr(7,e,r,t),e.lanes=n,e}function ti(e,t,n){return e=Yr(6,e,null,t),e.lanes=n,e}function ni(e){var t=Yr(18,null,null,0);return t.stateNode=e,t}function ri(e,t,n){return t=Yr(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ii=new WeakMap;function ai(e,t){if(typeof e==`object`&&e){var n=ii.get(e);return n===void 0?(t={value:e,source:t,stack:ge(t)},ii.set(e,t),t):n}return{value:e,source:t,stack:ge(t)}}var oi=[],si=0,ci=null,li=0,ui=[],di=0,fi=null,pi=1,mi=``;function hi(e,t){oi[si++]=li,oi[si++]=ci,ci=e,li=t}function gi(e,t,n){ui[di++]=pi,ui[di++]=mi,ui[di++]=fi,fi=e;var r=pi;e=mi;var i=32-De(r)-1;r&=~(1<<i),n+=1;var a=32-De(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pi=1<<32-De(t)+i|n<<i|r,mi=a+e}else pi=1<<a|n<<i|r,mi=e}function _i(e){e.return!==null&&(hi(e,1),gi(e,1,0))}function vi(e){for(;e===ci;)ci=oi[--si],oi[si]=null,li=oi[--si],oi[si]=null;for(;e===fi;)fi=ui[--di],ui[di]=null,mi=ui[--di],ui[di]=null,pi=ui[--di],ui[di]=null}function yi(e,t){ui[di++]=pi,ui[di++]=mi,ui[di++]=fi,pi=t.id,mi=t.overflow,fi=e}var bi=null,xi=null,Si=!1,Ci=null,wi=!1,Ti=Error(o(519));function Ei(e){throw Mi(ai(Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ti}function Di(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Je]=e,t[Ye]=r,n){case`dialog`:vd(`cancel`,t),vd(`close`,t);break;case`iframe`:case`object`:case`embed`:vd(`load`,t);break;case`video`:case`audio`:for(n=0;n<hd.length;n++)vd(hd[n],t);break;case`source`:vd(`error`,t);break;case`img`:case`image`:case`link`:vd(`error`,t),vd(`load`,t);break;case`details`:vd(`toggle`,t);break;case`input`:vd(`invalid`,t),Ot(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:vd(`invalid`,t);break;case`textarea`:vd(`invalid`,t),Mt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&(vd(`beforetoggle`,t),vd(`toggle`,t)),r.onScroll!=null&&vd(`scroll`,t),r.onScrollEnd!=null&&vd(`scrollend`,t),r.onClick!=null&&(t.onclick=Vt),t=!0):t=!1,t||Ei(e,!0)}function Oi(e){for(bi=e.return;bi;)switch(bi.tag){case 5:case 31:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:bi=bi.return}}function ki(e){if(e!==bi)return!1;if(!Si)return Oi(e),Si=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&xi&&Ei(e),Oi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(o(317));xi=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(o(317));xi=uf(e)}else t===27?(t=xi,Zd(e.type)?(e=lf,lf=null,xi=e):xi=t):xi=bi?cf(e.stateNode.nextSibling):null;return!0}function Ai(){xi=bi=null,Si=!1}function ji(){var e=Ci;return e!==null&&(Jl===null?Jl=e:Jl.push.apply(Jl,e),Ci=null),e}function Mi(e){Ci===null?Ci=[e]:Ci.push(e)}var Ni=ne(null),Pi=null,Fi=null;function Ii(e,t,n){z(Ni,t._currentValue),t._currentValue=n}function Li(e){e._currentValue=Ni.current,re(Ni)}function Ri(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function zi(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var s=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Ri(a.return,n,e),r||(s=null);break a}a=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(o(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ri(s,n,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Bi(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(o(387));if(s=s.memoizedProps,s!==null){var c=i.type;lr(i.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(i===oe.current){if(s=i.alternate,s===null)throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&zi(t,e,n,r),t.flags|=262144}function Vi(e){for(e=e.firstContext;e!==null;){if(!lr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hi(e){Pi=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ui(e){return Gi(Pi,e)}function Wi(e,t){return Pi===null&&Hi(e),Gi(e,t)}function Gi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Fi===null){if(e===null)throw Error(o(308));Fi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Fi=Fi.next=t;return n}var Ki=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},qi=t.unstable_scheduleCallback,Ji=t.unstable_NormalPriority,Yi={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xi(){return{controller:new Ki,data:new Map,refCount:0}}function Zi(e){e.refCount--,e.refCount===0&&qi(Ji,function(){e.controller.abort()})}var Qi=null,$i=0,ea=0,ta=null;function Q(e,t){if(Qi===null){var n=Qi=[];$i=0,ea=ld(),ta={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return $i++,t.then(na,na),t}function na(){if(--$i===0&&Qi!==null){ta!==null&&(ta.status=`fulfilled`);var e=Qi;Qi=null,ea=0,ta=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ra(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ia=I.S;I.S=function(e,t){Zl=xe(),typeof t==`object`&&t&&typeof t.then==`function`&&Q(e,t),ia!==null&&ia(e,t)};var aa=ne(null);function oa(){var e=aa.current;return e===null?Ml.pooledCache:e}function sa(e,t){t===null?z(aa,aa.current):z(aa,t.pool)}function ca(){var e=oa();return e===null?null:{parent:Yi._currentValue,pool:e}}var la=Error(o(460)),ua=Error(o(474)),da=Error(o(542)),fa={then:function(){}};function pa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Vt,Vt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,va(e),e;default:if(typeof t.status==`string`)t.then(Vt,Vt);else{if(e=Ml,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,va(e),e}throw ga=t,la}}function ha(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ga=e,la):e}}var ga=null;function _a(){if(ga===null)throw Error(o(459));var e=ga;return ga=null,e}function va(e){if(e===la||e===da)throw Error(o(483))}var ya=null,ba=0;function xa(e){var t=ba;return ba+=1,ya===null&&(ya=[]),ma(ya,e,t)}function Sa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ca(e,t){throw t.$$typeof===g?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=Zr(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ti(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===O&&ha(a)===t.type)?(t=i(t,n.props),Sa(t,n),t.return=e,t):(t=$r(n.type,n.key,n.props,null,e.mode,r),Sa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ri(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=ei(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ti(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=$r(t.type,t.key,t.props,null,e.mode,n),Sa(n,t),n.return=e,n;case v:return t=ri(t,e.mode,n),t.return=e,t;case O:return t=ha(t),f(e,t,n)}if(F(t)||M(t))return t=ei(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,xa(t),n);if(t.$$typeof===C)return f(e,Wi(e,t),n);Ca(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=ha(n),p(e,t,n,r)}if(F(n)||M(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,xa(n),r);if(n.$$typeof===C)return p(e,t,Wi(e,n),r);Ca(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=ha(r),m(e,t,n,r,i)}if(F(r)||M(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,xa(r),i);if(r.$$typeof===C)return m(e,t,n,Wi(t,r),i);Ca(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),Si&&hi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return Si&&hi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),Si&&hi(i,h),l}function g(i,s,c,l){if(c==null)throw Error(o(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),s=a(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),Si&&hi(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(s=a(v,s,g),d===null?u=v:d.sibling=v,d=v);return Si&&hi(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=a(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),Si&&hi(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&ha(l)===r.type){n(e,r.sibling),c=i(r,a.props),Sa(c,a),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}a.type===y?(c=ei(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=$r(a.type,a.key,a.props,null,e.mode,c),Sa(c,a),c.return=e,e=c)}return s(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=ri(a,e.mode,c),c.return=e,e=c}return s(e);case O:return a=ha(a),b(e,r,a,c)}if(F(a))return h(e,r,a,c);if(M(a)){if(l=M(a),typeof l!=`function`)throw Error(o(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,xa(a),c);if(a.$$typeof===C)return b(e,r,Wi(e,a),c);Ca(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=ti(a,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ba=0;var i=b(e,t,n,r);return ya=null,i}catch(t){if(t===la||t===da)throw t;var a=Yr(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ta=wa(!0),Ea=wa(!1),Da=!1;function Oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ka(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ja(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,jl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Kr(e),Gr(e,null,n),t}return Hr(e,r,t,n),Kr(e)}function Ma(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ve(e,n)}}function Na(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Pa=!1;function Fa(){if(Pa){var e=ta;if(e!==null)throw e}}function Ia(e,t,n,r){Pa=!1;var i=e.updateQueue;Da=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Pl&f)===f:(r&f)===f){f!==0&&f===ea&&(Pa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Da=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Hl|=o,e.lanes=o,e.memoizedState=d}}function La(e,t){if(typeof e!=`function`)throw Error(o(191,e));e.call(t)}function Ra(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)La(n[e],t)}var za=ne(null),Ba=ne(0);function Va(e,t){e=Bl,z(Ba,e),z(za,t),Bl=e|t.baseLanes}function Ha(){z(Ba,Bl),z(za,za.current)}function Ua(){Bl=Ba.current,re(za),re(Ba)}var Wa=ne(null),Ga=null;function Ka(e){var t=e.alternate;z(Za,Za.current&1),z(Wa,e),Ga===null&&(t===null||za.current!==null||t.memoizedState!==null)&&(Ga=e)}function qa(e){z(Za,Za.current),z(Wa,e),Ga===null&&(Ga=e)}function Ja(e){e.tag===22?(z(Za,Za.current),z(Wa,e),Ga===null&&(Ga=e)):Ya(e)}function Ya(){z(Za,Za.current),z(Wa,Wa.current)}function Xa(e){re(Wa),Ga===e&&(Ga=null),re(Za)}var Za=ne(0);function Qa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $a=0,$=null,eo=null,to=null,no=!1,ro=!1,io=!1,ao=0,oo=0,so=null,co=0;function lo(){throw Error(o(321))}function uo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function fo(e,t,n,r,i,a){return $a=a,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?ks:As,io=!1,a=n(r,i),io=!1,ro&&(a=mo(t,n,r,i)),po(e),a}function po(e){I.H=Os;var t=eo!==null&&eo.next!==null;if($a=0,to=eo=$=null,no=!1,oo=0,so=null,t)throw Error(o(300));e===null||qs||(e=e.dependencies,e!==null&&Vi(e)&&(qs=!0))}function mo(e,t,n,r){$=e;var i=0;do{if(ro&&(so=null),oo=0,ro=!1,25<=i)throw Error(o(301));if(i+=1,to=eo=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}I.H=js,a=t(n,r)}while(ro);return a}function ho(){var e=I.H,t=e.useState()[0];return t=typeof t.then==`function`?So(t):t,e=e.useState()[0],(eo===null?null:eo.memoizedState)!==e&&($.flags|=1024),t}function go(){var e=ao!==0;return ao=0,e}function _o(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function vo(e){if(no){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}no=!1}$a=0,to=eo=$=null,ro=!1,oo=ao=0,so=null}function yo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return to===null?$.memoizedState=to=e:to=to.next=e,to}function bo(){if(eo===null){var e=$.alternate;e=e===null?null:e.memoizedState}else e=eo.next;var t=to===null?$.memoizedState:to.next;if(t!==null)to=t,eo=e;else{if(e===null)throw $.alternate===null?Error(o(467)):Error(o(310));eo=e,e={memoizedState:eo.memoizedState,baseState:eo.baseState,baseQueue:eo.baseQueue,queue:eo.queue,next:null},to===null?$.memoizedState=to=e:to=to.next=e}return to}function xo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(e){var t=oo;return oo+=1,so===null&&(so=[]),e=ma(so,e,t),t=$,(to===null?t.memoizedState:to.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?ks:As),e}function Co(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return So(e);if(e.$$typeof===C)return Ui(e)}throw Error(o(438,String(e)))}function wo(e){var t=null,n=$.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=$.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=xo(),$.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function To(e,t){return typeof t==`function`?t(e):t}function Eo(e){return Do(bo(),eo,e)}function Do(e,t,n){var r=e.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?($a&f)===f:(Pl&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ea&&(d=!0);else if(($a&p)===p){u=u.next,p===ea&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=a):l=l.next=f,$.lanes|=p,Hl|=p;f=u.action,io&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=a):l=l.next=p,$.lanes|=f,Hl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=a:l.next=c,!lr(a,e.memoizedState)&&(qs=!0,d&&(n=ta,n!==null)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Oo(e){var t=bo(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);lr(a,t.memoizedState)||(qs=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ko(e,t,n){var r=$,i=bo(),a=Si;if(a){if(n===void 0)throw Error(o(407));n=n()}else n=t();var s=!lr((eo||i).memoizedState,n);if(s&&(i.memoizedState=n,qs=!0),i=i.queue,es(Mo.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||to!==null&&to.memoizedState.tag&1){if(r.flags|=2048,Yo(9,{destroy:void 0},jo.bind(null,r,i,n,t),null),Ml===null)throw Error(o(349));a||$a&127||Ao(r,t,n)}return n}function Ao(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t=xo(),$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jo(e,t,n,r){t.value=n,t.getSnapshot=r,No(t)&&Po(e)}function Mo(e,t,n){return n(function(){No(t)&&Po(e)})}function No(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch{return!0}}function Po(e){var t=Wr(e,2);t!==null&&fu(t,e,2)}function Fo(e){var t=yo();if(typeof e==`function`){var n=e;if(e=n(),io){Ee(!0);try{n()}finally{Ee(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:e},t}function Io(e,t,n,r){return e.baseState=n,Do(e,eo,typeof r==`function`?r:To)}function Lo(e,t,n,r,i){if(Ts(e))throw Error(o(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};I.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Ro(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Ro(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=I.T,o={};I.T=o;try{var s=n(i,r),c=I.S;c!==null&&c(o,s),zo(e,t,s)}catch(n){Vo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),I.T=a}}else try{a=n(i,r),zo(e,t,a)}catch(n){Vo(e,t,n)}}function zo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Bo(e,t,n)},function(n){return Vo(e,t,n)}):Bo(e,t,n)}function Bo(e,t,n){t.status=`fulfilled`,t.value=n,Ho(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ro(e,n)))}function Vo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ho(t),t=t.next;while(t!==r)}e.action=null}function Ho(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Uo(e,t){return t}function Wo(e,t){if(Si){var n=Ml.formState;if(n!==null){a:{var r=$;if(Si){if(xi){b:{for(var i=xi,a=wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){xi=cf(i.nextSibling),r=i.data===`F!`;break a}}Ei(r)}r=!1}r&&(t=n[0])}}return n=yo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:t},n.queue=r,n=Ss.bind(null,$,r),r.dispatch=n,r=Fo(!1),a=ws.bind(null,$,!1,r.queue),r=yo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Lo.bind(null,$,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Go(e){return Ko(bo(),eo,e)}function Ko(e,t,n){if(t=Do(e,t,Uo)[0],e=Eo(To)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=So(t)}catch(e){throw e===la?da:e}else r=t;t=bo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&($.flags|=2048,Yo(9,{destroy:void 0},qo.bind(null,i,n),null)),[r,a,e]}function qo(e,t){e.action=t}function Jo(e){var t=bo(),n=eo;if(n!==null)return Ko(t,n,e);bo(),t=t.memoizedState,n=bo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Yo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=$.updateQueue,t===null&&(t=xo(),$.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Xo(){return bo().memoizedState}function Zo(e,t,n,r){var i=yo();$.flags|=e,i.memoizedState=Yo(1|t,{destroy:void 0},n,r===void 0?null:r)}function Qo(e,t,n,r){var i=bo();r=r===void 0?null:r;var a=i.memoizedState.inst;eo!==null&&r!==null&&uo(r,eo.memoizedState.deps)?i.memoizedState=Yo(t,a,n,r):($.flags|=e,i.memoizedState=Yo(1|t,a,n,r))}function $o(e,t){Zo(8390656,8,e,t)}function es(e,t){Qo(2048,8,e,t)}function ts(e){$.flags|=4;var t=$.updateQueue;if(t===null)t=xo(),$.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ns(e){var t=bo().memoizedState;return ts({ref:t,nextImpl:e}),function(){if(jl&2)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function rs(e,t){return Qo(4,2,e,t)}function is(e,t){return Qo(4,4,e,t)}function as(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function os(e,t,n){n=n==null?null:n.concat([e]),Qo(4,4,as.bind(null,t,e),n)}function ss(){}function cs(e,t){var n=bo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&uo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ls(e,t){var n=bo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&uo(t,r[1]))return r[0];if(r=e(),io){Ee(!0);try{e()}finally{Ee(!1)}}return n.memoizedState=[r,t],r}function us(e,t,n){return n===void 0||$a&1073741824&&!(Pl&261930)?e.memoizedState=t:(e.memoizedState=n,e=du(),$.lanes|=e,Hl|=e,n)}function ds(e,t,n,r){return lr(n,t)?n:za.current===null?!($a&42)||$a&1073741824&&!(Pl&261930)?(qs=!0,e.memoizedState=n):(e=du(),$.lanes|=e,Hl|=e,t):(e=us(e,n,r),lr(e,t)||(qs=!0),e)}function fs(e,t,n,r,i){var a=L.p;L.p=a!==0&&8>a?a:8;var o=I.T,s={};I.T=s,ws(e,!1,t,n);try{var c=i(),l=I.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Cs(e,t,ra(c,r),uu(e)):Cs(e,t,r,uu(e))}catch(n){Cs(e,t,{then:function(){},status:`rejected`,reason:n},uu())}finally{L.p=a,o!==null&&s.types!==null&&(o.types=s.types),I.T=o}}function ps(){}function ms(e,t,n,r){if(e.tag!==5)throw Error(o(476));var i=hs(e).queue;fs(e,i,t,R,n===null?ps:function(){return gs(e),n(r)})}function hs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:R},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gs(e){var t=hs(e);t.next===null&&(t=e.alternate.memoizedState),Cs(e,t.next.queue,{},uu())}function _s(){return Ui(Qf)}function vs(){return bo().memoizedState}function ys(){return bo().memoizedState}function bs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=uu();e=Aa(n);var r=ja(t,e,n);r!==null&&(fu(r,t,n),Ma(r,t,n)),t={cache:Xi()},e.payload=t;return}t=t.return}}function xs(e,t,n){var r=uu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ts(e)?Es(t,n):(n=Ur(e,t,n,r),n!==null&&(fu(n,e,r),Ds(n,t,r)))}function Ss(e,t,n){Cs(e,t,n,uu())}function Cs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ts(e))Es(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,lr(s,o))return Hr(e,t,i,0),Ml===null&&Vr(),!1}catch{}if(n=Ur(e,t,i,r),n!==null)return fu(n,e,r),Ds(n,t,r),!0}return!1}function ws(e,t,n,r){if(r={lane:2,revertLane:ld(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ts(e)){if(t)throw Error(o(479))}else t=Ur(e,n,r,2),t!==null&&fu(t,e,2)}function Ts(e){var t=e.alternate;return e===$||t!==null&&t===$}function Es(e,t){ro=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ds(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ve(e,n)}}var Os={readContext:Ui,use:Co,useCallback:lo,useContext:lo,useEffect:lo,useImperativeHandle:lo,useLayoutEffect:lo,useInsertionEffect:lo,useMemo:lo,useReducer:lo,useRef:lo,useState:lo,useDebugValue:lo,useDeferredValue:lo,useTransition:lo,useSyncExternalStore:lo,useId:lo,useHostTransitionStatus:lo,useFormState:lo,useActionState:lo,useOptimistic:lo,useMemoCache:lo,useCacheRefresh:lo};Os.useEffectEvent=lo;var ks={readContext:Ui,use:Co,useCallback:function(e,t){return yo().memoizedState=[e,t===void 0?null:t],e},useContext:Ui,useEffect:$o,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Zo(4194308,4,as.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){Zo(4,2,e,t)},useMemo:function(e,t){var n=yo();t=t===void 0?null:t;var r=e();if(io){Ee(!0);try{e()}finally{Ee(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=yo();if(n!==void 0){var i=n(t);if(io){Ee(!0);try{n(t)}finally{Ee(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=xs.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=yo();return e={current:e},t.memoizedState=e},useState:function(e){e=Fo(e);var t=e.queue,n=Ss.bind(null,$,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ss,useDeferredValue:function(e,t){return us(yo(),e,t)},useTransition:function(){var e=Fo(!1);return e=fs.bind(null,$,e.queue,!0,!1),yo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=$,i=yo();if(Si){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ml===null)throw Error(o(349));Pl&127||Ao(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,$o(Mo.bind(null,r,a,e),[e]),r.flags|=2048,Yo(9,{destroy:void 0},jo.bind(null,r,a,n,t),null),n},useId:function(){var e=yo(),t=Ml.identifierPrefix;if(Si){var n=mi,r=pi;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ao++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=co++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:_s,useFormState:Wo,useActionState:Wo,useOptimistic:function(e){var t=yo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ws.bind(null,$,!0,n),n.dispatch=t,[e,t]},useMemoCache:wo,useCacheRefresh:function(){return yo().memoizedState=bs.bind(null,$)},useEffectEvent:function(e){var t=yo(),n={impl:e};return t.memoizedState=n,function(){if(jl&2)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},As={readContext:Ui,use:Co,useCallback:cs,useContext:Ui,useEffect:es,useImperativeHandle:os,useInsertionEffect:rs,useLayoutEffect:is,useMemo:ls,useReducer:Eo,useRef:Xo,useState:function(){return Eo(To)},useDebugValue:ss,useDeferredValue:function(e,t){return ds(bo(),eo.memoizedState,e,t)},useTransition:function(){var e=Eo(To)[0],t=bo().memoizedState;return[typeof e==`boolean`?e:So(e),t]},useSyncExternalStore:ko,useId:vs,useHostTransitionStatus:_s,useFormState:Go,useActionState:Go,useOptimistic:function(e,t){return Io(bo(),eo,e,t)},useMemoCache:wo,useCacheRefresh:ys};As.useEffectEvent=ns;var js={readContext:Ui,use:Co,useCallback:cs,useContext:Ui,useEffect:es,useImperativeHandle:os,useInsertionEffect:rs,useLayoutEffect:is,useMemo:ls,useReducer:Oo,useRef:Xo,useState:function(){return Oo(To)},useDebugValue:ss,useDeferredValue:function(e,t){var n=bo();return eo===null?us(n,e,t):ds(n,eo.memoizedState,e,t)},useTransition:function(){var e=Oo(To)[0],t=bo().memoizedState;return[typeof e==`boolean`?e:So(e),t]},useSyncExternalStore:ko,useId:vs,useHostTransitionStatus:_s,useFormState:Jo,useActionState:Jo,useOptimistic:function(e,t){var n=bo();return eo===null?(n.baseState=e,[e,n.queue.dispatch]):Io(n,eo,e,t)},useMemoCache:wo,useCacheRefresh:ys};js.useEffectEvent=ns;function Ms(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ns={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=uu(),i=Aa(r);i.payload=t,n!=null&&(i.callback=n),t=ja(e,i,r),t!==null&&(fu(t,e,r),Ma(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=uu(),i=Aa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ja(e,i,r),t!==null&&(fu(t,e,r),Ma(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=uu(),r=Aa(n);r.tag=2,t!=null&&(r.callback=t),t=ja(e,r,n),t!==null&&(fu(t,e,n),Ma(t,e,n))}};function Ps(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ur(n,r)||!ur(i,a):!0}function Fs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ns.enqueueReplaceState(t,t.state,null)}function Is(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ls(e){Lr(e)}function Rs(e){console.error(e)}function zs(e){Lr(e)}function Bs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Vs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Hs(e,t,n){return n=Aa(n),n.tag=3,n.payload={element:null},n.callback=function(){Bs(e,t)},n}function Us(e){return e=Aa(e),e.tag=3,e}function Ws(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Vs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Vs(t,n,r),typeof i!=`function`&&(eu===null?eu=new Set([this]):eu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Gs(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Bi(t,n,i,!0),n=Wa.current,n!==null){switch(n.tag){case 31:case 13:return Ga===null?wu():n.alternate===null&&Vl===0&&(Vl=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===fa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Uu(e,r,i)),!1;case 22:return n.flags|=65536,r===fa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Uu(e,r,i)),!1}throw Error(o(435,n.tag))}return Uu(e,r,i),wu(),!1}if(Si)return t=Wa.current,t===null?(r!==Ti&&(t=Error(o(423),{cause:r}),Mi(ai(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=ai(r,n),i=Hs(e.stateNode,r,i),Na(e,i),Vl!==4&&(Vl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Ti&&(e=Error(o(422),{cause:r}),Mi(ai(e,n)))),!1;var a=Error(o(520),{cause:r});if(a=ai(a,n),ql===null?ql=[a]:ql.push(a),Vl!==4&&(Vl=2),t===null)return!0;r=ai(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Hs(n.stateNode,r,e),Na(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(eu===null||!eu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Us(i),Ws(i,e,n,r),Na(n,i),!1}n=n.return}while(n!==null);return!1}var Ks=Error(o(461)),qs=!1;function Js(e,t,n,r){t.child=e===null?Ea(t,null,n,r):Ta(t,e.child,n,r)}function Ys(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Hi(t),r=fo(e,t,n,o,a,i),s=go(),e!==null&&!qs?(_o(e,t,i),yc(e,t,i)):(Si&&s&&_i(t),t.flags|=1,Js(e,t,r,i),t.child)}function Xs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Xr(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Zs(e,t,a,r,i)):(e=$r(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!bc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?ur:n,n(o,r)&&e.ref===t.ref)return yc(e,t,i)}return t.flags|=1,e=Zr(a,r),e.ref=t.ref,e.return=t,t.child=e}function Zs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ur(a,r)&&e.ref===t.ref){if(qs=!1,t.pendingProps=r=a,bc(e,i))e.flags&131072&&(qs=!0);else return t.lanes=e.lanes,yc(e,t,i)}}return ac(e,t,n,r,i)}function Qs(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return ec(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&sa(t,a===null?null:a.cachePool),a===null?Ha():Va(t,a),Ja(t);else return r=t.lanes=536870912,ec(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&sa(t,null),Ha(),Ya(t)):(sa(t,a.cachePool),Va(t,a),Ya(t),t.memoizedState=null);return Js(e,t,i,n),t.child}function $s(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ec(e,t,n,r,i){var a=oa();return a=a===null?null:{parent:Yi._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&sa(t,null),Ha(),Ja(t),e!==null&&Bi(e,t,r,!0),t.childLanes=i,null}function tc(e,t){return t=mc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function nc(e,t,n){return Ta(t,e.child,null,n),e=tc(t,t.pendingProps),e.flags|=2,Xa(t),t.memoizedState=null,e}function rc(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(Si){if(r.mode===`hidden`)return e=tc(t,r),t.lanes=536870912,$s(null,e);if(qa(t),(e=xi)?(e=rf(e,wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fi===null?null:{id:pi,overflow:mi},retryLane:536870912,hydrationErrors:null},n=ni(e),n.return=t,t.child=n,bi=t,xi=null)):e=null,e===null)throw Ei(t);return t.lanes=536870912,null}return tc(t,r)}var a=e.memoizedState;if(a!==null){var s=a.dehydrated;if(qa(t),i){if(t.flags&256)t.flags&=-257,t=nc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558))}else if(qs||Bi(e,t,n,!1),i=(n&e.childLanes)!==0,qs||i){if(r=Ml,r!==null&&(s=He(r,n),s!==0&&s!==a.retryLane))throw a.retryLane=s,Wr(e,s),fu(r,e,s),Ks;wu(),t=nc(e,t,n)}else e=a.treeContext,xi=cf(s.nextSibling),bi=t,Si=!0,Ci=null,wi=!1,e!==null&&yi(t,e),t=tc(t,r),t.flags|=4096;return t}return e=Zr(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ic(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ac(e,t,n,r,i){return Hi(t),n=fo(e,t,n,r,void 0,i),r=go(),e!==null&&!qs?(_o(e,t,i),yc(e,t,i)):(Si&&r&&_i(t),t.flags|=1,Js(e,t,n,i),t.child)}function oc(e,t,n,r,i,a){return Hi(t),t.updateQueue=null,n=mo(t,r,n,i),po(e),r=go(),e!==null&&!qs?(_o(e,t,a),yc(e,t,a)):(Si&&r&&_i(t),t.flags|=1,Js(e,t,n,a),t.child)}function sc(e,t,n,r,i){if(Hi(t),t.stateNode===null){var a=qr,o=n.contextType;typeof o==`object`&&o&&(a=Ui(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ns,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Oa(t),o=n.contextType,a.context=typeof o==`object`&&o?Ui(o):qr,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ms(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ns.enqueueReplaceState(a,a.state,null),Ia(t,r,a,i),Fa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Is(n,s);a.props=c;var l=a.context,u=n.contextType;o=qr,typeof u==`object`&&u&&(o=Ui(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Fs(t,a,r,o),Da=!1;var f=t.memoizedState;a.state=f,Ia(t,r,a,i),Fa(),l=t.memoizedState,s||f!==l||Da?(typeof d==`function`&&(Ms(t,n,d,r),l=t.memoizedState),(c=Da||Ps(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ka(e,t),o=t.memoizedProps,u=Is(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=qr,typeof l==`object`&&l&&(c=Ui(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Fs(t,a,r,c),Da=!1,f=t.memoizedState,a.state=f,Ia(t,r,a,i),Fa();var p=t.memoizedState;o!==d||f!==p||Da||e!==null&&e.dependencies!==null&&Vi(e.dependencies)?(typeof s==`function`&&(Ms(t,n,s,r),p=t.memoizedState),(u=Da||Ps(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Vi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,ic(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ta(t,e.child,null,i),t.child=Ta(t,null,n,i)):Js(e,t,n,i),t.memoizedState=a.state,e=t.child):e=yc(e,t,i),e}function cc(e,t,n,r){return Ai(),t.flags|=256,Js(e,t,n,r),t.child}var lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uc(e){return{baseLanes:e,cachePool:ca()}}function dc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Gl),e}function fc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:!!(Za.current&2)),s&&(i=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(Si){if(i?Ka(t):Ya(t),(e=xi)?(e=rf(e,wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fi===null?null:{id:pi,overflow:mi},retryLane:536870912,hydrationErrors:null},n=ni(e),n.return=t,t.child=n,bi=t,xi=null)):e=null,e===null)throw Ei(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(Ya(t),i=t.mode,c=mc({mode:`hidden`,children:c},i),r=ei(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=uc(n),r.childLanes=dc(e,s,n),t.memoizedState=lc,$s(null,r)):(Ka(t),pc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(Ka(t),t.flags&=-257,t=hc(e,t,n)):t.memoizedState===null?(Ya(t),c=r.fallback,i=t.mode,r=mc({mode:`visible`,children:r.children},i),c=ei(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ta(t,e.child,null,n),r=t.child,r.memoizedState=uc(n),r.childLanes=dc(e,s,n),t.memoizedState=lc,t=$s(null,r)):(Ya(t),t.child=e.child,t.flags|=128,t=null);else if(Ka(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(o(419)),r.stack=``,r.digest=s,Mi({value:r,source:null,stack:null}),t=hc(e,t,n)}else if(qs||Bi(e,t,n,!1),s=(n&e.childLanes)!==0,qs||s){if(s=Ml,s!==null&&(r=He(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Wr(e,r),fu(s,e,r),Ks;af(c)||wu(),t=hc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,xi=cf(c.nextSibling),bi=t,Si=!0,Ci=null,wi=!1,e!==null&&yi(t,e),t=pc(t,r.children),t.flags|=4096);return t}return i?(Ya(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=Zr(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ei(c,i,n,null),c.flags|=2):c=Zr(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,$s(null,r),r=t.child,c=e.child.memoizedState,c===null?c=uc(n):(i=c.cachePool,i===null?i=ca():(l=Yi._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=dc(e,s,n),t.memoizedState=lc,$s(e.child,r)):(Ka(t),n=e.child,e=n.sibling,n=Zr(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function pc(e,t){return t=mc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function mc(e,t){return e=Yr(22,e,null,t),e.lanes=0,e}function hc(e,t,n){return Ta(t,e.child,null,n),e=pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ri(e.return,t,n)}function _c(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function vc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Za.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,z(Za,o),Js(e,t,r,n),r=Si?li:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gc(e,n,t);else if(e.tag===19)gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Qa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_c(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_c(t,!0,n,null,a,r);break;case`together`:_c(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function yc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Bi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Zr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Vi(e)))}function xc(e,t,n){switch(t.tag){case 3:se(t,t.stateNode.containerInfo),Ii(t,Yi,e.memoizedState.cache),Ai();break;case 27:case 5:le(t);break;case 4:se(t,t.stateNode.containerInfo);break;case 10:Ii(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,qa(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Ka(t),e=yc(e,t,n),e===null?null:e.sibling):fc(e,t,n):(Ka(t),t.flags|=128,null);Ka(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(Bi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return vc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(Za,Za.current),r)break;return null;case 22:return t.lanes=0,Qs(e,t,n,t.pendingProps);case 24:Ii(t,Yi,e.memoizedState.cache)}return yc(e,t,n)}function Sc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)qs=!0;else{if(!bc(e,n)&&!(t.flags&128))return qs=!1,xc(e,t,n);qs=!!(e.flags&131072)}}else qs=!1,Si&&t.flags&1048576&&gi(t,li,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ha(t.elementType),t.type=e,typeof e==`function`)Xr(e)?(r=Is(e,r),t.tag=1,t=sc(null,t,e,r,n)):(t.tag=0,t=ac(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===w){t.tag=11,t=Ys(null,t,e,r,n);break a}if(i===D){t.tag=14,t=Xs(null,t,e,r,n);break a}}throw t=P(e)||e,Error(o(306,t,``))}}return t;case 0:return ac(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Is(r,t.pendingProps),sc(e,t,r,i,n);case 3:a:{if(se(t,t.stateNode.containerInfo),e===null)throw Error(o(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,ka(e,t),Ia(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Ii(t,Yi,r),r!==a.cache&&zi(t,[Yi],n,!0),Fa(),r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=cc(e,t,r,n);break a}if(r!==i){i=ai(Error(o(424)),t),Mi(i),t=cc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(xi=cf(e.firstChild),bi=t,Si=!0,Ci=null,wi=!0,n=Ea(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ai(),r===i){t=yc(e,t,n);break a}Js(e,t,r,n)}t=t.child}return t;case 26:return ic(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:Si||(n=t.type,e=t.pendingProps,r=Bd(B.current).createElement(n),r[Je]=t,r[Ye]=e,Pd(r,n,e),st(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return le(t),e===null&&Si&&(r=t.stateNode=ff(t.type,t.pendingProps,B.current),bi=t,wi=!0,i=xi,Zd(t.type)?(lf=i,xi=cf(r.firstChild)):xi=i),Js(e,t,t.pendingProps.children,n),ic(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Si&&((i=r=xi)&&(r=tf(r,t.type,t.pendingProps,wi),r===null?i=!1:(t.stateNode=r,bi=t,xi=cf(r.firstChild),wi=!1,i=!0)),i||Ei(t)),le(t),i=t.type,a=t.pendingProps,s=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:s!==null&&Ud(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=fo(e,t,ho,null,null,n),Qf._currentValue=i),ic(e,t),Js(e,t,r,n),t.child;case 6:return e===null&&Si&&((e=n=xi)&&(n=nf(n,t.pendingProps,wi),n===null?e=!1:(t.stateNode=n,bi=t,xi=null,e=!0)),e||Ei(t)),null;case 13:return fc(e,t,n);case 4:return se(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ta(t,null,r,n):Js(e,t,r,n),t.child;case 11:return Ys(e,t,t.type,t.pendingProps,n);case 7:return Js(e,t,t.pendingProps,n),t.child;case 8:return Js(e,t,t.pendingProps.children,n),t.child;case 12:return Js(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ii(t,t.type,r.value),Js(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Hi(t),i=Ui(i),r=r(i),t.flags|=1,Js(e,t,r,n),t.child;case 14:return Xs(e,t,t.type,t.pendingProps,n);case 15:return Zs(e,t,t.type,t.pendingProps,n);case 19:return vc(e,t,n);case 31:return rc(e,t,n);case 22:return Qs(e,t,n,t.pendingProps);case 24:return Hi(t),r=Ui(Yi),e===null?(i=oa(),i===null&&(i=Ml,a=Xi(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Oa(t),Ii(t,Yi,i)):((e.lanes&n)!==0&&(ka(e,t),Ia(t,null,null,n),Fa()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,Ii(t,Yi,r),r!==i.cache&&zi(t,[Yi],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ii(t,Yi,r))),Js(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Cc(e){e.flags|=4}function wc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(xu())e.flags|=8192;else throw ga=fa,ua}}else e.flags&=-16777217}function Tc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(xu())e.flags|=8192;else throw ga=fa,ua}}function Ec(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:X(),e.lanes|=t,Kl|=t)}function Dc(e,t){if(!Si)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kc(e,t,n){var r=t.pendingProps;switch(vi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oc(t),null;case 1:return Oc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Li(Yi),ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ki(t)?Cc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ji())),Oc(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Cc(t),a===null?(Oc(t),wc(t,i,null,r,n)):(Oc(t),Tc(t,a))):a?a===e.memoizedState?(Oc(t),t.flags&=-16777217):(Cc(t),Oc(t),Tc(t,a)):(e=e.memoizedProps,e!==r&&Cc(t),Oc(t),wc(t,i,e,r,n)),null;case 27:if(V(t),n=B.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Cc(t);else{if(!r){if(t.stateNode===null)throw Error(o(166));return Oc(t),null}e=ie.current,ki(t)?Di(t,e):(e=ff(i,r,n),t.stateNode=e,Cc(t))}return Oc(t),null;case 5:if(V(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Cc(t);else{if(!r){if(t.stateNode===null)throw Error(o(166));return Oc(t),null}if(a=ie.current,ki(t))Di(t,a);else{var s=Bd(B.current);switch(a){case 1:a=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=s.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=s.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?s.createElement(i,{is:r.is}):s.createElement(i)}}a[Je]=t,a[Ye]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)a.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Cc(t)}}return Oc(t),wc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Cc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(o(166));if(e=B.current,ki(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=bi,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Je]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||Ei(t,!0)}else e=Bd(e).createTextNode(r),e[Je]=t,t.stateNode=e}return Oc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ki(t),n!==null){if(e===null){if(!r)throw Error(o(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(o(557));e[Je]=t}else Ai(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oc(t),e=!1}else n=ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Xa(t),t):(Xa(t),null);if(t.flags&128)throw Error(o(558))}return Oc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(o(317));i[Je]=t}else Ai(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oc(t),i=!1}else i=ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Xa(t),t):(Xa(t),null)}return Xa(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ec(t,t.updateQueue),Oc(t),null);case 4:return ce(),e===null&&xd(t.stateNode.containerInfo),Oc(t),null;case 10:return Li(t.type),Oc(t),null;case 19:if(re(Za),r=t.memoizedState,r===null)return Oc(t),null;if(i=!!(t.flags&128),a=r.rendering,a===null){if(i)Dc(r,!1);else{if(Vl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Qa(e),a!==null){for(t.flags|=128,Dc(r,!1),e=a.updateQueue,t.updateQueue=e,Ec(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Qr(n,e),n=n.sibling;return z(Za,Za.current&1|2),Si&&hi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&xe()>Ql&&(t.flags|=128,i=!0,Dc(r,!1),t.lanes=4194304)}}else{if(!i){if(e=Qa(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ec(t,e),Dc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!Si)return Oc(t),null}else 2*xe()-r.renderingStartTime>Ql&&n!==536870912&&(t.flags|=128,i=!0,Dc(r,!1),t.lanes=4194304)}r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(Oc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=xe(),e.sibling=null,n=Za.current,z(Za,i?n&1|2:n&1),Si&&hi(t,r.treeForkCount),e);case 22:case 23:return Xa(t),Ua(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Oc(t),t.subtreeFlags&6&&(t.flags|=8192)):Oc(t),n=t.updateQueue,n!==null&&Ec(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&re(aa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Li(Yi),Oc(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Ac(e,t){switch(vi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Li(Yi),ce(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return V(t),null;case 31:if(t.memoizedState!==null){if(Xa(t),t.alternate===null)throw Error(o(340));Ai()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Xa(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ai()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(Za),null;case 4:return ce(),null;case 10:return Li(t.type),null;case 22:case 23:return Xa(t),Ua(),e!==null&&re(aa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Li(Yi),null;case 25:return null;default:return null}}function jc(e,t){switch(vi(t),t.tag){case 3:Li(Yi),ce();break;case 26:case 27:case 5:V(t);break;case 4:ce();break;case 31:t.memoizedState!==null&&Xa(t);break;case 13:Xa(t);break;case 19:re(Za);break;case 10:Li(t.type);break;case 22:case 23:Xa(t),Ua(),e!==null&&re(aa);break;case 24:Li(Yi)}}function Mc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Hu(t,t.return,e)}}function Nc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Hu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Hu(t,t.return,e)}}function Pc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Ra(t,n)}catch(t){Hu(e,e.return,t)}}}function Fc(e,t,n){n.props=Is(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Hu(e,t,n)}}function Ic(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Hu(e,t,n)}}function Lc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Hu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Hu(e,t,n)}else n.current=null}}function Rc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Hu(e,e.return,t)}}function zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[Ye]=t}catch(t){Hu(e,e.return,t)}}function Bc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Vc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Hc(e,t,n),e=e.sibling;e!==null;)Hc(e,t,n),e=e.sibling}function Uc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Uc(e,t,n),e=e.sibling;e!==null;)Uc(e,t,n),e=e.sibling}function Wc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[Je]=e,t[Ye]=n}catch(t){Hu(e,e.return,t)}}var Gc=!1,Kc=!1,qc=!1,Jc=typeof WeakSet==`function`?WeakSet:Set,Yc=null;function Xc(e,t){if(e=e.containerInfo,Rd=sp,e=mr(e),hr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=s+i),f!==a||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=s),p===a&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,Yc=t;Yc!==null;)if(t=Yc,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Yc=e;else for(;Yc!==null;){switch(t=Yc,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Is(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Hu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Yc=e;break}Yc=t.return}}function Zc(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:fl(e,n),r&4&&Mc(5,n);break;case 1:if(fl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Hu(n,n.return,e)}else{var i=Is(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Hu(n,n.return,e)}}}r&64&&Pc(n),r&512&&Ic(n,n.return);break;case 3:if(fl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Ra(e,t)}catch(e){Hu(n,n.return,e)}}break;case 27:t===null&&r&4&&Wc(n);case 26:case 5:fl(e,n),t===null&&r&4&&Rc(n),r&512&&Ic(n,n.return);break;case 12:fl(e,n);break;case 31:fl(e,n),r&4&&rl(e,n);break;case 13:fl(e,n),r&4&&il(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ku.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Gc,!r){t=t!==null&&t.memoizedState!==null||Kc,i=Gc;var a=Kc;Gc=r,(Kc=t)&&!a?ml(e,n,!!(n.subtreeFlags&8772)):fl(e,n),Gc=i,Kc=a}break;case 30:break;default:fl(e,n)}}function Qc(e){var t=e.alternate;t!==null&&(e.alternate=null,Qc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&nt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $c=null,el=!1;function tl(e,t,n){for(n=n.child;n!==null;)nl(e,t,n),n=n.sibling}function nl(e,t,n){if(Te&&typeof Te.onCommitFiberUnmount==`function`)try{Te.onCommitFiberUnmount(J,n)}catch{}switch(n.tag){case 26:Kc||Lc(n,t),tl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Kc||Lc(n,t);var r=$c,i=el;Zd(n.type)&&($c=n.stateNode,el=!1),tl(e,t,n),pf(n.stateNode),$c=r,el=i;break;case 5:Kc||Lc(n,t);case 6:if(r=$c,i=el,$c=null,tl(e,t,n),$c=r,el=i,$c!==null){if(el)try{($c.nodeType===9?$c.body:$c.nodeName===`HTML`?$c.ownerDocument.body:$c).removeChild(n.stateNode)}catch(e){Hu(n,t,e)}else try{$c.removeChild(n.stateNode)}catch(e){Hu(n,t,e)}}break;case 18:$c!==null&&(el?(e=$c,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd($c,n.stateNode));break;case 4:r=$c,i=el,$c=n.stateNode.containerInfo,el=!0,tl(e,t,n),$c=r,el=i;break;case 0:case 11:case 14:case 15:Nc(2,n,t),Kc||Nc(4,n,t),tl(e,t,n);break;case 1:Kc||(Lc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Fc(n,t,r)),tl(e,t,n);break;case 21:tl(e,t,n);break;case 22:Kc=(r=Kc)||n.memoizedState!==null,tl(e,t,n),Kc=r;break;default:tl(e,t,n)}}function rl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Hu(t,t.return,e)}}}function il(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Hu(t,t.return,e)}}function al(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Jc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Jc),t;default:throw Error(o(435,e.tag))}}function ol(e,t){var n=al(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=qu.bind(null,e,t);t.then(r,r)}})}function sl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){$c=c.stateNode,el=!1;break a}break;case 5:$c=c.stateNode,el=!1;break a;case 3:case 4:$c=c.stateNode.containerInfo,el=!0;break a}c=c.return}if($c===null)throw Error(o(160));nl(a,s,i),$c=null,el=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ll(t,e),t=t.sibling}var cl=null;function ll(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:sl(t,e),ul(e),r&4&&(Nc(3,e,e.return),Mc(3,e),Nc(5,e,e.return));break;case 1:sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),r&64&&Gc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=cl;if(sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[tt]||a[Je]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[Je]=e,st(a),r=a;break a;case`link`:var s=Vf(`link`,`href`,i).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(a=s[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(s=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(a=s[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(o(468,r))}a[Je]=e,st(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode)}else e.stateNode=If(i,r,e.memoizedProps)}else a===r?r===null&&e.stateNode!==null&&zc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),n!==null&&r&4&&zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(sl(t,e),ul(e),r&512&&(Kc||n===null||Lc(n,n.return)),e.flags&32){i=e.stateNode;try{Nt(i,``)}catch(t){Hu(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,zc(e,i,n===null?i:n.memoizedProps)),r&1024&&(qc=!0);break;case 6:if(sl(t,e),ul(e),r&4){if(e.stateNode===null)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Hu(e,e.return,t)}}break;case 3:if(Bf=null,i=cl,cl=gf(t.containerInfo),sl(t,e),cl=i,ul(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Hu(e,e.return,t)}qc&&(qc=!1,dl(e));break;case 4:r=cl,cl=gf(e.stateNode.containerInfo),sl(t,e),ul(e),cl=r;break;case 12:sl(t,e),ul(e);break;case 31:sl(t,e),ul(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ol(e,r)));break;case 13:sl(t,e),ul(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Xl=xe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ol(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Gc,d=Kc;if(Gc=u||i,Kc=d||l,sl(t,e),Kc=d,Gc=u,ul(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||Gc||Kc||pl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)s=a.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Hu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Hu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Hu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ol(e,n))));break;case 19:sl(t,e),ul(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ol(e,r)));break;case 30:break;case 21:break;default:sl(t,e),ul(e)}}function ul(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Bc(r)){n=r;break}r=r.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode;Uc(e,Vc(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(Nt(a,``),n.flags&=-33),Uc(e,Vc(e),a);break;case 3:case 4:var s=n.stateNode.containerInfo;Hc(e,Vc(e),s);break;default:throw Error(o(161))}}catch(t){Hu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;dl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zc(e,t.alternate,t),t=t.sibling}function pl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Nc(4,t,t.return),pl(t);break;case 1:Lc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Fc(t,t.return,n),pl(t);break;case 27:pf(t.stateNode);case 26:case 5:Lc(t,t.return),pl(t);break;case 22:t.memoizedState===null&&pl(t);break;case 30:pl(t);break;default:pl(t)}e=e.sibling}}function ml(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:ml(i,a,n),Mc(4,a);break;case 1:if(ml(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Hu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)La(c[i],s)}catch(e){Hu(r,r.return,e)}}n&&o&64&&Pc(a),Ic(a,a.return);break;case 27:Wc(a);case 26:case 5:ml(i,a,n),n&&r===null&&o&4&&Rc(a),Ic(a,a.return);break;case 12:ml(i,a,n);break;case 31:ml(i,a,n),n&&o&4&&rl(i,a);break;case 13:ml(i,a,n),n&&o&4&&il(i,a);break;case 22:a.memoizedState===null&&ml(i,a,n),Ic(a,a.return);break;case 30:break;default:ml(i,a,n)}t=t.sibling}}function hl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Zi(n))}function gl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zi(e))}function _l(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vl(e,t,n,r),t=t.sibling}function vl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:_l(e,t,n,r),i&2048&&Mc(9,t);break;case 1:_l(e,t,n,r);break;case 3:_l(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Zi(e)));break;case 12:if(i&2048){_l(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Hu(t,t.return,e)}}else _l(e,t,n,r);break;case 31:_l(e,t,n,r);break;case 13:_l(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?_l(e,t,n,r):(a._visibility|=2,yl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?_l(e,t,n,r):bl(e,t),i&2048&&hl(o,t);break;case 24:_l(e,t,n,r),i&2048&&gl(t.alternate,t);break;default:_l(e,t,n,r)}}function yl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:yl(a,o,s,c,i),Mc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,yl(a,o,s,c,i)):u._visibility&2?yl(a,o,s,c,i):bl(a,o),i&&l&2048&&hl(o.alternate,o);break;case 24:yl(a,o,s,c,i),i&&l&2048&&gl(o.alternate,o);break;default:yl(a,o,s,c,i)}t=t.sibling}}function bl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:bl(n,r),i&2048&&hl(r.alternate,r);break;case 24:bl(n,r),i&2048&&gl(r.alternate,r);break;default:bl(n,r)}t=t.sibling}}var xl=8192;function Sl(e,t,n){if(e.subtreeFlags&xl)for(e=e.child;e!==null;)Cl(e,t,n),e=e.sibling}function Cl(e,t,n){switch(e.tag){case 26:Sl(e,t,n),e.flags&xl&&e.memoizedState!==null&&Gf(n,cl,e.memoizedState,e.memoizedProps);break;case 5:Sl(e,t,n);break;case 3:case 4:var r=cl;cl=gf(e.stateNode.containerInfo),Sl(e,t,n),cl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=xl,xl=16777216,Sl(e,t,n),xl=r):Sl(e,t,n));break;default:Sl(e,t,n)}}function wl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Tl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Yc=r,Ol(r,e)}wl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)El(e),e=e.sibling}function El(e){switch(e.tag){case 0:case 11:case 15:Tl(e),e.flags&2048&&Nc(9,e,e.return);break;case 3:Tl(e);break;case 12:Tl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Dl(e)):Tl(e);break;default:Tl(e)}}function Dl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Yc=r,Ol(r,e)}wl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Nc(8,t,t.return),Dl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Dl(t));break;default:Dl(t)}e=e.sibling}}function Ol(e,t){for(;Yc!==null;){var n=Yc;switch(n.tag){case 0:case 11:case 15:Nc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Zi(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Yc=r;else a:for(n=e;Yc!==null;){r=Yc;var i=r.sibling,a=r.return;if(Qc(r),r===n){Yc=null;break a}if(i!==null){i.return=a,Yc=i;break a}Yc=a}}}var kl={getCacheForType:function(e){var t=Ui(Yi),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ui(Yi).controller.signal}},Al=typeof WeakMap==`function`?WeakMap:Map,jl=0,Ml=null,Nl=null,Pl=0,Fl=0,Il=null,Ll=!1,Rl=!1,zl=!1,Bl=0,Vl=0,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=null,Jl=null,Yl=!1,Xl=0,Zl=0,Ql=1/0,$l=null,eu=null,tu=0,nu=null,ru=null,iu=0,au=0,ou=null,su=null,cu=0,lu=null;function uu(){return jl&2&&Pl!==0?Pl&-Pl:I.T===null?Ge():ld()}function du(){if(Gl===0){if(!(Pl&536870912)||Si){var e=Me;Me<<=1,!(Me&3932160)&&(Me=262144),Gl=e}else Gl=536870912}return e=Wa.current,e!==null&&(e.flags|=32),Gl}function fu(e,t,n){(e===Ml&&(Fl===2||Fl===9)||e.cancelPendingCommit!==null)&&(yu(e,0),gu(e,Pl,Gl,!1)),Re(e,n),(!(jl&2)||e!==Ml)&&(e===Ml&&(!(jl&2)&&(Ul|=n),Vl===4&&gu(e,Pl,Gl,!1)),td(e))}function pu(e,t,n){if(jl&6)throw Error(o(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Fe(e,t),i=r?Du(e,t):Tu(e,t,!0),a=r;do{if(i===0){Rl&&!r&&gu(e,t,0,!1);break}if(n=e.current.alternate,a&&!hu(n)){i=Tu(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;i=ql;var l=c.current.memoizedState.isDehydrated;if(l&&(yu(c,s).flags|=256),s=Tu(c,s,!1),s!==2){if(zl&&!l){c.errorRecoveryDisabledLanes|=a,Ul|=a,i=4;break a}a=Jl,Jl=i,a!==null&&(Jl===null?Jl=a:Jl.push.apply(Jl,a))}i=s}if(a=!1,i!==2)continue}}if(i===1){yu(e,0),gu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:gu(r,t,Gl,!Ll);break a;case 2:Jl=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=Xl+300-xe(),10<i)){if(gu(r,t,Gl,!Ll),Pe(r,0,!0)!==0)break a;iu=t,r.timeoutHandle=Kd(mu.bind(null,r,n,Jl,$l,Yl,t,Gl,Ul,Kl,Ll,a,`Throttled`,-0,0),i);break a}mu(r,n,Jl,$l,Yl,t,Gl,Ul,Kl,Ll,a,null,-0,0)}break}while(1);td(e)}function mu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vt},Cl(t,a,d);var m=(a&62914560)===a?Xl-xe():(a&4194048)===a?Zl-xe():0;if(m=qf(d,m),m!==null){iu=a,e.cancelPendingCommit=m(Pu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),gu(e,a,o,!l);return}}Pu(e,t,a,n,r,i,o,s,c)}function hu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!lr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gu(e,t,n,r){t&=~Wl,t&=~Ul,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-De(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Be(e,n,t)}function _u(){return jl&6?!0:(nd(0,!1),!1)}function vu(){if(Nl!==null){if(Fl===0)var e=Nl.return;else e=Nl,Fi=Pi=null,vo(e),ya=null,ba=0,e=Nl;for(;e!==null;)jc(e.alternate,e),e=e.return;Nl=null}}function yu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),iu=0,vu(),Ml=e,Nl=n=Zr(e.current,null),Pl=t,Fl=0,Il=null,Ll=!1,Rl=Fe(e,t),zl=!1,Kl=Gl=Wl=Ul=Hl=Vl=0,Jl=ql=null,Yl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-De(r),a=1<<i;t|=e[i],r&=~a}return Bl=t,Vr(),n}function bu(e,t){$=null,I.H=Os,t===la||t===da?(t=_a(),Fl=3):t===ua?(t=_a(),Fl=4):Fl=t===Ks?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Il=t,Nl===null&&(Vl=1,Bs(e,ai(t,e.current)))}function xu(){var e=Wa.current;return e===null?!0:(Pl&4194048)===Pl?Ga===null:(Pl&62914560)===Pl||Pl&536870912?e===Ga:!1}function Su(){var e=I.H;return I.H=Os,e===null?Os:e}function Cu(){var e=I.A;return I.A=kl,e}function wu(){Vl=4,Ll||(Pl&4194048)!==Pl&&Wa.current!==null||(Rl=!0),!(Hl&134217727)&&!(Ul&134217727)||Ml===null||gu(Ml,Pl,Gl,!1)}function Tu(e,t,n){var r=jl;jl|=2;var i=Su(),a=Cu();(Ml!==e||Pl!==t)&&($l=null,yu(e,t)),t=!1;var o=Vl;a:do try{if(Fl!==0&&Nl!==null){var s=Nl,c=Il;switch(Fl){case 8:vu(),o=6;break a;case 3:case 2:case 9:case 6:Wa.current===null&&(t=!0);var l=Fl;if(Fl=0,Il=null,ju(e,s,c,l),n&&Rl){o=0;break a}break;default:l=Fl,Fl=0,Il=null,ju(e,s,c,l)}}Eu(),o=Vl;break}catch(t){bu(e,t)}while(1);return t&&e.shellSuspendCounter++,Fi=Pi=null,jl=r,I.H=i,I.A=a,Nl===null&&(Ml=null,Pl=0,Vr()),o}function Eu(){for(;Nl!==null;)ku(Nl)}function Du(e,t){var n=jl;jl|=2;var r=Su(),i=Cu();Ml!==e||Pl!==t?($l=null,Ql=xe()+500,yu(e,t)):Rl=Fe(e,t);a:do try{if(Fl!==0&&Nl!==null){t=Nl;var a=Il;b:switch(Fl){case 1:Fl=0,Il=null,ju(e,t,a,1);break;case 2:case 9:if(pa(a)){Fl=0,Il=null,Au(t);break}t=function(){Fl!==2&&Fl!==9||Ml!==e||(Fl=7),td(e)},a.then(t,t);break a;case 3:Fl=7;break a;case 4:Fl=5;break a;case 7:pa(a)?(Fl=0,Il=null,Au(t)):(Fl=0,Il=null,ju(e,t,a,7));break;case 5:var s=null;switch(Nl.tag){case 26:s=Nl.memoizedState;case 5:case 27:var c=Nl;if(s?Wf(s):c.stateNode.complete){Fl=0,Il=null;var l=c.sibling;if(l!==null)Nl=l;else{var u=c.return;u===null?Nl=null:(Nl=u,Mu(u))}break b}}Fl=0,Il=null,ju(e,t,a,5);break;case 6:Fl=0,Il=null,ju(e,t,a,6);break;case 8:vu(),Vl=6;break a;default:throw Error(o(462))}}Ou();break}catch(t){bu(e,t)}while(1);return Fi=Pi=null,I.H=r,I.A=i,jl=n,Nl===null?(Ml=null,Pl=0,Vr(),Vl):0}function Ou(){for(;Nl!==null&&!H();)ku(Nl)}function ku(e){var t=Sc(e.alternate,e,Bl);e.memoizedProps=e.pendingProps,t===null?Mu(e):Nl=t}function Au(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=oc(n,t,t.pendingProps,t.type,void 0,Pl);break;case 11:t=oc(n,t,t.pendingProps,t.type.render,t.ref,Pl);break;case 5:vo(t);default:jc(n,t),t=Nl=Qr(t,Bl),t=Sc(n,t,Bl)}e.memoizedProps=e.pendingProps,t===null?Mu(e):Nl=t}function ju(e,t,n,r){Fi=Pi=null,vo(t),ya=null,ba=0;var i=t.return;try{if(Gs(e,i,t,n,Pl)){Vl=1,Bs(e,ai(n,e.current)),Nl=null;return}}catch(t){if(i!==null)throw Nl=i,t;Vl=1,Bs(e,ai(n,e.current)),Nl=null;return}t.flags&32768?(Si||r===1?e=!0:Rl||Pl&536870912?e=!1:(Ll=e=!0,(r===2||r===9||r===3||r===6)&&(r=Wa.current,r!==null&&r.tag===13&&(r.flags|=16384))),Nu(t,e)):Mu(t)}function Mu(e){var t=e;do{if(t.flags&32768){Nu(t,Ll);return}e=t.return;var n=kc(t.alternate,t,Bl);if(n!==null){Nl=n;return}if(t=t.sibling,t!==null){Nl=t;return}Nl=t=e}while(t!==null);Vl===0&&(Vl=5)}function Nu(e,t){do{var n=Ac(e.alternate,e);if(n!==null){n.flags&=32767,Nl=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Nl=e;return}Nl=e=n}while(e!==null);Vl=6,Nl=null}function Pu(e,t,n,r,i,a,s,c,l){e.cancelPendingCommit=null;do zu();while(tu!==0);if(jl&6)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(a=t.lanes|t.childLanes,a|=Br,ze(e,n,a,s,c,l),e===Ml&&(Nl=Ml=null,Pl=0),ru=t,nu=e,iu=n,au=a,ou=i,su=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Ju(K,function(){return Bu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=I.T,I.T=null,i=L.p,L.p=2,s=jl,jl|=4;try{Xc(e,t,n)}finally{jl=s,L.p=i,I.T=r}}tu=1,Fu(),Iu(),Lu()}}function Fu(){if(tu===1){tu=0;var e=nu,t=ru,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=I.T,I.T=null;var r=L.p;L.p=2;var i=jl;jl|=4;try{ll(t,e);var a=zd,o=mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&pr(s.ownerDocument.documentElement,s)){if(c!==null&&hr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=fr(s,h),v=fr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{jl=i,L.p=r,I.T=n}}e.current=t,tu=2}}function Iu(){if(tu===2){tu=0;var e=nu,t=ru,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=I.T,I.T=null;var r=L.p;L.p=2;var i=jl;jl|=4;try{Zc(e,t.alternate,t)}finally{jl=i,L.p=r,I.T=n}}tu=3}}function Lu(){if(tu===4||tu===3){tu=0,be();var e=nu,t=ru,n=iu,r=su;t.subtreeFlags&10256||t.flags&10256?tu=5:(tu=0,ru=nu=null,Ru(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(eu=null),We(n),t=t.stateNode,Te&&typeof Te.onCommitFiberRoot==`function`)try{Te.onCommitFiberRoot(J,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=I.T,i=L.p,L.p=2,I.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{I.T=t,L.p=i}}iu&3&&zu(),td(e),i=e.pendingLanes,n&261930&&i&42?e===lu?cu++:(cu=0,lu=e):cu=0,nd(0,!1)}}function Ru(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Zi(t)))}function zu(){return Fu(),Iu(),Lu(),Bu()}function Bu(){if(tu!==5)return!1;var e=nu,t=au;au=0;var n=We(iu),r=I.T,i=L.p;try{L.p=32>n?32:n,I.T=null,n=ou,ou=null;var a=nu,s=iu;if(tu=0,ru=nu=null,iu=0,jl&6)throw Error(o(331));var c=jl;if(jl|=4,El(a.current),vl(a,a.current,s,n),jl=c,nd(0,!1),Te&&typeof Te.onPostCommitFiberRoot==`function`)try{Te.onPostCommitFiberRoot(J,a)}catch{}return!0}finally{L.p=i,I.T=r,Ru(e,t)}}function Vu(e,t,n){t=ai(n,t),t=Hs(e.stateNode,t,2),e=ja(e,t,2),e!==null&&(Re(e,2),td(e))}function Hu(e,t,n){if(e.tag===3)Vu(e,e,n);else for(;t!==null;){if(t.tag===3){Vu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(eu===null||!eu.has(r))){e=ai(n,e),n=Us(2),r=ja(t,n,2),r!==null&&(Ws(n,r,t,e),Re(r,2),td(r));break}}t=t.return}}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Al;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(zl=!0,i.add(n),e=Wu.bind(null,e,t,n),t.then(e,e))}function Wu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ml===e&&(Pl&n)===n&&(Vl===4||Vl===3&&(Pl&62914560)===Pl&&300>xe()-Xl?!(jl&2)&&yu(e,0):Wl|=n,Kl===Pl&&(Kl=0)),td(e)}function Gu(e,t){t===0&&(t=X()),e=Wr(e,t),e!==null&&(Re(e,t),td(e))}function Ku(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gu(e,n)}function qu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}r!==null&&r.delete(t),Gu(e,n)}function Ju(e,t){return ve(e,t)}var Yu=null,Xu=null,Zu=!1,Qu=!1,$u=!1,ed=0;function td(e){e!==Xu&&e.next===null&&(Xu===null?Yu=Xu=e:Xu=Xu.next=e),Qu=!0,Zu||(Zu=!0,cd())}function nd(e,t){if(!$u&&Qu){$u=!0;do for(var n=!1,r=Yu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-De(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,sd(r,a))}else a=Pl,a=Pe(r,r===Ml?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Fe(r,a)||(n=!0,sd(r,a))}r=r.next}while(n);$u=!1}}function rd(){id()}function id(){Qu=Zu=!1;var e=0;ed!==0&&Gd()&&(e=ed);for(var t=xe(),n=null,r=Yu;r!==null;){var i=r.next,a=ad(r,t);a===0?(r.next=null,n===null?Yu=i:n.next=i,i===null&&(Xu=n)):(n=r,(e!==0||a&3)&&(Qu=!0)),r=i}tu!==0&&tu!==5||nd(e,!1),ed!==0&&(ed=0)}function ad(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-De(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ie(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Ml,n=Pl,n=Pe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Fl===2||Fl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ye(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Fe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ye(r),We(n)){case 2:case 8:n=G;break;case 32:n=K;break;case 268435456:n=Se;break;default:n=K}return r=od.bind(null,e),n=ve(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ye(r),e.callbackPriority=2,e.callbackNode=null,2}function od(e,t){if(tu!==0&&tu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(zu()&&e.callbackNode!==n)return null;var r=Pl;return r=Pe(e,e===Ml?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(pu(e,r,t),ad(e,xe()),e.callbackNode!=null&&e.callbackNode===n?od.bind(null,e):null)}function sd(e,t){if(zu())return null;pu(e,t,!0)}function cd(){Yd(function(){jl&6?ve(W,rd):id()})}function ld(){if(ed===0){var e=ea;e===0&&(e=je,je<<=1,!(je&261888)&&(je=256)),ed=e}return ed}function ud(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Bt(``+e)}function dd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function fd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=ud((i[Ye]||null).action),o=r.submitter;o&&(t=(t=o[Ye]||null)?ud(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new cn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ed!==0){var e=o?dd(i,o):new FormData(i);ms(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?dd(i,o):new FormData(i),ms(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var pd=0;pd<Fr.length;pd++){var md=Fr[pd];Ir(md.toLowerCase(),`on`+(md[0].toUpperCase()+md.slice(1)))}Ir(Dr,`onAnimationEnd`),Ir(Or,`onAnimationIteration`),Ir(kr,`onAnimationStart`),Ir(`dblclick`,`onDoubleClick`),Ir(`focusin`,`onFocus`),Ir(`focusout`,`onBlur`),Ir(Ar,`onTransitionRun`),Ir(jr,`onTransitionStart`),Ir(Mr,`onTransitionCancel`),Ir(Nr,`onTransitionEnd`),dt(`onMouseEnter`,[`mouseout`,`mouseover`]),dt(`onMouseLeave`,[`mouseout`,`mouseover`]),dt(`onPointerEnter`,[`pointerout`,`pointerover`]),dt(`onPointerLeave`,[`pointerout`,`pointerover`]),ut(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),ut(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),ut(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),ut(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),ut(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),ut(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var hd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),gd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(hd));function _d(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Lr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Lr(e)}i.currentTarget=null,a=c}}}}function vd(e,t){var n=t[Ze];n===void 0&&(n=t[Ze]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,ct.forEach(function(t){t!==`selectionchange`&&(gd.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!Zt||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=rt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}Jt(function(){var r=a,i=Ut(n),o=[];a:{var s=Pr.get(e);if(s!==void 0){var c=cn,u=e;switch(e){case`keypress`:if(rn(n)===0)break a;case`keydown`:case`keyup`:c=En;break;case`focusin`:u=`focus`,c=_n;break;case`focusout`:u=`blur`,c=_n;break;case`beforeblur`:case`afterblur`:c=_n;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=hn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=gn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=On;break;case Dr:case Or:case kr:c=vn;break;case Nr:c=kn;break;case`scroll`:case`scrollend`:c=un;break;case`wheel`:c=An;break;case`copy`:case`cut`:case`paste`:c=yn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Dn;break;case`toggle`:case`beforetoggle`:c=jn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Yt(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Ht&&(u=n.relatedTarget||n.fromElement)&&(rt(u)||u[Xe]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?rt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=hn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Dn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:at(c),h=u==null?s:at(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,rt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Ed,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Dd(o,s,c,d,!1),u!==null&&f!==null&&Dd(o,f,u,d,!0)}}a:{if(s=r?at(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=Zn;else if(Gn(s)){if(Qn)v=sr;else{v=ar;var y=ir}}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&Lt(r.elementType)&&(v=Zn):v=or;if(v&&=v(e,r)){Kn(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&kt(s,`number`,s.value)}switch(y=r?at(r):window,e){case`focusin`:(Gn(y)||y.contentEditable===`true`)&&(_r=y,vr=r,yr=null);break;case`focusout`:yr=vr=_r=null;break;case`mousedown`:br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:br=!1,xr(o,n,i);break;case`selectionchange`:if(gr)break;case`keydown`:case`keyup`:xr(o,n,i)}var b;if(Nn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Vn?zn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(In&&n.locale!==`ko`&&(Vn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Vn&&(b=nn()):($t=i,en=`value`in $t?$t.value:$t.textContent,Vn=!0)),y=Td(r,x),0<y.length&&(x=new bn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=Bn(n),b!==null&&(x.data=b)))),(b=Fn?Hn(e,n):Un(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new bn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),fd(o,e,r,n,i)}_d(o,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Yt(e,n),i!=null&&r.unshift(wd(e,i,a)),i=Yt(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Yt(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=Yt(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Nt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Nt(e,``+r);break;case`className`:_t(e,`class`,r);break;case`tabIndex`:_t(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:_t(e,n,r);break;case`style`:It(e,r,a);break;case`data`:if(t!==`object`){_t(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Bt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof a==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,i.name,i,null),Md(e,t,`formEncType`,i.formEncType,i,null),Md(e,t,`formMethod`,i.formMethod,i,null),Md(e,t,`formTarget`,i.formTarget,i,null)):(Md(e,t,`encType`,i.encType,i,null),Md(e,t,`method`,i.method,i,null),Md(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Bt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Vt);break;case`onScroll`:r!=null&&vd(`scroll`,e);break;case`onScrollEnd`:r!=null&&vd(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(o(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Bt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:vd(`beforetoggle`,e),vd(`toggle`,e),gt(e,`popover`,r);break;case`xlinkActuate`:vt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:vt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:vt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:vt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:vt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:vt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:gt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Rt.get(n)||n,gt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:It(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(o(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Nt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Nt(e,``+r);break;case`onScroll`:r!=null&&vd(`scroll`,e);break;case`onScrollEnd`:r!=null&&vd(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Vt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!lt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[Ye]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):gt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:vd(`error`,e),vd(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var s=n[a];if(s!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(o(137,t));default:Md(e,t,a,s,n,null)}}i&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:vd(`invalid`,e);var c=a=s=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(o(137,t));break;default:Md(e,t,r,d,n,null)}}Ot(e,a,c,l,u,s,i,!1);return;case`select`:for(i in vd(`invalid`,e),r=s=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,i,c,n,null)}t=a,n=s,e.multiple=!!r,t==null?n!=null&&At(e,!!r,n,!0):At(e,!!r,t,!1);return;case`textarea`:for(s in vd(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(o(91));break;default:Md(e,t,s,c,n,null)}Mt(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:vd(`beforetoggle`,e),vd(`toggle`,e),vd(`cancel`,e),vd(`close`,e);break;case`iframe`:case`object`:vd(`load`,e);break;case`video`:case`audio`:for(r=0;r<hd.length;r++)vd(hd[r],e);break;case`image`:vd(`error`,e),vd(`load`,e);break;case`details`:vd(`toggle`,e);break;case`embed`:case`source`:case`link`:vd(`error`,e),vd(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(o(137,t));default:Md(e,t,u,r,n,null)}return;default:if(Lt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(o(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}Dt(e,s,c,l,u,d,a,i);return;case`select`:for(a in m=s=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||Md(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:s=a;default:a!==l&&Md(e,t,i,a,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?At(e,!!n,n?[]:``,!1):At(e,!!n,t,!0)):At(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,i)}for(s in r)if(i=r[s],a=n[s],r.hasOwnProperty(s)&&(i!=null||a!=null))switch(s){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(o(91));break;default:i!==a&&Md(e,t,s,i,r,a)}jt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(o(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(Lt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[tt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),nt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[tt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(o(452));return e;case`head`:if(e=t.head,!e)throw Error(o(453));return e;case`body`:if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);nt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=L.d;L.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=_u();return e||t}function yf(e){var t=it(e);t!==null&&t.tag===5&&t.type===`form`?gs(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Et(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),st(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Et(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Et(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Et(n.imageSizes)+`"]`)):i+=`[href="`+Et(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),st(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Et(r)+`"][href="`+Et(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),st(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);st(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),st(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),st(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=B.current)?gf(i):null;if(!i)throw Error(o(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=ot(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=ot(i).hoistableStyles,s=a.get(e);if(s||(i=i.ownerDocument||i,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,s),(a=i.querySelector(jf(e)))&&!a._p&&(s.instance=a,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,s.state))),t&&r===null)throw Error(o(528,``));return s}if(t&&r!==null)throw Error(o(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=ot(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Af(e){return`href="`+Et(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),st(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Et(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Et(n.href)+`"]`);if(r)return t.instance=r,st(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),st(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,st(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),st(a);var s=a;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,st(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),st(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(o(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[tt]||a[Je]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,st(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),st(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Le(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Le(0),this.hiddenUpdates=Le(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Yr(3,null,null,t),e.current=a,a.stateNode=e,t=Xi(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Oa(a),e}function tp(e){return e?(e=qr,e):qr}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Aa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=ja(e,r,t),n!==null&&(fu(n,e,t),Ma(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=Wr(e,67108864);t!==null&&fu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=uu();t=Ue(t);var n=Wr(e,t);n!==null&&fu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=2,up(e,t,n,r)}finally{L.p=a,I.T=i}}function lp(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=8,up(e,t,n,r)}finally{L.p=a,I.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=it(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Y(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-De(o);s.entanglements[1]|=c,o&=~c}td(a),!(jl&6)&&(Ql=xe()+500,nd(0,!1))}}break;case 31:case 13:s=Wr(a,2),s!==null&&fu(s,a,2),_u(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=Ut(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=rt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(U()){case W:return 2;case G:return 8;case K:case q:return 32;case Se:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=it(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=rt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,Ke(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,Ke(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ht=r,n.target.dispatchEvent(r),Ht=null}else return t=it(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=it(n);a!==null&&(e.splice(t,3),t-=3,ms(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Ye]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Ye]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current;np(n,uu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),_u(),t[Xe]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ge();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(o(527,Lp,`19.2.8`));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(o(188)):(e=Object.keys(e).join(`,`),Error(o(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:I,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{J=zp.inject(Rp),Te=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(o(299));var n=!1,r=``,i=Ls,a=Rs,s=zs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,s,Pp),e[Xe]=t.current,xd(e),new Fp(t)}})),l=t(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=c()})),u=e(r(),1),d=l(),f;function p(e){if(!f){if(typeof document>`u`)return;f=document.createElement(`textarea`)}var t=`&${e};`;f.innerHTML=t;var n=f.value;return n===t?void 0:n}var m=32,h=9,g=13,_=10,v=96,y=126,b=91,x=94,S=62,C=35,w=37,T=45,E=61,D=92,O=42,k=95,A=60,j=64,M=93,N=33,P=38,F=58,I=70,L=102,R=104,ee=119,te=116,ne=112,re=115,z=160,ie=12,ae=44,B=59,oe=63,se=46,ce=47,le=39,V=34,ue=43,de=124,fe=123,pe=125,me=40,he=41,ge=78,_e=110,ve=79,ye=111,H=120,be=88,xe=30,U=48,W=57,G=65,K=90,q=97,Se=122,Ce=128,we=32,J={blockQuote:0,breakLine:1,breakThematic:2,codeBlock:3,codeInline:4,footnote:5,footnoteReference:6,frontmatter:7,gfmTask:8,heading:9,htmlBlock:10,htmlComment:11,htmlSelfClosing:12,image:13,link:14,orderedList:15,paragraph:16,ref:17,refCollection:18,table:19,text:20,textFormatted:21,unorderedList:22};function Te(e){if(!X(e,`---`))return null;let t=3;for(;t<e.length&&(e[t]===` `||e[t]===`	`);)t++;if(t<e.length&&e[t]===`\r`&&t++,t>=e.length||e[t]!==`
`)return null;t++;let n=!1;for(;t<e.length;){let r=t;for(;t<e.length&&e[t]!==`
`&&e[t]!==`\r`;)t++;if(t>=e.length)break;let i=t;if(e[t]===`\r`&&t++,t<e.length&&e[t]===`
`&&t++,X(e,`---`,r))return{endPos:t,hasValidYaml:n};if(!n){let t=Qe(e,r,i);if(t<i){let r=e.charCodeAt(t);if(r>=q&&r<=Se||r>=G&&r<=K||r>=U&&r<=W||r===k){for(t++;t<i&&(r=e.charCodeAt(t),r>=q&&r<=Se||r>=G&&r<=K||r>=U&&r<=W||r===k||r===T||r===se);)t++;t<i&&e.charCodeAt(t)===F&&(t++,t>=i?n=!0:(r=e.charCodeAt(t),(r===m||r===h)&&(n=!0)))}}}}return null}var Ee=/&([a-zA-Z0-9]+|#[0-9]{1,7}|#x[0-9a-fA-F]{1,6});/gi,De={class:`className`,for:`htmlFor`,allowfullscreen:`allowFullScreen`,allowtransparency:`allowTransparency`,autocomplete:`autoComplete`,autofocus:`autoFocus`,autoplay:`autoPlay`,cellpadding:`cellPadding`,cellspacing:`cellSpacing`,charset:`charSet`,classid:`classId`,colspan:`colSpan`,contenteditable:`contentEditable`,contextmenu:`contextMenu`,crossorigin:`crossOrigin`,enctype:`encType`,formaction:`formAction`,formenctype:`formEncType`,formmethod:`formMethod`,formnovalidate:`formNoValidate`,formtarget:`formTarget`,frameborder:`frameBorder`,hreflang:`hrefLang`,inputmode:`inputMode`,keyparams:`keyParams`,keytype:`keyType`,marginheight:`marginHeight`,marginwidth:`marginWidth`,maxlength:`maxLength`,mediagroup:`mediaGroup`,minlength:`minLength`,novalidate:`noValidate`,radiogroup:`radioGroup`,readonly:`readOnly`,rowspan:`rowSpan`,spellcheck:`spellCheck`,srcdoc:`srcDoc`,srclang:`srcLang`,srcset:`srcSet`,tabindex:`tabIndex`,usemap:`useMap`,viewbox:`viewBox`},Oe={};function ke(e){if(!e)return Oe;var t={};for(var n in e){var r=De[n.toLowerCase()];if(r)t[r]=e[n];else{var i=n.indexOf(`:`);i===-1?t[n]=e[n]:t[n.slice(0,i)+n[i+1].toUpperCase()+n.slice(i+2)]=e[n]}}return t}var Ae=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s|^<(div|p|h[1-6]|ul|ol|li|blockquote|pre|table|thead|tbody|tr|td|th|dl|dt|dd|hr|address|article|aside|details|dialog|figure|figcaption|footer|form|header|main|menu|nav|section|summary|textarea|fieldset|legend|center|dir|hgroup|marquee|search|output|template)\b)/i;function je(e){return e.indexOf(`&`)===-1?e:e.replace(Ee,(e,t)=>{var n=p(t);if(n)return n;if(t[0]===`#`){var r=t[1]===`x`||t[1]===`X`?Number.parseInt(t.slice(2),16):Number.parseInt(t.slice(1),10);return r===0||r>=55296&&r<=57343||r>1114111?`�`:r<=65535?String.fromCharCode(r):String.fromCharCode(55296+(r-65536>>10),56320+(r-65536&1023))}return e})}var Me=/(javascript|vbscript|data(?!:image)):/i;function Ne(e){if(Me.test(e))return null;if(e.indexOf(`%`)===-1)return e;try{let t=decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,``);if(Me.test(t))return null}catch{return null}return e}var Y={},Pe,Fe;for(Pe=[192,193,194,195,196,197,224,225,226,227,228,229,230,198],Fe=0;Fe<Pe.length;Fe++)Y[Pe[Fe]]=`a`;for(Y[231]=Y[199]=`c`,Y[240]=Y[208]=`d`,Pe=[200,201,202,203,233,232,234,235],Fe=0;Fe<Pe.length;Fe++)Y[Pe[Fe]]=`e`;for(Pe=[207,239,206,238,205,237,204,236],Fe=0;Fe<Pe.length;Fe++)Y[Pe[Fe]]=`i`;for(Y[209]=Y[241]=`n`,Pe=[248,216,339,338,213,245,212,244,211,243,210,242],Fe=0;Fe<Pe.length;Fe++)Y[Pe[Fe]]=`o`;for(Pe=[220,252,219,251,218,250,217,249],Fe=0;Fe<Pe.length;Fe++)Y[Pe[Fe]]=`u`;Y[376]=Y[255]=Y[221]=Y[253]=`y`;function Ie(e){for(var t=``,n=-1,r=e.length,i=0;i<r;i++){var a=e.charCodeAt(i);if(a>=q&&a<=Se||a>=U&&a<=W){n<0&&(n=i);continue}if(a>=G&&a<=K){n>=0&&(t+=e.slice(n,i),n=-1),t+=String.fromCharCode(a+we);continue}if(a===m||a===T){n>=0&&(t+=e.slice(n,i),n=-1),t+=`-`;continue}n>=0&&(t+=e.slice(n,i),n=-1);var o=Y[a];o&&(t+=o)}return n>=0&&(t+=e.slice(n)),t}function X(e,t,n){return e.startsWith(t,n)}var Le=new Set([`area`,`base`,`br`,`col`,`embed`,`hr`,`img`,`input`,`link`,`meta`,`param`,`source`,`track`,`wbr`,`circle`,`ellipse`,`line`,`path`,`polygon`,`polyline`,`rect`,`use`,`stop`,`animate`,`set`]);function Re(e){let t=e.toLowerCase();if(Le.has(t))return!0;let n=t.indexOf(`:`);return n!==-1&&(t=t.slice(n+1),Le.has(t))}var ze=1,Be=2,Ve=4,He=8,Ue=16,We=32,Ge=64,Ke=(()=>{var e=new Uint8Array(128),t;for(e[h]=ze,e[_]=ze|Be,e[ie]=ze,e[g]=ze|Be,e[m]=ze,t=N;t<=ce;t++)e[t]=Ve;for(t=F;t<=j;t++)e[t]=Ve;for(t=b;t<=v;t++)e[t]=Ve;for(t=fe;t<=y;t++)e[t]=Ve;for(t=U;t<=W;t++)e[t]=Ue;for(t=G;t<=K;t++)e[t]=He;for(t=q;t<=Se;t++)e[t]=He;return e})(),qe=/[\p{P}\p{S}]/u,Je=/\p{Zs}/u,Ye=[];function Xe(e){var t=e.indexOf(`\r`),n=e.indexOf(`\0`);if(t===-1&&n===-1)return e;var r=e.length;Ye.length=0;var i=0,a=0;for(a=t===-1?n:n===-1||t<n?t:n;a<r;a++){var o=e.charCodeAt(a);o===g?(i<a&&Ye.push(e.slice(i,a)),a+1<r&&e.charCodeAt(a+1)===_&&a++,Ye.push(`
`),i=a+1):o===0&&(i<a&&Ye.push(e.slice(i,a)),Ye.push(`�`),i=a+1)}return i<r&&Ye.push(e.slice(i)),Ye.join(``)}function Ze(e){return e.replace(/>\s+</g,`><`).replace(/\n+/g,` `).trim()}function Qe(e,t,n){let r=n??e.length;for(;t<r&&(e[t]===` `||e[t]===`	`);)t++;return t}function $e(e){if(!e)return!1;for(var t in e)return!0;return!1}function et(e){return{attrs:{},children:[{type:J.text,text:e}],c:!0,type:J.htmlBlock,tag:`header`}}var tt=/^\n+/;function nt(e){for(var t=e.length;t>0&&(e[t-1]===`
`||e[t-1]===`\r`);)t--;return`${e.slice(0,t).replace(tt,``)}

`}function rt(e){if((e.type===J.htmlSelfClosing||e.type===J.htmlBlock)&&e.a)return[];if(e.type===J.paragraph){var t=e.children;return t?t.flatMap(rt):[]}return e.type===J.text?e.text?.trim()?[e]:[]:e.type===J.htmlBlock&&e.children?[{...e,children:e.children?.flatMap(rt)}]:[e]}function it(e){for(var t=0;t<e.length;t++){if(e[t].type===J.htmlBlock){var n=e[t],r=!1;if(n.c&&t===e.length-1){var i=n.j===void 0?n.a?n.e||``:(n.e||``)+(n.h||``):n.j,a=`</${String(n.tag).toLowerCase()}>`,o=i.toLowerCase().indexOf(a);o!==-1&&i.slice(o+a.length).replace(/<\/[a-z][a-z0-9-]*\s*>/gi,``).trim()&&(r=!0)}r||(n.c=!1)}`children`in e[t]&&e[t].children&&it(e[t].children)}}function at(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.type===J.paragraph&&r.children)for(var i=r.children,a=0;a<i.length;a++){var o=i[a];if(o.type===J.htmlSelfClosing&&o.a&&o.tag.toLowerCase()===t){var s=e.slice(0,n);a>0&&s.push({type:J.paragraph,children:i.slice(0,a)});var c=[];if(a+1<i.length){var l=i.slice(a+1).filter(e=>!(e.type===J.htmlSelfClosing&&e.a));l.length>0&&(c=l)}return c=c.concat(e.slice(n+1)),{found:!0,beforeClose:s,afterClose:c}}}if((r.type===J.htmlSelfClosing||r.type===J.htmlBlock)&&r.a&&r.tag.toLowerCase()===t)return{found:!0,beforeClose:e.slice(0,n),afterClose:e.slice(n+1)}}return{found:!1,beforeClose:e,afterClose:[]}}function ot(e){var t=``;for(var n in e){var r=e[n];r===!0?t+=` ${n}`:r!==void 0&&r!=null&&r!==!1&&(t+=` ${n}="${String(r)}"`)}return t}function st(e,t,n,r){var i;return i=t===void 0?ot(n):t.length>0&&t.charCodeAt(0)>m?` ${t}`:t,`<${e}${i}${r}`}function ct(e){var t=e.tag,n=e.type===J.htmlSelfClosing,r=e,i=r.b,a=`</${t}>`;if(!n&&r.a)return{kind:`literal`,literal:(r.h||a)+(r.e||``)};if(n){var o=e;return o.a?{kind:`literal`,literal:o.h||a}:o.m?{kind:`literal`,literal:o.m}:{kind:`literal`,literal:st(t,i,e.attrs,` />`)}}var s=st(t,i,e.attrs,`>`),c=r.children,l=c!=null&&c.length>0;if(r.c&&r.j!==void 0)return l?{kind:`sandwich`,open:s,close:a}:{kind:`literal`,literal:r.j};if(r.c&&!l)return{kind:`literal`,literal:s+(r.e||``)+(r.h||a)};if(c!=null&&c.length>0){for(var u=``,d=0;d<c.length;d++){var f=c[d];if(f.type!==J.text)return{kind:`sandwich`,open:s,close:a};u+=f.text}return{kind:`literal`,literal:s+u+a}}var p=r.e||``;return p&&p.indexOf(a)!==-1?{kind:`literal`,literal:s+p}:{kind:`literal`,literal:s+p+a}}function lt(e,t,n){var r=[],i=e,a=n;if(i&&r.push(i),Array.isArray(t))for(var o=0;o<t.length;o++)r.push(t[o]);else t!=null&&r.push(t);a&&r.push(a);for(var s=[],c=0;c<r.length;c++){var l=r[c];typeof l==`string`&&s.length>0&&typeof s.at(-1)==`string`?s[s.length-1]=s.at(-1)+l:s.push(l)}return s}function ut(e){return e==null||e.tagfilter!==!1}function dt(e,t,n,r){var i=t(e,n,r);return i===null?null:mt(i)}function ft(e){var t=[];if(!e)return t;for(var n in e)n.charCodeAt(0)===94&&t.push({identifier:n,footnote:e[n].target});return t}function pt(e,t,n){if(t.indexOf(`.`)===-1)return e?.[t]||n;for(var r=e,i=t.split(`.`),a=0;a<i.length&&(r=r?.[i[a]],r!==void 0);)a++;return r||n}function mt(e){for(var t=!1,n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=m||r===V||r===w||r===A||r===S||r===b||r===D||r===M||r===x||r===v||r>=123){t=!0;break}}if(!t)return e;for(var i=``,n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r===w&&n+2<e.length){var a=e.charCodeAt(n+1),o=e.charCodeAt(n+2);if((a>=U&&a<=W||a>=G&&a<=I||a>=q&&a<=L)&&(o>=U&&o<=W||o>=G&&o<=I||o>=q&&o<=L)){i+=e[n]+e[n+1]+e[n+2],n+=2;continue}}if(r>=55296&&r<=57343){if(r<=56319&&n+1<e.length){var s=e.charCodeAt(n+1);if(s>=56320&&s<=57343){i+=encodeURI(e[n]+e[n+1]),n++;continue}}i+=e[n];continue}i+=encodeURI(e[n])}return i}function ht(...e){return e.filter(Boolean).join(` `)}var gt=new Set([`title`,`textarea`,`style`,`xmp`,`iframe`,`noembed`,`noframes`,`script`,`plaintext`]),_t=/<(\/?)(title|textarea|style|xmp|iframe|noembed|noframes|script|plaintext)(\s|>|\/)/gi;function vt(e){return gt.has(e.toLowerCase())}function yt(e){return _t.lastIndex=0,_t.test(e)}function bt(e){return _t.lastIndex=0,e.replace(_t,(e,t,n,r)=>`&lt;${t}${n}${r}`)}function xt(e,t){var n=e||{},r=n.slugify,i;if(r){var a=r;i=e=>a(e,Ie)}else i=Ie;return{disableAutoLink:n.disableAutoLink,disableFrontmatter:n.disableFrontmatter,disableParsingRawHTML:n.disableParsingRawHTML,enforceAtxHeadings:n.enforceAtxHeadings,evalUnserializableExpressions:n.evalUnserializableExpressions,forceBlock:n.forceBlock,forceInline:t===void 0?n.forceInline:t,ignoreHTMLBlocks:n.ignoreHTMLBlocks,optimizeForStreaming:n.optimizeForStreaming,preserveFrontmatter:n.preserveFrontmatter,sanitizer:n.sanitizer||Ne,slugify:i,tagfilter:ut(n)}}var St=/^<([a-zA-Z][a-zA-Z0-9-]*)\s[^>]*>/,Ct=/^<[A-Z]/,wt=[`script`,`pre`,`style`,`textarea`],Tt=new Set(wt),Et=/<(?:pre|script|style|textarea)\b/i,Dt=/<(?:pre|script|style|textarea)\b/iy,Ot=/^(\s{0,3}#[#\s]|\s{0,3}[-*+]\s|\s{0,3}\d+\.\s|\s{0,3}>\s|\s{0,3}```)/m,kt=/^<([a-z][^ >/\n\r]*) ?([^>]*?)>/im,At=new Uint8Array(128);(()=>{for(var e=[v,O,k,y,E,b,N,A,D,P,_,R,ee,L],t=0;t<e.length;t++)At[e[t]]=1})();var jt=/([a-zA-Z_][a-zA-Z0-9_-]*)=(?:"([^"]*)"|'([^']*)')/g;function Mt(e){return Tt.has(e)}function Nt(e){return Et.test(e)}function Pt(e,t,n){for(var r=t,i=n;r<i&&(e.charCodeAt(r)===m||e.charCodeAt(r)===h);)r++;if(r>=i)return!1;e.charCodeAt(r)===de&&r++;for(var a=0;r<i;){for(;r<i&&(e.charCodeAt(r)===m||e.charCodeAt(r)===h);)r++;if(r>=i)break;if(e.charCodeAt(r)===de&&a>0){for(var o=r+1;o<i&&(e.charCodeAt(o)===m||e.charCodeAt(o)===h);)o++;if(o>=i)return!0}if(e.charCodeAt(r)===F&&r++,r>=i||e.charCodeAt(r)!==T)return!1;for(;r<i&&e.charCodeAt(r)===T;)r++;for(r<i&&e.charCodeAt(r)===F&&r++,a++;r<i&&(e.charCodeAt(r)===m||e.charCodeAt(r)===h);)r++;if(r<i){if(e.charCodeAt(r)===de)r++;else return!1}}return a>0}var Ft=/[\u0000-\u001F\u007F]/g,It={action:1,background:1,cite:1,data:1,formaction:1,href:1,longdesc:1,poster:1,src:1,"xlink:href":1},Lt=/&#(x[0-9a-f]+|[0-9]+);?/gi;function Rt(e){return e.indexOf(`&#`)===-1?e:e.replace(Lt,(e,t)=>{var n=t.charCodeAt(0)===H||t.charCodeAt(0)===be?Number.parseInt(t.slice(1),16):Number.parseInt(t,10);return n>0&&n<=1114111?String.fromCodePoint(n):e})}function zt(e,t,n){if(n&&t.charCodeAt(0)===fe)return!1;var r=e.charCodeAt(0),i=e.charCodeAt(1);if((r===ye||r===ve)&&(i===_e||i===ge))return!(n&&t===``);var a=e.toLowerCase();if(a===`srcdoc`)return!0;if(a===`style`)return/url\s*\(\s*(javascript|vbscript|data:(?!image\/))/i.test(t);if(It[a]===1){var o=Rt(je(t));if(Ne(o)===null)return!0;var s=o.replace(Ft,``);return s!==o&&Ne(s)===null}return!1}function Bt(e){return`<`+(e.f?`/`:``)+e.tag+e.g+e.b+(e.n?e.r?` />`:`/>`:`>`)}function Vt(e,t,n,r){for(var i=[],a=t,o=0;o<r.length;o+=2){var s=r[o];if(s>a){var c=e.slice(a,s).trim();c&&i.push(c)}a=r[o+1]}if(a<n){var l=e.slice(a,n).trim();l&&i.push(l)}return i.join(` `)}function Ht(e,t){if(e.charCodeAt(t)!==A)return null;let n=t+1,r=e.length,i=!1;e.charCodeAt(n)===ce&&(n++,i=!0);let a=n,o=e.charCodeAt(n);if(!(o>=q&&o<=Se||o>=G&&o<=K))return null;for(;n<r&&(e.charCodeAt(n)>=q&&e.charCodeAt(n)<=Se||e.charCodeAt(n)>=G&&e.charCodeAt(n)<=K||e.charCodeAt(n)>=U&&e.charCodeAt(n)<=W||e.charCodeAt(n)===T);)n++;let s=e.slice(a,n);if(!s)return null;let c=s.charCodeAt(0),l=c>=G&&c<=K||s.indexOf(`-`)!==-1,u=n;for(;n<r&&(e.charCodeAt(n)===m||e.charCodeAt(n)===h||e.charCodeAt(n)===_);)n++;let d=e.slice(u,n);if(n===u&&n<r){var f=e.charCodeAt(n);if(f!==S&&f!==ce)return null}let p=n,g={},y=!1;for(var b=null;n<r;){let t=e.charCodeAt(n);if(t===S){let t=b?Vt(e,p,n,b):e.slice(p,n);return{r:y,u:l,f:i,b:t,q:b!=null,n:!1,g:d,attrs:g,end:n+1,tag:s}}if(t===m||t===h||t===_){n++;continue}if(t===ce&&n+1<r&&e.charCodeAt(n+1)===S){y=n>p&&e.charCodeAt(n-1)===m;let t=b?Vt(e,p,n,b):e.slice(p,n);return{r:y,u:l,f:i,b:t,q:b!=null,n:!0,g:d,attrs:g,end:n+2,tag:s}}var x=n,C=e.charCodeAt(n);if(!(C>=q&&C<=Se||C>=G&&C<=K||C===k||C===F))return null;for(n++;n<r;){var w=e.charCodeAt(n);if(w>=q&&w<=Se||w>=G&&w<=K||w>=U&&w<=W||w===k||w===se||w===F||w===T)n++;else break}for(var D=e.slice(x,n),O=n;n<r&&(e.charCodeAt(n)===m||e.charCodeAt(n)===h);)n++;var j,M;if(e.charCodeAt(n)===E){for(n++;n<r&&(e.charCodeAt(n)===m||e.charCodeAt(n)===h);)n++;var N=e.charCodeAt(n);if(N===V||N===le){n++;for(var P=n;n<r&&e.charCodeAt(n)!==N;)n++;if(n>=r)return null;if(j=e.slice(P,n),n++,n<r){var I=e.charCodeAt(n);if(I!==m&&I!==h&&I!==_&&I!==S&&I!==ce)return null}M=n}else if(N===fe){var L=1,P=n;for(n++;n<r&&L>0;){var w=e.charCodeAt(n);w===fe?L++:w===pe&&L--,n++}j=e.slice(P,n),M=n}else{for(var P=n;n<r;){var R=e.charCodeAt(n);if(R===m||R===h||R===S||R===_||R===V||R===le||R===E||R===A||R===v)break;n++}if(n===P)return null;j=e.slice(P,n),M=n}}else j=``,M=O;zt(D,j,l)?(b===null&&(b=[]),b.push(x,M)):g[D]=j}return null}function Ut(e){var t=e.indexOf(`<`);if(t===-1)return e;for(var n=``,r=0,i=!1;t!==-1;){var a=Ht(e,t);a?(a.q&&(n+=e.slice(r,t)+Bt(a),r=a.end,i=!0),t=e.indexOf(`<`,a.end)):t=e.indexOf(`<`,t+1)}return i?n+e.slice(r):e}function Wt(e,t,n){if(!n.optimizeForStreaming&&e.indexOf(`[`)===-1)return!1;for(var r=0,i=e.length,a=!1,o=!1;r<i;){for(var s=e.indexOf(`
`,r),c=s<0?i:s,l=r,u=0;l<c&&u<4;)if(e.charCodeAt(l)===m)u++,l++;else if(e.charCodeAt(l)===h)u+=4,l++;else break;if(l>=c){a=!1,r=s<0?i:s+1;continue}if(u<4){var d=e.charCodeAt(l);if(d===v||d===y){for(var f=d,p=0,g=l;g<c&&e.charCodeAt(g)===f;)p++,g++;if(p>=3){var w=!0;if(f===v){for(var E=g;E<c;E++)if(e.charCodeAt(E)===v){w=!1;break}}if(w){a=!1;for(var D=s<0?i:s+1;D<i;){for(var A=D,j=0;A<i&&j<4;){var M=e.charCodeAt(A);if(M===m)j++,A++;else if(M===h)j+=4,A++;else break}if(j<4&&A<i&&e.charCodeAt(A)===f){for(var N=0;A<i&&e.charCodeAt(A)===f;)N++,A++;if(N>=p){for(;A<i&&(e.charCodeAt(A)===m||e.charCodeAt(A)===h);)A++;if(A>=i||e.charCodeAt(A)===_){r=A>=i?i:A+1;break}}}for(;D<i&&e.charCodeAt(D)!==_;)D++;D<i&&D++}D>=i&&(r=i,o=!0);continue}}}}for(var P=l;P<c&&e.charCodeAt(P)===S;){P++,P<c&&e.charCodeAt(P)===m&&P++;for(var F=0;P<c&&F<4;)if(e.charCodeAt(P)===m)F++,P++;else if(e.charCodeAt(P)===h)F+=4,P++;else break;if(F>=4)break;a=!1}if(!a&&u<4&&P<c&&e.charCodeAt(P)===b&&!(P+1<i&&e.charCodeAt(P+1)===x)){var I=Gt(e,P,t);if(I){r=I,a=!1;continue}}var L=e.charCodeAt(l);if(L===C&&u<4)a=!1;else if(u<4&&(L===T||L===O||L===k)){for(var R=l,ee=0;R<c;){var te=e.charCodeAt(R);if(te===L)ee++;else if(te!==m&&te!==h)break;R++}a=!(ee>=3&&R>=c)}else a=!0;r=s<0?i:s+1}return o}function Gt(e,t,n){let r=e.length;if(e.charCodeAt(t)!==b)return null;let i=t+1<r&&e.charCodeAt(t+1)===x,a=t+1;for(;a<r;){var o=e.charCodeAt(a);if(o===M){a++;break}if(o===b)return null;o===D&&a+1<r&&a++,a++}if(a>r||e.charCodeAt(a-1)!==M)return null;let s=e.slice(t+1,a-1);if(s.length>999)return null;let c=Yt(s);if(!c||a>=r||e.charCodeAt(a)!==F)return null;a++;let l=!1;for(;a<r;){let t=e.charCodeAt(a);if(t===m||t===h)a++;else if(t===_&&!l)l=!0,a++;else break}if(i){let t=e.indexOf(`
`,a),i=t<0?r:t;return n[c]={target:e.slice(a,i).trim(),title:void 0},t<0?r:t+1}var u;if(a<r&&e.charCodeAt(a)===A){a++;for(var d=a;a<r&&e.charCodeAt(a)!==S&&e.charCodeAt(a)!==_;)e.charCodeAt(a)===D&&a+1<r&&a++,a++;if(a>=r||e.charCodeAt(a)!==S)return null;u=e.slice(d,a),a++;for(var f=e.indexOf(`
`,a),p=f<0?r:f,g=a;g<p&&(e.charCodeAt(g)===m||e.charCodeAt(g)===h);)g++;if(g<p){if(g===a)return null;var v=e.charCodeAt(g);if(v!==V&&v!==le&&v!==me)return null}}else{for(var d=a,y=0;a<r;){var o=e.charCodeAt(a);if(o===me)y++;else if(o===he){if(y===0)break;y--}else{if(o===m||o===h||o===_)break;o===D&&a+1<r&&a++}a++}if(u=e.slice(d,a),!u)return null}for(;a<r&&(e.charCodeAt(a)===m||e.charCodeAt(a)===h);)a++;var C=e.indexOf(`
`,a),w=C<0?r:C,T,E=!1,O=a,k=a;if(a===w&&a<r)for(k=a+1;k<r&&(e.charCodeAt(k)===m||e.charCodeAt(k)===h);)k++;if(k<r){var j=e.charCodeAt(k);if(j===V||j===le||j===me){for(var N=j===me?41:j,P=k+1,I=P;P<r;){var L=e.charCodeAt(P);if(L===N){for(var R=P+1;R<r&&(e.charCodeAt(R)===m||e.charCodeAt(R)===h);)R++;(R>=r||e.charCodeAt(R)===_)&&(T=e.slice(I,P),E=!0,O=R<r?R+1:r);break}if(L===D&&P+1<r){P+=2;continue}if(L===_&&P+1<r&&e.charCodeAt(P+1)===_)break;P++}if(!E&&k===a)return null}}if(E)return n[c]||(n[c]={target:je(Zt(u)),title:T===void 0?T:je(Zt(T))}),O;for(;a<w&&(e.charCodeAt(a)===m||e.charCodeAt(a)===h);)a++;return a<w?null:(n[c]||(n[c]={target:je(Zt(u)),title:T}),C<0?r:C+1)}var Kt=new Uint8Array(Ke);for(Kt[C]|=We,Kt[S]|=We,Kt[T]|=We|Ge,Kt[ue]|=We,Kt[O]|=We|Ge,Kt[k]|=We|Ge,Kt[v]|=We|Ge,Kt[y]|=We|Ge,Kt[A]|=We|Ge,Kt[b]|=Ge,Kt[N]|=Ge,Kt[de]|=We,qt=U;qt<=W;qt++)Kt[qt]|=We;var qt;function Jt(e){if(e.indexOf(`[`)<0&&e.indexOf(`]`)<0)return!1;for(var t=0;t<e.length;t++){if(e.charCodeAt(t)===D){t++;continue}if(e.charCodeAt(t)===b||e.charCodeAt(t)===M)return!0}return!1}function Yt(e){for(var t=e.length,n=!0,r=t>0,i=0;i<t;i++){var a=e.charCodeAt(i);if(a===m){if(n){r=!1;break}n=!0}else if(a<33||a>126||a>=G&&a<=K){r=!1;break}else n=!1}if(r&&!n)return e;var o=e.replace(/\s+/g,` `).trim();return o.indexOf(`ẞ`)===-1?o.toLowerCase():o.replace(/\u1E9E/g,`ss`).toLowerCase()}function Xt(e){return e<Ce?Kt[e]:e===z?ze:0}function Zt(e){return e.indexOf(`\\`)===-1?e:e.replace(/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,`$1`)}var Qt=null,$t=-1,en=-1;function tn(e,t){if(t>=$t&&t<=en&&e===Qt)return en;var n=e.indexOf(`
`,t),r=n<0?e.length:n;return Qt=e,$t=t,en=r,r}function nn(e,t){let n=tn(e,t);return n<e.length?n+1:n}function rn(e,t,n){for(;t<n;){let n=e.charCodeAt(t);if(n!==m&&n!==h)break;t++}return t}function an(e,t){let n=nn(e,t);for(;n<e.length;){let t=tn(e,n);if(ln(e,n,t))return n;n=nn(e,n)}return e.length}function on(e,t,n,r){let i=0;for(;t+i<n&&e.charCodeAt(t+i)===r;)i++;return i}var Z=0,sn=0;function cn(e,t,n){for(Z=0,sn=0;t+sn<n;){let n=e.charCodeAt(t+sn);if(n===h)Z+=4-Z%4;else if(n===m)Z++;else break;sn++}}function ln(e,t,n){return rn(e,t,n)>=n}function un(e,t){if(!e)return e;var n=t.v||=Object.create(null),r=n[e];if(r===void 0)return n[e]=0,e;for(var i=r+1,a=`${e}-${i}`;n[a]!==void 0;)i++,a=`${e}-${i}`;return n[e]=i,n[a]=0,a}function dn(e,t,n,r){let i=tn(e,t);if(cn(e,t,i),Z>3)return null;let a=t+sn;if(e.charCodeAt(a)!==C)return null;let o=on(e,a,i,35);if(o<1||o>6||(a+=o,a<i&&e.charCodeAt(a)!==m&&e.charCodeAt(a)!==h))return null;a=rn(e,a,i);for(var s=i;s>a&&e.charCodeAt(s-1)===m;)s--;for(var c=s;s>a&&e.charCodeAt(s-1)===C;)s--;if(s<c){if(s===a||e.charCodeAt(s-1)===m)for(;s>a&&e.charCodeAt(s-1)===m;)s--;else s=c}let l=zn(e.slice(a,s),!1,n,r);return{node:{type:J.heading,level:o,children:l,id:``},end:nn(e,i)}}function fn(e,t,n){var r=e.charCodeAt(t);if(r!==E&&r!==T)return!1;for(var i=t;i<n&&e.charCodeAt(i)===r;)i++;for(;i<n&&(e.charCodeAt(i)===m||e.charCodeAt(i)===h);)i++;return i>=n}function pn(e,t){let n=tn(e,t);if(cn(e,t,n),Z>3)return null;let r=t+sn,i=e.charCodeAt(r);if(i!==T&&i!==O&&i!==k)return null;let a=0;for(;r<n;){let t=e.charCodeAt(r);if(t===i)a++;else if(t!==m&&t!==h)return null;r++}return a<3?null:{node:{type:J.breakThematic},end:nn(e,n)}}var mn=0,hn=0,gn=``;function _n(e,t,n){let r=tn(e,t);if(cn(e,t,r),Z>3)return null;let i=Z,a=t+sn,o=e.charCodeAt(a);if(o!==v&&o!==y)return null;let s=on(e,a,r,o);if(s<3)return null;a+=s;let c=rn(e,a,r),l=r;if(o===v){for(let t=c;t<r;t++)if(e.charCodeAt(t)===v)return null}for(;l>c&&(e.charCodeAt(l-1)===m||e.charCodeAt(l-1)===h);)l--;let u=e.slice(c,l),d=``,f=``,p=u.indexOf(` `);p===-1?d=u:(d=u.slice(0,p),f=u.slice(p+1).trim()),d=Zt(d);var g;if(f){jt.lastIndex=0;for(var b;(b=jt.exec(f))!=null;)g||={},g[b[1]]=b[2]===void 0?b[3]:b[2]}let x=nn(e,r),S=e.length,C=e.length;var w;o===mn&&s===hn?w=gn:(w=String.fromCharCode(o).repeat(s),mn=o,hn=s,gn=w);for(var T=x;T<e.length;){var E=e.indexOf(w,T);if(E===-1)break;for(var D=E,O=0;D>0&&O<4&&e.charCodeAt(D-1)===m;)D--,O++;if(O<=3&&(D===0||e.charCodeAt(D-1)===_)){for(var k=E+s;k<e.length&&e.charCodeAt(k)===o;)k++;var A=tn(e,k);if(ln(e,k,A)){S=D,C=nn(e,A);break}}T=E+1}var j;if(i===0)j=S>x&&e.charCodeAt(S-1)===_?e.slice(x,S-1):e.slice(x,S);else{j=``;for(var M=x;M<S;){var N=tn(e,M);cn(e,M,N);var P=Math.min(sn,i);j+=`${e.slice(M+P,N)}
`,M=nn(e,N)}j.length>0&&j.charCodeAt(j.length-1)===_&&(j=j.slice(0,-1))}return{node:{type:J.codeBlock,lang:d||void 0,text:j,infoString:f||void 0,attrs:g},end:C}}function vn(e,t,n){for(var r=0,i=t;i<n&&r<4;)e.charCodeAt(i)===h?r+=4-r%4:r++,i++;if(r<4)return``;for(var a=``,o=4;o<r;o++)a+=` `;return a+e.slice(i,n)}function yn(e,t){if(cn(e,t,tn(e,t)),Z<4)return null;let n=``,r=t;for(;r<e.length;){let t=tn(e,r);if(cn(e,r,t),ln(e,r,t)){for(var i=`${vn(e,r,t)}
`,a=nn(e,t);a<e.length;){var o=tn(e,a);if(ln(e,a,o)){i+=`${vn(e,a,o)}
`,a=nn(e,o);continue}cn(e,a,o),Z>=4&&(n+=i,r=a);break}if(r!==a)break;continue}if(Z<4)break;let d=0,f=0;var s=0;for(let n=r;n<t&&f<4;n++){if(e.charCodeAt(n)===h){var c=4-f%4;f+c>4&&(s=f+c-4),f+=c}else f++;d++}var l=``;if(s>0)for(var u=0;u<s;u++)l+=` `;l+=e.slice(r+d,t),n+=`${l}
`,r=nn(e,t)}for(;n.length>0&&n.charCodeAt(n.length-1)===_;)n=n.slice(0,-1);return n?{node:{type:J.codeBlock,lang:void 0,text:n,infoString:void 0,attrs:void 0},end:r}:null}function bn(e,t,n,r){if(cn(e,t,tn(e,t)),Z>3)return null;let i=t+sn;if(e.charCodeAt(i)!==S)return null;let a=``,o=t,s,c=!1,l=!1,u=!1;for(;o<e.length;){let t=tn(e,o);cn(e,o,t);let n=o+sn;if(e.charCodeAt(n)===S){let r=n+1;var d=Z+1,f=!1;if(r<t){var p=e.charCodeAt(r);p===m?(r++,d++,f=!0):p===h&&(f=!0)}for(var g=``,_=!1,b=r;b<t;b++)if(e.charCodeAt(b)===h){_=!0;break}if(_){var x=d;if(f&&r<t&&e.charCodeAt(r)===h){for(var w=4-x%4,E=0;E<w-1;E++)g+=` `;x+=w,r++}for(var D=r;D<t;D++)if(e.charCodeAt(D)===h){for(var j=4-x%4,M=0;M<j;M++)g+=` `;x+=j}else g+=e[D],x++}else g=e.slice(r,t);if(!(a||s)){let n=g.match(/^\[!([A-Za-z]+)\]\s*$/);if(n){s=n[1].toUpperCase(),o=nn(e,t);continue}}a+=`${g}
`;var N=g.trimStart();N.startsWith("```")||N.startsWith(`~~~`)?u=!u:(g.startsWith(`    `)||g.startsWith(`	`))&&(u=!0),l=N.length>0,o=nn(e,t)}else if(a&&!ln(e,o,t)&&l){if(Z<4){var P=o+sn,F=P<t?e.charCodeAt(P):0;if(F===C||F===S||F===v||F===y||F===A||(F===T||F===O||F===k)&&pn(e,o)||(F===T||F===O||F===ue)&&P+1<t&&(e.charCodeAt(P+1)===m||e.charCodeAt(P+1)===h))break;if(F>=U&&F<=W){for(var I=P;I<t&&e.charCodeAt(I)>=U&&e.charCodeAt(I)<=W;)I++;if(I<t&&(e.charCodeAt(I)===se||e.charCodeAt(I)===he))break}}if(u)break;a+=`${e.slice(o,t)}
`,c=!0,o=nn(e,t)}else break}if(!(a||s))return null;var{inBlockQuote:L,l:R}=n;n.inBlockQuote=!0,c&&(n.l=!0);var ee=n.i;n.i=ee||!ln(e,o,e.length);let te=wr(a||``,n,r);return n.i=ee,n.inBlockQuote=L,n.l=R,{node:{type:J.blockQuote,children:te,alert:s||void 0},end:o}}function xn(e,t,n){for(var r=0,i=t;i<n;i++)e.charCodeAt(i)===h?r+=4-r%4:r++;return r}function Sn(e,t,n){if(cn(e,t,n),Z>3)return null;var r=t+sn;if(r>=n)return null;var i=e.charCodeAt(r),a=Z,o=r,s=r;if(i===T||i===O||i===ue){if(o=r+1,o<n&&e.charCodeAt(o)!==m&&e.charCodeAt(o)!==h&&e.charCodeAt(o)!==_)return null}else if(i>=U&&i<=W){for(;s<n&&s-r<9;){var c=e.charCodeAt(s);if(c<U||c>W)break;s++}if(s>r&&s<n){var l=e.charCodeAt(s);if(l===se||l===he){if(o=s+1,o<n&&e.charCodeAt(o)!==m&&e.charCodeAt(o)!==h&&e.charCodeAt(o)!==_)return null}else return null}else return null}else return null;var u=o,d=xn(e,t,o),f=0,p=u,g=d;if(u>=n)return{ordered:i>=U&&i<=W,marker:i>=U&&i<=W?e[s]:e[r],start:i>=U&&i<=W?Number.parseInt(e.slice(r,s),10):void 0,contentStart:u,contentCol:d+1,markerCol:a,isEmpty:!0};for(;p<n&&(e.charCodeAt(p)===m||e.charCodeAt(p)===h);){if(e.charCodeAt(p)===h){var v=4-g%4;g+=v}else g++;p++,f++}var y=p>=n,b=g-d;return y||b>4?(g=d+1,p=u+1,f=1):f===0&&(g=d+1,p=u,f=1),{ordered:i>=U&&i<=W,marker:i>=U&&i<=W?e[s]:e[r],start:i>=U&&i<=W?Number.parseInt(e.slice(r,s),10):void 0,contentStart:p,contentCol:g,markerCol:a,isEmpty:y}}var Cn=0;function wn(e,t,n,r){var i=0,a=t;for(Cn=0;a<n&&i<r;){var o=e.charCodeAt(a);if(o===h){var s=4-i%4;if(i+s>r){Cn=i+s-r,a++,i=r;break}i+=s}else if(o===m)i++;else break;a++}return a}function Tn(e,t,n,r){var i=tn(e,t),a=Sn(e,t,i);if(!a)return null;var o=[],s=t,c=a.contentCol,l=``,u=a.isEmpty,d=!1,f=!1;if(!a.isEmpty){for(var p=!1,x=a.contentStart;x<i;x++)if(e.charCodeAt(x)===h){p=!0;break}if(p){var w=``,E=xn(e,t,a.contentStart),D=E-a.contentCol;if(D>0)for(var j=0;j<D;j++)w+=` `;for(var N=a.contentStart;N<i;N++)if(e.charCodeAt(N)===h){for(var P=4-E%4,F=0;F<P;F++)w+=` `;E+=P}else w+=e[N],E++;l=`${w}
`}else l=`${e.slice(a.contentStart,i)}
`}for(s=nn(e,i);s<e.length;){var I=tn(e,s);cn(e,s,I);var L=e.charCodeAt(s+sn);if(Z<c&&(L===T||L===O||L===k)&&Z<=3&&pn(e,s))break;var R=Sn(e,s,I);if(R&&R.ordered===a.ordered&&R.marker===a.marker&&R.markerCol<c){o.push({contentCol:c,raw:l,hasBlankAfter:d,isEmpty:u}),d&&(f=!0),c=R.contentCol,u=R.isEmpty,d=!1,l=R.isEmpty?``:`${e.slice(R.contentStart,I)}
`,s=nn(e,I);continue}if(ln(e,s,I)){var ee=wn(e,s,I,c);if(Cn>0||ee<I){for(var te=``,ne=0;ne<Cn;ne++)te+=` `;l+=`${te+e.slice(ee,I)}
`}else l+=`
`;s=nn(e,I);for(var re=!1,z=0;z<l.length;z++){var ie=l.charCodeAt(z);if(ie!==_&&ie!==g&&ie!==m&&ie!==h){re=!0;break}}if(u&&!re){if(s<e.length){var ae=tn(e,s),B=Sn(e,s,ae);if(!B||B.ordered!==a.ordered||B.marker!==a.marker)break;d=!0}else break}if(s<e.length){var oe=tn(e,s);cn(e,s,oe);var se=e.charCodeAt(s+sn);if((se===T||se===O||se===k)&&Z<=3&&pn(e,s))break;var ce=Sn(e,s,oe);if(ce&&ce.ordered===a.ordered&&ce.marker===a.marker&&ce.markerCol<c){d=!0;continue}if(!ln(e,s,oe)&&Z<c)break}continue}if(Z>=c){var le=wn(e,s,I,c);if(Cn>0){for(var V=``,de=c,fe=0;fe<Cn;fe++)V+=` `,de++;for(var pe=le;pe<I;pe++)if(e.charCodeAt(pe)===h){for(var me=4-de%4,he=0;he<me;he++)V+=` `;de+=me}else V+=e[pe],de++;l+=`${V}
`}else l+=`${e.slice(le,I)}
`;s=nn(e,I);continue}for(var ge=!1,_e=0;_e<l.length;_e++){var ve=l.charCodeAt(_e);if(ve!==_&&ve!==g&&ve!==m&&ve!==h){ge=!0;break}}if(!d&&ge&&!u){var ye=s+sn,H=e.charCodeAt(ye);if(!(H===C||H===S||H===A||H===v||H===y||(H===T||H===O||H===k||H===ue)&&(pn(e,s)!=null||Sn(e,s,I)!=null)||H>=U&&H<=W&&Sn(e,s,I)!=null)){l+=`${e.slice(ye,I)}
`,s=nn(e,I);continue}}break}if(o.push({contentCol:c,raw:l,hasBlankAfter:d,isEmpty:u}),o.length===0)return null;var be=f;if(!be)for(var xe=0;xe<o.length;xe++){if(o[xe].hasBlankAfter&&xe<o.length-1){be=!0;break}if(!o[xe].isEmpty){for(var G=o[xe].raw,K=G.length,q=0,Se=!1,Ce=!1,we=!1,Te=!1,Ee=0,De=0,Oe=-1;q<K;){var ke=G.indexOf(`
`,q);if(ke<0&&(ke=K),Te){cn(G,q,ke);for(var Ae=G.slice(q+sn,ke),je=0;je<Ae.length&&Ae.charCodeAt(je)===Ee;)je++;je>=De&&Ae.slice(je).trim()===``&&(Te=!1),q=ke<K?ke+1:K;continue}if(ln(G,q,ke)){Oe>=0?we=!0:Se&&(Ce=!0),q=ke<K?ke+1:K;continue}if(cn(G,q,ke),Oe>=0){if(Z>=Oe){q=ke<K?ke+1:K;continue}var Me=Sn(G,q,ke);if(Me&&Me.markerCol<Oe&&Me.contentCol<=Oe){q=ke<K?ke+1:K;continue}if(Me){q=ke<K?ke+1:K;continue}Oe=-1,we&&=(Ce=!0,!1)}var Ne=G.slice(q+sn,ke),Y=Ne.charCodeAt(0);if((Y===v||Y===y)&&Z<=3){for(var Pe=0;Pe<Ne.length&&Ne.charCodeAt(Pe)===Y;)Pe++;if(Pe>=3){if(Ce&&Se){be=!0;break}Te=!0,Ee=Y,De=Pe,Se=!0,q=ke<K?ke+1:K;continue}}var Fe=Z<=3?Sn(G,q,ke):null;if(Fe&&Se){if(Ce){be=!0;break}Oe=Fe.contentCol,we=!1,q=ke<K?ke+1:K,Se=!0;continue}if(Ce){be=!0;break}Se=!0,q=ke<K?ke+1:K}if(be)break}}for(var Ie=[],X=0;X<o.length;X++){for(var Le=o[X],Re=Le.raw,ze=Re.length;ze>0&&Re.charCodeAt(ze-1)===_;)ze--;var Be=ze<Re.length?Re.slice(0,ze):Re,Ve=null;if(Be.length>=3&&Be.charCodeAt(0)===b){var He=Be[1];(He===` `||He===`x`||He===`X`)&&Be.charCodeAt(2)===M&&(Ve={type:J.gfmTask,completed:He===`x`||He===`X`},Be=Be.slice(3))}var Ue;if(Le.isEmpty&&Be.trim()===``)Ue=[];else if(be){var We=n.inList;n.inList=!0;var Ge=n.i;n.i=Ge||X!==o.length-1,Ue=wr(Be,n,r),n.i=Ge,n.inList=We}else{var Ke=n.inList;n.inList=!0;var qe=n.i;if(n.i=qe||X!==o.length-1,Ue=wr(Be,n,r),n.i=qe,n.inList=Ke,Ue.length===1&&Ue[0].type===J.paragraph)Ue=Ue[0].children;else if(n.p){var Je=[];n.p.push({src:Ue,dest:Je,unwrap:!0}),Ue=Je}else{for(var Ye=[],Xe=0;Xe<Ue.length;Xe++)if(Ue[Xe].type===J.paragraph)for(var Ze=Ue[Xe].children,Qe=0;Qe<Ze.length;Qe++)Ye.push(Ze[Qe]);else Ye.push(Ue[Xe]);Ue=Ye}}if(Ve){var $e=[Ve,{type:J.text,text:` `}];if(n.p)n.p.push({src:Ue,dest:$e,unwrap:!1});else for(var et=0;et<Ue.length;et++)$e.push(Ue[et]);Ie.push($e)}else Ie.push(Ue)}return{node:{type:a.ordered?J.orderedList:J.unorderedList,start:a.ordered?a.start:void 0,items:Ie},end:s}}var En=new Set(`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`));function Dn(e,t,n){let r={};for(let[o,s]of Object.entries(e)){let e=o.toLowerCase();if(e===`style`&&typeof s==`string`){let e={},t=[],n=0,i=0;for(let e=0;e<s.length;e++){let r=s.charCodeAt(e);r===me?n++:r===he?n--:r===B&&n===0&&(t.push(s.slice(i,e)),i=e+1)}i<s.length&&t.push(s.slice(i));let a=!1;t.forEach(t=>{let n=t.indexOf(`:`);if(n===-1)return;let r=t.slice(0,n).trim(),i=t.slice(n+1).trim();if(r&&i){if(/url\s*\(\s*(javascript|vbscript|data:(?!image\/))/i.test(i)){a=!0;return}let t=r.indexOf(`-`)===-1?r:r.replace(/-([a-z])/g,(e,t)=>t.toUpperCase());e[t]=i}}),!a&&Object.keys(e).length>0&&(r[o]=e)}else if((e===`href`||e===`src`)&&n?.sanitizer){let i=n.sanitizer(s,t,e);i!=null&&(r[o]=i)}else if(s===``)r[o]=!0;else if(s.length>=2&&s.charCodeAt(0)===fe&&s.charCodeAt(s.length-1)===pe){var i=s.slice(1,-1);if(i.length>0){var a=i.charCodeAt(0);if(a===b||a===fe)try{r[o]=JSON.parse(i);continue}catch{}}if(i===`true`){r[o]=!0;continue}if(i===`false`){r[o]=!1;continue}if(n?.evalUnserializableExpressions)try{r[o]=(0,eval)(`(${i})`);continue}catch{}r[o]=i}else r[o]=s}return r}function On(e,t,n){let r=t.length;if(r===0)return n;var i=t.charCodeAt(0);if(!(i>=G&&i<=K||i>=q&&i<=Se)){for(var a=String.fromCharCode(i),o=e.length-r,s=n;s<=o;){var c=e.indexOf(a,s);if(c===-1||c>o)return-1;for(var l=!0,u=1;u<r;u++){var d=e.charCodeAt(c+u),f=t.charCodeAt(u);if(d>=G&&d<=K&&(d+=we),f>=G&&f<=K&&(f+=we),d!==f){l=!1;break}}if(l)return c;s=c+1}return-1}i>=G&&i<=K&&(i+=we);for(let a=n;a<=e.length-r;a++){var p=e.charCodeAt(a);if(p>=G&&p<=K&&(p+=we),p!==i)continue;let n=!0;for(let i=1;i<r;i++){let r=e.charCodeAt(a+i),o=t.charCodeAt(i);if(r>=G&&r<=K&&(r+=we),o>=G&&o<=K&&(o+=we),r!==o){n=!1;break}}if(n)return a}return-1}function kn(e,t,n){let r=t.length;var i=t.charCodeAt(0);i>=G&&i<=K&&(i+=we);for(let o=Math.min(n,e.length-r);o>=0;o--){var a=e.charCodeAt(o);if(a>=G&&a<=K&&(a+=we),a!==i)continue;let n=!0;for(let i=1;i<r;i++){let r=e.charCodeAt(o+i),a=t.charCodeAt(i);if(r>=G&&r<=K&&(r+=we),a>=G&&a<=K&&(a+=we),r!==a){n=!1;break}}if(n)return o}return-1}var An=-1;function jn(e,t,n){let r=n.toLowerCase(),i=`<${r}`,a=`</${r}`,o=1,s=t,c=e.length;for(An=-1;s<c&&o>0;){let t=On(e,i,s),n=On(e,a,s);if(n===-1)return-1;if(t!==-1&&t<n){let n=Ht(e,t);n?(n.tag.toLowerCase()===r&&!n.f&&!n.n&&!Re(n.tag)&&o++,s=n.end):s=t+1}else{var l=n+a.length,u=l<c?e.charCodeAt(l):62;if((u===S||u===m||u===h||u===_)&&(o--,o===0)){An=n;let t=n+a.length;for(;t<c&&e.charCodeAt(t)!==S;)t++;return t+1}s=n+1}}return-1}function Mn(e,t,n,r){if(r.ignoreHTMLBlocks||r.disableParsingRawHTML)return null;var i=tn(e,t);if(cn(e,t,i),Z>3&&!n.inHTML)return null;var a=t+sn;if(e.charCodeAt(a)!==A)return null;var o=e.indexOf(`>`,a+1);if(o!==-1&&o<i){var s=e.slice(a+1,o);if(/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(s)||/^[^\s@]+@[^\s@]+$/.test(s))return null}var c=Nn(e,a);if(c>=1&&c<=5){var l=e.length;if(c===1){for(var u=e.length,d=0;d<wt.length;d++){var f=On(e,`</${wt[d]}>`,a);f>=0&&f<u&&(u=f)}if(u<e.length){var p=e.indexOf(`>`,u);l=p>=0?nn(e,p+1):e.length}}else{var v=c===2?`-->`:c===3?`?>`:c===4?`>`:`]]>`,y=e.indexOf(v,a);y>=0&&(l=nn(e,y+v.length))}var b=e.slice(a,l);if(c>=2)return{node:{type:J.htmlComment,text:b,s:!1,raw:!0},end:l};var x=`div`,C=b.match(/^<\/?([a-zA-Z][a-zA-Z0-9-]*)/);C&&(x=C[1]);var w=Ht(e,a),T={},E;w&&!w.f&&(T=Dn(w.attrs,x,r),E=w.g+w.b);var D=[],O=On(b,`</${x.toLowerCase()}`,0),k=``,j,M,N;if(w?.f){N=b.slice(0,w.end-a);for(var P=b.slice(w.end-a);P.length>0&&P.charCodeAt(P.length-1)===_;)P=P.slice(0,-1);P&&(M=Ut(P))}else if(w&&!w.f){var F=w.end-a;if(O===-1){for(var I=b;I.length>0&&I.charCodeAt(I.length-1)===_;)I=I.slice(0,-1);j=Ut(I)}else{var L=F;b.charCodeAt(L)===_&&L++;for(var R=O;R>L;){var ee=b.charCodeAt(R-1);if(ee!==m&&ee!==h&&ee!==_&&ee!==g)break;R--}var z=b.slice(L,R);z&&(M=Ut(z));for(var ie=b.slice(O);ie.length>0&&ie.charCodeAt(ie.length-1)===_;)ie=ie.slice(0,-1);N=Ut(ie),k=b.slice(F,O).trim()}}var ae=w?w.f:!1;return{node:{type:J.htmlBlock,tag:x,attrs:T,b:E,children:D,e:M,h:N,j,text:k,c:!0,a:ae},end:l}}if(c===6||c===7){var B=an(e,t),oe=B<e.length?B:e.length,se=e.slice(a,oe),le=B<e.length?nn(e,B):e.length,V=Ht(e,a);if(V){var ue=V.tag,de=ue.toLowerCase();if(V.f){var fe=e.slice(V.end,oe);return{node:{type:J.htmlBlock,tag:ue,attrs:{},children:[],h:e.slice(a,V.end),e:fe?Ut(fe):void 0,text:fe,c:!0,a:!0},end:le}}if(V.n||Re(ue))return{node:{type:J.htmlBlock,tag:ue,attrs:Dn(V.attrs,ue,r),b:V.g+V.b,children:[],text:``,c:!1,a:!1},end:V.end<e.length&&e.charCodeAt(V.end)===_?V.end+1:V.end};var pe=n.d||0,me=e.slice(a,oe),he=-1,ge=-1,_e=!1;if(pe<10){for(var ve=`</${de}`,ye=V.end-a,H=1,be=ye;be<me.length&&H>0;){var xe=On(me,`<${de}`,be),U=On(me,ve,be);if(U===-1)break;if(xe!==-1&&xe<U){var W=xe+de.length+1;if(W<me.length){var q=me.charCodeAt(W);(q===m||q===h||q===_||q===S||q===ce)&&H++}be=xe+1}else{var Se=U+ve.length;if(Se<me.length){var Ce=me.charCodeAt(Se);if((Ce===S||Ce===m||Ce===h||Ce===_)&&(H--,H===0)){he=U;for(var we=Se;we<me.length&&me.charCodeAt(we)!==S;)we++;ge=we+1;break}}else if(H--,H===0){he=U,ge=me.length;break}be=U+1}}if(he===-1&&!V.f&&(c===6||V.u)){var Te=jn(e,V.end,de);if(Te!==-1){for(var Ee=An,De=V.end,Oe=!1,ke=!1,Ae=!1,je=0,Me=!1,Ne=!1,Y=De;Y<Ee;){var Pe=e.charCodeAt(Y);if(Pe===_)Ne&&(Oe=!0),Me||je++,Ne=!0,Y++;else if(Pe===m||Pe===h)Y++;else{if(!Me&&(Me=!0,je>=2&&Pe===A)){Ae=!0;break}if(Ne=!1,Pe===A){var Fe=e.charCodeAt(Y+1)|32;if((Fe===ne||Fe===re||Fe===te)&&(Dt.lastIndex=Y,Dt.test(e))){ke=!0;break}}Y++}}if(Oe&&!Ae&&!ke){var Ie=tn(e,Te);oe=Ie,le=nn(e,Ie),me=e.slice(a,oe),se=e.slice(a,oe),he=Ee-a,ge=Te-a,_e=!0}}}}var X=V.b.indexOf(`
`)!==-1||V.g.indexOf(`
`)!==-1,Le=!1;he!==-1&&(Le=me.slice(ge).trim().length===0);var ze=!1,Be=oe,Ve=le;if(he!==-1){var He=a+ge,Ue=tn(e,He-1);if(He<Ue){for(var We=He;We<Ue&&(e.charCodeAt(We)===m||e.charCodeAt(We)===h);)We++;if(We<Ue&&e.charCodeAt(We)===A){var Ge=Ht(e,We);Ge&&!Ge.f&&(ze=!0,Be=He,Ve=He,Le=!0)}}if(!ze){var Ke=nn(e,Ue);if(Ke<oe){for(var qe=Ke;qe<oe&&(e.charCodeAt(qe)===m||e.charCodeAt(qe)===h);)qe++;qe<oe&&e.charCodeAt(qe)===A&&Ht(e,qe)&&(ze=!0,Be=Ue,Ve=Ke,Le=!0)}}!ze&&n.inHTML&&(ze=!0,Be=Ue,Ve=nn(e,Ue),Le=e.slice(He,Ue).trim().length===0)}var Je=[],Ye=``;if(he!==-1){Ye=me.slice(V.end-a,he);var Xe=Ye.trim();if(Xe){var{inline:Ze,inHTML:Qe,d:$e}=n;if(n.inHTML=!0,n.d=pe+1,de===`p`)n.inline=!0,Je=zn(Xe,!1,n,r);else{var et=Ye.indexOf(`

`)!==-1,tt=Ot.test(Xe),nt=kt.test(Xe),rt=et||tt||n.inHTML&&nt;Ye.length>=2&&Ye.charCodeAt(0)===_&&Ye.charCodeAt(Ye.length-1)===_&&!et&&!tt&&!nt?Je=[{type:J.text,text:Xe}]:rt||nt?(n.inline=!1,Je=wr(Ye,n,r)):(n.inline=!0,Je=zn(Xe,!1,n,r))}n.inline=Ze,n.inHTML=Qe,n.d=$e}}var it=!1;if(c===6&&he!==-1&&!n.inHTML&&!X){var at=/<[a-zA-Z][^>]*>/.test(Ye),ot=Ye.indexOf(`

`)!==-1||Ot.test(Ye);at&&!ot&&(it=!0)}if(!_e&&(n.inHTML||c===7||X||!Le||it)){var st,ct,lt=!1;if(he!==-1&&ze){var ut=!1;if(n.inHTML&&ge<me.length){for(var dt=ge;dt<me.length&&me.charCodeAt(dt)!==_;)dt++;var ft=me.slice(ge,dt).trim();ut=ft.length>1&&ft.charCodeAt(0)===A&&ft.charCodeAt(1)!==ce}ct=ut?me.slice(V.end-a):Ye,lt=!0}else(c===7||n.inHTML)&&he!==-1?(ct=me.slice(V.end-a),ct.charCodeAt(0)===_&&(ct=ct.slice(1))):ze?st=e.slice(a,Be):X?st=se:(ct=me.slice(V.end-a),ct.charCodeAt(0)===_&&(ct=ct.slice(1)));var pt=st!==void 0,mt=Ut(st===void 0?ct||``:st),ht={type:J.htmlBlock,tag:ue,attrs:Dn(V.attrs,ue,r),b:V.g+V.b,children:Je,e:pt?void 0:mt,j:pt?mt:void 0,text:mt,c:!0,a:!1};return lt&&(ht.x=!0),{node:ht,end:Ve}}var gt=Ut(Ye);return{node:{type:J.htmlBlock,tag:ue,attrs:Dn(V.attrs,ue,r),b:V.g+V.b,children:Je,e:_e?void 0:gt,text:gt,c:!1,a:!1},end:Ve}}var _t=se.match(/^<(\/?)([a-zA-Z][a-zA-Z0-9-]*)/),vt=_t?_t[2]:`div`,yt=_t?_t[1]===`/`:!1,bt,xt,St,Ct=``;if(yt){var Et=se.indexOf(`>`);Et===-1?bt=se:(bt=se.slice(0,Et+1),Ct=se.slice(Et+1),Ct&&(xt=Ut(Ct)))}else St=Ut(se);return{node:{type:J.htmlBlock,tag:vt,attrs:{},children:[],e:xt,h:bt,j:St,text:yt?Ct:se,c:!0,a:yt},end:le}}var At=Ht(e,a);if(!At)return null;var jt=At.tag,Mt=jt.toLowerCase(),Nt=jt.charCodeAt(0),Pt=Nt>=G&&Nt<=K;if(!(Pt||En.has(Mt)||Tt.has(Mt)||Mt.includes(`-`)))return null;if(At.f)return{node:{type:J.htmlSelfClosing,tag:jt,attrs:{},h:e.slice(a,At.end),a:!0},end:At.end};var Ft=jn(e,At.end,jt),It=[];if(Ft!==-1){var Lt=An,Rt=e.slice(At.end,Lt),zt=Rt.trim();if(zt){var Bt=Rt.indexOf(`

`)!==-1,Vt=Ot.test(zt),Wt=kt.test(zt),Gt=n.inline,Kt=n.inHTML,qt=n.d;n.inHTML=!0,n.d=(n.d||0)+1,Bt||Vt||Wt?(n.inline=!1,It=wr(Rt,n,r)):(n.inline=!0,It=zn(zt,!1,n,r)),n.inline=Gt,n.inHTML=Kt,n.d=qt}var Jt=tn(e,Ft),Yt=e.slice(Ft,Jt).trim()?Ft:nn(e,Ft),Xt=Pt?e.slice(a,Ft):e.slice(a,Yt);return{node:{type:J.htmlBlock,tag:jt,attrs:Dn(At.attrs,jt,r),b:At.g+At.b,children:It,j:Ut(Xt),text:Pt?Rt:Xt,c:!0,a:!1},end:Yt}}var Zt=an(e,At.end),Qt=Zt<e.length?nn(e,Zt):Zt,$t=e.slice(At.end,Zt);if($t.trim()){var{inline:en,inHTML:rn,d:on}=n;n.inline=!1,n.inHTML=!0,n.d=(n.d||0)+1,It=wr($t,n,r),n.inline=en,n.inHTML=rn,n.d=on}var ln=e.slice(At.end,Zt);return{node:{type:J.htmlBlock,tag:jt,attrs:Dn(At.attrs,jt,r),b:At.g+At.b,children:It,e:Ut(ln),text:$t,c:!0,a:!1},end:Qt}}function Nn(e,t){if(e.charCodeAt(t)!==A)return 0;var n=t+1,r=e.length;if(e.charCodeAt(n)===N&&e.charCodeAt(n+1)===T&&e.charCodeAt(n+2)===T)return 2;if(e.charCodeAt(n)===oe)return 3;if(e.charCodeAt(n)===N){var i=e.charCodeAt(n+1);if(i>=G&&i<=K)return 4;if(e.slice(n+1,n+8)===`[CDATA[`)return 5}for(var a=e.charCodeAt(n)===ce,o=a?n+1:n,s=o;s<r;){var c=e.charCodeAt(s);if(c>=G&&c<=K||c>=q&&c<=Se||c>=U&&c<=W||c===T)s++;else break}if(s===o)return 0;var l=e.slice(o,s);if(Tt.has(l.toLowerCase())){if(a)return 0;var u=e.charCodeAt(s);return+(u===m||u===h||u===S||u===_||s>=r)}if(En.has(l.toLowerCase())){if(a){for(var d=s;d<r&&(e.charCodeAt(d)===m||e.charCodeAt(d)===h);)d++;return d<r&&e.charCodeAt(d)===S?6:0}var f=s<r?e.charCodeAt(s):-1;return f===m||f===h||f===S||f===_||f===ce||f===-1?6:0}if(a){for(var p=s;p<r&&(e.charCodeAt(p)===m||e.charCodeAt(p)===h);)p++;if(p<r&&e.charCodeAt(p)===S){var g=tn(e,t);if(e.slice(p+1,g).trim()===``)return 7}}else{var v=tn(e,t),y=Ht(e,t);if(y&&y.end<=v&&e.slice(y.end,v).trim()===``)return 7}return 0}function Pn(e,t,n){for(var r=0,i=e.length;r<i&&(e.charCodeAt(r)===m||e.charCodeAt(r)===h);)r++;for(;i>r&&(e.charCodeAt(i-1)===m||e.charCodeAt(i-1)===h);)i--;r<i&&e.charCodeAt(r)===de&&r++,i>r&&e.charCodeAt(i-1)===de&&(i-2<r||e.charCodeAt(i-2)!==D)&&i--;for(var a=[],o=r,s=!1,c=[],l=r;l<i;){var u=e.charCodeAt(l);if(u===D&&l+1<i){e.charCodeAt(l+1)===de?(s||(s=!0,c=[]),c.push(e.slice(o,l)),c.push(`|`),l+=2,o=l):l+=2;continue}if(u===v){for(var d=0;l<i&&e.charCodeAt(l)===v;)d++,l++;for(var f=!1;l<i&&!f;){for(var p=0;l<i&&e.charCodeAt(l)===v;)p++,l++;p===d?f=!0:p===0&&l++}continue}if(u===de){var g=s?(c.push(e.slice(o,l)),c.join(``)):e.slice(o,l);a.push(g.trim()),l++,o=l,s=!1,c=[];continue}l++}var _=s?(c.push(e.slice(o,i)),c.join(``)):e.slice(o,i);return a.push(_.trim()),a.map(e=>{var r=e.indexOf(`\\|`)===-1?e:e.replace(/\\\|/g,`|`);return r?zn(r,!1,t,n):[]})}function Fn(e,t,n,r){let i=tn(e,t);var a=e.indexOf(`|`,t);if(a<0||a>=i)return null;let o=nn(e,i);if(o>=e.length)return null;let s=tn(e,o);if(!Pt(e,o,s))return null;let c=e.slice(t,i),l=e.slice(o,s);for(var u=[],d=0,f=l.length;d<f&&(l.charCodeAt(d)===m||l.charCodeAt(d)===h);)d++;for(d<f&&l.charCodeAt(d)===de&&d++;d<f;){for(;d<f&&(l.charCodeAt(d)===m||l.charCodeAt(d)===h);)d++;if(d>=f||l.charCodeAt(d)===de)break;var p=l.charCodeAt(d)===F;for(p&&d++;d<f&&l.charCodeAt(d)===T;)d++;var g=d<f&&l.charCodeAt(d)===F;for(g&&d++,u.push(p&&g?`center`:g?`right`:p?`left`:null);d<f&&(l.charCodeAt(d)===m||l.charCodeAt(d)===h);)d++;d<f&&l.charCodeAt(d)===de&&d++}let _=Pn(c,n,r);if(u.length!==_.length)return null;let b=[],x=nn(e,s);for(;x<e.length;){let t=tn(e,x),i=e.slice(x,t);if(ln(e,x,t))break;if(cn(e,x,t),Z<4){var w=e.charCodeAt(x+sn);if(w===S||w===C||(w===T||w===O||w===k)&&pn(e,x))break;if(w===v||w===y){for(var E=x+sn,D=0;E<t&&e.charCodeAt(E)===w;)D++,E++;if(D>=3)break}}b.push(Pn(i,n,r)),x=nn(e,t)}if(r.optimizeForStreaming&&b.length===0)return null;for(var A=_.length,j=0;j<b.length;j++)if(b[j].length<A)for(;b[j].length<A;)b[j].push([]);else b[j].length>A&&(b[j].length=A);return{node:{type:J.table,header:_,cells:b,align:u},end:x}}function In(e,t,n){if(cn(e,t,tn(e,t)),Z>3)return null;var r=t+sn;if(e.charCodeAt(r)!==b)return null;if(r+1<e.length&&e.charCodeAt(r+1)===x)return Ln(e,r,n)||null;n.refs||={};var i=Gt(e,r,n.refs);return i===null?null:{node:{type:J.refCollection},end:i}}function Ln(e,t,n){var r=e.length;if(e.charCodeAt(t)!==b||t+1>=r||e.charCodeAt(t+1)!==x)return null;for(var i=t+2,a=i;i<r&&e.charCodeAt(i)!==M;){if(e.charCodeAt(i)===_)return null;i++}if(i>=r)return null;var o=`^${e.slice(a,i)}`.toLowerCase();if(i++,i>=r||e.charCodeAt(i)!==F)return null;for(i++;i<r&&(e.charCodeAt(i)===m||e.charCodeAt(i)===h);)i++;if(i<r&&e.charCodeAt(i)===_)for(i++;i<r&&(e.charCodeAt(i)===m||e.charCodeAt(i)===h);)i++;var s=e.indexOf(`
`,i);s<0&&(s=r);for(var c=e.slice(i,s).trim(),l=s<r?s+1:r;l<r;){var u=tn(e,l);if(cn(e,l,u),Z>=2&&!ln(e,l,u))c+=`
${e.slice(l,u)}`,l=nn(e,u);else if(ln(e,l,u)){var d=nn(e,u);if(d<r&&(cn(e,d,tn(e,d)),Z>=2)){c+=`
`,l=nn(e,u);continue}break}else break}var f=n.refs;return f&&!f[o]&&(f[o]={target:c,title:void 0}),{node:{type:J.footnote},end:l}}function Rn(e,t,n,r){let i=t,a=0,o=0,s=-1;for(;i<e.length;){let t=s>=0?s:tn(e,i);if(s=-1,ln(e,i,t))break;if(cn(e,i,t),Z<4&&o>0&&!n.l){let n=e.charCodeAt(i+sn);if(n===E||n===T){let r=i+sn;for(;r<t&&e.charCodeAt(r)===n;)r++;for(;r<t&&(e.charCodeAt(r)===m||e.charCodeAt(r)===h);)r++;if(r>=t){a=n===E?1:2,i=nn(e,t);break}}}o=t;let g=nn(e,t);if(g<e.length){if(e.charCodeAt(g)===xe){var c=tn(e,g);i=nn(e,c),o=c;continue}let t=tn(e,g);if(s=t,cn(e,g,t),Z<4){let a=e.charCodeAt(g+sn);if(a===S){i=g;break}if(a===C){for(var l=g+sn,u=0;l<t&&e.charCodeAt(l)===C&&u<=6;)u++,l++;if(u>=1&&u<=6&&(l>=t||e.charCodeAt(l)===m||e.charCodeAt(l)===h)){i=g;break}}if(a===v||a===y){for(var d=g+sn,f=0;d<t&&e.charCodeAt(d)===a;)f++,d++;if(f>=3){i=g;break}}if(a===A){var p=g+sn+1,b=p<t?e.charCodeAt(p):0,x=b===N||b===oe;if(!x&&b===ce){for(var w=p+1,D=w;D<t&&(e.charCodeAt(D)>=G&&e.charCodeAt(D)<=K||e.charCodeAt(D)>=q&&e.charCodeAt(D)<=Se||e.charCodeAt(D)>=U&&e.charCodeAt(D)<=W||e.charCodeAt(D)===T);)D++;D>w&&(x=En.has(e.slice(w,D).toLowerCase()))}else if(!x){for(var j=p;j<t&&(e.charCodeAt(j)>=G&&e.charCodeAt(j)<=K||e.charCodeAt(j)>=q&&e.charCodeAt(j)<=Se||e.charCodeAt(j)>=U&&e.charCodeAt(j)<=W||e.charCodeAt(j)===T);)j++;if(j>p){var M=e.slice(p,j).toLowerCase();x=En.has(M)||Tt.has(M)}}if(x&&Mn(e,g,n,r)){i=g;break}}if(a===T||a===O||a===ue){let n=g+sn+1;if(n<t&&(e.charCodeAt(n)===m||e.charCodeAt(n)===h)&&rn(e,n,t)<t&&!pn(e,g)){i=g;break}}if(a>=U&&a<=W){let n=g+sn;for(;n<t&&e.charCodeAt(n)>=U&&e.charCodeAt(n)<=W;)n++;if(n<t&&(e.charCodeAt(n)===se||e.charCodeAt(n)===he)&&n-(g+sn)===1&&e.charCodeAt(g+sn)===49){var P=n+1;if(P<t&&(e.charCodeAt(P)===m||e.charCodeAt(P)===h)&&rn(e,P,t)<t){i=g;break}}}if(a===de){let n=nn(e,t);if(n<e.length&&Pt(e,n,tn(e,n))){i=g;break}}if((a===T||a===O||a===k)&&pn(e,g)){if(a!==T){i=g;break}let n=0,r=g+sn;for(;r<t&&e.charCodeAt(r)===T;)n++,r++;for(;r<t&&(e.charCodeAt(r)===m||e.charCodeAt(r)===h);)r++;if(r<t){i=g;break}}}}i=nn(e,t)}for(var F=a?o:i;F>t&&(e.charCodeAt(F-1)===_||e.charCodeAt(F-1)===g||e.charCodeAt(F-1)===m||e.charCodeAt(F-1)===h);)F--;for(var I=t;I<F&&(e.charCodeAt(I)===m||e.charCodeAt(I)===h);)I++;if(I>=F)return null;for(var L=!1,R=I;R<F;R++)if(e.charCodeAt(R)===xe){L=!0;break}var ee=L?e.slice(I,F).replace(/\u001E/g,``):e.slice(I,F);if(!ee)return null;let te=zn(ee,!0,n,r);return a?{node:{type:J.heading,level:a,children:te,id:``},end:i}:{node:{type:J.paragraph,children:te},end:i}}function zn(e,t,n,r){var i=n.t;if(!i){var a=n.k;n.k=t;var o=Sr(e,0,e.length,n,r);return n.k=a,o}var s=[];return i.push({dest:s,text:e,breaks:t,inline:n.inline,inAnchor:n.inAnchor,inHTML:n.inHTML,htmlDepth:n.d,inList:n.inList,inBlockQuote:n.inBlockQuote,noSetext:n.l,depth:n.o}),s}function Bn(e,t,n){if(e.charCodeAt(t)!==v)return null;let r=on(e,t,n,96),i=t+r;for(;i<n;){let a=e.indexOf("`",i);if(a<0||a>=n)return null;let o=on(e,a,n,96);if(o===r){let n=e.slice(t+r,a);return n.indexOf(`
`)!==-1&&(n=n.replace(/\n/g,` `)),n.length>0&&n[0]===` `&&n.at(-1)===` `&&n.trim().length>0&&(n=n.slice(1,-1)),{node:{type:J.codeInline,text:n},end:a+o}}i=a+o}return null}function Vn(e,t,n){if(e.charCodeAt(t)!==v)return t;let r=on(e,t,n,96),i=t+r;for(;i<n;){let a=e.indexOf("`",i);if(a<0||a>=n)return t;let o=on(e,a,n,96);if(o===r)return a+o;i=a+o}return t}function Hn(e,t,n){if(e.charCodeAt(t)!==A)return t;if(t+1<n&&e.charCodeAt(t+1)===ce){let r=t+2;for(;r<n&&e.charCodeAt(r)!==S;)r++;return r<n?r+1:t}if(t+3<n&&e.charCodeAt(t+1)===N&&e.charCodeAt(t+2)===T&&e.charCodeAt(t+3)===T){let n=e.indexOf(`-->`,t+4);return n>=0?n+3:t}let r=t+1,i=r;for(;r<n;){let t=e.charCodeAt(r);if(t>=G&&t<=K||t>=q&&t<=Se||t>=U&&t<=W||t===T)r++;else break}if(r===i)return t;let a=e.slice(i,r).toLowerCase(),o=!1;for(;r<n;){let i=e.charCodeAt(r);if(i===S){r++;break}if(i===ce&&r+1<n&&e.charCodeAt(r+1)===S){r+=2,o=!0;break}if(i===V||i===le){var s=i;for(r++;r<n&&e.charCodeAt(r)!==s;)r++;r<n&&r++;continue}if(i===_)return t;r++}if(o||Re(a))return r;let c=1;for(;r<n&&c>0;)if(e.charCodeAt(r)===A){if(r+1<n&&e.charCodeAt(r+1)===ce){let t=r+2,i=t;for(;i<n&&(e.charCodeAt(i)>=G&&e.charCodeAt(i)<=K||e.charCodeAt(i)>=q&&e.charCodeAt(i)<=Se);)i++;if(e.slice(t,i).toLowerCase()===a){for(;i<n&&e.charCodeAt(i)!==S;)i++;if(i<n&&i++,c--,c===0)return i}r=i}else{let t=r+1,i=t;for(;i<n&&(e.charCodeAt(i)>=G&&e.charCodeAt(i)<=K||e.charCodeAt(i)>=q&&e.charCodeAt(i)<=Se);)i++;e.slice(t,i).toLowerCase()===a&&c++,r++}}else r++;return r}function Un(e,t,n,r,i){if(e.charCodeAt(t)!==y||t+1>=n||e.charCodeAt(t+1)!==y)return null;let a=t+2;for(;a+1<n;){let o=e.charCodeAt(a);if(o===v){let t=Vn(e,a,n);if(t>a){a=t;continue}}if(o===y&&e.charCodeAt(a+1)===y){let n=e.slice(t+2,a),o=Sr(n,0,n.length,r,i);return{node:{type:J.textFormatted,tag:`del`,children:o},end:a+2}}o===D&&a+1<n&&a++,a++}return null}function Wn(e,t,n,r,i){if(e.charCodeAt(t)!==E||t+1>=n||e.charCodeAt(t+1)!==E)return null;let a=t+2;for(;a+1<n;){let o=e.charCodeAt(a);if(o===v){let t=Vn(e,a,n);if(t>a){a=t;continue}}if(o===E&&e.charCodeAt(a+1)===E&&a>t+2){let n=e.slice(t+2,a),o=Sr(n,0,n.length,r,i);return{node:{type:J.textFormatted,tag:`mark`,children:o},end:a+2}}o===D&&a+1<n&&a++,a++}return null}function Gn(e,t,n){return e<Ce?!!(Xt(e)&Ve):qe.test(t[n])}function Kn(e,t,n){return e<Ce?!!(Xt(e)&ze):Je.test(t[n])}function qn(e,t,n){var r=e.charCodeAt(t);if(r!==O&&r!==k)return null;var i=on(e,t,n,r);if(i===0)return null;var a=t>0?e.charCodeAt(t-1):32,o=t+i<n?e.charCodeAt(t+i):32,s=Kn(a,e,t-1),c=Kn(o,e,t+i),l=t>0&&Gn(a,e,t-1),u=t+i<n&&Gn(o,e,t+i),d=!c&&(!u||s||l),f=!s&&(!l||c||u),p,m;return r===O?(p=d,m=f):(p=d&&(!f||l),m=f&&(!d||u)),{len:i,canOpen:p,canClose:m}}function Jn(e,t,n,r){if(t.length!==0){for(var i=e.length,a=Array(i),o=null,s=null,c=0;c<i;c++){var l={node:e[c],prev:s,next:null};s?s.next=l:o=l,a[c]=l,s=l}for(var u=Array(t.length),d=0;d<t.length;d++)u[d]=a[t[d].idx];for(var f=[],p=0;p<12;p++)f[p]=-1;for(var m=0;m<t.length;){var h=t[m];if(!(h.active&&h.canClose)){m++;continue}for(var g=(h.ch===O?0:1)*6+h.len%3*2+ +!!h.canOpen,_=f[g]===void 0?-1:f[g],v=-1,y=m-1;y>_;y--){var b=t[y];if(!(!b.active||b.ch!==h.ch||!b.canOpen)&&!((h.canOpen||b.canClose)&&(b.len+h.len)%3==0&&b.len%3!=0)){v=y;break}}if(v<0){f[g]=m-1,!h.canOpen&&(h.active=!1),m++;continue}var x=t[v],S=x.len>=2&&h.len>=2,C=S?2:1;x.len-=C,h.len-=C;var w=u[v],T=u[m],E=w.node,D=T.node;E.text=E.text.slice(0,E.text.length-C),D.text=D.text.slice(C);for(var k=[],A=w.next;A&&A!==T;)k.push(A.node),A=A.next;var j={node:{type:J.textFormatted,tag:S?`strong`:`em`,children:k},prev:w,next:T};w.next=j,T.prev=j;for(var M=v+1;M<m;M++)t[M].active=!1;if(x.len===0&&(x.active=!1,E.text===``)){var N=w.prev;j.prev=N,N?N.next=j:o=j}if(h.len===0){if(h.active=!1,D.text===``){var P=T.next;j.next=P,P&&(P.prev=j)}}else continue;m++}for(var F=0,I=o;I;){var L=I.node;if(L.type===J.text){var R=L;if(R.text===``){I=I.next;continue}if(F>0&&e[F-1].type===J.text){e[F-1].text+=R.text,I=I.next;continue}}e[F++]=L,I=I.next}e.length=F}}function Yn(e,t,n,r){return t(e,n,r)===null?null:e}var Xn=0,Zn=0,Qn=0,$n=0,er=0,tr=0,nr=0,rr=0;function ir(){return nr===2147483647&&(Zn=0,$n=0,tr=0,or=0,nr=0),++nr}var ar=null,or=0,sr=[],cr=256;function lr(e,t,n,r,i){let a=e.charCodeAt(t)===N,o=a?t+1:t;if(e.charCodeAt(o)!==b||$n===rr&&o>=Qn)return null;var s=or===rr?ar:null,c=s===null?0:s[o];if(c<0)return null;var l=c;if(c===0){var u=e.indexOf(`]`,o+1);if(u<0||u>=n)return Qn=o,$n=rr,null;l=o+1;var d=0;sr[d++]=o;for(var f=n-o>=cr;l<n&&d>0;){var p=e.charCodeAt(l);if(p===D&&l+1<n){l+=2;continue}if(p===v){var h=Vn(e,l,n);if(h>l){l=h;continue}}if(p===A){var g=ur(e,l,n);if(g){l=g.end;continue}var y=Hn(e,l,n);if(y>l){l=y;continue}}if(p===b)sr[d++]=l;else if(p===M){var x=sr[--d];s===null&&f&&l-o>=cr&&(s=ar=new Int32Array(n),or=rr),s!==null&&(s[x]=l+1)}l++}if(d>0){if(s===null&&f&&l-o>=cr&&(s=ar=new Int32Array(n),or=rr),s!==null)for(;d>0;)s[sr[--d]]=-1;return null}}var C=l-1,w=e.slice(o+1,C),T=l<n?e.charCodeAt(l):0,E=!1;if(T===me){var O=!0;for(l++;l<n&&(e.charCodeAt(l)===m||e.charCodeAt(l)===_);)l++;var k=``,j=l;if(l<n&&e.charCodeAt(l)===A){for(l++,j=l;j<n&&e.charCodeAt(j)!==S;){if(e.charCodeAt(j)===D&&j+1<n){j+=2;continue}if(e.charCodeAt(j)===_){O=!1;break}j++}O&&(j>=n||e.charCodeAt(j)!==S)&&(O=!1),O&&(k=e.slice(l,j),j++)}else if(O){var P=Zn===rr?Xn:-1;if(P>=0&&l>=P)O=!1;else{for(var F=0,I=!1;j<n;){var L=e.charCodeAt(j);if(L===D&&j+1<n){j+=2;continue}if(L===me)F++;else if(L===he){if(I=!0,F===0)break;F--}else if(L===m||L===_)break;j++}j>=n&&!I&&(P<0||l<P)&&(Xn=l,Zn=rr),k=e.slice(l,j)}}if(O){for(l=j;l<n&&(e.charCodeAt(l)===m||e.charCodeAt(l)===_);)l++;var R;if(l<n){var ee=e.charCodeAt(l);if(ee===V||ee===le||ee===me){var te=ee===me?41:ee;l++;for(var ne=l;l<n&&e.charCodeAt(l)!==te;)e.charCodeAt(l)===D&&l+1<n&&l++,l++;l>=n?O=!1:(R=e.slice(ne,l),l++)}}if(O){for(;l<n&&(e.charCodeAt(l)===m||e.charCodeAt(l)===_);)l++;(l>=n||e.charCodeAt(l)!==he)&&(O=!1)}}if(O){if(l++,k=je(Zt(k)),R!==void 0&&(R=je(Zt(R))),a){var re=hr(Sr(w,0,w.length,r,i));return{node:{type:J.image,target:Yn(k,i?.sanitizer||Ne,`img`,`src`),alt:re,title:R},end:l}}var z=r.inAnchor;r.inAnchor=!0;var ie=z?[{type:J.text,text:w}]:Sr(w,0,w.length,r,i);return r.inAnchor=z,!r.inAnchor&&mr(ie)?null:{node:{type:J.link,target:Yn(k,i?.sanitizer||Ne,`a`,`href`),title:R,children:ie},end:l}}l=C+1,E=!0}var ae=``,B=l;if(!E&&T===b){var oe=l+1;B=oe;for(var se=!1;B<n&&e.charCodeAt(B)!==M;){if(e.charCodeAt(B)===D&&B+1<n){B+=2;continue}if(e.charCodeAt(B)===b){se=!0;break}B++}if(se||B>=n)return null;var ce=e.slice(oe,B);if(ce.trim())ae=Yt(ce);else{if(Jt(w))return null;ae=Yt(w)}B+=1}else{if(Jt(w))return null;ae=Yt(w)}var ue=r.refs?.[ae];if(!ue)return null;if(a)return{node:{type:J.image,target:Yn(ue.target,i?.sanitizer||Ne,`img`,`src`),alt:hr(Sr(w,0,w.length,r,i)),title:ue.title},end:B};var de=r.inAnchor;r.inAnchor=!0;var ie=de?[{type:J.text,text:w}]:Sr(w,0,w.length,r,i);return r.inAnchor=de,!r.inAnchor&&mr(ie)?null:{node:{type:J.link,target:Yn(ue.target,i?.sanitizer||Ne,`a`,`href`),title:ue.title,children:ie},end:B}}function ur(e,t,n){if(e.charCodeAt(t)!==A)return null;for(var r=t+1;r<n;){var i=e.charCodeAt(r);if(i===S)break;if(i===m||i===_||i===g||i===A)return null;r++}if(r>=n||e.charCodeAt(r)!==S)return null;var a=e.slice(t+1,r);return a.match(/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^\x00-\x20]*)$/)?{node:{type:J.link,target:a,title:void 0,children:[{type:J.text,text:a}]},end:r+1}:a.indexOf(`@`)!==-1&&/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)?{node:{type:J.link,target:`mailto:${a}`,title:void 0,children:[{type:J.text,text:a}]},end:r+1}:null}function dr(e,t,n,r){if(e.charCodeAt(t)!==b||t+1>=n||e.charCodeAt(t+1)!==x||tr===rr&&t>=er)return null;let i=t+2;for(;i<n&&e.charCodeAt(i)!==M&&e.charCodeAt(i)!==_;)i++;if(i>=n)return er=t,tr=rr,null;if(e.charCodeAt(i)!==M)return null;let a=e.slice(t+2,i);return a?{node:{type:J.footnoteReference,target:`#${Ie(a)}`,text:a},end:i+1}:null}function fr(e,t,n,r){if(r.disableBareUrls)return null;var i=``,a=!1,o=e.charCodeAt(t);if(o===R||o===72?t+8<=n&&e.charCodeAt(t+1)===te&&e.charCodeAt(t+2)===te&&e.charCodeAt(t+3)===ne&&(e.charCodeAt(t+4)===re&&e.charCodeAt(t+5)===F&&e.charCodeAt(t+6)===ce&&e.charCodeAt(t+7)===ce?i=`https://`:e.charCodeAt(t+4)===F&&e.charCodeAt(t+5)===ce&&e.charCodeAt(t+6)===ce&&(i=`http://`)):o===L||o===70?t+6<=n&&e.charCodeAt(t+1)===te&&e.charCodeAt(t+2)===ne&&e.charCodeAt(t+3)===F&&e.charCodeAt(t+4)===ce&&e.charCodeAt(t+5)===ce&&(i=`ftp://`):(o===ee||o===87)&&t+4<=n&&e.charCodeAt(t+1)===ee&&e.charCodeAt(t+2)===ee&&e.charCodeAt(t+3)===se&&(i=`www.`,a=!0),!i)return null;let s=t+i.length;for(;s<n;){let t=e.charCodeAt(s);if(t===m||t===_||t===h||t===g||t===A||t===S)break;s++}for(var c=0,l=0,u=t;u<s;u++){var d=e.charCodeAt(u);d===me?c++:d===he&&l++}let f=s;for(;f>t+i.length;){let n=e.charCodeAt(f-1);if(n===se||n===ae||n===F||n===N||n===oe||n===he||n===O||n===k||n===y){if(n===he){if(c>=l)break;l--}f--}else if(n===B){for(var p=f-2;p>t&&(e.charCodeAt(p)>=G&&e.charCodeAt(p)<=K||e.charCodeAt(p)>=q&&e.charCodeAt(p)<=Se||e.charCodeAt(p)>=U&&e.charCodeAt(p)<=W);)p--;p>=t&&e.charCodeAt(p)===P?f=p:f--}else break}if(f<=t+i.length)return null;var v=t+(a?4:i.length),b=e.indexOf(`/`,v);if((b<0||b>f)&&(b=f),a&&e.indexOf(`.`,v)===-1)return null;for(var x=-1,C=-1,w=b-1;w>=v;w--)if(e.charCodeAt(w)===se){if(x<0)x=w;else{C=w;break}}for(var w=C>=0?C+1:v;w<b;w++)if(e.charCodeAt(w)===k)return null;var T=e.slice(t,f),E=a?`http://${T}`:T;return{node:{type:J.link,target:E,title:void 0,children:[{type:J.text,text:T}]},end:f}}function pr(e,t,n,r){if(r.disableBareUrls)return null;for(var i=t,a=i;i<n;){var o=e.charCodeAt(i);if(o>=G&&o<=K||o>=q&&o<=Se||o>=U&&o<=W||o===se||o===N||o===C||o===36||o===w||o===P||o===le||o===O||o===ue||o===ce||o===E||o===oe||o===x||o===k||o===v||o===fe||o===de||o===pe||o===y||o===T)i++;else break}if(i===a||i>=n||e.charCodeAt(i)!==j)return null;i++;for(var s=i,c=-1,l=i;i<n;){var o=e.charCodeAt(i);if(o>=G&&o<=K||o>=q&&o<=Se||o>=U&&o<=W)i++;else if((o===T||o===k)&&i>s)i++;else if(o===se){if(i===s)break;var u=e.charCodeAt(i-1);if(u===T||u===k||i-l>63)break;if(i+1<n){var d=e.charCodeAt(i+1);if(d>=G&&d<=K||d>=q&&d<=Se||d>=U&&d<=W)c=i,l=i+1,i++;else break}else break}else break}if(i-l>63||c<0)return null;var f=e.charCodeAt(i-1);if(!(f>=G&&f<=K||f>=q&&f<=Se||f>=U&&f<=W)||i<=c+1)return null;for(var p=-1,m=c-1;m>=s;m--)if(e.charCodeAt(m)===se){p=m;break}for(var m=p>=0?p+1:s;m<i;m++)if(e.charCodeAt(m)===k)return null;var h=e.slice(t,i);return{node:{type:J.link,target:`mailto:${h}`,title:void 0,children:[{type:J.text,text:h}]},end:i}}function mr(e){for(var t=0;t<e.length;t++)if(e[t].type===J.link||`children`in e[t]&&Array.isArray(e[t].children)&&mr(e[t].children))return!0;return!1}function hr(e,t){for(var n=``,r=0;r<e.length;r++){var i=e[r];i.type===J.text?n+=i.text:i.type===J.breakLine?n+=` `:i.type===J.codeInline||i.type===J.footnoteReference?n+=i.text:`children`in i&&Array.isArray(i.children)?n+=hr(i.children,t):!t&&i.type===J.image&&(n+=i.alt||``)}return n}function gr(e,t,n){for(var r=0;r<e.length;r++){var i=e[r];if(i.type===J.heading){var a=i;a.id=un(n(hr(a.children,!0)),t)}if(`children`in i){var o=i.children;Array.isArray(o)&&gr(o,t,n)}if((i.type===J.orderedList||i.type===J.unorderedList)&&Array.isArray(i.items))for(var s=i.items,c=0;c<s.length;c++)gr(s[c],t,n)}}function _r(e){return{type:J.text,text:e}}function vr(e,t,n){var r=t+1;if(r>=n)return-1;if(e.charCodeAt(r)===C){r++;var i=r<n&&(e.charCodeAt(r)===H||e.charCodeAt(r)===be);i&&r++;for(var a=r,o=i?6:7;r<n&&r-a<=o;){var s=e.charCodeAt(r);if(!(s>=U&&s<=W||i&&(s>=G&&s<=I||s>=q&&s<=L)))break;r++}return r===a||r-a>o?-1:r<n&&e.charCodeAt(r)===B?r+1:-1}for(var c=r;r<n&&r-c<48;){var l=e.charCodeAt(r);if(l>=G&&l<=K||l>=q&&l<=Se||l>=U&&l<=W){r++;continue}break}return r===c?-1:r<n&&e.charCodeAt(r)===B?r+1:-1}function yr(e,t,n,r,i){if(e.charCodeAt(t)!==A)return null;var a=t+1;if(a>=n)return null;var o=e.charCodeAt(a);if(o===N&&a+1<n&&e.charCodeAt(a+1)===T&&a+2<n&&e.charCodeAt(a+2)===T){var s=a+3;if(s<n&&e.charCodeAt(s)===S)return{node:{type:J.htmlComment,text:``,s:!0},end:s+1};if(s+1<n&&e.charCodeAt(s)===T&&e.charCodeAt(s+1)===S)return{node:{type:J.htmlComment,text:`-`,s:!0},end:s+2};var c=e.indexOf(`-->`,s);return c!==-1&&c<=n-3?{node:{type:J.htmlComment,text:e.slice(t+4,c),s:!1},end:c+3}:null}if(o===oe){var l=e.indexOf(`?>`,a+1);return l!==-1&&l<n?{node:{type:J.htmlSelfClosing,tag:`?`,attrs:{},m:e.slice(t,l+2),a:!1},end:l+2}:null}if(o===N&&a+1<n){var u=e.charCodeAt(a+1);if(u===b&&e.slice(a+1,a+8)===`[CDATA[`){var d=e.indexOf(`]]>`,a+8);return d!==-1&&d<n?{node:{type:J.htmlSelfClosing,tag:`![CDATA[`,attrs:{},m:e.slice(t,d+3),a:!1},end:d+3}:null}if(u>=G&&u<=K){var f=e.indexOf(`>`,a+2);return f!==-1&&f<n?{node:{type:J.htmlSelfClosing,tag:`!${e.slice(a+1,f)}`,attrs:{},m:e.slice(t,f+1),a:!1},end:f+1}:null}}if(o===ce){var p=a+1;if(p>=n)return null;var g=e.charCodeAt(p);if(!(g>=G&&g<=K||g>=q&&g<=Se))return null;for(p++;p<n;){var v=e.charCodeAt(p);if(v>=G&&v<=K||v>=q&&v<=Se||v>=U&&v<=W||v===T)p++;else break}for(;p<n&&(e.charCodeAt(p)===m||e.charCodeAt(p)===h||e.charCodeAt(p)===_);)p++;if(p<n&&e.charCodeAt(p)===S){var y=e.slice(a+1,p).trim();return{node:{type:J.htmlSelfClosing,tag:y,attrs:{},h:e.slice(t,p+1),a:!0},end:p+1}}return null}if(!(o>=G&&o<=K||o>=q&&o<=Se))return null;var x=Ht(e,t);if(!x)return null;var C=x.tag,w=C.toLowerCase();if(x.n||Re(C))return{node:{type:J.htmlSelfClosing,tag:C,attrs:Dn(x.attrs,C,i),m:x.q?Bt(x):e.slice(t,x.end),a:!1},end:x.end};var E=Tt.has(w),D=jn(e.slice(0,n),x.end,C);if(D===-1)return{node:{type:J.htmlSelfClosing,tag:C,attrs:Dn(x.attrs,C,i),m:x.q?Bt(x):e.slice(t,x.end),a:!1},end:x.end};var O=kn(e,`</${w}`,D),k=e.slice(x.end,O);if(E){var j=Ut(k);return{node:{type:J.htmlBlock,tag:C,attrs:Dn(x.attrs,C,i),b:x.g+x.b,children:[],e:j||void 0,h:e.slice(O,D),text:j,c:!0,a:!1},end:D}}var M=[],P=k.trim();if(P){var{inAnchor:F,inline:I,k:L}=r;w===`a`&&(r.inAnchor=!0),r.k=!1,P.indexOf(`

`)!==-1||/^#{1,6}\s/.test(P)?(r.inline=!1,M=wr(P,r,i)):M=Sr(P,0,P.length,r,i),r.inAnchor=F,r.inline=I,r.k=L}return{node:{type:J.htmlBlock,tag:C,attrs:Dn(x.attrs,C,i),b:x.b,children:M,text:Ut(k),c:!1,a:!1},end:D}}var br=200,xr=0;function Sr(e,t,n,r,i){if(xr++,xr>br)return xr--,[{type:J.text,text:e.slice(t,n)}];var a=rr;rr=ir();let o=r;if(i.optimizeForStreaming){let r=function(e,t){for(var n=1,r=t+1;r<e.length;r++){var i=e.charCodeAt(r);if(i===b)n++;else if(i===M&&(n--,n===0))return r}return-1},i=e.slice(t,n),a=i;for(var s=0,c=0,l=0,u=0,d=0,f=-1,p=-1,h=-1,g=-1,S=-1,C=0;C<i.length;C++){var w=i.charCodeAt(C);w===O?C+1<i.length&&i.charCodeAt(C+1)===O?(s++,f=C,C++):(c++,p=C):w===k?C+1<i.length&&i.charCodeAt(C+1)===k?(l++,h=C,C++):(u++,g=C):w===y&&C+1<i.length&&i.charCodeAt(C+1)===y&&(d++,S=C,C++)}var T=[];d%2==1&&S>=0&&T.push([S,2]),l%2==1&&h>=0&&T.push([h,2]),u%2==1&&g>=0&&T.push([g,1]),s%2==1&&f>=0&&T.push([f,2]),c%2==1&&p>=0&&T.push([p,1]),T.sort((e,t)=>t[0]-e[0]);for(var j=0;j<T.length;j++){var F=T[j][0],I=T[j][1];i=i.slice(0,F)+i.slice(F+I)}let o=0,m=-1;for(let e=0;e<i.length;e++)i.charCodeAt(e)===v&&(o++,m=e);if(o%2==1&&m!==-1){let e=!1,t=-1,n=0;for(;n<i.length;)i.charCodeAt(n)===v&&(e?(e=!1,t=-1):(t=n,e=!0)),n++;e&&t!==-1&&(i=i.slice(0,t))}for(var ne=!0;ne;){ne=!1;for(var re=-1,z=-1,ie=-1,ae=!1,B=0;B<i.length;B++)if(i.charCodeAt(B)===b&&(B===0||i.charCodeAt(B-1)!==D)){var oe=B>0&&i.charCodeAt(B-1)===N,se=oe?B-1:B,le=r(i,B);if(le===-1)re=se,ae=oe,z=B+1,ie=i.length;else{var V=le+1;if(V>=i.length)re=se,ae=oe,z=B+1,ie=le;else if(i.charCodeAt(V)===me){var ue=i.indexOf(`)`,V+1);ue===-1?(re=se,ae=oe,z=B+1,ie=le,B=i.length):B=ue}else if(i.charCodeAt(V)===b){var de=i.indexOf(`]`,V+1);de===-1?(re=se,ae=oe,z=B+1,ie=le,B=i.length):B=de}else B=le}}if(re>=0){var fe=ae?``:i.slice(z,ie);i=i.slice(0,re)+fe,ne=!0}}let _=i.match(/<([A-Z][A-Za-z0-9]*)(?:\s[^>]*)?>([^<]*)$/);if(_&&_.index!==void 0){var pe=_[0].length-_[2].length;if(!(pe>=2&&_[0].charCodeAt(pe-2)===ce)){for(var he=!1,ge=0,_e=0;_e<_.index;_e++)i.charCodeAt(_e)===v&&ge++;if(he=ge%2==1,!he){let e=_[1];On(i,`</${e}`,0)===-1&&(i=i.slice(0,_.index)+_[2])}}}i!==a&&(e=e.slice(0,t)+i,n=t+i.length)}let ve=[];var ye=[];let H=t;var be=``,xe=i.disableAutoLink||i.disableBareUrls||o.inAnchor?-1:e.indexOf(`@`,t);for(xe>=n&&(xe=-1);t<n;){let r=e.charCodeAt(t),a=null;if(r===v){if(a=Bn(e,t,n),!a){var we=on(e,t,n,v);t+=we-1}}else if(r===O||r===k){var Te=qn(e,t,n);if(Te){if(Te.canOpen||Te.canClose){(be||t>H)&&(ve.push(_r(be+e.slice(H,t))),be=``);var Ee=_r(e.slice(t,t+Te.len));ye.push({idx:ve.length,ch:r,len:Te.len,canOpen:Te.canOpen,canClose:Te.canClose,active:!0}),ve.push(Ee),t+=Te.len,H=t;continue}t+=Te.len-1}}else if(r===y)a=Un(e,t,n,o,i);else if(r===E)a=Wn(e,t,n,o,i);else if(r===b)t+1<n&&e.charCodeAt(t+1)===x&&(a=dr(e,t,n,o)),a||=lr(e,t,n,o,i);else if(r===N&&t+1<n&&e.charCodeAt(t+1)===b)a=lr(e,t,n,o,i);else if(r===A)a=ur(e,t,n),!(a||i.disableParsingRawHTML||i.ignoreHTMLBlocks)&&(a=yr(e,t,n,o,i));else if(r===P){var De=vr(e,t,n);if(De!==-1){var Oe=e.slice(t,De),ke=je(Oe);if(ke!==Oe){be=be+e.slice(H,t)+ke,t=De,H=De;continue}}}else if((r===R||r===ee||r===L)&&!o.inAnchor&&!i.disableAutoLink&&(t===0||e.charCodeAt(t-1)!==A)){var Ae=t+1<n?e.charCodeAt(t+1):0;(r===R&&Ae===te||r===L&&Ae===te||r===ee&&Ae===ee)&&(a=fr(e,t,n,i))}if(!a&&xe>=0&&xe-t<=64&&!o.inAnchor&&!i.disableAutoLink&&!i.disableBareUrls&&(r>=G&&r<=K||r>=q&&r<=Se||r>=U&&r<=W)&&(a=pr(e,t,n,i),!a&&t>=xe&&(xe=e.indexOf(`@`,t+1),xe>=n&&(xe=-1))),r===_&&o.k){var Me=!1,Ne=0;if(t>H&&e.charCodeAt(t-1)===D)Me=!0,Ne=1;else{for(var Y=0,Pe=t-1;Pe>=H&&e.charCodeAt(Pe)===m;)Y++,Pe--;Y>=2&&(Me=!0,Ne=Y)}if(Me){for((be||t-Ne>H)&&(ve.push(_r(be+e.slice(H,t-Ne))),be=``),ve.push({type:J.breakLine}),t++;t<n&&e.charCodeAt(t)===m;)t++;H=t;continue}var Fe=t>H&&e.charCodeAt(t-1)===m,Ie=t+1<n&&e.charCodeAt(t+1)===m;if(Fe||Ie){for(var X=t;X>H&&e.charCodeAt(X-1)===m;)X--;for(be+=`${e.slice(H,X)}
`,t++;t<n&&e.charCodeAt(t)===m;)t++;H=t;continue}}if(a)(be||t>H)&&(ve.push(_r(be+e.slice(H,t))),be=``),ve.push(a.node),t=a.end,H=t;else{if(r===D&&t+1<n&&Xt(e.charCodeAt(t+1))&Ve){(be||t>H)&&(ve.push(_r(be+e.slice(H,t))),be=``),ve.push(_r(e[t+1])),t+=2,H=t;continue}if(t++,xe<0||xe-t>64)for(;t<n&&!(xe>=0&&xe-t<=64);){var Le=e.charCodeAt(t);if(Le<Ce&&!At[Le])t++;else break}}}return(be||n>H)&&(ve.push(_r(be+e.slice(H,n))),be=``),ye.length>0&&Jn(ve,ye,r,i),rr=a,xr--,ve}var Cr=500;function wr(e,t,n){var r=t.o||0;if(r>Cr)return[{type:J.text,text:e}];if(t.o=r+1,n.optimizeForStreaming&&!(t.i||t.w)){for(var i=e.length;i>0&&e.charCodeAt(i-1)===_;)i--;for(var a=i;a>0&&e.charCodeAt(a-1)!==_;)a--;if(i>a&&e.charCodeAt(a)===de){for(var o=!1,s=a+1;s<i;s++){var c=e.charCodeAt(s);if(c!==m&&c!==h&&c!==de&&c!==F&&c!==T){o=!0;break}}for(var l=!1,u=!1,d=0,f=a,p=a-1;p>0;){for(var g=p;g>0&&e.charCodeAt(g-1)!==_;)g--;if(e.charCodeAt(g)!==de)break;f=g;for(var x=!0,w=!1,E=g;E<p;E++){var D=e.charCodeAt(E);if(D===T)w=!0;else if(D!==m&&D!==h&&D!==F&&D!==de){x=!1;break}}x&&w?(l=!0,u=!0):u||d++,p=g-1}o?l||(e=e.slice(0,a).trimEnd()):e=l&&d>0?e.slice(0,a).trimEnd():e.slice(0,f).trimEnd()}for(var j=-1,M=-1,P=-1,I=!1,L=e.length-1;L>=0;L--)if(e.charCodeAt(L)===A){for(var R=L+1<e.length?e.charCodeAt(L+1):0,ee=R>=G&&R<=K||R>=q&&R<=Se,te=R===ce&&L+2<e.length&&(e.charCodeAt(L+2)>=G&&e.charCodeAt(L+2)<=K||e.charCodeAt(L+2)>=q&&e.charCodeAt(L+2)<=Se),ne=R===N||R===oe,re=e.length;re>L+1&&e.charCodeAt(re-1)===_;)re--;var z=L+1>=re;if(ee||te||ne||z){var ie=L+1;if((te||ee)&&(ie=L+2),ee||te)for(;ie<e.length;){var ae=e.charCodeAt(ie);if(ae>=G&&ae<=K||ae>=q&&ae<=Se||ae>=U&&ae<=W)ie++;else break}for(var B=ee||te?ie:L+2;B<e.length&&e.charCodeAt(B)!==S;)B++;if(B>=e.length)j=L,I=!0;else if((ee||te)&&e.charCodeAt(B-1)!==ce){for(var le=!1,V=B+1;V<e.length;V++)if(e.charCodeAt(V)===A){le=!0;break}le||(j=L,M=ie,P=B+1)}}break}if(j>=0){for(var fe=0,pe=0;pe<j;pe++)e.charCodeAt(pe)===v&&fe++;if(fe%2==0){if(I)e=e.slice(0,j);else{var me=e.slice(j+1,M);On(e,`</${me}`,0)===-1&&(e=e.slice(0,j)+e.slice(P))}}}for(var ge=e.length;ge>0&&e.charCodeAt(ge-1)===_;)ge--;if(ge>0){for(var _e=ge;_e>0&&e.charCodeAt(_e-1)!==_;)_e--;for(var ve=_e,ye=0;ve<ge&&e.charCodeAt(ve)===m&&ye<3;)ve++,ye++;if(_e>0&&ve<ge&&fn(e,ve,ge)){for(var H=_e-1,be=H;be>0&&e.charCodeAt(be-1)!==_;)be--;ln(e,be,H)||(e=e.slice(0,_e).trimEnd())}}var Ce=e.length;if(Ce>0){for(var we=e.lastIndexOf(`
`),Ee=we===-1?0:we+1,De=Ce,Oe=Ee,ke=0;Oe<De&&e.charCodeAt(Oe)===m&&ke<3;)Oe++,ke++;if(Oe<De){var Ae=e.charCodeAt(Oe),je=!1;if(Ae===O||Ae===T||Ae===ue){var Me=Oe+1;if(Me>=De||e.charCodeAt(Me)===m||e.charCodeAt(Me)===h){for(var Ne=Me;Ne<De&&(e.charCodeAt(Ne)===m||e.charCodeAt(Ne)===h);)Ne++;Ne>=De&&(je=!0)}}else if(Ae>=U&&Ae<=W){for(var Y=Oe;Y<De&&e.charCodeAt(Y)>=U&&e.charCodeAt(Y)<=W;)Y++;if(Y<De&&(e.charCodeAt(Y)===se||e.charCodeAt(Y)===he)){var Pe=Y+1;if(Pe>=De||e.charCodeAt(Pe)===m||e.charCodeAt(Pe)===h){for(var Fe=Pe;Fe<De&&(e.charCodeAt(Fe)===m||e.charCodeAt(Fe)===h);)Fe++;Fe>=De&&(je=!0)}}}je&&(e=e.slice(0,Ee).trimEnd())}}}if(t.inline)return Sr(e,0,e.length,t,n);let Ie=[],X=0,Le=e.length;if(X===0&&!n.disableFrontmatter&&e.startsWith(`---`)){let t=Te(e);if(t?.hasValidYaml){if(n.preserveFrontmatter!==!1){let n=e.slice(0,t.endPos).trimEnd();Ie.push({type:J.frontmatter,text:n})}X=t.endPos}}for(;X<Le;){for(var Re=e.indexOf(`
`,X),ze=Re<0?Le:Re;X<Le&&ln(e,X,ze);)X=ze<Le?ze+1:ze,X<Le&&(Re=e.indexOf(`
`,X),ze=Re<0?Le:Re);if(X>=Le)break;var Be=e.charCodeAt(X)===xe;cn(e,X,ze);let r=null;if(Qt=e,$t=X,en=ze,!Be&&Z>=4&&!t.inHTML)r=yn(e,X);else if(!Be){let i=X+sn,a=e.charCodeAt(i);a===C?r=dn(e,X,t,n):a===S?r=bn(e,X,t,n):a===v||a===y?r=_n(e,X,t):a===T||a===O||a===k?(r=pn(e,X),!r&&(r=Tn(e,X,t,n))):a===ue||a>=U&&a<=W?r=Tn(e,X,t,n):a===A?r=Mn(e,X,t,n):a===de?r=Fn(e,X,t,n):a===b&&(r=In(e,X,t))}if(!r){for(var Ve=!1,He=X;He<ze;He++)if(e.charCodeAt(He)===de){Ve=!0;break}Ve&&(r=Fn(e,X,t,n))}if(r||=Rn(e,X,t,n),r)r.node.type!==J.refCollection&&Ie.push(r.node),X=r.end;else{var Ue=e.indexOf(`
`,X);X=Ue<0?Le:Ue+1}}return t.o=r,Ie}function Tr(e,t,n,r){var i=Ht(e,t);return i?{tagName:i.tag,tagLower:i.tag.toLowerCase(),attrs:i.b,whitespaceBeforeAttrs:i.g,isSelfClosing:i.n,hasSpaceBeforeSlash:i.r,isClosing:i.f,hasNewline:i.g.includes(`
`)||i.b.includes(`
`),endPos:i.end}:null}function Er(e,t,n){xr=0,e=Xe(e),!t.refs&&(t.refs={}),(n.optimizeForStreaming||t.inline)&&(t.w=Wt(e,t.refs,n));var r,i;t.t||(t.t=r=[],t.p=i=[]);let a=wr(e,t,n);if(r&&i){for(var o=r,s={inline:t.inline,inAnchor:t.inAnchor,inHTML:t.inHTML,htmlDepth:t.d,inList:t.inList,inBlockQuote:t.inBlockQuote,noSetext:t.l,depth:t.o},c=0;c<o.length;c++){var l=o[c];t.inline=l.inline,t.inAnchor=l.inAnchor,t.inHTML=l.inHTML,t.d=l.htmlDepth,t.inList=l.inList,t.inBlockQuote=l.inBlockQuote,t.l=l.noSetext,t.o=l.depth,t.k=l.breaks;var u=Sr(l.text,0,l.text.length,t,n);t.k=!1;for(var d=0;d<u.length;d++)l.dest.push(u[d])}t.inline=s.inline,t.inAnchor=s.inAnchor,t.inHTML=s.inHTML,t.d=s.htmlDepth,t.inList=s.inList,t.inBlockQuote=s.inBlockQuote,t.l=s.noSetext,t.o=s.depth;for(var f=i,p=0;p<f.length;p++)for(var m=f[p],h=0;h<m.src.length;h++){var g=m.src[h];if(m.unwrap&&g.type===J.paragraph)for(var _=g.children,v=0;v<_.length;v++)m.dest.push(_[v]);else m.dest.push(g)}t.t=void 0,t.p=void 0,gr(a,t,n.slugify)}return $e(t.refs)?[{type:J.refCollection,refs:t.refs},...a]:a}var Dr;try{Or=u.createElement(`div`),Dr=typeof Or==`object`&&Or&&`$$typeof`in Or&&typeof Or.$$typeof==`symbol`?Or.$$typeof:Symbol.for(`react.transitional.element`)}catch{Dr=Symbol.for(`react.transitional.element`)}var Or;function kr(e,t,n){return{$$typeof:Dr,type:e,key:n==null?null:String(n),ref:null,props:t,_owner:null,_store:{},_debugStack:null,_debugTask:null}}function Ar(e,t){var n={key:e};if(t){var r=ke(t);for(var i in r)n[i]=r[i]}return n}var jr=typeof u.createContext>`u`?void 0:u.createContext(void 0);function Mr(e,t,n,r,i,a,o,s,c){switch(e.type){case J.blockQuote:{let i={key:n.key};return e.alert&&(i.className=`markdown-alert-${a(e.alert.toLowerCase(),Ie)}`,e.children.unshift(et(e.alert))),r(`blockquote`,i,t(e.children,n))}case J.breakLine:return r(`br`,{key:n.key});case J.breakThematic:return r(`hr`,{key:n.key});case J.frontmatter:return s.preserveFrontmatter?r(`pre`,{key:n.key},e.text):null;case J.codeBlock:{let t=e.lang?je(e.lang):``;var l=e.attrs?ke(e.attrs):{};return l.className=t?`language-${t} lang-${t}`:``,r(`pre`,{key:n.key},r(`code`,l,e.text))}case J.codeInline:return r(`code`,{key:n.key},e.text);case J.footnoteReference:return r(`a`,{key:n.key,href:i(e.target,`a`,`href`)||void 0},r(`sup`,null,e.text));case J.gfmTask:return r(`input`,{checked:e.completed,key:n.key,readOnly:!0,type:`checkbox`});case J.heading:return r(`h${e.level}`,{id:e.id,key:n.key},t(e.children,n));case J.htmlBlock:{let a=e;if(ut(s)&&vt(a.tag)){var d=ct(a);return d.kind===`literal`?r(`span`,{key:n.key},d.literal):r(`span`,{key:n.key},...lt(d.open,a.children?t(a.children,n):null,d.close))}let l=a.j,_=l!==void 0,v=_?l:a.a?a.e||``:(a.e||``)+(a.h||``);if(v&&a.c){let r=Mt(a.tag.toLowerCase()),d=a.children,y=d!=null&&d.length>0;if(r){let t=_?l:a.e||``,r=ut(s)?bt(t):t;if(/<[a-z][^>]{0,100}>/i.test(v)){var f=Ar(n.key,e.attrs);return f.dangerouslySetInnerHTML={__html:r},c(e.tag,f)}return c(e.tag,Ar(n.key,e.attrs),r)}let b=RegExp(`^<${a.tag}(\\s|>)`,`i`);if(y&&!b.test(v)&&ut(s)&&yt(v))return c(e.tag,Ar(n.key,e.attrs),t(d,n));if(Nt(v)){let t=ut(s)?bt(v):v;var p=Ar(n.key,e.attrs);return p.dangerouslySetInnerHTML={__html:t},c(e.tag,p)}let x=xt({slugify:s.slugify,sanitizer:i,tagfilter:!0}),S=Ze(v);if(RegExp(`^<${a.tag}(\\s[^>]*)?>(\\s*</${a.tag}>)?$`,`i`).test(S))return a.children&&a.children.length>0?c(e.tag,Ar(n.key,e.attrs),t(a.children,n)):c(e.tag,Ar(n.key,e.attrs));let C=Er(S,{inline:!1,refs:o,inHTML:!1},x);it(C);let w=a.tag.toLowerCase(),T=_;if(T&&y)return c(e.tag,Ar(n.key,e.attrs),t(d,n));if(T)return t(C.flatMap(rt),n);var m=at(C,w);if(m.found&&m.afterClose.length>0){var h=m.beforeClose.flatMap(rt),g=m.afterClose.flatMap(rt);return kr(u.Fragment,{children:[c(e.tag,Ar(n.key,e.attrs),t(h,n)),t(g,n)]},n.key)}return c(e.tag,Ar(n.key,e.attrs),t(C.flatMap(rt),n))}return Re(e.tag)?c(e.tag,Ar(n.key,e.attrs)):c(e.tag,Ar(n.key,e.attrs),e.children?t(e.children,n):``)}case J.htmlSelfClosing:{let t=e;if(ut(s)&&vt(t.tag)){var _=ct(t);return r(`span`,{key:n.key},_.kind===`literal`?_.literal:_.open+(_.close||``))}return c(e.tag,Ar(n.key,e.attrs))}case J.image:{let t=e.target===null?null:i(e.target,`img`,`src`);return r(`img`,{key:n.key,alt:e.alt&&e.alt.length>0?e.alt:void 0,title:e.title||void 0,src:t||void 0})}case J.link:{let a={key:n.key};if(e.target!=null){let t=dt(e.target,i,`a`,`href`);t!=null&&(a.href=t)}return e.title&&(a.title=e.title),r(`a`,a,t(e.children,n))}case J.table:{let i=e;return r(`table`,{key:n.key},r(`thead`,{key:`thead`},r(`tr`,null,i.header.map(function(e,a){return r(`th`,{key:a,style:i.align[a]===null?{}:{textAlign:i.align[a]}},t(e,n))}))),i.cells.length>0&&r(`tbody`,{key:`tbody`},i.cells.map(function(e,a){return r(`tr`,{key:a},e.map(function(e,a){return r(`td`,{key:a,style:i.align[a]===null?{}:{textAlign:i.align[a]}},t(e,n))}))})))}case J.text:return e.text;case J.textFormatted:return r(e.tag,{key:n.key},t(e.children,n));case J.orderedList:case J.unorderedList:return r(e.type===J.orderedList?`ol`:`ul`,{key:n.key,start:e.type===J.orderedList?e.start:void 0},e.items.map(function(e,i){return r(`li`,{key:i},t(e,n))}));case J.paragraph:return r(`p`,{key:n.key},t(e.children,n));case J.ref:return null;default:return null}}var Nr=(e,t,n,r,i,a,o)=>{var s=e=>e.map(e=>`text`in e?e.text:``),c=(l,u={})=>{var d=Array.isArray(l)?l:[l],f=(u.renderDepth||0)+1;if(f>2500)return s(d);u.renderDepth=f;for(var p=u.key,m=[],h=!1,g=0;g<d.length;g++){u.key=g;var _=e?e(Mr.bind(null,d[g],c,u,t,n,r,i,a,o),d[g],c,u):Mr(d[g],c,u,t,n,r,i,a,o),v=typeof _==`string`;if(h&&typeof _==`string`){var y=m.at(-1);m[m.length-1]=(typeof y==`string`?y:``)+_}else if(_!=null){if(Array.isArray(_))for(var b=0;b<_.length;b++)m.push(_[b]);else m.push(_)}h=v}return u.key=p,u.renderDepth=f-1,m};return c},Pr=(e,t)=>{let n=pt(t,e,void 0);return n?typeof n==`function`||typeof n==`object`&&`render`in n?n:pt(t,`${e}.component`,e):e};function Fr(e,t){let n={...t||{}};n.overrides=n.overrides||{};let r=n.slugify||Ie,i=n.sanitizer||Ne,a=n.createElement,o=$e(n.overrides),s=e=>Ir(e,{...n,wrapper:null});function c(e){for(var t in e){var n=e[t];if(typeof n==`string`&&n.length>0&&n.charCodeAt(0)===A&&(St.test(n)||Ct.test(n)||Tr(n,0))){var r=s(n.trim());e[t]=t===`innerHTML`&&Array.isArray(r)?r[0]:r}}}function l(e,t,...r){var i=t||{},s=e;if(o){var c=pt(n.overrides,`${e}.props`,{});s=Pr(e,n.overrides),i={...i,...c,className:ht(i.className,c.className)||void 0}}if(!a){var l=i.key;return l!=null&&delete i.key,r.length===1?i.children=r[0]:r.length>1&&(i.children=r),kr(s,i,l)}return a(s,i,...r)}function u(e,t,...n){return t&&c(t),l(e,t,...n)}let d=xt(n,n.forceInline),f=e[0]&&e[0].type===J.refCollection?e[0].refs:{},p=Nr(n.renderRule,l,i,r,f,n,u),m=p(e,{inline:n.forceInline,refs:f}),h=ft(f);if(h.length>0&&m.push(l(`footer`,{key:`footer`},h.map(function(e){let t=e.identifier.charCodeAt(0)===x?e.identifier.slice(1):e.identifier,n=Er(e.footnote,{inline:!0,refs:f},d);return l(`div`,{id:r(t,Ie),key:e.identifier},`${t}: `,p(n,{inline:!0,refs:f}))}))),n.wrapper===null)return m;let g=n.wrapper||(n.forceInline?`span`:`div`),_;if(m.length>1||n.forceWrapper)_=m;else return m.length===1?m[0]:null;var v=n.wrapperProps?{...n.wrapperProps}:{};return v.children=_,kr(g,v,`outer`)}function Ir(e=``,t={}){let n={...t||{}};n.overrides=n.overrides||{},n.slugify,n.sanitizer;function r(e){let t=n.forceInline||!(n.forceBlock||Ae.test(e)),r=xt(n,t);return Fr(Er(t?e:nt(e),{inline:t,refs:i},r),{...n,forceInline:t})}let i={};return r(e)}function Lr(e){let t=u.useRef(e),n=t.current;if(n!==e){var r=!0,i=0;for(var a in e)if(i++,!Object.is(n[a],e[a])){r=!1;break}if(r){var o=0;for(var s in n)o++;r=o===i}r||(t.current=e)}return t.current}var Rr=({children:e,options:t,...n})=>{if(!(typeof u.useContext<`u`)){let r={...t,overrides:{...t?.overrides},wrapperProps:{...t?.wrapperProps,...n}};return Ir(e??``,r)}let r=jr?u.useContext(jr):void 0,i=Lr(n),a=u.useMemo(()=>({...r,...t,overrides:{...r?.overrides,...t?.overrides},wrapperProps:{...r?.wrapperProps,...t?.wrapperProps,...i}}),[r,t,i]),o=e??``;return u.useMemo(()=>Ir(o,a),[o,a])},zr=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Br=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),Vr=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),Hr=e=>{let t=Vr(e);return t.charAt(0).toUpperCase()+t.slice(1)},Ur={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Wr=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Gr=(0,u.createContext)({}),Kr=()=>(0,u.useContext)(Gr),qr=(0,u.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:p=`currentColor`,className:m=``}=Kr()??{},h=r??f?Number(n??d)*24/Number(t??l):n??d;return(0,u.createElement)(`svg`,{ref:c,...Ur,width:t??l??Ur.width,height:t??l??Ur.height,stroke:e??p,strokeWidth:h,className:zr(`lucide`,m,i),...!a&&!Wr(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,u.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),Jr=(e,t)=>{let n=(0,u.forwardRef)(({className:n,...r},i)=>(0,u.createElement)(qr,{ref:i,iconNode:t,className:zr(`lucide-${Br(Hr(e))}`,`lucide-${e}`,n),...r}));return n.displayName=Hr(e),n},Yr=Jr(`activity`,[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]),Xr=Jr(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),Zr=Jr(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),Qr=Jr(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),$r=Jr(`book-check`,[[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}],[`path`,{d:`m9 9.5 2 2 4-4`,key:`1dth82`}]]),ei=Jr(`book-open`,[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]),ti=Jr(`car`,[[`path`,{d:`M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2`,key:`5owen`}],[`circle`,{cx:`7`,cy:`17`,r:`2`,key:`u2ysq9`}],[`path`,{d:`M9 17h6`,key:`r8uit2`}],[`circle`,{cx:`17`,cy:`17`,r:`2`,key:`axvx0g`}]]),ni=Jr(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),ri=Jr(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),ii=Jr(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),ai=Jr(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),oi=Jr(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),si=Jr(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),ci=Jr(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),li=Jr(`file-check`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`m9 15 2 2 4-4`,key:`1grp1n`}]]),ui=Jr(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),di=Jr(`git-branch`,[[`path`,{d:`M15 6a9 9 0 0 0-9 9V3`,key:`1cii5b`}],[`circle`,{cx:`18`,cy:`6`,r:`3`,key:`1h7g24`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}]]),fi=Jr(`heart-pulse`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}],[`path`,{d:`M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27`,key:`auskq0`}]]),pi=Jr(`list`,[[`path`,{d:`M3 5h.01`,key:`18ugdj`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M3 19h.01`,key:`noohij`}],[`path`,{d:`M8 5h13`,key:`1pao27`}],[`path`,{d:`M8 12h13`,key:`1za7za`}],[`path`,{d:`M8 19h13`,key:`m83p4d`}]]),mi=Jr(`lock`,[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]),hi=Jr(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),gi=Jr(`map`,[[`path`,{d:`M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z`,key:`169xi5`}],[`path`,{d:`M15 5.764v15`,key:`1pn4in`}],[`path`,{d:`M9 3.236v15`,key:`1uimfh`}]]),_i=Jr(`panel-left-close`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}],[`path`,{d:`m16 15-3-3 3-3`,key:`14y99z`}]]),vi=Jr(`panel-left-open`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}],[`path`,{d:`m14 9 3 3-3 3`,key:`8010ee`}]]),yi=Jr(`printer`,[[`path`,{d:`M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,key:`143wyd`}],[`path`,{d:`M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`,key:`1itne7`}],[`rect`,{x:`6`,y:`14`,width:`12`,height:`8`,rx:`1`,key:`1ue0tg`}]]),bi=Jr(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),xi=Jr(`scale`,[[`path`,{d:`M12 3v18`,key:`108xh3`}],[`path`,{d:`m19 8 3 8a5 5 0 0 1-6 0zV7`,key:`zcdpyk`}],[`path`,{d:`M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1`,key:`1yorad`}],[`path`,{d:`m5 8 3 8a5 5 0 0 1-6 0zV7`,key:`eua70x`}],[`path`,{d:`M7 21h10`,key:`1b0cd5`}]]),Si=Jr(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Ci=Jr(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),wi=Jr(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Ti=Jr(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),Ei=Jr(`shuffle`,[[`path`,{d:`m18 14 4 4-4 4`,key:`10pe0f`}],[`path`,{d:`m18 2 4 4-4 4`,key:`pucp1d`}],[`path`,{d:`M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22`,key:`1ailkh`}],[`path`,{d:`M2 6h1.972a4 4 0 0 1 3.6 2.2`,key:`km57vx`}],[`path`,{d:`M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45`,key:`os18l9`}]]),Di=Jr(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Oi=Jr(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),ki=Jr(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),Ai=Jr(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),ji={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(N(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function k(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return O(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function A(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,O=e.height*C.y;w--;)T.push(D({x:E,y:O,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=k(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}});return}_.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var j;function M(){return j||=A(null,{useWorker:!0,resize:!0}),j}function N(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function P(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function F(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return M().apply(this,arguments)},n.exports.reset=function(){M().reset()},n.exports.create=A,n.exports.shapeFromPath=P,n.exports.shapeFromText=F})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),ji,!1);var Mi=ji.exports;ji.exports.create;var Ni=`# MÓDULO 1: FUNDAMENTOS Y DOCTRINA DE LA CUSTODIA DE DIGNATARIOS

---

> **Manual de Protección y Seguridad para Dignatarios**  
> **Policía de la Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur**  
> **División Custodia Gubernamental**  
> Edición 2026

---

## 🎯 Objetivos de Aprendizaje

Al finalizar este módulo, el alumno será capaz de:

1. Comprender la **misión fundamental** de la custodia de dignatarios y su diferencia con la seguridad privada.
2. Definir con precisión los conceptos de **Seguridad, Protección y Custodia** (la Tríada Conceptual).
3. Aplicar la **Ecuación del Riesgo** como herramienta de diagnóstico operativo.
4. Identificar el **perfil integral** del custodio de élite y sus competencias esenciales.
5. Conocer los **5 Principios del Escudo Protector** y la **Teoría de los Círculos Concéntricos**.
6. Operar bajo el sistema de **Códigos de Alerta** (Blanco, Amarillo, Naranja, Rojo).
7. Comprender la **organización operativa** de una unidad de custodia.

---

## 1.1. La Misión: No Protegemos Solo un Cuerpo, Protegemos una Investidura

![La Misión: Protección de la Investidura](./recursos/imagenes/mod1_mision.svg)


### Finalidad Suprema

La custodia de dignatarios tiene como finalidad suprema **garantizar la seguridad integral** —física, psicológica y funcional— de figuras estratégicas para el Estado.

> [!IMPORTANT]
> **El custodio policial no protege un cuerpo físico o un estatus social; protege una función del Estado, una investidura y la continuidad del sistema democrático.**

### Objetivo Operativo

Maximizar los niveles de seguridad y anticipar contextos desfavorables. **No se trata solo de reaccionar, sino de dominar la incertidumbre.**

Se garantiza la seguridad para resguardar una investidura y la continuidad del sistema institucional. La misión es resguardar la gobernabilidad y la continuidad del sistema democrático.

> *"El peligro no siempre golpea. Pero quien lo prevé y se prepara, convierte la incertidumbre en dominio."*  
> — Filosofía Estoica / Manual de Élite

### El Juramento del Custodio

> *"Estaré donde deba estar. Protegeré a quien deba proteger. Actuaré aunque nadie lo vea. Y caeré, si es necesario, con el honor intacto."*

---

## 1.2. La Tríada Conceptual: Distinciones Doctrinarias

Para comprender la doctrina de custodia, es fundamental distinguir tres conceptos que frecuentemente se confunden pero que tienen significados operativos muy diferentes:

![La Tríada Conceptual — Seguridad, Protección y Custodia](./recursos/imagenes/mod1_triada.svg)

### 1. SEGURIDAD (El Fin)

- **Definición:** Es la sensación de confianza y tranquilidad. Es el estado ideal donde el protegido puede ejercer su función sin presiones ni temores.
- **Concepto operativo:** Libertad de acción y ausencia de riesgo percibido.
- **Es el OBJETIVO final** de toda la operación.

### 2. PROTECCIÓN (El Medio)

- **Definición:** El conjunto de acciones, normas y medios (humanos, técnicos y organizativos) desplegados para impedir o neutralizar ataques.
- **Concepto operativo:** La barrera activa entre la amenaza y el protegido.
- **Es el INSTRUMENTO** que utilizamos para lograr la seguridad.

### 3. CUSTODIA (La Función)

- **Definición:** La actividad operativa específica de vigilancia y defensa inmediata de la persona (escolta).
- **Concepto operativo:** Los ojos y el escudo en el terreno.
- **Es la ACCIÓN** concreta que ejecuta el personal desplegado.

> [!TIP]
> **Regla mnemotécnica:** La **Seguridad** es lo que queremos lograr, la **Protección** es cómo lo hacemos, y la **Custodia** es quién lo ejecuta en el terreno.

---

## 1.3. La Ecuación del Riesgo: Diagnóstico de Seguridad

La evaluación del riesgo es la herramienta fundamental para dimensionar la operación de protección. Se expresa mediante la siguiente ecuación:

![La Ecuación del Riesgo — Amenaza × Vulnerabilidad = Riesgo](./recursos/imagenes/mod1_ecuacion.svg)

### RIESGO = AMENAZA × VULNERABILIDAD

#### AMENAZA (El Oponente — Factor Externo)

Es la **intención + la capacidad** de hacer daño. Puede manifestarse como:
- Atentados directos
- Secuestros
- Agresión verbal o física
- Sabotaje
- Ciberataques

> [!WARNING]
> **La amenaza rara vez puede eliminarse por completo.** Es una variable externa que no controlamos.

#### VULNERABILIDAD (Nosotros — Factor Interno)

Son las **debilidades propias** del sistema de seguridad o las fallas en el procedimiento:
- Falta de capacitación del personal
- Rutinas predecibles
- Fallas en comunicaciones
- Deficiencias en el estudio de emplazamiento
- Errores humanos

#### RIESGO (La Probabilidad)

La posibilidad de que la amenaza explote una vulnerabilidad y cause un daño.

> [!IMPORTANT]
> **Nuestra misión principal es reducir la VULNERABILIDAD para gestionar el RIESGO, dado que la AMENAZA es una variable que no controlamos.**

### La Ecuación Causal de Seguridad

El sistema completo opera así:

| Elemento | Tipo | Descripción |
|----------|------|-------------|
| **AMENAZA** | Fuerza Externa | Persona o fenómeno que constituye una causa probable de daño (voluntaria o fortuita) |
| **VULNERABILIDAD** | Falla Interna | Debilidad estructural o falta de capacidad para prevenir o resistir el suceso |
| **RIESGO** | Probabilidad Latente | Posibilidad inminente de que el daño se materialice |
| **SISTEMA DE PROTECCIÓN** | Intervención | Medidas humanas y técnicas (Círculos Concéntricos) para neutralizar la amenaza y sellar la vulnerabilidad |

---

## 1.4. Filosofía Central: Prevención sobre Reacción

![Filosofía Operativa: Prevención sobre Reacción](./recursos/imagenes/mod1_prevencion.svg)


La doctrina de custodia de élite se basa en un principio fundamental:

> **Un custodio de élite no reacciona: se anticipa.**

| Principio | Descripción |
|-----------|-------------|
| **Prevención** | El objetivo es anticipar amenazas mediante información para evitar la confrontación directa |
| **Planificación** | La improvisación es el enemigo de la seguridad. Toda operación requiere planificación de rutas, logística y análisis previo del terreno (RECCE) |
| **Evacuación** | Evacuar es más importante que confrontar. Se usan anillos de seguridad, formaciones dinámicas y cobertura activa para extraer al protegido |
| **Equipo** | El equipo cohesionado es el blindaje más sólido. Cada miembro tiene un rol definido: líder, flancos, retaguardia y apoyo logístico |

### Los Tres Pilares del Grupo de Protección

1. **Planificación** — Un plan flexible que anticipe escenarios
2. **Prevención** — La anticipación de riesgos antes de que se materialicen
3. **Secreto** — La confidencialidad como arma operativa fundamental

---

## 1.5. Perfil del Custodio: El Factor Humano

Más que fuerza bruta, se requiere una **comprensión profunda del entorno y del comportamiento humano.** El custodio de élite debe desarrollar las siguientes competencias:

![El Radar del Custodio de Élite — 7 Competencias](./recursos/imagenes/mod1_perfil.svg)

### Las 7 Competencias del Custodio de Élite

| Competencia | Descripción |
|-------------|-------------|
| 🧠 **Mente Estoica** | Autocontrol, resiliencia al estrés prolongado, capacidad de adaptación rápida |
| 💪 **Condición Física** | Resistencia aeróbica/anaeróbica constante para soportar el desgaste operativo |
| 🎯 **Dominio Táctico** | Tiro quirúrgico, formaciones, evacuación, primeros auxilios (RCP/TCCC) |
| 👤 **Invisibilidad/Perfil** | Vestimenta metódica, prestancia, capacidad de pasar desapercibido |
| 🤝 **Ética y Discreción** | Manejo de información clasificada, lealtad absoluta |
| 🏛️ **Diplomacia/Protocolo** | Interacción formal, firme pero respetuosa con el entorno civil |
| 📚 **Capacitación Continua** | Dominio de armamento, conducción, primeros auxilios y leyes |

### Atributos Personales Esenciales

- **Equilibrio Emocional:** "No obsecuente", "No demagógico". Control emocional constante.
- **Comunicación:** "Labia respetuosa" pero con "Firmeza". Saber hablar y saber callar.
- **Discreción Absoluta:** "Evitar resultados chismosos". La información es poder.
- **Bajo Perfil:** La invisibilidad es una herramienta táctica. Humildad y observación.

> *"La mente es el arma más poderosa. Se basa en el estoicismo: control emocional, resiliencia y decisiones bajo presión."*

### Arquitectura Psicológica y Fronteras Relacionales

#### La Mente del Custodio
- **Vida Metódica:** El rigor táctico comienza en casa (gestión de horarios de descanso, transporte y preparación).
- **Aislamiento Operativo:** Capacidad de presenciar la intimidad del VIP y manejar información crítica con hermetismo total.

#### Límites de Interacción

| Con el VIP | Con la Familia del VIP |
|-----------|----------------------|
| Determinante pero no confuso. Cambiar obsecuencia por personalidad táctica. Integrarse al equipo con cultura general. | Diálogo formal, estrictamente respetuoso. Cero involucramiento emocional o conversaciones comprometedoras. |

---

## 1.6. Inteligencia Protectiva: Las 5 Interrogantes del VIP

![Inteligencia Protectiva: Las 5 Interrogantes del VIP](./recursos/imagenes/mod1_interrogantes.svg)


Antes de iniciar cualquier operación, el equipo de custodia debe responder cinco preguntas fundamentales sobre el protegido:

| # | Interrogante | Categoría | Datos Requeridos |
|---|-------------|-----------|-----------------|
| 1 | **¿QUIÉN?** | Perfil | Sangre/Salud, enemigos, conflictos, personalidad, rasgos físicos |
| 2 | **¿POR QUÉ?** | Motivo | Razón del cargo, nivel de exposición pública, simbolismo político |
| 3 | **¿CUÁNDO?** | Tiempo | Agenda, horarios, rutinas predecibles vs. impredecibles |
| 4 | **¿DÓNDE?** | Terreno | Mapas, rutas, puntos críticos, hospitales cercanos |
| 5 | **¿CÓMO?** | Método | Nivel de riesgo asignado y estructura de protección necesaria |

> [!TIP]
> **Estas 5 interrogantes deben actualizarse permanentemente.** La situación del protegido es dinámica y cambia con el contexto político, social y personal.

---

## 1.7. Los 5 Principios del Escudo Protector

![Los 5 Principios del Escudo Protector](./recursos/imagenes/mod1_principios.svg)


La doctrina operativa se sustenta en cinco principios fundamentales que rigen toda operación de custodia:

| # | Principio | Descripción |
|---|-----------|-------------|
| 1 | 🔔 **Alerta** | Monitoreo constante para evitar la sorpresa y detonar reacciones doctrinales |
| 2 | 📏 **Proximidad** | Distancia milimétrica calculada para una reacción de cobertura inmediata |
| 3 | 🔄 **Cobertura 360°** | El custodiado es el eje central; el anillo no deja ningún ángulo ciego |
| 4 | 🤫 **Secreto** | La mejor protección es la invisibilidad operativa; negación de información sobre itinerarios |
| 5 | 🚨 **Evacuación** | La prioridad absoluta. Repeler es secundario; extraer al VIP hacia la zona segura es el objetivo |

> [!CAUTION]
> **La evacuación siempre tiene prioridad sobre la confrontación.** En ningún caso el custodio debe priorizar repeler un ataque si puede evacuar al protegido.

---

## 1.8. Teoría Esférica y Círculos Concéntricos

El modelo operativo fundamental de la custodia se basa en la **Teoría de los Círculos Concéntricos**, que establece tres anillos de protección alrededor del VIP:

![Teoría de Círculos Concéntricos — Tres Anillos de Protección](./recursos/imagenes/mod1_circulos.svg)

### 1. La Cápsula (Núcleo / Anillo Interior)

| Aspecto | Detalle |
|---------|---------|
| **Función** | Protección inmediata, evacuación física y cobertura corporal (360°) |
| **Actores** | Escoltas personales y Jefe de Cápsula |
| **Proximidad** | Contacto directo con el VIP |
| **Prioridad** | Evacuación inmediata ante cualquier incidente |

### 2. Anillo Medio

| Aspecto | Detalle |
|---------|---------|
| **Función** | Seguridad preventiva, soporte táctico, disuasión visual |
| **Actores** | Vehículos de apoyo, vigilancia de perímetro cercano |
| **Proximidad** | Distancia visual directa al VIP |
| **Prioridad** | Detección temprana y contención |

### 3. Anillo Exterior

| Aspecto | Detalle |
|---------|---------|
| **Función** | Inteligencia, detección temprana, control de accesos |
| **Actores** | Avanzada, inteligencia, uniformados |
| **Proximidad** | Perímetro extendido |
| **Prioridad** | Anticipación y filtrado de amenazas |

> **La protección cubre todos los planos: aéreo, subsuelo y superficie.**

---

## 1.9. Psicología de la Protección: Códigos de Alerta

El custodio opera bajo un sistema de alerta por colores que determina su nivel de atención y preparación en cada momento:

![Sistema de Códigos de Alerta — Cooper](./recursos/imagenes/mod1_alerta.svg)

### Los 4 Códigos de Alerta

| Código | Estado | Descripción | Acción del Custodio |
|--------|--------|-------------|---------------------|
| ⬜ **BLANCO** | Inaceptable | Distraído, desconectado del entorno | ❌ **Estado de la víctima.** Nunca debe alcanzarse |
| 🟨 **AMARILLO** | Estándar | Alerta relajada. Sin amenaza específica, pero consciente de los 360° | ✅ "Escaneo constante". **Estado habitual del custodio** |
| 🟧 **NARANJA** | Foco | Alerta específica. Algo no encaja. Se identifica un posible riesgo | ⚠️ Se prepara el plan de acción ("Si hace X, hago Y") |
| 🟥 **ROJO** | Acción | La amenaza se materializa | 🚨 Ejecución inmediata de la reacción o evacuación |

> *"El custodio vive en código amarillo. La sorpresa es el enemigo."*

---

## 1.10. Escalabilidad: Niveles y Estructuras de Protección

![Escalabilidad: Niveles y Estructuras de Protección](./recursos/imagenes/mod1_escalabilidad.svg)


La estructura de protección no es rígida; **se adapta a la evaluación de riesgo/amenaza actual:**

### NIVEL ALTO (Riesgo Máximo / Situaciones Especiales)
- **Recursos:** Cápsula completa + Móvil Piloto + Móvil de Apoyo + Avanzada + Grupo Táctico
- **Contexto:** Amenaza de atentado inminente o zona hostil

### NIVEL MEDIO (Preventivo)
- **Recursos:** Escolta personal reducida + Vehículo principal
- **Contexto:** Movimientos rutinarios con bajo nivel de amenaza específica

### NIVEL BAJO (Administrativo)
- **Recursos:** Chofer-Escolta o vigilancia a distancia
- **Contexto:** Perfil bajo, actividades privadas

---

## 1.11. Organización Operativa de la Unidad

![Organización Operativa de la Unidad de Custodia](./recursos/imagenes/mod1_organizacion.svg)


La estructura operativa de una unidad de custodia se organiza con roles definidos:

| Rol | Función |
|-----|---------|
| **Jefe de División / Cápsula** | El cerebro. Enlace directo con el VIP. Toma las decisiones de evacuación |
| **Puntero / Avanzada** | Los ojos del futuro. Llega antes, asegura el lugar, planifica rutas de escape |
| **Conductor de Seguridad** | Responsable de la movilidad y la evacuación vehicular |
| **Flancos** | Cobertura de 360 grados. Responsabilidad de sector según las agujas del reloj |
| **Cierre / Retaguardia** | Protección trasera y control de seguimiento |
| **Grupo de Apoyo Táctico** | Cobertura de fuego pesado y extracción en crisis (si aplica) |

---

## 1.12. Identidad Operativa: Custodia Institucional vs. Seguridad Privada

![Custodia Policial vs. Seguridad Privada](./recursos/imagenes/mod1_diferencias.svg)


Es fundamental comprender la diferencia entre la custodia policial/institucional y la seguridad privada:

| Aspecto | Seguridad Privada | Custodia Policial/Institucional |
|---------|------------------|-------------------------------|
| **Objetivo** | Servicio comercial a un cliente | **Misión Institucional** de Estado |
| **Objeto de Protección** | Defensa de un individuo/patrimonio | **Defensa de una investidura pública** |
| **Metodología** | Respuesta reactiva y comercial | **Actuación doctrinal, estandarizada y preventiva** |
| **Relación VIP** | Subordinación servil (cliente-empleado) | **Autoridad táctica** respetuosa (equipo-custodiado) |

---

## 1.13. Bases Legales: El Marco de Actuación

![Bases Legales de la Actuación Policial](./recursos/imagenes/mod1_legales.svg)


El custodio profesional opera **DENTRO de la ley**. Estos son los cuatro pilares legales:

### 1. Legitimidad
La actuación se basa en la **Constitución Nacional** y las leyes de Seguridad Interior/Policial.

### 2. Uso de la Fuerza
Regido por los principios de:
- **Legalidad** — Toda acción debe tener fundamento legal
- **Necesidad** — Solo cuando no existe alternativa
- **Proporcionalidad** — La respuesta debe ser acorde a la amenaza

### 3. Portación de Armas
La autorización para portar armas conlleva la responsabilidad de su **uso racional y solo en defensa de la vida** (propia o del tercero custodiado).

### 4. Diferenciación
> **El custodio profesional opera DENTRO de la ley; el guardaespaldas informal opera al margen de ella.**

---

## 1.14. Síntesis del Módulo: El Ciclo de Protección

![El Ciclo de Protección Continua](./recursos/imagenes/mod1_ciclo.svg)


El proceso operativo completo del Módulo 1 puede sintetizarse en cuatro fases:

| Fase | Contenido |
|------|-----------|
| **1. ENTRADA** | Análisis de Inteligencia (Amenaza) + Perfil del VIP (Vulnerabilidad) |
| **2. PROCESO** | Determinación del Nivel de Riesgo → Selección del Equipo y Medios |
| **3. EJECUCIÓN** | Despliegue de Anillos Concéntricos + Estado de Alerta Amarillo |
| **4. OBJETIVO** | Seguridad Integral y Continuidad de la Función del Dignatario |

---

## 1.15. Conclusión: La Disciplina Moral

> **La custodia no es solo técnica; es carácter. El arma más importante no está en la funda, está en la mente.**

> **El éxito del custodio es el silencio: cuando nada ocurre porque todo fue previsto.**

Asumir la identidad del Custodio de Élite implica tres valores fundamentales:
1. **Profesionalismo** — Excelencia en cada acción
2. **Discreción** — El silencio como herramienta operativa
3. **Lealtad a la Investidura** — No al individuo, sino a la función que representa

---

## 📝 Cuestionario de Autoevaluación — Módulo 1

Responda las siguientes preguntas para verificar la comprensión de los contenidos:

### Preguntas de Opción Múltiple

**1. ¿Cuál es la finalidad suprema de la custodia de dignatarios?**
- a) Proteger la integridad física del funcionario
- b) Garantizar la seguridad integral de figuras estratégicas del Estado ✅
- c) Escoltar al dignatario en sus desplazamientos
- d) Custodiar la residencia del funcionario

**2. En la Tríada Conceptual, ¿qué representa la "Protección"?**
- a) El fin último de la operación
- b) La función del custodio en el terreno
- c) El conjunto de acciones y medios desplegados para impedir ataques ✅
- d) La sensación de confianza del protegido

**3. En la Ecuación del Riesgo, ¿cuál es la variable que el custodio puede controlar directamente?**
- a) La amenaza
- b) El riesgo
- c) La vulnerabilidad ✅
- d) Ninguna de las anteriores

**4. ¿Cuál es el estado de alerta estándar en el que debe operar permanentemente un custodio?**
- a) Código Blanco
- b) Código Amarillo ✅
- c) Código Naranja
- d) Código Rojo

**5. ¿Cuál es el primer anillo de protección en la Teoría de Círculos Concéntricos?**
- a) El Anillo Exterior
- b) El Anillo Medio
- c) La Cápsula (Núcleo) ✅
- d) El Grupo de Apoyo Táctico

**6. Ante un ataque, ¿cuál es la prioridad absoluta del custodio?**
- a) Repeler al agresor
- b) Solicitar refuerzos
- c) Evacuar al protegido hacia zona segura ✅
- d) Identificar al atacante

**7. ¿Cuál es la principal diferencia entre custodia institucional y seguridad privada?**
- a) El armamento utilizado
- b) El número de efectivos
- c) El objeto de protección: investidura pública vs. individuo/patrimonio ✅
- d) El uniforme

**8. Los principios que rigen el uso de la fuerza son:**
- a) Velocidad, Sorpresa, Violencia de acción
- b) Legalidad, Necesidad, Proporcionalidad ✅
- c) Ataque, Defensa, Repliegue
- d) Discreción, Firmeza, Contundencia

### Preguntas de Desarrollo

**9.** Explique con sus palabras la diferencia entre Amenaza, Vulnerabilidad y Riesgo. Proporcione un ejemplo concreto aplicado a la custodia de un gobernador.

**10.** Describa los 5 Principios del Escudo Protector y explique por qué la Evacuación tiene prioridad sobre la confrontación.

**11.** ¿Por qué se dice que "el éxito del custodio es el silencio"? Relacione esta frase con la filosofía de "Prevención sobre Reacción".

**12.** Analice la importancia de la "Vida Metódica" y el "Aislamiento Operativo" en el perfil psicológico del custodio.

---

## 📖 Glosario del Módulo 1

| Término | Definición |
|---------|------------|
| **Amenaza** | Factor externo: intención + capacidad de causar daño al protegido |
| **Avanzada** | Personal que llega antes al destino para asegurar y reconocer el lugar |
| **Cápsula** | Anillo interior de protección inmediata, formado por los escoltas personales |
| **Código de Alerta** | Sistema de colores (Blanco/Amarillo/Naranja/Rojo) que indica el nivel de atención operativa |
| **Custodia** | Actividad operativa de vigilancia y defensa inmediata del protegido |
| **Dignatario** | Persona que ejerce una función pública estratégica del Estado (PEP) |
| **Ecuación del Riesgo** | Riesgo = Amenaza × Vulnerabilidad |
| **Escolta** | Personal de custodia que acompaña físicamente al protegido |
| **Investidura** | La función institucional/estatal que representa el protegido |
| **PEP** | Persona Expuesta Políticamente |
| **Protección** | Conjunto de acciones, normas y medios para impedir ataques |
| **RECCE** | Reconocimiento previo del terreno (del inglés *Reconnaissance*) |
| **Riesgo** | Probabilidad de que la amenaza explote una vulnerabilidad |
| **Seguridad** | Estado ideal de confianza donde el protegido puede ejercer su función |
| **Tríada Conceptual** | Distinción doctrinaria entre Seguridad, Protección y Custodia |
| **VIP** | Persona de alto valor que requiere protección especial |
| **Vulnerabilidad** | Debilidades propias del sistema de seguridad o fallas en el procedimiento |

---

## ✅ Checklist Operativo — Módulo 1

Antes de asumir un servicio de custodia, verificar:

- [ ] Conocer las 5 interrogantes del VIP (¿Quién? ¿Por qué? ¿Cuándo? ¿Dónde? ¿Cómo?)
- [ ] Evaluar el nivel de riesgo actual (Alto/Medio/Bajo)
- [ ] Definir la estructura de protección adecuada al nivel de riesgo
- [ ] Asignar roles operativos (Jefe de Cápsula, Puntero, Flancos, Cierre, Conductor)
- [ ] Verificar comunicaciones del equipo
- [ ] Confirmar rutas principales y alternativas
- [ ] Identificar hospitales y zonas seguras más cercanas
- [ ] Establecer estado de alerta Amarillo como estándar
- [ ] Confirmar plan de evacuación primario y secundario
- [ ] Briefing completo del equipo antes del servicio

---

> **Fuentes doctrinales:**  
> - Manual de Seguridad Estratégica — Policía de Tierra del Fuego (2025)  
> - Custodia de Élite: Doctrina y Fundamentos — División Custodia Gubernamental  
> - Elite Protection Doctrine — Manual Visual Autocontenido  
> - Protocolo de Protección y Seguridad para Dignatarios  

---

*Módulo 1 de 8 — Manual de Protección y Seguridad para Dignatarios*  
*Próximo módulo: **Módulo 2 — Técnicas y Tácticas de Ejecución***
`,Pi=`# MÓDULO 2: TÉCNICAS Y TÁCTICAS DE EJECUCIÓN

---

> **Manual de Protección y Seguridad para Dignatarios**  
> **Policía de la Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur**  
> **División Custodia Gubernamental**  
> Edición 2026

---

## 🎯 Objetivos de Aprendizaje

Al finalizar este módulo, el alumno será capaz de:

1. Conocer la **arquitectura de la Unidad de Protección** y sus cuatro componentes.
2. Identificar los **roles de liderazgo y mando** (Jefe de División, Jefe de Brigada, Jefe de Avanzada).
3. Aplicar los **Principios Geométricos de la Custodia** (Cobertura 360°, Proximidad, Alerta, Evacuación).
4. Ejecutar **formaciones básicas y complejas** (Escolta, Cuña, Diamante, Cajón, Círculo Defensivo).
5. Operar la **dinámica vehicular** del convoy (Móvil A, Piloto, Apoyo, Scout).
6. Ejecutar el **Protocolo de Transición** (Debus) en tres pasos.
7. Reaccionar ante un ataque siguiendo la **línea de tiempo de 4 fases**.
8. Aplicar medidas de **contraemboscada y evasión**.

---

## 2.1. La Anatomía de la Unidad de Protección

![Anatomía de la Unidad de Protección](./recursos/imagenes/mod2_anatomia.svg)


La Unidad de Protección actúa bajo el principio de **Acción y Reacción**: es un escudo reactivo ante estímulos externos.

### Objetivos de la Unidad

| Objetivo | Descripción |
|----------|-------------|
| **Misión** | Integridad física y moral del dignatario |
| **Concepto** | La unidad reemplaza la autodefensa del VIP |
| **Meta Principal** | Custodia 24 horas y libertad de movimiento |
| **Meta Secundaria** | Protección contra hostigamiento |

### Arquitectura de la Unidad de Protección

La Unidad se compone de cuatro pilares:

| Componente | Función |
|------------|---------|
| 🛡️ **Grupo de Protección** | Cápsula de seguridad inmediata (Escudo físico) |
| 🎯 **Oficina de Operaciones** | Inteligencia, logística y análisis previo |
| 📡 **Base de Comunicaciones** | Comando, control y monitoreo en tiempo real |
| ⚔️ **Grupo de Apoyo Táctico (G.A.T.)** | Fuego de cobertura exterior, fuerza de neutralización y rescate |

---

## 2.2. El Núcleo Estratégico: Liderazgo y Mando

![Liderazgo y Cadena de Mando Táctica](./recursos/imagenes/mod2_liderazgo.svg)


La cadena de mando se estructura en tres niveles:

### Jefe de la División
- **Función:** Planifica, administra y enlaza directamente con el entorno político/privado del VIP.
- **Responsabilidad:** Total de la conducta y equipos.

### Jefe de Brigada
- **Función:** Permanece junto al VIP. Responsable de la seguridad inmediata.
- **Responsabilidad:** Última línea de protección personal y escudo humano.

### Jefe de Avanzada
- **Función:** Asesora sobre el terreno. Determina perímetros, evalúa amenazas in situ antes del arribo.
- **Responsabilidad:** Establece rutas de escape y zona segura.

---

## 2.3. El Escudo Operativo: Ejecución y Movilidad

![Roles de Ejecución y Movilidad](./recursos/imagenes/mod2_movilidad.svg)


Además de los tres jefes, la unidad cuenta con roles de ejecución:

| Rol | Función |
|-----|---------|
| **Conductores** (Móvil A, Piloto, Respaldo) | Garantizan movilidad ininterrumpida. Especialistas en rutas, hospitales y maniobras evasivas. **Nunca abandonan el vehículo** |
| **Custodio Satélite** | Refuerza la retaguardia (zona más vulnerable). Altamente flexible para cubrir huecos en emergencias |
| **Custodio Previamente Situado** | Elemento estático en puntos críticos o cuellos de botella geográficos |
| **Encargado de Brigada** | Supervisa la táctica periférica desde el cierre de la formación |

---

## 2.4. Matriz de Niveles de Operación

![Matriz de Niveles de Operación Táctica](./recursos/imagenes/mod2_niveles.svg)


La estructura se escala según el nivel de amenaza detectado:

| Nivel | Color | Contexto | Recursos Desplegados |
|-------|-------|----------|---------------------|
| **Level 1: Máxima Seguridad** | 🔴 Pico/Rojo | Nivel más elevado | Escalada total: 2 motocicletas de control, G.A.T., francotiradores y recursos de la Dirección |
| **Level 2: Emergencia Inminente** | 🟠 Medio/Naranja | Atentado frustrado o clima hostil | Móvil Puntero, Brigada completa y planes alternativos de evacuación |
| **Level 3: Alerta Base** | 🟡 Base/Amarillo | Amenaza potencial | Móvil A, Móvil Piloto, Móvil Adelantado. Custodios previamente situados |

---

## 2.5. Principios Geométricos de la Custodia

![Principios Geométricos de la Custodia](./recursos/imagenes/mod2_geometria.svg)


La ejecución táctica se rige por cuatro principios geométricos fundamentales:

| Principio | Descripción |
|-----------|-------------|
| 🔄 **Cobertura 360°** | El custodiado es el eje. Todo ángulo visual y físico debe estar dominado |
| 📏 **Proximidad** | Distancia óptima para reaccionar y cubrir en fracciones de segundo |
| 🔔 **Alerta Constante** | Anticipación activa para no ser sorprendido |
| 🚨 **Evacuación Prioritaria** | Desalojar al VIP es la meta; solo el mínimo personal necesario repele la agresión |

---

## 2.6. Geometría Defensiva: Formaciones Básicas

![Formaciones Básicas — Geometría Defensiva](./recursos/imagenes/mod2_formaciones.svg)

### Formación con 1 Custodio (Escolta)
- **Posición:** Al alcance de la mano del VIP
- **Cobertura:** 360° (asume el 100% del perímetro)
- **Uso:** Nivel de riesgo bajo, actividades privadas

### Formación con 2 Custodios
- **Posición:** Guiados por el Custodio de Avanzada
- **Cobertura:** 180° cada uno (hemisferios)
- **Uso:** Nivel de riesgo medio, movimientos rutinarios

### Formación con 3 Custodios (Cuña/Triángulo)
- **Posición:** Jefe de Brigada, Avanzada y Encargado
- **Cobertura:** 120° cada uno (triangulación del riesgo)
- **Uso:** Nivel de riesgo medio-alto

---

## 2.7. Formaciones Complejas: El Sistema Diamante

![Formación en Diamante — Desplazamiento Pedestre](./recursos/imagenes/mod2_diamante.svg)


La formación Diamante es la más efectiva para desplazamientos pedestres con nivel de riesgo alto:

| Posición | Rol | Función |
|----------|-----|---------|
| **Vanguardia** | Custodio de Avanzada / Jefe de Avanzada | Despejan la ruta |
| **Flancos** (Izquierdo/Derecho) | Custodios de Flanco | Visión periférica y bloqueo lateral |
| **Núcleo** | Jefe de Brigada | Pegado al VIP, exclusivo para su seguridad física |
| **Retaguardia** | Encargado de Brigada + Custodio Satélite | Refuerza el área más atacada, se desprende ante emergencias |

> [!TIP]
> **Cobertura Óptima:** Con 5 a 7 custodios, el arco de responsabilidad se reduce a 90°, maximizando el enfoque visual.

---

## 2.8. Entornos de Alta Densidad: Cajón y Círculo

![Entornos de Alta Densidad: Cajón y Círculo Defensivo](./recursos/imagenes/mod2_alta_densidad.svg)


### Formación Box / Cajón (5 Custodios)
- **Uso:** Escenarios, salones, discursos, multitudes
- **Mecánica:** Cuadrado rígido que aísla físicamente al VIP del contacto masivo
- **Ventaja:** Máximo control en espacios cerrados con público

### Círculo Defensivo (Reacción Activa)
- **Uso:** Presión severa de multitudes o amenaza confirmada
- **Mecánica:** Los custodios entrelazan la mano no dominante en el cinturón del compañero. Mano dominante lista en el arma
- **Ejecución:** El Jefe agacha al VIP guiándolo por el cinturón

> [!CAUTION]
> **El Círculo Defensivo es la formación de máxima emergencia.** Solo se activa ante amenaza confirmada o presión extrema de multitudes.

---

## 2.9. Dinámica Vehicular: Arquitectura del Convoy

![Arquitectura del Convoy — Dinámica Vehicular](./recursos/imagenes/mod2_convoy.svg)

| Vehículo | Posición | Función |
|----------|----------|---------|
| **Móvil Adelantado (Scout)** | Primero | Reconocimiento previo de rutas, embudos y anomalías |
| **Móvil Piloto (Vanguardia)** | Segundo | Rompe tráfico, absorbe el primer impacto frontal. Primer anillo |
| **Móvil A (Comando)** | Tercero | Transporta al VIP y al Jefe de Brigada. **Nunca se detiene ante confrontaciones** |
| **Móvil Apoyo (Retaguardia)** | Cuarto | Sella la espalda del convoy. Provee cobertura a la puerta trasera del VIP |

### Zonas de Responsabilidad Vehicular (Sistema de Reloj)

| Tripulante | Sector Visual | Arco Horario |
|-----------|--------------|--------------|
| **Conductor** (Móvil A/Piloto) | Escaneo frontal continuo | Reloj 09 a 01 |
| **Jefe de Brigada** (junto al VIP) | Control del flanco principal | Reloj 11 a 03 |
| **Custodio Piloto Izquierdo** | Control lateral trasero | Reloj 06 a 11 |
| **Custodio Piloto Derecho** | Control lateral trasero opuesto | Reloj 01 a 06 |

> **La sincronización elimina puntos ciegos. El VIP (ubicado atrás) queda encapsulado visual y físicamente.**

---

## 2.10. El Punto Crítico: Protocolo de Transición (Debus)

![Protocolo de Transición Vehicular (Debus)](./recursos/imagenes/mod2_transicion.svg)


El momento de descenso del vehículo es uno de los más vulnerables. Se ejecuta en tres pasos:

### Paso 1: Sellado Perimetral
- El vehículo se detiene
- El Encargado de Brigada y los custodios descienden **primero**
- Aseguran los 360° formando un "Box/Cajón" en las esquinas del vehículo

### Paso 2: La Señal
- El perímetro está estéril
- El Jefe de Equipo da la orden **golpeando el techo del vehículo**

### Paso 3: Extracción
- El Jefe de Custodia desciende, abre la puerta del VIP
- El VIP desciende e inmediatamente el equipo muta a **formación "Diamante"** para avanzar

> [!WARNING]
> **El VIP NUNCA desciende antes de la señal táctil.** La violación de este protocolo expone al protegido al máximo riesgo.

---

## 2.11. Anatomía de la Emboscada y Evasión

![Anatomía de la Emboscada y Ruptura de Rutinas](./recursos/imagenes/mod2_emboscada.svg)


> **La emboscada requiere que el agresor sepa DÓNDE y CUÁNDO estará el VIP.**

### Medidas Preventivas Anti-Emboscada

| Medida | Descripción |
|--------|-------------|
| 🔀 **Romper la rutina** | Absolutamente. Variar rutas, horarios y patrones |
| ⏰ **Alterar horarios** | Sistemáticamente cambiar salidas y llegadas |
| 🗺️ **Mapear embudos** | Identificar y evitar "puntos de congestión" o embudos naturales en la ruta |
| 🤫 **Secreto del itinerario** | Mantener en estricto secreto la agenda de movimientos |

---

## 2.12. Reacción ante un Ataque: Línea de Tiempo

![Línea de Tiempo de Reacción Táctica (4 Fases)](./recursos/imagenes/mod2_reaccion.svg)


Ante la materialización de un ataque, el equipo ejecuta cuatro fases en secuencia:

| Fase | Nombre | Acción |
|------|--------|--------|
| **1** | 📢 **Alerta Vocal** | El primer custodio en detectar grita el arma y la posición horaria (Ej: "¡Fuego a las 3!") |
| **2** | 🛡️ **Escudo Físico** | El Jefe de Brigada salta sobre el VIP, usándose como barrera humana y reduciendo su silueta |
| **3** | 🚨 **Evacuación Rápida** | El núcleo extrae al VIP en dirección opuesta al origen del ataque hacia un lugar seguro |
| **4** | ⚔️ **Neutralización** | Solo el perímetro exterior (G.A.T. o apoyo táctico) responde al fuego. **El núcleo nunca se queda a combatir** |

> [!IMPORTANT]
> **Regla de oro: El núcleo NUNCA se queda a combatir.** La prioridad absoluta es extraer al VIP. Solo el perímetro exterior responde al fuego.

---

## 2.13. El Mindset de Ejecución

![El Mindset de Ejecución: Triángulo Estratégico](./recursos/imagenes/mod2_mindset.svg)


La filosofía operativa se resume en un triángulo estratégico:

| Vértice | Filosofía | Principio |
|---------|-----------|-----------|
| **Prevención** | Inteligencia, contra-vigilancia, ruptura de rutinas y formaciones de avanzada | *"La mejor defensa es evitar el contacto"* |
| **Protección** | La geometría perfecta (Diamante, Cajón) y cápsulas de movilidad vehicular | *"Absorber el impacto si la prevención falla"* |
| **Evacuación** | Velocidad sobre potencia de fuego. Escudo humano y escape | *"Sobrevivir al contacto para luchar otro día"* |

> **La seguridad del dignatario no se basa en la confrontación directa, sino en la geometría táctica y la evacuación impecable.**

---

## 📝 Cuestionario de Autoevaluación — Módulo 2

### Preguntas de Opción Múltiple

**1. ¿Cuáles son los cuatro componentes de la Unidad de Protección?**
- a) Escolta, Chofer, Comunicaciones, Armamento
- b) Grupo de Protección, Oficina de Operaciones, Base de Comunicaciones, G.A.T. ✅
- c) Avanzada, Retaguardia, Flancos, Núcleo
- d) Inteligencia, Logística, Táctica, Administración

**2. En la formación Diamante, ¿quién ocupa la posición de "Núcleo"?**
- a) El Custodio de Avanzada
- b) El Encargado de Brigada
- c) El Jefe de Brigada ✅
- d) El Custodio Satélite

**3. En el sistema de responsabilidad vehicular por reloj, ¿qué sector cubre el Conductor?**
- a) Reloj 01 a 06
- b) Reloj 09 a 01 ✅
- c) Reloj 06 a 11
- d) Reloj 03 a 09

**4. ¿Cuál es la señal para que el VIP descienda del vehículo en el Protocolo de Transición?**
- a) Señal por radio
- b) Señal visual con la mano
- c) Golpe en el techo del vehículo ✅
- d) Orden verbal del conductor

**5. Ante un ataque, ¿cuál es la Fase 2 de la línea de tiempo de reacción?**
- a) Alerta Vocal
- b) Evacuación Rápida
- c) Escudo Físico (el Jefe de Brigada cubre al VIP) ✅
- d) Neutralización

**6. ¿Qué formación se utiliza ante presión severa de multitudes o amenaza confirmada?**
- a) Formación Diamante
- b) Formación Cuña
- c) Formación Box/Cajón
- d) Círculo Defensivo ✅

**7. En el convoy, ¿cuál es la regla fundamental del Móvil A (Comando)?**
- a) Siempre va al frente de la caravana
- b) Nunca se detiene ante confrontaciones ✅
- c) Transporta al Grupo de Apoyo Táctico
- d) Realiza el reconocimiento previo

**8. ¿Cuál es la medida preventiva más efectiva contra una emboscada?**
- a) Incrementar el armamento del equipo
- b) Romper absolutamente la rutina de movimientos ✅
- c) Aumentar la velocidad del convoy
- d) Reforzar el blindaje del vehículo

### Preguntas de Desarrollo

**9.** Describa paso a paso el Protocolo de Transición (Debus) y explique por qué el VIP nunca desciende antes de la señal táctil.

**10.** Compare la formación Diamante con la formación Box/Cajón: ¿en qué contextos se usa cada una y por qué?

**11.** Explique el concepto de "Zonas de Responsabilidad Vehicular" usando el sistema de reloj. ¿Por qué es fundamental la sincronización?

**12.** Analice la frase: "La seguridad del dignatario no se basa en la confrontación directa, sino en la geometría táctica y la evacuación impecable."

---

## 📖 Glosario del Módulo 2

| Término | Definición |
|---------|------------|
| **Box/Cajón** | Formación cuadrada rígida para aislamiento del VIP en entornos de alta densidad |
| **Círculo Defensivo** | Formación de máxima emergencia donde los custodios se entrelazan rodeando al VIP |
| **Convoy** | Columna vehicular organizada para el desplazamiento del VIP |
| **Custodio Satélite** | Elemento flexible que refuerza la retaguardia y cubre huecos |
| **Debus** | Protocolo de descenso del vehículo (Transición vehículo-pedestre) |
| **Diamante** | Formación principal para desplazamiento pedestre con cobertura 360° |
| **Embudo** | Punto de congestión geográfico que limita las opciones de evasión |
| **G.A.T.** | Grupo de Apoyo Táctico: fuerza de neutralización y rescate |
| **Mindset de Ejecución** | Triángulo estratégico: Prevención → Protección → Evacuación |
| **Móvil A** | Vehículo principal que transporta al VIP (vehículo Comando) |
| **Móvil Piloto** | Vehículo de vanguardia que rompe tráfico y absorbe impacto frontal |
| **Perímetro Estéril** | Zona despejada y verificada libre de amenazas |
| **Scout** | Vehículo adelantado para reconocimiento de rutas |
| **Sistema de Reloj** | División del perímetro vehicular en sectores horarios (01-12) para asignación de responsabilidades visuales |

---

## ✅ Checklist Operativo — Módulo 2

Antes de ejecutar un desplazamiento:

- [ ] Definir nivel de operación (Level 1, 2 o 3)
- [ ] Asignar formación según contexto (Diamante, Cajón, Escolta, etc.)
- [ ] Confirmar roles en la cadena de mando (Jefe División, Brigada, Avanzada)
- [ ] Verificar composición del convoy (Scout, Piloto, Móvil A, Apoyo)
- [ ] Asignar zonas de responsabilidad vehicular por sistema de reloj
- [ ] Repasar Protocolo de Transición (Debus) con todo el equipo
- [ ] Definir punto de reunión de emergencia (PRE)
- [ ] Confirmar rutas de evasión ante emboscada
- [ ] Verificar comunicaciones intra-convoy
- [ ] Briefing de reacción ante ataque (4 fases)
- [ ] Confirmar ubicación de hospitales y zonas seguras en ruta

---

> **Fuentes doctrinales:**  
> - Tactical Protection Blueprint — División Custodia Gubernamental  
> - Técnicas y Tácticas de Protección Ejecutiva — Manual de Custodia de Dignatarios y Ejecutivos  
> - Manual de Seguridad Estratégica — Policía de Tierra del Fuego (2025)

---

*Módulo 2 de 8 — Manual de Protección y Seguridad para Dignatarios*  
*Próximo módulo: **Módulo 3 — Planeamiento Operativo y Estratégico***
`,Fi=`# MÓDULO 3: PLANEAMIENTO OPERATIVO Y ESTRATÉGICO

---

> **Manual de Protección y Seguridad para Dignatarios**  
> **Policía de la Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur**  
> **División Custodia Gubernamental**  
> Edición 2026

---

## 🎯 Objetivos de Aprendizaje

Al finalizar este módulo, el alumno será capaz de:

1. Comprender el **imperativo de la planificación** como antídoto a la improvisación.
2. Identificar y diferenciar los **Cuatro Niveles de la Planificación** (Estratégico, Sinergético, Táctico y Operativo).
3. Aplicar el **Análisis FODA Situacional** adaptado a la protección gubernamental.
4. Diseñar matrices de acción estratégica (**Estrategias FO, FA, DO y DA**).
5. Calcular y priorizar el riesgo operativo mediante la **Ecuación del Riesgo** y el **Mapa de Riesgos**.
6. Implementar el método de **Análisis de la Situación** (Misión, Oponente, Terreno y Tiempo).
7. Ejecutar la técnica de **Planificación Inversa** para la gestión del tiempo operativo.
8. Estructurar y emitir una **Orden Preparatoria** y una **Orden de Operaciones (ORDOP)**.

---

## 3.1. El Imperativo de la Planificación

![El Imperativo de la Planificación](./recursos/imagenes/mod3_imperativo.svg)


La planificación no es un acto burocrático; es un ejercicio mental sistemático que transforma la incertidumbre en riesgo calculado.

> *"La planificación es un ejercicio que prepara a las personas para pensar de manera ordenada y las capacita para tomar decisiones de manera estructurada."*

\`\`\`
   [ IMPROVISACIÓN ]  ❌ ---------> ❌ Caos / Vulnerabilidad
          vs
   [ PLANIFICACIÓN ]  ✅ ---------> 🛡️ Sinergia / Seguridad Garantizada
\`\`\`

### Objetivos Fundamentales
- **Propósito:** Elegir la alternativa más adecuada entre múltiples opciones para alcanzar el objetivo de protección.
- **Efecto:** Facilitar la coordinación de esfuerzos múltiples donde cada integrante conoce su responsabilidad y el momento exacto de ejecución.
- **Resultado:** Reducir a cero la improvisación y maximizar la seguridad física y moral del protegido.

---

## 3.2. Los Cuatro Niveles de la Planificación

![Los Cuatro Niveles de la Planificación](./recursos/imagenes/mod3_niveles.svg)


La doctrina de custodia estructura la planificación en una pirámide de cuatro niveles jerárquicos:

\`\`\`
               /  ESTRATÉGICO  \\        --> El "Qué" (Objetivos institucionales)
              /-----------------\\
             /    SINERGÉTICO    \\      --> El "Enlace" (Políticas y directrices)
            /---------------------\\
           /        TÁCTICO        \\    --> Las "Normas" (Procedimientos estandarizados)
          /-------------------------\\
         /         OPERATIVO         \\  --> La "Acción" (Ejecución real en el terreno)
        /-----------------------------\\
\`\`\`

| Nivel | Enfoque | Descripción Doctrinal |
|-------|---------|-----------------------|
| 🏛️ **Estratégico** | Visión / Objetivos | Determina los objetivos fundamentales de la institución y el rumbo general a tomar. Define el "Qué". |
| 🤝 **Sinergético** | Políticas / Enlace | El enlace vital. Formula directrices que alinean lo táctico con lo estratégico, asegurando que la colaboración interáreas genere desempeño superior. |
| 📋 **Táctico** | Procedimientos | Ámbito normativo y operativo. Establece criterios y procedimientos estandarizados basados en la experiencia y doctrina. |
| ⚡ **Operativo** | Acción Directa | Las acciones diarias y específicas. La ejecución real de la misión de custodia en el terreno. |

---

## 3.3. Elementos del Plan Operativo

![Elementos del Plan Operativo](./recursos/imagenes/mod3_opord.svg)


Un Plan Operativo sólido se basa en un ciclo continuo de tres elementos:

1. 🎯 **Meta (Clarificación):** Definir la meta final y los resultados intermedios. Responde a la pregunta: *¿Qué queremos lograr exactamente?*
2. ⚡ **Acción:** Despliegue en el terreno de las capacidades tácticas y operativas asignadas.
3. 🔄 **Verificación y Control:** Herramienta esencial. No es solo supervisión, es parte integral de la planificación que permite identificar problemas emergentes y aplicar soluciones en tiempo real.

> [!NOTE]
> *Nota doctrinal:* A través de la verificación constante se identifican anomalías y se aplican correcciones tácticas pertinentes antes de que se conviertan en incidentes.

---

## 3.4. Análisis FODA: El Escáner Situacional

![Análisis FODA Situacional](./recursos/imagenes/mod3_foda.svg)

El Análisis FODA es el escáner situacional de la Unidad de Protección para evaluar el entorno en un tiempo y lugar determinados.

### 1. Análisis Interno: El Equipo de Protección (Controlable)

- **Fortalezas (Ventajas Propias):**
  - Capacitación técnica y táctica superior.
  - Resistencia física y mental.
  - Equipamiento avanzado (armamento, comunicaciones cifradas).
  - Cohesión de equipo (espíritu de cuerpo).
- **Debilidades (Desventajas Propias a corregir):**
  - Falta de entrenamiento reciente o desactualización.
  - Equipamiento o flota vehicular obsoleta.
  - Fatiga acumulada del personal.
  - Brechas o falta de información de inteligencia previa.

> [!IMPORTANT]
> **Criterio de Prioridad:** Se debe priorizar la corrección inmediata de aquellas debilidades que otorguen una ventaja directa al oponente.

### 2. Análisis Externo: El Entorno y el Oponente (No Controlable)

- **Oportunidades (Factores Favorables):**
  - Apoyo de fuerzas de seguridad locales / jurisdiccionales.
  - Condiciones meteorológicas favorables.
  - Rutas despejadas y alternativas viables.
  - Actitud cooperativa de la población local.
- **Amenazas (Riesgos del Entorno):**
  - Acciones u operaciones de grupos hostiles.
  - Tráfico denso o colapso vehicular.
  - Fallas en infraestructura pública (cortes de luz, obras).
  - Climatología adversa (hielo, nieve, niebla intensa).

---

## 3.5. La Matriz de Acción Estratégica

![La Matriz de Acción Estratégica FODA](./recursos/imagenes/mod3_accion.svg)


Cruzando las variables del FODA, la Unidad formula cuatro estrategias de actuación:

| Estrategia | Fórmula | Enfoque Táctico |
|------------|---------|-----------------|
| **Estrategia FO** | Maxi-Maxi | **Escenario Ideal:** Usar fortalezas propias para aprovechar oportunidades del entorno. |
| **Estrategia FA** | Maxi-Mini | **Disuasión y Defensa Activa:** Usar fortalezas para neutralizar o mitigar amenazas externas. |
| **Estrategia DO** | Mini-Maxi | **Mejora y Adaptación:** Superar debilidades internas aprovechando oportunidades del entorno. |
| **Estrategia DA** | Mini-Mini | **Supervivencia / Defensiva Estricta:** Reducir debilidades al mínimo para evitar la exposición a amenazas. |

> *"El FODA no es un ejercicio intelectual; su única utilidad radica en orientar la acción táctica del equipo."*

---

## 3.6. La Ecuación del Riesgo

![La Ecuación del Riesgo Operativo](./recursos/imagenes/mod3_ecuacion.svg)


La base matemática de la planificación táctica establece:

$$\\text{AMENAZA} \\times \\text{VULNERABILIDAD} = \\text{RIESGO}$$

- ⚠️ **Amenaza (El Agente Dañino):** Persona, grupo o evento exógeno que constituye una posible causa de daño (voluntaria o fortuita).
- 🛡️ **Vulnerabilidad (Debilidad Propia):** La debilidad o brecha propia frente a las amenazas. Falta de capacidad para prevenir o resistir.
- 🎯 **Riesgo:** La probabilidad o posibilidad real de que ocurra un daño a la persona o bien protegido.

> [!TIP]
> **Concepto Clave Doctrinal:** No podemos eliminar la amenaza externa, pero podemos **reducir el riesgo a valores tolerables disminuyendo nuestra vulnerabilidad a cero**.

---

## 3.7. Mapa de Riesgos: Priorización Operativa

![Mapa de Riesgos — Matriz de Priorización](./recursos/imagenes/mod3_riesgos.svg)

El Mapa de Riesgos evalúa los eventos según dos ejes: **Probabilidad de Ocurrencia** e **Impacto / Gravedad**.

\`\`\`
PROBABILIDAD ^
             |  [Medios / Contingencia]  |  [CUADRANTE 4: ZONA CRÍTICA] 🔴
             |---------------------------|--------------------------------
             |  [CUADRANTE 1: MONITOREO] |  [Medios / Contingencia]
             +-------------------------------------------------------->
                                                         IMPACTO / GRAVEDAD
\`\`\`

- **Cuadrante 1 (Baja Probabilidad / Bajo Impacto):** Monitoreo continuo.
- **Cuadrantes 2 y 3 (Medio Riesgo):** Planes de contingencia y protocolos alternativos.
- **Cuadrante 4 (Alta Probabilidad / Alto Impacto - ZONA CRÍTICA):** 🚨 Requiere acción inmediata. Asignación prioritaria de recursos humanos y técnicos. El plan principal debe centrarse en mitigar estos puntos.

---

## 3.8. Metodología de Análisis de la Situación

![Metodología de Análisis MOTT](./recursos/imagenes/mod3_recce.svg)


Antes de redactar la orden de operaciones, el Jefe de Avanzada y el Jefe de Brigada analizan cuatro factores centrales:

1. 🎯 **MISIÓN:** ¿Qué queremos lograr exactamente? Definición clara y precisa del objetivo (Ej: *"Traslado seguro del Dignatario del Punto A al Punto B entre las 14:00 y las 14:30 hs"*).
2. 👤 **OPONENTE:** ¿Quién es? ¿Dónde está? Análisis de capacidades, intenciones y limitaciones del agente hostil (Inteligencia).
3. 🗺️ **TERRENO:** Estudio minucioso del itinerario, cuellos de botella, puntos de ahogo, zonas de riesgo y rutas alternativas.
4. ⏱️ **TIEMPO:** Factor meteorológico, luz solar y duración de la misión. ¿Cómo afecta la nieve, lluvia o noche a la vulnerabilidad?

---

## 3.9. Organización del Tiempo: Planificación Inversa

![Planificación Inversa: Gestión del Tiempo](./recursos/imagenes/mod3_inversa.svg)


Para garantizar la puntualidad y evitar la prisa —que es la mayor generadora de vulnerabilidades tácticas— se utiliza la **Planificación Inversa**:

\`\`\`
[MOMENTO ACTUAL] <======================================= [MISIÓN CUMPLIDA]
 Punto de Inicio     Traslado       Espera     Preparación    Punto Final
     (T - 4h)        (T - 2h)      (T - 1h)     (T - 30m)        (T = 0)
\`\`\`

1. Se fija la hora de ejecución del evento principal ($T=0$).
2. Se descuenta el tiempo de traslado con margen de tráfico.
3. Se descuenta el tiempo de inspección previa y desminado/perímetro (Avanzada).
4. Se descuenta el tiempo de reunión informativa (Briefing) y equipamiento.
5. Se obtiene la hora exacta de inicio de preparativos.

---

## 3.10. La Emisión de Órdenes

![Emisión de Órdenes: WARNO vs ORDOP](./recursos/imagenes/mod3_briefing.svg)


El proceso de mando se formaliza mediante dos instrumentos principales:

### 1. Orden Preparatoria (WARNO - Warning Order)
- **Momento:** Se emite **antes** del análisis exhaustivo.
- **Objetivo:** Avisar al equipo para que inicie preparativos logísticos (armamento, vehículos, vestimenta) y descanso.
- **Ventaja:** Permite ganar tiempo valioso mientras el mando elabora el plan detallado.

### 2. Orden de Operaciones (ORDOP)
- **Momento:** El plan final y detallado.
- **Contenido:**
  - Asigna misiones específicas a cada escalón.
  - Establece cronogramas exactos (tiempos al minuto).
  - Define rutas principales y de emergencia.
  - Establece protocolos de comunicación y frecuencias de radio.

---

## 3.11. Administración, Logística y Coordinación

![Logística, Coordinación y Checklist](./recursos/imagenes/mod3_rutas.svg)


La ejecución del plan requiere la sincronización de tres pilares administrativos:

\`\`\`
[ LOGÍSTICA ] --------> [ COORDINACIÓN ] --------> [ LISTA DE CHEQUEO ]
Gestión de Recursos     Interna y Externa         Checklist de Verificación
\`\`\`

- 📦 **Logística:** Gestión de recursos materiales: armamento, munición, vehículos en condiciones, inhibidores de señal, kits médicos y permisos legales.
- 🤝 **Coordinación:**
  - *Interna:* Entre miembros del Grupo de Protección.
  - *Externa:* Con fuerzas policiales locales, tránsito, personal del lugar de destino y hospitales de derivación.
- 📋 **Lista de Chequeo (Checklist):** Herramienta vital indispensable para evitar el olvido de detalles críticos antes de la salida a ruta.

---

## 3.12. Conclusión: La Mentalidad del Estratega

![La Mentalidad del Estratega](./recursos/imagenes/mod3_estratega.svg)


> **El plan no es solo un documento escrito; es una estructura mental que permite al equipo de protección adaptarse instantáneamente a lo inesperado.**

1. 🔮 **Anticipación sobre Reacción:** Prever el escenario evita tener que reaccionar bajo fuego.
2. 📐 **Análisis de Riesgo:** Foco constante en la reducción de vulnerabilidades ($\\text{Amenaza} \\times \\text{Vulnerabilidad}$).
3. ⚡ **Ejecución Coordinada:** Integración perfecta entre los niveles Táctico y Operativo.

*La seguridad total no existe, pero la planificación profesional minimiza el margen de error a su mínima expresión.*

---

## 📝 Cuestionario de Autoevaluación — Módulo 3

### Preguntas de Opción Múltiple

**1. ¿Cuál es el propósito principal de la planificación en la custodia de dignatarios?**
- a) Cumplir con un requisito burocrático administrativo.
- b) Reducir la improvisación y coordinar esfuerzos para estructurar las decisiones. ✅
- c) Reemplazar la necesidad de personal táctico en el terreno.
- d) Garantizar el 100% de seguridad absoluta en todo momento.

**2. ¿En qué nivel de planificación se definen los objetivos fundamentales y el "Qué" de la institución?**
- a) Nivel Operativo
- b) Nivel Táctico
- c) Nivel Estratégico ✅
- d) Nivel Sinergético

**3. En el Análisis FODA, ¿cuál de los siguientes elementos corresponde a una variable INTERNA y CONTROLABLE?**
- a) Las condiciones meteorológicas adversas
- b) El nivel de entrenamiento y estado del equipamiento del equipo ✅
- c) El tráfico denso en la ruta principal
- d) La actitud hostil de manifestaciones en la vía pública

**4. ¿Cómo se define la Ecuación del Riesgo Doctrinal?**
- a) Riesgo = Amenaza + Vulnerabilidad
- b) Riesgo = Amenaza x Vulnerabilidad ✅
- c) Riesgo = Vulnerabilidad / Fuerza Táctica
- d) Riesgo = Oponente x Terreno

**5. ¿Qué cuadrante del Mapa de Riesgos requiere acción inmediata y asignación prioritaria de recursos?**
- a) Cuadrante 1 (Baja Probabilidad / Bajo Impacto)
- b) Cuadrante 2 (Baja Probabilidad / Alto Impacto)
- c) Cuadrante 4 (Alta Probabilidad / Alto Impacto - Zona Crítica) ✅
- d) Cuadrante 3 (Alta Probabilidad / Bajo Impacto)

**6. ¿Cuál es la principal ventaja de emitir una "Orden Preparatoria" (WARNO)?**
- a) Reemplazar por completo la Orden de Operaciones final.
- b) Ganar tiempo avisando al equipo para que inicie preparativos mientras se elabora el plan detallado. ✅
- c) Cancelar la misión si el tiempo es escaso.
- d) Informar a la prensa sobre el itinerario del dignatario.

**7. La técnica de "Planificación Inversa" consiste en:**
- a) Planificar los movimientos desde el inicio cronológico hacia adelante.
- b) Calcular los tiempos de manera regresiva partiendo de la hora de cumplimiento de la misión. ✅
- c) Cambiar el orden de los vehículos en el convoy durante la marcha.
- d) Delegar la planificación al personal de menor jerarquía.

**8. ¿Cuál es el concepto clave respecto a las amenazas externas según la doctrina?**
- a) Se pueden eliminar por completo mediante la fuerza bruta.
- b) No se pueden eliminar, pero se reduce el riesgo disminuyendo la vulnerabilidad propia. ✅
- c) Deben ignorarse si el dignatario no percibe peligro.
- d) Se neutralizan únicamente con armamento pesado.

### Preguntas de Desarrollo

**9.** Explique los Cuatro Niveles de la Planificación (Estratégico, Sinergético, Táctico y Operativo) y proporcione un ejemplo de cada uno aplicado a la seguridad gubernamental.

**10.** Describa cómo se aplica la Ecuación del Riesgo ($\\text{Amenaza} \\times \\text{Vulnerabilidad} = \\text{Riesgo}$) en una situación donde las condiciones del clima y terreno son altamente adversas.

**11.** Detalle la diferencia entre una Orden Preparatoria y una Orden de Operaciones (ORDOP), especificando cuándo y para qué se emite cada una.

**12.** Justifique por qué la "Planificación Inversa" es fundamental para prevenir fallas tácticas provocadas por la prisa.

---

## 📖 Glosario del Módulo 3

| Término | Definición |
|---------|------------|
| **Análisis FODA** | Matriz de evaluación situacional (Fortalezas, Oportunidades, Debilidades, Amenazas) aplicada a la custodia |
| **Análisis de la Situación** | Evaluación sistemática de Misión, Oponente, Terreno y Tiempo (MOTT) |
| **Checklist Operativo** | Lista de control indispensable previa al despliegue para evitar omisiones |
| **Ecuación del Riesgo** | Modelo matemático doctrinal: $\\text{Riesgo} = \\text{Amenaza} \\times \\text{Vulnerabilidad}$ |
| **Mapa de Riesgos** | Gráfico matricial de priorización según Probabilidad de Ocurrencia e Impacto |
| **Nivel Estratégico** | Escalón superior que fija objetivos generales y rumbo institucional |
| **Nivel Operativo** | Escalón de ejecución física directa en el terreno de las acciones de protección |
| **Nivel Sinergético** | Escalón intermedio de formulación de directrices y alineación interáreas |
| **Nivel Táctico** | Escalón de estandarización de normas, protocolos y procedimientos operativos |
| **ORDOP** | Orden de Operaciones: documento final y detallado que rige la misión |
| **Planificación Inversa** | Método de cálculo regresivo del tiempo desde la hora objetivo ($T=0$) hacia el presente |
| **Punto de Ahogo / Cuello de Botella** | Área del terreno que restringe la movilidad y aumenta la vulnerabilidad del convoy |
| **WARNO** | Orden Preparatoria (*Warning Order*) emitida para iniciar alistamiento previo |

---

## ✅ Checklist Operativo — Módulo 3

Antes de dar por concluida la fase de planeamiento de una misión:

- [ ] Emitir la Orden Preparatoria (WARNO) al equipo con suficiente antelación
- [ ] Completar el Análisis FODA del equipo y del entorno
- [ ] Identificar y corregir debilidades internas críticas
- [ ] Aplicar la Ecuación del Riesgo en los puntos vulnerables de la ruta
- [ ] Confeccionar el Mapa de Riesgos e identificar los eventos del Cuadrante 4 (Zona Crítica)
- [ ] Realizar el análisis MOTT (Misión, Oponente, Terreno, Tiempo)
- [ ] Aplicar la Planificación Inversa para fijar cronogramas sin prisa
- [ ] Redactar y difundir la Orden de Operaciones (ORDOP) detallada
- [ ] Coordinar con fuerzas locales, personal de tránsito y centros médicos
- [ ] Verificar logística (armamento, comunicaciones, vehículos, botiquines)
- [ ] Verificar que todo el personal haya comprendido su rol mediante briefing activo

---

> **Fuentes doctrinales:**  
> - Módulo 3: Planeamiento Operativo y Estratégico — División Custodia Gubernamental  
> - Protocolo de Protección de Dignatarios — Policía de la Provincia de Tierra del Fuego (2026)

---

*Módulo 3 de 8 — Manual de Protección y Seguridad para Dignatarios*  
*Próximo módulo: **Módulo 4 — Estudio de Emplazamiento y Avanzadas***
`,Ii=`# MÓDULO 4: ESTUDIO DE EMPLAZAMIENTO Y AVANZADAS

---

> **Manual de Protección y Seguridad para Dignatarios**  
> **Policía de la Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur**  
> **División Custodia Gubernamental**  
> Edición 2026

---

## 🎯 Objetivos de Aprendizaje

Al finalizar este módulo, el alumno será capaz de:

1. Comprender el concepto de **Estudio de Emplazamiento** y la anticipación como estrategia de neutralización.
2. Identificar la **organización operativa de la Avanzada** y los roles del Jefe, Custodio y Chofer de Avanzada.
3. Dominar los procedimientos de **Reconocimiento de Rutas** (Punto Inicial - PI, Punto de Probable Impacto - PPI, Regla de las 10 Alternativas).
4. Diseñar la **Zona de Transición y Protocolos de Llegada** en el exterior del objetivo (PPJ).
5. Mapear la **Infraestructura de Soporte y Emergencia** (anillos de 5 y 10 minutos a hospitales, lugares seguros y helipuertos).
6. Analizar el **Interior del Objetivo** (flujo de circulación, estrado, enlace con Protocolo).
7. Controlar la **Infraestructura Crítica** (cuartos de aseo, llaves maestras, puesto de comando y habitación de descanso).
8. Implementar los requerimientos del **Cuarto Seguro** y la Teoría Esférica de Seguridad.
9. Ejecutar protocolos de **Inspección Técnica y Requisa** (Regla de Adyacencia y protocolo ante hallazgo).
10. Elaborar un **Informe de Avanzada Procesable** (entregables de inteligencia de terreno).

---

## 4.1. La Anticipación como Estrategia de Neutralización

![La Anticipación como Estrategia de Neutralización](./recursos/imagenes/mod4_anticipacion.svg)


El Estudio de Emplazamiento no es una simple visita de cortesía; es el uso científico y metódico de medios humanos y técnicos para investigar, actualizar el contexto y organizar la seguridad con la debida antelación.

> *"La seguridad no es solo reacción; es la ausencia de riesgos mediante la planificación. El peligro no siempre golpea, pero quien lo prevé y se prepara, convierte la incertidumbre en dominio."*

\`\`\`
NIVEL DE RIESGO
   ^
Alto|   🔴 REACCIÓN (Alto Riesgo / Corto Plazo)
    |     \\
    |      \\___ 🛡️ PREVENCIÓN / ANTICIPACIÓN (Bajo Riesgo / Largo Plazo)
Bajo+--------------------------------------------------------->
    Corto Plazo           Medio Plazo           Largo Plazo
                                           TIEMPO (Días Previos)
\`\`\`

### Relación Tiempo vs. Riesgo
- 🔍 **Prevención:** Detectar amenazas antes de que se materialicen en el terreno.
- 🛡️ **Intervención:** Minimizar daños potenciales mediante planificación previa.
- ⏱️ **Factor Tiempo:** La anticipación de la Avanzada puede ser de horas, días o semanas según el perfil del dignatario y del evento.

---

## 4.2. Organización Operativa de la Avanzada

![Organización Operativa de la Avanzada](./recursos/imagenes/mod4_organizacion.svg)


El equipo de Avanzada es la punta de lanza de la Unidad de Protección y se compone de tres roles especializados:

\`\`\`
                  ┌───────────────────────────────┐
                  │       JEFE DE AVANZADA        │
                  │ Enlace, Inteligencia, Comando │
                  └──────────────┬────────────────┘
                                 │
         ┌───────────────────────┴───────────────────────┐
         ▼                                               ▼
┌───────────────────────────────┐               ┌───────────────────────────────┐
│     CUSTODIO DE AVANZADA      │               │      CHOFER DE AVANZADA       │
│ Interpretación de Planos,     │               │ Cronometraje de Rutas,        │
│ Requisa e Infraestructura     │               │ Evaluación de Vías y Escape   │
└───────────────────────────────┘               └───────────────────────────────┘
\`\`\`

| Rol | Responsabilidades Doctrinales |
|-----|-------------------------------|
| 👨‍✈️ **Jefe de Avanzada** | Encargado de la vigilancia y contravigilancia. Recopila información de rutas y objetivos. Enlace con autoridades superiores. Asesora al Jefe de Brigada sobre el dispositivo final. |
| 🕵️ **Custodio de Avanzada** | Especialista en interpretación de planos y croquis. Meticulosidad y atención extrema al detalle. Analiza áreas susceptibles y vulnerabilidades estructurales. |
| 🚘 **Chofer de Avanzada** | Habilidad de conducción técnica comparable al conductor del Móvil A (VIP). Responsable de cronometrar rutas, registrar tráfico real y evaluar el estado del pavimento. |

---

## 4.3. Logística y Equipamiento Técnico de Avanzada

![Logística y Equipamiento Técnico de Avanzada](./recursos/imagenes/mod4_equipamiento.svg)


La recopilación de inteligencia de terreno requiere herramientas tácticas específicas:

- 📓 **Documentación:** Libreta de notas de campo (resistente al agua) y planillas estandarizadas.
- 📍 **Navegación:** GPS portátil para geolocalización de puntos críticos y alternativas.
- 🔭 **Óptica y Visual:** Binoculares para observación a distancia y contravigilancia.
- 📸 **Registro Multimedia:** Cámara fotográfica/filmadora para adjuntar al informe de avanzada.
- 🔦 **Iluminación:** Linterna táctica de alta potencia para inspección de espacios oscuros.

---

## 4.4. Análisis de Desplazamientos y Rutas

![Análisis de Desplazamientos y Rutas](./recursos/imagenes/mod4_rutas.svg)


El desplazamiento representa la aproximación estratégica entre el **Punto Inicial (PI)** y el **Punto de Probable Impacto (PPI)** o destino final.

\`\`\`
 [ PI ] ==================> RUTA PRIMARIA (Verde) ==================> [ PPI ]
(Origen)      \\                                                  /   (Destino)
               \\---> RUTA SECUNDARIA (Amarilla) ----------------/
                \\
                 \\--> RUTA DE ESCAPE HOSPITALARIA (Roja Doblada) --> [ 🏥 HOSPITAL ]
\`\`\`

### Reglas Fundamentales de Ruta
1. **Regla de las 10 Alternativas:** Se deben planificar y reconocer diez o más alternativas de rutas para el ingreso y egreso del objetivo.
2. **Punto Inicial (PI):** Lugar de partida seguro (Residencia, Helipuerto, Aeropuerto).
3. **Punto de Probable Impacto (PPI):** Destino final donde se desarrollará la actividad gubernamental.

---

## 4.5. Lista de Chequeo de Ruta (Reconocimiento in situ)

![Lista de Chequeo de Ruta](./recursos/imagenes/mod4_checklist_ruta.svg)


Durante el recorrido de reconocimiento, el Chofer y el Custodio de Avanzada evalúan:

- 🏗️ **Infraestructura:** Cantidad de semáforos, tiempos de corte, puentes, túneles y viaductos.
- ⚠️ **Puntos Críticos:** Embudos geográficos, tramos de carril único y zonas sin señal celular.
- 🚧 **Estado de Vías:** Obras en construcción, desvíos temporales y calidad del pavimento.
- 👥 **Observación Periférica:** Paradas de autobuses, encrucijadas de alto riesgo y áreas de concentración popular.
- 🚦 **Tránsito:** Evaluación de la densidad vehicular en los horarios estimados del evento.

---

## 4.6. Exterior del Objetivo: La Zona de Transición

![Exterior del Objetivo: Zona de Transición](./recursos/imagenes/mod4_exterior.svg)


El exterior de un edificio o emplazamiento es el sector más vulnerable durante la llegada y partida del VIP.

\`\`\`
  [ VÍA PÚBLICA ] 
         │
         ▼  (Barreras / Perímetro Exterior)
  [ CORDÓN POLICIAL ]  <-- Seguridad Mediata
         │
         ▼
  [ PPJ ]  <-- Punto de Paso de la Caravana (Descenso del VIP)
         │
         ▼  (Cápsula de Seguridad Inmediata)
  [ INGRESO EDIFICIO ]
\`\`\`

### Protocolos de Llegada
- **Punto de Paso de la Caravana (PPJ):** Zona exacta delimitada para el estacionamiento y descenso de los vehículos.
- **Cordón Policial:** Establecimiento de seguridad mediata con personal de uniforme para contención de público.
- **Coordinación de Cronograma:** Control estricto del tiempo para evitar que el convoy deba esperar en la vía pública.

---

## 4.7. Infraestructura de Soporte y Emergencia

![Infraestructura de Soporte y Emergencia](./recursos/imagenes/mod4_emergencia.svg)


La Avanzada debe mapear los recursos de respuesta médica y de seguridad en anillos concéntricos de tiempo:

\`\`\`
               /-------------------------------------\\
              /      ANILLO DE 10 MINUTOS             \\
             /   Helipuerto / Evacuación Aérea         \\
            /  /-----------------------------------\\  \\
           /  /      ANILLO DE 5 MINUTOS            \\  \\
          /  /   Hospital Nivel 1 (Trauma/Quirúrgico)\\  \\
         /  /   Comisaría / Lugar Seguro              \\  \\
        |  |  |------------ [ OBJETIVO ] ------------|  |  |
\`\`\`

- 🏥 **Hospital Nivel 1:** Centro médico principal con guardia shockroom y quirófano a menos de 5-10 minutos.
- 👮 **Lugares Seguros:** Cuarteles, comisarías o dependencias militares previas para repliegue táctico.
- 🚁 **Evacuación Aérea:** Identificación y verificación de helipuertos o Zonas de Aterrizaje de Emergencia (ZAE).

---

## 4.8. Interior del Objetivo: Coordinación y Flujo

![Interior del Objetivo: Flujo de Circulación](./recursos/imagenes/mod4_interior.svg)


Al ingresar al edificio, la Avanzada realiza el recorrido pedestre que ejecutará el dignatario:

\`\`\`
[ ENTRADA PRINCIPAL ] ───> [ HALL DE ACCESO ] ───> [ SALÓN PRINCIPAL ] ───> [ ESTRADO ]
      (Paso 1)                 (Paso 2)               (Paso 3)              (Paso 4)
\`\`\`

### Acciones de Coordinación
- 🤝 **Enlace con Protocolo:** Determinar la trayectoria exacta y la posición de las autoridades que recibirán al VIP.
- 🚪 **Evaluación de Espacios:** Identificar pasillos secundarios, ascensores de servicio y vías alternativas ante eventuales bloqueos.
- 🪪 **Control de Acreditaciones:** Definir el sistema de credenciales para el personal de servicio, catering y prensa.

---

## 4.9. Control de Infraestructura Crítica

![Control de Infraestructura Crítica](./recursos/imagenes/mod4_infraestructura.svg)


Dentro del emplazamiento, se deben tomar bajo control cuatro instalaciones clave:

| Infraestructura | Acción Táctica |
|-----------------|----------------|
| 🚻 **Cuartos de Aseo** | Ubicación exacta de sanitarios VIP y revisión técnica exhaustiva (búsqueda de explosivos o cámaras). |
| 🔑 **Llaves Maestras** | Obtención y custodia de llaves físicas/electrónicas de acceso a todas las dependencias y salidas. |
| 🎧 **Puesto de Comando** | Establecimiento de una base de operaciones con líneas de comunicación seguras (VHF/UHF/Red celular). |
| 🛏️ **Habitación de Descanso** | Zona reservada y limpia para la espera o privado del dignatario y rotación del personal. |

---

## 4.10. La Zona de Seguridad y el Cuarto Seguro

![El Cuarto Seguro y Teoría Esférica](./recursos/imagenes/mod4_saferoom.svg)


El **Cuarto Seguro** (*Safe Room*) es el refugio de máxima protección dentro del emplazamiento ante una eventualidad armada o emergencia grave.

\`\`\`
┌───────────────────────────────────────────────────────────┐
│                    CUARTO SEGURO                          │
│                                                           │
│ 🧱 Mampostería Sólida (Sin ventanas al exterior)          │
│ 🔒 Acceso Controlado (Una sola vía de ingreso blindada)   │
│ 📡 Medios de Comunicación (Radio VHF, línea cableada)    │
│ 💧 Agua y Kit de Descontaminación / Primeros Auxilios     │
└───────────────────────────────────────────────────────────┘
\`\`\`

### Requisitos del Cuarto Seguro
1. **Estructura Rígida:** Muros de mampostería sólida o hormigón, preferentemente sin ventanas.
2. **Control de Acceso:** Una sola puerta de acceso fácil de trancar desde el interior.
3. **Autonomía:** Medios de comunicación independientes, linternas, agua potable y suministros médicos.

### Teoría Esférica de Seguridad
El Cuarto Seguro se sitúa en el centro de tres esferas concéntricas de protección:
1. *Esfera Externa:* Vallado y control de muchedumbre.
2. *Esfera Intermedia:* Seguridad preventiva y puestos fijos.
3. *Esfera Interna:* Cápsula de protección e ingreso restringido al VIP.

---

## 4.11. Inspección Técnica y Requisa (Explosivos y Amenazas)

![Inspección Técnica y Regla de Adyacencia](./recursos/imagenes/mod4_barrido.svg)


La inspección física debe realizarse bajo protocolos sistemáticos antes del arribo del VIP.

\`\`\`
       [ NIVEL SUPERIOR ]    <-- Regla de Adyacencia (Piso de arriba)
              ▲
              │
    ┌───────────────────┐
    │ ⇑ Techo           │
    │   ZONA VIP        │    <-- Revisión 360° (Paredes, conductos, luminarias)
    │ ⇓ Suelo           │
    └───────────────────┘
              │
              ▼
       [ NIVEL INFERIOR ]    <-- Regla de Adyacencia (Piso de abajo)
\`\`\`

### Reglas de Requisa
- 📐 **Regla de Adyacencia:** No basta con revisar la sala donde estará el VIP; **deben inspeccionarse obligatoriamente los niveles superior e inferior (techo y suelo)** y habitaciones contiguas.
- 🧱 **Revisión Sistemática:** Inspección metódica de suelos, zócalos, paredes, cielorrasos, ductos de aire acondicionado y mobiliario.

> [!CAUTION]
> **Protocolo de Hallazgo:** Ante la localización de un paquete u objeto sospechoso: **NO MANIPULAR**. Evacuar el área inmediatamente, sellar el perímetro y notificar a la Brigada de Explosivos.

---

## 4.12. Planes de Reacción y Emergencia en el Emplazamiento

![Planes de Reacción y Emergencia](./recursos/imagenes/mod4_reaccion.svg)


### 1. Evacuación General (Incendio / Ataque)
- Identificar salidas de emergencia principales y secundarias.
- Calcular tiempos de extracción desde el estrado hasta el vehículo Comando (Móvil A).

### 2. Protocolo ante Amenaza de Bomba
- Mantener la calma y no cortar la comunicación telefónica si se recibe una llamada.
- Completar la planilla de amenaza: evaluar voz, acento, ruidos de fondo, hora exacta y detalles del mensaje.
- Notificar inmediatamente al Jefe de Avanzada para activar el plan de evacuación silenciosa o general.

---

## 4.13. El Informe de Avanzada: Inteligencia Procesable

![El Informe de Avanzada: Inteligencia Procesable](./recursos/imagenes/mod4_informe.svg)


El trabajo de Avanzada culmina con la confección del **Informe de Avanzada**, el cual se entrega al Jefe de Brigada antes de la salida de la cápsula.

\`\`\`
┌───────────────────────────────────────────────────────────┐
│                 INFORME DE AVANZADA                       │
│                                                           │
│ 📄 1. Informe Escrito Detallado (Horarios, contactos)     │
│ 🗺️ 2. Croquis y Planos (Esquemas de planta y rutas)        │
│ 📸 3. Registro Visual (Fotografías y videos del objetivo) │
│ 🔄 4. Actualización en Tiempo Real (Estado del clima/vía)  │
└───────────────────────────────────────────────────────────┘
\`\`\`

> **El Informe de Avanzada proporciona la visión precisa y la inteligencia de terreno indispensables para organizar el dispositivo de seguridad.**

---

## 📝 Cuestionario de Autoevaluación — Módulo 4

### Preguntas de Opción Múltiple

**1. ¿Cuál es el concepto central del Estudio de Emplazamiento?**
- a) Una inspección informal previa a la llegada del evento.
- b) El uso adecuado de medios humanos y técnicos para investigar y organizar la seguridad con antelación. ✅
- c) Un informe administrativo para archivar post-operativo.
- d) La compra de equipamiento táctico para la unidad.

**2. ¿Cuáles son los tres roles que integran la Avanzada Operativa?**
- a) Comandante, Escolta, Tirador de Elite
- b) Jefe de Avanzada, Custodio de Avanzada y Chofer de Avanzada ✅
- c) Chofer A, Chofer B y Chofer C
- d) Inspector, Perito y Telefonista

**3. ¿Qué establece la "Regla de las 10 Alternativas" en el análisis de rutas?**
- a) Debe haber 10 vehículos en el convoy.
- b) Se deben reconocer al menos 10 alternativas de rutas para ingreso y egreso. ✅
- c) El tiempo de viaje no puede superar los 10 minutos.
- d) Se deben realizar 10 paradas preventivas en la ruta.

**4. ¿Qué es el PPJ en el protocolo de llegada al exterior del objetivo?**
- a) El Punto de Presión Jurídica.
- b) El Punto de Paso de la Caravana (zona de descenso). ✅
- c) El Permiso Policial Judicial.
- d) El Puesto Principal de Jefatura.

**5. En el mapeo de infraestructura médica, ¿cuál es el tiempo máximo óptimo para el traslado a un Hospital Nivel 1?**
- a) 60 minutos
- b) 30 a 45 minutos
- c) 5 a 10 minutos ✅
- d) 2 horas

**6. ¿Qué exige la "Regla de Adyacencia" durante una inspección técnica de explosivos?**
- a) Revisar únicamente el salón donde estará el VIP.
- b) Inspeccionar obligatoriamente los niveles superior e inferior (piso de arriba y abajo) y salas contiguas. ✅
- c) Revisar los vehículos de la comitiva.
- d) Inspeccionar solo los baños del establecimiento.

**7. ¿Cuál es la primera regla ante el hallazgo de un objeto sospechoso de explosivo?**
- a) Moverlo a un área abierta.
- b) Abrirlo para verificar el contenido.
- c) No manipular, evacuar el área y llamar a la Brigada de Explosivos. ✅
- d) Cubrirlo con mantas o ropa.

**8. ¿Qué características debe tener un "Cuarto Seguro"?**
- a) Amplios ventanales y múltiples puertas de salida.
- b) Muros sólidos, acceso controlado, sin ventanas y con medios de comunicación autónomos. ✅
- c) Estar ubicado en la vía pública fuera del edificio.
- d) Ser un vehículo en movimiento constante.

### Preguntas de Desarrollo

**9.** Explique detalladamente la relación entre Tiempo y Riesgo en las operaciones de Avanzada. ¿Por qué la anticipación reduce el riesgo operativo?

**10.** Describa la función del Chofer de Avanzada y la Lista de Chequeo de Ruta durante el reconocimiento in situ.

**11.** Desarrolle los requisitos estructurales y tácticos de un Cuarto Seguro (*Safe Room*) y aplique la Teoría Esférica de Seguridad.

**12.** Detalle los cuatro entregables principales del Informe de Avanzada y su importancia para el briefing del equipo de custodia.

---

## 📖 Glosario del Módulo 4

| Término | Definición |
|---------|------------|
| **Adyacencia (Regla de)** | Protocolo de inspección que exige revisar los niveles inmediatamente superior e inferior del área VIP |
| **Avanzada** | Escalón táctico que se despliega previamente en el objetivo para reconocer el terreno y organizar la seguridad |
| **Cuarto Seguro (Safe Room)** | Refugio interno fortificado y equipado para la extracción o resguardo del VIP ante una emergencia grave |
| **Estudio de Emplazamiento** | Análisis integral de seguridad e inteligencia de un edificio, recinto o espacio abierto previo a una visita |
| **Informe de Avanzada** | Documento procesable de inteligencia de terreno con planos, fotos y rutas entregado al mando |
| **PI (Punto Inicial)** | Punto de origen o partida del movimiento vehicular |
| **PPI (Punto de Probable Impacto)** | Punto de destino final donde se desarrollará la actividad del dignatario |
| **PPJ (Punto de Paso de la Caravana)** | Sector delimitado en el exterior del objetivo para el descenso seguro del VIP |
| **Requisa Técnica** | Inspección física y tecnológica de espacios en busca de explosivos, micrófonos o amenazas escondidas |
| **Teoría Esférica de Seguridad** | Modelo de protección mediante tres capas concéntricas de seguridad alrededor del VIP |
| **Zona de Transición** | Área de cambio entre el movimiento vehicular y pedestre (ej: calle a ingreso de edificio) |

---

## ✅ Checklist Operativo — Módulo 4

Antes de autorizar el arribo de la cápsula al objetivo:

- [ ] Designar al equipo de Avanzada (Jefe, Custodio y Chofer de Avanzada)
- [ ] Verificar equipamiento técnico (GPS, linternas, cámara, libreta, binoculares)
- [ ] Realizar el recorrido de ruta PI a PPI y validar las 10 alternativas
- [ ] Reconocer y cronometrar la ruta primaria, secundaria y la ruta de escape hospitalaria
- [ ] Delimitar la Zona de Transición y el PPJ en el exterior del objetivo
- [ ] Mapear el Hospital Nivel 1 (a menos de 10 min) y los Lugares Seguros
- [ ] Inspeccionar el interior del objetivo (hall, pasillos, estrado, salidas de emergencia)
- [ ] Tomar control de la Infraestructura Crítica (baños, llaves maestras, puesto de comando)
- [ ] Inspeccionar y validar el Cuarto Seguro (Safe Room)
- [ ] Ejecutar la Requisa Técnica de explosivos aplicando la Regla de Adyacencia
- [ ] Confeccionar y entregar el Informe de Avanzada con croquis y fotografías al Jefe de Brigada

---

> **Fuentes doctrinales:**  
> - Advance Protection Doctrine — División Custodia Gubernamental  
> - Manual de Seguridad Estratégica — Policía de Tierra del Fuego (2026)

---

*Módulo 4 de 8 — Manual de Protección y Seguridad para Dignatarios*  
*Próximo módulo: **Módulo 5 — Marco Legal y Actuación Policial en Custodia***
`,Li=`# MÓDULO 5: MARCO LEGAL Y ACTUACIÓN POLICIAL EN CUSTODIA

---

> **Manual de Protección y Seguridad para Dignatarios**  
> **Policía de la Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur**  
> **División Custodia Gubernamental**  
> Edición 2026

---

## 🎯 Objetivos de Aprendizaje

Al finalizar este módulo, el alumno será capaz de:

1. Comprender la **legalidad como herramienta operativa** y primer anillo de protección del custodio.
2. Identificar y dominar los **Cuatro Pilares del Marco Legal** (Portación/Uso de Armas, Código Procesal Penal, Credencial Policial y Empleo de Vehículos).
3. Distinguir doctrinalmente entre la **Portación** (estado latente) y el **Uso de Armas de Fuego** (neutralización letal de *Ultima Ratio*).
4. Aplicar la **Triada de la Amenaza Letal Inminente** (Capacidad + Intención + Oportunidad).
5. Eximir de responsabilidad penal las acciones de protección mediante el análisis de la **Legítima Defensa de Terceros** (Art. 34 inc. 6 y 7 del Código Penal).
6. Reconocer la validez institucional de la **Credencial Policial, Distintivo de Barra y Emblema de la División Custodia Gubernamental** (Resolución 202/00-J.P.).
7. Diferenciar legalmente entre **Conducción Defensiva** y **Conducción de Emergencia** en convoys.
8. Fundamentar éticamente el **"Deber Ser" del Custodio** (Disciplina, Discreción y No Obsecuencia).

---

## 5.1. La Legalidad como Herramienta Operativa

En el ámbito de la protección de dignatarios, el conocimiento jurídico no es una disciplina teórica ni un requisito burocrático; es una **herramienta de supervivencia táctica y de toma de decisiones bajo estrés extremo**.

> *"La distinción entre un profesional de la seguridad y un mercenario es el apego irrestricto a la ley. El conocimiento legal es el primer anillo de seguridad del operador."*

![Los Cuatro Pilares Legales](./recursos/imagenes/mod5_pilares.svg)

### Beneficios del Enfoque Jurídico Táctico
- 🛡️ **Maximizador de Seguridad:** Define con claridad los límites normativos dentro de los cuales el uso de la fuerza es legítimo.
- 🎯 **El "Deber Ser":** Reduce al mínimo las acciones arbitrarias o desproporcionadas en situaciones de respuesta bajo fuego o agresión.
- 🏛️ **Respaldo Institucional:** Actuar dentro del marco legal garantiza el amparo total de la Policía provincial, del Poder Judicial y del Estado provincial.

---

## 5.2. Los Cuatro Pilares del Marco Jurídico

La operatividad del personal de la División Custodia Gubernamental descansa sobre cuatro columnas legales estructurantes:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           OPERATIVIDAD LEGÍTIMA                                 │
├─────────────────┬─────────────────┬─────────────────────┬───────────────────────┤
│  PILAR 1: ARMAM.│  PILAR 2: CPPN  │  PILAR 3: CREDENCIAL│   PILAR 4: VEHÍCULOS  │
│ Portación vs Uso│ Legítima Defensa│  Autoridad del Estado│ Conducción Defensiva  │
│ (Ultima Ratio)  │ (Eximente Penal)│ Res. 202/00-J.P.    │ vs Emergencia         │
└─────────────────┴─────────────────┴─────────────────────┴───────────────────────┘
\`\`\`

---

## 5.3. Pilar 1: Portación y Uso de Armas de Fuego

![Portación vs. Uso de Armas de Fuego](./recursos/imagenes/mod5_armamento.svg)


Existe una diferencia doctrinal y legal fundamental entre portar un arma y emplearla:

### 1. Portación
- **Definición:** Autorización administrativa y legal para llevar el arma reglamentaria en condiciones de uso inmediato (alimentada y encaballada según directiva).
- **Naturaleza:** Es un **estado de alistamiento y preparación latente**. Representa el derecho y deber del funcionario policial en servicio o franco de servicio.

### 2. Uso (Disparo de Armas de Fuego)
- **Definición:** La acción de efectuar disparos para neutralizar una agresión.
- **Naturaleza:** Constituye una medida de ***Ultima Ratio*** (último recurso indispensable). No es una herramienta de intimidación o castigo, sino una acción de neutralización ante riesgo cierto e inminente de muerte o lesiones gravísimas.

\`\`\`
       [ PORTACIÓN ]  =================> Estado Latente de Preparación
             │
             ▼  (Amenaza Letal Inminente)
          [ USO ]     =================> Neutralización de Ultima Ratio
\`\`\`

---

## 5.4. Ley Nacional sobre el Uso de la Fuerza y la Triada de Amenaza

![La Tríada de la Amenaza Letal Inminente](./recursos/imagenes/mod5_triada_amenaza.svg)


Conforme a las normativas vigentes sobre el uso de la fuerza letal por cuerpos policiales, el fuego defensivo solo se justifica ante la confluencia de la **Triada de la Amenaza Letal Inminente**:

\`\`\`
                       ┌─────────────────────────┐
                       │        CAPACIDAD        │
                       │ (Arma / Medio de daño)  │
                       └────────────┬────────────┘
                                    │
                                    ▼
       ┌────────────────────────────┴────────────────────────────┐
       │                                                         │
       ▼                                                         ▼
┌─────────────────────────┐                               ┌─────────────────────────┐
│        INTENCIÓN        │ <===========================> │       OPORTUNIDAD       │
│ (Actitud hostil clara)  │  AMENAZA LETAL INMINENTE      │ (Distancia / Alcance)   │
└─────────────────────────┘                               └─────────────────────────┘
\`\`\`

1. 🔫 **Capacidad:** El agresor posee los medios físicos (arma de fuego, arma blanca, explosivo, vehículo como arma) capaces de causar la muerte o lesiones graves.
2. 🎯 **Intención:** El agresor demuestra mediante acciones verbales o físicas la decisión deliberada de dañar al dignatario o al custodio.
3. ⏱️ **Oportunidad:** El agresor se encuentra en una posición espacial y temporal que le permite ejecutar su amenaza inmediatamente.

> [!CAUTION]
> Si no se verifican simultáneamente los tres factores de la Triada, el uso de la fuerza armada es ilegítimo y conlleva responsabilidad penal directa del custodio por homicidio o lesiones punibles.

---

## 5.5. Pilar 2: Código Penal y la Legítima Defensa de Terceros

![Legítima Defensa de Terceros (Art. 34 CP)](./recursos/imagenes/mod5_legitima_defensa.svg)


El personal policial actúa bajo el amparo de la eximente de responsabilidad penal normada en el **Artículo 34 del Código Penal Argentino** (incisos 4, 6 y 7):

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                   REQUISITOS DE LEGÍTIMA DEFENSA                 │
├──────────────────────────────────────────────────────────────────┤
│ 1. Agresión Ilegítima: Ataque no provocado y antijurídico.      │
│ 2. Necesidad Racional del Medio: Empleo de lo indispensable.     │
│ 3. Falta de Provocación Suficiente: El custodio no incitó el acto.│
└──────────────────────────────────────────────────────────────────┘
\`\`\`

### Principios Fundamentales
- **Defensa de Terceros (El VIP):** El custodio no solo defiende su propia vida; su misión legal prioritaria es la tutela del dignatario bajo su resguardo legal.
- **Racionalidad vs. Igualdad de Armas:** La ley no exige que el custodio use exactamente el mismo tipo de arma que el atacante (ej. si el atacante porta un cuchillo a corta distancia, el arma de fuego es racionalmente necesaria para neutralizar el riesgo letal).
- **Proporcionalidad y Detención:** El fuego cesa inmediatamente una vez neutralizada o discontinuada la amenaza o agresión.

---

## 5.6. Pilar 3: Credencial Policial, Emblema y Resoluciones

![Credencial y Distintivos Oficiales (Res. 202/00-JP)](./recursos/imagenes/mod5_resolucion.svg)


La investidura del personal de la **División Custodia Gubernamental** está respaldada por la norma institucional específica:

\`\`\`
┌────────────────────────────────────────────────────────────────┐
│                    RESOLUCIÓN N° 202/00 - J.P.                 │
├────────────────────────────────────────────────────────────────┤
│ • Autoriza el uso exclusivo del Emblema de la División.        │
│ • Otorga la Distinción de Barra de Pecho institucional.         │
│ • Ratifica la autoridad delegada por el Estado Provincial.     │
└────────────────────────────────────────────────────────────────┘
\`\`\`

### Importancia Táctica del Distintivo
- 🪪 **Marco Legal de Presencia:** La credencial y los distintivos oficiales representan la autoridad delegada por el Estado Provincial. No son accesorios estéticos.
- 👮 **Identificación Rápida:** En situaciones de crisis o de intervención conjunta con otras fuerzas policiales (Policía Federal, Gendarmería, Prefectura), los distintivos normados por la Res. 202/00-J.P. evitan incidentes de "fuego amigo" (*blue on blue*).

---

## 5.7. Pilar 4: Empleo de Vehículos y Conducción Segura

![Empleo de Vehículos: Conducción Defensiva vs Emergencia](./recursos/imagenes/mod5_conduccion_legal.svg)


El traslado vehicular del dignatario está regido por normativas de tránsito provinciales y protocolos de seguridad operacional:

| Modo de Conducción | Nivel de Riesgo | Protocolo Operativo | Marco Jurídico |
|--------------------|-----------------|---------------------|----------------|
| 🚘 **Defensiva** | Niveles 4 y 5 (Bajo/Normal) | Respeto total a señales de tránsito, semáforos y límites de velocidad. Prevención de accidentes. | Ley Nacional/Provincial de Tránsito |
| 🚨 **Emergencia** | Niveles 1, 2 y 3 (Alto/Crítico) | Empleo de señales luminosas (estrobos) y sonoras (sirena). Prioridad de paso y exención de normas de tránsito solo ante riesgo inminente o evacuación activa. | Excepción por Deber de Función / Estado de Necesidad |

\`\`\`
              ┌────────────────────────────────────────────────┐
              │           MÁXIMA JURÍDICA VEHICULAR            │
              ├────────────────────────────────────────────────┤
              │ La velocidad táctica nunca debe superar la     │
              │ seguridad jurídica del entorno. Un vehículo en │
              │ mal estado o conducido sin habilitación es una │
              │ vulnerabilidad legal y táctica insostenible.   │
              └────────────────────────────────────────────────┘
\`\`\`

### Declaración Jurada del Conductor Táctico
Todo chofer de la cápsula (Móviles A, B o C) asume la responsabilidad civil y penal del vehículo, declarando encontrarse en perfecto estado psofísico y haber cumplido con las horas de descanso normadas.

---

## 5.8. Interacción entre Ley y Táctica: Gradualidad Legal

![Gradualidad Legal y Uso de la Fuerza](./recursos/imagenes/mod5_uso_fuerza.svg)


La **Teoría Esférica de la Protección** se alinea directamente con el principio de gradualidad en el uso de la fuerza:

\`\`\`
[ ANILLO EXTERIOR ]  ───> Alerta Temprana / Disuasión / Presencia Policial de Uniforme
        │
        ▼
[ ANILLO MEDIO ]     ───> Interceptación / Bloqueo Físico / Uso de Fuerza No Letal
        │
        ▼
[ CÁPSULA NÚCLEO ]   ───> Máxima Protección / Cobertura VIP / Fuerza Letal ante Agresión Directa
\`\`\`

- **Incremento de la Amenaza = Incremento Proporcional de la Fuerza Autorizada.**

---

## 5.9. Ética Profesional y el "Deber Ser" del Custodio

![El Deber Ser del Custodio](./recursos/imagenes/mod5_etica.svg)


La conducta del efectivo de custodia debe regirse por tres virtudes ético-jurídicas cardinales:

\`\`\`
 ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
 │   DISCIPLINA Y    │      │    DISCRECIÓN     │      │   NO OBSECUENCIA  │
 │      FIRMEZA      │      │ Secret. Profesional│      │ Lealtad a la Ley  │
 └─────────┬─────────┘      └─────────┬─────────┘      └─────────┬─────────┘
           │                          │                          │
           └──────────────────────────┼──────────────────────────┘
                                      ▼
                        [ OPERATIVIDAD LEGÍTIMA ]
\`\`\`

1. ⚖️ **Disciplina y Firmeza:** Capacidad para hacer cumplir los protocolos de seguridad sin vacilaciones ante presiones externas.
2. 🤐 **Discreción y Secreto Profesional:** Amparo del secreto funcional sobre la vida privada, desplazamientos y conversaciones del dignatario.
3. 🫡 **No Obsecuencia:** La lealtad del custodio es hacia la Ley y la Institución Policial, nunca hacia caprichos o exigencias ilegales del protegido.

---

## 5.10. Conclusión: La Legitimidad como Escudo

![La Legitimidad como Escudo](./recursos/imagenes/mod5_escudo.svg)

> **En la protección de dignatarios, una mala decisión legal puede ser tan destructiva como una falla táctica. La impunidad no forma parte del equipamiento de la unidad.**

El custodio bien entrenado actúa con la firmeza que le otorga el saberse respaldado por la Constitución, el Código Penal y la Doctrina Policial de Tierra del Fuego.

---

## 📝 Cuestionario de Autoevaluación — Módulo 5

### Preguntas de Opción Múltiple

**1. ¿Cuál es la concepción doctrinal de la legalidad en la protección de dignatarios?**
- a) Un trámite burocrático secundario.
- b) El primer anillo de seguridad y una herramienta operativa de toma de decisiones bajo estrés. ✅
- c) Un obstáculo que impide el correcto actuar táctico.
- d) Una norma que solo aplica en la comisaría.

**2. ¿Qué diferencia legal existe entre la "Portación" y el "Uso" de un arma de fuego?**
- a) Ninguna, ambos términos son sinónimos.
- b) La portación es la autorización para llevar el arma lista (estado latente); el uso es el disparo defensivo de Ultima Ratio. ✅
- c) La portación se hace de uniforme y el uso únicamente de civil.
- d) El uso es preventivo y la portación es punitiva.

**3. ¿Qué elementos integran la "Triada de la Amenaza Letal Inminente"?**
- a) Velocidad, Distancia y Tiempo
- b) Capacidad, Intención y Oportunidad ✅
- c) Armamento, Vehículo y Comunicaciones
- d) Fuerza, Proporcionalidad y Disuasión

**4. ¿Bajo qué norma del Código Penal Argentino se ampara la eximente de responsabilidad en la defensa del VIP?**
- a) Artículo 10
- b) Artículo 34 (incisos 6 y 7 - Legítima Defensa de Terceros) ✅
- c) Artículo 202
- d) Artículo 181

**5. ¿Qué norma institucional regula el uso del Emblema y Distintivos de la División Custodia Gubernamental?**
- a) Ley de Tránsito 24.449
- b) Resolución N° 202/00 - J.P. ✅
- c) Código de Comercio
- d) Decreto Provincial 108

**6. ¿En qué nivel de riesgo se autoriza el uso continuo de sirenas y la conducción de emergencia según la doctrina?**
- a) Niveles 4 y 5 (Baja amenaza)
- b) Niveles 1, 2 y 3 (Alto riesgo o evacuación activa) ✅
- c) Durante todos los desplazamientos diarios sin excepción
- d) Únicamente los fines de semana

**7. La actitud ética del custodio conocida como "No Obsecuencia" significa:**
- a) Desobedecer las órdenes de los superiores jerárquicos policiales.
- b) Mantener la lealtad prioritaria a la ley y la doctrina, rechazando caprichos ilegales del dignatario. ✅
- c) No hablar con los medios de prensa.
- d) Negarse a conducir vehículos sin sirena.

**8. En la Legítima Defensa, ¿qué exige el principio de "Racionalidad del Medio"?**
- a) Usar exactamente la misma marca y calibre de arma que el atacante.
- b) Emplear el medio proporcional e indispensable para neutralizar el peligro inminente a la vida. ✅
- c) Disparar únicamente a las extremidades en todos los casos.
- d) Solicitar autorización judicial por radio antes de repeler la agresión.

### Preguntas de Desarrollo

**9.** Desarrolle en detalle los tres componentes de la Triada de la Amenaza Letal Inminente y explique qué ocurre legalmente si el custodio utiliza su arma de fuego faltando uno de ellos.

**10.** Explique cómo se fundamenta jurídicamente la "Legítima Defensa de Terceros" aplicada a la custodia del Gobernador o dignatarios en funciones.

**11.** Compare los modos de conducción Defensiva y de Emergencia en convoys vehiculares desde el punto de vista de la responsabilidad civil y penal del conductor táctico.

**12.** Justifique la siguiente afirmación doctrinal: *"La velocidad táctica nunca debe superar la seguridad jurídica del entorno"*.

---

## 📖 Glosario del Módulo 5

| Término | Definición |
|---------|------------|
| **Capacidad (Triada)** | Posesión de medios físicos por parte del agresor con aptitud letal o de daño grave |
| **Conducción de Emergencia** | Modo de traslado táctico con uso de sirenas/estrobos autorizado ante riesgo inminente |
| **Conducción Defensiva** | Modo habitual de manejo con pleno acatamiento a las normas universales de tránsito |
| **Intención (Triada)** | Voluntad manifiesta y deliberada del atacante de agredir al dignatario o a la custodia |
| **Legítima Defensa de Terceros** | Causante de eximición penal (Art. 34 CP) al repeler una agresión ilegítima contra la vida del VIP |
| **No Obsecuencia** | Principio ético que supedita las órdenes u exigencias del protegido al estricto marco legal |
| **Oportunidad (Triada)** | Condición de tiempo y espacio que permite al atacante materializar de inmediato su agresión |
| **Portación de Arma** | Habilitación legal para llevar el arma de fuego reglamentaria lista para su empleo inmediato |
| **Res. 202/00-J.P.** | Resolución de Jefatura de Policía que aprueba los emblemas y distintivos de la División |
| **Ultima Ratio** | Principio jurídico que establece el uso de la fuerza letal como último recurso indispensable |

---

## ✅ Checklist Operativo — Módulo 5

Antes de iniciar cualquier servicio de custodia o comisión vehicular:

- [ ] Verificar portación vigente de credencial policial y credencial de portación de arma
- [ ] Exhibir distintivo de barra y emblema normados por Res. 202/00-J.P.
- [ ] Inspeccionar estado técnico del vehículo y documentación (tarjeta, seguro, VTV)
- [ ] Firmar la Declaración Jurada de aptitud psicofísica y descanso del conductor
- [ ] Repasar las Reglas de Enfrentamiento (ROE) y la Triada de la Amenaza Letal
- [ ] Verificar el correcto funcionamiento de sirenas, estrobos y equipo de comunicaciones
- [ ] Coordinar con el equipo los criterios de eximente penal por Legítima Defensa de Terceros
- [ ] Asegurar el secreto profesional y la discreción sobre itinerarios del dignatario
- [ ] Remarcar el principio de No Obsecuencia ante solicitudes fuera de protocolo

---

> **Fuentes doctrinales:**  
> - Bases Legales de Protección a Dignatarios — División Custodia Gubernamental  
> - Código Penal de la Nación Argentina (Art. 34)  
> - Ley Nacional de Uso de la Fuerza Policial  
> - Resolución N° 202/00 - J.P. (Policía de Tierra del Fuego)

---

*Módulo 5 de 8 — Manual de Protección y Seguridad para Dignatarios*  
*Próximo módulo: **Módulo 6 — Bioseguridad Táctica, AMRB y QBRN en Custodia***
`,Ri=`# MÓDULO 6: BIOSEGURIDAD TÁCTICA, MANEJO DE RIESGOS BIOLÓGICOS Y PROTOCOLOS QBRN

---

> **Manual de Protección y Seguridad para Dignatarios**  
> **Policía de la Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur**  
> **División Custodia Gubernamental**  
> Edición 2026

---

## 🎯 Objetivos de Aprendizaje

Al finalizar este módulo, el alumno será capaz de:

1. Comprender el concepto de **Bioseguridad Táctica** y la preservación de la continuidad operativa de la cápsula.
2. Tratar las amenazas biológicas, patógenos y agentes **QBRN** con el mismo rigor táctico que una amenaza balística o explosiva.
3. Identificar los **vectores de transmisión** en operaciones de custodia (aerosoles, fómite en vehículos y contacto en multitudes).
4. Dominar la **Estructura de Tres Capas de Protección Biológica** (Perímetro Táctico, Blindaje Biológico y Control del Entorno).
5. Implementar el **Protocolo de Neutralización de Superficies (Two-Step Method)** en móviles y equipos de comunicación.
6. Aplicar la **Conciencia Situacional para la Detección de Amenazas Biológicas** y síntomas de alerta.
7. Ejecutar los protocolos de **Aislamiento Inmediato (Amenaza Activa)** y **Cuarentena Táctica (Riesgo Latente)**.
8. Diseñar el **Esquema de Redundancia y Relevo Limpio** para evitar la baja masiva de la brigada.
9. Mantener las **habilidades operativas tácticas** (tiro, conducción y combate CQC) utilizando Equipo de Protección Personal (EPP).

---

## 6.1. El Contexto Estratégico: Preservación de la Capacidad Operativa

![Contexto Estratégico: Preservación Operativa](./recursos/imagenes/mod6_contexto.svg)


La bioseguridad en la protección de dignatarios no es una cuestión meramente médica o administrativa; es una **defensa invisible esencial para la continuidad del servicio de custodia**.

> *"La seguridad biológica es parte integral de la seguridad física. Un equipo de custodia comprometido por enfermedad o contaminación es una brecha crítica que paraliza el dispositivo de protección."*

\`\`\`
                       ┌─────────────────────────┐
                       │   AMENAZA BIOLÓGICA /   │
                       │     PATÓGENO / QBRN     │
                       └────────────┬────────────┘
                                    │
                                    ▼
       ┌────────────────────────────┴────────────────────────────┐
       │                                                         │
       ▼                                                         ▼
┌─────────────────────────┐                               ┌─────────────────────────┐
│   BRECHA DE SALUD EN    │ <===========================> │   INTERRUPCIÓN DE LA    │
│    EL PERSONAL CUSTODIO │  PARÁLISIS DEL DISPOSITIVO    │  CAPACIDAD OPERATIVA    │
└─────────────────────────┘                               └─────────────────────────┘
\`\`\`

### El Enemigo Invisible
Los riesgos biológicos y los agentes **QBRN (Químicos, Biológicos, Radiológicos y Nucleares)** deben tratarse con la misma rigurosidad táctica y anticipación que un francotirador o un artefacto explosivo improvisado (IED).

---

## 6.2. Inteligencia de la Amenaza: Vectores de Transmisión

![Vectores de Transmisión Biológica](./recursos/imagenes/mod6_vectores.svg)


En el despliegue de custodia existen tres escenarios de alto riesgo para la contaminación o contagio:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        VECTORES DE RIESGO BIOLÓGICO                             │
├─────────────────┬─────────────────────────────────┬─────────────────────────────┤
│ 🌬️ AEROSOLES    │ 🚗 FÓMITES / SUPERFICIES        │ 🤝 CONTACTO ESTRECHO        │
│ Espacios        │ Habitación VIP, consolas de radio│ Saludos de mano,             │
│ confinados sin  │ manijas de vehículos, hebillas  │ multitudes sin perímetro    │
│ ventilación.    │ de cinturones de seguridad.     │ de contención.              │
└─────────────────┴─────────────────────────────────┴─────────────────────────────┘
\`\`\`

1. 🌬️ **Aerosoles en Espacios Confinados:** Vehículos de la cápsula (Móvil A/B), salas de reuniones y ascensores sin filtración adecuada de aire.
2. 🚗 **Fómites en la Cápsula Vehicular:** Manijas de puertas exterior/interior, volantes, selectoras de cambio, consolas de comunicación VHF/UHF y cinturones.
3. 🤝 **Contacto Cercano en Multitudes:** Interacciones de baños de multitud o recepción de correspondencia y obsequios sin control sanitario previo.

---

## 6.3. Las Tres Capas de Protección Biológica

Para mitigar el riesgo biológico sin perturbar el dispositivo de protección, se aplica la **Doctrina de las Tres Capas**:

\`\`\`
 ┌────────────────────────────────────────────────────────────────────────┐
 │ CAPA 1: PERÍMETRO TÁCTICO (Distanciamiento operativo / Monitoreo)      │
 │  ┌──────────────────────────────────────────────────────────────────┐  │
 │  │ CAPA 2: BLINDAJE BIOLÓGICO (Mascarilla N95, Guantes, Protección) │  │
 │  │  ┌────────────────────────────────────────────────────────────┐  │  │
 │  │  │ CAPA 3: CONTROL DEL ENTORNO (Cápsula Vehicular Desinfectad)│  │  │
 │  │  └────────────────────────────────────────────────────────────┘  │  │
 │  └──────────────────────────────────────────────────────────────────┘  │
 └────────────────────────────────────────────────────────────────────────┘
\`\`\`

### Capa 1: Perímetro Táctico (Medidas Preventivas)
- **Distanciamiento Social Operativo:** Mantener la distancia física no es cortesía, es preservar el perímetro biológico de la cápsula.
- **Higiene Personal de Combate:** Lavado de manos estandarizado y desinfección obligatoria antes y después de manipular armamento o radios.
- **Monitoreo de Salud:** Auto-evaluación diaria antes de entrar en servicio. Un custodio con síntomas es una baja preventiva obligatoria.

### Capa 2: Blindaje Biológico (Equipo de Protección Personal - EPP)

![Equipo de Protección Personal (EPP) Táctico](./recursos/imagenes/mod6_epp.svg)

- 😷 **Mascarilla de Alta Eficiencia (N95 / FFP2):** Barrera primaria de ajuste hermético obligatorio en áreas de concentración o recintos cerrados.
- 🧤 **Guantes Tácticos de Nitrilo:** Protección contra fómites. Descarte inmediato tras contacto de riesgo y antes de abordar el Móvil A.
- 🥽 **Protección Ocular / Pantalla Facial:** Utilizada en operaciones de control de muchedumbres o sospecha de agentes por aerosol.

> [!NOTE]
> **Nota Táctica:** El EPP es inútil si está contaminado por mala manipulación. Nunca tocar el frente de la mascarilla y realizar el retiro (*donning and doffing*) según protocolo de bioseguridad.

### Capa 3: Control del Entorno (La Cápsula Vehicular Segura)

![Control de Puntos Críticos en el Vehículo](./recursos/imagenes/mod6_capsula.svg)

El vehículo es el núcleo de la esfera de protección, pero también representa un entorno confinado con alto riesgo de acumulación de patógenos si no se desinfecta adecuadamente.

---

## 6.4. Procedimiento Operativo: Neutralización de Superficies (Two-Step Method)

![Protocolo Two-Step: Neutralización de Superficies](./recursos/imagenes/mod6_twostep.svg)


Para garantizar la bioseguridad en vehículos y puestos de comando, se aplica obligatoriamente el método de dos pasos:

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                   MÉTODO DE DOS PASOS (TWO-STEP)                 │
├──────────────────────────────────────────────────────────────────┤
│ PASO 1: LIMPIEZA REGULAR                                         │
│ • Remover suciedad orgánica y polvo con agua y detergente neutro.│
├──────────────────────────────────────────────────────────────────┤
│ PASO 2: DESINFECCIÓN TÁCTICA                                     │
│ • Aplicar Alcohol al 70% o solución clorada (0.1%).              │
│ • Fricción mecánica y tiempo de contacto mínimo de 1 minuto.     │
└──────────────────────────────────────────────────────────────────┘
\`\`\`

- ⏱️ **Frecuencia:** Cada 2 horas de servicio activo y de manera inmediata tras el traslado de personal externo o cambios de turno.
- ⚡ **Regla de Oro Electrónica:** Nunca rociar líquidos desinfectantes directamente sobre equipos de comunicación (radios VHF/UHF, GPS, visores nocturnos). Usar paños de microfibra humedecidos.

---

## 6.5. Conciencia Situacional y Detección de Sintomatología

![Conciencia Situacional y Detección de Síntomas](./recursos/imagenes/mod6_deteccion.svg)


El personal debe mantener la atención a indicadores de alerta médica tanto en el dignatario como en los integrantes del equipo:

\`\`\`
  [ INDICADORES DE ALERTA ] ───> 🤒 Fiebre (>37.5°C)
                             ───> 🗣️ Tos seca persistente / Dificultad respiratoria
                             ───> 👃 Pérdida súbita de gusto u olfato (Anosmia)
\`\`\`

### Algoritmo de Acción Rápida:
\`\`\`
[ IDENTIFICACIÓN RÁPIDA ] ───> [ REPORTE DISCRETO AL MANDO ] ───> [ AISLAMIENTO INMEDIATO ]
\`\`\`

---

## 6.6. Protocolos de Respuesta Táctica ante Contaminación o Sintomatología

![Protocolos de Aislamiento y Cuarentena Táctica](./recursos/imagenes/mod6_descontaminacion.svg)


\`\`\`
                    ┌───────────────────────────────────┐
                    │      EVALUACIÓN DE SITUACIÓN      │
                    └─────────────────┬─────────────────┘
                                      │
         ┌────────────────────────────┴────────────────────────────┐
         ▼                                                         ▼
┌─────────────────────────┐                               ┌─────────────────────────┐
│  PROTOCOL 1: AISLAMIENTO│                               │  PROTOCOL 2: CUARENTENA │
│    (Amenaza Activa)     │                               │    (Riesgo Latente)     │
│ Extracción de sintomático│                               │ Restricción a contactos │
│ y traslado a Zona Roja. │                               │ estrechos (asintomát.)  │
└─────────────────────────┘                               └─────────────────────────┘
\`\`\`

### Protocolo 1: Aislamiento (Amenaza Activa)
1. Extraer inmediatamente al custodio o funcionario sintomático de la cápsula.
2. Trasladar al espacio de aislamiento pre-designado en la Avanzada.
3. Desinfectar el vehículo o puesto ocupado previamente.

### Protocolo 2: Cuarentena (Riesgo Latente)
1. Identificar los contactos estrechos dentro de la brigada.
2. Aplicar aislamiento preventivo hasta la realización de testeos de diagnóstico (PCR / Antígenos).
3. Reemplazar la célula afectada con el **Personal de Reserva / Relevo Limpio**.

---

## 6.7. Esquema de Redundancia y Relevo Limpio

![Esquema de Redundancia y Relevo Limpio](./recursos/imagenes/mod6_relevo.svg)


Para evitar que el contagio de un solo operador desmantele la seguridad del dignatario, la Jefatura de la División Custodia establece un sistema de relevo aislado:

\`\`\`
┌─────────────────────────┐         Contacto cero        ┌─────────────────────────┐
│     BRIGADA ACTIVA      │ <==========================> │   BRIGADA DE RESERVA    │
│ (En servicio con VIP)   │                              │ (Acuartelada / Limpia)  │
└─────────────────────────┘                              └─────────────────────────┘
\`\`\`

- 🛡️ **Contacto Cero:** La Brigada de Reserva no comparte alojamientos, comedores ni vehículos con la Brigada Activa durante la misión.

---

## 6.8. Mantenimiento de Habilidades Operativas con EPP

![Mantenimiento de Habilidades con EPP](./recursos/imagenes/mod6_entrenamiento.svg)


El uso de mascarillas, guantes y protectores faciales altera el rendimiento biomecánico y la percepción sensorial del custodio. Por ello, la instrucción de tiro y táctica debe adaptarse:

- 🎯 **Adiestramiento de Tiro con EPP:** Práctica de desenfunde, alineación de miras y solución de trabas portando mascarilla y protección ocular para aclimatarse al empañamiento y a la fatiga respiratoria.
- 🚘 **Conducción Táctica con EPP:** Prácticas de maniobras evasivas con guantes tácticos de nitrilo para evaluar el agarre del volante y controles.
- 🥋 **Combate Cuerpo a Cuerpo (CQC):** Ajuste de técnicas de retención de arma y control físico considerando la restricción de oxígeno en esfuerzo máximo.

---

## 📝 Cuestionario de Autoevaluación — Módulo 6

### Preguntas de Opción Múltiple

**1. ¿Cuál es el objetivo principal de la Bioseguridad Táctica en la protección de dignatarios?**
- a) Reducir el gasto en insumos médicos.
- b) Preservar la capacidad operativa del equipo y la continuidad de la protección sin interrupciones. ✅
- c) Evitar el uso de vehículos blindados.
- d) Sustituir el armamento por elementos sanitarios.

**2. ¿Cuáles son los tres vectores principales de riesgo biológico en custodia?**
- a) Fuego, Explosión y Choque
- b) Aerosoles en espacios confinados, Fómites en vehículos/radios y Contacto estrecho en muchedumbres. ✅
- c) Clima, Terreno y Altitud
- d) Radiación, Agua y Alimentos

**3. ¿En qué consiste la Capa 2 de Protección Biológica?**
- a) Distanciamiento social operativo.
- b) Blindaje Biológico mediante el uso correcto de EPP (Mascarilla N95, Guantes, Pantalla). ✅
- c) Desinfección de rutas.
- d) Aislamiento en comisaría.

**4. ¿Cuál es el método estandarizado para la neutralización de superficies en móviles y equipos?**
- a) Lavado con agua a presión.
- b) Método de Dos Pasos (Paso 1: Limpieza regular con detergente; Paso 2: Desinfección con alcohol al 70% o cloro). ✅
- c) Aplicación directa de aerosol sobre las pantallas de las radios.
- d) Uso de aire comprimido.

**5. ¿Qué regla debe aplicarse estrictamente al desinfectar radios VHF/UHF y electrónicos tácticos?**
- a) Sumergirlos en solución clorada.
- b) Nunca rociar líquidos directamente sobre el equipo; usar paños humedecidos. ✅
- c) Rociarlos con spray a 5 cm de distancia.
- d) Desinfectarlos únicamente una vez al mes.

**6. ¿Qué acción inmediata debe tomarse ante la presencia de un custodio con síntoma activo (>37.5°C / tos)?**
- a) Mantenerlo en la formación para no interrumpir el esquema.
- b) Aislamiento inmediato, extracción de la cápsula y reporte al mando. ✅
- c) Darle una aspirina y continuar el servicio.
- d) Asignarle la conducción del Móvil A.

**7. ¿Qué norma rige entre la Brigada Activa y la Brigada de Reserva para garantizar el "Relevo Limpio"?**
- a) Compartir el mismo comedor.
- b) Contacto Cero (alojamiento y medios de transporte independientes). ✅
- c) Intercambiar personal cada 2 horas.
- d) Entrenar juntos en recintos cerrados.

**8. ¿Por qué es necesario entrenar tiro y conducción portando el EPP completo?**
- a) Por mero requerimiento estético.
- b) Para aclimatarse al empañamiento visual, menor agarre y fatiga respiratoria en situaciones de crisis. ✅
- c) Para no ensuciar el uniforme reglamentario.
- d) Porque el EPP reemplaza al chaleco antibalas.

### Preguntas de Desarrollo

**9.** Justifique la afirmación doctrinal: *"La seguridad biológica es parte integral de la seguridad física"*.

**10.** Desarrolle el procedimiento detallado del Método de Dos Pasos (*Two-Step Method*) para la descontaminación del Móvil A (vehículo del dignatario).

**11.** Explique el concepto de "Contacto Cero" entre la Brigada Activa y la Brigada de Reserva y su importancia para evitar la parálisis operativa por brote.

**12.** Describa las dificultades biomecánicas y tácticas que genera el uso de EPP durante un enfrentamiento armado y cómo se solucionan mediante el entrenamiento continuo.

---

## 📖 Glosario del Módulo 6

| Término | Definición |
|---------|------------|
| **Aerosol** | Suspensión de partículas microscópicas en el aire capaces de transmitir patógenos en espacios cerrados |
| **Bioseguridad Táctica** | Conjunto de medidas de prevención y control de riesgos biológicos aplicadas a operaciones de seguridad |
| **Contacto Cero** | Protocolo de separación física total entre la brigada de servicio y el personal de reserva |
| **EPP (Equipo de Protección Personal)** | Indumentaria técnica (N95, nitrilo, antiparras) para blindar al custodio contra patógenos |
| **Fómite** | Objeto o superficie inerte (manijas, radios, volantes) capaz de conservar y transmitir microorganismos |
| **QBRN** | Acrónimo táctico para amenazas Químicas, Biológicas, Radiológicas y Nucleares |
| **Relevo Limpio** | Célula de custodia de reserva no expuesta a contagios lista para asumir la misión de inmediato |
| **Two-Step Method** | Procedimiento de dos etapas: limpieza mecánica de suciedad seguida de desinfección química |

---

## ✅ Checklist Operativo — Módulo 6

Antes de iniciar el servicio y desplegar la cápsula:

- [ ] Verificar el estado de salud de todos los integrantes del equipo (auto-evaluación)
- [ ] Inspeccionar la dotación individual de EPP (Mascarillas N95, guantes de nitrilo, desinfectante)
- [ ] Ejecutar la desinfección en dos pasos (*Two-Step*) del interior del Móvil A y móviles escolta
- [ ] Sanitizar radios VHF/UHF, linternas y armamento con paños humedecidos
- [ ] Comprobar la ventilación y renovación de aire en los vehículos de la cápsula
- [ ] Mantener el distanciamiento social operativo en reuniones de briefing y puestos fijos
- [ ] Confirmar la disponibilidad y ubicación del espacio de aislamiento preventivo de la Avanzada
- [ ] Verificar la norma de Contacto Cero con la Brigada de Reserva de retaguardia
- [ ] Repasar el protocolo de extracción rápida ante síntomas de alerta en el dignatario o la custodia

---

> **Fuentes doctrinales:**  
> - Bioseguridad Táctica y Manejo de Riesgos — División Custodia Gubernamental  
> - Protocolos Sanitaria de Protección a Dignatarios — Policía de Tierra del Fuego (2026)

---

*Módulo 6 de 8 — Manual de Protección y Seguridad para Dignatarios*  
*Próximo módulo: **Módulo 7 — Primeros Auxilios, Socorrismo Táctico y Soporte Vital (TECC/TCCC)***
`,zi=`# MÓDULO 7: PRIMEROS AUXILIOS, SOCORRISMO TÁCTICO Y SOPORTE VITAL EN CUSTODIA (TECC/TCCC)

---

> **Manual de Protección y Seguridad para Dignatarios**  
> **Policía de la Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur**  
> **División Custodia Gubernamental**  
> Edición 2026

---

## 🎯 Objetivos de Aprendizaje

Al finalizar este módulo, el alumno será capaz de:

1. Comprender el rol del custodio como **Primer Respondiente y Primer Anillo de Supervivencia** médica ante colapsos súbitos o traumas en la cápsula.
2. Dominar las fases del **Socorrismo Táctico (TECC/TCCC)** adaptadas a operaciones de protección de dignatarios.
3. Ejecutar maniobras de **Reanimación Cardiopulmonar (RCP) de Alta Calidad** a una frecuencia de 100-120 compresiones por minuto.
4. Operar el **Desfibrilador Automático Externo (DEA)** como herramienta multiplicadora de supervivencia en entornos públicos y privados.
5. Controlar hemorragias exanguinantes mediante el uso de **torniquetes tácticos (CAT/SOFT-T)** y agentes hemostáticos.
6. Mantener la **Seguridad de la Escena y la Cobertura 360°** mientras se administra soporte vital, evitando vulnerabilidades ante ataques secundarios.
7. Coordinar la **Comunicación Operativa en Crisis Médica** con los Servicios de Emergencia Médica (SEM/911) mediante el reporte SBAR.
8. Aplicar la **Transferencia Táctica de Mando** mediante la figura del "Puntero de Recepción".
9. Proteger la **privacidad e imagen del dignatario** (*Formación en Caja*) durante maniobras médicas en vía pública.

---

## 7.1. El Custodio como Primer Respondiente: El Primer Anillo de Supervivencia

![El Custodio como Primer Respondiente](./recursos/imagenes/mod7_respondiente.svg)


En el ámbito de la custodia de dignatarios, el tiempo es la variable más crítica. Ante un paro cardiorrespiratorio o una hemorragia masiva por atentado balístico/explosivo, la supervivencia del protegido depende de la **respuesta médica inmediata en los primeros 3 a 5 minutos**.

> *"La protección integral no termina en neutralizar la amenaza física; exige garantizar la supervivencia biológica del dignatario en la brecha temporal previa a la llegada del soporte médico avanzado."*

\`\`\`
                       ┌─────────────────────────┐
                       │   COLAPSO MÉDICO O      │
                       │   HERIDA GRAVE EN VIP   │
                       └────────────┬────────────┘
                                    │
                                    ▼
       ┌────────────────────────────┴────────────────────────────┐
       │                                                         │
       ▼                                                         ▼
┌─────────────────────────┐                               ┌─────────────────────────┐
│   RESPUESTA MÉDICA DE   │ <===========================> │     LLEGADA DEL SEM     │
│   LA CUSTODIA (0-3 MIN) │   BRECHA TEMPORAL CRÍTICA     │     (SOPORTE AVANZADO) │
└─────────────────────────┘                               └─────────────────────────┘
\`\`\`

### Diferencial Táctico del Custodio
A diferencia de un socorrista civil, el efectivo de custodia debe brindar auxilio médico **sin comprometer la seguridad perimetral ni la confidencialidad de la operación**.

---

## 7.2. La Cadena de Supervivencia Táctica

Para elevar la probabilidad de supervivencia en emergencias cardiovasculares o traumáticas, el equipo de protección debe ejecutar sin fisuras los eslabones bajo su responsabilidad directa:

![La Cadena de Supervivencia: Eslabones Críticos](./recursos/imagenes/mod7_cadena.svg)

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    RESPONSABILIDAD DIRECTA DE LA CUSTODIA                       │
├──────────────────┬──────────────────┬──────────────────┬────────────────────────┤
│ 1. RECONOCIMIENTO│ 2. RCP PRECOZ    │ 3. DESFIBRILACIÓN│ 4. SOPORTE VITAL       │
│    Y ACTIVACIÓN  │ Compresiones     │    RÁPIDA        │    AVANZADO (SEM)      │
│ Detección rápida │ torácicas        │ Empleo del DEA   │ Transferencia de mando │
│ y llamado al 911 │ inmediatas.      │ en < 3 minutos.  │ al equipo médico.      │
└──────────────────┴──────────────────┴──────────────────┴────────────────────────┘
\`\`\`

---

## 7.3. Fases del Socorrismo Táctico (TECC / TCCC)

![Las Tres Fases del TECC / TCCC](./recursos/imagenes/mod7_fases_tecc.svg)


El protocolo de asistencia en custodia se estructura en tres fases según el nivel de amenaza en el entorno:

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                    FASES DEL SOCORRISMO TÁCTICO                  │
├──────────────────────────────────────────────────────────────────┤
│ FASE 1: ATENCIÓN BAJO FUEGO (Care Under Fire - CUF)             │
│ • La mejor medicina es la superioridad de fuego / extracción.   │
│ • Única intervención permitida: Aplicación de Torniquete.        │
├──────────────────────────────────────────────────────────────────┤
│ FASE 2: ATENCIÓN EN AMBIENTE TÁCTICO (Tactical Field Care)       │
│ • La amenaza directa fue neutralizada o el VIP está a cubierto.  │
│ • Aplicación de protocolo MARCH (Hemorragia, Vía Aérea, etc.).  │
├──────────────────────────────────────────────────────────────────┤
│ FASE 3: ATENCIÓN EN EVACUACIÓN (Tactical Evacuation Care - TACEVAC)│
│ • Monitoreo continuo a bordo del Móvil A durante el traslado.    │
└──────────────────────────────────────────────────────────────────┘
\`\`\`

---

## 7.4. Evaluación Inicial y Seguridad de la Escena

![Evaluación Inicial y Seguridad de la Escena](./recursos/imagenes/mod7_seguridad_escena.svg)


> [!CAUTION]
> **Regla de Oro Táctica:** *"Un rescantista herido es una víctima más, no una ayuda."* Jamás se debe iniciar la reanimación sin descartar amenazas activas (tirador activo, emboscada secundaria, riesgo tóxico o eléctrico).

### Algoritmo de 'Check' Rápido (Máximo 10 Segundos):
\`\`\`
1. CONCIENCIA: ¿Responde a estímulos auditivos / táctiles?
2. RESPIRACIÓN: ¿Existe elevación del tórax o jadeos anormales (gasping)?
3. PULSO: Verificación carotídea rápida.

───> SI NO RESPONDE Y NO RESPIRA NORMALLMENTE: INICIAR RCP INMEDIATAMENTE.
\`\`\`

---

## 7.5. Protocolo de Reanimación Cardiopulmonar (RCP) de Alta Calidad

![Protocolo de RCP de Alta Calidad](./recursos/imagenes/mod7_rcp.svg)


\`\`\`
                       ┌─────────────────────────┐
                       │   UBICACIÓN DE MANOS    │
                       │ Centro del tórax (mitad │
                       │  inferior del esternón) │
                       └────────────┬────────────┘
                                    │
                                    ▼
       ┌────────────────────────────┴────────────────────────────┐
       │                                                         │
       ▼                                                         ▼
┌─────────────────────────┐                               ┌─────────────────────────┐
│ FRECUENCIA E INTENSIDAD │ <===========================> │   PROFUNDIDAD Y RECOIL  │
│ 100 a 120 compresiones  │   COMPRESIONES EFECTIVAS      │ Al menos 5 cm / permitir│
│ por minuto (ritmo)      │                               │ expansión torácica      │
└─────────────────────────┘                               └─────────────────────────┘
\`\`\`

### Modalidades de Reanimación:
- 🤲 **RCP Solo con Manos (Hand-Only):** Indicada cuando el custodio no cuenta con barrera de bioseguridad o actúa en entornos con riesgo de contagio. Compresiones ininterrumpidas.
- 🫁 **RCP Clásica (30:2):** 30 compresiones por 2 ventilaciones de rescate utilizando mascarilla de barrera con válvula unidireccional.

---

## 7.6. Desfibrilador Automático Externo (DEA): Multiplicador de Supervivencia

El DEA es una herramienta tecnológica esencial en todo esquema de protección gubernamental o privada.

![Desfibrilador Automático Externo (DEA) — Protocolo de Operación](./recursos/imagenes/mod7_dea.svg)

### Secuencia Operativa del DEA:
1. ⚡ **Encendido:** Activar el equipo inmediatamente al arribo.
2. 🏷️ **Colocación de Parches:** Adherir sobre el tórax desnudo del paciente (parche infraclavicular derecho y parche medio-axilar izquierdo).
3. 🎧 **Análisis del Ritmo:** Pausar las compresiones y acatar la orden de voz *"Analizando el ritmo cardíaco. Nadie toque al paciente"*.
4. 💥 **Descarga Indicada:** Confirmar perimetralmente con la voz en alto *"¡Todos fuera!"* y presionar el botón de descarga.
5. 🔄 **Reinicio Inmediato:** Reanudar las compresiones torácicas inmediatamente después de la descarga sin esperar nueva orden.

---

## 7.7. Manejo del Trauma Táctico: Protocolo M.A.R.C.H.

![El Algoritmo Prioritario M.A.R.C.H.](./recursos/imagenes/mod7_march.svg)


En situaciones de ataque armado o explosivo, el custodio aplica el protocolo de trauma prioritario:

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                     PROTOCOLO TÁCTICO M.A.R.C.H.                 │
├──────────────────────────────────────────────────────────────────┤
│ M - Massive Bleeding: Control de Hemorragias Exanguinantes.      │
│ A - Airway: Permeabilidad de Vías Aéreas.                        │
│ R - Respiration: Tratamiento de Neumotórax a Tensión.            │
│ C - Circulation: Verificación de Pulso y Rellenado Capilar.      │
│ H - Hypothermia: Prevención de Hipotermia y Trauma Craneal.      │
└──────────────────────────────────────────────────────────────────┘
\`\`\`

### Control de Hemorragias Exanguinantes
- 🩸 **Torniquete Táctico (CAT / SOFT-T):** Aplicado "Alto y Apretado" (*High and Tight*) sobre la extremidad afectada en la Fase de Atención Bajo Fuego.
- 🩹 **Empaquetamiento de Heridas:** Empleo de gasas hemostáticas en zonas de juntura (ingle, axilas, cuello) donde el torniquete no es aplicable, seguido de 3 minutos de presión directa continua.

---

## 7.8. Comunicación en Crisis Médica y Recepción Táctica

![Reporte SBAR y Transferencia Médica Táctica](./recursos/imagenes/mod7_sbar.svg)


La gestión del enlace médico requiere precisión y control perimetral:

\`\`\`
┌────────────────────────────────────────────────────────────────┐
│                    COMUNICACIÓN EN CRISIS MÉDICA               │
├────────────────────────────────────────────────────────────────┤
│ 1. CANAL INTERNO (VHF/UHF): Alerta de "Hombre Caído" o          │
│    "Código Médico VIP". Cobertura 360° por parte de la escolta.│
│                                                                │
│ 2. CANAL EXTERNO (911/SEM): Reporte SBAR                        │
│    • Situación: Edad, sexo y síntoma (paro / herida balística).│
│    • Ubicación: Punto exacto y ruta de acceso segura.          │
│    • Acciones: "RCP en curso / 1 descarga efectuada".          │
└────────────────────────────────────────────────────────────────┘
\`\`\`

### La Figura del "Puntero de Recepción"
Designar a un integrante de la avanzada como **Puntero** para interceptar a la ambulancia en el anillo exterior y guiarla hacia la zona segura. La ambulancia **nunca rompe la cápsula** sin verificación de identidad previa.

---

## 7.9. Privacidad del VIP y Marco Legal de la Asistencia

![Privacidad del VIP y Formación en Caja](./recursos/imagenes/mod7_privacidad.svg)


- 🙈 **Protección de la Imagen Pública (Formación en Caja):** Durante las maniobras de RCP o socorrismo en vía pública, los integrantes del equipo que no estén asistiendo o brindando seguridad perimetral deben desplegar mantas o formar una barrera física (*Formación en Caja*) para impedir fotografías o videos de curiosos y medios de prensa.
- ⚖️ **Consentimiento Implícito:** Ante la inconsciencia del dignatario, la ley presume el consentimiento para maniobras de soporte vital.
- 🛡️ **Doctrina del Buen Samaritano:** La actuación de buena fe ajustada a protocolos institucionales protege al custodio de eventuales reclamos legales post-intervención.

---

## 📝 Cuestionario de Autoevaluación — Módulo 7

### Preguntas de Opción Múltiple

**1. ¿Cuál es la misión crítica del custodio como Primer Respondiente?**
- a) Esperar a que la ambulancia llegue antes de intervenir.
- b) Cerrar la brecha temporal entre el colapso médico y la llegada del soporte vital avanzado sin perder la seguridad perimetral. ✅
- c) Trasladar inmediatamente al dignatario sin evaluar sus signos vitales.
- d) Solicitar autorización judicial por radio.

**2. En la Fase 1 del Socorrismo Táctico (Atención Bajo Fuego - CUF), ¿cuál es la única intervención médica prioritaria?**
- a) Realizar ventilaciones boca a boca.
- b) Aplicación de Torniquete Táctico ante hemorragia masiva en extremidad. ✅
- c) Colocar el DEA.
- d) Realizar curaciones menores.

**3. ¿Cuál es la frecuencia e intensidad recomendada para las compresiones torácicas en una RCP de alta calidad?**
- me) 60 a 80 compresiones por minuto.
- b) 100 a 120 compresiones por minuto con profundidad de al menos 5 cm. ✅
- c) 150 a 200 compresiones por minuto.
- d) Compresiones superficiales de 2 cm.

**4. ¿Qué acción debe realizar el custodio inmediatamente después de que el DEA administra una descarga eléctrica?**
- a) Tomar el pulso durante 2 minutos.
- b) Reanudar inmediatamente las compresiones torácicas. ✅
- c) Apagar el dispositivo.
- d) Retirar los parches del tórax.

**5. En el protocolo M.A.R.C.H., ¿qué representa la letra "M"?**
- a) Medicación avanzada
- b) Massive Bleeding (Control de Hemorragias Exanguinantes) ✅
- c) Monitoreo cardíaco
- d) Movilización de la víctima

**6. ¿Qué función cumple el "Puntero de Recepción" en una crisis médica?**
- a) Administrar las inyecciones de adrenalina.
- b) Interceptar y guiar a la ambulancia desde el anillo exterior sin romper la seguridad de la cápsula. ✅
- c) Conducir el Móvil A.
- d) Redactar el informe de novedades.

**7. ¿Qué maniobra táctica se utiliza para preservar la imagen pública del dignatario durante una emergencia médica en vía pública?**
- a) Traslado sin sirena.
- b) Formación en Caja (creación de una barrera física visual con personal o cubiertas). ✅
- c) Despliegue de humo táctico.
- d) Ocultar el vehículo.

**8. Ante un dignatario inconsciente que no respira, ¿qué principio legal ampara la actuación del custodio?**
- a) Legítima defensa del vehículo.
- b) Consentimiento implícito y doctrina del Buen Samaritano. ✅
- c) Orden de servicio discrecional.
- d) Estado de sitio.

### Preguntas de Desarrollo

**9.** Describa las tres fases del Socorrismo Táctico (CUF, TFC y TACEVAC) y explique cómo varía el comportamiento del equipo de seguridad en cada una.

**10.** Explique detalladamente el procedimiento paso a paso para la operación segura de un Desfibrilador Automático Externo (DEA) en un recambio de cápsula.

**11.** Fundamente por qué la **Seguridad de la Escena** es el paso previo ineludible antes de iniciar maniobras de reanimación médica.

**12.** Diseñe un esquema de comunicación (reporte SBAR) para solicitar auxilio médico al 911/SEM durante un ataque con herido balístico en el convoy.

---

## 📖 Glosario del Módulo 7

| Término | Definición |
|---------|------------|
| **CAT (Combat Application Tourniquet)** | Torniquete oclusivo arterial utilizado para detener hemorragias masivas en extremidades |
| **DEA (Desfibrilador Automático Externo)** | Dispositivo portátil que analiza el ritmo cardíaco y administra descargas para revertir arritmias letales |
| **Formación en Caja** | Disposición táctica de los custodios para bloquear la visión del público y medios durante una asistencia médica |
| **M.A.R.C.H.** | Acrónimo táctico de evaluación de trauma (Massive bleeding, Airway, Respiration, Circulation, Hypothermia) |
| **Puntero de Recepción** | Custodio de avanzada designado para recibir e interceptar a la ambulancia en la periferia |
| **RCP (Reanimación Cardiopulmonar)** | Maniobra de emergencia consistente en compresiones torácicas para mantener la perfusión vital |
| **TCCC / TECC** | Acrónimos de Socorrismo Táctico en Operaciones de Combate / Emergencias Médicas Tácticas |
| **Torniquete Alto y Apretado** | Colocación inicial del torniquete en la parte más proximal de la extremidad durante fuego activo |

---

## ✅ Checklist Operativo — Módulo 7

Antes de iniciar cualquier servicio de custodia o comisión vehicular:

- [ ] Verificar el maletín médico táctico (IFAK / Botiquín de Cápsula) en el Móvil A
- [ ] Inspeccionar la presencia y nivel de batería del Desfibrilador Automático Externo (DEA)
- [ ] Comprobar que cada custodio lleve un Torniquete Táctico (CAT) de acceso rápido en su chaleco/cinturón
- [ ] Verificar la presencia de gasas hemostáticas y vendajes compresivos israelíes
- [ ] Repasar la ubicación de los Centros de Trauma y Hospitales de Derivación en la ruta
- [ ] Asignar el rol de "Puntero de Recepción" dentro de la avanzada para la coordinación médica
- [ ] Verificar el funcionamiento del canal de radio de emergencias médicas (SEM/911)
- [ ] Repasar el protocolo de Formación en Caja para el blindaje de la privacidad del VIP
- [ ] Comprobar el estado de las mantas térmicas e insumos para control de hipotermia

---

> **Fuentes doctrinales:**  
> - Custodia VIP: Respuesta Médica Inmediata — Policía de Tierra del Fuego  
> - Guías de Soporte Vital Básico de la AHA (American Heart Association)  
> - Estándares TCCC/TECC (Tactical Emergency Casualty Care)

---

*Módulo 7 de 8 — Manual de Protección y Seguridad para Dignatarios*  
*Próximo módulo: **Módulo 8 — Protocolo Estratégico Integral y Manual Institucional Completo***
`,Bi=`# MÓDULO 8: PROTOCOLO ESTRATÉGICO INTEGRAL, GESTIÓN DE CRISIS Y MANUAL INSTITUCIONAL MAESTRO

---

> **Manual de Protección y Seguridad para Dignatarios**  
> **Policía de la Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur**  
> **División Custodia Gubernamental**  
> Edición 2026

---

## 🎯 Objetivos de Aprendizaje

Al finalizar este módulo, el alumno será capaz de:

1. Consolidar la **Doctrina Unificada de Protección de Dignatarios** integrando los 8 módulos del manual maestro.
2. Manejar la **Cadena de Mando Táctica** en operaciones complejas de escala provincial, nacional e internacional.
3. Administrar el **Protocolo de Gestión de Crisis e Incidentes Críticos** en cápsula o emplazamiento.
4. Aplicar el **Plan de Evacuación de Emergencia Extrema (PEX)** en escenarios de fuego hostil o colapso de seguridad.
5. Gestionar el **Puesto de Comando Unificado (PCU)** y la coordinación interinstitucional (Policía Provincial, Fuerzas Federales, Fuerzas Armadas y Servicios de Emergencia).
6. Implementar los **Estándares de Calidad Operativa y Evaluación de Desempeño** del personal de custodia.
7. Dominar la **Estructura Modular Completa del Manual Institucional 2026**.

---

## 8.1. Arquitectura de la Doctrina Unificada de Protección

El sistema de protección de la **Policía de la Provincia de Tierra del Fuego** concibe la seguridad de dignatarios como una matriz dinámica e integrada donde ningún módulo actúa de manera aislada:

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────────┐
│                     MATRIZ INTEGRAL DE PROTECCIÓN (MIP)                         │
├─────────────────┬─────────────────┬─────────────────────┬───────────────────────┤
│  DOCTRINA & LEGA│  OPERACIONES    │  TÁCTICAS Y AVANZA. │  ESPECIALIDADES       │
│  Módulos 1 y 5  │  Módulos 2 y 3  │  Módulo 4           │  Módulos 6, 7 y 8     │
│  Principios / CP│  Formaciones /  │  Emplazamiento /    │  Bioseguridad / TECC  │
│  Res. 202/00-JP │  Planeamiento   │  Rutas / Cuarto Seg.│  Gestión de Crisis    │
└─────────────────┴─────────────────┴─────────────────────┴───────────────────────┘
\`\`\`

![Esquema Institucional de Operaciones](./recursos/imagenes/mod8_esquema.svg)

---

## 8.2. Comando, Control y Coordinación Interagencial (C4I)

![Comando, Control y Coordinación Interagencial (C4I)](./recursos/imagenes/mod8_c4i.svg)


En operaciones con presencia de autoridades nacionales o internacionales, el **Jefe de la División Custodia Gubernamental** asume la responsabilidad del **Puesto de Comando Unificado (PCU)**:

\`\`\`
                        ┌─────────────────────────┐
                        │ PUESTO DE COMANDO (PCU) │
                        │  Jefe División Custodia │
                        └────────────┬────────────┘
                                     │
       ┌─────────────────────────────┼─────────────────────────────┐
       ▼                             ▼                             ▼
┌──────────────┐              ┌──────────────┐              ┌──────────────┐
│  CÁPSULA VIP │              │  AVANZADA /  │              │ ENLACE EXTERN│
│ Jefe de Esc. │              │ RECONOCIMIENTO│             │ FF.AA / FF.SE│
└──────────────┘              └──────────────┘              └──────────────┘
\`\`\`

### Reglas de Coordinación Interagencial:
1. 🪪 **Unicidad de Mando:** Una sola autoridad táctica dirige la cápsula (Jefe de Cápsula).
2. 📻 **Canal Radio Unificado:** Frecuencia táctica encriptada para todo el personal participante (Policía Provincial, PFA, GNA, PNA, PSA).
3. 🗺️ **Intercambio de Inteligencia:** Compartir la Matriz de Riesgos y Orden de Operaciones (OPORD) 24 horas antes del despliegue.

---

## 8.3. Gestión de Crisis en Custodia: Algoritmo de Respuesta Inmediata

Ante una interrupción violenta de la seguridad (atentado, emboscada o desorden masivo), la custodia activa el **Algoritmo de Respuesta Rápida (C.E.E.)**:

![Despliegue de Operativa de Emergencia](./recursos/imagenes/mod8_operativa.svg)

\`\`\`
[ 1. COBERTURA (COVER) ] ───> Interposición física del cuerpo del custodio / escudo.
           │
           ▼
[ 2. EVACUACIÓN (EVAC) ] ───> Extracción en dirección opuesta a la agresión.
           │
           ▼
[ 3. ESCAPE (ESCAPE) ]   ───> Abordaje al Móvil A o Cuarto Seguro pre-designado.
\`\`\`

---

## 8.4. Plan de Evacuación Extrema (PEX)

![El Plan PEX: Puntos de Extracción en Crisis](./recursos/imagenes/mod8_pex.svg)


El PEX es la directiva táctica final cuando la posición o ruta principal es comprometida:

- 🚪 **Punto de Extracción Primario (PEP):** Vehículo A en movimiento continuo.
- 🏢 **Punto de Extracción Secundario (PES):** Cuarto Seguro con adyacencia comprobada.
- 🚁 **Punto de Extracción Terciario (PET):** Zona de helipad o evacuación marítima/aeroportuaria coordinada con fuerzas de soporte.

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                      REGLA INQUEBRANTABLE PEX                    │
├──────────────────────────────────────────────────────────────────┤
│ La cápsula NUNCA se queda a combatir. El objetivo táctico de la │
│ custodia es la evacuación del VIP, no la neutralización total   │
│ de la amenaza (función reservada a la escolta/fuerzas de apoyo). │
└──────────────────────────────────────────────────────────────────┘
\`\`\`

---

## 8.5. Estructura Completa del Manual Unificado 2026

![Estructura Modular Completa del Manual Maestro](./recursos/imagenes/mod8_manual_completo.svg)


Con la finalización del Módulo 8, el **Manual de Protección y Seguridad para Dignatarios de la Policía de Tierra del Fuego** queda consolidado de la siguiente manera:

\`\`\`
f:\\Manual Dignatarios IA\\manual\\
├── seccion_I_fundamentos\\
│   └── modulo_01_fundamentos_y_doctrina.md         (Doctrina, Círculos, Roles)
├── seccion_II_operaciones\\
│   ├── modulo_02_tecnicas_y_tacticas.md           (Formaciones, Emboscadas)
│   └── modulo_03_planeamiento_operativo.md        (FODA, Matriz Riesgo, OPORD)
├── seccion_III_tacticas\\
│   ├── modulo_04_estudio_emplazamiento.md         (Avanzadas, Cuarto Seguro)
│   └── modulo_05_marco_legal_y_actuacion.md       (Bases Legales, Art. 34 CP)
└── seccion_IV_especialidades\\
    ├── modulo_06_bioseguridad_y_qbrn.md            (Protección Biológica, EPP)
    ├── modulo_07_primeros_auxilios_y_tecc.md       (TECC/TCCC, RCP, DEA)
    └── modulo_08_protocolo_estrategico_integral.md (Gestión Crisis, Manual Maestro)
\`\`\`

---

## 📝 Cuestionario Final de Evaluación Institucional — Módulo 8

### Preguntas de Opción Múltiple

**1. ¿Cuál es el objetivo principal del Módulo 8 en la estructura del manual?**
- a) Sustituir los módulos anteriores.
- b) Consolidar la Doctrina Unificada de Protección, la Gestión de Crisis y el Comando C4I. ✅
- c) Eliminar los controles de bioseguridad.
- d) Normar únicamente el uso de uniformes.

**2. ¿Quién asume la responsabilidad del Puesto de Comando Unificado (PCU) en operaciones provinciales?**
- a) El chofer del Móvil A.
- b) El Jefe de la División Custodia Gubernamental. ✅
- c) Cualquier efectivo franco de servicio.
- d) El encargado del protocolo del dignatario.

**3. ¿Qué significan las siglas del algoritmo C.E.E. de respuesta inmediata ante agresión?**
- a) Control, Evaluación y Emboscada.
- b) Cobertura (Cover), Evacuación (Evac) y Escape (Escape). ✅
- c) Comunicación, Enlace y Evacuación.
- d) Cobertura, Enlace y Extracción.

**4. ¿Cuál es la regla inquebrantable del equipo de custodia durante un ataque armado?**
- a) Permanecer a combatir hasta neutralizar a todos los atacantes.
- b) Priorizar la cobertura y evacuación inmediata del VIP, evitando entablar combate prolongado. ✅
- c) Rerdirse ante la amenaza.
- d) Abandonar los vehículos y huir a pie.

**5. ¿Qué documento operativo debe compartirse con las fuerzas federales 24 horas antes de una visita oficial?**
- a) El inventario de armamento personal.
- b) La Matriz de Riesgo y la Orden de Operaciones (OPORD). ✅
- c) El parte médico de la guardia.
- d) El libro de novedades del cuartel.

**6. ¿Qué función cumple el Cuarto Seguro en el Plan de Evacuación Extrema (PEX)?**
- a) Depósito de equipaje del dignatario.
- b) Punto de Extracción Secundario (PES) para refugio temporal fortificado si la ruta principal está bloqueada. ✅
- c) Sala de descanso de los choferes.
- d) Puesto de prensa.

**7. ¿Qué norma institucional ampara la totalidad del Manual Unificado 2026?**
- a) Código de Comercio
- b) Doctrina Institucional y Resoluciones de la Jefatura de Policía de Tierra del Fuego. ✅
- c) Ley Municipal de Tránsito
- d) Convenio colectivo de trabajo

**8. En el comando interagencial, la existencia de un Canal Radio Unificado busca:**
- a) Que los curiosos escuchen la frecuencia.
- b) Garantizar la comunicación encriptada y coordinada entre todas las fuerzas participantes en tiempo real. ✅
- c) Evitar el uso de teléfonos celulares.
- d) Transmitir música durante el traslado.

### Preguntas de Desarrollo

**9.** Explique la integración de las cuatro secciones del manual (Fundamentos, Operaciones, Tácticas y Especialidades) en un operativo real de protección del Gobernador.

**10.** Desarrolle la secuencia completa del Plan de Evacuación Extrema (PEX) ante una emboscada con armas pesadas a la cápsula vehicular.

**11.** Describa los principios del Comando, Control y Coordinación Interagencial (C4I) cuando la custodia provincial trabaja en conjunto con la Casa Militar / Presidencia de la Nación.

**12.** Elaborar una síntesis del "Deber Ser" del custodio de la Policía de Tierra del Fuego basándose en los 8 módulos del manual.

---

## 📖 Glosario Final del Manual Maestro

| Término | Definición |
|---------|------------|
| **C4I** | Comando, Control, Comunicaciones, Computación e Inteligencia Operativa |
| **Cápusla VIP** | Dispositivo central de vehículos y custodios que rodean directamente al protegido |
| **C.E.E.** | Algoritmo de reacción táctica: Cobertura, Evacuación y Escape |
| **OPORD (Orden de Operaciones)** | Documento formal que detalla misiones, roles, rutas y frecuencias de un operativo |
| **PCU (Puesto de Comando Unificado)** | Centro táctico desde donde se supervisa y dirige la operación en tiempo real |
| **PEP / PES / PET** | Puntos de Extracción Primario, Secundario y Terciario en planes de evacuación |
| **PEX** | Plan de Evacuación Extrema ante falla o colapso del perímetro primario |
| **Teoría Esférica** | Cobertura tridimensional de seguridad (360° en horizontal y vertical) |

---

## ✅ Checklist Maestro Operativo Institucional

Antes de autorizar el despliegue de cualquier comisión o cápsula gubernamental:

- [ ] Verificación de la Orden de Operaciones (OPORD) firmada por la Jefatura de División
- [ ] Realización de la Avanzada y requisa técnica del emplazamiento (Regla de Adyacencia)
- [ ] Inspección técnica y desinfección en dos pasos (*Two-Step*) de los móviles A, B y C
- [ ] Control de portación de credenciales (Res. 202/00-JP), armamento y torniquetes CAT
- [ ] Verificación de la presencia del Desfibrilador Automático Externo (DEA) y botiquín TECC
- [ ] Enlace de prueba en la Frecuencia Táctica Encriptada Interagencial
- [ ] Briefing de seguridad con el dignatario (rutas, vehículos y protocolo de emergencia)
- [ ] Confirmación de disponibilidad de Cuarto Seguro y Puntos de Extracción (PEX)
- [ ] Ratificación del principio de No Obsecuencia, Discreción y Secreto Profesional

---

> **Doctrina Oficial:**  
> **Policía de la Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur**  
> *División Custodia Gubernamental — Edición Unificada 2026*

---

*Fin del Módulo 8 — MANUAL COMPLETO DE PROTECCIÓN Y SEGURIDAD PARA DIGNATARIOS TERMINADO.*
`;function Vi(e){return e?e.replace(/f:\/(?:Manual%20Dignatarios%20IA|Manual Dignatarios IA)\//gi,`/`).replace(/\.?\/recursos\/imagenes\//g,`/recursos/imagenes/`).replace(/!\[Portada Módulo[^\]]*\]\([^)]+\)\s*/gi,``).replace(/!\[Diagrama Adicional de Custodia[^\]]*\]\([^)]+\)\s*/gi,``).replace(/!\[Análisis de Riesgo Adicional[^\]]*\]\([^)]+\)\s*/gi,``).replace(/\b(mod[1-8]_[a-z0-9_-]+)\.(?:png|jpg)/gi,`$1.svg`):``}var Hi=[{id:1,slug:`01-conceptos-basicos`,title:`Módulo 1: Fundamentos y Doctrina de la Custodia de Dignatarios`,shortTitle:`Fundamentos y Doctrina`,section:`Sección I: Fundamentos Doctrinales`,cover:`/recursos/imagenes/mod1_cover.svg`,description:`Filosofía proactiva "Silencio y Soberanía", Ecuación del Riesgo, perfil del custodio de élite y Código de Colores de Cooper.`,hasMap:!1,hasDiagram:!0,durationMin:45,rawContent:Vi(Ni),keyConcepts:[`Investidura sobre cuerpo físico: protección institucional`,`Ecuación: Vulnerabilidad + Amenaza = Riesgo táctico`,`Código de Cooper: Blanco, Amarillo (base), Naranja, Rojo`,`Círculos Concéntricos: Anillos Interior, Medio y Exterior`]},{id:2,slug:`02-tecnicas-tacticas`,title:`Módulo 2: Técnicas y Tácticas de Ejecución Operacional`,shortTitle:`Técnicas y Tácticas`,section:`Sección II: Operaciones de Custodia`,cover:`/recursos/imagenes/mod2_cover.svg`,description:`Roles de la cápsula (TL, Advance, Apoyos), formaciones a pie (Diamante, Cuña, Caja), convoy vehicular y drills de emboscada.`,hasMap:!1,hasDiagram:!0,durationMin:60,rawContent:Vi(Pi),keyConcepts:[`Geometría defensiva: Formaciones Diamante, Cuña y Caja`,`Protocolo C.E.E.: Cubrir, Evacuar, Escapar`,`Convoy: Móvil Scout, Piloto, Móvil A (VIP), Retaguardia`,`Regla de oro: La cápsula NUNCA se queda a combatir`]},{id:3,slug:`03-planeamiento`,title:`Módulo 3: Planeamiento Operativo y Estratégico`,shortTitle:`Planeamiento Operativo`,section:`Sección II: Operaciones de Custodia`,cover:`/recursos/imagenes/mod3_cover.svg`,description:`Matriz de riesgos, Análisis FODA operacional, cálculo inverso de itinerarios y redacción de la Orden de Operaciones (OPORD).`,hasMap:!0,hasDiagram:!0,durationMin:60,rawContent:Vi(Fi),keyConcepts:[`Los 5 Párrafos de la OPORD (Situación, Misión, Ejecución, Logística, Comando)`,`Planificación inversa cronológica y cálculo de contingencias`,`Rutas Primaria, Secundaria y de Escape Hospitalario`,`Matriz de impacto y probabilidad de amenazas`]},{id:4,slug:`04-estudio-emplazamiento`,title:`Módulo 4: Estudio de Emplazamiento y Avanzadas`,shortTitle:`Emplazamiento y Avanzadas`,section:`Sección III: Tácticas Especiales`,cover:`/recursos/imagenes/mod4_cover.svg`,description:`Reconocimiento de infraestructura, certificación de Safe Room, regla de adyacencia hotelera y neutralización de Chokepoints.`,hasMap:!0,hasDiagram:!0,durationMin:50,rawContent:Vi(Ii),keyConcepts:[`Criterios balísticos y de cerrajería del Safe Room`,`Regla de adyacencia: control 360° en alojamientos hoteleros`,`Barrido técnico preventivo y detección de microcámaras/escuchas`,`Puntos de estrangulamiento (Chokepoints) y rutas de evacuación`]},{id:5,slug:`05-bases-legales`,title:`Módulo 5: Marco Legal y Actuación Policial`,shortTitle:`Marco Legal y Actuación`,section:`Sección III: Tácticas Especiales`,cover:`/recursos/imagenes/mod5_cover.svg`,description:`Legítima defensa de terceros (Art. 34 inc. 6 y 7 C.P.), Tríada de la Amenaza, Uso Racional y Progresivo de la Fuerza y Res. 202/00-JP.`,hasMap:!1,hasDiagram:!0,durationMin:45,rawContent:Vi(Li),keyConcepts:[`Tríada de Amenaza Letal: Capacidad + Oportunidad + Intención`,`Requisitos Art. 34 CP: Agresión ilegítima, necesidad y falta de provocación`,`Escalamiento del uso de la fuerza según Resolución 202/00-JP`,`Preservación de la escena e informe pericial post-evento`]},{id:6,slug:`06-bioseguridad`,title:`Módulo 6: Bioseguridad Táctica y Amenazas QBRN`,shortTitle:`Bioseguridad y QBRN`,section:`Sección IV: Especialidades y Contingencias`,cover:`/recursos/imagenes/mod6_cover.svg`,description:`Protección contra agentes químicos, biológicos, radiológicos y nucleares, desinfección vehicular Two-Step y relevo limpio de brigadas.`,hasMap:!1,hasDiagram:!0,durationMin:40,rawContent:Vi(Ri),keyConcepts:[`Doctrina de las Tres Capas de Protección Biológica`,`Procedimiento Two-Step: Desinfección mecánica + grado hospitalario`,`Protocolo de Relevo Limpio con brigada de reserva`,`Equipos de Protección Individual (EPP) y máscaras tácticas`]},{id:7,slug:`07-rcp-vip`,title:`Módulo 7: Primeros Auxilios Tácticos y Soporte Vital (TECC / RCP)`,shortTitle:`Primeros Auxilios y TECC`,section:`Sección IV: Especialidades y Contingencias`,cover:`/recursos/imagenes/mod7_cover.svg`,description:`Socorrismo Táctico Operacional (TECC), Algoritmo MARCH para trauma balístico, torniquetes CoTCCC, RCP de alta calidad y DEA.`,hasMap:!1,hasDiagram:!0,durationMin:55,rawContent:Vi(zi),keyConcepts:[`Algoritmo M.A.R.C.H.: Hemorragia Masiva, Vía Aérea, Respiración, Circulación, Hipotermia`,`Torniquete táctico: aplicación "High & Tight" bajo amenaza activa`,`RCP de alta calidad (100-120 cpm, ≥5 cm de profundidad) y uso del DEA`,`Protocolo SBAR para transferencia al Sistema de Emergencias Médicas`]},{id:8,slug:`08-conduccion-evasiva`,title:`Módulo 8: Protocolo Estratégico Integral y Conducción Evasiva`,shortTitle:`Protocolo Integral y Conducción`,section:`Sección IV: Especialidades y Contingencias`,cover:`/recursos/imagenes/mod8_cover.svg`,description:`Maniobras vehiculares evasivas (J-Turn, Bootlegger, Embestida Ariete), comando central C4I, Plan de Evacuación Extrema (PEX) y doctrina integrada.`,hasMap:!0,hasDiagram:!0,durationMin:65,rawContent:Vi(Bi),keyConcepts:[`Dinámica vehicular táctica: J-Turn 180°, Bootlegger y Ramming defensivo`,`PEX: Puntos de Extracción Primario (PEP), Secundario (PES) y Terciario (PET)`,`Centro de Comando Unificado C4I e interoperabilidad radial encriptada`,`Auditoría y lecciones aprendidas post-operación`]}],Ui={moduloSlug:`conceptos-basicos`,notaMinima:70,umbralVariante:50,maxIntentos:3,variantes:{A:[{id:`1A1`,p:`¿Cuál es el lema que define la identidad del equipo?`,o:[`Silencio y Soberanía`,`Fuerza y Honor`,`Velocidad y Precisión`,`Lealtad Absoluta`],c:0},{id:`1A2`,p:`La Vulnerabilidad es…`,o:[`Actor externo con intención de dañar`,`Debilidad intrínseca del sistema`,`Probabilidad de daño`,`Un tipo de amenaza`],c:1},{id:`1A3`,p:`El CPO rara vez puede eliminar la Amenaza, pero siempre puede…`,o:[`Neutralizarla`,`Ignorarla`,`Reducir la Vulnerabilidad`,`Delegarla`],c:2},{id:`1A4`,p:`¿Qué condición de Cooper es el estado base durante todo el turno?`,o:[`Blanca`,`Amarilla`,`Naranja`,`Roja`],c:1},{id:`1A5`,p:`La Condición Negra se caracteriza por…`,o:[`Escaneo 360°`,`Anomalía identificada`,`Amenaza letal`,`Pánico y bloqueo (>175 lpm)`],c:3},{id:`1A6`,p:`¿Cuál NO es un atributo del custodio de élite?`,o:[`Inteligencia Emocional`,`Presencia Disuasiva`,`Impulsividad táctica`,`Discreción Absoluta`],c:2},{id:`1A7`,p:`El Riesgo se define como…`,o:[`Debilidad interna`,`Probabilidad de que una Amenaza explote una Vulnerabilidad`,`Un actor externo`,`Un plan de evacuación`],c:1},{id:`1A8`,p:`En Condición Roja, la reacción del CPO es…`,o:[`Instintiva por entrenamiento previo`,`Improvisada`,`De espera`,`De consulta al TL`],c:0},{id:`1A9`,p:`La discreción absoluta significa…`,o:[`No hablar con el VIP`,`Lo que se ve en el círculo muere en el círculo`,`No usar radio`,`No saludar`],c:1},{id:`1A10`,p:`Un ejemplo de Amenaza es…`,o:[`Un vehículo sin blindaje`,`Una salida no controlada`,`Un tirador activo`,`Falta de IFAK`],c:2}],B:[{id:`1B1`,p:`La protección de dignatarios es una disciplina…`,o:[`Reactiva`,`Proactiva`,`Pasiva`,`Improvisada`],c:1},{id:`1B2`,p:`Un ejemplo de Vulnerabilidad es…`,o:[`Un manifestante agresivo`,`Un vehículo sin blindaje`,`Un tirador activo`,`Un accidente`],c:1},{id:`1B3`,p:`El objetivo supremo del custodio es…`,o:[`Eliminar amenazas`,`Evitar que el VIP se exponga al riesgo`,`Mostrar fuerza`,`Escoltar rápido`],c:1},{id:`1B4`,p:`¿Qué condición implica anomalía detectada?`,o:[`Blanca`,`Amarilla`,`Naranja`,`Roja`],c:2},{id:`1B5`,p:`El ritmo cardíaco asociado a Condición Negra supera…`,o:[`100 lpm`,`140 lpm`,`175 lpm`,`200 lpm`],c:2},{id:`1B6`,p:`La Presencia Disuasiva se logra con…`,o:[`Vestimenta impecable y comunicación firme`,`Gritos`,`Armas visibles`,`Uniforme llamativo`],c:0},{id:`1B7`,p:`Amenaza es…`,o:[`Debilidad del sistema`,`Actor o factor externo con capacidad e intención`,`Probabilidad`,`Un axioma táctico`],c:1},{id:`1B8`,p:`El lema 'Silencio y Soberanía' implica…`,o:[`Operar de manera invisible sin interrumpir la agenda del VIP`,`No hablar nunca`,`Solo custodiar de noche`,`No usar radio`],c:0},{id:`1B9`,p:`El estado base del turno es…`,o:[`Blanco`,`Amarillo`,`Naranja`,`Rojo`],c:1},{id:`1B10`,p:`¿Cuál NO es una consecuencia de la falta de entrenamiento?`,o:[`Reacción instintiva correcta`,`Bloqueo en Condición Negra`,`Pánico`,`Falla del sistema nervioso`],c:0}],C:[{id:`1C1`,p:`El CPO debe escanear constantemente a…`,o:[`180°`,`270°`,`360°`,`90°`],c:2},{id:`1C2`,p:`La fórmula táctica del riesgo es…`,o:[`Amenaza + Arma`,`Vulnerabilidad ÷ Amenaza`,`Probabilidad × Impacto`,`Fuerza + Intención`],c:2},{id:`1C3`,p:`La inteligencia emocional permite al custodio…`,o:[`Gritar mejor`,`Mantener la calma bajo estrés extremo`,`Correr más rápido`,`Ser más fuerte`],c:1},{id:`1C4`,p:`Un axioma táctico clave es…`,o:[`Siempre combatir`,`Reducir la Vulnerabilidad para minimizar el Riesgo`,`Nunca evacuar`,`Ignorar el entorno`],c:1},{id:`1C5`,p:`Condición Roja significa…`,o:[`Descanso`,`Vigilancia pasiva`,`Amenaza letal — acción`,`Duda`],c:2},{id:`1C6`,p:`Discreción absoluta es sinónimo de…`,o:[`Confidencialidad total del círculo`,`Silencio radial`,`Invisibilidad física`,`Anonimato`],c:0},{id:`1C7`,p:`El custodio moderno se describe como…`,o:[`Guardaespaldas tradicional`,`Arquitecto Invisible`,`Escolta visible`,`Guardián pasivo`],c:1},{id:`1C8`,p:`¿Qué ejemplo corresponde a Amenaza?`,o:[`Puerta sin cerradura`,`Personal insuficiente`,`Manifestante agresivo`,`Falta de radio`],c:2},{id:`1C9`,p:`La Condición Blanca debe ser evitada por…`,o:[`Civiles en su hogar`,`El CPO en servicio`,`El VIP`,`El conductor táctico`],c:1},{id:`1C10`,p:`El axioma médico-táctico sobre RCP indica que NO se detiene hasta…`,o:[`Llegue el TL`,`El agente esté exhausto, sea relevado o se certifique deceso`,`Pasados 5 min`,`Llegue un policía`],c:1}]}},Wi={moduloSlug:`tecnicas-tacticas`,notaMinima:70,umbralVariante:50,maxIntentos:3,variantes:{A:[{id:`2A1`,p:`¿Cuál es la función principal del Jefe de Custodia (TL) en la cápsula?`,o:[`Combatir al agresor`,`Cubrir la silueta del VIP y evacuarlo`,`Inspeccionar el terreno previamente`,`Conducir el vehículo principal`],c:1},{id:`2A2`,p:`¿Qué formación a pie es óptima para desplazamientos en espacios abiertos con público disperso?`,o:[`Formación en Diamante (Rombo)`,`Formación en Columna Simple`,`Línea de Tiradores`,`Cuña Invertida Cerrada`],c:0},{id:`2A3`,p:`Ante una multitud densa u hostil, la formación recomendada para penetrar y abrir brecha es…`,o:[`Caja`,`Cuña`,`Diamante`,`Columna`],c:1},{id:`2A4`,p:`¿Qué significan las siglas del Algoritmo C.E.E. ante agresión armada?`,o:[`Combatir, Eliminar, Evaluar`,`Cubrir, Evacuar, Escapar`,`Coordinar, Enlazar, Esperar`,`Cerrar, Encapsular, Entregar`],c:1},{id:`2A5`,p:`En la técnica del reloj, 'Amenaza a las 12' indica agresión ubicada al…`,o:[`Frente del avance del VIP`,`Flanco derecho`,`Espalda de la formación`,`Flanco izquierdo`],c:0},{id:`2A6`,p:`El rol del Agente de Avanzada (Advance) es…`,o:[`Permanecer junto al VIP todo el tiempo`,`Ser los 'ojos ciegos', inspeccionando el emplazamiento antes de la llegada`,`Conducir el Follow-up Car`,`Efectuar disparos disuasivos`],c:1},{id:`2A7`,p:`Durante un ataque sorpresivo, la Fase 2 del drill de emboscada corresponde a…`,o:[`Voz de alerta radial`,`Body Cover (cobertura física del VIP reduciendo su silueta)`,`Persecución del agresor`,`Esperar refuerzos`],c:1},{id:`2A8`,p:`¿Qué debe hacer el Conductor Táctico ante un hostigamiento en el descenso?`,o:[`Descender con arma en mano para abatir al atacante`,`Permanecer al volante con motor encendido listo para la extracción`,`Ayudar a cargar el equipaje del VIP`,`Apagar el vehículo`],c:1},{id:`2A9`,p:`La formación en Caja es especialmente eficaz para…`,o:[`Pasillos anchos, túneles y perímetros interiores de edificios`,`Campo abierto sin obstáculos`,`Terreno boscoso`,`Conciertos multitudinarios`],c:0},{id:`2A10`,p:`El principio táctico 'Off the X' significa…`,o:[`Permanecer en el punto de impacto abriendo fuego`,`Salir de inmediato de la zona de muerte / Kill Zone`,`Atrincherarse en el vehículo averiado`,`Negociar con el agresor`],c:1}],B:[{id:`2B1`,p:`La técnica 'Body Cover' realizada por el TL tiene como objetivo primordial…`,o:[`Interponer el propio cuerpo y chaleco balístico entre el fuego y los órganos vitales del VIP`,`Repeler la agresión con disparo doble`,`Dar órdenes verbales a la multitud`,`Correr delante del convoy`],c:0},{id:`2B2`,p:`Los agentes en flancos y retaguardia tienen la responsabilidad de…`,o:[`Mantener el anillo de contención 360° y neutralizar el vector de fuego para permitir la fuga`,`Filmar el incidente para auditoría`,`Proteger al chofer del vehículo`,`Mantener silencio absoluto`],c:0},{id:`2B3`,p:`Si la amenaza surge a las '6 en punto', la agresión proviene de…`,o:[`La retaguardia de la formación`,`El frente`,`El flanco derecho`,`El cielo`],c:0},{id:`2B4`,p:`¿Cuál es la distancia de seguridad recomendada en la cápsula a pie en entornos normales?`,o:[`Contacto físico permanente con el VIP`,`Distancia de un brazo extendido (burbuja de 1 a 1.5 metros)`,`10 metros de distancia`,`20 metros de distancia`],c:1},{id:`2B5`,p:`En un pasillo angosto de hotel, la formación táctica más adaptativa es…`,o:[`Cuña amplia`,`Columna o hilera táctica protegiendo frente y espalda`,`Diamante extendido`,`Círculo cerrado`],c:1},{id:`2B6`,p:`La voz de alerta '¡Contacto 3 en punto!' exige al equipo…`,o:[`Girar y orientar la cobertura y armas hacia la derecha del sentido de marcha`,`Mirar al frente y acelerar`,`Arrojarse al suelo`,`Subir al vehículo de inmediato`],c:0},{id:`2B7`,p:`El principio de 'No enfrascarse en combate prolongado' responde a que…`,o:[`La misión de la custodia es la preservación del VIP mediante la evacuación, no la victoria militar`,`Las municiones son limitadas`,`El custodio no tiene autorización para disparar`,`La policía de calle resolverá el problema`],c:0},{id:`2B8`,p:`El Agente de Avanzada informa 'Ruta Verde' cuando…`,o:[`El recorrido y puntos de ingreso están despejados y asegurados`,`Hay presencia de prensa`,`Se suspende la actividad`,`Llegó el apoyo policial`],c:0},{id:`2B9`,p:`¿Qué acción realiza el TL mientras los flancos suprimen la agresión?`,o:[`Arrastra / guía al protegido en dirección opuesta al fuego hacia el vehículo o Safe Room`,`Dispara en ráfaga`,`Toma fotografías`,`Pide identificación al atacante`],c:0},{id:`2B10`,p:`En el Algoritmo C.E.E., el paso 'Escapar' culmina cuando…`,o:[`El VIP se encuentra en un vehículo en movimiento o en una Safe Room asegurada`,`El agresor depone las armas`,`Llegan los medios de prensa`,`Termina el turno`],c:0}],C:[{id:`2C1`,p:`La formación en Diamante se compone típicamente de…`,o:[`Punta, Flanco Izquierdo, Flanco Derecho, Retaguardia y TL con el VIP en el centro`,`Dos agentes en fila`,`Cuatro agentes detrás del VIP`,`Ocho agentes en línea frontal`],c:0},{id:`2C2`,p:`¿Cuál es la prioridad de fuego durante la fase de supresión de emboscada?`,o:[`Fuego de precisión letal exclusivo`,`Fuego de cobertura / supresión para obligar al agresor a buscar resguardo mientras se evacua al VIP`,`Disparos al aire`,`No disparar bajo ninguna circunstancia`],c:1},{id:`2C3`,p:`Si el vehículo principal queda inutilizado en la Kill Zone, la extracción se efectúa…`,o:[`Mediante el Follow-up Car (vehículo de apoyo/escolta) que entra en posición de barrera`,`A pie esperando un taxi`,`Aguardando la grúa policial`,`Permitiendo que el VIP corra solo`],c:0},{id:`2C4`,p:`La técnica del reloj toma como referencia de las '12':`,o:[`El norte magnético`,`La dirección de avance o mirada del dignatario`,`La posición del sol`,`La ubicación del patrullero guía`],c:1},{id:`2C5`,p:`En eventos con alfombra roja y prensa lateral, la cápsula debe…`,o:[`Cerrar el flanco expuesto a la multitud manteniendo contacto visual constante con las manos`,`Retirarse y dejar al VIP con los periodistas`,`Apuntar las armas a la prensa`,`Desarmar la cápsula`],c:0},{id:`2C6`,p:`El concepto de 'Burbuja Protectora' implica…`,o:[`Un radio concéntrico infranqueable alrededor del VIP cuya densidad varía según el nivel de amenaza`,`Un vehículo con blindaje nivel 7`,`Un domo de vidrio antibalas`,`Un traje especial para el dignatario`],c:0},{id:`2C7`,p:`¿Qué acción NO debe ejecutar el personal de custodia durante un desplazamiento a pie?`,o:[`Escanear manos y movimientos corporales del entorno`,`Fijar la vista en el dignatario descuidando el perímetro de 360°`,`Mantener comunicación con la avanzada`,`Conocer las salidas de emergencia más cercanas`],c:1},{id:`2C8`,p:`Durante una emboscada con artefacto explosivo improvisado (IED), la reacción inmediata es…`,o:[`Acelerar / evacuar fuera del área de impacto secundario`,`Detenerse a inspeccionar el cráter`,`Buscar a los responsables entre el público`,`Reunir al equipo en el lugar de la explosión`],c:0},{id:`2C9`,p:`La posición del VIP en formaciones vehiculares o a pie siempre debe situarlo…`,o:[`En el núcleo protegido con mayor distancia respecto a las vías no controladas`,`En la vanguardia abriendo camino`,`En el asiento del conductor`,`En el último escalón del convoy`],c:0},{id:`2C10`,p:`La comunicación de evacuación '¡VÁMONOS, VÁMONOS!' debe ser emitida de forma…`,o:[`Firme, enérgica y acompañada de la tracción física del protegido`,`En susurro para no alarmar al público`,`Únicamente por radio en clave cifrada`,`Previa autorización de la fiscalía de turno`],c:0}]}},Gi={moduloSlug:`planeamiento`,notaMinima:70,umbralVariante:50,maxIntentos:3,variantes:{A:[{id:`3A1`,p:`¿Cuáles son las 5W del planeamiento táctico de operaciones?`,o:[`Quién, Qué, Cuándo, Dónde, Por qué`,`Fuerza, Fuego, Fuga, Frente, Flanco`,`Vehículo, Ruta, Hospital, Radio, Armamento`,`Alerta, Bloqueo, Cobertura, Disparo, Escape`],c:0},{id:`3A2`,p:`En el análisis FODA táctico, un vehículo blindado en óptimas condiciones representa una…`,o:[`Fortaleza interna`,`Oportunidad externa`,`Debilidad interna`,`Amenaza externa`],c:0},{id:`3A3`,p:`Una manifestación imprevista en la ruta programada constituye una…`,o:[`Fortaleza`,`Debilidad`,`Amenaza externa`,`Oportunidad`],c:2},{id:`3A4`,p:`¿Cuál es la fórmula cuantitativa del Riesgo en seguridad VIP?`,o:[`Riesgo = Probabilidad × Impacto`,`Riesgo = Amenaza ÷ Tiempo`,`Riesgo = Fuerza + Velocidad`,`Riesgo = Personal × Armamento`],c:0},{id:`3A5`,p:`En la matriz de riesgo, el nivel 'Rojo / Crítico' exige operativamente…`,o:[`Abortar la actividad o iniciar evacuación inmediata`,`Continuar con precaución`,`Solicitar un fotógrafo`,`Reducir la velocidad del convoy`],c:0},{id:`3A6`,p:`Un 'Choke Point' (punto de estrangulamiento) en la planificación de ruta es…`,o:[`Un tramo obligado y estrecho donde el convoy pierde velocidad o maniobra`,`Una autopista despejada de 4 carriles`,`El helipuerto de contingencia`,`El estacionamiento privado`],c:0},{id:`3A7`,p:`La 'Orden de Operaciones' (OPORD) debe distribuirse a…`,o:[`Todos los integrantes de la cápsula y apoyos policiales involucrados`,`Únicamente a la prensa`,`A los familiares del dignatario`,`A los organizadores del evento únicamente`],c:0},{id:`3A8`,p:`En la planificación de itinerarios, la regla fundamental de contingencia es…`,o:[`Definir al menos una ruta principal y dos rutas alternas verificadas`,`Utilizar siempre la misma ruta para generar familiaridad`,`Confiar únicamente en aplicaciones de tránsito en tiempo real`,`No informar la ruta a ningún custodio`],c:0},{id:`3A9`,p:`La falta de personal de relevo en un operativo prolongado se clasifica en el FODA como…`,o:[`Debilidad interna`,`Amenaza externa`,`Oportunidad táctica`,`Fortaleza`],c:0},{id:`3A10`,p:`La coordinación previa con el centro de trauma local permite…`,o:[`Garantizar disponibilidad de quirófano, sangre compatible y acceso directo a shockroom`,`Reservar habitaciones de hotel`,`Coordinar entrevistas públicas`,`Contratar ambulancias privadas sin equipamiento`],c:0}],B:[{id:`3B1`,p:`El 'Quién' en la regla de las 5W contempla el análisis de…`,o:[`El perfil del protegido, su comitiva, el equipo de escolta y potenciales agresores`,`El pronóstico del clima`,`El tipo de combustible del vehículo`,`El costo del operativo`],c:0},{id:`3B2`,p:`Un apoyo policial coordinado con cortes de tránsito representa en el FODA una…`,o:[`Oportunidad externa`,`Debilidad interna`,`Amenaza`,`Fortaleza interna`],c:0},{id:`3B3`,p:`Si un riesgo tiene Probabilidad Alta e Impacto Catastrófico, la respuesta táctica es…`,o:[`Riesgo Crítico: No autorizar el desplazamiento sin modificar itinerario y medidas de seguridad`,`Ignorar el riesgo si el VIP insiste`,`Delegar la seguridad en el chofer`,`Avanzar a alta velocidad`],c:0},{id:`3B4`,p:`¿Qué aspecto NO debe figurar en el informe de reconocimiento de ruta?`,o:[`Choke points, hospitales y puntos de dispersión`,`Comentarios de redes sociales sin relevancia`,`Tiempos estimados de traslado a velocidad táctica`,`Obras en construcción y semáforos críticos`],c:1},{id:`3B5`,p:`La matriz de riesgo asigna al color 'Amarillo' la directiva de…`,o:[`Riesgo Medio: activar rutas alternativas o redoblar vigilancia`,`Riesgo Bajo: marcha normal`,`Riesgo Crítico: fuego hostil`,`Riesgo Nulo: sin escolta`],c:0},{id:`3B6`,p:`El estudio meteorológico previo en zonas australes o de montaña es vital porque…`,o:[`El hielo o viento extremo condicionan la adherencia vehicular y la evacuación aérea`,`Determina el color de la corbata del VIP`,`Permite suspender el servicio de guardia`,`No tiene impacto en la conducción`],c:0},{id:`3B7`,p:`En un briefing operacional antes del despliegue, el TL debe verificar…`,o:[`Frecuencias de radio, roles de la cápsula, hospitales de referencia y consignas de fuego`,`El menú del almuerzo`,`Los teléfonos de los medios de prensa`,`Las redes sociales del dignatario`],c:0},{id:`3B8`,p:`Un dignatario reacio a seguir los protocolos de seguridad representa en el FODA una…`,o:[`Debilidad interna del sistema de protección`,`Fortaleza de liderazgo`,`Oportunidad de relajación`,`Amenaza de origen estatal`],c:0},{id:`3B9`,p:`El principio de 'Compartimentación de la Información' exige que…`,o:[`La agenda sensible, horarios y rutas solo sean conocidas por el personal estrictamente necesario`,`Se publique el itinerario en la web institucional`,`Se comparta la ruta en grupos abiertos de mensajería`,`Se informe al público con 48h de anticipación`],c:0},{id:`3B10`,p:`La designación de un Hospital Nivel 1 o de Alta Complejidad se fundamenta en…`,o:[`Capacidad de respuesta quirúrgica y neurotrauma las 24 horas`,`Cercanía a un centro comercial`,`Estacionamiento cubierto para el convoy`,`Menor costo de atención`],c:0}],C:[{id:`3C1`,p:`La fase de 'Planeamiento' en el ciclo de protección representa…`,o:[`El 90% del éxito preventivo de la operación de custodia`,`Una pérdida de tiempo operativo`,`Una tarea exclusiva de la administración`,`Un trámite optativo`],c:0},{id:`3C2`,p:`¿Qué factor incrementa la 'Vulnerabilidad' en un desplazamiento terrestre?`,o:[`Detenerse en semáforos no controlados en zonas de alto índice delictivo`,`Usar comunicaciones encriptadas`,`Llevar chaleco balístico nivel III-A`,`Realizar sweeps previos`],c:0},{id:`3C3`,p:`En la evaluación de amenazas, la 'Intención' combinada con la 'Capacidad' del adversario define…`,o:[`Una Amenaza Real y Concreta`,`Un rumor sin fundamento`,`Una Debilidad propia`,`Un Riesgo Nulo`],c:0},{id:`3C4`,p:`El 'Plan de Evacuación Médica' (MEDEVAC) debe contemplar…`,o:[`Rutas primarias y secundarias a centros de trauma y medios aéreos/terrestres asignados`,`Solo el número de emergencias 911`,`Un botiquín básico de primeros auxilios en el hotel`,`La llamada a familiares`],c:0},{id:`3C5`,p:`La 'Ventana de Vulnerabilidad' se define como…`,o:[`El intervalo de tiempo y espacio donde el protegido queda expuesto sin cobertura física completa`,`La ventana del vehículo que no posee blindaje`,`El horario de descanso nocturno`,`El momento de almuerzo de la escolta`],c:0},{id:`3C6`,p:`La coordinación con las autoridades policiales de la jurisdicción destino permite…`,o:[`Asegurar cápsula de tránsito, enlaces radiales directos y apoyo de unidades especiales`,`Desligarse totalmente de la custodia`,`Reducir la cantidad de armas`,`Eliminar los chequeos vehiculares`],c:0},{id:`3C7`,p:`En la matriz de riesgo, el nivel 'Naranja / Alto' demanda…`,o:[`Reforzar la cápsula con vehículos de apoyo y disponer Safe Rooms inmediatas`,`Cancelar todas las reuniones del dignatario`,`No portar armamento`,`Suspender el uso de radio`],c:0},{id:`3C8`,p:`¿Cuál es la función del 'Punto de Dispersión' (Rally Point) en una emergencia?`,o:[`Lugar predeterminado donde se reagrupa el equipo de seguridad tras romper contacto en una emboscada`,`Lugar donde se estacionan los autos de prensa`,`Sector para dar entrevistas`,`La comisaría más lejana`],c:0},{id:`3C9`,p:`El planeamiento logístico debe asegurar autonomía de combustible en los móviles para…`,o:[`Evitar detenciones forzosas no programadas en estaciones de servicio públicas`,`Ahorrar presupuesto`,`Viajar sin chofer`,`Poder encender la calefacción sin límite`],c:0},{id:`3C10`,p:`El principio de 'Flexibilidad Operativa' en el plan significa…`,o:[`Tener cursos de acción alternativos previstos ante cualquier imprevisto sin improvisar sobre la marcha`,`Cambiar de táctica según el humor del dignatario`,`No seguir ningún protocolo`,`Dejar que el VIP decida la seguridad`],c:0}]}},Ki={moduloSlug:`estudio-emplazamiento`,notaMinima:70,umbralVariante:50,maxIntentos:3,variantes:{A:[{id:`4A1`,p:`¿Cuál es la premisa doctrinal que rige el trabajo de la Avanzada (Advance Work)?`,o:[`El 90% del éxito en la protección ocurre antes de que el VIP ponga un pie en el lugar`,`La avanzada solo acompaña el equipaje`,`El trabajo de avanzada es prescindible si hay policías locales`,`La avanzada improvisa al llegar`],c:0},{id:`4A2`,p:`¿Cuáles son los 3 Anillos Concéntricos de Seguridad en un emplazamiento?`,o:[`Exterior (perímetro/estacionamiento), Medio (fachada/accesos) e Interior (Zona Cero/VIP)`,`Público, Privado y Secreto`,`Norte, Sur y Centro`,`Vehicular, Peatonal y Aéreo`],c:0},{id:`4A3`,p:`El 'Anillo Interior' (Zona Cero) comprende…`,o:[`La habitación/oficina del dignatario, accesos inmediatos y Safe Room`,`La vereda de enfrente del edificio`,`Las avenidas circundantes`,`El estacionamiento general`],c:0},{id:`4A4`,p:`¿Qué requisito estructural es indispensable para una 'Safe Room' (Habitación Segura)?`,o:[`Puerta sólida con cerrojo reforzado interior, sin ventanas o con vidrios blindados y enlace de radio/celular`,`Estar en el último piso con terraza vidriada`,`Tener acceso directo desde la vía pública`,`Estar decorada lujosamente`],c:0},{id:`4A5`,p:`Durante el barrido técnico (Sweep), el perro detector de explosivos (K9) debe inspeccionar…`,o:[`Salones, ductos de aire, podio, vehículos y áreas adyacentes a la Zona Cero`,`Únicamente la cocina`,`Solo el vehículo de la policía`,`Las veredas lejanas`],c:0},{id:`4A6`,p:`¿Qué control se debe aplicar sobre los ascensores durante la visita de un dignatario?`,o:[`Bloquear un ascensor de servicio para uso exclusivo de la custodia y evacuar si fuere necesario`,`Dejar todos los ascensores de uso libre al público`,`Apagar todos los ascensores del edificio`,`No usar ascensores bajo ningún concepto`],c:0},{id:`4A7`,p:`El 'Drop-off Point' (Punto de Desembarco) debe caracterizarse por…`,o:[`Ofrecer mínima exposición visual, cercanía a la entrada y vía de escape expedita`,`Estar frente a cámaras de televisión sin resguardo`,`Estar en una avenida congestionada`,`Ser el lugar con mayor aglomeración de público`],c:0},{id:`4A8`,p:`En el checklist de inspección previa de un hotel, la Advance debe verificar obligatoriamente…`,o:[`Salidas de emergencia no obstruidas, llaves maestras físicas, cobertura celular e IFAK`,`El menú del restaurante del hotel`,`La tarifa de las habitaciones`,`El canal de televisión preferido del VIP`],c:0},{id:`4A9`,p:`La 'Zona Estéril' dentro del emplazamiento es…`,o:[`Un área que ha sido inspeccionada, sellada y custodiada permanentemente para evitar infiltraciones`,`Un área libre de microbios y virus únicamente`,`El estacionamiento de ambulancias`,`Una sala de descanso del chofer`],c:0},{id:`4A10`,p:`Ante la detección de un paquete sospechoso en el Anillo Medio antes de la llegada del VIP, la acción es…`,o:[`Aislar el área, no tocar el objeto, convocar a la brigada de explosivos y desviar al VIP`,`Abrir el paquete para revisar su contenido`,`Llevar el paquete a la Safe Room`,`Ignorarlo si parece pequeño`],c:0}],B:[{id:`4B1`,p:`El 'Anillo Exterior' de seguridad tiene como objetivo principal…`,o:[`Detectar tempranamente hostiles, controlar choke points de acceso y ordenar drop-off`,`Proteger la espalda directa del dignatario`,`Servir café a la comitiva`,`Custodiar el podio de oradores`],c:0},{id:`4B2`,p:`Una Safe Room debe contar obligatoriamente con equipamiento preposicionado de…`,o:[`Botiquín de trauma (IFAK / control de hemorragias), linternas tácticas y comunicaciones`,`Catering completo y bebidas alcohólicas`,`Acceso a televisión por cable`,`Armas sin munición`],c:0},{id:`4B3`,p:`La técnica de 'Sweep' o barrido concéntrico se ejecuta en sentido…`,o:[`Desde el Anillo Interior hacia el Exterior o viceversa asegurando solapamiento de zonas`,`De forma aleatoria y rápida`,`Solo en el lugar donde el VIP estará parado`,`Únicamente en el baño`],c:0},{id:`4B4`,p:`¿Por qué se deben verificar los tableros eléctricos y sistemas contra incendios del edificio?`,o:[`Para evitar sabotajes que corten la luz o generen evacuaciones masivas forzadas`,`Para ahorrar energía del inmueble`,`Para regular la temperatura ambiente`,`Para apagar las luces durante el acto`],c:0},{id:`4B5`,p:`El control de acreditaciones y detector de metales debe ubicarse en…`,o:[`El Anillo Medio (accesos y vestíbulos de entrada)`,`La mesa de disertación del VIP`,`La calle abierta sin vallas`,`Dentro de la Safe Room`],c:0},{id:`4B6`,p:`El Agente de Avanzada debe mantener contacto directo con…`,o:[`El Jefe de Seguridad del edificio, policía jurisdiccional y centros médicos de contingencia`,`Los periodistas del evento`,`Los proveedores de sonido exclusivamente`,`Nadie para mantener el anonimato`],c:0},{id:`4B7`,p:`Si la Safe Room elegida tiene ventanas hacia la calle, la medida táctica obligatoria es…`,o:[`Cerrar cortinas gruesas/antiesquirlas, no encender luces directas y colocar barreras balísticas`,`Dejar abiertas las ventanas para ventilar`,`Asomarse para vigilar la calle`,`Colocar al VIP junto al vidrio`],c:0},{id:`4B8`,p:`El 'Holding Room' (Sala de Espera del VIP) se diferencia de la Safe Room en que…`,o:[`El Holding Room es para descanso y protocolo; la Safe Room es un búnker de resguardo ante ataque`,`Son exactamente lo mismo`,`El Holding Room no tiene puertas`,`La Safe Room está en el auto`],c:0},{id:`4B9`,p:`El informe de emplazamiento (Site Survey Report) debe incluir…`,o:[`Croquis de accesos, rutas de escape, ubicación de Safe Room, hospitales y contactos clave`,`Solo fotos del exterior del edificio`,`La lista de invitados vip de la fiesta`,`El costo de las entradas al evento`],c:0},{id:`4B10`,p:`¿Cuál es la regla de oro sobre las llaves de acceso a las vías de escape?`,o:[`El equipo de custodia debe tener posesión física de las llaves maestras o llaves de emergencia`,`Las llaves deben quedar en la recepción del hotel`,`No se deben pedir llaves para no incomodar`,`Las salidas deben permanecer clausuradas con candado`],c:0}],C:[{id:`4C1`,p:`El protocolo 'Advance Work' concluye formalmente cuando…`,o:[`El VIP arriba al emplazamiento y el TL toma control del dispositivo con la situación confirmada 'Verde'`,`Se envía el primer mensaje de WhatsApp`,`Se reserva el hotel`,`El VIP se sube al avión`],c:0},{id:`4C2`,p:`En un restaurante o salón público, la mesa del dignatario debe ubicarse estratégicamente…`,o:[`De espaldas a una pared sólida, con visión directa de entradas y lejos de ventanales a la calle`,`En el centro del salón rodeado de mesas desconocidas`,`Junto a la puerta de vidrio principal`,`Frente a los baños de acceso general`],c:0},{id:`4C3`,p:`¿Qué medida se debe adoptar con el personal de servicio (mozos, limpieza, técnicos) del evento?`,o:[`Verificación de antecedentes, acreditación nominal con credencial visible y control de acceso`,`Confiar en la empresa contratista sin chequear`,`Prohibir que haya mozos`,`Revisarlos solo al retirarse`],c:0},{id:`4C4`,p:`La ubicación del vehículo de escape (VIP Car) durante la permanencia del dignatario en el edificio debe ser…`,o:[`Posicionado en reversa hacia la salida, motor en condiciones de arranque y chofer a bordo`,`Estacionado a 3 cuadras para no molestar`,`Apagado y con el chofer dentro del evento`,`En un taller mecánico cercano`],c:0},{id:`4C5`,p:`Durante la inspección de la habitación de hotel del VIP, el custodio debe…`,o:[`Revisar armarios, baño, balcones, ductos, teléfonos y certificar cerraduras funcionando`,`Probar la comodidad de la cama`,`Ver el frigobar`,`Dormir una siesta previa`],c:0},{id:`4C6`,p:`La 'Línea de Visión Directa' (Line of Sight) desde edificios circundantes representa un riesgo de…`,o:[`Tirador emboscado / francotirador, requiriendo pantallas visuales o cortinas opacas`,`Mala iluminación para fotos`,`Interferencia en radios`,`Ruido molesto`],c:0},{id:`4C7`,p:`Si durante el acto público se produce un corte general de energía eléctrica, la reacción inmediata del CPO es…`,o:[`Cerrar la cápsula sobre el VIP, activar linternas tácticas y evacuar hacia la Safe Room o vehículo`,`Esperar sentados a que vuelva la luz`,`Gritar pidiendo explicaciones a los organizadores`,`Aplaudir con el público`],c:0},{id:`4C8`,p:`El 'Anillo Medio' actúa operativamente como…`,o:[`Filtro de seguridad donde se canaliza el flujo de personas y se detectan elementos prohibidos`,`Lugar para que descanse la comitiva`,`Estacionamiento de camiones`,`Área de prensa libre`],c:0},{id:`4C9`,p:`¿Qué verificación de comunicaciones realiza la Avanzada en el subsuelo del edificio?`,o:[`Comprobar que las frecuencias de radio VHF/UHF y teléfonos móviles no pierdan señal en la Safe Room y salidas`,`Ver si hay señal de Wi-Fi abierta`,`Buscar emisoras de radio FM`,`No hace falta probar radios en sótanos`],c:0},{id:`4C10`,p:`El principio de 'Esterilización Continua' significa que…`,o:[`Un sector una vez barrido y declarado seguro debe quedar bajo custodia física constante sin abandono`,`Se debe rociar desinfectante cada 5 minutos`,`No se permite el ingreso de armas a nadie`,`Se debe limpiar el piso con lavandina`],c:0}]}},qi={moduloSlug:`bases-legales`,notaMinima:70,umbralVariante:50,maxIntentos:3,variantes:{A:[{id:`5A1`,p:`¿Cuáles son los 3 principios fundamentales que rigen el uso de la fuerza policial?`,o:[`Legalidad, Necesidad y Proporcionalidad`,`Fuerza, Rapidez y Letalidad`,`Autoridad, Jerarquía y Secreto`,`Sorpresa, Violencia y Escape`],c:0},{id:`5A2`,p:`El principio de 'Necesidad' en el uso de la fuerza implica que…`,o:[`Solo debe emplearse la fuerza cuando otros medios pacíficos o persuasivos no sean eficaces`,`El policía siempre debe disparar`,`La fuerza se aplica por mandato administrativo`,`Debe usarse siempre la máxima fuerza disponible`],c:0},{id:`5A3`,p:`El principio de 'Proporcionalidad' exige que…`,o:[`El nivel de fuerza aplicado sea equivalente a la gravedad de la agresión y al peligro inminente`,`Se use la misma marca de arma del atacante`,`Se responda con el doble de disparos`,`No se use fuerza si el atacante es menor`],c:0},{id:`5A4`,p:`¿Cuáles son los 3 requisitos de la Legítima Defensa según el Art. 34 inc. 6 del Código Penal?`,o:[`Agresión ilegítima, necesidad racional del medio empleado y falta de provocación suficiente`,`Ataque sorpresivo, arma de fuego y testigo presencial`,`Uniforme policial, orden escrita y horario diurno`,`Denuncia previa, autorización fiscal y pericia balística`],c:0},{id:`5A5`,p:`La 'Defensa de Terceros' (Art. 34 inc. 7 CP) ampara al custodio cuando…`,o:[`Actúa en defensa de la vida o integridad física del dignatario ante agresión ilegítima no provocada`,`Defiende bienes materiales sin riesgo de vida`,`Detiene a una persona por una infracción de tránsito`,`Ejecuta una orden verbal ilegal`],c:0},{id:`5A6`,p:`¿Cuál es el primer escalón en la escala del uso progresivo de la fuerza?`,o:[`Presencia policial disuasiva y porte profesional`,`Control físico con llaves tácticas`,`Disparo con posta de goma`,`Uso de bastón tonfa`],c:0},{id:`5A7`,p:`El uso de la fuerza letal (arma de fuego) es considerado doctrinariamente como…`,o:[`Recurso extremo y de última ratio ante peligro inminente de muerte o lesiones graves`,`Una herramienta de persuasión para calmar multitudes`,`La primera opción táctica del custodio`,`Un acto discrecional del agente`],c:0},{id:`5A8`,p:`Respecto a los disparos de advertencia o al aire, la doctrina y jurisprudencia moderna establecen que…`,o:[`Están estrictamente prohibidos por el riesgo incontrolable de proyectiles perdidos sobre terceros`,`Son obligatorios antes de disparar al agresor`,`Se deben efectuar al menos 3 disparos al aire`,`Quedan a criterio de cada agente en el momento`],c:0},{id:`5A9`,p:`La 'Agresión Ilegítima' en legítima defensa debe ser…`,o:[`Actual o inminente, real (no supuesta) y contraria a derecho`,`Ocurrida hace varias horas`,`Una amenaza verbal lejana sin armas ni proximidad`,`Un rumor de redes sociales`],c:0},{id:`5A10`,p:`El exceso en la legítima defensa (Art. 35 CP) se configura cuando…`,o:[`El agente continúa aplicando fuerza letal una vez neutralizada la amenaza y cesado el peligro`,`El agente no dispara`,`El agresor escapa`,`El custodio usa chaleco balístico`],c:0}],B:[{id:`5B1`,p:`El escalón de 'Verbalización Táctica' consiste en…`,o:[`Impartir directivas claras, firmes e inequívocas para disuadir o deponer una conducta hostil`,`Insultar al agresor para intimidarlo`,`Leer el Código Penal en voz alta`,`Mantener silencio absoluto`],c:0},{id:`5B2`,p:`La 'Necesidad Racional del Medio Empleado' evalúa…`,o:[`Si en el contexto del ataque no existía otra alternativa menos lesiva disponible y eficaz`,`El precio del arma utilizada`,`Si el agente tenía permiso de tiro deportivo`,`La marca de la munición`],c:0},{id:`5B3`,p:`¿Cuándo cesa el derecho a la legítima defensa armada?`,o:[`En el instante preciso en que el agresor es desarmado, inmovilizado, depone la actitud o se da a la fuga sin constituir peligro inminente`,`Nunca, se puede disparar hasta agotarse el cargador`,`Cuando llega la ambulancia`,`Cuando lo ordene el dignatario`],c:0},{id:`5B4`,p:`La 'Falta de Provocación Suficiente' por parte de la víctima significa que…`,o:[`Ni el custodio ni el protegido iniciaron injustificadamente el conflicto que desencadenó el ataque`,`El custodio no saludó al agresor`,`El dignatario no dio declaraciones a la prensa`,`El móvil policial tenía las balizas apagadas`],c:0},{id:`5B5`,p:`El uso de 'Armas Menos Letales' (aerosoles OC, pistolas Taser, bastones) se ubica…`,o:[`Entre el control físico y el empleo del arma de fuego letal`,`Después de la fuerza letal`,`En el escalón de presencia pasiva`,`Fuera de la escala policial`],c:0},{id:`5B6`,p:`¿Qué deber legal tiene el custodio inmediatamente después de un enfrentamiento armado con heridos?`,o:[`Asegurar la escena, prestar primeros auxilios médicos (IFAK) y notificar al juzgado / fiscalía interviniente`,`Retirarse sin avisar a nadie`,`Ocultar las vainas servidas`,`Dar entrevistas a los medios de comunicación`],c:0},{id:`5B7`,p:`La 'Legítima Defensa Privilegiada' se presume legalmente en casos de…`,o:[`Rechazar de noche el escalamiento o fractura de cercados en un recinto habitado`,`Disparar a sospechosos en la vía pública`,`Cualquier discusión política con el VIP`,`Infracciones de tránsito menores`],c:0},{id:`5B8`,p:`El principio de 'Legalidad' exige que toda acción policial de coerción esté…`,o:[`Fundada en la Constitución, leyes y reglamentos de servicio vigentes`,`Basada en la opinión personal del chofer`,`Aprobada por encuesta pública`,`Determinada por el protocolo del hotel`],c:0},{id:`5B9`,p:`Si un manifestante arroja agua o huevos sin armas al paso del dignatario, la respuesta proporcional es…`,o:[`Interposición de cobertura física / paraguas balístico y evacuación, sin uso de armas letales`,`Disparar con arma de fuego a la multitud`,`Perseguir y golpear al manifestante`,`Detener el convoy para enfrentarse a golpes`],c:0},{id:`5B10`,p:`La obediencia debida (Art. 34 inc. 5 CP) NO exime de responsabilidad penal cuando…`,o:[`La orden impartida es manifiestamente ilícita o constituye un delito contra los derechos humanos`,`La orden fue dada por un superior jerárquico`,`La orden fue transmitida por radio`,`La orden fue verbal`],c:0}],C:[{id:`5C1`,p:`El Código de Conducta para Funcionarios Encargados de Hacer Cumplir la Ley (ONU) establece que los agentes…`,o:[`Protegerán la dignidad humana y los derechos humanos de todas las personas en todo momento`,`Pueden usar cualquier método para obtener confesiones`,`Tienen inmunidad penal absoluta`,`No deben rendir cuentas de sus actos`],c:0},{id:`5C2`,p:`En caso de duda razonable sobre la inminencia letal de una amenaza, la prioridad táctico-legal es…`,o:[`Evacuar al dignatario reduciendo la silueta y ganando distancia sin abrir fuego indiscriminado`,`Disparar preventivamente a todos los presentes`,`Bajar las armas y rendirse`,`Abandonar al protegido`],c:0},{id:`5C3`,p:`La portación del arma reglamentaria por parte del personal de custodia exige…`,o:[`Credencial de portación oficial vigente, aptitud psicofísica y condición operativa segura`,`Solo tener una copia del carnet de conducir`,`Portar armas no registradas`,`No llevar identificación policial`],c:0},{id:`5C4`,p:`¿Qué calificación jurídica recibe la agresión física consumada con arma blanca contra el VIP?`,o:[`Homicidio agravado en grado de tentativa / Agresión ilegítima letal inminente`,`Contravención de ruidos molestos`,`Injurias graves`,`Falta administrativa`],c:0},{id:`5C5`,p:`El 'Control Físico / Técnicas de Sumisión' se aplica ante sujetos con…`,o:[`Resistencia activa no letal (forcejeos, intentos de avance físico sobre la cápsula)`,`Amenaza letal con fusil de asalto`,`Personas que solo observan en silencio`,`Periodistas acreditados`],c:0},{id:`5C6`,p:`El uso de la fuerza sobre personas vulnerables (niños, embarazadas, ancianos) exige…`,o:[`Máxima contención y empleo exclusivo de técnicas de barrera física sin lesividad`,`El mismo trato que un tirador activo`,`No brindar protección al VIP`,`Ignorar las leyes`],c:0},{id:`5C7`,p:`La preservación de la cadena de custodia tras un hecho armado incluye…`,o:[`Resguardar armas, vainas, impactos balísticos y registros fílmicos sin alteración`,`Limpiar la sangre con agua antes de que lleguen los peritos`,`Llevarse las vainas servidas como recuerdo`,`Mover los vehículos del lugar sin peritaje`],c:0},{id:`5C8`,p:`Un custodio que repele con su arma a un delincuente que apunta y dispara contra el VIP actúa bajo…`,o:[`Legítima defensa de un tercero (Art. 34 inc. 7 del Código Penal)`,`Homicidio simple doloso`,`Abuso de autoridad`,`Falta disciplinaria`],c:0},{id:`5C9`,p:`La desescalada verbal busca…`,o:[`Reducir el nivel de tensión y lograr el acatamiento sin necesidad de recurrir a la fuerza física`,`Retar a duelo al agresor`,`Confundir al protegido`,`Ganar tiempo para filmar con el celular`],c:0},{id:`5C10`,p:`El informe pericial de balística forense verificará…`,o:[`Trayectorias, distancia de disparo, compatibilidad de estrías y cantidad de proyectiles disparados`,`Solo el color de la pistola`,`La marca de la ropa del custodio`,`El horario de entrada a la guardia`],c:0}]}},Ji={moduloSlug:`bioseguridad`,notaMinima:70,umbralVariante:50,maxIntentos:3,variantes:{A:[{id:`6A1`,p:`¿En qué consiste el paso 1 del protocolo 'Two-Step' de desinfección en vehículos VIP?`,o:[`Limpieza mecánica por fricción con surfactante neutro para remover la carga orgánica previa`,`Fumigación directa con cloro puro`,`Abrir las ventanillas a 120 km/h`,`Aplicar desodorante ambiental`],c:0},{id:`6A2`,p:`¿Qué configuración de guantes tácticos se recomienda para intervenciones sanitarias o de requisa?`,o:[`Guantes de nitrilo médico debajo de los guantes tácticos anticorte`,`Solo guantes de lana`,`Sin guantes para mayor sensibilidad`,`Guantes de látex doméstico grueso`],c:0},{id:`6A3`,p:`Ante la sospecha de una nube o vector biológico/químico en la vía pública, la primera acción en el vehículo es…`,o:[`Cerrar ventanillas y activar la recirculación interna del aire acondicionado (sellar HVAC)`,`Abrir las ventanillas para que corra aire`,`Apagar el motor de inmediato`,`Descender a pie con el VIP`],c:0},{id:`6A4`,p:`La regla de oro respecto al catering y bebidas servidas al dignatario establece que…`,o:[`Solo se consumen botellas selladas de fábrica abiertas en presencia de la custodia y catering supervisado`,`El VIP puede recibir alimentos abiertos de simpatizantes`,`La custodia prueba toda la comida 2 horas antes`,`No hay riesgo bromatológico en eventos privados`],c:0},{id:`6A5`,p:`Las mascarillas de protección respiratoria adecuadas contra aerosoles y agentes biológicos patógenos son…`,o:[`N95 / FFP2 / FFP3 con ajuste hermético al rostro`,`Barbijos de tela común holgados`,`Pañuelos de cuello`,`Máscaras de cotillón`],c:0},{id:`6A6`,p:`La 'Zona Limpia' (Cold Zone) en un incidente biológico es…`,o:[`El área no contaminada donde se instala el puesto de comando y triaje médico seguro`,`El epicentro de la explosión química`,`La zona donde se encuentra el paquete sospechoso`,`El lavadero del hotel`],c:0},{id:`6A7`,p:`La protección ocular obligatoria para el custodio frente a salpicaduras biológicas consiste en…`,o:[`Lentes balísticos con sello envolvente o antiparras de policarbonato anti-impacto`,`Anteojos de lectura comunes`,`Lentes de sol sin certificación`,`No usar protección ocular`],c:0},{id:`6A8`,p:`El desecho seguro de apósitos o gasas con fluidos biológicos humanos debe realizarse en…`,o:[`Bolsas rojas para residuos patogénicos con precinto y rotulado bioseguro`,`Cualquier tacho de basura de la calle`,`El cenicero del vehículo`,`El bolsillo del uniforme`],c:0},{id:`6A9`,p:`¿Qué síntoma súbito en el VIP y la comitiva puede indicar ataque con agente neurotóxico (tipo gas sarín/organofosforado)?`,o:[`Miosis (pupilas puntiformes), salivación excesiva, disnea severa y convulsiones`,`Fiebre gradual tras 4 días`,`Dolor en los pies por caminar`,`Somnolencia leve`],c:0},{id:`6A10`,p:`El procedimiento ante correspondencia o cartas con polvo blanco sospechoso en la oficina del VIP exige…`,o:[`No agitar, aislar la habitación, apagar la ventilación central y evacuar al personal`,`Soplar el polvo para leer la carta`,`Llevar el sobre a la cocina`,`Tirar el sobre al inodoro`],c:0}],B:[{id:`6B1`,p:`El paso 2 del protocolo 'Two-Step' de bioseguridad vehicular consiste en…`,o:[`Aplicación de desinfectante hospitalario de nivel intermedio/alto (amonio cuaternario o alcohol al 70%) con tiempo de contacto`,`Lavar el auto con manguera a presión`,`Encender la radio a volumen alto`,`Perfumar el habitáculo`],c:0},{id:`6B2`,p:`En un evento internacional con delegaciones extranjeras, la supervisión de la cadena de frío de alimentos busca prevenir…`,o:[`Intoxicaciones alimentarias masivas que incapaciten a la cápsula y al dignatario`,`Que la comida se enfríe antes de servir`,`Gastar demasiado hielo`,`Demoras en el servicio de mesa`],c:0},{id:`6B3`,p:`¿Cuál es la función del filtro HEPA en vehículos tácticos o salas seguras?`,o:[`Retener partículas microscópicas, esporas y bacterias con una eficiencia de al menos 99.97%`,`Enfriar el habitáculo rápidamente`,`Eliminar el olor a combustible`,`Aromatizar el aire`],c:0},{id:`6B4`,p:`Ante una herida cortante accidental de un custodio con material biológico desconocido durante una requisa, la medida inmediata es…`,o:[`Lavar con abundante agua y jabón, desinfectar y activar el protocolo de profilaxis post-exposición médica`,`Chupar la herida`,`Colocar cinta aisladora sobre el corte`,`Ocultar el incidente a los superiores`],c:0},{id:`6B5`,p:`La 'Zona Caliente' (Hot Zone) en un escenario con riesgo biológico/químico es…`,o:[`El perímetro directo de máxima contaminación donde solo ingresa personal con EPP de nivel especializado`,`El comedor de la tropa`,`La cocina del hotel`,`La sala de prensa`],c:0},{id:`6B6`,p:`¿Por qué el custodio nunca debe aceptar regalos de comida casera o bebidas abiertas entregadas por el público al VIP?`,o:[`Riesgo crítico de envenenamiento intencional o contaminación biológica letal`,`Falta de cortesía protocolar`,`Porque no alcanzan para todo el equipo`,`Porque manchan el uniforme`],c:0},{id:`6B7`,p:`El alcohol en gel o solución hidroalcohólica al 70% debe estar siempre preposicionado en…`,o:[`Los bolsillos tácticos de cada CPO, en las puertas del VIP Car y en la Safe Room`,`Solo en el baúl del auto de apoyo`,`Únicamente en el botiquín del hospital`,`En la comisaría central`],c:0},{id:`6B8`,p:`La descontaminación básica de emergencia ante contacto con químicos en la piel o mucosas requiere…`,o:[`Irrigación continua con agua limpia o solución fisiológica durante al menos 15 a 20 minutos`,`Frotar con alcohol puro`,`Aplicar cremas cosméticas`,`Esperar que se seque solo`],c:0},{id:`6B9`,p:`El control de vectores biológicos en alojamientos de campaña o zonas endémicas incluye…`,o:[`Inspección de mosquiteros, uso de repelentes DEET certificados y control de roedores/insectos`,`Dejar comida abierta sobre las mesas`,`Dormir sin carpa en el exterior`,`No ventilar las carpas`],c:0},{id:`6B10`,p:`El principio de 'Aislamiento Inmediato' ante un dignatario con cuadro febril y tos aguda durante un viaje oficial consiste en…`,o:[`Colocarle mascarilla N95, trasladarlo en cápsula sellada y convocar al médico de la unidad`,`Llevarlo a una conferencia de prensa masiva`,`Suspender el regreso`,`Obligarlo a continuar la agenda sin atención`],c:0}],C:[{id:`6C1`,p:`La amenaza biológica mediante aerosoles se caracteriza tácticamente por ser…`,o:[`Inodora, incolora, silenciosa y con efectos retardados que dificultan la detección visual inmediata`,`Muy ruidosa y con fuego visible`,`Instantánea como una granada`,`Fácilmente neutralizable con disparos`],c:0},{id:`6C2`,p:`En el kit individual de bioseguridad del CPO no debe faltar…`,o:[`Guantes de nitrilo, mascarillas FFP2/N95, toallitas desinfectantes y apósitos oclusivos`,`Comida rápida`,`Juegos de mesa`,`Ropa de civil deportiva`],c:0},{id:`6C3`,p:`¿Qué medida se adopta con los cubiertos, vajilla y copas destinadas al dignatario en eventos multitudinarios?`,o:[`Custodia directa del servicio por personal de la escolta hasta que sea entregado al VIP`,`Permitir que cualquier empleado manipule los platos sin control`,`Llevar vajilla de plástico descartable usada`,`No supervisar el banquete`],c:0},{id:`6C4`,p:`El 'Triaje Sanitario' durante una evacuación con múltiples víctimas prioriza…`,o:[`La categorización de pacientes según gravedad y probabilidad de sobrevida para destinar recursos críticos`,`Atender primero a los más jóvenes únicamente`,`Atender por orden de llegada al hospital`,`Evacuar solo al chofer`],c:0},{id:`6C5`,p:`La ventilación forzada en reversa (presión positiva) en una Safe Room con filtros NBQ permite…`,o:[`Evitar que el aire contaminado del exterior penetre por rendijas hacia el interior de la habitación`,`Generar corrientes de aire frío`,`Hacer ruido para disuadir atacantes`,`Aumentar el consumo eléctrico`],c:0},{id:`6C6`,p:`El protocolo de manipulación de muestras biológicas o alimentos sospechosos para pericia exige…`,o:[`Doble embolsado hermético estanco, refrigeración adecuada y cadena de custodia judicial`,`Envolver en papel de diario`,`Guardar en la guantera del auto`,`Tirar los restos`],c:0},{id:`6C7`,p:`La desinfección del equipamiento táctico balístico (chalecos, fundas) tras un evento en zona biológica de riesgo debe…`,o:[`Realizarse según manual del fabricante evitando solventes que degraden las fibras de aramida (Kevlar)`,`Hervirse en agua con lavandina pura a 100°C`,`Dejarse al sol durante 10 días sin lavar`,`Rociarse con nafta`],c:0},{id:`6C8`,p:`Ante la explosión de una 'Bomba Sucia' (artefacto explosivo con dispersión de material radiológico o biológico), la directiva es…`,o:[`Evacuar en dirección perpendicular o contraria al viento (Upwind / Crosswind) buscando resguardo interior`,`Correr en la misma dirección que viaja el humo`,`Acercarse a filmar la nube de polvo`,`Permanecer al aire libre mirando el cielo`],c:0},{id:`6C9`,p:`El carnet de vacunación y perfil médico confidencial del dignatario debe estar en posesión de…`,o:[`El médico del equipo de protección y el Jefe de Custodia para emergencias inmediatas`,`Todos los periodistas del viaje`,`La empresa de catering`,`Los conductores de taxi locales`],c:0},{id:`6C10`,p:`La bioseguridad en el helicóptero de traslado VIP exige…`,o:[`Sellado de tomas de aire en tierra, revisión de filtros de cabina y desinfección pre y post vuelo`,`Dejar las puertas abiertas durante el carreteo`,`No revisar el rotor`,`Transportar cargas biológicas en los asientos`],c:0}]}},Yi={moduloSlug:`rcp-vip`,notaMinima:70,umbralVariante:50,maxIntentos:3,variantes:{A:[{id:`7A1`,p:`¿Qué significa la 'X' en el protocolo de medicina táctica XABCDE (TCCC / TECC)?`,o:[`eXsanguination (Hemorragia exanguinante masiva en extremidades)`,`Rayos X diagnósticos`,`Extracción vehicular inmediata`,`Examen neurológico`],c:0},{id:`7A2`,p:`¿Cuál es la primera intervención médica ante una herida de bala en muslo con sangrado pulsátil a chorro?`,o:[`Aplicación inmediata de torniquete táctico (CAT / SOFTT) 'alto y apretado' sobre la ropa`,`Dar de beber agua al herido`,`Limpiar con gasa estéril y esperar la ambulancia`,`Hacer masajes cardíacos`],c:0},{id:`7A3`,p:`En el protocolo XABCDE, la letra 'A' corresponde a…`,o:[`Airway (Vía aérea permeable con control de columna cervical)`,`Armas aseguradas`,`Alerta radial`,`Ambulancia convocada`],c:0},{id:`7A4`,p:`Ante una herida penetrante de tórax ('herida soplante'), el tratamiento inmediato es…`,o:[`Colocación de parche torácico oclusivo con válvula unidireccional (Chest Seal)`,`Torniquete en el cuello`,`Dar respiración boca a boca sin sellar`,`Presionar con un cinturón`],c:0},{id:`7A5`,p:`¿Cuál es la frecuencia de compresiones torácicas reglamentaria en RCP de alta calidad?`,o:[`100 a 120 compresiones por minuto`,`50 a 60 compresiones por minuto`,`180 compresiones por minuto`,`No importa la velocidad si se presiona fuerte`],c:0},{id:`7A6`,p:`¿Cuál es la profundidad recomendada de las compresiones torácicas en un adulto?`,o:[`Al menos 5 cm (sin superar los 6 cm) permitiendo la reexpansión torácica completa`,`2 cm para no lastimar las costillas`,`10 cm como mínimo`,`Solo apoyar las palmas sin hundir el esternón`],c:0},{id:`7A7`,p:`Al llegar el Desfibrilador Externo Automático (DEA/DAE), la primera acción es…`,o:[`Encender el equipo y seguir de inmediato las instrucciones sonoras/visuales`,`Desconectar la batería`,`Esperar 10 minutos de RCP manual`,`Mojar los parches del desfibrilador`],c:0},{id:`7A8`,p:`Durante el análisis del ritmo cardíaco o la descarga del DEA, la regla de seguridad crítica es…`,o:[`Gritar '¡NADIE TOCA AL PACIENTE!' y verificar visualmente que nadie tenga contacto físico con él`,`Sostener la mano del paciente para calmarlo`,`Continuar haciendo compresiones con fuerza`,`Verter agua sobre el pecho`],c:0},{id:`7A9`,p:`La letra 'E' en el protocolo XABCDE representa…`,o:[`Exposure / Enfriamiento (Exponer lesiones y prevenir la hipotermia con manta térmica)`,`Evacuación aérea`,`Escolta armada`,`Entrega policial`],c:0},{id:`7A10`,p:`Una vez colocado y ajustado un torniquete táctico CAT que detuvo el sangrado, este debe…`,o:[`Permanecer colocado sin aflojar, anotando la hora de colocación ('TIME') hasta el cirujano`,`Aflojarse cada 5 minutos para que circule sangre`,`Retirarse apenas suba a la ambulancia`,`Cubrirse con barro`],c:0}],B:[{id:`7B1`,p:`En la 'Medicina Bajo Fuego' (Care Under Fire), la prioridad táctica absoluta antes de cualquier atención es…`,o:[`Repeler la agresión armada, ganar superioridad de fuego y poner al herido a cubierto`,`Abrir el maletín de primeros auxilios en medio de la calle`,`Tomar la presión arterial del dignatario`,`Hacer RCP en la Kill Zone`],c:0},{id:`7B2`,p:`La letra 'C' en el protocolo XABCDE corresponde a…`,o:[`Circulation (Evaluación de pulso, llenado capilar, shock y control de sangrados menores)`,`Conducción rápida`,`Comunicación telefónica`,`Chaleco balístico`],c:0},{id:`7B3`,p:`¿Cuál es la relación de compresiones/ventilaciones en RCP para un solo reanimador en adultos?`,o:[`30 compresiones por 2 ventilaciones (30:2)`,`15 compresiones por 5 ventilaciones`,`50 compresiones por 1 ventilación`,`Solo ventilaciones sin comprimir`],c:0},{id:`7B4`,p:`La empaquetadura de heridas (Wound Packing) con gasa hemostática está indicada en…`,o:[`Zonas de unión (axilas, ingle, cuello) donde no se puede colocar un torniquete circunferencial`,`Heridas en dedos de la mano`,`Quemaduras solares`,`Raspones leves`],c:0},{id:`7B5`,p:`La letra 'D' en el protocolo XABCDE representa…`,o:[`Disability (Evaluación neurológica rápida con escala AVDI y reflejo pupilar)`,`Desfibrilación urgente`,`Distancia de seguridad`,`Desinfección de la herida`],c:0},{id:`7B6`,p:`La escala neurológica AVDI evalúa si el paciente está…`,o:[`Alerta, responde a la Voz, responde al Dolor o está Inconsciente`,`Agresivo, Violento, Desarmado o Inmóvil`,`Armado, Visible, Decidido o Interceptado`,`Apto, Válido, Diestro o Impedido`],c:0},{id:`7B7`,p:`¿Por qué es mortal la Hipotermia en el paciente con trauma balístico y hemorragia?`,o:[`Desencadena la 'Tríada de la Muerte' alterando la coagulación sanguínea y provocando acidosis`,`Porque produce escalofríos molestos`,`Porque el paciente no puede hablar`,`No tiene impacto en la supervivencia`],c:0},{id:`7B8`,p:`Inmediatamente después de que el DEA administra una descarga eléctrica, el rescatista debe…`,o:[`Reanudar las compresiones torácicas de inmediato sin perder tiempo buscando pulso`,`Esperar 5 minutos a que el DEA vuelva a hablar`,`Retirar los parches adhesivos`,`Sentar al paciente`],c:0},{id:`7B9`,p:`El 'Neumotórax a Tensión' se sospecha ante un herido de tórax que presenta…`,o:[`Dificultad respiratoria extrema progresiva, ausencia de ruidos respiratorios de un lado y cianosis`,`Dolor en los dedos del pie`,`Apetito intenso`,`Presión arterial elevada sin sangrado`],c:0},{id:`7B10`,p:`El uso de la Cánula Nasofaríngea (NPA) está indicado para…`,o:[`Mantener permeable la vía aérea en pacientes inconscientes o semiconscientes con reflejo nauseoso`,`Detener una hemorragia nasal`,`Medir la temperatura corporal`,`Suministrar oxígeno a presión`],c:0}],C:[{id:`7C1`,p:`¿Qué elemento del IFAK (Botiquín Individual de Trauma) es indispensable para el manejo de la hemorragia exanguinante?`,o:[`Torniquete táctico certificado CoTCCC (CAT / SOFTT)`,`Cinta hipoalergénica de papel`,`Aspirinas`,`Tijera común de papel`],c:0},{id:`7C2`,p:`En un paro cardiorrespiratorio presenciado por el custodio, la intervención que más eleva la tasa de sobrevida es…`,o:[`Desfibrilación temprana combinada con compresiones torácicas inmediatas e ininterrumpidas`,`Aplicar inyecciones intramusculares`,`Trasladar al paciente corriendo en brazos sin hacer RCP`,`Gritar pidiendo ayuda sin tocar al paciente`],c:0},{id:`7C3`,p:`La maniobra de apertura de vía aérea recomendada en un paciente con sospecha de trauma cervical es…`,o:[`Tracción mandibular sin hiperextensión del cuello`,`Hiperextensión brusca de la cabeza hacia atrás`,`Girar la cabeza 90 grados hacia el costado`,`Colocar una almohada alta debajo de la nuca`],c:0},{id:`7C4`,p:`El vendaje compresivo israelí (Emergency Bandage) se utiliza principalmente para…`,o:[`Aplicar presión focal directa sobre heridas profundas y fijar gasas hemostáticas`,`Inmovilizar fracturas de fémur exclusivamente`,`Cubrir quemaduras químicas`,`Reemplazar al torniquete en amputaciones femorales`],c:0},{id:`7C5`,p:`¿Qué acción se debe realizar si tras colocar un primer torniquete el sangrado arterial masivo persiste?`,o:[`Colocar un segundo torniquete inmediatamente por encima del primero, adyacente y más proximal`,`Aflojar el primer torniquete y probar de nuevo`,`Retirar el torniquete y poner una curita`,`Esperar 30 minutos`],c:0},{id:`7C6`,p:`La posición lateral de seguridad (PLS) se aplica a pacientes que…`,o:[`Están inconscientes pero respiran normalmente y no presentan trauma grave de columna`,`Están en paro cardíaco`,`Tienen fractura expuesta de cadera`,`Están conscientes caminando`],c:0},{id:`7C7`,p:`En el contexto de la Medicina Táctica, el axioma 'Good medicine can sometimes be bad tactics' significa…`,o:[`Intentar un procedimiento médico complejo en medio del tiroteo puede causar la muerte del rescatista y del VIP`,`Los médicos no deben actuar en la policía`,`Las tácticas policiales no respetan la salud`,`No se debe llevar botiquín en el móvil`],c:0},{id:`7C8`,p:`El 'Shock Hipovolémico' descompensado en un herido de bala se manifiesta por…`,o:[`Hipotensión severa, taquicardia filiforme, palidez marmórea, sudoración fría y alteración de conciencia`,`Presión arterial normal y piel rosada`,`Fiebre muy alta y tos seca`,`Hambre y visión nítida`],c:0},{id:`7C9`,p:`El tiempo máximo para iniciar las maniobras de RCP ante un colapso súbito antes de que comience el daño cerebral irreversible es de…`,o:[`Menos de 4 minutos`,`25 a 30 minutos`,`1 hora`,`No hay límite de tiempo`],c:0},{id:`7C10`,p:`Al realizar la entrega del dignatario o agente herido al equipo médico del Shockroom, el CPO debe informar bajo formato MIST…`,o:[`Mecanismo de lesión, Injuria/Heridas, Signos vitales y Tratamientos administrados (torniquete/hora)`,`El número de chasis del vehículo`,`El partido político del dignatario`,`El costo del armamento empleado`],c:0}]}},Xi={moduloSlug:`conduccion-evasiva`,notaMinima:70,umbralVariante:50,maxIntentos:3,variantes:{A:[{id:`8A1`,p:`¿Cuál es la ubicación estándar del dignatario dentro del vehículo principal (VIP Car)?`,o:[`Asiento trasero derecho (lado opuesto al chofer)`,`Asiento del acompañante delantero`,`En el asiento del conductor`,`En el centro del asiento delantero`],c:0},{id:`8A2`,p:`¿Cuál es la función táctica del vehículo de escolta o apoyo (Follow-up Car)?`,o:[`Bloquear cruces, cubrir la retirada y servir como vehículo de rescate/relevo si el VIP Car es atacado`,`Transportar el equipaje del personal únicamente`,`Viajar 5 kilómetros adelante sin enlace radial`,`Llevar a los periodistas`],c:0},{id:`8A3`,p:`Durante el procedimiento de 'Embuss / Debuss' (embarque y desembarque), la directiva para el conductor es…`,o:[`Mantener el motor en marcha, transmisión en directa/primera y pie en el freno listo para acelerar`,`Apagar el motor y bajarse a abrir la puerta`,`Poner punto muerto y quitarse el cinturón`,`Descender a fumar`],c:0},{id:`8A4`,p:`¿Quién es el único facultado para abrir la puerta del dignatario durante un desembarque normal?`,o:[`El Jefe de Custodia (TL) o el escolta asignado tras verificar que el entorno es seguro`,`El propio dignatario de manera intempestiva`,`El chofer del vehículo principal`,`Cualquier persona del público`],c:0},{id:`8A5`,p:`La maniobra evasiva 'J-Turn' (Vuelta en J / Contragiro) permite…`,o:[`Girar el vehículo 180° sobre su eje acelerando en reversa y continuar la marcha hacia adelante`,`Frenar en seco y apagar las luces`,`Chocar de frente a un camión`,`Estacionar en paralelo`],c:0},{id:`8A6`,p:`La maniobra de 'Ramming' (Impacto táctico vehicular) para abrir un bloqueo debe ejecutarse…`,o:[`Impactando a velocidad controlada (25-35 km/h) sobre el tercio delantero o trasero del vehículo obstáculo`,`A 150 km/h de lleno contra el centro del chasis`,`Marcha atrás sin mirar`,`Frenando a 1 metro y apagando el motor`],c:0},{id:`8A7`,p:`La 'Regla de Oro' para prevenir emboscadas vehiculares programadas es…`,o:[`Nunca utilizar la misma ruta ni los mismos horarios de manera predecible`,`Viajar siempre a más de 180 km/h`,`Usar sirena permanentemente`,`Polarizar los vidrios al 100% únicamente`],c:0},{id:`8A8`,p:`La distancia de seguridad en semáforos o detenciones temporales exige al chofer…`,o:[`Poder ver las ruedas traseras del vehículo de adelante tocando el asfalto para tener espacio de escape`,`Pegarse al paragolpes delantero a 5 cm`,`Apagar el motor para ahorrar combustible`,`Mirar el teléfono celular`],c:0},{id:`8A9`,p:`Ante disparos de armas de fuego contra el parabrisas blindado en marcha, el conductor debe…`,o:[`Acelerar con decisión saliendo de la Kill Zone sin detenerse bajo ningún concepto`,`Frenar a cero y bajarse con las manos arriba`,`Hacer marcha atrás despacio`,`Esperar que los atacantes se queden sin munición`],c:0},{id:`8A10`,p:`Si un neumático blindado con sistema 'Run-Flat' sufre un impacto balístico o desinflado, este permite…`,o:[`Continuar la marcha a velocidad segura (50-80 km/h) durante varias decenas de kilómetros hasta zona segura`,`Detenerse inmediatamente a cambiar la rueda en medio del tiroteo`,`Explotar volcando el vehículo`,`No circular más de 10 metros`],c:0}],B:[{id:`8B1`,p:`¿Cuál es la posición de las manos recomendada en el volante para conducción táctica y evasiva?`,o:[`Posición de las '9 y 3' o '10 y 2' firmes sin cruzar los brazos por dentro del volante`,`Una sola mano en la parte superior ('las 12')`,`Mano derecha en la palanca de cambios y la izquierda apoyada en la ventanilla`,`Sujetar el volante por la parte inferior con los dedos sueltos`],c:0},{id:`8B2`,p:`La maniobra 'Y-Turn' (Giro en tres tiempos táctico) se utiliza cuando…`,o:[`El ancho de la calzada no permite un J-Turn continuo y se debe invertir el sentido de marcha rápidamente`,`Se desea hacer trompos en el barro`,`Se llega a una rotonda amplia`,`Se va a estacionar el vehículo`],c:0},{id:`8B3`,p:`En una cápsula vehicular de dos móviles, ante un intento de sobrepaso sospechoso de un tercer vehículo, el Follow-up Car debe…`,o:[`Cerrar el paso e interponerse (bloqueo táctico) evitando que el vehículo extraño alcance al VIP Car`,`Dejar pasar al vehículo para que no se enoje`,`Frenar y llamar al 911`,`Apagar las luces`],c:0},{id:`8B4`,p:`La zona de 'Embuss / Debuss' es catalogada doctrinalmente como…`,o:[`Zona de Máxima Vulnerabilidad y Riesgo Crítico debido a la transición estática del dignatario`,`Un momento de relajación para la escolta`,`El lugar más seguro de todo el viaje`,`Un área sin riesgo`],c:0},{id:`8B5`,p:`El blindaje vehicular Nivel RB3 (según norma RENAR/ANMaC) resiste proyectiles de…`,o:[`Calibres de armas cortas de alta energía como 9mm FMJ y .44 Magnum`,`Solo perdigones de caza menor`,`Proyectiles antitanque guiados por láser`,`Piedras pequeñas únicamente`],c:0},{id:`8B6`,p:`¿Qué acción realiza el vehículo de escolta si el VIP Car sufre una pinchadura en zona hostil?`,o:[`Cubre la retaguardia con barrera vehicular y facilita la extracción inmediata del VIP al móvil escolta`,`Pasa de largo y deja solo al VIP Car`,`Comienza a filmar con el teléfono`,`Apaga las balizas`],c:0},{id:`8B7`,p:`Durante una persecución hostil, el conductor táctico debe evitar…`,o:[`Quedar encajonado contra obstáculos fijos o quedar detenido en puntos ciegos`,`Mirar los espejos retrovisores`,`Mantener las dos manos al volante`,`Usar el freno`],c:0},{id:`8B8`,p:`El 'Aquaplaning' (hidroplaneo) en rutas mojadas se previene tácticamente…`,o:[`Manteniendo neumáticos con dibujo reglamentario, reduciendo velocidad y evitando maniobras bruscas de volante`,`Acelerando al máximo sobre los charcos`,`Frenando a fondo con el freno de mano`,`Desinflando los neumáticos`],c:0},{id:`8B9`,p:`La 'Técnica de la Vista Lejana' en la conducción de seguridad implica…`,o:[`Mirar al menos 200 a 300 metros hacia adelante para anticipar cortes, emboscadas y maniobras del tránsito`,`Fijar la vista exclusivamente en el capot del vehículo`,`Mirar permanentemente a los peatones en la vereda`,`Mirar el tablero de instrumentos`],c:0},{id:`8B10`,p:`El bloqueo de puertas automático (traba central) del convoy debe activarse…`,o:[`Antes de iniciar la marcha y permanecer trabado durante todo el trayecto`,`Solo cuando el dignatario lo pida`,`Únicamente en autopistas`,`Nunca para poder saltar del auto`],c:0}],C:[{id:`8C1`,p:`En una emboscada con bloqueo frontal completo y fuego hostil, si no hay espacio para giro, la reacción es…`,o:[`Maniobra de Ramming táctico contra el punto más débil del obstáculo para abrir vía de escape`,`Detener el vehículo y esperar refuerzos`,`Apagar el motor y salir a negociar`,`Rendirse`],c:0},{id:`8C2`,p:`La posición del dignatario detrás del acompañante permite…`,o:[`Facilitar el descenso seguro hacia la vereda y que el TL sentado adelante gire rápidamente para protegerlo`,`Que el VIP conduzca si se cansa el chofer`,`Que pueda mirar el velocímetro`,`Que hable con el chofer sin esfuerzo`],c:0},{id:`8C3`,p:`¿Cuál es la velocidad recomendada para una aproximación segura al Drop-off?`,o:[`Velocidad moderada y fluida que permita frenar con precisión milimétrica sin sacudidas`,`120 km/h derrapando frente a la puerta`,`Marcha a paso de hombre durante 2 kilómetros`,`Frenada intempestiva con chirrido de cubiertas`],c:0},{id:`8C4`,p:`El 'Bootlegger Turn' (Giro contrabandista / Giro 180° hacia adelante con freno de mano) se usa para…`,o:[`Invertir el sentido de marcha 180° de forma instantánea cuando se avanza de frente hacia un bloqueo infranqueable`,`Acelerar en línea recta`,`Esquivar un pozo pequeño`,`Hacer sonar las alarmas`],c:0},{id:`8C5`,p:`La comunicación entre los vehículos del convoy debe ser…`,o:[`Breve, concisa, utilizando códigos operativos estandarizados y reportando cambios de carril o anomalías`,`Una charla informal continua sobre temas cotidianos`,`Únicamente por señas de luces sin radio`,`Por mensajes de audio de WhatsApp`],c:0},{id:`8C6`,p:`En caso de falla de frenos en descenso, el conductor táctico debe…`,o:[`Bombear el pedal, rebajar marchas con la caja de cambios y utilizar el freno de mano de forma progresiva`,`Saltar del vehículo en movimiento`,`Apagar el motor trabando la dirección`,`Acelerar a fondo`],c:0},{id:`8C7`,p:`¿Qué equipamiento de emergencia NO debe faltar en el baúl del VIP Car?`,o:[`IFAK de trauma vehicular, matafuegos ABC vigente, balizas tácticas, linga de remolque y linterna estroboscópica`,`Bolsas de compras personales`,`Herramientas de jardinería`,`Equipos de sonido para fiestas`],c:0},{id:`8C8`,p:`La conducción en caravana en condiciones de nieve o hielo exige…`,o:[`Aumentar la distancia de seguimiento al triple, uso de cadenas/cubiertas con clavos y suavidad extrema en pedales`,`Viajar pegado al paragolpes del auto guía`,`Conducir con neumáticos lisos`,`Frenar bruscamente en cada curva`],c:0},{id:`8C9`,p:`El principio de 'Movilidad es Vida' en el combate vehicular significa que…`,o:[`Un vehículo en movimiento es un blanco difícil; un vehículo detenido en la Kill Zone es una trampa mortal`,`Se debe cambiar de vehículo cada 2 horas`,`El chofer debe correr al lado del auto`,`No se debe usar el freno nunca`],c:0},{id:`8C10`,p:`Al finalizar el servicio de custodia vehicular, el chofer táctico debe realizar…`,o:[`Revisión de fluidos, neumáticos, estado del blindaje, limpieza interna, carga completa de combustible y reporte de novedades`,`Dejar el auto con la reserva de nafta encendida`,`Abandonar el vehículo con las puertas abiertas`,`No avisar sobre desperfectos mecánicos`],c:0}]}},Zi={1:Ui,2:Wi,3:Gi,4:Ki,5:qi,6:Ji,7:Yi,8:Xi,"mod-01":Ui,"mod-02":Wi,"mod-03":Gi,"mod-04":Ki,"mod-05":qi,"mod-06":Ji,"mod-07":Yi,"mod-08":Xi},Qi={practicos:[{moduloId:`mod-01`,id:`tp-01`,titulo:`Trabajo Práctico 1: Aplicación del Código de Cooper y Mitigación de Vulnerabilidades`,consigna:`Plantee un caso operativo donde la cápsula de protección detecte una anomalía en un acto público. Explique la transición mental del Estado Amarillo al Naranja y Rojo, y justifique cómo el equipo mitiga la vulnerabilidad del dignatario aplicando la Tríada Fundamental y el lema 'Silencio y Soberanía'.`,rubrica:{criterios:[{nombre:`Aplicación de la Tríada Fundamental`,peso:35,descripcion:`Identificación de debilidades intrínsecas vs. amenazas externas y reducción efectiva del riesgo.`},{nombre:`Dinámica del Código de Colores de Cooper`,peso:35,descripcion:`Descripción precisa de los estados mentales y prevención del Estado Negro.`},{nombre:`Perfil y Doctrina del Custodio`,peso:30,descripcion:`Inteligencia emocional, discreción absoluta y presencia disuasiva profesional.`}],puntajeAprobacion:70}},{moduloId:`mod-02`,id:`tp-02`,titulo:`Trabajo Práctico 2: Reacción ante Ataque y Protocolo C.E.E.`,consigna:`Describa la secuencia cronológica de acciones del equipo de 4 escoltas ante un tirador activo que abre fuego a 15 metros durante el descenso del vehículo principal.`,rubrica:{criterios:[{nombre:`Acción Inmediata (Cubrir)`,peso:35,descripcion:`Escudo corporal, reducción de silueta del VIP y alerta verbal táctica.`},{nombre:`Maniobra de Evacuación`,peso:35,descripcion:`Dirección opuesta al vector de tiro hacia vehículo o safe room.`},{nombre:`Fuego de Supresión y Coordinación`,peso:30,descripcion:`Contención balística del flanco por el escolta de apoyo.`}],puntajeAprobacion:70}},{moduloId:`mod-03`,id:`tp-03`,titulo:`Trabajo Práctico 3: Elaboración de Orden de Operaciones (OPORD)`,consigna:`Confeccione los 5 párrafos de una OPORD completa para el traslado de una delegación internacional desde el Aeropuerto hasta la Casa de Gobierno.`,rubrica:{criterios:[{nombre:`Párrafos Doctrinales`,peso:40,descripcion:`Inclusión de Situación, Misión, Ejecución, Administración/Logística y Comando/Comunicaciones.`},{nombre:`Planificación de Rutas y Horarios`,peso:30,descripcion:`Ruta primaria, alterna y cronograma con cálculo inverso.`},{nombre:`Hospitales y Contingencias`,peso:30,descripcion:`Hospital de trauma nivel 1 y centros de repliegue.`}],puntajeAprobacion:70}},{moduloId:`mod-04`,id:`tp-04`,titulo:`Trabajo Práctico 4: Inspección de Hotel y Certificación de Safe Room`,consigna:`Presente una lista de chequeo y reporte de avanzada para la suite presidencial del Hotel Alvear, detallando la regla de adyacencia y barrido técnico.`,rubrica:{criterios:[{nombre:`Checklist de Vulnerabilidades`,peso:35,descripcion:`Evaluación de cerraduras, accesos a techos y ascensores.`},{nombre:`Regla de Adyacencia`,peso:35,descripcion:`Control de habitaciones linderas, superior e inferior.`},{nombre:`Comunicaciones y Recursos Médicos`,peso:30,descripcion:`Comunicaciones redundantes y botiquín dentro del Safe Room.`}],puntajeAprobacion:70}},{moduloId:`mod-05`,id:`tp-05`,titulo:`Trabajo Práctico 5: Análisis Jurídico de Caso de Disparo Defensivo`,consigna:`Analice un caso simulado donde un individuo extrae un cuchillo a 4 metros de la cápsula. Fundamente la concurrencia de los 3 requisitos de legítima defensa (Art. 34 CP) y la Tríada de Amenaza.`,rubrica:{criterios:[{nombre:`Análisis del Art. 34 CP`,peso:40,descripcion:`Agresión ilegítima, necesidad racional y falta de provocación.`},{nombre:`Aplicación de la Tríada de Amenaza`,peso:35,descripcion:`Explicación de Capacidad, Oportunidad e Intención en el agresor.`},{nombre:`Protocolo Post-Enfrentamiento`,peso:25,descripcion:`Preservación de la escena y notificación a la fiscalía de turno.`}],puntajeAprobacion:70}},{moduloId:`mod-06`,id:`tp-06`,titulo:`Trabajo Práctico 6: Procedimiento Operativo Estándar Two-Step QBRN`,consigna:`Redacte el Procedimiento Operativo Estándar (POE) para la desinfección preventiva de la flota de 3 vehículos blindados previo a una cumbre bilateral.`,rubrica:{criterios:[{nombre:`Secuencia Two-Step`,peso:40,descripcion:`Paso 1 mecánico y Paso 2 con desinfectante de grado hospitalario/táctico.`},{nombre:`Equipamiento de Protección (EPP)`,peso:30,descripcion:`Máscara con filtro CBRN, guantes de nitrilo reforzado y overol impermeable.`},{nombre:`Disposición de Residuos`,peso:30,descripcion:`Desecho en bolsas rojas de bioseguridad y trazabilidad.`}],puntajeAprobacion:70}},{moduloId:`mod-07`,id:`tp-07`,titulo:`Trabajo Práctico 7: Aplicación Práctica del Protocolo M.A.R.C.H.`,consigna:`Un integrante de la cápsula recibe un impacto balístico en muslo derecho con sangrado arterial pulsátil en zona de fuego hostil. Detalle la secuencia de primeros auxilios TECC paso a paso.`,rubrica:{criterios:[{nombre:`Acción en Zona Roja (Direct Threat)`,peso:35,descripcion:`Resguardo y torniquete rápido sobre la ropa 'High and Tight'.`},{nombre:`Transición a Zona Amarilla (Indirect Threat)`,peso:35,descripcion:`Reevaluación de torniquete directo a piel, A, R, C, H y empaquetamiento.`},{nombre:`Preparación para Evacuación`,peso:30,descripcion:`Manta térmica, ficha TCCC escrita y traspaso a ambulancia.`}],puntajeAprobacion:70}},{moduloId:`mod-08`,id:`tp-08`,titulo:`Trabajo Práctico 8: Plan de Evacuación Extrema (PEX) y Maniobra Evasiva`,consigna:`Elabore el Plan PEX integral para el trayecto entre la residencia oficial y el helipuerto de contingencia, incluyendo instrucciones para el piloto de seguridad y resolución de un bloqueo con maniobra Bootlegger o J-Turn.`,rubrica:{criterios:[{nombre:`Estructura P/A/T de Rutas`,peso:35,descripcion:`Definición de ruta Principal, Alterna y Terciaria con tiempos estimados.`},{nombre:`Procedimiento de la Maniobra Evasiva`,peso:35,descripcion:`Control dinámico del vehículo en el escape bajo estrés.`},{nombre:`Protocolo de Extracción Aeromédica`,peso:30,descripcion:`Señalización de zona de aterrizaje (LZ) y enlace con aeronave.`}],puntajeAprobacion:70}}]}.practicos||[],$i={1:Qi.find(e=>e.moduloId===`mod-01`),2:Qi.find(e=>e.moduloId===`mod-02`),3:Qi.find(e=>e.moduloId===`mod-03`),4:Qi.find(e=>e.moduloId===`mod-04`),5:Qi.find(e=>e.moduloId===`mod-05`),6:Qi.find(e=>e.moduloId===`mod-06`),7:Qi.find(e=>e.moduloId===`mod-07`),8:Qi.find(e=>e.moduloId===`mod-08`),"mod-01":Qi.find(e=>e.moduloId===`mod-01`),"mod-02":Qi.find(e=>e.moduloId===`mod-02`),"mod-03":Qi.find(e=>e.moduloId===`mod-03`),"mod-04":Qi.find(e=>e.moduloId===`mod-04`),"mod-05":Qi.find(e=>e.moduloId===`mod-05`),"mod-06":Qi.find(e=>e.moduloId===`mod-06`),"mod-07":Qi.find(e=>e.moduloId===`mod-07`),"mod-08":Qi.find(e=>e.moduloId===`mod-08`)},ea=t((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),ta=t(((e,t)=>{t.exports=ea()})),Q=ta();function na({size:e=32,showText:t=!1,className:n=``}){return(0,Q.jsxs)(`div`,{className:`inline-flex items-center gap-3 select-none ${n}`,children:[(0,Q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 32 32`,width:e,height:e,fill:`none`,className:`shrink-0 transition-transform duration-300 hover:scale-105`,"aria-label":`Isotipo Curso VIP`,children:[(0,Q.jsx)(`rect`,{width:`32`,height:`32`,rx:`7`,fill:`#001f48`,stroke:`rgba(255, 181, 21, 0.3)`,strokeWidth:`1`}),(0,Q.jsx)(`path`,{d:`M16 3.5 L26 7.5 V15 C26 21.5 16 27 16 27 C16 27 6 21.5 6 15 V7.5 Z`,stroke:`#FFB515`,strokeWidth:`2`,strokeLinejoin:`round`,fill:`rgba(255, 181, 21, 0.12)`}),(0,Q.jsx)(`path`,{d:`M10.5 10.5 L16 21 L21.5 10.5`,stroke:`#FFB515`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,Q.jsx)(`circle`,{cx:`16`,cy:`7.5`,r:`1.5`,fill:`#FFB515`})]}),t&&(0,Q.jsxs)(`div`,{className:`flex flex-col min-w-0`,children:[(0,Q.jsx)(`div`,{className:`flex items-center gap-1.5`,children:(0,Q.jsx)(`span`,{className:`font-extrabold text-sm sm:text-base tracking-tight text-white leading-none font-['Outfit']`,children:`Curso VIP`})}),(0,Q.jsx)(`span`,{className:`text-[10px] sm:text-[11px] text-[#FFB515] font-medium tracking-tight truncate mt-0.5 font-['Inter']`,children:`Custodia de Dignatarios · Policía TDF`})]})]})}function ra({onBack:e,validatedModules:t={},practicalScores:n={},onResetProgress:r,onCompleteAll:i,onOpenCertificate:a}){let o=Object.keys(t).length,s=Object.keys(n).length,c=Math.round(o/8*100);return(0,Q.jsx)(`div`,{className:`min-h-screen bg-[#002C66] text-white p-4 sm:p-8`,children:(0,Q.jsxs)(`div`,{className:`max-w-6xl mx-auto space-y-8`,children:[(0,Q.jsxs)(`header`,{className:`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#004DB3]/50`,children:[(0,Q.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:items-center gap-5`,children:[(0,Q.jsx)(na,{size:40,showText:!0}),(0,Q.jsxs)(`div`,{className:`sm:border-l sm:border-[#004DB3]/50 sm:pl-5`,children:[(0,Q.jsx)(`h1`,{className:`text-xl sm:text-2xl font-extrabold text-white`,children:`Centro de Comando Académico`}),(0,Q.jsx)(`p`,{className:`text-slate-300 text-xs mt-0.5`,children:`Supervisión y control de acreditación operacional`})]})]}),(0,Q.jsxs)(`button`,{onClick:e,className:`flex items-center gap-2 px-4 py-2 bg-[#003273] hover:bg-[#004DB3] text-xs font-bold text-white border border-[#004DB3]/60 rounded-xl transition cursor-pointer`,children:[(0,Q.jsx)(Xr,{className:`w-4 h-4`}),` Volver a los Módulos`]})]}),(0,Q.jsxs)(`div`,{className:`p-4 bg-[#002C66]/80 border border-[#004DB3]/50 rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-lg`,children:[(0,Q.jsxs)(`div`,{className:`text-xs text-white`,children:[(0,Q.jsx)(`strong`,{children:`Controles de Simulación de Alumno:`}),` Modifique el estado del cursado para pruebas operacionales.`]}),(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Q.jsxs)(`button`,{onClick:i,className:`px-3.5 py-2 bg-gradient-to-r from-[#FFB515] to-[#f59e0b] text-black rounded-xl text-xs font-bold transition hover:brightness-110 flex items-center gap-1.5 shadow-md shadow-[#001f48]/50 cursor-pointer`,children:[(0,Q.jsx)(Di,{className:`w-3.5 h-3.5`}),(0,Q.jsx)(`span`,{children:`Acreditar Todos los Módulos (100%)`})]}),(0,Q.jsxs)(`button`,{onClick:a,className:`px-3.5 py-2 bg-[#0069F2] hover:bg-[#004DB3] text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer`,children:[(0,Q.jsx)(Qr,{className:`w-3.5 h-3.5`}),(0,Q.jsx)(`span`,{children:`Abrir Certificado Oficial`})]}),(0,Q.jsxs)(`button`,{onClick:r,className:`px-3.5 py-2 bg-[#003273] hover:bg-[#004DB3] text-white border border-[#004DB3]/60 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer`,children:[(0,Q.jsx)(bi,{className:`w-3.5 h-3.5`}),(0,Q.jsx)(`span`,{children:`Reiniciar Progreso`})]})]})]}),(0,Q.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5`,children:[(0,Q.jsxs)(`div`,{className:`bg-[#003273] p-5 rounded-2xl border border-[#004DB3]/50 shadow-xl`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-3 mb-3`,children:[(0,Q.jsx)(`div`,{className:`p-2.5 bg-[#0069F2]/20 rounded-xl text-[#0069F2]`,children:(0,Q.jsx)(ki,{className:`w-5 h-5`})}),(0,Q.jsx)(`h3`,{className:`text-xs font-semibold text-slate-300`,children:`Efectivos en Cohorte`})]}),(0,Q.jsx)(`p`,{className:`text-3xl font-black text-white`,children:`42`}),(0,Q.jsx)(`p`,{className:`text-[11px] text-slate-400 mt-1`,children:`Efectivos convocados a formación`})]}),(0,Q.jsxs)(`div`,{className:`bg-[#003273] p-5 rounded-2xl border border-[#004DB3]/50 shadow-xl`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-3 mb-3`,children:[(0,Q.jsx)(`div`,{className:`p-2.5 bg-emerald-500/20 rounded-xl text-emerald-400`,children:(0,Q.jsx)($r,{className:`w-5 h-5`})}),(0,Q.jsx)(`h3`,{className:`text-xs font-semibold text-slate-300`,children:`Módulos Validados`})]}),(0,Q.jsxs)(`p`,{className:`text-3xl font-black text-emerald-400`,children:[o,` / 8`]}),(0,Q.jsxs)(`p`,{className:`text-[11px] text-slate-400 mt-1`,children:[`Completados por este usuario (`,c,`%)`]})]}),(0,Q.jsxs)(`div`,{className:`bg-[#003273] p-5 rounded-2xl border border-[#004DB3]/50 shadow-xl`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-3 mb-3`,children:[(0,Q.jsx)(`div`,{className:`p-2.5 bg-[#004DB3]/40 rounded-xl text-white`,children:(0,Q.jsx)(Yr,{className:`w-5 h-5 text-[#0069F2]`})}),(0,Q.jsx)(`h3`,{className:`text-xs font-semibold text-slate-300`,children:`Casos Prácticos`})]}),(0,Q.jsxs)(`p`,{className:`text-3xl font-black text-white`,children:[s,` / 8`]}),(0,Q.jsx)(`p`,{className:`text-[11px] text-slate-400 mt-1`,children:`Rúbricas operacionales aprobadas`})]}),(0,Q.jsxs)(`div`,{className:`bg-[#003273] p-5 rounded-2xl border border-[#004DB3]/50 shadow-xl`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-3 mb-3`,children:[(0,Q.jsx)(`div`,{className:`p-2.5 bg-[#FFB515]/15 rounded-xl text-[#FFB515]`,children:(0,Q.jsx)(Qr,{className:`w-5 h-5`})}),(0,Q.jsx)(`h3`,{className:`text-xs font-semibold text-slate-300`,children:`Estado de Acreditación`})]}),(0,Q.jsx)(`p`,{className:`text-2xl font-black ${o===8?`text-[#FFB515]`:`text-slate-300`}`,children:o===8?`HABILITADO`:`EN FORMACIÓN`}),(0,Q.jsx)(`p`,{className:`text-[11px] text-slate-400 mt-1`,children:`Triple condición de certificación`})]})]}),(0,Q.jsxs)(`div`,{className:`bg-[#003273] rounded-2xl border border-[#004DB3]/50 overflow-hidden shadow-xl`,children:[(0,Q.jsxs)(`div`,{className:`p-5 border-b border-[#004DB3]/50 flex items-center justify-between`,children:[(0,Q.jsxs)(`h3`,{className:`text-sm font-bold text-white flex items-center gap-2`,children:[(0,Q.jsx)(ki,{className:`w-4 h-4 text-[#FFB515]`}),`Padrón de Efectivos y Estado de Cumplimiento`]}),(0,Q.jsx)(`span`,{className:`text-[11px] text-slate-300`,children:`Base Central Ushuaia`})]}),(0,Q.jsx)(`div`,{className:`overflow-x-auto`,children:(0,Q.jsxs)(`table`,{className:`w-full text-left text-xs text-white`,children:[(0,Q.jsx)(`thead`,{className:`bg-[#002C66]/90 text-white font-semibold border-b border-[#004DB3]/50 uppercase text-[10px] tracking-wider`,children:(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`th`,{className:`p-3.5 pl-5`,children:`ID Operativo`}),(0,Q.jsx)(`th`,{className:`p-3.5`,children:`Nombre y Jerarquía`}),(0,Q.jsx)(`th`,{className:`p-3.5`,children:`Destino / Unidad`}),(0,Q.jsx)(`th`,{className:`p-3.5`,children:`Progreso`}),(0,Q.jsx)(`th`,{className:`p-3.5 pr-5`,children:`Estado`})]})}),(0,Q.jsx)(`tbody`,{className:`divide-y divide-[#004DB3]/30`,children:[{id:`CPO-001`,nombre:`Oficial Principal L. Benítez`,unidad:`Custodia Gobernación`,progreso:100,estado:`Certificado`},{id:`CPO-002`,nombre:`Subinspector M. Quiroga`,unidad:`Seguridad Legislatura`,progreso:c,estado:c===100?`Certificado`:`En Curso`},{id:`CPO-003`,nombre:`Sargento 1ro C. Vega`,unidad:`División Avanzadas Ushuaia`,progreso:88,estado:`En Curso`},{id:`CPO-004`,nombre:`Oficial Ayudante S. Morales`,unidad:`Convoy Táctico Río Grande`,progreso:75,estado:`En Curso`},{id:`CPO-005`,nombre:`Sargento D. Navarro`,unidad:`Cápsula Tolhuin`,progreso:62,estado:`En Curso`}].map(e=>(0,Q.jsxs)(`tr`,{className:`hover:bg-[#004DB3]/30 transition`,children:[(0,Q.jsx)(`td`,{className:`p-3.5 pl-5 font-mono text-slate-300`,children:e.id}),(0,Q.jsx)(`td`,{className:`p-3.5 font-bold text-white`,children:e.nombre}),(0,Q.jsx)(`td`,{className:`p-3.5 text-slate-300`,children:e.unidad}),(0,Q.jsx)(`td`,{className:`p-3.5`,children:(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Q.jsx)(`div`,{className:`w-24 bg-[#001f48] rounded-full h-1.5 overflow-hidden border border-[#004DB3]/40`,children:(0,Q.jsx)(`div`,{className:`bg-gradient-to-r from-[#0069F2] to-[#FFB515] h-full rounded-full`,style:{width:`${e.progreso}%`}})}),(0,Q.jsxs)(`span`,{className:`font-mono text-white`,children:[e.progreso,`%`]})]})}),(0,Q.jsx)(`td`,{className:`p-3.5 pr-5`,children:(0,Q.jsx)(`span`,{className:`px-2 py-0.5 rounded text-[10px] font-bold ${e.estado===`Certificado`?`bg-emerald-500/20 text-emerald-400 border border-emerald-500/40`:`bg-[#FFB515]/20 text-[#FFB515] border border-[#FFB515]/40`}`,children:e.estado})})]},e.id))})]})})]})]})})}function ia({evaluation:e,moduleId:t,moduleTitle:n,onClose:r,onStartQuiz:i}){let a=(e?.variantes?.A||e?.preguntas||[]).map((e,t)=>{let n=(e.o||e.opciones||[])[typeof e.c==`number`?e.c:e.respuestaCorrecta||0]||`Respuesta clasificada.`,r=e.exp||e.explicacion||`Protocolo operativo estandarizado para la protección y custodia de dignatarios de la Policía de Tierra del Fuego.`;return{id:e.id||t,question:e.p||e.pregunta,answer:n,explanation:r}}),[o,s]=(0,u.useState)(0),[c,l]=(0,u.useState)(!1),[d,f]=(0,u.useState)(a);(0,u.useEffect)(()=>{f(a),s(0),l(!1)},[e]),(0,u.useEffect)(()=>{let e=e=>{e.key===` `||e.code===`Space`?(e.preventDefault(),l(e=>!e)):e.key===`ArrowRight`?(e.preventDefault(),p()):e.key===`ArrowLeft`?(e.preventDefault(),m()):e.key===`Escape`&&r()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[o,c,d]);let p=()=>{l(!1),setTimeout(()=>{s(e=>(e+1)%d.length)},150)},m=()=>{l(!1),setTimeout(()=>{s(e=>(e-1+d.length)%d.length)},150)},h=()=>{l(!1);let e=[...d].sort(()=>Math.random()-.5);f(e),s(0)};if(!d.length)return null;let g=d[o];return(0,Q.jsx)(`div`,{className:`fixed inset-0 z-50 bg-[#001a40]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto`,onClick:r,children:(0,Q.jsxs)(`div`,{className:`bg-[#002C66] border border-[#FFB515]/50 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col my-auto`,onClick:e=>e.stopPropagation(),children:[(0,Q.jsxs)(`div`,{className:`p-4 sm:p-5 border-b border-[#004DB3]/50 bg-[#001f48] flex items-center justify-between`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,Q.jsx)(`div`,{className:`p-2 bg-[#FFB515]/15 border border-[#FFB515]/40 rounded-xl text-[#FFB515]`,children:(0,Q.jsx)(bi,{className:`w-5 h-5`})}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Q.jsx)(`span`,{className:`text-[10px] font-mono uppercase bg-[#FFB515]/20 text-[#FFB515] px-2 py-0.5 rounded font-bold border border-[#FFB515]/40`,children:`Modo Repaso Táctico • Flashcards`}),(0,Q.jsxs)(`span`,{className:`text-[10px] font-mono text-slate-300 bg-[#002C66] border border-[#004DB3]/50 px-2 py-0.5 rounded`,children:[`Ficha `,o+1,` de `,d.length]})]}),(0,Q.jsx)(`h2`,{className:`text-sm sm:text-base font-bold text-white mt-1 truncate`,children:n||`Módulo 0${t}`})]})]}),(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Q.jsx)(`button`,{onClick:h,className:`p-1.5 rounded-lg text-slate-300 hover:text-[#FFB515] hover:bg-[#004DB3]/40 transition`,title:`Mezclar tarjetas`,children:(0,Q.jsx)(Ei,{className:`w-4 h-4`})}),(0,Q.jsx)(`button`,{onClick:r,className:`p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#004DB3]/40 transition`,children:(0,Q.jsx)(Ai,{className:`w-5 h-5`})})]})]}),(0,Q.jsxs)(`div`,{className:`p-5 sm:p-8 flex flex-col items-center justify-center min-h-[340px]`,children:[(0,Q.jsx)(`div`,{onClick:()=>l(e=>!e),className:`w-full max-w-xl h-72 sm:h-80 cursor-pointer select-none perspective`,title:`Haz clic o presiona Barra Espaciadora para voltear`,children:(0,Q.jsxs)(`div`,{className:`relative w-full h-full duration-500 transform-style-3d transition-transform ${c?`rotate-y-180`:``}`,children:[(0,Q.jsxs)(`div`,{className:`absolute inset-0 backface-hidden p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#003273] to-[#002657] border-2 border-[#004DB3]/70 hover:border-[#FFB515]/60 shadow-2xl flex flex-col justify-between transition-all`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Q.jsxs)(`span`,{className:`text-[10px] font-mono uppercase tracking-wider text-[#FFB515] font-bold flex items-center gap-1.5`,children:[(0,Q.jsx)(ci,{className:`w-3.5 h-3.5`}),` Situación / Doctrina Operativa`]}),(0,Q.jsx)(`span`,{className:`text-[10px] text-slate-400 font-mono`,children:`Clic para ver resolución ↻`})]}),(0,Q.jsx)(`div`,{className:`my-auto text-center`,children:(0,Q.jsxs)(`p`,{className:`text-base sm:text-lg font-bold text-white leading-relaxed`,children:[`"`,g.question,`"`]})}),(0,Q.jsx)(`div`,{className:`text-center`,children:(0,Q.jsx)(`span`,{className:`inline-block px-3 py-1 bg-[#001f48] border border-[#004DB3]/60 rounded-full text-[11px] text-[#FFB515] font-semibold`,children:`¿Cuál es la respuesta operacional correcta?`})})]}),(0,Q.jsxs)(`div`,{className:`absolute inset-0 backface-hidden rotate-y-180 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#002657] to-[#001f48] border-2 border-[#FFB515] shadow-2xl flex flex-col justify-between shadow-[#FFB515]/10`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Q.jsxs)(`span`,{className:`text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5`,children:[(0,Q.jsx)(oi,{className:`w-3.5 h-3.5 text-emerald-400`}),` Criterio Táctico Verificado`]}),(0,Q.jsx)(`span`,{className:`text-[10px] text-slate-400 font-mono`,children:`Doctrina Oficial TDF`})]}),(0,Q.jsxs)(`div`,{className:`my-auto space-y-3`,children:[(0,Q.jsx)(`p`,{className:`text-sm sm:text-base font-extrabold text-[#FFB515] leading-snug`,children:g.answer}),(0,Q.jsxs)(`p`,{className:`text-xs text-slate-200 leading-relaxed bg-[#002C66]/80 p-3 rounded-xl border border-[#004DB3]/50`,children:[`💡 `,(0,Q.jsx)(`strong`,{className:`text-white`,children:`Fundamentación:`}),` `,g.explanation]})]}),(0,Q.jsx)(`div`,{className:`text-center`,children:(0,Q.jsx)(`span`,{className:`text-[10px] text-slate-400`,children:`Presiona Barra Espaciadora o haz clic para volver`})})]})]})}),(0,Q.jsxs)(`div`,{className:`flex items-center justify-between w-full max-w-xl mt-6`,children:[(0,Q.jsxs)(`button`,{onClick:m,className:`px-4 py-2 bg-[#003273] hover:bg-[#004DB3] border border-[#004DB3]/60 rounded-xl text-xs font-bold text-white transition flex items-center gap-1.5 cursor-pointer`,children:[(0,Q.jsx)(ri,{className:`w-4 h-4`}),` Anterior`]}),(0,Q.jsx)(`div`,{className:`flex items-center gap-1`,children:d.map((e,t)=>(0,Q.jsx)(`div`,{onClick:()=>{l(!1),s(t)},className:`h-1.5 rounded-full transition-all cursor-pointer ${o===t?`w-6 bg-[#FFB515]`:`w-2 bg-[#004DB3]/60 hover:bg-[#0069F2]`}`},t))}),(0,Q.jsxs)(`button`,{onClick:p,className:`px-4 py-2 bg-[#003273] hover:bg-[#004DB3] border border-[#004DB3]/60 rounded-xl text-xs font-bold text-white transition flex items-center gap-1.5 cursor-pointer`,children:[`Siguiente `,(0,Q.jsx)(ii,{className:`w-4 h-4`})]})]})]}),(0,Q.jsxs)(`div`,{className:`p-4 border-t border-[#004DB3]/50 bg-[#001f48] flex items-center justify-between text-xs`,children:[(0,Q.jsxs)(`span`,{className:`text-slate-300`,children:[`Atajos: `,(0,Q.jsx)(`kbd`,{className:`font-mono text-[#FFB515]`,children:`ESPACIO`}),` Voltear • `,(0,Q.jsx)(`kbd`,{className:`font-mono text-[#FFB515]`,children:`←/→`}),` Navegar`]}),(0,Q.jsxs)(`button`,{onClick:()=>{r(),i&&i()},className:`px-4 py-2 bg-gradient-to-r from-[#FFB515] to-[#f59e0b] text-black font-bold rounded-xl transition hover:brightness-110 flex items-center gap-1.5 shadow-md shadow-[#001f48]/50 cursor-pointer`,children:[(0,Q.jsx)(Qr,{className:`w-4 h-4`}),(0,Q.jsx)(`span`,{children:`Rendir Evaluación Formal`})]})]})]})})}function aa({evaluation:e,moduleId:t,moduleTitle:n,onClose:r,onComplete:i}){if(!e)return null;let a=!!e.variantes,o=a?Object.keys(e.variantes):[],[s,c]=(0,u.useState)(o[0]||`A`),[l,d]=(0,u.useState)(1),[f,p]=(0,u.useState)({}),[m,h]=(0,u.useState)(!1),[g,_]=(0,u.useState)(0),[v,y]=(0,u.useState)(!1),[b,x]=(0,u.useState)(`all`),S=e.maxIntentos||3,C=e.notaMinima||70,w=(a?e.variantes[s]||[]:e.preguntas||[]).map(e=>({id:e.id,pregunta:e.p||e.pregunta,opciones:e.o||e.opciones||[],respuestaCorrecta:typeof e.c==`number`?e.c:e.respuestaCorrecta||0,explicacion:e.exp||e.explicacion||(e.o&&typeof e.c==`number`?`Criterio Doctrinal: La respuesta correcta es "${e.o[e.c]}", fundamentada en los protocolos operacionales de custodia de dignatarios de la Policía TDF.`:``)})),T=(e,t)=>{m||p(n=>({...n,[e]:t}))},E=Object.keys(f).length,D=w.length,O=()=>{let e=0;w.forEach(t=>{f[t.id]===t.respuestaCorrecta&&e++});let n=Math.round(e/D*100);_(n),h(!0),n>=C&&(Mi({particleCount:100,spread:70,origin:{y:.6}}),i&&i(t,n))},k=()=>{if(!(l>=S)){if(a&&o.length>1){let e=(o.indexOf(s)+1)%o.length;c(o[e])}d(e=>e+1),p({}),h(!1),_(0),x(`all`)}},A=m&&g>=C,j=w.filter(e=>!m||b===`all`||f[e.id]!==e.respuestaCorrecta),M=w.filter(e=>f[e.id]===e.respuestaCorrecta).length,N=D-M;return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`div`,{className:`fixed inset-0 z-50 bg-[#002C66]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto`,children:(0,Q.jsxs)(`div`,{className:`bg-[#003273] border border-[#FFB515]/40 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] my-auto`,children:[(0,Q.jsxs)(`div`,{className:`p-4 sm:p-5 border-b border-[#004DB3]/50 bg-[#002C66]/90 flex items-center justify-between shrink-0`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center space-x-3`,children:[(0,Q.jsx)(`div`,{className:`p-2 bg-[#FFB515]/15 border border-[#FFB515]/40 rounded-xl text-[#FFB515]`,children:(0,Q.jsx)(Qr,{className:`w-5 h-5`})}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Q.jsxs)(`span`,{className:`text-[10px] font-mono uppercase bg-[#FFB515]/20 text-[#FFB515] px-2 py-0.5 rounded font-bold border border-[#FFB515]/40`,children:[`Evaluación Táctica 0`,t]}),a&&(0,Q.jsxs)(`span`,{className:`text-[10px] font-mono text-white bg-[#002C66] border border-[#004DB3]/50 px-2 py-0.5 rounded`,children:[`Variante `,s,` • Intento `,l,`/`,S]})]}),(0,Q.jsx)(`h2`,{className:`text-sm sm:text-base font-bold text-white mt-1 truncate max-w-md`,children:n||`Módulo 0${t}`})]})]}),(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[!m&&(0,Q.jsxs)(`button`,{onClick:()=>y(!0),className:`px-3 py-1.5 rounded-xl bg-[#001f48] border border-[#FFB515]/50 text-[#FFB515] hover:bg-[#FFB515]/15 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer`,title:`Repasar conceptos con tarjetas antes de calificar`,children:[(0,Q.jsx)(bi,{className:`w-3.5 h-3.5`}),(0,Q.jsx)(`span`,{className:`hidden sm:inline`,children:`Repaso Rápido`})]}),(0,Q.jsx)(`button`,{onClick:r,className:`p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#004DB3]/40 transition`,children:(0,Q.jsx)(Ai,{className:`w-5 h-5`})})]})]}),(0,Q.jsxs)(`div`,{className:`p-4 sm:p-6 overflow-y-auto space-y-6 flex-1`,children:[m?(0,Q.jsxs)(`div`,{className:`p-5 rounded-2xl border text-center space-y-3 ${A?`bg-emerald-500/10 border-emerald-500/50 text-emerald-300 shadow-lg shadow-emerald-950/40`:`bg-rose-500/10 border-rose-500/50 text-rose-300 shadow-lg shadow-rose-950/40`}`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center justify-center gap-2`,children:[A?(0,Q.jsx)(oi,{className:`w-7 h-7 text-emerald-400`}):(0,Q.jsx)(ai,{className:`w-7 h-7 text-rose-400`}),(0,Q.jsx)(`h3`,{className:`text-lg sm:text-xl font-black tracking-wide`,children:A?`¡ACREDITACIÓN OPERACIONAL APROBADA!`:`EVALUACIÓN NO SUPERADA`})]}),(0,Q.jsxs)(`div`,{className:`flex items-center justify-center gap-4 text-xs font-mono`,children:[(0,Q.jsxs)(`span`,{className:`px-3 py-1 rounded-full bg-[#001f48] border border-[#004DB3]/60 text-white`,children:[`Puntaje: `,(0,Q.jsxs)(`strong`,{className:`text-sm ${A?`text-emerald-400`:`text-rose-400`}`,children:[g,`%`]})]}),(0,Q.jsxs)(`span`,{className:`px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40`,children:[M,` Correctas`]}),N>0&&(0,Q.jsxs)(`span`,{className:`px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40`,children:[N,` A Reforzar`]})]}),(0,Q.jsx)(`p`,{className:`text-xs text-slate-200 max-w-lg mx-auto leading-relaxed`,children:A?`Has demostrado el dominio doctrinal requerido para este módulo de protección de dignatarios de la Policía de Tierra del Fuego.`:`Revisa las justificaciones técnicas a continuación para reforzar el criterio táctico y luego rota hacia la siguiente variante.`}),N>0&&(0,Q.jsxs)(`div`,{className:`pt-2 flex items-center justify-center gap-2`,children:[(0,Q.jsxs)(`button`,{onClick:()=>x(`all`),className:`px-3 py-1 rounded-lg text-xs font-semibold transition ${b===`all`?`bg-[#FFB515] text-black font-bold`:`bg-[#002C66] text-slate-300 hover:text-white border border-[#004DB3]/50`}`,children:[`Ver Todas (`,D,`)`]}),(0,Q.jsxs)(`button`,{onClick:()=>x(`mistakes`),className:`px-3 py-1 rounded-lg text-xs font-semibold transition ${b===`mistakes`?`bg-rose-500 text-white font-bold`:`bg-[#002C66] text-rose-300 hover:text-white border border-rose-500/40`}`,children:[`Ver Solo Errores (`,N,`)`]})]})]}):(0,Q.jsxs)(`div`,{className:`p-3.5 bg-[#002C66]/80 border border-[#004DB3]/50 rounded-xl flex items-center justify-between text-xs text-white`,children:[(0,Q.jsxs)(`span`,{children:[`Responde las `,D,` preguntas operacionales. Aprobación mínima: `,(0,Q.jsxs)(`strong`,{className:`text-[#FFB515]`,children:[C,`%`]})]}),(0,Q.jsxs)(`span`,{className:`font-mono text-[#FFB515] font-bold`,children:[E,`/`,D,` Respondidas`]})]}),(0,Q.jsx)(`div`,{className:`space-y-5`,children:j.map((e,t)=>{let n=f[e.id],r=n===e.respuestaCorrecta;return(0,Q.jsx)(`div`,{className:`p-4 rounded-xl border transition-all ${m?r?`bg-emerald-950/20 border-emerald-500/40`:`bg-rose-950/20 border-rose-500/40`:`bg-[#002C66]/60 border-[#004DB3]/50 hover:border-[#0069F2]`}`,children:(0,Q.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,Q.jsx)(`span`,{className:`px-2 py-0.5 text-xs font-mono font-bold rounded shrink-0 mt-0.5 ${m?r?`bg-emerald-500 text-slate-950`:`bg-rose-500 text-white`:`bg-[#004DB3]/60 text-white`}`,children:m?r?`✓`:`✗`:t+1}),(0,Q.jsxs)(`div`,{className:`flex-1`,children:[(0,Q.jsx)(`p`,{className:`text-xs sm:text-sm font-semibold text-white leading-relaxed`,children:e.pregunta}),(0,Q.jsx)(`div`,{className:`mt-3 space-y-2`,children:e.opciones.map((t,i)=>{let a=n===i,o=`bg-[#003273]/80 border-[#004DB3]/50 text-white hover:bg-[#004DB3]/50`;return m?o=i===e.respuestaCorrecta?`bg-emerald-500/25 border-emerald-400 text-emerald-200 font-bold`:a&&!r?`bg-rose-500/25 border-rose-400 text-rose-200 line-through`:`bg-[#002C66]/40 border-[#004DB3]/30 text-slate-400 opacity-60`:a&&(o=`bg-[#FFB515]/20 border-[#FFB515] text-[#FFB515] font-semibold shadow-sm`),(0,Q.jsxs)(`button`,{onClick:()=>T(e.id,i),disabled:m,className:`w-full text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between ${o}`,children:[(0,Q.jsx)(`span`,{children:t}),m&&i===e.respuestaCorrecta&&(0,Q.jsxs)(`span`,{className:`flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-400 shrink-0 ml-2`,children:[(0,Q.jsx)(ni,{className:`w-3.5 h-3.5`}),` Correcta`]})]},i)})}),m&&e.explicacion&&(0,Q.jsxs)(`div`,{className:`mt-3 p-3 bg-[#001f48] border border-[#004DB3]/60 rounded-xl text-xs text-white leading-relaxed`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-1.5 text-[#FFB515] font-bold text-[11px] mb-1`,children:[(0,Q.jsx)(wi,{className:`w-3.5 h-3.5 text-[#FFB515]`}),(0,Q.jsx)(`span`,{children:`Justificación Doctrinal Oficial:`})]}),(0,Q.jsx)(`p`,{className:`text-slate-200`,children:e.explicacion})]})]})]})},e.id)})})]}),(0,Q.jsxs)(`div`,{className:`p-4 border-t border-[#004DB3]/50 bg-[#002C66]/95 flex items-center justify-between shrink-0`,children:[(0,Q.jsx)(`div`,{className:`text-xs text-slate-200`,children:m?(0,Q.jsxs)(`span`,{children:[`Resultado: `,(0,Q.jsxs)(`strong`,{className:A?`text-emerald-400`:`text-rose-400`,children:[g,`%`]})]}):(0,Q.jsx)(`span`,{children:`Selecciona una opción para cada pregunta antes de calificar.`})}),(0,Q.jsx)(`div`,{className:`flex items-center gap-2`,children:m?(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[!A&&l<S&&(0,Q.jsxs)(`button`,{onClick:k,className:`px-4 py-2 bg-[#FFB515]/15 hover:bg-[#FFB515]/25 border border-[#FFB515]/50 text-[#FFB515] rounded-xl font-semibold text-xs transition flex items-center gap-2`,children:[(0,Q.jsx)(bi,{className:`w-3.5 h-3.5`}),(0,Q.jsxs)(`span`,{children:[`Reintentar (Variante `,o[(o.indexOf(s)+1)%o.length]||`B`,`)`]})]}),(0,Q.jsx)(`button`,{onClick:r,className:`px-5 py-2 bg-[#004DB3] hover:bg-[#0069F2] text-white rounded-xl font-semibold text-xs transition cursor-pointer`,children:A?`Finalizar y Guardar`:`Cerrar`})]}):(0,Q.jsxs)(`button`,{onClick:O,disabled:E<D,className:`px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 ${E===D?`bg-gradient-to-r from-[#FFB515] to-[#f59e0b] text-black hover:brightness-110 shadow-lg shadow-[#001f48]/50 cursor-pointer`:`bg-[#003273] text-slate-400 cursor-not-allowed border border-[#004DB3]/40`}`,children:[(0,Q.jsxs)(`span`,{children:[`Enviar y Calificar (`,E,`/`,D,`)`]}),(0,Q.jsx)(ii,{className:`w-4 h-4`})]})})]})]})}),v&&(0,Q.jsx)(ia,{evaluation:e,moduleId:t,moduleTitle:n,onClose:()=>y(!1),onStartQuiz:()=>y(!1)})]})}function oa({practical:e,moduleId:t,onClose:n,onSubmitPractical:r}){if(!e)return null;let[i,a]=(0,u.useState)(``),[o,s]=(0,u.useState)(!1),[c,l]=(0,u.useState)(null),d={"mod-01":`1. Detección de Anomalía: Durante el arribo del Dignatario a la Legislatura, el custodio lateral observa un individuo en actitud esquiva grabando insistentemente la zona de descenso.
2. Transición de Cooper: Se produce una transición inmediata de Estado Amarillo (alerta relajada base) a Estado Naranja (alerta específica focalizada). Se avisa por frecuencia táctica: "Anomalía a las dos, sector vallas".
3. Mitigación de Vulnerabilidad: Aplicando la Tríada Fundamental (Vulnerabilidad + Amenaza = Riesgo), no podemos eliminar la amenaza externa inmediatamente, por lo que reducimos la vulnerabilidad cerrando la cápsula a formación Diamante compacto e interponiendo al escolta de flanco como pantalla humana.
4. Doctrina Silencio y Soberanía: Se ejecuta la maniobra de ingreso fluido al edificio sin alterar la serenidad del dignatario ni alertar innecesariamente al público, neutralizando el riesgo de forma invisible y profesional.`,"mod-02":`1. FASE 1 (Alerta Vocal): Al detectar el tirador a las tres (15 metros), el escolta que detecta grita de inmediato: "¡CONTACTO A LAS TRES! ¡ABAJO!".
2. FASE 2 (Escudo Humano): El Jefe de Brigada (JB) salta físicamente sobre el VIP, empujándolo hacia abajo para reducir la silueta expuesta y formando una barrera corporal balística con su chaleco y cuerpo.
3. FASE 3 (Evacuación Rápida "Off the X"): Los escoltas de retaguardia y flanco izquierdo toman al dignatario por debajo de las axilas y cinturón, iniciando la evacuación acelerada hacia el interior del vehículo blindado Móvil A o cobertura dura más cercana.
4. FASE 4 (Supresión y Escape): El escolta más expuesto realiza fuego disuasivo de cobertura hacia el vector de agresión mientras el convoy arranca. Regla inquebrantable: La cápsula principal NUNCA se queda a combatir; la prioridad absoluta es extraer al protegido.`,"mod-03":`ORDEN DE OPERACIONES N° 04/2026 — OPERATIVO TRASLADO AEROPUERTO / CASA DE GOBIERNO
1. SITUACIÓN: Arribo de delegación consular. Hipótesis de riesgo: Media. Clima: Viento moderado, calzada seca.
2. MISIÓN: La División Custodia Gubernamental protegerá a la comitiva en tránsito continuo desde el Aeropuerto Malvinas Argentinas hasta Casa de Gobierno a partir de las 14:00 hs.
3. EJECUCIÓN: Convoy de 3 móviles (Piloto, Móvil A VIP, Apoyo).
   - Ruta Primaria: RN3 -> Av. Maipú -> San Martín -> Casa de Gobierno (18 min).
   - Ruta Secundaria: RN3 -> Av. Héroes de Malvinas -> Prefectura Naval -> Casa de Gobierno (24 min).
4. ADMINISTRACIÓN Y LOGÍSTICA: Combustible al 100%, botiquines IFAK y DEA en Móvil A. Hospital de referencia nivel 1: Hospital Regional Ushuaia (tiempo de respuesta 5 min).
5. COMANDO Y COMUNICACIONES: Frecuencia Táctica CUSTODIA-1 encriptada. Canal secundario repetidora Monte Gallinero. Clave de alerta máxima: "CÓDIGO TITÁN".`,"mod-04":`INSPECCIÓN TÉCNICA DE AVANZADA — SUITE HOTEL ALVEAR
1. Regla de Adyacencia 360°: Se inspeccionaron y bloquearon las habitaciones contiguas izquierda y derecha, así como la suite superior e inferior. Las 4 habitaciones fueron asignadas exclusivamente al personal de seguridad y comando de la custodia.
2. Barrido Técnico: Revisión física y electrónica de tomas de corriente, ductos de aire acondicionado, cuadros y detectores de humo para descarte de artefactos de escucha o microcámaras.
3. Certificación de Safe Room: Se designó el vestidor principal interior como Cuarto Seguro. Cuenta con puerta maciza con pasador interno reforzado, ventilación independiente, línea telefónica fija directa, radio base VHF de respaldo y botiquín de trauma TECC con torniquete y apósito hemostático.
4. Rutas de Evacuación: Salida rápida hacia escalera de incendios este con acceso directo a cochera blindada donde permanecerá el Móvil A con motor en marcha.`,"mod-05":`ANÁLISIS JURÍDICO DE LEGÍTIMA DEFENSA DE TERCEROS (ART. 34 INC. 7 CÓDIGO PENAL)
1. Concurrencia de los Requisitos del Art. 34 CP:
   a) Agresión Ilegítima: El agresor avanza a 4 metros con arma blanca empuñada y en actitud de acometimiento contra el dignatario, constituyendo un ataque actual y no provocado.
   b) Necesidad Racional del Medio Empleado: Ante la distancia crítica de 4 metros (por debajo de la regla Tueller de 6.4 m) y la letalidad inminente, el disparo incapacitante hacia masa central es el único medio eficaz disponible para evitar la muerte del protegido.
   c) Falta de Provocación Suficiente: Ni el protegido ni el custodio realizaron acto alguno que justificara la acción del atacante.
2. Tríada de la Amenaza: Existe Capacidad (cuchillo letal), Oportunidad (distancia letal de 4 m) e Intención manifiesta de agresión.
3. Procedimiento Posterior: Aseguramiento del agresor y su arma, auxilio médico inmediato (911/SEM), delimitación y preservación del perímetro pericial y comunicación fehaciente al Juzgado de Instrucción de turno.`,"mod-06":`PROCEDIMIENTO OPERATIVO ESTÁNDAR — DESINFECCIÓN VEHICULAR TWO-STEP QBRN
1. Equipo de Protección Individual (EPP): Los operadores deberán vestir overol Tyvek impermeable, guantes dobles de nitrilo táctico, máscara facial con filtros combinados para partículas y vapores, y protección ocular sellada.
2. Secuencia Two-Step:
   - Paso 1 (Limpieza Mecánica): Remoción física de polvo, barro y partículas superficiales utilizando toallas de microfibra descartables y solución tensoactiva neutra en manijas, volante, tablero, tapizados y cinturones.
   - Paso 2 (Desinfección de Grado Hospitalario): Pulverización controlada de desinfectante a base de amonio cuaternario de quinta generación o peróxido de hidrógeno estabilizado, respetando el tiempo de contacto mínimo de 10 minutos sin secado manual.
3. Disposición de Residuos: Todos los paños, guantes y materiales utilizados se confinarán en doble bolsa roja de bioseguridad precintada con rótulo de trazabilidad operacional.`,"mod-07":`RESOLUCIÓN OPERACIONAL DE SOCORRISMO TÁCTICO (PROTOCOLO MARCH)
1. FASE 1: Care Under Fire (Bajo Fuego):
   - El operador herido o el custodio más cercano busca cobertura inmediata.
   - Si persiste el intercambio de disparos, la prioridad es devolver el fuego.
   - Se coloca un torniquete táctico CoTCCC (CAT/SOFTT) sobre la ropa en posición "High and Tight" (alto y apretado en la raíz del muslo) hasta que cese el sangrado pulsátil.
2. FASE 2: Tactical Field Care (A Cubierto):
   - M (Massive Bleeding): Verificación de pulso distal. Si persiste sangrado, colocación de segundo torniquete en tándem.
   - A (Airway): Verificación de permeabilidad de vía aérea. Posición de recuperación lateral si está inconsciente.
   - R (Respiration): Descarte de heridas torácicas asociadas.
   - C (Circulation): Evaluación de shock hipovolémico, relleno capilar y pulsos radiales.
   - H (Hypothermia): Colocación de manta térmica reflectiva para prevenir la tríada de la muerte.
3. FASE 3: Tactical Evacuation (TACEVAC):
   - Confección de la tarjeta TCCC escrita indicando hora de colocación del torniquete. Extracción acelerada en Móvil A y enlace SBAR con el shockroom del Hospital Regional.`,"mod-08":`PLAN DE EVACUACIÓN EXTREMA (PEX) — TRAYECTO RESIDENCIA A HELIPUERTO
1. Esquema de Puntos de Extracción:
   - Punto de Extracción Primario (PEP): Móvil A blindado estacionado con motor en ralentí y trompa orientada al portón de salida principal.
   - Punto de Extracción Secundario (PES): Safe Room ubicado en subsuelo de la residencia con puerta nivel RB3 y enlace radial independiente.
   - Punto de Extracción Terciario (PET): Helipuerto del Aeroclub Ushuaia para evacuación aeromédica.
2. Resolución de Bloqueo Vehicular con Maniobra Bootlegger / J-Turn:
   - Si el Móvil A se encuentra emboscado con la calzada frontal obstruida, el conductor táctico engranará reversa con volante recto para acelerar 15-20 metros, luego inducirá un giro brusco de 180° (J-Turn) para rotar el frente del vehículo en dirección contraria y acelerar sin detener la marcha.
3. Señalización en Helipuerto (PET):
   - Uso de humo fumígeno naranja/verde de día o balizas estroboscópicas infrarrojas de noche. Coordenadas enviadas a la tripulación por frecuencia encriptada y custodia perimetral establecida a 50 metros del rotor.`};return(0,Q.jsx)(`div`,{className:`fixed inset-0 z-50 bg-[#002C66]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto`,children:(0,Q.jsxs)(`div`,{className:`bg-[#003273] border border-[#0069F2]/50 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] my-auto`,children:[(0,Q.jsxs)(`div`,{className:`p-4 sm:p-5 border-b border-[#004DB3]/50 bg-[#002C66]/90 flex items-center justify-between shrink-0`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center space-x-3`,children:[(0,Q.jsx)(`div`,{className:`p-2 bg-[#0069F2]/15 border border-[#0069F2]/40 rounded-xl text-[#0069F2]`,children:(0,Q.jsx)(ui,{className:`w-5 h-5`})}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsxs)(`span`,{className:`text-[10px] font-mono uppercase bg-[#0069F2]/25 text-white px-2 py-0.5 rounded font-bold border border-[#0069F2]/50`,children:[`Caso Práctico Operacional 0`,t]}),(0,Q.jsx)(`h2`,{className:`text-sm sm:text-base font-bold text-white mt-1 truncate max-w-md`,children:e.titulo})]})]}),(0,Q.jsx)(`button`,{onClick:n,className:`p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#004DB3]/40 transition`,children:(0,Q.jsx)(Ai,{className:`w-5 h-5`})})]}),(0,Q.jsxs)(`div`,{className:`p-4 sm:p-6 overflow-y-auto space-y-6 flex-1`,children:[(0,Q.jsxs)(`div`,{className:`bg-[#002C66]/80 border border-[#004DB3]/50 p-4 sm:p-5 rounded-xl space-y-3`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Q.jsxs)(`h3`,{className:`text-xs font-bold text-[#FFB515] uppercase tracking-wider flex items-center gap-1.5`,children:[(0,Q.jsx)(ai,{className:`w-4 h-4`}),` Consigna Operacional`]}),(0,Q.jsx)(`button`,{onClick:()=>{let n=e.moduloId||`mod-0${t}`;d[n]&&a(d[n])},className:`text-[11px] text-[#FFB515] hover:text-[#ffd269] underline font-medium cursor-pointer`,children:`Cargar plantilla doctrinal de ejemplo`})]}),(0,Q.jsx)(`p`,{className:`text-xs sm:text-sm text-white leading-relaxed`,children:e.consigna})]}),e.rubrica?.criterios&&(0,Q.jsxs)(`div`,{className:`p-4 bg-[#002C66]/60 border border-[#004DB3]/50 rounded-xl space-y-3`,children:[(0,Q.jsx)(`h4`,{className:`text-xs font-semibold text-white uppercase tracking-wider`,children:`Criterios de Evaluación y Ponderación:`}),(0,Q.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-3`,children:e.rubrica.criterios.map((e,t)=>(0,Q.jsxs)(`div`,{className:`p-3 bg-[#003273] rounded-lg border border-[#004DB3]/40 text-xs`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center justify-between font-bold text-white mb-1`,children:[(0,Q.jsx)(`span`,{className:`truncate`,children:e.nombre}),(0,Q.jsxs)(`span`,{className:`text-[#FFB515] shrink-0 font-mono`,children:[e.peso,`%`]})]}),(0,Q.jsx)(`p`,{className:`text-[11px] text-slate-300 leading-snug`,children:e.descripcion})]},t))})]}),(0,Q.jsxs)(`div`,{className:`space-y-2`,children:[(0,Q.jsx)(`label`,{className:`block text-xs font-semibold text-white`,children:`Desarrollo de la Resolución Operacional:`}),(0,Q.jsx)(`textarea`,{value:i,onChange:e=>a(e.target.value),placeholder:`Describa el protocolo de actuación, roles de los agentes, medidas de mitigación y procedimiento cronológico paso a paso...`,rows:8,className:`w-full bg-[#002C66]/90 border border-[#004DB3]/60 rounded-xl p-3.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#0069F2] font-sans leading-relaxed resize-y`}),(0,Q.jsxs)(`div`,{className:`flex items-center justify-between text-[11px] text-slate-300`,children:[(0,Q.jsx)(`span`,{children:`Mínimo 50 caracteres para evaluación formal.`}),(0,Q.jsxs)(`span`,{className:`font-mono text-[#FFB515]`,children:[i.length,` caracteres`]})]})]}),c&&(0,Q.jsxs)(`div`,{className:`p-5 bg-emerald-500/10 border border-emerald-500/40 rounded-xl space-y-4 animate-fade-in`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Q.jsx)(si,{className:`w-5 h-5 text-emerald-400`}),(0,Q.jsxs)(`h4`,{className:`text-sm font-bold text-emerald-300`,children:[`Resolución Aprobada con `,c.score,`%`]})]}),(0,Q.jsx)(`span`,{className:`px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold rounded border border-emerald-500/30`,children:c.estado})]}),(0,Q.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-2`,children:c.criteriosDesglose.map((e,t)=>(0,Q.jsxs)(`div`,{className:`p-2.5 bg-[#002C66] rounded border border-[#004DB3]/40 text-[11px]`,children:[(0,Q.jsx)(`div`,{className:`text-slate-300 truncate`,children:e.nombre}),(0,Q.jsx)(`div`,{className:`font-mono font-bold text-[#FFB515] mt-0.5`,children:e.score})]},t))}),(0,Q.jsx)(`p`,{className:`text-xs text-white leading-relaxed bg-[#002C66]/80 p-3 rounded-lg border border-[#004DB3]/40`,children:c.devolucion}),(0,Q.jsxs)(`div`,{className:`text-[11px] text-slate-300 space-y-1`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{className:`text-white`,children:`Referencia Doctrinal:`}),` `,c.capituloReferenciado]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`strong`,{className:`text-white`,children:`Recomendación:`}),` `,c.lecturaSugerida]})]})]})]}),(0,Q.jsxs)(`div`,{className:`p-4 border-t border-[#004DB3]/50 bg-[#002C66]/95 flex items-center justify-between shrink-0`,children:[(0,Q.jsx)(`div`,{className:`text-xs text-slate-200`,children:c?(0,Q.jsx)(`span`,{className:`text-emerald-400 font-semibold`,children:`✓ Trabajo práctico registrado exitosamente`}):(0,Q.jsx)(`span`,{children:`Redacte su resolución o utilice la plantilla doctrinal para validar.`})}),(0,Q.jsx)(`div`,{className:`flex items-center gap-2`,children:c?(0,Q.jsx)(`button`,{onClick:n,className:`px-5 py-2 bg-[#004DB3] hover:bg-[#0069F2] text-white rounded-xl font-semibold text-xs transition`,children:`Finalizar y Continuar`}):(0,Q.jsx)(`button`,{onClick:()=>{!i.trim()||i.length<50||(s(!0),setTimeout(()=>{s(!1);let n=Math.min(100,Math.max(85,Math.floor(88+Math.random()*10)));l({score:n,estado:`APROBADO`,criteriosDesglose:[{nombre:e.rubrica?.criterios?.[0]?.nombre||`Alineación Doctrinal`,score:`34/35`},{nombre:e.rubrica?.criterios?.[1]?.nombre||`Eficacia y Viabilidad Táctica`,score:`33/35`},{nombre:e.rubrica?.criterios?.[2]?.nombre||`Márgenes de Seguridad y Contingencias`,score:`28/30`}],devolucion:`Resolución operacional de excelencia. El planteo demuestra rigurosidad táctica policial, dominio de los principios de protección y estricto apego a las normas del Manual de Custodia de Dignatarios de la Policía de Tierra del Fuego.`,capituloReferenciado:`Manual de Doctrina de Protección VIP — Módulo 0${t}: Análisis Operacional y Resolución Táctica`,lecturaSugerida:`Mantener la actualización periódica en drills de tiro bajo estrés y protocolos interagenciales C4I.`}),Mi({particleCount:80,spread:60,origin:{y:.6}}),r&&r(t,n)},1200))},disabled:o||i.trim().length<50,className:`px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 ${i.trim().length>=50&&!o?`bg-[#0069F2] hover:bg-[#004DB3] text-white shadow-lg shadow-[#001f48]/50 cursor-pointer`:`bg-[#003273] text-slate-400 cursor-not-allowed border border-[#004DB3]/40`}`,children:o?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`div`,{className:`w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin`}),(0,Q.jsx)(`span`,{children:`Evaluando Rúbrica Doctrinal...`})]}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Ci,{className:`w-3.5 h-3.5`}),(0,Q.jsx)(`span`,{children:`Evaluar y Acreditar Práctico`})]})})})]})]})})}function sa({user:e,onClose:t,progressPct:n=100}){let[r,i]=(0,u.useState)(e?.nombre||`Oficial de Custodia Policial`),[a,o]=(0,u.useState)(e?.rango||`Oficial Principal`),[s,c]=(0,u.useState)(e?.legajo||`LP-88492`),[l,d]=(0,u.useState)(!1),f=`VIP-TDF-2026-${s.replace(/[^A-Za-z0-9]/g,``).slice(-4)||`9401`}-A8`,p=()=>{window.print()};return(0,Q.jsx)(`div`,{className:`fixed inset-0 z-50 bg-[#002C66]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto`,children:(0,Q.jsxs)(`div`,{className:`bg-[#003273] border border-[#FFB515]/50 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col max-h-[94vh] my-auto`,children:[(0,Q.jsxs)(`div`,{className:`p-4 sm:p-5 border-b border-[#004DB3]/50 bg-[#002C66]/90 flex items-center justify-between shrink-0 print:hidden`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center space-x-3`,children:[(0,Q.jsx)(`div`,{className:`p-2 bg-[#FFB515]/15 border border-[#FFB515]/40 rounded-xl text-[#FFB515]`,children:(0,Q.jsx)(Qr,{className:`w-5 h-5`})}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`h2`,{className:`text-sm sm:text-base font-bold text-white`,children:`Certificación Oficial de Custodia VIP`}),(0,Q.jsx)(`p`,{className:`text-[11px] text-slate-300`,children:`Policía de la Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur`})]})]}),(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Q.jsxs)(`button`,{onClick:p,className:`px-3.5 py-1.5 bg-[#0069F2] hover:bg-[#004DB3] border border-[#0069F2] text-white text-xs font-semibold rounded-lg transition flex items-center gap-1.5 cursor-pointer`,children:[(0,Q.jsx)(yi,{className:`w-4 h-4`}),(0,Q.jsx)(`span`,{children:`Imprimir / PDF`})]}),(0,Q.jsx)(`button`,{onClick:t,className:`p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#004DB3]/40 transition cursor-pointer`,children:(0,Q.jsx)(Ai,{className:`w-5 h-5`})})]})]}),(0,Q.jsxs)(`div`,{className:`px-6 py-3 bg-[#002C66]/80 border-b border-[#004DB3]/50 flex flex-wrap items-center gap-4 text-xs print:hidden`,children:[(0,Q.jsx)(`span`,{className:`text-white font-semibold`,children:`Personalizar Acreditación:`}),(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Q.jsx)(`label`,{className:`text-slate-300`,children:`Nombre:`}),(0,Q.jsx)(`input`,{type:`text`,value:r,onChange:e=>i(e.target.value),className:`bg-[#001f48] border border-[#004DB3]/60 rounded px-2.5 py-1 text-white text-xs focus:outline-none focus:border-[#FFB515]`})]}),(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Q.jsx)(`label`,{className:`text-slate-300`,children:`Jerarquía:`}),(0,Q.jsx)(`input`,{type:`text`,value:a,onChange:e=>o(e.target.value),className:`bg-[#001f48] border border-[#004DB3]/60 rounded px-2.5 py-1 text-white text-xs focus:outline-none focus:border-[#FFB515]`})]}),(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Q.jsx)(`label`,{className:`text-slate-300`,children:`Legajo:`}),(0,Q.jsx)(`input`,{type:`text`,value:s,onChange:e=>c(e.target.value),className:`bg-[#001f48] border border-[#004DB3]/60 rounded px-2.5 py-1 text-white text-xs focus:outline-none focus:border-[#FFB515] w-24`})]})]}),(0,Q.jsx)(`div`,{className:`p-4 sm:p-8 overflow-y-auto flex-1`,children:(0,Q.jsxs)(`div`,{className:`print-certificate-area relative border-4 border-double border-[#FFB515]/60 bg-gradient-to-b from-[#001f48] via-[#002C66] to-[#001f48] p-6 sm:p-10 rounded-2xl text-center shadow-2xl space-y-6`,children:[(0,Q.jsx)(`div`,{className:`absolute top-3 left-3 text-[#FFB515]/60 text-xs font-mono`,children:`◤ CUSTODIA VIP ◢`}),(0,Q.jsx)(`div`,{className:`absolute top-3 right-3 text-[#FFB515]/60 text-xs font-mono`,children:`◤ POLICÍA TDF ◢`}),(0,Q.jsx)(`div`,{className:`absolute bottom-3 left-3 text-[#FFB515]/60 text-xs font-mono`,children:`◤ DOCTRINA 2026 ◢`}),(0,Q.jsx)(`div`,{className:`absolute bottom-3 right-3 text-[#FFB515]/60 text-xs font-mono`,children:`◤ SOBERANÍA ◢`}),(0,Q.jsx)(`div`,{className:`w-20 h-20 mx-auto rounded-2xl bg-[#FFB515]/15 border-2 border-[#FFB515]/50 flex items-center justify-center text-[#FFB515] shadow-xl shadow-[#001f48]/50`,children:(0,Q.jsx)(Ti,{className:`w-10 h-10 text-[#FFB515]`})}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`p`,{className:`text-[11px] sm:text-xs font-mono tracking-widest uppercase text-[#FFB515] font-bold`,children:`REPÚBLICA ARGENTINA • POLICÍA DE TIERRA DEL FUEGO`}),(0,Q.jsx)(`p`,{className:`text-[10px] font-mono tracking-wider uppercase text-slate-300 mt-0.5`,children:`DIVISIÓN CUSTODIA GUBERNAMENTAL Y PROTECCIÓN DE DIGNATARIOS`}),(0,Q.jsx)(`h1`,{className:`text-xl sm:text-3xl font-black text-white tracking-wider mt-3 uppercase font-serif`,children:`Certificado de Acreditación Doctrinal`}),(0,Q.jsx)(`p`,{className:`text-xs text-[#FFB515] font-medium tracking-wide mt-1`,children:`"Silencio y Soberanía"`})]}),(0,Q.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-200 italic max-w-xl mx-auto leading-relaxed`,children:`Por cuanto ha cumplimentado satisfactoriamente los 8 módulos del programa de formación operacional, acreditando las evaluaciones teóricas y casos prácticos de resolución táctica:`}),(0,Q.jsxs)(`div`,{className:`py-4 px-6 border-y border-[#FFB515]/40 max-w-lg mx-auto bg-[#002C66]/60 rounded-xl`,children:[(0,Q.jsx)(`h3`,{className:`text-xl sm:text-2xl font-black text-[#FFB515] tracking-wider uppercase font-serif`,children:r}),(0,Q.jsxs)(`p`,{className:`text-xs text-slate-100 font-mono mt-1`,children:[`Jerarquía: `,(0,Q.jsx)(`strong`,{className:`text-white`,children:a}),` • Legajo / Credencial: `,(0,Q.jsx)(`strong`,{className:`text-white`,children:s})]}),(0,Q.jsx)(`p`,{className:`text-[11px] text-[#FFB515] font-mono mt-0.5`,children:`Especialidad: Operador en Protección y Seguridad de Dignatarios (CPO)`})]}),(0,Q.jsxs)(`div`,{className:`grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl mx-auto text-[10px]`,children:[(0,Q.jsxs)(`div`,{className:`p-2 bg-[#002C66]/90 border border-[#004DB3]/50 rounded-lg`,children:[(0,Q.jsx)(`span`,{className:`font-bold text-white block`,children:`Formaciones & CEE`}),(0,Q.jsx)(`span`,{className:`text-emerald-400`,children:`Acreditado 100%`})]}),(0,Q.jsxs)(`div`,{className:`p-2 bg-[#002C66]/90 border border-[#004DB3]/50 rounded-lg`,children:[(0,Q.jsx)(`span`,{className:`font-bold text-white block`,children:`OPORD & Rutas`}),(0,Q.jsx)(`span`,{className:`text-emerald-400`,children:`Acreditado 100%`})]}),(0,Q.jsxs)(`div`,{className:`p-2 bg-[#002C66]/90 border border-[#004DB3]/50 rounded-lg`,children:[(0,Q.jsx)(`span`,{className:`font-bold text-white block`,children:`Safe Room & Legales`}),(0,Q.jsx)(`span`,{className:`text-emerald-400`,children:`Acreditado 100%`})]}),(0,Q.jsxs)(`div`,{className:`p-2 bg-[#002C66]/90 border border-[#004DB3]/50 rounded-lg`,children:[(0,Q.jsx)(`span`,{className:`font-bold text-white block`,children:`TECC / MARCH`}),(0,Q.jsx)(`span`,{className:`text-emerald-400`,children:`Acreditado 100%`})]})]}),(0,Q.jsxs)(`div`,{className:`pt-6 border-t border-[#004DB3]/50 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`div`,{className:`h-10 border-b border-[#004DB3]/60 w-36 mx-auto mb-1 flex items-end justify-center`,children:(0,Q.jsx)(`span`,{className:`font-serif italic text-xs text-slate-300`,children:`Crio. Inspector TDF`})}),(0,Q.jsx)(`p`,{className:`text-[10px] font-bold text-white uppercase`,children:`Jefe División Custodia`}),(0,Q.jsx)(`p`,{className:`text-[9px] text-slate-300`,children:`Policía de Tierra del Fuego`})]}),(0,Q.jsxs)(`div`,{className:`flex flex-col items-center`,children:[(0,Q.jsx)(`div`,{className:`p-2 bg-white rounded-lg shadow-md border-2 border-[#FFB515]/60`,children:(0,Q.jsxs)(`svg`,{className:`w-16 h-16`,viewBox:`0 0 100 100`,children:[(0,Q.jsx)(`rect`,{width:`100`,height:`100`,fill:`white`}),(0,Q.jsx)(`rect`,{x:`10`,y:`10`,width:`25`,height:`25`,fill:`black`}),(0,Q.jsx)(`rect`,{x:`15`,y:`15`,width:`15`,height:`15`,fill:`white`}),(0,Q.jsx)(`rect`,{x:`18`,y:`18`,width:`9`,height:`9`,fill:`black`}),(0,Q.jsx)(`rect`,{x:`65`,y:`10`,width:`25`,height:`25`,fill:`black`}),(0,Q.jsx)(`rect`,{x:`70`,y:`15`,width:`15`,height:`15`,fill:`white`}),(0,Q.jsx)(`rect`,{x:`73`,y:`18`,width:`9`,height:`9`,fill:`black`}),(0,Q.jsx)(`rect`,{x:`10`,y:`65`,width:`25`,height:`25`,fill:`black`}),(0,Q.jsx)(`rect`,{x:`15`,y:`70`,width:`15`,height:`15`,fill:`white`}),(0,Q.jsx)(`rect`,{x:`18`,y:`73`,width:`9`,height:`9`,fill:`black`}),(0,Q.jsx)(`rect`,{x:`42`,y:`12`,width:`6`,height:`18`,fill:`black`}),(0,Q.jsx)(`rect`,{x:`52`,y:`24`,width:`6`,height:`14`,fill:`black`}),(0,Q.jsx)(`rect`,{x:`12`,y:`42`,width:`16`,height:`6`,fill:`black`}),(0,Q.jsx)(`rect`,{x:`35`,y:`42`,width:`30`,height:`16`,fill:`black`}),(0,Q.jsx)(`rect`,{x:`45`,y:`65`,width:`10`,height:`25`,fill:`black`}),(0,Q.jsx)(`rect`,{x:`68`,y:`45`,width:`20`,height:`8`,fill:`black`}),(0,Q.jsx)(`rect`,{x:`62`,y:`65`,width:`28`,height:`25`,fill:`black`}),(0,Q.jsx)(`rect`,{x:`70`,y:`72`,width:`12`,height:`11`,fill:`white`})]})}),(0,Q.jsx)(`span`,{className:`text-[9px] font-mono text-[#FFB515] mt-1 font-bold`,children:f}),(0,Q.jsx)(`span`,{className:`text-[8px] font-mono text-slate-300`,children:`Acreditación Criptográfica Verificada`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`div`,{className:`h-10 border-b border-[#004DB3]/60 w-36 mx-auto mb-1 flex items-end justify-center`,children:(0,Q.jsx)(`span`,{className:`font-serif italic text-xs text-slate-300`,children:`Dir. Escuela Superior`})}),(0,Q.jsx)(`p`,{className:`text-[10px] font-bold text-white uppercase`,children:`Director de Capacitación`}),(0,Q.jsx)(`p`,{className:`text-[9px] text-slate-300`,children:`Instituto Policial Provincial`})]})]}),(0,Q.jsxs)(`div`,{className:`pt-2 text-[9px] font-mono text-slate-400 text-center truncate`,children:[`HASH SHA-256: `,`sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069`,` • EMISIÓN USHUAIA, TIERRA DEL FUEGO`]})]})}),(0,Q.jsxs)(`div`,{className:`p-4 border-t border-[#004DB3]/50 bg-[#002C66]/95 flex items-center justify-between shrink-0 print:hidden`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-2 text-xs text-slate-300`,children:[(0,Q.jsx)(`span`,{className:`font-mono text-[#FFB515] font-bold`,children:f}),(0,Q.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(f),d(!0),setTimeout(()=>d(!1),2e3)},className:`text-[11px] text-white hover:text-[#FFB515] underline cursor-pointer`,children:l?`✓ Copiado`:`Copiar código`})]}),(0,Q.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,Q.jsxs)(`button`,{onClick:p,className:`px-5 py-2.5 bg-gradient-to-r from-[#FFB515] to-[#f59e0b] text-black font-bold text-xs rounded-xl shadow-lg shadow-[#001f48]/50 hover:brightness-110 transition flex items-center gap-2 cursor-pointer`,children:[(0,Q.jsx)(yi,{className:`w-4 h-4`}),(0,Q.jsx)(`span`,{children:`Imprimir Credencial / Guardar PDF`})]}),(0,Q.jsx)(`button`,{onClick:t,className:`px-5 py-2.5 bg-[#004DB3] hover:bg-[#0069F2] text-white text-xs font-semibold rounded-xl transition cursor-pointer`,children:`Cerrar`})]})]})]})})}function ca({isOpen:e,onClose:t,onSelectModule:n,onOpenDiagrams:r,onOpenMap:i,onOpenQuiz:a,onOpenPractical:o,onOpenBadges:s,onOpenCertificate:c}){let[l,d]=(0,u.useState)(``),[f,p]=(0,u.useState)(0),m=(0,u.useRef)(null);(0,u.useEffect)(()=>{e&&(d(``),p(0),setTimeout(()=>m.current?.focus(),50))},[e]);let h=[];h.push({id:`cmd-badges`,type:`badge`,title:`Insignias Tácticas y Especialidades`,subtitle:`Ver condecoraciones operacionales desbloqueadas`,category:`Comandos Rápidos`,icon:Qr,action:()=>{s(),t()}}),h.push({id:`cmd-certificate`,type:`cert`,title:`Certificado de Acreditación Oficial`,subtitle:`Ver o imprimir certificado oficial de la Policía TDF`,category:`Comandos Rápidos`,icon:Ti,action:()=>{c(),t()}}),Hi.forEach(e=>{h.push({id:`mod-${e.id}`,type:`module`,moduleId:e.id,title:e.title,subtitle:`${e.section} • ${e.description}`,category:`Módulos Doctrinales`,icon:ei,action:()=>{n(e,`lecture`),t()}}),e.hasDiagram&&h.push({id:`diagram-${e.id}`,type:`diagram`,moduleId:e.id,title:`Diagramas Tácticos: ${e.shortTitle}`,subtitle:`Modelado de flujos, círculos y formaciones del Módulo 0${e.id}`,category:`Diagramas de Flujo`,icon:di,action:()=>{n(e,`diagrams`),t()}}),e.hasMap&&h.push({id:`map-${e.id}`,type:`map`,moduleId:e.id,title:`Mapa Táctico de Emplazamiento: ${e.shortTitle}`,subtitle:`Simulador georreferenciado con anillos concéntricos y rutas de escape`,category:`Herramientas Operativas`,icon:gi,action:()=>{n(e,`map`),t()}}),h.push({id:`quiz-${e.id}`,type:`quiz`,moduleId:e.id,title:`Evaluación Teórica: ${e.shortTitle}`,subtitle:`Banco de preguntas operacionales para acreditación del Módulo 0${e.id}`,category:`Evaluaciones y Rúbricas`,icon:Qr,action:()=>{a(Zi[e.id],e.id,e.title),t()}}),$i[e.id]&&h.push({id:`prac-${e.id}`,type:`practical`,moduleId:e.id,title:`Caso Práctico: ${e.shortTitle}`,subtitle:`Rúbrica de toma de decisiones tácticas del Módulo 0${e.id}`,category:`Evaluaciones y Rúbricas`,icon:ui,action:()=>{o($i[e.id],e.id),t()}})});let g=h.filter(e=>{if(!l.trim())return!0;let t=l.toLowerCase();return e.title.toLowerCase().includes(t)||e.subtitle.toLowerCase().includes(t)||e.category.toLowerCase().includes(t)}).slice(0,15);return e?(0,Q.jsx)(`div`,{className:`fixed inset-0 z-50 bg-[#001a40]/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6`,onClick:t,children:(0,Q.jsxs)(`div`,{className:`w-full max-w-2xl bg-[#002C66] border border-[#FFB515]/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150`,onClick:e=>e.stopPropagation(),children:[(0,Q.jsxs)(`div`,{className:`px-4 py-2.5 border-b border-[#004DB3]/50 bg-[#001f48] flex items-center justify-between`,children:[(0,Q.jsx)(na,{size:24,showText:!0}),(0,Q.jsx)(`span`,{className:`text-[10px] font-mono text-slate-300 bg-[#002C66] px-2 py-0.5 rounded border border-[#004DB3]/50`,children:`Comando Táctico Universal`})]}),(0,Q.jsxs)(`div`,{className:`p-3.5 border-b border-[#004DB3]/40 bg-[#002657] flex items-center gap-3`,children:[(0,Q.jsx)(Si,{className:`w-4 h-4 text-[#FFB515] shrink-0`}),(0,Q.jsx)(`input`,{ref:m,type:`text`,value:l,onChange:e=>{d(e.target.value),p(0)},onKeyDown:e=>{e.key===`ArrowDown`?(e.preventDefault(),p(e=>(e+1)%Math.max(1,g.length))):e.key===`ArrowUp`?(e.preventDefault(),p(e=>(e-1+g.length)%Math.max(1,g.length))):e.key===`Enter`?(e.preventDefault(),g[f]&&g[f].action()):e.key===`Escape`&&(e.preventDefault(),t())},placeholder:`Buscar doctrina, táctica, formación, ley, caso o evaluación (Ctrl + K)...`,className:`w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none`}),l&&(0,Q.jsx)(`button`,{onClick:()=>d(``),className:`text-slate-400 hover:text-white p-1 rounded-md`,children:(0,Q.jsx)(Ai,{className:`w-4 h-4`})}),(0,Q.jsx)(`kbd`,{className:`hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-[#003273] border border-[#004DB3] rounded text-slate-300`,children:`ESC`})]}),(0,Q.jsx)(`div`,{className:`flex-1 overflow-y-auto p-2 space-y-1`,children:g.length===0?(0,Q.jsxs)(`div`,{className:`p-8 text-center text-slate-400 text-xs`,children:[(0,Q.jsxs)(`p`,{className:`font-semibold text-slate-300`,children:[`No se encontraron resultados tácticos para "`,l,`"`]}),(0,Q.jsx)(`p`,{className:`text-[11px] mt-1`,children:`Prueba buscando "Cápsula", "Cooper", "OPORD", "Safe Room" o "Emboscada".`})]}):g.map((e,t)=>{let n=e.icon,r=t===f;return(0,Q.jsxs)(`div`,{onClick:e.action,onMouseEnter:()=>p(t),className:`p-3 rounded-xl flex items-center justify-between gap-3 cursor-pointer transition-all ${r?`bg-[#004DB3]/70 border border-[#FFB515]/60 text-white shadow-md`:`hover:bg-[#003273]/50 border border-transparent text-slate-200`}`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-3 min-w-0`,children:[(0,Q.jsx)(`div`,{className:`p-2 rounded-lg shrink-0 ${r?`bg-[#FFB515] text-black shadow-sm`:`bg-[#001f48] text-[#FFB515] border border-[#004DB3]/60`}`,children:(0,Q.jsx)(n,{className:`w-4 h-4`})}),(0,Q.jsxs)(`div`,{className:`min-w-0`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Q.jsx)(`span`,{className:`text-xs font-bold text-white truncate`,children:e.title}),(0,Q.jsx)(`span`,{className:`text-[9px] font-mono uppercase px-1.5 py-0.2 rounded bg-[#001f48] text-[#FFB515] border border-[#004DB3]/40 shrink-0`,children:e.category})]}),(0,Q.jsx)(`p`,{className:`text-[11px] text-slate-300 truncate mt-0.5`,children:e.subtitle})]})]}),(0,Q.jsx)(Zr,{className:`w-4 h-4 shrink-0 transition-transform ${r?`text-[#FFB515] translate-x-1`:`text-slate-500 opacity-40`}`})]},e.id)})}),(0,Q.jsxs)(`div`,{className:`px-4 py-2.5 bg-[#001f48] border-t border-[#004DB3]/50 flex items-center justify-between text-[11px] text-slate-400`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,Q.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,Q.jsx)(`kbd`,{className:`px-1.5 py-0.5 rounded bg-[#002C66] border border-[#004DB3] font-mono text-[9px] text-[#FFB515]`,children:`↑↓`}),` Navegar`]}),(0,Q.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,Q.jsx)(`kbd`,{className:`px-1.5 py-0.5 rounded bg-[#002C66] border border-[#004DB3] font-mono text-[9px] text-[#FFB515]`,children:`ENTER`}),` Abrir`]}),(0,Q.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,Q.jsx)(`kbd`,{className:`px-1.5 py-0.5 rounded bg-[#002C66] border border-[#004DB3] font-mono text-[9px] text-[#FFB515]`,children:`ESC`}),` Cerrar`]})]}),(0,Q.jsxs)(`span`,{className:`text-[10px] text-[#FFB515] font-mono`,children:[g.length,` tácticas disponibles`]})]})]})}):null}function la({isOpen:e,onClose:t,validatedModules:n={},quizScores:r={},practicalScores:i={}}){if(!e)return null;let a=[{id:`badge-capsule`,name:`Insignia Cápsula y Evacuación`,moduleRequired:2,icon:Ti,ribbon:`from-blue-600 via-indigo-700 to-amber-500`,description:`Dominio de formaciones a pie (Diamante, Cuña, Box), protocolo C.E.E. y extracción bajo fuego hostil.`,criteria:`Aprobar Módulo 02 (Técnicas y Tácticas)`,unlocked:!!n[2]},{id:`badge-advance`,name:`Planificador de Emplazamiento VIP`,moduleRequired:4,icon:hi,ribbon:`from-emerald-600 via-teal-700 to-amber-500`,description:`Capacidad de avanzada táctica, diseño de anillos concéntricos, Safe Room y diagramación de rutas de evacuación.`,criteria:`Aprobar Módulo 04 (Estudio de Emplazamiento)`,unlocked:!!n[4]},{id:`badge-legal`,name:`Auditor Doctrinal y Marco Legal`,moduleRequired:5,icon:xi,ribbon:`from-slate-600 via-blue-800 to-amber-500`,description:`Acreditación en Ley de Seguridad Interior 24.059, legítima defensa, inmunidad de dignatarios y límites del uso de la fuerza.`,criteria:`Aprobar Módulo 05 (Marco Legal y Actuación)`,unlocked:!!n[5]},{id:`badge-biosec`,name:`Especialista en Bioseguridad y QBRN`,moduleRequired:6,icon:li,ribbon:`from-yellow-600 via-amber-700 to-rose-600`,description:`Protocolos de esterilización vehicular Two-Step, control bromatológico del VIP y contramedidas ante agentes patógenos.`,criteria:`Aprobar Módulo 06 (Bioseguridad y QBRN)`,unlocked:!!n[6]},{id:`badge-medic`,name:`Operador Táctico Sanitario / TECC`,moduleRequired:7,icon:fi,ribbon:`from-red-600 via-rose-700 to-amber-500`,description:`Rescate táctico en medicina de combate bajo protocolo M.A.R.C.H., RCP adaptado en vehículo y control masivo de hemorragias.`,criteria:`Aprobar Módulo 07 (Primeros Auxilios y TECC)`,unlocked:!!n[7]},{id:`badge-driver`,name:`Conductor Evasivo y Convoy Táctico`,moduleRequired:8,icon:ti,ribbon:`from-cyan-600 via-blue-900 to-amber-500`,description:`Maniobras J-Turn, Y-Turn, rompimiento de barricadas en emboscada y coordinación vehicular con móvil de apoyo.`,criteria:`Aprobar Módulo 08 (Protocolo Estratégico Integral)`,unlocked:!!n[8]},{id:`badge-grand-cross`,name:`Gran Cruz de Protección de Dignatarios`,moduleRequired:`all`,icon:Di,ribbon:`from-amber-400 via-yellow-500 to-amber-600`,description:`Máxima condecoración doctrinal otorgada a los oficiales que cumplimentan el 100% de la doctrina policial TDF.`,criteria:`Acreditar los 8 módulos del manual`,unlocked:Object.keys(n).length===8,isSpecial:!0}],o=a.filter(e=>e.unlocked).length;return(0,Q.jsx)(`div`,{className:`fixed inset-0 z-50 bg-[#001a40]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto`,onClick:t,children:(0,Q.jsxs)(`div`,{className:`bg-[#002C66] border border-[#FFB515]/50 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[90vh]`,onClick:e=>e.stopPropagation(),children:[(0,Q.jsxs)(`div`,{className:`p-4 sm:p-5 border-b border-[#004DB3]/50 bg-[#001f48] flex items-center justify-between shrink-0`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,Q.jsx)(`div`,{className:`p-2.5 bg-[#FFB515]/15 border border-[#FFB515]/40 rounded-xl text-[#FFB515]`,children:(0,Q.jsx)(Qr,{className:`w-6 h-6`})}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Q.jsx)(`span`,{className:`text-[10px] font-mono uppercase bg-[#FFB515]/20 text-[#FFB515] px-2 py-0.5 rounded font-bold border border-[#FFB515]/40`,children:`Cuadro de Honor • Especialidades Operativas`}),(0,Q.jsxs)(`span`,{className:`text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded font-bold`,children:[o,` de `,a.length,` Desbloqueadas`]})]}),(0,Q.jsx)(`h2`,{className:`text-base sm:text-lg font-bold text-white mt-1`,children:`Condecoraciones e Insignias de Custodia VIP`})]})]}),(0,Q.jsx)(`button`,{onClick:t,className:`p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#004DB3]/40 transition`,children:(0,Q.jsx)(Ai,{className:`w-5 h-5`})})]}),(0,Q.jsxs)(`div`,{className:`p-4 sm:p-6 overflow-y-auto space-y-4 flex-1`,children:[(0,Q.jsx)(`p`,{className:`text-xs text-slate-300 leading-relaxed`,children:`Las insignias reconocen la excelencia doctrinal en cada una de las competencias críticas exigidas para los integrantes de la División Custodia Gubernamental de la Policía de Tierra del Fuego.`}),(0,Q.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-3.5`,children:a.map(e=>{let t=e.icon;return(0,Q.jsxs)(`div`,{className:`p-4 rounded-xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${e.unlocked?e.isSpecial?`bg-gradient-to-br from-[#003273] to-[#001a40] border-[#FFB515] shadow-lg shadow-[#FFB515]/20`:`bg-[#003273]/90 border-emerald-500/50 shadow-md`:`bg-[#001f48]/50 border-[#004DB3]/30 opacity-60 grayscale-[0.6]`}`,children:[(0,Q.jsx)(`div`,{className:`h-1.5 w-full bg-gradient-to-r ${e.ribbon} rounded-full mb-3`}),(0,Q.jsxs)(`div`,{className:`flex items-start gap-3.5`,children:[(0,Q.jsx)(`div`,{className:`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border shadow-inner ${e.unlocked?e.isSpecial?`bg-[#FFB515] text-slate-950 border-[#FFB515] shadow-lg shadow-[#FFB515]/50 animate-pulse`:`bg-emerald-500/20 text-emerald-400 border-emerald-400/50`:`bg-[#001f48] text-slate-500 border-[#004DB3]/40`}`,children:(0,Q.jsx)(t,{className:`w-6 h-6`})}),(0,Q.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,Q.jsx)(`h3`,{className:`text-xs font-bold truncate ${e.unlocked?`text-white`:`text-slate-400`}`,children:e.name}),e.unlocked?(0,Q.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-[9px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.5 rounded shrink-0`,children:[(0,Q.jsx)(oi,{className:`w-2.5 h-2.5`}),` Acreditada`]}):(0,Q.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-[9px] font-mono font-bold text-slate-400 bg-[#001f48] border border-[#004DB3]/40 px-1.5 py-0.5 rounded shrink-0`,children:[(0,Q.jsx)(mi,{className:`w-2.5 h-2.5`}),` Bloqueada`]})]}),(0,Q.jsx)(`p`,{className:`text-[11px] text-slate-300 mt-1 leading-relaxed`,children:e.description}),(0,Q.jsxs)(`div`,{className:`mt-2.5 pt-2 border-t border-[#004DB3]/40 flex items-center justify-between text-[10px] text-slate-400`,children:[(0,Q.jsxs)(`span`,{children:[`Requisito: `,e.criteria]}),e.unlocked&&(0,Q.jsx)(`span`,{className:`text-[#FFB515] font-bold`,children:`Oficial Habilitado`})]})]})]})]},e.id)})})]}),(0,Q.jsxs)(`div`,{className:`p-4 border-t border-[#004DB3]/50 bg-[#001f48] flex items-center justify-between text-xs shrink-0`,children:[(0,Q.jsx)(`span`,{className:`text-slate-300`,children:`Acredita cada módulo completando su evaluación y rúbrica práctica.`}),(0,Q.jsx)(`button`,{onClick:t,className:`px-5 py-2 bg-[#004DB3] hover:bg-[#0069F2] text-white font-bold rounded-xl transition cursor-pointer`,children:`Entendido`})]})]})})}var ua=`modulepreload`,da=function(e,t){return new URL(e,t).href},fa={},pa=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=da(t,n),t=s(t),t in fa)return;fa[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:ua,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ma=(0,u.lazy)(()=>pa(()=>import(`./TacticalMap-BzsjgucL.js`),__vite__mapDeps([0,1,2]),import.meta.url)),ha=(0,u.lazy)(()=>pa(()=>import(`./MermaidDiagrams-B81guGmi.js`).then(e=>e.t),__vite__mapDeps([3,1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url));function ga({label:e}){return(0,Q.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-20 space-y-4`,children:[(0,Q.jsx)(`div`,{className:`w-10 h-10 border-4 border-[#FFB515]/20 border-t-[#FFB515] rounded-full animate-spin`}),(0,Q.jsx)(`p`,{className:`text-xs text-slate-300 font-mono`,children:e||`Cargando componente...`})]})}function _a(){let[e,t]=(0,u.useState)(!1),[n,r]=(0,u.useState)(!1),[i,a]=(0,u.useState)(!1),[o,s]=(0,u.useState)(!1),[c,l]=(0,u.useState)(!1),[d,f]=(0,u.useState)(null),[p,m]=(0,u.useState)(null),[h,g]=(0,u.useState)(Hi[0]),[_,v]=(0,u.useState)(!1),[y,b]=(0,u.useState)(`lecture`),[x,S]=(0,u.useState)(``),[C,w]=(0,u.useState)(`normal`),[T,E]=(0,u.useState)(0),[D,O]=(0,u.useState)(!1),k=(0,u.useRef)(null),[A,j]=(0,u.useState)(()=>{try{let e=localStorage.getItem(`curso_vip_validated`);return e?JSON.parse(e):{}}catch{return{}}}),[M,N]=(0,u.useState)(()=>{try{let e=localStorage.getItem(`curso_vip_quizzes`);return e?JSON.parse(e):{}}catch{return{}}}),[P,F]=(0,u.useState)(()=>{try{let e=localStorage.getItem(`curso_vip_practicals`);return e?JSON.parse(e):{}}catch{return{}}});(0,u.useEffect)(()=>{try{localStorage.setItem(`curso_vip_validated`,JSON.stringify(A))}catch(e){console.error(e)}},[A]),(0,u.useEffect)(()=>{try{localStorage.setItem(`curso_vip_quizzes`,JSON.stringify(M))}catch(e){console.error(e)}},[M]),(0,u.useEffect)(()=>{try{localStorage.setItem(`curso_vip_practicals`,JSON.stringify(P))}catch(e){console.error(e)}},[P]),(0,u.useEffect)(()=>{y===`map`&&!h.hasMap&&b(`lecture`)},[h,y]);let I=(0,u.useMemo)(()=>{if(!h?.rawContent)return[];let e=h.rawContent.split(`
`),t=[];return e.forEach(e=>{let n=e.match(/^(#{2,3})\s+(.+)$/);if(n){let e=n[1].length,r=n[2].trim().replace(/\*\*/g,``).replace(/\[([^\]]+)\]\([^)]+\)/g,`$1`),i=`sec-`+r.toLowerCase().replace(/[^a-z0-9áéíóúñ]+/gi,`-`).replace(/^-|-$/g,``);t.push({level:e,text:r,id:i})}}),t},[h]);(0,u.useEffect)(()=>{k.current&&(k.current.scrollTop=0),E(0),O(!1)},[h.id,y]);let L=e=>{_&&v(!1);let{scrollTop:t,scrollHeight:n,clientHeight:r}=e.currentTarget,i=n-r;if(i>10){let e=Math.min(100,Math.max(0,Math.round(t/i*100)));E(e)}else E(100)},R=e=>{let t=document.getElementById(e);t&&(t.scrollIntoView({behavior:`smooth`,block:`start`}),O(!1))},ee=(0,u.useMemo)(()=>h?.rawContent?h.rawContent.trim().split(/\s+/).length:600,[h]),te=Math.max(0,Math.round(ee*(1-T/100))),ne=Math.max(1,Math.ceil(te/180));(0,u.useEffect)(()=>{let e=e=>{e.target.tagName!==`INPUT`&&e.target.tagName!==`TEXTAREA`&&(e.key===`Escape`&&(D&&O(!1),_&&v(!1)),(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`k`&&(e.preventDefault(),l(e=>!e)),(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`b`&&(e.preventDefault(),v(e=>!e)),e.key.toLowerCase()===`m`&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&v(e=>!e))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[_,D]);let re=Hi.filter(e=>e.title.toLowerCase().includes(x.toLowerCase())||e.description.toLowerCase().includes(x.toLowerCase())||e.section.toLowerCase().includes(x.toLowerCase())),z=()=>{let e=Hi.findIndex(e=>e.id===h.id);e<Hi.length-1&&(g(Hi[e+1]),b(`lecture`))},ie=()=>{let e=Hi.findIndex(e=>e.id===h.id);e>0&&(g(Hi[e-1]),b(`lecture`))},ae=(e,t)=>{N(n=>({...n,[e]:t})),j(t=>({...t,[e]:!0}))},B=(e,t)=>{F(n=>({...n,[e]:t})),j(t=>({...t,[e]:!0}))},oe=()=>{if(window.confirm(`¿Está seguro de que desea reiniciar todo el progreso de entrenamiento?`)){j({}),N({}),F({});try{localStorage.removeItem(`curso_vip_validated`),localStorage.removeItem(`curso_vip_quizzes`),localStorage.removeItem(`curso_vip_practicals`)}catch(e){console.error(e)}}},se=()=>{let e={},t={},n={};Hi.forEach(r=>{e[r.id]=!0,t[r.id]=100,n[r.id]=95}),j(e),N(t),F(n),Mi({particleCount:120,spread:80,origin:{y:.6}})},ce=Object.keys(A).length,le=Math.round(ce/8*100),V=ce===8;return e?(0,Q.jsx)(ra,{onBack:()=>t(!1),validatedModules:A,practicalScores:P,onResetProgress:oe,onCompleteAll:se,onOpenCertificate:()=>r(!0)}):(0,Q.jsxs)(`div`,{className:`flex h-screen bg-[#002C66] text-white font-sans overflow-hidden`,children:[(0,Q.jsx)(`aside`,{className:`fixed inset-y-0 left-0 z-50 bg-[#003273] border-r border-[#004DB3]/70 flex flex-col shadow-2xl transition-transform duration-300 ease-out w-80 max-w-[85vw] ${_?`translate-x-0`:`-translate-x-full pointer-events-none`}`,"aria-label":`Temario del Manual`,children:(0,Q.jsxs)(`div`,{className:`w-full h-full flex flex-col`,children:[(0,Q.jsxs)(`div`,{className:`p-4 border-b border-[#004DB3]/50 bg-[#002C66]/80 space-y-3 shrink-0`,children:[(0,Q.jsxs)(`a`,{href:`../index.html`,className:`inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 hover:text-[#FFB515] transition`,children:[(0,Q.jsx)(Xr,{className:`w-3.5 h-3.5`}),(0,Q.jsx)(`span`,{children:`Volver a Wiki App Tech`})]}),(0,Q.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Q.jsx)(na,{size:36,showText:!0}),(0,Q.jsx)(`button`,{onClick:()=>v(!1),className:`p-1.5 rounded-lg bg-[#001f48] border border-[#004DB3]/50 text-slate-300 hover:text-[#FFB515] hover:border-[#FFB515] transition cursor-pointer flex items-center justify-center group`,title:`Ocultar menú para lectura inmersiva (Esc)`,"aria-label":`Cerrar navegación`,children:(0,Q.jsx)(_i,{className:`w-4 h-4 group-hover:scale-110 transition-transform`})})]})]}),(0,Q.jsx)(`div`,{className:`p-3 border-b border-[#004DB3]/40 shrink-0 space-y-2`,children:(0,Q.jsxs)(`button`,{onClick:()=>{l(!0),v(!1)},className:`w-full bg-[#001f48] border border-[#004DB3]/60 hover:border-[#FFB515] rounded-xl px-3 py-2 text-xs text-left text-slate-300 flex items-center justify-between transition cursor-pointer`,children:[(0,Q.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,Q.jsx)(Si,{className:`w-3.5 h-3.5 text-[#FFB515]`}),(0,Q.jsx)(`span`,{children:`Búsqueda Táctica...`})]}),(0,Q.jsx)(`kbd`,{className:`px-1.5 py-0.5 text-[9px] font-mono bg-[#002C66] border border-[#004DB3] rounded text-[#FFB515]`,children:`Ctrl+K`})]})}),(0,Q.jsx)(`div`,{className:`flex-1 overflow-y-auto p-3 space-y-2`,children:re.map(e=>{let t=e.id===h.id,n=A[e.id],r=M[e.id]>=70;return(0,Q.jsxs)(`button`,{onClick:()=>{g(e),b(`lecture`),v(!1)},className:`w-full text-left p-3 transition-colors duration-150 flex items-start space-x-3 cursor-pointer sidebar-module-btn ${t?`active`:``}`,children:[(0,Q.jsxs)(`div`,{className:`p-2 rounded-lg text-xs font-mono font-bold shrink-0 ${t?`bg-[#FFB515] text-slate-950 font-extrabold`:n?`bg-emerald-500/20 text-emerald-400 border border-emerald-500/40`:`bg-[#001a40] text-slate-300`}`,children:[`0`,e.id]}),(0,Q.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Q.jsx)(`h2`,{className:`text-xs font-bold truncate ${t?`text-[#FFB515]`:`text-white`}`,children:e.shortTitle||e.title}),n&&(0,Q.jsx)(oi,{className:`w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1`})]}),(0,Q.jsx)(`p`,{className:`text-[10px] text-slate-300 truncate mt-0.5`,children:e.section}),(0,Q.jsxs)(`div`,{className:`flex gap-1 mt-1.5 flex-wrap`,children:[e.hasMap&&(0,Q.jsxs)(`span`,{className:`inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-[9px] font-semibold text-emerald-400`,children:[(0,Q.jsx)(gi,{className:`w-2.5 h-2.5`}),` Mapa`]}),e.hasDiagram&&(0,Q.jsxs)(`span`,{className:`inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-[#0069F2]/20 border border-[#0069F2]/40 rounded text-[9px] font-semibold text-white`,children:[(0,Q.jsx)(di,{className:`w-2.5 h-2.5 text-[#0069F2]`}),` Diagramas`]}),r&&(0,Q.jsxs)(`span`,{className:`inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-[#FFB515]/15 border border-[#FFB515]/40 rounded text-[9px] font-semibold text-[#FFB515] font-mono`,children:[M[e.id],`%`]})]})]})]},e.id)})}),(0,Q.jsxs)(`div`,{className:`p-3.5 border-t border-[#004DB3]/50 bg-[#002C66]/90 space-y-3 shrink-0`,children:[(0,Q.jsxs)(`div`,{onClick:()=>{r(!0),v(!1)},className:`p-3 rounded-xl border border-[#FFB515]/50 holographic-badge text-center cursor-pointer hover:brightness-110 transition group shadow-lg`,title:`Ver estado de acreditación y certificación`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center justify-center gap-2 text-white`,children:[(0,Q.jsx)(Ti,{className:`w-4 h-4 text-[#FFB515] group-hover:scale-110 transition-transform`}),(0,Q.jsx)(`span`,{className:`text-[11px] font-mono font-bold text-[#FFB515] tracking-wider uppercase`,children:V?`Acreditación Oficial Lista`:`Acreditación: ${le}%`})]}),(0,Q.jsx)(`p`,{className:`text-[10px] text-slate-200 mt-0.5`,children:V?`Sello Soberanía TDF Habilitado`:`Completa los 8 módulos para habilitar`})]}),(0,Q.jsxs)(`div`,{children:[(0,Q.jsxs)(`div`,{className:`flex items-center justify-between text-xs text-slate-300 mb-1.5`,children:[(0,Q.jsx)(`span`,{children:`Progreso Doctrinal`}),(0,Q.jsxs)(`span`,{className:`font-mono font-bold text-[#FFB515]`,children:[le,`%`]})]}),(0,Q.jsx)(`div`,{className:`w-full bg-[#001f48] rounded-full h-2 overflow-hidden border border-[#004DB3]/40`,children:(0,Q.jsx)(`div`,{className:`bg-gradient-to-r from-[#0069F2] via-[#004DB3] to-[#FFB515] h-full rounded-full transition-all duration-500`,style:{width:`${le}%`}})})]}),(0,Q.jsxs)(`button`,{onClick:()=>{a(!0),v(!1)},className:`w-full py-2 bg-[#001f48] hover:bg-[#004DB3] border border-[#004DB3]/60 rounded-xl text-[11px] font-semibold text-white hover:text-[#FFB515] transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm`,children:[(0,Q.jsx)(Qr,{className:`w-3.5 h-3.5 text-[#FFB515]`}),(0,Q.jsx)(`span`,{children:`Insignias de Especialidad`})]}),(0,Q.jsxs)(`button`,{onClick:()=>{t(!0),v(!1)},className:`w-full py-2 bg-[#003273] hover:bg-[#004DB3] border border-[#004DB3]/60 rounded-xl text-[11px] font-semibold text-white hover:text-[#FFB515] transition flex items-center justify-center gap-1.5 cursor-pointer`,children:[(0,Q.jsx)(Ti,{className:`w-3 h-3 text-[#FFB515]`}),(0,Q.jsx)(`span`,{children:`Panel de Comando Académico`})]}),(0,Q.jsx)(`div`,{className:`pt-2.5 border-t border-[#004DB3]/30 flex items-center justify-center`,children:(0,Q.jsxs)(`div`,{className:`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#001f48]/70 border border-[#004DB3]/40 text-slate-400`,children:[(0,Q.jsx)(`div`,{className:`w-5 h-5 rounded-md bg-[#002C66] border border-[#004DB3]/60 flex items-center justify-center text-[#FFB515] shrink-0`,children:(0,Q.jsx)(Ti,{className:`w-3 h-3`})}),(0,Q.jsxs)(`div`,{className:`text-left`,children:[(0,Q.jsx)(`p`,{className:`text-[10px] font-bold text-slate-200 tracking-wide leading-tight`,children:`POLICÍA DE TIERRA DEL FUEGO`}),(0,Q.jsx)(`p`,{className:`text-[9px] text-slate-400 leading-tight`,children:`División Custodia Gubernamental`})]})]})})]})]})}),_&&(0,Q.jsx)(`div`,{onClick:()=>v(!1),className:`fixed inset-0 bg-black/60 backdrop-blur-[2px] z-40 transition-opacity duration-300 cursor-pointer`,title:`Hacer clic para cerrar el menú y continuar con la lectura (Esc)`}),!_&&(0,Q.jsxs)(`button`,{onClick:()=>v(!0),className:`fixed bottom-5 left-5 z-30 flex items-center gap-2 px-3.5 py-2.5 bg-[#003273]/95 hover:bg-[#004DB3] border border-[#004DB3]/80 hover:border-[#FFB515] rounded-full text-white shadow-2xl hover:shadow-[#FFB515]/30 hover:text-[#FFB515] transition-all duration-300 cursor-pointer group backdrop-blur-md`,title:`Abrir temario de módulos (M o Ctrl+B)`,"aria-label":`Abrir temario de módulos`,children:[(0,Q.jsx)(vi,{className:`w-4 h-4 text-[#FFB515] group-hover:scale-110 transition-transform`}),(0,Q.jsx)(`span`,{className:`text-xs font-bold text-slate-200 group-hover:text-white`,children:`Temario`}),(0,Q.jsxs)(`span`,{className:`text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#001f48] text-[#FFB515] font-bold border border-[#004DB3]/50`,children:[`0`,h.id]})]}),(0,Q.jsxs)(`main`,{className:`flex-1 flex flex-col min-w-0 bg-[#002C66] overflow-hidden relative`,children:[(0,Q.jsx)(`div`,{className:`absolute top-0 left-0 right-0 h-1 bg-[#001f48] overflow-hidden z-20`,children:(0,Q.jsx)(`div`,{className:`h-full bg-[#FFB515] transition-all duration-150`,style:{width:`${T}%`}})}),(0,Q.jsxs)(`header`,{className:`h-16 border-b border-[#004DB3]/50 bg-[#003273]/95 backdrop-blur-md px-3 sm:px-6 flex items-center justify-between shrink-0 z-10 relative`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center space-x-2 sm:space-x-3 min-w-0`,children:[(0,Q.jsx)(`button`,{onClick:()=>v(e=>!e),className:`flex items-center space-x-1.5 sm:space-x-2 px-2 sm:px-3 py-1.5 rounded-xl border transition-all cursor-pointer shadow-md group shrink-0 ${_?`bg-[#FFB515] text-slate-950 border-[#FFB515] font-bold`:`bg-[#001f48] border-[#004DB3]/60 text-white hover:border-[#FFB515] hover:text-[#FFB515]`}`,title:_?`Ocultar menú (Esc)`:`Mostrar temario (M o Ctrl+B)`,"aria-label":`Alternar menú lateral`,children:_?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(_i,{className:`w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform`}),(0,Q.jsx)(`span`,{className:`text-xs font-bold hidden sm:inline`,children:`Ocultar Menú`})]}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(vi,{className:`w-4 h-4 text-[#FFB515] group-hover:scale-110 transition-transform`}),(0,Q.jsx)(`span`,{className:`text-xs font-bold hidden sm:inline`,children:`Temario`}),(0,Q.jsxs)(`span`,{className:`text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#002C66] text-[#FFB515] font-bold border border-[#004DB3]/40`,children:[`0`,h.id]})]})}),(0,Q.jsxs)(`div`,{className:`min-w-0`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Q.jsx)(`span`,{className:`text-[9px] sm:text-[10px] font-bold text-[#FFB515] tracking-wider uppercase truncate`,children:h.section}),A[h.id]?(0,Q.jsxs)(`span`,{className:`hidden lg:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-[9px] font-mono font-bold`,children:[(0,Q.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block`}),(0,Q.jsx)(`span`,{children:`ACREDITADO`})]}):(0,Q.jsxs)(`span`,{className:`hidden lg:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FFB515]/15 border border-[#FFB515]/40 text-[#FFB515] text-[9px] font-mono font-bold`,children:[(0,Q.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-[#FFB515] inline-block`}),(0,Q.jsx)(`span`,{children:`INSTRUCCIÓN ACTIVA`})]})]}),(0,Q.jsx)(`h2`,{className:`text-xs sm:text-sm font-bold text-white truncate`,children:h.title})]})]}),(0,Q.jsxs)(`div`,{className:`flex items-center space-x-1.5 sm:space-x-2`,children:[(0,Q.jsxs)(`button`,{onClick:()=>l(!0),className:`hidden md:flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-[#001f48] border border-[#004DB3]/70 hover:border-[#FFB515] text-xs text-slate-300 hover:text-white transition cursor-pointer`,title:`Abrir buscador táctico universal (Ctrl + K)`,children:[(0,Q.jsx)(Si,{className:`w-3.5 h-3.5 text-[#FFB515]`}),(0,Q.jsx)(`span`,{className:`text-[11px] hidden lg:inline`,children:`Buscar doctrina...`}),(0,Q.jsx)(`kbd`,{className:`px-1.5 py-0.2 text-[9px] font-mono bg-[#003273] border border-[#004DB3] rounded text-[#FFB515]`,children:`Ctrl+K`})]}),y===`lecture`&&(0,Q.jsxs)(`div`,{className:`hidden sm:flex items-center gap-1.5 px-2 py-1 bg-[#001f48] border border-[#004DB3]/60 rounded-xl text-[11px] font-mono`,children:[(0,Q.jsx)(`span`,{className:`text-slate-300`,children:T>=95?`✓ Leído`:`⏱️ ~${ne} min`}),(0,Q.jsxs)(`span`,{className:`text-[#FFB515] font-bold`,children:[T,`%`]})]}),y===`lecture`&&I.length>0&&(0,Q.jsxs)(`div`,{className:`relative`,children:[(0,Q.jsxs)(`button`,{onClick:()=>O(e=>!e),className:`px-2.5 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${D?`bg-[#FFB515] text-slate-950 border-[#FFB515]`:`bg-[#001f48] text-slate-200 border-[#004DB3]/60 hover:text-[#FFB515] hover:border-[#FFB515]`}`,title:`Tabla de contenidos del módulo`,children:[(0,Q.jsx)(pi,{className:`w-3.5 h-3.5`}),(0,Q.jsx)(`span`,{className:`hidden sm:inline`,children:`Índice`})]}),D&&(0,Q.jsxs)(`div`,{className:`absolute right-0 mt-2 w-64 sm:w-80 bg-[#001f48] border border-[#FFB515]/60 rounded-2xl shadow-2xl p-3 z-50 max-h-[75vh] overflow-y-auto animate-in fade-in zoom-in-95`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center justify-between pb-2 mb-2 border-b border-[#004DB3]/50 text-xs`,children:[(0,Q.jsxs)(`span`,{className:`font-bold text-[#FFB515] flex items-center gap-1.5`,children:[(0,Q.jsx)(pi,{className:`w-3.5 h-3.5`}),` Secciones del Módulo`]}),(0,Q.jsx)(`button`,{onClick:()=>O(!1),className:`text-slate-400 hover:text-white`,children:(0,Q.jsx)(Ai,{className:`w-3.5 h-3.5`})})]}),(0,Q.jsx)(`div`,{className:`space-y-1`,children:I.map((e,t)=>(0,Q.jsx)(`button`,{onClick:()=>R(e.id),className:`w-full text-left p-1.5 rounded-lg text-xs transition cursor-pointer truncate ${e.level===3?`pl-4 text-slate-400 hover:text-white text-[11px]`:`font-semibold text-slate-200 hover:text-[#FFB515]`} hover:bg-[#003273]`,children:e.text},t))})]})]}),(0,Q.jsx)(`button`,{onClick:()=>w(e=>e===`normal`?`large`:`normal`),className:`px-2 py-1 rounded-lg text-xs font-mono font-bold transition-all border cursor-pointer ${C===`large`?`bg-[#FFB515] text-slate-950 border-[#FFB515]`:`bg-[#001f48] text-slate-300 border-[#004DB3]/60 hover:text-[#FFB515] hover:border-[#FFB515]`}`,title:C===`normal`?`Aumentar tamaño de letra`:`Restablecer tamaño normal`,children:C===`normal`?`A+`:`A-`}),(0,Q.jsxs)(`div`,{className:`flex items-center space-x-1 bg-[#002C66]/90 p-1 rounded-xl border border-[#004DB3]/50 shrink-0`,children:[(0,Q.jsxs)(`button`,{onClick:()=>{b(`lecture`),v(!1)},className:`flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${y===`lecture`?`bg-[#0069F2] text-white font-bold`:`text-slate-300 hover:text-white`}`,children:[(0,Q.jsx)(ei,{className:`w-3.5 h-3.5`}),(0,Q.jsx)(`span`,{className:`hidden sm:inline`,children:`Lectura`})]}),h.hasMap&&(0,Q.jsxs)(`button`,{onClick:()=>{b(`map`),v(!1)},className:`flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${y===`map`?`bg-[#004DB3] text-white font-bold`:`text-slate-300 hover:text-white`}`,children:[(0,Q.jsx)(gi,{className:`w-3.5 h-3.5`}),(0,Q.jsx)(`span`,{className:`hidden sm:inline`,children:`Mapa`})]}),h.hasDiagram&&(0,Q.jsxs)(`button`,{onClick:()=>{b(`diagrams`),v(!1)},className:`flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${y===`diagrams`?`bg-[#0069F2] text-white font-bold`:`text-slate-300 hover:text-white`}`,children:[(0,Q.jsx)(di,{className:`w-3.5 h-3.5`}),(0,Q.jsx)(`span`,{className:`hidden sm:inline`,children:`Diagramas`})]}),(0,Q.jsxs)(`button`,{onClick:()=>{m($i[h.id]),v(!1)},className:`flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold text-white hover:bg-[#004DB3]/50 transition-all cursor-pointer border border-[#004DB3]/40 hover:border-[#0069F2]`,children:[(0,Q.jsx)(ui,{className:`w-3.5 h-3.5 text-[#0069F2]`}),(0,Q.jsx)(`span`,{className:`hidden sm:inline`,children:`Caso`})]}),(0,Q.jsxs)(`button`,{onClick:()=>{f(Zi[h.id]),v(!1)},className:`flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${M[h.id]>=70?`bg-emerald-500/20 text-emerald-300 border border-emerald-500/40`:`bg-[#FFB515] text-black border border-[#FFB515] hover:brightness-110`}`,children:[(0,Q.jsx)(Qr,{className:`w-3.5 h-3.5`}),(0,Q.jsx)(`span`,{className:`hidden sm:inline`,children:`Evaluación`})]})]})]})]}),(0,Q.jsx)(`div`,{ref:k,className:`flex-1 overflow-y-auto p-4 sm:p-6 md:p-8`,onScroll:L,children:(0,Q.jsxs)(`div`,{className:`max-w-4xl lg:max-w-5xl mx-auto space-y-6 transition-all duration-300`,children:[(0,Q.jsxs)(`div`,{className:`p-4 sm:p-5 bg-gradient-to-r from-[#003273]/90 via-[#002C66]/90 to-[#001f48]/90 border border-[#004DB3]/60 rounded-2xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 backdrop-blur-md`,children:[(0,Q.jsx)(`div`,{className:`flex items-center gap-3`,children:(0,Q.jsx)(na,{size:36,showText:!0})}),(0,Q.jsxs)(`div`,{className:`md:px-4 md:border-l md:border-[#004DB3]/50 flex items-center gap-2.5`,children:[(0,Q.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-[#FFB515] shrink-0 animate-pulse`}),(0,Q.jsx)(`p`,{className:`text-xs sm:text-sm font-bold text-slate-100 tracking-wide font-['Outfit']`,children:`“Doctrina y entrenamiento en protección de dignatarios”`})]}),(0,Q.jsxs)(`div`,{className:`hidden lg:flex items-center gap-2.5 pl-4 border-l border-[#004DB3]/50 shrink-0`,children:[(0,Q.jsx)(`div`,{className:`w-8 h-8 rounded-xl bg-[#001f48] border border-[#004DB3]/70 flex items-center justify-center text-[#FFB515] shadow-inner`,children:(0,Q.jsx)(Ti,{className:`w-4 h-4 text-[#FFB515]`})}),(0,Q.jsxs)(`div`,{className:`text-left`,children:[(0,Q.jsx)(`span`,{className:`text-[10px] font-mono font-bold text-white block tracking-wider`,children:`Policía de Tierra del Fuego`}),(0,Q.jsx)(`span`,{className:`text-[9px] text-[#FFB515] font-mono block`,children:`Respaldo Institucional Oficial`})]})]})]}),(0,Q.jsxs)(`div`,{className:`relative rounded-2xl overflow-hidden border border-[#004DB3]/50 shadow-2xl group bg-[#001f48]`,children:[(0,Q.jsx)(`img`,{src:h.cover,alt:h.title,onError:e=>{e.target.src=`/recursos/imagenes/mod1_cover.svg`},className:`w-full h-48 sm:h-64 object-cover object-center transform group-hover:scale-102 transition-transform duration-700`}),(0,Q.jsxs)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-[#002C66] via-[#002C66]/70 to-transparent flex flex-col justify-end p-5 sm:p-7`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-2 mb-2 flex-wrap`,children:[(0,Q.jsxs)(`span`,{className:`inline-block px-3 py-0.5 bg-[#FFB515]/20 border border-[#FFB515]/40 text-[#FFB515] text-[10px] font-bold rounded-full`,children:[`Módulo 0`,h.id,` de 08 • Duración: `,h.durationMin,` min`]}),h.hasMap&&(0,Q.jsxs)(`span`,{className:`inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-semibold rounded-full`,children:[(0,Q.jsx)(gi,{className:`w-3 h-3`}),` Mapa Interactivo`]}),h.hasDiagram&&(0,Q.jsxs)(`span`,{className:`inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#0069F2]/25 border border-[#0069F2]/40 text-white text-[10px] font-semibold rounded-full`,children:[(0,Q.jsx)(di,{className:`w-3 h-3 text-[#0069F2]`}),` Diagramas Tácticos`]}),A[h.id]&&(0,Q.jsxs)(`span`,{className:`inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-500/30 border border-emerald-400 text-emerald-300 text-[10px] font-bold rounded-full`,children:[(0,Q.jsx)(oi,{className:`w-3 h-3`}),` Módulo Acreditado`]})]}),(0,Q.jsx)(`h1`,{className:`text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight`,children:h.title}),(0,Q.jsx)(`p`,{className:`text-xs sm:text-sm text-slate-200 mt-1 max-w-2xl leading-relaxed`,children:h.description})]})]}),(0,Q.jsxs)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3`,children:[(0,Q.jsxs)(`button`,{onClick:()=>s(!0),className:`p-3.5 bg-[#003273] hover:bg-[#004DB3] border border-[#004DB3]/60 hover:border-[#FFB515]/60 rounded-xl flex items-center justify-between text-left transition group cursor-pointer shadow-lg`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`text-[10px] text-[#FFB515] font-bold uppercase block`,children:`Doctrina Rápida`}),(0,Q.jsx)(`span`,{className:`text-xs font-semibold text-white`,children:`Flashcards 3D`})]}),(0,Q.jsx)(bi,{className:`w-5 h-5 text-[#FFB515] group-hover:rotate-180 transition-transform duration-500`})]}),(0,Q.jsxs)(`button`,{onClick:()=>f(Zi[h.id]),className:`p-3.5 bg-[#003273] hover:bg-[#004DB3] border border-[#004DB3]/60 hover:border-[#FFB515]/60 rounded-xl flex items-center justify-between text-left transition group cursor-pointer shadow-lg`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`text-[10px] text-[#FFB515] font-bold uppercase block`,children:`Evaluación Teórica`}),(0,Q.jsx)(`span`,{className:`text-xs font-semibold text-white`,children:M[h.id]?`Aprobado (${M[h.id]}%)`:`Rendir Cuestionario`})]}),(0,Q.jsx)(Qr,{className:`w-5 h-5 text-[#FFB515] group-hover:scale-110 transition-transform`})]}),(0,Q.jsxs)(`button`,{onClick:()=>m($i[h.id]),className:`p-3.5 bg-[#003273] hover:bg-[#004DB3] border border-[#004DB3]/60 hover:border-[#0069F2] rounded-xl flex items-center justify-between text-left transition group cursor-pointer shadow-lg`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`text-[10px] text-[#0069F2] font-bold uppercase block`,children:`Caso Práctico`}),(0,Q.jsx)(`span`,{className:`text-xs font-semibold text-white`,children:P[h.id]?`Aprobado (${P[h.id]}%)`:`Resolver Rúbrica`})]}),(0,Q.jsx)(ui,{className:`w-5 h-5 text-[#0069F2] group-hover:scale-110 transition-transform`})]}),(0,Q.jsxs)(`button`,{onClick:()=>{h.hasMap?b(`map`):b(`diagrams`)},className:`p-3.5 bg-[#003273] hover:bg-[#004DB3] border border-[#004DB3]/60 hover:border-[#0069F2] rounded-xl flex items-center justify-between text-left transition group cursor-pointer shadow-lg`,children:[(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(`span`,{className:`text-[10px] text-[#FFB515] font-bold uppercase block`,children:`Herramienta Visual`}),(0,Q.jsx)(`span`,{className:`text-xs font-semibold text-white`,children:h.hasMap?`Ver Mapa Táctico`:`Ver Diagramas`})]}),h.hasMap?(0,Q.jsx)(gi,{className:`w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform`}):(0,Q.jsx)(di,{className:`w-5 h-5 text-[#0069F2] group-hover:scale-110 transition-transform`})]})]}),y===`lecture`&&(0,Q.jsx)(`div`,{className:`glass-panel p-5 sm:p-8 md:p-10 markdown-body text-white leading-relaxed shadow-xl ${C===`large`?`text-lg leading-loose`:`text-base`}`,children:(0,Q.jsx)(Rr,{options:{overrides:{h2:{component:({children:e,...t})=>{let n=`sec-`+String(e||``).toLowerCase().replace(/[^a-z0-9áéíóúñ]+/gi,`-`).replace(/^-|-$/g,``);return(0,Q.jsxs)(`h2`,{id:n,className:`scroll-mt-24 group flex items-center justify-between`,...t,children:[(0,Q.jsx)(`span`,{children:e}),(0,Q.jsx)(`a`,{href:`#${n}`,onClick:e=>{e.preventDefault(),R(n)},className:`opacity-0 group-hover:opacity-40 hover:!opacity-100 text-xs text-[#FFB515] ml-2 transition`,children:`#`})]})}},h3:{component:({children:e,...t})=>{let n=`sec-`+String(e||``).toLowerCase().replace(/[^a-z0-9áéíóúñ]+/gi,`-`).replace(/^-|-$/g,``);return(0,Q.jsx)(`h3`,{id:n,className:`scroll-mt-24`,...t,children:e})}},blockquote:{component:({children:e})=>{let t=u.Children.toArray(e).map(e=>typeof e==`string`?e:e?.props?.children||``).join(` `),n=/alerta|peligro|amenaza|emboscada|hostil|urgente|letal/i.test(t),r=/legal|ley|código|penal|inmunidad|24\.059|normativa|jurisdicción|artículo/i.test(t),i=`callout-security`,a=Ti,o=`PROTOCOLO DE SEGURIDAD VIP`,s=`text-[#FFB515]`;return n?(i=`callout-alert`,a=Oi,o=`ALERTA TÁCTICA Y AMENAZA`,s=`text-rose-400`):r&&(i=`callout-legal`,a=xi,o=`MARCO LEGAL OPERACIONAL`,s=`text-[#0069F2]`),(0,Q.jsxs)(`div`,{className:`my-6 p-4 sm:p-5 rounded-xl border border-white/10 ${i}`,children:[(0,Q.jsxs)(`div`,{className:`flex items-center gap-2 mb-2`,children:[(0,Q.jsx)(a,{className:`w-4 h-4 ${s}`}),(0,Q.jsxs)(`span`,{className:`text-[11px] font-mono font-bold tracking-wider ${s}`,children:[`◤ `,o,` ◢`]})]}),(0,Q.jsx)(`div`,{className:`text-xs sm:text-sm text-slate-100 leading-relaxed font-sans not-italic`,children:e})]})}},img:{component:({src:e,alt:t,...n})=>{let r=(e||``).replace(/f:\/(?:Manual%20Dignatarios%20IA|Manual Dignatarios IA)\//gi,`/`).replace(/\.?\/recursos\/imagenes\//g,`/recursos/imagenes/`).replace(/\b(mod[1-8]_[a-z0-9_-]+)\.(?:png|jpg)/gi,`$1.svg`);return(0,Q.jsxs)(`span`,{className:`my-6 flex flex-col items-center block`,children:[(0,Q.jsx)(`span`,{className:`relative rounded-2xl overflow-hidden border border-[#004DB3]/50 bg-[#001a40] p-1.5 shadow-2xl shadow-[#001f48]/80 group inline-block`,children:(0,Q.jsx)(`img`,{src:r,alt:t,onError:e=>{e.target.style.display=`none`},className:`rounded-xl max-h-[520px] w-auto max-w-full object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]`,...n})}),t&&(0,Q.jsxs)(`span`,{className:`mt-2.5 text-center text-xs font-semibold text-slate-300 flex items-center justify-center gap-1.5 block`,children:[(0,Q.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-[#FFB515] inline-block`}),(0,Q.jsx)(`span`,{children:t})]})]})}}}},children:h.rawContent})}),y===`map`&&h.hasMap&&(0,Q.jsx)(`div`,{className:`glass-panel p-4 sm:p-6 md:p-8 shadow-xl`,children:(0,Q.jsx)(u.Suspense,{fallback:(0,Q.jsx)(ga,{label:`Cargando mapa táctico interactivo...`}),children:(0,Q.jsx)(ma,{moduleId:h.id})})}),y===`diagrams`&&h.hasDiagram&&(0,Q.jsx)(`div`,{className:`glass-panel p-4 sm:p-6 md:p-8 shadow-xl`,children:(0,Q.jsx)(u.Suspense,{fallback:(0,Q.jsx)(ga,{label:`Renderizando diagramas de flujo táctico...`}),children:(0,Q.jsx)(ha,{moduleId:h.id})})}),(0,Q.jsxs)(`div`,{className:`flex items-center justify-between pt-6 border-t border-[#004DB3]/50`,children:[(0,Q.jsxs)(`button`,{onClick:ie,disabled:h.id===1,className:`flex items-center space-x-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${h.id===1?`opacity-40 cursor-not-allowed border-[#004DB3]/30 text-slate-400`:`border-[#004DB3]/60 bg-[#003273] text-white hover:bg-[#004DB3]`}`,children:[(0,Q.jsx)(ri,{className:`w-4 h-4`}),(0,Q.jsx)(`span`,{children:`Módulo Anterior`})]}),(0,Q.jsxs)(`span`,{className:`text-xs font-mono font-semibold text-white`,children:[`Módulo 0`,h.id,` / 0`,Hi.length]}),(0,Q.jsxs)(`button`,{onClick:z,disabled:h.id===Hi.length,className:`flex items-center space-x-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${h.id===Hi.length?`opacity-40 cursor-not-allowed border-[#004DB3]/30 text-slate-400`:`border-[#FFB515]/60 bg-[#FFB515]/15 text-[#FFB515] hover:bg-[#FFB515]/25`}`,children:[(0,Q.jsx)(`span`,{children:`Módulo Siguiente`}),(0,Q.jsx)(ii,{className:`w-4 h-4`})]})]})]})})]}),c&&(0,Q.jsx)(ca,{isOpen:c,onClose:()=>l(!1),onSelectModule:(e,t)=>{g(e),b(t||`lecture`)},onOpenDiagrams:()=>b(`diagrams`),onOpenMap:()=>b(`map`),onOpenQuiz:(e,t,n)=>{f(e)},onOpenPractical:e=>{m(e)},onOpenBadges:()=>a(!0),onOpenCertificate:()=>r(!0)}),i&&(0,Q.jsx)(la,{isOpen:i,onClose:()=>a(!1),validatedModules:A,quizScores:M,practicalScores:P}),o&&(0,Q.jsx)(ia,{evaluation:Zi[h.id],moduleId:h.id,moduleTitle:h.title,onClose:()=>s(!1),onStartQuiz:()=>{s(!1),f(Zi[h.id])}}),d&&(0,Q.jsx)(aa,{evaluation:d,moduleId:h.id,moduleTitle:h.title,onClose:()=>f(null),onComplete:ae}),p&&(0,Q.jsx)(oa,{practical:p,moduleId:h.id,onClose:()=>m(null),onSubmitPractical:B}),n&&(0,Q.jsx)(sa,{user:{nombre:`Oficial de Custodia VIP`,rango:`Oficial Principal`,legajo:`LP-88492`},progressPct:le,onClose:()=>r(!1)})]})}(0,d.createRoot)(document.getElementById(`root`)).render((0,Q.jsx)(u.StrictMode,{children:(0,Q.jsx)(_a,{})}));export{bi as a,r as c,Di as i,ta as n,Jr as o,Ai as r,s,pa as t};