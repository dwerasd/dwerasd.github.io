(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Ut=(e,t)=>e===t,ve=Symbol("solid-proxy"),xt=typeof Proxy=="function",Se={equals:Ut};let yt=Lt;const H=1,Pe=2,wt={owned:null,cleanups:null,context:null,owner:null};var v=null;let Re=null,Dt=null,P=null,E=null,U=null,Ce=0;function vt(e,t){const n=P,o=v,r=e.length===0,i=t===void 0?o:t,s=r?wt:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=r?e:()=>e(()=>T(()=>le(s)));v=s,P=null;try{return z(l,!0)}finally{P=n,v=o}}function C(e,t){t=t?Object.assign({},Se,t):Se;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=r=>(typeof r=="function"&&(r=r(n.value)),At(n,r));return[$t.bind(n),o]}function V(e,t,n){const o=We(e,t,!1,H);ce(o)}function Y(e,t,n){yt=Wt;const o=We(e,t,!1,H);o.user=!0,U?U.push(o):ce(o)}function k(e,t,n){n=n?Object.assign({},Se,n):Se;const o=We(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,ce(o),$t.bind(o)}function Vt(e){return z(e,!1)}function T(e){if(P===null)return e();const t=P;P=null;try{return e()}finally{P=t}}function He(e,t,n){const o=Array.isArray(e);let r,i=n&&n.defer;return s=>{let l;if(o){l=Array(e.length);for(let f=0;f<e.length;f++)l[f]=e[f]()}else l=e();if(i)return i=!1,s;const c=T(()=>t(l,r,s));return r=l,c}}function J(e){return v===null||(v.cleanups===null?v.cleanups=[e]:v.cleanups.push(e)),e}function St(){return v}function Pt(e,t){const n=v,o=P;v=e,P=null;try{return z(t,!0)}catch(r){qe(r)}finally{v=n,P=o}}function Ht(e){const t=P,n=v;return Promise.resolve().then(()=>{P=t,v=n;let o;return z(e,!1),P=v=null,o?o.done:void 0})}const[lo,ao]=C(!1);function ze(e,t){const n=Symbol("context");return{id:n,Provider:Kt(n),defaultValue:e}}function ke(e){let t;return v&&v.context&&(t=v.context[e.id])!==void 0?t:e.defaultValue}function Ge(e){const t=k(e),n=k(()=>Fe(t()));return n.toArray=()=>{const o=n();return Array.isArray(o)?o:o!=null?[o]:[]},n}function $t(){if(this.sources&&this.state)if(this.state===H)ce(this);else{const e=E;E=null,z(()=>Ae(this),!1),E=e}if(P){const e=this.observers?this.observers.length:0;P.sources?(P.sources.push(this),P.sourceSlots.push(e)):(P.sources=[this],P.sourceSlots=[e]),this.observers?(this.observers.push(P),this.observerSlots.push(P.sources.length-1)):(this.observers=[P],this.observerSlots=[P.sources.length-1])}return this.value}function At(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&z(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],s=Re&&Re.running;s&&Re.disposed.has(i),(s?!i.tState:!i.state)&&(i.pure?E.push(i):U.push(i),i.observers&&Ct(i)),s||(i.state=H)}if(E.length>1e6)throw E=[],new Error},!1)),t}function ce(e){if(!e.fn)return;le(e);const t=Ce;zt(e,e.value,t)}function zt(e,t,n){let o;const r=v,i=P;P=v=e;try{o=e.fn(t)}catch(s){return e.pure&&(e.state=H,e.owned&&e.owned.forEach(le),e.owned=null),e.updatedAt=n+1,qe(s)}finally{P=i,v=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?At(e,o):e.value=o,e.updatedAt=n)}function We(e,t,n,o=H,r){const i={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:v,context:v?v.context:null,pure:n};return v===null||v!==wt&&(v.owned?v.owned.push(i):v.owned=[i]),i}function $e(e){if(e.state===0)return;if(e.state===Pe)return Ae(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ce);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===H)ce(e);else if(e.state===Pe){const o=E;E=null,z(()=>Ae(e,t[0]),!1),E=o}}function z(e,t){if(E)return e();let n=!1;t||(E=[]),U?n=!0:U=[],Ce++;try{const o=e();return Gt(n),o}catch(o){n||(U=null),E=null,qe(o)}}function Gt(e){if(E&&(Lt(E),E=null),e)return;const t=U;U=null,t.length&&z(()=>yt(t),!1)}function Lt(e){for(let t=0;t<e.length;t++)$e(e[t])}function Wt(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:$e(o)}for(t=0;t<n;t++)$e(e[t])}function Ae(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const r=o.state;r===H?o!==t&&(!o.updatedAt||o.updatedAt<Ce)&&$e(o):r===Pe&&Ae(o,t)}}}function Ct(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Pe,n.pure?E.push(n):U.push(n),n.observers&&Ct(n))}}function le(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),o=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),s=n.observerSlots.pop();o<r.length&&(i.sourceSlots[s]=o,r[o]=i,n.observerSlots[o]=s)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)le(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)le(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function qt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function qe(e,t=v){throw qt(e)}function Fe(e){if(typeof e=="function"&&!e.length)return Fe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const o=Fe(e[n]);Array.isArray(o)?t.push.apply(t,o):t.push(o)}return t}return e}function Kt(e,t){return function(o){let r;return V(()=>r=T(()=>(v.context={...v.context,[e]:o.value},Ge(()=>o.children))),void 0),r}}function a(e,t){return T(()=>e(t||{}))}function ge(){return!0}const Me={get(e,t,n){return t===ve?n:e.get(t)},has(e,t){return t===ve?!0:e.has(t)},set:ge,deleteProperty:ge,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ge,deleteProperty:ge}},ownKeys(e){return e.keys()}};function Be(e){return(e=typeof e=="function"?e():e)?e:{}}function Xt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function re(...e){let t=!1;for(let s=0;s<e.length;s++){const l=e[s];t=t||!!l&&ve in l,e[s]=typeof l=="function"?(t=!0,k(l)):l}if(xt&&t)return new Proxy({get(s){for(let l=e.length-1;l>=0;l--){const c=Be(e[l])[s];if(c!==void 0)return c}},has(s){for(let l=e.length-1;l>=0;l--)if(s in Be(e[l]))return!0;return!1},keys(){const s=[];for(let l=0;l<e.length;l++)s.push(...Object.keys(Be(e[l])));return[...new Set(s)]}},Me);const n={},o=Object.create(null);for(let s=e.length-1;s>=0;s--){const l=e[s];if(!l)continue;const c=Object.getOwnPropertyNames(l);for(let f=c.length-1;f>=0;f--){const d=c[f];if(d==="__proto__"||d==="constructor")continue;const g=Object.getOwnPropertyDescriptor(l,d);if(!o[d])o[d]=g.get?{enumerable:!0,configurable:!0,get:Xt.bind(n[d]=[g.get.bind(l)])}:g.value!==void 0?g:void 0;else{const u=n[d];u&&(g.get?u.push(g.get.bind(l)):g.value!==void 0&&u.push(()=>g.value))}}}const r={},i=Object.keys(o);for(let s=i.length-1;s>=0;s--){const l=i[s],c=o[l];c&&c.get?Object.defineProperty(r,l,c):r[l]=c?c.value:void 0}return r}function Ke(e,...t){if(xt&&ve in e){const r=new Set(t.length>1?t.flat():t[0]),i=t.map(s=>new Proxy({get(l){return s.includes(l)?e[l]:void 0},has(l){return s.includes(l)&&l in e},keys(){return s.filter(l=>l in e)}},Me));return i.push(new Proxy({get(s){return r.has(s)?void 0:e[s]},has(s){return r.has(s)?!1:s in e},keys(){return Object.keys(e).filter(s=>!r.has(s))}},Me)),i}const n={},o=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,r),s=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let l=!1,c=0;for(const f of t)f.includes(r)&&(l=!0,s?o[c][r]=i.value:Object.defineProperty(o[c],r,i)),++c;l||(s?n[r]=i.value:Object.defineProperty(n,r,i))}return[...o,n]}const Yt=e=>`Stale read from <${e}>.`;function kt(e){const t=e.keyed,n=k(()=>e.when,void 0,{equals:(o,r)=>t?o===r:!o==!r});return k(()=>{const o=n();if(o){const r=e.children;return typeof r=="function"&&r.length>0?T(()=>r(t?o:()=>{if(!T(n))throw Yt("Show");return e.when})):r}return e.fallback},void 0,void 0)}const Jt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Qt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Jt]),Zt=new Set(["innerHTML","textContent","innerText","children"]),en=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),tn=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function nn(e,t){const n=tn[e];return typeof n=="object"?n[t]?n.$:void 0:n}const rn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),on=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),sn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ln(e,t,n){let o=n.length,r=t.length,i=o,s=0,l=0,c=t[r-1].nextSibling,f=null;for(;s<r||l<i;){if(t[s]===n[l]){s++,l++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===s){const d=i<o?l?n[l-1].nextSibling:n[i-l]:c;for(;l<i;)e.insertBefore(n[l++],d)}else if(i===l)for(;s<r;)(!f||!f.has(t[s]))&&t[s].remove(),s++;else if(t[s]===n[i-1]&&n[l]===t[r-1]){const d=t[--r].nextSibling;e.insertBefore(n[l++],t[s++].nextSibling),e.insertBefore(n[--i],d),t[r]=n[i]}else{if(!f){f=new Map;let g=l;for(;g<i;)f.set(n[g],g++)}const d=f.get(t[s]);if(d!=null)if(l<d&&d<i){let g=s,u=1,h;for(;++g<r&&g<i&&!((h=f.get(t[g]))==null||h!==d+u);)u++;if(u>d-l){const m=t[s];for(;l<d;)e.insertBefore(n[l++],m)}else e.replaceChild(n[l++],t[s++])}else s++;else t[s++].remove()}}}const tt="_$DX_DELEGATE";function an(e,t,n,o={}){let r;return vt(i=>{r=i,t===document?e():L(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{r(),t.textContent=""}}function _(e,t,n){let o;const r=()=>{const s=document.createElement("template");return s.innerHTML=e,n?s.content.firstChild.firstChild:s.content.firstChild},i=t?()=>T(()=>document.importNode(o||(o=r()),!0)):()=>(o||(o=r())).cloneNode(!0);return i.cloneNode=i,i}function _t(e,t=window.document){const n=t[tt]||(t[tt]=new Set);for(let o=0,r=e.length;o<r;o++){const i=e[o];n.has(i)||(n.add(i),t.addEventListener(i,xn))}}function Ue(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function cn(e,t,n,o){o==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,o)}function un(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)}function fn(e,t){t==null?e.removeAttribute("class"):e.className=t}function dn(e,t,n,o){if(o)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n,typeof n!="function"&&n)}function hn(e,t,n={}){const o=Object.keys(t||{}),r=Object.keys(n);let i,s;for(i=0,s=r.length;i<s;i++){const l=r[i];!l||l==="undefined"||t[l]||(nt(e,l,!1),delete n[l])}for(i=0,s=o.length;i<s;i++){const l=o[i],c=!!t[l];!l||l==="undefined"||n[l]===c||!c||(nt(e,l,!0),n[l]=c)}return n}function gn(e,t,n){if(!t)return n?Ue(e,"style"):t;const o=e.style;if(typeof t=="string")return o.cssText=t;typeof n=="string"&&(o.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&o.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(o.setProperty(i,r),n[i]=r);return n}function Xe(e,t={},n,o){const r={};return o||V(()=>r.children=ae(e,t.children,r.children)),V(()=>typeof t.ref=="function"&&pn(t.ref,e)),V(()=>mn(e,t,n,!0,r,!0)),r}function pn(e,t,n){return T(()=>e(t,n))}function L(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return ae(e,t,o,n);V(r=>ae(e,t(),r,n),o)}function mn(e,t,n,o,r={},i=!1){t||(t={});for(const s in r)if(!(s in t)){if(s==="children")continue;r[s]=rt(e,s,null,r[s],n,i,t)}for(const s in t){if(s==="children")continue;const l=t[s];r[s]=rt(e,s,l,r[s],n,i,t)}}function bn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function nt(e,t,n){const o=t.trim().split(/\s+/);for(let r=0,i=o.length;r<i;r++)e.classList.toggle(o[r],n)}function rt(e,t,n,o,r,i,s){let l,c,f,d,g;if(t==="style")return gn(e,n,o);if(t==="classList")return hn(e,n,o);if(n===o)return o;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);o&&e.removeEventListener(u,o,typeof o!="function"&&o),n&&e.addEventListener(u,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);o&&e.removeEventListener(u,o,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),h=rn.has(u);if(!h&&o){const m=Array.isArray(o)?o[0]:o;e.removeEventListener(u,m)}(h||n)&&(dn(e,u,n,h),h&&_t([u]))}else if(t.slice(0,5)==="attr:")Ue(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")un(e,t.slice(5),n);else if((g=t.slice(0,5)==="prop:")||(f=Zt.has(t))||!r&&((d=nn(t,e.tagName))||(c=Qt.has(t)))||(l=e.nodeName.includes("-")||"is"in s))g&&(t=t.slice(5),c=!0),t==="class"||t==="className"?fn(e,n):l&&!c&&!f?e[bn(t)]=n:e[d||t]=n;else{const u=r&&t.indexOf(":")>-1&&sn[t.split(":")[0]];u?cn(e,u,t,n):Ue(e,en[t]||t,n)}return n}function xn(e){let t=e.target;const n=`$$${e.type}`,o=e.target,r=e.currentTarget,i=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),s=()=>{const c=t[n];if(c&&!t.disabled){const f=t[`${n}Data`];if(f!==void 0?c.call(t,f,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},l=()=>{for(;s()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();i(c[0]);for(let f=0;f<c.length-2&&(t=c[f],!!s());f++){if(t._$host){t=t._$host,l();break}if(t.parentNode===r)break}}else l();i(o)}function ae(e,t,n,o,r){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,s=o!==void 0;if(e=s&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(t=t.toString(),t===n))return n;if(s){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=Z(e,n,o,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean")n=Z(e,n,o);else{if(i==="function")return V(()=>{let l=t();for(;typeof l=="function";)l=l();n=ae(e,l,n,o)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(De(l,t,n,r))return V(()=>n=ae(e,l,n,o,!0)),()=>n;if(l.length===0){if(n=Z(e,n,o),s)return n}else c?n.length===0?ot(e,l,o):ln(e,n,l):(n&&Z(e),ot(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(s)return n=Z(e,n,o,t);Z(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function De(e,t,n,o){let r=!1;for(let i=0,s=t.length;i<s;i++){let l=t[i],c=n&&n[e.length],f;if(!(l==null||l===!0||l===!1))if((f=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))r=De(e,l,c)||r;else if(f==="function")if(o){for(;typeof l=="function";)l=l();r=De(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||r}else e.push(l),r=!0;else{const d=String(l);c&&c.nodeType===3&&c.data===d?e.push(c):e.push(document.createTextNode(d))}}return r}function ot(e,t,n=null){for(let o=0,r=t.length;o<r;o++)e.insertBefore(t[o],n)}function Z(e,t,n,o){if(n===void 0)return e.textContent="";const r=o||document.createTextNode("");if(t.length){let i=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(r!==l){const c=l.parentNode===e;!i&&!s?c?e.replaceChild(r,l):e.insertBefore(r,n):c&&l.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}const yn=!1,wn="http://www.w3.org/2000/svg";function vn(e,t=!1){return t?document.createElementNS(wn,e):document.createElement(e)}function Sn(e){const[t,n]=Ke(e,["component"]),o=k(()=>t.component);return k(()=>{const r=o();switch(typeof r){case"function":return T(()=>r(n));case"string":const i=on.has(r),s=vn(r,i);return Xe(s,n,i),s}})}let Pn={data:""},$n=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Pn,An=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ln=/\/\*[^]*?\*\/|  +/g,it=/\n+/g,q=(e,t)=>{let n="",o="",r="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+s+";":o+=i[1]=="f"?q(s,i):i+"{"+q(s,i[1]=="k"?"":t)+"}":typeof s=="object"?o+=q(s,t?t.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=q.p?q.p(i,s):i+":"+s+";")}return n+(t&&r?t+"{"+r+"}":r)+o},M={},Et=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Et(e[n]);return t}return e},Cn=(e,t,n,o,r)=>{let i=Et(e),s=M[i]||(M[i]=(c=>{let f=0,d=11;for(;f<c.length;)d=101*d+c.charCodeAt(f++)>>>0;return"go"+d})(i));if(!M[s]){let c=i!==e?e:(f=>{let d,g,u=[{}];for(;d=An.exec(f.replace(Ln,""));)d[4]?u.shift():d[3]?(g=d[3].replace(it," ").trim(),u.unshift(u[0][g]=u[0][g]||{})):u[0][d[1]]=d[2].replace(it," ").trim();return u[0]})(e);M[s]=q(r?{["@keyframes "+s]:c}:c,n?"":"."+s)}let l=n&&M.g?M.g:null;return n&&(M.g=M[s]),((c,f,d,g)=>{g?f.data=f.data.replace(g,c):f.data.indexOf(c)===-1&&(f.data=d?c+f.data:f.data+c)})(M[s],t,o,l),s},kn=(e,t,n)=>e.reduce((o,r,i)=>{let s=t[i];if(s&&s.call){let l=s(n),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;s=c?"."+c:l&&typeof l=="object"?l.props?"":q(l,""):l===!1?"":l}return o+r+(s??"")},"");function Le(e){let t=this||{},n=e.call?e(t.p):e;return Cn(n.unshift?n.raw?kn(n,[].slice.call(arguments,1),t.p):n.reduce((o,r)=>Object.assign(o,r&&r.call?r(t.p):r),{}):n,$n(t.target),t.g,t.o,t.k)}Le.bind({g:1});Le.bind({k:1});const _n=ze();function En(e){let t=this||{};return(...n)=>{const o=r=>{const i=ke(_n),s=re(r,{theme:i}),l=re(s,{get class(){const h=s.class,m="class"in s&&/^go[0-9]+/.test(h);let x=Le.apply({target:t.target,o:m,p:s,g:t.g},n);return[h,x].filter(Boolean).join(" ")}}),[c,f]=Ke(l,["as","theme"]),d=f,g=c.as||e;let u;return typeof g=="function"?u=g(d):t.g==1?(u=document.createElement(g),Xe(u,d)):u=Sn(re({component:g},d)),u};return o.class=r=>T(()=>Le.apply({target:t.target,p:r,g:t.g},n)),o}}const b=new Proxy(En,{get(e,t){return e(t)}});function Ot(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function o(r,i){if(n)return!(n=!1);const s={to:r,options:i,defaultPrevented:!1,preventDefault:()=>s.defaultPrevented=!0};for(const l of e)l.listener({...s,from:l.location,retry:c=>{c&&(n=!0),l.navigate(r,{...i,resolve:!1})}});return!s.defaultPrevented}return{subscribe:t,confirm:o}}let Ve;function Ye(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Ve=window.history.state._depth}Ye();function On(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Rn(e,t){let n=!1;return()=>{const o=Ve;Ye();const r=o==null?null:Ve-o;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const Bn=/^(?:[a-z0-9]+:)?\/\//i,Tn=/^\/+|(\/)\/+$/g,Rt="http://sr";function X(e,t=!1){const n=e.replace(Tn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function we(e,t,n){if(Bn.test(t))return;const o=X(e),r=n&&X(n);let i="";return!r||t.startsWith("/")?i=o:r.toLowerCase().indexOf(o.toLowerCase())!==0?i=o+r:i=r,(i||"/")+X(t,!i)}function In(e,t){if(e==null)throw new Error(t);return e}function Nn(e,t){return X(e).replace(/\/*(\*.*)?$/g,"")+X(t)}function Bt(e){const t={};return e.searchParams.forEach((n,o)=>{o in t?Array.isArray(t[o])?t[o].push(n):t[o]=[t[o],n]:t[o]=n}),t}function jn(e,t,n){const[o,r]=e.split("/*",2),i=o.split("/").filter(Boolean),s=i.length;return l=>{const c=l.split("/").filter(Boolean),f=c.length-s;if(f<0||f>0&&r===void 0&&!t)return null;const d={path:s?"":"/",params:{}},g=u=>n===void 0?void 0:n[u];for(let u=0;u<s;u++){const h=i[u],m=h[0]===":",x=m?c[u]:c[u].toLowerCase(),w=m?h.slice(1):h.toLowerCase();if(m&&Te(x,g(w)))d.params[w]=x;else if(m||!Te(x,w))return null;d.path+=`/${x}`}if(r){const u=f?c.slice(-f).join("/"):"";if(Te(u,g(r)))d.params[r]=u;else return null}return d}}function Te(e,t){const n=o=>o===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Fn(e){const[t,n]=e.pattern.split("/*",2),o=t.split("/").filter(Boolean);return o.reduce((r,i)=>r+(i.startsWith(":")?2:3),o.length-(n===void 0?0:1))}function Tt(e){const t=new Map,n=St();return new Proxy({},{get(o,r){return t.has(r)||Pt(n,()=>t.set(r,k(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function It(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),o=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(o);)r.push(n+=t[1]),o=o.slice(t[0].length);return It(o).reduce((i,s)=>[...i,...r.map(l=>l+s)],[])}const Mn=100,Nt=ze(),Je=ze(),Qe=()=>In(ke(Nt),"<A> and 'use' router primitives can be only used inside a Route."),Un=()=>ke(Je)||Qe().base,Dn=e=>{const t=Un();return k(()=>t.resolvePath(e()))},Vn=e=>{const t=Qe();return k(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Ze=()=>Qe().location;function Hn(e,t=""){const{component:n,preload:o,load:r,children:i,info:s}=e,l=!i||Array.isArray(i)&&!i.length,c={key:e,component:n,preload:o||r,info:s};return jt(e.path).reduce((f,d)=>{for(const g of It(d)){const u=Nn(t,g);let h=l?u:u.split("/*",1)[0];h=h.split("/").map(m=>m.startsWith(":")||m.startsWith("*")?m:encodeURIComponent(m)).join("/"),f.push({...c,originalPath:d,pattern:h,matcher:jn(h,!l,e.matchFilters)})}return f},[])}function zn(e,t=0){return{routes:e,score:Fn(e[e.length-1])*1e4-t,matcher(n){const o=[];for(let r=e.length-1;r>=0;r--){const i=e[r],s=i.matcher(n);if(!s)return null;o.unshift({...s,route:i})}return o}}}function jt(e){return Array.isArray(e)?e:[e]}function Ft(e,t="",n=[],o=[]){const r=jt(e);for(let i=0,s=r.length;i<s;i++){const l=r[i];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const c=Hn(l,t);for(const f of c){n.push(f);const d=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!d)Ft(l.children,f.pattern,n,o);else{const g=zn([...n],o.length);o.push(g)}n.pop()}}}return n.length?o:o.sort((i,s)=>s.score-i.score)}function Ie(e,t){for(let n=0,o=e.length;n<o;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Gn(e,t,n){const o=new URL(Rt),r=k(d=>{const g=e();try{return new URL(g,o)}catch{return console.error(`Invalid path ${g}`),d}},o,{equals:(d,g)=>d.href===g.href}),i=k(()=>r().pathname),s=k(()=>r().search,!0),l=k(()=>r().hash),c=()=>"",f=He(s,()=>Bt(r()));return{get pathname(){return i()},get search(){return s()},get hash(){return l()},get state(){return t()},get key(){return c()},query:n?n(f):Tt(f)}}let K;function Wn(){return K}function qn(e,t,n,o={}){const{signal:[r,i],utils:s={}}=e,l=s.parsePath||(p=>p),c=s.renderPath||(p=>p),f=s.beforeLeave||Ot(),d=we("",o.base||"");if(d===void 0)throw new Error(`${d} is not a valid base path`);d&&!r().value&&i({value:d,replace:!0,scroll:!1});const[g,u]=C(!1);let h;const m=(p,y)=>{y.value===x()&&y.state===$()||(h===void 0&&u(!0),K=p,h=y,Ht(()=>{h===y&&(w(h.value),A(h.state),I[1](S=>S.filter(B=>B.pending)))}).finally(()=>{h===y&&Vt(()=>{K=void 0,p==="navigate"&&de(h),u(!1),h=void 0})}))},[x,w]=C(r().value),[$,A]=C(r().state),N=Gn(x,$,s.queryWrapper),R=[],I=C([]),G=k(()=>typeof o.transformUrl=="function"?Ie(t(),o.transformUrl(N.pathname)):Ie(t(),N.pathname)),ue=()=>{const p=G(),y={};for(let S=0;S<p.length;S++)Object.assign(y,p[S].params);return y},_e=s.paramsWrapper?s.paramsWrapper(ue,t):Tt(ue),fe={pattern:d,path:()=>d,outlet:()=>null,resolvePath(p){return we(d,p)}};return V(He(r,p=>m("native",p),{defer:!0})),{base:fe,location:N,params:_e,isRouting:g,renderPath:c,parsePath:l,navigatorFactory:Oe,matches:G,beforeLeave:f,preloadRoute:he,singleFlight:o.singleFlight===void 0?!0:o.singleFlight,submissions:I};function Ee(p,y,S){T(()=>{if(typeof y=="number"){y&&(s.go?s.go(y):console.warn("Router integration does not support relative routing"));return}const B=!y||y[0]==="?",{replace:Q,resolve:D,scroll:O,state:W}={replace:!1,resolve:!B,scroll:!0,...S},F=D?p.resolvePath(y):we(B&&N.pathname||"",y);if(F===void 0)throw new Error(`Path '${y}' is not a routable path`);if(R.length>=Mn)throw new Error("Too many redirects");const et=x();(F!==et||W!==$())&&(yn||f.confirm(F,S)&&(R.push({value:et,replace:Q,scroll:O,state:$()}),m("navigate",{value:F,state:W})))})}function Oe(p){return p=p||ke(Je)||fe,(y,S)=>Ee(p,y,S)}function de(p){const y=R[0];y&&(i({...p,replace:y.replace,scroll:y.scroll}),R.length=0)}function he(p,y){const S=Ie(t(),p.pathname),B=K;K="preload";for(let Q in S){const{route:D,params:O}=S[Q];D.component&&D.component.preload&&D.component.preload();const{preload:W}=D;y&&W&&Pt(n(),()=>W({params:O,location:{pathname:p.pathname,search:p.search,hash:p.hash,query:Bt(p),state:null,key:""},intent:"preload"}))}K=B}}function Kn(e,t,n,o){const{base:r,location:i,params:s}=e,{pattern:l,component:c,preload:f}=o().route,d=k(()=>o().path);c&&c.preload&&c.preload();const g=f?f({params:s,location:i,intent:K||"initial"}):void 0;return{parent:t,pattern:l,path:d,outlet:()=>c?a(c,{params:s,location:i,data:g,get children(){return n()}}):n(),resolvePath(h){return we(r.path(),h,d())}}}const Xn=e=>t=>{const{base:n}=t,o=Ge(()=>t.children),r=k(()=>Ft(o(),t.base||""));let i;const s=qn(e,r,()=>i,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(s),a(Nt.Provider,{value:s,get children(){return a(Yn,{routerState:s,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[k(()=>(i=St())&&null),a(Jn,{routerState:s,get branches(){return r()}})]}})}})};function Yn(e){const t=e.routerState.location,n=e.routerState.params,o=k(()=>e.preload&&T(()=>{e.preload({params:n,location:t,intent:Wn()||"initial"})}));return a(kt,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>a(r,{params:n,location:t,get data(){return o()},get children(){return e.children}})})}function Jn(e){const t=[];let n;const o=k(He(e.routerState.matches,(r,i,s)=>{let l=i&&r.length===i.length;const c=[];for(let f=0,d=r.length;f<d;f++){const g=i&&i[f],u=r[f];s&&g&&u.route.key===g.route.key?c[f]=s[f]:(l=!1,t[f]&&t[f](),vt(h=>{t[f]=h,c[f]=Kn(e.routerState,c[f-1]||e.routerState.base,st(()=>o()[f+1]),()=>e.routerState.matches()[f])}))}return t.splice(r.length).forEach(f=>f()),s&&l?s:(n=c[0],c)}));return st(()=>o()&&n)()}const st=e=>()=>a(kt,{get when(){return e()},keyed:!0,children:t=>a(Je.Provider,{value:t,get children(){return t.outlet()}})}),j=e=>{const t=Ge(()=>e.children);return re(e,{get children(){return t()}})};function Qn([e,t],n,o){return[e,o?r=>t(o(r)):t]}function Zn(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,o=Qn(C(n(e.get()),{equals:(r,i)=>r.value===i.value&&r.state===i.state}),void 0,r=>(!t&&e.set(r),r));return e.init&&J(e.init((r=e.get())=>{t=!0,o[1](n(r)),t=!1})),Xn({signal:o,create:e.create,utils:e.utils})}function er(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function tr(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const nr=new Map;function rr(e=!0,t=!1,n="/_server",o){return r=>{const i=r.base.path(),s=r.navigatorFactory(r.base);let l,c;function f(x){return x.namespaceURI==="http://www.w3.org/2000/svg"}function d(x){if(x.defaultPrevented||x.button!==0||x.metaKey||x.altKey||x.ctrlKey||x.shiftKey)return;const w=x.composedPath().find(G=>G instanceof Node&&G.nodeName.toUpperCase()==="A");if(!w||t&&!w.hasAttribute("link"))return;const $=f(w),A=$?w.href.baseVal:w.href;if(($?w.target.baseVal:w.target)||!A&&!w.hasAttribute("state"))return;const R=(w.getAttribute("rel")||"").split(/\s+/);if(w.hasAttribute("download")||R&&R.includes("external"))return;const I=$?new URL(A,document.baseURI):new URL(A);if(!(I.origin!==window.location.origin||i&&I.pathname&&!I.pathname.toLowerCase().startsWith(i.toLowerCase())))return[w,I]}function g(x){const w=d(x);if(!w)return;const[$,A]=w,N=r.parsePath(A.pathname+A.search+A.hash),R=$.getAttribute("state");x.preventDefault(),s(N,{resolve:!1,replace:$.hasAttribute("replace"),scroll:!$.hasAttribute("noscroll"),state:R?JSON.parse(R):void 0})}function u(x){const w=d(x);if(!w)return;const[$,A]=w;o&&(A.pathname=o(A.pathname)),r.preloadRoute(A,$.getAttribute("preload")!=="false")}function h(x){clearTimeout(l);const w=d(x);if(!w)return c=null;const[$,A]=w;c!==$&&(o&&(A.pathname=o(A.pathname)),l=setTimeout(()=>{r.preloadRoute(A,$.getAttribute("preload")!=="false"),c=$},20))}function m(x){if(x.defaultPrevented)return;let w=x.submitter&&x.submitter.hasAttribute("formaction")?x.submitter.getAttribute("formaction"):x.target.getAttribute("action");if(!w)return;if(!w.startsWith("https://action/")){const A=new URL(w,Rt);if(w=r.parsePath(A.pathname+A.search),!w.startsWith(n))return}if(x.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const $=nr.get(w);if($){x.preventDefault();const A=new FormData(x.target,x.submitter);$.call({r,f:x.target},x.target.enctype==="multipart/form-data"?A:new URLSearchParams(A))}}_t(["click","submit"]),document.addEventListener("click",g),e&&(document.addEventListener("mousemove",h,{passive:!0}),document.addEventListener("focusin",u,{passive:!0}),document.addEventListener("touchstart",u,{passive:!0})),document.addEventListener("submit",m),J(()=>{document.removeEventListener("click",g),e&&(document.removeEventListener("mousemove",h),document.removeEventListener("focusin",u),document.removeEventListener("touchstart",u)),document.removeEventListener("submit",m)})}}function or(e){const t=()=>{const o=window.location.pathname.replace(/^\/+/,"/")+window.location.search,r=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:o+window.location.hash,state:r}},n=Ot();return Zn({get:t,set({value:o,replace:r,scroll:i,state:s}){r?window.history.replaceState(On(s),"",o):window.history.pushState(s,"",o),tr(decodeURIComponent(window.location.hash.slice(1)),i),Ye()},init:o=>er(window,"popstate",Rn(o,r=>{if(r&&r<0)return!n.confirm(r);{const i=t();return!n.confirm(i.value,{state:i.state})}})),create:rr(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:o=>window.history.go(o),beforeLeave:n}})(e)}var ir=_("<a>");function Mt(e){e=re({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=Ke(e,["href","state","class","activeClass","inactiveClass","end"]),n=Dn(()=>e.href),o=Vn(n),r=Ze(),i=k(()=>{const s=n();if(s===void 0)return[!1,!1];const l=X(s.split(/[?#]/,1)[0]).toLowerCase(),c=decodeURI(X(r.pathname).toLowerCase());return[e.end?l===c:c.startsWith(l+"/")||c===l,l===c]});return(()=>{var s=ir();return Xe(s,re(t,{get href(){return o()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i()[0],[e.activeClass]:i()[0],...t.classList}},link:"",get"aria-current"(){return i()[1]?"page":void 0}}),!1,!1),s})()}const sr=b.div`
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
`,lr=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,ar=b.div`
  font-weight: bold;
  font-size: 1.4rem;
`,cr=b(Mt)`
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
`,oe=b.div`
  margin-right: 10px;
  color: white;
  text-decoration: none;
  font-size: 1.0rem;
`,ie=b(Mt)`
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
`,ur=b.div`
  display: flex;
  align-items: center;
`;function fr(){const e=Ze();return Y(()=>{console.log("Header 컴포넌트 나타남",e.pathname),J(()=>{console.log("Header cleanUp 함수")})}),a(sr,{get children(){return[a(lr,{get children(){return[a(ar,{get children(){return a(cr,{href:"/",get active(){return e.pathname==="/"}})}}),a(oe,{get children(){return a(ie,{href:"/testbet",get active(){return e.pathname==="/testbet"},children:"바카라"})}}),a(oe,{get children(){return a(ie,{href:"/stockcalc",get active(){return e.pathname==="/stockcalc"},children:"주식계산기"})}}),a(oe,{get children(){return a(ie,{href:"/test",get active(){return e.pathname==="/test"},children:"테스트"})}})]}}),a(ur,{get children(){return[a(oe,{style:{"margin-right":"10px"},get children(){return a(ie,{href:"/signin",get active(){return e.pathname==="/signin"},children:"로그인"})}}),a(oe,{get children(){return a(ie,{href:"/signup",get active(){return e.pathname==="/signup"},children:"회원가입"})}})]}})]}})}const dr=()=>{window.open("https://github.com/dwerasd","_blank")},hr=b.div`
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
`,gr=b.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`,pr=b.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`,mr=b.div`
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
`,br=b(mr)`
  /* MenuLink 컴포넌트를 상속받아 스타일 변경 가능 */
`;function xr(){return a(hr,{get children(){return[a(gr,{}),a(pr,{get children(){return a(br,{onClick:dr,children:"Github"})}})]}})}const yr=b.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;  // 추가
`,wr=b.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,vr=b.main`
  flex-grow: 1;
  padding: 20px;
  margin-top: 5vh;  // 헤더 높이만큼 여백
  width: 100%;
  min-height: calc(100vh - 10vh);  // 뷰포트 높이 고려
  padding-bottom: 5vh;  // footer 높이만큼 추가
  margin-bottom: 5vh;  // footer 높이만큼 여백
`;function Sr(e){return Y(()=>{console.log("Layout 컴포넌트 나타남"),J(()=>{console.log("Layout cleanUp 함수")})}),a(yr,{get children(){return a(wr,{get children(){return[a(fr,{}),a(vr,{get children(){return e.children}}),a(xr,{})]}})}})}var Pr=_("<h4>메인 페이지");const $r=b.div`
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
`;function Ar(){return Y(()=>{console.log("Main 시작"),J(()=>{console.log("Main 소멸")})}),a($r,{get children(){return Pr()}})}var Lr=_("<h4>테스트 페이지");const Cr=b("div")`
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
`,kr=b("div")`
  font-size: 100%;
  align-items: center;
  color: white;
`;function ee(){return Ze(),Y(()=>{console.log("Test 시작"),J(()=>{console.log("Test 소멸")})}),a(Cr,{get children(){return a(kr,{get children(){return Lr()}})}})}var _r=_("<div>에 <!>원을 베팅하세요."),Er=_("<div>게임 결과:"),Or=_("<h3>베팅 기록"),Rr=_("<ul>"),Br=_("<li>");const Tr=b("div")`
  position: fixed;
  top: 5vh;
  left: 0;
  width: 100%;
  height: 95vh;
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  overflow-y: auto;
`,Ir=b("h1")`
  color: #fff;
  margin-bottom: 25px;
  font-size: 1.8rem;
  text-align: left;
`,Nr=b("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin-left: 20px;
`,lt=b("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
`,at=b("label")`
  font-weight: bold;
  color: #eee;
  font-size: 0.95rem;
  width: 100%;
  text-align: left;
  margin-left: 5px;
`,ct=b("div")`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
`,pe=b("input")`
  width: 200px;
  padding: 10px;
  border: 1px solid #444;
  background: #333;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 5px;
`,me=b("button")`
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
`,ut=b("div")`
  padding: 12px;
  background: #2a2a2a;
  border-radius: 6px;
  line-height: 1.6;
  margin-top: 8px;
  width: 100%;
  text-align: left;
`,ft=b("span")`
  background-color: #ffeb3b;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,dt=b("span")`
  background-color: pink;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,jr=b("span")`
  display: inline-block;
  width: 80px;
  text-align: center;
  background-color: lightblue;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,Fr=b("span")`
  background-color: lightgreen;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,Mr=b("div")`
  padding: 15px;
  background: #1e1e1e;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 1.1rem;
  text-align: left;
`,Ur=b("div")`
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
`,Dr=b("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 5px;
`,Vr=()=>{const[e,t]=C(3e6),[n,o]=C(1e3),[r,i]=C([n(),n(),n(),n()]),[s,l]=C("1.95"),[c,f]=C("1.95"),[d,g]=C(0),[u,h]=C(n()*2),[m,x]=C(e()),[w,$]=C(0),[A,N]=C([]),[R,I]=C("뱅커"),G=p=>{const y=parseInt(p.target.value,10);t(y)},ue=p=>{const y=parseInt(p.target.value,10);t(e()),o(y),i([y,y,y,y]),h(y*2),x(e()),$(0),N([]),g(0),I("뱅커")},_e=p=>{l(p.target.value)},fe=p=>{f(p.target.value)},Ee=()=>{i([n(),n(),n(),n()]),h(n()*2),x(e()),$(0),N([]),g(0),I("뱅커")},Oe=()=>{I(R()==="뱅커"?"플레이어":"뱅커")},de=p=>{N(y=>{const S=[...y(),p];return S.length>30?S.slice(1):S})},he=p=>{const y=R(),S=y==="뱅커"?"B":"P";let B=w()-u(),Q=m()-u();const D=S===p?"O":"X";let O=[...r()];if(S===p){const F=parseFloat(S==="P"?c():s());B+=u()*F,Q+=u()*F,O.shift(),O.pop()}else O.push(u());const W=`[${d()}] : ${S}(${u()}) => ${p}(${u()})${D}(${B})`;I(y==="뱅커"?"플레이어":"뱅커"),i(O),h(O.length===0?n()*2:O.length===1?O[0]:O[0]+O[O.length-1]),$(B),x(Q),g(F=>F+1),de(W),O.length===0&&(i([n(),n(),n(),n()]),de("----------------------------------------"))};return a(Tr,{get children(){return[a(Ir,{children:"🎲 베팅 게임"}),a(Nr,{get children(){return[a(lt,{get children(){return[a(at,{children:"초기 설정"}),a(ct,{get children(){return[a(pe,{type:"number",get value(){return e()},onInput:G,placeholder:"초기 잔고"}),a(pe,{type:"number",get value(){return n()},onInput:ue,placeholder:"베팅 기준 금액"})]}})]}}),a(lt,{get children(){return[a(at,{children:"배당률 설정"}),a(ct,{get children(){return[a(pe,{type:"number",step:"0.01",get value(){return s()},onInput:_e,placeholder:"뱅커 배당률"}),a(pe,{type:"number",step:"0.01",get value(){return c()},onInput:fe,placeholder:"플레이어 배당률"})]}})]}}),a(ut,{get children(){return["잔고: ",a(dt,{get children(){return m().toLocaleString()}}),"원 수익금: ",a(dt,{get children(){return w().toLocaleString()}}),"원 총 베팅 횟수: ",a(ft,{get children(){return d()}}),"회",a(me,{onClick:Ee,children:"초기화"})]}}),a(Mr,{get children(){return[(()=>{var p=_r(),y=p.firstChild,S=y.nextSibling;return S.nextSibling,L(p,a(jr,{get children(){return R()}}),y),L(p,a(Fr,{get children(){return u().toLocaleString()}}),S),L(p,a(me,{onClick:Oe,children:"뒤집기"}),null),p})(),(()=>{var p=Er();return p.firstChild,p.style.setProperty("margin-top","15px"),L(p,a(me,{onClick:()=>he("B"),children:"뱅커 승리"}),null),L(p,a(me,{onClick:()=>he("P"),children:"플레이어 승리"}),null),p})()]}}),a(ut,{get children(){return["배팅 배열:",a(Dr,{get children(){return r().map((p,y)=>a(ft,{get children(){return p.toLocaleString()}}))}})]}}),a(Ur,{get children(){return[Or(),(()=>{var p=Rr();return L(p,()=>A().map((y,S)=>(()=>{var B=Br();return L(B,y),B})())),p})()]}})]}})]}})};var Hr=_("<div><br>원에 <!>주를 추가 매수 하려면 <!>원이 필요합니다."),zr=_("<div>");b("div")`
  position: fixed;
  top: 5vh;
  left: 0;
  width: 100%;
  height: 95vh;
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  overflow-y: auto;
`;const Gr=b("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin-left: 20px;
`,be=b("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
`,Wr=b("h1")`
  color: #fff;
  margin-bottom: 25px;
  font-size: 1.8rem;
  text-align: left;
`,xe=b("label")`
  font-weight: bold;
  color: #eee;
  font-size: 0.95rem;
  width: 100%;
  text-align: left;
  margin-left: 5px;
`,te=b("input")`
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
`,ye=b("div")`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
`,qr=b("div")`
  padding: 12px;
  background: #2a2a2a;
  border-radius: 6px;
  line-height: 1.6;
  margin-top: 8px;
  width: 100%;
  text-align: left;
`,ne=b("span")`
  background-color: #ffeb3b;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,Kr=()=>{const[e,t]=C({purchasePrice:0,currentShares:0,currentPrice:0,additionalPurchaseAmount:0,plannedPurchaseShares:0,commission:.23,plannedSalePrice:0,scrollValue:0}),n=r=>{const{name:i,value:s}=r.target,l=parseFloat(s)||0;t(c=>{const f={...c};return f[i]=l,i==="additionalPurchaseAmount"?f.plannedPurchaseShares=f.currentPrice?l/f.currentPrice:0:i==="plannedPurchaseShares"?(f.additionalPurchaseAmount=l*f.currentPrice,f.scrollValue=l):i==="scrollValue"&&(f.plannedPurchaseShares=l,f.additionalPurchaseAmount=l*f.currentPrice),f})},o=()=>{const r=e().currentShares+e().plannedPurchaseShares,i=e().purchasePrice*e().currentShares+e().additionalPurchaseAmount+e().commission,s=r>0?i/r:0,l=e().plannedSalePrice*e().plannedPurchaseShares,c=l-e().plannedPurchaseShares*s-e().commission;return{saleRevenue:l||0,adjustedAveragePrice:s||0,netProfit:c||0}};return(()=>{var r=zr();return L(r,a(Wr,{children:"📈 주식 평단가 계산기"}),null),L(r,a(Gr,{get children(){return[a(be,{get children(){return[a(xe,{children:"거래 수수료 (%)"}),a(ye,{get children(){return a(te,{type:"number",name:"commission",get value(){return e().commission},onInput:n,step:"0.01",placeholder:"0.23%"})}})]}}),a(be,{get children(){return[a(xe,{children:"현재 보유 정보(평단가, 주식수)"}),a(ye,{get children(){return[a(te,{type:"number",name:"purchasePrice",get value(){return e().purchasePrice},onInput:n,placeholder:"평균 매입가"}),a(te,{type:"number",name:"currentShares",get value(){return e().currentShares},onInput:n,placeholder:"보유 주식 수"})]}})]}}),a(be,{get children(){return[a(xe,{children:"현재 주가"}),a(ye,{get children(){return a(te,{type:"number",name:"currentPrice",get value(){return e().currentPrice},onInput:n,placeholder:"현재 주가"})}})]}}),a(be,{get children(){return[a(xe,{children:"추가 매수 설정"}),a(ye,{get children(){return[a(te,{type:"number",name:"plannedPurchaseShares",get value(){return e().scrollValue.toFixed(0)},onInput:n,placeholder:"매수할 주식 수"}),a(te,{type:"range",name:"scrollValue",min:"0",max:"10000",get value(){return e().scrollValue},onInput:n})]}}),a(qr,{get children(){return[a(ne,{get children(){return e().scrollValue}}),"주 추가 매수 시 → 총 보유 주식수: ",a(ne,{get children(){return e().currentShares+Number(e().scrollValue)}}),"주, 조정 평단가: ",a(ne,{get children(){return o().adjustedAveragePrice.toFixed(0).toLocaleString()}}),"원",(()=>{var i=Hr(),s=i.firstChild,l=s.nextSibling,c=l.nextSibling,f=c.nextSibling,d=f.nextSibling;return d.nextSibling,L(i,a(ne,{get children(){return e().currentPrice}}),l),L(i,a(ne,{get children(){return e().scrollValue}}),c),L(i,a(ne,{get children(){return e().additionalPurchaseAmount.toLocaleString()}}),d),i})()]}})]}})]}}),null),r})()};var Xr=_("<div><div>"),Yr=_("<p>저항: <!>원"),Jr=_("<p>지지: <!>원"),Qr=_("<p>위험: <!>원"),Zr=_("<div><div></div><div>"),eo=_("<p>고가: <!>원"),to=_("<p>평가: <!>원"),no=_("<p>저가: <!>원");const ro=b("div")`
  position: fixed;
  top: 5vh;
  left: 0;
  width: 100%;
  height: 95vh;
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  overflow-y: auto;
`,ht=b("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin-left: 20px;
`,gt=b("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
`,pt=b("h1")`
  color: #fff;
  margin-bottom: 25px;
  font-size: 1.8rem;
  text-align: left;
`,Ne=b("label")`
  font-weight: bold;
  color: #eee;
  font-size: 0.95rem;
  width: 100px;
  text-align: left;
  margin-left: 5px;
`,je=b("input")`
  width: ${e=>e.width||"200px"};
  padding: 10px;
  border: 1px solid #444;
  background: #333;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 5px;
`,mt=b("div")`
  padding: 15px;
  background: #1e1e1e;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 1.1rem;
  text-align: left;
  
  p {
    margin: 10px 0;
  }
`,se=b("span")`
  background-color: #ffeb3b;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,bt=b(se)`
  background-color: #ff6b6b;
`;function oo(){const[e,t]=C(""),[n,o]=C({val1:0,val2:0,val3:0}),[r,i]=C(""),[s,l]=C(""),[c,f]=C({val1:0,val2:0,val3:0}),d=u=>u<2e3?1:u<5e3?5:u<2e4?10:u<5e4?50:u<2e5?100:u<5e5?500:1e3,g=u=>{const h=d(u);return Math.floor(u/h)*h};return Y(()=>{const u=parseFloat(e());if(!isNaN(u)){const h=m=>g(u*m);o({val1:h(.77),val2:h(.693),val3:h(.65835)})}}),Y(()=>{const u=parseFloat(r()),h=parseFloat(s());if(!isNaN(u)&&!isNaN(h)){const m=(u+h)/2,x=w=>g(w);f({val1:x((m+u)/2),val2:x(m),val3:x((m+h)/2)})}}),a(ro,{get children(){return[a(pt,{children:"💰 가격 전환 계산기"}),a(ht,{get children(){return a(gt,{get children(){return[(()=>{var u=Xr(),h=u.firstChild;return u.style.setProperty("display","flex"),u.style.setProperty("gap","20px"),L(h,a(Ne,{children:"기준가:"}),null),L(h,a(je,{type:"number",get value(){return e()},onInput:m=>t(m.target.value),placeholder:"기준가 입력"}),null),u})(),a(mt,{get children(){return[(()=>{var u=Yr(),h=u.firstChild,m=h.nextSibling;return m.nextSibling,L(u,a(se,{get children(){return n().val1.toLocaleString()}}),m),u})(),(()=>{var u=Jr(),h=u.firstChild,m=h.nextSibling;return m.nextSibling,L(u,a(se,{get children(){return n().val2.toLocaleString()}}),m),u})(),(()=>{var u=Qr(),h=u.firstChild,m=h.nextSibling;return m.nextSibling,L(u,a(bt,{get children(){return n().val3.toLocaleString()}}),m),u})()]}})]}})}}),a(pt,{children:"📊 고가-저가 분석기"}),a(ht,{get children(){return a(gt,{get children(){return[(()=>{var u=Zr(),h=u.firstChild,m=h.nextSibling;return u.style.setProperty("display","flex"),u.style.setProperty("gap","20px"),L(h,a(Ne,{children:"고가:"}),null),L(h,a(je,{type:"number",get value(){return r()},onInput:x=>i(x.target.value),placeholder:"고가 입력"}),null),L(m,a(Ne,{children:"저가:"}),null),L(m,a(je,{type:"number",get value(){return s()},onInput:x=>l(x.target.value),placeholder:"저가 입력"}),null),u})(),a(mt,{get children(){return[(()=>{var u=eo(),h=u.firstChild,m=h.nextSibling;return m.nextSibling,L(u,a(se,{get children(){return c().val1.toLocaleString()}}),m),u})(),(()=>{var u=to(),h=u.firstChild,m=h.nextSibling;return m.nextSibling,L(u,a(se,{get children(){return c().val2.toLocaleString()}}),m),u})(),(()=>{var u=no(),h=u.firstChild,m=h.nextSibling;return m.nextSibling,L(u,a(bt,{get children(){return c().val3.toLocaleString()}}),m),u})()]}})]}})}}),a(Kr,{})]}})}function io(){return Y(()=>{console.log("App 컴포넌트 나타남"),J(()=>{console.log("App cleanUp 함수")})}),a(or,{get children(){return a(j,{path:"/",component:Sr,get children(){return[a(j,{path:"/",component:Ar}),a(j,{path:"/trends",component:ee}),a(j,{path:"/custom",component:ee}),a(j,{path:"/signin",component:ee}),a(j,{path:"/signup",component:ee}),a(j,{path:"/test",component:ee}),a(j,{path:"/testbet",component:Vr}),a(j,{path:"/stockcalc",component:oo}),a(j,{path:"/*",component:ee})]}})}})}const so=b.div`
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
`;document.getElementById("root");an(()=>[a(so,{}),a(io,{})],document.getElementById("root"));
