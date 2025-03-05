(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const on=(e,t)=>e===t,H=Symbol("solid-proxy"),Rt=typeof Proxy=="function",ht=Symbol("solid-track"),Oe={equals:on};let Tt=Ut;const Z=1,Ee=2,It={owned:null,cleanups:null,context:null,owner:null};var C=null;let De=null,ln=null,O=null,I=null,X=null,Ne=0;function Ft(e,t){const n=O,o=C,r=e.length===0,i=t===void 0?o:t,l=r?It:{owned:null,cleanups:null,context:i?i.context:null,owner:i},s=r?e:()=>e(()=>M(()=>ve(l)));C=l,O=null;try{return ee(s,!0)}finally{O=n,C=o}}function _(e,t){t=t?Object.assign({},Oe,t):Oe;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=r=>(typeof r=="function"&&(r=r(n.value)),Dt(n,r));return[Mt.bind(n),o]}function Q(e,t,n){const o=rt(e,t,!1,Z);Ae(o)}function le(e,t,n){Tt=un;const o=rt(e,t,!1,Z);o.user=!0,X?X.push(o):Ae(o)}function S(e,t,n){n=n?Object.assign({},Oe,n):Oe;const o=rt(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,Ae(o),Mt.bind(o)}function jt(e){return ee(e,!1)}function M(e){if(O===null)return e();const t=O;O=null;try{return e()}finally{O=t}}function et(e,t,n){const o=Array.isArray(e);let r,i=n&&n.defer;return l=>{let s;if(o){s=Array(e.length);for(let d=0;d<e.length;d++)s[d]=e[d]()}else s=e();if(i)return i=!1,l;const c=M(()=>t(s,r,l));return r=s,c}}function se(e){return C===null||(C.cleanups===null?C.cleanups=[e]:C.cleanups.push(e)),e}function Ke(){return O}function Bt(){return C}function Nt(e,t){const n=C,o=O;C=e,O=null;try{return ee(t,!0)}catch(r){ot(r)}finally{C=n,O=o}}function sn(e){const t=O,n=C;return Promise.resolve().then(()=>{O=t,C=n;let o;return ee(e,!1),O=C=null,o?o.done:void 0})}const[jo,Bo]=_(!1);function tt(e,t){const n=Symbol("context");return{id:n,Provider:dn(n),defaultValue:e}}function Me(e){let t;return C&&C.context&&(t=C.context[e.id])!==void 0?t:e.defaultValue}function nt(e){const t=S(e),n=S(()=>qe(t()));return n.toArray=()=>{const o=n();return Array.isArray(o)?o:o!=null?[o]:[]},n}function Mt(){if(this.sources&&this.state)if(this.state===Z)Ae(this);else{const e=I;I=null,ee(()=>Te(this),!1),I=e}if(O){const e=this.observers?this.observers.length:0;O.sources?(O.sources.push(this),O.sourceSlots.push(e)):(O.sources=[this],O.sourceSlots=[e]),this.observers?(this.observers.push(O),this.observerSlots.push(O.sources.length-1)):(this.observers=[O],this.observerSlots=[O.sources.length-1])}return this.value}function Dt(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&ee(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=De&&De.running;l&&De.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?I.push(i):X.push(i),i.observers&&Ht(i)),l||(i.state=Z)}if(I.length>1e6)throw I=[],new Error},!1)),t}function Ae(e){if(!e.fn)return;ve(e);const t=Ne;an(e,e.value,t)}function an(e,t,n){let o;const r=C,i=O;O=C=e;try{o=e.fn(t)}catch(l){return e.pure&&(e.state=Z,e.owned&&e.owned.forEach(ve),e.owned=null),e.updatedAt=n+1,ot(l)}finally{O=i,C=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Dt(e,o):e.value=o,e.updatedAt=n)}function rt(e,t,n,o=Z,r){const i={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:C,context:C?C.context:null,pure:n};return C===null||C!==It&&(C.owned?C.owned.push(i):C.owned=[i]),i}function Re(e){if(e.state===0)return;if(e.state===Ee)return Te(e);if(e.suspense&&M(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ne);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===Z)Ae(e);else if(e.state===Ee){const o=I;I=null,ee(()=>Te(e,t[0]),!1),I=o}}function ee(e,t){if(I)return e();let n=!1;t||(I=[]),X?n=!0:X=[],Ne++;try{const o=e();return cn(n),o}catch(o){n||(X=null),I=null,ot(o)}}function cn(e){if(I&&(Ut(I),I=null),e)return;const t=X;X=null,t.length&&ee(()=>Tt(t),!1)}function Ut(e){for(let t=0;t<e.length;t++)Re(e[t])}function un(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:Re(o)}for(t=0;t<n;t++)Re(e[t])}function Te(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const r=o.state;r===Z?o!==t&&(!o.updatedAt||o.updatedAt<Ne)&&Re(o):r===Ee&&Te(o,t)}}}function Ht(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Ee,n.pure?I.push(n):X.push(n),n.observers&&Ht(n))}}function ve(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),o=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();o<r.length&&(i.sourceSlots[l]=o,r[o]=i,n.observerSlots[o]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)ve(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ve(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function fn(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ot(e,t=C){throw fn(e)}function qe(e){if(typeof e=="function"&&!e.length)return qe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const o=qe(e[n]);Array.isArray(o)?t.push.apply(t,o):t.push(o)}return t}return e}function dn(e,t){return function(o){let r;return Q(()=>r=M(()=>(C.context={...C.context,[e]:o.value},nt(()=>o.children))),void 0),r}}function a(e,t){return M(()=>e(t||{}))}function Ce(){return!0}const Xe={get(e,t,n){return t===H?n:e.get(t)},has(e,t){return t===H?!0:e.has(t)},set:Ce,deleteProperty:Ce,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Ce,deleteProperty:Ce}},ownKeys(e){return e.keys()}};function Ue(e){return(e=typeof e=="function"?e():e)?e:{}}function hn(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function ge(...e){let t=!1;for(let l=0;l<e.length;l++){const s=e[l];t=t||!!s&&H in s,e[l]=typeof s=="function"?(t=!0,S(s)):s}if(Rt&&t)return new Proxy({get(l){for(let s=e.length-1;s>=0;s--){const c=Ue(e[s])[l];if(c!==void 0)return c}},has(l){for(let s=e.length-1;s>=0;s--)if(l in Ue(e[s]))return!0;return!1},keys(){const l=[];for(let s=0;s<e.length;s++)l.push(...Object.keys(Ue(e[s])));return[...new Set(l)]}},Xe);const n={},o=Object.create(null);for(let l=e.length-1;l>=0;l--){const s=e[l];if(!s)continue;const c=Object.getOwnPropertyNames(s);for(let d=c.length-1;d>=0;d--){const h=c[d];if(h==="__proto__"||h==="constructor")continue;const p=Object.getOwnPropertyDescriptor(s,h);if(!o[h])o[h]=p.get?{enumerable:!0,configurable:!0,get:hn.bind(n[h]=[p.get.bind(s)])}:p.value!==void 0?p:void 0;else{const u=n[h];u&&(p.get?u.push(p.get.bind(s)):p.value!==void 0&&u.push(()=>p.value))}}}const r={},i=Object.keys(o);for(let l=i.length-1;l>=0;l--){const s=i[l],c=o[s];c&&c.get?Object.defineProperty(r,s,c):r[s]=c?c.value:void 0}return r}function it(e,...t){if(Rt&&H in e){const r=new Set(t.length>1?t.flat():t[0]),i=t.map(l=>new Proxy({get(s){return l.includes(s)?e[s]:void 0},has(s){return l.includes(s)&&s in e},keys(){return l.filter(s=>s in e)}},Xe));return i.push(new Proxy({get(l){return r.has(l)?void 0:e[l]},has(l){return r.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!r.has(l))}},Xe)),i}const n={},o=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,r),l=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let s=!1,c=0;for(const d of t)d.includes(r)&&(s=!0,l?o[c][r]=i.value:Object.defineProperty(o[c],r,i)),++c;s||(l?n[r]=i.value:Object.defineProperty(n,r,i))}return[...o,n]}const gn=e=>`Stale read from <${e}>.`;function zt(e){const t=e.keyed,n=S(()=>e.when,void 0,{equals:(o,r)=>t?o===r:!o==!r});return S(()=>{const o=n();if(o){const r=e.children;return typeof r=="function"&&r.length>0?M(()=>r(t?o:()=>{if(!M(n))throw gn("Show");return e.when})):r}return e.fallback},void 0,void 0)}const pn=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],mn=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...pn]),yn=new Set(["innerHTML","textContent","innerText","children"]),bn=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),xn=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function wn(e,t){const n=xn[e];return typeof n=="object"?n[t]?n.$:void 0:n}const vn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),$n=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Pn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Sn(e,t,n){let o=n.length,r=t.length,i=o,l=0,s=0,c=t[r-1].nextSibling,d=null;for(;l<r||s<i;){if(t[l]===n[s]){l++,s++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const h=i<o?s?n[s-1].nextSibling:n[i-s]:c;for(;s<i;)e.insertBefore(n[s++],h)}else if(i===s)for(;l<r;)(!d||!d.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[s]===t[r-1]){const h=t[--r].nextSibling;e.insertBefore(n[s++],t[l++].nextSibling),e.insertBefore(n[--i],h),t[r]=n[i]}else{if(!d){d=new Map;let p=s;for(;p<i;)d.set(n[p],p++)}const h=d.get(t[l]);if(h!=null)if(s<h&&h<i){let p=l,u=1,m;for(;++p<r&&p<i&&!((m=d.get(t[p]))==null||m!==h+u);)u++;if(u>h-s){const $=t[l];for(;s<h;)e.insertBefore(n[s++],$)}else e.replaceChild(n[s++],t[l++])}else l++;else t[l++].remove()}}}const gt="_$DX_DELEGATE";function An(e,t,n,o={}){let r;return Ft(i=>{r=i,t===document?e():A(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{r(),t.textContent=""}}function E(e,t,n){let o;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},i=t?()=>M(()=>document.importNode(o||(o=r()),!0)):()=>(o||(o=r())).cloneNode(!0);return i.cloneNode=i,i}function lt(e,t=window.document){const n=t[gt]||(t[gt]=new Set);for(let o=0,r=e.length;o<r;o++){const i=e[o];n.has(i)||(n.add(i),t.addEventListener(i,Fn))}}function Ye(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Cn(e,t,n,o){o==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,o)}function _n(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)}function kn(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ln(e,t,n,o){if(o)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n,typeof n!="function"&&n)}function On(e,t,n={}){const o=Object.keys(t||{}),r=Object.keys(n);let i,l;for(i=0,l=r.length;i<l;i++){const s=r[i];!s||s==="undefined"||t[s]||(pt(e,s,!1),delete n[s])}for(i=0,l=o.length;i<l;i++){const s=o[i],c=!!t[s];!s||s==="undefined"||n[s]===c||!c||(pt(e,s,!0),n[s]=c)}return n}function En(e,t,n){if(!t)return n?Ye(e,"style"):t;const o=e.style;if(typeof t=="string")return o.cssText=t;typeof n=="string"&&(o.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&o.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(o.setProperty(i,r),n[i]=r);return n}function st(e,t={},n,o){const r={};return o||Q(()=>r.children=$e(e,t.children,r.children)),Q(()=>typeof t.ref=="function"&&Rn(t.ref,e)),Q(()=>Tn(e,t,n,!0,r,!0)),r}function Rn(e,t,n){return M(()=>e(t,n))}function A(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return $e(e,t,o,n);Q(r=>$e(e,t(),r,n),o)}function Tn(e,t,n,o,r={},i=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=mt(e,l,null,r[l],n,i,t)}for(const l in t){if(l==="children")continue;const s=t[l];r[l]=mt(e,l,s,r[l],n,i,t)}}function In(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function pt(e,t,n){const o=t.trim().split(/\s+/);for(let r=0,i=o.length;r<i;r++)e.classList.toggle(o[r],n)}function mt(e,t,n,o,r,i,l){let s,c,d,h,p;if(t==="style")return En(e,n,o);if(t==="classList")return On(e,n,o);if(n===o)return o;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);o&&e.removeEventListener(u,o,typeof o!="function"&&o),n&&e.addEventListener(u,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);o&&e.removeEventListener(u,o,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),m=vn.has(u);if(!m&&o){const $=Array.isArray(o)?o[0]:o;e.removeEventListener(u,$)}(m||n)&&(Ln(e,u,n,m),m&&lt([u]))}else if(t.slice(0,5)==="attr:")Ye(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")_n(e,t.slice(5),n);else if((p=t.slice(0,5)==="prop:")||(d=yn.has(t))||!r&&((h=wn(t,e.tagName))||(c=mn.has(t)))||(s=e.nodeName.includes("-")||"is"in l))p&&(t=t.slice(5),c=!0),t==="class"||t==="className"?kn(e,n):s&&!c&&!d?e[In(t)]=n:e[h||t]=n;else{const u=r&&t.indexOf(":")>-1&&Pn[t.split(":")[0]];u?Cn(e,u,t,n):Ye(e,bn[t]||t,n)}return n}function Fn(e){let t=e.target;const n=`$$${e.type}`,o=e.target,r=e.currentTarget,i=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),l=()=>{const c=t[n];if(c&&!t.disabled){const d=t[`${n}Data`];if(d!==void 0?c.call(t,d,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},s=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();i(c[0]);for(let d=0;d<c.length-2&&(t=c[d],!!l());d++){if(t._$host){t=t._$host,s();break}if(t.parentNode===r)break}}else s();i(o)}function $e(e,t,n,o,r){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=o!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(t=t.toString(),t===n))return n;if(l){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=ce(e,n,o,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean")n=ce(e,n,o);else{if(i==="function")return Q(()=>{let s=t();for(;typeof s=="function";)s=s();n=$e(e,s,n,o)}),()=>n;if(Array.isArray(t)){const s=[],c=n&&Array.isArray(n);if(Je(s,t,n,r))return Q(()=>n=$e(e,s,n,o,!0)),()=>n;if(s.length===0){if(n=ce(e,n,o),l)return n}else c?n.length===0?yt(e,s,o):Sn(e,n,s):(n&&ce(e),yt(e,s));n=s}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=ce(e,n,o,t);ce(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Je(e,t,n,o){let r=!1;for(let i=0,l=t.length;i<l;i++){let s=t[i],c=n&&n[e.length],d;if(!(s==null||s===!0||s===!1))if((d=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))r=Je(e,s,c)||r;else if(d==="function")if(o){for(;typeof s=="function";)s=s();r=Je(e,Array.isArray(s)?s:[s],Array.isArray(c)?c:[c])||r}else e.push(s),r=!0;else{const h=String(s);c&&c.nodeType===3&&c.data===h?e.push(c):e.push(document.createTextNode(h))}}return r}function yt(e,t,n=null){for(let o=0,r=t.length;o<r;o++)e.insertBefore(t[o],n)}function ce(e,t,n,o){if(n===void 0)return e.textContent="";const r=o||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(r!==s){const c=s.parentNode===e;!i&&!l?c?e.replaceChild(r,s):e.insertBefore(r,n):c&&s.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}const jn=!1,Bn="http://www.w3.org/2000/svg";function Nn(e,t=!1){return t?document.createElementNS(Bn,e):document.createElement(e)}function Mn(e){const[t,n]=it(e,["component"]),o=S(()=>t.component);return S(()=>{const r=o();switch(typeof r){case"function":return M(()=>r(n));case"string":const i=$n.has(r),l=Nn(r,i);return st(l,n,i),l}})}let Dn={data:""},Un=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Dn,Hn=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,zn=/\/\*[^]*?\*\/|  +/g,bt=/\n+/g,re=(e,t)=>{let n="",o="",r="";for(let i in e){let l=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+l+";":o+=i[1]=="f"?re(l,i):i+"{"+re(l,i[1]=="k"?"":t)+"}":typeof l=="object"?o+=re(l,t?t.replace(/([^,])+/g,s=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,s):s?s+" "+c:c)):i):l!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=re.p?re.p(i,l):i+":"+l+";")}return n+(t&&r?t+"{"+r+"}":r)+o},G={},Wt=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Wt(e[n]);return t}return e},Wn=(e,t,n,o,r)=>{let i=Wt(e),l=G[i]||(G[i]=(c=>{let d=0,h=11;for(;d<c.length;)h=101*h+c.charCodeAt(d++)>>>0;return"go"+h})(i));if(!G[l]){let c=i!==e?e:(d=>{let h,p,u=[{}];for(;h=Hn.exec(d.replace(zn,""));)h[4]?u.shift():h[3]?(p=h[3].replace(bt," ").trim(),u.unshift(u[0][p]=u[0][p]||{})):u[0][h[1]]=h[2].replace(bt," ").trim();return u[0]})(e);G[l]=re(r?{["@keyframes "+l]:c}:c,n?"":"."+l)}let s=n&&G.g?G.g:null;return n&&(G.g=G[l]),((c,d,h,p)=>{p?d.data=d.data.replace(p,c):d.data.indexOf(c)===-1&&(d.data=h?c+d.data:d.data+c)})(G[l],t,o,s),l},Vn=(e,t,n)=>e.reduce((o,r,i)=>{let l=t[i];if(l&&l.call){let s=l(n),c=s&&s.props&&s.props.className||/^go/.test(s)&&s;l=c?"."+c:s&&typeof s=="object"?s.props?"":re(s,""):s===!1?"":s}return o+r+(l??"")},"");function Ie(e){let t=this||{},n=e.call?e(t.p):e;return Wn(n.unshift?n.raw?Vn(n,[].slice.call(arguments,1),t.p):n.reduce((o,r)=>Object.assign(o,r&&r.call?r(t.p):r),{}):n,Un(t.target),t.g,t.o,t.k)}Ie.bind({g:1});Ie.bind({k:1});const Gn=tt();function Kn(e){let t=this||{};return(...n)=>{const o=r=>{const i=Me(Gn),l=ge(r,{theme:i}),s=ge(l,{get class(){const m=l.class,$="class"in l&&/^go[0-9]+/.test(m);let b=Ie.apply({target:t.target,o:$,p:l,g:t.g},n);return[m,b].filter(Boolean).join(" ")}}),[c,d]=it(s,["as","theme"]),h=d,p=c.as||e;let u;return typeof p=="function"?u=p(h):t.g==1?(u=document.createElement(p),st(u,h)):u=Mn(ge({component:p},h)),u};return o.class=r=>M(()=>Ie.apply({target:t.target,p:r,g:t.g},n)),o}}const x=new Proxy(Kn,{get(e,t){return e(t)}});function Vt(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function o(r,i){if(n)return!(n=!1);const l={to:r,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const s of e)s.listener({...l,from:s.location,retry:c=>{c&&(n=!0),s.navigate(r,{...i,resolve:!1})}});return!l.defaultPrevented}return{subscribe:t,confirm:o}}let Qe;function at(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Qe=window.history.state._depth}at();function qn(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Xn(e,t){let n=!1;return()=>{const o=Qe;at();const r=o==null?null:Qe-o;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const Yn=/^(?:[a-z0-9]+:)?\/\//i,Jn=/^\/+|(\/)\/+$/g,Gt="http://sr";function ie(e,t=!1){const n=e.replace(Jn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Le(e,t,n){if(Yn.test(t))return;const o=ie(e),r=n&&ie(n);let i="";return!r||t.startsWith("/")?i=o:r.toLowerCase().indexOf(o.toLowerCase())!==0?i=o+r:i=r,(i||"/")+ie(t,!i)}function Qn(e,t){if(e==null)throw new Error(t);return e}function Zn(e,t){return ie(e).replace(/\/*(\*.*)?$/g,"")+ie(t)}function Kt(e){const t={};return e.searchParams.forEach((n,o)=>{o in t?Array.isArray(t[o])?t[o].push(n):t[o]=[t[o],n]:t[o]=n}),t}function er(e,t,n){const[o,r]=e.split("/*",2),i=o.split("/").filter(Boolean),l=i.length;return s=>{const c=s.split("/").filter(Boolean),d=c.length-l;if(d<0||d>0&&r===void 0&&!t)return null;const h={path:l?"":"/",params:{}},p=u=>n===void 0?void 0:n[u];for(let u=0;u<l;u++){const m=i[u],$=m[0]===":",b=$?c[u]:c[u].toLowerCase(),w=$?m.slice(1):m.toLowerCase();if($&&He(b,p(w)))h.params[w]=b;else if($||!He(b,w))return null;h.path+=`/${b}`}if(r){const u=d?c.slice(-d).join("/"):"";if(He(u,p(r)))h.params[r]=u;else return null}return h}}function He(e,t){const n=o=>o===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function tr(e){const[t,n]=e.pattern.split("/*",2),o=t.split("/").filter(Boolean);return o.reduce((r,i)=>r+(i.startsWith(":")?2:3),o.length-(n===void 0?0:1))}function qt(e){const t=new Map,n=Bt();return new Proxy({},{get(o,r){return t.has(r)||Nt(n,()=>t.set(r,S(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Xt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),o=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(o);)r.push(n+=t[1]),o=o.slice(t[0].length);return Xt(o).reduce((i,l)=>[...i,...r.map(s=>s+l)],[])}const nr=100,Yt=tt(),ct=tt(),ut=()=>Qn(Me(Yt),"<A> and 'use' router primitives can be only used inside a Route."),rr=()=>Me(ct)||ut().base,or=e=>{const t=rr();return S(()=>t.resolvePath(e()))},ir=e=>{const t=ut();return S(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},ft=()=>ut().location;function lr(e,t=""){const{component:n,preload:o,load:r,children:i,info:l}=e,s=!i||Array.isArray(i)&&!i.length,c={key:e,component:n,preload:o||r,info:l};return Jt(e.path).reduce((d,h)=>{for(const p of Xt(h)){const u=Zn(t,p);let m=s?u:u.split("/*",1)[0];m=m.split("/").map($=>$.startsWith(":")||$.startsWith("*")?$:encodeURIComponent($)).join("/"),d.push({...c,originalPath:h,pattern:m,matcher:er(m,!s,e.matchFilters)})}return d},[])}function sr(e,t=0){return{routes:e,score:tr(e[e.length-1])*1e4-t,matcher(n){const o=[];for(let r=e.length-1;r>=0;r--){const i=e[r],l=i.matcher(n);if(!l)return null;o.unshift({...l,route:i})}return o}}}function Jt(e){return Array.isArray(e)?e:[e]}function Qt(e,t="",n=[],o=[]){const r=Jt(e);for(let i=0,l=r.length;i<l;i++){const s=r[i];if(s&&typeof s=="object"){s.hasOwnProperty("path")||(s.path="");const c=lr(s,t);for(const d of c){n.push(d);const h=Array.isArray(s.children)&&s.children.length===0;if(s.children&&!h)Qt(s.children,d.pattern,n,o);else{const p=sr([...n],o.length);o.push(p)}n.pop()}}}return n.length?o:o.sort((i,l)=>l.score-i.score)}function ze(e,t){for(let n=0,o=e.length;n<o;n++){const r=e[n].matcher(t);if(r)return r}return[]}function ar(e,t,n){const o=new URL(Gt),r=S(h=>{const p=e();try{return new URL(p,o)}catch{return console.error(`Invalid path ${p}`),h}},o,{equals:(h,p)=>h.href===p.href}),i=S(()=>r().pathname),l=S(()=>r().search,!0),s=S(()=>r().hash),c=()=>"",d=et(l,()=>Kt(r()));return{get pathname(){return i()},get search(){return l()},get hash(){return s()},get state(){return t()},get key(){return c()},query:n?n(d):qt(d)}}let oe;function cr(){return oe}function ur(e,t,n,o={}){const{signal:[r,i],utils:l={}}=e,s=l.parsePath||(f=>f),c=l.renderPath||(f=>f),d=l.beforeLeave||Vt(),h=Le("",o.base||"");if(h===void 0)throw new Error(`${h} is not a valid base path`);h&&!r().value&&i({value:h,replace:!0,scroll:!1});const[p,u]=_(!1);let m;const $=(f,y)=>{y.value===b()&&y.state===k()||(m===void 0&&u(!0),oe=f,m=y,sn(()=>{m===y&&(w(m.value),L(m.state),F[1](P=>P.filter(R=>R.pending)))}).finally(()=>{m===y&&jt(()=>{oe=void 0,f==="navigate"&&g(m),u(!1),m=void 0})}))},[b,w]=_(r().value),[k,L]=_(r().state),N=ar(b,k,l.queryWrapper),T=[],F=_([]),W=S(()=>typeof o.transformUrl=="function"?ze(t(),o.transformUrl(N.pathname)):ze(t(),N.pathname)),te=()=>{const f=W(),y={};for(let P=0;P<f.length;P++)Object.assign(y,f[P].params);return y},ae=l.paramsWrapper?l.paramsWrapper(te,t):qt(te),D={pattern:h,path:()=>h,outlet:()=>null,resolvePath(f){return Le(h,f)}};return Q(et(r,f=>$("native",f),{defer:!0})),{base:D,location:N,params:ae,isRouting:p,renderPath:c,parsePath:s,navigatorFactory:U,matches:W,beforeLeave:d,preloadRoute:v,singleFlight:o.singleFlight===void 0?!0:o.singleFlight,submissions:F};function me(f,y,P){M(()=>{if(typeof y=="number"){y&&(l.go?l.go(y):console.warn("Router integration does not support relative routing"));return}const R=!y||y[0]==="?",{replace:Y,resolve:J,scroll:j,state:ne}={replace:!1,resolve:!R,scroll:!0,...P},V=J?f.resolvePath(y):Le(R&&N.pathname||"",y);if(V===void 0)throw new Error(`Path '${y}' is not a routable path`);if(T.length>=nr)throw new Error("Too many redirects");const dt=b();(V!==dt||ne!==k())&&(jn||d.confirm(V,P)&&(T.push({value:dt,replace:Y,scroll:j,state:k()}),$("navigate",{value:V,state:ne})))})}function U(f){return f=f||Me(ct)||D,(y,P)=>me(f,y,P)}function g(f){const y=T[0];y&&(i({...f,replace:y.replace,scroll:y.scroll}),T.length=0)}function v(f,y){const P=ze(t(),f.pathname),R=oe;oe="preload";for(let Y in P){const{route:J,params:j}=P[Y];J.component&&J.component.preload&&J.component.preload();const{preload:ne}=J;y&&ne&&Nt(n(),()=>ne({params:j,location:{pathname:f.pathname,search:f.search,hash:f.hash,query:Kt(f),state:null,key:""},intent:"preload"}))}oe=R}}function fr(e,t,n,o){const{base:r,location:i,params:l}=e,{pattern:s,component:c,preload:d}=o().route,h=S(()=>o().path);c&&c.preload&&c.preload();const p=d?d({params:l,location:i,intent:oe||"initial"}):void 0;return{parent:t,pattern:s,path:h,outlet:()=>c?a(c,{params:l,location:i,data:p,get children(){return n()}}):n(),resolvePath(m){return Le(r.path(),m,h())}}}const dr=e=>t=>{const{base:n}=t,o=nt(()=>t.children),r=S(()=>Qt(o(),t.base||""));let i;const l=ur(e,r,()=>i,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(l),a(Yt.Provider,{value:l,get children(){return a(hr,{routerState:l,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[S(()=>(i=Bt())&&null),a(gr,{routerState:l,get branches(){return r()}})]}})}})};function hr(e){const t=e.routerState.location,n=e.routerState.params,o=S(()=>e.preload&&M(()=>{e.preload({params:n,location:t,intent:cr()||"initial"})}));return a(zt,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>a(r,{params:n,location:t,get data(){return o()},get children(){return e.children}})})}function gr(e){const t=[];let n;const o=S(et(e.routerState.matches,(r,i,l)=>{let s=i&&r.length===i.length;const c=[];for(let d=0,h=r.length;d<h;d++){const p=i&&i[d],u=r[d];l&&p&&u.route.key===p.route.key?c[d]=l[d]:(s=!1,t[d]&&t[d](),Ft(m=>{t[d]=m,c[d]=fr(e.routerState,c[d-1]||e.routerState.base,xt(()=>o()[d+1]),()=>e.routerState.matches()[d])}))}return t.splice(r.length).forEach(d=>d()),l&&s?l:(n=c[0],c)}));return xt(()=>o()&&n)()}const xt=e=>()=>a(zt,{get when(){return e()},keyed:!0,children:t=>a(ct.Provider,{value:t,get children(){return t.outlet()}})}),z=e=>{const t=nt(()=>e.children);return ge(e,{get children(){return t()}})};function pr([e,t],n,o){return[e,o?r=>t(o(r)):t]}function mr(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,o=pr(_(n(e.get()),{equals:(r,i)=>r.value===i.value&&r.state===i.state}),void 0,r=>(!t&&e.set(r),r));return e.init&&se(e.init((r=e.get())=>{t=!0,o[1](n(r)),t=!1})),dr({signal:o,create:e.create,utils:e.utils})}function yr(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function br(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const xr=new Map;function wr(e=!0,t=!1,n="/_server",o){return r=>{const i=r.base.path(),l=r.navigatorFactory(r.base);let s,c;function d(b){return b.namespaceURI==="http://www.w3.org/2000/svg"}function h(b){if(b.defaultPrevented||b.button!==0||b.metaKey||b.altKey||b.ctrlKey||b.shiftKey)return;const w=b.composedPath().find(W=>W instanceof Node&&W.nodeName.toUpperCase()==="A");if(!w||t&&!w.hasAttribute("link"))return;const k=d(w),L=k?w.href.baseVal:w.href;if((k?w.target.baseVal:w.target)||!L&&!w.hasAttribute("state"))return;const T=(w.getAttribute("rel")||"").split(/\s+/);if(w.hasAttribute("download")||T&&T.includes("external"))return;const F=k?new URL(L,document.baseURI):new URL(L);if(!(F.origin!==window.location.origin||i&&F.pathname&&!F.pathname.toLowerCase().startsWith(i.toLowerCase())))return[w,F]}function p(b){const w=h(b);if(!w)return;const[k,L]=w,N=r.parsePath(L.pathname+L.search+L.hash),T=k.getAttribute("state");b.preventDefault(),l(N,{resolve:!1,replace:k.hasAttribute("replace"),scroll:!k.hasAttribute("noscroll"),state:T?JSON.parse(T):void 0})}function u(b){const w=h(b);if(!w)return;const[k,L]=w;o&&(L.pathname=o(L.pathname)),r.preloadRoute(L,k.getAttribute("preload")!=="false")}function m(b){clearTimeout(s);const w=h(b);if(!w)return c=null;const[k,L]=w;c!==k&&(o&&(L.pathname=o(L.pathname)),s=setTimeout(()=>{r.preloadRoute(L,k.getAttribute("preload")!=="false"),c=k},20))}function $(b){if(b.defaultPrevented)return;let w=b.submitter&&b.submitter.hasAttribute("formaction")?b.submitter.getAttribute("formaction"):b.target.getAttribute("action");if(!w)return;if(!w.startsWith("https://action/")){const L=new URL(w,Gt);if(w=r.parsePath(L.pathname+L.search),!w.startsWith(n))return}if(b.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const k=xr.get(w);if(k){b.preventDefault();const L=new FormData(b.target,b.submitter);k.call({r,f:b.target},b.target.enctype==="multipart/form-data"?L:new URLSearchParams(L))}}lt(["click","submit"]),document.addEventListener("click",p),e&&(document.addEventListener("mousemove",m,{passive:!0}),document.addEventListener("focusin",u,{passive:!0}),document.addEventListener("touchstart",u,{passive:!0})),document.addEventListener("submit",$),se(()=>{document.removeEventListener("click",p),e&&(document.removeEventListener("mousemove",m),document.removeEventListener("focusin",u),document.removeEventListener("touchstart",u)),document.removeEventListener("submit",$)})}}function vr(e){const t=()=>{const o=window.location.pathname.replace(/^\/+/,"/")+window.location.search,r=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:o+window.location.hash,state:r}},n=Vt();return mr({get:t,set({value:o,replace:r,scroll:i,state:l}){r?window.history.replaceState(qn(l),"",o):window.history.pushState(l,"",o),br(decodeURIComponent(window.location.hash.slice(1)),i),at()},init:o=>yr(window,"popstate",Xn(o,r=>{if(r&&r<0)return!n.confirm(r);{const i=t();return!n.confirm(i.value,{state:i.state})}})),create:wr(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:o=>window.history.go(o),beforeLeave:n}})(e)}var $r=E("<a>");function Zt(e){e=ge({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=it(e,["href","state","class","activeClass","inactiveClass","end"]),n=or(()=>e.href),o=ir(n),r=ft(),i=S(()=>{const l=n();if(l===void 0)return[!1,!1];const s=ie(l.split(/[?#]/,1)[0]).toLowerCase(),c=decodeURI(ie(r.pathname).toLowerCase());return[e.end?s===c:c.startsWith(s+"/")||c===s,s===c]});return(()=>{var l=$r();return st(l,ge(t,{get href(){return o()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i()[0],[e.activeClass]:i()[0],...t.classList}},link:"",get"aria-current"(){return i()[1]?"page":void 0}}),!1,!1),l})()}const Ze=Symbol("store-raw"),pe=Symbol("store-node"),q=Symbol("store-has"),en=Symbol("store-self");function tn(e){let t=e[H];if(!t&&(Object.defineProperty(e,H,{value:t=new Proxy(e,Ar)}),!Array.isArray(e))){const n=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let r=0,i=n.length;r<i;r++){const l=n[r];o[l].get&&Object.defineProperty(e,l,{enumerable:o[l].enumerable,get:o[l].get.bind(t)})}}return t}function Fe(e){let t;return e!=null&&typeof e=="object"&&(e[H]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function Pe(e,t=new Set){let n,o,r,i;if(n=e!=null&&e[Ze])return n;if(!Fe(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,s=e.length;l<s;l++)r=e[l],(o=Pe(r,t))!==r&&(e[l]=o)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let c=0,d=l.length;c<d;c++)i=l[c],!s[i].get&&(r=e[i],(o=Pe(r,t))!==r&&(e[i]=o))}return e}function je(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function Se(e,t,n){if(e[t])return e[t];const[o,r]=_(n,{equals:!1,internal:!0});return o.$=r,e[t]=o}function Pr(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===H||t===pe||(delete n.value,delete n.writable,n.get=()=>e[H][t]),n}function nn(e){Ke()&&Se(je(e,pe),en)()}function Sr(e){return nn(e),Reflect.ownKeys(e)}const Ar={get(e,t,n){if(t===Ze)return e;if(t===H)return n;if(t===ht)return nn(e),n;const o=je(e,pe),r=o[t];let i=r?r():e[t];if(t===pe||t===q||t==="__proto__")return i;if(!r){const l=Object.getOwnPropertyDescriptor(e,t);Ke()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(i=Se(o,t,i)())}return Fe(i)?tn(i):i},has(e,t){return t===Ze||t===H||t===ht||t===pe||t===q||t==="__proto__"?!0:(Ke()&&Se(je(e,q),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Sr,getOwnPropertyDescriptor:Pr};function Be(e,t,n,o=!1){if(!o&&e[t]===n)return;const r=e[t],i=e.length;n===void 0?(delete e[t],e[q]&&e[q][t]&&r!==void 0&&e[q][t].$()):(e[t]=n,e[q]&&e[q][t]&&r===void 0&&e[q][t].$());let l=je(e,pe),s;if((s=Se(l,t,r))&&s.$(()=>n),Array.isArray(e)&&e.length!==i){for(let c=e.length;c<i;c++)(s=l[c])&&s.$();(s=Se(l,"length",i))&&s.$(e.length)}(s=l[en])&&s.$()}function rn(e,t){const n=Object.keys(t);for(let o=0;o<n.length;o+=1){const r=n[o];Be(e,r,t[r])}}function Cr(e,t){if(typeof t=="function"&&(t=t(e)),t=Pe(t),Array.isArray(t)){if(e===t)return;let n=0,o=t.length;for(;n<o;n++){const r=t[n];e[n]!==r&&Be(e,n,r)}Be(e,"length",o)}else rn(e,t)}function xe(e,t,n=[]){let o,r=e;if(t.length>1){o=t.shift();const l=typeof o,s=Array.isArray(e);if(Array.isArray(o)){for(let c=0;c<o.length;c++)xe(e,[o[c]].concat(t),n);return}else if(s&&l==="function"){for(let c=0;c<e.length;c++)o(e[c],c)&&xe(e,[c].concat(t),n);return}else if(s&&l==="object"){const{from:c=0,to:d=e.length-1,by:h=1}=o;for(let p=c;p<=d;p+=h)xe(e,[p].concat(t),n);return}else if(t.length>1){xe(e[o],t,[o].concat(n));return}r=e[o],n=[o].concat(n)}let i=t[0];typeof i=="function"&&(i=i(r,n),i===r)||o===void 0&&i==null||(i=Pe(i),o===void 0||Fe(r)&&Fe(i)&&!Array.isArray(i)?rn(r,i):Be(e,o,i))}function _r(...[e,t]){const n=Pe(e||{}),o=Array.isArray(n),r=tn(n);function i(...l){jt(()=>{o&&l.length===1?Cr(n,l[0]):xe(n,l)})}return[r,i]}const kr=x.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 5vh;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #282c34;
  color: white;
  top: 0;
  left: 0;  // 좌측 정렬 보정
  right: 0;  // 우측 정렬 보정
  z-index: 1000;
`,Lr=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Or=x.div`
  font-weight: bold;
  font-size: 1.4rem;
`,Er=x(Zt)`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${e=>e.active?"#2ecc71":"#27ae60"};
  text-decoration: none;
  transition: color 0.25s ease;
  
  &:hover {
    color: #2ecc71;
    &::before {
      filter: grayscale(0);
    }
  }

  &::before {
    content: '🏠';
    margin-right: 8px;
    filter: ${e=>e.active?"grayscale(0)":"grayscale(0.7)"};
    transition: filter 0.25s ease;
  }
`,ye=x.div`
  margin-right: 10px;
  color: white;
  text-decoration: none;
  font-size: 1.0rem;
`,be=x(Zt)`
  color: ${e=>e.active?"#1a5d1a":"white"};
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #61dafb;
    background-color: rgba(63, 160, 179, 0.1);
    transform: translateY(-1px);
  }

  &.active {
    background-color: #3fa0b3;
    color: white !important;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
`,Rr=x.div`
  display: flex;
  align-items: center;
`;function Tr(){const e=ft();return le(()=>{console.log("Header 컴포넌트 나타남",e.pathname),se(()=>{console.log("Header cleanUp 함수")})}),a(kr,{get children(){return[a(Lr,{get children(){return[a(Or,{get children(){return a(Er,{href:"/",get active(){return e.pathname==="/"}})}}),a(ye,{get children(){return a(be,{href:"/testbet",get active(){return e.pathname==="/testbet"},children:"바카라"})}}),a(ye,{get children(){return a(be,{href:"/stockcalc",get active(){return e.pathname==="/stockcalc"},children:"주식계산기"})}}),a(ye,{get children(){return a(be,{href:"/test",get active(){return e.pathname==="/test"},children:"테스트"})}})]}}),a(Rr,{get children(){return[a(ye,{style:{"margin-right":"10px"},get children(){return a(be,{href:"/signin",get active(){return e.pathname==="/signin"},children:"로그인"})}}),a(ye,{get children(){return a(be,{href:"/signup",get active(){return e.pathname==="/signup"},children:"회원가입"})}})]}})]}})}const Ir=()=>{window.open("https://github.com/dwerasd","_blank")},Fr=x.div`
  display: flex;
  flex-direction: row;
  min-height: 5vh;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: 0;
  margin-right: 0;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #282c34;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5vh;
`,jr=x.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`,Br=x.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`,Nr=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 1.0rem;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #3fa0b3;
  }
`,Mr=x(Nr)`
  /* MenuLink 컴포넌트를 상속받아 스타일 변경 가능 */
`;function Dr(){return a(Fr,{get children(){return[a(jr,{}),a(Br,{get children(){return a(Mr,{onClick:Ir,children:"Github"})}})]}})}const Ur=x.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;  // 추가
`,Hr=x.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,zr=x.main`
  flex-grow: 1;
  padding: 20px;
  margin-top: 5vh;  // 헤더 높이만큼 여백
  width: 100%;
  min-height: calc(100vh - 10vh);  // 뷰포트 높이 고려
  padding-bottom: 5vh;  // footer 높이만큼 추가
  margin-bottom: 5vh;  // footer 높이만큼 여백
`;function Wr(e){return le(()=>{console.log("Layout 컴포넌트 나타남"),se(()=>{console.log("Layout cleanUp 함수")})}),a(Ur,{get children(){return a(Hr,{get children(){return[a(Tr,{}),a(zr,{get children(){return e.children}}),a(Dr,{})]}})}})}var Vr=E("<h4>메인 페이지");const Gr=x.div`
  position: fixed;
  top: 5.0vh;
  min-height: 91.6vh;
  left: 0;
  width: 100%;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: left;
  font-family: Arial, sans-serif;
`;function Kr(){return le(()=>{console.log("Main 시작"),se(()=>{console.log("Main 소멸")})}),a(Gr,{get children(){return Vr()}})}var qr=E("<h4>테스트 페이지");const Xr=x("div")`
  position: fixed;
  top: 5.0vh;
  min-height: 91.6vh;
  left: 0;
  width: 100%;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: left;
  font-family: Arial, sans-serif;
`,Yr=x("div")`
  font-size: 100%;
  align-items: center;
  color: white;
`;function ue(){return ft(),le(()=>{console.log("Test 시작"),se(()=>{console.log("Test 소멸")})}),a(Xr,{get children(){return a(Yr,{get children(){return qr()}})}})}var Jr=E("<div>에 <!>원을 베팅하세요."),Qr=E("<div>게임 결과:"),Zr=E("<h3>베팅 기록"),eo=E("<ul>"),to=E("<li>");const no=x("div")`
  position: fixed;
  top: 5vh;
  left: 0;
  width: 100%;
  height: 95vh;
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  overflow-y: auto;
`,ro=x("h1")`
  color: #fff;
  margin-bottom: 25px;
  font-size: 1.8rem;
  text-align: left;
`,oo=x("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin-left: 20px;
`,wt=x("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
`,vt=x("label")`
  font-weight: bold;
  color: #eee;
  font-size: 0.95rem;
  width: 100%;
  text-align: left;
  margin-left: 5px;
`,$t=x("div")`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
`,_e=x("input")`
  width: 200px;
  padding: 10px;
  border: 1px solid #444;
  background: #333;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 5px;
`,ke=x("button")`
  padding: 8px 16px;
  background: #444;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    background: #555;
  }
`,Pt=x("div")`
  padding: 12px;
  background: #2a2a2a;
  border-radius: 6px;
  line-height: 1.6;
  margin-top: 8px;
  width: 100%;
  text-align: left;
`,St=x("span")`
  background-color: #ffeb3b;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,At=x("span")`
  background-color: pink;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,io=x("span")`
  display: inline-block;
  width: 80px;
  text-align: center;
  background-color: lightblue;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,lo=x("span")`
  background-color: lightgreen;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,so=x("div")`
  padding: 15px;
  background: #1e1e1e;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 1.1rem;
  text-align: left;
`,ao=x("div")`
  margin-top: 20px;
  padding: 15px;
  background: #1e1e1e;
  border-radius: 8px;
  max-height: 300px;
  overflow-y: auto;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    padding: 5px 0;
    border-bottom: 1px solid #333;
  }
`,co=x("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 5px;
`,uo=()=>{const[e,t]=_(3e6),[n,o]=_(1e3),[r,i]=_([n(),n(),n(),n()]),[l,s]=_("1.95"),[c,d]=_("1.95"),[h,p]=_(0),[u,m]=_(n()*2),[$,b]=_(e()),[w,k]=_(0),[L,N]=_([]),[T,F]=_("뱅커"),W=f=>{const y=parseInt(f.target.value,10);t(y)},te=f=>{const y=parseInt(f.target.value,10);t(e()),o(y),i([y,y,y,y]),m(y*2),b(e()),k(0),N([]),p(0),F("뱅커")},ae=f=>{s(f.target.value)},D=f=>{d(f.target.value)},me=()=>{i([n(),n(),n(),n()]),m(n()*2),b(e()),k(0),N([]),p(0),F("뱅커")},U=()=>{F(T()==="뱅커"?"플레이어":"뱅커")},g=f=>{N(y=>{const P=[...y(),f];return P.length>30?P.slice(1):P})},v=f=>{const y=T(),P=y==="뱅커"?"B":"P";let R=w()-u(),Y=$()-u();const J=P===f?"O":"X";let j=[...r()];if(P===f){const V=parseFloat(P==="P"?c():l());R+=u()*V,Y+=u()*V,j.shift(),j.pop()}else j.push(u());const ne=`[${h()}] : ${P}(${u()}) => ${f}(${u()})${J}(${R})`;F(y==="뱅커"?"플레이어":"뱅커"),i(j),m(j.length===0?n()*2:j.length===1?j[0]:j[0]+j[j.length-1]),k(R),b(Y),p(V=>V+1),g(ne),j.length===0&&(i([n(),n(),n(),n()]),g("----------------------------------------"))};return a(no,{get children(){return[a(ro,{children:"🎲 베팅 게임"}),a(oo,{get children(){return[a(wt,{get children(){return[a(vt,{children:"초기 설정"}),a($t,{get children(){return[a(_e,{type:"number",get value(){return e()},onInput:W,placeholder:"초기 잔고"}),a(_e,{type:"number",get value(){return n()},onInput:te,placeholder:"베팅 기준 금액"})]}})]}}),a(wt,{get children(){return[a(vt,{children:"배당률 설정"}),a($t,{get children(){return[a(_e,{type:"number",step:"0.01",get value(){return l()},onInput:ae,placeholder:"뱅커 배당률"}),a(_e,{type:"number",step:"0.01",get value(){return c()},onInput:D,placeholder:"플레이어 배당률"})]}})]}}),a(Pt,{get children(){return["잔고: ",a(At,{get children(){return $().toLocaleString()}}),"원 수익금: ",a(At,{get children(){return w().toLocaleString()}}),"원 총 베팅 횟수: ",a(St,{get children(){return h()}}),"회",a(ke,{onClick:me,children:"초기화"})]}}),a(so,{get children(){return[(()=>{var f=Jr(),y=f.firstChild,P=y.nextSibling;return P.nextSibling,A(f,a(io,{get children(){return T()}}),y),A(f,a(lo,{get children(){return u().toLocaleString()}}),P),A(f,a(ke,{onClick:U,children:"뒤집기"}),null),f})(),(()=>{var f=Qr();return f.firstChild,f.style.setProperty("margin-top","15px"),A(f,a(ke,{onClick:()=>v("B"),children:"뱅커 승리"}),null),A(f,a(ke,{onClick:()=>v("P"),children:"플레이어 승리"}),null),f})()]}}),a(Pt,{get children(){return["배팅 배열:",a(co,{get children(){return r().map((f,y)=>a(St,{get children(){return f.toLocaleString()}}))}})]}}),a(ao,{get children(){return[Zr(),(()=>{var f=eo();return A(f,()=>L().map((y,P)=>(()=>{var R=to();return A(R,y),R})())),f})()]}})]}})]}})};var fo=E("<div><br>원에 <!>주를 추가 매수 하려면 <!>원이 필요합니다."),Ct=E("<button>추가"),ho=E("<div>총 보유 주식수: <!>주"),go=E("<div>평균 매입가: <!>원"),po=E("<div>총 투자금액: <!>원"),mo=E("<div>예상 매도 금액: <!>원"),yo=E("<div>거래 수수료: <!>원"),bo=E("<div>실수령액: <!>원"),xo=E("<div>예상 수익: <!>원 (<!>%)");const wo=x("div")`
  color: #fff;
  width: 100%;
  height: auto;
`,vo=x("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin-left: 20px;
  margin-bottom: 80px;
`,fe=x("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
`,$o=x("h1")`
  color: #fff;
  margin-bottom: 25px;
  font-size: 1.8rem;
  text-align: left;
`,de=x("label")`
  font-weight: bold;
  color: #eee;
  font-size: 0.95rem;
  width: 100%;
  text-align: left;
  margin-left: 5px;
`,K=x("input")`
  width: 200px;
  padding: 10px;
  border: 1px solid #444;
  background: #333;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 5px;

  &[type="range"] {
    width: 100%;
    height: 8px;
    background: #555;
    border-radius: 5px;
    outline: none;
    margin-left: 0;
    padding: 0;
  }
`,he=x("div")`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
`,We=x("div")`
  padding: 12px;
  background: #2a2a2a;
  border-radius: 6px;
  line-height: 1.6;
  margin-top: 8px;
  width: 100%;
  text-align: left;
`,B=x("span")`
  background-color: #ffeb3b;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,Po=()=>{const[e,t]=_(.23),[n,o]=_(0),[r,i]=_(0),[l,s]=_(0),[c,d]=_(0),[h,p]=_(0),[u,m]=_r([]);let $;const b=S(()=>h()),w=S(()=>h()*l()),k=g=>t(parseFloat(g.target.value)||0),L=g=>o(parseFloat(g.target.value)||0),N=g=>i(parseFloat(g.target.value)||0),T=g=>s(parseFloat(g.target.value)||0),F=g=>p(parseFloat(g.target.value)||0),W=g=>d(parseFloat(g.target.value)||0),te=()=>{u.length,m([...u,{price:0,shares:0}]),setTimeout(()=>{if($){const g=$.getBoundingClientRect(),v=window.pageYOffset||document.documentElement.scrollTop;window.scrollTo({top:g.top+v-100,behavior:"smooth"})}},100)},ae=(g,v,f)=>{const y=parseFloat(f.target.value)||0;m(g,v,y)},D=()=>{const v=[{price:n(),shares:r()},...u];let f=0,y=0;v.forEach(R=>{f+=R.shares,y+=R.price*R.shares});const P=f>0?y/f:0;return{totalShares:f,totalInvestment:y,averagePrice:P}},me=()=>{const g=D(),v=g.totalShares+b(),f=g.totalInvestment+w()+e();return{adjustedAveragePrice:(v>0?f/v:0)||0}},U=()=>{const g=D(),v=g.totalShares,f=v*c(),y=f*(e()/100),P=f-y,R=P-g.totalInvestment,Y=R/g.totalInvestment*100;return{totalShares:v,targetAmount:f,commissionFee:y,netAmount:P,profit:R,profitRate:Y}};return a(wo,{get children(){return[a($o,{children:"📈 주식 평단가 계산기"}),a(vo,{get children(){return[a(fe,{get children(){return[a(de,{children:"거래 수수료 (%)"}),a(he,{get children(){return a(K,{type:"number",get value(){return e()},onInput:k,step:"0.01",placeholder:"0.23%"})}})]}}),a(fe,{get children(){return[a(de,{children:"현재 보유 정보(평단가, 주식수)"}),a(he,{get children(){return[a(K,{type:"number",get value(){return n()},onInput:L,placeholder:"평균 매입가"}),a(K,{type:"number",get value(){return r()},onInput:N,placeholder:"보유 주식 수"}),S(()=>S(()=>u.length===0)()&&(()=>{var g=Ct();return g.$$click=te,g.style.setProperty("padding","10px 15px"),g.style.setProperty("background","#444"),g.style.setProperty("color","white"),g.style.setProperty("border","none"),g.style.setProperty("borderRadius","5px"),g.style.setProperty("cursor","pointer"),g})())]}})]}}),S(()=>u.map((g,v)=>a(fe,{key:`holding-${v}`,ref:f=>{v===u.length-1&&($=f)},get children(){return[a(de,{get children(){return["추가 보유 정보 #",v+1]}}),a(he,{get children(){return[a(K,{type:"number",get value(){return g.price},onInput:f=>ae(v,"price",f),placeholder:"평균 매입가",id:`price-${v}`}),a(K,{type:"number",get value(){return g.shares},onInput:f=>ae(v,"shares",f),placeholder:"보유 주식 수",id:`shares-${v}`}),S(()=>S(()=>v===u.length-1)()&&(()=>{var f=Ct();return f.$$click=te,f.style.setProperty("padding","10px 15px"),f.style.setProperty("background","#444"),f.style.setProperty("color","white"),f.style.setProperty("border","none"),f.style.setProperty("borderRadius","5px"),f.style.setProperty("cursor","pointer"),f})())]}})]}}))),S(()=>S(()=>u.length>0)()&&a(We,{get children(){return[(()=>{var g=ho(),v=g.firstChild,f=v.nextSibling;return f.nextSibling,A(g,a(B,{get children(){return D().totalShares}}),f),g})(),(()=>{var g=go(),v=g.firstChild,f=v.nextSibling;return f.nextSibling,A(g,a(B,{get children(){return D().averagePrice.toFixed(0)}}),f),g})(),(()=>{var g=po(),v=g.firstChild,f=v.nextSibling;return f.nextSibling,A(g,a(B,{get children(){return D().totalInvestment.toFixed(0)}}),f),g})()]}})),a(fe,{get children(){return[a(de,{children:"목표가"}),a(he,{get children(){return a(K,{type:"number",get value(){return c()},onInput:W,placeholder:"목표 매도가"})}}),S(()=>S(()=>c()>0&&D().totalShares>0)()&&a(We,{get children(){return[(()=>{var g=mo(),v=g.firstChild,f=v.nextSibling;return f.nextSibling,A(g,a(B,{get children(){return U().targetAmount.toFixed(0)}}),f),g})(),(()=>{var g=yo(),v=g.firstChild,f=v.nextSibling;return f.nextSibling,A(g,a(B,{get children(){return U().commissionFee.toFixed(0)}}),f),g})(),(()=>{var g=bo(),v=g.firstChild,f=v.nextSibling;return f.nextSibling,A(g,a(B,{get children(){return U().netAmount.toFixed(0)}}),f),g})(),(()=>{var g=xo(),v=g.firstChild,f=v.nextSibling,y=f.nextSibling,P=y.nextSibling;return P.nextSibling,A(g,a(B,{get style(){return{backgroundColor:U().profit>0?"#4CAF50":"#f44336",color:"#000",fontWeight:"600"}},get children(){return U().profit.toFixed(0)}}),f),A(g,a(B,{get style(){return{backgroundColor:U().profit>0?"#4CAF50":"#f44336",color:"#000",fontWeight:"600"}},get children(){return U().profitRate.toFixed(2)}}),P),g})()]}}))]}}),a(fe,{get children(){return[a(de,{children:"현재 주가"}),a(he,{get children(){return a(K,{type:"number",get value(){return l()},onInput:T,placeholder:"현재 주가"})}})]}}),a(fe,{get children(){return[a(de,{children:"추가 매수 설정"}),a(he,{get children(){return[a(K,{type:"number",get value(){return h().toFixed(0)},onInput:F,placeholder:"매수할 주식 수"}),a(K,{type:"range",min:"0",max:"10000",get value(){return h()},onInput:F})]}}),a(We,{get children(){return[a(B,{get children(){return h()}}),"주 추가 매수 시 → 총 보유 주식수: ",a(B,{get children(){return D().totalShares+Number(h())}}),"주, 조정 평단가: ",a(B,{get children(){return me().adjustedAveragePrice.toFixed(0)}}),"원",(()=>{var g=fo(),v=g.firstChild,f=v.nextSibling,y=f.nextSibling,P=y.nextSibling,R=P.nextSibling;return R.nextSibling,A(g,a(B,{get children(){return l()}}),f),A(g,a(B,{get children(){return h()}}),y),A(g,a(B,{get children(){return w().toFixed(0)}}),R),g})()]}})]}})]}})]}})};lt(["click"]);var So=E("<div><div>"),Ao=E("<p>저항: "),Co=E("<p>지지: "),_o=E("<p>위험: "),ko=E("<div><div></div><div>"),Lo=E("<p>고가: "),Oo=E("<p>평가: "),Eo=E("<p>저가: ");const Ro=x("div")`
  position: fixed;
  top: 5vh;
  left: 0;
  width: 100%;
  height: 95vh;
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  overflow-y: auto;
`,_t=x("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin-left: 20px;
`,kt=x("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
`,Lt=x("h1")`
  color: #fff;
  margin-bottom: 25px;
  font-size: 1.8rem;
  text-align: left;
`,Ve=x("label")`
  font-weight: bold;
  color: #eee;
  font-size: 0.95rem;
  width: 100px;
  text-align: left;
  margin-left: 5px;
`,Ge=x("input")`
  width: ${e=>e.width||"200px"};
  padding: 10px;
  border: 1px solid #444;
  background: #333;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 5px;
`,Ot=x("div")`
  padding: 15px;
  background: #1e1e1e;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 1.1rem;
  text-align: left;
  
  p {
    margin: 10px 0;
  }
`,we=x("span")`
  background-color: #ffeb3b;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,Et=x(we)`
  background-color: #ff6b6b;
`;function To(){const[e,t]=_(""),[n,o]=_({val1:0,val2:0,val3:0}),[r,i]=_(""),[l,s]=_(""),[c,d]=_({val1:0,val2:0,val3:0}),h=u=>u<2e3?1:u<5e3?5:u<2e4?10:u<5e4?50:u<2e5?100:u<5e5?500:1e3,p=u=>{const m=h(u);return Math.floor(u/m)*m};return le(()=>{const u=parseFloat(e());if(!isNaN(u)){const m=$=>p(u*$);o({val1:m(.77),val2:m(.693),val3:m(.65835)})}}),le(()=>{const u=parseFloat(r()),m=parseFloat(l());if(!isNaN(u)&&!isNaN(m)){const $=(u+m)/2,b=w=>p(w);d({val1:b(($+u)/2),val2:b($),val3:b(($+m)/2)})}}),a(Ro,{get children(){return[a(Lt,{children:"💰 가격 전환 계산기"}),a(_t,{get children(){return a(kt,{get children(){return[(()=>{var u=So(),m=u.firstChild;return u.style.setProperty("display","flex"),u.style.setProperty("gap","20px"),A(m,a(Ve,{children:"기준가:"}),null),A(m,a(Ge,{type:"number",get value(){return e()},onInput:$=>t($.target.value),placeholder:"기준가 입력"}),null),u})(),a(Ot,{get children(){return[(()=>{var u=Ao();return u.firstChild,A(u,a(we,{get children(){return n().val1}}),null),u})(),(()=>{var u=Co();return u.firstChild,A(u,a(we,{get children(){return n().val2}}),null),u})(),(()=>{var u=_o();return u.firstChild,A(u,a(Et,{get children(){return n().val3}}),null),u})()]}})]}})}}),a(Lt,{children:"📊 고가-저가 분석기"}),a(_t,{get children(){return a(kt,{get children(){return[(()=>{var u=ko(),m=u.firstChild,$=m.nextSibling;return u.style.setProperty("display","flex"),u.style.setProperty("gap","20px"),A(m,a(Ve,{children:"고가:"}),null),A(m,a(Ge,{type:"number",get value(){return r()},onInput:b=>i(b.target.value),placeholder:"고가 입력"}),null),A($,a(Ve,{children:"저가:"}),null),A($,a(Ge,{type:"number",get value(){return l()},onInput:b=>s(b.target.value),placeholder:"저가 입력"}),null),u})(),a(Ot,{get children(){return[(()=>{var u=Lo();return u.firstChild,A(u,a(we,{get children(){return c().val1}}),null),u})(),(()=>{var u=Oo();return u.firstChild,A(u,a(we,{get children(){return c().val2}}),null),u})(),(()=>{var u=Eo();return u.firstChild,A(u,a(Et,{get children(){return c().val3}}),null),u})()]}})]}})}}),a(Po,{})]}})}function Io(){return le(()=>{console.log("App 컴포넌트 나타남"),se(()=>{console.log("App cleanUp 함수")})}),a(vr,{get children(){return a(z,{path:"/",component:Wr,get children(){return[a(z,{path:"/",component:Kr}),a(z,{path:"/trends",component:ue}),a(z,{path:"/custom",component:ue}),a(z,{path:"/signin",component:ue}),a(z,{path:"/signup",component:ue}),a(z,{path:"/test",component:ue}),a(z,{path:"/testbet",component:uo}),a(z,{path:"/stockcalc",component:To}),a(z,{path:"/*",component:ue})]}})}})}const Fo=x.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    height: 100vh;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: #a4a7ac;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
    width: 100vw;  // 뷰포트 전체 너비
    margin: 0;
    padding: 0;
  }
`;document.getElementById("root");An(()=>[a(Fo,{}),a(Io,{})],document.getElementById("root"));
