(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const io=!1;var la=Array.isArray,Ki=Array.prototype.indexOf,rs=Array.from,qa=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,Yi=Object.getOwnPropertyDescriptors,Ji=Object.prototype,Zi=Array.prototype,lo=Object.getPrototypeOf,xs=Object.isExtensible;function Pn(e){return typeof e=="function"}const te=()=>{};function Xi(e){for(var t=0;t<e.length;t++)e[t]()}function co(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function uo(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const _t=2,ns=4,as=8,Mr=16,Yt=32,Rr=64,ss=128,At=256,aa=512,st=1024,St=2048,hr=4096,It=8192,Or=16384,os=32768,qr=65536,Ps=1<<17,Fi=1<<18,dn=1<<19,el=1<<20,Ba=1<<21,ca=1<<22,kr=1<<23,Nr=Symbol("$state"),fo=Symbol("legacy props"),tl=Symbol(""),Nn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function vo(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function rl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function nl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function al(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ol(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function il(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ll(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function cl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ul(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function dl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ua=1,da=2,ho=4,fl=8,vl=16,hl=1,pl=2,_l=4,ml=8,gl=16,bl=1,yl=2,Ye=Symbol(),wl="http://www.w3.org/1999/xhtml",Sl="http://www.w3.org/2000/svg",xl="@attach";function Pl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function El(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let $l=!1;function po(e){return e===this.v}function _o(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Tl(e,t){return e!==t}function mo(e){return!_o(e,this.v)}let fn=!1,Al=!1;function kl(){fn=!0}let Qe=null;function rn(e){Qe=e}function W(e,t=!1,r){Qe={p:Qe,c:null,e:null,s:e,x:null,l:fn&&!t?{s:null,u:null,$:[]}:null}}function G(e){var t=Qe,r=t.e;if(r!==null){t.e=null;for(var n of r)Co(n)}return Qe=t.p,{}}function vn(){return!fn||Qe!==null&&Qe.l===null}let $r=[];function go(){var e=$r;$r=[],Xi(e)}function Dr(e){if($r.length===0&&!Dn){var t=$r;queueMicrotask(()=>{t===$r&&go()})}$r.push(e)}function Nl(){for(;$r.length>0;)go()}const Dl=new WeakMap;function bo(e){var t=be;if(t===null)return we.f|=kr,e;if((t.f&os)===0){if((t.f&ss)===0)throw!t.parent&&e instanceof Error&&yo(e),e;t.b.error(e)}else nn(e,t)}function nn(e,t){for(;t!==null;){if((t.f&ss)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&yo(e),e}function yo(e){const t=Dl.get(e);t&&(qa(e,"message",{value:t.message}),qa(e,"stack",{value:t.stack}))}const Zn=new Set;let Me=null,Fn=null,ja=new Set,jt=[],fa=null,La=!1,Dn=!1;class Tt{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#l=[];#o=[];#i=[];#a=[];#s=[];#d=[];skipped_effects=new Set;process(t){jt=[],Fn=null;var r=Tt.apply(this);for(const o of t)this.#v(o);if(this.#c===0){this.#f();var n=this.#o,a=this.#i;this.#o=[],this.#i=[],this.#a=[],Fn=this,Me=null,Es(n),Es(a),Fn=null,this.#u?.resolve()}else this.#n(this.#o),this.#n(this.#i),this.#n(this.#a);r();for(const o of this.#l)On(o);this.#l=[]}#v(t){t.f^=st;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Yt|Rr))!==0,o=a&&(n&st)!==0,i=o||(n&It)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=st:(n&ns)!==0?this.#i.push(r):(n&st)===0&&((n&ca)!==0&&r.b?.is_pending()?this.#l.push(r):ma(r)&&((r.f&Mr)!==0&&this.#a.push(r),On(r)));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#n(t){for(const r of t)((r.f&St)!==0?this.#s:this.#d).push(r),ut(r,st);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){Me=this}deactivate(){Me=null}flush(){if(jt.length>0){if(this.activate(),wo(),Me!==null&&Me!==this)return}else this.#c===0&&this.#f();this.deactivate();for(const t of ja)if(ja.delete(t),t(),Me!==null)break}#f(){for(const t of this.#r)t();if(this.#r.clear(),Zn.size>1){this.#e.clear();let t=!0;for(const r of Zn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;So(n)}if(jt.length>0){Me=r;const n=Tt.apply(r);for(const a of jt)r.#v(a);jt=[],n()}}Me=null}Zn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#s)ut(t,St),Ir(t);for(const t of this.#d)ut(t,hr),Ir(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=co()).promise}static ensure(){if(Me===null){const t=Me=new Tt;Zn.add(Me),Dn||Tt.enqueue(()=>{Me===t&&t.flush()})}return Me}static enqueue(t){Dr(t)}static apply(t){return te}}function Il(e){var t=Dn;Dn=!0;try{for(var r;;){if(Nl(),jt.length===0&&(Me?.flush(),jt.length===0))return fa=null,r;wo()}}finally{Dn=t}}function wo(){var e=en;La=!0;try{var t=0;for(ks(!0);jt.length>0;){var r=Tt.ensure();if(t++>1e3){var n,a;Cl()}r.process(jt),cr.clear()}}finally{La=!1,ks(e),fa=null}}function Cl(){try{ol()}catch(e){nn(e,fa)}}let Pr=null;function Es(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Or|It))===0&&ma(n)&&(Pr=[],On(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Oo(n):n.fn=null),Pr?.length>0)){cr.clear();for(const a of Pr)On(a);Pr=[]}}Pr=null}}function So(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&_t)!==0?So(t):(r&(ca|Mr))!==0&&(ut(t,St),Ir(t))}}function Ir(e){for(var t=fa=e;t.parent!==null;){t=t.parent;var r=t.f;if(La&&t===be&&(r&Mr)!==0)return;if((r&(Rr|Yt))!==0){if((r&st)===0)return;t.f^=st}}jt.push(t)}function xo(e){let t=0,r=fr(0),n;return()=>{Yl()&&(s(r),ds(()=>(t===0&&(n=hn(()=>e(()=>Lt(r)))),t+=1,()=>{Dr(()=>{t-=1,t===0&&(n?.(),n=void 0,Lt(r))})})))}}var Ml=qr|dn|ss;function Rl(e,t,r){new Ol(e,t,r)}class Ol{parent;#e=!1;#r;#c=null;#u;#l;#o;#i=null;#a=null;#s=null;#d=null;#v=0;#n=0;#f=!1;#h=null;#t=()=>{this.#h&&an(this.#h,this.#v)};#g=xo(()=>(this.#h=fr(this.#v),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#l=n,this.parent=be.b,this.#e=!!this.#u.pending,this.#o=Xt(()=>{be.b=this;{try{this.#i=tt(()=>n(this.#r))}catch(a){this.error(a)}this.#n>0?this.#_():this.#e=!1}},Ml)}#w(){try{this.#i=tt(()=>this.#l(this.#r))}catch(t){this.error(t)}this.#e=!1}#S(){const t=this.#u.pending;t&&(this.#a=tt(()=>t(this.#r)),Tt.enqueue(()=>{this.#i=this.#p(()=>(Tt.ensure(),tt(()=>this.#l(this.#r)))),this.#n>0?this.#_():(Qt(this.#a,()=>{this.#a=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#p(t){var r=be,n=we,a=Qe;zt(this.#o),pt(this.#o),rn(this.#o.ctx);try{return t()}catch(o){return bo(o),null}finally{zt(r),pt(n),rn(a)}}#_(){const t=this.#u.pending;this.#i!==null&&(this.#d=document.createDocumentFragment(),ql(this.#i,this.#d)),this.#a===null&&(this.#a=tt(()=>t(this.#r)))}#m(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t);return}this.#n+=t,this.#n===0&&(this.#e=!1,this.#a&&Qt(this.#a,()=>{this.#a=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),Dr(()=>{Tt.ensure().flush()}))}update_pending_count(t){this.#m(t),this.#v+=t,ja.add(this.#t)}get_effect_pending(){return this.#g(),s(this.#h)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#f||!r&&!n)throw t;this.#i&&(rt(this.#i),this.#i=null),this.#a&&(rt(this.#a),this.#a=null),this.#s&&(rt(this.#s),this.#s=null);var a=!1,o=!1;const i=()=>{if(a){El();return}a=!0,o&&dl(),Tt.ensure(),this.#v=0,this.#s!==null&&Qt(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#i=this.#p(()=>(this.#f=!1,tt(()=>this.#l(this.#r)))),this.#n>0?this.#_():this.#e=!1};var l=we;try{pt(null),o=!0,r?.(t,i),o=!1}catch(u){nn(u,this.#o&&this.#o.parent)}finally{pt(l)}n&&Dr(()=>{this.#s=this.#p(()=>{this.#f=!0;try{return tt(()=>{n(this.#r,()=>t,()=>i)})}catch(u){return nn(u,this.#o.parent),null}finally{this.#f=!1}})})}}function ql(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:zn(r);t.append(r),r=a}}function Po(e,t,r){const n=vn()?va:is;if(t.length===0){r(e.map(n));return}var a=Me,o=be,i=Bl();Promise.all(t.map(l=>jl(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(u){(o.f&Or)===0&&nn(u,o)}a?.deactivate(),Eo()}).catch(l=>{nn(l,o)})}function Bl(){var e=be,t=we,r=Qe,n=Me;return function(){zt(e),pt(t),rn(r),n?.activate()}}function Eo(){zt(null),pt(null),rn(null)}function va(e){var t=_t|St,r=we!==null&&(we.f&_t)!==0?we:null;return be===null||r!==null&&(r.f&At)!==0?t|=At:be.f|=dn,{ctx:Qe,deps:null,effects:null,equals:po,f:t,fn:e,reactions:null,rv:0,v:Ye,wv:0,parent:r??be,ac:null}}function jl(e,t){let r=be;r===null&&rl();var n=r.b,a=void 0,o=fr(Ye),i=!we,l=new Map;return Zl(()=>{var u=co();a=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(p){u.reject(p)}var f=Me,h=n.is_pending();i&&(n.update_pending_count(1),h||(f.increment(),l.get(f)?.reject(Nn),l.set(f,u)));const m=(p,_=void 0)=>{h||f.activate(),_?_!==Nn&&(o.f|=kr,an(o,_)):((o.f&kr)!==0&&(o.f^=kr),an(o,p)),i&&(n.update_pending_count(-1),h||f.decrement()),Eo()};u.promise.then(m,p=>m(null,p||"unknown"))}),Io(()=>{for(const u of l.values())u.reject(Nn)}),new Promise(u=>{function f(h){function m(){h===a?u(o):f(a)}h.then(m,m)}f(a)})}function U(e){const t=va(e);return jo(t),t}function is(e){const t=va(e);return t.equals=mo,t}function $o(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)rt(t[r])}}function Ll(e){for(var t=e.parent;t!==null;){if((t.f&_t)===0)return t;t=t.parent}return null}function ls(e){var t,r=be;zt(Ll(e));try{$o(e),t=Uo(e)}finally{zt(r)}return t}function To(e){var t=ls(e);if(e.equals(t)||(e.v=t,e.wv=zo()),!jr){var r=(ir||(e.f&At)!==0)&&e.deps!==null?hr:st;ut(e,r)}}const cr=new Map;function fr(e,t){var r={f:0,v:e,reactions:null,equals:po,rv:0,wv:0};return r}function Y(e,t){const r=fr(e);return jo(r),r}function zl(e,t=!1,r=!0){const n=fr(e);return t||(n.equals=mo),fn&&r&&Qe!==null&&Qe.l!==null&&(Qe.l.s??=[]).push(n),n}function E(e,t,r=!1){we!==null&&(!Dt||(we.f&Ps)!==0)&&vn()&&(we.f&(_t|Mr|ca|Ps))!==0&&!Ht?.includes(e)&&ul();let n=r?Ie(t):t;return an(e,n)}function an(e,t){if(!e.equals(t)){var r=e.v;jr?cr.set(e,t):cr.set(e,r),e.v=t;var n=Tt.ensure();n.capture(e,r),(e.f&_t)!==0&&((e.f&St)!==0&&ls(e),ut(e,(e.f&At)===0?st:hr)),e.wv=zo(),Ao(e,St),vn()&&be!==null&&(be.f&st)!==0&&(be.f&(Yt|Rr))===0&&($t===null?ec([e]):$t.push(e))}return t}function Lt(e){E(e,e.v+1)}function Ao(e,t){var r=e.reactions;if(r!==null)for(var n=vn(),a=r.length,o=0;o<a;o++){var i=r[o],l=i.f;if(!(!n&&i===be)){var u=(l&St)===0;u&&ut(i,t),(l&_t)!==0?Ao(i,hr):u&&((l&Mr)!==0&&Pr!==null&&Pr.push(i),Ir(i))}}}function Ie(e){if(typeof e!="object"||e===null||Nr in e)return e;const t=lo(e);if(t!==Ji&&t!==Zi)return e;var r=new Map,n=la(e),a=Y(0),o=Kt,i=l=>{if(Kt===o)return l();var u=we,f=Kt;pt(null),Ds(o);var h=l();return pt(u),Ds(f),h};return n&&r.set("length",Y(e.length)),new Proxy(e,{defineProperty(l,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&ll();var h=r.get(u);return h===void 0?h=i(()=>{var m=Y(f.value);return r.set(u,m),m}):E(h,f.value,!0),!0},deleteProperty(l,u){var f=r.get(u);if(f===void 0){if(u in l){const h=i(()=>Y(Ye));r.set(u,h),Lt(a)}}else E(f,Ye),Lt(a);return!0},get(l,u,f){if(u===Nr)return e;var h=r.get(u),m=u in l;if(h===void 0&&(!m||lr(l,u)?.writable)&&(h=i(()=>{var _=Ie(m?l[u]:Ye),g=Y(_);return g}),r.set(u,h)),h!==void 0){var p=s(h);return p===Ye?void 0:p}return Reflect.get(l,u,f)},getOwnPropertyDescriptor(l,u){var f=Reflect.getOwnPropertyDescriptor(l,u);if(f&&"value"in f){var h=r.get(u);h&&(f.value=s(h))}else if(f===void 0){var m=r.get(u),p=m?.v;if(m!==void 0&&p!==Ye)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,u){if(u===Nr)return!0;var f=r.get(u),h=f!==void 0&&f.v!==Ye||Reflect.has(l,u);if(f!==void 0||be!==null&&(!h||lr(l,u)?.writable)){f===void 0&&(f=i(()=>{var p=h?Ie(l[u]):Ye,_=Y(p);return _}),r.set(u,f));var m=s(f);if(m===Ye)return!1}return h},set(l,u,f,h){var m=r.get(u),p=u in l;if(n&&u==="length")for(var _=f;_<m.v;_+=1){var g=r.get(_+"");g!==void 0?E(g,Ye):_ in l&&(g=i(()=>Y(Ye)),r.set(_+"",g))}if(m===void 0)(!p||lr(l,u)?.writable)&&(m=i(()=>Y(void 0)),E(m,Ie(f)),r.set(u,m));else{p=m.v!==Ye;var x=i(()=>Ie(f));E(m,x)}var b=Reflect.getOwnPropertyDescriptor(l,u);if(b?.set&&b.set.call(h,f),!p){if(n&&typeof u=="string"){var y=r.get("length"),N=Number(u);Number.isInteger(N)&&N>=y.v&&E(y,N+1)}Lt(a)}return!0},ownKeys(l){s(a);var u=Reflect.ownKeys(l).filter(m=>{var p=r.get(m);return p===void 0||p.v!==Ye});for(var[f,h]of r)h.v!==Ye&&!(f in l)&&u.push(f);return u},setPrototypeOf(){cl()}})}function $s(e){try{if(e!==null&&typeof e=="object"&&Nr in e)return e[Nr]}catch{}return e}function Vl(e,t){return Object.is($s(e),$s(t))}var Ts,ko,No,Do;function Ul(){if(Ts===void 0){Ts=window,ko=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;No=lr(t,"firstChild").get,Do=lr(t,"nextSibling").get,xs(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),xs(r)&&(r.__t=void 0)}}function Jt(e=""){return document.createTextNode(e)}function sn(e){return No.call(e)}function zn(e){return Do.call(e)}function c(e,t){return sn(e)}function z(e,t=!1){{var r=sn(e);return r instanceof Comment&&r.data===""?zn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=zn(n);return n}function Wl(e){e.textContent=""}function ha(){return!1}function Gl(e,t){if(t){const r=document.body;e.autofocus=!0,Dr(()=>{document.activeElement===r&&e.focus()})}}let As=!1;function Ql(){As||(As=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function pa(e){var t=we,r=be;pt(null),zt(null);try{return e()}finally{pt(t),zt(r)}}function cs(e,t,r,n=r){e.addEventListener(t,()=>pa(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Ql()}function Hl(e){be===null&&we===null&&sl(),we!==null&&(we.f&At)!==0&&be===null&&al(),jr&&nl()}function Kl(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Zt(e,t,r,n=!0){var a=be;a!==null&&(a.f&It)!==0&&(e|=It);var o={ctx:Qe,deps:null,nodes_start:null,nodes_end:null,f:e|St,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{On(o),o.f|=os}catch(u){throw rt(o),u}else t!==null&&Ir(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&dn)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&Kl(i,a),we!==null&&(we.f&_t)!==0&&(e&Rr)===0)){var l=we;(l.effects??=[]).push(i)}}return o}function Yl(){return we!==null&&!Dt}function Io(e){const t=Zt(as,null,!1);return ut(t,st),t.teardown=e,t}function Br(e){Hl();var t=be.f,r=!we&&(t&Yt)!==0&&(t&os)===0;if(r){var n=Qe;(n.e??=[]).push(e)}else return Co(e)}function Co(e){return Zt(ns|el,e,!1)}function Jl(e){Tt.ensure();const t=Zt(Rr|dn,e,!0);return(r={})=>new Promise(n=>{r.outro?Qt(t,()=>{rt(t),n(void 0)}):(rt(t),n(void 0))})}function us(e){return Zt(ns,e,!1)}function Zl(e){return Zt(ca|dn,e,!0)}function ds(e,t=0){return Zt(as|t,e,!0)}function L(e,t=[],r=[]){Po(t,r,n=>{Zt(as,()=>e(...n.map(s)),!0)})}function Xt(e,t=0){var r=Zt(Mr|t,e,!0);return r}function tt(e,t=!0){return Zt(Yt|dn,e,!0,t)}function Mo(e){var t=e.teardown;if(t!==null){const r=jr,n=we;Ns(!0),pt(null);try{t.call(null)}finally{Ns(r),pt(n)}}}function Ro(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&pa(()=>{a.abort(Nn)});var n=r.next;(r.f&Rr)!==0?r.parent=null:rt(r,t),r=n}}function Xl(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Yt)===0&&rt(t),t=r}}function rt(e,t=!0){var r=!1;(t||(e.f&Fi)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Fl(e.nodes_start,e.nodes_end),r=!0),Ro(e,t&&!r),sa(e,0),ut(e,Or);var n=e.transitions;if(n!==null)for(const o of n)o.stop();Mo(e);var a=e.parent;a!==null&&a.first!==null&&Oo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Fl(e,t){for(;e!==null;){var r=e===t?null:zn(e);e.remove(),e=r}}function Oo(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Qt(e,t){var r=[];fs(e,r,!0),qo(r,()=>{rt(e),t&&t()})}function qo(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function fs(e,t,r){if((e.f&It)===0){if(e.f^=It,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,o=(n.f&qr)!==0||(n.f&Yt)!==0;fs(n,t,o?r:!1),n=a}}}function _a(e){Bo(e,!0)}function Bo(e,t){if((e.f&It)!==0){e.f^=It,(e.f&st)===0&&(ut(e,St),Ir(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&qr)!==0||(r.f&Yt)!==0;Bo(r,a?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let en=!1;function ks(e){en=e}let jr=!1;function Ns(e){jr=e}let we=null,Dt=!1;function pt(e){we=e}let be=null;function zt(e){be=e}let Ht=null;function jo(e){we!==null&&(Ht===null?Ht=[e]:Ht.push(e))}let lt=null,wt=0,$t=null;function ec(e){$t=e}let Lo=1,Rn=0,Kt=Rn;function Ds(e){Kt=e}let ir=!1;function zo(){return++Lo}function ma(e){var t=e.f;if((t&St)!==0)return!0;if((t&hr)!==0){var r=e.deps,n=(t&At)!==0;if(r!==null){var a,o,i=(t&aa)!==0,l=n&&be!==null&&!ir,u=r.length;if((i||l)&&(be===null||(be.f&Or)===0)){var f=e,h=f.parent;for(a=0;a<u;a++)o=r[a],(i||!o?.reactions?.includes(f))&&(o.reactions??=[]).push(f);i&&(f.f^=aa),l&&h!==null&&(h.f&At)===0&&(f.f^=At)}for(a=0;a<u;a++)if(o=r[a],ma(o)&&To(o),o.wv>e.wv)return!0}(!n||be!==null&&!ir)&&ut(e,st)}return!1}function Vo(e,t,r=!0){var n=e.reactions;if(n!==null&&!Ht?.includes(e))for(var a=0;a<n.length;a++){var o=n[a];(o.f&_t)!==0?Vo(o,t,!1):t===o&&(r?ut(o,St):(o.f&st)!==0&&ut(o,hr),Ir(o))}}function Uo(e){var t=lt,r=wt,n=$t,a=we,o=ir,i=Ht,l=Qe,u=Dt,f=Kt,h=e.f;lt=null,wt=0,$t=null,ir=(h&At)!==0&&(Dt||!en||we===null),we=(h&(Yt|Rr))===0?e:null,Ht=null,rn(e.ctx),Dt=!1,Kt=++Rn,e.ac!==null&&(pa(()=>{e.ac.abort(Nn)}),e.ac=null);try{e.f|=Ba;var m=e.fn,p=m(),_=e.deps;if(lt!==null){var g;if(sa(e,wt),_!==null&&wt>0)for(_.length=wt+lt.length,g=0;g<lt.length;g++)_[wt+g]=lt[g];else e.deps=_=lt;if(!ir||(h&_t)!==0&&e.reactions!==null)for(g=wt;g<_.length;g++)(_[g].reactions??=[]).push(e)}else _!==null&&wt<_.length&&(sa(e,wt),_.length=wt);if(vn()&&$t!==null&&!Dt&&_!==null&&(e.f&(_t|hr|St))===0)for(g=0;g<$t.length;g++)Vo($t[g],e);return a!==null&&a!==e&&(Rn++,$t!==null&&(n===null?n=$t:n.push(...$t))),(e.f&kr)!==0&&(e.f^=kr),p}catch(x){return bo(x)}finally{e.f^=Ba,lt=t,wt=r,$t=n,we=a,ir=o,Ht=i,rn(l),Dt=u,Kt=f}}function tc(e,t){let r=t.reactions;if(r!==null){var n=Ki.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&_t)!==0&&(lt===null||!lt.includes(t))&&(ut(t,hr),(t.f&(At|aa))===0&&(t.f^=aa),$o(t),sa(t,0))}function sa(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)tc(e,r[n])}function On(e){var t=e.f;if((t&Or)===0){ut(e,st);var r=be,n=en;be=e,en=!0;try{(t&Mr)!==0?Xl(e):Ro(e),Mo(e);var a=Uo(e);e.teardown=typeof a=="function"?a:null,e.wv=Lo;var o;io&&Al&&(e.f&St)!==0&&e.deps}finally{en=n,be=r}}}async function rc(){await Promise.resolve(),Il()}function s(e){var t=e.f,r=(t&_t)!==0;if(we!==null&&!Dt){var n=be!==null&&(be.f&Or)!==0;if(!n&&!Ht?.includes(e)){var a=we.deps;if((we.f&Ba)!==0)e.rv<Rn&&(e.rv=Rn,lt===null&&a!==null&&a[wt]===e?wt++:lt===null?lt=[e]:(!ir||!lt.includes(e))&&lt.push(e));else{(we.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[we]:o.includes(we)||o.push(we)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&At)===0&&(i.f^=At)}if(jr){if(cr.has(e))return cr.get(e);if(r){i=e;var u=i.v;return((i.f&st)===0&&i.reactions!==null||Wo(i))&&(u=ls(i)),cr.set(i,u),u}}else r&&(i=e,ma(i)&&To(i));if((e.f&kr)!==0)throw e.v;return e.v}function Wo(e){if(e.v===Ye)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(cr.has(t)||(t.f&_t)!==0&&Wo(t))return!0;return!1}function hn(e){var t=Dt;try{return Dt=!0,e()}finally{Dt=t}}const nc=-7169;function ut(e,t){e.f=e.f&nc|t}function ac(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const sc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function oc(e){return sc.includes(e)}const ic={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function lc(e){return e=e.toLowerCase(),ic[e]??e}const cc=["touchstart","touchmove"];function uc(e){return cc.includes(e)}const Go=new Set,za=new Set;function Qo(e,t,r,n={}){function a(o){if(n.capture||An.call(t,o),!o.cancelBubble)return pa(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Dr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Is(e,t,r,n={}){var a=Qo(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function ot(e){for(var t=0;t<e.length;t++)Go.add(e[t]);for(var r of za)r(e)}let Cs=null;function An(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;Cs=e;var i=0,l=Cs===e&&e.__root;if(l){var u=a.indexOf(l);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;u<=f&&(i=u)}if(o=a[i]||e.target,o!==t){qa(e,"currentTarget",{configurable:!0,get(){return o||r}});var h=we,m=be;pt(null),zt(null);try{for(var p,_=[];o!==null;){var g=o.assignedSlot||o.parentNode||o.host||null;try{var x=o["__"+n];if(x!=null&&(!o.disabled||e.target===o))if(la(x)){var[b,...y]=x;b.apply(o,[e,...y])}else x.call(o,e)}catch(N){p?_.push(N):p=N}if(e.cancelBubble||g===t||g===null)break;o=g}if(p){for(let N of _)queueMicrotask(()=>{throw N});throw p}}finally{e.__root=t,delete e.currentTarget,pt(h),zt(m)}}}function Ho(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function on(e,t){var r=be;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function S(e,t){var r=(t&bl)!==0,n=(t&yl)!==0,a,o=!e.startsWith("<!>");return()=>{a===void 0&&(a=Ho(o?e:"<!>"+e),r||(a=sn(a)));var i=n||ko?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=sn(i),u=i.lastChild;on(l,u)}else on(i,i);return i}}function dc(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Ho(a),l=sn(i);o=sn(l)}var u=o.cloneNode(!0);return on(u,u),u}}function fc(e,t){return dc(e,t,"svg")}function et(e=""){{var t=Jt(e+"");return on(t,t),t}}function H(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Jt();return e.append(t,r),on(t,r),e}function v(e,t){e!==null&&e.before(t)}function j(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function vc(e,t){return hc(e,t)}const Zr=new Map;function hc(e,{target:t,anchor:r,props:n={},events:a,context:o,intro:i=!0}){Ul();var l=new Set,u=m=>{for(var p=0;p<m.length;p++){var _=m[p];if(!l.has(_)){l.add(_);var g=uc(_);t.addEventListener(_,An,{passive:g});var x=Zr.get(_);x===void 0?(document.addEventListener(_,An,{passive:g}),Zr.set(_,1)):Zr.set(_,x+1)}}};u(rs(Go)),za.add(u);var f=void 0,h=Jl(()=>{var m=r??t.appendChild(Jt());return Rl(m,{pending:()=>{}},p=>{if(o){W({});var _=Qe;_.c=o}a&&(n.$$events=a),f=e(p,n)||{},o&&G()}),()=>{for(var p of l){t.removeEventListener(p,An);var _=Zr.get(p);--_===0?(document.removeEventListener(p,An),Zr.delete(p)):Zr.set(p,_)}za.delete(u),m!==r&&m.parentNode?.removeChild(m)}});return pc.set(f,h),f}let pc=new WeakMap;function A(e,t,r=!1){var n=e,a=null,o=null,i=Ye,l=r?qr:0,u=!1;const f=(_,g=!0)=>{u=!0,p(g,_)};var h=null;function m(){h!==null&&(h.lastChild.remove(),n.before(h),h=null);var _=i?a:o,g=i?o:a;_&&_a(_),g&&Qt(g,()=>{i?o=null:a=null})}const p=(_,g)=>{if(i!==(i=_)){var x=ha(),b=n;if(x&&(h=document.createDocumentFragment(),h.append(b=Jt())),i?a??=g&&tt(()=>g(b)):o??=g&&tt(()=>g(b)),x){var y=Me,N=i?a:o,w=i?o:a;N&&y.skipped_effects.delete(N),w&&y.skipped_effects.add(w),y.add_callback(m)}else m()}};Xt(()=>{u=!1,t(f),u||p(null,null)},l)}function _c(e,t,r){var n=e,a=Ye,o,i,l=null,u=vn()?Tl:_o;function f(){o&&Qt(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}Xt(()=>{if(u(a,a=t())){var h=n,m=ha();m&&(l=document.createDocumentFragment(),l.append(h=Jt())),i=tt(()=>r(h)),m?Me.add_callback(f):f()}})}function Va(e,t){return t}function mc(e,t,r){for(var n=e.items,a=[],o=t.length,i=0;i<o;i++)fs(t[i].e,a,!0);var l=o>0&&a.length===0&&r!==null;if(l){var u=r.parentNode;Wl(u),u.append(r),n.clear(),Bt(e,t[0].prev,t[o-1].next)}qo(a,()=>{for(var f=0;f<o;f++){var h=t[f];l||(n.delete(h.k),Bt(e,h.prev,h.next)),rt(h.e,!l)}})}function Je(e,t,r,n,a,o=null){var i=e,l={flags:t,items:new Map,first:null},u=(t&ho)!==0;if(u){var f=e;i=f.appendChild(Jt())}var h=null,m=!1,p=new Map,_=is(()=>{var y=r();return la(y)?y:y==null?[]:rs(y)}),g,x;function b(){gc(x,g,l,p,i,a,t,n,r),o!==null&&(g.length===0?h?_a(h):h=tt(()=>o(i)):h!==null&&Qt(h,()=>{h=null}))}Xt(()=>{x??=be,g=s(_);var y=g.length;if(!(m&&y===0)){m=y===0;var N,w,P,$;if(ha()){var k=new Set,M=Me;for(w=0;w<y;w+=1){P=g[w],$=n(P,w);var D=l.items.get($)??p.get($);D?(t&(ua|da))!==0&&Ko(D,P,w,t):(N=Yo(null,l,null,null,P,$,w,a,t,r,!0),p.set($,N)),k.add($)}for(const[C,I]of l.items)k.has(C)||M.skipped_effects.add(I.e);M.add_callback(b)}else b();s(_)}})}function gc(e,t,r,n,a,o,i,l,u){var f=(i&fl)!==0,h=(i&(ua|da))!==0,m=t.length,p=r.items,_=r.first,g=_,x,b=null,y,N=[],w=[],P,$,k,M;if(f)for(M=0;M<m;M+=1)P=t[M],$=l(P,M),k=p.get($),k!==void 0&&(k.a?.measure(),(y??=new Set).add(k));for(M=0;M<m;M+=1){if(P=t[M],$=l(P,M),k=p.get($),k===void 0){var D=n.get($);if(D!==void 0){n.delete($),p.set($,D);var C=b?b.next:g;Bt(r,b,D),Bt(r,D,C),Da(D,C,a),b=D}else{var I=g?g.e.nodes_start:a;b=Yo(I,r,b,b===null?r.first:b.next,P,$,M,o,i,u)}p.set($,b),N=[],w=[],g=b.next;continue}if(h&&Ko(k,P,M,i),(k.e.f&It)!==0&&(_a(k.e),f&&(k.a?.unfix(),(y??=new Set).delete(k))),k!==g){if(x!==void 0&&x.has(k)){if(N.length<w.length){var O=w[0],q;b=O.prev;var X=N[0],Ae=N[N.length-1];for(q=0;q<N.length;q+=1)Da(N[q],O,a);for(q=0;q<w.length;q+=1)x.delete(w[q]);Bt(r,X.prev,Ae.next),Bt(r,b,X),Bt(r,Ae,O),g=O,b=Ae,M-=1,N=[],w=[]}else x.delete(k),Da(k,g,a),Bt(r,k.prev,k.next),Bt(r,k,b===null?r.first:b.next),Bt(r,b,k),b=k;continue}for(N=[],w=[];g!==null&&g.k!==$;)(g.e.f&It)===0&&(x??=new Set).add(g),w.push(g),g=g.next;if(g===null)continue;k=g}N.push(k),b=k,g=k.next}if(g!==null||x!==void 0){for(var fe=x===void 0?[]:rs(x);g!==null;)(g.e.f&It)===0&&fe.push(g),g=g.next;var Se=fe.length;if(Se>0){var ce=(i&ho)!==0&&m===0?a:null;if(f){for(M=0;M<Se;M+=1)fe[M].a?.measure();for(M=0;M<Se;M+=1)fe[M].a?.fix()}mc(r,fe,ce)}}f&&Dr(()=>{if(y!==void 0)for(k of y)k.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var R of n.values())rt(R.e);n.clear()}function Ko(e,t,r,n){(n&ua)!==0&&an(e.v,t),(n&da)!==0?an(e.i,r):e.i=r}function Yo(e,t,r,n,a,o,i,l,u,f,h){var m=(u&ua)!==0,p=(u&vl)===0,_=m?p?zl(a,!1,!1):fr(a):a,g=(u&da)===0?i:fr(i),x={i:g,v:_,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=Jt())}return x.e=tt(()=>l(e,_,g,f),$l),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?h||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function Da(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=zn(o);a.before(o),o=i}}function Bt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ne(e,t,...r){var n=e,a=te,o;Xt(()=>{a!==(a=t())&&(o&&(rt(o),o=null),o=tt(()=>a(n,...r)))},qr)}function Tr(e,t,r){var n=e,a,o,i=null,l=null;function u(){o&&(Qt(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}Xt(()=>{if(a!==(a=t())){var f=ha();if(a){var h=n;f&&(i=document.createDocumentFragment(),i.append(h=Jt()),o&&Me.skipped_effects.add(o)),l=tt(()=>r(h,a))}f?Me.add_callback(u):u()}},qr)}function bc(e,t,r,n,a,o){var i,l,u=null,f=e,h;Xt(()=>{const m=t()||null;var p=Sl;m!==i&&(h&&(m===null?Qt(h,()=>{h=null,l=null}):m===l?_a(h):rt(h)),m&&m!==l&&(h=tt(()=>{if(u=document.createElementNS(p,m),on(u,u),n){var _=u.appendChild(Jt());n(u,_)}be.nodes_end=u,f.before(u)})),i=m,i&&(l=i))},qr)}function yc(e,t){var r=void 0,n;Xt(()=>{r!==(r=t())&&(n&&(rt(n),n=null),r&&(n=tt(()=>{us(()=>r(e))})))})}function Jo(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Jo(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function wc(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Jo(e))&&(n&&(n+=" "),n+=t);return n}function Zo(e){return typeof e=="object"?wc(e):e??""}const Ms=[...` 	
\r\f \v\uFEFF`];function Sc(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+o;(i===0||Ms.includes(n[i-1]))&&(l===n.length||Ms.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Rs(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var o=e[a];o!=null&&o!==""&&(n+=" "+a+": "+o+r)}return n}function Ia(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function xc(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,u=[];n&&u.push(...Object.keys(n).map(Ia)),a&&u.push(...Object.keys(a).map(Ia));var f=0,h=-1;const x=e.length;for(var m=0;m<x;m++){var p=e[m];if(l?p==="/"&&e[m-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[m+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?i++:p===")"&&i--,!l&&o===!1&&i===0){if(p===":"&&h===-1)h=m;else if(p===";"||m===x-1){if(h!==-1){var _=Ia(e.substring(f,h).trim());if(!u.includes(_)){p!==";"&&m++;var g=e.substring(f,m).trim();r+=" "+g+";"}}f=m+1,h=-1}}}}return n&&(r+=Rs(n)),a&&(r+=Rs(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Te(e,t,r,n,a,o){var i=e.__className;if(i!==r||i===void 0){var l=Sc(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&a!==o)for(var u in o){var f=!!o[u];(a==null||f!==!!a[u])&&e.classList.toggle(u,f)}return o}function Ca(e,t={},r,n){for(var a in r){var o=r[a];t[a]!==o&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,n))}}function Xo(e,t,r,n){var a=e.__style;if(a!==t){var o=xc(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(Ca(e,r?.[0],n[0]),Ca(e,r?.[1],n[1],"important")):Ca(e,r,n));return n}function oa(e,t,r=!1){if(e.multiple){if(t==null)return;if(!la(t))return Pl();for(var n of e.options)n.selected=t.includes(In(n));return}for(n of e.options){var a=In(n);if(Vl(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Fo(e){var t=new MutationObserver(()=>{oa(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Io(()=>{t.disconnect()})}function Ar(e,t,r=t){var n=!0;cs(e,"change",a=>{var o=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),In);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&In(l)}r(i)}),us(()=>{var a=t();if(oa(e,a,n),n&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=In(o),r(a))}e.__value=a,n=!1}),Fo(e)}function In(e){return"__value"in e?e.__value:e.value}const En=Symbol("class"),$n=Symbol("style"),ei=Symbol("is custom element"),ti=Symbol("is html");function Pc(e,t){var r=ga(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function tn(e,t){var r=ga(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Ec(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Cr(e,t,r,n){var a=ga(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[tl]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ri(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function $c(e,t,r,n,a=!1,o=!1){var i=ga(e),l=i[ei],u=!i[ti],f=t||{},h=e.tagName==="OPTION";for(var m in t)m in r||(r[m]=null);r.class?r.class=Zo(r.class):r[En]&&(r.class=null),r[$n]&&(r.style??=null);var p=ri(e);for(const P in r){let $=r[P];if(h&&P==="value"&&$==null){e.value=e.__value="",f[P]=$;continue}if(P==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";Te(e,_,$,n,t?.[En],r[En]),f[P]=$,f[En]=r[En];continue}if(P==="style"){Xo(e,$,t?.[$n],r[$n]),f[P]=$,f[$n]=r[$n];continue}var g=f[P];if(!($===g&&!($===void 0&&e.hasAttribute(P)))){f[P]=$;var x=P[0]+P[1];if(x!=="$$")if(x==="on"){const k={},M="$$"+P;let D=P.slice(2);var b=oc(D);if(ac(D)&&(D=D.slice(0,-7),k.capture=!0),!b&&g){if($!=null)continue;e.removeEventListener(D,f[M],k),f[M]=null}if($!=null)if(b)e[`__${D}`]=$,ot([D]);else{let C=function(I){f[P].call(this,I)};var w=C;f[M]=Qo(D,e,C,k)}else b&&(e[`__${D}`]=void 0)}else if(P==="style")Cr(e,P,$);else if(P==="autofocus")Gl(e,!!$);else if(!l&&(P==="__value"||P==="value"&&$!=null))e.value=e.__value=$;else if(P==="selected"&&h)Ec(e,$);else{var y=P;u||(y=lc(y));var N=y==="defaultValue"||y==="defaultChecked";if($==null&&!l&&!N)if(i[P]=null,y==="value"||y==="checked"){let k=e;const M=t===void 0;if(y==="value"){let D=k.defaultValue;k.removeAttribute(y),k.defaultValue=D,k.value=k.__value=M?D:null}else{let D=k.defaultChecked;k.removeAttribute(y),k.defaultChecked=D,k.checked=M?D:!1}}else e.removeAttribute(P);else N||p.includes(y)&&(l||typeof $!="string")?(e[y]=$,y in i&&(i[y]=Ye)):typeof $!="function"&&Cr(e,y,$)}}}return f}function Os(e,t,r=[],n=[],a,o=!1,i=!1){Po(r,n,l=>{var u=void 0,f={},h=e.nodeName==="SELECT",m=!1;if(Xt(()=>{var _=t(...l.map(s)),g=$c(e,u,_,a,o,i);m&&h&&"value"in _&&oa(e,_.value);for(let b of Object.getOwnPropertySymbols(f))_[b]||rt(f[b]);for(let b of Object.getOwnPropertySymbols(_)){var x=_[b];b.description===xl&&(!u||x!==u[b])&&(f[b]&&rt(f[b]),f[b]=tt(()=>yc(e,()=>x))),g[b]=x}u=g}),h){var p=e;us(()=>{oa(p,u.value,!0),Fo(p)})}m=!0})}function ga(e){return e.__attributes??={[ei]:e.nodeName.includes("-"),[ti]:e.namespaceURI===wl}}var qs=new Map;function ri(e){var t=e.getAttribute("is")||e.nodeName,r=qs.get(t);if(r)return r;qs.set(t,r=[]);for(var n,a=e,o=Element.prototype;o!==a;){n=Yi(a);for(var i in n)n[i].set&&r.push(i);a=lo(a)}return r}function Re(e,t,r=t){var n=new WeakSet;cs(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Ma(e)?Ra(o):o,r(o),Me!==null&&n.add(Me),await rc(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),hn(t)==null&&e.value&&(r(Ma(e)?Ra(e.value):e.value),Me!==null&&n.add(Me)),ds(()=>{var a=t();if(e===document.activeElement){var o=Fn??Me;if(n.has(o))return}Ma(e)&&a===Ra(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Tc(e,t,r=t){cs(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),hn(t)==null&&r(e.checked),ds(()=>{var n=t();e.checked=!!n})}function Ma(e){var t=e.type;return t==="number"||t==="range"}function Ra(e){return e===""?null:+e}let Xn=!1;function Ac(e){var t=Xn;try{return Xn=!1,[e(),Xn]}finally{Xn=t}}const kc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function se(e,t,r){return new Proxy({props:e,exclude:t},kc)}const Nc={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Pn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Pn(a)&&(a=a());const o=lr(a,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Pn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=lr(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===Nr||t===fo)return!1;for(let r of e.props)if(Pn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Pn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ie(...e){return new Proxy({props:e},Nc)}function ze(e,t,r,n){var a=!fn||(r&pl)!==0,o=(r&ml)!==0,i=(r&gl)!==0,l=n,u=!0,f=()=>(u&&(u=!1,l=i?hn(n):n),l),h;if(o){var m=Nr in e||fo in e;h=lr(e,t)?.set??(m&&t in e?w=>e[t]=w:void 0)}var p,_=!1;o?[p,_]=Ac(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),h&&(a&&il(),h(p)));var g;if(a?g=()=>{var w=e[t];return w===void 0?f():(u=!0,w)}:g=()=>{var w=e[t];return w!==void 0&&(l=void 0),w===void 0?l:w},a&&(r&_l)===0)return g;if(h){var x=e.$$legacy;return(function(w,P){return arguments.length>0?((!a||!P||x||_)&&h(P?g():w),w):g()})}var b=!1,y=((r&hl)!==0?va:is)(()=>(b=!1,g()));o&&s(y);var N=be;return(function(w,P){if(arguments.length>0){const $=P?s(y):a&&o?Ie(w):w;return E(y,$),b=!0,l!==void 0&&(l=$),w}return jr&&b||(N.f&Or)!==0?y.v:s(y)})}function ni(e){Qe===null&&vo(),fn&&Qe.l!==null?Ic(Qe).m.push(e):Br(()=>{const t=hn(e);if(typeof t=="function")return t})}function Dc(e){Qe===null&&vo(),ni(()=>()=>hn(e))}function Ic(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Cc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Cc);const Mc="modulepreload",Rc=function(e){return"/"+e},Bs={},Oc=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");a=f(r.map(h=>{if(h=Rc(h),h in Bs)return;Bs[h]=!0;const m=h.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":Mc,m||(_.as="script"),_.crossOrigin="",_.href=h,u&&_.setAttribute("nonce",u),document.head.appendChild(_),m)return new Promise((g,x)=>{_.addEventListener("load",g),_.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return a.then(l=>{for(const u of l||[])u.status==="rejected"&&o(u.reason);return t().catch(o)})};class qc extends Map{#e=new Map;#r=Y(0);#c=Y(0);#u=Kt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#l(t){return Kt===this.#u?Y(t):fr(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else return s(this.#r),!1}return s(n),!0}forEach(t,r){this.#o(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else{s(this.#r);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#r;if(a===void 0)a=this.#l(0),n.set(t,a),E(this.#c,super.size),Lt(l);else if(o!==r){Lt(a);var u=l.reactions===null?null:new Set(l.reactions),f=u===null||!a.reactions?.every(h=>u.has(h));f&&Lt(l)}return i}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),E(this.#c,super.size),E(n,-1),Lt(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;E(this.#c,0);for(var r of t.values())E(r,-1);Lt(this.#r),t.clear()}}#o(){s(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#l(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#o(),super.values()}entries(){return this.#o(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#c),super.size}}const Bc=typeof window<"u"?window:void 0;function jc(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Lc{#e;#r;constructor(t={}){const{window:r=Bc,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=xo(a=>{const o=Is(r,"focusin",a),i=Is(r,"focusout",a);return()=>{o(),i()}}))}get current(){return this.#r?.(),this.#e?jc(this.#e):null}}new Lc;function zc(e){return typeof e=="function"}function Vc(e,t){if(zc(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Uc(e,t){let r=Y(null);const n=U(()=>Vc(t,250));function a(...o){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let i,l;const u=new Promise((f,h)=>{i=f,l=h});E(r,{timeout:null,runner:null,promise:u,resolve:i,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const i=s(r);E(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),E(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Wc(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),o=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return o.length?Cn(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function kn(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function ea(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Cn(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function ta(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(u=>Ua(u.q.toString(),u.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const u=parseFloat(l.q);isNaN(u)||r.set(l.u,(r.get(l.u)||0)+u)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],o=[];r.forEach((l,u)=>{const f=n.get(u)||0,h=l-f;h>0&&(a.push({q:h,u}),o.push(Ua(h.toString(),u)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:i}}function Xr(e){return e?.length?e.map(t=>Ua(t.q.toString(),t.u)).join(" et "):"-"}function Ua(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function js(e){return kn(e)}function Gc(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Qc(e,t){return e[t]?.recipes||[]}function Hc(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([o])=>{const i=new Date(o);return i>=n&&i<=a}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function Kc(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Yc(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Jc(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function Zc(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return Gc(t)}function Xc(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class T{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}T.equal=(e,t)=>new T("equal",e,t).toString();T.notEqual=(e,t)=>new T("notEqual",e,t).toString();T.lessThan=(e,t)=>new T("lessThan",e,t).toString();T.lessThanEqual=(e,t)=>new T("lessThanEqual",e,t).toString();T.greaterThan=(e,t)=>new T("greaterThan",e,t).toString();T.greaterThanEqual=(e,t)=>new T("greaterThanEqual",e,t).toString();T.isNull=e=>new T("isNull",e).toString();T.isNotNull=e=>new T("isNotNull",e).toString();T.between=(e,t,r)=>new T("between",e,[t,r]).toString();T.startsWith=(e,t)=>new T("startsWith",e,t).toString();T.endsWith=(e,t)=>new T("endsWith",e,t).toString();T.select=e=>new T("select",void 0,e).toString();T.search=(e,t)=>new T("search",e,t).toString();T.orderDesc=e=>new T("orderDesc",e).toString();T.orderAsc=e=>new T("orderAsc",e).toString();T.orderRandom=()=>new T("orderRandom").toString();T.cursorAfter=e=>new T("cursorAfter",void 0,e).toString();T.cursorBefore=e=>new T("cursorBefore",void 0,e).toString();T.limit=e=>new T("limit",void 0,e).toString();T.offset=e=>new T("offset",void 0,e).toString();T.contains=(e,t)=>new T("contains",e,t).toString();T.notContains=(e,t)=>new T("notContains",e,t).toString();T.notSearch=(e,t)=>new T("notSearch",e,t).toString();T.notBetween=(e,t,r)=>new T("notBetween",e,[t,r]).toString();T.notStartsWith=(e,t)=>new T("notStartsWith",e,t).toString();T.notEndsWith=(e,t)=>new T("notEndsWith",e,t).toString();T.createdBefore=e=>new T("createdBefore",void 0,e).toString();T.createdAfter=e=>new T("createdAfter",void 0,e).toString();T.createdBetween=(e,t)=>new T("createdBetween",void 0,[e,t]).toString();T.updatedBefore=e=>new T("updatedBefore",void 0,e).toString();T.updatedAfter=e=>new T("updatedAfter",void 0,e).toString();T.updatedBetween=(e,t)=>new T("updatedBetween",void 0,[e,t]).toString();T.or=e=>new T("or",void 0,e.map(t=>JSON.parse(t))).toString();T.and=e=>new T("and",void 0,e.map(t=>JSON.parse(t))).toString();T.distanceEqual=(e,t,r,n=!0)=>new T("distanceEqual",e,[[t,r,n]]).toString();T.distanceNotEqual=(e,t,r,n=!0)=>new T("distanceNotEqual",e,[[t,r,n]]).toString();T.distanceGreaterThan=(e,t,r,n=!0)=>new T("distanceGreaterThan",e,[[t,r,n]]).toString();T.distanceLessThan=(e,t,r,n=!0)=>new T("distanceLessThan",e,[[t,r,n]]).toString();T.intersects=(e,t)=>new T("intersects",e,[t]).toString();T.notIntersects=(e,t)=>new T("notIntersects",e,[t]).toString();T.crosses=(e,t)=>new T("crosses",e,[t]).toString();T.notCrosses=(e,t)=>new T("notCrosses",e,[t]).toString();T.overlaps=(e,t)=>new T("overlaps",e,[t]).toString();T.notOverlaps=(e,t)=>new T("notOverlaps",e,[t]).toString();T.touches=(e,t)=>new T("touches",e,[t]).toString();T.notTouches=(e,t)=>new T("notTouches",e,[t]).toString();var ai,si;class ln{static custom(t){return t}static unique(t=7){const r=Xc(ln,ai,"m",si).call(ln);let n="";for(let a=0;a<t;a++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}ai=ln,si=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Ls;(function(e){e.Totp="totp"})(Ls||(Ls={}));var zs;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(zs||(zs={}));var Vs;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Vs||(Vs={}));var Us;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Us||(Us={}));var Ws;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Ws||(Ws={}));var Gs;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Gs||(Gs={}));var Qs;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Qs||(Qs={}));var Hs;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Hs||(Hs={}));var Ks;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Ks||(Ks={}));class Fc{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class oi{constructor(t){this.generateIdentifier=t,this.kv=new Fc}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class eu extends oi{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function tu(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function ru(e,t){const r=tu(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const o=n[a];if(t(o))return o}}function cn(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function ra(e,t){return e.indexOf(t)!==-1}function Ys(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class nu{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return ru(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const au=e=>Object.prototype.toString.call(e).slice(8,-1),ii=e=>typeof e>"u",su=e=>e===null,qn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Wa=e=>qn(e)&&Object.keys(e).length===0,vr=e=>Array.isArray(e),ou=e=>typeof e=="string",iu=e=>typeof e=="number"&&!isNaN(e),lu=e=>typeof e=="boolean",cu=e=>e instanceof RegExp,Bn=e=>e instanceof Map,jn=e=>e instanceof Set,li=e=>au(e)==="Symbol",uu=e=>e instanceof Date&&!isNaN(e.valueOf()),du=e=>e instanceof Error,Js=e=>typeof e=="number"&&isNaN(e),fu=e=>lu(e)||su(e)||ii(e)||iu(e)||ou(e)||li(e),vu=e=>typeof e=="bigint",hu=e=>e===1/0||e===-1/0,pu=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),_u=e=>e instanceof URL,ci=e=>e.replace(/\./g,"\\."),Oa=e=>e.map(String).map(ci).join("."),Mn=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let o=e.charAt(a);if(o==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(o==="."){t.push(r),r="";continue}r+=o}const n=r;return t.push(n),t};function qt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const ui=[qt(ii,"undefined",()=>null,()=>{}),qt(vu,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),qt(uu,"Date",e=>e.toISOString(),e=>new Date(e)),qt(du,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),qt(cu,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),qt(jn,"set",e=>[...e.values()],e=>new Set(e)),qt(Bn,"map",e=>[...e.entries()],e=>new Map(e)),qt(e=>Js(e)||hu(e),"number",e=>Js(e)?"NaN":e>0?"Infinity":"-Infinity",Number),qt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),qt(_u,"URL",e=>e.toString(),e=>new URL(e))];function ba(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const di=ba((e,t)=>li(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),mu=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),fi=ba(pu,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=mu[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function vi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const hi=ba(vi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),pi=ba((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),gu=[hi,di,pi,fi],Zs=(e,t)=>{const r=Ys(gu,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Ys(ui,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},_i={};ui.forEach(e=>{_i[e.annotation]=e});const bu=(e,t,r)=>{if(vr(t))switch(t[0]){case"symbol":return di.untransform(e,t,r);case"class":return hi.untransform(e,t,r);case"custom":return pi.untransform(e,t,r);case"typed-array":return fi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=_i[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Fr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function mi(e){if(ra(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(ra(e,"prototype"))throw new Error("prototype is not allowed as a property");if(ra(e,"constructor"))throw new Error("constructor is not allowed as a property")}const yu=(e,t)=>{mi(t);for(let r=0;r<t.length;r++){const n=t[r];if(jn(e))e=Fr(e,+n);else if(Bn(e)){const a=+n,o=+t[++r]==0?"key":"value",i=Fr(e,a);switch(o){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},Ga=(e,t,r)=>{if(mi(t),t.length===0)return r(e);let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];if(vr(n)){const l=+i;n=n[l]}else if(qn(n))n=n[i];else if(jn(n)){const l=+i;n=Fr(n,l)}else if(Bn(n)){if(o===t.length-2)break;const u=+i,f=+t[++o]==0?"key":"value",h=Fr(n,u);switch(f){case"key":n=h;break;case"value":n=n.get(h);break}}}const a=t[t.length-1];if(vr(n)?n[+a]=r(n[+a]):qn(n)&&(n[a]=r(n[a])),jn(n)){const o=Fr(n,+a),i=r(o);o!==i&&(n.delete(o),n.add(i))}if(Bn(n)){const o=+t[t.length-2],i=Fr(n,o);switch(+a==0?"key":"value"){case"key":{const u=r(i);n.set(u,n.get(i)),u!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function Qa(e,t,r=[]){if(!e)return;if(!vr(e)){cn(e,(o,i)=>Qa(o,t,[...r,...Mn(i)]));return}const[n,a]=e;a&&cn(a,(o,i)=>{Qa(o,t,[...r,...Mn(i)])}),t(n,r)}function wu(e,t,r){return Qa(t,(n,a)=>{e=Ga(e,a,o=>bu(o,n,r))}),e}function Su(e,t){function r(n,a){const o=yu(e,Mn(a));n.map(Mn).forEach(i=>{e=Ga(e,i,()=>o)})}if(vr(t)){const[n,a]=t;n.forEach(o=>{e=Ga(e,Mn(o),()=>e)}),a&&cn(a,r)}else cn(t,r);return e}const xu=(e,t)=>qn(e)||vr(e)||Bn(e)||jn(e)||vi(e,t);function Pu(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Eu(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,u)=>l.length-u.length));const[o,...i]=a;o.length===0?n=i.map(Oa):r[Oa(o)]=i.map(Oa)}),n?Wa(r)?[n]:[n,r]:Wa(r)?void 0:r}const gi=(e,t,r,n,a=[],o=[],i=new Map)=>{const l=fu(e);if(!l){Pu(e,a,t);const _=i.get(e);if(_)return n?{transformedValue:null}:_}if(!xu(e,r)){const _=Zs(e,r),g=_?{transformedValue:_.value,annotations:[_.type]}:{transformedValue:e};return l||i.set(e,g),g}if(ra(o,e))return{transformedValue:null};const u=Zs(e,r),f=u?.value??e,h=vr(f)?[]:{},m={};cn(f,(_,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const x=gi(_,t,r,n,[...a,g],[...o,e],i);h[g]=x.transformedValue,vr(x.annotations)?m[g]=x.annotations:qn(x.annotations)&&cn(x.annotations,(b,y)=>{m[ci(g)+"."+y]=b})});const p=Wa(m)?{transformedValue:h,annotations:u?[u.type]:void 0}:{transformedValue:h,annotations:u?[u.type,m]:m};return l||i.set(e,p),p};function bi(e){return Object.prototype.toString.call(e).slice(8,-1)}function Xs(e){return bi(e)==="Array"}function $u(e){if(bi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Tu(e,t,r,n,a){const o={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),a&&o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Ha(e,t={}){if(Xs(e))return e.map(a=>Ha(a,t));if(!$u(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,o)=>{if(Xs(t.props)&&!t.props.includes(o))return a;const i=e[o],l=Ha(i,t);return Tu(a,o,l,e,t.nonenumerable),a},{})}class qe{constructor({dedupe:t=!1}={}){this.classRegistry=new eu,this.symbolRegistry=new oi(r=>r.description??""),this.customTransformerRegistry=new nu,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=gi(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const o=Eu(r,this.dedupe);return o&&(a.meta={...a.meta,referentialEqualities:o}),a}deserialize(t){const{json:r,meta:n}=t;let a=Ha(r);return n?.values&&(a=wu(a,n.values,this)),n?.referentialEqualities&&(a=Su(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}qe.defaultInstance=new qe;qe.serialize=qe.defaultInstance.serialize.bind(qe.defaultInstance);qe.deserialize=qe.defaultInstance.deserialize.bind(qe.defaultInstance);qe.stringify=qe.defaultInstance.stringify.bind(qe.defaultInstance);qe.parse=qe.defaultInstance.parse.bind(qe.defaultInstance);qe.registerClass=qe.defaultInstance.registerClass.bind(qe.defaultInstance);qe.registerSymbol=qe.defaultInstance.registerSymbol.bind(qe.defaultInstance);qe.registerCustom=qe.defaultInstance.registerCustom.bind(qe.defaultInstance);qe.allowErrorProps=qe.defaultInstance.allowErrorProps.bind(qe.defaultInstance);function yi(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function Ct(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Au(e,t,r=100){try{const{databases:n,config:a}=await Ct(),o=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[T.greaterThan("$updatedAt",t),T.equal("mainId",e),T.limit(r),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function wi(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:o}=await Ct();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[T.equal("mainId",e),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),T.limit(n)])).documents;const i=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[T.greaterThan("$updatedAt",r),T.equal("mainId",e),T.limit(n),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const o=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function un(e,t){try{const{databases:r,config:n}=await Ct();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function Er(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=yi(n,t),{databases:o,config:i}=await Ct(),l=await o.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function Si(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await un(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function xi(e,t){return un(e,{who:t})}async function Ka(e,t){return un(e,{stockReel:t})}async function Pi(e){try{const{databases:t,config:r}=await Ct(),o=await(await window.AppwriteClient.getAccount()).get(),i={...e,createdBy:o.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,ln.unique(),i);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Ei(e,t){try{const{databases:r,config:n}=await Ct(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function $i(e){try{const{databases:t,config:r}=await Ct();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Ti(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Ct(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[T.equal("$id",e),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Ai(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const u=i.some(_=>_.includes("products.")),f=i.some(_=>_.includes("purchases.")),h=i.some(_=>_.includes(".create")),m=i.some(_=>_.includes(".update")),p=i.some(_=>_.includes(".delete"));if(u){const _=l;h&&t.onProductCreate?t.onProductCreate(_):m&&t.onProductUpdate?t.onProductUpdate(_):p&&t.onProductDelete&&t.onProductDelete(_.$id)}else if(f){const _=l;h&&t.onPurchaseCreate?t.onPurchaseCreate(_):m&&t.onPurchaseUpdate?t.onPurchaseUpdate(_):p&&t.onPurchaseDelete&&t.onPurchaseDelete(_.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function ki(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Ct(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Ni(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await Ct(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function vs(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function Di(e,t,r,n){return vs({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function Ii(e,t,r,n="replace"){return vs({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function Ci(e,t,r,n={}){try{const{databases:a,config:o}=await Ct(),u=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const h of r){const m={products:[t],mainId:e,quantity:h.q,unit:h.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:u.name,price:null,orderDate:null,deliveryDate:null,createdBy:u.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,ln.unique(),m);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${t}`),f}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const o=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const ku=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:vs,batchUpdateStore:Di,batchUpdateWho:Ii,createMainDocument:Ni,createPurchase:Pi,createQuickValidationPurchases:Ci,deletePurchase:$i,enrichedProductToAppwriteProduct:yi,loadMainEventData:ki,loadPurchasesListByIds:Ti,loadUpdatedPurchases:Au,subscribeToRealtime:Ai,syncProductsWithPurchases:wi,updateProduct:un,updateProductStock:Ka,updateProductStore:Si,updateProductWho:xi,updatePurchase:Ei,upsertProduct:Er},Symbol.toStringTag,{value:"Module"}));async function Nu(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Du(e,t){const r=Zc(e.byDate),n=Cn(ea([])),{numeric:a,display:o}=ta(r,n);return{$id:`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:Xr(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function Iu(e,t){return e.map(r=>Du(r,t))}class Cu{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";METADATA_KEY="cache-metadata";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=a=>{const o=a.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE),console.log("[IDBCache] Object store 'metadata' créé"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).get(this.METADATA_KEY);o.onsuccess=()=>{const i=o.result||{lastSync:null,allDates:[]};console.log(`[IDBCache] Metadata chargée: lastSync=${i.lastSync}, dates=${i.allDates?.length||0}`),t(i)},o.onerror=()=>r(o.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=a.objectStore(this.PRODUCTS_STORE);o.clear(),t.forEach(i=>{o.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put(t,this.METADATA_KEY);i.onsuccess=()=>{console.log("[IDBCache] Metadata sauvegardée"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Mu(e){const t=new Cu(e);return await t.open(),t}const Fs=1e3;class Ru{#e=new qc;#r=Y(null);#c=Y(!1);#u=Y(!1);#l=Y(null);#o=Y(!1);#i=Y(!1);#a=Y(Ie([]));#s=Y(null);#d=Y(null);get startDate(){return s(this.#d)}set startDate(t){E(this.#d,t,!0)}#v=Y(null);get endDate(){return s(this.#v)}set endDate(t){E(this.#v,t,!0)}#n=null;#f=null;#h=Y(!1);#t=Y(Ie({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get currentMainId(){return s(this.#r)}get isInitialized(){return s(this.#c)}get loading(){return s(this.#u)}get error(){return s(this.#l)}get allDates(){return s(this.#a)}get syncing(){return s(this.#o)}setDateRange(t,r){this.startDate=t,this.endDate=r}initializeDateRange(){if((!this.startDate||!this.endDate)&&s(this.#a).length>0){const t=[...s(this.#a)].sort();this.startDate=t[0],this.endDate=t[t.length-1]}console.log(`[ProductsStore] Date range initialized: ${this.startDate} - ${this.endDate}`)}get firstDate(){return s(this.#a).length===0?null:[...s(this.#a)].sort()[0]}get lastDate(){return s(this.#a).length===0?null:[...s(this.#a)].sort().pop()}get realtimeConnected(){return s(this.#i)}get hugoContentChanged(){return s(this.#h)}getTotalNeededInRange(t){return this.totalNeededByDateRange.get(t)??[]}getFormattedTotalNeeded(t){const r=this.getTotalNeededInRange(t);return r.length>0?Xr(r):"-"}#g=U(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#g)}set enrichedProducts(t){E(this.#g,t)}#w=U(()=>{if(console.log("[Store] Recalcul totalNeededByDateRange"),this.startDate===this.firstDate&&this.endDate===this.lastDate)return console.log("[Store] Full date range - using totalNeededArray (no calculation)"),new Map(this.enrichedProducts.map(n=>[n.$id,n.totalNeededArray]));const r=new Map;for(const n of this.enrichedProducts)if(n.byDate){const a=Yc(n.byDate),o=Wc(a,this.startDate,this.endDate);o.length>0&&r.set(n.$id,o)}return r});get totalNeededByDateRange(){return s(this.#w)}set totalNeededByDateRange(t){E(this.#w,t)}#S=U(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const a=Xr(r);t.set(n,a)}),t});get formattedTotalNeededByDateRange(){return s(this.#S)}set formattedTotalNeededByDateRange(t){E(this.#S,t)}#p=U(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#p)}set stats(t){E(this.#p,t)}#_=U(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#_)}set uniqueStores(t){E(this.#_,t)}#m=U(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#m)}set uniqueWho(t){E(this.#m,t)}#E=U(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#E)}set uniqueProductTypes(t){E(this.#E,t)}#$=U(()=>new Set(this.totalNeededByDateRange.keys()));get relevantProductIds(){return s(this.#$)}set relevantProductIds(t){E(this.#$,t)}#T=U(()=>{const t=this.enrichedProducts.filter(r=>this.#z(r)&&this.relevantProductIds.has(r.$id));return s(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>s(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get displayProducts(){return s(this.#T)}set displayProducts(t){E(this.#T,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#c)&&s(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),E(this.#r,t,!0);try{this.#n=await Mu(t)}catch(r){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",r),new Error("Impossible d'initialiser le cache IndexedDB")}E(this.#l,null);try{if(await this.#D(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await Nu(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),Iu(n.ingredients,t).forEach(i=>{this.#e.set(i.$id,i)}),E(this.#a,[...n.allDates],!0),await ki(t)||await Ni(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#A()}this.initializeDateRange(),await this.#I(),E(this.#c,!0);const r=this.#L();this.#f=Ai(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw E(this.#l,n,!0),console.error("[ProductsStore]",n,r),r}}async#D(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();E(this.#s,r.lastSync,!0),E(this.#a,[...r.allDates],!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#I(){if(s(this.#r)){E(this.#o,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#s)}`);const t=await wi(s(this.#r),{lastSync:s(this.#s),limit:Fs});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#k(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#s)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#s)}`);const{loadUpdatedPurchases:r}=await Oc(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>ku);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#r),s(this.#s),Fs);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const o=a.products.map(i=>typeof i=="string"?i:i.$id);this.#P(o,a)}})}this.#C(),await this.#A(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{E(this.#o,!1)}}}async#A(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:s(this.#s),allDates:[...s(this.#a)]}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#x(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#C(){E(this.#s,new Date().toISOString(),!0)}#k(t,r){return r?this.#b(t,r):this.#M(t)}#M(t){const r=Cn(ea(t.purchases??[])),n=[],{numeric:a,display:o}=ta(n,r),i=kn(t.stockReel)??null,l=Xr(r),u=t.store?kn(t.store):null,f=i?`${i.quantity} ${i.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:u,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:o,totalNeededOverrideParsed:js(t.totalNeededOverride)}}#b(t,r){const n=t.purchases??r.purchases,a=Cn(ea(n??[])),o=Xr(a),{numeric:i,display:l}=ta(r.totalNeededArray,a),u=t.stockReel??r.stockReel,f=u?kn(u):r.stockParsed,h=t.store??r.store,m=h?kn(h):r.storeInfo,p=f?`${f.quantity} ${f.unit}`:o;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:h,stockReel:u,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:m,stockParsed:f,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:p,displayTotalPurchases:o,displayMissingQuantity:l,totalNeededOverrideParsed:js(t.totalNeededOverride??r.totalNeededOverride)}}#V(t){t.totalPurchasesArray=Cn(ea(t.purchases??[]));const{numeric:r,display:n}=ta(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=Xr(t.totalPurchasesArray)}#U(t){t.length&&(t.forEach(r=>this.#y(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#y(t){const r=this.#e.get(t.$id),n=this.#k(t,r);this.#e.set(t.$id,n)}#R(t){this.#e.delete(t)}async#O(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#j(r,t),r}async#q(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Ti([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#P(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#B(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t));return r.forEach(n=>{this.#y(n)}),r.map(n=>n.$id)}#N(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#j(t,r){const n=this.#N(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(u=>u.$id===n.$id)){const u=this.#b({...i,purchases:[...l,n],status:"active"},i);a.push(u)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#P(t,r){const n=this.#N(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],u=l.findIndex(f=>f.$id===n.$id);if(u>=0){const f=[...l];f[u]=n;const h=this.#b({...i,purchases:f,status:"active"},i);a.push(h)}else{const f=this.#b({...i,purchases:[...l,r],status:"active"},i);a.push(f)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#L(){return{onProductCreate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#R(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#O(t);await this.#x(r)},onPurchaseUpdate:async t=>{const r=await this.#q(t);await this.#x(r)},onPurchaseDelete:async t=>{const r=await this.#B(t);await this.#x(r)},onConnect:()=>{E(this.#i,!0)},onDisconnect:()=>{E(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#z(t){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#t).selectedStores.includes(t.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!t.productType||!s(this.#t).selectedProductTypes.includes(t.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Uc(t=>{s(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#t).selectedProductTypes.indexOf(t);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#t).selectedTemperatures.indexOf(t);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(t){s(this.#t).groupBy=t}toggleStore(t){const r=s(this.#t).selectedStores.indexOf(t);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(t)}toggleWho(t){const r=s(this.#t).selectedWho.indexOf(t);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(t)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(t){s(this.#t).sortColumn===t?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=t,s(this.#t).sortDirection="asc")}clearFilters(){E(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#t).sortColumn],o=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,o=parseFloat(o)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,o=n.purchases?.length||0),a<o?s(this.#t).sortDirection==="asc"?-1:1:a>o?s(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDate?Qc(n.byDate,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDate&&n.byDate[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Kc(r.byDate):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDate?Object.keys(r.byDate).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?0:Hc(r.byDate,this.startDate,this.endDate)}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?[]:Object.keys(r.byDate).filter(a=>{const o=new Date(a),i=this.startDate?new Date(this.startDate):null,l=this.endDate?new Date(this.endDate):null;return i&&l&&o>=i&&o<=l}).flatMap(a=>r.byDate[a]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){await this.clearCache(),await this.initialize(t)}async clearCache(){this.#e.clear(),E(this.#a,[],!0),E(this.#s,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(a=>{const o=this.#e.get(a);if(o){const i={...o,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#f?.(),this.#f=null,this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const B=new Ru;function Ou(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}/**
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
 */const qu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Bu=fc("<svg><!><!></svg>");function le(e,t){W(t,!0);const r=ze(t,"color",3,"currentColor"),n=ze(t,"size",3,24),a=ze(t,"strokeWidth",3,2),o=ze(t,"absoluteStrokeWidth",3,!1),i=ze(t,"iconNode",19,()=>[]),l=se(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=Bu();Os(u,m=>({...qu,...l,width:n(),height:n(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(a())*24/Number(n()):a()]);var f=c(u);Je(f,17,i,Va,(m,p)=>{var _=U(()=>uo(s(p),2));let g=()=>s(_)[0],x=()=>s(_)[1];var b=H(),y=z(b);bc(y,g,!0,(N,w)=>{Os(N,()=>({...x()}))}),v(m,b)});var h=d(f);ne(h,()=>t.children??te),v(e,u),G()}function Ya(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];le(e,ie({name:"archive"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function ju(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];le(e,ie({name:"bean"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Lu(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];le(e,ie({name:"beef"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function zu(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];le(e,ie({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Vu(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];le(e,ie({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Ln(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];le(e,ie({name:"check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Uu(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];le(e,ie({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Wu(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];le(e,ie({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function eo(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];le(e,ie({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Gu(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];le(e,ie({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Qu(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];le(e,ie({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Hu(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];le(e,ie({name:"clock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Ku(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];le(e,ie({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function hs(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];le(e,ie({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Yu(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];le(e,ie({name:"egg"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Ju(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];le(e,ie({name:"euro"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Ja(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];le(e,ie({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Zu(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];le(e,ie({name:"info"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function to(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];le(e,ie({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Xu(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];le(e,ie({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Fu(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];le(e,ie({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function ed(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];le(e,ie({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function td(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];le(e,ie({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function rd(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];le(e,ie({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function ps(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];le(e,ie({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function nd(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];le(e,ie({name:"moon"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Vn(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];le(e,ie({name:"package"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function ad(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];le(e,ie({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function sd(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];le(e,ie({name:"plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function od(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];le(e,ie({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function id(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];le(e,ie({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function ld(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];le(e,ie({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function cd(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];le(e,ie({name:"save"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function ud(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];le(e,ie({name:"search"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Za(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];le(e,ie({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function ur(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];le(e,ie({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Xa(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];le(e,ie({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function ia(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];le(e,ie({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function dr(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];le(e,ie({name:"store"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function dd(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];le(e,ie({name:"sun"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function _s(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];le(e,ie({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Mi(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];le(e,ie({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function ya(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];le(e,ie({name:"user"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function Fa(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];le(e,ie({name:"users"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function fd(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];le(e,ie({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function ct(e,t){W(t,!0);/**
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
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];le(e,ie({name:"x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=z(i);ne(l,()=>t.children??te),v(a,i)},$$slots:{default:!0}})),G()}function na(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:ju};case"animaux":return{displayName:"Viandes et Poissons",icon:Lu};case"legumes":return{displayName:"Fruits et Légumes",icon:Vu};case"sucres":return{displayName:"Sucrées",icon:zu};case"lof":return{displayName:"L.O.F",icon:Yu};case"autres":return{displayName:"Autres",icon:Uu};case"epices":return{displayName:"Assaisonnements",icon:Xu};case"frais":return{displayName:"Produits Frais",icon:ld};default:return{displayName:e,icon:Vn}}}function ro(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function wa(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Sa(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function vd(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function hd(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],o=n[t.sortColumn];return a<o?t.sortDirection==="asc"?-1:1:a>o?t.sortDirection==="asc"?1:-1:0}):e}function es(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function no(e){return e?Sa(e):"-"}function pd(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",o=n.unit||"unit",i=`${a}_${o}`;if(!r[i]){const l=es(a);r[i]={status:a,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:_d(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function _d(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ShoppingCart";case"pending":return"Clock";case"delivered":return"CircleCheck";case"cancelled":return"CircleX";default:return"Package"}}let ao=()=>localStorage.getItem("appwrite-user-name")||"";function md(e){let t=Y(!1),r=Y(null);const n=U(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),B.getEnrichedProductById(e))),a=U(()=>s(n)?.who??[]),o=U(()=>s(n)?.stockParsed??null),i=U(()=>s(n)?.purchases??[]),l=U(()=>s(n)?.byDate?Jc(s(n).byDate):[]),u=Ie({purchase:{quantity:null,unit:"",store:"",who:ao()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});let f=Y(!1);Br(()=>{!s(n)||s(f)||(u.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,u.purchase.unit=s(n).totalNeededArray[0]?.u??"",u.purchase.store=s(n).storeInfo?.storeName??"",u.purchase.who=ao()??"",u.purchase.status=u.purchase.status||"delivered",u.stock.unit=s(n).totalNeededArray[0]?.u??"",u.store.name=s(n).storeInfo?.storeName??"",u.store.comment=s(n).storeInfo?.storeComment??null,E(f,!0))});let h=Y(null);const m=U(()=>s(h)?s(i).find(C=>C.$id===s(h))??null:null);async function p(C,I){E(t,!0),E(r,null);try{const O=await C();return I&&_("success",I),O}catch(O){const q=O instanceof Error?O.message:"Une erreur est survenue";return E(r,q,!0),_("error",q),console.error("[ProductModalState]",O),null}finally{E(t,!1)}}function _(C,I){const O=new CustomEvent("toast",{detail:{type:C,message:I}});window.dispatchEvent(O)}async function g(){s(n)&&await p(async()=>{if(!u.purchase.quantity||!u.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!B.currentMainId)throw new Error("mainId non disponible");const{quantity:C,unit:I}=ro(u.purchase.quantity,u.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await Er(s(n).$id,{},O=>B.getEnrichedProductById(O))),await Pi({products:[s(n).$id],mainId:B.currentMainId,unit:I,quantity:C,store:u.purchase.store||null,who:u.purchase.who||null,notes:u.purchase.notes||"",price:u.purchase.price||null,status:u.purchase.status||"delivered",orderDate:u.purchase.orderDate||null,deliveryDate:u.purchase.deliveryDate||null}),u.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:u.purchase.store,who:u.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function x(C){E(h,C.$id,!0)}function b(){E(h,null)}async function y(C){C.$id&&await p(async()=>{const{quantity:I,unit:O}=ro(C.quantity,C.unit);await Ei(C.$id,{unit:O,quantity:I,store:C.store||null,who:C.who||null,notes:C.notes||"",price:C.price||null,status:C.status||null,orderDate:C.orderDate||null,deliveryDate:C.deliveryDate||null}),E(h,null)},"Achat modifié avec succès")}async function N(C){const I=s(i).find(O=>O.$id===C);I&&confirm(`Supprimer cet achat (${I.quantity} ${I.unit}) ?`)&&await p(async()=>{await $i(C)},"Achat supprimé avec succès")}async function w(){s(n)&&await p(async()=>{if(!u.stock.quantity||!u.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const C={quantity:u.stock.quantity.toString(),unit:u.stock.unit,notes:u.stock.notes,dateTime:u.stock.dateTime};s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await Ka(s(n).$id,JSON.stringify(C))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await Er(s(n).$id,{stockReel:JSON.stringify(C)},I=>B.getEnrichedProductById(I))),u.stock.quantity=null,u.stock.notes="",u.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function P(){s(n)&&confirm("Supprimer le stock actuel ?")&&await p(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, suppression stock normal...`),await Ka(s(n).$id,null)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, suppression stock avec upsert...`),await Er(s(n).$id,{stockReel:null},C=>B.getEnrichedProductById(C)))},"Stock supprimé")}async function $(C){s(n)&&await p(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, setWho normal...`),await xi(s(n).$id,C)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await Er(s(n).$id,{who:C},I=>B.getEnrichedProductById(I)))},"Volontaires mis à jour")}async function k(C){s(n)&&await p(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await Si(s(n).$id,C)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await Er(s(n).$id,{store:JSON.stringify(C)},I=>B.getEnrichedProductById(I)))},"Magasin mis à jour")}async function M(C){s(n)&&await p(async()=>{await un(s(n).$id,{totalNeededOverride:JSON.stringify(C)})},"Override appliqué")}async function D(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await p(async()=>{await un(s(n).$id,{totalNeededOverride:null})},"Override supprimé")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockParsed(){return s(o)},get purchasesList(){return s(i)},get editingPurchaseId(){return s(h)},get editingPurchaseData(){return s(m)},forms:u,addPurchase:g,startEditPurchase:x,cancelEditPurchase:b,updateEditedPurchase:y,removePurchase:N,setStock:w,removeStock:P,setWho:$,updateStore:k,setOverride:M,removeOverride:D,formatQuantity:wa,formatDate:Sa,formatDisplayQuantity:vd}}function gd(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function bd(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function yd(e,t){t().cancelEditPurchase()}var wd=S('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Sd=S('<span class="loading loading-spinner loading-sm"></span>'),xd=S('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Pd=S('<span class="loading loading-spinner loading-sm"></span>'),Ed=S('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),$d=(e,t,r)=>t(s(r)),Td=(e,t,r)=>t(s(r).$id),Ad=S('<span class="loading loading-spinner loading-sm"></span>'),kd=S('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Nd=S('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Dd=S(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Id(e,t){W(t,!0);let r=ze(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(F){return F.quantity!==null&&F.quantity!==0&&F.unit?.trim()!==""}function o(F){r().removePurchase(F)}function i(F){r().startEditPurchase(F)}var l=Dd(),u=c(l),f=c(u);ur(f,{class:"h-5 w-5"});var h=d(u,2),m=c(h),p=d(c(m),2),_=c(p),g=c(_);Vn(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2),b=d(_,2),y=c(b);y.value=y.__value="";var N=d(y);N.value=N.__value="kg";var w=d(N);w.value=w.__value="gr.";var P=d(w);P.value=P.__value="l.";var $=d(P);$.value=$.__value="ml";var k=d($);k.value=k.__value="unité";var M=d(k);M.value=M.__value="bottes";var D=d(b,2),C=c(D);dr(C,{class:"h-4 w-4 opacity-50"});var I=d(C,2),O=d(D,2),q=c(O);ya(q,{class:"h-4 w-4 opacity-50"});var X=d(q,2),Ae=d(O,2),fe=d(c(Ae),2),Se=d(p,2),ce=c(Se),R=c(ce);ps(R,{class:"h-4 w-4 opacity-50"});var re=d(R,2),xe=d(Se,2),ke=c(xe),Q=c(ke),ve=c(Q),Ce=c(ve);Ce.value=Ce.__value="delivered";var oe=d(Ce);oe.value=oe.__value="ordered";var he=d(oe);he.value=he.__value="requested";var ee=d(Q,2),Pe=d(ke,2);{var Ne=F=>{var We=wd(),nt=d(c(We),2);Re(nt,()=>r().forms.purchase.deliveryDate,mt=>r().forms.purchase.deliveryDate=mt),v(F,We)};A(Pe,F=>{r().forms.purchase.status==="ordered"&&F(Ne)})}var De=d(xe,2),Ee=c(De);Ee.__click=[gd,n,r];var K=c(Ee);{var Z=F=>{var We=Sd();v(F,We)},_e=F=>{var We=et("Ajouter l'achat");v(F,We)};A(K,F=>{r().loading?F(Z):F(_e,!1)})}var Oe=d(h,2);{var it=F=>{var We=xd(),nt=c(We);ur(nt,{class:"mx-auto mb-2 h-12 w-12"}),v(F,We)},Ze=F=>{var We=Nd(),nt=c(We),mt=d(c(nt));Je(mt,21,()=>r().purchasesList,dt=>dt.$id,(dt,pe,Ft)=>{var Mt=H(),er=z(Mt);{var gt=J=>{var ge=Ed(),$e=c(ge),Be=c($e),je=c(Be),ft=d(je,2),xt=c(ft);xt.value=xt.__value="kg";var vt=d(xt);vt.value=vt.__value="gr.";var Rt=d(vt);Rt.value=Rt.__value="l.";var at=d(Rt);at.value=at.__value="ml";var ht=d(at);ht.value=ht.__value="unité";var pr=d(ht);pr.value=pr.__value="bottes";var _r=d($e),Lr=c(_r),zr=d(_r),Vt=c(zr),Vr=d(zr),mr=c(Vr),gr=c(mr);gr.value=gr.__value="requested";var rr=d(gr);rr.value=rr.__value="ordered";var br=d(rr);br.value=br.__value="delivered";var nr=d(br);nr.value=nr.__value="cancelled";var Ur=d(Vr),yr=c(Ur),Wr=d(Ur),pn=c(Wr),Gr=d(Wr),Pt=c(Gr),Ut=d(Gr),_n=c(Ut),Qr=d(Ut),mn=c(Qr),wr=c(mn);wr.__click=[bd,r,a];var xa=c(wr);{var Pa=me=>{var Ge=Pd();v(me,Ge)},V=me=>{cd(me,{class:"h-3 w-3"})};A(xa,me=>{r().loading?me(Pa):me(V,!1)})}var ue=d(wr,2);ue.__click=[yd,r];var He=c(ue);ct(He,{class:"h-3 w-3"}),L(me=>wr.disabled=me,[()=>r().loading||!a(s(pe))]),Re(je,()=>s(pe).quantity,me=>s(pe).quantity=me),Ar(ft,()=>s(pe).unit,me=>s(pe).unit=me),Re(Lr,()=>s(pe).store,me=>s(pe).store=me),Re(Vt,()=>s(pe).who,me=>s(pe).who=me),Ar(mr,()=>s(pe).status,me=>s(pe).status=me),Re(yr,()=>s(pe).orderDate,me=>s(pe).orderDate=me),Re(pn,()=>s(pe).deliveryDate,me=>s(pe).deliveryDate=me),Re(Pt,()=>s(pe).price,me=>s(pe).price=me),Re(_n,()=>s(pe).notes,me=>s(pe).notes=me),v(J,ge)},tr=J=>{var ge=kd(),$e=c(ge),Be=c($e),je=d($e),ft=c(je),xt=d(je),vt=c(xt),Rt=d(xt),at=c(Rt),ht=c(at),pr=d(Rt),_r=c(pr),Lr=d(pr),zr=c(Lr),Vt=d(Lr),Vr=c(Vt),mr=d(Vt),gr=c(mr),rr=d(mr),br=c(rr),nr=c(br);nr.__click=[$d,i,pe];var Ur=c(nr);ia(Ur,{class:"h-4 w-4"});var yr=d(nr,2);yr.__click=[Td,o,pe];var Wr=c(yr);{var pn=Pt=>{var Ut=Ad();v(Pt,Ut)},Gr=Pt=>{ct(Pt,{class:"h-4 w-4"})};A(Wr,Pt=>{r().loading?Pt(pn):Pt(Gr,!1)})}L((Pt,Ut,_n,Qr,mn)=>{j(Be,Pt),j(ft,s(pe).store||"-"),j(vt,s(pe).who||"-"),Te(at,1,`badge badge-sm ${Ut??""}`),j(ht,_n),j(_r,Qr),j(zr,mn),j(Vr,s(pe).price?`${s(pe).price}€`:"-"),j(gr,s(pe).notes||"-"),yr.disabled=r().loading},[()=>wa(s(pe).quantity,s(pe).unit),()=>es(s(pe).status).class,()=>es(s(pe).status).text,()=>no(s(pe).orderDate),()=>no(s(pe).deliveryDate)]),v(J,ge)};A(er,J=>{r().editingPurchaseId===s(pe).$id?J(gt):J(tr,!1)})}v(dt,Mt)}),v(F,We)};A(Oe,F=>{r().purchasesList.length===0?F(it):F(Ze,!1)})}L(F=>{Te(ee,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),Ee.disabled=F},[()=>r().loading||!n()]),Re(x,()=>r().forms.purchase.quantity,F=>r().forms.purchase.quantity=F),Ar(b,()=>r().forms.purchase.unit,F=>r().forms.purchase.unit=F),Re(I,()=>r().forms.purchase.store,F=>r().forms.purchase.store=F),Re(X,()=>r().forms.purchase.who,F=>r().forms.purchase.who=F),Re(fe,()=>r().forms.purchase.price,F=>r().forms.purchase.price=F),Re(re,()=>r().forms.purchase.notes,F=>r().forms.purchase.notes=F),Ar(ve,()=>r().forms.purchase.status,F=>r().forms.purchase.status=F),v(e,l),G()}ot(["click"]);async function Cd(e,t){await t()?.setStock()}async function Md(e,t){await t()?.removeStock()}var Rd=S('<span class="loading loading-spinner loading-sm"></span>'),Od=S('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),qd=S('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),Bd=S('<span class="loading loading-spinner loading-xs"></span>'),jd=S('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),Ld=S(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function zd(e,t){W(t,!0);let r=ze(t,"modalState",7),n=U(()=>r()&&r().forms&&r().forms.stock.quantity&&r().forms.stock.quantity>0&&r().forms.stock.unit);var a=Ld(),o=c(a),i=c(o);Ya(i,{class:"h-5 w-5"});var l=d(o,2),u=c(l),f=c(u),h=c(f),m=d(f,2),p=c(m),_=c(p);Vn(_,{class:"h-4 w-4 opacity-50"});var g=d(_,2),x=d(p,2),b=c(x);b.value=b.__value="";var y=d(b);y.value=y.__value="kg";var N=d(y);N.value=N.__value="gr.";var w=d(N);w.value=w.__value="l.";var P=d(w);P.value=P.__value="ml";var $=d(P);$.value=$.__value="unité";var k=d($);k.value=k.__value="bottes";var M=d(m,2),D=c(M),C=d(M,2),I=c(C);I.__click=[Cd,r];var O=c(I);{var q=ce=>{var R=Rd();v(ce,R)},X=ce=>{var R=et();L(()=>j(R,r().stockParsed?"Mettre à jour":"Ajouter au stock")),v(ce,R)};A(O,ce=>{r().loading?ce(q):ce(X,!1)})}var Ae=d(l,2);{var fe=ce=>{var R=Od(),re=c(R);Ya(re,{class:"mx-auto mb-2 h-12 w-12"}),v(ce,R)},Se=ce=>{var R=jd(),re=c(R),xe=d(c(re),2),ke=c(xe),Q=d(c(ke),2),ve=c(Q),Ce=d(ke,2),oe=d(c(Ce),2),he=c(oe),ee=d(Ce,2);{var Pe=_e=>{var Oe=qd(),it=d(c(Oe),2),Ze=c(it);L(()=>j(Ze,r().stockParsed.notes)),v(_e,Oe)};A(ee,_e=>{r().stockParsed.notes&&_e(Pe)})}var Ne=d(xe,2),De=c(Ne);De.__click=[Md,r];var Ee=c(De);{var K=_e=>{var Oe=Bd();v(_e,Oe)},Z=_e=>{var Oe=et("Supprimer le stock");v(_e,Oe)};A(Ee,_e=>{r().loading?_e(K):_e(Z,!1)})}L(_e=>{j(ve,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),j(he,_e),De.disabled=r().loading},[()=>Sa(r().stockParsed.dateTime)]),v(ce,R)};A(Ae,ce=>{r().stockParsed?ce(Se,!1):ce(fe)})}L(()=>{j(h,r().stockParsed?"Modifier le stock":"Ajouter un stock"),I.disabled=r().loading||!s(n)}),Re(g,()=>r().forms.stock.quantity,ce=>r().forms.stock.quantity=ce),Ar(x,()=>r().forms.stock.unit,ce=>r().forms.stock.unit=ce),Re(D,()=>r().forms.stock.notes,ce=>r().forms.stock.notes=ce),v(e,a),G()}ot(["click"]);var Vd=(e,t,r)=>t(s(r).id),Ud=S('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),Wd=S('<span class="flex items-center gap-1"><!> </span>'),Gd=S('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Qd=S('<div class="flex flex-wrap gap-2"></div> <!>',1);function ms(e,t){W(t,!0);let r=ze(t,"badgeSize",3,"badge-lg"),n=ze(t,"color",3,"primary"),a=ze(t,"badgeStyle",3,""),o=ze(t,"onToggleItem",3,()=>{}),i=ze(t,"showStats",3,!1),l=ze(t,"showIcon",3,!0),u=Y(Ie({}));Br(()=>{const b={};t.items.forEach(y=>{s(u)[y.id]!==void 0?b[y.id]=s(u)[y.id]:b[y.id]=y.selected??!0}),JSON.stringify(Object.keys(b).sort())!==JSON.stringify(Object.keys(s(u)).sort())&&E(u,b,!0)});function f(b){s(u)[b]=!s(u)[b],o()(b)}const h=U(()=>Object.values(s(u)).filter(Boolean).length),m=U(()=>Object.values(s(u)).filter(b=>!b).length);var p=Qd(),_=z(p);Je(_,21,()=>t.items,b=>b.id,(b,y)=>{const N=U(()=>s(u)[s(y).id]);var w=Ud();w.__click=[Vd,f,y];var P=c(w);{var $=I=>{var O=H(),q=z(O);Tr(q,()=>s(y).icon,(X,Ae)=>{Ae(X,{class:"h-3 w-3",get title(){return s(y).title}})}),v(I,O)};A(P,I=>{s(y).icon&&I($)})}var k=d(P,2),M=c(k),D=d(k,2);{var C=I=>{var O=H(),q=z(O);{var X=fe=>{Ln(fe,{size:16})},Ae=fe=>{sd(fe,{size:16})};A(q,fe=>{s(N)?fe(X):fe(Ae,!1)})}v(I,O)};A(D,I=>{l()&&I(C)})}L(()=>{Te(w,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(N)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),Cr(w,"title",s(N)?"Retirer de la liste":"Réajouter à la liste"),j(M,s(y).label)}),v(b,w)});var g=d(_,2);{var x=b=>{var y=Gd(),N=c(y),w=c(N),P=c(w);Ln(P,{class:"text-success h-3 w-3"});var $=d(P),k=d(w,2);{var M=I=>{var O=Wd(),q=c(O);ct(q,{class:"text-error h-3 w-3"});var X=d(q);L(()=>j(X,` ${s(m)??""} retirés`)),v(I,O)};A(k,I=>{s(m)>0&&I(M)})}var D=d(N,2),C=c(D);L(()=>{j($,` ${s(h)??""} actifs`),j(C,`Total: ${t.items.length??""} items`)}),v(b,y)};A(g,b=>{i()&&b(x)})}v(e,p),G()}ot(["click"]);async function Hd(e,t,r,n){!s(t)||!r.modalState||await r.modalState.setWho(s(n))}function Kd(e,t,r,n){E(t,[...r.modalState.whoList],!0),E(n,"")}var Yd=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},Jd=S('<span class="loading loading-spinner loading-sm"></span>'),Zd=S('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function Xd(e,t){W(t,!0);let r=Y(Ie([...t.modalState.whoList])),n=Y("");const a=U(()=>{const q=new Set([...B.uniqueWho,...s(r)]);return Array.from(q).map(X=>({id:X,label:X,selected:s(r).includes(X)}))}),o=U(()=>JSON.stringify([...s(r)].sort())!==JSON.stringify([...t.modalState.whoList].sort()));function i(q){const X=q.trim();X&&!s(r).includes(X)&&E(r,[...s(r),X],!0)}function l(q){E(r,s(r).filter(X=>X!==q),!0)}function u(q){s(r).includes(q)?l(q):i(q)}function f(){s(n).trim()&&(i(s(n)),E(n,""))}var h=Zd(),m=c(h),p=c(m),_=d(c(p),4),g=c(_),x=c(g),b=c(x);ya(b,{class:"h-4 w-4 opacity-50"});var y=d(b,2);y.__keydown=[Yd,f];var N=d(x,2);N.__click=f;var w=c(N);Mi(w,{size:16});var P=d(g,2),$=d(c(P),2);ms($,{get items(){return s(a)},onToggleItem:u,showIcon:!0});var k=d(_,2),M=c(k);M.__click=[Kd,r,t,n];var D=d(M,2);D.__click=[Hd,o,t,r];var C=c(D);{var I=q=>{var X=Jd();v(q,X)},O=q=>{var X=et("Valider");v(q,X)};A(C,q=>{t.modalState.loading?q(I):q(O,!1)})}L(q=>{y.disabled=t.modalState.loading,N.disabled=q,M.disabled=t.modalState.loading,D.disabled=t.modalState.loading||!s(o)},[()=>t.modalState.loading||!s(n).trim()]),Re(y,()=>s(n),q=>E(n,q)),v(e,h),G()}ot(["keydown","click"]);var Fd=S('<div class="mb-1 text-xs opacity-70"> </div>'),ef=(e,t,r)=>t(s(r)),tf=S("<button><!> </button>"),rf=S('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function ts(e,t){W(t,!0);let r=ze(t,"maxSuggestions",3,8),n=ze(t,"title",3,"Suggestions :"),a=ze(t,"buttonSize",3,"btn-xs"),o=ze(t,"buttonVariant",3,"btn-soft"),i=ze(t,"disabled",3,!1);const l=U(()=>t.suggestions.slice(0,r()));function u(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var f=H(),h=z(f);{var m=p=>{var _=rf(),g=c(_);{var x=y=>{var N=Fd(),w=c(N);L(()=>j(w,n())),v(y,N)};A(g,y=>{n()&&y(x)})}var b=d(g,2);Je(b,21,()=>s(l),y=>y.id,(y,N)=>{var w=tf();w.__click=[ef,u,N];var P=c(w);{var $=M=>{var D=H(),C=z(D);Tr(C,()=>s(N).icon,(I,O)=>{O(I,{class:"h-3 w-3"})}),v(M,D)};A(P,M=>{s(N).icon&&M($)})}var k=d(P);L(()=>{Te(w,1,`btn ${a()??""} ${o()??""}`),w.disabled=i()||s(N).disabled,Cr(w,"title",s(N).disabled?"Déjà sélectionné":s(N).label),j(k,` ${s(N).label??""}`)}),v(y,w)}),v(p,_)};A(h,p=>{s(l).length>0&&p(m)})}v(e,f),G()}ot(["click"]);var nf=(e,t)=>{e.key==="Enter"&&t()},af=S('<span class="loading loading-spinner loading-sm"></span>'),sf=(e,t,r)=>{E(t,""),E(r,"")},of=S(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function lf(e,t){W(t,!0);const r=U(()=>t.modalState?.forms?.store||{name:null,comment:null});let n=Y(Ie(s(r).name||"")),a=Y(Ie(s(r).comment||""));Br(()=>{E(n,s(r).name||"",!0),E(a,s(r).comment||"",!0)});const o=U(()=>s(n).trim()!==(s(r).name||"")||s(a).trim()!==(s(r).comment||""));async function i(){if(!s(o))return;const D={storeName:s(n).trim(),storeComment:s(a).trim()};await t.modalState.updateStore(D)}var l=of(),u=c(l),f=c(u),h=d(c(f),4),m=c(h),p=c(m),_=c(p);dr(_,{class:"h-4 w-4 opacity-50"});var g=d(_,2);g.__keydown=[nf,i];var x=d(p,2);{var b=D=>{{let C=U(()=>B.uniqueStores.map(I=>({id:I,label:I,disabled:I===s(n)})));ts(D,{get suggestions(){return s(C)},onSuggestionClick:I=>{E(n,I.label,!0)},buttonVariant:"btn-outline"})}};A(x,D=>{B.uniqueStores.length>0&&D(b)})}var y=d(m,2),N=d(h,2),w=c(N);w.__click=i;var P=c(w);{var $=D=>{var C=af();v(D,C)},k=D=>{var C=et("Mettre à jour");v(D,C)};A(P,D=>{t.modalState.loading?D($):D(k,!1)})}var M=d(w,2);M.__click=[sf,n,a],L(()=>{w.disabled=t.modalState.loading||!s(o),M.disabled=t.modalState.loading}),Re(g,()=>s(n),D=>E(n,D)),Re(y,()=>s(a),D=>E(a,D)),v(e,l),G()}ot(["keydown","click"]);async function cf(e,t,r,n,a,o){if(!t.modalState)return;const i={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await t.modalState.setOverride(i),E(o,!1)}async function uf(e,t,r){t.modalState&&(await t.modalState.removeOverride(),E(r,!1))}var df=S('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),ff=S('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),vf=S(" <!>",1),hf=(e,t)=>E(t,!0),pf=S('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),_f=S('<div class="text-error text-sm">Limite de caractères atteinte</div>'),mf=S('<span class="loading loading-spinner loading-sm"></span>'),gf=S('<span class="loading loading-spinner loading-sm"></span>'),bf=S(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div class="form-control"><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),yf=S('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function wf(e,t){W(t,!0);const r=U(()=>t.modalState.product?.totalNeededOverride),n=U(()=>t.modalState.product?.displayTotalNeeded||[]);let a=Y(!1),o=Y(Ie(t.modalState.product?.totalNeededOverride?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=Y(Ie(t.modalState.product?.totalNeededOverride?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=Y(Ie(t.modalState.product?.totalNeededOverride?.comment||"")),u=U(()=>s(o)>0&&s(i).trim()!=="");var f=yf(),h=c(f),m=c(h),p=c(m);{var _=x=>{var b=pf(),y=z(b),N=c(y),w=d(c(N),2);{var P=I=>{var O=df();v(I,O)};A(w,I=>{s(r)&&I(P)})}var $=d(w,2),k=c($);{var M=I=>{var O=vf(),q=z(O),X=d(q);{var Ae=fe=>{var Se=ff(),ce=c(Se);ps(ce,{});var R=d(ce);L(()=>j(R,` ${s(r).comment??""}`)),v(fe,Se)};A(X,fe=>{s(r).comment&&fe(Ae)})}L(fe=>j(q,`${fe??""} `),[()=>wa(s(r).totalOverride.q,s(r).totalOverride.u)]),v(I,O)},D=I=>{var O=et();L(()=>j(O,s(n))),v(I,O)};A(k,I=>{s(r)?I(M):I(D,!1)})}var C=d(y,2);C.__click=[hf,a],v(x,b)},g=x=>{var b=bf(),y=z(b),N=c(y),w=c(N);ad(w,{class:"h-4 w-4 opacity-50"});var P=d(w,2),$=d(N,2),k=c($);k.value=k.__value="";var M=d(k);M.value=M.__value="kg";var D=d(M);D.value=D.__value="gr.";var C=d(D);C.value=C.__value="l.";var I=d(C);I.value=I.__value="ml";var O=d(I);O.value=O.__value="unité";var q=d(O);q.value=q.__value="bottes";var X=d(y,2),Ae=c(X),fe=d(c(Ae),2),Se=d(fe,2);{var ce=ee=>{var Pe=_f();v(ee,Pe)};A(Se,ee=>{s(l).length>=250&&ee(ce)})}var R=d(X,2),re=c(R);re.__click=[uf,t,a];var xe=c(re);{var ke=ee=>{var Pe=mf();v(ee,Pe)},Q=ee=>{var Pe=et();L(()=>j(Pe,`Réinitialiser le total calculé (${s(n)??""}).`)),v(ee,Pe)};A(xe,ee=>{t.modalState.loading?ee(ke):ee(Q,!1)})}var ve=d(re,2);ve.__click=[cf,t,o,i,l,a];var Ce=c(ve);{var oe=ee=>{var Pe=gf();v(ee,Pe)},he=ee=>{var Pe=et("Appliquer");v(ee,Pe)};A(Ce,ee=>{t.modalState.loading?ee(oe):ee(he,!1)})}L(()=>{re.disabled=t.modalState.loading,ve.disabled=t.modalState.loading||!s(u)}),Re(P,()=>s(o),ee=>E(o,ee)),Ar($,()=>s(i),ee=>E(i,ee)),Re(fe,()=>s(l),ee=>E(l,ee)),v(x,b)};A(p,x=>{s(a)?x(g,!1):x(_)})}L(()=>Te(h,1,`card border-base-300 border ${s(a)?"bg-base-200":"bg-base-100"}`)),v(e,f),G()}ot(["click"]);var Sf=S('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),xf=S('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Pf=S('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Ef=S('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function $f(e,t){W(t,!0);const r=U(()=>t.modalState.recipes);var n=Ef(),a=z(n);wf(a,{get modalState(){return t.modalState}});var o=d(a,2),i=c(o),l=c(i);hs(l,{class:"h-5 w-5"});var u=d(i,2);{var f=m=>{var p=Sf(),_=c(p);Vn(_,{class:"mx-auto mb-2 h-12 w-12"}),v(m,p)},h=m=>{var p=Pf(),_=c(p),g=d(c(_));Je(g,21,()=>s(r),x=>x.r,(x,b)=>{var y=xf(),N=c(y),w=c(N),P=d(N),$=c(P),k=d(P),M=c(k);L(D=>{j(w,`${s(b).r??""} (${(s(b).a||"-")??""} c.)`),j($,`${(s(b).q||s(b).qEq)??""} ${(s(b).u||s(b).uEq)??""}`),j(M,D)},[()=>Sa(s(b).date)]),v(x,y)}),v(m,p)};A(u,m=>{s(r).length===0?m(f):m(h,!1)})}v(e,n),G()}var Tf=S('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Af=S('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),kf=(e,t)=>t("recettes"),Nf=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Df=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),If=(e,t)=>t("achats"),Cf=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Mf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Rf=(e,t)=>t("stock"),Of=S('<span class="badge badge-sm badge-secondary ml-1">1</span>'),qf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Bf=(e,t)=>t("volontaires"),jf=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Lf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),zf=(e,t)=>t("magasins"),Vf=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Uf=S('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div>',1),Wf=S('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Gf(e,t){W(t,!0);let r=ze(t,"initialTab",3,"recettes"),n=U(()=>md(t.productId)),a=Y(Ie(r()));function o(b){E(a,b,!0)}var i=Wf(),l=c(i),u=c(l),f=c(u);{var h=b=>{var y=Tf(),N=z(y),w=c(N),P=d(N,2),$=c(P),k=c($),M=d($,2),D=d(c(M));L(()=>{j(w,s(n).product?.productName),j(k,s(n).product?.productType),j(D,` ${s(n).product?.displayTotalNeeded??""}`)}),v(b,y)},m=b=>{var y=Af();v(b,y)};A(f,b=>{s(n)&&s(n).product?b(h):b(m,!1)})}var p=d(f,2);p.__click=function(...b){t.onClose?.apply(this,b)};var _=c(p);ct(_,{class:"h-4 w-4"});var g=d(u,2);{var x=b=>{var y=Uf(),N=z(y),w=c(N);w.__click=[kf,o];var P=c(w);hs(P,{class:"mr-1 h-5 w-5"});var $=d(P,2);{var k=K=>{var Z=Nf(),_e=c(Z);L(()=>j(_e,s(n).product?.nbRecipes)),v(K,Z)},M=K=>{var Z=Df();v(K,Z)};A($,K=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?K(k):K(M,!1)})}var D=d(w,2);D.__click=[If,o];var C=c(D);ur(C,{class:"mr-1 h-5 w-5"});var I=d(C,2);{var O=K=>{var Z=Cf(),_e=c(Z);L(()=>j(_e,s(n).purchasesList.length)),v(K,Z)},q=K=>{var Z=Mf();v(K,Z)};A(I,K=>{s(n).purchasesList.length>0?K(O):K(q,!1)})}var X=d(D,2);X.__click=[Rf,o];var Ae=c(X);Ya(Ae,{class:"mr-1 h-5 w-5"});var fe=d(Ae,2);{var Se=K=>{var Z=Of();v(K,Z)},ce=K=>{var Z=qf();v(K,Z)};A(fe,K=>{s(n).stockParsed?K(Se):K(ce,!1)})}var R=d(X,2);R.__click=[Bf,o];var re=c(R);Fa(re,{class:"mr-1 h-5 w-5"});var xe=d(re,2);{var ke=K=>{var Z=jf(),_e=c(Z);L(()=>j(_e,s(n).product?.who.length)),v(K,Z)},Q=K=>{var Z=Lf();v(K,Z)};A(xe,K=>{s(n).product?.who&&s(n).product?.who.length>0?K(ke):K(Q,!1)})}var ve=d(R,2);ve.__click=[zf,o];var Ce=c(ve);dr(Ce,{class:"mr-1 h-5 w-5"});var oe=d(N,2),he=c(oe);{var ee=K=>{var Z=Vf(),_e=c(Z);ct(_e,{class:"h-4 w-4"});var Oe=d(_e,2),it=c(Oe);L(()=>j(it,`erreur : ${s(n).error??""}`)),v(K,Z)};A(he,K=>{s(n).error&&K(ee)})}var Pe=d(he,2),Ne=c(Pe);_c(Ne,()=>s(a),K=>{var Z=H(),_e=z(Z);{var Oe=Ze=>{$f(Ze,{get modalState(){return s(n)}})},it=Ze=>{var F=H(),We=z(F);{var nt=dt=>{Id(dt,{get modalState(){return s(n)}})},mt=dt=>{var pe=H(),Ft=z(pe);{var Mt=gt=>{zd(gt,{get modalState(){return s(n)}})},er=gt=>{var tr=H(),J=z(tr);{var ge=Be=>{Xd(Be,{get modalState(){return s(n)}})},$e=Be=>{var je=H(),ft=z(je);{var xt=vt=>{lf(vt,{get modalState(){return s(n)}})};A(ft,vt=>{s(a)==="magasins"&&vt(xt)},!0)}v(Be,je)};A(J,Be=>{s(a)==="volontaires"?Be(ge):Be($e,!1)},!0)}v(gt,tr)};A(Ft,gt=>{s(a)==="stock"?gt(Mt):gt(er,!1)},!0)}v(dt,pe)};A(We,dt=>{s(a)==="achats"?dt(nt):dt(mt,!1)},!0)}v(Ze,F)};A(_e,Ze=>{s(a)==="recettes"?Ze(Oe):Ze(it,!1)})}v(K,Z)});var De=d(oe,2),Ee=c(De);Ee.__click=function(...K){t.onClose?.apply(this,K)},L(()=>{Te(w,1,`tab ${s(a)==="recettes"?"tab-active":""}`),Te(D,1,`tab ${s(a)==="achats"?"tab-active":""}`),Te(X,1,`tab ${s(a)==="stock"?"tab-active":""}`),Te(R,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),Te(ve,1,`tab ${s(a)==="magasins"?"tab-active":""}`)}),v(b,y)};A(g,b=>{s(n)&&b(x)})}v(e,i),G()}ot(["click"]);async function Qf(e,t,r,n,a,o,i,l,u,f){if(!(!s(t)||s(r))){E(n,null),E(a,null);try{const h=s(o).map(_=>_.id),m=i.products.filter(_=>h.includes(_.$id));B.setSyncStatus(h,!0),i.onClose();let p;if(s(l)){const _={storeName:u.storeName.trim(),storeComment:u.storeComment.trim()};p=await Di(h,m,_)}else if(s(f))p=await Ii(h,m,u.whoNames,"replace");else throw new Error("Type d'édition non supporté");if(E(a,p,!0),p.success)console.log(`[GroupEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(h){const m=h instanceof Error?h.message:"Erreur inconnue";E(n,m,!0),console.error("[GroupEditModal] Erreur mise à jour:",h),B.clearSyncStatus()}finally{E(r,!1)}}}function so(e,t,r){s(t)||r.onClose()}var Hf=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Kf=S('<div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div>'),Yf=(e,t,r)=>t(r),Jf=S('<div class="badge badge-primary badge-lg flex items-center gap-2"><span> </span> <button class="btn btn-xs btn-circle btn-ghost hover:bg-error/20"><!></button></div>'),Zf=S('<div class="mt-2 flex flex-wrap gap-2"></div>'),Xf=S('<div class="space-y-4"><div><div class="flex gap-2"><input type="text" class="input flex-1" placeholder="Ajouter un volontaire..."/> <button class="btn btn-square btn-primary"><!></button></div> <!> <!></div></div>'),Ff=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),ev=S("<!> ",1),tv=S('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <!> <!> <div class="my-4"><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function rv(e,t){W(t,!0);let r=Y(!1),n=Y(null),a=Y(null),o=Ie({storeName:t.products.length>0&&t.editType==="store"&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"",storeComment:t.products.length>0&&t.editType==="store"&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"",whoNames:t.products.length>0&&t.editType==="who"&&t.products[0].who?[...t.products[0].who]:[]});const i=U(()=>t.editType==="store"),l=U(()=>t.editType==="who"),u=U(()=>t.products.map(Q=>({id:Q.$id,label:Q.productName,title:Q.productName,selected:s(g)[Q.$id]}))),f=U(()=>s(u).filter(Q=>Q.selected)),h=U(()=>s(i)?`Attribuer un magasin (${s(f).length} produits sélectionnés)`:`Gérer les volontaires (${s(f).length} produits sélectionnés)`),m=U(()=>s(f).length===0?!1:s(i)?o.storeName.trim().length>0:s(l)?o.whoNames.length>0:!1);function p(Q){Q.trim()&&!o.whoNames.includes(Q.trim())&&(o.whoNames=[...o.whoNames,Q.trim()])}function _(Q){o.whoNames=o.whoNames.filter(ve=>ve!==Q)}let g=Y(Ie({}));Br(()=>{const Q={};t.products.forEach(ve=>{Q[ve.$id]=t.productIds.includes(ve.$id)}),E(g,Q,!0)});function x(Q){s(g)[Q]=!s(g)[Q]}var b=tv(),y=c(b),N=c(y),w=c(N),P=c(w),$=d(w,2);$.__click=[so,r,t];var k=c($);ct(k,{class:"h-4 w-4"});var M=d(N,2),D=c(M);{var C=Q=>{var ve=Hf(),Ce=c(ve);_s(Ce,{class:"h-4 w-4"});var oe=d(Ce,2),he=c(oe);L(()=>j(he,s(n))),v(Q,ve)};A(D,Q=>{s(n)&&Q(C)})}var I=d(D,2);{var O=Q=>{var ve=Kf(),Ce=c(ve),oe=c(Ce),he=c(oe);dr(he,{class:"h-4 w-4 opacity-50"});var ee=d(he,2),Pe=d(oe,2);{let Ee=U(()=>B.uniqueStores.map(K=>({id:K,label:K,disabled:K===o.storeName})));ts(Pe,{get suggestions(){return s(Ee)},onSuggestionClick:K=>{o.storeName=K.label},title:"Suggestions de magasins :"})}var Ne=d(Ce,2),De=c(Ne);L(()=>{ee.disabled=s(r),De.disabled=s(r)}),Re(ee,()=>o.storeName,Ee=>o.storeName=Ee),Re(De,()=>o.storeComment,Ee=>o.storeComment=Ee),v(Q,ve)};A(I,Q=>{s(i)&&Q(O)})}var q=d(I,2);{var X=Q=>{var ve=Xf(),Ce=c(ve),oe=c(Ce),he=c(oe);he.__keydown=Z=>{Z.key==="Enter"&&(Z.preventDefault(),p(Z.currentTarget.value),Z.currentTarget.value="")};var ee=d(he,2);ee.__click=Z=>{const _e=Z.currentTarget.previousElementSibling;p(_e.value),_e.value=""};var Pe=c(ee);Mi(Pe,{class:"h-4 w-4"});var Ne=d(oe,2);{var De=Z=>{var _e=Zf();Je(_e,20,()=>o.whoNames,Oe=>Oe,(Oe,it)=>{var Ze=Jf(),F=c(Ze),We=c(F),nt=d(F,2);nt.__click=[Yf,_,it];var mt=c(nt);ct(mt,{class:"h-3 w-3"}),L(()=>{j(We,it),nt.disabled=s(r)}),v(Oe,Ze)}),v(Z,_e)};A(Ne,Z=>{o.whoNames.length>0&&Z(De)})}var Ee=d(Ne,2);{var K=Z=>{{let _e=U(()=>B.uniqueWho.slice(0,8).map(Oe=>({id:Oe,label:Oe,disabled:o.whoNames.includes(Oe)})));ts(Z,{get suggestions(){return s(_e)},onSuggestionClick:Oe=>p(Oe.label),title:"Suggestions :"})}};A(Ee,Z=>{B.uniqueWho.length>0&&Z(K)})}L(()=>{he.disabled=s(r),ee.disabled=s(r)}),v(Q,ve)};A(q,Q=>{s(l)&&Q(X)})}var Ae=d(q,2),fe=d(c(Ae),2);ms(fe,{get items(){return s(u)},onToggleItem:x,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Se=d(M,2),ce=c(Se);ce.__click=[so,r,t];var R=d(ce,2);R.__click=[Qf,m,r,n,a,f,t,i,o,l];var re=c(R);{var xe=Q=>{var ve=Ff();v(Q,ve)},ke=Q=>{var ve=ev(),Ce=z(ve);Ln(Ce,{class:"h-4 w-4"});var oe=d(Ce);L(()=>j(oe,` Appliquer à ${s(f).length??""} produit(s)`)),v(Q,ve)};A(re,Q=>{s(r)?Q(xe):Q(ke,!1)})}L(()=>{j(P,s(h)),$.disabled=s(r),ce.disabled=s(r),R.disabled=s(r)||!s(m)}),v(e,b),G()}ot(["click","keydown"]);function nv(e,t){const r=e.reduce((a,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return a+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function av(e,t){const r=e.filter(i=>!i.isSynced).map(i=>({productId:i.productId,productData:i.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(i){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",i)}const a=e.flatMap(i=>i.missingQuantities.map(l=>({productId:i.productId,quantity:l.q,unit:l.u,status:"delivered",notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:null,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:a},invoiceData:t}}async function sv(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=nv(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const a=100,o=[];if(n<=a)o.push(t);else{let p=[],_=0;for(const g of t){const x=(g.isSynced?0:1)+g.missingQuantities.length;_+x>a?(p.length>0&&o.push(p),p=[g],_=x):(p.push(g),_+=x)}p.length>0&&o.push(p)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,u=0,f=0;for(let p=0;p<o.length;p++){const _=o[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${o.length} (${_.length} produits)`);try{const g=await av(_,r),x=await ov(g);if(i.push(x),x.success)l+=x.productsCreated,u+=x.purchasesCreated,f+=x.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${x.error}`);break}}catch(g){const x=g instanceof Error?g.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,g),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:x,timestamp:new Date().toISOString()});break}}const h=i.every(p=>p.success),m=i.some(p=>!p.success);return{success:h,results:i,totalProductsCreated:l,totalPurchasesCreated:u,totalExpensesCreated:f,error:m?"Un ou plusieurs lots ont échoué":void 0}}async function ov(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}function iv(e,t){E(t,!s(t))}var lv=S('<span class="text-base-content font-semibold"> </span>'),cv=S('<div class="text-base-content/80 flex-1"> </div>'),uv=S('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),dv=S('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),fv=S('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function vv(e,t){let r=ze(t,"icon",3,Zu),n=ze(t,"class",3,""),a=ze(t,"initiallyOpen",3,!1),o=r(),i=Y(Ie(a())),l=Ie(t.children);var u=fv(),f=c(u);f.__click=[iv,i];var h=c(f),m=c(h);o(m,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(m,2);{var _=P=>{var $=lv(),k=c($);L(()=>j(k,t.title)),v(P,$)};A(p,P=>{t.title&&P(_)})}var g=d(h,2);{var x=P=>{var $=cv(),k=c($);L(()=>j(k,t.contentVisible)),v(P,$)};A(g,P=>{t.contentVisible&&P(x)})}var b=d(g,2);{var y=P=>{var $=uv(),k=c($),M=c(k);{var D=O=>{var q=et("en savoir plus");v(O,q)},C=O=>{var q=et("masquer");v(O,q)};A(M,O=>{s(i)?O(C,!1):O(D)})}var I=d(k,2);{let O=U(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(i)?"rotate-180":""}`);Wu(I,{get class(){return s(O)}})}v(P,$)};A(b,P=>{l&&P(y)})}var N=d(f,2);{var w=P=>{var $=dv(),k=c($),M=c(k);ne(M,()=>t.children??te),L(()=>Te($,1,`overflow-hidden transition-all duration-200 ${s(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),v(P,$)};A(N,P=>{l&&P(w)})}L(()=>{Te(u,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Xo(u,t.style),Te(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),Cr(f,"aria-expanded",s(i))}),v(e,u)}ot(["click"]);async function hv(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){E(r,!0),E(n,null),E(a,null);try{const u=`FACTURE_${Date.now()}`,f=s(o).map(_=>_.$id);B.setSyncStatus(f,!0);const h=[];for(const _ of s(o))h.push({productId:_.$id,isSynced:_.isSynced,productData:_,missingQuantities:_.missingQuantityArray||[]});const m={invoiceId:u,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(o).length} produits`,who:i.who.trim()||void 0};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${h.length} produits...`),l.onClose();const p=await sv(B.currentMainId,h,m);if(p.success)E(a,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(u){const f=u instanceof Error?u.message:"Erreur inconnue";E(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",u),B.clearSyncStatus()}finally{E(r,!1)}}}function oo(e,t,r){s(t)||r.onClose()}var pv=S('<div class="alert alert-error"><!> <span> </span></div>'),_v=S('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),mv=S(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),gv=S("<option> </option>"),bv=S("<option> </option>"),yv=S('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),wv=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Sv=S("<!> ",1),xv=S(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option>Annulé</option></select> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function Pv(e,t){W(t,!0);let r=Y(!1),n=Y(null),a=Y(null),o=Ie({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=Y(Ie(new Set));Br(()=>{E(i,new Set(t.products.map(J=>J.$id)),!0)});const l=U(()=>t.products.filter(J=>s(i).has(J.$id))),u=U(()=>s(l).length!==0),f=U(()=>`Achat groupé (${s(l).length} produits sélectionnés)`);function h(J){const ge=new Set(s(i));ge.has(J)?ge.delete(J):ge.add(J),E(i,ge,!0)}const m=U(()=>t.products.map(J=>({id:J.$id,label:J.productName,title:J.productName})));var p=xv(),_=c(p),g=c(_),x=c(g),b=c(x);ur(b,{class:"h-5 w-5"});var y=d(b),N=d(x,2);N.__click=[oo,r,t];var w=c(N);ct(w,{class:"h-4 w-4"});var P=d(g,2),$=c(P);{var k=J=>{var ge=pv(),$e=c(ge);_s($e,{class:"h-4 w-4"});var Be=d($e,2),je=c(Be);L(()=>j(je,s(n))),v(J,ge)};A($,J=>{s(n)&&J(k)})}var M=d($,2);{var D=J=>{var ge=_v(),$e=c(ge);Ln($e,{class:"h-4 w-4"});var Be=d($e,2),je=c(Be),ft=d(je);{var xt=at=>{var ht=et("+ 1 dépense globale");v(at,ht)};A(ft,at=>{s(a).expense&&at(xt)})}var vt=d(ft,2);{var Rt=at=>{var ht=et();L(()=>j(ht,`(traité en ${s(a).batches??""} lots)`)),v(at,ht)};A(vt,at=>{s(a).batches&&s(a).batches>1&&at(Rt)})}L(()=>j(je,`Achat groupé créé avec succès ! ${s(a).purchases??""} produit(s) validés `)),v(J,ge)};A(M,J=>{s(a)&&J(D)})}var C=d(M,2),I=c(C);vv(I,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(J,ge)=>{var $e=mv();v(J,$e)},$$slots:{default:!0}});var O=d(C,2),q=d(c(O),2),X=c(q),Ae=c(X),fe=c(Ae);dr(fe,{class:"h-4 w-4 opacity-50"});var Se=d(fe,2),ce=d(Ae,2);Je(ce,21,()=>B.uniqueStores,Va,(J,ge)=>{var $e=gv(),Be=c($e),je={};L(()=>{j(Be,s(ge)),je!==(je=s(ge))&&($e.value=($e.__value=s(ge))??"")}),v(J,$e)});var R=d(X,2),re=c(R),xe=c(re);ya(xe,{class:"h-4 w-4 opacity-50"});var ke=d(xe,2),Q=d(re,2);Je(Q,21,()=>B.uniqueWho,Va,(J,ge)=>{var $e=bv(),Be=c($e),je={};L(()=>{j(Be,s(ge)),je!==(je=s(ge))&&($e.value=($e.__value=s(ge))??"")}),v(J,$e)});var ve=d(R,2),Ce=c(ve),oe=c(Ce);Ju(oe,{class:"h-4 w-4 opacity-50"});var he=d(oe,2),ee=d(q,2),Pe=c(ee),Ne=c(Pe),De=c(Ne);De.value=De.__value="delivered";var Ee=d(De);Ee.value=Ee.__value="ordered";var K=d(Ee);K.value=K.__value="requested";var Z=d(K);Z.value=Z.__value="cancelled";var _e=d(Ne,2),Oe=d(Pe,2);{var it=J=>{var ge=yv(),$e=c(ge),Be=d(c($e),2);L(()=>Be.disabled=s(r)),Re(Be,()=>o.deliveryDate,je=>o.deliveryDate=je),v(J,ge)};A(Oe,J=>{o.status==="ordered"&&J(it)})}var Ze=d(ee,2),F=c(Ze),We=c(F);ps(We,{class:"h-4 w-4 opacity-50"});var nt=d(We,2),mt=d(O,2),dt=d(c(mt),2);ms(dt,{get items(){return s(m)},onToggleItem:h,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var pe=d(mt,2),Ft=c(pe);Ft.__click=[oo,r,t];var Mt=d(Ft,2);Mt.__click=[hv,u,r,n,a,l,o,t];var er=c(Mt);{var gt=J=>{var ge=wv();v(J,ge)},tr=J=>{var ge=Sv(),$e=z(ge);ur($e,{class:"h-4 w-4"});var Be=d($e);L(()=>j(Be,` Valider ${s(l).length??""} produit(s)`)),v(J,ge)};A(er,J=>{s(r)?J(gt):J(tr,!1)})}L(()=>{j(y,` ${s(f)??""}`),N.disabled=s(r),Se.disabled=s(r),ke.disabled=s(r),he.disabled=s(r),Ne.disabled=s(r),Te(_e,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),nt.disabled=s(r),Ft.disabled=s(r),Mt.disabled=s(r)||!s(u)}),Re(Se,()=>o.store,J=>o.store=J),Re(ke,()=>o.who,J=>o.who=J),Re(he,()=>o.expense,J=>o.expense=J),Ar(Ne,()=>o.status,J=>o.status=J),Re(nt,()=>o.notes,J=>o.notes=J),v(e,p),G()}ot(["click"]);var Ev=()=>B.setGroupBy("none"),$v=()=>B.setGroupBy("store"),Tv=()=>B.setGroupBy("productType"),Av=(e,t)=>B.toggleProductType(t),kv=S("<button><!> </button>"),Nv=()=>B.toggleTemperature("frais"),Dv=()=>B.toggleTemperature("surgele"),Iv=()=>B.clearTypeAndTemperatureFilters(),Cv=S('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Mv=(e,t)=>B.toggleStore(t),Rv=S("<button> </button>"),Ov=S('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),qv=(e,t)=>B.toggleWho(t),Bv=S("<button> </button>"),jv=S('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Lv=(e,t)=>{B.clearFilters(),E(t,!1)},zv=S('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Vv(e,t){W(t,!0);let r=Y(!1);const n=U(()=>B.filters),a=U(()=>B.uniqueStores),o=U(()=>B.uniqueWho),i=U(()=>B.uniqueProductTypes);var l=zv(),u=z(l),f=c(u),h=d(f,2),m=d(c(h),2),p=c(m),_=c(p),g=c(_);Ja(g,{class:"w-5 h-5"});var x=d(_,2),b=c(x);ct(b,{class:"w-4 h-4"});var y=d(p,2),N=d(c(y),2),w=c(N);w.__change=[Ev];var P=d(w,2);P.__change=[$v];var $=d(P,2);$.__change=[Tv];var k=d(y,2),M=c(k),D=d(c(M),2);Je(D,20,()=>s(i),oe=>oe,(oe,he)=>{const ee=U(()=>na(he));var Pe=kv();Pe.__click=[Av,he];var Ne=c(Pe);Tr(Ne,()=>s(ee).icon,(Ee,K)=>{K(Ee,{class:"w-3 h-3 mr-1"})});var De=d(Ne);L(Ee=>{Te(Pe,1,`btn btn-sm ${Ee??""}`),j(De,` ${s(ee).displayName??""}`)},[()=>s(n).selectedProductTypes.length===0?"btn-soft btn-accent":s(n).selectedProductTypes.includes(he)?"btn-accent":"btn-dash btn-accent"]),v(oe,Pe)});var C=d(D,2),I=c(C);I.__click=[Nv];var O=c(I);Za(O,{class:"w-3 h-3"});var q=d(I,2);q.__click=[Dv];var X=c(q);Xa(X,{class:"w-3 h-3"});var Ae=d(q,2);{var fe=oe=>{var he=Cv();he.__click=[Iv];var ee=c(he);ct(ee,{class:"w-3 h-3"}),v(oe,he)};A(Ae,oe=>{(s(n).selectedProductTypes.length>0||s(n).selectedTemperatures.length>0)&&oe(fe)})}var Se=d(k,2);{var ce=oe=>{var he=Ov(),ee=c(he),Pe=d(c(ee),2);Je(Pe,20,()=>s(a),Ne=>Ne,(Ne,De)=>{var Ee=Rv();Ee.__click=[Mv,De];var K=c(Ee);L(Z=>{Te(Ee,1,`btn btn-sm ${Z??""}`),j(K,De)},[()=>s(n).selectedStores.length===0?"btn-soft btn-accent":s(n).selectedStores.includes(De)?"btn-accent":"btn-dash btn-accent"]),v(Ne,Ee)}),v(oe,he)};A(Se,oe=>{s(a).length>0&&oe(ce)})}var R=d(Se,2);{var re=oe=>{var he=jv(),ee=c(he),Pe=d(c(ee),2);Je(Pe,20,()=>s(o),Ne=>Ne,(Ne,De)=>{var Ee=Bv();Ee.__click=[qv,De];var K=c(Ee);L(Z=>{Te(Ee,1,`btn btn-sm ${Z??""}`),j(K,De)},[()=>s(n).selectedWho.length===0?"btn-soft btn-accent":s(n).selectedWho.includes(De)?"btn-accent":"btn-dash btn-accent"]),v(Ne,Ee)}),v(oe,he)};A(R,oe=>{s(o).length>0&&oe(re)})}var xe=d(R,4);xe.__click=[Lv,r];var ke=c(xe);ct(ke,{class:"w-4 h-4 mr-2"});var Q=d(u,2),ve=c(Q),Ce=c(ve);Ja(Ce,{class:"w-6 h-6"}),L((oe,he)=>{tn(w,s(n).groupBy==="none"),tn(P,s(n).groupBy==="store"),tn($,s(n).groupBy==="productType"),Te(I,1,`btn btn-sm ${oe??""}`),Te(q,1,`btn btn-sm ${he??""}`)},[()=>s(n).selectedTemperatures.length===0?"btn-soft btn-success":s(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(n).selectedTemperatures.length===0?"btn-soft btn-info":s(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Tc(f,()=>s(r),oe=>E(r,oe)),v(e,l),G()}ot(["change","click"]);var Uv=(e,t,r)=>t(r),Wv=S("<button><span> </span> <!></button>"),Gv=(e,t)=>t(),Qv=S('<div class="space-y-4"><div class="space-y-2"><fieldset><legend class="label"><span class="label-text">Dates incluses</span></legend> <div class="flex flex-wrap gap-1"><!> <button class="btn btn-sm btn-primary btn-outline ms-4" type="button"><span>Toutes les dates</span></button></div></fieldset></div></div>');function Hv(e,t){W(t,!0);const n=[...ze(t,"allDates",19,()=>[])()].sort();let a=n[0],o=n[n.length-1],i=Y(Ie(a)),l=Y(Ie(o));function u(w){s(i)===w&&s(l)===w?p():new Date(w)<new Date(s(i))?E(i,w,!0):(new Date(w)>new Date(s(l))||E(i,w,!0),E(l,w,!0))}function f(w){return new Date(w)>=new Date(s(i))&&new Date(w)<=new Date(s(l))?"btn-soft btn-primary":"btn-dash btn-primary opacity-80"}function h(w){return new Date(w).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function m(w){const $=new Date(w).getUTCHours();return $===12?"sun":$===20?"moon":$===8?"cloud":null}function p(){E(i,a,!0),E(l,o,!0)}Br(()=>{B.setDateRange(s(i),s(l))});var _=Qv(),g=c(_),x=c(g),b=d(c(x),2),y=c(b);Je(y,18,()=>n,w=>w,(w,P)=>{var $=Wv();$.__click=[Uv,u,P];var k=c($),M=c(k),D=d(k,2);{var C=O=>{dd(O,{size:16})},I=O=>{var q=H(),X=z(q);{var Ae=Se=>{nd(Se,{size:16})},fe=Se=>{var ce=H(),R=z(ce);{var re=xe=>{Ku(xe,{size:16})};A(R,xe=>{m(P)==="cloud"&&xe(re)},!0)}v(Se,ce)};A(X,Se=>{m(P)==="moon"?Se(Ae):Se(fe,!1)},!0)}v(O,q)};A(D,O=>{m(P)==="sun"?O(C):O(I,!1)})}L((O,q)=>{Te($,1,`btn btn-sm ${O??""}`),j(M,q)},[()=>f(P),()=>h(P)]),v(w,$)});var N=d(y,2);N.__click=[Gv,p],v(e,_),G()}ot(["click"]);const Tn=e=>{var t=Yv(),r=c(t);ia(r,{class:"h-4 w-4 text-amber-600"}),v(e,t)};function Kv(){}var Yv=S('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),Jv=()=>B.clearFilters(),Zv=e=>B.setSearchQuery(e.currentTarget.value),Xv=()=>B.setGroupBy("none"),Fv=()=>B.setGroupBy("store"),eh=()=>B.setGroupBy("productType"),th=(e,t)=>B.toggleProductType(t),rh=S("<button><!> </button>"),nh=()=>B.toggleTemperature("frais"),ah=()=>B.toggleTemperature("surgele"),sh=()=>B.clearTypeAndTemperatureFilters(),oh=S('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),ih=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),lh=(e,t)=>B.toggleStore(t),ch=S("<button><!> </button>"),uh=()=>B.clearStoreFilters(),dh=S('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),fh=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),vh=(e,t)=>B.toggleWho(t),hh=S("<button><!> </button>"),ph=()=>B.clearWhoFilters(),_h=S('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),mh=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),gh=()=>B.handleSort("productName"),bh=()=>B.handleSort("store"),yh=()=>B.handleSort("who"),wh=()=>B.handleSort("productType"),Sh=S('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),xh=(e,t,r)=>t("store",r().map(n=>n.$id),r()),Ph=(e,t,r)=>t("who",r().map(n=>n.$id),r()),Eh=(e,t,r)=>t(r()),$h=S(`<button class="btn btn-sm btn-success btn-soft" title="Ouvrir le modal d'achat groupé"><!> Achat groupé <!></button>`),Th=S('<tr class="bg-base-200 sticky top-11 z-10 font-semibold"><td colspan="7" class="py-3"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!></div> <div class="flex items-center gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> Magasin <!></button> <button class="btn btn-sm btn-info btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> Volontaires <!></button> <!></div></div></td></tr>'),Ah=(e,t,r)=>t(s(r).$id,"recettes"),kh=S('<div class="flex items-center gap-1 text-blue-600" title="Synchronisation en cours..."><!></div>'),Nh=S('<div class="text-base-content/60 text-xs"> </div>'),Dh=S('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Ih=S('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Ch=(e,t,r)=>t(s(r).$id,"magasins"),Mh=S('<div class="tooltip tooltip-info"><div class="text-center"> </div></div>'),Rh=S('<div class="text-center"> </div>'),Oh=(e,t,r)=>t(s(r).$id,"volontaires"),qh=S('<span class="badge badge-soft badge-info badge-sm"> </span>'),Bh=S('<div class="flex flex-wrap justify-center gap-2 pr-8"></div>'),jh=(e,t,r)=>t(s(r).$id,"recettes"),Lh=S('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),zh=(e,t,r)=>t(s(r).$id,"achats"),Vh=S("<div><!> <span> </span></div>"),Uh=S('<span class="text-center">-</span>'),Wh=(e,t,r)=>t(s(r)),Gh=S('<div class="flex items-center justify-center gap-2"><div class="bg-warning m-auto rounded px-2 py-1"> <button class="btn btn-xs btn-ghost text-base-content/70 btn-circle btn-outline hover:btn-success hover:text-success-content ms-3 transition-all hover:scale-105" title="Déclarer comme acheté"><!></button></div></div>'),Qh=S('<tr><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><!> <div><div class="font-medium"> </div> <!></div></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-2 text-center text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap justify-center gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!></td></tr>'),Hh=S("<!> <!>",1),Kh=S('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Yh=S('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><!> <div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!> <!> <!>',1);function Jh(e,t){W(t,!0);const r={Package:Vn,MessageCircleQuestionMark:rd,ShoppingCart:ur,Clock:Hu,CircleCheck:Gu,CircleX:Qu},n=U(()=>B.displayProducts),a=U(()=>B.stats),o=U(()=>B.uniqueStores),i=U(()=>B.uniqueWho),l=U(()=>B.uniqueProductTypes),u=U(()=>B.filters);let f=Y(null),h=Y("recettes"),m=Y(!1),p=Y("store"),_=Y(Ie([])),g=Y(Ie([])),x=Y(!1),b=Y(Ie([]));function y(V,ue="recettes"){E(h,ue,!0),E(f,V,!0)}function N(){E(f,null)}function w(V,ue,He){E(p,V,!0),E(_,ue,!0),E(g,He,!0),E(m,!0)}function P(){E(m,!1),E(p,"store"),E(_,[],!0),E(g,[],!0)}function $(V){console.log(`[ProductsTable] Modification groupée réussie: ${V.updatedCount} produits`)}function k(V){const ue=V.filter(He=>He.displayMissingQuantity!=="✅ Complet"&&He.missingQuantityArray&&He.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${V.length} produits reçus → ${ue.length} produits avec quantités manquantes`),E(b,ue,!0),E(x,!0)}function M(){E(x,!1),E(b,[],!0)}function D(){console.log("[ProductsTable] Achat groupé créé avec succès"),M()}async function C(V){try{if(!B.currentMainId)throw new Error("mainId non disponible");const ue=V.missingQuantityArray||[];if(ue.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let He=V.$id;V.isSynced||(console.log(`[ProductsTable] Produit ${V.$id} local, création pour validation rapide...`),He=(await Er(V.$id,{},Ge=>B.getEnrichedProductById(Ge))).$id,console.log(`[ProductsTable] Produit sync créé: ${He}`)),await Ci(B.currentMainId,He,ue,{store:V.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${V.productName}`)}catch(ue){console.error("[ProductsTable] Erreur validation rapide:",ue),alert("Erreur lors de la validation rapide: "+ue.message)}}var I=Yh(),O=z(I),q=c(O),X=c(q),Ae=c(X);to(Ae,{class:"mr-1 h-4 w-4"});var fe=d(Ae),Se=d(X,2);Se.__click=[Kv];var ce=c(Se);od(ce,{class:"mr-1 h-4 w-4"});var R=d(q,2),re=c(R),xe=c(re),ke=c(xe),Q=c(ke);Ja(Q,{class:"h-5 w-5"});var ve=d(ke,2);ve.__click=[Jv];var Ce=c(ve);ct(Ce,{class:"h-4 w-4"});var oe=d(re,2),he=c(oe),ee=d(c(he),2),Pe=c(ee);ud(Pe,{class:"h-4 w-4"});var Ne=d(Pe,2);Ne.__input=[Zv];var De=d(he,2),Ee=d(c(De),2),K=c(Ee);K.__change=[Xv];var Z=d(K,2);Z.__change=[Fv];var _e=d(Z,2);_e.__change=[eh];var Oe=d(oe,2),it=c(Oe);Hv(it,{get allDates(){return B.allDates}});var Ze=d(it,2),F=c(Ze);{var We=V=>{var ue=ih(),He=c(ue),me=d(c(He),2),Ge=c(me);Je(Ge,16,()=>s(l),Xe=>Xe,(Xe,Fe)=>{const Wt=U(()=>na(Fe));var Nt=rh();Nt.__click=[th,Fe];var sr=c(Nt);Tr(sr,()=>s(Wt).icon,(or,Kr)=>{Kr(or,{class:"mr-1 h-5 w-5"})});var Hr=d(sr);L(or=>{Te(Nt,1,`btn btn-sm ${or??""}`),j(Hr,` ${s(Wt).displayName??""}`)},[()=>s(u).selectedProductTypes.length===0?"btn-soft btn-accent":s(u).selectedProductTypes.includes(Fe)?"btn-accent":"btn-dash btn-accent"]),v(Xe,Nt)});var kt=d(Ge,2);kt.__click=[nh];var ar=c(kt);Za(ar,{class:"h-5 w-5"});var Ve=d(kt,2);Ve.__click=[ah];var Ke=c(Ve);Xa(Ke,{class:"h-5 w-5"});var Le=d(Ve,2);{var de=Xe=>{var Fe=oh();Fe.__click=[sh];var Wt=c(Fe);ct(Wt,{class:"h-3 w-3"}),v(Xe,Fe)};A(Le,Xe=>{(s(u).selectedProductTypes.length>0||s(u).selectedTemperatures.length>0)&&Xe(de)})}L((Xe,Fe)=>{Te(kt,1,`btn btn-sm ms-4 ${Xe??""}`),Te(Ve,1,`btn btn-sm ${Fe??""}`)},[()=>s(u).selectedTemperatures.length===0?"btn-soft btn-success":s(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(u).selectedTemperatures.length===0?"btn-soft btn-info":s(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),v(V,ue)};A(F,V=>{s(l).length>0&&V(We)})}var nt=d(Ze,2),mt=c(nt);{var dt=V=>{var ue=fh(),He=c(ue),me=d(c(He),2),Ge=c(me);Je(Ge,16,()=>s(o),Ve=>Ve,(Ve,Ke)=>{var Le=ch();Le.__click=[lh,Ke];var de=c(Le);dr(de,{class:"mr-1 h-3 w-3"});var Xe=d(de);L(Fe=>{Te(Le,1,`btn btn-xs ${Fe??""}`),j(Xe,` ${Ke??""}`)},[()=>s(u).selectedStores.length===0?"btn-soft btn-accent":s(u).selectedStores.includes(Ke)?"btn-accent":"btn-dash btn-accent"]),v(Ve,Le)});var kt=d(Ge,2);{var ar=Ve=>{var Ke=dh();Ke.__click=[uh];var Le=c(Ke);ct(Le,{class:"h-3 w-3"}),v(Ve,Ke)};A(kt,Ve=>{s(u).selectedStores.length>0&&Ve(ar)})}v(V,ue)};A(mt,V=>{s(o).length>0&&V(dt)})}var pe=d(mt,2);{var Ft=V=>{var ue=mh(),He=c(ue),me=d(c(He),2),Ge=c(me);Je(Ge,16,()=>s(i),Ve=>Ve,(Ve,Ke)=>{var Le=hh();Le.__click=[vh,Ke];var de=c(Le);ya(de,{class:"mr-1 h-3 w-3"});var Xe=d(de);L(Fe=>{Te(Le,1,`btn btn-xs ${Fe??""}`),j(Xe,` ${Ke??""}`)},[()=>s(u).selectedWho.length===0?" btn-soft btn-info":s(u).selectedWho.includes(Ke)?" btn-info":"btn-dash btn-info"]),v(Ve,Le)});var kt=d(Ge,2);{var ar=Ve=>{var Ke=_h();Ke.__click=[ph];var Le=c(Ke);ct(Le,{class:"h-3 w-3"}),v(Ve,Ke)};A(kt,Ve=>{s(u).selectedWho.length>0&&Ve(ar)})}v(V,ue)};A(pe,V=>{s(i).length>0&&V(Ft)})}var Mt=d(R,2),er=c(Mt),gt=c(er),tr=c(gt),J=c(tr);J.__click=[gh];var ge=c(J),$e=c(ge);to($e,{class:"h-4 w-4"});var Be=d($e,2);{var je=V=>{var ue=et();L(()=>j(ue,s(u).sortDirection==="asc"?"↑":"↓")),v(V,ue)};A(Be,V=>{s(u).sortColumn==="productName"&&V(je)})}var ft=d(J);ft.__click=[bh];var xt=c(ft),vt=c(xt);dr(vt,{class:"h-4 w-4"});var Rt=d(vt,2);{var at=V=>{var ue=et();L(()=>j(ue,s(u).sortDirection==="asc"?"↑":"↓")),v(V,ue)};A(Rt,V=>{s(u).sortColumn==="store"&&V(at)})}var ht=d(ft);ht.__click=[yh];var pr=c(ht),_r=c(pr);Fa(_r,{class:"h-4 w-4"});var Lr=d(_r,2);{var zr=V=>{var ue=et();L(()=>j(ue,s(u).sortDirection==="asc"?"↑":"↓")),v(V,ue)};A(Lr,V=>{s(u).sortColumn==="who"&&V(zr)})}var Vt=d(ht);Vt.__click=[wh];var Vr=c(Vt),mr=d(c(Vr));{var gr=V=>{var ue=et();L(()=>j(ue,s(u).sortDirection==="asc"?"↑":"↓")),v(V,ue)};A(mr,V=>{s(u).sortColumn==="productType"&&V(gr)})}var rr=d(Vt,2),br=c(rr),nr=c(br);ur(nr,{class:"h-4 w-4"});var Ur=d(rr),yr=c(Ur),Wr=c(yr);Fu(Wr,{class:"h-4 w-4"});var pn=d(gt);Je(pn,21,()=>Object.entries(s(n)),([V,ue])=>V,(V,ue)=>{var He=U(()=>uo(s(ue),2));let me=()=>s(He)[0],Ge=()=>s(He)[1];var kt=Hh(),ar=z(kt);{var Ve=Le=>{const de=U(()=>na(me()));var Xe=Th(),Fe=c(Xe),Wt=c(Fe),Nt=c(Wt),sr=c(Nt);{var Hr=Et=>{var bt=et();L(()=>j(bt,`🏪 ${me()??""} (${Ge().length??""})`)),v(Et,bt)},or=Et=>{var bt=H(),Yr=z(bt);{var yn=Gt=>{var Sr=Sh(),Hn=c(Sr);Tr(Hn,()=>s(de).icon,(Aa,Sn)=>{Sn(Aa,{class:"h-4 w-4"})});var Kn=d(Hn,2),wn=c(Kn),Yn=d(Kn,2),Ta=c(Yn);L(()=>{j(wn,s(de).displayName),j(Ta,`(${Ge().length??""})`)}),v(Gt,Sr)},Jr=Gt=>{var Sr=et();L(()=>j(Sr,`📦 ${me()??""} (${Ge().length??""})`)),v(Gt,Sr)};A(Yr,Gt=>{s(u).groupBy==="productType"?Gt(yn):Gt(Jr,!1)},!0)}v(Et,bt)};A(sr,Et=>{s(u).groupBy==="store"?Et(Hr):Et(or,!1)})}var Kr=d(Nt,2),gn=c(Kr);gn.__click=[xh,w,Ge];var Un=c(gn);dr(Un,{size:16});var Wn=d(Un,2);ia(Wn,{size:16});var bn=d(gn,2);bn.__click=[Ph,w,Ge];var Gn=c(bn);Fa(Gn,{size:16});var Ea=d(Gn,2);ia(Ea,{size:16});var $a=d(bn,2);{var Qn=Et=>{var bt=$h();bt.__click=[Eh,k,Ge];var Yr=c(bt);ur(Yr,{size:16});var yn=d(Yr,2);eo(yn,{size:16}),v(Et,bt)};A($a,Et=>{Ge().some(bt=>bt.displayMissingQuantity!=="✅ Complet")&&Et(Qn)})}v(Le,Xe)};A(ar,Le=>{me()!==""&&Le(Ve)})}var Ke=d(ar,2);Je(Ke,17,()=>hd(Ge(),s(u)),Le=>Le.$id,(Le,de)=>{const Xe=U(()=>B.getFormattedTotalNeeded(s(de).$id)),Fe=U(()=>na(s(de).productType)),Wt=U(()=>pd(s(de).purchases||[]));var Nt=Qh(),sr=c(Nt);sr.__click=[Ah,y,de];var Hr=c(sr),or=c(Hr),Kr=c(or);{var gn=ae=>{var ye=kh(),Ue=c(ye);ed(Ue,{class:"h-4 w-4 animate-spin"}),v(ae,ye)};A(Kr,ae=>{s(de).status==="isSyncing"&&ae(gn)})}var Un=d(Kr,2),Wn=c(Un),bn=c(Wn),Gn=d(Wn,2);{var Ea=ae=>{var ye=Nh(),Ue=c(ye);L(()=>j(Ue,`Ancien: ${s(de).previousNames[0]??""}`)),v(ae,ye)};A(Gn,ae=>{s(de).previousNames&&s(de).previousNames.length>0&&ae(Ea)})}var $a=d(or,2),Qn=c($a);{var Et=ae=>{var ye=Dh(),Ue=c(ye);Za(Ue,{class:"text-success h-4 w-4"}),v(ae,ye)};A(Qn,ae=>{s(de).pFrais&&ae(Et)})}var bt=d(Qn,2);{var Yr=ae=>{var ye=Ih(),Ue=c(ye);Xa(Ue,{class:"text-info h-4 w-4"}),v(ae,ye)};A(bt,ae=>{s(de).pSurgel&&ae(Yr)})}var yn=d(Hr,2);Tn(yn);var Jr=d(sr);Jr.__click=[Ch,y,de];var Gt=c(Jr);{var Sr=ae=>{var ye=Mh(),Ue=c(ye),yt=c(Ue);L(()=>{Cr(ye,"data-tip",s(de).storeInfo?.storeComment),j(yt,s(de).storeInfo?.storeName||"-")}),v(ae,ye)},Hn=ae=>{var ye=Rh(),Ue=c(ye);L(()=>j(Ue,s(de).storeInfo?.storeName||"-")),v(ae,ye)};A(Gt,ae=>{s(de).storeInfo?.storeComment?ae(Sr):ae(Hn,!1)})}var Kn=d(Gt,2);Tn(Kn);var wn=d(Jr);wn.__click=[Oh,y,de];var Yn=c(wn);{var Ta=ae=>{var ye=Bh();Je(ye,20,()=>s(de).who,Ue=>Ue,(Ue,yt)=>{var Ot=qh(),xr=c(Ot);L(()=>j(xr,yt)),v(Ue,Ot)}),v(ae,ye)};A(Yn,ae=>{s(de).who&&s(de).who.length>0&&ae(Ta)})}var Aa=d(Yn,2);Tn(Aa);var Sn=d(wn),Ri=c(Sn),gs=c(Ri);Tr(gs,()=>s(Fe).icon,(ae,ye)=>{ye(ae,{class:"h-3 w-3"})});var Oi=d(gs),ka=d(Sn);ka.__click=[jh,y,de];var bs=c(ka),qi=c(bs),ys=d(bs,2);{var Bi=ae=>{var ye=Lh(),Ue=c(ye),yt=c(Ue),Ot=d(yt);hs(Ot,{class:"h-3 w-3"});var xr=d(Ue,2),Jn=c(xr),xn=d(Jn);fd(xn,{class:"h-3 w-3"}),L(()=>{j(yt,`${s(de)?.nbRecipes??""} `),j(Jn,`${s(de)?.totalAssiettes??""} `)}),v(ae,ye)};A(ys,ae=>{(s(de).nbRecipes||s(de).totalAssiettes)&&ae(Bi)})}var ji=d(ys,2);Tn(ji);var Na=d(ka);Na.__click=[zh,y,de];var ws=c(Na),Ss=c(ws);Je(Ss,17,()=>s(Wt),ae=>ae.status,(ae,ye)=>{const Ue=U(()=>r[s(ye).icon]);var yt=Vh(),Ot=c(yt);Tr(Ot,()=>s(Ue),(xn,Hi)=>{Hi(xn,{class:"h-4 w-4"})});var xr=d(Ot,2),Jn=c(xr);L(xn=>{Te(yt,1,`badge badge-soft flex items-center gap-2 ${s(ye).badgeClass??""}`),j(Jn,xn)},[()=>wa(s(ye).quantity,s(ye).unit)]),v(ae,yt)});var Li=d(Ss,2);{var zi=ae=>{var ye=Uh();v(ae,ye)};A(Li,ae=>{s(Wt).length===0&&ae(zi)})}var Vi=d(ws,2);Tn(Vi);var Ui=d(Na),Wi=c(Ui);{var Gi=ae=>{var ye=Gh(),Ue=c(ye),yt=c(Ue),Ot=d(yt);Ot.__click=[Wh,C,de];var xr=c(Ot);Ln(xr,{size:16}),L(()=>j(yt,`${s(de).displayMissingQuantity??""} `)),v(ae,ye)},Qi=ae=>{eo(ae,{size:28,strokeWidth:3,class:"text-success m-auto"})};A(Wi,ae=>{s(de).displayMissingQuantity!=="✅ Complet"?ae(Gi):ae(Qi,!1)})}L(()=>{Te(Nt,1,`hover:bg-base-200/20 transition-colors ${s(de).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-400 bg-blue-50/30":""}`),j(bn,s(de).productName),Te(Jr,1,`${s(u).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),Te(Sn,1,Zo(s(u).groupBy==="productType"?"hidden":"")),j(Oi,` ${s(Fe).displayName??""}`),j(qi,s(Xe))}),v(Le,Nt)}),v(V,kt)});var Gr=d(er,2);{var Pt=V=>{var ue=Kh();v(V,ue)};A(Gr,V=>{Object.values(s(n)).flat().length===0&&V(Pt)})}var Ut=d(O,2);{var _n=V=>{Gf(V,{get productId(){return s(f)},get initialTab(){return s(h)},onClose:N})};A(Ut,V=>{s(f)&&V(_n)})}var Qr=d(Ut,2);{var mn=V=>{rv(V,{get productIds(){return s(_)},get products(){return s(g)},get editType(){return s(p)},onClose:P,onSuccess:$})};A(Qr,V=>{s(m)&&V(mn)})}var wr=d(Qr,2);{var xa=V=>{Pv(V,{get products(){return s(b)},onClose:M,onSuccess:D})};A(wr,V=>{s(x)&&V(xa)})}var Pa=d(wr,2);Vv(Pa,{}),L(()=>{j(fe,` ${s(a).total??""}`),Pc(Ne,s(u).searchQuery),tn(K,s(u).groupBy==="none"),tn(Z,s(u).groupBy==="store"),tn(_e,s(u).groupBy==="productType"),Te(ft,1,`hover:bg-base-100 cursor-pointer text-center ${s(u).groupBy==="store"?"hidden":""}`),Te(Vt,1,`hover:bg-base-100 cursor-pointer text-center ${s(u).groupBy==="productType"?"hidden":""}`)}),v(e,I),G()}ot(["click","input","change"]);kl();var Zh=S('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function Xh(e){var t=Zh();v(e,t)}var Fh=S('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function ep(e,t){var r=Fh(),n=d(c(r),2),a=d(c(n),2),o=c(a);L(()=>j(o,t.message)),v(e,r)}var tp=S('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function rp(e,t){var r=tp(),n=c(r),a=c(n);_s(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(a,2),i=d(c(o),2),l=c(i);L(()=>j(l,t.message||"Erreur inconnue")),v(e,r)}var np=S('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),ap=S('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),sp=S('<div class="text-base-content/60"> </div>'),op=S('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),ip=S('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),lp=S('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),cp=S('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function up(e,t){W(t,!0);let r,n=Y(null),a=Y(!0),o=Y(!1);ni(async()=>{r=Ou();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await B.initialize(r)}catch(R){const re=R instanceof Error?R.message:"Erreur lors de l'initialisation";E(n,re,!0),console.error("[App] Erreur initialisation:",R)}finally{E(a,!1)}}),Dc(()=>{B.destroy()});async function i(){if(!(!r||s(o))){E(o,!0);try{await B.forceReload(r)}catch(R){console.error("[App] Erreur lors du rechargement forcé:",R)}finally{E(o,!1)}}}const l=U(()=>s(n)||B.error),u=U(()=>s(a)||B.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var h=cp(),m=c(h),p=c(m),_=c(p),g=d(c(_),2),x=c(g);{var b=R=>{var re=np();v(R,re)};A(x,R=>{B.realtimeConnected&&R(b)})}var y=d(x,2);{var N=R=>{var re=ap();v(R,re)};A(y,R=>{B.syncing&&R(N)})}var w=d(y,2);{var P=R=>{var re=sp(),xe=c(re);L(ke=>j(xe,`Maj: ${ke??""}`),[()=>new Date(B.lastSync).toLocaleTimeString()]),v(R,re)};A(w,R=>{B.lastSync&&R(P)})}var $=d(w,2);{var k=R=>{var re=op();let xe;re.__click=i;var ke=c(re);id(ke,{class:"h-4 w-4"}),L(Q=>{xe=Te(re,1,"btn btn-outline btn-sm",null,xe,Q),re.disabled=s(o)||B.loading},[()=>({loading:s(o)||B.loading})]),v(R,re)};A($,R=>{s(n)||R(k)})}var M=d($,2);{var D=R=>{var re=ip(),xe=c(re),ke=c(xe);td(ke,{class:"mr-2 h-4 w-4"}),L(()=>Cr(xe,"href",f)),v(R,re)};A(M,R=>{s(n)&&R(D)})}var C=d(m,2),I=c(C);{var O=R=>{rp(R,{get message(){return s(l)}})},q=R=>{var re=H(),xe=z(re);{var ke=Q=>{ep(Q,{get message(){return s(l)}})};A(xe,Q=>{s(l)&&Q(ke)},!0)}v(R,re)};A(I,R=>{s(n)?R(O):R(q,!1)})}var X=d(I,2);{var Ae=R=>{Xh(R)};A(X,R=>{s(u)&&R(Ae)})}var fe=d(X,2);{var Se=R=>{Jh(R,{})},ce=R=>{var re=H(),xe=z(re);{var ke=Q=>{var ve=lp();v(Q,ve)};A(xe,Q=>{!B.loading&&!s(n)&&Q(ke)},!0)}v(R,re)};A(fe,R=>{B.enrichedProducts.length>0?R(Se):R(ce,!1)})}v(e,h),G()}ot(["click"]);vc(up,{target:document.getElementById("app_products")});
