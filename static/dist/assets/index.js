(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const Nn=!1;var na=Array.isArray,hi=Array.prototype.indexOf,ps=Array.from,ts=Object.defineProperty,rr=Object.getOwnPropertyDescriptor,pi=Object.getOwnPropertyDescriptors,Mn=Object.prototype,gi=Array.prototype,gs=Object.getPrototypeOf,Us=Object.isExtensible;function Dr(t){return typeof t=="function"}const de=()=>{};function mi(t){for(var e=0;e<t.length;e++)t[e]()}function Cn(){var t,e,r=new Promise((a,n)=>{t=a,e=n});return{promise:r,resolve:t,reject:e}}function xa(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const r=[];for(const a of t)if(r.push(a),r.length===e)break;return r}const pt=2,ms=4,_s=8,lr=16,Ft=32,Sr=64,bs=128,$t=256,Ea=512,nt=1024,bt=2048,cr=4096,It=8192,xr=16384,Ta=32768,ur=65536,Hs=1<<17,_i=1<<18,Br=1<<19,bi=1<<20,rs=1<<21,ka=1<<22,mr=1<<23,_r=Symbol("$state"),Rn=Symbol("legacy props"),yi=Symbol(""),Jr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function On(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function wi(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Si(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function xi(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ei(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Pi(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function $i(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ai(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ti(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ki(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Di(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Da=1,Ia=2,qn=4,Ii=8,Ni=16,Mi=1,Ci=2,Ri=4,Oi=8,qi=16,ji=1,Bi=2,Li=4,zi=1,Ui=2,et=Symbol(),Hi="http://www.w3.org/1999/xhtml",Gi="http://www.w3.org/2000/svg",Wi="@attach";function Qi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Vi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Fi=!1;function jn(t){return t===this.v}function Bn(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Ki(t,e){return t!==e}function Ln(t){return!Bn(t,this.v)}let Lr=!1,Ji=!1;function Yi(){Lr=!0}const Zi=[];function Tr(t,e=!1,r=!1){return ba(t,new Map,"",Zi,null,r)}function ba(t,e,r,a,n=null,i=!1){if(typeof t=="object"&&t!==null){var o=e.get(t);if(o!==void 0)return o;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(na(t)){var l=Array(t.length);e.set(t,l),n!==null&&e.set(n,l);for(var d=0;d<t.length;d+=1){var f=t[d];d in t&&(l[d]=ba(f,e,r,a,null,i))}return l}if(gs(t)===Mn){l={},e.set(t,l),n!==null&&e.set(n,l);for(var h in t)l[h]=ba(t[h],e,r,a,null,i);return l}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function"&&!i)return ba(t.toJSON(),e,r,a,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}let Je=null;function Mr(t){Je=t}function J(t,e=!1,r){Je={p:Je,c:null,e:null,s:t,x:null,l:Lr&&!e?{s:null,u:null,$:[]}:null}}function Y(t){var e=Je,r=e.e;if(r!==null){e.e=null;for(var a of r)eo(a)}return Je=e.p,{}}function zr(){return!Lr||Je!==null&&Je.l===null}let hr=[];function zn(){var t=hr;hr=[],mi(t)}function sr(t){if(hr.length===0&&!Yr){var e=hr;queueMicrotask(()=>{e===hr&&zn()})}hr.push(t)}function Xi(){for(;hr.length>0;)zn()}const el=new WeakMap;function Un(t){var e=Ce;if(e===null)return Oe.f|=mr,t;if((e.f&Ta)===0){if((e.f&bs)===0)throw!e.parent&&t instanceof Error&&Hn(t),t;e.b.error(t)}else Cr(t,e)}function Cr(t,e){for(;e!==null;){if((e.f&bs)!==0)try{e.b.error(t);return}catch(r){t=r}e=e.parent}throw t instanceof Error&&Hn(t),t}function Hn(t){const e=el.get(t);e&&(ts(t,"message",{value:e.message}),ts(t,"stack",{value:e.stack}))}const fa=new Set;let Ue=null,ya=null,as=new Set,Rt=[],Na=null,ss=!1,Yr=!1;class Pt{current=new Map;#e=new Map;#t=new Set;#r=0;#o=null;#i=[];#n=[];#l=[];#c=[];#d=[];#u=[];skipped_effects=new Set;process(e){Rt=[],ya=null;var r=Pt.apply(this);for(const i of e)this.#v(i);if(this.#r===0){this.#f();var a=this.#n,n=this.#l;this.#n=[],this.#l=[],this.#c=[],ya=this,Ue=null,Gs(a),Gs(n),ya=null,this.#o?.resolve()}else this.#a(this.#n),this.#a(this.#l),this.#a(this.#c);r();for(const i of this.#i)ta(i);this.#i=[]}#v(e){e.f^=nt;for(var r=e.first;r!==null;){var a=r.f,n=(a&(Ft|Sr))!==0,i=n&&(a&nt)!==0,o=i||(a&It)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){n?r.f^=nt:(a&ms)!==0?this.#l.push(r):(a&nt)===0&&((a&ka)!==0&&r.b?.is_pending()?this.#i.push(r):qa(r)&&((r.f&lr)!==0&&this.#c.push(r),ta(r)));var l=r.first;if(l!==null){r=l;continue}}var d=r.parent;for(r=r.next;r===null&&d!==null;)r=d.next,d=d.parent}}#a(e){for(const r of e)((r.f&bt)!==0?this.#d:this.#u).push(r),vt(r,nt);e.length=0}capture(e,r){this.#e.has(e)||this.#e.set(e,r),this.current.set(e,e.v)}activate(){Ue=this}deactivate(){Ue=null}flush(){if(Rt.length>0){if(this.activate(),Gn(),Ue!==null&&Ue!==this)return}else this.#r===0&&this.#f();this.deactivate();for(const e of as)if(as.delete(e),e(),Ue!==null)break}#f(){for(const e of this.#t)e();if(this.#t.clear(),fa.size>1){this.#e.clear();let e=!0;for(const r of fa){if(r===this){e=!1;continue}for(const[a,n]of this.current){if(r.current.has(a))if(e)r.current.set(a,n);else continue;Wn(a)}if(Rt.length>0){Ue=r;const a=Pt.apply(r);for(const n of Rt)r.#v(n);Rt=[],a()}}Ue=null}fa.delete(this)}increment(){this.#r+=1}decrement(){this.#r-=1;for(const e of this.#d)vt(e,bt),wr(e);for(const e of this.#u)vt(e,cr),wr(e);this.flush()}add_callback(e){this.#t.add(e)}settled(){return(this.#o??=Cn()).promise}static ensure(){if(Ue===null){const e=Ue=new Pt;fa.add(Ue),Yr||Pt.enqueue(()=>{Ue===e&&e.flush()})}return Ue}static enqueue(e){sr(e)}static apply(e){return de}}function tl(t){var e=Yr;Yr=!0;try{for(var r;;){if(Xi(),Rt.length===0&&(Ue?.flush(),Rt.length===0))return Na=null,r;Gn()}}finally{Yr=e}}function Gn(){var t=Ir;ss=!0;try{var e=0;for(Fs(!0);Rt.length>0;){var r=Pt.ensure();if(e++>1e3){var a,n;rl()}r.process(Rt),ar.clear()}}finally{ss=!1,Fs(t),Na=null}}function rl(){try{Pi()}catch(t){Cr(t,Na)}}let vr=null;function Gs(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var a=t[r++];if((a.f&(xr|It))===0&&qa(a)&&(vr=[],ta(a),a.deps===null&&a.first===null&&a.nodes_start===null&&(a.teardown===null&&a.ac===null?ao(a):a.fn=null),vr?.length>0)){ar.clear();for(const n of vr)ta(n);vr=[]}}vr=null}}function Wn(t){if(t.reactions!==null)for(const e of t.reactions){const r=e.f;(r&pt)!==0?Wn(e):(r&(ka|lr))!==0&&(vt(e,bt),wr(e))}}function wr(t){for(var e=Na=t;e.parent!==null;){e=e.parent;var r=e.f;if(ss&&e===Ce&&(r&lr)!==0)return;if((r&(Sr|Ft))!==0){if((r&nt)===0)return;e.f^=nt}}Rt.push(e)}function ys(t){let e=0,r=nr(0),a;return()=>{_l()&&(s(r),Ps(()=>(e===0&&(a=Pr(()=>t(()=>Ot(r)))),e+=1,()=>{sr(()=>{e-=1,e===0&&(a?.(),a=void 0,Ot(r))})})))}}var al=ur|Br|bs;function sl(t,e,r){new nl(t,e,r)}class nl{parent;#e=!1;#t;#r=null;#o;#i;#n;#l=null;#c=null;#d=null;#u=null;#v=0;#a=0;#f=!1;#h=null;#p=()=>{this.#h&&Rr(this.#h,this.#v)};#S=ys(()=>(this.#h=nr(this.#v),()=>{this.#h=null}));constructor(e,r,a){this.#t=e,this.#o=r,this.#i=a,this.parent=Ce.b,this.#e=!!this.#o.pending,this.#n=Zt(()=>{Ce.b=this;{try{this.#l=rt(()=>a(this.#t))}catch(n){this.error(n)}this.#a>0?this.#g():this.#e=!1}},al)}#x(){try{this.#l=rt(()=>this.#i(this.#t))}catch(e){this.error(e)}this.#e=!1}#_(){const e=this.#o.pending;e&&(this.#c=rt(()=>e(this.#t)),Pt.enqueue(()=>{this.#l=this.#s(()=>(Pt.ensure(),rt(()=>this.#i(this.#t)))),this.#a>0?this.#g():(Gt(this.#c,()=>{this.#c=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#o.pending}#s(e){var r=Ce,a=Oe,n=Je;qt(this.#n),ht(this.#n),Mr(this.#n.ctx);try{return e()}catch(i){return Un(i),null}finally{qt(r),ht(a),Mr(n)}}#g(){const e=this.#o.pending;this.#l!==null&&(this.#u=document.createDocumentFragment(),ol(this.#l,this.#u)),this.#c===null&&(this.#c=rt(()=>e(this.#t)))}#m(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(e);return}this.#a+=e,this.#a===0&&(this.#e=!1,this.#c&&Gt(this.#c,()=>{this.#c=null}),this.#u&&(this.#t.before(this.#u),this.#u=null),sr(()=>{Pt.ensure().flush()}))}update_pending_count(e){this.#m(e),this.#v+=e,as.add(this.#p)}get_effect_pending(){return this.#S(),s(this.#h)}error(e){var r=this.#o.onerror;let a=this.#o.failed;if(this.#f||!r&&!a)throw e;this.#l&&(at(this.#l),this.#l=null),this.#c&&(at(this.#c),this.#c=null),this.#d&&(at(this.#d),this.#d=null);var n=!1,i=!1;const o=()=>{if(n){Vi();return}n=!0,i&&Di(),Pt.ensure(),this.#v=0,this.#d!==null&&Gt(this.#d,()=>{this.#d=null}),this.#e=this.has_pending_snippet(),this.#l=this.#s(()=>(this.#f=!1,rt(()=>this.#i(this.#t)))),this.#a>0?this.#g():this.#e=!1};var l=Oe;try{ht(null),i=!0,r?.(e,o),i=!1}catch(d){Cr(d,this.#n&&this.#n.parent)}finally{ht(l)}a&&sr(()=>{this.#d=this.#s(()=>{this.#f=!0;try{return rt(()=>{a(this.#t,()=>e,()=>o)})}catch(d){return Cr(d,this.#n.parent),null}finally{this.#f=!1}})})}}function ol(t,e){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var n=r===a?null:oa(r);e.append(r),r=n}}function Qn(t,e,r){const a=zr()?Ma:ws;if(e.length===0){r(t.map(a));return}var n=Ue,i=Ce,o=il();Promise.all(e.map(l=>ll(l))).then(l=>{o();try{r([...t.map(a),...l])}catch(d){(i.f&xr)===0&&Cr(d,i)}n?.deactivate(),Vn()}).catch(l=>{Cr(l,i)})}function il(){var t=Ce,e=Oe,r=Je,a=Ue;return function(){qt(t),ht(e),Mr(r),a?.activate()}}function Vn(){qt(null),ht(null),Mr(null)}function Ma(t){var e=pt|bt,r=Oe!==null&&(Oe.f&pt)!==0?Oe:null;return Ce===null||r!==null&&(r.f&$t)!==0?e|=$t:Ce.f|=Br,{ctx:Je,deps:null,effects:null,equals:jn,f:e,fn:t,reactions:null,rv:0,v:et,wv:0,parent:r??Ce,ac:null}}function ll(t,e){let r=Ce;r===null&&wi();var a=r.b,n=void 0,i=nr(et),o=!Oe,l=new Map;return yl(()=>{var d=Cn();n=d.promise;try{Promise.resolve(t()).then(d.resolve,d.reject)}catch(g){d.reject(g)}var f=Ue,h=a.is_pending();o&&(a.update_pending_count(1),h||(f.increment(),l.get(f)?.reject(Jr),l.set(f,d)));const m=(g,p=void 0)=>{h||f.activate(),p?p!==Jr&&(i.f|=mr,Rr(i,p)):((i.f&mr)!==0&&(i.f^=mr),Rr(i,g)),o&&(a.update_pending_count(-1),h||f.decrement()),Vn()};d.promise.then(m,g=>m(null,g||"unknown"))}),Es(()=>{for(const d of l.values())d.reject(Jr)}),new Promise(d=>{function f(h){function m(){h===n?d(i):f(n)}h.then(m,m)}f(n)})}function F(t){const e=Ma(t);return oo(e),e}function ws(t){const e=Ma(t);return e.equals=Ln,e}function Fn(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)at(e[r])}}function cl(t){for(var e=t.parent;e!==null;){if((e.f&pt)===0)return e;e=e.parent}return null}function Ss(t){var e,r=Ce;qt(cl(t));try{Fn(t),e=uo(t)}finally{qt(r)}return e}function Kn(t){var e=Ss(t);if(t.equals(e)||(t.v=e,t.wv=lo()),!Er){var r=(er||(t.f&$t)!==0)&&t.deps!==null?cr:nt;vt(t,r)}}const ar=new Map;function nr(t,e){var r={f:0,v:t,reactions:null,equals:jn,rv:0,wv:0};return r}function j(t,e){const r=nr(t);return oo(r),r}function ul(t,e=!1,r=!0){const a=nr(t);return e||(a.equals=Ln),Lr&&r&&Je!==null&&Je.l!==null&&(Je.l.s??=[]).push(a),a}function b(t,e,r=!1){Oe!==null&&(!kt||(Oe.f&Hs)!==0)&&zr()&&(Oe.f&(pt|lr|ka|Hs))!==0&&!Wt?.includes(t)&&ki();let a=r?qe(e):e;return Rr(t,a)}function Rr(t,e){if(!t.equals(e)){var r=t.v;Er?ar.set(t,e):ar.set(t,r),t.v=e;var a=Pt.ensure();a.capture(t,r),(t.f&pt)!==0&&((t.f&bt)!==0&&Ss(t),vt(t,(t.f&$t)===0?nt:cr)),t.wv=lo(),Jn(t,bt),zr()&&Ce!==null&&(Ce.f&nt)!==0&&(Ce.f&(Ft|Sr))===0&&(Et===null?xl([t]):Et.push(t))}return e}function Ot(t){b(t,t.v+1)}function Jn(t,e){var r=t.reactions;if(r!==null)for(var a=zr(),n=r.length,i=0;i<n;i++){var o=r[i],l=o.f;if(!(!a&&o===Ce)){var d=(l&bt)===0;d&&vt(o,e),(l&pt)!==0?Jn(o,cr):d&&((l&lr)!==0&&vr!==null&&vr.push(o),wr(o))}}}function qe(t){if(typeof t!="object"||t===null||_r in t)return t;const e=gs(t);if(e!==Mn&&e!==gi)return t;var r=new Map,a=na(t),n=j(0),i=Qt,o=l=>{if(Qt===i)return l();var d=Oe,f=Qt;ht(null),Js(i);var h=l();return ht(d),Js(f),h};return a&&r.set("length",j(t.length)),new Proxy(t,{defineProperty(l,d,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Ai();var h=r.get(d);return h===void 0?h=o(()=>{var m=j(f.value);return r.set(d,m),m}):b(h,f.value,!0),!0},deleteProperty(l,d){var f=r.get(d);if(f===void 0){if(d in l){const h=o(()=>j(et));r.set(d,h),Ot(n)}}else b(f,et),Ot(n);return!0},get(l,d,f){if(d===_r)return t;var h=r.get(d),m=d in l;if(h===void 0&&(!m||rr(l,d)?.writable)&&(h=o(()=>{var p=qe(m?l[d]:et),_=j(p);return _}),r.set(d,h)),h!==void 0){var g=s(h);return g===et?void 0:g}return Reflect.get(l,d,f)},getOwnPropertyDescriptor(l,d){var f=Reflect.getOwnPropertyDescriptor(l,d);if(f&&"value"in f){var h=r.get(d);h&&(f.value=s(h))}else if(f===void 0){var m=r.get(d),g=m?.v;if(m!==void 0&&g!==et)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return f},has(l,d){if(d===_r)return!0;var f=r.get(d),h=f!==void 0&&f.v!==et||Reflect.has(l,d);if(f!==void 0||Ce!==null&&(!h||rr(l,d)?.writable)){f===void 0&&(f=o(()=>{var g=h?qe(l[d]):et,p=j(g);return p}),r.set(d,f));var m=s(f);if(m===et)return!1}return h},set(l,d,f,h){var m=r.get(d),g=d in l;if(a&&d==="length")for(var p=f;p<m.v;p+=1){var _=r.get(p+"");_!==void 0?b(_,et):p in l&&(_=o(()=>j(et)),r.set(p+"",_))}if(m===void 0)(!g||rr(l,d)?.writable)&&(m=o(()=>j(void 0)),b(m,qe(f)),r.set(d,m));else{g=m.v!==et;var y=o(()=>qe(f));b(m,y)}var x=Reflect.getOwnPropertyDescriptor(l,d);if(x?.set&&x.set.call(h,f),!g){if(a&&typeof d=="string"){var S=r.get("length"),A=Number(d);Number.isInteger(A)&&A>=S.v&&b(S,A+1)}Ot(n)}return!0},ownKeys(l){s(n);var d=Reflect.ownKeys(l).filter(m=>{var g=r.get(m);return g===void 0||g.v!==et});for(var[f,h]of r)h.v!==et&&!(f in l)&&d.push(f);return d},setPrototypeOf(){Ti()}})}function Ws(t){try{if(t!==null&&typeof t=="object"&&_r in t)return t[_r]}catch{}return t}function dl(t,e){return Object.is(Ws(t),Ws(e))}var Qs,Yn,Zn,Xn;function vl(){if(Qs===void 0){Qs=window,Yn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Zn=rr(e,"firstChild").get,Xn=rr(e,"nextSibling").get,Us(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Us(r)&&(r.__t=void 0)}}function Kt(t=""){return document.createTextNode(t)}function Or(t){return Zn.call(t)}function oa(t){return Xn.call(t)}function c(t,e){return Or(t)}function C(t,e=!1){{var r=Or(t);return r instanceof Comment&&r.data===""?oa(r):r}}function u(t,e=1,r=!1){let a=t;for(;e--;)a=oa(a);return a}function fl(t){t.textContent=""}function Ca(){return!1}function hl(t,e){if(e){const r=document.body;t.autofocus=!0,sr(()=>{document.activeElement===r&&t.focus()})}}let Vs=!1;function pl(){Vs||(Vs=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function Ur(t){var e=Oe,r=Ce;ht(null),qt(null);try{return t()}finally{ht(e),qt(r)}}function xs(t,e,r,a=r){t.addEventListener(e,()=>Ur(r));const n=t.__on_r;n?t.__on_r=()=>{n(),a(!0)}:t.__on_r=()=>a(!0),pl()}function gl(t){Ce===null&&Oe===null&&Ei(),Oe!==null&&(Oe.f&$t)!==0&&Ce===null&&xi(),Er&&Si()}function ml(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function Jt(t,e,r,a=!0){var n=Ce;n!==null&&(n.f&It)!==0&&(t|=It);var i={ctx:Je,deps:null,nodes_start:null,nodes_end:null,f:t|bt,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{ta(i),i.f|=Ta}catch(d){throw at(i),d}else e!==null&&wr(i);if(a){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Br)===0&&(o=o.first),o!==null&&(o.parent=n,n!==null&&ml(o,n),Oe!==null&&(Oe.f&pt)!==0&&(t&Sr)===0)){var l=Oe;(l.effects??=[]).push(o)}}return i}function _l(){return Oe!==null&&!kt}function Es(t){const e=Jt(_s,null,!1);return vt(e,nt),e.teardown=t,e}function Yt(t){gl();var e=Ce.f,r=!Oe&&(e&Ft)!==0&&(e&Ta)===0;if(r){var a=Je;(a.e??=[]).push(t)}else return eo(t)}function eo(t){return Jt(ms|bi,t,!1)}function bl(t){Pt.ensure();const e=Jt(Sr|Br,t,!0);return(r={})=>new Promise(a=>{r.outro?Gt(e,()=>{at(e),a(void 0)}):(at(e),a(void 0))})}function Ra(t){return Jt(ms,t,!1)}function yl(t){return Jt(ka|Br,t,!0)}function Ps(t,e=0){return Jt(_s|e,t,!0)}function M(t,e=[],r=[]){Qn(e,r,a=>{Jt(_s,()=>t(...a.map(s)),!0)})}function Zt(t,e=0){var r=Jt(lr|e,t,!0);return r}function rt(t,e=!0){return Jt(Ft|Br,t,!0,e)}function to(t){var e=t.teardown;if(e!==null){const r=Er,a=Oe;Ks(!0),ht(null);try{e.call(null)}finally{Ks(r),ht(a)}}}function ro(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const n=r.ac;n!==null&&Ur(()=>{n.abort(Jr)});var a=r.next;(r.f&Sr)!==0?r.parent=null:at(r,e),r=a}}function wl(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&Ft)===0&&at(e),e=r}}function at(t,e=!0){var r=!1;(e||(t.f&_i)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(Sl(t.nodes_start,t.nodes_end),r=!0),ro(t,e&&!r),Pa(t,0),vt(t,xr);var a=t.transitions;if(a!==null)for(const i of a)i.stop();to(t);var n=t.parent;n!==null&&n.first!==null&&ao(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function Sl(t,e){for(;t!==null;){var r=t===e?null:oa(t);t.remove(),t=r}}function ao(t){var e=t.parent,r=t.prev,a=t.next;r!==null&&(r.next=a),a!==null&&(a.prev=r),e!==null&&(e.first===t&&(e.first=a),e.last===t&&(e.last=r))}function Gt(t,e){var r=[];$s(t,r,!0),so(r,()=>{at(t),e&&e()})}function so(t,e){var r=t.length;if(r>0){var a=()=>--r||e();for(var n of t)n.out(a)}else e()}function $s(t,e,r){if((t.f&It)===0){if(t.f^=It,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&e.push(o);for(var a=t.first;a!==null;){var n=a.next,i=(a.f&ur)!==0||(a.f&Ft)!==0;$s(a,e,i?r:!1),a=n}}}function Oa(t){no(t,!0)}function no(t,e){if((t.f&It)!==0){t.f^=It,(t.f&nt)===0&&(vt(t,bt),wr(t));for(var r=t.first;r!==null;){var a=r.next,n=(r.f&ur)!==0||(r.f&Ft)!==0;no(r,n?e:!1),r=a}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let Ir=!1;function Fs(t){Ir=t}let Er=!1;function Ks(t){Er=t}let Oe=null,kt=!1;function ht(t){Oe=t}let Ce=null;function qt(t){Ce=t}let Wt=null;function oo(t){Oe!==null&&(Wt===null?Wt=[t]:Wt.push(t))}let ut=null,_t=0,Et=null;function xl(t){Et=t}let io=1,ea=0,Qt=ea;function Js(t){Qt=t}let er=!1;function lo(){return++io}function qa(t){var e=t.f;if((e&bt)!==0)return!0;if((e&cr)!==0){var r=t.deps,a=(e&$t)!==0;if(r!==null){var n,i,o=(e&Ea)!==0,l=a&&Ce!==null&&!er,d=r.length;if((o||l)&&(Ce===null||(Ce.f&xr)===0)){var f=t,h=f.parent;for(n=0;n<d;n++)i=r[n],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=Ea),l&&h!==null&&(h.f&$t)===0&&(f.f^=$t)}for(n=0;n<d;n++)if(i=r[n],qa(i)&&Kn(i),i.wv>t.wv)return!0}(!a||Ce!==null&&!er)&&vt(t,nt)}return!1}function co(t,e,r=!0){var a=t.reactions;if(a!==null&&!Wt?.includes(t))for(var n=0;n<a.length;n++){var i=a[n];(i.f&pt)!==0?co(i,e,!1):e===i&&(r?vt(i,bt):(i.f&nt)!==0&&vt(i,cr),wr(i))}}function uo(t){var e=ut,r=_t,a=Et,n=Oe,i=er,o=Wt,l=Je,d=kt,f=Qt,h=t.f;ut=null,_t=0,Et=null,er=(h&$t)!==0&&(kt||!Ir||Oe===null),Oe=(h&(Ft|Sr))===0?t:null,Wt=null,Mr(t.ctx),kt=!1,Qt=++ea,t.ac!==null&&(Ur(()=>{t.ac.abort(Jr)}),t.ac=null);try{t.f|=rs;var m=t.fn,g=m(),p=t.deps;if(ut!==null){var _;if(Pa(t,_t),p!==null&&_t>0)for(p.length=_t+ut.length,_=0;_<ut.length;_++)p[_t+_]=ut[_];else t.deps=p=ut;if(!er||(h&pt)!==0&&t.reactions!==null)for(_=_t;_<p.length;_++)(p[_].reactions??=[]).push(t)}else p!==null&&_t<p.length&&(Pa(t,_t),p.length=_t);if(zr()&&Et!==null&&!kt&&p!==null&&(t.f&(pt|cr|bt))===0)for(_=0;_<Et.length;_++)co(Et[_],t);return n!==null&&n!==t&&(ea++,Et!==null&&(a===null?a=Et:a.push(...Et))),(t.f&mr)!==0&&(t.f^=mr),g}catch(y){return Un(y)}finally{t.f^=rs,ut=e,_t=r,Et=a,Oe=n,er=i,Wt=o,Mr(l),kt=d,Qt=f}}function El(t,e){let r=e.reactions;if(r!==null){var a=hi.call(r,t);if(a!==-1){var n=r.length-1;n===0?r=e.reactions=null:(r[a]=r[n],r.pop())}}r===null&&(e.f&pt)!==0&&(ut===null||!ut.includes(e))&&(vt(e,cr),(e.f&($t|Ea))===0&&(e.f^=Ea),Fn(e),Pa(e,0))}function Pa(t,e){var r=t.deps;if(r!==null)for(var a=e;a<r.length;a++)El(t,r[a])}function ta(t){var e=t.f;if((e&xr)===0){vt(t,nt);var r=Ce,a=Ir;Ce=t,Ir=!0;try{(e&lr)!==0?wl(t):ro(t),to(t);var n=uo(t);t.teardown=typeof n=="function"?n:null,t.wv=io;var i;Nn&&Ji&&(t.f&bt)!==0&&t.deps}finally{Ir=a,Ce=r}}}async function Pl(){await Promise.resolve(),tl()}function s(t){var e=t.f,r=(e&pt)!==0;if(Oe!==null&&!kt){var a=Ce!==null&&(Ce.f&xr)!==0;if(!a&&!Wt?.includes(t)){var n=Oe.deps;if((Oe.f&rs)!==0)t.rv<ea&&(t.rv=ea,ut===null&&n!==null&&n[_t]===t?_t++:ut===null?ut=[t]:(!er||!ut.includes(t))&&ut.push(t));else{(Oe.deps??=[]).push(t);var i=t.reactions;i===null?t.reactions=[Oe]:i.includes(Oe)||i.push(Oe)}}}else if(r&&t.deps===null&&t.effects===null){var o=t,l=o.parent;l!==null&&(l.f&$t)===0&&(o.f^=$t)}if(Er){if(ar.has(t))return ar.get(t);if(r){o=t;var d=o.v;return((o.f&nt)===0&&o.reactions!==null||vo(o))&&(d=Ss(o)),ar.set(o,d),d}}else r&&(o=t,qa(o)&&Kn(o));if((t.f&mr)!==0)throw t.v;return t.v}function vo(t){if(t.v===et)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(ar.has(e)||(e.f&pt)!==0&&vo(e))return!0;return!1}function Pr(t){var e=kt;try{return kt=!0,t()}finally{kt=e}}const $l=-7169;function vt(t,e){t.f=t.f&$l|e}function Al(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const Tl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function kl(t){return Tl.includes(t)}const Dl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Il(t){return t=t.toLowerCase(),Dl[t]??t}const Nl=["touchstart","touchmove"];function Ml(t){return Nl.includes(t)}const fo=new Set,ns=new Set;function As(t,e,r,a={}){function n(i){if(a.capture||Kr.call(e,i),!i.cancelBubble)return Ur(()=>r?.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?sr(()=>{e.addEventListener(t,n,a)}):e.addEventListener(t,n,a),n}function os(t,e,r,a={}){var n=As(e,t,r,a);return()=>{t.removeEventListener(e,n,a)}}function Nr(t,e,r,a,n){var i={capture:a,passive:n},o=As(t,e,r,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Es(()=>{e.removeEventListener(t,o,i)})}function Ve(t){for(var e=0;e<t.length;e++)fo.add(t[e]);for(var r of ns)r(t)}let Ys=null;function Kr(t){var e=this,r=e.ownerDocument,a=t.type,n=t.composedPath?.()||[],i=n[0]||t.target;Ys=t;var o=0,l=Ys===t&&t.__root;if(l){var d=n.indexOf(l);if(d!==-1&&(e===document||e===window)){t.__root=e;return}var f=n.indexOf(e);if(f===-1)return;d<=f&&(o=d)}if(i=n[o]||t.target,i!==e){ts(t,"currentTarget",{configurable:!0,get(){return i||r}});var h=Oe,m=Ce;ht(null),qt(null);try{for(var g,p=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var y=i["__"+a];if(y!=null&&(!i.disabled||t.target===i))if(na(y)){var[x,...S]=y;x.apply(i,[t,...S])}else y.call(i,t)}catch(A){g?p.push(A):g=A}if(t.cancelBubble||_===e||_===null)break;i=_}if(g){for(let A of p)queueMicrotask(()=>{throw A});throw g}}finally{t.__root=e,delete t.currentTarget,ht(h),qt(m)}}}function ho(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function qr(t,e){var r=Ce;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function w(t,e){var r=(e&zi)!==0,a=(e&Ui)!==0,n,i=!t.startsWith("<!>");return()=>{n===void 0&&(n=ho(i?t:"<!>"+t),r||(n=Or(n)));var o=a||Yn?document.importNode(n,!0):n.cloneNode(!0);if(r){var l=Or(o),d=o.lastChild;qr(l,d)}else qr(o,o);return o}}function Cl(t,e,r="svg"){var a=!t.startsWith("<!>"),n=`<${r}>${a?t:"<!>"+t}</${r}>`,i;return()=>{if(!i){var o=ho(n),l=Or(o);i=Or(l)}var d=i.cloneNode(!0);return qr(d,d),d}}function Rl(t,e){return Cl(t,e,"svg")}function dt(t=""){{var e=Kt(t+"");return qr(e,e),e}}function X(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Kt();return t.append(e,r),qr(e,r),t}function v(t,e){t!==null&&t.before(e)}let $a=!0;function Zs(t){$a=t}function I(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??=t.nodeValue)&&(t.__t=r,t.nodeValue=r+"")}function Ol(t,e){return ql(t,e)}const kr=new Map;function ql(t,{target:e,anchor:r,props:a={},events:n,context:i,intro:o=!0}){vl();var l=new Set,d=m=>{for(var g=0;g<m.length;g++){var p=m[g];if(!l.has(p)){l.add(p);var _=Ml(p);e.addEventListener(p,Kr,{passive:_});var y=kr.get(p);y===void 0?(document.addEventListener(p,Kr,{passive:_}),kr.set(p,1)):kr.set(p,y+1)}}};d(ps(fo)),ns.add(d);var f=void 0,h=bl(()=>{var m=r??e.appendChild(Kt());return sl(m,{pending:()=>{}},g=>{if(i){J({});var p=Je;p.c=i}n&&(a.$$events=n),$a=o,f=t(g,a)||{},$a=!0,i&&Y()}),()=>{for(var g of l){e.removeEventListener(g,Kr);var p=kr.get(g);--p===0?(document.removeEventListener(g,Kr),kr.delete(g)):kr.set(g,p)}ns.delete(d),m!==r&&m.parentNode?.removeChild(m)}});return jl.set(f,h),f}let jl=new WeakMap;function P(t,e,r=!1){var a=t,n=null,i=null,o=et,l=r?ur:0,d=!1;const f=(p,_=!0)=>{d=!0,g(_,p)};var h=null;function m(){h!==null&&(h.lastChild.remove(),a.before(h),h=null);var p=o?n:i,_=o?i:n;p&&Oa(p),_&&Gt(_,()=>{o?i=null:n=null})}const g=(p,_)=>{if(o!==(o=p)){var y=Ca(),x=a;if(y&&(h=document.createDocumentFragment(),h.append(x=Kt())),o?n??=_&&rt(()=>_(x)):i??=_&&rt(()=>_(x)),y){var S=Ue,A=o?n:i,T=o?i:n;A&&S.skipped_effects.delete(A),T&&S.skipped_effects.add(T),S.add_callback(m)}else m()}};Zt(()=>{d=!1,e(f),d||g(null,null)},l)}function Bl(t,e,r){var a=t,n=et,i,o,l=null,d=zr()?Ki:Bn;function f(){i&&Gt(i),l!==null&&(l.lastChild.remove(),a.before(l),l=null),i=o}Zt(()=>{if(d(n,n=e())){var h=a,m=Ca();m&&(l=document.createDocumentFragment(),l.append(h=Kt())),o=rt(()=>r(h)),m?Ue.add_callback(f):f()}})}function Vt(t,e){return e}function Ll(t,e,r){for(var a=t.items,n=[],i=e.length,o=0;o<i;o++)$s(e[o].e,n,!0);var l=i>0&&n.length===0&&r!==null;if(l){var d=r.parentNode;fl(d),d.append(r),a.clear(),Ct(t,e[0].prev,e[i-1].next)}so(n,()=>{for(var f=0;f<i;f++){var h=e[f];l||(a.delete(h.k),Ct(t,h.prev,h.next)),at(h.e,!l)}})}function Fe(t,e,r,a,n,i=null){var o=t,l={flags:e,items:new Map,first:null},d=(e&qn)!==0;if(d){var f=t;o=f.appendChild(Kt())}var h=null,m=!1,g=new Map,p=ws(()=>{var S=r();return na(S)?S:S==null?[]:ps(S)}),_,y;function x(){zl(y,_,l,g,o,n,e,a,r),i!==null&&(_.length===0?h?Oa(h):h=rt(()=>i(o)):h!==null&&Gt(h,()=>{h=null}))}Zt(()=>{y??=Ce,_=s(p);var S=_.length;if(!(m&&S===0)){m=S===0;var A,T,k,$;if(Ca()){var D=new Set,R=Ue;for(T=0;T<S;T+=1){k=_[T],$=a(k,T);var E=l.items.get($)??g.get($);E?(e&(Da|Ia))!==0&&po(E,k,T,e):(A=go(null,l,null,null,k,$,T,n,e,r,!0),g.set($,A)),D.add($)}for(const[z,te]of l.items)D.has(z)||R.skipped_effects.add(te.e);R.add_callback(x)}else x();s(p)}})}function zl(t,e,r,a,n,i,o,l,d){var f=(o&Ii)!==0,h=(o&(Da|Ia))!==0,m=e.length,g=r.items,p=r.first,_=p,y,x=null,S,A=[],T=[],k,$,D,R;if(f)for(R=0;R<m;R+=1)k=e[R],$=l(k,R),D=g.get($),D!==void 0&&(D.a?.measure(),(S??=new Set).add(D));for(R=0;R<m;R+=1){if(k=e[R],$=l(k,R),D=g.get($),D===void 0){var E=a.get($);if(E!==void 0){a.delete($),g.set($,E);var z=x?x.next:_;Ct(r,x,E),Ct(r,E,z),Fa(E,z,n),x=E}else{var te=_?_.e.nodes_start:n;x=go(te,r,x,x===null?r.first:x.next,k,$,R,i,o,d)}g.set($,x),A=[],T=[],_=x.next;continue}if(h&&po(D,k,R,o),(D.e.f&It)!==0&&(Oa(D.e),f&&(D.a?.unfix(),(S??=new Set).delete(D))),D!==_){if(y!==void 0&&y.has(D)){if(A.length<T.length){var K=T[0],U;x=K.prev;var ce=A[0],pe=A[A.length-1];for(U=0;U<A.length;U+=1)Fa(A[U],K,n);for(U=0;U<T.length;U+=1)y.delete(T[U]);Ct(r,ce.prev,pe.next),Ct(r,x,ce),Ct(r,pe,K),_=K,x=pe,R-=1,A=[],T=[]}else y.delete(D),Fa(D,_,n),Ct(r,D.prev,D.next),Ct(r,D,x===null?r.first:x.next),Ct(r,x,D),x=D;continue}for(A=[],T=[];_!==null&&_.k!==$;)(_.e.f&It)===0&&(y??=new Set).add(_),T.push(_),_=_.next;if(_===null)continue;D=_}A.push(D),x=D,_=D.next}if(_!==null||y!==void 0){for(var Se=y===void 0?[]:ps(y);_!==null;)(_.e.f&It)===0&&Se.push(_),_=_.next;var G=Se.length;if(G>0){var ve=(o&qn)!==0&&m===0?n:null;if(f){for(R=0;R<G;R+=1)Se[R].a?.measure();for(R=0;R<G;R+=1)Se[R].a?.fix()}Ll(r,Se,ve)}}f&&sr(()=>{if(S!==void 0)for(D of S)D.a?.apply()}),t.first=r.first&&r.first.e,t.last=x&&x.e;for(var ye of a.values())at(ye.e);a.clear()}function po(t,e,r,a){(a&Da)!==0&&Rr(t.v,e),(a&Ia)!==0?Rr(t.i,r):t.i=r}function go(t,e,r,a,n,i,o,l,d,f,h){var m=(d&Da)!==0,g=(d&Ni)===0,p=m?g?ul(n,!1,!1):nr(n):n,_=(d&Ia)===0?o:nr(o),y={i:_,v:p,k:i,a:null,e:null,prev:r,next:a};try{if(t===null){var x=document.createDocumentFragment();x.append(t=Kt())}return y.e=rt(()=>l(t,p,_,f),Fi),y.e.prev=r&&r.e,y.e.next=a&&a.e,r===null?h||(e.first=y):(r.next=y,r.e.next=y.e),a!==null&&(a.prev=y,a.e.prev=y.e),y}finally{}}function Fa(t,e,r){for(var a=t.next?t.next.e.nodes_start:r,n=e?e.e.nodes_start:r,i=t.e.nodes_start;i!==null&&i!==a;){var o=oa(i);n.before(i),i=o}}function Ct(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function he(t,e,...r){var a=t,n=de,i;Zt(()=>{n!==(n=e())&&(i&&(at(i),i=null),i=rt(()=>n(a,...r)))},ur)}function br(t,e,r){var a=t,n,i,o=null,l=null;function d(){i&&(Gt(i),i=null),o&&(o.lastChild.remove(),a.before(o),o=null),i=l,l=null}Zt(()=>{if(n!==(n=e())){var f=Ca();if(n){var h=a;f&&(o=document.createDocumentFragment(),o.append(h=Kt()),i&&Ue.skipped_effects.add(i)),l=rt(()=>r(h,n))}f?Ue.add_callback(d):d()}},ur)}function Ul(t,e,r,a,n,i){var o,l,d=null,f=t,h;Zt(()=>{const m=e()||null;var g=Gi;m!==o&&(h&&(m===null?Gt(h,()=>{h=null,l=null}):m===l?Oa(h):(at(h),Zs(!1))),m&&m!==l&&(h=rt(()=>{if(d=document.createElementNS(g,m),qr(d,d),a){var p=d.appendChild(Kt());a(d,p)}Ce.nodes_end=d,f.before(d)})),o=m,o&&(l=o),Zs(!0))},ur)}function Hl(t,e){var r=void 0,a;Zt(()=>{r!==(r=e())&&(a&&(at(a),a=null),r&&(a=rt(()=>{Ra(()=>r(t))})))})}function mo(t){var e,r,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(r=mo(t[e]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);return a}function Gl(){for(var t,e,r=0,a="",n=arguments.length;r<n;r++)(t=arguments[r])&&(e=mo(t))&&(a&&(a+=" "),a+=e);return a}function Wl(t){return typeof t=="object"?Gl(t):t??""}const Xs=[...` 	
\r\f \v\uFEFF`];function Ql(t,e,r){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),r){for(var n in r)if(r[n])a=a?a+" "+n:n;else if(a.length)for(var i=n.length,o=0;(o=a.indexOf(n,o))>=0;){var l=o+i;(o===0||Xs.includes(a[o-1]))&&(l===a.length||Xs.includes(a[l]))?a=(o===0?"":a.substring(0,o))+a.substring(l+1):o=l}}return a===""?null:a}function en(t,e=!1){var r=e?" !important;":";",a="";for(var n in t){var i=t[n];i!=null&&i!==""&&(a+=" "+n+": "+i+r)}return a}function Ka(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Vl(t,e){if(e){var r="",a,n;if(Array.isArray(e)?(a=e[0],n=e[1]):a=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,d=[];a&&d.push(...Object.keys(a).map(Ka)),n&&d.push(...Object.keys(n).map(Ka));var f=0,h=-1;const y=t.length;for(var m=0;m<y;m++){var g=t[m];if(l?g==="/"&&t[m-1]==="*"&&(l=!1):i?i===g&&(i=!1):g==="/"&&t[m+1]==="*"?l=!0:g==='"'||g==="'"?i=g:g==="("?o++:g===")"&&o--,!l&&i===!1&&o===0){if(g===":"&&h===-1)h=m;else if(g===";"||m===y-1){if(h!==-1){var p=Ka(t.substring(f,h).trim());if(!d.includes(p)){g!==";"&&m++;var _=t.substring(f,m).trim();r+=" "+_+";"}}f=m+1,h=-1}}}}return a&&(r+=en(a)),n&&(r+=en(n,!0)),r=r.trim(),r===""?null:r}return t==null?null:String(t)}function ke(t,e,r,a,n,i){var o=t.__className;if(o!==r||o===void 0){var l=Ql(r,a,i);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t.__className=r}else if(i&&n!==i)for(var d in i){var f=!!i[d];(n==null||f!==!!n[d])&&t.classList.toggle(d,f)}return i}function Ja(t,e={},r,a){for(var n in r){var i=r[n];e[n]!==i&&(r[n]==null?t.style.removeProperty(n):t.style.setProperty(n,i,a))}}function _o(t,e,r,a){var n=t.__style;if(n!==e){var i=Vl(e,a);i==null?t.removeAttribute("style"):t.style.cssText=i,t.__style=e}else a&&(Array.isArray(a)?(Ja(t,r?.[0],a[0]),Ja(t,r?.[1],a[1],"important")):Ja(t,r,a));return a}function Aa(t,e,r=!1){if(t.multiple){if(e==null)return;if(!na(e))return Qi();for(var a of t.options)a.selected=e.includes(Zr(a));return}for(a of t.options){var n=Zr(a);if(dl(n,e)){a.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function bo(t){var e=new MutationObserver(()=>{Aa(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Es(()=>{e.disconnect()})}function ra(t,e,r=e){var a=!0;xs(t,"change",n=>{var i=n?"[selected]":":checked",o;if(t.multiple)o=[].map.call(t.querySelectorAll(i),Zr);else{var l=t.querySelector(i)??t.querySelector("option:not([disabled])");o=l&&Zr(l)}r(o)}),Ra(()=>{var n=e();if(Aa(t,n,a),a&&n===void 0){var i=t.querySelector(":checked");i!==null&&(n=Zr(i),r(n))}t.__value=n,a=!1}),bo(t)}function Zr(t){return"__value"in t?t.__value:t.value}const Qr=Symbol("class"),Vr=Symbol("style"),yo=Symbol("is custom element"),wo=Symbol("is html");function Fl(t,e){var r=Ts(t);r.value===(r.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e??"")}function Kl(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function or(t,e,r,a){var n=Ts(t);n[e]!==(n[e]=r)&&(e==="loading"&&(t[yi]=r),r==null?t.removeAttribute(e):typeof r!="string"&&So(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function Jl(t,e,r,a,n=!1,i=!1){var o=Ts(t),l=o[yo],d=!o[wo],f=e||{},h=t.tagName==="OPTION";for(var m in e)m in r||(r[m]=null);r.class?r.class=Wl(r.class):r[Qr]&&(r.class=null),r[Vr]&&(r.style??=null);var g=So(t);for(const k in r){let $=r[k];if(h&&k==="value"&&$==null){t.value=t.__value="",f[k]=$;continue}if(k==="class"){var p=t.namespaceURI==="http://www.w3.org/1999/xhtml";ke(t,p,$,a,e?.[Qr],r[Qr]),f[k]=$,f[Qr]=r[Qr];continue}if(k==="style"){_o(t,$,e?.[Vr],r[Vr]),f[k]=$,f[Vr]=r[Vr];continue}var _=f[k];if(!($===_&&!($===void 0&&t.hasAttribute(k)))){f[k]=$;var y=k[0]+k[1];if(y!=="$$")if(y==="on"){const D={},R="$$"+k;let E=k.slice(2);var x=kl(E);if(Al(E)&&(E=E.slice(0,-7),D.capture=!0),!x&&_){if($!=null)continue;t.removeEventListener(E,f[R],D),f[R]=null}if($!=null)if(x)t[`__${E}`]=$,Ve([E]);else{let z=function(te){f[k].call(this,te)};var T=z;f[R]=As(E,t,z,D)}else x&&(t[`__${E}`]=void 0)}else if(k==="style")or(t,k,$);else if(k==="autofocus")hl(t,!!$);else if(!l&&(k==="__value"||k==="value"&&$!=null))t.value=t.__value=$;else if(k==="selected"&&h)Kl(t,$);else{var S=k;d||(S=Il(S));var A=S==="defaultValue"||S==="defaultChecked";if($==null&&!l&&!A)if(o[k]=null,S==="value"||S==="checked"){let D=t;const R=e===void 0;if(S==="value"){let E=D.defaultValue;D.removeAttribute(S),D.defaultValue=E,D.value=D.__value=R?E:null}else{let E=D.defaultChecked;D.removeAttribute(S),D.defaultChecked=E,D.checked=R?E:!1}}else t.removeAttribute(k);else A||g.includes(S)&&(l||typeof $!="string")?(t[S]=$,S in o&&(o[S]=et)):typeof $!="function"&&or(t,S,$)}}}return f}function is(t,e,r=[],a=[],n,i=!1,o=!1){Qn(r,a,l=>{var d=void 0,f={},h=t.nodeName==="SELECT",m=!1;if(Zt(()=>{var p=e(...l.map(s)),_=Jl(t,d,p,n,i,o);m&&h&&"value"in p&&Aa(t,p.value);for(let x of Object.getOwnPropertySymbols(f))p[x]||at(f[x]);for(let x of Object.getOwnPropertySymbols(p)){var y=p[x];x.description===Wi&&(!d||y!==d[x])&&(f[x]&&at(f[x]),f[x]=rt(()=>Hl(t,()=>y))),_[x]=y}d=_}),h){var g=t;Ra(()=>{Aa(g,d.value,!0),bo(g)})}m=!0})}function Ts(t){return t.__attributes??={[yo]:t.nodeName.includes("-"),[wo]:t.namespaceURI===Hi}}var tn=new Map;function So(t){var e=t.getAttribute("is")||t.nodeName,r=tn.get(e);if(r)return r;tn.set(e,r=[]);for(var a,n=t,i=Element.prototype;i!==n;){a=pi(n);for(var o in a)a[o].set&&r.push(o);n=gs(n)}return r}const Yl=()=>performance.now(),Ht={tick:t=>requestAnimationFrame(t),now:()=>Yl(),tasks:new Set};function xo(){const t=Ht.now();Ht.tasks.forEach(e=>{e.c(t)||(Ht.tasks.delete(e),e.f())}),Ht.tasks.size!==0&&Ht.tick(xo)}function Zl(t){let e;return Ht.tasks.size===0&&Ht.tick(xo),{promise:new Promise(r=>{Ht.tasks.add(e={c:t,f:r})}),abort(){Ht.tasks.delete(e)}}}function ha(t,e){Ur(()=>{t.dispatchEvent(new CustomEvent(e))})}function Xl(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function rn(t){const e={},r=t.split(";");for(const a of r){const[n,i]=a.split(":");if(!n||i===void 0)break;const o=Xl(n.trim());e[o]=i.trim()}return e}const ec=t=>t;function Eo(t,e,r,a){var n=(t&ji)!==0,i=(t&Bi)!==0,o=n&&i,l=(t&Li)!==0,d=o?"both":n?"in":"out",f,h=e.inert,m=e.style.overflow,g,p;function _(){return Ur(()=>f??=r()(e,a?.()??{},{direction:d}))}var y={is_global:l,in(){if(e.inert=h,!n){p?.abort(),p?.reset?.();return}i||g?.abort(),ha(e,"introstart"),g=ls(e,_(),p,1,()=>{ha(e,"introend"),g?.abort(),g=f=void 0,e.style.overflow=m})},out(T){if(!i){T?.(),f=void 0;return}e.inert=!0,ha(e,"outrostart"),p=ls(e,_(),g,0,()=>{ha(e,"outroend"),T?.()})},stop:()=>{g?.abort(),p?.abort()}},x=Ce;if((x.transitions??=[]).push(y),n&&$a){var S=l;if(!S){for(var A=x.parent;A&&(A.f&ur)!==0;)for(;(A=A.parent)&&(A.f&lr)===0;);S=!A||(A.f&Ta)!==0}S&&Ra(()=>{Pr(()=>y.in())})}}function ls(t,e,r,a,n){var i=a===1;if(Dr(e)){var o,l=!1;return sr(()=>{if(!l){var x=e({direction:i?"in":"out"});o=ls(t,x,r,a,n)}}),{abort:()=>{l=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(r?.deactivate(),!e?.duration)return n(),{abort:de,deactivate:de,reset:de,t:()=>a};const{delay:d=0,css:f,tick:h,easing:m=ec}=e;var g=[];if(i&&r===void 0&&(h&&h(0,1),f)){var p=rn(f(0,1));g.push(p,p)}var _=()=>1-a,y=t.animate(g,{duration:d,fill:"forwards"});return y.onfinish=()=>{y.cancel();var x=r?.t()??1-a;r?.abort();var S=a-x,A=e.duration*Math.abs(S),T=[];if(A>0){var k=!1;if(f)for(var $=Math.ceil(A/16.666666666666668),D=0;D<=$;D+=1){var R=x+S*m(D/$),E=rn(f(R,1-R));T.push(E),k||=E.overflow==="hidden"}k&&(t.style.overflow="hidden"),_=()=>{var z=y.currentTime;return x+S*m(z/A)},h&&Zl(()=>{if(y.playState!=="running")return!1;var z=_();return h(z,1-z),!0})}y=t.animate(T,{duration:A,fill:"forwards"}),y.onfinish=()=>{_=()=>a,h?.(a,1-a),n()}},{abort:()=>{y&&(y.cancel(),y.effect=null,y.onfinish=de)},deactivate:()=>{n=de},reset:()=>{a===0&&h?.(1,0)},t:()=>_()}}function We(t,e,r=e){var a=new WeakSet;xs(t,"input",async n=>{var i=n?t.defaultValue:t.value;if(i=Ya(t)?Za(i):i,r(i),Ue!==null&&a.add(Ue),await Pl(),i!==(i=e())){var o=t.selectionStart,l=t.selectionEnd;t.value=i??"",l!==null&&(t.selectionStart=o,t.selectionEnd=Math.min(l,t.value.length))}}),Pr(e)==null&&t.value&&(r(Ya(t)?Za(t.value):t.value),Ue!==null&&a.add(Ue)),Ps(()=>{var n=e();if(t===document.activeElement){var i=ya??Ue;if(a.has(i))return}Ya(t)&&n===Za(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function cs(t,e,r=e){xs(t,"change",a=>{var n=a?t.defaultChecked:t.checked;r(n)}),Pr(e)==null&&r(t.checked),Ps(()=>{var a=e();t.checked=!!a})}function Ya(t){var e=t.type;return e==="number"||e==="range"}function Za(t){return t===""?null:+t}let pa=!1;function tc(t){var e=pa;try{return pa=!1,[t(),pa]}finally{pa=e}}const rc={get(t,e){if(!t.exclude.includes(e))return t.props[e]},set(t,e){return!1},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function we(t,e,r){return new Proxy({props:t,exclude:e},rc)}const ac={get(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Dr(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a)return a[e]}},set(t,e,r){let a=t.props.length;for(;a--;){let n=t.props[a];Dr(n)&&(n=n());const i=rr(n,e);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Dr(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a){const n=rr(a,e);return n&&!n.configurable&&(n.configurable=!0),n}}},has(t,e){if(e===_r||e===Rn)return!1;for(let r of t.props)if(Dr(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(t){const e=[];for(let r of t.props)if(Dr(r)&&(r=r()),!!r){for(const a in r)e.includes(a)||e.push(a);for(const a of Object.getOwnPropertySymbols(r))e.includes(a)||e.push(a)}return e}};function Ee(...t){return new Proxy({props:t},ac)}function me(t,e,r,a){var n=!Lr||(r&Ci)!==0,i=(r&Oi)!==0,o=(r&qi)!==0,l=a,d=!0,f=()=>(d&&(d=!1,l=o?Pr(a):a),l),h;if(i){var m=_r in t||Rn in t;h=rr(t,e)?.set??(m&&e in t?T=>t[e]=T:void 0)}var g,p=!1;i?[g,p]=tc(()=>t[e]):g=t[e],g===void 0&&a!==void 0&&(g=f(),h&&(n&&$i(),h(g)));var _;if(n?_=()=>{var T=t[e];return T===void 0?f():(d=!0,T)}:_=()=>{var T=t[e];return T!==void 0&&(l=void 0),T===void 0?l:T},n&&(r&Ri)===0)return _;if(h){var y=t.$$legacy;return(function(T,k){return arguments.length>0?((!n||!k||y||p)&&h(k?_():T),T):_()})}var x=!1,S=((r&Mi)!==0?Ma:ws)(()=>(x=!1,_()));i&&s(S);var A=Ce;return(function(T,k){if(arguments.length>0){const $=k?s(S):n&&i?qe(T):T;return b(S,$),x=!0,l!==void 0&&(l=$),T}return Er&&x||(A.f&xr)!==0?S.v:s(S)})}function ks(t){Je===null&&On(),Lr&&Je.l!==null?nc(Je).m.push(t):Yt(()=>{const e=Pr(t);if(typeof e=="function")return e})}function sc(t){Je===null&&On(),ks(()=>()=>Pr(t))}function nc(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const oc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(oc);const ic="modulepreload",lc=function(t){return"/"+t},an={},us=function(e,r,a){let n=Promise.resolve();if(r&&r.length>0){let f=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};var o=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),d=l?.nonce||l?.getAttribute("nonce");n=f(r.map(h=>{if(h=lc(h),h in an)return;an[h]=!0;const m=h.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const p=document.createElement("link");if(p.rel=m?"stylesheet":ic,m||(p.as="script"),p.crossOrigin="",p.href=h,d&&p.setAttribute("nonce",d),document.head.appendChild(p),m)return new Promise((_,y)=>{p.addEventListener("load",_),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(l){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=l,window.dispatchEvent(d),!d.defaultPrevented)throw l}return n.then(l=>{for(const d of l||[])d.status==="rejected"&&i(d.reason);return e().catch(i)})};class Xr extends Map{#e=new Map;#t=j(0);#r=j(0);#o=Qt||-1;constructor(e){if(super(),e){for(var[r,a]of e)super.set(r,a);this.#r.v=super.size}}#i(e){return Qt===this.#o?j(e):nr(e)}has(e){var r=this.#e,a=r.get(e);if(a===void 0){var n=super.get(e);if(n!==void 0)a=this.#i(0),r.set(e,a);else return s(this.#t),!1}return s(a),!0}forEach(e,r){this.#n(),super.forEach(e,r)}get(e){var r=this.#e,a=r.get(e);if(a===void 0){var n=super.get(e);if(n!==void 0)a=this.#i(0),r.set(e,a);else{s(this.#t);return}}return s(a),super.get(e)}set(e,r){var a=this.#e,n=a.get(e),i=super.get(e),o=super.set(e,r),l=this.#t;if(n===void 0)n=this.#i(0),a.set(e,n),b(this.#r,super.size),Ot(l);else if(i!==r){Ot(n);var d=l.reactions===null?null:new Set(l.reactions),f=d===null||!n.reactions?.every(h=>d.has(h));f&&Ot(l)}return o}delete(e){var r=this.#e,a=r.get(e),n=super.delete(e);return a!==void 0&&(r.delete(e),b(this.#r,super.size),b(a,-1),Ot(this.#t)),n}clear(){if(super.size!==0){super.clear();var e=this.#e;b(this.#r,0);for(var r of e.values())b(r,-1);Ot(this.#t),e.clear()}}#n(){s(this.#t);var e=this.#e;if(this.#r.v!==e.size){for(var r of super.keys())if(!e.has(r)){var a=this.#i(0);e.set(r,a)}}for([,a]of this.#e)s(a)}keys(){return s(this.#t),super.keys()}values(){return this.#n(),super.values()}entries(){return this.#n(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#r),super.size}}class cc{#e;#t;constructor(e,r){this.#e=e,this.#t=ys(r)}get current(){return this.#t(),this.#e()}}const uc=/\(.+\)/,dc=new Set(["all","print","screen","and","or","not","only"]);class vc extends cc{constructor(e,r){let a=uc.test(e)||e.split(/[\s,]+/).some(i=>dc.has(i.trim()))?e:`(${e})`;const n=window.matchMedia(a);super(()=>n.matches,i=>os(n,"change",i))}}const fc=typeof window<"u"?window:void 0;function hc(t){let e=t.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}class pc{#e;#t;constructor(e={}){const{window:r=fc,document:a=r?.document}=e;r!==void 0&&(this.#e=a,this.#t=ys(n=>{const i=os(r,"focusin",n),o=os(r,"focusout",n);return()=>{i(),o()}}))}get current(){return this.#t?.(),this.#e?hc(this.#e):null}}new pc;function gc(t){return typeof t=="function"}function mc(t,e){if(gc(t)){const a=t();return a===void 0?e:a}return t===void 0?e:t}function _c(t,e){let r=j(null);const a=F(()=>mc(e,250));function n(...i){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let o,l;const d=new Promise((f,h)=>{o=f,l=h});b(r,{timeout:null,runner:null,promise:d,resolve:o,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const o=s(r);b(r,null);try{o.resolve(await t.apply(this,i))}catch(l){o.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(a)),s(r).promise}return n.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),b(r,null))},n.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(n,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),n}function Dt(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(e){return console.warn("[ProductsStore] Erreur parsing JSON:",e),null}}function ia(t){return t?.length?t.filter(e=>e.quantity!=null&&e.unit).map(e=>({q:typeof e.quantity=="number"?e.quantity:parseFloat(e.quantity),u:e.unit})).filter(e=>!isNaN(e.q)):[]}function la(t){if(!t?.length)return[];const e=new Map;return t.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const a=e.get(r.u)||0;e.set(r.u,a+r.q)}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function ca(t,e){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!e?.length){const l=t.map(d=>tr(d.q.toString(),d.u)).join(" et ");return{numeric:t,display:l}}const r=new Map,a=new Map;t.forEach(l=>{const d=parseFloat(l.q);isNaN(d)||r.set(l.u,(r.get(l.u)||0)+d)}),e.forEach(l=>{a.set(l.u,(a.get(l.u)||0)+l.q)});const n=[],i=[];r.forEach((l,d)=>{const f=a.get(d)||0,h=l-f;h>0&&(n.push({q:h,u:d}),i.push(tr(h.toString(),d)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:n,display:o}}function ot(t){return t?.length?t.map(e=>tr(e.q.toString(),e.u)).join(" et "):"-"}function tr(t,e){const r=parseFloat(t);if(isNaN(r))return`${t} ${e}`;if((e==="gr."||e==="ml")&&r>=1e3){const a=r/1e3,n=e==="gr."?"kg":"l.";let o=(Math.round(a*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${n}`}if(!["gr.","ml","kg","l."].includes(e)){let n=(Math.round(r*10)/10).toString();return n.endsWith(",0")&&(n=n.slice(0,-2)),`${n} ${e}`}return`${r} ${e}`}function ja(t){if(!t?.length)return[];const e=new Map;return t.forEach(({q:r,u:a})=>{if(typeof r=="number"&&!isNaN(r)){const n=e.get(a)||0;e.set(a,n+r)}}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function Po(t){return t?Object.values(t).some(e=>e.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function $o(t){if(!t)return[];const e=[];return Object.entries(t).forEach(([r,a])=>{a.recipes?.forEach(n=>{e.push({...n,date:r,dateTimeService:r})})}),e}function Ba(t){if(!t)return[];const e=Object.values(t).flatMap(r=>r.totalConsolidated);return ja(e)}function Ds(t,e){const r=new Map,a=new Map;t.forEach(({q:o,u:l})=>{r.set(l,(r.get(l)||0)+o)}),e.forEach(({q:o,u:l})=>{a.set(l,(a.get(l)||0)+o)});const n=[],i=new Set([...r.keys(),...a.keys()]);for(const o of i){const l=r.get(o)||0,d=a.get(o)||0,f=l-d;Math.abs(f)>.001&&n.push({q:f,u:o})}return n}function La(t){if(!t?.length)return"Équilibré";const e=t.filter(a=>a.q>0),r=t.filter(a=>a.q<0);if(e.length>0&&r.length>0){const a=e.map(i=>tr(i.q.toString(),i.u)).join(" et "),n=r.map(i=>tr(Math.abs(i.q).toString(),i.u)).join(" et ");return`${a} disponibles, ${n} manquant${r.length>1?"s":""}`}else return e.length>0?e.map(a=>"+"+tr(a.q.toString(),a.u)).join(" et ")+" disponibles":r.length>0?r.map(a=>tr(Math.abs(a.q).toString(),a.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function Ao(t,e){if(e.searchQuery.trim()){const r=e.searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(e.selectedStores.length>0&&(!t.storeInfo?.storeName||!e.selectedStores.includes(t.storeInfo.storeName))||e.selectedWho.length>0&&(!t.who||!t.who.some(r=>e.selectedWho.includes(r)))||e.selectedProductTypes.length>0&&(!t.productType||!e.selectedProductTypes.includes(t.productType))||e.selectedTemperatures.length>0&&!(e.selectedTemperatures.includes("frais")&&t.pFrais||e.selectedTemperatures.includes("surgele")&&t.pSurgel))}function bc(t){return t.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const yc=Object.freeze(Object.defineProperty({__proto__:null,aggregateByUnit:ja,calculateAndFormatMissing:ca,calculateGlobalTotal:Ba,calculateTotalQuantityArray:la,formatSingleQuantity:tr,formatStockResult:La,formatTotalQuantity:ot,generateRecipesWithDates:$o,hasConversions:Po,matchesFilters:Ao,safeJsonParse:Dt,slugify:bc,subtractQuantities:Ds,transformPurchasesToNumericQuantity:ia},Symbol.toStringTag,{value:"Module"}));function sn(t){return{...t,products:t.products?.map(e=>typeof e=="string"?e:e.$id)||[],mainId:t.mainId}}function wc(t){const e=Dt(t.specs)??null,r=la(ia(t.purchases??[]));let a=[];e?.quantity&&(a=[e.quantity]);const{numeric:n,display:i}=ca(a,r),o=Dt(t.stockReel)??null,l=ot(r),d=t.store?Dt(t.store):null,f=o?`${o.quantity} ${o.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid||"",productName:t.productName,productType:t.productType||"none",pFrais:e?.pFrais??!1,pSurgel:e?.pSurgel??!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,totalNeededRaw:[],status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,specs:t.specs,byDate:{},storeInfo:d,stockParsed:o,specsParsed:e,totalNeededArray:a,totalPurchasesArray:r,missingQuantityArray:n,stockOrTotalPurchases:f,displayTotalNeeded:ot(a),displayTotalPurchases:l,displayMissingQuantity:i,totalNeededOverrideParsed:Dt(t.totalNeededOverride),displayTotalOverride:(()=>{const h=Dt(t.totalNeededOverride);return h?ot([h.totalOverride]):""})()}}function ga(t,e){const r=t.purchases??e.purchases,a=t.specs??e.specs,n=a?Dt(a):e.specsParsed,i=la(ia(r??[])),o=ot(i);let l=e.totalNeededArray;!e.productHugoUuid&&n?.quantity&&(l=[n.quantity]);const{numeric:d,display:f}=ca(l,i),h=t.stockReel??e.stockReel,m=h?Dt(h):e.stockParsed,g=t.store??e.store,p=g?Dt(g):e.storeInfo,_=m?`${m.quantity} ${m.unit}`:o;return t.purchases===void 0&&e.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${e.purchases.length} purchases pour ${e.productName}`),{...e,$updatedAt:t.$updatedAt,productName:t.productName??e.productName,productType:t.productType??e.productType,isSynced:t.isSynced??e.isSynced,mainId:t.mainId??e.mainId,pFrais:n?.pFrais??e.pFrais,pSurgel:n?.pSurgel??e.pSurgel,status:t.status??e.status,who:t.who??e.who,store:g,stockReel:h,specs:a,purchases:r,previousNames:t.previousNames??e.previousNames,isMerged:t.isMerged??e.isMerged,mergedFrom:t.mergedFrom??e.mergedFrom,mergeDate:t.mergeDate??e.mergeDate,mergeReason:t.mergeReason??e.mergeReason,mergedInto:t.mergedInto??e.mergedInto,totalNeededOverride:t.totalNeededOverride??e.totalNeededOverride,storeInfo:p,stockParsed:m,specsParsed:n,totalNeededArray:l,totalPurchasesArray:i,missingQuantityArray:d,stockOrTotalPurchases:_,displayTotalPurchases:o,displayMissingQuantity:f,displayTotalNeeded:ot(l),totalNeededOverrideParsed:Dt(t.totalNeededOverride??e.totalNeededOverride),displayTotalOverride:(()=>{const y=Dt(t.totalNeededOverride??e.totalNeededOverride);return y?ot([y.totalOverride]):""})()}}class Sc{#e=j(qe([]));MAX_TOASTS=3;get toasts(){return[...s(this.#e)].sort((e,r)=>r.timestamp-e.timestamp)}create(e){const r=e.id||crypto.randomUUID(),a={id:r,state:e.state,message:e.message,timestamp:Date.now(),source:e.source||"user",timeoutId:void 0,details:e.details,actions:e.actions||[]};return this.#t(a),r}update(e,r){const a=s(this.#e).findIndex(i=>i.id===e);if(a===-1)return;const n=s(this.#e)[a];n.timeoutId&&clearTimeout(n.timeoutId),s(this.#e)[a]={...n,state:r.state||n.state,message:r.message||n.message,source:r.source||n.source,actions:r.actions||n.actions},this.#r(s(this.#e)[a])}async track(e,r){const a=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const n=await e;return this.update(a,{state:"success",message:r.success||"Opération réussie"}),n}catch(n){throw this.update(a,{state:"error",message:r.error||"Erreur lors de l'opération"}),n}}dismiss(e){const r=s(this.#e).findIndex(n=>n.id===e);if(r===-1)return;const a=s(this.#e)[r];a.timeoutId&&clearTimeout(a.timeoutId),s(this.#e).splice(r,1)}dismissAll(){s(this.#e).forEach(e=>{e.timeoutId&&clearTimeout(e.timeoutId)}),b(this.#e,[],!0)}#t(e){if(e.source==="user"){const r=s(this.#e).findIndex(a=>a.source==="user");r>=0?s(this.#e)[r]=e:s(this.#e).push(e)}else{const r=s(this.#e).filter(a=>a.source!=="user");if(r.length>=2){const a=r[0];this.dismiss(a.id)}s(this.#e).push(e)}s(this.#e).length>this.MAX_TOASTS&&s(this.#e).splice(0,s(this.#e).length-this.MAX_TOASTS),this.#r(e)}#r(e){if(e.state!=="success"&&e.state!=="info")return;const r=e.source==="realtime-other"?4e3:2e3;e.timeoutId=setTimeout(()=>{this.dismiss(e.id)},r)}success(e,r){return this.create({state:"success",message:e,details:r})}error(e,r){return this.create({state:"error",message:e,details:r})}warning(e,r){return this.create({state:"warning",message:e,source:r?.source||"system",details:r?.details,actions:r?.actions})}info(e,r){return this.create({state:"info",message:e,source:r?.source||"system",details:r?.details})}loading(e,r){return this.create({state:"loading",message:e,details:r})}}const He=new Sc;function xc(t,e,r,a){if(typeof e=="function"?t!==e||!a:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?a:r==="a"?a.call(t):a?a.value:e.get(t)}class L{constructor(e,r,a){this.method=e,this.attribute=r,a!==void 0&&(Array.isArray(a)?this.values=a:this.values=[a])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}L.equal=(t,e)=>new L("equal",t,e).toString();L.notEqual=(t,e)=>new L("notEqual",t,e).toString();L.lessThan=(t,e)=>new L("lessThan",t,e).toString();L.lessThanEqual=(t,e)=>new L("lessThanEqual",t,e).toString();L.greaterThan=(t,e)=>new L("greaterThan",t,e).toString();L.greaterThanEqual=(t,e)=>new L("greaterThanEqual",t,e).toString();L.isNull=t=>new L("isNull",t).toString();L.isNotNull=t=>new L("isNotNull",t).toString();L.between=(t,e,r)=>new L("between",t,[e,r]).toString();L.startsWith=(t,e)=>new L("startsWith",t,e).toString();L.endsWith=(t,e)=>new L("endsWith",t,e).toString();L.select=t=>new L("select",void 0,t).toString();L.search=(t,e)=>new L("search",t,e).toString();L.orderDesc=t=>new L("orderDesc",t).toString();L.orderAsc=t=>new L("orderAsc",t).toString();L.orderRandom=()=>new L("orderRandom").toString();L.cursorAfter=t=>new L("cursorAfter",void 0,t).toString();L.cursorBefore=t=>new L("cursorBefore",void 0,t).toString();L.limit=t=>new L("limit",void 0,t).toString();L.offset=t=>new L("offset",void 0,t).toString();L.contains=(t,e)=>new L("contains",t,e).toString();L.notContains=(t,e)=>new L("notContains",t,e).toString();L.notSearch=(t,e)=>new L("notSearch",t,e).toString();L.notBetween=(t,e,r)=>new L("notBetween",t,[e,r]).toString();L.notStartsWith=(t,e)=>new L("notStartsWith",t,e).toString();L.notEndsWith=(t,e)=>new L("notEndsWith",t,e).toString();L.createdBefore=t=>L.lessThan("$createdAt",t);L.createdAfter=t=>L.greaterThan("$createdAt",t);L.createdBetween=(t,e)=>L.between("$createdAt",t,e);L.updatedBefore=t=>L.lessThan("$updatedAt",t);L.updatedAfter=t=>L.greaterThan("$updatedAt",t);L.updatedBetween=(t,e)=>L.between("$updatedAt",t,e);L.or=t=>new L("or",void 0,t.map(e=>JSON.parse(e))).toString();L.and=t=>new L("and",void 0,t.map(e=>JSON.parse(e))).toString();L.distanceEqual=(t,e,r,a=!0)=>new L("distanceEqual",t,[[e,r,a]]).toString();L.distanceNotEqual=(t,e,r,a=!0)=>new L("distanceNotEqual",t,[[e,r,a]]).toString();L.distanceGreaterThan=(t,e,r,a=!0)=>new L("distanceGreaterThan",t,[[e,r,a]]).toString();L.distanceLessThan=(t,e,r,a=!0)=>new L("distanceLessThan",t,[[e,r,a]]).toString();L.intersects=(t,e)=>new L("intersects",t,[e]).toString();L.notIntersects=(t,e)=>new L("notIntersects",t,[e]).toString();L.crosses=(t,e)=>new L("crosses",t,[e]).toString();L.notCrosses=(t,e)=>new L("notCrosses",t,[e]).toString();L.overlaps=(t,e)=>new L("overlaps",t,[e]).toString();L.notOverlaps=(t,e)=>new L("notOverlaps",t,[e]).toString();L.touches=(t,e)=>new L("touches",t,[e]).toString();L.notTouches=(t,e)=>new L("notTouches",t,[e]).toString();var nn;(function(t){t[t.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",t[t.POLICY_VIOLATION=1008]="POLICY_VIOLATION",t[t.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(nn||(nn={}));var To,ko;class ir{static custom(e){return e}static unique(e=7){const r=xc(ir,To,"m",ko).call(ir);let a="";for(let n=0;n<e;n++){const i=Math.floor(Math.random()*16).toString(16);a+=i}return r+a}}To=ir,ko=function(){const e=new Date,r=Math.floor(e.getTime()/1e3),a=e.getMilliseconds();return r.toString(16)+a.toString(16).padStart(5,"0")};var on;(function(t){t.Equal="equal",t.NotEqual="notEqual",t.GreaterThan="greaterThan",t.GreaterThanEqual="greaterThanEqual",t.LessThan="lessThan",t.LessThanEqual="lessThanEqual",t.Contains="contains",t.IsNull="isNull",t.IsNotNull="isNotNull"})(on||(on={}));var ln;(function(t){t.Totp="totp"})(ln||(ln={}));var cn;(function(t){t.Email="email",t.Phone="phone",t.Totp="totp",t.Recoverycode="recoverycode"})(cn||(cn={}));var un;(function(t){t.Amazon="amazon",t.Apple="apple",t.Auth0="auth0",t.Authentik="authentik",t.Autodesk="autodesk",t.Bitbucket="bitbucket",t.Bitly="bitly",t.Box="box",t.Dailymotion="dailymotion",t.Discord="discord",t.Disqus="disqus",t.Dropbox="dropbox",t.Etsy="etsy",t.Facebook="facebook",t.Figma="figma",t.Github="github",t.Gitlab="gitlab",t.Google="google",t.Linkedin="linkedin",t.Microsoft="microsoft",t.Notion="notion",t.Oidc="oidc",t.Okta="okta",t.Paypal="paypal",t.PaypalSandbox="paypalSandbox",t.Podio="podio",t.Salesforce="salesforce",t.Slack="slack",t.Spotify="spotify",t.Stripe="stripe",t.Tradeshift="tradeshift",t.TradeshiftBox="tradeshiftBox",t.Twitch="twitch",t.Wordpress="wordpress",t.Yahoo="yahoo",t.Yammer="yammer",t.Yandex="yandex",t.Zoho="zoho",t.Zoom="zoom",t.Mock="mock"})(un||(un={}));var dn;(function(t){t.AvantBrowser="aa",t.AndroidWebViewBeta="an",t.GoogleChrome="ch",t.GoogleChromeIOS="ci",t.GoogleChromeMobile="cm",t.Chromium="cr",t.MozillaFirefox="ff",t.Safari="sf",t.MobileSafari="mf",t.MicrosoftEdge="ps",t.MicrosoftEdgeIOS="oi",t.OperaMini="om",t.Opera="op",t.OperaNext="on"})(dn||(dn={}));var vn;(function(t){t.AmericanExpress="amex",t.Argencard="argencard",t.Cabal="cabal",t.Cencosud="cencosud",t.DinersClub="diners",t.Discover="discover",t.Elo="elo",t.Hipercard="hipercard",t.JCB="jcb",t.Mastercard="mastercard",t.Naranja="naranja",t.TarjetaShopping="targeta-shopping",t.UnionPay="unionpay",t.Visa="visa",t.MIR="mir",t.Maestro="maestro",t.Rupay="rupay"})(vn||(vn={}));var fn;(function(t){t.Afghanistan="af",t.Angola="ao",t.Albania="al",t.Andorra="ad",t.UnitedArabEmirates="ae",t.Argentina="ar",t.Armenia="am",t.AntiguaAndBarbuda="ag",t.Australia="au",t.Austria="at",t.Azerbaijan="az",t.Burundi="bi",t.Belgium="be",t.Benin="bj",t.BurkinaFaso="bf",t.Bangladesh="bd",t.Bulgaria="bg",t.Bahrain="bh",t.Bahamas="bs",t.BosniaAndHerzegovina="ba",t.Belarus="by",t.Belize="bz",t.Bolivia="bo",t.Brazil="br",t.Barbados="bb",t.BruneiDarussalam="bn",t.Bhutan="bt",t.Botswana="bw",t.CentralAfricanRepublic="cf",t.Canada="ca",t.Switzerland="ch",t.Chile="cl",t.China="cn",t.CoteDIvoire="ci",t.Cameroon="cm",t.DemocraticRepublicOfTheCongo="cd",t.RepublicOfTheCongo="cg",t.Colombia="co",t.Comoros="km",t.CapeVerde="cv",t.CostaRica="cr",t.Cuba="cu",t.Cyprus="cy",t.CzechRepublic="cz",t.Germany="de",t.Djibouti="dj",t.Dominica="dm",t.Denmark="dk",t.DominicanRepublic="do",t.Algeria="dz",t.Ecuador="ec",t.Egypt="eg",t.Eritrea="er",t.Spain="es",t.Estonia="ee",t.Ethiopia="et",t.Finland="fi",t.Fiji="fj",t.France="fr",t.MicronesiaFederatedStatesOf="fm",t.Gabon="ga",t.UnitedKingdom="gb",t.Georgia="ge",t.Ghana="gh",t.Guinea="gn",t.Gambia="gm",t.GuineaBissau="gw",t.EquatorialGuinea="gq",t.Greece="gr",t.Grenada="gd",t.Guatemala="gt",t.Guyana="gy",t.Honduras="hn",t.Croatia="hr",t.Haiti="ht",t.Hungary="hu",t.Indonesia="id",t.India="in",t.Ireland="ie",t.IranIslamicRepublicOf="ir",t.Iraq="iq",t.Iceland="is",t.Israel="il",t.Italy="it",t.Jamaica="jm",t.Jordan="jo",t.Japan="jp",t.Kazakhstan="kz",t.Kenya="ke",t.Kyrgyzstan="kg",t.Cambodia="kh",t.Kiribati="ki",t.SaintKittsAndNevis="kn",t.SouthKorea="kr",t.Kuwait="kw",t.LaoPeopleSDemocraticRepublic="la",t.Lebanon="lb",t.Liberia="lr",t.Libya="ly",t.SaintLucia="lc",t.Liechtenstein="li",t.SriLanka="lk",t.Lesotho="ls",t.Lithuania="lt",t.Luxembourg="lu",t.Latvia="lv",t.Morocco="ma",t.Monaco="mc",t.Moldova="md",t.Madagascar="mg",t.Maldives="mv",t.Mexico="mx",t.MarshallIslands="mh",t.NorthMacedonia="mk",t.Mali="ml",t.Malta="mt",t.Myanmar="mm",t.Montenegro="me",t.Mongolia="mn",t.Mozambique="mz",t.Mauritania="mr",t.Mauritius="mu",t.Malawi="mw",t.Malaysia="my",t.Namibia="na",t.Niger="ne",t.Nigeria="ng",t.Nicaragua="ni",t.Netherlands="nl",t.Norway="no",t.Nepal="np",t.Nauru="nr",t.NewZealand="nz",t.Oman="om",t.Pakistan="pk",t.Panama="pa",t.Peru="pe",t.Philippines="ph",t.Palau="pw",t.PapuaNewGuinea="pg",t.Poland="pl",t.FrenchPolynesia="pf",t.NorthKorea="kp",t.Portugal="pt",t.Paraguay="py",t.Qatar="qa",t.Romania="ro",t.Russia="ru",t.Rwanda="rw",t.SaudiArabia="sa",t.Sudan="sd",t.Senegal="sn",t.Singapore="sg",t.SolomonIslands="sb",t.SierraLeone="sl",t.ElSalvador="sv",t.SanMarino="sm",t.Somalia="so",t.Serbia="rs",t.SouthSudan="ss",t.SaoTomeAndPrincipe="st",t.Suriname="sr",t.Slovakia="sk",t.Slovenia="si",t.Sweden="se",t.Eswatini="sz",t.Seychelles="sc",t.Syria="sy",t.Chad="td",t.Togo="tg",t.Thailand="th",t.Tajikistan="tj",t.Turkmenistan="tm",t.TimorLeste="tl",t.Tonga="to",t.TrinidadAndTobago="tt",t.Tunisia="tn",t.Turkey="tr",t.Tuvalu="tv",t.Tanzania="tz",t.Uganda="ug",t.Ukraine="ua",t.Uruguay="uy",t.UnitedStates="us",t.Uzbekistan="uz",t.VaticanCity="va",t.SaintVincentAndTheGrenadines="vc",t.Venezuela="ve",t.Vietnam="vn",t.Vanuatu="vu",t.Samoa="ws",t.Yemen="ye",t.SouthAfrica="za",t.Zambia="zm",t.Zimbabwe="zw"})(fn||(fn={}));var hn;(function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE",t.OPTIONS="OPTIONS",t.HEAD="HEAD"})(hn||(hn={}));var pn;(function(t){t.Center="center",t.Topleft="top-left",t.Top="top",t.Topright="top-right",t.Left="left",t.Right="right",t.Bottomleft="bottom-left",t.Bottom="bottom",t.Bottomright="bottom-right"})(pn||(pn={}));var gn;(function(t){t.Jpg="jpg",t.Jpeg="jpeg",t.Png="png",t.Webp="webp",t.Heic="heic",t.Avif="avif",t.Gif="gif"})(gn||(gn={}));var mn;(function(t){t.Http="http",t.Schedule="schedule",t.Event="event"})(mn||(mn={}));var _n;(function(t){t.Waiting="waiting",t.Processing="processing",t.Completed="completed",t.Failed="failed",t.Scheduled="scheduled"})(_n||(_n={}));function Do(t,e){const{operationName:r,maxAutoRetries:a=1,autoRetryDelay:n=1e3}=e;let i=1,o=null;return new Promise((l,d)=>{const f=async(h=!1)=>{try{h?o=He.loading(`Tentative de ${r}...`):i>1?o?He.update(o,{state:"loading",message:`${r} (Tentative ${i}/${a+1})...`}):o=He.loading(`${r} (Tentative ${i}/${a+1})...`):o=He.loading(`${r} en cours...`);const m=await t();o&&He.update(o,{state:"success",message:e.successMessage||`${r} réussie !`,action:void 0}),e.onSuccess?.(m),l(m)}catch(m){console.error(`[RetryUtils] Erreur ${r} (Tentative ${i}):`,m);const g=m instanceof Error?m.message:"Erreur inconnue";if(i<=a){i++,o&&He.update(o,{state:"loading",message:`Erreur. Nouvelle tentative dans ${n/1e3}s...`}),setTimeout(()=>f(!1),n);return}o&&He.update(o,{state:"error",message:`Échec ${r}: ${g}`,action:{label:"Réessayer",onClick:()=>{He.dismiss(o),f(!0)}}}),e.onError?.(m)}};f(!1)})}function Io(t,e){return{$id:t.$id,mainId:t.mainId,productHugoUuid:t.productHugoUuid,productName:t.productName,...e}}async function gt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getDatabases(),e=window.AppwriteClient.getConfig();return{databases:t,config:e}}async function Ec(t){const a=await(await window.AppwriteClient.getAccount()).get();return{...t,updatedBy:a.name}}function pr(){return localStorage.getItem("appwrite-user-name")||""}async function Pc(t,e,r=100){try{const{databases:a,config:n}=await gt(),i=await a.listDocuments(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,[L.greaterThan("$updatedAt",e),L.equal("mainId",t),L.limit(r),L.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(a){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",a),[]}}async function No(t,e){const{lastSync:r,limit:a=100}=e;try{const{databases:n,config:i}=await gt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await n.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[L.equal("mainId",t),L.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),L.limit(a)])).documents;const o=await n.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[L.greaterThan("$updatedAt",r),L.equal("mainId",t),L.limit(a),L.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(n){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${t}:`,n);const i=n instanceof Error?n.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function $r(t,e,r=!0){const{databases:a,config:n}=await gt();return r&&(e.updatedBy=pr()),await a.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,t,e)}async function Ut(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${t} sur Appwrite...`);const n=Io(a,e),i=await Ec(n),{databases:o,config:l}=await gt(),d=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,t,i);return console.log(`[Appwrite Interactions] Produit ${t} créé avec succès`),d}catch(a){console.error(`[Appwrite Interactions] Erreur création produit ${t}:`,a);const n=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${n}`)}}async function Mo(t,e){try{const{databases:r,config:a}=await gt(),{slugify:n}=await us(async()=>{const{slugify:h}=await Promise.resolve().then(()=>yc);return{slugify:h}},void 0),o=`${n(t.productName).substring(0,10)}_${Date.now().toString(36)}`,l={quantity:t.quantity,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1},d={productHugoUuid:null,productName:t.productName,productType:t.productType||"Autre",store:t.store?JSON.stringify(t.store):null,who:t.who||[],isSynced:!0,mainId:e,status:"active",updatedBy:pr(),stockReel:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,specs:JSON.stringify(l)};console.log(`[Appwrite Interactions] Création produit manuel ${o}...`,d);const f=await r.createDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,o,d);return console.log(`[Appwrite Interactions] Produit manuel ${o} créé avec succès`),f}catch(r){throw console.error("[Appwrite Interactions] Erreur création produit manuel:",r),r}}async function Co(t,e){if(!t)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=e?JSON.stringify(e):null,a=await $r(t,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${t}, nouvelle valeur:`,a.store),a}async function Ro(t,e){return $r(t,{who:e})}async function ds(t,e){return $r(t,{stockReel:e})}async function Is(t,e,r=!1){if(!t)throw new Error("ID du produit requis pour la mise à jour de l'override");const a=JSON.stringify(e),n=await $r(t,{totalNeededOverride:a},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${t}:`,e),n}async function Oo(t,e=!0){if(!t)throw new Error("ID du produit requis pour la suppression de l'override");const r=await $r(t,{totalNeededOverride:null},e);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${t}`),r}async function qo(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour mise à jour batch`);const n={};return e.stockReel!==void 0&&(n.stockReel=e.stockReel),e.who!==void 0&&(n.who=e.who),e.storeInfo!==void 0&&(n.store=JSON.stringify(e.storeInfo)),a.isSynced?(console.log(`[Appwrite Interactions] Produit ${t} déjà sync, update batch normal...`),await $r(t,n)):(console.log(`[Appwrite Interactions] Produit ${t} local, création batch avec upsert...`),await Ut(t,n,r))}catch(a){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${t}:`,a),a}}async function jo(t){const{databases:e,config:r}=await gt(),a={...t,createdBy:pr()},n=await e.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,ir.unique(),a);return console.log("[Appwrite Interactions] Achat créé:",n),n}async function Ns(t,e){try{const{databases:r,config:a}=await gt(),n=await r.getDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t),i={...e,products:e.products||n.products},o=await r.updateDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t,i);return console.log(`[Appwrite Interactions] Achat ${t} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${t}:`,r);const a=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${a}`)}}async function Bo(t){try{const{databases:e,config:r}=await gt();await e.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,t),console.log(`[Appwrite Interactions] Achat ${t} supprimé`)}catch(e){console.error(`[Appwrite Interactions] Erreur suppression achat ${t}:`,e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Lo(t){if(!t?.length)return[];try{const{databases:e,config:r}=await gt(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[L.equal("$id",t),L.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${a.documents.length} purchases chargés avec relations products`),a.documents}catch(e){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function zo(t,e={}){let r=null;const a=i=>{const{events:o,payload:l}=i;if(!l)return;const d=o.some(p=>p.includes("products.")),f=o.some(p=>p.includes("purchases.")),h=o.some(p=>p.includes(".create")),m=o.some(p=>p.includes(".update")),g=o.some(p=>p.includes(".delete"));if(d){const p=l;p.updatedBy&&p.updatedBy!==pr()&&(h||m?He.info(`${p.updatedBy} a modifié le produit "${p.productName}"`,{source:"realtime-other"}):g&&He.info(`${p.updatedBy} a supprimé un produit`,{source:"realtime-other"})),h&&e.onProductCreate?e.onProductCreate(p):m&&e.onProductUpdate?e.onProductUpdate(p):g&&e.onProductDelete&&e.onProductDelete(p.$id)}else if(f){const p=l;if(p.createdBy&&p.createdBy!==pr()){const _=p.products?.[0]?.productName||"un produit";h&&p.who!==pr()?He.info(`${p.who} a ajouté un achat pour ${_}`,{source:"realtime-other"}):m&&p.who!==pr()?He.info(`${p.who} a modifié un achat pour ${_}`,{source:"realtime-other"}):g&&He.info(`${p.who} a supprimé un achat pour ${_}`,{source:"realtime-other"})}h&&e.onPurchaseCreate?e.onPurchaseCreate(p):m&&e.onPurchaseUpdate?e.onPurchaseUpdate(p):g&&e.onPurchaseDelete&&e.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],t,a,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),e.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),e.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),e.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),e.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function Uo(t){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${t}`);const{databases:e}=await gt(),r=window.AppwriteClient.getConfig(),a=await e.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,t);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${a.name}`),a}catch(e){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${t}:`,e),null}}async function Ho(t,e,r,a){try{console.log(`[Appwrite Interactions] Création du Main document: ${t}`);const{databases:n}=await gt(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await n.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,t,{name:a,createdBy:l.$id,isActive:!0,originalDataHash:e,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${t}`)}catch(n){throw console.error("[Appwrite Interactions] Erreur création Main document:",n),n}}async function Ms(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"batchUpdateProducts",data:t};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${t.productIds.length} produits, type: ${t.updateType}`);const n=await Do(()=>e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST"),{operationName:`batchUpdateProducts (${t.productIds.length} products, type: ${t.updateType})`,maxAutoRetries:1,autoRetryDelay:2e3});if(!n)throw new Error("Opération annulée ou échouée après tentatives de mise à jour groupée");if(n.status!=="completed")throw new Error(`Exécution échouée avec statut: ${n.status}. Erreur: ${n.stderr||n.responseBody}`);const i=JSON.parse(n.responseBody);return i.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${i.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,updatedCount:t.productIds.length,updateType:t.updateType,error:r,timestamp:new Date().toISOString()}}}async function Go(t,e,r,a){return Ms({productIds:t,products:e,updateType:"store",updateData:r,options:a})}async function Wo(t,e,r,a="replace"){return Ms({productIds:t,products:e,updateType:"who",updateData:{names:r},options:{mode:a}})}async function Qo(t,e,r,a={}){try{const{databases:n,config:i}=await gt(),d=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:t,productId:e,productIdType:typeof e,quantities:r,options:a});for(const h of r){const m={products:[e],mainId:t,quantity:h.q,unit:h.u,status:"delivered",notes:a.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:a.store??null,who:d.name,price:null,orderDate:null,deliveryDate:null,createdBy:d.$id,invoiceId:a.invoiceId,invoiceTotal:null},g=await n.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.purchases,ir.unique(),m);f.push(g)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${e}`),f}catch(n){console.error("[Appwrite Interactions] Erreur création validation rapide:",n);const i=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${i}`)}}async function Vo(t,e,r,a,n,i){try{const{databases:o,config:l}=await gt(),h=await(await window.AppwriteClient.getAccount()).get(),m=e||ir.unique(),g=h.name;if(!r)throw new Error("invoiceTotal est requis pour une dépense");const p={products:[],mainId:t,quantity:1,unit:"global",status:"expense",notes:n||"",store:a??null,who:g||h.name,price:r,invoiceId:m,invoiceTotal:r,orderDate:null,deliveryDate:null,createdBy:h.$id},_=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.purchases,ir.unique(),p);return console.log("[Appwrite Interactions] Dépense créée:",_),_}catch(o){console.error("[Appwrite Interactions] Erreur création dépense:",o);const l=o instanceof Error?o.message:"Erreur inconnue";throw new Error(`Échec de la création de la dépense: ${l}`)}}async function $c(t){try{const{databases:e,config:r}=await gt(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[L.equal("mainId",t),L.equal("status","expense"),L.limit(1e3)]);return console.log(`[Appwrite Interactions] ${a.documents.length} dépenses globales chargées`),a.documents}catch(e){return console.error("[Appwrite Interactions] Erreur chargement dépenses globales:",e),[]}}const bn=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:Ms,batchUpdateStore:Go,batchUpdateWho:Wo,createExpensePurchase:Vo,createMainDocument:Ho,createManualProduct:Mo,createPurchase:jo,createQuickValidationPurchases:Qo,deletePurchase:Bo,enrichedProductToAppwriteProduct:Io,loadMainEventData:Uo,loadOrphanPurchases:$c,loadPurchasesListByIds:Lo,loadUpdatedPurchases:Pc,removeTotalOverride:Oo,subscribeToRealtime:zo,syncProductsWithPurchases:No,updateProduct:$r,updateProductBatch:qo,updateProductStock:ds,updateProductStore:Co,updateProductWho:Ro,updatePurchase:Ns,updateTotalOverride:Is,upsertProduct:Ut},Symbol.toStringTag,{value:"Module"}));function Ac(t){return new Date(t).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function fr(t){return t?new Date(t).toLocaleDateString("fr-Fr",{weekday:"short",day:"numeric",month:"short"}):""}function wa(t){const r=new Date(t).getHours();return r>=11&&r<=13?"sun":r>=19&&r<=21?"moon":r>=7&&r<=9?"cloud":null}function Tc(t){return{formattedDate:new Date(t).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"}),timeIcon:wa(t)}}function Fo(t){const e={};for(const r of t)e[r]=Tc(r);return e}function kc(t,e){if(!t.byDate?.[e])return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const r=t.byDate[e],a=[e],n=new Map;r.recipes?.length&&n.set(e,r.recipes);const i=r.totalConsolidated||[],o=i.length>0?ot(i):"-",l=Dc(t,e,i),d=l.filter(g=>g.q>0),f=new Date().toISOString().split("T")[0],m=e<f?[]:l.filter(g=>g.q<0);return{requiredQuantities:i,requiredQuantitiesFormatted:o,stockBalance:l,availableStockQuantities:d,missingStockQuantities:m,availableStockFormatted:La(l),missingStockFormatted:ot(m.map(g=>({q:Math.abs(g.q),u:g.u}))),hasAvailableStock:d.length>0,hasMissingStock:m.length>0,totalRecipesInRange:r.recipes?.length||0,totalPortionsInRange:r.totalAssiettes||0,datesInSelectedRange:a,recipesByDate:n}}function Dc(t,e,r){let a=[],n="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(a=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],n=t.stockParsed.dateTime);const i=[];if(t.purchases)for(const d of t.purchases)Ic(d,e,n)&&i.push({q:d.quantity,u:d.unit});const o=[...a,...i],l=ja(o);return Ds(l,r)}function Ic(t,e,r=""){if(t.status==="cancelled")return!1;const a=t.deliveryDate||t.$createdAt;return!a||a>e||r&&t.$createdAt<r?!1:a<=e}function Nc(t,e){const r=t.totalNeededArray||[],a=r.length>0?ot(r):"-",n=Ko(t,e[0],e[e.length-1],r),i=n.filter(f=>f.q>0),o=n.filter(f=>f.q<0),l=[...e].sort(),d=new Map;if(t.byDate)for(const[f,h]of Object.entries(t.byDate))h.recipes?.length&&d.set(f,h.recipes);return{requiredQuantities:r,requiredQuantitiesFormatted:a,stockBalance:n,availableStockQuantities:i,missingStockQuantities:o,availableStockFormatted:La(n),missingStockFormatted:ot(o.map(f=>({q:Math.abs(f.q),u:f.u}))),hasAvailableStock:i.length>0,hasMissingStock:o.length>0,totalRecipesInRange:t.nbRecipes||0,totalPortionsInRange:t.totalAssiettes||0,datesInSelectedRange:l,recipesByDate:d}}function Mc(t,e,r){if(!t.byDate)return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const a=new Date(e),n=new Date(r),i=[],o=new Map,l=new Map;let d=0,f=0;for(const[S,A]of Object.entries(t.byDate)){const T=new Date(S);T>=a&&T<=n&&(i.push(S),d+=A.totalAssiettes||0,A.recipes?.length&&(o.set(S,A.recipes),f+=A.recipes.length),A.totalConsolidated&&A.totalConsolidated.forEach(({q:k,u:$})=>{l.set($,(l.get($)||0)+k)}))}const h=Array.from(l.entries()).map(([S,A])=>({q:A,u:S})),m=h.length>0?ot(h):"-",g=Ko(t,e,r,h),p=g.filter(S=>S.q>0),_=new Date().toISOString().split("T")[0],x=r<_?[]:g.filter(S=>S.q<0);return{requiredQuantities:h,requiredQuantitiesFormatted:m,stockBalance:g,availableStockQuantities:p,missingStockQuantities:x,availableStockFormatted:La(g),missingStockFormatted:ot(x.map(S=>({q:Math.abs(S.q),u:S.u}))),hasAvailableStock:p.length>0,hasMissingStock:x.length>0,totalRecipesInRange:f,totalPortionsInRange:d,datesInSelectedRange:i,recipesByDate:o}}function Ko(t,e,r,a){let n=[],i="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(n=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],i=t.stockParsed.dateTime);const o=[];if(t.purchases)for(const f of t.purchases)Cc(f,e,r,i)&&o.push({q:f.quantity,u:f.unit});const l=[...n,...o],d=ja(l);return Ds(d,a)}function Cc(t,e,r,a=""){if(t.status==="cancelled")return!1;const n=t.deliveryDate||t.$createdAt;return!n||n>r||a&&t.$createdAt<a?!1:n<=r}async function Rc(t){let e;if(e=await fetch(`/evenements/${t}/metadata.json`),!e.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function yn(t){const e=await fetch(`/evenements/${t}/ingredients_aw/index.json`);if(!e.ok)throw new Error(`Impossible de charger les données Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function Oc(t,e){if(!t)return!0;try{return(await Rc(e)).hugoContentHash!==t}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function Jo(t,e){const r=Ba(t.byDate),a=la(ia([])),{numeric:n,display:i}=ca(r,a),o=Object.keys(t.byDate||{}),l=Fo(o);return{$id:`${t.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:t.ingredientHugoUuid,productName:t.ingredientName,productType:t.ingType,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1,nbRecipes:t.nbRecipes,totalNeededRaw:t.totalNeededRaw,totalAssiettes:t.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:e,purchases:[],byDate:t.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:a,missingQuantityArray:n,stockOrTotalPurchases:"-",displayTotalNeeded:ot(r),displayTotalPurchases:"-",displayMissingQuantity:i,totalNeededOverrideParsed:null,displayTotalOverride:"",dateDisplayInfo:l}}function qc(t,e){return t.map(r=>Jo(r,e))}class jc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(e){this.dbName=`products-cache-${e}`}async open(){if(!this.db)return new Promise((e,r)=>{const a=indexedDB.open(this.dbName,this.version);a.onerror=()=>r(a.error),a.onsuccess=()=>{this.db=a.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),e()},a.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(this.PRODUCTS_STORE)||(i.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),i.objectStoreNames.contains(this.METADATA_STORE)||(i.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();i.onsuccess=()=>{const o=new Map;i.result.forEach(l=>{o.set(l.$id,l)}),console.log(`[IDBCache] ${o.size} produits chargés`),e(o)},i.onerror=()=>r(i.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();i.onsuccess=()=>{const o=i.result,l={lastSync:null,allDates:[],hugoContentHash:null};o.forEach(d=>{d.key===this.LAST_SYNC_KEY?l.lastSync=d.value:d.key===this.ALL_DATES_KEY?l.allDates=d.value||[]:d.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=d.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),e(l)},i.onerror=()=>r(i.error)})}async saveProducts(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),i=n.objectStore(this.PRODUCTS_STORE);i.clear(),e.forEach(o=>{i.put(o)}),n.oncomplete=()=>{console.log(`[IDBCache] ${e.size} produits sauvegardés`),r()},n.onerror=()=>a(n.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.METADATA_STORE,"readwrite"),i=n.objectStore(this.METADATA_STORE);i.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),i.put({key:this.ALL_DATES_KEY,value:e.allDates}),e.hugoContentHash!==void 0&&i.put({key:this.HUGO_HASH_KEY,value:e.hugoContentHash}),n.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},n.onerror=()=>a(n.error)})}async updateLastSync(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateAllDates(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${e.length} dates`),r()},o.onerror=()=>a(o.error)})}async updateHugoContentHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateLastHugoMenuUpdate(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:e});o.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},o.onerror=()=>a(o.error)})}async upsertProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async deleteProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const a=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");a.objectStore(this.PRODUCTS_STORE).clear(),a.objectStore(this.METADATA_STORE).clear(),a.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),e()},a.onerror=()=>r(a.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Bc(t){const e=new jc(t);return await e.open(),e}function Lc(t){return!!(t.isMerged||t.totalNeededOverride)}function zc(t,e){if(!t||t.length!==e.length)return!0;for(let r=0;r<t.length;r++){const a=t[r],n=e[r];if(a.q!==n.q||a.u!==n.u)return!0}return!1}async function Uc(t,e){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},a=new Set;for(const n of e.ingredients){const i=n.productSemanticKey;if(!i){console.warn(`[syncHugoData] Ingrédient sans productSemanticKey ignoré : ${n.ingredientName}`);continue}a.add(i);const o=t.get(i);if(o){if(zc(o.totalNeededRaw,n.totalNeededRaw)){const d=Hc(o,n);if(d&&r.overrideConflicts.push(d),o.isMerged){const f=o.displayTotalNeeded;wn(o,n),r.mergedProductsUpdated.push({product:o,oldDisplayTotal:f,newDisplayTotal:o.displayTotalNeeded,currentOverride:o.totalNeededOverrideParsed,semanticKey:i})}else wn(o,n);r.updated.push(i)}t.set(i,o)}else{r.added.push(n);const l=Jo(n,e.mainGroup_id);t.set(l.$id,l)}}for(const[n,i]of t)a.has(n)||(r.removed.push(i),!Lc(i)&&!i.purchases?.length&&!i.stockReel&&!i.who?.length&&t.delete(n));return r.overrideConflicts.length>0&&await Gc(r.overrideConflicts),r.summary=Qc(r),r}function Hc(t,e){if(!t.totalNeededOverride||!t.totalNeededOverrideParsed)return null;const r=Ba(e.byDate),a=ot(r),n=t.displayTotalNeeded;return n!==a?{product:t,oldDisplayTotal:n,newDisplayTotal:a,currentOverride:t.totalNeededOverrideParsed,semanticKey:t.$id}:null}async function Gc(t){for(const e of t){const r={...e.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:e.oldDisplayTotal,newTotalDisplay:e.newDisplayTotal};JSON.stringify(r);try{await Is(e.product.$id,r,!1)}catch(a){console.error(`Erreur lors de la mise à jour de l'override pour ${e.product.$id}:`,a)}}}function wn(t,e){t.byDate=e.byDate,t.nbRecipes=e.nbRecipes,t.totalAssiettes=e.totalAssiettes,t.productType=e.ingType,t.pFrais=e.pFrais||!1,t.pSurgel=e.pSurgel||!1,Wc(t)}function Wc(t){t.totalNeededArray=Ba(t.byDate),t.displayTotalNeeded=ot(t.totalNeededArray);const e=la(ia(t.purchases)),{numeric:r,display:a}=ca(t.totalNeededArray,e);t.totalPurchasesArray=e,t.missingQuantityArray=r,t.displayMissingQuantity=a;const n=Object.keys(t.byDate||{});t.dateDisplayInfo=Fo(n),t.stockOrTotalPurchases=t.purchases.length>0?t.displayTotalPurchases:t.displayTotalNeeded}function Qc(t){const e=[];if((t.added.length>0||t.updated.length>0||t.removed.length>0)&&e.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),t.added.length>0&&e.push(`${t.added.length} nouveau(x) ingrédient(s)`),t.updated.length>0&&e.push(` ${t.updated.length} ingrédient(s) mis à jour`),t.overrideConflicts.length>0&&e.push(`⚠️ ${t.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),t.mergedProductsUpdated.length>0&&e.push(`🔀 ${t.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),t.removed.length>0){const r=t.removed.filter(a=>a.purchases?.length||a.stockReel||a.who?.length).length;r>0?e.push(`⚠️ ${r} suppression(s) avec données conservées`):e.push(`${t.removed.length} ingrédient(s) supprimé(s)`)}return e.length>0?e.join(", "):"Aucune modification détectée"}class Vc{isMobileQuery=new vc("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return He.toasts}get toast(){return He}#e=j(qe({isOpen:!1,conflicts:[]}));get modalOverride(){return s(this.#e)}set modalOverride(e){b(this.#e,e,!0)}#t=j(qe({isOpen:!1}));get modal(){return s(this.#t)}set modal(e){b(this.#t,e,!0)}#r=j(qe({isRunning:!1,name:"",progress:0}));get backgroundOperation(){return s(this.#r)}set backgroundOperation(e){b(this.#r,e,!0)}}const At=new Vc;class Fr{#e=j(qe({}));get data(){return s(this.#e)}set data(e){b(this.#e,e,!0)}dateStore;constructor(e,r){this.data=e,this.dateStore=r}update(e){this.data=e}get $id(){return this.data.$id}get productName(){return this.data.productName}get productType(){return this.data.productType}get storeInfo(){return this.data.storeInfo}get who(){return this.data.who}get pFrais(){return this.data.pFrais}get pSurgel(){return this.data.pSurgel}get status(){return this.data.status}get previousNames(){return this.data.previousNames}get purchases(){return this.data.purchases}get totalNeededOverrideParsed(){return this.data.totalNeededOverrideParsed}get displayMissingQuantity(){return this.data.displayMissingQuantity}get missingQuantityArray(){return this.data.missingQuantityArray}get isSynced(){return this.data.isSynced}get byDate(){return this.data.byDate}#t=F(()=>{const e=this.dateStore.current,r=this.dateStore.dates;let a;if(this.dateStore.isFullRange)a=Nc(this.data,r),a.datesInSelectedRange&&(a.datesInSelectedRange=a.datesInSelectedRange.filter(n=>this.data.byDate&&this.data.byDate[n]));else if(e.start&&e.end&&e.start===e.end)a=kc(this.data,e.start);else if(e.start&&e.end)a=Mc(this.data,e.start,e.end);else return{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedMissingQuantities:"",formattedAvailableQuantities:"En attente",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map};return{quantities:a.requiredQuantities,formattedQuantities:a.requiredQuantitiesFormatted,nbRecipes:a.totalRecipesInRange,totalAssiettes:a.totalPortionsInRange,stockResult:a.stockBalance,availableQuantities:a.availableStockQuantities,missingQuantities:a.missingStockQuantities,formattedMissingQuantities:a.missingStockFormatted,formattedAvailableQuantities:a.availableStockFormatted,hasAvailable:a.hasAvailableStock,hasMissing:a.hasMissingStock,concernedDates:a.datesInSelectedRange,recipesByDate:a.recipesByDate}});get stats(){return s(this.#t)}set stats(e){b(this.#t,e)}}class Fc{#e=j(qe([]));#t=j(null);#r=j(null);constructor(e=[]){b(this.#e,e,!0),this.initializeSmartRange()}get start(){return s(this.#t)}get end(){return s(this.#r)}get dates(){return s(this.#e)}#o=F(()=>[...s(this.#e)].sort()[0]);get firstAvailableDate(){return s(this.#o)}set firstAvailableDate(e){b(this.#o,e)}#i=F(()=>[...s(this.#e)].sort()[s(this.#e).length-1]);get lastAvailableDate(){return s(this.#i)}set lastAvailableDate(e){b(this.#i,e)}get current(){return{start:s(this.#t),end:s(this.#r)}}#n=F(()=>{if(s(this.#e).length===0)return!0;const e=this.lastAvailableDate?new Date(this.lastAvailableDate):new Date;return e.setHours(23,59,59,999),e<new Date});get isEventPassed(){return s(this.#n)}set isEventPassed(e){b(this.#n,e)}#l=F(()=>{if(s(this.#e).length===0)return!1;const e=new Date;return e.setHours(0,0,0,0),s(this.#e).some(r=>new Date(r)>=e)});get hasUpcomingDates(){return s(this.#l)}set hasUpcomingDates(e){b(this.#l,e)}#c=F(()=>s(this.#t)===this.firstAvailableDate&&s(this.#r)===this.lastAvailableDate);get isFullRange(){return s(this.#c)}set isFullRange(e){b(this.#c,e)}#d=F(()=>{if(s(this.#e).length===0)return!1;const e=[...s(this.#e)].sort(),r=new Date;r.setHours(0,0,0,0);const a=e.find(o=>new Date(o)>=r)||null;let n,i;if(a)n=a,i=e[e.length-1];else{const o=e[e.length-1];n=o,i=o}return s(this.#t)===n&&s(this.#r)===i});get isUpcomingRange(){return s(this.#d)}set isUpcomingRange(e){b(this.#d,e)}#u=F(()=>s(this.#e).length===1);get hasSingleDateEvent(){return s(this.#u)}set hasSingleDateEvent(e){b(this.#u,e)}#v=F(()=>!!(s(this.#t)&&s(this.#t)===s(this.#r)));get hasSingleDateInRange(){return s(this.#v)}set hasSingleDateInRange(e){b(this.#v,e)}#a=F(()=>{if(!s(this.#t)||!s(this.#r)||this.isEventPassed)return!1;const e=new Date;return e.setHours(0,0,0,0),new Date(s(this.#t))<e});get hasPastDatesInRange(){return s(this.#a)}set hasPastDatesInRange(e){b(this.#a,e)}setAvailableDates(e){b(this.#e,e,!0),this.initializeSmartRange()}setRange(e,r){if(!e&&!r){b(this.#t,null),b(this.#r,null);return}if(!e||!r){const i=e||r;b(this.#t,i,!0),b(this.#r,i,!0);return}const a=new Date(e)<=new Date(r)?e:r,n=new Date(e)>=new Date(r)?e:r;b(this.#t,a,!0),b(this.#r,n,!0)}selectAll(){s(this.#e).length!==0&&(b(this.#t,s(this.#e)[0],!0),b(this.#r,s(this.#e)[s(this.#e).length-1],!0))}selectUpcoming(){if(s(this.#e).length===0)return;const e=[...s(this.#e)].sort(),r=new Date;r.setHours(0,0,0,0);const a=e.find(n=>new Date(n)>=r)||null;if(a)b(this.#t,a,!0),b(this.#r,e[e.length-1],!0);else{const n=e[e.length-1];b(this.#t,n,!0),b(this.#r,n,!0)}}selectFutureDatesOnly(){const e=new Date;e.setDate(e.getDate()+1),e.setHours(0,0,0,0);const r=s(this.#e).filter(a=>new Date(a)>=e);r.length>0&&(b(this.#t,r[0],!0),b(this.#r,r[r.length-1],!0))}initializeSmartRange(){if(s(this.#e).length===0)return;const e=[...s(this.#e)].sort(),r=this.isEventPassed,a=new Date(e[0])<new Date,n=new Date;let i;r?i=e[0]:a?i=n.toISOString().slice(0,19)+"Z":i=e[0],b(this.#t,i,!0),b(this.#r,e[e.length-1],!0),console.log(`[DateRangeStore] Initialized: ${s(this.#t)} - ${s(this.#r)}`)}}const Sn=1e3;class Kc{#e=new Xr;#t=new Xr;#r=j(null);#o=j(null);#i=j(!1);#n=j(!1);#l=j(null);#c=j(!1);#d=j(!1);#u=j(null);#v=j(null);get currentMainId(){return s(this.#r)}dateStore=new Fc;get dateRange(){return this.dateStore.current}get availableDates(){return this.dateStore.dates}get isEventPassed(){return this.dateStore.isEventPassed}get hasSingleDateEvent(){return this.dateStore.hasSingleDateEvent}get hasSingleDateInRange(){return this.dateStore.hasSingleDateInRange}get hasPastDatesInRange(){return this.dateStore.hasPastDatesInRange}#a=null;#f=null;#h=j(!1);#p=null;#S=j(!1);#x=j();#_=j(qe([]));get hasPendingConflicts(){return s(this.#_).length>0}get pendingConflicts(){return s(this.#_)}#s=j(qe({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#s)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get loading(){return s(this.#n)}get error(){return s(this.#l)}get lastSync(){return s(this.#u)}get syncing(){return s(this.#c)}setDateRange(e,r){this.dateStore.setRange(e,r)}isFullRange(){return this.dateStore.isFullRange}initializeDateRange(){this.dateStore.initializeSmartRange()}selectUpcomingDates(){this.dateStore.selectUpcoming()}isUpcomingRange(){return this.dateStore.isUpcomingRange}get firstAvailableDate(){return this.dateStore.firstAvailableDate}get lastAvailableDate(){return this.dateStore.lastAvailableDate}selectFutureDatesOnly(){this.dateStore.selectFutureDatesOnly()}get realtimeConnected(){return s(this.#d)}#g=F(()=>{const e=Array.from(this.#e.values()).map(r=>r.data);return console.log(`[ProductsStore] enrichedProducts recalculated: ${e.length} products`),e});get enrichedProducts(){return s(this.#g)}set enrichedProducts(e){b(this.#g,e)}#m=F(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const e=new Date(this.dateRange.start),r=new Date(this.dateRange.end),a=new Map;for(const[n,i]of this.#e){const o=i.data,l=!o.productHugoUuid;if(!o.byDate&&!l||!Ao(o,s(this.#s)))continue;let f=!1;o.byDate&&(f=Object.keys(o.byDate).some(h=>{const m=new Date(h);return m>=e&&m<=r})),(f||l)&&a.set(n,i)}return a});get filteredProductsMap(){return s(this.#m)}set filteredProductsMap(e){b(this.#m,e)}#E=F(()=>({total:this.#e.size,frais:Array.from(this.#e.values()).filter(e=>e.pFrais).length,surgel:Array.from(this.#e.values()).filter(e=>e.pSurgel).length,merged:Array.from(this.#e.values()).filter(e=>e.data.isMerged).length}));get stats(){return s(this.#E)}set stats(e){b(this.#E,e)}#P=F(()=>{const e=Array.from(this.#e.values()).map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(e)]});get uniqueStores(){return s(this.#P)}set uniqueStores(e){b(this.#P,e)}#$=F(()=>{const e=Array.from(this.#e.values()).flatMap(r=>r.who||[]);return[...new Set(e)]});get uniqueWho(){return s(this.#$)}set uniqueWho(e){b(this.#$,e)}#A=F(()=>{const e=Array.from(this.#e.values()).map(r=>r.productType).filter(Boolean);return[...new Set(e)]});get uniqueProductTypes(){return s(this.#A)}set uniqueProductTypes(e){b(this.#A,e)}#T=F(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((o,l)=>o.$id.localeCompare(l.$id));if(s(this.#s).groupBy==="none")return{"":r};const a=Object.groupBy(r,o=>s(this.#s).groupBy==="store"?o.storeInfo?.storeName||"Non défini":o.productType||"Non défini"),n=Object.keys(a).sort((o,l)=>o===""?1:l===""?-1:o.localeCompare(l)),i={};return n.forEach(o=>{i[o]=a[o]}),i});get groupedFilteredProducts(){return s(this.#T)}set groupedFilteredProducts(e){b(this.#T,e)}async initialize(e,r){if(!e?.trim())throw new Error("mainId invalide fourni");if(s(this.#i)&&s(this.#r)===e){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${e}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${e}`),b(this.#r,e,!0),b(this.#o,r,!0);try{this.#a=await Bc(e)}catch(a){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",a),new Error("Impossible d'initialiser le cache IndexedDB")}b(this.#l,null);try{if(await this.#M(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let n;n=await yn(r),console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),b(this.#v,n.hugoContentHash,!0),qc(n.ingredients,e).forEach(l=>{this.#e.set(l.$id,new Fr(l,this.dateStore))}),this.dateStore.setAvailableDates([...n.allDates]),await Uo(e)||await Ho(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#k()}this.initializeDateRange(),await this.#C(),await this.#Q(),b(this.#i,!0);const a=this.#W();this.#f=zo(e,a),this.#j(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#D(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(a){const n=a instanceof Error?a.message:"Erreur lors de l'initialisation";throw b(this.#l,n,!0),console.error("[ProductsStore]",n,a),a}}async#M(){if(this.#a)try{const e=await this.#a.loadProducts();e.forEach((a,n)=>{a.status==="isSyncing"&&(a.status="active"),this.#e.set(n,new Fr(a,this.dateStore))});const r=await this.#a.loadMetadata();b(this.#u,r.lastSync,!0),this.dateStore.setAvailableDates([...r.allDates]),b(this.#v,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${e.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(e){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",e)}}async#C(){if(s(this.#r)){b(this.#c,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#u)}`);const e=await No(s(this.#r),{lastSync:s(this.#u),limit:Sn});if(console.log(`[ProductsStore] ${e.length} produits récupérés depuis Appwrite`),e.forEach(r=>{const a=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!a}, who=${r.who}, store=${r.store}`);const n=this.#I(r,a?.data);n.isSynced=!0,a?a.update(n):this.#e.set(r.$id,new Fr(n,this.dateStore))}),s(this.#u)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#u)}`);const{loadUpdatedPurchases:r}=await us(async()=>{const{loadUpdatedPurchases:n}=await Promise.resolve().then(()=>bn);return{loadUpdatedPurchases:n}},void 0),a=await r(s(this.#r),s(this.#u),Sn);console.log(`[ProductsStore] ${a.length} purchases modifiés récupérés`),a.forEach(n=>{if(n.status==="expense")this.#t.set(n.$id,n);else if(n.products?.length){const i=n.products.map(o=>typeof o=="string"?o:o.$id);this.#w(i,n)}})}this.#O(),await this.#R(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(e){throw console.error("[ProductsStore] Erreur lors du sync:",e),e}finally{b(this.#c,!1)}}}async#R(){if(this.#a)try{const e=new Map;this.#e.forEach((r,a)=>{const n=Tr(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#a.saveProducts(e),await this.#a.saveMetadata({lastSync:s(this.#u),allDates:[...this.dateStore.dates],hugoContentHash:s(this.#v)}),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#V(){if(this.#a)try{const e=new Map;this.#e.forEach((r,a)=>{const n=Tr(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#a.saveProducts(e),await this.#a.updateLastSync(s(this.#u)),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#k(){if(this.#a)try{const e=new Map;this.#e.forEach((r,a)=>{const n=Tr(r.data);n.status==="isSyncing"&&(n.status="active"),e.set(a,n)}),await this.#a.saveProducts(e),await this.#a.updateLastSync(s(this.#u)),await this.#a.updateAllDates([...this.availableDates]),await this.#a.updateHugoContentHash(s(this.#v)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(e){console.error("[ProductsStore] Erreur persistance cache complet:",e)}}async#y(e){if(!(!this.#a||e.length===0))try{const r=e.map(a=>this.#e.get(a)?.data).filter(a=>a!=null).map(a=>{const n=Tr(a);return n.status==="isSyncing"&&(n.status="active"),this.#a.upsertProduct(n)});r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#O(){b(this.#u,new Date().toISOString(),!0)}async#D(){if(!s(this.#o)||s(this.#n))return!1;try{const e=await Oc(s(this.#v),s(this.#o));return e&&!s(this.#h)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${s(this.#o)}, analyse approfondie en cours...`),b(this.#h,!0),await this.#q()),b(this.#x,new Date,!0),e}catch(e){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",e),!1}}async#q(){if(!s(this.#o)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const e=await yn(s(this.#o)),r=new Map;this.#e.forEach((i,o)=>r.set(o,i.data));const a=await Uc(r,e);console.log(`[ProductsStore  - hugo change] ${a.summary}`);for(const[i,o]of r){const l=this.#e.get(i);if(l)l.update(o);else{const d=new Fr(o,this.dateStore);this.#e.set(i,d),console.log(`[ProductsStore] ✨ Nouveau ProductModel créé : ${i}`)}}const n=[];for(const[i]of this.#e)r.has(i)||n.push(i);for(const i of n)this.#e.delete(i),console.log(`[ProductsStore] 🗑️ ProductModel supprimé : ${i}`);if(console.log(`[ProductsStore] 🔄 Synchronisation terminée : ${r.size} produits synchronisés, ${this.#e.size} ProductModel actifs`),a.overrideConflicts.length>0&&(b(this.#_,a.overrideConflicts,!0),He.error(`${a.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>At.modalOverride.isOpen=!0}})),a.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${a.mergedProductsUpdated.length} produits fusionnés modifiés`),a.removed.length>0){const i=a.removed.filter(o=>o.purchases?.length||o.stockReel||o.who?.length);i.length>0&&console.log(`[ProductsStore] ℹ️ ${i.length} ingrédients supprimés conservés (données utilisateur)`)}this.dateStore.setAvailableDates([...e.allDates]),b(this.#v,e.hugoContentHash,!0),this.initializeDateRange(),await this.#k(),(a.added.length||a.updated.length||a.removed.length)&&He.success(a.summary),b(this.#h,!1)}catch(e){console.error("[ProductsStore] Erreur sync Hugo:",e),He.error("Erreur lors de la mise à jour Hugo")}}#j(){this.#p&&clearInterval(this.#p),this.#p=setInterval(async()=>{await this.#D()},6e4)}#B(){this.#p&&(clearInterval(this.#p),this.#p=null)}#I(e,r){return r?ga(e,r):wc(e)}#F(e){e.length&&(e.forEach(r=>this.#b(r)),console.log(`[ProductsStore] ${e.length} produits upserted`))}#b(e){const r=this.#e.get(e.$id),a=this.#I(e,r?.data);r?r.update(a):(this.dateStore.dates,this.#e.set(e.$id,new Fr(a,this.dateStore)))}#L(e){this.#e.delete(e)}async#z(e){if(!e.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",e.$id),[];const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#G(r,e),r}async#U(e){if(e.products?.length){const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#w(r,e),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Lo([e.$id]);if(r?.products?.length){const a=r.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#w(a,r),a}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#H(e){const r=Array.from(this.#e.values()).map(a=>a.data).filter(a=>a.purchases?.some(n=>n.$id===e));return r.forEach(a=>{this.#b(a)}),r.map(a=>a.$id)}#G(e,r){const a=sn(r),n=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,d=l.purchases||[];if(!d.some(f=>f.$id===a.$id)){const f=ga({...l,purchases:[...d,a],status:"active"},l);n.push(f)}}}),n.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#w(e,r){const a=sn(r),n=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,d=l.purchases||[],f=d.findIndex(h=>h.$id===a.$id);if(f>=0){const h=[...d];h[f]=a;const m=ga({...l,purchases:h,status:"active"},l);n.push(m)}else{const h=ga({...l,purchases:[...d,r],status:"active"},l);n.push(h)}}}),n.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#W(){return{onProductCreate:e=>{if(this.#b(e),this.#a){const r=this.#e.get(e.$id);r&&this.#a.upsertProduct(Tr(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductUpdate:e=>{if(this.#b(e),this.#a){const r=this.#e.get(e.$id);r&&this.#a.upsertProduct(Tr(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductDelete:e=>{this.#L(e),this.#a&&this.#a.deleteProduct(e).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}const r=await this.#z(e);await this.#y(r)},onPurchaseUpdate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}this.#t.has(e.$id)&&this.#t.delete(e.$id);const r=await this.#U(e);await this.#y(r)},onPurchaseDelete:async e=>{if(this.#t.has(e)){this.#t.delete(e);return}const r=await this.#H(e);await this.#y(r)},onConnect:()=>{b(this.#d,!0)},onDisconnect:()=>{b(this.#d,!1)},onError:e=>{console.error("[ProductsStore] Erreur realtime:",e)}}}setSearchQuery=_c(e=>{s(this.#s).searchQuery=e},()=>500);toggleProductType(e){const r=s(this.#s).selectedProductTypes.indexOf(e);r>-1?s(this.#s).selectedProductTypes.splice(r,1):s(this.#s).selectedProductTypes.push(e)}toggleTemperature(e){const r=s(this.#s).selectedTemperatures.indexOf(e);r>-1?s(this.#s).selectedTemperatures.splice(r,1):s(this.#s).selectedTemperatures.push(e)}clearTypeAndTemperatureFilters(){s(this.#s).selectedProductTypes=[],s(this.#s).selectedTemperatures=[]}setGroupBy(e){s(this.#s).groupBy=e}toggleStore(e){const r=s(this.#s).selectedStores.indexOf(e);r>-1?s(this.#s).selectedStores.splice(r,1):s(this.#s).selectedStores.push(e)}toggleWho(e){const r=s(this.#s).selectedWho.indexOf(e);r>-1?s(this.#s).selectedWho.splice(r,1):s(this.#s).selectedWho.push(e)}clearStoreFilters(){s(this.#s).selectedStores=[]}clearWhoFilters(){s(this.#s).selectedWho=[]}handleSort(e){s(this.#s).sortColumn===e?s(this.#s).sortDirection=s(this.#s).sortDirection==="asc"?"desc":"asc":(s(this.#s).sortColumn=e,s(this.#s).sortDirection="asc")}clearFilters(){b(this.#s,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(e){return s(this.#s).sortColumn?[...e].sort((r,a)=>{let n=r[s(this.#s).sortColumn],i=a[s(this.#s).sortColumn];return s(this.#s).sortColumn==="totalNeededConsolidated"?(n=parseFloat(n)||0,i=parseFloat(i)||0):s(this.#s).sortColumn==="purchases"&&(n=r.purchases?.length||0,i=a.purchases?.length||0),n<i?s(this.#s).sortDirection==="asc"?-1:1:n>i?s(this.#s).sortDirection==="asc"?1:-1:0}):e}getEnrichedProductById(e){return this.#e.get(e)?.data??null}getProductModelById(e){return this.#e.get(e)??null}hasConversions(e){const r=this.#e.get(e)?.data;return r?.byDate?Po(r.byDate):!1}async forceReload(e,r){await this.clearCache(),await this.initialize(e,r)}async clearCache(){this.#e.clear(),b(this.#u,null),this.#a&&await this.#a.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(e,r){const a=r?"isSyncing":"active";e.forEach(n=>{const i=this.#e.get(n);if(i){const o={...i.data,status:a};i.update(o)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${e.length} produits → ${a}`)}clearSyncStatus(){const e=[];for(const[r,a]of this.#e)a.status==="isSyncing"&&e.push(r);e.length>0&&(this.setSyncStatus(e,!1),console.log(`[ProductsStore] Nettoyage de ${e.length} produits en statut "isSyncing"`))}destroy(){this.#f?.(),this.#f=null,this.#B(),this.#a&&(this.#a.close(),this.#a=null),console.log("[ProductsStore] Ressources nettoyées")}async#Q(){if(s(this.#r))try{const{loadOrphanPurchases:e}=await us(async()=>{const{loadOrphanPurchases:a}=await Promise.resolve().then(()=>bn);return{loadOrphanPurchases:a}},void 0),r=await e(s(this.#r));r.forEach(a=>{this.#t.set(a.$id,a)}),console.log(`[ProductsStore] ${r.length} dépenses globales chargées`)}catch(e){console.error("[ProductsStore] Erreur chargement dépenses globales:",e)}}#N=F(()=>{let e=0;const r={},a={},n=[];for(const i of this.#t.values()){const o=i.invoiceTotal||i.price||0;e+=o;const l=i.store||"Non défini";r[l]=(r[l]||0)+o;const d=i.who||"Non défini";a[d]=(a[d]||0)+o,n.push(i)}for(const i of this.#e.values()){const o=i.data;if(o.purchases&&o.purchases.length>0){for(const l of o.purchases)if(l.price){e+=l.price;const d=l.store||"Non défini";r[d]=(r[d]||0)+l.price;const f=l.who||"Non défini";a[f]=(a[f]||0)+l.price;const h={...l,_productName:o.productName};n.push(h)}}}return n.sort((i,o)=>{const l=new Date(i.orderDate||i.$createdAt).getTime();return new Date(o.orderDate||o.$createdAt).getTime()-l}),{totalGlobal:e,byStore:r,byWho:a,allPurchases:n}});get financialStats(){return s(this.#N)}set financialStats(e){b(this.#N,e)}}const Z=new Kc;function xn(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const e=new URLSearchParams(window.location.search).get("listId");if(!e||!e.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return e.trim()}function Jc(t){const e=t.substring(0,4),r=t.slice(-10);return`${e}_${r}`}/**
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
 */const Yc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Zc=Rl("<svg><!><!></svg>");function Pe(t,e){J(e,!0);const r=me(e,"color",3,"currentColor"),a=me(e,"size",3,24),n=me(e,"strokeWidth",3,2),i=me(e,"absoluteStrokeWidth",3,!1),o=me(e,"iconNode",19,()=>[]),l=we(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var d=Zc();is(d,m=>({...Yc,...l,width:a(),height:a(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>i()?Number(n())*24/Number(a()):n()]);var f=c(d);Fe(f,17,o,Vt,(m,g)=>{var p=F(()=>xa(s(g),2));let _=()=>s(p)[0],y=()=>s(p)[1];var x=X(),S=C(x);Ul(S,_,!0,(A,T)=>{is(A,()=>({...y()}))}),v(m,x)});var h=u(f);he(h,()=>e.children??de),v(t,d),Y()}function Yo(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];Pe(t,Ee({name:"archive"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function Zo(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];Pe(t,Ee({name:"badge-euro"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function Xc(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];Pe(t,Ee({name:"bean"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function eu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];Pe(t,Ee({name:"beef"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function tu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];Pe(t,Ee({name:"candy-cane"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function ru(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];Pe(t,Ee({name:"carrot"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function jr(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20 6 9 17l-5-5"}]];Pe(t,Ee({name:"check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function au(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];Pe(t,Ee({name:"chef-hat"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function Xo(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m6 9 6 6 6-6"}]];Pe(t,Ee({name:"chevron-down"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function su(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];Pe(t,Ee({name:"circle-alert"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function nu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];Pe(t,Ee({name:"circle-arrow-down"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function ou(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];Pe(t,Ee({name:"circle-arrow-right"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function En(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];Pe(t,Ee({name:"circle-check-big"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function iu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];Pe(t,Ee({name:"circle-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function lu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];Pe(t,Ee({name:"circle-x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function cu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];Pe(t,Ee({name:"clipboard-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function Pn(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];Pe(t,Ee({name:"clipboard-pen-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function $n(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];Pe(t,Ee({name:"clock"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function ei(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];Pe(t,Ee({name:"cloud"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function za(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];Pe(t,Ee({name:"cooking-pot"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function uu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];Pe(t,Ee({name:"egg"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function du(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];Pe(t,Ee({name:"euro"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function ma(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];Pe(t,Ee({name:"funnel-x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function ti(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];Pe(t,Ee({name:"funnel"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function ri(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];Pe(t,Ee({name:"history"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function vu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];Pe(t,Ee({name:"info"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function fu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];Pe(t,Ee({name:"layout-list"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function hu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];Pe(t,Ee({name:"leaf"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function pu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];Pe(t,Ee({name:"list-todo"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function ai(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];Pe(t,Ee({name:"loader-circle"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function gu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];Pe(t,Ee({name:"lock"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function mu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];Pe(t,Ee({name:"log-in"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function _u(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];Pe(t,Ee({name:"message-circle-more"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function bu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];Pe(t,Ee({name:"message-circle-question-mark"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function si(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];Pe(t,Ee({name:"message-circle"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function Cs(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];Pe(t,Ee({name:"moon"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function yu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];Pe(t,Ee({name:"package-check"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function wu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];Pe(t,Ee({name:"package-plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function Ua(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];Pe(t,Ee({name:"package"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function Su(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];Pe(t,Ee({name:"pen-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function xu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];Pe(t,Ee({name:"pencil-line"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function Rs(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];Pe(t,Ee({name:"plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function Eu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];Pe(t,Ee({name:"refresh-cw"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function Pu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];Pe(t,Ee({name:"refrigerator"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function $u(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];Pe(t,Ee({name:"save"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function Au(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];Pe(t,Ee({name:"search"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function ni(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];Pe(t,Ee({name:"shopping-basket"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function yr(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];Pe(t,Ee({name:"shopping-cart"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function Os(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];Pe(t,Ee({name:"snowflake"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function aa(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];Pe(t,Ee({name:"square-pen"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function gr(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];Pe(t,Ee({name:"store"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function qs(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];Pe(t,Ee({name:"sun"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function Tu(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];Pe(t,Ee({name:"tag"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function oi(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];Pe(t,Ee({name:"thermometer"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function ua(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];Pe(t,Ee({name:"triangle-alert"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function ii(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];Pe(t,Ee({name:"user-plus"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function js(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];Pe(t,Ee({name:"user"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function Sa(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];Pe(t,Ee({name:"users"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function li(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];Pe(t,Ee({name:"utensils"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function Nt(t,e){J(e,!0);/**
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
 */let r=we(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];Pe(t,Ee({name:"x"},()=>r,{get iconNode(){return a},children:(n,i)=>{var o=X(),l=C(o);he(l,()=>e.children??de),v(n,o)},$$slots:{default:!0}})),Y()}function ku(t,e){const r=t.reduce((n,i)=>{const o=i.isSynced?0:1,l=i.missingQuantities.length;return n+o+l},0),a=e.invoiceTotal?1:0;return r+a}async function Du(t,e){const r=t.filter(d=>!d.isSynced).map(d=>({productId:d.productId,productData:d.productData}));let a=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");a=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(d){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",d)}const n=e.purchaseStatus||"delivered";let i=e.purchaseDeliveryDate||null;n==="delivered"&&!i&&(i=new Date().toISOString());const o=t.flatMap(d=>d.missingQuantities.map(f=>({productId:d.productId,quantity:f.q,unit:f.u,status:n,notes:e.notes||"",store:e.store||"",who:e.who||void 0,price:void 0,orderDate:null,deliveryDate:i,createdBy:a})));return{mainId:t[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:o},invoiceData:e}}async function Iu(t,e,r){if(!e?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};e.forEach(g=>{g.productData&&(g.productData.mainId=t)});const a=ku(e,r);console.log(`[Appwrite Interactions] Achat groupé: ${e.length} produits, ${a} opérations totales`);const n=100,i=[];if(a<=n)i.push(e);else{let g=[],p=0;for(const _ of e){const y=(_.isSynced?0:1)+_.missingQuantities.length;p+y>n?(g.length>0&&i.push(g),g=[_],p=y):(g.push(_),p+=y)}g.length>0&&i.push(g)}console.log(`[Appwrite Interactions] Découpage en ${i.length} lots pour respecter la limite de 100 opérations`);const o=[];let l=0,d=0,f=0;for(let g=0;g<i.length;g++){const p=i[g];console.log(`[Appwrite Interactions] Exécution du lot ${g+1}/${i.length} (${p.length} produits)`);try{const _=await Du(p,r),y=await Do(()=>Nu(_),{operationName:`Lot ${g+1}/${i.length}`,maxAutoRetries:1,autoRetryDelay:2e3});if(!y)throw new Error("Opération annulée ou échouée après tentatives");if(o.push(y),y.success)l+=y.productsCreated,d+=y.purchasesCreated,f+=y.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${g+1}: ${y.error}`);break}}catch(_){const y=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${g+1}:`,_),o.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:y,timestamp:new Date().toISOString()});break}}const h=o.every(g=>g.success),m=o.some(g=>!g.success);return{success:h,results:o,totalProductsCreated:l,totalPurchasesCreated:d,totalExpensesCreated:f,error:m?"Un ou plusieurs lots ont échoué":void 0}}async function Nu(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"createGroupPurchaseWithSync",data:t};console.log(`[Appwrite Interactions] Exécution du lot: ${t.batchData.productsToCreate.length} produits à créer, ${t.batchData.purchasesToCreate.length} achats à créer`);const n=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST");if(n.status!=="completed")throw new Error(`Exécution échouée avec statut: ${n.status}. Erreur: ${n.stderr}`);const i=JSON.parse(n.responseBody);return i.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${i.productsCreated} produits créés, ${i.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur exécution lot:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:t.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var Mu=(t,e,r)=>e(s(r).id),Cu=w("<span> </span>"),Ru=w('<button><!> <span class="max-w-32 truncate"> </span> <!> <!></button>'),Ou=w('<span class="flex items-center gap-1"><!> </span>'),qu=w('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),ju=w('<div class="flex flex-wrap gap-2"></div> <!>',1);function sa(t,e){J(e,!0);let r=me(e,"badgeSize",3,"btn-lg"),a=me(e,"color",3,"primary"),n=me(e,"badgeStyle",3,""),i=me(e,"onToggleItem",3,()=>{}),o=me(e,"showStats",3,!1),l=me(e,"showIcon",3,!0),d=j(qe({}));Yt(()=>{const x={};e.items.forEach(S=>{x[S.id]=S.selected??!0}),b(d,x,!0)});function f(x){s(d)[x]=!s(d)[x],i()(x)}const h=F(()=>Object.values(s(d)).filter(Boolean).length),m=F(()=>Object.values(s(d)).filter(x=>!x).length);var g=ju(),p=C(g);Fe(p,21,()=>e.items,x=>x.id,(x,S)=>{const A=F(()=>s(d)[s(S).id]);var T=Ru();T.__click=[Mu,f,S];var k=c(T);{var $=U=>{var ce=X(),pe=C(ce);br(pe,()=>s(S).icon,(Se,G)=>{G(Se,{class:"h-3 w-3",get title(){return s(S).title}})}),v(U,ce)};P(k,U=>{s(S).icon&&U($)})}var D=u(k,2),R=c(D),E=u(D,2);{var z=U=>{var ce=Cu(),pe=c(ce);M(()=>{ke(ce,1,`badge badge-sm badge-${a()??""}`),I(pe,s(S).badge)}),v(U,ce)};P(E,U=>{s(S).badge&&U(z)})}var te=u(E,2);{var K=U=>{var ce=X(),pe=C(ce);{var Se=ve=>{jr(ve,{size:16})},G=ve=>{Rs(ve,{size:16})};P(pe,ve=>{s(A)?ve(Se):ve(G,!1)})}v(U,ce)};P(te,U=>{l()&&U(K)})}M(()=>{ke(T,1,`btn ${r()??""} btn-${a()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(A)?`${n()} hover:line-through `:"btn-dash hover:border-solid "}`),or(T,"title",s(A)?"Retirer de la liste":"Réajouter à la liste"),I(R,s(S).label)}),v(x,T)});var _=u(p,2);{var y=x=>{var S=qu(),A=c(S),T=c(A),k=c(T);jr(k,{class:"text-success h-3 w-3"});var $=u(k),D=u(T,2);{var R=te=>{var K=Ou(),U=c(K);Nt(U,{class:"text-error h-3 w-3"});var ce=u(U);M(()=>I(ce,` ${s(m)??""} retirés`)),v(te,K)};P(D,te=>{s(m)>0&&te(R)})}var E=u(A,2),z=c(E);M(()=>{I($,` ${s(h)??""} actifs`),I(z,`Total: ${e.items.length??""} items`)}),v(x,S)};P(_,x=>{o()&&x(y)})}v(t,g),Y()}Ve(["click"]);function Bu(t,e){b(e,!s(e))}var Lu=w('<span class="text-base-content font-semibold"> </span>'),zu=w('<div class="text-base-content/80 flex-1"> </div>'),Uu=w('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Hu=w('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Gu=w('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function ci(t,e){let r=me(e,"icon",3,vu),a=me(e,"class",3,""),n=me(e,"initiallyOpen",3,!1),i=r(),o=j(qe(n())),l=qe(e.children);var d=Gu(),f=c(d);f.__click=[Bu,o];var h=c(f),m=c(h);i(m,{size:24,class:"text-base-content me-4 flex-shrink-0"});var g=u(m,2);{var p=k=>{var $=Lu(),D=c($);M(()=>I(D,e.title)),v(k,$)};P(g,k=>{e.title&&k(p)})}var _=u(h,2);{var y=k=>{var $=zu(),D=c($);M(()=>I(D,e.contentVisible)),v(k,$)};P(_,k=>{e.contentVisible&&k(y)})}var x=u(_,2);{var S=k=>{var $=Uu(),D=c($),R=c(D);{var E=K=>{var U=dt("en savoir plus");v(K,U)},z=K=>{var U=dt("masquer");v(K,U)};P(R,K=>{s(o)?K(z,!1):K(E)})}var te=u(D,2);{let K=F(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(o)?"rotate-180":""}`);Xo(te,{get class(){return s(K)}})}v(k,$)};P(x,k=>{l&&k(S)})}var A=u(f,2);{var T=k=>{var $=Hu(),D=c($),R=c(D);he(R,()=>e.children??de),M(()=>ke($,1,`overflow-hidden transition-all duration-200 ${s(o)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),v(k,$)};P(A,k=>{l&&k(T)})}M(()=>{ke(d,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${a()}`),_o(d,e.style),ke(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),or(f,"aria-expanded",s(o))}),v(t,d)}Ve(["click"]);var Wu=w('<div class="mb-1 text-xs opacity-70"> </div>'),Qu=(t,e,r)=>e(s(r)),Vu=w("<button><!> </button>"),Fu=w('<div><!> <div class="ms-1 flex flex-wrap items-center gap-1"><!> <!></div></div>');function Bs(t,e){J(e,!0);let r=me(e,"maxSuggestions",3,8),a=me(e,"buttonSize",3,"btn-xs"),n=me(e,"buttonVariant",3,"btn-soft"),i=me(e,"disabled",3,!1);const o=F(()=>e.suggestions.slice(0,r()));function l(m){!i()&&!m.disabled&&e.onSuggestionClick(m)}var d=X(),f=C(d);{var h=m=>{var g=Fu(),p=c(g);{var _=A=>{var T=Wu(),k=c(T);M(()=>I(k,e.title)),v(A,T)};P(p,A=>{e.title&&A(_)})}var y=u(p,2),x=c(y);xu(x,{class:"text-base-content/70 mr-1",size:14});var S=u(x,2);Fe(S,17,()=>s(o),A=>A.id,(A,T)=>{var k=Vu();k.__click=[Qu,l,T];var $=c(k);{var D=E=>{var z=X(),te=C(z);br(te,()=>s(T).icon,(K,U)=>{U(K,{class:"h-3 w-3"})}),v(E,z)};P($,E=>{s(T).icon&&E(D)})}var R=u($);M(()=>{ke(k,1,`btn btn-primary ${a()??""} ${n()??""}`),k.disabled=i()||s(T).disabled,or(k,"title",s(T).disabled?"Déjà sélectionné":s(T).label),I(R,` ${s(T).label??""}`)}),v(A,k)}),v(m,g)};P(f,m=>{s(o).length>0&&m(h)})}v(t,d),Y()}Ve(["click"]);const Ku=[{value:"kg",label:"kg"},{value:"gr.",label:"gr."},{value:"l.",label:"l."},{value:"ml",label:"ml"},{value:"unité",label:"unité·s"},{value:"bottes",label:"botte·s"}];var Ju=w("<option> </option>"),Yu=w('<fieldset class="fieldset"><div class="flex gap-2"><label class="input w-32"><!> <input type="number" step="1" min="0" placeholder="Quantité" required/></label> <select class="custom-select input w-28" required><option disabled selected>Unité</option><!></select></div></fieldset>');function Ha(t,e){J(e,!0);let r=me(e,"quantity",15),a=me(e,"unit",15),n=me(e,"disabled",3,!1);var i=Yu(),o=c(i),l=c(o),d=c(l);Ua(d,{class:"h-4 w-4 opacity-50"});var f=u(d,2),h=u(l,2),m=c(h);m.value=m.__value="";var g=u(m);Fe(g,17,()=>Ku,Vt,(p,_)=>{let y=()=>s(_).value,x=()=>s(_).label;var S=Ju(),A=c(S),T={};M(()=>{I(A,x()),T!==(T=y())&&(S.value=(S.__value=y())??"")}),v(p,S)}),M(()=>{f.disabled=n(),h.disabled=n()}),We(f,r),ra(h,a),v(t,i),Y()}var Zu=w('<div><label class="input w-72"><!> <input/></label> <!></div>');function Hr(t,e){J(e,!0);let r=me(e,"value",15),a=me(e,"suggestions",19,()=>[]),n=me(e,"disabled",3,!1),i=me(e,"flexCol",3,!1),o=we(e,["$$slots","$$events","$$legacy","value","suggestions","disabled","flexCol"]);const l=F(()=>a().map(_=>({id:_,label:_,disabled:_===r()})));var d=Zu(),f=c(d),h=c(f);gr(h,{class:"h-4 w-4 opacity-50"});var m=u(h,2);is(m,()=>({type:"text",placeholder:"Magasin",maxlength:"50",disabled:n(),...o}),void 0,void 0,void 0,!0);var g=u(f,2);{var p=_=>{Bs(_,{get suggestions(){return s(l)},onSuggestionClick:y=>r(y.label),buttonSize:"btn-xs"})};P(g,_=>{a().length>0&&_(p)})}M(()=>ke(d,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`)),We(m,r),v(t,d),Y()}var Xu=w('<div><label class="input w-72"><!> <input type="text" placeholder="Qui" maxlength="25"/></label> <!></div>');function da(t,e){J(e,!0);let r=me(e,"value",15),a=me(e,"suggestions",19,()=>[]),n=me(e,"disabled",3,!1),i=me(e,"flexCol",3,!1);const o=F(()=>a().map(p=>({id:p,label:p,disabled:p===r()})));var l=Xu(),d=c(l),f=c(d);js(f,{class:"h-4 w-4 opacity-50"});var h=u(f,2);h.__keydown=function(...p){e.onkeydown?.apply(this,p)};var m=u(d,2);{var g=p=>{Bs(p,{get suggestions(){return s(o)},onSuggestionClick:_=>r(_.label),buttonSize:"btn-xs"})};P(m,p=>{a().length>0&&p(g)})}M(()=>{ke(l,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`),h.disabled=n()}),We(h,r),v(t,l),Y()}Ve(["keydown"]);var ed=w('<textarea class="textarea w-full text-sm" placeholder="Commentaire (optionnel)" rows="2" maxlength="250"></textarea>');function Gr(t,e){J(e,!0);let r=me(e,"value",15),a=me(e,"disabled",3,!1);var n=ed();M(()=>n.disabled=a()),We(n,r),v(t,n),Y()}var td=w('<label class="input w-28"><!> <input type="number" step="1" min="0" placeholder="0.00"/></label>');function Ls(t,e){J(e,!0);let r=me(e,"value",15),a=me(e,"disabled",3,!1);var n=td(),i=c(n);du(i,{class:"h-4 w-4 opacity-50"});var o=u(i,2);M(()=>o.disabled=a()),We(o,r),v(t,n),Y()}var rd=w('<label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label>'),ad=w(`<div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Acheté</option><option>Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div>`);function ui(t,e){J(e,!0);let r=me(e,"status",15),a=me(e,"deliveryDate",15),n=me(e,"disabled",3,!1);var i=ad(),o=c(i),l=c(o),d=c(l);d.value=d.__value="delivered";var f=u(d);f.value=f.__value="ordered";var h=u(l,2),m=u(o,2);{var g=p=>{var _=rd(),y=u(c(_),2);M(()=>y.disabled=n()),We(y,a),v(p,_)};P(m,p=>{r()==="ordered"&&p(g)})}M(()=>{l.disabled=n(),ke(h,1,`label ${r()==="delivered"?"":"hidden"}`)}),ra(l,r),v(t,i),Y()}function An(t,e,r){s(e)||r.onClose()}var sd=w('<div class="alert alert-error"><!> <span> </span></div>'),nd=w('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),od=w(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes <strong>pour la période sélectionnée</strong>, c'est à dire le besoin total pour chaque produit sur cette
            période moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),id=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),ld=w("<!> ",1),cd=w(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="mb-4 flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><!> <!></div> <!> <!> <div><!></div></div> <div class="mb-4"><h4 class=" font-medium">Produits concernés</h4> <div class="text-base-content/70 mb-4">les quantités manquantes du <span class="badge badge-info badge-sm"> </span> au <span class="badge badge-info badge-sm"> </span> pour les produits suivant seront déclarés "acheté"</div> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function ud(t,e){J(e,!0);let r=j(!1),a=j(null),n=j(null),i=qe({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),o=j(qe(new Set));Yt(()=>{b(o,new Set(e.products.map(H=>H.$id)),!0)});const l=F(()=>e.products.filter(H=>s(o).has(H.$id))),d=F(()=>s(l).length!==0),f=F(()=>{const H=Z.dateRange;let q="";return H?.start&&H?.end&&(H.start===H.end?q=` - ${fr(H.start)}`:q=` - Du ${fr(H.start)} au ${fr(H.end)}`),`Achat groupé (${s(l).length} produits sélectionnés)${q}`});async function h(){if(!s(d)||s(r))return;b(r,!0),b(a,null),b(n,null);const H=`FACTURE_${Date.now()}`,q=s(l).map(ue=>ue.$id);Z.setSyncStatus(q,!0),At.backgroundOperation={isRunning:!0,name:`Achat groupé (${s(l).length} produits)`,progress:0};const ie=[];for(const ue of s(l)){const Q=(Z.getProductModelById(ue.$id)?.stats.missingQuantities||[]).filter(_e=>_e.q<0).map(_e=>({..._e,q:Math.abs(_e.q)}));ie.push({productId:ue.$id,isSynced:ue.isSynced,productData:ue,missingQuantities:Q})}const $e={invoiceId:H,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(l).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${ie.length} produits...`),e.onClose();try{const ue=await Iu(Z.currentMainId,ie,$e);if(ue.success)console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${ue.totalProductsCreated} produits synchronisés, ${ue.totalPurchasesCreated} achats créés, ${ue.totalExpensesCreated} dépenses globales`),He.success(`Achat groupé réussi ! ${ue.totalPurchasesCreated} achats créés.`),e.onSuccess?.();else throw new Error(ue.error||"Erreur lors de la création de l'achat groupé")}catch(ue){const Me=ue instanceof Error?ue.message:"Erreur inconnue";console.error("[GroupPurchaseModal] Erreur création achat groupé:",ue),He.error(`Erreur achat groupé: ${Me}`),Z.clearSyncStatus()}finally{b(r,!1),At.backgroundOperation={isRunning:!1,name:"",progress:0}}}function m(H){const q=new Set(s(o));q.has(H)?q.delete(H):q.add(H),b(o,q,!0)}const g=F(()=>e.products.map(H=>{const q=Z.getProductModelById(H.$id);return{id:H.$id,label:H.productName,title:`${H.productName} - Manque: ${q?.stats.formattedMissingQuantities||"-"}`,badge:q?.stats.formattedMissingQuantities||"-"}}));var p=cd(),_=c(p),y=c(_),x=c(y),S=c(x);yr(S,{class:"h-5 w-5"});var A=u(S),T=u(x,2);T.__click=[An,r,e];var k=c(T);Nt(k,{class:"h-4 w-4"});var $=u(y,2),D=c($);{var R=H=>{var q=sd(),ie=c(q);ua(ie,{class:"h-4 w-4"});var $e=u(ie,2),ue=c($e);M(()=>I(ue,s(a))),v(H,q)};P(D,H=>{s(a)&&H(R)})}var E=u(D,2);{var z=H=>{var q=nd(),ie=c(q);jr(ie,{class:"h-4 w-4"});var $e=u(ie,2),ue=c($e),Me=u(ue);{var Q=Be=>{var Ge=dt("+ 1 dépense globale");v(Be,Ge)};P(Me,Be=>{s(n).expense&&Be(Q)})}var _e=u(Me,2);{var Le=Be=>{var Ge=dt();M(()=>I(Ge,`(traité en ${s(n).batches??""} lots)`)),v(Be,Ge)};P(_e,Be=>{s(n).batches&&s(n).batches>1&&Be(Le)})}M(()=>I(ue,`Achat groupé créé avec succès ! ${s(n).purchases??""} produit(s) validés `)),v(H,q)};P(E,H=>{s(n)&&H(z)})}var te=u(E,2),K=c(te);ci(K,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit sur la période sélectionnée.",class:"bg-base-200",children:(H,q)=>{var ie=od();v(H,ie)},$$slots:{default:!0}});var U=u(te,2),ce=u(c(U),2),pe=c(ce);Hr(pe,{get suggestions(){return Z.uniqueStores},get disabled(){return s(r)},get value(){return i.store},set value(H){i.store=H}});var Se=u(pe,2);da(Se,{get suggestions(){return Z.uniqueWho},get disabled(){return s(r)},get value(){return i.who},set value(H){i.who=H}});var G=u(ce,2);Ls(G,{get disabled(){return s(r)},get value(){return i.expense},set value(H){i.expense=H}});var ve=u(G,2);ui(ve,{get disabled(){return s(r)},get status(){return i.status},set status(H){i.status=H},get deliveryDate(){return i.deliveryDate},set deliveryDate(H){i.deliveryDate=H}});var ye=u(ve,2),ae=c(ye);Gr(ae,{get disabled(){return s(r)},get value(){return i.notes},set value(H){i.notes=H}});var re=u(U,2),ge=u(c(re),2),oe=u(c(ge)),B=c(oe),V=u(oe,2),N=c(V),ee=u(ge,2);sa(ee,{get items(){return s(g)},onToggleItem:m,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var O=u(re,2),le=c(O);le.__click=[An,r,e];var se=u(le,2);se.__click=h;var W=c(se);{var ne=H=>{var q=id();v(H,q)},xe=H=>{var q=ld(),ie=C(q);yr(ie,{class:"h-4 w-4"});var $e=u(ie);M(()=>I($e,` Valider ${s(l).length??""} produit(s)`)),v(H,q)};P(W,H=>{s(r)?H(ne):H(xe,!1)})}M((H,q)=>{I(A,` ${s(f)??""}`),T.disabled=s(r),I(B,H),I(N,q),le.disabled=s(r),se.disabled=s(r)||!s(d)},[()=>fr(Z.dateRange.start),()=>fr(Z.dateRange.start)]),v(t,p),Y()}Ve(["click"]);function Xa(t,e,r,a){e(!1),b(r,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0),b(a,null)}var dd=w('<div class="alert alert-error text-sm"><!> <span> </span></div>'),vd=(t,e)=>e(!0),fd=w('<span class="loading loading-spinner"></span>'),hd=w('<span class="loading loading-spinner"></span>'),pd=w('<div role="dialog"><div class="modal-box relative w-10/12 max-w-5xl"><button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" aria-label="Fermer"><!></button> <h3 class="text-lg font-bold">Ajouter un produit</h3> <form class="mt-6 space-y-4"><!> <fieldset class="space-y-4"><div class="flex flex-wrap gap-4"><fieldset class="fieldset"><label class="input w-72"><!> <input id="product-name" type="text" placeholder="Nom du produit"/></label></fieldset> <!></div> <fieldset class="fieldset"><div class="flex flex-wrap items-baseline gap-2"><label class="input w-72"><!> <input id="product-type" type="text" placeholder="type / catégorie"/></label> <!></div></fieldset> <!> <!> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-success"/> <span class="label-text flex items-center gap-2"><!> Produit frais</span></label></fieldset> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-info"/> <span class="label-text flex items-center gap-2"><!> Produit surgelé</span></label></fieldset></fieldset> <div class="modal-action flex justify-between"><button type="button" class="btn btn-ghost">Annuler</button> <div class="flex gap-2"><button type="button" class="btn btn-secondary"><!> Ajouter et créer un nouveau</button> <button type="submit" class="btn btn-primary"><!> Ajouter et fermer</button></div></div></form></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></div>');function gd(t,e){J(e,!0);let r=me(e,"open",15,!1),a=j(!1),n=j(null),i=j(!1),o=j(qe({productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""}));const l=F(()=>s(o).productName.trim().length>0&&s(o).productType.trim().length>0),d=F(()=>Z.uniqueProductTypes.map(Q=>({id:Q,label:Q})));async function f(Q=!1){if(!(!s(l)||s(a))){b(a,!0),b(n,null),b(i,!1);try{if(!Z.currentMainId)throw new Error("Aucun événement principal sélectionné");const _e={productName:s(o).productName.trim(),productType:s(o).productType.trim(),store:s(o).store.trim()?{storeName:s(o).store.trim()}:void 0,who:s(o).who.trim()?[s(o).who.trim()]:void 0,pFrais:s(o).pFrais,pSurgel:s(o).pSurgel,quantity:s(o).quantity?{q:s(o).quantity,u:s(o).unit.trim()||"pièces"}:void 0};await Mo(_e,Z.currentMainId),b(i,!0),Q?(s(o).productName="",s(o).quantity=void 0,s(o).unit="",s(o).pFrais=!1,s(o).pSurgel=!1,setTimeout(()=>{document.getElementById("product-name")?.focus()},100)):(r(!1),b(o,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0))}catch(_e){console.error("Error creating product:",_e),b(n,"Erreur lors de la création du produit. Veuillez réessayer.")}finally{b(a,!1)}}}Yt(()=>{r()&&setTimeout(()=>{document.getElementById("product-name")?.focus()},50)});var h=pd();let m;var g=c(h),p=c(g);p.__click=[Xa,r,o,n];var _=c(p);Nt(_,{size:20});var y=u(p,4),x=c(y);{var S=Q=>{var _e=dd(),Le=c(_e);ua(Le,{size:18});var Be=u(Le,2),Ge=c(Be);M(()=>I(Ge,s(n))),v(Q,_e)};P(x,Q=>{s(n)&&Q(S)})}var A=u(x,2),T=c(A),k=c(T),$=c(k),D=c($);wu(D,{class:"text-base-content/50 h-5 w-5"});var R=u(D,2),E=u(k,2);Ha(E,{get disabled(){return s(a)},get quantity(){return s(o).quantity},set quantity(Q){s(o).quantity=Q},get unit(){return s(o).unit},set unit(Q){s(o).unit=Q}});var z=u(T,2),te=c(z),K=c(te),U=c(K);Tu(U,{class:"text-base-content/50 h-5 w-5"});var ce=u(U,2),pe=u(K,2);Bs(pe,{get suggestions(){return s(d)},onSuggestionClick:Q=>s(o).productType=Q.label,get disabled(){return s(a)}});var Se=u(z,2);Hr(Se,{get suggestions(){return Z.uniqueStores},get disabled(){return s(a)},get value(){return s(o).store},set value(Q){s(o).store=Q}});var G=u(Se,2);da(G,{get suggestions(){return Z.uniqueWho},get disabled(){return s(a)},get value(){return s(o).who},set value(Q){s(o).who=Q}});var ve=u(G,2),ye=c(ve),ae=c(ye),re=u(ae,2),ge=c(re);oi(ge,{class:"h-4 w-4"});var oe=u(ve,2),B=c(oe),V=c(B),N=u(V,2),ee=c(N);Os(ee,{class:"h-4 w-4"});var O=u(A,2),le=c(O);le.__click=[Xa,r,o,n];var se=u(le,2),W=c(se);W.__click=[vd,f];var ne=c(W);{var xe=Q=>{var _e=fd();v(Q,_e)},H=Q=>{Rs(Q,{size:18})};P(ne,Q=>{s(a)?Q(xe):Q(H,!1)})}var q=u(W,2),ie=c(q);{var $e=Q=>{var _e=hd();v(Q,_e)};P(ie,Q=>{s(a)&&Q($e)})}var ue=u(g,2),Me=c(ue);Me.__click=[Xa,r,o,n],M(Q=>{m=ke(h,1,"modal",null,m,Q),A.disabled=s(a),R.disabled=s(a),ce.disabled=s(a),ae.disabled=s(a),V.disabled=s(a),le.disabled=s(a),W.disabled=s(a)||!s(o).productName,q.disabled=s(a)||!s(o).productName},[()=>({"modal-open":r()})]),Nr("submit",y,Q=>{Q.preventDefault(),f(!1)}),We(R,()=>s(o).productName,Q=>s(o).productName=Q),We(ce,()=>s(o).productType,Q=>s(o).productType=Q),cs(ae,()=>s(o).pFrais,Q=>s(o).pFrais=Q),cs(V,()=>s(o).pSurgel,Q=>s(o).pSurgel=Q),v(t,h),Y()}Ve(["click"]);function vs(t){switch(t.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Xc};case"animaux":return{displayName:"Viandes et Poissons",icon:eu};case"legumes":return{displayName:"Fruits et Légumes",icon:ru};case"sucres":return{displayName:"Sucrées",icon:tu};case"lof":return{displayName:"L.O.F",icon:uu};case"autres":return{displayName:"Autres",icon:au};case"epices":return{displayName:"Assaisonnements",icon:hu};case"frais":return{displayName:"Produits Frais",icon:Pu};default:return{displayName:t,icon:Ua}}}function fs(t,e){return e==="kg"?{quantity:t*1e3,unit:"gr."}:e==="l."?{quantity:t*1e3,unit:"ml"}:{quantity:t,unit:e}}function zs(t,e){let r,a;if(e==="gr."&&t>=1e3){const n=t/1e3;r=es(n),a="kg"}else if(e==="ml"&&t>=1e3){const n=t/1e3;r=es(n),a="l"}else r=es(t),a=e;return`${r} ${a}`}function es(t){return(Math.round(t*10)/10).toString().replace(/\.0$/,"")}function Ga(t){if(!t)return"-";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}function md(t){if(!t)return"";try{return new Date(t).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short"})}catch{return t}}function hs(t){switch(t){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function Tn(t){return t?Ga(t):"-"}function _d(t){if(!t?.length)return[];const e=t.reduce((r,a)=>{const n=a.status||"direct",i=a.unit||"unit",o=`${n}_${i}`;if(!r[o]){const l=hs(n);r[o]={status:n,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:bd(n),deliveryDate:n==="ordered"&&a.deliveryDate?md(a.deliveryDate):void 0}}return r[o].quantity+=a.quantity||0,r},{});return Object.values(e).map(r=>({...r,quantity:zs(r.quantity,r.unit).replace(` ${r.unit}`,"")}))}function bd(t){switch(t){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"Check";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}class yd{constructor(e,r="recettes"){this.productId=e,this.currentTab=r,this.initForms()}#e=j(!1);get loading(){return s(this.#e)}set loading(e){b(this.#e,e,!0)}#t=j(null);get error(){return s(this.#t)}set error(e){b(this.#t,e,!0)}#r=j("recettes");get currentTab(){return s(this.#r)}set currentTab(e){b(this.#r,e,!0)}#o=F(()=>{const e=this.productId;return Z.getEnrichedProductById(e)});get product(){return s(this.#o)}set product(e){b(this.#o,e)}#i=F(()=>this.product?.who??[]);get whoList(){return s(this.#i)}set whoList(e){b(this.#i,e)}#n=F(()=>this.product?.stockParsed??null);get stockParsed(){return s(this.#n)}set stockParsed(e){b(this.#n,e)}#l=F(()=>this.product?.purchases??[]);get purchasesList(){return s(this.#l)}set purchasesList(e){b(this.#l,e)}#c=F(()=>this.product?.byDate?$o(this.product.byDate):[]);get recipes(){return s(this.#c)}set recipes(e){b(this.#c,e)}#d=j(qe({purchase:{quantity:null,unit:"",store:"",who:At.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]}));get forms(){return s(this.#d)}set forms(e){b(this.#d,e,!0)}#u=j(qe({overrideManagerEditMode:!1}));get uiStates(){return s(this.#u)}set uiStates(e){b(this.#u,e,!0)}#v=j(null);get editingPurchaseId(){return s(this.#v)}set editingPurchaseId(e){b(this.#v,e,!0)}#a=F(()=>this.editingPurchaseId?this.purchasesList.find(e=>e.$id===this.editingPurchaseId)??null:null);get editingPurchaseData(){return s(this.#a)}set editingPurchaseData(e){b(this.#a,e)}#f=j(null);get originalFormsSnapshot(){return s(this.#f)}set originalFormsSnapshot(e){b(this.#f,e,!0)}initForms(){const e=Z.getEnrichedProductById(this.productId);e&&(this.forms.purchase.quantity=e.missingQuantityArray[0]?.q??null,this.forms.purchase.unit=e.totalNeededArray[0]?.u??"",this.forms.purchase.store=e.storeInfo?.storeName??"",this.forms.purchase.who=At.userName()??"",this.forms.purchase.status=this.forms.purchase.status||"delivered",this.forms.stock.unit=e.totalNeededArray[0]?.u??"",this.forms.store.name=e.storeInfo?.storeName??"",this.forms.store.comment=e.storeInfo?.storeComment??null,this.forms.who=e.who?[...e.who]:[],this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})}#h=F(()=>this.originalFormsSnapshot?{store:this.forms.store.name!==this.originalFormsSnapshot.store.name||this.forms.store.comment!==this.originalFormsSnapshot.store.comment,stock:this.hasStockChanges(),who:JSON.stringify(this.forms.who)!==JSON.stringify(this.originalFormsSnapshot.whoList)}:{store:!1,stock:!1,who:!1});get hasChanges(){return s(this.#h)}set hasChanges(e){b(this.#h,e)}#p=F(()=>!!(this.originalFormsSnapshot&&(this.hasChanges.store||this.hasChanges.stock||this.hasChanges.who)));get hasAnyChanges(){return s(this.#p)}set hasAnyChanges(e){b(this.#p,e)}hasStockChanges(){return this.isStockFormValid?this.stockParsed?this.forms.stock.quantity.toString()!==this.stockParsed.quantity||this.forms.stock.unit!==this.stockParsed.unit||(this.forms.stock.notes||"")!==(this.stockParsed.notes||""):!0:!1}get isPurchaseFormValid(){return this.forms.purchase.quantity!==null&&this.forms.purchase.quantity!==0&&(this.forms.purchase.unit?.trim()??"")!==""}get isStockFormValid(){return this.forms.stock.quantity!==null&&this.forms.stock.quantity>0&&(this.forms.stock.unit?.trim()??"")!==""}setCurrentTab(e){this.currentTab=e}async addPurchase(){this.product&&await this.withLoading(async()=>{if(!this.forms.purchase.quantity||!this.forms.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!Z.currentMainId)throw new Error("mainId non disponible");const{quantity:e,unit:r}=fs(this.forms.purchase.quantity,this.forms.purchase.unit);this.product.isSynced||await Ut(this.product.$id,{},i=>Z.getEnrichedProductById(i));const a=this.forms.purchase.status||"delivered";let n=this.forms.purchase.deliveryDate||null;a==="delivered"&&!n&&(n=new Date().toISOString()),await jo({products:[this.product.$id],mainId:Z.currentMainId,unit:r,quantity:e,store:this.forms.purchase.store||null,who:this.forms.purchase.who||null,notes:this.forms.purchase.notes||"",price:this.forms.purchase.price||null,status:a,orderDate:this.forms.purchase.orderDate||null,deliveryDate:n}),this.forms.purchase={quantity:this.product.missingQuantityArray[0]?.q??null,unit:this.product.totalNeededArray[0]?.u??"",store:this.forms.purchase.store,who:this.forms.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}startEditPurchase(e){this.editingPurchaseId=e.$id}cancelEditPurchase(){this.editingPurchaseId=null}async updateEditedPurchase(e){e.$id&&await this.withLoading(async()=>{const{quantity:r,unit:a}=fs(e.quantity,e.unit),n=e.status||null;let i=e.deliveryDate||null;n==="delivered"&&!i&&(i=new Date().toISOString()),await Ns(e.$id,{unit:a,quantity:r,store:e.store||null,who:e.who||null,notes:e.notes||"",price:e.price||null,status:n,orderDate:e.orderDate||null,deliveryDate:i}),this.editingPurchaseId=null},"Achat modifié avec succès")}async removePurchase(e){const r=this.purchasesList.find(a=>a.$id===e);r&&confirm(`Supprimer cet achat (${r.quantity} ${r.unit}) ?`)&&await this.withLoading(async()=>{await Bo(e)},"Achat supprimé avec succès")}async setStock(){this.product&&await this.withLoading(async()=>{if(!this.forms.stock.quantity||!this.forms.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const e={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};this.product.isSynced?await ds(this.product.$id,JSON.stringify(e)):await Ut(this.product.$id,{stockReel:JSON.stringify(e)},r=>Z.getEnrichedProductById(r)),this.forms.stock.quantity=null,this.forms.stock.notes="",this.forms.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async removeStock(){this.product&&confirm("Supprimer le stock actuel ?")&&await this.withLoading(async()=>{this.product.isSynced?await ds(this.product.$id,null):await Ut(this.product.$id,{stockReel:null},e=>Z.getEnrichedProductById(e))},"Stock supprimé")}async setWho(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Ro(this.product.$id,e):await Ut(this.product.$id,{who:e},r=>Z.getEnrichedProductById(r))},"Volontaires mis à jour")}async updateStore(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Co(this.product.$id,e):await Ut(this.product.$id,{store:JSON.stringify(e)},r=>Z.getEnrichedProductById(r))},"Magasin mis à jour")}async setOverride(e){this.product&&await this.withLoading(async()=>{this.product.isSynced?await Is(this.product.$id,e,!0):await Ut(this.product.$id,{totalNeededOverride:JSON.stringify(e)},r=>Z.getEnrichedProductById(r))},"Override appliqué")}async removeOverride(){this.product&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await this.withLoading(async()=>{await Oo(this.product.$id,!0)},"Override supprimé")}async saveAllChanges(){!this.product||!this.hasAnyChanges||await this.withLoading(async()=>{const e={};if(this.hasChanges.stock&&this.forms.stock.quantity&&this.forms.stock.unit){const r={quantity:this.forms.stock.quantity.toString(),unit:this.forms.stock.unit,notes:this.forms.stock.notes,dateTime:this.forms.stock.dateTime};e.stockReel=JSON.stringify(r)}if(this.hasChanges.who&&(e.who=this.forms.who),this.hasChanges.store){const r={storeName:this.forms.store.name||"",storeComment:this.forms.store.comment||void 0};e.storeInfo=r}Object.keys(e).length>0&&(await qo(this.product.$id,e,r=>Z.getEnrichedProductById(r)),this.originalFormsSnapshot={purchase:{...this.forms.purchase},stock:{...this.forms.stock},store:{...this.forms.store},whoList:[...this.forms.who]})},"Modifications enregistrées")}resetForms(){this.uiStates.overrideManagerEditMode=!1,this.editingPurchaseId=null,this.initForms(),console.log("[ProductModalState] Formulaires et états UI réinitialisés")}async withLoading(e,r){this.loading=!0,this.error=null;try{const a=await e();return r&&this.showToast("success",r),a}catch(a){const n=a instanceof Error?a.message:"Une erreur est survenue";return this.error=n,this.showToast("error",n),console.error("[ProductModalState]",a),null}finally{this.loading=!1}}showToast(e,r){const a=new CustomEvent("toast",{detail:{type:e,message:r}});window.dispatchEvent(a)}formatQuantity=zs;formatDate=Ga}var wd=w('<div class="text-xs font-medium text-base-content/60 mb-1"> </div>'),Sd=w('<div class="text-xs text-base-content/60 mt-1"> </div>'),xd=w('<div class="font-medium"> </div> <!>',1),Ed=w('<pre class="text-xs"> </pre>'),Pd=w('<span class="text-base-content/50 italic">Non défini</span>'),$d=w('<div class="bg-base-300/50 rounded p-2 text-left"><!> <div class="text-sm"><!></div></div>'),Ad=w('<div class="bg-base-200/50 border border-warning/20 rounded-lg p-4 text-center"><div class="flex items-center justify-center gap-2 mb-2"><!> <!> <span class="font-medium text-warning"> </span></div> <p class="text-sm text-base-content/70 mb-3"> </p> <!></div>');function Wa(t,e){J(e,!0);let r=me(e,"title",3,"Événement terminé"),a=me(e,"message",3,"Cet événement est terminé. Ces données ne sont plus modifiables mais sont conservées pour consultation."),n=me(e,"showData",3,!0),i=me(e,"data",3,null),o=me(e,"dataLabel",3,"");var l=Ad(),d=c(l),f=c(d);ri(f,{class:"h-5 w-5 text-warning"});var h=u(f,2);gu(h,{class:"h-4 w-4 text-warning/70"});var m=u(h,2),g=c(m),p=u(d,2),_=c(p),y=u(p,2);{var x=S=>{var A=$d(),T=c(A);{var k=z=>{var te=wd(),K=c(te);M(()=>I(K,`${o()??""} :`)),v(z,te)};P(T,z=>{o()&&z(k)})}var $=u(T,2),D=c($);{var R=z=>{var te=dt();M(()=>I(te,i())),v(z,te)},E=z=>{var te=X(),K=C(te);{var U=pe=>{var Se=dt();M(G=>I(Se,G),[()=>i().join(", ")]),v(pe,Se)},ce=pe=>{var Se=X(),G=C(Se);{var ve=ae=>{var re=X(),ge=C(re);{var oe=V=>{var N=xd(),ee=C(N),O=c(ee),le=u(ee,2);{var se=W=>{var ne=Sd(),xe=c(ne);M(()=>I(xe,i().storeComment)),v(W,ne)};P(le,W=>{i().storeComment&&W(se)})}M(()=>I(O,i().storeName)),v(V,N)},B=V=>{var N=Ed(),ee=c(N);M(O=>I(ee,O),[()=>JSON.stringify(i(),null,2)]),v(V,N)};P(ge,V=>{i().storeName?V(oe):V(B,!1)})}v(ae,re)},ye=ae=>{var re=Pd();v(ae,re)};P(G,ae=>{typeof i()=="object"&&i()!==null?ae(ve):ae(ye,!1)},!0)}v(pe,Se)};P(K,pe=>{Array.isArray(i())&&i().length>0?pe(U):pe(ce,!1)},!0)}v(z,te)};P(D,z=>{typeof i()=="string"||typeof i()=="number"?z(R):z(E,!1)})}v(S,A)};P(y,S=>{n()&&i()&&S(x)})}M(()=>{I(g,r()),I(_,a())}),v(t,l),Y()}function Td(t,e){e().isPurchaseFormValid&&(e().forms.purchase.status==="ordered"&&!e().forms.purchase.orderDate&&(e().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),e().addPurchase())}function kd(t,e,r){const a=e().editingPurchaseData;!a||!r(a)||e().updateEditedPurchase(a)}function Dd(t,e){e().cancelEditPurchase()}var Id=w('<span class="loading loading-spinner loading-sm"></span>'),Nd=w('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="space-y-6"><div class="flex flex-wrap items-baseline gap-4"><!> <!> <!> <!></div> <div><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div>'),Md=w('<div class="mt-4 py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Cd=w("<th>Actions</th>"),Rd=w('<span class="loading loading-spinner loading-sm"></span>'),Od=w('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="1" min="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="50"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Acheté</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),qd=(t,e,r)=>e(s(r)),jd=(t,e,r)=>e(s(r).$id),Bd=w('<span class="loading loading-spinner loading-sm"></span>'),Ld=w('<td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td>'),zd=w('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><!></tr>'),Ud=w('<div class="mt-4 overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><!></tr></thead><tbody></tbody></table></div>'),Hd=w('<div class="space-y-4"><!></div> <!>',1);function Gd(t,e){J(e,!0);let r=me(e,"modalState",7),a=me(e,"isArchiveMode",3,!1);function n(y){return y.quantity!==null&&y.quantity!==0&&y.unit?.trim()!==""}function i(y){r().removePurchase(y)}function o(y){r().startEditPurchase(y)}var l=Hd(),d=C(l),f=c(d);{var h=y=>{Wa(y,{title:"Achats non modifiables",message:"L'événement est terminé, les achats ne peuvent plus être ajoutés ou modifiés."})},m=y=>{var x=Nd(),S=c(x),A=u(c(S),2),T=c(A),k=c(T);Ha(k,{get disabled(){return r().loading},get quantity(){return r().forms.purchase.quantity},set quantity(G){r().forms.purchase.quantity=G},get unit(){return r().forms.purchase.unit},set unit(G){r().forms.purchase.unit=G}});var $=u(k,2);Ls($,{get disabled(){return r().loading},get value(){return r().forms.purchase.price},set value(G){r().forms.purchase.price=G}});var D=u($,2);Hr(D,{get suggestions(){return Z.uniqueStores},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.store},set value(G){r().forms.purchase.store=G}});var R=u(D,2);da(R,{get suggestions(){return Z.uniqueWho},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.who},set value(G){r().forms.purchase.who=G}});var E=u(T,2),z=c(E);Gr(z,{get disabled(){return r().loading},get value(){return r().forms.purchase.notes},set value(G){r().forms.purchase.notes=G}});var te=u(E,2);ui(te,{get disabled(){return r().loading},get status(){return r().forms.purchase.status},set status(G){r().forms.purchase.status=G},get deliveryDate(){return r().forms.purchase.deliveryDate},set deliveryDate(G){r().forms.purchase.deliveryDate=G}});var K=u(A,2),U=c(K);U.__click=[Td,r];var ce=c(U);{var pe=G=>{var ve=Id();v(G,ve)},Se=G=>{var ve=dt("Ajouter l'achat");v(G,ve)};P(ce,G=>{r().loading?G(pe):G(Se,!1)})}M(()=>U.disabled=r().loading||!r().isPurchaseFormValid),v(y,x)};P(f,y=>{a()?y(h):y(m,!1)})}var g=u(d,2);{var p=y=>{var x=Md(),S=c(x);yr(S,{class:"mx-auto mb-2 h-12 w-12"}),v(y,x)},_=y=>{var x=Ud(),S=c(x),A=c(S),T=c(A),k=u(c(T),8);{var $=R=>{var E=Cd();v(R,E)};P(k,R=>{a()||R($)})}var D=u(A);Fe(D,21,()=>r().purchasesList,R=>R.$id,(R,E,z)=>{var te=X(),K=C(te);{var U=pe=>{var Se=Od(),G=c(Se),ve=c(G),ye=c(ve),ae=u(ye,2),re=c(ae);re.value=re.__value="kg";var ge=u(re);ge.value=ge.__value="gr.";var oe=u(ge);oe.value=oe.__value="l.";var B=u(oe);B.value=B.__value="ml";var V=u(B);V.value=V.__value="unité";var N=u(V);N.value=N.__value="bottes";var ee=u(G),O=c(ee),le=u(ee),se=c(le),W=u(le),ne=c(W),xe=c(ne);xe.value=xe.__value="ordered";var H=u(xe);H.value=H.__value="delivered";var q=u(W),ie=c(q),$e=u(q),ue=c($e),Me=u($e),Q=c(Me),_e=u(Me),Le=c(_e),Be=u(_e),Ge=c(Be),Re=c(Ge);Re.__click=[kd,r,n];var Xe=c(Re);{var jt=Te=>{var Ye=Rd();v(Te,Ye)},Ae=Te=>{$u(Te,{class:"h-3 w-3"})};P(Xe,Te=>{r().loading?Te(jt):Te(Ae,!1)})}var Ie=u(Re,2);Ie.__click=[Dd,r];var ze=c(Ie);Nt(ze,{class:"h-3 w-3"}),M(Te=>Re.disabled=Te,[()=>r().loading||!n(s(E))]),We(ye,()=>s(E).quantity,Te=>s(E).quantity=Te),ra(ae,()=>s(E).unit,Te=>s(E).unit=Te),We(O,()=>s(E).store,Te=>s(E).store=Te),We(se,()=>s(E).who,Te=>s(E).who=Te),ra(ne,()=>s(E).status,Te=>s(E).status=Te),We(ie,()=>s(E).orderDate,Te=>s(E).orderDate=Te),We(ue,()=>s(E).deliveryDate,Te=>s(E).deliveryDate=Te),We(Q,()=>s(E).price,Te=>s(E).price=Te),We(Le,()=>s(E).notes,Te=>s(E).notes=Te),v(pe,Se)},ce=pe=>{var Se=zd(),G=c(Se),ve=c(G),ye=u(G),ae=c(ye),re=u(ye),ge=c(re),oe=u(re),B=c(oe),V=c(B),N=u(oe),ee=c(N),O=u(N),le=c(O),se=u(O),W=c(se),ne=u(se),xe=c(ne),H=u(ne);{var q=ie=>{var $e=Ld(),ue=c($e),Me=c(ue);Me.__click=[qd,o,E];var Q=c(Me);aa(Q,{class:"h-4 w-4"});var _e=u(Me,2);_e.__click=[jd,i,E];var Le=c(_e);{var Be=Re=>{var Xe=Bd();v(Re,Xe)},Ge=Re=>{Nt(Re,{class:"h-4 w-4"})};P(Le,Re=>{r().loading?Re(Be):Re(Ge,!1)})}M(()=>_e.disabled=r().loading),v(ie,$e)};P(H,ie=>{a()||ie(q)})}M((ie,$e,ue,Me,Q)=>{I(ve,ie),I(ae,s(E).store||"-"),I(ge,s(E).who||"-"),ke(B,1,`badge badge-sm ${$e??""}`),I(V,ue),I(ee,Me),I(le,Q),I(W,s(E).price?`${s(E).price}€`:"-"),I(xe,s(E).notes||"-")},[()=>zs(s(E).quantity,s(E).unit),()=>hs(s(E).status).class,()=>hs(s(E).status).text,()=>Tn(s(E).orderDate),()=>Tn(s(E).deliveryDate)]),v(pe,Se)};P(K,pe=>{r().editingPurchaseId===s(E).$id?pe(U):pe(ce,!1)})}v(R,te)}),v(y,x)};P(g,y=>{r().purchasesList.length===0?y(p):y(_,!1)})}v(t,l),Y()}Ve(["click"]);async function Wd(t,e){await e()?.removeStock()}var Qd=w(`Le stock réel est la quantité réelle du produit constaté dans le
            stock: <strong>il sera utilisé pour le calcul des quantités manquantes à se
              fournir à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantités manquantes à se fournir.`,1),Vd=(t,e)=>{e().forms.stock.quantity=null,e().forms.store.comment=""},Fd=w('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><!></div> <div><!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>'),Kd=w('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Jd=w('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),Yd=w('<span class="loading loading-spinner loading-xs"></span>'),Zd=w('<div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div>'),Xd=w('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <!></div></div>'),ev=w('<div class="space-y-4"><!></div> <!>',1);function tv(t,e){J(e,!0);let r=me(e,"modalState",7),a=me(e,"isArchiveMode",3,!1);var n=ev(),i=C(n),o=c(i);{var l=g=>{Wa(g,{title:"Stock non modifiable",message:"L'événement est terminé, le stock ne peut plus être modifié.",get data(){return r().stockParsed},dataLabel:"Stock actuel"})},d=g=>{var p=Fd(),_=c(p),y=c(_),x=c(y),S=u(y,2),A=c(S);ci(A,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(z,te)=>{var K=Qd();v(z,K)},$$slots:{default:!0}});var T=u(S,2),k=c(T);Ha(k,{get disabled(){return r().loading},get quantity(){return r().forms.stock.quantity},set quantity(z){r().forms.stock.quantity=z},get unit(){return r().forms.stock.unit},set unit(z){r().forms.stock.unit=z}});var $=u(T,2),D=c($);Gr(D,{get disabled(){return r().loading},get value(){return r().forms.stock.notes},set value(z){r().forms.stock.notes=z}});var R=u($,2),E=c(R);E.__click=[Vd,r],M(z=>{I(x,`Déclarer le stock réel du ${z??""}`),E.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),v(g,p)};P(o,g=>{a()?g(l):g(d,!1)})}var f=u(i,2);{var h=g=>{var p=Kd(),_=c(p);Yo(_,{class:"mx-auto mb-2 h-12 w-12"}),v(g,p)},m=g=>{var p=Xd(),_=c(p),y=u(c(_),2),x=c(y),S=u(c(x),2),A=c(S),T=u(x,2),k=u(c(T),2),$=c(k),D=u(T,2);{var R=te=>{var K=Jd(),U=u(c(K),2),ce=c(U);M(()=>I(ce,r().stockParsed.notes)),v(te,K)};P(D,te=>{r().stockParsed.notes&&te(R)})}var E=u(y,2);{var z=te=>{var K=Zd(),U=c(K);U.__click=[Wd,r];var ce=c(U);{var pe=G=>{var ve=Yd();v(G,ve)},Se=G=>{var ve=dt("Supprimer le stock");v(G,ve)};P(ce,G=>{r().loading?G(pe):G(Se,!1)})}M(()=>U.disabled=r().loading),v(te,K)};P(E,te=>{a()||te(z)})}M(te=>{I(A,`${r().stockParsed.quantity??""}
            ${r().stockParsed.unit??""}`),I($,te)},[()=>Ga(r().stockParsed.dateTime)]),v(g,p)};P(f,g=>{r().stockParsed?g(m,!1):g(h)})}v(t,n),Y()}Ve(["click"]);function rv(t,e,r){e().forms.who=[...e().whoList],b(r,"")}var av=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},sv=w('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div>'),nv=w('<div class="space-y-4"><!></div>');function ov(t,e){J(e,!0);let r=me(e,"modalState",7),a=me(e,"isArchiveMode",3,!1),n=j("");const i=F(()=>{const _=new Set([...Z.uniqueWho,...r().forms.who]);return Array.from(_).map(y=>({id:y,label:y,selected:r().forms.who.includes(y)}))});function o(_){const y=_.trim();y&&!r().forms.who.includes(y)&&(r().forms.who=[...r().forms.who,y])}function l(_){r().forms.who=r().forms.who.filter(y=>y!==_)}function d(_){r().forms.who.includes(_)?l(_):o(_)}function f(){s(n).trim()&&(o(s(n)),b(n,""))}var h=nv(),m=c(h);{var g=_=>{Wa(_,{title:"Volontaires non modifiables",message:"L'événement est terminé, les volontaires assignés ne peuvent plus être modifiés."})},p=_=>{var y=sv(),x=c(y),S=u(c(x),4),A=c(S),T=c(A),k=c(T);js(k,{class:"h-4 w-4 opacity-50"});var $=u(k,2);$.__keydown=[av,f];var D=u(T,2);D.__click=f;var R=c(D);ii(R,{size:16});var E=u(A,2),z=u(c(E),2);sa(z,{get items(){return s(i)},onToggleItem:d,showIcon:!0,badgeSize:"btn-sm"});var te=u(x,2),K=c(te);K.__click=[rv,r,n],M(U=>{$.disabled=r().loading,D.disabled=U,K.disabled=r().loading},[()=>r().loading||!s(n).trim()]),We($,()=>s(n),U=>b(n,U)),v(_,y)};P(m,_=>{a()?_(g):_(p,!1)})}v(t,h),Y()}Ve(["keydown","click"]);var iv=(t,e)=>{e().forms.store.name="",e().forms.store.comment=""},lv=w(`<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`),cv=w('<div class="space-y-4"><!></div>');function uv(t,e){J(e,!0);let r=me(e,"modalState",7),a=me(e,"isArchiveMode",3,!1);const n=F(()=>r()?.hasChanges?.store||!1);async function i(){if(!s(n))return;const h={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(h)}var o=cv(),l=c(o);{var d=h=>{{let m=F(()=>r().product?.storeInfo);Wa(h,{title:"Magasin non modifiable",message:"L'événement est terminé, les informations de magasin ne peuvent plus être modifiées.",get data(){return s(m)},dataLabel:"Magasin actuel"})}},f=h=>{var m=lv(),g=c(m),p=u(c(g),4),_=c(p),y=c(_);Hr(y,{get suggestions(){return Z.uniqueStores},get disabled(){return r().loading},onkeydown:T=>{T.key==="Enter"&&i()},get value(){return r().forms.store.name},set value(T){r().forms.store.name=T}});var x=u(_,2);Gr(x,{get disabled(){return r().loading},get value(){return r().forms.store.comment},set value(T){r().forms.store.comment=T}});var S=u(p,2),A=c(S);A.__click=[iv,r],M(()=>A.disabled=r().loading),v(h,m)};P(l,h=>{a()?h(d):h(f,!1)})}v(t,o),Y()}Ve(["click"]);var dv=w('<label class="input w-96"><!> <input type="text" placeholder="Commentaire (optionnel)" maxlength="250"/></label>');function vv(t,e){J(e,!0);let r=me(e,"value",15);me(e,"disabled",3,!1);var a=dv(),n=c(a);si(n,{size:20,class:"text-base-centent/70"});var i=u(n,2);We(i,r),v(t,a),Y()}function fv(t){const e=t-1;return e*e*e+1}function di(t,{delay:e=0,duration:r=400,easing:a=fv,axis:n="y"}={}){const i=getComputedStyle(t),o=+i.opacity,l=n==="y"?"height":"width",d=parseFloat(i[l]),f=n==="y"?["top","bottom"]:["left","right"],h=f.map(S=>`${S[0].toUpperCase()}${S.slice(1)}`),m=parseFloat(i[`padding${h[0]}`]),g=parseFloat(i[`padding${h[1]}`]),p=parseFloat(i[`margin${h[0]}`]),_=parseFloat(i[`margin${h[1]}`]),y=parseFloat(i[`border${h[0]}Width`]),x=parseFloat(i[`border${h[1]}Width`]);return{delay:e,duration:r,easing:a,css:S=>`overflow: hidden;opacity: ${Math.min(S*20,1)*o};${l}: ${S*d}px;padding-${f[0]}: ${S*m}px;padding-${f[1]}: ${S*g}px;margin-${f[0]}: ${S*p}px;margin-${f[1]}: ${S*_}px;border-${f[0]}-width: ${S*y}px;border-${f[1]}-width: ${S*x}px;min-${l}: 0`}}async function hv(t,e,r,a,n){if(!e())return;const i={totalOverride:{q:s(r),u:s(a)},comment:s(n)};await e().setOverride(i),e().uiStates.overrideManagerEditMode=!1}async function pv(t,e){e()&&(await e().removeOverride(),e().uiStates.overrideManagerEditMode=!1)}var gv=w('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Ancienne quantité calculée</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),mv=w('<div class="stat-desc italic">Recettes actuelles</div>'),_v=w('<div class="chat-bubble relative ms-auto mt-2 text-sm"> <!></div>'),bv=w('<div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins redéfinie manuellement</div> <div class="stat-value text-content-base/70 text-end text-lg"> </div> <!></div>'),yv=(t,e)=>e().uiStates.overrideManagerEditMode=!0,wv=w('<div class="ms-auto mt-auto"><button class="btn btn-primary btn-sm btn-soft"><!> <!></button></div>'),Sv=(t,e)=>e().uiStates.overrideManagerEditMode=!1,xv=w('<span class="loading loading-spinner loading-sm"></span>'),Ev=w('<span class="loading loading-spinner loading-sm"></span>'),Pv=w('<div class="mt-4 flex flex-wrap items-center gap-4"><!> <!> <div class="ms-auto"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div></div>'),$v=w('<div class="mb-2 space-y-4"><div class="bg-base-200 relative mb-4 flex rounded-xl p-4"><div class="grid"><div class="flex gap-4"><!> <div class="card bg-base-100 flex justify-between px-4 py-2"><div class="stat-title">Besoins calculées</div> <div class="stat-value text-content-base/90 text-end text-lg"> </div> <div class="ms-auto flex flex-wrap gap-4"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div> <!></div> <!> <!></div> <!></div></div></div>');function Av(t,e){J(e,!0);let r=me(e,"modalState",7);const a=F(()=>r().product?.totalNeededOverrideParsed),n=F(()=>r().product?.displayTotalOverride);let i=F(()=>s(a)?.hasUnresolvedChangedSinceOverride),o=F(()=>r().uiStates.overrideManagerEditMode),l=j(qe(r().product?.totalNeededOverrideParsed?.totalOverride.q||r().product?.totalNeededArray[0]?.q||0)),d=j(qe(r().product?.totalNeededOverrideParsed?.totalOverride.u||r().product?.totalNeededArray[0]?.u||"")),f=j(qe(r().product?.totalNeededOverrideParsed?.comment||"")),h=F(()=>s(l)>0&&s(d).trim()!=="");var m=X(),g=C(m);{var p=_=>{var y=$v(),x=c(y),S=c(x),A=c(S),T=c(A);{var k=B=>{var V=gv(),N=u(c(V),2),ee=c(N);M(()=>I(ee,s(a)?.oldTotalDisplay)),v(B,V)};P(T,B=>{s(a)?.oldTotalDisplay&&s(i)&&B(k)})}var $=u(T,2),D=u(c($),2),R=c(D),E=u(D,2),z=c(E),te=c(z),K=u(te);za(K,{class:"h-3 w-3"});var U=u(z,2),ce=c(U),pe=u(ce);li(pe,{class:"h-3 w-3"});var Se=u(E,2);{var G=B=>{var V=mv();v(B,V)};P(Se,B=>{s(a)?.oldTotalDisplay&&s(i)&&B(G)})}var ve=u($,2);{var ye=B=>{var V=bv(),N=u(c(V),2),ee=c(N),O=u(N,2);{var le=se=>{var W=_v(),ne=c(W),xe=u(ne);si(xe,{size:16,class:"text-base-content/60 absolute right-1 bottom-1 "}),M(()=>I(ne,`${s(a).comment??""} `)),v(se,W)};P(O,se=>{s(a).comment&&se(le)})}M(()=>I(ee,s(n))),v(B,V)};P(ve,B=>{s(n)&&s(a)&&B(ye)})}var ae=u(ve,2);{var re=B=>{var V=wv(),N=c(V);N.__click=[yv,r];var ee=c(N);{var O=W=>{var ne=dt("Redéfinir les besoins");v(W,ne)},le=W=>{var ne=dt("Définir manuellement les besoins");v(W,ne)};P(ee,W=>{s(a)?W(O):W(le,!1)})}var se=u(ee,2);aa(se,{size:16}),v(B,V)};P(ae,B=>{!e.isArchiveMode&&!s(o)&&B(re)})}var ge=u(A,2);{var oe=B=>{var V=Pv(),N=c(V);Ha(N,{get quantity(){return s(l)},set quantity(ue){b(l,ue,!0)},get unit(){return s(d)},set unit(ue){b(d,ue,!0)}});var ee=u(N,2);vv(ee,{get value(){return s(f)},set value(ue){b(f,ue,!0)}});var O=u(ee,2),le=c(O);le.__click=[Sv,r];var se=u(le,2);se.__click=[pv,r];var W=c(se);{var ne=ue=>{var Me=xv();v(ue,Me)},xe=ue=>{var Me=dt();M(()=>I(Me,`Réinitialiser le total calculé (${r().product.displayTotalNeeded??""}).`)),v(ue,Me)};P(W,ue=>{r().loading?ue(ne):ue(xe,!1)})}var H=u(se,2);H.__click=[hv,r,l,d,f];var q=c(H);{var ie=ue=>{var Me=Ev();v(ue,Me)},$e=ue=>{var Me=dt("Appliquer");v(ue,Me)};P(q,ue=>{r().loading?ue(ie):ue($e,!1)})}M(()=>{se.disabled=r().loading,H.disabled=r().loading||!s(h)}),Eo(1,V,()=>di),v(B,V)};P(ge,B=>{s(o)&&B(oe)})}M(()=>{I(R,r().product.displayTotalNeeded),I(te,`${r().product.nbRecipes??""} `),I(ce,`${r().product.totalAssiettes??""} `)}),v(_,y)};P(g,_=>{r().product&&_(p)})}v(t,m),Y()}Ve(["click"]);var Tv=w('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),kv=w('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Dv=w('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Iv=w('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Nv(t,e){J(e,!0);const r=F(()=>e.modalState.recipes);var a=Iv(),n=C(a);Av(n,{get modalState(){return e.modalState},get isArchiveMode(){return e.isArchiveMode}});var i=u(n,2),o=c(i),l=c(o);za(l,{class:"h-5 w-5"});var d=u(o,2);{var f=m=>{var g=Tv(),p=c(g);Ua(p,{class:"mx-auto mb-2 h-12 w-12"}),v(m,g)},h=m=>{var g=Dv(),p=c(g),_=u(c(p));Fe(_,21,()=>s(r),Vt,(y,x)=>{var S=kv(),A=c(S),T=c(A),k=u(A),$=c(k),D=u(k),R=c(D);M(E=>{I(T,`${s(x).r??""} (${(s(x).a||"-")??""} c.)`),I($,`${(s(x).q||s(x).qEq)??""} ${(s(x).u||s(x).uEq)??""}`),I(R,E)},[()=>Ga(s(x).date)]),v(y,S)}),v(m,g)};P(d,m=>{s(r).length===0?m(f):m(h,!1)})}v(t,a),Y()}function Mv(t,e,r){s(e)?.saveAllChanges().then(()=>{s(e)?.resetForms(),r.onClose()})}function kn(t,e,r){s(e)?.resetForms(),r.onClose()}var Cv=w('<div class="alert alert-warning py-0.5"><!> <span class="font-medium">Mode consultation</span> <span>Événement terminé</span></div>'),Rv=w('<div class="text-xl font-bold"> </div> <!> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Ov=w('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),qv=(t,e)=>e("recettes"),jv=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Bv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Lv=(t,e)=>e("magasins"),zv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Uv=(t,e)=>e("volontaires"),Hv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Gv=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Wv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Qv=(t,e)=>e("stock"),Vv=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Fv=w('<span class="badge badge-sm badge-secondary ml-1">1</span>'),Kv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Jv=(t,e)=>e("achats"),Yv=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Zv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Xv=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),ef=w('<span class="loading loading-spinner loading-sm"></span>'),tf=w('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),rf=w('<div id="product_modal"><div class="modal-box fixed top-0 flex h-lvh w-lvw flex-col overflow-auto md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function af(t,e){J(e,!0);let r=me(e,"initialTab",3,"recettes"),a=j(null);Yt(()=>{b(a,new yd(e.productId,r()),!0)});let n=F(()=>Z.isEventPassed);function i(x){s(a)?.setCurrentTab(x)}var o=rf(),l=c(o),d=c(l),f=c(d);{var h=x=>{var S=Rv(),A=C(S),T=c(A),k=u(A,2);{var $=K=>{var U=Cv(),ce=c(U);ri(ce,{class:"h-4 w-4"}),v(K,U)};P(k,K=>{s(a)&&s(n)&&K($)})}var D=u(k,2),R=c(D),E=c(R),z=u(R,2),te=u(c(z));M(()=>{I(T,s(a).product?.productName),I(E,s(a).product?.productType),I(te,` ${s(a).product?.displayTotalNeeded??""}`)}),v(x,S)},m=x=>{var S=Ov();v(x,S)};P(f,x=>{s(a)&&s(a).product?x(h):x(m,!1)})}var g=u(f,2);g.__click=[kn,a,e];var p=c(g);Nt(p,{class:"h-4 w-4"});var _=u(d,2);{var y=x=>{var S=tf(),A=C(S),T=c(A);T.__click=[qv,i];var k=c(T);za(k,{class:"mr-1 h-5 w-5"});var $=u(k,2);{var D=Q=>{var _e=jv(),Le=c(_e);M(()=>I(Le,s(a).product?.nbRecipes)),v(Q,_e)},R=Q=>{var _e=Bv();v(Q,_e)};P($,Q=>{s(a).product?.nbRecipes&&s(a).product?.nbRecipes>0?Q(D):Q(R,!1)})}var E=u(T,2);E.__click=[Lv,i];var z=c(E);gr(z,{class:"mr-1 h-5 w-5"});var te=u(z,2);{var K=Q=>{var _e=zv();v(Q,_e)};P(te,Q=>{s(a).hasChanges?.store&&Q(K)})}var U=u(E,2);U.__click=[Uv,i];var ce=c(U);Sa(ce,{class:"mr-1 h-5 w-5"});var pe=u(ce,2);{var Se=Q=>{var _e=Hv();v(Q,_e)},G=Q=>{var _e=X(),Le=C(_e);{var Be=Re=>{var Xe=Gv(),jt=c(Xe);M(()=>I(jt,s(a).product?.who.length)),v(Re,Xe)},Ge=Re=>{var Xe=Wv();v(Re,Xe)};P(Le,Re=>{s(a).product?.who&&s(a).product?.who.length>0?Re(Be):Re(Ge,!1)},!0)}v(Q,_e)};P(pe,Q=>{s(a).hasChanges?.who?Q(Se):Q(G,!1)})}var ve=u(U,2);ve.__click=[Qv,i];var ye=c(ve);Yo(ye,{class:"mr-1 h-5 w-5"});var ae=u(ye,2);{var re=Q=>{var _e=Vv();v(Q,_e)},ge=Q=>{var _e=X(),Le=C(_e);{var Be=Re=>{var Xe=Fv();v(Re,Xe)},Ge=Re=>{var Xe=Kv();v(Re,Xe)};P(Le,Re=>{s(a).stockParsed?Re(Be):Re(Ge,!1)},!0)}v(Q,_e)};P(ae,Q=>{s(a).hasChanges?.stock?Q(re):Q(ge,!1)})}var oe=u(ve,2);oe.__click=[Jv,i];var B=c(oe);yr(B,{class:"mr-1 h-5 w-5"});var V=u(B,2);{var N=Q=>{var _e=Yv(),Le=c(_e);M(()=>I(Le,s(a).purchasesList.length)),v(Q,_e)},ee=Q=>{var _e=Zv();v(Q,_e)};P(V,Q=>{s(a).purchasesList.length>0?Q(N):Q(ee,!1)})}var O=u(A,2),le=c(O);{var se=Q=>{var _e=Xv(),Le=c(_e);Nt(Le,{class:"h-4 w-4"});var Be=u(Le,2),Ge=c(Be);M(()=>I(Ge,`erreur : ${s(a).error??""}`)),v(Q,_e)};P(le,Q=>{s(a).error&&Q(se)})}var W=u(le,2),ne=c(W);Bl(ne,()=>s(a).currentTab,Q=>{var _e=X(),Le=C(_e);{var Be=Re=>{Nv(Re,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},Ge=Re=>{var Xe=X(),jt=C(Xe);{var Ae=ze=>{Gd(ze,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},Ie=ze=>{var Te=X(),Ye=C(Te);{var it=tt=>{tv(tt,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},st=tt=>{var ft=X(),yt=C(ft);{var wt=lt=>{ov(lt,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})},Bt=lt=>{var Mt=X(),dr=C(Mt);{var fe=be=>{uv(be,{get modalState(){return s(a)},get isArchiveMode(){return s(n)}})};P(dr,be=>{s(a).currentTab==="magasins"&&be(fe)},!0)}v(lt,Mt)};P(yt,lt=>{s(a).currentTab==="volontaires"?lt(wt):lt(Bt,!1)},!0)}v(tt,ft)};P(Ye,tt=>{s(a).currentTab==="stock"?tt(it):tt(st,!1)},!0)}v(ze,Te)};P(jt,ze=>{s(a).currentTab==="achats"?ze(Ae):ze(Ie,!1)},!0)}v(Re,Xe)};P(Le,Re=>{s(a).currentTab==="recettes"?Re(Be):Re(Ge,!1)})}v(Q,_e)});var xe=u(O,2),H=c(xe);H.__click=[kn,a,e];var q=c(H),ie=u(H,2);ie.__click=[Mv,a,e];var $e=c(ie);{var ue=Q=>{var _e=ef();v(Q,_e)},Me=Q=>{var _e=dt("Tout enregistrer");v(Q,_e)};P($e,Q=>{s(a).loading?Q(ue):Q(Me,!1)})}M(()=>{ke(T,1,`tab ${s(a).currentTab==="recettes"?"tab-active":""}`),ke(E,1,`tab ${s(a).currentTab==="magasins"?"tab-active":""}`),ke(U,1,`tab ${s(a).currentTab==="volontaires"?"tab-active":""}`),ke(ve,1,`tab ${s(a).currentTab==="stock"?"tab-active":""}`),ke(oe,1,`tab ${s(a).currentTab==="achats"?"tab-active":""}`),I(q,s(a)?.hasAnyChanges?"Annuler":"Fermer"),ie.disabled=s(a).loading||!s(a).hasAnyChanges}),v(x,S)};P(_,x=>{s(a)&&x(y)})}M(()=>ke(o,1,`modal ${(e.productId&&"modal-open")??""}`)),v(t,o),Y()}Ve(["click"]);var sf=(t,e,r)=>e(r),nf=w("<button><span> </span> <!></button>"),of=w('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),lf=(t,e)=>e.dateStore.selectUpcoming(),cf=(t,e)=>e.dateStore.selectAll(),uf=w('<div class="join my-2 ms-auto"><button type="button" name="options" aria-label=" Dates à venir">Dates à venir</button> <button type="button" name="options" aria-label=" Toutes les dates">Toutes les dates</button></div>'),df=w('<div class="mb-2 flex flex-wrap gap-2"></div> <!>',1);function vf(t,e){J(e,!0);let r=F(()=>e.dateStore.start),a=F(()=>e.dateStore.end),n=j(null);function i(p){s(r)&&new Date(p)<new Date(s(r))?e.dateStore.setRange(p,s(a)):s(a)&&new Date(p)>new Date(s(a))?e.dateStore.setRange(s(r),p):e.dateStore.setRange(p,p)}function o(p){return!s(r)||!s(a)?{start:null,end:null}:s(r)&&new Date(p)<new Date(s(r))?{start:p,end:s(a)}:s(a)&&new Date(p)>new Date(s(a))?{start:s(r),end:p}:{start:p,end:p}}function l(p){let _="";if(!s(r)||!s(a))return;const y=new Date(p)>=new Date(s(r))&&new Date(p)<=new Date(s(a)),x=e.dateStore.start&&new Date(p)<=new Date;let S=!1;if(s(n)){const A=o(s(n));A.start&&A.end&&(S=new Date(p)>=new Date(A.start)&&new Date(p)<=new Date(A.end))}return x&&(_+=" opacity-70 italic"),y||(_+=" btn-dash"),S&&!y&&(_+=" btn-soft"),_}var d=df(),f=C(d);Fe(f,20,()=>e.dateStore.dates,p=>p,(p,_)=>{var y=nf();y.__click=[sf,i,_];var x=c(y),S=c(x),A=u(x,2);{var T=$=>{qs($,{size:16})},k=$=>{var D=X(),R=C(D);{var E=te=>{Cs(te,{size:16})},z=te=>{var K=X(),U=C(K);{var ce=pe=>{ei(pe,{size:16})};P(U,pe=>{wa(_)==="cloud"&&pe(ce)},!0)}v(te,K)};P(R,te=>{wa(_)==="moon"?te(E):te(z,!1)},!0)}v($,D)};P(A,$=>{wa(_)==="sun"?$(T):$(k,!1)})}M(($,D)=>{ke(y,1,`btn btn-sm btn-secondary ${$??""}`),I(S,D)},[()=>l(_),()=>Ac(_)]),Nr("mouseenter",y,()=>b(n,_,!0)),Nr("mouseleave",y,()=>b(n,null)),v(p,y)});var h=u(f,2);{var m=p=>{var _=of();v(p,_)},g=p=>{var _=uf(),y=c(_);y.__click=[lf,e];var x=u(y,2);x.__click=[cf,e],M(()=>{ke(y,1,`join-item btn btn-sm ${e.dateStore.isUpcomingRange?"btn-soft btn-secondary":"btn-ghost"}`),ke(x,1,`join-item btn btn-sm ${e.dateStore.isFullRange?"btn-soft btn-secondary":"btn-ghost"}`)}),v(p,_)};P(h,p=>{e.dateStore.isEventPassed?p(m):p(g,!1)})}v(t,d),Y()}Ve(["click"]);var ff=w("<fieldset><legend><!> </legend> <!></fieldset>");function _a(t,e){let r=me(e,"bgClass",3,"bg-base-100");var a=ff(),n=c(a),i=c(n);{var o=f=>{const h=F(()=>e.iconComponent);var m=X(),g=C(m);br(g,()=>s(h),(p,_)=>{_(p,{size:16,class:"mr-1"})}),v(f,m)};P(i,f=>{e.iconComponent&&f(o)})}var l=u(i),d=u(n,2);he(d,()=>e.children??de),M(()=>{ke(a,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),ke(n,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),I(l,` ${e.legend??""}`)}),v(t,a)}var hf=()=>Z.clearFilters(),pf=t=>Z.setSearchQuery(t.currentTarget.value),gf=()=>Z.setSearchQuery(""),mf=()=>Z.setGroupBy("none"),_f=()=>Z.setGroupBy("store"),bf=()=>Z.setGroupBy("productType"),yf=w(`<div class="alert alert-warning">Cette période contient des dates passées. Les achats ne sont plus
          possibles pour ces dates.</div>`),wf=w("<!> <!>",1),Sf=(t,e)=>Z.toggleProductType(e),xf=w("<button><!> </button>"),Ef=()=>Z.toggleTemperature("frais"),Pf=()=>Z.toggleTemperature("surgele"),$f=()=>Z.clearTypeAndTemperatureFilters(),Af=w('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),Tf=w('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),kf=w('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button title="Filtrer les légumes ou produits à conserver au frais"><!> Frais</button> <button title="Filtrer les roduits à concerver au congélateur"><!> Surgelés</button></div> <!>',1),Df=(t,e)=>Z.toggleStore(e),If=w("<button> </button>"),Nf=()=>Z.clearStoreFilters(),Mf=w('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),Cf=w('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Rf=(t,e)=>Z.toggleWho(e),Of=w("<button> </button>"),qf=()=>Z.clearWhoFilters(),jf=w('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),Bf=w('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Lf=w('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4 flex flex-col"><label class="label flex" for="grouping-select"><span class="label-text">Groupement par:</span></label> <div class=" bg-base-100 flex gap-1 rounded-xl p-2 font-semibold" id="grouping-select"><button type="button" aria-label="Aucun">Aucun</button> <button type="button" aria-label="Par magasin">Magasins</button> <button type="button" aria-label="Par type">Type</button></div></div> <!> <!> <!> <!></div>',1);function zf(t,e){J(e,!0);const r=F(()=>Z.filters),a=F(()=>Z.uniqueStores),n=F(()=>Z.uniqueWho),i=F(()=>Z.uniqueProductTypes);var o=Lf(),l=C(o),d=c(l),f=c(d);ti(f,{class:"h-5 w-5"});var h=u(d,2);h.__click=[hf];var m=c(h);ma(m,{class:"h-4 w-4"});var g=u(l,2),p=c(g),_=u(c(p),2),y=c(_);Au(y,{class:"h-4 w-4"});var x=u(y,2);x.__input=[pf];var S=u(x,2);S.__click=[gf];var A=c(S);Nt(A,{class:"h-4 w-4"});var T=u(p,2),k=u(c(T),2),$=c(k);$.__click=[mf];var D=u($,2);D.__click=[_f];var R=u(D,2);R.__click=[bf];var E=u(T,2);{var z=G=>{_a(G,{legend:"Date incluses",bgClass:"bg-base-100",children:(ve,ye)=>{var ae=wf(),re=C(ae);vf(re,{get dateStore(){return Z.dateStore}});var ge=u(re,2);{var oe=B=>{var V=yf();Eo(3,V,()=>di),v(B,V)};P(ge,B=>{Z.hasPastDatesInRange&&B(oe)})}v(ve,ae)},$$slots:{default:!0}})};P(E,G=>{Z.hasSingleDateEvent||G(z)})}var te=u(E,2);{var K=G=>{_a(G,{legend:"Types & Température",get iconComponent(){return oi},children:(ve,ye)=>{var ae=kf(),re=C(ae);Fe(re,20,()=>s(i),se=>se,(se,W)=>{const ne=F(()=>vs(W));var xe=xf();xe.__click=[Sf,W];var H=c(xe);br(H,()=>s(ne).icon,(ie,$e)=>{$e(ie,{class:"mr-1 h-5 w-5"})});var q=u(H);M(ie=>{ke(xe,1,`btn btn-sm ${ie??""}`),I(q,` ${s(ne).displayName??""}`)},[()=>s(r).selectedProductTypes.length===0?"btn-soft btn-secondary":s(r).selectedProductTypes.includes(W)?"btn-secondary":"btn-dash btn-secondary"]),v(se,xe)});var ge=u(re,2),oe=c(ge);oe.__click=[Ef];var B=c(oe);ni(B,{class:"h-5 w-5"});var V=u(oe,2);V.__click=[Pf];var N=c(V);Os(N,{class:"h-5 w-5"});var ee=u(ge,2);{var O=se=>{var W=Af();W.__click=[$f];var ne=c(W);ma(ne,{size:16}),v(se,W)},le=se=>{var W=Tf();v(se,W)};P(ee,se=>{s(r).selectedProductTypes.length>0||s(r).selectedTemperatures.length>0?se(O):se(le,!1)})}M((se,W)=>{ke(oe,1,`btn btn-sm ${se??""}`),ke(V,1,`btn btn-sm ${W??""}`)},[()=>s(r).selectedTemperatures.length===0?"btn-soft btn-success":s(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(r).selectedTemperatures.length===0?"btn-soft btn-info":s(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),v(ve,ae)},$$slots:{default:!0}})};P(te,G=>{s(i).length>0&&G(K)})}var U=u(te,2);{var ce=G=>{_a(G,{legend:"Magasins",get iconComponent(){return gr},children:(ve,ye)=>{var ae=Cf(),re=c(ae);Fe(re,16,()=>s(a),B=>B,(B,V)=>{var N=If();N.__click=[Df,V];var ee=c(N);M(O=>{ke(N,1,`btn btn-sm ${O??""}`),I(ee,V)},[()=>s(r).selectedStores.length===0?"btn-soft btn-secondary":s(r).selectedStores.includes(V)?"btn-secondary":"btn-dash btn-secondary"]),v(B,N)});var ge=u(re,2);{var oe=B=>{var V=Mf();V.__click=[Nf];var N=c(V);ma(N,{size:16}),v(B,V)};P(ge,B=>{s(r).selectedStores.length>0&&B(oe)})}v(ve,ae)},$$slots:{default:!0}})};P(U,G=>{s(a).length>0&&G(ce)})}var pe=u(U,2);{var Se=G=>{_a(G,{legend:"Qui",get iconComponent(){return js},children:(ve,ye)=>{var ae=Bf(),re=c(ae);Fe(re,16,()=>s(n),B=>B,(B,V)=>{var N=Of();N.__click=[Rf,V];var ee=c(N);M(O=>{ke(N,1,`btn btn-sm ${O??""}`),I(ee,V)},[()=>s(r).selectedWho.length===0?" btn-soft btn-secondary":s(r).selectedWho.includes(V)?" btn-secondary":"btn-dash btn-secondary"]),v(B,N)});var ge=u(re,2);{var oe=B=>{var V=jf();V.__click=[qf];var N=c(V);ma(N,{size:16}),v(B,V)};P(ge,B=>{s(r).selectedWho.length>0&&B(oe)})}v(ve,ae)},$$slots:{default:!0}})};P(pe,G=>{s(n).length>0&&G(Se)})}M(()=>{h.disabled=!Z.hasFilters,Fl(x,s(r).searchQuery),S.disabled=!s(r).searchQuery,ke($,1,`btn flex-1 ${s(r).groupBy==="none"&&"btn-secondary"}`),ke(D,1,`btn flex-1 ${s(r).groupBy==="store"&&"btn-secondary"}`),ke(R,1,`btn flex-1 ${s(r).groupBy==="productType"&&"btn-secondary"}`)}),v(t,o),Y()}Ve(["click","input"]);var Uf=w('<div class="tooltip text-xs font-normal"><!></div>');function Hf(t,e){let r=me(e,"iconSize",3,24),a=e.icon||void 0;var n=Uf(),i=c(n);{var o=l=>{a(l,{get size(){return r()},class:`align-top
`})};P(i,l=>{e.icon&&l(o)})}M(()=>or(n,"data-tip",e.tip)),v(t,n)}var Gf=w('<div class="tooltip"><div class="badge badge-soft badge-sm hover:badge-primary flex items-center gap-1"><span class="whitespace-nowrap"> </span> <!></div></div>');function Wf(t,e){J(e,!0);let r=me(e,"recipes",19,()=>[]);const a=e.dateDisplayInfo.timeIcon==="sun"?qs:e.dateDisplayInfo.timeIcon==="moon"?Cs:e.dateDisplayInfo.timeIcon==="cloud"?ei:null;var n=Gf(),i=c(n),o=c(i),l=c(o),d=u(o,2);{var f=h=>{a(h,{class:"h-3 w-3"})};P(d,h=>{a&&h(f)})}M(h=>{or(n,"data-tip",h),I(l,e.dateDisplayInfo.formattedDate)},[()=>r().map(h=>h.r).join(", ")]),v(t,n),Y()}var Qf=w('<div class="text-primary-content flex items-center gap-2"><!> </div>'),Vf=w('<div class="text-primary-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Ff=w('<div class="font-semibold">Sur toute la période</div>'),Kf=w('du <span class="font-semibold"> </span> au <span class="font-semibold"> </span>',1),Jf=w('le <span class="font-semibold"> </span>',1),Yf=(t,e,r)=>e.onOpenGroupEditModal("store",s(r).map(a=>a.data.$id),s(r).map(a=>a.data)),Zf=(t,e,r)=>e.onOpenGroupEditModal("who",s(r).map(a=>a.data.$id),s(r).map(a=>a.data)),Xf=(t,e,r)=>e.onOpenGroupPurchaseModal(s(r).map(a=>a.data)),eh=w(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),th=w('<div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div>'),rh=w('<div class="flex flex-wrap items-center justify-end gap-2"><div class="alert px-4 py-1" title="Contient des dates passées - actions non disponibles"><!> <span class="hidden @md:block">Période partiellement passée</span></div></div>'),ah=w('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 text-lg font-bold @md:min-w-48"><!></div> <div class="text-primary-content"><!></div> <!></div>'),sh=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),nh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),oh=w('<div class="text-base-content/60 text-sm font-normal"> </div>'),ih=w('<div class="tooltip" data-tip="Ajouté manuellement, ne fait pas partie des recette"><!></div>'),lh=w('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),ch=w('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),uh=w('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),dh=w('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),vh=(t,e,r)=>e.onOpenModal(s(r).$id,"magasins"),fh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"magasins"),hh=w('<div class="ml-1"><!></div>'),ph=w('<div class="ml-1"> </div> <!>',1),gh=w('<div class="ml-1 text-sm font-medium">?</div>'),mh=(t,e,r)=>e.onOpenModal(s(r).$id,"volontaires"),_h=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"volontaires"),bh=w('<span class="text-base-content/50 text-xs"> </span>'),yh=w('<div class="ml-1 flex gap-1"> <!></div>'),wh=w('<div class="ml-1 text-sm font-medium">?</div>'),Sh=w('<div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div>'),xh=w('<div class="flex items-center gap-1 text-sm"><!> </div>'),Eh=w('<div class="flex items-center gap-1 text-sm"><!> </div>'),Ph=w('<div class="mx-4 flex gap-2 opacity-60"><!> <!></div>'),$h=(t,e,r)=>e.onOpenModal(s(r).$id,"recettes"),Ah=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"recettes"),Th=w('<div class="tooltip flex items-center gap-2" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),kh=w("<span> </span>"),Dh=w('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),Ih=(t,e,r,a)=>{t.stopPropagation(),e.onQuickValidation(s(r),s(a))},Nh=w('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><div class="cart-icon"></div> <span class="text-xs"> </span> <!></button>'),Mh=w(`<div id="override_alert" class="alert alert-warning alert-soft mt-1 px-1 py-0.5"><!> <span>Les quantités des menus ont été modifiées depuis
                      l'attribution manuelle des "besoins"</span></div>`),Ch=(t,e,r)=>e.onOpenModal(s(r).$id,"achats"),Rh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(s(r).$id,"achats"),Oh=w('<span class="text-xs opacity-75"> </span>'),qh=w('<div><div class="flex items-center gap-1"><!> <span class="text-sm font-medium text-nowrap"> </span></div> <!></div>'),jh=w('<span class="text-base-content/50 text-xs italic">aucun</span>'),Bh=w('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <!></div> <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex flex-wrap gap-x-4 gap-y-0"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="ms-auto flex items-center gap-4 self-end"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap items-start gap-0 self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup effectués:</div> <div>ajouter un achat</div></div> <div class="flex flex-wrap justify-end gap-1.5"><!> <!></div></div></div></div></div>'),Lh=w('<!> <div class="space-y-1"></div>',1),zh=w('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Uh=w('<div class="space-y-4 rounded-lg"></div> <!>',1);function Hh(t,e){J(e,!0);const r={Package:Ua,MessageCircleQuestionMark:bu,ShoppingCart:yr,Clock:$n,CircleCheck:iu,CircleX:lu,ClipboardCheck:cu,PackageCheck:yu,Check:jr},a=F(()=>Z.groupedFilteredProducts),n=F(()=>Z.filters),i=F(()=>fr(Z.dateStore.start)),o=F(()=>fr(Z.dateStore.end)),l=F(()=>!Z.dateStore.isEventPassed&&!Z.dateStore.hasPastDatesInRange);var d=Uh(),f=C(d);Fe(f,21,()=>Object.entries(s(a)),([g,p])=>g,(g,p)=>{var _=F(()=>xa(s(p),2));let y=()=>s(_)[0];const S=F(()=>s(_)[1]);var A=Lh(),T=C(A);{var k=D=>{const R=F(()=>vs(y()));var E=ah(),z=c(E),te=c(z);{var K=re=>{var ge=Qf(),oe=c(ge);gr(oe,{size:20});var B=u(oe);M(()=>I(B,` ${y()??""} (${s(S).length??""})`)),v(re,ge)},U=re=>{var ge=X(),oe=C(ge);{var B=N=>{var ee=Vf(),O=c(ee);br(O,()=>s(R).icon,(xe,H)=>{H(xe,{size:20})});var le=u(O,2),se=c(le),W=u(le,2),ne=c(W);M(()=>{I(se,s(R).displayName),I(ne,`(${s(S).length??""})`)}),v(N,ee)},V=N=>{var ee=dt();M(()=>I(ee,`📦 ${y()??""} (${s(S).length??""})`)),v(N,ee)};P(oe,N=>{s(n).groupBy==="productType"?N(B):N(V,!1)},!0)}v(re,ge)};P(te,re=>{s(n).groupBy==="store"?re(K):re(U,!1)})}var ce=u(z,2),pe=c(ce);{var Se=re=>{var ge=Ff();v(re,ge)},G=re=>{var ge=X(),oe=C(ge);{var B=N=>{var ee=Kf(),O=u(C(ee)),le=c(O),se=u(O,2),W=c(se);M(()=>{I(le,s(i)),I(W,s(o))}),v(N,ee)},V=N=>{var ee=Jf(),O=u(C(ee)),le=c(O);M(()=>I(le,s(i))),v(N,ee)};P(oe,N=>{Z.dateStore.start!==Z.dateStore.end?N(B):N(V,!1)},!0)}v(re,ge)};P(pe,re=>{Z.dateStore.isFullRange?re(Se):re(G,!1)})}var ve=u(ce,2);{var ye=re=>{var ge=th(),oe=c(ge);oe.__click=[Yf,e,S];var B=c(oe);gr(B,{size:16});var V=u(B,4);aa(V,{size:16});var N=u(oe,2);N.__click=[Zf,e,S];var ee=c(N);Sa(ee,{size:16});var O=u(ee,4);aa(O,{size:16});var le=u(N,2);{var se=W=>{var ne=eh();ne.__click=[Xf,e,S];var xe=c(ne);yr(xe,{size:16});var H=u(xe,4);En(H,{size:16}),v(W,ne)};P(le,W=>{s(S).some(ne=>ne.data.displayMissingQuantity!=="✅ Complet")&&W(se)})}v(re,ge)},ae=re=>{var ge=X(),oe=C(ge);{var B=V=>{var N=rh(),ee=c(N),O=c(ee);$n(O,{size:16}),v(V,N)};P(oe,V=>{Z.dateStore.hasPastDatesInRange&&V(B)},!0)}v(re,ge)};P(ve,re=>{s(l)?re(ye):re(ae,!1)})}v(D,E)};P(T,D=>{y()!==""&&D(k)})}var $=u(T,2);Fe($,21,()=>s(S),D=>D.data.$id,(D,R)=>{const E=F(()=>s(R).data),z=F(()=>s(R).stats),te=F(()=>vs(s(E).productType)),K=F(()=>_d(s(E).purchases||[])),U=F(()=>s(E).totalNeededOverrideParsed);var ce=Bh(),pe=c(ce),Se=c(pe),G=c(Se);G.__click=[sh,e,E],G.__keydown=[nh,e,E];var ve=c(G),ye=c(ve);br(ye,()=>s(te).icon,(fe,be)=>{be(fe,{class:"text-base-content/80 h-4 w-4"})});var ae=u(ye),re=u(ae);{var ge=fe=>{var be=oh(),Ne=c(be);M(()=>I(Ne,`Ancien: ${s(E).previousNames[0]??""}`)),v(fe,be)};P(re,fe=>{s(E).previousNames&&s(E).previousNames.length>0&&fe(ge)})}var oe=u(re,2);{var B=fe=>{var be=ih(),Ne=c(be);Pn(Ne,{class:"text-warning h-4 w-4"}),v(fe,be)};P(oe,fe=>{s(E).productHugoUuid||fe(B)})}var V=u(ve,2),N=c(V);{var ee=fe=>{var be=lh(),Ne=c(be);ni(Ne,{class:"text-success h-4 w-4"}),v(fe,be)};P(N,fe=>{s(E).pFrais&&fe(ee)})}var O=u(N,2);{var le=fe=>{var be=ch(),Ne=c(be);Os(Ne,{class:"text-info h-4 w-4"}),v(fe,be)};P(O,fe=>{s(E).pSurgel&&fe(le)})}var se=u(V,2);{var W=fe=>{var be=uh(),Ne=c(be);ai(Ne,{class:"h-4 w-4 animate-spin"}),v(fe,be)};P(se,fe=>{s(E).status==="isSyncing"&&fe(W)})}var ne=u(se,2);{var xe=fe=>{var be=dh(),Ne=c(be);Fe(Ne,20,()=>s(z).concernedDates,De=>De,(De,je)=>{const Ke=F(()=>s(z).recipesByDate.get(je)||[]),Ze=F(()=>s(R).data.dateDisplayInfo[je]);Wf(De,{get dateDisplayInfo(){return s(Ze)},get recipes(){return s(Ke)}})}),v(fe,be)};P(ne,fe=>{s(z).concernedDates.length>0&&fe(xe)})}var H=u(G,2);{var q=fe=>{var be=Sh(),Ne=c(be);Ne.__click=[vh,e,E],Ne.__keydown=[fh,e,E];var De=c(Ne);gr(De,{size:18});var je=u(De,2);{var Ke=ct=>{var Lt=ph(),Wr=C(Lt),Qa=c(Wr),Va=u(Wr,2);{var zt=Ar=>{var va=hh(),fi=c(va);Hf(fi,{get tip(){return s(E).storeInfo.storeComment},get icon(){return _u},iconSize:14}),v(Ar,va)};P(Va,Ar=>{s(E).storeInfo?.storeComment&&Ar(zt)})}M(()=>I(Qa,s(E).storeInfo.storeName)),v(ct,Lt)},Ze=ct=>{var Lt=gh();v(ct,Lt)};P(je,ct=>{s(E).storeInfo?.storeName?ct(Ke):ct(Ze,!1)})}var Qe=u(Ne,2);Qe.__click=[mh,e,E],Qe.__keydown=[_h,e,E];var St=c(Qe);Sa(St,{size:18});var Tt=u(St,2);{var xt=ct=>{var Lt=yh(),Wr=c(Lt),Qa=u(Wr);{var Va=zt=>{var Ar=bh(),va=c(Ar);M(()=>I(va,`+${s(E).who.length-2}`)),v(zt,Ar)};P(Qa,zt=>{s(E).who.length>2&&zt(Va)})}M(zt=>I(Wr,`${zt??""} `),[()=>s(E).who.slice(0,2).map(zt=>zt.slice(0,3)).join(" | ")]),v(ct,Lt)},Xt=ct=>{var Lt=wh();v(ct,Lt)};P(Tt,ct=>{s(E).who&&s(E).who.length>0?ct(xt):ct(Xt,!1)})}M(()=>{ke(Ne,1,`btn btn-soft btn-sm group relative ${s(E).storeInfo?.storeName?"btn-success":""}`),ke(Qe,1,`btn btn-sm btn-soft group relative ${s(E).who&&s(E).who?.length>0?"btn-success":""}`)}),v(fe,be)},ie=fe=>{var be=Ph(),Ne=c(be);{var De=Ze=>{var Qe=xh(),St=c(Qe);gr(St,{size:16});var Tt=u(St);M(()=>I(Tt,` ${s(E).storeInfo.storeName??""}`)),v(Ze,Qe)};P(Ne,Ze=>{s(E).storeInfo?.storeName&&Ze(De)})}var je=u(Ne,2);{var Ke=Ze=>{var Qe=Eh(),St=c(Qe);Sa(St,{size:16});var Tt=u(St);M(xt=>I(Tt,` ${xt??""}`),[()=>s(E).who.join(", ")]),v(Ze,Qe)};P(je,Ze=>{s(E).who&&s(E).who.length>0&&Ze(Ke)})}v(fe,be)};P(H,fe=>{s(l)?fe(q):fe(ie,!1)})}var $e=u(Se,2),ue=c($e);ue.__click=[$h,e,E],ue.__keydown=[Ah,e,E];var Me=c(ue),Q=c(Me),_e=c(Q);pu(_e,{class:"h-4 w-4"});var Le=u(Q,2),Be=c(Le),Ge=c(Be);{var Re=fe=>{var be=Th(),Ne=c(be),De=c(Ne),je=u(Ne,2);Pn(je,{class:"h-4 w-4"});var Ke=u(je);M(()=>{I(De,s(z).formattedQuantities),I(Ke,` ${s(U).totalOverride.q??""}
                          ${s(U).totalOverride.u??""}`)}),v(fe,be)},Xe=fe=>{var be=kh(),Ne=c(be);M(()=>I(Ne,s(z).formattedQuantities)),v(fe,be)};P(Ge,fe=>{s(U)?.totalOverride?fe(Re):fe(Xe,!1)})}var jt=u(Be,2);{var Ae=fe=>{var be=Dh(),Ne=c(be),De=c(Ne),je=u(De);za(je,{class:"h-3 w-3"});var Ke=u(Ne,2),Ze=c(Ke),Qe=u(Ze);li(Qe,{class:"h-3 w-3"}),M(()=>{I(De,`${s(z).nbRecipes??""} `),I(Ze,`${s(z).totalAssiettes??""} `)}),v(fe,be)};P(jt,fe=>{(s(z).nbRecipes||s(z).totalAssiettes)&&fe(Ae)})}var Ie=u(Me,2);{var ze=fe=>{var be=Nh();be.__click=[Ih,e,E,z];var Ne=u(c(be),2),De=c(Ne),je=u(Ne,2);{var Ke=Qe=>{nu(Qe,{size:18})},Ze=Qe=>{ou(Qe,{size:18})};P(je,Qe=>{At.isMobile?Qe(Ke):Qe(Ze,!1)})}M(()=>{or(be,"title",`Acheter le manquant (${s(z).formattedMissingQuantities??""})`),I(De,s(z).formattedMissingQuantities)}),v(fe,be)},Te=fe=>{var be=X(),Ne=C(be);{var De=je=>{En(je,{size:24,class:"text-success ms-auto"})};P(Ne,je=>{s(l)&&je(De)},!0)}v(fe,be)};P(Ie,fe=>{s(l)&&s(z).hasMissing?fe(ze):fe(Te,!1)})}var Ye=u(Ie,2);{var it=fe=>{var be=Mh(),Ne=c(be);su(Ne,{size:18}),v(fe,be)};P(Ye,fe=>{s(l)&&s(U)?.hasUnresolvedChangedSinceOverride&&fe(it)})}var st=u(ue,2);st.__click=[Ch,e,E],st.__keydown=[Rh,e,E];var tt=c(st),ft=c(tt),yt=c(ft);yr(yt,{class:"h-4 w-4"});var wt=u(ft,2),Bt=u(tt,2),lt=c(Bt);Fe(lt,17,()=>s(K),Vt,(fe,be)=>{const Ne=F(()=>r[s(be).icon]);var De=qh(),je=c(De),Ke=c(je);br(Ke,()=>s(Ne),(xt,Xt)=>{Xt(xt,{class:"h-4 w-4"})});var Ze=u(Ke,2),Qe=c(Ze),St=u(je,2);{var Tt=xt=>{var Xt=Oh(),ct=c(Xt);M(()=>I(ct,`livré le: ${s(be).deliveryDate??""}`)),v(xt,Xt)};P(St,xt=>{s(be).deliveryDate&&xt(Tt)})}M(()=>{ke(De,1,`badge badge-outline flex h-fit flex-col items-center gap-1 py-1 ${s(be).badgeClass??""}`),I(Qe,`${s(be).quantity??""}
                          ${s(be).unit??""}`)}),v(fe,De)});var Mt=u(lt,2);{var dr=fe=>{var be=jh();v(fe,be)};P(Mt,fe=>{s(K).length===0&&fe(dr)})}M(()=>{ke(ce,1,`card bg-base-100 border-base-300 ${s(E).status==="isSyncing"?"border-accent bg-accent/30 animate-pulse border-2":""}`),I(ae,`${s(E).productName??""} `),ke(Be,1,`text-base font-bold ${s(z).hasMissing&&s(l)?"text-error":"text-success"}`),ke(wt,1,`text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity ${s(l)?"group-hover:opacity-100":""} sm:opacity-0`)}),v(D,ce)}),v(g,A)});var h=u(f,2);{var m=g=>{var p=zh();v(g,p)};P(h,g=>{Object.values(s(a)).flat().length===0&&g(m)})}v(t,d),Y()}Ve(["click","keydown"]);function Dn(t,e,r){s(e)||r.onClose()}var Gh=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Wh=(t,e)=>b(e,"empty"),Qh=(t,e)=>b(e,"all"),Vh=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Fh=w("<!> ",1),Kh=w('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <div><!></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Jh(t,e){J(e,!0);let r=j(!1),a=j(null),n=j(null),i=j(qe(e.products.length>0&&e.products[0].storeInfo?e.products[0].storeInfo.storeName:"")),o=j(qe(e.products.length>0&&e.products[0].storeInfo&&e.products[0].storeInfo.storeComment||"")),l=j(qe({})),d=j("empty");Yt(()=>{const N={};e.products.forEach(ee=>{e.productIds.includes(ee.$id)&&(s(d)==="empty"?N[ee.$id]=!ee.storeInfo||!ee.storeInfo.storeName:N[ee.$id]=!0)}),b(l,N,!0)});const f=F(()=>e.products.map(N=>({id:N.$id,label:N.productName,title:N.productName,selected:s(l)[N.$id]}))),h=F(()=>s(f).filter(N=>N.selected)),m=F(()=>`Attribuer un magasin (${s(h).length} produits sélectionnés)`),g=F(()=>s(h).length===0?!1:s(i).trim().length>0);async function p(){if(!s(g)||s(r))return;b(a,null),b(n,null);const N=s(h).map(O=>O.id),ee=e.products.filter(O=>N.includes(O.$id));Z.setSyncStatus(N,!0),At.backgroundOperation={isRunning:!0,name:`Mise à jour magasin (${N.length} produits)`,progress:0},e.onClose();try{const O={storeName:s(i).trim(),storeComment:s(o).trim()},le=await Go(N,ee,O);if(le.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${le.updatedCount} produits modifiés`),He.success(`Magasin mis à jour pour ${le.updatedCount} produits.`),e.onSuccess?.(le);else throw new Error(le.error||"Erreur lors de la mise à jour")}catch(O){const le=O instanceof Error?O.message:"Erreur inconnue";console.error("[StoreEditModal] Erreur mise à jour:",O),He.error(`Erreur mise à jour magasin: ${le}`),Z.clearSyncStatus()}finally{b(r,!1),At.backgroundOperation={isRunning:!1,name:"",progress:0}}}function _(N){s(l)[N]=!s(l)[N]}var y=Kh(),x=c(y),S=c(x),A=c(S),T=c(A),k=u(A,2);k.__click=[Dn,r,e];var $=c(k);Nt($,{class:"h-4 w-4"});var D=u(S,2),R=c(D);{var E=N=>{var ee=Gh(),O=c(ee);ua(O,{class:"h-4 w-4"});var le=u(O,2),se=c(le);M(()=>I(se,s(a))),v(N,ee)};P(R,N=>{s(a)&&N(E)})}var z=u(R,2),te=c(z),K=c(te);Hr(K,{get suggestions(){return Z.uniqueStores},get disabled(){return s(r)},id:"store-name-input",get value(){return s(i)},set value(N){b(i,N,!0)}});var U=u(te,2),ce=c(U);Gr(ce,{get disabled(){return s(r)},id:"store-comment-textarea",get value(){return s(o)},set value(N){b(o,N,!0)}});var pe=u(z,2),Se=u(c(pe),2),G=c(Se);G.__click=[Wh,d];var ve=u(G,2);ve.__click=[Qh,d];var ye=u(Se,2);sa(ye,{get items(){return s(f)},onToggleItem:_,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var ae=u(D,2),re=c(ae);re.__click=[Dn,r,e];var ge=u(re,2);ge.__click=p;var oe=c(ge);{var B=N=>{var ee=Vh();v(N,ee)},V=N=>{var ee=Fh(),O=C(ee);jr(O,{class:"h-4 w-4"});var le=u(O);M(()=>I(le,` Appliquer à ${s(h).length??""} produit(s)`)),v(N,ee)};P(oe,N=>{s(r)?N(B):N(V,!1)})}M(()=>{I(T,s(m)),k.disabled=s(r),ke(G,1,`tab ${s(d)==="empty"?"tab-active":""}`),ke(ve,1,`tab ${s(d)==="all"?"tab-active":""}`),re.disabled=s(r),ge.disabled=s(r)||!s(g)}),v(t,y),Y()}Ve(["click"]);function In(t,e,r){s(e)||r.onClose()}var Yh=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Zh=(t,e)=>b(e,"empty"),Xh=(t,e)=>b(e,"all"),ep=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),tp=w("<!> ",1),rp=w('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><div><!></div> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="text-base-content/70">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function ap(t,e){J(e,!0);let r=j(!1),a=j(null),n=j(null),i=j(qe([])),o=j(""),l=j("empty"),d=j(qe({}));Yt(()=>{const q={};e.products.forEach(ie=>{e.productIds.includes(ie.$id)&&(s(l)==="empty"?q[ie.$id]=!ie.who||ie.who.length===0:q[ie.$id]=!0)}),b(d,q,!0)});const f=F(()=>e.products.map(q=>({id:q.$id,label:q.productName,title:q.productName,selected:s(d)[q.$id]}))),h=F(()=>s(f).filter(q=>q.selected)),m=F(()=>{const q=new Set([...Z.uniqueWho,...s(i)]);return Array.from(q).map(ie=>({id:ie,label:ie,selected:s(i).includes(ie)}))}),g=F(()=>`Gérer les volontaires (${s(h).length} produits sélectionnés)`),p=F(()=>s(h).length===0?!1:s(i).length>0);async function _(){if(!s(p)||s(r))return;b(a,null),b(n,null);const q=s(h).map($e=>$e.id),ie=e.products.filter($e=>q.includes($e.$id));Z.setSyncStatus(q,!0),At.backgroundOperation={isRunning:!0,name:`Mise à jour volontaires (${q.length} produits)`,progress:0},e.onClose();try{const $e=await Wo(q,ie,s(i),"replace");if($e.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${$e.updatedCount} produits modifiés`),He.success(`Volontaires mis à jour pour ${$e.updatedCount} produits.`),e.onSuccess?.($e);else throw new Error($e.error||"Erreur lors de la mise à jour")}catch($e){const ue=$e instanceof Error?$e.message:"Erreur inconnue";console.error("[WhoEditModal] Erreur mise à jour:",$e),He.error(`Erreur mise à jour volontaires: ${ue}`),Z.clearSyncStatus()}finally{b(r,!1),At.backgroundOperation={isRunning:!1,name:"",progress:0}}}function y(q){const ie=q.trim();ie&&!s(i).includes(ie)&&b(i,[...s(i),ie],!0)}function x(q){b(i,s(i).filter(ie=>ie!==q),!0)}function S(q){s(i).includes(q)?x(q):y(q)}function A(){s(o).trim()&&(y(s(o)),b(o,""))}function T(q){s(d)[q]=!s(d)[q]}var k=rp(),$=c(k),D=c($),R=c(D),E=c(R),z=u(R,2);z.__click=[In,r,e];var te=c(z);Nt(te,{class:"h-4 w-4"});var K=u(D,2),U=c(K);{var ce=q=>{var ie=Yh(),$e=c(ie);ua($e,{class:"h-4 w-4"});var ue=u($e,2),Me=c(ue);M(()=>I(Me,s(a))),v(q,ie)};P(U,q=>{s(a)&&q(ce)})}var pe=u(U,2),Se=c(pe),G=c(Se),ve=c(G),ye=c(ve);da(ye,{get disabled(){return s(r)},onkeydown:q=>{q.key==="Enter"&&(q.preventDefault(),A())},get value(){return s(o)},set value(q){b(o,q,!0)}});var ae=u(ve,2);ae.__click=A;var re=c(ae);ii(re,{size:16});var ge=u(G,2),oe=u(c(ge),2);sa(oe,{get items(){return s(m)},onToggleItem:S,showIcon:!0,badgeSize:"btn-sm",badgeStyle:"btn-soft"});var B=u(pe,2),V=u(c(B),2),N=c(V);N.__click=[Zh,l];var ee=u(N,2);ee.__click=[Xh,l];var O=u(V,2);sa(O,{get items(){return s(f)},onToggleItem:T,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var le=u(K,2),se=c(le);se.__click=[In,r,e];var W=u(se,2);W.__click=_;var ne=c(W);{var xe=q=>{var ie=ep();v(q,ie)},H=q=>{var ie=tp(),$e=C(ie);jr($e,{class:"h-4 w-4"});var ue=u($e);M(()=>I(ue,` Appliquer à ${s(h).length??""} produit(s)`)),v(q,ie)};P(ne,q=>{s(r)?q(xe):q(H,!1)})}M(q=>{I(E,s(g)),z.disabled=s(r),ae.disabled=q,ke(N,1,`tab ${s(l)==="empty"?"tab-active":""}`),ke(ee,1,`tab ${s(l)==="all"?"tab-active":""}`),se.disabled=s(r),W.disabled=s(r)||!s(p)},[()=>s(r)||!s(o).trim()]),v(t,k),Y()}Ve(["click"]);async function sp(t,e,r,a,n,i){if(!s(e).invoiceTotal||s(e).invoiceTotal<=0){b(r,"Le montant doit être supérieur à 0");return}b(a,!0),b(r,null);try{const o=Z.currentMainId;if(!o)throw new Error("Aucun événement principal actif");s(n)?await Ns(s(n),{price:s(e).invoiceTotal,invoiceTotal:s(e).invoiceTotal,store:s(e).store,notes:s(e).notes,who:s(e).who}):await Vo(o,void 0,s(e).invoiceTotal,s(e).store,s(e).notes,s(e).who),i()}catch(o){console.error("Erreur sauvegarde dépense:",o),b(r,o.message,!0)}finally{b(a,!1)}}var np=(t,e)=>e(!1),op=w('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),ip=w('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),lp=(t,e)=>b(e,!0),cp=w('<button class="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1 h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> Ajouter une dépense</button>'),up=w('<span class="loading loading-spinner loading-xs"></span>'),dp=w('<div class="text-error mt-2 text-xs"> </div>'),vp=w('<div class="card bg-base-200 animate-in fade-in slide-in-from-top-4 shadow-md duration-300"><div class="card-body p-4"><h4 class="card-title text-sm"> </h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><!> <!> <!> <!></div> <div class="card-actions mt-2 justify-end"><button class="btn btn-sm btn-ghost">Annuler</button> <button class="btn btn-sm btn-primary"><!> </button></div> <!></div></div>'),fp=(t,e)=>e("date"),hp=(t,e)=>e("store"),pp=(t,e)=>e("who"),gp=(t,e)=>e("amount"),mp=w('<span class="text-base-content/70 italic"> </span>'),_p=w('<span class="text-base-content/50 ml-1 text-xs"> </span>'),bp=w('<span class="font-medium"> </span> <!>',1),yp=(t,e,r)=>e(s(r)),wp=w('<tr class="hover"><td class="whitespace-nowrap"> </td><td class="max-w-xs truncate"><!></td><td> </td><td> </td><td class="text-right font-mono font-bold"> </td><td><button class="btn btn-ghost btn-square"><!></button></td></tr>'),Sp=w('<tr><td colspan="7" class="text-base-content/50 py-8 text-center">Aucune dépense trouvée</td></tr>'),xp=(t,e)=>e(!1),Ep=(t,e)=>e(!1),Pp=w('<dialog><div class="modal-box bg-base-100 flex h-[90vh] w-11/12 max-w-5xl flex-col p-0"><div class="border-base-300 bg-base-200 sticky top-0 z-10 flex items-center justify-between border-b p-4"><h3 class="flex items-center gap-2 text-lg font-bold"><!> Gestion des Dépenses</h3> <button class="btn btn-sm btn-circle btn-ghost">✕</button></div> <div class="flex-1 space-y-6 overflow-y-auto p-4"><div class="grid grid-cols-1 gap-4 md:grid-cols-3"><div class="stats bg-primary text-primary-content shadow"><div class="stat"><div class="stat-title text-primary-content/80">Total Global</div> <div class="stat-value"> </div> <div class="stat-desc text-primary-content/80"> </div></div></div> <div class="card bg-base-200 p-4 shadow-sm"><h4 class="mb-2 text-sm font-semibold tracking-wider uppercase opacity-70">Par Magasin</h4> <div class="max-h-24 space-y-1 overflow-y-auto text-sm"></div></div> <div class="card bg-base-200 p-4 shadow-sm"><h4 class="mb-2 text-sm font-semibold tracking-wider uppercase opacity-70">Par Acheteur</h4> <div class="max-h-24 space-y-1 overflow-y-auto text-sm"></div></div></div> <div class="flex items-center justify-between"><h4 class="text-sm font-bold uppercase opacity-70">Liste des transactions</h4> <!></div> <!> <div class="bg-base-100 border-base-200 overflow-x-auto rounded-lg border"><table class="table-zebra table-xs table w-full"><thead class="bg-base-200 sticky top-0"><tr><th class="hover:bg-base-300 cursor-pointer"> </th><th>Description</th><th class="hover:bg-base-300 cursor-pointer"> </th><th class="hover:bg-base-300 cursor-pointer"> </th><th class="hover:bg-base-300 cursor-pointer text-right"> </th><th><!></th></tr></thead><tbody><!><!></tbody></table></div></div> <div class="border-base-300 bg-base-200 sticky bottom-0 z-10 flex items-center justify-between border-t px-4 py-1"><button class="btn btn-ghost ms-auto">Fermer</button></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');function $p(t,e){J(e,!0);let r=me(e,"isOpen",15,!1),a=j(!1),n=j(null),i=j(!1),o=j(qe({invoiceTotal:0,store:"",notes:"",who:""})),l=j(null);Yt(()=>{if(r()&&!s(l)){const Ae=localStorage.getItem("appwrite-user-name");Ae&&(s(o).who=Ae)}});let d=j("date"),f=j("desc"),h=F(()=>Z.financialStats),m=F(()=>s(h).allPurchases),g=F(()=>{let Ae=[...s(m)];return Ae.sort((Ie,ze)=>{let Te,Ye;switch(s(d)){case"date":Te=new Date(Ie.orderDate||Ie.$createdAt).getTime(),Ye=new Date(ze.orderDate||ze.$createdAt).getTime();break;case"amount":Te=Ie.invoiceTotal||Ie.price||0,Ye=ze.invoiceTotal||ze.price||0;break;case"store":Te=(Ie.store||"").toLowerCase(),Ye=(ze.store||"").toLowerCase();break;case"who":Te=(Ie.who||"").toLowerCase(),Ye=(ze.who||"").toLowerCase();break}return Te<Ye?s(f)==="asc"?-1:1:Te>Ye?s(f)==="asc"?1:-1:0}),Ae});function p(Ae){s(d)===Ae?b(f,s(f)==="asc"?"desc":"asc",!0):(b(d,Ae,!0),b(f,"desc"))}function _(){const Ae=localStorage.getItem("appwrite-user-name")||"";b(o,{invoiceTotal:0,store:"",notes:"",who:Ae},!0),b(l,null),b(i,!1)}function y(Ae){b(o,{invoiceTotal:Ae.invoiceTotal||Ae.price||0,store:Ae.store||"",notes:Ae.notes||"",who:Ae.who||""},!0),b(l,Ae.$id,!0),b(i,!0)}function x(Ae){return Ae?new Date(Ae).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"-"}function S(Ae){return(Ae||0).toFixed(2)+" €"}var A=Pp(),T=c(A),k=c(T),$=c(k),D=c($);Zo(D,{});var R=u($,2);R.__click=[np,r];var E=u(k,2),z=c(E),te=c(z),K=c(te),U=u(c(K),2),ce=c(U),pe=u(U,2),Se=c(pe),G=u(te,2),ve=u(c(G),2);Fe(ve,21,()=>Object.entries(s(h).byStore).sort((Ae,Ie)=>Ie[1]-Ae[1]),Vt,(Ae,Ie)=>{var ze=F(()=>xa(s(Ie),2));let Te=()=>s(ze)[0],Ye=()=>s(ze)[1];var it=op(),st=c(it),tt=c(st),ft=u(st,2),yt=c(ft);M(wt=>{I(tt,Te()),I(yt,wt)},[()=>S(Ye())]),v(Ae,it)});var ye=u(G,2),ae=u(c(ye),2);Fe(ae,21,()=>Object.entries(s(h).byWho).sort((Ae,Ie)=>Ie[1]-Ae[1]),Vt,(Ae,Ie)=>{var ze=F(()=>xa(s(Ie),2));let Te=()=>s(ze)[0],Ye=()=>s(ze)[1];var it=ip(),st=c(it),tt=c(st),ft=u(st,2),yt=c(ft);M(wt=>{I(tt,Te()),I(yt,wt)},[()=>S(Ye())]),v(Ae,it)});var re=u(z,2),ge=u(c(re),2);{var oe=Ae=>{var Ie=cp();Ie.__click=[lp,i],v(Ae,Ie)};P(ge,Ae=>{s(i)||Ae(oe)})}var B=u(re,2);{var V=Ae=>{var Ie=vp(),ze=c(Ie),Te=c(ze),Ye=c(Te),it=u(Te,2),st=c(it);Ls(st,{get disabled(){return s(a)},get value(){return s(o).invoiceTotal},set value(De){s(o).invoiceTotal=De}});var tt=u(st,2);Hr(tt,{get suggestions(){return Z.uniqueStores},get disabled(){return s(a)},get value(){return s(o).store},set value(De){s(o).store=De}});var ft=u(tt,2);da(ft,{get suggestions(){return Z.uniqueWho},get disabled(){return s(a)},get value(){return s(o).who},set value(De){s(o).who=De}});var yt=u(ft,2);Gr(yt,{get disabled(){return s(a)},get value(){return s(o).notes},set value(De){s(o).notes=De}});var wt=u(it,2),Bt=c(wt);Bt.__click=_;var lt=u(Bt,2);lt.__click=[sp,o,n,a,l,_];var Mt=c(lt);{var dr=De=>{var je=up();v(De,je)};P(Mt,De=>{s(a)&&De(dr)})}var fe=u(Mt),be=u(wt,2);{var Ne=De=>{var je=dp(),Ke=c(je);M(()=>I(Ke,s(n))),v(De,je)};P(be,De=>{s(n)&&De(Ne)})}M(()=>{I(Ye,s(l)?"Modifier la dépense":"Nouvelle Dépense"),lt.disabled=s(a),I(fe,` ${s(l)?"Enregistrer":"Ajouter"}`)}),v(Ae,Ie)};P(B,Ae=>{s(i)&&Ae(V)})}var N=u(B,2),ee=c(N),O=c(ee),le=c(O),se=c(le);se.__click=[fp,p];var W=c(se),ne=u(se,2);ne.__click=[hp,p];var xe=c(ne),H=u(ne);H.__click=[pp,p];var q=c(H),ie=u(H);ie.__click=[gp,p];var $e=c(ie),ue=u(ie),Me=c(ue);Su(Me,{size:14});var Q=u(O),_e=c(Q);Fe(_e,17,()=>s(g),Ae=>Ae.$id,(Ae,Ie)=>{var ze=wp(),Te=c(ze),Ye=c(Te),it=u(Te),st=c(it);{var tt=De=>{var je=mp(),Ke=c(je);M(()=>I(Ke,s(Ie).notes||"-")),v(De,je)},ft=De=>{var je=bp(),Ke=C(je),Ze=c(Ke),Qe=u(Ke,2);{var St=Tt=>{var xt=_p(),Xt=c(xt);M(()=>I(Xt,`- ${s(Ie).notes??""}`)),v(Tt,xt)};P(Qe,Tt=>{s(Ie).notes&&Tt(St)})}M(()=>I(Ze,s(Ie)._productName||"Produit inconnu")),v(De,je)};P(st,De=>{s(Ie).status==="expense"?De(tt):De(ft,!1)})}var yt=u(it),wt=c(yt),Bt=u(yt),lt=c(Bt),Mt=u(Bt),dr=c(Mt),fe=u(Mt),be=c(fe);be.__click=[yp,y,Ie];var Ne=c(be);aa(Ne,{size:14}),M((De,je)=>{I(Ye,De),I(wt,s(Ie).store||"-"),I(lt,s(Ie).who||"-"),I(dr,je)},[()=>x(s(Ie).orderDate||s(Ie).$createdAt),()=>S(s(Ie).invoiceTotal||s(Ie).price)]),v(Ae,ze)});var Le=u(_e);{var Be=Ae=>{var Ie=Sp();v(Ae,Ie)};P(Le,Ae=>{s(g).length===0&&Ae(Be)})}var Ge=u(E,2),Re=c(Ge);Re.__click=[xp,r];var Xe=u(T,2),jt=c(Xe);jt.__click=[Ep,r],M(Ae=>{ke(A,1,`modal ${r()?"modal-open":""}`),I(ce,Ae),I(Se,`${s(m).length??""} transactions`),I(W,`Date ${s(d)==="date"?s(f)==="asc"?"↑":"↓":""}`),I(xe,`Magasin ${s(d)==="store"?s(f)==="asc"?"↑":"↓":""}`),I(q,`Qui ${s(d)==="who"?s(f)==="asc"?"↑":"↓":""}`),I($e,`Montant ${s(d)==="amount"?s(f)==="asc"?"↑":"↓":""}`)},[()=>S(s(h).totalGlobal)]),v(t,A),Y()}Ve(["click"]);var Ap=w("<div><!></div>"),Tp=w('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function kp(t,e){J(e,!0);let r=j(!1),a=me(e,"width",3,"80"),n=me(e,"bgClass",3,"bg-base-300");const i=F(()=>"w-"+a());var o=X(),l=C(o);{var d=h=>{var m=Ap(),g=c(m);he(g,()=>e.children??de),M(()=>ke(m,1,`${n()??""} ${(s(i)?s(i):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),v(h,m)},f=h=>{var m=Tp(),g=C(m),p=c(g),_=u(p,2),y=u(c(_),2),x=c(y);he(x,()=>e.children??de);var S=u(g,2),A=c(S),T=c(A);ti(T,{class:"h-6 w-6"}),cs(p,()=>s(r),k=>b(r,k)),v(h,m)};P(l,h=>{At.isMobile?h(f,!1):h(d)})}v(t,o),Y()}function Dp(t,e){b(e,!0)}var Ip=(t,e)=>b(e,!0),Np=w('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button> <button class="btn btn-sm btn-primary" title="Ajouter un produit manuellement"><!> Produit</button></div> <!> <!> <!> <!> <!> <!> <!> <!></div>');function Mp(t,e){J(e,!0);const r="100",a=F(()=>Z.stats);let n=j(null),i=j("recettes"),o=j(!1),l=j(!1),d=j(qe([])),f=j(qe([])),h=j(!1),m=j(qe([])),g=j(!1);function p(O,le="recettes"){b(i,le,!0),b(n,O,!0)}function _(){b(n,null)}function y(O,le,se){b(d,le,!0),b(f,se,!0),b(O==="who"?o:l,!0)}function x(O){(!O||O==="who")&&b(o,!1),(!O||O==="store")&&b(l,!1),b(d,[],!0),b(f,[],!0)}function S(O){console.log(`[ProductsTable] Modification groupée réussie: ${O.updatedCount} produits`)}function A(O){const le=O.filter(se=>Z.getProductModelById(se.$id)?.stats.hasMissing);console.log(`[ProductsTable] openGroupPurchaseModal: ${O.length} produits reçus → ${le.length} produits avec quantités manquantes`),b(m,le,!0),b(h,!0)}function T(){b(h,!1),b(m,[],!0)}function k(){console.log("[ProductsTable] Achat groupé créé avec succès"),T()}async function $(O,le){try{if(!Z.currentMainId)throw new Error("mainId non disponible");const se=le.missingQuantities||[];if(se.length===0){console.log("Aucune quantité manquante à valider pour ce produit dans cette période");return}const W=se.filter(xe=>xe.q<0).map(xe=>({...xe,q:Math.abs(xe.q)})).map(xe=>{const{quantity:H,unit:q}=fs(xe.q,xe.u);return{q:H,u:q}});let ne=O.$id;O.isSynced||(console.log(`[ProductsTable] Produit ${O.$id} local, création pour validation rapide...`),ne=(await Ut(O.$id,{},H=>Z.getEnrichedProductById(H))).$id,console.log(`[ProductsTable] Produit sync créé: ${ne}`)),await Qo(Z.currentMainId,ne,W,{store:O.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${O.productName}`)}catch(se){console.error("[ProductsTable] Erreur validation rapide:",se),alert("Erreur lors de la validation rapide: "+se.message)}}let D=j(!1);var R=Np(),E=c(R),z=c(E),te=c(z);fu(te,{class:"mr-1 h-4 w-4"});var K=u(te),U=u(z,2);U.__click=[Ip,D];var ce=c(U);Zo(ce,{class:"mr-1 h-4 w-4"});var pe=u(U,2);pe.__click=[Dp,g];var Se=c(pe);Rs(Se,{class:"mr-1 h-4 w-4"});var G=u(E,2);kp(G,{width:r,children:(O,le)=>{zf(O,{})},$$slots:{default:!0}});var ve=u(G,2);Hh(ve,{onOpenModal:p,onOpenGroupEditModal:y,onOpenGroupPurchaseModal:A,onQuickValidation:$});var ye=u(ve,2);{let O=F(()=>s(n)||"");af(ye,{get productId(){return s(O)},get initialTab(){return s(i)},onClose:_})}var ae=u(ye,2);{var re=O=>{ap(O,{get productIds(){return s(d)},get products(){return s(f)},onClose:()=>x("who"),onSuccess:S})};P(ae,O=>{s(o)&&O(re)})}var ge=u(ae,2);{var oe=O=>{Jh(O,{get productIds(){return s(d)},get products(){return s(f)},onClose:()=>x("store"),onSuccess:S})};P(ge,O=>{s(l)&&O(oe)})}var B=u(ge,2);{var V=O=>{ud(O,{get products(){return s(m)},onClose:T,onSuccess:k})};P(B,O=>{s(h)&&O(V)})}var N=u(B,2);gd(N,{get open(){return s(g)},set open(O){b(g,O,!0)}});var ee=u(N,2);$p(ee,{get isOpen(){return s(D)},set isOpen(O){b(D,O,!0)}}),M(()=>{ke(R,1,`space-y-6 ${At.isMobile?"":"ml-100"}`),I(K,` ${s(a).total??""}`)}),v(t,R),Y()}Ve(["click"]);Yi();var Cp=w('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function Rp(t){var e=Cp();v(t,e)}var Op=w('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function qp(t,e){var r=Op(),a=u(c(r),2),n=u(c(a),2),i=c(n);M(()=>I(i,e.message)),v(t,r)}var jp=w('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Bp(t,e){var r=jp(),a=c(r),n=c(a);ua(n,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=u(n,2),o=u(c(i),2),l=c(o);M(()=>I(l,e.message||"Erreur inconnue")),v(t,r)}function Lp(t){t.stopPropagation()}var zp=(t,e)=>t.key==="Escape"&&e(),Up=w('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),Hp=w('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),Gp=(t,e)=>b(e,!1),Wp=w('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),Qp=(t,e)=>b(e,!0),Vp=(t,e)=>b(e,!1),Fp=w(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),Kp=(t,e)=>b(e,!0),Jp=w('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),Yp=w('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function Zp(t,e){J(e,!0);let r=me(e,"onClose",3,()=>{}),a=me(e,"onAuthSuccess",3,()=>{}),n=j(!0),i=j(!1),o=j(""),l=j(""),d=j(""),f=j(""),h=j(""),m=j(""),g=j(""),p=j(""),_=j(!1);function y(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function x(ye){if(ye.preventDefault(),!s(d)||!s(f)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{await(await y().getAccount()).createEmailPasswordSession(s(d),s(f)),b(l,"Connexion réussie !"),setTimeout(()=>{a()()},1e3)}catch(ae){console.error("Erreur de connexion:",ae),b(o,ae.message||"Erreur lors de la connexion",!0)}finally{b(i,!1)}}async function S(ye){if(ye.preventDefault(),!s(h)||!s(m)||!s(g)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{const re=await y().getAccount();await re.create("unique()",s(m),s(g),s(h)),await re.createEmailPasswordSession(s(m),s(g)),b(l,"Compte créé et connecté !"),setTimeout(()=>{a()()},1e3)}catch(ae){console.error("Erreur d'inscription:",ae),b(o,ae.message||"Erreur lors de la création du compte",!0)}finally{b(i,!1)}}async function A(ye){if(ye.preventDefault(),!s(p)){b(o,"Veuillez entrer votre email");return}b(i,!0),b(o,"");try{await(await y().getAccount()).createRecovery(s(p),`${window.location.origin}/reset-password`),b(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{b(_,!1),b(p,"")},2e3)}catch(ae){console.error("Erreur mot de passe oublié:",ae),b(o,ae.message||"Erreur lors de l'envoi de l'email",!0)}finally{b(i,!1)}}function T(){s(i)||r()()}Yt(()=>{(s(n)||s(_))&&(b(o,""),b(l,""))});var k=Yp();k.__click=T,k.__keydown=[zp,T];var $=c(k);$.__click=[Lp];var D=c($),R=c(D),E=c(R),z=u(R,2);z.__click=T;var te=u(D,2),K=c(te);{var U=ye=>{var ae=Up(),re=c(ae);M(()=>I(re,s(o))),v(ye,ae)};P(K,ye=>{s(o)&&ye(U)})}var ce=u(K,2);{var pe=ye=>{var ae=Hp(),re=c(ae);M(()=>I(re,s(l))),v(ye,ae)};P(ce,ye=>{s(l)&&ye(pe)})}var Se=u(ce,2);{var G=ye=>{var ae=Wp(),re=C(ae),ge=c(re),oe=u(c(ge),2),B=u(ge,2),V=c(B),N=u(re,2),ee=c(N);ee.__click=[Gp,_],M(()=>{oe.disabled=s(i),B.disabled=s(i),I(V,s(i)?"Envoi...":"Envoyer l'email de réinitialisation"),ee.disabled=s(i)}),Nr("submit",re,A),We(oe,()=>s(p),O=>b(p,O)),v(ye,ae)},ve=ye=>{var ae=X(),re=C(ae);{var ge=B=>{var V=Fp(),N=C(V),ee=c(N),O=u(c(ee),2),le=u(ee,2),se=u(c(le),2),W=u(le,2),ne=c(W),xe=u(N,2),H=c(xe);H.__click=[Qp,_];var q=u(H,2),ie=u(c(q));ie.__click=[Vp,n],M(()=>{O.disabled=s(i),se.disabled=s(i),W.disabled=s(i),I(ne,s(i)?"Connexion...":"Se connecter"),H.disabled=s(i),ie.disabled=s(i)}),Nr("submit",N,x),We(O,()=>s(d),$e=>b(d,$e)),We(se,()=>s(f),$e=>b(f,$e)),v(B,V)},oe=B=>{var V=Jp(),N=C(V),ee=c(N),O=u(c(ee),2),le=u(ee,2),se=u(c(le),2),W=u(le,2),ne=u(c(W),2),xe=u(W,2),H=c(xe),q=u(N,2),ie=u(c(q));ie.__click=[Kp,n],M(()=>{O.disabled=s(i),se.disabled=s(i),ne.disabled=s(i),xe.disabled=s(i),I(H,s(i)?"Création...":"Créer un compte"),ie.disabled=s(i)}),Nr("submit",N,S),We(O,()=>s(h),$e=>b(h,$e)),We(se,()=>s(m),$e=>b(m,$e)),We(ne,()=>s(g),$e=>b(g,$e)),v(B,V)};P(re,B=>{s(n)?B(ge):B(oe,!1)},!0)}v(ye,ae)};P(Se,ye=>{s(_)?ye(G):ye(ve,!1)})}M(()=>{I(E,s(_)?"Mot de passe oublié":s(n)?"Connexion":"Inscription"),z.disabled=s(i)}),v(t,k),Y()}Ve(["click","keydown"]);var Xp=(t,e,r,a)=>e(s(r),s(a)),eg=w('<button class="btn btn-sm btn-primary"> </button>'),tg=(t,e,r)=>e(s(r)),rg=w('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),ag=(t,e,r)=>e(s(r)),sg=w('<button class="btn btn-ghost btn-sm btn-circle absolute top-1 right-1" title="Fermer" aria-label="Fermer la notification"><!></button>'),ng=w('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!> <!></div></div></div>'),og=w("<div></div>");function ig(t,e){J(e,!0);let r=me(e,"position",3,"toast-right toast-bottom"),a=me(e,"padding",3,"md");const n=F(()=>a()==="sm"?"px-2 py-0.5":""),i=F(()=>He.toasts);function o(m){return m==="success"||m==="info"}function l(m){He.dismiss(m.id)}function d(m){e.onShowDetails?.({id:m.id,message:m.message,details:m.details})}function f(m,g){g.onClick()}var h=og();Fe(h,21,()=>s(i),m=>m.id,(m,g)=>{var p=ng(),_=c(p),y=c(_),x=c(y);{var S=K=>{ai(K,{class:"h-5 w-5 animate-spin"})};P(x,K=>{s(g).state==="loading"&&K(S)})}var A=u(x,2),T=c(A),k=u(y,2),$=c(k);{var D=K=>{var U=X(),ce=C(U);Fe(ce,17,()=>s(g).actions,Vt,(pe,Se)=>{var G=eg();G.__click=[Xp,f,g,Se];var ve=c(G);M(()=>I(ve,s(Se).label)),v(pe,G)}),v(K,U)};P($,K=>{s(g).actions&&s(g).actions.length>0&&K(D)})}var R=u($,2);{var E=K=>{var U=rg();U.__click=[tg,d,g];var ce=c(U);Xo(ce,{class:"h-3 w-3"}),v(K,U)};P(R,K=>{s(g).details&&K(E)})}var z=u(R,2);{var te=K=>{var U=sg();U.__click=[ag,l,g];var ce=c(U);Nt(ce,{class:"h-4 w-4"}),v(K,U)};P(z,K=>{(s(g).state==="error"||s(g).state==="warning"||!o(s(g).state))&&K(te)})}M(()=>{ke(p,1,`alert alert-${s(g).state??""} max-w-sm ${s(n)??""} shadow-lg`),I(T,s(g).message)}),v(m,p)}),M(()=>ke(h,1,`toast ${r()??""} z-50`)),v(t,h),Y()}Ve(["click"]);var lg=w('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function cg(t){var e=lg(),r=c(e),a=u(r,2);qs(a,{class:"swap-on fill-current"});var n=u(a,2);Cs(n,{class:"swap-off fill-current"}),v(t,e)}class ug{dbName="ingredients-cache";db=null;version=1;INGREDIENTS_STORE="ingredients";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";DATA_JSON_HASH_KEY="dataJsonHash";INGREDIENTS_COUNT_KEY="ingredientsCount";async open(){if(!this.db)return new Promise((e,r)=>{const a=indexedDB.open(this.dbName,this.version);a.onerror=()=>r(a.error),a.onsuccess=()=>{this.db=a.result,console.log(`[IngredientsIDBCache] Base ouverte: ${this.dbName}`),e()},a.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(this.INGREDIENTS_STORE)||(i.createObjectStore(this.INGREDIENTS_STORE,{keyPath:"u"}),console.log("[IngredientsIDBCache] Object store 'ingredients' créé")),i.objectStoreNames.contains(this.METADATA_STORE)||(i.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IngredientsIDBCache] Object store 'metadata' créé"))}})}async loadIngredients(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.INGREDIENTS_STORE,"readonly").objectStore(this.INGREDIENTS_STORE).getAll();i.onsuccess=()=>{const o=new Map;i.result.forEach(l=>{o.set(l.u,l)}),console.log(`[IngredientsIDBCache] ${o.size} ingrédients chargés`),e(o)},i.onerror=()=>r(i.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();i.onsuccess=()=>{const o=i.result,l={lastSync:null,dataJsonHash:null,ingredientsCount:0};o.forEach(d=>{d.key===this.LAST_SYNC_KEY?l.lastSync=d.value:d.key===this.DATA_JSON_HASH_KEY?l.dataJsonHash=d.value:d.key===this.INGREDIENTS_COUNT_KEY&&(l.ingredientsCount=d.value)}),console.log(`[IngredientsIDBCache] Metadata chargées: count=${l.ingredientsCount}, hash=${l.dataJsonHash}`),e(l)},i.onerror=()=>r(i.error)})}async saveIngredients(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.INGREDIENTS_STORE,"readwrite"),i=n.objectStore(this.INGREDIENTS_STORE);i.clear(),e.forEach(o=>{i.put(o)}),n.oncomplete=()=>{console.log(`[IngredientsIDBCache] ${e.size} ingrédients sauvegardés`),r()},n.onerror=()=>a(n.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const n=this.db.transaction(this.METADATA_STORE,"readwrite"),i=n.objectStore(this.METADATA_STORE);i.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),i.put({key:this.DATA_JSON_HASH_KEY,value:e.dataJsonHash}),i.put({key:this.INGREDIENTS_COUNT_KEY,value:e.ingredientsCount}),n.oncomplete=()=>{console.log("[IngredientsIDBCache] Metadata sauvegardées"),r()},n.onerror=()=>a(n.error)})}async updateDataJsonHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.DATA_JSON_HASH_KEY,value:e});o.onsuccess=()=>{console.log(`[IngredientsIDBCache] dataJsonHash mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async upsertIngredient(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.INGREDIENTS_STORE,"readwrite").objectStore(this.INGREDIENTS_STORE).put(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async deleteIngredient(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.INGREDIENTS_STORE,"readwrite").objectStore(this.INGREDIENTS_STORE).delete(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const a=this.db.transaction([this.INGREDIENTS_STORE,this.METADATA_STORE],"readwrite");a.objectStore(this.INGREDIENTS_STORE).clear(),a.objectStore(this.METADATA_STORE).clear(),a.oncomplete=()=>{console.log("[IngredientsIDBCache] Cache vidé"),e()},a.onerror=()=>r(a.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IngredientsIDBCache] Connexion fermée"))}}async function dg(){const t=new ug;return await t.open(),t}const vg="/api/data.json";class fg{#e=new Xr;#t=j(!1);#r=j(null);#o=j(null);#i=j(!1);#n=null;get loading(){return s(this.#t)}get error(){return s(this.#r)}get lastSync(){return s(this.#o)}get isInitialized(){return s(this.#i)}get ingredients(){return Array.from(this.#e.values())}get count(){return this.#e.size}async initialize(){if(s(this.#i)){console.log("[IngredientsStore] Déjà initialisé");return}console.log("[IngredientsStore] Initialisation..."),b(this.#t,!0),b(this.#r,null);try{this.#n=await dg();const e=await this.#n.loadIngredients(),r=await this.#n.loadMetadata();e.size>0&&(console.log(`[IngredientsStore] ${e.size} ingrédients chargés depuis le cache`),this.#e=new Xr(e),b(this.#o,r.lastSync,!0)),await this.#l(),b(this.#i,!0),console.log(`[IngredientsStore] Initialisation complétée: ${this.#e.size} ingrédients`)}catch(e){const r=e instanceof Error?e.message:"Erreur lors de l'initialisation";throw b(this.#r,r,!0),console.error("[IngredientsStore]",r,e),e}finally{b(this.#t,!1)}}async#l(){try{console.log("[IngredientsStore] Chargement depuis data.json...");const e=await fetch(vg);if(!e.ok)throw new Error(`Erreur HTTP: ${e.status}`);const a=(await e.json()).ingredients;if(!Array.isArray(a))throw new Error("Format de données invalide: ingredients n'est pas un tableau");const n=await this.#c(JSON.stringify(a));if((await this.#n.loadMetadata()).dataJsonHash===n){console.log("[IngredientsStore] data.json inchangé, utilisation du cache");return}const o=new Map;a.forEach(l=>{const d={...l};o.set(l.u,d)}),this.#e=new Xr(o),b(this.#o,new Date().toISOString(),!0),this.#n&&(await this.#n.saveIngredients(o),await this.#n.saveMetadata({lastSync:s(this.#o),dataJsonHash:n,ingredientsCount:o.size})),console.log(`[IngredientsStore] ${o.size} ingrédients chargés depuis data.json`)}catch(e){throw console.error("[IngredientsStore] Erreur lors du chargement data.json:",e),e}}async#c(e){const a=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",a);return Array.from(new Uint8Array(n)).map(o=>o.toString(16).padStart(2,"0")).join("")}getIngredientByUuid(e){return this.#e.get(e)||null}searchIngredients(e){if(!e.trim())return this.ingredients;const r=e.toLowerCase();return this.ingredients.filter(a=>a.n.toLowerCase().includes(r))}getIngredientsByType(e){return this.ingredients.filter(r=>r.t===e)}get availableTypes(){const e=new Set;return this.ingredients.forEach(r=>e.add(r.t)),Array.from(e).sort()}getIngredientsByAllergen(e){return this.ingredients.filter(r=>r.a&&r.a.includes(e))}get availableAllergens(){const e=new Set;return this.ingredients.forEach(r=>{r.a&&r.a.forEach(a=>e.add(a))}),Array.from(e).sort()}async createIngredient(e){throw new Error("createIngredient: Non implémenté - Phase 4")}async updateIngredient(e,r){throw new Error("updateIngredient: Non implémenté - Phase 4")}async deleteIngredient(e){throw new Error("deleteIngredient: Non implémenté - Phase 4")}async forceReload(){console.log("[IngredientsStore] Rechargement forcé..."),b(this.#t,!0),b(this.#r,null);try{await this.#l(),console.log("[IngredientsStore] Rechargement complété")}catch(e){const r=e instanceof Error?e.message:"Erreur lors du rechargement";throw b(this.#r,r,!0),console.error("[IngredientsStore]",r,e),e}finally{b(this.#t,!1)}}async clearCache(){this.#n&&(await this.#n.clear(),console.log("[IngredientsStore] Cache vidé")),this.#e.clear(),b(this.#o,null),b(this.#i,!1)}destroy(){this.#n&&(this.#n.close(),this.#n=null),this.#e.clear(),b(this.#i,!1),console.log("[IngredientsStore] Ressources nettoyées")}}const mt=new fg;var hg=w('<div class="alert alert-info"><span>Chargement des ingrédients...</span></div>'),pg=w('<div class="alert alert-error"><span> </span></div>'),gg=w("<option> </option>"),mg=w('<span class="badge badge-warning badge-sm mr-1"> </span>'),_g=w('<span class="text-gray-400">-</span>'),bg=w('<tr><td><code class="text-xs"> </code></td><td class="font-medium"> </td><td><span class="badge badge-outline"> </span></td><td><!></td></tr>'),yg=w('<tr><td colspan="4" class="text-center text-gray-400">Aucun ingrédient trouvé</td></tr>'),wg=w('<div class="stats shadow mb-4"><div class="stat"><div class="stat-title">Total Ingrédients</div> <div class="stat-value"> </div></div> <div class="stat"><div class="stat-title">Types</div> <div class="stat-value"> </div></div> <div class="stat"><div class="stat-title">Allergènes</div> <div class="stat-value"> </div></div></div> <div class="flex gap-4 mb-4"><input type="text" placeholder="Rechercher un ingrédient..." class="input input-bordered flex-1"/> <select class="select select-bordered"><option>Tous les types</option><!></select></div> <div class="overflow-x-auto"><table class="table table-zebra"><thead><tr><th>UUID</th><th>Nom</th><th>Type</th><th>Allergènes</th></tr></thead><tbody></tbody></table></div> <div class="text-sm text-gray-500 mt-4"> <!></div>',1),Sg=w('<div class="container mx-auto p-4"><h1 class="text-2xl font-bold mb-4">Test IngredientsStore</h1> <!></div>');function xg(t,e){J(e,!0);let r=j(""),a=j("");const n=F(()=>{let f=mt.ingredients;return s(r).trim()&&(f=mt.searchIngredients(s(r))),s(a)&&(f=f.filter(h=>h.t===s(a))),f});ks(async()=>{try{await mt.initialize()}catch(f){console.error("Erreur d'initialisation:",f)}});var i=Sg(),o=u(c(i),2);{var l=f=>{var h=hg();v(f,h)},d=f=>{var h=X(),m=C(h);{var g=_=>{var y=pg(),x=c(y),S=c(x);M(()=>I(S,`Erreur: ${mt.error??""}`)),v(_,y)},p=_=>{var y=wg(),x=C(y),S=c(x),A=u(c(S),2),T=c(A),k=u(S,2),$=u(c(k),2),D=c($),R=u(k,2),E=u(c(R),2),z=c(E),te=u(x,2),K=c(te),U=u(K,2),ce=c(U);ce.value=ce.__value="";var pe=u(ce);Fe(pe,17,()=>mt.availableTypes,Vt,(oe,B)=>{var V=gg(),N=c(V),ee={};M(()=>{I(N,s(B)),ee!==(ee=s(B))&&(V.value=(V.__value=s(B))??"")}),v(oe,V)});var Se=u(te,2),G=c(Se),ve=u(c(G));Fe(ve,21,()=>s(n),oe=>oe.u,(oe,B)=>{var V=bg(),N=c(V),ee=c(N),O=c(ee),le=u(N),se=c(le),W=u(le),ne=c(W),xe=c(ne),H=u(W),q=c(H);{var ie=ue=>{var Me=X(),Q=C(Me);Fe(Q,17,()=>s(B).a,Vt,(_e,Le)=>{var Be=mg(),Ge=c(Be);M(()=>I(Ge,s(Le))),v(_e,Be)}),v(ue,Me)},$e=ue=>{var Me=_g();v(ue,Me)};P(q,ue=>{s(B).a&&s(B).a.length>0?ue(ie):ue($e,!1)})}M(()=>{I(O,s(B).u),I(se,s(B).n),I(xe,s(B).t)}),v(oe,V)},oe=>{var B=yg();v(oe,B)});var ye=u(Se,2),ae=c(ye),re=u(ae);{var ge=oe=>{var B=dt();M(V=>I(B,`• Dernière sync: ${V??""}`),[()=>new Date(mt.lastSync).toLocaleString()]),v(oe,B)};P(re,oe=>{mt.lastSync&&oe(ge)})}M(()=>{I(T,mt.count),I(D,mt.availableTypes.length),I(z,mt.availableAllergens.length),I(ae,`Affichage de ${s(n).length??""} / ${mt.count??""} ingrédients `)}),We(K,()=>s(r),oe=>b(r,oe)),ra(U,()=>s(a),oe=>b(a,oe)),v(_,y)};P(m,_=>{mt.error?_(g):_(p,!1)},!0)}v(f,h)};P(o,f=>{mt.loading?f(l):f(d,!1)})}v(t,i),Y()}function Eg(t,e){b(e,!0)}var Pg=w('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),$g=w('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),Ag=w('<div class="text-base-content/60"> </div>'),Tg=w('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),kg=w('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),Dg=w('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),Ig=w('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main>',1),Ng=w('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function Mg(t,e){J(e,!0);let r,a=j(null),n=j(!0),i=j(!1),o=j(!1);function l($,D,R){localStorage.setItem("appwrite-user-email",$),localStorage.setItem("appwrite-user-name",D)}async function d(){const $=xn();r=Jc($);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const E=await(await window.AppwriteClient.getAccount()).get();l(E.email,E.name),await Z.initialize(r,$)}catch(D){const R=D instanceof Error?D.message:"Erreur lors de l'initialisation";b(a,R,!0),console.error("[App] Erreur initialisation:",D)}finally{b(n,!1)}}ks(async()=>{await d()});async function f(){b(o,!1),b(n,!0),b(a,null),await d()}sc(()=>{Z.destroy()});async function h(){if(!(!r||s(i))){b(i,!0);try{const $=xn();await Z.forceReload(r,$)}catch($){console.error("[App] Erreur lors du rechargement forcé:",$)}finally{b(i,!1)}}}const m=F(()=>s(a)||Z.error),g=F(()=>s(n)||Z.loading);var p=Ng(),_=C(p),y=c(_);ig(y,{});var x=u(y,2);{var S=$=>{Rp($)},A=$=>{var D=Ig(),R=C(D),E=c(R),z=c(E),te=u(c(z),2),K=c(te);{var U=W=>{var ne=Pg();v(W,ne)};P(K,W=>{Z.realtimeConnected&&W(U)})}var ce=u(K,2);{var pe=W=>{var ne=$g();v(W,ne)};P(ce,W=>{Z.syncing&&W(pe)})}var Se=u(ce,2);{var G=W=>{var ne=Ag(),xe=c(ne);M(H=>I(xe,`Maj: ${H??""}`),[()=>new Date(Z.lastSync).toLocaleTimeString()]),v(W,ne)};P(Se,W=>{Z.lastSync&&W(G)})}var ve=u(Se,2);cg(ve);var ye=u(ve,2);{var ae=W=>{var ne=Tg();let xe;ne.__click=h;var H=c(ne);Eu(H,{class:"h-4 w-4"}),M(q=>{xe=ke(ne,1,"btn btn-outline btn-sm",null,xe,q),ne.disabled=s(i)||Z.loading},[()=>({loading:s(i)||Z.loading})]),v(W,ne)};P(ye,W=>{s(a)||W(ae)})}var re=u(ye,2);{var ge=W=>{var ne=kg(),xe=c(ne);xe.__click=[Eg,o];var H=c(xe);mu(H,{class:"mr-2 h-4 w-4"}),v(W,ne)};P(re,W=>{s(a)&&W(ge)})}var oe=u(R,2),B=c(oe);{var V=W=>{Bp(W,{get message(){return s(m)}})},N=W=>{var ne=X(),xe=C(ne);{var H=q=>{qp(q,{get message(){return s(m)}})};P(xe,q=>{s(m)&&q(H)},!0)}v(W,ne)};P(B,W=>{s(a)?W(V):W(N,!1)})}var ee=u(B,2);xg(ee,{});var O=u(ee,2);{var le=W=>{Mp(W,{})},se=W=>{var ne=X(),xe=C(ne);{var H=q=>{var ie=Dg();v(q,ie)};P(xe,q=>{!Z.loading&&!s(a)&&q(H)},!0)}v(W,ne)};P(O,W=>{Z.enrichedProducts.length>0?W(le):W(se,!1)})}v($,D)};P(x,$=>{s(g)?$(S):$(A,!1)})}var T=u(_,2);{var k=$=>{Zp($,{onClose:()=>b(o,!1),onAuthSuccess:f})};P(T,$=>{s(o)&&$(k)})}v(t,p),Y()}Ve(["click"]);const vi=document.getElementById("app_products");if(!vi)throw new Error("Élément target non trouvé: #app_products");Ol(Mg,{target:vi});
