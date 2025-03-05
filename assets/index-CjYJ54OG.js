(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const on=(e,t)=>e===t,z=Symbol("solid-proxy"),Rt=typeof Proxy=="function",dt=Symbol("solid-track"),Oe={equals:on};let Tt=Ut;const ee=1,Ee=2,It={owned:null,cleanups:null,context:null,owner:null};var P=null;let De=null,sn=null,_=null,I=null,X=null,Fe=0;function jt(e,t){const n=_,o=P,r=e.length===0,i=t===void 0?o:t,s=r?It:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=r?e:()=>e(()=>U(()=>ve(s)));P=s,_=null;try{return te(l,!0)}finally{_=n,P=o}}function C(e,t){t=t?Object.assign({},Oe,t):Oe;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=r=>(typeof r=="function"&&(r=r(n.value)),Dt(n,r));return[Mt.bind(n),o]}function Z(e,t,n){const o=nt(e,t,!1,ee);Ae(o)}function se(e,t,n){Tt=un;const o=nt(e,t,!1,ee);o.user=!0,X?X.push(o):Ae(o)}function A(e,t,n){n=n?Object.assign({},Oe,n):Oe;const o=nt(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,Ae(o),Mt.bind(o)}function Bt(e){return te(e,!1)}function U(e){if(_===null)return e();const t=_;_=null;try{return e()}finally{_=t}}function Ze(e,t,n){const o=Array.isArray(e);let r,i=n&&n.defer;return s=>{let l;if(o){l=Array(e.length);for(let f=0;f<e.length;f++)l[f]=e[f]()}else l=e();if(i)return i=!1,s;const a=U(()=>t(l,r,s));return r=l,a}}function le(e){return P===null||(P.cleanups===null?P.cleanups=[e]:P.cleanups.push(e)),e}function Ke(){return _}function Nt(){return P}function Ft(e,t){const n=P,o=_;P=e,_=null;try{return te(t,!0)}catch(r){rt(r)}finally{P=n,_=o}}function ln(e){const t=_,n=P;return Promise.resolve().then(()=>{_=t,P=n;let o;return te(e,!1),_=P=null,o?o.done:void 0})}const[Ro,To]=C(!1);function et(e,t){const n=Symbol("context");return{id:n,Provider:dn(n),defaultValue:e}}function Me(e){let t;return P&&P.context&&(t=P.context[e.id])!==void 0?t:e.defaultValue}function tt(e){const t=A(e),n=A(()=>We(t()));return n.toArray=()=>{const o=n();return Array.isArray(o)?o:o!=null?[o]:[]},n}function Mt(){if(this.sources&&this.state)if(this.state===ee)Ae(this);else{const e=I;I=null,te(()=>Te(this),!1),I=e}if(_){const e=this.observers?this.observers.length:0;_.sources?(_.sources.push(this),_.sourceSlots.push(e)):(_.sources=[this],_.sourceSlots=[e]),this.observers?(this.observers.push(_),this.observerSlots.push(_.sources.length-1)):(this.observers=[_],this.observerSlots=[_.sources.length-1])}return this.value}function Dt(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&te(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],s=De&&De.running;s&&De.disposed.has(i),(s?!i.tState:!i.state)&&(i.pure?I.push(i):X.push(i),i.observers&&Ht(i)),s||(i.state=ee)}if(I.length>1e6)throw I=[],new Error},!1)),t}function Ae(e){if(!e.fn)return;ve(e);const t=Fe;an(e,e.value,t)}function an(e,t,n){let o;const r=P,i=_;_=P=e;try{o=e.fn(t)}catch(s){return e.pure&&(e.state=ee,e.owned&&e.owned.forEach(ve),e.owned=null),e.updatedAt=n+1,rt(s)}finally{_=i,P=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Dt(e,o):e.value=o,e.updatedAt=n)}function nt(e,t,n,o=ee,r){const i={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:P,context:P?P.context:null,pure:n};return P===null||P!==It&&(P.owned?P.owned.push(i):P.owned=[i]),i}function Re(e){if(e.state===0)return;if(e.state===Ee)return Te(e);if(e.suspense&&U(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Fe);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===ee)Ae(e);else if(e.state===Ee){const o=I;I=null,te(()=>Te(e,t[0]),!1),I=o}}function te(e,t){if(I)return e();let n=!1;t||(I=[]),X?n=!0:X=[],Fe++;try{const o=e();return cn(n),o}catch(o){n||(X=null),I=null,rt(o)}}function cn(e){if(I&&(Ut(I),I=null),e)return;const t=X;X=null,t.length&&te(()=>Tt(t),!1)}function Ut(e){for(let t=0;t<e.length;t++)Re(e[t])}function un(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:Re(o)}for(t=0;t<n;t++)Re(e[t])}function Te(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const r=o.state;r===ee?o!==t&&(!o.updatedAt||o.updatedAt<Fe)&&Re(o):r===Ee&&Te(o,t)}}}function Ht(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Ee,n.pure?I.push(n):X.push(n),n.observers&&Ht(n))}}function ve(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),o=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),s=n.observerSlots.pop();o<r.length&&(i.sourceSlots[s]=o,r[o]=i,n.observerSlots[o]=s)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)ve(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ve(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function fn(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function rt(e,t=P){throw fn(e)}function We(e){if(typeof e=="function"&&!e.length)return We(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const o=We(e[n]);Array.isArray(o)?t.push.apply(t,o):t.push(o)}return t}return e}function dn(e,t){return function(o){let r;return Z(()=>r=U(()=>(P.context={...P.context,[e]:o.value},tt(()=>o.children))),void 0),r}}function c(e,t){return U(()=>e(t||{}))}function Ce(){return!0}const qe={get(e,t,n){return t===z?n:e.get(t)},has(e,t){return t===z?!0:e.has(t)},set:Ce,deleteProperty:Ce,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Ce,deleteProperty:Ce}},ownKeys(e){return e.keys()}};function Ue(e){return(e=typeof e=="function"?e():e)?e:{}}function hn(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function de(...e){let t=!1;for(let s=0;s<e.length;s++){const l=e[s];t=t||!!l&&z in l,e[s]=typeof l=="function"?(t=!0,A(l)):l}if(Rt&&t)return new Proxy({get(s){for(let l=e.length-1;l>=0;l--){const a=Ue(e[l])[s];if(a!==void 0)return a}},has(s){for(let l=e.length-1;l>=0;l--)if(s in Ue(e[l]))return!0;return!1},keys(){const s=[];for(let l=0;l<e.length;l++)s.push(...Object.keys(Ue(e[l])));return[...new Set(s)]}},qe);const n={},o=Object.create(null);for(let s=e.length-1;s>=0;s--){const l=e[s];if(!l)continue;const a=Object.getOwnPropertyNames(l);for(let f=a.length-1;f>=0;f--){const d=a[f];if(d==="__proto__"||d==="constructor")continue;const h=Object.getOwnPropertyDescriptor(l,d);if(!o[d])o[d]=h.get?{enumerable:!0,configurable:!0,get:hn.bind(n[d]=[h.get.bind(l)])}:h.value!==void 0?h:void 0;else{const u=n[d];u&&(h.get?u.push(h.get.bind(l)):h.value!==void 0&&u.push(()=>h.value))}}}const r={},i=Object.keys(o);for(let s=i.length-1;s>=0;s--){const l=i[s],a=o[l];a&&a.get?Object.defineProperty(r,l,a):r[l]=a?a.value:void 0}return r}function ot(e,...t){if(Rt&&z in e){const r=new Set(t.length>1?t.flat():t[0]),i=t.map(s=>new Proxy({get(l){return s.includes(l)?e[l]:void 0},has(l){return s.includes(l)&&l in e},keys(){return s.filter(l=>l in e)}},qe));return i.push(new Proxy({get(s){return r.has(s)?void 0:e[s]},has(s){return r.has(s)?!1:s in e},keys(){return Object.keys(e).filter(s=>!r.has(s))}},qe)),i}const n={},o=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,r),s=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let l=!1,a=0;for(const f of t)f.includes(r)&&(l=!0,s?o[a][r]=i.value:Object.defineProperty(o[a],r,i)),++a;l||(s?n[r]=i.value:Object.defineProperty(n,r,i))}return[...o,n]}const gn=e=>`Stale read from <${e}>.`;function zt(e){const t=e.keyed,n=A(()=>e.when,void 0,{equals:(o,r)=>t?o===r:!o==!r});return A(()=>{const o=n();if(o){const r=e.children;return typeof r=="function"&&r.length>0?U(()=>r(t?o:()=>{if(!U(n))throw gn("Show");return e.when})):r}return e.fallback},void 0,void 0)}const pn=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],mn=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...pn]),yn=new Set(["innerHTML","textContent","innerText","children"]),bn=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),wn=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function xn(e,t){const n=wn[e];return typeof n=="object"?n[t]?n.$:void 0:n}const vn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),$n=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Pn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Sn(e,t,n){let o=n.length,r=t.length,i=o,s=0,l=0,a=t[r-1].nextSibling,f=null;for(;s<r||l<i;){if(t[s]===n[l]){s++,l++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===s){const d=i<o?l?n[l-1].nextSibling:n[i-l]:a;for(;l<i;)e.insertBefore(n[l++],d)}else if(i===l)for(;s<r;)(!f||!f.has(t[s]))&&t[s].remove(),s++;else if(t[s]===n[i-1]&&n[l]===t[r-1]){const d=t[--r].nextSibling;e.insertBefore(n[l++],t[s++].nextSibling),e.insertBefore(n[--i],d),t[r]=n[i]}else{if(!f){f=new Map;let h=l;for(;h<i;)f.set(n[h],h++)}const d=f.get(t[s]);if(d!=null)if(l<d&&d<i){let h=s,u=1,g;for(;++h<r&&h<i&&!((g=f.get(t[h]))==null||g!==d+u);)u++;if(u>d-l){const $=t[s];for(;l<d;)e.insertBefore(n[l++],$)}else e.replaceChild(n[l++],t[s++])}else s++;else t[s++].remove()}}}const ht="_$DX_DELEGATE";function An(e,t,n,o={}){let r;return jt(i=>{r=i,t===document?e():E(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{r(),t.textContent=""}}function R(e,t,n){let o;const r=()=>{const s=document.createElement("template");return s.innerHTML=e,n?s.content.firstChild.firstChild:s.content.firstChild},i=t?()=>U(()=>document.importNode(o||(o=r()),!0)):()=>(o||(o=r())).cloneNode(!0);return i.cloneNode=i,i}function it(e,t=window.document){const n=t[ht]||(t[ht]=new Set);for(let o=0,r=e.length;o<r;o++){const i=e[o];n.has(i)||(n.add(i),t.addEventListener(i,jn))}}function Xe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Cn(e,t,n,o){o==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,o)}function kn(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)}function Ln(e,t){t==null?e.removeAttribute("class"):e.className=t}function _n(e,t,n,o){if(o)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n,typeof n!="function"&&n)}function On(e,t,n={}){const o=Object.keys(t||{}),r=Object.keys(n);let i,s;for(i=0,s=r.length;i<s;i++){const l=r[i];!l||l==="undefined"||t[l]||(gt(e,l,!1),delete n[l])}for(i=0,s=o.length;i<s;i++){const l=o[i],a=!!t[l];!l||l==="undefined"||n[l]===a||!a||(gt(e,l,!0),n[l]=a)}return n}function En(e,t,n){if(!t)return n?Xe(e,"style"):t;const o=e.style;if(typeof t=="string")return o.cssText=t;typeof n=="string"&&(o.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&o.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(o.setProperty(i,r),n[i]=r);return n}function st(e,t={},n,o){const r={};return o||Z(()=>r.children=$e(e,t.children,r.children)),Z(()=>typeof t.ref=="function"&&Rn(t.ref,e)),Z(()=>Tn(e,t,n,!0,r,!0)),r}function Rn(e,t,n){return U(()=>e(t,n))}function E(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return $e(e,t,o,n);Z(r=>$e(e,t(),r,n),o)}function Tn(e,t,n,o,r={},i=!1){t||(t={});for(const s in r)if(!(s in t)){if(s==="children")continue;r[s]=pt(e,s,null,r[s],n,i,t)}for(const s in t){if(s==="children")continue;const l=t[s];r[s]=pt(e,s,l,r[s],n,i,t)}}function In(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function gt(e,t,n){const o=t.trim().split(/\s+/);for(let r=0,i=o.length;r<i;r++)e.classList.toggle(o[r],n)}function pt(e,t,n,o,r,i,s){let l,a,f,d,h;if(t==="style")return En(e,n,o);if(t==="classList")return On(e,n,o);if(n===o)return o;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);o&&e.removeEventListener(u,o,typeof o!="function"&&o),n&&e.addEventListener(u,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);o&&e.removeEventListener(u,o,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),g=vn.has(u);if(!g&&o){const $=Array.isArray(o)?o[0]:o;e.removeEventListener(u,$)}(g||n)&&(_n(e,u,n,g),g&&it([u]))}else if(t.slice(0,5)==="attr:")Xe(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")kn(e,t.slice(5),n);else if((h=t.slice(0,5)==="prop:")||(f=yn.has(t))||!r&&((d=xn(t,e.tagName))||(a=mn.has(t)))||(l=e.nodeName.includes("-")||"is"in s))h&&(t=t.slice(5),a=!0),t==="class"||t==="className"?Ln(e,n):l&&!a&&!f?e[In(t)]=n:e[d||t]=n;else{const u=r&&t.indexOf(":")>-1&&Pn[t.split(":")[0]];u?Cn(e,u,t,n):Xe(e,bn[t]||t,n)}return n}function jn(e){let t=e.target;const n=`$$${e.type}`,o=e.target,r=e.currentTarget,i=a=>Object.defineProperty(e,"target",{configurable:!0,value:a}),s=()=>{const a=t[n];if(a&&!t.disabled){const f=t[`${n}Data`];if(f!==void 0?a.call(t,f,e):a.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},l=()=>{for(;s()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const a=e.composedPath();i(a[0]);for(let f=0;f<a.length-2&&(t=a[f],!!s());f++){if(t._$host){t=t._$host,l();break}if(t.parentNode===r)break}}else l();i(o)}function $e(e,t,n,o,r){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,s=o!==void 0;if(e=s&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(t=t.toString(),t===n))return n;if(s){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=ue(e,n,o,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean")n=ue(e,n,o);else{if(i==="function")return Z(()=>{let l=t();for(;typeof l=="function";)l=l();n=$e(e,l,n,o)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(Ye(l,t,n,r))return Z(()=>n=$e(e,l,n,o,!0)),()=>n;if(l.length===0){if(n=ue(e,n,o),s)return n}else a?n.length===0?mt(e,l,o):Sn(e,n,l):(n&&ue(e),mt(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(s)return n=ue(e,n,o,t);ue(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ye(e,t,n,o){let r=!1;for(let i=0,s=t.length;i<s;i++){let l=t[i],a=n&&n[e.length],f;if(!(l==null||l===!0||l===!1))if((f=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))r=Ye(e,l,a)||r;else if(f==="function")if(o){for(;typeof l=="function";)l=l();r=Ye(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||r}else e.push(l),r=!0;else{const d=String(l);a&&a.nodeType===3&&a.data===d?e.push(a):e.push(document.createTextNode(d))}}return r}function mt(e,t,n=null){for(let o=0,r=t.length;o<r;o++)e.insertBefore(t[o],n)}function ue(e,t,n,o){if(n===void 0)return e.textContent="";const r=o||document.createTextNode("");if(t.length){let i=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(r!==l){const a=l.parentNode===e;!i&&!s?a?e.replaceChild(r,l):e.insertBefore(r,n):a&&l.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}const Bn=!1,Nn="http://www.w3.org/2000/svg";function Fn(e,t=!1){return t?document.createElementNS(Nn,e):document.createElement(e)}function Mn(e){const[t,n]=ot(e,["component"]),o=A(()=>t.component);return A(()=>{const r=o();switch(typeof r){case"function":return U(()=>r(n));case"string":const i=$n.has(r),s=Fn(r,i);return st(s,n,i),s}})}let Dn={data:""},Un=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Dn,Hn=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,zn=/\/\*[^]*?\*\/|  +/g,yt=/\n+/g,re=(e,t)=>{let n="",o="",r="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+s+";":o+=i[1]=="f"?re(s,i):i+"{"+re(s,i[1]=="k"?"":t)+"}":typeof s=="object"?o+=re(s,t?t.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,l):l?l+" "+a:a)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=re.p?re.p(i,s):i+":"+s+";")}return n+(t&&r?t+"{"+r+"}":r)+o},K={},Vt=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Vt(e[n]);return t}return e},Vn=(e,t,n,o,r)=>{let i=Vt(e),s=K[i]||(K[i]=(a=>{let f=0,d=11;for(;f<a.length;)d=101*d+a.charCodeAt(f++)>>>0;return"go"+d})(i));if(!K[s]){let a=i!==e?e:(f=>{let d,h,u=[{}];for(;d=Hn.exec(f.replace(zn,""));)d[4]?u.shift():d[3]?(h=d[3].replace(yt," ").trim(),u.unshift(u[0][h]=u[0][h]||{})):u[0][d[1]]=d[2].replace(yt," ").trim();return u[0]})(e);K[s]=re(r?{["@keyframes "+s]:a}:a,n?"":"."+s)}let l=n&&K.g?K.g:null;return n&&(K.g=K[s]),((a,f,d,h)=>{h?f.data=f.data.replace(h,a):f.data.indexOf(a)===-1&&(f.data=d?a+f.data:f.data+a)})(K[s],t,o,l),s},Gn=(e,t,n)=>e.reduce((o,r,i)=>{let s=t[i];if(s&&s.call){let l=s(n),a=l&&l.props&&l.props.className||/^go/.test(l)&&l;s=a?"."+a:l&&typeof l=="object"?l.props?"":re(l,""):l===!1?"":l}return o+r+(s??"")},"");function Ie(e){let t=this||{},n=e.call?e(t.p):e;return Vn(n.unshift?n.raw?Gn(n,[].slice.call(arguments,1),t.p):n.reduce((o,r)=>Object.assign(o,r&&r.call?r(t.p):r),{}):n,Un(t.target),t.g,t.o,t.k)}Ie.bind({g:1});Ie.bind({k:1});const Kn=et();function Wn(e){let t=this||{};return(...n)=>{const o=r=>{const i=Me(Kn),s=de(r,{theme:i}),l=de(s,{get class(){const g=s.class,$="class"in s&&/^go[0-9]+/.test(g);let m=Ie.apply({target:t.target,o:$,p:s,g:t.g},n);return[g,m].filter(Boolean).join(" ")}}),[a,f]=ot(l,["as","theme"]),d=f,h=a.as||e;let u;return typeof h=="function"?u=h(d):t.g==1?(u=document.createElement(h),st(u,d)):u=Mn(de({component:h},d)),u};return o.class=r=>U(()=>Ie.apply({target:t.target,p:r,g:t.g},n)),o}}const y=new Proxy(Wn,{get(e,t){return e(t)}});function Gt(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function o(r,i){if(n)return!(n=!1);const s={to:r,options:i,defaultPrevented:!1,preventDefault:()=>s.defaultPrevented=!0};for(const l of e)l.listener({...s,from:l.location,retry:a=>{a&&(n=!0),l.navigate(r,{...i,resolve:!1})}});return!s.defaultPrevented}return{subscribe:t,confirm:o}}let Je;function lt(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Je=window.history.state._depth}lt();function qn(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Xn(e,t){let n=!1;return()=>{const o=Je;lt();const r=o==null?null:Je-o;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const Yn=/^(?:[a-z0-9]+:)?\/\//i,Jn=/^\/+|(\/)\/+$/g,Kt="http://sr";function ie(e,t=!1){const n=e.replace(Jn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function _e(e,t,n){if(Yn.test(t))return;const o=ie(e),r=n&&ie(n);let i="";return!r||t.startsWith("/")?i=o:r.toLowerCase().indexOf(o.toLowerCase())!==0?i=o+r:i=r,(i||"/")+ie(t,!i)}function Qn(e,t){if(e==null)throw new Error(t);return e}function Zn(e,t){return ie(e).replace(/\/*(\*.*)?$/g,"")+ie(t)}function Wt(e){const t={};return e.searchParams.forEach((n,o)=>{o in t?Array.isArray(t[o])?t[o].push(n):t[o]=[t[o],n]:t[o]=n}),t}function er(e,t,n){const[o,r]=e.split("/*",2),i=o.split("/").filter(Boolean),s=i.length;return l=>{const a=l.split("/").filter(Boolean),f=a.length-s;if(f<0||f>0&&r===void 0&&!t)return null;const d={path:s?"":"/",params:{}},h=u=>n===void 0?void 0:n[u];for(let u=0;u<s;u++){const g=i[u],$=g[0]===":",m=$?a[u]:a[u].toLowerCase(),x=$?g.slice(1):g.toLowerCase();if($&&He(m,h(x)))d.params[x]=m;else if($||!He(m,x))return null;d.path+=`/${m}`}if(r){const u=f?a.slice(-f).join("/"):"";if(He(u,h(r)))d.params[r]=u;else return null}return d}}function He(e,t){const n=o=>o===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function tr(e){const[t,n]=e.pattern.split("/*",2),o=t.split("/").filter(Boolean);return o.reduce((r,i)=>r+(i.startsWith(":")?2:3),o.length-(n===void 0?0:1))}function qt(e){const t=new Map,n=Nt();return new Proxy({},{get(o,r){return t.has(r)||Ft(n,()=>t.set(r,A(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Xt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),o=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(o);)r.push(n+=t[1]),o=o.slice(t[0].length);return Xt(o).reduce((i,s)=>[...i,...r.map(l=>l+s)],[])}const nr=100,Yt=et(),at=et(),ct=()=>Qn(Me(Yt),"<A> and 'use' router primitives can be only used inside a Route."),rr=()=>Me(at)||ct().base,or=e=>{const t=rr();return A(()=>t.resolvePath(e()))},ir=e=>{const t=ct();return A(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},ut=()=>ct().location;function sr(e,t=""){const{component:n,preload:o,load:r,children:i,info:s}=e,l=!i||Array.isArray(i)&&!i.length,a={key:e,component:n,preload:o||r,info:s};return Jt(e.path).reduce((f,d)=>{for(const h of Xt(d)){const u=Zn(t,h);let g=l?u:u.split("/*",1)[0];g=g.split("/").map($=>$.startsWith(":")||$.startsWith("*")?$:encodeURIComponent($)).join("/"),f.push({...a,originalPath:d,pattern:g,matcher:er(g,!l,e.matchFilters)})}return f},[])}function lr(e,t=0){return{routes:e,score:tr(e[e.length-1])*1e4-t,matcher(n){const o=[];for(let r=e.length-1;r>=0;r--){const i=e[r],s=i.matcher(n);if(!s)return null;o.unshift({...s,route:i})}return o}}}function Jt(e){return Array.isArray(e)?e:[e]}function Qt(e,t="",n=[],o=[]){const r=Jt(e);for(let i=0,s=r.length;i<s;i++){const l=r[i];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const a=sr(l,t);for(const f of a){n.push(f);const d=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!d)Qt(l.children,f.pattern,n,o);else{const h=lr([...n],o.length);o.push(h)}n.pop()}}}return n.length?o:o.sort((i,s)=>s.score-i.score)}function ze(e,t){for(let n=0,o=e.length;n<o;n++){const r=e[n].matcher(t);if(r)return r}return[]}function ar(e,t,n){const o=new URL(Kt),r=A(d=>{const h=e();try{return new URL(h,o)}catch{return console.error(`Invalid path ${h}`),d}},o,{equals:(d,h)=>d.href===h.href}),i=A(()=>r().pathname),s=A(()=>r().search,!0),l=A(()=>r().hash),a=()=>"",f=Ze(s,()=>Wt(r()));return{get pathname(){return i()},get search(){return s()},get hash(){return l()},get state(){return t()},get key(){return a()},query:n?n(f):qt(f)}}let oe;function cr(){return oe}function ur(e,t,n,o={}){const{signal:[r,i],utils:s={}}=e,l=s.parsePath||(p=>p),a=s.renderPath||(p=>p),f=s.beforeLeave||Gt(),d=_e("",o.base||"");if(d===void 0)throw new Error(`${d} is not a valid base path`);d&&!r().value&&i({value:d,replace:!0,scroll:!1});const[h,u]=C(!1);let g;const $=(p,w)=>{w.value===m()&&w.state===k()||(g===void 0&&u(!0),oe=p,g=w,ln(()=>{g===w&&(x(g.value),L(g.state),j[1](O=>O.filter(D=>D.pending)))}).finally(()=>{g===w&&Bt(()=>{oe=void 0,p==="navigate"&&Y(g),u(!1),g=void 0})}))},[m,x]=C(r().value),[k,L]=C(r().state),N=ar(m,k,s.queryWrapper),T=[],j=C([]),F=A(()=>typeof o.transformUrl=="function"?ze(t(),o.transformUrl(N.pathname)):ze(t(),N.pathname)),ae=()=>{const p=F(),w={};for(let O=0;O<p.length;O++)Object.assign(w,p[O].params);return w},b=s.paramsWrapper?s.paramsWrapper(ae,t):qt(ae),S={pattern:d,path:()=>d,outlet:()=>null,resolvePath(p){return _e(d,p)}};return Z(Ze(r,p=>$("native",p),{defer:!0})),{base:S,location:N,params:b,isRouting:h,renderPath:a,parsePath:l,navigatorFactory:M,matches:F,beforeLeave:f,preloadRoute:H,singleFlight:o.singleFlight===void 0?!0:o.singleFlight,submissions:j};function v(p,w,O){U(()=>{if(typeof w=="number"){w&&(s.go?s.go(w):console.warn("Router integration does not support relative routing"));return}const D=!w||w[0]==="?",{replace:ce,resolve:J,scroll:B,state:ne}={replace:!1,resolve:!D,scroll:!0,...O},G=J?p.resolvePath(w):_e(D&&N.pathname||"",w);if(G===void 0)throw new Error(`Path '${w}' is not a routable path`);if(T.length>=nr)throw new Error("Too many redirects");const ft=m();(G!==ft||ne!==k())&&(Bn||f.confirm(G,O)&&(T.push({value:ft,replace:ce,scroll:B,state:k()}),$("navigate",{value:G,state:ne})))})}function M(p){return p=p||Me(at)||S,(w,O)=>v(p,w,O)}function Y(p){const w=T[0];w&&(i({...p,replace:w.replace,scroll:w.scroll}),T.length=0)}function H(p,w){const O=ze(t(),p.pathname),D=oe;oe="preload";for(let ce in O){const{route:J,params:B}=O[ce];J.component&&J.component.preload&&J.component.preload();const{preload:ne}=J;w&&ne&&Ft(n(),()=>ne({params:B,location:{pathname:p.pathname,search:p.search,hash:p.hash,query:Wt(p),state:null,key:""},intent:"preload"}))}oe=D}}function fr(e,t,n,o){const{base:r,location:i,params:s}=e,{pattern:l,component:a,preload:f}=o().route,d=A(()=>o().path);a&&a.preload&&a.preload();const h=f?f({params:s,location:i,intent:oe||"initial"}):void 0;return{parent:t,pattern:l,path:d,outlet:()=>a?c(a,{params:s,location:i,data:h,get children(){return n()}}):n(),resolvePath(g){return _e(r.path(),g,d())}}}const dr=e=>t=>{const{base:n}=t,o=tt(()=>t.children),r=A(()=>Qt(o(),t.base||""));let i;const s=ur(e,r,()=>i,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(s),c(Yt.Provider,{value:s,get children(){return c(hr,{routerState:s,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[A(()=>(i=Nt())&&null),c(gr,{routerState:s,get branches(){return r()}})]}})}})};function hr(e){const t=e.routerState.location,n=e.routerState.params,o=A(()=>e.preload&&U(()=>{e.preload({params:n,location:t,intent:cr()||"initial"})}));return c(zt,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>c(r,{params:n,location:t,get data(){return o()},get children(){return e.children}})})}function gr(e){const t=[];let n;const o=A(Ze(e.routerState.matches,(r,i,s)=>{let l=i&&r.length===i.length;const a=[];for(let f=0,d=r.length;f<d;f++){const h=i&&i[f],u=r[f];s&&h&&u.route.key===h.route.key?a[f]=s[f]:(l=!1,t[f]&&t[f](),jt(g=>{t[f]=g,a[f]=fr(e.routerState,a[f-1]||e.routerState.base,bt(()=>o()[f+1]),()=>e.routerState.matches()[f])}))}return t.splice(r.length).forEach(f=>f()),s&&l?s:(n=a[0],a)}));return bt(()=>o()&&n)()}const bt=e=>()=>c(zt,{get when(){return e()},keyed:!0,children:t=>c(at.Provider,{value:t,get children(){return t.outlet()}})}),V=e=>{const t=tt(()=>e.children);return de(e,{get children(){return t()}})};function pr([e,t],n,o){return[e,o?r=>t(o(r)):t]}function mr(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,o=pr(C(n(e.get()),{equals:(r,i)=>r.value===i.value&&r.state===i.state}),void 0,r=>(!t&&e.set(r),r));return e.init&&le(e.init((r=e.get())=>{t=!0,o[1](n(r)),t=!1})),dr({signal:o,create:e.create,utils:e.utils})}function yr(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function br(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const wr=new Map;function xr(e=!0,t=!1,n="/_server",o){return r=>{const i=r.base.path(),s=r.navigatorFactory(r.base);let l,a;function f(m){return m.namespaceURI==="http://www.w3.org/2000/svg"}function d(m){if(m.defaultPrevented||m.button!==0||m.metaKey||m.altKey||m.ctrlKey||m.shiftKey)return;const x=m.composedPath().find(F=>F instanceof Node&&F.nodeName.toUpperCase()==="A");if(!x||t&&!x.hasAttribute("link"))return;const k=f(x),L=k?x.href.baseVal:x.href;if((k?x.target.baseVal:x.target)||!L&&!x.hasAttribute("state"))return;const T=(x.getAttribute("rel")||"").split(/\s+/);if(x.hasAttribute("download")||T&&T.includes("external"))return;const j=k?new URL(L,document.baseURI):new URL(L);if(!(j.origin!==window.location.origin||i&&j.pathname&&!j.pathname.toLowerCase().startsWith(i.toLowerCase())))return[x,j]}function h(m){const x=d(m);if(!x)return;const[k,L]=x,N=r.parsePath(L.pathname+L.search+L.hash),T=k.getAttribute("state");m.preventDefault(),s(N,{resolve:!1,replace:k.hasAttribute("replace"),scroll:!k.hasAttribute("noscroll"),state:T?JSON.parse(T):void 0})}function u(m){const x=d(m);if(!x)return;const[k,L]=x;o&&(L.pathname=o(L.pathname)),r.preloadRoute(L,k.getAttribute("preload")!=="false")}function g(m){clearTimeout(l);const x=d(m);if(!x)return a=null;const[k,L]=x;a!==k&&(o&&(L.pathname=o(L.pathname)),l=setTimeout(()=>{r.preloadRoute(L,k.getAttribute("preload")!=="false"),a=k},20))}function $(m){if(m.defaultPrevented)return;let x=m.submitter&&m.submitter.hasAttribute("formaction")?m.submitter.getAttribute("formaction"):m.target.getAttribute("action");if(!x)return;if(!x.startsWith("https://action/")){const L=new URL(x,Kt);if(x=r.parsePath(L.pathname+L.search),!x.startsWith(n))return}if(m.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const k=wr.get(x);if(k){m.preventDefault();const L=new FormData(m.target,m.submitter);k.call({r,f:m.target},m.target.enctype==="multipart/form-data"?L:new URLSearchParams(L))}}it(["click","submit"]),document.addEventListener("click",h),e&&(document.addEventListener("mousemove",g,{passive:!0}),document.addEventListener("focusin",u,{passive:!0}),document.addEventListener("touchstart",u,{passive:!0})),document.addEventListener("submit",$),le(()=>{document.removeEventListener("click",h),e&&(document.removeEventListener("mousemove",g),document.removeEventListener("focusin",u),document.removeEventListener("touchstart",u)),document.removeEventListener("submit",$)})}}function vr(e){const t=()=>{const o=window.location.pathname.replace(/^\/+/,"/")+window.location.search,r=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:o+window.location.hash,state:r}},n=Gt();return mr({get:t,set({value:o,replace:r,scroll:i,state:s}){r?window.history.replaceState(qn(s),"",o):window.history.pushState(s,"",o),br(decodeURIComponent(window.location.hash.slice(1)),i),lt()},init:o=>yr(window,"popstate",Xn(o,r=>{if(r&&r<0)return!n.confirm(r);{const i=t();return!n.confirm(i.value,{state:i.state})}})),create:xr(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:o=>window.history.go(o),beforeLeave:n}})(e)}var $r=R("<a>");function Zt(e){e=de({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=ot(e,["href","state","class","activeClass","inactiveClass","end"]),n=or(()=>e.href),o=ir(n),r=ut(),i=A(()=>{const s=n();if(s===void 0)return[!1,!1];const l=ie(s.split(/[?#]/,1)[0]).toLowerCase(),a=decodeURI(ie(r.pathname).toLowerCase());return[e.end?l===a:a.startsWith(l+"/")||a===l,l===a]});return(()=>{var s=$r();return st(s,de(t,{get href(){return o()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i()[0],[e.activeClass]:i()[0],...t.classList}},link:"",get"aria-current"(){return i()[1]?"page":void 0}}),!1,!1),s})()}const Qe=Symbol("store-raw"),he=Symbol("store-node"),q=Symbol("store-has"),en=Symbol("store-self");function tn(e){let t=e[z];if(!t&&(Object.defineProperty(e,z,{value:t=new Proxy(e,Ar)}),!Array.isArray(e))){const n=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let r=0,i=n.length;r<i;r++){const s=n[r];o[s].get&&Object.defineProperty(e,s,{enumerable:o[s].enumerable,get:o[s].get.bind(t)})}}return t}function je(e){let t;return e!=null&&typeof e=="object"&&(e[z]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function Pe(e,t=new Set){let n,o,r,i;if(n=e!=null&&e[Qe])return n;if(!je(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let s=0,l=e.length;s<l;s++)r=e[s],(o=Pe(r,t))!==r&&(e[s]=o)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const s=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let a=0,f=s.length;a<f;a++)i=s[a],!l[i].get&&(r=e[i],(o=Pe(r,t))!==r&&(e[i]=o))}return e}function Be(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function Se(e,t,n){if(e[t])return e[t];const[o,r]=C(n,{equals:!1,internal:!0});return o.$=r,e[t]=o}function Pr(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===z||t===he||(delete n.value,delete n.writable,n.get=()=>e[z][t]),n}function nn(e){Ke()&&Se(Be(e,he),en)()}function Sr(e){return nn(e),Reflect.ownKeys(e)}const Ar={get(e,t,n){if(t===Qe)return e;if(t===z)return n;if(t===dt)return nn(e),n;const o=Be(e,he),r=o[t];let i=r?r():e[t];if(t===he||t===q||t==="__proto__")return i;if(!r){const s=Object.getOwnPropertyDescriptor(e,t);Ke()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(s&&s.get)&&(i=Se(o,t,i)())}return je(i)?tn(i):i},has(e,t){return t===Qe||t===z||t===dt||t===he||t===q||t==="__proto__"?!0:(Ke()&&Se(Be(e,q),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Sr,getOwnPropertyDescriptor:Pr};function Ne(e,t,n,o=!1){if(!o&&e[t]===n)return;const r=e[t],i=e.length;n===void 0?(delete e[t],e[q]&&e[q][t]&&r!==void 0&&e[q][t].$()):(e[t]=n,e[q]&&e[q][t]&&r===void 0&&e[q][t].$());let s=Be(e,he),l;if((l=Se(s,t,r))&&l.$(()=>n),Array.isArray(e)&&e.length!==i){for(let a=e.length;a<i;a++)(l=s[a])&&l.$();(l=Se(s,"length",i))&&l.$(e.length)}(l=s[en])&&l.$()}function rn(e,t){const n=Object.keys(t);for(let o=0;o<n.length;o+=1){const r=n[o];Ne(e,r,t[r])}}function Cr(e,t){if(typeof t=="function"&&(t=t(e)),t=Pe(t),Array.isArray(t)){if(e===t)return;let n=0,o=t.length;for(;n<o;n++){const r=t[n];e[n]!==r&&Ne(e,n,r)}Ne(e,"length",o)}else rn(e,t)}function we(e,t,n=[]){let o,r=e;if(t.length>1){o=t.shift();const s=typeof o,l=Array.isArray(e);if(Array.isArray(o)){for(let a=0;a<o.length;a++)we(e,[o[a]].concat(t),n);return}else if(l&&s==="function"){for(let a=0;a<e.length;a++)o(e[a],a)&&we(e,[a].concat(t),n);return}else if(l&&s==="object"){const{from:a=0,to:f=e.length-1,by:d=1}=o;for(let h=a;h<=f;h+=d)we(e,[h].concat(t),n);return}else if(t.length>1){we(e[o],t,[o].concat(n));return}r=e[o],n=[o].concat(n)}let i=t[0];typeof i=="function"&&(i=i(r,n),i===r)||o===void 0&&i==null||(i=Pe(i),o===void 0||je(r)&&je(i)&&!Array.isArray(i)?rn(r,i):Ne(e,o,i))}function kr(...[e,t]){const n=Pe(e||{}),o=Array.isArray(n),r=tn(n);function i(...s){Bt(()=>{o&&s.length===1?Cr(n,s[0]):we(n,s)})}return[r,i]}const Lr=y.div`
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
`,_r=y.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Or=y.div`
  font-weight: bold;
  font-size: 1.4rem;
`,Er=y(Zt)`
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
`,ge=y.div`
  margin-right: 10px;
  color: white;
  text-decoration: none;
  font-size: 1.0rem;
`,pe=y(Zt)`
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
`,Rr=y.div`
  display: flex;
  align-items: center;
`;function Tr(){const e=ut();return se(()=>{console.log("Header 컴포넌트 나타남",e.pathname),le(()=>{console.log("Header cleanUp 함수")})}),c(Lr,{get children(){return[c(_r,{get children(){return[c(Or,{get children(){return c(Er,{href:"/",get active(){return e.pathname==="/"}})}}),c(ge,{get children(){return c(pe,{href:"/testbet",get active(){return e.pathname==="/testbet"},children:"바카라"})}}),c(ge,{get children(){return c(pe,{href:"/stockcalc",get active(){return e.pathname==="/stockcalc"},children:"주식계산기"})}}),c(ge,{get children(){return c(pe,{href:"/test",get active(){return e.pathname==="/test"},children:"테스트"})}})]}}),c(Rr,{get children(){return[c(ge,{style:{"margin-right":"10px"},get children(){return c(pe,{href:"/signin",get active(){return e.pathname==="/signin"},children:"로그인"})}}),c(ge,{get children(){return c(pe,{href:"/signup",get active(){return e.pathname==="/signup"},children:"회원가입"})}})]}})]}})}const Ir=()=>{window.open("https://github.com/dwerasd","_blank")},jr=y.div`
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
`,Br=y.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`,Nr=y.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`,Fr=y.div`
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
`,Mr=y(Fr)`
  /* MenuLink 컴포넌트를 상속받아 스타일 변경 가능 */
`;function Dr(){return c(jr,{get children(){return[c(Br,{}),c(Nr,{get children(){return c(Mr,{onClick:Ir,children:"Github"})}})]}})}const Ur=y.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;  // 추가
`,Hr=y.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,zr=y.main`
  flex-grow: 1;
  padding: 20px;
  margin-top: 5vh;  // 헤더 높이만큼 여백
  width: 100%;
  min-height: calc(100vh - 10vh);  // 뷰포트 높이 고려
  padding-bottom: 5vh;  // footer 높이만큼 추가
  margin-bottom: 5vh;  // footer 높이만큼 여백
`;function Vr(e){return se(()=>{console.log("Layout 컴포넌트 나타남"),le(()=>{console.log("Layout cleanUp 함수")})}),c(Ur,{get children(){return c(Hr,{get children(){return[c(Tr,{}),c(zr,{get children(){return e.children}}),c(Dr,{})]}})}})}var Gr=R("<h4>메인 페이지");const Kr=y.div`
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
`;function Wr(){return se(()=>{console.log("Main 시작"),le(()=>{console.log("Main 소멸")})}),c(Kr,{get children(){return Gr()}})}var qr=R("<h4>테스트 페이지");const Xr=y("div")`
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
`,Yr=y("div")`
  font-size: 100%;
  align-items: center;
  color: white;
`;function fe(){return ut(),se(()=>{console.log("Test 시작"),le(()=>{console.log("Test 소멸")})}),c(Xr,{get children(){return c(Yr,{get children(){return qr()}})}})}var Jr=R("<div>에 <!>원을 베팅하세요."),Qr=R("<div>게임 결과:"),Zr=R("<h3>베팅 기록"),eo=R("<ul>"),to=R("<li>");const no=y("div")`
  position: fixed;
  top: 5vh;
  left: 0;
  width: 100%;
  height: 95vh;
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  overflow-y: auto;
`,ro=y("h1")`
  color: #fff;
  margin-bottom: 25px;
  font-size: 1.8rem;
  text-align: left;
`,oo=y("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin-left: 20px;
`,wt=y("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
`,xt=y("label")`
  font-weight: bold;
  color: #eee;
  font-size: 0.95rem;
  width: 100%;
  text-align: left;
  margin-left: 5px;
`,vt=y("div")`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
`,ke=y("input")`
  width: 200px;
  padding: 10px;
  border: 1px solid #444;
  background: #333;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 5px;
`,Le=y("button")`
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
`,$t=y("div")`
  padding: 12px;
  background: #2a2a2a;
  border-radius: 6px;
  line-height: 1.6;
  margin-top: 8px;
  width: 100%;
  text-align: left;
`,Pt=y("span")`
  background-color: #ffeb3b;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,St=y("span")`
  background-color: pink;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,io=y("span")`
  display: inline-block;
  width: 80px;
  text-align: center;
  background-color: lightblue;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,so=y("span")`
  background-color: lightgreen;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,lo=y("div")`
  padding: 15px;
  background: #1e1e1e;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 1.1rem;
  text-align: left;
`,ao=y("div")`
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
`,co=y("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 5px;
`,uo=()=>{const[e,t]=C(3e6),[n,o]=C(1e3),[r,i]=C([n(),n(),n(),n()]),[s,l]=C("1.95"),[a,f]=C("1.95"),[d,h]=C(0),[u,g]=C(n()*2),[$,m]=C(e()),[x,k]=C(0),[L,N]=C([]),[T,j]=C("뱅커"),F=p=>{const w=parseInt(p.target.value,10);t(w)},ae=p=>{const w=parseInt(p.target.value,10);t(e()),o(w),i([w,w,w,w]),g(w*2),m(e()),k(0),N([]),h(0),j("뱅커")},b=p=>{l(p.target.value)},S=p=>{f(p.target.value)},v=()=>{i([n(),n(),n(),n()]),g(n()*2),m(e()),k(0),N([]),h(0),j("뱅커")},M=()=>{j(T()==="뱅커"?"플레이어":"뱅커")},Y=p=>{N(w=>{const O=[...w(),p];return O.length>30?O.slice(1):O})},H=p=>{const w=T(),O=w==="뱅커"?"B":"P";let D=x()-u(),ce=$()-u();const J=O===p?"O":"X";let B=[...r()];if(O===p){const G=parseFloat(O==="P"?a():s());D+=u()*G,ce+=u()*G,B.shift(),B.pop()}else B.push(u());const ne=`[${d()}] : ${O}(${u()}) => ${p}(${u()})${J}(${D})`;j(w==="뱅커"?"플레이어":"뱅커"),i(B),g(B.length===0?n()*2:B.length===1?B[0]:B[0]+B[B.length-1]),k(D),m(ce),h(G=>G+1),Y(ne),B.length===0&&(i([n(),n(),n(),n()]),Y("----------------------------------------"))};return c(no,{get children(){return[c(ro,{children:"🎲 베팅 게임"}),c(oo,{get children(){return[c(wt,{get children(){return[c(xt,{children:"초기 설정"}),c(vt,{get children(){return[c(ke,{type:"number",get value(){return e()},onInput:F,placeholder:"초기 잔고"}),c(ke,{type:"number",get value(){return n()},onInput:ae,placeholder:"베팅 기준 금액"})]}})]}}),c(wt,{get children(){return[c(xt,{children:"배당률 설정"}),c(vt,{get children(){return[c(ke,{type:"number",step:"0.01",get value(){return s()},onInput:b,placeholder:"뱅커 배당률"}),c(ke,{type:"number",step:"0.01",get value(){return a()},onInput:S,placeholder:"플레이어 배당률"})]}})]}}),c($t,{get children(){return["잔고: ",c(St,{get children(){return $().toLocaleString()}}),"원 수익금: ",c(St,{get children(){return x().toLocaleString()}}),"원 총 베팅 횟수: ",c(Pt,{get children(){return d()}}),"회",c(Le,{onClick:v,children:"초기화"})]}}),c(lo,{get children(){return[(()=>{var p=Jr(),w=p.firstChild,O=w.nextSibling;return O.nextSibling,E(p,c(io,{get children(){return T()}}),w),E(p,c(so,{get children(){return u().toLocaleString()}}),O),E(p,c(Le,{onClick:M,children:"뒤집기"}),null),p})(),(()=>{var p=Qr();return p.firstChild,p.style.setProperty("margin-top","15px"),E(p,c(Le,{onClick:()=>H("B"),children:"뱅커 승리"}),null),E(p,c(Le,{onClick:()=>H("P"),children:"플레이어 승리"}),null),p})()]}}),c($t,{get children(){return["배팅 배열:",c(co,{get children(){return r().map((p,w)=>c(Pt,{get children(){return p.toLocaleString()}}))}})]}}),c(ao,{get children(){return[Zr(),(()=>{var p=eo();return E(p,()=>L().map((w,O)=>(()=>{var D=to();return E(D,w),D})())),p})()]}})]}})]}})};var fo=R("<div><br>원에 <!>주를 추가 매수 하려면 <!>원이 필요합니다."),At=R("<button>추가"),ho=R("<div>총 보유 주식수: <!>주"),go=R("<div>평균 매입가: <!>원"),po=R("<div>총 투자금액: <!>원");const mo=y("div")`
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  width: 100%;
  height: auto;
`,yo=y("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin-left: 20px;
  margin-bottom: 80px;
`,me=y("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
`,bo=y("h1")`
  color: #fff;
  margin-bottom: 25px;
  font-size: 1.8rem;
  text-align: left;
`,ye=y("label")`
  font-weight: bold;
  color: #eee;
  font-size: 0.95rem;
  width: 100%;
  text-align: left;
  margin-left: 5px;
`,Q=y("input")`
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
`,be=y("div")`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
`,Ct=y("div")`
  padding: 12px;
  background: #2a2a2a;
  border-radius: 6px;
  line-height: 1.6;
  margin-top: 8px;
  width: 100%;
  text-align: left;
`,W=y("span")`
  background-color: #ffeb3b;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,wo=()=>{const[e,t]=C(.23),[n,o]=C(0),[r,i]=C(0),[s,l]=C(0),[a,f]=C(0),[d,h]=kr([]);let u;const g=A(()=>a()),$=A(()=>a()*s()),m=b=>t(parseFloat(b.target.value)||0),x=b=>o(parseFloat(b.target.value)||0),k=b=>i(parseFloat(b.target.value)||0),L=b=>l(parseFloat(b.target.value)||0),N=b=>f(parseFloat(b.target.value)||0),T=()=>{d.length,h([...d,{price:0,shares:0}]),setTimeout(()=>{if(u){const b=u.getBoundingClientRect(),S=window.pageYOffset||document.documentElement.scrollTop;window.scrollTo({top:b.top+S-100,behavior:"smooth"})}},100)},j=(b,S,v)=>{const M=parseFloat(v.target.value)||0;h(b,S,M)},F=()=>{const S=[{price:n(),shares:r()},...d];let v=0,M=0;S.forEach(H=>{v+=H.shares,M+=H.price*H.shares});const Y=v>0?M/v:0;return{totalShares:v,totalInvestment:M,averagePrice:Y}},ae=()=>{const b=F(),S=b.totalShares+g(),v=b.totalInvestment+$()+e();return{adjustedAveragePrice:(S>0?v/S:0)||0}};return c(mo,{get children(){return[c(bo,{children:"📈 주식 평단가 계산기"}),c(yo,{get children(){return[c(me,{get children(){return[c(ye,{children:"거래 수수료 (%)"}),c(be,{get children(){return c(Q,{type:"number",get value(){return e()},onInput:m,step:"0.01",placeholder:"0.23%"})}})]}}),c(me,{get children(){return[c(ye,{children:"현재 보유 정보(평단가, 주식수)"}),c(be,{get children(){return[c(Q,{type:"number",get value(){return n()},onInput:x,placeholder:"평균 매입가"}),c(Q,{type:"number",get value(){return r()},onInput:k,placeholder:"보유 주식 수"}),A(()=>A(()=>d.length===0)()&&(()=>{var b=At();return b.$$click=T,b.style.setProperty("padding","10px 15px"),b.style.setProperty("background","#444"),b.style.setProperty("color","white"),b.style.setProperty("border","none"),b.style.setProperty("borderRadius","5px"),b.style.setProperty("cursor","pointer"),b})())]}})]}}),A(()=>d.map((b,S)=>c(me,{key:`holding-${S}`,ref:v=>{S===d.length-1&&(u=v)},get children(){return[c(ye,{get children(){return["추가 보유 정보 #",S+1]}}),c(be,{get children(){return[c(Q,{type:"number",get value(){return b.price},onInput:v=>j(S,"price",v),placeholder:"평균 매입가",id:`price-${S}`}),c(Q,{type:"number",get value(){return b.shares},onInput:v=>j(S,"shares",v),placeholder:"보유 주식 수",id:`shares-${S}`}),A(()=>A(()=>S===d.length-1)()&&(()=>{var v=At();return v.$$click=T,v.style.setProperty("padding","10px 15px"),v.style.setProperty("background","#444"),v.style.setProperty("color","white"),v.style.setProperty("border","none"),v.style.setProperty("borderRadius","5px"),v.style.setProperty("cursor","pointer"),v})())]}})]}}))),A(()=>A(()=>d.length>0)()&&c(Ct,{get children(){return[(()=>{var b=ho(),S=b.firstChild,v=S.nextSibling;return v.nextSibling,E(b,c(W,{get children(){return F().totalShares}}),v),b})(),(()=>{var b=go(),S=b.firstChild,v=S.nextSibling;return v.nextSibling,E(b,c(W,{get children(){return F().averagePrice.toFixed(0)}}),v),b})(),(()=>{var b=po(),S=b.firstChild,v=S.nextSibling;return v.nextSibling,E(b,c(W,{get children(){return F().totalInvestment.toFixed(0)}}),v),b})()]}})),c(me,{get children(){return[c(ye,{children:"현재 주가"}),c(be,{get children(){return c(Q,{type:"number",get value(){return s()},onInput:L,placeholder:"현재 주가"})}})]}}),c(me,{get children(){return[c(ye,{children:"추가 매수 설정"}),c(be,{get children(){return[c(Q,{type:"number",get value(){return a().toFixed(0)},onInput:N,placeholder:"매수할 주식 수"}),c(Q,{type:"range",min:"0",max:"10000",get value(){return a()},onInput:N})]}}),c(Ct,{get children(){return[c(W,{get children(){return a()}}),"주 추가 매수 시 → 총 보유 주식수: ",c(W,{get children(){return F().totalShares+Number(a())}}),"주, 조정 평단가: ",c(W,{get children(){return ae().adjustedAveragePrice.toFixed(0)}}),"원",(()=>{var b=fo(),S=b.firstChild,v=S.nextSibling,M=v.nextSibling,Y=M.nextSibling,H=Y.nextSibling;return H.nextSibling,E(b,c(W,{get children(){return s()}}),v),E(b,c(W,{get children(){return a()}}),M),E(b,c(W,{get children(){return $().toFixed(0)}}),H),b})()]}})]}})]}})]}})};it(["click"]);var xo=R("<div><div>"),vo=R("<p>저항: "),$o=R("<p>지지: "),Po=R("<p>위험: "),So=R("<div><div></div><div>"),Ao=R("<p>고가: "),Co=R("<p>평가: "),ko=R("<p>저가: ");const Lo=y("div")`
  position: fixed;
  top: 5vh;
  left: 0;
  width: 100%;
  height: 95vh;
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  overflow-y: auto;
`,kt=y("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin-left: 20px;
`,Lt=y("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
`,_t=y("h1")`
  color: #fff;
  margin-bottom: 25px;
  font-size: 1.8rem;
  text-align: left;
`,Ve=y("label")`
  font-weight: bold;
  color: #eee;
  font-size: 0.95rem;
  width: 100px;
  text-align: left;
  margin-left: 5px;
`,Ge=y("input")`
  width: ${e=>e.width||"200px"};
  padding: 10px;
  border: 1px solid #444;
  background: #333;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 5px;
`,Ot=y("div")`
  padding: 15px;
  background: #1e1e1e;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 1.1rem;
  text-align: left;
  
  p {
    margin: 10px 0;
  }
`,xe=y("span")`
  background-color: #ffeb3b;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,Et=y(xe)`
  background-color: #ff6b6b;
`;function _o(){const[e,t]=C(""),[n,o]=C({val1:0,val2:0,val3:0}),[r,i]=C(""),[s,l]=C(""),[a,f]=C({val1:0,val2:0,val3:0}),d=u=>u<2e3?1:u<5e3?5:u<2e4?10:u<5e4?50:u<2e5?100:u<5e5?500:1e3,h=u=>{const g=d(u);return Math.floor(u/g)*g};return se(()=>{const u=parseFloat(e());if(!isNaN(u)){const g=$=>h(u*$);o({val1:g(.77),val2:g(.693),val3:g(.65835)})}}),se(()=>{const u=parseFloat(r()),g=parseFloat(s());if(!isNaN(u)&&!isNaN(g)){const $=(u+g)/2,m=x=>h(x);f({val1:m(($+u)/2),val2:m($),val3:m(($+g)/2)})}}),c(Lo,{get children(){return[c(_t,{children:"💰 가격 전환 계산기"}),c(kt,{get children(){return c(Lt,{get children(){return[(()=>{var u=xo(),g=u.firstChild;return u.style.setProperty("display","flex"),u.style.setProperty("gap","20px"),E(g,c(Ve,{children:"기준가:"}),null),E(g,c(Ge,{type:"number",get value(){return e()},onInput:$=>t($.target.value),placeholder:"기준가 입력"}),null),u})(),c(Ot,{get children(){return[(()=>{var u=vo();return u.firstChild,E(u,c(xe,{get children(){return n().val1}}),null),u})(),(()=>{var u=$o();return u.firstChild,E(u,c(xe,{get children(){return n().val2}}),null),u})(),(()=>{var u=Po();return u.firstChild,E(u,c(Et,{get children(){return n().val3}}),null),u})()]}})]}})}}),c(_t,{children:"📊 고가-저가 분석기"}),c(kt,{get children(){return c(Lt,{get children(){return[(()=>{var u=So(),g=u.firstChild,$=g.nextSibling;return u.style.setProperty("display","flex"),u.style.setProperty("gap","20px"),E(g,c(Ve,{children:"고가:"}),null),E(g,c(Ge,{type:"number",get value(){return r()},onInput:m=>i(m.target.value),placeholder:"고가 입력"}),null),E($,c(Ve,{children:"저가:"}),null),E($,c(Ge,{type:"number",get value(){return s()},onInput:m=>l(m.target.value),placeholder:"저가 입력"}),null),u})(),c(Ot,{get children(){return[(()=>{var u=Ao();return u.firstChild,E(u,c(xe,{get children(){return a().val1}}),null),u})(),(()=>{var u=Co();return u.firstChild,E(u,c(xe,{get children(){return a().val2}}),null),u})(),(()=>{var u=ko();return u.firstChild,E(u,c(Et,{get children(){return a().val3}}),null),u})()]}})]}})}}),c(wo,{})]}})}function Oo(){return se(()=>{console.log("App 컴포넌트 나타남"),le(()=>{console.log("App cleanUp 함수")})}),c(vr,{get children(){return c(V,{path:"/",component:Vr,get children(){return[c(V,{path:"/",component:Wr}),c(V,{path:"/trends",component:fe}),c(V,{path:"/custom",component:fe}),c(V,{path:"/signin",component:fe}),c(V,{path:"/signup",component:fe}),c(V,{path:"/test",component:fe}),c(V,{path:"/testbet",component:uo}),c(V,{path:"/stockcalc",component:_o}),c(V,{path:"/*",component:fe})]}})}})}const Eo=y.div`
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
`;document.getElementById("root");An(()=>[c(Eo,{}),c(Oo,{})],document.getElementById("root"));
