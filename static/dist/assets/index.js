(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const Cn=!1;var oa=Array.isArray,hi=Array.prototype.indexOf,ps=Array.from,ts=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,pi=Object.getOwnPropertyDescriptors,Mn=Object.prototype,gi=Array.prototype,gs=Object.getPrototypeOf,Us=Object.isExtensible;function Ir(t){return typeof t=="function"}const le=()=>{};function mi(t){for(var e=0;e<t.length;e++)t[e]()}function Nn(){var t,e,r=new Promise((a,n)=>{t=a,e=n});return{promise:r,resolve:t,reject:e}}function Ea(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const r=[];for(const a of t)if(r.push(a),r.length===e)break;return r}const wt=2,ms=4,_s=8,dr=16,Yt=32,xr=64,bs=128,kt=256,Pa=512,ft=1024,Et=2048,ur=4096,Ot=8192,Er=16384,ka=32768,vr=65536,Hs=1<<17,_i=1<<18,zr=1<<19,bi=1<<20,rs=1<<21,Da=1<<22,_r=1<<23,br=Symbol("$state"),Rn=Symbol("legacy props"),yi=Symbol(""),Xr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function On(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function wi(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Si(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function xi(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ei(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Pi(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function $i(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ai(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ti(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ki(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Di(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Ia=1,Ca=2,qn=4,Ii=8,Ci=16,Mi=1,Ni=2,Ri=4,Oi=8,qi=16,ji=1,Li=2,Bi=4,zi=1,Ui=2,st=Symbol(),Hi="http://www.w3.org/1999/xhtml",Wi="http://www.w3.org/2000/svg",Qi="@attach";function Gi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Vi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Fi=!1;function jn(t){return t===this.v}function Ln(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Ki(t,e){return t!==e}function Bn(t){return!Ln(t,this.v)}let Ur=!1,Yi=!1;function Ji(){Ur=!0}const Xi=[];function kr(t,e=!1,r=!1){return ya(t,new Map,"",Xi,null,r)}function ya(t,e,r,a,n=null,i=!1){if(typeof t=="object"&&t!==null){var o=e.get(t);if(o!==void 0)return o;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(oa(t)){var l=Array(t.length);e.set(t,l),n!==null&&e.set(n,l);for(var u=0;u<t.length;u+=1){var f=t[u];u in t&&(l[u]=ya(f,e,r,a,null,i))}return l}if(gs(t)===Mn){l={},e.set(t,l),n!==null&&e.set(n,l);for(var h in t)l[h]=ya(t[h],e,r,a,null,i);return l}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function"&&!i)return ya(t.toJSON(),e,r,a,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}let tt=null;function Rr(t){tt=t}function K(t,e=!1,r){tt={p:tt,c:null,e:null,s:t,x:null,l:Ur&&!e?{s:null,u:null,$:[]}:null}}function Y(t){var e=tt,r=e.e;if(r!==null){e.e=null;for(var a of r)eo(a)}return tt=e.p,{}}function Hr(){return!Ur||tt!==null&&tt.l===null}let pr=[];function zn(){var t=pr;pr=[],mi(t)}function or(t){if(pr.length===0&&!Zr){var e=pr;queueMicrotask(()=>{e===pr&&zn()})}pr.push(t)}function Zi(){for(;pr.length>0;)zn()}const el=new WeakMap;function Un(t){var e=Re;if(e===null)return Oe.f|=_r,t;if((e.f&ka)===0){if((e.f&bs)===0)throw!e.parent&&t instanceof Error&&Hn(t),t;e.b.error(t)}else Or(t,e)}function Or(t,e){for(;e!==null;){if((e.f&bs)!==0)try{e.b.error(t);return}catch(r){t=r}e=e.parent}throw t instanceof Error&&Hn(t),t}function Hn(t){const e=el.get(t);e&&(ts(t,"message",{value:e.message}),ts(t,"stack",{value:e.stack}))}const ha=new Set;let We=null,wa=null,as=new Set,Lt=[],Ma=null,ss=!1,Zr=!1;class Tt{current=new Map;#e=new Map;#t=new Set;#r=0;#o=null;#d=[];#l=[];#s=[];#i=[];#u=[];#c=[];skipped_effects=new Set;process(e){Lt=[],wa=null;var r=Tt.apply(this);for(const i of e)this.#v(i);if(this.#r===0){this.#f();var a=this.#l,n=this.#s;this.#l=[],this.#s=[],this.#i=[],wa=this,We=null,Ws(a),Ws(n),wa=null,this.#o?.resolve()}else this.#a(this.#l),this.#a(this.#s),this.#a(this.#i);r();for(const i of this.#d)ra(i);this.#d=[]}#v(e){e.f^=ft;for(var r=e.first;r!==null;){var a=r.f,n=(a&(Yt|xr))!==0,i=n&&(a&ft)!==0,o=i||(a&Ot)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){n?r.f^=ft:(a&ms)!==0?this.#s.push(r):(a&ft)===0&&((a&Da)!==0&&r.b?.is_pending()?this.#d.push(r):ja(r)&&((r.f&dr)!==0&&this.#i.push(r),ra(r)));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#a(e){for(const r of e)((r.f&Et)!==0?this.#u:this.#c).push(r),gt(r,ft);e.length=0}capture(e,r){this.#e.has(e)||this.#e.set(e,r),this.current.set(e,e.v)}activate(){We=this}deactivate(){We=null}flush(){if(Lt.length>0){if(this.activate(),Wn(),We!==null&&We!==this)return}else this.#r===0&&this.#f();this.deactivate();for(const e of as)if(as.delete(e),e(),We!==null)break}#f(){for(const e of this.#t)e();if(this.#t.clear(),ha.size>1){this.#e.clear();let e=!0;for(const r of ha){if(r===this){e=!1;continue}for(const[a,n]of this.current){if(r.current.has(a))if(e)r.current.set(a,n);else continue;Qn(a)}if(Lt.length>0){We=r;const a=Tt.apply(r);for(const n of Lt)r.#v(n);Lt=[],a()}}We=null}ha.delete(this)}increment(){this.#r+=1}decrement(){this.#r-=1;for(const e of this.#u)gt(e,Et),Sr(e);for(const e of this.#c)gt(e,ur),Sr(e);this.flush()}add_callback(e){this.#t.add(e)}settled(){return(this.#o??=Nn()).promise}static ensure(){if(We===null){const e=We=new Tt;ha.add(We),Zr||Tt.enqueue(()=>{We===e&&e.flush()})}return We}static enqueue(e){or(e)}static apply(e){return le}}function tl(t){var e=Zr;Zr=!0;try{for(var r;;){if(Zi(),Lt.length===0&&(We?.flush(),Lt.length===0))return Ma=null,r;Wn()}}finally{Zr=e}}function Wn(){var t=Mr;ss=!0;try{var e=0;for(Fs(!0);Lt.length>0;){var r=Tt.ensure();if(e++>1e3){var a,n;rl()}r.process(Lt),nr.clear()}}finally{ss=!1,Fs(t),Ma=null}}function rl(){try{Pi()}catch(t){Or(t,Ma)}}let fr=null;function Ws(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var a=t[r++];if((a.f&(Er|Ot))===0&&ja(a)&&(fr=[],ra(a),a.deps===null&&a.first===null&&a.nodes_start===null&&(a.teardown===null&&a.ac===null?ao(a):a.fn=null),fr?.length>0)){nr.clear();for(const n of fr)ra(n);fr=[]}}fr=null}}function Qn(t){if(t.reactions!==null)for(const e of t.reactions){const r=e.f;(r&wt)!==0?Qn(e):(r&(Da|dr))!==0&&(gt(e,Et),Sr(e))}}function Sr(t){for(var e=Ma=t;e.parent!==null;){e=e.parent;var r=e.f;if(ss&&e===Re&&(r&dr)!==0)return;if((r&(xr|Yt))!==0){if((r&ft)===0)return;e.f^=ft}}Lt.push(e)}function ys(t){let e=0,r=ir(0),a;return()=>{_l()&&(s(r),Ps(()=>(e===0&&(a=$r(()=>t(()=>Bt(r)))),e+=1,()=>{or(()=>{e-=1,e===0&&(a?.(),a=void 0,Bt(r))})})))}}var al=vr|zr|bs;function sl(t,e,r){new nl(t,e,r)}class nl{parent;#e=!1;#t;#r=null;#o;#d;#l;#s=null;#i=null;#u=null;#c=null;#v=0;#a=0;#f=!1;#h=null;#p=()=>{this.#h&&qr(this.#h,this.#v)};#S=ys(()=>(this.#h=ir(this.#v),()=>{this.#h=null}));constructor(e,r,a){this.#t=e,this.#o=r,this.#d=a,this.parent=Re.b,this.#e=!!this.#o.pending,this.#l=er(()=>{Re.b=this;{try{this.#s=ut(()=>a(this.#t))}catch(n){this.error(n)}this.#a>0?this.#g():this.#e=!1}},al)}#x(){try{this.#s=ut(()=>this.#d(this.#t))}catch(e){this.error(e)}this.#e=!1}#_(){const e=this.#o.pending;e&&(this.#i=ut(()=>e(this.#t)),Tt.enqueue(()=>{this.#s=this.#n(()=>(Tt.ensure(),ut(()=>this.#d(this.#t)))),this.#a>0?this.#g():(Vt(this.#i,()=>{this.#i=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#o.pending}#n(e){var r=Re,a=Oe,n=tt;Ut(this.#l),bt(this.#l),Rr(this.#l.ctx);try{return e()}catch(i){return Un(i),null}finally{Ut(r),bt(a),Rr(n)}}#g(){const e=this.#o.pending;this.#s!==null&&(this.#c=document.createDocumentFragment(),ol(this.#s,this.#c)),this.#i===null&&(this.#i=ut(()=>e(this.#t)))}#m(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(e);return}this.#a+=e,this.#a===0&&(this.#e=!1,this.#i&&Vt(this.#i,()=>{this.#i=null}),this.#c&&(this.#t.before(this.#c),this.#c=null),or(()=>{Tt.ensure().flush()}))}update_pending_count(e){this.#m(e),this.#v+=e,as.add(this.#p)}get_effect_pending(){return this.#S(),s(this.#h)}error(e){var r=this.#o.onerror;let a=this.#o.failed;if(this.#f||!r&&!a)throw e;this.#s&&(vt(this.#s),this.#s=null),this.#i&&(vt(this.#i),this.#i=null),this.#u&&(vt(this.#u),this.#u=null);var n=!1,i=!1;const o=()=>{if(n){Vi();return}n=!0,i&&Di(),Tt.ensure(),this.#v=0,this.#u!==null&&Vt(this.#u,()=>{this.#u=null}),this.#e=this.has_pending_snippet(),this.#s=this.#n(()=>(this.#f=!1,ut(()=>this.#d(this.#t)))),this.#a>0?this.#g():this.#e=!1};var l=Oe;try{bt(null),i=!0,r?.(e,o),i=!1}catch(u){Or(u,this.#l&&this.#l.parent)}finally{bt(l)}a&&or(()=>{this.#u=this.#n(()=>{this.#f=!0;try{return ut(()=>{a(this.#t,()=>e,()=>o)})}catch(u){return Or(u,this.#l.parent),null}finally{this.#f=!1}})})}}function ol(t,e){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var n=r===a?null:ia(r);e.append(r),r=n}}function Gn(t,e,r){const a=Hr()?Na:ws;if(e.length===0){r(t.map(a));return}var n=We,i=Re,o=il();Promise.all(e.map(l=>ll(l))).then(l=>{o();try{r([...t.map(a),...l])}catch(u){(i.f&Er)===0&&Or(u,i)}n?.deactivate(),Vn()}).catch(l=>{Or(l,i)})}function il(){var t=Re,e=Oe,r=tt,a=We;return function(){Ut(t),bt(e),Rr(r),a?.activate()}}function Vn(){Ut(null),bt(null),Rr(null)}function Na(t){var e=wt|Et,r=Oe!==null&&(Oe.f&wt)!==0?Oe:null;return Re===null||r!==null&&(r.f&kt)!==0?e|=kt:Re.f|=zr,{ctx:tt,deps:null,effects:null,equals:jn,f:e,fn:t,reactions:null,rv:0,v:st,wv:0,parent:r??Re,ac:null}}function ll(t,e){let r=Re;r===null&&wi();var a=r.b,n=void 0,i=ir(st),o=!Oe,l=new Map;return yl(()=>{var u=Nn();n=u.promise;try{Promise.resolve(t()).then(u.resolve,u.reject)}catch(g){u.reject(g)}var f=We,h=a.is_pending();o&&(a.update_pending_count(1),h||(f.increment(),l.get(f)?.reject(Xr),l.set(f,u)));const _=(g,p=void 0)=>{h||f.activate(),p?p!==Xr&&(i.f|=_r,qr(i,p)):((i.f&_r)!==0&&(i.f^=_r),qr(i,g)),o&&(a.update_pending_count(-1),h||f.decrement()),Vn()};u.promise.then(_,g=>_(null,g||"unknown"))}),Es(()=>{for(const u of l.values())u.reject(Xr)}),new Promise(u=>{function f(h){function _(){h===n?u(i):f(n)}h.then(_,_)}f(n)})}function G(t){const e=Na(t);return oo(e),e}function ws(t){const e=Na(t);return e.equals=Bn,e}function Fn(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)vt(e[r])}}function cl(t){for(var e=t.parent;e!==null;){if((e.f&wt)===0)return e;e=e.parent}return null}function Ss(t){var e,r=Re;Ut(cl(t));try{Fn(t),e=uo(t)}finally{Ut(r)}return e}function Kn(t){var e=Ss(t);if(t.equals(e)||(t.v=e,t.wv=lo()),!Pr){var r=(rr||(t.f&kt)!==0)&&t.deps!==null?ur:ft;gt(t,r)}}const nr=new Map;function ir(t,e){var r={f:0,v:t,reactions:null,equals:jn,rv:0,wv:0};return r}function L(t,e){const r=ir(t);return oo(r),r}function dl(t,e=!1,r=!0){const a=ir(t);return e||(a.equals=Bn),Ur&&r&&tt!==null&&tt.l!==null&&(tt.l.s??=[]).push(a),a}function b(t,e,r=!1){Oe!==null&&(!Nt||(Oe.f&Hs)!==0)&&Hr()&&(Oe.f&(wt|dr|Da|Hs))!==0&&!Ft?.includes(t)&&ki();let a=r?je(e):e;return qr(t,a)}function qr(t,e){if(!t.equals(e)){var r=t.v;Pr?nr.set(t,e):nr.set(t,r),t.v=e;var a=Tt.ensure();a.capture(t,r),(t.f&wt)!==0&&((t.f&Et)!==0&&Ss(t),gt(t,(t.f&kt)===0?ft:ur)),t.wv=lo(),Yn(t,Et),Hr()&&Re!==null&&(Re.f&ft)!==0&&(Re.f&(Yt|xr))===0&&(At===null?xl([t]):At.push(t))}return e}function Bt(t){b(t,t.v+1)}function Yn(t,e){var r=t.reactions;if(r!==null)for(var a=Hr(),n=r.length,i=0;i<n;i++){var o=r[i],l=o.f;if(!(!a&&o===Re)){var u=(l&Et)===0;u&&gt(o,e),(l&wt)!==0?Yn(o,ur):u&&((l&dr)!==0&&fr!==null&&fr.push(o),Sr(o))}}}function je(t){if(typeof t!="object"||t===null||br in t)return t;const e=gs(t);if(e!==Mn&&e!==gi)return t;var r=new Map,a=oa(t),n=L(0),i=Kt,o=l=>{if(Kt===i)return l();var u=Oe,f=Kt;bt(null),Ys(i);var h=l();return bt(u),Ys(f),h};return a&&r.set("length",L(t.length)),new Proxy(t,{defineProperty(l,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Ai();var h=r.get(u);return h===void 0?h=o(()=>{var _=L(f.value);return r.set(u,_),_}):b(h,f.value,!0),!0},deleteProperty(l,u){var f=r.get(u);if(f===void 0){if(u in l){const h=o(()=>L(st));r.set(u,h),Bt(n)}}else b(f,st),Bt(n);return!0},get(l,u,f){if(u===br)return t;var h=r.get(u),_=u in l;if(h===void 0&&(!_||sr(l,u)?.writable)&&(h=o(()=>{var p=je(_?l[u]:st),m=L(p);return m}),r.set(u,h)),h!==void 0){var g=s(h);return g===st?void 0:g}return Reflect.get(l,u,f)},getOwnPropertyDescriptor(l,u){var f=Reflect.getOwnPropertyDescriptor(l,u);if(f&&"value"in f){var h=r.get(u);h&&(f.value=s(h))}else if(f===void 0){var _=r.get(u),g=_?.v;if(_!==void 0&&g!==st)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return f},has(l,u){if(u===br)return!0;var f=r.get(u),h=f!==void 0&&f.v!==st||Reflect.has(l,u);if(f!==void 0||Re!==null&&(!h||sr(l,u)?.writable)){f===void 0&&(f=o(()=>{var g=h?je(l[u]):st,p=L(g);return p}),r.set(u,f));var _=s(f);if(_===st)return!1}return h},set(l,u,f,h){var _=r.get(u),g=u in l;if(a&&u==="length")for(var p=f;p<_.v;p+=1){var m=r.get(p+"");m!==void 0?b(m,st):p in l&&(m=o(()=>L(st)),r.set(p+"",m))}if(_===void 0)(!g||sr(l,u)?.writable)&&(_=o(()=>L(void 0)),b(_,je(f)),r.set(u,_));else{g=_.v!==st;var w=o(()=>je(f));b(_,w)}var x=Reflect.getOwnPropertyDescriptor(l,u);if(x?.set&&x.set.call(h,f),!g){if(a&&typeof u=="string"){var S=r.get("length"),A=Number(u);Number.isInteger(A)&&A>=S.v&&b(S,A+1)}Bt(n)}return!0},ownKeys(l){s(n);var u=Reflect.ownKeys(l).filter(_=>{var g=r.get(_);return g===void 0||g.v!==st});for(var[f,h]of r)h.v!==st&&!(f in l)&&u.push(f);return u},setPrototypeOf(){Ti()}})}function Qs(t){try{if(t!==null&&typeof t=="object"&&br in t)return t[br]}catch{}return t}function ul(t,e){return Object.is(Qs(t),Qs(e))}var Gs,Jn,Xn,Zn;function vl(){if(Gs===void 0){Gs=window,Jn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Xn=sr(e,"firstChild").get,Zn=sr(e,"nextSibling").get,Us(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Us(r)&&(r.__t=void 0)}}function Jt(t=""){return document.createTextNode(t)}function jr(t){return Xn.call(t)}function ia(t){return Zn.call(t)}function c(t,e){return jr(t)}function N(t,e=!1){{var r=jr(t);return r instanceof Comment&&r.data===""?ia(r):r}}function d(t,e=1,r=!1){let a=t;for(;e--;)a=ia(a);return a}function fl(t){t.textContent=""}function Ra(){return!1}function hl(t,e){if(e){const r=document.body;t.autofocus=!0,or(()=>{document.activeElement===r&&t.focus()})}}let Vs=!1;function pl(){Vs||(Vs=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function Wr(t){var e=Oe,r=Re;bt(null),Ut(null);try{return t()}finally{bt(e),Ut(r)}}function xs(t,e,r,a=r){t.addEventListener(e,()=>Wr(r));const n=t.__on_r;n?t.__on_r=()=>{n(),a(!0)}:t.__on_r=()=>a(!0),pl()}function gl(t){Re===null&&Oe===null&&Ei(),Oe!==null&&(Oe.f&kt)!==0&&Re===null&&xi(),Pr&&Si()}function ml(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function Xt(t,e,r,a=!0){var n=Re;n!==null&&(n.f&Ot)!==0&&(t|=Ot);var i={ctx:tt,deps:null,nodes_start:null,nodes_end:null,f:t|Et,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{ra(i),i.f|=ka}catch(u){throw vt(i),u}else e!==null&&Sr(i);if(a){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&zr)===0&&(o=o.first),o!==null&&(o.parent=n,n!==null&&ml(o,n),Oe!==null&&(Oe.f&wt)!==0&&(t&xr)===0)){var l=Oe;(l.effects??=[]).push(o)}}return i}function _l(){return Oe!==null&&!Nt}function Es(t){const e=Xt(_s,null,!1);return gt(e,ft),e.teardown=t,e}function Zt(t){gl();var e=Re.f,r=!Oe&&(e&Yt)!==0&&(e&ka)===0;if(r){var a=tt;(a.e??=[]).push(t)}else return eo(t)}function eo(t){return Xt(ms|bi,t,!1)}function bl(t){Tt.ensure();const e=Xt(xr|zr,t,!0);return(r={})=>new Promise(a=>{r.outro?Vt(e,()=>{vt(e),a(void 0)}):(vt(e),a(void 0))})}function Oa(t){return Xt(ms,t,!1)}function yl(t){return Xt(Da|zr,t,!0)}function Ps(t,e=0){return Xt(_s|e,t,!0)}function M(t,e=[],r=[]){Gn(e,r,a=>{Xt(_s,()=>t(...a.map(s)),!0)})}function er(t,e=0){var r=Xt(dr|e,t,!0);return r}function ut(t,e=!0){return Xt(Yt|zr,t,!0,e)}function to(t){var e=t.teardown;if(e!==null){const r=Pr,a=Oe;Ks(!0),bt(null);try{e.call(null)}finally{Ks(r),bt(a)}}}function ro(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const n=r.ac;n!==null&&Wr(()=>{n.abort(Xr)});var a=r.next;(r.f&xr)!==0?r.parent=null:vt(r,e),r=a}}function wl(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&Yt)===0&&vt(e),e=r}}function vt(t,e=!0){var r=!1;(e||(t.f&_i)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(Sl(t.nodes_start,t.nodes_end),r=!0),ro(t,e&&!r),$a(t,0),gt(t,Er);var a=t.transitions;if(a!==null)for(const i of a)i.stop();to(t);var n=t.parent;n!==null&&n.first!==null&&ao(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function Sl(t,e){for(;t!==null;){var r=t===e?null:ia(t);t.remove(),t=r}}function ao(t){var e=t.parent,r=t.prev,a=t.next;r!==null&&(r.next=a),a!==null&&(a.prev=r),e!==null&&(e.first===t&&(e.first=a),e.last===t&&(e.last=r))}function Vt(t,e){var r=[];$s(t,r,!0),so(r,()=>{vt(t),e&&e()})}function so(t,e){var r=t.length;if(r>0){var a=()=>--r||e();for(var n of t)n.out(a)}else e()}function $s(t,e,r){if((t.f&Ot)===0){if(t.f^=Ot,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&e.push(o);for(var a=t.first;a!==null;){var n=a.next,i=(a.f&vr)!==0||(a.f&Yt)!==0;$s(a,e,i?r:!1),a=n}}}function qa(t){no(t,!0)}function no(t,e){if((t.f&Ot)!==0){t.f^=Ot,(t.f&ft)===0&&(gt(t,Et),Sr(t));for(var r=t.first;r!==null;){var a=r.next,n=(r.f&vr)!==0||(r.f&Yt)!==0;no(r,n?e:!1),r=a}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let Mr=!1;function Fs(t){Mr=t}let Pr=!1;function Ks(t){Pr=t}let Oe=null,Nt=!1;function bt(t){Oe=t}let Re=null;function Ut(t){Re=t}let Ft=null;function oo(t){Oe!==null&&(Ft===null?Ft=[t]:Ft.push(t))}let pt=null,xt=0,At=null;function xl(t){At=t}let io=1,ta=0,Kt=ta;function Ys(t){Kt=t}let rr=!1;function lo(){return++io}function ja(t){var e=t.f;if((e&Et)!==0)return!0;if((e&ur)!==0){var r=t.deps,a=(e&kt)!==0;if(r!==null){var n,i,o=(e&Pa)!==0,l=a&&Re!==null&&!rr,u=r.length;if((o||l)&&(Re===null||(Re.f&Er)===0)){var f=t,h=f.parent;for(n=0;n<u;n++)i=r[n],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=Pa),l&&h!==null&&(h.f&kt)===0&&(f.f^=kt)}for(n=0;n<u;n++)if(i=r[n],ja(i)&&Kn(i),i.wv>t.wv)return!0}(!a||Re!==null&&!rr)&&gt(t,ft)}return!1}function co(t,e,r=!0){var a=t.reactions;if(a!==null&&!Ft?.includes(t))for(var n=0;n<a.length;n++){var i=a[n];(i.f&wt)!==0?co(i,e,!1):e===i&&(r?gt(i,Et):(i.f&ft)!==0&&gt(i,ur),Sr(i))}}function uo(t){var e=pt,r=xt,a=At,n=Oe,i=rr,o=Ft,l=tt,u=Nt,f=Kt,h=t.f;pt=null,xt=0,At=null,rr=(h&kt)!==0&&(Nt||!Mr||Oe===null),Oe=(h&(Yt|xr))===0?t:null,Ft=null,Rr(t.ctx),Nt=!1,Kt=++ta,t.ac!==null&&(Wr(()=>{t.ac.abort(Xr)}),t.ac=null);try{t.f|=rs;var _=t.fn,g=_(),p=t.deps;if(pt!==null){var m;if($a(t,xt),p!==null&&xt>0)for(p.length=xt+pt.length,m=0;m<pt.length;m++)p[xt+m]=pt[m];else t.deps=p=pt;if(!rr||(h&wt)!==0&&t.reactions!==null)for(m=xt;m<p.length;m++)(p[m].reactions??=[]).push(t)}else p!==null&&xt<p.length&&($a(t,xt),p.length=xt);if(Hr()&&At!==null&&!Nt&&p!==null&&(t.f&(wt|ur|Et))===0)for(m=0;m<At.length;m++)co(At[m],t);return n!==null&&n!==t&&(ta++,At!==null&&(a===null?a=At:a.push(...At))),(t.f&_r)!==0&&(t.f^=_r),g}catch(w){return Un(w)}finally{t.f^=rs,pt=e,xt=r,At=a,Oe=n,rr=i,Ft=o,Rr(l),Nt=u,Kt=f}}function El(t,e){let r=e.reactions;if(r!==null){var a=hi.call(r,t);if(a!==-1){var n=r.length-1;n===0?r=e.reactions=null:(r[a]=r[n],r.pop())}}r===null&&(e.f&wt)!==0&&(pt===null||!pt.includes(e))&&(gt(e,ur),(e.f&(kt|Pa))===0&&(e.f^=Pa),Fn(e),$a(e,0))}function $a(t,e){var r=t.deps;if(r!==null)for(var a=e;a<r.length;a++)El(t,r[a])}function ra(t){var e=t.f;if((e&Er)===0){gt(t,ft);var r=Re,a=Mr;Re=t,Mr=!0;try{(e&dr)!==0?wl(t):ro(t),to(t);var n=uo(t);t.teardown=typeof n=="function"?n:null,t.wv=io;var i;Cn&&Yi&&(t.f&Et)!==0&&t.deps}finally{Mr=a,Re=r}}}async function Pl(){await Promise.resolve(),tl()}function s(t){var e=t.f,r=(e&wt)!==0;if(Oe!==null&&!Nt){var a=Re!==null&&(Re.f&Er)!==0;if(!a&&!Ft?.includes(t)){var n=Oe.deps;if((Oe.f&rs)!==0)t.rv<ta&&(t.rv=ta,pt===null&&n!==null&&n[xt]===t?xt++:pt===null?pt=[t]:(!rr||!pt.includes(t))&&pt.push(t));else{(Oe.deps??=[]).push(t);var i=t.reactions;i===null?t.reactions=[Oe]:i.includes(Oe)||i.push(Oe)}}}else if(r&&t.deps===null&&t.effects===null){var o=t,l=o.parent;l!==null&&(l.f&kt)===0&&(o.f^=kt)}if(Pr){if(nr.has(t))return nr.get(t);if(r){o=t;var u=o.v;return((o.f&ft)===0&&o.reactions!==null||vo(o))&&(u=Ss(o)),nr.set(o,u),u}}else r&&(o=t,ja(o)&&Kn(o));if((t.f&_r)!==0)throw t.v;return t.v}function vo(t){if(t.v===st)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(nr.has(e)||(e.f&wt)!==0&&vo(e))return!0;return!1}function $r(t){var e=Nt;try{return Nt=!0,t()}finally{Nt=e}}const $l=-7169;function gt(t,e){t.f=t.f&$l|e}function Al(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const Tl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function kl(t){return Tl.includes(t)}const Dl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Il(t){return t=t.toLowerCase(),Dl[t]??t}const Cl=["touchstart","touchmove"];function Ml(t){return Cl.includes(t)}const fo=new Set,ns=new Set;function As(t,e,r,a={}){function n(i){if(a.capture||Jr.call(e,i),!i.cancelBubble)return Wr(()=>r?.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?or(()=>{e.addEventListener(t,n,a)}):e.addEventListener(t,n,a),n}function os(t,e,r,a={}){var n=As(e,t,r,a);return()=>{t.removeEventListener(e,n,a)}}function Nr(t,e,r,a,n){var i={capture:a,passive:n},o=As(t,e,r,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Es(()=>{e.removeEventListener(t,o,i)})}function Ye(t){for(var e=0;e<t.length;e++)fo.add(t[e]);for(var r of ns)r(t)}let Js=null;function Jr(t){var e=this,r=e.ownerDocument,a=t.type,n=t.composedPath?.()||[],i=n[0]||t.target;Js=t;var o=0,l=Js===t&&t.__root;if(l){var u=n.indexOf(l);if(u!==-1&&(e===document||e===window)){t.__root=e;return}var f=n.indexOf(e);if(f===-1)return;u<=f&&(o=u)}if(i=n[o]||t.target,i!==e){ts(t,"currentTarget",{configurable:!0,get(){return i||r}});var h=Oe,_=Re;bt(null),Ut(null);try{for(var g,p=[];i!==null;){var m=i.assignedSlot||i.parentNode||i.host||null;try{var w=i["__"+a];if(w!=null&&(!i.disabled||t.target===i))if(oa(w)){var[x,...S]=w;x.apply(i,[t,...S])}else w.call(i,t)}catch(A){g?p.push(A):g=A}if(t.cancelBubble||m===e||m===null)break;i=m}if(g){for(let A of p)queueMicrotask(()=>{throw A});throw g}}finally{t.__root=e,delete t.currentTarget,bt(h),Ut(_)}}}function ho(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function Lr(t,e){var r=Re;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function y(t,e){var r=(e&zi)!==0,a=(e&Ui)!==0,n,i=!t.startsWith("<!>");return()=>{n===void 0&&(n=ho(i?t:"<!>"+t),r||(n=jr(n)));var o=a||Jn?document.importNode(n,!0):n.cloneNode(!0);if(r){var l=jr(o),u=o.lastChild;Lr(l,u)}else Lr(o,o);return o}}function Nl(t,e,r="svg"){var a=!t.startsWith("<!>"),n=`<${r}>${a?t:"<!>"+t}</${r}>`,i;return()=>{if(!i){var o=ho(n),l=jr(o);i=jr(l)}var u=i.cloneNode(!0);return Lr(u,u),u}}function Rl(t,e){return Nl(t,e,"svg")}function yt(t=""){{var e=Jt(t+"");return Lr(e,e),e}}function ee(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Jt();return t.append(e,r),Lr(e,r),t}function v(t,e){t!==null&&t.before(e)}let Aa=!0;function Xs(t){Aa=t}function k(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??=t.nodeValue)&&(t.__t=r,t.nodeValue=r+"")}function Ol(t,e){return ql(t,e)}const Dr=new Map;function ql(t,{target:e,anchor:r,props:a={},events:n,context:i,intro:o=!0}){vl();var l=new Set,u=_=>{for(var g=0;g<_.length;g++){var p=_[g];if(!l.has(p)){l.add(p);var m=Ml(p);e.addEventListener(p,Jr,{passive:m});var w=Dr.get(p);w===void 0?(document.addEventListener(p,Jr,{passive:m}),Dr.set(p,1)):Dr.set(p,w+1)}}};u(ps(fo)),ns.add(u);var f=void 0,h=bl(()=>{var _=r??e.appendChild(Jt());return sl(_,{pending:()=>{}},g=>{if(i){K({});var p=tt;p.c=i}n&&(a.$$events=n),Aa=o,f=t(g,a)||{},Aa=!0,i&&Y()}),()=>{for(var g of l){e.removeEventListener(g,Jr);var p=Dr.get(g);--p===0?(document.removeEventListener(g,Jr),Dr.delete(g)):Dr.set(g,p)}ns.delete(u),_!==r&&_.parentNode?.removeChild(_)}});return jl.set(f,h),f}let jl=new WeakMap;function P(t,e,r=!1){var a=t,n=null,i=null,o=st,l=r?vr:0,u=!1;const f=(p,m=!0)=>{u=!0,g(m,p)};var h=null;function _(){h!==null&&(h.lastChild.remove(),a.before(h),h=null);var p=o?n:i,m=o?i:n;p&&qa(p),m&&Vt(m,()=>{o?i=null:n=null})}const g=(p,m)=>{if(o!==(o=p)){var w=Ra(),x=a;if(w&&(h=document.createDocumentFragment(),h.append(x=Jt())),o?n??=m&&ut(()=>m(x)):i??=m&&ut(()=>m(x)),w){var S=We,A=o?n:i,T=o?i:n;A&&S.skipped_effects.delete(A),T&&S.skipped_effects.add(T),S.add_callback(_)}else _()}};er(()=>{u=!1,e(f),u||g(null,null)},l)}function Ll(t,e,r){var a=t,n=st,i,o,l=null,u=Hr()?Ki:Ln;function f(){i&&Vt(i),l!==null&&(l.lastChild.remove(),a.before(l),l=null),i=o}er(()=>{if(u(n,n=e())){var h=a,_=Ra();_&&(l=document.createDocumentFragment(),l.append(h=Jt())),o=ut(()=>r(h)),_?We.add_callback(f):f()}})}function zt(t,e){return e}function Bl(t,e,r){for(var a=t.items,n=[],i=e.length,o=0;o<i;o++)$s(e[o].e,n,!0);var l=i>0&&n.length===0&&r!==null;if(l){var u=r.parentNode;fl(u),u.append(r),a.clear(),jt(t,e[0].prev,e[i-1].next)}so(n,()=>{for(var f=0;f<i;f++){var h=e[f];l||(a.delete(h.k),jt(t,h.prev,h.next)),vt(h.e,!l)}})}function Je(t,e,r,a,n,i=null){var o=t,l={flags:e,items:new Map,first:null},u=(e&qn)!==0;if(u){var f=t;o=f.appendChild(Jt())}var h=null,_=!1,g=new Map,p=ws(()=>{var S=r();return oa(S)?S:S==null?[]:ps(S)}),m,w;function x(){zl(w,m,l,g,o,n,e,a,r),i!==null&&(m.length===0?h?qa(h):h=ut(()=>i(o)):h!==null&&Vt(h,()=>{h=null}))}er(()=>{w??=Re,m=s(p);var S=m.length;if(!(_&&S===0)){_=S===0;var A,T,D,$;if(Ra()){var I=new Set,O=We;for(T=0;T<S;T+=1){D=m[T],$=a(D,T);var E=l.items.get($)??g.get($);E?(e&(Ia|Ca))!==0&&po(E,D,T,e):(A=go(null,l,null,null,D,$,T,n,e,r,!0),g.set($,A)),I.add($)}for(const[U,te]of l.items)I.has(U)||O.skipped_effects.add(te.e);O.add_callback(x)}else x();s(p)}})}function zl(t,e,r,a,n,i,o,l,u){var f=(o&Ii)!==0,h=(o&(Ia|Ca))!==0,_=e.length,g=r.items,p=r.first,m=p,w,x=null,S,A=[],T=[],D,$,I,O;if(f)for(O=0;O<_;O+=1)D=e[O],$=l(D,O),I=g.get($),I!==void 0&&(I.a?.measure(),(S??=new Set).add(I));for(O=0;O<_;O+=1){if(D=e[O],$=l(D,O),I=g.get($),I===void 0){var E=a.get($);if(E!==void 0){a.delete($),g.set($,E);var U=x?x.next:m;jt(r,x,E),jt(r,E,U),Fa(E,U,n),x=E}else{var te=m?m.e.nodes_start:n;x=go(te,r,x,x===null?r.first:x.next,D,$,O,i,o,u)}g.set($,x),A=[],T=[],m=x.next;continue}if(h&&po(I,D,O,o),(I.e.f&Ot)!==0&&(qa(I.e),f&&(I.a?.unfix(),(S??=new Set).delete(I))),I!==m){if(w!==void 0&&w.has(I)){if(A.length<T.length){var V=T[0],W;x=V.prev;var ce=A[0],_e=A[A.length-1];for(W=0;W<A.length;W+=1)Fa(A[W],V,n);for(W=0;W<T.length;W+=1)w.delete(T[W]);jt(r,ce.prev,_e.next),jt(r,x,ce),jt(r,_e,V),m=V,x=_e,O-=1,A=[],T=[]}else w.delete(I),Fa(I,m,n),jt(r,I.prev,I.next),jt(r,I,x===null?r.first:x.next),jt(r,x,I),x=I;continue}for(A=[],T=[];m!==null&&m.k!==$;)(m.e.f&Ot)===0&&(w??=new Set).add(m),T.push(m),m=m.next;if(m===null)continue;I=m}A.push(I),x=I,m=I.next}if(m!==null||w!==void 0){for(var Ee=w===void 0?[]:ps(w);m!==null;)(m.e.f&Ot)===0&&Ee.push(m),m=m.next;var Q=Ee.length;if(Q>0){var de=(o&qn)!==0&&_===0?n:null;if(f){for(O=0;O<Q;O+=1)Ee[O].a?.measure();for(O=0;O<Q;O+=1)Ee[O].a?.fix()}Bl(r,Ee,de)}}f&&or(()=>{if(S!==void 0)for(I of S)I.a?.apply()}),t.first=r.first&&r.first.e,t.last=x&&x.e;for(var we of a.values())vt(we.e);a.clear()}function po(t,e,r,a){(a&Ia)!==0&&qr(t.v,e),(a&Ca)!==0?qr(t.i,r):t.i=r}function go(t,e,r,a,n,i,o,l,u,f,h){var _=(u&Ia)!==0,g=(u&Ci)===0,p=_?g?dl(n,!1,!1):ir(n):n,m=(u&Ca)===0?o:ir(o),w={i:m,v:p,k:i,a:null,e:null,prev:r,next:a};try{if(t===null){var x=document.createDocumentFragment();x.append(t=Jt())}return w.e=ut(()=>l(t,p,m,f),Fi),w.e.prev=r&&r.e,w.e.next=a&&a.e,r===null?h||(e.first=w):(r.next=w,r.e.next=w.e),a!==null&&(a.prev=w,a.e.prev=w.e),w}finally{}}function Fa(t,e,r){for(var a=t.next?t.next.e.nodes_start:r,n=e?e.e.nodes_start:r,i=t.e.nodes_start;i!==null&&i!==a;){var o=ia(i);n.before(i),i=o}}function jt(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function me(t,e,...r){var a=t,n=le,i;er(()=>{n!==(n=e())&&(i&&(vt(i),i=null),i=ut(()=>n(a,...r)))},vr)}function yr(t,e,r){var a=t,n,i,o=null,l=null;function u(){i&&(Vt(i),i=null),o&&(o.lastChild.remove(),a.before(o),o=null),i=l,l=null}er(()=>{if(n!==(n=e())){var f=Ra();if(n){var h=a;f&&(o=document.createDocumentFragment(),o.append(h=Jt()),i&&We.skipped_effects.add(i)),l=ut(()=>r(h,n))}f?We.add_callback(u):u()}},vr)}function Ul(t,e,r,a,n,i){var o,l,u=null,f=t,h;er(()=>{const _=e()||null;var g=Wi;_!==o&&(h&&(_===null?Vt(h,()=>{h=null,l=null}):_===l?qa(h):(vt(h),Xs(!1))),_&&_!==l&&(h=ut(()=>{if(u=document.createElementNS(g,_),Lr(u,u),a){var p=u.appendChild(Jt());a(u,p)}Re.nodes_end=u,f.before(u)})),o=_,o&&(l=o),Xs(!0))},vr)}function Hl(t,e){var r=void 0,a;er(()=>{r!==(r=e())&&(a&&(vt(a),a=null),r&&(a=ut(()=>{Oa(()=>r(t))})))})}function mo(t){var e,r,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(r=mo(t[e]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);return a}function Wl(){for(var t,e,r=0,a="",n=arguments.length;r<n;r++)(t=arguments[r])&&(e=mo(t))&&(a&&(a+=" "),a+=e);return a}function Ql(t){return typeof t=="object"?Wl(t):t??""}const Zs=[...` 	
\r\f \v\uFEFF`];function Gl(t,e,r){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),r){for(var n in r)if(r[n])a=a?a+" "+n:n;else if(a.length)for(var i=n.length,o=0;(o=a.indexOf(n,o))>=0;){var l=o+i;(o===0||Zs.includes(a[o-1]))&&(l===a.length||Zs.includes(a[l]))?a=(o===0?"":a.substring(0,o))+a.substring(l+1):o=l}}return a===""?null:a}function en(t,e=!1){var r=e?" !important;":";",a="";for(var n in t){var i=t[n];i!=null&&i!==""&&(a+=" "+n+": "+i+r)}return a}function Ka(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Vl(t,e){if(e){var r="",a,n;if(Array.isArray(e)?(a=e[0],n=e[1]):a=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,u=[];a&&u.push(...Object.keys(a).map(Ka)),n&&u.push(...Object.keys(n).map(Ka));var f=0,h=-1;const w=t.length;for(var _=0;_<w;_++){var g=t[_];if(l?g==="/"&&t[_-1]==="*"&&(l=!1):i?i===g&&(i=!1):g==="/"&&t[_+1]==="*"?l=!0:g==='"'||g==="'"?i=g:g==="("?o++:g===")"&&o--,!l&&i===!1&&o===0){if(g===":"&&h===-1)h=_;else if(g===";"||_===w-1){if(h!==-1){var p=Ka(t.substring(f,h).trim());if(!u.includes(p)){g!==";"&&_++;var m=t.substring(f,_).trim();r+=" "+m+";"}}f=_+1,h=-1}}}}return a&&(r+=en(a)),n&&(r+=en(n,!0)),r=r.trim(),r===""?null:r}return t==null?null:String(t)}function De(t,e,r,a,n,i){var o=t.__className;if(o!==r||o===void 0){var l=Gl(r,a,i);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t.__className=r}else if(i&&n!==i)for(var u in i){var f=!!i[u];(n==null||f!==!!n[u])&&t.classList.toggle(u,f)}return i}function Ya(t,e={},r,a){for(var n in r){var i=r[n];e[n]!==i&&(r[n]==null?t.style.removeProperty(n):t.style.setProperty(n,i,a))}}function _o(t,e,r,a){var n=t.__style;if(n!==e){var i=Vl(e,a);i==null?t.removeAttribute("style"):t.style.cssText=i,t.__style=e}else a&&(Array.isArray(a)?(Ya(t,r?.[0],a[0]),Ya(t,r?.[1],a[1],"important")):Ya(t,r,a));return a}function Ta(t,e,r=!1){if(t.multiple){if(e==null)return;if(!oa(e))return Gi();for(var a of t.options)a.selected=e.includes(ea(a));return}for(a of t.options){var n=ea(a);if(ul(n,e)){a.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function bo(t){var e=new MutationObserver(()=>{Ta(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Es(()=>{e.disconnect()})}function aa(t,e,r=e){var a=!0;xs(t,"change",n=>{var i=n?"[selected]":":checked",o;if(t.multiple)o=[].map.call(t.querySelectorAll(i),ea);else{var l=t.querySelector(i)??t.querySelector("option:not([disabled])");o=l&&ea(l)}r(o)}),Oa(()=>{var n=e();if(Ta(t,n,a),a&&n===void 0){var i=t.querySelector(":checked");i!==null&&(n=ea(i),r(n))}t.__value=n,a=!1}),bo(t)}function ea(t){return"__value"in t?t.__value:t.value}const Fr=Symbol("class"),Kr=Symbol("style"),yo=Symbol("is custom element"),wo=Symbol("is html");function Fl(t,e){var r=Ts(t);r.value===(r.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e??"")}function Kl(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function lr(t,e,r,a){var n=Ts(t);n[e]!==(n[e]=r)&&(e==="loading"&&(t[yi]=r),r==null?t.removeAttribute(e):typeof r!="string"&&So(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function Yl(t,e,r,a,n=!1,i=!1){var o=Ts(t),l=o[yo],u=!o[wo],f=e||{},h=t.tagName==="OPTION";for(var _ in e)_ in r||(r[_]=null);r.class?r.class=Ql(r.class):r[Fr]&&(r.class=null),r[Kr]&&(r.style??=null);var g=So(t);for(const D in r){let $=r[D];if(h&&D==="value"&&$==null){t.value=t.__value="",f[D]=$;continue}if(D==="class"){var p=t.namespaceURI==="http://www.w3.org/1999/xhtml";De(t,p,$,a,e?.[Fr],r[Fr]),f[D]=$,f[Fr]=r[Fr];continue}if(D==="style"){_o(t,$,e?.[Kr],r[Kr]),f[D]=$,f[Kr]=r[Kr];continue}var m=f[D];if(!($===m&&!($===void 0&&t.hasAttribute(D)))){f[D]=$;var w=D[0]+D[1];if(w!=="$$")if(w==="on"){const I={},O="$$"+D;let E=D.slice(2);var x=kl(E);if(Al(E)&&(E=E.slice(0,-7),I.capture=!0),!x&&m){if($!=null)continue;t.removeEventListener(E,f[O],I),f[O]=null}if($!=null)if(x)t[`__${E}`]=$,Ye([E]);else{let U=function(te){f[D].call(this,te)};var T=U;f[O]=As(E,t,U,I)}else x&&(t[`__${E}`]=void 0)}else if(D==="style")lr(t,D,$);else if(D==="autofocus")hl(t,!!$);else if(!l&&(D==="__value"||D==="value"&&$!=null))t.value=t.__value=$;else if(D==="selected"&&h)Kl(t,$);else{var S=D;u||(S=Il(S));var A=S==="defaultValue"||S==="defaultChecked";if($==null&&!l&&!A)if(o[D]=null,S==="value"||S==="checked"){let I=t;const O=e===void 0;if(S==="value"){let E=I.defaultValue;I.removeAttribute(S),I.defaultValue=E,I.value=I.__value=O?E:null}else{let E=I.defaultChecked;I.removeAttribute(S),I.defaultChecked=E,I.checked=O?E:!1}}else t.removeAttribute(D);else A||g.includes(S)&&(l||typeof $!="string")?(t[S]=$,S in o&&(o[S]=st)):typeof $!="function"&&lr(t,S,$)}}}return f}function is(t,e,r=[],a=[],n,i=!1,o=!1){Gn(r,a,l=>{var u=void 0,f={},h=t.nodeName==="SELECT",_=!1;if(er(()=>{var p=e(...l.map(s)),m=Yl(t,u,p,n,i,o);_&&h&&"value"in p&&Ta(t,p.value);for(let x of Object.getOwnPropertySymbols(f))p[x]||vt(f[x]);for(let x of Object.getOwnPropertySymbols(p)){var w=p[x];x.description===Qi&&(!u||w!==u[x])&&(f[x]&&vt(f[x]),f[x]=ut(()=>Hl(t,()=>w))),m[x]=w}u=m}),h){var g=t;Oa(()=>{Ta(g,u.value,!0),bo(g)})}_=!0})}function Ts(t){return t.__attributes??={[yo]:t.nodeName.includes("-"),[wo]:t.namespaceURI===Hi}}var tn=new Map;function So(t){var e=t.getAttribute("is")||t.nodeName,r=tn.get(e);if(r)return r;tn.set(e,r=[]);for(var a,n=t,i=Element.prototype;i!==n;){a=pi(n);for(var o in a)a[o].set&&r.push(o);n=gs(n)}return r}const Jl=()=>performance.now(),Gt={tick:t=>requestAnimationFrame(t),now:()=>Jl(),tasks:new Set};function xo(){const t=Gt.now();Gt.tasks.forEach(e=>{e.c(t)||(Gt.tasks.delete(e),e.f())}),Gt.tasks.size!==0&&Gt.tick(xo)}function Xl(t){let e;return Gt.tasks.size===0&&Gt.tick(xo),{promise:new Promise(r=>{Gt.tasks.add(e={c:t,f:r})}),abort(){Gt.tasks.delete(e)}}}function pa(t,e){Wr(()=>{t.dispatchEvent(new CustomEvent(e))})}function Zl(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function rn(t){const e={},r=t.split(";");for(const a of r){const[n,i]=a.split(":");if(!n||i===void 0)break;const o=Zl(n.trim());e[o]=i.trim()}return e}const ec=t=>t;function Eo(t,e,r,a){var n=(t&ji)!==0,i=(t&Li)!==0,o=n&&i,l=(t&Bi)!==0,u=o?"both":n?"in":"out",f,h=e.inert,_=e.style.overflow,g,p;function m(){return Wr(()=>f??=r()(e,a?.()??{},{direction:u}))}var w={is_global:l,in(){if(e.inert=h,!n){p?.abort(),p?.reset?.();return}i||g?.abort(),pa(e,"introstart"),g=ls(e,m(),p,1,()=>{pa(e,"introend"),g?.abort(),g=f=void 0,e.style.overflow=_})},out(T){if(!i){T?.(),f=void 0;return}e.inert=!0,pa(e,"outrostart"),p=ls(e,m(),g,0,()=>{pa(e,"outroend"),T?.()})},stop:()=>{g?.abort(),p?.abort()}},x=Re;if((x.transitions??=[]).push(w),n&&Aa){var S=l;if(!S){for(var A=x.parent;A&&(A.f&vr)!==0;)for(;(A=A.parent)&&(A.f&dr)===0;);S=!A||(A.f&ka)!==0}S&&Oa(()=>{$r(()=>w.in())})}}function ls(t,e,r,a,n){var i=a===1;if(Ir(e)){var o,l=!1;return or(()=>{if(!l){var x=e({direction:i?"in":"out"});o=ls(t,x,r,a,n)}}),{abort:()=>{l=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(r?.deactivate(),!e?.duration)return n(),{abort:le,deactivate:le,reset:le,t:()=>a};const{delay:u=0,css:f,tick:h,easing:_=ec}=e;var g=[];if(i&&r===void 0&&(h&&h(0,1),f)){var p=rn(f(0,1));g.push(p,p)}var m=()=>1-a,w=t.animate(g,{duration:u,fill:"forwards"});return w.onfinish=()=>{w.cancel();var x=r?.t()??1-a;r?.abort();var S=a-x,A=e.duration*Math.abs(S),T=[];if(A>0){var D=!1;if(f)for(var $=Math.ceil(A/16.666666666666668),I=0;I<=$;I+=1){var O=x+S*_(I/$),E=rn(f(O,1-O));T.push(E),D||=E.overflow==="hidden"}D&&(t.style.overflow="hidden"),m=()=>{var U=w.currentTime;return x+S*_(U/A)},h&&Xl(()=>{if(w.playState!=="running")return!1;var U=m();return h(U,1-U),!0})}w=t.animate(T,{duration:A,fill:"forwards"}),w.onfinish=()=>{m=()=>a,h?.(a,1-a),n()}},{abort:()=>{w&&(w.cancel(),w.effect=null,w.onfinish=le)},deactivate:()=>{n=le},reset:()=>{a===0&&h?.(1,0)},t:()=>m()}}function Ke(t,e,r=e){var a=new WeakSet;xs(t,"input",async n=>{var i=n?t.defaultValue:t.value;if(i=Ja(t)?Xa(i):i,r(i),We!==null&&a.add(We),await Pl(),i!==(i=e())){var o=t.selectionStart,l=t.selectionEnd;t.value=i??"",l!==null&&(t.selectionStart=o,t.selectionEnd=Math.min(l,t.value.length))}}),$r(e)==null&&t.value&&(r(Ja(t)?Xa(t.value):t.value),We!==null&&a.add(We)),Ps(()=>{var n=e();if(t===document.activeElement){var i=wa??We;if(a.has(i))return}Ja(t)&&n===Xa(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function cs(t,e,r=e){xs(t,"change",a=>{var n=a?t.defaultChecked:t.checked;r(n)}),$r(e)==null&&r(t.checked),Ps(()=>{var a=e();t.checked=!!a})}function Ja(t){var e=t.type;return e==="number"||e==="range"}function Xa(t){return t===""?null:+t}let ga=!1;function tc(t){var e=ga;try{return ga=!1,[t(),ga]}finally{ga=e}}const rc={get(t,e){if(!t.exclude.includes(e))return t.props[e]},set(t,e){return!1},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function xe(t,e,r){return new Proxy({props:t,exclude:e},rc)}const ac={get(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Ir(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a)return a[e]}},set(t,e,r){let a=t.props.length;for(;a--;){let n=t.props[a];Ir(n)&&(n=n());const i=sr(n,e);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Ir(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a){const n=sr(a,e);return n&&!n.configurable&&(n.configurable=!0),n}}},has(t,e){if(e===br||e===Rn)return!1;for(let r of t.props)if(Ir(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(t){const e=[];for(let r of t.props)if(Ir(r)&&(r=r()),!!r){for(const a in r)e.includes(a)||e.push(a);for(const a of Object.getOwnPropertySymbols(r))e.includes(a)||e.push(a)}return e}};function Pe(...t){return new Proxy({props:t},ac)}function ye(t,e,r,a){var n=!Ur||(r&Ni)!==0,i=(r&Oi)!==0,o=(r&qi)!==0,l=a,u=!0,f=()=>(u&&(u=!1,l=o?$r(a):a),l),h;if(i){var _=br in t||Rn in t;h=sr(t,e)?.set??(_&&e in t?T=>t[e]=T:void 0)}var g,p=!1;i?[g,p]=tc(()=>t[e]):g=t[e],g===void 0&&a!==void 0&&(g=f(),h&&(n&&$i(),h(g)));var m;if(n?m=()=>{var T=t[e];return T===void 0?f():(u=!0,T)}:m=()=>{var T=t[e];return T!==void 0&&(l=void 0),T===void 0?l:T},n&&(r&Ri)===0)return m;if(h){var w=t.$$legacy;return(function(T,D){return arguments.length>0?((!n||!D||w||p)&&h(D?m():T),T):m()})}var x=!1,S=((r&Mi)!==0?Na:ws)(()=>(x=!1,m()));i&&s(S);var A=Re;return(function(T,D){if(arguments.length>0){const $=D?s(S):n&&i?je(T):T;return b(S,$),x=!0,l!==void 0&&(l=$),T}return Pr&&x||(A.f&Er)!==0?S.v:s(S)})}function ks(t){tt===null&&On(),Ur&&tt.l!==null?nc(tt).m.push(t):Zt(()=>{const e=$r(t);if(typeof e=="function")return e})}function sc(t){tt===null&&On(),ks(()=>()=>$r(t))}function nc(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const oc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(oc);const ic="modulepreload",lc=function(t){return"/"+t},an={},ds=function(e,r,a){let n=Promise.resolve();if(r&&r.length>0){let f=function(h){return Promise.all(h.map(_=>Promise.resolve(_).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};var o=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");n=f(r.map(h=>{if(h=lc(h),h in an)return;an[h]=!0;const _=h.endsWith(".css"),g=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const p=document.createElement("link");if(p.rel=_?"stylesheet":ic,_||(p.as="script"),p.crossOrigin="",p.href=h,u&&p.setAttribute("nonce",u),document.head.appendChild(p),_)return new Promise((m,w)=>{p.addEventListener("load",m),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return n.then(l=>{for(const u of l||[])u.status==="rejected"&&i(u.reason);return e().catch(i)})};class Cr extends Map{#e=new Map;#t=L(0);#r=L(0);#o=Kt||-1;constructor(e){if(super(),e){for(var[r,a]of e)super.set(r,a);this.#r.v=super.size}}#d(e){return Kt===this.#o?L(e):ir(e)}has(e){var r=this.#e,a=r.get(e);if(a===void 0){var n=super.get(e);if(n!==void 0)a=this.#d(0),r.set(e,a);else return s(this.#t),!1}return s(a),!0}forEach(e,r){this.#l(),super.forEach(e,r)}get(e){var r=this.#e,a=r.get(e);if(a===void 0){var n=super.get(e);if(n!==void 0)a=this.#d(0),r.set(e,a);else{s(this.#t);return}}return s(a),super.get(e)}set(e,r){var a=this.#e,n=a.get(e),i=super.get(e),o=super.set(e,r),l=this.#t;if(n===void 0)n=this.#d(0),a.set(e,n),b(this.#r,super.size),Bt(l);else if(i!==r){Bt(n);var u=l.reactions===null?null:new Set(l.reactions),f=u===null||!n.reactions?.every(h=>u.has(h));f&&Bt(l)}return o}delete(e){var r=this.#e,a=r.get(e),n=super.delete(e);return a!==void 0&&(r.delete(e),b(this.#r,super.size),b(a,-1),Bt(this.#t)),n}clear(){if(super.size!==0){super.clear();var e=this.#e;b(this.#r,0);for(var r of e.values())b(r,-1);Bt(this.#t),e.clear()}}#l(){s(this.#t);var e=this.#e;if(this.#r.v!==e.size){for(var r of super.keys())if(!e.has(r)){var a=this.#d(0);e.set(r,a)}}for([,a]of this.#e)s(a)}keys(){return s(this.#t),super.keys()}values(){return this.#l(),super.values()}entries(){return this.#l(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#r),super.size}}class cc{#e;#t;constructor(e,r){this.#e=e,this.#t=ys(r)}get current(){return this.#t(),this.#e()}}const dc=/\(.+\)/,uc=new Set(["all","print","screen","and","or","not","only"]);class vc extends cc{constructor(e,r){let a=dc.test(e)||e.split(/[\s,]+/).some(i=>uc.has(i.trim()))?e:`(${e})`;const n=window.matchMedia(a);super(()=>n.matches,i=>os(n,"change",i))}}const fc=typeof window<"u"?window:void 0;function hc(t){let e=t.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}class pc{#e;#t;constructor(e={}){const{window:r=fc,document:a=r?.document}=e;r!==void 0&&(this.#e=a,this.#t=ys(n=>{const i=os(r,"focusin",n),o=os(r,"focusout",n);return()=>{i(),o()}}))}get current(){return this.#t?.(),this.#e?hc(this.#e):null}}new pc;function gc(t){return typeof t=="function"}function mc(t,e){if(gc(t)){const a=t();return a===void 0?e:a}return t===void 0?e:t}function _c(t,e){let r=L(null);const a=G(()=>mc(e,250));function n(...i){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let o,l;const u=new Promise((f,h)=>{o=f,l=h});b(r,{timeout:null,runner:null,promise:u,resolve:o,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const o=s(r);b(r,null);try{o.resolve(await t.apply(this,i))}catch(l){o.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(a)),s(r).promise}return n.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),b(r,null))},n.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(n,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),n}function Rt(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(e){return console.warn("[ProductsStore] Erreur parsing JSON:",e),null}}function la(t){return t?.length?t.filter(e=>e.quantity!=null&&e.unit).map(e=>({q:typeof e.quantity=="number"?e.quantity:parseFloat(e.quantity),u:e.unit})).filter(e=>!isNaN(e.q)):[]}function ca(t){if(!t?.length)return[];const e=new Map;return t.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const a=e.get(r.u)||0;e.set(r.u,a+r.q)}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function da(t,e){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!e?.length){const l=t.map(u=>ar(u.q.toString(),u.u)).join(" et ");return{numeric:t,display:l}}const r=new Map,a=new Map;t.forEach(l=>{const u=parseFloat(l.q);isNaN(u)||r.set(l.u,(r.get(l.u)||0)+u)}),e.forEach(l=>{a.set(l.u,(a.get(l.u)||0)+l.q)});const n=[],i=[];r.forEach((l,u)=>{const f=a.get(u)||0,h=l-f;h>0&&(n.push({q:h,u}),i.push(ar(h.toString(),u)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:n,display:o}}function ht(t){return t?.length?t.map(e=>ar(e.q.toString(),e.u)).join(" et "):"-"}function ar(t,e){const r=parseFloat(t);if(isNaN(r))return`${t} ${e}`;if((e==="gr."||e==="ml")&&r>=1e3){const a=r/1e3,n=e==="gr."?"kg":"l.";let o=(Math.round(a*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${n}`}if(!["gr.","ml","kg","l."].includes(e)){let n=(Math.round(r*10)/10).toString();return n.endsWith(",0")&&(n=n.slice(0,-2)),`${n} ${e}`}return`${r} ${e}`}function La(t){if(!t?.length)return[];const e=new Map;return t.forEach(({q:r,u:a})=>{if(typeof r=="number"&&!isNaN(r)){const n=e.get(a)||0;e.set(a,n+r)}}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function Po(t){return t?Object.values(t).some(e=>e.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function $o(t){if(!t)return[];const e=[];return Object.entries(t).forEach(([r,a])=>{a.recipes?.forEach(n=>{e.push({...n,date:r,dateTimeService:r})})}),e}function Ba(t){if(!t)return[];const e=Object.values(t).flatMap(r=>r.totalConsolidated);return La(e)}function Ds(t,e){const r=new Map,a=new Map;t.forEach(({q:o,u:l})=>{r.set(l,(r.get(l)||0)+o)}),e.forEach(({q:o,u:l})=>{a.set(l,(a.get(l)||0)+o)});const n=[],i=new Set([...r.keys(),...a.keys()]);for(const o of i){const l=r.get(o)||0,u=a.get(o)||0,f=l-u;Math.abs(f)>.001&&n.push({q:f,u:o})}return n}function za(t){if(!t?.length)return"Équilibré";const e=t.filter(a=>a.q>0),r=t.filter(a=>a.q<0);if(e.length>0&&r.length>0){const a=e.map(i=>ar(i.q.toString(),i.u)).join(" et "),n=r.map(i=>ar(Math.abs(i.q).toString(),i.u)).join(" et ");return`${a} disponibles, ${n} manquant${r.length>1?"s":""}`}else return e.length>0?e.map(a=>"+"+ar(a.q.toString(),a.u)).join(" et ")+" disponibles":r.length>0?r.map(a=>ar(Math.abs(a.q).toString(),a.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function Ao(t,e){if(e.searchQuery.trim()){const r=e.searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(e.selectedStores.length>0&&(!t.storeInfo?.storeName||!e.selectedStores.includes(t.storeInfo.storeName))||e.selectedWho.length>0&&(!t.who||!t.who.some(r=>e.selectedWho.includes(r)))||e.selectedProductTypes.length>0&&(!t.productType||!e.selectedProductTypes.includes(t.productType))||e.selectedTemperatures.length>0&&!(e.selectedTemperatures.includes("frais")&&t.pFrais||e.selectedTemperatures.includes("surgele")&&t.pSurgel))}function bc(t){return t.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const yc=Object.freeze(Object.defineProperty({__proto__:null,aggregateByUnit:La,calculateAndFormatMissing:da,calculateGlobalTotal:Ba,calculateTotalQuantityArray:ca,formatSingleQuantity:ar,formatStockResult:za,formatTotalQuantity:ht,generateRecipesWithDates:$o,hasConversions:Po,matchesFilters:Ao,safeJsonParse:Rt,slugify:bc,subtractQuantities:Ds,transformPurchasesToNumericQuantity:la},Symbol.toStringTag,{value:"Module"}));function sn(t){return{...t,products:t.products?.map(e=>typeof e=="string"?e:e.$id)||[],mainId:t.mainId}}function wc(t){const e=Rt(t.specs)??null,r=ca(la(t.purchases??[]));let a=[];e?.quantity&&(a=[e.quantity]);const{numeric:n,display:i}=da(a,r),o=Rt(t.stockReel)??null,l=ht(r),u=t.store?Rt(t.store):null,f=o?`${o.quantity} ${o.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid||"",productName:t.productName,productType:t.productType||"none",pFrais:e?.pFrais??!1,pSurgel:e?.pSurgel??!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,totalNeededRaw:[],status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,specs:t.specs,byDate:{},storeInfo:u,stockParsed:o,specsParsed:e,totalNeededArray:a,totalPurchasesArray:r,missingQuantityArray:n,stockOrTotalPurchases:f,displayTotalNeeded:ht(a),displayTotalPurchases:l,displayMissingQuantity:i,totalNeededOverrideParsed:Rt(t.totalNeededOverride),displayTotalOverride:(()=>{const h=Rt(t.totalNeededOverride);return h?ht([h.totalOverride]):""})()}}function ma(t,e){const r=t.purchases??e.purchases,a=t.specs??e.specs,n=a?Rt(a):e.specsParsed,i=ca(la(r??[])),o=ht(i);let l=e.totalNeededArray;!e.productHugoUuid&&n?.quantity&&(l=[n.quantity]);const{numeric:u,display:f}=da(l,i),h=t.stockReel??e.stockReel,_=h?Rt(h):e.stockParsed,g=t.store??e.store,p=g?Rt(g):e.storeInfo,m=_?`${_.quantity} ${_.unit}`:o;return t.purchases===void 0&&e.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${e.purchases.length} purchases pour ${e.productName}`),{...e,$updatedAt:t.$updatedAt,productName:t.productName??e.productName,productType:t.productType??e.productType,isSynced:t.isSynced??e.isSynced,mainId:t.mainId??e.mainId,pFrais:n?.pFrais??e.pFrais,pSurgel:n?.pSurgel??e.pSurgel,status:t.status??e.status,who:t.who??e.who,store:g,stockReel:h,specs:a,purchases:r,previousNames:t.previousNames??e.previousNames,isMerged:t.isMerged??e.isMerged,mergedFrom:t.mergedFrom??e.mergedFrom,mergeDate:t.mergeDate??e.mergeDate,mergeReason:t.mergeReason??e.mergeReason,mergedInto:t.mergedInto??e.mergedInto,totalNeededOverride:t.totalNeededOverride??e.totalNeededOverride,storeInfo:p,stockParsed:_,specsParsed:n,totalNeededArray:l,totalPurchasesArray:i,missingQuantityArray:u,stockOrTotalPurchases:m,displayTotalPurchases:o,displayMissingQuantity:f,displayTotalNeeded:ht(l),totalNeededOverrideParsed:Rt(t.totalNeededOverride??e.totalNeededOverride),displayTotalOverride:(()=>{const w=Rt(t.totalNeededOverride??e.totalNeededOverride);return w?ht([w.totalOverride]):""})()}}class Sc{#e=L(je([]));MAX_TOASTS=3;get toasts(){return[...s(this.#e)].sort((e,r)=>r.timestamp-e.timestamp)}create(e){const r=e.id||crypto.randomUUID(),a={id:r,state:e.state,message:e.message,timestamp:Date.now(),source:e.source||"user",timeoutId:void 0,details:e.details,actions:e.actions||[]};return this.#t(a),r}update(e,r){const a=s(this.#e).findIndex(i=>i.id===e);if(a===-1)return;const n=s(this.#e)[a];n.timeoutId&&clearTimeout(n.timeoutId),s(this.#e)[a]={...n,state:r.state||n.state,message:r.message||n.message,source:r.source||n.source,actions:r.actions||n.actions},this.#r(s(this.#e)[a])}async track(e,r){const a=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const n=await e;return this.update(a,{state:"success",message:r.success||"Opération réussie"}),n}catch(n){throw this.update(a,{state:"error",message:r.error||"Erreur lors de l'opération"}),n}}dismiss(e){const r=s(this.#e).findIndex(n=>n.id===e);if(r===-1)return;const a=s(this.#e)[r];a.timeoutId&&clearTimeout(a.timeoutId),s(this.#e).splice(r,1)}dismissAll(){s(this.#e).forEach(e=>{e.timeoutId&&clearTimeout(e.timeoutId)}),b(this.#e,[],!0)}#t(e){if(e.source==="user"){const r=s(this.#e).findIndex(a=>a.source==="user");r>=0?s(this.#e)[r]=e:s(this.#e).push(e)}else{const r=s(this.#e).filter(a=>a.source!=="user");if(r.length>=2){const a=r[0];this.dismiss(a.id)}s(this.#e).push(e)}s(this.#e).length>this.MAX_TOASTS&&s(this.#e).splice(0,s(this.#e).length-this.MAX_TOASTS),this.#r(e)}#r(e){if(e.state!=="success"&&e.state!=="info")return;const r=e.source==="realtime-other"?4e3:2e3;e.timeoutId=setTimeout(()=>{this.dismiss(e.id)},r)}success(e,r){return this.create({state:"success",message:e,details:r})}error(e,r){return this.create({state:"error",message:e,details:r})}warning(e,r){return this.create({state:"warning",message:e,source:r?.source||"system",details:r?.details,actions:r?.actions})}info(e,r){return this.create({state:"info",message:e,source:r?.source||"system",details:r?.details})}loading(e,r){return this.create({state:"loading",message:e,details:r})}}const Qe=new Sc;function xc(t,e,r,a){if(typeof e=="function"?t!==e||!a:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?a:r==="a"?a.call(t):a?a.value:e.get(t)}class z{constructor(e,r,a){this.method=e,this.attribute=r,a!==void 0&&(Array.isArray(a)?this.values=a:this.values=[a])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}z.equal=(t,e)=>new z("equal",t,e).toString();z.notEqual=(t,e)=>new z("notEqual",t,e).toString();z.lessThan=(t,e)=>new z("lessThan",t,e).toString();z.lessThanEqual=(t,e)=>new z("lessThanEqual",t,e).toString();z.greaterThan=(t,e)=>new z("greaterThan",t,e).toString();z.greaterThanEqual=(t,e)=>new z("greaterThanEqual",t,e).toString();z.isNull=t=>new z("isNull",t).toString();z.isNotNull=t=>new z("isNotNull",t).toString();z.between=(t,e,r)=>new z("between",t,[e,r]).toString();z.startsWith=(t,e)=>new z("startsWith",t,e).toString();z.endsWith=(t,e)=>new z("endsWith",t,e).toString();z.select=t=>new z("select",void 0,t).toString();z.search=(t,e)=>new z("search",t,e).toString();z.orderDesc=t=>new z("orderDesc",t).toString();z.orderAsc=t=>new z("orderAsc",t).toString();z.orderRandom=()=>new z("orderRandom").toString();z.cursorAfter=t=>new z("cursorAfter",void 0,t).toString();z.cursorBefore=t=>new z("cursorBefore",void 0,t).toString();z.limit=t=>new z("limit",void 0,t).toString();z.offset=t=>new z("offset",void 0,t).toString();z.contains=(t,e)=>new z("contains",t,e).toString();z.notContains=(t,e)=>new z("notContains",t,e).toString();z.notSearch=(t,e)=>new z("notSearch",t,e).toString();z.notBetween=(t,e,r)=>new z("notBetween",t,[e,r]).toString();z.notStartsWith=(t,e)=>new z("notStartsWith",t,e).toString();z.notEndsWith=(t,e)=>new z("notEndsWith",t,e).toString();z.createdBefore=t=>z.lessThan("$createdAt",t);z.createdAfter=t=>z.greaterThan("$createdAt",t);z.createdBetween=(t,e)=>z.between("$createdAt",t,e);z.updatedBefore=t=>z.lessThan("$updatedAt",t);z.updatedAfter=t=>z.greaterThan("$updatedAt",t);z.updatedBetween=(t,e)=>z.between("$updatedAt",t,e);z.or=t=>new z("or",void 0,t.map(e=>JSON.parse(e))).toString();z.and=t=>new z("and",void 0,t.map(e=>JSON.parse(e))).toString();z.distanceEqual=(t,e,r,a=!0)=>new z("distanceEqual",t,[[e,r,a]]).toString();z.distanceNotEqual=(t,e,r,a=!0)=>new z("distanceNotEqual",t,[[e,r,a]]).toString();z.distanceGreaterThan=(t,e,r,a=!0)=>new z("distanceGreaterThan",t,[[e,r,a]]).toString();z.distanceLessThan=(t,e,r,a=!0)=>new z("distanceLessThan",t,[[e,r,a]]).toString();z.intersects=(t,e)=>new z("intersects",t,[e]).toString();z.notIntersects=(t,e)=>new z("notIntersects",t,[e]).toString();z.crosses=(t,e)=>new z("crosses",t,[e]).toString();z.notCrosses=(t,e)=>new z("notCrosses",t,[e]).toString();z.overlaps=(t,e)=>new z("overlaps",t,[e]).toString();z.notOverlaps=(t,e)=>new z("notOverlaps",t,[e]).toString();z.touches=(t,e)=>new z("touches",t,[e]).toString();z.notTouches=(t,e)=>new z("notTouches",t,[e]).toString();var nn;(function(t){t[t.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",t[t.POLICY_VIOLATION=1008]="POLICY_VIOLATION",t[t.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(nn||(nn={}));var To,ko;class cr{static custom(e){return e}static unique(e=7){const r=xc(cr,To,"m",ko).call(cr);let a="";for(let n=0;n<e;n++){const i=Math.floor(Math.random()*16).toString(16);a+=i}return r+a}}To=cr,ko=function(){const e=new Date,r=Math.floor(e.getTime()/1e3),a=e.getMilliseconds();return r.toString(16)+a.toString(16).padStart(5,"0")};var on;(function(t){t.Equal="equal",t.NotEqual="notEqual",t.GreaterThan="greaterThan",t.GreaterThanEqual="greaterThanEqual",t.LessThan="lessThan",t.LessThanEqual="lessThanEqual",t.Contains="contains",t.IsNull="isNull",t.IsNotNull="isNotNull"})(on||(on={}));var ln;(function(t){t.Totp="totp"})(ln||(ln={}));var cn;(function(t){t.Email="email",t.Phone="phone",t.Totp="totp",t.Recoverycode="recoverycode"})(cn||(cn={}));var dn;(function(t){t.Amazon="amazon",t.Apple="apple",t.Auth0="auth0",t.Authentik="authentik",t.Autodesk="autodesk",t.Bitbucket="bitbucket",t.Bitly="bitly",t.Box="box",t.Dailymotion="dailymotion",t.Discord="discord",t.Disqus="disqus",t.Dropbox="dropbox",t.Etsy="etsy",t.Facebook="facebook",t.Figma="figma",t.Github="github",t.Gitlab="gitlab",t.Google="google",t.Linkedin="linkedin",t.Microsoft="microsoft",t.Notion="notion",t.Oidc="oidc",t.Okta="okta",t.Paypal="paypal",t.PaypalSandbox="paypalSandbox",t.Podio="podio",t.Salesforce="salesforce",t.Slack="slack",t.Spotify="spotify",t.Stripe="stripe",t.Tradeshift="tradeshift",t.TradeshiftBox="tradeshiftBox",t.Twitch="twitch",t.Wordpress="wordpress",t.Yahoo="yahoo",t.Yammer="yammer",t.Yandex="yandex",t.Zoho="zoho",t.Zoom="zoom",t.Mock="mock"})(dn||(dn={}));var un;(function(t){t.AvantBrowser="aa",t.AndroidWebViewBeta="an",t.GoogleChrome="ch",t.GoogleChromeIOS="ci",t.GoogleChromeMobile="cm",t.Chromium="cr",t.MozillaFirefox="ff",t.Safari="sf",t.MobileSafari="mf",t.MicrosoftEdge="ps",t.MicrosoftEdgeIOS="oi",t.OperaMini="om",t.Opera="op",t.OperaNext="on"})(un||(un={}));var vn;(function(t){t.AmericanExpress="amex",t.Argencard="argencard",t.Cabal="cabal",t.Cencosud="cencosud",t.DinersClub="diners",t.Discover="discover",t.Elo="elo",t.Hipercard="hipercard",t.JCB="jcb",t.Mastercard="mastercard",t.Naranja="naranja",t.TarjetaShopping="targeta-shopping",t.UnionPay="unionpay",t.Visa="visa",t.MIR="mir",t.Maestro="maestro",t.Rupay="rupay"})(vn||(vn={}));var fn;(function(t){t.Afghanistan="af",t.Angola="ao",t.Albania="al",t.Andorra="ad",t.UnitedArabEmirates="ae",t.Argentina="ar",t.Armenia="am",t.AntiguaAndBarbuda="ag",t.Australia="au",t.Austria="at",t.Azerbaijan="az",t.Burundi="bi",t.Belgium="be",t.Benin="bj",t.BurkinaFaso="bf",t.Bangladesh="bd",t.Bulgaria="bg",t.Bahrain="bh",t.Bahamas="bs",t.BosniaAndHerzegovina="ba",t.Belarus="by",t.Belize="bz",t.Bolivia="bo",t.Brazil="br",t.Barbados="bb",t.BruneiDarussalam="bn",t.Bhutan="bt",t.Botswana="bw",t.CentralAfricanRepublic="cf",t.Canada="ca",t.Switzerland="ch",t.Chile="cl",t.China="cn",t.CoteDIvoire="ci",t.Cameroon="cm",t.DemocraticRepublicOfTheCongo="cd",t.RepublicOfTheCongo="cg",t.Colombia="co",t.Comoros="km",t.CapeVerde="cv",t.CostaRica="cr",t.Cuba="cu",t.Cyprus="cy",t.CzechRepublic="cz",t.Germany="de",t.Djibouti="dj",t.Dominica="dm",t.Denmark="dk",t.DominicanRepublic="do",t.Algeria="dz",t.Ecuador="ec",t.Egypt="eg",t.Eritrea="er",t.Spain="es",t.Estonia="ee",t.Ethiopia="et",t.Finland="fi",t.Fiji="fj",t.France="fr",t.MicronesiaFederatedStatesOf="fm",t.Gabon="ga",t.UnitedKingdom="gb",t.Georgia="ge",t.Ghana="gh",t.Guinea="gn",t.Gambia="gm",t.GuineaBissau="gw",t.EquatorialGuinea="gq",t.Greece="gr",t.Grenada="gd",t.Guatemala="gt",t.Guyana="gy",t.Honduras="hn",t.Croatia="hr",t.Haiti="ht",t.Hungary="hu",t.Indonesia="id",t.India="in",t.Ireland="ie",t.IranIslamicRepublicOf="ir",t.Iraq="iq",t.Iceland="is",t.Israel="il",t.Italy="it",t.Jamaica="jm",t.Jordan="jo",t.Japan="jp",t.Kazakhstan="kz",t.Kenya="ke",t.Kyrgyzstan="kg",t.Cambodia="kh",t.Kiribati="ki",t.SaintKittsAndNevis="kn",t.SouthKorea="kr",t.Kuwait="kw",t.LaoPeopleSDemocraticRepublic="la",t.Lebanon="lb",t.Liberia="lr",t.Libya="ly",t.SaintLucia="lc",t.Liechtenstein="li",t.SriLanka="lk",t.Lesotho="ls",t.Lithuania="lt",t.Luxembourg="lu",t.Latvia="lv",t.Morocco="ma",t.Monaco="mc",t.Moldova="md",t.Madagascar="mg",t.Maldives="mv",t.Mexico="mx",t.MarshallIslands="mh",t.NorthMacedonia="mk",t.Mali="ml",t.Malta="mt",t.Myanmar="mm",t.Montenegro="me",t.Mongolia="mn",t.Mozambique="mz",t.Mauritania="mr",t.Mauritius="mu",t.Malawi="mw",t.Malaysia="my",t.Namibia="na",t.Niger="ne",t.Nigeria="ng",t.Nicaragua="ni",t.Netherlands="nl",t.Norway="no",t.Nepal="np",t.Nauru="nr",t.NewZealand="nz",t.Oman="om",t.Pakistan="pk",t.Panama="pa",t.Peru="pe",t.Philippines="ph",t.Palau="pw",t.PapuaNewGuinea="pg",t.Poland="pl",t.FrenchPolynesia="pf",t.NorthKorea="kp",t.Portugal="pt",t.Paraguay="py",t.Qatar="qa",t.Romania="ro",t.Russia="ru",t.Rwanda="rw",t.SaudiArabia="sa",t.Sudan="sd",t.Senegal="sn",t.Singapore="sg",t.SolomonIslands="sb",t.SierraLeone="sl",t.ElSalvador="sv",t.SanMarino="sm",t.Somalia="so",t.Serbia="rs",t.SouthSudan="ss",t.SaoTomeAndPrincipe="st",t.Suriname="sr",t.Slovakia="sk",t.Slovenia="si",t.Sweden="se",t.Eswatini="sz",t.Seychelles="sc",t.Syria="sy",t.Chad="td",t.Togo="tg",t.Thailand="th",t.Tajikistan="tj",t.Turkmenistan="tm",t.TimorLeste="tl",t.Tonga="to",t.TrinidadAndTobago="tt",t.Tunisia="tn",t.Turkey="tr",t.Tuvalu="tv",t.Tanzania="tz",t.Uganda="ug",t.Ukraine="ua",t.Uruguay="uy",t.UnitedStates="us",t.Uzbekistan="uz",t.VaticanCity="va",t.SaintVincentAndTheGrenadines="vc",t.Venezuela="ve",t.Vietnam="vn",t.Vanuatu="vu",t.Samoa="ws",t.Yemen="ye",t.SouthAfrica="za",t.Zambia="zm",t.Zimbabwe="zw"})(fn||(fn={}));var hn;(function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE",t.OPTIONS="OPTIONS",t.HEAD="HEAD"})(hn||(hn={}));var pn;(function(t){t.Center="center",t.Topleft="top-left",t.Top="top",t.Topright="top-right",t.Left="left",t.Right="right",t.Bottomleft="bottom-left",t.Bottom="bottom",t.Bottomright="bottom-right"})(pn||(pn={}));var gn;(function(t){t.Jpg="jpg",t.Jpeg="jpeg",t.Png="png",t.Webp="webp",t.Heic="heic",t.Avif="avif",t.Gif="gif"})(gn||(gn={}));var mn;(function(t){t.Http="http",t.Schedule="schedule",t.Event="event"})(mn||(mn={}));var _n;(function(t){t.Waiting="waiting",t.Processing="processing",t.Completed="completed",t.Failed="failed",t.Scheduled="scheduled"})(_n||(_n={}));function Do(t,e){const{operationName:r,maxAutoRetries:a=1,autoRetryDelay:n=1e3}=e;let i=1,o=null;return new Promise((l,u)=>{const f=async(h=!1)=>{try{h?o=Qe.loading(`Tentative de ${r}...`):i>1?o?Qe.update(o,{state:"loading",message:`${r} (Tentative ${i}/${a+1})...`}):o=Qe.loading(`${r} (Tentative ${i}/${a+1})...`):o=Qe.loading(`${r} en cours...`);const _=await t();o&&Qe.update(o,{state:"success",message:e.successMessage||`${r} réussie !`,action:void 0}),e.onSuccess?.(_),l(_)}catch(_){console.error(`[RetryUtils] Erreur ${r} (Tentative ${i}):`,_);const g=_ instanceof Error?_.message:"Erreur inconnue";if(i<=a){i++,o&&Qe.update(o,{state:"loading",message:`Erreur. Nouvelle tentative dans ${n/1e3}s...`}),setTimeout(()=>f(!1),n);return}o&&Qe.update(o,{state:"error",message:`Échec ${r}: ${g}`,action:{label:"Réessayer",onClick:()=>{Qe.dismiss(o),f(!0)}}}),e.onError?.(_)}};f(!1)})}function Io(t,e){return{$id:t.$id,mainId:t.mainId,productHugoUuid:t.productHugoUuid,productName:t.productName,...e}}async function St(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getDatabases(),e=window.AppwriteClient.getConfig();return{databases:t,config:e}}async function Ec(t){const a=await(await window.AppwriteClient.getAccount()).get();return{...t,updatedBy:a.name}}function gr(){return localStorage.getItem("appwrite-user-name")||""}async function Pc(t,e,r=100){try{const{databases:a,config:n}=await St(),i=await a.listDocuments(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,[z.greaterThan("$updatedAt",e),z.equal("mainId",t),z.limit(r),z.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(a){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",a),[]}}async function Co(t,e){const{lastSync:r,limit:a=100}=e;try{const{databases:n,config:i}=await St();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await n.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[z.equal("mainId",t),z.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),z.limit(a)])).documents;const o=await n.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[z.greaterThan("$updatedAt",r),z.equal("mainId",t),z.limit(a),z.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(n){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${t}:`,n);const i=n instanceof Error?n.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function Ar(t,e,r=!0){const{databases:a,config:n}=await St();return r&&(e.updatedBy=gr()),await a.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,t,e)}async function Qt(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${t} sur Appwrite...`);const n=Io(a,e),i=await Ec(n),{databases:o,config:l}=await St(),u=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,t,i);return console.log(`[Appwrite Interactions] Produit ${t} créé avec succès`),u}catch(a){console.error(`[Appwrite Interactions] Erreur création produit ${t}:`,a);const n=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${n}`)}}async function Mo(t,e){try{const{databases:r,config:a}=await St(),{slugify:n}=await ds(async()=>{const{slugify:h}=await Promise.resolve().then(()=>yc);return{slugify:h}},void 0),o=`${n(t.productName).substring(0,10)}_${Date.now().toString(36)}`,l={quantity:t.quantity,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1},u={productHugoUuid:null,productName:t.productName,productType:t.productType||"Autre",store:t.store?JSON.stringify(t.store):null,who:t.who||[],isSynced:!0,mainId:e,status:"active",updatedBy:gr(),stockReel:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,specs:JSON.stringify(l)};console.log(`[Appwrite Interactions] Création produit manuel ${o}...`,u);const f=await r.createDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,o,u);return console.log(`[Appwrite Interactions] Produit manuel ${o} créé avec succès`),f}catch(r){throw console.error("[Appwrite Interactions] Erreur création produit manuel:",r),r}}async function No(t,e){if(!t)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=e?JSON.stringify(e):null,a=await Ar(t,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${t}, nouvelle valeur:`,a.store),a}async function Ro(t,e){return Ar(t,{who:e})}async function us(t,e){return Ar(t,{stockReel:e})}async function Is(t,e,r=!1){if(!t)throw new Error("ID du produit requis pour la mise à jour de l'override");const a=JSON.stringify(e),n=await Ar(t,{totalNeededOverride:a},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${t}:`,e),n}async function Oo(t,e=!0){if(!t)throw new Error("ID du produit requis pour la suppression de l'override");const r=await Ar(t,{totalNeededOverride:null},e);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${t}`),r}async function qo(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour mise à jour batch`);const n={};return e.stockReel!==void 0&&(n.stockReel=e.stockReel),e.who!==void 0&&(n.who=e.who),e.storeInfo!==void 0&&(n.store=JSON.stringify(e.storeInfo)),a.isSynced?(console.log(`[Appwrite Interactions] Produit ${t} déjà sync, update batch normal...`),await Ar(t,n)):(console.log(`[Appwrite Interactions] Produit ${t} local, création batch avec upsert...`),await Qt(t,n,r))}catch(a){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${t}:`,a),a}}async function jo(t){const{databases:e,config:r}=await St(),a={...t,createdBy:gr()},n=await e.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,cr.unique(),a);return console.log("[Appwrite Interactions] Achat créé:",n),n}async function Cs(t,e){try{const{databases:r,config:a}=await St(),n=await r.getDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t),i={...e,products:e.products||n.products},o=await r.updateDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t,i);return console.log(`[Appwrite Interactions] Achat ${t} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${t}:`,r);const a=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${a}`)}}async function Lo(t){try{const{databases:e,config:r}=await St();await e.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,t),console.log(`[Appwrite Interactions] Achat ${t} supprimé`)}catch(e){console.error(`[Appwrite Interactions] Erreur suppression achat ${t}:`,e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Bo(t){if(!t?.length)return[];try{const{databases:e,config:r}=await St(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[z.equal("$id",t),z.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${a.documents.length} purchases chargés avec relations products`),a.documents}catch(e){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function zo(t,e={}){let r=null;const a=i=>{const{events:o,payload:l}=i;if(!l)return;const u=o.some(p=>p.includes("products.")),f=o.some(p=>p.includes("purchases.")),h=o.some(p=>p.includes(".create")),_=o.some(p=>p.includes(".update")),g=o.some(p=>p.includes(".delete"));if(u){const p=l;p.updatedBy&&p.updatedBy!==gr()&&(h||_?Qe.info(`${p.updatedBy} a modifié le produit "${p.productName}"`,{source:"realtime-other"}):g&&Qe.info(`${p.updatedBy} a supprimé un produit`,{source:"realtime-other"})),h&&e.onProductCreate?e.onProductCreate(p):_&&e.onProductUpdate?e.onProductUpdate(p):g&&e.onProductDelete&&e.onProductDelete(p.$id)}else if(f){const p=l;if(p.createdBy&&p.createdBy!==gr()){const m=p.products?.[0]?.productName||"un produit";h&&p.who!==gr()?Qe.info(`${p.who} a ajouté un achat pour ${m}`,{source:"realtime-other"}):_&&p.who!==gr()?Qe.info(`${p.who} a modifié un achat pour ${m}`,{source:"realtime-other"}):g&&Qe.info(`${p.who} a supprimé un achat pour ${m}`,{source:"realtime-other"})}h&&e.onPurchaseCreate?e.onPurchaseCreate(p):_&&e.onPurchaseUpdate?e.onPurchaseUpdate(p):g&&e.onPurchaseDelete&&e.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],t,a,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),e.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),e.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),e.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),e.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function Uo(t){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${t}`);const{databases:e}=await St(),r=window.AppwriteClient.getConfig(),a=await e.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,t);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${a.name}`),a}catch(e){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${t}:`,e),null}}async function Ho(t,e,r,a){try{console.log(`[Appwrite Interactions] Création du Main document: ${t}`);const{databases:n}=await St(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await n.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,t,{name:a,createdBy:l.$id,isActive:!0,originalDataHash:e,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${t}`)}catch(n){throw console.error("[Appwrite Interactions] Erreur création Main document:",n),n}}async function Ms(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"batchUpdateProducts",data:t};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${t.productIds.length} produits, type: ${t.updateType}`);const n=await Do(()=>e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST"),{operationName:`batchUpdateProducts (${t.productIds.length} products, type: ${t.updateType})`,maxAutoRetries:1,autoRetryDelay:2e3});if(!n)throw new Error("Opération annulée ou échouée après tentatives de mise à jour groupée");if(n.status!=="completed")throw new Error(`Exécution échouée avec statut: ${n.status}. Erreur: ${n.stderr||n.responseBody}`);const i=JSON.parse(n.responseBody);return i.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${i.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,updatedCount:t.productIds.length,updateType:t.updateType,error:r,timestamp:new Date().toISOString()}}}async function Wo(t,e,r,a){return Ms({productIds:t,products:e,updateType:"store",updateData:r,options:a})}async function Qo(t,e,r,a="replace"){return Ms({productIds:t,products:e,updateType:"who",updateData:{names:r},options:{mode:a}})}async function Go(t,e,r,a={}){try{const{databases:n,config:i}=await St(),u=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:t,productId:e,productIdType:typeof e,quantities:r,options:a});for(const h of r){const _={products:[e],mainId:t,quantity:h.q,unit:h.u,status:"delivered",notes:a.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:a.store??null,who:u.name,price:null,orderDate:null,deliveryDate:null,createdBy:u.$id,invoiceId:a.invoiceId,invoiceTotal:null},g=await n.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.purchases,cr.unique(),_);f.push(g)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${e}`),f}catch(n){console.error("[Appwrite Interactions] Erreur création validation rapide:",n);const i=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${i}`)}}async function Vo(t,e,r,a,n,i){try{const{databases:o,config:l}=await St(),h=await(await window.AppwriteClient.getAccount()).get(),_=e||cr.unique(),g=h.name;if(!r)throw new Error("invoiceTotal est requis pour une dépense");const p={products:[],mainId:t,quantity:1,unit:"global",status:"expense",notes:n||"",store:a??null,who:g||h.name,price:r,invoiceId:_,invoiceTotal:r,orderDate:null,deliveryDate:null,createdBy:h.$id},m=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.purchases,cr.unique(),p);return console.log("[Appwrite Interactions] Dépense créée:",m),m}catch(o){console.error("[Appwrite Interactions] Erreur création dépense:",o);const l=o instanceof Error?o.message:"Erreur inconnue";throw new Error(`Échec de la création de la dépense: ${l}`)}}async function $c(t){try{const{databases:e,config:r}=await St(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[z.equal("mainId",t),z.equal("status","expense"),z.limit(1e3)]);return console.log(`[Appwrite Interactions] ${a.documents.length} dépenses globales chargées`),a.documents}catch(e){return console.error("[Appwrite Interactions] Erreur chargement dépenses globales:",e),[]}}const bn=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:Ms,batchUpdateStore:Wo,batchUpdateWho:Qo,createExpensePurchase:Vo,createMainDocument:Ho,createManualProduct:Mo,createPurchase:jo,createQuickValidationPurchases:Go,deletePurchase:Lo,enrichedProductToAppwriteProduct:Io,loadMainEventData:Uo,loadOrphanPurchases:$c,loadPurchasesListByIds:Bo,loadUpdatedPurchases:Pc,removeTotalOverride:Oo,subscribeToRealtime:zo,syncProductsWithPurchases:Co,updateProduct:Ar,updateProductBatch:qo,updateProductStock:us,updateProductStore:No,updateProductWho:Ro,updatePurchase:Cs,updateTotalOverride:Is,upsertProduct:Qt},Symbol.toStringTag,{value:"Module"}));function Ac(t){return new Date(t).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function hr(t){return t?new Date(t).toLocaleDateString("fr-Fr",{weekday:"short",day:"numeric",month:"short"}):""}function Sa(t){const r=new Date(t).getHours();return r>=11&&r<=13?"sun":r>=19&&r<=21?"moon":r>=7&&r<=9?"cloud":null}function Tc(t){return{formattedDate:new Date(t).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"}),timeIcon:Sa(t)}}function Fo(t){const e={};for(const r of t)e[r]=Tc(r);return e}function kc(t,e){if(!t.byDate?.[e])return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const r=t.byDate[e],a=[e],n=new Map;r.recipes?.length&&n.set(e,r.recipes);const i=r.totalConsolidated||[],o=i.length>0?ht(i):"-",l=Dc(t,e,i),u=l.filter(g=>g.q>0),f=new Date().toISOString().split("T")[0],_=e<f?[]:l.filter(g=>g.q<0);return{requiredQuantities:i,requiredQuantitiesFormatted:o,stockBalance:l,availableStockQuantities:u,missingStockQuantities:_,availableStockFormatted:za(l),missingStockFormatted:ht(_.map(g=>({q:Math.abs(g.q),u:g.u}))),hasAvailableStock:u.length>0,hasMissingStock:_.length>0,totalRecipesInRange:r.recipes?.length||0,totalPortionsInRange:r.totalAssiettes||0,datesInSelectedRange:a,recipesByDate:n}}function Dc(t,e,r){let a=[],n="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(a=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],n=t.stockParsed.dateTime);const i=[];if(t.purchases)for(const u of t.purchases)Ic(u,e,n)&&i.push({q:u.quantity,u:u.unit});const o=[...a,...i],l=La(o);return Ds(l,r)}function Ic(t,e,r=""){if(t.status==="cancelled")return!1;const a=t.deliveryDate||t.$createdAt;return!a||a>e||r&&t.$createdAt<r?!1:a<=e}function Cc(t,e){const r=t.totalNeededArray||[],a=r.length>0?ht(r):"-",n=Ko(t,e[0],e[e.length-1],r),i=n.filter(f=>f.q>0),o=n.filter(f=>f.q<0),l=[...e].sort(),u=new Map;if(t.byDate)for(const[f,h]of Object.entries(t.byDate))h.recipes?.length&&u.set(f,h.recipes);return{requiredQuantities:r,requiredQuantitiesFormatted:a,stockBalance:n,availableStockQuantities:i,missingStockQuantities:o,availableStockFormatted:za(n),missingStockFormatted:ht(o.map(f=>({q:Math.abs(f.q),u:f.u}))),hasAvailableStock:i.length>0,hasMissingStock:o.length>0,totalRecipesInRange:t.nbRecipes||0,totalPortionsInRange:t.totalAssiettes||0,datesInSelectedRange:l,recipesByDate:u}}function Mc(t,e,r){if(!t.byDate)return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const a=new Date(e),n=new Date(r),i=[],o=new Map,l=new Map;let u=0,f=0;for(const[S,A]of Object.entries(t.byDate)){const T=new Date(S);T>=a&&T<=n&&(i.push(S),u+=A.totalAssiettes||0,A.recipes?.length&&(o.set(S,A.recipes),f+=A.recipes.length),A.totalConsolidated&&A.totalConsolidated.forEach(({q:D,u:$})=>{l.set($,(l.get($)||0)+D)}))}const h=Array.from(l.entries()).map(([S,A])=>({q:A,u:S})),_=h.length>0?ht(h):"-",g=Ko(t,e,r,h),p=g.filter(S=>S.q>0),m=new Date().toISOString().split("T")[0],x=r<m?[]:g.filter(S=>S.q<0);return{requiredQuantities:h,requiredQuantitiesFormatted:_,stockBalance:g,availableStockQuantities:p,missingStockQuantities:x,availableStockFormatted:za(g),missingStockFormatted:ht(x.map(S=>({q:Math.abs(S.q),u:S.u}))),hasAvailableStock:p.length>0,hasMissingStock:x.length>0,totalRecipesInRange:f,totalPortionsInRange:u,datesInSelectedRange:i,recipesByDate:o}}function Ko(t,e,r,a){let n=[],i="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(n=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],i=t.stockParsed.dateTime);const o=[];if(t.purchases)for(const f of t.purchases)Nc(f,e,r,i)&&o.push({q:f.quantity,u:f.unit});const l=[...n,...o],u=La(l);return Ds(u,a)}function Nc(t,e,r,a=""){if(t.status==="cancelled")return!1;const n=t.deliveryDate||t.$createdAt;return!n||n>r||a&&t.$createdAt<a?!1:n<=r}async function Rc(t){let e;if(e=await fetch(`/evenements/${t}/metadata.json`),!e.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function yn(t){const e=await fetch(`/evenements/${t}/ingredients_aw/index.json`);if(!e.ok)throw new Error(`Impossible de charger les données Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function Oc(t,e){if(!t)return!0;try{return(await Rc(e)).hugoContentHash!==t}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function Yo(t,e){const r=Ba(t.byDate),a=ca(la([])),{numeric:n,display:i}=da(r,a),o=Object.keys(t.byDate||{}),l=Fo(o);return{$id:`${t.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:t.ingredientHugoUuid,productName:t.ingredientName,productType:t.ingType,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1,nbRecipes:t.nbRecipes,totalNeededRaw:t.totalNeededRaw,totalAssiettes:t.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:e,purchases:[],byDate:t.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:a,missingQuantityArray:n,stockOrTotalPurchases:"-",displayTotalNeeded:ht(r),displayTotalPurchases:"-",displayMissingQuantity:i,totalNeededOverrideParsed:null,displayTotalOverride:"",dateDisplayInfo:l}}function qc(t,e){return t.map(r=>Yo(r,e))}class jc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(e){this.dbName=`products-cache-${e}`}async open(){if(!this.db)return new Promise((e,r)=>{const a=indexedDB.open(this.dbName,this.version);a.onerror=()=>r(a.error),a.onsuccess=()=>{this.db=a.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),e()},a.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(this.PRODUCTS_STORE)||(i.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),i.objectStoreNames.contains(this.METADATA_STORE)||(i.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();i.onsuccess=()=>{const o=new Map;i.result.forEach(l=>{o.set(l.$id,l)}),console.log(`[IDBCache] ${o.size} produits chargés`),e(o)},i.onerror=()=>r(i.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();i.onsuccess=()=>{const o=i.result,l={lastSync:null,allDates:[],hugoContentHash:null};o.forEach(u=>{u.key===this.LAST_SYNC_KEY?l.lastSync=u.value:u.key===this.ALL_DATES_KEY?l.allDates=u.value||[]:u.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=u.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),e(l)},i.onerror=()=>r(i.error)})}async saveProducts(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),i=n.objectStore(this.PRODUCTS_STORE);i.clear(),e.forEach(o=>{i.put(o)}),n.oncomplete=()=>{console.log(`[IDBCache] ${e.size} produits sauvegardés`),r()},n.onerror=()=>a(n.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.METADATA_STORE,"readwrite"),i=n.objectStore(this.METADATA_STORE);i.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),i.put({key:this.ALL_DATES_KEY,value:e.allDates}),e.hugoContentHash!==void 0&&i.put({key:this.HUGO_HASH_KEY,value:e.hugoContentHash}),n.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},n.onerror=()=>a(n.error)})}async updateLastSync(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateAllDates(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${e.length} dates`),r()},o.onerror=()=>a(o.error)})}async updateHugoContentHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateLastHugoMenuUpdate(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:e});o.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},o.onerror=()=>a(o.error)})}async upsertProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async deleteProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const a=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");a.objectStore(this.PRODUCTS_STORE).clear(),a.objectStore(this.METADATA_STORE).clear(),a.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),e()},a.onerror=()=>r(a.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Lc(t){const e=new jc(t);return await e.open(),e}function Bc(t){return!!(t.isMerged||t.totalNeededOverride)}function zc(t,e){if(!t||t.length!==e.length)return!0;for(let r=0;r<t.length;r++){const a=t[r],n=e[r];if(a.q!==n.q||a.u!==n.u)return!0}return!1}async function Uc(t,e){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},a=new Set;for(const n of e.ingredients){const i=n.productSemanticKey;if(!i){console.warn(`[syncHugoData] Ingrédient sans productSemanticKey ignoré : ${n.ingredientName}`);continue}a.add(i);const o=t.get(i);if(o){if(zc(o.totalNeededRaw,n.totalNeededRaw)){const u=Hc(o,n);if(u&&r.overrideConflicts.push(u),o.isMerged){const f=o.displayTotalNeeded;wn(o,n),r.mergedProductsUpdated.push({product:o,oldDisplayTotal:f,newDisplayTotal:o.displayTotalNeeded,currentOverride:o.totalNeededOverrideParsed,semanticKey:i})}else wn(o,n);r.updated.push(i)}t.set(i,o)}else{r.added.push(n);const l=Yo(n,e.mainGroup_id);t.set(l.$id,l)}}for(const[n,i]of t)a.has(n)||(r.removed.push(i),!Bc(i)&&!i.purchases?.length&&!i.stockReel&&!i.who?.length&&t.delete(n));return r.overrideConflicts.length>0&&await Wc(r.overrideConflicts),r.summary=Gc(r),r}function Hc(t,e){if(!t.totalNeededOverride||!t.totalNeededOverrideParsed)return null;const r=Ba(e.byDate),a=ht(r),n=t.displayTotalNeeded;return n!==a?{product:t,oldDisplayTotal:n,newDisplayTotal:a,currentOverride:t.totalNeededOverrideParsed,semanticKey:t.$id}:null}async function Wc(t){for(const e of t){const r={...e.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:e.oldDisplayTotal,newTotalDisplay:e.newDisplayTotal};JSON.stringify(r);try{await Is(e.product.$id,r,!1)}catch(a){console.error(`Erreur lors de la mise à jour de l'override pour ${e.product.$id}:`,a)}}}function wn(t,e){t.byDate=e.byDate,t.nbRecipes=e.nbRecipes,t.totalAssiettes=e.totalAssiettes,t.productType=e.ingType,t.pFrais=e.pFrais||!1,t.pSurgel=e.pSurgel||!1,Qc(t)}function Qc(t){t.totalNeededArray=Ba(t.byDate),t.displayTotalNeeded=ht(t.totalNeededArray);const e=ca(la(t.purchases)),{numeric:r,display:a}=da(t.totalNeededArray,e);t.totalPurchasesArray=e,t.missingQuantityArray=r,t.displayMissingQuantity=a;const n=Object.keys(t.byDate||{});t.dateDisplayInfo=Fo(n),t.stockOrTotalPurchases=t.purchases.length>0?t.displayTotalPurchases:t.displayTotalNeeded}function Gc(t){const e=[];if((t.added.length>0||t.updated.length>0||t.removed.length>0)&&e.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),t.added.length>0&&e.push(`${t.added.length} nouveau(x) ingrédient(s)`),t.updated.length>0&&e.push(` ${t.updated.length} ingrédient(s) mis à jour`),t.overrideConflicts.length>0&&e.push(`⚠️ ${t.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),t.mergedProductsUpdated.length>0&&e.push(`🔀 ${t.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),t.removed.length>0){const r=t.removed.filter(a=>a.purchases?.length||a.stockReel||a.who?.length).length;r>0?e.push(`⚠️ ${r} suppression(s) avec données conservées`):e.push(`${t.removed.length} ingrédient(s) supprimé(s)`)}return e.length>0?e.join(", "):"Aucune modification détectée"}class Vc{isMobileQuery=new vc("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return Qe.toasts}get toast(){return Qe}#e=L(je({isOpen:!1,conflicts:[]}));get modalOverride(){return s(this.#e)}set modalOverride(e){b(this.#e,e,!0)}#t=L(je({isOpen:!1}));get modal(){return s(this.#t)}set modal(e){b(this.#t,e,!0)}#r=L(je({isRunning:!1,name:"",progress:0}));get backgroundOperation(){return s(this.#r)}set backgroundOperation(e){b(this.#r,e,!0)}}const Dt=new Vc;class Yr{#e=L(je({}));get data(){return s(this.#e)}set data(e){b(this.#e,e,!0)}dateStore;constructor(e,r){this.data=e,this.dateStore=r}update(e){this.data=e}get $id(){return this.data.$id}get productName(){return this.data.productName}get productType(){return this.data.productType}get storeInfo(){return this.data.storeInfo}get who(){return this.data.who}get pFrais(){return this.data.pFrais}get pSurgel(){return this.data.pSurgel}get status(){return this.data.status}get previousNames(){return this.data.previousNames}get purchases(){return this.data.purchases}get totalNeededOverrideParsed(){return this.data.totalNeededOverrideParsed}get displayMissingQuantity(){return this.data.displayMissingQuantity}get missingQuantityArray(){return this.data.missingQuantityArray}get isSynced(){return this.data.isSynced}get byDate(){return this.data.byDate}#t=G(()=>{const e=this.dateStore.current,r=this.dateStore.dates;let a;if(this.dateStore.isFullRange)a=Cc(this.data,r),a.datesInSelectedRange&&(a.datesInSelectedRange=a.datesInSelectedRange.filter(n=>this.data.byDate&&this.data.byDate[n]));else if(e.start&&e.end&&e.start===e.end)a=kc(this.data,e.start);else if(e.start&&e.end)a=Mc(this.data,e.start,e.end);else return{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedMissingQuantities:"",formattedAvailableQuantities:"En attente",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map};return{quantities:a.requiredQuantities,formattedQuantities:a.requiredQuantitiesFormatted,nbRecipes:a.totalRecipesInRange,totalAssiettes:a.totalPortionsInRange,stockResult:a.stockBalance,availableQuantities:a.availableStockQuantities,missingQuantities:a.missingStockQuantities,formattedMissingQuantities:a.missingStockFormatted,formattedAvailableQuantities:a.availableStockFormatted,hasAvailable:a.hasAvailableStock,hasMissing:a.hasMissingStock,concernedDates:a.datesInSelectedRange,recipesByDate:a.recipesByDate}});get stats(){return s(this.#t)}set stats(e){b(this.#t,e)}}class Fc{#e=L(je([]));#t=L(null);#r=L(null);constructor(e=[]){b(this.#e,e,!0),this.initializeSmartRange()}get start(){return s(this.#t)}get end(){return s(this.#r)}get dates(){return s(this.#e)}#o=G(()=>[...s(this.#e)].sort()[0]);get firstAvailableDate(){return s(this.#o)}set firstAvailableDate(e){b(this.#o,e)}#d=G(()=>[...s(this.#e)].sort()[s(this.#e).length-1]);get lastAvailableDate(){return s(this.#d)}set lastAvailableDate(e){b(this.#d,e)}get current(){return{start:s(this.#t),end:s(this.#r)}}#l=G(()=>{if(s(this.#e).length===0)return!0;const e=this.lastAvailableDate?new Date(this.lastAvailableDate):new Date;return e.setHours(23,59,59,999),e<new Date});get isEventPassed(){return s(this.#l)}set isEventPassed(e){b(this.#l,e)}#s=G(()=>{if(s(this.#e).length===0)return!1;const e=new Date;return e.setHours(0,0,0,0),s(this.#e).some(r=>new Date(r)>=e)});get hasUpcomingDates(){return s(this.#s)}set hasUpcomingDates(e){b(this.#s,e)}#i=G(()=>s(this.#t)===this.firstAvailableDate&&s(this.#r)===this.lastAvailableDate);get isFullRange(){return s(this.#i)}set isFullRange(e){b(this.#i,e)}#u=G(()=>{if(s(this.#e).length===0)return!1;const e=[...s(this.#e)].sort(),r=new Date;r.setHours(0,0,0,0);const a=e.find(o=>new Date(o)>=r)||null;let n,i;if(a)n=a,i=e[e.length-1];else{const o=e[e.length-1];n=o,i=o}return s(this.#t)===n&&s(this.#r)===i});get isUpcomingRange(){return s(this.#u)}set isUpcomingRange(e){b(this.#u,e)}#c=G(()=>s(this.#e).length===1);get hasSingleDateEvent(){return s(this.#c)}set hasSingleDateEvent(e){b(this.#c,e)}#v=G(()=>!!(s(this.#t)&&s(this.#t)===s(this.#r)));get hasSingleDateInRange(){return s(this.#v)}set hasSingleDateInRange(e){b(this.#v,e)}#a=G(()=>{if(!s(this.#t)||!s(this.#r)||this.isEventPassed)return!1;const e=new Date;return e.setHours(0,0,0,0),new Date(s(this.#t))<e});get hasPastDatesInRange(){return s(this.#a)}set hasPastDatesInRange(e){b(this.#a,e)}setAvailableDates(e){b(this.#e,e,!0),this.initializeSmartRange()}setRange(e,r){if(!e&&!r){b(this.#t,null),b(this.#r,null);return}if(!e||!r){const i=e||r;b(this.#t,i,!0),b(this.#r,i,!0);return}const a=new Date(e)<=new Date(r)?e:r,n=new Date(e)>=new Date(r)?e:r;b(this.#t,a,!0),b(this.#r,n,!0)}selectAll(){s(this.#e).length!==0&&(b(this.#t,s(this.#e)[0],!0),b(this.#r,s(this.#e)[s(this.#e).length-1],!0))}selectUpcoming(){if(s(this.#e).length===0)return;const e=[...s(this.#e)].sort(),r=new Date;r.setHours(0,0,0,0);const a=e.find(n=>new Date(n)>=r)||null;if(a)b(this.#t,a,!0),b(this.#r,e[e.length-1],!0);else{const n=e[e.length-1];b(this.#t,n,!0),b(this.#r,n,!0)}}selectFutureDatesOnly(){const e=new Date;e.setDate(e.getDate()+1),e.setHours(0,0,0,0);const r=s(this.#e).filter(a=>new Date(a)>=e);r.length>0&&(b(this.#t,r[0],!0),b(this.#r,r[r.length-1],!0))}initializeSmartRange(){if(s(this.#e).length===0)return;const e=[...s(this.#e)].sort(),r=this.isEventPassed,a=new Date(e[0])<new Date,n=new Date;let i;r?i=e[0]:a?i=n.toISOString().slice(0,19)+"Z":i=e[0],b(this.#t,i,!0),b(this.#r,e[e.length-1],!0),console.log(`[DateRangeStore] Initialized: ${s(this.#t)} - ${s(this.#r)}`)}}const Sn=1e3;class Kc{#e=new Cr;#t=new Cr;#r=L(null);#o=L(null);#d=L(!1);#l=L(!1);#s=L(null);#i=L(!1);#u=L(!1);#c=L(null);#v=L(null);get currentMainId(){return s(this.#r)}dateStore=new Fc;get dateRange(){return this.dateStore.current}get availableDates(){return this.dateStore.dates}get isEventPassed(){return this.dateStore.isEventPassed}get hasSingleDateEvent(){return this.dateStore.hasSingleDateEvent}get hasSingleDateInRange(){return this.dateStore.hasSingleDateInRange}get hasPastDatesInRange(){return this.dateStore.hasPastDatesInRange}#a=null;#f=null;#h=L(!1);#p=null;#S=L(!1);#x=L();#_=L(je([]));get hasPendingConflicts(){return s(this.#_).length>0}get pendingConflicts(){return s(this.#_)}#n=L(je({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#n)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get loading(){return s(this.#l)}get error(){return s(this.#s)}get lastSync(){return s(this.#c)}get syncing(){return s(this.#i)}setDateRange(e,r){this.dateStore.setRange(e,r)}isFullRange(){return this.dateStore.isFullRange}initializeDateRange(){this.dateStore.initializeSmartRange()}selectUpcomingDates(){this.dateStore.selectUpcoming()}isUpcomingRange(){return this.dateStore.isUpcomingRange}get firstAvailableDate(){return this.dateStore.firstAvailableDate}get lastAvailableDate(){return this.dateStore.lastAvailableDate}selectFutureDatesOnly(){this.dateStore.selectFutureDatesOnly()}get realtimeConnected(){return s(this.#u)}#g=G(()=>{const e=Array.from(this.#e.values()).map(r=>r.data);return console.log(`[ProductsStore] enrichedProducts recalculated: ${e.length} products`),e});get enrichedProducts(){return s(this.#g)}set enrichedProducts(e){b(this.#g,e)}#m=G(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const e=new Date(this.dateRange.start),r=new Date(this.dateRange.end),a=new Map;for(const[n,i]of this.#e){const o=i.data,l=!o.productHugoUuid;if(!o.byDate&&!l||!Ao(o,s(this.#n)))continue;let f=!1;o.byDate&&(f=Object.keys(o.byDate).some(h=>{const _=new Date(h);return _>=e&&_<=r})),(f||l)&&a.set(n,i)}return a});get filteredProductsMap(){return s(this.#m)}set filteredProductsMap(e){b(this.#m,e)}#E=G(()=>({total:this.#e.size,frais:Array.from(this.#e.values()).filter(e=>e.pFrais).length,surgel:Array.from(this.#e.values()).filter(e=>e.pSurgel).length,merged:Array.from(this.#e.values()).filter(e=>e.data.isMerged).length}));get stats(){return s(this.#E)}set stats(e){b(this.#E,e)}#P=G(()=>{const e=Array.from(this.#e.values()).map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(e)]});get uniqueStores(){return s(this.#P)}set uniqueStores(e){b(this.#P,e)}#$=G(()=>{const e=Array.from(this.#e.values()).flatMap(r=>r.who||[]);return[...new Set(e)]});get uniqueWho(){return s(this.#$)}set uniqueWho(e){b(this.#$,e)}#A=G(()=>{const e=Array.from(this.#e.values()).map(r=>r.productType).filter(Boolean);return[...new Set(e)]});get uniqueProductTypes(){return s(this.#A)}set uniqueProductTypes(e){b(this.#A,e)}#T=G(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((o,l)=>o.$id.localeCompare(l.$id));if(s(this.#n).groupBy==="none")return{"":r};const a=Object.groupBy(r,o=>s(this.#n).groupBy==="store"?o.storeInfo?.storeName||"Non défini":o.productType||"Non défini"),n=Object.keys(a).sort((o,l)=>o===""?1:l===""?-1:o.localeCompare(l)),i={};return n.forEach(o=>{i[o]=a[o]}),i});get groupedFilteredProducts(){return s(this.#T)}set groupedFilteredProducts(e){b(this.#T,e)}async initialize(e,r){if(!e?.trim())throw new Error("mainId invalide fourni");if(s(this.#d)&&s(this.#r)===e){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${e}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${e}`),b(this.#r,e,!0),b(this.#o,r,!0);try{this.#a=await Lc(e)}catch(a){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",a),new Error("Impossible d'initialiser le cache IndexedDB")}b(this.#s,null);try{if(await this.#M(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let n;n=await yn(r),console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),b(this.#v,n.hugoContentHash,!0),qc(n.ingredients,e).forEach(l=>{this.#e.set(l.$id,new Yr(l,this.dateStore))}),this.dateStore.setAvailableDates([...n.allDates]),await Uo(e)||await Ho(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#k()}this.initializeDateRange(),await this.#N(),await this.#G(),b(this.#d,!0);const a=this.#Q();this.#f=zo(e,a),this.#j(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#D(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(a){const n=a instanceof Error?a.message:"Erreur lors de l'initialisation";throw b(this.#s,n,!0),console.error("[ProductsStore]",n,a),a}}async#M(){if(this.#a)try{const e=await this.#a.loadProducts();e.forEach((a,n)=>{a.status==="isSyncing"&&(a.status="active"),this.#e.set(n,new Yr(a,this.dateStore))});const r=await this.#a.loadMetadata();b(this.#c,r.lastSync,!0),this.dateStore.setAvailableDates([...r.allDates]),b(this.#v,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${e.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(e){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",e)}}async#N(){if(s(this.#r)){b(this.#i,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#c)}`);const e=await Co(s(this.#r),{lastSync:s(this.#c),limit:Sn});if(console.log(`[ProductsStore] ${e.length} produits récupérés depuis Appwrite`),e.forEach(r=>{const a=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!a}, who=${r.who}, store=${r.store}`);const n=this.#I(r,a?.data);n.isSynced=!0,a?a.update(n):this.#e.set(r.$id,new Yr(n,this.dateStore))}),s(this.#c)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#c)}`);const{loadUpdatedPurchases:r}=await ds(async()=>{const{loadUpdatedPurchases:n}=await Promise.resolve().then(()=>bn);return{loadUpdatedPurchases:n}},void 0),a=await r(s(this.#r),s(this.#c),Sn);console.log(`[ProductsStore] ${a.length} purchases modifiés récupérés`),a.forEach(n=>{if(n.status==="expense")this.#t.set(n.$id,n);else if(n.products?.length){const i=n.products.map(o=>typeof o=="string"?o:o.$id);this.#w(i,n)}})}this.#O(),await this.#R(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(e){throw console.error("[ProductsStore] Erreur lors du sync:",e),e}finally{b(this.#i,!1)}}}async#R(){if(this.#a)try{const e=new Map;this.#e.forEach((r,a)=>{const n=kr(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#a.saveProducts(e),await this.#a.saveMetadata({lastSync:s(this.#c),allDates:[...this.dateStore.dates],hugoContentHash:s(this.#v)}),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#V(){if(this.#a)try{const e=new Map;this.#e.forEach((r,a)=>{const n=kr(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#a.saveProducts(e),await this.#a.updateLastSync(s(this.#c)),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#k(){if(this.#a)try{const e=new Map;this.#e.forEach((r,a)=>{const n=kr(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#a.saveProducts(e),await this.#a.updateLastSync(s(this.#c)),await this.#a.updateAllDates([...this.availableDates]),await this.#a.updateHugoContentHash(s(this.#v)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(e){console.error("[ProductsStore] Erreur persistance cache complet:",e)}}async#y(e){if(!(!this.#a||e.length===0))try{const r=e.map(a=>this.#e.get(a)?.data).filter(a=>a!=null).map(a=>{const n=kr(a);return n.status==="isSyncing"&&(n.status="active"),this.#a.upsertProduct(n)});r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#O(){b(this.#c,new Date().toISOString(),!0)}async#D(){if(!s(this.#o)||s(this.#l))return!1;try{const e=await Oc(s(this.#v),s(this.#o));return e&&!s(this.#h)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${s(this.#o)}, analyse approfondie en cours...`),b(this.#h,!0),await this.#q()),b(this.#x,new Date,!0),e}catch(e){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",e),!1}}async#q(){if(!s(this.#o)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const e=await yn(s(this.#o)),r=new Map;this.#e.forEach((i,o)=>r.set(o,i.data));const a=await Uc(r,e);console.log(`[ProductsStore  - hugo change] ${a.summary}`);for(const[i,o]of r){const l=this.#e.get(i);if(l)l.update(o);else{const u=new Yr(o,this.dateStore);this.#e.set(i,u),console.log(`[ProductsStore] ✨ Nouveau ProductModel créé : ${i}`)}}const n=[];for(const[i]of this.#e)r.has(i)||n.push(i);for(const i of n)this.#e.delete(i),console.log(`[ProductsStore] 🗑️ ProductModel supprimé : ${i}`);if(console.log(`[ProductsStore] 🔄 Synchronisation terminée : ${r.size} produits synchronisés, ${this.#e.size} ProductModel actifs`),a.overrideConflicts.length>0&&(b(this.#_,a.overrideConflicts,!0),Qe.error(`${a.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>Dt.modalOverride.isOpen=!0}})),a.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${a.mergedProductsUpdated.length} produits fusionnés modifiés`),a.removed.length>0){const i=a.removed.filter(o=>o.purchases?.length||o.stockReel||o.who?.length);i.length>0&&console.log(`[ProductsStore] ℹ️ ${i.length} ingrédients supprimés conservés (données utilisateur)`)}this.dateStore.setAvailableDates([...e.allDates]),b(this.#v,e.hugoContentHash,!0),this.initializeDateRange(),await this.#k(),(a.added.length||a.updated.length||a.removed.length)&&Qe.success(a.summary),b(this.#h,!1)}catch(e){console.error("[ProductsStore] Erreur sync Hugo:",e),Qe.error("Erreur lors de la mise à jour Hugo")}}#j(){this.#p&&clearInterval(this.#p),this.#p=setInterval(async()=>{await this.#D()},6e4)}#L(){this.#p&&(clearInterval(this.#p),this.#p=null)}#I(e,r){return r?ma(e,r):wc(e)}#F(e){e.length&&(e.forEach(r=>this.#b(r)),console.log(`[ProductsStore] ${e.length} produits upserted`))}#b(e){const r=this.#e.get(e.$id),a=this.#I(e,r?.data);r?r.update(a):(this.dateStore.dates,this.#e.set(e.$id,new Yr(a,this.dateStore)))}#B(e){this.#e.delete(e)}async#z(e){if(!e.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",e.$id),[];const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#W(r,e),r}async#U(e){if(e.products?.length){const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#w(r,e),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Bo([e.$id]);if(r?.products?.length){const a=r.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#w(a,r),a}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#H(e){const r=Array.from(this.#e.values()).map(a=>a.data).filter(a=>a.purchases?.some(n=>n.$id===e));return r.forEach(a=>{this.#b(a)}),r.map(a=>a.$id)}#W(e,r){const a=sn(r),n=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,u=l.purchases||[];if(!u.some(f=>f.$id===a.$id)){const f=ma({...l,purchases:[...u,a],status:"active"},l);n.push(f)}}}),n.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#w(e,r){const a=sn(r),n=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,u=l.purchases||[],f=u.findIndex(h=>h.$id===a.$id);if(f>=0){const h=[...u];h[f]=a;const _=ma({...l,purchases:h,status:"active"},l);n.push(_)}else{const h=ma({...l,purchases:[...u,r],status:"active"},l);n.push(h)}}}),n.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#Q(){return{onProductCreate:e=>{if(this.#b(e),this.#a){const r=this.#e.get(e.$id);r&&this.#a.upsertProduct(kr(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductUpdate:e=>{if(this.#b(e),this.#a){const r=this.#e.get(e.$id);r&&this.#a.upsertProduct(kr(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductDelete:e=>{this.#B(e),this.#a&&this.#a.deleteProduct(e).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}const r=await this.#z(e);await this.#y(r)},onPurchaseUpdate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}this.#t.has(e.$id)&&this.#t.delete(e.$id);const r=await this.#U(e);await this.#y(r)},onPurchaseDelete:async e=>{if(this.#t.has(e)){this.#t.delete(e);return}const r=await this.#H(e);await this.#y(r)},onConnect:()=>{b(this.#u,!0)},onDisconnect:()=>{b(this.#u,!1)},onError:e=>{console.error("[ProductsStore] Erreur realtime:",e)}}}setSearchQuery=_c(e=>{s(this.#n).searchQuery=e},()=>500);toggleProductType(e){const r=s(this.#n).selectedProductTypes.indexOf(e);r>-1?s(this.#n).selectedProductTypes.splice(r,1):s(this.#n).selectedProductTypes.push(e)}toggleTemperature(e){const r=s(this.#n).selectedTemperatures.indexOf(e);r>-1?s(this.#n).selectedTemperatures.splice(r,1):s(this.#n).selectedTemperatures.push(e)}clearTypeAndTemperatureFilters(){s(this.#n).selectedProductTypes=[],s(this.#n).selectedTemperatures=[]}setGroupBy(e){s(this.#n).groupBy=e}toggleStore(e){const r=s(this.#n).selectedStores.indexOf(e);r>-1?s(this.#n).selectedStores.splice(r,1):s(this.#n).selectedStores.push(e)}toggleWho(e){const r=s(this.#n).selectedWho.indexOf(e);r>-1?s(this.#n).selectedWho.splice(r,1):s(this.#n).selectedWho.push(e)}clearStoreFilters(){s(this.#n).selectedStores=[]}clearWhoFilters(){s(this.#n).selectedWho=[]}handleSort(e){s(this.#n).sortColumn===e?s(this.#n).sortDirection=s(this.#n).sortDirection==="asc"?"desc":"asc":(s(this.#n).sortColumn=e,s(this.#n).sortDirection="asc")}clearFilters(){b(this.#n,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(e){return s(this.#n).sortColumn?[...e].sort((r,a)=>{let n=r[s(this.#n).sortColumn],i=a[s(this.#n).sortColumn];return s(this.#n).sortColumn==="totalNeededConsolidated"?(n=parseFloat(n)||0,i=parseFloat(i)||0):s(this.#n).sortColumn==="purchases"&&(n=r.purchases?.length||0,i=a.purchases?.length||0),n<i?s(this.#n).sortDirection==="asc"?-1:1:n>i?s(this.#n).sortDirection==="asc"?1:-1:0}):e}getEnrichedProductById(e){return this.#e.get(e)?.data??null}getProductModelById(e){return this.#e.get(e)??null}hasConversions(e){const r=this.#e.get(e)?.data;return r?.byDate?Po(r.byDate):!1}async forceReload(e,r){await this.clearCache(),await this.initialize(e,r)}async clearCache(){this.#e.clear(),b(this.#c,null),this.#a&&await this.#a.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(e,r){const a=r?"isSyncing":"active";e.forEach(n=>{const i=this.#e.get(n);if(i){const o={...i.data,status:a};i.update(o)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${e.length} produits → ${a}`)}clearSyncStatus(){const e=[];for(const[r,a]of this.#e)a.status==="isSyncing"&&e.push(r);e.length>0&&(this.setSyncStatus(e,!1),console.log(`[ProductsStore] Nettoyage de ${e.length} produits en statut "isSyncing"`))}destroy(){this.#f?.(),this.#f=null,this.#L(),this.#a&&(this.#a.close(),this.#a=null),console.log("[ProductsStore] Ressources nettoyées")}async#G(){if(s(this.#r))try{const{loadOrphanPurchases:e}=await ds(async()=>{const{loadOrphanPurchases:a}=await Promise.resolve().then(()=>bn);return{loadOrphanPurchases:a}},void 0),r=await e(s(this.#r));r.forEach(a=>{this.#t.set(a.$id,a)}),console.log(`[ProductsStore] ${r.length} dépenses globales chargées`)}catch(e){console.error("[ProductsStore] Erreur chargement dépenses globales:",e)}}#C=G(()=>{let e=0;const r={},a={},n=[];for(const i of this.#t.values()){const o=i.invoiceTotal||i.price||0;e+=o;const l=i.store||"Non défini";r[l]=(r[l]||0)+o;const u=i.who||"Non défini";a[u]=(a[u]||0)+o,n.push(i)}for(const i of this.#e.values()){const o=i.data;if(o.purchases&&o.purchases.length>0){for(const l of o.purchases)if(l.price){e+=l.price;const u=l.store||"Non défini";r[u]=(r[u]||0)+l.price;const f=l.who||"Non défini";a[f]=(a[f]||0)+l.price;const h={...l,_productName:o.productName};n.push(h)}}}return n.sort((i,o)=>{const l=new Date(i.orderDate||i.$createdAt).getTime();return new Date(o.orderDate||o.$createdAt).getTime()-l}),{totalGlobal:e,byStore:r,byWho:a,allPurchases:n}});get financialStats(){return s(this.#C)}set financialStats(e){b(this.#C,e)}}const Z=new Kc;function xn(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const e=new URLSearchParams(window.location.search).get("listId");if(!e||!e.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return e.trim()}function Yc(t){const e=t.substring(0,4),r=t.slice(-10);return`${e}_${r}`}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Jc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Xc=Rl("<svg><!><!></svg>");function $e(t,e){K(e,!0);const r=ye(e,"color",3,"currentColor"),a=ye(e,"size",3,24),n=ye(e,"strokeWidth",3,2),i=ye(e,"absoluteStrokeWidth",3,!1),o=ye(e,"iconNode",19,()=>[]),l=xe(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=Xc();is(u,_=>({...Jc,...l,width:a(),height:a(),stroke:r(),"stroke-width":_,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>i()?Number(n())*24/Number(a()):n()]);var f=c(u);Je(f,17,o,zt,(_,g)=>{var p=G(()=>Ea(s(g),2));let m=()=>s(p)[0],w=()=>s(p)[1];var x=ee(),S=N(x);Ul(S,m,!0,(A,T)=>{is(A,()=>({...w()}))}),v(_,x)});var h=d(f);me(h,()=>e.children??le),v(t,u),Y()}function Jo(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];$e(t,Pe({name:"archive"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function Xo(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];$e(t,Pe({name:"badge-euro"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function Zc(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];$e(t,Pe({name:"bean"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function ed(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];$e(t,Pe({name:"beef"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function td(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];$e(t,Pe({name:"candy-cane"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function rd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];$e(t,Pe({name:"carrot"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function Br(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20 6 9 17l-5-5"}]];$e(t,Pe({name:"check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function ad(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];$e(t,Pe({name:"chef-hat"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function Zo(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m6 9 6 6 6-6"}]];$e(t,Pe({name:"chevron-down"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function sd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];$e(t,Pe({name:"circle-alert"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function nd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];$e(t,Pe({name:"circle-arrow-down"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function od(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];$e(t,Pe({name:"circle-arrow-right"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function En(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];$e(t,Pe({name:"circle-check-big"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function id(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];$e(t,Pe({name:"circle-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function ld(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];$e(t,Pe({name:"circle-x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function cd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];$e(t,Pe({name:"clipboard-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function Pn(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];$e(t,Pe({name:"clipboard-pen-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function $n(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];$e(t,Pe({name:"clock"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function ei(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];$e(t,Pe({name:"cloud"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function Ua(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];$e(t,Pe({name:"cooking-pot"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function dd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];$e(t,Pe({name:"egg"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function ud(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];$e(t,Pe({name:"euro"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function _a(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];$e(t,Pe({name:"funnel-x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function ti(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];$e(t,Pe({name:"funnel"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function ri(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];$e(t,Pe({name:"history"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function vd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];$e(t,Pe({name:"info"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function fd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];$e(t,Pe({name:"layout-list"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function hd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];$e(t,Pe({name:"leaf"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function pd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];$e(t,Pe({name:"list-todo"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function ai(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];$e(t,Pe({name:"loader-circle"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function gd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];$e(t,Pe({name:"lock"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function md(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];$e(t,Pe({name:"log-in"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function _d(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];$e(t,Pe({name:"message-circle-more"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function bd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];$e(t,Pe({name:"message-circle-question-mark"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function si(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];$e(t,Pe({name:"message-circle"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function Ns(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];$e(t,Pe({name:"moon"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function yd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];$e(t,Pe({name:"package-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function wd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];$e(t,Pe({name:"package-plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function Ha(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];$e(t,Pe({name:"package"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function Sd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];$e(t,Pe({name:"pen-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function xd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];$e(t,Pe({name:"pencil-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function Rs(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];$e(t,Pe({name:"plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function Ed(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];$e(t,Pe({name:"refresh-cw"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function Pd(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];$e(t,Pe({name:"refrigerator"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function $d(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];$e(t,Pe({name:"save"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function Ad(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];$e(t,Pe({name:"search"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function ni(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];$e(t,Pe({name:"shopping-basket"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function wr(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];$e(t,Pe({name:"shopping-cart"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function Os(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];$e(t,Pe({name:"snowflake"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function sa(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];$e(t,Pe({name:"square-pen"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function mr(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];$e(t,Pe({name:"store"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function qs(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];$e(t,Pe({name:"sun"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function Td(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];$e(t,Pe({name:"tag"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function oi(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];$e(t,Pe({name:"thermometer"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function ua(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];$e(t,Pe({name:"triangle-alert"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function ii(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];$e(t,Pe({name:"user-plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function js(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];$e(t,Pe({name:"user"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function xa(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];$e(t,Pe({name:"users"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function li(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];$e(t,Pe({name:"utensils"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function qt(t,e){K(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=xe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];$e(t,Pe({name:"x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=ee(),l=N(o);me(l,()=>e.children??le),v(n,o)},$$slots:{default:!0}})),Y()}function kd(t,e){const r=t.reduce((n,i)=>{const o=i.isSynced?0:1,l=i.missingQuantities.length;return n+o+l},0),a=e.invoiceTotal?1:0;return r+a}async function Dd(t,e){const r=t.filter(u=>!u.isSynced).map(u=>({productId:u.productId,productData:u.productData}));let a=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");a=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(u){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",u)}const n=e.purchaseStatus||"delivered";let i=e.purchaseDeliveryDate||null;n==="delivered"&&!i&&(i=new Date().toISOString());const o=t.flatMap(u=>u.missingQuantities.map(f=>({productId:u.productId,quantity:f.q,unit:f.u,status:n,notes:e.notes||"",store:e.store||"",who:e.who||void 0,price:void 0,orderDate:null,deliveryDate:i,createdBy:a})));return{mainId:t[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:o},invoiceData:e}}async function Id(t,e,r){if(!e?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};e.forEach(g=>{g.productData&&(g.productData.mainId=t)});const a=kd(e,r);console.log(`[Appwrite Interactions] Achat groupé: ${e.length} produits, ${a} opérations totales`);const n=100,i=[];if(a<=n)i.push(e);else{let g=[],p=0;for(const m of e){const w=(m.isSynced?0:1)+m.missingQuantities.length;p+w>n?(g.length>0&&i.push(g),g=[m],p=w):(g.push(m),p+=w)}g.length>0&&i.push(g)}console.log(`[Appwrite Interactions] Découpage en ${i.length} lots pour respecter la limite de 100 opérations`);const o=[];let l=0,u=0,f=0;for(let g=0;g<i.length;g++){const p=i[g];console.log(`[Appwrite Interactions] Exécution du lot ${g+1}/${i.length} (${p.length} produits)`);try{const m=await Dd(p,r),w=await Do(()=>Cd(m),{operationName:`Lot ${g+1}/${i.length}`,maxAutoRetries:1,autoRetryDelay:2e3});if(!w)throw new Error("Opération annulée ou échouée après tentatives");if(o.push(w),w.success)l+=w.productsCreated,u+=w.purchasesCreated,f+=w.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${g+1}: ${w.error}`);break}}catch(m){const w=m instanceof Error?m.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${g+1}:`,m),o.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:w,timestamp:new Date().toISOString()});break}}const h=o.every(g=>g.success),_=o.some(g=>!g.success);return{success:h,results:o,totalProductsCreated:l,totalPurchasesCreated:u,totalExpensesCreated:f,error:_?"Un ou plusieurs lots ont échoué":void 0}}async function Cd(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"createGroupPurchaseWithSync",data:t};console.log(`[Appwrite Interactions] Exécution du lot: ${t.batchData.productsToCreate.length} produits à créer, ${t.batchData.purchasesToCreate.length} achats à créer`);const n=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST");if(n.status!=="completed")throw new Error(`Exécution échouée avec statut: ${n.status}. Erreur: ${n.stderr}`);const i=JSON.parse(n.responseBody);return i.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${i.productsCreated} produits créés, ${i.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur exécution lot:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:t.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var Md=(t,e,r)=>e(s(r).id),Nd=y("<span> </span>"),Rd=y('<button><!> <span class="max-w-32 truncate"> </span> <!> <!></button>'),Od=y('<span class="flex items-center gap-1"><!> </span>'),qd=y('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),jd=y('<div class="flex flex-wrap gap-2"></div> <!>',1);function na(t,e){K(e,!0);let r=ye(e,"badgeSize",3,"btn-lg"),a=ye(e,"color",3,"primary"),n=ye(e,"badgeStyle",3,""),i=ye(e,"onToggleItem",3,()=>{}),o=ye(e,"showStats",3,!1),l=ye(e,"showIcon",3,!0),u=L(je({}));Zt(()=>{const x={};e.items.forEach(S=>{x[S.id]=S.selected??!0}),b(u,x,!0)});function f(x){s(u)[x]=!s(u)[x],i()(x)}const h=G(()=>Object.values(s(u)).filter(Boolean).length),_=G(()=>Object.values(s(u)).filter(x=>!x).length);var g=jd(),p=N(g);Je(p,21,()=>e.items,x=>x.id,(x,S)=>{const A=G(()=>s(u)[s(S).id]);var T=Rd();T.__click=[Md,f,S];var D=c(T);{var $=W=>{var ce=ee(),_e=N(ce);yr(_e,()=>s(S).icon,(Ee,Q)=>{Q(Ee,{class:"h-3 w-3",get title(){return s(S).title}})}),v(W,ce)};P(D,W=>{s(S).icon&&W($)})}var I=d(D,2),O=c(I),E=d(I,2);{var U=W=>{var ce=Nd(),_e=c(ce);M(()=>{De(ce,1,`badge badge-sm badge-${a()??""}`),k(_e,s(S).badge)}),v(W,ce)};P(E,W=>{s(S).badge&&W(U)})}var te=d(E,2);{var V=W=>{var ce=ee(),_e=N(ce);{var Ee=de=>{Br(de,{size:16})},Q=de=>{Rs(de,{size:16})};P(_e,de=>{s(A)?de(Ee):de(Q,!1)})}v(W,ce)};P(te,W=>{l()&&W(V)})}M(()=>{De(T,1,`btn ${r()??""} btn-${a()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(A)?`${n()} hover:line-through `:"btn-dash hover:border-solid "}`),lr(T,"title",s(A)?"Retirer de la liste":"Réajouter à la liste"),k(O,s(S).label)}),v(x,T)});var m=d(p,2);{var w=x=>{var S=qd(),A=c(S),T=c(A),D=c(T);Br(D,{class:"text-success h-3 w-3"});var $=d(D),I=d(T,2);{var O=te=>{var V=Od(),W=c(V);qt(W,{class:"text-error h-3 w-3"});var ce=d(W);M(()=>k(ce,` ${s(_)??""} retirés`)),v(te,V)};P(I,te=>{s(_)>0&&te(O)})}var E=d(A,2),U=c(E);M(()=>{k($,` ${s(h)??""} actifs`),k(U,`Total: ${e.items.length??""} items`)}),v(x,S)};P(m,x=>{o()&&x(w)})}v(t,g),Y()}Ye(["click"]);function Ld(t,e){b(e,!s(e))}var Bd=y('<span class="text-base-content font-semibold"> </span>'),zd=y('<div class="text-base-content/80 flex-1"> </div>'),Ud=y('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Hd=y('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Wd=y('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function ci(t,e){let r=ye(e,"icon",3,vd),a=ye(e,"class",3,""),n=ye(e,"initiallyOpen",3,!1),i=r(),o=L(je(n())),l=je(e.children);var u=Wd(),f=c(u);f.__click=[Ld,o];var h=c(f),_=c(h);i(_,{size:24,class:"text-base-content me-4 flex-shrink-0"});var g=d(_,2);{var p=D=>{var $=Bd(),I=c($);M(()=>k(I,e.title)),v(D,$)};P(g,D=>{e.title&&D(p)})}var m=d(h,2);{var w=D=>{var $=zd(),I=c($);M(()=>k(I,e.contentVisible)),v(D,$)};P(m,D=>{e.contentVisible&&D(w)})}var x=d(m,2);{var S=D=>{var $=Ud(),I=c($),O=c(I);{var E=V=>{var W=yt("en savoir plus");v(V,W)},U=V=>{var W=yt("masquer");v(V,W)};P(O,V=>{s(o)?V(U,!1):V(E)})}var te=d(I,2);{let V=G(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(o)?"rotate-180":""}`);Zo(te,{get class(){return s(V)}})}v(D,$)};P(x,D=>{l&&D(S)})}var A=d(f,2);{var T=D=>{var $=Hd(),I=c($),O=c(I);me(O,()=>e.children??le),M(()=>De($,1,`overflow-hidden transition-all duration-200 ${s(o)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),v(D,$)};P(A,D=>{l&&D(T)})}M(()=>{De(u,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${a()}`),_o(u,e.style),De(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),lr(f,"aria-expanded",s(o))}),v(t,u)}Ye(["click"]);var Qd=y('<div class="mb-1 text-xs opacity-70"> </div>'),Gd=(t,e,r)=>e(s(r)),Vd=y("<button><!> </button>"),Fd=y('<div><!> <div class="ms-1 flex flex-wrap items-center gap-1"><!> <!></div></div>');function Ls(t,e){K(e,!0);let r=ye(e,"maxSuggestions",3,8),a=ye(e,"buttonSize",3,"btn-xs"),n=ye(e,"buttonVariant",3,"btn-soft"),i=ye(e,"disabled",3,!1);const o=G(()=>e.suggestions.slice(0,r()));function l(_){!i()&&!_.disabled&&e.onSuggestionClick(_)}var u=ee(),f=N(u);{var h=_=>{var g=Fd(),p=c(g);{var m=A=>{var T=Qd(),D=c(T);M(()=>k(D,e.title)),v(A,T)};P(p,A=>{e.title&&A(m)})}var w=d(p,2),x=c(w);xd(x,{class:"text-base-content/70 mr-1",size:14});var S=d(x,2);Je(S,17,()=>s(o),A=>A.id,(A,T)=>{var D=Vd();D.__click=[Gd,l,T];var $=c(D);{var I=E=>{var U=ee(),te=N(U);yr(te,()=>s(T).icon,(V,W)=>{W(V,{class:"h-3 w-3"})}),v(E,U)};P($,E=>{s(T).icon&&E(I)})}var O=d($);M(()=>{De(D,1,`btn btn-primary ${a()??""} ${n()??""}`),D.disabled=i()||s(T).disabled,lr(D,"title",s(T).disabled?"Déjà sélectionné":s(T).label),k(O,` ${s(T).label??""}`)}),v(A,D)}),v(_,g)};P(f,_=>{s(o).length>0&&_(h)})}v(t,u),Y()}Ye(["click"]);const Kd=[{value:"kg",label:"kg"},{value:"gr.",label:"gr."},{value:"l.",label:"l."},{value:"ml",label:"ml"},{value:"unité",label:"unité·s"},{value:"bottes",label:"botte·s"}];var Yd=y("<option> </option>"),Jd=y('<fieldset class="fieldset"><div class="flex gap-2"><label class="input w-32"><!> <input type="number" step="1" min="0" placeholder="Quantité" required/></label> <select class="custom-select input w-28" required><option disabled selected>Unité</option><!></select></div></fieldset>');function Wa(t,e){K(e,!0);let r=ye(e,"quantity",15),a=ye(e,"unit",15),n=ye(e,"disabled",3,!1);var i=Jd(),o=c(i),l=c(o),u=c(l);Ha(u,{class:"h-4 w-4 opacity-50"});var f=d(u,2),h=d(l,2),_=c(h);_.value=_.__value="";var g=d(_);Je(g,17,()=>Kd,zt,(p,m)=>{let w=()=>s(m).value,x=()=>s(m).label;var S=Yd(),A=c(S),T={};M(()=>{k(A,x()),T!==(T=w())&&(S.value=(S.__value=w())??"")}),v(p,S)}),M(()=>{f.disabled=n(),h.disabled=n()}),Ke(f,r),aa(h,a),v(t,i),Y()}var Xd=y('<div><label class="input w-72"><!> <input/></label> <!></div>');function Qr(t,e){K(e,!0);let r=ye(e,"value",15),a=ye(e,"suggestions",19,()=>[]),n=ye(e,"disabled",3,!1),i=ye(e,"flexCol",3,!1),o=xe(e,["$$slots","$$events","$$legacy","value","suggestions","disabled","flexCol"]);const l=G(()=>a().map(m=>({id:m,label:m,disabled:m===r()})));var u=Xd(),f=c(u),h=c(f);mr(h,{class:"h-4 w-4 opacity-50"});var _=d(h,2);is(_,()=>({type:"text",placeholder:"Magasin",maxlength:"50",disabled:n(),...o}),void 0,void 0,void 0,!0);var g=d(f,2);{var p=m=>{Ls(m,{get suggestions(){return s(l)},onSuggestionClick:w=>r(w.label),buttonSize:"btn-xs"})};P(g,m=>{a().length>0&&m(p)})}M(()=>De(u,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`)),Ke(_,r),v(t,u),Y()}var Zd=y('<div><label class="input w-72"><!> <input type="text" placeholder="Qui" maxlength="25"/></label> <!></div>');function va(t,e){K(e,!0);let r=ye(e,"value",15),a=ye(e,"suggestions",19,()=>[]),n=ye(e,"disabled",3,!1),i=ye(e,"flexCol",3,!1);const o=G(()=>a().map(p=>({id:p,label:p,disabled:p===r()})));var l=Zd(),u=c(l),f=c(u);js(f,{class:"h-4 w-4 opacity-50"});var h=d(f,2);h.__keydown=function(...p){e.onkeydown?.apply(this,p)};var _=d(u,2);{var g=p=>{Ls(p,{get suggestions(){return s(o)},onSuggestionClick:m=>r(m.label),buttonSize:"btn-xs"})};P(_,p=>{a().length>0&&p(g)})}M(()=>{De(l,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`),h.disabled=n()}),Ke(h,r),v(t,l),Y()}Ye(["keydown"]);var eu=y('<textarea class="textarea w-full text-sm" placeholder="Commentaire (optionnel)" rows="2" maxlength="250"></textarea>');function Gr(t,e){K(e,!0);let r=ye(e,"value",15),a=ye(e,"disabled",3,!1);var n=eu();M(()=>n.disabled=a()),Ke(n,r),v(t,n),Y()}var tu=y('<label class="input w-28"><!> <input type="number" step="1" min="0" placeholder="0.00"/></label>');function Bs(t,e){K(e,!0);let r=ye(e,"value",15),a=ye(e,"disabled",3,!1);var n=tu(),i=c(n);ud(i,{class:"h-4 w-4 opacity-50"});var o=d(i,2);M(()=>o.disabled=a()),Ke(o,r),v(t,n),Y()}var ru=y('<label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label>'),au=y(`<div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Acheté</option><option>Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div>`);function di(t,e){K(e,!0);let r=ye(e,"status",15),a=ye(e,"deliveryDate",15),n=ye(e,"disabled",3,!1);var i=au(),o=c(i),l=c(o),u=c(l);u.value=u.__value="delivered";var f=d(u);f.value=f.__value="ordered";var h=d(l,2),_=d(o,2);{var g=p=>{var m=ru(),w=d(c(m),2);M(()=>w.disabled=n()),Ke(w,a),v(p,m)};P(_,p=>{r()==="ordered"&&p(g)})}M(()=>{l.disabled=n(),De(h,1,`label ${r()==="delivered"?"":"hidden"}`)}),aa(l,r),v(t,i),Y()}function An(t,e,r){s(e)||r.onClose()}var su=y('<div class="alert alert-error"><!> <span> </span></div>'),nu=y('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),ou=y(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes <strong>pour la période sélectionnée</strong>, c'est à dire le besoin total pour chaque produit sur cette
            période moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),iu=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),lu=y("<!> ",1),cu=y(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="mb-4 flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><!> <!></div> <!> <!> <div><!></div></div> <div class="mb-4"><h4 class=" font-medium">Produits concernés</h4> <div class="text-base-content/70 mb-4">les quantités manquantes du <span class="badge badge-info badge-sm"> </span> au <span class="badge badge-info badge-sm"> </span> pour les produits suivant seront déclarés "acheté"</div> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function du(t,e){K(e,!0);let r=L(!1),a=L(null),n=L(null),i=je({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),o=L(je(new Set));Zt(()=>{b(o,new Set(e.products.map(B=>B.$id)),!0)});const l=G(()=>e.products.filter(B=>s(o).has(B.$id))),u=G(()=>s(l).length!==0),f=G(()=>{const B=Z.dateRange;let j="";return B?.start&&B?.end&&(B.start===B.end?j=` - ${hr(B.start)}`:j=` - Du ${hr(B.start)} au ${hr(B.end)}`),`Achat groupé (${s(l).length} produits sélectionnés)${j}`});async function h(){if(!s(u)||s(r))return;b(r,!0),b(a,null),b(n,null);const B=`FACTURE_${Date.now()}`,j=s(l).map(ve=>ve.$id);Z.setSyncStatus(j,!0),Dt.backgroundOperation={isRunning:!0,name:`Achat groupé (${s(l).length} produits)`,progress:0};const se=[];for(const ve of s(l)){const H=(Z.getProductModelById(ve.$id)?.stats.missingQuantities||[]).filter(he=>he.q<0).map(he=>({...he,q:Math.abs(he.q)}));se.push({productId:ve.$id,isSynced:ve.isSynced,productData:ve,missingQuantities:H})}const be={invoiceId:B,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(l).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${se.length} produits...`),e.onClose();try{const ve=await Id(Z.currentMainId,se,be);if(ve.success)console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${ve.totalProductsCreated} produits synchronisés, ${ve.totalPurchasesCreated} achats créés, ${ve.totalExpensesCreated} dépenses globales`),Qe.success(`Achat groupé réussi ! ${ve.totalPurchasesCreated} achats créés.`),e.onSuccess?.();else throw new Error(ve.error||"Erreur lors de la création de l'achat groupé")}catch(ve){const Me=ve instanceof Error?ve.message:"Erreur inconnue";console.error("[GroupPurchaseModal] Erreur création achat groupé:",ve),Qe.error(`Erreur achat groupé: ${Me}`),Z.clearSyncStatus()}finally{b(r,!1),Dt.backgroundOperation={isRunning:!1,name:"",progress:0}}}function _(B){const j=new Set(s(o));j.has(B)?j.delete(B):j.add(B),b(o,j,!0)}const g=G(()=>e.products.map(B=>{const j=Z.getProductModelById(B.$id);return{id:B.$id,label:B.productName,title:`${B.productName} - Manque: ${j?.stats.formattedMissingQuantities||"-"}`,badge:j?.stats.formattedMissingQuantities||"-"}}));var p=cu(),m=c(p),w=c(m),x=c(w),S=c(x);wr(S,{class:"h-5 w-5"});var A=d(S),T=d(x,2);T.__click=[An,r,e];var D=c(T);qt(D,{class:"h-4 w-4"});var $=d(w,2),I=c($);{var O=B=>{var j=su(),se=c(j);ua(se,{class:"h-4 w-4"});var be=d(se,2),ve=c(be);M(()=>k(ve,s(a))),v(B,j)};P(I,B=>{s(a)&&B(O)})}var E=d(I,2);{var U=B=>{var j=nu(),se=c(j);Br(se,{class:"h-4 w-4"});var be=d(se,2),ve=c(be),Me=d(ve);{var H=Be=>{var Ue=yt("+ 1 dépense globale");v(Be,Ue)};P(Me,Be=>{s(n).expense&&Be(H)})}var he=d(Me,2);{var Le=Be=>{var Ue=yt();M(()=>k(Ue,`(traité en ${s(n).batches??""} lots)`)),v(Be,Ue)};P(he,Be=>{s(n).batches&&s(n).batches>1&&Be(Le)})}M(()=>k(ve,`Achat groupé créé avec succès ! ${s(n).purchases??""} produit(s) validés `)),v(B,j)};P(E,B=>{s(n)&&B(U)})}var te=d(E,2),V=c(te);ci(V,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit sur la période sélectionnée.",class:"bg-base-200",children:(B,j)=>{var se=ou();v(B,se)},$$slots:{default:!0}});var W=d(te,2),ce=d(c(W),2),_e=c(ce);Qr(_e,{get suggestions(){return Z.uniqueStores},get disabled(){return s(r)},get value(){return i.store},set value(B){i.store=B}});var Ee=d(_e,2);va(Ee,{get suggestions(){return Z.uniqueWho},get disabled(){return s(r)},get value(){return i.who},set value(B){i.who=B}});var Q=d(ce,2);Bs(Q,{get disabled(){return s(r)},get value(){return i.expense},set value(B){i.expense=B}});var de=d(Q,2);di(de,{get disabled(){return s(r)},get status(){return i.status},set status(B){i.status=B},get deliveryDate(){return i.deliveryDate},set deliveryDate(B){i.deliveryDate=B}});var we=d(de,2),ne=c(we);Gr(ne,{get disabled(){return s(r)},get value(){return i.notes},set value(B){i.notes=B}});var ae=d(W,2),pe=d(c(ae),2),Se=d(c(pe)),F=c(Se),J=d(Se,2),C=c(J),re=d(pe,2);na(re,{get items(){return s(g)},onToggleItem:_,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var q=d(ae,2),ie=c(q);ie.__click=[An,r,e];var oe=d(ie,2);oe.__click=h;var R=c(oe);{var X=B=>{var j=iu();v(B,j)},ue=B=>{var j=lu(),se=N(j);wr(se,{class:"h-4 w-4"});var be=d(se);M(()=>k(be,` Valider ${s(l).length??""} produit(s)`)),v(B,j)};P(R,B=>{s(r)?B(X):B(ue,!1)})}M((B,j)=>{k(A,` ${s(f)??""}`),T.disabled=s(r),k(F,B),k(C,j),ie.disabled=s(r),oe.disabled=s(r)||!s(u)},[()=>hr(Z.dateRange.start),()=>hr(Z.dateRange.start)]),v(t,p),Y()}Ye(["click"]);function Za(t,e,r,a){e(!1),b(r,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0),b(a,null)}var uu=y('<div class="alert alert-error text-sm"><!> <span> </span></div>'),vu=(t,e)=>e(!0),fu=y('<span class="loading loading-spinner"></span>'),hu=y('<span class="loading loading-spinner"></span>'),pu=y('<div role="dialog"><div class="modal-box relative w-10/12 max-w-5xl"><button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" aria-label="Fermer"><!></button> <h3 class="text-lg font-bold">Ajouter un produit</h3> <form class="mt-6 space-y-4"><!> <fieldset class="space-y-4"><div class="flex flex-wrap gap-4"><fieldset class="fieldset"><label class="input w-72"><!> <input id="product-name" type="text" placeholder="Nom du produit"/></label></fieldset> <!></div> <fieldset class="fieldset"><div class="flex flex-wrap items-baseline gap-2"><label class="input w-72"><!> <input id="product-type" type="text" placeholder="type / catégorie"/></label> <!></div></fieldset> <!> <!> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-success"/> <span class="label-text flex items-center gap-2"><!> Produit frais</span></label></fieldset> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-info"/> <span class="label-text flex items-center gap-2"><!> Produit surgelé</span></label></fieldset></fieldset> <div class="modal-action flex justify-between"><button type="button" class="btn btn-ghost">Annuler</button> <div class="flex gap-2"><button type="button" class="btn btn-secondary"><!> Ajouter et créer un nouveau</button> <button type="submit" class="btn btn-primary"><!> Ajouter et fermer</button></div></div></form></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></div>');function gu(t,e){K(e,!0);let r=ye(e,"open",15,!1),a=L(!1),n=L(null),i=L(!1),o=L(je({productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""}));const l=G(()=>s(o).productName.trim().length>0&&s(o).productType.trim().length>0),u=G(()=>Z.uniqueProductTypes.map(H=>({id:H,label:H})));async function f(H=!1){if(!(!s(l)||s(a))){b(a,!0),b(n,null),b(i,!1);try{if(!Z.currentMainId)throw new Error("Aucun événement principal sélectionné");const he={productName:s(o).productName.trim(),productType:s(o).productType.trim(),store:s(o).store.trim()?{storeName:s(o).store.trim()}:void 0,who:s(o).who.trim()?[s(o).who.trim()]:void 0,pFrais:s(o).pFrais,pSurgel:s(o).pSurgel,quantity:s(o).quantity?{q:s(o).quantity,u:s(o).unit.trim()||"pièces"}:void 0};await Mo(he,Z.currentMainId),b(i,!0),H?(s(o).productName="",s(o).quantity=void 0,s(o).unit="",s(o).pFrais=!1,s(o).pSurgel=!1,setTimeout(()=>{document.getElementById("product-name")?.focus()},100)):(r(!1),b(o,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0))}catch(he){console.error("Error creating product:",he),b(n,"Erreur lors de la création du produit. Veuillez réessayer.")}finally{b(a,!1)}}}Zt(()=>{r()&&setTimeout(()=>{document.getElementById("product-name")?.focus()},50)});var h=pu();let _;var g=c(h),p=c(g);p.__click=[Za,r,o,n];var m=c(p);qt(m,{size:20});var w=d(p,4),x=c(w);{var S=H=>{var he=uu(),Le=c(he);ua(Le,{size:18});var Be=d(Le,2),Ue=c(Be);M(()=>k(Ue,s(n))),v(H,he)};P(x,H=>{s(n)&&H(S)})}var A=d(x,2),T=c(A),D=c(T),$=c(D),I=c($);wd(I,{class:"text-base-content/50 h-5 w-5"});var O=d(I,2),E=d(D,2);Wa(E,{get disabled(){return s(a)},get quantity(){return s(o).quantity},set quantity(H){s(o).quantity=H},get unit(){return s(o).unit},set unit(H){s(o).unit=H}});var U=d(T,2),te=c(U),V=c(te),W=c(V);Td(W,{class:"text-base-content/50 h-5 w-5"});var ce=d(W,2),_e=d(V,2);Ls(_e,{get suggestions(){return s(u)},onSuggestionClick:H=>s(o).productType=H.label,get disabled(){return s(a)}});var Ee=d(U,2);Qr(Ee,{get suggestions(){return Z.uniqueStores},get disabled(){return s(a)},get value(){return s(o).store},set value(H){s(o).store=H}});var Q=d(Ee,2);va(Q,{get suggestions(){return Z.uniqueWho},get disabled(){return s(a)},get value(){return s(o).who},set value(H){s(o).who=H}});var de=d(Q,2),we=c(de),ne=c(we),ae=d(ne,2),pe=c(ae);oi(pe,{class:"h-4 w-4"});var Se=d(de,2),F=c(Se),J=c(F),C=d(J,2),re=c(C);Os(re,{class:"h-4 w-4"});var q=d(A,2),ie=c(q);ie.__click=[Za,r,o,n];var oe=d(ie,2),R=c(oe);R.__click=[vu,f];var X=c(R);{var ue=H=>{var he=fu();v(H,he)},B=H=>{Rs(H,{size:18})};P(X,H=>{s(a)?H(ue):H(B,!1)})}var j=d(R,2),se=c(j);{var be=H=>{var he=hu();v(H,he)};P(se,H=>{s(a)&&H(be)})}var ve=d(g,2),Me=c(ve);Me.__click=[Za,r,o,n],M(H=>{_=De(h,1,"modal",null,_,H),A.disabled=s(a),O.disabled=s(a),ce.disabled=s(a),ne.disabled=s(a),J.disabled=s(a),ie.disabled=s(a),R.disabled=s(a)||!s(o).productName,j.disabled=s(a)||!s(o).productName},[()=>({"modal-open":r()})]),Nr("submit",w,H=>{H.preventDefault(),f(!1)}),Ke(O,()=>s(o).productName,H=>s(o).productName=H),Ke(ce,()=>s(o).productType,H=>s(o).productType=H),cs(ne,()=>s(o).pFrais,H=>s(o).pFrais=H),cs(J,()=>s(o).pSurgel,H=>s(o).pSurgel=H),v(t,h),Y()}Ye(["click"]);function vs(t){switch(t.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Zc};case"animaux":return{displayName:"Viandes et Poissons",icon:ed};case"legumes":return{displayName:"Fruits et Légumes",icon:rd};case"sucres":return{displayName:"Sucrées",icon:td};case"lof":return{displayName:"L.O.F",icon:dd};case"autres":return{displayName:"Autres",icon:ad};case"epices":return{displayName:"Assaisonnements",icon:hd};case"frais":return{displayName:"Produits Frais",icon:Pd};default:return{displayName:t,icon:Ha}}}function fs(t,e){return e==="kg"?{quantity:t*1e3,unit:"gr."}:e==="l."?{quantity:t*1e3,unit:"ml"}:{quantity:t,unit:e}}function zs(t,e){let r,a;if(e==="gr."&&t>=1e3){const n=t/1e3;r=es(n),a="kg"}else if(e==="ml"&&t>=1e3){const n=t/1e3;r=es(n),a="l"}else r=es(t),a=e;return`${r} ${a}`}function es(t){return(Math.round(t*10)/10).toString().replace(/\.0$/,"")}function Qa(t){if(!t)return"-";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}function mu(t){if(!t)return"";try{return new Date(t).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short"})}catch{return t}}function hs(t){switch(t){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function Tn(t){return t?Qa(t):"-"}function _u(t){if(!t?.length)return[];const e=t.reduce((r,a)=>{const n=a.status||"direct",i=a.unit||"unit",o=`${n}_${i}`;if(!r[o]){const l=hs(n);r[o]={status:n,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:bu(n),deliveryDate:n==="ordered"&&a.deliveryDate?mu(a.deliveryDate):void 0}}return r[o].quantity+=a.quantity||0,r},{});return Object.values(e).map(r=>({...r,quantity:zs(r.quantity,r.unit).replace(` ${r.unit}`,"")}))}function bu(t){switch(t){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"Check";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}class yu{constructor(e,r="recettes"){this.productId=e,this.currentTab=r,this.initForms()}#e=L(!1);get loading(){return s(this.#e)}set loading(e){b(this.#e,e,!0)}#t=L(null);get error(){return s(this.#t)}set error(e){b(this.#t,e,!0)}#r=L("recettes");get currentTab(){return s(this.#r)}set currentTab(e){b(this.#r,e,!0)}#o=G(()=>{const e=this.productId;return Z.getEnrichedProductById(e)});get product(){return s(this.#o)}set product(e){b(this.#o,e)}#d=G(()=>this.product?.who??[]);get whoList(){return s(this.#d)}set whoList(e){b(this.#d,e)}#l=G(()=>this.product?.stockParsed??null);get stockParsed(){return s(this.#l)}set stockParsed(e){b(this.#l,e)}#s=G(()=>this.product?.purchases??[]);get purchasesList(){return s(this.#s)}set purchasesList(e){b(this.#s,e)}#i=G(()=>this.product?.byDate?$o(this.product.byDate):[]);get recipes(){return s(this.#i)}set recipes(e){b(this.#i,e)}#u=L(je({purchase:{quantity:null,unit:"",store:"",who:Dt.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]}));get forms(){return s(this.#u)}set forms(e){b(this.#u,e,!0)}#c=L(je({overrideManagerEditMode:!1}));get uiStates(){return s(this.#c)}set uiStates(e){b(this.#c,e,!0)}#v=L(null);get editingPurchaseId(){return s(this.#v)}set editingPurchaseId(e){b(this.#v,e,!0)}#a=G(()=>this.editingPurchaseId?this.purchasesList.find(e=>e.$id===this.editingPurchaseId)??null:null);get editingPurchaseData(){return s(this.#a)}set editingPurchaseData(e){b(this.#a,e)}#f=L(null);get originalFormsSnapshot(){return s(this.#f)}set originalFormsSnapshot(e){b(this.#f,e,!0)}initForms(){const e=Z.getEnrichedProductById(this.productId);e&&(this.forms.purchase.quantity=e.missingQuantityArray[0]?.q??null,this.forms.purchase.unit=e.totalNeededArray[0]?.u??"",this.forms.purchase.store=e.storeInfo?.storeName??"",this.forms.purchase.who=Dt.userName()??"",this.forms.purchase.status=this.forms.purchase.status||"delivered",this.forms.stock.unit=e.totalNeededArray[0]?.u??"",this.forms.store.name=e.storeInfo?.storeName??"",this.forms.store.comment=e.storeInfo?.storeComment??null,this.forms.who=e.who?[...e.who]:[],this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})}#h=G(()=>this.originalFormsSnapshot?{store:this.forms.store.name!==this.originalFormsSnapshot.store.name||this.forms.store.comment!==this.originalFormsSnapshot.store.comment,stock:this.hasStockChanges(),who:JSON.stringify(this.forms.who)!==JSON.stringify(this.originalFormsSnapshot.whoList)}:{store:!1,stock:!1,who:!1});get hasChanges(){return s(this.#h)}set hasChanges(e){b(this.#h,e)}#p=G(()=>!!(this.originalFormsSnapshot&&(this.hasChanges.store||this.hasChanges.stock||this.hasChanges.who)));get hasAnyChanges(){return s(this.#p)}set hasAnyChanges(e){b(this.#p,e)}hasStockChanges(){return this.isStockFormValid?this.stockParsed?this.forms.stock.quantity.toString()!==this.stockParsed.quantity||this.forms.stock.unit!==this.stockParsed.unit||(this.forms.stock.notes||"")!==(this.stockParsed.notes||""):!0:!1}get isPurchaseFormValid(){return this.forms.purchase.quantity!==null&&this.forms.purchase.quantity!==0&&(this.forms.purchase.unit?.trim()??"")!==""}get isStockFormValid(){return this.forms.stock.quantity!==null&&this.forms.stock.quantity>0&&(this.forms.stock.unit?.trim()??"")!==""}setCurrentTab(e){this.currentTab=e}async addPurchase(){this.product&&await this.withLoading(async()=>{if(!this.forms.purchase.quantity||!this.forms.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!Z.currentMainId)throw new Error("mainId non disponible");const{quantity:e,unit:r}=fs(this.forms.purchase.quantity,this.forms.purchase.unit);this.product.isSynced||await Qt(this.product.$id,{},i=>Z.getEnrichedProductById(i));const a=this.forms.purchase.status||"delivered";let n=this.forms.purchase.deliveryDate||null;a==="delivered"&&!n&&(n=new Date().toISOString()),await jo({products:[this.product.$id],mainId:Z.currentMainId,unit:r,quantity:e,store:this.forms.purchase.store||null,who:this.forms.purchase.who||null,notes:this.forms.purchase.notes||"",price:this.forms.purchase.price||null,status:a,orderDate:this.forms.purchase.orderDate||null,deliveryDate:n}),this.forms.purchase={quantity:this.product.missingQuantityArray[0]?.q??null,unit:this.product.totalNeededArray[0]?.u??"",store:this.forms.purchase.store,who:this.forms.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}startEditPurchase(e){this.editingPurchaseId=e.$id}cancelEditPurchase(){this.editingPurchaseId=null}async updateEditedPurchase(e){e.$id&&await this.withLoading(async()=>{const{quantity:r,unit:a}=fs(e.quantity,e.unit),n=e.status||null;let i=e.deliveryDate||null;n==="delivered"&&!i&&(i=new Date().toISOString()),await Cs(e.$id,{unit:a,quantity:r,store:e.store||null,who:e.who||null,notes:e.notes||"",price:e.price||null,status:n,orderDate:e.orderDate||null,deliveryDate:i}),this.editingPurchaseId=null},"Achat modifié avec succès")}async removePurchase(e){const r=this.purchasesList.find(a=>a.$id===e);r&&confirm(`Supprimer cet achat (${r.quantity} ${r.unit}) ?`)&&await this.withLoading(async()=>{await Lo(e)},"Achat supprimé avec succès")}async setStock(){this.product&&await this.withLoading(async()=>{if(!this.forms.stock.quantity||!this.forms.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const e={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};this.product.isSynced?await us(this.product.$id,JSON.stringify(e)):await Qt(this.product.$id,{stockReel:JSON.stringify(e)},r=>Z.getEnrichedProductById(r)),this.forms.stock.quantity=null,this.forms.stock.notes="",this.forms.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async removeStock(){this.product&&confirm("Supprimer le stock actuel ?")&&await this.withLoading(async()=>{this.product.isSynced?await us(this.product.$id,null):await Qt(this.product.$id,{stockReel:null},e=>Z.getEnrichedProductById(e))},"Stock supprimé")}async setWho(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Ro(this.product.$id,e):await Qt(this.product.$id,{who:e},r=>Z.getEnrichedProductById(r))},"Volontaires mis à jour")}async updateStore(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await No(this.product.$id,e):await Qt(this.product.$id,{store:JSON.stringify(e)},r=>Z.getEnrichedProductById(r))},"Magasin mis à jour")}async setOverride(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Is(this.product.$id,e,!0):await Qt(this.product.$id,{totalNeededOverride:JSON.stringify(e)},r=>Z.getEnrichedProductById(r))},"Override appliqué")}async removeOverride(){this.product&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await this.withLoading(async()=>{await Oo(this.product.$id,!0)},"Override supprimé")}async saveAllChanges(){!this.product||!this.hasAnyChanges||await this.withLoading(async()=>{const e={};if(this.hasChanges.stock&&this.forms.stock.quantity&&this.forms.stock.unit){const r={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};e.stockReel=JSON.stringify(r)}if(this.hasChanges.who&&(e.who=this.forms.who),this.hasChanges.store){const r={storeName:this.forms.store.name||"",storeComment:this.forms.store.comment||void 0};e.storeInfo=r}Object.keys(e).length>0&&(await qo(this.product.$id,e,r=>Z.getEnrichedProductById(r)),this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})},"Modifications enregistrées")}resetForms(){this.uiStates.overrideManagerEditMode=!1,this.editingPurchaseId=null,this.initForms(),console.log("[ProductModalState] Formulaires et états UI réinitialisés")}async withLoading(e,r){this.loading=!0,this.error=null;try{const a=await e();return r&&this.showToast("success",r),a}catch(a){const n=a instanceof Error?a.message:"Une erreur est survenue";return this.error=n,this.showToast("error",n),console.error("[ProductModalState]",a),null}finally{this.loading=!1}}showToast(e,r){const a=new CustomEvent("toast",{detail:{type:e,message:r}});window.dispatchEvent(a)}formatQuantity=zs;formatDate=Qa}var wu=y('<div class="text-xs font-medium text-base-content/60 mb-1"> </div>'),Su=y('<div class="text-xs text-base-content/60 mt-1"> </div>'),xu=y('<div class="font-medium"> </div> <!>',1),Eu=y('<pre class="text-xs"> </pre>'),Pu=y('<span class="text-base-content/50 italic">Non défini</span>'),$u=y('<div class="bg-base-300/50 rounded p-2 text-left"><!> <div class="text-sm"><!></div></div>'),Au=y('<div class="bg-base-200/50 border border-warning/20 rounded-lg p-4 text-center"><div class="flex items-center justify-center gap-2 mb-2"><!> <!> <span class="font-medium text-warning"> </span></div> <p class="text-sm text-base-content/70 mb-3"> </p> <!></div>');function Ga(t,e){K(e,!0);let r=ye(e,"title",3,"Événement terminé"),a=ye(e,"message",3,"Cet événement est terminé. Ces données ne sont plus modifiables mais sont conservées pour consultation."),n=ye(e,"showData",3,!0),i=ye(e,"data",3,null),o=ye(e,"dataLabel",3,"");var l=Au(),u=c(l),f=c(u);ri(f,{class:"h-5 w-5 text-warning"});var h=d(f,2);gd(h,{class:"h-4 w-4 text-warning/70"});var _=d(h,2),g=c(_),p=d(u,2),m=c(p),w=d(p,2);{var x=S=>{var A=$u(),T=c(A);{var D=U=>{var te=wu(),V=c(te);M(()=>k(V,`${o()??""} :`)),v(U,te)};P(T,U=>{o()&&U(D)})}var $=d(T,2),I=c($);{var O=U=>{var te=yt();M(()=>k(te,i())),v(U,te)},E=U=>{var te=ee(),V=N(te);{var W=_e=>{var Ee=yt();M(Q=>k(Ee,Q),[()=>i().join(", ")]),v(_e,Ee)},ce=_e=>{var Ee=ee(),Q=N(Ee);{var de=ne=>{var ae=ee(),pe=N(ae);{var Se=J=>{var C=xu(),re=N(C),q=c(re),ie=d(re,2);{var oe=R=>{var X=Su(),ue=c(X);M(()=>k(ue,i().storeComment)),v(R,X)};P(ie,R=>{i().storeComment&&R(oe)})}M(()=>k(q,i().storeName)),v(J,C)},F=J=>{var C=Eu(),re=c(C);M(q=>k(re,q),[()=>JSON.stringify(i(),null,2)]),v(J,C)};P(pe,J=>{i().storeName?J(Se):J(F,!1)})}v(ne,ae)},we=ne=>{var ae=Pu();v(ne,ae)};P(Q,ne=>{typeof i()=="object"&&i()!==null?ne(de):ne(we,!1)},!0)}v(_e,Ee)};P(V,_e=>{Array.isArray(i())&&i().length>0?_e(W):_e(ce,!1)},!0)}v(U,te)};P(I,U=>{typeof i()=="string"||typeof i()=="number"?U(O):U(E,!1)})}v(S,A)};P(w,S=>{n()&&i()&&S(x)})}M(()=>{k(g,r()),k(m,a())}),v(t,l),Y()}function Tu(t,e){e().isPurchaseFormValid&&(e().forms.purchase.status==="ordered"&&!e().forms.purchase.orderDate&&(e().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),e().addPurchase())}function ku(t,e,r){const a=e().editingPurchaseData;!a||!r(a)||e().updateEditedPurchase(a)}function Du(t,e){e().cancelEditPurchase()}var Iu=y('<span class="loading loading-spinner loading-sm"></span>'),Cu=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="space-y-6"><div class="flex flex-wrap items-baseline gap-4"><!> <!> <!> <!></div> <div><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div>'),Mu=y('<div class="mt-4 py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Nu=y("<th>Actions</th>"),Ru=y('<span class="loading loading-spinner loading-sm"></span>'),Ou=y('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="1" min="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="50"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Acheté</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),qu=(t,e,r)=>e(s(r)),ju=(t,e,r)=>e(s(r).$id),Lu=y('<span class="loading loading-spinner loading-sm"></span>'),Bu=y('<td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td>'),zu=y('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><!></tr>'),Uu=y('<div class="mt-4 overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><!></tr></thead><tbody></tbody></table></div>'),Hu=y('<div class="space-y-4"><!></div> <!>',1);function Wu(t,e){K(e,!0);let r=ye(e,"modalState",7),a=ye(e,"isArchiveMode",3,!1);function n(w){return w.quantity!==null&&w.quantity!==0&&w.unit?.trim()!==""}function i(w){r().removePurchase(w)}function o(w){r().startEditPurchase(w)}var l=Hu(),u=N(l),f=c(u);{var h=w=>{Ga(w,{title:"Achats non modifiables",message:"L'événement est terminé, les achats ne peuvent plus être ajoutés ou modifiés."})},_=w=>{var x=Cu(),S=c(x),A=d(c(S),2),T=c(A),D=c(T);Wa(D,{get disabled(){return r().loading},get quantity(){return r().forms.purchase.quantity},set quantity(Q){r().forms.purchase.quantity=Q},get unit(){return r().forms.purchase.unit},set unit(Q){r().forms.purchase.unit=Q}});var $=d(D,2);Bs($,{get disabled(){return r().loading},get value(){return r().forms.purchase.price},set value(Q){r().forms.purchase.price=Q}});var I=d($,2);Qr(I,{get suggestions(){return Z.uniqueStores},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.store},set value(Q){r().forms.purchase.store=Q}});var O=d(I,2);va(O,{get suggestions(){return Z.uniqueWho},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.who},set value(Q){r().forms.purchase.who=Q}});var E=d(T,2),U=c(E);Gr(U,{get disabled(){return r().loading},get value(){return r().forms.purchase.notes},set value(Q){r().forms.purchase.notes=Q}});var te=d(E,2);di(te,{get disabled(){return r().loading},get status(){return r().forms.purchase.status},set status(Q){r().forms.purchase.status=Q},get deliveryDate(){return r().forms.purchase.deliveryDate},set deliveryDate(Q){r().forms.purchase.deliveryDate=Q}});var V=d(A,2),W=c(V);W.__click=[Tu,r];var ce=c(W);{var _e=Q=>{var de=Iu();v(Q,de)},Ee=Q=>{var de=yt("Ajouter l'achat");v(Q,de)};P(ce,Q=>{r().loading?Q(_e):Q(Ee,!1)})}M(()=>W.disabled=r().loading||!r().isPurchaseFormValid),v(w,x)};P(f,w=>{a()?w(h):w(_,!1)})}var g=d(u,2);{var p=w=>{var x=Mu(),S=c(x);wr(S,{class:"mx-auto mb-2 h-12 w-12"}),v(w,x)},m=w=>{var x=Uu(),S=c(x),A=c(S),T=c(A),D=d(c(T),8);{var $=O=>{var E=Nu();v(O,E)};P(D,O=>{a()||O($)})}var I=d(A);Je(I,21,()=>r().purchasesList,O=>O.$id,(O,E,U)=>{var te=ee(),V=N(te);{var W=_e=>{var Ee=Ou(),Q=c(Ee),de=c(Q),we=c(de),ne=d(we,2),ae=c(ne);ae.value=ae.__value="kg";var pe=d(ae);pe.value=pe.__value="gr.";var Se=d(pe);Se.value=Se.__value="l.";var F=d(Se);F.value=F.__value="ml";var J=d(F);J.value=J.__value="unité";var C=d(J);C.value=C.__value="bottes";var re=d(Q),q=c(re),ie=d(re),oe=c(ie),R=d(ie),X=c(R),ue=c(X);ue.value=ue.__value="ordered";var B=d(ue);B.value=B.__value="delivered";var j=d(R),se=c(j),be=d(j),ve=c(be),Me=d(be),H=c(Me),he=d(Me),Le=c(he),Be=d(he),Ue=c(Be),Ne=c(Ue);Ne.__click=[ku,r,n];var et=c(Ne);{var It=Te=>{var Xe=Ru();v(Te,Xe)},Ae=Te=>{$d(Te,{class:"h-3 w-3"})};P(et,Te=>{r().loading?Te(It):Te(Ae,!1)})}var Ie=d(Ne,2);Ie.__click=[Du,r];var ze=c(Ie);qt(ze,{class:"h-3 w-3"}),M(Te=>Ne.disabled=Te,[()=>r().loading||!n(s(E))]),Ke(we,()=>s(E).quantity,Te=>s(E).quantity=Te),aa(ne,()=>s(E).unit,Te=>s(E).unit=Te),Ke(q,()=>s(E).store,Te=>s(E).store=Te),Ke(oe,()=>s(E).who,Te=>s(E).who=Te),aa(X,()=>s(E).status,Te=>s(E).status=Te),Ke(se,()=>s(E).orderDate,Te=>s(E).orderDate=Te),Ke(ve,()=>s(E).deliveryDate,Te=>s(E).deliveryDate=Te),Ke(H,()=>s(E).price,Te=>s(E).price=Te),Ke(Le,()=>s(E).notes,Te=>s(E).notes=Te),v(_e,Ee)},ce=_e=>{var Ee=zu(),Q=c(Ee),de=c(Q),we=d(Q),ne=c(we),ae=d(we),pe=c(ae),Se=d(ae),F=c(Se),J=c(F),C=d(Se),re=c(C),q=d(C),ie=c(q),oe=d(q),R=c(oe),X=d(oe),ue=c(X),B=d(X);{var j=se=>{var be=Bu(),ve=c(be),Me=c(ve);Me.__click=[qu,o,E];var H=c(Me);sa(H,{class:"h-4 w-4"});var he=d(Me,2);he.__click=[ju,i,E];var Le=c(he);{var Be=Ne=>{var et=Lu();v(Ne,et)},Ue=Ne=>{qt(Ne,{class:"h-4 w-4"})};P(Le,Ne=>{r().loading?Ne(Be):Ne(Ue,!1)})}M(()=>he.disabled=r().loading),v(se,be)};P(B,se=>{a()||se(j)})}M((se,be,ve,Me,H)=>{k(de,se),k(ne,s(E).store||"-"),k(pe,s(E).who||"-"),De(F,1,`badge badge-sm ${be??""}`),k(J,ve),k(re,Me),k(ie,H),k(R,s(E).price?`${s(E).price}€`:"-"),k(ue,s(E).notes||"-")},[()=>zs(s(E).quantity,s(E).unit),()=>hs(s(E).status).class,()=>hs(s(E).status).text,()=>Tn(s(E).orderDate),()=>Tn(s(E).deliveryDate)]),v(_e,Ee)};P(V,_e=>{r().editingPurchaseId===s(E).$id?_e(W):_e(ce,!1)})}v(O,te)}),v(w,x)};P(g,w=>{r().purchasesList.length===0?w(p):w(m,!1)})}v(t,l),Y()}Ye(["click"]);async function Qu(t,e){await e()?.removeStock()}var Gu=y(`Le stock réel est la quantité réelle du produit constaté dans le
            stock: <strong>il sera utilisé pour le calcul des quantités manquantes à se
              fournir à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantités manquantes à se fournir.`,1),Vu=(t,e)=>{e().forms.stock.quantity=null,e().forms.store.comment=""},Fu=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><!></div> <div><!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>'),Ku=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Yu=y('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),Ju=y('<span class="loading loading-spinner loading-xs"></span>'),Xu=y('<div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div>'),Zu=y('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <!></div></div>'),ev=y('<div class="space-y-4"><!></div> <!>',1);function tv(t,e){K(e,!0);let r=ye(e,"modalState",7),a=ye(e,"isArchiveMode",3,!1);var n=ev(),i=N(n),o=c(i);{var l=g=>{Ga(g,{title:"Stock non modifiable",message:"L'événement est terminé, le stock ne peut plus être modifié.",get data(){return r().stockParsed},dataLabel:"Stock actuel"})},u=g=>{var p=Fu(),m=c(p),w=c(m),x=c(w),S=d(w,2),A=c(S);ci(A,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(U,te)=>{var V=Gu();v(U,V)},$$slots:{default:!0}});var T=d(S,2),D=c(T);Wa(D,{get disabled(){return r().loading},get quantity(){return r().forms.stock.quantity},set quantity(U){r().forms.stock.quantity=U},get unit(){return r().forms.stock.unit},set unit(U){r().forms.stock.unit=U}});var $=d(T,2),I=c($);Gr(I,{get disabled(){return r().loading},get value(){return r().forms.stock.notes},set value(U){r().forms.stock.notes=U}});var O=d($,2),E=c(O);E.__click=[Vu,r],M(U=>{k(x,`Déclarer le stock réel du ${U??""}`),E.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),v(g,p)};P(o,g=>{a()?g(l):g(u,!1)})}var f=d(i,2);{var h=g=>{var p=Ku(),m=c(p);Jo(m,{class:"mx-auto mb-2 h-12 w-12"}),v(g,p)},_=g=>{var p=Zu(),m=c(p),w=d(c(m),2),x=c(w),S=d(c(x),2),A=c(S),T=d(x,2),D=d(c(T),2),$=c(D),I=d(T,2);{var O=te=>{var V=Yu(),W=d(c(V),2),ce=c(W);M(()=>k(ce,r().stockParsed.notes)),v(te,V)};P(I,te=>{r().stockParsed.notes&&te(O)})}var E=d(w,2);{var U=te=>{var V=Xu(),W=c(V);W.__click=[Qu,r];var ce=c(W);{var _e=Q=>{var de=Ju();v(Q,de)},Ee=Q=>{var de=yt("Supprimer le stock");v(Q,de)};P(ce,Q=>{r().loading?Q(_e):Q(Ee,!1)})}M(()=>W.disabled=r().loading),v(te,V)};P(E,te=>{a()||te(U)})}M(te=>{k(A,`${r().stockParsed.quantity??""}
            ${r().stockParsed.unit??""}`),k($,te)},[()=>Qa(r().stockParsed.dateTime)]),v(g,p)};P(f,g=>{r().stockParsed?g(_,!1):g(h)})}v(t,n),Y()}Ye(["click"]);function rv(t,e,r){e().forms.who=[...e().whoList],b(r,"")}var av=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},sv=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div>'),nv=y('<div class="space-y-4"><!></div>');function ov(t,e){K(e,!0);let r=ye(e,"modalState",7),a=ye(e,"isArchiveMode",3,!1),n=L("");const i=G(()=>{const m=new Set([...Z.uniqueWho,...r().forms.who]);return Array.from(m).map(w=>({id:w,label:w,selected:r().forms.who.includes(w)}))});function o(m){const w=m.trim();w&&!r().forms.who.includes(w)&&(r().forms.who=[...r().forms.who,w])}function l(m){r().forms.who=r().forms.who.filter(w=>w!==m)}function u(m){r().forms.who.includes(m)?l(m):o(m)}function f(){s(n).trim()&&(o(s(n)),b(n,""))}var h=nv(),_=c(h);{var g=m=>{Ga(m,{title:"Volontaires non modifiables",message:"L'événement est terminé, les volontaires assignés ne peuvent plus être modifiés."})},p=m=>{var w=sv(),x=c(w),S=d(c(x),4),A=c(S),T=c(A),D=c(T);js(D,{class:"h-4 w-4 opacity-50"});var $=d(D,2);$.__keydown=[av,f];var I=d(T,2);I.__click=f;var O=c(I);ii(O,{size:16});var E=d(A,2),U=d(c(E),2);na(U,{get items(){return s(i)},onToggleItem:u,showIcon:!0,badgeSize:"btn-sm"});var te=d(x,2),V=c(te);V.__click=[rv,r,n],M(W=>{$.disabled=r().loading,I.disabled=W,V.disabled=r().loading},[()=>r().loading||!s(n).trim()]),Ke($,()=>s(n),W=>b(n,W)),v(m,w)};P(_,m=>{a()?m(g):m(p,!1)})}v(t,h),Y()}Ye(["keydown","click"]);var iv=(t,e)=>{e().forms.store.name="",e().forms.store.comment=""},lv=y(`<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`),cv=y('<div class="space-y-4"><!></div>');function dv(t,e){K(e,!0);let r=ye(e,"modalState",7),a=ye(e,"isArchiveMode",3,!1);const n=G(()=>r()?.hasChanges?.store||!1);async function i(){if(!s(n))return;const h={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(h)}var o=cv(),l=c(o);{var u=h=>{{let _=G(()=>r().product?.storeInfo);Ga(h,{title:"Magasin non modifiable",message:"L'événement est terminé, les informations de magasin ne peuvent plus être modifiées.",get data(){return s(_)},dataLabel:"Magasin actuel"})}},f=h=>{var _=lv(),g=c(_),p=d(c(g),4),m=c(p),w=c(m);Qr(w,{get suggestions(){return Z.uniqueStores},get disabled(){return r().loading},onkeydown:T=>{T.key==="Enter"&&i()},get value(){return r().forms.store.name},set value(T){r().forms.store.name=T}});var x=d(m,2);Gr(x,{get disabled(){return r().loading},get value(){return r().forms.store.comment},set value(T){r().forms.store.comment=T}});var S=d(p,2),A=c(S);A.__click=[iv,r],M(()=>A.disabled=r().loading),v(h,_)};P(l,h=>{a()?h(u):h(f,!1)})}v(t,o),Y()}Ye(["click"]);var uv=y('<label class="input w-96"><!> <input type="text" placeholder="Commentaire (optionnel)" maxlength="250"/></label>');function vv(t,e){K(e,!0);let r=ye(e,"value",15);ye(e,"disabled",3,!1);var a=uv(),n=c(a);si(n,{size:20,class:"text-base-centent/70"});var i=d(n,2);Ke(i,r),v(t,a),Y()}function fv(t){const e=t-1;return e*e*e+1}function ui(t,{delay:e=0,duration:r=400,easing:a=fv,axis:n="y"}={}){const i=getComputedStyle(t),o=+i.opacity,l=n==="y"?"height":"width",u=parseFloat(i[l]),f=n==="y"?["top","bottom"]:["left","right"],h=f.map(S=>`${S[0].toUpperCase()}${S.slice(1)}`),_=parseFloat(i[`padding${h[0]}`]),g=parseFloat(i[`padding${h[1]}`]),p=parseFloat(i[`margin${h[0]}`]),m=parseFloat(i[`margin${h[1]}`]),w=parseFloat(i[`border${h[0]}Width`]),x=parseFloat(i[`border${h[1]}Width`]);return{delay:e,duration:r,easing:a,css:S=>`overflow: hidden;opacity: ${Math.min(S*20,1)*o};${l}: ${S*u}px;padding-${f[0]}: ${S*_}px;padding-${f[1]}: ${S*g}px;margin-${f[0]}: ${S*p}px;margin-${f[1]}: ${S*m}px;border-${f[0]}-width: ${S*w}px;border-${f[1]}-width: ${S*x}px;min-${l}: 0`}}async function hv(t,e,r,a,n){if(!e())return;const i={totalOverride:{q:s(r),u:s(a)},comment:s(n)};await e().setOverride(i),e().uiStates.overrideManagerEditMode=!1}async function pv(t,e){e()&&(await e().removeOverride(),e().uiStates.overrideManagerEditMode=!1)}var gv=y('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Ancienne quantité calculée</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),mv=y('<div class="stat-desc italic">Recettes actuelles</div>'),_v=y('<div class="chat-bubble relative ms-auto mt-2 text-sm"> <!></div>'),bv=y('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins redéfinie manuellement</div> <div class="stat-value text-content-base/70 text-end text-lg"> </div> <!></div>'),yv=(t,e)=>e().uiStates.overrideManagerEditMode=!0,wv=y('<div class="ms-auto mt-auto"><button class="btn btn-primary btn-sm btn-soft"><!> <!></button></div>'),Sv=(t,e)=>e().uiStates.overrideManagerEditMode=!1,xv=y('<span class="loading loading-spinner loading-sm"></span>'),Ev=y('<span class="loading loading-spinner loading-sm"></span>'),Pv=y('<div class="mt-4 flex flex-wrap items-center gap-4"><!> <!> <div class="ms-auto"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div></div>'),$v=y('<div class="mb-2 space-y-4"><div class="bg-base-200 relative mb-4 flex rounded-xl p-4"><div class="grid"><div class="flex gap-4"><!> <div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins calculées</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="ms-auto flex flex-wrap gap-4"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div> <!></div> <!> <!></div> <!></div></div></div>');function Av(t,e){K(e,!0);let r=ye(e,"modalState",7);const a=G(()=>r().product?.totalNeededOverrideParsed),n=G(()=>r().product?.displayTotalOverride);let i=G(()=>s(a)?.hasUnresolvedChangedSinceOverride),o=G(()=>r().uiStates.overrideManagerEditMode),l=L(je(r().product?.totalNeededOverrideParsed?.totalOverride.q||r().product?.totalNeededArray[0]?.q||0)),u=L(je(r().product?.totalNeededOverrideParsed?.totalOverride.u||r().product?.totalNeededArray[0]?.u||"")),f=L(je(r().product?.totalNeededOverrideParsed?.comment||"")),h=G(()=>s(l)>0&&s(u).trim()!=="");var _=ee(),g=N(_);{var p=m=>{var w=$v(),x=c(w),S=c(x),A=c(S),T=c(A);{var D=F=>{var J=gv(),C=d(c(J),2),re=c(C);M(()=>k(re,s(a)?.oldTotalDisplay)),v(F,J)};P(T,F=>{s(a)?.oldTotalDisplay&&s(i)&&F(D)})}var $=d(T,2),I=d(c($),2),O=c(I),E=d(I,2),U=c(E),te=c(U),V=d(te);Ua(V,{class:"h-3 w-3"});var W=d(U,2),ce=c(W),_e=d(ce);li(_e,{class:"h-3 w-3"});var Ee=d(E,2);{var Q=F=>{var J=mv();v(F,J)};P(Ee,F=>{s(a)?.oldTotalDisplay&&s(i)&&F(Q)})}var de=d($,2);{var we=F=>{var J=bv(),C=d(c(J),2),re=c(C),q=d(C,2);{var ie=oe=>{var R=_v(),X=c(R),ue=d(X);si(ue,{size:16,class:"text-base-content/60 absolute right-1 bottom-1 "}),M(()=>k(X,`${s(a).comment??""} `)),v(oe,R)};P(q,oe=>{s(a).comment&&oe(ie)})}M(()=>k(re,s(n))),v(F,J)};P(de,F=>{s(n)&&s(a)&&F(we)})}var ne=d(de,2);{var ae=F=>{var J=wv(),C=c(J);C.__click=[yv,r];var re=c(C);{var q=R=>{var X=yt("Redéfinir les besoins");v(R,X)},ie=R=>{var X=yt("Définir manuellement les besoins");v(R,X)};P(re,R=>{s(a)?R(q):R(ie,!1)})}var oe=d(re,2);sa(oe,{size:16}),v(F,J)};P(ne,F=>{!e.isArchiveMode&&!s(o)&&F(ae)})}var pe=d(A,2);{var Se=F=>{var J=Pv(),C=c(J);Wa(C,{get quantity(){return s(l)},set quantity(ve){b(l,ve,!0)},get unit(){return s(u)},set unit(ve){b(u,ve,!0)}});var re=d(C,2);vv(re,{get value(){return s(f)},set value(ve){b(f,ve,!0)}});var q=d(re,2),ie=c(q);ie.__click=[Sv,r];var oe=d(ie,2);oe.__click=[pv,r];var R=c(oe);{var X=ve=>{var Me=xv();v(ve,Me)},ue=ve=>{var Me=yt();M(()=>k(Me,`Réinitialiser le total calculé (${r().product.displayTotalNeeded??""}).`)),v(ve,Me)};P(R,ve=>{r().loading?ve(X):ve(ue,!1)})}var B=d(oe,2);B.__click=[hv,r,l,u,f];var j=c(B);{var se=ve=>{var Me=Ev();v(ve,Me)},be=ve=>{var Me=yt("Appliquer");v(ve,Me)};P(j,ve=>{r().loading?ve(se):ve(be,!1)})}M(()=>{oe.disabled=r().loading,B.disabled=r().loading||!s(h)}),Eo(1,J,()=>ui),v(F,J)};P(pe,F=>{s(o)&&F(Se)})}M(()=>{k(O,r().product.displayTotalNeeded),k(te,`${r().product.nbRecipes??""} `),k(ce,`${r().product.totalAssiettes??""} `)}),v(m,w)};P(g,m=>{r().product&&m(p)})}v(t,_),Y()}Ye(["click"]);var Tv=y('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),kv=y('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Dv=y('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Iv=y('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Cv(t,e){K(e,!0);const r=G(()=>e.modalState.recipes);var a=Iv(),n=N(a);Av(n,{get modalState(){return e.modalState},get isArchiveMode(){return e.isArchiveMode}});var i=d(n,2),o=c(i),l=c(o);Ua(l,{class:"h-5 w-5"});var u=d(o,2);{var f=_=>{var g=Tv(),p=c(g);Ha(p,{class:"mx-auto mb-2 h-12 w-12"}),v(_,g)},h=_=>{var g=Dv(),p=c(g),m=d(c(p));Je(m,21,()=>s(r),zt,(w,x)=>{var S=kv(),A=c(S),T=c(A),D=d(A),$=c(D),I=d(D),O=c(I);M(E=>{k(T,`${s(x).r??""} (${(s(x).a||"-")??""} c.)`),k($,`${(s(x).q||s(x).qEq)??""} ${(s(x).u||s(x).uEq)??""}`),k(O,E)},[()=>Qa(s(x).date)]),v(w,S)}),v(_,g)};P(u,_=>{s(r).length===0?_(f):_(h,!1)})}v(t,a),Y()}function Mv(t,e,r){s(e)?.saveAllChanges().then(()=>{s(e)?.resetForms(),r.onClose()})}function kn(t,e,r){s(e)?.resetForms(),r.onClose()}var Nv=y('<div class="alert alert-warning py-0.5"><!> <span class="font-medium">Mode consultation</span> <span>Événement terminé</span></div>'),Rv=y('<div class="text-xl font-bold"> </div> <!> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Ov=y('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),qv=(t,e)=>e("recettes"),jv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Lv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Bv=(t,e)=>e("magasins"),zv=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Uv=(t,e)=>e("volontaires"),Hv=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Wv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Qv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Gv=(t,e)=>e("stock"),Vv=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Fv=y('<span class="badge badge-sm badge-secondary ml-1">1</span>'),Kv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Yv=(t,e)=>e("achats"),Jv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Xv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Zv=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),ef=y('<span class="loading loading-spinner loading-sm"></span>'),tf=y('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),rf=y('<div id="product_modal"><div class="modal-box fixed top-0 flex h-lvh w-lvw flex-col overflow-auto md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function af(t,e){K(e,!0);let r=ye(e,"initialTab",3,"recettes"),a=L(null);Zt(()=>{b(a,new yu(e.productId,r()),!0)});let n=G(()=>Z.isEventPassed);function i(x){s(a)?.setCurrentTab(x)}var o=rf(),l=c(o),u=c(l),f=c(u);{var h=x=>{var S=Rv(),A=N(S),T=c(A),D=d(A,2);{var $=V=>{var W=Nv(),ce=c(W);ri(ce,{class:"h-4 w-4"}),v(V,W)};P(D,V=>{s(a)&&s(n)&&V($)})}var I=d(D,2),O=c(I),E=c(O),U=d(O,2),te=d(c(U));M(()=>{k(T,s(a).product?.productName),k(E,s(a).product?.productType),k(te,` ${s(a).product?.displayTotalNeeded??""}`)}),v(x,S)},_=x=>{var S=Ov();v(x,S)};P(f,x=>{s(a)&&s(a).product?x(h):x(_,!1)})}var g=d(f,2);g.__click=[kn,a,e];var p=c(g);qt(p,{class:"h-4 w-4"});var m=d(u,2);{var w=x=>{var S=tf(),A=N(S),T=c(A);T.__click=[qv,i];var D=c(T);Ua(D,{class:"mr-1 h-5 w-5"});var $=d(D,2);{var I=H=>{var he=jv(),Le=c(he);M(()=>k(Le,s(a).product?.nbRecipes)),v(H,he)},O=H=>{var he=Lv();v(H,he)};P($,H=>{s(a).product?.nbRecipes&&s(a).product?.nbRecipes>0?H(I):H(O,!1)})}var E=d(T,2);E.__click=[Bv,i];var U=c(E);mr(U,{class:"mr-1 h-5 w-5"});var te=d(U,2);{var V=H=>{var he=zv();v(H,he)};P(te,H=>{s(a).hasChanges?.store&&H(V)})}var W=d(E,2);W.__click=[Uv,i];var ce=c(W);xa(ce,{class:"mr-1 h-5 w-5"});var _e=d(ce,2);{var Ee=H=>{var he=Hv();v(H,he)},Q=H=>{var he=ee(),Le=N(he);{var Be=Ne=>{var et=Wv(),It=c(et);M(()=>k(It,s(a).product?.who.length)),v(Ne,et)},Ue=Ne=>{var et=Qv();v(Ne,et)};P(Le,Ne=>{s(a).product?.who&&s(a).product?.who.length>0?Ne(Be):Ne(Ue,!1)},!0)}v(H,he)};P(_e,H=>{s(a).hasChanges?.who?H(Ee):H(Q,!1)})}var de=d(W,2);de.__click=[Gv,i];var we=c(de);Jo(we,{class:"mr-1 h-5 w-5"});var ne=d(we,2);{var ae=H=>{var he=Vv();v(H,he)},pe=H=>{var he=ee(),Le=N(he);{var Be=Ne=>{var et=Fv();v(Ne,et)},Ue=Ne=>{var et=Kv();v(Ne,et)};P(Le,Ne=>{s(a).stockParsed?Ne(Be):Ne(Ue,!1)},!0)}v(H,he)};P(ne,H=>{s(a).hasChanges?.stock?H(ae):H(pe,!1)})}var Se=d(de,2);Se.__click=[Yv,i];var F=c(Se);wr(F,{class:"mr-1 h-5 w-5"});var J=d(F,2);{var C=H=>{var he=Jv(),Le=c(he);M(()=>k(Le,s(a).purchasesList.length)),v(H,he)},re=H=>{var he=Xv();v(H,he)};P(J,H=>{s(a).purchasesList.length>0?H(C):H(re,!1)})}var q=d(A,2),ie=c(q);{var oe=H=>{var he=Zv(),Le=c(he);qt(Le,{class:"h-4 w-4"});var Be=d(Le,2),Ue=c(Be);M(()=>k(Ue,`erreur : ${s(a).error??""}`)),v(H,he)};P(ie,H=>{s(a).error&&H(oe)})}var R=d(ie,2),X=c(R);Ll(X,()=>s(a).currentTab,H=>{var he=ee(),Le=N(he);{var Be=Ne=>{Cv(Ne,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},Ue=Ne=>{var et=ee(),It=N(et);{var Ae=ze=>{Wu(ze,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},Ie=ze=>{var Te=ee(),Xe=N(Te);{var it=Ve=>{tv(Ve,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},nt=Ve=>{var He=ee(),lt=N(He);{var ct=dt=>{ov(dt,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},mt=dt=>{var Pt=ee(),Ht=N(Pt);{var fe=ge=>{dv(ge,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})};P(Ht,ge=>{s(a).currentTab==="magasins"&&ge(fe)},!0)}v(dt,Pt)};P(lt,dt=>{s(a).currentTab==="volontaires"?dt(ct):dt(mt,!1)},!0)}v(Ve,He)};P(Xe,Ve=>{s(a).currentTab==="stock"?Ve(it):Ve(nt,!1)},!0)}v(ze,Te)};P(It,ze=>{s(a).currentTab==="achats"?ze(Ae):ze(Ie,!1)},!0)}v(Ne,et)};P(Le,Ne=>{s(a).currentTab==="recettes"?Ne(Be):Ne(Ue,!1)})}v(H,he)});var ue=d(q,2),B=c(ue);B.__click=[kn,a,e];var j=c(B),se=d(B,2);se.__click=[Mv,a,e];var be=c(se);{var ve=H=>{var he=ef();v(H,he)},Me=H=>{var he=yt("Tout enregistrer");v(H,he)};P(be,H=>{s(a).loading?H(ve):H(Me,!1)})}M(()=>{De(T,1,`tab ${s(a).currentTab==="recettes"?"tab-active":""}`),De(E,1,`tab ${s(a).currentTab==="magasins"?"tab-active":""}`),De(W,1,`tab ${s(a).currentTab==="volontaires"?"tab-active":""}`),De(de,1,`tab ${s(a).currentTab==="stock"?"tab-active":""}`),De(Se,1,`tab ${s(a).currentTab==="achats"?"tab-active":""}`),k(j,s(a)?.hasAnyChanges?"Annuler":"Fermer"),se.disabled=s(a).loading||!s(a).hasAnyChanges}),v(x,S)};P(m,x=>{s(a)&&x(w)})}M(()=>De(o,1,`modal ${(e.productId&&"modal-open")??""}`)),v(t,o),Y()}Ye(["click"]);var sf=(t,e,r)=>e(r),nf=y("<button><span> </span> <!></button>"),of=y('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),lf=(t,e)=>e.dateStore.selectUpcoming(),cf=(t,e)=>e.dateStore.selectAll(),df=y('<div class="join my-2 ms-auto"><button type="button" name="options" aria-label=" Dates à venir">Dates à venir</button> <button type="button" name="options" aria-label=" Toutes les dates">Toutes les dates</button></div>'),uf=y('<div class="mb-2 flex flex-wrap gap-2"></div> <!>',1);function vf(t,e){K(e,!0);let r=G(()=>e.dateStore.start),a=G(()=>e.dateStore.end),n=L(null);function i(p){s(r)&&new Date(p)<new Date(s(r))?e.dateStore.setRange(p,s(a)):s(a)&&new Date(p)>new Date(s(a))?e.dateStore.setRange(s(r),p):e.dateStore.setRange(p,p)}function o(p){return!s(r)||!s(a)?{start:null,end:null}:s(r)&&new Date(p)<new Date(s(r))?{start:p,end:s(a)}:s(a)&&new Date(p)>new Date(s(a))?{start:s(r),end:p}:{start:p,end:p}}function l(p){let m="";if(!s(r)||!s(a))return;const w=new Date(p)>=new Date(s(r))&&new Date(p)<=new Date(s(a)),x=e.dateStore.start&&new Date(p)<=new Date;let S=!1;if(s(n)){const A=o(s(n));A.start&&A.end&&(S=new Date(p)>=new Date(A.start)&&new Date(p)<=new Date(A.end))}return x&&(m+=" opacity-70 italic"),w||(m+=" btn-dash"),S&&!w&&(m+=" btn-soft"),m}var u=uf(),f=N(u);Je(f,20,()=>e.dateStore.dates,p=>p,(p,m)=>{var w=nf();w.__click=[sf,i,m];var x=c(w),S=c(x),A=d(x,2);{var T=$=>{qs($,{size:16})},D=$=>{var I=ee(),O=N(I);{var E=te=>{Ns(te,{size:16})},U=te=>{var V=ee(),W=N(V);{var ce=_e=>{ei(_e,{size:16})};P(W,_e=>{Sa(m)==="cloud"&&_e(ce)},!0)}v(te,V)};P(O,te=>{Sa(m)==="moon"?te(E):te(U,!1)},!0)}v($,I)};P(A,$=>{Sa(m)==="sun"?$(T):$(D,!1)})}M(($,I)=>{De(w,1,`btn btn-sm btn-secondary ${$??""}`),k(S,I)},[()=>l(m),()=>Ac(m)]),Nr("mouseenter",w,()=>b(n,m,!0)),Nr("mouseleave",w,()=>b(n,null)),v(p,w)});var h=d(f,2);{var _=p=>{var m=of();v(p,m)},g=p=>{var m=df(),w=c(m);w.__click=[lf,e];var x=d(w,2);x.__click=[cf,e],M(()=>{De(w,1,`join-item btn btn-sm ${e.dateStore.isUpcomingRange?"btn-soft btn-secondary":"btn-ghost"}`),De(x,1,`join-item btn btn-sm ${e.dateStore.isFullRange?"btn-soft btn-secondary":"btn-ghost"}`)}),v(p,m)};P(h,p=>{e.dateStore.isEventPassed?p(_):p(g,!1)})}v(t,u),Y()}Ye(["click"]);var ff=y("<fieldset><legend><!> </legend> <!></fieldset>");function ba(t,e){let r=ye(e,"bgClass",3,"bg-base-100");var a=ff(),n=c(a),i=c(n);{var o=f=>{const h=G(()=>e.iconComponent);var _=ee(),g=N(_);yr(g,()=>s(h),(p,m)=>{m(p,{size:16,class:"mr-1"})}),v(f,_)};P(i,f=>{e.iconComponent&&f(o)})}var l=d(i),u=d(n,2);me(u,()=>e.children??le),M(()=>{De(a,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),De(n,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),k(l,` ${e.legend??""}`)}),v(t,a)}var hf=()=>Z.clearFilters(),pf=t=>Z.setSearchQuery(t.currentTarget.value),gf=()=>Z.setSearchQuery(""),mf=()=>Z.setGroupBy("none"),_f=()=>Z.setGroupBy("store"),bf=()=>Z.setGroupBy("productType"),yf=y(`<div class="alert alert-warning">Cette période contient des dates passées. Les achats ne sont plus
          possibles pour ces dates.</div>`),wf=y("<!> <!>",1),Sf=(t,e)=>Z.toggleProductType(e),xf=y("<button><!> </button>"),Ef=()=>Z.toggleTemperature("frais"),Pf=()=>Z.toggleTemperature("surgele"),$f=()=>Z.clearTypeAndTemperatureFilters(),Af=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),Tf=y('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),kf=y('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button title="Filtrer les légumes ou produits à conserver au frais"><!> Frais</button> <button title="Filtrer les roduits à concerver au congélateur"><!> Surgelés</button></div> <!>',1),Df=(t,e)=>Z.toggleStore(e),If=y("<button> </button>"),Cf=()=>Z.clearStoreFilters(),Mf=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),Nf=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Rf=(t,e)=>Z.toggleWho(e),Of=y("<button> </button>"),qf=()=>Z.clearWhoFilters(),jf=y('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),Lf=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Bf=y('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4 flex flex-col"><label class="label flex" for="grouping-select"><span class="label-text">Groupement par:</span></label> <div class=" bg-base-100 flex gap-1 rounded-xl p-2 font-semibold" id="grouping-select"><button type="button" aria-label="Aucun">Aucun</button> <button type="button" aria-label="Par magasin">Magasins</button> <button type="button" aria-label="Par type">Type</button></div></div> <!> <!> <!> <!></div>',1);function zf(t,e){K(e,!0);const r=G(()=>Z.filters),a=G(()=>Z.uniqueStores),n=G(()=>Z.uniqueWho),i=G(()=>Z.uniqueProductTypes);var o=Bf(),l=N(o),u=c(l),f=c(u);ti(f,{class:"h-5 w-5"});var h=d(u,2);h.__click=[hf];var _=c(h);_a(_,{class:"h-4 w-4"});var g=d(l,2),p=c(g),m=d(c(p),2),w=c(m);Ad(w,{class:"h-4 w-4"});var x=d(w,2);x.__input=[pf];var S=d(x,2);S.__click=[gf];var A=c(S);qt(A,{class:"h-4 w-4"});var T=d(p,2),D=d(c(T),2),$=c(D);$.__click=[mf];var I=d($,2);I.__click=[_f];var O=d(I,2);O.__click=[bf];var E=d(T,2);{var U=Q=>{ba(Q,{legend:"Date incluses",bgClass:"bg-base-100",children:(de,we)=>{var ne=wf(),ae=N(ne);vf(ae,{get dateStore(){return Z.dateStore}});var pe=d(ae,2);{var Se=F=>{var J=yf();Eo(3,J,()=>ui),v(F,J)};P(pe,F=>{Z.hasPastDatesInRange&&F(Se)})}v(de,ne)},$$slots:{default:!0}})};P(E,Q=>{Z.hasSingleDateEvent||Q(U)})}var te=d(E,2);{var V=Q=>{ba(Q,{legend:"Types & Température",get iconComponent(){return oi},children:(de,we)=>{var ne=kf(),ae=N(ne);Je(ae,20,()=>s(i),oe=>oe,(oe,R)=>{const X=G(()=>vs(R));var ue=xf();ue.__click=[Sf,R];var B=c(ue);yr(B,()=>s(X).icon,(se,be)=>{be(se,{class:"mr-1 h-5 w-5"})});var j=d(B);M(se=>{De(ue,1,`btn btn-sm ${se??""}`),k(j,` ${s(X).displayName??""}`)},[()=>s(r).selectedProductTypes.length===0?"btn-soft btn-secondary":s(r).selectedProductTypes.includes(R)?"btn-secondary":"btn-dash btn-secondary"]),v(oe,ue)});var pe=d(ae,2),Se=c(pe);Se.__click=[Ef];var F=c(Se);ni(F,{class:"h-5 w-5"});var J=d(Se,2);J.__click=[Pf];var C=c(J);Os(C,{class:"h-5 w-5"});var re=d(pe,2);{var q=oe=>{var R=Af();R.__click=[$f];var X=c(R);_a(X,{size:16}),v(oe,R)},ie=oe=>{var R=Tf();v(oe,R)};P(re,oe=>{s(r).selectedProductTypes.length>0||s(r).selectedTemperatures.length>0?oe(q):oe(ie,!1)})}M((oe,R)=>{De(Se,1,`btn btn-sm ${oe??""}`),De(J,1,`btn btn-sm ${R??""}`)},[()=>s(r).selectedTemperatures.length===0?"btn-soft btn-success":s(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(r).selectedTemperatures.length===0?"btn-soft btn-info":s(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),v(de,ne)},$$slots:{default:!0}})};P(te,Q=>{s(i).length>0&&Q(V)})}var W=d(te,2);{var ce=Q=>{ba(Q,{legend:"Magasins",get iconComponent(){return mr},children:(de,we)=>{var ne=Nf(),ae=c(ne);Je(ae,16,()=>s(a),F=>F,(F,J)=>{var C=If();C.__click=[Df,J];var re=c(C);M(q=>{De(C,1,`btn btn-sm ${q??""}`),k(re,J)},[()=>s(r).selectedStores.length===0?"btn-soft btn-secondary":s(r).selectedStores.includes(J)?"btn-secondary":"btn-dash btn-secondary"]),v(F,C)});var pe=d(ae,2);{var Se=F=>{var J=Mf();J.__click=[Cf];var C=c(J);_a(C,{size:16}),v(F,J)};P(pe,F=>{s(r).selectedStores.length>0&&F(Se)})}v(de,ne)},$$slots:{default:!0}})};P(W,Q=>{s(a).length>0&&Q(ce)})}var _e=d(W,2);{var Ee=Q=>{ba(Q,{legend:"Qui",get iconComponent(){return js},children:(de,we)=>{var ne=Lf(),ae=c(ne);Je(ae,16,()=>s(n),F=>F,(F,J)=>{var C=Of();C.__click=[Rf,J];var re=c(C);M(q=>{De(C,1,`btn btn-sm ${q??""}`),k(re,J)},[()=>s(r).selectedWho.length===0?" btn-soft btn-secondary":s(r).selectedWho.includes(J)?" btn-secondary":"btn-dash btn-secondary"]),v(F,C)});var pe=d(ae,2);{var Se=F=>{var J=jf();J.__click=[qf];var C=c(J);_a(C,{size:16}),v(F,J)};P(pe,F=>{s(r).selectedWho.length>0&&F(Se)})}v(de,ne)},$$slots:{default:!0}})};P(_e,Q=>{s(n).length>0&&Q(Ee)})}M(()=>{h.disabled=!Z.hasFilters,Fl(x,s(r).searchQuery),S.disabled=!s(r).searchQuery,De($,1,`btn flex-1 ${s(r).groupBy==="none"&&"btn-secondary"}`),De(I,1,`btn flex-1 ${s(r).groupBy==="store"&&"btn-secondary"}`),De(O,1,`btn flex-1 ${s(r).groupBy==="productType"&&"btn-secondary"}`)}),v(t,o),Y()}Ye(["click","input"]);var Uf=y('<div class="tooltip text-xs font-normal"><!></div>');function Hf(t,e){let r=ye(e,"iconSize",3,24),a=e.icon||void 0;var n=Uf(),i=c(n);{var o=l=>{a(l,{get size(){return r()},class:`align-top
`})};P(i,l=>{e.icon&&l(o)})}M(()=>lr(n,"data-tip",e.tip)),v(t,n)}var Wf=y('<div class="tooltip"><div class="badge badge-soft badge-sm hover:badge-primary flex items-center gap-1"><span class="whitespace-nowrap"> </span> <!></div></div>');function Qf(t,e){K(e,!0);let r=ye(e,"recipes",19,()=>[]);const a=e.dateDisplayInfo.timeIcon==="sun"?qs:e.dateDisplayInfo.timeIcon==="moon"?Ns:e.dateDisplayInfo.timeIcon==="cloud"?ei:null;var n=Wf(),i=c(n),o=c(i),l=c(o),u=d(o,2);{var f=h=>{a(h,{class:"h-3 w-3"})};P(u,h=>{a&&h(f)})}M(h=>{lr(n,"data-tip",h),k(l,e.dateDisplayInfo.formattedDate)},[()=>r().map(h=>h.r).join(", ")]),v(t,n),Y()}var Gf=y('<div class="text-primary-content flex items-center gap-2"><!> </div>'),Vf=y('<div class="text-primary-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Ff=y('<div class="font-semibold">Sur toute la période</div>'),Kf=y('du <span class="font-semibold"> </span> au <span class="font-semibold"> </span>',1),Yf=y('le <span class="font-semibold"> </span>',1),Jf=(t,e,r)=>e.onOpenGroupEditModal("store",s(r).map(a=>a.data.$id),s(r).map(a=>a.data)),Xf=(t,e,r)=>e.onOpenGroupEditModal("who",s(r).map(a=>a.data.$id),s(r).map(a=>a.data)),Zf=(t,e,r)=>e.onOpenGroupPurchaseModal(s(r).map(a=>a.data)),eh=y(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),th=y('<div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div>'),rh=y('<div class="flex flex-wrap items-center justify-end gap-2"><div class="alert px-4 py-1" title="Contient des dates passées - actions non disponibles"><!> <span class="hidden @md:block">Période partiellement passée</span></div></div>'),ah=y('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 text-lg font-bold @md:min-w-48"><!></div> <div class="text-primary-content"><!></div> <!></div>'),sh=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),nh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),oh=y('<div class="text-base-content/60 text-sm font-normal"> </div>'),ih=y('<div class="tooltip" data-tip="Ajouté manuellement, ne fait pas partie des recette"><!></div>'),lh=y('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),ch=y('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),dh=y('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),uh=y('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),vh=(t,e,r)=>e.onOpenModal(s(r).$id,"magasins"),fh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"magasins"),hh=y('<div class="ml-1"><!></div>'),ph=y('<div class="ml-1"> </div> <!>',1),gh=y('<div class="ml-1 text-sm font-medium">?</div>'),mh=(t,e,r)=>e.onOpenModal(s(r).$id,"volontaires"),_h=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"volontaires"),bh=y('<span class="text-base-content/50 text-xs"> </span>'),yh=y('<div class="ml-1 flex gap-1"> <!></div>'),wh=y('<div class="ml-1 text-sm font-medium">?</div>'),Sh=y('<div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div>'),xh=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),Eh=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),Ph=y('<div class="mx-4 flex gap-2 opacity-60"><!> <!></div>'),$h=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),Ah=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),Th=y('<div class="tooltip flex items-center gap-2" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),kh=y("<span> </span>"),Dh=y('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),Ih=(t,e,r,a)=>{t.stopPropagation(),e.onQuickValidation(s(r),s(a))},Ch=y('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><div class="cart-icon"></div> <span class="text-xs"> </span> <!></button>'),Mh=y(`<div id="override_alert" class="alert alert-warning alert-soft mt-1 px-1 py-0.5"><!> <span>Les quantités des menus ont été modifiées depuis
                      l'attribution manuelle des "besoins"</span></div>`),Nh=(t,e,r)=>e.onOpenModal(s(r).$id,"achats"),Rh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"achats"),Oh=y('<span class="text-xs opacity-75"> </span>'),qh=y('<div><div class="flex items-center gap-1"><!> <span class="text-sm font-medium text-nowrap"> </span></div> <!></div>'),jh=y('<span class="text-base-content/50 text-xs italic">aucun</span>'),Lh=y('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <!></div> <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex flex-wrap gap-x-4 gap-y-0"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="ms-auto flex items-center gap-4 self-end"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap items-start gap-0 self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup effectués:</div> <div>ajouter un achat</div></div> <div class="flex flex-wrap justify-end gap-1.5"><!> <!></div></div></div></div></div>'),Bh=y('<!> <div class="space-y-1"></div>',1),zh=y('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Uh=y('<div class="space-y-4 rounded-lg"></div> <!>',1);function Hh(t,e){K(e,!0);const r={Package:Ha,MessageCircleQuestionMark:bd,ShoppingCart:wr,Clock:$n,CircleCheck:id,CircleX:ld,ClipboardCheck:cd,PackageCheck:yd,Check:Br},a=G(()=>Z.groupedFilteredProducts),n=G(()=>Z.filters),i=G(()=>hr(Z.dateStore.start)),o=G(()=>hr(Z.dateStore.end)),l=G(()=>!Z.dateStore.isEventPassed&&!Z.dateStore.hasPastDatesInRange);var u=Uh(),f=N(u);Je(f,21,()=>Object.entries(s(a)),([g,p])=>g,(g,p)=>{var m=G(()=>Ea(s(p),2));let w=()=>s(m)[0];const S=G(()=>s(m)[1]);var A=Bh(),T=N(A);{var D=I=>{const O=G(()=>vs(w()));var E=ah(),U=c(E),te=c(U);{var V=ae=>{var pe=Gf(),Se=c(pe);mr(Se,{size:20});var F=d(Se);M(()=>k(F,` ${w()??""} (${s(S).length??""})`)),v(ae,pe)},W=ae=>{var pe=ee(),Se=N(pe);{var F=C=>{var re=Vf(),q=c(re);yr(q,()=>s(O).icon,(ue,B)=>{B(ue,{size:20})});var ie=d(q,2),oe=c(ie),R=d(ie,2),X=c(R);M(()=>{k(oe,s(O).displayName),k(X,`(${s(S).length??""})`)}),v(C,re)},J=C=>{var re=yt();M(()=>k(re,`📦 ${w()??""} (${s(S).length??""})`)),v(C,re)};P(Se,C=>{s(n).groupBy==="productType"?C(F):C(J,!1)},!0)}v(ae,pe)};P(te,ae=>{s(n).groupBy==="store"?ae(V):ae(W,!1)})}var ce=d(U,2),_e=c(ce);{var Ee=ae=>{var pe=Ff();v(ae,pe)},Q=ae=>{var pe=ee(),Se=N(pe);{var F=C=>{var re=Kf(),q=d(N(re)),ie=c(q),oe=d(q,2),R=c(oe);M(()=>{k(ie,s(i)),k(R,s(o))}),v(C,re)},J=C=>{var re=Yf(),q=d(N(re)),ie=c(q);M(()=>k(ie,s(i))),v(C,re)};P(Se,C=>{Z.dateStore.start!==Z.dateStore.end?C(F):C(J,!1)},!0)}v(ae,pe)};P(_e,ae=>{Z.dateStore.isFullRange?ae(Ee):ae(Q,!1)})}var de=d(ce,2);{var we=ae=>{var pe=th(),Se=c(pe);Se.__click=[Jf,e,S];var F=c(Se);mr(F,{size:16});var J=d(F,4);sa(J,{size:16});var C=d(Se,2);C.__click=[Xf,e,S];var re=c(C);xa(re,{size:16});var q=d(re,4);sa(q,{size:16});var ie=d(C,2);{var oe=R=>{var X=eh();X.__click=[Zf,e,S];var ue=c(X);wr(ue,{size:16});var B=d(ue,4);En(B,{size:16}),v(R,X)};P(ie,R=>{s(S).some(X=>X.data.displayMissingQuantity!=="✅ Complet")&&R(oe)})}v(ae,pe)},ne=ae=>{var pe=ee(),Se=N(pe);{var F=J=>{var C=rh(),re=c(C),q=c(re);$n(q,{size:16}),v(J,C)};P(Se,J=>{Z.dateStore.hasPastDatesInRange&&J(F)},!0)}v(ae,pe)};P(de,ae=>{s(l)?ae(we):ae(ne,!1)})}v(I,E)};P(T,I=>{w()!==""&&I(D)})}var $=d(T,2);Je($,21,()=>s(S),I=>I.data.$id,(I,O)=>{const E=G(()=>s(O).data),U=G(()=>s(O).stats),te=G(()=>vs(s(E).productType)),V=G(()=>_u(s(E).purchases||[])),W=G(()=>s(E).totalNeededOverrideParsed);var ce=Lh(),_e=c(ce),Ee=c(_e),Q=c(Ee);Q.__click=[sh,e,E],Q.__keydown=[nh,e,E];var de=c(Q),we=c(de);yr(we,()=>s(te).icon,(fe,ge)=>{ge(fe,{class:"text-base-content/80 h-4 w-4"})});var ne=d(we),ae=d(ne);{var pe=fe=>{var ge=oh(),Ce=c(ge);M(()=>k(Ce,`Ancien: ${s(E).previousNames[0]??""}`)),v(fe,ge)};P(ae,fe=>{s(E).previousNames&&s(E).previousNames.length>0&&fe(pe)})}var Se=d(ae,2);{var F=fe=>{var ge=ih(),Ce=c(ge);Pn(Ce,{class:"text-warning h-4 w-4"}),v(fe,ge)};P(Se,fe=>{s(E).productHugoUuid||fe(F)})}var J=d(de,2),C=c(J);{var re=fe=>{var ge=lh(),Ce=c(ge);ni(Ce,{class:"text-success h-4 w-4"}),v(fe,ge)};P(C,fe=>{s(E).pFrais&&fe(re)})}var q=d(C,2);{var ie=fe=>{var ge=ch(),Ce=c(ge);Os(Ce,{class:"text-info h-4 w-4"}),v(fe,ge)};P(q,fe=>{s(E).pSurgel&&fe(ie)})}var oe=d(J,2);{var R=fe=>{var ge=dh(),Ce=c(ge);ai(Ce,{class:"h-4 w-4 animate-spin"}),v(fe,ge)};P(oe,fe=>{s(E).status==="isSyncing"&&fe(R)})}var X=d(oe,2);{var ue=fe=>{var ge=uh(),Ce=c(ge);Je(Ce,20,()=>s(U).concernedDates,ke=>ke,(ke,qe)=>{const Fe=G(()=>s(U).recipesByDate.get(qe)||[]),Ze=G(()=>s(O).data.dateDisplayInfo[qe]);Qf(ke,{get dateDisplayInfo(){return s(Ze)},get recipes(){return s(Fe)}})}),v(fe,ge)};P(X,fe=>{s(U).concernedDates.length>0&&fe(ue)})}var B=d(Q,2);{var j=fe=>{var ge=Sh(),Ce=c(ge);Ce.__click=[vh,e,E],Ce.__keydown=[fh,e,E];var ke=c(Ce);mr(ke,{size:18});var qe=d(ke,2);{var Fe=at=>{var Ct=ph(),tr=N(Ct),Vr=c(tr),Va=d(tr,2);{var Wt=Tr=>{var fa=hh(),fi=c(fa);Hf(fi,{get tip(){return s(E).storeInfo.storeComment},get icon(){return _d},iconSize:14}),v(Tr,fa)};P(Va,Tr=>{s(E).storeInfo?.storeComment&&Tr(Wt)})}M(()=>k(Vr,s(E).storeInfo.storeName)),v(at,Ct)},Ze=at=>{var Ct=gh();v(at,Ct)};P(qe,at=>{s(E).storeInfo?.storeName?at(Fe):at(Ze,!1)})}var Ge=d(Ce,2);Ge.__click=[mh,e,E],Ge.__keydown=[_h,e,E];var _t=c(Ge);xa(_t,{size:18});var rt=d(_t,2);{var ot=at=>{var Ct=yh(),tr=c(Ct),Vr=d(tr);{var Va=Wt=>{var Tr=bh(),fa=c(Tr);M(()=>k(fa,`+${s(E).who.length-2}`)),v(Wt,Tr)};P(Vr,Wt=>{s(E).who.length>2&&Wt(Va)})}M(Wt=>k(tr,`${Wt??""} `),[()=>s(E).who.slice(0,2).map(Wt=>Wt.slice(0,3)).join(" | ")]),v(at,Ct)},$t=at=>{var Ct=wh();v(at,Ct)};P(rt,at=>{s(E).who&&s(E).who.length>0?at(ot):at($t,!1)})}M(()=>{De(Ce,1,`btn btn-soft btn-sm group relative ${s(E).storeInfo?.storeName?"btn-success":""}`),De(Ge,1,`btn btn-sm btn-soft group relative ${s(E).who&&s(E).who?.length>0?"btn-success":""}`)}),v(fe,ge)},se=fe=>{var ge=Ph(),Ce=c(ge);{var ke=Ze=>{var Ge=xh(),_t=c(Ge);mr(_t,{size:16});var rt=d(_t);M(()=>k(rt,` ${s(E).storeInfo.storeName??""}`)),v(Ze,Ge)};P(Ce,Ze=>{s(E).storeInfo?.storeName&&Ze(ke)})}var qe=d(Ce,2);{var Fe=Ze=>{var Ge=Eh(),_t=c(Ge);xa(_t,{size:16});var rt=d(_t);M(ot=>k(rt,` ${ot??""}`),[()=>s(E).who.join(", ")]),v(Ze,Ge)};P(qe,Ze=>{s(E).who&&s(E).who.length>0&&Ze(Fe)})}v(fe,ge)};P(B,fe=>{s(l)?fe(j):fe(se,!1)})}var be=d(Ee,2),ve=c(be);ve.__click=[$h,e,E],ve.__keydown=[Ah,e,E];var Me=c(ve),H=c(Me),he=c(H);pd(he,{class:"h-4 w-4"});var Le=d(H,2),Be=c(Le),Ue=c(Be);{var Ne=fe=>{var ge=Th(),Ce=c(ge),ke=c(Ce),qe=d(Ce,2);Pn(qe,{class:"h-4 w-4"});var Fe=d(qe);M(()=>{k(ke,s(U).formattedQuantities),k(Fe,` ${s(W).totalOverride.q??""}
                          ${s(W).totalOverride.u??""}`)}),v(fe,ge)},et=fe=>{var ge=kh(),Ce=c(ge);M(()=>k(Ce,s(U).formattedQuantities)),v(fe,ge)};P(Ue,fe=>{s(W)?.totalOverride?fe(Ne):fe(et,!1)})}var It=d(Be,2);{var Ae=fe=>{var ge=Dh(),Ce=c(ge),ke=c(Ce),qe=d(ke);Ua(qe,{class:"h-3 w-3"});var Fe=d(Ce,2),Ze=c(Fe),Ge=d(Ze);li(Ge,{class:"h-3 w-3"}),M(()=>{k(ke,`${s(U).nbRecipes??""} `),k(Ze,`${s(U).totalAssiettes??""} `)}),v(fe,ge)};P(It,fe=>{(s(U).nbRecipes||s(U).totalAssiettes)&&fe(Ae)})}var Ie=d(Me,2);{var ze=fe=>{var ge=Ch();ge.__click=[Ih,e,E,U];var Ce=d(c(ge),2),ke=c(Ce),qe=d(Ce,2);{var Fe=Ge=>{nd(Ge,{size:18})},Ze=Ge=>{od(Ge,{size:18})};P(qe,Ge=>{Dt.isMobile?Ge(Fe):Ge(Ze,!1)})}M(()=>{lr(ge,"title",`Acheter le manquant (${s(U).formattedMissingQuantities??""})`),k(ke,s(U).formattedMissingQuantities)}),v(fe,ge)},Te=fe=>{var ge=ee(),Ce=N(ge);{var ke=qe=>{En(qe,{size:24,class:"text-success ms-auto"})};P(Ce,qe=>{s(l)&&qe(ke)},!0)}v(fe,ge)};P(Ie,fe=>{s(l)&&s(U).hasMissing?fe(ze):fe(Te,!1)})}var Xe=d(Ie,2);{var it=fe=>{var ge=Mh(),Ce=c(ge);sd(Ce,{size:18}),v(fe,ge)};P(Xe,fe=>{s(l)&&s(W)?.hasUnresolvedChangedSinceOverride&&fe(it)})}var nt=d(ve,2);nt.__click=[Nh,e,E],nt.__keydown=[Rh,e,E];var Ve=c(nt),He=c(Ve),lt=c(He);wr(lt,{class:"h-4 w-4"});var ct=d(He,2),mt=d(Ve,2),dt=c(mt);Je(dt,17,()=>s(V),zt,(fe,ge)=>{const Ce=G(()=>r[s(ge).icon]);var ke=qh(),qe=c(ke),Fe=c(qe);yr(Fe,()=>s(Ce),(ot,$t)=>{$t(ot,{class:"h-4 w-4"})});var Ze=d(Fe,2),Ge=c(Ze),_t=d(qe,2);{var rt=ot=>{var $t=Oh(),at=c($t);M(()=>k(at,`livré le: ${s(ge).deliveryDate??""}`)),v(ot,$t)};P(_t,ot=>{s(ge).deliveryDate&&ot(rt)})}M(()=>{De(ke,1,`badge badge-outline flex h-fit flex-col items-center gap-1 py-1 ${s(ge).badgeClass??""}`),k(Ge,`${s(ge).quantity??""}
                          ${s(ge).unit??""}`)}),v(fe,ke)});var Pt=d(dt,2);{var Ht=fe=>{var ge=jh();v(fe,ge)};P(Pt,fe=>{s(V).length===0&&fe(Ht)})}M(()=>{De(ce,1,`card bg-base-100 border-base-300 ${s(E).status==="isSyncing"?"border-accent bg-accent/30 animate-pulse border-2":""}`),k(ne,`${s(E).productName??""} `),De(Be,1,`text-base font-bold ${s(U).hasMissing&&s(l)?"text-error":"text-success"}`),De(ct,1,`text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity ${s(l)?"group-hover:opacity-100":""} sm:opacity-0`)}),v(I,ce)}),v(g,A)});var h=d(f,2);{var _=g=>{var p=zh();v(g,p)};P(h,g=>{Object.values(s(a)).flat().length===0&&g(_)})}v(t,u),Y()}Ye(["click","keydown"]);function Dn(t,e,r){s(e)||r.onClose()}var Wh=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Qh=(t,e)=>b(e,"empty"),Gh=(t,e)=>b(e,"all"),Vh=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Fh=y("<!> ",1),Kh=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <div><!></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Yh(t,e){K(e,!0);let r=L(!1),a=L(null),n=L(null),i=L(je(e.products.length>0&&e.products[0].storeInfo?e.products[0].storeInfo.storeName:"")),o=L(je(e.products.length>0&&e.products[0].storeInfo&&e.products[0].storeInfo.storeComment||"")),l=L(je({})),u=L("empty");Zt(()=>{const C={};e.products.forEach(re=>{e.productIds.includes(re.$id)&&(s(u)==="empty"?C[re.$id]=!re.storeInfo||!re.storeInfo.storeName:C[re.$id]=!0)}),b(l,C,!0)});const f=G(()=>e.products.map(C=>({id:C.$id,label:C.productName,title:C.productName,selected:s(l)[C.$id]}))),h=G(()=>s(f).filter(C=>C.selected)),_=G(()=>`Attribuer un magasin (${s(h).length} produits sélectionnés)`),g=G(()=>s(h).length===0?!1:s(i).trim().length>0);async function p(){if(!s(g)||s(r))return;b(a,null),b(n,null);const C=s(h).map(q=>q.id),re=e.products.filter(q=>C.includes(q.$id));Z.setSyncStatus(C,!0),Dt.backgroundOperation={isRunning:!0,name:`Mise à jour magasin (${C.length} produits)`,progress:0},e.onClose();try{const q={storeName:s(i).trim(),storeComment:s(o).trim()},ie=await Wo(C,re,q);if(ie.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${ie.updatedCount} produits modifiés`),Qe.success(`Magasin mis à jour pour ${ie.updatedCount} produits.`),e.onSuccess?.(ie);else throw new Error(ie.error||"Erreur lors de la mise à jour")}catch(q){const ie=q instanceof Error?q.message:"Erreur inconnue";console.error("[StoreEditModal] Erreur mise à jour:",q),Qe.error(`Erreur mise à jour magasin: ${ie}`),Z.clearSyncStatus()}finally{b(r,!1),Dt.backgroundOperation={isRunning:!1,name:"",progress:0}}}function m(C){s(l)[C]=!s(l)[C]}var w=Kh(),x=c(w),S=c(x),A=c(S),T=c(A),D=d(A,2);D.__click=[Dn,r,e];var $=c(D);qt($,{class:"h-4 w-4"});var I=d(S,2),O=c(I);{var E=C=>{var re=Wh(),q=c(re);ua(q,{class:"h-4 w-4"});var ie=d(q,2),oe=c(ie);M(()=>k(oe,s(a))),v(C,re)};P(O,C=>{s(a)&&C(E)})}var U=d(O,2),te=c(U),V=c(te);Qr(V,{get suggestions(){return Z.uniqueStores},get disabled(){return s(r)},id:"store-name-input",get value(){return s(i)},set value(C){b(i,C,!0)}});var W=d(te,2),ce=c(W);Gr(ce,{get disabled(){return s(r)},id:"store-comment-textarea",get value(){return s(o)},set value(C){b(o,C,!0)}});var _e=d(U,2),Ee=d(c(_e),2),Q=c(Ee);Q.__click=[Qh,u];var de=d(Q,2);de.__click=[Gh,u];var we=d(Ee,2);na(we,{get items(){return s(f)},onToggleItem:m,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var ne=d(I,2),ae=c(ne);ae.__click=[Dn,r,e];var pe=d(ae,2);pe.__click=p;var Se=c(pe);{var F=C=>{var re=Vh();v(C,re)},J=C=>{var re=Fh(),q=N(re);Br(q,{class:"h-4 w-4"});var ie=d(q);M(()=>k(ie,` Appliquer à ${s(h).length??""} produit(s)`)),v(C,re)};P(Se,C=>{s(r)?C(F):C(J,!1)})}M(()=>{k(T,s(_)),D.disabled=s(r),De(Q,1,`tab ${s(u)==="empty"?"tab-active":""}`),De(de,1,`tab ${s(u)==="all"?"tab-active":""}`),ae.disabled=s(r),pe.disabled=s(r)||!s(g)}),v(t,w),Y()}Ye(["click"]);function In(t,e,r){s(e)||r.onClose()}var Jh=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Xh=(t,e)=>b(e,"empty"),Zh=(t,e)=>b(e,"all"),ep=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),tp=y("<!> ",1),rp=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><div><!></div> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="text-base-content/70">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function ap(t,e){K(e,!0);let r=L(!1),a=L(null),n=L(null),i=L(je([])),o=L(""),l=L("empty"),u=L(je({}));Zt(()=>{const j={};e.products.forEach(se=>{e.productIds.includes(se.$id)&&(s(l)==="empty"?j[se.$id]=!se.who||se.who.length===0:j[se.$id]=!0)}),b(u,j,!0)});const f=G(()=>e.products.map(j=>({id:j.$id,label:j.productName,title:j.productName,selected:s(u)[j.$id]}))),h=G(()=>s(f).filter(j=>j.selected)),_=G(()=>{const j=new Set([...Z.uniqueWho,...s(i)]);return Array.from(j).map(se=>({id:se,label:se,selected:s(i).includes(se)}))}),g=G(()=>`Gérer les volontaires (${s(h).length} produits sélectionnés)`),p=G(()=>s(h).length===0?!1:s(i).length>0);async function m(){if(!s(p)||s(r))return;b(a,null),b(n,null);const j=s(h).map(be=>be.id),se=e.products.filter(be=>j.includes(be.$id));Z.setSyncStatus(j,!0),Dt.backgroundOperation={isRunning:!0,name:`Mise à jour volontaires (${j.length} produits)`,progress:0},e.onClose();try{const be=await Qo(j,se,s(i),"replace");if(be.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${be.updatedCount} produits modifiés`),Qe.success(`Volontaires mis à jour pour ${be.updatedCount} produits.`),e.onSuccess?.(be);else throw new Error(be.error||"Erreur lors de la mise à jour")}catch(be){const ve=be instanceof Error?be.message:"Erreur inconnue";console.error("[WhoEditModal] Erreur mise à jour:",be),Qe.error(`Erreur mise à jour volontaires: ${ve}`),Z.clearSyncStatus()}finally{b(r,!1),Dt.backgroundOperation={isRunning:!1,name:"",progress:0}}}function w(j){const se=j.trim();se&&!s(i).includes(se)&&b(i,[...s(i),se],!0)}function x(j){b(i,s(i).filter(se=>se!==j),!0)}function S(j){s(i).includes(j)?x(j):w(j)}function A(){s(o).trim()&&(w(s(o)),b(o,""))}function T(j){s(u)[j]=!s(u)[j]}var D=rp(),$=c(D),I=c($),O=c(I),E=c(O),U=d(O,2);U.__click=[In,r,e];var te=c(U);qt(te,{class:"h-4 w-4"});var V=d(I,2),W=c(V);{var ce=j=>{var se=Jh(),be=c(se);ua(be,{class:"h-4 w-4"});var ve=d(be,2),Me=c(ve);M(()=>k(Me,s(a))),v(j,se)};P(W,j=>{s(a)&&j(ce)})}var _e=d(W,2),Ee=c(_e),Q=c(Ee),de=c(Q),we=c(de);va(we,{get disabled(){return s(r)},onkeydown:j=>{j.key==="Enter"&&(j.preventDefault(),A())},get value(){return s(o)},set value(j){b(o,j,!0)}});var ne=d(de,2);ne.__click=A;var ae=c(ne);ii(ae,{size:16});var pe=d(Q,2),Se=d(c(pe),2);na(Se,{get items(){return s(_)},onToggleItem:S,showIcon:!0,badgeSize:"btn-sm",badgeStyle:"btn-soft"});var F=d(_e,2),J=d(c(F),2),C=c(J);C.__click=[Xh,l];var re=d(C,2);re.__click=[Zh,l];var q=d(J,2);na(q,{get items(){return s(f)},onToggleItem:T,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var ie=d(V,2),oe=c(ie);oe.__click=[In,r,e];var R=d(oe,2);R.__click=m;var X=c(R);{var ue=j=>{var se=ep();v(j,se)},B=j=>{var se=tp(),be=N(se);Br(be,{class:"h-4 w-4"});var ve=d(be);M(()=>k(ve,` Appliquer à ${s(h).length??""} produit(s)`)),v(j,se)};P(X,j=>{s(r)?j(ue):j(B,!1)})}M(j=>{k(E,s(g)),U.disabled=s(r),ne.disabled=j,De(C,1,`tab ${s(l)==="empty"?"tab-active":""}`),De(re,1,`tab ${s(l)==="all"?"tab-active":""}`),oe.disabled=s(r),R.disabled=s(r)||!s(p)},[()=>s(r)||!s(o).trim()]),v(t,D),Y()}Ye(["click"]);async function sp(t,e,r,a,n,i){if(!s(e).invoiceTotal||s(e).invoiceTotal<=0){b(r,"Le montant doit être supérieur à 0");return}b(a,!0),b(r,null);try{const o=Z.currentMainId;if(!o)throw new Error("Aucun événement principal actif");s(n)?await Cs(s(n),{price:s(e).invoiceTotal,invoiceTotal:s(e).invoiceTotal,store:s(e).store,notes:s(e).notes,who:s(e).who}):await Vo(o,void 0,s(e).invoiceTotal,s(e).store,s(e).notes,s(e).who),i()}catch(o){console.error("Erreur sauvegarde dépense:",o),b(r,o.message,!0)}finally{b(a,!1)}}var np=(t,e)=>e(!1),op=y('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),ip=y('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),lp=(t,e)=>b(e,!0),cp=y('<button class="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1 h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> Ajouter une dépense</button>'),dp=y('<span class="loading loading-spinner loading-xs"></span>'),up=y('<div class="text-error mt-2 text-xs"> </div>'),vp=y('<div class="card bg-base-200 animate-in fade-in slide-in-from-top-4 shadow-md duration-300"><div class="card-body p-4"><h4 class="card-title text-sm"> </h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><!> <!> <!> <!></div> <div class="card-actions mt-2 justify-end"><button class="btn btn-sm btn-ghost">Annuler</button> <button class="btn btn-sm btn-primary"><!> </button></div> <!></div></div>'),fp=(t,e)=>e("date"),hp=(t,e)=>e("store"),pp=(t,e)=>e("who"),gp=(t,e)=>e("amount"),mp=y('<span class="text-base-content/70 italic"> </span>'),_p=y('<span class="text-base-content/50 ml-1 text-xs"> </span>'),bp=y('<span class="font-medium"> </span> <!>',1),yp=(t,e,r)=>e(s(r)),wp=y('<tr class="hover"><td class="whitespace-nowrap"> </td><td class="max-w-xs truncate"><!></td><td> </td><td> </td><td class="text-right font-mono font-bold"> </td><td><button class="btn btn-ghost btn-square"><!></button></td></tr>'),Sp=y('<tr><td colspan="7" class="text-base-content/50 py-8 text-center">Aucune dépense trouvée</td></tr>'),xp=(t,e)=>e(!1),Ep=(t,e)=>e(!1),Pp=y('<dialog><div class="modal-box bg-base-100 flex h-[90vh] w-11/12 max-w-5xl flex-col p-0"><div class="border-base-300 bg-base-200 sticky top-0 z-10 flex items-center justify-between border-b p-4"><h3 class="flex items-center gap-2 text-lg font-bold"><!> Gestion des Dépenses</h3> <button class="btn btn-sm btn-circle btn-ghost">✕</button></div> <div class="flex-1 space-y-6 overflow-y-auto p-4"><div class="grid grid-cols-1 gap-4 md:grid-cols-3"><div class="stats bg-primary text-primary-content shadow"><div class="stat"><div class="stat-title text-primary-content/80">Total Global</div> <div class="stat-value"> </div> <div class="stat-desc text-primary-content/80"> </div></div></div> <div class="card bg-base-200 p-4 shadow-sm"><h4 class="mb-2 text-sm font-semibold tracking-wider uppercase opacity-70">Par Magasin</h4> <div class="max-h-24 space-y-1 overflow-y-auto text-sm"></div></div> <div class="card bg-base-200 p-4 shadow-sm"><h4 class="mb-2 text-sm font-semibold tracking-wider uppercase opacity-70">Par Acheteur</h4> <div class="max-h-24 space-y-1 overflow-y-auto text-sm"></div></div></div> <div class="flex items-center justify-between"><h4 class="text-sm font-bold uppercase opacity-70">Liste des transactions</h4> <!></div> <!> <div class="bg-base-100 border-base-200 overflow-x-auto rounded-lg border"><table class="table-zebra table-xs table w-full"><thead class="bg-base-200 sticky top-0"><tr><th class="hover:bg-base-300 cursor-pointer"> </th><th>Description</th><th class="hover:bg-base-300 cursor-pointer"> </th><th class="hover:bg-base-300 cursor-pointer"> </th><th class="hover:bg-base-300 cursor-pointer text-right"> </th><th><!></th></tr></thead><tbody><!><!></tbody></table></div></div> <div class="border-base-300 bg-base-200 sticky bottom-0 z-10 flex items-center justify-between border-t px-4 py-1"><button class="btn btn-ghost ms-auto">Fermer</button></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');function $p(t,e){K(e,!0);let r=ye(e,"isOpen",15,!1),a=L(!1),n=L(null),i=L(!1),o=L(je({invoiceTotal:0,store:"",notes:"",who:""})),l=L(null);Zt(()=>{if(r()&&!s(l)){const Ae=localStorage.getItem("appwrite-user-name");Ae&&(s(o).who=Ae)}});let u=L("date"),f=L("desc"),h=G(()=>Z.financialStats),_=G(()=>s(h).allPurchases),g=G(()=>{let Ae=[...s(_)];return Ae.sort((Ie,ze)=>{let Te,Xe;switch(s(u)){case"date":Te=new Date(Ie.orderDate||Ie.$createdAt).getTime(),Xe=new Date(ze.orderDate||ze.$createdAt).getTime();break;case"amount":Te=Ie.invoiceTotal||Ie.price||0,Xe=ze.invoiceTotal||ze.price||0;break;case"store":Te=(Ie.store||"").toLowerCase(),Xe=(ze.store||"").toLowerCase();break;case"who":Te=(Ie.who||"").toLowerCase(),Xe=(ze.who||"").toLowerCase();break}return Te<Xe?s(f)==="asc"?-1:1:Te>Xe?s(f)==="asc"?1:-1:0}),Ae});function p(Ae){s(u)===Ae?b(f,s(f)==="asc"?"desc":"asc",!0):(b(u,Ae,!0),b(f,"desc"))}function m(){const Ae=localStorage.getItem("appwrite-user-name")||"";b(o,{invoiceTotal:0,store:"",notes:"",who:Ae},!0),b(l,null),b(i,!1)}function w(Ae){b(o,{invoiceTotal:Ae.invoiceTotal||Ae.price||0,store:Ae.store||"",notes:Ae.notes||"",who:Ae.who||""},!0),b(l,Ae.$id,!0),b(i,!0)}function x(Ae){return Ae?new Date(Ae).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"-"}function S(Ae){return(Ae||0).toFixed(2)+" €"}var A=Pp(),T=c(A),D=c(T),$=c(D),I=c($);Xo(I,{});var O=d($,2);O.__click=[np,r];var E=d(D,2),U=c(E),te=c(U),V=c(te),W=d(c(V),2),ce=c(W),_e=d(W,2),Ee=c(_e),Q=d(te,2),de=d(c(Q),2);Je(de,21,()=>Object.entries(s(h).byStore).sort((Ae,Ie)=>Ie[1]-Ae[1]),zt,(Ae,Ie)=>{var ze=G(()=>Ea(s(Ie),2));let Te=()=>s(ze)[0],Xe=()=>s(ze)[1];var it=op(),nt=c(it),Ve=c(nt),He=d(nt,2),lt=c(He);M(ct=>{k(Ve,Te()),k(lt,ct)},[()=>S(Xe())]),v(Ae,it)});var we=d(Q,2),ne=d(c(we),2);Je(ne,21,()=>Object.entries(s(h).byWho).sort((Ae,Ie)=>Ie[1]-Ae[1]),zt,(Ae,Ie)=>{var ze=G(()=>Ea(s(Ie),2));let Te=()=>s(ze)[0],Xe=()=>s(ze)[1];var it=ip(),nt=c(it),Ve=c(nt),He=d(nt,2),lt=c(He);M(ct=>{k(Ve,Te()),k(lt,ct)},[()=>S(Xe())]),v(Ae,it)});var ae=d(U,2),pe=d(c(ae),2);{var Se=Ae=>{var Ie=cp();Ie.__click=[lp,i],v(Ae,Ie)};P(pe,Ae=>{s(i)||Ae(Se)})}var F=d(ae,2);{var J=Ae=>{var Ie=vp(),ze=c(Ie),Te=c(ze),Xe=c(Te),it=d(Te,2),nt=c(it);Bs(nt,{get disabled(){return s(a)},get value(){return s(o).invoiceTotal},set value(ke){s(o).invoiceTotal=ke}});var Ve=d(nt,2);Qr(Ve,{get suggestions(){return Z.uniqueStores},get disabled(){return s(a)},get value(){return s(o).store},set value(ke){s(o).store=ke}});var He=d(Ve,2);va(He,{get suggestions(){return Z.uniqueWho},get disabled(){return s(a)},get value(){return s(o).who},set value(ke){s(o).who=ke}});var lt=d(He,2);Gr(lt,{get disabled(){return s(a)},get value(){return s(o).notes},set value(ke){s(o).notes=ke}});var ct=d(it,2),mt=c(ct);mt.__click=m;var dt=d(mt,2);dt.__click=[sp,o,n,a,l,m];var Pt=c(dt);{var Ht=ke=>{var qe=dp();v(ke,qe)};P(Pt,ke=>{s(a)&&ke(Ht)})}var fe=d(Pt),ge=d(ct,2);{var Ce=ke=>{var qe=up(),Fe=c(qe);M(()=>k(Fe,s(n))),v(ke,qe)};P(ge,ke=>{s(n)&&ke(Ce)})}M(()=>{k(Xe,s(l)?"Modifier la dépense":"Nouvelle Dépense"),dt.disabled=s(a),k(fe,` ${s(l)?"Enregistrer":"Ajouter"}`)}),v(Ae,Ie)};P(F,Ae=>{s(i)&&Ae(J)})}var C=d(F,2),re=c(C),q=c(re),ie=c(q),oe=c(ie);oe.__click=[fp,p];var R=c(oe),X=d(oe,2);X.__click=[hp,p];var ue=c(X),B=d(X);B.__click=[pp,p];var j=c(B),se=d(B);se.__click=[gp,p];var be=c(se),ve=d(se),Me=c(ve);Sd(Me,{size:14});var H=d(q),he=c(H);Je(he,17,()=>s(g),Ae=>Ae.$id,(Ae,Ie)=>{var ze=wp(),Te=c(ze),Xe=c(Te),it=d(Te),nt=c(it);{var Ve=ke=>{var qe=mp(),Fe=c(qe);M(()=>k(Fe,s(Ie).notes||"-")),v(ke,qe)},He=ke=>{var qe=bp(),Fe=N(qe),Ze=c(Fe),Ge=d(Fe,2);{var _t=rt=>{var ot=_p(),$t=c(ot);M(()=>k($t,`- ${s(Ie).notes??""}`)),v(rt,ot)};P(Ge,rt=>{s(Ie).notes&&rt(_t)})}M(()=>k(Ze,s(Ie)._productName||"Produit inconnu")),v(ke,qe)};P(nt,ke=>{s(Ie).status==="expense"?ke(Ve):ke(He,!1)})}var lt=d(it),ct=c(lt),mt=d(lt),dt=c(mt),Pt=d(mt),Ht=c(Pt),fe=d(Pt),ge=c(fe);ge.__click=[yp,w,Ie];var Ce=c(ge);sa(Ce,{size:14}),M((ke,qe)=>{k(Xe,ke),k(ct,s(Ie).store||"-"),k(dt,s(Ie).who||"-"),k(Ht,qe)},[()=>x(s(Ie).orderDate||s(Ie).$createdAt),()=>S(s(Ie).invoiceTotal||s(Ie).price)]),v(Ae,ze)});var Le=d(he);{var Be=Ae=>{var Ie=Sp();v(Ae,Ie)};P(Le,Ae=>{s(g).length===0&&Ae(Be)})}var Ue=d(E,2),Ne=c(Ue);Ne.__click=[xp,r];var et=d(T,2),It=c(et);It.__click=[Ep,r],M(Ae=>{De(A,1,`modal ${r()?"modal-open":""}`),k(ce,Ae),k(Ee,`${s(_).length??""} transactions`),k(R,`Date ${s(u)==="date"?s(f)==="asc"?"↑":"↓":""}`),k(ue,`Magasin ${s(u)==="store"?s(f)==="asc"?"↑":"↓":""}`),k(j,`Qui ${s(u)==="who"?s(f)==="asc"?"↑":"↓":""}`),k(be,`Montant ${s(u)==="amount"?s(f)==="asc"?"↑":"↓":""}`)},[()=>S(s(h).totalGlobal)]),v(t,A),Y()}Ye(["click"]);var Ap=y("<div><!></div>"),Tp=y('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function kp(t,e){K(e,!0);let r=L(!1),a=ye(e,"width",3,"80"),n=ye(e,"bgClass",3,"bg-base-300");const i=G(()=>"w-"+a());var o=ee(),l=N(o);{var u=h=>{var _=Ap(),g=c(_);me(g,()=>e.children??le),M(()=>De(_,1,`${n()??""} ${(s(i)?s(i):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),v(h,_)},f=h=>{var _=Tp(),g=N(_),p=c(g),m=d(p,2),w=d(c(m),2),x=c(w);me(x,()=>e.children??le);var S=d(g,2),A=c(S),T=c(A);ti(T,{class:"h-6 w-6"}),cs(p,()=>s(r),D=>b(r,D)),v(h,_)};P(l,h=>{Dt.isMobile?h(f,!1):h(u)})}v(t,o),Y()}function Dp(t,e){b(e,!0)}var Ip=(t,e)=>b(e,!0),Cp=y('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button> <button class="btn btn-sm btn-primary" title="Ajouter un produit manuellement"><!> Produit</button></div> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Mp(t,e){K(e,!0);const r="100",a=G(()=>Z.stats);let n=L(null),i=L("recettes"),o=L(!1),l=L(!1),u=L(je([])),f=L(je([])),h=L(!1),_=L(je([])),g=L(!1);function p(q,ie="recettes"){b(i,ie,!0),b(n,q,!0)}function m(){b(n,null)}function w(q,ie,oe){b(u,ie,!0),b(f,oe,!0),b(q==="who"?o:l,!0)}function x(q){(!q||q==="who")&&b(o,!1),(!q||q==="store")&&b(l,!1),b(u,[],!0),b(f,[],!0)}function S(q){console.log(`[ProductsTable] Modification groupée réussie: ${q.updatedCount} produits`)}function A(q){const ie=q.filter(oe=>Z.getProductModelById(oe.$id)?.stats.hasMissing);console.log(`[ProductsTable] openGroupPurchaseModal: ${q.length} produits reçus → ${ie.length} produits avec quantités manquantes`),b(_,ie,!0),b(h,!0)}function T(){b(h,!1),b(_,[],!0)}function D(){console.log("[ProductsTable] Achat groupé créé avec succès"),T()}async function $(q,ie){try{if(!Z.currentMainId)throw new Error("mainId non disponible");const oe=ie.missingQuantities||[];if(oe.length===0){console.log("Aucune quantité manquante à valider pour ce produit dans cette période");return}const R=oe.filter(ue=>ue.q<0).map(ue=>({...ue,q:Math.abs(ue.q)})).map(ue=>{const{quantity:B,unit:j}=fs(ue.q,ue.u);return{q:B,u:j}});let X=q.$id;q.isSynced||(console.log(`[ProductsTable] Produit ${q.$id} local, création pour validation rapide...`),X=(await Qt(q.$id,{},B=>Z.getEnrichedProductById(B))).$id,console.log(`[ProductsTable] Produit sync créé: ${X}`)),await Go(Z.currentMainId,X,R,{store:q.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${q.productName}`)}catch(oe){console.error("[ProductsTable] Erreur validation rapide:",oe),alert("Erreur lors de la validation rapide: "+oe.message)}}let I=L(!1);var O=Cp(),E=c(O),U=c(E),te=c(U);fd(te,{class:"mr-1 h-4 w-4"});var V=d(te),W=d(U,2);W.__click=[Ip,I];var ce=c(W);Xo(ce,{class:"mr-1 h-4 w-4"});var _e=d(W,2);_e.__click=[Dp,g];var Ee=c(_e);Rs(Ee,{class:"mr-1 h-4 w-4"});var Q=d(E,2);kp(Q,{width:r,children:(q,ie)=>{zf(q,{})},$$slots:{default:!0}});var de=d(Q,2);Hh(de,{onOpenModal:p,onOpenGroupEditModal:w,onOpenGroupPurchaseModal:A,onQuickValidation:$});var we=d(de,2);{let q=G(()=>s(n)||"");af(we,{get productId(){return s(q)},get initialTab(){return s(i)},onClose:m})}var ne=d(we,2);{var ae=q=>{ap(q,{get productIds(){return s(u)},get products(){return s(f)},onClose:()=>x("who"),onSuccess:S})};P(ne,q=>{s(o)&&q(ae)})}var pe=d(ne,2);{var Se=q=>{Yh(q,{get productIds(){return s(u)},get products(){return s(f)},onClose:()=>x("store"),onSuccess:S})};P(pe,q=>{s(l)&&q(Se)})}var F=d(pe,2);{var J=q=>{du(q,{get products(){return s(_)},onClose:T,onSuccess:D})};P(F,q=>{s(h)&&q(J)})}var C=d(F,2);gu(C,{get open(){return s(g)},set open(q){b(g,q,!0)}});var re=d(C,2);$p(re,{get isOpen(){return s(I)},set isOpen(q){b(I,q,!0)}}),M(()=>{De(O,1,`space-y-6 ${Dt.isMobile?"":"ml-100"}`),k(V,` ${s(a).total??""}`)}),v(t,O),Y()}Ye(["click"]);Ji();var Np=y('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function Rp(t){var e=Np();v(t,e)}var Op=y('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function qp(t,e){var r=Op(),a=d(c(r),2),n=d(c(a),2),i=c(n);M(()=>k(i,e.message)),v(t,r)}var jp=y('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Lp(t,e){var r=jp(),a=c(r),n=c(a);ua(n,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=d(n,2),o=d(c(i),2),l=c(o);M(()=>k(l,e.message||"Erreur inconnue")),v(t,r)}function Bp(t){t.stopPropagation()}var zp=(t,e)=>t.key==="Escape"&&e(),Up=y('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),Hp=y('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),Wp=(t,e)=>b(e,!1),Qp=y('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),Gp=(t,e)=>b(e,!0),Vp=(t,e)=>b(e,!1),Fp=y(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),Kp=(t,e)=>b(e,!0),Yp=y('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),Jp=y('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function Xp(t,e){K(e,!0);let r=ye(e,"onClose",3,()=>{}),a=ye(e,"onAuthSuccess",3,()=>{}),n=L(!0),i=L(!1),o=L(""),l=L(""),u=L(""),f=L(""),h=L(""),_=L(""),g=L(""),p=L(""),m=L(!1);function w(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function x(we){if(we.preventDefault(),!s(u)||!s(f)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{await(await w().getAccount()).createEmailPasswordSession(s(u),s(f)),b(l,"Connexion réussie !"),setTimeout(()=>{a()()},1e3)}catch(ne){console.error("Erreur de connexion:",ne),b(o,ne.message||"Erreur lors de la connexion",!0)}finally{b(i,!1)}}async function S(we){if(we.preventDefault(),!s(h)||!s(_)||!s(g)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{const ae=await w().getAccount();await ae.create("unique()",s(_),s(g),s(h)),await ae.createEmailPasswordSession(s(_),s(g)),b(l,"Compte créé et connecté !"),setTimeout(()=>{a()()},1e3)}catch(ne){console.error("Erreur d'inscription:",ne),b(o,ne.message||"Erreur lors de la création du compte",!0)}finally{b(i,!1)}}async function A(we){if(we.preventDefault(),!s(p)){b(o,"Veuillez entrer votre email");return}b(i,!0),b(o,"");try{await(await w().getAccount()).createRecovery(s(p),`${window.location.origin}/reset-password`),b(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{b(m,!1),b(p,"")},2e3)}catch(ne){console.error("Erreur mot de passe oublié:",ne),b(o,ne.message||"Erreur lors de l'envoi de l'email",!0)}finally{b(i,!1)}}function T(){s(i)||r()()}Zt(()=>{(s(n)||s(m))&&(b(o,""),b(l,""))});var D=Jp();D.__click=T,D.__keydown=[zp,T];var $=c(D);$.__click=[Bp];var I=c($),O=c(I),E=c(O),U=d(O,2);U.__click=T;var te=d(I,2),V=c(te);{var W=we=>{var ne=Up(),ae=c(ne);M(()=>k(ae,s(o))),v(we,ne)};P(V,we=>{s(o)&&we(W)})}var ce=d(V,2);{var _e=we=>{var ne=Hp(),ae=c(ne);M(()=>k(ae,s(l))),v(we,ne)};P(ce,we=>{s(l)&&we(_e)})}var Ee=d(ce,2);{var Q=we=>{var ne=Qp(),ae=N(ne),pe=c(ae),Se=d(c(pe),2),F=d(pe,2),J=c(F),C=d(ae,2),re=c(C);re.__click=[Wp,m],M(()=>{Se.disabled=s(i),F.disabled=s(i),k(J,s(i)?"Envoi...":"Envoyer l'email de réinitialisation"),re.disabled=s(i)}),Nr("submit",ae,A),Ke(Se,()=>s(p),q=>b(p,q)),v(we,ne)},de=we=>{var ne=ee(),ae=N(ne);{var pe=F=>{var J=Fp(),C=N(J),re=c(C),q=d(c(re),2),ie=d(re,2),oe=d(c(ie),2),R=d(ie,2),X=c(R),ue=d(C,2),B=c(ue);B.__click=[Gp,m];var j=d(B,2),se=d(c(j));se.__click=[Vp,n],M(()=>{q.disabled=s(i),oe.disabled=s(i),R.disabled=s(i),k(X,s(i)?"Connexion...":"Se connecter"),B.disabled=s(i),se.disabled=s(i)}),Nr("submit",C,x),Ke(q,()=>s(u),be=>b(u,be)),Ke(oe,()=>s(f),be=>b(f,be)),v(F,J)},Se=F=>{var J=Yp(),C=N(J),re=c(C),q=d(c(re),2),ie=d(re,2),oe=d(c(ie),2),R=d(ie,2),X=d(c(R),2),ue=d(R,2),B=c(ue),j=d(C,2),se=d(c(j));se.__click=[Kp,n],M(()=>{q.disabled=s(i),oe.disabled=s(i),X.disabled=s(i),ue.disabled=s(i),k(B,s(i)?"Création...":"Créer un compte"),se.disabled=s(i)}),Nr("submit",C,S),Ke(q,()=>s(h),be=>b(h,be)),Ke(oe,()=>s(_),be=>b(_,be)),Ke(X,()=>s(g),be=>b(g,be)),v(F,J)};P(ae,F=>{s(n)?F(pe):F(Se,!1)},!0)}v(we,ne)};P(Ee,we=>{s(m)?we(Q):we(de,!1)})}M(()=>{k(E,s(m)?"Mot de passe oublié":s(n)?"Connexion":"Inscription"),U.disabled=s(i)}),v(t,D),Y()}Ye(["click","keydown"]);var Zp=(t,e,r,a)=>e(s(r),s(a)),eg=y('<button class="btn btn-sm btn-primary"> </button>'),tg=(t,e,r)=>e(s(r)),rg=y('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),ag=(t,e,r)=>e(s(r)),sg=y('<button class="btn btn-ghost btn-sm btn-circle absolute top-1 right-1" title="Fermer" aria-label="Fermer la notification"><!></button>'),ng=y('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!> <!></div></div></div>'),og=y("<div></div>");function ig(t,e){K(e,!0);let r=ye(e,"position",3,"toast-right toast-bottom"),a=ye(e,"padding",3,"md");const n=G(()=>a()==="sm"?"px-2 py-0.5":""),i=G(()=>Qe.toasts);function o(_){return _==="success"||_==="info"}function l(_){Qe.dismiss(_.id)}function u(_){e.onShowDetails?.({id:_.id,message:_.message,details:_.details})}function f(_,g){g.onClick()}var h=og();Je(h,21,()=>s(i),_=>_.id,(_,g)=>{var p=ng(),m=c(p),w=c(m),x=c(w);{var S=V=>{ai(V,{class:"h-5 w-5 animate-spin"})};P(x,V=>{s(g).state==="loading"&&V(S)})}var A=d(x,2),T=c(A),D=d(w,2),$=c(D);{var I=V=>{var W=ee(),ce=N(W);Je(ce,17,()=>s(g).actions,zt,(_e,Ee)=>{var Q=eg();Q.__click=[Zp,f,g,Ee];var de=c(Q);M(()=>k(de,s(Ee).label)),v(_e,Q)}),v(V,W)};P($,V=>{s(g).actions&&s(g).actions.length>0&&V(I)})}var O=d($,2);{var E=V=>{var W=rg();W.__click=[tg,u,g];var ce=c(W);Zo(ce,{class:"h-3 w-3"}),v(V,W)};P(O,V=>{s(g).details&&V(E)})}var U=d(O,2);{var te=V=>{var W=sg();W.__click=[ag,l,g];var ce=c(W);qt(ce,{class:"h-4 w-4"}),v(V,W)};P(U,V=>{(s(g).state==="error"||s(g).state==="warning"||!o(s(g).state))&&V(te)})}M(()=>{De(p,1,`alert alert-${s(g).state??""} max-w-sm ${s(n)??""} shadow-lg`),k(T,s(g).message)}),v(_,p)}),M(()=>De(h,1,`toast ${r()??""} z-50`)),v(t,h),Y()}Ye(["click"]);var lg=y('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function cg(t){var e=lg(),r=c(e),a=d(r,2);qs(a,{class:"swap-on fill-current"});var n=d(a,2);Ns(n,{class:"swap-off fill-current"}),v(t,e)}class dg{dbName="recipes-cache";db=null;version=1;RECIPES_INDEX_STORE="recipes-index";RECIPES_DETAILS_STORE="recipes-details";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";INDEX_HASH_KEY="indexHash";RECIPES_COUNT_KEY="recipesCount";async open(){if(!this.db)return new Promise((e,r)=>{const a=indexedDB.open(this.dbName,this.version);a.onerror=()=>r(a.error),a.onsuccess=()=>{this.db=a.result,console.log(`[RecipesIDBCache] Base ouverte: ${this.dbName}`),e()},a.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(this.RECIPES_INDEX_STORE)||(i.createObjectStore(this.RECIPES_INDEX_STORE,{keyPath:"u"}),console.log("[RecipesIDBCache] Object store 'recipes-index' créé")),i.objectStoreNames.contains(this.RECIPES_DETAILS_STORE)||(i.createObjectStore(this.RECIPES_DETAILS_STORE,{keyPath:"uuid"}),console.log("[RecipesIDBCache] Object store 'recipes-details' créé")),i.objectStoreNames.contains(this.METADATA_STORE)||(i.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[RecipesIDBCache] Object store 'metadata' créé"))}})}async loadRecipesIndex(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.RECIPES_INDEX_STORE,"readonly").objectStore(this.RECIPES_INDEX_STORE).getAll();i.onsuccess=()=>{const o=new Map;i.result.forEach(l=>{o.set(l.u,l)}),console.log(`[RecipesIDBCache] ${o.size} recettes (index) chargées`),e(o)},i.onerror=()=>r(i.error)})}async saveRecipesIndex(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.RECIPES_INDEX_STORE,"readwrite"),i=n.objectStore(this.RECIPES_INDEX_STORE);i.clear(),e.forEach(o=>{i.put(o)}),n.oncomplete=()=>{console.log(`[RecipesIDBCache] ${e.size} recettes (index) sauvegardées`),r()},n.onerror=()=>a(n.error)})}async loadRecipeDetail(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.RECIPES_DETAILS_STORE,"readonly").objectStore(this.RECIPES_DETAILS_STORE).get(e);o.onsuccess=()=>{const l=o.result;l&&console.log(`[RecipesIDBCache] Détails de ${e} chargés depuis le cache`),r(l||null)},o.onerror=()=>a(o.error)})}async saveRecipeDetail(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.RECIPES_DETAILS_STORE,"readwrite").objectStore(this.RECIPES_DETAILS_STORE).put(e);o.onsuccess=()=>{console.log(`[RecipesIDBCache] Détails de ${e.uuid} sauvegardés`),r()},o.onerror=()=>a(o.error)})}async loadAllRecipeDetails(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.RECIPES_DETAILS_STORE,"readonly").objectStore(this.RECIPES_DETAILS_STORE).getAll();i.onsuccess=()=>{const o=new Map;i.result.forEach(l=>{o.set(l.uuid,l)}),console.log(`[RecipesIDBCache] ${o.size} détails de recettes chargés`),e(o)},i.onerror=()=>r(i.error)})}async deleteRecipeDetail(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.RECIPES_DETAILS_STORE,"readwrite").objectStore(this.RECIPES_DETAILS_STORE).delete(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();i.onsuccess=()=>{const o=i.result,l={lastSync:null,indexHash:null,recipesCount:0};o.forEach(u=>{u.key===this.LAST_SYNC_KEY?l.lastSync=u.value:u.key===this.INDEX_HASH_KEY?l.indexHash=u.value:u.key===this.RECIPES_COUNT_KEY&&(l.recipesCount=u.value)}),console.log(`[RecipesIDBCache] Metadata chargées: count=${l.recipesCount}, hash=${l.indexHash}`),e(l)},i.onerror=()=>r(i.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.METADATA_STORE,"readwrite"),i=n.objectStore(this.METADATA_STORE);i.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),i.put({key:this.INDEX_HASH_KEY,value:e.indexHash}),i.put({key:this.RECIPES_COUNT_KEY,value:e.recipesCount}),n.oncomplete=()=>{console.log("[RecipesIDBCache] Metadata sauvegardées"),r()},n.onerror=()=>a(n.error)})}async updateIndexHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.INDEX_HASH_KEY,value:e});o.onsuccess=()=>{console.log(`[RecipesIDBCache] indexHash mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const a=this.db.transaction([this.RECIPES_INDEX_STORE,this.RECIPES_DETAILS_STORE,this.METADATA_STORE],"readwrite");a.objectStore(this.RECIPES_INDEX_STORE).clear(),a.objectStore(this.RECIPES_DETAILS_STORE).clear(),a.objectStore(this.METADATA_STORE).clear(),a.oncomplete=()=>{console.log("[RecipesIDBCache] Cache vidé"),e()},a.onerror=()=>r(a.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[RecipesIDBCache] Connexion fermée"))}}async function ug(){const t=new dg;return await t.open(),t}function vg(t){if(!Array.isArray(t)||t.length<8)throw new Error(`Format d'ingrédient invalide: ${JSON.stringify(t)}`);return{uuid:t[0],originalQuantity:t[1],originalUnit:t[2],normalizedQuantity:t[3],normalizedUnit:t[4],comment:t[5]||"",allergens:Array.isArray(t[6])?t[6]:[],type:t[7]||""}}function fg(t){if(!t||typeof t!="object")throw new Error("Données de recette invalides");const e=[];return Array.isArray(t.ingredients)&&t.ingredients.forEach(r=>{try{e.push(vg(r))}catch(a){console.warn("[parseRecipeData] Ingrédient invalide ignoré:",a)}}),{uuid:t.uuid||"",title:t.title||"",plate:t.plate||1,ingredients:e,preparation:t.preparation||""}}const hg="/api/data.json";class pg{#e=new Cr;#t=new Cr;#r=L(!1);#o=L(null);#d=L(null);#l=L(!1);#s=null;#i=new Set;get loading(){return s(this.#r)}get error(){return s(this.#o)}get lastSync(){return s(this.#d)}get isInitialized(){return s(this.#l)}get recipesIndex(){return Array.from(this.#e.values())}get count(){return this.#e.size}get detailsLoadedCount(){return this.#t.size}async initialize(){if(s(this.#l)){console.log("[RecipesStore] Déjà initialisé");return}console.log("[RecipesStore] Initialisation..."),b(this.#r,!0),b(this.#o,null);try{this.#s=await ug();const e=await this.#s.loadRecipesIndex(),r=await this.#s.loadMetadata();e.size>0&&(console.log(`[RecipesStore] ${e.size} recettes (index) chargées depuis le cache`),this.#e=new Cr(e),b(this.#d,r.lastSync,!0)),await this.#u(),b(this.#l,!0),console.log(`[RecipesStore] Initialisation complétée: ${this.#e.size} recettes`)}catch(e){const r=e instanceof Error?e.message:"Erreur lors de l'initialisation";throw b(this.#o,r,!0),console.error("[RecipesStore]",r,e),e}finally{b(this.#r,!1)}}async#u(){try{console.log("[RecipesStore] Chargement de l'index depuis data.json...");const e=await fetch(hg);if(!e.ok)throw new Error(`Erreur HTTP: ${e.status}`);const a=(await e.json()).recipes;if(!Array.isArray(a))throw new Error("Format de données invalide: recipes n'est pas un tableau");const n=await this.#c(JSON.stringify(a));if((await this.#s.loadMetadata()).indexHash===n){console.log("[RecipesStore] Index inchangé, utilisation du cache");return}const o=new Map;a.forEach(l=>{o.set(l.u,l)}),this.#e=new Cr(o),b(this.#d,new Date().toISOString(),!0),this.#s&&(await this.#s.saveRecipesIndex(o),await this.#s.saveMetadata({lastSync:s(this.#d),indexHash:n,recipesCount:o.size})),console.log(`[RecipesStore] ${o.size} recettes (index) chargées depuis data.json`)}catch(e){throw console.error("[RecipesStore] Erreur lors du chargement de l'index:",e),e}}async#c(e){const a=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",a);return Array.from(new Uint8Array(n)).map(o=>o.toString(16).padStart(2,"0")).join("")}getRecipeIndexByUuid(e){return this.#e.get(e)||null}searchRecipes(e){if(!e.trim())return this.recipesIndex;const r=e.toLowerCase();return this.recipesIndex.filter(a=>a.n.toLowerCase().includes(r))}getRecipesByType(e){return this.recipesIndex.filter(r=>r.t===e)}get availableTypes(){const e=new Set;return this.recipesIndex.forEach(r=>e.add(r.t)),Array.from(e).sort()}async getRecipeByUuid(e){const r=this.#t.get(e);if(r)return console.log(`[RecipesStore] Détails de ${e} déjà en mémoire`),r;if(this.#i.has(e)){for(console.log(`[RecipesStore] Chargement de ${e} déjà en cours, attente...`);this.#i.has(e);)await new Promise(a=>setTimeout(a,50));return this.#t.get(e)||null}this.#i.add(e);try{if(this.#s){const l=await this.#s.loadRecipeDetail(e);if(l)return this.#t.set(e,l),l}const a=this.#e.get(e);if(!a)return console.warn(`[RecipesStore] Recette ${e} non trouvée dans l'index`),null;console.log(`[RecipesStore] Chargement des détails de ${e} depuis ${a.p}...`);const n=await fetch(a.p);if(!n.ok)throw new Error(`Erreur HTTP: ${n.status}`);const i=await n.json(),o=fg(i);return this.#t.set(e,o),this.#s&&await this.#s.saveRecipeDetail(o),console.log(`[RecipesStore] Détails de ${e} chargés et mis en cache`),o}catch(a){return console.error(`[RecipesStore] Erreur lors du chargement de ${e}:`,a),null}finally{this.#i.delete(e)}}async preloadRecipes(e){console.log(`[RecipesStore] Préchargement de ${e.length} recettes...`);const r=e.map(a=>this.getRecipeByUuid(a));await Promise.all(r),console.log("[RecipesStore] Préchargement terminé")}async createRecipe(e){throw new Error("createRecipe: Non implémenté - Phase 4")}async updateRecipe(e,r){throw new Error("updateRecipe: Non implémenté - Phase 4")}async deleteRecipe(e){throw new Error("deleteRecipe: Non implémenté - Phase 4")}async forceReloadIndex(){console.log("[RecipesStore] Rechargement forcé de l'index..."),b(this.#r,!0),b(this.#o,null);try{await this.#u(),console.log("[RecipesStore] Rechargement de l'index complété")}catch(e){const r=e instanceof Error?e.message:"Erreur lors du rechargement";throw b(this.#o,r,!0),console.error("[RecipesStore]",r,e),e}finally{b(this.#r,!1)}}async clearCache(){this.#s&&(await this.#s.clear(),console.log("[RecipesStore] Cache vidé")),this.#e.clear(),this.#t.clear(),b(this.#d,null),b(this.#l,!1)}destroy(){this.#s&&(this.#s.close(),this.#s=null),this.#e.clear(),this.#t.clear(),this.#i.clear(),b(this.#l,!1),console.log("[RecipesStore] Ressources nettoyées")}}const Mt=new pg;var gg=y('<div class="alert alert-info"><span>Chargement des recettes...</span></div>'),mg=y('<div class="alert alert-error"><span> </span></div>'),_g=y("<option> </option>"),bg=(t,e,r)=>e(s(r).u),yg=y('<tr><td class="font-medium"> </td><td><span class="badge badge-sm badge-outline"> </span></td><td><code class="text-xs"> </code></td><td><button class="btn btn-xs btn-primary">Détails</button></td></tr>'),wg=y('<tr><td colspan="4" class="text-center text-gray-400">Aucune recette trouvée</td></tr>'),Sg=y('<div class="flex h-64 items-center justify-center"><span class="loading loading-spinner loading-lg"></span></div>'),xg=y('<br/><span class="text-xs italic"> </span>',1),Eg=y('<span class="badge badge-warning badge-xs"> </span>'),Pg=y("<br/> <!>",1),$g=y('<tr><td><code class="text-xs"> </code> <!></td><td> </td><td class="font-medium"> </td><td><span class="badge badge-xs"> </span> <!></td></tr>'),Ag=y('<div class="divider">Préparation</div> <div class="prose prose-sm max-w-none"><pre class="text-xs whitespace-pre-wrap"> </pre></div>',1),Tg=y('<div class="card bg-base-200 shadow-xl"><div class="card-body"><h3 class="card-title"> </h3> <div class="divider">Informations</div> <div class="grid grid-cols-2 gap-2 text-sm"><div><span class="font-semibold">UUID:</span> <code class="ml-2 text-xs"> </code></div> <div><span class="font-semibold">Couverts:</span> <span class="ml-2"> </span></div></div> <div class="divider"> </div> <div class="max-h-64 overflow-x-auto"><table class="table-xs table"><thead><tr><th>Ingrédient</th><th>Qté Orig.</th><th>Qté Norm.</th><th>Type</th></tr></thead><tbody></tbody></table></div> <!></div></div>'),kg=y('<div class="alert alert-info"><span>Sélectionnez une recette pour voir ses détails</span></div>'),Dg=y('<div class="stats mb-4 shadow"><div class="stat"><div class="stat-title">Total Recettes</div> <div class="stat-value"> </div></div> <div class="stat"><div class="stat-title">Détails Chargés</div> <div class="stat-value"> </div></div> <div class="stat"><div class="stat-title">Types</div> <div class="stat-value"> </div></div></div> <div class="grid grid-cols-1 gap-4 lg:grid-cols-2"><div><h2 class="mb-3 text-xl font-semibold">Index des Recettes</h2> <div class="mb-4 flex gap-2"><input type="text" placeholder="Rechercher..." class="input input-bordered flex-1"/> <select class="select select-bordered"><option>Tous types</option><!></select></div> <div class="max-h-[600px] overflow-y-auto"><table class="table-sm table-zebra table"><thead class="bg-base-200 sticky top-0"><tr><th>Nom</th><th>Type</th><th>Couverts</th><th>Action</th></tr></thead><tbody></tbody></table></div> <div class="mt-2 text-sm text-gray-500"> </div></div> <div><h2 class="mb-3 text-xl font-semibold">Détails de la Recette</h2> <!></div></div>',1),Ig=y('<div class="container mx-auto p-4"><h1 class="mb-4 text-2xl font-bold">Test RecipesStore</h1> <!></div>');function Cg(t,e){K(e,!0);let r=L(""),a=L(""),n=L(null),i=L(!1);const o=G(()=>{let p=Mt.recipesIndex;return s(r).trim()&&(p=Mt.searchRecipes(s(r))),s(a)!==""&&(p=p.filter(m=>m.t===s(a))),p}),l=[{value:0,label:"Entrée"},{value:1,label:"Plat"},{value:2,label:"Dessert"}];async function u(p){b(i,!0);try{b(n,await Mt.getRecipeByUuid(p),!0)}catch(m){console.error("Erreur de chargement:",m)}finally{b(i,!1)}}ks(async()=>{try{await Mt.initialize()}catch(p){console.error("Erreur d'initialisation:",p)}});var f=Ig(),h=d(c(f),2);{var _=p=>{var m=gg();v(p,m)},g=p=>{var m=ee(),w=N(m);{var x=A=>{var T=mg(),D=c(T),$=c(D);M(()=>k($,`Erreur: ${Mt.error??""}`)),v(A,T)},S=A=>{var T=Dg(),D=N(T),$=c(D),I=d(c($),2),O=c(I),E=d($,2),U=d(c(E),2),te=c(U),V=d(E,2),W=d(c(V),2),ce=c(W),_e=d(D,2),Ee=c(_e),Q=d(c(Ee),2),de=c(Q),we=d(de,2),ne=c(we);ne.value=ne.__value="";var ae=d(ne);Je(ae,17,()=>l,zt,(R,X)=>{var ue=_g(),B=c(ue),j={};M(()=>{k(B,s(X).label),j!==(j=s(X).value)&&(ue.value=(ue.__value=s(X).value)??"")}),v(R,ue)});var pe=d(Q,2),Se=c(pe),F=d(c(Se));Je(F,21,()=>s(o),R=>R.u,(R,X)=>{var ue=yg(),B=c(ue),j=c(B),se=d(B),be=c(se),ve=c(be),Me=d(se),H=c(Me),he=c(H),Le=d(Me),Be=c(Le);Be.__click=[bg,u,X],M((Ue,Ne)=>{k(j,s(X).n),k(ve,Ue),k(he,Ne)},[()=>l.find(Ue=>Ue.value===s(X).t)?.label||s(X).t,()=>s(X).u.substring(0,6)]),v(R,ue)},R=>{var X=wg();v(R,X)});var J=d(pe,2),C=c(J),re=d(Ee,2),q=d(c(re),2);{var ie=R=>{var X=Sg();v(R,X)},oe=R=>{var X=ee(),ue=N(X);{var B=se=>{var be=Tg(),ve=c(be),Me=c(ve),H=c(Me),he=d(Me,4),Le=c(he),Be=d(c(Le),2),Ue=c(Be),Ne=d(Le,2),et=d(c(Ne),2),It=c(et),Ae=d(he,2),Ie=c(Ae),ze=d(Ae,2),Te=c(ze),Xe=d(c(Te));Je(Xe,21,()=>s(n).ingredients,zt,(Ve,He)=>{var lt=$g(),ct=c(lt),mt=c(ct),dt=c(mt),Pt=d(mt,2);{var Ht=rt=>{var ot=xg(),$t=d(N(ot)),at=c($t);M(()=>k(at,s(He).comment)),v(rt,ot)};P(Pt,rt=>{s(He).comment&&rt(Ht)})}var fe=d(ct),ge=c(fe),Ce=d(fe),ke=c(Ce),qe=d(Ce),Fe=c(qe),Ze=c(Fe),Ge=d(Fe,2);{var _t=rt=>{var ot=Pg(),$t=d(N(ot),2);Je($t,17,()=>s(He).allergens,zt,(at,Ct)=>{var tr=Eg(),Vr=c(tr);M(()=>k(Vr,s(Ct))),v(at,tr)}),v(rt,ot)};P(Ge,rt=>{s(He).allergens.length>0&&rt(_t)})}M(()=>{k(dt,s(He).uuid),k(ge,`${s(He).originalQuantity??""} ${s(He).originalUnit??""}`),k(ke,`${s(He).normalizedQuantity??""}
                          ${s(He).normalizedUnit??""}`),k(Ze,s(He).type)}),v(Ve,lt)});var it=d(ze,2);{var nt=Ve=>{var He=Ag(),lt=d(N(He),2),ct=c(lt),mt=c(ct);M(()=>k(mt,s(n).preparation)),v(Ve,He)};P(it,Ve=>{s(n).preparation&&Ve(nt)})}M(()=>{k(H,s(n).title),k(Ue,s(n).uuid),k(It,s(n).plate),k(Ie,`Ingrédients (${s(n).ingredients.length??""})`)}),v(se,be)},j=se=>{var be=kg();v(se,be)};P(ue,se=>{s(n)?se(B):se(j,!1)},!0)}v(R,X)};P(q,R=>{s(i)?R(ie):R(oe,!1)})}M(()=>{k(O,Mt.count),k(te,Mt.detailsLoadedCount),k(ce,Mt.availableTypes.length),k(C,`Affichage de ${s(o).length??""} / ${Mt.count??""} recettes`)}),Ke(de,()=>s(r),R=>b(r,R)),aa(we,()=>s(a),R=>b(a,R)),v(A,T)};P(w,A=>{Mt.error?A(x):A(S,!1)},!0)}v(p,m)};P(h,p=>{Mt.loading?p(_):p(g,!1)})}v(t,f),Y()}Ye(["click"]);function Mg(t,e){b(e,!0)}var Ng=y('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),Rg=y('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),Og=y('<div class="text-base-content/60"> </div>'),qg=y('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),jg=y('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),Lg=y('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),Bg=y('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main>',1),zg=y('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function Ug(t,e){K(e,!0);let r,a=L(null),n=L(!0),i=L(!1),o=L(!1);function l($,I,O){localStorage.setItem("appwrite-user-email",$),localStorage.setItem("appwrite-user-name",I)}async function u(){const $=xn();r=Yc($);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const E=await(await window.AppwriteClient.getAccount()).get();l(E.email,E.name),await Z.initialize(r,$)}catch(I){const O=I instanceof Error?I.message:"Erreur lors de l'initialisation";b(a,O,!0),console.error("[App] Erreur initialisation:",I)}finally{b(n,!1)}}ks(async()=>{await u()});async function f(){b(o,!1),b(n,!0),b(a,null),await u()}sc(()=>{Z.destroy()});async function h(){if(!(!r||s(i))){b(i,!0);try{const $=xn();await Z.forceReload(r,$)}catch($){console.error("[App] Erreur lors du rechargement forcé:",$)}finally{b(i,!1)}}}const _=G(()=>s(a)||Z.error),g=G(()=>s(n)||Z.loading);var p=zg(),m=N(p),w=c(m);ig(w,{});var x=d(w,2);{var S=$=>{Rp($)},A=$=>{var I=Bg(),O=N(I),E=c(O),U=c(E),te=d(c(U),2),V=c(te);{var W=R=>{var X=Ng();v(R,X)};P(V,R=>{Z.realtimeConnected&&R(W)})}var ce=d(V,2);{var _e=R=>{var X=Rg();v(R,X)};P(ce,R=>{Z.syncing&&R(_e)})}var Ee=d(ce,2);{var Q=R=>{var X=Og(),ue=c(X);M(B=>k(ue,`Maj: ${B??""}`),[()=>new Date(Z.lastSync).toLocaleTimeString()]),v(R,X)};P(Ee,R=>{Z.lastSync&&R(Q)})}var de=d(Ee,2);cg(de);var we=d(de,2);{var ne=R=>{var X=qg();let ue;X.__click=h;var B=c(X);Ed(B,{class:"h-4 w-4"}),M(j=>{ue=De(X,1,"btn btn-outline btn-sm",null,ue,j),X.disabled=s(i)||Z.loading},[()=>({loading:s(i)||Z.loading})]),v(R,X)};P(we,R=>{s(a)||R(ne)})}var ae=d(we,2);{var pe=R=>{var X=jg(),ue=c(X);ue.__click=[Mg,o];var B=c(ue);md(B,{class:"mr-2 h-4 w-4"}),v(R,X)};P(ae,R=>{s(a)&&R(pe)})}var Se=d(O,2),F=c(Se);{var J=R=>{Lp(R,{get message(){return s(_)}})},C=R=>{var X=ee(),ue=N(X);{var B=j=>{qp(j,{get message(){return s(_)}})};P(ue,j=>{s(_)&&j(B)},!0)}v(R,X)};P(F,R=>{s(a)?R(J):R(C,!1)})}var re=d(F,2);Cg(re,{});var q=d(re,2);{var ie=R=>{Mp(R,{})},oe=R=>{var X=ee(),ue=N(X);{var B=j=>{var se=Lg();v(j,se)};P(ue,j=>{!Z.loading&&!s(a)&&j(B)},!0)}v(R,X)};P(q,R=>{Z.enrichedProducts.length>0?R(ie):R(oe,!1)})}v($,I)};P(x,$=>{s(g)?$(S):$(A,!1)})}var T=d(m,2);{var D=$=>{Xp($,{onClose:()=>b(o,!1),onAuthSuccess:f})};P(T,$=>{s(o)&&$(D)})}v(t,p),Y()}Ye(["click"]);const vi=document.getElementById("app_products");if(!vi)throw new Error("Élément target non trouvé: #app_products");Ol(Ug,{target:vi});
