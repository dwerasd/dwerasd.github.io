(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Ft=(e,t)=>e===t,ve=Symbol("solid-proxy"),bt=typeof Proxy=="function",Se={equals:Ft};let yt=At;const V=1,Pe=2,xt={owned:null,cleanups:null,context:null,owner:null};var w=null;let Re=null,Mt=null,A=null,E=null,U=null,Ce=0;function wt(e,t){const n=A,o=w,r=e.length===0,i=t===void 0?o:t,s=r?xt:{owned:null,cleanups:null,context:i?i.context:null,owner:i},l=r?e:()=>e(()=>T(()=>se(s)));w=s,A=null;try{return H(l,!0)}finally{A=n,w=o}}function L(e,t){t=t?Object.assign({},Se,t):Se;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=r=>(typeof r=="function"&&(r=r(n.value)),$t(n,r));return[Pt.bind(n),o]}function D(e,t,n){const o=Ge(e,t,!1,V);ae(o)}function X(e,t,n){yt=zt;const o=Ge(e,t,!1,V);o.user=!0,U?U.push(o):ae(o)}function k(e,t,n){n=n?Object.assign({},Se,n):Se;const o=Ge(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,ae(o),Pt.bind(o)}function Ut(e){return H(e,!1)}function T(e){if(A===null)return e();const t=A;A=null;try{return e()}finally{A=t}}function Ve(e,t,n){const o=Array.isArray(e);let r,i=n&&n.defer;return s=>{let l;if(o){l=Array(e.length);for(let f=0;f<e.length;f++)l[f]=e[f]()}else l=e();if(i)return i=!1,s;const c=T(()=>t(l,r,s));return r=l,c}}function Y(e){return w===null||(w.cleanups===null?w.cleanups=[e]:w.cleanups.push(e)),e}function vt(){return w}function St(e,t){const n=w,o=A;w=e,A=null;try{return H(t,!0)}catch(r){We(r)}finally{w=n,A=o}}function Dt(e){const t=A,n=w;return Promise.resolve().then(()=>{A=t,w=n;let o;return H(e,!1),A=w=null,o?o.done:void 0})}const[io,so]=L(!1);function He(e,t){const n=Symbol("context");return{id:n,Provider:Wt(n),defaultValue:e}}function ke(e){let t;return w&&w.context&&(t=w.context[e.id])!==void 0?t:e.defaultValue}function ze(e){const t=k(e),n=k(()=>je(t()));return n.toArray=()=>{const o=n();return Array.isArray(o)?o:o!=null?[o]:[]},n}function Pt(){if(this.sources&&this.state)if(this.state===V)ae(this);else{const e=E;E=null,H(()=>Ae(this),!1),E=e}if(A){const e=this.observers?this.observers.length:0;A.sources?(A.sources.push(this),A.sourceSlots.push(e)):(A.sources=[this],A.sourceSlots=[e]),this.observers?(this.observers.push(A),this.observerSlots.push(A.sources.length-1)):(this.observers=[A],this.observerSlots=[A.sources.length-1])}return this.value}function $t(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&H(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],s=Re&&Re.running;s&&Re.disposed.has(i),(s?!i.tState:!i.state)&&(i.pure?E.push(i):U.push(i),i.observers&&Lt(i)),s||(i.state=V)}if(E.length>1e6)throw E=[],new Error},!1)),t}function ae(e){if(!e.fn)return;se(e);const t=Ce;Vt(e,e.value,t)}function Vt(e,t,n){let o;const r=w,i=A;A=w=e;try{o=e.fn(t)}catch(s){return e.pure&&(e.state=V,e.owned&&e.owned.forEach(se),e.owned=null),e.updatedAt=n+1,We(s)}finally{A=i,w=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?$t(e,o):e.value=o,e.updatedAt=n)}function Ge(e,t,n,o=V,r){const i={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:w?w.context:null,pure:n};return w===null||w!==xt&&(w.owned?w.owned.push(i):w.owned=[i]),i}function $e(e){if(e.state===0)return;if(e.state===Pe)return Ae(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ce);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===V)ae(e);else if(e.state===Pe){const o=E;E=null,H(()=>Ae(e,t[0]),!1),E=o}}function H(e,t){if(E)return e();let n=!1;t||(E=[]),U?n=!0:U=[],Ce++;try{const o=e();return Ht(n),o}catch(o){n||(U=null),E=null,We(o)}}function Ht(e){if(E&&(At(E),E=null),e)return;const t=U;U=null,t.length&&H(()=>yt(t),!1)}function At(e){for(let t=0;t<e.length;t++)$e(e[t])}function zt(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:$e(o)}for(t=0;t<n;t++)$e(e[t])}function Ae(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const r=o.state;r===V?o!==t&&(!o.updatedAt||o.updatedAt<Ce)&&$e(o):r===Pe&&Ae(o,t)}}}function Lt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=Pe,n.pure?E.push(n):U.push(n),n.observers&&Lt(n))}}function se(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),o=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),s=n.observerSlots.pop();o<r.length&&(i.sourceSlots[s]=o,r[o]=i,n.observerSlots[o]=s)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)se(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)se(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Gt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function We(e,t=w){throw Gt(e)}function je(e){if(typeof e=="function"&&!e.length)return je(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const o=je(e[n]);Array.isArray(o)?t.push.apply(t,o):t.push(o)}return t}return e}function Wt(e,t){return function(o){let r;return D(()=>r=T(()=>(w.context={...w.context,[e]:o.value},ze(()=>o.children))),void 0),r}}function a(e,t){return T(()=>e(t||{}))}function ge(){return!0}const Fe={get(e,t,n){return t===ve?n:e.get(t)},has(e,t){return t===ve?!0:e.has(t)},set:ge,deleteProperty:ge,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ge,deleteProperty:ge}},ownKeys(e){return e.keys()}};function Be(e){return(e=typeof e=="function"?e():e)?e:{}}function qt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function ne(...e){let t=!1;for(let s=0;s<e.length;s++){const l=e[s];t=t||!!l&&ve in l,e[s]=typeof l=="function"?(t=!0,k(l)):l}if(bt&&t)return new Proxy({get(s){for(let l=e.length-1;l>=0;l--){const c=Be(e[l])[s];if(c!==void 0)return c}},has(s){for(let l=e.length-1;l>=0;l--)if(s in Be(e[l]))return!0;return!1},keys(){const s=[];for(let l=0;l<e.length;l++)s.push(...Object.keys(Be(e[l])));return[...new Set(s)]}},Fe);const n={},o=Object.create(null);for(let s=e.length-1;s>=0;s--){const l=e[s];if(!l)continue;const c=Object.getOwnPropertyNames(l);for(let f=c.length-1;f>=0;f--){const u=c[f];if(u==="__proto__"||u==="constructor")continue;const h=Object.getOwnPropertyDescriptor(l,u);if(!o[u])o[u]=h.get?{enumerable:!0,configurable:!0,get:qt.bind(n[u]=[h.get.bind(l)])}:h.value!==void 0?h:void 0;else{const d=n[u];d&&(h.get?d.push(h.get.bind(l)):h.value!==void 0&&d.push(()=>h.value))}}}const r={},i=Object.keys(o);for(let s=i.length-1;s>=0;s--){const l=i[s],c=o[l];c&&c.get?Object.defineProperty(r,l,c):r[l]=c?c.value:void 0}return r}function qe(e,...t){if(bt&&ve in e){const r=new Set(t.length>1?t.flat():t[0]),i=t.map(s=>new Proxy({get(l){return s.includes(l)?e[l]:void 0},has(l){return s.includes(l)&&l in e},keys(){return s.filter(l=>l in e)}},Fe));return i.push(new Proxy({get(s){return r.has(s)?void 0:e[s]},has(s){return r.has(s)?!1:s in e},keys(){return Object.keys(e).filter(s=>!r.has(s))}},Fe)),i}const n={},o=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,r),s=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let l=!1,c=0;for(const f of t)f.includes(r)&&(l=!0,s?o[c][r]=i.value:Object.defineProperty(o[c],r,i)),++c;l||(s?n[r]=i.value:Object.defineProperty(n,r,i))}return[...o,n]}const Kt=e=>`Stale read from <${e}>.`;function Ct(e){const t=e.keyed,n=k(()=>e.when,void 0,{equals:(o,r)=>t?o===r:!o==!r});return k(()=>{const o=n();if(o){const r=e.children;return typeof r=="function"&&r.length>0?T(()=>r(t?o:()=>{if(!T(n))throw Kt("Show");return e.when})):r}return e.fallback},void 0,void 0)}const Xt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Yt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Xt]),Jt=new Set(["innerHTML","textContent","innerText","children"]),Qt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Zt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function en(e,t){const n=Zt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const tn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),nn=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),rn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function on(e,t,n){let o=n.length,r=t.length,i=o,s=0,l=0,c=t[r-1].nextSibling,f=null;for(;s<r||l<i;){if(t[s]===n[l]){s++,l++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===s){const u=i<o?l?n[l-1].nextSibling:n[i-l]:c;for(;l<i;)e.insertBefore(n[l++],u)}else if(i===l)for(;s<r;)(!f||!f.has(t[s]))&&t[s].remove(),s++;else if(t[s]===n[i-1]&&n[l]===t[r-1]){const u=t[--r].nextSibling;e.insertBefore(n[l++],t[s++].nextSibling),e.insertBefore(n[--i],u),t[r]=n[i]}else{if(!f){f=new Map;let h=l;for(;h<i;)f.set(n[h],h++)}const u=f.get(t[s]);if(u!=null)if(l<u&&u<i){let h=s,d=1,m;for(;++h<r&&h<i&&!((m=f.get(t[h]))==null||m!==u+d);)d++;if(d>u-l){const v=t[s];for(;l<u;)e.insertBefore(n[l++],v)}else e.replaceChild(n[l++],t[s++])}else s++;else t[s++].remove()}}}const et="_$DX_DELEGATE";function sn(e,t,n,o={}){let r;return wt(i=>{r=i,t===document?e():C(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{r(),t.textContent=""}}function O(e,t,n){let o;const r=()=>{const s=document.createElement("template");return s.innerHTML=e,n?s.content.firstChild.firstChild:s.content.firstChild},i=t?()=>T(()=>document.importNode(o||(o=r()),!0)):()=>(o||(o=r())).cloneNode(!0);return i.cloneNode=i,i}function kt(e,t=window.document){const n=t[et]||(t[et]=new Set);for(let o=0,r=e.length;o<r;o++){const i=e[o];n.has(i)||(n.add(i),t.addEventListener(i,mn))}}function Me(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ln(e,t,n,o){o==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,o)}function an(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)}function cn(e,t){t==null?e.removeAttribute("class"):e.className=t}function un(e,t,n,o){if(o)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n,typeof n!="function"&&n)}function fn(e,t,n={}){const o=Object.keys(t||{}),r=Object.keys(n);let i,s;for(i=0,s=r.length;i<s;i++){const l=r[i];!l||l==="undefined"||t[l]||(tt(e,l,!1),delete n[l])}for(i=0,s=o.length;i<s;i++){const l=o[i],c=!!t[l];!l||l==="undefined"||n[l]===c||!c||(tt(e,l,!0),n[l]=c)}return n}function dn(e,t,n){if(!t)return n?Me(e,"style"):t;const o=e.style;if(typeof t=="string")return o.cssText=t;typeof n=="string"&&(o.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&o.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(o.setProperty(i,r),n[i]=r);return n}function Ke(e,t={},n,o){const r={};return o||D(()=>r.children=le(e,t.children,r.children)),D(()=>typeof t.ref=="function"&&hn(t.ref,e)),D(()=>gn(e,t,n,!0,r,!0)),r}function hn(e,t,n){return T(()=>e(t,n))}function C(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return le(e,t,o,n);D(r=>le(e,t(),r,n),o)}function gn(e,t,n,o,r={},i=!1){t||(t={});for(const s in r)if(!(s in t)){if(s==="children")continue;r[s]=nt(e,s,null,r[s],n,i,t)}for(const s in t){if(s==="children")continue;const l=t[s];r[s]=nt(e,s,l,r[s],n,i,t)}}function pn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function tt(e,t,n){const o=t.trim().split(/\s+/);for(let r=0,i=o.length;r<i;r++)e.classList.toggle(o[r],n)}function nt(e,t,n,o,r,i,s){let l,c,f,u,h;if(t==="style")return dn(e,n,o);if(t==="classList")return fn(e,n,o);if(n===o)return o;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const d=t.slice(3);o&&e.removeEventListener(d,o,typeof o!="function"&&o),n&&e.addEventListener(d,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const d=t.slice(10);o&&e.removeEventListener(d,o,!0),n&&e.addEventListener(d,n,!0)}else if(t.slice(0,2)==="on"){const d=t.slice(2).toLowerCase(),m=tn.has(d);if(!m&&o){const v=Array.isArray(o)?o[0]:o;e.removeEventListener(d,v)}(m||n)&&(un(e,d,n,m),m&&kt([d]))}else if(t.slice(0,5)==="attr:")Me(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")an(e,t.slice(5),n);else if((h=t.slice(0,5)==="prop:")||(f=Jt.has(t))||!r&&((u=en(t,e.tagName))||(c=Yt.has(t)))||(l=e.nodeName.includes("-")||"is"in s))h&&(t=t.slice(5),c=!0),t==="class"||t==="className"?cn(e,n):l&&!c&&!f?e[pn(t)]=n:e[u||t]=n;else{const d=r&&t.indexOf(":")>-1&&rn[t.split(":")[0]];d?ln(e,d,t,n):Me(e,Qt[t]||t,n)}return n}function mn(e){let t=e.target;const n=`$$${e.type}`,o=e.target,r=e.currentTarget,i=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),s=()=>{const c=t[n];if(c&&!t.disabled){const f=t[`${n}Data`];if(f!==void 0?c.call(t,f,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},l=()=>{for(;s()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();i(c[0]);for(let f=0;f<c.length-2&&(t=c[f],!!s());f++){if(t._$host){t=t._$host,l();break}if(t.parentNode===r)break}}else l();i(o)}function le(e,t,n,o,r){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,s=o!==void 0;if(e=s&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(t=t.toString(),t===n))return n;if(s){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=J(e,n,o,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean")n=J(e,n,o);else{if(i==="function")return D(()=>{let l=t();for(;typeof l=="function";)l=l();n=le(e,l,n,o)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(Ue(l,t,n,r))return D(()=>n=le(e,l,n,o,!0)),()=>n;if(l.length===0){if(n=J(e,n,o),s)return n}else c?n.length===0?rt(e,l,o):on(e,n,l):(n&&J(e),rt(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(s)return n=J(e,n,o,t);J(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ue(e,t,n,o){let r=!1;for(let i=0,s=t.length;i<s;i++){let l=t[i],c=n&&n[e.length],f;if(!(l==null||l===!0||l===!1))if((f=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))r=Ue(e,l,c)||r;else if(f==="function")if(o){for(;typeof l=="function";)l=l();r=Ue(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||r}else e.push(l),r=!0;else{const u=String(l);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return r}function rt(e,t,n=null){for(let o=0,r=t.length;o<r;o++)e.insertBefore(t[o],n)}function J(e,t,n,o){if(n===void 0)return e.textContent="";const r=o||document.createTextNode("");if(t.length){let i=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(r!==l){const c=l.parentNode===e;!i&&!s?c?e.replaceChild(r,l):e.insertBefore(r,n):c&&l.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}const bn=!1,yn="http://www.w3.org/2000/svg";function xn(e,t=!1){return t?document.createElementNS(yn,e):document.createElement(e)}function wn(e){const[t,n]=qe(e,["component"]),o=k(()=>t.component);return k(()=>{const r=o();switch(typeof r){case"function":return T(()=>r(n));case"string":const i=nn.has(r),s=xn(r,i);return Ke(s,n,i),s}})}let vn={data:""},Sn=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||vn,Pn=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,$n=/\/\*[^]*?\*\/|  +/g,ot=/\n+/g,W=(e,t)=>{let n="",o="",r="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+s+";":o+=i[1]=="f"?W(s,i):i+"{"+W(s,i[1]=="k"?"":t)+"}":typeof s=="object"?o+=W(s,t?t.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=W.p?W.p(i,s):i+":"+s+";")}return n+(t&&r?t+"{"+r+"}":r)+o},M={},_t=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+_t(e[n]);return t}return e},An=(e,t,n,o,r)=>{let i=_t(e),s=M[i]||(M[i]=(c=>{let f=0,u=11;for(;f<c.length;)u=101*u+c.charCodeAt(f++)>>>0;return"go"+u})(i));if(!M[s]){let c=i!==e?e:(f=>{let u,h,d=[{}];for(;u=Pn.exec(f.replace($n,""));)u[4]?d.shift():u[3]?(h=u[3].replace(ot," ").trim(),d.unshift(d[0][h]=d[0][h]||{})):d[0][u[1]]=u[2].replace(ot," ").trim();return d[0]})(e);M[s]=W(r?{["@keyframes "+s]:c}:c,n?"":"."+s)}let l=n&&M.g?M.g:null;return n&&(M.g=M[s]),((c,f,u,h)=>{h?f.data=f.data.replace(h,c):f.data.indexOf(c)===-1&&(f.data=u?c+f.data:f.data+c)})(M[s],t,o,l),s},Ln=(e,t,n)=>e.reduce((o,r,i)=>{let s=t[i];if(s&&s.call){let l=s(n),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;s=c?"."+c:l&&typeof l=="object"?l.props?"":W(l,""):l===!1?"":l}return o+r+(s??"")},"");function Le(e){let t=this||{},n=e.call?e(t.p):e;return An(n.unshift?n.raw?Ln(n,[].slice.call(arguments,1),t.p):n.reduce((o,r)=>Object.assign(o,r&&r.call?r(t.p):r),{}):n,Sn(t.target),t.g,t.o,t.k)}Le.bind({g:1});Le.bind({k:1});const Cn=He();function kn(e){let t=this||{};return(...n)=>{const o=r=>{const i=ke(Cn),s=ne(r,{theme:i}),l=ne(s,{get class(){const m=s.class,v="class"in s&&/^go[0-9]+/.test(m);let y=Le.apply({target:t.target,o:v,p:s,g:t.g},n);return[m,y].filter(Boolean).join(" ")}}),[c,f]=qe(l,["as","theme"]),u=f,h=c.as||e;let d;return typeof h=="function"?d=h(u):t.g==1?(d=document.createElement(h),Ke(d,u)):d=wn(ne({component:h},u)),d};return o.class=r=>T(()=>Le.apply({target:t.target,p:r,g:t.g},n)),o}}const p=new Proxy(kn,{get(e,t){return e(t)}});function Et(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function o(r,i){if(n)return!(n=!1);const s={to:r,options:i,defaultPrevented:!1,preventDefault:()=>s.defaultPrevented=!0};for(const l of e)l.listener({...s,from:l.location,retry:c=>{c&&(n=!0),l.navigate(r,{...i,resolve:!1})}});return!s.defaultPrevented}return{subscribe:t,confirm:o}}let De;function Xe(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),De=window.history.state._depth}Xe();function _n(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function En(e,t){let n=!1;return()=>{const o=De;Xe();const r=o==null?null:De-o;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e()}}const On=/^(?:[a-z0-9]+:)?\/\//i,Rn=/^\/+|(\/)\/+$/g,Ot="http://sr";function K(e,t=!1){const n=e.replace(Rn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function we(e,t,n){if(On.test(t))return;const o=K(e),r=n&&K(n);let i="";return!r||t.startsWith("/")?i=o:r.toLowerCase().indexOf(o.toLowerCase())!==0?i=o+r:i=r,(i||"/")+K(t,!i)}function Bn(e,t){if(e==null)throw new Error(t);return e}function In(e,t){return K(e).replace(/\/*(\*.*)?$/g,"")+K(t)}function Rt(e){const t={};return e.searchParams.forEach((n,o)=>{o in t?Array.isArray(t[o])?t[o].push(n):t[o]=[t[o],n]:t[o]=n}),t}function Tn(e,t,n){const[o,r]=e.split("/*",2),i=o.split("/").filter(Boolean),s=i.length;return l=>{const c=l.split("/").filter(Boolean),f=c.length-s;if(f<0||f>0&&r===void 0&&!t)return null;const u={path:s?"":"/",params:{}},h=d=>n===void 0?void 0:n[d];for(let d=0;d<s;d++){const m=i[d],v=m[0]===":",y=v?c[d]:c[d].toLowerCase(),x=v?m.slice(1):m.toLowerCase();if(v&&Ie(y,h(x)))u.params[x]=y;else if(v||!Ie(y,x))return null;u.path+=`/${y}`}if(r){const d=f?c.slice(-f).join("/"):"";if(Ie(d,h(r)))u.params[r]=d;else return null}return u}}function Ie(e,t){const n=o=>o===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Nn(e){const[t,n]=e.pattern.split("/*",2),o=t.split("/").filter(Boolean);return o.reduce((r,i)=>r+(i.startsWith(":")?2:3),o.length-(n===void 0?0:1))}function Bt(e){const t=new Map,n=vt();return new Proxy({},{get(o,r){return t.has(r)||St(n,()=>t.set(r,k(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function It(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),o=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(o);)r.push(n+=t[1]),o=o.slice(t[0].length);return It(o).reduce((i,s)=>[...i,...r.map(l=>l+s)],[])}const jn=100,Tt=He(),Ye=He(),Je=()=>Bn(ke(Tt),"<A> and 'use' router primitives can be only used inside a Route."),Fn=()=>ke(Ye)||Je().base,Mn=e=>{const t=Fn();return k(()=>t.resolvePath(e()))},Un=e=>{const t=Je();return k(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Qe=()=>Je().location;function Dn(e,t=""){const{component:n,preload:o,load:r,children:i,info:s}=e,l=!i||Array.isArray(i)&&!i.length,c={key:e,component:n,preload:o||r,info:s};return Nt(e.path).reduce((f,u)=>{for(const h of It(u)){const d=In(t,h);let m=l?d:d.split("/*",1)[0];m=m.split("/").map(v=>v.startsWith(":")||v.startsWith("*")?v:encodeURIComponent(v)).join("/"),f.push({...c,originalPath:u,pattern:m,matcher:Tn(m,!l,e.matchFilters)})}return f},[])}function Vn(e,t=0){return{routes:e,score:Nn(e[e.length-1])*1e4-t,matcher(n){const o=[];for(let r=e.length-1;r>=0;r--){const i=e[r],s=i.matcher(n);if(!s)return null;o.unshift({...s,route:i})}return o}}}function Nt(e){return Array.isArray(e)?e:[e]}function jt(e,t="",n=[],o=[]){const r=Nt(e);for(let i=0,s=r.length;i<s;i++){const l=r[i];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const c=Dn(l,t);for(const f of c){n.push(f);const u=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!u)jt(l.children,f.pattern,n,o);else{const h=Vn([...n],o.length);o.push(h)}n.pop()}}}return n.length?o:o.sort((i,s)=>s.score-i.score)}function Te(e,t){for(let n=0,o=e.length;n<o;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Hn(e,t,n){const o=new URL(Ot),r=k(u=>{const h=e();try{return new URL(h,o)}catch{return console.error(`Invalid path ${h}`),u}},o,{equals:(u,h)=>u.href===h.href}),i=k(()=>r().pathname),s=k(()=>r().search,!0),l=k(()=>r().hash),c=()=>"",f=Ve(s,()=>Rt(r()));return{get pathname(){return i()},get search(){return s()},get hash(){return l()},get state(){return t()},get key(){return c()},query:n?n(f):Bt(f)}}let q;function zn(){return q}function Gn(e,t,n,o={}){const{signal:[r,i],utils:s={}}=e,l=s.parsePath||(g=>g),c=s.renderPath||(g=>g),f=s.beforeLeave||Et(),u=we("",o.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!r().value&&i({value:u,replace:!0,scroll:!1});const[h,d]=L(!1);let m;const v=(g,b)=>{b.value===y()&&b.state===S()||(m===void 0&&d(!0),q=g,m=b,Dt(()=>{m===b&&(x(m.value),P(m.state),N[1]($=>$.filter(I=>I.pending)))}).finally(()=>{m===b&&Ut(()=>{q=void 0,g==="navigate"&&fe(m),d(!1),m=void 0})}))},[y,x]=L(r().value),[S,P]=L(r().state),B=Hn(y,S,s.queryWrapper),R=[],N=L([]),z=k(()=>typeof o.transformUrl=="function"?Te(t(),o.transformUrl(B.pathname)):Te(t(),B.pathname)),ce=()=>{const g=z(),b={};for(let $=0;$<g.length;$++)Object.assign(b,g[$].params);return b},_e=s.paramsWrapper?s.paramsWrapper(ce,t):Bt(ce),ue={pattern:u,path:()=>u,outlet:()=>null,resolvePath(g){return we(u,g)}};return D(Ve(r,g=>v("native",g),{defer:!0})),{base:ue,location:B,params:_e,isRouting:h,renderPath:c,parsePath:l,navigatorFactory:Oe,matches:z,beforeLeave:f,preloadRoute:de,singleFlight:o.singleFlight===void 0?!0:o.singleFlight,submissions:N};function Ee(g,b,$){T(()=>{if(typeof b=="number"){b&&(s.go?s.go(b):console.warn("Router integration does not support relative routing"));return}const I=!b||b[0]==="?",{replace:re,resolve:_,scroll:oe,state:F}={replace:!1,resolve:!I,scroll:!0,...$},he=_?g.resolvePath(b):we(I&&B.pathname||"",b);if(he===void 0)throw new Error(`Path '${b}' is not a routable path`);if(R.length>=jn)throw new Error("Too many redirects");const Ze=y();(he!==Ze||F!==S())&&(bn||f.confirm(he,$)&&(R.push({value:Ze,replace:re,scroll:oe,state:S()}),v("navigate",{value:he,state:F})))})}function Oe(g){return g=g||ke(Ye)||ue,(b,$)=>Ee(g,b,$)}function fe(g){const b=R[0];b&&(i({...g,replace:b.replace,scroll:b.scroll}),R.length=0)}function de(g,b){const $=Te(t(),g.pathname),I=q;q="preload";for(let re in $){const{route:_,params:oe}=$[re];_.component&&_.component.preload&&_.component.preload();const{preload:F}=_;b&&F&&St(n(),()=>F({params:oe,location:{pathname:g.pathname,search:g.search,hash:g.hash,query:Rt(g),state:null,key:""},intent:"preload"}))}q=I}}function Wn(e,t,n,o){const{base:r,location:i,params:s}=e,{pattern:l,component:c,preload:f}=o().route,u=k(()=>o().path);c&&c.preload&&c.preload();const h=f?f({params:s,location:i,intent:q||"initial"}):void 0;return{parent:t,pattern:l,path:u,outlet:()=>c?a(c,{params:s,location:i,data:h,get children(){return n()}}):n(),resolvePath(m){return we(r.path(),m,u())}}}const qn=e=>t=>{const{base:n}=t,o=ze(()=>t.children),r=k(()=>jt(o(),t.base||""));let i;const s=Gn(e,r,()=>i,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(s),a(Tt.Provider,{value:s,get children(){return a(Kn,{routerState:s,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[k(()=>(i=vt())&&null),a(Xn,{routerState:s,get branches(){return r()}})]}})}})};function Kn(e){const t=e.routerState.location,n=e.routerState.params,o=k(()=>e.preload&&T(()=>{e.preload({params:n,location:t,intent:zn()||"initial"})}));return a(Ct,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>a(r,{params:n,location:t,get data(){return o()},get children(){return e.children}})})}function Xn(e){const t=[];let n;const o=k(Ve(e.routerState.matches,(r,i,s)=>{let l=i&&r.length===i.length;const c=[];for(let f=0,u=r.length;f<u;f++){const h=i&&i[f],d=r[f];s&&h&&d.route.key===h.route.key?c[f]=s[f]:(l=!1,t[f]&&t[f](),wt(m=>{t[f]=m,c[f]=Wn(e.routerState,c[f-1]||e.routerState.base,it(()=>o()[f+1]),()=>e.routerState.matches()[f])}))}return t.splice(r.length).forEach(f=>f()),s&&l?s:(n=c[0],c)}));return it(()=>o()&&n)()}const it=e=>()=>a(Ct,{get when(){return e()},keyed:!0,children:t=>a(Ye.Provider,{value:t,get children(){return t.outlet()}})}),j=e=>{const t=ze(()=>e.children);return ne(e,{get children(){return t()}})};function Yn([e,t],n,o){return[e,o?r=>t(o(r)):t]}function Jn(e){let t=!1;const n=r=>typeof r=="string"?{value:r}:r,o=Yn(L(n(e.get()),{equals:(r,i)=>r.value===i.value&&r.state===i.state}),void 0,r=>(!t&&e.set(r),r));return e.init&&Y(e.init((r=e.get())=>{t=!0,o[1](n(r)),t=!1})),qn({signal:o,create:e.create,utils:e.utils})}function Qn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Zn(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const er=new Map;function tr(e=!0,t=!1,n="/_server",o){return r=>{const i=r.base.path(),s=r.navigatorFactory(r.base);let l,c;function f(y){return y.namespaceURI==="http://www.w3.org/2000/svg"}function u(y){if(y.defaultPrevented||y.button!==0||y.metaKey||y.altKey||y.ctrlKey||y.shiftKey)return;const x=y.composedPath().find(z=>z instanceof Node&&z.nodeName.toUpperCase()==="A");if(!x||t&&!x.hasAttribute("link"))return;const S=f(x),P=S?x.href.baseVal:x.href;if((S?x.target.baseVal:x.target)||!P&&!x.hasAttribute("state"))return;const R=(x.getAttribute("rel")||"").split(/\s+/);if(x.hasAttribute("download")||R&&R.includes("external"))return;const N=S?new URL(P,document.baseURI):new URL(P);if(!(N.origin!==window.location.origin||i&&N.pathname&&!N.pathname.toLowerCase().startsWith(i.toLowerCase())))return[x,N]}function h(y){const x=u(y);if(!x)return;const[S,P]=x,B=r.parsePath(P.pathname+P.search+P.hash),R=S.getAttribute("state");y.preventDefault(),s(B,{resolve:!1,replace:S.hasAttribute("replace"),scroll:!S.hasAttribute("noscroll"),state:R?JSON.parse(R):void 0})}function d(y){const x=u(y);if(!x)return;const[S,P]=x;o&&(P.pathname=o(P.pathname)),r.preloadRoute(P,S.getAttribute("preload")!=="false")}function m(y){clearTimeout(l);const x=u(y);if(!x)return c=null;const[S,P]=x;c!==S&&(o&&(P.pathname=o(P.pathname)),l=setTimeout(()=>{r.preloadRoute(P,S.getAttribute("preload")!=="false"),c=S},20))}function v(y){if(y.defaultPrevented)return;let x=y.submitter&&y.submitter.hasAttribute("formaction")?y.submitter.getAttribute("formaction"):y.target.getAttribute("action");if(!x)return;if(!x.startsWith("https://action/")){const P=new URL(x,Ot);if(x=r.parsePath(P.pathname+P.search),!x.startsWith(n))return}if(y.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const S=er.get(x);if(S){y.preventDefault();const P=new FormData(y.target,y.submitter);S.call({r,f:y.target},y.target.enctype==="multipart/form-data"?P:new URLSearchParams(P))}}kt(["click","submit"]),document.addEventListener("click",h),e&&(document.addEventListener("mousemove",m,{passive:!0}),document.addEventListener("focusin",d,{passive:!0}),document.addEventListener("touchstart",d,{passive:!0})),document.addEventListener("submit",v),Y(()=>{document.removeEventListener("click",h),e&&(document.removeEventListener("mousemove",m),document.removeEventListener("focusin",d),document.removeEventListener("touchstart",d)),document.removeEventListener("submit",v)})}}function nr(e){const t=()=>{const o=window.location.pathname.replace(/^\/+/,"/")+window.location.search,r=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:o+window.location.hash,state:r}},n=Et();return Jn({get:t,set({value:o,replace:r,scroll:i,state:s}){r?window.history.replaceState(_n(s),"",o):window.history.pushState(s,"",o),Zn(decodeURIComponent(window.location.hash.slice(1)),i),Xe()},init:o=>Qn(window,"popstate",En(o,r=>{if(r&&r<0)return!n.confirm(r);{const i=t();return!n.confirm(i.value,{state:i.state})}})),create:tr(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:o=>window.history.go(o),beforeLeave:n}})(e)}var rr=O("<a>");function or(e){e=ne({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=qe(e,["href","state","class","activeClass","inactiveClass","end"]),n=Mn(()=>e.href),o=Un(n),r=Qe(),i=k(()=>{const s=n();if(s===void 0)return[!1,!1];const l=K(s.split(/[?#]/,1)[0]).toLowerCase(),c=decodeURI(K(r.pathname).toLowerCase());return[e.end?l===c:c.startsWith(l+"/")||c===l,l===c]});return(()=>{var s=rr();return Ke(s,ne(t,{get href(){return o()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i()[0],[e.activeClass]:i()[0],...t.classList}},link:"",get"aria-current"(){return i()[1]?"page":void 0}}),!1,!1),s})()}const ir=p.div`
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
`,sr=p.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,lr=p.div`
  color: red;
  font-weight: bold;
  margin-right: 10px;
`,Q=p.div`
  margin-right: 10px;
  color: white;
  text-decoration: none;
`,G=p(or)`
  color: ${e=>e.active?"#3fa0b3":"white"};
  text-decoration: none;
  &:hover {
    color: #61dafb;
  }
`,ar=p.div`
  display: flex;
  align-items: center;
`;function cr(){const e=Qe();return X(()=>{console.log("Header 컴포넌트 나타남",e.pathname),Y(()=>{console.log("Header cleanUp 함수")})}),a(ir,{get children(){return[a(sr,{get children(){return[a(lr,{get children(){return a(G,{href:"/",style:{color:"red"},children:"HOME"})}}),a(Q,{get children(){return a(G,{href:"/testbet",get active(){return e.pathname==="/testbet"},children:"바카라"})}}),a(Q,{get children(){return a(G,{href:"/testcalc",get active(){return e.pathname==="/testcalc"},children:"평단계산기"})}}),a(Q,{get children(){return a(G,{href:"/stockcalc",get active(){return e.pathname==="/stockcalc"},children:"주식계산기"})}}),a(Q,{get children(){return a(G,{href:"/test",get active(){return e.pathname==="/test"},children:"테스트"})}})]}}),a(ar,{get children(){return[a(Q,{style:{"margin-right":"10px"},get children(){return a(G,{href:"/signin",get active(){return e.pathname==="/signin"},children:"로그인"})}}),a(Q,{get children(){return a(G,{href:"/signup",get active(){return e.pathname==="/signup"},children:"회원가입"})}})]}})]}})}const ur=()=>{window.open("https://github.com/dwerasd","_blank")},fr=p.div`
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
`,dr=p.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`,hr=p.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`,gr=p.div`
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
`,pr=p(gr)`
  /* MenuLink 컴포넌트를 상속받아 스타일 변경 가능 */
`;function mr(){return a(fr,{get children(){return[a(dr,{}),a(hr,{get children(){return a(pr,{onClick:ur,children:"Github"})}})]}})}const br=p.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;  // 추가
`,yr=p.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,xr=p.main`
  flex-grow: 1;
  padding: 20px;
  margin-top: 5vh;  // 헤더 높이만큼 여백
  width: 100%;
  min-height: calc(100vh - 10vh);  // 뷰포트 높이 고려
  padding-bottom: 5vh;  // footer 높이만큼 추가
  margin-bottom: 5vh;  // footer 높이만큼 여백
`;function wr(e){return X(()=>{console.log("Layout 컴포넌트 나타남"),Y(()=>{console.log("Layout cleanUp 함수")})}),a(br,{get children(){return a(yr,{get children(){return[a(cr,{}),a(xr,{get children(){return e.children}}),a(mr,{})]}})}})}var vr=O("<h4>메인 페이지");const Sr=p.div`
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
`;function Pr(){return X(()=>{console.log("Main 시작"),Y(()=>{console.log("Main 소멸")})}),a(Sr,{get children(){return vr()}})}var $r=O("<h4>테스트 페이지");const Ar=p("div")`
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
`,Lr=p("div")`
  font-size: 100%;
  align-items: center;
  color: white;
`;function Z(){return Qe(),X(()=>{console.log("Test 시작"),Y(()=>{console.log("Test 소멸")})}),a(Ar,{get children(){return a(Lr,{get children(){return $r()}})}})}var Cr=O("<div>에 <!>원을 베팅하세요."),kr=O("<div>게임 결과:"),_r=O("<h3>베팅 기록"),Er=O("<ul>"),Or=O("<li>");const Rr=p("div")`
  position: fixed;
  top: 5vh;
  left: 0;
  width: 100%;
  height: 95vh;
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  overflow-y: auto;
`,Br=p("h1")`
  color: #fff;
  margin-bottom: 25px;
  font-size: 1.8rem;
  text-align: left;
`,Ir=p("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin-left: 20px;
`,st=p("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
`,lt=p("label")`
  font-weight: bold;
  color: #eee;
  font-size: 0.95rem;
  width: 100%;
  text-align: left;
  margin-left: 5px;
`,at=p("div")`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
`,pe=p("input")`
  width: 200px;
  padding: 10px;
  border: 1px solid #444;
  background: #333;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 5px;
`,me=p("button")`
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
`,ct=p("div")`
  padding: 12px;
  background: #2a2a2a;
  border-radius: 6px;
  line-height: 1.6;
  margin-top: 8px;
  width: 100%;
  text-align: left;
`,ut=p("span")`
  background-color: #ffeb3b;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,ft=p("span")`
  background-color: pink;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,Tr=p("span")`
  display: inline-block;
  width: 80px;
  text-align: center;
  background-color: lightblue;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,Nr=p("span")`
  background-color: lightgreen;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,jr=p("div")`
  padding: 15px;
  background: #1e1e1e;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 1.1rem;
  text-align: left;
`,Fr=p("div")`
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
`,Mr=p("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 5px;
`,Ur=()=>{const[e,t]=L(3e6),[n,o]=L(1e3),[r,i]=L([n(),n(),n(),n()]),[s,l]=L(1.95),[c,f]=L(2),[u,h]=L(0),[d,m]=L(n()*2),[v,y]=L(e()),[x,S]=L(0),[P,B]=L([]),[R,N]=L("뱅커"),z=g=>{const b=parseInt(g.target.value,10);t(b)},ce=g=>{const b=parseInt(g.target.value,10);t(e()),o(b),i([b,b,b,b]),m(b*2),y(e()),S(0),B([]),h(0),N("뱅커")},_e=g=>{l(parseFloat(g.target.value))},ue=g=>{f(parseFloat(g.target.value))},Ee=()=>{i([n(),n(),n(),n()]),m(n()*2),y(e()),S(0),B([]),h(0),N("뱅커")},Oe=()=>{N(R()==="뱅커"?"플레이어":"뱅커")},fe=g=>{B(b=>{const $=[...b(),g];return $.length>30?$.slice(1):$})},de=g=>{N(R()==="뱅커"?"플레이어":"뱅커");const b=R()==="뱅커"?"B":"P";let $=x()-d(),I=v()-d();const re=b===g?"O":"X";let _=[...r()];b===g?(b==="P"?($+=d()*c(),I+=d()*c()):($+=d()*s(),I+=d()*s()),_.shift(),_.pop()):_.push(d());const oe=`[${u()}] : ${b}(${d()}) => ${g}(${d()})${re}(${$})`;fe(oe);let F;_.length===0?(_=[n(),n(),n(),n()],F=n()*2,fe("----------------------------------------")):_.length===1?F=_[0]:F=_[0]+_[_.length-1],i(_),m(F),S($),y(I),h(u()+1)};return a(Rr,{get children(){return[a(Br,{children:"🎲 베팅 게임"}),a(Ir,{get children(){return[a(st,{get children(){return[a(lt,{children:"초기 설정"}),a(at,{get children(){return[a(pe,{type:"number",get value(){return e()},onInput:z,placeholder:"초기 잔고"}),a(pe,{type:"number",get value(){return n()},onInput:ce,placeholder:"베팅 기준 금액"})]}})]}}),a(st,{get children(){return[a(lt,{children:"배당률 설정"}),a(at,{get children(){return[a(pe,{type:"number",step:"0.01",get value(){return s().toFixed(2)},onInput:_e,placeholder:"뱅커 배당률"}),a(pe,{type:"number",step:"0.01",get value(){return c().toFixed(2)},onInput:ue,placeholder:"플레이어 배당률"})]}})]}}),a(ct,{get children(){return["잔고: ",a(ft,{get children(){return v().toLocaleString()}}),"원 수익금: ",a(ft,{get children(){return x().toLocaleString()}}),"원 총 베팅 횟수: ",a(ut,{get children(){return u()}}),"회",a(me,{onClick:Ee,children:"초기화"})]}}),a(ct,{get children(){return["배팅 배열:",a(Mr,{get children(){return r().map((g,b)=>a(ut,{get children(){return g.toLocaleString()}}))}})]}}),a(jr,{get children(){return[(()=>{var g=Cr(),b=g.firstChild,$=b.nextSibling;return $.nextSibling,C(g,a(Tr,{get children(){return R()}}),b),C(g,a(Nr,{get children(){return d().toLocaleString()}}),$),C(g,a(me,{onClick:Oe,children:"뒤집기"}),null),g})(),(()=>{var g=kr();return g.firstChild,g.style.setProperty("margin-top","15px"),C(g,a(me,{onClick:()=>de("B"),children:"뱅커 승리"}),null),C(g,a(me,{onClick:()=>de("P"),children:"플레이어 승리"}),null),g})()]}}),a(Fr,{get children(){return[_r(),(()=>{var g=Er();return C(g,()=>P().map((b,$)=>(()=>{var I=Or();return C(I,b),I})())),g})()]}})]}})]}})};var Dr=O("<div><br>원에 <!>주를 추가 매수 하려면 <!>원이 필요합니다.");const Vr=p("div")`
  position: fixed;
  top: 5vh;
  left: 0;
  width: 100%;
  height: 95vh;
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  overflow-y: auto;
`,Hr=p("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin-left: 20px;
`,be=p("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
`,zr=p("h1")`
  color: #fff;
  margin-bottom: 25px;
  font-size: 1.8rem;
  text-align: left;
`,ye=p("label")`
  font-weight: bold;
  color: #eee;
  font-size: 0.95rem;
  width: 100%;
  text-align: left;
  margin-left: 5px;
`,ee=p("input")`
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
`,xe=p("div")`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
`,Gr=p("div")`
  padding: 12px;
  background: #2a2a2a;
  border-radius: 6px;
  line-height: 1.6;
  margin-top: 8px;
  width: 100%;
  text-align: left;
`,te=p("span")`
  background-color: #ffeb3b;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,Wr=()=>{const[e,t]=L({purchasePrice:0,currentShares:0,currentPrice:0,additionalPurchaseAmount:0,plannedPurchaseShares:0,commission:.23,plannedSalePrice:0,scrollValue:0}),n=r=>{const{name:i,value:s}=r.target,l=parseFloat(s)||0;t(c=>{const f={...c};return f[i]=l,i==="additionalPurchaseAmount"?f.plannedPurchaseShares=f.currentPrice?l/f.currentPrice:0:i==="plannedPurchaseShares"?(f.additionalPurchaseAmount=l*f.currentPrice,f.scrollValue=l):i==="scrollValue"&&(f.plannedPurchaseShares=l,f.additionalPurchaseAmount=l*f.currentPrice),f})},o=()=>{const r=e().currentShares+e().plannedPurchaseShares,i=e().purchasePrice*e().currentShares+e().additionalPurchaseAmount+e().commission,s=r>0?i/r:0,l=e().plannedSalePrice*e().plannedPurchaseShares,c=l-e().plannedPurchaseShares*s-e().commission;return{saleRevenue:l||0,adjustedAveragePrice:s||0,netProfit:c||0}};return a(Vr,{get children(){return[a(zr,{children:"📈 주식 평단가 계산기"}),a(Hr,{get children(){return[a(be,{get children(){return[a(ye,{children:"거래 수수료 (%)"}),a(xe,{get children(){return a(ee,{type:"number",name:"commission",get value(){return e().commission},onInput:n,step:"0.01",placeholder:"0.23%"})}})]}}),a(be,{get children(){return[a(ye,{children:"현재 보유 정보(평단가, 주식수)"}),a(xe,{get children(){return[a(ee,{type:"number",name:"purchasePrice",get value(){return e().purchasePrice},onInput:n,placeholder:"평균 매입가"}),a(ee,{type:"number",name:"currentShares",get value(){return e().currentShares},onInput:n,placeholder:"보유 주식 수"})]}})]}}),a(be,{get children(){return[a(ye,{children:"현재 주가"}),a(xe,{get children(){return a(ee,{type:"number",name:"currentPrice",get value(){return e().currentPrice},onInput:n,placeholder:"현재 주가"})}})]}}),a(be,{get children(){return[a(ye,{children:"추가 매수 설정"}),a(xe,{get children(){return[a(ee,{type:"number",name:"plannedPurchaseShares",get value(){return e().scrollValue.toFixed(0)},onInput:n,placeholder:"매수할 주식 수"}),a(ee,{type:"range",name:"scrollValue",min:"0",max:"10000",get value(){return e().scrollValue},onInput:n})]}}),a(Gr,{get children(){return[a(te,{get children(){return e().scrollValue}}),"주 추가 매수 시 → 총 보유 주식수: ",a(te,{get children(){return e().currentShares+Number(e().scrollValue)}}),"주, 조정 평단가: ",a(te,{get children(){return o().adjustedAveragePrice.toFixed(0).toLocaleString()}}),"원",(()=>{var r=Dr(),i=r.firstChild,s=i.nextSibling,l=s.nextSibling,c=l.nextSibling,f=c.nextSibling;return f.nextSibling,C(r,a(te,{get children(){return e().currentPrice}}),s),C(r,a(te,{get children(){return e().scrollValue}}),l),C(r,a(te,{get children(){return e().additionalPurchaseAmount.toLocaleString()}}),f),r})()]}})]}})]}})]}})};var qr=O("<p>기준가 대비 77%: <!>원"),Kr=O("<p>기준가 대비 69.3%: <!>원"),Xr=O("<p>기준가 대비 65.8%: <!>원"),Yr=O("<div><div></div><div>"),Jr=O("<p>결과 1: <!>원"),Qr=O("<p>결과 2: <!>원"),Zr=O("<p>결과 3: <!>원");const eo=p("div")`
  position: fixed;
  top: 5vh;
  left: 0;
  width: 100%;
  height: 95vh;
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  overflow-y: auto;
`,to=p("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin-left: 20px;
`,dt=p("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: flex-start;
`,ht=p("h1")`
  color: #fff;
  margin-bottom: 25px;
  font-size: 1.8rem;
  text-align: left;
`,gt=p("label")`
  font-weight: bold;
  color: #eee;
  font-size: 0.95rem;
  width: 100px;
  text-align: left;
  margin-left: 5px;
`,Ne=p("input")`
  width: ${e=>e.width||"200px"};
  padding: 10px;
  border: 1px solid #444;
  background: #333;
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  margin-left: 5px;
`,pt=p("div")`
  padding: 15px;
  background: #1e1e1e;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 1.1rem;
  text-align: left;
  
  p {
    margin: 10px 0;
  }
`,ie=p("span")`
  background-color: #ffeb3b;
  color: #000;
  padding: 2px 6px;
  border-radius: 3px;
  margin: 0 3px;
  font-weight: 600;
`,mt=p(ie)`
  background-color: #ff6b6b;
`;function no(){const[e,t]=L(""),[n,o]=L({val1:0,val2:0,val3:0}),[r,i]=L(""),[s,l]=L(""),[c,f]=L({val1:0,val2:0,val3:0});return X(()=>{const u=parseFloat(e());if(!isNaN(u)){const h=d=>{const m=u*d;return Math.round(m)};o({val1:h(.77),val2:h(.693),val3:h(.65835)})}}),X(()=>{const u=parseFloat(r()),h=parseFloat(s());if(!isNaN(u)&&!isNaN(h)){const d=(u+h)/2,m=u-h,v=h/u*.05,y=.254+v,x=Math.round(u-m*y),S=Math.round(d),P=.254-v,B=Math.round(h+m*P);f({val1:x,val2:S,val3:B})}}),a(eo,{get children(){return[a(ht,{children:"💰 가격 전환 계산기"}),a(to,{get children(){return[a(dt,{get children(){return[a(Ne,{type:"number",get value(){return e()},onInput:u=>t(u.target.value),placeholder:"기준가 입력"}),a(pt,{get children(){return[(()=>{var u=qr(),h=u.firstChild,d=h.nextSibling;return d.nextSibling,C(u,a(ie,{get children(){return n().val1.toLocaleString()}}),d),u})(),(()=>{var u=Kr(),h=u.firstChild,d=h.nextSibling;return d.nextSibling,C(u,a(ie,{get children(){return n().val2.toLocaleString()}}),d),u})(),(()=>{var u=Xr(),h=u.firstChild,d=h.nextSibling;return d.nextSibling,C(u,a(mt,{get children(){return n().val3.toLocaleString()}}),d),u})()]}})]}}),a(dt,{get children(){return[a(ht,{children:"📊 고가-저가 분석기"}),(()=>{var u=Yr(),h=u.firstChild,d=h.nextSibling;return u.style.setProperty("display","flex"),u.style.setProperty("gap","20px"),C(h,a(gt,{children:"고가:"}),null),C(h,a(Ne,{type:"number",get value(){return r()},onInput:m=>i(m.target.value)}),null),C(d,a(gt,{children:"저가:"}),null),C(d,a(Ne,{type:"number",get value(){return s()},onInput:m=>l(m.target.value)}),null),u})(),a(pt,{get children(){return[(()=>{var u=Jr(),h=u.firstChild,d=h.nextSibling;return d.nextSibling,C(u,a(ie,{get children(){return c().val1.toLocaleString()}}),d),u})(),(()=>{var u=Qr(),h=u.firstChild,d=h.nextSibling;return d.nextSibling,C(u,a(ie,{get children(){return c().val2.toLocaleString()}}),d),u})(),(()=>{var u=Zr(),h=u.firstChild,d=h.nextSibling;return d.nextSibling,C(u,a(mt,{get children(){return c().val3.toLocaleString()}}),d),u})()]}})]}})]}})]}})}function ro(){return X(()=>{console.log("App 컴포넌트 나타남"),Y(()=>{console.log("App cleanUp 함수")})}),a(nr,{get children(){return a(j,{path:"/",component:wr,get children(){return[a(j,{path:"/",component:Pr}),a(j,{path:"/trends",component:Z}),a(j,{path:"/custom",component:Z}),a(j,{path:"/signin",component:Z}),a(j,{path:"/signup",component:Z}),a(j,{path:"/test",component:Z}),a(j,{path:"/testbet",component:Ur}),a(j,{path:"/testcalc",component:Wr}),a(j,{path:"/stockcalc",component:no}),a(j,{path:"/*",component:Z})]}})}})}const oo=p.div`
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
`;document.getElementById("root");sn(()=>[a(oo,{}),a(ro,{})],document.getElementById("root"));
