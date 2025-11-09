(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const ns=!1;var pn=Array.isArray,Bo=Array.prototype.indexOf,ra=Array.from,Bn=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Lo=Object.getOwnPropertyDescriptors,zo=Object.prototype,Vo=Array.prototype,as=Object.getPrototypeOf,ba=Object.isExtensible;function qr(e){return typeof e=="function"}const F=()=>{};function Uo(e){for(var t=0;t<e.length;t++)e[t]()}function ss(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function os(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const ut=2,na=4,aa=8,dr=16,Lt=32,fr=64,sa=128,bt=256,fn=512,nt=1024,ht=2048,Ft=4096,Pt=8192,vr=16384,oa=32768,hr=65536,ya=1<<17,Wo=1<<18,Cr=1<<19,Go=1<<20,Ln=1<<21,mn=1<<22,sr=1<<23,or=Symbol("$state"),is=Symbol("legacy props"),Qo=Symbol(""),Vr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function ls(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ho(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ko(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Jo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Yo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Zo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Xo(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Fo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ei(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ti(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ri(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const gn=1,_n=2,cs=4,ni=8,ai=16,si=1,oi=2,ii=4,li=8,ci=16,ui=1,di=2,Je=Symbol(),fi="http://www.w3.org/1999/xhtml",vi="http://www.w3.org/2000/svg",hi="@attach";function pi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function mi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let gi=!1;function us(e){return e===this.v}function ds(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function _i(e,t){return e!==t}function fs(e){return!ds(e,this.v)}let Ir=!1,bi=!1;function yi(){Ir=!0}let He=null;function $r(e){He=e}function z(e,t=!1,r){He={p:He,c:null,e:null,s:e,x:null,l:Ir&&!t?{s:null,u:null,$:[]}:null}}function V(e){var t=He,r=t.e;if(r!==null){t.e=null;for(var n of r)ks(n)}return He=t.p,{}}function Dr(){return!Ir||He!==null&&He.l===null}let rr=[];function vs(){var e=rr;rr=[],Uo(e)}function lr(e){if(rr.length===0&&!Ur){var t=rr;queueMicrotask(()=>{t===rr&&vs()})}rr.push(e)}function wi(){for(;rr.length>0;)vs()}const Si=new WeakMap;function hs(e){var t=Se;if(t===null)return xe.f|=sr,e;if((t.f&oa)===0){if((t.f&sa)===0)throw!t.parent&&e instanceof Error&&ps(e),e;t.b.error(e)}else Er(e,t)}function Er(e,t){for(;t!==null;){if((t.f&sa)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&ps(e),e}function ps(e){const t=Si.get(e);t&&(Bn(e,"message",{value:t.message}),Bn(e,"stack",{value:t.stack}))}const an=new Set;let De=null,ln=null,zn=new Set,Mt=[],bn=null,Vn=!1,Ur=!1;class _t{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#l=[];#o=[];#i=[];#a=[];#s=[];#f=[];skipped_effects=new Set;process(t){Mt=[],ln=null;var r=_t.apply(this);for(const o of t)this.#n(o);if(this.#c===0){this.#v();var n=this.#o,a=this.#i;this.#o=[],this.#i=[],this.#a=[],ln=this,De=null,wa(n),wa(a),ln=null,this.#u?.resolve()}else this.#d(this.#o),this.#d(this.#i),this.#d(this.#a);r();for(const o of this.#l)Kr(o);this.#l=[]}#n(t){t.f^=nt;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Lt|fr))!==0,o=a&&(n&nt)!==0,i=o||(n&Pt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=nt:(n&na)!==0?this.#i.push(r):(n&nt)===0&&((n&mn)!==0&&r.b?.is_pending()?this.#l.push(r):Pn(r)&&((r.f&dr)!==0&&this.#a.push(r),Kr(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#d(t){for(const r of t)((r.f&ht)!==0?this.#s:this.#f).push(r),it(r,nt);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){De=this}deactivate(){De=null}flush(){if(Mt.length>0){if(this.activate(),ms(),De!==null&&De!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of zn)if(zn.delete(t),t(),De!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),an.size>1){this.#e.clear();let t=!0;for(const r of an){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;gs(n)}if(Mt.length>0){De=r;const n=_t.apply(r);for(const a of Mt)r.#n(a);Mt=[],n()}}De=null}an.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#s)it(t,ht),cr(t);for(const t of this.#f)it(t,Ft),cr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=ss()).promise}static ensure(){if(De===null){const t=De=new _t;an.add(De),Ur||_t.enqueue(()=>{De===t&&t.flush()})}return De}static enqueue(t){lr(t)}static apply(t){return F}}function xi(e){var t=Ur;Ur=!0;try{for(var r;;){if(wi(),Mt.length===0&&(De?.flush(),Mt.length===0))return bn=null,r;ms()}}finally{Ur=t}}function ms(){var e=Pr;Vn=!0;try{var t=0;for($a(!0);Mt.length>0;){var r=_t.ensure();if(t++>1e3){var n,a;Pi()}r.process(Mt),Kt.clear()}}finally{Vn=!1,$a(e),bn=null}}function Pi(){try{Zo()}catch(e){Er(e,bn)}}let tr=null;function wa(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(vr|Pt))===0&&Pn(n)&&(tr=[],Kr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Ns(n):n.fn=null),tr?.length>0)){Kt.clear();for(const a of tr)Kr(a);tr=[]}}tr=null}}function gs(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&ut)!==0?gs(t):(r&(mn|dr))!==0&&(it(t,ht),cr(t))}}function cr(e){for(var t=bn=e;t.parent!==null;){t=t.parent;var r=t.f;if(Vn&&t===Se&&(r&dr)!==0)return;if((r&(fr|Lt))!==0){if((r&nt)===0)return;t.f^=nt}}Mt.push(t)}function ia(e){let t=0,r=Yt(0),n;return()=>{Li()&&(s(r),fa(()=>(t===0&&(n=Rr(()=>e(()=>Ct(r)))),t+=1,()=>{lr(()=>{t-=1,t===0&&(n?.(),n=void 0,Ct(r))})})))}}var $i=hr|Cr|sa;function Ei(e,t,r){new ki(e,t,r)}class ki{parent;#e=!1;#r;#c=null;#u;#l;#o;#i=null;#a=null;#s=null;#f=null;#n=0;#d=0;#v=!1;#t=null;#g=()=>{this.#t&&kr(this.#t,this.#n)};#_=ia(()=>(this.#t=Yt(this.#n),()=>{this.#t=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#l=n,this.parent=Se.b,this.#e=!!this.#u.pending,this.#o=Ut(()=>{Se.b=this;{try{this.#i=tt(()=>n(this.#r))}catch(a){this.error(a)}this.#d>0?this.#p():this.#e=!1}},$i)}#w(){try{this.#i=tt(()=>this.#l(this.#r))}catch(t){this.error(t)}this.#e=!1}#S(){const t=this.#u.pending;t&&(this.#a=tt(()=>t(this.#r)),_t.enqueue(()=>{this.#i=this.#h(()=>(_t.ensure(),tt(()=>this.#l(this.#r)))),this.#d>0?this.#p():(Ot(this.#a,()=>{this.#a=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#h(t){var r=Se,n=xe,a=He;It(this.#o),ct(this.#o),$r(this.#o.ctx);try{return t()}catch(o){return hs(o),null}finally{It(r),ct(n),$r(a)}}#p(){const t=this.#u.pending;this.#i!==null&&(this.#f=document.createDocumentFragment(),Ai(this.#i,this.#f)),this.#a===null&&(this.#a=tt(()=>t(this.#r)))}#m(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t);return}this.#d+=t,this.#d===0&&(this.#e=!1,this.#a&&Ot(this.#a,()=>{this.#a=null}),this.#f&&(this.#r.before(this.#f),this.#f=null),lr(()=>{_t.ensure().flush()}))}update_pending_count(t){this.#m(t),this.#n+=t,zn.add(this.#g)}get_effect_pending(){return this.#_(),s(this.#t)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#i&&(rt(this.#i),this.#i=null),this.#a&&(rt(this.#a),this.#a=null),this.#s&&(rt(this.#s),this.#s=null);var a=!1,o=!1;const i=()=>{if(a){mi();return}a=!0,o&&ri(),_t.ensure(),this.#n=0,this.#s!==null&&Ot(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#i=this.#h(()=>(this.#v=!1,tt(()=>this.#l(this.#r)))),this.#d>0?this.#p():this.#e=!1};var l=xe;try{ct(null),o=!0,r?.(t,i),o=!1}catch(c){Er(c,this.#o&&this.#o.parent)}finally{ct(l)}n&&lr(()=>{this.#s=this.#h(()=>{this.#v=!0;try{return tt(()=>{n(this.#r,()=>t,()=>i)})}catch(c){return Er(c,this.#o.parent),null}finally{this.#v=!1}})})}}function Ai(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:tn(r);t.append(r),r=a}}function _s(e,t,r){const n=Dr()?yn:la;if(t.length===0){r(e.map(n));return}var a=De,o=Se,i=Ti();Promise.all(t.map(l=>Ni(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(o.f&vr)===0&&Er(c,o)}a?.deactivate(),bs()}).catch(l=>{Er(l,o)})}function Ti(){var e=Se,t=xe,r=He,n=De;return function(){It(e),ct(t),$r(r),n?.activate()}}function bs(){It(null),ct(null),$r(null)}function yn(e){var t=ut|ht,r=xe!==null&&(xe.f&ut)!==0?xe:null;return Se===null||r!==null&&(r.f&bt)!==0?t|=bt:Se.f|=Cr,{ctx:He,deps:null,effects:null,equals:us,f:t,fn:e,reactions:null,rv:0,v:Je,wv:0,parent:r??Se,ac:null}}function Ni(e,t){let r=Se;r===null&&Ho();var n=r.b,a=void 0,o=Yt(Je),i=!xe,l=new Map;return Vi(()=>{var c=ss();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var f=De,v=n.is_pending();i&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(Vr),l.set(f,c)));const g=(p,m=void 0)=>{v||f.activate(),m?m!==Vr&&(o.f|=sr,kr(o,m)):((o.f&sr)!==0&&(o.f^=sr),kr(o,p)),i&&(n.update_pending_count(-1),v||f.decrement()),bs()};c.promise.then(g,p=>g(null,p||"unknown"))}),Es(()=>{for(const c of l.values())c.reject(Vr)}),new Promise(c=>{function f(v){function g(){v===a?c(o):f(a)}v.then(g,g)}f(a)})}function J(e){const t=yn(e);return Is(t),t}function la(e){const t=yn(e);return t.equals=fs,t}function ys(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)rt(t[r])}}function Mi(e){for(var t=e.parent;t!==null;){if((t.f&ut)===0)return t;t=t.parent}return null}function ca(e){var t,r=Se;It(Mi(e));try{ys(e),t=qs(e)}finally{It(r)}return t}function ws(e){var t=ca(e);if(e.equals(t)||(e.v=t,e.wv=Rs()),!mr){var r=(Qt||(e.f&bt)!==0)&&e.deps!==null?Ft:nt;it(e,r)}}const Kt=new Map;function Yt(e,t){var r={f:0,v:e,reactions:null,equals:us,rv:0,wv:0};return r}function H(e,t){const r=Yt(e);return Is(r),r}function Ci(e,t=!1,r=!0){const n=Yt(e);return t||(n.equals=fs),Ir&&r&&He!==null&&He.l!==null&&(He.l.s??=[]).push(n),n}function E(e,t,r=!1){xe!==null&&(!xt||(xe.f&ya)!==0)&&Dr()&&(xe.f&(ut|dr|mn|ya))!==0&&!qt?.includes(e)&&ti();let n=r?Ne(t):t;return kr(e,n)}function kr(e,t){if(!e.equals(t)){var r=e.v;mr?Kt.set(e,t):Kt.set(e,r),e.v=t;var n=_t.ensure();n.capture(e,r),(e.f&ut)!==0&&((e.f&ht)!==0&&ca(e),it(e,(e.f&bt)===0?nt:Ft)),e.wv=Rs(),Ss(e,ht),Dr()&&Se!==null&&(Se.f&nt)!==0&&(Se.f&(Lt|fr))===0&&(gt===null?Gi([e]):gt.push(e))}return t}function Ct(e){E(e,e.v+1)}function Ss(e,t){var r=e.reactions;if(r!==null)for(var n=Dr(),a=r.length,o=0;o<a;o++){var i=r[o],l=i.f;if(!(!n&&i===Se)){var c=(l&ht)===0;c&&it(i,t),(l&ut)!==0?Ss(i,Ft):c&&((l&dr)!==0&&tr!==null&&tr.push(i),cr(i))}}}function Ne(e){if(typeof e!="object"||e===null||or in e)return e;const t=as(e);if(t!==zo&&t!==Vo)return e;var r=new Map,n=pn(e),a=H(0),o=jt,i=l=>{if(jt===o)return l();var c=xe,f=jt;ct(null),ka(o);var v=l();return ct(c),ka(f),v};return n&&r.set("length",H(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Fo();var v=r.get(c);return v===void 0?v=i(()=>{var g=H(f.value);return r.set(c,g),g}):E(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=i(()=>H(Je));r.set(c,v),Ct(a)}}else E(f,Je),Ct(a);return!0},get(l,c,f){if(c===or)return e;var v=r.get(c),g=c in l;if(v===void 0&&(!g||Ht(l,c)?.writable)&&(v=i(()=>{var m=Ne(g?l[c]:Je),_=H(m);return _}),r.set(c,v)),v!==void 0){var p=s(v);return p===Je?void 0:p}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=s(v))}else if(f===void 0){var g=r.get(c),p=g?.v;if(g!==void 0&&p!==Je)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,c){if(c===or)return!0;var f=r.get(c),v=f!==void 0&&f.v!==Je||Reflect.has(l,c);if(f!==void 0||Se!==null&&(!v||Ht(l,c)?.writable)){f===void 0&&(f=i(()=>{var p=v?Ne(l[c]):Je,m=H(p);return m}),r.set(c,f));var g=s(f);if(g===Je)return!1}return v},set(l,c,f,v){var g=r.get(c),p=c in l;if(n&&c==="length")for(var m=f;m<g.v;m+=1){var _=r.get(m+"");_!==void 0?E(_,Je):m in l&&(_=i(()=>H(Je)),r.set(m+"",_))}if(g===void 0)(!p||Ht(l,c)?.writable)&&(g=i(()=>H(void 0)),E(g,Ne(f)),r.set(c,g));else{p=g.v!==Je;var S=i(()=>Ne(f));E(g,S)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(v,f),!p){if(n&&typeof c=="string"){var y=r.get("length"),P=Number(c);Number.isInteger(P)&&P>=y.v&&E(y,P+1)}Ct(a)}return!0},ownKeys(l){s(a);var c=Reflect.ownKeys(l).filter(g=>{var p=r.get(g);return p===void 0||p.v!==Je});for(var[f,v]of r)v.v!==Je&&!(f in l)&&c.push(f);return c},setPrototypeOf(){ei()}})}function Sa(e){try{if(e!==null&&typeof e=="object"&&or in e)return e[or]}catch{}return e}function Ii(e,t){return Object.is(Sa(e),Sa(t))}var xa,xs,Ps,$s;function Di(){if(xa===void 0){xa=window,xs=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ps=Ht(t,"firstChild").get,$s=Ht(t,"nextSibling").get,ba(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),ba(r)&&(r.__t=void 0)}}function zt(e=""){return document.createTextNode(e)}function Ar(e){return Ps.call(e)}function tn(e){return $s.call(e)}function u(e,t){return Ar(e)}function R(e,t=!1){{var r=Ar(e);return r instanceof Comment&&r.data===""?tn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=tn(n);return n}function Ri(e){e.textContent=""}function wn(){return!1}function Oi(e,t){if(t){const r=document.body;e.autofocus=!0,lr(()=>{document.activeElement===r&&e.focus()})}}let Pa=!1;function qi(){Pa||(Pa=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Sn(e){var t=xe,r=Se;ct(null),It(null);try{return e()}finally{ct(t),It(r)}}function ua(e,t,r,n=r){e.addEventListener(t,()=>Sn(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),qi()}function ji(e){Se===null&&xe===null&&Yo(),xe!==null&&(xe.f&bt)!==0&&Se===null&&Jo(),mr&&Ko()}function Bi(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Vt(e,t,r,n=!0){var a=Se;a!==null&&(a.f&Pt)!==0&&(e|=Pt);var o={ctx:He,deps:null,nodes_start:null,nodes_end:null,f:e|ht,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Kr(o),o.f|=oa}catch(c){throw rt(o),c}else t!==null&&cr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Cr)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&Bi(i,a),xe!==null&&(xe.f&ut)!==0&&(e&fr)===0)){var l=xe;(l.effects??=[]).push(i)}}return o}function Li(){return xe!==null&&!xt}function Es(e){const t=Vt(aa,null,!1);return it(t,nt),t.teardown=e,t}function pr(e){ji();var t=Se.f,r=!xe&&(t&Lt)!==0&&(t&oa)===0;if(r){var n=He;(n.e??=[]).push(e)}else return ks(e)}function ks(e){return Vt(na|Go,e,!1)}function zi(e){_t.ensure();const t=Vt(fr|Cr,e,!0);return(r={})=>new Promise(n=>{r.outro?Ot(t,()=>{rt(t),n(void 0)}):(rt(t),n(void 0))})}function da(e){return Vt(na,e,!1)}function Vi(e){return Vt(mn|Cr,e,!0)}function fa(e,t=0){return Vt(aa|t,e,!0)}function W(e,t=[],r=[]){_s(t,r,n=>{Vt(aa,()=>e(...n.map(s)),!0)})}function Ut(e,t=0){var r=Vt(dr|t,e,!0);return r}function tt(e,t=!0){return Vt(Lt|Cr,e,!0,t)}function As(e){var t=e.teardown;if(t!==null){const r=mr,n=xe;Ea(!0),ct(null);try{t.call(null)}finally{Ea(r),ct(n)}}}function Ts(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&Sn(()=>{a.abort(Vr)});var n=r.next;(r.f&fr)!==0?r.parent=null:rt(r,t),r=n}}function Ui(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Lt)===0&&rt(t),t=r}}function rt(e,t=!0){var r=!1;(t||(e.f&Wo)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Wi(e.nodes_start,e.nodes_end),r=!0),Ts(e,t&&!r),vn(e,0),it(e,vr);var n=e.transitions;if(n!==null)for(const o of n)o.stop();As(e);var a=e.parent;a!==null&&a.first!==null&&Ns(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Wi(e,t){for(;e!==null;){var r=e===t?null:tn(e);e.remove(),e=r}}function Ns(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Ot(e,t){var r=[];va(e,r,!0),Ms(r,()=>{rt(e),t&&t()})}function Ms(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function va(e,t,r){if((e.f&Pt)===0){if(e.f^=Pt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,o=(n.f&hr)!==0||(n.f&Lt)!==0;va(n,t,o?r:!1),n=a}}}function xn(e){Cs(e,!0)}function Cs(e,t){if((e.f&Pt)!==0){e.f^=Pt,(e.f&nt)===0&&(it(e,ht),cr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&hr)!==0||(r.f&Lt)!==0;Cs(r,a?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let Pr=!1;function $a(e){Pr=e}let mr=!1;function Ea(e){mr=e}let xe=null,xt=!1;function ct(e){xe=e}let Se=null;function It(e){Se=e}let qt=null;function Is(e){xe!==null&&(qt===null?qt=[e]:qt.push(e))}let st=null,vt=0,gt=null;function Gi(e){gt=e}let Ds=1,Hr=0,jt=Hr;function ka(e){jt=e}let Qt=!1;function Rs(){return++Ds}function Pn(e){var t=e.f;if((t&ht)!==0)return!0;if((t&Ft)!==0){var r=e.deps,n=(t&bt)!==0;if(r!==null){var a,o,i=(t&fn)!==0,l=n&&Se!==null&&!Qt,c=r.length;if((i||l)&&(Se===null||(Se.f&vr)===0)){var f=e,v=f.parent;for(a=0;a<c;a++)o=r[a],(i||!o?.reactions?.includes(f))&&(o.reactions??=[]).push(f);i&&(f.f^=fn),l&&v!==null&&(v.f&bt)===0&&(f.f^=bt)}for(a=0;a<c;a++)if(o=r[a],Pn(o)&&ws(o),o.wv>e.wv)return!0}(!n||Se!==null&&!Qt)&&it(e,nt)}return!1}function Os(e,t,r=!0){var n=e.reactions;if(n!==null&&!qt?.includes(e))for(var a=0;a<n.length;a++){var o=n[a];(o.f&ut)!==0?Os(o,t,!1):t===o&&(r?it(o,ht):(o.f&nt)!==0&&it(o,Ft),cr(o))}}function qs(e){var t=st,r=vt,n=gt,a=xe,o=Qt,i=qt,l=He,c=xt,f=jt,v=e.f;st=null,vt=0,gt=null,Qt=(v&bt)!==0&&(xt||!Pr||xe===null),xe=(v&(Lt|fr))===0?e:null,qt=null,$r(e.ctx),xt=!1,jt=++Hr,e.ac!==null&&(Sn(()=>{e.ac.abort(Vr)}),e.ac=null);try{e.f|=Ln;var g=e.fn,p=g(),m=e.deps;if(st!==null){var _;if(vn(e,vt),m!==null&&vt>0)for(m.length=vt+st.length,_=0;_<st.length;_++)m[vt+_]=st[_];else e.deps=m=st;if(!Qt||(v&ut)!==0&&e.reactions!==null)for(_=vt;_<m.length;_++)(m[_].reactions??=[]).push(e)}else m!==null&&vt<m.length&&(vn(e,vt),m.length=vt);if(Dr()&&gt!==null&&!xt&&m!==null&&(e.f&(ut|Ft|ht))===0)for(_=0;_<gt.length;_++)Os(gt[_],e);return a!==null&&a!==e&&(Hr++,gt!==null&&(n===null?n=gt:n.push(...gt))),(e.f&sr)!==0&&(e.f^=sr),p}catch(S){return hs(S)}finally{e.f^=Ln,st=t,vt=r,gt=n,xe=a,Qt=o,qt=i,$r(l),xt=c,jt=f}}function Qi(e,t){let r=t.reactions;if(r!==null){var n=Bo.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&ut)!==0&&(st===null||!st.includes(t))&&(it(t,Ft),(t.f&(bt|fn))===0&&(t.f^=fn),ys(t),vn(t,0))}function vn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Qi(e,r[n])}function Kr(e){var t=e.f;if((t&vr)===0){it(e,nt);var r=Se,n=Pr;Se=e,Pr=!0;try{(t&dr)!==0?Ui(e):Ts(e),As(e);var a=qs(e);e.teardown=typeof a=="function"?a:null,e.wv=Ds;var o;ns&&bi&&(e.f&ht)!==0&&e.deps}finally{Pr=n,Se=r}}}async function Hi(){await Promise.resolve(),xi()}function s(e){var t=e.f,r=(t&ut)!==0;if(xe!==null&&!xt){var n=Se!==null&&(Se.f&vr)!==0;if(!n&&!qt?.includes(e)){var a=xe.deps;if((xe.f&Ln)!==0)e.rv<Hr&&(e.rv=Hr,st===null&&a!==null&&a[vt]===e?vt++:st===null?st=[e]:(!Qt||!st.includes(e))&&st.push(e));else{(xe.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[xe]:o.includes(xe)||o.push(xe)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&bt)===0&&(i.f^=bt)}if(mr){if(Kt.has(e))return Kt.get(e);if(r){i=e;var c=i.v;return((i.f&nt)===0&&i.reactions!==null||js(i))&&(c=ca(i)),Kt.set(i,c),c}}else r&&(i=e,Pn(i)&&ws(i));if((e.f&sr)!==0)throw e.v;return e.v}function js(e){if(e.v===Je)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Kt.has(t)||(t.f&ut)!==0&&js(t))return!0;return!1}function Rr(e){var t=xt;try{return xt=!0,e()}finally{xt=t}}const Ki=-7169;function it(e,t){e.f=e.f&Ki|t}function Ji(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Yi=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Zi(e){return Yi.includes(e)}const Xi={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Fi(e){return e=e.toLowerCase(),Xi[e]??e}const el=["touchstart","touchmove"];function tl(e){return el.includes(e)}const Bs=new Set,Un=new Set;function Ls(e,t,r,n={}){function a(o){if(n.capture||Lr.call(t,o),!o.cancelBubble)return Sn(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?lr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Wn(e,t,r,n={}){var a=Ls(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function Ye(e){for(var t=0;t<e.length;t++)Bs.add(e[t]);for(var r of Un)r(e)}let Aa=null;function Lr(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;Aa=e;var i=0,l=Aa===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(o=a[i]||e.target,o!==t){Bn(e,"currentTarget",{configurable:!0,get(){return o||r}});var v=xe,g=Se;ct(null),It(null);try{for(var p,m=[];o!==null;){var _=o.assignedSlot||o.parentNode||o.host||null;try{var S=o["__"+n];if(S!=null&&(!o.disabled||e.target===o))if(pn(S)){var[b,...y]=S;b.apply(o,[e,...y])}else S.call(o,e)}catch(P){p?m.push(P):p=P}if(e.cancelBubble||_===t||_===null)break;o=_}if(p){for(let P of m)queueMicrotask(()=>{throw P});throw p}}finally{e.__root=t,delete e.currentTarget,ct(v),It(g)}}}function zs(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Tr(e,t){var r=Se;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function $(e,t){var r=(t&ui)!==0,n=(t&di)!==0,a,o=!e.startsWith("<!>");return()=>{a===void 0&&(a=zs(o?e:"<!>"+e),r||(a=Ar(a)));var i=n||xs?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Ar(i),c=i.lastChild;Tr(l,c)}else Tr(i,i);return i}}function rl(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=zs(a),l=Ar(i);o=Ar(l)}var c=o.cloneNode(!0);return Tr(c,c),c}}function nl(e,t){return rl(e,t,"svg")}function yt(e=""){{var t=zt(e+"");return Tr(t,t),t}}function B(){var e=document.createDocumentFragment(),t=document.createComment(""),r=zt();return e.append(t,r),Tr(t,r),e}function h(e,t){e!==null&&e.before(t)}function L(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function al(e,t){return sl(e,t)}const wr=new Map;function sl(e,{target:t,anchor:r,props:n={},events:a,context:o,intro:i=!0}){Di();var l=new Set,c=g=>{for(var p=0;p<g.length;p++){var m=g[p];if(!l.has(m)){l.add(m);var _=tl(m);t.addEventListener(m,Lr,{passive:_});var S=wr.get(m);S===void 0?(document.addEventListener(m,Lr,{passive:_}),wr.set(m,1)):wr.set(m,S+1)}}};c(ra(Bs)),Un.add(c);var f=void 0,v=zi(()=>{var g=r??t.appendChild(zt());return Ei(g,{pending:()=>{}},p=>{if(o){z({});var m=He;m.c=o}a&&(n.$$events=a),f=e(p,n)||{},o&&V()}),()=>{for(var p of l){t.removeEventListener(p,Lr);var m=wr.get(p);--m===0?(document.removeEventListener(p,Lr),wr.delete(p)):wr.set(p,m)}Un.delete(c),g!==r&&g.parentNode?.removeChild(g)}});return ol.set(f,v),f}let ol=new WeakMap;function N(e,t,r=!1){var n=e,a=null,o=null,i=Je,l=r?hr:0,c=!1;const f=(m,_=!0)=>{c=!0,p(_,m)};var v=null;function g(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var m=i?a:o,_=i?o:a;m&&xn(m),_&&Ot(_,()=>{i?o=null:a=null})}const p=(m,_)=>{if(i!==(i=m)){var S=wn(),b=n;if(S&&(v=document.createDocumentFragment(),v.append(b=zt())),i?a??=_&&tt(()=>_(b)):o??=_&&tt(()=>_(b)),S){var y=De,P=i?a:o,w=i?o:a;P&&y.skipped_effects.delete(P),w&&y.skipped_effects.add(w),y.add_callback(g)}else g()}};Ut(()=>{c=!1,t(f),c||p(null,null)},l)}function il(e,t,r){var n=e,a=Je,o,i,l=null,c=Dr()?_i:ds;function f(){o&&Ot(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}Ut(()=>{if(c(a,a=t())){var v=n,g=wn();g&&(l=document.createDocumentFragment(),l.append(v=zt())),i=tt(()=>r(v)),g?De.add_callback(f):f()}})}function Gn(e,t){return t}function ll(e,t,r){for(var n=e.items,a=[],o=t.length,i=0;i<o;i++)va(t[i].e,a,!0);var l=o>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;Ri(c),c.append(r),n.clear(),Nt(e,t[0].prev,t[o-1].next)}Ms(a,()=>{for(var f=0;f<o;f++){var v=t[f];l||(n.delete(v.k),Nt(e,v.prev,v.next)),rt(v.e,!l)}})}function ot(e,t,r,n,a,o=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&cs)!==0;if(c){var f=e;i=f.appendChild(zt())}var v=null,g=!1,p=new Map,m=la(()=>{var y=r();return pn(y)?y:y==null?[]:ra(y)}),_,S;function b(){cl(S,_,l,p,i,a,t,n,r),o!==null&&(_.length===0?v?xn(v):v=tt(()=>o(i)):v!==null&&Ot(v,()=>{v=null}))}Ut(()=>{S??=Se,_=s(m);var y=_.length;if(!(g&&y===0)){g=y===0;var P,w,x,k;if(wn()){var A=new Set,C=De;for(w=0;w<y;w+=1){x=_[w],k=n(x,w);var O=l.items.get(k)??p.get(k);O?(t&(gn|_n))!==0&&Vs(O,x,w,t):(P=Us(null,l,null,null,x,k,w,a,t,r,!0),p.set(k,P)),A.add(k)}for(const[X,j]of l.items)A.has(X)||C.skipped_effects.add(j.e);C.add_callback(b)}else b();s(m)}})}function cl(e,t,r,n,a,o,i,l,c){var f=(i&ni)!==0,v=(i&(gn|_n))!==0,g=t.length,p=r.items,m=r.first,_=m,S,b=null,y,P=[],w=[],x,k,A,C;if(f)for(C=0;C<g;C+=1)x=t[C],k=l(x,C),A=p.get(k),A!==void 0&&(A.a?.measure(),(y??=new Set).add(A));for(C=0;C<g;C+=1){if(x=t[C],k=l(x,C),A=p.get(k),A===void 0){var O=n.get(k);if(O!==void 0){n.delete(k),p.set(k,O);var X=b?b.next:_;Nt(r,b,O),Nt(r,O,X),Cn(O,X,a),b=O}else{var j=_?_.e.nodes_start:a;b=Us(j,r,b,b===null?r.first:b.next,x,k,C,o,i,c)}p.set(k,b),P=[],w=[],_=b.next;continue}if(v&&Vs(A,x,C,i),(A.e.f&Pt)!==0&&(xn(A.e),f&&(A.a?.unfix(),(y??=new Set).delete(A))),A!==_){if(S!==void 0&&S.has(A)){if(P.length<w.length){var G=w[0],te;b=G.prev;var ee=P[0],D=P[P.length-1];for(te=0;te<P.length;te+=1)Cn(P[te],G,a);for(te=0;te<w.length;te+=1)S.delete(w[te]);Nt(r,ee.prev,D.next),Nt(r,b,ee),Nt(r,D,G),_=G,b=D,C-=1,P=[],w=[]}else S.delete(A),Cn(A,_,a),Nt(r,A.prev,A.next),Nt(r,A,b===null?r.first:b.next),Nt(r,b,A),b=A;continue}for(P=[],w=[];_!==null&&_.k!==k;)(_.e.f&Pt)===0&&(S??=new Set).add(_),w.push(_),_=_.next;if(_===null)continue;A=_}P.push(A),b=A,_=A.next}if(_!==null||S!==void 0){for(var I=S===void 0?[]:ra(S);_!==null;)(_.e.f&Pt)===0&&I.push(_),_=_.next;var K=I.length;if(K>0){var re=(i&cs)!==0&&g===0?a:null;if(f){for(C=0;C<K;C+=1)I[C].a?.measure();for(C=0;C<K;C+=1)I[C].a?.fix()}ll(r,I,re)}}f&&lr(()=>{if(y!==void 0)for(A of y)A.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var M of n.values())rt(M.e);n.clear()}function Vs(e,t,r,n){(n&gn)!==0&&kr(e.v,t),(n&_n)!==0?kr(e.i,r):e.i=r}function Us(e,t,r,n,a,o,i,l,c,f,v){var g=(c&gn)!==0,p=(c&ai)===0,m=g?p?Ci(a,!1,!1):Yt(a):a,_=(c&_n)===0?i:Yt(i),S={i:_,v:m,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=zt())}return S.e=tt(()=>l(e,m,_,f),gi),S.e.prev=r&&r.e,S.e.next=n&&n.e,r===null?v||(t.first=S):(r.next=S,r.e.next=S.e),n!==null&&(n.prev=S,n.e.prev=S.e),S}finally{}}function Cn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=tn(o);a.before(o),o=i}}function Nt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ae(e,t,...r){var n=e,a=F,o;Ut(()=>{a!==(a=t())&&(o&&(rt(o),o=null),o=tt(()=>a(n,...r)))},hr)}function ir(e,t,r){var n=e,a,o,i=null,l=null;function c(){o&&(Ot(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}Ut(()=>{if(a!==(a=t())){var f=wn();if(a){var v=n;f&&(i=document.createDocumentFragment(),i.append(v=zt()),o&&De.skipped_effects.add(o)),l=tt(()=>r(v,a))}f?De.add_callback(c):c()}},hr)}function ul(e,t,r,n,a,o){var i,l,c=null,f=e,v;Ut(()=>{const g=t()||null;var p=vi;g!==i&&(v&&(g===null?Ot(v,()=>{v=null,l=null}):g===l?xn(v):rt(v)),g&&g!==l&&(v=tt(()=>{if(c=document.createElementNS(p,g),Tr(c,c),n){var m=c.appendChild(zt());n(c,m)}Se.nodes_end=c,f.before(c)})),i=g,i&&(l=i))},hr)}function dl(e,t){var r=void 0,n;Ut(()=>{r!==(r=t())&&(n&&(rt(n),n=null),r&&(n=tt(()=>{da(()=>r(e))})))})}function Ws(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Ws(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function fl(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Ws(e))&&(n&&(n+=" "),n+=t);return n}function vl(e){return typeof e=="object"?fl(e):e??""}const Ta=[...` 	
\r\f \v\uFEFF`];function hl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+o;(i===0||Ta.includes(n[i-1]))&&(l===n.length||Ta.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Na(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var o=e[a];o!=null&&o!==""&&(n+=" "+a+": "+o+r)}return n}function In(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function pl(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(In)),a&&c.push(...Object.keys(a).map(In));var f=0,v=-1;const S=e.length;for(var g=0;g<S;g++){var p=e[g];if(l?p==="/"&&e[g-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[g+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?i++:p===")"&&i--,!l&&o===!1&&i===0){if(p===":"&&v===-1)v=g;else if(p===";"||g===S-1){if(v!==-1){var m=In(e.substring(f,v).trim());if(!c.includes(m)){p!==";"&&g++;var _=e.substring(f,g).trim();r+=" "+_+";"}}f=g+1,v=-1}}}}return n&&(r+=Na(n)),a&&(r+=Na(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function $e(e,t,r,n,a,o){var i=e.__className;if(i!==r||i===void 0){var l=hl(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&a!==o)for(var c in o){var f=!!o[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return o}function Dn(e,t={},r,n){for(var a in r){var o=r[a];t[a]!==o&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,n))}}function Gs(e,t,r,n){var a=e.__style;if(a!==t){var o=pl(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(Dn(e,r?.[0],n[0]),Dn(e,r?.[1],n[1],"important")):Dn(e,r,n));return n}function hn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!pn(t))return pi();for(var n of e.options)n.selected=t.includes(Wr(n));return}for(n of e.options){var a=Wr(n);if(Ii(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Qs(e){var t=new MutationObserver(()=>{hn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Es(()=>{t.disconnect()})}function nr(e,t,r=t){var n=!0;ua(e,"change",a=>{var o=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),Wr);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&Wr(l)}r(i)}),da(()=>{var a=t();if(hn(e,a,n),n&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=Wr(o),r(a))}e.__value=a,n=!1}),Qs(e)}function Wr(e){return"__value"in e?e.__value:e.value}const jr=Symbol("class"),Br=Symbol("style"),Hs=Symbol("is custom element"),Ks=Symbol("is html");function ml(e,t){var r=$n(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Rn(e,t){var r=$n(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function gl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Bt(e,t,r,n){var a=$n(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Qo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Js(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function _l(e,t,r,n,a=!1,o=!1){var i=$n(e),l=i[Hs],c=!i[Ks],f=t||{},v=e.tagName==="OPTION";for(var g in t)g in r||(r[g]=null);r.class?r.class=vl(r.class):r[jr]&&(r.class=null),r[Br]&&(r.style??=null);var p=Js(e);for(const x in r){let k=r[x];if(v&&x==="value"&&k==null){e.value=e.__value="",f[x]=k;continue}if(x==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";$e(e,m,k,n,t?.[jr],r[jr]),f[x]=k,f[jr]=r[jr];continue}if(x==="style"){Gs(e,k,t?.[Br],r[Br]),f[x]=k,f[Br]=r[Br];continue}var _=f[x];if(!(k===_&&!(k===void 0&&e.hasAttribute(x)))){f[x]=k;var S=x[0]+x[1];if(S!=="$$")if(S==="on"){const A={},C="$$"+x;let O=x.slice(2);var b=Zi(O);if(Ji(O)&&(O=O.slice(0,-7),A.capture=!0),!b&&_){if(k!=null)continue;e.removeEventListener(O,f[C],A),f[C]=null}if(k!=null)if(b)e[`__${O}`]=k,Ye([O]);else{let X=function(j){f[x].call(this,j)};var w=X;f[C]=Ls(O,e,X,A)}else b&&(e[`__${O}`]=void 0)}else if(x==="style")Bt(e,x,k);else if(x==="autofocus")Oi(e,!!k);else if(!l&&(x==="__value"||x==="value"&&k!=null))e.value=e.__value=k;else if(x==="selected"&&v)gl(e,k);else{var y=x;c||(y=Fi(y));var P=y==="defaultValue"||y==="defaultChecked";if(k==null&&!l&&!P)if(i[x]=null,y==="value"||y==="checked"){let A=e;const C=t===void 0;if(y==="value"){let O=A.defaultValue;A.removeAttribute(y),A.defaultValue=O,A.value=A.__value=C?O:null}else{let O=A.defaultChecked;A.removeAttribute(y),A.defaultChecked=O,A.checked=C?O:!1}}else e.removeAttribute(x);else P||p.includes(y)&&(l||typeof k!="string")?(e[y]=k,y in i&&(i[y]=Je)):typeof k!="function"&&Bt(e,y,k)}}}return f}function Ma(e,t,r=[],n=[],a,o=!1,i=!1){_s(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",g=!1;if(Ut(()=>{var m=t(...l.map(s)),_=_l(e,c,m,a,o,i);g&&v&&"value"in m&&hn(e,m.value);for(let b of Object.getOwnPropertySymbols(f))m[b]||rt(f[b]);for(let b of Object.getOwnPropertySymbols(m)){var S=m[b];b.description===hi&&(!c||S!==c[b])&&(f[b]&&rt(f[b]),f[b]=tt(()=>dl(e,()=>S))),_[b]=S}c=_}),v){var p=e;da(()=>{hn(p,c.value,!0),Qs(p)})}g=!0})}function $n(e){return e.__attributes??={[Hs]:e.nodeName.includes("-"),[Ks]:e.namespaceURI===fi}}var Ca=new Map;function Js(e){var t=e.getAttribute("is")||e.nodeName,r=Ca.get(t);if(r)return r;Ca.set(t,r=[]);for(var n,a=e,o=Element.prototype;o!==a;){n=Lo(a);for(var i in n)n[i].set&&r.push(i);a=as(a)}return r}function Ce(e,t,r=t){var n=new WeakSet;ua(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=On(e)?qn(o):o,r(o),De!==null&&n.add(De),await Hi(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),Rr(t)==null&&e.value&&(r(On(e)?qn(e.value):e.value),De!==null&&n.add(De)),fa(()=>{var a=t();if(e===document.activeElement){var o=ln??De;if(n.has(o))return}On(e)&&a===qn(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function bl(e,t,r=t){ua(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),Rr(t)==null&&r(e.checked),fa(()=>{var n=t();e.checked=!!n})}function On(e){var t=e.type;return t==="number"||t==="range"}function qn(e){return e===""?null:+e}let sn=!1;function yl(e){var t=sn;try{return sn=!1,[e(),sn]}finally{sn=t}}const wl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ue(e,t,r){return new Proxy({props:e,exclude:t},wl)}const Sl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(qr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];qr(a)&&(a=a());const o=Ht(a,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(qr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Ht(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===or||t===is)return!1;for(let r of e.props)if(qr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(qr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function de(...e){return new Proxy({props:e},Sl)}function Ae(e,t,r,n){var a=!Ir||(r&oi)!==0,o=(r&li)!==0,i=(r&ci)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?Rr(n):n),l),v;if(o){var g=or in e||is in e;v=Ht(e,t)?.set??(g&&t in e?w=>e[t]=w:void 0)}var p,m=!1;o?[p,m]=yl(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),v&&(a&&Xo(),v(p)));var _;if(a?_=()=>{var w=e[t];return w===void 0?f():(c=!0,w)}:_=()=>{var w=e[t];return w!==void 0&&(l=void 0),w===void 0?l:w},a&&(r&ii)===0)return _;if(v){var S=e.$$legacy;return(function(w,x){return arguments.length>0?((!a||!x||S||m)&&v(x?_():w),w):_()})}var b=!1,y=((r&si)!==0?yn:la)(()=>(b=!1,_()));o&&s(y);var P=Se;return(function(w,x){if(arguments.length>0){const k=x?s(y):a&&o?Ne(w):w;return E(y,k),b=!0,l!==void 0&&(l=k),w}return mr&&b||(P.f&vr)!==0?y.v:s(y)})}function Ys(e){He===null&&ls(),Ir&&He.l!==null?Pl(He).m.push(e):pr(()=>{const t=Rr(e);if(typeof t=="function")return t})}function xl(e){He===null&&ls(),Ys(()=>()=>Rr(e))}function Pl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const $l="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add($l);const El="modulepreload",kl=function(e){return"/"+e},Ia={},Al=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(g=>Promise.resolve(g).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(v=>{if(v=kl(v),v in Ia)return;Ia[v]=!0;const g=v.endsWith(".css"),p=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${p}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":El,g||(m.as="script"),m.crossOrigin="",m.href=v,c&&m.setAttribute("nonce",c),document.head.appendChild(m),g)return new Promise((_,S)=>{m.addEventListener("load",_),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${v}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};class Tl extends Map{#e=new Map;#r=H(0);#c=H(0);#u=jt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#l(t){return jt===this.#u?H(t):Yt(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else return s(this.#r),!1}return s(n),!0}forEach(t,r){this.#o(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else{s(this.#r);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#r;if(a===void 0)a=this.#l(0),n.set(t,a),E(this.#c,super.size),Ct(l);else if(o!==r){Ct(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(v=>c.has(v));f&&Ct(l)}return i}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),E(this.#c,super.size),E(n,-1),Ct(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;E(this.#c,0);for(var r of t.values())E(r,-1);Ct(this.#r),t.clear()}}#o(){s(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#l(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#o(),super.values()}entries(){return this.#o(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#c),super.size}}class Nl{#e;#r;constructor(t,r){this.#e=t,this.#r=ia(r)}get current(){return this.#r(),this.#e()}}const Ml=/\(.+\)/,Cl=new Set(["all","print","screen","and","or","not","only"]);class Il extends Nl{constructor(t,r){let n=Ml.test(t)||t.split(/[\s,]+/).some(o=>Cl.has(o.trim()))?t:`(${t})`;const a=window.matchMedia(n);super(()=>a.matches,o=>Wn(a,"change",o))}}const Dl=typeof window<"u"?window:void 0;function Rl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Ol{#e;#r;constructor(t={}){const{window:r=Dl,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=ia(a=>{const o=Wn(r,"focusin",a),i=Wn(r,"focusout",a);return()=>{o(),i()}}))}get current(){return this.#r?.(),this.#e?Rl(this.#e):null}}new Ol;function ql(e){return typeof e=="function"}function jl(e,t){if(ql(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Bl(e,t){let r=H(null);const n=J(()=>jl(t,250));function a(...o){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let i,l;const c=new Promise((f,v)=>{i=f,l=v});E(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const i=s(r);E(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),E(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Ll(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),o=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return o.length?Gr(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function zr(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function cn(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Gr(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function un(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>ar(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],o=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(a.push({q:v,u:c}),o.push(ar(v.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:i}}function Sr(e){return e?.length?e.map(t=>ar(t.q.toString(),t.u)).join(" et "):"-"}function ar(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Da(e){return zr(e)}function ha(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function zl(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([o])=>{const i=new Date(o);return i>=n&&i<=a}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function Vl(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Ul(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Wl(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function Gl(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return ha(t)}function Ql(e,t,r=""){if(e.status==="cancelled")return!1;const n=e.deliveryDate||e.$createdAt;return!n||n>t||r&&e.$createdAt<r?!1:e.status==="delivered"||e.status==="pending"||e.status==="ordered"&&n<=t}function Ra(e,t){let r=[],n="";e.stockParsed?.dateTime&&e.stockParsed.dateTime<=t&&(r=[{q:parseFloat(e.stockParsed.quantity),u:e.stockParsed.unit}],n=e.stockParsed.dateTime);const a=[];if(e.purchases)for(const c of e.purchases)Ql(c,t,n)&&a.push({q:c.quantity,u:c.unit});const o=Hl(e,t),i=[...r,...a],l=ha(i);return Kl(l,o)}function Hl(e,t){if(!e.byDate)return[];const r=[];for(const[n,a]of Object.entries(e.byDate))if(n<=t){const i=a.totalConsolidated;i&&r.push(...i)}return ha(r)}function Kl(e,t){const r=new Map,n=new Map;e.forEach(({q:i,u:l})=>{r.set(l,(r.get(l)||0)+i)}),t.forEach(({q:i,u:l})=>{n.set(l,(n.get(l)||0)+i)});const a=[],o=new Set([...r.keys(),...n.keys()]);for(const i of o){const l=r.get(i)||0,c=n.get(i)||0,f=l-c;Math.abs(f)>.001&&a.push({q:f,u:i})}return a}function Oa(e){if(!e?.length)return"Équilibré";const t=e.filter(n=>n.q>0),r=e.filter(n=>n.q<0);if(t.length>0&&r.length>0){const n=t.map(o=>ar(o.q.toString(),o.u)).join(" et "),a=r.map(o=>ar(Math.abs(o.q).toString(),o.u)).join(" et ");return`${n} disponibles, ${a} manquant${r.length>1?"s":""}`}else return t.length>0?t.map(n=>"+"+ar(n.q.toString(),n.u)).join(" et ")+" disponibles":r.length>0?r.map(n=>ar(Math.abs(n.q).toString(),n.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function Jl(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class T{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}T.equal=(e,t)=>new T("equal",e,t).toString();T.notEqual=(e,t)=>new T("notEqual",e,t).toString();T.lessThan=(e,t)=>new T("lessThan",e,t).toString();T.lessThanEqual=(e,t)=>new T("lessThanEqual",e,t).toString();T.greaterThan=(e,t)=>new T("greaterThan",e,t).toString();T.greaterThanEqual=(e,t)=>new T("greaterThanEqual",e,t).toString();T.isNull=e=>new T("isNull",e).toString();T.isNotNull=e=>new T("isNotNull",e).toString();T.between=(e,t,r)=>new T("between",e,[t,r]).toString();T.startsWith=(e,t)=>new T("startsWith",e,t).toString();T.endsWith=(e,t)=>new T("endsWith",e,t).toString();T.select=e=>new T("select",void 0,e).toString();T.search=(e,t)=>new T("search",e,t).toString();T.orderDesc=e=>new T("orderDesc",e).toString();T.orderAsc=e=>new T("orderAsc",e).toString();T.orderRandom=()=>new T("orderRandom").toString();T.cursorAfter=e=>new T("cursorAfter",void 0,e).toString();T.cursorBefore=e=>new T("cursorBefore",void 0,e).toString();T.limit=e=>new T("limit",void 0,e).toString();T.offset=e=>new T("offset",void 0,e).toString();T.contains=(e,t)=>new T("contains",e,t).toString();T.notContains=(e,t)=>new T("notContains",e,t).toString();T.notSearch=(e,t)=>new T("notSearch",e,t).toString();T.notBetween=(e,t,r)=>new T("notBetween",e,[t,r]).toString();T.notStartsWith=(e,t)=>new T("notStartsWith",e,t).toString();T.notEndsWith=(e,t)=>new T("notEndsWith",e,t).toString();T.createdBefore=e=>new T("createdBefore",void 0,e).toString();T.createdAfter=e=>new T("createdAfter",void 0,e).toString();T.createdBetween=(e,t)=>new T("createdBetween",void 0,[e,t]).toString();T.updatedBefore=e=>new T("updatedBefore",void 0,e).toString();T.updatedAfter=e=>new T("updatedAfter",void 0,e).toString();T.updatedBetween=(e,t)=>new T("updatedBetween",void 0,[e,t]).toString();T.or=e=>new T("or",void 0,e.map(t=>JSON.parse(t))).toString();T.and=e=>new T("and",void 0,e.map(t=>JSON.parse(t))).toString();T.distanceEqual=(e,t,r,n=!0)=>new T("distanceEqual",e,[[t,r,n]]).toString();T.distanceNotEqual=(e,t,r,n=!0)=>new T("distanceNotEqual",e,[[t,r,n]]).toString();T.distanceGreaterThan=(e,t,r,n=!0)=>new T("distanceGreaterThan",e,[[t,r,n]]).toString();T.distanceLessThan=(e,t,r,n=!0)=>new T("distanceLessThan",e,[[t,r,n]]).toString();T.intersects=(e,t)=>new T("intersects",e,[t]).toString();T.notIntersects=(e,t)=>new T("notIntersects",e,[t]).toString();T.crosses=(e,t)=>new T("crosses",e,[t]).toString();T.notCrosses=(e,t)=>new T("notCrosses",e,[t]).toString();T.overlaps=(e,t)=>new T("overlaps",e,[t]).toString();T.notOverlaps=(e,t)=>new T("notOverlaps",e,[t]).toString();T.touches=(e,t)=>new T("touches",e,[t]).toString();T.notTouches=(e,t)=>new T("notTouches",e,[t]).toString();var Zs,Xs;class Nr{static custom(t){return t}static unique(t=7){const r=Jl(Nr,Zs,"m",Xs).call(Nr);let n="";for(let a=0;a<t;a++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}Zs=Nr,Xs=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var qa;(function(e){e.Totp="totp"})(qa||(qa={}));var ja;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(ja||(ja={}));var Ba;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Ba||(Ba={}));var La;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(La||(La={}));var za;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(za||(za={}));var Va;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Va||(Va={}));var Ua;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Ua||(Ua={}));var Wa;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Wa||(Wa={}));var Ga;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Ga||(Ga={}));class Yl{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class Fs{constructor(t){this.generateIdentifier=t,this.kv=new Yl}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class Zl extends Fs{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function Xl(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function Fl(e,t){const r=Xl(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const o=n[a];if(t(o))return o}}function Mr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function dn(e,t){return e.indexOf(t)!==-1}function Qa(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class ec{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return Fl(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const tc=e=>Object.prototype.toString.call(e).slice(8,-1),eo=e=>typeof e>"u",rc=e=>e===null,Jr=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Qn=e=>Jr(e)&&Object.keys(e).length===0,Zt=e=>Array.isArray(e),nc=e=>typeof e=="string",ac=e=>typeof e=="number"&&!isNaN(e),sc=e=>typeof e=="boolean",oc=e=>e instanceof RegExp,Yr=e=>e instanceof Map,Zr=e=>e instanceof Set,to=e=>tc(e)==="Symbol",ic=e=>e instanceof Date&&!isNaN(e.valueOf()),lc=e=>e instanceof Error,Ha=e=>typeof e=="number"&&isNaN(e),cc=e=>sc(e)||rc(e)||eo(e)||ac(e)||nc(e)||to(e),uc=e=>typeof e=="bigint",dc=e=>e===1/0||e===-1/0,fc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),vc=e=>e instanceof URL,ro=e=>e.replace(/\./g,"\\."),jn=e=>e.map(String).map(ro).join("."),Qr=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let o=e.charAt(a);if(o==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(o==="."){t.push(r),r="";continue}r+=o}const n=r;return t.push(n),t};function Tt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const no=[Tt(eo,"undefined",()=>null,()=>{}),Tt(uc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Tt(ic,"Date",e=>e.toISOString(),e=>new Date(e)),Tt(lc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Tt(oc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Tt(Zr,"set",e=>[...e.values()],e=>new Set(e)),Tt(Yr,"map",e=>[...e.entries()],e=>new Map(e)),Tt(e=>Ha(e)||dc(e),"number",e=>Ha(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Tt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Tt(vc,"URL",e=>e.toString(),e=>new URL(e))];function En(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const ao=En((e,t)=>to(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),hc=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),so=En(fc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=hc[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function oo(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const io=En(oo,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),lo=En((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),pc=[io,ao,lo,so],Ka=(e,t)=>{const r=Qa(pc,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Qa(no,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},co={};no.forEach(e=>{co[e.annotation]=e});const mc=(e,t,r)=>{if(Zt(t))switch(t[0]){case"symbol":return ao.untransform(e,t,r);case"class":return io.untransform(e,t,r);case"custom":return lo.untransform(e,t,r);case"typed-array":return so.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=co[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},xr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function uo(e){if(dn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(dn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(dn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const gc=(e,t)=>{uo(t);for(let r=0;r<t.length;r++){const n=t[r];if(Zr(e))e=xr(e,+n);else if(Yr(e)){const a=+n,o=+t[++r]==0?"key":"value",i=xr(e,a);switch(o){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},Hn=(e,t,r)=>{if(uo(t),t.length===0)return r(e);let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];if(Zt(n)){const l=+i;n=n[l]}else if(Jr(n))n=n[i];else if(Zr(n)){const l=+i;n=xr(n,l)}else if(Yr(n)){if(o===t.length-2)break;const c=+i,f=+t[++o]==0?"key":"value",v=xr(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const a=t[t.length-1];if(Zt(n)?n[+a]=r(n[+a]):Jr(n)&&(n[a]=r(n[a])),Zr(n)){const o=xr(n,+a),i=r(o);o!==i&&(n.delete(o),n.add(i))}if(Yr(n)){const o=+t[t.length-2],i=xr(n,o);switch(+a==0?"key":"value"){case"key":{const c=r(i);n.set(c,n.get(i)),c!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function Kn(e,t,r=[]){if(!e)return;if(!Zt(e)){Mr(e,(o,i)=>Kn(o,t,[...r,...Qr(i)]));return}const[n,a]=e;a&&Mr(a,(o,i)=>{Kn(o,t,[...r,...Qr(i)])}),t(n,r)}function _c(e,t,r){return Kn(t,(n,a)=>{e=Hn(e,a,o=>mc(o,n,r))}),e}function bc(e,t){function r(n,a){const o=gc(e,Qr(a));n.map(Qr).forEach(i=>{e=Hn(e,i,()=>o)})}if(Zt(t)){const[n,a]=t;n.forEach(o=>{e=Hn(e,Qr(o),()=>e)}),a&&Mr(a,r)}else Mr(t,r);return e}const yc=(e,t)=>Jr(e)||Zt(e)||Yr(e)||Zr(e)||oo(e,t);function wc(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Sc(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[o,...i]=a;o.length===0?n=i.map(jn):r[jn(o)]=i.map(jn)}),n?Qn(r)?[n]:[n,r]:Qn(r)?void 0:r}const fo=(e,t,r,n,a=[],o=[],i=new Map)=>{const l=cc(e);if(!l){wc(e,a,t);const m=i.get(e);if(m)return n?{transformedValue:null}:m}if(!yc(e,r)){const m=Ka(e,r),_=m?{transformedValue:m.value,annotations:[m.type]}:{transformedValue:e};return l||i.set(e,_),_}if(dn(o,e))return{transformedValue:null};const c=Ka(e,r),f=c?.value??e,v=Zt(f)?[]:{},g={};Mr(f,(m,_)=>{if(_==="__proto__"||_==="constructor"||_==="prototype")throw new Error(`Detected property ${_}. This is a prototype pollution risk, please remove it from your object.`);const S=fo(m,t,r,n,[...a,_],[...o,e],i);v[_]=S.transformedValue,Zt(S.annotations)?g[_]=S.annotations:Jr(S.annotations)&&Mr(S.annotations,(b,y)=>{g[ro(_)+"."+y]=b})});const p=Qn(g)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,g]:g};return l||i.set(e,p),p};function vo(e){return Object.prototype.toString.call(e).slice(8,-1)}function Ja(e){return vo(e)==="Array"}function xc(e){if(vo(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Pc(e,t,r,n,a){const o={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),a&&o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Jn(e,t={}){if(Ja(e))return e.map(a=>Jn(a,t));if(!xc(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,o)=>{if(Ja(t.props)&&!t.props.includes(o))return a;const i=e[o],l=Jn(i,t);return Pc(a,o,l,e,t.nonenumerable),a},{})}class qe{constructor({dedupe:t=!1}={}){this.classRegistry=new Zl,this.symbolRegistry=new Fs(r=>r.description??""),this.customTransformerRegistry=new ec,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=fo(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const o=Sc(r,this.dedupe);return o&&(a.meta={...a.meta,referentialEqualities:o}),a}deserialize(t){const{json:r,meta:n}=t;let a=Jn(r);return n?.values&&(a=_c(a,n.values,this)),n?.referentialEqualities&&(a=bc(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}qe.defaultInstance=new qe;qe.serialize=qe.defaultInstance.serialize.bind(qe.defaultInstance);qe.deserialize=qe.defaultInstance.deserialize.bind(qe.defaultInstance);qe.stringify=qe.defaultInstance.stringify.bind(qe.defaultInstance);qe.parse=qe.defaultInstance.parse.bind(qe.defaultInstance);qe.registerClass=qe.defaultInstance.registerClass.bind(qe.defaultInstance);qe.registerSymbol=qe.defaultInstance.registerSymbol.bind(qe.defaultInstance);qe.registerCustom=qe.defaultInstance.registerCustom.bind(qe.defaultInstance);qe.allowErrorProps=qe.defaultInstance.allowErrorProps.bind(qe.defaultInstance);function ho(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function Et(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function $c(e,t,r=100){try{const{databases:n,config:a}=await Et(),o=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[T.greaterThan("$updatedAt",t),T.equal("mainId",e),T.limit(r),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function po(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:o}=await Et();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[T.equal("mainId",e),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),T.limit(n)])).documents;const i=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[T.greaterThan("$updatedAt",r),T.equal("mainId",e),T.limit(n),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const o=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function ur(e,t){try{const{databases:r,config:n}=await Et();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function Gt(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=ho(n,t),{databases:o,config:i}=await Et(),l=await o.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function mo(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await ur(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function go(e,t){return ur(e,{who:t})}async function Yn(e,t){return ur(e,{stockReel:t})}async function _o(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const a={};return t.stockReel!==void 0&&(a.stockReel=t.stockReel),t.who!==void 0&&(a.who=t.who),t.storeInfo!==void 0&&(a.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await ur(e,a)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await Gt(e,a,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function bo(e){try{const{databases:t,config:r}=await Et(),o=await(await window.AppwriteClient.getAccount()).get(),i={...e,createdBy:o.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,Nr.unique(),i);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function yo(e,t){try{const{databases:r,config:n}=await Et(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function wo(e){try{const{databases:t,config:r}=await Et();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function So(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Et(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[T.equal("$id",e),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function xo(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(m=>m.includes("products.")),f=i.some(m=>m.includes("purchases.")),v=i.some(m=>m.includes(".create")),g=i.some(m=>m.includes(".update")),p=i.some(m=>m.includes(".delete"));if(c){const m=l;v&&t.onProductCreate?t.onProductCreate(m):g&&t.onProductUpdate?t.onProductUpdate(m):p&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(f){const m=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(m):g&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):p&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function Po(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Et(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function $o(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await Et(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function pa(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function Eo(e,t,r,n){return pa({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function ko(e,t,r,n="replace"){return pa({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function Ao(e,t,r,n={}){try{const{databases:a,config:o}=await Et(),c=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const v of r){const g={products:[t],mainId:e,quantity:v.q,unit:v.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,Nr.unique(),g);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${t}`),f}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const o=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const Ec=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:pa,batchUpdateStore:Eo,batchUpdateWho:ko,createMainDocument:$o,createPurchase:bo,createQuickValidationPurchases:Ao,deletePurchase:wo,enrichedProductToAppwriteProduct:ho,loadMainEventData:Po,loadPurchasesListByIds:So,loadUpdatedPurchases:$c,subscribeToRealtime:xo,syncProductsWithPurchases:po,updateProduct:ur,updateProductBatch:_o,updateProductStock:Yn,updateProductStore:mo,updateProductWho:go,updatePurchase:yo,upsertProduct:Gt},Symbol.toStringTag,{value:"Module"}));async function kc(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Ac(e,t){const r=Gl(e.byDate),n=Gr(cn([])),{numeric:a,display:o}=un(r,n);return{$id:e.productSemanticKey||`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:Sr(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function Tc(e,t){return e.map(r=>Ac(r,t))}class Nc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";METADATA_KEY="cache-metadata";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=a=>{const o=a.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE),console.log("[IDBCache] Object store 'metadata' créé"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).get(this.METADATA_KEY);o.onsuccess=()=>{const i=o.result||{lastSync:null,allDates:[]};console.log(`[IDBCache] Metadata chargée: lastSync=${i.lastSync}, dates=${i.allDates?.length||0}`),t(i)},o.onerror=()=>r(o.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=a.objectStore(this.PRODUCTS_STORE);o.clear(),t.forEach(i=>{o.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put(t,this.METADATA_KEY);i.onsuccess=()=>{console.log("[IDBCache] Metadata sauvegardée"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Mc(e){const t=new Nc(e);return await t.open(),t}const Ya=1e3;class Cc{#e=new Tl;#r=H(null);#c=H(!1);#u=H(!1);#l=H(null);#o=H(!1);#i=H(!1);#a=H(null);#s=H(Ne([]));#f=H(Ne({start:null,end:null}));get dateRange(){return s(this.#f)}set dateRange(t){E(this.#f,t,!0)}#n=null;#d=null;#v=H(!1);#t=H(Ne({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get currentMainId(){return s(this.#r)}get isInitialized(){return s(this.#c)}get loading(){return s(this.#u)}get error(){return s(this.#l)}get lastSync(){return s(this.#a)}get syncing(){return s(this.#o)}get availableDates(){return s(this.#s)}setDateRange(t,r){if(!t&&!r){this.dateRange={start:null,end:null};return}if(!t||!r){this.dateRange={start:t||r,end:t||r};return}const n=new Date(t)<=new Date(r)?t:r,a=new Date(t)>=new Date(r)?t:r;this.dateRange={start:n,end:a}}isFullRange(){return this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate}initializeDateRange(){if((!this.dateRange.start||!this.dateRange.end)&&s(this.#s).length>0){const t=[...s(this.#s)].sort();this.dateRange={start:t[0],end:t[t.length-1]}}console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}get firstAvailableDate(){return s(this.#s).length===0?null:[...s(this.#s)].sort()[0]}get lastAvailableDate(){return s(this.#s).length===0?null:[...s(this.#s)].sort().pop()}get realtimeConnected(){return s(this.#i)}get hugoContentChanged(){return s(this.#v)}#g=J(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#g)}set enrichedProducts(t){E(this.#g,t)}#_=J(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const t=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[a,o]of this.#e){if(!o.byDate||!this.#B(o))continue;Object.keys(o.byDate).some(c=>{const f=new Date(c);return f>=t&&f<=r})&&n.set(a,o)}return n});get filteredProductsMap(){return s(this.#_)}set filteredProductsMap(t){E(this.#_,t)}#w=J(()=>{console.log("[Store] Calcul unifié des stats par produit (1 itération)");const t=new Map;if(this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate){console.log("[Store] Full date range - using precomputed data");for(const[n,a]of this.#e){const o=Ra(a,this.dateRange.end),i=o.filter(g=>g.q>0),l=o.filter(g=>g.q<0).map(g=>({q:Math.abs(g.q),u:g.u})),c=a.byDate?Object.keys(a.byDate).sort():[],f=new Map;let v=0;if(a.byDate)for(const[g,p]of Object.entries(a.byDate))p.recipes&&p.recipes.length>0&&(f.set(g,p.recipes),v+=p.recipes.length);t.set(n,{quantities:a.totalNeededArray,formattedQuantities:Sr(a.totalNeededArray),nbRecipes:a.nbRecipes||0,totalAssiettes:a.totalAssiettes||0,stockResult:o,availableQuantities:i,missingQuantities:l,formattedAvailableQuantities:Oa(o),hasAvailable:i.length>0,hasMissing:l.length>0,concernedDates:c,recipesByDate:f})}return t}for(const[n,a]of this.filteredProductsMap){if(!a.byDate)continue;const o=Ul(a.byDate),i=Ll(o,this.dateRange.start,this.dateRange.end),l=i.length>0?Sr(i):"",c=zl(a.byDate,this.dateRange.start,this.dateRange.end),f=Object.keys(a.byDate).filter(S=>{const b=new Date(S),y=new Date(this.dateRange.start),P=new Date(this.dateRange.end);return b>=y&&b<=P}).sort(),v=new Map;let g=0;f.forEach(S=>{const b=a.byDate[S]?.recipes||[];b.length>0&&(v.set(S,b),g+=b.length)});const p=Ra(a,this.dateRange.end),m=p.filter(S=>S.q>0),_=p.filter(S=>S.q<0).map(S=>({q:Math.abs(S.q),u:S.u}));t.set(n,{quantities:i,formattedQuantities:l,nbRecipes:g,totalAssiettes:c,stockResult:p,availableQuantities:m,missingQuantities:_,formattedAvailableQuantities:Oa(p),hasAvailable:m.length>0,hasMissing:_.length>0,concernedDates:f,recipesByDate:v})}return t});get productsStatsByDateRange(){return s(this.#w)}set productsStatsByDateRange(t){E(this.#w,t)}#S=J(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#S)}set stats(t){E(this.#S,t)}#h=J(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#h)}set uniqueStores(t){E(this.#h,t)}#p=J(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#p)}set uniqueWho(t){E(this.#p,t)}#m=J(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#m)}set uniqueProductTypes(t){E(this.#m,t)}#$=J(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((i,l)=>i.$id.localeCompare(l.$id));if(s(this.#t).groupBy==="none")return{"":r};const n=Object.groupBy(r,i=>s(this.#t).groupBy==="store"?i.storeInfo?.storeName||"Non défini":i.productType||"Non défini"),a=Object.keys(n).sort((i,l)=>i===""?1:l===""?-1:i.localeCompare(l)),o={};return a.forEach(i=>{o[i]=n[i]}),o});get groupedFilteredProducts(){return s(this.#$)}set groupedFilteredProducts(t){E(this.#$,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#c)&&s(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),E(this.#r,t,!0);try{this.#n=await Mc(t)}catch(r){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",r),new Error("Impossible d'initialiser le cache IndexedDB")}E(this.#l,null);try{if(await this.#T(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await kc(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),Tc(n.ingredients,t).forEach(i=>{this.#e.set(i.$id,i)}),E(this.#s,[...n.allDates],!0),await Po(t)||await $o(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#E()}this.initializeDateRange(),await this.#N(),E(this.#c,!0);const r=this.#j();this.#d=xo(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw E(this.#l,n,!0),console.error("[ProductsStore]",n,r),r}}async#T(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();E(this.#a,r.lastSync,!0),E(this.#s,[...r.allDates],!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#N(){if(s(this.#r)){E(this.#o,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#a)}`);const t=await po(s(this.#r),{lastSync:s(this.#a),limit:Ya});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#k(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#a)}`);const{loadUpdatedPurchases:r}=await Al(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Ec);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#r),s(this.#a),Ya);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const o=a.products.map(i=>typeof i=="string"?i:i.$id);this.#P(o,a)}})}this.#M(),await this.#E(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{E(this.#o,!1)}}}async#E(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:s(this.#a),allDates:[...s(this.#s)]}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#x(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#M(){E(this.#a,new Date().toISOString(),!0)}#k(t,r){return r?this.#b(t,r):this.#C(t)}#C(t){const r=Gr(cn(t.purchases??[])),n=[],{numeric:a,display:o}=un(n,r),i=zr(t.stockReel)??null,l=Sr(r),c=t.store?zr(t.store):null,f=i?`${i.quantity} ${i.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:c,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:o,totalNeededOverrideParsed:Da(t.totalNeededOverride)}}#b(t,r){const n=t.purchases??r.purchases,a=Gr(cn(n??[])),o=Sr(a),{numeric:i,display:l}=un(r.totalNeededArray,a),c=t.stockReel??r.stockReel,f=c?zr(c):r.stockParsed,v=t.store??r.store,g=v?zr(v):r.storeInfo,p=f?`${f.quantity} ${f.unit}`:o;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:v,stockReel:c,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:g,stockParsed:f,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:p,displayTotalPurchases:o,displayMissingQuantity:l,totalNeededOverrideParsed:Da(t.totalNeededOverride??r.totalNeededOverride)}}#L(t){t.totalPurchasesArray=Gr(cn(t.purchases??[]));const{numeric:r,display:n}=un(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=Sr(t.totalPurchasesArray)}#z(t){t.length&&(t.forEach(r=>this.#y(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#y(t){const r=this.#e.get(t.$id),n=this.#k(t,r);this.#e.set(t.$id,n)}#I(t){this.#e.delete(t)}async#D(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#q(r,t),r}async#R(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await So([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#P(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#O(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t));return r.forEach(n=>{this.#y(n)}),r.map(n=>n.$id)}#A(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#q(t,r){const n=this.#A(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#b({...i,purchases:[...l,n],status:"active"},i);a.push(c)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#P(t,r){const n=this.#A(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const v=this.#b({...i,purchases:f,status:"active"},i);a.push(v)}else{const f=this.#b({...i,purchases:[...l,r],status:"active"},i);a.push(f)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#j(){return{onProductCreate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#I(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#D(t);await this.#x(r)},onPurchaseUpdate:async t=>{const r=await this.#R(t);await this.#x(r)},onPurchaseDelete:async t=>{const r=await this.#O(t);await this.#x(r)},onConnect:()=>{E(this.#i,!0)},onDisconnect:()=>{E(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#B(t){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#t).selectedStores.includes(t.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!t.productType||!s(this.#t).selectedProductTypes.includes(t.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Bl(t=>{s(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#t).selectedProductTypes.indexOf(t);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#t).selectedTemperatures.indexOf(t);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(t){s(this.#t).groupBy=t}toggleStore(t){const r=s(this.#t).selectedStores.indexOf(t);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(t)}toggleWho(t){const r=s(this.#t).selectedWho.indexOf(t);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(t)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(t){s(this.#t).sortColumn===t?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=t,s(this.#t).sortDirection="asc")}clearFilters(){E(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#t).sortColumn],o=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,o=parseFloat(o)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,o=n.purchases?.length||0),a<o?s(this.#t).sortDirection==="asc"?-1:1:a>o?s(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Vl(r.byDate):!1}get enrichedProductsCount(){return this.#e.size}async forceReload(t){await this.clearCache(),await this.initialize(t)}async clearCache(){this.#e.clear(),E(this.#s,[],!0),E(this.#a,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(a=>{const o=this.#e.get(a);if(o){const i={...o,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#d?.(),this.#d=null,this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const Y=new Cc;function Ic(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Dc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Rc=nl("<svg><!><!></svg>");function fe(e,t){z(t,!0);const r=Ae(t,"color",3,"currentColor"),n=Ae(t,"size",3,24),a=Ae(t,"strokeWidth",3,2),o=Ae(t,"absoluteStrokeWidth",3,!1),i=Ae(t,"iconNode",19,()=>[]),l=ue(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=Rc();Ma(c,g=>({...Dc,...l,width:n(),height:n(),stroke:r(),"stroke-width":g,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(a())*24/Number(n()):a()]);var f=u(c);ot(f,17,i,Gn,(g,p)=>{var m=J(()=>os(s(p),2));let _=()=>s(m)[0],S=()=>s(m)[1];var b=B(),y=R(b);ul(y,_,!0,(P,w)=>{Ma(P,()=>({...S()}))}),h(g,b)});var v=d(f);ae(v,()=>t.children??F),h(e,c),V()}function Zn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];fe(e,de({name:"archive"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Oc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];fe(e,de({name:"bean"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function qc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];fe(e,de({name:"beef"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function jc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];fe(e,de({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Bc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];fe(e,de({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Xr(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];fe(e,de({name:"check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Lc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];fe(e,de({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function zc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];fe(e,de({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Vc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];fe(e,de({name:"circle-arrow-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Uc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];fe(e,de({name:"circle-arrow-right"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Za(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];fe(e,de({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Wc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];fe(e,de({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Gc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];fe(e,de({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Qc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];fe(e,de({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Hc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];fe(e,de({name:"clock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Kc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];fe(e,de({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function ma(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];fe(e,de({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Jc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];fe(e,de({name:"egg"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Yc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];fe(e,de({name:"euro"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Zc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];fe(e,de({name:"funnel-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function To(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];fe(e,de({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Xc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];fe(e,de({name:"info"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Fc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];fe(e,de({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function eu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];fe(e,de({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function tu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];fe(e,de({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function ru(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];fe(e,de({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function nu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];fe(e,de({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function au(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];fe(e,de({name:"message-circle-more"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function su(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];fe(e,de({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function ga(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];fe(e,de({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function ou(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];fe(e,de({name:"moon"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function iu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];fe(e,de({name:"package-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function rn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];fe(e,de({name:"package"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function lu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];fe(e,de({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function cu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];fe(e,de({name:"plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function uu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];fe(e,de({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function du(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];fe(e,de({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function fu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];fe(e,de({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function vu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];fe(e,de({name:"save"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function hu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];fe(e,de({name:"search"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function No(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];fe(e,de({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Jt(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];fe(e,de({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Mo(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];fe(e,de({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Xn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];fe(e,de({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Xt(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];fe(e,de({name:"store"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function pu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];fe(e,de({name:"sun"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function mu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];fe(e,de({name:"thermometer"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function kn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];fe(e,de({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Co(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];fe(e,de({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function nn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];fe(e,de({name:"user"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Fn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];fe(e,de({name:"users"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function gu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];fe(e,de({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function $t(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];fe(e,de({name:"x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=B(),l=R(i);ae(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}class _u{isMobileQuery=new Il("max-width: 767px");get isMobile(){return this.isMobileQuery.current}userName(){return localStorage.getItem("appwrite-user-name")||""}}const Fr=new _u;function bu(e,t){const r=e.reduce((a,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return a+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function yu(e,t){const r=e.filter(c=>!c.isSynced).map(c=>({productId:c.productId,productData:c.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(c){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",c)}const a=t.purchaseStatus||"delivered";let o=t.purchaseDeliveryDate||null;a==="delivered"&&!o&&(o=new Date().toISOString());const i=e.flatMap(c=>c.missingQuantities.map(f=>({productId:c.productId,quantity:f.q,unit:f.u,status:a,notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:o,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:i},invoiceData:t}}async function wu(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=bu(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const a=100,o=[];if(n<=a)o.push(t);else{let p=[],m=0;for(const _ of t){const S=(_.isSynced?0:1)+_.missingQuantities.length;m+S>a?(p.length>0&&o.push(p),p=[_],m=S):(p.push(_),m+=S)}p.length>0&&o.push(p)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,f=0;for(let p=0;p<o.length;p++){const m=o[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${o.length} (${m.length} produits)`);try{const _=await yu(m,r),S=await Su(_);if(i.push(S),S.success)l+=S.productsCreated,c+=S.purchasesCreated,f+=S.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${S.error}`);break}}catch(_){const S=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,_),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:S,timestamp:new Date().toISOString()});break}}const v=i.every(p=>p.success),g=i.some(p=>!p.success);return{success:v,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:f,error:g?"Un ou plusieurs lots ont échoué":void 0}}async function Su(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var xu=(e,t,r)=>t(s(r).id),Pu=$('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),$u=$('<span class="flex items-center gap-1"><!> </span>'),Eu=$('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),ku=$('<div class="flex flex-wrap gap-2"></div> <!>',1);function en(e,t){z(t,!0);let r=Ae(t,"badgeSize",3,"badge-lg"),n=Ae(t,"color",3,"primary"),a=Ae(t,"badgeStyle",3,""),o=Ae(t,"onToggleItem",3,()=>{}),i=Ae(t,"showStats",3,!1),l=Ae(t,"showIcon",3,!0),c=H(Ne({}));pr(()=>{const b={};t.items.forEach(y=>{b[y.id]=y.selected??!0}),E(c,b,!0)});function f(b){s(c)[b]=!s(c)[b],o()(b)}const v=J(()=>Object.values(s(c)).filter(Boolean).length),g=J(()=>Object.values(s(c)).filter(b=>!b).length);var p=ku(),m=R(p);ot(m,21,()=>t.items,b=>b.id,(b,y)=>{const P=J(()=>s(c)[s(y).id]);var w=Pu();w.__click=[xu,f,y];var x=u(w);{var k=j=>{var G=B(),te=R(G);ir(te,()=>s(y).icon,(ee,D)=>{D(ee,{class:"h-3 w-3",get title(){return s(y).title}})}),h(j,G)};N(x,j=>{s(y).icon&&j(k)})}var A=d(x,2),C=u(A),O=d(A,2);{var X=j=>{var G=B(),te=R(G);{var ee=I=>{Xr(I,{size:16})},D=I=>{cu(I,{size:16})};N(te,I=>{s(P)?I(ee):I(D,!1)})}h(j,G)};N(O,j=>{l()&&j(X)})}W(()=>{$e(w,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(P)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),Bt(w,"title",s(P)?"Retirer de la liste":"Réajouter à la liste"),L(C,s(y).label)}),h(b,w)});var _=d(m,2);{var S=b=>{var y=Eu(),P=u(y),w=u(P),x=u(w);Xr(x,{class:"text-success h-3 w-3"});var k=d(x),A=d(w,2);{var C=j=>{var G=$u(),te=u(G);$t(te,{class:"text-error h-3 w-3"});var ee=d(te);W(()=>L(ee,` ${s(g)??""} retirés`)),h(j,G)};N(A,j=>{s(g)>0&&j(C)})}var O=d(P,2),X=u(O);W(()=>{L(k,` ${s(v)??""} actifs`),L(X,`Total: ${t.items.length??""} items`)}),h(b,y)};N(_,b=>{i()&&b(S)})}h(e,p),V()}Ye(["click"]);function Au(e,t){E(t,!s(t))}var Tu=$('<span class="text-base-content font-semibold"> </span>'),Nu=$('<div class="text-base-content/80 flex-1"> </div>'),Mu=$('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Cu=$('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Iu=$('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Io(e,t){let r=Ae(t,"icon",3,Xc),n=Ae(t,"class",3,""),a=Ae(t,"initiallyOpen",3,!1),o=r(),i=H(Ne(a())),l=Ne(t.children);var c=Iu(),f=u(c);f.__click=[Au,i];var v=u(f),g=u(v);o(g,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(g,2);{var m=x=>{var k=Tu(),A=u(k);W(()=>L(A,t.title)),h(x,k)};N(p,x=>{t.title&&x(m)})}var _=d(v,2);{var S=x=>{var k=Nu(),A=u(k);W(()=>L(A,t.contentVisible)),h(x,k)};N(_,x=>{t.contentVisible&&x(S)})}var b=d(_,2);{var y=x=>{var k=Mu(),A=u(k),C=u(A);{var O=G=>{var te=yt("en savoir plus");h(G,te)},X=G=>{var te=yt("masquer");h(G,te)};N(C,G=>{s(i)?G(X,!1):G(O)})}var j=d(A,2);{let G=J(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(i)?"rotate-180":""}`);zc(j,{get class(){return s(G)}})}h(x,k)};N(b,x=>{l&&x(y)})}var P=d(f,2);{var w=x=>{var k=Cu(),A=u(k),C=u(A);ae(C,()=>t.children??F),W(()=>$e(k,1,`overflow-hidden transition-all duration-200 ${s(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),h(x,k)};N(P,x=>{l&&x(w)})}W(()=>{$e(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Gs(c,t.style),$e(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),Bt(f,"aria-expanded",s(i))}),h(e,c)}Ye(["click"]);async function Du(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){E(r,!0),E(n,null),E(a,null);try{const c=`FACTURE_${Date.now()}`,f=s(o).map(m=>m.$id);Y.setSyncStatus(f,!0);const v=[];for(const m of s(o))v.push({productId:m.$id,isSynced:m.isSynced,productData:m,missingQuantities:m.missingQuantityArray||[]});const g={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(o).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${v.length} produits...`),l.onClose();const p=await wu(Y.currentMainId,v,g);if(p.success)E(a,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";E(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),Y.clearSyncStatus()}finally{E(r,!1)}}}function Xa(e,t,r){s(t)||r.onClose()}var Ru=$('<div class="alert alert-error"><!> <span> </span></div>'),Ou=$('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),qu=$(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),ju=$("<option> </option>"),Bu=$("<option> </option>"),Lu=$('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),zu=$('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Vu=$("<!> ",1),Uu=$(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function Wu(e,t){z(t,!0);let r=H(!1),n=H(null),a=H(null),o=Ne({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=H(Ne(new Set));pr(()=>{E(i,new Set(t.products.map(ve=>ve.$id)),!0)});const l=J(()=>t.products.filter(ve=>s(i).has(ve.$id))),c=J(()=>s(l).length!==0),f=J(()=>`Achat groupé (${s(l).length} produits sélectionnés)`);function v(ve){const we=new Set(s(i));we.has(ve)?we.delete(ve):we.add(ve),E(i,we,!0)}const g=J(()=>t.products.map(ve=>({id:ve.$id,label:ve.productName,title:ve.productName})));var p=Uu(),m=u(p),_=u(m),S=u(_),b=u(S);Jt(b,{class:"h-5 w-5"});var y=d(b),P=d(S,2);P.__click=[Xa,r,t];var w=u(P);$t(w,{class:"h-4 w-4"});var x=d(_,2),k=u(x);{var A=ve=>{var we=Ru(),ye=u(we);kn(ye,{class:"h-4 w-4"});var ze=d(ye,2),Ue=u(ze);W(()=>L(Ue,s(n))),h(ve,we)};N(k,ve=>{s(n)&&ve(A)})}var C=d(k,2);{var O=ve=>{var we=Ou(),ye=u(we);Xr(ye,{class:"h-4 w-4"});var ze=d(ye,2),Ue=u(ze),pt=d(Ue);{var kt=Xe=>{var at=yt("+ 1 dépense globale");h(Xe,at)};N(pt,Xe=>{s(a).expense&&Xe(kt)})}var et=d(pt,2);{var ft=Xe=>{var at=yt();W(()=>L(at,`(traité en ${s(a).batches??""} lots)`)),h(Xe,at)};N(et,Xe=>{s(a).batches&&s(a).batches>1&&Xe(ft)})}W(()=>L(Ue,`Achat groupé créé avec succès ! ${s(a).purchases??""} produit(s) validés `)),h(ve,we)};N(C,ve=>{s(a)&&ve(O)})}var X=d(C,2),j=u(X);Io(j,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(ve,we)=>{var ye=qu();h(ve,ye)},$$slots:{default:!0}});var G=d(X,2),te=d(u(G),2),ee=u(te),D=u(ee),I=u(D);Xt(I,{class:"h-4 w-4 opacity-50"});var K=d(I,2),re=d(D,2);ot(re,21,()=>Y.uniqueStores,Gn,(ve,we)=>{var ye=ju(),ze=u(ye),Ue={};W(()=>{L(ze,s(we)),Ue!==(Ue=s(we))&&(ye.value=(ye.__value=s(we))??"")}),h(ve,ye)});var M=d(ee,2),Q=u(M),ie=u(Q);nn(ie,{class:"h-4 w-4 opacity-50"});var se=d(ie,2),he=d(Q,2);ot(he,21,()=>Y.uniqueWho,Gn,(ve,we)=>{var ye=Bu(),ze=u(ye),Ue={};W(()=>{L(ze,s(we)),Ue!==(Ue=s(we))&&(ye.value=(ye.__value=s(we))??"")}),h(ve,ye)});var _e=d(M,2),Ee=u(_e),U=u(Ee);Yc(U,{class:"h-4 w-4 opacity-50"});var me=d(U,2),q=d(te,2),le=u(q),Te=u(le),je=u(Te);je.value=je.__value="delivered";var Le=d(je);Le.value=Le.__value="ordered";var Be=d(Te,2),Ze=d(le,2);{var ge=ve=>{var we=Lu(),ye=u(we),ze=d(u(ye),2);W(()=>ze.disabled=s(r)),Ce(ze,()=>o.deliveryDate,Ue=>o.deliveryDate=Ue),h(ve,we)};N(Ze,ve=>{o.status==="ordered"&&ve(ge)})}var Pe=d(q,2),dt=u(Pe),oe=u(dt);ga(oe,{class:"h-4 w-4 opacity-50"});var Ve=d(oe,2),ne=d(G,2),be=d(u(ne),2);en(be,{get items(){return s(g)},onToggleItem:v,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Ke=d(ne,2),pe=u(Ke);pe.__click=[Xa,r,t];var lt=d(pe,2);lt.__click=[Du,c,r,n,a,l,o,t];var Ie=u(lt);{var Fe=ve=>{var we=zu();h(ve,we)},Dt=ve=>{var we=Vu(),ye=R(we);Jt(ye,{class:"h-4 w-4"});var ze=d(ye);W(()=>L(ze,` Valider ${s(l).length??""} produit(s)`)),h(ve,we)};N(Ie,ve=>{s(r)?ve(Fe):ve(Dt,!1)})}W(()=>{L(y,` ${s(f)??""}`),P.disabled=s(r),K.disabled=s(r),se.disabled=s(r),me.disabled=s(r),Te.disabled=s(r),$e(Be,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),Ve.disabled=s(r),pe.disabled=s(r),lt.disabled=s(r)||!s(c)}),Ce(K,()=>o.store,ve=>o.store=ve),Ce(se,()=>o.who,ve=>o.who=ve),Ce(me,()=>o.expense,ve=>o.expense=ve),nr(Te,()=>o.status,ve=>o.status=ve),Ce(Ve,()=>o.notes,ve=>o.notes=ve),h(e,p),V()}Ye(["click"]);function ea(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Oc};case"animaux":return{displayName:"Viandes et Poissons",icon:qc};case"legumes":return{displayName:"Fruits et Légumes",icon:Bc};case"sucres":return{displayName:"Sucrées",icon:jc};case"lof":return{displayName:"L.O.F",icon:Jc};case"autres":return{displayName:"Autres",icon:Lc};case"epices":return{displayName:"Assaisonnements",icon:eu};case"frais":return{displayName:"Produits Frais",icon:fu};default:return{displayName:e,icon:rn}}}function Fa(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function An(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Tn(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Gu(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function ta(e){switch(e){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function es(e){return e?Tn(e):"-"}function Qu(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",o=n.unit||"unit",i=`${a}_${o}`;if(!r[i]){const l=ta(a);r[i]={status:a,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Hu(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function Hu(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"ShoppingCart";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function Ku(e){let t=H(!1),r=H(null);const n=J(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),Y.getEnrichedProductById(e))),a=J(()=>s(n)?.who??[]),o=J(()=>s(n)?.stockParsed??null),i=J(()=>s(n)?.purchases??[]),l=J(()=>s(n)?.byDate?Wl(s(n).byDate):[]),c=Ne({purchase:{quantity:null,unit:"",store:"",who:Fr.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let f=H(!1),v=H(null);pr(()=>{!s(n)||s(f)||(c.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,c.purchase.unit=s(n).totalNeededArray[0]?.u??"",c.purchase.store=s(n).storeInfo?.storeName??"",c.purchase.who=Fr.userName()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=s(n).totalNeededArray[0]?.u??"",c.store.name=s(n).storeInfo?.storeName??"",c.store.comment=s(n).storeInfo?.storeComment??null,c.who=s(n)?.who?[...s(n).who]:[],E(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),E(f,!0))});const g=J(()=>s(v)?{store:JSON.stringify(c.store)!==JSON.stringify(s(v).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(s(v).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?s(o)?c.stock.quantity.toString()!==s(o).quantity||c.stock.unit!==s(o).unit||(c.stock.notes||"")!==(s(o).notes||""):!0:!1}const m=J(()=>!!(s(v)&&(s(g).store||s(g).stock||s(g).who)));let _=H(null);const S=J(()=>s(_)?s(i).find(D=>D.$id===s(_))??null:null);async function b(D,I){E(t,!0),E(r,null);try{const K=await D();return I&&y("success",I),K}catch(K){const re=K instanceof Error?K.message:"Une erreur est survenue";return E(r,re,!0),y("error",re),console.error("[ProductModalState]",K),null}finally{E(t,!1)}}function y(D,I){const K=new CustomEvent("toast",{detail:{type:D,message:I}});window.dispatchEvent(K)}async function P(){s(n)&&await b(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!Y.currentMainId)throw new Error("mainId non disponible");const{quantity:D,unit:I}=Fa(c.purchase.quantity,c.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await Gt(s(n).$id,{},M=>Y.getEnrichedProductById(M)));const K=c.purchase.status||"delivered";let re=c.purchase.deliveryDate||null;K==="delivered"&&!re&&(re=new Date().toISOString()),await bo({products:[s(n).$id],mainId:Y.currentMainId,unit:I,quantity:D,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:K,orderDate:c.purchase.orderDate||null,deliveryDate:re}),c.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function w(D){E(_,D.$id,!0)}function x(){E(_,null)}async function k(D){D.$id&&await b(async()=>{const{quantity:I,unit:K}=Fa(D.quantity,D.unit),re=D.status||null;let M=D.deliveryDate||null;re==="delivered"&&!M&&(M=new Date().toISOString()),await yo(D.$id,{unit:K,quantity:I,store:D.store||null,who:D.who||null,notes:D.notes||"",price:D.price||null,status:re,orderDate:D.orderDate||null,deliveryDate:M}),E(_,null)},"Achat modifié avec succès")}async function A(D){const I=s(i).find(K=>K.$id===D);I&&confirm(`Supprimer cet achat (${I.quantity} ${I.unit}) ?`)&&await b(async()=>{await wo(D)},"Achat supprimé avec succès")}async function C(){s(n)&&await b(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const D={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await Yn(s(n).$id,JSON.stringify(D))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await Gt(s(n).$id,{stockReel:JSON.stringify(D)},I=>Y.getEnrichedProductById(I))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function O(){s(n)&&confirm("Supprimer le stock actuel ?")&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, suppression stock normal...`),await Yn(s(n).$id,null)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, suppression stock avec upsert...`),await Gt(s(n).$id,{stockReel:null},D=>Y.getEnrichedProductById(D)))},"Stock supprimé")}async function X(D){s(n)&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, setWho normal...`),await go(s(n).$id,D)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await Gt(s(n).$id,{who:D},I=>Y.getEnrichedProductById(I)))},"Volontaires mis à jour")}async function j(D){s(n)&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await mo(s(n).$id,D)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await Gt(s(n).$id,{store:JSON.stringify(D)},I=>Y.getEnrichedProductById(I)))},"Magasin mis à jour")}async function G(D){s(n)&&await b(async()=>{await ur(s(n).$id,{totalNeededOverride:JSON.stringify(D)})},"Override appliqué")}async function te(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await b(async()=>{await ur(s(n).$id,{totalNeededOverride:null})},"Override supprimé")}async function ee(){!s(n)||!s(m)||await b(async()=>{const D={};if(s(g).stock&&c.stock.quantity&&c.stock.unit){const I={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};D.stockReel=JSON.stringify(I)}if(s(g).who&&(D.who=c.who),s(g).store){const I={storeName:c.store.name||"",storeComment:c.store.comment||void 0};D.storeInfo=I}Object.keys(D).length>0&&(await _o(s(n).$id,D,I=>Y.getEnrichedProductById(I)),E(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockParsed(){return s(o)},get purchasesList(){return s(i)},get editingPurchaseId(){return s(_)},get editingPurchaseData(){return s(S)},forms:c,addPurchase:P,startEditPurchase:w,cancelEditPurchase:x,updateEditedPurchase:k,removePurchase:A,setStock:C,removeStock:O,setWho:X,updateStore:j,setOverride:G,removeOverride:te,saveAllChanges:ee,get hasChanges(){return s(g)},get hasAnyChanges(){return s(m)},formatQuantity:An,formatDate:Tn,formatDisplayQuantity:Gu}}function Ju(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Yu(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Zu(e,t){t().cancelEditPurchase()}var Xu=$('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Fu=$('<span class="loading loading-spinner loading-sm"></span>'),ed=$('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),td=$('<span class="loading loading-spinner loading-sm"></span>'),rd=$('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Livré</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),nd=(e,t,r)=>t(s(r)),ad=(e,t,r)=>t(s(r).$id),sd=$('<span class="loading loading-spinner loading-sm"></span>'),od=$('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),id=$('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),ld=$(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function cd(e,t){z(t,!0);let r=Ae(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(oe){return oe.quantity!==null&&oe.quantity!==0&&oe.unit?.trim()!==""}function o(oe){r().removePurchase(oe)}function i(oe){r().startEditPurchase(oe)}var l=ld(),c=u(l),f=u(c);Jt(f,{class:"h-5 w-5"});var v=d(c,2),g=u(v),p=d(u(g),2),m=u(p),_=u(m);rn(_,{class:"h-4 w-4 opacity-50"});var S=d(_,2),b=d(m,2),y=u(b);y.value=y.__value="";var P=d(y);P.value=P.__value="kg";var w=d(P);w.value=w.__value="gr.";var x=d(w);x.value=x.__value="l.";var k=d(x);k.value=k.__value="ml";var A=d(k);A.value=A.__value="unité";var C=d(A);C.value=C.__value="bottes";var O=d(b,2),X=u(O);Xt(X,{class:"h-4 w-4 opacity-50"});var j=d(X,2),G=d(O,2),te=u(G);nn(te,{class:"h-4 w-4 opacity-50"});var ee=d(te,2),D=d(G,2),I=d(u(D),2),K=d(p,2),re=u(K),M=u(re);ga(M,{class:"h-4 w-4 opacity-50"});var Q=d(M,2),ie=d(K,2),se=u(ie),he=u(se),_e=u(he),Ee=u(_e);Ee.value=Ee.__value="delivered";var U=d(Ee);U.value=U.__value="ordered";var me=d(he,2),q=d(se,2);{var le=oe=>{var Ve=Xu(),ne=d(u(Ve),2);Ce(ne,()=>r().forms.purchase.deliveryDate,be=>r().forms.purchase.deliveryDate=be),h(oe,Ve)};N(q,oe=>{r().forms.purchase.status==="ordered"&&oe(le)})}var Te=d(ie,2),je=u(Te);je.__click=[Ju,n,r];var Le=u(je);{var Be=oe=>{var Ve=Fu();h(oe,Ve)},Ze=oe=>{var Ve=yt("Ajouter l'achat");h(oe,Ve)};N(Le,oe=>{r().loading?oe(Be):oe(Ze,!1)})}var ge=d(v,2);{var Pe=oe=>{var Ve=ed(),ne=u(Ve);Jt(ne,{class:"mx-auto mb-2 h-12 w-12"}),h(oe,Ve)},dt=oe=>{var Ve=id(),ne=u(Ve),be=d(u(ne));ot(be,21,()=>r().purchasesList,Ke=>Ke.$id,(Ke,pe,lt)=>{var Ie=B(),Fe=R(Ie);{var Dt=we=>{var ye=rd(),ze=u(ye),Ue=u(ze),pt=u(Ue),kt=d(pt,2),et=u(kt);et.value=et.__value="kg";var ft=d(et);ft.value=ft.__value="gr.";var Xe=d(ft);Xe.value=Xe.__value="l.";var at=d(Xe);at.value=at.__value="ml";var Z=d(at);Z.value=Z.__value="unité";var ce=d(Z);ce.value=ce.__value="bottes";var ke=d(ze),We=u(ke),Ge=d(ke),Me=u(Ge),Qe=d(Ge),Re=u(Qe),wt=u(Re);wt.value=wt.__value="ordered";var gr=d(wt);gr.value=gr.__value="delivered";var _r=d(Qe),mt=u(_r),St=d(_r),Rt=u(St),Wt=d(St),er=u(Wt),br=d(Wt),At=u(br),Or=d(br),Nn=u(Or),yr=u(Nn);yr.__click=[Yu,r,a];var Mn=u(yr);{var Ro=Oe=>{var jo=td();h(Oe,jo)},Oo=Oe=>{vu(Oe,{class:"h-3 w-3"})};N(Mn,Oe=>{r().loading?Oe(Ro):Oe(Oo,!1)})}var _a=d(yr,2);_a.__click=[Zu,r];var qo=u(_a);$t(qo,{class:"h-3 w-3"}),W(Oe=>yr.disabled=Oe,[()=>r().loading||!a(s(pe))]),Ce(pt,()=>s(pe).quantity,Oe=>s(pe).quantity=Oe),nr(kt,()=>s(pe).unit,Oe=>s(pe).unit=Oe),Ce(We,()=>s(pe).store,Oe=>s(pe).store=Oe),Ce(Me,()=>s(pe).who,Oe=>s(pe).who=Oe),nr(Re,()=>s(pe).status,Oe=>s(pe).status=Oe),Ce(mt,()=>s(pe).orderDate,Oe=>s(pe).orderDate=Oe),Ce(Rt,()=>s(pe).deliveryDate,Oe=>s(pe).deliveryDate=Oe),Ce(er,()=>s(pe).price,Oe=>s(pe).price=Oe),Ce(At,()=>s(pe).notes,Oe=>s(pe).notes=Oe),h(we,ye)},ve=we=>{var ye=od(),ze=u(ye),Ue=u(ze),pt=d(ze),kt=u(pt),et=d(pt),ft=u(et),Xe=d(et),at=u(Xe),Z=u(at),ce=d(Xe),ke=u(ce),We=d(ce),Ge=u(We),Me=d(We),Qe=u(Me),Re=d(Me),wt=u(Re),gr=d(Re),_r=u(gr),mt=u(_r);mt.__click=[nd,i,pe];var St=u(mt);Xn(St,{class:"h-4 w-4"});var Rt=d(mt,2);Rt.__click=[ad,o,pe];var Wt=u(Rt);{var er=At=>{var Or=sd();h(At,Or)},br=At=>{$t(At,{class:"h-4 w-4"})};N(Wt,At=>{r().loading?At(er):At(br,!1)})}W((At,Or,Nn,yr,Mn)=>{L(Ue,At),L(kt,s(pe).store||"-"),L(ft,s(pe).who||"-"),$e(at,1,`badge badge-sm ${Or??""}`),L(Z,Nn),L(ke,yr),L(Ge,Mn),L(Qe,s(pe).price?`${s(pe).price}€`:"-"),L(wt,s(pe).notes||"-"),Rt.disabled=r().loading},[()=>An(s(pe).quantity,s(pe).unit),()=>ta(s(pe).status).class,()=>ta(s(pe).status).text,()=>es(s(pe).orderDate),()=>es(s(pe).deliveryDate)]),h(we,ye)};N(Fe,we=>{r().editingPurchaseId===s(pe).$id?we(Dt):we(ve,!1)})}h(Ke,Ie)}),h(oe,Ve)};N(ge,oe=>{r().purchasesList.length===0?oe(Pe):oe(dt,!1)})}W(oe=>{$e(me,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),je.disabled=oe},[()=>r().loading||!n()]),Ce(S,()=>r().forms.purchase.quantity,oe=>r().forms.purchase.quantity=oe),nr(b,()=>r().forms.purchase.unit,oe=>r().forms.purchase.unit=oe),Ce(j,()=>r().forms.purchase.store,oe=>r().forms.purchase.store=oe),Ce(ee,()=>r().forms.purchase.who,oe=>r().forms.purchase.who=oe),Ce(I,()=>r().forms.purchase.price,oe=>r().forms.purchase.price=oe),Ce(Q,()=>r().forms.purchase.notes,oe=>r().forms.purchase.notes=oe),nr(_e,()=>r().forms.purchase.status,oe=>r().forms.purchase.status=oe),h(e,l),V()}Ye(["click"]);async function ud(e,t){await t()?.removeStock()}var dd=$(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),fd=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},vd=$('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),hd=$('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),pd=$('<span class="loading loading-spinner loading-xs"></span>'),md=$('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),gd=$(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div> <!></div>`);function _d(e,t){z(t,!0);let r=Ae(t,"modalState",7);var n=gd(),a=u(n),o=u(a);Zn(o,{class:"h-5 w-5"});var i=d(a,2),l=u(i),c=u(l),f=u(c),v=d(c,2),g=u(v);Io(g,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(I,K)=>{var re=dd();h(I,re)},$$slots:{default:!0}});var p=d(v,2),m=u(p),_=u(m);rn(_,{class:"h-4 w-4 opacity-50"});var S=d(_,2),b=d(m,2),y=u(b);y.value=y.__value="";var P=d(y);P.value=P.__value="kg";var w=d(P);w.value=w.__value="gr.";var x=d(w);x.value=x.__value="l.";var k=d(x);k.value=k.__value="ml";var A=d(k);A.value=A.__value="unité";var C=d(A);C.value=C.__value="bottes";var O=d(p,2),X=u(O),j=d(O,2),G=u(j);G.__click=[fd,r];var te=d(i,2);{var ee=I=>{var K=vd(),re=u(K);Zn(re,{class:"mx-auto mb-2 h-12 w-12"}),h(I,K)},D=I=>{var K=md(),re=u(K),M=d(u(re),2),Q=u(M),ie=d(u(Q),2),se=u(ie),he=d(Q,2),_e=d(u(he),2),Ee=u(_e),U=d(he,2);{var me=Be=>{var Ze=hd(),ge=d(u(Ze),2),Pe=u(ge);W(()=>L(Pe,r().stockParsed.notes)),h(Be,Ze)};N(U,Be=>{r().stockParsed.notes&&Be(me)})}var q=d(M,2),le=u(q);le.__click=[ud,r];var Te=u(le);{var je=Be=>{var Ze=pd();h(Be,Ze)},Le=Be=>{var Ze=yt("Supprimer le stock");h(Be,Ze)};N(Te,Be=>{r().loading?Be(je):Be(Le,!1)})}W(Be=>{L(se,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),L(Ee,Be),le.disabled=r().loading},[()=>Tn(r().stockParsed.dateTime)]),h(I,K)};N(te,I=>{r().stockParsed?I(D,!1):I(ee)})}W(I=>{L(f,`Déclarer le stock réel du ${I??""}`),G.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),Ce(S,()=>r().forms.stock.quantity,I=>r().forms.stock.quantity=I),nr(b,()=>r().forms.stock.unit,I=>r().forms.stock.unit=I),Ce(X,()=>r().forms.stock.notes,I=>r().forms.stock.notes=I),h(e,n),V()}Ye(["click"]);function bd(e,t,r){t().forms.who=[...t().whoList],E(r,"")}var yd=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},wd=$('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div></div></div>');function Sd(e,t){z(t,!0);let r=Ae(t,"modalState",7),n=H("");const a=J(()=>{const C=new Set([...Y.uniqueWho,...r().forms.who]);return Array.from(C).map(O=>({id:O,label:O,selected:r().forms.who.includes(O)}))});function o(C){const O=C.trim();O&&!r().forms.who.includes(O)&&(r().forms.who=[...r().forms.who,O])}function i(C){r().forms.who=r().forms.who.filter(O=>O!==C)}function l(C){r().forms.who.includes(C)?i(C):o(C)}function c(){s(n).trim()&&(o(s(n)),E(n,""))}var f=wd(),v=u(f),g=u(v),p=d(u(g),4),m=u(p),_=u(m),S=u(_);nn(S,{class:"h-4 w-4 opacity-50"});var b=d(S,2);b.__keydown=[yd,c];var y=d(_,2);y.__click=c;var P=u(y);Co(P,{size:16});var w=d(m,2),x=d(u(w),2);en(x,{get items(){return s(a)},onToggleItem:l,showIcon:!0});var k=d(p,2),A=u(k);A.__click=[bd,r,n],W(C=>{b.disabled=r().loading,y.disabled=C,A.disabled=r().loading},[()=>r().loading||!s(n).trim()]),Ce(b,()=>s(n),C=>E(n,C)),h(e,f),V()}Ye(["keydown","click"]);var xd=$('<div class="mb-1 text-xs opacity-70"> </div>'),Pd=(e,t,r)=>t(s(r)),$d=$("<button><!> </button>"),Ed=$('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function Do(e,t){z(t,!0);let r=Ae(t,"maxSuggestions",3,8),n=Ae(t,"title",3,"Suggestions :"),a=Ae(t,"buttonSize",3,"btn-xs"),o=Ae(t,"buttonVariant",3,"btn-soft"),i=Ae(t,"disabled",3,!1);const l=J(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var f=B(),v=R(f);{var g=p=>{var m=Ed(),_=u(m);{var S=y=>{var P=xd(),w=u(P);W(()=>L(w,n())),h(y,P)};N(_,y=>{n()&&y(S)})}var b=d(_,2);ot(b,21,()=>s(l),y=>y.id,(y,P)=>{var w=$d();w.__click=[Pd,c,P];var x=u(w);{var k=C=>{var O=B(),X=R(O);ir(X,()=>s(P).icon,(j,G)=>{G(j,{class:"h-3 w-3"})}),h(C,O)};N(x,C=>{s(P).icon&&C(k)})}var A=d(x);W(()=>{$e(w,1,`btn ${a()??""} ${o()??""}`),w.disabled=i()||s(P).disabled,Bt(w,"title",s(P).disabled?"Déjà sélectionné":s(P).label),L(A,` ${s(P).label??""}`)}),h(y,w)}),h(p,m)};N(v,p=>{s(l).length>0&&p(g)})}h(e,f),V()}Ye(["click"]);var kd=(e,t)=>{e.key==="Enter"&&t()},Ad=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},Td=$(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function Nd(e,t){z(t,!0);let r=Ae(t,"modalState",7);const n=J(()=>r()?.hasChanges?.store||!1);async function a(){if(!s(n))return;const P={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(P)}var o=Td(),i=u(o),l=u(i),c=d(u(l),4),f=u(c),v=u(f),g=u(v);Xt(g,{class:"h-4 w-4 opacity-50"});var p=d(g,2);p.__keydown=[kd,a];var m=d(v,2);{var _=P=>{{let w=J(()=>Y.uniqueStores.map(x=>({id:x,label:x,disabled:x===r().forms.store.name})));Do(P,{get suggestions(){return s(w)},onSuggestionClick:x=>{r().forms.store.name=x.label},buttonVariant:"btn-outline"})}};N(m,P=>{Y.uniqueStores.length>0&&P(_)})}var S=d(f,2),b=d(c,2),y=u(b);y.__click=[Ad,r],W(()=>y.disabled=r().loading),Ce(p,()=>r().forms.store.name,P=>r().forms.store.name=P),Ce(S,()=>r().forms.store.comment,P=>r().forms.store.comment=P),h(e,o),V()}Ye(["keydown","click"]);async function Md(e,t,r,n,a,o){if(!t.modalState)return;const i={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await t.modalState.setOverride(i),E(o,!1)}async function Cd(e,t,r){t.modalState&&(await t.modalState.removeOverride(),E(r,!1))}var Id=$('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),Dd=$('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),Rd=$(" <!>",1),Od=(e,t)=>E(t,!0),qd=$('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),jd=$('<div class="text-error text-sm">Limite de caractères atteinte</div>'),Bd=$('<span class="loading loading-spinner loading-sm"></span>'),Ld=$('<span class="loading loading-spinner loading-sm"></span>'),zd=$(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),Vd=$('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function Ud(e,t){z(t,!0);const r=J(()=>t.modalState.product?.totalNeededOverrideParsed),n=J(()=>t.modalState.product?.displayTotalNeeded||[]);let a=H(!1),o=H(Ne(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=H(Ne(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=H(Ne(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),c=J(()=>s(o)>0&&s(i).trim()!=="");var f=Vd(),v=u(f),g=u(v),p=u(g);{var m=S=>{var b=qd(),y=R(b),P=u(y),w=d(u(P),2);{var x=j=>{var G=Id();h(j,G)};N(w,j=>{s(r)&&j(x)})}var k=d(w,2),A=u(k);{var C=j=>{var G=Rd(),te=R(G),ee=d(te);{var D=I=>{var K=Dd(),re=u(K);ga(re,{});var M=d(re);W(()=>L(M,` ${s(r).comment??""}`)),h(I,K)};N(ee,I=>{s(r).comment&&I(D)})}W(I=>L(te,`${I??""} `),[()=>An(s(r).totalOverride.q,s(r).totalOverride.u)]),h(j,G)},O=j=>{var G=yt();W(()=>L(G,s(n))),h(j,G)};N(A,j=>{s(r)?j(C):j(O,!1)})}var X=d(y,2);X.__click=[Od,a],h(S,b)},_=S=>{var b=zd(),y=R(b),P=u(y),w=u(P);lu(w,{class:"h-4 w-4 opacity-50"});var x=d(w,2),k=d(P,2),A=u(k);A.value=A.__value="";var C=d(A);C.value=C.__value="kg";var O=d(C);O.value=O.__value="gr.";var X=d(O);X.value=X.__value="l.";var j=d(X);j.value=j.__value="ml";var G=d(j);G.value=G.__value="unité";var te=d(G);te.value=te.__value="bottes";var ee=d(y,2),D=u(ee),I=d(u(D),2),K=d(I,2);{var re=q=>{var le=jd();h(q,le)};N(K,q=>{s(l).length>=250&&q(re)})}var M=d(ee,2),Q=u(M);Q.__click=[Cd,t,a];var ie=u(Q);{var se=q=>{var le=Bd();h(q,le)},he=q=>{var le=yt();W(()=>L(le,`Réinitialiser le total calculé (${s(n)??""}).`)),h(q,le)};N(ie,q=>{t.modalState.loading?q(se):q(he,!1)})}var _e=d(Q,2);_e.__click=[Md,t,o,i,l,a];var Ee=u(_e);{var U=q=>{var le=Ld();h(q,le)},me=q=>{var le=yt("Appliquer");h(q,le)};N(Ee,q=>{t.modalState.loading?q(U):q(me,!1)})}W(()=>{Q.disabled=t.modalState.loading,_e.disabled=t.modalState.loading||!s(c)}),Ce(x,()=>s(o),q=>E(o,q)),nr(k,()=>s(i),q=>E(i,q)),Ce(I,()=>s(l),q=>E(l,q)),h(S,b)};N(p,S=>{s(a)?S(_,!1):S(m)})}W(()=>$e(v,1,`card border-base-300 border ${s(a)?"bg-base-200":"bg-base-100"}`)),h(e,f),V()}Ye(["click"]);var Wd=$('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Gd=$('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Qd=$('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Hd=$('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Kd(e,t){z(t,!0);const r=J(()=>t.modalState.recipes);var n=Hd(),a=R(n);Ud(a,{get modalState(){return t.modalState}});var o=d(a,2),i=u(o),l=u(i);ma(l,{class:"h-5 w-5"});var c=d(i,2);{var f=g=>{var p=Wd(),m=u(p);rn(m,{class:"mx-auto mb-2 h-12 w-12"}),h(g,p)},v=g=>{var p=Qd(),m=u(p),_=d(u(m));ot(_,21,()=>s(r),S=>S.r,(S,b)=>{var y=Gd(),P=u(y),w=u(P),x=d(P),k=u(x),A=d(x),C=u(A);W(O=>{L(w,`${s(b).r??""} (${(s(b).a||"-")??""} c.)`),L(k,`${(s(b).q||s(b).qEq)??""} ${(s(b).u||s(b).uEq)??""}`),L(C,O)},[()=>Tn(s(b).date)]),h(S,y)}),h(g,p)};N(c,g=>{s(r).length===0?g(f):g(v,!1)})}h(e,n),V()}function Jd(e,t,r){s(t).saveAllChanges().then(()=>{r.onClose()})}var Yd=$('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Zd=$('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Xd=(e,t)=>t("recettes"),Fd=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),ef=$('<span class="badge badge-sm badge-ghost ml-1">0</span>'),tf=(e,t)=>t("magasins"),rf=$('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),nf=(e,t)=>t("volontaires"),af=$('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),sf=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),of=$('<span class="badge badge-sm badge-ghost ml-1">0</span>'),lf=(e,t)=>t("stock"),cf=$('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),uf=$('<span class="badge badge-sm badge-secondary ml-1">1</span>'),df=$('<span class="badge badge-sm badge-ghost ml-1">0</span>'),ff=(e,t)=>t("achats"),vf=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),hf=$('<span class="badge badge-sm badge-ghost ml-1">0</span>'),pf=$('<div class="alert alert-error mb-4"><!> <span> </span></div>'),mf=$('<span class="loading loading-spinner loading-sm"></span>'),gf=$('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),_f=$('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function bf(e,t){z(t,!0);let r=Ae(t,"initialTab",3,"recettes"),n=J(()=>Ku(t.productId)),a=H(Ne(r()));function o(b){E(a,b,!0)}var i=_f(),l=u(i),c=u(l),f=u(c);{var v=b=>{var y=Yd(),P=R(y),w=u(P),x=d(P,2),k=u(x),A=u(k),C=d(k,2),O=d(u(C));W(()=>{L(w,s(n).product?.productName),L(A,s(n).product?.productType),L(O,` ${s(n).product?.displayTotalNeeded??""}`)}),h(b,y)},g=b=>{var y=Zd();h(b,y)};N(f,b=>{s(n)&&s(n).product?b(v):b(g,!1)})}var p=d(f,2);p.__click=function(...b){t.onClose?.apply(this,b)};var m=u(p);$t(m,{class:"h-4 w-4"});var _=d(c,2);{var S=b=>{var y=gf(),P=R(y),w=u(P);w.__click=[Xd,o];var x=u(w);ma(x,{class:"mr-1 h-5 w-5"});var k=d(x,2);{var A=ne=>{var be=Fd(),Ke=u(be);W(()=>L(Ke,s(n).product?.nbRecipes)),h(ne,be)},C=ne=>{var be=ef();h(ne,be)};N(k,ne=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?ne(A):ne(C,!1)})}var O=d(w,2);O.__click=[tf,o];var X=u(O);Xt(X,{class:"mr-1 h-5 w-5"});var j=d(X,2);{var G=ne=>{var be=rf();h(ne,be)};N(j,ne=>{s(n).hasChanges?.store&&ne(G)})}var te=d(O,2);te.__click=[nf,o];var ee=u(te);Fn(ee,{class:"mr-1 h-5 w-5"});var D=d(ee,2);{var I=ne=>{var be=af();h(ne,be)},K=ne=>{var be=B(),Ke=R(be);{var pe=Ie=>{var Fe=sf(),Dt=u(Fe);W(()=>L(Dt,s(n).product?.who.length)),h(Ie,Fe)},lt=Ie=>{var Fe=of();h(Ie,Fe)};N(Ke,Ie=>{s(n).product?.who&&s(n).product?.who.length>0?Ie(pe):Ie(lt,!1)},!0)}h(ne,be)};N(D,ne=>{s(n).hasChanges?.who?ne(I):ne(K,!1)})}var re=d(te,2);re.__click=[lf,o];var M=u(re);Zn(M,{class:"mr-1 h-5 w-5"});var Q=d(M,2);{var ie=ne=>{var be=cf();h(ne,be)},se=ne=>{var be=B(),Ke=R(be);{var pe=Ie=>{var Fe=uf();h(Ie,Fe)},lt=Ie=>{var Fe=df();h(Ie,Fe)};N(Ke,Ie=>{s(n).stockParsed?Ie(pe):Ie(lt,!1)},!0)}h(ne,be)};N(Q,ne=>{s(n).hasChanges?.stock?ne(ie):ne(se,!1)})}var he=d(re,2);he.__click=[ff,o];var _e=u(he);Jt(_e,{class:"mr-1 h-5 w-5"});var Ee=d(_e,2);{var U=ne=>{var be=vf(),Ke=u(be);W(()=>L(Ke,s(n).purchasesList.length)),h(ne,be)},me=ne=>{var be=hf();h(ne,be)};N(Ee,ne=>{s(n).purchasesList.length>0?ne(U):ne(me,!1)})}var q=d(P,2),le=u(q);{var Te=ne=>{var be=pf(),Ke=u(be);$t(Ke,{class:"h-4 w-4"});var pe=d(Ke,2),lt=u(pe);W(()=>L(lt,`erreur : ${s(n).error??""}`)),h(ne,be)};N(le,ne=>{s(n).error&&ne(Te)})}var je=d(le,2),Le=u(je);il(Le,()=>s(a),ne=>{var be=B(),Ke=R(be);{var pe=Ie=>{Kd(Ie,{get modalState(){return s(n)}})},lt=Ie=>{var Fe=B(),Dt=R(Fe);{var ve=ye=>{cd(ye,{get modalState(){return s(n)}})},we=ye=>{var ze=B(),Ue=R(ze);{var pt=et=>{_d(et,{get modalState(){return s(n)}})},kt=et=>{var ft=B(),Xe=R(ft);{var at=ce=>{Sd(ce,{get modalState(){return s(n)}})},Z=ce=>{var ke=B(),We=R(ke);{var Ge=Me=>{Nd(Me,{get modalState(){return s(n)}})};N(We,Me=>{s(a)==="magasins"&&Me(Ge)},!0)}h(ce,ke)};N(Xe,ce=>{s(a)==="volontaires"?ce(at):ce(Z,!1)},!0)}h(et,ft)};N(Ue,et=>{s(a)==="stock"?et(pt):et(kt,!1)},!0)}h(ye,ze)};N(Dt,ye=>{s(a)==="achats"?ye(ve):ye(we,!1)},!0)}h(Ie,Fe)};N(Ke,Ie=>{s(a)==="recettes"?Ie(pe):Ie(lt,!1)})}h(ne,be)});var Be=d(q,2),Ze=u(Be);Ze.__click=function(...ne){t.onClose?.apply(this,ne)};var ge=u(Ze),Pe=d(Ze,2);Pe.__click=[Jd,n,t];var dt=u(Pe);{var oe=ne=>{var be=mf();h(ne,be)},Ve=ne=>{var be=yt("Tout enregistrer");h(ne,be)};N(dt,ne=>{s(n).loading?ne(oe):ne(Ve,!1)})}W(()=>{$e(w,1,`tab ${s(a)==="recettes"?"tab-active":""}`),$e(O,1,`tab ${s(a)==="magasins"?"tab-active":""}`),$e(te,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),$e(re,1,`tab ${s(a)==="stock"?"tab-active":""}`),$e(he,1,`tab ${s(a)==="achats"?"tab-active":""}`),L(ge,s(n)?.hasAnyChanges?"Annuler":"Fermer"),Pe.disabled=s(n).loading||!s(n).hasAnyChanges}),h(b,y)};N(_,b=>{s(n)&&b(S)})}h(e,i),V()}Ye(["click"]);var yf=(e,t,r)=>t(r),wf=$("<button><span> </span> <!></button>"),Sf=(e,t)=>t(),xf=$('<div class="flex justify-end"><button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button></div>'),Pf=$('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),$f=$('<div class=" flex flex-wrap gap-1"></div> <!>',1);function Ef(e,t){z(t,!0);let r=Ae(t,"availableDates",19,()=>[]),n=Ae(t,"currentRange",19,()=>({start:null,end:null})),a=H(Ne(n().start)),o=H(Ne(n().end));const i=J(()=>r().length>0&&s(a)===r()[0]&&s(o)===r()[r().length-1]);pr(()=>{E(a,n().start,!0),E(o,n().end,!0)});function l(y){s(a)===y&&s(o)===y?g():new Date(y)<new Date(s(a))?E(a,y,!0):(new Date(y)>new Date(s(o))||E(a,y,!0),E(o,y,!0)),t.onRangeChange(s(a),s(o))}function c(y){return new Date(y)>=new Date(s(a))&&new Date(y)<=new Date(s(o))?"btn-soft btn-secondary":"btn-dash btn-secondary opacity-80"}function f(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function v(y){const w=new Date(y).getUTCHours();return w===12?"sun":w===20?"moon":w===8?"cloud":null}function g(){r().length!==0&&(E(a,r()[0],!0),E(o,r()[r().length-1],!0),t.onRangeChange(s(a),s(o)))}var p=$f(),m=R(p);ot(m,22,r,y=>y,(y,P)=>{var w=wf();w.__click=[yf,l,P];var x=u(w),k=u(x),A=d(x,2);{var C=X=>{pu(X,{size:16})},O=X=>{var j=B(),G=R(j);{var te=D=>{ou(D,{size:16})},ee=D=>{var I=B(),K=R(I);{var re=M=>{Kc(M,{size:16})};N(K,M=>{v(P)==="cloud"&&M(re)},!0)}h(D,I)};N(G,D=>{v(P)==="moon"?D(te):D(ee,!1)},!0)}h(X,j)};N(A,X=>{v(P)==="sun"?X(C):X(O,!1)})}W((X,j)=>{$e(w,1,`btn btn-sm ${X??""}`),L(k,j)},[()=>c(P),()=>f(P)]),h(y,w)});var _=d(m,2);{var S=y=>{var P=xf(),w=u(P);w.__click=[Sf,g],h(y,P)},b=y=>{var P=Pf();h(y,P)};N(_,y=>{s(i)?y(b,!1):y(S)})}h(e,p),V()}Ye(["click"]);var kf=$("<fieldset><legend><!> </legend> <!></fieldset>");function on(e,t){let r=Ae(t,"bgClass",3,"bg-base-100");var n=kf(),a=u(n),o=u(a);{var i=f=>{const v=J(()=>t.iconComponent);var g=B(),p=R(g);ir(p,()=>s(v),(m,_)=>{_(m,{size:16,class:"mr-1"})}),h(f,g)};N(o,f=>{t.iconComponent&&f(i)})}var l=d(o),c=d(a,2);ae(c,()=>t.children??F),W(()=>{$e(n,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),$e(a,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),L(l,` ${t.legend??""}`)}),h(e,n)}var Af=()=>Y.clearFilters(),Tf=e=>Y.setSearchQuery(e.currentTarget.value),Nf=()=>Y.setGroupBy("none"),Mf=()=>Y.setGroupBy("store"),Cf=()=>Y.setGroupBy("productType"),If=()=>Y.clearTypeAndTemperatureFilters(),Df=$('<button class="btn btn-xs btn-link text-accent flex items-center text-end" title="Effacer les filtres de types et température"><!> Réinitialiser les filtres</button>'),Rf=(e,t)=>Y.toggleProductType(t),Of=$("<button><!> </button>"),qf=()=>Y.toggleTemperature("frais"),jf=()=>Y.toggleTemperature("surgele"),Bf=$('<!> <div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div>',1),Lf=(e,t)=>Y.toggleStore(t),zf=$("<button> </button>"),Vf=()=>Y.clearStoreFilters(),Uf=$('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Wf=$('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Gf=(e,t)=>Y.toggleWho(t),Qf=$("<button> </button>"),Hf=()=>Y.clearWhoFilters(),Kf=$('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Jf=$('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Yf=$('<div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function Zf(e,t){z(t,!0);const r=J(()=>Y.filters),n=J(()=>Y.uniqueStores),a=J(()=>Y.uniqueWho),o=J(()=>Y.uniqueProductTypes);var i=Yf(),l=R(i),c=u(l),f=u(c);To(f,{class:"h-5 w-5"});var v=d(c,2);v.__click=[Af];var g=u(v);$t(g,{class:"h-4 w-4"});var p=d(l,2),m=u(p),_=d(u(m),2),S=u(_);hu(S,{class:"h-4 w-4"});var b=d(S,2);b.__input=[Tf];var y=d(m,2),P=d(u(y),2),w=u(P);w.__change=[Nf];var x=d(w,2);x.__change=[Mf];var k=d(x,2);k.__change=[Cf];var A=d(y,2);on(A,{legend:"Date incluses",bgClass:"bg-base-100",children:(ee,D)=>{Ef(ee,{get availableDates(){return Y.availableDates},get currentRange(){return Y.dateRange},onRangeChange:(I,K)=>Y.setDateRange(I,K)})},$$slots:{default:!0}});var C=d(A,2);{var O=ee=>{on(ee,{legend:"Types & Température",get iconComponent(){return mu},children:(D,I)=>{var K=Bf(),re=R(K);{var M=U=>{var me=Df();me.__click=[If];var q=u(me);Zc(q,{size:14}),h(U,me)};N(re,U=>{(s(r).selectedProductTypes.length>0||s(r).selectedTemperatures.length>0)&&U(M)})}var Q=d(re,2);ot(Q,20,()=>s(o),U=>U,(U,me)=>{const q=J(()=>ea(me));var le=Of();le.__click=[Rf,me];var Te=u(le);ir(Te,()=>s(q).icon,(Le,Be)=>{Be(Le,{class:"mr-1 h-5 w-5"})});var je=d(Te);W(Le=>{$e(le,1,`btn btn-sm ${Le??""}`),L(je,` ${s(q).displayName??""}`)},[()=>s(r).selectedProductTypes.length===0?"btn-soft btn-secondary":s(r).selectedProductTypes.includes(me)?"btn-secondary":"btn-dash btn-secondary"]),h(U,le)});var ie=d(Q,2),se=u(ie);se.__click=[qf];var he=u(se);No(he,{class:"h-5 w-5"});var _e=d(se,2);_e.__click=[jf];var Ee=u(_e);Mo(Ee,{class:"h-5 w-5"}),W((U,me)=>{$e(se,1,`btn btn-sm ${U??""}`),$e(_e,1,`btn btn-sm ${me??""}`)},[()=>s(r).selectedTemperatures.length===0?"btn-soft btn-success":s(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(r).selectedTemperatures.length===0?"btn-soft btn-info":s(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(D,K)},$$slots:{default:!0}})};N(C,ee=>{s(o).length>0&&ee(O)})}var X=d(C,2);{var j=ee=>{on(ee,{legend:"Magasins",get iconComponent(){return Xt},children:(D,I)=>{var K=Wf(),re=u(K);ot(re,16,()=>s(n),ie=>ie,(ie,se)=>{var he=zf();he.__click=[Lf,se];var _e=u(he);W(Ee=>{$e(he,1,`btn btn-xs ${Ee??""}`),L(_e,se)},[()=>s(r).selectedStores.length===0?"btn-soft btn-secondary":s(r).selectedStores.includes(se)?"btn-secondary":"btn-dash btn-secondary"]),h(ie,he)});var M=d(re,2);{var Q=ie=>{var se=Uf();se.__click=[Vf];var he=u(se);$t(he,{class:"h-3 w-3"}),h(ie,se)};N(M,ie=>{s(r).selectedStores.length>0&&ie(Q)})}h(D,K)},$$slots:{default:!0}})};N(X,ee=>{s(n).length>0&&ee(j)})}var G=d(X,2);{var te=ee=>{on(ee,{legend:"Qui",get iconComponent(){return nn},children:(D,I)=>{var K=Jf(),re=u(K);ot(re,16,()=>s(a),ie=>ie,(ie,se)=>{var he=Qf();he.__click=[Gf,se];var _e=u(he);W(Ee=>{$e(he,1,`btn btn-xs ${Ee??""}`),L(_e,se)},[()=>s(r).selectedWho.length===0?" btn-soft btn-secondary":s(r).selectedWho.includes(se)?" btn-secondary":"btn-dash btn-secondary"]),h(ie,he)});var M=d(re,2);{var Q=ie=>{var se=Kf();se.__click=[Hf];var he=u(se);$t(he,{class:"h-3 w-3"}),h(ie,se)};N(M,ie=>{s(r).selectedWho.length>0&&ie(Q)})}h(D,K)},$$slots:{default:!0}})};N(G,ee=>{s(a).length>0&&ee(te)})}W(()=>{ml(b,s(r).searchQuery),Rn(w,s(r).groupBy==="none"),Rn(x,s(r).groupBy==="store"),Rn(k,s(r).groupBy==="productType")}),h(e,i),V()}Ye(["click","input","change"]);Ye(["click"]);var Xf=$('<div class="tooltip text-xs font-normal"><!></div>');function Ff(e,t){let r=Ae(t,"iconSize",3,24),n=t.icon||void 0;var a=Xf(),o=u(a);{var i=l=>{n(l,{get size(){return r()},class:`align-top
`})};N(o,l=>{t.icon&&l(i)})}W(()=>Bt(a,"data-tip",t.tip)),h(e,a)}var ev=$('<div class="text-neutral-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),tv=(e,t,r)=>t.onOpenGroupEditModal("store",r().map(n=>n.$id),r()),rv=(e,t,r)=>t.onOpenGroupEditModal("who",r().map(n=>n.$id),r()),nv=(e,t,r)=>t.onOpenGroupPurchaseModal(r()),av=$(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),sv=$('<div class="bg-primary @container sticky top-0 z-10 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 @md:min-w-48"><!></div> <div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div></div>'),ov=(e,t,r)=>t.onOpenModal(s(r).$id,"recettes"),iv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"recettes"),lv=$('<div class="text-base-content/60 text-sm font-normal"> </div>'),cv=$('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),uv=$('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),dv=$('<div class="flex items-center gap-1 text-blue-600" title="Synchronisation en cours..."><!></div>'),fv=$('<div class="tooltip"><div class="badge badge-outline badge-xs hover:badge-primary"> </div></div>'),vv=$('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),hv=$('<div class="text-base-content/60 mt-2"><div class="flex flex-wrap gap-1"><div class="mb-1 text-xs font-medium">Dates :</div> <!></div></div>'),pv=(e,t,r)=>t.onOpenModal(s(r).$id,"magasins"),mv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"magasins"),gv=$('<div class="ml-1"><!></div>'),_v=$('<div class="ml-1"> </div> <!>',1),bv=$('<div class="ml-1 text-sm font-medium">?</div>'),yv=(e,t,r)=>t.onOpenModal(s(r).$id,"volontaires"),wv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"volontaires"),Sv=$('<span class="text-base-content/50 text-xs"> </span>'),xv=$('<div class="ml-1 flex gap-1"> <!></div>'),Pv=$('<div class="ml-1 text-sm font-medium">?</div>'),$v=(e,t,r)=>t.onOpenModal(s(r).$id,"recettes"),Ev=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"recettes"),kv=$('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),Av=(e,t,r)=>{e.stopPropagation(),t.onQuickValidation(s(r))},Tv=$('<button class="btn btn-sm btn-soft btn-warning hover:bg-success/70 hover:border-success/70 ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M.625 0a.625.625 0 1 0 0 1.25h1.818l.205 1.94l.644 6.105a1.626 1.626 0 0 0 1.619 1.455h6.208c.746 0 1.397-.506 1.579-1.23l1.253-5a1.626 1.626 0 0 0-1.579-2.02h-8.54L3.627.56A.625.625 0 0 0 3.006 0zm3.91 9.164L3.964 3.75h8.408c.247 0 .425.23.366.466l-1.253 5a.38.38 0 0 1-.366.284H4.911a.376.376 0 0 1-.376-.336m5.72-3.134a.75.75 0 0 0-1.129-.988l-1.48 1.69l-.526-.395a.75.75 0 1 0-.9 1.2l1.083.813a.75.75 0 0 0 1.015-.106zm1.816 6.845a1.125 1.125 0 1 0-2.25 0a1.125 1.125 0 0 0 2.25 0M4.446 11.75a1.125 1.125 0 1 1 0 2.25a1.125 1.125 0 0 1 0-2.25" clip-rule="evenodd"></path></svg> <span class="text-xs"> </span> <!></button>'),Nv=(e,t,r)=>t.onOpenModal(s(r).$id,"achats"),Mv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(s(r).$id,"achats"),Cv=$('<div><!> <span class="text-sm font-medium"> </span></div>'),Iv=$('<span class="text-base-content/50 text-xs italic">aucun</span>'),Dv=$('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div></div> <div class="flex flex-wrap gap-3"><div class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex gap-4"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins:</div> <div class="flex items-center gap-4"><div> </div> <!></div></div> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative min-w-[200px] flex-1 cursor-pointer rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex items-center justify-between gap-2"><div class="flex flex-col gap-0"><div class="text-base-content/80 flex items-center justify-between gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div class="text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity group-hover:opacity-100 sm:opacity-0">ajouter un achat</div></div> <div class="flex flex-wrap gap-1.5"><!> <!></div></div></div></div></div></div>'),Rv=$('<!> <div class="space-y-1"></div>',1),Ov=$('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),qv=$('<div class="space-y-4 rounded-lg"></div> <!>',1);function jv(e,t){z(t,!0);const r={Package:rn,MessageCircleQuestionMark:su,ShoppingCart:Jt,Clock:Hc,CircleCheck:Wc,CircleX:Gc,ClipboardCheck:Qc,PackageCheck:iu},n=J(()=>Y.groupedFilteredProducts),a=J(()=>Y.filters);var o=qv(),i=R(o);ot(i,21,()=>Object.entries(s(n)),([f,v])=>f,(f,v)=>{var g=J(()=>os(s(v),2));let p=()=>s(g)[0],m=()=>s(g)[1];var _=Rv(),S=R(_);{var b=P=>{const w=J(()=>ea(p()));var x=sv(),k=u(x),A=u(k);{var C=M=>{var Q=yt();W(()=>L(Q,`🏪 ${p()??""} (${m().length??""})`)),h(M,Q)},O=M=>{var Q=B(),ie=R(Q);{var se=_e=>{var Ee=ev(),U=u(Ee);ir(U,()=>s(w).icon,(je,Le)=>{Le(je,{class:"h-4 w-4"})});var me=d(U,2),q=u(me),le=d(me,2),Te=u(le);W(()=>{L(q,s(w).displayName),L(Te,`(${m().length??""})`)}),h(_e,Ee)},he=_e=>{var Ee=yt();W(()=>L(Ee,`📦 ${p()??""} (${m().length??""})`)),h(_e,Ee)};N(ie,_e=>{s(a).groupBy==="productType"?_e(se):_e(he,!1)},!0)}h(M,Q)};N(A,M=>{s(a).groupBy==="store"?M(C):M(O,!1)})}var X=d(k,2),j=u(X);j.__click=[tv,t,m];var G=u(j);Xt(G,{size:16});var te=d(G,4);Xn(te,{size:16});var ee=d(j,2);ee.__click=[rv,t,m];var D=u(ee);Fn(D,{size:16});var I=d(D,4);Xn(I,{size:16});var K=d(ee,2);{var re=M=>{var Q=av();Q.__click=[nv,t,m];var ie=u(Q);Jt(ie,{size:16});var se=d(ie,4);Za(se,{size:16}),h(M,Q)};N(K,M=>{m().some(Q=>Q.displayMissingQuantity!=="✅ Complet")&&M(re)})}h(P,x)};N(S,P=>{p()!==""&&P(b)})}var y=d(S,2);ot(y,21,()=>m()||[],P=>P.$id,(P,w)=>{const x=J(()=>Y.productsStatsByDateRange.get(s(w).$id)||{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedAvailableQuantities:"Équilibré",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map}),k=J(()=>ea(s(w).productType)),A=J(()=>Qu(s(w).purchases||[]));var C=Dv(),O=u(C),X=u(O),j=u(X);j.__click=[ov,t,w],j.__keydown=[iv,t,w];var G=u(j),te=u(G);ir(te,()=>s(k).icon,(Z,ce)=>{ce(Z,{class:"text-base-content/80 h-4 w-4"})});var ee=d(te),D=d(ee);{var I=Z=>{var ce=lv(),ke=u(ce);W(()=>L(ke,`Ancien: ${s(w).previousNames[0]??""}`)),h(Z,ce)};N(D,Z=>{s(w).previousNames&&s(w).previousNames.length>0&&Z(I)})}var K=d(G,2),re=u(K);{var M=Z=>{var ce=cv(),ke=u(ce);No(ke,{class:"text-success h-4 w-4"}),h(Z,ce)};N(re,Z=>{s(w).pFrais&&Z(M)})}var Q=d(re,2);{var ie=Z=>{var ce=uv(),ke=u(ce);Mo(ke,{class:"text-info h-4 w-4"}),h(Z,ce)};N(Q,Z=>{s(w).pSurgel&&Z(ie)})}var se=d(K,2);{var he=Z=>{var ce=dv(),ke=u(ce);ru(ke,{class:"h-4 w-4 animate-spin"}),h(Z,ce)};N(se,Z=>{s(w).status==="isSyncing"&&Z(he)})}var _e=d(se,2);{var Ee=Z=>{var ce=hv(),ke=u(ce),We=d(u(ke),2);ot(We,16,()=>s(x).concernedDates,Ge=>Ge,(Ge,Me)=>{const Qe=J(()=>s(x).recipesByDate.get(Me)||[]);var Re=B(),wt=R(Re);{var gr=mt=>{var St=fv(),Rt=u(St),Wt=u(Rt);W((er,br)=>{Bt(St,"data-tip",er),L(Wt,br)},[()=>s(Qe).map(er=>er.r).join(", "),()=>new Date(Me).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),h(mt,St)},_r=mt=>{var St=vv(),Rt=u(St);W(Wt=>L(Rt,Wt),[()=>new Date(Me).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),h(mt,St)};N(wt,mt=>{s(Qe).length>0?mt(gr):mt(_r,!1)})}h(Ge,Re)}),h(Z,ce)};N(_e,Z=>{s(x).concernedDates.length>0&&Z(Ee)})}var U=d(j,2),me=u(U);me.__click=[pv,t,w],me.__keydown=[mv,t,w];var q=u(me);Xt(q,{size:18});var le=d(q,2);{var Te=Z=>{var ce=_v(),ke=R(ce),We=u(ke),Ge=d(ke,2);{var Me=Qe=>{var Re=gv(),wt=u(Re);Ff(wt,{get tip(){return s(w).storeInfo.storeComment},get icon(){return au},iconSize:14}),h(Qe,Re)};N(Ge,Qe=>{s(w).storeInfo?.storeComment&&Qe(Me)})}W(()=>L(We,s(w).storeInfo.storeName)),h(Z,ce)},je=Z=>{var ce=bv();h(Z,ce)};N(le,Z=>{s(w).storeInfo?.storeName?Z(Te):Z(je,!1)})}var Le=d(me,2);Le.__click=[yv,t,w],Le.__keydown=[wv,t,w];var Be=u(Le);Fn(Be,{size:18});var Ze=d(Be,2);{var ge=Z=>{var ce=xv(),ke=u(ce),We=d(ke);{var Ge=Me=>{var Qe=Sv(),Re=u(Qe);W(()=>L(Re,`+${s(w).who.length-2}`)),h(Me,Qe)};N(We,Me=>{s(w).who.length>2&&Me(Ge)})}W(Me=>L(ke,`${Me??""} `),[()=>s(w).who.slice(0,2).map(Me=>Me.slice(0,3)).join(" | ")]),h(Z,ce)},Pe=Z=>{var ce=Pv();h(Z,ce)};N(Ze,Z=>{s(w).who&&s(w).who.length>0?Z(ge):Z(Pe,!1)})}var dt=d(X,2),oe=u(dt);oe.__click=[$v,t,w],oe.__keydown=[Ev,t,w];var Ve=u(oe),ne=u(Ve),be=u(ne);tu(be,{class:"h-4 w-4"});var Ke=d(ne,2),pe=u(Ke),lt=u(pe),Ie=d(pe,2);{var Fe=Z=>{var ce=kv(),ke=u(ce),We=u(ke),Ge=d(We);ma(Ge,{class:"h-3 w-3"});var Me=d(ke,2),Qe=u(Me),Re=d(Qe);gu(Re,{class:"h-3 w-3"}),W(()=>{L(We,`${s(x).nbRecipes??""} `),L(Qe,`${s(x).totalAssiettes??""} `)}),h(Z,ce)};N(Ie,Z=>{(s(x).nbRecipes||s(x).totalAssiettes)&&Z(Fe)})}var Dt=d(Ve,2);{var ve=Z=>{var ce=Tv();ce.__click=[Av,t,w];var ke=d(u(ce),2),We=u(ke),Ge=d(ke,2);{var Me=Re=>{Vc(Re,{size:18})},Qe=Re=>{Uc(Re,{size:18})};N(Ge,Re=>{Fr.isMobile?Re(Me):Re(Qe,!1)})}W(()=>{Bt(ce,"title",`Acheter le manquant (${s(x).formattedAvailableQuantities??""})`),L(We,s(x).formattedAvailableQuantities)}),h(Z,ce)},we=Z=>{Za(Z,{size:24,class:"text-success"})};N(Dt,Z=>{s(x).hasMissing?Z(ve):Z(we,!1)})}var ye=d(oe,2);ye.__click=[Nv,t,w],ye.__keydown=[Mv,t,w];var ze=u(ye),Ue=u(ze),pt=u(Ue),kt=u(pt);Jt(kt,{class:"h-4 w-4"});var et=d(Ue,2),ft=u(et);ot(ft,17,()=>s(A),Z=>Z.status,(Z,ce)=>{const ke=J(()=>r[s(ce).icon]);var We=Cv(),Ge=u(We);ir(Ge,()=>s(ke),(Re,wt)=>{wt(Re,{class:"h-4 w-4"})});var Me=d(Ge,2),Qe=u(Me);W(Re=>{$e(We,1,`badge badge-outline flex items-center gap-1 ${s(ce).badgeClass??""}`),L(Qe,Re)},[()=>An(s(ce).quantity,s(ce).unit)]),h(Z,We)});var Xe=d(ft,2);{var at=Z=>{var ce=Iv();h(Z,ce)};N(Xe,Z=>{s(A).length===0&&Z(at)})}W(()=>{$e(C,1,`card bg-base-100 border-base-300 ${s(w).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),L(ee,`${s(w).productName??""} `),$e(me,1,`btn btn-soft btn-sm group relative ${s(w).storeInfo?.storeName?"btn-success":""}`),$e(Le,1,`btn btn-sm btn-soft group relative ${s(w).who?.length>0?"btn-success":""}`),$e(pe,1,`font-bold ${s(x).hasMissing?"text-error":"text-success"}`),L(lt,s(x).formattedQuantities)}),h(P,C)}),h(f,_)});var l=d(i,2);{var c=f=>{var v=Ov();h(f,v)};N(l,f=>{Object.values(s(n)).flat().length===0&&f(c)})}h(e,o),V()}Ye(["click","keydown"]);async function Bv(e,t,r,n,a,o,i,l,c){if(!(!s(t)||s(r))){E(n,null),E(a,null);try{const f=s(o).map(m=>m.id),v=i.products.filter(m=>f.includes(m.$id));Y.setSyncStatus(f,!0),i.onClose();const g={storeName:s(l).trim(),storeComment:s(c).trim()},p=await Eo(f,v,g);if(E(a,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(f){const v=f instanceof Error?f.message:"Erreur inconnue";E(n,v,!0),console.error("[StoreEditModal] Erreur mise à jour:",f),Y.clearSyncStatus()}finally{E(r,!1)}}}function ts(e,t,r){s(t)||r.onClose()}var Lv=$('<div class="alert alert-error mb-4"><!> <span> </span></div>'),zv=(e,t)=>E(t,"empty"),Vv=(e,t)=>E(t,"all"),Uv=$('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Wv=$("<!> ",1),Gv=$('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Qv(e,t){z(t,!0);let r=H(!1),n=H(null),a=H(null),o=H(Ne(t.products.length>0&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"")),i=H(Ne(t.products.length>0&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"")),l=H(Ne({})),c=H("empty");pr(()=>{const q={};t.products.forEach(le=>{t.productIds.includes(le.$id)&&(s(c)==="empty"?q[le.$id]=!le.storeInfo||!le.storeInfo.storeName:q[le.$id]=!0)}),E(l,q,!0)});const f=J(()=>t.products.map(q=>({id:q.$id,label:q.productName,title:q.productName,selected:s(l)[q.$id]}))),v=J(()=>s(f).filter(q=>q.selected)),g=J(()=>`Attribuer un magasin (${s(v).length} produits sélectionnés)`),p=J(()=>s(v).length===0?!1:s(o).trim().length>0);function m(q){s(l)[q]=!s(l)[q]}var _=Gv(),S=u(_),b=u(S),y=u(b),P=u(y),w=d(y,2);w.__click=[ts,r,t];var x=u(w);$t(x,{class:"h-4 w-4"});var k=d(b,2),A=u(k);{var C=q=>{var le=Lv(),Te=u(le);kn(Te,{class:"h-4 w-4"});var je=d(Te,2),Le=u(je);W(()=>L(Le,s(n))),h(q,le)};N(A,q=>{s(n)&&q(C)})}var O=d(A,2),X=u(O),j=u(X),G=u(j);Xt(G,{class:"h-4 w-4 opacity-50"});var te=d(G,2),ee=d(j,2);{let q=J(()=>Y.uniqueStores.map(le=>({id:le,label:le,disabled:le===s(o)})));Do(ee,{get suggestions(){return s(q)},onSuggestionClick:le=>{E(o,le.label,!0)},title:"Suggestions de magasins :"})}var D=d(X,2),I=u(D),K=d(O,2),re=d(u(K),2),M=u(re);M.__click=[zv,c];var Q=d(M,2);Q.__click=[Vv,c];var ie=d(re,2);en(ie,{get items(){return s(f)},onToggleItem:m,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var se=d(k,2),he=u(se);he.__click=[ts,r,t];var _e=d(he,2);_e.__click=[Bv,p,r,n,a,v,t,o,i];var Ee=u(_e);{var U=q=>{var le=Uv();h(q,le)},me=q=>{var le=Wv(),Te=R(le);Xr(Te,{class:"h-4 w-4"});var je=d(Te);W(()=>L(je,` Appliquer à ${s(v).length??""} produit(s)`)),h(q,le)};N(Ee,q=>{s(r)?q(U):q(me,!1)})}W(()=>{L(P,s(g)),w.disabled=s(r),te.disabled=s(r),I.disabled=s(r),$e(M,1,`tab ${s(c)==="empty"?"tab-active":""}`),$e(Q,1,`tab ${s(c)==="all"?"tab-active":""}`),he.disabled=s(r),_e.disabled=s(r)||!s(p)}),Ce(te,()=>s(o),q=>E(o,q)),Ce(I,()=>s(i),q=>E(i,q)),h(e,_),V()}Ye(["click"]);async function Hv(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){E(n,null),E(a,null);try{const c=s(o).map(g=>g.id),f=i.products.filter(g=>c.includes(g.$id));Y.setSyncStatus(c,!0),i.onClose();const v=await ko(c,f,s(l),"replace");if(E(a,v,!0),v.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${v.updatedCount} produits modifiés`),i.onSuccess?.(v);else throw new Error(v.error||"Erreur lors de la mise à jour")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";E(n,f,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),Y.clearSyncStatus()}finally{E(r,!1)}}}function rs(e,t,r){s(t)||r.onClose()}var Kv=$('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Jv=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},Yv=(e,t)=>E(t,"empty"),Zv=(e,t)=>E(t,"all"),Xv=$('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Fv=$("<!> ",1),eh=$('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function th(e,t){z(t,!0);let r=H(!1),n=H(null),a=H(null),o=H(Ne([])),i=H(""),l=H("empty"),c=H(Ne({}));pr(()=>{const ge={};t.products.forEach(Pe=>{t.productIds.includes(Pe.$id)&&(s(l)==="empty"?ge[Pe.$id]=!Pe.who||Pe.who.length===0:ge[Pe.$id]=!0)}),E(c,ge,!0)});const f=J(()=>t.products.map(ge=>({id:ge.$id,label:ge.productName,title:ge.productName,selected:s(c)[ge.$id]}))),v=J(()=>s(f).filter(ge=>ge.selected)),g=J(()=>{const ge=new Set([...Y.uniqueWho,...s(o)]);return Array.from(ge).map(Pe=>({id:Pe,label:Pe,selected:s(o).includes(Pe)}))}),p=J(()=>`Gérer les volontaires (${s(v).length} produits sélectionnés)`),m=J(()=>s(v).length===0?!1:s(o).length>0);function _(ge){const Pe=ge.trim();Pe&&!s(o).includes(Pe)&&E(o,[...s(o),Pe],!0)}function S(ge){E(o,s(o).filter(Pe=>Pe!==ge),!0)}function b(ge){s(o).includes(ge)?S(ge):_(ge)}function y(){s(i).trim()&&(_(s(i)),E(i,""))}function P(ge){s(c)[ge]=!s(c)[ge]}var w=eh(),x=u(w),k=u(x),A=u(k),C=u(A),O=d(A,2);O.__click=[rs,r,t];var X=u(O);$t(X,{class:"h-4 w-4"});var j=d(k,2),G=u(j);{var te=ge=>{var Pe=Kv(),dt=u(Pe);kn(dt,{class:"h-4 w-4"});var oe=d(dt,2),Ve=u(oe);W(()=>L(Ve,s(n))),h(ge,Pe)};N(G,ge=>{s(n)&&ge(te)})}var ee=d(G,2),D=u(ee),I=u(D),K=u(I),re=u(K);nn(re,{class:"h-4 w-4 opacity-50"});var M=d(re,2);M.__keydown=[Jv,y];var Q=d(K,2);Q.__click=y;var ie=u(Q);Co(ie,{size:16});var se=d(I,2),he=d(u(se),2);en(he,{get items(){return s(g)},onToggleItem:b,showIcon:!0});var _e=d(ee,2),Ee=d(u(_e),2),U=u(Ee);U.__click=[Yv,l];var me=d(U,2);me.__click=[Zv,l];var q=d(Ee,2);en(q,{get items(){return s(f)},onToggleItem:P,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var le=d(j,2),Te=u(le);Te.__click=[rs,r,t];var je=d(Te,2);je.__click=[Hv,m,r,n,a,v,t,o];var Le=u(je);{var Be=ge=>{var Pe=Xv();h(ge,Pe)},Ze=ge=>{var Pe=Fv(),dt=R(Pe);Xr(dt,{class:"h-4 w-4"});var oe=d(dt);W(()=>L(oe,` Appliquer à ${s(v).length??""} produit(s)`)),h(ge,Pe)};N(Le,ge=>{s(r)?ge(Be):ge(Ze,!1)})}W(ge=>{L(C,s(p)),O.disabled=s(r),M.disabled=s(r),Q.disabled=ge,$e(U,1,`tab ${s(l)==="empty"?"tab-active":""}`),$e(me,1,`tab ${s(l)==="all"?"tab-active":""}`),Te.disabled=s(r),je.disabled=s(r)||!s(m)},[()=>s(r)||!s(i).trim()]),Ce(M,()=>s(i),ge=>E(i,ge)),h(e,w),V()}Ye(["click","keydown"]);var rh=$("<div><!></div>"),nh=$('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function ah(e,t){z(t,!0);let r=H(!1),n=Ae(t,"width",3,"80"),a=Ae(t,"bgClass",3,"bg-base-300");const o=J(()=>"w-"+n());var i=B(),l=R(i);{var c=v=>{var g=rh(),p=u(g);ae(p,()=>t.children??F),W(()=>$e(g,1,`${a()??""} ${(s(o)?s(o):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),h(v,g)},f=v=>{var g=nh(),p=R(g),m=u(p),_=d(m,2),S=d(u(_),2),b=u(S);ae(b,()=>t.children??F);var y=d(p,2),P=u(y),w=u(P);To(w,{class:"h-6 w-6"}),bl(m,()=>s(r),x=>E(r,x)),h(v,g)};N(l,v=>{Fr.isMobile?v(f,!1):v(c)})}h(e,i),V()}function sh(){}var oh=$('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <!> <!></div> <!> <!> <!> <!>',1);function ih(e,t){z(t,!0);const r="100",a="ml"+"-"+r;console.log("PANEL_SIDE_WIDTH →",a);const o=J(()=>Y.stats);let i=H(null),l=H("recettes"),c=H(!1),f=H(!1),v=H(Ne([])),g=H(Ne([])),p=H(!1),m=H(Ne([]));function _(U,me="recettes"){E(l,me,!0),E(i,U,!0)}function S(){E(i,null)}function b(U,me,q){E(v,me,!0),E(g,q,!0),E(U==="who"?c:f,!0)}function y(U){(!U||U==="who")&&E(c,!1),(!U||U==="store")&&E(f,!1),E(v,[],!0),E(g,[],!0)}function P(U){console.log(`[ProductsTable] Modification groupée réussie: ${U.updatedCount} produits`)}function w(U){const me=U.filter(q=>q.displayMissingQuantity!=="✅ Complet"&&q.missingQuantityArray&&q.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${U.length} produits reçus → ${me.length} produits avec quantités manquantes`),E(m,me,!0),E(p,!0)}function x(){E(p,!1),E(m,[],!0)}function k(){console.log("[ProductsTable] Achat groupé créé avec succès"),x()}async function A(U){try{if(!Y.currentMainId)throw new Error("mainId non disponible");const me=U.missingQuantityArray||[];if(me.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let q=U.$id;U.isSynced||(console.log(`[ProductsTable] Produit ${U.$id} local, création pour validation rapide...`),q=(await Gt(U.$id,{},Te=>Y.getEnrichedProductById(Te))).$id,console.log(`[ProductsTable] Produit sync créé: ${q}`)),await Ao(Y.currentMainId,q,me,{store:U.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${U.productName}`)}catch(me){console.error("[ProductsTable] Erreur validation rapide:",me),alert("Erreur lors de la validation rapide: "+me.message)}}var C=oh(),O=R(C),X=u(O),j=u(X),G=u(j);Fc(G,{class:"mr-1 h-4 w-4"});var te=d(G),ee=d(j,2);ee.__click=[sh];var D=u(ee);uu(D,{class:"mr-1 h-4 w-4"});var I=d(X,2);ah(I,{width:r,children:(U,me)=>{Zf(U,{})},$$slots:{default:!0}});var K=d(I,2);jv(K,{onOpenModal:_,onOpenGroupEditModal:b,onOpenGroupPurchaseModal:w,onQuickValidation:A});var re=d(O,2);{var M=U=>{bf(U,{get productId(){return s(i)},get initialTab(){return s(l)},onClose:S})};N(re,U=>{s(i)&&U(M)})}var Q=d(re,2);{var ie=U=>{th(U,{get productIds(){return s(v)},get products(){return s(g)},onClose:()=>y("who"),onSuccess:P})};N(Q,U=>{s(c)&&U(ie)})}var se=d(Q,2);{var he=U=>{Qv(U,{get productIds(){return s(v)},get products(){return s(g)},onClose:()=>y("store"),onSuccess:P})};N(se,U=>{s(f)&&U(he)})}var _e=d(se,2);{var Ee=U=>{Wu(U,{get products(){return s(m)},onClose:x,onSuccess:k})};N(_e,U=>{s(p)&&U(Ee)})}W(()=>{$e(O,1,`space-y-6 ${Fr.isMobile?"":"ml-100"}`),L(te,` ${s(o).total??""}`)}),h(e,C),V()}Ye(["click"]);yi();var lh=$('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function ch(e){var t=lh();h(e,t)}var uh=$('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function dh(e,t){var r=uh(),n=d(u(r),2),a=d(u(n),2),o=u(a);W(()=>L(o,t.message)),h(e,r)}var fh=$('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function vh(e,t){var r=fh(),n=u(r),a=u(n);kn(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(a,2),i=d(u(o),2),l=u(i);W(()=>L(l,t.message||"Erreur inconnue")),h(e,r)}var hh=$('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),ph=$('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),mh=$('<div class="text-base-content/60"> </div>'),gh=$('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),_h=$('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),bh=$('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),yh=$('<div class="bg-base-200 min-h-screen"><header class="bg-base-300 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function wh(e,t){z(t,!0);let r,n=H(null),a=H(!0),o=H(!1);Ys(async()=>{r=Ic();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await Y.initialize(r)}catch(M){const Q=M instanceof Error?M.message:"Erreur lors de l'initialisation";E(n,Q,!0),console.error("[App] Erreur initialisation:",M)}finally{E(a,!1)}}),xl(()=>{Y.destroy()});async function i(){if(!(!r||s(o))){E(o,!0);try{await Y.forceReload(r)}catch(M){console.error("[App] Erreur lors du rechargement forcé:",M)}finally{E(o,!1)}}}const l=J(()=>s(n)||Y.error),c=J(()=>s(a)||Y.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=yh(),g=u(v),p=u(g),m=u(p),_=d(u(m),2),S=u(_);{var b=M=>{var Q=hh();h(M,Q)};N(S,M=>{Y.realtimeConnected&&M(b)})}var y=d(S,2);{var P=M=>{var Q=ph();h(M,Q)};N(y,M=>{Y.syncing&&M(P)})}var w=d(y,2);{var x=M=>{var Q=mh(),ie=u(Q);W(se=>L(ie,`Maj: ${se??""}`),[()=>new Date(Y.lastSync).toLocaleTimeString()]),h(M,Q)};N(w,M=>{Y.lastSync&&M(x)})}var k=d(w,2);{var A=M=>{var Q=gh();let ie;Q.__click=i;var se=u(Q);du(se,{class:"h-4 w-4"}),W(he=>{ie=$e(Q,1,"btn btn-outline btn-sm",null,ie,he),Q.disabled=s(o)||Y.loading},[()=>({loading:s(o)||Y.loading})]),h(M,Q)};N(k,M=>{s(n)||M(A)})}var C=d(k,2);{var O=M=>{var Q=_h(),ie=u(Q),se=u(ie);nu(se,{class:"mr-2 h-4 w-4"}),W(()=>Bt(ie,"href",f)),h(M,Q)};N(C,M=>{s(n)&&M(O)})}var X=d(g,2),j=u(X);{var G=M=>{vh(M,{get message(){return s(l)}})},te=M=>{var Q=B(),ie=R(Q);{var se=he=>{dh(he,{get message(){return s(l)}})};N(ie,he=>{s(l)&&he(se)},!0)}h(M,Q)};N(j,M=>{s(n)?M(G):M(te,!1)})}var ee=d(j,2);{var D=M=>{ch(M)};N(ee,M=>{s(c)&&M(D)})}var I=d(ee,2);{var K=M=>{ih(M,{})},re=M=>{var Q=B(),ie=R(Q);{var se=he=>{var _e=bh();h(he,_e)};N(ie,he=>{!Y.loading&&!s(n)&&he(se)},!0)}h(M,Q)};N(I,M=>{Y.enrichedProducts.length>0?M(K):M(re,!1)})}h(e,v),V()}Ye(["click"]);al(wh,{target:document.getElementById("app_products")});
