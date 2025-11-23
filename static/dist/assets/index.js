(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const Tn=!1;var ra=Array.isArray,di=Array.prototype.indexOf,hs=Array.from,ts=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,vi=Object.getOwnPropertyDescriptors,Dn=Object.prototype,fi=Array.prototype,ps=Object.getPrototypeOf,qs=Object.isExtensible;function Mr(t){return typeof t=="function"}const oe=()=>{};function hi(t){for(var e=0;e<t.length;e++)t[e]()}function Mn(){var t,e,r=new Promise((a,n)=>{t=a,e=n});return{promise:r,resolve:t,reject:e}}function ba(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const r=[];for(const a of t)if(r.push(a),r.length===e)break;return r}const yt=2,gs=4,ms=8,ir=16,Ft=32,xr=64,_s=128,Tt=256,ya=512,ct=1024,Pt=2048,lr=4096,Ct=8192,Pr=16384,$a=32768,cr=65536,js=1<<17,pi=1<<18,Br=1<<19,gi=1<<20,rs=1<<21,ka=1<<22,mr=1<<23,_r=Symbol("$state"),Nn=Symbol("legacy props"),mi=Symbol(""),Kr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Cn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function _i(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function bi(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function yi(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function wi(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Si(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function xi(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Pi(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function $i(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ki(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ei(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Ea=1,Aa=2,In=4,Ai=8,Ti=16,Di=1,Mi=2,Ni=4,Ci=8,Ii=16,Ri=4,Oi=1,qi=2,at=Symbol(),ji="http://www.w3.org/1999/xhtml",Li="http://www.w3.org/2000/svg",Bi="@attach";function zi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ui(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Hi=!1;function Rn(t){return t===this.v}function On(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Wi(t,e){return t!==e}function qn(t){return!On(t,this.v)}let zr=!1,Qi=!1;function Gi(){zr=!0}const Vi=[];function Tr(t,e=!1,r=!1){return ga(t,new Map,"",Vi,null,r)}function ga(t,e,r,a,n=null,i=!1){if(typeof t=="object"&&t!==null){var o=e.get(t);if(o!==void 0)return o;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(ra(t)){var l=Array(t.length);e.set(t,l),n!==null&&e.set(n,l);for(var d=0;d<t.length;d+=1){var f=t[d];d in t&&(l[d]=ga(f,e,r,a,null,i))}return l}if(ps(t)===Dn){l={},e.set(t,l),n!==null&&e.set(n,l);for(var h in t)l[h]=ga(t[h],e,r,a,null,i);return l}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function"&&!i)return ga(t.toJSON(),e,r,a,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}let Ze=null;function Ir(t){Ze=t}function J(t,e=!1,r){Ze={p:Ze,c:null,e:null,s:t,x:null,l:zr&&!e?{s:null,u:null,$:[]}:null}}function Z(t){var e=Ze,r=e.e;if(r!==null){e.e=null;for(var a of r)Jn(a)}return Ze=e.p,{}}function Ur(){return!zr||Ze!==null&&Ze.l===null}let hr=[];function jn(){var t=hr;hr=[],hi(t)}function ar(t){if(hr.length===0&&!Yr){var e=hr;queueMicrotask(()=>{e===hr&&jn()})}hr.push(t)}function Fi(){for(;hr.length>0;)jn()}const Ki=new WeakMap;function Ln(t){var e=Ce;if(e===null)return Re.f|=mr,t;if((e.f&$a)===0){if((e.f&_s)===0)throw!e.parent&&t instanceof Error&&Bn(t),t;e.b.error(t)}else Rr(t,e)}function Rr(t,e){for(;e!==null;){if((e.f&_s)!==0)try{e.b.error(t);return}catch(r){t=r}e=e.parent}throw t instanceof Error&&Bn(t),t}function Bn(t){const e=Ki.get(t);e&&(ts(t,"message",{value:e.message}),ts(t,"stack",{value:e.stack}))}const ua=new Set;let He=null,ma=null,as=new Set,qt=[],Ta=null,ss=!1,Yr=!1;class At{current=new Map;#e=new Map;#t=new Set;#r=0;#o=null;#u=[];#l=[];#c=[];#i=[];#d=[];#n=[];skipped_effects=new Set;process(e){qt=[],ma=null;var r=At.apply(this);for(const i of e)this.#v(i);if(this.#r===0){this.#f();var a=this.#l,n=this.#c;this.#l=[],this.#c=[],this.#i=[],ma=this,He=null,Ls(a),Ls(n),ma=null,this.#o?.resolve()}else this.#a(this.#l),this.#a(this.#c),this.#a(this.#i);r();for(const i of this.#u)Xr(i);this.#u=[]}#v(e){e.f^=ct;for(var r=e.first;r!==null;){var a=r.f,n=(a&(Ft|xr))!==0,i=n&&(a&ct)!==0,o=i||(a&Ct)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){n?r.f^=ct:(a&gs)!==0?this.#c.push(r):(a&ct)===0&&((a&ka)!==0&&r.b?.is_pending()?this.#u.push(r):Ia(r)&&((r.f&ir)!==0&&this.#i.push(r),Xr(r)));var l=r.first;if(l!==null){r=l;continue}}var d=r.parent;for(r=r.next;r===null&&d!==null;)r=d.next,d=d.parent}}#a(e){for(const r of e)((r.f&Pt)!==0?this.#d:this.#n).push(r),pt(r,ct);e.length=0}capture(e,r){this.#e.has(e)||this.#e.set(e,r),this.current.set(e,e.v)}activate(){He=this}deactivate(){He=null}flush(){if(qt.length>0){if(this.activate(),zn(),He!==null&&He!==this)return}else this.#r===0&&this.#f();this.deactivate();for(const e of as)if(as.delete(e),e(),He!==null)break}#f(){for(const e of this.#t)e();if(this.#t.clear(),ua.size>1){this.#e.clear();let e=!0;for(const r of ua){if(r===this){e=!1;continue}for(const[a,n]of this.current){if(r.current.has(a))if(e)r.current.set(a,n);else continue;Un(a)}if(qt.length>0){He=r;const a=At.apply(r);for(const n of qt)r.#v(n);qt=[],a()}}He=null}ua.delete(this)}increment(){this.#r+=1}decrement(){this.#r-=1;for(const e of this.#d)pt(e,Pt),wr(e);for(const e of this.#n)pt(e,lr),wr(e);this.flush()}add_callback(e){this.#t.add(e)}settled(){return(this.#o??=Mn()).promise}static ensure(){if(He===null){const e=He=new At;ua.add(He),Yr||At.enqueue(()=>{He===e&&e.flush()})}return He}static enqueue(e){ar(e)}static apply(e){return oe}}function Yi(t){var e=Yr;Yr=!0;try{for(var r;;){if(Fi(),qt.length===0&&(He?.flush(),qt.length===0))return Ta=null,r;zn()}}finally{Yr=e}}function zn(){var t=Nr;ss=!0;try{var e=0;for(Hs(!0);qt.length>0;){var r=At.ensure();if(e++>1e3){var a,n;Ji()}r.process(qt),rr.clear()}}finally{ss=!1,Hs(t),Ta=null}}function Ji(){try{Si()}catch(t){Rr(t,Ta)}}let vr=null;function Ls(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var a=t[r++];if((a.f&(Pr|Ct))===0&&Ia(a)&&(vr=[],Xr(a),a.deps===null&&a.first===null&&a.nodes_start===null&&(a.teardown===null&&a.ac===null?eo(a):a.fn=null),vr?.length>0)){rr.clear();for(const n of vr)Xr(n);vr=[]}}vr=null}}function Un(t){if(t.reactions!==null)for(const e of t.reactions){const r=e.f;(r&yt)!==0?Un(e):(r&(ka|ir))!==0&&(pt(e,Pt),wr(e))}}function wr(t){for(var e=Ta=t;e.parent!==null;){e=e.parent;var r=e.f;if(ss&&e===Ce&&(r&ir)!==0)return;if((r&(xr|Ft))!==0){if((r&ct)===0)return;e.f^=ct}}qt.push(e)}function bs(t){let e=0,r=sr(0),a;return()=>{fl()&&(s(r),Ps(()=>(e===0&&(a=kr(()=>t(()=>jt(r)))),e+=1,()=>{ar(()=>{e-=1,e===0&&(a?.(),a=void 0,jt(r))})})))}}var Zi=cr|Br|_s;function Xi(t,e,r){new el(t,e,r)}class el{parent;#e=!1;#t;#r=null;#o;#u;#l;#c=null;#i=null;#d=null;#n=null;#v=0;#a=0;#f=!1;#h=null;#p=()=>{this.#h&&Or(this.#h,this.#v)};#S=bs(()=>(this.#h=sr(this.#v),()=>{this.#h=null}));constructor(e,r,a){this.#t=e,this.#o=r,this.#u=a,this.parent=Ce.b,this.#e=!!this.#o.pending,this.#l=Zt(()=>{Ce.b=this;{try{this.#c=ot(()=>a(this.#t))}catch(n){this.error(n)}this.#a>0?this.#g():this.#e=!1}},Zi)}#x(){try{this.#c=ot(()=>this.#u(this.#t))}catch(e){this.error(e)}this.#e=!1}#_(){const e=this.#o.pending;e&&(this.#i=ot(()=>e(this.#t)),At.enqueue(()=>{this.#c=this.#s(()=>(At.ensure(),ot(()=>this.#u(this.#t)))),this.#a>0?this.#g():(Qt(this.#i,()=>{this.#i=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#o.pending}#s(e){var r=Ce,a=Re,n=Ze;Lt(this.#l),_t(this.#l),Ir(this.#l.ctx);try{return e()}catch(i){return Ln(i),null}finally{Lt(r),_t(a),Ir(n)}}#g(){const e=this.#o.pending;this.#c!==null&&(this.#n=document.createDocumentFragment(),tl(this.#c,this.#n)),this.#i===null&&(this.#i=ot(()=>e(this.#t)))}#m(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(e);return}this.#a+=e,this.#a===0&&(this.#e=!1,this.#i&&Qt(this.#i,()=>{this.#i=null}),this.#n&&(this.#t.before(this.#n),this.#n=null),ar(()=>{At.ensure().flush()}))}update_pending_count(e){this.#m(e),this.#v+=e,as.add(this.#p)}get_effect_pending(){return this.#S(),s(this.#h)}error(e){var r=this.#o.onerror;let a=this.#o.failed;if(this.#f||!r&&!a)throw e;this.#c&&(it(this.#c),this.#c=null),this.#i&&(it(this.#i),this.#i=null),this.#d&&(it(this.#d),this.#d=null);var n=!1,i=!1;const o=()=>{if(n){Ui();return}n=!0,i&&Ei(),At.ensure(),this.#v=0,this.#d!==null&&Qt(this.#d,()=>{this.#d=null}),this.#e=this.has_pending_snippet(),this.#c=this.#s(()=>(this.#f=!1,ot(()=>this.#u(this.#t)))),this.#a>0?this.#g():this.#e=!1};var l=Re;try{_t(null),i=!0,r?.(e,o),i=!1}catch(d){Rr(d,this.#l&&this.#l.parent)}finally{_t(l)}a&&ar(()=>{this.#d=this.#s(()=>{this.#f=!0;try{return ot(()=>{a(this.#t,()=>e,()=>o)})}catch(d){return Rr(d,this.#l.parent),null}finally{this.#f=!1}})})}}function tl(t,e){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var n=r===a?null:aa(r);e.append(r),r=n}}function Hn(t,e,r){const a=Ur()?Da:ys;if(e.length===0){r(t.map(a));return}var n=He,i=Ce,o=rl();Promise.all(e.map(l=>al(l))).then(l=>{o();try{r([...t.map(a),...l])}catch(d){(i.f&Pr)===0&&Rr(d,i)}n?.deactivate(),Wn()}).catch(l=>{Rr(l,i)})}function rl(){var t=Ce,e=Re,r=Ze,a=He;return function(){Lt(t),_t(e),Ir(r),a?.activate()}}function Wn(){Lt(null),_t(null),Ir(null)}function Da(t){var e=yt|Pt,r=Re!==null&&(Re.f&yt)!==0?Re:null;return Ce===null||r!==null&&(r.f&Tt)!==0?e|=Tt:Ce.f|=Br,{ctx:Ze,deps:null,effects:null,equals:Rn,f:e,fn:t,reactions:null,rv:0,v:at,wv:0,parent:r??Ce,ac:null}}function al(t,e){let r=Ce;r===null&&_i();var a=r.b,n=void 0,i=sr(at),o=!Re,l=new Map;return pl(()=>{var d=Mn();n=d.promise;try{Promise.resolve(t()).then(d.resolve,d.reject)}catch(g){d.reject(g)}var f=He,h=a.is_pending();o&&(a.update_pending_count(1),h||(f.increment(),l.get(f)?.reject(Kr),l.set(f,d)));const m=(g,p=void 0)=>{h||f.activate(),p?p!==Kr&&(i.f|=mr,Or(i,p)):((i.f&mr)!==0&&(i.f^=mr),Or(i,g)),o&&(a.update_pending_count(-1),h||f.decrement()),Wn()};d.promise.then(m,g=>m(null,g||"unknown"))}),xs(()=>{for(const d of l.values())d.reject(Kr)}),new Promise(d=>{function f(h){function m(){h===n?d(i):f(n)}h.then(m,m)}f(n)})}function G(t){const e=Da(t);return ao(e),e}function ys(t){const e=Da(t);return e.equals=qn,e}function Qn(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)it(e[r])}}function sl(t){for(var e=t.parent;e!==null;){if((e.f&yt)===0)return e;e=e.parent}return null}function ws(t){var e,r=Ce;Lt(sl(t));try{Qn(t),e=io(t)}finally{Lt(r)}return e}function Gn(t){var e=ws(t);if(t.equals(e)||(t.v=e,t.wv=no()),!$r){var r=(Xt||(t.f&Tt)!==0)&&t.deps!==null?lr:ct;pt(t,r)}}const rr=new Map;function sr(t,e){var r={f:0,v:t,reactions:null,equals:Rn,rv:0,wv:0};return r}function L(t,e){const r=sr(t);return ao(r),r}function nl(t,e=!1,r=!0){const a=sr(t);return e||(a.equals=qn),zr&&r&&Ze!==null&&Ze.l!==null&&(Ze.l.s??=[]).push(a),a}function b(t,e,r=!1){Re!==null&&(!Mt||(Re.f&js)!==0)&&Ur()&&(Re.f&(yt|ir|ka|js))!==0&&!Gt?.includes(t)&&ki();let a=r?je(e):e;return Or(t,a)}function Or(t,e){if(!t.equals(e)){var r=t.v;$r?rr.set(t,e):rr.set(t,r),t.v=e;var a=At.ensure();a.capture(t,r),(t.f&yt)!==0&&((t.f&Pt)!==0&&ws(t),pt(t,(t.f&Tt)===0?ct:lr)),t.wv=no(),Vn(t,Pt),Ur()&&Ce!==null&&(Ce.f&ct)!==0&&(Ce.f&(Ft|xr))===0&&(Et===null?_l([t]):Et.push(t))}return e}function jt(t){b(t,t.v+1)}function Vn(t,e){var r=t.reactions;if(r!==null)for(var a=Ur(),n=r.length,i=0;i<n;i++){var o=r[i],l=o.f;if(!(!a&&o===Ce)){var d=(l&Pt)===0;d&&pt(o,e),(l&yt)!==0?Vn(o,lr):d&&((l&ir)!==0&&vr!==null&&vr.push(o),wr(o))}}}function je(t){if(typeof t!="object"||t===null||_r in t)return t;const e=ps(t);if(e!==Dn&&e!==fi)return t;var r=new Map,a=ra(t),n=L(0),i=Vt,o=l=>{if(Vt===i)return l();var d=Re,f=Vt;_t(null),Qs(i);var h=l();return _t(d),Qs(f),h};return a&&r.set("length",L(t.length)),new Proxy(t,{defineProperty(l,d,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Pi();var h=r.get(d);return h===void 0?h=o(()=>{var m=L(f.value);return r.set(d,m),m}):b(h,f.value,!0),!0},deleteProperty(l,d){var f=r.get(d);if(f===void 0){if(d in l){const h=o(()=>L(at));r.set(d,h),jt(n)}}else b(f,at),jt(n);return!0},get(l,d,f){if(d===_r)return t;var h=r.get(d),m=d in l;if(h===void 0&&(!m||tr(l,d)?.writable)&&(h=o(()=>{var p=je(m?l[d]:at),_=L(p);return _}),r.set(d,h)),h!==void 0){var g=s(h);return g===at?void 0:g}return Reflect.get(l,d,f)},getOwnPropertyDescriptor(l,d){var f=Reflect.getOwnPropertyDescriptor(l,d);if(f&&"value"in f){var h=r.get(d);h&&(f.value=s(h))}else if(f===void 0){var m=r.get(d),g=m?.v;if(m!==void 0&&g!==at)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return f},has(l,d){if(d===_r)return!0;var f=r.get(d),h=f!==void 0&&f.v!==at||Reflect.has(l,d);if(f!==void 0||Ce!==null&&(!h||tr(l,d)?.writable)){f===void 0&&(f=o(()=>{var g=h?je(l[d]):at,p=L(g);return p}),r.set(d,f));var m=s(f);if(m===at)return!1}return h},set(l,d,f,h){var m=r.get(d),g=d in l;if(a&&d==="length")for(var p=f;p<m.v;p+=1){var _=r.get(p+"");_!==void 0?b(_,at):p in l&&(_=o(()=>L(at)),r.set(p+"",_))}if(m===void 0)(!g||tr(l,d)?.writable)&&(m=o(()=>L(void 0)),b(m,je(f)),r.set(d,m));else{g=m.v!==at;var w=o(()=>je(f));b(m,w)}var P=Reflect.getOwnPropertyDescriptor(l,d);if(P?.set&&P.set.call(h,f),!g){if(a&&typeof d=="string"){var S=r.get("length"),D=Number(d);Number.isInteger(D)&&D>=S.v&&b(S,D+1)}jt(n)}return!0},ownKeys(l){s(n);var d=Reflect.ownKeys(l).filter(m=>{var g=r.get(m);return g===void 0||g.v!==at});for(var[f,h]of r)h.v!==at&&!(f in l)&&d.push(f);return d},setPrototypeOf(){$i()}})}function Bs(t){try{if(t!==null&&typeof t=="object"&&_r in t)return t[_r]}catch{}return t}function ol(t,e){return Object.is(Bs(t),Bs(e))}var zs,Fn,Kn,Yn;function il(){if(zs===void 0){zs=window,Fn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Kn=tr(e,"firstChild").get,Yn=tr(e,"nextSibling").get,qs(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),qs(r)&&(r.__t=void 0)}}function Kt(t=""){return document.createTextNode(t)}function qr(t){return Kn.call(t)}function aa(t){return Yn.call(t)}function c(t,e){return qr(t)}function C(t,e=!1){{var r=qr(t);return r instanceof Comment&&r.data===""?aa(r):r}}function u(t,e=1,r=!1){let a=t;for(;e--;)a=aa(a);return a}function ll(t){t.textContent=""}function Ma(){return!1}function cl(t,e){if(e){const r=document.body;t.autofocus=!0,ar(()=>{document.activeElement===r&&t.focus()})}}let Us=!1;function ul(){Us||(Us=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function Hr(t){var e=Re,r=Ce;_t(null),Lt(null);try{return t()}finally{_t(e),Lt(r)}}function Ss(t,e,r,a=r){t.addEventListener(e,()=>Hr(r));const n=t.__on_r;n?t.__on_r=()=>{n(),a(!0)}:t.__on_r=()=>a(!0),ul()}function dl(t){Ce===null&&Re===null&&wi(),Re!==null&&(Re.f&Tt)!==0&&Ce===null&&yi(),$r&&bi()}function vl(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function Yt(t,e,r,a=!0){var n=Ce;n!==null&&(n.f&Ct)!==0&&(t|=Ct);var i={ctx:Ze,deps:null,nodes_start:null,nodes_end:null,f:t|Pt,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Xr(i),i.f|=$a}catch(d){throw it(i),d}else e!==null&&wr(i);if(a){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Br)===0&&(o=o.first),o!==null&&(o.parent=n,n!==null&&vl(o,n),Re!==null&&(Re.f&yt)!==0&&(t&xr)===0)){var l=Re;(l.effects??=[]).push(o)}}return i}function fl(){return Re!==null&&!Mt}function xs(t){const e=Yt(ms,null,!1);return pt(e,ct),e.teardown=t,e}function Jt(t){dl();var e=Ce.f,r=!Re&&(e&Ft)!==0&&(e&$a)===0;if(r){var a=Ze;(a.e??=[]).push(t)}else return Jn(t)}function Jn(t){return Yt(gs|gi,t,!1)}function hl(t){At.ensure();const e=Yt(xr|Br,t,!0);return(r={})=>new Promise(a=>{r.outro?Qt(e,()=>{it(e),a(void 0)}):(it(e),a(void 0))})}function Na(t){return Yt(gs,t,!1)}function pl(t){return Yt(ka|Br,t,!0)}function Ps(t,e=0){return Yt(ms|e,t,!0)}function I(t,e=[],r=[]){Hn(e,r,a=>{Yt(ms,()=>t(...a.map(s)),!0)})}function Zt(t,e=0){var r=Yt(ir|e,t,!0);return r}function ot(t,e=!0){return Yt(Ft|Br,t,!0,e)}function Zn(t){var e=t.teardown;if(e!==null){const r=$r,a=Re;Ws(!0),_t(null);try{e.call(null)}finally{Ws(r),_t(a)}}}function Xn(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const n=r.ac;n!==null&&Hr(()=>{n.abort(Kr)});var a=r.next;(r.f&xr)!==0?r.parent=null:it(r,e),r=a}}function gl(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&Ft)===0&&it(e),e=r}}function it(t,e=!0){var r=!1;(e||(t.f&pi)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(ml(t.nodes_start,t.nodes_end),r=!0),Xn(t,e&&!r),wa(t,0),pt(t,Pr);var a=t.transitions;if(a!==null)for(const i of a)i.stop();Zn(t);var n=t.parent;n!==null&&n.first!==null&&eo(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function ml(t,e){for(;t!==null;){var r=t===e?null:aa(t);t.remove(),t=r}}function eo(t){var e=t.parent,r=t.prev,a=t.next;r!==null&&(r.next=a),a!==null&&(a.prev=r),e!==null&&(e.first===t&&(e.first=a),e.last===t&&(e.last=r))}function Qt(t,e){var r=[];$s(t,r,!0),to(r,()=>{it(t),e&&e()})}function to(t,e){var r=t.length;if(r>0){var a=()=>--r||e();for(var n of t)n.out(a)}else e()}function $s(t,e,r){if((t.f&Ct)===0){if(t.f^=Ct,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&e.push(o);for(var a=t.first;a!==null;){var n=a.next,i=(a.f&cr)!==0||(a.f&Ft)!==0;$s(a,e,i?r:!1),a=n}}}function Ca(t){ro(t,!0)}function ro(t,e){if((t.f&Ct)!==0){t.f^=Ct,(t.f&ct)===0&&(pt(t,Pt),wr(t));for(var r=t.first;r!==null;){var a=r.next,n=(r.f&cr)!==0||(r.f&Ft)!==0;ro(r,n?e:!1),r=a}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let Nr=!1;function Hs(t){Nr=t}let $r=!1;function Ws(t){$r=t}let Re=null,Mt=!1;function _t(t){Re=t}let Ce=null;function Lt(t){Ce=t}let Gt=null;function ao(t){Re!==null&&(Gt===null?Gt=[t]:Gt.push(t))}let ht=null,xt=0,Et=null;function _l(t){Et=t}let so=1,Zr=0,Vt=Zr;function Qs(t){Vt=t}let Xt=!1;function no(){return++so}function Ia(t){var e=t.f;if((e&Pt)!==0)return!0;if((e&lr)!==0){var r=t.deps,a=(e&Tt)!==0;if(r!==null){var n,i,o=(e&ya)!==0,l=a&&Ce!==null&&!Xt,d=r.length;if((o||l)&&(Ce===null||(Ce.f&Pr)===0)){var f=t,h=f.parent;for(n=0;n<d;n++)i=r[n],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=ya),l&&h!==null&&(h.f&Tt)===0&&(f.f^=Tt)}for(n=0;n<d;n++)if(i=r[n],Ia(i)&&Gn(i),i.wv>t.wv)return!0}(!a||Ce!==null&&!Xt)&&pt(t,ct)}return!1}function oo(t,e,r=!0){var a=t.reactions;if(a!==null&&!Gt?.includes(t))for(var n=0;n<a.length;n++){var i=a[n];(i.f&yt)!==0?oo(i,e,!1):e===i&&(r?pt(i,Pt):(i.f&ct)!==0&&pt(i,lr),wr(i))}}function io(t){var e=ht,r=xt,a=Et,n=Re,i=Xt,o=Gt,l=Ze,d=Mt,f=Vt,h=t.f;ht=null,xt=0,Et=null,Xt=(h&Tt)!==0&&(Mt||!Nr||Re===null),Re=(h&(Ft|xr))===0?t:null,Gt=null,Ir(t.ctx),Mt=!1,Vt=++Zr,t.ac!==null&&(Hr(()=>{t.ac.abort(Kr)}),t.ac=null);try{t.f|=rs;var m=t.fn,g=m(),p=t.deps;if(ht!==null){var _;if(wa(t,xt),p!==null&&xt>0)for(p.length=xt+ht.length,_=0;_<ht.length;_++)p[xt+_]=ht[_];else t.deps=p=ht;if(!Xt||(h&yt)!==0&&t.reactions!==null)for(_=xt;_<p.length;_++)(p[_].reactions??=[]).push(t)}else p!==null&&xt<p.length&&(wa(t,xt),p.length=xt);if(Ur()&&Et!==null&&!Mt&&p!==null&&(t.f&(yt|lr|Pt))===0)for(_=0;_<Et.length;_++)oo(Et[_],t);return n!==null&&n!==t&&(Zr++,Et!==null&&(a===null?a=Et:a.push(...Et))),(t.f&mr)!==0&&(t.f^=mr),g}catch(w){return Ln(w)}finally{t.f^=rs,ht=e,xt=r,Et=a,Re=n,Xt=i,Gt=o,Ir(l),Mt=d,Vt=f}}function bl(t,e){let r=e.reactions;if(r!==null){var a=di.call(r,t);if(a!==-1){var n=r.length-1;n===0?r=e.reactions=null:(r[a]=r[n],r.pop())}}r===null&&(e.f&yt)!==0&&(ht===null||!ht.includes(e))&&(pt(e,lr),(e.f&(Tt|ya))===0&&(e.f^=ya),Qn(e),wa(e,0))}function wa(t,e){var r=t.deps;if(r!==null)for(var a=e;a<r.length;a++)bl(t,r[a])}function Xr(t){var e=t.f;if((e&Pr)===0){pt(t,ct);var r=Ce,a=Nr;Ce=t,Nr=!0;try{(e&ir)!==0?gl(t):Xn(t),Zn(t);var n=io(t);t.teardown=typeof n=="function"?n:null,t.wv=so;var i;Tn&&Qi&&(t.f&Pt)!==0&&t.deps}finally{Nr=a,Ce=r}}}async function yl(){await Promise.resolve(),Yi()}function s(t){var e=t.f,r=(e&yt)!==0;if(Re!==null&&!Mt){var a=Ce!==null&&(Ce.f&Pr)!==0;if(!a&&!Gt?.includes(t)){var n=Re.deps;if((Re.f&rs)!==0)t.rv<Zr&&(t.rv=Zr,ht===null&&n!==null&&n[xt]===t?xt++:ht===null?ht=[t]:(!Xt||!ht.includes(t))&&ht.push(t));else{(Re.deps??=[]).push(t);var i=t.reactions;i===null?t.reactions=[Re]:i.includes(Re)||i.push(Re)}}}else if(r&&t.deps===null&&t.effects===null){var o=t,l=o.parent;l!==null&&(l.f&Tt)===0&&(o.f^=Tt)}if($r){if(rr.has(t))return rr.get(t);if(r){o=t;var d=o.v;return((o.f&ct)===0&&o.reactions!==null||lo(o))&&(d=ws(o)),rr.set(o,d),d}}else r&&(o=t,Ia(o)&&Gn(o));if((t.f&mr)!==0)throw t.v;return t.v}function lo(t){if(t.v===at)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(rr.has(e)||(e.f&yt)!==0&&lo(e))return!0;return!1}function kr(t){var e=Mt;try{return Mt=!0,t()}finally{Mt=e}}const wl=-7169;function pt(t,e){t.f=t.f&wl|e}function Sl(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const xl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Pl(t){return xl.includes(t)}const $l={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function kl(t){return t=t.toLowerCase(),$l[t]??t}const El=["touchstart","touchmove"];function Al(t){return El.includes(t)}const co=new Set,ns=new Set;function ks(t,e,r,a={}){function n(i){if(a.capture||Fr.call(e,i),!i.cancelBubble)return Hr(()=>r?.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?ar(()=>{e.addEventListener(t,n,a)}):e.addEventListener(t,n,a),n}function os(t,e,r,a={}){var n=ks(e,t,r,a);return()=>{t.removeEventListener(e,n,a)}}function Cr(t,e,r,a,n){var i={capture:a,passive:n},o=ks(t,e,r,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&xs(()=>{e.removeEventListener(t,o,i)})}function Ye(t){for(var e=0;e<t.length;e++)co.add(t[e]);for(var r of ns)r(t)}let Gs=null;function Fr(t){var e=this,r=e.ownerDocument,a=t.type,n=t.composedPath?.()||[],i=n[0]||t.target;Gs=t;var o=0,l=Gs===t&&t.__root;if(l){var d=n.indexOf(l);if(d!==-1&&(e===document||e===window)){t.__root=e;return}var f=n.indexOf(e);if(f===-1)return;d<=f&&(o=d)}if(i=n[o]||t.target,i!==e){ts(t,"currentTarget",{configurable:!0,get(){return i||r}});var h=Re,m=Ce;_t(null),Lt(null);try{for(var g,p=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var w=i["__"+a];if(w!=null&&(!i.disabled||t.target===i))if(ra(w)){var[P,...S]=w;P.apply(i,[t,...S])}else w.call(i,t)}catch(D){g?p.push(D):g=D}if(t.cancelBubble||_===e||_===null)break;i=_}if(g){for(let D of p)queueMicrotask(()=>{throw D});throw g}}finally{t.__root=e,delete t.currentTarget,_t(h),Lt(m)}}}function uo(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function jr(t,e){var r=Ce;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function y(t,e){var r=(e&Oi)!==0,a=(e&qi)!==0,n,i=!t.startsWith("<!>");return()=>{n===void 0&&(n=uo(i?t:"<!>"+t),r||(n=qr(n)));var o=a||Fn?document.importNode(n,!0):n.cloneNode(!0);if(r){var l=qr(o),d=o.lastChild;jr(l,d)}else jr(o,o);return o}}function Tl(t,e,r="svg"){var a=!t.startsWith("<!>"),n=`<${r}>${a?t:"<!>"+t}</${r}>`,i;return()=>{if(!i){var o=uo(n),l=qr(o);i=qr(l)}var d=i.cloneNode(!0);return jr(d,d),d}}function Dl(t,e){return Tl(t,e,"svg")}function bt(t=""){{var e=Kt(t+"");return jr(e,e),e}}function Y(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Kt();return t.append(e,r),jr(e,r),t}function v(t,e){t!==null&&t.before(e)}let Sa=!0;function Vs(t){Sa=t}function N(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??=t.nodeValue)&&(t.__t=r,t.nodeValue=r+"")}function Ml(t,e){return Nl(t,e)}const Dr=new Map;function Nl(t,{target:e,anchor:r,props:a={},events:n,context:i,intro:o=!0}){il();var l=new Set,d=m=>{for(var g=0;g<m.length;g++){var p=m[g];if(!l.has(p)){l.add(p);var _=Al(p);e.addEventListener(p,Fr,{passive:_});var w=Dr.get(p);w===void 0?(document.addEventListener(p,Fr,{passive:_}),Dr.set(p,1)):Dr.set(p,w+1)}}};d(hs(co)),ns.add(d);var f=void 0,h=hl(()=>{var m=r??e.appendChild(Kt());return Xi(m,{pending:()=>{}},g=>{if(i){J({});var p=Ze;p.c=i}n&&(a.$$events=n),Sa=o,f=t(g,a)||{},Sa=!0,i&&Z()}),()=>{for(var g of l){e.removeEventListener(g,Fr);var p=Dr.get(g);--p===0?(document.removeEventListener(g,Fr),Dr.delete(g)):Dr.set(g,p)}ns.delete(d),m!==r&&m.parentNode?.removeChild(m)}});return Cl.set(f,h),f}let Cl=new WeakMap;function $(t,e,r=!1){var a=t,n=null,i=null,o=at,l=r?cr:0,d=!1;const f=(p,_=!0)=>{d=!0,g(_,p)};var h=null;function m(){h!==null&&(h.lastChild.remove(),a.before(h),h=null);var p=o?n:i,_=o?i:n;p&&Ca(p),_&&Qt(_,()=>{o?i=null:n=null})}const g=(p,_)=>{if(o!==(o=p)){var w=Ma(),P=a;if(w&&(h=document.createDocumentFragment(),h.append(P=Kt())),o?n??=_&&ot(()=>_(P)):i??=_&&ot(()=>_(P)),w){var S=He,D=o?n:i,A=o?i:n;D&&S.skipped_effects.delete(D),A&&S.skipped_effects.add(A),S.add_callback(m)}else m()}};Zt(()=>{d=!1,e(f),d||g(null,null)},l)}function Il(t,e,r){var a=t,n=at,i,o,l=null,d=Ur()?Wi:On;function f(){i&&Qt(i),l!==null&&(l.lastChild.remove(),a.before(l),l=null),i=o}Zt(()=>{if(d(n,n=e())){var h=a,m=Ma();m&&(l=document.createDocumentFragment(),l.append(h=Kt())),o=ot(()=>r(h)),m?He.add_callback(f):f()}})}function Sr(t,e){return e}function Rl(t,e,r){for(var a=t.items,n=[],i=e.length,o=0;o<i;o++)$s(e[o].e,n,!0);var l=i>0&&n.length===0&&r!==null;if(l){var d=r.parentNode;ll(d),d.append(r),a.clear(),Ot(t,e[0].prev,e[i-1].next)}to(n,()=>{for(var f=0;f<i;f++){var h=e[f];l||(a.delete(h.k),Ot(t,h.prev,h.next)),it(h.e,!l)}})}function st(t,e,r,a,n,i=null){var o=t,l={flags:e,items:new Map,first:null},d=(e&In)!==0;if(d){var f=t;o=f.appendChild(Kt())}var h=null,m=!1,g=new Map,p=ys(()=>{var S=r();return ra(S)?S:S==null?[]:hs(S)}),_,w;function P(){Ol(w,_,l,g,o,n,e,a,r),i!==null&&(_.length===0?h?Ca(h):h=ot(()=>i(o)):h!==null&&Qt(h,()=>{h=null}))}Zt(()=>{w??=Ce,_=s(p);var S=_.length;if(!(m&&S===0)){m=S===0;var D,A,E,k;if(Ma()){var T=new Set,O=He;for(A=0;A<S;A+=1){E=_[A],k=a(E,A);var x=l.items.get(k)??g.get(k);x?(e&(Ea|Aa))!==0&&vo(x,E,A,e):(D=fo(null,l,null,null,E,k,A,n,e,r,!0),g.set(k,D)),T.add(k)}for(const[W,te]of l.items)T.has(W)||O.skipped_effects.add(te.e);O.add_callback(P)}else P();s(p)}})}function Ol(t,e,r,a,n,i,o,l,d){var f=(o&Ai)!==0,h=(o&(Ea|Aa))!==0,m=e.length,g=r.items,p=r.first,_=p,w,P=null,S,D=[],A=[],E,k,T,O;if(f)for(O=0;O<m;O+=1)E=e[O],k=l(E,O),T=g.get(k),T!==void 0&&(T.a?.measure(),(S??=new Set).add(T));for(O=0;O<m;O+=1){if(E=e[O],k=l(E,O),T=g.get(k),T===void 0){var x=a.get(k);if(x!==void 0){a.delete(k),g.set(k,x);var W=P?P.next:_;Ot(r,P,x),Ot(r,x,W),Qa(x,W,n),P=x}else{var te=_?_.e.nodes_start:n;P=fo(te,r,P,P===null?r.first:P.next,E,k,O,i,o,d)}g.set(k,P),D=[],A=[],_=P.next;continue}if(h&&vo(T,E,O,o),(T.e.f&Ct)!==0&&(Ca(T.e),f&&(T.a?.unfix(),(S??=new Set).delete(T))),T!==_){if(w!==void 0&&w.has(T)){if(D.length<A.length){var V=A[0],z;P=V.prev;var le=D[0],ge=D[D.length-1];for(z=0;z<D.length;z+=1)Qa(D[z],V,n);for(z=0;z<A.length;z+=1)w.delete(A[z]);Ot(r,le.prev,ge.next),Ot(r,P,le),Ot(r,ge,V),_=V,P=ge,O-=1,D=[],A=[]}else w.delete(T),Qa(T,_,n),Ot(r,T.prev,T.next),Ot(r,T,P===null?r.first:P.next),Ot(r,P,T),P=T;continue}for(D=[],A=[];_!==null&&_.k!==k;)(_.e.f&Ct)===0&&(w??=new Set).add(_),A.push(_),_=_.next;if(_===null)continue;T=_}D.push(T),P=T,_=T.next}if(_!==null||w!==void 0){for(var Pe=w===void 0?[]:hs(w);_!==null;)(_.e.f&Ct)===0&&Pe.push(_),_=_.next;var U=Pe.length;if(U>0){var ce=(o&In)!==0&&m===0?n:null;if(f){for(O=0;O<U;O+=1)Pe[O].a?.measure();for(O=0;O<U;O+=1)Pe[O].a?.fix()}Rl(r,Pe,ce)}}f&&ar(()=>{if(S!==void 0)for(T of S)T.a?.apply()}),t.first=r.first&&r.first.e,t.last=P&&P.e;for(var ye of a.values())it(ye.e);a.clear()}function vo(t,e,r,a){(a&Ea)!==0&&Or(t.v,e),(a&Aa)!==0?Or(t.i,r):t.i=r}function fo(t,e,r,a,n,i,o,l,d,f,h){var m=(d&Ea)!==0,g=(d&Ti)===0,p=m?g?nl(n,!1,!1):sr(n):n,_=(d&Aa)===0?o:sr(o),w={i:_,v:p,k:i,a:null,e:null,prev:r,next:a};try{if(t===null){var P=document.createDocumentFragment();P.append(t=Kt())}return w.e=ot(()=>l(t,p,_,f),Hi),w.e.prev=r&&r.e,w.e.next=a&&a.e,r===null?h||(e.first=w):(r.next=w,r.e.next=w.e),a!==null&&(a.prev=w,a.e.prev=w.e),w}finally{}}function Qa(t,e,r){for(var a=t.next?t.next.e.nodes_start:r,n=e?e.e.nodes_start:r,i=t.e.nodes_start;i!==null&&i!==a;){var o=aa(i);n.before(i),i=o}}function Ot(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function fe(t,e,...r){var a=t,n=oe,i;Zt(()=>{n!==(n=e())&&(i&&(it(i),i=null),i=ot(()=>n(a,...r)))},cr)}function br(t,e,r){var a=t,n,i,o=null,l=null;function d(){i&&(Qt(i),i=null),o&&(o.lastChild.remove(),a.before(o),o=null),i=l,l=null}Zt(()=>{if(n!==(n=e())){var f=Ma();if(n){var h=a;f&&(o=document.createDocumentFragment(),o.append(h=Kt()),i&&He.skipped_effects.add(i)),l=ot(()=>r(h,n))}f?He.add_callback(d):d()}},cr)}function ql(t,e,r,a,n,i){var o,l,d=null,f=t,h;Zt(()=>{const m=e()||null;var g=Li;m!==o&&(h&&(m===null?Qt(h,()=>{h=null,l=null}):m===l?Ca(h):(it(h),Vs(!1))),m&&m!==l&&(h=ot(()=>{if(d=document.createElementNS(g,m),jr(d,d),a){var p=d.appendChild(Kt());a(d,p)}Ce.nodes_end=d,f.before(d)})),o=m,o&&(l=o),Vs(!0))},cr)}function jl(t,e){var r=void 0,a;Zt(()=>{r!==(r=e())&&(a&&(it(a),a=null),r&&(a=ot(()=>{Na(()=>r(t))})))})}function ho(t){var e,r,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(r=ho(t[e]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);return a}function Ll(){for(var t,e,r=0,a="",n=arguments.length;r<n;r++)(t=arguments[r])&&(e=ho(t))&&(a&&(a+=" "),a+=e);return a}function Bl(t){return typeof t=="object"?Ll(t):t??""}const Fs=[...` 	
\r\f \v\uFEFF`];function zl(t,e,r){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),r){for(var n in r)if(r[n])a=a?a+" "+n:n;else if(a.length)for(var i=n.length,o=0;(o=a.indexOf(n,o))>=0;){var l=o+i;(o===0||Fs.includes(a[o-1]))&&(l===a.length||Fs.includes(a[l]))?a=(o===0?"":a.substring(0,o))+a.substring(l+1):o=l}}return a===""?null:a}function Ks(t,e=!1){var r=e?" !important;":";",a="";for(var n in t){var i=t[n];i!=null&&i!==""&&(a+=" "+n+": "+i+r)}return a}function Ga(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Ul(t,e){if(e){var r="",a,n;if(Array.isArray(e)?(a=e[0],n=e[1]):a=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,d=[];a&&d.push(...Object.keys(a).map(Ga)),n&&d.push(...Object.keys(n).map(Ga));var f=0,h=-1;const w=t.length;for(var m=0;m<w;m++){var g=t[m];if(l?g==="/"&&t[m-1]==="*"&&(l=!1):i?i===g&&(i=!1):g==="/"&&t[m+1]==="*"?l=!0:g==='"'||g==="'"?i=g:g==="("?o++:g===")"&&o--,!l&&i===!1&&o===0){if(g===":"&&h===-1)h=m;else if(g===";"||m===w-1){if(h!==-1){var p=Ga(t.substring(f,h).trim());if(!d.includes(p)){g!==";"&&m++;var _=t.substring(f,m).trim();r+=" "+_+";"}}f=m+1,h=-1}}}}return a&&(r+=Ks(a)),n&&(r+=Ks(n,!0)),r=r.trim(),r===""?null:r}return t==null?null:String(t)}function Me(t,e,r,a,n,i){var o=t.__className;if(o!==r||o===void 0){var l=zl(r,a,i);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t.__className=r}else if(i&&n!==i)for(var d in i){var f=!!i[d];(n==null||f!==!!n[d])&&t.classList.toggle(d,f)}return i}function Va(t,e={},r,a){for(var n in r){var i=r[n];e[n]!==i&&(r[n]==null?t.style.removeProperty(n):t.style.setProperty(n,i,a))}}function po(t,e,r,a){var n=t.__style;if(n!==e){var i=Ul(e,a);i==null?t.removeAttribute("style"):t.style.cssText=i,t.__style=e}else a&&(Array.isArray(a)?(Va(t,r?.[0],a[0]),Va(t,r?.[1],a[1],"important")):Va(t,r,a));return a}function xa(t,e,r=!1){if(t.multiple){if(e==null)return;if(!ra(e))return zi();for(var a of t.options)a.selected=e.includes(Jr(a));return}for(a of t.options){var n=Jr(a);if(ol(n,e)){a.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function go(t){var e=new MutationObserver(()=>{xa(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),xs(()=>{e.disconnect()})}function Pa(t,e,r=e){var a=!0;Ss(t,"change",n=>{var i=n?"[selected]":":checked",o;if(t.multiple)o=[].map.call(t.querySelectorAll(i),Jr);else{var l=t.querySelector(i)??t.querySelector("option:not([disabled])");o=l&&Jr(l)}r(o)}),Na(()=>{var n=e();if(xa(t,n,a),a&&n===void 0){var i=t.querySelector(":checked");i!==null&&(n=Jr(i),r(n))}t.__value=n,a=!1}),go(t)}function Jr(t){return"__value"in t?t.__value:t.value}const Gr=Symbol("class"),Vr=Symbol("style"),mo=Symbol("is custom element"),_o=Symbol("is html");function Hl(t,e){var r=Ra(t);r.value===(r.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e??"")}function Fa(t,e){var r=Ra(t);r.checked!==(r.checked=e??void 0)&&(t.checked=e)}function Wl(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function nr(t,e,r,a){var n=Ra(t);n[e]!==(n[e]=r)&&(e==="loading"&&(t[mi]=r),r==null?t.removeAttribute(e):typeof r!="string"&&bo(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function Ql(t,e,r,a,n=!1,i=!1){var o=Ra(t),l=o[mo],d=!o[_o],f=e||{},h=t.tagName==="OPTION";for(var m in e)m in r||(r[m]=null);r.class?r.class=Bl(r.class):r[Gr]&&(r.class=null),r[Vr]&&(r.style??=null);var g=bo(t);for(const E in r){let k=r[E];if(h&&E==="value"&&k==null){t.value=t.__value="",f[E]=k;continue}if(E==="class"){var p=t.namespaceURI==="http://www.w3.org/1999/xhtml";Me(t,p,k,a,e?.[Gr],r[Gr]),f[E]=k,f[Gr]=r[Gr];continue}if(E==="style"){po(t,k,e?.[Vr],r[Vr]),f[E]=k,f[Vr]=r[Vr];continue}var _=f[E];if(!(k===_&&!(k===void 0&&t.hasAttribute(E)))){f[E]=k;var w=E[0]+E[1];if(w!=="$$")if(w==="on"){const T={},O="$$"+E;let x=E.slice(2);var P=Pl(x);if(Sl(x)&&(x=x.slice(0,-7),T.capture=!0),!P&&_){if(k!=null)continue;t.removeEventListener(x,f[O],T),f[O]=null}if(k!=null)if(P)t[`__${x}`]=k,Ye([x]);else{let W=function(te){f[E].call(this,te)};var A=W;f[O]=ks(x,t,W,T)}else P&&(t[`__${x}`]=void 0)}else if(E==="style")nr(t,E,k);else if(E==="autofocus")cl(t,!!k);else if(!l&&(E==="__value"||E==="value"&&k!=null))t.value=t.__value=k;else if(E==="selected"&&h)Wl(t,k);else{var S=E;d||(S=kl(S));var D=S==="defaultValue"||S==="defaultChecked";if(k==null&&!l&&!D)if(o[E]=null,S==="value"||S==="checked"){let T=t;const O=e===void 0;if(S==="value"){let x=T.defaultValue;T.removeAttribute(S),T.defaultValue=x,T.value=T.__value=O?x:null}else{let x=T.defaultChecked;T.removeAttribute(S),T.defaultChecked=x,T.checked=O?x:!1}}else t.removeAttribute(E);else D||g.includes(S)&&(l||typeof k!="string")?(t[S]=k,S in o&&(o[S]=at)):typeof k!="function"&&nr(t,S,k)}}}return f}function is(t,e,r=[],a=[],n,i=!1,o=!1){Hn(r,a,l=>{var d=void 0,f={},h=t.nodeName==="SELECT",m=!1;if(Zt(()=>{var p=e(...l.map(s)),_=Ql(t,d,p,n,i,o);m&&h&&"value"in p&&xa(t,p.value);for(let P of Object.getOwnPropertySymbols(f))p[P]||it(f[P]);for(let P of Object.getOwnPropertySymbols(p)){var w=p[P];P.description===Bi&&(!d||w!==d[P])&&(f[P]&&it(f[P]),f[P]=ot(()=>jl(t,()=>w))),_[P]=w}d=_}),h){var g=t;Na(()=>{xa(g,d.value,!0),go(g)})}m=!0})}function Ra(t){return t.__attributes??={[mo]:t.nodeName.includes("-"),[_o]:t.namespaceURI===ji}}var Ys=new Map;function bo(t){var e=t.getAttribute("is")||t.nodeName,r=Ys.get(e);if(r)return r;Ys.set(e,r=[]);for(var a,n=t,i=Element.prototype;i!==n;){a=vi(n);for(var o in a)a[o].set&&r.push(o);n=ps(n)}return r}const Gl=()=>performance.now(),Wt={tick:t=>requestAnimationFrame(t),now:()=>Gl(),tasks:new Set};function yo(){const t=Wt.now();Wt.tasks.forEach(e=>{e.c(t)||(Wt.tasks.delete(e),e.f())}),Wt.tasks.size!==0&&Wt.tick(yo)}function Vl(t){let e;return Wt.tasks.size===0&&Wt.tick(yo),{promise:new Promise(r=>{Wt.tasks.add(e={c:t,f:r})}),abort(){Wt.tasks.delete(e)}}}function Js(t,e){Hr(()=>{t.dispatchEvent(new CustomEvent(e))})}function Fl(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Zs(t){const e={},r=t.split(";");for(const a of r){const[n,i]=a.split(":");if(!n||i===void 0)break;const o=Fl(n.trim());e[o]=i.trim()}return e}const Kl=t=>t;function Yl(t,e,r,a){var n=(t&Ri)!==0,i="in",o,l=e.inert,d=e.style.overflow,f,h;function m(){return Hr(()=>o??=r()(e,a?.()??{},{direction:i}))}var g={is_global:n,in(){e.inert=l,f?.abort(),Js(e,"introstart"),f=wo(e,m(),h,1,()=>{Js(e,"introend"),f?.abort(),f=o=void 0,e.style.overflow=d})},out(P){{P?.(),o=void 0;return}},stop:()=>{f?.abort()}},p=Ce;if((p.transitions??=[]).push(g),Sa){var _=n;if(!_){for(var w=p.parent;w&&(w.f&cr)!==0;)for(;(w=w.parent)&&(w.f&ir)===0;);_=!w||(w.f&$a)!==0}_&&Na(()=>{kr(()=>g.in())})}}function wo(t,e,r,a,n){if(Mr(e)){var i,o=!1;return ar(()=>{if(!o){var w=e({direction:"in"});i=wo(t,w,r,a,n)}}),{abort:()=>{o=!0,i?.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(!e?.duration)return n(),{abort:oe,deactivate:oe,reset:oe,t:()=>a};const{delay:l=0,css:d,tick:f,easing:h=Kl}=e;var m=[];if(f&&f(0,1),d){var g=Zs(d(0,1));m.push(g,g)}var p=()=>1-a,_=t.animate(m,{duration:l,fill:"forwards"});return _.onfinish=()=>{_.cancel();var w=1-a,P=a-w,S=e.duration*Math.abs(P),D=[];if(S>0){var A=!1;if(d)for(var E=Math.ceil(S/16.666666666666668),k=0;k<=E;k+=1){var T=w+P*h(k/E),O=Zs(d(T,1-T));D.push(O),A||=O.overflow==="hidden"}A&&(t.style.overflow="hidden"),p=()=>{var x=_.currentTime;return w+P*h(x/S)},f&&Vl(()=>{if(_.playState!=="running")return!1;var x=p();return f(x,1-x),!0})}_=t.animate(D,{duration:S,fill:"forwards"}),_.onfinish=()=>{p=()=>a,f?.(a,1-a),n()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=oe)},deactivate:()=>{n=oe},reset:()=>{},t:()=>p()}}function Ke(t,e,r=e){var a=new WeakSet;Ss(t,"input",async n=>{var i=n?t.defaultValue:t.value;if(i=Ka(t)?Ya(i):i,r(i),He!==null&&a.add(He),await yl(),i!==(i=e())){var o=t.selectionStart,l=t.selectionEnd;t.value=i??"",l!==null&&(t.selectionStart=o,t.selectionEnd=Math.min(l,t.value.length))}}),kr(e)==null&&t.value&&(r(Ka(t)?Ya(t.value):t.value),He!==null&&a.add(He)),Ps(()=>{var n=e();if(t===document.activeElement){var i=ma??He;if(a.has(i))return}Ka(t)&&n===Ya(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function ls(t,e,r=e){Ss(t,"change",a=>{var n=a?t.defaultChecked:t.checked;r(n)}),kr(e)==null&&r(t.checked),Ps(()=>{var a=e();t.checked=!!a})}function Ka(t){var e=t.type;return e==="number"||e==="range"}function Ya(t){return t===""?null:+t}let da=!1;function Jl(t){var e=da;try{return da=!1,[t(),da]}finally{da=e}}const Zl={get(t,e){if(!t.exclude.includes(e))return t.props[e]},set(t,e){return!1},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function _e(t,e,r){return new Proxy({props:t,exclude:e},Zl)}const Xl={get(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Mr(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a)return a[e]}},set(t,e,r){let a=t.props.length;for(;a--;){let n=t.props[a];Mr(n)&&(n=n());const i=tr(n,e);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Mr(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a){const n=tr(a,e);return n&&!n.configurable&&(n.configurable=!0),n}}},has(t,e){if(e===_r||e===Nn)return!1;for(let r of t.props)if(Mr(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(t){const e=[];for(let r of t.props)if(Mr(r)&&(r=r()),!!r){for(const a in r)e.includes(a)||e.push(a);for(const a of Object.getOwnPropertySymbols(r))e.includes(a)||e.push(a)}return e}};function Se(...t){return new Proxy({props:t},Xl)}function pe(t,e,r,a){var n=!zr||(r&Mi)!==0,i=(r&Ci)!==0,o=(r&Ii)!==0,l=a,d=!0,f=()=>(d&&(d=!1,l=o?kr(a):a),l),h;if(i){var m=_r in t||Nn in t;h=tr(t,e)?.set??(m&&e in t?A=>t[e]=A:void 0)}var g,p=!1;i?[g,p]=Jl(()=>t[e]):g=t[e],g===void 0&&a!==void 0&&(g=f(),h&&(n&&xi(),h(g)));var _;if(n?_=()=>{var A=t[e];return A===void 0?f():(d=!0,A)}:_=()=>{var A=t[e];return A!==void 0&&(l=void 0),A===void 0?l:A},n&&(r&Ni)===0)return _;if(h){var w=t.$$legacy;return(function(A,E){return arguments.length>0?((!n||!E||w||p)&&h(E?_():A),A):_()})}var P=!1,S=((r&Di)!==0?Da:ys)(()=>(P=!1,_()));i&&s(S);var D=Ce;return(function(A,E){if(arguments.length>0){const k=E?s(S):n&&i?je(A):A;return b(S,k),P=!0,l!==void 0&&(l=k),A}return $r&&P||(D.f&Pr)!==0?S.v:s(S)})}function So(t){Ze===null&&Cn(),zr&&Ze.l!==null?tc(Ze).m.push(t):Jt(()=>{const e=kr(t);if(typeof e=="function")return e})}function ec(t){Ze===null&&Cn(),So(()=>()=>kr(t))}function tc(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const rc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(rc);const ac="modulepreload",sc=function(t){return"/"+t},Xs={},cs=function(e,r,a){let n=Promise.resolve();if(r&&r.length>0){let f=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};var o=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),d=l?.nonce||l?.getAttribute("nonce");n=f(r.map(h=>{if(h=sc(h),h in Xs)return;Xs[h]=!0;const m=h.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const p=document.createElement("link");if(p.rel=m?"stylesheet":ac,m||(p.as="script"),p.crossOrigin="",p.href=h,d&&p.setAttribute("nonce",d),document.head.appendChild(p),m)return new Promise((_,w)=>{p.addEventListener("load",_),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(l){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=l,window.dispatchEvent(d),!d.defaultPrevented)throw l}return n.then(l=>{for(const d of l||[])d.status==="rejected"&&i(d.reason);return e().catch(i)})};class en extends Map{#e=new Map;#t=L(0);#r=L(0);#o=Vt||-1;constructor(e){if(super(),e){for(var[r,a]of e)super.set(r,a);this.#r.v=super.size}}#u(e){return Vt===this.#o?L(e):sr(e)}has(e){var r=this.#e,a=r.get(e);if(a===void 0){var n=super.get(e);if(n!==void 0)a=this.#u(0),r.set(e,a);else return s(this.#t),!1}return s(a),!0}forEach(e,r){this.#l(),super.forEach(e,r)}get(e){var r=this.#e,a=r.get(e);if(a===void 0){var n=super.get(e);if(n!==void 0)a=this.#u(0),r.set(e,a);else{s(this.#t);return}}return s(a),super.get(e)}set(e,r){var a=this.#e,n=a.get(e),i=super.get(e),o=super.set(e,r),l=this.#t;if(n===void 0)n=this.#u(0),a.set(e,n),b(this.#r,super.size),jt(l);else if(i!==r){jt(n);var d=l.reactions===null?null:new Set(l.reactions),f=d===null||!n.reactions?.every(h=>d.has(h));f&&jt(l)}return o}delete(e){var r=this.#e,a=r.get(e),n=super.delete(e);return a!==void 0&&(r.delete(e),b(this.#r,super.size),b(a,-1),jt(this.#t)),n}clear(){if(super.size!==0){super.clear();var e=this.#e;b(this.#r,0);for(var r of e.values())b(r,-1);jt(this.#t),e.clear()}}#l(){s(this.#t);var e=this.#e;if(this.#r.v!==e.size){for(var r of super.keys())if(!e.has(r)){var a=this.#u(0);e.set(r,a)}}for([,a]of this.#e)s(a)}keys(){return s(this.#t),super.keys()}values(){return this.#l(),super.values()}entries(){return this.#l(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#r),super.size}}class nc{#e;#t;constructor(e,r){this.#e=e,this.#t=bs(r)}get current(){return this.#t(),this.#e()}}const oc=/\(.+\)/,ic=new Set(["all","print","screen","and","or","not","only"]);class lc extends nc{constructor(e,r){let a=oc.test(e)||e.split(/[\s,]+/).some(i=>ic.has(i.trim()))?e:`(${e})`;const n=window.matchMedia(a);super(()=>n.matches,i=>os(n,"change",i))}}const cc=typeof window<"u"?window:void 0;function uc(t){let e=t.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}class dc{#e;#t;constructor(e={}){const{window:r=cc,document:a=r?.document}=e;r!==void 0&&(this.#e=a,this.#t=bs(n=>{const i=os(r,"focusin",n),o=os(r,"focusout",n);return()=>{i(),o()}}))}get current(){return this.#t?.(),this.#e?uc(this.#e):null}}new dc;function vc(t){return typeof t=="function"}function fc(t,e){if(vc(t)){const a=t();return a===void 0?e:a}return t===void 0?e:t}function hc(t,e){let r=L(null);const a=G(()=>fc(e,250));function n(...i){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let o,l;const d=new Promise((f,h)=>{o=f,l=h});b(r,{timeout:null,runner:null,promise:d,resolve:o,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const o=s(r);b(r,null);try{o.resolve(await t.apply(this,i))}catch(l){o.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(a)),s(r).promise}return n.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),b(r,null))},n.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(n,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),n}function Nt(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(e){return console.warn("[ProductsStore] Erreur parsing JSON:",e),null}}function sa(t){return t?.length?t.filter(e=>e.quantity!=null&&e.unit).map(e=>({q:typeof e.quantity=="number"?e.quantity:parseFloat(e.quantity),u:e.unit})).filter(e=>!isNaN(e.q)):[]}function na(t){if(!t?.length)return[];const e=new Map;return t.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const a=e.get(r.u)||0;e.set(r.u,a+r.q)}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function oa(t,e){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!e?.length){const l=t.map(d=>er(d.q.toString(),d.u)).join(" et ");return{numeric:t,display:l}}const r=new Map,a=new Map;t.forEach(l=>{const d=parseFloat(l.q);isNaN(d)||r.set(l.u,(r.get(l.u)||0)+d)}),e.forEach(l=>{a.set(l.u,(a.get(l.u)||0)+l.q)});const n=[],i=[];r.forEach((l,d)=>{const f=a.get(d)||0,h=l-f;h>0&&(n.push({q:h,u:d}),i.push(er(h.toString(),d)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:n,display:o}}function ut(t){return t?.length?t.map(e=>er(e.q.toString(),e.u)).join(" et "):"-"}function er(t,e){const r=parseFloat(t);if(isNaN(r))return`${t} ${e}`;if((e==="gr."||e==="ml")&&r>=1e3){const a=r/1e3,n=e==="gr."?"kg":"l.";let o=(Math.round(a*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${n}`}if(!["gr.","ml","kg","l."].includes(e)){let n=(Math.round(r*10)/10).toString();return n.endsWith(",0")&&(n=n.slice(0,-2)),`${n} ${e}`}return`${r} ${e}`}function Oa(t){if(!t?.length)return[];const e=new Map;return t.forEach(({q:r,u:a})=>{if(typeof r=="number"&&!isNaN(r)){const n=e.get(a)||0;e.set(a,n+r)}}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function xo(t){return t?Object.values(t).some(e=>e.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Po(t){if(!t)return[];const e=[];return Object.entries(t).forEach(([r,a])=>{a.recipes?.forEach(n=>{e.push({...n,date:r,dateTimeService:r})})}),e}function qa(t){if(!t)return[];const e=Object.values(t).flatMap(r=>r.totalConsolidated);return Oa(e)}function Es(t,e){const r=new Map,a=new Map;t.forEach(({q:o,u:l})=>{r.set(l,(r.get(l)||0)+o)}),e.forEach(({q:o,u:l})=>{a.set(l,(a.get(l)||0)+o)});const n=[],i=new Set([...r.keys(),...a.keys()]);for(const o of i){const l=r.get(o)||0,d=a.get(o)||0,f=l-d;Math.abs(f)>.001&&n.push({q:f,u:o})}return n}function ja(t){if(!t?.length)return"Équilibré";const e=t.filter(a=>a.q>0),r=t.filter(a=>a.q<0);if(e.length>0&&r.length>0){const a=e.map(i=>er(i.q.toString(),i.u)).join(" et "),n=r.map(i=>er(Math.abs(i.q).toString(),i.u)).join(" et ");return`${a} disponibles, ${n} manquant${r.length>1?"s":""}`}else return e.length>0?e.map(a=>"+"+er(a.q.toString(),a.u)).join(" et ")+" disponibles":r.length>0?r.map(a=>er(Math.abs(a.q).toString(),a.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function $o(t,e){if(e.searchQuery.trim()){const r=e.searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(e.selectedStores.length>0&&(!t.storeInfo?.storeName||!e.selectedStores.includes(t.storeInfo.storeName))||e.selectedWho.length>0&&(!t.who||!t.who.some(r=>e.selectedWho.includes(r)))||e.selectedProductTypes.length>0&&(!t.productType||!e.selectedProductTypes.includes(t.productType))||e.selectedTemperatures.length>0&&!(e.selectedTemperatures.includes("frais")&&t.pFrais||e.selectedTemperatures.includes("surgele")&&t.pSurgel))}function pc(t){return t.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const gc=Object.freeze(Object.defineProperty({__proto__:null,aggregateByUnit:Oa,calculateAndFormatMissing:oa,calculateGlobalTotal:qa,calculateTotalQuantityArray:na,formatSingleQuantity:er,formatStockResult:ja,formatTotalQuantity:ut,generateRecipesWithDates:Po,hasConversions:xo,matchesFilters:$o,safeJsonParse:Nt,slugify:pc,subtractQuantities:Es,transformPurchasesToNumericQuantity:sa},Symbol.toStringTag,{value:"Module"}));function tn(t){return{...t,products:t.products?.map(e=>typeof e=="string"?e:e.$id)||[],mainId:t.mainId}}function mc(t){const e=Nt(t.specs)??null,r=na(sa(t.purchases??[]));let a=[];e?.quantity&&(a=[e.quantity]);const{numeric:n,display:i}=oa(a,r),o=Nt(t.stockReel)??null,l=ut(r),d=t.store?Nt(t.store):null,f=o?`${o.quantity} ${o.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid||"",productName:t.productName,productType:t.productType||"none",pFrais:e?.pFrais??!1,pSurgel:e?.pSurgel??!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,totalNeededRaw:[],status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,specs:t.specs,byDate:{},storeInfo:d,stockParsed:o,specsParsed:e,totalNeededArray:a,totalPurchasesArray:r,missingQuantityArray:n,stockOrTotalPurchases:f,displayTotalNeeded:ut(a),displayTotalPurchases:l,displayMissingQuantity:i,totalNeededOverrideParsed:Nt(t.totalNeededOverride),displayTotalOverride:(()=>{const h=Nt(t.totalNeededOverride);return h?ut([h.totalOverride]):""})()}}function va(t,e){const r=t.purchases??e.purchases,a=t.specs??e.specs,n=a?Nt(a):e.specsParsed,i=na(sa(r??[])),o=ut(i);let l=e.totalNeededArray;!e.productHugoUuid&&n?.quantity&&(l=[n.quantity]);const{numeric:d,display:f}=oa(l,i),h=t.stockReel??e.stockReel,m=h?Nt(h):e.stockParsed,g=t.store??e.store,p=g?Nt(g):e.storeInfo,_=m?`${m.quantity} ${m.unit}`:o;return t.purchases===void 0&&e.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${e.purchases.length} purchases pour ${e.productName}`),{...e,$updatedAt:t.$updatedAt,productName:t.productName??e.productName,productType:t.productType??e.productType,isSynced:t.isSynced??e.isSynced,mainId:t.mainId??e.mainId,pFrais:n?.pFrais??e.pFrais,pSurgel:n?.pSurgel??e.pSurgel,status:t.status??e.status,who:t.who??e.who,store:g,stockReel:h,specs:a,purchases:r,previousNames:t.previousNames??e.previousNames,isMerged:t.isMerged??e.isMerged,mergedFrom:t.mergedFrom??e.mergedFrom,mergeDate:t.mergeDate??e.mergeDate,mergeReason:t.mergeReason??e.mergeReason,mergedInto:t.mergedInto??e.mergedInto,totalNeededOverride:t.totalNeededOverride??e.totalNeededOverride,storeInfo:p,stockParsed:m,specsParsed:n,totalNeededArray:l,totalPurchasesArray:i,missingQuantityArray:d,stockOrTotalPurchases:_,displayTotalPurchases:o,displayMissingQuantity:f,displayTotalNeeded:ut(l),totalNeededOverrideParsed:Nt(t.totalNeededOverride??e.totalNeededOverride),displayTotalOverride:(()=>{const w=Nt(t.totalNeededOverride??e.totalNeededOverride);return w?ut([w.totalOverride]):""})()}}class _c{#e=L(je([]));MAX_TOASTS=3;get toasts(){return[...s(this.#e)].sort((e,r)=>r.timestamp-e.timestamp)}create(e){const r=e.id||crypto.randomUUID(),a={id:r,state:e.state,message:e.message,timestamp:Date.now(),source:e.source||"user",timeoutId:void 0,details:e.details,actions:e.actions||[]};return this.#t(a),r}update(e,r){const a=s(this.#e).findIndex(i=>i.id===e);if(a===-1)return;const n=s(this.#e)[a];n.timeoutId&&clearTimeout(n.timeoutId),s(this.#e)[a]={...n,state:r.state||n.state,message:r.message||n.message,source:r.source||n.source,actions:r.actions||n.actions},this.#r(s(this.#e)[a])}async track(e,r){const a=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const n=await e;return this.update(a,{state:"success",message:r.success||"Opération réussie"}),n}catch(n){throw this.update(a,{state:"error",message:r.error||"Erreur lors de l'opération"}),n}}dismiss(e){const r=s(this.#e).findIndex(n=>n.id===e);if(r===-1)return;const a=s(this.#e)[r];a.timeoutId&&clearTimeout(a.timeoutId),s(this.#e).splice(r,1)}dismissAll(){s(this.#e).forEach(e=>{e.timeoutId&&clearTimeout(e.timeoutId)}),b(this.#e,[],!0)}#t(e){if(e.source==="user"){const r=s(this.#e).findIndex(a=>a.source==="user");r>=0?s(this.#e)[r]=e:s(this.#e).push(e)}else{const r=s(this.#e).filter(a=>a.source!=="user");if(r.length>=2){const a=r[0];this.dismiss(a.id)}s(this.#e).push(e)}s(this.#e).length>this.MAX_TOASTS&&s(this.#e).splice(0,s(this.#e).length-this.MAX_TOASTS),this.#r(e)}#r(e){if(e.state!=="success"&&e.state!=="info")return;const r=e.source==="realtime-other"?4e3:2e3;e.timeoutId=setTimeout(()=>{this.dismiss(e.id)},r)}success(e,r){return this.create({state:"success",message:e,details:r})}error(e,r){return this.create({state:"error",message:e,details:r})}warning(e,r){return this.create({state:"warning",message:e,source:r?.source||"system",details:r?.details,actions:r?.actions})}info(e,r){return this.create({state:"info",message:e,source:r?.source||"system",details:r?.details})}loading(e,r){return this.create({state:"loading",message:e,details:r})}}const Qe=new _c;function bc(t,e,r,a){if(typeof e=="function"?t!==e||!a:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?a:r==="a"?a.call(t):a?a.value:e.get(t)}class q{constructor(e,r,a){this.method=e,this.attribute=r,a!==void 0&&(Array.isArray(a)?this.values=a:this.values=[a])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}q.equal=(t,e)=>new q("equal",t,e).toString();q.notEqual=(t,e)=>new q("notEqual",t,e).toString();q.lessThan=(t,e)=>new q("lessThan",t,e).toString();q.lessThanEqual=(t,e)=>new q("lessThanEqual",t,e).toString();q.greaterThan=(t,e)=>new q("greaterThan",t,e).toString();q.greaterThanEqual=(t,e)=>new q("greaterThanEqual",t,e).toString();q.isNull=t=>new q("isNull",t).toString();q.isNotNull=t=>new q("isNotNull",t).toString();q.between=(t,e,r)=>new q("between",t,[e,r]).toString();q.startsWith=(t,e)=>new q("startsWith",t,e).toString();q.endsWith=(t,e)=>new q("endsWith",t,e).toString();q.select=t=>new q("select",void 0,t).toString();q.search=(t,e)=>new q("search",t,e).toString();q.orderDesc=t=>new q("orderDesc",t).toString();q.orderAsc=t=>new q("orderAsc",t).toString();q.orderRandom=()=>new q("orderRandom").toString();q.cursorAfter=t=>new q("cursorAfter",void 0,t).toString();q.cursorBefore=t=>new q("cursorBefore",void 0,t).toString();q.limit=t=>new q("limit",void 0,t).toString();q.offset=t=>new q("offset",void 0,t).toString();q.contains=(t,e)=>new q("contains",t,e).toString();q.notContains=(t,e)=>new q("notContains",t,e).toString();q.notSearch=(t,e)=>new q("notSearch",t,e).toString();q.notBetween=(t,e,r)=>new q("notBetween",t,[e,r]).toString();q.notStartsWith=(t,e)=>new q("notStartsWith",t,e).toString();q.notEndsWith=(t,e)=>new q("notEndsWith",t,e).toString();q.createdBefore=t=>q.lessThan("$createdAt",t);q.createdAfter=t=>q.greaterThan("$createdAt",t);q.createdBetween=(t,e)=>q.between("$createdAt",t,e);q.updatedBefore=t=>q.lessThan("$updatedAt",t);q.updatedAfter=t=>q.greaterThan("$updatedAt",t);q.updatedBetween=(t,e)=>q.between("$updatedAt",t,e);q.or=t=>new q("or",void 0,t.map(e=>JSON.parse(e))).toString();q.and=t=>new q("and",void 0,t.map(e=>JSON.parse(e))).toString();q.distanceEqual=(t,e,r,a=!0)=>new q("distanceEqual",t,[[e,r,a]]).toString();q.distanceNotEqual=(t,e,r,a=!0)=>new q("distanceNotEqual",t,[[e,r,a]]).toString();q.distanceGreaterThan=(t,e,r,a=!0)=>new q("distanceGreaterThan",t,[[e,r,a]]).toString();q.distanceLessThan=(t,e,r,a=!0)=>new q("distanceLessThan",t,[[e,r,a]]).toString();q.intersects=(t,e)=>new q("intersects",t,[e]).toString();q.notIntersects=(t,e)=>new q("notIntersects",t,[e]).toString();q.crosses=(t,e)=>new q("crosses",t,[e]).toString();q.notCrosses=(t,e)=>new q("notCrosses",t,[e]).toString();q.overlaps=(t,e)=>new q("overlaps",t,[e]).toString();q.notOverlaps=(t,e)=>new q("notOverlaps",t,[e]).toString();q.touches=(t,e)=>new q("touches",t,[e]).toString();q.notTouches=(t,e)=>new q("notTouches",t,[e]).toString();var rn;(function(t){t[t.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",t[t.POLICY_VIOLATION=1008]="POLICY_VIOLATION",t[t.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(rn||(rn={}));var ko,Eo;class or{static custom(e){return e}static unique(e=7){const r=bc(or,ko,"m",Eo).call(or);let a="";for(let n=0;n<e;n++){const i=Math.floor(Math.random()*16).toString(16);a+=i}return r+a}}ko=or,Eo=function(){const e=new Date,r=Math.floor(e.getTime()/1e3),a=e.getMilliseconds();return r.toString(16)+a.toString(16).padStart(5,"0")};var an;(function(t){t.Equal="equal",t.NotEqual="notEqual",t.GreaterThan="greaterThan",t.GreaterThanEqual="greaterThanEqual",t.LessThan="lessThan",t.LessThanEqual="lessThanEqual",t.Contains="contains",t.IsNull="isNull",t.IsNotNull="isNotNull"})(an||(an={}));var sn;(function(t){t.Totp="totp"})(sn||(sn={}));var nn;(function(t){t.Email="email",t.Phone="phone",t.Totp="totp",t.Recoverycode="recoverycode"})(nn||(nn={}));var on;(function(t){t.Amazon="amazon",t.Apple="apple",t.Auth0="auth0",t.Authentik="authentik",t.Autodesk="autodesk",t.Bitbucket="bitbucket",t.Bitly="bitly",t.Box="box",t.Dailymotion="dailymotion",t.Discord="discord",t.Disqus="disqus",t.Dropbox="dropbox",t.Etsy="etsy",t.Facebook="facebook",t.Figma="figma",t.Github="github",t.Gitlab="gitlab",t.Google="google",t.Linkedin="linkedin",t.Microsoft="microsoft",t.Notion="notion",t.Oidc="oidc",t.Okta="okta",t.Paypal="paypal",t.PaypalSandbox="paypalSandbox",t.Podio="podio",t.Salesforce="salesforce",t.Slack="slack",t.Spotify="spotify",t.Stripe="stripe",t.Tradeshift="tradeshift",t.TradeshiftBox="tradeshiftBox",t.Twitch="twitch",t.Wordpress="wordpress",t.Yahoo="yahoo",t.Yammer="yammer",t.Yandex="yandex",t.Zoho="zoho",t.Zoom="zoom",t.Mock="mock"})(on||(on={}));var ln;(function(t){t.AvantBrowser="aa",t.AndroidWebViewBeta="an",t.GoogleChrome="ch",t.GoogleChromeIOS="ci",t.GoogleChromeMobile="cm",t.Chromium="cr",t.MozillaFirefox="ff",t.Safari="sf",t.MobileSafari="mf",t.MicrosoftEdge="ps",t.MicrosoftEdgeIOS="oi",t.OperaMini="om",t.Opera="op",t.OperaNext="on"})(ln||(ln={}));var cn;(function(t){t.AmericanExpress="amex",t.Argencard="argencard",t.Cabal="cabal",t.Cencosud="cencosud",t.DinersClub="diners",t.Discover="discover",t.Elo="elo",t.Hipercard="hipercard",t.JCB="jcb",t.Mastercard="mastercard",t.Naranja="naranja",t.TarjetaShopping="targeta-shopping",t.UnionPay="unionpay",t.Visa="visa",t.MIR="mir",t.Maestro="maestro",t.Rupay="rupay"})(cn||(cn={}));var un;(function(t){t.Afghanistan="af",t.Angola="ao",t.Albania="al",t.Andorra="ad",t.UnitedArabEmirates="ae",t.Argentina="ar",t.Armenia="am",t.AntiguaAndBarbuda="ag",t.Australia="au",t.Austria="at",t.Azerbaijan="az",t.Burundi="bi",t.Belgium="be",t.Benin="bj",t.BurkinaFaso="bf",t.Bangladesh="bd",t.Bulgaria="bg",t.Bahrain="bh",t.Bahamas="bs",t.BosniaAndHerzegovina="ba",t.Belarus="by",t.Belize="bz",t.Bolivia="bo",t.Brazil="br",t.Barbados="bb",t.BruneiDarussalam="bn",t.Bhutan="bt",t.Botswana="bw",t.CentralAfricanRepublic="cf",t.Canada="ca",t.Switzerland="ch",t.Chile="cl",t.China="cn",t.CoteDIvoire="ci",t.Cameroon="cm",t.DemocraticRepublicOfTheCongo="cd",t.RepublicOfTheCongo="cg",t.Colombia="co",t.Comoros="km",t.CapeVerde="cv",t.CostaRica="cr",t.Cuba="cu",t.Cyprus="cy",t.CzechRepublic="cz",t.Germany="de",t.Djibouti="dj",t.Dominica="dm",t.Denmark="dk",t.DominicanRepublic="do",t.Algeria="dz",t.Ecuador="ec",t.Egypt="eg",t.Eritrea="er",t.Spain="es",t.Estonia="ee",t.Ethiopia="et",t.Finland="fi",t.Fiji="fj",t.France="fr",t.MicronesiaFederatedStatesOf="fm",t.Gabon="ga",t.UnitedKingdom="gb",t.Georgia="ge",t.Ghana="gh",t.Guinea="gn",t.Gambia="gm",t.GuineaBissau="gw",t.EquatorialGuinea="gq",t.Greece="gr",t.Grenada="gd",t.Guatemala="gt",t.Guyana="gy",t.Honduras="hn",t.Croatia="hr",t.Haiti="ht",t.Hungary="hu",t.Indonesia="id",t.India="in",t.Ireland="ie",t.IranIslamicRepublicOf="ir",t.Iraq="iq",t.Iceland="is",t.Israel="il",t.Italy="it",t.Jamaica="jm",t.Jordan="jo",t.Japan="jp",t.Kazakhstan="kz",t.Kenya="ke",t.Kyrgyzstan="kg",t.Cambodia="kh",t.Kiribati="ki",t.SaintKittsAndNevis="kn",t.SouthKorea="kr",t.Kuwait="kw",t.LaoPeopleSDemocraticRepublic="la",t.Lebanon="lb",t.Liberia="lr",t.Libya="ly",t.SaintLucia="lc",t.Liechtenstein="li",t.SriLanka="lk",t.Lesotho="ls",t.Lithuania="lt",t.Luxembourg="lu",t.Latvia="lv",t.Morocco="ma",t.Monaco="mc",t.Moldova="md",t.Madagascar="mg",t.Maldives="mv",t.Mexico="mx",t.MarshallIslands="mh",t.NorthMacedonia="mk",t.Mali="ml",t.Malta="mt",t.Myanmar="mm",t.Montenegro="me",t.Mongolia="mn",t.Mozambique="mz",t.Mauritania="mr",t.Mauritius="mu",t.Malawi="mw",t.Malaysia="my",t.Namibia="na",t.Niger="ne",t.Nigeria="ng",t.Nicaragua="ni",t.Netherlands="nl",t.Norway="no",t.Nepal="np",t.Nauru="nr",t.NewZealand="nz",t.Oman="om",t.Pakistan="pk",t.Panama="pa",t.Peru="pe",t.Philippines="ph",t.Palau="pw",t.PapuaNewGuinea="pg",t.Poland="pl",t.FrenchPolynesia="pf",t.NorthKorea="kp",t.Portugal="pt",t.Paraguay="py",t.Qatar="qa",t.Romania="ro",t.Russia="ru",t.Rwanda="rw",t.SaudiArabia="sa",t.Sudan="sd",t.Senegal="sn",t.Singapore="sg",t.SolomonIslands="sb",t.SierraLeone="sl",t.ElSalvador="sv",t.SanMarino="sm",t.Somalia="so",t.Serbia="rs",t.SouthSudan="ss",t.SaoTomeAndPrincipe="st",t.Suriname="sr",t.Slovakia="sk",t.Slovenia="si",t.Sweden="se",t.Eswatini="sz",t.Seychelles="sc",t.Syria="sy",t.Chad="td",t.Togo="tg",t.Thailand="th",t.Tajikistan="tj",t.Turkmenistan="tm",t.TimorLeste="tl",t.Tonga="to",t.TrinidadAndTobago="tt",t.Tunisia="tn",t.Turkey="tr",t.Tuvalu="tv",t.Tanzania="tz",t.Uganda="ug",t.Ukraine="ua",t.Uruguay="uy",t.UnitedStates="us",t.Uzbekistan="uz",t.VaticanCity="va",t.SaintVincentAndTheGrenadines="vc",t.Venezuela="ve",t.Vietnam="vn",t.Vanuatu="vu",t.Samoa="ws",t.Yemen="ye",t.SouthAfrica="za",t.Zambia="zm",t.Zimbabwe="zw"})(un||(un={}));var dn;(function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE",t.OPTIONS="OPTIONS",t.HEAD="HEAD"})(dn||(dn={}));var vn;(function(t){t.Center="center",t.Topleft="top-left",t.Top="top",t.Topright="top-right",t.Left="left",t.Right="right",t.Bottomleft="bottom-left",t.Bottom="bottom",t.Bottomright="bottom-right"})(vn||(vn={}));var fn;(function(t){t.Jpg="jpg",t.Jpeg="jpeg",t.Png="png",t.Webp="webp",t.Heic="heic",t.Avif="avif",t.Gif="gif"})(fn||(fn={}));var hn;(function(t){t.Http="http",t.Schedule="schedule",t.Event="event"})(hn||(hn={}));var pn;(function(t){t.Waiting="waiting",t.Processing="processing",t.Completed="completed",t.Failed="failed",t.Scheduled="scheduled"})(pn||(pn={}));function Ao(t,e){const{operationName:r,maxAutoRetries:a=1,autoRetryDelay:n=1e3}=e;let i=1,o=null;return new Promise((l,d)=>{const f=async(h=!1)=>{try{h?o=Qe.loading(`Tentative de ${r}...`):i>1?o?Qe.update(o,{state:"loading",message:`${r} (Tentative ${i}/${a+1})...`}):o=Qe.loading(`${r} (Tentative ${i}/${a+1})...`):o=Qe.loading(`${r} en cours...`);const m=await t();o&&Qe.update(o,{state:"success",message:e.successMessage||`${r} réussie !`,action:void 0}),e.onSuccess?.(m),l(m)}catch(m){console.error(`[RetryUtils] Erreur ${r} (Tentative ${i}):`,m);const g=m instanceof Error?m.message:"Erreur inconnue";if(i<=a){i++,o&&Qe.update(o,{state:"loading",message:`Erreur. Nouvelle tentative dans ${n/1e3}s...`}),setTimeout(()=>f(!1),n);return}o&&Qe.update(o,{state:"error",message:`Échec ${r}: ${g}`,action:{label:"Réessayer",onClick:()=>{Qe.dismiss(o),f(!0)}}}),e.onError?.(m)}};f(!1)})}function To(t,e){return{$id:t.$id,mainId:t.mainId,productHugoUuid:t.productHugoUuid,productName:t.productName,...e}}async function wt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getDatabases(),e=window.AppwriteClient.getConfig();return{databases:t,config:e}}async function yc(t){const a=await(await window.AppwriteClient.getAccount()).get();return{...t,updatedBy:a.name}}function pr(){return localStorage.getItem("appwrite-user-name")||""}async function wc(t,e,r=100){try{const{databases:a,config:n}=await wt(),i=await a.listDocuments(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,[q.greaterThan("$updatedAt",e),q.equal("mainId",t),q.limit(r),q.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(a){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",a),[]}}async function Do(t,e){const{lastSync:r,limit:a=100}=e;try{const{databases:n,config:i}=await wt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await n.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[q.equal("mainId",t),q.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),q.limit(a)])).documents;const o=await n.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[q.greaterThan("$updatedAt",r),q.equal("mainId",t),q.limit(a),q.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(n){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${t}:`,n);const i=n instanceof Error?n.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function Er(t,e,r=!0){const{databases:a,config:n}=await wt();return r&&(e.updatedBy=pr()),await a.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,t,e)}async function Ht(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${t} sur Appwrite...`);const n=To(a,e),i=await yc(n),{databases:o,config:l}=await wt(),d=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,t,i);return console.log(`[Appwrite Interactions] Produit ${t} créé avec succès`),d}catch(a){console.error(`[Appwrite Interactions] Erreur création produit ${t}:`,a);const n=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${n}`)}}async function Mo(t,e){try{const{databases:r,config:a}=await wt(),{slugify:n}=await cs(async()=>{const{slugify:h}=await Promise.resolve().then(()=>gc);return{slugify:h}},void 0),o=`${n(t.productName).substring(0,10)}_${Date.now().toString(36)}`,l={quantity:t.quantity,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1},d={productHugoUuid:null,productName:t.productName,productType:t.productType||"Autre",store:t.store?JSON.stringify(t.store):null,who:t.who||[],isSynced:!0,mainId:e,status:"active",updatedBy:pr(),stockReel:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,specs:JSON.stringify(l)};console.log(`[Appwrite Interactions] Création produit manuel ${o}...`,d);const f=await r.createDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,o,d);return console.log(`[Appwrite Interactions] Produit manuel ${o} créé avec succès`),f}catch(r){throw console.error("[Appwrite Interactions] Erreur création produit manuel:",r),r}}async function No(t,e){if(!t)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=e?JSON.stringify(e):null,a=await Er(t,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${t}, nouvelle valeur:`,a.store),a}async function Co(t,e){return Er(t,{who:e})}async function us(t,e){return Er(t,{stockReel:e})}async function As(t,e,r=!1){if(!t)throw new Error("ID du produit requis pour la mise à jour de l'override");const a=JSON.stringify(e),n=await Er(t,{totalNeededOverride:a},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${t}:`,e),n}async function Io(t,e=!0){if(!t)throw new Error("ID du produit requis pour la suppression de l'override");const r=await Er(t,{totalNeededOverride:null},e);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${t}`),r}async function Ro(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour mise à jour batch`);const n={};return e.stockReel!==void 0&&(n.stockReel=e.stockReel),e.who!==void 0&&(n.who=e.who),e.storeInfo!==void 0&&(n.store=JSON.stringify(e.storeInfo)),a.isSynced?(console.log(`[Appwrite Interactions] Produit ${t} déjà sync, update batch normal...`),await Er(t,n)):(console.log(`[Appwrite Interactions] Produit ${t} local, création batch avec upsert...`),await Ht(t,n,r))}catch(a){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${t}:`,a),a}}async function Oo(t){const{databases:e,config:r}=await wt(),a={...t,createdBy:pr()},n=await e.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,or.unique(),a);return console.log("[Appwrite Interactions] Achat créé:",n),n}async function Ts(t,e){try{const{databases:r,config:a}=await wt(),n=await r.getDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t),i={...e,products:e.products||n.products},o=await r.updateDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t,i);return console.log(`[Appwrite Interactions] Achat ${t} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${t}:`,r);const a=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${a}`)}}async function qo(t){try{const{databases:e,config:r}=await wt();await e.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,t),console.log(`[Appwrite Interactions] Achat ${t} supprimé`)}catch(e){console.error(`[Appwrite Interactions] Erreur suppression achat ${t}:`,e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function jo(t){if(!t?.length)return[];try{const{databases:e,config:r}=await wt(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[q.equal("$id",t),q.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${a.documents.length} purchases chargés avec relations products`),a.documents}catch(e){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Lo(t,e={}){let r=null;const a=i=>{const{events:o,payload:l}=i;if(!l)return;const d=o.some(p=>p.includes("products.")),f=o.some(p=>p.includes("purchases.")),h=o.some(p=>p.includes(".create")),m=o.some(p=>p.includes(".update")),g=o.some(p=>p.includes(".delete"));if(d){const p=l;p.updatedBy&&p.updatedBy!==pr()&&(h||m?Qe.info(`${p.updatedBy} a modifié le produit "${p.productName}"`,{source:"realtime-other"}):g&&Qe.info(`${p.updatedBy} a supprimé un produit`,{source:"realtime-other"})),h&&e.onProductCreate?e.onProductCreate(p):m&&e.onProductUpdate?e.onProductUpdate(p):g&&e.onProductDelete&&e.onProductDelete(p.$id)}else if(f){const p=l;if(p.createdBy&&p.createdBy!==pr()){const _=p.products?.[0]?.productName||"un produit";h&&p.who!==pr()?Qe.info(`${p.who} a ajouté un achat pour ${_}`,{source:"realtime-other"}):m&&p.who!==pr()?Qe.info(`${p.who} a modifié un achat pour ${_}`,{source:"realtime-other"}):g&&Qe.info(`${p.who} a supprimé un achat pour ${_}`,{source:"realtime-other"})}h&&e.onPurchaseCreate?e.onPurchaseCreate(p):m&&e.onPurchaseUpdate?e.onPurchaseUpdate(p):g&&e.onPurchaseDelete&&e.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],t,a,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),e.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),e.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),e.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),e.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function Bo(t){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${t}`);const{databases:e}=await wt(),r=window.AppwriteClient.getConfig(),a=await e.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,t);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${a.name}`),a}catch(e){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${t}:`,e),null}}async function zo(t,e,r,a){try{console.log(`[Appwrite Interactions] Création du Main document: ${t}`);const{databases:n}=await wt(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await n.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,t,{name:a,createdBy:l.$id,isActive:!0,originalDataHash:e,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${t}`)}catch(n){throw console.error("[Appwrite Interactions] Erreur création Main document:",n),n}}async function Ds(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"batchUpdateProducts",data:t};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${t.productIds.length} produits, type: ${t.updateType}`);const n=await Ao(()=>e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST"),{operationName:`batchUpdateProducts (${t.productIds.length} products, type: ${t.updateType})`,maxAutoRetries:1,autoRetryDelay:2e3});if(!n)throw new Error("Opération annulée ou échouée après tentatives de mise à jour groupée");if(n.status!=="completed")throw new Error(`Exécution échouée avec statut: ${n.status}. Erreur: ${n.stderr||n.responseBody}`);const i=JSON.parse(n.responseBody);return i.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${i.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,updatedCount:t.productIds.length,updateType:t.updateType,error:r,timestamp:new Date().toISOString()}}}async function Uo(t,e,r,a){return Ds({productIds:t,products:e,updateType:"store",updateData:r,options:a})}async function Ho(t,e,r,a="replace"){return Ds({productIds:t,products:e,updateType:"who",updateData:{names:r},options:{mode:a}})}async function Wo(t,e,r,a={}){try{const{databases:n,config:i}=await wt(),d=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:t,productId:e,productIdType:typeof e,quantities:r,options:a});for(const h of r){const m={products:[e],mainId:t,quantity:h.q,unit:h.u,status:"delivered",notes:a.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:a.store??null,who:d.name,price:null,orderDate:null,deliveryDate:null,createdBy:d.$id,invoiceId:a.invoiceId,invoiceTotal:null},g=await n.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.purchases,or.unique(),m);f.push(g)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${e}`),f}catch(n){console.error("[Appwrite Interactions] Erreur création validation rapide:",n);const i=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${i}`)}}async function Qo(t,e,r,a,n,i){try{const{databases:o,config:l}=await wt(),h=await(await window.AppwriteClient.getAccount()).get(),m=e||or.unique(),g=h.name;if(!r)throw new Error("invoiceTotal est requis pour une dépense");const p={products:[],mainId:t,quantity:1,unit:"global",status:"expense",notes:n||"",store:a??null,who:g||h.name,price:r,invoiceId:m,invoiceTotal:r,orderDate:null,deliveryDate:null,createdBy:h.$id},_=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.purchases,or.unique(),p);return console.log("[Appwrite Interactions] Dépense créée:",_),_}catch(o){console.error("[Appwrite Interactions] Erreur création dépense:",o);const l=o instanceof Error?o.message:"Erreur inconnue";throw new Error(`Échec de la création de la dépense: ${l}`)}}async function Sc(t){try{const{databases:e,config:r}=await wt(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[q.equal("mainId",t),q.equal("status","expense"),q.limit(1e3)]);return console.log(`[Appwrite Interactions] ${a.documents.length} dépenses globales chargées`),a.documents}catch(e){return console.error("[Appwrite Interactions] Erreur chargement dépenses globales:",e),[]}}const gn=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:Ds,batchUpdateStore:Uo,batchUpdateWho:Ho,createExpensePurchase:Qo,createMainDocument:zo,createManualProduct:Mo,createPurchase:Oo,createQuickValidationPurchases:Wo,deletePurchase:qo,enrichedProductToAppwriteProduct:To,loadMainEventData:Bo,loadOrphanPurchases:Sc,loadPurchasesListByIds:jo,loadUpdatedPurchases:wc,removeTotalOverride:Io,subscribeToRealtime:Lo,syncProductsWithPurchases:Do,updateProduct:Er,updateProductBatch:Ro,updateProductStock:us,updateProductStore:No,updateProductWho:Co,updatePurchase:Ts,updateTotalOverride:As,upsertProduct:Ht},Symbol.toStringTag,{value:"Module"}));async function xc(t){let e;if(e=await fetch(`/evenements/${t}/metadata.json`),!e.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function mn(t){const e=await fetch(`/evenements/${t}/ingredients_aw/index.json`);if(!e.ok)throw new Error(`Impossible de charger les données Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function Pc(t,e){if(!t)return!0;try{return(await xc(e)).hugoContentHash!==t}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function Go(t,e){const r=qa(t.byDate),a=na(sa([])),{numeric:n,display:i}=oa(r,a);return{$id:`${t.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:t.ingredientHugoUuid,productName:t.ingredientName,productType:t.ingType,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1,nbRecipes:t.nbRecipes,totalNeededRaw:t.totalNeededRaw,totalAssiettes:t.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:e,purchases:[],byDate:t.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:a,missingQuantityArray:n,stockOrTotalPurchases:"-",displayTotalNeeded:ut(r),displayTotalPurchases:"-",displayMissingQuantity:i,totalNeededOverrideParsed:null,displayTotalOverride:""}}function $c(t,e){return t.map(r=>Go(r,e))}class kc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(e){this.dbName=`products-cache-${e}`}async open(){if(!this.db)return new Promise((e,r)=>{const a=indexedDB.open(this.dbName,this.version);a.onerror=()=>r(a.error),a.onsuccess=()=>{this.db=a.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),e()},a.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(this.PRODUCTS_STORE)||(i.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),i.objectStoreNames.contains(this.METADATA_STORE)||(i.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();i.onsuccess=()=>{const o=new Map;i.result.forEach(l=>{o.set(l.$id,l)}),console.log(`[IDBCache] ${o.size} produits chargés`),e(o)},i.onerror=()=>r(i.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();i.onsuccess=()=>{const o=i.result,l={lastSync:null,allDates:[],hugoContentHash:null};o.forEach(d=>{d.key===this.LAST_SYNC_KEY?l.lastSync=d.value:d.key===this.ALL_DATES_KEY?l.allDates=d.value||[]:d.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=d.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),e(l)},i.onerror=()=>r(i.error)})}async saveProducts(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),i=n.objectStore(this.PRODUCTS_STORE);i.clear(),e.forEach(o=>{i.put(o)}),n.oncomplete=()=>{console.log(`[IDBCache] ${e.size} produits sauvegardés`),r()},n.onerror=()=>a(n.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.METADATA_STORE,"readwrite"),i=n.objectStore(this.METADATA_STORE);i.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),i.put({key:this.ALL_DATES_KEY,value:e.allDates}),e.hugoContentHash!==void 0&&i.put({key:this.HUGO_HASH_KEY,value:e.hugoContentHash}),n.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},n.onerror=()=>a(n.error)})}async updateLastSync(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateAllDates(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${e.length} dates`),r()},o.onerror=()=>a(o.error)})}async updateHugoContentHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateLastHugoMenuUpdate(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:e});o.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},o.onerror=()=>a(o.error)})}async upsertProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async deleteProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const a=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");a.objectStore(this.PRODUCTS_STORE).clear(),a.objectStore(this.METADATA_STORE).clear(),a.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),e()},a.onerror=()=>r(a.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Ec(t){const e=new kc(t);return await e.open(),e}function Ac(t){return!!(t.isMerged||t.totalNeededOverride)}function Tc(t,e){if(!t||t.length!==e.length)return!0;for(let r=0;r<t.length;r++){const a=t[r],n=e[r];if(a.q!==n.q||a.u!==n.u)return!0}return!1}async function Dc(t,e){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},a=new Map;for(const[i,o]of t)a.set(o.productHugoUuid,i);const n=new Set;for(const i of e.ingredients){const o=i.productSemanticKey||`${e.mainGroup_id}_${i.ingredientHugoUuid}`;n.add(o);const l=a.get(i.ingredientHugoUuid),d=l?t.get(l):void 0;if(d){if(Tc(d.totalNeededRaw,i.totalNeededRaw)){const h=Mc(d,i);if(h&&r.overrideConflicts.push(h),d.isMerged){const m=d.displayTotalNeeded;_n(d,i),r.mergedProductsUpdated.push({product:d,oldDisplayTotal:m,newDisplayTotal:d.displayTotalNeeded,currentOverride:d.totalNeededOverrideParsed,semanticKey:o})}else _n(d,i);r.updated.push(o)}t.set(o,d)}else{r.added.push(i);const f=Go(i,e.mainGroup_id);t.set(f.$id,f)}}for(const[i,o]of t)n.has(i)||(r.removed.push(o),!Ac(o)&&!o.purchases?.length&&!o.stockReel&&!o.who?.length&&t.delete(i));return r.overrideConflicts.length>0&&await Nc(r.overrideConflicts),r.summary=Ic(r),r}function Mc(t,e){if(!t.totalNeededOverride||!t.totalNeededOverrideParsed)return null;const r=qa(e.byDate),a=ut(r),n=t.displayTotalNeeded;return n!==a?{product:t,oldDisplayTotal:n,newDisplayTotal:a,currentOverride:t.totalNeededOverrideParsed,semanticKey:t.$id}:null}async function Nc(t){for(const e of t){const r={...e.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:e.oldDisplayTotal,newTotalDisplay:e.newDisplayTotal};JSON.stringify(r);try{await As(e.product.$id,r,!1)}catch(a){console.error(`Erreur lors de la mise à jour de l'override pour ${e.product.$id}:`,a)}}}function _n(t,e){t.byDate=e.byDate,t.nbRecipes=e.nbRecipes,t.totalAssiettes=e.totalAssiettes,t.productType=e.ingType,t.pFrais=e.pFrais||!1,t.pSurgel=e.pSurgel||!1,Cc(t)}function Cc(t){t.totalNeededArray=qa(t.byDate),t.displayTotalNeeded=ut(t.totalNeededArray);const e=na(sa(t.purchases)),{numeric:r,display:a}=oa(t.totalNeededArray,e);t.totalPurchasesArray=e,t.missingQuantityArray=r,t.displayMissingQuantity=a,t.stockOrTotalPurchases=t.purchases.length>0?t.displayTotalPurchases:t.displayTotalNeeded}function Ic(t){const e=[];if((t.added.length>0||t.updated.length>0||t.removed.length>0)&&e.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),t.added.length>0&&e.push(`${t.added.length} nouveau(x) ingrédient(s)`),t.updated.length>0&&e.push(` ${t.updated.length} ingrédient(s) mis à jour`),t.overrideConflicts.length>0&&e.push(`⚠️ ${t.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),t.mergedProductsUpdated.length>0&&e.push(`🔀 ${t.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),t.removed.length>0){const r=t.removed.filter(a=>a.purchases?.length||a.stockReel||a.who?.length).length;r>0?e.push(`⚠️ ${r} suppression(s) avec données conservées`):e.push(`${t.removed.length} ingrédient(s) supprimé(s)`)}return e.length>0?e.join(", "):"Aucune modification détectée"}class Rc{isMobileQuery=new lc("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return Qe.toasts}get toast(){return Qe}#e=L(je({isOpen:!1,conflicts:[]}));get modalOverride(){return s(this.#e)}set modalOverride(e){b(this.#e,e,!0)}#t=L(je({isOpen:!1}));get modal(){return s(this.#t)}set modal(e){b(this.#t,e,!0)}#r=L(je({isRunning:!1,name:"",progress:0}));get backgroundOperation(){return s(this.#r)}set backgroundOperation(e){b(this.#r,e,!0)}}const Dt=new Rc;function Oc(t){return new Date(t).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function fr(t){return t?new Date(t).toLocaleDateString("fr-Fr",{weekday:"short",day:"numeric",month:"short"}):""}function Ja(t){const r=new Date(t).getHours();return r===12?"sun":r===20?"moon":r===8?"cloud":null}function qc(t,e){if(!t.byDate?.[e])return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const r=t.byDate[e],a=[e],n=new Map;r.recipes?.length&&n.set(e,r.recipes);const i=r.totalConsolidated||[],o=i.length>0?ut(i):"-",l=jc(t,e,i),d=l.filter(g=>g.q>0),f=new Date().toISOString().split("T")[0],m=e<f?[]:l.filter(g=>g.q<0);return{requiredQuantities:i,requiredQuantitiesFormatted:o,stockBalance:l,availableStockQuantities:d,missingStockQuantities:m,availableStockFormatted:ja(l),missingStockFormatted:ut(m.map(g=>({q:Math.abs(g.q),u:g.u}))),hasAvailableStock:d.length>0,hasMissingStock:m.length>0,totalRecipesInRange:r.recipes?.length||0,totalPortionsInRange:r.totalAssiettes||0,datesInSelectedRange:a,recipesByDate:n}}function jc(t,e,r){let a=[],n="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(a=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],n=t.stockParsed.dateTime);const i=[];if(t.purchases)for(const d of t.purchases)Lc(d,e,n)&&i.push({q:d.quantity,u:d.unit});const o=[...a,...i],l=Oa(o);return Es(l,r)}function Lc(t,e,r=""){if(t.status==="cancelled")return!1;const a=t.deliveryDate||t.$createdAt;return!a||a>e||r&&t.$createdAt<r?!1:a<=e}function Bc(t,e){const r=t.totalNeededArray||[],a=r.length>0?ut(r):"-",n=Vo(t,e[0],e[e.length-1],r),i=n.filter(f=>f.q>0),o=n.filter(f=>f.q<0),l=[...e].sort(),d=new Map;if(t.byDate)for(const[f,h]of Object.entries(t.byDate))h.recipes?.length&&d.set(f,h.recipes);return{requiredQuantities:r,requiredQuantitiesFormatted:a,stockBalance:n,availableStockQuantities:i,missingStockQuantities:o,availableStockFormatted:ja(n),missingStockFormatted:ut(o.map(f=>({q:Math.abs(f.q),u:f.u}))),hasAvailableStock:i.length>0,hasMissingStock:o.length>0,totalRecipesInRange:t.nbRecipes||0,totalPortionsInRange:t.totalAssiettes||0,datesInSelectedRange:l,recipesByDate:d}}function zc(t,e,r){if(!t.byDate)return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const a=new Date(e),n=new Date(r),i=[],o=new Map,l=new Map;let d=0,f=0;for(const[S,D]of Object.entries(t.byDate)){const A=new Date(S);A>=a&&A<=n&&(i.push(S),d+=D.totalAssiettes||0,D.recipes?.length&&(o.set(S,D.recipes),f+=D.recipes.length),D.totalConsolidated&&D.totalConsolidated.forEach(({q:E,u:k})=>{l.set(k,(l.get(k)||0)+E)}))}const h=Array.from(l.entries()).map(([S,D])=>({q:D,u:S})),m=h.length>0?ut(h):"-",g=Vo(t,e,r,h),p=g.filter(S=>S.q>0),_=new Date().toISOString().split("T")[0],P=r<_?[]:g.filter(S=>S.q<0);return{requiredQuantities:h,requiredQuantitiesFormatted:m,stockBalance:g,availableStockQuantities:p,missingStockQuantities:P,availableStockFormatted:ja(g),missingStockFormatted:ut(P.map(S=>({q:Math.abs(S.q),u:S.u}))),hasAvailableStock:p.length>0,hasMissingStock:P.length>0,totalRecipesInRange:f,totalPortionsInRange:d,datesInSelectedRange:i,recipesByDate:o}}function Vo(t,e,r,a){let n=[],i="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(n=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],i=t.stockParsed.dateTime);const o=[];if(t.purchases)for(const f of t.purchases)Uc(f,e,r,i)&&o.push({q:f.quantity,u:f.unit});const l=[...n,...o],d=Oa(l);return Es(d,a)}function Uc(t,e,r,a=""){if(t.status==="cancelled")return!1;const n=t.deliveryDate||t.$createdAt;return!n||n>r||a&&t.$createdAt<a?!1:n<=r}class fa{#e=L(je({}));get data(){return s(this.#e)}set data(e){b(this.#e,e,!0)}dateStore;constructor(e,r){this.data=e,this.dateStore=r}update(e){this.data=e}get $id(){return this.data.$id}get productName(){return this.data.productName}get productType(){return this.data.productType}get storeInfo(){return this.data.storeInfo}get who(){return this.data.who}get pFrais(){return this.data.pFrais}get pSurgel(){return this.data.pSurgel}get status(){return this.data.status}get previousNames(){return this.data.previousNames}get purchases(){return this.data.purchases}get totalNeededOverrideParsed(){return this.data.totalNeededOverrideParsed}get displayMissingQuantity(){return this.data.displayMissingQuantity}get missingQuantityArray(){return this.data.missingQuantityArray}get isSynced(){return this.data.isSynced}get byDate(){return this.data.byDate}#t=G(()=>{const e=this.dateStore.current,r=this.dateStore.dates;let a;if(this.dateStore.isFullRange)a=Bc(this.data,r),a.datesInSelectedRange&&(a.datesInSelectedRange=a.datesInSelectedRange.filter(n=>this.data.byDate&&this.data.byDate[n]));else if(e.start&&e.end&&e.start===e.end)a=qc(this.data,e.start);else if(e.start&&e.end)a=zc(this.data,e.start,e.end);else return{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedMissingQuantities:"",formattedAvailableQuantities:"En attente",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map};return{quantities:a.requiredQuantities,formattedQuantities:a.requiredQuantitiesFormatted,nbRecipes:a.totalRecipesInRange,totalAssiettes:a.totalPortionsInRange,stockResult:a.stockBalance,availableQuantities:a.availableStockQuantities,missingQuantities:a.missingStockQuantities,formattedMissingQuantities:a.missingStockFormatted,formattedAvailableQuantities:a.availableStockFormatted,hasAvailable:a.hasAvailableStock,hasMissing:a.hasMissingStock,concernedDates:a.datesInSelectedRange,recipesByDate:a.recipesByDate}});get stats(){return s(this.#t)}set stats(e){b(this.#t,e)}}class Hc{#e=L(je([]));#t=L(null);#r=L(null);constructor(e=[]){b(this.#e,e,!0),this.initializeSmartRange()}get start(){return s(this.#t)}get end(){return s(this.#r)}get dates(){return s(this.#e)}#o=G(()=>[...s(this.#e)].sort()[0]);get firstAvailableDate(){return s(this.#o)}set firstAvailableDate(e){b(this.#o,e)}#u=G(()=>[...s(this.#e)].sort()[s(this.#e).length-1]);get lastAvailableDate(){return s(this.#u)}set lastAvailableDate(e){b(this.#u,e)}get current(){return{start:s(this.#t),end:s(this.#r)}}#l=G(()=>{if(s(this.#e).length===0)return!0;const e=this.lastAvailableDate?new Date(this.lastAvailableDate):new Date;return e.setHours(23,59,59,999),e<new Date});get isEventPassed(){return s(this.#l)}set isEventPassed(e){b(this.#l,e)}#c=G(()=>{if(s(this.#e).length===0)return!1;const e=new Date;return e.setHours(0,0,0,0),s(this.#e).some(r=>new Date(r)>=e)});get hasUpcomingDates(){return s(this.#c)}set hasUpcomingDates(e){b(this.#c,e)}#i=G(()=>s(this.#t)===this.firstAvailableDate&&s(this.#r)===this.lastAvailableDate);get isFullRange(){return s(this.#i)}set isFullRange(e){b(this.#i,e)}#d=G(()=>{if(s(this.#e).length===0)return!1;const e=[...s(this.#e)].sort(),r=new Date;r.setHours(0,0,0,0);const a=e.find(o=>new Date(o)>=r)||null;let n,i;if(a)n=a,i=e[e.length-1];else{const o=e[e.length-1];n=o,i=o}return s(this.#t)===n&&s(this.#r)===i});get isUpcomingRange(){return s(this.#d)}set isUpcomingRange(e){b(this.#d,e)}#n=G(()=>s(this.#e).length===1);get hasSingleDateEvent(){return s(this.#n)}set hasSingleDateEvent(e){b(this.#n,e)}#v=G(()=>!!(s(this.#t)&&s(this.#t)===s(this.#r)));get hasSingleDateInRange(){return s(this.#v)}set hasSingleDateInRange(e){b(this.#v,e)}#a=G(()=>{if(!s(this.#t)||!s(this.#r)||this.isEventPassed)return!1;const e=new Date;return e.setHours(0,0,0,0),new Date(s(this.#t))<e});get hasPastDatesInRange(){return s(this.#a)}set hasPastDatesInRange(e){b(this.#a,e)}setAvailableDates(e){b(this.#e,e,!0),this.initializeSmartRange()}setRange(e,r){if(!e&&!r){b(this.#t,null),b(this.#r,null);return}if(!e||!r){const i=e||r;b(this.#t,i,!0),b(this.#r,i,!0);return}const a=new Date(e)<=new Date(r)?e:r,n=new Date(e)>=new Date(r)?e:r;b(this.#t,a,!0),b(this.#r,n,!0)}selectAll(){s(this.#e).length!==0&&(b(this.#t,s(this.#e)[0],!0),b(this.#r,s(this.#e)[s(this.#e).length-1],!0))}selectUpcoming(){if(s(this.#e).length===0)return;const e=[...s(this.#e)].sort(),r=new Date;r.setHours(0,0,0,0);const a=e.find(n=>new Date(n)>=r)||null;if(a)b(this.#t,a,!0),b(this.#r,e[e.length-1],!0);else{const n=e[e.length-1];b(this.#t,n,!0),b(this.#r,n,!0)}}selectFutureDatesOnly(){const e=new Date;e.setDate(e.getDate()+1),e.setHours(0,0,0,0);const r=s(this.#e).filter(a=>new Date(a)>=e);r.length>0&&(b(this.#t,r[0],!0),b(this.#r,r[r.length-1],!0))}initializeSmartRange(){if(s(this.#e).length===0)return;const e=[...s(this.#e)].sort(),r=this.isEventPassed,a=new Date(e[0])<new Date,n=new Date;let i;r?i=e[0]:a?i=n.toISOString().slice(0,19)+"Z":i=e[0],b(this.#t,i,!0),b(this.#r,e[e.length-1],!0),console.log(`[DateRangeStore] Initialized: ${s(this.#t)} - ${s(this.#r)}`)}}const bn=1e3;class Wc{#e=new en;#t=new en;#r=L(null);#o=L(null);#u=L(!1);#l=L(!1);#c=L(null);#i=L(!1);#d=L(!1);#n=L(null);#v=L(null);get currentMainId(){return s(this.#r)}dateStore=new Hc;get dateRange(){return this.dateStore.current}get availableDates(){return this.dateStore.dates}get isEventPassed(){return this.dateStore.isEventPassed}get hasSingleDateEvent(){return this.dateStore.hasSingleDateEvent}get hasSingleDateInRange(){return this.dateStore.hasSingleDateInRange}get hasPastDatesInRange(){return this.dateStore.hasPastDatesInRange}#a=null;#f=null;#h=L(!1);#p=null;#S=L(!1);#x=L();#_=L(je([]));get hasPendingConflicts(){return s(this.#_).length>0}get pendingConflicts(){return s(this.#_)}#s=L(je({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#s)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get loading(){return s(this.#l)}get error(){return s(this.#c)}get lastSync(){return s(this.#n)}get syncing(){return s(this.#i)}setDateRange(e,r){this.dateStore.setRange(e,r)}isFullRange(){return this.dateStore.isFullRange}initializeDateRange(){this.dateStore.initializeSmartRange()}selectUpcomingDates(){this.dateStore.selectUpcoming()}isUpcomingRange(){return this.dateStore.isUpcomingRange}get firstAvailableDate(){return this.dateStore.firstAvailableDate}get lastAvailableDate(){return this.dateStore.lastAvailableDate}selectFutureDatesOnly(){this.dateStore.selectFutureDatesOnly()}get realtimeConnected(){return s(this.#d)}#g=G(()=>{const e=Array.from(this.#e.values()).map(r=>r.data);return console.log(`[ProductsStore] enrichedProducts recalculated: ${e.length} products`),e});get enrichedProducts(){return s(this.#g)}set enrichedProducts(e){b(this.#g,e)}#m=G(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const e=new Date(this.dateRange.start),r=new Date(this.dateRange.end),a=new Map;for(const[n,i]of this.#e){const o=i.data,l=!o.productHugoUuid;if(!o.byDate&&!l||!$o(o,s(this.#s)))continue;let f=!1;o.byDate&&(f=Object.keys(o.byDate).some(h=>{const m=new Date(h);return m>=e&&m<=r})),(f||l)&&a.set(n,i)}return a});get filteredProductsMap(){return s(this.#m)}set filteredProductsMap(e){b(this.#m,e)}#P=G(()=>({total:this.#e.size,frais:Array.from(this.#e.values()).filter(e=>e.pFrais).length,surgel:Array.from(this.#e.values()).filter(e=>e.pSurgel).length,merged:Array.from(this.#e.values()).filter(e=>e.data.isMerged).length}));get stats(){return s(this.#P)}set stats(e){b(this.#P,e)}#$=G(()=>{const e=Array.from(this.#e.values()).map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(e)]});get uniqueStores(){return s(this.#$)}set uniqueStores(e){b(this.#$,e)}#k=G(()=>{const e=Array.from(this.#e.values()).flatMap(r=>r.who||[]);return[...new Set(e)]});get uniqueWho(){return s(this.#k)}set uniqueWho(e){b(this.#k,e)}#E=G(()=>{const e=Array.from(this.#e.values()).map(r=>r.productType).filter(Boolean);return[...new Set(e)]});get uniqueProductTypes(){return s(this.#E)}set uniqueProductTypes(e){b(this.#E,e)}#A=G(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((o,l)=>o.$id.localeCompare(l.$id));if(s(this.#s).groupBy==="none")return{"":r};const a=Object.groupBy(r,o=>s(this.#s).groupBy==="store"?o.storeInfo?.storeName||"Non défini":o.productType||"Non défini"),n=Object.keys(a).sort((o,l)=>o===""?1:l===""?-1:o.localeCompare(l)),i={};return n.forEach(o=>{i[o]=a[o]}),i});get groupedFilteredProducts(){return s(this.#A)}set groupedFilteredProducts(e){b(this.#A,e)}async initialize(e,r){if(!e?.trim())throw new Error("mainId invalide fourni");if(s(this.#u)&&s(this.#r)===e){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${e}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${e}`),b(this.#r,e,!0),b(this.#o,r,!0);try{this.#a=await Ec(e)}catch(a){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",a),new Error("Impossible d'initialiser le cache IndexedDB")}b(this.#c,null);try{if(await this.#C(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let n;n=await mn(r),console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),b(this.#v,n.hugoContentHash,!0),$c(n.ingredients,e).forEach(l=>{this.#e.set(l.$id,new fa(l,this.dateStore))}),this.dateStore.setAvailableDates([...n.allDates]),await Bo(e)||await zo(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#T()}this.initializeDateRange(),await this.#I(),await this.#G(),b(this.#u,!0);const a=this.#Q();this.#f=Lo(e,a),this.#j(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#D(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(a){const n=a instanceof Error?a.message:"Erreur lors de l'initialisation";throw b(this.#c,n,!0),console.error("[ProductsStore]",n,a),a}}async#C(){if(this.#a)try{const e=await this.#a.loadProducts();e.forEach((a,n)=>{a.status==="isSyncing"&&(a.status="active"),this.#e.set(n,new fa(a,this.dateStore))});const r=await this.#a.loadMetadata();b(this.#n,r.lastSync,!0),this.dateStore.setAvailableDates([...r.allDates]),b(this.#v,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${e.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(e){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",e)}}async#I(){if(s(this.#r)){b(this.#i,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#n)}`);const e=await Do(s(this.#r),{lastSync:s(this.#n),limit:bn});if(console.log(`[ProductsStore] ${e.length} produits récupérés depuis Appwrite`),e.forEach(r=>{const a=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!a}, who=${r.who}, store=${r.store}`);const n=this.#M(r,a?.data);n.isSynced=!0,a?a.update(n):this.#e.set(r.$id,new fa(n,this.dateStore))}),s(this.#n)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#n)}`);const{loadUpdatedPurchases:r}=await cs(async()=>{const{loadUpdatedPurchases:n}=await Promise.resolve().then(()=>gn);return{loadUpdatedPurchases:n}},void 0),a=await r(s(this.#r),s(this.#n),bn);console.log(`[ProductsStore] ${a.length} purchases modifiés récupérés`),a.forEach(n=>{if(n.status==="expense")this.#t.set(n.$id,n);else if(n.products?.length){const i=n.products.map(o=>typeof o=="string"?o:o.$id);this.#w(i,n)}})}this.#O(),await this.#R(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(e){throw console.error("[ProductsStore] Erreur lors du sync:",e),e}finally{b(this.#i,!1)}}}async#R(){if(this.#a)try{const e=new Map;this.#e.forEach((r,a)=>{const n=Tr(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#a.saveProducts(e),await this.#a.saveMetadata({lastSync:s(this.#n),allDates:[...this.dateStore.dates],hugoContentHash:s(this.#v)}),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#V(){if(this.#a)try{const e=new Map;this.#e.forEach((r,a)=>{const n=Tr(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#a.saveProducts(e),await this.#a.updateLastSync(s(this.#n)),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#T(){if(this.#a)try{const e=new Map;this.#e.forEach((r,a)=>{const n=Tr(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#a.saveProducts(e),await this.#a.updateLastSync(s(this.#n)),await this.#a.updateAllDates([...this.availableDates]),await this.#a.updateHugoContentHash(s(this.#v)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(e){console.error("[ProductsStore] Erreur persistance cache complet:",e)}}async#y(e){if(!(!this.#a||e.length===0))try{const r=e.map(a=>this.#e.get(a)?.data).filter(a=>a!=null).map(a=>{const n=Tr(a);return n.status==="isSyncing"&&(n.status="active"),this.#a.upsertProduct(n)});r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#O(){b(this.#n,new Date().toISOString(),!0)}async#D(){if(!s(this.#o)||s(this.#l))return!1;try{const e=await Pc(s(this.#v),s(this.#o));return e&&!s(this.#h)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${s(this.#o)}, analyse approfondie en cours...`),b(this.#h,!0),await this.#q()),b(this.#x,new Date,!0),e}catch(e){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",e),!1}}async#q(){if(!s(this.#o)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const e=await mn(s(this.#o)),r=new Map;this.#e.forEach((n,i)=>r.set(i,n.data));const a=await Dc(r,e);if(console.log(`[ProductsStore  - hugo change] ${a.summary}`),a.overrideConflicts.length>0&&(b(this.#_,a.overrideConflicts,!0),Qe.error(`${a.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>Dt.modalOverride.isOpen=!0}})),a.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${a.mergedProductsUpdated.length} produits fusionnés modifiés`),a.removed.length>0){const n=a.removed.filter(i=>i.purchases?.length||i.stockReel||i.who?.length);n.length>0&&console.log(`[ProductsStore] ℹ️ ${n.length} ingrédients supprimés conservés (données utilisateur)`)}this.dateStore.setAvailableDates([...e.allDates]),b(this.#v,e.hugoContentHash,!0),this.initializeDateRange(),await this.#T(),(a.added.length||a.updated.length||a.removed.length)&&Qe.success(a.summary),b(this.#h,!1)}catch(e){console.error("[ProductsStore] Erreur sync Hugo:",e),Qe.error("Erreur lors de la mise à jour Hugo")}}#j(){this.#p&&clearInterval(this.#p),this.#p=setInterval(async()=>{await this.#D()},6e4)}#L(){this.#p&&(clearInterval(this.#p),this.#p=null)}#M(e,r){return r?va(e,r):mc(e)}#F(e){e.length&&(e.forEach(r=>this.#b(r)),console.log(`[ProductsStore] ${e.length} produits upserted`))}#b(e){const r=this.#e.get(e.$id),a=this.#M(e,r?.data);r?r.update(a):(this.dateStore.dates,this.#e.set(e.$id,new fa(a,this.dateStore)))}#B(e){this.#e.delete(e)}async#z(e){if(!e.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",e.$id),[];const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#W(r,e),r}async#U(e){if(e.products?.length){const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#w(r,e),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await jo([e.$id]);if(r?.products?.length){const a=r.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#w(a,r),a}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#H(e){const r=Array.from(this.#e.values()).map(a=>a.data).filter(a=>a.purchases?.some(n=>n.$id===e));return r.forEach(a=>{this.#b(a)}),r.map(a=>a.$id)}#W(e,r){const a=tn(r),n=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,d=l.purchases||[];if(!d.some(f=>f.$id===a.$id)){const f=va({...l,purchases:[...d,a],status:"active"},l);n.push(f)}}}),n.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#w(e,r){const a=tn(r),n=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,d=l.purchases||[],f=d.findIndex(h=>h.$id===a.$id);if(f>=0){const h=[...d];h[f]=a;const m=va({...l,purchases:h,status:"active"},l);n.push(m)}else{const h=va({...l,purchases:[...d,r],status:"active"},l);n.push(h)}}}),n.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#Q(){return{onProductCreate:e=>{if(this.#b(e),this.#a){const r=this.#e.get(e.$id);r&&this.#a.upsertProduct(Tr(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductUpdate:e=>{if(this.#b(e),this.#a){const r=this.#e.get(e.$id);r&&this.#a.upsertProduct(Tr(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductDelete:e=>{this.#B(e),this.#a&&this.#a.deleteProduct(e).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}const r=await this.#z(e);await this.#y(r)},onPurchaseUpdate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}this.#t.has(e.$id)&&this.#t.delete(e.$id);const r=await this.#U(e);await this.#y(r)},onPurchaseDelete:async e=>{if(this.#t.has(e)){this.#t.delete(e);return}const r=await this.#H(e);await this.#y(r)},onConnect:()=>{b(this.#d,!0)},onDisconnect:()=>{b(this.#d,!1)},onError:e=>{console.error("[ProductsStore] Erreur realtime:",e)}}}setSearchQuery=hc(e=>{s(this.#s).searchQuery=e},()=>500);toggleProductType(e){const r=s(this.#s).selectedProductTypes.indexOf(e);r>-1?s(this.#s).selectedProductTypes.splice(r,1):s(this.#s).selectedProductTypes.push(e)}toggleTemperature(e){const r=s(this.#s).selectedTemperatures.indexOf(e);r>-1?s(this.#s).selectedTemperatures.splice(r,1):s(this.#s).selectedTemperatures.push(e)}clearTypeAndTemperatureFilters(){s(this.#s).selectedProductTypes=[],s(this.#s).selectedTemperatures=[]}setGroupBy(e){s(this.#s).groupBy=e}toggleStore(e){const r=s(this.#s).selectedStores.indexOf(e);r>-1?s(this.#s).selectedStores.splice(r,1):s(this.#s).selectedStores.push(e)}toggleWho(e){const r=s(this.#s).selectedWho.indexOf(e);r>-1?s(this.#s).selectedWho.splice(r,1):s(this.#s).selectedWho.push(e)}clearStoreFilters(){s(this.#s).selectedStores=[]}clearWhoFilters(){s(this.#s).selectedWho=[]}handleSort(e){s(this.#s).sortColumn===e?s(this.#s).sortDirection=s(this.#s).sortDirection==="asc"?"desc":"asc":(s(this.#s).sortColumn=e,s(this.#s).sortDirection="asc")}clearFilters(){b(this.#s,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(e){return s(this.#s).sortColumn?[...e].sort((r,a)=>{let n=r[s(this.#s).sortColumn],i=a[s(this.#s).sortColumn];return s(this.#s).sortColumn==="totalNeededConsolidated"?(n=parseFloat(n)||0,i=parseFloat(i)||0):s(this.#s).sortColumn==="purchases"&&(n=r.purchases?.length||0,i=a.purchases?.length||0),n<i?s(this.#s).sortDirection==="asc"?-1:1:n>i?s(this.#s).sortDirection==="asc"?1:-1:0}):e}getEnrichedProductById(e){return this.#e.get(e)?.data??null}getProductModelById(e){return this.#e.get(e)??null}hasConversions(e){const r=this.#e.get(e)?.data;return r?.byDate?xo(r.byDate):!1}async forceReload(e,r){await this.clearCache(),await this.initialize(e,r)}async clearCache(){this.#e.clear(),b(this.#n,null),this.#a&&await this.#a.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(e,r){const a=r?"isSyncing":"active";e.forEach(n=>{const i=this.#e.get(n);if(i){const o={...i.data,status:a};i.update(o)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${e.length} produits → ${a}`)}clearSyncStatus(){const e=[];for(const[r,a]of this.#e)a.status==="isSyncing"&&e.push(r);e.length>0&&(this.setSyncStatus(e,!1),console.log(`[ProductsStore] Nettoyage de ${e.length} produits en statut "isSyncing"`))}destroy(){this.#f?.(),this.#f=null,this.#L(),this.#a&&(this.#a.close(),this.#a=null),console.log("[ProductsStore] Ressources nettoyées")}async#G(){if(s(this.#r))try{const{loadOrphanPurchases:e}=await cs(async()=>{const{loadOrphanPurchases:a}=await Promise.resolve().then(()=>gn);return{loadOrphanPurchases:a}},void 0),r=await e(s(this.#r));r.forEach(a=>{this.#t.set(a.$id,a)}),console.log(`[ProductsStore] ${r.length} dépenses globales chargées`)}catch(e){console.error("[ProductsStore] Erreur chargement dépenses globales:",e)}}#N=G(()=>{let e=0;const r={},a={},n=[];for(const i of this.#t.values()){const o=i.invoiceTotal||i.price||0;e+=o;const l=i.store||"Non défini";r[l]=(r[l]||0)+o;const d=i.who||"Non défini";a[d]=(a[d]||0)+o,n.push(i)}for(const i of this.#e.values()){const o=i.data;if(o.purchases&&o.purchases.length>0){for(const l of o.purchases)if(l.price){e+=l.price;const d=l.store||"Non défini";r[d]=(r[d]||0)+l.price;const f=l.who||"Non défini";a[f]=(a[f]||0)+l.price;const h={...l,_productName:o.productName};n.push(h)}}}return n.sort((i,o)=>{const l=new Date(i.orderDate||i.$createdAt).getTime();return new Date(o.orderDate||o.$createdAt).getTime()-l}),{totalGlobal:e,byStore:r,byWho:a,allPurchases:n}});get financialStats(){return s(this.#N)}set financialStats(e){b(this.#N,e)}}const K=new Wc;function yn(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const e=new URLSearchParams(window.location.search).get("listId");if(!e||!e.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return e.trim()}function Qc(t){const e=t.substring(0,4),r=t.slice(-10);return`${e}_${r}`}/**
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
 */const Gc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Vc=Dl("<svg><!><!></svg>");function xe(t,e){J(e,!0);const r=pe(e,"color",3,"currentColor"),a=pe(e,"size",3,24),n=pe(e,"strokeWidth",3,2),i=pe(e,"absoluteStrokeWidth",3,!1),o=pe(e,"iconNode",19,()=>[]),l=_e(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var d=Vc();is(d,m=>({...Gc,...l,width:a(),height:a(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>i()?Number(n())*24/Number(a()):n()]);var f=c(d);st(f,17,o,Sr,(m,g)=>{var p=G(()=>ba(s(g),2));let _=()=>s(p)[0],w=()=>s(p)[1];var P=Y(),S=C(P);ql(S,_,!0,(D,A)=>{is(D,()=>({...w()}))}),v(m,P)});var h=u(f);fe(h,()=>e.children??oe),v(t,d),Z()}function Fo(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];xe(t,Se({name:"archive"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Ko(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];xe(t,Se({name:"badge-euro"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Fc(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];xe(t,Se({name:"bean"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Kc(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];xe(t,Se({name:"beef"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Yc(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];xe(t,Se({name:"candy-cane"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Jc(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];xe(t,Se({name:"carrot"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Lr(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20 6 9 17l-5-5"}]];xe(t,Se({name:"check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Zc(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];xe(t,Se({name:"chef-hat"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Yo(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m6 9 6 6 6-6"}]];xe(t,Se({name:"chevron-down"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Xc(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];xe(t,Se({name:"circle-alert"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function eu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];xe(t,Se({name:"circle-arrow-down"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function tu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];xe(t,Se({name:"circle-arrow-right"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function wn(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];xe(t,Se({name:"circle-check-big"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ru(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];xe(t,Se({name:"circle-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Sn(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];xe(t,Se({name:"circle-x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function au(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];xe(t,Se({name:"clipboard-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function xn(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];xe(t,Se({name:"clipboard-pen-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Za(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];xe(t,Se({name:"clock"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function su(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];xe(t,Se({name:"cloud"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function La(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];xe(t,Se({name:"cooking-pot"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function nu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];xe(t,Se({name:"egg"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ou(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];xe(t,Se({name:"euro"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ha(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];xe(t,Se({name:"funnel-x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Jo(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];xe(t,Se({name:"funnel"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Zo(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];xe(t,Se({name:"history"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function iu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];xe(t,Se({name:"info"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function lu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];xe(t,Se({name:"layout-list"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function cu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];xe(t,Se({name:"leaf"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function uu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];xe(t,Se({name:"list-todo"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Xo(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];xe(t,Se({name:"loader-circle"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function du(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];xe(t,Se({name:"lock"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function vu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];xe(t,Se({name:"log-in"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function fu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];xe(t,Se({name:"message-circle-more"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function hu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];xe(t,Se({name:"message-circle-question-mark"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ei(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];xe(t,Se({name:"message-circle"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ti(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];xe(t,Se({name:"moon"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function pu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];xe(t,Se({name:"package-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function gu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];xe(t,Se({name:"package-plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Ba(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];xe(t,Se({name:"package"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function mu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];xe(t,Se({name:"pen-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function _u(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];xe(t,Se({name:"pencil-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Ms(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];xe(t,Se({name:"plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function bu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];xe(t,Se({name:"refresh-cw"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function yu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];xe(t,Se({name:"refrigerator"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function wu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];xe(t,Se({name:"save"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Su(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];xe(t,Se({name:"search"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ri(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];xe(t,Se({name:"shopping-basket"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function yr(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];xe(t,Se({name:"shopping-cart"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Ns(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];xe(t,Se({name:"snowflake"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ea(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];xe(t,Se({name:"square-pen"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function gr(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];xe(t,Se({name:"store"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ai(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];xe(t,Se({name:"sun"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function xu(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];xe(t,Se({name:"tag"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function si(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];xe(t,Se({name:"thermometer"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ia(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];xe(t,Se({name:"triangle-alert"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function ni(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];xe(t,Se({name:"user-plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Cs(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];xe(t,Se({name:"user"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function _a(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];xe(t,Se({name:"users"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function oi(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];xe(t,Se({name:"utensils"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function It(t,e){J(e,!0);/**
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
 */let r=_e(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];xe(t,Se({name:"x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=Y(),l=C(o);fe(l,()=>e.children??oe),v(n,o)},$$slots:{default:!0}})),Z()}function Pu(t,e){const r=t.reduce((n,i)=>{const o=i.isSynced?0:1,l=i.missingQuantities.length;return n+o+l},0),a=e.invoiceTotal?1:0;return r+a}async function $u(t,e){const r=t.filter(d=>!d.isSynced).map(d=>({productId:d.productId,productData:d.productData}));let a=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");a=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(d){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",d)}const n=e.purchaseStatus||"delivered";let i=e.purchaseDeliveryDate||null;n==="delivered"&&!i&&(i=new Date().toISOString());const o=t.flatMap(d=>d.missingQuantities.map(f=>({productId:d.productId,quantity:f.q,unit:f.u,status:n,notes:e.notes||"",store:e.store||"",who:e.who||void 0,price:void 0,orderDate:null,deliveryDate:i,createdBy:a})));return{mainId:t[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:o},invoiceData:e}}async function ku(t,e,r){if(!e?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};e.forEach(g=>{g.productData&&(g.productData.mainId=t)});const a=Pu(e,r);console.log(`[Appwrite Interactions] Achat groupé: ${e.length} produits, ${a} opérations totales`);const n=100,i=[];if(a<=n)i.push(e);else{let g=[],p=0;for(const _ of e){const w=(_.isSynced?0:1)+_.missingQuantities.length;p+w>n?(g.length>0&&i.push(g),g=[_],p=w):(g.push(_),p+=w)}g.length>0&&i.push(g)}console.log(`[Appwrite Interactions] Découpage en ${i.length} lots pour respecter la limite de 100 opérations`);const o=[];let l=0,d=0,f=0;for(let g=0;g<i.length;g++){const p=i[g];console.log(`[Appwrite Interactions] Exécution du lot ${g+1}/${i.length} (${p.length} produits)`);try{const _=await $u(p,r),w=await Ao(()=>Eu(_),{operationName:`Lot ${g+1}/${i.length}`,maxAutoRetries:1,autoRetryDelay:2e3});if(!w)throw new Error("Opération annulée ou échouée après tentatives");if(o.push(w),w.success)l+=w.productsCreated,d+=w.purchasesCreated,f+=w.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${g+1}: ${w.error}`);break}}catch(_){const w=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${g+1}:`,_),o.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:w,timestamp:new Date().toISOString()});break}}const h=o.every(g=>g.success),m=o.some(g=>!g.success);return{success:h,results:o,totalProductsCreated:l,totalPurchasesCreated:d,totalExpensesCreated:f,error:m?"Un ou plusieurs lots ont échoué":void 0}}async function Eu(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"createGroupPurchaseWithSync",data:t};console.log(`[Appwrite Interactions] Exécution du lot: ${t.batchData.productsToCreate.length} produits à créer, ${t.batchData.purchasesToCreate.length} achats à créer`);const n=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST");if(n.status!=="completed")throw new Error(`Exécution échouée avec statut: ${n.status}. Erreur: ${n.stderr}`);const i=JSON.parse(n.responseBody);return i.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${i.productsCreated} produits créés, ${i.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur exécution lot:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:t.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var Au=(t,e,r)=>e(s(r).id),Tu=y("<span> </span>"),Du=y('<button><!> <span class="max-w-32 truncate"> </span> <!> <!></button>'),Mu=y('<span class="flex items-center gap-1"><!> </span>'),Nu=y('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Cu=y('<div class="flex flex-wrap gap-2"></div> <!>',1);function ta(t,e){J(e,!0);let r=pe(e,"badgeSize",3,"btn-lg"),a=pe(e,"color",3,"primary"),n=pe(e,"badgeStyle",3,""),i=pe(e,"onToggleItem",3,()=>{}),o=pe(e,"showStats",3,!1),l=pe(e,"showIcon",3,!0),d=L(je({}));Jt(()=>{const P={};e.items.forEach(S=>{P[S.id]=S.selected??!0}),b(d,P,!0)});function f(P){s(d)[P]=!s(d)[P],i()(P)}const h=G(()=>Object.values(s(d)).filter(Boolean).length),m=G(()=>Object.values(s(d)).filter(P=>!P).length);var g=Cu(),p=C(g);st(p,21,()=>e.items,P=>P.id,(P,S)=>{const D=G(()=>s(d)[s(S).id]);var A=Du();A.__click=[Au,f,S];var E=c(A);{var k=z=>{var le=Y(),ge=C(le);br(ge,()=>s(S).icon,(Pe,U)=>{U(Pe,{class:"h-3 w-3",get title(){return s(S).title}})}),v(z,le)};$(E,z=>{s(S).icon&&z(k)})}var T=u(E,2),O=c(T),x=u(T,2);{var W=z=>{var le=Tu(),ge=c(le);I(()=>{Me(le,1,`badge badge-sm badge-${a()??""}`),N(ge,s(S).badge)}),v(z,le)};$(x,z=>{s(S).badge&&z(W)})}var te=u(x,2);{var V=z=>{var le=Y(),ge=C(le);{var Pe=ce=>{Lr(ce,{size:16})},U=ce=>{Ms(ce,{size:16})};$(ge,ce=>{s(D)?ce(Pe):ce(U,!1)})}v(z,le)};$(te,z=>{l()&&z(V)})}I(()=>{Me(A,1,`btn ${r()??""} btn-${a()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(D)?`${n()} hover:line-through `:"btn-dash hover:border-solid "}`),nr(A,"title",s(D)?"Retirer de la liste":"Réajouter à la liste"),N(O,s(S).label)}),v(P,A)});var _=u(p,2);{var w=P=>{var S=Nu(),D=c(S),A=c(D),E=c(A);Lr(E,{class:"text-success h-3 w-3"});var k=u(E),T=u(A,2);{var O=te=>{var V=Mu(),z=c(V);It(z,{class:"text-error h-3 w-3"});var le=u(z);I(()=>N(le,` ${s(m)??""} retirés`)),v(te,V)};$(T,te=>{s(m)>0&&te(O)})}var x=u(D,2),W=c(x);I(()=>{N(k,` ${s(h)??""} actifs`),N(W,`Total: ${e.items.length??""} items`)}),v(P,S)};$(_,P=>{o()&&P(w)})}v(t,g),Z()}Ye(["click"]);function Iu(t,e){b(e,!s(e))}var Ru=y('<span class="text-base-content font-semibold"> </span>'),Ou=y('<div class="text-base-content/80 flex-1"> </div>'),qu=y('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),ju=y('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Lu=y('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function ii(t,e){let r=pe(e,"icon",3,iu),a=pe(e,"class",3,""),n=pe(e,"initiallyOpen",3,!1),i=r(),o=L(je(n())),l=je(e.children);var d=Lu(),f=c(d);f.__click=[Iu,o];var h=c(f),m=c(h);i(m,{size:24,class:"text-base-content me-4 flex-shrink-0"});var g=u(m,2);{var p=E=>{var k=Ru(),T=c(k);I(()=>N(T,e.title)),v(E,k)};$(g,E=>{e.title&&E(p)})}var _=u(h,2);{var w=E=>{var k=Ou(),T=c(k);I(()=>N(T,e.contentVisible)),v(E,k)};$(_,E=>{e.contentVisible&&E(w)})}var P=u(_,2);{var S=E=>{var k=qu(),T=c(k),O=c(T);{var x=V=>{var z=bt("en savoir plus");v(V,z)},W=V=>{var z=bt("masquer");v(V,z)};$(O,V=>{s(o)?V(W,!1):V(x)})}var te=u(T,2);{let V=G(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(o)?"rotate-180":""}`);Yo(te,{get class(){return s(V)}})}v(E,k)};$(P,E=>{l&&E(S)})}var D=u(f,2);{var A=E=>{var k=ju(),T=c(k),O=c(T);fe(O,()=>e.children??oe),I(()=>Me(k,1,`overflow-hidden transition-all duration-200 ${s(o)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),v(E,k)};$(D,E=>{l&&E(A)})}I(()=>{Me(d,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${a()}`),po(d,e.style),Me(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),nr(f,"aria-expanded",s(o))}),v(t,d)}Ye(["click"]);var Bu=y('<div class="mb-1 text-xs opacity-70"> </div>'),zu=(t,e,r)=>e(s(r)),Uu=y("<button><!> </button>"),Hu=y('<div><!> <div class="ms-1 flex flex-wrap items-center gap-1"><!> <!></div></div>');function Is(t,e){J(e,!0);let r=pe(e,"maxSuggestions",3,8),a=pe(e,"buttonSize",3,"btn-xs"),n=pe(e,"buttonVariant",3,"btn-soft"),i=pe(e,"disabled",3,!1);const o=G(()=>e.suggestions.slice(0,r()));function l(m){!i()&&!m.disabled&&e.onSuggestionClick(m)}var d=Y(),f=C(d);{var h=m=>{var g=Hu(),p=c(g);{var _=D=>{var A=Bu(),E=c(A);I(()=>N(E,e.title)),v(D,A)};$(p,D=>{e.title&&D(_)})}var w=u(p,2),P=c(w);_u(P,{class:"text-base-content/70 mr-1",size:14});var S=u(P,2);st(S,17,()=>s(o),D=>D.id,(D,A)=>{var E=Uu();E.__click=[zu,l,A];var k=c(E);{var T=x=>{var W=Y(),te=C(W);br(te,()=>s(A).icon,(V,z)=>{z(V,{class:"h-3 w-3"})}),v(x,W)};$(k,x=>{s(A).icon&&x(T)})}var O=u(k);I(()=>{Me(E,1,`btn btn-primary ${a()??""} ${n()??""}`),E.disabled=i()||s(A).disabled,nr(E,"title",s(A).disabled?"Déjà sélectionné":s(A).label),N(O,` ${s(A).label??""}`)}),v(D,E)}),v(m,g)};$(f,m=>{s(o).length>0&&m(h)})}v(t,d),Z()}Ye(["click"]);const Wu=[{value:"kg",label:"kg"},{value:"gr.",label:"gr."},{value:"l.",label:"l."},{value:"ml",label:"ml"},{value:"unité",label:"unité·s"},{value:"bottes",label:"botte·s"}];var Qu=y("<option> </option>"),Gu=y('<fieldset class="fieldset"><div class="flex gap-2"><label class="input w-32"><!> <input type="number" step="1" min="0" placeholder="Quantité" required/></label> <select class="custom-select input w-28" required><option disabled selected>Unité</option><!></select></div></fieldset>');function za(t,e){J(e,!0);let r=pe(e,"quantity",15),a=pe(e,"unit",15),n=pe(e,"disabled",3,!1);var i=Gu(),o=c(i),l=c(o),d=c(l);Ba(d,{class:"h-4 w-4 opacity-50"});var f=u(d,2),h=u(l,2),m=c(h);m.value=m.__value="";var g=u(m);st(g,17,()=>Wu,Sr,(p,_)=>{let w=()=>s(_).value,P=()=>s(_).label;var S=Qu(),D=c(S),A={};I(()=>{N(D,P()),A!==(A=w())&&(S.value=(S.__value=w())??"")}),v(p,S)}),I(()=>{f.disabled=n(),h.disabled=n()}),Ke(f,r),Pa(h,a),v(t,i),Z()}var Vu=y('<div><label class="input w-72"><!> <input/></label> <!></div>');function Wr(t,e){J(e,!0);let r=pe(e,"value",15),a=pe(e,"suggestions",19,()=>[]),n=pe(e,"disabled",3,!1),i=pe(e,"flexCol",3,!1),o=_e(e,["$$slots","$$events","$$legacy","value","suggestions","disabled","flexCol"]);const l=G(()=>a().map(_=>({id:_,label:_,disabled:_===r()})));var d=Vu(),f=c(d),h=c(f);gr(h,{class:"h-4 w-4 opacity-50"});var m=u(h,2);is(m,()=>({type:"text",placeholder:"Magasin",maxlength:"50",disabled:n(),...o}),void 0,void 0,void 0,!0);var g=u(f,2);{var p=_=>{Is(_,{get suggestions(){return s(l)},onSuggestionClick:w=>r(w.label),buttonSize:"btn-xs"})};$(g,_=>{a().length>0&&_(p)})}I(()=>Me(d,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`)),Ke(m,r),v(t,d),Z()}var Fu=y('<div><label class="input w-72"><!> <input type="text" placeholder="Qui" maxlength="25"/></label> <!></div>');function la(t,e){J(e,!0);let r=pe(e,"value",15),a=pe(e,"suggestions",19,()=>[]),n=pe(e,"disabled",3,!1),i=pe(e,"flexCol",3,!1);const o=G(()=>a().map(p=>({id:p,label:p,disabled:p===r()})));var l=Fu(),d=c(l),f=c(d);Cs(f,{class:"h-4 w-4 opacity-50"});var h=u(f,2);h.__keydown=function(...p){e.onkeydown?.apply(this,p)};var m=u(d,2);{var g=p=>{Is(p,{get suggestions(){return s(o)},onSuggestionClick:_=>r(_.label),buttonSize:"btn-xs"})};$(m,p=>{a().length>0&&p(g)})}I(()=>{Me(l,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`),h.disabled=n()}),Ke(h,r),v(t,l),Z()}Ye(["keydown"]);var Ku=y('<textarea class="textarea w-full text-sm" placeholder="Commentaire (optionnel)" rows="2" maxlength="250"></textarea>');function Qr(t,e){J(e,!0);let r=pe(e,"value",15),a=pe(e,"disabled",3,!1);var n=Ku();I(()=>n.disabled=a()),Ke(n,r),v(t,n),Z()}var Yu=y('<label class="input w-28"><!> <input type="number" step="1" min="0" placeholder="0.00"/></label>');function Rs(t,e){J(e,!0);let r=pe(e,"value",15),a=pe(e,"disabled",3,!1);var n=Yu(),i=c(n);ou(i,{class:"h-4 w-4 opacity-50"});var o=u(i,2);I(()=>o.disabled=a()),Ke(o,r),v(t,n),Z()}var Ju=y('<label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label>'),Zu=y(`<div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Acheté</option><option>Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div>`);function li(t,e){J(e,!0);let r=pe(e,"status",15),a=pe(e,"deliveryDate",15),n=pe(e,"disabled",3,!1);var i=Zu(),o=c(i),l=c(o),d=c(l);d.value=d.__value="delivered";var f=u(d);f.value=f.__value="ordered";var h=u(l,2),m=u(o,2);{var g=p=>{var _=Ju(),w=u(c(_),2);I(()=>w.disabled=n()),Ke(w,a),v(p,_)};$(m,p=>{r()==="ordered"&&p(g)})}I(()=>{l.disabled=n(),Me(h,1,`label ${r()==="delivered"?"":"hidden"}`)}),Pa(l,r),v(t,i),Z()}function Pn(t,e,r){s(e)||r.onClose()}var Xu=y('<div class="alert alert-error"><!> <span> </span></div>'),ed=y('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),td=y(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes <strong>pour la période sélectionnée</strong>, c'est à dire le besoin total pour chaque produit sur cette
            période moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),rd=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),ad=y("<!> ",1),sd=y(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="mb-4 flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><!> <!></div> <!> <!> <div><!></div></div> <div class="mb-4"><h4 class=" font-medium">Produits concernés</h4> <div class="text-base-content/70 mb-4">les quantités manquantes du <span class="badge badge-info badge-sm"> </span> au <span class="badge badge-info badge-sm"> </span> pour les produits suivant seront déclarés "acheté"</div> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function nd(t,e){J(e,!0);let r=L(!1),a=L(null),n=L(null),i=je({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),o=L(je(new Set));Jt(()=>{b(o,new Set(e.products.map(B=>B.$id)),!0)});const l=G(()=>e.products.filter(B=>s(o).has(B.$id))),d=G(()=>s(l).length!==0),f=G(()=>{const B=K.dateRange;let Q="";return B?.start&&B?.end&&(B.start===B.end?Q=` - ${fr(B.start)}`:Q=` - Du ${fr(B.start)} au ${fr(B.end)}`),`Achat groupé (${s(l).length} produits sélectionnés)${Q}`});async function h(){if(!s(d)||s(r))return;b(r,!0),b(a,null),b(n,null);const B=`FACTURE_${Date.now()}`,Q=s(l).map(ve=>ve.$id);K.setSyncStatus(Q,!0),Dt.backgroundOperation={isRunning:!0,name:`Achat groupé (${s(l).length} produits)`,progress:0};const ne=[];for(const ve of s(l)){const H=(K.getProductModelById(ve.$id)?.stats.missingQuantities||[]).filter(be=>be.q<0).map(be=>({...be,q:Math.abs(be.q)}));ne.push({productId:ve.$id,isSynced:ve.isSynced,productData:ve,missingQuantities:H})}const ke={invoiceId:B,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(l).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${ne.length} produits...`),e.onClose();try{const ve=await ku(K.currentMainId,ne,ke);if(ve.success)console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${ve.totalProductsCreated} produits synchronisés, ${ve.totalPurchasesCreated} achats créés, ${ve.totalExpensesCreated} dépenses globales`),Qe.success(`Achat groupé réussi ! ${ve.totalPurchasesCreated} achats créés.`),e.onSuccess?.();else throw new Error(ve.error||"Erreur lors de la création de l'achat groupé")}catch(ve){const Oe=ve instanceof Error?ve.message:"Erreur inconnue";console.error("[GroupPurchaseModal] Erreur création achat groupé:",ve),Qe.error(`Erreur achat groupé: ${Oe}`),K.clearSyncStatus()}finally{b(r,!1),Dt.backgroundOperation={isRunning:!1,name:"",progress:0}}}function m(B){const Q=new Set(s(o));Q.has(B)?Q.delete(B):Q.add(B),b(o,Q,!0)}const g=G(()=>e.products.map(B=>{const Q=K.getProductModelById(B.$id);return{id:B.$id,label:B.productName,title:`${B.productName} - Manque: ${Q?.stats.formattedMissingQuantities||"-"}`,badge:Q?.stats.formattedMissingQuantities||"-"}}));var p=sd(),_=c(p),w=c(_),P=c(w),S=c(P);yr(S,{class:"h-5 w-5"});var D=u(S),A=u(P,2);A.__click=[Pn,r,e];var E=c(A);It(E,{class:"h-4 w-4"});var k=u(w,2),T=c(k);{var O=B=>{var Q=Xu(),ne=c(Q);ia(ne,{class:"h-4 w-4"});var ke=u(ne,2),ve=c(ke);I(()=>N(ve,s(a))),v(B,Q)};$(T,B=>{s(a)&&B(O)})}var x=u(T,2);{var W=B=>{var Q=ed(),ne=c(Q);Lr(ne,{class:"h-4 w-4"});var ke=u(ne,2),ve=c(ke),Oe=u(ve);{var H=Ue=>{var Je=bt("+ 1 dépense globale");v(Ue,Je)};$(Oe,Ue=>{s(n).expense&&Ue(H)})}var be=u(Oe,2);{var We=Ue=>{var Je=bt();I(()=>N(Je,`(traité en ${s(n).batches??""} lots)`)),v(Ue,Je)};$(be,Ue=>{s(n).batches&&s(n).batches>1&&Ue(We)})}I(()=>N(ve,`Achat groupé créé avec succès ! ${s(n).purchases??""} produit(s) validés `)),v(B,Q)};$(x,B=>{s(n)&&B(W)})}var te=u(x,2),V=c(te);ii(V,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit sur la période sélectionnée.",class:"bg-base-200",children:(B,Q)=>{var ne=td();v(B,ne)},$$slots:{default:!0}});var z=u(te,2),le=u(c(z),2),ge=c(le);Wr(ge,{get suggestions(){return K.uniqueStores},get disabled(){return s(r)},get value(){return i.store},set value(B){i.store=B}});var Pe=u(ge,2);la(Pe,{get suggestions(){return K.uniqueWho},get disabled(){return s(r)},get value(){return i.who},set value(B){i.who=B}});var U=u(le,2);Rs(U,{get disabled(){return s(r)},get value(){return i.expense},set value(B){i.expense=B}});var ce=u(U,2);li(ce,{get disabled(){return s(r)},get status(){return i.status},set status(B){i.status=B},get deliveryDate(){return i.deliveryDate},set deliveryDate(B){i.deliveryDate=B}});var ye=u(ce,2),se=c(ye);Qr(se,{get disabled(){return s(r)},get value(){return i.notes},set value(B){i.notes=B}});var re=u(z,2),me=u(c(re),2),we=u(c(me)),F=c(we),X=u(we,2),M=c(X),ae=u(me,2);ta(ae,{get items(){return s(g)},onToggleItem:m,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var R=u(re,2),ie=c(R);ie.__click=[Pn,r,e];var j=u(ie,2);j.__click=h;var ee=c(j);{var de=B=>{var Q=rd();v(B,Q)},$e=B=>{var Q=ad(),ne=C(Q);yr(ne,{class:"h-4 w-4"});var ke=u(ne);I(()=>N(ke,` Valider ${s(l).length??""} produit(s)`)),v(B,Q)};$(ee,B=>{s(r)?B(de):B($e,!1)})}I((B,Q)=>{N(D,` ${s(f)??""}`),A.disabled=s(r),N(F,B),N(M,Q),ie.disabled=s(r),j.disabled=s(r)||!s(d)},[()=>fr(K.dateRange.start),()=>fr(K.dateRange.start)]),v(t,p),Z()}Ye(["click"]);function Xa(t,e,r,a){e(!1),b(r,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0),b(a,null)}var od=y('<div class="alert alert-error text-sm"><!> <span> </span></div>'),id=(t,e)=>e(!0),ld=y('<span class="loading loading-spinner"></span>'),cd=y('<span class="loading loading-spinner"></span>'),ud=y('<div role="dialog"><div class="modal-box relative w-10/12 max-w-5xl"><button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" aria-label="Fermer"><!></button> <h3 class="text-lg font-bold">Ajouter un produit</h3> <form class="mt-6 space-y-4"><!> <fieldset class="space-y-4"><div class="flex flex-wrap gap-4"><fieldset class="fieldset"><label class="input w-72"><!> <input id="product-name" type="text" placeholder="Nom du produit"/></label></fieldset> <!></div> <fieldset class="fieldset"><div class="flex flex-wrap items-baseline gap-2"><label class="input w-72"><!> <input id="product-type" type="text" placeholder="type / catégorie"/></label> <!></div></fieldset> <!> <!> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-success"/> <span class="label-text flex items-center gap-2"><!> Produit frais</span></label></fieldset> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-info"/> <span class="label-text flex items-center gap-2"><!> Produit surgelé</span></label></fieldset></fieldset> <div class="modal-action flex justify-between"><button type="button" class="btn btn-ghost">Annuler</button> <div class="flex gap-2"><button type="button" class="btn btn-secondary"><!> Ajouter et créer un nouveau</button> <button type="submit" class="btn btn-primary"><!> Ajouter et fermer</button></div></div></form></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></div>');function dd(t,e){J(e,!0);let r=pe(e,"open",15,!1),a=L(!1),n=L(null),i=L(!1),o=L(je({productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""}));const l=G(()=>s(o).productName.trim().length>0&&s(o).productType.trim().length>0),d=G(()=>K.uniqueProductTypes.map(H=>({id:H,label:H})));async function f(H=!1){if(!(!s(l)||s(a))){b(a,!0),b(n,null),b(i,!1);try{if(!K.currentMainId)throw new Error("Aucun événement principal sélectionné");const be={productName:s(o).productName.trim(),productType:s(o).productType.trim(),store:s(o).store.trim()?{storeName:s(o).store.trim()}:void 0,who:s(o).who.trim()?[s(o).who.trim()]:void 0,pFrais:s(o).pFrais,pSurgel:s(o).pSurgel,quantity:s(o).quantity?{q:s(o).quantity,u:s(o).unit.trim()||"pièces"}:void 0};await Mo(be,K.currentMainId),b(i,!0),H?(s(o).productName="",s(o).quantity=void 0,s(o).unit="",s(o).pFrais=!1,s(o).pSurgel=!1,setTimeout(()=>{document.getElementById("product-name")?.focus()},100)):(r(!1),b(o,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0))}catch(be){console.error("Error creating product:",be),b(n,"Erreur lors de la création du produit. Veuillez réessayer.")}finally{b(a,!1)}}}Jt(()=>{r()&&setTimeout(()=>{document.getElementById("product-name")?.focus()},50)});var h=ud();let m;var g=c(h),p=c(g);p.__click=[Xa,r,o,n];var _=c(p);It(_,{size:20});var w=u(p,4),P=c(w);{var S=H=>{var be=od(),We=c(be);ia(We,{size:18});var Ue=u(We,2),Je=c(Ue);I(()=>N(Je,s(n))),v(H,be)};$(P,H=>{s(n)&&H(S)})}var D=u(P,2),A=c(D),E=c(A),k=c(E),T=c(k);gu(T,{class:"text-base-content/50 h-5 w-5"});var O=u(T,2),x=u(E,2);za(x,{get disabled(){return s(a)},get quantity(){return s(o).quantity},set quantity(H){s(o).quantity=H},get unit(){return s(o).unit},set unit(H){s(o).unit=H}});var W=u(A,2),te=c(W),V=c(te),z=c(V);xu(z,{class:"text-base-content/50 h-5 w-5"});var le=u(z,2),ge=u(V,2);Is(ge,{get suggestions(){return s(d)},onSuggestionClick:H=>s(o).productType=H.label,get disabled(){return s(a)}});var Pe=u(W,2);Wr(Pe,{get suggestions(){return K.uniqueStores},get disabled(){return s(a)},get value(){return s(o).store},set value(H){s(o).store=H}});var U=u(Pe,2);la(U,{get suggestions(){return K.uniqueWho},get disabled(){return s(a)},get value(){return s(o).who},set value(H){s(o).who=H}});var ce=u(U,2),ye=c(ce),se=c(ye),re=u(se,2),me=c(re);si(me,{class:"h-4 w-4"});var we=u(ce,2),F=c(we),X=c(F),M=u(X,2),ae=c(M);Ns(ae,{class:"h-4 w-4"});var R=u(D,2),ie=c(R);ie.__click=[Xa,r,o,n];var j=u(ie,2),ee=c(j);ee.__click=[id,f];var de=c(ee);{var $e=H=>{var be=ld();v(H,be)},B=H=>{Ms(H,{size:18})};$(de,H=>{s(a)?H($e):H(B,!1)})}var Q=u(ee,2),ne=c(Q);{var ke=H=>{var be=cd();v(H,be)};$(ne,H=>{s(a)&&H(ke)})}var ve=u(g,2),Oe=c(ve);Oe.__click=[Xa,r,o,n],I(H=>{m=Me(h,1,"modal",null,m,H),D.disabled=s(a),O.disabled=s(a),le.disabled=s(a),se.disabled=s(a),X.disabled=s(a),ie.disabled=s(a),ee.disabled=s(a)||!s(o).productName,Q.disabled=s(a)||!s(o).productName},[()=>({"modal-open":r()})]),Cr("submit",w,H=>{H.preventDefault(),f(!1)}),Ke(O,()=>s(o).productName,H=>s(o).productName=H),Ke(le,()=>s(o).productType,H=>s(o).productType=H),ls(se,()=>s(o).pFrais,H=>s(o).pFrais=H),ls(X,()=>s(o).pSurgel,H=>s(o).pSurgel=H),v(t,h),Z()}Ye(["click"]);function ds(t){switch(t.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Fc};case"animaux":return{displayName:"Viandes et Poissons",icon:Kc};case"legumes":return{displayName:"Fruits et Légumes",icon:Jc};case"sucres":return{displayName:"Sucrées",icon:Yc};case"lof":return{displayName:"L.O.F",icon:nu};case"autres":return{displayName:"Autres",icon:Zc};case"epices":return{displayName:"Assaisonnements",icon:cu};case"frais":return{displayName:"Produits Frais",icon:yu};default:return{displayName:t,icon:Ba}}}function vs(t,e){return e==="kg"?{quantity:t*1e3,unit:"gr."}:e==="l."?{quantity:t*1e3,unit:"ml"}:{quantity:t,unit:e}}function Os(t,e){let r,a;if(e==="gr."&&t>=1e3){const n=t/1e3;r=es(n),a="kg"}else if(e==="ml"&&t>=1e3){const n=t/1e3;r=es(n),a="l"}else r=es(t),a=e;return`${r} ${a}`}function es(t){return(Math.round(t*10)/10).toString().replace(/\.0$/,"")}function Ua(t){if(!t)return"-";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}function vd(t){if(!t)return"";try{return new Date(t).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short"})}catch{return t}}function fs(t){switch(t){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function $n(t){return t?Ua(t):"-"}function fd(t){if(!t?.length)return[];const e=t.reduce((r,a)=>{const n=a.status||"direct",i=a.unit||"unit",o=`${n}_${i}`;if(!r[o]){const l=fs(n);r[o]={status:n,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:hd(n),deliveryDate:n==="ordered"&&a.deliveryDate?vd(a.deliveryDate):void 0}}return r[o].quantity+=a.quantity||0,r},{});return Object.values(e).map(r=>({...r,quantity:Os(r.quantity,r.unit).replace(` ${r.unit}`,"")}))}function hd(t){switch(t){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"Check";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}class pd{constructor(e,r="recettes"){this.productId=e,this.currentTab=r,this.initForms()}#e=L(!1);get loading(){return s(this.#e)}set loading(e){b(this.#e,e,!0)}#t=L(null);get error(){return s(this.#t)}set error(e){b(this.#t,e,!0)}#r=L("recettes");get currentTab(){return s(this.#r)}set currentTab(e){b(this.#r,e,!0)}#o=G(()=>{const e=this.productId;return K.getEnrichedProductById(e)});get product(){return s(this.#o)}set product(e){b(this.#o,e)}#u=G(()=>this.product?.who??[]);get whoList(){return s(this.#u)}set whoList(e){b(this.#u,e)}#l=G(()=>this.product?.stockParsed??null);get stockParsed(){return s(this.#l)}set stockParsed(e){b(this.#l,e)}#c=G(()=>this.product?.purchases??[]);get purchasesList(){return s(this.#c)}set purchasesList(e){b(this.#c,e)}#i=G(()=>this.product?.byDate?Po(this.product.byDate):[]);get recipes(){return s(this.#i)}set recipes(e){b(this.#i,e)}#d=L(je({purchase:{quantity:null,unit:"",store:"",who:Dt.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]}));get forms(){return s(this.#d)}set forms(e){b(this.#d,e,!0)}#n=L(je({overrideManagerEditMode:!1}));get uiStates(){return s(this.#n)}set uiStates(e){b(this.#n,e,!0)}#v=L(null);get editingPurchaseId(){return s(this.#v)}set editingPurchaseId(e){b(this.#v,e,!0)}#a=G(()=>this.editingPurchaseId?this.purchasesList.find(e=>e.$id===this.editingPurchaseId)??null:null);get editingPurchaseData(){return s(this.#a)}set editingPurchaseData(e){b(this.#a,e)}#f=L(null);get originalFormsSnapshot(){return s(this.#f)}set originalFormsSnapshot(e){b(this.#f,e,!0)}initForms(){const e=K.getEnrichedProductById(this.productId);e&&(this.forms.purchase.quantity=e.missingQuantityArray[0]?.q??null,this.forms.purchase.unit=e.totalNeededArray[0]?.u??"",this.forms.purchase.store=e.storeInfo?.storeName??"",this.forms.purchase.who=Dt.userName()??"",this.forms.purchase.status=this.forms.purchase.status||"delivered",this.forms.stock.unit=e.totalNeededArray[0]?.u??"",this.forms.store.name=e.storeInfo?.storeName??"",this.forms.store.comment=e.storeInfo?.storeComment??null,this.forms.who=e.who?[...e.who]:[],this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})}#h=G(()=>this.originalFormsSnapshot?{store:this.forms.store.name!==this.originalFormsSnapshot.store.name||this.forms.store.comment!==this.originalFormsSnapshot.store.comment,stock:this.hasStockChanges(),who:JSON.stringify(this.forms.who)!==JSON.stringify(this.originalFormsSnapshot.whoList)}:{store:!1,stock:!1,who:!1});get hasChanges(){return s(this.#h)}set hasChanges(e){b(this.#h,e)}#p=G(()=>!!(this.originalFormsSnapshot&&(this.hasChanges.store||this.hasChanges.stock||this.hasChanges.who)));get hasAnyChanges(){return s(this.#p)}set hasAnyChanges(e){b(this.#p,e)}hasStockChanges(){return this.isStockFormValid?this.stockParsed?this.forms.stock.quantity.toString()!==this.stockParsed.quantity||this.forms.stock.unit!==this.stockParsed.unit||(this.forms.stock.notes||"")!==(this.stockParsed.notes||""):!0:!1}get isPurchaseFormValid(){return this.forms.purchase.quantity!==null&&this.forms.purchase.quantity!==0&&(this.forms.purchase.unit?.trim()??"")!==""}get isStockFormValid(){return this.forms.stock.quantity!==null&&this.forms.stock.quantity>0&&(this.forms.stock.unit?.trim()??"")!==""}setCurrentTab(e){this.currentTab=e}async addPurchase(){this.product&&await this.withLoading(async()=>{if(!this.forms.purchase.quantity||!this.forms.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!K.currentMainId)throw new Error("mainId non disponible");const{quantity:e,unit:r}=vs(this.forms.purchase.quantity,this.forms.purchase.unit);this.product.isSynced||await Ht(this.product.$id,{},i=>K.getEnrichedProductById(i));const a=this.forms.purchase.status||"delivered";let n=this.forms.purchase.deliveryDate||null;a==="delivered"&&!n&&(n=new Date().toISOString()),await Oo({products:[this.product.$id],mainId:K.currentMainId,unit:r,quantity:e,store:this.forms.purchase.store||null,who:this.forms.purchase.who||null,notes:this.forms.purchase.notes||"",price:this.forms.purchase.price||null,status:a,orderDate:this.forms.purchase.orderDate||null,deliveryDate:n}),this.forms.purchase={quantity:this.product.missingQuantityArray[0]?.q??null,unit:this.product.totalNeededArray[0]?.u??"",store:this.forms.purchase.store,who:this.forms.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}startEditPurchase(e){this.editingPurchaseId=e.$id}cancelEditPurchase(){this.editingPurchaseId=null}async updateEditedPurchase(e){e.$id&&await this.withLoading(async()=>{const{quantity:r,unit:a}=vs(e.quantity,e.unit),n=e.status||null;let i=e.deliveryDate||null;n==="delivered"&&!i&&(i=new Date().toISOString()),await Ts(e.$id,{unit:a,quantity:r,store:e.store||null,who:e.who||null,notes:e.notes||"",price:e.price||null,status:n,orderDate:e.orderDate||null,deliveryDate:i}),this.editingPurchaseId=null},"Achat modifié avec succès")}async removePurchase(e){const r=this.purchasesList.find(a=>a.$id===e);r&&confirm(`Supprimer cet achat (${r.quantity} ${r.unit}) ?`)&&await this.withLoading(async()=>{await qo(e)},"Achat supprimé avec succès")}async setStock(){this.product&&await this.withLoading(async()=>{if(!this.forms.stock.quantity||!this.forms.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const e={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};this.product.isSynced?await us(this.product.$id,JSON.stringify(e)):await Ht(this.product.$id,{stockReel:JSON.stringify(e)},r=>K.getEnrichedProductById(r)),this.forms.stock.quantity=null,this.forms.stock.notes="",this.forms.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async removeStock(){this.product&&confirm("Supprimer le stock actuel ?")&&await this.withLoading(async()=>{this.product.isSynced?await us(this.product.$id,null):await Ht(this.product.$id,{stockReel:null},e=>K.getEnrichedProductById(e))},"Stock supprimé")}async setWho(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Co(this.product.$id,e):await Ht(this.product.$id,{who:e},r=>K.getEnrichedProductById(r))},"Volontaires mis à jour")}async updateStore(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await No(this.product.$id,e):await Ht(this.product.$id,{store:JSON.stringify(e)},r=>K.getEnrichedProductById(r))},"Magasin mis à jour")}async setOverride(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await As(this.product.$id,e,!0):await Ht(this.product.$id,{totalNeededOverride:JSON.stringify(e)},r=>K.getEnrichedProductById(r))},"Override appliqué")}async removeOverride(){this.product&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await this.withLoading(async()=>{await Io(this.product.$id,!0)},"Override supprimé")}async saveAllChanges(){!this.product||!this.hasAnyChanges||await this.withLoading(async()=>{const e={};if(this.hasChanges.stock&&this.forms.stock.quantity&&this.forms.stock.unit){const r={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};e.stockReel=JSON.stringify(r)}if(this.hasChanges.who&&(e.who=this.forms.who),this.hasChanges.store){const r={storeName:this.forms.store.name||"",storeComment:this.forms.store.comment||void 0};e.storeInfo=r}Object.keys(e).length>0&&(await Ro(this.product.$id,e,r=>K.getEnrichedProductById(r)),this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})},"Modifications enregistrées")}resetForms(){this.uiStates.overrideManagerEditMode=!1,this.editingPurchaseId=null,this.initForms(),console.log("[ProductModalState] Formulaires et états UI réinitialisés")}async withLoading(e,r){this.loading=!0,this.error=null;try{const a=await e();return r&&this.showToast("success",r),a}catch(a){const n=a instanceof Error?a.message:"Une erreur est survenue";return this.error=n,this.showToast("error",n),console.error("[ProductModalState]",a),null}finally{this.loading=!1}}showToast(e,r){const a=new CustomEvent("toast",{detail:{type:e,message:r}});window.dispatchEvent(a)}formatQuantity=Os;formatDate=Ua}var gd=y('<div class="text-xs font-medium text-base-content/60 mb-1"> </div>'),md=y('<div class="text-xs text-base-content/60 mt-1"> </div>'),_d=y('<div class="font-medium"> </div> <!>',1),bd=y('<pre class="text-xs"> </pre>'),yd=y('<span class="text-base-content/50 italic">Non défini</span>'),wd=y('<div class="bg-base-300/50 rounded p-2 text-left"><!> <div class="text-sm"><!></div></div>'),Sd=y('<div class="bg-base-200/50 border border-warning/20 rounded-lg p-4 text-center"><div class="flex items-center justify-center gap-2 mb-2"><!> <!> <span class="font-medium text-warning"> </span></div> <p class="text-sm text-base-content/70 mb-3"> </p> <!></div>');function Ha(t,e){J(e,!0);let r=pe(e,"title",3,"Événement terminé"),a=pe(e,"message",3,"Cet événement est terminé. Ces données ne sont plus modifiables mais sont conservées pour consultation."),n=pe(e,"showData",3,!0),i=pe(e,"data",3,null),o=pe(e,"dataLabel",3,"");var l=Sd(),d=c(l),f=c(d);Zo(f,{class:"h-5 w-5 text-warning"});var h=u(f,2);du(h,{class:"h-4 w-4 text-warning/70"});var m=u(h,2),g=c(m),p=u(d,2),_=c(p),w=u(p,2);{var P=S=>{var D=wd(),A=c(D);{var E=W=>{var te=gd(),V=c(te);I(()=>N(V,`${o()??""} :`)),v(W,te)};$(A,W=>{o()&&W(E)})}var k=u(A,2),T=c(k);{var O=W=>{var te=bt();I(()=>N(te,i())),v(W,te)},x=W=>{var te=Y(),V=C(te);{var z=ge=>{var Pe=bt();I(U=>N(Pe,U),[()=>i().join(", ")]),v(ge,Pe)},le=ge=>{var Pe=Y(),U=C(Pe);{var ce=se=>{var re=Y(),me=C(re);{var we=X=>{var M=_d(),ae=C(M),R=c(ae),ie=u(ae,2);{var j=ee=>{var de=md(),$e=c(de);I(()=>N($e,i().storeComment)),v(ee,de)};$(ie,ee=>{i().storeComment&&ee(j)})}I(()=>N(R,i().storeName)),v(X,M)},F=X=>{var M=bd(),ae=c(M);I(R=>N(ae,R),[()=>JSON.stringify(i(),null,2)]),v(X,M)};$(me,X=>{i().storeName?X(we):X(F,!1)})}v(se,re)},ye=se=>{var re=yd();v(se,re)};$(U,se=>{typeof i()=="object"&&i()!==null?se(ce):se(ye,!1)},!0)}v(ge,Pe)};$(V,ge=>{Array.isArray(i())&&i().length>0?ge(z):ge(le,!1)},!0)}v(W,te)};$(T,W=>{typeof i()=="string"||typeof i()=="number"?W(O):W(x,!1)})}v(S,D)};$(w,S=>{n()&&i()&&S(P)})}I(()=>{N(g,r()),N(_,a())}),v(t,l),Z()}function xd(t,e){e().isPurchaseFormValid&&(e().forms.purchase.status==="ordered"&&!e().forms.purchase.orderDate&&(e().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),e().addPurchase())}function Pd(t,e,r){const a=e().editingPurchaseData;!a||!r(a)||e().updateEditedPurchase(a)}function $d(t,e){e().cancelEditPurchase()}var kd=y('<span class="loading loading-spinner loading-sm"></span>'),Ed=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="space-y-6"><div class="flex flex-wrap items-baseline gap-4"><!> <!> <!> <!></div> <div><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div>'),Ad=y('<div class="mt-4 py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Td=y("<th>Actions</th>"),Dd=y('<span class="loading loading-spinner loading-sm"></span>'),Md=y('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="1" min="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="50"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Acheté</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Nd=(t,e,r)=>e(s(r)),Cd=(t,e,r)=>e(s(r).$id),Id=y('<span class="loading loading-spinner loading-sm"></span>'),Rd=y('<td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td>'),Od=y('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><!></tr>'),qd=y('<div class="mt-4 overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><!></tr></thead><tbody></tbody></table></div>'),jd=y('<div class="space-y-4"><!></div> <!>',1);function Ld(t,e){J(e,!0);let r=pe(e,"modalState",7),a=pe(e,"isArchiveMode",3,!1);function n(w){return w.quantity!==null&&w.quantity!==0&&w.unit?.trim()!==""}function i(w){r().removePurchase(w)}function o(w){r().startEditPurchase(w)}var l=jd(),d=C(l),f=c(d);{var h=w=>{Ha(w,{title:"Achats non modifiables",message:"L'événement est terminé, les achats ne peuvent plus être ajoutés ou modifiés."})},m=w=>{var P=Ed(),S=c(P),D=u(c(S),2),A=c(D),E=c(A);za(E,{get disabled(){return r().loading},get quantity(){return r().forms.purchase.quantity},set quantity(U){r().forms.purchase.quantity=U},get unit(){return r().forms.purchase.unit},set unit(U){r().forms.purchase.unit=U}});var k=u(E,2);Rs(k,{get disabled(){return r().loading},get value(){return r().forms.purchase.price},set value(U){r().forms.purchase.price=U}});var T=u(k,2);Wr(T,{get suggestions(){return K.uniqueStores},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.store},set value(U){r().forms.purchase.store=U}});var O=u(T,2);la(O,{get suggestions(){return K.uniqueWho},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.who},set value(U){r().forms.purchase.who=U}});var x=u(A,2),W=c(x);Qr(W,{get disabled(){return r().loading},get value(){return r().forms.purchase.notes},set value(U){r().forms.purchase.notes=U}});var te=u(x,2);li(te,{get disabled(){return r().loading},get status(){return r().forms.purchase.status},set status(U){r().forms.purchase.status=U},get deliveryDate(){return r().forms.purchase.deliveryDate},set deliveryDate(U){r().forms.purchase.deliveryDate=U}});var V=u(D,2),z=c(V);z.__click=[xd,r];var le=c(z);{var ge=U=>{var ce=kd();v(U,ce)},Pe=U=>{var ce=bt("Ajouter l'achat");v(U,ce)};$(le,U=>{r().loading?U(ge):U(Pe,!1)})}I(()=>z.disabled=r().loading||!r().isPurchaseFormValid),v(w,P)};$(f,w=>{a()?w(h):w(m,!1)})}var g=u(d,2);{var p=w=>{var P=Ad(),S=c(P);yr(S,{class:"mx-auto mb-2 h-12 w-12"}),v(w,P)},_=w=>{var P=qd(),S=c(P),D=c(S),A=c(D),E=u(c(A),8);{var k=O=>{var x=Td();v(O,x)};$(E,O=>{a()||O(k)})}var T=u(D);st(T,21,()=>r().purchasesList,O=>O.$id,(O,x,W)=>{var te=Y(),V=C(te);{var z=ge=>{var Pe=Md(),U=c(Pe),ce=c(U),ye=c(ce),se=u(ye,2),re=c(se);re.value=re.__value="kg";var me=u(re);me.value=me.__value="gr.";var we=u(me);we.value=we.__value="l.";var F=u(we);F.value=F.__value="ml";var X=u(F);X.value=X.__value="unité";var M=u(X);M.value=M.__value="bottes";var ae=u(U),R=c(ae),ie=u(ae),j=c(ie),ee=u(ie),de=c(ee),$e=c(de);$e.value=$e.__value="ordered";var B=u($e);B.value=B.__value="delivered";var Q=u(ee),ne=c(Q),ke=u(Q),ve=c(ke),Oe=u(ke),H=c(Oe),be=u(Oe),We=c(be),Ue=u(be),Je=c(Ue),Ie=c(Je);Ie.__click=[Pd,r,n];var et=c(Ie);{var Bt=Ae=>{var Xe=Dd();v(Ae,Xe)},Ee=Ae=>{wu(Ae,{class:"h-3 w-3"})};$(et,Ae=>{r().loading?Ae(Bt):Ae(Ee,!1)})}var De=u(Ie,2);De.__click=[$d,r];var Be=c(De);It(Be,{class:"h-3 w-3"}),I(Ae=>Ie.disabled=Ae,[()=>r().loading||!n(s(x))]),Ke(ye,()=>s(x).quantity,Ae=>s(x).quantity=Ae),Pa(se,()=>s(x).unit,Ae=>s(x).unit=Ae),Ke(R,()=>s(x).store,Ae=>s(x).store=Ae),Ke(j,()=>s(x).who,Ae=>s(x).who=Ae),Pa(de,()=>s(x).status,Ae=>s(x).status=Ae),Ke(ne,()=>s(x).orderDate,Ae=>s(x).orderDate=Ae),Ke(ve,()=>s(x).deliveryDate,Ae=>s(x).deliveryDate=Ae),Ke(H,()=>s(x).price,Ae=>s(x).price=Ae),Ke(We,()=>s(x).notes,Ae=>s(x).notes=Ae),v(ge,Pe)},le=ge=>{var Pe=Od(),U=c(Pe),ce=c(U),ye=u(U),se=c(ye),re=u(ye),me=c(re),we=u(re),F=c(we),X=c(F),M=u(we),ae=c(M),R=u(M),ie=c(R),j=u(R),ee=c(j),de=u(j),$e=c(de),B=u(de);{var Q=ne=>{var ke=Rd(),ve=c(ke),Oe=c(ve);Oe.__click=[Nd,o,x];var H=c(Oe);ea(H,{class:"h-4 w-4"});var be=u(Oe,2);be.__click=[Cd,i,x];var We=c(be);{var Ue=Ie=>{var et=Id();v(Ie,et)},Je=Ie=>{It(Ie,{class:"h-4 w-4"})};$(We,Ie=>{r().loading?Ie(Ue):Ie(Je,!1)})}I(()=>be.disabled=r().loading),v(ne,ke)};$(B,ne=>{a()||ne(Q)})}I((ne,ke,ve,Oe,H)=>{N(ce,ne),N(se,s(x).store||"-"),N(me,s(x).who||"-"),Me(F,1,`badge badge-sm ${ke??""}`),N(X,ve),N(ae,Oe),N(ie,H),N(ee,s(x).price?`${s(x).price}€`:"-"),N($e,s(x).notes||"-")},[()=>Os(s(x).quantity,s(x).unit),()=>fs(s(x).status).class,()=>fs(s(x).status).text,()=>$n(s(x).orderDate),()=>$n(s(x).deliveryDate)]),v(ge,Pe)};$(V,ge=>{r().editingPurchaseId===s(x).$id?ge(z):ge(le,!1)})}v(O,te)}),v(w,P)};$(g,w=>{r().purchasesList.length===0?w(p):w(_,!1)})}v(t,l),Z()}Ye(["click"]);async function Bd(t,e){await e()?.removeStock()}var zd=y(`Le stock réel est la quantité réelle du produit constaté dans le
            stock: <strong>il sera utilisé pour le calcul des quantités manquantes à se
              fournir à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantités manquantes à se fournir.`,1),Ud=(t,e)=>{e().forms.stock.quantity=null,e().forms.store.comment=""},Hd=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><!></div> <div><!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>'),Wd=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Qd=y('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),Gd=y('<span class="loading loading-spinner loading-xs"></span>'),Vd=y('<div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div>'),Fd=y('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <!></div></div>'),Kd=y('<div class="space-y-4"><!></div> <!>',1);function Yd(t,e){J(e,!0);let r=pe(e,"modalState",7),a=pe(e,"isArchiveMode",3,!1);var n=Kd(),i=C(n),o=c(i);{var l=g=>{Ha(g,{title:"Stock non modifiable",message:"L'événement est terminé, le stock ne peut plus être modifié.",get data(){return r().stockParsed},dataLabel:"Stock actuel"})},d=g=>{var p=Hd(),_=c(p),w=c(_),P=c(w),S=u(w,2),D=c(S);ii(D,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(W,te)=>{var V=zd();v(W,V)},$$slots:{default:!0}});var A=u(S,2),E=c(A);za(E,{get disabled(){return r().loading},get quantity(){return r().forms.stock.quantity},set quantity(W){r().forms.stock.quantity=W},get unit(){return r().forms.stock.unit},set unit(W){r().forms.stock.unit=W}});var k=u(A,2),T=c(k);Qr(T,{get disabled(){return r().loading},get value(){return r().forms.stock.notes},set value(W){r().forms.stock.notes=W}});var O=u(k,2),x=c(O);x.__click=[Ud,r],I(W=>{N(P,`Déclarer le stock réel du ${W??""}`),x.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),v(g,p)};$(o,g=>{a()?g(l):g(d,!1)})}var f=u(i,2);{var h=g=>{var p=Wd(),_=c(p);Fo(_,{class:"mx-auto mb-2 h-12 w-12"}),v(g,p)},m=g=>{var p=Fd(),_=c(p),w=u(c(_),2),P=c(w),S=u(c(P),2),D=c(S),A=u(P,2),E=u(c(A),2),k=c(E),T=u(A,2);{var O=te=>{var V=Qd(),z=u(c(V),2),le=c(z);I(()=>N(le,r().stockParsed.notes)),v(te,V)};$(T,te=>{r().stockParsed.notes&&te(O)})}var x=u(w,2);{var W=te=>{var V=Vd(),z=c(V);z.__click=[Bd,r];var le=c(z);{var ge=U=>{var ce=Gd();v(U,ce)},Pe=U=>{var ce=bt("Supprimer le stock");v(U,ce)};$(le,U=>{r().loading?U(ge):U(Pe,!1)})}I(()=>z.disabled=r().loading),v(te,V)};$(x,te=>{a()||te(W)})}I(te=>{N(D,`${r().stockParsed.quantity??""}
            ${r().stockParsed.unit??""}`),N(k,te)},[()=>Ua(r().stockParsed.dateTime)]),v(g,p)};$(f,g=>{r().stockParsed?g(m,!1):g(h)})}v(t,n),Z()}Ye(["click"]);function Jd(t,e,r){e().forms.who=[...e().whoList],b(r,"")}var Zd=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},Xd=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div>'),ev=y('<div class="space-y-4"><!></div>');function tv(t,e){J(e,!0);let r=pe(e,"modalState",7),a=pe(e,"isArchiveMode",3,!1),n=L("");const i=G(()=>{const _=new Set([...K.uniqueWho,...r().forms.who]);return Array.from(_).map(w=>({id:w,label:w,selected:r().forms.who.includes(w)}))});function o(_){const w=_.trim();w&&!r().forms.who.includes(w)&&(r().forms.who=[...r().forms.who,w])}function l(_){r().forms.who=r().forms.who.filter(w=>w!==_)}function d(_){r().forms.who.includes(_)?l(_):o(_)}function f(){s(n).trim()&&(o(s(n)),b(n,""))}var h=ev(),m=c(h);{var g=_=>{Ha(_,{title:"Volontaires non modifiables",message:"L'événement est terminé, les volontaires assignés ne peuvent plus être modifiés."})},p=_=>{var w=Xd(),P=c(w),S=u(c(P),4),D=c(S),A=c(D),E=c(A);Cs(E,{class:"h-4 w-4 opacity-50"});var k=u(E,2);k.__keydown=[Zd,f];var T=u(A,2);T.__click=f;var O=c(T);ni(O,{size:16});var x=u(D,2),W=u(c(x),2);ta(W,{get items(){return s(i)},onToggleItem:d,showIcon:!0,badgeSize:"btn-sm"});var te=u(P,2),V=c(te);V.__click=[Jd,r,n],I(z=>{k.disabled=r().loading,T.disabled=z,V.disabled=r().loading},[()=>r().loading||!s(n).trim()]),Ke(k,()=>s(n),z=>b(n,z)),v(_,w)};$(m,_=>{a()?_(g):_(p,!1)})}v(t,h),Z()}Ye(["keydown","click"]);var rv=(t,e)=>{e().forms.store.name="",e().forms.store.comment=""},av=y(`<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`),sv=y('<div class="space-y-4"><!></div>');function nv(t,e){J(e,!0);let r=pe(e,"modalState",7),a=pe(e,"isArchiveMode",3,!1);const n=G(()=>r()?.hasChanges?.store||!1);async function i(){if(!s(n))return;const h={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(h)}var o=sv(),l=c(o);{var d=h=>{{let m=G(()=>r().product?.storeInfo);Ha(h,{title:"Magasin non modifiable",message:"L'événement est terminé, les informations de magasin ne peuvent plus être modifiées.",get data(){return s(m)},dataLabel:"Magasin actuel"})}},f=h=>{var m=av(),g=c(m),p=u(c(g),4),_=c(p),w=c(_);Wr(w,{get suggestions(){return K.uniqueStores},get disabled(){return r().loading},onkeydown:A=>{A.key==="Enter"&&i()},get value(){return r().forms.store.name},set value(A){r().forms.store.name=A}});var P=u(_,2);Qr(P,{get disabled(){return r().loading},get value(){return r().forms.store.comment},set value(A){r().forms.store.comment=A}});var S=u(p,2),D=c(S);D.__click=[rv,r],I(()=>D.disabled=r().loading),v(h,m)};$(l,h=>{a()?h(d):h(f,!1)})}v(t,o),Z()}Ye(["click"]);var ov=y('<label class="input w-96"><!> <input type="text" placeholder="Commentaire (optionnel)" maxlength="250"/></label>');function iv(t,e){J(e,!0);let r=pe(e,"value",15);pe(e,"disabled",3,!1);var a=ov(),n=c(a);ei(n,{size:20,class:"text-base-centent/70"});var i=u(n,2);Ke(i,r),v(t,a),Z()}function lv(t){const e=t-1;return e*e*e+1}function cv(t,{delay:e=0,duration:r=400,easing:a=lv,axis:n="y"}={}){const i=getComputedStyle(t),o=+i.opacity,l=n==="y"?"height":"width",d=parseFloat(i[l]),f=n==="y"?["top","bottom"]:["left","right"],h=f.map(S=>`${S[0].toUpperCase()}${S.slice(1)}`),m=parseFloat(i[`padding${h[0]}`]),g=parseFloat(i[`padding${h[1]}`]),p=parseFloat(i[`margin${h[0]}`]),_=parseFloat(i[`margin${h[1]}`]),w=parseFloat(i[`border${h[0]}Width`]),P=parseFloat(i[`border${h[1]}Width`]);return{delay:e,duration:r,easing:a,css:S=>`overflow: hidden;opacity: ${Math.min(S*20,1)*o};${l}: ${S*d}px;padding-${f[0]}: ${S*m}px;padding-${f[1]}: ${S*g}px;margin-${f[0]}: ${S*p}px;margin-${f[1]}: ${S*_}px;border-${f[0]}-width: ${S*w}px;border-${f[1]}-width: ${S*P}px;min-${l}: 0`}}async function uv(t,e,r,a,n){if(!e())return;const i={totalOverride:{q:s(r),u:s(a)},comment:s(n)};await e().setOverride(i),e().uiStates.overrideManagerEditMode=!1}async function dv(t,e){e()&&(await e().removeOverride(),e().uiStates.overrideManagerEditMode=!1)}var vv=y('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Ancienne quantité calculée</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),fv=y('<div class="stat-desc italic">Recettes actuelles</div>'),hv=y('<div class="chat-bubble relative ms-auto mt-2 text-sm"> <!></div>'),pv=y('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins redéfinie manuellement</div> <div class="stat-value text-content-base/70 text-end text-lg"> </div> <!></div>'),gv=(t,e)=>e().uiStates.overrideManagerEditMode=!0,mv=y('<div class="ms-auto mt-auto"><button class="btn btn-primary btn-sm btn-soft"><!> <!></button></div>'),_v=(t,e)=>e().uiStates.overrideManagerEditMode=!1,bv=y('<span class="loading loading-spinner loading-sm"></span>'),yv=y('<span class="loading loading-spinner loading-sm"></span>'),wv=y('<div class="mt-4 flex flex-wrap items-center gap-4"><!> <!> <div class="ms-auto"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div></div>'),Sv=y('<div class="mb-2 space-y-4"><div class="bg-base-200 relative mb-4 flex rounded-xl p-4"><div class="grid"><div class="flex gap-4"><!> <div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins calculées</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="ms-auto flex flex-wrap gap-4"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div> <!></div> <!> <!></div> <!></div></div></div>');function xv(t,e){J(e,!0);let r=pe(e,"modalState",7);const a=G(()=>r().product?.totalNeededOverrideParsed),n=G(()=>r().product?.displayTotalOverride);let i=G(()=>s(a)?.hasUnresolvedChangedSinceOverride),o=G(()=>r().uiStates.overrideManagerEditMode),l=L(je(r().product?.totalNeededOverrideParsed?.totalOverride.q||r().product?.totalNeededArray[0]?.q||0)),d=L(je(r().product?.totalNeededOverrideParsed?.totalOverride.u||r().product?.totalNeededArray[0]?.u||"")),f=L(je(r().product?.totalNeededOverrideParsed?.comment||"")),h=G(()=>s(l)>0&&s(d).trim()!=="");var m=Y(),g=C(m);{var p=_=>{var w=Sv(),P=c(w),S=c(P),D=c(S),A=c(D);{var E=F=>{var X=vv(),M=u(c(X),2),ae=c(M);I(()=>N(ae,s(a)?.oldTotalDisplay)),v(F,X)};$(A,F=>{s(a)?.oldTotalDisplay&&s(i)&&F(E)})}var k=u(A,2),T=u(c(k),2),O=c(T),x=u(T,2),W=c(x),te=c(W),V=u(te);La(V,{class:"h-3 w-3"});var z=u(W,2),le=c(z),ge=u(le);oi(ge,{class:"h-3 w-3"});var Pe=u(x,2);{var U=F=>{var X=fv();v(F,X)};$(Pe,F=>{s(a)?.oldTotalDisplay&&s(i)&&F(U)})}var ce=u(k,2);{var ye=F=>{var X=pv(),M=u(c(X),2),ae=c(M),R=u(M,2);{var ie=j=>{var ee=hv(),de=c(ee),$e=u(de);ei($e,{size:16,class:"text-base-content/60 absolute right-1 bottom-1 "}),I(()=>N(de,`${s(a).comment??""} `)),v(j,ee)};$(R,j=>{s(a).comment&&j(ie)})}I(()=>N(ae,s(n))),v(F,X)};$(ce,F=>{s(n)&&s(a)&&F(ye)})}var se=u(ce,2);{var re=F=>{var X=mv(),M=c(X);M.__click=[gv,r];var ae=c(M);{var R=ee=>{var de=bt("Redéfinir les besoins");v(ee,de)},ie=ee=>{var de=bt("Définir manuellement les besoins");v(ee,de)};$(ae,ee=>{s(a)?ee(R):ee(ie,!1)})}var j=u(ae,2);ea(j,{size:16}),v(F,X)};$(se,F=>{!e.isArchiveMode&&!s(o)&&F(re)})}var me=u(D,2);{var we=F=>{var X=wv(),M=c(X);za(M,{get quantity(){return s(l)},set quantity(ve){b(l,ve,!0)},get unit(){return s(d)},set unit(ve){b(d,ve,!0)}});var ae=u(M,2);iv(ae,{get value(){return s(f)},set value(ve){b(f,ve,!0)}});var R=u(ae,2),ie=c(R);ie.__click=[_v,r];var j=u(ie,2);j.__click=[dv,r];var ee=c(j);{var de=ve=>{var Oe=bv();v(ve,Oe)},$e=ve=>{var Oe=bt();I(()=>N(Oe,`Réinitialiser le total calculé (${r().product.displayTotalNeeded??""}).`)),v(ve,Oe)};$(ee,ve=>{r().loading?ve(de):ve($e,!1)})}var B=u(j,2);B.__click=[uv,r,l,d,f];var Q=c(B);{var ne=ve=>{var Oe=yv();v(ve,Oe)},ke=ve=>{var Oe=bt("Appliquer");v(ve,Oe)};$(Q,ve=>{r().loading?ve(ne):ve(ke,!1)})}I(()=>{j.disabled=r().loading,B.disabled=r().loading||!s(h)}),Yl(1,X,()=>cv),v(F,X)};$(me,F=>{s(o)&&F(we)})}I(()=>{N(O,r().product.displayTotalNeeded),N(te,`${r().product.nbRecipes??""} `),N(le,`${r().product.totalAssiettes??""} `)}),v(_,w)};$(g,_=>{r().product&&_(p)})}v(t,m),Z()}Ye(["click"]);var Pv=y('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),$v=y('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),kv=y('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Ev=y('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Av(t,e){J(e,!0);const r=G(()=>e.modalState.recipes);var a=Ev(),n=C(a);xv(n,{get modalState(){return e.modalState},get isArchiveMode(){return e.isArchiveMode}});var i=u(n,2),o=c(i),l=c(o);La(l,{class:"h-5 w-5"});var d=u(o,2);{var f=m=>{var g=Pv(),p=c(g);Ba(p,{class:"mx-auto mb-2 h-12 w-12"}),v(m,g)},h=m=>{var g=kv(),p=c(g),_=u(c(p));st(_,21,()=>s(r),Sr,(w,P)=>{var S=$v(),D=c(S),A=c(D),E=u(D),k=c(E),T=u(E),O=c(T);I(x=>{N(A,`${s(P).r??""} (${(s(P).a||"-")??""} c.)`),N(k,`${(s(P).q||s(P).qEq)??""} ${(s(P).u||s(P).uEq)??""}`),N(O,x)},[()=>Ua(s(P).date)]),v(w,S)}),v(m,g)};$(d,m=>{s(r).length===0?m(f):m(h,!1)})}v(t,a),Z()}function Tv(t,e,r){s(e)?.saveAllChanges().then(()=>{s(e)?.resetForms(),r.onClose()})}function kn(t,e,r){s(e)?.resetForms(),r.onClose()}var Dv=y('<div class="alert alert-warning py-0.5"><!> <span class="font-medium">Mode consultation</span> <span>Événement terminé</span></div>'),Mv=y('<div class="text-xl font-bold"> </div> <!> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Nv=y('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Cv=(t,e)=>e("recettes"),Iv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Rv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Ov=(t,e)=>e("magasins"),qv=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),jv=(t,e)=>e("volontaires"),Lv=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Bv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),zv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Uv=(t,e)=>e("stock"),Hv=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Wv=y('<span class="badge badge-sm badge-secondary ml-1">1</span>'),Qv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Gv=(t,e)=>e("achats"),Vv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Fv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Kv=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Yv=y('<span class="loading loading-spinner loading-sm"></span>'),Jv=y('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),Zv=y('<div id="product_modal"><div class="modal-box fixed top-0 flex h-lvh w-lvw flex-col overflow-auto md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Xv(t,e){J(e,!0);let r=pe(e,"initialTab",3,"recettes"),a=L(null);Jt(()=>{b(a,new pd(e.productId,r()),!0)});let n=G(()=>K.isEventPassed);function i(P){s(a)?.setCurrentTab(P)}var o=Zv(),l=c(o),d=c(l),f=c(d);{var h=P=>{var S=Mv(),D=C(S),A=c(D),E=u(D,2);{var k=V=>{var z=Dv(),le=c(z);Zo(le,{class:"h-4 w-4"}),v(V,z)};$(E,V=>{s(a)&&s(n)&&V(k)})}var T=u(E,2),O=c(T),x=c(O),W=u(O,2),te=u(c(W));I(()=>{N(A,s(a).product?.productName),N(x,s(a).product?.productType),N(te,` ${s(a).product?.displayTotalNeeded??""}`)}),v(P,S)},m=P=>{var S=Nv();v(P,S)};$(f,P=>{s(a)&&s(a).product?P(h):P(m,!1)})}var g=u(f,2);g.__click=[kn,a,e];var p=c(g);It(p,{class:"h-4 w-4"});var _=u(d,2);{var w=P=>{var S=Jv(),D=C(S),A=c(D);A.__click=[Cv,i];var E=c(A);La(E,{class:"mr-1 h-5 w-5"});var k=u(E,2);{var T=H=>{var be=Iv(),We=c(be);I(()=>N(We,s(a).product?.nbRecipes)),v(H,be)},O=H=>{var be=Rv();v(H,be)};$(k,H=>{s(a).product?.nbRecipes&&s(a).product?.nbRecipes>0?H(T):H(O,!1)})}var x=u(A,2);x.__click=[Ov,i];var W=c(x);gr(W,{class:"mr-1 h-5 w-5"});var te=u(W,2);{var V=H=>{var be=qv();v(H,be)};$(te,H=>{s(a).hasChanges?.store&&H(V)})}var z=u(x,2);z.__click=[jv,i];var le=c(z);_a(le,{class:"mr-1 h-5 w-5"});var ge=u(le,2);{var Pe=H=>{var be=Lv();v(H,be)},U=H=>{var be=Y(),We=C(be);{var Ue=Ie=>{var et=Bv(),Bt=c(et);I(()=>N(Bt,s(a).product?.who.length)),v(Ie,et)},Je=Ie=>{var et=zv();v(Ie,et)};$(We,Ie=>{s(a).product?.who&&s(a).product?.who.length>0?Ie(Ue):Ie(Je,!1)},!0)}v(H,be)};$(ge,H=>{s(a).hasChanges?.who?H(Pe):H(U,!1)})}var ce=u(z,2);ce.__click=[Uv,i];var ye=c(ce);Fo(ye,{class:"mr-1 h-5 w-5"});var se=u(ye,2);{var re=H=>{var be=Hv();v(H,be)},me=H=>{var be=Y(),We=C(be);{var Ue=Ie=>{var et=Wv();v(Ie,et)},Je=Ie=>{var et=Qv();v(Ie,et)};$(We,Ie=>{s(a).stockParsed?Ie(Ue):Ie(Je,!1)},!0)}v(H,be)};$(se,H=>{s(a).hasChanges?.stock?H(re):H(me,!1)})}var we=u(ce,2);we.__click=[Gv,i];var F=c(we);yr(F,{class:"mr-1 h-5 w-5"});var X=u(F,2);{var M=H=>{var be=Vv(),We=c(be);I(()=>N(We,s(a).purchasesList.length)),v(H,be)},ae=H=>{var be=Fv();v(H,be)};$(X,H=>{s(a).purchasesList.length>0?H(M):H(ae,!1)})}var R=u(D,2),ie=c(R);{var j=H=>{var be=Kv(),We=c(be);It(We,{class:"h-4 w-4"});var Ue=u(We,2),Je=c(Ue);I(()=>N(Je,`erreur : ${s(a).error??""}`)),v(H,be)};$(ie,H=>{s(a).error&&H(j)})}var ee=u(ie,2),de=c(ee);Il(de,()=>s(a).currentTab,H=>{var be=Y(),We=C(be);{var Ue=Ie=>{Av(Ie,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},Je=Ie=>{var et=Y(),Bt=C(et);{var Ee=Be=>{Ld(Be,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},De=Be=>{var Ae=Y(),Xe=C(Ae);{var dt=nt=>{Yd(nt,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},lt=nt=>{var gt=Y(),$t=C(gt);{var kt=vt=>{tv(vt,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},zt=vt=>{var Rt=Y(),ur=C(Rt);{var ue=he=>{nv(he,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})};$(ur,he=>{s(a).currentTab==="magasins"&&he(ue)},!0)}v(vt,Rt)};$($t,vt=>{s(a).currentTab==="volontaires"?vt(kt):vt(zt,!1)},!0)}v(nt,gt)};$(Xe,nt=>{s(a).currentTab==="stock"?nt(dt):nt(lt,!1)},!0)}v(Be,Ae)};$(Bt,Be=>{s(a).currentTab==="achats"?Be(Ee):Be(De,!1)},!0)}v(Ie,et)};$(We,Ie=>{s(a).currentTab==="recettes"?Ie(Ue):Ie(Je,!1)})}v(H,be)});var $e=u(R,2),B=c($e);B.__click=[kn,a,e];var Q=c(B),ne=u(B,2);ne.__click=[Tv,a,e];var ke=c(ne);{var ve=H=>{var be=Yv();v(H,be)},Oe=H=>{var be=bt("Tout enregistrer");v(H,be)};$(ke,H=>{s(a).loading?H(ve):H(Oe,!1)})}I(()=>{Me(A,1,`tab ${s(a).currentTab==="recettes"?"tab-active":""}`),Me(x,1,`tab ${s(a).currentTab==="magasins"?"tab-active":""}`),Me(z,1,`tab ${s(a).currentTab==="volontaires"?"tab-active":""}`),Me(ce,1,`tab ${s(a).currentTab==="stock"?"tab-active":""}`),Me(we,1,`tab ${s(a).currentTab==="achats"?"tab-active":""}`),N(Q,s(a)?.hasAnyChanges?"Annuler":"Fermer"),ne.disabled=s(a).loading||!s(a).hasAnyChanges}),v(P,S)};$(_,P=>{s(a)&&P(w)})}I(()=>Me(o,1,`modal ${(e.productId&&"modal-open")??""}`)),v(t,o),Z()}Ye(["click"]);var ef=(t,e,r)=>e(r),tf=y("<button><span> </span> <!></button>"),rf=y('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),af=(t,e)=>e.dateStore.selectUpcoming(),sf=y('<button class="btn btn-xs btn-link text-primary/80" type="button">Dates à venir</button>'),nf=(t,e)=>e.dateStore.selectAll(),of=y('<button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button>'),lf=y('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),cf=y('<div class="flex flex-wrap justify-end gap-2"><!> <!></div>'),uf=y('<div class="flex flex-wrap gap-1"></div> <!>',1);function df(t,e){J(e,!0);let r=G(()=>e.dateStore.start),a=G(()=>e.dateStore.end),n=L(null);function i(p){s(r)===p&&s(a)===p?e.dateStore.selectAll():s(r)&&new Date(p)<new Date(s(r))?e.dateStore.setRange(p,s(a)):s(a)&&new Date(p)>new Date(s(a))?e.dateStore.setRange(s(r),p):e.dateStore.setRange(p,p)}function o(p){return!s(r)||!s(a)?{start:null,end:null}:s(r)===p&&s(a)===p?{start:e.dateStore.firstAvailableDate,end:e.dateStore.lastAvailableDate}:s(r)&&new Date(p)<new Date(s(r))?{start:p,end:s(a)}:s(a)&&new Date(p)>new Date(s(a))?{start:s(r),end:p}:{start:p,end:p}}function l(p){let _="";if(!s(r)||!s(a))return;const w=new Date(p)>=new Date(s(r))&&new Date(p)<=new Date(s(a)),P=e.dateStore.start&&new Date(p)<=new Date;let S=!1;if(s(n)){const D=o(s(n));D.start&&D.end&&(S=new Date(p)>=new Date(D.start)&&new Date(p)<=new Date(D.end))}return P&&(_+=" opacity-70 italic"),w||(_+=" btn-dash"),S&&!w&&(_+=" btn-soft"),_}var d=uf(),f=C(d);st(f,20,()=>e.dateStore.dates,p=>p,(p,_)=>{var w=tf();w.__click=[ef,i,_];var P=c(w),S=c(P),D=u(P,2);{var A=k=>{ai(k,{size:16})},E=k=>{var T=Y(),O=C(T);{var x=te=>{ti(te,{size:16})},W=te=>{var V=Y(),z=C(V);{var le=ge=>{su(ge,{size:16})};$(z,ge=>{Ja(_)==="cloud"&&ge(le)},!0)}v(te,V)};$(O,te=>{Ja(_)==="moon"?te(x):te(W,!1)},!0)}v(k,T)};$(D,k=>{Ja(_)==="sun"?k(A):k(E,!1)})}I((k,T)=>{Me(w,1,`btn btn-sm btn-secondary ${k??""}`),N(S,T)},[()=>l(_),()=>Oc(_)]),Cr("mouseenter",w,()=>b(n,_,!0)),Cr("mouseleave",w,()=>b(n,null)),v(p,w)});var h=u(f,2);{var m=p=>{var _=rf();v(p,_)},g=p=>{var _=cf(),w=c(_);{var P=E=>{var k=sf();k.__click=[af,e],v(E,k)};$(w,E=>{e.dateStore.hasUpcomingDates&&!e.dateStore.isUpcomingRange&&E(P)})}var S=u(w,2);{var D=E=>{var k=of();k.__click=[nf,e],v(E,k)},A=E=>{var k=lf();v(E,k)};$(S,E=>{e.dateStore.isFullRange?E(A,!1):E(D)})}v(p,_)};$(h,p=>{e.dateStore.isEventPassed?p(m):p(g,!1)})}v(t,d),Z()}Ye(["click"]);var vf=y("<fieldset><legend><!> </legend> <!></fieldset>");function pa(t,e){let r=pe(e,"bgClass",3,"bg-base-100");var a=vf(),n=c(a),i=c(n);{var o=f=>{const h=G(()=>e.iconComponent);var m=Y(),g=C(m);br(g,()=>s(h),(p,_)=>{_(p,{size:16,class:"mr-1"})}),v(f,m)};$(i,f=>{e.iconComponent&&f(o)})}var l=u(i),d=u(n,2);fe(d,()=>e.children??oe),I(()=>{Me(a,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Me(n,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),N(l,` ${e.legend??""}`)}),v(t,a)}var ff=()=>K.clearFilters(),hf=t=>K.setSearchQuery(t.currentTarget.value),pf=()=>K.setSearchQuery(""),gf=()=>K.setGroupBy("none"),mf=()=>K.setGroupBy("store"),_f=()=>K.setGroupBy("productType"),bf=y(`<div class="alert alert-warning">Cette période contient des dates passées. Les achats ne sont plus
          possibles pour ces dates.</div>`),yf=y("<!> <!>",1),wf=(t,e)=>K.toggleProductType(e),Sf=y("<button><!> </button>"),xf=()=>K.toggleTemperature("frais"),Pf=()=>K.toggleTemperature("surgele"),$f=()=>K.clearTypeAndTemperatureFilters(),kf=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),Ef=y('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),Af=y('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button title="Filtrer les légumes ou produits à conserver au frais"><!> Frais</button> <button title="Filtrer les roduits à concerver au congélateur"><!> Surgelés</button></div> <!>',1),Tf=(t,e)=>K.toggleStore(e),Df=y("<button> </button>"),Mf=()=>K.clearStoreFilters(),Nf=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),Cf=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),If=(t,e)=>K.toggleWho(e),Rf=y("<button> </button>"),Of=()=>K.clearWhoFilters(),qf=y('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),jf=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Lf=y('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function Bf(t,e){J(e,!0);const r=G(()=>K.filters),a=G(()=>K.uniqueStores),n=G(()=>K.uniqueWho),i=G(()=>K.uniqueProductTypes);var o=Lf(),l=C(o),d=c(l),f=c(d);Jo(f,{class:"h-5 w-5"});var h=u(d,2);h.__click=[ff];var m=c(h);ha(m,{class:"h-4 w-4"});var g=u(l,2),p=c(g),_=u(c(p),2),w=c(_);Su(w,{class:"h-4 w-4"});var P=u(w,2);P.__input=[hf];var S=u(P,2);S.__click=[pf];var D=c(S);It(D,{class:"h-4 w-4"});var A=u(p,2),E=u(c(A),2),k=c(E);k.__change=[gf];var T=u(k,2);T.__change=[mf];var O=u(T,2);O.__change=[_f];var x=u(A,2);{var W=U=>{pa(U,{legend:"Date incluses",bgClass:"bg-base-100",children:(ce,ye)=>{var se=yf(),re=C(se);df(re,{get dateStore(){return K.dateStore}});var me=u(re,2);{var we=F=>{var X=bf();v(F,X)};$(me,F=>{K.hasPastDatesInRange&&F(we)})}v(ce,se)},$$slots:{default:!0}})};$(x,U=>{K.hasSingleDateEvent||U(W)})}var te=u(x,2);{var V=U=>{pa(U,{legend:"Types & Température",get iconComponent(){return si},children:(ce,ye)=>{var se=Af(),re=C(se);st(re,20,()=>s(i),j=>j,(j,ee)=>{const de=G(()=>ds(ee));var $e=Sf();$e.__click=[wf,ee];var B=c($e);br(B,()=>s(de).icon,(ne,ke)=>{ke(ne,{class:"mr-1 h-5 w-5"})});var Q=u(B);I(ne=>{Me($e,1,`btn btn-sm ${ne??""}`),N(Q,` ${s(de).displayName??""}`)},[()=>s(r).selectedProductTypes.length===0?"btn-soft btn-secondary":s(r).selectedProductTypes.includes(ee)?"btn-secondary":"btn-dash btn-secondary"]),v(j,$e)});var me=u(re,2),we=c(me);we.__click=[xf];var F=c(we);ri(F,{class:"h-5 w-5"});var X=u(we,2);X.__click=[Pf];var M=c(X);Ns(M,{class:"h-5 w-5"});var ae=u(me,2);{var R=j=>{var ee=kf();ee.__click=[$f];var de=c(ee);ha(de,{size:16}),v(j,ee)},ie=j=>{var ee=Ef();v(j,ee)};$(ae,j=>{s(r).selectedProductTypes.length>0||s(r).selectedTemperatures.length>0?j(R):j(ie,!1)})}I((j,ee)=>{Me(we,1,`btn btn-sm ${j??""}`),Me(X,1,`btn btn-sm ${ee??""}`)},[()=>s(r).selectedTemperatures.length===0?"btn-soft btn-success":s(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(r).selectedTemperatures.length===0?"btn-soft btn-info":s(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),v(ce,se)},$$slots:{default:!0}})};$(te,U=>{s(i).length>0&&U(V)})}var z=u(te,2);{var le=U=>{pa(U,{legend:"Magasins",get iconComponent(){return gr},children:(ce,ye)=>{var se=Cf(),re=c(se);st(re,16,()=>s(a),F=>F,(F,X)=>{var M=Df();M.__click=[Tf,X];var ae=c(M);I(R=>{Me(M,1,`btn btn-sm ${R??""}`),N(ae,X)},[()=>s(r).selectedStores.length===0?"btn-soft btn-secondary":s(r).selectedStores.includes(X)?"btn-secondary":"btn-dash btn-secondary"]),v(F,M)});var me=u(re,2);{var we=F=>{var X=Nf();X.__click=[Mf];var M=c(X);ha(M,{size:16}),v(F,X)};$(me,F=>{s(r).selectedStores.length>0&&F(we)})}v(ce,se)},$$slots:{default:!0}})};$(z,U=>{s(a).length>0&&U(le)})}var ge=u(z,2);{var Pe=U=>{pa(U,{legend:"Qui",get iconComponent(){return Cs},children:(ce,ye)=>{var se=jf(),re=c(se);st(re,16,()=>s(n),F=>F,(F,X)=>{var M=Rf();M.__click=[If,X];var ae=c(M);I(R=>{Me(M,1,`btn btn-sm ${R??""}`),N(ae,X)},[()=>s(r).selectedWho.length===0?" btn-soft btn-secondary":s(r).selectedWho.includes(X)?" btn-secondary":"btn-dash btn-secondary"]),v(F,M)});var me=u(re,2);{var we=F=>{var X=qf();X.__click=[Of];var M=c(X);ha(M,{size:16}),v(F,X)};$(me,F=>{s(r).selectedWho.length>0&&F(we)})}v(ce,se)},$$slots:{default:!0}})};$(ge,U=>{s(n).length>0&&U(Pe)})}I(()=>{h.disabled=!K.hasFilters,Hl(P,s(r).searchQuery),S.disabled=!s(r).searchQuery,Fa(k,s(r).groupBy==="none"),Fa(T,s(r).groupBy==="store"),Fa(O,s(r).groupBy==="productType")}),v(t,o),Z()}Ye(["click","input","change"]);var zf=y('<div class="tooltip text-xs font-normal"><!></div>');function Uf(t,e){let r=pe(e,"iconSize",3,24),a=e.icon||void 0;var n=zf(),i=c(n);{var o=l=>{a(l,{get size(){return r()},class:`align-top
`})};$(i,l=>{e.icon&&l(o)})}I(()=>nr(n,"data-tip",e.tip)),v(t,n)}var Hf=y('<div class="text-primary-content flex items-center gap-2"><!> </div>'),Wf=y('<div class="text-primary-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Qf=y('<div class="font-semibold">Sur toute la période</div>'),Gf=y('du <span class="font-semibold"> </span> au <span class="font-semibold"> </span>',1),Vf=y('le <span class="font-semibold"> </span>',1),Ff=(t,e,r)=>e.onOpenGroupEditModal("store",s(r).map(a=>a.data.$id),s(r).map(a=>a.data)),Kf=(t,e,r)=>e.onOpenGroupEditModal("who",s(r).map(a=>a.data.$id),s(r).map(a=>a.data)),Yf=(t,e,r)=>e.onOpenGroupPurchaseModal(s(r).map(a=>a.data)),Jf=y(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),Zf=y('<div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div>'),Xf=y('<div class="flex flex-wrap items-center justify-end gap-2"><div class="alert px-4 py-1" title="Contient des dates passées - actions non disponibles"><!> <span class="hidden @md:block">Période partiellement passée</span></div></div>'),eh=y('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 font-semibold @md:min-w-48"><!></div> <div class="text-primary-content"><!></div> <!></div>'),th=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),rh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),ah=y('<div class="text-base-content/60 text-sm font-normal"> </div>'),sh=y('<div class="tooltip" data-tip="Ajouté manuellement, ne fait pas partie des recette"><!></div>'),nh=y('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),oh=y('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),ih=y('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),lh=y('<div class="tooltip"><div class="badge badge-outline badge-sm hover:badge-primary"> </div></div>'),ch=y('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),uh=y('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),dh=(t,e,r)=>e.onOpenModal(s(r).$id,"magasins"),vh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"magasins"),fh=y('<div class="ml-1"><!></div>'),hh=y('<div class="ml-1"> </div> <!>',1),ph=y('<div class="ml-1 text-sm font-medium">?</div>'),gh=(t,e,r)=>e.onOpenModal(s(r).$id,"volontaires"),mh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"volontaires"),_h=y('<span class="text-base-content/50 text-xs"> </span>'),bh=y('<div class="ml-1 flex gap-1"> <!></div>'),yh=y('<div class="ml-1 text-sm font-medium">?</div>'),wh=y('<div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div>'),Sh=y('<div class="mx-4 flex gap-2 opacity-60"><button class="btn btn-ghost btn-xs" title="Période partiellement passée - cliquez pour voir les options"><!></button></div>'),xh=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),Ph=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),$h=y('<div class="mx-4 flex gap-2 opacity-60"><!> <!></div>'),kh=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),Eh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),Ah=y('<div class="tooltip flex items-center gap-2" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),Th=y("<span> </span>"),Dh=y('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),Mh=(t,e,r,a)=>{t.stopPropagation(),e.onQuickValidation(s(r),s(a))},Nh=y('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><div class="cart-icon"></div> <span class="text-xs"> </span> <!></button>'),Ch=y('<button class="btn btn-sm btn-disabled ms-auto opacity-50" title="Contient des dates passées - achats non disponibles" disabled><!></button>'),Ih=y(`<div id="override_alert" class="alert alert-warning alert-soft mt-1 px-1 py-0.5"><!> <span>Les quantités des menus ont été modifiées depuis
                      l'attribution manuelle des "besoins"</span></div>`),Rh=(t,e,r)=>e.onOpenModal(s(r).$id,"achats"),Oh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"achats"),qh=y('<span class="text-xs opacity-75"> </span>'),jh=y('<div><div class="flex items-center gap-1"><!> <span class="text-sm font-medium text-nowrap"> </span></div> <!></div>'),Lh=y('<span class="text-base-content/50 text-xs italic">aucun</span>'),Bh=y('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <!></div> <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex flex-wrap gap-x-4 gap-y-0"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="ms-auto flex items-center gap-4 self-end"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap items-start gap-0 self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div>ajouter un achat</div></div> <div class="flex flex-wrap justify-end gap-1.5"><!> <!></div></div></div></div></div>'),zh=y('<!> <div class="space-y-1"></div>',1),Uh=y('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Hh=y('<div class="space-y-4 rounded-lg"></div> <!>',1);function Wh(t,e){J(e,!0);const r={Package:Ba,MessageCircleQuestionMark:hu,ShoppingCart:yr,Clock:Za,CircleCheck:ru,CircleX:Sn,ClipboardCheck:au,PackageCheck:pu,Check:Lr},a=G(()=>K.groupedFilteredProducts),n=G(()=>K.filters),i=G(()=>fr(K.dateStore.start)),o=G(()=>fr(K.dateStore.end)),l=G(()=>!K.dateStore.isEventPassed&&!K.dateStore.hasPastDatesInRange);var d=Hh(),f=C(d);st(f,21,()=>Object.entries(s(a)),([g,p])=>g,(g,p)=>{var _=G(()=>ba(s(p),2));let w=()=>s(_)[0];const S=G(()=>s(_)[1]);var D=zh(),A=C(D);{var E=T=>{const O=G(()=>ds(w()));var x=eh(),W=c(x),te=c(W);{var V=re=>{var me=Hf(),we=c(me);gr(we,{size:20});var F=u(we);I(()=>N(F,` ${w()??""} (${s(S).length??""})`)),v(re,me)},z=re=>{var me=Y(),we=C(me);{var F=M=>{var ae=Wf(),R=c(ae);br(R,()=>s(O).icon,($e,B)=>{B($e,{size:20})});var ie=u(R,2),j=c(ie),ee=u(ie,2),de=c(ee);I(()=>{N(j,s(O).displayName),N(de,`(${s(S).length??""})`)}),v(M,ae)},X=M=>{var ae=bt();I(()=>N(ae,`📦 ${w()??""} (${s(S).length??""})`)),v(M,ae)};$(we,M=>{s(n).groupBy==="productType"?M(F):M(X,!1)},!0)}v(re,me)};$(te,re=>{s(n).groupBy==="store"?re(V):re(z,!1)})}var le=u(W,2),ge=c(le);{var Pe=re=>{var me=Qf();v(re,me)},U=re=>{var me=Y(),we=C(me);{var F=M=>{var ae=Gf(),R=u(C(ae)),ie=c(R),j=u(R,2),ee=c(j);I(()=>{N(ie,s(i)),N(ee,s(o))}),v(M,ae)},X=M=>{var ae=Vf(),R=u(C(ae)),ie=c(R);I(()=>N(ie,s(i))),v(M,ae)};$(we,M=>{K.dateStore.start!==K.dateStore.end?M(F):M(X,!1)},!0)}v(re,me)};$(ge,re=>{K.dateStore.isFullRange?re(Pe):re(U,!1)})}var ce=u(le,2);{var ye=re=>{var me=Zf(),we=c(me);we.__click=[Ff,e,S];var F=c(we);gr(F,{size:16});var X=u(F,4);ea(X,{size:16});var M=u(we,2);M.__click=[Kf,e,S];var ae=c(M);_a(ae,{size:16});var R=u(ae,4);ea(R,{size:16});var ie=u(M,2);{var j=ee=>{var de=Jf();de.__click=[Yf,e,S];var $e=c(de);yr($e,{size:16});var B=u($e,4);wn(B,{size:16}),v(ee,de)};$(ie,ee=>{s(S).some(de=>de.data.displayMissingQuantity!=="✅ Complet")&&ee(j)})}v(re,me)},se=re=>{var me=Y(),we=C(me);{var F=X=>{var M=Xf(),ae=c(M),R=c(ae);Za(R,{size:16}),v(X,M)};$(we,X=>{K.dateStore.hasPastDatesInRange&&X(F)},!0)}v(re,me)};$(ce,re=>{s(l)?re(ye):re(se,!1)})}v(T,x)};$(A,T=>{w()!==""&&T(E)})}var k=u(A,2);st(k,21,()=>s(S),T=>T.data.$id,(T,O)=>{const x=G(()=>s(O).data),W=G(()=>s(O).stats),te=G(()=>ds(s(x).productType)),V=G(()=>fd(s(x).purchases||[])),z=G(()=>s(x).totalNeededOverrideParsed);var le=Bh(),ge=c(le),Pe=c(ge),U=c(Pe);U.__click=[th,e,x],U.__keydown=[rh,e,x];var ce=c(U),ye=c(ce);br(ye,()=>s(te).icon,(ue,he)=>{he(ue,{class:"text-base-content/80 h-4 w-4"})});var se=u(ye),re=u(se);{var me=ue=>{var he=ah(),Ne=c(he);I(()=>N(Ne,`Ancien: ${s(x).previousNames[0]??""}`)),v(ue,he)};$(re,ue=>{s(x).previousNames&&s(x).previousNames.length>0&&ue(me)})}var we=u(re,2);{var F=ue=>{var he=sh(),Ne=c(he);xn(Ne,{class:"text-warning h-4 w-4"}),v(ue,he)};$(we,ue=>{s(x).productHugoUuid||ue(F)})}var X=u(ce,2),M=c(X);{var ae=ue=>{var he=nh(),Ne=c(he);ri(Ne,{class:"text-success h-4 w-4"}),v(ue,he)};$(M,ue=>{s(x).pFrais&&ue(ae)})}var R=u(M,2);{var ie=ue=>{var he=oh(),Ne=c(he);Ns(Ne,{class:"text-info h-4 w-4"}),v(ue,he)};$(R,ue=>{s(x).pSurgel&&ue(ie)})}var j=u(X,2);{var ee=ue=>{var he=ih(),Ne=c(he);Xo(Ne,{class:"h-4 w-4 animate-spin"}),v(ue,he)};$(j,ue=>{s(x).status==="isSyncing"&&ue(ee)})}var de=u(j,2);{var $e=ue=>{var he=uh(),Ne=c(he);st(Ne,20,()=>s(W).concernedDates,Te=>Te,(Te,Le)=>{const qe=G(()=>s(W).recipesByDate.get(Le)||[]);var Ge=Y(),ze=C(Ge);{var mt=tt=>{var Fe=lh(),Ve=c(Fe),rt=c(Ve);I((St,dr)=>{nr(Fe,"data-tip",St),N(rt,dr)},[()=>s(qe).map(St=>St.r).join(", "),()=>new Date(Le).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),v(tt,Fe)},ft=tt=>{var Fe=ch(),Ve=c(Fe);I(rt=>N(Ve,rt),[()=>new Date(Le).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),v(tt,Fe)};$(ze,tt=>{s(qe).length>0?tt(mt):tt(ft,!1)})}v(Te,Ge)}),v(ue,he)};$(de,ue=>{s(W).concernedDates.length>0&&ue($e)})}var B=u(U,2);{var Q=ue=>{var he=wh(),Ne=c(he);Ne.__click=[dh,e,x],Ne.__keydown=[vh,e,x];var Te=c(Ne);gr(Te,{size:18});var Le=u(Te,2);{var qe=Ve=>{var rt=hh(),St=C(rt),dr=c(St),Wa=u(St,2);{var Ut=Ar=>{var ca=fh(),ui=c(ca);Uf(ui,{get tip(){return s(x).storeInfo.storeComment},get icon(){return fu},iconSize:14}),v(Ar,ca)};$(Wa,Ar=>{s(x).storeInfo?.storeComment&&Ar(Ut)})}I(()=>N(dr,s(x).storeInfo.storeName)),v(Ve,rt)},Ge=Ve=>{var rt=ph();v(Ve,rt)};$(Le,Ve=>{s(x).storeInfo?.storeName?Ve(qe):Ve(Ge,!1)})}var ze=u(Ne,2);ze.__click=[gh,e,x],ze.__keydown=[mh,e,x];var mt=c(ze);_a(mt,{size:18});var ft=u(mt,2);{var tt=Ve=>{var rt=bh(),St=c(rt),dr=u(St);{var Wa=Ut=>{var Ar=_h(),ca=c(Ar);I(()=>N(ca,`+${s(x).who.length-2}`)),v(Ut,Ar)};$(dr,Ut=>{s(x).who.length>2&&Ut(Wa)})}I(Ut=>N(St,`${Ut??""} `),[()=>s(x).who.slice(0,2).map(Ut=>Ut.slice(0,3)).join(" | ")]),v(Ve,rt)},Fe=Ve=>{var rt=yh();v(Ve,rt)};$(ft,Ve=>{s(x).who&&s(x).who.length>0?Ve(tt):Ve(Fe,!1)})}I(()=>{Me(Ne,1,`btn btn-soft btn-sm group relative ${s(x).storeInfo?.storeName?"btn-success":""}`),Me(ze,1,`btn btn-sm btn-soft group relative ${s(x).who&&s(x).who?.length>0?"btn-success":""}`)}),v(ue,he)},ne=ue=>{var he=Y(),Ne=C(he);{var Te=qe=>{var Ge=Sh(),ze=c(Ge),mt=c(ze);Za(mt,{size:16}),v(qe,Ge)},Le=qe=>{var Ge=$h(),ze=c(Ge);{var mt=Fe=>{var Ve=xh(),rt=c(Ve);gr(rt,{size:16});var St=u(rt);I(()=>N(St,` ${s(x).storeInfo.storeName??""}`)),v(Fe,Ve)};$(ze,Fe=>{s(x).storeInfo?.storeName&&Fe(mt)})}var ft=u(ze,2);{var tt=Fe=>{var Ve=Ph(),rt=c(Ve);_a(rt,{size:16});var St=u(rt);I(dr=>N(St,` ${dr??""}`),[()=>s(x).who.join(", ")]),v(Fe,Ve)};$(ft,Fe=>{s(x).who&&s(x).who.length>0&&Fe(tt)})}v(qe,Ge)};$(Ne,qe=>{K.dateStore.hasPastDatesInRange?qe(Te):qe(Le,!1)},!0)}v(ue,he)};$(B,ue=>{s(l)?ue(Q):ue(ne,!1)})}var ke=u(Pe,2),ve=c(ke);ve.__click=[kh,e,x],ve.__keydown=[Eh,e,x];var Oe=c(ve),H=c(Oe),be=c(H);uu(be,{class:"h-4 w-4"});var We=u(H,2),Ue=c(We),Je=c(Ue);{var Ie=ue=>{var he=Ah(),Ne=c(he),Te=c(Ne),Le=u(Ne,2);xn(Le,{class:"h-4 w-4"});var qe=u(Le);I(()=>{N(Te,s(W).formattedQuantities),N(qe,` ${s(z).totalOverride.q??""}
                          ${s(z).totalOverride.u??""}`)}),v(ue,he)},et=ue=>{var he=Th(),Ne=c(he);I(()=>N(Ne,s(W).formattedQuantities)),v(ue,he)};$(Je,ue=>{s(z)?.totalOverride?ue(Ie):ue(et,!1)})}var Bt=u(Ue,2);{var Ee=ue=>{var he=Dh(),Ne=c(he),Te=c(Ne),Le=u(Te);La(Le,{class:"h-3 w-3"});var qe=u(Ne,2),Ge=c(qe),ze=u(Ge);oi(ze,{class:"h-3 w-3"}),I(()=>{N(Te,`${s(W).nbRecipes??""} `),N(Ge,`${s(W).totalAssiettes??""} `)}),v(ue,he)};$(Bt,ue=>{(s(W).nbRecipes||s(W).totalAssiettes)&&ue(Ee)})}var De=u(Oe,2);{var Be=ue=>{var he=Nh();he.__click=[Mh,e,x,W];var Ne=u(c(he),2),Te=c(Ne),Le=u(Ne,2);{var qe=ze=>{eu(ze,{size:18})},Ge=ze=>{tu(ze,{size:18})};$(Le,ze=>{Dt.isMobile?ze(qe):ze(Ge,!1)})}I(()=>{nr(he,"title",`Acheter le manquant (${s(W).formattedMissingQuantities??""})`),N(Te,s(W).formattedMissingQuantities)}),v(ue,he)},Ae=ue=>{var he=Y(),Ne=C(he);{var Te=qe=>{var Ge=Ch(),ze=c(Ge);Sn(ze,{size:24}),v(qe,Ge)},Le=qe=>{var Ge=Y(),ze=C(Ge);{var mt=ft=>{wn(ft,{size:24,class:"text-success ms-auto"})};$(ze,ft=>{s(l)&&ft(mt)},!0)}v(qe,Ge)};$(Ne,qe=>{K.dateStore.hasPastDatesInRange&&s(W).hasMissing?qe(Te):qe(Le,!1)},!0)}v(ue,he)};$(De,ue=>{s(l)&&s(W).hasMissing?ue(Be):ue(Ae,!1)})}var Xe=u(De,2);{var dt=ue=>{var he=Ih(),Ne=c(he);Xc(Ne,{size:18}),v(ue,he)};$(Xe,ue=>{s(l)&&s(z)?.hasUnresolvedChangedSinceOverride&&ue(dt)})}var lt=u(ve,2);lt.__click=[Rh,e,x],lt.__keydown=[Oh,e,x];var nt=c(lt),gt=c(nt),$t=c(gt);yr($t,{class:"h-4 w-4"});var kt=u(gt,2),zt=u(nt,2),vt=c(zt);st(vt,17,()=>s(V),Sr,(ue,he)=>{const Ne=G(()=>r[s(he).icon]);var Te=jh(),Le=c(Te),qe=c(Le);br(qe,()=>s(Ne),(tt,Fe)=>{Fe(tt,{class:"h-4 w-4"})});var Ge=u(qe,2),ze=c(Ge),mt=u(Le,2);{var ft=tt=>{var Fe=qh(),Ve=c(Fe);I(()=>N(Ve,`livré le: ${s(he).deliveryDate??""}`)),v(tt,Fe)};$(mt,tt=>{s(he).deliveryDate&&tt(ft)})}I(()=>{Me(Te,1,`badge badge-outline flex h-fit flex-col items-center gap-1 py-1 ${s(he).badgeClass??""}`),N(ze,`${s(he).quantity??""}
                          ${s(he).unit??""}`)}),v(ue,Te)});var Rt=u(vt,2);{var ur=ue=>{var he=Lh();v(ue,he)};$(Rt,ue=>{s(V).length===0&&ue(ur)})}I(()=>{Me(le,1,`card bg-base-100 border-base-300 ${s(x).status==="isSyncing"?"border-accent bg-accent/30 animate-pulse border-2":""}`),N(se,`${s(x).productName??""} `),Me(Ue,1,`text-base font-bold ${s(W).hasMissing&&s(l)?"text-error":"text-success"}`),Me(kt,1,`text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity ${s(l)?"group-hover:opacity-100":""} sm:opacity-0`)}),v(T,le)}),v(g,D)});var h=u(f,2);{var m=g=>{var p=Uh();v(g,p)};$(h,g=>{Object.values(s(a)).flat().length===0&&g(m)})}v(t,d),Z()}Ye(["click","keydown"]);function En(t,e,r){s(e)||r.onClose()}var Qh=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Gh=(t,e)=>b(e,"empty"),Vh=(t,e)=>b(e,"all"),Fh=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Kh=y("<!> ",1),Yh=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <div><!></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Jh(t,e){J(e,!0);let r=L(!1),a=L(null),n=L(null),i=L(je(e.products.length>0&&e.products[0].storeInfo?e.products[0].storeInfo.storeName:"")),o=L(je(e.products.length>0&&e.products[0].storeInfo&&e.products[0].storeInfo.storeComment||"")),l=L(je({})),d=L("empty");Jt(()=>{const M={};e.products.forEach(ae=>{e.productIds.includes(ae.$id)&&(s(d)==="empty"?M[ae.$id]=!ae.storeInfo||!ae.storeInfo.storeName:M[ae.$id]=!0)}),b(l,M,!0)});const f=G(()=>e.products.map(M=>({id:M.$id,label:M.productName,title:M.productName,selected:s(l)[M.$id]}))),h=G(()=>s(f).filter(M=>M.selected)),m=G(()=>`Attribuer un magasin (${s(h).length} produits sélectionnés)`),g=G(()=>s(h).length===0?!1:s(i).trim().length>0);async function p(){if(!s(g)||s(r))return;b(a,null),b(n,null);const M=s(h).map(R=>R.id),ae=e.products.filter(R=>M.includes(R.$id));K.setSyncStatus(M,!0),Dt.backgroundOperation={isRunning:!0,name:`Mise à jour magasin (${M.length} produits)`,progress:0},e.onClose();try{const R={storeName:s(i).trim(),storeComment:s(o).trim()},ie=await Uo(M,ae,R);if(ie.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${ie.updatedCount} produits modifiés`),Qe.success(`Magasin mis à jour pour ${ie.updatedCount} produits.`),e.onSuccess?.(ie);else throw new Error(ie.error||"Erreur lors de la mise à jour")}catch(R){const ie=R instanceof Error?R.message:"Erreur inconnue";console.error("[StoreEditModal] Erreur mise à jour:",R),Qe.error(`Erreur mise à jour magasin: ${ie}`),K.clearSyncStatus()}finally{b(r,!1),Dt.backgroundOperation={isRunning:!1,name:"",progress:0}}}function _(M){s(l)[M]=!s(l)[M]}var w=Yh(),P=c(w),S=c(P),D=c(S),A=c(D),E=u(D,2);E.__click=[En,r,e];var k=c(E);It(k,{class:"h-4 w-4"});var T=u(S,2),O=c(T);{var x=M=>{var ae=Qh(),R=c(ae);ia(R,{class:"h-4 w-4"});var ie=u(R,2),j=c(ie);I(()=>N(j,s(a))),v(M,ae)};$(O,M=>{s(a)&&M(x)})}var W=u(O,2),te=c(W),V=c(te);Wr(V,{get suggestions(){return K.uniqueStores},get disabled(){return s(r)},id:"store-name-input",get value(){return s(i)},set value(M){b(i,M,!0)}});var z=u(te,2),le=c(z);Qr(le,{get disabled(){return s(r)},id:"store-comment-textarea",get value(){return s(o)},set value(M){b(o,M,!0)}});var ge=u(W,2),Pe=u(c(ge),2),U=c(Pe);U.__click=[Gh,d];var ce=u(U,2);ce.__click=[Vh,d];var ye=u(Pe,2);ta(ye,{get items(){return s(f)},onToggleItem:_,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var se=u(T,2),re=c(se);re.__click=[En,r,e];var me=u(re,2);me.__click=p;var we=c(me);{var F=M=>{var ae=Fh();v(M,ae)},X=M=>{var ae=Kh(),R=C(ae);Lr(R,{class:"h-4 w-4"});var ie=u(R);I(()=>N(ie,` Appliquer à ${s(h).length??""} produit(s)`)),v(M,ae)};$(we,M=>{s(r)?M(F):M(X,!1)})}I(()=>{N(A,s(m)),E.disabled=s(r),Me(U,1,`tab ${s(d)==="empty"?"tab-active":""}`),Me(ce,1,`tab ${s(d)==="all"?"tab-active":""}`),re.disabled=s(r),me.disabled=s(r)||!s(g)}),v(t,w),Z()}Ye(["click"]);function An(t,e,r){s(e)||r.onClose()}var Zh=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Xh=(t,e)=>b(e,"empty"),ep=(t,e)=>b(e,"all"),tp=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),rp=y("<!> ",1),ap=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><div><!></div> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="text-base-content/70">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function sp(t,e){J(e,!0);let r=L(!1),a=L(null),n=L(null),i=L(je([])),o=L(""),l=L("empty"),d=L(je({}));Jt(()=>{const Q={};e.products.forEach(ne=>{e.productIds.includes(ne.$id)&&(s(l)==="empty"?Q[ne.$id]=!ne.who||ne.who.length===0:Q[ne.$id]=!0)}),b(d,Q,!0)});const f=G(()=>e.products.map(Q=>({id:Q.$id,label:Q.productName,title:Q.productName,selected:s(d)[Q.$id]}))),h=G(()=>s(f).filter(Q=>Q.selected)),m=G(()=>{const Q=new Set([...K.uniqueWho,...s(i)]);return Array.from(Q).map(ne=>({id:ne,label:ne,selected:s(i).includes(ne)}))}),g=G(()=>`Gérer les volontaires (${s(h).length} produits sélectionnés)`),p=G(()=>s(h).length===0?!1:s(i).length>0);async function _(){if(!s(p)||s(r))return;b(a,null),b(n,null);const Q=s(h).map(ke=>ke.id),ne=e.products.filter(ke=>Q.includes(ke.$id));K.setSyncStatus(Q,!0),Dt.backgroundOperation={isRunning:!0,name:`Mise à jour volontaires (${Q.length} produits)`,progress:0},e.onClose();try{const ke=await Ho(Q,ne,s(i),"replace");if(ke.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${ke.updatedCount} produits modifiés`),Qe.success(`Volontaires mis à jour pour ${ke.updatedCount} produits.`),e.onSuccess?.(ke);else throw new Error(ke.error||"Erreur lors de la mise à jour")}catch(ke){const ve=ke instanceof Error?ke.message:"Erreur inconnue";console.error("[WhoEditModal] Erreur mise à jour:",ke),Qe.error(`Erreur mise à jour volontaires: ${ve}`),K.clearSyncStatus()}finally{b(r,!1),Dt.backgroundOperation={isRunning:!1,name:"",progress:0}}}function w(Q){const ne=Q.trim();ne&&!s(i).includes(ne)&&b(i,[...s(i),ne],!0)}function P(Q){b(i,s(i).filter(ne=>ne!==Q),!0)}function S(Q){s(i).includes(Q)?P(Q):w(Q)}function D(){s(o).trim()&&(w(s(o)),b(o,""))}function A(Q){s(d)[Q]=!s(d)[Q]}var E=ap(),k=c(E),T=c(k),O=c(T),x=c(O),W=u(O,2);W.__click=[An,r,e];var te=c(W);It(te,{class:"h-4 w-4"});var V=u(T,2),z=c(V);{var le=Q=>{var ne=Zh(),ke=c(ne);ia(ke,{class:"h-4 w-4"});var ve=u(ke,2),Oe=c(ve);I(()=>N(Oe,s(a))),v(Q,ne)};$(z,Q=>{s(a)&&Q(le)})}var ge=u(z,2),Pe=c(ge),U=c(Pe),ce=c(U),ye=c(ce);la(ye,{get disabled(){return s(r)},onkeydown:Q=>{Q.key==="Enter"&&(Q.preventDefault(),D())},get value(){return s(o)},set value(Q){b(o,Q,!0)}});var se=u(ce,2);se.__click=D;var re=c(se);ni(re,{size:16});var me=u(U,2),we=u(c(me),2);ta(we,{get items(){return s(m)},onToggleItem:S,showIcon:!0,badgeSize:"btn-sm",badgeStyle:"btn-soft"});var F=u(ge,2),X=u(c(F),2),M=c(X);M.__click=[Xh,l];var ae=u(M,2);ae.__click=[ep,l];var R=u(X,2);ta(R,{get items(){return s(f)},onToggleItem:A,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var ie=u(V,2),j=c(ie);j.__click=[An,r,e];var ee=u(j,2);ee.__click=_;var de=c(ee);{var $e=Q=>{var ne=tp();v(Q,ne)},B=Q=>{var ne=rp(),ke=C(ne);Lr(ke,{class:"h-4 w-4"});var ve=u(ke);I(()=>N(ve,` Appliquer à ${s(h).length??""} produit(s)`)),v(Q,ne)};$(de,Q=>{s(r)?Q($e):Q(B,!1)})}I(Q=>{N(x,s(g)),W.disabled=s(r),se.disabled=Q,Me(M,1,`tab ${s(l)==="empty"?"tab-active":""}`),Me(ae,1,`tab ${s(l)==="all"?"tab-active":""}`),j.disabled=s(r),ee.disabled=s(r)||!s(p)},[()=>s(r)||!s(o).trim()]),v(t,E),Z()}Ye(["click"]);async function np(t,e,r,a,n,i){if(!s(e).invoiceTotal||s(e).invoiceTotal<=0){b(r,"Le montant doit être supérieur à 0");return}b(a,!0),b(r,null);try{const o=K.currentMainId;if(!o)throw new Error("Aucun événement principal actif");s(n)?await Ts(s(n),{price:s(e).invoiceTotal,invoiceTotal:s(e).invoiceTotal,store:s(e).store,notes:s(e).notes,who:s(e).who}):await Qo(o,void 0,s(e).invoiceTotal,s(e).store,s(e).notes,s(e).who),i()}catch(o){console.error("Erreur sauvegarde dépense:",o),b(r,o.message,!0)}finally{b(a,!1)}}var op=(t,e)=>e(!1),ip=y('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),lp=y('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),cp=(t,e)=>b(e,!0),up=y('<button class="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1 h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> Ajouter une dépense</button>'),dp=y('<span class="loading loading-spinner loading-xs"></span>'),vp=y('<div class="text-error mt-2 text-xs"> </div>'),fp=y('<div class="card bg-base-200 animate-in fade-in slide-in-from-top-4 shadow-md duration-300"><div class="card-body p-4"><h4 class="card-title text-sm"> </h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><!> <!> <!> <!></div> <div class="card-actions mt-2 justify-end"><button class="btn btn-sm btn-ghost">Annuler</button> <button class="btn btn-sm btn-primary"><!> </button></div> <!></div></div>'),hp=(t,e)=>e("date"),pp=(t,e)=>e("store"),gp=(t,e)=>e("who"),mp=(t,e)=>e("amount"),_p=y('<span class="text-base-content/70 italic"> </span>'),bp=y('<span class="text-base-content/50 ml-1 text-xs"> </span>'),yp=y('<span class="font-medium"> </span> <!>',1),wp=(t,e,r)=>e(s(r)),Sp=y('<tr class="hover"><td class="whitespace-nowrap"> </td><td class="max-w-xs truncate"><!></td><td> </td><td> </td><td class="text-right font-mono font-bold"> </td><td><button class="btn btn-ghost btn-square"><!></button></td></tr>'),xp=y('<tr><td colspan="7" class="text-base-content/50 py-8 text-center">Aucune dépense trouvée</td></tr>'),Pp=(t,e)=>e(!1),$p=(t,e)=>e(!1),kp=y('<dialog><div class="modal-box bg-base-100 flex h-[90vh] w-11/12 max-w-5xl flex-col p-0"><div class="border-base-300 bg-base-200 sticky top-0 z-10 flex items-center justify-between border-b p-4"><h3 class="flex items-center gap-2 text-lg font-bold"><!> Gestion des Dépenses</h3> <button class="btn btn-sm btn-circle btn-ghost">✕</button></div> <div class="flex-1 space-y-6 overflow-y-auto p-4"><div class="grid grid-cols-1 gap-4 md:grid-cols-3"><div class="stats bg-primary text-primary-content shadow"><div class="stat"><div class="stat-title text-primary-content/80">Total Global</div> <div class="stat-value"> </div> <div class="stat-desc text-primary-content/80"> </div></div></div> <div class="card bg-base-200 p-4 shadow-sm"><h4 class="mb-2 text-sm font-semibold tracking-wider uppercase opacity-70">Par Magasin</h4> <div class="max-h-24 space-y-1 overflow-y-auto text-sm"></div></div> <div class="card bg-base-200 p-4 shadow-sm"><h4 class="mb-2 text-sm font-semibold tracking-wider uppercase opacity-70">Par Acheteur</h4> <div class="max-h-24 space-y-1 overflow-y-auto text-sm"></div></div></div> <div class="flex items-center justify-between"><h4 class="text-sm font-bold uppercase opacity-70">Liste des transactions</h4> <!></div> <!> <div class="bg-base-100 border-base-200 overflow-x-auto rounded-lg border"><table class="table-zebra table-xs table w-full"><thead class="bg-base-200 sticky top-0"><tr><th class="hover:bg-base-300 cursor-pointer"> </th><th>Description</th><th class="hover:bg-base-300 cursor-pointer"> </th><th class="hover:bg-base-300 cursor-pointer"> </th><th class="hover:bg-base-300 cursor-pointer text-right"> </th><th><!></th></tr></thead><tbody><!><!></tbody></table></div></div> <div class="border-base-300 bg-base-200 sticky bottom-0 z-10 flex items-center justify-between border-t px-4 py-1"><button class="btn btn-ghost ms-auto">Fermer</button></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');function Ep(t,e){J(e,!0);let r=pe(e,"isOpen",15,!1),a=L(!1),n=L(null),i=L(!1),o=L(je({invoiceTotal:0,store:"",notes:"",who:""})),l=L(null);Jt(()=>{if(r()&&!s(l)){const Ee=localStorage.getItem("appwrite-user-name");Ee&&(s(o).who=Ee)}});let d=L("date"),f=L("desc"),h=G(()=>K.financialStats),m=G(()=>s(h).allPurchases),g=G(()=>{let Ee=[...s(m)];return Ee.sort((De,Be)=>{let Ae,Xe;switch(s(d)){case"date":Ae=new Date(De.orderDate||De.$createdAt).getTime(),Xe=new Date(Be.orderDate||Be.$createdAt).getTime();break;case"amount":Ae=De.invoiceTotal||De.price||0,Xe=Be.invoiceTotal||Be.price||0;break;case"store":Ae=(De.store||"").toLowerCase(),Xe=(Be.store||"").toLowerCase();break;case"who":Ae=(De.who||"").toLowerCase(),Xe=(Be.who||"").toLowerCase();break}return Ae<Xe?s(f)==="asc"?-1:1:Ae>Xe?s(f)==="asc"?1:-1:0}),Ee});function p(Ee){s(d)===Ee?b(f,s(f)==="asc"?"desc":"asc",!0):(b(d,Ee,!0),b(f,"desc"))}function _(){const Ee=localStorage.getItem("appwrite-user-name")||"";b(o,{invoiceTotal:0,store:"",notes:"",who:Ee},!0),b(l,null),b(i,!1)}function w(Ee){b(o,{invoiceTotal:Ee.invoiceTotal||Ee.price||0,store:Ee.store||"",notes:Ee.notes||"",who:Ee.who||""},!0),b(l,Ee.$id,!0),b(i,!0)}function P(Ee){return Ee?new Date(Ee).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"-"}function S(Ee){return(Ee||0).toFixed(2)+" €"}var D=kp(),A=c(D),E=c(A),k=c(E),T=c(k);Ko(T,{});var O=u(k,2);O.__click=[op,r];var x=u(E,2),W=c(x),te=c(W),V=c(te),z=u(c(V),2),le=c(z),ge=u(z,2),Pe=c(ge),U=u(te,2),ce=u(c(U),2);st(ce,21,()=>Object.entries(s(h).byStore).sort((Ee,De)=>De[1]-Ee[1]),Sr,(Ee,De)=>{var Be=G(()=>ba(s(De),2));let Ae=()=>s(Be)[0],Xe=()=>s(Be)[1];var dt=ip(),lt=c(dt),nt=c(lt),gt=u(lt,2),$t=c(gt);I(kt=>{N(nt,Ae()),N($t,kt)},[()=>S(Xe())]),v(Ee,dt)});var ye=u(U,2),se=u(c(ye),2);st(se,21,()=>Object.entries(s(h).byWho).sort((Ee,De)=>De[1]-Ee[1]),Sr,(Ee,De)=>{var Be=G(()=>ba(s(De),2));let Ae=()=>s(Be)[0],Xe=()=>s(Be)[1];var dt=lp(),lt=c(dt),nt=c(lt),gt=u(lt,2),$t=c(gt);I(kt=>{N(nt,Ae()),N($t,kt)},[()=>S(Xe())]),v(Ee,dt)});var re=u(W,2),me=u(c(re),2);{var we=Ee=>{var De=up();De.__click=[cp,i],v(Ee,De)};$(me,Ee=>{s(i)||Ee(we)})}var F=u(re,2);{var X=Ee=>{var De=fp(),Be=c(De),Ae=c(Be),Xe=c(Ae),dt=u(Ae,2),lt=c(dt);Rs(lt,{get disabled(){return s(a)},get value(){return s(o).invoiceTotal},set value(Te){s(o).invoiceTotal=Te}});var nt=u(lt,2);Wr(nt,{get suggestions(){return K.uniqueStores},get disabled(){return s(a)},get value(){return s(o).store},set value(Te){s(o).store=Te}});var gt=u(nt,2);la(gt,{get suggestions(){return K.uniqueWho},get disabled(){return s(a)},get value(){return s(o).who},set value(Te){s(o).who=Te}});var $t=u(gt,2);Qr($t,{get disabled(){return s(a)},get value(){return s(o).notes},set value(Te){s(o).notes=Te}});var kt=u(dt,2),zt=c(kt);zt.__click=_;var vt=u(zt,2);vt.__click=[np,o,n,a,l,_];var Rt=c(vt);{var ur=Te=>{var Le=dp();v(Te,Le)};$(Rt,Te=>{s(a)&&Te(ur)})}var ue=u(Rt),he=u(kt,2);{var Ne=Te=>{var Le=vp(),qe=c(Le);I(()=>N(qe,s(n))),v(Te,Le)};$(he,Te=>{s(n)&&Te(Ne)})}I(()=>{N(Xe,s(l)?"Modifier la dépense":"Nouvelle Dépense"),vt.disabled=s(a),N(ue,` ${s(l)?"Enregistrer":"Ajouter"}`)}),v(Ee,De)};$(F,Ee=>{s(i)&&Ee(X)})}var M=u(F,2),ae=c(M),R=c(ae),ie=c(R),j=c(ie);j.__click=[hp,p];var ee=c(j),de=u(j,2);de.__click=[pp,p];var $e=c(de),B=u(de);B.__click=[gp,p];var Q=c(B),ne=u(B);ne.__click=[mp,p];var ke=c(ne),ve=u(ne),Oe=c(ve);mu(Oe,{size:14});var H=u(R),be=c(H);st(be,17,()=>s(g),Ee=>Ee.$id,(Ee,De)=>{var Be=Sp(),Ae=c(Be),Xe=c(Ae),dt=u(Ae),lt=c(dt);{var nt=Te=>{var Le=_p(),qe=c(Le);I(()=>N(qe,s(De).notes||"-")),v(Te,Le)},gt=Te=>{var Le=yp(),qe=C(Le),Ge=c(qe),ze=u(qe,2);{var mt=ft=>{var tt=bp(),Fe=c(tt);I(()=>N(Fe,`- ${s(De).notes??""}`)),v(ft,tt)};$(ze,ft=>{s(De).notes&&ft(mt)})}I(()=>N(Ge,s(De)._productName||"Produit inconnu")),v(Te,Le)};$(lt,Te=>{s(De).status==="expense"?Te(nt):Te(gt,!1)})}var $t=u(dt),kt=c($t),zt=u($t),vt=c(zt),Rt=u(zt),ur=c(Rt),ue=u(Rt),he=c(ue);he.__click=[wp,w,De];var Ne=c(he);ea(Ne,{size:14}),I((Te,Le)=>{N(Xe,Te),N(kt,s(De).store||"-"),N(vt,s(De).who||"-"),N(ur,Le)},[()=>P(s(De).orderDate||s(De).$createdAt),()=>S(s(De).invoiceTotal||s(De).price)]),v(Ee,Be)});var We=u(be);{var Ue=Ee=>{var De=xp();v(Ee,De)};$(We,Ee=>{s(g).length===0&&Ee(Ue)})}var Je=u(x,2),Ie=c(Je);Ie.__click=[Pp,r];var et=u(A,2),Bt=c(et);Bt.__click=[$p,r],I(Ee=>{Me(D,1,`modal ${r()?"modal-open":""}`),N(le,Ee),N(Pe,`${s(m).length??""} transactions`),N(ee,`Date ${s(d)==="date"?s(f)==="asc"?"↑":"↓":""}`),N($e,`Magasin ${s(d)==="store"?s(f)==="asc"?"↑":"↓":""}`),N(Q,`Qui ${s(d)==="who"?s(f)==="asc"?"↑":"↓":""}`),N(ke,`Montant ${s(d)==="amount"?s(f)==="asc"?"↑":"↓":""}`)},[()=>S(s(h).totalGlobal)]),v(t,D),Z()}Ye(["click"]);var Ap=y("<div><!></div>"),Tp=y('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Dp(t,e){J(e,!0);let r=L(!1),a=pe(e,"width",3,"80"),n=pe(e,"bgClass",3,"bg-base-300");const i=G(()=>"w-"+a());var o=Y(),l=C(o);{var d=h=>{var m=Ap(),g=c(m);fe(g,()=>e.children??oe),I(()=>Me(m,1,`${n()??""} ${(s(i)?s(i):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),v(h,m)},f=h=>{var m=Tp(),g=C(m),p=c(g),_=u(p,2),w=u(c(_),2),P=c(w);fe(P,()=>e.children??oe);var S=u(g,2),D=c(S),A=c(D);Jo(A,{class:"h-6 w-6"}),ls(p,()=>s(r),E=>b(r,E)),v(h,m)};$(l,h=>{Dt.isMobile?h(f,!1):h(d)})}v(t,o),Z()}function Mp(t,e){b(e,!0)}var Np=(t,e)=>b(e,!0),Cp=y('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button> <button class="btn btn-sm btn-primary" title="Ajouter un produit manuellement"><!> Produit</button></div> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Ip(t,e){J(e,!0);const r="100",a=G(()=>K.stats);let n=L(null),i=L("recettes"),o=L(!1),l=L(!1),d=L(je([])),f=L(je([])),h=L(!1),m=L(je([])),g=L(!1);function p(R,ie="recettes"){b(i,ie,!0),b(n,R,!0)}function _(){b(n,null)}function w(R,ie,j){b(d,ie,!0),b(f,j,!0),b(R==="who"?o:l,!0)}function P(R){(!R||R==="who")&&b(o,!1),(!R||R==="store")&&b(l,!1),b(d,[],!0),b(f,[],!0)}function S(R){console.log(`[ProductsTable] Modification groupée réussie: ${R.updatedCount} produits`)}function D(R){const ie=R.filter(j=>K.getProductModelById(j.$id)?.stats.hasMissing);console.log(`[ProductsTable] openGroupPurchaseModal: ${R.length} produits reçus → ${ie.length} produits avec quantités manquantes`),b(m,ie,!0),b(h,!0)}function A(){b(h,!1),b(m,[],!0)}function E(){console.log("[ProductsTable] Achat groupé créé avec succès"),A()}async function k(R,ie){try{if(!K.currentMainId)throw new Error("mainId non disponible");const j=ie.missingQuantities||[];if(j.length===0){console.log("Aucune quantité manquante à valider pour ce produit dans cette période");return}const ee=j.filter($e=>$e.q<0).map($e=>({...$e,q:Math.abs($e.q)})).map($e=>{const{quantity:B,unit:Q}=vs($e.q,$e.u);return{q:B,u:Q}});let de=R.$id;R.isSynced||(console.log(`[ProductsTable] Produit ${R.$id} local, création pour validation rapide...`),de=(await Ht(R.$id,{},B=>K.getEnrichedProductById(B))).$id,console.log(`[ProductsTable] Produit sync créé: ${de}`)),await Wo(K.currentMainId,de,ee,{store:R.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${R.productName}`)}catch(j){console.error("[ProductsTable] Erreur validation rapide:",j),alert("Erreur lors de la validation rapide: "+j.message)}}let T=L(!1);var O=Cp(),x=c(O),W=c(x),te=c(W);lu(te,{class:"mr-1 h-4 w-4"});var V=u(te),z=u(W,2);z.__click=[Np,T];var le=c(z);Ko(le,{class:"mr-1 h-4 w-4"});var ge=u(z,2);ge.__click=[Mp,g];var Pe=c(ge);Ms(Pe,{class:"mr-1 h-4 w-4"});var U=u(x,2);Dp(U,{width:r,children:(R,ie)=>{Bf(R,{})},$$slots:{default:!0}});var ce=u(U,2);Wh(ce,{onOpenModal:p,onOpenGroupEditModal:w,onOpenGroupPurchaseModal:D,onQuickValidation:k});var ye=u(ce,2);{let R=G(()=>s(n)||"");Xv(ye,{get productId(){return s(R)},get initialTab(){return s(i)},onClose:_})}var se=u(ye,2);{var re=R=>{sp(R,{get productIds(){return s(d)},get products(){return s(f)},onClose:()=>P("who"),onSuccess:S})};$(se,R=>{s(o)&&R(re)})}var me=u(se,2);{var we=R=>{Jh(R,{get productIds(){return s(d)},get products(){return s(f)},onClose:()=>P("store"),onSuccess:S})};$(me,R=>{s(l)&&R(we)})}var F=u(me,2);{var X=R=>{nd(R,{get products(){return s(m)},onClose:A,onSuccess:E})};$(F,R=>{s(h)&&R(X)})}var M=u(F,2);dd(M,{get open(){return s(g)},set open(R){b(g,R,!0)}});var ae=u(M,2);Ep(ae,{get isOpen(){return s(T)},set isOpen(R){b(T,R,!0)}}),I(()=>{Me(O,1,`space-y-6 ${Dt.isMobile?"":"ml-100"}`),N(V,` ${s(a).total??""}`)}),v(t,O),Z()}Ye(["click"]);Gi();var Rp=y('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function Op(t){var e=Rp();v(t,e)}var qp=y('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function jp(t,e){var r=qp(),a=u(c(r),2),n=u(c(a),2),i=c(n);I(()=>N(i,e.message)),v(t,r)}var Lp=y('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Bp(t,e){var r=Lp(),a=c(r),n=c(a);ia(n,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=u(n,2),o=u(c(i),2),l=c(o);I(()=>N(l,e.message||"Erreur inconnue")),v(t,r)}function zp(t){t.stopPropagation()}var Up=(t,e)=>t.key==="Escape"&&e(),Hp=y('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),Wp=y('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),Qp=(t,e)=>b(e,!1),Gp=y('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),Vp=(t,e)=>b(e,!0),Fp=(t,e)=>b(e,!1),Kp=y(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),Yp=(t,e)=>b(e,!0),Jp=y('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),Zp=y('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function Xp(t,e){J(e,!0);let r=pe(e,"onClose",3,()=>{}),a=pe(e,"onAuthSuccess",3,()=>{}),n=L(!0),i=L(!1),o=L(""),l=L(""),d=L(""),f=L(""),h=L(""),m=L(""),g=L(""),p=L(""),_=L(!1);function w(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function P(ye){if(ye.preventDefault(),!s(d)||!s(f)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{await(await w().getAccount()).createEmailPasswordSession(s(d),s(f)),b(l,"Connexion réussie !"),setTimeout(()=>{a()()},1e3)}catch(se){console.error("Erreur de connexion:",se),b(o,se.message||"Erreur lors de la connexion",!0)}finally{b(i,!1)}}async function S(ye){if(ye.preventDefault(),!s(h)||!s(m)||!s(g)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{const re=await w().getAccount();await re.create("unique()",s(m),s(g),s(h)),await re.createEmailPasswordSession(s(m),s(g)),b(l,"Compte créé et connecté !"),setTimeout(()=>{a()()},1e3)}catch(se){console.error("Erreur d'inscription:",se),b(o,se.message||"Erreur lors de la création du compte",!0)}finally{b(i,!1)}}async function D(ye){if(ye.preventDefault(),!s(p)){b(o,"Veuillez entrer votre email");return}b(i,!0),b(o,"");try{await(await w().getAccount()).createRecovery(s(p),`${window.location.origin}/reset-password`),b(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{b(_,!1),b(p,"")},2e3)}catch(se){console.error("Erreur mot de passe oublié:",se),b(o,se.message||"Erreur lors de l'envoi de l'email",!0)}finally{b(i,!1)}}function A(){s(i)||r()()}Jt(()=>{(s(n)||s(_))&&(b(o,""),b(l,""))});var E=Zp();E.__click=A,E.__keydown=[Up,A];var k=c(E);k.__click=[zp];var T=c(k),O=c(T),x=c(O),W=u(O,2);W.__click=A;var te=u(T,2),V=c(te);{var z=ye=>{var se=Hp(),re=c(se);I(()=>N(re,s(o))),v(ye,se)};$(V,ye=>{s(o)&&ye(z)})}var le=u(V,2);{var ge=ye=>{var se=Wp(),re=c(se);I(()=>N(re,s(l))),v(ye,se)};$(le,ye=>{s(l)&&ye(ge)})}var Pe=u(le,2);{var U=ye=>{var se=Gp(),re=C(se),me=c(re),we=u(c(me),2),F=u(me,2),X=c(F),M=u(re,2),ae=c(M);ae.__click=[Qp,_],I(()=>{we.disabled=s(i),F.disabled=s(i),N(X,s(i)?"Envoi...":"Envoyer l'email de réinitialisation"),ae.disabled=s(i)}),Cr("submit",re,D),Ke(we,()=>s(p),R=>b(p,R)),v(ye,se)},ce=ye=>{var se=Y(),re=C(se);{var me=F=>{var X=Kp(),M=C(X),ae=c(M),R=u(c(ae),2),ie=u(ae,2),j=u(c(ie),2),ee=u(ie,2),de=c(ee),$e=u(M,2),B=c($e);B.__click=[Vp,_];var Q=u(B,2),ne=u(c(Q));ne.__click=[Fp,n],I(()=>{R.disabled=s(i),j.disabled=s(i),ee.disabled=s(i),N(de,s(i)?"Connexion...":"Se connecter"),B.disabled=s(i),ne.disabled=s(i)}),Cr("submit",M,P),Ke(R,()=>s(d),ke=>b(d,ke)),Ke(j,()=>s(f),ke=>b(f,ke)),v(F,X)},we=F=>{var X=Jp(),M=C(X),ae=c(M),R=u(c(ae),2),ie=u(ae,2),j=u(c(ie),2),ee=u(ie,2),de=u(c(ee),2),$e=u(ee,2),B=c($e),Q=u(M,2),ne=u(c(Q));ne.__click=[Yp,n],I(()=>{R.disabled=s(i),j.disabled=s(i),de.disabled=s(i),$e.disabled=s(i),N(B,s(i)?"Création...":"Créer un compte"),ne.disabled=s(i)}),Cr("submit",M,S),Ke(R,()=>s(h),ke=>b(h,ke)),Ke(j,()=>s(m),ke=>b(m,ke)),Ke(de,()=>s(g),ke=>b(g,ke)),v(F,X)};$(re,F=>{s(n)?F(me):F(we,!1)},!0)}v(ye,se)};$(Pe,ye=>{s(_)?ye(U):ye(ce,!1)})}I(()=>{N(x,s(_)?"Mot de passe oublié":s(n)?"Connexion":"Inscription"),W.disabled=s(i)}),v(t,E),Z()}Ye(["click","keydown"]);var eg=(t,e,r,a)=>e(s(r),s(a)),tg=y('<button class="btn btn-sm btn-primary"> </button>'),rg=(t,e,r)=>e(s(r)),ag=y('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),sg=(t,e,r)=>e(s(r)),ng=y('<button class="btn btn-ghost btn-sm btn-circle absolute top-1 right-1" title="Fermer" aria-label="Fermer la notification"><!></button>'),og=y('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!> <!></div></div></div>'),ig=y("<div></div>");function lg(t,e){J(e,!0);let r=pe(e,"position",3,"toast-right toast-bottom"),a=pe(e,"padding",3,"md");const n=G(()=>a()==="sm"?"px-2 py-0.5":""),i=G(()=>Qe.toasts);function o(m){return m==="success"||m==="info"}function l(m){Qe.dismiss(m.id)}function d(m){e.onShowDetails?.({id:m.id,message:m.message,details:m.details})}function f(m,g){g.onClick()}var h=ig();st(h,21,()=>s(i),m=>m.id,(m,g)=>{var p=og(),_=c(p),w=c(_),P=c(w);{var S=V=>{Xo(V,{class:"h-5 w-5 animate-spin"})};$(P,V=>{s(g).state==="loading"&&V(S)})}var D=u(P,2),A=c(D),E=u(w,2),k=c(E);{var T=V=>{var z=Y(),le=C(z);st(le,17,()=>s(g).actions,Sr,(ge,Pe)=>{var U=tg();U.__click=[eg,f,g,Pe];var ce=c(U);I(()=>N(ce,s(Pe).label)),v(ge,U)}),v(V,z)};$(k,V=>{s(g).actions&&s(g).actions.length>0&&V(T)})}var O=u(k,2);{var x=V=>{var z=ag();z.__click=[rg,d,g];var le=c(z);Yo(le,{class:"h-3 w-3"}),v(V,z)};$(O,V=>{s(g).details&&V(x)})}var W=u(O,2);{var te=V=>{var z=ng();z.__click=[sg,l,g];var le=c(z);It(le,{class:"h-4 w-4"}),v(V,z)};$(W,V=>{(s(g).state==="error"||s(g).state==="warning"||!o(s(g).state))&&V(te)})}I(()=>{Me(p,1,`alert alert-${s(g).state??""} max-w-sm ${s(n)??""} shadow-lg`),N(A,s(g).message)}),v(m,p)}),I(()=>Me(h,1,`toast ${r()??""} z-50`)),v(t,h),Z()}Ye(["click"]);var cg=y('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function ug(t){var e=cg(),r=c(e),a=u(r,2);ai(a,{class:"swap-on fill-current"});var n=u(a,2);ti(n,{class:"swap-off fill-current"}),v(t,e)}function dg(t,e){b(e,!0)}var vg=y('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),fg=y('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),hg=y('<div class="text-base-content/60"> </div>'),pg=y('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),gg=y('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),mg=y('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),_g=y('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!></main>',1),bg=y('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function yg(t,e){J(e,!0);let r,a=L(null),n=L(!0),i=L(!1),o=L(!1);function l(k,T,O){localStorage.setItem("appwrite-user-email",k),localStorage.setItem("appwrite-user-name",T)}async function d(){const k=yn();r=Qc(k);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const x=await(await window.AppwriteClient.getAccount()).get();l(x.email,x.name),await K.initialize(r,k)}catch(T){const O=T instanceof Error?T.message:"Erreur lors de l'initialisation";b(a,O,!0),console.error("[App] Erreur initialisation:",T)}finally{b(n,!1)}}So(async()=>{await d()});async function f(){b(o,!1),b(n,!0),b(a,null),await d()}ec(()=>{K.destroy()});async function h(){if(!(!r||s(i))){b(i,!0);try{const k=yn();await K.forceReload(r,k)}catch(k){console.error("[App] Erreur lors du rechargement forcé:",k)}finally{b(i,!1)}}}const m=G(()=>s(a)||K.error),g=G(()=>s(n)||K.loading);var p=bg(),_=C(p),w=c(_);lg(w,{});var P=u(w,2);{var S=k=>{Op(k)},D=k=>{var T=_g(),O=C(T),x=c(O),W=c(x),te=u(c(W),2),V=c(te);{var z=j=>{var ee=vg();v(j,ee)};$(V,j=>{K.realtimeConnected&&j(z)})}var le=u(V,2);{var ge=j=>{var ee=fg();v(j,ee)};$(le,j=>{K.syncing&&j(ge)})}var Pe=u(le,2);{var U=j=>{var ee=hg(),de=c(ee);I($e=>N(de,`Maj: ${$e??""}`),[()=>new Date(K.lastSync).toLocaleTimeString()]),v(j,ee)};$(Pe,j=>{K.lastSync&&j(U)})}var ce=u(Pe,2);ug(ce);var ye=u(ce,2);{var se=j=>{var ee=pg();let de;ee.__click=h;var $e=c(ee);bu($e,{class:"h-4 w-4"}),I(B=>{de=Me(ee,1,"btn btn-outline btn-sm",null,de,B),ee.disabled=s(i)||K.loading},[()=>({loading:s(i)||K.loading})]),v(j,ee)};$(ye,j=>{s(a)||j(se)})}var re=u(ye,2);{var me=j=>{var ee=gg(),de=c(ee);de.__click=[dg,o];var $e=c(de);vu($e,{class:"mr-2 h-4 w-4"}),v(j,ee)};$(re,j=>{s(a)&&j(me)})}var we=u(O,2),F=c(we);{var X=j=>{Bp(j,{get message(){return s(m)}})},M=j=>{var ee=Y(),de=C(ee);{var $e=B=>{jp(B,{get message(){return s(m)}})};$(de,B=>{s(m)&&B($e)},!0)}v(j,ee)};$(F,j=>{s(a)?j(X):j(M,!1)})}var ae=u(F,2);{var R=j=>{Ip(j,{})},ie=j=>{var ee=Y(),de=C(ee);{var $e=B=>{var Q=mg();v(B,Q)};$(de,B=>{!K.loading&&!s(a)&&B($e)},!0)}v(j,ee)};$(ae,j=>{K.enrichedProducts.length>0?j(R):j(ie,!1)})}v(k,T)};$(P,k=>{s(g)?k(S):k(D,!1)})}var A=u(_,2);{var E=k=>{Xp(k,{onClose:()=>b(o,!1),onAuthSuccess:f})};$(A,k=>{s(o)&&k(E)})}v(t,p),Z()}Ye(["click"]);const ci=document.getElementById("app_products");if(!ci)throw new Error("Élément target non trouvé: #app_products");Ml(yg,{target:ci});
