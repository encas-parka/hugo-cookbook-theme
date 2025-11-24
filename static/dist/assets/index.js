(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const Dn=!1;var ra=Array.isArray,fi=Array.prototype.indexOf,fs=Array.from,Xa=Object.defineProperty,er=Object.getOwnPropertyDescriptor,hi=Object.getOwnPropertyDescriptors,Mn=Object.prototype,pi=Array.prototype,hs=Object.getPrototypeOf,Ls=Object.isExtensible;function Tr(t){return typeof t=="function"}const oe=()=>{};function gi(t){for(var e=0;e<t.length;e++)t[e]()}function Nn(){var t,e,r=new Promise((a,n)=>{t=a,e=n});return{promise:r,resolve:t,reject:e}}function ya(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const r=[];for(const a of t)if(r.push(a),r.length===e)break;return r}const pt=2,ps=4,gs=8,or=16,Gt=32,wr=64,ms=128,$t=256,wa=512,nt=1024,_t=2048,ir=4096,Dt=8192,Sr=16384,ka=32768,lr=65536,Bs=1<<17,mi=1<<18,jr=1<<19,_i=1<<20,es=1<<21,Ea=1<<22,pr=1<<23,gr=Symbol("$state"),In=Symbol("legacy props"),bi=Symbol(""),Kr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Cn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function yi(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function wi(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Si(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function xi(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Pi(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function $i(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function ki(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ei(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ai(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ti(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Aa=1,Ta=2,On=4,Di=8,Mi=16,Ni=1,Ii=2,Ci=4,Oi=8,Ri=16,qi=1,ji=2,Li=4,Bi=1,zi=2,Xe=Symbol(),Ui="http://www.w3.org/1999/xhtml",Hi="http://www.w3.org/2000/svg",Wi="@attach";function Qi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Gi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Vi=!1;function Rn(t){return t===this.v}function qn(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Fi(t,e){return t!==e}function jn(t){return!qn(t,this.v)}let Lr=!1,Ki=!1;function Yi(){Lr=!0}const Ji=[];function Er(t,e=!1,r=!1){return ga(t,new Map,"",Ji,null,r)}function ga(t,e,r,a,n=null,i=!1){if(typeof t=="object"&&t!==null){var o=e.get(t);if(o!==void 0)return o;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(ra(t)){var l=Array(t.length);e.set(t,l),n!==null&&e.set(n,l);for(var d=0;d<t.length;d+=1){var f=t[d];d in t&&(l[d]=ga(f,e,r,a,null,i))}return l}if(hs(t)===Mn){l={},e.set(t,l),n!==null&&e.set(n,l);for(var h in t)l[h]=ga(t[h],e,r,a,null,i);return l}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function"&&!i)return ga(t.toJSON(),e,r,a,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}let Ke=null;function Nr(t){Ke=t}function K(t,e=!1,r){Ke={p:Ke,c:null,e:null,s:t,x:null,l:Lr&&!e?{s:null,u:null,$:[]}:null}}function Y(t){var e=Ke,r=e.e;if(r!==null){e.e=null;for(var a of r)Zn(a)}return Ke=e.p,{}}function Br(){return!Lr||Ke!==null&&Ke.l===null}let vr=[];function Ln(){var t=vr;vr=[],gi(t)}function rr(t){if(vr.length===0&&!Yr){var e=vr;queueMicrotask(()=>{e===vr&&Ln()})}vr.push(t)}function Zi(){for(;vr.length>0;)Ln()}const Xi=new WeakMap;function Bn(t){var e=Ie;if(e===null)return Oe.f|=pr,t;if((e.f&ka)===0){if((e.f&ms)===0)throw!e.parent&&t instanceof Error&&zn(t),t;e.b.error(t)}else Ir(t,e)}function Ir(t,e){for(;e!==null;){if((e.f&ms)!==0)try{e.b.error(t);return}catch(r){t=r}e=e.parent}throw t instanceof Error&&zn(t),t}function zn(t){const e=Xi.get(t);e&&(Xa(t,"message",{value:e.message}),Xa(t,"stack",{value:e.stack}))}const ua=new Set;let ze=null,ma=null,ts=new Set,Ct=[],Da=null,rs=!1,Yr=!1;class Pt{current=new Map;#e=new Map;#t=new Set;#r=0;#o=null;#u=[];#l=[];#c=[];#i=[];#d=[];#n=[];skipped_effects=new Set;process(e){Ct=[],ma=null;var r=Pt.apply(this);for(const i of e)this.#v(i);if(this.#r===0){this.#f();var a=this.#l,n=this.#c;this.#l=[],this.#c=[],this.#i=[],ma=this,ze=null,zs(a),zs(n),ma=null,this.#o?.resolve()}else this.#a(this.#l),this.#a(this.#c),this.#a(this.#i);r();for(const i of this.#u)Xr(i);this.#u=[]}#v(e){e.f^=nt;for(var r=e.first;r!==null;){var a=r.f,n=(a&(Gt|wr))!==0,i=n&&(a&nt)!==0,o=i||(a&Dt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){n?r.f^=nt:(a&ps)!==0?this.#c.push(r):(a&nt)===0&&((a&Ea)!==0&&r.b?.is_pending()?this.#u.push(r):Oa(r)&&((r.f&or)!==0&&this.#i.push(r),Xr(r)));var l=r.first;if(l!==null){r=l;continue}}var d=r.parent;for(r=r.next;r===null&&d!==null;)r=d.next,d=d.parent}}#a(e){for(const r of e)((r.f&_t)!==0?this.#d:this.#n).push(r),dt(r,nt);e.length=0}capture(e,r){this.#e.has(e)||this.#e.set(e,r),this.current.set(e,e.v)}activate(){ze=this}deactivate(){ze=null}flush(){if(Ct.length>0){if(this.activate(),Un(),ze!==null&&ze!==this)return}else this.#r===0&&this.#f();this.deactivate();for(const e of ts)if(ts.delete(e),e(),ze!==null)break}#f(){for(const e of this.#t)e();if(this.#t.clear(),ua.size>1){this.#e.clear();let e=!0;for(const r of ua){if(r===this){e=!1;continue}for(const[a,n]of this.current){if(r.current.has(a))if(e)r.current.set(a,n);else continue;Hn(a)}if(Ct.length>0){ze=r;const a=Pt.apply(r);for(const n of Ct)r.#v(n);Ct=[],a()}}ze=null}ua.delete(this)}increment(){this.#r+=1}decrement(){this.#r-=1;for(const e of this.#d)dt(e,_t),br(e);for(const e of this.#n)dt(e,ir),br(e);this.flush()}add_callback(e){this.#t.add(e)}settled(){return(this.#o??=Nn()).promise}static ensure(){if(ze===null){const e=ze=new Pt;ua.add(ze),Yr||Pt.enqueue(()=>{ze===e&&e.flush()})}return ze}static enqueue(e){rr(e)}static apply(e){return oe}}function el(t){var e=Yr;Yr=!0;try{for(var r;;){if(Zi(),Ct.length===0&&(ze?.flush(),Ct.length===0))return Da=null,r;Un()}}finally{Yr=e}}function Un(){var t=Dr;rs=!0;try{var e=0;for(Qs(!0);Ct.length>0;){var r=Pt.ensure();if(e++>1e3){var a,n;tl()}r.process(Ct),tr.clear()}}finally{rs=!1,Qs(t),Da=null}}function tl(){try{Pi()}catch(t){Ir(t,Da)}}let ur=null;function zs(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var a=t[r++];if((a.f&(Sr|Dt))===0&&Oa(a)&&(ur=[],Xr(a),a.deps===null&&a.first===null&&a.nodes_start===null&&(a.teardown===null&&a.ac===null?to(a):a.fn=null),ur?.length>0)){tr.clear();for(const n of ur)Xr(n);ur=[]}}ur=null}}function Hn(t){if(t.reactions!==null)for(const e of t.reactions){const r=e.f;(r&pt)!==0?Hn(e):(r&(Ea|or))!==0&&(dt(e,_t),br(e))}}function br(t){for(var e=Da=t;e.parent!==null;){e=e.parent;var r=e.f;if(rs&&e===Ie&&(r&or)!==0)return;if((r&(wr|Gt))!==0){if((r&nt)===0)return;e.f^=nt}}Ct.push(e)}function _s(t){let e=0,r=ar(0),a;return()=>{ml()&&(s(r),xs(()=>(e===0&&(a=Pr(()=>t(()=>Ot(r)))),e+=1,()=>{rr(()=>{e-=1,e===0&&(a?.(),a=void 0,Ot(r))})})))}}var rl=lr|jr|ms;function al(t,e,r){new sl(t,e,r)}class sl{parent;#e=!1;#t;#r=null;#o;#u;#l;#c=null;#i=null;#d=null;#n=null;#v=0;#a=0;#f=!1;#h=null;#p=()=>{this.#h&&Cr(this.#h,this.#v)};#S=_s(()=>(this.#h=ar(this.#v),()=>{this.#h=null}));constructor(e,r,a){this.#t=e,this.#o=r,this.#u=a,this.parent=Ie.b,this.#e=!!this.#o.pending,this.#l=Yt(()=>{Ie.b=this;{try{this.#c=rt(()=>a(this.#t))}catch(n){this.error(n)}this.#a>0?this.#g():this.#e=!1}},rl)}#x(){try{this.#c=rt(()=>this.#u(this.#t))}catch(e){this.error(e)}this.#e=!1}#_(){const e=this.#o.pending;e&&(this.#i=rt(()=>e(this.#t)),Pt.enqueue(()=>{this.#c=this.#s(()=>(Pt.ensure(),rt(()=>this.#u(this.#t)))),this.#a>0?this.#g():(Ht(this.#i,()=>{this.#i=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#o.pending}#s(e){var r=Ie,a=Oe,n=Ke;Rt(this.#l),ft(this.#l),Nr(this.#l.ctx);try{return e()}catch(i){return Bn(i),null}finally{Rt(r),ft(a),Nr(n)}}#g(){const e=this.#o.pending;this.#c!==null&&(this.#n=document.createDocumentFragment(),nl(this.#c,this.#n)),this.#i===null&&(this.#i=rt(()=>e(this.#t)))}#m(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(e);return}this.#a+=e,this.#a===0&&(this.#e=!1,this.#i&&Ht(this.#i,()=>{this.#i=null}),this.#n&&(this.#t.before(this.#n),this.#n=null),rr(()=>{Pt.ensure().flush()}))}update_pending_count(e){this.#m(e),this.#v+=e,ts.add(this.#p)}get_effect_pending(){return this.#S(),s(this.#h)}error(e){var r=this.#o.onerror;let a=this.#o.failed;if(this.#f||!r&&!a)throw e;this.#c&&(at(this.#c),this.#c=null),this.#i&&(at(this.#i),this.#i=null),this.#d&&(at(this.#d),this.#d=null);var n=!1,i=!1;const o=()=>{if(n){Gi();return}n=!0,i&&Ti(),Pt.ensure(),this.#v=0,this.#d!==null&&Ht(this.#d,()=>{this.#d=null}),this.#e=this.has_pending_snippet(),this.#c=this.#s(()=>(this.#f=!1,rt(()=>this.#u(this.#t)))),this.#a>0?this.#g():this.#e=!1};var l=Oe;try{ft(null),i=!0,r?.(e,o),i=!1}catch(d){Ir(d,this.#l&&this.#l.parent)}finally{ft(l)}a&&rr(()=>{this.#d=this.#s(()=>{this.#f=!0;try{return rt(()=>{a(this.#t,()=>e,()=>o)})}catch(d){return Ir(d,this.#l.parent),null}finally{this.#f=!1}})})}}function nl(t,e){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var n=r===a?null:aa(r);e.append(r),r=n}}function Wn(t,e,r){const a=Br()?Ma:bs;if(e.length===0){r(t.map(a));return}var n=ze,i=Ie,o=ol();Promise.all(e.map(l=>il(l))).then(l=>{o();try{r([...t.map(a),...l])}catch(d){(i.f&Sr)===0&&Ir(d,i)}n?.deactivate(),Qn()}).catch(l=>{Ir(l,i)})}function ol(){var t=Ie,e=Oe,r=Ke,a=ze;return function(){Rt(t),ft(e),Nr(r),a?.activate()}}function Qn(){Rt(null),ft(null),Nr(null)}function Ma(t){var e=pt|_t,r=Oe!==null&&(Oe.f&pt)!==0?Oe:null;return Ie===null||r!==null&&(r.f&$t)!==0?e|=$t:Ie.f|=jr,{ctx:Ke,deps:null,effects:null,equals:Rn,f:e,fn:t,reactions:null,rv:0,v:Xe,wv:0,parent:r??Ie,ac:null}}function il(t,e){let r=Ie;r===null&&yi();var a=r.b,n=void 0,i=ar(Xe),o=!Oe,l=new Map;return bl(()=>{var d=Nn();n=d.promise;try{Promise.resolve(t()).then(d.resolve,d.reject)}catch(g){d.reject(g)}var f=ze,h=a.is_pending();o&&(a.update_pending_count(1),h||(f.increment(),l.get(f)?.reject(Kr),l.set(f,d)));const m=(g,p=void 0)=>{h||f.activate(),p?p!==Kr&&(i.f|=pr,Cr(i,p)):((i.f&pr)!==0&&(i.f^=pr),Cr(i,g)),o&&(a.update_pending_count(-1),h||f.decrement()),Qn()};d.promise.then(m,g=>m(null,g||"unknown"))}),Ss(()=>{for(const d of l.values())d.reject(Kr)}),new Promise(d=>{function f(h){function m(){h===n?d(i):f(n)}h.then(m,m)}f(n)})}function G(t){const e=Ma(t);return so(e),e}function bs(t){const e=Ma(t);return e.equals=jn,e}function Gn(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)at(e[r])}}function ll(t){for(var e=t.parent;e!==null;){if((e.f&pt)===0)return e;e=e.parent}return null}function ys(t){var e,r=Ie;Rt(ll(t));try{Gn(t),e=lo(t)}finally{Rt(r)}return e}function Vn(t){var e=ys(t);if(t.equals(e)||(t.v=e,t.wv=oo()),!xr){var r=(Zt||(t.f&$t)!==0)&&t.deps!==null?ir:nt;dt(t,r)}}const tr=new Map;function ar(t,e){var r={f:0,v:t,reactions:null,equals:Rn,rv:0,wv:0};return r}function B(t,e){const r=ar(t);return so(r),r}function cl(t,e=!1,r=!0){const a=ar(t);return e||(a.equals=jn),Lr&&r&&Ke!==null&&Ke.l!==null&&(Ke.l.s??=[]).push(a),a}function b(t,e,r=!1){Oe!==null&&(!At||(Oe.f&Bs)!==0)&&Br()&&(Oe.f&(pt|or|Ea|Bs))!==0&&!Wt?.includes(t)&&Ai();let a=r?qe(e):e;return Cr(t,a)}function Cr(t,e){if(!t.equals(e)){var r=t.v;xr?tr.set(t,e):tr.set(t,r),t.v=e;var a=Pt.ensure();a.capture(t,r),(t.f&pt)!==0&&((t.f&_t)!==0&&ys(t),dt(t,(t.f&$t)===0?nt:ir)),t.wv=oo(),Fn(t,_t),Br()&&Ie!==null&&(Ie.f&nt)!==0&&(Ie.f&(Gt|wr))===0&&(xt===null?Sl([t]):xt.push(t))}return e}function Ot(t){b(t,t.v+1)}function Fn(t,e){var r=t.reactions;if(r!==null)for(var a=Br(),n=r.length,i=0;i<n;i++){var o=r[i],l=o.f;if(!(!a&&o===Ie)){var d=(l&_t)===0;d&&dt(o,e),(l&pt)!==0?Fn(o,ir):d&&((l&or)!==0&&ur!==null&&ur.push(o),br(o))}}}function qe(t){if(typeof t!="object"||t===null||gr in t)return t;const e=hs(t);if(e!==Mn&&e!==pi)return t;var r=new Map,a=ra(t),n=B(0),i=Qt,o=l=>{if(Qt===i)return l();var d=Oe,f=Qt;ft(null),Vs(i);var h=l();return ft(d),Vs(f),h};return a&&r.set("length",B(t.length)),new Proxy(t,{defineProperty(l,d,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&ki();var h=r.get(d);return h===void 0?h=o(()=>{var m=B(f.value);return r.set(d,m),m}):b(h,f.value,!0),!0},deleteProperty(l,d){var f=r.get(d);if(f===void 0){if(d in l){const h=o(()=>B(Xe));r.set(d,h),Ot(n)}}else b(f,Xe),Ot(n);return!0},get(l,d,f){if(d===gr)return t;var h=r.get(d),m=d in l;if(h===void 0&&(!m||er(l,d)?.writable)&&(h=o(()=>{var p=qe(m?l[d]:Xe),_=B(p);return _}),r.set(d,h)),h!==void 0){var g=s(h);return g===Xe?void 0:g}return Reflect.get(l,d,f)},getOwnPropertyDescriptor(l,d){var f=Reflect.getOwnPropertyDescriptor(l,d);if(f&&"value"in f){var h=r.get(d);h&&(f.value=s(h))}else if(f===void 0){var m=r.get(d),g=m?.v;if(m!==void 0&&g!==Xe)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return f},has(l,d){if(d===gr)return!0;var f=r.get(d),h=f!==void 0&&f.v!==Xe||Reflect.has(l,d);if(f!==void 0||Ie!==null&&(!h||er(l,d)?.writable)){f===void 0&&(f=o(()=>{var g=h?qe(l[d]):Xe,p=B(g);return p}),r.set(d,f));var m=s(f);if(m===Xe)return!1}return h},set(l,d,f,h){var m=r.get(d),g=d in l;if(a&&d==="length")for(var p=f;p<m.v;p+=1){var _=r.get(p+"");_!==void 0?b(_,Xe):p in l&&(_=o(()=>B(Xe)),r.set(p+"",_))}if(m===void 0)(!g||er(l,d)?.writable)&&(m=o(()=>B(void 0)),b(m,qe(f)),r.set(d,m));else{g=m.v!==Xe;var y=o(()=>qe(f));b(m,y)}var x=Reflect.getOwnPropertyDescriptor(l,d);if(x?.set&&x.set.call(h,f),!g){if(a&&typeof d=="string"){var S=r.get("length"),E=Number(d);Number.isInteger(E)&&E>=S.v&&b(S,E+1)}Ot(n)}return!0},ownKeys(l){s(n);var d=Reflect.ownKeys(l).filter(m=>{var g=r.get(m);return g===void 0||g.v!==Xe});for(var[f,h]of r)h.v!==Xe&&!(f in l)&&d.push(f);return d},setPrototypeOf(){Ei()}})}function Us(t){try{if(t!==null&&typeof t=="object"&&gr in t)return t[gr]}catch{}return t}function ul(t,e){return Object.is(Us(t),Us(e))}var Hs,Kn,Yn,Jn;function dl(){if(Hs===void 0){Hs=window,Kn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Yn=er(e,"firstChild").get,Jn=er(e,"nextSibling").get,Ls(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Ls(r)&&(r.__t=void 0)}}function Vt(t=""){return document.createTextNode(t)}function Or(t){return Yn.call(t)}function aa(t){return Jn.call(t)}function c(t,e){return Or(t)}function C(t,e=!1){{var r=Or(t);return r instanceof Comment&&r.data===""?aa(r):r}}function u(t,e=1,r=!1){let a=t;for(;e--;)a=aa(a);return a}function vl(t){t.textContent=""}function Na(){return!1}function fl(t,e){if(e){const r=document.body;t.autofocus=!0,rr(()=>{document.activeElement===r&&t.focus()})}}let Ws=!1;function hl(){Ws||(Ws=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function zr(t){var e=Oe,r=Ie;ft(null),Rt(null);try{return t()}finally{ft(e),Rt(r)}}function ws(t,e,r,a=r){t.addEventListener(e,()=>zr(r));const n=t.__on_r;n?t.__on_r=()=>{n(),a(!0)}:t.__on_r=()=>a(!0),hl()}function pl(t){Ie===null&&Oe===null&&xi(),Oe!==null&&(Oe.f&$t)!==0&&Ie===null&&Si(),xr&&wi()}function gl(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function Ft(t,e,r,a=!0){var n=Ie;n!==null&&(n.f&Dt)!==0&&(t|=Dt);var i={ctx:Ke,deps:null,nodes_start:null,nodes_end:null,f:t|_t,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Xr(i),i.f|=ka}catch(d){throw at(i),d}else e!==null&&br(i);if(a){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&jr)===0&&(o=o.first),o!==null&&(o.parent=n,n!==null&&gl(o,n),Oe!==null&&(Oe.f&pt)!==0&&(t&wr)===0)){var l=Oe;(l.effects??=[]).push(o)}}return i}function ml(){return Oe!==null&&!At}function Ss(t){const e=Ft(gs,null,!1);return dt(e,nt),e.teardown=t,e}function Kt(t){pl();var e=Ie.f,r=!Oe&&(e&Gt)!==0&&(e&ka)===0;if(r){var a=Ke;(a.e??=[]).push(t)}else return Zn(t)}function Zn(t){return Ft(ps|_i,t,!1)}function _l(t){Pt.ensure();const e=Ft(wr|jr,t,!0);return(r={})=>new Promise(a=>{r.outro?Ht(e,()=>{at(e),a(void 0)}):(at(e),a(void 0))})}function Ia(t){return Ft(ps,t,!1)}function bl(t){return Ft(Ea|jr,t,!0)}function xs(t,e=0){return Ft(gs|e,t,!0)}function I(t,e=[],r=[]){Wn(e,r,a=>{Ft(gs,()=>t(...a.map(s)),!0)})}function Yt(t,e=0){var r=Ft(or|e,t,!0);return r}function rt(t,e=!0){return Ft(Gt|jr,t,!0,e)}function Xn(t){var e=t.teardown;if(e!==null){const r=xr,a=Oe;Gs(!0),ft(null);try{e.call(null)}finally{Gs(r),ft(a)}}}function eo(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const n=r.ac;n!==null&&zr(()=>{n.abort(Kr)});var a=r.next;(r.f&wr)!==0?r.parent=null:at(r,e),r=a}}function yl(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&Gt)===0&&at(e),e=r}}function at(t,e=!0){var r=!1;(e||(t.f&mi)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(wl(t.nodes_start,t.nodes_end),r=!0),eo(t,e&&!r),Sa(t,0),dt(t,Sr);var a=t.transitions;if(a!==null)for(const i of a)i.stop();Xn(t);var n=t.parent;n!==null&&n.first!==null&&to(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function wl(t,e){for(;t!==null;){var r=t===e?null:aa(t);t.remove(),t=r}}function to(t){var e=t.parent,r=t.prev,a=t.next;r!==null&&(r.next=a),a!==null&&(a.prev=r),e!==null&&(e.first===t&&(e.first=a),e.last===t&&(e.last=r))}function Ht(t,e){var r=[];Ps(t,r,!0),ro(r,()=>{at(t),e&&e()})}function ro(t,e){var r=t.length;if(r>0){var a=()=>--r||e();for(var n of t)n.out(a)}else e()}function Ps(t,e,r){if((t.f&Dt)===0){if(t.f^=Dt,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&e.push(o);for(var a=t.first;a!==null;){var n=a.next,i=(a.f&lr)!==0||(a.f&Gt)!==0;Ps(a,e,i?r:!1),a=n}}}function Ca(t){ao(t,!0)}function ao(t,e){if((t.f&Dt)!==0){t.f^=Dt,(t.f&nt)===0&&(dt(t,_t),br(t));for(var r=t.first;r!==null;){var a=r.next,n=(r.f&lr)!==0||(r.f&Gt)!==0;ao(r,n?e:!1),r=a}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let Dr=!1;function Qs(t){Dr=t}let xr=!1;function Gs(t){xr=t}let Oe=null,At=!1;function ft(t){Oe=t}let Ie=null;function Rt(t){Ie=t}let Wt=null;function so(t){Oe!==null&&(Wt===null?Wt=[t]:Wt.push(t))}let ut=null,mt=0,xt=null;function Sl(t){xt=t}let no=1,Zr=0,Qt=Zr;function Vs(t){Qt=t}let Zt=!1;function oo(){return++no}function Oa(t){var e=t.f;if((e&_t)!==0)return!0;if((e&ir)!==0){var r=t.deps,a=(e&$t)!==0;if(r!==null){var n,i,o=(e&wa)!==0,l=a&&Ie!==null&&!Zt,d=r.length;if((o||l)&&(Ie===null||(Ie.f&Sr)===0)){var f=t,h=f.parent;for(n=0;n<d;n++)i=r[n],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=wa),l&&h!==null&&(h.f&$t)===0&&(f.f^=$t)}for(n=0;n<d;n++)if(i=r[n],Oa(i)&&Vn(i),i.wv>t.wv)return!0}(!a||Ie!==null&&!Zt)&&dt(t,nt)}return!1}function io(t,e,r=!0){var a=t.reactions;if(a!==null&&!Wt?.includes(t))for(var n=0;n<a.length;n++){var i=a[n];(i.f&pt)!==0?io(i,e,!1):e===i&&(r?dt(i,_t):(i.f&nt)!==0&&dt(i,ir),br(i))}}function lo(t){var e=ut,r=mt,a=xt,n=Oe,i=Zt,o=Wt,l=Ke,d=At,f=Qt,h=t.f;ut=null,mt=0,xt=null,Zt=(h&$t)!==0&&(At||!Dr||Oe===null),Oe=(h&(Gt|wr))===0?t:null,Wt=null,Nr(t.ctx),At=!1,Qt=++Zr,t.ac!==null&&(zr(()=>{t.ac.abort(Kr)}),t.ac=null);try{t.f|=es;var m=t.fn,g=m(),p=t.deps;if(ut!==null){var _;if(Sa(t,mt),p!==null&&mt>0)for(p.length=mt+ut.length,_=0;_<ut.length;_++)p[mt+_]=ut[_];else t.deps=p=ut;if(!Zt||(h&pt)!==0&&t.reactions!==null)for(_=mt;_<p.length;_++)(p[_].reactions??=[]).push(t)}else p!==null&&mt<p.length&&(Sa(t,mt),p.length=mt);if(Br()&&xt!==null&&!At&&p!==null&&(t.f&(pt|ir|_t))===0)for(_=0;_<xt.length;_++)io(xt[_],t);return n!==null&&n!==t&&(Zr++,xt!==null&&(a===null?a=xt:a.push(...xt))),(t.f&pr)!==0&&(t.f^=pr),g}catch(y){return Bn(y)}finally{t.f^=es,ut=e,mt=r,xt=a,Oe=n,Zt=i,Wt=o,Nr(l),At=d,Qt=f}}function xl(t,e){let r=e.reactions;if(r!==null){var a=fi.call(r,t);if(a!==-1){var n=r.length-1;n===0?r=e.reactions=null:(r[a]=r[n],r.pop())}}r===null&&(e.f&pt)!==0&&(ut===null||!ut.includes(e))&&(dt(e,ir),(e.f&($t|wa))===0&&(e.f^=wa),Gn(e),Sa(e,0))}function Sa(t,e){var r=t.deps;if(r!==null)for(var a=e;a<r.length;a++)xl(t,r[a])}function Xr(t){var e=t.f;if((e&Sr)===0){dt(t,nt);var r=Ie,a=Dr;Ie=t,Dr=!0;try{(e&or)!==0?yl(t):eo(t),Xn(t);var n=lo(t);t.teardown=typeof n=="function"?n:null,t.wv=no;var i;Dn&&Ki&&(t.f&_t)!==0&&t.deps}finally{Dr=a,Ie=r}}}async function Pl(){await Promise.resolve(),el()}function s(t){var e=t.f,r=(e&pt)!==0;if(Oe!==null&&!At){var a=Ie!==null&&(Ie.f&Sr)!==0;if(!a&&!Wt?.includes(t)){var n=Oe.deps;if((Oe.f&es)!==0)t.rv<Zr&&(t.rv=Zr,ut===null&&n!==null&&n[mt]===t?mt++:ut===null?ut=[t]:(!Zt||!ut.includes(t))&&ut.push(t));else{(Oe.deps??=[]).push(t);var i=t.reactions;i===null?t.reactions=[Oe]:i.includes(Oe)||i.push(Oe)}}}else if(r&&t.deps===null&&t.effects===null){var o=t,l=o.parent;l!==null&&(l.f&$t)===0&&(o.f^=$t)}if(xr){if(tr.has(t))return tr.get(t);if(r){o=t;var d=o.v;return((o.f&nt)===0&&o.reactions!==null||co(o))&&(d=ys(o)),tr.set(o,d),d}}else r&&(o=t,Oa(o)&&Vn(o));if((t.f&pr)!==0)throw t.v;return t.v}function co(t){if(t.v===Xe)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(tr.has(e)||(e.f&pt)!==0&&co(e))return!0;return!1}function Pr(t){var e=At;try{return At=!0,t()}finally{At=e}}const $l=-7169;function dt(t,e){t.f=t.f&$l|e}function kl(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const El=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Al(t){return El.includes(t)}const Tl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Dl(t){return t=t.toLowerCase(),Tl[t]??t}const Ml=["touchstart","touchmove"];function Nl(t){return Ml.includes(t)}const uo=new Set,as=new Set;function $s(t,e,r,a={}){function n(i){if(a.capture||Fr.call(e,i),!i.cancelBubble)return zr(()=>r?.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?rr(()=>{e.addEventListener(t,n,a)}):e.addEventListener(t,n,a),n}function ss(t,e,r,a={}){var n=$s(e,t,r,a);return()=>{t.removeEventListener(e,n,a)}}function Mr(t,e,r,a,n){var i={capture:a,passive:n},o=$s(t,e,r,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Ss(()=>{e.removeEventListener(t,o,i)})}function Ge(t){for(var e=0;e<t.length;e++)uo.add(t[e]);for(var r of as)r(t)}let Fs=null;function Fr(t){var e=this,r=e.ownerDocument,a=t.type,n=t.composedPath?.()||[],i=n[0]||t.target;Fs=t;var o=0,l=Fs===t&&t.__root;if(l){var d=n.indexOf(l);if(d!==-1&&(e===document||e===window)){t.__root=e;return}var f=n.indexOf(e);if(f===-1)return;d<=f&&(o=d)}if(i=n[o]||t.target,i!==e){Xa(t,"currentTarget",{configurable:!0,get(){return i||r}});var h=Oe,m=Ie;ft(null),Rt(null);try{for(var g,p=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var y=i["__"+a];if(y!=null&&(!i.disabled||t.target===i))if(ra(y)){var[x,...S]=y;x.apply(i,[t,...S])}else y.call(i,t)}catch(E){g?p.push(E):g=E}if(t.cancelBubble||_===e||_===null)break;i=_}if(g){for(let E of p)queueMicrotask(()=>{throw E});throw g}}finally{t.__root=e,delete t.currentTarget,ft(h),Rt(m)}}}function vo(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function Rr(t,e){var r=Ie;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function w(t,e){var r=(e&Bi)!==0,a=(e&zi)!==0,n,i=!t.startsWith("<!>");return()=>{n===void 0&&(n=vo(i?t:"<!>"+t),r||(n=Or(n)));var o=a||Kn?document.importNode(n,!0):n.cloneNode(!0);if(r){var l=Or(o),d=o.lastChild;Rr(l,d)}else Rr(o,o);return o}}function Il(t,e,r="svg"){var a=!t.startsWith("<!>"),n=`<${r}>${a?t:"<!>"+t}</${r}>`,i;return()=>{if(!i){var o=vo(n),l=Or(o);i=Or(l)}var d=i.cloneNode(!0);return Rr(d,d),d}}function Cl(t,e){return Il(t,e,"svg")}function ht(t=""){{var e=Vt(t+"");return Rr(e,e),e}}function X(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Vt();return t.append(e,r),Rr(e,r),t}function v(t,e){t!==null&&t.before(e)}let xa=!0;function Ks(t){xa=t}function N(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??=t.nodeValue)&&(t.__t=r,t.nodeValue=r+"")}function Ol(t,e){return Rl(t,e)}const Ar=new Map;function Rl(t,{target:e,anchor:r,props:a={},events:n,context:i,intro:o=!0}){dl();var l=new Set,d=m=>{for(var g=0;g<m.length;g++){var p=m[g];if(!l.has(p)){l.add(p);var _=Nl(p);e.addEventListener(p,Fr,{passive:_});var y=Ar.get(p);y===void 0?(document.addEventListener(p,Fr,{passive:_}),Ar.set(p,1)):Ar.set(p,y+1)}}};d(fs(uo)),as.add(d);var f=void 0,h=_l(()=>{var m=r??e.appendChild(Vt());return al(m,{pending:()=>{}},g=>{if(i){K({});var p=Ke;p.c=i}n&&(a.$$events=n),xa=o,f=t(g,a)||{},xa=!0,i&&Y()}),()=>{for(var g of l){e.removeEventListener(g,Fr);var p=Ar.get(g);--p===0?(document.removeEventListener(g,Fr),Ar.delete(g)):Ar.set(g,p)}as.delete(d),m!==r&&m.parentNode?.removeChild(m)}});return ql.set(f,h),f}let ql=new WeakMap;function $(t,e,r=!1){var a=t,n=null,i=null,o=Xe,l=r?lr:0,d=!1;const f=(p,_=!0)=>{d=!0,g(_,p)};var h=null;function m(){h!==null&&(h.lastChild.remove(),a.before(h),h=null);var p=o?n:i,_=o?i:n;p&&Ca(p),_&&Ht(_,()=>{o?i=null:n=null})}const g=(p,_)=>{if(o!==(o=p)){var y=Na(),x=a;if(y&&(h=document.createDocumentFragment(),h.append(x=Vt())),o?n??=_&&rt(()=>_(x)):i??=_&&rt(()=>_(x)),y){var S=ze,E=o?n:i,A=o?i:n;E&&S.skipped_effects.delete(E),A&&S.skipped_effects.add(A),S.add_callback(m)}else m()}};Yt(()=>{d=!1,e(f),d||g(null,null)},l)}function jl(t,e,r){var a=t,n=Xe,i,o,l=null,d=Br()?Fi:qn;function f(){i&&Ht(i),l!==null&&(l.lastChild.remove(),a.before(l),l=null),i=o}Yt(()=>{if(d(n,n=e())){var h=a,m=Na();m&&(l=document.createDocumentFragment(),l.append(h=Vt())),o=rt(()=>r(h)),m?ze.add_callback(f):f()}})}function yr(t,e){return e}function Ll(t,e,r){for(var a=t.items,n=[],i=e.length,o=0;o<i;o++)Ps(e[o].e,n,!0);var l=i>0&&n.length===0&&r!==null;if(l){var d=r.parentNode;vl(d),d.append(r),a.clear(),It(t,e[0].prev,e[i-1].next)}ro(n,()=>{for(var f=0;f<i;f++){var h=e[f];l||(a.delete(h.k),It(t,h.prev,h.next)),at(h.e,!l)}})}function et(t,e,r,a,n,i=null){var o=t,l={flags:e,items:new Map,first:null},d=(e&On)!==0;if(d){var f=t;o=f.appendChild(Vt())}var h=null,m=!1,g=new Map,p=bs(()=>{var S=r();return ra(S)?S:S==null?[]:fs(S)}),_,y;function x(){Bl(y,_,l,g,o,n,e,a,r),i!==null&&(_.length===0?h?Ca(h):h=rt(()=>i(o)):h!==null&&Ht(h,()=>{h=null}))}Yt(()=>{y??=Ie,_=s(p);var S=_.length;if(!(m&&S===0)){m=S===0;var E,A,D,k;if(Na()){var T=new Set,O=ze;for(A=0;A<S;A+=1){D=_[A],k=a(D,A);var P=l.items.get(k)??g.get(k);P?(e&(Aa|Ta))!==0&&fo(P,D,A,e):(E=ho(null,l,null,null,D,k,A,n,e,r,!0),g.set(k,E)),T.add(k)}for(const[L,te]of l.items)T.has(L)||O.skipped_effects.add(te.e);O.add_callback(x)}else x();s(p)}})}function Bl(t,e,r,a,n,i,o,l,d){var f=(o&Di)!==0,h=(o&(Aa|Ta))!==0,m=e.length,g=r.items,p=r.first,_=p,y,x=null,S,E=[],A=[],D,k,T,O;if(f)for(O=0;O<m;O+=1)D=e[O],k=l(D,O),T=g.get(k),T!==void 0&&(T.a?.measure(),(S??=new Set).add(T));for(O=0;O<m;O+=1){if(D=e[O],k=l(D,O),T=g.get(k),T===void 0){var P=a.get(k);if(P!==void 0){a.delete(k),g.set(k,P);var L=x?x.next:_;It(r,x,P),It(r,P,L),Ga(P,L,n),x=P}else{var te=_?_.e.nodes_start:n;x=ho(te,r,x,x===null?r.first:x.next,D,k,O,i,o,d)}g.set(k,x),E=[],A=[],_=x.next;continue}if(h&&fo(T,D,O,o),(T.e.f&Dt)!==0&&(Ca(T.e),f&&(T.a?.unfix(),(S??=new Set).delete(T))),T!==_){if(y!==void 0&&y.has(T)){if(E.length<A.length){var V=A[0],U;x=V.prev;var le=E[0],ge=E[E.length-1];for(U=0;U<E.length;U+=1)Ga(E[U],V,n);for(U=0;U<A.length;U+=1)y.delete(A[U]);It(r,le.prev,ge.next),It(r,x,le),It(r,ge,V),_=V,x=ge,O-=1,E=[],A=[]}else y.delete(T),Ga(T,_,n),It(r,T.prev,T.next),It(r,T,x===null?r.first:x.next),It(r,x,T),x=T;continue}for(E=[],A=[];_!==null&&_.k!==k;)(_.e.f&Dt)===0&&(y??=new Set).add(_),A.push(_),_=_.next;if(_===null)continue;T=_}E.push(T),x=T,_=T.next}if(_!==null||y!==void 0){for(var Pe=y===void 0?[]:fs(y);_!==null;)(_.e.f&Dt)===0&&Pe.push(_),_=_.next;var H=Pe.length;if(H>0){var ce=(o&On)!==0&&m===0?n:null;if(f){for(O=0;O<H;O+=1)Pe[O].a?.measure();for(O=0;O<H;O+=1)Pe[O].a?.fix()}Ll(r,Pe,ce)}}f&&rr(()=>{if(S!==void 0)for(T of S)T.a?.apply()}),t.first=r.first&&r.first.e,t.last=x&&x.e;for(var ye of a.values())at(ye.e);a.clear()}function fo(t,e,r,a){(a&Aa)!==0&&Cr(t.v,e),(a&Ta)!==0?Cr(t.i,r):t.i=r}function ho(t,e,r,a,n,i,o,l,d,f,h){var m=(d&Aa)!==0,g=(d&Mi)===0,p=m?g?cl(n,!1,!1):ar(n):n,_=(d&Ta)===0?o:ar(o),y={i:_,v:p,k:i,a:null,e:null,prev:r,next:a};try{if(t===null){var x=document.createDocumentFragment();x.append(t=Vt())}return y.e=rt(()=>l(t,p,_,f),Vi),y.e.prev=r&&r.e,y.e.next=a&&a.e,r===null?h||(e.first=y):(r.next=y,r.e.next=y.e),a!==null&&(a.prev=y,a.e.prev=y.e),y}finally{}}function Ga(t,e,r){for(var a=t.next?t.next.e.nodes_start:r,n=e?e.e.nodes_start:r,i=t.e.nodes_start;i!==null&&i!==a;){var o=aa(i);n.before(i),i=o}}function It(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function fe(t,e,...r){var a=t,n=oe,i;Yt(()=>{n!==(n=e())&&(i&&(at(i),i=null),i=rt(()=>n(a,...r)))},lr)}function mr(t,e,r){var a=t,n,i,o=null,l=null;function d(){i&&(Ht(i),i=null),o&&(o.lastChild.remove(),a.before(o),o=null),i=l,l=null}Yt(()=>{if(n!==(n=e())){var f=Na();if(n){var h=a;f&&(o=document.createDocumentFragment(),o.append(h=Vt()),i&&ze.skipped_effects.add(i)),l=rt(()=>r(h,n))}f?ze.add_callback(d):d()}},lr)}function zl(t,e,r,a,n,i){var o,l,d=null,f=t,h;Yt(()=>{const m=e()||null;var g=Hi;m!==o&&(h&&(m===null?Ht(h,()=>{h=null,l=null}):m===l?Ca(h):(at(h),Ks(!1))),m&&m!==l&&(h=rt(()=>{if(d=document.createElementNS(g,m),Rr(d,d),a){var p=d.appendChild(Vt());a(d,p)}Ie.nodes_end=d,f.before(d)})),o=m,o&&(l=o),Ks(!0))},lr)}function Ul(t,e){var r=void 0,a;Yt(()=>{r!==(r=e())&&(a&&(at(a),a=null),r&&(a=rt(()=>{Ia(()=>r(t))})))})}function po(t){var e,r,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(r=po(t[e]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);return a}function Hl(){for(var t,e,r=0,a="",n=arguments.length;r<n;r++)(t=arguments[r])&&(e=po(t))&&(a&&(a+=" "),a+=e);return a}function Wl(t){return typeof t=="object"?Hl(t):t??""}const Ys=[...` 	
\r\f \v\uFEFF`];function Ql(t,e,r){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),r){for(var n in r)if(r[n])a=a?a+" "+n:n;else if(a.length)for(var i=n.length,o=0;(o=a.indexOf(n,o))>=0;){var l=o+i;(o===0||Ys.includes(a[o-1]))&&(l===a.length||Ys.includes(a[l]))?a=(o===0?"":a.substring(0,o))+a.substring(l+1):o=l}}return a===""?null:a}function Js(t,e=!1){var r=e?" !important;":";",a="";for(var n in t){var i=t[n];i!=null&&i!==""&&(a+=" "+n+": "+i+r)}return a}function Va(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Gl(t,e){if(e){var r="",a,n;if(Array.isArray(e)?(a=e[0],n=e[1]):a=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,d=[];a&&d.push(...Object.keys(a).map(Va)),n&&d.push(...Object.keys(n).map(Va));var f=0,h=-1;const y=t.length;for(var m=0;m<y;m++){var g=t[m];if(l?g==="/"&&t[m-1]==="*"&&(l=!1):i?i===g&&(i=!1):g==="/"&&t[m+1]==="*"?l=!0:g==='"'||g==="'"?i=g:g==="("?o++:g===")"&&o--,!l&&i===!1&&o===0){if(g===":"&&h===-1)h=m;else if(g===";"||m===y-1){if(h!==-1){var p=Va(t.substring(f,h).trim());if(!d.includes(p)){g!==";"&&m++;var _=t.substring(f,m).trim();r+=" "+_+";"}}f=m+1,h=-1}}}}return a&&(r+=Js(a)),n&&(r+=Js(n,!0)),r=r.trim(),r===""?null:r}return t==null?null:String(t)}function Te(t,e,r,a,n,i){var o=t.__className;if(o!==r||o===void 0){var l=Ql(r,a,i);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t.__className=r}else if(i&&n!==i)for(var d in i){var f=!!i[d];(n==null||f!==!!n[d])&&t.classList.toggle(d,f)}return i}function Fa(t,e={},r,a){for(var n in r){var i=r[n];e[n]!==i&&(r[n]==null?t.style.removeProperty(n):t.style.setProperty(n,i,a))}}function go(t,e,r,a){var n=t.__style;if(n!==e){var i=Gl(e,a);i==null?t.removeAttribute("style"):t.style.cssText=i,t.__style=e}else a&&(Array.isArray(a)?(Fa(t,r?.[0],a[0]),Fa(t,r?.[1],a[1],"important")):Fa(t,r,a));return a}function Pa(t,e,r=!1){if(t.multiple){if(e==null)return;if(!ra(e))return Qi();for(var a of t.options)a.selected=e.includes(Jr(a));return}for(a of t.options){var n=Jr(a);if(ul(n,e)){a.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function mo(t){var e=new MutationObserver(()=>{Pa(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ss(()=>{e.disconnect()})}function $a(t,e,r=e){var a=!0;ws(t,"change",n=>{var i=n?"[selected]":":checked",o;if(t.multiple)o=[].map.call(t.querySelectorAll(i),Jr);else{var l=t.querySelector(i)??t.querySelector("option:not([disabled])");o=l&&Jr(l)}r(o)}),Ia(()=>{var n=e();if(Pa(t,n,a),a&&n===void 0){var i=t.querySelector(":checked");i!==null&&(n=Jr(i),r(n))}t.__value=n,a=!1}),mo(t)}function Jr(t){return"__value"in t?t.__value:t.value}const Qr=Symbol("class"),Gr=Symbol("style"),_o=Symbol("is custom element"),bo=Symbol("is html");function Vl(t,e){var r=ks(t);r.value===(r.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e??"")}function Fl(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function sr(t,e,r,a){var n=ks(t);n[e]!==(n[e]=r)&&(e==="loading"&&(t[bi]=r),r==null?t.removeAttribute(e):typeof r!="string"&&yo(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function Kl(t,e,r,a,n=!1,i=!1){var o=ks(t),l=o[_o],d=!o[bo],f=e||{},h=t.tagName==="OPTION";for(var m in e)m in r||(r[m]=null);r.class?r.class=Wl(r.class):r[Qr]&&(r.class=null),r[Gr]&&(r.style??=null);var g=yo(t);for(const D in r){let k=r[D];if(h&&D==="value"&&k==null){t.value=t.__value="",f[D]=k;continue}if(D==="class"){var p=t.namespaceURI==="http://www.w3.org/1999/xhtml";Te(t,p,k,a,e?.[Qr],r[Qr]),f[D]=k,f[Qr]=r[Qr];continue}if(D==="style"){go(t,k,e?.[Gr],r[Gr]),f[D]=k,f[Gr]=r[Gr];continue}var _=f[D];if(!(k===_&&!(k===void 0&&t.hasAttribute(D)))){f[D]=k;var y=D[0]+D[1];if(y!=="$$")if(y==="on"){const T={},O="$$"+D;let P=D.slice(2);var x=Al(P);if(kl(P)&&(P=P.slice(0,-7),T.capture=!0),!x&&_){if(k!=null)continue;t.removeEventListener(P,f[O],T),f[O]=null}if(k!=null)if(x)t[`__${P}`]=k,Ge([P]);else{let L=function(te){f[D].call(this,te)};var A=L;f[O]=$s(P,t,L,T)}else x&&(t[`__${P}`]=void 0)}else if(D==="style")sr(t,D,k);else if(D==="autofocus")fl(t,!!k);else if(!l&&(D==="__value"||D==="value"&&k!=null))t.value=t.__value=k;else if(D==="selected"&&h)Fl(t,k);else{var S=D;d||(S=Dl(S));var E=S==="defaultValue"||S==="defaultChecked";if(k==null&&!l&&!E)if(o[D]=null,S==="value"||S==="checked"){let T=t;const O=e===void 0;if(S==="value"){let P=T.defaultValue;T.removeAttribute(S),T.defaultValue=P,T.value=T.__value=O?P:null}else{let P=T.defaultChecked;T.removeAttribute(S),T.defaultChecked=P,T.checked=O?P:!1}}else t.removeAttribute(D);else E||g.includes(S)&&(l||typeof k!="string")?(t[S]=k,S in o&&(o[S]=Xe)):typeof k!="function"&&sr(t,S,k)}}}return f}function ns(t,e,r=[],a=[],n,i=!1,o=!1){Wn(r,a,l=>{var d=void 0,f={},h=t.nodeName==="SELECT",m=!1;if(Yt(()=>{var p=e(...l.map(s)),_=Kl(t,d,p,n,i,o);m&&h&&"value"in p&&Pa(t,p.value);for(let x of Object.getOwnPropertySymbols(f))p[x]||at(f[x]);for(let x of Object.getOwnPropertySymbols(p)){var y=p[x];x.description===Wi&&(!d||y!==d[x])&&(f[x]&&at(f[x]),f[x]=rt(()=>Ul(t,()=>y))),_[x]=y}d=_}),h){var g=t;Ia(()=>{Pa(g,d.value,!0),mo(g)})}m=!0})}function ks(t){return t.__attributes??={[_o]:t.nodeName.includes("-"),[bo]:t.namespaceURI===Ui}}var Zs=new Map;function yo(t){var e=t.getAttribute("is")||t.nodeName,r=Zs.get(e);if(r)return r;Zs.set(e,r=[]);for(var a,n=t,i=Element.prototype;i!==n;){a=hi(n);for(var o in a)a[o].set&&r.push(o);n=hs(n)}return r}const Yl=()=>performance.now(),Ut={tick:t=>requestAnimationFrame(t),now:()=>Yl(),tasks:new Set};function wo(){const t=Ut.now();Ut.tasks.forEach(e=>{e.c(t)||(Ut.tasks.delete(e),e.f())}),Ut.tasks.size!==0&&Ut.tick(wo)}function Jl(t){let e;return Ut.tasks.size===0&&Ut.tick(wo),{promise:new Promise(r=>{Ut.tasks.add(e={c:t,f:r})}),abort(){Ut.tasks.delete(e)}}}function da(t,e){zr(()=>{t.dispatchEvent(new CustomEvent(e))})}function Zl(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Xs(t){const e={},r=t.split(";");for(const a of r){const[n,i]=a.split(":");if(!n||i===void 0)break;const o=Zl(n.trim());e[o]=i.trim()}return e}const Xl=t=>t;function So(t,e,r,a){var n=(t&qi)!==0,i=(t&ji)!==0,o=n&&i,l=(t&Li)!==0,d=o?"both":n?"in":"out",f,h=e.inert,m=e.style.overflow,g,p;function _(){return zr(()=>f??=r()(e,a?.()??{},{direction:d}))}var y={is_global:l,in(){if(e.inert=h,!n){p?.abort(),p?.reset?.();return}i||g?.abort(),da(e,"introstart"),g=os(e,_(),p,1,()=>{da(e,"introend"),g?.abort(),g=f=void 0,e.style.overflow=m})},out(A){if(!i){A?.(),f=void 0;return}e.inert=!0,da(e,"outrostart"),p=os(e,_(),g,0,()=>{da(e,"outroend"),A?.()})},stop:()=>{g?.abort(),p?.abort()}},x=Ie;if((x.transitions??=[]).push(y),n&&xa){var S=l;if(!S){for(var E=x.parent;E&&(E.f&lr)!==0;)for(;(E=E.parent)&&(E.f&or)===0;);S=!E||(E.f&ka)!==0}S&&Ia(()=>{Pr(()=>y.in())})}}function os(t,e,r,a,n){var i=a===1;if(Tr(e)){var o,l=!1;return rr(()=>{if(!l){var x=e({direction:i?"in":"out"});o=os(t,x,r,a,n)}}),{abort:()=>{l=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(r?.deactivate(),!e?.duration)return n(),{abort:oe,deactivate:oe,reset:oe,t:()=>a};const{delay:d=0,css:f,tick:h,easing:m=Xl}=e;var g=[];if(i&&r===void 0&&(h&&h(0,1),f)){var p=Xs(f(0,1));g.push(p,p)}var _=()=>1-a,y=t.animate(g,{duration:d,fill:"forwards"});return y.onfinish=()=>{y.cancel();var x=r?.t()??1-a;r?.abort();var S=a-x,E=e.duration*Math.abs(S),A=[];if(E>0){var D=!1;if(f)for(var k=Math.ceil(E/16.666666666666668),T=0;T<=k;T+=1){var O=x+S*m(T/k),P=Xs(f(O,1-O));A.push(P),D||=P.overflow==="hidden"}D&&(t.style.overflow="hidden"),_=()=>{var L=y.currentTime;return x+S*m(L/E)},h&&Jl(()=>{if(y.playState!=="running")return!1;var L=_();return h(L,1-L),!0})}y=t.animate(A,{duration:E,fill:"forwards"}),y.onfinish=()=>{_=()=>a,h?.(a,1-a),n()}},{abort:()=>{y&&(y.cancel(),y.effect=null,y.onfinish=oe)},deactivate:()=>{n=oe},reset:()=>{a===0&&h?.(1,0)},t:()=>_()}}function Qe(t,e,r=e){var a=new WeakSet;ws(t,"input",async n=>{var i=n?t.defaultValue:t.value;if(i=Ka(t)?Ya(i):i,r(i),ze!==null&&a.add(ze),await Pl(),i!==(i=e())){var o=t.selectionStart,l=t.selectionEnd;t.value=i??"",l!==null&&(t.selectionStart=o,t.selectionEnd=Math.min(l,t.value.length))}}),Pr(e)==null&&t.value&&(r(Ka(t)?Ya(t.value):t.value),ze!==null&&a.add(ze)),xs(()=>{var n=e();if(t===document.activeElement){var i=ma??ze;if(a.has(i))return}Ka(t)&&n===Ya(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function is(t,e,r=e){ws(t,"change",a=>{var n=a?t.defaultChecked:t.checked;r(n)}),Pr(e)==null&&r(t.checked),xs(()=>{var a=e();t.checked=!!a})}function Ka(t){var e=t.type;return e==="number"||e==="range"}function Ya(t){return t===""?null:+t}let va=!1;function ec(t){var e=va;try{return va=!1,[t(),va]}finally{va=e}}const tc={get(t,e){if(!t.exclude.includes(e))return t.props[e]},set(t,e){return!1},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function _e(t,e,r){return new Proxy({props:t,exclude:e},tc)}const rc={get(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Tr(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a)return a[e]}},set(t,e,r){let a=t.props.length;for(;a--;){let n=t.props[a];Tr(n)&&(n=n());const i=er(n,e);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Tr(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a){const n=er(a,e);return n&&!n.configurable&&(n.configurable=!0),n}}},has(t,e){if(e===gr||e===In)return!1;for(let r of t.props)if(Tr(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(t){const e=[];for(let r of t.props)if(Tr(r)&&(r=r()),!!r){for(const a in r)e.includes(a)||e.push(a);for(const a of Object.getOwnPropertySymbols(r))e.includes(a)||e.push(a)}return e}};function Se(...t){return new Proxy({props:t},rc)}function he(t,e,r,a){var n=!Lr||(r&Ii)!==0,i=(r&Oi)!==0,o=(r&Ri)!==0,l=a,d=!0,f=()=>(d&&(d=!1,l=o?Pr(a):a),l),h;if(i){var m=gr in t||In in t;h=er(t,e)?.set??(m&&e in t?A=>t[e]=A:void 0)}var g,p=!1;i?[g,p]=ec(()=>t[e]):g=t[e],g===void 0&&a!==void 0&&(g=f(),h&&(n&&$i(),h(g)));var _;if(n?_=()=>{var A=t[e];return A===void 0?f():(d=!0,A)}:_=()=>{var A=t[e];return A!==void 0&&(l=void 0),A===void 0?l:A},n&&(r&Ci)===0)return _;if(h){var y=t.$$legacy;return(function(A,D){return arguments.length>0?((!n||!D||y||p)&&h(D?_():A),A):_()})}var x=!1,S=((r&Ni)!==0?Ma:bs)(()=>(x=!1,_()));i&&s(S);var E=Ie;return(function(A,D){if(arguments.length>0){const k=D?s(S):n&&i?qe(A):A;return b(S,k),x=!0,l!==void 0&&(l=k),A}return xr&&x||(E.f&Sr)!==0?S.v:s(S)})}function xo(t){Ke===null&&Cn(),Lr&&Ke.l!==null?sc(Ke).m.push(t):Kt(()=>{const e=Pr(t);if(typeof e=="function")return e})}function ac(t){Ke===null&&Cn(),xo(()=>()=>Pr(t))}function sc(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const nc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(nc);const oc="modulepreload",ic=function(t){return"/"+t},en={},ls=function(e,r,a){let n=Promise.resolve();if(r&&r.length>0){let f=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};var o=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),d=l?.nonce||l?.getAttribute("nonce");n=f(r.map(h=>{if(h=ic(h),h in en)return;en[h]=!0;const m=h.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const p=document.createElement("link");if(p.rel=m?"stylesheet":oc,m||(p.as="script"),p.crossOrigin="",p.href=h,d&&p.setAttribute("nonce",d),document.head.appendChild(p),m)return new Promise((_,y)=>{p.addEventListener("load",_),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(l){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=l,window.dispatchEvent(d),!d.defaultPrevented)throw l}return n.then(l=>{for(const d of l||[])d.status==="rejected"&&i(d.reason);return e().catch(i)})};class tn extends Map{#e=new Map;#t=B(0);#r=B(0);#o=Qt||-1;constructor(e){if(super(),e){for(var[r,a]of e)super.set(r,a);this.#r.v=super.size}}#u(e){return Qt===this.#o?B(e):ar(e)}has(e){var r=this.#e,a=r.get(e);if(a===void 0){var n=super.get(e);if(n!==void 0)a=this.#u(0),r.set(e,a);else return s(this.#t),!1}return s(a),!0}forEach(e,r){this.#l(),super.forEach(e,r)}get(e){var r=this.#e,a=r.get(e);if(a===void 0){var n=super.get(e);if(n!==void 0)a=this.#u(0),r.set(e,a);else{s(this.#t);return}}return s(a),super.get(e)}set(e,r){var a=this.#e,n=a.get(e),i=super.get(e),o=super.set(e,r),l=this.#t;if(n===void 0)n=this.#u(0),a.set(e,n),b(this.#r,super.size),Ot(l);else if(i!==r){Ot(n);var d=l.reactions===null?null:new Set(l.reactions),f=d===null||!n.reactions?.every(h=>d.has(h));f&&Ot(l)}return o}delete(e){var r=this.#e,a=r.get(e),n=super.delete(e);return a!==void 0&&(r.delete(e),b(this.#r,super.size),b(a,-1),Ot(this.#t)),n}clear(){if(super.size!==0){super.clear();var e=this.#e;b(this.#r,0);for(var r of e.values())b(r,-1);Ot(this.#t),e.clear()}}#l(){s(this.#t);var e=this.#e;if(this.#r.v!==e.size){for(var r of super.keys())if(!e.has(r)){var a=this.#u(0);e.set(r,a)}}for([,a]of this.#e)s(a)}keys(){return s(this.#t),super.keys()}values(){return this.#l(),super.values()}entries(){return this.#l(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#r),super.size}}class lc{#e;#t;constructor(e,r){this.#e=e,this.#t=_s(r)}get current(){return this.#t(),this.#e()}}const cc=/\(.+\)/,uc=new Set(["all","print","screen","and","or","not","only"]);class dc extends lc{constructor(e,r){let a=cc.test(e)||e.split(/[\s,]+/).some(i=>uc.has(i.trim()))?e:`(${e})`;const n=window.matchMedia(a);super(()=>n.matches,i=>ss(n,"change",i))}}const vc=typeof window<"u"?window:void 0;function fc(t){let e=t.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}class hc{#e;#t;constructor(e={}){const{window:r=vc,document:a=r?.document}=e;r!==void 0&&(this.#e=a,this.#t=_s(n=>{const i=ss(r,"focusin",n),o=ss(r,"focusout",n);return()=>{i(),o()}}))}get current(){return this.#t?.(),this.#e?fc(this.#e):null}}new hc;function pc(t){return typeof t=="function"}function gc(t,e){if(pc(t)){const a=t();return a===void 0?e:a}return t===void 0?e:t}function mc(t,e){let r=B(null);const a=G(()=>gc(e,250));function n(...i){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let o,l;const d=new Promise((f,h)=>{o=f,l=h});b(r,{timeout:null,runner:null,promise:d,resolve:o,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const o=s(r);b(r,null);try{o.resolve(await t.apply(this,i))}catch(l){o.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(a)),s(r).promise}return n.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),b(r,null))},n.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(n,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),n}function Tt(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(e){return console.warn("[ProductsStore] Erreur parsing JSON:",e),null}}function sa(t){return t?.length?t.filter(e=>e.quantity!=null&&e.unit).map(e=>({q:typeof e.quantity=="number"?e.quantity:parseFloat(e.quantity),u:e.unit})).filter(e=>!isNaN(e.q)):[]}function na(t){if(!t?.length)return[];const e=new Map;return t.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const a=e.get(r.u)||0;e.set(r.u,a+r.q)}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function oa(t,e){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!e?.length){const l=t.map(d=>Xt(d.q.toString(),d.u)).join(" et ");return{numeric:t,display:l}}const r=new Map,a=new Map;t.forEach(l=>{const d=parseFloat(l.q);isNaN(d)||r.set(l.u,(r.get(l.u)||0)+d)}),e.forEach(l=>{a.set(l.u,(a.get(l.u)||0)+l.q)});const n=[],i=[];r.forEach((l,d)=>{const f=a.get(d)||0,h=l-f;h>0&&(n.push({q:h,u:d}),i.push(Xt(h.toString(),d)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:n,display:o}}function ot(t){return t?.length?t.map(e=>Xt(e.q.toString(),e.u)).join(" et "):"-"}function Xt(t,e){const r=parseFloat(t);if(isNaN(r))return`${t} ${e}`;if((e==="gr."||e==="ml")&&r>=1e3){const a=r/1e3,n=e==="gr."?"kg":"l.";let o=(Math.round(a*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${n}`}if(!["gr.","ml","kg","l."].includes(e)){let n=(Math.round(r*10)/10).toString();return n.endsWith(",0")&&(n=n.slice(0,-2)),`${n} ${e}`}return`${r} ${e}`}function Ra(t){if(!t?.length)return[];const e=new Map;return t.forEach(({q:r,u:a})=>{if(typeof r=="number"&&!isNaN(r)){const n=e.get(a)||0;e.set(a,n+r)}}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function Po(t){return t?Object.values(t).some(e=>e.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function $o(t){if(!t)return[];const e=[];return Object.entries(t).forEach(([r,a])=>{a.recipes?.forEach(n=>{e.push({...n,date:r,dateTimeService:r})})}),e}function qa(t){if(!t)return[];const e=Object.values(t).flatMap(r=>r.totalConsolidated);return Ra(e)}function Es(t,e){const r=new Map,a=new Map;t.forEach(({q:o,u:l})=>{r.set(l,(r.get(l)||0)+o)}),e.forEach(({q:o,u:l})=>{a.set(l,(a.get(l)||0)+o)});const n=[],i=new Set([...r.keys(),...a.keys()]);for(const o of i){const l=r.get(o)||0,d=a.get(o)||0,f=l-d;Math.abs(f)>.001&&n.push({q:f,u:o})}return n}function ja(t){if(!t?.length)return"Équilibré";const e=t.filter(a=>a.q>0),r=t.filter(a=>a.q<0);if(e.length>0&&r.length>0){const a=e.map(i=>Xt(i.q.toString(),i.u)).join(" et "),n=r.map(i=>Xt(Math.abs(i.q).toString(),i.u)).join(" et ");return`${a} disponibles, ${n} manquant${r.length>1?"s":""}`}else return e.length>0?e.map(a=>"+"+Xt(a.q.toString(),a.u)).join(" et ")+" disponibles":r.length>0?r.map(a=>Xt(Math.abs(a.q).toString(),a.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function ko(t,e){if(e.searchQuery.trim()){const r=e.searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(e.selectedStores.length>0&&(!t.storeInfo?.storeName||!e.selectedStores.includes(t.storeInfo.storeName))||e.selectedWho.length>0&&(!t.who||!t.who.some(r=>e.selectedWho.includes(r)))||e.selectedProductTypes.length>0&&(!t.productType||!e.selectedProductTypes.includes(t.productType))||e.selectedTemperatures.length>0&&!(e.selectedTemperatures.includes("frais")&&t.pFrais||e.selectedTemperatures.includes("surgele")&&t.pSurgel))}function _c(t){return t.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const bc=Object.freeze(Object.defineProperty({__proto__:null,aggregateByUnit:Ra,calculateAndFormatMissing:oa,calculateGlobalTotal:qa,calculateTotalQuantityArray:na,formatSingleQuantity:Xt,formatStockResult:ja,formatTotalQuantity:ot,generateRecipesWithDates:$o,hasConversions:Po,matchesFilters:ko,safeJsonParse:Tt,slugify:_c,subtractQuantities:Es,transformPurchasesToNumericQuantity:sa},Symbol.toStringTag,{value:"Module"}));function rn(t){return{...t,products:t.products?.map(e=>typeof e=="string"?e:e.$id)||[],mainId:t.mainId}}function yc(t){const e=Tt(t.specs)??null,r=na(sa(t.purchases??[]));let a=[];e?.quantity&&(a=[e.quantity]);const{numeric:n,display:i}=oa(a,r),o=Tt(t.stockReel)??null,l=ot(r),d=t.store?Tt(t.store):null,f=o?`${o.quantity} ${o.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid||"",productName:t.productName,productType:t.productType||"none",pFrais:e?.pFrais??!1,pSurgel:e?.pSurgel??!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,totalNeededRaw:[],status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,specs:t.specs,byDate:{},storeInfo:d,stockParsed:o,specsParsed:e,totalNeededArray:a,totalPurchasesArray:r,missingQuantityArray:n,stockOrTotalPurchases:f,displayTotalNeeded:ot(a),displayTotalPurchases:l,displayMissingQuantity:i,totalNeededOverrideParsed:Tt(t.totalNeededOverride),displayTotalOverride:(()=>{const h=Tt(t.totalNeededOverride);return h?ot([h.totalOverride]):""})()}}function fa(t,e){const r=t.purchases??e.purchases,a=t.specs??e.specs,n=a?Tt(a):e.specsParsed,i=na(sa(r??[])),o=ot(i);let l=e.totalNeededArray;!e.productHugoUuid&&n?.quantity&&(l=[n.quantity]);const{numeric:d,display:f}=oa(l,i),h=t.stockReel??e.stockReel,m=h?Tt(h):e.stockParsed,g=t.store??e.store,p=g?Tt(g):e.storeInfo,_=m?`${m.quantity} ${m.unit}`:o;return t.purchases===void 0&&e.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${e.purchases.length} purchases pour ${e.productName}`),{...e,$updatedAt:t.$updatedAt,productName:t.productName??e.productName,productType:t.productType??e.productType,isSynced:t.isSynced??e.isSynced,mainId:t.mainId??e.mainId,pFrais:n?.pFrais??e.pFrais,pSurgel:n?.pSurgel??e.pSurgel,status:t.status??e.status,who:t.who??e.who,store:g,stockReel:h,specs:a,purchases:r,previousNames:t.previousNames??e.previousNames,isMerged:t.isMerged??e.isMerged,mergedFrom:t.mergedFrom??e.mergedFrom,mergeDate:t.mergeDate??e.mergeDate,mergeReason:t.mergeReason??e.mergeReason,mergedInto:t.mergedInto??e.mergedInto,totalNeededOverride:t.totalNeededOverride??e.totalNeededOverride,storeInfo:p,stockParsed:m,specsParsed:n,totalNeededArray:l,totalPurchasesArray:i,missingQuantityArray:d,stockOrTotalPurchases:_,displayTotalPurchases:o,displayMissingQuantity:f,displayTotalNeeded:ot(l),totalNeededOverrideParsed:Tt(t.totalNeededOverride??e.totalNeededOverride),displayTotalOverride:(()=>{const y=Tt(t.totalNeededOverride??e.totalNeededOverride);return y?ot([y.totalOverride]):""})()}}class wc{#e=B(qe([]));MAX_TOASTS=3;get toasts(){return[...s(this.#e)].sort((e,r)=>r.timestamp-e.timestamp)}create(e){const r=e.id||crypto.randomUUID(),a={id:r,state:e.state,message:e.message,timestamp:Date.now(),source:e.source||"user",timeoutId:void 0,details:e.details,actions:e.actions||[]};return this.#t(a),r}update(e,r){const a=s(this.#e).findIndex(i=>i.id===e);if(a===-1)return;const n=s(this.#e)[a];n.timeoutId&&clearTimeout(n.timeoutId),s(this.#e)[a]={...n,state:r.state||n.state,message:r.message||n.message,source:r.source||n.source,actions:r.actions||n.actions},this.#r(s(this.#e)[a])}async track(e,r){const a=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const n=await e;return this.update(a,{state:"success",message:r.success||"Opération réussie"}),n}catch(n){throw this.update(a,{state:"error",message:r.error||"Erreur lors de l'opération"}),n}}dismiss(e){const r=s(this.#e).findIndex(n=>n.id===e);if(r===-1)return;const a=s(this.#e)[r];a.timeoutId&&clearTimeout(a.timeoutId),s(this.#e).splice(r,1)}dismissAll(){s(this.#e).forEach(e=>{e.timeoutId&&clearTimeout(e.timeoutId)}),b(this.#e,[],!0)}#t(e){if(e.source==="user"){const r=s(this.#e).findIndex(a=>a.source==="user");r>=0?s(this.#e)[r]=e:s(this.#e).push(e)}else{const r=s(this.#e).filter(a=>a.source!=="user");if(r.length>=2){const a=r[0];this.dismiss(a.id)}s(this.#e).push(e)}s(this.#e).length>this.MAX_TOASTS&&s(this.#e).splice(0,s(this.#e).length-this.MAX_TOASTS),this.#r(e)}#r(e){if(e.state!=="success"&&e.state!=="info")return;const r=e.source==="realtime-other"?4e3:2e3;e.timeoutId=setTimeout(()=>{this.dismiss(e.id)},r)}success(e,r){return this.create({state:"success",message:e,details:r})}error(e,r){return this.create({state:"error",message:e,details:r})}warning(e,r){return this.create({state:"warning",message:e,source:r?.source||"system",details:r?.details,actions:r?.actions})}info(e,r){return this.create({state:"info",message:e,source:r?.source||"system",details:r?.details})}loading(e,r){return this.create({state:"loading",message:e,details:r})}}const He=new wc;function Sc(t,e,r,a){if(typeof e=="function"?t!==e||!a:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?a:r==="a"?a.call(t):a?a.value:e.get(t)}class q{constructor(e,r,a){this.method=e,this.attribute=r,a!==void 0&&(Array.isArray(a)?this.values=a:this.values=[a])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}q.equal=(t,e)=>new q("equal",t,e).toString();q.notEqual=(t,e)=>new q("notEqual",t,e).toString();q.lessThan=(t,e)=>new q("lessThan",t,e).toString();q.lessThanEqual=(t,e)=>new q("lessThanEqual",t,e).toString();q.greaterThan=(t,e)=>new q("greaterThan",t,e).toString();q.greaterThanEqual=(t,e)=>new q("greaterThanEqual",t,e).toString();q.isNull=t=>new q("isNull",t).toString();q.isNotNull=t=>new q("isNotNull",t).toString();q.between=(t,e,r)=>new q("between",t,[e,r]).toString();q.startsWith=(t,e)=>new q("startsWith",t,e).toString();q.endsWith=(t,e)=>new q("endsWith",t,e).toString();q.select=t=>new q("select",void 0,t).toString();q.search=(t,e)=>new q("search",t,e).toString();q.orderDesc=t=>new q("orderDesc",t).toString();q.orderAsc=t=>new q("orderAsc",t).toString();q.orderRandom=()=>new q("orderRandom").toString();q.cursorAfter=t=>new q("cursorAfter",void 0,t).toString();q.cursorBefore=t=>new q("cursorBefore",void 0,t).toString();q.limit=t=>new q("limit",void 0,t).toString();q.offset=t=>new q("offset",void 0,t).toString();q.contains=(t,e)=>new q("contains",t,e).toString();q.notContains=(t,e)=>new q("notContains",t,e).toString();q.notSearch=(t,e)=>new q("notSearch",t,e).toString();q.notBetween=(t,e,r)=>new q("notBetween",t,[e,r]).toString();q.notStartsWith=(t,e)=>new q("notStartsWith",t,e).toString();q.notEndsWith=(t,e)=>new q("notEndsWith",t,e).toString();q.createdBefore=t=>q.lessThan("$createdAt",t);q.createdAfter=t=>q.greaterThan("$createdAt",t);q.createdBetween=(t,e)=>q.between("$createdAt",t,e);q.updatedBefore=t=>q.lessThan("$updatedAt",t);q.updatedAfter=t=>q.greaterThan("$updatedAt",t);q.updatedBetween=(t,e)=>q.between("$updatedAt",t,e);q.or=t=>new q("or",void 0,t.map(e=>JSON.parse(e))).toString();q.and=t=>new q("and",void 0,t.map(e=>JSON.parse(e))).toString();q.distanceEqual=(t,e,r,a=!0)=>new q("distanceEqual",t,[[e,r,a]]).toString();q.distanceNotEqual=(t,e,r,a=!0)=>new q("distanceNotEqual",t,[[e,r,a]]).toString();q.distanceGreaterThan=(t,e,r,a=!0)=>new q("distanceGreaterThan",t,[[e,r,a]]).toString();q.distanceLessThan=(t,e,r,a=!0)=>new q("distanceLessThan",t,[[e,r,a]]).toString();q.intersects=(t,e)=>new q("intersects",t,[e]).toString();q.notIntersects=(t,e)=>new q("notIntersects",t,[e]).toString();q.crosses=(t,e)=>new q("crosses",t,[e]).toString();q.notCrosses=(t,e)=>new q("notCrosses",t,[e]).toString();q.overlaps=(t,e)=>new q("overlaps",t,[e]).toString();q.notOverlaps=(t,e)=>new q("notOverlaps",t,[e]).toString();q.touches=(t,e)=>new q("touches",t,[e]).toString();q.notTouches=(t,e)=>new q("notTouches",t,[e]).toString();var an;(function(t){t[t.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",t[t.POLICY_VIOLATION=1008]="POLICY_VIOLATION",t[t.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(an||(an={}));var Eo,Ao;class nr{static custom(e){return e}static unique(e=7){const r=Sc(nr,Eo,"m",Ao).call(nr);let a="";for(let n=0;n<e;n++){const i=Math.floor(Math.random()*16).toString(16);a+=i}return r+a}}Eo=nr,Ao=function(){const e=new Date,r=Math.floor(e.getTime()/1e3),a=e.getMilliseconds();return r.toString(16)+a.toString(16).padStart(5,"0")};var sn;(function(t){t.Equal="equal",t.NotEqual="notEqual",t.GreaterThan="greaterThan",t.GreaterThanEqual="greaterThanEqual",t.LessThan="lessThan",t.LessThanEqual="lessThanEqual",t.Contains="contains",t.IsNull="isNull",t.IsNotNull="isNotNull"})(sn||(sn={}));var nn;(function(t){t.Totp="totp"})(nn||(nn={}));var on;(function(t){t.Email="email",t.Phone="phone",t.Totp="totp",t.Recoverycode="recoverycode"})(on||(on={}));var ln;(function(t){t.Amazon="amazon",t.Apple="apple",t.Auth0="auth0",t.Authentik="authentik",t.Autodesk="autodesk",t.Bitbucket="bitbucket",t.Bitly="bitly",t.Box="box",t.Dailymotion="dailymotion",t.Discord="discord",t.Disqus="disqus",t.Dropbox="dropbox",t.Etsy="etsy",t.Facebook="facebook",t.Figma="figma",t.Github="github",t.Gitlab="gitlab",t.Google="google",t.Linkedin="linkedin",t.Microsoft="microsoft",t.Notion="notion",t.Oidc="oidc",t.Okta="okta",t.Paypal="paypal",t.PaypalSandbox="paypalSandbox",t.Podio="podio",t.Salesforce="salesforce",t.Slack="slack",t.Spotify="spotify",t.Stripe="stripe",t.Tradeshift="tradeshift",t.TradeshiftBox="tradeshiftBox",t.Twitch="twitch",t.Wordpress="wordpress",t.Yahoo="yahoo",t.Yammer="yammer",t.Yandex="yandex",t.Zoho="zoho",t.Zoom="zoom",t.Mock="mock"})(ln||(ln={}));var cn;(function(t){t.AvantBrowser="aa",t.AndroidWebViewBeta="an",t.GoogleChrome="ch",t.GoogleChromeIOS="ci",t.GoogleChromeMobile="cm",t.Chromium="cr",t.MozillaFirefox="ff",t.Safari="sf",t.MobileSafari="mf",t.MicrosoftEdge="ps",t.MicrosoftEdgeIOS="oi",t.OperaMini="om",t.Opera="op",t.OperaNext="on"})(cn||(cn={}));var un;(function(t){t.AmericanExpress="amex",t.Argencard="argencard",t.Cabal="cabal",t.Cencosud="cencosud",t.DinersClub="diners",t.Discover="discover",t.Elo="elo",t.Hipercard="hipercard",t.JCB="jcb",t.Mastercard="mastercard",t.Naranja="naranja",t.TarjetaShopping="targeta-shopping",t.UnionPay="unionpay",t.Visa="visa",t.MIR="mir",t.Maestro="maestro",t.Rupay="rupay"})(un||(un={}));var dn;(function(t){t.Afghanistan="af",t.Angola="ao",t.Albania="al",t.Andorra="ad",t.UnitedArabEmirates="ae",t.Argentina="ar",t.Armenia="am",t.AntiguaAndBarbuda="ag",t.Australia="au",t.Austria="at",t.Azerbaijan="az",t.Burundi="bi",t.Belgium="be",t.Benin="bj",t.BurkinaFaso="bf",t.Bangladesh="bd",t.Bulgaria="bg",t.Bahrain="bh",t.Bahamas="bs",t.BosniaAndHerzegovina="ba",t.Belarus="by",t.Belize="bz",t.Bolivia="bo",t.Brazil="br",t.Barbados="bb",t.BruneiDarussalam="bn",t.Bhutan="bt",t.Botswana="bw",t.CentralAfricanRepublic="cf",t.Canada="ca",t.Switzerland="ch",t.Chile="cl",t.China="cn",t.CoteDIvoire="ci",t.Cameroon="cm",t.DemocraticRepublicOfTheCongo="cd",t.RepublicOfTheCongo="cg",t.Colombia="co",t.Comoros="km",t.CapeVerde="cv",t.CostaRica="cr",t.Cuba="cu",t.Cyprus="cy",t.CzechRepublic="cz",t.Germany="de",t.Djibouti="dj",t.Dominica="dm",t.Denmark="dk",t.DominicanRepublic="do",t.Algeria="dz",t.Ecuador="ec",t.Egypt="eg",t.Eritrea="er",t.Spain="es",t.Estonia="ee",t.Ethiopia="et",t.Finland="fi",t.Fiji="fj",t.France="fr",t.MicronesiaFederatedStatesOf="fm",t.Gabon="ga",t.UnitedKingdom="gb",t.Georgia="ge",t.Ghana="gh",t.Guinea="gn",t.Gambia="gm",t.GuineaBissau="gw",t.EquatorialGuinea="gq",t.Greece="gr",t.Grenada="gd",t.Guatemala="gt",t.Guyana="gy",t.Honduras="hn",t.Croatia="hr",t.Haiti="ht",t.Hungary="hu",t.Indonesia="id",t.India="in",t.Ireland="ie",t.IranIslamicRepublicOf="ir",t.Iraq="iq",t.Iceland="is",t.Israel="il",t.Italy="it",t.Jamaica="jm",t.Jordan="jo",t.Japan="jp",t.Kazakhstan="kz",t.Kenya="ke",t.Kyrgyzstan="kg",t.Cambodia="kh",t.Kiribati="ki",t.SaintKittsAndNevis="kn",t.SouthKorea="kr",t.Kuwait="kw",t.LaoPeopleSDemocraticRepublic="la",t.Lebanon="lb",t.Liberia="lr",t.Libya="ly",t.SaintLucia="lc",t.Liechtenstein="li",t.SriLanka="lk",t.Lesotho="ls",t.Lithuania="lt",t.Luxembourg="lu",t.Latvia="lv",t.Morocco="ma",t.Monaco="mc",t.Moldova="md",t.Madagascar="mg",t.Maldives="mv",t.Mexico="mx",t.MarshallIslands="mh",t.NorthMacedonia="mk",t.Mali="ml",t.Malta="mt",t.Myanmar="mm",t.Montenegro="me",t.Mongolia="mn",t.Mozambique="mz",t.Mauritania="mr",t.Mauritius="mu",t.Malawi="mw",t.Malaysia="my",t.Namibia="na",t.Niger="ne",t.Nigeria="ng",t.Nicaragua="ni",t.Netherlands="nl",t.Norway="no",t.Nepal="np",t.Nauru="nr",t.NewZealand="nz",t.Oman="om",t.Pakistan="pk",t.Panama="pa",t.Peru="pe",t.Philippines="ph",t.Palau="pw",t.PapuaNewGuinea="pg",t.Poland="pl",t.FrenchPolynesia="pf",t.NorthKorea="kp",t.Portugal="pt",t.Paraguay="py",t.Qatar="qa",t.Romania="ro",t.Russia="ru",t.Rwanda="rw",t.SaudiArabia="sa",t.Sudan="sd",t.Senegal="sn",t.Singapore="sg",t.SolomonIslands="sb",t.SierraLeone="sl",t.ElSalvador="sv",t.SanMarino="sm",t.Somalia="so",t.Serbia="rs",t.SouthSudan="ss",t.SaoTomeAndPrincipe="st",t.Suriname="sr",t.Slovakia="sk",t.Slovenia="si",t.Sweden="se",t.Eswatini="sz",t.Seychelles="sc",t.Syria="sy",t.Chad="td",t.Togo="tg",t.Thailand="th",t.Tajikistan="tj",t.Turkmenistan="tm",t.TimorLeste="tl",t.Tonga="to",t.TrinidadAndTobago="tt",t.Tunisia="tn",t.Turkey="tr",t.Tuvalu="tv",t.Tanzania="tz",t.Uganda="ug",t.Ukraine="ua",t.Uruguay="uy",t.UnitedStates="us",t.Uzbekistan="uz",t.VaticanCity="va",t.SaintVincentAndTheGrenadines="vc",t.Venezuela="ve",t.Vietnam="vn",t.Vanuatu="vu",t.Samoa="ws",t.Yemen="ye",t.SouthAfrica="za",t.Zambia="zm",t.Zimbabwe="zw"})(dn||(dn={}));var vn;(function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE",t.OPTIONS="OPTIONS",t.HEAD="HEAD"})(vn||(vn={}));var fn;(function(t){t.Center="center",t.Topleft="top-left",t.Top="top",t.Topright="top-right",t.Left="left",t.Right="right",t.Bottomleft="bottom-left",t.Bottom="bottom",t.Bottomright="bottom-right"})(fn||(fn={}));var hn;(function(t){t.Jpg="jpg",t.Jpeg="jpeg",t.Png="png",t.Webp="webp",t.Heic="heic",t.Avif="avif",t.Gif="gif"})(hn||(hn={}));var pn;(function(t){t.Http="http",t.Schedule="schedule",t.Event="event"})(pn||(pn={}));var gn;(function(t){t.Waiting="waiting",t.Processing="processing",t.Completed="completed",t.Failed="failed",t.Scheduled="scheduled"})(gn||(gn={}));function To(t,e){const{operationName:r,maxAutoRetries:a=1,autoRetryDelay:n=1e3}=e;let i=1,o=null;return new Promise((l,d)=>{const f=async(h=!1)=>{try{h?o=He.loading(`Tentative de ${r}...`):i>1?o?He.update(o,{state:"loading",message:`${r} (Tentative ${i}/${a+1})...`}):o=He.loading(`${r} (Tentative ${i}/${a+1})...`):o=He.loading(`${r} en cours...`);const m=await t();o&&He.update(o,{state:"success",message:e.successMessage||`${r} réussie !`,action:void 0}),e.onSuccess?.(m),l(m)}catch(m){console.error(`[RetryUtils] Erreur ${r} (Tentative ${i}):`,m);const g=m instanceof Error?m.message:"Erreur inconnue";if(i<=a){i++,o&&He.update(o,{state:"loading",message:`Erreur. Nouvelle tentative dans ${n/1e3}s...`}),setTimeout(()=>f(!1),n);return}o&&He.update(o,{state:"error",message:`Échec ${r}: ${g}`,action:{label:"Réessayer",onClick:()=>{He.dismiss(o),f(!0)}}}),e.onError?.(m)}};f(!1)})}function Do(t,e){return{$id:t.$id,mainId:t.mainId,productHugoUuid:t.productHugoUuid,productName:t.productName,...e}}async function gt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getDatabases(),e=window.AppwriteClient.getConfig();return{databases:t,config:e}}async function xc(t){const a=await(await window.AppwriteClient.getAccount()).get();return{...t,updatedBy:a.name}}function fr(){return localStorage.getItem("appwrite-user-name")||""}async function Pc(t,e,r=100){try{const{databases:a,config:n}=await gt(),i=await a.listDocuments(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,[q.greaterThan("$updatedAt",e),q.equal("mainId",t),q.limit(r),q.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(a){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",a),[]}}async function Mo(t,e){const{lastSync:r,limit:a=100}=e;try{const{databases:n,config:i}=await gt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await n.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[q.equal("mainId",t),q.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),q.limit(a)])).documents;const o=await n.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[q.greaterThan("$updatedAt",r),q.equal("mainId",t),q.limit(a),q.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(n){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${t}:`,n);const i=n instanceof Error?n.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function $r(t,e,r=!0){const{databases:a,config:n}=await gt();return r&&(e.updatedBy=fr()),await a.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,t,e)}async function zt(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${t} sur Appwrite...`);const n=Do(a,e),i=await xc(n),{databases:o,config:l}=await gt(),d=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,t,i);return console.log(`[Appwrite Interactions] Produit ${t} créé avec succès`),d}catch(a){console.error(`[Appwrite Interactions] Erreur création produit ${t}:`,a);const n=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${n}`)}}async function No(t,e){try{const{databases:r,config:a}=await gt(),{slugify:n}=await ls(async()=>{const{slugify:h}=await Promise.resolve().then(()=>bc);return{slugify:h}},void 0),o=`${n(t.productName).substring(0,10)}_${Date.now().toString(36)}`,l={quantity:t.quantity,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1},d={productHugoUuid:null,productName:t.productName,productType:t.productType||"Autre",store:t.store?JSON.stringify(t.store):null,who:t.who||[],isSynced:!0,mainId:e,status:"active",updatedBy:fr(),stockReel:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,specs:JSON.stringify(l)};console.log(`[Appwrite Interactions] Création produit manuel ${o}...`,d);const f=await r.createDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,o,d);return console.log(`[Appwrite Interactions] Produit manuel ${o} créé avec succès`),f}catch(r){throw console.error("[Appwrite Interactions] Erreur création produit manuel:",r),r}}async function Io(t,e){if(!t)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=e?JSON.stringify(e):null,a=await $r(t,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${t}, nouvelle valeur:`,a.store),a}async function Co(t,e){return $r(t,{who:e})}async function cs(t,e){return $r(t,{stockReel:e})}async function As(t,e,r=!1){if(!t)throw new Error("ID du produit requis pour la mise à jour de l'override");const a=JSON.stringify(e),n=await $r(t,{totalNeededOverride:a},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${t}:`,e),n}async function Oo(t,e=!0){if(!t)throw new Error("ID du produit requis pour la suppression de l'override");const r=await $r(t,{totalNeededOverride:null},e);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${t}`),r}async function Ro(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour mise à jour batch`);const n={};return e.stockReel!==void 0&&(n.stockReel=e.stockReel),e.who!==void 0&&(n.who=e.who),e.storeInfo!==void 0&&(n.store=JSON.stringify(e.storeInfo)),a.isSynced?(console.log(`[Appwrite Interactions] Produit ${t} déjà sync, update batch normal...`),await $r(t,n)):(console.log(`[Appwrite Interactions] Produit ${t} local, création batch avec upsert...`),await zt(t,n,r))}catch(a){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${t}:`,a),a}}async function qo(t){const{databases:e,config:r}=await gt(),a={...t,createdBy:fr()},n=await e.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,nr.unique(),a);return console.log("[Appwrite Interactions] Achat créé:",n),n}async function Ts(t,e){try{const{databases:r,config:a}=await gt(),n=await r.getDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t),i={...e,products:e.products||n.products},o=await r.updateDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t,i);return console.log(`[Appwrite Interactions] Achat ${t} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${t}:`,r);const a=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${a}`)}}async function jo(t){try{const{databases:e,config:r}=await gt();await e.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,t),console.log(`[Appwrite Interactions] Achat ${t} supprimé`)}catch(e){console.error(`[Appwrite Interactions] Erreur suppression achat ${t}:`,e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Lo(t){if(!t?.length)return[];try{const{databases:e,config:r}=await gt(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[q.equal("$id",t),q.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${a.documents.length} purchases chargés avec relations products`),a.documents}catch(e){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Bo(t,e={}){let r=null;const a=i=>{const{events:o,payload:l}=i;if(!l)return;const d=o.some(p=>p.includes("products.")),f=o.some(p=>p.includes("purchases.")),h=o.some(p=>p.includes(".create")),m=o.some(p=>p.includes(".update")),g=o.some(p=>p.includes(".delete"));if(d){const p=l;p.updatedBy&&p.updatedBy!==fr()&&(h||m?He.info(`${p.updatedBy} a modifié le produit "${p.productName}"`,{source:"realtime-other"}):g&&He.info(`${p.updatedBy} a supprimé un produit`,{source:"realtime-other"})),h&&e.onProductCreate?e.onProductCreate(p):m&&e.onProductUpdate?e.onProductUpdate(p):g&&e.onProductDelete&&e.onProductDelete(p.$id)}else if(f){const p=l;if(p.createdBy&&p.createdBy!==fr()){const _=p.products?.[0]?.productName||"un produit";h&&p.who!==fr()?He.info(`${p.who} a ajouté un achat pour ${_}`,{source:"realtime-other"}):m&&p.who!==fr()?He.info(`${p.who} a modifié un achat pour ${_}`,{source:"realtime-other"}):g&&He.info(`${p.who} a supprimé un achat pour ${_}`,{source:"realtime-other"})}h&&e.onPurchaseCreate?e.onPurchaseCreate(p):m&&e.onPurchaseUpdate?e.onPurchaseUpdate(p):g&&e.onPurchaseDelete&&e.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],t,a,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),e.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),e.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),e.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),e.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function zo(t){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${t}`);const{databases:e}=await gt(),r=window.AppwriteClient.getConfig(),a=await e.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,t);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${a.name}`),a}catch(e){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${t}:`,e),null}}async function Uo(t,e,r,a){try{console.log(`[Appwrite Interactions] Création du Main document: ${t}`);const{databases:n}=await gt(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await n.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,t,{name:a,createdBy:l.$id,isActive:!0,originalDataHash:e,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${t}`)}catch(n){throw console.error("[Appwrite Interactions] Erreur création Main document:",n),n}}async function Ds(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"batchUpdateProducts",data:t};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${t.productIds.length} produits, type: ${t.updateType}`);const n=await To(()=>e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST"),{operationName:`batchUpdateProducts (${t.productIds.length} products, type: ${t.updateType})`,maxAutoRetries:1,autoRetryDelay:2e3});if(!n)throw new Error("Opération annulée ou échouée après tentatives de mise à jour groupée");if(n.status!=="completed")throw new Error(`Exécution échouée avec statut: ${n.status}. Erreur: ${n.stderr||n.responseBody}`);const i=JSON.parse(n.responseBody);return i.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${i.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,updatedCount:t.productIds.length,updateType:t.updateType,error:r,timestamp:new Date().toISOString()}}}async function Ho(t,e,r,a){return Ds({productIds:t,products:e,updateType:"store",updateData:r,options:a})}async function Wo(t,e,r,a="replace"){return Ds({productIds:t,products:e,updateType:"who",updateData:{names:r},options:{mode:a}})}async function Qo(t,e,r,a={}){try{const{databases:n,config:i}=await gt(),d=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:t,productId:e,productIdType:typeof e,quantities:r,options:a});for(const h of r){const m={products:[e],mainId:t,quantity:h.q,unit:h.u,status:"delivered",notes:a.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:a.store??null,who:d.name,price:null,orderDate:null,deliveryDate:null,createdBy:d.$id,invoiceId:a.invoiceId,invoiceTotal:null},g=await n.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.purchases,nr.unique(),m);f.push(g)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${e}`),f}catch(n){console.error("[Appwrite Interactions] Erreur création validation rapide:",n);const i=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${i}`)}}async function Go(t,e,r,a,n,i){try{const{databases:o,config:l}=await gt(),h=await(await window.AppwriteClient.getAccount()).get(),m=e||nr.unique(),g=h.name;if(!r)throw new Error("invoiceTotal est requis pour une dépense");const p={products:[],mainId:t,quantity:1,unit:"global",status:"expense",notes:n||"",store:a??null,who:g||h.name,price:r,invoiceId:m,invoiceTotal:r,orderDate:null,deliveryDate:null,createdBy:h.$id},_=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.purchases,nr.unique(),p);return console.log("[Appwrite Interactions] Dépense créée:",_),_}catch(o){console.error("[Appwrite Interactions] Erreur création dépense:",o);const l=o instanceof Error?o.message:"Erreur inconnue";throw new Error(`Échec de la création de la dépense: ${l}`)}}async function $c(t){try{const{databases:e,config:r}=await gt(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[q.equal("mainId",t),q.equal("status","expense"),q.limit(1e3)]);return console.log(`[Appwrite Interactions] ${a.documents.length} dépenses globales chargées`),a.documents}catch(e){return console.error("[Appwrite Interactions] Erreur chargement dépenses globales:",e),[]}}const mn=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:Ds,batchUpdateStore:Ho,batchUpdateWho:Wo,createExpensePurchase:Go,createMainDocument:Uo,createManualProduct:No,createPurchase:qo,createQuickValidationPurchases:Qo,deletePurchase:jo,enrichedProductToAppwriteProduct:Do,loadMainEventData:zo,loadOrphanPurchases:$c,loadPurchasesListByIds:Lo,loadUpdatedPurchases:Pc,removeTotalOverride:Oo,subscribeToRealtime:Bo,syncProductsWithPurchases:Mo,updateProduct:$r,updateProductBatch:Ro,updateProductStock:cs,updateProductStore:Io,updateProductWho:Co,updatePurchase:Ts,updateTotalOverride:As,upsertProduct:zt},Symbol.toStringTag,{value:"Module"}));function kc(t){return new Date(t).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function dr(t){return t?new Date(t).toLocaleDateString("fr-Fr",{weekday:"short",day:"numeric",month:"short"}):""}function _a(t){const r=new Date(t).getHours();return r>=11&&r<=13?"sun":r>=19&&r<=21?"moon":r>=7&&r<=9?"cloud":null}function Ec(t){return{formattedDate:new Date(t).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"}),timeIcon:_a(t)}}function Vo(t){const e={};for(const r of t)e[r]=Ec(r);return e}function Ac(t,e){if(!t.byDate?.[e])return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const r=t.byDate[e],a=[e],n=new Map;r.recipes?.length&&n.set(e,r.recipes);const i=r.totalConsolidated||[],o=i.length>0?ot(i):"-",l=Tc(t,e,i),d=l.filter(g=>g.q>0),f=new Date().toISOString().split("T")[0],m=e<f?[]:l.filter(g=>g.q<0);return{requiredQuantities:i,requiredQuantitiesFormatted:o,stockBalance:l,availableStockQuantities:d,missingStockQuantities:m,availableStockFormatted:ja(l),missingStockFormatted:ot(m.map(g=>({q:Math.abs(g.q),u:g.u}))),hasAvailableStock:d.length>0,hasMissingStock:m.length>0,totalRecipesInRange:r.recipes?.length||0,totalPortionsInRange:r.totalAssiettes||0,datesInSelectedRange:a,recipesByDate:n}}function Tc(t,e,r){let a=[],n="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(a=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],n=t.stockParsed.dateTime);const i=[];if(t.purchases)for(const d of t.purchases)Dc(d,e,n)&&i.push({q:d.quantity,u:d.unit});const o=[...a,...i],l=Ra(o);return Es(l,r)}function Dc(t,e,r=""){if(t.status==="cancelled")return!1;const a=t.deliveryDate||t.$createdAt;return!a||a>e||r&&t.$createdAt<r?!1:a<=e}function Mc(t,e){const r=t.totalNeededArray||[],a=r.length>0?ot(r):"-",n=Fo(t,e[0],e[e.length-1],r),i=n.filter(f=>f.q>0),o=n.filter(f=>f.q<0),l=[...e].sort(),d=new Map;if(t.byDate)for(const[f,h]of Object.entries(t.byDate))h.recipes?.length&&d.set(f,h.recipes);return{requiredQuantities:r,requiredQuantitiesFormatted:a,stockBalance:n,availableStockQuantities:i,missingStockQuantities:o,availableStockFormatted:ja(n),missingStockFormatted:ot(o.map(f=>({q:Math.abs(f.q),u:f.u}))),hasAvailableStock:i.length>0,hasMissingStock:o.length>0,totalRecipesInRange:t.nbRecipes||0,totalPortionsInRange:t.totalAssiettes||0,datesInSelectedRange:l,recipesByDate:d}}function Nc(t,e,r){if(!t.byDate)return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const a=new Date(e),n=new Date(r),i=[],o=new Map,l=new Map;let d=0,f=0;for(const[S,E]of Object.entries(t.byDate)){const A=new Date(S);A>=a&&A<=n&&(i.push(S),d+=E.totalAssiettes||0,E.recipes?.length&&(o.set(S,E.recipes),f+=E.recipes.length),E.totalConsolidated&&E.totalConsolidated.forEach(({q:D,u:k})=>{l.set(k,(l.get(k)||0)+D)}))}const h=Array.from(l.entries()).map(([S,E])=>({q:E,u:S})),m=h.length>0?ot(h):"-",g=Fo(t,e,r,h),p=g.filter(S=>S.q>0),_=new Date().toISOString().split("T")[0],x=r<_?[]:g.filter(S=>S.q<0);return{requiredQuantities:h,requiredQuantitiesFormatted:m,stockBalance:g,availableStockQuantities:p,missingStockQuantities:x,availableStockFormatted:ja(g),missingStockFormatted:ot(x.map(S=>({q:Math.abs(S.q),u:S.u}))),hasAvailableStock:p.length>0,hasMissingStock:x.length>0,totalRecipesInRange:f,totalPortionsInRange:d,datesInSelectedRange:i,recipesByDate:o}}function Fo(t,e,r,a){let n=[],i="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(n=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],i=t.stockParsed.dateTime);const o=[];if(t.purchases)for(const f of t.purchases)Ic(f,e,r,i)&&o.push({q:f.quantity,u:f.unit});const l=[...n,...o],d=Ra(l);return Es(d,a)}function Ic(t,e,r,a=""){if(t.status==="cancelled")return!1;const n=t.deliveryDate||t.$createdAt;return!n||n>r||a&&t.$createdAt<a?!1:n<=r}async function Cc(t){let e;if(e=await fetch(`/evenements/${t}/metadata.json`),!e.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function _n(t){const e=await fetch(`/evenements/${t}/ingredients_aw/index.json`);if(!e.ok)throw new Error(`Impossible de charger les données Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function Oc(t,e){if(!t)return!0;try{return(await Cc(e)).hugoContentHash!==t}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function Ko(t,e){const r=qa(t.byDate),a=na(sa([])),{numeric:n,display:i}=oa(r,a),o=Object.keys(t.byDate||{}),l=Vo(o);return{$id:`${t.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:t.ingredientHugoUuid,productName:t.ingredientName,productType:t.ingType,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1,nbRecipes:t.nbRecipes,totalNeededRaw:t.totalNeededRaw,totalAssiettes:t.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:e,purchases:[],byDate:t.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:a,missingQuantityArray:n,stockOrTotalPurchases:"-",displayTotalNeeded:ot(r),displayTotalPurchases:"-",displayMissingQuantity:i,totalNeededOverrideParsed:null,displayTotalOverride:"",dateDisplayInfo:l}}function Rc(t,e){return t.map(r=>Ko(r,e))}class qc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(e){this.dbName=`products-cache-${e}`}async open(){if(!this.db)return new Promise((e,r)=>{const a=indexedDB.open(this.dbName,this.version);a.onerror=()=>r(a.error),a.onsuccess=()=>{this.db=a.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),e()},a.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(this.PRODUCTS_STORE)||(i.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),i.objectStoreNames.contains(this.METADATA_STORE)||(i.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();i.onsuccess=()=>{const o=new Map;i.result.forEach(l=>{o.set(l.$id,l)}),console.log(`[IDBCache] ${o.size} produits chargés`),e(o)},i.onerror=()=>r(i.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();i.onsuccess=()=>{const o=i.result,l={lastSync:null,allDates:[],hugoContentHash:null};o.forEach(d=>{d.key===this.LAST_SYNC_KEY?l.lastSync=d.value:d.key===this.ALL_DATES_KEY?l.allDates=d.value||[]:d.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=d.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),e(l)},i.onerror=()=>r(i.error)})}async saveProducts(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),i=n.objectStore(this.PRODUCTS_STORE);i.clear(),e.forEach(o=>{i.put(o)}),n.oncomplete=()=>{console.log(`[IDBCache] ${e.size} produits sauvegardés`),r()},n.onerror=()=>a(n.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.METADATA_STORE,"readwrite"),i=n.objectStore(this.METADATA_STORE);i.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),i.put({key:this.ALL_DATES_KEY,value:e.allDates}),e.hugoContentHash!==void 0&&i.put({key:this.HUGO_HASH_KEY,value:e.hugoContentHash}),n.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},n.onerror=()=>a(n.error)})}async updateLastSync(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateAllDates(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${e.length} dates`),r()},o.onerror=()=>a(o.error)})}async updateHugoContentHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateLastHugoMenuUpdate(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:e});o.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},o.onerror=()=>a(o.error)})}async upsertProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async deleteProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const a=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");a.objectStore(this.PRODUCTS_STORE).clear(),a.objectStore(this.METADATA_STORE).clear(),a.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),e()},a.onerror=()=>r(a.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function jc(t){const e=new qc(t);return await e.open(),e}function Lc(t){return!!(t.isMerged||t.totalNeededOverride)}function Bc(t,e){if(!t||t.length!==e.length)return!0;for(let r=0;r<t.length;r++){const a=t[r],n=e[r];if(a.q!==n.q||a.u!==n.u)return!0}return!1}async function zc(t,e){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},a=new Set;for(const n of e.ingredients){const i=n.productSemanticKey;if(!i){console.warn(`[syncHugoData] Ingrédient sans productSemanticKey ignoré : ${n.ingredientName}`);continue}a.add(i);const o=t.get(i);if(o){if(Bc(o.totalNeededRaw,n.totalNeededRaw)){const d=Uc(o,n);if(d&&r.overrideConflicts.push(d),o.isMerged){const f=o.displayTotalNeeded;bn(o,n),r.mergedProductsUpdated.push({product:o,oldDisplayTotal:f,newDisplayTotal:o.displayTotalNeeded,currentOverride:o.totalNeededOverrideParsed,semanticKey:i})}else bn(o,n);r.updated.push(i)}t.set(i,o)}else{r.added.push(n);const l=Ko(n,e.mainGroup_id);t.set(l.$id,l)}}for(const[n,i]of t)a.has(n)||(r.removed.push(i),!Lc(i)&&!i.purchases?.length&&!i.stockReel&&!i.who?.length&&t.delete(n));return r.overrideConflicts.length>0&&await Hc(r.overrideConflicts),r.summary=Qc(r),r}function Uc(t,e){if(!t.totalNeededOverride||!t.totalNeededOverrideParsed)return null;const r=qa(e.byDate),a=ot(r),n=t.displayTotalNeeded;return n!==a?{product:t,oldDisplayTotal:n,newDisplayTotal:a,currentOverride:t.totalNeededOverrideParsed,semanticKey:t.$id}:null}async function Hc(t){for(const e of t){const r={...e.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:e.oldDisplayTotal,newTotalDisplay:e.newDisplayTotal};JSON.stringify(r);try{await As(e.product.$id,r,!1)}catch(a){console.error(`Erreur lors de la mise à jour de l'override pour ${e.product.$id}:`,a)}}}function bn(t,e){t.byDate=e.byDate,t.nbRecipes=e.nbRecipes,t.totalAssiettes=e.totalAssiettes,t.productType=e.ingType,t.pFrais=e.pFrais||!1,t.pSurgel=e.pSurgel||!1,Wc(t)}function Wc(t){t.totalNeededArray=qa(t.byDate),t.displayTotalNeeded=ot(t.totalNeededArray);const e=na(sa(t.purchases)),{numeric:r,display:a}=oa(t.totalNeededArray,e);t.totalPurchasesArray=e,t.missingQuantityArray=r,t.displayMissingQuantity=a;const n=Object.keys(t.byDate||{});t.dateDisplayInfo=Vo(n),t.stockOrTotalPurchases=t.purchases.length>0?t.displayTotalPurchases:t.displayTotalNeeded}function Qc(t){const e=[];if((t.added.length>0||t.updated.length>0||t.removed.length>0)&&e.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),t.added.length>0&&e.push(`${t.added.length} nouveau(x) ingrédient(s)`),t.updated.length>0&&e.push(` ${t.updated.length} ingrédient(s) mis à jour`),t.overrideConflicts.length>0&&e.push(`⚠️ ${t.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),t.mergedProductsUpdated.length>0&&e.push(`🔀 ${t.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),t.removed.length>0){const r=t.removed.filter(a=>a.purchases?.length||a.stockReel||a.who?.length).length;r>0?e.push(`⚠️ ${r} suppression(s) avec données conservées`):e.push(`${t.removed.length} ingrédient(s) supprimé(s)`)}return e.length>0?e.join(", "):"Aucune modification détectée"}class Gc{isMobileQuery=new dc("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return He.toasts}get toast(){return He}#e=B(qe({isOpen:!1,conflicts:[]}));get modalOverride(){return s(this.#e)}set modalOverride(e){b(this.#e,e,!0)}#t=B(qe({isOpen:!1}));get modal(){return s(this.#t)}set modal(e){b(this.#t,e,!0)}#r=B(qe({isRunning:!1,name:"",progress:0}));get backgroundOperation(){return s(this.#r)}set backgroundOperation(e){b(this.#r,e,!0)}}const kt=new Gc;class Vr{#e=B(qe({}));get data(){return s(this.#e)}set data(e){b(this.#e,e,!0)}dateStore;constructor(e,r){this.data=e,this.dateStore=r}update(e){this.data=e}get $id(){return this.data.$id}get productName(){return this.data.productName}get productType(){return this.data.productType}get storeInfo(){return this.data.storeInfo}get who(){return this.data.who}get pFrais(){return this.data.pFrais}get pSurgel(){return this.data.pSurgel}get status(){return this.data.status}get previousNames(){return this.data.previousNames}get purchases(){return this.data.purchases}get totalNeededOverrideParsed(){return this.data.totalNeededOverrideParsed}get displayMissingQuantity(){return this.data.displayMissingQuantity}get missingQuantityArray(){return this.data.missingQuantityArray}get isSynced(){return this.data.isSynced}get byDate(){return this.data.byDate}#t=G(()=>{const e=this.dateStore.current,r=this.dateStore.dates;let a;if(this.dateStore.isFullRange)a=Mc(this.data,r),a.datesInSelectedRange&&(a.datesInSelectedRange=a.datesInSelectedRange.filter(n=>this.data.byDate&&this.data.byDate[n]));else if(e.start&&e.end&&e.start===e.end)a=Ac(this.data,e.start);else if(e.start&&e.end)a=Nc(this.data,e.start,e.end);else return{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedMissingQuantities:"",formattedAvailableQuantities:"En attente",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map};return{quantities:a.requiredQuantities,formattedQuantities:a.requiredQuantitiesFormatted,nbRecipes:a.totalRecipesInRange,totalAssiettes:a.totalPortionsInRange,stockResult:a.stockBalance,availableQuantities:a.availableStockQuantities,missingQuantities:a.missingStockQuantities,formattedMissingQuantities:a.missingStockFormatted,formattedAvailableQuantities:a.availableStockFormatted,hasAvailable:a.hasAvailableStock,hasMissing:a.hasMissingStock,concernedDates:a.datesInSelectedRange,recipesByDate:a.recipesByDate}});get stats(){return s(this.#t)}set stats(e){b(this.#t,e)}}class Vc{#e=B(qe([]));#t=B(null);#r=B(null);constructor(e=[]){b(this.#e,e,!0),this.initializeSmartRange()}get start(){return s(this.#t)}get end(){return s(this.#r)}get dates(){return s(this.#e)}#o=G(()=>[...s(this.#e)].sort()[0]);get firstAvailableDate(){return s(this.#o)}set firstAvailableDate(e){b(this.#o,e)}#u=G(()=>[...s(this.#e)].sort()[s(this.#e).length-1]);get lastAvailableDate(){return s(this.#u)}set lastAvailableDate(e){b(this.#u,e)}get current(){return{start:s(this.#t),end:s(this.#r)}}#l=G(()=>{if(s(this.#e).length===0)return!0;const e=this.lastAvailableDate?new Date(this.lastAvailableDate):new Date;return e.setHours(23,59,59,999),e<new Date});get isEventPassed(){return s(this.#l)}set isEventPassed(e){b(this.#l,e)}#c=G(()=>{if(s(this.#e).length===0)return!1;const e=new Date;return e.setHours(0,0,0,0),s(this.#e).some(r=>new Date(r)>=e)});get hasUpcomingDates(){return s(this.#c)}set hasUpcomingDates(e){b(this.#c,e)}#i=G(()=>s(this.#t)===this.firstAvailableDate&&s(this.#r)===this.lastAvailableDate);get isFullRange(){return s(this.#i)}set isFullRange(e){b(this.#i,e)}#d=G(()=>{if(s(this.#e).length===0)return!1;const e=[...s(this.#e)].sort(),r=new Date;r.setHours(0,0,0,0);const a=e.find(o=>new Date(o)>=r)||null;let n,i;if(a)n=a,i=e[e.length-1];else{const o=e[e.length-1];n=o,i=o}return s(this.#t)===n&&s(this.#r)===i});get isUpcomingRange(){return s(this.#d)}set isUpcomingRange(e){b(this.#d,e)}#n=G(()=>s(this.#e).length===1);get hasSingleDateEvent(){return s(this.#n)}set hasSingleDateEvent(e){b(this.#n,e)}#v=G(()=>!!(s(this.#t)&&s(this.#t)===s(this.#r)));get hasSingleDateInRange(){return s(this.#v)}set hasSingleDateInRange(e){b(this.#v,e)}#a=G(()=>{if(!s(this.#t)||!s(this.#r)||this.isEventPassed)return!1;const e=new Date;return e.setHours(0,0,0,0),new Date(s(this.#t))<e});get hasPastDatesInRange(){return s(this.#a)}set hasPastDatesInRange(e){b(this.#a,e)}setAvailableDates(e){b(this.#e,e,!0),this.initializeSmartRange()}setRange(e,r){if(!e&&!r){b(this.#t,null),b(this.#r,null);return}if(!e||!r){const i=e||r;b(this.#t,i,!0),b(this.#r,i,!0);return}const a=new Date(e)<=new Date(r)?e:r,n=new Date(e)>=new Date(r)?e:r;b(this.#t,a,!0),b(this.#r,n,!0)}selectAll(){s(this.#e).length!==0&&(b(this.#t,s(this.#e)[0],!0),b(this.#r,s(this.#e)[s(this.#e).length-1],!0))}selectUpcoming(){if(s(this.#e).length===0)return;const e=[...s(this.#e)].sort(),r=new Date;r.setHours(0,0,0,0);const a=e.find(n=>new Date(n)>=r)||null;if(a)b(this.#t,a,!0),b(this.#r,e[e.length-1],!0);else{const n=e[e.length-1];b(this.#t,n,!0),b(this.#r,n,!0)}}selectFutureDatesOnly(){const e=new Date;e.setDate(e.getDate()+1),e.setHours(0,0,0,0);const r=s(this.#e).filter(a=>new Date(a)>=e);r.length>0&&(b(this.#t,r[0],!0),b(this.#r,r[r.length-1],!0))}initializeSmartRange(){if(s(this.#e).length===0)return;const e=[...s(this.#e)].sort(),r=this.isEventPassed,a=new Date(e[0])<new Date,n=new Date;let i;r?i=e[0]:a?i=n.toISOString().slice(0,19)+"Z":i=e[0],b(this.#t,i,!0),b(this.#r,e[e.length-1],!0),console.log(`[DateRangeStore] Initialized: ${s(this.#t)} - ${s(this.#r)}`)}}const yn=1e3;class Fc{#e=new tn;#t=new tn;#r=B(null);#o=B(null);#u=B(!1);#l=B(!1);#c=B(null);#i=B(!1);#d=B(!1);#n=B(null);#v=B(null);get currentMainId(){return s(this.#r)}dateStore=new Vc;get dateRange(){return this.dateStore.current}get availableDates(){return this.dateStore.dates}get isEventPassed(){return this.dateStore.isEventPassed}get hasSingleDateEvent(){return this.dateStore.hasSingleDateEvent}get hasSingleDateInRange(){return this.dateStore.hasSingleDateInRange}get hasPastDatesInRange(){return this.dateStore.hasPastDatesInRange}#a=null;#f=null;#h=B(!1);#p=null;#S=B(!1);#x=B();#_=B(qe([]));get hasPendingConflicts(){return s(this.#_).length>0}get pendingConflicts(){return s(this.#_)}#s=B(qe({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#s)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get loading(){return s(this.#l)}get error(){return s(this.#c)}get lastSync(){return s(this.#n)}get syncing(){return s(this.#i)}setDateRange(e,r){this.dateStore.setRange(e,r)}isFullRange(){return this.dateStore.isFullRange}initializeDateRange(){this.dateStore.initializeSmartRange()}selectUpcomingDates(){this.dateStore.selectUpcoming()}isUpcomingRange(){return this.dateStore.isUpcomingRange}get firstAvailableDate(){return this.dateStore.firstAvailableDate}get lastAvailableDate(){return this.dateStore.lastAvailableDate}selectFutureDatesOnly(){this.dateStore.selectFutureDatesOnly()}get realtimeConnected(){return s(this.#d)}#g=G(()=>{const e=Array.from(this.#e.values()).map(r=>r.data);return console.log(`[ProductsStore] enrichedProducts recalculated: ${e.length} products`),e});get enrichedProducts(){return s(this.#g)}set enrichedProducts(e){b(this.#g,e)}#m=G(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const e=new Date(this.dateRange.start),r=new Date(this.dateRange.end),a=new Map;for(const[n,i]of this.#e){const o=i.data,l=!o.productHugoUuid;if(!o.byDate&&!l||!ko(o,s(this.#s)))continue;let f=!1;o.byDate&&(f=Object.keys(o.byDate).some(h=>{const m=new Date(h);return m>=e&&m<=r})),(f||l)&&a.set(n,i)}return a});get filteredProductsMap(){return s(this.#m)}set filteredProductsMap(e){b(this.#m,e)}#P=G(()=>({total:this.#e.size,frais:Array.from(this.#e.values()).filter(e=>e.pFrais).length,surgel:Array.from(this.#e.values()).filter(e=>e.pSurgel).length,merged:Array.from(this.#e.values()).filter(e=>e.data.isMerged).length}));get stats(){return s(this.#P)}set stats(e){b(this.#P,e)}#$=G(()=>{const e=Array.from(this.#e.values()).map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(e)]});get uniqueStores(){return s(this.#$)}set uniqueStores(e){b(this.#$,e)}#k=G(()=>{const e=Array.from(this.#e.values()).flatMap(r=>r.who||[]);return[...new Set(e)]});get uniqueWho(){return s(this.#k)}set uniqueWho(e){b(this.#k,e)}#E=G(()=>{const e=Array.from(this.#e.values()).map(r=>r.productType).filter(Boolean);return[...new Set(e)]});get uniqueProductTypes(){return s(this.#E)}set uniqueProductTypes(e){b(this.#E,e)}#A=G(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((o,l)=>o.$id.localeCompare(l.$id));if(s(this.#s).groupBy==="none")return{"":r};const a=Object.groupBy(r,o=>s(this.#s).groupBy==="store"?o.storeInfo?.storeName||"Non défini":o.productType||"Non défini"),n=Object.keys(a).sort((o,l)=>o===""?1:l===""?-1:o.localeCompare(l)),i={};return n.forEach(o=>{i[o]=a[o]}),i});get groupedFilteredProducts(){return s(this.#A)}set groupedFilteredProducts(e){b(this.#A,e)}async initialize(e,r){if(!e?.trim())throw new Error("mainId invalide fourni");if(s(this.#u)&&s(this.#r)===e){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${e}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${e}`),b(this.#r,e,!0),b(this.#o,r,!0);try{this.#a=await jc(e)}catch(a){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",a),new Error("Impossible d'initialiser le cache IndexedDB")}b(this.#c,null);try{if(await this.#I(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let n;n=await _n(r),console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),b(this.#v,n.hugoContentHash,!0),Rc(n.ingredients,e).forEach(l=>{this.#e.set(l.$id,new Vr(l,this.dateStore))}),this.dateStore.setAvailableDates([...n.allDates]),await zo(e)||await Uo(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#T()}this.initializeDateRange(),await this.#C(),await this.#G(),b(this.#u,!0);const a=this.#Q();this.#f=Bo(e,a),this.#j(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#D(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(a){const n=a instanceof Error?a.message:"Erreur lors de l'initialisation";throw b(this.#c,n,!0),console.error("[ProductsStore]",n,a),a}}async#I(){if(this.#a)try{const e=await this.#a.loadProducts();e.forEach((a,n)=>{a.status==="isSyncing"&&(a.status="active"),this.#e.set(n,new Vr(a,this.dateStore))});const r=await this.#a.loadMetadata();b(this.#n,r.lastSync,!0),this.dateStore.setAvailableDates([...r.allDates]),b(this.#v,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${e.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(e){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",e)}}async#C(){if(s(this.#r)){b(this.#i,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#n)}`);const e=await Mo(s(this.#r),{lastSync:s(this.#n),limit:yn});if(console.log(`[ProductsStore] ${e.length} produits récupérés depuis Appwrite`),e.forEach(r=>{const a=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!a}, who=${r.who}, store=${r.store}`);const n=this.#M(r,a?.data);n.isSynced=!0,a?a.update(n):this.#e.set(r.$id,new Vr(n,this.dateStore))}),s(this.#n)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#n)}`);const{loadUpdatedPurchases:r}=await ls(async()=>{const{loadUpdatedPurchases:n}=await Promise.resolve().then(()=>mn);return{loadUpdatedPurchases:n}},void 0),a=await r(s(this.#r),s(this.#n),yn);console.log(`[ProductsStore] ${a.length} purchases modifiés récupérés`),a.forEach(n=>{if(n.status==="expense")this.#t.set(n.$id,n);else if(n.products?.length){const i=n.products.map(o=>typeof o=="string"?o:o.$id);this.#w(i,n)}})}this.#R(),await this.#O(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(e){throw console.error("[ProductsStore] Erreur lors du sync:",e),e}finally{b(this.#i,!1)}}}async#O(){if(this.#a)try{const e=new Map;this.#e.forEach((r,a)=>{const n=Er(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#a.saveProducts(e),await this.#a.saveMetadata({lastSync:s(this.#n),allDates:[...this.dateStore.dates],hugoContentHash:s(this.#v)}),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#V(){if(this.#a)try{const e=new Map;this.#e.forEach((r,a)=>{const n=Er(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#a.saveProducts(e),await this.#a.updateLastSync(s(this.#n)),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#T(){if(this.#a)try{const e=new Map;this.#e.forEach((r,a)=>{const n=Er(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#a.saveProducts(e),await this.#a.updateLastSync(s(this.#n)),await this.#a.updateAllDates([...this.availableDates]),await this.#a.updateHugoContentHash(s(this.#v)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(e){console.error("[ProductsStore] Erreur persistance cache complet:",e)}}async#y(e){if(!(!this.#a||e.length===0))try{const r=e.map(a=>this.#e.get(a)?.data).filter(a=>a!=null).map(a=>{const n=Er(a);return n.status==="isSyncing"&&(n.status="active"),this.#a.upsertProduct(n)});r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#R(){b(this.#n,new Date().toISOString(),!0)}async#D(){if(!s(this.#o)||s(this.#l))return!1;try{const e=await Oc(s(this.#v),s(this.#o));return e&&!s(this.#h)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${s(this.#o)}, analyse approfondie en cours...`),b(this.#h,!0),await this.#q()),b(this.#x,new Date,!0),e}catch(e){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",e),!1}}async#q(){if(!s(this.#o)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const e=await _n(s(this.#o)),r=new Map;this.#e.forEach((i,o)=>r.set(o,i.data));const a=await zc(r,e);console.log(`[ProductsStore  - hugo change] ${a.summary}`);for(const[i,o]of r){const l=this.#e.get(i);if(l)l.update(o);else{const d=new Vr(o,this.dateStore);this.#e.set(i,d),console.log(`[ProductsStore] ✨ Nouveau ProductModel créé : ${i}`)}}const n=[];for(const[i]of this.#e)r.has(i)||n.push(i);for(const i of n)this.#e.delete(i),console.log(`[ProductsStore] 🗑️ ProductModel supprimé : ${i}`);if(console.log(`[ProductsStore] 🔄 Synchronisation terminée : ${r.size} produits synchronisés, ${this.#e.size} ProductModel actifs`),a.overrideConflicts.length>0&&(b(this.#_,a.overrideConflicts,!0),He.error(`${a.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>kt.modalOverride.isOpen=!0}})),a.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${a.mergedProductsUpdated.length} produits fusionnés modifiés`),a.removed.length>0){const i=a.removed.filter(o=>o.purchases?.length||o.stockReel||o.who?.length);i.length>0&&console.log(`[ProductsStore] ℹ️ ${i.length} ingrédients supprimés conservés (données utilisateur)`)}this.dateStore.setAvailableDates([...e.allDates]),b(this.#v,e.hugoContentHash,!0),this.initializeDateRange(),await this.#T(),(a.added.length||a.updated.length||a.removed.length)&&He.success(a.summary),b(this.#h,!1)}catch(e){console.error("[ProductsStore] Erreur sync Hugo:",e),He.error("Erreur lors de la mise à jour Hugo")}}#j(){this.#p&&clearInterval(this.#p),this.#p=setInterval(async()=>{await this.#D()},6e4)}#L(){this.#p&&(clearInterval(this.#p),this.#p=null)}#M(e,r){return r?fa(e,r):yc(e)}#F(e){e.length&&(e.forEach(r=>this.#b(r)),console.log(`[ProductsStore] ${e.length} produits upserted`))}#b(e){const r=this.#e.get(e.$id),a=this.#M(e,r?.data);r?r.update(a):(this.dateStore.dates,this.#e.set(e.$id,new Vr(a,this.dateStore)))}#B(e){this.#e.delete(e)}async#z(e){if(!e.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",e.$id),[];const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#W(r,e),r}async#U(e){if(e.products?.length){const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#w(r,e),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Lo([e.$id]);if(r?.products?.length){const a=r.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#w(a,r),a}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#H(e){const r=Array.from(this.#e.values()).map(a=>a.data).filter(a=>a.purchases?.some(n=>n.$id===e));return r.forEach(a=>{this.#b(a)}),r.map(a=>a.$id)}#W(e,r){const a=rn(r),n=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,d=l.purchases||[];if(!d.some(f=>f.$id===a.$id)){const f=fa({...l,purchases:[...d,a],status:"active"},l);n.push(f)}}}),n.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#w(e,r){const a=rn(r),n=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,d=l.purchases||[],f=d.findIndex(h=>h.$id===a.$id);if(f>=0){const h=[...d];h[f]=a;const m=fa({...l,purchases:h,status:"active"},l);n.push(m)}else{const h=fa({...l,purchases:[...d,r],status:"active"},l);n.push(h)}}}),n.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#Q(){return{onProductCreate:e=>{if(this.#b(e),this.#a){const r=this.#e.get(e.$id);r&&this.#a.upsertProduct(Er(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductUpdate:e=>{if(this.#b(e),this.#a){const r=this.#e.get(e.$id);r&&this.#a.upsertProduct(Er(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductDelete:e=>{this.#B(e),this.#a&&this.#a.deleteProduct(e).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}const r=await this.#z(e);await this.#y(r)},onPurchaseUpdate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}this.#t.has(e.$id)&&this.#t.delete(e.$id);const r=await this.#U(e);await this.#y(r)},onPurchaseDelete:async e=>{if(this.#t.has(e)){this.#t.delete(e);return}const r=await this.#H(e);await this.#y(r)},onConnect:()=>{b(this.#d,!0)},onDisconnect:()=>{b(this.#d,!1)},onError:e=>{console.error("[ProductsStore] Erreur realtime:",e)}}}setSearchQuery=mc(e=>{s(this.#s).searchQuery=e},()=>500);toggleProductType(e){const r=s(this.#s).selectedProductTypes.indexOf(e);r>-1?s(this.#s).selectedProductTypes.splice(r,1):s(this.#s).selectedProductTypes.push(e)}toggleTemperature(e){const r=s(this.#s).selectedTemperatures.indexOf(e);r>-1?s(this.#s).selectedTemperatures.splice(r,1):s(this.#s).selectedTemperatures.push(e)}clearTypeAndTemperatureFilters(){s(this.#s).selectedProductTypes=[],s(this.#s).selectedTemperatures=[]}setGroupBy(e){s(this.#s).groupBy=e}toggleStore(e){const r=s(this.#s).selectedStores.indexOf(e);r>-1?s(this.#s).selectedStores.splice(r,1):s(this.#s).selectedStores.push(e)}toggleWho(e){const r=s(this.#s).selectedWho.indexOf(e);r>-1?s(this.#s).selectedWho.splice(r,1):s(this.#s).selectedWho.push(e)}clearStoreFilters(){s(this.#s).selectedStores=[]}clearWhoFilters(){s(this.#s).selectedWho=[]}handleSort(e){s(this.#s).sortColumn===e?s(this.#s).sortDirection=s(this.#s).sortDirection==="asc"?"desc":"asc":(s(this.#s).sortColumn=e,s(this.#s).sortDirection="asc")}clearFilters(){b(this.#s,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(e){return s(this.#s).sortColumn?[...e].sort((r,a)=>{let n=r[s(this.#s).sortColumn],i=a[s(this.#s).sortColumn];return s(this.#s).sortColumn==="totalNeededConsolidated"?(n=parseFloat(n)||0,i=parseFloat(i)||0):s(this.#s).sortColumn==="purchases"&&(n=r.purchases?.length||0,i=a.purchases?.length||0),n<i?s(this.#s).sortDirection==="asc"?-1:1:n>i?s(this.#s).sortDirection==="asc"?1:-1:0}):e}getEnrichedProductById(e){return this.#e.get(e)?.data??null}getProductModelById(e){return this.#e.get(e)??null}hasConversions(e){const r=this.#e.get(e)?.data;return r?.byDate?Po(r.byDate):!1}async forceReload(e,r){await this.clearCache(),await this.initialize(e,r)}async clearCache(){this.#e.clear(),b(this.#n,null),this.#a&&await this.#a.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(e,r){const a=r?"isSyncing":"active";e.forEach(n=>{const i=this.#e.get(n);if(i){const o={...i.data,status:a};i.update(o)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${e.length} produits → ${a}`)}clearSyncStatus(){const e=[];for(const[r,a]of this.#e)a.status==="isSyncing"&&e.push(r);e.length>0&&(this.setSyncStatus(e,!1),console.log(`[ProductsStore] Nettoyage de ${e.length} produits en statut "isSyncing"`))}destroy(){this.#f?.(),this.#f=null,this.#L(),this.#a&&(this.#a.close(),this.#a=null),console.log("[ProductsStore] Ressources nettoyées")}async#G(){if(s(this.#r))try{const{loadOrphanPurchases:e}=await ls(async()=>{const{loadOrphanPurchases:a}=await Promise.resolve().then(()=>mn);return{loadOrphanPurchases:a}},void 0),r=await e(s(this.#r));r.forEach(a=>{this.#t.set(a.$id,a)}),console.log(`[ProductsStore] ${r.length} dépenses globales chargées`)}catch(e){console.error("[ProductsStore] Erreur chargement dépenses globales:",e)}}#N=G(()=>{let e=0;const r={},a={},n=[];for(const i of this.#t.values()){const o=i.invoiceTotal||i.price||0;e+=o;const l=i.store||"Non défini";r[l]=(r[l]||0)+o;const d=i.who||"Non défini";a[d]=(a[d]||0)+o,n.push(i)}for(const i of this.#e.values()){const o=i.data;if(o.purchases&&o.purchases.length>0){for(const l of o.purchases)if(l.price){e+=l.price;const d=l.store||"Non défini";r[d]=(r[d]||0)+l.price;const f=l.who||"Non défini";a[f]=(a[f]||0)+l.price;const h={...l,_productName:o.productName};n.push(h)}}}return n.sort((i,o)=>{const l=new Date(i.orderDate||i.$createdAt).getTime();return new Date(o.orderDate||o.$createdAt).getTime()-l}),{totalGlobal:e,byStore:r,byWho:a,allPurchases:n}});get financialStats(){return s(this.#N)}set financialStats(e){b(this.#N,e)}}const J=new Fc;function wn(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const e=new URLSearchParams(window.location.search).get("listId");if(!e||!e.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return e.trim()}function Kc(t){const e=t.substring(0,4),r=t.slice(-10);return`${e}_${r}`}/**
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
 */const Yc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Jc=Cl("<svg><!><!></svg>");function xe(t,e){K(e,!0);const r=he(e,"color",3,"currentColor"),a=he(e,"size",3,24),n=he(e,"strokeWidth",3,2),i=he(e,"absoluteStrokeWidth",3,!1),o=he(e,"iconNode",19,()=>[]),l=_e(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var d=Jc();ns(d,m=>({...Yc,...l,width:a(),height:a(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>i()?Number(n())*24/Number(a()):n()]);var f=c(d);et(f,17,o,yr,(m,g)=>{var p=G(()=>ya(s(g),2));let _=()=>s(p)[0],y=()=>s(p)[1];var x=X(),S=C(x);zl(S,_,!0,(E,A)=>{ns(E,()=>({...y()}))}),v(m,x)});var h=u(f);fe(h,()=>e.children??oe),v(t,d),Y()}function Yo(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];xe(t,Se({name:"archive"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Jo(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];xe(t,Se({name:"badge-euro"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Zc(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];xe(t,Se({name:"bean"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Xc(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];xe(t,Se({name:"beef"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function eu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];xe(t,Se({name:"candy-cane"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function tu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];xe(t,Se({name:"carrot"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function qr(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20 6 9 17l-5-5"}]];xe(t,Se({name:"check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function ru(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];xe(t,Se({name:"chef-hat"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Zo(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m6 9 6 6 6-6"}]];xe(t,Se({name:"chevron-down"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function au(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];xe(t,Se({name:"circle-alert"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function su(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];xe(t,Se({name:"circle-arrow-down"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function nu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];xe(t,Se({name:"circle-arrow-right"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Sn(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];xe(t,Se({name:"circle-check-big"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function ou(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];xe(t,Se({name:"circle-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function iu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];xe(t,Se({name:"circle-x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function lu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];xe(t,Se({name:"clipboard-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function xn(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];xe(t,Se({name:"clipboard-pen-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Pn(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];xe(t,Se({name:"clock"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Xo(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];xe(t,Se({name:"cloud"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function La(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];xe(t,Se({name:"cooking-pot"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function cu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];xe(t,Se({name:"egg"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function uu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];xe(t,Se({name:"euro"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function ha(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];xe(t,Se({name:"funnel-x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function ei(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];xe(t,Se({name:"funnel"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function ti(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];xe(t,Se({name:"history"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function du(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];xe(t,Se({name:"info"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function vu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];xe(t,Se({name:"layout-list"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function fu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];xe(t,Se({name:"leaf"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function hu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];xe(t,Se({name:"list-todo"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function ri(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];xe(t,Se({name:"loader-circle"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function pu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];xe(t,Se({name:"lock"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function gu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];xe(t,Se({name:"log-in"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function mu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];xe(t,Se({name:"message-circle-more"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function _u(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];xe(t,Se({name:"message-circle-question-mark"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function ai(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];xe(t,Se({name:"message-circle"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Ms(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];xe(t,Se({name:"moon"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function bu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];xe(t,Se({name:"package-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function yu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];xe(t,Se({name:"package-plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Ba(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];xe(t,Se({name:"package"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function wu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];xe(t,Se({name:"pen-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Su(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];xe(t,Se({name:"pencil-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Ns(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];xe(t,Se({name:"plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function xu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];xe(t,Se({name:"refresh-cw"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Pu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];xe(t,Se({name:"refrigerator"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function $u(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];xe(t,Se({name:"save"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function ku(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];xe(t,Se({name:"search"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function si(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];xe(t,Se({name:"shopping-basket"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function _r(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];xe(t,Se({name:"shopping-cart"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Is(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];xe(t,Se({name:"snowflake"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function ea(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];xe(t,Se({name:"square-pen"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function hr(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];xe(t,Se({name:"store"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Cs(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];xe(t,Se({name:"sun"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Eu(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];xe(t,Se({name:"tag"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function ni(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];xe(t,Se({name:"thermometer"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function ia(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];xe(t,Se({name:"triangle-alert"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function oi(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];xe(t,Se({name:"user-plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Os(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];xe(t,Se({name:"user"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function ba(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];xe(t,Se({name:"users"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function ii(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];xe(t,Se({name:"utensils"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Mt(t,e){K(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];xe(t,Se({name:"x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Y()}function Au(t,e){const r=t.reduce((n,i)=>{const o=i.isSynced?0:1,l=i.missingQuantities.length;return n+o+l},0),a=e.invoiceTotal?1:0;return r+a}async function Tu(t,e){const r=t.filter(d=>!d.isSynced).map(d=>({productId:d.productId,productData:d.productData}));let a=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");a=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(d){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",d)}const n=e.purchaseStatus||"delivered";let i=e.purchaseDeliveryDate||null;n==="delivered"&&!i&&(i=new Date().toISOString());const o=t.flatMap(d=>d.missingQuantities.map(f=>({productId:d.productId,quantity:f.q,unit:f.u,status:n,notes:e.notes||"",store:e.store||"",who:e.who||void 0,price:void 0,orderDate:null,deliveryDate:i,createdBy:a})));return{mainId:t[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:o},invoiceData:e}}async function Du(t,e,r){if(!e?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};e.forEach(g=>{g.productData&&(g.productData.mainId=t)});const a=Au(e,r);console.log(`[Appwrite Interactions] Achat groupé: ${e.length} produits, ${a} opérations totales`);const n=100,i=[];if(a<=n)i.push(e);else{let g=[],p=0;for(const _ of e){const y=(_.isSynced?0:1)+_.missingQuantities.length;p+y>n?(g.length>0&&i.push(g),g=[_],p=y):(g.push(_),p+=y)}g.length>0&&i.push(g)}console.log(`[Appwrite Interactions] Découpage en ${i.length} lots pour respecter la limite de 100 opérations`);const o=[];let l=0,d=0,f=0;for(let g=0;g<i.length;g++){const p=i[g];console.log(`[Appwrite Interactions] Exécution du lot ${g+1}/${i.length} (${p.length} produits)`);try{const _=await Tu(p,r),y=await To(()=>Mu(_),{operationName:`Lot ${g+1}/${i.length}`,maxAutoRetries:1,autoRetryDelay:2e3});if(!y)throw new Error("Opération annulée ou échouée après tentatives");if(o.push(y),y.success)l+=y.productsCreated,d+=y.purchasesCreated,f+=y.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${g+1}: ${y.error}`);break}}catch(_){const y=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${g+1}:`,_),o.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:y,timestamp:new Date().toISOString()});break}}const h=o.every(g=>g.success),m=o.some(g=>!g.success);return{success:h,results:o,totalProductsCreated:l,totalPurchasesCreated:d,totalExpensesCreated:f,error:m?"Un ou plusieurs lots ont échoué":void 0}}async function Mu(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"createGroupPurchaseWithSync",data:t};console.log(`[Appwrite Interactions] Exécution du lot: ${t.batchData.productsToCreate.length} produits à créer, ${t.batchData.purchasesToCreate.length} achats à créer`);const n=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST");if(n.status!=="completed")throw new Error(`Exécution échouée avec statut: ${n.status}. Erreur: ${n.stderr}`);const i=JSON.parse(n.responseBody);return i.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${i.productsCreated} produits créés, ${i.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur exécution lot:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:t.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var Nu=(t,e,r)=>e(s(r).id),Iu=w("<span> </span>"),Cu=w('<button><!> <span class="max-w-32 truncate"> </span> <!> <!></button>'),Ou=w('<span class="flex items-center gap-1"><!> </span>'),Ru=w('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),qu=w('<div class="flex flex-wrap gap-2"></div> <!>',1);function ta(t,e){K(e,!0);let r=he(e,"badgeSize",3,"btn-lg"),a=he(e,"color",3,"primary"),n=he(e,"badgeStyle",3,""),i=he(e,"onToggleItem",3,()=>{}),o=he(e,"showStats",3,!1),l=he(e,"showIcon",3,!0),d=B(qe({}));Kt(()=>{const x={};e.items.forEach(S=>{x[S.id]=S.selected??!0}),b(d,x,!0)});function f(x){s(d)[x]=!s(d)[x],i()(x)}const h=G(()=>Object.values(s(d)).filter(Boolean).length),m=G(()=>Object.values(s(d)).filter(x=>!x).length);var g=qu(),p=C(g);et(p,21,()=>e.items,x=>x.id,(x,S)=>{const E=G(()=>s(d)[s(S).id]);var A=Cu();A.__click=[Nu,f,S];var D=c(A);{var k=U=>{var le=X(),ge=C(le);mr(ge,()=>s(S).icon,(Pe,H)=>{H(Pe,{class:"h-3 w-3",get title(){return s(S).title}})}),v(U,le)};$(D,U=>{s(S).icon&&U(k)})}var T=u(D,2),O=c(T),P=u(T,2);{var L=U=>{var le=Iu(),ge=c(le);I(()=>{Te(le,1,`badge badge-sm badge-${a()??""}`),N(ge,s(S).badge)}),v(U,le)};$(P,U=>{s(S).badge&&U(L)})}var te=u(P,2);{var V=U=>{var le=X(),ge=C(le);{var Pe=ce=>{qr(ce,{size:16})},H=ce=>{Ns(ce,{size:16})};$(ge,ce=>{s(E)?ce(Pe):ce(H,!1)})}v(U,le)};$(te,U=>{l()&&U(V)})}I(()=>{Te(A,1,`btn ${r()??""} btn-${a()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(E)?`${n()} hover:line-through `:"btn-dash hover:border-solid "}`),sr(A,"title",s(E)?"Retirer de la liste":"Réajouter à la liste"),N(O,s(S).label)}),v(x,A)});var _=u(p,2);{var y=x=>{var S=Ru(),E=c(S),A=c(E),D=c(A);qr(D,{class:"text-success h-3 w-3"});var k=u(D),T=u(A,2);{var O=te=>{var V=Ou(),U=c(V);Mt(U,{class:"text-error h-3 w-3"});var le=u(U);I(()=>N(le,` ${s(m)??""} retirés`)),v(te,V)};$(T,te=>{s(m)>0&&te(O)})}var P=u(E,2),L=c(P);I(()=>{N(k,` ${s(h)??""} actifs`),N(L,`Total: ${e.items.length??""} items`)}),v(x,S)};$(_,x=>{o()&&x(y)})}v(t,g),Y()}Ge(["click"]);function ju(t,e){b(e,!s(e))}var Lu=w('<span class="text-base-content font-semibold"> </span>'),Bu=w('<div class="text-base-content/80 flex-1"> </div>'),zu=w('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Uu=w('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Hu=w('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function li(t,e){let r=he(e,"icon",3,du),a=he(e,"class",3,""),n=he(e,"initiallyOpen",3,!1),i=r(),o=B(qe(n())),l=qe(e.children);var d=Hu(),f=c(d);f.__click=[ju,o];var h=c(f),m=c(h);i(m,{size:24,class:"text-base-content me-4 flex-shrink-0"});var g=u(m,2);{var p=D=>{var k=Lu(),T=c(k);I(()=>N(T,e.title)),v(D,k)};$(g,D=>{e.title&&D(p)})}var _=u(h,2);{var y=D=>{var k=Bu(),T=c(k);I(()=>N(T,e.contentVisible)),v(D,k)};$(_,D=>{e.contentVisible&&D(y)})}var x=u(_,2);{var S=D=>{var k=zu(),T=c(k),O=c(T);{var P=V=>{var U=ht("en savoir plus");v(V,U)},L=V=>{var U=ht("masquer");v(V,U)};$(O,V=>{s(o)?V(L,!1):V(P)})}var te=u(T,2);{let V=G(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(o)?"rotate-180":""}`);Zo(te,{get class(){return s(V)}})}v(D,k)};$(x,D=>{l&&D(S)})}var E=u(f,2);{var A=D=>{var k=Uu(),T=c(k),O=c(T);fe(O,()=>e.children??oe),I(()=>Te(k,1,`overflow-hidden transition-all duration-200 ${s(o)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),v(D,k)};$(E,D=>{l&&D(A)})}I(()=>{Te(d,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${a()}`),go(d,e.style),Te(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),sr(f,"aria-expanded",s(o))}),v(t,d)}Ge(["click"]);var Wu=w('<div class="mb-1 text-xs opacity-70"> </div>'),Qu=(t,e,r)=>e(s(r)),Gu=w("<button><!> </button>"),Vu=w('<div><!> <div class="ms-1 flex flex-wrap items-center gap-1"><!> <!></div></div>');function Rs(t,e){K(e,!0);let r=he(e,"maxSuggestions",3,8),a=he(e,"buttonSize",3,"btn-xs"),n=he(e,"buttonVariant",3,"btn-soft"),i=he(e,"disabled",3,!1);const o=G(()=>e.suggestions.slice(0,r()));function l(m){!i()&&!m.disabled&&e.onSuggestionClick(m)}var d=X(),f=C(d);{var h=m=>{var g=Vu(),p=c(g);{var _=E=>{var A=Wu(),D=c(A);I(()=>N(D,e.title)),v(E,A)};$(p,E=>{e.title&&E(_)})}var y=u(p,2),x=c(y);Su(x,{class:"text-base-content/70 mr-1",size:14});var S=u(x,2);et(S,17,()=>s(o),E=>E.id,(E,A)=>{var D=Gu();D.__click=[Qu,l,A];var k=c(D);{var T=P=>{var L=X(),te=C(L);mr(te,()=>s(A).icon,(V,U)=>{U(V,{class:"h-3 w-3"})}),v(P,L)};$(k,P=>{s(A).icon&&P(T)})}var O=u(k);I(()=>{Te(D,1,`btn btn-primary ${a()??""} ${n()??""}`),D.disabled=i()||s(A).disabled,sr(D,"title",s(A).disabled?"Déjà sélectionné":s(A).label),N(O,` ${s(A).label??""}`)}),v(E,D)}),v(m,g)};$(f,m=>{s(o).length>0&&m(h)})}v(t,d),Y()}Ge(["click"]);const Fu=[{value:"kg",label:"kg"},{value:"gr.",label:"gr."},{value:"l.",label:"l."},{value:"ml",label:"ml"},{value:"unité",label:"unité·s"},{value:"bottes",label:"botte·s"}];var Ku=w("<option> </option>"),Yu=w('<fieldset class="fieldset"><div class="flex gap-2"><label class="input w-32"><!> <input type="number" step="1" min="0" placeholder="Quantité" required/></label> <select class="custom-select input w-28" required><option disabled selected>Unité</option><!></select></div></fieldset>');function za(t,e){K(e,!0);let r=he(e,"quantity",15),a=he(e,"unit",15),n=he(e,"disabled",3,!1);var i=Yu(),o=c(i),l=c(o),d=c(l);Ba(d,{class:"h-4 w-4 opacity-50"});var f=u(d,2),h=u(l,2),m=c(h);m.value=m.__value="";var g=u(m);et(g,17,()=>Fu,yr,(p,_)=>{let y=()=>s(_).value,x=()=>s(_).label;var S=Ku(),E=c(S),A={};I(()=>{N(E,x()),A!==(A=y())&&(S.value=(S.__value=y())??"")}),v(p,S)}),I(()=>{f.disabled=n(),h.disabled=n()}),Qe(f,r),$a(h,a),v(t,i),Y()}var Ju=w('<div><label class="input w-72"><!> <input/></label> <!></div>');function Ur(t,e){K(e,!0);let r=he(e,"value",15),a=he(e,"suggestions",19,()=>[]),n=he(e,"disabled",3,!1),i=he(e,"flexCol",3,!1),o=_e(e,["$$slots","$$events","$$legacy","value","suggestions","disabled","flexCol"]);const l=G(()=>a().map(_=>({id:_,label:_,disabled:_===r()})));var d=Ju(),f=c(d),h=c(f);hr(h,{class:"h-4 w-4 opacity-50"});var m=u(h,2);ns(m,()=>({type:"text",placeholder:"Magasin",maxlength:"50",disabled:n(),...o}),void 0,void 0,void 0,!0);var g=u(f,2);{var p=_=>{Rs(_,{get suggestions(){return s(l)},onSuggestionClick:y=>r(y.label),buttonSize:"btn-xs"})};$(g,_=>{a().length>0&&_(p)})}I(()=>Te(d,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`)),Qe(m,r),v(t,d),Y()}var Zu=w('<div><label class="input w-72"><!> <input type="text" placeholder="Qui" maxlength="25"/></label> <!></div>');function la(t,e){K(e,!0);let r=he(e,"value",15),a=he(e,"suggestions",19,()=>[]),n=he(e,"disabled",3,!1),i=he(e,"flexCol",3,!1);const o=G(()=>a().map(p=>({id:p,label:p,disabled:p===r()})));var l=Zu(),d=c(l),f=c(d);Os(f,{class:"h-4 w-4 opacity-50"});var h=u(f,2);h.__keydown=function(...p){e.onkeydown?.apply(this,p)};var m=u(d,2);{var g=p=>{Rs(p,{get suggestions(){return s(o)},onSuggestionClick:_=>r(_.label),buttonSize:"btn-xs"})};$(m,p=>{a().length>0&&p(g)})}I(()=>{Te(l,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`),h.disabled=n()}),Qe(h,r),v(t,l),Y()}Ge(["keydown"]);var Xu=w('<textarea class="textarea w-full text-sm" placeholder="Commentaire (optionnel)" rows="2" maxlength="250"></textarea>');function Hr(t,e){K(e,!0);let r=he(e,"value",15),a=he(e,"disabled",3,!1);var n=Xu();I(()=>n.disabled=a()),Qe(n,r),v(t,n),Y()}var ed=w('<label class="input w-28"><!> <input type="number" step="1" min="0" placeholder="0.00"/></label>');function qs(t,e){K(e,!0);let r=he(e,"value",15),a=he(e,"disabled",3,!1);var n=ed(),i=c(n);uu(i,{class:"h-4 w-4 opacity-50"});var o=u(i,2);I(()=>o.disabled=a()),Qe(o,r),v(t,n),Y()}var td=w('<label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label>'),rd=w(`<div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Acheté</option><option>Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div>`);function ci(t,e){K(e,!0);let r=he(e,"status",15),a=he(e,"deliveryDate",15),n=he(e,"disabled",3,!1);var i=rd(),o=c(i),l=c(o),d=c(l);d.value=d.__value="delivered";var f=u(d);f.value=f.__value="ordered";var h=u(l,2),m=u(o,2);{var g=p=>{var _=td(),y=u(c(_),2);I(()=>y.disabled=n()),Qe(y,a),v(p,_)};$(m,p=>{r()==="ordered"&&p(g)})}I(()=>{l.disabled=n(),Te(h,1,`label ${r()==="delivered"?"":"hidden"}`)}),$a(l,r),v(t,i),Y()}function $n(t,e,r){s(e)||r.onClose()}var ad=w('<div class="alert alert-error"><!> <span> </span></div>'),sd=w('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),nd=w(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes <strong>pour la période sélectionnée</strong>, c'est à dire le besoin total pour chaque produit sur cette
            période moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),od=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),id=w("<!> ",1),ld=w(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="mb-4 flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><!> <!></div> <!> <!> <div><!></div></div> <div class="mb-4"><h4 class=" font-medium">Produits concernés</h4> <div class="text-base-content/70 mb-4">les quantités manquantes du <span class="badge badge-info badge-sm"> </span> au <span class="badge badge-info badge-sm"> </span> pour les produits suivant seront déclarés "acheté"</div> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function cd(t,e){K(e,!0);let r=B(!1),a=B(null),n=B(null),i=qe({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),o=B(qe(new Set));Kt(()=>{b(o,new Set(e.products.map(z=>z.$id)),!0)});const l=G(()=>e.products.filter(z=>s(o).has(z.$id))),d=G(()=>s(l).length!==0),f=G(()=>{const z=J.dateRange;let Q="";return z?.start&&z?.end&&(z.start===z.end?Q=` - ${dr(z.start)}`:Q=` - Du ${dr(z.start)} au ${dr(z.end)}`),`Achat groupé (${s(l).length} produits sélectionnés)${Q}`});async function h(){if(!s(d)||s(r))return;b(r,!0),b(a,null),b(n,null);const z=`FACTURE_${Date.now()}`,Q=s(l).map(ve=>ve.$id);J.setSyncStatus(Q,!0),kt.backgroundOperation={isRunning:!0,name:`Achat groupé (${s(l).length} produits)`,progress:0};const ne=[];for(const ve of s(l)){const W=(J.getProductModelById(ve.$id)?.stats.missingQuantities||[]).filter(be=>be.q<0).map(be=>({...be,q:Math.abs(be.q)}));ne.push({productId:ve.$id,isSynced:ve.isSynced,productData:ve,missingQuantities:W})}const ke={invoiceId:z,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(l).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${ne.length} produits...`),e.onClose();try{const ve=await Du(J.currentMainId,ne,ke);if(ve.success)console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${ve.totalProductsCreated} produits synchronisés, ${ve.totalPurchasesCreated} achats créés, ${ve.totalExpensesCreated} dépenses globales`),He.success(`Achat groupé réussi ! ${ve.totalPurchasesCreated} achats créés.`),e.onSuccess?.();else throw new Error(ve.error||"Erreur lors de la création de l'achat groupé")}catch(ve){const Re=ve instanceof Error?ve.message:"Erreur inconnue";console.error("[GroupPurchaseModal] Erreur création achat groupé:",ve),He.error(`Erreur achat groupé: ${Re}`),J.clearSyncStatus()}finally{b(r,!1),kt.backgroundOperation={isRunning:!1,name:"",progress:0}}}function m(z){const Q=new Set(s(o));Q.has(z)?Q.delete(z):Q.add(z),b(o,Q,!0)}const g=G(()=>e.products.map(z=>{const Q=J.getProductModelById(z.$id);return{id:z.$id,label:z.productName,title:`${z.productName} - Manque: ${Q?.stats.formattedMissingQuantities||"-"}`,badge:Q?.stats.formattedMissingQuantities||"-"}}));var p=ld(),_=c(p),y=c(_),x=c(y),S=c(x);_r(S,{class:"h-5 w-5"});var E=u(S),A=u(x,2);A.__click=[$n,r,e];var D=c(A);Mt(D,{class:"h-4 w-4"});var k=u(y,2),T=c(k);{var O=z=>{var Q=ad(),ne=c(Q);ia(ne,{class:"h-4 w-4"});var ke=u(ne,2),ve=c(ke);I(()=>N(ve,s(a))),v(z,Q)};$(T,z=>{s(a)&&z(O)})}var P=u(T,2);{var L=z=>{var Q=sd(),ne=c(Q);qr(ne,{class:"h-4 w-4"});var ke=u(ne,2),ve=c(ke),Re=u(ve);{var W=Be=>{var Ve=ht("+ 1 dépense globale");v(Be,Ve)};$(Re,Be=>{s(n).expense&&Be(W)})}var be=u(Re,2);{var Ue=Be=>{var Ve=ht();I(()=>N(Ve,`(traité en ${s(n).batches??""} lots)`)),v(Be,Ve)};$(be,Be=>{s(n).batches&&s(n).batches>1&&Be(Ue)})}I(()=>N(ve,`Achat groupé créé avec succès ! ${s(n).purchases??""} produit(s) validés `)),v(z,Q)};$(P,z=>{s(n)&&z(L)})}var te=u(P,2),V=c(te);li(V,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit sur la période sélectionnée.",class:"bg-base-200",children:(z,Q)=>{var ne=nd();v(z,ne)},$$slots:{default:!0}});var U=u(te,2),le=u(c(U),2),ge=c(le);Ur(ge,{get suggestions(){return J.uniqueStores},get disabled(){return s(r)},get value(){return i.store},set value(z){i.store=z}});var Pe=u(ge,2);la(Pe,{get suggestions(){return J.uniqueWho},get disabled(){return s(r)},get value(){return i.who},set value(z){i.who=z}});var H=u(le,2);qs(H,{get disabled(){return s(r)},get value(){return i.expense},set value(z){i.expense=z}});var ce=u(H,2);ci(ce,{get disabled(){return s(r)},get status(){return i.status},set status(z){i.status=z},get deliveryDate(){return i.deliveryDate},set deliveryDate(z){i.deliveryDate=z}});var ye=u(ce,2),se=c(ye);Hr(se,{get disabled(){return s(r)},get value(){return i.notes},set value(z){i.notes=z}});var re=u(U,2),me=u(c(re),2),we=u(c(me)),F=c(we),Z=u(we,2),M=c(Z),ae=u(me,2);ta(ae,{get items(){return s(g)},onToggleItem:m,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var R=u(re,2),ie=c(R);ie.__click=[$n,r,e];var j=u(ie,2);j.__click=h;var ee=c(j);{var de=z=>{var Q=od();v(z,Q)},$e=z=>{var Q=id(),ne=C(Q);_r(ne,{class:"h-4 w-4"});var ke=u(ne);I(()=>N(ke,` Valider ${s(l).length??""} produit(s)`)),v(z,Q)};$(ee,z=>{s(r)?z(de):z($e,!1)})}I((z,Q)=>{N(E,` ${s(f)??""}`),A.disabled=s(r),N(F,z),N(M,Q),ie.disabled=s(r),j.disabled=s(r)||!s(d)},[()=>dr(J.dateRange.start),()=>dr(J.dateRange.start)]),v(t,p),Y()}Ge(["click"]);function Ja(t,e,r,a){e(!1),b(r,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0),b(a,null)}var ud=w('<div class="alert alert-error text-sm"><!> <span> </span></div>'),dd=(t,e)=>e(!0),vd=w('<span class="loading loading-spinner"></span>'),fd=w('<span class="loading loading-spinner"></span>'),hd=w('<div role="dialog"><div class="modal-box relative w-10/12 max-w-5xl"><button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" aria-label="Fermer"><!></button> <h3 class="text-lg font-bold">Ajouter un produit</h3> <form class="mt-6 space-y-4"><!> <fieldset class="space-y-4"><div class="flex flex-wrap gap-4"><fieldset class="fieldset"><label class="input w-72"><!> <input id="product-name" type="text" placeholder="Nom du produit"/></label></fieldset> <!></div> <fieldset class="fieldset"><div class="flex flex-wrap items-baseline gap-2"><label class="input w-72"><!> <input id="product-type" type="text" placeholder="type / catégorie"/></label> <!></div></fieldset> <!> <!> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-success"/> <span class="label-text flex items-center gap-2"><!> Produit frais</span></label></fieldset> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-info"/> <span class="label-text flex items-center gap-2"><!> Produit surgelé</span></label></fieldset></fieldset> <div class="modal-action flex justify-between"><button type="button" class="btn btn-ghost">Annuler</button> <div class="flex gap-2"><button type="button" class="btn btn-secondary"><!> Ajouter et créer un nouveau</button> <button type="submit" class="btn btn-primary"><!> Ajouter et fermer</button></div></div></form></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></div>');function pd(t,e){K(e,!0);let r=he(e,"open",15,!1),a=B(!1),n=B(null),i=B(!1),o=B(qe({productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""}));const l=G(()=>s(o).productName.trim().length>0&&s(o).productType.trim().length>0),d=G(()=>J.uniqueProductTypes.map(W=>({id:W,label:W})));async function f(W=!1){if(!(!s(l)||s(a))){b(a,!0),b(n,null),b(i,!1);try{if(!J.currentMainId)throw new Error("Aucun événement principal sélectionné");const be={productName:s(o).productName.trim(),productType:s(o).productType.trim(),store:s(o).store.trim()?{storeName:s(o).store.trim()}:void 0,who:s(o).who.trim()?[s(o).who.trim()]:void 0,pFrais:s(o).pFrais,pSurgel:s(o).pSurgel,quantity:s(o).quantity?{q:s(o).quantity,u:s(o).unit.trim()||"pièces"}:void 0};await No(be,J.currentMainId),b(i,!0),W?(s(o).productName="",s(o).quantity=void 0,s(o).unit="",s(o).pFrais=!1,s(o).pSurgel=!1,setTimeout(()=>{document.getElementById("product-name")?.focus()},100)):(r(!1),b(o,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0))}catch(be){console.error("Error creating product:",be),b(n,"Erreur lors de la création du produit. Veuillez réessayer.")}finally{b(a,!1)}}}Kt(()=>{r()&&setTimeout(()=>{document.getElementById("product-name")?.focus()},50)});var h=hd();let m;var g=c(h),p=c(g);p.__click=[Ja,r,o,n];var _=c(p);Mt(_,{size:20});var y=u(p,4),x=c(y);{var S=W=>{var be=ud(),Ue=c(be);ia(Ue,{size:18});var Be=u(Ue,2),Ve=c(Be);I(()=>N(Ve,s(n))),v(W,be)};$(x,W=>{s(n)&&W(S)})}var E=u(x,2),A=c(E),D=c(A),k=c(D),T=c(k);yu(T,{class:"text-base-content/50 h-5 w-5"});var O=u(T,2),P=u(D,2);za(P,{get disabled(){return s(a)},get quantity(){return s(o).quantity},set quantity(W){s(o).quantity=W},get unit(){return s(o).unit},set unit(W){s(o).unit=W}});var L=u(A,2),te=c(L),V=c(te),U=c(V);Eu(U,{class:"text-base-content/50 h-5 w-5"});var le=u(U,2),ge=u(V,2);Rs(ge,{get suggestions(){return s(d)},onSuggestionClick:W=>s(o).productType=W.label,get disabled(){return s(a)}});var Pe=u(L,2);Ur(Pe,{get suggestions(){return J.uniqueStores},get disabled(){return s(a)},get value(){return s(o).store},set value(W){s(o).store=W}});var H=u(Pe,2);la(H,{get suggestions(){return J.uniqueWho},get disabled(){return s(a)},get value(){return s(o).who},set value(W){s(o).who=W}});var ce=u(H,2),ye=c(ce),se=c(ye),re=u(se,2),me=c(re);ni(me,{class:"h-4 w-4"});var we=u(ce,2),F=c(we),Z=c(F),M=u(Z,2),ae=c(M);Is(ae,{class:"h-4 w-4"});var R=u(E,2),ie=c(R);ie.__click=[Ja,r,o,n];var j=u(ie,2),ee=c(j);ee.__click=[dd,f];var de=c(ee);{var $e=W=>{var be=vd();v(W,be)},z=W=>{Ns(W,{size:18})};$(de,W=>{s(a)?W($e):W(z,!1)})}var Q=u(ee,2),ne=c(Q);{var ke=W=>{var be=fd();v(W,be)};$(ne,W=>{s(a)&&W(ke)})}var ve=u(g,2),Re=c(ve);Re.__click=[Ja,r,o,n],I(W=>{m=Te(h,1,"modal",null,m,W),E.disabled=s(a),O.disabled=s(a),le.disabled=s(a),se.disabled=s(a),Z.disabled=s(a),ie.disabled=s(a),ee.disabled=s(a)||!s(o).productName,Q.disabled=s(a)||!s(o).productName},[()=>({"modal-open":r()})]),Mr("submit",y,W=>{W.preventDefault(),f(!1)}),Qe(O,()=>s(o).productName,W=>s(o).productName=W),Qe(le,()=>s(o).productType,W=>s(o).productType=W),is(se,()=>s(o).pFrais,W=>s(o).pFrais=W),is(Z,()=>s(o).pSurgel,W=>s(o).pSurgel=W),v(t,h),Y()}Ge(["click"]);function us(t){switch(t.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Zc};case"animaux":return{displayName:"Viandes et Poissons",icon:Xc};case"legumes":return{displayName:"Fruits et Légumes",icon:tu};case"sucres":return{displayName:"Sucrées",icon:eu};case"lof":return{displayName:"L.O.F",icon:cu};case"autres":return{displayName:"Autres",icon:ru};case"epices":return{displayName:"Assaisonnements",icon:fu};case"frais":return{displayName:"Produits Frais",icon:Pu};default:return{displayName:t,icon:Ba}}}function ds(t,e){return e==="kg"?{quantity:t*1e3,unit:"gr."}:e==="l."?{quantity:t*1e3,unit:"ml"}:{quantity:t,unit:e}}function js(t,e){let r,a;if(e==="gr."&&t>=1e3){const n=t/1e3;r=Za(n),a="kg"}else if(e==="ml"&&t>=1e3){const n=t/1e3;r=Za(n),a="l"}else r=Za(t),a=e;return`${r} ${a}`}function Za(t){return(Math.round(t*10)/10).toString().replace(/\.0$/,"")}function Ua(t){if(!t)return"-";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}function gd(t){if(!t)return"";try{return new Date(t).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short"})}catch{return t}}function vs(t){switch(t){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function kn(t){return t?Ua(t):"-"}function md(t){if(!t?.length)return[];const e=t.reduce((r,a)=>{const n=a.status||"direct",i=a.unit||"unit",o=`${n}_${i}`;if(!r[o]){const l=vs(n);r[o]={status:n,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:_d(n),deliveryDate:n==="ordered"&&a.deliveryDate?gd(a.deliveryDate):void 0}}return r[o].quantity+=a.quantity||0,r},{});return Object.values(e).map(r=>({...r,quantity:js(r.quantity,r.unit).replace(` ${r.unit}`,"")}))}function _d(t){switch(t){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"Check";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}class bd{constructor(e,r="recettes"){this.productId=e,this.currentTab=r,this.initForms()}#e=B(!1);get loading(){return s(this.#e)}set loading(e){b(this.#e,e,!0)}#t=B(null);get error(){return s(this.#t)}set error(e){b(this.#t,e,!0)}#r=B("recettes");get currentTab(){return s(this.#r)}set currentTab(e){b(this.#r,e,!0)}#o=G(()=>{const e=this.productId;return J.getEnrichedProductById(e)});get product(){return s(this.#o)}set product(e){b(this.#o,e)}#u=G(()=>this.product?.who??[]);get whoList(){return s(this.#u)}set whoList(e){b(this.#u,e)}#l=G(()=>this.product?.stockParsed??null);get stockParsed(){return s(this.#l)}set stockParsed(e){b(this.#l,e)}#c=G(()=>this.product?.purchases??[]);get purchasesList(){return s(this.#c)}set purchasesList(e){b(this.#c,e)}#i=G(()=>this.product?.byDate?$o(this.product.byDate):[]);get recipes(){return s(this.#i)}set recipes(e){b(this.#i,e)}#d=B(qe({purchase:{quantity:null,unit:"",store:"",who:kt.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]}));get forms(){return s(this.#d)}set forms(e){b(this.#d,e,!0)}#n=B(qe({overrideManagerEditMode:!1}));get uiStates(){return s(this.#n)}set uiStates(e){b(this.#n,e,!0)}#v=B(null);get editingPurchaseId(){return s(this.#v)}set editingPurchaseId(e){b(this.#v,e,!0)}#a=G(()=>this.editingPurchaseId?this.purchasesList.find(e=>e.$id===this.editingPurchaseId)??null:null);get editingPurchaseData(){return s(this.#a)}set editingPurchaseData(e){b(this.#a,e)}#f=B(null);get originalFormsSnapshot(){return s(this.#f)}set originalFormsSnapshot(e){b(this.#f,e,!0)}initForms(){const e=J.getEnrichedProductById(this.productId);e&&(this.forms.purchase.quantity=e.missingQuantityArray[0]?.q??null,this.forms.purchase.unit=e.totalNeededArray[0]?.u??"",this.forms.purchase.store=e.storeInfo?.storeName??"",this.forms.purchase.who=kt.userName()??"",this.forms.purchase.status=this.forms.purchase.status||"delivered",this.forms.stock.unit=e.totalNeededArray[0]?.u??"",this.forms.store.name=e.storeInfo?.storeName??"",this.forms.store.comment=e.storeInfo?.storeComment??null,this.forms.who=e.who?[...e.who]:[],this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})}#h=G(()=>this.originalFormsSnapshot?{store:this.forms.store.name!==this.originalFormsSnapshot.store.name||this.forms.store.comment!==this.originalFormsSnapshot.store.comment,stock:this.hasStockChanges(),who:JSON.stringify(this.forms.who)!==JSON.stringify(this.originalFormsSnapshot.whoList)}:{store:!1,stock:!1,who:!1});get hasChanges(){return s(this.#h)}set hasChanges(e){b(this.#h,e)}#p=G(()=>!!(this.originalFormsSnapshot&&(this.hasChanges.store||this.hasChanges.stock||this.hasChanges.who)));get hasAnyChanges(){return s(this.#p)}set hasAnyChanges(e){b(this.#p,e)}hasStockChanges(){return this.isStockFormValid?this.stockParsed?this.forms.stock.quantity.toString()!==this.stockParsed.quantity||this.forms.stock.unit!==this.stockParsed.unit||(this.forms.stock.notes||"")!==(this.stockParsed.notes||""):!0:!1}get isPurchaseFormValid(){return this.forms.purchase.quantity!==null&&this.forms.purchase.quantity!==0&&(this.forms.purchase.unit?.trim()??"")!==""}get isStockFormValid(){return this.forms.stock.quantity!==null&&this.forms.stock.quantity>0&&(this.forms.stock.unit?.trim()??"")!==""}setCurrentTab(e){this.currentTab=e}async addPurchase(){this.product&&await this.withLoading(async()=>{if(!this.forms.purchase.quantity||!this.forms.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!J.currentMainId)throw new Error("mainId non disponible");const{quantity:e,unit:r}=ds(this.forms.purchase.quantity,this.forms.purchase.unit);this.product.isSynced||await zt(this.product.$id,{},i=>J.getEnrichedProductById(i));const a=this.forms.purchase.status||"delivered";let n=this.forms.purchase.deliveryDate||null;a==="delivered"&&!n&&(n=new Date().toISOString()),await qo({products:[this.product.$id],mainId:J.currentMainId,unit:r,quantity:e,store:this.forms.purchase.store||null,who:this.forms.purchase.who||null,notes:this.forms.purchase.notes||"",price:this.forms.purchase.price||null,status:a,orderDate:this.forms.purchase.orderDate||null,deliveryDate:n}),this.forms.purchase={quantity:this.product.missingQuantityArray[0]?.q??null,unit:this.product.totalNeededArray[0]?.u??"",store:this.forms.purchase.store,who:this.forms.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}startEditPurchase(e){this.editingPurchaseId=e.$id}cancelEditPurchase(){this.editingPurchaseId=null}async updateEditedPurchase(e){e.$id&&await this.withLoading(async()=>{const{quantity:r,unit:a}=ds(e.quantity,e.unit),n=e.status||null;let i=e.deliveryDate||null;n==="delivered"&&!i&&(i=new Date().toISOString()),await Ts(e.$id,{unit:a,quantity:r,store:e.store||null,who:e.who||null,notes:e.notes||"",price:e.price||null,status:n,orderDate:e.orderDate||null,deliveryDate:i}),this.editingPurchaseId=null},"Achat modifié avec succès")}async removePurchase(e){const r=this.purchasesList.find(a=>a.$id===e);r&&confirm(`Supprimer cet achat (${r.quantity} ${r.unit}) ?`)&&await this.withLoading(async()=>{await jo(e)},"Achat supprimé avec succès")}async setStock(){this.product&&await this.withLoading(async()=>{if(!this.forms.stock.quantity||!this.forms.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const e={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};this.product.isSynced?await cs(this.product.$id,JSON.stringify(e)):await zt(this.product.$id,{stockReel:JSON.stringify(e)},r=>J.getEnrichedProductById(r)),this.forms.stock.quantity=null,this.forms.stock.notes="",this.forms.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async removeStock(){this.product&&confirm("Supprimer le stock actuel ?")&&await this.withLoading(async()=>{this.product.isSynced?await cs(this.product.$id,null):await zt(this.product.$id,{stockReel:null},e=>J.getEnrichedProductById(e))},"Stock supprimé")}async setWho(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Co(this.product.$id,e):await zt(this.product.$id,{who:e},r=>J.getEnrichedProductById(r))},"Volontaires mis à jour")}async updateStore(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Io(this.product.$id,e):await zt(this.product.$id,{store:JSON.stringify(e)},r=>J.getEnrichedProductById(r))},"Magasin mis à jour")}async setOverride(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await As(this.product.$id,e,!0):await zt(this.product.$id,{totalNeededOverride:JSON.stringify(e)},r=>J.getEnrichedProductById(r))},"Override appliqué")}async removeOverride(){this.product&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await this.withLoading(async()=>{await Oo(this.product.$id,!0)},"Override supprimé")}async saveAllChanges(){!this.product||!this.hasAnyChanges||await this.withLoading(async()=>{const e={};if(this.hasChanges.stock&&this.forms.stock.quantity&&this.forms.stock.unit){const r={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};e.stockReel=JSON.stringify(r)}if(this.hasChanges.who&&(e.who=this.forms.who),this.hasChanges.store){const r={storeName:this.forms.store.name||"",storeComment:this.forms.store.comment||void 0};e.storeInfo=r}Object.keys(e).length>0&&(await Ro(this.product.$id,e,r=>J.getEnrichedProductById(r)),this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})},"Modifications enregistrées")}resetForms(){this.uiStates.overrideManagerEditMode=!1,this.editingPurchaseId=null,this.initForms(),console.log("[ProductModalState] Formulaires et états UI réinitialisés")}async withLoading(e,r){this.loading=!0,this.error=null;try{const a=await e();return r&&this.showToast("success",r),a}catch(a){const n=a instanceof Error?a.message:"Une erreur est survenue";return this.error=n,this.showToast("error",n),console.error("[ProductModalState]",a),null}finally{this.loading=!1}}showToast(e,r){const a=new CustomEvent("toast",{detail:{type:e,message:r}});window.dispatchEvent(a)}formatQuantity=js;formatDate=Ua}var yd=w('<div class="text-xs font-medium text-base-content/60 mb-1"> </div>'),wd=w('<div class="text-xs text-base-content/60 mt-1"> </div>'),Sd=w('<div class="font-medium"> </div> <!>',1),xd=w('<pre class="text-xs"> </pre>'),Pd=w('<span class="text-base-content/50 italic">Non défini</span>'),$d=w('<div class="bg-base-300/50 rounded p-2 text-left"><!> <div class="text-sm"><!></div></div>'),kd=w('<div class="bg-base-200/50 border border-warning/20 rounded-lg p-4 text-center"><div class="flex items-center justify-center gap-2 mb-2"><!> <!> <span class="font-medium text-warning"> </span></div> <p class="text-sm text-base-content/70 mb-3"> </p> <!></div>');function Ha(t,e){K(e,!0);let r=he(e,"title",3,"Événement terminé"),a=he(e,"message",3,"Cet événement est terminé. Ces données ne sont plus modifiables mais sont conservées pour consultation."),n=he(e,"showData",3,!0),i=he(e,"data",3,null),o=he(e,"dataLabel",3,"");var l=kd(),d=c(l),f=c(d);ti(f,{class:"h-5 w-5 text-warning"});var h=u(f,2);pu(h,{class:"h-4 w-4 text-warning/70"});var m=u(h,2),g=c(m),p=u(d,2),_=c(p),y=u(p,2);{var x=S=>{var E=$d(),A=c(E);{var D=L=>{var te=yd(),V=c(te);I(()=>N(V,`${o()??""} :`)),v(L,te)};$(A,L=>{o()&&L(D)})}var k=u(A,2),T=c(k);{var O=L=>{var te=ht();I(()=>N(te,i())),v(L,te)},P=L=>{var te=X(),V=C(te);{var U=ge=>{var Pe=ht();I(H=>N(Pe,H),[()=>i().join(", ")]),v(ge,Pe)},le=ge=>{var Pe=X(),H=C(Pe);{var ce=se=>{var re=X(),me=C(re);{var we=Z=>{var M=Sd(),ae=C(M),R=c(ae),ie=u(ae,2);{var j=ee=>{var de=wd(),$e=c(de);I(()=>N($e,i().storeComment)),v(ee,de)};$(ie,ee=>{i().storeComment&&ee(j)})}I(()=>N(R,i().storeName)),v(Z,M)},F=Z=>{var M=xd(),ae=c(M);I(R=>N(ae,R),[()=>JSON.stringify(i(),null,2)]),v(Z,M)};$(me,Z=>{i().storeName?Z(we):Z(F,!1)})}v(se,re)},ye=se=>{var re=Pd();v(se,re)};$(H,se=>{typeof i()=="object"&&i()!==null?se(ce):se(ye,!1)},!0)}v(ge,Pe)};$(V,ge=>{Array.isArray(i())&&i().length>0?ge(U):ge(le,!1)},!0)}v(L,te)};$(T,L=>{typeof i()=="string"||typeof i()=="number"?L(O):L(P,!1)})}v(S,E)};$(y,S=>{n()&&i()&&S(x)})}I(()=>{N(g,r()),N(_,a())}),v(t,l),Y()}function Ed(t,e){e().isPurchaseFormValid&&(e().forms.purchase.status==="ordered"&&!e().forms.purchase.orderDate&&(e().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),e().addPurchase())}function Ad(t,e,r){const a=e().editingPurchaseData;!a||!r(a)||e().updateEditedPurchase(a)}function Td(t,e){e().cancelEditPurchase()}var Dd=w('<span class="loading loading-spinner loading-sm"></span>'),Md=w('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="space-y-6"><div class="flex flex-wrap items-baseline gap-4"><!> <!> <!> <!></div> <div><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div>'),Nd=w('<div class="mt-4 py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Id=w("<th>Actions</th>"),Cd=w('<span class="loading loading-spinner loading-sm"></span>'),Od=w('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="1" min="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="50"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Acheté</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Rd=(t,e,r)=>e(s(r)),qd=(t,e,r)=>e(s(r).$id),jd=w('<span class="loading loading-spinner loading-sm"></span>'),Ld=w('<td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td>'),Bd=w('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><!></tr>'),zd=w('<div class="mt-4 overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><!></tr></thead><tbody></tbody></table></div>'),Ud=w('<div class="space-y-4"><!></div> <!>',1);function Hd(t,e){K(e,!0);let r=he(e,"modalState",7),a=he(e,"isArchiveMode",3,!1);function n(y){return y.quantity!==null&&y.quantity!==0&&y.unit?.trim()!==""}function i(y){r().removePurchase(y)}function o(y){r().startEditPurchase(y)}var l=Ud(),d=C(l),f=c(d);{var h=y=>{Ha(y,{title:"Achats non modifiables",message:"L'événement est terminé, les achats ne peuvent plus être ajoutés ou modifiés."})},m=y=>{var x=Md(),S=c(x),E=u(c(S),2),A=c(E),D=c(A);za(D,{get disabled(){return r().loading},get quantity(){return r().forms.purchase.quantity},set quantity(H){r().forms.purchase.quantity=H},get unit(){return r().forms.purchase.unit},set unit(H){r().forms.purchase.unit=H}});var k=u(D,2);qs(k,{get disabled(){return r().loading},get value(){return r().forms.purchase.price},set value(H){r().forms.purchase.price=H}});var T=u(k,2);Ur(T,{get suggestions(){return J.uniqueStores},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.store},set value(H){r().forms.purchase.store=H}});var O=u(T,2);la(O,{get suggestions(){return J.uniqueWho},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.who},set value(H){r().forms.purchase.who=H}});var P=u(A,2),L=c(P);Hr(L,{get disabled(){return r().loading},get value(){return r().forms.purchase.notes},set value(H){r().forms.purchase.notes=H}});var te=u(P,2);ci(te,{get disabled(){return r().loading},get status(){return r().forms.purchase.status},set status(H){r().forms.purchase.status=H},get deliveryDate(){return r().forms.purchase.deliveryDate},set deliveryDate(H){r().forms.purchase.deliveryDate=H}});var V=u(E,2),U=c(V);U.__click=[Ed,r];var le=c(U);{var ge=H=>{var ce=Dd();v(H,ce)},Pe=H=>{var ce=ht("Ajouter l'achat");v(H,ce)};$(le,H=>{r().loading?H(ge):H(Pe,!1)})}I(()=>U.disabled=r().loading||!r().isPurchaseFormValid),v(y,x)};$(f,y=>{a()?y(h):y(m,!1)})}var g=u(d,2);{var p=y=>{var x=Nd(),S=c(x);_r(S,{class:"mx-auto mb-2 h-12 w-12"}),v(y,x)},_=y=>{var x=zd(),S=c(x),E=c(S),A=c(E),D=u(c(A),8);{var k=O=>{var P=Id();v(O,P)};$(D,O=>{a()||O(k)})}var T=u(E);et(T,21,()=>r().purchasesList,O=>O.$id,(O,P,L)=>{var te=X(),V=C(te);{var U=ge=>{var Pe=Od(),H=c(Pe),ce=c(H),ye=c(ce),se=u(ye,2),re=c(se);re.value=re.__value="kg";var me=u(re);me.value=me.__value="gr.";var we=u(me);we.value=we.__value="l.";var F=u(we);F.value=F.__value="ml";var Z=u(F);Z.value=Z.__value="unité";var M=u(Z);M.value=M.__value="bottes";var ae=u(H),R=c(ae),ie=u(ae),j=c(ie),ee=u(ie),de=c(ee),$e=c(de);$e.value=$e.__value="ordered";var z=u($e);z.value=z.__value="delivered";var Q=u(ee),ne=c(Q),ke=u(Q),ve=c(ke),Re=u(ke),W=c(Re),be=u(Re),Ue=c(be),Be=u(be),Ve=c(Be),Ce=c(Ve);Ce.__click=[Ad,r,n];var Ze=c(Ce);{var qt=Ae=>{var Ye=Cd();v(Ae,Ye)},Ee=Ae=>{$u(Ae,{class:"h-3 w-3"})};$(Ze,Ae=>{r().loading?Ae(qt):Ae(Ee,!1)})}var Me=u(Ce,2);Me.__click=[Td,r];var Le=c(Me);Mt(Le,{class:"h-3 w-3"}),I(Ae=>Ce.disabled=Ae,[()=>r().loading||!n(s(P))]),Qe(ye,()=>s(P).quantity,Ae=>s(P).quantity=Ae),$a(se,()=>s(P).unit,Ae=>s(P).unit=Ae),Qe(R,()=>s(P).store,Ae=>s(P).store=Ae),Qe(j,()=>s(P).who,Ae=>s(P).who=Ae),$a(de,()=>s(P).status,Ae=>s(P).status=Ae),Qe(ne,()=>s(P).orderDate,Ae=>s(P).orderDate=Ae),Qe(ve,()=>s(P).deliveryDate,Ae=>s(P).deliveryDate=Ae),Qe(W,()=>s(P).price,Ae=>s(P).price=Ae),Qe(Ue,()=>s(P).notes,Ae=>s(P).notes=Ae),v(ge,Pe)},le=ge=>{var Pe=Bd(),H=c(Pe),ce=c(H),ye=u(H),se=c(ye),re=u(ye),me=c(re),we=u(re),F=c(we),Z=c(F),M=u(we),ae=c(M),R=u(M),ie=c(R),j=u(R),ee=c(j),de=u(j),$e=c(de),z=u(de);{var Q=ne=>{var ke=Ld(),ve=c(ke),Re=c(ve);Re.__click=[Rd,o,P];var W=c(Re);ea(W,{class:"h-4 w-4"});var be=u(Re,2);be.__click=[qd,i,P];var Ue=c(be);{var Be=Ce=>{var Ze=jd();v(Ce,Ze)},Ve=Ce=>{Mt(Ce,{class:"h-4 w-4"})};$(Ue,Ce=>{r().loading?Ce(Be):Ce(Ve,!1)})}I(()=>be.disabled=r().loading),v(ne,ke)};$(z,ne=>{a()||ne(Q)})}I((ne,ke,ve,Re,W)=>{N(ce,ne),N(se,s(P).store||"-"),N(me,s(P).who||"-"),Te(F,1,`badge badge-sm ${ke??""}`),N(Z,ve),N(ae,Re),N(ie,W),N(ee,s(P).price?`${s(P).price}€`:"-"),N($e,s(P).notes||"-")},[()=>js(s(P).quantity,s(P).unit),()=>vs(s(P).status).class,()=>vs(s(P).status).text,()=>kn(s(P).orderDate),()=>kn(s(P).deliveryDate)]),v(ge,Pe)};$(V,ge=>{r().editingPurchaseId===s(P).$id?ge(U):ge(le,!1)})}v(O,te)}),v(y,x)};$(g,y=>{r().purchasesList.length===0?y(p):y(_,!1)})}v(t,l),Y()}Ge(["click"]);async function Wd(t,e){await e()?.removeStock()}var Qd=w(`Le stock réel est la quantité réelle du produit constaté dans le
            stock: <strong>il sera utilisé pour le calcul des quantités manquantes à se
              fournir à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantités manquantes à se fournir.`,1),Gd=(t,e)=>{e().forms.stock.quantity=null,e().forms.store.comment=""},Vd=w('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><!></div> <div><!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>'),Fd=w('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Kd=w('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),Yd=w('<span class="loading loading-spinner loading-xs"></span>'),Jd=w('<div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div>'),Zd=w('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <!></div></div>'),Xd=w('<div class="space-y-4"><!></div> <!>',1);function ev(t,e){K(e,!0);let r=he(e,"modalState",7),a=he(e,"isArchiveMode",3,!1);var n=Xd(),i=C(n),o=c(i);{var l=g=>{Ha(g,{title:"Stock non modifiable",message:"L'événement est terminé, le stock ne peut plus être modifié.",get data(){return r().stockParsed},dataLabel:"Stock actuel"})},d=g=>{var p=Vd(),_=c(p),y=c(_),x=c(y),S=u(y,2),E=c(S);li(E,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(L,te)=>{var V=Qd();v(L,V)},$$slots:{default:!0}});var A=u(S,2),D=c(A);za(D,{get disabled(){return r().loading},get quantity(){return r().forms.stock.quantity},set quantity(L){r().forms.stock.quantity=L},get unit(){return r().forms.stock.unit},set unit(L){r().forms.stock.unit=L}});var k=u(A,2),T=c(k);Hr(T,{get disabled(){return r().loading},get value(){return r().forms.stock.notes},set value(L){r().forms.stock.notes=L}});var O=u(k,2),P=c(O);P.__click=[Gd,r],I(L=>{N(x,`Déclarer le stock réel du ${L??""}`),P.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),v(g,p)};$(o,g=>{a()?g(l):g(d,!1)})}var f=u(i,2);{var h=g=>{var p=Fd(),_=c(p);Yo(_,{class:"mx-auto mb-2 h-12 w-12"}),v(g,p)},m=g=>{var p=Zd(),_=c(p),y=u(c(_),2),x=c(y),S=u(c(x),2),E=c(S),A=u(x,2),D=u(c(A),2),k=c(D),T=u(A,2);{var O=te=>{var V=Kd(),U=u(c(V),2),le=c(U);I(()=>N(le,r().stockParsed.notes)),v(te,V)};$(T,te=>{r().stockParsed.notes&&te(O)})}var P=u(y,2);{var L=te=>{var V=Jd(),U=c(V);U.__click=[Wd,r];var le=c(U);{var ge=H=>{var ce=Yd();v(H,ce)},Pe=H=>{var ce=ht("Supprimer le stock");v(H,ce)};$(le,H=>{r().loading?H(ge):H(Pe,!1)})}I(()=>U.disabled=r().loading),v(te,V)};$(P,te=>{a()||te(L)})}I(te=>{N(E,`${r().stockParsed.quantity??""}
            ${r().stockParsed.unit??""}`),N(k,te)},[()=>Ua(r().stockParsed.dateTime)]),v(g,p)};$(f,g=>{r().stockParsed?g(m,!1):g(h)})}v(t,n),Y()}Ge(["click"]);function tv(t,e,r){e().forms.who=[...e().whoList],b(r,"")}var rv=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},av=w('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div>'),sv=w('<div class="space-y-4"><!></div>');function nv(t,e){K(e,!0);let r=he(e,"modalState",7),a=he(e,"isArchiveMode",3,!1),n=B("");const i=G(()=>{const _=new Set([...J.uniqueWho,...r().forms.who]);return Array.from(_).map(y=>({id:y,label:y,selected:r().forms.who.includes(y)}))});function o(_){const y=_.trim();y&&!r().forms.who.includes(y)&&(r().forms.who=[...r().forms.who,y])}function l(_){r().forms.who=r().forms.who.filter(y=>y!==_)}function d(_){r().forms.who.includes(_)?l(_):o(_)}function f(){s(n).trim()&&(o(s(n)),b(n,""))}var h=sv(),m=c(h);{var g=_=>{Ha(_,{title:"Volontaires non modifiables",message:"L'événement est terminé, les volontaires assignés ne peuvent plus être modifiés."})},p=_=>{var y=av(),x=c(y),S=u(c(x),4),E=c(S),A=c(E),D=c(A);Os(D,{class:"h-4 w-4 opacity-50"});var k=u(D,2);k.__keydown=[rv,f];var T=u(A,2);T.__click=f;var O=c(T);oi(O,{size:16});var P=u(E,2),L=u(c(P),2);ta(L,{get items(){return s(i)},onToggleItem:d,showIcon:!0,badgeSize:"btn-sm"});var te=u(x,2),V=c(te);V.__click=[tv,r,n],I(U=>{k.disabled=r().loading,T.disabled=U,V.disabled=r().loading},[()=>r().loading||!s(n).trim()]),Qe(k,()=>s(n),U=>b(n,U)),v(_,y)};$(m,_=>{a()?_(g):_(p,!1)})}v(t,h),Y()}Ge(["keydown","click"]);var ov=(t,e)=>{e().forms.store.name="",e().forms.store.comment=""},iv=w(`<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`),lv=w('<div class="space-y-4"><!></div>');function cv(t,e){K(e,!0);let r=he(e,"modalState",7),a=he(e,"isArchiveMode",3,!1);const n=G(()=>r()?.hasChanges?.store||!1);async function i(){if(!s(n))return;const h={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(h)}var o=lv(),l=c(o);{var d=h=>{{let m=G(()=>r().product?.storeInfo);Ha(h,{title:"Magasin non modifiable",message:"L'événement est terminé, les informations de magasin ne peuvent plus être modifiées.",get data(){return s(m)},dataLabel:"Magasin actuel"})}},f=h=>{var m=iv(),g=c(m),p=u(c(g),4),_=c(p),y=c(_);Ur(y,{get suggestions(){return J.uniqueStores},get disabled(){return r().loading},onkeydown:A=>{A.key==="Enter"&&i()},get value(){return r().forms.store.name},set value(A){r().forms.store.name=A}});var x=u(_,2);Hr(x,{get disabled(){return r().loading},get value(){return r().forms.store.comment},set value(A){r().forms.store.comment=A}});var S=u(p,2),E=c(S);E.__click=[ov,r],I(()=>E.disabled=r().loading),v(h,m)};$(l,h=>{a()?h(d):h(f,!1)})}v(t,o),Y()}Ge(["click"]);var uv=w('<label class="input w-96"><!> <input type="text" placeholder="Commentaire (optionnel)" maxlength="250"/></label>');function dv(t,e){K(e,!0);let r=he(e,"value",15);he(e,"disabled",3,!1);var a=uv(),n=c(a);ai(n,{size:20,class:"text-base-centent/70"});var i=u(n,2);Qe(i,r),v(t,a),Y()}function vv(t){const e=t-1;return e*e*e+1}function ui(t,{delay:e=0,duration:r=400,easing:a=vv,axis:n="y"}={}){const i=getComputedStyle(t),o=+i.opacity,l=n==="y"?"height":"width",d=parseFloat(i[l]),f=n==="y"?["top","bottom"]:["left","right"],h=f.map(S=>`${S[0].toUpperCase()}${S.slice(1)}`),m=parseFloat(i[`padding${h[0]}`]),g=parseFloat(i[`padding${h[1]}`]),p=parseFloat(i[`margin${h[0]}`]),_=parseFloat(i[`margin${h[1]}`]),y=parseFloat(i[`border${h[0]}Width`]),x=parseFloat(i[`border${h[1]}Width`]);return{delay:e,duration:r,easing:a,css:S=>`overflow: hidden;opacity: ${Math.min(S*20,1)*o};${l}: ${S*d}px;padding-${f[0]}: ${S*m}px;padding-${f[1]}: ${S*g}px;margin-${f[0]}: ${S*p}px;margin-${f[1]}: ${S*_}px;border-${f[0]}-width: ${S*y}px;border-${f[1]}-width: ${S*x}px;min-${l}: 0`}}async function fv(t,e,r,a,n){if(!e())return;const i={totalOverride:{q:s(r),u:s(a)},comment:s(n)};await e().setOverride(i),e().uiStates.overrideManagerEditMode=!1}async function hv(t,e){e()&&(await e().removeOverride(),e().uiStates.overrideManagerEditMode=!1)}var pv=w('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Ancienne quantité calculée</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),gv=w('<div class="stat-desc italic">Recettes actuelles</div>'),mv=w('<div class="chat-bubble relative ms-auto mt-2 text-sm"> <!></div>'),_v=w('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins redéfinie manuellement</div> <div class="stat-value text-content-base/70 text-end text-lg"> </div> <!></div>'),bv=(t,e)=>e().uiStates.overrideManagerEditMode=!0,yv=w('<div class="ms-auto mt-auto"><button class="btn btn-primary btn-sm btn-soft"><!> <!></button></div>'),wv=(t,e)=>e().uiStates.overrideManagerEditMode=!1,Sv=w('<span class="loading loading-spinner loading-sm"></span>'),xv=w('<span class="loading loading-spinner loading-sm"></span>'),Pv=w('<div class="mt-4 flex flex-wrap items-center gap-4"><!> <!> <div class="ms-auto"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div></div>'),$v=w('<div class="mb-2 space-y-4"><div class="bg-base-200 relative mb-4 flex rounded-xl p-4"><div class="grid"><div class="flex gap-4"><!> <div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins calculées</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="ms-auto flex flex-wrap gap-4"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div> <!></div> <!> <!></div> <!></div></div></div>');function kv(t,e){K(e,!0);let r=he(e,"modalState",7);const a=G(()=>r().product?.totalNeededOverrideParsed),n=G(()=>r().product?.displayTotalOverride);let i=G(()=>s(a)?.hasUnresolvedChangedSinceOverride),o=G(()=>r().uiStates.overrideManagerEditMode),l=B(qe(r().product?.totalNeededOverrideParsed?.totalOverride.q||r().product?.totalNeededArray[0]?.q||0)),d=B(qe(r().product?.totalNeededOverrideParsed?.totalOverride.u||r().product?.totalNeededArray[0]?.u||"")),f=B(qe(r().product?.totalNeededOverrideParsed?.comment||"")),h=G(()=>s(l)>0&&s(d).trim()!=="");var m=X(),g=C(m);{var p=_=>{var y=$v(),x=c(y),S=c(x),E=c(S),A=c(E);{var D=F=>{var Z=pv(),M=u(c(Z),2),ae=c(M);I(()=>N(ae,s(a)?.oldTotalDisplay)),v(F,Z)};$(A,F=>{s(a)?.oldTotalDisplay&&s(i)&&F(D)})}var k=u(A,2),T=u(c(k),2),O=c(T),P=u(T,2),L=c(P),te=c(L),V=u(te);La(V,{class:"h-3 w-3"});var U=u(L,2),le=c(U),ge=u(le);ii(ge,{class:"h-3 w-3"});var Pe=u(P,2);{var H=F=>{var Z=gv();v(F,Z)};$(Pe,F=>{s(a)?.oldTotalDisplay&&s(i)&&F(H)})}var ce=u(k,2);{var ye=F=>{var Z=_v(),M=u(c(Z),2),ae=c(M),R=u(M,2);{var ie=j=>{var ee=mv(),de=c(ee),$e=u(de);ai($e,{size:16,class:"text-base-content/60 absolute right-1 bottom-1 "}),I(()=>N(de,`${s(a).comment??""} `)),v(j,ee)};$(R,j=>{s(a).comment&&j(ie)})}I(()=>N(ae,s(n))),v(F,Z)};$(ce,F=>{s(n)&&s(a)&&F(ye)})}var se=u(ce,2);{var re=F=>{var Z=yv(),M=c(Z);M.__click=[bv,r];var ae=c(M);{var R=ee=>{var de=ht("Redéfinir les besoins");v(ee,de)},ie=ee=>{var de=ht("Définir manuellement les besoins");v(ee,de)};$(ae,ee=>{s(a)?ee(R):ee(ie,!1)})}var j=u(ae,2);ea(j,{size:16}),v(F,Z)};$(se,F=>{!e.isArchiveMode&&!s(o)&&F(re)})}var me=u(E,2);{var we=F=>{var Z=Pv(),M=c(Z);za(M,{get quantity(){return s(l)},set quantity(ve){b(l,ve,!0)},get unit(){return s(d)},set unit(ve){b(d,ve,!0)}});var ae=u(M,2);dv(ae,{get value(){return s(f)},set value(ve){b(f,ve,!0)}});var R=u(ae,2),ie=c(R);ie.__click=[wv,r];var j=u(ie,2);j.__click=[hv,r];var ee=c(j);{var de=ve=>{var Re=Sv();v(ve,Re)},$e=ve=>{var Re=ht();I(()=>N(Re,`Réinitialiser le total calculé (${r().product.displayTotalNeeded??""}).`)),v(ve,Re)};$(ee,ve=>{r().loading?ve(de):ve($e,!1)})}var z=u(j,2);z.__click=[fv,r,l,d,f];var Q=c(z);{var ne=ve=>{var Re=xv();v(ve,Re)},ke=ve=>{var Re=ht("Appliquer");v(ve,Re)};$(Q,ve=>{r().loading?ve(ne):ve(ke,!1)})}I(()=>{j.disabled=r().loading,z.disabled=r().loading||!s(h)}),So(1,Z,()=>ui),v(F,Z)};$(me,F=>{s(o)&&F(we)})}I(()=>{N(O,r().product.displayTotalNeeded),N(te,`${r().product.nbRecipes??""} `),N(le,`${r().product.totalAssiettes??""} `)}),v(_,y)};$(g,_=>{r().product&&_(p)})}v(t,m),Y()}Ge(["click"]);var Ev=w('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Av=w('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Tv=w('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Dv=w('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Mv(t,e){K(e,!0);const r=G(()=>e.modalState.recipes);var a=Dv(),n=C(a);kv(n,{get modalState(){return e.modalState},get isArchiveMode(){return e.isArchiveMode}});var i=u(n,2),o=c(i),l=c(o);La(l,{class:"h-5 w-5"});var d=u(o,2);{var f=m=>{var g=Ev(),p=c(g);Ba(p,{class:"mx-auto mb-2 h-12 w-12"}),v(m,g)},h=m=>{var g=Tv(),p=c(g),_=u(c(p));et(_,21,()=>s(r),yr,(y,x)=>{var S=Av(),E=c(S),A=c(E),D=u(E),k=c(D),T=u(D),O=c(T);I(P=>{N(A,`${s(x).r??""} (${(s(x).a||"-")??""} c.)`),N(k,`${(s(x).q||s(x).qEq)??""} ${(s(x).u||s(x).uEq)??""}`),N(O,P)},[()=>Ua(s(x).date)]),v(y,S)}),v(m,g)};$(d,m=>{s(r).length===0?m(f):m(h,!1)})}v(t,a),Y()}function Nv(t,e,r){s(e)?.saveAllChanges().then(()=>{s(e)?.resetForms(),r.onClose()})}function En(t,e,r){s(e)?.resetForms(),r.onClose()}var Iv=w('<div class="alert alert-warning py-0.5"><!> <span class="font-medium">Mode consultation</span> <span>Événement terminé</span></div>'),Cv=w('<div class="text-xl font-bold"> </div> <!> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Ov=w('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Rv=(t,e)=>e("recettes"),qv=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),jv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Lv=(t,e)=>e("magasins"),Bv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),zv=(t,e)=>e("volontaires"),Uv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Hv=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Wv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Qv=(t,e)=>e("stock"),Gv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Vv=w('<span class="badge badge-sm badge-secondary ml-1">1</span>'),Fv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Kv=(t,e)=>e("achats"),Yv=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Jv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Zv=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Xv=w('<span class="loading loading-spinner loading-sm"></span>'),ef=w('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),tf=w('<div id="product_modal"><div class="modal-box fixed top-0 flex h-lvh w-lvw flex-col overflow-auto md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function rf(t,e){K(e,!0);let r=he(e,"initialTab",3,"recettes"),a=B(null);Kt(()=>{b(a,new bd(e.productId,r()),!0)});let n=G(()=>J.isEventPassed);function i(x){s(a)?.setCurrentTab(x)}var o=tf(),l=c(o),d=c(l),f=c(d);{var h=x=>{var S=Cv(),E=C(S),A=c(E),D=u(E,2);{var k=V=>{var U=Iv(),le=c(U);ti(le,{class:"h-4 w-4"}),v(V,U)};$(D,V=>{s(a)&&s(n)&&V(k)})}var T=u(D,2),O=c(T),P=c(O),L=u(O,2),te=u(c(L));I(()=>{N(A,s(a).product?.productName),N(P,s(a).product?.productType),N(te,` ${s(a).product?.displayTotalNeeded??""}`)}),v(x,S)},m=x=>{var S=Ov();v(x,S)};$(f,x=>{s(a)&&s(a).product?x(h):x(m,!1)})}var g=u(f,2);g.__click=[En,a,e];var p=c(g);Mt(p,{class:"h-4 w-4"});var _=u(d,2);{var y=x=>{var S=ef(),E=C(S),A=c(E);A.__click=[Rv,i];var D=c(A);La(D,{class:"mr-1 h-5 w-5"});var k=u(D,2);{var T=W=>{var be=qv(),Ue=c(be);I(()=>N(Ue,s(a).product?.nbRecipes)),v(W,be)},O=W=>{var be=jv();v(W,be)};$(k,W=>{s(a).product?.nbRecipes&&s(a).product?.nbRecipes>0?W(T):W(O,!1)})}var P=u(A,2);P.__click=[Lv,i];var L=c(P);hr(L,{class:"mr-1 h-5 w-5"});var te=u(L,2);{var V=W=>{var be=Bv();v(W,be)};$(te,W=>{s(a).hasChanges?.store&&W(V)})}var U=u(P,2);U.__click=[zv,i];var le=c(U);ba(le,{class:"mr-1 h-5 w-5"});var ge=u(le,2);{var Pe=W=>{var be=Uv();v(W,be)},H=W=>{var be=X(),Ue=C(be);{var Be=Ce=>{var Ze=Hv(),qt=c(Ze);I(()=>N(qt,s(a).product?.who.length)),v(Ce,Ze)},Ve=Ce=>{var Ze=Wv();v(Ce,Ze)};$(Ue,Ce=>{s(a).product?.who&&s(a).product?.who.length>0?Ce(Be):Ce(Ve,!1)},!0)}v(W,be)};$(ge,W=>{s(a).hasChanges?.who?W(Pe):W(H,!1)})}var ce=u(U,2);ce.__click=[Qv,i];var ye=c(ce);Yo(ye,{class:"mr-1 h-5 w-5"});var se=u(ye,2);{var re=W=>{var be=Gv();v(W,be)},me=W=>{var be=X(),Ue=C(be);{var Be=Ce=>{var Ze=Vv();v(Ce,Ze)},Ve=Ce=>{var Ze=Fv();v(Ce,Ze)};$(Ue,Ce=>{s(a).stockParsed?Ce(Be):Ce(Ve,!1)},!0)}v(W,be)};$(se,W=>{s(a).hasChanges?.stock?W(re):W(me,!1)})}var we=u(ce,2);we.__click=[Kv,i];var F=c(we);_r(F,{class:"mr-1 h-5 w-5"});var Z=u(F,2);{var M=W=>{var be=Yv(),Ue=c(be);I(()=>N(Ue,s(a).purchasesList.length)),v(W,be)},ae=W=>{var be=Jv();v(W,be)};$(Z,W=>{s(a).purchasesList.length>0?W(M):W(ae,!1)})}var R=u(E,2),ie=c(R);{var j=W=>{var be=Zv(),Ue=c(be);Mt(Ue,{class:"h-4 w-4"});var Be=u(Ue,2),Ve=c(Be);I(()=>N(Ve,`erreur : ${s(a).error??""}`)),v(W,be)};$(ie,W=>{s(a).error&&W(j)})}var ee=u(ie,2),de=c(ee);jl(de,()=>s(a).currentTab,W=>{var be=X(),Ue=C(be);{var Be=Ce=>{Mv(Ce,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},Ve=Ce=>{var Ze=X(),qt=C(Ze);{var Ee=Le=>{Hd(Le,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},Me=Le=>{var Ae=X(),Ye=C(Ae);{var it=tt=>{ev(tt,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},st=tt=>{var vt=X(),bt=C(vt);{var yt=lt=>{nv(lt,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},jt=lt=>{var Nt=X(),cr=C(Nt);{var ue=pe=>{cv(pe,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})};$(cr,pe=>{s(a).currentTab==="magasins"&&pe(ue)},!0)}v(lt,Nt)};$(bt,lt=>{s(a).currentTab==="volontaires"?lt(yt):lt(jt,!1)},!0)}v(tt,vt)};$(Ye,tt=>{s(a).currentTab==="stock"?tt(it):tt(st,!1)},!0)}v(Le,Ae)};$(qt,Le=>{s(a).currentTab==="achats"?Le(Ee):Le(Me,!1)},!0)}v(Ce,Ze)};$(Ue,Ce=>{s(a).currentTab==="recettes"?Ce(Be):Ce(Ve,!1)})}v(W,be)});var $e=u(R,2),z=c($e);z.__click=[En,a,e];var Q=c(z),ne=u(z,2);ne.__click=[Nv,a,e];var ke=c(ne);{var ve=W=>{var be=Xv();v(W,be)},Re=W=>{var be=ht("Tout enregistrer");v(W,be)};$(ke,W=>{s(a).loading?W(ve):W(Re,!1)})}I(()=>{Te(A,1,`tab ${s(a).currentTab==="recettes"?"tab-active":""}`),Te(P,1,`tab ${s(a).currentTab==="magasins"?"tab-active":""}`),Te(U,1,`tab ${s(a).currentTab==="volontaires"?"tab-active":""}`),Te(ce,1,`tab ${s(a).currentTab==="stock"?"tab-active":""}`),Te(we,1,`tab ${s(a).currentTab==="achats"?"tab-active":""}`),N(Q,s(a)?.hasAnyChanges?"Annuler":"Fermer"),ne.disabled=s(a).loading||!s(a).hasAnyChanges}),v(x,S)};$(_,x=>{s(a)&&x(y)})}I(()=>Te(o,1,`modal ${(e.productId&&"modal-open")??""}`)),v(t,o),Y()}Ge(["click"]);var af=(t,e,r)=>e(r),sf=w("<button><span> </span> <!></button>"),nf=w('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),of=(t,e)=>e.dateStore.selectUpcoming(),lf=(t,e)=>e.dateStore.selectAll(),cf=w('<div class="join my-2 ms-auto"><button type="button" name="options" aria-label=" Dates à venir">Dates à venir</button> <button type="button" name="options" aria-label=" Toutes les dates">Toutes les dates</button></div>'),uf=w('<div class="mb-2 flex flex-wrap gap-2"></div> <!>',1);function df(t,e){K(e,!0);let r=G(()=>e.dateStore.start),a=G(()=>e.dateStore.end),n=B(null);function i(p){s(r)&&new Date(p)<new Date(s(r))?e.dateStore.setRange(p,s(a)):s(a)&&new Date(p)>new Date(s(a))?e.dateStore.setRange(s(r),p):e.dateStore.setRange(p,p)}function o(p){return!s(r)||!s(a)?{start:null,end:null}:s(r)&&new Date(p)<new Date(s(r))?{start:p,end:s(a)}:s(a)&&new Date(p)>new Date(s(a))?{start:s(r),end:p}:{start:p,end:p}}function l(p){let _="";if(!s(r)||!s(a))return;const y=new Date(p)>=new Date(s(r))&&new Date(p)<=new Date(s(a)),x=e.dateStore.start&&new Date(p)<=new Date;let S=!1;if(s(n)){const E=o(s(n));E.start&&E.end&&(S=new Date(p)>=new Date(E.start)&&new Date(p)<=new Date(E.end))}return x&&(_+=" opacity-70 italic"),y||(_+=" btn-dash"),S&&!y&&(_+=" btn-soft"),_}var d=uf(),f=C(d);et(f,20,()=>e.dateStore.dates,p=>p,(p,_)=>{var y=sf();y.__click=[af,i,_];var x=c(y),S=c(x),E=u(x,2);{var A=k=>{Cs(k,{size:16})},D=k=>{var T=X(),O=C(T);{var P=te=>{Ms(te,{size:16})},L=te=>{var V=X(),U=C(V);{var le=ge=>{Xo(ge,{size:16})};$(U,ge=>{_a(_)==="cloud"&&ge(le)},!0)}v(te,V)};$(O,te=>{_a(_)==="moon"?te(P):te(L,!1)},!0)}v(k,T)};$(E,k=>{_a(_)==="sun"?k(A):k(D,!1)})}I((k,T)=>{Te(y,1,`btn btn-sm btn-secondary ${k??""}`),N(S,T)},[()=>l(_),()=>kc(_)]),Mr("mouseenter",y,()=>b(n,_,!0)),Mr("mouseleave",y,()=>b(n,null)),v(p,y)});var h=u(f,2);{var m=p=>{var _=nf();v(p,_)},g=p=>{var _=cf(),y=c(_);y.__click=[of,e];var x=u(y,2);x.__click=[lf,e],I(()=>{Te(y,1,`join-item btn btn-sm ${e.dateStore.isUpcomingRange?"btn-soft btn-secondary":"btn-ghost"}`),Te(x,1,`join-item btn btn-sm ${e.dateStore.isFullRange?"btn-soft btn-secondary":"btn-ghost"}`)}),v(p,_)};$(h,p=>{e.dateStore.isEventPassed?p(m):p(g,!1)})}v(t,d),Y()}Ge(["click"]);var vf=w("<fieldset><legend><!> </legend> <!></fieldset>");function pa(t,e){let r=he(e,"bgClass",3,"bg-base-100");var a=vf(),n=c(a),i=c(n);{var o=f=>{const h=G(()=>e.iconComponent);var m=X(),g=C(m);mr(g,()=>s(h),(p,_)=>{_(p,{size:16,class:"mr-1"})}),v(f,m)};$(i,f=>{e.iconComponent&&f(o)})}var l=u(i),d=u(n,2);fe(d,()=>e.children??oe),I(()=>{Te(a,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Te(n,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),N(l,` ${e.legend??""}`)}),v(t,a)}var ff=()=>J.clearFilters(),hf=t=>J.setSearchQuery(t.currentTarget.value),pf=()=>J.setSearchQuery(""),gf=()=>J.setGroupBy("none"),mf=()=>J.setGroupBy("store"),_f=()=>J.setGroupBy("productType"),bf=w(`<div class="alert alert-warning">Cette période contient des dates passées. Les achats ne sont plus
          possibles pour ces dates.</div>`),yf=w("<!> <!>",1),wf=(t,e)=>J.toggleProductType(e),Sf=w("<button><!> </button>"),xf=()=>J.toggleTemperature("frais"),Pf=()=>J.toggleTemperature("surgele"),$f=()=>J.clearTypeAndTemperatureFilters(),kf=w('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),Ef=w('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),Af=w('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button title="Filtrer les légumes ou produits à conserver au frais"><!> Frais</button> <button title="Filtrer les roduits à concerver au congélateur"><!> Surgelés</button></div> <!>',1),Tf=(t,e)=>J.toggleStore(e),Df=w("<button> </button>"),Mf=()=>J.clearStoreFilters(),Nf=w('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),If=w('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Cf=(t,e)=>J.toggleWho(e),Of=w("<button> </button>"),Rf=()=>J.clearWhoFilters(),qf=w('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),jf=w('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Lf=w('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4 flex flex-col"><label class="label flex" for="grouping-select"><span class="label-text">Groupement par:</span></label> <div class=" bg-base-100 flex gap-1 rounded-xl p-2 font-semibold" id="grouping-select"><button type="button" aria-label="Aucun">Aucun</button> <button type="button" aria-label="Par magasin">Magasins</button> <button type="button" aria-label="Par type">Type</button></div></div> <!> <!> <!> <!></div>',1);function Bf(t,e){K(e,!0);const r=G(()=>J.filters),a=G(()=>J.uniqueStores),n=G(()=>J.uniqueWho),i=G(()=>J.uniqueProductTypes);var o=Lf(),l=C(o),d=c(l),f=c(d);ei(f,{class:"h-5 w-5"});var h=u(d,2);h.__click=[ff];var m=c(h);ha(m,{class:"h-4 w-4"});var g=u(l,2),p=c(g),_=u(c(p),2),y=c(_);ku(y,{class:"h-4 w-4"});var x=u(y,2);x.__input=[hf];var S=u(x,2);S.__click=[pf];var E=c(S);Mt(E,{class:"h-4 w-4"});var A=u(p,2),D=u(c(A),2),k=c(D);k.__click=[gf];var T=u(k,2);T.__click=[mf];var O=u(T,2);O.__click=[_f];var P=u(A,2);{var L=H=>{pa(H,{legend:"Date incluses",bgClass:"bg-base-100",children:(ce,ye)=>{var se=yf(),re=C(se);df(re,{get dateStore(){return J.dateStore}});var me=u(re,2);{var we=F=>{var Z=bf();So(3,Z,()=>ui),v(F,Z)};$(me,F=>{J.hasPastDatesInRange&&F(we)})}v(ce,se)},$$slots:{default:!0}})};$(P,H=>{J.hasSingleDateEvent||H(L)})}var te=u(P,2);{var V=H=>{pa(H,{legend:"Types & Température",get iconComponent(){return ni},children:(ce,ye)=>{var se=Af(),re=C(se);et(re,20,()=>s(i),j=>j,(j,ee)=>{const de=G(()=>us(ee));var $e=Sf();$e.__click=[wf,ee];var z=c($e);mr(z,()=>s(de).icon,(ne,ke)=>{ke(ne,{class:"mr-1 h-5 w-5"})});var Q=u(z);I(ne=>{Te($e,1,`btn btn-sm ${ne??""}`),N(Q,` ${s(de).displayName??""}`)},[()=>s(r).selectedProductTypes.length===0?"btn-soft btn-secondary":s(r).selectedProductTypes.includes(ee)?"btn-secondary":"btn-dash btn-secondary"]),v(j,$e)});var me=u(re,2),we=c(me);we.__click=[xf];var F=c(we);si(F,{class:"h-5 w-5"});var Z=u(we,2);Z.__click=[Pf];var M=c(Z);Is(M,{class:"h-5 w-5"});var ae=u(me,2);{var R=j=>{var ee=kf();ee.__click=[$f];var de=c(ee);ha(de,{size:16}),v(j,ee)},ie=j=>{var ee=Ef();v(j,ee)};$(ae,j=>{s(r).selectedProductTypes.length>0||s(r).selectedTemperatures.length>0?j(R):j(ie,!1)})}I((j,ee)=>{Te(we,1,`btn btn-sm ${j??""}`),Te(Z,1,`btn btn-sm ${ee??""}`)},[()=>s(r).selectedTemperatures.length===0?"btn-soft btn-success":s(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(r).selectedTemperatures.length===0?"btn-soft btn-info":s(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),v(ce,se)},$$slots:{default:!0}})};$(te,H=>{s(i).length>0&&H(V)})}var U=u(te,2);{var le=H=>{pa(H,{legend:"Magasins",get iconComponent(){return hr},children:(ce,ye)=>{var se=If(),re=c(se);et(re,16,()=>s(a),F=>F,(F,Z)=>{var M=Df();M.__click=[Tf,Z];var ae=c(M);I(R=>{Te(M,1,`btn btn-sm ${R??""}`),N(ae,Z)},[()=>s(r).selectedStores.length===0?"btn-soft btn-secondary":s(r).selectedStores.includes(Z)?"btn-secondary":"btn-dash btn-secondary"]),v(F,M)});var me=u(re,2);{var we=F=>{var Z=Nf();Z.__click=[Mf];var M=c(Z);ha(M,{size:16}),v(F,Z)};$(me,F=>{s(r).selectedStores.length>0&&F(we)})}v(ce,se)},$$slots:{default:!0}})};$(U,H=>{s(a).length>0&&H(le)})}var ge=u(U,2);{var Pe=H=>{pa(H,{legend:"Qui",get iconComponent(){return Os},children:(ce,ye)=>{var se=jf(),re=c(se);et(re,16,()=>s(n),F=>F,(F,Z)=>{var M=Of();M.__click=[Cf,Z];var ae=c(M);I(R=>{Te(M,1,`btn btn-sm ${R??""}`),N(ae,Z)},[()=>s(r).selectedWho.length===0?" btn-soft btn-secondary":s(r).selectedWho.includes(Z)?" btn-secondary":"btn-dash btn-secondary"]),v(F,M)});var me=u(re,2);{var we=F=>{var Z=qf();Z.__click=[Rf];var M=c(Z);ha(M,{size:16}),v(F,Z)};$(me,F=>{s(r).selectedWho.length>0&&F(we)})}v(ce,se)},$$slots:{default:!0}})};$(ge,H=>{s(n).length>0&&H(Pe)})}I(()=>{h.disabled=!J.hasFilters,Vl(x,s(r).searchQuery),S.disabled=!s(r).searchQuery,Te(k,1,`btn flex-1 ${s(r).groupBy==="none"&&"btn-secondary"}`),Te(T,1,`btn flex-1 ${s(r).groupBy==="store"&&"btn-secondary"}`),Te(O,1,`btn flex-1 ${s(r).groupBy==="productType"&&"btn-secondary"}`)}),v(t,o),Y()}Ge(["click","input"]);var zf=w('<div class="tooltip text-xs font-normal"><!></div>');function Uf(t,e){let r=he(e,"iconSize",3,24),a=e.icon||void 0;var n=zf(),i=c(n);{var o=l=>{a(l,{get size(){return r()},class:`align-top
`})};$(i,l=>{e.icon&&l(o)})}I(()=>sr(n,"data-tip",e.tip)),v(t,n)}var Hf=w('<div class="tooltip"><div class="badge badge-soft badge-sm hover:badge-primary flex items-center gap-1"><span class="whitespace-nowrap"> </span> <!></div></div>');function Wf(t,e){K(e,!0);let r=he(e,"recipes",19,()=>[]);const a=e.dateDisplayInfo.timeIcon==="sun"?Cs:e.dateDisplayInfo.timeIcon==="moon"?Ms:e.dateDisplayInfo.timeIcon==="cloud"?Xo:null;var n=Hf(),i=c(n),o=c(i),l=c(o),d=u(o,2);{var f=h=>{a(h,{class:"h-3 w-3"})};$(d,h=>{a&&h(f)})}I(h=>{sr(n,"data-tip",h),N(l,e.dateDisplayInfo.formattedDate)},[()=>r().map(h=>h.r).join(", ")]),v(t,n),Y()}var Qf=w('<div class="text-primary-content flex items-center gap-2"><!> </div>'),Gf=w('<div class="text-primary-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Vf=w('<div class="font-semibold">Sur toute la période</div>'),Ff=w('du <span class="font-semibold"> </span> au <span class="font-semibold"> </span>',1),Kf=w('le <span class="font-semibold"> </span>',1),Yf=(t,e,r)=>e.onOpenGroupEditModal("store",s(r).map(a=>a.data.$id),s(r).map(a=>a.data)),Jf=(t,e,r)=>e.onOpenGroupEditModal("who",s(r).map(a=>a.data.$id),s(r).map(a=>a.data)),Zf=(t,e,r)=>e.onOpenGroupPurchaseModal(s(r).map(a=>a.data)),Xf=w(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),eh=w('<div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div>'),th=w('<div class="flex flex-wrap items-center justify-end gap-2"><div class="alert px-4 py-1" title="Contient des dates passées - actions non disponibles"><!> <span class="hidden @md:block">Période partiellement passée</span></div></div>'),rh=w('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 text-lg font-bold @md:min-w-48"><!></div> <div class="text-primary-content"><!></div> <!></div>'),ah=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),sh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),nh=w('<div class="text-base-content/60 text-sm font-normal"> </div>'),oh=w('<div class="tooltip" data-tip="Ajouté manuellement, ne fait pas partie des recette"><!></div>'),ih=w('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),lh=w('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),ch=w('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),uh=w('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),dh=(t,e,r)=>e.onOpenModal(s(r).$id,"magasins"),vh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"magasins"),fh=w('<div class="ml-1"><!></div>'),hh=w('<div class="ml-1"> </div> <!>',1),ph=w('<div class="ml-1 text-sm font-medium">?</div>'),gh=(t,e,r)=>e.onOpenModal(s(r).$id,"volontaires"),mh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"volontaires"),_h=w('<span class="text-base-content/50 text-xs"> </span>'),bh=w('<div class="ml-1 flex gap-1"> <!></div>'),yh=w('<div class="ml-1 text-sm font-medium">?</div>'),wh=w('<div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div>'),Sh=w('<div class="flex items-center gap-1 text-sm"><!> </div>'),xh=w('<div class="flex items-center gap-1 text-sm"><!> </div>'),Ph=w('<div class="mx-4 flex gap-2 opacity-60"><!> <!></div>'),$h=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),kh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),Eh=w('<div class="tooltip flex items-center gap-2" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),Ah=w("<span> </span>"),Th=w('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),Dh=(t,e,r,a)=>{t.stopPropagation(),e.onQuickValidation(s(r),s(a))},Mh=w('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><div class="cart-icon"></div> <span class="text-xs"> </span> <!></button>'),Nh=w(`<div id="override_alert" class="alert alert-warning alert-soft mt-1 px-1 py-0.5"><!> <span>Les quantités des menus ont été modifiées depuis
                      l'attribution manuelle des "besoins"</span></div>`),Ih=(t,e,r)=>e.onOpenModal(s(r).$id,"achats"),Ch=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"achats"),Oh=w('<span class="text-xs opacity-75"> </span>'),Rh=w('<div><div class="flex items-center gap-1"><!> <span class="text-sm font-medium text-nowrap"> </span></div> <!></div>'),qh=w('<span class="text-base-content/50 text-xs italic">aucun</span>'),jh=w('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <!></div> <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex flex-wrap gap-x-4 gap-y-0"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="ms-auto flex items-center gap-4 self-end"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap items-start gap-0 self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup effectués:</div> <div>ajouter un achat</div></div> <div class="flex flex-wrap justify-end gap-1.5"><!> <!></div></div></div></div></div>'),Lh=w('<!> <div class="space-y-1"></div>',1),Bh=w('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),zh=w('<div class="space-y-4 rounded-lg"></div> <!>',1);function Uh(t,e){K(e,!0);const r={Package:Ba,MessageCircleQuestionMark:_u,ShoppingCart:_r,Clock:Pn,CircleCheck:ou,CircleX:iu,ClipboardCheck:lu,PackageCheck:bu,Check:qr},a=G(()=>J.groupedFilteredProducts),n=G(()=>J.filters),i=G(()=>dr(J.dateStore.start)),o=G(()=>dr(J.dateStore.end)),l=G(()=>!J.dateStore.isEventPassed&&!J.dateStore.hasPastDatesInRange);var d=zh(),f=C(d);et(f,21,()=>Object.entries(s(a)),([g,p])=>g,(g,p)=>{var _=G(()=>ya(s(p),2));let y=()=>s(_)[0];const S=G(()=>s(_)[1]);var E=Lh(),A=C(E);{var D=T=>{const O=G(()=>us(y()));var P=rh(),L=c(P),te=c(L);{var V=re=>{var me=Qf(),we=c(me);hr(we,{size:20});var F=u(we);I(()=>N(F,` ${y()??""} (${s(S).length??""})`)),v(re,me)},U=re=>{var me=X(),we=C(me);{var F=M=>{var ae=Gf(),R=c(ae);mr(R,()=>s(O).icon,($e,z)=>{z($e,{size:20})});var ie=u(R,2),j=c(ie),ee=u(ie,2),de=c(ee);I(()=>{N(j,s(O).displayName),N(de,`(${s(S).length??""})`)}),v(M,ae)},Z=M=>{var ae=ht();I(()=>N(ae,`📦 ${y()??""} (${s(S).length??""})`)),v(M,ae)};$(we,M=>{s(n).groupBy==="productType"?M(F):M(Z,!1)},!0)}v(re,me)};$(te,re=>{s(n).groupBy==="store"?re(V):re(U,!1)})}var le=u(L,2),ge=c(le);{var Pe=re=>{var me=Vf();v(re,me)},H=re=>{var me=X(),we=C(me);{var F=M=>{var ae=Ff(),R=u(C(ae)),ie=c(R),j=u(R,2),ee=c(j);I(()=>{N(ie,s(i)),N(ee,s(o))}),v(M,ae)},Z=M=>{var ae=Kf(),R=u(C(ae)),ie=c(R);I(()=>N(ie,s(i))),v(M,ae)};$(we,M=>{J.dateStore.start!==J.dateStore.end?M(F):M(Z,!1)},!0)}v(re,me)};$(ge,re=>{J.dateStore.isFullRange?re(Pe):re(H,!1)})}var ce=u(le,2);{var ye=re=>{var me=eh(),we=c(me);we.__click=[Yf,e,S];var F=c(we);hr(F,{size:16});var Z=u(F,4);ea(Z,{size:16});var M=u(we,2);M.__click=[Jf,e,S];var ae=c(M);ba(ae,{size:16});var R=u(ae,4);ea(R,{size:16});var ie=u(M,2);{var j=ee=>{var de=Xf();de.__click=[Zf,e,S];var $e=c(de);_r($e,{size:16});var z=u($e,4);Sn(z,{size:16}),v(ee,de)};$(ie,ee=>{s(S).some(de=>de.data.displayMissingQuantity!=="✅ Complet")&&ee(j)})}v(re,me)},se=re=>{var me=X(),we=C(me);{var F=Z=>{var M=th(),ae=c(M),R=c(ae);Pn(R,{size:16}),v(Z,M)};$(we,Z=>{J.dateStore.hasPastDatesInRange&&Z(F)},!0)}v(re,me)};$(ce,re=>{s(l)?re(ye):re(se,!1)})}v(T,P)};$(A,T=>{y()!==""&&T(D)})}var k=u(A,2);et(k,21,()=>s(S),T=>T.data.$id,(T,O)=>{const P=G(()=>s(O).data),L=G(()=>s(O).stats),te=G(()=>us(s(P).productType)),V=G(()=>md(s(P).purchases||[])),U=G(()=>s(P).totalNeededOverrideParsed);var le=jh(),ge=c(le),Pe=c(ge),H=c(Pe);H.__click=[ah,e,P],H.__keydown=[sh,e,P];var ce=c(H),ye=c(ce);mr(ye,()=>s(te).icon,(ue,pe)=>{pe(ue,{class:"text-base-content/80 h-4 w-4"})});var se=u(ye),re=u(se);{var me=ue=>{var pe=nh(),Ne=c(pe);I(()=>N(Ne,`Ancien: ${s(P).previousNames[0]??""}`)),v(ue,pe)};$(re,ue=>{s(P).previousNames&&s(P).previousNames.length>0&&ue(me)})}var we=u(re,2);{var F=ue=>{var pe=oh(),Ne=c(pe);xn(Ne,{class:"text-warning h-4 w-4"}),v(ue,pe)};$(we,ue=>{s(P).productHugoUuid||ue(F)})}var Z=u(ce,2),M=c(Z);{var ae=ue=>{var pe=ih(),Ne=c(pe);si(Ne,{class:"text-success h-4 w-4"}),v(ue,pe)};$(M,ue=>{s(P).pFrais&&ue(ae)})}var R=u(M,2);{var ie=ue=>{var pe=lh(),Ne=c(pe);Is(Ne,{class:"text-info h-4 w-4"}),v(ue,pe)};$(R,ue=>{s(P).pSurgel&&ue(ie)})}var j=u(Z,2);{var ee=ue=>{var pe=ch(),Ne=c(pe);ri(Ne,{class:"h-4 w-4 animate-spin"}),v(ue,pe)};$(j,ue=>{s(P).status==="isSyncing"&&ue(ee)})}var de=u(j,2);{var $e=ue=>{var pe=uh(),Ne=c(pe);et(Ne,20,()=>s(L).concernedDates,De=>De,(De,je)=>{const Fe=G(()=>s(L).recipesByDate.get(je)||[]),Je=G(()=>s(O).data.dateDisplayInfo[je]);Wf(De,{get dateDisplayInfo(){return s(Je)},get recipes(){return s(Fe)}})}),v(ue,pe)};$(de,ue=>{s(L).concernedDates.length>0&&ue($e)})}var z=u(H,2);{var Q=ue=>{var pe=wh(),Ne=c(pe);Ne.__click=[dh,e,P],Ne.__keydown=[vh,e,P];var De=c(Ne);hr(De,{size:18});var je=u(De,2);{var Fe=ct=>{var Lt=hh(),Wr=C(Lt),Wa=c(Wr),Qa=u(Wr,2);{var Bt=kr=>{var ca=fh(),vi=c(ca);Uf(vi,{get tip(){return s(P).storeInfo.storeComment},get icon(){return mu},iconSize:14}),v(kr,ca)};$(Qa,kr=>{s(P).storeInfo?.storeComment&&kr(Bt)})}I(()=>N(Wa,s(P).storeInfo.storeName)),v(ct,Lt)},Je=ct=>{var Lt=ph();v(ct,Lt)};$(je,ct=>{s(P).storeInfo?.storeName?ct(Fe):ct(Je,!1)})}var We=u(Ne,2);We.__click=[gh,e,P],We.__keydown=[mh,e,P];var wt=c(We);ba(wt,{size:18});var Et=u(wt,2);{var St=ct=>{var Lt=bh(),Wr=c(Lt),Wa=u(Wr);{var Qa=Bt=>{var kr=_h(),ca=c(kr);I(()=>N(ca,`+${s(P).who.length-2}`)),v(Bt,kr)};$(Wa,Bt=>{s(P).who.length>2&&Bt(Qa)})}I(Bt=>N(Wr,`${Bt??""} `),[()=>s(P).who.slice(0,2).map(Bt=>Bt.slice(0,3)).join(" | ")]),v(ct,Lt)},Jt=ct=>{var Lt=yh();v(ct,Lt)};$(Et,ct=>{s(P).who&&s(P).who.length>0?ct(St):ct(Jt,!1)})}I(()=>{Te(Ne,1,`btn btn-soft btn-sm group relative ${s(P).storeInfo?.storeName?"btn-success":""}`),Te(We,1,`btn btn-sm btn-soft group relative ${s(P).who&&s(P).who?.length>0?"btn-success":""}`)}),v(ue,pe)},ne=ue=>{var pe=Ph(),Ne=c(pe);{var De=Je=>{var We=Sh(),wt=c(We);hr(wt,{size:16});var Et=u(wt);I(()=>N(Et,` ${s(P).storeInfo.storeName??""}`)),v(Je,We)};$(Ne,Je=>{s(P).storeInfo?.storeName&&Je(De)})}var je=u(Ne,2);{var Fe=Je=>{var We=xh(),wt=c(We);ba(wt,{size:16});var Et=u(wt);I(St=>N(Et,` ${St??""}`),[()=>s(P).who.join(", ")]),v(Je,We)};$(je,Je=>{s(P).who&&s(P).who.length>0&&Je(Fe)})}v(ue,pe)};$(z,ue=>{s(l)?ue(Q):ue(ne,!1)})}var ke=u(Pe,2),ve=c(ke);ve.__click=[$h,e,P],ve.__keydown=[kh,e,P];var Re=c(ve),W=c(Re),be=c(W);hu(be,{class:"h-4 w-4"});var Ue=u(W,2),Be=c(Ue),Ve=c(Be);{var Ce=ue=>{var pe=Eh(),Ne=c(pe),De=c(Ne),je=u(Ne,2);xn(je,{class:"h-4 w-4"});var Fe=u(je);I(()=>{N(De,s(L).formattedQuantities),N(Fe,` ${s(U).totalOverride.q??""}
                          ${s(U).totalOverride.u??""}`)}),v(ue,pe)},Ze=ue=>{var pe=Ah(),Ne=c(pe);I(()=>N(Ne,s(L).formattedQuantities)),v(ue,pe)};$(Ve,ue=>{s(U)?.totalOverride?ue(Ce):ue(Ze,!1)})}var qt=u(Be,2);{var Ee=ue=>{var pe=Th(),Ne=c(pe),De=c(Ne),je=u(De);La(je,{class:"h-3 w-3"});var Fe=u(Ne,2),Je=c(Fe),We=u(Je);ii(We,{class:"h-3 w-3"}),I(()=>{N(De,`${s(L).nbRecipes??""} `),N(Je,`${s(L).totalAssiettes??""} `)}),v(ue,pe)};$(qt,ue=>{(s(L).nbRecipes||s(L).totalAssiettes)&&ue(Ee)})}var Me=u(Re,2);{var Le=ue=>{var pe=Mh();pe.__click=[Dh,e,P,L];var Ne=u(c(pe),2),De=c(Ne),je=u(Ne,2);{var Fe=We=>{su(We,{size:18})},Je=We=>{nu(We,{size:18})};$(je,We=>{kt.isMobile?We(Fe):We(Je,!1)})}I(()=>{sr(pe,"title",`Acheter le manquant (${s(L).formattedMissingQuantities??""})`),N(De,s(L).formattedMissingQuantities)}),v(ue,pe)},Ae=ue=>{var pe=X(),Ne=C(pe);{var De=je=>{Sn(je,{size:24,class:"text-success ms-auto"})};$(Ne,je=>{s(l)&&je(De)},!0)}v(ue,pe)};$(Me,ue=>{s(l)&&s(L).hasMissing?ue(Le):ue(Ae,!1)})}var Ye=u(Me,2);{var it=ue=>{var pe=Nh(),Ne=c(pe);au(Ne,{size:18}),v(ue,pe)};$(Ye,ue=>{s(l)&&s(U)?.hasUnresolvedChangedSinceOverride&&ue(it)})}var st=u(ve,2);st.__click=[Ih,e,P],st.__keydown=[Ch,e,P];var tt=c(st),vt=c(tt),bt=c(vt);_r(bt,{class:"h-4 w-4"});var yt=u(vt,2),jt=u(tt,2),lt=c(jt);et(lt,17,()=>s(V),yr,(ue,pe)=>{const Ne=G(()=>r[s(pe).icon]);var De=Rh(),je=c(De),Fe=c(je);mr(Fe,()=>s(Ne),(St,Jt)=>{Jt(St,{class:"h-4 w-4"})});var Je=u(Fe,2),We=c(Je),wt=u(je,2);{var Et=St=>{var Jt=Oh(),ct=c(Jt);I(()=>N(ct,`livré le: ${s(pe).deliveryDate??""}`)),v(St,Jt)};$(wt,St=>{s(pe).deliveryDate&&St(Et)})}I(()=>{Te(De,1,`badge badge-outline flex h-fit flex-col items-center gap-1 py-1 ${s(pe).badgeClass??""}`),N(We,`${s(pe).quantity??""}
                          ${s(pe).unit??""}`)}),v(ue,De)});var Nt=u(lt,2);{var cr=ue=>{var pe=qh();v(ue,pe)};$(Nt,ue=>{s(V).length===0&&ue(cr)})}I(()=>{Te(le,1,`card bg-base-100 border-base-300 ${s(P).status==="isSyncing"?"border-accent bg-accent/30 animate-pulse border-2":""}`),N(se,`${s(P).productName??""} `),Te(Be,1,`text-base font-bold ${s(L).hasMissing&&s(l)?"text-error":"text-success"}`),Te(yt,1,`text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity ${s(l)?"group-hover:opacity-100":""} sm:opacity-0`)}),v(T,le)}),v(g,E)});var h=u(f,2);{var m=g=>{var p=Bh();v(g,p)};$(h,g=>{Object.values(s(a)).flat().length===0&&g(m)})}v(t,d),Y()}Ge(["click","keydown"]);function An(t,e,r){s(e)||r.onClose()}var Hh=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Wh=(t,e)=>b(e,"empty"),Qh=(t,e)=>b(e,"all"),Gh=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Vh=w("<!> ",1),Fh=w('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <div><!></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Kh(t,e){K(e,!0);let r=B(!1),a=B(null),n=B(null),i=B(qe(e.products.length>0&&e.products[0].storeInfo?e.products[0].storeInfo.storeName:"")),o=B(qe(e.products.length>0&&e.products[0].storeInfo&&e.products[0].storeInfo.storeComment||"")),l=B(qe({})),d=B("empty");Kt(()=>{const M={};e.products.forEach(ae=>{e.productIds.includes(ae.$id)&&(s(d)==="empty"?M[ae.$id]=!ae.storeInfo||!ae.storeInfo.storeName:M[ae.$id]=!0)}),b(l,M,!0)});const f=G(()=>e.products.map(M=>({id:M.$id,label:M.productName,title:M.productName,selected:s(l)[M.$id]}))),h=G(()=>s(f).filter(M=>M.selected)),m=G(()=>`Attribuer un magasin (${s(h).length} produits sélectionnés)`),g=G(()=>s(h).length===0?!1:s(i).trim().length>0);async function p(){if(!s(g)||s(r))return;b(a,null),b(n,null);const M=s(h).map(R=>R.id),ae=e.products.filter(R=>M.includes(R.$id));J.setSyncStatus(M,!0),kt.backgroundOperation={isRunning:!0,name:`Mise à jour magasin (${M.length} produits)`,progress:0},e.onClose();try{const R={storeName:s(i).trim(),storeComment:s(o).trim()},ie=await Ho(M,ae,R);if(ie.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${ie.updatedCount} produits modifiés`),He.success(`Magasin mis à jour pour ${ie.updatedCount} produits.`),e.onSuccess?.(ie);else throw new Error(ie.error||"Erreur lors de la mise à jour")}catch(R){const ie=R instanceof Error?R.message:"Erreur inconnue";console.error("[StoreEditModal] Erreur mise à jour:",R),He.error(`Erreur mise à jour magasin: ${ie}`),J.clearSyncStatus()}finally{b(r,!1),kt.backgroundOperation={isRunning:!1,name:"",progress:0}}}function _(M){s(l)[M]=!s(l)[M]}var y=Fh(),x=c(y),S=c(x),E=c(S),A=c(E),D=u(E,2);D.__click=[An,r,e];var k=c(D);Mt(k,{class:"h-4 w-4"});var T=u(S,2),O=c(T);{var P=M=>{var ae=Hh(),R=c(ae);ia(R,{class:"h-4 w-4"});var ie=u(R,2),j=c(ie);I(()=>N(j,s(a))),v(M,ae)};$(O,M=>{s(a)&&M(P)})}var L=u(O,2),te=c(L),V=c(te);Ur(V,{get suggestions(){return J.uniqueStores},get disabled(){return s(r)},id:"store-name-input",get value(){return s(i)},set value(M){b(i,M,!0)}});var U=u(te,2),le=c(U);Hr(le,{get disabled(){return s(r)},id:"store-comment-textarea",get value(){return s(o)},set value(M){b(o,M,!0)}});var ge=u(L,2),Pe=u(c(ge),2),H=c(Pe);H.__click=[Wh,d];var ce=u(H,2);ce.__click=[Qh,d];var ye=u(Pe,2);ta(ye,{get items(){return s(f)},onToggleItem:_,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var se=u(T,2),re=c(se);re.__click=[An,r,e];var me=u(re,2);me.__click=p;var we=c(me);{var F=M=>{var ae=Gh();v(M,ae)},Z=M=>{var ae=Vh(),R=C(ae);qr(R,{class:"h-4 w-4"});var ie=u(R);I(()=>N(ie,` Appliquer à ${s(h).length??""} produit(s)`)),v(M,ae)};$(we,M=>{s(r)?M(F):M(Z,!1)})}I(()=>{N(A,s(m)),D.disabled=s(r),Te(H,1,`tab ${s(d)==="empty"?"tab-active":""}`),Te(ce,1,`tab ${s(d)==="all"?"tab-active":""}`),re.disabled=s(r),me.disabled=s(r)||!s(g)}),v(t,y),Y()}Ge(["click"]);function Tn(t,e,r){s(e)||r.onClose()}var Yh=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Jh=(t,e)=>b(e,"empty"),Zh=(t,e)=>b(e,"all"),Xh=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),ep=w("<!> ",1),tp=w('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><div><!></div> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="text-base-content/70">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function rp(t,e){K(e,!0);let r=B(!1),a=B(null),n=B(null),i=B(qe([])),o=B(""),l=B("empty"),d=B(qe({}));Kt(()=>{const Q={};e.products.forEach(ne=>{e.productIds.includes(ne.$id)&&(s(l)==="empty"?Q[ne.$id]=!ne.who||ne.who.length===0:Q[ne.$id]=!0)}),b(d,Q,!0)});const f=G(()=>e.products.map(Q=>({id:Q.$id,label:Q.productName,title:Q.productName,selected:s(d)[Q.$id]}))),h=G(()=>s(f).filter(Q=>Q.selected)),m=G(()=>{const Q=new Set([...J.uniqueWho,...s(i)]);return Array.from(Q).map(ne=>({id:ne,label:ne,selected:s(i).includes(ne)}))}),g=G(()=>`Gérer les volontaires (${s(h).length} produits sélectionnés)`),p=G(()=>s(h).length===0?!1:s(i).length>0);async function _(){if(!s(p)||s(r))return;b(a,null),b(n,null);const Q=s(h).map(ke=>ke.id),ne=e.products.filter(ke=>Q.includes(ke.$id));J.setSyncStatus(Q,!0),kt.backgroundOperation={isRunning:!0,name:`Mise à jour volontaires (${Q.length} produits)`,progress:0},e.onClose();try{const ke=await Wo(Q,ne,s(i),"replace");if(ke.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${ke.updatedCount} produits modifiés`),He.success(`Volontaires mis à jour pour ${ke.updatedCount} produits.`),e.onSuccess?.(ke);else throw new Error(ke.error||"Erreur lors de la mise à jour")}catch(ke){const ve=ke instanceof Error?ke.message:"Erreur inconnue";console.error("[WhoEditModal] Erreur mise à jour:",ke),He.error(`Erreur mise à jour volontaires: ${ve}`),J.clearSyncStatus()}finally{b(r,!1),kt.backgroundOperation={isRunning:!1,name:"",progress:0}}}function y(Q){const ne=Q.trim();ne&&!s(i).includes(ne)&&b(i,[...s(i),ne],!0)}function x(Q){b(i,s(i).filter(ne=>ne!==Q),!0)}function S(Q){s(i).includes(Q)?x(Q):y(Q)}function E(){s(o).trim()&&(y(s(o)),b(o,""))}function A(Q){s(d)[Q]=!s(d)[Q]}var D=tp(),k=c(D),T=c(k),O=c(T),P=c(O),L=u(O,2);L.__click=[Tn,r,e];var te=c(L);Mt(te,{class:"h-4 w-4"});var V=u(T,2),U=c(V);{var le=Q=>{var ne=Yh(),ke=c(ne);ia(ke,{class:"h-4 w-4"});var ve=u(ke,2),Re=c(ve);I(()=>N(Re,s(a))),v(Q,ne)};$(U,Q=>{s(a)&&Q(le)})}var ge=u(U,2),Pe=c(ge),H=c(Pe),ce=c(H),ye=c(ce);la(ye,{get disabled(){return s(r)},onkeydown:Q=>{Q.key==="Enter"&&(Q.preventDefault(),E())},get value(){return s(o)},set value(Q){b(o,Q,!0)}});var se=u(ce,2);se.__click=E;var re=c(se);oi(re,{size:16});var me=u(H,2),we=u(c(me),2);ta(we,{get items(){return s(m)},onToggleItem:S,showIcon:!0,badgeSize:"btn-sm",badgeStyle:"btn-soft"});var F=u(ge,2),Z=u(c(F),2),M=c(Z);M.__click=[Jh,l];var ae=u(M,2);ae.__click=[Zh,l];var R=u(Z,2);ta(R,{get items(){return s(f)},onToggleItem:A,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var ie=u(V,2),j=c(ie);j.__click=[Tn,r,e];var ee=u(j,2);ee.__click=_;var de=c(ee);{var $e=Q=>{var ne=Xh();v(Q,ne)},z=Q=>{var ne=ep(),ke=C(ne);qr(ke,{class:"h-4 w-4"});var ve=u(ke);I(()=>N(ve,` Appliquer à ${s(h).length??""} produit(s)`)),v(Q,ne)};$(de,Q=>{s(r)?Q($e):Q(z,!1)})}I(Q=>{N(P,s(g)),L.disabled=s(r),se.disabled=Q,Te(M,1,`tab ${s(l)==="empty"?"tab-active":""}`),Te(ae,1,`tab ${s(l)==="all"?"tab-active":""}`),j.disabled=s(r),ee.disabled=s(r)||!s(p)},[()=>s(r)||!s(o).trim()]),v(t,D),Y()}Ge(["click"]);async function ap(t,e,r,a,n,i){if(!s(e).invoiceTotal||s(e).invoiceTotal<=0){b(r,"Le montant doit être supérieur à 0");return}b(a,!0),b(r,null);try{const o=J.currentMainId;if(!o)throw new Error("Aucun événement principal actif");s(n)?await Ts(s(n),{price:s(e).invoiceTotal,invoiceTotal:s(e).invoiceTotal,store:s(e).store,notes:s(e).notes,who:s(e).who}):await Go(o,void 0,s(e).invoiceTotal,s(e).store,s(e).notes,s(e).who),i()}catch(o){console.error("Erreur sauvegarde dépense:",o),b(r,o.message,!0)}finally{b(a,!1)}}var sp=(t,e)=>e(!1),np=w('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),op=w('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),ip=(t,e)=>b(e,!0),lp=w('<button class="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1 h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> Ajouter une dépense</button>'),cp=w('<span class="loading loading-spinner loading-xs"></span>'),up=w('<div class="text-error mt-2 text-xs"> </div>'),dp=w('<div class="card bg-base-200 animate-in fade-in slide-in-from-top-4 shadow-md duration-300"><div class="card-body p-4"><h4 class="card-title text-sm"> </h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><!> <!> <!> <!></div> <div class="card-actions mt-2 justify-end"><button class="btn btn-sm btn-ghost">Annuler</button> <button class="btn btn-sm btn-primary"><!> </button></div> <!></div></div>'),vp=(t,e)=>e("date"),fp=(t,e)=>e("store"),hp=(t,e)=>e("who"),pp=(t,e)=>e("amount"),gp=w('<span class="text-base-content/70 italic"> </span>'),mp=w('<span class="text-base-content/50 ml-1 text-xs"> </span>'),_p=w('<span class="font-medium"> </span> <!>',1),bp=(t,e,r)=>e(s(r)),yp=w('<tr class="hover"><td class="whitespace-nowrap"> </td><td class="max-w-xs truncate"><!></td><td> </td><td> </td><td class="text-right font-mono font-bold"> </td><td><button class="btn btn-ghost btn-square"><!></button></td></tr>'),wp=w('<tr><td colspan="7" class="text-base-content/50 py-8 text-center">Aucune dépense trouvée</td></tr>'),Sp=(t,e)=>e(!1),xp=(t,e)=>e(!1),Pp=w('<dialog><div class="modal-box bg-base-100 flex h-[90vh] w-11/12 max-w-5xl flex-col p-0"><div class="border-base-300 bg-base-200 sticky top-0 z-10 flex items-center justify-between border-b p-4"><h3 class="flex items-center gap-2 text-lg font-bold"><!> Gestion des Dépenses</h3> <button class="btn btn-sm btn-circle btn-ghost">✕</button></div> <div class="flex-1 space-y-6 overflow-y-auto p-4"><div class="grid grid-cols-1 gap-4 md:grid-cols-3"><div class="stats bg-primary text-primary-content shadow"><div class="stat"><div class="stat-title text-primary-content/80">Total Global</div> <div class="stat-value"> </div> <div class="stat-desc text-primary-content/80"> </div></div></div> <div class="card bg-base-200 p-4 shadow-sm"><h4 class="mb-2 text-sm font-semibold tracking-wider uppercase opacity-70">Par Magasin</h4> <div class="max-h-24 space-y-1 overflow-y-auto text-sm"></div></div> <div class="card bg-base-200 p-4 shadow-sm"><h4 class="mb-2 text-sm font-semibold tracking-wider uppercase opacity-70">Par Acheteur</h4> <div class="max-h-24 space-y-1 overflow-y-auto text-sm"></div></div></div> <div class="flex items-center justify-between"><h4 class="text-sm font-bold uppercase opacity-70">Liste des transactions</h4> <!></div> <!> <div class="bg-base-100 border-base-200 overflow-x-auto rounded-lg border"><table class="table-zebra table-xs table w-full"><thead class="bg-base-200 sticky top-0"><tr><th class="hover:bg-base-300 cursor-pointer"> </th><th>Description</th><th class="hover:bg-base-300 cursor-pointer"> </th><th class="hover:bg-base-300 cursor-pointer"> </th><th class="hover:bg-base-300 cursor-pointer text-right"> </th><th><!></th></tr></thead><tbody><!><!></tbody></table></div></div> <div class="border-base-300 bg-base-200 sticky bottom-0 z-10 flex items-center justify-between border-t px-4 py-1"><button class="btn btn-ghost ms-auto">Fermer</button></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');function $p(t,e){K(e,!0);let r=he(e,"isOpen",15,!1),a=B(!1),n=B(null),i=B(!1),o=B(qe({invoiceTotal:0,store:"",notes:"",who:""})),l=B(null);Kt(()=>{if(r()&&!s(l)){const Ee=localStorage.getItem("appwrite-user-name");Ee&&(s(o).who=Ee)}});let d=B("date"),f=B("desc"),h=G(()=>J.financialStats),m=G(()=>s(h).allPurchases),g=G(()=>{let Ee=[...s(m)];return Ee.sort((Me,Le)=>{let Ae,Ye;switch(s(d)){case"date":Ae=new Date(Me.orderDate||Me.$createdAt).getTime(),Ye=new Date(Le.orderDate||Le.$createdAt).getTime();break;case"amount":Ae=Me.invoiceTotal||Me.price||0,Ye=Le.invoiceTotal||Le.price||0;break;case"store":Ae=(Me.store||"").toLowerCase(),Ye=(Le.store||"").toLowerCase();break;case"who":Ae=(Me.who||"").toLowerCase(),Ye=(Le.who||"").toLowerCase();break}return Ae<Ye?s(f)==="asc"?-1:1:Ae>Ye?s(f)==="asc"?1:-1:0}),Ee});function p(Ee){s(d)===Ee?b(f,s(f)==="asc"?"desc":"asc",!0):(b(d,Ee,!0),b(f,"desc"))}function _(){const Ee=localStorage.getItem("appwrite-user-name")||"";b(o,{invoiceTotal:0,store:"",notes:"",who:Ee},!0),b(l,null),b(i,!1)}function y(Ee){b(o,{invoiceTotal:Ee.invoiceTotal||Ee.price||0,store:Ee.store||"",notes:Ee.notes||"",who:Ee.who||""},!0),b(l,Ee.$id,!0),b(i,!0)}function x(Ee){return Ee?new Date(Ee).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"-"}function S(Ee){return(Ee||0).toFixed(2)+" €"}var E=Pp(),A=c(E),D=c(A),k=c(D),T=c(k);Jo(T,{});var O=u(k,2);O.__click=[sp,r];var P=u(D,2),L=c(P),te=c(L),V=c(te),U=u(c(V),2),le=c(U),ge=u(U,2),Pe=c(ge),H=u(te,2),ce=u(c(H),2);et(ce,21,()=>Object.entries(s(h).byStore).sort((Ee,Me)=>Me[1]-Ee[1]),yr,(Ee,Me)=>{var Le=G(()=>ya(s(Me),2));let Ae=()=>s(Le)[0],Ye=()=>s(Le)[1];var it=np(),st=c(it),tt=c(st),vt=u(st,2),bt=c(vt);I(yt=>{N(tt,Ae()),N(bt,yt)},[()=>S(Ye())]),v(Ee,it)});var ye=u(H,2),se=u(c(ye),2);et(se,21,()=>Object.entries(s(h).byWho).sort((Ee,Me)=>Me[1]-Ee[1]),yr,(Ee,Me)=>{var Le=G(()=>ya(s(Me),2));let Ae=()=>s(Le)[0],Ye=()=>s(Le)[1];var it=op(),st=c(it),tt=c(st),vt=u(st,2),bt=c(vt);I(yt=>{N(tt,Ae()),N(bt,yt)},[()=>S(Ye())]),v(Ee,it)});var re=u(L,2),me=u(c(re),2);{var we=Ee=>{var Me=lp();Me.__click=[ip,i],v(Ee,Me)};$(me,Ee=>{s(i)||Ee(we)})}var F=u(re,2);{var Z=Ee=>{var Me=dp(),Le=c(Me),Ae=c(Le),Ye=c(Ae),it=u(Ae,2),st=c(it);qs(st,{get disabled(){return s(a)},get value(){return s(o).invoiceTotal},set value(De){s(o).invoiceTotal=De}});var tt=u(st,2);Ur(tt,{get suggestions(){return J.uniqueStores},get disabled(){return s(a)},get value(){return s(o).store},set value(De){s(o).store=De}});var vt=u(tt,2);la(vt,{get suggestions(){return J.uniqueWho},get disabled(){return s(a)},get value(){return s(o).who},set value(De){s(o).who=De}});var bt=u(vt,2);Hr(bt,{get disabled(){return s(a)},get value(){return s(o).notes},set value(De){s(o).notes=De}});var yt=u(it,2),jt=c(yt);jt.__click=_;var lt=u(jt,2);lt.__click=[ap,o,n,a,l,_];var Nt=c(lt);{var cr=De=>{var je=cp();v(De,je)};$(Nt,De=>{s(a)&&De(cr)})}var ue=u(Nt),pe=u(yt,2);{var Ne=De=>{var je=up(),Fe=c(je);I(()=>N(Fe,s(n))),v(De,je)};$(pe,De=>{s(n)&&De(Ne)})}I(()=>{N(Ye,s(l)?"Modifier la dépense":"Nouvelle Dépense"),lt.disabled=s(a),N(ue,` ${s(l)?"Enregistrer":"Ajouter"}`)}),v(Ee,Me)};$(F,Ee=>{s(i)&&Ee(Z)})}var M=u(F,2),ae=c(M),R=c(ae),ie=c(R),j=c(ie);j.__click=[vp,p];var ee=c(j),de=u(j,2);de.__click=[fp,p];var $e=c(de),z=u(de);z.__click=[hp,p];var Q=c(z),ne=u(z);ne.__click=[pp,p];var ke=c(ne),ve=u(ne),Re=c(ve);wu(Re,{size:14});var W=u(R),be=c(W);et(be,17,()=>s(g),Ee=>Ee.$id,(Ee,Me)=>{var Le=yp(),Ae=c(Le),Ye=c(Ae),it=u(Ae),st=c(it);{var tt=De=>{var je=gp(),Fe=c(je);I(()=>N(Fe,s(Me).notes||"-")),v(De,je)},vt=De=>{var je=_p(),Fe=C(je),Je=c(Fe),We=u(Fe,2);{var wt=Et=>{var St=mp(),Jt=c(St);I(()=>N(Jt,`- ${s(Me).notes??""}`)),v(Et,St)};$(We,Et=>{s(Me).notes&&Et(wt)})}I(()=>N(Je,s(Me)._productName||"Produit inconnu")),v(De,je)};$(st,De=>{s(Me).status==="expense"?De(tt):De(vt,!1)})}var bt=u(it),yt=c(bt),jt=u(bt),lt=c(jt),Nt=u(jt),cr=c(Nt),ue=u(Nt),pe=c(ue);pe.__click=[bp,y,Me];var Ne=c(pe);ea(Ne,{size:14}),I((De,je)=>{N(Ye,De),N(yt,s(Me).store||"-"),N(lt,s(Me).who||"-"),N(cr,je)},[()=>x(s(Me).orderDate||s(Me).$createdAt),()=>S(s(Me).invoiceTotal||s(Me).price)]),v(Ee,Le)});var Ue=u(be);{var Be=Ee=>{var Me=wp();v(Ee,Me)};$(Ue,Ee=>{s(g).length===0&&Ee(Be)})}var Ve=u(P,2),Ce=c(Ve);Ce.__click=[Sp,r];var Ze=u(A,2),qt=c(Ze);qt.__click=[xp,r],I(Ee=>{Te(E,1,`modal ${r()?"modal-open":""}`),N(le,Ee),N(Pe,`${s(m).length??""} transactions`),N(ee,`Date ${s(d)==="date"?s(f)==="asc"?"↑":"↓":""}`),N($e,`Magasin ${s(d)==="store"?s(f)==="asc"?"↑":"↓":""}`),N(Q,`Qui ${s(d)==="who"?s(f)==="asc"?"↑":"↓":""}`),N(ke,`Montant ${s(d)==="amount"?s(f)==="asc"?"↑":"↓":""}`)},[()=>S(s(h).totalGlobal)]),v(t,E),Y()}Ge(["click"]);var kp=w("<div><!></div>"),Ep=w('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Ap(t,e){K(e,!0);let r=B(!1),a=he(e,"width",3,"80"),n=he(e,"bgClass",3,"bg-base-300");const i=G(()=>"w-"+a());var o=X(),l=C(o);{var d=h=>{var m=kp(),g=c(m);fe(g,()=>e.children??oe),I(()=>Te(m,1,`${n()??""} ${(s(i)?s(i):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),v(h,m)},f=h=>{var m=Ep(),g=C(m),p=c(g),_=u(p,2),y=u(c(_),2),x=c(y);fe(x,()=>e.children??oe);var S=u(g,2),E=c(S),A=c(E);ei(A,{class:"h-6 w-6"}),is(p,()=>s(r),D=>b(r,D)),v(h,m)};$(l,h=>{kt.isMobile?h(f,!1):h(d)})}v(t,o),Y()}function Tp(t,e){b(e,!0)}var Dp=(t,e)=>b(e,!0),Mp=w('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button> <button class="btn btn-sm btn-primary" title="Ajouter un produit manuellement"><!> Produit</button></div> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Np(t,e){K(e,!0);const r="100",a=G(()=>J.stats);let n=B(null),i=B("recettes"),o=B(!1),l=B(!1),d=B(qe([])),f=B(qe([])),h=B(!1),m=B(qe([])),g=B(!1);function p(R,ie="recettes"){b(i,ie,!0),b(n,R,!0)}function _(){b(n,null)}function y(R,ie,j){b(d,ie,!0),b(f,j,!0),b(R==="who"?o:l,!0)}function x(R){(!R||R==="who")&&b(o,!1),(!R||R==="store")&&b(l,!1),b(d,[],!0),b(f,[],!0)}function S(R){console.log(`[ProductsTable] Modification groupée réussie: ${R.updatedCount} produits`)}function E(R){const ie=R.filter(j=>J.getProductModelById(j.$id)?.stats.hasMissing);console.log(`[ProductsTable] openGroupPurchaseModal: ${R.length} produits reçus → ${ie.length} produits avec quantités manquantes`),b(m,ie,!0),b(h,!0)}function A(){b(h,!1),b(m,[],!0)}function D(){console.log("[ProductsTable] Achat groupé créé avec succès"),A()}async function k(R,ie){try{if(!J.currentMainId)throw new Error("mainId non disponible");const j=ie.missingQuantities||[];if(j.length===0){console.log("Aucune quantité manquante à valider pour ce produit dans cette période");return}const ee=j.filter($e=>$e.q<0).map($e=>({...$e,q:Math.abs($e.q)})).map($e=>{const{quantity:z,unit:Q}=ds($e.q,$e.u);return{q:z,u:Q}});let de=R.$id;R.isSynced||(console.log(`[ProductsTable] Produit ${R.$id} local, création pour validation rapide...`),de=(await zt(R.$id,{},z=>J.getEnrichedProductById(z))).$id,console.log(`[ProductsTable] Produit sync créé: ${de}`)),await Qo(J.currentMainId,de,ee,{store:R.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${R.productName}`)}catch(j){console.error("[ProductsTable] Erreur validation rapide:",j),alert("Erreur lors de la validation rapide: "+j.message)}}let T=B(!1);var O=Mp(),P=c(O),L=c(P),te=c(L);vu(te,{class:"mr-1 h-4 w-4"});var V=u(te),U=u(L,2);U.__click=[Dp,T];var le=c(U);Jo(le,{class:"mr-1 h-4 w-4"});var ge=u(U,2);ge.__click=[Tp,g];var Pe=c(ge);Ns(Pe,{class:"mr-1 h-4 w-4"});var H=u(P,2);Ap(H,{width:r,children:(R,ie)=>{Bf(R,{})},$$slots:{default:!0}});var ce=u(H,2);Uh(ce,{onOpenModal:p,onOpenGroupEditModal:y,onOpenGroupPurchaseModal:E,onQuickValidation:k});var ye=u(ce,2);{let R=G(()=>s(n)||"");rf(ye,{get productId(){return s(R)},get initialTab(){return s(i)},onClose:_})}var se=u(ye,2);{var re=R=>{rp(R,{get productIds(){return s(d)},get products(){return s(f)},onClose:()=>x("who"),onSuccess:S})};$(se,R=>{s(o)&&R(re)})}var me=u(se,2);{var we=R=>{Kh(R,{get productIds(){return s(d)},get products(){return s(f)},onClose:()=>x("store"),onSuccess:S})};$(me,R=>{s(l)&&R(we)})}var F=u(me,2);{var Z=R=>{cd(R,{get products(){return s(m)},onClose:A,onSuccess:D})};$(F,R=>{s(h)&&R(Z)})}var M=u(F,2);pd(M,{get open(){return s(g)},set open(R){b(g,R,!0)}});var ae=u(M,2);$p(ae,{get isOpen(){return s(T)},set isOpen(R){b(T,R,!0)}}),I(()=>{Te(O,1,`space-y-6 ${kt.isMobile?"":"ml-100"}`),N(V,` ${s(a).total??""}`)}),v(t,O),Y()}Ge(["click"]);Yi();var Ip=w('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function Cp(t){var e=Ip();v(t,e)}var Op=w('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Rp(t,e){var r=Op(),a=u(c(r),2),n=u(c(a),2),i=c(n);I(()=>N(i,e.message)),v(t,r)}var qp=w('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function jp(t,e){var r=qp(),a=c(r),n=c(a);ia(n,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=u(n,2),o=u(c(i),2),l=c(o);I(()=>N(l,e.message||"Erreur inconnue")),v(t,r)}function Lp(t){t.stopPropagation()}var Bp=(t,e)=>t.key==="Escape"&&e(),zp=w('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),Up=w('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),Hp=(t,e)=>b(e,!1),Wp=w('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),Qp=(t,e)=>b(e,!0),Gp=(t,e)=>b(e,!1),Vp=w(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),Fp=(t,e)=>b(e,!0),Kp=w('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),Yp=w('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function Jp(t,e){K(e,!0);let r=he(e,"onClose",3,()=>{}),a=he(e,"onAuthSuccess",3,()=>{}),n=B(!0),i=B(!1),o=B(""),l=B(""),d=B(""),f=B(""),h=B(""),m=B(""),g=B(""),p=B(""),_=B(!1);function y(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function x(ye){if(ye.preventDefault(),!s(d)||!s(f)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{await(await y().getAccount()).createEmailPasswordSession(s(d),s(f)),b(l,"Connexion réussie !"),setTimeout(()=>{a()()},1e3)}catch(se){console.error("Erreur de connexion:",se),b(o,se.message||"Erreur lors de la connexion",!0)}finally{b(i,!1)}}async function S(ye){if(ye.preventDefault(),!s(h)||!s(m)||!s(g)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{const re=await y().getAccount();await re.create("unique()",s(m),s(g),s(h)),await re.createEmailPasswordSession(s(m),s(g)),b(l,"Compte créé et connecté !"),setTimeout(()=>{a()()},1e3)}catch(se){console.error("Erreur d'inscription:",se),b(o,se.message||"Erreur lors de la création du compte",!0)}finally{b(i,!1)}}async function E(ye){if(ye.preventDefault(),!s(p)){b(o,"Veuillez entrer votre email");return}b(i,!0),b(o,"");try{await(await y().getAccount()).createRecovery(s(p),`${window.location.origin}/reset-password`),b(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{b(_,!1),b(p,"")},2e3)}catch(se){console.error("Erreur mot de passe oublié:",se),b(o,se.message||"Erreur lors de l'envoi de l'email",!0)}finally{b(i,!1)}}function A(){s(i)||r()()}Kt(()=>{(s(n)||s(_))&&(b(o,""),b(l,""))});var D=Yp();D.__click=A,D.__keydown=[Bp,A];var k=c(D);k.__click=[Lp];var T=c(k),O=c(T),P=c(O),L=u(O,2);L.__click=A;var te=u(T,2),V=c(te);{var U=ye=>{var se=zp(),re=c(se);I(()=>N(re,s(o))),v(ye,se)};$(V,ye=>{s(o)&&ye(U)})}var le=u(V,2);{var ge=ye=>{var se=Up(),re=c(se);I(()=>N(re,s(l))),v(ye,se)};$(le,ye=>{s(l)&&ye(ge)})}var Pe=u(le,2);{var H=ye=>{var se=Wp(),re=C(se),me=c(re),we=u(c(me),2),F=u(me,2),Z=c(F),M=u(re,2),ae=c(M);ae.__click=[Hp,_],I(()=>{we.disabled=s(i),F.disabled=s(i),N(Z,s(i)?"Envoi...":"Envoyer l'email de réinitialisation"),ae.disabled=s(i)}),Mr("submit",re,E),Qe(we,()=>s(p),R=>b(p,R)),v(ye,se)},ce=ye=>{var se=X(),re=C(se);{var me=F=>{var Z=Vp(),M=C(Z),ae=c(M),R=u(c(ae),2),ie=u(ae,2),j=u(c(ie),2),ee=u(ie,2),de=c(ee),$e=u(M,2),z=c($e);z.__click=[Qp,_];var Q=u(z,2),ne=u(c(Q));ne.__click=[Gp,n],I(()=>{R.disabled=s(i),j.disabled=s(i),ee.disabled=s(i),N(de,s(i)?"Connexion...":"Se connecter"),z.disabled=s(i),ne.disabled=s(i)}),Mr("submit",M,x),Qe(R,()=>s(d),ke=>b(d,ke)),Qe(j,()=>s(f),ke=>b(f,ke)),v(F,Z)},we=F=>{var Z=Kp(),M=C(Z),ae=c(M),R=u(c(ae),2),ie=u(ae,2),j=u(c(ie),2),ee=u(ie,2),de=u(c(ee),2),$e=u(ee,2),z=c($e),Q=u(M,2),ne=u(c(Q));ne.__click=[Fp,n],I(()=>{R.disabled=s(i),j.disabled=s(i),de.disabled=s(i),$e.disabled=s(i),N(z,s(i)?"Création...":"Créer un compte"),ne.disabled=s(i)}),Mr("submit",M,S),Qe(R,()=>s(h),ke=>b(h,ke)),Qe(j,()=>s(m),ke=>b(m,ke)),Qe(de,()=>s(g),ke=>b(g,ke)),v(F,Z)};$(re,F=>{s(n)?F(me):F(we,!1)},!0)}v(ye,se)};$(Pe,ye=>{s(_)?ye(H):ye(ce,!1)})}I(()=>{N(P,s(_)?"Mot de passe oublié":s(n)?"Connexion":"Inscription"),L.disabled=s(i)}),v(t,D),Y()}Ge(["click","keydown"]);var Zp=(t,e,r,a)=>e(s(r),s(a)),Xp=w('<button class="btn btn-sm btn-primary"> </button>'),eg=(t,e,r)=>e(s(r)),tg=w('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),rg=(t,e,r)=>e(s(r)),ag=w('<button class="btn btn-ghost btn-sm btn-circle absolute top-1 right-1" title="Fermer" aria-label="Fermer la notification"><!></button>'),sg=w('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!> <!></div></div></div>'),ng=w("<div></div>");function og(t,e){K(e,!0);let r=he(e,"position",3,"toast-right toast-bottom"),a=he(e,"padding",3,"md");const n=G(()=>a()==="sm"?"px-2 py-0.5":""),i=G(()=>He.toasts);function o(m){return m==="success"||m==="info"}function l(m){He.dismiss(m.id)}function d(m){e.onShowDetails?.({id:m.id,message:m.message,details:m.details})}function f(m,g){g.onClick()}var h=ng();et(h,21,()=>s(i),m=>m.id,(m,g)=>{var p=sg(),_=c(p),y=c(_),x=c(y);{var S=V=>{ri(V,{class:"h-5 w-5 animate-spin"})};$(x,V=>{s(g).state==="loading"&&V(S)})}var E=u(x,2),A=c(E),D=u(y,2),k=c(D);{var T=V=>{var U=X(),le=C(U);et(le,17,()=>s(g).actions,yr,(ge,Pe)=>{var H=Xp();H.__click=[Zp,f,g,Pe];var ce=c(H);I(()=>N(ce,s(Pe).label)),v(ge,H)}),v(V,U)};$(k,V=>{s(g).actions&&s(g).actions.length>0&&V(T)})}var O=u(k,2);{var P=V=>{var U=tg();U.__click=[eg,d,g];var le=c(U);Zo(le,{class:"h-3 w-3"}),v(V,U)};$(O,V=>{s(g).details&&V(P)})}var L=u(O,2);{var te=V=>{var U=ag();U.__click=[rg,l,g];var le=c(U);Mt(le,{class:"h-4 w-4"}),v(V,U)};$(L,V=>{(s(g).state==="error"||s(g).state==="warning"||!o(s(g).state))&&V(te)})}I(()=>{Te(p,1,`alert alert-${s(g).state??""} max-w-sm ${s(n)??""} shadow-lg`),N(A,s(g).message)}),v(m,p)}),I(()=>Te(h,1,`toast ${r()??""} z-50`)),v(t,h),Y()}Ge(["click"]);var ig=w('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function lg(t){var e=ig(),r=c(e),a=u(r,2);Cs(a,{class:"swap-on fill-current"});var n=u(a,2);Ms(n,{class:"swap-off fill-current"}),v(t,e)}function cg(t,e){b(e,!0)}var ug=w('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),dg=w('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),vg=w('<div class="text-base-content/60"> </div>'),fg=w('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),hg=w('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),pg=w('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),gg=w('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!></main>',1),mg=w('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function _g(t,e){K(e,!0);let r,a=B(null),n=B(!0),i=B(!1),o=B(!1);function l(k,T,O){localStorage.setItem("appwrite-user-email",k),localStorage.setItem("appwrite-user-name",T)}async function d(){const k=wn();r=Kc(k);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const P=await(await window.AppwriteClient.getAccount()).get();l(P.email,P.name),await J.initialize(r,k)}catch(T){const O=T instanceof Error?T.message:"Erreur lors de l'initialisation";b(a,O,!0),console.error("[App] Erreur initialisation:",T)}finally{b(n,!1)}}xo(async()=>{await d()});async function f(){b(o,!1),b(n,!0),b(a,null),await d()}ac(()=>{J.destroy()});async function h(){if(!(!r||s(i))){b(i,!0);try{const k=wn();await J.forceReload(r,k)}catch(k){console.error("[App] Erreur lors du rechargement forcé:",k)}finally{b(i,!1)}}}const m=G(()=>s(a)||J.error),g=G(()=>s(n)||J.loading);var p=mg(),_=C(p),y=c(_);og(y,{});var x=u(y,2);{var S=k=>{Cp(k)},E=k=>{var T=gg(),O=C(T),P=c(O),L=c(P),te=u(c(L),2),V=c(te);{var U=j=>{var ee=ug();v(j,ee)};$(V,j=>{J.realtimeConnected&&j(U)})}var le=u(V,2);{var ge=j=>{var ee=dg();v(j,ee)};$(le,j=>{J.syncing&&j(ge)})}var Pe=u(le,2);{var H=j=>{var ee=vg(),de=c(ee);I($e=>N(de,`Maj: ${$e??""}`),[()=>new Date(J.lastSync).toLocaleTimeString()]),v(j,ee)};$(Pe,j=>{J.lastSync&&j(H)})}var ce=u(Pe,2);lg(ce);var ye=u(ce,2);{var se=j=>{var ee=fg();let de;ee.__click=h;var $e=c(ee);xu($e,{class:"h-4 w-4"}),I(z=>{de=Te(ee,1,"btn btn-outline btn-sm",null,de,z),ee.disabled=s(i)||J.loading},[()=>({loading:s(i)||J.loading})]),v(j,ee)};$(ye,j=>{s(a)||j(se)})}var re=u(ye,2);{var me=j=>{var ee=hg(),de=c(ee);de.__click=[cg,o];var $e=c(de);gu($e,{class:"mr-2 h-4 w-4"}),v(j,ee)};$(re,j=>{s(a)&&j(me)})}var we=u(O,2),F=c(we);{var Z=j=>{jp(j,{get message(){return s(m)}})},M=j=>{var ee=X(),de=C(ee);{var $e=z=>{Rp(z,{get message(){return s(m)}})};$(de,z=>{s(m)&&z($e)},!0)}v(j,ee)};$(F,j=>{s(a)?j(Z):j(M,!1)})}var ae=u(F,2);{var R=j=>{Np(j,{})},ie=j=>{var ee=X(),de=C(ee);{var $e=z=>{var Q=pg();v(z,Q)};$(de,z=>{!J.loading&&!s(a)&&z($e)},!0)}v(j,ee)};$(ae,j=>{J.enrichedProducts.length>0?j(R):j(ie,!1)})}v(k,T)};$(x,k=>{s(g)?k(S):k(E,!1)})}var A=u(_,2);{var D=k=>{Jp(k,{onClose:()=>b(o,!1),onAuthSuccess:f})};$(A,k=>{s(o)&&k(D)})}v(t,p),Y()}Ge(["click"]);const di=document.getElementById("app_products");if(!di)throw new Error("Élément target non trouvé: #app_products");Ol(_g,{target:di});
