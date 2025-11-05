(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const io=!1;var la=Array.isArray,Ji=Array.prototype.indexOf,rs=Array.from,qa=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,Yi=Object.getOwnPropertyDescriptors,Zi=Object.prototype,Xi=Array.prototype,lo=Object.getPrototypeOf,xs=Object.isExtensible;function Pn(e){return typeof e=="function"}const te=()=>{};function Fi(e){for(var t=0;t<e.length;t++)e[t]()}function co(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function uo(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const mt=2,ns=4,as=8,qr=16,Ft=32,jr=64,ss=128,It=256,aa=512,ut=1024,Pt=2048,gr=4096,Rt=8192,Br=16384,os=32768,Lr=65536,Ps=1<<17,el=1<<18,un=1<<19,tl=1<<20,ja=1<<21,ca=1<<22,Ir=1<<23,Cr=Symbol("$state"),fo=Symbol("legacy props"),rl=Symbol(""),Nn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function vo(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function nl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function al(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ol(e){throw new Error("https://svelte.dev/e/effect_orphan")}function il(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ll(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function cl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ul(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function dl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function fl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ua=1,da=2,ho=4,vl=8,hl=16,pl=1,_l=2,ml=4,gl=8,bl=16,yl=1,wl=2,rt=Symbol(),Sl="http://www.w3.org/1999/xhtml",xl="http://www.w3.org/2000/svg",Pl="@attach";function El(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function $l(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let kl=!1;function po(e){return e===this.v}function _o(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Tl(e,t){return e!==t}function mo(e){return!_o(e,this.v)}let dn=!1,Al=!1;function Nl(){dn=!0}let Ze=null;function rn(e){Ze=e}function K(e,t=!1,r){Ze={p:Ze,c:null,e:null,s:e,x:null,l:dn&&!t?{s:null,u:null,$:[]}:null}}function J(e){var t=Ze,r=t.e;if(r!==null){t.e=null;for(var n of r)Do(n)}return Ze=t.p,{}}function fn(){return!dn||Ze!==null&&Ze.l===null}let Tr=[];function go(){var e=Tr;Tr=[],Fi(e)}function Dr(e){if(Tr.length===0&&!In){var t=Tr;queueMicrotask(()=>{t===Tr&&go()})}Tr.push(e)}function Il(){for(;Tr.length>0;)go()}const Cl=new WeakMap;function bo(e){var t=ye;if(t===null)return xe.f|=Ir,e;if((t.f&os)===0){if((t.f&ss)===0)throw!t.parent&&e instanceof Error&&yo(e),e;t.b.error(e)}else nn(e,t)}function nn(e,t){for(;t!==null;){if((t.f&ss)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&yo(e),e}function yo(e){const t=Cl.get(e);t&&(qa(e,"message",{value:t.message}),qa(e,"stack",{value:t.stack}))}const Zn=new Set;let je=null,Fn=null,Ba=new Set,Vt=[],fa=null,La=!1,In=!1;class Nt{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#l=[];#o=[];#i=[];#a=[];#s=[];#d=[];skipped_effects=new Set;process(t){Vt=[],Fn=null;var r=Nt.apply(this);for(const o of t)this.#v(o);if(this.#c===0){this.#f();var n=this.#o,a=this.#i;this.#o=[],this.#i=[],this.#a=[],Fn=this,je=null,Es(n),Es(a),Fn=null,this.#u?.resolve()}else this.#n(this.#o),this.#n(this.#i),this.#n(this.#a);r();for(const o of this.#l)On(o);this.#l=[]}#v(t){t.f^=ut;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Ft|jr))!==0,o=a&&(n&ut)!==0,i=o||(n&Rt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=ut:(n&ns)!==0?this.#i.push(r):(n&ut)===0&&((n&ca)!==0&&r.b?.is_pending()?this.#l.push(r):ma(r)&&((r.f&qr)!==0&&this.#a.push(r),On(r)));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#n(t){for(const r of t)((r.f&Pt)!==0?this.#s:this.#d).push(r),ht(r,ut);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){je=this}deactivate(){je=null}flush(){if(Vt.length>0){if(this.activate(),wo(),je!==null&&je!==this)return}else this.#c===0&&this.#f();this.deactivate();for(const t of Ba)if(Ba.delete(t),t(),je!==null)break}#f(){for(const t of this.#r)t();if(this.#r.clear(),Zn.size>1){this.#e.clear();let t=!0;for(const r of Zn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;So(n)}if(Vt.length>0){je=r;const n=Nt.apply(r);for(const a of Vt)r.#v(a);Vt=[],n()}}je=null}Zn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#s)ht(t,Pt),Mr(t);for(const t of this.#d)ht(t,gr),Mr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=co()).promise}static ensure(){if(je===null){const t=je=new Nt;Zn.add(je),In||Nt.enqueue(()=>{je===t&&t.flush()})}return je}static enqueue(t){Dr(t)}static apply(t){return te}}function Dl(e){var t=In;In=!0;try{for(var r;;){if(Il(),Vt.length===0&&(je?.flush(),Vt.length===0))return fa=null,r;wo()}}finally{In=t}}function wo(){var e=en;La=!0;try{var t=0;for(As(!0);Vt.length>0;){var r=Nt.ensure();if(t++>1e3){var n,a;Ml()}r.process(Vt),vr.clear()}}finally{La=!1,As(e),fa=null}}function Ml(){try{il()}catch(e){nn(e,fa)}}let kr=null;function Es(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Br|Rt))===0&&ma(n)&&(kr=[],On(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Oo(n):n.fn=null),kr?.length>0)){vr.clear();for(const a of kr)On(a);kr=[]}}kr=null}}function So(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&mt)!==0?So(t):(r&(ca|qr))!==0&&(ht(t,Pt),Mr(t))}}function Mr(e){for(var t=fa=e;t.parent!==null;){t=t.parent;var r=t.f;if(La&&t===ye&&(r&qr)!==0)return;if((r&(jr|Ft))!==0){if((r&ut)===0)return;t.f^=ut}}Vt.push(t)}function xo(e){let t=0,r=_r(0),n;return()=>{Yl()&&(s(r),ds(()=>(t===0&&(n=hn(()=>e(()=>Ut(r)))),t+=1,()=>{Dr(()=>{t-=1,t===0&&(n?.(),n=void 0,Ut(r))})})))}}var Rl=Lr|un|ss;function Ol(e,t,r){new ql(e,t,r)}class ql{parent;#e=!1;#r;#c=null;#u;#l;#o;#i=null;#a=null;#s=null;#d=null;#v=0;#n=0;#f=!1;#h=null;#t=()=>{this.#h&&an(this.#h,this.#v)};#g=xo(()=>(this.#h=_r(this.#v),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#l=n,this.parent=ye.b,this.#e=!!this.#u.pending,this.#o=rr(()=>{ye.b=this;{try{this.#i=lt(()=>n(this.#r))}catch(a){this.error(a)}this.#n>0?this.#_():this.#e=!1}},Rl)}#w(){try{this.#i=lt(()=>this.#l(this.#r))}catch(t){this.error(t)}this.#e=!1}#S(){const t=this.#u.pending;t&&(this.#a=lt(()=>t(this.#r)),Nt.enqueue(()=>{this.#i=this.#p(()=>(Nt.ensure(),lt(()=>this.#l(this.#r)))),this.#n>0?this.#_():(Yt(this.#a,()=>{this.#a=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#p(t){var r=ye,n=xe,a=Ze;Wt(this.#o),_t(this.#o),rn(this.#o.ctx);try{return t()}catch(o){return bo(o),null}finally{Wt(r),_t(n),rn(a)}}#_(){const t=this.#u.pending;this.#i!==null&&(this.#d=document.createDocumentFragment(),jl(this.#i,this.#d)),this.#a===null&&(this.#a=lt(()=>t(this.#r)))}#m(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t);return}this.#n+=t,this.#n===0&&(this.#e=!1,this.#a&&Yt(this.#a,()=>{this.#a=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),Dr(()=>{Nt.ensure().flush()}))}update_pending_count(t){this.#m(t),this.#v+=t,Ba.add(this.#t)}get_effect_pending(){return this.#g(),s(this.#h)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#f||!r&&!n)throw t;this.#i&&(ct(this.#i),this.#i=null),this.#a&&(ct(this.#a),this.#a=null),this.#s&&(ct(this.#s),this.#s=null);var a=!1,o=!1;const i=()=>{if(a){$l();return}a=!0,o&&fl(),Nt.ensure(),this.#v=0,this.#s!==null&&Yt(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#i=this.#p(()=>(this.#f=!1,lt(()=>this.#l(this.#r)))),this.#n>0?this.#_():this.#e=!1};var l=xe;try{_t(null),o=!0,r?.(t,i),o=!1}catch(u){nn(u,this.#o&&this.#o.parent)}finally{_t(l)}n&&Dr(()=>{this.#s=this.#p(()=>{this.#f=!0;try{return lt(()=>{n(this.#r,()=>t,()=>i)})}catch(u){return nn(u,this.#o.parent),null}finally{this.#f=!1}})})}}function jl(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:zn(r);t.append(r),r=a}}function Po(e,t,r){const n=fn()?va:is;if(t.length===0){r(e.map(n));return}var a=je,o=ye,i=Bl();Promise.all(t.map(l=>Ll(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(u){(o.f&Br)===0&&nn(u,o)}a?.deactivate(),Eo()}).catch(l=>{nn(l,o)})}function Bl(){var e=ye,t=xe,r=Ze,n=je;return function(){Wt(e),_t(t),rn(r),n?.activate()}}function Eo(){Wt(null),_t(null),rn(null)}function va(e){var t=mt|Pt,r=xe!==null&&(xe.f&mt)!==0?xe:null;return ye===null||r!==null&&(r.f&It)!==0?t|=It:ye.f|=un,{ctx:Ze,deps:null,effects:null,equals:po,f:t,fn:e,reactions:null,rv:0,v:rt,wv:0,parent:r??ye,ac:null}}function Ll(e,t){let r=ye;r===null&&nl();var n=r.b,a=void 0,o=_r(rt),i=!xe,l=new Map;return Xl(()=>{var u=co();a=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(p){u.reject(p)}var v=je,h=n.is_pending();i&&(n.update_pending_count(1),h||(v.increment(),l.get(v)?.reject(Nn),l.set(v,u)));const m=(p,_=void 0)=>{h||v.activate(),_?_!==Nn&&(o.f|=Ir,an(o,_)):((o.f&Ir)!==0&&(o.f^=Ir),an(o,p)),i&&(n.update_pending_count(-1),h||v.decrement()),Eo()};u.promise.then(m,p=>m(null,p||"unknown"))}),Co(()=>{for(const u of l.values())u.reject(Nn)}),new Promise(u=>{function v(h){function m(){h===a?u(o):v(a)}h.then(m,m)}v(a)})}function W(e){const t=va(e);return Bo(t),t}function is(e){const t=va(e);return t.equals=mo,t}function $o(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)ct(t[r])}}function zl(e){for(var t=e.parent;t!==null;){if((t.f&mt)===0)return t;t=t.parent}return null}function ls(e){var t,r=ye;Wt(zl(e));try{$o(e),t=Uo(e)}finally{Wt(r)}return t}function ko(e){var t=ls(e);if(e.equals(t)||(e.v=t,e.wv=zo()),!zr){var r=(dr||(e.f&It)!==0)&&e.deps!==null?gr:ut;ht(e,r)}}const vr=new Map;function _r(e,t){var r={f:0,v:e,reactions:null,equals:po,rv:0,wv:0};return r}function Z(e,t){const r=_r(e);return Bo(r),r}function Vl(e,t=!1,r=!0){const n=_r(e);return t||(n.equals=mo),dn&&r&&Ze!==null&&Ze.l!==null&&(Ze.l.s??=[]).push(n),n}function T(e,t,r=!1){xe!==null&&(!Mt||(xe.f&Ps)!==0)&&fn()&&(xe.f&(mt|qr|ca|Ps))!==0&&!Zt?.includes(e)&&dl();let n=r?Ue(t):t;return an(e,n)}function an(e,t){if(!e.equals(t)){var r=e.v;zr?vr.set(e,t):vr.set(e,r),e.v=t;var n=Nt.ensure();n.capture(e,r),(e.f&mt)!==0&&((e.f&Pt)!==0&&ls(e),ht(e,(e.f&It)===0?ut:gr)),e.wv=zo(),To(e,Pt),fn()&&ye!==null&&(ye.f&ut)!==0&&(ye.f&(Ft|jr))===0&&(At===null?tc([e]):At.push(e))}return t}function Ut(e){T(e,e.v+1)}function To(e,t){var r=e.reactions;if(r!==null)for(var n=fn(),a=r.length,o=0;o<a;o++){var i=r[o],l=i.f;if(!(!n&&i===ye)){var u=(l&Pt)===0;u&&ht(i,t),(l&mt)!==0?To(i,gr):u&&((l&qr)!==0&&kr!==null&&kr.push(i),Mr(i))}}}function Ue(e){if(typeof e!="object"||e===null||Cr in e)return e;const t=lo(e);if(t!==Zi&&t!==Xi)return e;var r=new Map,n=la(e),a=Z(0),o=Xt,i=l=>{if(Xt===o)return l();var u=xe,v=Xt;_t(null),Is(o);var h=l();return _t(u),Is(v),h};return n&&r.set("length",Z(e.length)),new Proxy(e,{defineProperty(l,u,v){(!("value"in v)||v.configurable===!1||v.enumerable===!1||v.writable===!1)&&cl();var h=r.get(u);return h===void 0?h=i(()=>{var m=Z(v.value);return r.set(u,m),m}):T(h,v.value,!0),!0},deleteProperty(l,u){var v=r.get(u);if(v===void 0){if(u in l){const h=i(()=>Z(rt));r.set(u,h),Ut(a)}}else T(v,rt),Ut(a);return!0},get(l,u,v){if(u===Cr)return e;var h=r.get(u),m=u in l;if(h===void 0&&(!m||fr(l,u)?.writable)&&(h=i(()=>{var _=Ue(m?l[u]:rt),g=Z(_);return g}),r.set(u,h)),h!==void 0){var p=s(h);return p===rt?void 0:p}return Reflect.get(l,u,v)},getOwnPropertyDescriptor(l,u){var v=Reflect.getOwnPropertyDescriptor(l,u);if(v&&"value"in v){var h=r.get(u);h&&(v.value=s(h))}else if(v===void 0){var m=r.get(u),p=m?.v;if(m!==void 0&&p!==rt)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return v},has(l,u){if(u===Cr)return!0;var v=r.get(u),h=v!==void 0&&v.v!==rt||Reflect.has(l,u);if(v!==void 0||ye!==null&&(!h||fr(l,u)?.writable)){v===void 0&&(v=i(()=>{var p=h?Ue(l[u]):rt,_=Z(p);return _}),r.set(u,v));var m=s(v);if(m===rt)return!1}return h},set(l,u,v,h){var m=r.get(u),p=u in l;if(n&&u==="length")for(var _=v;_<m.v;_+=1){var g=r.get(_+"");g!==void 0?T(g,rt):_ in l&&(g=i(()=>Z(rt)),r.set(_+"",g))}if(m===void 0)(!p||fr(l,u)?.writable)&&(m=i(()=>Z(void 0)),T(m,Ue(v)),r.set(u,m));else{p=m.v!==rt;var x=i(()=>Ue(v));T(m,x)}var b=Reflect.getOwnPropertyDescriptor(l,u);if(b?.set&&b.set.call(h,v),!p){if(n&&typeof u=="string"){var y=r.get("length"),N=Number(u);Number.isInteger(N)&&N>=y.v&&T(y,N+1)}Ut(a)}return!0},ownKeys(l){s(a);var u=Reflect.ownKeys(l).filter(m=>{var p=r.get(m);return p===void 0||p.v!==rt});for(var[v,h]of r)h.v!==rt&&!(v in l)&&u.push(v);return u},setPrototypeOf(){ul()}})}function $s(e){try{if(e!==null&&typeof e=="object"&&Cr in e)return e[Cr]}catch{}return e}function Ul(e,t){return Object.is($s(e),$s(t))}var ks,Ao,No,Io;function Wl(){if(ks===void 0){ks=window,Ao=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;No=fr(t,"firstChild").get,Io=fr(t,"nextSibling").get,xs(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),xs(r)&&(r.__t=void 0)}}function er(e=""){return document.createTextNode(e)}function sn(e){return No.call(e)}function zn(e){return Io.call(e)}function c(e,t){return sn(e)}function O(e,t=!1){{var r=sn(e);return r instanceof Comment&&r.data===""?zn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=zn(n);return n}function Gl(e){e.textContent=""}function ha(){return!1}function Ql(e,t){if(t){const r=document.body;e.autofocus=!0,Dr(()=>{document.activeElement===r&&e.focus()})}}let Ts=!1;function Hl(){Ts||(Ts=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function pa(e){var t=xe,r=ye;_t(null),Wt(null);try{return e()}finally{_t(t),Wt(r)}}function cs(e,t,r,n=r){e.addEventListener(t,()=>pa(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Hl()}function Kl(e){ye===null&&xe===null&&ol(),xe!==null&&(xe.f&It)!==0&&ye===null&&sl(),zr&&al()}function Jl(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function tr(e,t,r,n=!0){var a=ye;a!==null&&(a.f&Rt)!==0&&(e|=Rt);var o={ctx:Ze,deps:null,nodes_start:null,nodes_end:null,f:e|Pt,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{On(o),o.f|=os}catch(u){throw ct(o),u}else t!==null&&Mr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&un)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&Jl(i,a),xe!==null&&(xe.f&mt)!==0&&(e&jr)===0)){var l=xe;(l.effects??=[]).push(i)}}return o}function Yl(){return xe!==null&&!Mt}function Co(e){const t=tr(as,null,!1);return ht(t,ut),t.teardown=e,t}function vn(e){Kl();var t=ye.f,r=!xe&&(t&Ft)!==0&&(t&os)===0;if(r){var n=Ze;(n.e??=[]).push(e)}else return Do(e)}function Do(e){return tr(ns|tl,e,!1)}function Zl(e){Nt.ensure();const t=tr(jr|un,e,!0);return(r={})=>new Promise(n=>{r.outro?Yt(t,()=>{ct(t),n(void 0)}):(ct(t),n(void 0))})}function us(e){return tr(ns,e,!1)}function Xl(e){return tr(ca|un,e,!0)}function ds(e,t=0){return tr(as|t,e,!0)}function B(e,t=[],r=[]){Po(t,r,n=>{tr(as,()=>e(...n.map(s)),!0)})}function rr(e,t=0){var r=tr(qr|t,e,!0);return r}function lt(e,t=!0){return tr(Ft|un,e,!0,t)}function Mo(e){var t=e.teardown;if(t!==null){const r=zr,n=xe;Ns(!0),_t(null);try{t.call(null)}finally{Ns(r),_t(n)}}}function Ro(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&pa(()=>{a.abort(Nn)});var n=r.next;(r.f&jr)!==0?r.parent=null:ct(r,t),r=n}}function Fl(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Ft)===0&&ct(t),t=r}}function ct(e,t=!0){var r=!1;(t||(e.f&el)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(ec(e.nodes_start,e.nodes_end),r=!0),Ro(e,t&&!r),sa(e,0),ht(e,Br);var n=e.transitions;if(n!==null)for(const o of n)o.stop();Mo(e);var a=e.parent;a!==null&&a.first!==null&&Oo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function ec(e,t){for(;e!==null;){var r=e===t?null:zn(e);e.remove(),e=r}}function Oo(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Yt(e,t){var r=[];fs(e,r,!0),qo(r,()=>{ct(e),t&&t()})}function qo(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function fs(e,t,r){if((e.f&Rt)===0){if(e.f^=Rt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,o=(n.f&Lr)!==0||(n.f&Ft)!==0;fs(n,t,o?r:!1),n=a}}}function _a(e){jo(e,!0)}function jo(e,t){if((e.f&Rt)!==0){e.f^=Rt,(e.f&ut)===0&&(ht(e,Pt),Mr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&Lr)!==0||(r.f&Ft)!==0;jo(r,a?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let en=!1;function As(e){en=e}let zr=!1;function Ns(e){zr=e}let xe=null,Mt=!1;function _t(e){xe=e}let ye=null;function Wt(e){ye=e}let Zt=null;function Bo(e){xe!==null&&(Zt===null?Zt=[e]:Zt.push(e))}let ft=null,xt=0,At=null;function tc(e){At=e}let Lo=1,Rn=0,Xt=Rn;function Is(e){Xt=e}let dr=!1;function zo(){return++Lo}function ma(e){var t=e.f;if((t&Pt)!==0)return!0;if((t&gr)!==0){var r=e.deps,n=(t&It)!==0;if(r!==null){var a,o,i=(t&aa)!==0,l=n&&ye!==null&&!dr,u=r.length;if((i||l)&&(ye===null||(ye.f&Br)===0)){var v=e,h=v.parent;for(a=0;a<u;a++)o=r[a],(i||!o?.reactions?.includes(v))&&(o.reactions??=[]).push(v);i&&(v.f^=aa),l&&h!==null&&(h.f&It)===0&&(v.f^=It)}for(a=0;a<u;a++)if(o=r[a],ma(o)&&ko(o),o.wv>e.wv)return!0}(!n||ye!==null&&!dr)&&ht(e,ut)}return!1}function Vo(e,t,r=!0){var n=e.reactions;if(n!==null&&!Zt?.includes(e))for(var a=0;a<n.length;a++){var o=n[a];(o.f&mt)!==0?Vo(o,t,!1):t===o&&(r?ht(o,Pt):(o.f&ut)!==0&&ht(o,gr),Mr(o))}}function Uo(e){var t=ft,r=xt,n=At,a=xe,o=dr,i=Zt,l=Ze,u=Mt,v=Xt,h=e.f;ft=null,xt=0,At=null,dr=(h&It)!==0&&(Mt||!en||xe===null),xe=(h&(Ft|jr))===0?e:null,Zt=null,rn(e.ctx),Mt=!1,Xt=++Rn,e.ac!==null&&(pa(()=>{e.ac.abort(Nn)}),e.ac=null);try{e.f|=ja;var m=e.fn,p=m(),_=e.deps;if(ft!==null){var g;if(sa(e,xt),_!==null&&xt>0)for(_.length=xt+ft.length,g=0;g<ft.length;g++)_[xt+g]=ft[g];else e.deps=_=ft;if(!dr||(h&mt)!==0&&e.reactions!==null)for(g=xt;g<_.length;g++)(_[g].reactions??=[]).push(e)}else _!==null&&xt<_.length&&(sa(e,xt),_.length=xt);if(fn()&&At!==null&&!Mt&&_!==null&&(e.f&(mt|gr|Pt))===0)for(g=0;g<At.length;g++)Vo(At[g],e);return a!==null&&a!==e&&(Rn++,At!==null&&(n===null?n=At:n.push(...At))),(e.f&Ir)!==0&&(e.f^=Ir),p}catch(x){return bo(x)}finally{e.f^=ja,ft=t,xt=r,At=n,xe=a,dr=o,Zt=i,rn(l),Mt=u,Xt=v}}function rc(e,t){let r=t.reactions;if(r!==null){var n=Ji.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&mt)!==0&&(ft===null||!ft.includes(t))&&(ht(t,gr),(t.f&(It|aa))===0&&(t.f^=aa),$o(t),sa(t,0))}function sa(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)rc(e,r[n])}function On(e){var t=e.f;if((t&Br)===0){ht(e,ut);var r=ye,n=en;ye=e,en=!0;try{(t&qr)!==0?Fl(e):Ro(e),Mo(e);var a=Uo(e);e.teardown=typeof a=="function"?a:null,e.wv=Lo;var o;io&&Al&&(e.f&Pt)!==0&&e.deps}finally{en=n,ye=r}}}async function nc(){await Promise.resolve(),Dl()}function s(e){var t=e.f,r=(t&mt)!==0;if(xe!==null&&!Mt){var n=ye!==null&&(ye.f&Br)!==0;if(!n&&!Zt?.includes(e)){var a=xe.deps;if((xe.f&ja)!==0)e.rv<Rn&&(e.rv=Rn,ft===null&&a!==null&&a[xt]===e?xt++:ft===null?ft=[e]:(!dr||!ft.includes(e))&&ft.push(e));else{(xe.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[xe]:o.includes(xe)||o.push(xe)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&It)===0&&(i.f^=It)}if(zr){if(vr.has(e))return vr.get(e);if(r){i=e;var u=i.v;return((i.f&ut)===0&&i.reactions!==null||Wo(i))&&(u=ls(i)),vr.set(i,u),u}}else r&&(i=e,ma(i)&&ko(i));if((e.f&Ir)!==0)throw e.v;return e.v}function Wo(e){if(e.v===rt)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(vr.has(t)||(t.f&mt)!==0&&Wo(t))return!0;return!1}function hn(e){var t=Mt;try{return Mt=!0,e()}finally{Mt=t}}const ac=-7169;function ht(e,t){e.f=e.f&ac|t}function sc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const oc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ic(e){return oc.includes(e)}const lc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function cc(e){return e=e.toLowerCase(),lc[e]??e}const uc=["touchstart","touchmove"];function dc(e){return uc.includes(e)}const Go=new Set,za=new Set;function Qo(e,t,r,n={}){function a(o){if(n.capture||Tn.call(t,o),!o.cancelBubble)return pa(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Dr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Cs(e,t,r,n={}){var a=Qo(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function dt(e){for(var t=0;t<e.length;t++)Go.add(e[t]);for(var r of za)r(e)}let Ds=null;function Tn(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;Ds=e;var i=0,l=Ds===e&&e.__root;if(l){var u=a.indexOf(l);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var v=a.indexOf(t);if(v===-1)return;u<=v&&(i=u)}if(o=a[i]||e.target,o!==t){qa(e,"currentTarget",{configurable:!0,get(){return o||r}});var h=xe,m=ye;_t(null),Wt(null);try{for(var p,_=[];o!==null;){var g=o.assignedSlot||o.parentNode||o.host||null;try{var x=o["__"+n];if(x!=null&&(!o.disabled||e.target===o))if(la(x)){var[b,...y]=x;b.apply(o,[e,...y])}else x.call(o,e)}catch(N){p?_.push(N):p=N}if(e.cancelBubble||g===t||g===null)break;o=g}if(p){for(let N of _)queueMicrotask(()=>{throw N});throw p}}finally{e.__root=t,delete e.currentTarget,_t(h),Wt(m)}}}function Ho(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function on(e,t){var r=ye;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function w(e,t){var r=(t&yl)!==0,n=(t&wl)!==0,a,o=!e.startsWith("<!>");return()=>{a===void 0&&(a=Ho(o?e:"<!>"+e),r||(a=sn(a)));var i=n||Ao?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=sn(i),u=i.lastChild;on(l,u)}else on(i,i);return i}}function fc(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Ho(a),l=sn(i);o=sn(l)}var u=o.cloneNode(!0);return on(u,u),u}}function vc(e,t){return fc(e,t,"svg")}function Ye(e=""){{var t=er(e+"");return on(t,t),t}}function H(){var e=document.createDocumentFragment(),t=document.createComment(""),r=er();return e.append(t,r),on(t,r),e}function f(e,t){e!==null&&e.before(t)}function j(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function hc(e,t){return pc(e,t)}const Zr=new Map;function pc(e,{target:t,anchor:r,props:n={},events:a,context:o,intro:i=!0}){Wl();var l=new Set,u=m=>{for(var p=0;p<m.length;p++){var _=m[p];if(!l.has(_)){l.add(_);var g=dc(_);t.addEventListener(_,Tn,{passive:g});var x=Zr.get(_);x===void 0?(document.addEventListener(_,Tn,{passive:g}),Zr.set(_,1)):Zr.set(_,x+1)}}};u(rs(Go)),za.add(u);var v=void 0,h=Zl(()=>{var m=r??t.appendChild(er());return Ol(m,{pending:()=>{}},p=>{if(o){K({});var _=Ze;_.c=o}a&&(n.$$events=a),v=e(p,n)||{},o&&J()}),()=>{for(var p of l){t.removeEventListener(p,Tn);var _=Zr.get(p);--_===0?(document.removeEventListener(p,Tn),Zr.delete(p)):Zr.set(p,_)}za.delete(u),m!==r&&m.parentNode?.removeChild(m)}});return _c.set(v,h),v}let _c=new WeakMap;function k(e,t,r=!1){var n=e,a=null,o=null,i=rt,l=r?Lr:0,u=!1;const v=(_,g=!0)=>{u=!0,p(g,_)};var h=null;function m(){h!==null&&(h.lastChild.remove(),n.before(h),h=null);var _=i?a:o,g=i?o:a;_&&_a(_),g&&Yt(g,()=>{i?o=null:a=null})}const p=(_,g)=>{if(i!==(i=_)){var x=ha(),b=n;if(x&&(h=document.createDocumentFragment(),h.append(b=er())),i?a??=g&&lt(()=>g(b)):o??=g&&lt(()=>g(b)),x){var y=je,N=i?a:o,S=i?o:a;N&&y.skipped_effects.delete(N),S&&y.skipped_effects.add(S),y.add_callback(m)}else m()}};rr(()=>{u=!1,t(v),u||p(null,null)},l)}function mc(e,t,r){var n=e,a=rt,o,i,l=null,u=fn()?Tl:_o;function v(){o&&Yt(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}rr(()=>{if(u(a,a=t())){var h=n,m=ha();m&&(l=document.createDocumentFragment(),l.append(h=er())),i=lt(()=>r(h)),m?je.add_callback(v):v()}})}function Va(e,t){return t}function gc(e,t,r){for(var n=e.items,a=[],o=t.length,i=0;i<o;i++)fs(t[i].e,a,!0);var l=o>0&&a.length===0&&r!==null;if(l){var u=r.parentNode;Gl(u),u.append(r),n.clear(),zt(e,t[0].prev,t[o-1].next)}qo(a,()=>{for(var v=0;v<o;v++){var h=t[v];l||(n.delete(h.k),zt(e,h.prev,h.next)),ct(h.e,!l)}})}function nt(e,t,r,n,a,o=null){var i=e,l={flags:t,items:new Map,first:null},u=(t&ho)!==0;if(u){var v=e;i=v.appendChild(er())}var h=null,m=!1,p=new Map,_=is(()=>{var y=r();return la(y)?y:y==null?[]:rs(y)}),g,x;function b(){bc(x,g,l,p,i,a,t,n,r),o!==null&&(g.length===0?h?_a(h):h=lt(()=>o(i)):h!==null&&Yt(h,()=>{h=null}))}rr(()=>{x??=ye,g=s(_);var y=g.length;if(!(m&&y===0)){m=y===0;var N,S,P,E;if(ha()){var $=new Set,I=je;for(S=0;S<y;S+=1){P=g[S],E=n(P,S);var D=l.items.get(E)??p.get(E);D?(t&(ua|da))!==0&&Ko(D,P,S,t):(N=Jo(null,l,null,null,P,E,S,a,t,r,!0),p.set(E,N)),$.add(E)}for(const[ue,V]of l.items)$.has(ue)||I.skipped_effects.add(V.e);I.add_callback(b)}else b();s(_)}})}function bc(e,t,r,n,a,o,i,l,u){var v=(i&vl)!==0,h=(i&(ua|da))!==0,m=t.length,p=r.items,_=r.first,g=_,x,b=null,y,N=[],S=[],P,E,$,I;if(v)for(I=0;I<m;I+=1)P=t[I],E=l(P,I),$=p.get(E),$!==void 0&&($.a?.measure(),(y??=new Set).add($));for(I=0;I<m;I+=1){if(P=t[I],E=l(P,I),$=p.get(E),$===void 0){var D=n.get(E);if(D!==void 0){n.delete(E),p.set(E,D);var ue=b?b.next:g;zt(r,b,D),zt(r,D,ue),Ia(D,ue,a),b=D}else{var V=g?g.e.nodes_start:a;b=Jo(V,r,b,b===null?r.first:b.next,P,E,I,o,i,u)}p.set(E,b),N=[],S=[],g=b.next;continue}if(h&&Ko($,P,I,i),($.e.f&Rt)!==0&&(_a($.e),v&&($.a?.unfix(),(y??=new Set).delete($))),$!==g){if(x!==void 0&&x.has($)){if(N.length<S.length){var z=S[0],q;b=z.prev;var X=N[0],R=N[N.length-1];for(q=0;q<N.length;q+=1)Ia(N[q],z,a);for(q=0;q<S.length;q+=1)x.delete(S[q]);zt(r,X.prev,R.next),zt(r,b,X),zt(r,R,z),g=z,b=R,I-=1,N=[],S=[]}else x.delete($),Ia($,g,a),zt(r,$.prev,$.next),zt(r,$,b===null?r.first:b.next),zt(r,b,$),b=$;continue}for(N=[],S=[];g!==null&&g.k!==E;)(g.e.f&Rt)===0&&(x??=new Set).add(g),S.push(g),g=g.next;if(g===null)continue;$=g}N.push($),b=$,g=$.next}if(g!==null||x!==void 0){for(var G=x===void 0?[]:rs(x);g!==null;)(g.e.f&Rt)===0&&G.push(g),g=g.next;var re=G.length;if(re>0){var se=(i&ho)!==0&&m===0?a:null;if(v){for(I=0;I<re;I+=1)G[I].a?.measure();for(I=0;I<re;I+=1)G[I].a?.fix()}gc(r,G,se)}}v&&Dr(()=>{if(y!==void 0)for($ of y)$.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var C of n.values())ct(C.e);n.clear()}function Ko(e,t,r,n){(n&ua)!==0&&an(e.v,t),(n&da)!==0?an(e.i,r):e.i=r}function Jo(e,t,r,n,a,o,i,l,u,v,h){var m=(u&ua)!==0,p=(u&hl)===0,_=m?p?Vl(a,!1,!1):_r(a):a,g=(u&da)===0?i:_r(i),x={i:g,v:_,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=er())}return x.e=lt(()=>l(e,_,g,v),kl),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?h||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function Ia(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=zn(o);a.before(o),o=i}}function zt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function oe(e,t,...r){var n=e,a=te,o;rr(()=>{a!==(a=t())&&(o&&(ct(o),o=null),o=lt(()=>a(n,...r)))},Lr)}function Ar(e,t,r){var n=e,a,o,i=null,l=null;function u(){o&&(Yt(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}rr(()=>{if(a!==(a=t())){var v=ha();if(a){var h=n;v&&(i=document.createDocumentFragment(),i.append(h=er()),o&&je.skipped_effects.add(o)),l=lt(()=>r(h,a))}v?je.add_callback(u):u()}},Lr)}function yc(e,t,r,n,a,o){var i,l,u=null,v=e,h;rr(()=>{const m=t()||null;var p=xl;m!==i&&(h&&(m===null?Yt(h,()=>{h=null,l=null}):m===l?_a(h):ct(h)),m&&m!==l&&(h=lt(()=>{if(u=document.createElementNS(p,m),on(u,u),n){var _=u.appendChild(er());n(u,_)}ye.nodes_end=u,v.before(u)})),i=m,i&&(l=i))},Lr)}function wc(e,t){var r=void 0,n;rr(()=>{r!==(r=t())&&(n&&(ct(n),n=null),r&&(n=lt(()=>{us(()=>r(e))})))})}function Yo(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Yo(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Sc(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Yo(e))&&(n&&(n+=" "),n+=t);return n}function Zo(e){return typeof e=="object"?Sc(e):e??""}const Ms=[...` 	
\r\f \v\uFEFF`];function xc(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+o;(i===0||Ms.includes(n[i-1]))&&(l===n.length||Ms.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Rs(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var o=e[a];o!=null&&o!==""&&(n+=" "+a+": "+o+r)}return n}function Ca(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Pc(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,u=[];n&&u.push(...Object.keys(n).map(Ca)),a&&u.push(...Object.keys(a).map(Ca));var v=0,h=-1;const x=e.length;for(var m=0;m<x;m++){var p=e[m];if(l?p==="/"&&e[m-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[m+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?i++:p===")"&&i--,!l&&o===!1&&i===0){if(p===":"&&h===-1)h=m;else if(p===";"||m===x-1){if(h!==-1){var _=Ca(e.substring(v,h).trim());if(!u.includes(_)){p!==";"&&m++;var g=e.substring(v,m).trim();r+=" "+g+";"}}v=m+1,h=-1}}}}return n&&(r+=Rs(n)),a&&(r+=Rs(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function ke(e,t,r,n,a,o){var i=e.__className;if(i!==r||i===void 0){var l=xc(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&a!==o)for(var u in o){var v=!!o[u];(a==null||v!==!!a[u])&&e.classList.toggle(u,v)}return o}function Da(e,t={},r,n){for(var a in r){var o=r[a];t[a]!==o&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,n))}}function Xo(e,t,r,n){var a=e.__style;if(a!==t){var o=Pc(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(Da(e,r?.[0],n[0]),Da(e,r?.[1],n[1],"important")):Da(e,r,n));return n}function oa(e,t,r=!1){if(e.multiple){if(t==null)return;if(!la(t))return El();for(var n of e.options)n.selected=t.includes(Cn(n));return}for(n of e.options){var a=Cn(n);if(Ul(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Fo(e){var t=new MutationObserver(()=>{oa(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Co(()=>{t.disconnect()})}function Nr(e,t,r=t){var n=!0;cs(e,"change",a=>{var o=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),Cn);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&Cn(l)}r(i)}),us(()=>{var a=t();if(oa(e,a,n),n&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=Cn(o),r(a))}e.__value=a,n=!1}),Fo(e)}function Cn(e){return"__value"in e?e.__value:e.value}const En=Symbol("class"),$n=Symbol("style"),ei=Symbol("is custom element"),ti=Symbol("is html");function Ec(e,t){var r=ga(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function tn(e,t){var r=ga(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function $c(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Rr(e,t,r,n){var a=ga(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[rl]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ri(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function kc(e,t,r,n,a=!1,o=!1){var i=ga(e),l=i[ei],u=!i[ti],v=t||{},h=e.tagName==="OPTION";for(var m in t)m in r||(r[m]=null);r.class?r.class=Zo(r.class):r[En]&&(r.class=null),r[$n]&&(r.style??=null);var p=ri(e);for(const P in r){let E=r[P];if(h&&P==="value"&&E==null){e.value=e.__value="",v[P]=E;continue}if(P==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";ke(e,_,E,n,t?.[En],r[En]),v[P]=E,v[En]=r[En];continue}if(P==="style"){Xo(e,E,t?.[$n],r[$n]),v[P]=E,v[$n]=r[$n];continue}var g=v[P];if(!(E===g&&!(E===void 0&&e.hasAttribute(P)))){v[P]=E;var x=P[0]+P[1];if(x!=="$$")if(x==="on"){const $={},I="$$"+P;let D=P.slice(2);var b=ic(D);if(sc(D)&&(D=D.slice(0,-7),$.capture=!0),!b&&g){if(E!=null)continue;e.removeEventListener(D,v[I],$),v[I]=null}if(E!=null)if(b)e[`__${D}`]=E,dt([D]);else{let ue=function(V){v[P].call(this,V)};var S=ue;v[I]=Qo(D,e,ue,$)}else b&&(e[`__${D}`]=void 0)}else if(P==="style")Rr(e,P,E);else if(P==="autofocus")Ql(e,!!E);else if(!l&&(P==="__value"||P==="value"&&E!=null))e.value=e.__value=E;else if(P==="selected"&&h)$c(e,E);else{var y=P;u||(y=cc(y));var N=y==="defaultValue"||y==="defaultChecked";if(E==null&&!l&&!N)if(i[P]=null,y==="value"||y==="checked"){let $=e;const I=t===void 0;if(y==="value"){let D=$.defaultValue;$.removeAttribute(y),$.defaultValue=D,$.value=$.__value=I?D:null}else{let D=$.defaultChecked;$.removeAttribute(y),$.defaultChecked=D,$.checked=I?D:!1}}else e.removeAttribute(P);else N||p.includes(y)&&(l||typeof E!="string")?(e[y]=E,y in i&&(i[y]=rt)):typeof E!="function"&&Rr(e,y,E)}}}return v}function Os(e,t,r=[],n=[],a,o=!1,i=!1){Po(r,n,l=>{var u=void 0,v={},h=e.nodeName==="SELECT",m=!1;if(rr(()=>{var _=t(...l.map(s)),g=kc(e,u,_,a,o,i);m&&h&&"value"in _&&oa(e,_.value);for(let b of Object.getOwnPropertySymbols(v))_[b]||ct(v[b]);for(let b of Object.getOwnPropertySymbols(_)){var x=_[b];b.description===Pl&&(!u||x!==u[b])&&(v[b]&&ct(v[b]),v[b]=lt(()=>wc(e,()=>x))),g[b]=x}u=g}),h){var p=e;us(()=>{oa(p,u.value,!0),Fo(p)})}m=!0})}function ga(e){return e.__attributes??={[ei]:e.nodeName.includes("-"),[ti]:e.namespaceURI===Sl}}var qs=new Map;function ri(e){var t=e.getAttribute("is")||e.nodeName,r=qs.get(t);if(r)return r;qs.set(t,r=[]);for(var n,a=e,o=Element.prototype;o!==a;){n=Yi(a);for(var i in n)n[i].set&&r.push(i);a=lo(a)}return r}function Be(e,t,r=t){var n=new WeakSet;cs(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Ma(e)?Ra(o):o,r(o),je!==null&&n.add(je),await nc(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),hn(t)==null&&e.value&&(r(Ma(e)?Ra(e.value):e.value),je!==null&&n.add(je)),ds(()=>{var a=t();if(e===document.activeElement){var o=Fn??je;if(n.has(o))return}Ma(e)&&a===Ra(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Tc(e,t,r=t){cs(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),hn(t)==null&&r(e.checked),ds(()=>{var n=t();e.checked=!!n})}function Ma(e){var t=e.type;return t==="number"||t==="range"}function Ra(e){return e===""?null:+e}let Xn=!1;function Ac(e){var t=Xn;try{return Xn=!1,[e(),Xn]}finally{Xn=t}}const Nc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ce(e,t,r){return new Proxy({props:e,exclude:t},Nc)}const Ic={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Pn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Pn(a)&&(a=a());const o=fr(a,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Pn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=fr(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===Cr||t===fo)return!1;for(let r of e.props)if(Pn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Pn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function de(...e){return new Proxy({props:e},Ic)}function Ve(e,t,r,n){var a=!dn||(r&_l)!==0,o=(r&gl)!==0,i=(r&bl)!==0,l=n,u=!0,v=()=>(u&&(u=!1,l=i?hn(n):n),l),h;if(o){var m=Cr in e||fo in e;h=fr(e,t)?.set??(m&&t in e?S=>e[t]=S:void 0)}var p,_=!1;o?[p,_]=Ac(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=v(),h&&(a&&ll(),h(p)));var g;if(a?g=()=>{var S=e[t];return S===void 0?v():(u=!0,S)}:g=()=>{var S=e[t];return S!==void 0&&(l=void 0),S===void 0?l:S},a&&(r&ml)===0)return g;if(h){var x=e.$$legacy;return(function(S,P){return arguments.length>0?((!a||!P||x||_)&&h(P?g():S),S):g()})}var b=!1,y=((r&pl)!==0?va:is)(()=>(b=!1,g()));o&&s(y);var N=ye;return(function(S,P){if(arguments.length>0){const E=P?s(y):a&&o?Ue(S):S;return T(y,E),b=!0,l!==void 0&&(l=E),S}return zr&&b||(N.f&Br)!==0?y.v:s(y)})}function ni(e){Ze===null&&vo(),dn&&Ze.l!==null?Dc(Ze).m.push(e):vn(()=>{const t=hn(e);if(typeof t=="function")return t})}function Cc(e){Ze===null&&vo(),ni(()=>()=>hn(e))}function Dc(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Mc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Mc);const Rc="modulepreload",Oc=function(e){return"/"+e},js={},qc=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let v=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=v;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");a=v(r.map(h=>{if(h=Oc(h),h in js)return;js[h]=!0;const m=h.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":Rc,m||(_.as="script"),_.crossOrigin="",_.href=h,u&&_.setAttribute("nonce",u),document.head.appendChild(_),m)return new Promise((g,x)=>{_.addEventListener("load",g),_.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return a.then(l=>{for(const u of l||[])u.status==="rejected"&&o(u.reason);return t().catch(o)})};class jc extends Map{#e=new Map;#r=Z(0);#c=Z(0);#u=Xt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#l(t){return Xt===this.#u?Z(t):_r(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else return s(this.#r),!1}return s(n),!0}forEach(t,r){this.#o(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else{s(this.#r);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#r;if(a===void 0)a=this.#l(0),n.set(t,a),T(this.#c,super.size),Ut(l);else if(o!==r){Ut(a);var u=l.reactions===null?null:new Set(l.reactions),v=u===null||!a.reactions?.every(h=>u.has(h));v&&Ut(l)}return i}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),T(this.#c,super.size),T(n,-1),Ut(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;T(this.#c,0);for(var r of t.values())T(r,-1);Ut(this.#r),t.clear()}}#o(){s(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#l(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#o(),super.values()}entries(){return this.#o(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#c),super.size}}const Bc=typeof window<"u"?window:void 0;function Lc(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class zc{#e;#r;constructor(t={}){const{window:r=Bc,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=xo(a=>{const o=Cs(r,"focusin",a),i=Cs(r,"focusout",a);return()=>{o(),i()}}))}get current(){return this.#r?.(),this.#e?Lc(this.#e):null}}new zc;function Vc(e){return typeof e=="function"}function Uc(e,t){if(Vc(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Wc(e,t){let r=Z(null);const n=W(()=>Uc(t,250));function a(...o){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let i,l;const u=new Promise((v,h)=>{i=v,l=h});T(r,{timeout:null,runner:null,promise:u,resolve:i,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const i=s(r);T(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),T(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Gc(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),o=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return o.length?Dn(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function An(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function ea(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Dn(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function ta(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(u=>Ua(u.q.toString(),u.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const u=parseFloat(l.q);isNaN(u)||r.set(l.u,(r.get(l.u)||0)+u)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],o=[];r.forEach((l,u)=>{const v=n.get(u)||0,h=l-v;h>0&&(a.push({q:h,u}),o.push(Ua(h.toString(),u)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:i}}function Xr(e){return e?.length?e.map(t=>Ua(t.q.toString(),t.u)).join(" et "):"-"}function Ua(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Bs(e){return An(e)}function Qc(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Hc(e,t){return e[t]?.recipes||[]}function Kc(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([o])=>{const i=new Date(o);return i>=n&&i<=a}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function Jc(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Yc(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Zc(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function Xc(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return Qc(t)}function Fc(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class A{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}A.equal=(e,t)=>new A("equal",e,t).toString();A.notEqual=(e,t)=>new A("notEqual",e,t).toString();A.lessThan=(e,t)=>new A("lessThan",e,t).toString();A.lessThanEqual=(e,t)=>new A("lessThanEqual",e,t).toString();A.greaterThan=(e,t)=>new A("greaterThan",e,t).toString();A.greaterThanEqual=(e,t)=>new A("greaterThanEqual",e,t).toString();A.isNull=e=>new A("isNull",e).toString();A.isNotNull=e=>new A("isNotNull",e).toString();A.between=(e,t,r)=>new A("between",e,[t,r]).toString();A.startsWith=(e,t)=>new A("startsWith",e,t).toString();A.endsWith=(e,t)=>new A("endsWith",e,t).toString();A.select=e=>new A("select",void 0,e).toString();A.search=(e,t)=>new A("search",e,t).toString();A.orderDesc=e=>new A("orderDesc",e).toString();A.orderAsc=e=>new A("orderAsc",e).toString();A.orderRandom=()=>new A("orderRandom").toString();A.cursorAfter=e=>new A("cursorAfter",void 0,e).toString();A.cursorBefore=e=>new A("cursorBefore",void 0,e).toString();A.limit=e=>new A("limit",void 0,e).toString();A.offset=e=>new A("offset",void 0,e).toString();A.contains=(e,t)=>new A("contains",e,t).toString();A.notContains=(e,t)=>new A("notContains",e,t).toString();A.notSearch=(e,t)=>new A("notSearch",e,t).toString();A.notBetween=(e,t,r)=>new A("notBetween",e,[t,r]).toString();A.notStartsWith=(e,t)=>new A("notStartsWith",e,t).toString();A.notEndsWith=(e,t)=>new A("notEndsWith",e,t).toString();A.createdBefore=e=>new A("createdBefore",void 0,e).toString();A.createdAfter=e=>new A("createdAfter",void 0,e).toString();A.createdBetween=(e,t)=>new A("createdBetween",void 0,[e,t]).toString();A.updatedBefore=e=>new A("updatedBefore",void 0,e).toString();A.updatedAfter=e=>new A("updatedAfter",void 0,e).toString();A.updatedBetween=(e,t)=>new A("updatedBetween",void 0,[e,t]).toString();A.or=e=>new A("or",void 0,e.map(t=>JSON.parse(t))).toString();A.and=e=>new A("and",void 0,e.map(t=>JSON.parse(t))).toString();A.distanceEqual=(e,t,r,n=!0)=>new A("distanceEqual",e,[[t,r,n]]).toString();A.distanceNotEqual=(e,t,r,n=!0)=>new A("distanceNotEqual",e,[[t,r,n]]).toString();A.distanceGreaterThan=(e,t,r,n=!0)=>new A("distanceGreaterThan",e,[[t,r,n]]).toString();A.distanceLessThan=(e,t,r,n=!0)=>new A("distanceLessThan",e,[[t,r,n]]).toString();A.intersects=(e,t)=>new A("intersects",e,[t]).toString();A.notIntersects=(e,t)=>new A("notIntersects",e,[t]).toString();A.crosses=(e,t)=>new A("crosses",e,[t]).toString();A.notCrosses=(e,t)=>new A("notCrosses",e,[t]).toString();A.overlaps=(e,t)=>new A("overlaps",e,[t]).toString();A.notOverlaps=(e,t)=>new A("notOverlaps",e,[t]).toString();A.touches=(e,t)=>new A("touches",e,[t]).toString();A.notTouches=(e,t)=>new A("notTouches",e,[t]).toString();var ai,si;class ln{static custom(t){return t}static unique(t=7){const r=Fc(ln,ai,"m",si).call(ln);let n="";for(let a=0;a<t;a++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}ai=ln,si=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Ls;(function(e){e.Totp="totp"})(Ls||(Ls={}));var zs;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(zs||(zs={}));var Vs;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Vs||(Vs={}));var Us;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Us||(Us={}));var Ws;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Ws||(Ws={}));var Gs;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Gs||(Gs={}));var Qs;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Qs||(Qs={}));var Hs;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Hs||(Hs={}));var Ks;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Ks||(Ks={}));class eu{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class oi{constructor(t){this.generateIdentifier=t,this.kv=new eu}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class tu extends oi{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function ru(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function nu(e,t){const r=ru(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const o=n[a];if(t(o))return o}}function cn(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function ra(e,t){return e.indexOf(t)!==-1}function Js(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class au{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return nu(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const su=e=>Object.prototype.toString.call(e).slice(8,-1),ii=e=>typeof e>"u",ou=e=>e===null,qn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Wa=e=>qn(e)&&Object.keys(e).length===0,mr=e=>Array.isArray(e),iu=e=>typeof e=="string",lu=e=>typeof e=="number"&&!isNaN(e),cu=e=>typeof e=="boolean",uu=e=>e instanceof RegExp,jn=e=>e instanceof Map,Bn=e=>e instanceof Set,li=e=>su(e)==="Symbol",du=e=>e instanceof Date&&!isNaN(e.valueOf()),fu=e=>e instanceof Error,Ys=e=>typeof e=="number"&&isNaN(e),vu=e=>cu(e)||ou(e)||ii(e)||lu(e)||iu(e)||li(e),hu=e=>typeof e=="bigint",pu=e=>e===1/0||e===-1/0,_u=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),mu=e=>e instanceof URL,ci=e=>e.replace(/\./g,"\\."),Oa=e=>e.map(String).map(ci).join("."),Mn=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let o=e.charAt(a);if(o==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(o==="."){t.push(r),r="";continue}r+=o}const n=r;return t.push(n),t};function Lt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const ui=[Lt(ii,"undefined",()=>null,()=>{}),Lt(hu,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Lt(du,"Date",e=>e.toISOString(),e=>new Date(e)),Lt(fu,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Lt(uu,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Lt(Bn,"set",e=>[...e.values()],e=>new Set(e)),Lt(jn,"map",e=>[...e.entries()],e=>new Map(e)),Lt(e=>Ys(e)||pu(e),"number",e=>Ys(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Lt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Lt(mu,"URL",e=>e.toString(),e=>new URL(e))];function ba(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const di=ba((e,t)=>li(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),gu=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),fi=ba(_u,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=gu[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function vi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const hi=ba(vi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),pi=ba((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),bu=[hi,di,pi,fi],Zs=(e,t)=>{const r=Js(bu,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Js(ui,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},_i={};ui.forEach(e=>{_i[e.annotation]=e});const yu=(e,t,r)=>{if(mr(t))switch(t[0]){case"symbol":return di.untransform(e,t,r);case"class":return hi.untransform(e,t,r);case"custom":return pi.untransform(e,t,r);case"typed-array":return fi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=_i[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Fr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function mi(e){if(ra(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(ra(e,"prototype"))throw new Error("prototype is not allowed as a property");if(ra(e,"constructor"))throw new Error("constructor is not allowed as a property")}const wu=(e,t)=>{mi(t);for(let r=0;r<t.length;r++){const n=t[r];if(Bn(e))e=Fr(e,+n);else if(jn(e)){const a=+n,o=+t[++r]==0?"key":"value",i=Fr(e,a);switch(o){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},Ga=(e,t,r)=>{if(mi(t),t.length===0)return r(e);let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];if(mr(n)){const l=+i;n=n[l]}else if(qn(n))n=n[i];else if(Bn(n)){const l=+i;n=Fr(n,l)}else if(jn(n)){if(o===t.length-2)break;const u=+i,v=+t[++o]==0?"key":"value",h=Fr(n,u);switch(v){case"key":n=h;break;case"value":n=n.get(h);break}}}const a=t[t.length-1];if(mr(n)?n[+a]=r(n[+a]):qn(n)&&(n[a]=r(n[a])),Bn(n)){const o=Fr(n,+a),i=r(o);o!==i&&(n.delete(o),n.add(i))}if(jn(n)){const o=+t[t.length-2],i=Fr(n,o);switch(+a==0?"key":"value"){case"key":{const u=r(i);n.set(u,n.get(i)),u!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function Qa(e,t,r=[]){if(!e)return;if(!mr(e)){cn(e,(o,i)=>Qa(o,t,[...r,...Mn(i)]));return}const[n,a]=e;a&&cn(a,(o,i)=>{Qa(o,t,[...r,...Mn(i)])}),t(n,r)}function Su(e,t,r){return Qa(t,(n,a)=>{e=Ga(e,a,o=>yu(o,n,r))}),e}function xu(e,t){function r(n,a){const o=wu(e,Mn(a));n.map(Mn).forEach(i=>{e=Ga(e,i,()=>o)})}if(mr(t)){const[n,a]=t;n.forEach(o=>{e=Ga(e,Mn(o),()=>e)}),a&&cn(a,r)}else cn(t,r);return e}const Pu=(e,t)=>qn(e)||mr(e)||jn(e)||Bn(e)||vi(e,t);function Eu(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function $u(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,u)=>l.length-u.length));const[o,...i]=a;o.length===0?n=i.map(Oa):r[Oa(o)]=i.map(Oa)}),n?Wa(r)?[n]:[n,r]:Wa(r)?void 0:r}const gi=(e,t,r,n,a=[],o=[],i=new Map)=>{const l=vu(e);if(!l){Eu(e,a,t);const _=i.get(e);if(_)return n?{transformedValue:null}:_}if(!Pu(e,r)){const _=Zs(e,r),g=_?{transformedValue:_.value,annotations:[_.type]}:{transformedValue:e};return l||i.set(e,g),g}if(ra(o,e))return{transformedValue:null};const u=Zs(e,r),v=u?.value??e,h=mr(v)?[]:{},m={};cn(v,(_,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const x=gi(_,t,r,n,[...a,g],[...o,e],i);h[g]=x.transformedValue,mr(x.annotations)?m[g]=x.annotations:qn(x.annotations)&&cn(x.annotations,(b,y)=>{m[ci(g)+"."+y]=b})});const p=Wa(m)?{transformedValue:h,annotations:u?[u.type]:void 0}:{transformedValue:h,annotations:u?[u.type,m]:m};return l||i.set(e,p),p};function bi(e){return Object.prototype.toString.call(e).slice(8,-1)}function Xs(e){return bi(e)==="Array"}function ku(e){if(bi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Tu(e,t,r,n,a){const o={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),a&&o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Ha(e,t={}){if(Xs(e))return e.map(a=>Ha(a,t));if(!ku(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,o)=>{if(Xs(t.props)&&!t.props.includes(o))return a;const i=e[o],l=Ha(i,t);return Tu(a,o,l,e,t.nonenumerable),a},{})}class Le{constructor({dedupe:t=!1}={}){this.classRegistry=new tu,this.symbolRegistry=new oi(r=>r.description??""),this.customTransformerRegistry=new au,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=gi(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const o=$u(r,this.dedupe);return o&&(a.meta={...a.meta,referentialEqualities:o}),a}deserialize(t){const{json:r,meta:n}=t;let a=Ha(r);return n?.values&&(a=Su(a,n.values,this)),n?.referentialEqualities&&(a=xu(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}Le.defaultInstance=new Le;Le.serialize=Le.defaultInstance.serialize.bind(Le.defaultInstance);Le.deserialize=Le.defaultInstance.deserialize.bind(Le.defaultInstance);Le.stringify=Le.defaultInstance.stringify.bind(Le.defaultInstance);Le.parse=Le.defaultInstance.parse.bind(Le.defaultInstance);Le.registerClass=Le.defaultInstance.registerClass.bind(Le.defaultInstance);Le.registerSymbol=Le.defaultInstance.registerSymbol.bind(Le.defaultInstance);Le.registerCustom=Le.defaultInstance.registerCustom.bind(Le.defaultInstance);Le.allowErrorProps=Le.defaultInstance.allowErrorProps.bind(Le.defaultInstance);function yi(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function Ot(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Au(e,t,r=100){try{const{databases:n,config:a}=await Ot(),o=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[A.greaterThan("$updatedAt",t),A.equal("mainId",e),A.limit(r),A.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function wi(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:o}=await Ot();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[A.equal("mainId",e),A.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),A.limit(n)])).documents;const i=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[A.greaterThan("$updatedAt",r),A.equal("mainId",e),A.limit(n),A.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const o=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function Or(e,t){try{const{databases:r,config:n}=await Ot();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function ur(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=yi(n,t),{databases:o,config:i}=await Ot(),l=await o.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function Si(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await Or(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function xi(e,t){return Or(e,{who:t})}async function Ka(e,t){return Or(e,{stockReel:t})}async function Pi(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const a={};return t.stockReel!==void 0&&(a.stockReel=t.stockReel),t.who!==void 0&&(a.who=t.who),t.storeInfo!==void 0&&(a.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await Or(e,a)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await ur(e,a,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function Ei(e){try{const{databases:t,config:r}=await Ot(),o=await(await window.AppwriteClient.getAccount()).get(),i={...e,createdBy:o.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,ln.unique(),i);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function $i(e,t){try{const{databases:r,config:n}=await Ot(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function ki(e){try{const{databases:t,config:r}=await Ot();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Ti(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Ot(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[A.equal("$id",e),A.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Ai(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const u=i.some(_=>_.includes("products.")),v=i.some(_=>_.includes("purchases.")),h=i.some(_=>_.includes(".create")),m=i.some(_=>_.includes(".update")),p=i.some(_=>_.includes(".delete"));if(u){const _=l;h&&t.onProductCreate?t.onProductCreate(_):m&&t.onProductUpdate?t.onProductUpdate(_):p&&t.onProductDelete&&t.onProductDelete(_.$id)}else if(v){const _=l;h&&t.onPurchaseCreate?t.onPurchaseCreate(_):m&&t.onPurchaseUpdate?t.onPurchaseUpdate(_):p&&t.onPurchaseDelete&&t.onPurchaseDelete(_.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function Ni(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Ot(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Ii(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await Ot(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function vs(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function Ci(e,t,r,n){return vs({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function Di(e,t,r,n="replace"){return vs({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function Mi(e,t,r,n={}){try{const{databases:a,config:o}=await Ot(),u=await(await window.AppwriteClient.getAccount()).get(),v=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const h of r){const m={products:[t],mainId:e,quantity:h.q,unit:h.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:u.name,price:null,orderDate:null,deliveryDate:null,createdBy:u.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,ln.unique(),m);v.push(p)}return console.log(`[Appwrite Interactions] ${v.length} validations rapides créées pour produit ${t}`),v}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const o=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const Nu=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:vs,batchUpdateStore:Ci,batchUpdateWho:Di,createMainDocument:Ii,createPurchase:Ei,createQuickValidationPurchases:Mi,deletePurchase:ki,enrichedProductToAppwriteProduct:yi,loadMainEventData:Ni,loadPurchasesListByIds:Ti,loadUpdatedPurchases:Au,subscribeToRealtime:Ai,syncProductsWithPurchases:wi,updateProduct:Or,updateProductBatch:Pi,updateProductStock:Ka,updateProductStore:Si,updateProductWho:xi,updatePurchase:$i,upsertProduct:ur},Symbol.toStringTag,{value:"Module"}));async function Iu(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Cu(e,t){const r=Xc(e.byDate),n=Dn(ea([])),{numeric:a,display:o}=ta(r,n);return{$id:`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:Xr(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function Du(e,t){return e.map(r=>Cu(r,t))}class Mu{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";METADATA_KEY="cache-metadata";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=a=>{const o=a.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE),console.log("[IDBCache] Object store 'metadata' créé"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).get(this.METADATA_KEY);o.onsuccess=()=>{const i=o.result||{lastSync:null,allDates:[]};console.log(`[IDBCache] Metadata chargée: lastSync=${i.lastSync}, dates=${i.allDates?.length||0}`),t(i)},o.onerror=()=>r(o.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=a.objectStore(this.PRODUCTS_STORE);o.clear(),t.forEach(i=>{o.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put(t,this.METADATA_KEY);i.onsuccess=()=>{console.log("[IDBCache] Metadata sauvegardée"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Ru(e){const t=new Mu(e);return await t.open(),t}const Fs=1e3;class Ou{#e=new jc;#r=Z(null);#c=Z(!1);#u=Z(!1);#l=Z(null);#o=Z(!1);#i=Z(!1);#a=Z(Ue([]));#s=Z(null);#d=Z(null);get startDate(){return s(this.#d)}set startDate(t){T(this.#d,t,!0)}#v=Z(null);get endDate(){return s(this.#v)}set endDate(t){T(this.#v,t,!0)}#n=null;#f=null;#h=Z(!1);#t=Z(Ue({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get currentMainId(){return s(this.#r)}get isInitialized(){return s(this.#c)}get loading(){return s(this.#u)}get error(){return s(this.#l)}get allDates(){return s(this.#a)}get syncing(){return s(this.#o)}setDateRange(t,r){this.startDate=t,this.endDate=r}initializeDateRange(){if((!this.startDate||!this.endDate)&&s(this.#a).length>0){const t=[...s(this.#a)].sort();this.startDate=t[0],this.endDate=t[t.length-1]}console.log(`[ProductsStore] Date range initialized: ${this.startDate} - ${this.endDate}`)}get firstDate(){return s(this.#a).length===0?null:[...s(this.#a)].sort()[0]}get lastDate(){return s(this.#a).length===0?null:[...s(this.#a)].sort().pop()}get realtimeConnected(){return s(this.#i)}get hugoContentChanged(){return s(this.#h)}getTotalNeededInRange(t){return this.totalNeededByDateRange.get(t)??[]}getFormattedTotalNeeded(t){const r=this.getTotalNeededInRange(t);return r.length>0?Xr(r):"-"}#g=W(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#g)}set enrichedProducts(t){T(this.#g,t)}#w=W(()=>{if(console.log("[Store] Recalcul totalNeededByDateRange"),this.startDate===this.firstDate&&this.endDate===this.lastDate)return console.log("[Store] Full date range - using totalNeededArray (no calculation)"),new Map(this.enrichedProducts.map(n=>[n.$id,n.totalNeededArray]));const r=new Map;for(const n of this.enrichedProducts)if(n.byDate){const a=Yc(n.byDate),o=Gc(a,this.startDate,this.endDate);o.length>0&&r.set(n.$id,o)}return r});get totalNeededByDateRange(){return s(this.#w)}set totalNeededByDateRange(t){T(this.#w,t)}#S=W(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const a=Xr(r);t.set(n,a)}),t});get formattedTotalNeededByDateRange(){return s(this.#S)}set formattedTotalNeededByDateRange(t){T(this.#S,t)}#p=W(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#p)}set stats(t){T(this.#p,t)}#_=W(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#_)}set uniqueStores(t){T(this.#_,t)}#m=W(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#m)}set uniqueWho(t){T(this.#m,t)}#E=W(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#E)}set uniqueProductTypes(t){T(this.#E,t)}#$=W(()=>new Set(this.totalNeededByDateRange.keys()));get relevantProductIds(){return s(this.#$)}set relevantProductIds(t){T(this.#$,t)}#k=W(()=>{const t=this.enrichedProducts.filter(r=>this.#z(r)&&this.relevantProductIds.has(r.$id));return s(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>s(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get displayProducts(){return s(this.#k)}set displayProducts(t){T(this.#k,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#c)&&s(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),T(this.#r,t,!0);try{this.#n=await Ru(t)}catch(r){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",r),new Error("Impossible d'initialiser le cache IndexedDB")}T(this.#l,null);try{if(await this.#I(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await Iu(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),Du(n.ingredients,t).forEach(i=>{this.#e.set(i.$id,i)}),T(this.#a,[...n.allDates],!0),await Ni(t)||await Ii(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#T()}this.initializeDateRange(),await this.#C(),T(this.#c,!0);const r=this.#L();this.#f=Ai(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw T(this.#l,n,!0),console.error("[ProductsStore]",n,r),r}}async#I(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();T(this.#s,r.lastSync,!0),T(this.#a,[...r.allDates],!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#C(){if(s(this.#r)){T(this.#o,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#s)}`);const t=await wi(s(this.#r),{lastSync:s(this.#s),limit:Fs});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#A(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#s)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#s)}`);const{loadUpdatedPurchases:r}=await qc(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Nu);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#r),s(this.#s),Fs);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const o=a.products.map(i=>typeof i=="string"?i:i.$id);this.#P(o,a)}})}this.#D(),await this.#T(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{T(this.#o,!1)}}}async#T(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:s(this.#s),allDates:[...s(this.#a)]}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#x(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#D(){T(this.#s,new Date().toISOString(),!0)}#A(t,r){return r?this.#b(t,r):this.#M(t)}#M(t){const r=Dn(ea(t.purchases??[])),n=[],{numeric:a,display:o}=ta(n,r),i=An(t.stockReel)??null,l=Xr(r),u=t.store?An(t.store):null,v=i?`${i.quantity} ${i.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:u,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:v,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:o,totalNeededOverrideParsed:Bs(t.totalNeededOverride)}}#b(t,r){const n=t.purchases??r.purchases,a=Dn(ea(n??[])),o=Xr(a),{numeric:i,display:l}=ta(r.totalNeededArray,a),u=t.stockReel??r.stockReel,v=u?An(u):r.stockParsed,h=t.store??r.store,m=h?An(h):r.storeInfo,p=v?`${v.quantity} ${v.unit}`:o;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:h,stockReel:u,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:m,stockParsed:v,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:p,displayTotalPurchases:o,displayMissingQuantity:l,totalNeededOverrideParsed:Bs(t.totalNeededOverride??r.totalNeededOverride)}}#V(t){t.totalPurchasesArray=Dn(ea(t.purchases??[]));const{numeric:r,display:n}=ta(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=Xr(t.totalPurchasesArray)}#U(t){t.length&&(t.forEach(r=>this.#y(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#y(t){const r=this.#e.get(t.$id),n=this.#A(t,r);this.#e.set(t.$id,n)}#R(t){this.#e.delete(t)}async#O(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#B(r,t),r}async#q(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Ti([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#P(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#j(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t));return r.forEach(n=>{this.#y(n)}),r.map(n=>n.$id)}#N(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#B(t,r){const n=this.#N(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(u=>u.$id===n.$id)){const u=this.#b({...i,purchases:[...l,n],status:"active"},i);a.push(u)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#P(t,r){const n=this.#N(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],u=l.findIndex(v=>v.$id===n.$id);if(u>=0){const v=[...l];v[u]=n;const h=this.#b({...i,purchases:v,status:"active"},i);a.push(h)}else{const v=this.#b({...i,purchases:[...l,r],status:"active"},i);a.push(v)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#L(){return{onProductCreate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#R(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#O(t);await this.#x(r)},onPurchaseUpdate:async t=>{const r=await this.#q(t);await this.#x(r)},onPurchaseDelete:async t=>{const r=await this.#j(t);await this.#x(r)},onConnect:()=>{T(this.#i,!0)},onDisconnect:()=>{T(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#z(t){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#t).selectedStores.includes(t.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!t.productType||!s(this.#t).selectedProductTypes.includes(t.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Wc(t=>{s(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#t).selectedProductTypes.indexOf(t);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#t).selectedTemperatures.indexOf(t);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(t){s(this.#t).groupBy=t}toggleStore(t){const r=s(this.#t).selectedStores.indexOf(t);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(t)}toggleWho(t){const r=s(this.#t).selectedWho.indexOf(t);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(t)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(t){s(this.#t).sortColumn===t?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=t,s(this.#t).sortDirection="asc")}clearFilters(){T(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#t).sortColumn],o=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,o=parseFloat(o)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,o=n.purchases?.length||0),a<o?s(this.#t).sortDirection==="asc"?-1:1:a>o?s(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDate?Hc(n.byDate,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDate&&n.byDate[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Jc(r.byDate):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDate?Object.keys(r.byDate).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?0:Kc(r.byDate,this.startDate,this.endDate)}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?[]:Object.keys(r.byDate).filter(a=>{const o=new Date(a),i=this.startDate?new Date(this.startDate):null,l=this.endDate?new Date(this.endDate):null;return i&&l&&o>=i&&o<=l}).flatMap(a=>r.byDate[a]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){await this.clearCache(),await this.initialize(t)}async clearCache(){this.#e.clear(),T(this.#a,[],!0),T(this.#s,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(a=>{const o=this.#e.get(a);if(o){const i={...o,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#f?.(),this.#f=null,this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const M=new Ou;function qu(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ju={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Bu=vc("<svg><!><!></svg>");function fe(e,t){K(t,!0);const r=Ve(t,"color",3,"currentColor"),n=Ve(t,"size",3,24),a=Ve(t,"strokeWidth",3,2),o=Ve(t,"absoluteStrokeWidth",3,!1),i=Ve(t,"iconNode",19,()=>[]),l=ce(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=Bu();Os(u,m=>({...ju,...l,width:n(),height:n(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(a())*24/Number(n()):a()]);var v=c(u);nt(v,17,i,Va,(m,p)=>{var _=W(()=>uo(s(p),2));let g=()=>s(_)[0],x=()=>s(_)[1];var b=H(),y=O(b);yc(y,g,!0,(N,S)=>{Os(N,()=>({...x()}))}),f(m,b)});var h=d(v);oe(h,()=>t.children??te),f(e,u),J()}function Ja(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];fe(e,de({name:"archive"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Lu(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];fe(e,de({name:"bean"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function zu(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];fe(e,de({name:"beef"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Vu(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];fe(e,de({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Uu(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];fe(e,de({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Ln(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];fe(e,de({name:"check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Wu(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];fe(e,de({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Gu(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];fe(e,de({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function eo(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];fe(e,de({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Qu(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];fe(e,de({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Hu(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];fe(e,de({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Ku(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];fe(e,de({name:"clock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Ju(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];fe(e,de({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function hs(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];fe(e,de({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Yu(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];fe(e,de({name:"egg"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Zu(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];fe(e,de({name:"euro"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Ya(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];fe(e,de({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Xu(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];fe(e,de({name:"info"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function to(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];fe(e,de({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Fu(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];fe(e,de({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function ed(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];fe(e,de({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function td(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];fe(e,de({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function rd(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];fe(e,de({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function nd(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];fe(e,de({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function ps(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];fe(e,de({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function ad(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];fe(e,de({name:"moon"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Vn(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];fe(e,de({name:"package"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function sd(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];fe(e,de({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function od(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];fe(e,de({name:"plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function id(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];fe(e,de({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function ld(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];fe(e,de({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function cd(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];fe(e,de({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function ud(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];fe(e,de({name:"save"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function dd(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];fe(e,de({name:"search"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Za(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];fe(e,de({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function hr(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];fe(e,de({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Xa(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];fe(e,de({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function ia(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];fe(e,de({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function pr(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];fe(e,de({name:"store"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function fd(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];fe(e,de({name:"sun"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function _s(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];fe(e,de({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Ri(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];fe(e,de({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function ya(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];fe(e,de({name:"user"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function Fa(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];fe(e,de({name:"users"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function vd(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];fe(e,de({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function vt(e,t){K(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];fe(e,de({name:"x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=H(),l=O(i);oe(l,()=>t.children??te),f(a,i)},$$slots:{default:!0}})),J()}function na(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Lu};case"animaux":return{displayName:"Viandes et Poissons",icon:zu};case"legumes":return{displayName:"Fruits et Légumes",icon:Uu};case"sucres":return{displayName:"Sucrées",icon:Vu};case"lof":return{displayName:"L.O.F",icon:Yu};case"autres":return{displayName:"Autres",icon:Wu};case"epices":return{displayName:"Assaisonnements",icon:Fu};case"frais":return{displayName:"Produits Frais",icon:cd};default:return{displayName:e,icon:Vn}}}function ro(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function wa(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Sa(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function hd(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function pd(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],o=n[t.sortColumn];return a<o?t.sortDirection==="asc"?-1:1:a>o?t.sortDirection==="asc"?1:-1:0}):e}function es(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function no(e){return e?Sa(e):"-"}function _d(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",o=n.unit||"unit",i=`${a}_${o}`;if(!r[i]){const l=es(a);r[i]={status:a,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:md(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function md(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ShoppingCart";case"pending":return"Clock";case"delivered":return"CircleCheck";case"cancelled":return"CircleX";default:return"Package"}}let ao=()=>localStorage.getItem("appwrite-user-name")||"";function gd(e){let t=Z(!1),r=Z(null);const n=W(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),M.getEnrichedProductById(e))),a=W(()=>s(n)?.who??[]),o=W(()=>s(n)?.stockParsed??null),i=W(()=>s(n)?.purchases??[]),l=W(()=>s(n)?.byDate?Zc(s(n).byDate):[]),u=Ue({purchase:{quantity:null,unit:"",store:"",who:ao()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let v=Z(!1),h=Z(null);vn(()=>{!s(n)||s(v)||(u.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,u.purchase.unit=s(n).totalNeededArray[0]?.u??"",u.purchase.store=s(n).storeInfo?.storeName??"",u.purchase.who=ao()??"",u.purchase.status=u.purchase.status||"delivered",u.stock.unit=s(n).totalNeededArray[0]?.u??"",u.store.name=s(n).storeInfo?.storeName??"",u.store.comment=s(n).storeInfo?.storeComment??null,u.who=s(n)?.who?[...s(n).who]:[],T(h,{purchase:{...u.purchase},stock:{...u.stock},store:{...u.store},who:[...u.who]},!0),T(v,!0))});const m=W(()=>s(h)?{store:JSON.stringify(u.store)!==JSON.stringify(s(h).store),stock:p(),who:JSON.stringify(u.who)!==JSON.stringify(s(h).who)}:{store:!1,stock:!1,who:!1});function p(){return u.stock.quantity&&u.stock.quantity>0&&u.stock.unit?s(o)?u.stock.quantity.toString()!==s(o).quantity||u.stock.unit!==s(o).unit||(u.stock.notes||"")!==(s(o).notes||""):!0:!1}const _=W(()=>s(h)&&(s(m).store||s(m).stock||s(m).who));let g=Z(null);const x=W(()=>s(g)?s(i).find(R=>R.$id===s(g))??null:null);async function b(R,G){T(t,!0),T(r,null);try{const re=await R();return G&&y("success",G),re}catch(re){const se=re instanceof Error?re.message:"Une erreur est survenue";return T(r,se,!0),y("error",se),console.error("[ProductModalState]",re),null}finally{T(t,!1)}}function y(R,G){const re=new CustomEvent("toast",{detail:{type:R,message:G}});window.dispatchEvent(re)}async function N(){s(n)&&await b(async()=>{if(!u.purchase.quantity||!u.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!M.currentMainId)throw new Error("mainId non disponible");const{quantity:R,unit:G}=ro(u.purchase.quantity,u.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await ur(s(n).$id,{},re=>M.getEnrichedProductById(re))),await Ei({products:[s(n).$id],mainId:M.currentMainId,unit:G,quantity:R,store:u.purchase.store||null,who:u.purchase.who||null,notes:u.purchase.notes||"",price:u.purchase.price||null,status:u.purchase.status||"delivered",orderDate:u.purchase.orderDate||null,deliveryDate:u.purchase.deliveryDate||null}),u.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:u.purchase.store,who:u.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function S(R){T(g,R.$id,!0)}function P(){T(g,null)}async function E(R){R.$id&&await b(async()=>{const{quantity:G,unit:re}=ro(R.quantity,R.unit);await $i(R.$id,{unit:re,quantity:G,store:R.store||null,who:R.who||null,notes:R.notes||"",price:R.price||null,status:R.status||null,orderDate:R.orderDate||null,deliveryDate:R.deliveryDate||null}),T(g,null)},"Achat modifié avec succès")}async function $(R){const G=s(i).find(re=>re.$id===R);G&&confirm(`Supprimer cet achat (${G.quantity} ${G.unit}) ?`)&&await b(async()=>{await ki(R)},"Achat supprimé avec succès")}async function I(){s(n)&&await b(async()=>{if(!u.stock.quantity||!u.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const R={quantity:u.stock.quantity.toString(),unit:u.stock.unit,notes:u.stock.notes,dateTime:u.stock.dateTime};s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await Ka(s(n).$id,JSON.stringify(R))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await ur(s(n).$id,{stockReel:JSON.stringify(R)},G=>M.getEnrichedProductById(G))),u.stock.quantity=null,u.stock.notes="",u.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function D(){s(n)&&confirm("Supprimer le stock actuel ?")&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, suppression stock normal...`),await Ka(s(n).$id,null)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, suppression stock avec upsert...`),await ur(s(n).$id,{stockReel:null},R=>M.getEnrichedProductById(R)))},"Stock supprimé")}async function ue(R){s(n)&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, setWho normal...`),await xi(s(n).$id,R)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await ur(s(n).$id,{who:R},G=>M.getEnrichedProductById(G)))},"Volontaires mis à jour")}async function V(R){s(n)&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await Si(s(n).$id,R)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await ur(s(n).$id,{store:JSON.stringify(R)},G=>M.getEnrichedProductById(G)))},"Magasin mis à jour")}async function z(R){s(n)&&await b(async()=>{await Or(s(n).$id,{totalNeededOverride:JSON.stringify(R)})},"Override appliqué")}async function q(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await b(async()=>{await Or(s(n).$id,{totalNeededOverride:null})},"Override supprimé")}async function X(){!s(n)||!s(_)||await b(async()=>{const R={};if(s(m).stock&&u.stock.quantity&&u.stock.unit){const G={quantity:u.stock.quantity.toString(),unit:u.stock.unit,notes:u.stock.notes,dateTime:u.stock.dateTime};R.stockReel=JSON.stringify(G)}if(s(m).who&&(R.who=u.who),s(m).store){const G={storeName:u.store.name||"",storeComment:u.store.comment||null};R.storeInfo=G}Object.keys(R).length>0&&(await Pi(s(n).$id,R,G=>M.getEnrichedProductById(G)),T(h,{purchase:{...u.purchase},stock:{...u.stock},store:{...u.store},who:[...u.who]},!0))},"Modifications enregistrées")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockParsed(){return s(o)},get purchasesList(){return s(i)},get editingPurchaseId(){return s(g)},get editingPurchaseData(){return s(x)},forms:u,addPurchase:N,startEditPurchase:S,cancelEditPurchase:P,updateEditedPurchase:E,removePurchase:$,setStock:I,removeStock:D,setWho:ue,updateStore:V,setOverride:z,removeOverride:q,saveAllChanges:X,get hasChanges(){return s(m)},get hasAnyChanges(){return s(_)},formatQuantity:wa,formatDate:Sa,formatDisplayQuantity:hd}}function bd(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function yd(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function wd(e,t){t().cancelEditPurchase()}var Sd=w('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),xd=w('<span class="loading loading-spinner loading-sm"></span>'),Pd=w('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Ed=w('<span class="loading loading-spinner loading-sm"></span>'),$d=w('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),kd=(e,t,r)=>t(s(r)),Td=(e,t,r)=>t(s(r).$id),Ad=w('<span class="loading loading-spinner loading-sm"></span>'),Nd=w('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Id=w('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Cd=w(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Dd(e,t){K(t,!0);let r=Ve(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(ee){return ee.quantity!==null&&ee.quantity!==0&&ee.unit?.trim()!==""}function o(ee){r().removePurchase(ee)}function i(ee){r().startEditPurchase(ee)}var l=Cd(),u=c(l),v=c(u);hr(v,{class:"h-5 w-5"});var h=d(u,2),m=c(h),p=d(c(m),2),_=c(p),g=c(_);Vn(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2),b=d(_,2),y=c(b);y.value=y.__value="";var N=d(y);N.value=N.__value="kg";var S=d(N);S.value=S.__value="gr.";var P=d(S);P.value=P.__value="l.";var E=d(P);E.value=E.__value="ml";var $=d(E);$.value=$.__value="unité";var I=d($);I.value=I.__value="bottes";var D=d(b,2),ue=c(D);pr(ue,{class:"h-4 w-4 opacity-50"});var V=d(ue,2),z=d(D,2),q=c(z);ya(q,{class:"h-4 w-4 opacity-50"});var X=d(q,2),R=d(z,2),G=d(c(R),2),re=d(p,2),se=c(re),C=c(se);ps(C,{class:"h-4 w-4 opacity-50"});var ne=d(C,2),Pe=d(re,2),Ae=c(Pe),Y=c(Ae),_e=c(Y),De=c(_e);De.value=De.__value="delivered";var ve=d(De);ve.value=ve.__value="ordered";var me=d(ve);me.value=me.__value="requested";var F=d(Y,2),we=d(Ae,2);{var Ne=ee=>{var L=Sd(),ae=d(c(L),2);Be(ae,()=>r().forms.purchase.deliveryDate,Re=>r().forms.purchase.deliveryDate=Re),f(ee,L)};k(we,ee=>{r().forms.purchase.status==="ordered"&&ee(Ne)})}var Me=d(Pe,2),Ee=c(Me);Ee.__click=[bd,n,r];var Oe=c(Ee);{var Te=ee=>{var L=xd();f(ee,L)},Ie=ee=>{var L=Ye("Ajouter l'achat");f(ee,L)};k(Oe,ee=>{r().loading?ee(Te):ee(Ie,!1)})}var ze=d(h,2);{var gt=ee=>{var L=Pd(),ae=c(L);hr(ae,{class:"mx-auto mb-2 h-12 w-12"}),f(ee,L)},bt=ee=>{var L=Id(),ae=c(L),Re=d(c(ae));nt(Re,21,()=>r().purchasesList,it=>it.$id,(it,ie,Ce)=>{var qe=H(),pt=O(qe);{var nr=Q=>{var ge=$d(),$e=c(ge),Xe=c($e),Ge=c(Xe),et=d(Ge,2),yt=c(et);yt.value=yt.__value="kg";var Et=d(yt);Et.value=Et.__value="gr.";var $t=d(Et);$t.value=$t.__value="l.";var at=d($t);at.value=at.__value="ml";var Ke=d(at);Ke.value=Ke.__value="unité";var qt=d(Ke);qt.value=qt.__value="bottes";var Gt=d($e),ar=c(Gt),jt=d(Gt),Qt=c(jt),Vr=d(jt),yr=c(Vr),wr=c(yr);wr.value=wr.__value="requested";var sr=d(wr);sr.value=sr.__value="ordered";var Sr=d(sr);Sr.value=Sr.__value="delivered";var or=d(Sr);or.value=or.__value="cancelled";var Ur=d(Vr),xr=c(Ur),Wr=d(Ur),pn=c(Wr),Gr=d(Wr),kt=c(Gr),Ht=d(Gr),_n=c(Ht),Qr=d(Ht),mn=c(Qr),Pr=c(mn);Pr.__click=[yd,r,a];var xa=c(Pr);{var Pa=be=>{var Je=Ed();f(be,Je)},U=be=>{ud(be,{class:"h-3 w-3"})};k(xa,be=>{r().loading?be(Pa):be(U,!1)})}var he=d(Pr,2);he.__click=[wd,r];var Fe=c(he);vt(Fe,{class:"h-3 w-3"}),B(be=>Pr.disabled=be,[()=>r().loading||!a(s(ie))]),Be(Ge,()=>s(ie).quantity,be=>s(ie).quantity=be),Nr(et,()=>s(ie).unit,be=>s(ie).unit=be),Be(ar,()=>s(ie).store,be=>s(ie).store=be),Be(Qt,()=>s(ie).who,be=>s(ie).who=be),Nr(yr,()=>s(ie).status,be=>s(ie).status=be),Be(xr,()=>s(ie).orderDate,be=>s(ie).orderDate=be),Be(pn,()=>s(ie).deliveryDate,be=>s(ie).deliveryDate=be),Be(kt,()=>s(ie).price,be=>s(ie).price=be),Be(_n,()=>s(ie).notes,be=>s(ie).notes=be),f(Q,ge)},br=Q=>{var ge=Nd(),$e=c(ge),Xe=c($e),Ge=d($e),et=c(Ge),yt=d(Ge),Et=c(yt),$t=d(yt),at=c($t),Ke=c(at),qt=d($t),Gt=c(qt),ar=d(qt),jt=c(ar),Qt=d(ar),Vr=c(Qt),yr=d(Qt),wr=c(yr),sr=d(yr),Sr=c(sr),or=c(Sr);or.__click=[kd,i,ie];var Ur=c(or);ia(Ur,{class:"h-4 w-4"});var xr=d(or,2);xr.__click=[Td,o,ie];var Wr=c(xr);{var pn=kt=>{var Ht=Ad();f(kt,Ht)},Gr=kt=>{vt(kt,{class:"h-4 w-4"})};k(Wr,kt=>{r().loading?kt(pn):kt(Gr,!1)})}B((kt,Ht,_n,Qr,mn)=>{j(Xe,kt),j(et,s(ie).store||"-"),j(Et,s(ie).who||"-"),ke(at,1,`badge badge-sm ${Ht??""}`),j(Ke,_n),j(Gt,Qr),j(jt,mn),j(Vr,s(ie).price?`${s(ie).price}€`:"-"),j(wr,s(ie).notes||"-"),xr.disabled=r().loading},[()=>wa(s(ie).quantity,s(ie).unit),()=>es(s(ie).status).class,()=>es(s(ie).status).text,()=>no(s(ie).orderDate),()=>no(s(ie).deliveryDate)]),f(Q,ge)};k(pt,Q=>{r().editingPurchaseId===s(ie).$id?Q(nr):Q(br,!1)})}f(it,qe)}),f(ee,L)};k(ze,ee=>{r().purchasesList.length===0?ee(gt):ee(bt,!1)})}B(ee=>{ke(F,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),Ee.disabled=ee},[()=>r().loading||!n()]),Be(x,()=>r().forms.purchase.quantity,ee=>r().forms.purchase.quantity=ee),Nr(b,()=>r().forms.purchase.unit,ee=>r().forms.purchase.unit=ee),Be(V,()=>r().forms.purchase.store,ee=>r().forms.purchase.store=ee),Be(X,()=>r().forms.purchase.who,ee=>r().forms.purchase.who=ee),Be(G,()=>r().forms.purchase.price,ee=>r().forms.purchase.price=ee),Be(ne,()=>r().forms.purchase.notes,ee=>r().forms.purchase.notes=ee),Nr(_e,()=>r().forms.purchase.status,ee=>r().forms.purchase.status=ee),f(e,l),J()}dt(["click"]);async function Md(e,t){await t()?.setStock()}async function Rd(e,t){await t()?.removeStock()}var Od=w('<span class="loading loading-spinner loading-sm"></span>'),qd=w('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),jd=w('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),Bd=w('<span class="loading loading-spinner loading-xs"></span>'),Ld=w('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),zd=w(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Vd(e,t){K(t,!0);let r=Ve(t,"modalState",7),n=W(()=>r()&&r().forms&&r().forms.stock.quantity&&r().forms.stock.quantity>0&&r().forms.stock.unit);var a=zd(),o=c(a),i=c(o);Ja(i,{class:"h-5 w-5"});var l=d(o,2),u=c(l),v=c(u),h=c(v),m=d(v,2),p=c(m),_=c(p);Vn(_,{class:"h-4 w-4 opacity-50"});var g=d(_,2),x=d(p,2),b=c(x);b.value=b.__value="";var y=d(b);y.value=y.__value="kg";var N=d(y);N.value=N.__value="gr.";var S=d(N);S.value=S.__value="l.";var P=d(S);P.value=P.__value="ml";var E=d(P);E.value=E.__value="unité";var $=d(E);$.value=$.__value="bottes";var I=d(m,2),D=c(I),ue=d(I,2),V=c(ue);V.__click=[Md,r];var z=c(V);{var q=se=>{var C=Od();f(se,C)},X=se=>{var C=Ye();B(()=>j(C,r().stockParsed?"Mettre à jour":"Ajouter au stock")),f(se,C)};k(z,se=>{r().loading?se(q):se(X,!1)})}var R=d(l,2);{var G=se=>{var C=qd(),ne=c(C);Ja(ne,{class:"mx-auto mb-2 h-12 w-12"}),f(se,C)},re=se=>{var C=Ld(),ne=c(C),Pe=d(c(ne),2),Ae=c(Pe),Y=d(c(Ae),2),_e=c(Y),De=d(Ae,2),ve=d(c(De),2),me=c(ve),F=d(De,2);{var we=Ie=>{var ze=jd(),gt=d(c(ze),2),bt=c(gt);B(()=>j(bt,r().stockParsed.notes)),f(Ie,ze)};k(F,Ie=>{r().stockParsed.notes&&Ie(we)})}var Ne=d(Pe,2),Me=c(Ne);Me.__click=[Rd,r];var Ee=c(Me);{var Oe=Ie=>{var ze=Bd();f(Ie,ze)},Te=Ie=>{var ze=Ye("Supprimer le stock");f(Ie,ze)};k(Ee,Ie=>{r().loading?Ie(Oe):Ie(Te,!1)})}B(Ie=>{j(_e,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),j(me,Ie),Me.disabled=r().loading},[()=>Sa(r().stockParsed.dateTime)]),f(se,C)};k(R,se=>{r().stockParsed?se(re,!1):se(G)})}B(()=>{j(h,r().stockParsed?"Modifier le stock":"Ajouter un stock"),V.disabled=r().loading||!s(n)}),Be(g,()=>r().forms.stock.quantity,se=>r().forms.stock.quantity=se),Nr(x,()=>r().forms.stock.unit,se=>r().forms.stock.unit=se),Be(D,()=>r().forms.stock.notes,se=>r().forms.stock.notes=se),f(e,a),J()}dt(["click"]);var Ud=(e,t,r)=>t(s(r).id),Wd=w('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),Gd=w('<span class="flex items-center gap-1"><!> </span>'),Qd=w('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Hd=w('<div class="flex flex-wrap gap-2"></div> <!>',1);function ms(e,t){K(t,!0);let r=Ve(t,"badgeSize",3,"badge-lg"),n=Ve(t,"color",3,"primary"),a=Ve(t,"badgeStyle",3,""),o=Ve(t,"onToggleItem",3,()=>{}),i=Ve(t,"showStats",3,!1),l=Ve(t,"showIcon",3,!0),u=Z(Ue({}));vn(()=>{const b={};t.items.forEach(y=>{s(u)[y.id]!==void 0?b[y.id]=s(u)[y.id]:b[y.id]=y.selected??!0}),JSON.stringify(Object.keys(b).sort())!==JSON.stringify(Object.keys(s(u)).sort())&&T(u,b,!0)});function v(b){s(u)[b]=!s(u)[b],o()(b)}const h=W(()=>Object.values(s(u)).filter(Boolean).length),m=W(()=>Object.values(s(u)).filter(b=>!b).length);var p=Hd(),_=O(p);nt(_,21,()=>t.items,b=>b.id,(b,y)=>{const N=W(()=>s(u)[s(y).id]);var S=Wd();S.__click=[Ud,v,y];var P=c(S);{var E=V=>{var z=H(),q=O(z);Ar(q,()=>s(y).icon,(X,R)=>{R(X,{class:"h-3 w-3",get title(){return s(y).title}})}),f(V,z)};k(P,V=>{s(y).icon&&V(E)})}var $=d(P,2),I=c($),D=d($,2);{var ue=V=>{var z=H(),q=O(z);{var X=G=>{Ln(G,{size:16})},R=G=>{od(G,{size:16})};k(q,G=>{s(N)?G(X):G(R,!1)})}f(V,z)};k(D,V=>{l()&&V(ue)})}B(()=>{ke(S,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(N)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),Rr(S,"title",s(N)?"Retirer de la liste":"Réajouter à la liste"),j(I,s(y).label)}),f(b,S)});var g=d(_,2);{var x=b=>{var y=Qd(),N=c(y),S=c(N),P=c(S);Ln(P,{class:"text-success h-3 w-3"});var E=d(P),$=d(S,2);{var I=V=>{var z=Gd(),q=c(z);vt(q,{class:"text-error h-3 w-3"});var X=d(q);B(()=>j(X,` ${s(m)??""} retirés`)),f(V,z)};k($,V=>{s(m)>0&&V(I)})}var D=d(N,2),ue=c(D);B(()=>{j(E,` ${s(h)??""} actifs`),j(ue,`Total: ${t.items.length??""} items`)}),f(b,y)};k(g,b=>{i()&&b(x)})}f(e,p),J()}dt(["click"]);async function Kd(e,t,r){!s(t)||!r()||await r().setWho([...r().forms.who])}function Jd(e,t,r){t().forms.who=[...t().whoList],T(r,"")}var Yd=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},Zd=w('<span class="loading loading-spinner loading-sm"></span>'),Xd=w('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function Fd(e,t){K(t,!0);let r=Ve(t,"modalState",7),n=Z("");const a=W(()=>{const q=new Set([...M.uniqueWho,...r().forms.who]);return Array.from(q).map(X=>({id:X,label:X,selected:r().forms.who.includes(X)}))}),o=W(()=>r()?.hasChanges?.who||!1);function i(q){const X=q.trim();X&&!r().forms.who.includes(X)&&(r().forms.who=[...r().forms.who,X])}function l(q){r().forms.who=r().forms.who.filter(X=>X!==q)}function u(q){r().forms.who.includes(q)?l(q):i(q)}function v(){s(n).trim()&&(i(s(n)),T(n,""))}var h=Xd(),m=c(h),p=c(m),_=d(c(p),4),g=c(_),x=c(g),b=c(x);ya(b,{class:"h-4 w-4 opacity-50"});var y=d(b,2);y.__keydown=[Yd,v];var N=d(x,2);N.__click=v;var S=c(N);Ri(S,{size:16});var P=d(g,2),E=d(c(P),2);ms(E,{get items(){return s(a)},onToggleItem:u,showIcon:!0});var $=d(_,2),I=c($);I.__click=[Jd,r,n];var D=d(I,2);D.__click=[Kd,o,r];var ue=c(D);{var V=q=>{var X=Zd();f(q,X)},z=q=>{var X=Ye("Valider");f(q,X)};k(ue,q=>{r().loading?q(V):q(z,!1)})}B(q=>{y.disabled=r().loading,N.disabled=q,I.disabled=r().loading,D.disabled=r().loading||!s(o)},[()=>r().loading||!s(n).trim()]),Be(y,()=>s(n),q=>T(n,q)),f(e,h),J()}dt(["keydown","click"]);var ef=w('<div class="mb-1 text-xs opacity-70"> </div>'),tf=(e,t,r)=>t(s(r)),rf=w("<button><!> </button>"),nf=w('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function ts(e,t){K(t,!0);let r=Ve(t,"maxSuggestions",3,8),n=Ve(t,"title",3,"Suggestions :"),a=Ve(t,"buttonSize",3,"btn-xs"),o=Ve(t,"buttonVariant",3,"btn-soft"),i=Ve(t,"disabled",3,!1);const l=W(()=>t.suggestions.slice(0,r()));function u(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var v=H(),h=O(v);{var m=p=>{var _=nf(),g=c(_);{var x=y=>{var N=ef(),S=c(N);B(()=>j(S,n())),f(y,N)};k(g,y=>{n()&&y(x)})}var b=d(g,2);nt(b,21,()=>s(l),y=>y.id,(y,N)=>{var S=rf();S.__click=[tf,u,N];var P=c(S);{var E=I=>{var D=H(),ue=O(D);Ar(ue,()=>s(N).icon,(V,z)=>{z(V,{class:"h-3 w-3"})}),f(I,D)};k(P,I=>{s(N).icon&&I(E)})}var $=d(P);B(()=>{ke(S,1,`btn ${a()??""} ${o()??""}`),S.disabled=i()||s(N).disabled,Rr(S,"title",s(N).disabled?"Déjà sélectionné":s(N).label),j($,` ${s(N).label??""}`)}),f(y,S)}),f(p,_)};k(h,p=>{s(l).length>0&&p(m)})}f(e,v),J()}dt(["click"]);var af=(e,t)=>{e.key==="Enter"&&t()},sf=w('<span class="loading loading-spinner loading-sm"></span>'),of=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},lf=w(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function cf(e,t){K(t,!0);let r=Ve(t,"modalState",7);const n=W(()=>r()?.hasChanges?.store||!1);async function a(){if(!s(n))return;const $={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||null};await r().updateStore($)}var o=lf(),i=c(o),l=c(i),u=d(c(l),4),v=c(u),h=c(v),m=c(h);pr(m,{class:"h-4 w-4 opacity-50"});var p=d(m,2);p.__keydown=[af,a];var _=d(h,2);{var g=$=>{{let I=W(()=>M.uniqueStores.map(D=>({id:D,label:D,disabled:D===r().forms.store.name})));ts($,{get suggestions(){return s(I)},onSuggestionClick:D=>{r().forms.store.name=D.label},buttonVariant:"btn-outline"})}};k(_,$=>{M.uniqueStores.length>0&&$(g)})}var x=d(v,2),b=d(u,2),y=c(b);y.__click=a;var N=c(y);{var S=$=>{var I=sf();f($,I)},P=$=>{var I=Ye("Mettre à jour");f($,I)};k(N,$=>{r().loading?$(S):$(P,!1)})}var E=d(y,2);E.__click=[of,r],B(()=>{y.disabled=r().loading||!s(n),E.disabled=r().loading}),Be(p,()=>r().forms.store.name,$=>r().forms.store.name=$),Be(x,()=>r().forms.store.comment,$=>r().forms.store.comment=$),f(e,o),J()}dt(["keydown","click"]);async function uf(e,t,r,n,a,o){if(!t.modalState)return;const i={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await t.modalState.setOverride(i),T(o,!1)}async function df(e,t,r){t.modalState&&(await t.modalState.removeOverride(),T(r,!1))}var ff=w('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),vf=w('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),hf=w(" <!>",1),pf=(e,t)=>T(t,!0),_f=w('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),mf=w('<div class="text-error text-sm">Limite de caractères atteinte</div>'),gf=w('<span class="loading loading-spinner loading-sm"></span>'),bf=w('<span class="loading loading-spinner loading-sm"></span>'),yf=w(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div class="form-control"><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),wf=w('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function Sf(e,t){K(t,!0);const r=W(()=>t.modalState.product?.totalNeededOverride),n=W(()=>t.modalState.product?.displayTotalNeeded||[]);let a=Z(!1),o=Z(Ue(t.modalState.product?.totalNeededOverride?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=Z(Ue(t.modalState.product?.totalNeededOverride?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=Z(Ue(t.modalState.product?.totalNeededOverride?.comment||"")),u=W(()=>s(o)>0&&s(i).trim()!=="");var v=wf(),h=c(v),m=c(h),p=c(m);{var _=x=>{var b=_f(),y=O(b),N=c(y),S=d(c(N),2);{var P=V=>{var z=ff();f(V,z)};k(S,V=>{s(r)&&V(P)})}var E=d(S,2),$=c(E);{var I=V=>{var z=hf(),q=O(z),X=d(q);{var R=G=>{var re=vf(),se=c(re);ps(se,{});var C=d(se);B(()=>j(C,` ${s(r).comment??""}`)),f(G,re)};k(X,G=>{s(r).comment&&G(R)})}B(G=>j(q,`${G??""} `),[()=>wa(s(r).totalOverride.q,s(r).totalOverride.u)]),f(V,z)},D=V=>{var z=Ye();B(()=>j(z,s(n))),f(V,z)};k($,V=>{s(r)?V(I):V(D,!1)})}var ue=d(y,2);ue.__click=[pf,a],f(x,b)},g=x=>{var b=yf(),y=O(b),N=c(y),S=c(N);sd(S,{class:"h-4 w-4 opacity-50"});var P=d(S,2),E=d(N,2),$=c(E);$.value=$.__value="";var I=d($);I.value=I.__value="kg";var D=d(I);D.value=D.__value="gr.";var ue=d(D);ue.value=ue.__value="l.";var V=d(ue);V.value=V.__value="ml";var z=d(V);z.value=z.__value="unité";var q=d(z);q.value=q.__value="bottes";var X=d(y,2),R=c(X),G=d(c(R),2),re=d(G,2);{var se=F=>{var we=mf();f(F,we)};k(re,F=>{s(l).length>=250&&F(se)})}var C=d(X,2),ne=c(C);ne.__click=[df,t,a];var Pe=c(ne);{var Ae=F=>{var we=gf();f(F,we)},Y=F=>{var we=Ye();B(()=>j(we,`Réinitialiser le total calculé (${s(n)??""}).`)),f(F,we)};k(Pe,F=>{t.modalState.loading?F(Ae):F(Y,!1)})}var _e=d(ne,2);_e.__click=[uf,t,o,i,l,a];var De=c(_e);{var ve=F=>{var we=bf();f(F,we)},me=F=>{var we=Ye("Appliquer");f(F,we)};k(De,F=>{t.modalState.loading?F(ve):F(me,!1)})}B(()=>{ne.disabled=t.modalState.loading,_e.disabled=t.modalState.loading||!s(u)}),Be(P,()=>s(o),F=>T(o,F)),Nr(E,()=>s(i),F=>T(i,F)),Be(G,()=>s(l),F=>T(l,F)),f(x,b)};k(p,x=>{s(a)?x(g,!1):x(_)})}B(()=>ke(h,1,`card border-base-300 border ${s(a)?"bg-base-200":"bg-base-100"}`)),f(e,v),J()}dt(["click"]);var xf=w('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Pf=w('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Ef=w('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),$f=w('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function kf(e,t){K(t,!0);const r=W(()=>t.modalState.recipes);var n=$f(),a=O(n);Sf(a,{get modalState(){return t.modalState}});var o=d(a,2),i=c(o),l=c(i);hs(l,{class:"h-5 w-5"});var u=d(i,2);{var v=m=>{var p=xf(),_=c(p);Vn(_,{class:"mx-auto mb-2 h-12 w-12"}),f(m,p)},h=m=>{var p=Ef(),_=c(p),g=d(c(_));nt(g,21,()=>s(r),x=>x.r,(x,b)=>{var y=Pf(),N=c(y),S=c(N),P=d(N),E=c(P),$=d(P),I=c($);B(D=>{j(S,`${s(b).r??""} (${(s(b).a||"-")??""} c.)`),j(E,`${(s(b).q||s(b).qEq)??""} ${(s(b).u||s(b).uEq)??""}`),j(I,D)},[()=>Sa(s(b).date)]),f(x,y)}),f(m,p)};k(u,m=>{s(r).length===0?m(v):m(h,!1)})}f(e,n),J()}function Tf(e,t,r){s(t).saveAllChanges().then(()=>{r.onClose()})}var Af=w('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Nf=w('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),If=(e,t)=>t("recettes"),Cf=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Df=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Mf=(e,t)=>t("achats"),Rf=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Of=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),qf=(e,t)=>t("volontaires"),jf=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Bf=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Lf=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),zf=(e,t)=>t("stock"),Vf=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Uf=w('<span class="badge badge-sm badge-secondary ml-1">1</span>'),Wf=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Gf=(e,t)=>t("magasins"),Qf=w('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Hf=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Kf=w('<span class="loading loading-spinner loading-sm"></span>'),Jf=w('<div class="text-warning flex items-center gap-2 text-sm"><div class="bg-warning h-2 w-2 animate-pulse rounded-full"></div> Modifications non sauvegardées</div> <button class="btn btn-primary"><!></button>',1),Yf=w('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Magasin <!></button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><!> <button class="btn btn-ghost"><!></button></div>',1),Zf=w('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Xf(e,t){K(t,!0);let r=Ve(t,"initialTab",3,"recettes"),n=W(()=>gd(t.productId)),a=Z(Ue(r()));function o(b){T(a,b,!0)}var i=Zf(),l=c(i),u=c(l),v=c(u);{var h=b=>{var y=Af(),N=O(y),S=c(N),P=d(N,2),E=c(P),$=c(E),I=d(E,2),D=d(c(I));B(()=>{j(S,s(n).product?.productName),j($,s(n).product?.productType),j(D,` ${s(n).product?.displayTotalNeeded??""}`)}),f(b,y)},m=b=>{var y=Nf();f(b,y)};k(v,b=>{s(n)&&s(n).product?b(h):b(m,!1)})}var p=d(v,2);p.__click=function(...b){t.onClose?.apply(this,b)};var _=c(p);vt(_,{class:"h-4 w-4"});var g=d(u,2);{var x=b=>{var y=Yf(),N=O(y),S=c(N);S.__click=[If,o];var P=c(S);hs(P,{class:"mr-1 h-5 w-5"});var E=d(P,2);{var $=L=>{var ae=Cf(),Re=c(ae);B(()=>j(Re,s(n).product?.nbRecipes)),f(L,ae)},I=L=>{var ae=Df();f(L,ae)};k(E,L=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?L($):L(I,!1)})}var D=d(S,2);D.__click=[Mf,o];var ue=c(D);hr(ue,{class:"mr-1 h-5 w-5"});var V=d(ue,2);{var z=L=>{var ae=Rf(),Re=c(ae);B(()=>j(Re,s(n).purchasesList.length)),f(L,ae)},q=L=>{var ae=Of();f(L,ae)};k(V,L=>{s(n).purchasesList.length>0?L(z):L(q,!1)})}var X=d(D,2);X.__click=[qf,o];var R=c(X);Fa(R,{class:"mr-1 h-5 w-5"});var G=d(R,2);{var re=L=>{var ae=jf();f(L,ae)},se=L=>{var ae=H(),Re=O(ae);{var it=Ce=>{var qe=Bf(),pt=c(qe);B(()=>j(pt,s(n).product?.who.length)),f(Ce,qe)},ie=Ce=>{var qe=Lf();f(Ce,qe)};k(Re,Ce=>{s(n).product?.who&&s(n).product?.who.length>0?Ce(it):Ce(ie,!1)},!0)}f(L,ae)};k(G,L=>{s(n).hasChanges?.who?L(re):L(se,!1)})}var C=d(X,2);C.__click=[zf,o];var ne=c(C);Ja(ne,{class:"mr-1 h-5 w-5"});var Pe=d(ne,2);{var Ae=L=>{var ae=Vf();f(L,ae)},Y=L=>{var ae=H(),Re=O(ae);{var it=Ce=>{var qe=Uf();f(Ce,qe)},ie=Ce=>{var qe=Wf();f(Ce,qe)};k(Re,Ce=>{s(n).stockParsed?Ce(it):Ce(ie,!1)},!0)}f(L,ae)};k(Pe,L=>{s(n).hasChanges?.stock?L(Ae):L(Y,!1)})}var _e=d(C,2);_e.__click=[Gf,o];var De=c(_e);pr(De,{class:"mr-1 h-5 w-5"});var ve=d(De,2);{var me=L=>{var ae=Qf();f(L,ae)};k(ve,L=>{s(n).hasChanges?.store&&L(me)})}var F=d(N,2),we=c(F);{var Ne=L=>{var ae=Hf(),Re=c(ae);vt(Re,{class:"h-4 w-4"});var it=d(Re,2),ie=c(it);B(()=>j(ie,`erreur : ${s(n).error??""}`)),f(L,ae)};k(we,L=>{s(n).error&&L(Ne)})}var Me=d(we,2),Ee=c(Me);mc(Ee,()=>s(a),L=>{var ae=H(),Re=O(ae);{var it=Ce=>{kf(Ce,{get modalState(){return s(n)}})},ie=Ce=>{var qe=H(),pt=O(qe);{var nr=Q=>{Dd(Q,{get modalState(){return s(n)}})},br=Q=>{var ge=H(),$e=O(ge);{var Xe=et=>{Vd(et,{get modalState(){return s(n)}})},Ge=et=>{var yt=H(),Et=O(yt);{var $t=Ke=>{Fd(Ke,{get modalState(){return s(n)}})},at=Ke=>{var qt=H(),Gt=O(qt);{var ar=jt=>{cf(jt,{get modalState(){return s(n)}})};k(Gt,jt=>{s(a)==="magasins"&&jt(ar)},!0)}f(Ke,qt)};k(Et,Ke=>{s(a)==="volontaires"?Ke($t):Ke(at,!1)},!0)}f(et,yt)};k($e,et=>{s(a)==="stock"?et(Xe):et(Ge,!1)},!0)}f(Q,ge)};k(pt,Q=>{s(a)==="achats"?Q(nr):Q(br,!1)},!0)}f(Ce,qe)};k(Re,Ce=>{s(a)==="recettes"?Ce(it):Ce(ie,!1)})}f(L,ae)});var Oe=d(F,2),Te=c(Oe);{var Ie=L=>{var ae=Jf(),Re=d(O(ae),2);Re.__click=[Tf,n,t];var it=c(Re);{var ie=qe=>{var pt=Kf();f(qe,pt)},Ce=qe=>{var pt=Ye("Tout enregistrer");f(qe,pt)};k(it,qe=>{s(n).loading?qe(ie):qe(Ce,!1)})}B(()=>Re.disabled=s(n).loading),f(L,ae)};k(Te,L=>{s(n)?.hasAnyChanges&&L(Ie)})}var ze=d(Te,2);ze.__click=function(...L){t.onClose?.apply(this,L)};var gt=c(ze);{var bt=L=>{var ae=Ye("Annuler");f(L,ae)},ee=L=>{var ae=Ye("Fermer");f(L,ae)};k(gt,L=>{s(n)?.hasAnyChanges?L(bt):L(ee,!1)})}B(()=>{ke(S,1,`tab ${s(a)==="recettes"?"tab-active":""}`),ke(D,1,`tab ${s(a)==="achats"?"tab-active":""}`),ke(X,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),ke(C,1,`tab ${s(a)==="stock"?"tab-active":""}`),ke(_e,1,`tab ${s(a)==="magasins"?"tab-active":""}`)}),f(b,y)};k(g,b=>{s(n)&&b(x)})}f(e,i),J()}dt(["click"]);async function Ff(e,t,r,n,a,o,i,l,u,v){if(!(!s(t)||s(r))){T(n,null),T(a,null);try{const h=s(o).map(_=>_.id),m=i.products.filter(_=>h.includes(_.$id));M.setSyncStatus(h,!0),i.onClose();let p;if(s(l)){const _={storeName:u.storeName.trim(),storeComment:u.storeComment.trim()};p=await Ci(h,m,_)}else if(s(v))p=await Di(h,m,u.whoNames,"replace");else throw new Error("Type d'édition non supporté");if(T(a,p,!0),p.success)console.log(`[GroupEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(h){const m=h instanceof Error?h.message:"Erreur inconnue";T(n,m,!0),console.error("[GroupEditModal] Erreur mise à jour:",h),M.clearSyncStatus()}finally{T(r,!1)}}}function so(e,t,r){s(t)||r.onClose()}var ev=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),tv=w('<div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div>'),rv=(e,t,r)=>t(r),nv=w('<div class="badge badge-primary badge-lg flex items-center gap-2"><span> </span> <button class="btn btn-xs btn-circle btn-ghost hover:bg-error/20"><!></button></div>'),av=w('<div class="mt-2 flex flex-wrap gap-2"></div>'),sv=w('<div class="space-y-4"><div><div class="flex gap-2"><input type="text" class="input flex-1" placeholder="Ajouter un volontaire..."/> <button class="btn btn-square btn-primary"><!></button></div> <!> <!></div></div>'),ov=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),iv=w("<!> ",1),lv=w('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <!> <!> <div class="my-4"><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function cv(e,t){K(t,!0);let r=Z(!1),n=Z(null),a=Z(null),o=Ue({storeName:t.products.length>0&&t.editType==="store"&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"",storeComment:t.products.length>0&&t.editType==="store"&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"",whoNames:t.products.length>0&&t.editType==="who"&&t.products[0].who?[...t.products[0].who]:[]});const i=W(()=>t.editType==="store"),l=W(()=>t.editType==="who"),u=W(()=>t.products.map(Y=>({id:Y.$id,label:Y.productName,title:Y.productName,selected:s(g)[Y.$id]}))),v=W(()=>s(u).filter(Y=>Y.selected)),h=W(()=>s(i)?`Attribuer un magasin (${s(v).length} produits sélectionnés)`:`Gérer les volontaires (${s(v).length} produits sélectionnés)`),m=W(()=>s(v).length===0?!1:s(i)?o.storeName.trim().length>0:s(l)?o.whoNames.length>0:!1);function p(Y){Y.trim()&&!o.whoNames.includes(Y.trim())&&(o.whoNames=[...o.whoNames,Y.trim()])}function _(Y){o.whoNames=o.whoNames.filter(_e=>_e!==Y)}let g=Z(Ue({}));vn(()=>{const Y={};t.products.forEach(_e=>{Y[_e.$id]=t.productIds.includes(_e.$id)}),T(g,Y,!0)});function x(Y){s(g)[Y]=!s(g)[Y]}var b=lv(),y=c(b),N=c(y),S=c(N),P=c(S),E=d(S,2);E.__click=[so,r,t];var $=c(E);vt($,{class:"h-4 w-4"});var I=d(N,2),D=c(I);{var ue=Y=>{var _e=ev(),De=c(_e);_s(De,{class:"h-4 w-4"});var ve=d(De,2),me=c(ve);B(()=>j(me,s(n))),f(Y,_e)};k(D,Y=>{s(n)&&Y(ue)})}var V=d(D,2);{var z=Y=>{var _e=tv(),De=c(_e),ve=c(De),me=c(ve);pr(me,{class:"h-4 w-4 opacity-50"});var F=d(me,2),we=d(ve,2);{let Ee=W(()=>M.uniqueStores.map(Oe=>({id:Oe,label:Oe,disabled:Oe===o.storeName})));ts(we,{get suggestions(){return s(Ee)},onSuggestionClick:Oe=>{o.storeName=Oe.label},title:"Suggestions de magasins :"})}var Ne=d(De,2),Me=c(Ne);B(()=>{F.disabled=s(r),Me.disabled=s(r)}),Be(F,()=>o.storeName,Ee=>o.storeName=Ee),Be(Me,()=>o.storeComment,Ee=>o.storeComment=Ee),f(Y,_e)};k(V,Y=>{s(i)&&Y(z)})}var q=d(V,2);{var X=Y=>{var _e=sv(),De=c(_e),ve=c(De),me=c(ve);me.__keydown=Te=>{Te.key==="Enter"&&(Te.preventDefault(),p(Te.currentTarget.value),Te.currentTarget.value="")};var F=d(me,2);F.__click=Te=>{const Ie=Te.currentTarget.previousElementSibling;p(Ie.value),Ie.value=""};var we=c(F);Ri(we,{class:"h-4 w-4"});var Ne=d(ve,2);{var Me=Te=>{var Ie=av();nt(Ie,20,()=>o.whoNames,ze=>ze,(ze,gt)=>{var bt=nv(),ee=c(bt),L=c(ee),ae=d(ee,2);ae.__click=[rv,_,gt];var Re=c(ae);vt(Re,{class:"h-3 w-3"}),B(()=>{j(L,gt),ae.disabled=s(r)}),f(ze,bt)}),f(Te,Ie)};k(Ne,Te=>{o.whoNames.length>0&&Te(Me)})}var Ee=d(Ne,2);{var Oe=Te=>{{let Ie=W(()=>M.uniqueWho.slice(0,8).map(ze=>({id:ze,label:ze,disabled:o.whoNames.includes(ze)})));ts(Te,{get suggestions(){return s(Ie)},onSuggestionClick:ze=>p(ze.label),title:"Suggestions :"})}};k(Ee,Te=>{M.uniqueWho.length>0&&Te(Oe)})}B(()=>{me.disabled=s(r),F.disabled=s(r)}),f(Y,_e)};k(q,Y=>{s(l)&&Y(X)})}var R=d(q,2),G=d(c(R),2);ms(G,{get items(){return s(u)},onToggleItem:x,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var re=d(I,2),se=c(re);se.__click=[so,r,t];var C=d(se,2);C.__click=[Ff,m,r,n,a,v,t,i,o,l];var ne=c(C);{var Pe=Y=>{var _e=ov();f(Y,_e)},Ae=Y=>{var _e=iv(),De=O(_e);Ln(De,{class:"h-4 w-4"});var ve=d(De);B(()=>j(ve,` Appliquer à ${s(v).length??""} produit(s)`)),f(Y,_e)};k(ne,Y=>{s(r)?Y(Pe):Y(Ae,!1)})}B(()=>{j(P,s(h)),E.disabled=s(r),se.disabled=s(r),C.disabled=s(r)||!s(m)}),f(e,b),J()}dt(["click","keydown"]);function uv(e,t){const r=e.reduce((a,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return a+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function dv(e,t){const r=e.filter(i=>!i.isSynced).map(i=>({productId:i.productId,productData:i.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(i){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",i)}const a=e.flatMap(i=>i.missingQuantities.map(l=>({productId:i.productId,quantity:l.q,unit:l.u,status:"delivered",notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:null,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:a},invoiceData:t}}async function fv(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=uv(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const a=100,o=[];if(n<=a)o.push(t);else{let p=[],_=0;for(const g of t){const x=(g.isSynced?0:1)+g.missingQuantities.length;_+x>a?(p.length>0&&o.push(p),p=[g],_=x):(p.push(g),_+=x)}p.length>0&&o.push(p)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,u=0,v=0;for(let p=0;p<o.length;p++){const _=o[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${o.length} (${_.length} produits)`);try{const g=await dv(_,r),x=await vv(g);if(i.push(x),x.success)l+=x.productsCreated,u+=x.purchasesCreated,v+=x.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${x.error}`);break}}catch(g){const x=g instanceof Error?g.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,g),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:x,timestamp:new Date().toISOString()});break}}const h=i.every(p=>p.success),m=i.some(p=>!p.success);return{success:h,results:i,totalProductsCreated:l,totalPurchasesCreated:u,totalExpensesCreated:v,error:m?"Un ou plusieurs lots ont échoué":void 0}}async function vv(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}function hv(e,t){T(t,!s(t))}var pv=w('<span class="text-base-content font-semibold"> </span>'),_v=w('<div class="text-base-content/80 flex-1"> </div>'),mv=w('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),gv=w('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),bv=w('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function yv(e,t){let r=Ve(t,"icon",3,Xu),n=Ve(t,"class",3,""),a=Ve(t,"initiallyOpen",3,!1),o=r(),i=Z(Ue(a())),l=Ue(t.children);var u=bv(),v=c(u);v.__click=[hv,i];var h=c(v),m=c(h);o(m,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(m,2);{var _=P=>{var E=pv(),$=c(E);B(()=>j($,t.title)),f(P,E)};k(p,P=>{t.title&&P(_)})}var g=d(h,2);{var x=P=>{var E=_v(),$=c(E);B(()=>j($,t.contentVisible)),f(P,E)};k(g,P=>{t.contentVisible&&P(x)})}var b=d(g,2);{var y=P=>{var E=mv(),$=c(E),I=c($);{var D=z=>{var q=Ye("en savoir plus");f(z,q)},ue=z=>{var q=Ye("masquer");f(z,q)};k(I,z=>{s(i)?z(ue,!1):z(D)})}var V=d($,2);{let z=W(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(i)?"rotate-180":""}`);Gu(V,{get class(){return s(z)}})}f(P,E)};k(b,P=>{l&&P(y)})}var N=d(v,2);{var S=P=>{var E=gv(),$=c(E),I=c($);oe(I,()=>t.children??te),B(()=>ke(E,1,`overflow-hidden transition-all duration-200 ${s(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),f(P,E)};k(N,P=>{l&&P(S)})}B(()=>{ke(u,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Xo(u,t.style),ke(v,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),Rr(v,"aria-expanded",s(i))}),f(e,u)}dt(["click"]);async function wv(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){T(r,!0),T(n,null),T(a,null);try{const u=`FACTURE_${Date.now()}`,v=s(o).map(_=>_.$id);M.setSyncStatus(v,!0);const h=[];for(const _ of s(o))h.push({productId:_.$id,isSynced:_.isSynced,productData:_,missingQuantities:_.missingQuantityArray||[]});const m={invoiceId:u,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(o).length} produits`,who:i.who.trim()||void 0};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${h.length} produits...`),l.onClose();const p=await fv(M.currentMainId,h,m);if(p.success)T(a,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(u){const v=u instanceof Error?u.message:"Erreur inconnue";T(n,v,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",u),M.clearSyncStatus()}finally{T(r,!1)}}}function oo(e,t,r){s(t)||r.onClose()}var Sv=w('<div class="alert alert-error"><!> <span> </span></div>'),xv=w('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),Pv=w(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),Ev=w("<option> </option>"),$v=w("<option> </option>"),kv=w('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),Tv=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Av=w("<!> ",1),Nv=w(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option>Annulé</option></select> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function Iv(e,t){K(t,!0);let r=Z(!1),n=Z(null),a=Z(null),o=Ue({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=Z(Ue(new Set));vn(()=>{T(i,new Set(t.products.map(Q=>Q.$id)),!0)});const l=W(()=>t.products.filter(Q=>s(i).has(Q.$id))),u=W(()=>s(l).length!==0),v=W(()=>`Achat groupé (${s(l).length} produits sélectionnés)`);function h(Q){const ge=new Set(s(i));ge.has(Q)?ge.delete(Q):ge.add(Q),T(i,ge,!0)}const m=W(()=>t.products.map(Q=>({id:Q.$id,label:Q.productName,title:Q.productName})));var p=Nv(),_=c(p),g=c(_),x=c(g),b=c(x);hr(b,{class:"h-5 w-5"});var y=d(b),N=d(x,2);N.__click=[oo,r,t];var S=c(N);vt(S,{class:"h-4 w-4"});var P=d(g,2),E=c(P);{var $=Q=>{var ge=Sv(),$e=c(ge);_s($e,{class:"h-4 w-4"});var Xe=d($e,2),Ge=c(Xe);B(()=>j(Ge,s(n))),f(Q,ge)};k(E,Q=>{s(n)&&Q($)})}var I=d(E,2);{var D=Q=>{var ge=xv(),$e=c(ge);Ln($e,{class:"h-4 w-4"});var Xe=d($e,2),Ge=c(Xe),et=d(Ge);{var yt=at=>{var Ke=Ye("+ 1 dépense globale");f(at,Ke)};k(et,at=>{s(a).expense&&at(yt)})}var Et=d(et,2);{var $t=at=>{var Ke=Ye();B(()=>j(Ke,`(traité en ${s(a).batches??""} lots)`)),f(at,Ke)};k(Et,at=>{s(a).batches&&s(a).batches>1&&at($t)})}B(()=>j(Ge,`Achat groupé créé avec succès ! ${s(a).purchases??""} produit(s) validés `)),f(Q,ge)};k(I,Q=>{s(a)&&Q(D)})}var ue=d(I,2),V=c(ue);yv(V,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(Q,ge)=>{var $e=Pv();f(Q,$e)},$$slots:{default:!0}});var z=d(ue,2),q=d(c(z),2),X=c(q),R=c(X),G=c(R);pr(G,{class:"h-4 w-4 opacity-50"});var re=d(G,2),se=d(R,2);nt(se,21,()=>M.uniqueStores,Va,(Q,ge)=>{var $e=Ev(),Xe=c($e),Ge={};B(()=>{j(Xe,s(ge)),Ge!==(Ge=s(ge))&&($e.value=($e.__value=s(ge))??"")}),f(Q,$e)});var C=d(X,2),ne=c(C),Pe=c(ne);ya(Pe,{class:"h-4 w-4 opacity-50"});var Ae=d(Pe,2),Y=d(ne,2);nt(Y,21,()=>M.uniqueWho,Va,(Q,ge)=>{var $e=$v(),Xe=c($e),Ge={};B(()=>{j(Xe,s(ge)),Ge!==(Ge=s(ge))&&($e.value=($e.__value=s(ge))??"")}),f(Q,$e)});var _e=d(C,2),De=c(_e),ve=c(De);Zu(ve,{class:"h-4 w-4 opacity-50"});var me=d(ve,2),F=d(q,2),we=c(F),Ne=c(we),Me=c(Ne);Me.value=Me.__value="delivered";var Ee=d(Me);Ee.value=Ee.__value="ordered";var Oe=d(Ee);Oe.value=Oe.__value="requested";var Te=d(Oe);Te.value=Te.__value="cancelled";var Ie=d(Ne,2),ze=d(we,2);{var gt=Q=>{var ge=kv(),$e=c(ge),Xe=d(c($e),2);B(()=>Xe.disabled=s(r)),Be(Xe,()=>o.deliveryDate,Ge=>o.deliveryDate=Ge),f(Q,ge)};k(ze,Q=>{o.status==="ordered"&&Q(gt)})}var bt=d(F,2),ee=c(bt),L=c(ee);ps(L,{class:"h-4 w-4 opacity-50"});var ae=d(L,2),Re=d(z,2),it=d(c(Re),2);ms(it,{get items(){return s(m)},onToggleItem:h,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var ie=d(Re,2),Ce=c(ie);Ce.__click=[oo,r,t];var qe=d(Ce,2);qe.__click=[wv,u,r,n,a,l,o,t];var pt=c(qe);{var nr=Q=>{var ge=Tv();f(Q,ge)},br=Q=>{var ge=Av(),$e=O(ge);hr($e,{class:"h-4 w-4"});var Xe=d($e);B(()=>j(Xe,` Valider ${s(l).length??""} produit(s)`)),f(Q,ge)};k(pt,Q=>{s(r)?Q(nr):Q(br,!1)})}B(()=>{j(y,` ${s(v)??""}`),N.disabled=s(r),re.disabled=s(r),Ae.disabled=s(r),me.disabled=s(r),Ne.disabled=s(r),ke(Ie,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),ae.disabled=s(r),Ce.disabled=s(r),qe.disabled=s(r)||!s(u)}),Be(re,()=>o.store,Q=>o.store=Q),Be(Ae,()=>o.who,Q=>o.who=Q),Be(me,()=>o.expense,Q=>o.expense=Q),Nr(Ne,()=>o.status,Q=>o.status=Q),Be(ae,()=>o.notes,Q=>o.notes=Q),f(e,p),J()}dt(["click"]);var Cv=()=>M.setGroupBy("none"),Dv=()=>M.setGroupBy("store"),Mv=()=>M.setGroupBy("productType"),Rv=(e,t)=>M.toggleProductType(t),Ov=w("<button><!> </button>"),qv=()=>M.toggleTemperature("frais"),jv=()=>M.toggleTemperature("surgele"),Bv=()=>M.clearTypeAndTemperatureFilters(),Lv=w('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),zv=(e,t)=>M.toggleStore(t),Vv=w("<button> </button>"),Uv=w('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Wv=(e,t)=>M.toggleWho(t),Gv=w("<button> </button>"),Qv=w('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Hv=(e,t)=>{M.clearFilters(),T(t,!1)},Kv=w('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Jv(e,t){K(t,!0);let r=Z(!1);const n=W(()=>M.filters),a=W(()=>M.uniqueStores),o=W(()=>M.uniqueWho),i=W(()=>M.uniqueProductTypes);var l=Kv(),u=O(l),v=c(u),h=d(v,2),m=d(c(h),2),p=c(m),_=c(p),g=c(_);Ya(g,{class:"w-5 h-5"});var x=d(_,2),b=c(x);vt(b,{class:"w-4 h-4"});var y=d(p,2),N=d(c(y),2),S=c(N);S.__change=[Cv];var P=d(S,2);P.__change=[Dv];var E=d(P,2);E.__change=[Mv];var $=d(y,2),I=c($),D=d(c(I),2);nt(D,20,()=>s(i),ve=>ve,(ve,me)=>{const F=W(()=>na(me));var we=Ov();we.__click=[Rv,me];var Ne=c(we);Ar(Ne,()=>s(F).icon,(Ee,Oe)=>{Oe(Ee,{class:"w-3 h-3 mr-1"})});var Me=d(Ne);B(Ee=>{ke(we,1,`btn btn-sm ${Ee??""}`),j(Me,` ${s(F).displayName??""}`)},[()=>s(n).selectedProductTypes.length===0?"btn-soft btn-accent":s(n).selectedProductTypes.includes(me)?"btn-accent":"btn-dash btn-accent"]),f(ve,we)});var ue=d(D,2),V=c(ue);V.__click=[qv];var z=c(V);Za(z,{class:"w-3 h-3"});var q=d(V,2);q.__click=[jv];var X=c(q);Xa(X,{class:"w-3 h-3"});var R=d(q,2);{var G=ve=>{var me=Lv();me.__click=[Bv];var F=c(me);vt(F,{class:"w-3 h-3"}),f(ve,me)};k(R,ve=>{(s(n).selectedProductTypes.length>0||s(n).selectedTemperatures.length>0)&&ve(G)})}var re=d($,2);{var se=ve=>{var me=Uv(),F=c(me),we=d(c(F),2);nt(we,20,()=>s(a),Ne=>Ne,(Ne,Me)=>{var Ee=Vv();Ee.__click=[zv,Me];var Oe=c(Ee);B(Te=>{ke(Ee,1,`btn btn-sm ${Te??""}`),j(Oe,Me)},[()=>s(n).selectedStores.length===0?"btn-soft btn-accent":s(n).selectedStores.includes(Me)?"btn-accent":"btn-dash btn-accent"]),f(Ne,Ee)}),f(ve,me)};k(re,ve=>{s(a).length>0&&ve(se)})}var C=d(re,2);{var ne=ve=>{var me=Qv(),F=c(me),we=d(c(F),2);nt(we,20,()=>s(o),Ne=>Ne,(Ne,Me)=>{var Ee=Gv();Ee.__click=[Wv,Me];var Oe=c(Ee);B(Te=>{ke(Ee,1,`btn btn-sm ${Te??""}`),j(Oe,Me)},[()=>s(n).selectedWho.length===0?"btn-soft btn-accent":s(n).selectedWho.includes(Me)?"btn-accent":"btn-dash btn-accent"]),f(Ne,Ee)}),f(ve,me)};k(C,ve=>{s(o).length>0&&ve(ne)})}var Pe=d(C,4);Pe.__click=[Hv,r];var Ae=c(Pe);vt(Ae,{class:"w-4 h-4 mr-2"});var Y=d(u,2),_e=c(Y),De=c(_e);Ya(De,{class:"w-6 h-6"}),B((ve,me)=>{tn(S,s(n).groupBy==="none"),tn(P,s(n).groupBy==="store"),tn(E,s(n).groupBy==="productType"),ke(V,1,`btn btn-sm ${ve??""}`),ke(q,1,`btn btn-sm ${me??""}`)},[()=>s(n).selectedTemperatures.length===0?"btn-soft btn-success":s(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(n).selectedTemperatures.length===0?"btn-soft btn-info":s(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Tc(v,()=>s(r),ve=>T(r,ve)),f(e,l),J()}dt(["change","click"]);var Yv=(e,t,r)=>t(r),Zv=w("<button><span> </span> <!></button>"),Xv=(e,t)=>t(),Fv=w('<div class="space-y-4"><div class="space-y-2"><fieldset><legend class="label"><span class="label-text">Dates incluses</span></legend> <div class="flex flex-wrap gap-1"><!> <button class="btn btn-sm btn-primary btn-outline ms-4" type="button"><span>Toutes les dates</span></button></div></fieldset></div></div>');function eh(e,t){K(t,!0);const n=[...Ve(t,"allDates",19,()=>[])()].sort();let a=n[0],o=n[n.length-1],i=Z(Ue(a)),l=Z(Ue(o));function u(S){s(i)===S&&s(l)===S?p():new Date(S)<new Date(s(i))?T(i,S,!0):(new Date(S)>new Date(s(l))||T(i,S,!0),T(l,S,!0))}function v(S){return new Date(S)>=new Date(s(i))&&new Date(S)<=new Date(s(l))?"btn-soft btn-primary":"btn-dash btn-primary opacity-80"}function h(S){return new Date(S).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function m(S){const E=new Date(S).getUTCHours();return E===12?"sun":E===20?"moon":E===8?"cloud":null}function p(){T(i,a,!0),T(l,o,!0)}vn(()=>{M.setDateRange(s(i),s(l))});var _=Fv(),g=c(_),x=c(g),b=d(c(x),2),y=c(b);nt(y,18,()=>n,S=>S,(S,P)=>{var E=Zv();E.__click=[Yv,u,P];var $=c(E),I=c($),D=d($,2);{var ue=z=>{fd(z,{size:16})},V=z=>{var q=H(),X=O(q);{var R=re=>{ad(re,{size:16})},G=re=>{var se=H(),C=O(se);{var ne=Pe=>{Ju(Pe,{size:16})};k(C,Pe=>{m(P)==="cloud"&&Pe(ne)},!0)}f(re,se)};k(X,re=>{m(P)==="moon"?re(R):re(G,!1)},!0)}f(z,q)};k(D,z=>{m(P)==="sun"?z(ue):z(V,!1)})}B((z,q)=>{ke(E,1,`btn btn-sm ${z??""}`),j(I,q)},[()=>v(P),()=>h(P)]),f(S,E)});var N=d(y,2);N.__click=[Xv,p],f(e,_),J()}dt(["click"]);const kn=e=>{var t=rh(),r=c(t);ia(r,{class:"h-4 w-4 text-amber-600"}),f(e,t)};function th(){}var rh=w('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),nh=()=>M.clearFilters(),ah=e=>M.setSearchQuery(e.currentTarget.value),sh=()=>M.setGroupBy("none"),oh=()=>M.setGroupBy("store"),ih=()=>M.setGroupBy("productType"),lh=(e,t)=>M.toggleProductType(t),ch=w("<button><!> </button>"),uh=()=>M.toggleTemperature("frais"),dh=()=>M.toggleTemperature("surgele"),fh=()=>M.clearTypeAndTemperatureFilters(),vh=w('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),hh=w('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),ph=(e,t)=>M.toggleStore(t),_h=w("<button><!> </button>"),mh=()=>M.clearStoreFilters(),gh=w('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),bh=w('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),yh=(e,t)=>M.toggleWho(t),wh=w("<button><!> </button>"),Sh=()=>M.clearWhoFilters(),xh=w('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Ph=w('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Eh=()=>M.handleSort("productName"),$h=()=>M.handleSort("store"),kh=()=>M.handleSort("who"),Th=()=>M.handleSort("productType"),Ah=w('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Nh=(e,t,r)=>t("store",r().map(n=>n.$id),r()),Ih=(e,t,r)=>t("who",r().map(n=>n.$id),r()),Ch=(e,t,r)=>t(r()),Dh=w(`<button class="btn btn-sm btn-success btn-soft" title="Ouvrir le modal d'achat groupé"><!> Achat groupé <!></button>`),Mh=w('<tr class="bg-base-200 sticky top-11 z-10 font-semibold"><td colspan="7" class="py-3"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!></div> <div class="flex items-center gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> Magasin <!></button> <button class="btn btn-sm btn-info btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> Volontaires <!></button> <!></div></div></td></tr>'),Rh=(e,t,r)=>t(s(r).$id,"recettes"),Oh=w('<div class="flex items-center gap-1 text-blue-600" title="Synchronisation en cours..."><!></div>'),qh=w('<div class="text-base-content/60 text-xs"> </div>'),jh=w('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Bh=w('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Lh=(e,t,r)=>t(s(r).$id,"magasins"),zh=w('<div class="tooltip tooltip-info"><div class="text-center"> </div></div>'),Vh=w('<div class="text-center"> </div>'),Uh=(e,t,r)=>t(s(r).$id,"volontaires"),Wh=w('<span class="badge badge-soft badge-info badge-sm"> </span>'),Gh=w('<div class="flex flex-wrap justify-center gap-2 pr-8"></div>'),Qh=(e,t,r)=>t(s(r).$id,"recettes"),Hh=w('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),Kh=(e,t,r)=>t(s(r).$id,"achats"),Jh=w("<div><!> <span> </span></div>"),Yh=w('<span class="text-center">-</span>'),Zh=(e,t,r)=>t(s(r)),Xh=w('<div class="flex items-center justify-center gap-2"><div class="bg-warning m-auto rounded px-2 py-1"> <button class="btn btn-xs btn-ghost text-base-content/70 btn-circle btn-outline hover:btn-success hover:text-success-content ms-3 transition-all hover:scale-105" title="Déclarer comme acheté"><!></button></div></div>'),Fh=w('<tr><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><!> <div><div class="font-medium"> </div> <!></div></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-2 text-center text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap justify-center gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!></td></tr>'),ep=w("<!> <!>",1),tp=w('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),rp=w('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><!> <div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!> <!> <!>',1);function np(e,t){K(t,!0);const r={Package:Vn,MessageCircleQuestionMark:nd,ShoppingCart:hr,Clock:Ku,CircleCheck:Qu,CircleX:Hu},n=W(()=>M.displayProducts),a=W(()=>M.stats),o=W(()=>M.uniqueStores),i=W(()=>M.uniqueWho),l=W(()=>M.uniqueProductTypes),u=W(()=>M.filters);let v=Z(null),h=Z("recettes"),m=Z(!1),p=Z("store"),_=Z(Ue([])),g=Z(Ue([])),x=Z(!1),b=Z(Ue([]));function y(U,he="recettes"){T(h,he,!0),T(v,U,!0)}function N(){T(v,null)}function S(U,he,Fe){T(p,U,!0),T(_,he,!0),T(g,Fe,!0),T(m,!0)}function P(){T(m,!1),T(p,"store"),T(_,[],!0),T(g,[],!0)}function E(U){console.log(`[ProductsTable] Modification groupée réussie: ${U.updatedCount} produits`)}function $(U){const he=U.filter(Fe=>Fe.displayMissingQuantity!=="✅ Complet"&&Fe.missingQuantityArray&&Fe.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${U.length} produits reçus → ${he.length} produits avec quantités manquantes`),T(b,he,!0),T(x,!0)}function I(){T(x,!1),T(b,[],!0)}function D(){console.log("[ProductsTable] Achat groupé créé avec succès"),I()}async function ue(U){try{if(!M.currentMainId)throw new Error("mainId non disponible");const he=U.missingQuantityArray||[];if(he.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let Fe=U.$id;U.isSynced||(console.log(`[ProductsTable] Produit ${U.$id} local, création pour validation rapide...`),Fe=(await ur(U.$id,{},Je=>M.getEnrichedProductById(Je))).$id,console.log(`[ProductsTable] Produit sync créé: ${Fe}`)),await Mi(M.currentMainId,Fe,he,{store:U.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${U.productName}`)}catch(he){console.error("[ProductsTable] Erreur validation rapide:",he),alert("Erreur lors de la validation rapide: "+he.message)}}var V=rp(),z=O(V),q=c(z),X=c(q),R=c(X);to(R,{class:"mr-1 h-4 w-4"});var G=d(R),re=d(X,2);re.__click=[th];var se=c(re);id(se,{class:"mr-1 h-4 w-4"});var C=d(q,2),ne=c(C),Pe=c(ne),Ae=c(Pe),Y=c(Ae);Ya(Y,{class:"h-5 w-5"});var _e=d(Ae,2);_e.__click=[nh];var De=c(_e);vt(De,{class:"h-4 w-4"});var ve=d(ne,2),me=c(ve),F=d(c(me),2),we=c(F);dd(we,{class:"h-4 w-4"});var Ne=d(we,2);Ne.__input=[ah];var Me=d(me,2),Ee=d(c(Me),2),Oe=c(Ee);Oe.__change=[sh];var Te=d(Oe,2);Te.__change=[oh];var Ie=d(Te,2);Ie.__change=[ih];var ze=d(ve,2),gt=c(ze);eh(gt,{get allDates(){return M.allDates}});var bt=d(gt,2),ee=c(bt);{var L=U=>{var he=hh(),Fe=c(he),be=d(c(Fe),2),Je=c(be);nt(Je,16,()=>s(l),st=>st,(st,ot)=>{const Kt=W(()=>na(ot));var Dt=ch();Dt.__click=[lh,ot];var lr=c(Dt);Ar(lr,()=>s(Kt).icon,(cr,Kr)=>{Kr(cr,{class:"mr-1 h-5 w-5"})});var Hr=d(lr);B(cr=>{ke(Dt,1,`btn btn-sm ${cr??""}`),j(Hr,` ${s(Kt).displayName??""}`)},[()=>s(u).selectedProductTypes.length===0?"btn-soft btn-accent":s(u).selectedProductTypes.includes(ot)?"btn-accent":"btn-dash btn-accent"]),f(st,Dt)});var Ct=d(Je,2);Ct.__click=[uh];var ir=c(Ct);Za(ir,{class:"h-5 w-5"});var Qe=d(Ct,2);Qe.__click=[dh];var tt=c(Qe);Xa(tt,{class:"h-5 w-5"});var We=d(Qe,2);{var pe=st=>{var ot=vh();ot.__click=[fh];var Kt=c(ot);vt(Kt,{class:"h-3 w-3"}),f(st,ot)};k(We,st=>{(s(u).selectedProductTypes.length>0||s(u).selectedTemperatures.length>0)&&st(pe)})}B((st,ot)=>{ke(Ct,1,`btn btn-sm ms-4 ${st??""}`),ke(Qe,1,`btn btn-sm ${ot??""}`)},[()=>s(u).selectedTemperatures.length===0?"btn-soft btn-success":s(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(u).selectedTemperatures.length===0?"btn-soft btn-info":s(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),f(U,he)};k(ee,U=>{s(l).length>0&&U(L)})}var ae=d(bt,2),Re=c(ae);{var it=U=>{var he=bh(),Fe=c(he),be=d(c(Fe),2),Je=c(be);nt(Je,16,()=>s(o),Qe=>Qe,(Qe,tt)=>{var We=_h();We.__click=[ph,tt];var pe=c(We);pr(pe,{class:"mr-1 h-3 w-3"});var st=d(pe);B(ot=>{ke(We,1,`btn btn-xs ${ot??""}`),j(st,` ${tt??""}`)},[()=>s(u).selectedStores.length===0?"btn-soft btn-accent":s(u).selectedStores.includes(tt)?"btn-accent":"btn-dash btn-accent"]),f(Qe,We)});var Ct=d(Je,2);{var ir=Qe=>{var tt=gh();tt.__click=[mh];var We=c(tt);vt(We,{class:"h-3 w-3"}),f(Qe,tt)};k(Ct,Qe=>{s(u).selectedStores.length>0&&Qe(ir)})}f(U,he)};k(Re,U=>{s(o).length>0&&U(it)})}var ie=d(Re,2);{var Ce=U=>{var he=Ph(),Fe=c(he),be=d(c(Fe),2),Je=c(be);nt(Je,16,()=>s(i),Qe=>Qe,(Qe,tt)=>{var We=wh();We.__click=[yh,tt];var pe=c(We);ya(pe,{class:"mr-1 h-3 w-3"});var st=d(pe);B(ot=>{ke(We,1,`btn btn-xs ${ot??""}`),j(st,` ${tt??""}`)},[()=>s(u).selectedWho.length===0?" btn-soft btn-info":s(u).selectedWho.includes(tt)?" btn-info":"btn-dash btn-info"]),f(Qe,We)});var Ct=d(Je,2);{var ir=Qe=>{var tt=xh();tt.__click=[Sh];var We=c(tt);vt(We,{class:"h-3 w-3"}),f(Qe,tt)};k(Ct,Qe=>{s(u).selectedWho.length>0&&Qe(ir)})}f(U,he)};k(ie,U=>{s(i).length>0&&U(Ce)})}var qe=d(C,2),pt=c(qe),nr=c(pt),br=c(nr),Q=c(br);Q.__click=[Eh];var ge=c(Q),$e=c(ge);to($e,{class:"h-4 w-4"});var Xe=d($e,2);{var Ge=U=>{var he=Ye();B(()=>j(he,s(u).sortDirection==="asc"?"↑":"↓")),f(U,he)};k(Xe,U=>{s(u).sortColumn==="productName"&&U(Ge)})}var et=d(Q);et.__click=[$h];var yt=c(et),Et=c(yt);pr(Et,{class:"h-4 w-4"});var $t=d(Et,2);{var at=U=>{var he=Ye();B(()=>j(he,s(u).sortDirection==="asc"?"↑":"↓")),f(U,he)};k($t,U=>{s(u).sortColumn==="store"&&U(at)})}var Ke=d(et);Ke.__click=[kh];var qt=c(Ke),Gt=c(qt);Fa(Gt,{class:"h-4 w-4"});var ar=d(Gt,2);{var jt=U=>{var he=Ye();B(()=>j(he,s(u).sortDirection==="asc"?"↑":"↓")),f(U,he)};k(ar,U=>{s(u).sortColumn==="who"&&U(jt)})}var Qt=d(Ke);Qt.__click=[Th];var Vr=c(Qt),yr=d(c(Vr));{var wr=U=>{var he=Ye();B(()=>j(he,s(u).sortDirection==="asc"?"↑":"↓")),f(U,he)};k(yr,U=>{s(u).sortColumn==="productType"&&U(wr)})}var sr=d(Qt,2),Sr=c(sr),or=c(Sr);hr(or,{class:"h-4 w-4"});var Ur=d(sr),xr=c(Ur),Wr=c(xr);ed(Wr,{class:"h-4 w-4"});var pn=d(nr);nt(pn,21,()=>Object.entries(s(n)),([U,he])=>U,(U,he)=>{var Fe=W(()=>uo(s(he),2));let be=()=>s(Fe)[0],Je=()=>s(Fe)[1];var Ct=ep(),ir=O(Ct);{var Qe=We=>{const pe=W(()=>na(be()));var st=Mh(),ot=c(st),Kt=c(ot),Dt=c(Kt),lr=c(Dt);{var Hr=Tt=>{var wt=Ye();B(()=>j(wt,`🏪 ${be()??""} (${Je().length??""})`)),f(Tt,wt)},cr=Tt=>{var wt=H(),Jr=O(wt);{var yn=Jt=>{var Er=Ah(),Hn=c(Er);Ar(Hn,()=>s(pe).icon,(Ta,Sn)=>{Sn(Ta,{class:"h-4 w-4"})});var Kn=d(Hn,2),wn=c(Kn),Jn=d(Kn,2),ka=c(Jn);B(()=>{j(wn,s(pe).displayName),j(ka,`(${Je().length??""})`)}),f(Jt,Er)},Yr=Jt=>{var Er=Ye();B(()=>j(Er,`📦 ${be()??""} (${Je().length??""})`)),f(Jt,Er)};k(Jr,Jt=>{s(u).groupBy==="productType"?Jt(yn):Jt(Yr,!1)},!0)}f(Tt,wt)};k(lr,Tt=>{s(u).groupBy==="store"?Tt(Hr):Tt(cr,!1)})}var Kr=d(Dt,2),gn=c(Kr);gn.__click=[Nh,S,Je];var Un=c(gn);pr(Un,{size:16});var Wn=d(Un,2);ia(Wn,{size:16});var bn=d(gn,2);bn.__click=[Ih,S,Je];var Gn=c(bn);Fa(Gn,{size:16});var Ea=d(Gn,2);ia(Ea,{size:16});var $a=d(bn,2);{var Qn=Tt=>{var wt=Dh();wt.__click=[Ch,$,Je];var Jr=c(wt);hr(Jr,{size:16});var yn=d(Jr,2);eo(yn,{size:16}),f(Tt,wt)};k($a,Tt=>{Je().some(wt=>wt.displayMissingQuantity!=="✅ Complet")&&Tt(Qn)})}f(We,st)};k(ir,We=>{be()!==""&&We(Qe)})}var tt=d(ir,2);nt(tt,17,()=>pd(Je(),s(u)),We=>We.$id,(We,pe)=>{const st=W(()=>M.getFormattedTotalNeeded(s(pe).$id)),ot=W(()=>na(s(pe).productType)),Kt=W(()=>_d(s(pe).purchases||[]));var Dt=Fh(),lr=c(Dt);lr.__click=[Rh,y,pe];var Hr=c(lr),cr=c(Hr),Kr=c(cr);{var gn=le=>{var Se=Oh(),He=c(Se);td(He,{class:"h-4 w-4 animate-spin"}),f(le,Se)};k(Kr,le=>{s(pe).status==="isSyncing"&&le(gn)})}var Un=d(Kr,2),Wn=c(Un),bn=c(Wn),Gn=d(Wn,2);{var Ea=le=>{var Se=qh(),He=c(Se);B(()=>j(He,`Ancien: ${s(pe).previousNames[0]??""}`)),f(le,Se)};k(Gn,le=>{s(pe).previousNames&&s(pe).previousNames.length>0&&le(Ea)})}var $a=d(cr,2),Qn=c($a);{var Tt=le=>{var Se=jh(),He=c(Se);Za(He,{class:"text-success h-4 w-4"}),f(le,Se)};k(Qn,le=>{s(pe).pFrais&&le(Tt)})}var wt=d(Qn,2);{var Jr=le=>{var Se=Bh(),He=c(Se);Xa(He,{class:"text-info h-4 w-4"}),f(le,Se)};k(wt,le=>{s(pe).pSurgel&&le(Jr)})}var yn=d(Hr,2);kn(yn);var Yr=d(lr);Yr.__click=[Lh,y,pe];var Jt=c(Yr);{var Er=le=>{var Se=zh(),He=c(Se),St=c(He);B(()=>{Rr(Se,"data-tip",s(pe).storeInfo?.storeComment),j(St,s(pe).storeInfo?.storeName||"-")}),f(le,Se)},Hn=le=>{var Se=Vh(),He=c(Se);B(()=>j(He,s(pe).storeInfo?.storeName||"-")),f(le,Se)};k(Jt,le=>{s(pe).storeInfo?.storeComment?le(Er):le(Hn,!1)})}var Kn=d(Jt,2);kn(Kn);var wn=d(Yr);wn.__click=[Uh,y,pe];var Jn=c(wn);{var ka=le=>{var Se=Gh();nt(Se,20,()=>s(pe).who,He=>He,(He,St)=>{var Bt=Wh(),$r=c(Bt);B(()=>j($r,St)),f(He,Bt)}),f(le,Se)};k(Jn,le=>{s(pe).who&&s(pe).who.length>0&&le(ka)})}var Ta=d(Jn,2);kn(Ta);var Sn=d(wn),Oi=c(Sn),gs=c(Oi);Ar(gs,()=>s(ot).icon,(le,Se)=>{Se(le,{class:"h-3 w-3"})});var qi=d(gs),Aa=d(Sn);Aa.__click=[Qh,y,pe];var bs=c(Aa),ji=c(bs),ys=d(bs,2);{var Bi=le=>{var Se=Hh(),He=c(Se),St=c(He),Bt=d(St);hs(Bt,{class:"h-3 w-3"});var $r=d(He,2),Yn=c($r),xn=d(Yn);vd(xn,{class:"h-3 w-3"}),B(()=>{j(St,`${s(pe)?.nbRecipes??""} `),j(Yn,`${s(pe)?.totalAssiettes??""} `)}),f(le,Se)};k(ys,le=>{(s(pe).nbRecipes||s(pe).totalAssiettes)&&le(Bi)})}var Li=d(ys,2);kn(Li);var Na=d(Aa);Na.__click=[Kh,y,pe];var ws=c(Na),Ss=c(ws);nt(Ss,17,()=>s(Kt),le=>le.status,(le,Se)=>{const He=W(()=>r[s(Se).icon]);var St=Jh(),Bt=c(St);Ar(Bt,()=>s(He),(xn,Ki)=>{Ki(xn,{class:"h-4 w-4"})});var $r=d(Bt,2),Yn=c($r);B(xn=>{ke(St,1,`badge badge-soft flex items-center gap-2 ${s(Se).badgeClass??""}`),j(Yn,xn)},[()=>wa(s(Se).quantity,s(Se).unit)]),f(le,St)});var zi=d(Ss,2);{var Vi=le=>{var Se=Yh();f(le,Se)};k(zi,le=>{s(Kt).length===0&&le(Vi)})}var Ui=d(ws,2);kn(Ui);var Wi=d(Na),Gi=c(Wi);{var Qi=le=>{var Se=Xh(),He=c(Se),St=c(He),Bt=d(St);Bt.__click=[Zh,ue,pe];var $r=c(Bt);Ln($r,{size:16}),B(()=>j(St,`${s(pe).displayMissingQuantity??""} `)),f(le,Se)},Hi=le=>{eo(le,{size:28,strokeWidth:3,class:"text-success m-auto"})};k(Gi,le=>{s(pe).displayMissingQuantity!=="✅ Complet"?le(Qi):le(Hi,!1)})}B(()=>{ke(Dt,1,`hover:bg-base-200/20 transition-colors ${s(pe).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-400 bg-blue-50/30":""}`),j(bn,s(pe).productName),ke(Yr,1,`${s(u).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),ke(Sn,1,Zo(s(u).groupBy==="productType"?"hidden":"")),j(qi,` ${s(ot).displayName??""}`),j(ji,s(st))}),f(We,Dt)}),f(U,Ct)});var Gr=d(pt,2);{var kt=U=>{var he=tp();f(U,he)};k(Gr,U=>{Object.values(s(n)).flat().length===0&&U(kt)})}var Ht=d(z,2);{var _n=U=>{Xf(U,{get productId(){return s(v)},get initialTab(){return s(h)},onClose:N})};k(Ht,U=>{s(v)&&U(_n)})}var Qr=d(Ht,2);{var mn=U=>{cv(U,{get productIds(){return s(_)},get products(){return s(g)},get editType(){return s(p)},onClose:P,onSuccess:E})};k(Qr,U=>{s(m)&&U(mn)})}var Pr=d(Qr,2);{var xa=U=>{Iv(U,{get products(){return s(b)},onClose:I,onSuccess:D})};k(Pr,U=>{s(x)&&U(xa)})}var Pa=d(Pr,2);Jv(Pa,{}),B(()=>{j(G,` ${s(a).total??""}`),Ec(Ne,s(u).searchQuery),tn(Oe,s(u).groupBy==="none"),tn(Te,s(u).groupBy==="store"),tn(Ie,s(u).groupBy==="productType"),ke(et,1,`hover:bg-base-100 cursor-pointer text-center ${s(u).groupBy==="store"?"hidden":""}`),ke(Qt,1,`hover:bg-base-100 cursor-pointer text-center ${s(u).groupBy==="productType"?"hidden":""}`)}),f(e,V),J()}dt(["click","input","change"]);Nl();var ap=w('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function sp(e){var t=ap();f(e,t)}var op=w('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function ip(e,t){var r=op(),n=d(c(r),2),a=d(c(n),2),o=c(a);B(()=>j(o,t.message)),f(e,r)}var lp=w('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function cp(e,t){var r=lp(),n=c(r),a=c(n);_s(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(a,2),i=d(c(o),2),l=c(i);B(()=>j(l,t.message||"Erreur inconnue")),f(e,r)}var up=w('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),dp=w('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),fp=w('<div class="text-base-content/60"> </div>'),vp=w('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),hp=w('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),pp=w('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),_p=w('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function mp(e,t){K(t,!0);let r,n=Z(null),a=Z(!0),o=Z(!1);ni(async()=>{r=qu();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await M.initialize(r)}catch(C){const ne=C instanceof Error?C.message:"Erreur lors de l'initialisation";T(n,ne,!0),console.error("[App] Erreur initialisation:",C)}finally{T(a,!1)}}),Cc(()=>{M.destroy()});async function i(){if(!(!r||s(o))){T(o,!0);try{await M.forceReload(r)}catch(C){console.error("[App] Erreur lors du rechargement forcé:",C)}finally{T(o,!1)}}}const l=W(()=>s(n)||M.error),u=W(()=>s(a)||M.loading),v=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var h=_p(),m=c(h),p=c(m),_=c(p),g=d(c(_),2),x=c(g);{var b=C=>{var ne=up();f(C,ne)};k(x,C=>{M.realtimeConnected&&C(b)})}var y=d(x,2);{var N=C=>{var ne=dp();f(C,ne)};k(y,C=>{M.syncing&&C(N)})}var S=d(y,2);{var P=C=>{var ne=fp(),Pe=c(ne);B(Ae=>j(Pe,`Maj: ${Ae??""}`),[()=>new Date(M.lastSync).toLocaleTimeString()]),f(C,ne)};k(S,C=>{M.lastSync&&C(P)})}var E=d(S,2);{var $=C=>{var ne=vp();let Pe;ne.__click=i;var Ae=c(ne);ld(Ae,{class:"h-4 w-4"}),B(Y=>{Pe=ke(ne,1,"btn btn-outline btn-sm",null,Pe,Y),ne.disabled=s(o)||M.loading},[()=>({loading:s(o)||M.loading})]),f(C,ne)};k(E,C=>{s(n)||C($)})}var I=d(E,2);{var D=C=>{var ne=hp(),Pe=c(ne),Ae=c(Pe);rd(Ae,{class:"mr-2 h-4 w-4"}),B(()=>Rr(Pe,"href",v)),f(C,ne)};k(I,C=>{s(n)&&C(D)})}var ue=d(m,2),V=c(ue);{var z=C=>{cp(C,{get message(){return s(l)}})},q=C=>{var ne=H(),Pe=O(ne);{var Ae=Y=>{ip(Y,{get message(){return s(l)}})};k(Pe,Y=>{s(l)&&Y(Ae)},!0)}f(C,ne)};k(V,C=>{s(n)?C(z):C(q,!1)})}var X=d(V,2);{var R=C=>{sp(C)};k(X,C=>{s(u)&&C(R)})}var G=d(X,2);{var re=C=>{np(C,{})},se=C=>{var ne=H(),Pe=O(ne);{var Ae=Y=>{var _e=pp();f(Y,_e)};k(Pe,Y=>{!M.loading&&!s(n)&&Y(Ae)},!0)}f(C,ne)};k(G,C=>{M.enrichedProducts.length>0?C(re):C(se,!1)})}f(e,h),J()}dt(["click"]);hc(mp,{target:document.getElementById("app_products")});
