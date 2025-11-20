(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const Ss=!1;var Zr=Array.isArray,ni=Array.prototype.indexOf,cn=Array.from,Ja=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,si=Object.getOwnPropertyDescriptors,xs=Object.prototype,oi=Array.prototype,un=Object.getPrototypeOf,Rn=Object.isExtensible;function Br(t){return typeof t=="function"}const ue=()=>{};function ii(t){for(var e=0;e<t.length;e++)t[e]()}function Ps(){var t,e,r=new Promise((a,s)=>{t=a,e=s});return{promise:r,resolve:t,reject:e}}function ga(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const r=[];for(const a of t)if(r.push(a),r.length===e)break;return r}const gt=2,dn=4,vn=8,pr=16,Vt=32,gr=64,fn=128,Et=256,ma=512,lt=1024,St=2048,nr=4096,Dt=8192,mr=16384,hn=32768,_r=65536,qn=1<<17,li=1<<18,Cr=1<<19,ci=1<<20,Fa=1<<21,wa=1<<22,cr=1<<23,ur=Symbol("$state"),$s=Symbol("legacy props"),ui=Symbol(""),Wr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function ks(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function di(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function vi(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function fi(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function hi(t){throw new Error("https://svelte.dev/e/effect_orphan")}function pi(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function gi(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function mi(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function _i(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function bi(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function yi(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Sa=1,xa=2,Es=4,wi=8,Si=16,xi=1,Pi=2,$i=4,ki=8,Ei=16,Ai=1,Ti=2,tt=Symbol(),Mi="http://www.w3.org/1999/xhtml",Ni="http://www.w3.org/2000/svg",Di="@attach";function Ci(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ii(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Oi=!1;function As(t){return t===this.v}function Ts(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Ri(t,e){return t!==e}function Ms(t){return!Ts(t,this.v)}let Ir=!1,qi=!1;function ji(){Ir=!0}const Li=[];function Sr(t,e=!1,r=!1){return va(t,new Map,"",Li,null,r)}function va(t,e,r,a,s=null,i=!1){if(typeof t=="object"&&t!==null){var o=e.get(t);if(o!==void 0)return o;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(Zr(t)){var l=Array(t.length);e.set(t,l),s!==null&&e.set(s,l);for(var u=0;u<t.length;u+=1){var h=t[u];u in t&&(l[u]=va(h,e,r,a,null,i))}return l}if(un(t)===xs){l={},e.set(t,l),s!==null&&e.set(s,l);for(var v in t)l[v]=va(t[v],e,r,a,null,i);return l}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function"&&!i)return va(t.toJSON(),e,r,a,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}let Fe=null;function $r(t){Fe=t}function X(t,e=!1,r){Fe={p:Fe,c:null,e:null,s:t,x:null,l:Ir&&!e?{s:null,u:null,$:[]}:null}}function ee(t){var e=Fe,r=e.e;if(r!==null){e.e=null;for(var a of r)Ws(a)}return Fe=e.p,{}}function Or(){return!Ir||Fe!==null&&Fe.l===null}let or=[];function Ns(){var t=or;or=[],ii(t)}function fr(t){if(or.length===0&&!Qr){var e=or;queueMicrotask(()=>{e===or&&Ns()})}or.push(t)}function Bi(){for(;or.length>0;)Ns()}const zi=new WeakMap;function Ds(t){var e=Ce;if(e===null)return Ie.f|=cr,t;if((e.f&hn)===0){if((e.f&fn)===0)throw!e.parent&&t instanceof Error&&Cs(t),t;e.b.error(t)}else kr(t,e)}function kr(t,e){for(;e!==null;){if((e.f&fn)!==0)try{e.b.error(t);return}catch(r){t=r}e=e.parent}throw t instanceof Error&&Cs(t),t}function Cs(t){const e=zi.get(t);e&&(Ja(t,"message",{value:e.message}),Ja(t,"stack",{value:e.stack}))}const oa=new Set;let ze=null,fa=null,Ya=new Set,qt=[],Pa=null,Za=!1,Qr=!1;class kt{current=new Map;#e=new Map;#t=new Set;#s=0;#o=null;#d=[];#c=[];#u=[];#l=[];#v=[];#i=[];skipped_effects=new Set;process(e){qt=[],fa=null;var r=kt.apply(this);for(const i of e)this.#f(i);if(this.#s===0){this.#h();var a=this.#c,s=this.#u;this.#c=[],this.#u=[],this.#l=[],fa=this,ze=null,jn(a),jn(s),fa=null,this.#o?.resolve()}else this.#a(this.#c),this.#a(this.#u),this.#a(this.#l);r();for(const i of this.#d)Jr(i);this.#d=[]}#f(e){e.f^=lt;for(var r=e.first;r!==null;){var a=r.f,s=(a&(Vt|gr))!==0,i=s&&(a&lt)!==0,o=i||(a&Dt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=lt:(a&dn)!==0?this.#u.push(r):(a&lt)===0&&((a&wa)!==0&&r.b?.is_pending()?this.#d.push(r):Ta(r)&&((r.f&pr)!==0&&this.#l.push(r),Jr(r)));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#a(e){for(const r of e)((r.f&St)!==0?this.#v:this.#i).push(r),vt(r,lt);e.length=0}capture(e,r){this.#e.has(e)||this.#e.set(e,r),this.current.set(e,e.v)}activate(){ze=this}deactivate(){ze=null}flush(){if(qt.length>0){if(this.activate(),Is(),ze!==null&&ze!==this)return}else this.#s===0&&this.#h();this.deactivate();for(const e of Ya)if(Ya.delete(e),e(),ze!==null)break}#h(){for(const e of this.#t)e();if(this.#t.clear(),oa.size>1){this.#e.clear();let e=!0;for(const r of oa){if(r===this){e=!1;continue}for(const[a,s]of this.current){if(r.current.has(a))if(e)r.current.set(a,s);else continue;Os(a)}if(qt.length>0){ze=r;const a=kt.apply(r);for(const s of qt)r.#f(s);qt=[],a()}}ze=null}oa.delete(this)}increment(){this.#s+=1}decrement(){this.#s-=1;for(const e of this.#v)vt(e,St),hr(e);for(const e of this.#i)vt(e,nr),hr(e);this.flush()}add_callback(e){this.#t.add(e)}settled(){return(this.#o??=Ps()).promise}static ensure(){if(ze===null){const e=ze=new kt;oa.add(ze),Qr||kt.enqueue(()=>{ze===e&&e.flush()})}return ze}static enqueue(e){fr(e)}static apply(e){return ue}}function Ui(t){var e=Qr;Qr=!0;try{for(var r;;){if(Bi(),qt.length===0&&(ze?.flush(),qt.length===0))return Pa=null,r;Is()}}finally{Qr=e}}function Is(){var t=Pr;Za=!0;try{var e=0;for(Un(!0);qt.length>0;){var r=kt.ensure();if(e++>1e3){var a,s;Hi()}r.process(qt),er.clear()}}finally{Za=!1,Un(t),Pa=null}}function Hi(){try{pi()}catch(t){kr(t,Pa)}}let sr=null;function jn(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var a=t[r++];if((a.f&(mr|Dt))===0&&Ta(a)&&(sr=[],Jr(a),a.deps===null&&a.first===null&&a.nodes_start===null&&(a.teardown===null&&a.ac===null?Vs(a):a.fn=null),sr?.length>0)){er.clear();for(const s of sr)Jr(s);sr=[]}}sr=null}}function Os(t){if(t.reactions!==null)for(const e of t.reactions){const r=e.f;(r&gt)!==0?Os(e):(r&(wa|pr))!==0&&(vt(e,St),hr(e))}}function hr(t){for(var e=Pa=t;e.parent!==null;){e=e.parent;var r=e.f;if(Za&&e===Ce&&(r&pr)!==0)return;if((r&(gr|Vt))!==0){if((r&lt)===0)return;e.f^=lt}}qt.push(e)}function pn(t){let e=0,r=tr(0),a;return()=>{sl()&&(n(r),wn(()=>(e===0&&(a=Rr(()=>t(()=>jt(r)))),e+=1,()=>{fr(()=>{e-=1,e===0&&(a?.(),a=void 0,jt(r))})})))}}var Wi=_r|Cr|fn;function Qi(t,e,r){new Gi(t,e,r)}class Gi{parent;#e=!1;#t;#s=null;#o;#d;#c;#u=null;#l=null;#v=null;#i=null;#f=0;#a=0;#h=!1;#g=null;#_=()=>{this.#g&&Er(this.#g,this.#f)};#b=pn(()=>(this.#g=tr(this.#f),()=>{this.#g=null}));constructor(e,r,a){this.#t=e,this.#o=r,this.#d=a,this.parent=Ce.b,this.#e=!!this.#o.pending,this.#c=Ft(()=>{Ce.b=this;{try{this.#u=nt(()=>a(this.#t))}catch(s){this.error(s)}this.#a>0?this.#p():this.#e=!1}},Wi)}#n(){try{this.#u=nt(()=>this.#d(this.#t))}catch(e){this.error(e)}this.#e=!1}#y(){const e=this.#o.pending;e&&(this.#l=nt(()=>e(this.#t)),kt.enqueue(()=>{this.#u=this.#m(()=>(kt.ensure(),nt(()=>this.#d(this.#t)))),this.#a>0?this.#p():(Wt(this.#l,()=>{this.#l=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#o.pending}#m(e){var r=Ce,a=Ie,s=Fe;Lt(this.#c),pt(this.#c),$r(this.#c.ctx);try{return e()}catch(i){return Ds(i),null}finally{Lt(r),pt(a),$r(s)}}#p(){const e=this.#o.pending;this.#u!==null&&(this.#i=document.createDocumentFragment(),Vi(this.#u,this.#i)),this.#l===null&&(this.#l=nt(()=>e(this.#t)))}#S(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#S(e);return}this.#a+=e,this.#a===0&&(this.#e=!1,this.#l&&Wt(this.#l,()=>{this.#l=null}),this.#i&&(this.#t.before(this.#i),this.#i=null),fr(()=>{kt.ensure().flush()}))}update_pending_count(e){this.#S(e),this.#f+=e,Ya.add(this.#_)}get_effect_pending(){return this.#b(),n(this.#g)}error(e){var r=this.#o.onerror;let a=this.#o.failed;if(this.#h||!r&&!a)throw e;this.#u&&(st(this.#u),this.#u=null),this.#l&&(st(this.#l),this.#l=null),this.#v&&(st(this.#v),this.#v=null);var s=!1,i=!1;const o=()=>{if(s){Ii();return}s=!0,i&&yi(),kt.ensure(),this.#f=0,this.#v!==null&&Wt(this.#v,()=>{this.#v=null}),this.#e=this.has_pending_snippet(),this.#u=this.#m(()=>(this.#h=!1,nt(()=>this.#d(this.#t)))),this.#a>0?this.#p():this.#e=!1};var l=Ie;try{pt(null),i=!0,r?.(e,o),i=!1}catch(u){kr(u,this.#c&&this.#c.parent)}finally{pt(l)}a&&fr(()=>{this.#v=this.#m(()=>{this.#h=!0;try{return nt(()=>{a(this.#t,()=>e,()=>o)})}catch(u){return kr(u,this.#c.parent),null}finally{this.#h=!1}})})}}function Vi(t,e){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var s=r===a?null:Xr(r);e.append(r),r=s}}function Rs(t,e,r){const a=Or()?$a:gn;if(e.length===0){r(t.map(a));return}var s=ze,i=Ce,o=Ki();Promise.all(e.map(l=>Ji(l))).then(l=>{o();try{r([...t.map(a),...l])}catch(u){(i.f&mr)===0&&kr(u,i)}s?.deactivate(),qs()}).catch(l=>{kr(l,i)})}function Ki(){var t=Ce,e=Ie,r=Fe,a=ze;return function(){Lt(t),pt(e),$r(r),a?.activate()}}function qs(){Lt(null),pt(null),$r(null)}function $a(t){var e=gt|St,r=Ie!==null&&(Ie.f&gt)!==0?Ie:null;return Ce===null||r!==null&&(r.f&Et)!==0?e|=Et:Ce.f|=Cr,{ctx:Fe,deps:null,effects:null,equals:As,f:e,fn:t,reactions:null,rv:0,v:tt,wv:0,parent:r??Ce,ac:null}}function Ji(t,e){let r=Ce;r===null&&di();var a=r.b,s=void 0,i=tr(tt),o=!Ie,l=new Map;return il(()=>{var u=Ps();s=u.promise;try{Promise.resolve(t()).then(u.resolve,u.reject)}catch(m){u.reject(m)}var h=ze,v=a.is_pending();o&&(a.update_pending_count(1),v||(h.increment(),l.get(h)?.reject(Wr),l.set(h,u)));const g=(m,p=void 0)=>{v||h.activate(),p?p!==Wr&&(i.f|=cr,Er(i,p)):((i.f&cr)!==0&&(i.f^=cr),Er(i,m)),o&&(a.update_pending_count(-1),v||h.decrement()),qs()};u.promise.then(g,m=>g(null,m||"unknown"))}),bn(()=>{for(const u of l.values())u.reject(Wr)}),new Promise(u=>{function h(v){function g(){v===s?u(i):h(s)}v.then(g,g)}h(s)})}function Z(t){const e=$a(t);return Fs(e),e}function gn(t){const e=$a(t);return e.equals=Ms,e}function js(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)st(e[r])}}function Fi(t){for(var e=t.parent;e!==null;){if((e.f&gt)===0)return e;e=e.parent}return null}function mn(t){var e,r=Ce;Lt(Fi(t));try{js(t),e=eo(t)}finally{Lt(r)}return e}function Ls(t){var e=mn(t);if(t.equals(e)||(t.v=e,t.wv=Zs()),!br){var r=(Yt||(t.f&Et)!==0)&&t.deps!==null?nr:lt;vt(t,r)}}const er=new Map;function tr(t,e){var r={f:0,v:t,reactions:null,equals:As,rv:0,wv:0};return r}function H(t,e){const r=tr(t);return Fs(r),r}function Yi(t,e=!1,r=!0){const a=tr(t);return e||(a.equals=Ms),Ir&&r&&Fe!==null&&Fe.l!==null&&(Fe.l.s??=[]).push(a),a}function b(t,e,r=!1){Ie!==null&&(!Mt||(Ie.f&qn)!==0)&&Or()&&(Ie.f&(gt|pr|wa|qn))!==0&&!Qt?.includes(t)&&bi();let a=r?Re(e):e;return Er(t,a)}function Er(t,e){if(!t.equals(e)){var r=t.v;br?er.set(t,e):er.set(t,r),t.v=e;var a=kt.ensure();a.capture(t,r),(t.f&gt)!==0&&((t.f&St)!==0&&mn(t),vt(t,(t.f&Et)===0?lt:nr)),t.wv=Zs(),Bs(t,St),Or()&&Ce!==null&&(Ce.f&lt)!==0&&(Ce.f&(Vt|gr))===0&&(Pt===null?ul([t]):Pt.push(t))}return e}function jt(t){b(t,t.v+1)}function Bs(t,e){var r=t.reactions;if(r!==null)for(var a=Or(),s=r.length,i=0;i<s;i++){var o=r[i],l=o.f;if(!(!a&&o===Ce)){var u=(l&St)===0;u&&vt(o,e),(l&gt)!==0?Bs(o,nr):u&&((l&pr)!==0&&sr!==null&&sr.push(o),hr(o))}}}function Re(t){if(typeof t!="object"||t===null||ur in t)return t;const e=un(t);if(e!==xs&&e!==oi)return t;var r=new Map,a=Zr(t),s=H(0),i=Gt,o=l=>{if(Gt===i)return l();var u=Ie,h=Gt;pt(null),Wn(i);var v=l();return pt(u),Wn(h),v};return a&&r.set("length",H(t.length)),new Proxy(t,{defineProperty(l,u,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&mi();var v=r.get(u);return v===void 0?v=o(()=>{var g=H(h.value);return r.set(u,g),g}):b(v,h.value,!0),!0},deleteProperty(l,u){var h=r.get(u);if(h===void 0){if(u in l){const v=o(()=>H(tt));r.set(u,v),jt(s)}}else b(h,tt),jt(s);return!0},get(l,u,h){if(u===ur)return t;var v=r.get(u),g=u in l;if(v===void 0&&(!g||Xt(l,u)?.writable)&&(v=o(()=>{var p=Re(g?l[u]:tt),_=H(p);return _}),r.set(u,v)),v!==void 0){var m=n(v);return m===tt?void 0:m}return Reflect.get(l,u,h)},getOwnPropertyDescriptor(l,u){var h=Reflect.getOwnPropertyDescriptor(l,u);if(h&&"value"in h){var v=r.get(u);v&&(h.value=n(v))}else if(h===void 0){var g=r.get(u),m=g?.v;if(g!==void 0&&m!==tt)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return h},has(l,u){if(u===ur)return!0;var h=r.get(u),v=h!==void 0&&h.v!==tt||Reflect.has(l,u);if(h!==void 0||Ce!==null&&(!v||Xt(l,u)?.writable)){h===void 0&&(h=o(()=>{var m=v?Re(l[u]):tt,p=H(m);return p}),r.set(u,h));var g=n(h);if(g===tt)return!1}return v},set(l,u,h,v){var g=r.get(u),m=u in l;if(a&&u==="length")for(var p=h;p<g.v;p+=1){var _=r.get(p+"");_!==void 0?b(_,tt):p in l&&(_=o(()=>H(tt)),r.set(p+"",_))}if(g===void 0)(!m||Xt(l,u)?.writable)&&(g=o(()=>H(void 0)),b(g,Re(h)),r.set(u,g));else{m=g.v!==tt;var x=o(()=>Re(h));b(g,x)}var w=Reflect.getOwnPropertyDescriptor(l,u);if(w?.set&&w.set.call(v,h),!m){if(a&&typeof u=="string"){var $=r.get("length"),C=Number(u);Number.isInteger(C)&&C>=$.v&&b($,C+1)}jt(s)}return!0},ownKeys(l){n(s);var u=Reflect.ownKeys(l).filter(g=>{var m=r.get(g);return m===void 0||m.v!==tt});for(var[h,v]of r)v.v!==tt&&!(h in l)&&u.push(h);return u},setPrototypeOf(){_i()}})}function Ln(t){try{if(t!==null&&typeof t=="object"&&ur in t)return t[ur]}catch{}return t}function Zi(t,e){return Object.is(Ln(t),Ln(e))}var Bn,zs,Us,Hs;function Xi(){if(Bn===void 0){Bn=window,zs=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Us=Xt(e,"firstChild").get,Hs=Xt(e,"nextSibling").get,Rn(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Rn(r)&&(r.__t=void 0)}}function Kt(t=""){return document.createTextNode(t)}function Ar(t){return Us.call(t)}function Xr(t){return Hs.call(t)}function c(t,e){return Ar(t)}function R(t,e=!1){{var r=Ar(t);return r instanceof Comment&&r.data===""?Xr(r):r}}function d(t,e=1,r=!1){let a=t;for(;e--;)a=Xr(a);return a}function el(t){t.textContent=""}function ka(){return!1}function tl(t,e){if(e){const r=document.body;t.autofocus=!0,fr(()=>{document.activeElement===r&&t.focus()})}}let zn=!1;function rl(){zn||(zn=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function Ea(t){var e=Ie,r=Ce;pt(null),Lt(null);try{return t()}finally{pt(e),Lt(r)}}function _n(t,e,r,a=r){t.addEventListener(e,()=>Ea(r));const s=t.__on_r;s?t.__on_r=()=>{s(),a(!0)}:t.__on_r=()=>a(!0),rl()}function al(t){Ce===null&&Ie===null&&hi(),Ie!==null&&(Ie.f&Et)!==0&&Ce===null&&fi(),br&&vi()}function nl(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function Jt(t,e,r,a=!0){var s=Ce;s!==null&&(s.f&Dt)!==0&&(t|=Dt);var i={ctx:Fe,deps:null,nodes_start:null,nodes_end:null,f:t|St,first:null,fn:e,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Jr(i),i.f|=hn}catch(u){throw st(i),u}else e!==null&&hr(i);if(a){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Cr)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&nl(o,s),Ie!==null&&(Ie.f&gt)!==0&&(t&gr)===0)){var l=Ie;(l.effects??=[]).push(o)}}return i}function sl(){return Ie!==null&&!Mt}function bn(t){const e=Jt(vn,null,!1);return vt(e,lt),e.teardown=t,e}function It(t){al();var e=Ce.f,r=!Ie&&(e&Vt)!==0&&(e&hn)===0;if(r){var a=Fe;(a.e??=[]).push(t)}else return Ws(t)}function Ws(t){return Jt(dn|ci,t,!1)}function ol(t){kt.ensure();const e=Jt(gr|Cr,t,!0);return(r={})=>new Promise(a=>{r.outro?Wt(e,()=>{st(e),a(void 0)}):(st(e),a(void 0))})}function yn(t){return Jt(dn,t,!1)}function il(t){return Jt(wa|Cr,t,!0)}function wn(t,e=0){return Jt(vn|e,t,!0)}function O(t,e=[],r=[]){Rs(e,r,a=>{Jt(vn,()=>t(...a.map(n)),!0)})}function Ft(t,e=0){var r=Jt(pr|e,t,!0);return r}function nt(t,e=!0){return Jt(Vt|Cr,t,!0,e)}function Qs(t){var e=t.teardown;if(e!==null){const r=br,a=Ie;Hn(!0),pt(null);try{e.call(null)}finally{Hn(r),pt(a)}}}function Gs(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const s=r.ac;s!==null&&Ea(()=>{s.abort(Wr)});var a=r.next;(r.f&gr)!==0?r.parent=null:st(r,e),r=a}}function ll(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&Vt)===0&&st(e),e=r}}function st(t,e=!0){var r=!1;(e||(t.f&li)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(cl(t.nodes_start,t.nodes_end),r=!0),Gs(t,e&&!r),_a(t,0),vt(t,mr);var a=t.transitions;if(a!==null)for(const i of a)i.stop();Qs(t);var s=t.parent;s!==null&&s.first!==null&&Vs(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function cl(t,e){for(;t!==null;){var r=t===e?null:Xr(t);t.remove(),t=r}}function Vs(t){var e=t.parent,r=t.prev,a=t.next;r!==null&&(r.next=a),a!==null&&(a.prev=r),e!==null&&(e.first===t&&(e.first=a),e.last===t&&(e.last=r))}function Wt(t,e){var r=[];Sn(t,r,!0),Ks(r,()=>{st(t),e&&e()})}function Ks(t,e){var r=t.length;if(r>0){var a=()=>--r||e();for(var s of t)s.out(a)}else e()}function Sn(t,e,r){if((t.f&Dt)===0){if(t.f^=Dt,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&e.push(o);for(var a=t.first;a!==null;){var s=a.next,i=(a.f&_r)!==0||(a.f&Vt)!==0;Sn(a,e,i?r:!1),a=s}}}function Aa(t){Js(t,!0)}function Js(t,e){if((t.f&Dt)!==0){t.f^=Dt,(t.f&lt)===0&&(vt(t,St),hr(t));for(var r=t.first;r!==null;){var a=r.next,s=(r.f&_r)!==0||(r.f&Vt)!==0;Js(r,s?e:!1),r=a}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let Pr=!1;function Un(t){Pr=t}let br=!1;function Hn(t){br=t}let Ie=null,Mt=!1;function pt(t){Ie=t}let Ce=null;function Lt(t){Ce=t}let Qt=null;function Fs(t){Ie!==null&&(Qt===null?Qt=[t]:Qt.push(t))}let dt=null,wt=0,Pt=null;function ul(t){Pt=t}let Ys=1,Kr=0,Gt=Kr;function Wn(t){Gt=t}let Yt=!1;function Zs(){return++Ys}function Ta(t){var e=t.f;if((e&St)!==0)return!0;if((e&nr)!==0){var r=t.deps,a=(e&Et)!==0;if(r!==null){var s,i,o=(e&ma)!==0,l=a&&Ce!==null&&!Yt,u=r.length;if((o||l)&&(Ce===null||(Ce.f&mr)===0)){var h=t,v=h.parent;for(s=0;s<u;s++)i=r[s],(o||!i?.reactions?.includes(h))&&(i.reactions??=[]).push(h);o&&(h.f^=ma),l&&v!==null&&(v.f&Et)===0&&(h.f^=Et)}for(s=0;s<u;s++)if(i=r[s],Ta(i)&&Ls(i),i.wv>t.wv)return!0}(!a||Ce!==null&&!Yt)&&vt(t,lt)}return!1}function Xs(t,e,r=!0){var a=t.reactions;if(a!==null&&!Qt?.includes(t))for(var s=0;s<a.length;s++){var i=a[s];(i.f&gt)!==0?Xs(i,e,!1):e===i&&(r?vt(i,St):(i.f&lt)!==0&&vt(i,nr),hr(i))}}function eo(t){var e=dt,r=wt,a=Pt,s=Ie,i=Yt,o=Qt,l=Fe,u=Mt,h=Gt,v=t.f;dt=null,wt=0,Pt=null,Yt=(v&Et)!==0&&(Mt||!Pr||Ie===null),Ie=(v&(Vt|gr))===0?t:null,Qt=null,$r(t.ctx),Mt=!1,Gt=++Kr,t.ac!==null&&(Ea(()=>{t.ac.abort(Wr)}),t.ac=null);try{t.f|=Fa;var g=t.fn,m=g(),p=t.deps;if(dt!==null){var _;if(_a(t,wt),p!==null&&wt>0)for(p.length=wt+dt.length,_=0;_<dt.length;_++)p[wt+_]=dt[_];else t.deps=p=dt;if(!Yt||(v&gt)!==0&&t.reactions!==null)for(_=wt;_<p.length;_++)(p[_].reactions??=[]).push(t)}else p!==null&&wt<p.length&&(_a(t,wt),p.length=wt);if(Or()&&Pt!==null&&!Mt&&p!==null&&(t.f&(gt|nr|St))===0)for(_=0;_<Pt.length;_++)Xs(Pt[_],t);return s!==null&&s!==t&&(Kr++,Pt!==null&&(a===null?a=Pt:a.push(...Pt))),(t.f&cr)!==0&&(t.f^=cr),m}catch(x){return Ds(x)}finally{t.f^=Fa,dt=e,wt=r,Pt=a,Ie=s,Yt=i,Qt=o,$r(l),Mt=u,Gt=h}}function dl(t,e){let r=e.reactions;if(r!==null){var a=ni.call(r,t);if(a!==-1){var s=r.length-1;s===0?r=e.reactions=null:(r[a]=r[s],r.pop())}}r===null&&(e.f&gt)!==0&&(dt===null||!dt.includes(e))&&(vt(e,nr),(e.f&(Et|ma))===0&&(e.f^=ma),js(e),_a(e,0))}function _a(t,e){var r=t.deps;if(r!==null)for(var a=e;a<r.length;a++)dl(t,r[a])}function Jr(t){var e=t.f;if((e&mr)===0){vt(t,lt);var r=Ce,a=Pr;Ce=t,Pr=!0;try{(e&pr)!==0?ll(t):Gs(t),Qs(t);var s=eo(t);t.teardown=typeof s=="function"?s:null,t.wv=Ys;var i;Ss&&qi&&(t.f&St)!==0&&t.deps}finally{Pr=a,Ce=r}}}async function vl(){await Promise.resolve(),Ui()}function n(t){var e=t.f,r=(e&gt)!==0;if(Ie!==null&&!Mt){var a=Ce!==null&&(Ce.f&mr)!==0;if(!a&&!Qt?.includes(t)){var s=Ie.deps;if((Ie.f&Fa)!==0)t.rv<Kr&&(t.rv=Kr,dt===null&&s!==null&&s[wt]===t?wt++:dt===null?dt=[t]:(!Yt||!dt.includes(t))&&dt.push(t));else{(Ie.deps??=[]).push(t);var i=t.reactions;i===null?t.reactions=[Ie]:i.includes(Ie)||i.push(Ie)}}}else if(r&&t.deps===null&&t.effects===null){var o=t,l=o.parent;l!==null&&(l.f&Et)===0&&(o.f^=Et)}if(br){if(er.has(t))return er.get(t);if(r){o=t;var u=o.v;return((o.f&lt)===0&&o.reactions!==null||to(o))&&(u=mn(o)),er.set(o,u),u}}else r&&(o=t,Ta(o)&&Ls(o));if((t.f&cr)!==0)throw t.v;return t.v}function to(t){if(t.v===tt)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(er.has(e)||(e.f&gt)!==0&&to(e))return!0;return!1}function Rr(t){var e=Mt;try{return Mt=!0,t()}finally{Mt=e}}const fl=-7169;function vt(t,e){t.f=t.f&fl|e}function hl(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const pl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function gl(t){return pl.includes(t)}const ml={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function _l(t){return t=t.toLowerCase(),ml[t]??t}const bl=["touchstart","touchmove"];function yl(t){return bl.includes(t)}const ro=new Set,Xa=new Set;function xn(t,e,r,a={}){function s(i){if(a.capture||Hr.call(e,i),!i.cancelBubble)return Ea(()=>r?.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?fr(()=>{e.addEventListener(t,s,a)}):e.addEventListener(t,s,a),s}function en(t,e,r,a={}){var s=xn(e,t,r,a);return()=>{t.removeEventListener(e,s,a)}}function ha(t,e,r,a,s){var i={capture:a,passive:s},o=xn(t,e,r,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&bn(()=>{e.removeEventListener(t,o,i)})}function Ke(t){for(var e=0;e<t.length;e++)ro.add(t[e]);for(var r of Xa)r(t)}let Qn=null;function Hr(t){var e=this,r=e.ownerDocument,a=t.type,s=t.composedPath?.()||[],i=s[0]||t.target;Qn=t;var o=0,l=Qn===t&&t.__root;if(l){var u=s.indexOf(l);if(u!==-1&&(e===document||e===window)){t.__root=e;return}var h=s.indexOf(e);if(h===-1)return;u<=h&&(o=u)}if(i=s[o]||t.target,i!==e){Ja(t,"currentTarget",{configurable:!0,get(){return i||r}});var v=Ie,g=Ce;pt(null),Lt(null);try{for(var m,p=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var x=i["__"+a];if(x!=null&&(!i.disabled||t.target===i))if(Zr(x)){var[w,...$]=x;w.apply(i,[t,...$])}else x.call(i,t)}catch(C){m?p.push(C):m=C}if(t.cancelBubble||_===e||_===null)break;i=_}if(m){for(let C of p)queueMicrotask(()=>{throw C});throw m}}finally{t.__root=e,delete t.currentTarget,pt(v),Lt(g)}}}function ao(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function Tr(t,e){var r=Ce;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function y(t,e){var r=(e&Ai)!==0,a=(e&Ti)!==0,s,i=!t.startsWith("<!>");return()=>{s===void 0&&(s=ao(i?t:"<!>"+t),r||(s=Ar(s)));var o=a||zs?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=Ar(o),u=o.lastChild;Tr(l,u)}else Tr(o,o);return o}}function wl(t,e,r="svg"){var a=!t.startsWith("<!>"),s=`<${r}>${a?t:"<!>"+t}</${r}>`,i;return()=>{if(!i){var o=ao(s),l=Ar(o);i=Ar(l)}var u=i.cloneNode(!0);return Tr(u,u),u}}function Sl(t,e){return wl(t,e,"svg")}function At(t=""){{var e=Kt(t+"");return Tr(e,e),e}}function te(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Kt();return t.append(e,r),Tr(e,r),t}function f(t,e){t!==null&&t.before(e)}function I(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??=t.nodeValue)&&(t.__t=r,t.nodeValue=r+"")}function xl(t,e){return Pl(t,e)}const xr=new Map;function Pl(t,{target:e,anchor:r,props:a={},events:s,context:i,intro:o=!0}){Xi();var l=new Set,u=g=>{for(var m=0;m<g.length;m++){var p=g[m];if(!l.has(p)){l.add(p);var _=yl(p);e.addEventListener(p,Hr,{passive:_});var x=xr.get(p);x===void 0?(document.addEventListener(p,Hr,{passive:_}),xr.set(p,1)):xr.set(p,x+1)}}};u(cn(ro)),Xa.add(u);var h=void 0,v=ol(()=>{var g=r??e.appendChild(Kt());return Qi(g,{pending:()=>{}},m=>{if(i){X({});var p=Fe;p.c=i}s&&(a.$$events=s),h=t(m,a)||{},i&&ee()}),()=>{for(var m of l){e.removeEventListener(m,Hr);var p=xr.get(m);--p===0?(document.removeEventListener(m,Hr),xr.delete(m)):xr.set(m,p)}Xa.delete(u),g!==r&&g.parentNode?.removeChild(g)}});return $l.set(h,v),h}let $l=new WeakMap;function k(t,e,r=!1){var a=t,s=null,i=null,o=tt,l=r?_r:0,u=!1;const h=(p,_=!0)=>{u=!0,m(_,p)};var v=null;function g(){v!==null&&(v.lastChild.remove(),a.before(v),v=null);var p=o?s:i,_=o?i:s;p&&Aa(p),_&&Wt(_,()=>{o?i=null:s=null})}const m=(p,_)=>{if(o!==(o=p)){var x=ka(),w=a;if(x&&(v=document.createDocumentFragment(),v.append(w=Kt())),o?s??=_&&nt(()=>_(w)):i??=_&&nt(()=>_(w)),x){var $=ze,C=o?s:i,S=o?i:s;C&&$.skipped_effects.delete(C),S&&$.skipped_effects.add(S),$.add_callback(g)}else g()}};Ft(()=>{u=!1,e(h),u||m(null,null)},l)}function kl(t,e,r){var a=t,s=tt,i,o,l=null,u=Or()?Ri:Ts;function h(){i&&Wt(i),l!==null&&(l.lastChild.remove(),a.before(l),l=null),i=o}Ft(()=>{if(u(s,s=e())){var v=a,g=ka();g&&(l=document.createDocumentFragment(),l.append(v=Kt())),o=nt(()=>r(v)),g?ze.add_callback(h):h()}})}function Mr(t,e){return e}function El(t,e,r){for(var a=t.items,s=[],i=e.length,o=0;o<i;o++)Sn(e[o].e,s,!0);var l=i>0&&s.length===0&&r!==null;if(l){var u=r.parentNode;el(u),u.append(r),a.clear(),Rt(t,e[0].prev,e[i-1].next)}Ks(s,()=>{for(var h=0;h<i;h++){var v=e[h];l||(a.delete(v.k),Rt(t,v.prev,v.next)),st(v.e,!l)}})}function rt(t,e,r,a,s,i=null){var o=t,l={flags:e,items:new Map,first:null},u=(e&Es)!==0;if(u){var h=t;o=h.appendChild(Kt())}var v=null,g=!1,m=new Map,p=gn(()=>{var $=r();return Zr($)?$:$==null?[]:cn($)}),_,x;function w(){Al(x,_,l,m,o,s,e,a,r),i!==null&&(_.length===0?v?Aa(v):v=nt(()=>i(o)):v!==null&&Wt(v,()=>{v=null}))}Ft(()=>{x??=Ce,_=n(p);var $=_.length;if(!(g&&$===0)){g=$===0;var C,S,E,P;if(ka()){var M=new Set,A=ze;for(S=0;S<$;S+=1){E=_[S],P=a(E,S);var D=l.items.get(P)??m.get(P);D?(e&(Sa|xa))!==0&&no(D,E,S,e):(C=so(null,l,null,null,E,P,S,s,e,r,!0),m.set(P,C)),M.add(P)}for(const[N,V]of l.items)M.has(N)||A.skipped_effects.add(V.e);A.add_callback(w)}else w();n(p)}})}function Al(t,e,r,a,s,i,o,l,u){var h=(o&wi)!==0,v=(o&(Sa|xa))!==0,g=e.length,m=r.items,p=r.first,_=p,x,w=null,$,C=[],S=[],E,P,M,A;if(h)for(A=0;A<g;A+=1)E=e[A],P=l(E,A),M=m.get(P),M!==void 0&&(M.a?.measure(),($??=new Set).add(M));for(A=0;A<g;A+=1){if(E=e[A],P=l(E,A),M=m.get(P),M===void 0){var D=a.get(P);if(D!==void 0){a.delete(P),m.set(P,D);var N=w?w.next:_;Rt(r,w,D),Rt(r,D,N),Ba(D,N,s),w=D}else{var V=_?_.e.nodes_start:s;w=so(V,r,w,w===null?r.first:w.next,E,P,A,i,o,u)}m.set(P,w),C=[],S=[],_=w.next;continue}if(v&&no(M,E,A,o),(M.e.f&Dt)!==0&&(Aa(M.e),h&&(M.a?.unfix(),($??=new Set).delete(M))),M!==_){if(x!==void 0&&x.has(M)){if(C.length<S.length){var j=S[0],U;w=j.prev;var ie=C[0],L=C[C.length-1];for(U=0;U<C.length;U+=1)Ba(C[U],j,s);for(U=0;U<S.length;U+=1)x.delete(S[U]);Rt(r,ie.prev,L.next),Rt(r,w,ie),Rt(r,L,j),_=j,w=L,A-=1,C=[],S=[]}else x.delete(M),Ba(M,_,s),Rt(r,M.prev,M.next),Rt(r,M,w===null?r.first:w.next),Rt(r,w,M),w=M;continue}for(C=[],S=[];_!==null&&_.k!==P;)(_.e.f&Dt)===0&&(x??=new Set).add(_),S.push(_),_=_.next;if(_===null)continue;M=_}C.push(M),w=M,_=M.next}if(_!==null||x!==void 0){for(var Y=x===void 0?[]:cn(x);_!==null;)(_.e.f&Dt)===0&&Y.push(_),_=_.next;var W=Y.length;if(W>0){var G=(o&Es)!==0&&g===0?s:null;if(h){for(A=0;A<W;A+=1)Y[A].a?.measure();for(A=0;A<W;A+=1)Y[A].a?.fix()}El(r,Y,G)}}h&&fr(()=>{if($!==void 0)for(M of $)M.a?.apply()}),t.first=r.first&&r.first.e,t.last=w&&w.e;for(var F of a.values())st(F.e);a.clear()}function no(t,e,r,a){(a&Sa)!==0&&Er(t.v,e),(a&xa)!==0?Er(t.i,r):t.i=r}function so(t,e,r,a,s,i,o,l,u,h,v){var g=(u&Sa)!==0,m=(u&Si)===0,p=g?m?Yi(s,!1,!1):tr(s):s,_=(u&xa)===0?o:tr(o),x={i:_,v:p,k:i,a:null,e:null,prev:r,next:a};try{if(t===null){var w=document.createDocumentFragment();w.append(t=Kt())}return x.e=nt(()=>l(t,p,_,h),Oi),x.e.prev=r&&r.e,x.e.next=a&&a.e,r===null?v||(e.first=x):(r.next=x,r.e.next=x.e),a!==null&&(a.prev=x,a.e.prev=x.e),x}finally{}}function Ba(t,e,r){for(var a=t.next?t.next.e.nodes_start:r,s=e?e.e.nodes_start:r,i=t.e.nodes_start;i!==null&&i!==a;){var o=Xr(i);s.before(i),i=o}}function Rt(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function de(t,e,...r){var a=t,s=ue,i;Ft(()=>{s!==(s=e())&&(i&&(st(i),i=null),i=nt(()=>s(a,...r)))},_r)}function dr(t,e,r){var a=t,s,i,o=null,l=null;function u(){i&&(Wt(i),i=null),o&&(o.lastChild.remove(),a.before(o),o=null),i=l,l=null}Ft(()=>{if(s!==(s=e())){var h=ka();if(s){var v=a;h&&(o=document.createDocumentFragment(),o.append(v=Kt()),i&&ze.skipped_effects.add(i)),l=nt(()=>r(v,s))}h?ze.add_callback(u):u()}},_r)}function Tl(t,e,r,a,s,i){var o,l,u=null,h=t,v;Ft(()=>{const g=e()||null;var m=Ni;g!==o&&(v&&(g===null?Wt(v,()=>{v=null,l=null}):g===l?Aa(v):st(v)),g&&g!==l&&(v=nt(()=>{if(u=document.createElementNS(m,g),Tr(u,u),a){var p=u.appendChild(Kt());a(u,p)}Ce.nodes_end=u,h.before(u)})),o=g,o&&(l=o))},_r)}function Ml(t,e){var r=void 0,a;Ft(()=>{r!==(r=e())&&(a&&(st(a),a=null),r&&(a=nt(()=>{yn(()=>r(t))})))})}function oo(t){var e,r,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(r=oo(t[e]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);return a}function Nl(){for(var t,e,r=0,a="",s=arguments.length;r<s;r++)(t=arguments[r])&&(e=oo(t))&&(a&&(a+=" "),a+=e);return a}function Dl(t){return typeof t=="object"?Nl(t):t??""}const Gn=[...` 	
\r\f \v\uFEFF`];function Cl(t,e,r){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),r){for(var s in r)if(r[s])a=a?a+" "+s:s;else if(a.length)for(var i=s.length,o=0;(o=a.indexOf(s,o))>=0;){var l=o+i;(o===0||Gn.includes(a[o-1]))&&(l===a.length||Gn.includes(a[l]))?a=(o===0?"":a.substring(0,o))+a.substring(l+1):o=l}}return a===""?null:a}function Vn(t,e=!1){var r=e?" !important;":";",a="";for(var s in t){var i=t[s];i!=null&&i!==""&&(a+=" "+s+": "+i+r)}return a}function za(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Il(t,e){if(e){var r="",a,s;if(Array.isArray(e)?(a=e[0],s=e[1]):a=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,u=[];a&&u.push(...Object.keys(a).map(za)),s&&u.push(...Object.keys(s).map(za));var h=0,v=-1;const x=t.length;for(var g=0;g<x;g++){var m=t[g];if(l?m==="/"&&t[g-1]==="*"&&(l=!1):i?i===m&&(i=!1):m==="/"&&t[g+1]==="*"?l=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!l&&i===!1&&o===0){if(m===":"&&v===-1)v=g;else if(m===";"||g===x-1){if(v!==-1){var p=za(t.substring(h,v).trim());if(!u.includes(p)){m!==";"&&g++;var _=t.substring(h,g).trim();r+=" "+_+";"}}h=g+1,v=-1}}}}return a&&(r+=Vn(a)),s&&(r+=Vn(s,!0)),r=r.trim(),r===""?null:r}return t==null?null:String(t)}function Ne(t,e,r,a,s,i){var o=t.__className;if(o!==r||o===void 0){var l=Cl(r,a,i);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t.__className=r}else if(i&&s!==i)for(var u in i){var h=!!i[u];(s==null||h!==!!s[u])&&t.classList.toggle(u,h)}return i}function Ua(t,e={},r,a){for(var s in r){var i=r[s];e[s]!==i&&(r[s]==null?t.style.removeProperty(s):t.style.setProperty(s,i,a))}}function io(t,e,r,a){var s=t.__style;if(s!==e){var i=Il(e,a);i==null?t.removeAttribute("style"):t.style.cssText=i,t.__style=e}else a&&(Array.isArray(a)?(Ua(t,r?.[0],a[0]),Ua(t,r?.[1],a[1],"important")):Ua(t,r,a));return a}function ba(t,e,r=!1){if(t.multiple){if(e==null)return;if(!Zr(e))return Ci();for(var a of t.options)a.selected=e.includes(Gr(a));return}for(a of t.options){var s=Gr(a);if(Zi(s,e)){a.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function lo(t){var e=new MutationObserver(()=>{ba(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),bn(()=>{e.disconnect()})}function Fr(t,e,r=e){var a=!0;_n(t,"change",s=>{var i=s?"[selected]":":checked",o;if(t.multiple)o=[].map.call(t.querySelectorAll(i),Gr);else{var l=t.querySelector(i)??t.querySelector("option:not([disabled])");o=l&&Gr(l)}r(o)}),yn(()=>{var s=e();if(ba(t,s,a),a&&s===void 0){var i=t.querySelector(":checked");i!==null&&(s=Gr(i),r(s))}t.__value=s,a=!1}),lo(t)}function Gr(t){return"__value"in t?t.__value:t.value}const zr=Symbol("class"),Ur=Symbol("style"),co=Symbol("is custom element"),uo=Symbol("is html");function Ol(t,e){var r=Ma(t);r.value===(r.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e??"")}function Ha(t,e){var r=Ma(t);r.checked!==(r.checked=e??void 0)&&(t.checked=e)}function Rl(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function rr(t,e,r,a){var s=Ma(t);s[e]!==(s[e]=r)&&(e==="loading"&&(t[ui]=r),r==null?t.removeAttribute(e):typeof r!="string"&&vo(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function ql(t,e,r,a,s=!1,i=!1){var o=Ma(t),l=o[co],u=!o[uo],h=e||{},v=t.tagName==="OPTION";for(var g in e)g in r||(r[g]=null);r.class?r.class=Dl(r.class):r[zr]&&(r.class=null),r[Ur]&&(r.style??=null);var m=vo(t);for(const E in r){let P=r[E];if(v&&E==="value"&&P==null){t.value=t.__value="",h[E]=P;continue}if(E==="class"){var p=t.namespaceURI==="http://www.w3.org/1999/xhtml";Ne(t,p,P,a,e?.[zr],r[zr]),h[E]=P,h[zr]=r[zr];continue}if(E==="style"){io(t,P,e?.[Ur],r[Ur]),h[E]=P,h[Ur]=r[Ur];continue}var _=h[E];if(!(P===_&&!(P===void 0&&t.hasAttribute(E)))){h[E]=P;var x=E[0]+E[1];if(x!=="$$")if(x==="on"){const M={},A="$$"+E;let D=E.slice(2);var w=gl(D);if(hl(D)&&(D=D.slice(0,-7),M.capture=!0),!w&&_){if(P!=null)continue;t.removeEventListener(D,h[A],M),h[A]=null}if(P!=null)if(w)t[`__${D}`]=P,Ke([D]);else{let N=function(V){h[E].call(this,V)};var S=N;h[A]=xn(D,t,N,M)}else w&&(t[`__${D}`]=void 0)}else if(E==="style")rr(t,E,P);else if(E==="autofocus")tl(t,!!P);else if(!l&&(E==="__value"||E==="value"&&P!=null))t.value=t.__value=P;else if(E==="selected"&&v)Rl(t,P);else{var $=E;u||($=_l($));var C=$==="defaultValue"||$==="defaultChecked";if(P==null&&!l&&!C)if(o[E]=null,$==="value"||$==="checked"){let M=t;const A=e===void 0;if($==="value"){let D=M.defaultValue;M.removeAttribute($),M.defaultValue=D,M.value=M.__value=A?D:null}else{let D=M.defaultChecked;M.removeAttribute($),M.defaultChecked=D,M.checked=A?D:!1}}else t.removeAttribute(E);else C||m.includes($)&&(l||typeof P!="string")?(t[$]=P,$ in o&&(o[$]=tt)):typeof P!="function"&&rr(t,$,P)}}}return h}function tn(t,e,r=[],a=[],s,i=!1,o=!1){Rs(r,a,l=>{var u=void 0,h={},v=t.nodeName==="SELECT",g=!1;if(Ft(()=>{var p=e(...l.map(n)),_=ql(t,u,p,s,i,o);g&&v&&"value"in p&&ba(t,p.value);for(let w of Object.getOwnPropertySymbols(h))p[w]||st(h[w]);for(let w of Object.getOwnPropertySymbols(p)){var x=p[w];w.description===Di&&(!u||x!==u[w])&&(h[w]&&st(h[w]),h[w]=nt(()=>Ml(t,()=>x))),_[w]=x}u=_}),v){var m=t;yn(()=>{ba(m,u.value,!0),lo(m)})}g=!0})}function Ma(t){return t.__attributes??={[co]:t.nodeName.includes("-"),[uo]:t.namespaceURI===Mi}}var Kn=new Map;function vo(t){var e=t.getAttribute("is")||t.nodeName,r=Kn.get(e);if(r)return r;Kn.set(e,r=[]);for(var a,s=t,i=Element.prototype;i!==s;){a=si(s);for(var o in a)a[o].set&&r.push(o);s=un(s)}return r}function Ve(t,e,r=e){var a=new WeakSet;_n(t,"input",async s=>{var i=s?t.defaultValue:t.value;if(i=Wa(t)?Qa(i):i,r(i),ze!==null&&a.add(ze),await vl(),i!==(i=e())){var o=t.selectionStart,l=t.selectionEnd;t.value=i??"",l!==null&&(t.selectionStart=o,t.selectionEnd=Math.min(l,t.value.length))}}),Rr(e)==null&&t.value&&(r(Wa(t)?Qa(t.value):t.value),ze!==null&&a.add(ze)),wn(()=>{var s=e();if(t===document.activeElement){var i=fa??ze;if(a.has(i))return}Wa(t)&&s===Qa(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function rn(t,e,r=e){_n(t,"change",a=>{var s=a?t.defaultChecked:t.checked;r(s)}),Rr(e)==null&&r(t.checked),wn(()=>{var a=e();t.checked=!!a})}function Wa(t){var e=t.type;return e==="number"||e==="range"}function Qa(t){return t===""?null:+t}let ia=!1;function jl(t){var e=ia;try{return ia=!1,[t(),ia]}finally{ia=e}}const Ll={get(t,e){if(!t.exclude.includes(e))return t.props[e]},set(t,e){return!1},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function fe(t,e,r){return new Proxy({props:t,exclude:e},Ll)}const Bl={get(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Br(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a)return a[e]}},set(t,e,r){let a=t.props.length;for(;a--;){let s=t.props[a];Br(s)&&(s=s());const i=Xt(s,e);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Br(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a){const s=Xt(a,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(t,e){if(e===ur||e===$s)return!1;for(let r of t.props)if(Br(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(t){const e=[];for(let r of t.props)if(Br(r)&&(r=r()),!!r){for(const a in r)e.includes(a)||e.push(a);for(const a of Object.getOwnPropertySymbols(r))e.includes(a)||e.push(a)}return e}};function ge(...t){return new Proxy({props:t},Bl)}function ve(t,e,r,a){var s=!Ir||(r&Pi)!==0,i=(r&ki)!==0,o=(r&Ei)!==0,l=a,u=!0,h=()=>(u&&(u=!1,l=o?Rr(a):a),l),v;if(i){var g=ur in t||$s in t;v=Xt(t,e)?.set??(g&&e in t?S=>t[e]=S:void 0)}var m,p=!1;i?[m,p]=jl(()=>t[e]):m=t[e],m===void 0&&a!==void 0&&(m=h(),v&&(s&&gi(),v(m)));var _;if(s?_=()=>{var S=t[e];return S===void 0?h():(u=!0,S)}:_=()=>{var S=t[e];return S!==void 0&&(l=void 0),S===void 0?l:S},s&&(r&$i)===0)return _;if(v){var x=t.$$legacy;return(function(S,E){return arguments.length>0?((!s||!E||x||p)&&v(E?_():S),S):_()})}var w=!1,$=((r&xi)!==0?$a:gn)(()=>(w=!1,_()));i&&n($);var C=Ce;return(function(S,E){if(arguments.length>0){const P=E?n($):s&&i?Re(S):S;return b($,P),w=!0,l!==void 0&&(l=P),S}return br&&w||(C.f&mr)!==0?$.v:n($)})}function fo(t){Fe===null&&ks(),Ir&&Fe.l!==null?Ul(Fe).m.push(t):It(()=>{const e=Rr(t);if(typeof e=="function")return e})}function zl(t){Fe===null&&ks(),fo(()=>()=>Rr(t))}function Ul(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const Hl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Hl);const Wl="modulepreload",Ql=function(t){return"/"+t},Jn={},an=function(e,r,a){let s=Promise.resolve();if(r&&r.length>0){let h=function(v){return Promise.all(v.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var o=h;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");s=h(r.map(v=>{if(v=Ql(v),v in Jn)return;Jn[v]=!0;const g=v.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${m}`))return;const p=document.createElement("link");if(p.rel=g?"stylesheet":Wl,g||(p.as="script"),p.crossOrigin="",p.href=v,u&&p.setAttribute("nonce",u),document.head.appendChild(p),g)return new Promise((_,x)=>{p.addEventListener("load",_),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${v}`)))})}))}function i(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return s.then(l=>{for(const u of l||[])u.status==="rejected"&&i(u.reason);return e().catch(i)})};class Fn extends Map{#e=new Map;#t=H(0);#s=H(0);#o=Gt||-1;constructor(e){if(super(),e){for(var[r,a]of e)super.set(r,a);this.#s.v=super.size}}#d(e){return Gt===this.#o?H(e):tr(e)}has(e){var r=this.#e,a=r.get(e);if(a===void 0){var s=super.get(e);if(s!==void 0)a=this.#d(0),r.set(e,a);else return n(this.#t),!1}return n(a),!0}forEach(e,r){this.#c(),super.forEach(e,r)}get(e){var r=this.#e,a=r.get(e);if(a===void 0){var s=super.get(e);if(s!==void 0)a=this.#d(0),r.set(e,a);else{n(this.#t);return}}return n(a),super.get(e)}set(e,r){var a=this.#e,s=a.get(e),i=super.get(e),o=super.set(e,r),l=this.#t;if(s===void 0)s=this.#d(0),a.set(e,s),b(this.#s,super.size),jt(l);else if(i!==r){jt(s);var u=l.reactions===null?null:new Set(l.reactions),h=u===null||!s.reactions?.every(v=>u.has(v));h&&jt(l)}return o}delete(e){var r=this.#e,a=r.get(e),s=super.delete(e);return a!==void 0&&(r.delete(e),b(this.#s,super.size),b(a,-1),jt(this.#t)),s}clear(){if(super.size!==0){super.clear();var e=this.#e;b(this.#s,0);for(var r of e.values())b(r,-1);jt(this.#t),e.clear()}}#c(){n(this.#t);var e=this.#e;if(this.#s.v!==e.size){for(var r of super.keys())if(!e.has(r)){var a=this.#d(0);e.set(r,a)}}for([,a]of this.#e)n(a)}keys(){return n(this.#t),super.keys()}values(){return this.#c(),super.values()}entries(){return this.#c(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return n(this.#s),super.size}}class Gl{#e;#t;constructor(e,r){this.#e=e,this.#t=pn(r)}get current(){return this.#t(),this.#e()}}const Vl=/\(.+\)/,Kl=new Set(["all","print","screen","and","or","not","only"]);class Jl extends Gl{constructor(e,r){let a=Vl.test(e)||e.split(/[\s,]+/).some(i=>Kl.has(i.trim()))?e:`(${e})`;const s=window.matchMedia(a);super(()=>s.matches,i=>en(s,"change",i))}}const Fl=typeof window<"u"?window:void 0;function Yl(t){let e=t.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}class Zl{#e;#t;constructor(e={}){const{window:r=Fl,document:a=r?.document}=e;r!==void 0&&(this.#e=a,this.#t=pn(s=>{const i=en(r,"focusin",s),o=en(r,"focusout",s);return()=>{i(),o()}}))}get current(){return this.#t?.(),this.#e?Yl(this.#e):null}}new Zl;function Xl(t){return typeof t=="function"}function ec(t,e){if(Xl(t)){const a=t();return a===void 0?e:a}return t===void 0?e:t}function tc(t,e){let r=H(null);const a=Z(()=>ec(e,250));function s(...i){if(n(r))n(r).timeout&&clearTimeout(n(r).timeout);else{let o,l;const u=new Promise((h,v)=>{o=h,l=v});b(r,{timeout:null,runner:null,promise:u,resolve:o,reject:l},!0)}return n(r).runner=async()=>{if(!n(r))return;const o=n(r);b(r,null);try{o.resolve(await t.apply(this,i))}catch(l){o.reject(l)}},n(r).timeout=setTimeout(n(r).runner,n(a)),n(r).promise}return s.cancel=async()=>{(!n(r)||n(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!n(r)||n(r).timeout===null)||(clearTimeout(n(r).timeout),n(r).reject("Cancelled"),b(r,null))},s.runScheduledNow=async()=>{(!n(r)||!n(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!n(r)||!n(r).timeout)||(clearTimeout(n(r).timeout),n(r).timeout=null,await n(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!n(r)?.timeout}}),s}function Nt(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(e){return console.warn("[ProductsStore] Erreur parsing JSON:",e),null}}function ea(t){return t?.length?t.filter(e=>e.quantity!=null&&e.unit).map(e=>({q:typeof e.quantity=="number"?e.quantity:parseFloat(e.quantity),u:e.unit})).filter(e=>!isNaN(e.q)):[]}function ta(t){if(!t?.length)return[];const e=new Map;return t.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const a=e.get(r.u)||0;e.set(r.u,a+r.q)}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function ra(t,e){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!e?.length){const l=t.map(u=>Zt(u.q.toString(),u.u)).join(" et ");return{numeric:t,display:l}}const r=new Map,a=new Map;t.forEach(l=>{const u=parseFloat(l.q);isNaN(u)||r.set(l.u,(r.get(l.u)||0)+u)}),e.forEach(l=>{a.set(l.u,(a.get(l.u)||0)+l.q)});const s=[],i=[];r.forEach((l,u)=>{const h=a.get(u)||0,v=l-h;v>0&&(s.push({q:v,u}),i.push(Zt(v.toString(),u)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:s,display:o}}function ct(t){return t?.length?t.map(e=>Zt(e.q.toString(),e.u)).join(" et "):"-"}function Zt(t,e){const r=parseFloat(t);if(isNaN(r))return`${t} ${e}`;if((e==="gr."||e==="ml")&&r>=1e3){const a=r/1e3,s=e==="gr."?"kg":"l.";let o=(Math.round(a*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${s}`}if(!["gr.","ml","kg","l."].includes(e)){let s=(Math.round(r*10)/10).toString();return s.endsWith(",0")&&(s=s.slice(0,-2)),`${s} ${e}`}return`${r} ${e}`}function Na(t){if(!t?.length)return[];const e=new Map;return t.forEach(({q:r,u:a})=>{if(typeof r=="number"&&!isNaN(r)){const s=e.get(a)||0;e.set(a,s+r)}}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function ho(t){return t?Object.values(t).some(e=>e.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function po(t){if(!t)return[];const e=[];return Object.entries(t).forEach(([r,a])=>{a.recipes?.forEach(s=>{e.push({...s,date:r,dateTimeService:r})})}),e}function Da(t){if(!t)return[];const e=Object.values(t).flatMap(r=>r.totalConsolidated);return Na(e)}function Pn(t,e){const r=new Map,a=new Map;t.forEach(({q:o,u:l})=>{r.set(l,(r.get(l)||0)+o)}),e.forEach(({q:o,u:l})=>{a.set(l,(a.get(l)||0)+o)});const s=[],i=new Set([...r.keys(),...a.keys()]);for(const o of i){const l=r.get(o)||0,u=a.get(o)||0,h=l-u;Math.abs(h)>.001&&s.push({q:h,u:o})}return s}function Ca(t){if(!t?.length)return"Équilibré";const e=t.filter(a=>a.q>0),r=t.filter(a=>a.q<0);if(e.length>0&&r.length>0){const a=e.map(i=>Zt(i.q.toString(),i.u)).join(" et "),s=r.map(i=>Zt(Math.abs(i.q).toString(),i.u)).join(" et ");return`${a} disponibles, ${s} manquant${r.length>1?"s":""}`}else return e.length>0?e.map(a=>"+"+Zt(a.q.toString(),a.u)).join(" et ")+" disponibles":r.length>0?r.map(a=>Zt(Math.abs(a.q).toString(),a.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function go(t,e){if(e.searchQuery.trim()){const r=e.searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(e.selectedStores.length>0&&(!t.storeInfo?.storeName||!e.selectedStores.includes(t.storeInfo.storeName))||e.selectedWho.length>0&&(!t.who||!t.who.some(r=>e.selectedWho.includes(r)))||e.selectedProductTypes.length>0&&(!t.productType||!e.selectedProductTypes.includes(t.productType))||e.selectedTemperatures.length>0&&!(e.selectedTemperatures.includes("frais")&&t.pFrais||e.selectedTemperatures.includes("surgele")&&t.pSurgel))}function rc(t){return t.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const ac=Object.freeze(Object.defineProperty({__proto__:null,aggregateByUnit:Na,calculateAndFormatMissing:ra,calculateGlobalTotal:Da,calculateTotalQuantityArray:ta,formatSingleQuantity:Zt,formatStockResult:Ca,formatTotalQuantity:ct,generateRecipesWithDates:po,hasConversions:ho,matchesFilters:go,safeJsonParse:Nt,slugify:rc,subtractQuantities:Pn,transformPurchasesToNumericQuantity:ea},Symbol.toStringTag,{value:"Module"}));function Ia(t){return[...t].sort()}function nc(t){return new Date(t)<new Date}function sc(t){if(t.length===0)return!0;const e=new Date(Oa(t));return e.setHours(23,59,59,999),e<new Date}function mo(t){return t.length===0?null:Ia(t)[0]}function Oa(t){return t.length===0?null:Ia(t).pop()??null}function oc(t){if(t.length===0)return null;const e=new Date;return e.setHours(0,0,0,0),Ia(t).find(r=>new Date(r)>=e)||null}function ic(t){if(t.length===0)return null;const e=Ia(t),r=sc(t),a=nc(e[0]),s=new Date;let i;return r?i=e[0]:a?i=s.toISOString().slice(0,19)+"Z":i=e[0],{start:i,end:e[e.length-1]}}function _o(t){const e=oc(t),r=Oa(t);return!e||!r?null:{start:e,end:r}}function lc(t){const e=mo(t),r=Oa(t);return!e||!r?null:{start:e,end:r}}function bo(t,e){const r=lc(e);return r?t.start===r.start&&t.end===r.end:!1}function cc(t,e){const r=_o(e);return r?t.start===r.start&&t.end===r.end:!1}function uc(t){return new Date(t).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function Vr(t){return t?new Date(t).toLocaleDateString("fr-Fr",{weekday:"short",day:"numeric",month:"short"}):""}function Ga(t){const r=new Date(t).getHours();return r===12?"sun":r===20?"moon":r===8?"cloud":null}function dc(t,e){if(!t.byDate?.[e])return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const r=t.byDate[e],a=[e],s=new Map;r.recipes?.length&&s.set(e,r.recipes);const i=r.totalConsolidated||[],o=i.length>0?ct(i):"-",l=vc(t,e,i),u=l.filter(v=>v.q>0),h=l.filter(v=>v.q<0);return{requiredQuantities:i,requiredQuantitiesFormatted:o,stockBalance:l,availableStockQuantities:u,missingStockQuantities:h,availableStockFormatted:Ca(l),missingStockFormatted:ct(h.map(v=>({q:Math.abs(v.q),u:v.u}))),hasAvailableStock:u.length>0,hasMissingStock:h.length>0,totalRecipesInRange:r.recipes?.length||0,totalPortionsInRange:r.totalAssiettes||0,datesInSelectedRange:a,recipesByDate:s}}function vc(t,e,r){let a=[],s="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(a=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],s=t.stockParsed.dateTime);const i=[];if(t.purchases)for(const u of t.purchases)fc(u,e,s)&&i.push({q:u.quantity,u:u.unit});const o=[...a,...i],l=Na(o);return Pn(l,r)}function fc(t,e,r=""){if(t.status==="cancelled")return!1;const a=t.deliveryDate||t.$createdAt;return!a||a>e||r&&t.$createdAt<r?!1:a<=e}function hc(t,e){const r=t.totalNeededArray||[],a=r.length>0?ct(r):"-",s=yo(t,e[0],e[e.length-1],r),i=s.filter(h=>h.q>0),o=s.filter(h=>h.q<0),l=[...e].sort(),u=new Map;if(t.byDate)for(const[h,v]of Object.entries(t.byDate))v.recipes?.length&&u.set(h,v.recipes);return{requiredQuantities:r,requiredQuantitiesFormatted:a,stockBalance:s,availableStockQuantities:i,missingStockQuantities:o,availableStockFormatted:Ca(s),missingStockFormatted:ct(o.map(h=>({q:Math.abs(h.q),u:h.u}))),hasAvailableStock:i.length>0,hasMissingStock:o.length>0,totalRecipesInRange:t.nbRecipes||0,totalPortionsInRange:t.totalAssiettes||0,datesInSelectedRange:l,recipesByDate:u}}function pc(t,e,r){if(!t.byDate)return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const a=new Date(e),s=new Date(r),i=[],o=new Map,l=new Map;let u=0,h=0;for(const[x,w]of Object.entries(t.byDate)){const $=new Date(x);$>=a&&$<=s&&(i.push(x),u+=w.totalAssiettes||0,w.recipes?.length&&(o.set(x,w.recipes),h+=w.recipes.length),w.totalConsolidated&&w.totalConsolidated.forEach(({q:C,u:S})=>{l.set(S,(l.get(S)||0)+C)}))}const v=Array.from(l.entries()).map(([x,w])=>({q:w,u:x})),g=v.length>0?ct(v):"-",m=yo(t,e,r,v),p=m.filter(x=>x.q>0),_=m.filter(x=>x.q<0);return{requiredQuantities:v,requiredQuantitiesFormatted:g,stockBalance:m,availableStockQuantities:p,missingStockQuantities:_,availableStockFormatted:Ca(m),missingStockFormatted:ct(_.map(x=>({q:Math.abs(x.q),u:x.u}))),hasAvailableStock:p.length>0,hasMissingStock:_.length>0,totalRecipesInRange:h,totalPortionsInRange:u,datesInSelectedRange:i,recipesByDate:o}}function yo(t,e,r,a){let s=[],i="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(s=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],i=t.stockParsed.dateTime);const o=[];if(t.purchases)for(const h of t.purchases)gc(h,e,r,i)&&o.push({q:h.quantity,u:h.unit});const l=[...s,...o],u=Na(l);return Pn(u,a)}function gc(t,e,r,a=""){if(t.status==="cancelled")return!1;const s=t.deliveryDate||t.$createdAt;return!s||s>r||a&&t.$createdAt<a?!1:s>=e&&s<=r}function Yn(t){return{...t,products:t.products?.map(e=>typeof e=="string"?e:e.$id)||[],mainId:t.mainId}}function mc(t){const e=Nt(t.specs)??null,r=ta(ea(t.purchases??[]));let a=[];e?.quantity&&(a=[e.quantity]);const{numeric:s,display:i}=ra(a,r),o=Nt(t.stockReel)??null,l=ct(r),u=t.store?Nt(t.store):null,h=o?`${o.quantity} ${o.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid||"",productName:t.productName,productType:t.productType||"none",pFrais:e?.pFrais??!1,pSurgel:e?.pSurgel??!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,totalNeededRaw:[],status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,specs:t.specs,byDate:{},storeInfo:u,stockParsed:o,specsParsed:e,totalNeededArray:a,totalPurchasesArray:r,missingQuantityArray:s,stockOrTotalPurchases:h,displayTotalNeeded:ct(a),displayTotalPurchases:l,displayMissingQuantity:i,totalNeededOverrideParsed:Nt(t.totalNeededOverride),displayTotalOverride:(()=>{const v=Nt(t.totalNeededOverride);return v?ct([v.totalOverride]):""})()}}function la(t,e){const r=t.purchases??e.purchases,a=t.specs??e.specs,s=a?Nt(a):e.specsParsed,i=ta(ea(r??[])),o=ct(i);let l=e.totalNeededArray;!e.productHugoUuid&&s?.quantity&&(l=[s.quantity]);const{numeric:u,display:h}=ra(l,i),v=t.stockReel??e.stockReel,g=v?Nt(v):e.stockParsed,m=t.store??e.store,p=m?Nt(m):e.storeInfo,_=g?`${g.quantity} ${g.unit}`:o;return t.purchases===void 0&&e.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${e.purchases.length} purchases pour ${e.productName}`),{...e,$updatedAt:t.$updatedAt,productName:t.productName??e.productName,productType:t.productType??e.productType,isSynced:t.isSynced??e.isSynced,mainId:t.mainId??e.mainId,pFrais:s?.pFrais??e.pFrais,pSurgel:s?.pSurgel??e.pSurgel,status:t.status??e.status,who:t.who??e.who,store:m,stockReel:v,specs:a,purchases:r,previousNames:t.previousNames??e.previousNames,isMerged:t.isMerged??e.isMerged,mergedFrom:t.mergedFrom??e.mergedFrom,mergeDate:t.mergeDate??e.mergeDate,mergeReason:t.mergeReason??e.mergeReason,mergedInto:t.mergedInto??e.mergedInto,totalNeededOverride:t.totalNeededOverride??e.totalNeededOverride,storeInfo:p,stockParsed:g,specsParsed:s,totalNeededArray:l,totalPurchasesArray:i,missingQuantityArray:u,stockOrTotalPurchases:_,displayTotalPurchases:o,displayMissingQuantity:h,displayTotalNeeded:ct(l),totalNeededOverrideParsed:Nt(t.totalNeededOverride??e.totalNeededOverride),displayTotalOverride:(()=>{const x=Nt(t.totalNeededOverride??e.totalNeededOverride);return x?ct([x.totalOverride]):""})()}}class _c{#e=H(Re([]));MAX_TOASTS=3;get toasts(){return n(this.#e).sort((e,r)=>r.timestamp-e.timestamp)}create(e){const r=e.id||crypto.randomUUID(),a={id:r,state:e.state,message:e.message,timestamp:Date.now(),source:e.source||"user",timeoutId:void 0,details:e.details};return this.#t(a),r}update(e,r){const a=n(this.#e).findIndex(i=>i.id===e);if(a===-1)return;const s=n(this.#e)[a];s.timeoutId&&clearTimeout(s.timeoutId),n(this.#e)[a]={...s,state:r.state||s.state,message:r.message||s.message,source:r.source||s.source},this.#s(n(this.#e)[a])}async track(e,r){const a=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const s=await e;return this.update(a,{state:"success",message:r.success||"Opération réussie"}),s}catch(s){throw this.update(a,{state:"error",message:r.error||"Erreur lors de l'opération"}),s}}dismiss(e){const r=n(this.#e).findIndex(s=>s.id===e);if(r===-1)return;const a=n(this.#e)[r];a.timeoutId&&clearTimeout(a.timeoutId),n(this.#e).splice(r,1)}dismissAll(){n(this.#e).forEach(e=>{e.timeoutId&&clearTimeout(e.timeoutId)}),b(this.#e,[],!0)}#t(e){if(e.source==="user"){const r=n(this.#e).findIndex(a=>a.source==="user");r>=0?n(this.#e)[r]=e:n(this.#e).push(e)}else{const r=n(this.#e).filter(a=>a.source!=="user");if(r.length>=2){const a=r[0];this.dismiss(a.id)}n(this.#e).push(e)}n(this.#e).length>this.MAX_TOASTS&&n(this.#e).splice(0,n(this.#e).length-this.MAX_TOASTS),this.#s(e)}#s(e){if(e.state!=="success"&&e.state!=="info")return;const r=e.source==="realtime-other"?24e3:23e3;e.timeoutId=setTimeout(()=>{this.dismiss(e.id)},r)}success(e,r){return this.create({state:"success",message:e,details:r})}error(e,r){return this.create({state:"error",message:e,details:r})}info(e,r){return this.create({state:"info",message:e,source:r?.source||"system",details:r?.details})}loading(e,r){return this.create({state:"loading",message:e,details:r})}}const $t=new _c;function bc(t,e,r,a){if(typeof e=="function"?t!==e||!a:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?a:r==="a"?a.call(t):a?a.value:e.get(t)}class B{constructor(e,r,a){this.method=e,this.attribute=r,a!==void 0&&(Array.isArray(a)?this.values=a:this.values=[a])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}B.equal=(t,e)=>new B("equal",t,e).toString();B.notEqual=(t,e)=>new B("notEqual",t,e).toString();B.lessThan=(t,e)=>new B("lessThan",t,e).toString();B.lessThanEqual=(t,e)=>new B("lessThanEqual",t,e).toString();B.greaterThan=(t,e)=>new B("greaterThan",t,e).toString();B.greaterThanEqual=(t,e)=>new B("greaterThanEqual",t,e).toString();B.isNull=t=>new B("isNull",t).toString();B.isNotNull=t=>new B("isNotNull",t).toString();B.between=(t,e,r)=>new B("between",t,[e,r]).toString();B.startsWith=(t,e)=>new B("startsWith",t,e).toString();B.endsWith=(t,e)=>new B("endsWith",t,e).toString();B.select=t=>new B("select",void 0,t).toString();B.search=(t,e)=>new B("search",t,e).toString();B.orderDesc=t=>new B("orderDesc",t).toString();B.orderAsc=t=>new B("orderAsc",t).toString();B.orderRandom=()=>new B("orderRandom").toString();B.cursorAfter=t=>new B("cursorAfter",void 0,t).toString();B.cursorBefore=t=>new B("cursorBefore",void 0,t).toString();B.limit=t=>new B("limit",void 0,t).toString();B.offset=t=>new B("offset",void 0,t).toString();B.contains=(t,e)=>new B("contains",t,e).toString();B.notContains=(t,e)=>new B("notContains",t,e).toString();B.notSearch=(t,e)=>new B("notSearch",t,e).toString();B.notBetween=(t,e,r)=>new B("notBetween",t,[e,r]).toString();B.notStartsWith=(t,e)=>new B("notStartsWith",t,e).toString();B.notEndsWith=(t,e)=>new B("notEndsWith",t,e).toString();B.createdBefore=t=>B.lessThan("$createdAt",t);B.createdAfter=t=>B.greaterThan("$createdAt",t);B.createdBetween=(t,e)=>B.between("$createdAt",t,e);B.updatedBefore=t=>B.lessThan("$updatedAt",t);B.updatedAfter=t=>B.greaterThan("$updatedAt",t);B.updatedBetween=(t,e)=>B.between("$updatedAt",t,e);B.or=t=>new B("or",void 0,t.map(e=>JSON.parse(e))).toString();B.and=t=>new B("and",void 0,t.map(e=>JSON.parse(e))).toString();B.distanceEqual=(t,e,r,a=!0)=>new B("distanceEqual",t,[[e,r,a]]).toString();B.distanceNotEqual=(t,e,r,a=!0)=>new B("distanceNotEqual",t,[[e,r,a]]).toString();B.distanceGreaterThan=(t,e,r,a=!0)=>new B("distanceGreaterThan",t,[[e,r,a]]).toString();B.distanceLessThan=(t,e,r,a=!0)=>new B("distanceLessThan",t,[[e,r,a]]).toString();B.intersects=(t,e)=>new B("intersects",t,[e]).toString();B.notIntersects=(t,e)=>new B("notIntersects",t,[e]).toString();B.crosses=(t,e)=>new B("crosses",t,[e]).toString();B.notCrosses=(t,e)=>new B("notCrosses",t,[e]).toString();B.overlaps=(t,e)=>new B("overlaps",t,[e]).toString();B.notOverlaps=(t,e)=>new B("notOverlaps",t,[e]).toString();B.touches=(t,e)=>new B("touches",t,[e]).toString();B.notTouches=(t,e)=>new B("notTouches",t,[e]).toString();var Zn;(function(t){t[t.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",t[t.POLICY_VIOLATION=1008]="POLICY_VIOLATION",t[t.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(Zn||(Zn={}));var wo,So;class ar{static custom(e){return e}static unique(e=7){const r=bc(ar,wo,"m",So).call(ar);let a="";for(let s=0;s<e;s++){const i=Math.floor(Math.random()*16).toString(16);a+=i}return r+a}}wo=ar,So=function(){const e=new Date,r=Math.floor(e.getTime()/1e3),a=e.getMilliseconds();return r.toString(16)+a.toString(16).padStart(5,"0")};var Xn;(function(t){t.Equal="equal",t.NotEqual="notEqual",t.GreaterThan="greaterThan",t.GreaterThanEqual="greaterThanEqual",t.LessThan="lessThan",t.LessThanEqual="lessThanEqual",t.Contains="contains",t.IsNull="isNull",t.IsNotNull="isNotNull"})(Xn||(Xn={}));var es;(function(t){t.Totp="totp"})(es||(es={}));var ts;(function(t){t.Email="email",t.Phone="phone",t.Totp="totp",t.Recoverycode="recoverycode"})(ts||(ts={}));var rs;(function(t){t.Amazon="amazon",t.Apple="apple",t.Auth0="auth0",t.Authentik="authentik",t.Autodesk="autodesk",t.Bitbucket="bitbucket",t.Bitly="bitly",t.Box="box",t.Dailymotion="dailymotion",t.Discord="discord",t.Disqus="disqus",t.Dropbox="dropbox",t.Etsy="etsy",t.Facebook="facebook",t.Figma="figma",t.Github="github",t.Gitlab="gitlab",t.Google="google",t.Linkedin="linkedin",t.Microsoft="microsoft",t.Notion="notion",t.Oidc="oidc",t.Okta="okta",t.Paypal="paypal",t.PaypalSandbox="paypalSandbox",t.Podio="podio",t.Salesforce="salesforce",t.Slack="slack",t.Spotify="spotify",t.Stripe="stripe",t.Tradeshift="tradeshift",t.TradeshiftBox="tradeshiftBox",t.Twitch="twitch",t.Wordpress="wordpress",t.Yahoo="yahoo",t.Yammer="yammer",t.Yandex="yandex",t.Zoho="zoho",t.Zoom="zoom",t.Mock="mock"})(rs||(rs={}));var as;(function(t){t.AvantBrowser="aa",t.AndroidWebViewBeta="an",t.GoogleChrome="ch",t.GoogleChromeIOS="ci",t.GoogleChromeMobile="cm",t.Chromium="cr",t.MozillaFirefox="ff",t.Safari="sf",t.MobileSafari="mf",t.MicrosoftEdge="ps",t.MicrosoftEdgeIOS="oi",t.OperaMini="om",t.Opera="op",t.OperaNext="on"})(as||(as={}));var ns;(function(t){t.AmericanExpress="amex",t.Argencard="argencard",t.Cabal="cabal",t.Cencosud="cencosud",t.DinersClub="diners",t.Discover="discover",t.Elo="elo",t.Hipercard="hipercard",t.JCB="jcb",t.Mastercard="mastercard",t.Naranja="naranja",t.TarjetaShopping="targeta-shopping",t.UnionPay="unionpay",t.Visa="visa",t.MIR="mir",t.Maestro="maestro",t.Rupay="rupay"})(ns||(ns={}));var ss;(function(t){t.Afghanistan="af",t.Angola="ao",t.Albania="al",t.Andorra="ad",t.UnitedArabEmirates="ae",t.Argentina="ar",t.Armenia="am",t.AntiguaAndBarbuda="ag",t.Australia="au",t.Austria="at",t.Azerbaijan="az",t.Burundi="bi",t.Belgium="be",t.Benin="bj",t.BurkinaFaso="bf",t.Bangladesh="bd",t.Bulgaria="bg",t.Bahrain="bh",t.Bahamas="bs",t.BosniaAndHerzegovina="ba",t.Belarus="by",t.Belize="bz",t.Bolivia="bo",t.Brazil="br",t.Barbados="bb",t.BruneiDarussalam="bn",t.Bhutan="bt",t.Botswana="bw",t.CentralAfricanRepublic="cf",t.Canada="ca",t.Switzerland="ch",t.Chile="cl",t.China="cn",t.CoteDIvoire="ci",t.Cameroon="cm",t.DemocraticRepublicOfTheCongo="cd",t.RepublicOfTheCongo="cg",t.Colombia="co",t.Comoros="km",t.CapeVerde="cv",t.CostaRica="cr",t.Cuba="cu",t.Cyprus="cy",t.CzechRepublic="cz",t.Germany="de",t.Djibouti="dj",t.Dominica="dm",t.Denmark="dk",t.DominicanRepublic="do",t.Algeria="dz",t.Ecuador="ec",t.Egypt="eg",t.Eritrea="er",t.Spain="es",t.Estonia="ee",t.Ethiopia="et",t.Finland="fi",t.Fiji="fj",t.France="fr",t.MicronesiaFederatedStatesOf="fm",t.Gabon="ga",t.UnitedKingdom="gb",t.Georgia="ge",t.Ghana="gh",t.Guinea="gn",t.Gambia="gm",t.GuineaBissau="gw",t.EquatorialGuinea="gq",t.Greece="gr",t.Grenada="gd",t.Guatemala="gt",t.Guyana="gy",t.Honduras="hn",t.Croatia="hr",t.Haiti="ht",t.Hungary="hu",t.Indonesia="id",t.India="in",t.Ireland="ie",t.IranIslamicRepublicOf="ir",t.Iraq="iq",t.Iceland="is",t.Israel="il",t.Italy="it",t.Jamaica="jm",t.Jordan="jo",t.Japan="jp",t.Kazakhstan="kz",t.Kenya="ke",t.Kyrgyzstan="kg",t.Cambodia="kh",t.Kiribati="ki",t.SaintKittsAndNevis="kn",t.SouthKorea="kr",t.Kuwait="kw",t.LaoPeopleSDemocraticRepublic="la",t.Lebanon="lb",t.Liberia="lr",t.Libya="ly",t.SaintLucia="lc",t.Liechtenstein="li",t.SriLanka="lk",t.Lesotho="ls",t.Lithuania="lt",t.Luxembourg="lu",t.Latvia="lv",t.Morocco="ma",t.Monaco="mc",t.Moldova="md",t.Madagascar="mg",t.Maldives="mv",t.Mexico="mx",t.MarshallIslands="mh",t.NorthMacedonia="mk",t.Mali="ml",t.Malta="mt",t.Myanmar="mm",t.Montenegro="me",t.Mongolia="mn",t.Mozambique="mz",t.Mauritania="mr",t.Mauritius="mu",t.Malawi="mw",t.Malaysia="my",t.Namibia="na",t.Niger="ne",t.Nigeria="ng",t.Nicaragua="ni",t.Netherlands="nl",t.Norway="no",t.Nepal="np",t.Nauru="nr",t.NewZealand="nz",t.Oman="om",t.Pakistan="pk",t.Panama="pa",t.Peru="pe",t.Philippines="ph",t.Palau="pw",t.PapuaNewGuinea="pg",t.Poland="pl",t.FrenchPolynesia="pf",t.NorthKorea="kp",t.Portugal="pt",t.Paraguay="py",t.Qatar="qa",t.Romania="ro",t.Russia="ru",t.Rwanda="rw",t.SaudiArabia="sa",t.Sudan="sd",t.Senegal="sn",t.Singapore="sg",t.SolomonIslands="sb",t.SierraLeone="sl",t.ElSalvador="sv",t.SanMarino="sm",t.Somalia="so",t.Serbia="rs",t.SouthSudan="ss",t.SaoTomeAndPrincipe="st",t.Suriname="sr",t.Slovakia="sk",t.Slovenia="si",t.Sweden="se",t.Eswatini="sz",t.Seychelles="sc",t.Syria="sy",t.Chad="td",t.Togo="tg",t.Thailand="th",t.Tajikistan="tj",t.Turkmenistan="tm",t.TimorLeste="tl",t.Tonga="to",t.TrinidadAndTobago="tt",t.Tunisia="tn",t.Turkey="tr",t.Tuvalu="tv",t.Tanzania="tz",t.Uganda="ug",t.Ukraine="ua",t.Uruguay="uy",t.UnitedStates="us",t.Uzbekistan="uz",t.VaticanCity="va",t.SaintVincentAndTheGrenadines="vc",t.Venezuela="ve",t.Vietnam="vn",t.Vanuatu="vu",t.Samoa="ws",t.Yemen="ye",t.SouthAfrica="za",t.Zambia="zm",t.Zimbabwe="zw"})(ss||(ss={}));var os;(function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE",t.OPTIONS="OPTIONS",t.HEAD="HEAD"})(os||(os={}));var is;(function(t){t.Center="center",t.Topleft="top-left",t.Top="top",t.Topright="top-right",t.Left="left",t.Right="right",t.Bottomleft="bottom-left",t.Bottom="bottom",t.Bottomright="bottom-right"})(is||(is={}));var ls;(function(t){t.Jpg="jpg",t.Jpeg="jpeg",t.Png="png",t.Webp="webp",t.Heic="heic",t.Avif="avif",t.Gif="gif"})(ls||(ls={}));var cs;(function(t){t.Http="http",t.Schedule="schedule",t.Event="event"})(cs||(cs={}));var us;(function(t){t.Waiting="waiting",t.Processing="processing",t.Completed="completed",t.Failed="failed",t.Scheduled="scheduled"})(us||(us={}));function xo(t,e){return{$id:t.$id,mainId:t.mainId,productHugoUuid:t.productHugoUuid,productName:t.productName,...e}}async function mt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getDatabases(),e=window.AppwriteClient.getConfig();return{databases:t,config:e}}async function yc(t){const a=await(await window.AppwriteClient.getAccount()).get();return{...t,updatedBy:a.name}}function ir(){return localStorage.getItem("appwrite-user-name")||""}async function wc(t,e,r=100){try{const{databases:a,config:s}=await mt(),i=await a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.purchases,[B.greaterThan("$updatedAt",e),B.equal("mainId",t),B.limit(r),B.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(a){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",a),[]}}async function Po(t,e){const{lastSync:r,limit:a=100}=e;try{const{databases:s,config:i}=await mt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[B.equal("mainId",t),B.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),B.limit(a)])).documents;const o=await s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[B.greaterThan("$updatedAt",r),B.equal("mainId",t),B.limit(a),B.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(s){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${t}:`,s);const i=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function yr(t,e,r=!0){const{databases:a,config:s}=await mt();return r&&(e.updatedBy=ir()),await a.updateDocument(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,t,e)}async function Ht(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${t} sur Appwrite...`);const s=xo(a,e),i=await yc(s),{databases:o,config:l}=await mt(),u=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,t,i);return console.log(`[Appwrite Interactions] Produit ${t} créé avec succès`),u}catch(a){console.error(`[Appwrite Interactions] Erreur création produit ${t}:`,a);const s=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${s}`)}}async function $o(t,e){try{const{databases:r,config:a}=await mt(),{slugify:s}=await an(async()=>{const{slugify:v}=await Promise.resolve().then(()=>ac);return{slugify:v}},void 0),o=`${s(t.productName).substring(0,10)}_${Date.now().toString(36)}`,l={quantity:t.quantity,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1},u={productHugoUuid:null,productName:t.productName,productType:t.productType||"Autre",store:t.store?JSON.stringify(t.store):null,who:t.who||[],isSynced:!0,mainId:e,status:"active",updatedBy:ir(),stockReel:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,specs:JSON.stringify(l)};console.log(`[Appwrite Interactions] Création produit manuel ${o}...`,u);const h=await r.createDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,o,u);return console.log(`[Appwrite Interactions] Produit manuel ${o} créé avec succès`),h}catch(r){throw console.error("[Appwrite Interactions] Erreur création produit manuel:",r),r}}async function ko(t,e){if(!t)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=e?JSON.stringify(e):null,a=await yr(t,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${t}, nouvelle valeur:`,a.store),a}async function Eo(t,e){return yr(t,{who:e})}async function nn(t,e){return yr(t,{stockReel:e})}async function $n(t,e,r=!1){if(!t)throw new Error("ID du produit requis pour la mise à jour de l'override");const a=JSON.stringify(e),s=await yr(t,{totalNeededOverride:a},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${t}:`,e),s}async function Ao(t,e=!0){if(!t)throw new Error("ID du produit requis pour la suppression de l'override");const r=await yr(t,{totalNeededOverride:null},e);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${t}`),r}async function To(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour mise à jour batch`);const s={};return e.stockReel!==void 0&&(s.stockReel=e.stockReel),e.who!==void 0&&(s.who=e.who),e.storeInfo!==void 0&&(s.store=JSON.stringify(e.storeInfo)),a.isSynced?(console.log(`[Appwrite Interactions] Produit ${t} déjà sync, update batch normal...`),await yr(t,s)):(console.log(`[Appwrite Interactions] Produit ${t} local, création batch avec upsert...`),await Ht(t,s,r))}catch(a){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${t}:`,a),a}}async function Mo(t){const{databases:e,config:r}=await mt(),a={...t,createdBy:ir()},s=await e.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,ar.unique(),a);return console.log("[Appwrite Interactions] Achat créé:",s),s}async function kn(t,e){try{const{databases:r,config:a}=await mt(),s=await r.getDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t),i={...e,products:e.products||s.products},o=await r.updateDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t,i);return console.log(`[Appwrite Interactions] Achat ${t} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${t}:`,r);const a=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${a}`)}}async function No(t){try{const{databases:e,config:r}=await mt();await e.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,t),console.log(`[Appwrite Interactions] Achat ${t} supprimé`)}catch(e){console.error(`[Appwrite Interactions] Erreur suppression achat ${t}:`,e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Do(t){if(!t?.length)return[];try{const{databases:e,config:r}=await mt(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[B.equal("$id",t),B.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${a.documents.length} purchases chargés avec relations products`),a.documents}catch(e){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Co(t,e={}){let r=null;const a=i=>{const{events:o,payload:l}=i;if(!l)return;const u=o.some(p=>p.includes("products.")),h=o.some(p=>p.includes("purchases.")),v=o.some(p=>p.includes(".create")),g=o.some(p=>p.includes(".update")),m=o.some(p=>p.includes(".delete"));if(u){const p=l;p.updatedBy&&p.updatedBy!==ir()&&(v||g?$t.info(`${p.updatedBy} a modifié le produit "${p.productName}"`,{source:"realtime-other"}):m&&$t.info(`${p.updatedBy} a supprimé un produit`,{source:"realtime-other"})),v&&e.onProductCreate?e.onProductCreate(p):g&&e.onProductUpdate?e.onProductUpdate(p):m&&e.onProductDelete&&e.onProductDelete(p.$id)}else if(h){const p=l;if(p.createdBy&&p.createdBy!==ir()){const _=p.products?.[0]?.productName||"un produit";v&&p.who!==ir()?$t.info(`${p.who} a ajouté un achat pour ${_}`,{source:"realtime-other"}):g&&p.who!==ir()?$t.info(`${p.who} a modifié un achat pour ${_}`,{source:"realtime-other"}):m&&$t.info(`${p.who} a supprimé un achat pour ${_}`,{source:"realtime-other"})}v&&e.onPurchaseCreate?e.onPurchaseCreate(p):g&&e.onPurchaseUpdate?e.onPurchaseUpdate(p):m&&e.onPurchaseDelete&&e.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],t,a,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),e.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),e.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),e.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),e.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function Io(t){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${t}`);const{databases:e}=await mt(),r=window.AppwriteClient.getConfig(),a=await e.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,t);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${a.name}`),a}catch(e){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${t}:`,e),null}}async function Oo(t,e,r,a){try{console.log(`[Appwrite Interactions] Création du Main document: ${t}`);const{databases:s}=await mt(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await s.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,t,{name:a,createdBy:l.$id,isActive:!0,originalDataHash:e,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${t}`)}catch(s){throw console.error("[Appwrite Interactions] Erreur création Main document:",s),s}}async function En(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"batchUpdateProducts",data:t};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${t.productIds.length} produits, type: ${t.updateType}`);const s=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST");if(s.status!=="completed")throw new Error(`Exécution échouée avec statut: ${s.status}. Erreur: ${s.stderr}`);const i=JSON.parse(s.responseBody);return i.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${i.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,updatedCount:t.productIds.length,updateType:t.updateType,error:r,timestamp:new Date().toISOString()}}}async function Ro(t,e,r,a){return En({productIds:t,products:e,updateType:"store",updateData:r,options:a})}async function qo(t,e,r,a="replace"){return En({productIds:t,products:e,updateType:"who",updateData:{names:r},options:{mode:a}})}async function jo(t,e,r,a={}){try{const{databases:s,config:i}=await mt(),u=await(await window.AppwriteClient.getAccount()).get(),h=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:t,productId:e,productIdType:typeof e,quantities:r,options:a});for(const v of r){const g={products:[e],mainId:t,quantity:v.q,unit:v.u,status:"delivered",notes:a.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:a.store??null,who:u.name,price:null,orderDate:null,deliveryDate:null,createdBy:u.$id,invoiceId:a.invoiceId,invoiceTotal:null},m=await s.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.purchases,ar.unique(),g);h.push(m)}return console.log(`[Appwrite Interactions] ${h.length} validations rapides créées pour produit ${e}`),h}catch(s){console.error("[Appwrite Interactions] Erreur création validation rapide:",s);const i=s instanceof Error?s.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${i}`)}}async function Lo(t,e,r,a,s,i){try{const{databases:o,config:l}=await mt(),v=await(await window.AppwriteClient.getAccount()).get(),g=e||ar.unique(),m=v.name;if(!r)throw new Error("invoiceTotal est requis pour une dépense");const p={products:[],mainId:t,quantity:1,unit:"global",status:"expense",notes:s||"",store:a??null,who:m||v.name,price:r,invoiceId:g,invoiceTotal:r,orderDate:null,deliveryDate:null,createdBy:v.$id},_=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.purchases,ar.unique(),p);return console.log("[Appwrite Interactions] Dépense créée:",_),_}catch(o){console.error("[Appwrite Interactions] Erreur création dépense:",o);const l=o instanceof Error?o.message:"Erreur inconnue";throw new Error(`Échec de la création de la dépense: ${l}`)}}async function Sc(t){try{const{databases:e,config:r}=await mt(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[B.equal("mainId",t),B.equal("status","expense"),B.limit(1e3)]);return console.log(`[Appwrite Interactions] ${a.documents.length} dépenses globales chargées`),a.documents}catch(e){return console.error("[Appwrite Interactions] Erreur chargement dépenses globales:",e),[]}}const ds=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:En,batchUpdateStore:Ro,batchUpdateWho:qo,createExpensePurchase:Lo,createMainDocument:Oo,createManualProduct:$o,createPurchase:Mo,createQuickValidationPurchases:jo,deletePurchase:No,enrichedProductToAppwriteProduct:xo,loadMainEventData:Io,loadOrphanPurchases:Sc,loadPurchasesListByIds:Do,loadUpdatedPurchases:wc,removeTotalOverride:Ao,subscribeToRealtime:Co,syncProductsWithPurchases:Po,updateProduct:yr,updateProductBatch:To,updateProductStock:nn,updateProductStore:ko,updateProductWho:Eo,updatePurchase:kn,updateTotalOverride:$n,upsertProduct:Ht},Symbol.toStringTag,{value:"Module"}));async function xc(t){let e;if(e=await fetch(`/evenements/${t}/metadata.json`),!e.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function vs(t){const e=await fetch(`/evenements/${t}/ingredients_aw/index.json`);if(!e.ok)throw new Error(`Impossible de charger les données Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function Pc(t,e){if(!t)return!0;try{return(await xc(e)).hugoContentHash!==t}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function Bo(t,e){const r=Da(t.byDate),a=ta(ea([])),{numeric:s,display:i}=ra(r,a);return{$id:`${t.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:t.ingredientHugoUuid,productName:t.ingredientName,productType:t.ingType,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1,nbRecipes:t.nbRecipes,totalNeededRaw:t.totalNeededRaw,totalAssiettes:t.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:e,purchases:[],byDate:t.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:a,missingQuantityArray:s,stockOrTotalPurchases:"-",displayTotalNeeded:ct(r),displayTotalPurchases:"-",displayMissingQuantity:i,totalNeededOverrideParsed:null,displayTotalOverride:""}}function $c(t,e){return t.map(r=>Bo(r,e))}class kc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(e){this.dbName=`products-cache-${e}`}async open(){if(!this.db)return new Promise((e,r)=>{const a=indexedDB.open(this.dbName,this.version);a.onerror=()=>r(a.error),a.onsuccess=()=>{this.db=a.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),e()},a.onupgradeneeded=s=>{const i=s.target.result;i.objectStoreNames.contains(this.PRODUCTS_STORE)||(i.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),i.objectStoreNames.contains(this.METADATA_STORE)||(i.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();i.onsuccess=()=>{const o=new Map;i.result.forEach(l=>{o.set(l.$id,l)}),console.log(`[IDBCache] ${o.size} produits chargés`),e(o)},i.onerror=()=>r(i.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();i.onsuccess=()=>{const o=i.result,l={lastSync:null,allDates:[],hugoContentHash:null};o.forEach(u=>{u.key===this.LAST_SYNC_KEY?l.lastSync=u.value:u.key===this.ALL_DATES_KEY?l.allDates=u.value||[]:u.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=u.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),e(l)},i.onerror=()=>r(i.error)})}async saveProducts(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const s=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),i=s.objectStore(this.PRODUCTS_STORE);i.clear(),e.forEach(o=>{i.put(o)}),s.oncomplete=()=>{console.log(`[IDBCache] ${e.size} produits sauvegardés`),r()},s.onerror=()=>a(s.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const s=this.db.transaction(this.METADATA_STORE,"readwrite"),i=s.objectStore(this.METADATA_STORE);i.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),i.put({key:this.ALL_DATES_KEY,value:e.allDates}),e.hugoContentHash!==void 0&&i.put({key:this.HUGO_HASH_KEY,value:e.hugoContentHash}),s.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},s.onerror=()=>a(s.error)})}async updateLastSync(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateAllDates(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${e.length} dates`),r()},o.onerror=()=>a(o.error)})}async updateHugoContentHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateLastHugoMenuUpdate(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:e});o.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},o.onerror=()=>a(o.error)})}async upsertProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async deleteProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const a=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");a.objectStore(this.PRODUCTS_STORE).clear(),a.objectStore(this.METADATA_STORE).clear(),a.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),e()},a.onerror=()=>r(a.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Ec(t){const e=new kc(t);return await e.open(),e}function Ac(t){return!!(t.isMerged||t.totalNeededOverride)}function Tc(t,e){if(!t||t.length!==e.length)return!0;for(let r=0;r<t.length;r++){const a=t[r],s=e[r];if(a.q!==s.q||a.u!==s.u)return!0}return!1}async function Mc(t,e){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},a=new Map;for(const[i,o]of t)a.set(o.productHugoUuid,i);const s=new Set;for(const i of e.ingredients){const o=i.productSemanticKey||`${e.mainGroup_id}_${i.ingredientHugoUuid}`;s.add(o);const l=a.get(i.ingredientHugoUuid),u=l?t.get(l):void 0;if(u){if(Tc(u.totalNeededRaw,i.totalNeededRaw)){const v=Nc(u,i);if(v&&r.overrideConflicts.push(v),u.isMerged){const g=u.displayTotalNeeded;fs(u,i),r.mergedProductsUpdated.push({product:u,oldDisplayTotal:g,newDisplayTotal:u.displayTotalNeeded,currentOverride:u.totalNeededOverrideParsed,semanticKey:o})}else fs(u,i);r.updated.push(o)}t.set(o,u)}else{r.added.push(i);const h=Bo(i,e.mainGroup_id);t.set(h.$id,h)}}for(const[i,o]of t)s.has(i)||(r.removed.push(o),!Ac(o)&&!o.purchases?.length&&!o.stockReel&&!o.who?.length&&t.delete(i));return r.overrideConflicts.length>0&&await Dc(r.overrideConflicts),r.summary=Ic(r),r}function Nc(t,e){if(!t.totalNeededOverride||!t.totalNeededOverrideParsed)return null;const r=Da(e.byDate),a=ct(r),s=t.displayTotalNeeded;return s!==a?{product:t,oldDisplayTotal:s,newDisplayTotal:a,currentOverride:t.totalNeededOverrideParsed,semanticKey:t.$id}:null}async function Dc(t){for(const e of t){const r={...e.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:e.oldDisplayTotal,newTotalDisplay:e.newDisplayTotal};JSON.stringify(r);try{await $n(e.product.$id,r,!1)}catch(a){console.error(`Erreur lors de la mise à jour de l'override pour ${e.product.$id}:`,a)}}}function fs(t,e){t.byDate=e.byDate,t.nbRecipes=e.nbRecipes,t.totalAssiettes=e.totalAssiettes,t.productType=e.ingType,t.pFrais=e.pFrais||!1,t.pSurgel=e.pSurgel||!1,Cc(t)}function Cc(t){t.totalNeededArray=Da(t.byDate),t.displayTotalNeeded=ct(t.totalNeededArray);const e=ta(ea(t.purchases)),{numeric:r,display:a}=ra(t.totalNeededArray,e);t.totalPurchasesArray=e,t.missingQuantityArray=r,t.displayMissingQuantity=a,t.stockOrTotalPurchases=t.purchases.length>0?t.displayTotalPurchases:t.displayTotalNeeded}function Ic(t){const e=[];if((t.added.length>0||t.updated.length>0||t.removed.length>0)&&e.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),t.added.length>0&&e.push(`${t.added.length} nouveau(x) ingrédient(s)`),t.updated.length>0&&e.push(` ${t.updated.length} ingrédient(s) mis à jour`),t.overrideConflicts.length>0&&e.push(`⚠️ ${t.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),t.mergedProductsUpdated.length>0&&e.push(`🔀 ${t.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),t.removed.length>0){const r=t.removed.filter(a=>a.purchases?.length||a.stockReel||a.who?.length).length;r>0?e.push(`⚠️ ${r} suppression(s) avec données conservées`):e.push(`${t.removed.length} ingrédient(s) supprimé(s)`)}return e.length>0?e.join(", "):"Aucune modification détectée"}class Oc{isMobileQuery=new Jl("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return $t.toasts}get toast(){return $t}#e=H(Re({isOpen:!1,conflicts:[]}));get modalOverride(){return n(this.#e)}set modalOverride(e){b(this.#e,e,!0)}#t=H(Re({isOpen:!1}));get modal(){return n(this.#t)}set modal(e){b(this.#t,e,!0)}}const Nr=new Oc;class ca{#e=H();get data(){return n(this.#e)}set data(e){b(this.#e,e,!0)}#t;#s;constructor(e,r,a){this.data=e,this.#t=r,this.#s=a}update(e){this.data=e}get $id(){return this.data.$id}get productName(){return this.data.productName}get productType(){return this.data.productType}get storeInfo(){return this.data.storeInfo}get who(){return this.data.who}get pFrais(){return this.data.pFrais}get pSurgel(){return this.data.pSurgel}get status(){return this.data.status}get previousNames(){return this.data.previousNames}get purchases(){return this.data.purchases}get totalNeededOverrideParsed(){return this.data.totalNeededOverrideParsed}get displayMissingQuantity(){return this.data.displayMissingQuantity}get missingQuantityArray(){return this.data.missingQuantityArray}get isSynced(){return this.data.isSynced}get byDate(){return this.data.byDate}#o=Z(()=>{const e=this.#t(),r=this.#s();let a;if(e.start&&e.start===e.end)a=dc(this.data,e.start);else if(bo(e,r))a=hc(this.data,r),a.datesInSelectedRange=a.datesInSelectedRange.filter(s=>this.data.byDate&&this.data.byDate[s]);else if(e.start&&e.end)a=pc(this.data,e.start,e.end);else return{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedMissingQuantities:"",formattedAvailableQuantities:"En attente",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map};return{quantities:a.requiredQuantities,formattedQuantities:a.requiredQuantitiesFormatted,nbRecipes:a.totalRecipesInRange,totalAssiettes:a.totalPortionsInRange,stockResult:a.stockBalance,availableQuantities:a.availableStockQuantities,missingQuantities:a.missingStockQuantities,formattedMissingQuantities:a.missingStockFormatted,formattedAvailableQuantities:a.availableStockFormatted,hasAvailable:a.hasAvailableStock,hasMissing:a.hasMissingStock,concernedDates:a.datesInSelectedRange,recipesByDate:a.recipesByDate}});get stats(){return n(this.#o)}set stats(e){b(this.#o,e)}}const hs=1e3;class Rc{#e=new Fn;#t=new Fn;#s=H(null);#o=H(null);#d=H(!1);#c=H(!1);#u=H(null);#l=H(!1);#v=H(!1);#i=H(null);#f=H(null);get currentMainId(){return n(this.#s)}#a=H(Re([]));#h=H(Re({start:null,end:null}));get dateRange(){return n(this.#h)}set dateRange(e){b(this.#h,e,!0)}#g=Z(()=>!!(this.dateRange.start&&this.dateRange.start===this.dateRange.end));get hasSingleDateInRange(){return n(this.#g)}set hasSingleDateInRange(e){b(this.#g,e)}#_=Z(()=>n(this.#a).length===1);get hasSingleDateEvent(){return n(this.#_)}set hasSingleDateEvent(e){b(this.#_,e)}#b=Z(()=>{if(n(this.#a).length===0)return!0;const e=this.lastAvailableDate?new Date(this.lastAvailableDate):new Date;return e.setHours(23,59,59,999),e<new Date});get isEventPassed(){return n(this.#b)}set isEventPassed(e){b(this.#b,e)}#n=null;#y=null;#m=H(!1);#p=null;#S=H(!1);#q=H();#x=H(Re([]));get hasPendingConflicts(){return n(this.#x).length>0}get pendingConflicts(){return n(this.#x)}#r=H(Re({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return n(this.#r)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get loading(){return n(this.#c)}get error(){return n(this.#u)}get lastSync(){return n(this.#i)}get syncing(){return n(this.#l)}get availableDates(){return n(this.#a)}setDateRange(e,r){if(!e&&!r){this.dateRange={start:null,end:null};return}if(!e||!r){this.dateRange={start:e||r,end:e||r};return}const a=new Date(e)<=new Date(r)?e:r,s=new Date(e)>=new Date(r)?e:r;this.dateRange={start:a,end:s}}isFullRange(){return bo(this.dateRange,n(this.#a))}initializeDateRange(){const e=ic(n(this.#a));e&&(this.dateRange=e),console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}selectUpcomingDates(){const e=_o(n(this.#a));e&&(this.dateRange=e)}isUpcomingRange(){return cc(this.dateRange,n(this.#a))}get firstAvailableDate(){return mo(n(this.#a))}get lastAvailableDate(){return Oa(n(this.#a))}get realtimeConnected(){return n(this.#v)}#k=Z(()=>{const e=Array.from(this.#e.values()).map(r=>r.data);return console.log(`[ProductsStore] enrichedProducts recalculated: ${e.length} products`),e});get enrichedProducts(){return n(this.#k)}set enrichedProducts(e){b(this.#k,e)}#E=Z(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const e=new Date(this.dateRange.start),r=new Date(this.dateRange.end),a=new Map;for(const[s,i]of this.#e){const o=i.data;if(!o.byDate||!go(o,n(this.#r)))continue;const u=Object.keys(o.byDate).some(v=>{const g=new Date(v);return g>=e&&g<=r}),h=o.productHugoUuid===null;(u||h)&&a.set(s,i)}return a});get filteredProductsMap(){return n(this.#E)}set filteredProductsMap(e){b(this.#E,e)}#A=Z(()=>({total:this.#e.size,frais:Array.from(this.#e.values()).filter(e=>e.pFrais).length,surgel:Array.from(this.#e.values()).filter(e=>e.pSurgel).length,merged:Array.from(this.#e.values()).filter(e=>e.data.isMerged).length}));get stats(){return n(this.#A)}set stats(e){b(this.#A,e)}#T=Z(()=>{const e=Array.from(this.#e.values()).map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(e)]});get uniqueStores(){return n(this.#T)}set uniqueStores(e){b(this.#T,e)}#M=Z(()=>{const e=Array.from(this.#e.values()).flatMap(r=>r.who||[]);return[...new Set(e)]});get uniqueWho(){return n(this.#M)}set uniqueWho(e){b(this.#M,e)}#N=Z(()=>{const e=Array.from(this.#e.values()).map(r=>r.productType).filter(Boolean);return[...new Set(e)]});get uniqueProductTypes(){return n(this.#N)}set uniqueProductTypes(e){b(this.#N,e)}#D=Z(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((o,l)=>o.$id.localeCompare(l.$id));if(n(this.#r).groupBy==="none")return{"":r};const a=Object.groupBy(r,o=>n(this.#r).groupBy==="store"?o.storeInfo?.storeName||"Non défini":o.productType||"Non défini"),s=Object.keys(a).sort((o,l)=>o===""?1:l===""?-1:o.localeCompare(l)),i={};return s.forEach(o=>{i[o]=a[o]}),i});get groupedFilteredProducts(){return n(this.#D)}set groupedFilteredProducts(e){b(this.#D,e)}async initialize(e,r){if(!e?.trim())throw new Error("mainId invalide fourni");if(n(this.#d)&&n(this.#s)===e){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${e}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${e}`),b(this.#s,e,!0),b(this.#o,r,!0);try{this.#n=await Ec(e)}catch(a){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",a),new Error("Impossible d'initialiser le cache IndexedDB")}b(this.#u,null);try{if(await this.#j(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let s;s=await vs(r),console.log(`[ProductsStore] Hugo chargé: ${s.ingredients.length} ingrédients`),b(this.#f,s.hugoContentHash,!0),$c(s.ingredients,e).forEach(l=>{this.#e.set(l.$id,new ca(l,()=>this.dateRange,()=>n(this.#a)))}),b(this.#a,[...s.allDates],!0),await Io(e)||await Oo(s.mainGroup_id,s.hugoContentHash,s.allDates,s.name),await this.#C()}this.initializeDateRange(),await this.#L(),await this.#Y(),b(this.#d,!0);const a=this.#F();this.#y=Co(e,a),this.#H(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#I(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(a){const s=a instanceof Error?a.message:"Erreur lors de l'initialisation";throw b(this.#u,s,!0),console.error("[ProductsStore]",s,a),a}}async#j(){if(this.#n)try{const e=await this.#n.loadProducts();e.forEach((a,s)=>{this.#e.set(s,new ca(a,()=>this.dateRange,()=>n(this.#a)))});const r=await this.#n.loadMetadata();b(this.#i,r.lastSync,!0),b(this.#a,[...r.allDates],!0),b(this.#f,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${e.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(e){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",e)}}async#L(){if(n(this.#s)){b(this.#l,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${n(this.#s)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${n(this.#i)}`);const e=await Po(n(this.#s),{lastSync:n(this.#i),limit:hs});if(console.log(`[ProductsStore] ${e.length} produits récupérés depuis Appwrite`),e.forEach(r=>{const a=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!a}, who=${r.who}, store=${r.store}`);const s=this.#O(r,a?.data);s.isSynced=!0,a?a.update(s):this.#e.set(r.$id,new ca(s,()=>this.dateRange,()=>n(this.#a)))}),n(this.#i)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${n(this.#i)}`);const{loadUpdatedPurchases:r}=await an(async()=>{const{loadUpdatedPurchases:s}=await Promise.resolve().then(()=>ds);return{loadUpdatedPurchases:s}},void 0),a=await r(n(this.#s),n(this.#i),hs);console.log(`[ProductsStore] ${a.length} purchases modifiés récupérés`),a.forEach(s=>{if(s.status==="expense")this.#t.set(s.$id,s);else if(s.products?.length){const i=s.products.map(o=>typeof o=="string"?o:o.$id);this.#$(i,s)}})}this.#z(),await this.#B(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(e){throw console.error("[ProductsStore] Erreur lors du sync:",e),e}finally{b(this.#l,!1)}}}async#B(){if(this.#n)try{const e=new Map;this.#e.forEach((r,a)=>e.set(a,Sr(r.data))),await this.#n.saveProducts(e),await this.#n.saveMetadata({lastSync:n(this.#i),allDates:[...n(this.#a)],hugoContentHash:n(this.#f)}),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#Z(){if(this.#n)try{const e=new Map;this.#e.forEach((r,a)=>e.set(a,Sr(r.data))),await this.#n.saveProducts(e),await this.#n.updateLastSync(n(this.#i)),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#C(){if(this.#n)try{const e=new Map;this.#e.forEach((r,a)=>e.set(a,Sr(r.data))),await this.#n.saveProducts(e),await this.#n.updateLastSync(n(this.#i)),await this.#n.updateAllDates([...n(this.#a)]),await this.#n.updateHugoContentHash(n(this.#f)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(e){console.error("[ProductsStore] Erreur persistance cache complet:",e)}}async#P(e){if(!(!this.#n||e.length===0))try{const r=e.map(a=>this.#e.get(a)?.data).filter(a=>a!=null).map(a=>this.#n.upsertProduct(Sr(a)));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#z(){b(this.#i,new Date().toISOString(),!0)}async#I(){if(!n(this.#o)||n(this.#c))return!1;try{const e=await Pc(n(this.#f),n(this.#o));return e&&!n(this.#m)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${n(this.#o)}, analyse approfondie en cours...`),b(this.#m,!0),await this.#U()),b(this.#q,new Date,!0),e}catch(e){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",e),!1}}async#U(){if(!n(this.#o)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const e=await vs(n(this.#o)),r=new Map;this.#e.forEach((s,i)=>r.set(i,s.data));const a=await Mc(r,e);if(console.log(`[ProductsStore  - hugo change] ${a.summary}`),a.overrideConflicts.length>0&&(b(this.#x,a.overrideConflicts,!0),$t.error(`${a.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>Nr.modalOverride.isOpen=!0}})),a.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${a.mergedProductsUpdated.length} produits fusionnés modifiés`),a.removed.length>0){const s=a.removed.filter(i=>i.purchases?.length||i.stockReel||i.who?.length);s.length>0&&console.log(`[ProductsStore] ℹ️ ${s.length} ingrédients supprimés conservés (données utilisateur)`)}b(this.#a,[...e.allDates],!0),b(this.#f,e.hugoContentHash,!0),this.initializeDateRange(),await this.#C(),(a.added.length||a.updated.length||a.removed.length)&&$t.success(a.summary),b(this.#m,!1)}catch(e){console.error("[ProductsStore] Erreur sync Hugo:",e),$t.error("Erreur lors de la mise à jour Hugo")}}#H(){this.#p&&clearInterval(this.#p),this.#p=setInterval(async()=>{await this.#I()},6e4)}#W(){this.#p&&(clearInterval(this.#p),this.#p=null)}#O(e,r){return r?la(e,r):mc(e)}#X(e){e.length&&(e.forEach(r=>this.#w(r)),console.log(`[ProductsStore] ${e.length} produits upserted`))}#w(e){const r=this.#e.get(e.$id),a=this.#O(e,r?.data);r?r.update(a):this.#e.set(e.$id,new ca(a,()=>this.dateRange,()=>n(this.#a)))}#Q(e){this.#e.delete(e)}async#G(e){if(!e.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",e.$id),[];const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#J(r,e),r}async#V(e){if(e.products?.length){const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#$(r,e),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Do([e.$id]);if(r?.products?.length){const a=r.products.map(s=>typeof s=="string"?s:s.$id).filter(Boolean);return this.#$(a,r),a}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#K(e){const r=Array.from(this.#e.values()).map(a=>a.data).filter(a=>a.purchases?.some(s=>s.$id===e));return r.forEach(a=>{this.#w(a)}),r.map(a=>a.$id)}#J(e,r){const a=Yn(r),s=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,u=l.purchases||[];if(!u.some(h=>h.$id===a.$id)){const h=la({...l,purchases:[...u,a],status:"active"},l);s.push(h)}}}),s.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#$(e,r){const a=Yn(r),s=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,u=l.purchases||[],h=u.findIndex(v=>v.$id===a.$id);if(h>=0){const v=[...u];v[h]=a;const g=la({...l,purchases:v,status:"active"},l);s.push(g)}else{const v=la({...l,purchases:[...u,r],status:"active"},l);s.push(v)}}}),s.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#F(){return{onProductCreate:e=>{if(this.#w(e),this.#n){const r=this.#e.get(e.$id);r&&this.#n.upsertProduct(Sr(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductUpdate:e=>{if(this.#w(e),this.#n){const r=this.#e.get(e.$id);r&&this.#n.upsertProduct(Sr(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductDelete:e=>{this.#Q(e),this.#n&&this.#n.deleteProduct(e).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}const r=await this.#G(e);await this.#P(r)},onPurchaseUpdate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}this.#t.has(e.$id)&&this.#t.delete(e.$id);const r=await this.#V(e);await this.#P(r)},onPurchaseDelete:async e=>{if(this.#t.has(e)){this.#t.delete(e);return}const r=await this.#K(e);await this.#P(r)},onConnect:()=>{b(this.#v,!0)},onDisconnect:()=>{b(this.#v,!1)},onError:e=>{console.error("[ProductsStore] Erreur realtime:",e)}}}setSearchQuery=tc(e=>{n(this.#r).searchQuery=e},()=>500);toggleProductType(e){const r=n(this.#r).selectedProductTypes.indexOf(e);r>-1?n(this.#r).selectedProductTypes.splice(r,1):n(this.#r).selectedProductTypes.push(e)}toggleTemperature(e){const r=n(this.#r).selectedTemperatures.indexOf(e);r>-1?n(this.#r).selectedTemperatures.splice(r,1):n(this.#r).selectedTemperatures.push(e)}clearTypeAndTemperatureFilters(){n(this.#r).selectedProductTypes=[],n(this.#r).selectedTemperatures=[]}setGroupBy(e){n(this.#r).groupBy=e}toggleStore(e){const r=n(this.#r).selectedStores.indexOf(e);r>-1?n(this.#r).selectedStores.splice(r,1):n(this.#r).selectedStores.push(e)}toggleWho(e){const r=n(this.#r).selectedWho.indexOf(e);r>-1?n(this.#r).selectedWho.splice(r,1):n(this.#r).selectedWho.push(e)}clearStoreFilters(){n(this.#r).selectedStores=[]}clearWhoFilters(){n(this.#r).selectedWho=[]}handleSort(e){n(this.#r).sortColumn===e?n(this.#r).sortDirection=n(this.#r).sortDirection==="asc"?"desc":"asc":(n(this.#r).sortColumn=e,n(this.#r).sortDirection="asc")}clearFilters(){b(this.#r,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(e){return n(this.#r).sortColumn?[...e].sort((r,a)=>{let s=r[n(this.#r).sortColumn],i=a[n(this.#r).sortColumn];return n(this.#r).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,i=parseFloat(i)||0):n(this.#r).sortColumn==="purchases"&&(s=r.purchases?.length||0,i=a.purchases?.length||0),s<i?n(this.#r).sortDirection==="asc"?-1:1:s>i?n(this.#r).sortDirection==="asc"?1:-1:0}):e}getEnrichedProductById(e){return this.#e.get(e)?.data??null}getProductModelById(e){return this.#e.get(e)??null}hasConversions(e){const r=this.#e.get(e)?.data;return r?.byDate?ho(r.byDate):!1}async forceReload(e,r){await this.clearCache(),await this.initialize(e,r)}async clearCache(){this.#e.clear(),b(this.#a,[],!0),b(this.#i,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(e,r){const a=r?"isSyncing":"active";e.forEach(s=>{const i=this.#e.get(s);if(i){const o={...i.data,status:a};i.update(o)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${e.length} produits → ${a}`)}clearSyncStatus(){const e=[];for(const[r,a]of this.#e)a.status==="isSyncing"&&e.push(r);e.length>0&&(this.setSyncStatus(e,!1),console.log(`[ProductsStore] Nettoyage de ${e.length} produits en statut "isSyncing"`))}destroy(){this.#y?.(),this.#y=null,this.#W(),this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}async#Y(){if(n(this.#s))try{const{loadOrphanPurchases:e}=await an(async()=>{const{loadOrphanPurchases:a}=await Promise.resolve().then(()=>ds);return{loadOrphanPurchases:a}},void 0),r=await e(n(this.#s));r.forEach(a=>{this.#t.set(a.$id,a)}),console.log(`[ProductsStore] ${r.length} dépenses globales chargées`)}catch(e){console.error("[ProductsStore] Erreur chargement dépenses globales:",e)}}#R=Z(()=>{let e=0;const r={},a={},s=[];for(const i of this.#t.values()){const o=i.invoiceTotal||i.price||0;e+=o;const l=i.store||"Non défini";r[l]=(r[l]||0)+o;const u=i.who||"Non défini";a[u]=(a[u]||0)+o,s.push(i)}for(const i of this.#e.values()){const o=i.data;if(o.purchases&&o.purchases.length>0){for(const l of o.purchases)if(l.price){e+=l.price;const u=l.store||"Non défini";r[u]=(r[u]||0)+l.price;const h=l.who||"Non défini";a[h]=(a[h]||0)+l.price;const v={...l,_productName:o.productName};s.push(v)}}}return s.sort((i,o)=>{const l=new Date(i.orderDate||i.$createdAt).getTime();return new Date(o.orderDate||o.$createdAt).getTime()-l}),{totalGlobal:e,byStore:r,byWho:a,allPurchases:s}});get financialStats(){return n(this.#R)}set financialStats(e){b(this.#R,e)}}const J=new Rc;function ps(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const e=new URLSearchParams(window.location.search).get("listId");if(!e||!e.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return e.trim()}function qc(t){const e=t.substring(0,4),r=t.slice(-10);return`${e}_${r}`}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const jc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Lc=Sl("<svg><!><!></svg>");function me(t,e){X(e,!0);const r=ve(e,"color",3,"currentColor"),a=ve(e,"size",3,24),s=ve(e,"strokeWidth",3,2),i=ve(e,"absoluteStrokeWidth",3,!1),o=ve(e,"iconNode",19,()=>[]),l=fe(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=Lc();tn(u,g=>({...jc,...l,width:a(),height:a(),stroke:r(),"stroke-width":g,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>i()?Number(s())*24/Number(a()):s()]);var h=c(u);rt(h,17,o,Mr,(g,m)=>{var p=Z(()=>ga(n(m),2));let _=()=>n(p)[0],x=()=>n(p)[1];var w=te(),$=R(w);Tl($,_,!0,(C,S)=>{tn(C,()=>({...x()}))}),f(g,w)});var v=d(h);de(v,()=>e.children??ue),f(t,u),ee()}function zo(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];me(t,ge({name:"archive"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Uo(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];me(t,ge({name:"badge-euro"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Bc(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];me(t,ge({name:"bean"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function zc(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];me(t,ge({name:"beef"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Uc(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];me(t,ge({name:"candy-cane"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Hc(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];me(t,ge({name:"carrot"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Dr(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20 6 9 17l-5-5"}]];me(t,ge({name:"check"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Wc(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];me(t,ge({name:"chef-hat"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Ho(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m6 9 6 6 6-6"}]];me(t,ge({name:"chevron-down"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Qc(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];me(t,ge({name:"circle-alert"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Gc(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];me(t,ge({name:"circle-arrow-down"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Vc(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];me(t,ge({name:"circle-arrow-right"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function gs(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];me(t,ge({name:"circle-check-big"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Kc(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];me(t,ge({name:"circle-check"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Jc(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];me(t,ge({name:"circle-x"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Fc(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];me(t,ge({name:"clipboard-check"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function ms(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];me(t,ge({name:"clipboard-pen-line"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Yc(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];me(t,ge({name:"clock"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Zc(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];me(t,ge({name:"cloud"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function An(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];me(t,ge({name:"cooking-pot"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Xc(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];me(t,ge({name:"egg"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function eu(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];me(t,ge({name:"euro"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function ua(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];me(t,ge({name:"funnel-x"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Wo(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];me(t,ge({name:"funnel"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Qo(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];me(t,ge({name:"history"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function tu(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];me(t,ge({name:"info"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function ru(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];me(t,ge({name:"layout-list"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function au(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];me(t,ge({name:"leaf"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function nu(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];me(t,ge({name:"list-todo"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Go(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];me(t,ge({name:"loader-circle"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function su(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];me(t,ge({name:"lock"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function ou(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];me(t,ge({name:"log-in"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function iu(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];me(t,ge({name:"message-circle-more"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function lu(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];me(t,ge({name:"message-circle-question-mark"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Vo(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];me(t,ge({name:"moon"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function cu(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];me(t,ge({name:"package-check"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function uu(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];me(t,ge({name:"package-plus"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Ra(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];me(t,ge({name:"package"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function du(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];me(t,ge({name:"pen-line"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Ko(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];me(t,ge({name:"pencil-line"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Tn(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];me(t,ge({name:"plus"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function vu(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];me(t,ge({name:"refresh-cw"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function fu(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];me(t,ge({name:"refrigerator"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function hu(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];me(t,ge({name:"save"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function pu(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];me(t,ge({name:"search"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Jo(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];me(t,ge({name:"shopping-basket"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function vr(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];me(t,ge({name:"shopping-cart"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Mn(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];me(t,ge({name:"snowflake"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function ya(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];me(t,ge({name:"square-pen"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function lr(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];me(t,ge({name:"store"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Fo(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];me(t,ge({name:"sun"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function gu(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];me(t,ge({name:"tag"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Yo(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];me(t,ge({name:"thermometer"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function aa(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];me(t,ge({name:"triangle-alert"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Zo(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];me(t,ge({name:"user-plus"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Nn(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];me(t,ge({name:"user"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function pa(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];me(t,ge({name:"users"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function mu(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];me(t,ge({name:"utensils"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function Ct(t,e){X(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=fe(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];me(t,ge({name:"x"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);de(l,()=>e.children??ue),f(s,o)},$$slots:{default:!0}})),ee()}function _u(t,e){const r=t.reduce((s,i)=>{const o=i.isSynced?0:1,l=i.missingQuantities.length;return s+o+l},0),a=e.invoiceTotal?1:0;return r+a}async function bu(t,e){const r=t.filter(u=>!u.isSynced).map(u=>({productId:u.productId,productData:u.productData}));let a=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");a=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(u){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",u)}const s=e.purchaseStatus||"delivered";let i=e.purchaseDeliveryDate||null;s==="delivered"&&!i&&(i=new Date().toISOString());const o=t.flatMap(u=>u.missingQuantities.map(h=>({productId:u.productId,quantity:h.q,unit:h.u,status:s,notes:e.notes||"",store:e.store||"",who:e.who||void 0,price:void 0,orderDate:null,deliveryDate:i,createdBy:a})));return{mainId:t[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:o},invoiceData:e}}async function yu(t,e,r){if(!e?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};e.forEach(m=>{m.productData&&(m.productData.mainId=t)});const a=_u(e,r);console.log(`[Appwrite Interactions] Achat groupé: ${e.length} produits, ${a} opérations totales`);const s=100,i=[];if(a<=s)i.push(e);else{let m=[],p=0;for(const _ of e){const x=(_.isSynced?0:1)+_.missingQuantities.length;p+x>s?(m.length>0&&i.push(m),m=[_],p=x):(m.push(_),p+=x)}m.length>0&&i.push(m)}console.log(`[Appwrite Interactions] Découpage en ${i.length} lots pour respecter la limite de 100 opérations`);const o=[];let l=0,u=0,h=0;for(let m=0;m<i.length;m++){const p=i[m];console.log(`[Appwrite Interactions] Exécution du lot ${m+1}/${i.length} (${p.length} produits)`);try{const _=await bu(p,r),x=await wu(_);if(o.push(x),x.success)l+=x.productsCreated,u+=x.purchasesCreated,h+=x.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${m+1}: ${x.error}`);break}}catch(_){const x=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${m+1}:`,_),o.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:x,timestamp:new Date().toISOString()});break}}const v=o.every(m=>m.success),g=o.some(m=>!m.success);return{success:v,results:o,totalProductsCreated:l,totalPurchasesCreated:u,totalExpensesCreated:h,error:g?"Un ou plusieurs lots ont échoué":void 0}}async function wu(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"createGroupPurchaseWithSync",data:t};console.log(`[Appwrite Interactions] Exécution du lot: ${t.batchData.productsToCreate.length} produits à créer, ${t.batchData.purchasesToCreate.length} achats à créer`);const s=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST");if(s.status!=="completed")throw new Error(`Exécution échouée avec statut: ${s.status}. Erreur: ${s.stderr}`);const i=JSON.parse(s.responseBody);return i.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${i.productsCreated} produits créés, ${i.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur exécution lot:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:t.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var Su=(t,e,r)=>e(n(r).id),xu=y("<span> </span>"),Pu=y('<button><!> <span class="max-w-32 truncate"> </span> <!> <!></button>'),$u=y('<span class="flex items-center gap-1"><!> </span>'),ku=y('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Eu=y('<div class="flex flex-wrap gap-2"></div> <!>',1);function Yr(t,e){X(e,!0);let r=ve(e,"badgeSize",3,"btn-lg"),a=ve(e,"color",3,"primary"),s=ve(e,"badgeStyle",3,""),i=ve(e,"onToggleItem",3,()=>{}),o=ve(e,"showStats",3,!1),l=ve(e,"showIcon",3,!0),u=H(Re({}));It(()=>{const w={};e.items.forEach($=>{w[$.id]=$.selected??!0}),b(u,w,!0)});function h(w){n(u)[w]=!n(u)[w],i()(w)}const v=Z(()=>Object.values(n(u)).filter(Boolean).length),g=Z(()=>Object.values(n(u)).filter(w=>!w).length);var m=Eu(),p=R(m);rt(p,21,()=>e.items,w=>w.id,(w,$)=>{const C=Z(()=>n(u)[n($).id]);var S=Pu();S.__click=[Su,h,$];var E=c(S);{var P=U=>{var ie=te(),L=R(ie);dr(L,()=>n($).icon,(Y,W)=>{W(Y,{class:"h-3 w-3",get title(){return n($).title}})}),f(U,ie)};k(E,U=>{n($).icon&&U(P)})}var M=d(E,2),A=c(M),D=d(M,2);{var N=U=>{var ie=xu(),L=c(ie);O(()=>{Ne(ie,1,`badge badge-sm badge-${a()??""}`),I(L,n($).badge)}),f(U,ie)};k(D,U=>{n($).badge&&U(N)})}var V=d(D,2);{var j=U=>{var ie=te(),L=R(ie);{var Y=G=>{Dr(G,{size:16})},W=G=>{Tn(G,{size:16})};k(L,G=>{n(C)?G(Y):G(W,!1)})}f(U,ie)};k(V,U=>{l()&&U(j)})}O(()=>{Ne(S,1,`btn ${r()??""} btn-${a()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${n(C)?`${s()} hover:line-through `:"btn-dash hover:border-solid "}`),rr(S,"title",n(C)?"Retirer de la liste":"Réajouter à la liste"),I(A,n($).label)}),f(w,S)});var _=d(p,2);{var x=w=>{var $=ku(),C=c($),S=c(C),E=c(S);Dr(E,{class:"text-success h-3 w-3"});var P=d(E),M=d(S,2);{var A=V=>{var j=$u(),U=c(j);Ct(U,{class:"text-error h-3 w-3"});var ie=d(U);O(()=>I(ie,` ${n(g)??""} retirés`)),f(V,j)};k(M,V=>{n(g)>0&&V(A)})}var D=d(C,2),N=c(D);O(()=>{I(P,` ${n(v)??""} actifs`),I(N,`Total: ${e.items.length??""} items`)}),f(w,$)};k(_,w=>{o()&&w(x)})}f(t,m),ee()}Ke(["click"]);function Au(t,e){b(e,!n(e))}var Tu=y('<span class="text-base-content font-semibold"> </span>'),Mu=y('<div class="text-base-content/80 flex-1"> </div>'),Nu=y('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Du=y('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Cu=y('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Xo(t,e){let r=ve(e,"icon",3,tu),a=ve(e,"class",3,""),s=ve(e,"initiallyOpen",3,!1),i=r(),o=H(Re(s())),l=Re(e.children);var u=Cu(),h=c(u);h.__click=[Au,o];var v=c(h),g=c(v);i(g,{size:24,class:"text-base-content me-4 flex-shrink-0"});var m=d(g,2);{var p=E=>{var P=Tu(),M=c(P);O(()=>I(M,e.title)),f(E,P)};k(m,E=>{e.title&&E(p)})}var _=d(v,2);{var x=E=>{var P=Mu(),M=c(P);O(()=>I(M,e.contentVisible)),f(E,P)};k(_,E=>{e.contentVisible&&E(x)})}var w=d(_,2);{var $=E=>{var P=Nu(),M=c(P),A=c(M);{var D=j=>{var U=At("en savoir plus");f(j,U)},N=j=>{var U=At("masquer");f(j,U)};k(A,j=>{n(o)?j(N,!1):j(D)})}var V=d(M,2);{let j=Z(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${n(o)?"rotate-180":""}`);Ho(V,{get class(){return n(j)}})}f(E,P)};k(w,E=>{l&&E($)})}var C=d(h,2);{var S=E=>{var P=Du(),M=c(P),A=c(M);de(A,()=>e.children??ue),O(()=>Ne(P,1,`overflow-hidden transition-all duration-200 ${n(o)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),f(E,P)};k(C,E=>{l&&E(S)})}O(()=>{Ne(u,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${a()}`),io(u,e.style),Ne(h,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),rr(h,"aria-expanded",n(o))}),f(t,u)}Ke(["click"]);var Iu=y('<div class="mb-1 text-xs opacity-70"> </div>'),Ou=(t,e,r)=>e(n(r)),Ru=y("<button><!> </button>"),qu=y('<div><!> <div class="ms-1 flex flex-wrap items-center gap-1"><!> <!></div></div>');function Dn(t,e){X(e,!0);let r=ve(e,"maxSuggestions",3,8),a=ve(e,"buttonSize",3,"btn-xs"),s=ve(e,"buttonVariant",3,"btn-soft"),i=ve(e,"disabled",3,!1);const o=Z(()=>e.suggestions.slice(0,r()));function l(g){!i()&&!g.disabled&&e.onSuggestionClick(g)}var u=te(),h=R(u);{var v=g=>{var m=qu(),p=c(m);{var _=C=>{var S=Iu(),E=c(S);O(()=>I(E,e.title)),f(C,S)};k(p,C=>{e.title&&C(_)})}var x=d(p,2),w=c(x);Ko(w,{class:"text-base-content/70 mr-1",size:14});var $=d(w,2);rt($,17,()=>n(o),C=>C.id,(C,S)=>{var E=Ru();E.__click=[Ou,l,S];var P=c(E);{var M=D=>{var N=te(),V=R(N);dr(V,()=>n(S).icon,(j,U)=>{U(j,{class:"h-3 w-3"})}),f(D,N)};k(P,D=>{n(S).icon&&D(M)})}var A=d(P);O(()=>{Ne(E,1,`btn btn-primary ${a()??""} ${s()??""}`),E.disabled=i()||n(S).disabled,rr(E,"title",n(S).disabled?"Déjà sélectionné":n(S).label),I(A,` ${n(S).label??""}`)}),f(C,E)}),f(g,m)};k(h,g=>{n(o).length>0&&g(v)})}f(t,u),ee()}Ke(["click"]);const ju=[{value:"kg",label:"kg"},{value:"gr.",label:"gr."},{value:"l.",label:"l."},{value:"ml",label:"ml"},{value:"unité",label:"unité·s"},{value:"bottes",label:"botte·s"}];var Lu=y("<option> </option>"),Bu=y('<fieldset class="fieldset"><div class="flex gap-2"><label class="input w-32"><!> <input type="number" step="1" min="0" placeholder="Quantité" required/></label> <select class="custom-select input w-28" required><option disabled selected>Unité</option><!></select></div></fieldset>');function Cn(t,e){X(e,!0);let r=ve(e,"quantity",15),a=ve(e,"unit",15),s=ve(e,"disabled",3,!1);var i=Bu(),o=c(i),l=c(o),u=c(l);Ra(u,{class:"h-4 w-4 opacity-50"});var h=d(u,2),v=d(l,2),g=c(v);g.value=g.__value="";var m=d(g);rt(m,17,()=>ju,Mr,(p,_)=>{let x=()=>n(_).value,w=()=>n(_).label;var $=Lu(),C=c($),S={};O(()=>{I(C,w()),S!==(S=x())&&($.value=($.__value=x())??"")}),f(p,$)}),O(()=>{h.disabled=s(),v.disabled=s()}),Ve(h,r),Fr(v,a),f(t,i),ee()}var zu=y('<div><label class="input w-72"><!> <input/></label> <!></div>');function qr(t,e){X(e,!0);let r=ve(e,"value",15),a=ve(e,"suggestions",19,()=>[]),s=ve(e,"disabled",3,!1),i=ve(e,"flexCol",3,!1),o=fe(e,["$$slots","$$events","$$legacy","value","suggestions","disabled","flexCol"]);const l=Z(()=>a().map(_=>({id:_,label:_,disabled:_===r()})));var u=zu(),h=c(u),v=c(h);lr(v,{class:"h-4 w-4 opacity-50"});var g=d(v,2);tn(g,()=>({type:"text",placeholder:"Magasin",maxlength:"50",disabled:s(),...o}),void 0,void 0,void 0,!0);var m=d(h,2);{var p=_=>{Dn(_,{get suggestions(){return n(l)},onSuggestionClick:x=>r(x.label),buttonSize:"btn-xs"})};k(m,_=>{a().length>0&&_(p)})}O(()=>Ne(u,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`)),Ve(g,r),f(t,u),ee()}var Uu=y('<div><label class="input w-72"><!> <input type="text" placeholder="Qui" maxlength="25"/></label> <!></div>');function na(t,e){X(e,!0);let r=ve(e,"value",15),a=ve(e,"suggestions",19,()=>[]),s=ve(e,"disabled",3,!1),i=ve(e,"flexCol",3,!1);const o=Z(()=>a().map(p=>({id:p,label:p,disabled:p===r()})));var l=Uu(),u=c(l),h=c(u);Nn(h,{class:"h-4 w-4 opacity-50"});var v=d(h,2);v.__keydown=function(...p){e.onkeydown?.apply(this,p)};var g=d(u,2);{var m=p=>{Dn(p,{get suggestions(){return n(o)},onSuggestionClick:_=>r(_.label),buttonSize:"btn-xs"})};k(g,p=>{a().length>0&&p(m)})}O(()=>{Ne(l,1,`flex ${i()?"flex-col":"flex-wrap"} items-baseline gap-x-4 gap-y-1`),v.disabled=s()}),Ve(v,r),f(t,l),ee()}Ke(["keydown"]);var Hu=y('<textarea class="textarea w-full text-sm" placeholder="Commentaire (optionnel)" rows="2" maxlength="250"></textarea>');function jr(t,e){X(e,!0);let r=ve(e,"value",15),a=ve(e,"disabled",3,!1);var s=Hu();O(()=>s.disabled=a()),Ve(s,r),f(t,s),ee()}var Wu=y('<label class="input w-28"><!> <input type="number" step="1" min="0" placeholder="0.00"/></label>');function In(t,e){X(e,!0);let r=ve(e,"value",15),a=ve(e,"disabled",3,!1);var s=Wu(),i=c(s);eu(i,{class:"h-4 w-4 opacity-50"});var o=d(i,2);O(()=>o.disabled=a()),Ve(o,r),f(t,s),ee()}var Qu=y('<label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label>'),Gu=y(`<div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Acheté</option><option>Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div>`);function ei(t,e){X(e,!0);let r=ve(e,"status",15),a=ve(e,"deliveryDate",15),s=ve(e,"disabled",3,!1);var i=Gu(),o=c(i),l=c(o),u=c(l);u.value=u.__value="delivered";var h=d(u);h.value=h.__value="ordered";var v=d(l,2),g=d(o,2);{var m=p=>{var _=Qu(),x=d(c(_),2);O(()=>x.disabled=s()),Ve(x,a),f(p,_)};k(g,p=>{r()==="ordered"&&p(m)})}O(()=>{l.disabled=s(),Ne(v,1,`label ${r()==="delivered"?"":"hidden"}`)}),Fr(l,r),f(t,i),ee()}async function Vu(t,e,r,a,s,i,o,l){if(!(!n(e)||n(r))){b(r,!0),b(a,null),b(s,null);try{const u=`FACTURE_${Date.now()}`,h=n(i).map(p=>p.$id);J.setSyncStatus(h,!0);const v=[];for(const p of n(i)){const x=(J.getProductModelById(p.$id)?.stats.missingQuantities||[]).filter(w=>w.q<0).map(w=>({...w,q:Math.abs(w.q)}));v.push({productId:p.$id,isSynced:p.isSynced,productData:p,missingQuantities:x})}const g={invoiceId:u,invoiceTotal:o.expense||void 0,store:o.store.trim()||void 0,notes:o.notes||`Achat groupé pour ${n(i).length} produits`,who:o.who.trim()||void 0,purchaseStatus:o.status||"delivered",purchaseDeliveryDate:o.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${v.length} produits...`),l.onClose();const m=await yu(J.currentMainId,v,g);if(m.success)b(s,{purchases:m.totalPurchasesCreated,expense:m.totalExpensesCreated>0,batches:m.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${m.totalProductsCreated} produits synchronisés, ${m.totalPurchasesCreated} achats créés, ${m.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(m.error||"Erreur lors de la création de l'achat groupé")}catch(u){const h=u instanceof Error?u.message:"Erreur inconnue";b(a,h,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",u),J.clearSyncStatus()}finally{b(r,!1)}}}function _s(t,e,r){n(e)||r.onClose()}var Ku=y('<div class="alert alert-error"><!> <span> </span></div>'),Ju=y('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),Fu=y(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes <strong>pour la période sélectionnée</strong>, c'est à dire le besoin total pour chaque produit sur cette
            période moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),Yu=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Zu=y("<!> ",1),Xu=y(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><!> <!> <!></div> <!> <div><!></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function ed(t,e){X(e,!0);let r=H(!1),a=H(null),s=H(null),i=Re({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),o=H(Re(new Set));It(()=>{b(o,new Set(e.products.map(T=>T.$id)),!0)});const l=Z(()=>e.products.filter(T=>n(o).has(T.$id))),u=Z(()=>n(l).length!==0),h=Z(()=>{const T=J.dateRange;let ne="";return T?.start&&T?.end&&(T.start===T.end?ne=` - ${Vr(T.start)}`:ne=` - Du ${Vr(T.start)} au ${Vr(T.end)}`),`Achat groupé (${n(l).length} produits sélectionnés)${ne}`});function v(T){const ne=new Set(n(o));ne.has(T)?ne.delete(T):ne.add(T),b(o,ne,!0)}const g=Z(()=>e.products.map(T=>{const ne=J.getProductModelById(T.$id);return{id:T.$id,label:T.productName,title:`${T.productName} - Manque: ${ne?.stats.formattedMissingQuantities||"-"}`,badge:ne?.stats.formattedMissingQuantities||"-"}}));var m=Xu(),p=c(m),_=c(p),x=c(_),w=c(x);vr(w,{class:"h-5 w-5"});var $=d(w),C=d(x,2);C.__click=[_s,r,e];var S=c(C);Ct(S,{class:"h-4 w-4"});var E=d(_,2),P=c(E);{var M=T=>{var ne=Ku(),z=c(ne);aa(z,{class:"h-4 w-4"});var se=d(z,2),ye=c(se);O(()=>I(ye,n(a))),f(T,ne)};k(P,T=>{n(a)&&T(M)})}var A=d(P,2);{var D=T=>{var ne=Ju(),z=c(ne);Dr(z,{class:"h-4 w-4"});var se=d(z,2),ye=c(se),Pe=d(ye);{var Q=ke=>{var He=At("+ 1 dépense globale");f(ke,He)};k(Pe,ke=>{n(s).expense&&ke(Q)})}var we=d(Pe,2);{var Oe=ke=>{var He=At();O(()=>I(He,`(traité en ${n(s).batches??""} lots)`)),f(ke,He)};k(we,ke=>{n(s).batches&&n(s).batches>1&&ke(Oe)})}O(()=>I(ye,`Achat groupé créé avec succès ! ${n(s).purchases??""} produit(s) validés `)),f(T,ne)};k(A,T=>{n(s)&&T(D)})}var N=d(A,2),V=c(N);Xo(V,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit sur la période sélectionnée.",class:"bg-base-200",children:(T,ne)=>{var z=Fu();f(T,z)},$$slots:{default:!0}});var j=d(N,2),U=d(c(j),2),ie=c(U);qr(ie,{get suggestions(){return J.uniqueStores},get disabled(){return n(r)},get value(){return i.store},set value(T){i.store=T}});var L=d(ie,2);na(L,{get suggestions(){return J.uniqueWho},get disabled(){return n(r)},get value(){return i.who},set value(T){i.who=T}});var Y=d(L,2);In(Y,{get disabled(){return n(r)},get value(){return i.expense},set value(T){i.expense=T}});var W=d(U,2);ei(W,{get disabled(){return n(r)},get status(){return i.status},set status(T){i.status=T},get deliveryDate(){return i.deliveryDate},set deliveryDate(T){i.deliveryDate=T}});var G=d(W,2),F=c(G);jr(F,{get disabled(){return n(r)},get value(){return i.notes},set value(T){i.notes=T}});var K=d(j,2),oe=d(c(K),2);Yr(oe,{get items(){return n(g)},onToggleItem:v,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var Se=d(K,2),xe=c(Se);xe.__click=[_s,r,e];var re=d(xe,2);re.__click=[Vu,u,r,a,s,l,i,e];var q=c(re);{var ae=T=>{var ne=Yu();f(T,ne)},pe=T=>{var ne=Zu(),z=R(ne);vr(z,{class:"h-4 w-4"});var se=d(z);O(()=>I(se,` Valider ${n(l).length??""} produit(s)`)),f(T,ne)};k(q,T=>{n(r)?T(ae):T(pe,!1)})}O(()=>{I($,` ${n(h)??""}`),C.disabled=n(r),xe.disabled=n(r),re.disabled=n(r)||!n(u)}),f(t,m),ee()}Ke(["click"]);function Va(t,e,r,a){e(!1),b(r,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0),b(a,null)}var td=y('<div class="alert alert-error text-sm"><!> <span> </span></div>'),rd=(t,e)=>e(!0),ad=y('<span class="loading loading-spinner"></span>'),nd=y('<span class="loading loading-spinner"></span>'),sd=y('<div role="dialog"><div class="modal-box relative w-10/12 max-w-5xl"><button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" aria-label="Fermer"><!></button> <h3 class="text-lg font-bold">Ajouter un produit</h3> <form class="mt-6 space-y-4"><!> <fieldset class="space-y-4"><div class="flex flex-wrap gap-4"><fieldset class="fieldset"><label class="input w-72"><!> <input id="product-name" type="text" placeholder="Nom du produit"/></label></fieldset> <!></div> <fieldset class="fieldset"><div class="flex flex-wrap items-baseline gap-2"><label class="input w-72"><!> <input id="product-type" type="text" placeholder="type / catégorie"/></label> <!></div></fieldset> <!> <!> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-success"/> <span class="label-text flex items-center gap-2"><!> Produit frais</span></label></fieldset> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-info"/> <span class="label-text flex items-center gap-2"><!> Produit surgelé</span></label></fieldset></fieldset> <div class="modal-action flex justify-between"><button type="button" class="btn btn-ghost">Annuler</button> <div class="flex gap-2"><button type="button" class="btn btn-secondary"><!> Ajouter et créer un nouveau</button> <button type="submit" class="btn btn-primary"><!> Ajouter et fermer</button></div></div></form></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></div>');function od(t,e){X(e,!0);let r=ve(e,"open",15,!1),a=H(!1),s=H(null),i=H(!1),o=H(Re({productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""}));const l=Z(()=>n(o).productName.trim().length>0&&n(o).productType.trim().length>0),u=Z(()=>J.uniqueProductTypes.map(_e=>({id:_e,label:_e})));async function h(_e=!1){if(!(!n(l)||n(a))){b(a,!0),b(s,null),b(i,!1);try{if(!J.currentMainId)throw new Error("Aucun événement principal sélectionné");const le={productName:n(o).productName.trim(),productType:n(o).productType.trim(),store:n(o).store.trim()?{storeName:n(o).store.trim()}:void 0,who:n(o).who.trim()?[n(o).who.trim()]:void 0,pFrais:n(o).pFrais,pSurgel:n(o).pSurgel,quantity:n(o).quantity?{q:n(o).quantity,u:n(o).unit.trim()||"pièces"}:void 0};await $o(le,J.currentMainId),b(i,!0),_e?(n(o).productName="",n(o).quantity=void 0,n(o).unit="",n(o).pFrais=!1,n(o).pSurgel=!1,setTimeout(()=>{document.getElementById("product-name")?.focus()},100)):(r(!1),b(o,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0))}catch(le){console.error("Error creating product:",le),b(s,"Erreur lors de la création du produit. Veuillez réessayer.")}finally{b(a,!1)}}}It(()=>{r()&&setTimeout(()=>{document.getElementById("product-name")?.focus()},50)});var v=sd();let g;var m=c(v),p=c(m);p.__click=[Va,r,o,s];var _=c(p);Ct(_,{size:20});var x=d(p,4),w=c(x);{var $=_e=>{var le=td(),$e=c(le);aa($e,{size:18});var Qe=d($e,2),Ze=c(Qe);O(()=>I(Ze,n(s))),f(_e,le)};k(w,_e=>{n(s)&&_e($)})}var C=d(w,2),S=c(C),E=c(S),P=c(E),M=c(P);uu(M,{class:"text-base-content/50 h-5 w-5"});var A=d(M,2),D=d(E,2);Cn(D,{get disabled(){return n(a)},get quantity(){return n(o).quantity},set quantity(_e){n(o).quantity=_e},get unit(){return n(o).unit},set unit(_e){n(o).unit=_e}});var N=d(S,2),V=c(N),j=c(V),U=c(j);gu(U,{class:"text-base-content/50 h-5 w-5"});var ie=d(U,2),L=d(j,2);Dn(L,{get suggestions(){return n(u)},onSuggestionClick:_e=>n(o).productType=_e.label,get disabled(){return n(a)}});var Y=d(N,2);qr(Y,{get suggestions(){return J.uniqueStores},get disabled(){return n(a)},get value(){return n(o).store},set value(_e){n(o).store=_e}});var W=d(Y,2);na(W,{get suggestions(){return J.uniqueWho},get disabled(){return n(a)},get value(){return n(o).who},set value(_e){n(o).who=_e}});var G=d(W,2),F=c(G),K=c(F),oe=d(K,2),Se=c(oe);Yo(Se,{class:"h-4 w-4"});var xe=d(G,2),re=c(xe),q=c(re),ae=d(q,2),pe=c(ae);Mn(pe,{class:"h-4 w-4"});var T=d(C,2),ne=c(T);ne.__click=[Va,r,o,s];var z=d(ne,2),se=c(z);se.__click=[rd,h];var ye=c(se);{var Pe=_e=>{var le=ad();f(_e,le)},Q=_e=>{Tn(_e,{size:18})};k(ye,_e=>{n(a)?_e(Pe):_e(Q,!1)})}var we=d(se,2),Oe=c(we);{var ke=_e=>{var le=nd();f(_e,le)};k(Oe,_e=>{n(a)&&_e(ke)})}var He=d(m,2),ot=c(He);ot.__click=[Va,r,o,s],O(_e=>{g=Ne(v,1,"modal",null,g,_e),C.disabled=n(a),A.disabled=n(a),ie.disabled=n(a),K.disabled=n(a),q.disabled=n(a),ne.disabled=n(a),se.disabled=n(a)||!n(o).productName,we.disabled=n(a)||!n(o).productName},[()=>({"modal-open":r()})]),ha("submit",x,_e=>{_e.preventDefault(),h(!1)}),Ve(A,()=>n(o).productName,_e=>n(o).productName=_e),Ve(ie,()=>n(o).productType,_e=>n(o).productType=_e),rn(K,()=>n(o).pFrais,_e=>n(o).pFrais=_e),rn(q,()=>n(o).pSurgel,_e=>n(o).pSurgel=_e),f(t,v),ee()}Ke(["click"]);function sn(t){switch(t.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Bc};case"animaux":return{displayName:"Viandes et Poissons",icon:zc};case"legumes":return{displayName:"Fruits et Légumes",icon:Hc};case"sucres":return{displayName:"Sucrées",icon:Uc};case"lof":return{displayName:"L.O.F",icon:Xc};case"autres":return{displayName:"Autres",icon:Wc};case"epices":return{displayName:"Assaisonnements",icon:au};case"frais":return{displayName:"Produits Frais",icon:fu};default:return{displayName:t,icon:Ra}}}function on(t,e){return e==="kg"?{quantity:t*1e3,unit:"gr."}:e==="l."?{quantity:t*1e3,unit:"ml"}:{quantity:t,unit:e}}function On(t,e){let r,a;if(e==="gr."&&t>=1e3){const s=t/1e3;r=Ka(s),a="kg"}else if(e==="ml"&&t>=1e3){const s=t/1e3;r=Ka(s),a="l"}else r=Ka(t),a=e;return`${r} ${a}`}function Ka(t){return(Math.round(t*10)/10).toString().replace(/\.0$/,"")}function qa(t){if(!t)return"-";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}function id(t){if(!t)return"";try{return new Date(t).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short"})}catch{return t}}function ln(t){switch(t){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function bs(t){return t?qa(t):"-"}function ld(t){if(!t?.length)return[];const e=t.reduce((r,a)=>{const s=a.status||"direct",i=a.unit||"unit",o=`${s}_${i}`;if(!r[o]){const l=ln(s);r[o]={status:s,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:cd(s),deliveryDate:s==="ordered"&&a.deliveryDate?id(a.deliveryDate):void 0}}return r[o].quantity+=a.quantity||0,r},{});return Object.values(e).map(r=>({...r,quantity:On(r.quantity,r.unit).replace(` ${r.unit}`,"")}))}function cd(t){switch(t){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"Check";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function ud(t){let e=H(!1),r=H(null);const a=Z(()=>(console.log(`[ProductModalState] Recalculating product ${t}`),J.getEnrichedProductById(t))),s=Z(()=>n(a)?.who??[]),i=Z(()=>n(a)?.stockParsed??null),o=Z(()=>n(a)?.purchases??[]),l=Z(()=>n(a)?.byDate?po(n(a).byDate):[]),u=Re({purchase:{quantity:null,unit:"",store:"",who:Nr.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let h=H(!1),v=H(null);It(()=>{!n(a)||n(h)||(u.purchase.quantity=n(a).missingQuantityArray[0]?.q??null,u.purchase.unit=n(a).totalNeededArray[0]?.u??"",u.purchase.store=n(a).storeInfo?.storeName??"",u.purchase.who=Nr.userName()??"",u.purchase.status=u.purchase.status||"delivered",u.stock.unit=n(a).totalNeededArray[0]?.u??"",u.store.name=n(a).storeInfo?.storeName??"",u.store.comment=n(a).storeInfo?.storeComment??null,u.who=n(a)?.who?[...n(a).who]:[],b(v,{purchase:{...u.purchase},stock:{...u.stock},store:{...u.store},whoList:[...u.who]},!0),b(h,!0))});const g=Z(()=>n(v)?{store:JSON.stringify(u.store)!==JSON.stringify(n(v).store),stock:m(),who:JSON.stringify(u.who)!==JSON.stringify(n(v).whoList)}:{store:!1,stock:!1,who:!1});function m(){return u.stock.quantity&&u.stock.quantity>0&&u.stock.unit?n(i)?u.stock.quantity.toString()!==n(i).quantity||u.stock.unit!==n(i).unit||(u.stock.notes||"")!==(n(i).notes||""):!0:!1}const p=Z(()=>!!(n(v)&&(n(g).store||n(g).stock||n(g).who)));let _=H(null);const x=Z(()=>n(_)?n(o).find(L=>L.$id===n(_))??null:null);async function w(L,Y){b(e,!0),b(r,null);try{const W=await L();return Y&&$("success",Y),W}catch(W){const G=W instanceof Error?W.message:"Une erreur est survenue";return b(r,G,!0),$("error",G),console.error("[ProductModalState]",W),null}finally{b(e,!1)}}function $(L,Y){const W=new CustomEvent("toast",{detail:{type:L,message:Y}});window.dispatchEvent(W)}async function C(){n(a)&&await w(async()=>{if(!u.purchase.quantity||!u.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!J.currentMainId)throw new Error("mainId non disponible");const{quantity:L,unit:Y}=on(u.purchase.quantity,u.purchase.unit);n(a).isSynced||(console.log(`[ProductModalState] Produit ${n(a).$id} local, création pour purchase...`),await Ht(n(a).$id,{},F=>J.getEnrichedProductById(F)));const W=u.purchase.status||"delivered";let G=u.purchase.deliveryDate||null;W==="delivered"&&!G&&(G=new Date().toISOString()),await Mo({products:[n(a).$id],mainId:J.currentMainId,unit:Y,quantity:L,store:u.purchase.store||null,who:u.purchase.who||null,notes:u.purchase.notes||"",price:u.purchase.price||null,status:W,orderDate:u.purchase.orderDate||null,deliveryDate:G}),u.purchase={quantity:n(a).missingQuantityArray[0]?.q??null,unit:n(a).totalNeededArray[0]?.u??"",store:u.purchase.store,who:u.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function S(L){b(_,L.$id,!0)}function E(){b(_,null)}async function P(L){L.$id&&await w(async()=>{const{quantity:Y,unit:W}=on(L.quantity,L.unit),G=L.status||null;let F=L.deliveryDate||null;G==="delivered"&&!F&&(F=new Date().toISOString()),await kn(L.$id,{unit:W,quantity:Y,store:L.store||null,who:L.who||null,notes:L.notes||"",price:L.price||null,status:G,orderDate:L.orderDate||null,deliveryDate:F}),b(_,null)},"Achat modifié avec succès")}async function M(L){const Y=n(o).find(W=>W.$id===L);Y&&confirm(`Supprimer cet achat (${Y.quantity} ${Y.unit}) ?`)&&await w(async()=>{await No(L)},"Achat supprimé avec succès")}async function A(){n(a)&&await w(async()=>{if(!u.stock.quantity||!u.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const L={quantity:u.stock.quantity.toString(),unit:u.stock.unit,notes:u.stock.notes,dateTime:u.stock.dateTime};n(a).isSynced?(console.log(`[ProductModalState] Produit ${n(a).$id} déjà sync, update stock normal...`),await nn(n(a).$id,JSON.stringify(L))):(console.log(`[ProductModalState] Produit ${n(a).$id} local, création stock avec upsert...`),await Ht(n(a).$id,{stockReel:JSON.stringify(L)},Y=>J.getEnrichedProductById(Y))),u.stock.quantity=null,u.stock.notes="",u.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function D(){n(a)&&confirm("Supprimer le stock actuel ?")&&await w(async()=>{n(a).isSynced?(console.log(`[ProductModalState] Produit ${n(a).$id} déjà sync, suppression stock normal...`),await nn(n(a).$id,null)):(console.log(`[ProductModalState] Produit ${n(a).$id} local, suppression stock avec upsert...`),await Ht(n(a).$id,{stockReel:null},L=>J.getEnrichedProductById(L)))},"Stock supprimé")}async function N(L){n(a)&&await w(async()=>{n(a).isSynced?(console.log(`[ProductModalState] Produit ${n(a).$id} déjà sync, setWho normal...`),await Eo(n(a).$id,L)):(console.log(`[ProductModalState] Produit ${n(a).$id} local, création who avec upsert...`),await Ht(n(a).$id,{who:L},Y=>J.getEnrichedProductById(Y)))},"Volontaires mis à jour")}async function V(L){n(a)&&await w(async()=>{n(a).isSynced?(console.log(`[ProductModalState] Produit ${n(a).$id} déjà sync, update store normal...`),await ko(n(a).$id,L)):(console.log(`[ProductModalState] Produit ${n(a).$id} local, création store avec upsert...`),await Ht(n(a).$id,{store:JSON.stringify(L)},Y=>J.getEnrichedProductById(Y)))},"Magasin mis à jour")}async function j(L){n(a)&&await w(async()=>{n(a).isSynced?await $n(n(a).$id,L,!0):(console.log(`[ProductModalState] Produit ${n(a).$id} local, création who avec upsert...`),await Ht(n(a).$id,{totalNeededOverride:JSON.stringify(L)},Y=>J.getEnrichedProductById(Y)))},"Override appliqué")}async function U(){n(a)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await w(async()=>{await Ao(n(a).$id,!0)},"Override supprimé")}async function ie(){!n(a)||!n(p)||await w(async()=>{const L={};if(n(g).stock&&u.stock.quantity&&u.stock.unit){const Y={quantity:u.stock.quantity.toString(),unit:u.stock.unit,notes:u.stock.notes,dateTime:u.stock.dateTime};L.stockReel=JSON.stringify(Y)}if(n(g).who&&(L.who=u.who),n(g).store){const Y={storeName:u.store.name||"",storeComment:u.store.comment||void 0};L.storeInfo=Y}Object.keys(L).length>0&&(await To(n(a).$id,L,Y=>J.getEnrichedProductById(Y)),b(v,{purchase:{...u.purchase},stock:{...u.stock},store:{...u.store},whoList:[...u.who]},!0))},"Modifications enregistrées")}return{get loading(){return n(e)},get error(){return n(r)},get product(){return n(a)},get recipes(){return n(l)},get whoList(){return n(s)},get stockParsed(){return n(i)},get purchasesList(){return n(o)},get editingPurchaseId(){return n(_)},get editingPurchaseData(){return n(x)},forms:u,addPurchase:C,startEditPurchase:S,cancelEditPurchase:E,updateEditedPurchase:P,removePurchase:M,setStock:A,removeStock:D,setWho:N,updateStore:V,setOverride:j,removeOverride:U,saveAllChanges:ie,get hasChanges(){return n(g)},get hasAnyChanges(){return n(p)},formatQuantity:On,formatDate:qa}}var dd=y('<div class="text-xs font-medium text-base-content/60 mb-1"> </div>'),vd=y('<div class="text-xs text-base-content/60 mt-1"> </div>'),fd=y('<div class="font-medium"> </div> <!>',1),hd=y('<pre class="text-xs"> </pre>'),pd=y('<span class="text-base-content/50 italic">Non défini</span>'),gd=y('<div class="bg-base-300/50 rounded p-2 text-left"><!> <div class="text-sm"><!></div></div>'),md=y('<div class="bg-base-200/50 border border-warning/20 rounded-lg p-4 text-center"><div class="flex items-center justify-center gap-2 mb-2"><!> <!> <span class="font-medium text-warning"> </span></div> <p class="text-sm text-base-content/70 mb-3"> </p> <!></div>');function ja(t,e){X(e,!0);let r=ve(e,"title",3,"Événement terminé"),a=ve(e,"message",3,"Cet événement est terminé. Ces données ne sont plus modifiables mais sont conservées pour consultation."),s=ve(e,"showData",3,!0),i=ve(e,"data",3,null),o=ve(e,"dataLabel",3,"");var l=md(),u=c(l),h=c(u);Qo(h,{class:"h-5 w-5 text-warning"});var v=d(h,2);su(v,{class:"h-4 w-4 text-warning/70"});var g=d(v,2),m=c(g),p=d(u,2),_=c(p),x=d(p,2);{var w=$=>{var C=gd(),S=c(C);{var E=N=>{var V=dd(),j=c(V);O(()=>I(j,`${o()??""} :`)),f(N,V)};k(S,N=>{o()&&N(E)})}var P=d(S,2),M=c(P);{var A=N=>{var V=At();O(()=>I(V,i())),f(N,V)},D=N=>{var V=te(),j=R(V);{var U=L=>{var Y=At();O(W=>I(Y,W),[()=>i().join(", ")]),f(L,Y)},ie=L=>{var Y=te(),W=R(Y);{var G=K=>{var oe=te(),Se=R(oe);{var xe=q=>{var ae=fd(),pe=R(ae),T=c(pe),ne=d(pe,2);{var z=se=>{var ye=vd(),Pe=c(ye);O(()=>I(Pe,i().storeComment)),f(se,ye)};k(ne,se=>{i().storeComment&&se(z)})}O(()=>I(T,i().storeName)),f(q,ae)},re=q=>{var ae=hd(),pe=c(ae);O(T=>I(pe,T),[()=>JSON.stringify(i(),null,2)]),f(q,ae)};k(Se,q=>{i().storeName?q(xe):q(re,!1)})}f(K,oe)},F=K=>{var oe=pd();f(K,oe)};k(W,K=>{typeof i()=="object"&&i()!==null?K(G):K(F,!1)},!0)}f(L,Y)};k(j,L=>{Array.isArray(i())&&i().length>0?L(U):L(ie,!1)},!0)}f(N,V)};k(M,N=>{typeof i()=="string"||typeof i()=="number"?N(A):N(D,!1)})}f($,C)};k(x,$=>{s()&&i()&&$(w)})}O(()=>{I(m,r()),I(_,a())}),f(t,l),ee()}function _d(t,e,r){e()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function bd(t,e,r){const a=e().editingPurchaseData;!a||!r(a)||e().updateEditedPurchase(a)}function yd(t,e){e().cancelEditPurchase()}var wd=y('<span class="loading loading-spinner loading-sm"></span>'),Sd=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="space-y-6"><div class="flex flex-wrap items-baseline gap-4"><!> <!> <!> <!></div> <div><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div>'),xd=y('<div class="mt-4 py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Pd=y("<th>Actions</th>"),$d=y('<span class="loading loading-spinner loading-sm"></span>'),kd=y('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="1" min="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="50"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Acheté</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Ed=(t,e,r)=>e(n(r)),Ad=(t,e,r)=>e(n(r).$id),Td=y('<span class="loading loading-spinner loading-sm"></span>'),Md=y('<td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td>'),Nd=y('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><!></tr>'),Dd=y('<div class="mt-4 overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><!></tr></thead><tbody></tbody></table></div>'),Cd=y('<div class="space-y-4"><!></div> <!>',1);function Id(t,e){X(e,!0);let r=ve(e,"modalState",7),a=ve(e,"isArchiveMode",3,!1);function s(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function i(w){return w.quantity!==null&&w.quantity!==0&&w.unit?.trim()!==""}function o(w){r().removePurchase(w)}function l(w){r().startEditPurchase(w)}var u=Cd(),h=R(u),v=c(h);{var g=w=>{ja(w,{title:"Achats non modifiables",message:"L'événement est terminé, les achats ne peuvent plus être ajoutés ou modifiés."})},m=w=>{var $=Sd(),C=c($),S=d(c(C),2),E=c(S),P=c(E);Cn(P,{get disabled(){return r().loading},get quantity(){return r().forms.purchase.quantity},set quantity(G){r().forms.purchase.quantity=G},get unit(){return r().forms.purchase.unit},set unit(G){r().forms.purchase.unit=G}});var M=d(P,2);In(M,{get disabled(){return r().loading},get value(){return r().forms.purchase.price},set value(G){r().forms.purchase.price=G}});var A=d(M,2);qr(A,{get suggestions(){return J.uniqueStores},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.store},set value(G){r().forms.purchase.store=G}});var D=d(A,2);na(D,{get suggestions(){return J.uniqueWho},get disabled(){return r().loading},flexCol:!0,get value(){return r().forms.purchase.who},set value(G){r().forms.purchase.who=G}});var N=d(E,2),V=c(N);jr(V,{get disabled(){return r().loading},get value(){return r().forms.purchase.notes},set value(G){r().forms.purchase.notes=G}});var j=d(N,2);ei(j,{get disabled(){return r().loading},get status(){return r().forms.purchase.status},set status(G){r().forms.purchase.status=G},get deliveryDate(){return r().forms.purchase.deliveryDate},set deliveryDate(G){r().forms.purchase.deliveryDate=G}});var U=d(S,2),ie=c(U);ie.__click=[_d,s,r];var L=c(ie);{var Y=G=>{var F=wd();f(G,F)},W=G=>{var F=At("Ajouter l'achat");f(G,F)};k(L,G=>{r().loading?G(Y):G(W,!1)})}O(G=>ie.disabled=G,[()=>r().loading||!s()]),f(w,$)};k(v,w=>{a()?w(g):w(m,!1)})}var p=d(h,2);{var _=w=>{var $=xd(),C=c($);vr(C,{class:"mx-auto mb-2 h-12 w-12"}),f(w,$)},x=w=>{var $=Dd(),C=c($),S=c(C),E=c(S),P=d(c(E),8);{var M=D=>{var N=Pd();f(D,N)};k(P,D=>{a()||D(M)})}var A=d(S);rt(A,21,()=>r().purchasesList,D=>D.$id,(D,N,V)=>{var j=te(),U=R(j);{var ie=Y=>{var W=kd(),G=c(W),F=c(G),K=c(F),oe=d(K,2),Se=c(oe);Se.value=Se.__value="kg";var xe=d(Se);xe.value=xe.__value="gr.";var re=d(xe);re.value=re.__value="l.";var q=d(re);q.value=q.__value="ml";var ae=d(q);ae.value=ae.__value="unité";var pe=d(ae);pe.value=pe.__value="bottes";var T=d(G),ne=c(T),z=d(T),se=c(z),ye=d(z),Pe=c(ye),Q=c(Pe);Q.value=Q.__value="ordered";var we=d(Q);we.value=we.__value="delivered";var Oe=d(ye),ke=c(Oe),He=d(Oe),ot=c(He),_e=d(He),le=c(_e),$e=d(_e),Qe=c($e),Ze=d($e),qe=c(Ze),Te=c(qe);Te.__click=[bd,r,i];var Xe=c(Te);{var be=Ee=>{var et=$d();f(Ee,et)},De=Ee=>{hu(Ee,{class:"h-3 w-3"})};k(Xe,Ee=>{r().loading?Ee(be):Ee(De,!1)})}var Ge=d(Te,2);Ge.__click=[yd,r];var Be=c(Ge);Ct(Be,{class:"h-3 w-3"}),O(Ee=>Te.disabled=Ee,[()=>r().loading||!i(n(N))]),Ve(K,()=>n(N).quantity,Ee=>n(N).quantity=Ee),Fr(oe,()=>n(N).unit,Ee=>n(N).unit=Ee),Ve(ne,()=>n(N).store,Ee=>n(N).store=Ee),Ve(se,()=>n(N).who,Ee=>n(N).who=Ee),Fr(Pe,()=>n(N).status,Ee=>n(N).status=Ee),Ve(ke,()=>n(N).orderDate,Ee=>n(N).orderDate=Ee),Ve(ot,()=>n(N).deliveryDate,Ee=>n(N).deliveryDate=Ee),Ve(le,()=>n(N).price,Ee=>n(N).price=Ee),Ve(Qe,()=>n(N).notes,Ee=>n(N).notes=Ee),f(Y,W)},L=Y=>{var W=Nd(),G=c(W),F=c(G),K=d(G),oe=c(K),Se=d(K),xe=c(Se),re=d(Se),q=c(re),ae=c(q),pe=d(re),T=c(pe),ne=d(pe),z=c(ne),se=d(ne),ye=c(se),Pe=d(se),Q=c(Pe),we=d(Pe);{var Oe=ke=>{var He=Md(),ot=c(He),_e=c(ot);_e.__click=[Ed,l,N];var le=c(_e);ya(le,{class:"h-4 w-4"});var $e=d(_e,2);$e.__click=[Ad,o,N];var Qe=c($e);{var Ze=Te=>{var Xe=Td();f(Te,Xe)},qe=Te=>{Ct(Te,{class:"h-4 w-4"})};k(Qe,Te=>{r().loading?Te(Ze):Te(qe,!1)})}O(()=>$e.disabled=r().loading),f(ke,He)};k(we,ke=>{a()||ke(Oe)})}O((ke,He,ot,_e,le)=>{I(F,ke),I(oe,n(N).store||"-"),I(xe,n(N).who||"-"),Ne(q,1,`badge badge-sm ${He??""}`),I(ae,ot),I(T,_e),I(z,le),I(ye,n(N).price?`${n(N).price}€`:"-"),I(Q,n(N).notes||"-")},[()=>On(n(N).quantity,n(N).unit),()=>ln(n(N).status).class,()=>ln(n(N).status).text,()=>bs(n(N).orderDate),()=>bs(n(N).deliveryDate)]),f(Y,W)};k(U,Y=>{r().editingPurchaseId===n(N).$id?Y(ie):Y(L,!1)})}f(D,j)}),f(w,$)};k(p,w=>{r().purchasesList.length===0?w(_):w(x,!1)})}f(t,u),ee()}Ke(["click"]);async function Od(t,e){await e()?.removeStock()}var Rd=y(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),qd=(t,e)=>{e().forms.stock.quantity=null,e().forms.store.comment=""},jd=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><!></div> <div><!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>'),Ld=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Bd=y('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),zd=y('<span class="loading loading-spinner loading-xs"></span>'),Ud=y('<div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div>'),Hd=y('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <!></div></div>'),Wd=y('<div class="space-y-4"><!></div> <!>',1);function Qd(t,e){X(e,!0);let r=ve(e,"modalState",7),a=ve(e,"isArchiveMode",3,!1);var s=Wd(),i=R(s),o=c(i);{var l=m=>{ja(m,{title:"Stock non modifiable",message:"L'événement est terminé, le stock ne peut plus être modifié.",get data(){return r().stockParsed},dataLabel:"Stock actuel"})},u=m=>{var p=jd(),_=c(p),x=c(_),w=c(x),$=d(x,2),C=c($);Xo(C,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(N,V)=>{var j=Rd();f(N,j)},$$slots:{default:!0}});var S=d($,2),E=c(S);Cn(E,{get disabled(){return r().loading},get quantity(){return r().forms.stock.quantity},set quantity(N){r().forms.stock.quantity=N},get unit(){return r().forms.stock.unit},set unit(N){r().forms.stock.unit=N}});var P=d(S,2),M=c(P);jr(M,{get disabled(){return r().loading},get value(){return r().forms.stock.notes},set value(N){r().forms.stock.notes=N}});var A=d(P,2),D=c(A);D.__click=[qd,r],O(N=>{I(w,`Déclarer le stock réel du ${N??""}`),D.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),f(m,p)};k(o,m=>{a()?m(l):m(u,!1)})}var h=d(i,2);{var v=m=>{var p=Ld(),_=c(p);zo(_,{class:"mx-auto mb-2 h-12 w-12"}),f(m,p)},g=m=>{var p=Hd(),_=c(p),x=d(c(_),2),w=c(x),$=d(c(w),2),C=c($),S=d(w,2),E=d(c(S),2),P=c(E),M=d(S,2);{var A=V=>{var j=Bd(),U=d(c(j),2),ie=c(U);O(()=>I(ie,r().stockParsed.notes)),f(V,j)};k(M,V=>{r().stockParsed.notes&&V(A)})}var D=d(x,2);{var N=V=>{var j=Ud(),U=c(j);U.__click=[Od,r];var ie=c(U);{var L=W=>{var G=zd();f(W,G)},Y=W=>{var G=At("Supprimer le stock");f(W,G)};k(ie,W=>{r().loading?W(L):W(Y,!1)})}O(()=>U.disabled=r().loading),f(V,j)};k(D,V=>{a()||V(N)})}O(V=>{I(C,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),I(P,V)},[()=>qa(r().stockParsed.dateTime)]),f(m,p)};k(h,m=>{r().stockParsed?m(g,!1):m(v)})}f(t,s),ee()}Ke(["click"]);function Gd(t,e,r){e().forms.who=[...e().whoList],b(r,"")}var Vd=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},Kd=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div>'),Jd=y('<div class="space-y-4"><!></div>');function Fd(t,e){X(e,!0);let r=ve(e,"modalState",7),a=ve(e,"isArchiveMode",3,!1),s=H("");const i=Z(()=>{const _=new Set([...J.uniqueWho,...r().forms.who]);return Array.from(_).map(x=>({id:x,label:x,selected:r().forms.who.includes(x)}))});function o(_){const x=_.trim();x&&!r().forms.who.includes(x)&&(r().forms.who=[...r().forms.who,x])}function l(_){r().forms.who=r().forms.who.filter(x=>x!==_)}function u(_){r().forms.who.includes(_)?l(_):o(_)}function h(){n(s).trim()&&(o(n(s)),b(s,""))}var v=Jd(),g=c(v);{var m=_=>{ja(_,{title:"Volontaires non modifiables",message:"L'événement est terminé, les volontaires assignés ne peuvent plus être modifiés."})},p=_=>{var x=Kd(),w=c(x),$=d(c(w),4),C=c($),S=c(C),E=c(S);Nn(E,{class:"h-4 w-4 opacity-50"});var P=d(E,2);P.__keydown=[Vd,h];var M=d(S,2);M.__click=h;var A=c(M);Zo(A,{size:16});var D=d(C,2),N=d(c(D),2);Yr(N,{get items(){return n(i)},onToggleItem:u,showIcon:!0,badgeSize:"btn-sm"});var V=d(w,2),j=c(V);j.__click=[Gd,r,s],O(U=>{P.disabled=r().loading,M.disabled=U,j.disabled=r().loading},[()=>r().loading||!n(s).trim()]),Ve(P,()=>n(s),U=>b(s,U)),f(_,x)};k(g,_=>{a()?_(m):_(p,!1)})}f(t,v),ee()}Ke(["keydown","click"]);var Yd=(t,e)=>{e().forms.store.name="",e().forms.store.comment=""},Zd=y(`<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`),Xd=y('<div class="space-y-4"><!></div>');function ev(t,e){X(e,!0);let r=ve(e,"modalState",7),a=ve(e,"isArchiveMode",3,!1);const s=Z(()=>r()?.hasChanges?.store||!1);async function i(){if(!n(s))return;const v={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(v)}var o=Xd(),l=c(o);{var u=v=>{{let g=Z(()=>r().product?.storeInfo);ja(v,{title:"Magasin non modifiable",message:"L'événement est terminé, les informations de magasin ne peuvent plus être modifiées.",get data(){return n(g)},dataLabel:"Magasin actuel"})}},h=v=>{var g=Zd(),m=c(g),p=d(c(m),4),_=c(p),x=c(_);qr(x,{get suggestions(){return J.uniqueStores},get disabled(){return r().loading},onkeydown:S=>{S.key==="Enter"&&i()},get value(){return r().forms.store.name},set value(S){r().forms.store.name=S}});var w=d(_,2);jr(w,{get disabled(){return r().loading},get value(){return r().forms.store.comment},set value(S){r().forms.store.comment=S}});var $=d(p,2),C=c($);C.__click=[Yd,r],O(()=>C.disabled=r().loading),f(v,g)};k(l,v=>{a()?v(u):v(h,!1)})}f(t,o),ee()}Ke(["click"]);var tv=y("<fieldset><legend><!> </legend> <!></fieldset>");function da(t,e){let r=ve(e,"bgClass",3,"bg-base-100");var a=tv(),s=c(a),i=c(s);{var o=h=>{const v=Z(()=>e.iconComponent);var g=te(),m=R(g);dr(m,()=>n(v),(p,_)=>{_(p,{size:16,class:"mr-1"})}),f(h,g)};k(i,h=>{e.iconComponent&&h(o)})}var l=d(i),u=d(s,2);de(u,()=>e.children??ue),O(()=>{Ne(a,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Ne(s,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),I(l,` ${e.legend??""}`)}),f(t,a)}async function rv(t,e,r,a,s,i){if(!e.modalState)return;const o={totalOverride:{q:n(r),u:n(a)},comment:n(s)};await e.modalState.setOverride(o),b(i,!1)}async function av(t,e,r){e.modalState&&(await e.modalState.removeOverride(),b(r,!1))}var nv=y('<div class="stat"><div class="stat-title text-sm">Ancienne quantité calculée</div> <div class="stat-value text-content-base/70 text-base"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),sv=y('<div class="stat"><div class="stat-title text-sm">"Quantité redéfinie manuellement"</div> <div class="stat-value text-content-base/70 text-base"> </div> <div class="stat-desc italic"></div></div>'),ov=(t,e)=>b(e,!0),iv=y('<div class="flex justify-end gap-2"><button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button></div>'),lv=y('<div class="text-error text-sm">Limite de caractères atteinte</div>'),cv=(t,e)=>b(e,!1),uv=y('<span class="loading loading-spinner loading-sm"></span>'),dv=y('<span class="loading loading-spinner loading-sm"></span>'),vv=y('<div class="card-actions mt-4 justify-end gap-2"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>'),fv=y(`<div><div class="card-body p-4"><div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <!></div></div>`),hv=y('<div class="mb-2 space-y-4"><div class="stats not-md:stats-vertical shadow"><!> <div class="stat"><div class="stat-title text-sm">Quantité calculée</div> <div class="stat-value text-content-base/70 text-base"> </div> <div class="stat-desc italic">Recettes actuelles</div></div> <!></div> <!> <!></div>');function pv(t,e){X(e,!0);const r=Z(()=>e.modalState.product?.totalNeededOverrideParsed),a=Z(()=>e.modalState.product?.displayTotalOverride);let s=Z(()=>n(r)?.hasUnresolvedChangedSinceOverride),i=H(!1),o=H(Re(e.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||e.modalState.product?.totalNeededArray[0]?.q||0)),l=H(Re(e.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||e.modalState.product?.totalNeededArray[0]?.u||"")),u=H(Re(e.modalState.product?.totalNeededOverrideParsed?.comment||"")),h=Z(()=>n(o)>0&&n(l).trim()!=="");var v=te(),g=R(v);{var m=p=>{var _=hv(),x=c(_),w=c(x);{var $=j=>{var U=nv(),ie=d(c(U),2),L=c(ie);O(()=>I(L,e.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay)),f(j,U)};k(w,j=>{e.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay&&n(s)&&j($)})}var C=d(w,2),S=d(c(C),2),E=c(S),P=d(C,2);{var M=j=>{var U=sv(),ie=d(c(U),2),L=c(ie);O(()=>I(L,n(a))),f(j,U)};k(P,j=>{n(a)&&n(r)&&j(M)})}var A=d(x,2);{var D=j=>{var U=iv(),ie=c(U);ie.__click=[ov,i],O(()=>ie.disabled=n(i)),f(j,U)};k(A,j=>{e.isArchiveMode||j(D)})}var N=d(A,2);{var V=j=>{var U=fv(),ie=c(U),L=c(ie),Y=c(L),W=c(Y);Ko(W,{class:"h-4 w-4 opacity-50"});var G=d(W,2),F=d(Y,2),K=c(F);K.value=K.__value="";var oe=d(K);oe.value=oe.__value="kg";var Se=d(oe);Se.value=Se.__value="gr.";var xe=d(Se);xe.value=xe.__value="l.";var re=d(xe);re.value=re.__value="ml";var q=d(re);q.value=q.__value="unité";var ae=d(q);ae.value=ae.__value="bottes";var pe=d(L,2),T=c(pe),ne=d(c(T),2),z=d(ne,2);{var se=Q=>{var we=lv();f(Q,we)};k(z,Q=>{n(u).length>=250&&Q(se)})}var ye=d(pe,2);{var Pe=Q=>{var we=vv(),Oe=c(we);Oe.__click=[cv,i];var ke=d(Oe,2);ke.__click=[av,e,i];var He=c(ke);{var ot=qe=>{var Te=uv();f(qe,Te)},_e=qe=>{var Te=At();O(()=>I(Te,`Réinitialiser le total calculé (${e.modalState.product.displayTotalNeeded??""}).`)),f(qe,Te)};k(He,qe=>{e.modalState.loading?qe(ot):qe(_e,!1)})}var le=d(ke,2);le.__click=[rv,e,o,l,u,i];var $e=c(le);{var Qe=qe=>{var Te=dv();f(qe,Te)},Ze=qe=>{var Te=At("Appliquer");f(qe,Te)};k($e,qe=>{e.modalState.loading?qe(Qe):qe(Ze,!1)})}O(()=>{ke.disabled=e.modalState.loading,le.disabled=e.modalState.loading||!n(h)}),f(Q,we)};k(ye,Q=>{e.isArchiveMode||Q(Pe)})}O(()=>Ne(U,1,`card border-base-300 border ${n(i)?"bg-base-200":"bg-base-100"}`)),Ve(G,()=>n(o),Q=>b(o,Q)),Fr(F,()=>n(l),Q=>b(l,Q)),Ve(ne,()=>n(u),Q=>b(u,Q)),f(j,U)};k(N,j=>{n(i)&&j(V)})}O(()=>I(E,e.modalState.product.displayTotalNeeded)),f(p,_)};k(g,p=>{e.modalState.product&&p(m)})}f(t,v),ee()}Ke(["click"]);var gv=y('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),mv=y('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),_v=y('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),bv=y('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function yv(t,e){X(e,!0);const r=Z(()=>e.modalState.recipes);var a=bv(),s=R(a);pv(s,{get modalState(){return e.modalState},get isArchiveMode(){return e.isArchiveMode}});var i=d(s,2),o=c(i),l=c(o);An(l,{class:"h-5 w-5"});var u=d(o,2);{var h=g=>{var m=gv(),p=c(m);Ra(p,{class:"mx-auto mb-2 h-12 w-12"}),f(g,m)},v=g=>{var m=_v(),p=c(m),_=d(c(p));rt(_,21,()=>n(r),Mr,(x,w)=>{var $=mv(),C=c($),S=c(C),E=d(C),P=c(E),M=d(E),A=c(M);O(D=>{I(S,`${n(w).r??""} (${(n(w).a||"-")??""} c.)`),I(P,`${(n(w).q||n(w).qEq)??""} ${(n(w).u||n(w).uEq)??""}`),I(A,D)},[()=>qa(n(w).date)]),f(x,$)}),f(g,m)};k(u,g=>{n(r).length===0?g(h):g(v,!1)})}f(t,a),ee()}function wv(t,e,r){n(e).saveAllChanges().then(()=>{r.onClose()})}var Sv=y('<div class="alert alert-warning py-0.5"><!> <span class="font-medium">Mode consultation</span> <span>Événement terminé</span></div>'),xv=y('<div class="text-xl font-bold"> </div> <!> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Pv=y('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),$v=(t,e)=>e("recettes"),kv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Ev=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Av=(t,e)=>e("magasins"),Tv=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Mv=(t,e)=>e("volontaires"),Nv=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Dv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Cv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Iv=(t,e)=>e("stock"),Ov=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Rv=y('<span class="badge badge-sm badge-secondary ml-1">1</span>'),qv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),jv=(t,e)=>e("achats"),Lv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Bv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),zv=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Uv=y('<span class="loading loading-spinner loading-sm"></span>'),Hv=y('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),Wv=y('<div id="product_modal"><div class="modal-box flex fixed top-0 overflow-auto h-lvh w-lvw flex-col md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Qv(t,e){X(e,!0);let r=ve(e,"initialTab",3,"recettes"),a=Z(()=>ud(e.productId)),s=Z(()=>J.isEventPassed),i=H(Re(r()));It(()=>{b(i,r())});function o($){b(i,$,!0)}var l=Wv(),u=c(l),h=c(u),v=c(h);{var g=$=>{var C=xv(),S=R(C),E=c(S),P=d(S,2);{var M=U=>{var ie=Sv(),L=c(ie);Qo(L,{class:"h-4 w-4"}),f(U,ie)};k(P,U=>{n(a)&&n(s)&&U(M)})}var A=d(P,2),D=c(A),N=c(D),V=d(D,2),j=d(c(V));O(()=>{I(E,n(a).product?.productName),I(N,n(a).product?.productType),I(j,` ${n(a).product?.displayTotalNeeded??""}`)}),f($,C)},m=$=>{var C=Pv();f($,C)};k(v,$=>{n(a)&&n(a).product?$(g):$(m,!1)})}var p=d(v,2);p.__click=function(...$){e.onClose?.apply(this,$)};var _=c(p);Ct(_,{class:"h-4 w-4"});var x=d(h,2);{var w=$=>{var C=Hv(),S=R(C),E=c(S);E.__click=[$v,o];var P=c(E);An(P,{class:"mr-1 h-5 w-5"});var M=d(P,2);{var A=le=>{var $e=kv(),Qe=c($e);O(()=>I(Qe,n(a).product?.nbRecipes)),f(le,$e)},D=le=>{var $e=Ev();f(le,$e)};k(M,le=>{n(a).product?.nbRecipes&&n(a).product?.nbRecipes>0?le(A):le(D,!1)})}var N=d(E,2);N.__click=[Av,o];var V=c(N);lr(V,{class:"mr-1 h-5 w-5"});var j=d(V,2);{var U=le=>{var $e=Tv();f(le,$e)};k(j,le=>{n(a).hasChanges?.store&&le(U)})}var ie=d(N,2);ie.__click=[Mv,o];var L=c(ie);pa(L,{class:"mr-1 h-5 w-5"});var Y=d(L,2);{var W=le=>{var $e=Nv();f(le,$e)},G=le=>{var $e=te(),Qe=R($e);{var Ze=Te=>{var Xe=Dv(),be=c(Xe);O(()=>I(be,n(a).product?.who.length)),f(Te,Xe)},qe=Te=>{var Xe=Cv();f(Te,Xe)};k(Qe,Te=>{n(a).product?.who&&n(a).product?.who.length>0?Te(Ze):Te(qe,!1)},!0)}f(le,$e)};k(Y,le=>{n(a).hasChanges?.who?le(W):le(G,!1)})}var F=d(ie,2);F.__click=[Iv,o];var K=c(F);zo(K,{class:"mr-1 h-5 w-5"});var oe=d(K,2);{var Se=le=>{var $e=Ov();f(le,$e)},xe=le=>{var $e=te(),Qe=R($e);{var Ze=Te=>{var Xe=Rv();f(Te,Xe)},qe=Te=>{var Xe=qv();f(Te,Xe)};k(Qe,Te=>{n(a).stockParsed?Te(Ze):Te(qe,!1)},!0)}f(le,$e)};k(oe,le=>{n(a).hasChanges?.stock?le(Se):le(xe,!1)})}var re=d(F,2);re.__click=[jv,o];var q=c(re);vr(q,{class:"mr-1 h-5 w-5"});var ae=d(q,2);{var pe=le=>{var $e=Lv(),Qe=c($e);O(()=>I(Qe,n(a).purchasesList.length)),f(le,$e)},T=le=>{var $e=Bv();f(le,$e)};k(ae,le=>{n(a).purchasesList.length>0?le(pe):le(T,!1)})}var ne=d(S,2),z=c(ne);{var se=le=>{var $e=zv(),Qe=c($e);Ct(Qe,{class:"h-4 w-4"});var Ze=d(Qe,2),qe=c(Ze);O(()=>I(qe,`erreur : ${n(a).error??""}`)),f(le,$e)};k(z,le=>{n(a).error&&le(se)})}var ye=d(z,2),Pe=c(ye);kl(Pe,()=>n(i),le=>{var $e=te(),Qe=R($e);{var Ze=Te=>{yv(Te,{get modalState(){return n(a)},get isArchiveMode(){return n(s)}})},qe=Te=>{var Xe=te(),be=R(Xe);{var De=Be=>{Id(Be,{get modalState(){return n(a)},get isArchiveMode(){return n(s)}})},Ge=Be=>{var Ee=te(),et=R(Ee);{var ut=at=>{Qd(at,{get modalState(){return n(a)},get isArchiveMode(){return n(s)}})},_t=at=>{var bt=te(),xt=R(bt);{var Ot=ft=>{Fd(ft,{get modalState(){return n(a)},get isArchiveMode(){return n(s)}})},Bt=ft=>{var ce=te(),he=R(ce);{var Me=je=>{ev(je,{get modalState(){return n(a)},get isArchiveMode(){return n(s)}})};k(he,je=>{n(i)==="magasins"&&je(Me)},!0)}f(ft,ce)};k(xt,ft=>{n(i)==="volontaires"?ft(Ot):ft(Bt,!1)},!0)}f(at,bt)};k(et,at=>{n(i)==="stock"?at(ut):at(_t,!1)},!0)}f(Be,Ee)};k(be,Be=>{n(i)==="achats"?Be(De):Be(Ge,!1)},!0)}f(Te,Xe)};k(Qe,Te=>{n(i)==="recettes"?Te(Ze):Te(qe,!1)})}f(le,$e)});var Q=d(ne,2),we=c(Q);we.__click=function(...le){e.onClose?.apply(this,le)};var Oe=c(we),ke=d(we,2);ke.__click=[wv,a,e];var He=c(ke);{var ot=le=>{var $e=Uv();f(le,$e)},_e=le=>{var $e=At("Tout enregistrer");f(le,$e)};k(He,le=>{n(a).loading?le(ot):le(_e,!1)})}O(()=>{Ne(E,1,`tab ${n(i)==="recettes"?"tab-active":""}`),Ne(N,1,`tab ${n(i)==="magasins"?"tab-active":""}`),Ne(ie,1,`tab ${n(i)==="volontaires"?"tab-active":""}`),Ne(F,1,`tab ${n(i)==="stock"?"tab-active":""}`),Ne(re,1,`tab ${n(i)==="achats"?"tab-active":""}`),I(Oe,n(a)?.hasAnyChanges?"Annuler":"Fermer"),ke.disabled=n(a).loading||!n(a).hasAnyChanges}),f($,C)};k(x,$=>{n(a)&&$(w)})}O(()=>Ne(l,1,`modal ${(e.productId&&"modal-open")??""}`)),f(t,l),ee()}Ke(["click"]);var Gv=(t,e,r)=>e(r),Vv=y("<button><span> </span> <!></button>"),Kv=y('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),Jv=(t,e)=>e(),Fv=y('<button class="btn btn-xs btn-link text-primary/80" type="button">Dates à venir</button>'),Yv=(t,e)=>e(),Zv=y('<button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button>'),Xv=y('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),ef=y('<div class="flex flex-wrap justify-end gap-2"><!> <!></div>'),tf=y('<div class=" flex flex-wrap gap-1"></div> <!>',1);function rf(t,e){X(e,!0);let r=ve(e,"availableDates",19,()=>[]),a=ve(e,"currentRange",19,()=>({start:null,end:null})),s=H(Re(a().start)),i=H(Re(a().end));const o=Z(()=>r().length>0&&n(s)===r()[0]&&n(i)===r()[r().length-1]),l=Z(()=>{if(r().length===0)return!1;const S=new Date;S.setHours(0,0,0,0);const P=[...r()].sort().find(M=>new Date(M)>=S);return P&&n(s)===P&&n(i)===r()[r().length-1]}),u=Z(()=>{if(r().length===0)return!0;const S=new Date(r()[r().length-1]);return S.setHours(23,59,59,999),S<new Date}),h=Z(()=>{if(r().length===0)return!1;const S=new Date;return S.setHours(0,0,0,0),[...r()].some(E=>new Date(E)>=S)});It(()=>{b(s,a().start,!0),b(i,a().end,!0)});function v(S){n(s)===S&&n(i)===S?m():new Date(S)<new Date(n(s))?b(s,S,!0):(new Date(S)>new Date(n(i))||b(s,S,!0),b(i,S,!0)),e.onRangeChange(n(s),n(i))}function g(S){return n(o)?"btn-soft":new Date(S)>=new Date(n(s))&&new Date(S)<=new Date(n(i))?"":"btn-dash"}function m(){r().length!==0&&(b(s,r()[0],!0),b(i,r()[r().length-1],!0),e.onRangeChange(n(s),n(i)))}function p(){if(r().length===0)return;const S=new Date;S.setHours(0,0,0,0);const P=[...r()].sort().find(M=>new Date(M)>=S);P&&(b(s,P,!0),b(i,r()[r().length-1],!0),e.onRangeChange(n(s),n(i)))}var _=tf(),x=R(_);rt(x,22,r,S=>S,(S,E)=>{var P=Vv();P.__click=[Gv,v,E];var M=c(P),A=c(M),D=d(M,2);{var N=j=>{Fo(j,{size:16})},V=j=>{var U=te(),ie=R(U);{var L=W=>{Vo(W,{size:16})},Y=W=>{var G=te(),F=R(G);{var K=oe=>{Zc(oe,{size:16})};k(F,oe=>{Ga(E)==="cloud"&&oe(K)},!0)}f(W,G)};k(ie,W=>{Ga(E)==="moon"?W(L):W(Y,!1)},!0)}f(j,U)};k(D,j=>{Ga(E)==="sun"?j(N):j(V,!1)})}O((j,U)=>{Ne(P,1,`btn btn-sm btn-secondary ${j??""}`),I(A,U)},[()=>g(E),()=>uc(E)]),f(S,P)});var w=d(x,2);{var $=S=>{var E=Kv();f(S,E)},C=S=>{var E=ef(),P=c(E);{var M=V=>{var j=Fv();j.__click=[Jv,p],f(V,j)};k(P,V=>{n(h)&&!n(l)&&V(M)})}var A=d(P,2);{var D=V=>{var j=Zv();j.__click=[Yv,m],f(V,j)},N=V=>{var j=Xv();f(V,j)};k(A,V=>{n(o)?V(N,!1):V(D)})}f(S,E)};k(w,S=>{n(u)?S($):S(C,!1)})}f(t,_),ee()}Ke(["click"]);var af=()=>J.clearFilters(),nf=t=>J.setSearchQuery(t.currentTarget.value),sf=()=>J.setSearchQuery(""),of=()=>J.setGroupBy("none"),lf=()=>J.setGroupBy("store"),cf=()=>J.setGroupBy("productType"),uf=(t,e)=>J.toggleProductType(e),df=y("<button><!> </button>"),vf=()=>J.toggleTemperature("frais"),ff=()=>J.toggleTemperature("surgele"),hf=()=>J.clearTypeAndTemperatureFilters(),pf=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),gf=y('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),mf=y('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button title="Filtrer les légumes ou produits à conserver au frais"><!> Frais</button> <button title="Filtrer les roduits à concerver au congélateur"><!> Surgelés</button></div> <!>',1),_f=(t,e)=>J.toggleStore(e),bf=y("<button> </button>"),yf=()=>J.clearStoreFilters(),wf=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),Sf=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),xf=(t,e)=>J.toggleWho(e),Pf=y("<button> </button>"),$f=()=>J.clearWhoFilters(),kf=y('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),Ef=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Af=y('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function Tf(t,e){X(e,!0);const r=Z(()=>J.filters),a=Z(()=>J.uniqueStores),s=Z(()=>J.uniqueWho),i=Z(()=>J.uniqueProductTypes);var o=Af(),l=R(o),u=c(l),h=c(u);Wo(h,{class:"h-5 w-5"});var v=d(u,2);v.__click=[af];var g=c(v);ua(g,{class:"h-4 w-4"});var m=d(l,2),p=c(m),_=d(c(p),2),x=c(_);pu(x,{class:"h-4 w-4"});var w=d(x,2);w.__input=[nf];var $=d(w,2);$.__click=[sf];var C=c($);Ct(C,{class:"h-4 w-4"});var S=d(p,2),E=d(c(S),2),P=c(E);P.__change=[of];var M=d(P,2);M.__change=[lf];var A=d(M,2);A.__change=[cf];var D=d(S,2);{var N=W=>{da(W,{legend:"Date incluses",bgClass:"bg-base-100",children:(G,F)=>{rf(G,{get availableDates(){return J.availableDates},get currentRange(){return J.dateRange},onRangeChange:(K,oe)=>J.setDateRange(K,oe)})},$$slots:{default:!0}})};k(D,W=>{J.hasSingleDateEvent||W(N)})}var V=d(D,2);{var j=W=>{da(W,{legend:"Types & Température",get iconComponent(){return Yo},children:(G,F)=>{var K=mf(),oe=R(K);rt(oe,20,()=>n(i),z=>z,(z,se)=>{const ye=Z(()=>sn(se));var Pe=df();Pe.__click=[uf,se];var Q=c(Pe);dr(Q,()=>n(ye).icon,(Oe,ke)=>{ke(Oe,{class:"mr-1 h-5 w-5"})});var we=d(Q);O(Oe=>{Ne(Pe,1,`btn btn-sm ${Oe??""}`),I(we,` ${n(ye).displayName??""}`)},[()=>n(r).selectedProductTypes.length===0?"btn-soft btn-secondary":n(r).selectedProductTypes.includes(se)?"btn-secondary":"btn-dash btn-secondary"]),f(z,Pe)});var Se=d(oe,2),xe=c(Se);xe.__click=[vf];var re=c(xe);Jo(re,{class:"h-5 w-5"});var q=d(xe,2);q.__click=[ff];var ae=c(q);Mn(ae,{class:"h-5 w-5"});var pe=d(Se,2);{var T=z=>{var se=pf();se.__click=[hf];var ye=c(se);ua(ye,{size:16}),f(z,se)},ne=z=>{var se=gf();f(z,se)};k(pe,z=>{n(r).selectedProductTypes.length>0||n(r).selectedTemperatures.length>0?z(T):z(ne,!1)})}O((z,se)=>{Ne(xe,1,`btn btn-sm ${z??""}`),Ne(q,1,`btn btn-sm ${se??""}`)},[()=>n(r).selectedTemperatures.length===0?"btn-soft btn-success":n(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>n(r).selectedTemperatures.length===0?"btn-soft btn-info":n(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),f(G,K)},$$slots:{default:!0}})};k(V,W=>{n(i).length>0&&W(j)})}var U=d(V,2);{var ie=W=>{da(W,{legend:"Magasins",get iconComponent(){return lr},children:(G,F)=>{var K=Sf(),oe=c(K);rt(oe,16,()=>n(a),re=>re,(re,q)=>{var ae=bf();ae.__click=[_f,q];var pe=c(ae);O(T=>{Ne(ae,1,`btn btn-sm ${T??""}`),I(pe,q)},[()=>n(r).selectedStores.length===0?"btn-soft btn-secondary":n(r).selectedStores.includes(q)?"btn-secondary":"btn-dash btn-secondary"]),f(re,ae)});var Se=d(oe,2);{var xe=re=>{var q=wf();q.__click=[yf];var ae=c(q);ua(ae,{size:16}),f(re,q)};k(Se,re=>{n(r).selectedStores.length>0&&re(xe)})}f(G,K)},$$slots:{default:!0}})};k(U,W=>{n(a).length>0&&W(ie)})}var L=d(U,2);{var Y=W=>{da(W,{legend:"Qui",get iconComponent(){return Nn},children:(G,F)=>{var K=Ef(),oe=c(K);rt(oe,16,()=>n(s),re=>re,(re,q)=>{var ae=Pf();ae.__click=[xf,q];var pe=c(ae);O(T=>{Ne(ae,1,`btn btn-sm ${T??""}`),I(pe,q)},[()=>n(r).selectedWho.length===0?" btn-soft btn-secondary":n(r).selectedWho.includes(q)?" btn-secondary":"btn-dash btn-secondary"]),f(re,ae)});var Se=d(oe,2);{var xe=re=>{var q=kf();q.__click=[$f];var ae=c(q);ua(ae,{size:16}),f(re,q)};k(Se,re=>{n(r).selectedWho.length>0&&re(xe)})}f(G,K)},$$slots:{default:!0}})};k(L,W=>{n(s).length>0&&W(Y)})}O(()=>{v.disabled=!J.hasFilters,Ol(w,n(r).searchQuery),$.disabled=!n(r).searchQuery,Ha(P,n(r).groupBy==="none"),Ha(M,n(r).groupBy==="store"),Ha(A,n(r).groupBy==="productType")}),f(t,o),ee()}Ke(["click","input","change"]);var ti=typeof window<"u"&&window.flatpickr!==void 0?window.flatpickr:{l10ns:{}},Mf={weekdays:{shorthand:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],longhand:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]},months:{shorthand:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],longhand:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]},ordinal:function(){return"º"},firstDayOfWeek:1,rangeSeparator:" a ",time_24hr:!0};ti.l10ns.es=Mf;ti.l10ns;var Nf=y('<div class="tooltip text-xs font-normal"><!></div>');function Df(t,e){let r=ve(e,"iconSize",3,24),a=e.icon||void 0;var s=Nf(),i=c(s);{var o=l=>{a(l,{get size(){return r()},class:`align-top
`})};k(i,l=>{e.icon&&l(o)})}O(()=>rr(s,"data-tip",e.tip)),f(t,s)}var Cf=y('<div class="text-primary-content flex items-center gap-2"><!> </div>'),If=y('<div class="text-primary-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Of=y('<div class="font-semibold">Sur toute la période</div>'),Rf=y('du <span class="font-semibold"> </span> au <span class="font-semibold"> </span>',1),qf=y('le <span class="font-semibold"> </span>',1),jf=(t,e,r)=>e.onOpenGroupEditModal("store",n(r).map(a=>a.data.$id),n(r).map(a=>a.data)),Lf=(t,e,r)=>e.onOpenGroupEditModal("who",n(r).map(a=>a.data.$id),n(r).map(a=>a.data)),Bf=(t,e,r)=>e.onOpenGroupPurchaseModal(n(r).map(a=>a.data)),zf=y(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),Uf=y('<div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div>'),Hf=y('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 font-semibold @md:min-w-48"><!></div> <div class="text-primary-content"><!></div> <!></div>'),Wf=(t,e,r)=>e.onOpenModal(n(r).$id,"recettes"),Qf=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(n(r).$id,"recettes"),Gf=y('<div class="text-base-content/60 text-sm font-normal"> </div>'),Vf=y('<div class="tooltip" data-tip="Ajouté manuellement, ne fait pas partie des recette"><!></div>'),Kf=y('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),Jf=y('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),Ff=y('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),Yf=y('<div class="tooltip"><div class="badge badge-outline badge-sm hover:badge-primary"> </div></div>'),Zf=y('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),Xf=y('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),eh=(t,e,r)=>e.onOpenModal(n(r).$id,"magasins"),th=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(n(r).$id,"magasins"),rh=y('<div class="ml-1"><!></div>'),ah=y('<div class="ml-1"> </div> <!>',1),nh=y('<div class="ml-1 text-sm font-medium">?</div>'),sh=(t,e,r)=>e.onOpenModal(n(r).$id,"volontaires"),oh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(n(r).$id,"volontaires"),ih=y('<span class="text-base-content/50 text-xs"> </span>'),lh=y('<div class="ml-1 flex gap-1"> <!></div>'),ch=y('<div class="ml-1 text-sm font-medium">?</div>'),uh=y('<div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div>'),dh=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),vh=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),fh=y('<div class="mx-4 flex gap-2 opacity-60"><!> <!></div>'),hh=(t,e,r)=>e.onOpenModal(n(r).$id,"recettes"),ph=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(n(r).$id,"recettes"),gh=y('<div class="tooltip flex items-center gap-2" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),mh=y("<span> </span>"),_h=y('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),bh=(t,e,r,a)=>{t.stopPropagation(),e.onQuickValidation(n(r),n(a))},yh=y('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><div class="cart-icon"></div> <span class="text-xs"> </span> <!></button>'),wh=y(`<div id="override_alert" class="alert alert-warning alert-soft mt-1 px-1 py-0.5"><!> <span>Les quantités des menus ont été modifiées depuis
                      l'attribution manuelle des "besoins"</span></div>`),Sh=(t,e,r)=>e.onOpenModal(n(r).$id,"achats"),xh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(n(r).$id,"achats"),Ph=y('<span class="text-xs opacity-75"> </span>'),$h=y('<div><div class="flex items-center gap-1"><!> <span class="text-sm font-medium text-nowrap"> </span></div> <!></div>'),kh=y('<span class="text-base-content/50 text-xs italic">aucun</span>'),Eh=y('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <!></div> <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex flex-wrap gap-x-4 gap-y-0"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="ms-auto flex items-center gap-4 self-end"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap items-start gap-0 self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div>ajouter un achat</div></div> <div class="flex flex-wrap justify-end gap-1.5"><!> <!></div></div></div></div></div>'),Ah=y('<!> <div class="space-y-1"></div>',1),Th=y('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Mh=y('<div class="space-y-4 rounded-lg"></div> <!>',1);function Nh(t,e){X(e,!0);const r={Package:Ra,MessageCircleQuestionMark:lu,ShoppingCart:vr,Clock:Yc,CircleCheck:Kc,CircleX:Jc,ClipboardCheck:Fc,PackageCheck:cu,Check:Dr},a=Z(()=>J.groupedFilteredProducts),s=Z(()=>J.filters),i=Z(()=>Vr(J.dateRange.start)),o=Z(()=>Vr(J.dateRange.end));var l=Mh(),u=R(l);rt(u,21,()=>Object.entries(n(a)),([g,m])=>g,(g,m)=>{var p=Z(()=>ga(n(m),2));let _=()=>n(p)[0];const w=Z(()=>n(p)[1]);var $=Ah(),C=R($);{var S=P=>{const M=Z(()=>sn(_()));var A=Hf(),D=c(A),N=c(D);{var V=F=>{var K=Cf(),oe=c(K);lr(oe,{size:20});var Se=d(oe);O(()=>I(Se,` ${_()??""} (${n(w).length??""})`)),f(F,K)},j=F=>{var K=te(),oe=R(K);{var Se=re=>{var q=If(),ae=c(q);dr(ae,()=>n(M).icon,(se,ye)=>{ye(se,{size:20})});var pe=d(ae,2),T=c(pe),ne=d(pe,2),z=c(ne);O(()=>{I(T,n(M).displayName),I(z,`(${n(w).length??""})`)}),f(re,q)},xe=re=>{var q=At();O(()=>I(q,`📦 ${_()??""} (${n(w).length??""})`)),f(re,q)};k(oe,re=>{n(s).groupBy==="productType"?re(Se):re(xe,!1)},!0)}f(F,K)};k(N,F=>{n(s).groupBy==="store"?F(V):F(j,!1)})}var U=d(D,2),ie=c(U);{var L=F=>{var K=Of();f(F,K)},Y=F=>{var K=te(),oe=R(K);{var Se=re=>{var q=Rf(),ae=d(R(q)),pe=c(ae),T=d(ae,2),ne=c(T);O(()=>{I(pe,n(i)),I(ne,n(o))}),f(re,q)},xe=re=>{var q=qf(),ae=d(R(q)),pe=c(ae);O(()=>I(pe,n(i))),f(re,q)};k(oe,re=>{J.dateRange.start!==J.dateRange.end?re(Se):re(xe,!1)},!0)}f(F,K)};k(ie,F=>{J.isFullRange()?F(L):F(Y,!1)})}var W=d(U,2);{var G=F=>{var K=Uf(),oe=c(K);oe.__click=[jf,e,w];var Se=c(oe);lr(Se,{size:16});var xe=d(Se,4);ya(xe,{size:16});var re=d(oe,2);re.__click=[Lf,e,w];var q=c(re);pa(q,{size:16});var ae=d(q,4);ya(ae,{size:16});var pe=d(re,2);{var T=ne=>{var z=zf();z.__click=[Bf,e,w];var se=c(z);vr(se,{size:16});var ye=d(se,4);gs(ye,{size:16}),f(ne,z)};k(pe,ne=>{n(w).some(z=>z.data.displayMissingQuantity!=="✅ Complet")&&ne(T)})}f(F,K)};k(W,F=>{J.isEventPassed||F(G)})}f(P,A)};k(C,P=>{_()!==""&&P(S)})}var E=d(C,2);rt(E,21,()=>n(w),P=>P.data.$id,(P,M)=>{const A=Z(()=>n(M).data),D=Z(()=>n(M).stats),N=Z(()=>sn(n(A).productType)),V=Z(()=>ld(n(A).purchases||[])),j=Z(()=>n(A).totalNeededOverrideParsed);var U=Eh(),ie=c(U),L=c(ie),Y=c(L);Y.__click=[Wf,e,A],Y.__keydown=[Qf,e,A];var W=c(Y),G=c(W);dr(G,()=>n(N).icon,(ce,he)=>{he(ce,{class:"text-base-content/80 h-4 w-4"})});var F=d(G),K=d(F);{var oe=ce=>{var he=Gf(),Me=c(he);O(()=>I(Me,`Ancien: ${n(A).previousNames[0]??""}`)),f(ce,he)};k(K,ce=>{n(A).previousNames&&n(A).previousNames.length>0&&ce(oe)})}var Se=d(K,2);{var xe=ce=>{var he=Vf(),Me=c(he);ms(Me,{class:"text-warning h-4 w-4"}),f(ce,he)};k(Se,ce=>{n(A).productHugoUuid||ce(xe)})}var re=d(W,2),q=c(re);{var ae=ce=>{var he=Kf(),Me=c(he);Jo(Me,{class:"text-success h-4 w-4"}),f(ce,he)};k(q,ce=>{n(A).pFrais&&ce(ae)})}var pe=d(q,2);{var T=ce=>{var he=Jf(),Me=c(he);Mn(Me,{class:"text-info h-4 w-4"}),f(ce,he)};k(pe,ce=>{n(A).pSurgel&&ce(T)})}var ne=d(re,2);{var z=ce=>{var he=Ff(),Me=c(he);Go(Me,{class:"h-4 w-4 animate-spin"}),f(ce,he)};k(ne,ce=>{n(A).status==="isSyncing"&&ce(z)})}var se=d(ne,2);{var ye=ce=>{var he=Xf(),Me=c(he);rt(Me,20,()=>n(D).concernedDates,je=>je,(je,Ae)=>{const Le=Z(()=>n(D).recipesByDate.get(Ae)||[]);var Ue=te(),We=R(Ue);{var ht=Ye=>{var it=Yf(),Je=c(it),yt=c(Je);O((zt,Lr)=>{rr(it,"data-tip",zt),I(yt,Lr)},[()=>n(Le).map(zt=>zt.r).join(", "),()=>new Date(Ae).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),f(Ye,it)},Tt=Ye=>{var it=Zf(),Je=c(it);O(yt=>I(Je,yt),[()=>new Date(Ae).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),f(Ye,it)};k(We,Ye=>{n(Le).length>0?Ye(ht):Ye(Tt,!1)})}f(je,Ue)}),f(ce,he)};k(se,ce=>{n(D).concernedDates.length>0&&ce(ye)})}var Pe=d(Y,2);{var Q=ce=>{var he=uh(),Me=c(he);Me.__click=[eh,e,A],Me.__keydown=[th,e,A];var je=c(Me);lr(je,{size:18});var Ae=d(je,2);{var Le=Je=>{var yt=ah(),zt=R(yt),Lr=c(zt),La=d(zt,2);{var Ut=wr=>{var sa=rh(),ai=c(sa);Df(ai,{get tip(){return n(A).storeInfo.storeComment},get icon(){return iu},iconSize:14}),f(wr,sa)};k(La,wr=>{n(A).storeInfo?.storeComment&&wr(Ut)})}O(()=>I(Lr,n(A).storeInfo.storeName)),f(Je,yt)},Ue=Je=>{var yt=nh();f(Je,yt)};k(Ae,Je=>{n(A).storeInfo?.storeName?Je(Le):Je(Ue,!1)})}var We=d(Me,2);We.__click=[sh,e,A],We.__keydown=[oh,e,A];var ht=c(We);pa(ht,{size:18});var Tt=d(ht,2);{var Ye=Je=>{var yt=lh(),zt=c(yt),Lr=d(zt);{var La=Ut=>{var wr=ih(),sa=c(wr);O(()=>I(sa,`+${n(A).who.length-2}`)),f(Ut,wr)};k(Lr,Ut=>{n(A).who.length>2&&Ut(La)})}O(Ut=>I(zt,`${Ut??""} `),[()=>n(A).who.slice(0,2).map(Ut=>Ut.slice(0,3)).join(" | ")]),f(Je,yt)},it=Je=>{var yt=ch();f(Je,yt)};k(Tt,Je=>{n(A).who&&n(A).who.length>0?Je(Ye):Je(it,!1)})}O(()=>{Ne(Me,1,`btn btn-soft btn-sm group relative ${n(A).storeInfo?.storeName?"btn-success":""}`),Ne(We,1,`btn btn-sm btn-soft group relative ${n(A).who&&n(A).who?.length>0?"btn-success":""}`)}),f(ce,he)},we=ce=>{var he=fh(),Me=c(he);{var je=Ue=>{var We=dh(),ht=c(We);lr(ht,{size:16});var Tt=d(ht);O(()=>I(Tt,` ${n(A).storeInfo.storeName??""}`)),f(Ue,We)};k(Me,Ue=>{n(A).storeInfo?.storeName&&Ue(je)})}var Ae=d(Me,2);{var Le=Ue=>{var We=vh(),ht=c(We);pa(ht,{size:16});var Tt=d(ht);O(Ye=>I(Tt,` ${Ye??""}`),[()=>n(A).who.join(", ")]),f(Ue,We)};k(Ae,Ue=>{n(A).who&&n(A).who.length>0&&Ue(Le)})}f(ce,he)};k(Pe,ce=>{J.isEventPassed?ce(we,!1):ce(Q)})}var Oe=d(L,2),ke=c(Oe);ke.__click=[hh,e,A],ke.__keydown=[ph,e,A];var He=c(ke),ot=c(He),_e=c(ot);nu(_e,{class:"h-4 w-4"});var le=d(ot,2),$e=c(le),Qe=c($e);{var Ze=ce=>{var he=gh(),Me=c(he),je=c(Me),Ae=d(Me,2);ms(Ae,{class:"h-4 w-4"});var Le=d(Ae);O(()=>{I(je,n(D).formattedQuantities),I(Le,` ${n(j).totalOverride.q??""}
                          ${n(j).totalOverride.u??""}`)}),f(ce,he)},qe=ce=>{var he=mh(),Me=c(he);O(()=>I(Me,n(D).formattedQuantities)),f(ce,he)};k(Qe,ce=>{n(j)?.totalOverride?ce(Ze):ce(qe,!1)})}var Te=d($e,2);{var Xe=ce=>{var he=_h(),Me=c(he),je=c(Me),Ae=d(je);An(Ae,{class:"h-3 w-3"});var Le=d(Me,2),Ue=c(Le),We=d(Ue);mu(We,{class:"h-3 w-3"}),O(()=>{I(je,`${n(D).nbRecipes??""} `),I(Ue,`${n(D).totalAssiettes??""} `)}),f(ce,he)};k(Te,ce=>{(n(D).nbRecipes||n(D).totalAssiettes)&&ce(Xe)})}var be=d(He,2);{var De=ce=>{var he=yh();he.__click=[bh,e,A,D];var Me=d(c(he),2),je=c(Me),Ae=d(Me,2);{var Le=We=>{Gc(We,{size:18})},Ue=We=>{Vc(We,{size:18})};k(Ae,We=>{Nr.isMobile?We(Le):We(Ue,!1)})}O(()=>{rr(he,"title",`Acheter le manquant (${n(D).formattedMissingQuantities??""})`),I(je,n(D).formattedMissingQuantities)}),f(ce,he)},Ge=ce=>{var he=te(),Me=R(he);{var je=Ae=>{gs(Ae,{size:24,class:"text-success ms-auto"})};k(Me,Ae=>{J.isEventPassed||Ae(je)},!0)}f(ce,he)};k(be,ce=>{!J.isEventPassed&&n(D).hasMissing?ce(De):ce(Ge,!1)})}var Be=d(be,2);{var Ee=ce=>{var he=wh(),Me=c(he);Qc(Me,{size:18}),f(ce,he)};k(Be,ce=>{!J.isEventPassed&&n(j)?.hasUnresolvedChangedSinceOverride&&ce(Ee)})}var et=d(ke,2);et.__click=[Sh,e,A],et.__keydown=[xh,e,A];var ut=c(et),_t=c(ut),at=c(_t);vr(at,{class:"h-4 w-4"});var bt=d(_t,2),xt=d(ut,2),Ot=c(xt);rt(Ot,17,()=>n(V),Mr,(ce,he)=>{const Me=Z(()=>r[n(he).icon]);var je=$h(),Ae=c(je),Le=c(Ae);dr(Le,()=>n(Me),(Ye,it)=>{it(Ye,{class:"h-4 w-4"})});var Ue=d(Le,2),We=c(Ue),ht=d(Ae,2);{var Tt=Ye=>{var it=Ph(),Je=c(it);O(()=>I(Je,`livré le: ${n(he).deliveryDate??""}`)),f(Ye,it)};k(ht,Ye=>{n(he).deliveryDate&&Ye(Tt)})}O(()=>{Ne(je,1,`badge badge-outline flex h-fit flex-col items-center gap-1 py-1 ${n(he).badgeClass??""}`),I(We,`${n(he).quantity??""}
                          ${n(he).unit??""}`)}),f(ce,je)});var Bt=d(Ot,2);{var ft=ce=>{var he=kh();f(ce,he)};k(Bt,ce=>{n(V).length===0&&ce(ft)})}O(()=>{Ne(U,1,`card bg-base-100 border-base-300 ${n(A).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),I(F,`${n(A).productName??""} `),Ne($e,1,`text-base font-bold ${n(D).hasMissing&&!J.isEventPassed?"text-error":"text-success"}`),Ne(bt,1,`text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity ${J.isEventPassed?"":"group-hover:opacity-100"} sm:opacity-0`)}),f(P,U)}),f(g,$)});var h=d(u,2);{var v=g=>{var m=Th();f(g,m)};k(h,g=>{Object.values(n(a)).flat().length===0&&g(v)})}f(t,l),ee()}Ke(["click","keydown"]);async function Dh(t,e,r,a,s,i,o,l,u){if(!(!n(e)||n(r))){b(a,null),b(s,null);try{const h=n(i).map(p=>p.id),v=o.products.filter(p=>h.includes(p.$id));J.setSyncStatus(h,!0),o.onClose();const g={storeName:n(l).trim(),storeComment:n(u).trim()},m=await Ro(h,v,g);if(b(s,m,!0),m.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${m.updatedCount} produits modifiés`),o.onSuccess?.(m);else throw new Error(m.error||"Erreur lors de la mise à jour")}catch(h){const v=h instanceof Error?h.message:"Erreur inconnue";b(a,v,!0),console.error("[StoreEditModal] Erreur mise à jour:",h),J.clearSyncStatus()}finally{b(r,!1)}}}function ys(t,e,r){n(e)||r.onClose()}var Ch=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Ih=(t,e)=>b(e,"empty"),Oh=(t,e)=>b(e,"all"),Rh=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),qh=y("<!> ",1),jh=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><!></div> <div><!></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Lh(t,e){X(e,!0);let r=H(!1),a=H(null),s=H(null),i=H(Re(e.products.length>0&&e.products[0].storeInfo?e.products[0].storeInfo.storeName:"")),o=H(Re(e.products.length>0&&e.products[0].storeInfo&&e.products[0].storeInfo.storeComment||"")),l=H(Re({})),u=H("empty");It(()=>{const q={};e.products.forEach(ae=>{e.productIds.includes(ae.$id)&&(n(u)==="empty"?q[ae.$id]=!ae.storeInfo||!ae.storeInfo.storeName:q[ae.$id]=!0)}),b(l,q,!0)});const h=Z(()=>e.products.map(q=>({id:q.$id,label:q.productName,title:q.productName,selected:n(l)[q.$id]}))),v=Z(()=>n(h).filter(q=>q.selected)),g=Z(()=>`Attribuer un magasin (${n(v).length} produits sélectionnés)`),m=Z(()=>n(v).length===0?!1:n(i).trim().length>0);function p(q){n(l)[q]=!n(l)[q]}var _=jh(),x=c(_),w=c(x),$=c(w),C=c($),S=d($,2);S.__click=[ys,r,e];var E=c(S);Ct(E,{class:"h-4 w-4"});var P=d(w,2),M=c(P);{var A=q=>{var ae=Ch(),pe=c(ae);aa(pe,{class:"h-4 w-4"});var T=d(pe,2),ne=c(T);O(()=>I(ne,n(a))),f(q,ae)};k(M,q=>{n(a)&&q(A)})}var D=d(M,2),N=c(D),V=c(N);qr(V,{get suggestions(){return J.uniqueStores},get disabled(){return n(r)},id:"store-name-input",get value(){return n(i)},set value(q){b(i,q,!0)}});var j=d(N,2),U=c(j);jr(U,{get disabled(){return n(r)},id:"store-comment-textarea",get value(){return n(o)},set value(q){b(o,q,!0)}});var ie=d(D,2),L=d(c(ie),2),Y=c(L);Y.__click=[Ih,u];var W=d(Y,2);W.__click=[Oh,u];var G=d(L,2);Yr(G,{get items(){return n(h)},onToggleItem:p,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var F=d(P,2),K=c(F);K.__click=[ys,r,e];var oe=d(K,2);oe.__click=[Dh,m,r,a,s,v,e,i,o];var Se=c(oe);{var xe=q=>{var ae=Rh();f(q,ae)},re=q=>{var ae=qh(),pe=R(ae);Dr(pe,{class:"h-4 w-4"});var T=d(pe);O(()=>I(T,` Appliquer à ${n(v).length??""} produit(s)`)),f(q,ae)};k(Se,q=>{n(r)?q(xe):q(re,!1)})}O(()=>{I(C,n(g)),S.disabled=n(r),Ne(Y,1,`tab ${n(u)==="empty"?"tab-active":""}`),Ne(W,1,`tab ${n(u)==="all"?"tab-active":""}`),K.disabled=n(r),oe.disabled=n(r)||!n(m)}),f(t,_),ee()}Ke(["click"]);async function Bh(t,e,r,a,s,i,o,l){if(!(!n(e)||n(r))){b(a,null),b(s,null);try{const u=n(i).map(g=>g.id),h=o.products.filter(g=>u.includes(g.$id));J.setSyncStatus(u,!0),o.onClose();const v=await qo(u,h,n(l),"replace");if(b(s,v,!0),v.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${v.updatedCount} produits modifiés`),o.onSuccess?.(v);else throw new Error(v.error||"Erreur lors de la mise à jour")}catch(u){const h=u instanceof Error?u.message:"Erreur inconnue";b(a,h,!0),console.error("[WhoEditModal] Erreur mise à jour:",u),J.clearSyncStatus()}finally{b(r,!1)}}}function ws(t,e,r){n(e)||r.onClose()}var zh=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Uh=(t,e)=>b(e,"empty"),Hh=(t,e)=>b(e,"all"),Wh=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Qh=y("<!> ",1),Gh=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><div><!></div> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="text-base-content/70">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Vh(t,e){X(e,!0);let r=H(!1),a=H(null),s=H(null),i=H(Re([])),o=H(""),l=H("empty"),u=H(Re({}));It(()=>{const Q={};e.products.forEach(we=>{e.productIds.includes(we.$id)&&(n(l)==="empty"?Q[we.$id]=!we.who||we.who.length===0:Q[we.$id]=!0)}),b(u,Q,!0)});const h=Z(()=>e.products.map(Q=>({id:Q.$id,label:Q.productName,title:Q.productName,selected:n(u)[Q.$id]}))),v=Z(()=>n(h).filter(Q=>Q.selected)),g=Z(()=>{const Q=new Set([...J.uniqueWho,...n(i)]);return Array.from(Q).map(we=>({id:we,label:we,selected:n(i).includes(we)}))}),m=Z(()=>`Gérer les volontaires (${n(v).length} produits sélectionnés)`),p=Z(()=>n(v).length===0?!1:n(i).length>0);function _(Q){const we=Q.trim();we&&!n(i).includes(we)&&b(i,[...n(i),we],!0)}function x(Q){b(i,n(i).filter(we=>we!==Q),!0)}function w(Q){n(i).includes(Q)?x(Q):_(Q)}function $(){n(o).trim()&&(_(n(o)),b(o,""))}function C(Q){n(u)[Q]=!n(u)[Q]}var S=Gh(),E=c(S),P=c(E),M=c(P),A=c(M),D=d(M,2);D.__click=[ws,r,e];var N=c(D);Ct(N,{class:"h-4 w-4"});var V=d(P,2),j=c(V);{var U=Q=>{var we=zh(),Oe=c(we);aa(Oe,{class:"h-4 w-4"});var ke=d(Oe,2),He=c(ke);O(()=>I(He,n(a))),f(Q,we)};k(j,Q=>{n(a)&&Q(U)})}var ie=d(j,2),L=c(ie),Y=c(L),W=c(Y),G=c(W);na(G,{get disabled(){return n(r)},onkeydown:Q=>{Q.key==="Enter"&&(Q.preventDefault(),$())},get value(){return n(o)},set value(Q){b(o,Q,!0)}});var F=d(W,2);F.__click=$;var K=c(F);Zo(K,{size:16});var oe=d(Y,2),Se=d(c(oe),2);Yr(Se,{get items(){return n(g)},onToggleItem:w,showIcon:!0,badgeSize:"btn-sm",badgeStyle:"btn-soft"});var xe=d(ie,2),re=d(c(xe),2),q=c(re);q.__click=[Uh,l];var ae=d(q,2);ae.__click=[Hh,l];var pe=d(re,2);Yr(pe,{get items(){return n(h)},onToggleItem:C,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var T=d(V,2),ne=c(T);ne.__click=[ws,r,e];var z=d(ne,2);z.__click=[Bh,p,r,a,s,v,e,i];var se=c(z);{var ye=Q=>{var we=Wh();f(Q,we)},Pe=Q=>{var we=Qh(),Oe=R(we);Dr(Oe,{class:"h-4 w-4"});var ke=d(Oe);O(()=>I(ke,` Appliquer à ${n(v).length??""} produit(s)`)),f(Q,we)};k(se,Q=>{n(r)?Q(ye):Q(Pe,!1)})}O(Q=>{I(A,n(m)),D.disabled=n(r),F.disabled=Q,Ne(q,1,`tab ${n(l)==="empty"?"tab-active":""}`),Ne(ae,1,`tab ${n(l)==="all"?"tab-active":""}`),ne.disabled=n(r),z.disabled=n(r)||!n(p)},[()=>n(r)||!n(o).trim()]),f(t,S),ee()}Ke(["click"]);async function Kh(t,e,r,a,s,i){if(!n(e).invoiceTotal||n(e).invoiceTotal<=0){b(r,"Le montant doit être supérieur à 0");return}b(a,!0),b(r,null);try{const o=J.currentMainId;if(!o)throw new Error("Aucun événement principal actif");n(s)?await kn(n(s),{price:n(e).invoiceTotal,invoiceTotal:n(e).invoiceTotal,store:n(e).store,notes:n(e).notes,who:n(e).who}):await Lo(o,void 0,n(e).invoiceTotal,n(e).store,n(e).notes,n(e).who),i()}catch(o){console.error("Erreur sauvegarde dépense:",o),b(r,o.message,!0)}finally{b(a,!1)}}var Jh=(t,e)=>e(!1),Fh=y('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),Yh=y('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),Zh=(t,e)=>b(e,!0),Xh=y('<button class="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> Ajouter une dépense</button>'),ep=y('<span class="loading loading-spinner loading-xs"></span>'),tp=y('<div class="text-error text-xs mt-2"> </div>'),rp=y('<div class="card bg-base-200 shadow-md animate-in fade-in slide-in-from-top-4 duration-300"><div class="card-body p-4"><h4 class="card-title text-sm"> </h4> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!> <!> <!> <!></div> <div class="card-actions justify-end mt-2"><button class="btn btn-sm btn-ghost">Annuler</button> <button class="btn btn-sm btn-primary"><!> </button></div> <!></div></div>'),ap=(t,e)=>e("date"),np=(t,e)=>e("store"),sp=(t,e)=>e("who"),op=(t,e)=>e("amount"),ip=y('<span class="italic text-base-content/70"> </span>'),lp=y('<span class="text-xs text-base-content/50 ml-1"> </span>'),cp=y('<span class="font-medium"> </span> <!>',1),up=(t,e,r)=>e(n(r)),dp=y('<tr class="hover"><td class="whitespace-nowrap"> </td><td class="max-w-xs truncate"><!></td><td> </td><td> </td><td class="text-right font-mono font-bold"> </td><td><button class="btn btn-ghost btn-square"><!></button></td></tr>'),vp=y('<tr><td colspan="7" class="text-center py-8 text-base-content/50">Aucune dépense trouvée</td></tr>'),fp=(t,e)=>e(!1),hp=(t,e)=>e(!1),pp=y('<dialog><div class="modal-box w-11/12 max-w-5xl h-[90vh] flex flex-col p-0 bg-base-100"><div class="p-4 border-b border-base-300 flex justify-between items-center bg-base-200 sticky top-0 z-10"><h3 class="font-bold text-lg flex items-center gap-2"><!> Gestion des Dépenses</h3> <button class="btn btn-sm btn-circle btn-ghost">✕</button></div> <div class="flex-1 overflow-y-auto p-4 space-y-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="stats shadow bg-primary text-primary-content"><div class="stat"><div class="stat-title text-primary-content/80">Total Global</div> <div class="stat-value"> </div> <div class="stat-desc text-primary-content/80"> </div></div></div> <div class="card bg-base-200 shadow-sm p-4"><h4 class="font-semibold mb-2 text-sm uppercase tracking-wider opacity-70">Par Magasin</h4> <div class="overflow-y-auto max-h-24 text-sm space-y-1"></div></div> <div class="card bg-base-200 shadow-sm p-4"><h4 class="font-semibold mb-2 text-sm uppercase tracking-wider opacity-70">Par Acheteur</h4> <div class="overflow-y-auto max-h-24 text-sm space-y-1"></div></div></div> <div class="flex justify-between items-center"><h4 class="font-bold text-sm uppercase opacity-70">Liste des transactions</h4> <!></div> <!> <div class="overflow-x-auto bg-base-100 rounded-lg border border-base-200"><table class="table table-zebra table-xs w-full"><thead class="bg-base-200 sticky top-0"><tr><th class="cursor-pointer hover:bg-base-300"> </th><th>Description</th><th class="cursor-pointer hover:bg-base-300"> </th><th class="cursor-pointer hover:bg-base-300"> </th><th class="cursor-pointer hover:bg-base-300 text-right"> </th><th><!></th></tr></thead><tbody><!><!></tbody></table></div></div> <div class="py-1 px-4 border-t border-base-300 bg-base-200 flex justify-between items-center sticky bottom-0 z-10"><button class="btn btn-ghost ms-auto">Fermer</button></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');function gp(t,e){X(e,!0);let r=ve(e,"isOpen",15,!1),a=H(!1),s=H(null),i=H(!1),o=H(Re({invoiceTotal:0,store:"",notes:"",who:""})),l=H(null);It(()=>{if(r()&&!n(l)){const be=localStorage.getItem("appwrite-user-name");be&&(n(o).who=be)}});let u=H("date"),h=H("desc"),v=Z(()=>J.financialStats),g=Z(()=>n(v).allPurchases),m=Z(()=>{let be=[...n(g)];return be.sort((De,Ge)=>{let Be,Ee;switch(n(u)){case"date":Be=new Date(De.orderDate||De.$createdAt).getTime(),Ee=new Date(Ge.orderDate||Ge.$createdAt).getTime();break;case"amount":Be=De.invoiceTotal||De.price||0,Ee=Ge.invoiceTotal||Ge.price||0;break;case"store":Be=(De.store||"").toLowerCase(),Ee=(Ge.store||"").toLowerCase();break;case"who":Be=(De.who||"").toLowerCase(),Ee=(Ge.who||"").toLowerCase();break}return Be<Ee?n(h)==="asc"?-1:1:Be>Ee?n(h)==="asc"?1:-1:0}),be});function p(be){n(u)===be?b(h,n(h)==="asc"?"desc":"asc",!0):(b(u,be,!0),b(h,"desc"))}function _(){const be=localStorage.getItem("appwrite-user-name")||"";b(o,{invoiceTotal:0,store:"",notes:"",who:be},!0),b(l,null),b(i,!1)}function x(be){b(o,{invoiceTotal:be.invoiceTotal||be.price||0,store:be.store||"",notes:be.notes||"",who:be.who||""},!0),b(l,be.$id,!0),b(i,!0)}function w(be){return be?new Date(be).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"-"}function $(be){return(be||0).toFixed(2)+" €"}var C=pp(),S=c(C),E=c(S),P=c(E),M=c(P);Uo(M,{});var A=d(P,2);A.__click=[Jh,r];var D=d(E,2),N=c(D),V=c(N),j=c(V),U=d(c(j),2),ie=c(U),L=d(U,2),Y=c(L),W=d(V,2),G=d(c(W),2);rt(G,21,()=>Object.entries(n(v).byStore).sort((be,De)=>De[1]-be[1]),Mr,(be,De)=>{var Ge=Z(()=>ga(n(De),2));let Be=()=>n(Ge)[0],Ee=()=>n(Ge)[1];var et=Fh(),ut=c(et),_t=c(ut),at=d(ut,2),bt=c(at);O(xt=>{I(_t,Be()),I(bt,xt)},[()=>$(Ee())]),f(be,et)});var F=d(W,2),K=d(c(F),2);rt(K,21,()=>Object.entries(n(v).byWho).sort((be,De)=>De[1]-be[1]),Mr,(be,De)=>{var Ge=Z(()=>ga(n(De),2));let Be=()=>n(Ge)[0],Ee=()=>n(Ge)[1];var et=Yh(),ut=c(et),_t=c(ut),at=d(ut,2),bt=c(at);O(xt=>{I(_t,Be()),I(bt,xt)},[()=>$(Ee())]),f(be,et)});var oe=d(N,2),Se=d(c(oe),2);{var xe=be=>{var De=Xh();De.__click=[Zh,i],f(be,De)};k(Se,be=>{n(i)||be(xe)})}var re=d(oe,2);{var q=be=>{var De=rp(),Ge=c(De),Be=c(Ge),Ee=c(Be),et=d(Be,2),ut=c(et);In(ut,{get disabled(){return n(a)},get value(){return n(o).invoiceTotal},set value(Ae){n(o).invoiceTotal=Ae}});var _t=d(ut,2);qr(_t,{get suggestions(){return J.uniqueStores},get disabled(){return n(a)},get value(){return n(o).store},set value(Ae){n(o).store=Ae}});var at=d(_t,2);na(at,{get suggestions(){return J.uniqueWho},get disabled(){return n(a)},get value(){return n(o).who},set value(Ae){n(o).who=Ae}});var bt=d(at,2);jr(bt,{get disabled(){return n(a)},get value(){return n(o).notes},set value(Ae){n(o).notes=Ae}});var xt=d(et,2),Ot=c(xt);Ot.__click=_;var Bt=d(Ot,2);Bt.__click=[Kh,o,s,a,l,_];var ft=c(Bt);{var ce=Ae=>{var Le=ep();f(Ae,Le)};k(ft,Ae=>{n(a)&&Ae(ce)})}var he=d(ft),Me=d(xt,2);{var je=Ae=>{var Le=tp(),Ue=c(Le);O(()=>I(Ue,n(s))),f(Ae,Le)};k(Me,Ae=>{n(s)&&Ae(je)})}O(()=>{I(Ee,n(l)?"Modifier la dépense":"Nouvelle Dépense"),Bt.disabled=n(a),I(he,` ${n(l)?"Enregistrer":"Ajouter"}`)}),f(be,De)};k(re,be=>{n(i)&&be(q)})}var ae=d(re,2),pe=c(ae),T=c(pe),ne=c(T),z=c(ne);z.__click=[ap,p];var se=c(z),ye=d(z,2);ye.__click=[np,p];var Pe=c(ye),Q=d(ye);Q.__click=[sp,p];var we=c(Q),Oe=d(Q);Oe.__click=[op,p];var ke=c(Oe),He=d(Oe),ot=c(He);du(ot,{size:14});var _e=d(T),le=c(_e);rt(le,17,()=>n(m),be=>be.$id,(be,De)=>{var Ge=dp(),Be=c(Ge),Ee=c(Be),et=d(Be),ut=c(et);{var _t=Ae=>{var Le=ip(),Ue=c(Le);O(()=>I(Ue,n(De).notes||"-")),f(Ae,Le)},at=Ae=>{var Le=cp(),Ue=R(Le),We=c(Ue),ht=d(Ue,2);{var Tt=Ye=>{var it=lp(),Je=c(it);O(()=>I(Je,`- ${n(De).notes??""}`)),f(Ye,it)};k(ht,Ye=>{n(De).notes&&Ye(Tt)})}O(()=>I(We,n(De)._productName||"Produit inconnu")),f(Ae,Le)};k(ut,Ae=>{n(De).status==="expense"?Ae(_t):Ae(at,!1)})}var bt=d(et),xt=c(bt),Ot=d(bt),Bt=c(Ot),ft=d(Ot),ce=c(ft),he=d(ft),Me=c(he);Me.__click=[up,x,De];var je=c(Me);ya(je,{size:14}),O((Ae,Le)=>{I(Ee,Ae),I(xt,n(De).store||"-"),I(Bt,n(De).who||"-"),I(ce,Le)},[()=>w(n(De).orderDate||n(De).$createdAt),()=>$(n(De).invoiceTotal||n(De).price)]),f(be,Ge)});var $e=d(le);{var Qe=be=>{var De=vp();f(be,De)};k($e,be=>{n(m).length===0&&be(Qe)})}var Ze=d(D,2),qe=c(Ze);qe.__click=[fp,r];var Te=d(S,2),Xe=c(Te);Xe.__click=[hp,r],O(be=>{Ne(C,1,`modal ${r()?"modal-open":""}`),I(ie,be),I(Y,`${n(g).length??""} transactions`),I(se,`Date ${n(u)==="date"?n(h)==="asc"?"↑":"↓":""}`),I(Pe,`Magasin ${n(u)==="store"?n(h)==="asc"?"↑":"↓":""}`),I(we,`Qui ${n(u)==="who"?n(h)==="asc"?"↑":"↓":""}`),I(ke,`Montant ${n(u)==="amount"?n(h)==="asc"?"↑":"↓":""}`)},[()=>$(n(v).totalGlobal)]),f(t,C),ee()}Ke(["click"]);var mp=y("<div><!></div>"),_p=y('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function bp(t,e){X(e,!0);let r=H(!1),a=ve(e,"width",3,"80"),s=ve(e,"bgClass",3,"bg-base-300");const i=Z(()=>"w-"+a());var o=te(),l=R(o);{var u=v=>{var g=mp(),m=c(g);de(m,()=>e.children??ue),O(()=>Ne(g,1,`${s()??""} ${(n(i)?n(i):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),f(v,g)},h=v=>{var g=_p(),m=R(g),p=c(m),_=d(p,2),x=d(c(_),2),w=c(x);de(w,()=>e.children??ue);var $=d(m,2),C=c($),S=c(C);Wo(S,{class:"h-6 w-6"}),rn(p,()=>n(r),E=>b(r,E)),f(v,g)};k(l,v=>{Nr.isMobile?v(h,!1):v(u)})}f(t,o),ee()}function yp(t,e){b(e,!0)}var wp=(t,e)=>b(e,!0),Sp=y('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button> <button class="btn btn-sm btn-primary" title="Ajouter un produit manuellement"><!> Produit</button></div> <!> <!> <!> <!> <!> <!> <!> <!></div>');function xp(t,e){X(e,!0);const r="100",a=Z(()=>J.stats);let s=H(null),i=H("recettes"),o=H(!1),l=H(!1),u=H(Re([])),h=H(Re([])),v=H(!1),g=H(Re([])),m=H(!1);function p(T,ne="recettes"){b(i,ne,!0),b(s,T,!0)}function _(){b(s,null)}function x(T,ne,z){b(u,ne,!0),b(h,z,!0),b(T==="who"?o:l,!0)}function w(T){(!T||T==="who")&&b(o,!1),(!T||T==="store")&&b(l,!1),b(u,[],!0),b(h,[],!0)}function $(T){console.log(`[ProductsTable] Modification groupée réussie: ${T.updatedCount} produits`)}function C(T){const ne=T.filter(z=>J.getProductModelById(z.$id)?.stats.hasMissing);console.log(`[ProductsTable] openGroupPurchaseModal: ${T.length} produits reçus → ${ne.length} produits avec quantités manquantes`),b(g,ne,!0),b(v,!0)}function S(){b(v,!1),b(g,[],!0)}function E(){console.log("[ProductsTable] Achat groupé créé avec succès"),S()}async function P(T,ne){try{if(!J.currentMainId)throw new Error("mainId non disponible");const z=ne.missingQuantities||[];if(z.length===0){console.log("Aucune quantité manquante à valider pour ce produit dans cette période");return}const se=z.filter(Pe=>Pe.q<0).map(Pe=>({...Pe,q:Math.abs(Pe.q)})).map(Pe=>{const{quantity:Q,unit:we}=on(Pe.q,Pe.u);return{q:Q,u:we}});let ye=T.$id;T.isSynced||(console.log(`[ProductsTable] Produit ${T.$id} local, création pour validation rapide...`),ye=(await Ht(T.$id,{},Q=>J.getEnrichedProductById(Q))).$id,console.log(`[ProductsTable] Produit sync créé: ${ye}`)),await jo(J.currentMainId,ye,se,{store:T.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${T.productName}`)}catch(z){console.error("[ProductsTable] Erreur validation rapide:",z),alert("Erreur lors de la validation rapide: "+z.message)}}let M=H(!1);var A=Sp(),D=c(A),N=c(D),V=c(N);ru(V,{class:"mr-1 h-4 w-4"});var j=d(V),U=d(N,2);U.__click=[wp,M];var ie=c(U);Uo(ie,{class:"mr-1 h-4 w-4"});var L=d(U,2);L.__click=[yp,m];var Y=c(L);Tn(Y,{class:"mr-1 h-4 w-4"});var W=d(D,2);bp(W,{width:r,children:(T,ne)=>{Tf(T,{})},$$slots:{default:!0}});var G=d(W,2);Nh(G,{onOpenModal:p,onOpenGroupEditModal:x,onOpenGroupPurchaseModal:C,onQuickValidation:P});var F=d(G,2);{let T=Z(()=>n(s)||"");Qv(F,{get productId(){return n(T)},get initialTab(){return n(i)},onClose:_})}var K=d(F,2);{var oe=T=>{Vh(T,{get productIds(){return n(u)},get products(){return n(h)},onClose:()=>w("who"),onSuccess:$})};k(K,T=>{n(o)&&T(oe)})}var Se=d(K,2);{var xe=T=>{Lh(T,{get productIds(){return n(u)},get products(){return n(h)},onClose:()=>w("store"),onSuccess:$})};k(Se,T=>{n(l)&&T(xe)})}var re=d(Se,2);{var q=T=>{ed(T,{get products(){return n(g)},onClose:S,onSuccess:E})};k(re,T=>{n(v)&&T(q)})}var ae=d(re,2);od(ae,{get open(){return n(m)},set open(T){b(m,T,!0)}});var pe=d(ae,2);gp(pe,{get isOpen(){return n(M)},set isOpen(T){b(M,T,!0)}}),O(()=>{Ne(A,1,`space-y-6 ${Nr.isMobile?"":"ml-100"}`),I(j,` ${n(a).total??""}`)}),f(t,A),ee()}Ke(["click"]);ji();var Pp=y('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function $p(t){var e=Pp();f(t,e)}var kp=y('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Ep(t,e){var r=kp(),a=d(c(r),2),s=d(c(a),2),i=c(s);O(()=>I(i,e.message)),f(t,r)}var Ap=y('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Tp(t,e){var r=Ap(),a=c(r),s=c(a);aa(s,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=d(s,2),o=d(c(i),2),l=c(o);O(()=>I(l,e.message||"Erreur inconnue")),f(t,r)}function Mp(t){t.stopPropagation()}var Np=(t,e)=>t.key==="Escape"&&e(),Dp=y('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),Cp=y('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),Ip=(t,e)=>b(e,!1),Op=y('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),Rp=(t,e)=>b(e,!0),qp=(t,e)=>b(e,!1),jp=y(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),Lp=(t,e)=>b(e,!0),Bp=y('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),zp=y('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function Up(t,e){X(e,!0);let r=ve(e,"onClose",3,()=>{}),a=ve(e,"onAuthSuccess",3,()=>{}),s=H(!0),i=H(!1),o=H(""),l=H(""),u=H(""),h=H(""),v=H(""),g=H(""),m=H(""),p=H(""),_=H(!1);function x(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function w(F){if(F.preventDefault(),!n(u)||!n(h)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{await(await x().getAccount()).createEmailPasswordSession(n(u),n(h)),b(l,"Connexion réussie !"),setTimeout(()=>{a()()},1e3)}catch(K){console.error("Erreur de connexion:",K),b(o,K.message||"Erreur lors de la connexion",!0)}finally{b(i,!1)}}async function $(F){if(F.preventDefault(),!n(v)||!n(g)||!n(m)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{const oe=await x().getAccount();await oe.create("unique()",n(g),n(m),n(v)),await oe.createEmailPasswordSession(n(g),n(m)),b(l,"Compte créé et connecté !"),setTimeout(()=>{a()()},1e3)}catch(K){console.error("Erreur d'inscription:",K),b(o,K.message||"Erreur lors de la création du compte",!0)}finally{b(i,!1)}}async function C(F){if(F.preventDefault(),!n(p)){b(o,"Veuillez entrer votre email");return}b(i,!0),b(o,"");try{await(await x().getAccount()).createRecovery(n(p),`${window.location.origin}/reset-password`),b(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{b(_,!1),b(p,"")},2e3)}catch(K){console.error("Erreur mot de passe oublié:",K),b(o,K.message||"Erreur lors de l'envoi de l'email",!0)}finally{b(i,!1)}}function S(){n(i)||r()()}It(()=>{(n(s)||n(_))&&(b(o,""),b(l,""))});var E=zp();E.__click=S,E.__keydown=[Np,S];var P=c(E);P.__click=[Mp];var M=c(P),A=c(M),D=c(A),N=d(A,2);N.__click=S;var V=d(M,2),j=c(V);{var U=F=>{var K=Dp(),oe=c(K);O(()=>I(oe,n(o))),f(F,K)};k(j,F=>{n(o)&&F(U)})}var ie=d(j,2);{var L=F=>{var K=Cp(),oe=c(K);O(()=>I(oe,n(l))),f(F,K)};k(ie,F=>{n(l)&&F(L)})}var Y=d(ie,2);{var W=F=>{var K=Op(),oe=R(K),Se=c(oe),xe=d(c(Se),2),re=d(Se,2),q=c(re),ae=d(oe,2),pe=c(ae);pe.__click=[Ip,_],O(()=>{xe.disabled=n(i),re.disabled=n(i),I(q,n(i)?"Envoi...":"Envoyer l'email de réinitialisation"),pe.disabled=n(i)}),ha("submit",oe,C),Ve(xe,()=>n(p),T=>b(p,T)),f(F,K)},G=F=>{var K=te(),oe=R(K);{var Se=re=>{var q=jp(),ae=R(q),pe=c(ae),T=d(c(pe),2),ne=d(pe,2),z=d(c(ne),2),se=d(ne,2),ye=c(se),Pe=d(ae,2),Q=c(Pe);Q.__click=[Rp,_];var we=d(Q,2),Oe=d(c(we));Oe.__click=[qp,s],O(()=>{T.disabled=n(i),z.disabled=n(i),se.disabled=n(i),I(ye,n(i)?"Connexion...":"Se connecter"),Q.disabled=n(i),Oe.disabled=n(i)}),ha("submit",ae,w),Ve(T,()=>n(u),ke=>b(u,ke)),Ve(z,()=>n(h),ke=>b(h,ke)),f(re,q)},xe=re=>{var q=Bp(),ae=R(q),pe=c(ae),T=d(c(pe),2),ne=d(pe,2),z=d(c(ne),2),se=d(ne,2),ye=d(c(se),2),Pe=d(se,2),Q=c(Pe),we=d(ae,2),Oe=d(c(we));Oe.__click=[Lp,s],O(()=>{T.disabled=n(i),z.disabled=n(i),ye.disabled=n(i),Pe.disabled=n(i),I(Q,n(i)?"Création...":"Créer un compte"),Oe.disabled=n(i)}),ha("submit",ae,$),Ve(T,()=>n(v),ke=>b(v,ke)),Ve(z,()=>n(g),ke=>b(g,ke)),Ve(ye,()=>n(m),ke=>b(m,ke)),f(re,q)};k(oe,re=>{n(s)?re(Se):re(xe,!1)},!0)}f(F,K)};k(Y,F=>{n(_)?F(W):F(G,!1)})}O(()=>{I(D,n(_)?"Mot de passe oublié":n(s)?"Connexion":"Inscription"),N.disabled=n(i)}),f(t,E),ee()}Ke(["click","keydown"]);var Hp=(t,e,r)=>e(n(r)),Wp=y('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),Qp=(t,e,r)=>e(n(r)),Gp=y('<button class="btn btn-ghost btn-sm btn-square" title="Fermer" aria-label="Fermer la notification"><!></button>'),Vp=y('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!></div></div></div>'),Kp=y("<div></div>");function Jp(t,e){X(e,!0);let r=ve(e,"position",3,"toast-right toast-bottom"),a=ve(e,"padding",3,"md");const s=Z(()=>a()==="sm"?"px-2 py-0.5":""),i=Z(()=>$t.toasts);function o(v){return v==="success"||v==="info"}function l(v){$t.dismiss(v.id)}function u(v){e.onShowDetails?.({id:v.id,message:v.message,details:v.details})}var h=Kp();rt(h,21,()=>n(i),v=>v.id,(v,g)=>{var m=Vp(),p=c(m),_=c(p),x=c(_);{var w=D=>{Go(D,{class:"h-5 w-5 animate-spin"})};k(x,D=>{n(g).state==="loading"&&D(w)})}var $=d(x,2),C=c($),S=d(_,2),E=c(S);{var P=D=>{var N=Wp();N.__click=[Hp,u,g];var V=c(N);Ho(V,{class:"h-3 w-3"}),f(D,N)};k(E,D=>{n(g).details&&D(P)})}var M=d(E,2);{var A=D=>{var N=Gp();N.__click=[Qp,l,g];var V=c(N);Ct(V,{class:"ms-1 h-4 w-4"}),f(D,N)};k(M,D=>{(n(g).state==="error"||!o(n(g).state))&&D(A)})}O(()=>{Ne(m,1,`alert alert-${n(g).state??""} max-w-sm ${n(s)??""} shadow-lg ${n(g).state==="error"?"":"alert-soft"}`),I(C,n(g).message)}),f(v,m)}),O(()=>Ne(h,1,`toast ${r()??""} z-50`)),f(t,h),ee()}Ke(["click"]);var Fp=y('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function Yp(t){var e=Fp(),r=c(e),a=d(r,2);Fo(a,{class:"swap-on fill-current"});var s=d(a,2);Vo(s,{class:"swap-off fill-current"}),f(t,e)}function Zp(t,e){b(e,!0)}var Xp=y('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),eg=y('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),tg=y('<div class="text-base-content/60"> </div>'),rg=y('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),ag=y('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),ng=y('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),sg=y('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!></main>',1),og=y('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function ig(t,e){X(e,!0);let r,a=H(null),s=H(!0),i=H(!1),o=H(!1);function l(P,M,A){localStorage.setItem("appwrite-user-email",P),localStorage.setItem("appwrite-user-name",M)}async function u(){const P=ps();r=qc(P);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const D=await(await window.AppwriteClient.getAccount()).get();l(D.email,D.name),await J.initialize(r,P)}catch(M){const A=M instanceof Error?M.message:"Erreur lors de l'initialisation";b(a,A,!0),console.error("[App] Erreur initialisation:",M)}finally{b(s,!1)}}fo(async()=>{await u()});async function h(){b(o,!1),b(s,!0),b(a,null),await u()}zl(()=>{J.destroy()});async function v(){if(!(!r||n(i))){b(i,!0);try{const P=ps();await J.forceReload(r,P)}catch(P){console.error("[App] Erreur lors du rechargement forcé:",P)}finally{b(i,!1)}}}const g=Z(()=>n(a)||J.error),m=Z(()=>n(s)||J.loading);var p=og(),_=R(p),x=c(_);Jp(x,{});var w=d(x,2);{var $=P=>{$p(P)},C=P=>{var M=sg(),A=R(M),D=c(A),N=c(D),V=d(c(N),2),j=c(V);{var U=z=>{var se=Xp();f(z,se)};k(j,z=>{J.realtimeConnected&&z(U)})}var ie=d(j,2);{var L=z=>{var se=eg();f(z,se)};k(ie,z=>{J.syncing&&z(L)})}var Y=d(ie,2);{var W=z=>{var se=tg(),ye=c(se);O(Pe=>I(ye,`Maj: ${Pe??""}`),[()=>new Date(J.lastSync).toLocaleTimeString()]),f(z,se)};k(Y,z=>{J.lastSync&&z(W)})}var G=d(Y,2);Yp(G);var F=d(G,2);{var K=z=>{var se=rg();let ye;se.__click=v;var Pe=c(se);vu(Pe,{class:"h-4 w-4"}),O(Q=>{ye=Ne(se,1,"btn btn-outline btn-sm",null,ye,Q),se.disabled=n(i)||J.loading},[()=>({loading:n(i)||J.loading})]),f(z,se)};k(F,z=>{n(a)||z(K)})}var oe=d(F,2);{var Se=z=>{var se=ag(),ye=c(se);ye.__click=[Zp,o];var Pe=c(ye);ou(Pe,{class:"mr-2 h-4 w-4"}),f(z,se)};k(oe,z=>{n(a)&&z(Se)})}var xe=d(A,2),re=c(xe);{var q=z=>{Tp(z,{get message(){return n(g)}})},ae=z=>{var se=te(),ye=R(se);{var Pe=Q=>{Ep(Q,{get message(){return n(g)}})};k(ye,Q=>{n(g)&&Q(Pe)},!0)}f(z,se)};k(re,z=>{n(a)?z(q):z(ae,!1)})}var pe=d(re,2);{var T=z=>{xp(z,{})},ne=z=>{var se=te(),ye=R(se);{var Pe=Q=>{var we=ng();f(Q,we)};k(ye,Q=>{!J.loading&&!n(a)&&Q(Pe)},!0)}f(z,se)};k(pe,z=>{J.enrichedProducts.length>0?z(T):z(ne,!1)})}f(P,M)};k(w,P=>{n(m)?P($):P(C,!1)})}var S=d(_,2);{var E=P=>{Up(P,{onClose:()=>b(o,!1),onAuthSuccess:h})};k(S,P=>{n(o)&&P(E)})}f(t,p),ee()}Ke(["click"]);const ri=document.getElementById("app_products");if(!ri)throw new Error("Élément target non trouvé: #app_products");xl(ig,{target:ri});
