(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const ps=!1;var Fr=Array.isArray,Ko=Array.prototype.indexOf,sn=Array.from,Ga=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Jo=Object.getOwnPropertyDescriptors,gs=Object.prototype,Yo=Array.prototype,on=Object.getPrototypeOf,Tn=Object.isExtensible;function Lr(t){return typeof t=="function"}const fe=()=>{};function Fo(t){for(var e=0;e<t.length;e++)t[e]()}function ms(){var t,e,r=new Promise((a,s)=>{t=a,e=s});return{promise:r,resolve:t,reject:e}}function ha(t,e){if(Array.isArray(t))return t;if(!(Symbol.iterator in t))return Array.from(t);const r=[];for(const a of t)if(r.push(a),r.length===e)break;return r}const bt=2,ln=4,cn=8,gr=16,Gt=32,mr=64,un=128,At=256,pa=512,ft=1024,St=2048,sr=4096,Dt=8192,_r=16384,dn=32768,br=65536,Mn=1<<17,Zo=1<<18,Cr=1<<19,Xo=1<<20,Va=1<<21,ba=1<<22,cr=1<<23,ur=Symbol("$state"),_s=Symbol("legacy props"),ei=Symbol(""),Qr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function bs(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ti(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ri(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ai(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ni(t){throw new Error("https://svelte.dev/e/effect_orphan")}function si(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function oi(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function ii(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function li(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ci(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ui(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ya=1,wa=2,ys=4,di=8,vi=16,fi=1,hi=2,pi=4,gi=8,mi=16,_i=1,bi=2,ot=Symbol(),yi="http://www.w3.org/1999/xhtml",wi="http://www.w3.org/2000/svg",xi="@attach";function Si(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Pi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let $i=!1;function ws(t){return t===this.v}function xs(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function ki(t,e){return t!==e}function Ss(t){return!xs(t,this.v)}let Ir=!1,Ei=!1;function Ai(){Ir=!0}const Ti=[];function Sr(t,e=!1,r=!1){return ua(t,new Map,"",Ti,null,r)}function ua(t,e,r,a,s=null,i=!1){if(typeof t=="object"&&t!==null){var o=e.get(t);if(o!==void 0)return o;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(Fr(t)){var l=Array(t.length);e.set(t,l),s!==null&&e.set(s,l);for(var u=0;u<t.length;u+=1){var h=t[u];u in t&&(l[u]=ua(h,e,r,a,null,i))}return l}if(on(t)===gs){l={},e.set(t,l),s!==null&&e.set(s,l);for(var v in t)l[v]=ua(t[v],e,r,a,null,i);return l}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function"&&!i)return ua(t.toJSON(),e,r,a,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}let at=null;function kr(t){at=t}function Z(t,e=!1,r){at={p:at,c:null,e:null,s:t,x:null,l:Ir&&!e?{s:null,u:null,$:[]}:null}}function X(t){var e=at,r=e.e;if(r!==null){e.e=null;for(var a of r)qs(a)}return at=e.p,{}}function Or(){return!Ir||at!==null&&at.l===null}let ir=[];function Ps(){var t=ir;ir=[],Fo(t)}function fr(t){if(ir.length===0&&!Wr){var e=ir;queueMicrotask(()=>{e===ir&&Ps()})}ir.push(t)}function Mi(){for(;ir.length>0;)Ps()}const Ni=new WeakMap;function $s(t){var e=qe;if(e===null)return Le.f|=cr,t;if((e.f&dn)===0){if((e.f&un)===0)throw!e.parent&&t instanceof Error&&ks(t),t;e.b.error(t)}else Er(t,e)}function Er(t,e){for(;e!==null;){if((e.f&un)!==0)try{e.b.error(t);return}catch(r){t=r}e=e.parent}throw t instanceof Error&&ks(t),t}function ks(t){const e=Ni.get(t);e&&(Ga(t,"message",{value:e.message}),Ga(t,"stack",{value:e.stack}))}const sa=new Set;let We=null,da=null,Ka=new Set,qt=[],xa=null,Ja=!1,Wr=!1;class Et{current=new Map;#e=new Map;#t=new Set;#s=0;#o=null;#d=[];#c=[];#u=[];#l=[];#v=[];#i=[];skipped_effects=new Set;process(e){qt=[],da=null;var r=Et.apply(this);for(const i of e)this.#f(i);if(this.#s===0){this.#h();var a=this.#c,s=this.#u;this.#c=[],this.#u=[],this.#l=[],da=this,We=null,Nn(a),Nn(s),da=null,this.#o?.resolve()}else this.#a(this.#c),this.#a(this.#u),this.#a(this.#l);r();for(const i of this.#d)Jr(i);this.#d=[]}#f(e){e.f^=ft;for(var r=e.first;r!==null;){var a=r.f,s=(a&(Gt|mr))!==0,i=s&&(a&ft)!==0,o=i||(a&Dt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=ft:(a&ln)!==0?this.#u.push(r):(a&ft)===0&&((a&ba)!==0&&r.b?.is_pending()?this.#d.push(r):Ea(r)&&((r.f&gr)!==0&&this.#l.push(r),Jr(r)));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#a(e){for(const r of e)((r.f&St)!==0?this.#v:this.#i).push(r),gt(r,ft);e.length=0}capture(e,r){this.#e.has(e)||this.#e.set(e,r),this.current.set(e,e.v)}activate(){We=this}deactivate(){We=null}flush(){if(qt.length>0){if(this.activate(),Es(),We!==null&&We!==this)return}else this.#s===0&&this.#h();this.deactivate();for(const e of Ka)if(Ka.delete(e),e(),We!==null)break}#h(){for(const e of this.#t)e();if(this.#t.clear(),sa.size>1){this.#e.clear();let e=!0;for(const r of sa){if(r===this){e=!1;continue}for(const[a,s]of this.current){if(r.current.has(a))if(e)r.current.set(a,s);else continue;As(a)}if(qt.length>0){We=r;const a=Et.apply(r);for(const s of qt)r.#f(s);qt=[],a()}}We=null}sa.delete(this)}increment(){this.#s+=1}decrement(){this.#s-=1;for(const e of this.#v)gt(e,St),hr(e);for(const e of this.#i)gt(e,sr),hr(e);this.flush()}add_callback(e){this.#t.add(e)}settled(){return(this.#o??=ms()).promise}static ensure(){if(We===null){const e=We=new Et;sa.add(We),Wr||Et.enqueue(()=>{We===e&&e.flush()})}return We}static enqueue(e){fr(e)}static apply(e){return fe}}function Di(t){var e=Wr;Wr=!0;try{for(var r;;){if(Mi(),qt.length===0&&(We?.flush(),qt.length===0))return xa=null,r;Es()}}finally{Wr=e}}function Es(){var t=$r;Ja=!0;try{var e=0;for(On(!0);qt.length>0;){var r=Et.ensure();if(e++>1e3){var a,s;Ci()}r.process(qt),Xt.clear()}}finally{Ja=!1,On(t),xa=null}}function Ci(){try{si()}catch(t){Er(t,xa)}}let or=null;function Nn(t){var e=t.length;if(e!==0){for(var r=0;r<e;){var a=t[r++];if((a.f&(_r|Dt))===0&&Ea(a)&&(or=[],Jr(a),a.deps===null&&a.first===null&&a.nodes_start===null&&(a.teardown===null&&a.ac===null?Bs(a):a.fn=null),or?.length>0)){Xt.clear();for(const s of or)Jr(s);or=[]}}or=null}}function As(t){if(t.reactions!==null)for(const e of t.reactions){const r=e.f;(r&bt)!==0?As(e):(r&(ba|gr))!==0&&(gt(e,St),hr(e))}}function hr(t){for(var e=xa=t;e.parent!==null;){e=e.parent;var r=e.f;if(Ja&&e===qe&&(r&gr)!==0)return;if((r&(mr|Gt))!==0){if((r&ft)===0)return;e.f^=ft}}qt.push(e)}function vn(t){let e=0,r=rr(0),a;return()=>{Ji()&&(n(r),_n(()=>(e===0&&(a=Rr(()=>t(()=>jt(r)))),e+=1,()=>{fr(()=>{e-=1,e===0&&(a?.(),a=void 0,jt(r))})})))}}var Ii=br|Cr|un;function Oi(t,e,r){new Ri(t,e,r)}class Ri{parent;#e=!1;#t;#s=null;#o;#d;#c;#u=null;#l=null;#v=null;#i=null;#f=0;#a=0;#h=!1;#g=null;#_=()=>{this.#g&&Ar(this.#g,this.#f)};#b=vn(()=>(this.#g=rr(this.#f),()=>{this.#g=null}));constructor(e,r,a){this.#t=e,this.#o=r,this.#d=a,this.parent=qe.b,this.#e=!!this.#o.pending,this.#c=Jt(()=>{qe.b=this;{try{this.#u=ut(()=>a(this.#t))}catch(s){this.error(s)}this.#a>0?this.#p():this.#e=!1}},Ii)}#n(){try{this.#u=ut(()=>this.#d(this.#t))}catch(e){this.error(e)}this.#e=!1}#y(){const e=this.#o.pending;e&&(this.#l=ut(()=>e(this.#t)),Et.enqueue(()=>{this.#u=this.#m(()=>(Et.ensure(),ut(()=>this.#d(this.#t)))),this.#a>0?this.#p():(Ht(this.#l,()=>{this.#l=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#o.pending}#m(e){var r=qe,a=Le,s=at;Bt(this.#c),_t(this.#c),kr(this.#c.ctx);try{return e()}catch(i){return $s(i),null}finally{Bt(r),_t(a),kr(s)}}#p(){const e=this.#o.pending;this.#u!==null&&(this.#i=document.createDocumentFragment(),qi(this.#u,this.#i)),this.#l===null&&(this.#l=ut(()=>e(this.#t)))}#x(e){if(!this.has_pending_snippet()){this.parent&&this.parent.#x(e);return}this.#a+=e,this.#a===0&&(this.#e=!1,this.#l&&Ht(this.#l,()=>{this.#l=null}),this.#i&&(this.#t.before(this.#i),this.#i=null),fr(()=>{Et.ensure().flush()}))}update_pending_count(e){this.#x(e),this.#f+=e,Ka.add(this.#_)}get_effect_pending(){return this.#b(),n(this.#g)}error(e){var r=this.#o.onerror;let a=this.#o.failed;if(this.#h||!r&&!a)throw e;this.#u&&(dt(this.#u),this.#u=null),this.#l&&(dt(this.#l),this.#l=null),this.#v&&(dt(this.#v),this.#v=null);var s=!1,i=!1;const o=()=>{if(s){Pi();return}s=!0,i&&ui(),Et.ensure(),this.#f=0,this.#v!==null&&Ht(this.#v,()=>{this.#v=null}),this.#e=this.has_pending_snippet(),this.#u=this.#m(()=>(this.#h=!1,ut(()=>this.#d(this.#t)))),this.#a>0?this.#p():this.#e=!1};var l=Le;try{_t(null),i=!0,r?.(e,o),i=!1}catch(u){Er(u,this.#c&&this.#c.parent)}finally{_t(l)}a&&fr(()=>{this.#v=this.#m(()=>{this.#h=!0;try{return ut(()=>{a(this.#t,()=>e,()=>o)})}catch(u){return Er(u,this.#c.parent),null}finally{this.#h=!1}})})}}function qi(t,e){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var s=r===a?null:Zr(r);e.append(r),r=s}}function Ts(t,e,r){const a=Or()?Sa:fn;if(e.length===0){r(t.map(a));return}var s=We,i=qe,o=ji();Promise.all(e.map(l=>Li(l))).then(l=>{o();try{r([...t.map(a),...l])}catch(u){(i.f&_r)===0&&Er(u,i)}s?.deactivate(),Ms()}).catch(l=>{Er(l,i)})}function ji(){var t=qe,e=Le,r=at,a=We;return function(){Bt(t),_t(e),kr(r),a?.activate()}}function Ms(){Bt(null),_t(null),kr(null)}function Sa(t){var e=bt|St,r=Le!==null&&(Le.f&bt)!==0?Le:null;return qe===null||r!==null&&(r.f&At)!==0?e|=At:qe.f|=Cr,{ctx:at,deps:null,effects:null,equals:ws,f:e,fn:t,reactions:null,rv:0,v:ot,wv:0,parent:r??qe,ac:null}}function Li(t,e){let r=qe;r===null&&ti();var a=r.b,s=void 0,i=rr(ot),o=!Le,l=new Map;return Fi(()=>{var u=ms();s=u.promise;try{Promise.resolve(t()).then(u.resolve,u.reject)}catch(p){u.reject(p)}var h=We,v=a.is_pending();o&&(a.update_pending_count(1),v||(h.increment(),l.get(h)?.reject(Qr),l.set(h,u)));const g=(p,m=void 0)=>{v||h.activate(),m?m!==Qr&&(i.f|=cr,Ar(i,m)):((i.f&cr)!==0&&(i.f^=cr),Ar(i,p)),o&&(a.update_pending_count(-1),v||h.decrement()),Ms()};u.promise.then(g,p=>g(null,p||"unknown"))}),gn(()=>{for(const u of l.values())u.reject(Qr)}),new Promise(u=>{function h(v){function g(){v===s?u(i):h(s)}v.then(g,g)}h(s)})}function J(t){const e=Sa(t);return Hs(e),e}function fn(t){const e=Sa(t);return e.equals=Ss,e}function Ns(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)dt(e[r])}}function Bi(t){for(var e=t.parent;e!==null;){if((e.f&bt)===0)return e;e=e.parent}return null}function hn(t){var e,r=qe;Bt(Bi(t));try{Ns(t),e=Vs(t)}finally{Bt(r)}return e}function Ds(t){var e=hn(t);if(t.equals(e)||(t.v=e,t.wv=Ws()),!yr){var r=(Yt||(t.f&At)!==0)&&t.deps!==null?sr:ft;gt(t,r)}}const Xt=new Map;function rr(t,e){var r={f:0,v:t,reactions:null,equals:ws,rv:0,wv:0};return r}function H(t,e){const r=rr(t);return Hs(r),r}function zi(t,e=!1,r=!0){const a=rr(t);return e||(a.equals=Ss),Ir&&r&&at!==null&&at.l!==null&&(at.l.s??=[]).push(a),a}function b(t,e,r=!1){Le!==null&&(!Mt||(Le.f&Mn)!==0)&&Or()&&(Le.f&(bt|gr|ba|Mn))!==0&&!Qt?.includes(t)&&ci();let a=r?Be(e):e;return Ar(t,a)}function Ar(t,e){if(!t.equals(e)){var r=t.v;yr?Xt.set(t,e):Xt.set(t,r),t.v=e;var a=Et.ensure();a.capture(t,r),(t.f&bt)!==0&&((t.f&St)!==0&&hn(t),gt(t,(t.f&At)===0?ft:sr)),t.wv=Ws(),Cs(t,St),Or()&&qe!==null&&(qe.f&ft)!==0&&(qe.f&(Gt|mr))===0&&($t===null?el([t]):$t.push(t))}return e}function jt(t){b(t,t.v+1)}function Cs(t,e){var r=t.reactions;if(r!==null)for(var a=Or(),s=r.length,i=0;i<s;i++){var o=r[i],l=o.f;if(!(!a&&o===qe)){var u=(l&St)===0;u&&gt(o,e),(l&bt)!==0?Cs(o,sr):u&&((l&gr)!==0&&or!==null&&or.push(o),hr(o))}}}function Be(t){if(typeof t!="object"||t===null||ur in t)return t;const e=on(t);if(e!==gs&&e!==Yo)return t;var r=new Map,a=Fr(t),s=H(0),i=Wt,o=l=>{if(Wt===i)return l();var u=Le,h=Wt;_t(null),qn(i);var v=l();return _t(u),qn(h),v};return a&&r.set("length",H(t.length)),new Proxy(t,{defineProperty(l,u,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&ii();var v=r.get(u);return v===void 0?v=o(()=>{var g=H(h.value);return r.set(u,g),g}):b(v,h.value,!0),!0},deleteProperty(l,u){var h=r.get(u);if(h===void 0){if(u in l){const v=o(()=>H(ot));r.set(u,v),jt(s)}}else b(h,ot),jt(s);return!0},get(l,u,h){if(u===ur)return t;var v=r.get(u),g=u in l;if(v===void 0&&(!g||Zt(l,u)?.writable)&&(v=o(()=>{var m=Be(g?l[u]:ot),_=H(m);return _}),r.set(u,v)),v!==void 0){var p=n(v);return p===ot?void 0:p}return Reflect.get(l,u,h)},getOwnPropertyDescriptor(l,u){var h=Reflect.getOwnPropertyDescriptor(l,u);if(h&&"value"in h){var v=r.get(u);v&&(h.value=n(v))}else if(h===void 0){var g=r.get(u),p=g?.v;if(g!==void 0&&p!==ot)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return h},has(l,u){if(u===ur)return!0;var h=r.get(u),v=h!==void 0&&h.v!==ot||Reflect.has(l,u);if(h!==void 0||qe!==null&&(!v||Zt(l,u)?.writable)){h===void 0&&(h=o(()=>{var p=v?Be(l[u]):ot,m=H(p);return m}),r.set(u,h));var g=n(h);if(g===ot)return!1}return v},set(l,u,h,v){var g=r.get(u),p=u in l;if(a&&u==="length")for(var m=h;m<g.v;m+=1){var _=r.get(m+"");_!==void 0?b(_,ot):m in l&&(_=o(()=>H(ot)),r.set(m+"",_))}if(g===void 0)(!p||Zt(l,u)?.writable)&&(g=o(()=>H(void 0)),b(g,Be(h)),r.set(u,g));else{p=g.v!==ot;var S=o(()=>Be(h));b(g,S)}var w=Reflect.getOwnPropertyDescriptor(l,u);if(w?.set&&w.set.call(v,h),!p){if(a&&typeof u=="string"){var P=r.get("length"),C=Number(u);Number.isInteger(C)&&C>=P.v&&b(P,C+1)}jt(s)}return!0},ownKeys(l){n(s);var u=Reflect.ownKeys(l).filter(g=>{var p=r.get(g);return p===void 0||p.v!==ot});for(var[h,v]of r)v.v!==ot&&!(h in l)&&u.push(h);return u},setPrototypeOf(){li()}})}function Dn(t){try{if(t!==null&&typeof t=="object"&&ur in t)return t[ur]}catch{}return t}function Ui(t,e){return Object.is(Dn(t),Dn(e))}var Cn,Is,Os,Rs;function Hi(){if(Cn===void 0){Cn=window,Is=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,r=Text.prototype;Os=Zt(e,"firstChild").get,Rs=Zt(e,"nextSibling").get,Tn(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Tn(r)&&(r.__t=void 0)}}function Vt(t=""){return document.createTextNode(t)}function Tr(t){return Os.call(t)}function Zr(t){return Rs.call(t)}function c(t,e){return Tr(t)}function R(t,e=!1){{var r=Tr(t);return r instanceof Comment&&r.data===""?Zr(r):r}}function d(t,e=1,r=!1){let a=t;for(;e--;)a=Zr(a);return a}function Qi(t){t.textContent=""}function Pa(){return!1}function Wi(t,e){if(e){const r=document.body;t.autofocus=!0,fr(()=>{document.activeElement===r&&t.focus()})}}let In=!1;function Gi(){In||(In=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()})},{capture:!0}))}function $a(t){var e=Le,r=qe;_t(null),Bt(null);try{return t()}finally{_t(e),Bt(r)}}function pn(t,e,r,a=r){t.addEventListener(e,()=>$a(r));const s=t.__on_r;s?t.__on_r=()=>{s(),a(!0)}:t.__on_r=()=>a(!0),Gi()}function Vi(t){qe===null&&Le===null&&ni(),Le!==null&&(Le.f&At)!==0&&qe===null&&ai(),yr&&ri()}function Ki(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function Kt(t,e,r,a=!0){var s=qe;s!==null&&(s.f&Dt)!==0&&(t|=Dt);var i={ctx:at,deps:null,nodes_start:null,nodes_end:null,f:t|St,first:null,fn:e,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Jr(i),i.f|=dn}catch(u){throw dt(i),u}else e!==null&&hr(i);if(a){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Cr)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&Ki(o,s),Le!==null&&(Le.f&bt)!==0&&(t&mr)===0)){var l=Le;(l.effects??=[]).push(o)}}return i}function Ji(){return Le!==null&&!Mt}function gn(t){const e=Kt(cn,null,!1);return gt(e,ft),e.teardown=t,e}function It(t){Vi();var e=qe.f,r=!Le&&(e&Gt)!==0&&(e&dn)===0;if(r){var a=at;(a.e??=[]).push(t)}else return qs(t)}function qs(t){return Kt(ln|Xo,t,!1)}function Yi(t){Et.ensure();const e=Kt(mr|Cr,t,!0);return(r={})=>new Promise(a=>{r.outro?Ht(e,()=>{dt(e),a(void 0)}):(dt(e),a(void 0))})}function mn(t){return Kt(ln,t,!1)}function Fi(t){return Kt(ba|Cr,t,!0)}function _n(t,e=0){return Kt(cn|e,t,!0)}function O(t,e=[],r=[]){Ts(e,r,a=>{Kt(cn,()=>t(...a.map(n)),!0)})}function Jt(t,e=0){var r=Kt(gr|e,t,!0);return r}function ut(t,e=!0){return Kt(Gt|Cr,t,!0,e)}function js(t){var e=t.teardown;if(e!==null){const r=yr,a=Le;Rn(!0),_t(null);try{e.call(null)}finally{Rn(r),_t(a)}}}function Ls(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){const s=r.ac;s!==null&&$a(()=>{s.abort(Qr)});var a=r.next;(r.f&mr)!==0?r.parent=null:dt(r,e),r=a}}function Zi(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&Gt)===0&&dt(e),e=r}}function dt(t,e=!0){var r=!1;(e||(t.f&Zo)!==0)&&t.nodes_start!==null&&t.nodes_end!==null&&(Xi(t.nodes_start,t.nodes_end),r=!0),Ls(t,e&&!r),ga(t,0),gt(t,_r);var a=t.transitions;if(a!==null)for(const i of a)i.stop();js(t);var s=t.parent;s!==null&&s.first!==null&&Bs(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=t.ac=null}function Xi(t,e){for(;t!==null;){var r=t===e?null:Zr(t);t.remove(),t=r}}function Bs(t){var e=t.parent,r=t.prev,a=t.next;r!==null&&(r.next=a),a!==null&&(a.prev=r),e!==null&&(e.first===t&&(e.first=a),e.last===t&&(e.last=r))}function Ht(t,e){var r=[];bn(t,r,!0),zs(r,()=>{dt(t),e&&e()})}function zs(t,e){var r=t.length;if(r>0){var a=()=>--r||e();for(var s of t)s.out(a)}else e()}function bn(t,e,r){if((t.f&Dt)===0){if(t.f^=Dt,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&e.push(o);for(var a=t.first;a!==null;){var s=a.next,i=(a.f&br)!==0||(a.f&Gt)!==0;bn(a,e,i?r:!1),a=s}}}function ka(t){Us(t,!0)}function Us(t,e){if((t.f&Dt)!==0){t.f^=Dt,(t.f&ft)===0&&(gt(t,St),hr(t));for(var r=t.first;r!==null;){var a=r.next,s=(r.f&br)!==0||(r.f&Gt)!==0;Us(r,s?e:!1),r=a}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let $r=!1;function On(t){$r=t}let yr=!1;function Rn(t){yr=t}let Le=null,Mt=!1;function _t(t){Le=t}let qe=null;function Bt(t){qe=t}let Qt=null;function Hs(t){Le!==null&&(Qt===null?Qt=[t]:Qt.push(t))}let pt=null,xt=0,$t=null;function el(t){$t=t}let Qs=1,Kr=0,Wt=Kr;function qn(t){Wt=t}let Yt=!1;function Ws(){return++Qs}function Ea(t){var e=t.f;if((e&St)!==0)return!0;if((e&sr)!==0){var r=t.deps,a=(e&At)!==0;if(r!==null){var s,i,o=(e&pa)!==0,l=a&&qe!==null&&!Yt,u=r.length;if((o||l)&&(qe===null||(qe.f&_r)===0)){var h=t,v=h.parent;for(s=0;s<u;s++)i=r[s],(o||!i?.reactions?.includes(h))&&(i.reactions??=[]).push(h);o&&(h.f^=pa),l&&v!==null&&(v.f&At)===0&&(h.f^=At)}for(s=0;s<u;s++)if(i=r[s],Ea(i)&&Ds(i),i.wv>t.wv)return!0}(!a||qe!==null&&!Yt)&&gt(t,ft)}return!1}function Gs(t,e,r=!0){var a=t.reactions;if(a!==null&&!Qt?.includes(t))for(var s=0;s<a.length;s++){var i=a[s];(i.f&bt)!==0?Gs(i,e,!1):e===i&&(r?gt(i,St):(i.f&ft)!==0&&gt(i,sr),hr(i))}}function Vs(t){var e=pt,r=xt,a=$t,s=Le,i=Yt,o=Qt,l=at,u=Mt,h=Wt,v=t.f;pt=null,xt=0,$t=null,Yt=(v&At)!==0&&(Mt||!$r||Le===null),Le=(v&(Gt|mr))===0?t:null,Qt=null,kr(t.ctx),Mt=!1,Wt=++Kr,t.ac!==null&&($a(()=>{t.ac.abort(Qr)}),t.ac=null);try{t.f|=Va;var g=t.fn,p=g(),m=t.deps;if(pt!==null){var _;if(ga(t,xt),m!==null&&xt>0)for(m.length=xt+pt.length,_=0;_<pt.length;_++)m[xt+_]=pt[_];else t.deps=m=pt;if(!Yt||(v&bt)!==0&&t.reactions!==null)for(_=xt;_<m.length;_++)(m[_].reactions??=[]).push(t)}else m!==null&&xt<m.length&&(ga(t,xt),m.length=xt);if(Or()&&$t!==null&&!Mt&&m!==null&&(t.f&(bt|sr|St))===0)for(_=0;_<$t.length;_++)Gs($t[_],t);return s!==null&&s!==t&&(Kr++,$t!==null&&(a===null?a=$t:a.push(...$t))),(t.f&cr)!==0&&(t.f^=cr),p}catch(S){return $s(S)}finally{t.f^=Va,pt=e,xt=r,$t=a,Le=s,Yt=i,Qt=o,kr(l),Mt=u,Wt=h}}function tl(t,e){let r=e.reactions;if(r!==null){var a=Ko.call(r,t);if(a!==-1){var s=r.length-1;s===0?r=e.reactions=null:(r[a]=r[s],r.pop())}}r===null&&(e.f&bt)!==0&&(pt===null||!pt.includes(e))&&(gt(e,sr),(e.f&(At|pa))===0&&(e.f^=pa),Ns(e),ga(e,0))}function ga(t,e){var r=t.deps;if(r!==null)for(var a=e;a<r.length;a++)tl(t,r[a])}function Jr(t){var e=t.f;if((e&_r)===0){gt(t,ft);var r=qe,a=$r;qe=t,$r=!0;try{(e&gr)!==0?Zi(t):Ls(t),js(t);var s=Vs(t);t.teardown=typeof s=="function"?s:null,t.wv=Qs;var i;ps&&Ei&&(t.f&St)!==0&&t.deps}finally{$r=a,qe=r}}}async function rl(){await Promise.resolve(),Di()}function n(t){var e=t.f,r=(e&bt)!==0;if(Le!==null&&!Mt){var a=qe!==null&&(qe.f&_r)!==0;if(!a&&!Qt?.includes(t)){var s=Le.deps;if((Le.f&Va)!==0)t.rv<Kr&&(t.rv=Kr,pt===null&&s!==null&&s[xt]===t?xt++:pt===null?pt=[t]:(!Yt||!pt.includes(t))&&pt.push(t));else{(Le.deps??=[]).push(t);var i=t.reactions;i===null?t.reactions=[Le]:i.includes(Le)||i.push(Le)}}}else if(r&&t.deps===null&&t.effects===null){var o=t,l=o.parent;l!==null&&(l.f&At)===0&&(o.f^=At)}if(yr){if(Xt.has(t))return Xt.get(t);if(r){o=t;var u=o.v;return((o.f&ft)===0&&o.reactions!==null||Ks(o))&&(u=hn(o)),Xt.set(o,u),u}}else r&&(o=t,Ea(o)&&Ds(o));if((t.f&cr)!==0)throw t.v;return t.v}function Ks(t){if(t.v===ot)return!0;if(t.deps===null)return!1;for(const e of t.deps)if(Xt.has(e)||(e.f&bt)!==0&&Ks(e))return!0;return!1}function Rr(t){var e=Mt;try{return Mt=!0,t()}finally{Mt=e}}const al=-7169;function gt(t,e){t.f=t.f&al|e}function nl(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const sl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ol(t){return sl.includes(t)}const il={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ll(t){return t=t.toLowerCase(),il[t]??t}const cl=["touchstart","touchmove"];function ul(t){return cl.includes(t)}const Js=new Set,Ya=new Set;function yn(t,e,r,a={}){function s(i){if(a.capture||Ur.call(e,i),!i.cancelBubble)return $a(()=>r?.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?fr(()=>{e.addEventListener(t,s,a)}):e.addEventListener(t,s,a),s}function Fa(t,e,r,a={}){var s=yn(e,t,r,a);return()=>{t.removeEventListener(e,s,a)}}function va(t,e,r,a,s){var i={capture:a,passive:s},o=yn(t,e,r,i);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&gn(()=>{e.removeEventListener(t,o,i)})}function et(t){for(var e=0;e<t.length;e++)Js.add(t[e]);for(var r of Ya)r(t)}let jn=null;function Ur(t){var e=this,r=e.ownerDocument,a=t.type,s=t.composedPath?.()||[],i=s[0]||t.target;jn=t;var o=0,l=jn===t&&t.__root;if(l){var u=s.indexOf(l);if(u!==-1&&(e===document||e===window)){t.__root=e;return}var h=s.indexOf(e);if(h===-1)return;u<=h&&(o=u)}if(i=s[o]||t.target,i!==e){Ga(t,"currentTarget",{configurable:!0,get(){return i||r}});var v=Le,g=qe;_t(null),Bt(null);try{for(var p,m=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var S=i["__"+a];if(S!=null&&(!i.disabled||t.target===i))if(Fr(S)){var[w,...P]=S;w.apply(i,[t,...P])}else S.call(i,t)}catch(C){p?m.push(C):p=C}if(t.cancelBubble||_===e||_===null)break;i=_}if(p){for(let C of m)queueMicrotask(()=>{throw C});throw p}}finally{t.__root=e,delete t.currentTarget,_t(v),Bt(g)}}}function Ys(t){var e=document.createElement("template");return e.innerHTML=t.replaceAll("<!>","<!---->"),e.content}function Mr(t,e){var r=qe;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function y(t,e){var r=(e&_i)!==0,a=(e&bi)!==0,s,i=!t.startsWith("<!>");return()=>{s===void 0&&(s=Ys(i?t:"<!>"+t),r||(s=Tr(s)));var o=a||Is?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=Tr(o),u=o.lastChild;Mr(l,u)}else Mr(o,o);return o}}function dl(t,e,r="svg"){var a=!t.startsWith("<!>"),s=`<${r}>${a?t:"<!>"+t}</${r}>`,i;return()=>{if(!i){var o=Ys(s),l=Tr(o);i=Tr(l)}var u=i.cloneNode(!0);return Mr(u,u),u}}function vl(t,e){return dl(t,e,"svg")}function Pt(t=""){{var e=Vt(t+"");return Mr(e,e),e}}function te(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Vt();return t.append(e,r),Mr(e,r),t}function f(t,e){t!==null&&t.before(e)}function I(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??=t.nodeValue)&&(t.__t=r,t.nodeValue=r+"")}function fl(t,e){return hl(t,e)}const Pr=new Map;function hl(t,{target:e,anchor:r,props:a={},events:s,context:i,intro:o=!0}){Hi();var l=new Set,u=g=>{for(var p=0;p<g.length;p++){var m=g[p];if(!l.has(m)){l.add(m);var _=ul(m);e.addEventListener(m,Ur,{passive:_});var S=Pr.get(m);S===void 0?(document.addEventListener(m,Ur,{passive:_}),Pr.set(m,1)):Pr.set(m,S+1)}}};u(sn(Js)),Ya.add(u);var h=void 0,v=Yi(()=>{var g=r??e.appendChild(Vt());return Oi(g,{pending:()=>{}},p=>{if(i){Z({});var m=at;m.c=i}s&&(a.$$events=s),h=t(p,a)||{},i&&X()}),()=>{for(var p of l){e.removeEventListener(p,Ur);var m=Pr.get(p);--m===0?(document.removeEventListener(p,Ur),Pr.delete(p)):Pr.set(p,m)}Ya.delete(u),g!==r&&g.parentNode?.removeChild(g)}});return pl.set(h,v),h}let pl=new WeakMap;function E(t,e,r=!1){var a=t,s=null,i=null,o=ot,l=r?br:0,u=!1;const h=(m,_=!0)=>{u=!0,p(_,m)};var v=null;function g(){v!==null&&(v.lastChild.remove(),a.before(v),v=null);var m=o?s:i,_=o?i:s;m&&ka(m),_&&Ht(_,()=>{o?i=null:s=null})}const p=(m,_)=>{if(o!==(o=m)){var S=Pa(),w=a;if(S&&(v=document.createDocumentFragment(),v.append(w=Vt())),o?s??=_&&ut(()=>_(w)):i??=_&&ut(()=>_(w)),S){var P=We,C=o?s:i,x=o?i:s;C&&P.skipped_effects.delete(C),x&&P.skipped_effects.add(x),P.add_callback(g)}else g()}};Jt(()=>{u=!1,e(h),u||p(null,null)},l)}function gl(t,e,r){var a=t,s=ot,i,o,l=null,u=Or()?ki:xs;function h(){i&&Ht(i),l!==null&&(l.lastChild.remove(),a.before(l),l=null),i=o}Jt(()=>{if(u(s,s=e())){var v=a,g=Pa();g&&(l=document.createDocumentFragment(),l.append(v=Vt())),o=ut(()=>r(v)),g?We.add_callback(h):h()}})}function pr(t,e){return e}function ml(t,e,r){for(var a=t.items,s=[],i=e.length,o=0;o<i;o++)bn(e[o].e,s,!0);var l=i>0&&s.length===0&&r!==null;if(l){var u=r.parentNode;Qi(u),u.append(r),a.clear(),Rt(t,e[0].prev,e[i-1].next)}zs(s,()=>{for(var h=0;h<i;h++){var v=e[h];l||(a.delete(v.k),Rt(t,v.prev,v.next)),dt(v.e,!l)}})}function it(t,e,r,a,s,i=null){var o=t,l={flags:e,items:new Map,first:null},u=(e&ys)!==0;if(u){var h=t;o=h.appendChild(Vt())}var v=null,g=!1,p=new Map,m=fn(()=>{var P=r();return Fr(P)?P:P==null?[]:sn(P)}),_,S;function w(){_l(S,_,l,p,o,s,e,a,r),i!==null&&(_.length===0?v?ka(v):v=ut(()=>i(o)):v!==null&&Ht(v,()=>{v=null}))}Jt(()=>{S??=qe,_=n(m);var P=_.length;if(!(g&&P===0)){g=P===0;var C,x,T,$;if(Pa()){var M=new Set,k=We;for(x=0;x<P;x+=1){T=_[x],$=a(T,x);var N=l.items.get($)??p.get($);N?(e&(ya|wa))!==0&&Fs(N,T,x,e):(C=Zs(null,l,null,null,T,$,x,s,e,r,!0),p.set($,C)),M.add($)}for(const[D,W]of l.items)M.has(D)||k.skipped_effects.add(W.e);k.add_callback(w)}else w();n(m)}})}function _l(t,e,r,a,s,i,o,l,u){var h=(o&di)!==0,v=(o&(ya|wa))!==0,g=e.length,p=r.items,m=r.first,_=m,S,w=null,P,C=[],x=[],T,$,M,k;if(h)for(k=0;k<g;k+=1)T=e[k],$=l(T,k),M=p.get($),M!==void 0&&(M.a?.measure(),(P??=new Set).add(M));for(k=0;k<g;k+=1){if(T=e[k],$=l(T,k),M=p.get($),M===void 0){var N=a.get($);if(N!==void 0){a.delete($),p.set($,N);var D=w?w.next:_;Rt(r,w,N),Rt(r,N,D),qa(N,D,s),w=N}else{var W=_?_.e.nodes_start:s;w=Zs(W,r,w,w===null?r.first:w.next,T,$,k,i,o,u)}p.set($,w),C=[],x=[],_=w.next;continue}if(v&&Fs(M,T,k,o),(M.e.f&Dt)!==0&&(ka(M.e),h&&(M.a?.unfix(),(P??=new Set).delete(M))),M!==_){if(S!==void 0&&S.has(M)){if(C.length<x.length){var Q=x[0],Y;w=Q.prev;var le=C[0],z=C[C.length-1];for(Y=0;Y<C.length;Y+=1)qa(C[Y],Q,s);for(Y=0;Y<x.length;Y+=1)S.delete(x[Y]);Rt(r,le.prev,z.next),Rt(r,w,le),Rt(r,z,Q),_=Q,w=z,k-=1,C=[],x=[]}else S.delete(M),qa(M,_,s),Rt(r,M.prev,M.next),Rt(r,M,w===null?r.first:w.next),Rt(r,w,M),w=M;continue}for(C=[],x=[];_!==null&&_.k!==$;)(_.e.f&Dt)===0&&(S??=new Set).add(_),x.push(_),_=_.next;if(_===null)continue;M=_}C.push(M),w=M,_=M.next}if(_!==null||S!==void 0){for(var j=S===void 0?[]:sn(S);_!==null;)(_.e.f&Dt)===0&&j.push(_),_=_.next;var q=j.length;if(q>0){var ee=(o&ys)!==0&&g===0?s:null;if(h){for(k=0;k<q;k+=1)j[k].a?.measure();for(k=0;k<q;k+=1)j[k].a?.fix()}ml(r,j,ee)}}h&&fr(()=>{if(P!==void 0)for(M of P)M.a?.apply()}),t.first=r.first&&r.first.e,t.last=w&&w.e;for(var U of a.values())dt(U.e);a.clear()}function Fs(t,e,r,a){(a&ya)!==0&&Ar(t.v,e),(a&wa)!==0?Ar(t.i,r):t.i=r}function Zs(t,e,r,a,s,i,o,l,u,h,v){var g=(u&ya)!==0,p=(u&vi)===0,m=g?p?zi(s,!1,!1):rr(s):s,_=(u&wa)===0?o:rr(o),S={i:_,v:m,k:i,a:null,e:null,prev:r,next:a};try{if(t===null){var w=document.createDocumentFragment();w.append(t=Vt())}return S.e=ut(()=>l(t,m,_,h),$i),S.e.prev=r&&r.e,S.e.next=a&&a.e,r===null?v||(e.first=S):(r.next=S,r.e.next=S.e),a!==null&&(a.prev=S,a.e.prev=S.e),S}finally{}}function qa(t,e,r){for(var a=t.next?t.next.e.nodes_start:r,s=e?e.e.nodes_start:r,i=t.e.nodes_start;i!==null&&i!==a;){var o=Zr(i);s.before(i),i=o}}function Rt(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function ge(t,e,...r){var a=t,s=fe,i;Jt(()=>{s!==(s=e())&&(i&&(dt(i),i=null),i=ut(()=>s(a,...r)))},br)}function dr(t,e,r){var a=t,s,i,o=null,l=null;function u(){i&&(Ht(i),i=null),o&&(o.lastChild.remove(),a.before(o),o=null),i=l,l=null}Jt(()=>{if(s!==(s=e())){var h=Pa();if(s){var v=a;h&&(o=document.createDocumentFragment(),o.append(v=Vt()),i&&We.skipped_effects.add(i)),l=ut(()=>r(v,s))}h?We.add_callback(u):u()}},br)}function bl(t,e,r,a,s,i){var o,l,u=null,h=t,v;Jt(()=>{const g=e()||null;var p=wi;g!==o&&(v&&(g===null?Ht(v,()=>{v=null,l=null}):g===l?ka(v):dt(v)),g&&g!==l&&(v=ut(()=>{if(u=document.createElementNS(p,g),Mr(u,u),a){var m=u.appendChild(Vt());a(u,m)}qe.nodes_end=u,h.before(u)})),o=g,o&&(l=o))},br)}function yl(t,e){var r=void 0,a;Jt(()=>{r!==(r=e())&&(a&&(dt(a),a=null),r&&(a=ut(()=>{mn(()=>r(t))})))})}function Xs(t){var e,r,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(r=Xs(t[e]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r);return a}function wl(){for(var t,e,r=0,a="",s=arguments.length;r<s;r++)(t=arguments[r])&&(e=Xs(t))&&(a&&(a+=" "),a+=e);return a}function xl(t){return typeof t=="object"?wl(t):t??""}const Ln=[...` 	
\r\f \v\uFEFF`];function Sl(t,e,r){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),r){for(var s in r)if(r[s])a=a?a+" "+s:s;else if(a.length)for(var i=s.length,o=0;(o=a.indexOf(s,o))>=0;){var l=o+i;(o===0||Ln.includes(a[o-1]))&&(l===a.length||Ln.includes(a[l]))?a=(o===0?"":a.substring(0,o))+a.substring(l+1):o=l}}return a===""?null:a}function Bn(t,e=!1){var r=e?" !important;":";",a="";for(var s in t){var i=t[s];i!=null&&i!==""&&(a+=" "+s+": "+i+r)}return a}function ja(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Pl(t,e){if(e){var r="",a,s;if(Array.isArray(e)?(a=e[0],s=e[1]):a=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,u=[];a&&u.push(...Object.keys(a).map(ja)),s&&u.push(...Object.keys(s).map(ja));var h=0,v=-1;const S=t.length;for(var g=0;g<S;g++){var p=t[g];if(l?p==="/"&&t[g-1]==="*"&&(l=!1):i?i===p&&(i=!1):p==="/"&&t[g+1]==="*"?l=!0:p==='"'||p==="'"?i=p:p==="("?o++:p===")"&&o--,!l&&i===!1&&o===0){if(p===":"&&v===-1)v=g;else if(p===";"||g===S-1){if(v!==-1){var m=ja(t.substring(h,v).trim());if(!u.includes(m)){p!==";"&&g++;var _=t.substring(h,g).trim();r+=" "+_+";"}}h=g+1,v=-1}}}}return a&&(r+=Bn(a)),s&&(r+=Bn(s,!0)),r=r.trim(),r===""?null:r}return t==null?null:String(t)}function Ie(t,e,r,a,s,i){var o=t.__className;if(o!==r||o===void 0){var l=Sl(r,a,i);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t.__className=r}else if(i&&s!==i)for(var u in i){var h=!!i[u];(s==null||h!==!!s[u])&&t.classList.toggle(u,h)}return i}function La(t,e={},r,a){for(var s in r){var i=r[s];e[s]!==i&&(r[s]==null?t.style.removeProperty(s):t.style.setProperty(s,i,a))}}function eo(t,e,r,a){var s=t.__style;if(s!==e){var i=Pl(e,a);i==null?t.removeAttribute("style"):t.style.cssText=i,t.__style=e}else a&&(Array.isArray(a)?(La(t,r?.[0],a[0]),La(t,r?.[1],a[1],"important")):La(t,r,a));return a}function ma(t,e,r=!1){if(t.multiple){if(e==null)return;if(!Fr(e))return Si();for(var a of t.options)a.selected=e.includes(Gr(a));return}for(a of t.options){var s=Gr(a);if(Ui(s,e)){a.selected=!0;return}}(!r||e!==void 0)&&(t.selectedIndex=-1)}function to(t){var e=new MutationObserver(()=>{ma(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),gn(()=>{e.disconnect()})}function vr(t,e,r=e){var a=!0;pn(t,"change",s=>{var i=s?"[selected]":":checked",o;if(t.multiple)o=[].map.call(t.querySelectorAll(i),Gr);else{var l=t.querySelector(i)??t.querySelector("option:not([disabled])");o=l&&Gr(l)}r(o)}),mn(()=>{var s=e();if(ma(t,s,a),a&&s===void 0){var i=t.querySelector(":checked");i!==null&&(s=Gr(i),r(s))}t.__value=s,a=!1}),to(t)}function Gr(t){return"__value"in t?t.__value:t.value}const Br=Symbol("class"),zr=Symbol("style"),ro=Symbol("is custom element"),ao=Symbol("is html");function $l(t,e){var r=Aa(t);r.value===(r.value=e??void 0)||t.value===e&&(e!==0||t.nodeName!=="PROGRESS")||(t.value=e??"")}function Ba(t,e){var r=Aa(t);r.checked!==(r.checked=e??void 0)&&(t.checked=e)}function kl(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function ar(t,e,r,a){var s=Aa(t);s[e]!==(s[e]=r)&&(e==="loading"&&(t[ei]=r),r==null?t.removeAttribute(e):typeof r!="string"&&no(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function El(t,e,r,a,s=!1,i=!1){var o=Aa(t),l=o[ro],u=!o[ao],h=e||{},v=t.tagName==="OPTION";for(var g in e)g in r||(r[g]=null);r.class?r.class=xl(r.class):r[Br]&&(r.class=null),r[zr]&&(r.style??=null);var p=no(t);for(const T in r){let $=r[T];if(v&&T==="value"&&$==null){t.value=t.__value="",h[T]=$;continue}if(T==="class"){var m=t.namespaceURI==="http://www.w3.org/1999/xhtml";Ie(t,m,$,a,e?.[Br],r[Br]),h[T]=$,h[Br]=r[Br];continue}if(T==="style"){eo(t,$,e?.[zr],r[zr]),h[T]=$,h[zr]=r[zr];continue}var _=h[T];if(!($===_&&!($===void 0&&t.hasAttribute(T)))){h[T]=$;var S=T[0]+T[1];if(S!=="$$")if(S==="on"){const M={},k="$$"+T;let N=T.slice(2);var w=ol(N);if(nl(N)&&(N=N.slice(0,-7),M.capture=!0),!w&&_){if($!=null)continue;t.removeEventListener(N,h[k],M),h[k]=null}if($!=null)if(w)t[`__${N}`]=$,et([N]);else{let D=function(W){h[T].call(this,W)};var x=D;h[k]=yn(N,t,D,M)}else w&&(t[`__${N}`]=void 0)}else if(T==="style")ar(t,T,$);else if(T==="autofocus")Wi(t,!!$);else if(!l&&(T==="__value"||T==="value"&&$!=null))t.value=t.__value=$;else if(T==="selected"&&v)kl(t,$);else{var P=T;u||(P=ll(P));var C=P==="defaultValue"||P==="defaultChecked";if($==null&&!l&&!C)if(o[T]=null,P==="value"||P==="checked"){let M=t;const k=e===void 0;if(P==="value"){let N=M.defaultValue;M.removeAttribute(P),M.defaultValue=N,M.value=M.__value=k?N:null}else{let N=M.defaultChecked;M.removeAttribute(P),M.defaultChecked=N,M.checked=k?N:!1}}else t.removeAttribute(T);else C||p.includes(P)&&(l||typeof $!="string")?(t[P]=$,P in o&&(o[P]=ot)):typeof $!="function"&&ar(t,P,$)}}}return h}function zn(t,e,r=[],a=[],s,i=!1,o=!1){Ts(r,a,l=>{var u=void 0,h={},v=t.nodeName==="SELECT",g=!1;if(Jt(()=>{var m=e(...l.map(n)),_=El(t,u,m,s,i,o);g&&v&&"value"in m&&ma(t,m.value);for(let w of Object.getOwnPropertySymbols(h))m[w]||dt(h[w]);for(let w of Object.getOwnPropertySymbols(m)){var S=m[w];w.description===xi&&(!u||S!==u[w])&&(h[w]&&dt(h[w]),h[w]=ut(()=>yl(t,()=>S))),_[w]=S}u=_}),v){var p=t;mn(()=>{ma(p,u.value,!0),to(p)})}g=!0})}function Aa(t){return t.__attributes??={[ro]:t.nodeName.includes("-"),[ao]:t.namespaceURI===yi}}var Un=new Map;function no(t){var e=t.getAttribute("is")||t.nodeName,r=Un.get(e);if(r)return r;Un.set(e,r=[]);for(var a,s=t,i=Element.prototype;i!==s;){a=Jo(s);for(var o in a)a[o].set&&r.push(o);s=on(s)}return r}function De(t,e,r=e){var a=new WeakSet;pn(t,"input",async s=>{var i=s?t.defaultValue:t.value;if(i=za(t)?Ua(i):i,r(i),We!==null&&a.add(We),await rl(),i!==(i=e())){var o=t.selectionStart,l=t.selectionEnd;t.value=i??"",l!==null&&(t.selectionStart=o,t.selectionEnd=Math.min(l,t.value.length))}}),Rr(e)==null&&t.value&&(r(za(t)?Ua(t.value):t.value),We!==null&&a.add(We)),_n(()=>{var s=e();if(t===document.activeElement){var i=da??We;if(a.has(i))return}za(t)&&s===Ua(t.value)||t.type==="date"&&!s&&!t.value||s!==t.value&&(t.value=s??"")})}function Za(t,e,r=e){pn(t,"change",a=>{var s=a?t.defaultChecked:t.checked;r(s)}),Rr(e)==null&&r(t.checked),_n(()=>{var a=e();t.checked=!!a})}function za(t){var e=t.type;return e==="number"||e==="range"}function Ua(t){return t===""?null:+t}let oa=!1;function Al(t){var e=oa;try{return oa=!1,[t(),oa]}finally{oa=e}}const Tl={get(t,e){if(!t.exclude.includes(e))return t.props[e]},set(t,e){return!1},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function be(t,e,r){return new Proxy({props:t,exclude:e},Tl)}const Ml={get(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Lr(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a)return a[e]}},set(t,e,r){let a=t.props.length;for(;a--;){let s=t.props[a];Lr(s)&&(s=s());const i=Zt(s,e);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(t,e){let r=t.props.length;for(;r--;){let a=t.props[r];if(Lr(a)&&(a=a()),typeof a=="object"&&a!==null&&e in a){const s=Zt(a,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(t,e){if(e===ur||e===_s)return!1;for(let r of t.props)if(Lr(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(t){const e=[];for(let r of t.props)if(Lr(r)&&(r=r()),!!r){for(const a in r)e.includes(a)||e.push(a);for(const a of Object.getOwnPropertySymbols(r))e.includes(a)||e.push(a)}return e}};function ye(...t){return new Proxy({props:t},Ml)}function Se(t,e,r,a){var s=!Ir||(r&hi)!==0,i=(r&gi)!==0,o=(r&mi)!==0,l=a,u=!0,h=()=>(u&&(u=!1,l=o?Rr(a):a),l),v;if(i){var g=ur in t||_s in t;v=Zt(t,e)?.set??(g&&e in t?x=>t[e]=x:void 0)}var p,m=!1;i?[p,m]=Al(()=>t[e]):p=t[e],p===void 0&&a!==void 0&&(p=h(),v&&(s&&oi(),v(p)));var _;if(s?_=()=>{var x=t[e];return x===void 0?h():(u=!0,x)}:_=()=>{var x=t[e];return x!==void 0&&(l=void 0),x===void 0?l:x},s&&(r&pi)===0)return _;if(v){var S=t.$$legacy;return(function(x,T){return arguments.length>0?((!s||!T||S||m)&&v(T?_():x),x):_()})}var w=!1,P=((r&fi)!==0?Sa:fn)(()=>(w=!1,_()));i&&n(P);var C=qe;return(function(x,T){if(arguments.length>0){const $=T?n(P):s&&i?Be(x):x;return b(P,$),w=!0,l!==void 0&&(l=$),x}return yr&&w||(C.f&_r)!==0?P.v:n(P)})}function so(t){at===null&&bs(),Ir&&at.l!==null?Dl(at).m.push(t):It(()=>{const e=Rr(t);if(typeof e=="function")return e})}function Nl(t){at===null&&bs(),so(()=>()=>Rr(t))}function Dl(t){var e=t.l;return e.u??={a:[],b:[],m:[]}}const Cl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Cl);const Il="modulepreload",Ol=function(t){return"/"+t},Hn={},Xa=function(e,r,a){let s=Promise.resolve();if(r&&r.length>0){let h=function(v){return Promise.all(v.map(g=>Promise.resolve(g).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var o=h;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");s=h(r.map(v=>{if(v=Ol(v),v in Hn)return;Hn[v]=!0;const g=v.endsWith(".css"),p=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${p}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":Il,g||(m.as="script"),m.crossOrigin="",m.href=v,u&&m.setAttribute("nonce",u),document.head.appendChild(m),g)return new Promise((_,S)=>{m.addEventListener("load",_),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${v}`)))})}))}function i(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return s.then(l=>{for(const u of l||[])u.status==="rejected"&&i(u.reason);return e().catch(i)})};class Qn extends Map{#e=new Map;#t=H(0);#s=H(0);#o=Wt||-1;constructor(e){if(super(),e){for(var[r,a]of e)super.set(r,a);this.#s.v=super.size}}#d(e){return Wt===this.#o?H(e):rr(e)}has(e){var r=this.#e,a=r.get(e);if(a===void 0){var s=super.get(e);if(s!==void 0)a=this.#d(0),r.set(e,a);else return n(this.#t),!1}return n(a),!0}forEach(e,r){this.#c(),super.forEach(e,r)}get(e){var r=this.#e,a=r.get(e);if(a===void 0){var s=super.get(e);if(s!==void 0)a=this.#d(0),r.set(e,a);else{n(this.#t);return}}return n(a),super.get(e)}set(e,r){var a=this.#e,s=a.get(e),i=super.get(e),o=super.set(e,r),l=this.#t;if(s===void 0)s=this.#d(0),a.set(e,s),b(this.#s,super.size),jt(l);else if(i!==r){jt(s);var u=l.reactions===null?null:new Set(l.reactions),h=u===null||!s.reactions?.every(v=>u.has(v));h&&jt(l)}return o}delete(e){var r=this.#e,a=r.get(e),s=super.delete(e);return a!==void 0&&(r.delete(e),b(this.#s,super.size),b(a,-1),jt(this.#t)),s}clear(){if(super.size!==0){super.clear();var e=this.#e;b(this.#s,0);for(var r of e.values())b(r,-1);jt(this.#t),e.clear()}}#c(){n(this.#t);var e=this.#e;if(this.#s.v!==e.size){for(var r of super.keys())if(!e.has(r)){var a=this.#d(0);e.set(r,a)}}for([,a]of this.#e)n(a)}keys(){return n(this.#t),super.keys()}values(){return this.#c(),super.values()}entries(){return this.#c(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return n(this.#s),super.size}}class Rl{#e;#t;constructor(e,r){this.#e=e,this.#t=vn(r)}get current(){return this.#t(),this.#e()}}const ql=/\(.+\)/,jl=new Set(["all","print","screen","and","or","not","only"]);class Ll extends Rl{constructor(e,r){let a=ql.test(e)||e.split(/[\s,]+/).some(i=>jl.has(i.trim()))?e:`(${e})`;const s=window.matchMedia(a);super(()=>s.matches,i=>Fa(s,"change",i))}}const Bl=typeof window<"u"?window:void 0;function zl(t){let e=t.activeElement;for(;e?.shadowRoot;){const r=e.shadowRoot.activeElement;if(r===e)break;e=r}return e}class Ul{#e;#t;constructor(e={}){const{window:r=Bl,document:a=r?.document}=e;r!==void 0&&(this.#e=a,this.#t=vn(s=>{const i=Fa(r,"focusin",s),o=Fa(r,"focusout",s);return()=>{i(),o()}}))}get current(){return this.#t?.(),this.#e?zl(this.#e):null}}new Ul;function Hl(t){return typeof t=="function"}function Ql(t,e){if(Hl(t)){const a=t();return a===void 0?e:a}return t===void 0?e:t}function Wl(t,e){let r=H(null);const a=J(()=>Ql(e,250));function s(...i){if(n(r))n(r).timeout&&clearTimeout(n(r).timeout);else{let o,l;const u=new Promise((h,v)=>{o=h,l=v});b(r,{timeout:null,runner:null,promise:u,resolve:o,reject:l},!0)}return n(r).runner=async()=>{if(!n(r))return;const o=n(r);b(r,null);try{o.resolve(await t.apply(this,i))}catch(l){o.reject(l)}},n(r).timeout=setTimeout(n(r).runner,n(a)),n(r).promise}return s.cancel=async()=>{(!n(r)||n(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!n(r)||n(r).timeout===null)||(clearTimeout(n(r).timeout),n(r).reject("Cancelled"),b(r,null))},s.runScheduledNow=async()=>{(!n(r)||!n(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!n(r)||!n(r).timeout)||(clearTimeout(n(r).timeout),n(r).timeout=null,await n(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!n(r)?.timeout}}),s}function Nt(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(e){return console.warn("[ProductsStore] Erreur parsing JSON:",e),null}}function Xr(t){return t?.length?t.filter(e=>e.quantity!=null&&e.unit).map(e=>({q:typeof e.quantity=="number"?e.quantity:parseFloat(e.quantity),u:e.unit})).filter(e=>!isNaN(e.q)):[]}function ea(t){if(!t?.length)return[];const e=new Map;return t.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const a=e.get(r.u)||0;e.set(r.u,a+r.q)}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function ta(t,e){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!e?.length){const l=t.map(u=>Ft(u.q.toString(),u.u)).join(" et ");return{numeric:t,display:l}}const r=new Map,a=new Map;t.forEach(l=>{const u=parseFloat(l.q);isNaN(u)||r.set(l.u,(r.get(l.u)||0)+u)}),e.forEach(l=>{a.set(l.u,(a.get(l.u)||0)+l.q)});const s=[],i=[];r.forEach((l,u)=>{const h=a.get(u)||0,v=l-h;v>0&&(s.push({q:v,u}),i.push(Ft(v.toString(),u)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:s,display:o}}function ht(t){return t?.length?t.map(e=>Ft(e.q.toString(),e.u)).join(" et "):"-"}function Ft(t,e){const r=parseFloat(t);if(isNaN(r))return`${t} ${e}`;if((e==="gr."||e==="ml")&&r>=1e3){const a=r/1e3,s=e==="gr."?"kg":"l.";let o=(Math.round(a*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${s}`}if(!["gr.","ml","kg","l."].includes(e)){let s=(Math.round(r*10)/10).toString();return s.endsWith(",0")&&(s=s.slice(0,-2)),`${s} ${e}`}return`${r} ${e}`}function Ta(t){if(!t?.length)return[];const e=new Map;return t.forEach(({q:r,u:a})=>{if(typeof r=="number"&&!isNaN(r)){const s=e.get(a)||0;e.set(a,s+r)}}),Array.from(e.entries()).map(([r,a])=>({q:a,u:r}))}function oo(t){return t?Object.values(t).some(e=>e.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function io(t){if(!t)return[];const e=[];return Object.entries(t).forEach(([r,a])=>{a.recipes?.forEach(s=>{e.push({...s,date:r,dateTimeService:r})})}),e}function Ma(t){if(!t)return[];const e=Object.values(t).flatMap(r=>r.totalConsolidated);return Ta(e)}function wn(t,e){const r=new Map,a=new Map;t.forEach(({q:o,u:l})=>{r.set(l,(r.get(l)||0)+o)}),e.forEach(({q:o,u:l})=>{a.set(l,(a.get(l)||0)+o)});const s=[],i=new Set([...r.keys(),...a.keys()]);for(const o of i){const l=r.get(o)||0,u=a.get(o)||0,h=l-u;Math.abs(h)>.001&&s.push({q:h,u:o})}return s}function Na(t){if(!t?.length)return"Équilibré";const e=t.filter(a=>a.q>0),r=t.filter(a=>a.q<0);if(e.length>0&&r.length>0){const a=e.map(i=>Ft(i.q.toString(),i.u)).join(" et "),s=r.map(i=>Ft(Math.abs(i.q).toString(),i.u)).join(" et ");return`${a} disponibles, ${s} manquant${r.length>1?"s":""}`}else return e.length>0?e.map(a=>"+"+Ft(a.q.toString(),a.u)).join(" et ")+" disponibles":r.length>0?r.map(a=>Ft(Math.abs(a.q).toString(),a.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function lo(t,e){if(e.searchQuery.trim()){const r=e.searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(e.selectedStores.length>0&&(!t.storeInfo?.storeName||!e.selectedStores.includes(t.storeInfo.storeName))||e.selectedWho.length>0&&(!t.who||!t.who.some(r=>e.selectedWho.includes(r)))||e.selectedProductTypes.length>0&&(!t.productType||!e.selectedProductTypes.includes(t.productType))||e.selectedTemperatures.length>0&&!(e.selectedTemperatures.includes("frais")&&t.pFrais||e.selectedTemperatures.includes("surgele")&&t.pSurgel))}function Gl(t){return t.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const Vl=Object.freeze(Object.defineProperty({__proto__:null,aggregateByUnit:Ta,calculateAndFormatMissing:ta,calculateGlobalTotal:Ma,calculateTotalQuantityArray:ea,formatSingleQuantity:Ft,formatStockResult:Na,formatTotalQuantity:ht,generateRecipesWithDates:io,hasConversions:oo,matchesFilters:lo,safeJsonParse:Nt,slugify:Gl,subtractQuantities:wn,transformPurchasesToNumericQuantity:Xr},Symbol.toStringTag,{value:"Module"}));function Da(t){return[...t].sort()}function Kl(t){return new Date(t)<new Date}function Jl(t){if(t.length===0)return!0;const e=new Date(Ca(t));return e.setHours(23,59,59,999),e<new Date}function co(t){return t.length===0?null:Da(t)[0]}function Ca(t){return t.length===0?null:Da(t).pop()??null}function Yl(t){if(t.length===0)return null;const e=new Date;return e.setHours(0,0,0,0),Da(t).find(r=>new Date(r)>=e)||null}function Fl(t){if(t.length===0)return null;const e=Da(t),r=Jl(t),a=Kl(e[0]),s=new Date;let i;return r?i=e[0]:a?i=s.toISOString().slice(0,19)+"Z":i=e[0],{start:i,end:e[e.length-1]}}function uo(t){const e=Yl(t),r=Ca(t);return!e||!r?null:{start:e,end:r}}function Zl(t){const e=co(t),r=Ca(t);return!e||!r?null:{start:e,end:r}}function vo(t,e){const r=Zl(e);return r?t.start===r.start&&t.end===r.end:!1}function Xl(t,e){const r=uo(e);return r?t.start===r.start&&t.end===r.end:!1}function ec(t){return new Date(t).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function Vr(t){return t?new Date(t).toLocaleDateString("fr-Fr",{weekday:"short",day:"numeric",month:"short"}):""}function Ha(t){const r=new Date(t).getHours();return r===12?"sun":r===20?"moon":r===8?"cloud":null}function tc(t,e){if(!t.byDate?.[e])return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const r=t.byDate[e],a=[e],s=new Map;r.recipes?.length&&s.set(e,r.recipes);const i=r.totalConsolidated||[],o=i.length>0?ht(i):"-",l=rc(t,e,i),u=l.filter(v=>v.q>0),h=l.filter(v=>v.q<0);return{requiredQuantities:i,requiredQuantitiesFormatted:o,stockBalance:l,availableStockQuantities:u,missingStockQuantities:h,availableStockFormatted:Na(l),missingStockFormatted:ht(h.map(v=>({q:Math.abs(v.q),u:v.u}))),hasAvailableStock:u.length>0,hasMissingStock:h.length>0,totalRecipesInRange:r.recipes?.length||0,totalPortionsInRange:r.totalAssiettes||0,datesInSelectedRange:a,recipesByDate:s}}function rc(t,e,r){let a=[],s="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(a=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],s=t.stockParsed.dateTime);const i=[];if(t.purchases)for(const u of t.purchases)ac(u,e,s)&&i.push({q:u.quantity,u:u.unit});const o=[...a,...i],l=Ta(o);return wn(l,r)}function ac(t,e,r=""){if(t.status==="cancelled")return!1;const a=t.deliveryDate||t.$createdAt;return!a||a>e||r&&t.$createdAt<r?!1:a<=e}function nc(t,e){const r=t.totalNeededArray||[],a=r.length>0?ht(r):"-",s=fo(t,e[0],e[e.length-1],r),i=s.filter(h=>h.q>0),o=s.filter(h=>h.q<0),l=[...e].sort(),u=new Map;if(t.byDate)for(const[h,v]of Object.entries(t.byDate))v.recipes?.length&&u.set(h,v.recipes);return{requiredQuantities:r,requiredQuantitiesFormatted:a,stockBalance:s,availableStockQuantities:i,missingStockQuantities:o,availableStockFormatted:Na(s),missingStockFormatted:ht(o.map(h=>({q:Math.abs(h.q),u:h.u}))),hasAvailableStock:i.length>0,hasMissingStock:o.length>0,totalRecipesInRange:t.nbRecipes||0,totalPortionsInRange:t.totalAssiettes||0,datesInSelectedRange:l,recipesByDate:u}}function sc(t,e,r){if(!t.byDate)return{requiredQuantities:[],requiredQuantitiesFormatted:"-",stockBalance:[],availableStockQuantities:[],missingStockQuantities:[],availableStockFormatted:"-",missingStockFormatted:"-",hasAvailableStock:!1,hasMissingStock:!1,totalRecipesInRange:0,totalPortionsInRange:0,datesInSelectedRange:[],recipesByDate:new Map};const a=new Date(e),s=new Date(r),i=[],o=new Map,l=new Map;let u=0,h=0;for(const[S,w]of Object.entries(t.byDate)){const P=new Date(S);P>=a&&P<=s&&(i.push(S),u+=w.totalAssiettes||0,w.recipes?.length&&(o.set(S,w.recipes),h+=w.recipes.length),w.totalConsolidated&&w.totalConsolidated.forEach(({q:C,u:x})=>{l.set(x,(l.get(x)||0)+C)}))}const v=Array.from(l.entries()).map(([S,w])=>({q:w,u:S})),g=v.length>0?ht(v):"-",p=fo(t,e,r,v),m=p.filter(S=>S.q>0),_=p.filter(S=>S.q<0);return{requiredQuantities:v,requiredQuantitiesFormatted:g,stockBalance:p,availableStockQuantities:m,missingStockQuantities:_,availableStockFormatted:Na(p),missingStockFormatted:ht(_.map(S=>({q:Math.abs(S.q),u:S.u}))),hasAvailableStock:m.length>0,hasMissingStock:_.length>0,totalRecipesInRange:h,totalPortionsInRange:u,datesInSelectedRange:i,recipesByDate:o}}function fo(t,e,r,a){let s=[],i="";t.stockParsed?.dateTime&&t.stockParsed.dateTime<=e&&(s=[{q:parseFloat(t.stockParsed.quantity),u:t.stockParsed.unit}],i=t.stockParsed.dateTime);const o=[];if(t.purchases)for(const h of t.purchases)oc(h,e,r,i)&&o.push({q:h.quantity,u:h.unit});const l=[...s,...o],u=Ta(l);return wn(u,a)}function oc(t,e,r,a=""){if(t.status==="cancelled")return!1;const s=t.deliveryDate||t.$createdAt;return!s||s>r||a&&t.$createdAt<a?!1:s>=e&&s<=r}function Wn(t){return{...t,products:t.products?.map(e=>typeof e=="string"?e:e.$id)||[],mainId:t.mainId}}function ic(t){const e=Nt(t.specs)??null,r=ea(Xr(t.purchases??[]));let a=[];e?.quantity&&(a=[e.quantity]);const{numeric:s,display:i}=ta(a,r),o=Nt(t.stockReel)??null,l=ht(r),u=t.store?Nt(t.store):null,h=o?`${o.quantity} ${o.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid||"",productName:t.productName,productType:t.productType||"none",pFrais:e?.pFrais??!1,pSurgel:e?.pSurgel??!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,totalNeededRaw:[],status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,specs:t.specs,byDate:{},storeInfo:u,stockParsed:o,specsParsed:e,totalNeededArray:a,totalPurchasesArray:r,missingQuantityArray:s,stockOrTotalPurchases:h,displayTotalNeeded:ht(a),displayTotalPurchases:l,displayMissingQuantity:i,totalNeededOverrideParsed:Nt(t.totalNeededOverride),displayTotalOverride:(()=>{const v=Nt(t.totalNeededOverride);return v?ht([v.totalOverride]):""})()}}function ia(t,e){const r=t.purchases??e.purchases,a=t.specs??e.specs,s=a?Nt(a):e.specsParsed,i=ea(Xr(r??[])),o=ht(i);let l=e.totalNeededArray;!e.productHugoUuid&&s?.quantity&&(l=[s.quantity]);const{numeric:u,display:h}=ta(l,i),v=t.stockReel??e.stockReel,g=v?Nt(v):e.stockParsed,p=t.store??e.store,m=p?Nt(p):e.storeInfo,_=g?`${g.quantity} ${g.unit}`:o;return t.purchases===void 0&&e.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${e.purchases.length} purchases pour ${e.productName}`),{...e,$updatedAt:t.$updatedAt,productName:t.productName??e.productName,productType:t.productType??e.productType,isSynced:t.isSynced??e.isSynced,mainId:t.mainId??e.mainId,pFrais:s?.pFrais??e.pFrais,pSurgel:s?.pSurgel??e.pSurgel,status:t.status??e.status,who:t.who??e.who,store:p,stockReel:v,specs:a,purchases:r,previousNames:t.previousNames??e.previousNames,isMerged:t.isMerged??e.isMerged,mergedFrom:t.mergedFrom??e.mergedFrom,mergeDate:t.mergeDate??e.mergeDate,mergeReason:t.mergeReason??e.mergeReason,mergedInto:t.mergedInto??e.mergedInto,totalNeededOverride:t.totalNeededOverride??e.totalNeededOverride,storeInfo:m,stockParsed:g,specsParsed:s,totalNeededArray:l,totalPurchasesArray:i,missingQuantityArray:u,stockOrTotalPurchases:_,displayTotalPurchases:o,displayMissingQuantity:h,displayTotalNeeded:ht(l),totalNeededOverrideParsed:Nt(t.totalNeededOverride??e.totalNeededOverride),displayTotalOverride:(()=>{const S=Nt(t.totalNeededOverride??e.totalNeededOverride);return S?ht([S.totalOverride]):""})()}}class lc{#e=H(Be([]));MAX_TOASTS=3;get toasts(){return n(this.#e).sort((e,r)=>r.timestamp-e.timestamp)}create(e){const r=e.id||crypto.randomUUID(),a={id:r,state:e.state,message:e.message,timestamp:Date.now(),source:e.source||"user",timeoutId:void 0,details:e.details};return this.#t(a),r}update(e,r){const a=n(this.#e).findIndex(i=>i.id===e);if(a===-1)return;const s=n(this.#e)[a];s.timeoutId&&clearTimeout(s.timeoutId),n(this.#e)[a]={...s,state:r.state||s.state,message:r.message||s.message,source:r.source||s.source},this.#s(n(this.#e)[a])}async track(e,r){const a=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const s=await e;return this.update(a,{state:"success",message:r.success||"Opération réussie"}),s}catch(s){throw this.update(a,{state:"error",message:r.error||"Erreur lors de l'opération"}),s}}dismiss(e){const r=n(this.#e).findIndex(s=>s.id===e);if(r===-1)return;const a=n(this.#e)[r];a.timeoutId&&clearTimeout(a.timeoutId),n(this.#e).splice(r,1)}dismissAll(){n(this.#e).forEach(e=>{e.timeoutId&&clearTimeout(e.timeoutId)}),b(this.#e,[],!0)}#t(e){if(e.source==="user"){const r=n(this.#e).findIndex(a=>a.source==="user");r>=0?n(this.#e)[r]=e:n(this.#e).push(e)}else{const r=n(this.#e).filter(a=>a.source!=="user");if(r.length>=2){const a=r[0];this.dismiss(a.id)}n(this.#e).push(e)}n(this.#e).length>this.MAX_TOASTS&&n(this.#e).splice(0,n(this.#e).length-this.MAX_TOASTS),this.#s(e)}#s(e){if(e.state!=="success"&&e.state!=="info")return;const r=e.source==="realtime-other"?24e3:23e3;e.timeoutId=setTimeout(()=>{this.dismiss(e.id)},r)}success(e,r){return this.create({state:"success",message:e,details:r})}error(e,r){return this.create({state:"error",message:e,details:r})}info(e,r){return this.create({state:"info",message:e,source:r?.source||"system",details:r?.details})}loading(e,r){return this.create({state:"loading",message:e,details:r})}}const kt=new lc;function cc(t,e,r,a){if(typeof e=="function"?t!==e||!a:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?a:r==="a"?a.call(t):a?a.value:e.get(t)}class B{constructor(e,r,a){this.method=e,this.attribute=r,a!==void 0&&(Array.isArray(a)?this.values=a:this.values=[a])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}B.equal=(t,e)=>new B("equal",t,e).toString();B.notEqual=(t,e)=>new B("notEqual",t,e).toString();B.lessThan=(t,e)=>new B("lessThan",t,e).toString();B.lessThanEqual=(t,e)=>new B("lessThanEqual",t,e).toString();B.greaterThan=(t,e)=>new B("greaterThan",t,e).toString();B.greaterThanEqual=(t,e)=>new B("greaterThanEqual",t,e).toString();B.isNull=t=>new B("isNull",t).toString();B.isNotNull=t=>new B("isNotNull",t).toString();B.between=(t,e,r)=>new B("between",t,[e,r]).toString();B.startsWith=(t,e)=>new B("startsWith",t,e).toString();B.endsWith=(t,e)=>new B("endsWith",t,e).toString();B.select=t=>new B("select",void 0,t).toString();B.search=(t,e)=>new B("search",t,e).toString();B.orderDesc=t=>new B("orderDesc",t).toString();B.orderAsc=t=>new B("orderAsc",t).toString();B.orderRandom=()=>new B("orderRandom").toString();B.cursorAfter=t=>new B("cursorAfter",void 0,t).toString();B.cursorBefore=t=>new B("cursorBefore",void 0,t).toString();B.limit=t=>new B("limit",void 0,t).toString();B.offset=t=>new B("offset",void 0,t).toString();B.contains=(t,e)=>new B("contains",t,e).toString();B.notContains=(t,e)=>new B("notContains",t,e).toString();B.notSearch=(t,e)=>new B("notSearch",t,e).toString();B.notBetween=(t,e,r)=>new B("notBetween",t,[e,r]).toString();B.notStartsWith=(t,e)=>new B("notStartsWith",t,e).toString();B.notEndsWith=(t,e)=>new B("notEndsWith",t,e).toString();B.createdBefore=t=>B.lessThan("$createdAt",t);B.createdAfter=t=>B.greaterThan("$createdAt",t);B.createdBetween=(t,e)=>B.between("$createdAt",t,e);B.updatedBefore=t=>B.lessThan("$updatedAt",t);B.updatedAfter=t=>B.greaterThan("$updatedAt",t);B.updatedBetween=(t,e)=>B.between("$updatedAt",t,e);B.or=t=>new B("or",void 0,t.map(e=>JSON.parse(e))).toString();B.and=t=>new B("and",void 0,t.map(e=>JSON.parse(e))).toString();B.distanceEqual=(t,e,r,a=!0)=>new B("distanceEqual",t,[[e,r,a]]).toString();B.distanceNotEqual=(t,e,r,a=!0)=>new B("distanceNotEqual",t,[[e,r,a]]).toString();B.distanceGreaterThan=(t,e,r,a=!0)=>new B("distanceGreaterThan",t,[[e,r,a]]).toString();B.distanceLessThan=(t,e,r,a=!0)=>new B("distanceLessThan",t,[[e,r,a]]).toString();B.intersects=(t,e)=>new B("intersects",t,[e]).toString();B.notIntersects=(t,e)=>new B("notIntersects",t,[e]).toString();B.crosses=(t,e)=>new B("crosses",t,[e]).toString();B.notCrosses=(t,e)=>new B("notCrosses",t,[e]).toString();B.overlaps=(t,e)=>new B("overlaps",t,[e]).toString();B.notOverlaps=(t,e)=>new B("notOverlaps",t,[e]).toString();B.touches=(t,e)=>new B("touches",t,[e]).toString();B.notTouches=(t,e)=>new B("notTouches",t,[e]).toString();var Gn;(function(t){t[t.NORMAL_CLOSURE=1e3]="NORMAL_CLOSURE",t[t.POLICY_VIOLATION=1008]="POLICY_VIOLATION",t[t.UNKNOWN_ERROR=-1]="UNKNOWN_ERROR"})(Gn||(Gn={}));var ho,po;class nr{static custom(e){return e}static unique(e=7){const r=cc(nr,ho,"m",po).call(nr);let a="";for(let s=0;s<e;s++){const i=Math.floor(Math.random()*16).toString(16);a+=i}return r+a}}ho=nr,po=function(){const e=new Date,r=Math.floor(e.getTime()/1e3),a=e.getMilliseconds();return r.toString(16)+a.toString(16).padStart(5,"0")};var Vn;(function(t){t.Equal="equal",t.NotEqual="notEqual",t.GreaterThan="greaterThan",t.GreaterThanEqual="greaterThanEqual",t.LessThan="lessThan",t.LessThanEqual="lessThanEqual",t.Contains="contains",t.IsNull="isNull",t.IsNotNull="isNotNull"})(Vn||(Vn={}));var Kn;(function(t){t.Totp="totp"})(Kn||(Kn={}));var Jn;(function(t){t.Email="email",t.Phone="phone",t.Totp="totp",t.Recoverycode="recoverycode"})(Jn||(Jn={}));var Yn;(function(t){t.Amazon="amazon",t.Apple="apple",t.Auth0="auth0",t.Authentik="authentik",t.Autodesk="autodesk",t.Bitbucket="bitbucket",t.Bitly="bitly",t.Box="box",t.Dailymotion="dailymotion",t.Discord="discord",t.Disqus="disqus",t.Dropbox="dropbox",t.Etsy="etsy",t.Facebook="facebook",t.Figma="figma",t.Github="github",t.Gitlab="gitlab",t.Google="google",t.Linkedin="linkedin",t.Microsoft="microsoft",t.Notion="notion",t.Oidc="oidc",t.Okta="okta",t.Paypal="paypal",t.PaypalSandbox="paypalSandbox",t.Podio="podio",t.Salesforce="salesforce",t.Slack="slack",t.Spotify="spotify",t.Stripe="stripe",t.Tradeshift="tradeshift",t.TradeshiftBox="tradeshiftBox",t.Twitch="twitch",t.Wordpress="wordpress",t.Yahoo="yahoo",t.Yammer="yammer",t.Yandex="yandex",t.Zoho="zoho",t.Zoom="zoom",t.Mock="mock"})(Yn||(Yn={}));var Fn;(function(t){t.AvantBrowser="aa",t.AndroidWebViewBeta="an",t.GoogleChrome="ch",t.GoogleChromeIOS="ci",t.GoogleChromeMobile="cm",t.Chromium="cr",t.MozillaFirefox="ff",t.Safari="sf",t.MobileSafari="mf",t.MicrosoftEdge="ps",t.MicrosoftEdgeIOS="oi",t.OperaMini="om",t.Opera="op",t.OperaNext="on"})(Fn||(Fn={}));var Zn;(function(t){t.AmericanExpress="amex",t.Argencard="argencard",t.Cabal="cabal",t.Cencosud="cencosud",t.DinersClub="diners",t.Discover="discover",t.Elo="elo",t.Hipercard="hipercard",t.JCB="jcb",t.Mastercard="mastercard",t.Naranja="naranja",t.TarjetaShopping="targeta-shopping",t.UnionPay="unionpay",t.Visa="visa",t.MIR="mir",t.Maestro="maestro",t.Rupay="rupay"})(Zn||(Zn={}));var Xn;(function(t){t.Afghanistan="af",t.Angola="ao",t.Albania="al",t.Andorra="ad",t.UnitedArabEmirates="ae",t.Argentina="ar",t.Armenia="am",t.AntiguaAndBarbuda="ag",t.Australia="au",t.Austria="at",t.Azerbaijan="az",t.Burundi="bi",t.Belgium="be",t.Benin="bj",t.BurkinaFaso="bf",t.Bangladesh="bd",t.Bulgaria="bg",t.Bahrain="bh",t.Bahamas="bs",t.BosniaAndHerzegovina="ba",t.Belarus="by",t.Belize="bz",t.Bolivia="bo",t.Brazil="br",t.Barbados="bb",t.BruneiDarussalam="bn",t.Bhutan="bt",t.Botswana="bw",t.CentralAfricanRepublic="cf",t.Canada="ca",t.Switzerland="ch",t.Chile="cl",t.China="cn",t.CoteDIvoire="ci",t.Cameroon="cm",t.DemocraticRepublicOfTheCongo="cd",t.RepublicOfTheCongo="cg",t.Colombia="co",t.Comoros="km",t.CapeVerde="cv",t.CostaRica="cr",t.Cuba="cu",t.Cyprus="cy",t.CzechRepublic="cz",t.Germany="de",t.Djibouti="dj",t.Dominica="dm",t.Denmark="dk",t.DominicanRepublic="do",t.Algeria="dz",t.Ecuador="ec",t.Egypt="eg",t.Eritrea="er",t.Spain="es",t.Estonia="ee",t.Ethiopia="et",t.Finland="fi",t.Fiji="fj",t.France="fr",t.MicronesiaFederatedStatesOf="fm",t.Gabon="ga",t.UnitedKingdom="gb",t.Georgia="ge",t.Ghana="gh",t.Guinea="gn",t.Gambia="gm",t.GuineaBissau="gw",t.EquatorialGuinea="gq",t.Greece="gr",t.Grenada="gd",t.Guatemala="gt",t.Guyana="gy",t.Honduras="hn",t.Croatia="hr",t.Haiti="ht",t.Hungary="hu",t.Indonesia="id",t.India="in",t.Ireland="ie",t.IranIslamicRepublicOf="ir",t.Iraq="iq",t.Iceland="is",t.Israel="il",t.Italy="it",t.Jamaica="jm",t.Jordan="jo",t.Japan="jp",t.Kazakhstan="kz",t.Kenya="ke",t.Kyrgyzstan="kg",t.Cambodia="kh",t.Kiribati="ki",t.SaintKittsAndNevis="kn",t.SouthKorea="kr",t.Kuwait="kw",t.LaoPeopleSDemocraticRepublic="la",t.Lebanon="lb",t.Liberia="lr",t.Libya="ly",t.SaintLucia="lc",t.Liechtenstein="li",t.SriLanka="lk",t.Lesotho="ls",t.Lithuania="lt",t.Luxembourg="lu",t.Latvia="lv",t.Morocco="ma",t.Monaco="mc",t.Moldova="md",t.Madagascar="mg",t.Maldives="mv",t.Mexico="mx",t.MarshallIslands="mh",t.NorthMacedonia="mk",t.Mali="ml",t.Malta="mt",t.Myanmar="mm",t.Montenegro="me",t.Mongolia="mn",t.Mozambique="mz",t.Mauritania="mr",t.Mauritius="mu",t.Malawi="mw",t.Malaysia="my",t.Namibia="na",t.Niger="ne",t.Nigeria="ng",t.Nicaragua="ni",t.Netherlands="nl",t.Norway="no",t.Nepal="np",t.Nauru="nr",t.NewZealand="nz",t.Oman="om",t.Pakistan="pk",t.Panama="pa",t.Peru="pe",t.Philippines="ph",t.Palau="pw",t.PapuaNewGuinea="pg",t.Poland="pl",t.FrenchPolynesia="pf",t.NorthKorea="kp",t.Portugal="pt",t.Paraguay="py",t.Qatar="qa",t.Romania="ro",t.Russia="ru",t.Rwanda="rw",t.SaudiArabia="sa",t.Sudan="sd",t.Senegal="sn",t.Singapore="sg",t.SolomonIslands="sb",t.SierraLeone="sl",t.ElSalvador="sv",t.SanMarino="sm",t.Somalia="so",t.Serbia="rs",t.SouthSudan="ss",t.SaoTomeAndPrincipe="st",t.Suriname="sr",t.Slovakia="sk",t.Slovenia="si",t.Sweden="se",t.Eswatini="sz",t.Seychelles="sc",t.Syria="sy",t.Chad="td",t.Togo="tg",t.Thailand="th",t.Tajikistan="tj",t.Turkmenistan="tm",t.TimorLeste="tl",t.Tonga="to",t.TrinidadAndTobago="tt",t.Tunisia="tn",t.Turkey="tr",t.Tuvalu="tv",t.Tanzania="tz",t.Uganda="ug",t.Ukraine="ua",t.Uruguay="uy",t.UnitedStates="us",t.Uzbekistan="uz",t.VaticanCity="va",t.SaintVincentAndTheGrenadines="vc",t.Venezuela="ve",t.Vietnam="vn",t.Vanuatu="vu",t.Samoa="ws",t.Yemen="ye",t.SouthAfrica="za",t.Zambia="zm",t.Zimbabwe="zw"})(Xn||(Xn={}));var es;(function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE",t.OPTIONS="OPTIONS",t.HEAD="HEAD"})(es||(es={}));var ts;(function(t){t.Center="center",t.Topleft="top-left",t.Top="top",t.Topright="top-right",t.Left="left",t.Right="right",t.Bottomleft="bottom-left",t.Bottom="bottom",t.Bottomright="bottom-right"})(ts||(ts={}));var rs;(function(t){t.Jpg="jpg",t.Jpeg="jpeg",t.Png="png",t.Webp="webp",t.Heic="heic",t.Avif="avif",t.Gif="gif"})(rs||(rs={}));var as;(function(t){t.Http="http",t.Schedule="schedule",t.Event="event"})(as||(as={}));var ns;(function(t){t.Waiting="waiting",t.Processing="processing",t.Completed="completed",t.Failed="failed",t.Scheduled="scheduled"})(ns||(ns={}));function go(t,e){return{$id:t.$id,mainId:t.mainId,productHugoUuid:t.productHugoUuid,productName:t.productName,...e}}async function yt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getDatabases(),e=window.AppwriteClient.getConfig();return{databases:t,config:e}}async function uc(t){const a=await(await window.AppwriteClient.getAccount()).get();return{...t,updatedBy:a.name}}function lr(){return localStorage.getItem("appwrite-user-name")||""}async function dc(t,e,r=100){try{const{databases:a,config:s}=await yt(),i=await a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.purchases,[B.greaterThan("$updatedAt",e),B.equal("mainId",t),B.limit(r),B.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(a){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",a),[]}}async function mo(t,e){const{lastSync:r,limit:a=100}=e;try{const{databases:s,config:i}=await yt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[B.equal("mainId",t),B.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),B.limit(a)])).documents;const o=await s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[B.greaterThan("$updatedAt",r),B.equal("mainId",t),B.limit(a),B.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(s){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${t}:`,s);const i=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function wr(t,e,r=!0){const{databases:a,config:s}=await yt();return r&&(e.updatedBy=lr()),await a.updateDocument(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,t,e)}async function Ut(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${t} sur Appwrite...`);const s=go(a,e),i=await uc(s),{databases:o,config:l}=await yt(),u=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,t,i);return console.log(`[Appwrite Interactions] Produit ${t} créé avec succès`),u}catch(a){console.error(`[Appwrite Interactions] Erreur création produit ${t}:`,a);const s=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${s}`)}}async function _o(t,e){try{const{databases:r,config:a}=await yt(),{slugify:s}=await Xa(async()=>{const{slugify:v}=await Promise.resolve().then(()=>Vl);return{slugify:v}},void 0),o=`${s(t.productName).substring(0,10)}_${Date.now().toString(36)}`,l={quantity:t.quantity,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1},u={productHugoUuid:null,productName:t.productName,productType:t.productType||"Autre",store:t.store?JSON.stringify(t.store):null,who:t.who||[],isSynced:!0,mainId:e,status:"active",updatedBy:lr(),stockReel:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,specs:JSON.stringify(l)};console.log(`[Appwrite Interactions] Création produit manuel ${o}...`,u);const h=await r.createDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,o,u);return console.log(`[Appwrite Interactions] Produit manuel ${o} créé avec succès`),h}catch(r){throw console.error("[Appwrite Interactions] Erreur création produit manuel:",r),r}}async function bo(t,e){if(!t)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=e?JSON.stringify(e):null,a=await wr(t,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${t}, nouvelle valeur:`,a.store),a}async function yo(t,e){return wr(t,{who:e})}async function en(t,e){return wr(t,{stockReel:e})}async function xn(t,e,r=!1){if(!t)throw new Error("ID du produit requis pour la mise à jour de l'override");const a=JSON.stringify(e),s=await wr(t,{totalNeededOverride:a},r);return console.log(`[Appwrite Interactions] Total override mis à jour pour le produit ${t}:`,e),s}async function wo(t,e=!0){if(!t)throw new Error("ID du produit requis pour la suppression de l'override");const r=await wr(t,{totalNeededOverride:null},e);return console.log(`[Appwrite Interactions] Total override supprimé pour le produit ${t}`),r}async function xo(t,e,r){try{const a=r(t);if(!a)throw new Error(`Produit ${t} non trouvé localement pour mise à jour batch`);const s={};return e.stockReel!==void 0&&(s.stockReel=e.stockReel),e.who!==void 0&&(s.who=e.who),e.storeInfo!==void 0&&(s.store=JSON.stringify(e.storeInfo)),a.isSynced?(console.log(`[Appwrite Interactions] Produit ${t} déjà sync, update batch normal...`),await wr(t,s)):(console.log(`[Appwrite Interactions] Produit ${t} local, création batch avec upsert...`),await Ut(t,s,r))}catch(a){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${t}:`,a),a}}async function So(t){const{databases:e,config:r}=await yt(),a={...t,createdBy:lr()},s=await e.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,nr.unique(),a);return console.log("[Appwrite Interactions] Achat créé:",s),s}async function Sn(t,e){try{const{databases:r,config:a}=await yt(),s=await r.getDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t),i={...e,products:e.products||s.products},o=await r.updateDocument(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,t,i);return console.log(`[Appwrite Interactions] Achat ${t} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${t}:`,r);const a=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${a}`)}}async function Po(t){try{const{databases:e,config:r}=await yt();await e.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,t),console.log(`[Appwrite Interactions] Achat ${t} supprimé`)}catch(e){console.error(`[Appwrite Interactions] Erreur suppression achat ${t}:`,e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function $o(t){if(!t?.length)return[];try{const{databases:e,config:r}=await yt(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[B.equal("$id",t),B.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${a.documents.length} purchases chargés avec relations products`),a.documents}catch(e){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",e);const r=e instanceof Error?e.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function ko(t,e={}){let r=null;const a=i=>{const{events:o,payload:l}=i;if(!l)return;const u=o.some(m=>m.includes("products.")),h=o.some(m=>m.includes("purchases.")),v=o.some(m=>m.includes(".create")),g=o.some(m=>m.includes(".update")),p=o.some(m=>m.includes(".delete"));if(u){const m=l;m.updatedBy&&m.updatedBy!==lr()&&(v||g?kt.info(`${m.updatedBy} a modifié le produit "${m.productName}"`,{source:"realtime-other"}):p&&kt.info(`${m.updatedBy} a supprimé un produit`,{source:"realtime-other"})),v&&e.onProductCreate?e.onProductCreate(m):g&&e.onProductUpdate?e.onProductUpdate(m):p&&e.onProductDelete&&e.onProductDelete(m.$id)}else if(h){const m=l;if(m.createdBy&&m.createdBy!==lr()){const _=m.products?.[0]?.productName||"un produit";v&&m.who!==lr()?kt.info(`${m.who} a ajouté un achat pour ${_}`,{source:"realtime-other"}):g&&m.who!==lr()?kt.info(`${m.who} a modifié un achat pour ${_}`,{source:"realtime-other"}):p&&kt.info(`${m.who} a supprimé un achat pour ${_}`,{source:"realtime-other"})}v&&e.onPurchaseCreate?e.onPurchaseCreate(m):g&&e.onPurchaseUpdate?e.onPurchaseUpdate(m):p&&e.onPurchaseDelete&&e.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],t,a,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),e.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),e.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),e.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),e.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function Eo(t){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${t}`);const{databases:e}=await yt(),r=window.AppwriteClient.getConfig(),a=await e.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,t);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${a.name}`),a}catch(e){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${t}:`,e),null}}async function Ao(t,e,r,a){try{console.log(`[Appwrite Interactions] Création du Main document: ${t}`);const{databases:s}=await yt(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await s.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,t,{name:a,createdBy:l.$id,isActive:!0,originalDataHash:e,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${t}`)}catch(s){throw console.error("[Appwrite Interactions] Erreur création Main document:",s),s}}async function Pn(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"batchUpdateProducts",data:t};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${t.productIds.length} produits, type: ${t.updateType}`);const s=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST");if(s.status!=="completed")throw new Error(`Exécution échouée avec statut: ${s.status}. Erreur: ${s.stderr}`);const i=JSON.parse(s.responseBody);return i.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${i.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,updatedCount:t.productIds.length,updateType:t.updateType,error:r,timestamp:new Date().toISOString()}}}async function To(t,e,r,a){return Pn({productIds:t,products:e,updateType:"store",updateData:r,options:a})}async function Mo(t,e,r,a="replace"){return Pn({productIds:t,products:e,updateType:"who",updateData:{names:r},options:{mode:a}})}async function No(t,e,r,a={}){try{const{databases:s,config:i}=await yt(),u=await(await window.AppwriteClient.getAccount()).get(),h=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:t,productId:e,productIdType:typeof e,quantities:r,options:a});for(const v of r){const g={products:[e],mainId:t,quantity:v.q,unit:v.u,status:"delivered",notes:a.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:a.store??null,who:u.name,price:null,orderDate:null,deliveryDate:null,createdBy:u.$id,invoiceId:a.invoiceId,invoiceTotal:null},p=await s.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.purchases,nr.unique(),g);h.push(p)}return console.log(`[Appwrite Interactions] ${h.length} validations rapides créées pour produit ${e}`),h}catch(s){console.error("[Appwrite Interactions] Erreur création validation rapide:",s);const i=s instanceof Error?s.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${i}`)}}async function Do(t,e,r,a,s,i){try{const{databases:o,config:l}=await yt(),v=await(await window.AppwriteClient.getAccount()).get(),g=e||nr.unique(),p=v.name;if(!r)throw new Error("invoiceTotal est requis pour une dépense");const m={products:[],mainId:t,quantity:1,unit:"global",status:"expense",notes:s||"",store:a??null,who:p||v.name,price:r,invoiceId:g,invoiceTotal:r,orderDate:null,deliveryDate:null,createdBy:v.$id},_=await o.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.purchases,nr.unique(),m);return console.log("[Appwrite Interactions] Dépense créée:",_),_}catch(o){console.error("[Appwrite Interactions] Erreur création dépense:",o);const l=o instanceof Error?o.message:"Erreur inconnue";throw new Error(`Échec de la création de la dépense: ${l}`)}}async function vc(t){try{const{databases:e,config:r}=await yt(),a=await e.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[B.equal("mainId",t),B.equal("status","expense"),B.limit(1e3)]);return console.log(`[Appwrite Interactions] ${a.documents.length} dépenses globales chargées`),a.documents}catch(e){return console.error("[Appwrite Interactions] Erreur chargement dépenses globales:",e),[]}}const ss=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:Pn,batchUpdateStore:To,batchUpdateWho:Mo,createExpensePurchase:Do,createMainDocument:Ao,createManualProduct:_o,createPurchase:So,createQuickValidationPurchases:No,deletePurchase:Po,enrichedProductToAppwriteProduct:go,loadMainEventData:Eo,loadOrphanPurchases:vc,loadPurchasesListByIds:$o,loadUpdatedPurchases:dc,removeTotalOverride:wo,subscribeToRealtime:ko,syncProductsWithPurchases:mo,updateProduct:wr,updateProductBatch:xo,updateProductStock:en,updateProductStore:bo,updateProductWho:yo,updatePurchase:Sn,updateTotalOverride:xn,upsertProduct:Ut},Symbol.toStringTag,{value:"Module"}));async function fc(t){let e;if(e=await fetch(`/evenements/${t}/metadata.json`),!e.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function os(t){const e=await fetch(`/evenements/${t}/ingredients_aw/index.json`);if(!e.ok)throw new Error(`Impossible de charger les données Hugo: ${e.status}`);const r=await e.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function hc(t,e){if(!t)return!0;try{return(await fc(e)).hugoContentHash!==t}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function Co(t,e){const r=Ma(t.byDate),a=ea(Xr([])),{numeric:s,display:i}=ta(r,a);return{$id:`${t.productSemanticKey}`,$updatedAt:void 0,productHugoUuid:t.ingredientHugoUuid,productName:t.ingredientName,productType:t.ingType,pFrais:t.pFrais||!1,pSurgel:t.pSurgel||!1,nbRecipes:t.nbRecipes,totalNeededRaw:t.totalNeededRaw,totalAssiettes:t.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:e,purchases:[],byDate:t.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalPurchasesArray:a,missingQuantityArray:s,stockOrTotalPurchases:"-",displayTotalNeeded:ht(r),displayTotalPurchases:"-",displayMissingQuantity:i,totalNeededOverrideParsed:null,displayTotalOverride:""}}function pc(t,e){return t.map(r=>Co(r,e))}class gc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(e){this.dbName=`products-cache-${e}`}async open(){if(!this.db)return new Promise((e,r)=>{const a=indexedDB.open(this.dbName,this.version);a.onerror=()=>r(a.error),a.onsuccess=()=>{this.db=a.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),e()},a.onupgradeneeded=s=>{const i=s.target.result;i.objectStoreNames.contains(this.PRODUCTS_STORE)||(i.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),i.objectStoreNames.contains(this.METADATA_STORE)||(i.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();i.onsuccess=()=>{const o=new Map;i.result.forEach(l=>{o.set(l.$id,l)}),console.log(`[IDBCache] ${o.size} produits chargés`),e(o)},i.onerror=()=>r(i.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const i=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();i.onsuccess=()=>{const o=i.result,l={lastSync:null,allDates:[],hugoContentHash:null};o.forEach(u=>{u.key===this.LAST_SYNC_KEY?l.lastSync=u.value:u.key===this.ALL_DATES_KEY?l.allDates=u.value||[]:u.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=u.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),e(l)},i.onerror=()=>r(i.error)})}async saveProducts(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const s=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),i=s.objectStore(this.PRODUCTS_STORE);i.clear(),e.forEach(o=>{i.put(o)}),s.oncomplete=()=>{console.log(`[IDBCache] ${e.size} produits sauvegardés`),r()},s.onerror=()=>a(s.error)})}async saveMetadata(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const s=this.db.transaction(this.METADATA_STORE,"readwrite"),i=s.objectStore(this.METADATA_STORE);i.put({key:this.LAST_SYNC_KEY,value:e.lastSync}),i.put({key:this.ALL_DATES_KEY,value:e.allDates}),e.hugoContentHash!==void 0&&i.put({key:this.HUGO_HASH_KEY,value:e.hugoContentHash}),s.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},s.onerror=()=>a(s.error)})}async updateLastSync(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateAllDates(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${e.length} dates`),r()},o.onerror=()=>a(o.error)})}async updateHugoContentHash(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:e});o.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${e}`),r()},o.onerror=()=>a(o.error)})}async updateLastHugoMenuUpdate(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:"lastHugoMenuUpdate",value:e});o.onsuccess=()=>{console.log("[IDBCache] lastHugoMenuUpdate sauvegardé"),r()},o.onerror=()=>a(o.error)})}async upsertProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async deleteProduct(e){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,a)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(e);o.onsuccess=()=>r(),o.onerror=()=>a(o.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((e,r)=>{const a=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");a.objectStore(this.PRODUCTS_STORE).clear(),a.objectStore(this.METADATA_STORE).clear(),a.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),e()},a.onerror=()=>r(a.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function mc(t){const e=new gc(t);return await e.open(),e}function _c(t){return!!(t.isMerged||t.totalNeededOverride)}function bc(t,e){if(!t||t.length!==e.length)return!0;for(let r=0;r<t.length;r++){const a=t[r],s=e[r];if(a.q!==s.q||a.u!==s.u)return!0}return!1}async function yc(t,e){const r={added:[],updated:[],removed:[],mergedProductsUpdated:[],overrideConflicts:[],summary:""},a=new Map;for(const[i,o]of t)a.set(o.productHugoUuid,i);const s=new Set;for(const i of e.ingredients){const o=i.productSemanticKey||`${e.mainGroup_id}_${i.ingredientHugoUuid}`;s.add(o);const l=a.get(i.ingredientHugoUuid),u=l?t.get(l):void 0;if(u){if(bc(u.totalNeededRaw,i.totalNeededRaw)){const v=wc(u,i);if(v&&r.overrideConflicts.push(v),u.isMerged){const g=u.displayTotalNeeded;is(u,i),r.mergedProductsUpdated.push({product:u,oldDisplayTotal:g,newDisplayTotal:u.displayTotalNeeded,currentOverride:u.totalNeededOverrideParsed,semanticKey:o})}else is(u,i);r.updated.push(o)}t.set(o,u)}else{r.added.push(i);const h=Co(i,e.mainGroup_id);t.set(h.$id,h)}}for(const[i,o]of t)s.has(i)||(r.removed.push(o),!_c(o)&&!o.purchases?.length&&!o.stockReel&&!o.who?.length&&t.delete(i));return r.overrideConflicts.length>0&&await xc(r.overrideConflicts),r.summary=Pc(r),r}function wc(t,e){if(!t.totalNeededOverride||!t.totalNeededOverrideParsed)return null;const r=Ma(e.byDate),a=ht(r),s=t.displayTotalNeeded;return s!==a?{product:t,oldDisplayTotal:s,newDisplayTotal:a,currentOverride:t.totalNeededOverrideParsed,semanticKey:t.$id}:null}async function xc(t){for(const e of t){const r={...e.currentOverride,hasUnresolvedChangedSinceOverride:!0,oldTotalDisplay:e.oldDisplayTotal,newTotalDisplay:e.newDisplayTotal};JSON.stringify(r);try{await xn(e.product.$id,r,!1)}catch(a){console.error(`Erreur lors de la mise à jour de l'override pour ${e.product.$id}:`,a)}}}function is(t,e){t.byDate=e.byDate,t.nbRecipes=e.nbRecipes,t.totalAssiettes=e.totalAssiettes,t.productType=e.ingType,t.pFrais=e.pFrais||!1,t.pSurgel=e.pSurgel||!1,Sc(t)}function Sc(t){t.totalNeededArray=Ma(t.byDate),t.displayTotalNeeded=ht(t.totalNeededArray);const e=ea(Xr(t.purchases)),{numeric:r,display:a}=ta(t.totalNeededArray,e);t.totalPurchasesArray=e,t.missingQuantityArray=r,t.displayMissingQuantity=a,t.stockOrTotalPurchases=t.purchases.length>0?t.displayTotalPurchases:t.displayTotalNeeded}function Pc(t){const e=[];if((t.added.length>0||t.updated.length>0||t.removed.length>0)&&e.push("Les recettes ou menus ont été modifiés depuis votre dernière consultation: "),t.added.length>0&&e.push(`${t.added.length} nouveau(x) ingrédient(s)`),t.updated.length>0&&e.push(` ${t.updated.length} ingrédient(s) mis à jour`),t.overrideConflicts.length>0&&e.push(`⚠️ ${t.overrideConflicts.length} quantité(s) personnalisée(s) à réviser`),t.mergedProductsUpdated.length>0&&e.push(`🔀 ${t.mergedProductsUpdated.length} produit(s) fusionné(s) modifié(s)`),t.removed.length>0){const r=t.removed.filter(a=>a.purchases?.length||a.stockReel||a.who?.length).length;r>0?e.push(`⚠️ ${r} suppression(s) avec données conservées`):e.push(`${t.removed.length} ingrédient(s) supprimé(s)`)}return e.length>0?e.join(", "):"Aucune modification détectée"}class $c{isMobileQuery=new Ll("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return kt.toasts}get toast(){return kt}#e=H(Be({isOpen:!1,conflicts:[]}));get modalOverride(){return n(this.#e)}set modalOverride(e){b(this.#e,e,!0)}#t=H(Be({isOpen:!1}));get modal(){return n(this.#t)}set modal(e){b(this.#t,e,!0)}}const Nr=new $c;class la{#e=H();get data(){return n(this.#e)}set data(e){b(this.#e,e,!0)}#t;#s;constructor(e,r,a){this.data=e,this.#t=r,this.#s=a}update(e){this.data=e}get $id(){return this.data.$id}get productName(){return this.data.productName}get productType(){return this.data.productType}get storeInfo(){return this.data.storeInfo}get who(){return this.data.who}get pFrais(){return this.data.pFrais}get pSurgel(){return this.data.pSurgel}get status(){return this.data.status}get previousNames(){return this.data.previousNames}get purchases(){return this.data.purchases}get totalNeededOverrideParsed(){return this.data.totalNeededOverrideParsed}get displayMissingQuantity(){return this.data.displayMissingQuantity}get missingQuantityArray(){return this.data.missingQuantityArray}get isSynced(){return this.data.isSynced}get byDate(){return this.data.byDate}#o=J(()=>{const e=this.#t(),r=this.#s();let a;if(e.start&&e.start===e.end)a=tc(this.data,e.start);else if(vo(e,r))a=nc(this.data,r),a.datesInSelectedRange=a.datesInSelectedRange.filter(s=>this.data.byDate&&this.data.byDate[s]);else if(e.start&&e.end)a=sc(this.data,e.start,e.end);else return{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedMissingQuantities:"",formattedAvailableQuantities:"En attente",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map};return{quantities:a.requiredQuantities,formattedQuantities:a.requiredQuantitiesFormatted,nbRecipes:a.totalRecipesInRange,totalAssiettes:a.totalPortionsInRange,stockResult:a.stockBalance,availableQuantities:a.availableStockQuantities,missingQuantities:a.missingStockQuantities,formattedMissingQuantities:a.missingStockFormatted,formattedAvailableQuantities:a.availableStockFormatted,hasAvailable:a.hasAvailableStock,hasMissing:a.hasMissingStock,concernedDates:a.datesInSelectedRange,recipesByDate:a.recipesByDate}});get stats(){return n(this.#o)}set stats(e){b(this.#o,e)}}const ls=1e3;class kc{#e=new Qn;#t=new Qn;#s=H(null);#o=H(null);#d=H(!1);#c=H(!1);#u=H(null);#l=H(!1);#v=H(!1);#i=H(null);#f=H(null);get currentMainId(){return n(this.#s)}#a=H(Be([]));#h=H(Be({start:null,end:null}));get dateRange(){return n(this.#h)}set dateRange(e){b(this.#h,e,!0)}#g=J(()=>!!(this.dateRange.start&&this.dateRange.start===this.dateRange.end));get hasSingleDateInRange(){return n(this.#g)}set hasSingleDateInRange(e){b(this.#g,e)}#_=J(()=>n(this.#a).length===1);get hasSingleDateEvent(){return n(this.#_)}set hasSingleDateEvent(e){b(this.#_,e)}#b=J(()=>{if(n(this.#a).length===0)return!0;const e=this.lastAvailableDate?new Date(this.lastAvailableDate):new Date;return e.setHours(23,59,59,999),e<new Date});get isEventPassed(){return n(this.#b)}set isEventPassed(e){b(this.#b,e)}#n=null;#y=null;#m=H(!1);#p=null;#x=H(!1);#q=H();#S=H(Be([]));get hasPendingConflicts(){return n(this.#S).length>0}get pendingConflicts(){return n(this.#S)}#r=H(Be({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return n(this.#r)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get loading(){return n(this.#c)}get error(){return n(this.#u)}get lastSync(){return n(this.#i)}get syncing(){return n(this.#l)}get availableDates(){return n(this.#a)}setDateRange(e,r){if(!e&&!r){this.dateRange={start:null,end:null};return}if(!e||!r){this.dateRange={start:e||r,end:e||r};return}const a=new Date(e)<=new Date(r)?e:r,s=new Date(e)>=new Date(r)?e:r;this.dateRange={start:a,end:s}}isFullRange(){return vo(this.dateRange,n(this.#a))}initializeDateRange(){const e=Fl(n(this.#a));e&&(this.dateRange=e),console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}selectUpcomingDates(){const e=uo(n(this.#a));e&&(this.dateRange=e)}isUpcomingRange(){return Xl(this.dateRange,n(this.#a))}get firstAvailableDate(){return co(n(this.#a))}get lastAvailableDate(){return Ca(n(this.#a))}get realtimeConnected(){return n(this.#v)}#k=J(()=>{const e=Array.from(this.#e.values()).map(r=>r.data);return console.log(`[ProductsStore] enrichedProducts recalculated: ${e.length} products`),e});get enrichedProducts(){return n(this.#k)}set enrichedProducts(e){b(this.#k,e)}#E=J(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const e=new Date(this.dateRange.start),r=new Date(this.dateRange.end),a=new Map;for(const[s,i]of this.#e){const o=i.data;if(!o.byDate||!lo(o,n(this.#r)))continue;const u=Object.keys(o.byDate).some(v=>{const g=new Date(v);return g>=e&&g<=r}),h=o.productHugoUuid===null;(u||h)&&a.set(s,i)}return a});get filteredProductsMap(){return n(this.#E)}set filteredProductsMap(e){b(this.#E,e)}#A=J(()=>({total:this.#e.size,frais:Array.from(this.#e.values()).filter(e=>e.pFrais).length,surgel:Array.from(this.#e.values()).filter(e=>e.pSurgel).length,merged:Array.from(this.#e.values()).filter(e=>e.data.isMerged).length}));get stats(){return n(this.#A)}set stats(e){b(this.#A,e)}#T=J(()=>{const e=Array.from(this.#e.values()).map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(e)]});get uniqueStores(){return n(this.#T)}set uniqueStores(e){b(this.#T,e)}#M=J(()=>{const e=Array.from(this.#e.values()).flatMap(r=>r.who||[]);return[...new Set(e)]});get uniqueWho(){return n(this.#M)}set uniqueWho(e){b(this.#M,e)}#N=J(()=>{const e=Array.from(this.#e.values()).map(r=>r.productType).filter(Boolean);return[...new Set(e)]});get uniqueProductTypes(){return n(this.#N)}set uniqueProductTypes(e){b(this.#N,e)}#D=J(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((o,l)=>o.$id.localeCompare(l.$id));if(n(this.#r).groupBy==="none")return{"":r};const a=Object.groupBy(r,o=>n(this.#r).groupBy==="store"?o.storeInfo?.storeName||"Non défini":o.productType||"Non défini"),s=Object.keys(a).sort((o,l)=>o===""?1:l===""?-1:o.localeCompare(l)),i={};return s.forEach(o=>{i[o]=a[o]}),i});get groupedFilteredProducts(){return n(this.#D)}set groupedFilteredProducts(e){b(this.#D,e)}async initialize(e,r){if(!e?.trim())throw new Error("mainId invalide fourni");if(n(this.#d)&&n(this.#s)===e){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${e}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${e}`),b(this.#s,e,!0),b(this.#o,r,!0);try{this.#n=await mc(e)}catch(a){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",a),new Error("Impossible d'initialiser le cache IndexedDB")}b(this.#u,null);try{if(await this.#j(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");let s;s=await os(r),console.log(`[ProductsStore] Hugo chargé: ${s.ingredients.length} ingrédients`),b(this.#f,s.hugoContentHash,!0),pc(s.ingredients,e).forEach(l=>{this.#e.set(l.$id,new la(l,()=>this.dateRange,()=>n(this.#a)))}),b(this.#a,[...s.allDates],!0),await Eo(e)||await Ao(s.mainGroup_id,s.hugoContentHash,s.allDates,s.name),await this.#C()}this.initializeDateRange(),await this.#L(),await this.#F(),b(this.#d,!0);const a=this.#Y();this.#y=ko(e,a),this.#H(),console.log("[ProductsStore] Vérification initiale des changements Hugo..."),await this.#I(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(a){const s=a instanceof Error?a.message:"Erreur lors de l'initialisation";throw b(this.#u,s,!0),console.error("[ProductsStore]",s,a),a}}async#j(){if(this.#n)try{const e=await this.#n.loadProducts();e.forEach((a,s)=>{this.#e.set(s,new la(a,()=>this.dateRange,()=>n(this.#a)))});const r=await this.#n.loadMetadata();b(this.#i,r.lastSync,!0),b(this.#a,[...r.allDates],!0),b(this.#f,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${e.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(e){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",e)}}async#L(){if(n(this.#s)){b(this.#l,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${n(this.#s)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${n(this.#i)}`);const e=await mo(n(this.#s),{lastSync:n(this.#i),limit:ls});if(console.log(`[ProductsStore] ${e.length} produits récupérés depuis Appwrite`),e.forEach(r=>{const a=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!a}, who=${r.who}, store=${r.store}`);const s=this.#O(r,a?.data);s.isSynced=!0,a?a.update(s):this.#e.set(r.$id,new la(s,()=>this.dateRange,()=>n(this.#a)))}),n(this.#i)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${n(this.#i)}`);const{loadUpdatedPurchases:r}=await Xa(async()=>{const{loadUpdatedPurchases:s}=await Promise.resolve().then(()=>ss);return{loadUpdatedPurchases:s}},void 0),a=await r(n(this.#s),n(this.#i),ls);console.log(`[ProductsStore] ${a.length} purchases modifiés récupérés`),a.forEach(s=>{if(s.status==="expense")this.#t.set(s.$id,s);else if(s.products?.length){const i=s.products.map(o=>typeof o=="string"?o:o.$id);this.#$(i,s)}})}this.#z(),await this.#B(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(e){throw console.error("[ProductsStore] Erreur lors du sync:",e),e}finally{b(this.#l,!1)}}}async#B(){if(this.#n)try{const e=new Map;this.#e.forEach((r,a)=>e.set(a,Sr(r.data))),await this.#n.saveProducts(e),await this.#n.saveMetadata({lastSync:n(this.#i),allDates:[...n(this.#a)],hugoContentHash:n(this.#f)}),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#Z(){if(this.#n)try{const e=new Map;this.#e.forEach((r,a)=>e.set(a,Sr(r.data))),await this.#n.saveProducts(e),await this.#n.updateLastSync(n(this.#i)),console.log("[ProductsStore] Cache IDB persisté")}catch(e){console.error("[ProductsStore] Erreur persist cache IDB:",e)}}async#C(){if(this.#n)try{const e=new Map;this.#e.forEach((r,a)=>e.set(a,Sr(r.data))),await this.#n.saveProducts(e),await this.#n.updateLastSync(n(this.#i)),await this.#n.updateAllDates([...n(this.#a)]),await this.#n.updateHugoContentHash(n(this.#f)),console.log("[ProductsStore] Cache IDB persisté avec métadonnées complètes")}catch(e){console.error("[ProductsStore] Erreur persistance cache complet:",e)}}async#P(e){if(!(!this.#n||e.length===0))try{const r=e.map(a=>this.#e.get(a)?.data).filter(a=>a!=null).map(a=>this.#n.upsertProduct(Sr(a)));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#z(){b(this.#i,new Date().toISOString(),!0)}async#I(){if(!n(this.#o)||n(this.#c))return!1;try{const e=await hc(n(this.#f),n(this.#o));return e&&!n(this.#m)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${n(this.#o)}, analyse approfondie en cours...`),b(this.#m,!0),await this.#U()),b(this.#q,new Date,!0),e}catch(e){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",e),!1}}async#U(){if(!n(this.#o)){console.warn("[ProductsStore] Impossible d'analyser: #hugoMetadata non défini");return}try{console.log("[ProductsStore] Chargement nouveau JSON Hugo...");const e=await os(n(this.#o)),r=new Map;this.#e.forEach((s,i)=>r.set(i,s.data));const a=await yc(r,e);if(console.log(`[ProductsStore  - hugo change] ${a.summary}`),a.overrideConflicts.length>0&&(b(this.#S,a.overrideConflicts,!0),kt.error(`${a.overrideConflicts.length} quantité(s) personnalisée(s) nécessitent votre attention`,{action:{label:"Réviser",onClick:()=>Nr.modalOverride.isOpen=!0}})),a.mergedProductsUpdated.length>0&&console.log(`[ProductsStore] ⚠️ ${a.mergedProductsUpdated.length} produits fusionnés modifiés`),a.removed.length>0){const s=a.removed.filter(i=>i.purchases?.length||i.stockReel||i.who?.length);s.length>0&&console.log(`[ProductsStore] ℹ️ ${s.length} ingrédients supprimés conservés (données utilisateur)`)}b(this.#a,[...e.allDates],!0),b(this.#f,e.hugoContentHash,!0),this.initializeDateRange(),await this.#C(),(a.added.length||a.updated.length||a.removed.length)&&kt.success(a.summary),b(this.#m,!1)}catch(e){console.error("[ProductsStore] Erreur sync Hugo:",e),kt.error("Erreur lors de la mise à jour Hugo")}}#H(){this.#p&&clearInterval(this.#p),this.#p=setInterval(async()=>{await this.#I()},6e4)}#Q(){this.#p&&(clearInterval(this.#p),this.#p=null)}#O(e,r){return r?ia(e,r):ic(e)}#X(e){e.length&&(e.forEach(r=>this.#w(r)),console.log(`[ProductsStore] ${e.length} produits upserted`))}#w(e){const r=this.#e.get(e.$id),a=this.#O(e,r?.data);r?r.update(a):this.#e.set(e.$id,new la(a,()=>this.dateRange,()=>n(this.#a)))}#W(e){this.#e.delete(e)}async#G(e){if(!e.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",e.$id),[];const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#J(r,e),r}async#V(e){if(e.products?.length){const r=e.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#$(r,e),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await $o([e.$id]);if(r?.products?.length){const a=r.products.map(s=>typeof s=="string"?s:s.$id).filter(Boolean);return this.#$(a,r),a}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#K(e){const r=Array.from(this.#e.values()).map(a=>a.data).filter(a=>a.purchases?.some(s=>s.$id===e));return r.forEach(a=>{this.#w(a)}),r.map(a=>a.$id)}#J(e,r){const a=Wn(r),s=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,u=l.purchases||[];if(!u.some(h=>h.$id===a.$id)){const h=ia({...l,purchases:[...u,a],status:"active"},l);s.push(h)}}}),s.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#$(e,r){const a=Wn(r),s=[];e.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.data,u=l.purchases||[],h=u.findIndex(v=>v.$id===a.$id);if(h>=0){const v=[...u];v[h]=a;const g=ia({...l,purchases:v,status:"active"},l);s.push(g)}else{const v=ia({...l,purchases:[...u,r],status:"active"},l);s.push(v)}}}),s.forEach(i=>{const o=this.#e.get(i.$id);o&&o.update(i)})}#Y(){return{onProductCreate:e=>{if(this.#w(e),this.#n){const r=this.#e.get(e.$id);r&&this.#n.upsertProduct(Sr(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductUpdate:e=>{if(this.#w(e),this.#n){const r=this.#e.get(e.$id);r&&this.#n.upsertProduct(Sr(r.data)).catch(a=>console.error("[ProductsStore] Erreur persistence produit:",a))}},onProductDelete:e=>{this.#W(e),this.#n&&this.#n.deleteProduct(e).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}const r=await this.#G(e);await this.#P(r)},onPurchaseUpdate:async e=>{if(e.status==="expense"){this.#t.set(e.$id,e);return}this.#t.has(e.$id)&&this.#t.delete(e.$id);const r=await this.#V(e);await this.#P(r)},onPurchaseDelete:async e=>{if(this.#t.has(e)){this.#t.delete(e);return}const r=await this.#K(e);await this.#P(r)},onConnect:()=>{b(this.#v,!0)},onDisconnect:()=>{b(this.#v,!1)},onError:e=>{console.error("[ProductsStore] Erreur realtime:",e)}}}setSearchQuery=Wl(e=>{n(this.#r).searchQuery=e},()=>500);toggleProductType(e){const r=n(this.#r).selectedProductTypes.indexOf(e);r>-1?n(this.#r).selectedProductTypes.splice(r,1):n(this.#r).selectedProductTypes.push(e)}toggleTemperature(e){const r=n(this.#r).selectedTemperatures.indexOf(e);r>-1?n(this.#r).selectedTemperatures.splice(r,1):n(this.#r).selectedTemperatures.push(e)}clearTypeAndTemperatureFilters(){n(this.#r).selectedProductTypes=[],n(this.#r).selectedTemperatures=[]}setGroupBy(e){n(this.#r).groupBy=e}toggleStore(e){const r=n(this.#r).selectedStores.indexOf(e);r>-1?n(this.#r).selectedStores.splice(r,1):n(this.#r).selectedStores.push(e)}toggleWho(e){const r=n(this.#r).selectedWho.indexOf(e);r>-1?n(this.#r).selectedWho.splice(r,1):n(this.#r).selectedWho.push(e)}clearStoreFilters(){n(this.#r).selectedStores=[]}clearWhoFilters(){n(this.#r).selectedWho=[]}handleSort(e){n(this.#r).sortColumn===e?n(this.#r).sortDirection=n(this.#r).sortDirection==="asc"?"desc":"asc":(n(this.#r).sortColumn=e,n(this.#r).sortDirection="asc")}clearFilters(){b(this.#r,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(e){return n(this.#r).sortColumn?[...e].sort((r,a)=>{let s=r[n(this.#r).sortColumn],i=a[n(this.#r).sortColumn];return n(this.#r).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,i=parseFloat(i)||0):n(this.#r).sortColumn==="purchases"&&(s=r.purchases?.length||0,i=a.purchases?.length||0),s<i?n(this.#r).sortDirection==="asc"?-1:1:s>i?n(this.#r).sortDirection==="asc"?1:-1:0}):e}getEnrichedProductById(e){return this.#e.get(e)?.data??null}getProductModelById(e){return this.#e.get(e)??null}hasConversions(e){const r=this.#e.get(e)?.data;return r?.byDate?oo(r.byDate):!1}async forceReload(e,r){await this.clearCache(),await this.initialize(e,r)}async clearCache(){this.#e.clear(),b(this.#a,[],!0),b(this.#i,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(e,r){const a=r?"isSyncing":"active";e.forEach(s=>{const i=this.#e.get(s);if(i){const o={...i.data,status:a};i.update(o)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${e.length} produits → ${a}`)}clearSyncStatus(){const e=[];for(const[r,a]of this.#e)a.status==="isSyncing"&&e.push(r);e.length>0&&(this.setSyncStatus(e,!1),console.log(`[ProductsStore] Nettoyage de ${e.length} produits en statut "isSyncing"`))}destroy(){this.#y?.(),this.#y=null,this.#Q(),this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}async#F(){if(n(this.#s))try{const{loadOrphanPurchases:e}=await Xa(async()=>{const{loadOrphanPurchases:a}=await Promise.resolve().then(()=>ss);return{loadOrphanPurchases:a}},void 0),r=await e(n(this.#s));r.forEach(a=>{this.#t.set(a.$id,a)}),console.log(`[ProductsStore] ${r.length} dépenses globales chargées`)}catch(e){console.error("[ProductsStore] Erreur chargement dépenses globales:",e)}}#R=J(()=>{let e=0;const r={},a={},s=[];for(const i of this.#t.values()){const o=i.invoiceTotal||i.price||0;e+=o;const l=i.store||"Non défini";r[l]=(r[l]||0)+o;const u=i.who||"Non défini";a[u]=(a[u]||0)+o,s.push(i)}for(const i of this.#e.values()){const o=i.data;if(o.purchases&&o.purchases.length>0){for(const l of o.purchases)if(l.price){e+=l.price;const u=l.store||"Non défini";r[u]=(r[u]||0)+l.price;const h=l.who||"Non défini";a[h]=(a[h]||0)+l.price;const v={...l,_productName:o.productName};s.push(v)}}}return s.sort((i,o)=>{const l=new Date(i.orderDate||i.$createdAt).getTime();return new Date(o.orderDate||o.$createdAt).getTime()-l}),{totalGlobal:e,byStore:r,byWho:a,allPurchases:s}});get financialStats(){return n(this.#R)}set financialStats(e){b(this.#R,e)}}const F=new kc;function cs(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const e=new URLSearchParams(window.location.search).get("listId");if(!e||!e.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return e.trim()}function Ec(t){const e=t.substring(0,4),r=t.slice(-10);return`${e}_${r}`}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Ac={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Tc=vl("<svg><!><!></svg>");function we(t,e){Z(e,!0);const r=Se(e,"color",3,"currentColor"),a=Se(e,"size",3,24),s=Se(e,"strokeWidth",3,2),i=Se(e,"absoluteStrokeWidth",3,!1),o=Se(e,"iconNode",19,()=>[]),l=be(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=Tc();zn(u,g=>({...Ac,...l,width:a(),height:a(),stroke:r(),"stroke-width":g,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>i()?Number(s())*24/Number(a()):s()]);var h=c(u);it(h,17,o,pr,(g,p)=>{var m=J(()=>ha(n(p),2));let _=()=>n(m)[0],S=()=>n(m)[1];var w=te(),P=R(w);bl(P,_,!0,(C,x)=>{zn(C,()=>({...S()}))}),f(g,w)});var v=d(h);ge(v,()=>e.children??fe),f(t,u),X()}function tn(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];we(t,ye({name:"archive"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Io(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]];we(t,ye({name:"badge-euro"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Mc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];we(t,ye({name:"bean"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Nc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];we(t,ye({name:"beef"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Dc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];we(t,ye({name:"candy-cane"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Cc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];we(t,ye({name:"carrot"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Dr(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20 6 9 17l-5-5"}]];we(t,ye({name:"check"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Ic(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];we(t,ye({name:"chef-hat"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Oo(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m6 9 6 6 6-6"}]];we(t,ye({name:"chevron-down"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Oc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];we(t,ye({name:"circle-alert"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Rc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];we(t,ye({name:"circle-arrow-down"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function qc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];we(t,ye({name:"circle-arrow-right"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function us(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];we(t,ye({name:"circle-check-big"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function jc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];we(t,ye({name:"circle-check"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Lc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];we(t,ye({name:"circle-x"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Bc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];we(t,ye({name:"clipboard-check"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function zc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]];we(t,ye({name:"clipboard-pen-line"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Uc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];we(t,ye({name:"clock"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Hc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];we(t,ye({name:"cloud"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function $n(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];we(t,ye({name:"cooking-pot"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Qc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];we(t,ye({name:"egg"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Ro(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];we(t,ye({name:"euro"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function ca(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];we(t,ye({name:"funnel-x"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function qo(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];we(t,ye({name:"funnel"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function jo(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];we(t,ye({name:"history"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Wc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];we(t,ye({name:"info"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Gc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];we(t,ye({name:"layout-list"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Vc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];we(t,ye({name:"leaf"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Kc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];we(t,ye({name:"list-todo"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Lo(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];we(t,ye({name:"loader-circle"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Jc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];we(t,ye({name:"lock"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Yc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];we(t,ye({name:"log-in"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Fc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];we(t,ye({name:"message-circle-more"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Zc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];we(t,ye({name:"message-circle-question-mark"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Bo(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];we(t,ye({name:"moon"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Xc(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];we(t,ye({name:"package-check"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function eu(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];we(t,ye({name:"package-plus"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function ra(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];we(t,ye({name:"package"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function tu(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];we(t,ye({name:"pen-line"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function ru(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];we(t,ye({name:"pencil-line"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function kn(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];we(t,ye({name:"plus"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function au(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];we(t,ye({name:"refresh-cw"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function nu(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];we(t,ye({name:"refrigerator"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function su(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];we(t,ye({name:"save"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function ou(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];we(t,ye({name:"search"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function zo(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];we(t,ye({name:"shopping-basket"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function er(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];we(t,ye({name:"shopping-cart"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function En(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];we(t,ye({name:"snowflake"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function _a(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];we(t,ye({name:"square-pen"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Lt(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];we(t,ye({name:"store"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Uo(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];we(t,ye({name:"sun"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function iu(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];we(t,ye({name:"tag"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Ho(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];we(t,ye({name:"thermometer"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function aa(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];we(t,ye({name:"triangle-alert"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Qo(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];we(t,ye({name:"user-plus"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function qr(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];we(t,ye({name:"user"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function fa(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];we(t,ye({name:"users"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function lu(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];we(t,ye({name:"utensils"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function Ct(t,e){Z(e,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=be(e,["$$slots","$$events","$$legacy"]);const a=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];we(t,ye({name:"x"},()=>r,{get iconNode(){return a},children:(s,i)=>{var o=te(),l=R(o);ge(l,()=>e.children??fe),f(s,o)},$$slots:{default:!0}})),X()}function cu(t,e){const r=t.reduce((s,i)=>{const o=i.isSynced?0:1,l=i.missingQuantities.length;return s+o+l},0),a=e.invoiceTotal?1:0;return r+a}async function uu(t,e){const r=t.filter(u=>!u.isSynced).map(u=>({productId:u.productId,productData:u.productData}));let a=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");a=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(u){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",u)}const s=e.purchaseStatus||"delivered";let i=e.purchaseDeliveryDate||null;s==="delivered"&&!i&&(i=new Date().toISOString());const o=t.flatMap(u=>u.missingQuantities.map(h=>({productId:u.productId,quantity:h.q,unit:h.u,status:s,notes:e.notes||"",store:e.store||"",who:e.who||void 0,price:void 0,orderDate:null,deliveryDate:i,createdBy:a})));return{mainId:t[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:o},invoiceData:e}}async function du(t,e,r){if(!e?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};e.forEach(p=>{p.productData&&(p.productData.mainId=t)});const a=cu(e,r);console.log(`[Appwrite Interactions] Achat groupé: ${e.length} produits, ${a} opérations totales`);const s=100,i=[];if(a<=s)i.push(e);else{let p=[],m=0;for(const _ of e){const S=(_.isSynced?0:1)+_.missingQuantities.length;m+S>s?(p.length>0&&i.push(p),p=[_],m=S):(p.push(_),m+=S)}p.length>0&&i.push(p)}console.log(`[Appwrite Interactions] Découpage en ${i.length} lots pour respecter la limite de 100 opérations`);const o=[];let l=0,u=0,h=0;for(let p=0;p<i.length;p++){const m=i[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${i.length} (${m.length} produits)`);try{const _=await uu(m,r),S=await vu(_);if(o.push(S),S.success)l+=S.productsCreated,u+=S.purchasesCreated,h+=S.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${S.error}`);break}}catch(_){const S=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,_),o.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:S,timestamp:new Date().toISOString()});break}}const v=o.every(p=>p.success),g=o.some(p=>!p.success);return{success:v,results:o,totalProductsCreated:l,totalPurchasesCreated:u,totalExpensesCreated:h,error:g?"Un ou plusieurs lots ont échoué":void 0}}async function vu(t){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),a={operation:"createGroupPurchaseWithSync",data:t};console.log(`[Appwrite Interactions] Exécution du lot: ${t.batchData.productsToCreate.length} produits à créer, ${t.batchData.purchasesToCreate.length} achats à créer`);const s=await e.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(a),!1,"/","POST");if(s.status!=="completed")throw new Error(`Exécution échouée avec statut: ${s.status}. Erreur: ${s.stderr}`);const i=JSON.parse(s.responseBody);return i.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${i.productsCreated} produits créés, ${i.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",i.error),i}catch(e){console.error("[Appwrite Interactions] Erreur exécution lot:",e);const r=e instanceof Error?e.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:t.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var fu=(t,e,r)=>e(n(r).id),hu=y("<span> </span>"),pu=y('<button><!> <span class="max-w-32 truncate"> </span> <!> <!></button>'),gu=y('<span class="flex items-center gap-1"><!> </span>'),mu=y('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),_u=y('<div class="flex flex-wrap gap-2"></div> <!>',1);function Yr(t,e){Z(e,!0);let r=Se(e,"badgeSize",3,"btn-lg"),a=Se(e,"color",3,"primary"),s=Se(e,"badgeStyle",3,""),i=Se(e,"onToggleItem",3,()=>{}),o=Se(e,"showStats",3,!1),l=Se(e,"showIcon",3,!0),u=H(Be({}));It(()=>{const w={};e.items.forEach(P=>{w[P.id]=P.selected??!0}),b(u,w,!0)});function h(w){n(u)[w]=!n(u)[w],i()(w)}const v=J(()=>Object.values(n(u)).filter(Boolean).length),g=J(()=>Object.values(n(u)).filter(w=>!w).length);var p=_u(),m=R(p);it(m,21,()=>e.items,w=>w.id,(w,P)=>{const C=J(()=>n(u)[n(P).id]);var x=pu();x.__click=[fu,h,P];var T=c(x);{var $=Y=>{var le=te(),z=R(le);dr(z,()=>n(P).icon,(j,q)=>{q(j,{class:"h-3 w-3",get title(){return n(P).title}})}),f(Y,le)};E(T,Y=>{n(P).icon&&Y($)})}var M=d(T,2),k=c(M),N=d(M,2);{var D=Y=>{var le=hu(),z=c(le);O(()=>{Ie(le,1,`badge badge-sm badge-${a()??""}`),I(z,n(P).badge)}),f(Y,le)};E(N,Y=>{n(P).badge&&Y(D)})}var W=d(N,2);{var Q=Y=>{var le=te(),z=R(le);{var j=ee=>{Dr(ee,{size:16})},q=ee=>{kn(ee,{size:16})};E(z,ee=>{n(C)?ee(j):ee(q,!1)})}f(Y,le)};E(W,Y=>{l()&&Y(Q)})}O(()=>{Ie(x,1,`btn ${r()??""} btn-${a()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${n(C)?`${s()} hover:line-through `:"btn-dash hover:border-solid "}`),ar(x,"title",n(C)?"Retirer de la liste":"Réajouter à la liste"),I(k,n(P).label)}),f(w,x)});var _=d(m,2);{var S=w=>{var P=mu(),C=c(P),x=c(C),T=c(x);Dr(T,{class:"text-success h-3 w-3"});var $=d(T),M=d(x,2);{var k=W=>{var Q=gu(),Y=c(Q);Ct(Y,{class:"text-error h-3 w-3"});var le=d(Y);O(()=>I(le,` ${n(g)??""} retirés`)),f(W,Q)};E(M,W=>{n(g)>0&&W(k)})}var N=d(C,2),D=c(N);O(()=>{I($,` ${n(v)??""} actifs`),I(D,`Total: ${e.items.length??""} items`)}),f(w,P)};E(_,w=>{o()&&w(S)})}f(t,p),X()}et(["click"]);function bu(t,e){b(e,!n(e))}var yu=y('<span class="text-base-content font-semibold"> </span>'),wu=y('<div class="text-base-content/80 flex-1"> </div>'),xu=y('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Su=y('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Pu=y('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Wo(t,e){let r=Se(e,"icon",3,Wc),a=Se(e,"class",3,""),s=Se(e,"initiallyOpen",3,!1),i=r(),o=H(Be(s())),l=Be(e.children);var u=Pu(),h=c(u);h.__click=[bu,o];var v=c(h),g=c(v);i(g,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(g,2);{var m=T=>{var $=yu(),M=c($);O(()=>I(M,e.title)),f(T,$)};E(p,T=>{e.title&&T(m)})}var _=d(v,2);{var S=T=>{var $=wu(),M=c($);O(()=>I(M,e.contentVisible)),f(T,$)};E(_,T=>{e.contentVisible&&T(S)})}var w=d(_,2);{var P=T=>{var $=xu(),M=c($),k=c(M);{var N=Q=>{var Y=Pt("en savoir plus");f(Q,Y)},D=Q=>{var Y=Pt("masquer");f(Q,Y)};E(k,Q=>{n(o)?Q(D,!1):Q(N)})}var W=d(M,2);{let Q=J(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${n(o)?"rotate-180":""}`);Oo(W,{get class(){return n(Q)}})}f(T,$)};E(w,T=>{l&&T(P)})}var C=d(h,2);{var x=T=>{var $=Su(),M=c($),k=c(M);ge(k,()=>e.children??fe),O(()=>Ie($,1,`overflow-hidden transition-all duration-200 ${n(o)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),f(T,$)};E(C,T=>{l&&T(x)})}O(()=>{Ie(u,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${a()}`),eo(u,e.style),Ie(h,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),ar(h,"aria-expanded",n(o))}),f(t,u)}et(["click"]);var $u=y('<div class="mb-1 text-xs opacity-70"> </div>'),ku=(t,e,r)=>e(n(r)),Eu=y("<button><!> </button>"),Au=y('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function tr(t,e){Z(e,!0);let r=Se(e,"maxSuggestions",3,8),a=Se(e,"title",3,"Suggestions :"),s=Se(e,"buttonSize",3,"btn-xs"),i=Se(e,"buttonVariant",3,"btn-soft"),o=Se(e,"disabled",3,!1);const l=J(()=>e.suggestions.slice(0,r()));function u(p){!o()&&!p.disabled&&e.onSuggestionClick(p)}var h=te(),v=R(h);{var g=p=>{var m=Au(),_=c(m);{var S=P=>{var C=$u(),x=c(C);O(()=>I(x,a())),f(P,C)};E(_,P=>{a()&&P(S)})}var w=d(_,2);it(w,21,()=>n(l),P=>P.id,(P,C)=>{var x=Eu();x.__click=[ku,u,C];var T=c(x);{var $=k=>{var N=te(),D=R(N);dr(D,()=>n(C).icon,(W,Q)=>{Q(W,{class:"h-3 w-3"})}),f(k,N)};E(T,k=>{n(C).icon&&k($)})}var M=d(T);O(()=>{Ie(x,1,`btn ${s()??""} ${i()??""}`),x.disabled=o()||n(C).disabled,ar(x,"title",n(C).disabled?"Déjà sélectionné":n(C).label),I(M,` ${n(C).label??""}`)}),f(P,x)}),f(p,m)};E(v,p=>{n(l).length>0&&p(g)})}f(t,h),X()}et(["click"]);async function Tu(t,e,r,a,s,i,o,l){if(!(!n(e)||n(r))){b(r,!0),b(a,null),b(s,null);try{const u=`FACTURE_${Date.now()}`,h=n(i).map(m=>m.$id);F.setSyncStatus(h,!0);const v=[];for(const m of n(i)){const S=(F.getProductModelById(m.$id)?.stats.missingQuantities||[]).filter(w=>w.q<0).map(w=>({...w,q:Math.abs(w.q)}));v.push({productId:m.$id,isSynced:m.isSynced,productData:m,missingQuantities:S})}const g={invoiceId:u,invoiceTotal:o.expense||void 0,store:o.store.trim()||void 0,notes:o.notes||`Achat groupé pour ${n(i).length} produits`,who:o.who.trim()||void 0,purchaseStatus:o.status||"delivered",purchaseDeliveryDate:o.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${v.length} produits...`),l.onClose();const p=await du(F.currentMainId,v,g);if(p.success)b(s,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(u){const h=u instanceof Error?u.message:"Erreur inconnue";b(a,h,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",u),F.clearSyncStatus()}finally{b(r,!1)}}}function ds(t,e,r){n(e)||r.onClose()}var Mu=y('<div class="alert alert-error"><!> <span> </span></div>'),Nu=y('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),Du=y(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes <strong>pour la période sélectionnée</strong>, c'est à dire le besoin total pour chaque produit sur cette
            période moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),Cu=y("<option> </option>"),Iu=y('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),Ou=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Ru=y("<!> ",1),qu=y(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div class="space-y-2"><label class="input"><!> <input type="text" placeholder="Qui" maxlength="25"/></label> <!></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div><textarea class="textarea w-full text-sm" placeholder="Commentaire (optionnel)" rows="2" maxlength="250"></textarea></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function ju(t,e){Z(e,!0);let r=H(!1),a=H(null),s=H(null),i=Be({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),o=H(Be(new Set));It(()=>{b(o,new Set(e.products.map(V=>V.$id)),!0)});const l=J(()=>e.products.filter(V=>n(o).has(V.$id))),u=J(()=>n(l).length!==0),h=J(()=>{const V=F.dateRange;let _e="";return V?.start&&V?.end&&(V.start===V.end?_e=` - ${Vr(V.start)}`:_e=` - Du ${Vr(V.start)} au ${Vr(V.end)}`),`Achat groupé (${n(l).length} produits sélectionnés)${_e}`});function v(V){const _e=new Set(n(o));_e.has(V)?_e.delete(V):_e.add(V),b(o,_e,!0)}const g=J(()=>e.products.map(V=>{const _e=F.getProductModelById(V.$id);return{id:V.$id,label:V.productName,title:`${V.productName} - Manque: ${_e?.stats.formattedMissingQuantities||"-"}`,badge:_e?.stats.formattedMissingQuantities||"-"}}));var p=qu(),m=c(p),_=c(m),S=c(_),w=c(S);er(w,{class:"h-5 w-5"});var P=d(w),C=d(S,2);C.__click=[ds,r,e];var x=c(C);Ct(x,{class:"h-4 w-4"});var T=d(_,2),$=c(T);{var M=V=>{var _e=Mu(),oe=c(_e);aa(oe,{class:"h-4 w-4"});var ve=d(oe,2),Ne=c(ve);O(()=>I(Ne,n(a))),f(V,_e)};E($,V=>{n(a)&&V(M)})}var k=d($,2);{var N=V=>{var _e=Nu(),oe=c(_e);Dr(oe,{class:"h-4 w-4"});var ve=d(oe,2),Ne=c(ve),je=d(Ne);{var Te=rt=>{var Fe=Pt("+ 1 dépense globale");f(rt,Fe)};E(je,rt=>{n(s).expense&&rt(Te)})}var Ke=d(je,2);{var lt=rt=>{var Fe=Pt();O(()=>I(Fe,`(traité en ${n(s).batches??""} lots)`)),f(rt,Fe)};E(Ke,rt=>{n(s).batches&&n(s).batches>1&&rt(lt)})}O(()=>I(Ne,`Achat groupé créé avec succès ! ${n(s).purchases??""} produit(s) validés `)),f(V,_e)};E(k,V=>{n(s)&&V(N)})}var D=d(k,2),W=c(D);Wo(W,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit sur la période sélectionnée.",class:"bg-base-200",children:(V,_e)=>{var oe=Du();f(V,oe)},$$slots:{default:!0}});var Q=d(D,2),Y=d(c(Q),2),le=c(Y),z=c(le),j=c(z);Lt(j,{class:"h-4 w-4 opacity-50"});var q=d(j,2),ee=d(z,2);it(ee,21,()=>F.uniqueStores,pr,(V,_e)=>{var oe=Cu(),ve=c(oe),Ne={};O(()=>{I(ve,n(_e)),Ne!==(Ne=n(_e))&&(oe.value=(oe.__value=n(_e))??"")}),f(V,oe)});var U=d(le,2),G=c(U),se=c(G);qr(se,{class:"h-4 w-4 opacity-50"});var xe=d(se,2),me=d(G,2);{let V=J(()=>F.uniqueWho.map(_e=>({id:_e,label:_e})));tr(me,{get suggestions(){return n(V)},onSuggestionClick:_e=>i.who=_e.label,buttonVariant:"btn-outline",buttonSize:"btn-xs"})}var re=d(U,2),ne=c(re),ce=c(ne);Ro(ce,{class:"h-4 w-4 opacity-50"});var Pe=d(ce,2),A=d(Y,2),ie=c(A),L=c(ie),ae=c(L);ae.value=ae.__value="delivered";var $e=d(ae);$e.value=$e.__value="ordered";var Ae=d(L,2),Me=d(ie,2);{var ue=V=>{var _e=Iu(),oe=c(_e),ve=d(c(oe),2);O(()=>ve.disabled=n(r)),De(ve,()=>i.deliveryDate,Ne=>i.deliveryDate=Ne),f(V,_e)};E(Me,V=>{i.status==="ordered"&&V(ue)})}var ke=d(A,2),Ce=c(ke),Re=d(Q,2),Xe=d(c(Re),2);Yr(Xe,{get items(){return n(g)},onToggleItem:v,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var Ye=d(Re,2),de=c(Ye);de.__click=[ds,r,e];var Ee=d(de,2);Ee.__click=[Tu,u,r,a,s,l,i,e];var Ge=c(Ee);{var tt=V=>{var _e=Ou();f(V,_e)},Ze=V=>{var _e=Ru(),oe=R(_e);er(oe,{class:"h-4 w-4"});var ve=d(oe);O(()=>I(ve,` Valider ${n(l).length??""} produit(s)`)),f(V,_e)};E(Ge,V=>{n(r)?V(tt):V(Ze,!1)})}O(()=>{I(P,` ${n(h)??""}`),C.disabled=n(r),q.disabled=n(r),xe.disabled=n(r),Pe.disabled=n(r),L.disabled=n(r),Ie(Ae,1,`label text-sm ${i.status==="delivered"?"":"hidden"}`),Ce.disabled=n(r),de.disabled=n(r),Ee.disabled=n(r)||!n(u)}),De(q,()=>i.store,V=>i.store=V),De(xe,()=>i.who,V=>i.who=V),De(Pe,()=>i.expense,V=>i.expense=V),vr(L,()=>i.status,V=>i.status=V),De(Ce,()=>i.notes,V=>i.notes=V),f(t,p),X()}et(["click"]);function Qa(t,e,r,a){e(!1),b(r,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0),b(a,null)}var Lu=y('<div class="alert alert-error text-sm"><!> <span> </span></div>'),Bu=(t,e)=>e(!0),zu=y('<span class="loading loading-spinner"></span>'),Uu=y('<span class="loading loading-spinner"></span>'),Hu=y(`<div role="dialog"><div class="modal-box relative w-10/12 max-w-5xl "><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" aria-label="Fermer"><!></button> <h3 class="text-lg font-bold">Ajouter un produit</h3> <form class="mt-6 space-y-4"><!> <fieldset class="space-y-4"><fieldset class="fieldset"><legend class="fieldset-legend">Nom du produit</legend> <div class="flex items-center gap-2"><!> <input id="product-name" type="text" placeholder="Ex: Farine, Tomates..." class="input input-bordered max-w-80"/></div></fieldset> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><fieldset class="fieldset"><legend class="fieldset-legend">Quantité (optionnel)</legend> <input id="quantity" type="number" step="1" min="0.01" placeholder="Ex: 1, 500..." class="input input-bordered w-full"/></fieldset> <fieldset class="fieldset"><legend class="fieldset-legend">Unité</legend> <input id="unit" type="text" placeholder="Ex: kg, g, L, pièces..." class="input input-bordered w-full" list="units-list"/> <datalist id="units-list"><option></option><option></option><option></option><option></option><option></option><option></option></datalist></fieldset></div> <fieldset class="fieldset"><legend class="fieldset-legend">Type de produit</legend> <div class="flex flex-col gap-2"><div class="flex items-center gap-2"><!> <input id="product-type" type="text" placeholder="Ex: Légumes, Épicerie..." class="input input-bordered w-full"/></div> <!></div></fieldset> <fieldset class="fieldset"><legend class="fieldset-legend">Magasin</legend> <div class="flex flex-col gap-2"><div class="flex items-center gap-2"><!> <input id="store" type="text" placeholder="Ex: Super U, Marché..." class="input input-bordered w-full"/></div> <!></div></fieldset> <fieldset class="fieldset"><legend class="fieldset-legend">Qui s'en occupe ?</legend> <div class="flex flex-col gap-2"><div class="flex items-center gap-2"><!> <input id="who" type="text" placeholder="Ex: Jean, Marie..." class="input input-bordered w-full"/></div> <!></div></fieldset> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-success"/> <span class="label-text flex items-center gap-2"><!> Produit frais</span></label></fieldset> <fieldset class="fieldset"><label class="label cursor-pointer justify-start gap-4"><input type="checkbox" class="checkbox checkbox-info"/> <span class="label-text flex items-center gap-2"><!> Produit surgelé</span></label></fieldset></fieldset> <div class="modal-action flex justify-between"><button type="button" class="btn btn-ghost">Annuler</button> <div class="flex gap-2"><button type="button" class="btn btn-secondary"><!> Ajouter et créer un nouveau</button> <button type="submit" class="btn btn-primary"><!> Ajouter et fermer</button></div></div></form></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></div>`);function Qu(t,e){Z(e,!0);let r=Se(e,"open",15,!1),a=H(!1),s=H(null),i=H(!1),o=H(Be({productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""}));const l=J(()=>n(o).productName.trim().length>0&&n(o).productType.trim().length>0),u=J(()=>F.uniqueProductTypes.map(K=>({id:K,label:K}))),h=J(()=>F.uniqueStores.map(K=>({id:K,label:K}))),v=J(()=>F.uniqueWho.map(K=>({id:K,label:K})));async function g(K=!1){if(!(!n(l)||n(a))){b(a,!0),b(s,null),b(i,!1);try{if(!F.currentMainId)throw new Error("Aucun événement principal sélectionné");const Oe={productName:n(o).productName.trim(),productType:n(o).productType.trim(),store:n(o).store.trim()?{storeName:n(o).store.trim()}:void 0,who:n(o).who.trim()?[n(o).who.trim()]:void 0,pFrais:n(o).pFrais,pSurgel:n(o).pSurgel,quantity:n(o).quantity?{q:n(o).quantity,u:n(o).unit.trim()||"pièces"}:void 0};await _o(Oe,F.currentMainId),b(i,!0),K?(n(o).productName="",n(o).quantity=void 0,n(o).unit="",n(o).pFrais=!1,n(o).pSurgel=!1,setTimeout(()=>{document.getElementById("product-name")?.focus()},100)):(r(!1),b(o,{productName:"",productType:"",store:"",who:"",pFrais:!1,pSurgel:!1,quantity:void 0,unit:""},!0))}catch(Oe){console.error("Error creating product:",Oe),b(s,"Erreur lors de la création du produit. Veuillez réessayer.")}finally{b(a,!1)}}}It(()=>{r()&&setTimeout(()=>{document.getElementById("product-name")?.focus()},50)});var p=Hu();let m;var _=c(p),S=c(_);S.__click=[Qa,r,o,s];var w=c(S);Ct(w,{size:20});var P=d(S,4),C=c(P);{var x=K=>{var Oe=Lu(),ze=c(Oe);aa(ze,{size:18});var Ve=d(ze,2),Qe=c(Ve);O(()=>I(Qe,n(s))),f(K,Oe)};E(C,K=>{n(s)&&K(x)})}var T=d(C,2),$=c(T),M=d(c($),2),k=c(M);eu(k,{class:"text-base-content/50 h-5 w-5"});var N=d(k,2),D=d($,2),W=c(D),Q=d(c(W),2),Y=d(W,2),le=d(c(Y),2),z=d(le,2),j=c(z);j.value=j.__value="kg";var q=d(j);q.value=q.__value="gr.";var ee=d(q);ee.value=ee.__value="l.";var U=d(ee);U.value=U.__value="ml";var G=d(U);G.value=G.__value="unité";var se=d(G);se.value=se.__value="bottes";var xe=d(D,2),me=d(c(xe),2),re=c(me),ne=c(re);iu(ne,{class:"text-base-content/50 h-5 w-5"});var ce=d(ne,2),Pe=d(re,2);tr(Pe,{get suggestions(){return n(u)},onSuggestionClick:K=>n(o).productType=K.label,get disabled(){return n(a)}});var A=d(xe,2),ie=d(c(A),2),L=c(ie),ae=c(L);Lt(ae,{class:"text-base-content/50 h-5 w-5"});var $e=d(ae,2),Ae=d(L,2);tr(Ae,{get suggestions(){return n(h)},onSuggestionClick:K=>n(o).store=K.label,get disabled(){return n(a)}});var Me=d(A,2),ue=d(c(Me),2),ke=c(ue),Ce=c(ke);qr(Ce,{class:"text-base-content/50 h-5 w-5"});var Re=d(Ce,2),Xe=d(ke,2);tr(Xe,{get suggestions(){return n(v)},onSuggestionClick:K=>n(o).who=K.label,get disabled(){return n(a)}});var Ye=d(Me,2),de=c(Ye),Ee=c(de),Ge=d(Ee,2),tt=c(Ge);Ho(tt,{class:"h-4 w-4"});var Ze=d(Ye,2),V=c(Ze),_e=c(V),oe=d(_e,2),ve=c(oe);En(ve,{class:"h-4 w-4"});var Ne=d(T,2),je=c(Ne);je.__click=[Qa,r,o,s];var Te=d(je,2),Ke=c(Te);Ke.__click=[Bu,g];var lt=c(Ke);{var rt=K=>{var Oe=zu();f(K,Oe)},Fe=K=>{kn(K,{size:18})};E(lt,K=>{n(a)?K(rt):K(Fe,!1)})}var ct=d(Ke,2),mt=c(ct);{var Ot=K=>{var Oe=Uu();f(K,Oe)};E(mt,K=>{n(a)&&K(Ot)})}var pe=d(_,2),he=c(pe);he.__click=[Qa,r,o,s],O(K=>{m=Ie(p,1,"modal",null,m,K),T.disabled=n(a),N.disabled=n(a),Q.disabled=n(a),le.disabled=n(a),ce.disabled=n(a),$e.disabled=n(a),Re.disabled=n(a),Ee.disabled=n(a),_e.disabled=n(a),je.disabled=n(a),Ke.disabled=n(a)||!n(o).productName,ct.disabled=n(a)||!n(o).productName},[()=>({"modal-open":r()})]),va("submit",P,K=>{K.preventDefault(),g(!1)}),De(N,()=>n(o).productName,K=>n(o).productName=K),De(Q,()=>n(o).quantity,K=>n(o).quantity=K),De(le,()=>n(o).unit,K=>n(o).unit=K),De(ce,()=>n(o).productType,K=>n(o).productType=K),De($e,()=>n(o).store,K=>n(o).store=K),De(Re,()=>n(o).who,K=>n(o).who=K),Za(Ee,()=>n(o).pFrais,K=>n(o).pFrais=K),Za(_e,()=>n(o).pSurgel,K=>n(o).pSurgel=K),f(t,p),X()}et(["click"]);function rn(t){switch(t.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Mc};case"animaux":return{displayName:"Viandes et Poissons",icon:Nc};case"legumes":return{displayName:"Fruits et Légumes",icon:Cc};case"sucres":return{displayName:"Sucrées",icon:Dc};case"lof":return{displayName:"L.O.F",icon:Qc};case"autres":return{displayName:"Autres",icon:Ic};case"epices":return{displayName:"Assaisonnements",icon:Vc};case"frais":return{displayName:"Produits Frais",icon:nu};default:return{displayName:t,icon:ra}}}function an(t,e){return e==="kg"?{quantity:t*1e3,unit:"gr."}:e==="l."?{quantity:t*1e3,unit:"ml"}:{quantity:t,unit:e}}function An(t,e){let r,a;if(e==="gr."&&t>=1e3){const s=t/1e3;r=Wa(s),a="kg"}else if(e==="ml"&&t>=1e3){const s=t/1e3;r=Wa(s),a="l"}else r=Wa(t),a=e;return`${r} ${a}`}function Wa(t){return(Math.round(t*10)/10).toString().replace(/\.0$/,"")}function Ia(t){if(!t)return"-";try{return new Date(t).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t}}function Wu(t){if(!t)return"";try{return new Date(t).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short"})}catch{return t}}function nn(t){switch(t){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function vs(t){return t?Ia(t):"-"}function Gu(t){if(!t?.length)return[];const e=t.reduce((r,a)=>{const s=a.status||"direct",i=a.unit||"unit",o=`${s}_${i}`;if(!r[o]){const l=nn(s);r[o]={status:s,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Vu(s),deliveryDate:s==="ordered"&&a.deliveryDate?Wu(a.deliveryDate):void 0}}return r[o].quantity+=a.quantity||0,r},{});return Object.values(e).map(r=>({...r,quantity:An(r.quantity,r.unit).replace(` ${r.unit}`,"")}))}function Vu(t){switch(t){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"Check";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function Ku(t){let e=H(!1),r=H(null);const a=J(()=>(console.log(`[ProductModalState] Recalculating product ${t}`),F.getEnrichedProductById(t))),s=J(()=>n(a)?.who??[]),i=J(()=>n(a)?.stockParsed??null),o=J(()=>n(a)?.purchases??[]),l=J(()=>n(a)?.byDate?io(n(a).byDate):[]),u=Be({purchase:{quantity:null,unit:"",store:"",who:Nr.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let h=H(!1),v=H(null);It(()=>{!n(a)||n(h)||(u.purchase.quantity=n(a).missingQuantityArray[0]?.q??null,u.purchase.unit=n(a).totalNeededArray[0]?.u??"",u.purchase.store=n(a).storeInfo?.storeName??"",u.purchase.who=Nr.userName()??"",u.purchase.status=u.purchase.status||"delivered",u.stock.unit=n(a).totalNeededArray[0]?.u??"",u.store.name=n(a).storeInfo?.storeName??"",u.store.comment=n(a).storeInfo?.storeComment??null,u.who=n(a)?.who?[...n(a).who]:[],b(v,{purchase:{...u.purchase},stock:{...u.stock},store:{...u.store},whoList:[...u.who]},!0),b(h,!0))});const g=J(()=>n(v)?{store:JSON.stringify(u.store)!==JSON.stringify(n(v).store),stock:p(),who:JSON.stringify(u.who)!==JSON.stringify(n(v).whoList)}:{store:!1,stock:!1,who:!1});function p(){return u.stock.quantity&&u.stock.quantity>0&&u.stock.unit?n(i)?u.stock.quantity.toString()!==n(i).quantity||u.stock.unit!==n(i).unit||(u.stock.notes||"")!==(n(i).notes||""):!0:!1}const m=J(()=>!!(n(v)&&(n(g).store||n(g).stock||n(g).who)));let _=H(null);const S=J(()=>n(_)?n(o).find(z=>z.$id===n(_))??null:null);async function w(z,j){b(e,!0),b(r,null);try{const q=await z();return j&&P("success",j),q}catch(q){const ee=q instanceof Error?q.message:"Une erreur est survenue";return b(r,ee,!0),P("error",ee),console.error("[ProductModalState]",q),null}finally{b(e,!1)}}function P(z,j){const q=new CustomEvent("toast",{detail:{type:z,message:j}});window.dispatchEvent(q)}async function C(){n(a)&&await w(async()=>{if(!u.purchase.quantity||!u.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!F.currentMainId)throw new Error("mainId non disponible");const{quantity:z,unit:j}=an(u.purchase.quantity,u.purchase.unit);n(a).isSynced||(console.log(`[ProductModalState] Produit ${n(a).$id} local, création pour purchase...`),await Ut(n(a).$id,{},U=>F.getEnrichedProductById(U)));const q=u.purchase.status||"delivered";let ee=u.purchase.deliveryDate||null;q==="delivered"&&!ee&&(ee=new Date().toISOString()),await So({products:[n(a).$id],mainId:F.currentMainId,unit:j,quantity:z,store:u.purchase.store||null,who:u.purchase.who||null,notes:u.purchase.notes||"",price:u.purchase.price||null,status:q,orderDate:u.purchase.orderDate||null,deliveryDate:ee}),u.purchase={quantity:n(a).missingQuantityArray[0]?.q??null,unit:n(a).totalNeededArray[0]?.u??"",store:u.purchase.store,who:u.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function x(z){b(_,z.$id,!0)}function T(){b(_,null)}async function $(z){z.$id&&await w(async()=>{const{quantity:j,unit:q}=an(z.quantity,z.unit),ee=z.status||null;let U=z.deliveryDate||null;ee==="delivered"&&!U&&(U=new Date().toISOString()),await Sn(z.$id,{unit:q,quantity:j,store:z.store||null,who:z.who||null,notes:z.notes||"",price:z.price||null,status:ee,orderDate:z.orderDate||null,deliveryDate:U}),b(_,null)},"Achat modifié avec succès")}async function M(z){const j=n(o).find(q=>q.$id===z);j&&confirm(`Supprimer cet achat (${j.quantity} ${j.unit}) ?`)&&await w(async()=>{await Po(z)},"Achat supprimé avec succès")}async function k(){n(a)&&await w(async()=>{if(!u.stock.quantity||!u.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const z={quantity:u.stock.quantity.toString(),unit:u.stock.unit,notes:u.stock.notes,dateTime:u.stock.dateTime};n(a).isSynced?(console.log(`[ProductModalState] Produit ${n(a).$id} déjà sync, update stock normal...`),await en(n(a).$id,JSON.stringify(z))):(console.log(`[ProductModalState] Produit ${n(a).$id} local, création stock avec upsert...`),await Ut(n(a).$id,{stockReel:JSON.stringify(z)},j=>F.getEnrichedProductById(j))),u.stock.quantity=null,u.stock.notes="",u.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function N(){n(a)&&confirm("Supprimer le stock actuel ?")&&await w(async()=>{n(a).isSynced?(console.log(`[ProductModalState] Produit ${n(a).$id} déjà sync, suppression stock normal...`),await en(n(a).$id,null)):(console.log(`[ProductModalState] Produit ${n(a).$id} local, suppression stock avec upsert...`),await Ut(n(a).$id,{stockReel:null},z=>F.getEnrichedProductById(z)))},"Stock supprimé")}async function D(z){n(a)&&await w(async()=>{n(a).isSynced?(console.log(`[ProductModalState] Produit ${n(a).$id} déjà sync, setWho normal...`),await yo(n(a).$id,z)):(console.log(`[ProductModalState] Produit ${n(a).$id} local, création who avec upsert...`),await Ut(n(a).$id,{who:z},j=>F.getEnrichedProductById(j)))},"Volontaires mis à jour")}async function W(z){n(a)&&await w(async()=>{n(a).isSynced?(console.log(`[ProductModalState] Produit ${n(a).$id} déjà sync, update store normal...`),await bo(n(a).$id,z)):(console.log(`[ProductModalState] Produit ${n(a).$id} local, création store avec upsert...`),await Ut(n(a).$id,{store:JSON.stringify(z)},j=>F.getEnrichedProductById(j)))},"Magasin mis à jour")}async function Q(z){n(a)&&await w(async()=>{n(a).isSynced?await xn(n(a).$id,z,!0):(console.log(`[ProductModalState] Produit ${n(a).$id} local, création who avec upsert...`),await Ut(n(a).$id,{totalNeededOverride:JSON.stringify(z)},j=>F.getEnrichedProductById(j)))},"Override appliqué")}async function Y(){n(a)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await w(async()=>{await wo(n(a).$id,!0)},"Override supprimé")}async function le(){!n(a)||!n(m)||await w(async()=>{const z={};if(n(g).stock&&u.stock.quantity&&u.stock.unit){const j={quantity:u.stock.quantity.toString(),unit:u.stock.unit,notes:u.stock.notes,dateTime:u.stock.dateTime};z.stockReel=JSON.stringify(j)}if(n(g).who&&(z.who=u.who),n(g).store){const j={storeName:u.store.name||"",storeComment:u.store.comment||void 0};z.storeInfo=j}Object.keys(z).length>0&&(await xo(n(a).$id,z,j=>F.getEnrichedProductById(j)),b(v,{purchase:{...u.purchase},stock:{...u.stock},store:{...u.store},whoList:[...u.who]},!0))},"Modifications enregistrées")}return{get loading(){return n(e)},get error(){return n(r)},get product(){return n(a)},get recipes(){return n(l)},get whoList(){return n(s)},get stockParsed(){return n(i)},get purchasesList(){return n(o)},get editingPurchaseId(){return n(_)},get editingPurchaseData(){return n(S)},forms:u,addPurchase:C,startEditPurchase:x,cancelEditPurchase:T,updateEditedPurchase:$,removePurchase:M,setStock:k,removeStock:N,setWho:D,updateStore:W,setOverride:Q,removeOverride:Y,saveAllChanges:le,get hasChanges(){return n(g)},get hasAnyChanges(){return n(m)},formatQuantity:An,formatDate:Ia}}var Ju=y('<div class="text-xs font-medium text-base-content/60 mb-1"> </div>'),Yu=y('<div class="text-xs text-base-content/60 mt-1"> </div>'),Fu=y('<div class="font-medium"> </div> <!>',1),Zu=y('<pre class="text-xs"> </pre>'),Xu=y('<span class="text-base-content/50 italic">Non défini</span>'),ed=y('<div class="bg-base-300/50 rounded p-2 text-left"><!> <div class="text-sm"><!></div></div>'),td=y('<div class="bg-base-200/50 border border-warning/20 rounded-lg p-4 text-center"><div class="flex items-center justify-center gap-2 mb-2"><!> <!> <span class="font-medium text-warning"> </span></div> <p class="text-sm text-base-content/70 mb-3"> </p> <!></div>');function Oa(t,e){Z(e,!0);let r=Se(e,"title",3,"Événement terminé"),a=Se(e,"message",3,"Cet événement est terminé. Ces données ne sont plus modifiables mais sont conservées pour consultation."),s=Se(e,"showData",3,!0),i=Se(e,"data",3,null),o=Se(e,"dataLabel",3,"");var l=td(),u=c(l),h=c(u);jo(h,{class:"h-5 w-5 text-warning"});var v=d(h,2);Jc(v,{class:"h-4 w-4 text-warning/70"});var g=d(v,2),p=c(g),m=d(u,2),_=c(m),S=d(m,2);{var w=P=>{var C=ed(),x=c(C);{var T=D=>{var W=Ju(),Q=c(W);O(()=>I(Q,`${o()??""} :`)),f(D,W)};E(x,D=>{o()&&D(T)})}var $=d(x,2),M=c($);{var k=D=>{var W=Pt();O(()=>I(W,i())),f(D,W)},N=D=>{var W=te(),Q=R(W);{var Y=z=>{var j=Pt();O(q=>I(j,q),[()=>i().join(", ")]),f(z,j)},le=z=>{var j=te(),q=R(j);{var ee=G=>{var se=te(),xe=R(se);{var me=ne=>{var ce=Fu(),Pe=R(ce),A=c(Pe),ie=d(Pe,2);{var L=ae=>{var $e=Yu(),Ae=c($e);O(()=>I(Ae,i().storeComment)),f(ae,$e)};E(ie,ae=>{i().storeComment&&ae(L)})}O(()=>I(A,i().storeName)),f(ne,ce)},re=ne=>{var ce=Zu(),Pe=c(ce);O(A=>I(Pe,A),[()=>JSON.stringify(i(),null,2)]),f(ne,ce)};E(xe,ne=>{i().storeName?ne(me):ne(re,!1)})}f(G,se)},U=G=>{var se=Xu();f(G,se)};E(q,G=>{typeof i()=="object"&&i()!==null?G(ee):G(U,!1)},!0)}f(z,j)};E(Q,z=>{Array.isArray(i())&&i().length>0?z(Y):z(le,!1)},!0)}f(D,W)};E(M,D=>{typeof i()=="string"||typeof i()=="number"?D(k):D(N,!1)})}f(P,C)};E(S,P=>{s()&&i()&&P(w)})}O(()=>{I(p,r()),I(_,a())}),f(t,l),X()}const rd=[{value:"kg",label:"kg"},{value:"gr.",label:"gr."},{value:"l.",label:"l."},{value:"ml",label:"ml"},{value:"unité",label:"unité·s"},{value:"bottes",label:"botte·s"}];var ad=y("<option> </option>"),nd=y('<fieldset class="fieldset"><legend class="fieldset-legend">Quantité</legend> <div class="flex gap-2"><label class="input w-32"><!> <input type="number" step="1" min="0.01" placeholder="Quantité" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><!></select></div></fieldset>');function sd(t,e){Z(e,!0);let r=Se(e,"quantity",15),a=Se(e,"unit",15),s=Se(e,"disabled",3,!1);var i=nd(),o=d(c(i),2),l=c(o),u=c(l);ra(u,{class:"h-4 w-4 opacity-50"});var h=d(u,2),v=d(l,2),g=c(v);g.value=g.__value="";var p=d(g);it(p,17,()=>rd,pr,(m,_)=>{let S=()=>n(_).value,w=()=>n(_).label;var P=ad(),C=c(P),x={};O(()=>{I(C,w()),x!==(x=S())&&(P.value=(P.__value=S())??"")}),f(m,P)}),O(()=>{h.disabled=s(),v.disabled=s()}),De(h,r),vr(v,a),f(t,i),X()}var od=y('<div class="space-y-2"><label class="input"><!> <input type="text" placeholder="Magasin" maxlength="50"/></label> <!></div>');function id(t,e){Z(e,!0);let r=Se(e,"value",15),a=Se(e,"suggestions",19,()=>[]),s=Se(e,"disabled",3,!1);const i=J(()=>a().map(p=>({id:p,label:p,disabled:p===r()})));var o=od(),l=c(o),u=c(l);Lt(u,{class:"h-4 w-4 opacity-50"});var h=d(u,2),v=d(l,2);{var g=p=>{tr(p,{get suggestions(){return n(i)},onSuggestionClick:m=>r(m.label),buttonVariant:"btn-outline",buttonSize:"btn-xs"})};E(v,p=>{a().length>0&&p(g)})}O(()=>h.disabled=s()),De(h,r),f(t,o),X()}var ld=y('<div class="space-y-2"><label class="input"><!> <input type="text" placeholder="Qui" maxlength="25"/></label> <!></div>');function cd(t,e){Z(e,!0);let r=Se(e,"value",15),a=Se(e,"suggestions",19,()=>[]),s=Se(e,"disabled",3,!1);const i=J(()=>a().map(p=>({id:p,label:p,disabled:p===r()})));var o=ld(),l=c(o),u=c(l);qr(u,{class:"h-4 w-4 opacity-50"});var h=d(u,2),v=d(l,2);{var g=p=>{tr(p,{get suggestions(){return n(i)},onSuggestionClick:m=>r(m.label),buttonVariant:"btn-outline",buttonSize:"btn-xs"})};E(v,p=>{a().length>0&&p(g)})}O(()=>h.disabled=s()),De(h,r),f(t,o),X()}var ud=y('<textarea class="textarea w-full text-sm" placeholder="Commentaire (optionnel)" rows="2" maxlength="250"></textarea>');function dd(t,e){Z(e,!0);let r=Se(e,"value",15),a=Se(e,"disabled",3,!1);var s=ud();O(()=>s.disabled=a()),De(s,r),f(t,s),X()}var vd=y('<label class="input w-28"><!> <input type="number" step="1" min="0" placeholder="0.00"/></label>');function fd(t,e){Z(e,!0);let r=Se(e,"value",15),a=Se(e,"disabled",3,!1);var s=vd(),i=c(s);Ro(i,{class:"h-4 w-4 opacity-50"});var o=d(i,2);O(()=>o.disabled=a()),De(o,r),f(t,s),X()}function hd(t,e,r){e()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function pd(t,e,r){const a=e().editingPurchaseData;!a||!r(a)||e().updateEditedPurchase(a)}function gd(t,e){e().cancelEditPurchase()}var md=y('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),_d=y('<span class="loading loading-spinner loading-sm"></span>'),bd=y(`<h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><!> <!> <!> <!></div> <div class="mb-2"><!></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div>`,1),yd=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),wd=y("<th>Actions</th>"),xd=y('<span class="loading loading-spinner loading-sm"></span>'),Sd=y('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Acheté</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Pd=(t,e,r)=>e(n(r)),$d=(t,e,r)=>e(n(r).$id),kd=y('<span class="loading loading-spinner loading-sm"></span>'),Ed=y('<td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td>'),Ad=y('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><!></tr>'),Td=y('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><!></tr></thead><tbody></tbody></table></div>'),Md=y('<div class="space-y-4"><!></div> <!>',1);function Nd(t,e){Z(e,!0);let r=Se(e,"modalState",7),a=Se(e,"isArchiveMode",3,!1);function s(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function i(w){return w.quantity!==null&&w.quantity!==0&&w.unit?.trim()!==""}function o(w){r().removePurchase(w)}function l(w){r().startEditPurchase(w)}var u=Md(),h=R(u),v=c(h);{var g=w=>{Oa(w,{title:"Achats non modifiables",message:"L'événement est terminé, les achats ne peuvent plus être ajoutés ou modifiés."})},p=w=>{var P=bd(),C=R(P),x=c(C);er(x,{class:"h-5 w-5"});var T=d(C,2),$=c(T),M=d(c($),2),k=c(M);sd(k,{get disabled(){return r().loading},get quantity(){return r().forms.purchase.quantity},set quantity(A){r().forms.purchase.quantity=A},get unit(){return r().forms.purchase.unit},set unit(A){r().forms.purchase.unit=A}});var N=d(k,2);id(N,{get suggestions(){return F.uniqueStores},get disabled(){return r().loading},get value(){return r().forms.purchase.store},set value(A){r().forms.purchase.store=A}});var D=d(N,2);cd(D,{get suggestions(){return F.uniqueWho},get disabled(){return r().loading},get value(){return r().forms.purchase.who},set value(A){r().forms.purchase.who=A}});var W=d(D,2);fd(W,{get disabled(){return r().loading},get value(){return r().forms.purchase.price},set value(A){r().forms.purchase.price=A}});var Q=d(M,2),Y=c(Q);dd(Y,{get disabled(){return r().loading},get value(){return r().forms.purchase.notes},set value(A){r().forms.purchase.notes=A}});var le=d(Q,2),z=c(le),j=c(z),q=c(j),ee=c(q);ee.value=ee.__value="delivered";var U=d(ee);U.value=U.__value="ordered";var G=d(j,2),se=d(z,2);{var xe=A=>{var ie=md(),L=d(c(ie),2);De(L,()=>r().forms.purchase.deliveryDate,ae=>r().forms.purchase.deliveryDate=ae),f(A,ie)};E(se,A=>{r().forms.purchase.status==="ordered"&&A(xe)})}var me=d(le,2),re=c(me);re.__click=[hd,s,r];var ne=c(re);{var ce=A=>{var ie=_d();f(A,ie)},Pe=A=>{var ie=Pt("Ajouter l'achat");f(A,ie)};E(ne,A=>{r().loading?A(ce):A(Pe,!1)})}O(A=>{Ie(G,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),re.disabled=A},[()=>r().loading||!s()]),vr(q,()=>r().forms.purchase.status,A=>r().forms.purchase.status=A),f(w,P)};E(v,w=>{a()?w(g):w(p,!1)})}var m=d(h,2);{var _=w=>{var P=yd(),C=c(P);er(C,{class:"mx-auto mb-2 h-12 w-12"}),f(w,P)},S=w=>{var P=Td(),C=c(P),x=c(C),T=c(x),$=d(c(T),8);{var M=N=>{var D=wd();f(N,D)};E($,N=>{a()||N(M)})}var k=d(x);it(k,21,()=>r().purchasesList,N=>N.$id,(N,D,W)=>{var Q=te(),Y=R(Q);{var le=j=>{var q=Sd(),ee=c(q),U=c(ee),G=c(U),se=d(G,2),xe=c(se);xe.value=xe.__value="kg";var me=d(xe);me.value=me.__value="gr.";var re=d(me);re.value=re.__value="l.";var ne=d(re);ne.value=ne.__value="ml";var ce=d(ne);ce.value=ce.__value="unité";var Pe=d(ce);Pe.value=Pe.__value="bottes";var A=d(ee),ie=c(A),L=d(A),ae=c(L),$e=d(L),Ae=c($e),Me=c(Ae);Me.value=Me.__value="ordered";var ue=d(Me);ue.value=ue.__value="delivered";var ke=d($e),Ce=c(ke),Re=d(ke),Xe=c(Re),Ye=d(Re),de=c(Ye),Ee=d(Ye),Ge=c(Ee),tt=d(Ee),Ze=c(tt),V=c(Ze);V.__click=[pd,r,i];var _e=c(V);{var oe=Te=>{var Ke=xd();f(Te,Ke)},ve=Te=>{su(Te,{class:"h-3 w-3"})};E(_e,Te=>{r().loading?Te(oe):Te(ve,!1)})}var Ne=d(V,2);Ne.__click=[gd,r];var je=c(Ne);Ct(je,{class:"h-3 w-3"}),O(Te=>V.disabled=Te,[()=>r().loading||!i(n(D))]),De(G,()=>n(D).quantity,Te=>n(D).quantity=Te),vr(se,()=>n(D).unit,Te=>n(D).unit=Te),De(ie,()=>n(D).store,Te=>n(D).store=Te),De(ae,()=>n(D).who,Te=>n(D).who=Te),vr(Ae,()=>n(D).status,Te=>n(D).status=Te),De(Ce,()=>n(D).orderDate,Te=>n(D).orderDate=Te),De(Xe,()=>n(D).deliveryDate,Te=>n(D).deliveryDate=Te),De(de,()=>n(D).price,Te=>n(D).price=Te),De(Ge,()=>n(D).notes,Te=>n(D).notes=Te),f(j,q)},z=j=>{var q=Ad(),ee=c(q),U=c(ee),G=d(ee),se=c(G),xe=d(G),me=c(xe),re=d(xe),ne=c(re),ce=c(ne),Pe=d(re),A=c(Pe),ie=d(Pe),L=c(ie),ae=d(ie),$e=c(ae),Ae=d(ae),Me=c(Ae),ue=d(Ae);{var ke=Ce=>{var Re=Ed(),Xe=c(Re),Ye=c(Xe);Ye.__click=[Pd,l,D];var de=c(Ye);_a(de,{class:"h-4 w-4"});var Ee=d(Ye,2);Ee.__click=[$d,o,D];var Ge=c(Ee);{var tt=V=>{var _e=kd();f(V,_e)},Ze=V=>{Ct(V,{class:"h-4 w-4"})};E(Ge,V=>{r().loading?V(tt):V(Ze,!1)})}O(()=>Ee.disabled=r().loading),f(Ce,Re)};E(ue,Ce=>{a()||Ce(ke)})}O((Ce,Re,Xe,Ye,de)=>{I(U,Ce),I(se,n(D).store||"-"),I(me,n(D).who||"-"),Ie(ne,1,`badge badge-sm ${Re??""}`),I(ce,Xe),I(A,Ye),I(L,de),I($e,n(D).price?`${n(D).price}€`:"-"),I(Me,n(D).notes||"-")},[()=>An(n(D).quantity,n(D).unit),()=>nn(n(D).status).class,()=>nn(n(D).status).text,()=>vs(n(D).orderDate),()=>vs(n(D).deliveryDate)]),f(j,q)};E(Y,j=>{r().editingPurchaseId===n(D).$id?j(le):j(z,!1)})}f(N,Q)}),f(w,P)};E(m,w=>{r().purchasesList.length===0?w(_):w(S,!1)})}f(t,u),X()}et(["click"]);async function Dd(t,e){await e()?.removeStock()}var Cd=y(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),Id=(t,e)=>{e().forms.stock.quantity=null,e().forms.store.comment=""},Od=y(`<h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`,1),Rd=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),qd=y('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),jd=y('<span class="loading loading-spinner loading-xs"></span>'),Ld=y('<div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div>'),Bd=y('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <!></div></div>'),zd=y('<div class="space-y-4"><!></div> <!>',1);function Ud(t,e){Z(e,!0);let r=Se(e,"modalState",7),a=Se(e,"isArchiveMode",3,!1);var s=zd(),i=R(s),o=c(i);{var l=p=>{Oa(p,{title:"Stock non modifiable",message:"L'événement est terminé, le stock ne peut plus être modifié.",get data(){return r().stockParsed},dataLabel:"Stock actuel"})},u=p=>{var m=Od(),_=R(m),S=c(_);tn(S,{class:"h-5 w-5"});var w=d(_,2),P=c(w),C=c(P),x=c(C),T=d(C,2),$=c(T);Wo($,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(me,re)=>{var ne=Cd();f(me,ne)},$$slots:{default:!0}});var M=d(T,2),k=c(M),N=c(k);ra(N,{class:"h-4 w-4 opacity-50"});var D=d(N,2),W=d(k,2),Q=c(W);Q.value=Q.__value="";var Y=d(Q);Y.value=Y.__value="kg";var le=d(Y);le.value=le.__value="gr.";var z=d(le);z.value=z.__value="l.";var j=d(z);j.value=j.__value="ml";var q=d(j);q.value=q.__value="unité";var ee=d(q);ee.value=ee.__value="bottes";var U=d(M,2),G=c(U),se=d(U,2),xe=c(se);xe.__click=[Id,r],O(me=>{I(x,`Déclarer le stock réel du ${me??""}`),xe.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),De(D,()=>r().forms.stock.quantity,me=>r().forms.stock.quantity=me),vr(W,()=>r().forms.stock.unit,me=>r().forms.stock.unit=me),De(G,()=>r().forms.stock.notes,me=>r().forms.stock.notes=me),f(p,m)};E(o,p=>{a()?p(l):p(u,!1)})}var h=d(i,2);{var v=p=>{var m=Rd(),_=c(m);tn(_,{class:"mx-auto mb-2 h-12 w-12"}),f(p,m)},g=p=>{var m=Bd(),_=c(m),S=d(c(_),2),w=c(S),P=d(c(w),2),C=c(P),x=d(w,2),T=d(c(x),2),$=c(T),M=d(x,2);{var k=W=>{var Q=qd(),Y=d(c(Q),2),le=c(Y);O(()=>I(le,r().stockParsed.notes)),f(W,Q)};E(M,W=>{r().stockParsed.notes&&W(k)})}var N=d(S,2);{var D=W=>{var Q=Ld(),Y=c(Q);Y.__click=[Dd,r];var le=c(Y);{var z=q=>{var ee=jd();f(q,ee)},j=q=>{var ee=Pt("Supprimer le stock");f(q,ee)};E(le,q=>{r().loading?q(z):q(j,!1)})}O(()=>Y.disabled=r().loading),f(W,Q)};E(N,W=>{a()||W(D)})}O(W=>{I(C,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),I($,W)},[()=>Ia(r().stockParsed.dateTime)]),f(p,m)};E(h,p=>{r().stockParsed?p(g,!1):p(v)})}f(t,s),X()}et(["click"]);function Hd(t,e,r){e().forms.who=[...e().whoList],b(r,"")}var Qd=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},Wd=y('<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div>'),Gd=y('<div class="space-y-4"><!></div>');function Vd(t,e){Z(e,!0);let r=Se(e,"modalState",7),a=Se(e,"isArchiveMode",3,!1),s=H("");const i=J(()=>{const _=new Set([...F.uniqueWho,...r().forms.who]);return Array.from(_).map(S=>({id:S,label:S,selected:r().forms.who.includes(S)}))});function o(_){const S=_.trim();S&&!r().forms.who.includes(S)&&(r().forms.who=[...r().forms.who,S])}function l(_){r().forms.who=r().forms.who.filter(S=>S!==_)}function u(_){r().forms.who.includes(_)?l(_):o(_)}function h(){n(s).trim()&&(o(n(s)),b(s,""))}var v=Gd(),g=c(v);{var p=_=>{Oa(_,{title:"Volontaires non modifiables",message:"L'événement est terminé, les volontaires assignés ne peuvent plus être modifiés."})},m=_=>{var S=Wd(),w=c(S),P=d(c(w),4),C=c(P),x=c(C),T=c(x);qr(T,{class:"h-4 w-4 opacity-50"});var $=d(T,2);$.__keydown=[Qd,h];var M=d(x,2);M.__click=h;var k=c(M);Qo(k,{size:16});var N=d(C,2),D=d(c(N),2);Yr(D,{get items(){return n(i)},onToggleItem:u,showIcon:!0,badgeSize:"btn-sm"});var W=d(w,2),Q=c(W);Q.__click=[Hd,r,s],O(Y=>{$.disabled=r().loading,M.disabled=Y,Q.disabled=r().loading},[()=>r().loading||!n(s).trim()]),De($,()=>n(s),Y=>b(s,Y)),f(_,S)};E(g,_=>{a()?_(p):_(m,!1)})}f(t,v),X()}et(["keydown","click"]);var Kd=(t,e)=>{t.key==="Enter"&&e()},Jd=(t,e)=>{e().forms.store.name="",e().forms.store.comment=""},Yd=y(`<div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div>`),Fd=y('<div class="space-y-4"><!></div>');function Zd(t,e){Z(e,!0);let r=Se(e,"modalState",7),a=Se(e,"isArchiveMode",3,!1);const s=J(()=>r()?.hasChanges?.store||!1);async function i(){if(!n(s))return;const v={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(v)}var o=Fd(),l=c(o);{var u=v=>{{let g=J(()=>r().product?.storeInfo);Oa(v,{title:"Magasin non modifiable",message:"L'événement est terminé, les informations de magasin ne peuvent plus être modifiées.",get data(){return n(g)},dataLabel:"Magasin actuel"})}},h=v=>{var g=Yd(),p=c(g),m=d(c(p),4),_=c(m),S=c(_),w=c(S);Lt(w,{class:"h-4 w-4 opacity-50"});var P=d(w,2);P.__keydown=[Kd,i];var C=d(S,2);{var x=k=>{{let N=J(()=>F.uniqueStores.map(D=>({id:D,label:D,disabled:D===r().forms.store.name})));tr(k,{get suggestions(){return n(N)},onSuggestionClick:D=>{r().forms.store.name=D.label},buttonVariant:"btn-outline"})}};E(C,k=>{F.uniqueStores.length>0&&k(x)})}var T=d(_,2),$=d(m,2),M=c($);M.__click=[Jd,r],O(()=>M.disabled=r().loading),De(P,()=>r().forms.store.name,k=>r().forms.store.name=k),De(T,()=>r().forms.store.comment,k=>r().forms.store.comment=k),f(v,g)};E(l,v=>{a()?v(u):v(h,!1)})}f(t,o),X()}et(["keydown","click"]);var Xd=y("<fieldset><legend><!> </legend> <!></fieldset>");function Hr(t,e){let r=Se(e,"bgClass",3,"bg-base-100");var a=Xd(),s=c(a),i=c(s);{var o=h=>{const v=J(()=>e.iconComponent);var g=te(),p=R(g);dr(p,()=>n(v),(m,_)=>{_(m,{size:16,class:"mr-1"})}),f(h,g)};E(i,h=>{e.iconComponent&&h(o)})}var l=d(i),u=d(s,2);ge(u,()=>e.children??fe),O(()=>{Ie(a,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Ie(s,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),I(l,` ${e.legend??""}`)}),f(t,a)}async function ev(t,e,r,a,s,i){if(!e.modalState)return;const o={totalOverride:{q:n(r),u:n(a)},comment:n(s)};await e.modalState.setOverride(o),b(i,!1)}async function tv(t,e,r){e.modalState&&(await e.modalState.removeOverride(),b(r,!1))}var rv=y('<div class="stat "><div class="stat-title text-sm">Ancienne quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">avant la mise a jour des recettes ou menus</div></div>'),av=y('<div class="stat"><div class="stat-title text-sm">"Quantité redéfinie manuellement"</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic"></div></div>'),nv=(t,e)=>b(e,!0),sv=y('<div class="flex justify-end gap-2"><button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button></div>'),ov=y('<div class="text-error text-sm">Limite de caractères atteinte</div>'),iv=(t,e)=>b(e,!1),lv=y('<span class="loading loading-spinner loading-sm"></span>'),cv=y('<span class="loading loading-spinner loading-sm"></span>'),uv=y('<div class="card-actions mt-4 justify-end gap-2"><button class="btn btn-ghost btn-sm">Annuler</button> <button class="btn btn-soft btn-primary btn-sm"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>'),dv=y(`<div><div class="card-body p-4"><div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <!></div></div>`),vv=y('<div class="stats not-md:stats-vertical shadow"><!> <div class="stat"><div class="stat-title text-sm">Quantité calculée</div> <div class="stat-value text-base text-content-base/70"> </div> <div class="stat-desc italic">Recettes actuelles</div></div> <!></div> <!> <!>',1),fv=y('<div class="mb-2 space-y-4"><!></div>');function hv(t,e){Z(e,!0);const r=J(()=>e.modalState.product?.totalNeededOverrideParsed),a=J(()=>e.modalState.product?.displayTotalOverride);let s=J(()=>n(r)?.hasUnresolvedChangedSinceOverride),i=H(!1),o=H(Be(e.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||e.modalState.product?.totalNeededArray[0]?.q||0)),l=H(Be(e.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||e.modalState.product?.totalNeededArray[0]?.u||"")),u=H(Be(e.modalState.product?.totalNeededOverrideParsed?.comment||"")),h=J(()=>n(o)>0&&n(l).trim()!=="");var v=te(),g=R(v);{var p=m=>{var _=fv(),S=c(_);Hr(S,{legend:"Besoin total",children:(w,P)=>{var C=vv(),x=R(C),T=c(x);{var $=j=>{var q=rv(),ee=d(c(q),2),U=c(ee);O(()=>I(U,e.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay)),f(j,q)};E(T,j=>{e.modalState.product.totalNeededOverrideParsed?.oldTotalDisplay&&n(s)&&j($)})}var M=d(T,2),k=d(c(M),2),N=c(k),D=d(M,2);{var W=j=>{var q=av(),ee=d(c(q),2),U=c(ee);O(()=>I(U,n(a))),f(j,q)};E(D,j=>{n(a)&&n(r)&&j(W)})}var Q=d(x,2);{var Y=j=>{var q=sv(),ee=c(q);ee.__click=[nv,i],O(()=>ee.disabled=n(i)),f(j,q)};E(Q,j=>{e.isArchiveMode||j(Y)})}var le=d(Q,2);{var z=j=>{var q=dv(),ee=c(q),U=c(ee),G=c(U),se=c(G);ru(se,{class:"h-4 w-4 opacity-50"});var xe=d(se,2),me=d(G,2),re=c(me);re.value=re.__value="";var ne=d(re);ne.value=ne.__value="kg";var ce=d(ne);ce.value=ce.__value="gr.";var Pe=d(ce);Pe.value=Pe.__value="l.";var A=d(Pe);A.value=A.__value="ml";var ie=d(A);ie.value=ie.__value="unité";var L=d(ie);L.value=L.__value="bottes";var ae=d(U,2),$e=c(ae),Ae=d(c($e),2),Me=d(Ae,2);{var ue=Re=>{var Xe=ov();f(Re,Xe)};E(Me,Re=>{n(u).length>=250&&Re(ue)})}var ke=d(ae,2);{var Ce=Re=>{var Xe=uv(),Ye=c(Xe);Ye.__click=[iv,i];var de=d(Ye,2);de.__click=[tv,e,i];var Ee=c(de);{var Ge=ve=>{var Ne=lv();f(ve,Ne)},tt=ve=>{var Ne=Pt();O(()=>I(Ne,`Réinitialiser le total calculé (${e.modalState.product.displayTotalNeeded??""}).`)),f(ve,Ne)};E(Ee,ve=>{e.modalState.loading?ve(Ge):ve(tt,!1)})}var Ze=d(de,2);Ze.__click=[ev,e,o,l,u,i];var V=c(Ze);{var _e=ve=>{var Ne=cv();f(ve,Ne)},oe=ve=>{var Ne=Pt("Appliquer");f(ve,Ne)};E(V,ve=>{e.modalState.loading?ve(_e):ve(oe,!1)})}O(()=>{de.disabled=e.modalState.loading,Ze.disabled=e.modalState.loading||!n(h)}),f(Re,Xe)};E(ke,Re=>{e.isArchiveMode||Re(Ce)})}O(()=>Ie(q,1,`card border-base-300 border ${n(i)?"bg-base-200":"bg-base-100"}`)),De(xe,()=>n(o),Re=>b(o,Re)),vr(me,()=>n(l),Re=>b(l,Re)),De(Ae,()=>n(u),Re=>b(u,Re)),f(j,q)};E(le,j=>{n(i)&&j(z)})}O(()=>I(N,e.modalState.product.displayTotalNeeded)),f(w,C)},$$slots:{default:!0}}),f(m,_)};E(g,m=>{e.modalState.product&&m(p)})}f(t,v),X()}et(["click"]);var pv=y('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),gv=y('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),mv=y('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),_v=y('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function bv(t,e){Z(e,!0);const r=J(()=>e.modalState.recipes);var a=_v(),s=R(a);hv(s,{get modalState(){return e.modalState},get isArchiveMode(){return e.isArchiveMode}});var i=d(s,2),o=c(i),l=c(o);$n(l,{class:"h-5 w-5"});var u=d(o,2);{var h=g=>{var p=pv(),m=c(p);ra(m,{class:"mx-auto mb-2 h-12 w-12"}),f(g,p)},v=g=>{var p=mv(),m=c(p),_=d(c(m));it(_,21,()=>n(r),pr,(S,w)=>{var P=gv(),C=c(P),x=c(C),T=d(C),$=c(T),M=d(T),k=c(M);O(N=>{I(x,`${n(w).r??""} (${(n(w).a||"-")??""} c.)`),I($,`${(n(w).q||n(w).qEq)??""} ${(n(w).u||n(w).uEq)??""}`),I(k,N)},[()=>Ia(n(w).date)]),f(S,P)}),f(g,p)};E(u,g=>{n(r).length===0?g(h):g(v,!1)})}f(t,a),X()}function yv(t,e,r){n(e).saveAllChanges().then(()=>{r.onClose()})}var wv=y('<div class="alert alert-warning py-0.5"><!> <span class="font-medium">Mode consultation</span> <span>Événement terminé</span></div>'),xv=y('<div class="text-xl font-bold"> </div> <!> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Sv=y('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Pv=(t,e)=>e("recettes"),$v=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),kv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Ev=(t,e)=>e("magasins"),Av=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Tv=(t,e)=>e("volontaires"),Mv=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Nv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Dv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Cv=(t,e)=>e("stock"),Iv=y('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Ov=y('<span class="badge badge-sm badge-secondary ml-1">1</span>'),Rv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),qv=(t,e)=>e("achats"),jv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Lv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Bv=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),zv=y('<span class="loading loading-spinner loading-sm"></span>'),Uv=y('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),Hv=y('<div id="product_modal"><div class="modal-box flex fixed top-0 overflow-auto h-lvh w-lvw flex-col md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Qv(t,e){Z(e,!0);let r=Se(e,"initialTab",3,"recettes"),a=J(()=>Ku(e.productId)),s=J(()=>F.isEventPassed),i=H(Be(r()));It(()=>{b(i,r())});function o(P){b(i,P,!0)}var l=Hv(),u=c(l),h=c(u),v=c(h);{var g=P=>{var C=xv(),x=R(C),T=c(x),$=d(x,2);{var M=Y=>{var le=wv(),z=c(le);jo(z,{class:"h-4 w-4"}),f(Y,le)};E($,Y=>{n(a)&&n(s)&&Y(M)})}var k=d($,2),N=c(k),D=c(N),W=d(N,2),Q=d(c(W));O(()=>{I(T,n(a).product?.productName),I(D,n(a).product?.productType),I(Q,` ${n(a).product?.displayTotalNeeded??""}`)}),f(P,C)},p=P=>{var C=Sv();f(P,C)};E(v,P=>{n(a)&&n(a).product?P(g):P(p,!1)})}var m=d(v,2);m.__click=function(...P){e.onClose?.apply(this,P)};var _=c(m);Ct(_,{class:"h-4 w-4"});var S=d(h,2);{var w=P=>{var C=Uv(),x=R(C),T=c(x);T.__click=[Pv,o];var $=c(T);$n($,{class:"mr-1 h-5 w-5"});var M=d($,2);{var k=de=>{var Ee=$v(),Ge=c(Ee);O(()=>I(Ge,n(a).product?.nbRecipes)),f(de,Ee)},N=de=>{var Ee=kv();f(de,Ee)};E(M,de=>{n(a).product?.nbRecipes&&n(a).product?.nbRecipes>0?de(k):de(N,!1)})}var D=d(T,2);D.__click=[Ev,o];var W=c(D);Lt(W,{class:"mr-1 h-5 w-5"});var Q=d(W,2);{var Y=de=>{var Ee=Av();f(de,Ee)};E(Q,de=>{n(a).hasChanges?.store&&de(Y)})}var le=d(D,2);le.__click=[Tv,o];var z=c(le);fa(z,{class:"mr-1 h-5 w-5"});var j=d(z,2);{var q=de=>{var Ee=Mv();f(de,Ee)},ee=de=>{var Ee=te(),Ge=R(Ee);{var tt=V=>{var _e=Nv(),oe=c(_e);O(()=>I(oe,n(a).product?.who.length)),f(V,_e)},Ze=V=>{var _e=Dv();f(V,_e)};E(Ge,V=>{n(a).product?.who&&n(a).product?.who.length>0?V(tt):V(Ze,!1)},!0)}f(de,Ee)};E(j,de=>{n(a).hasChanges?.who?de(q):de(ee,!1)})}var U=d(le,2);U.__click=[Cv,o];var G=c(U);tn(G,{class:"mr-1 h-5 w-5"});var se=d(G,2);{var xe=de=>{var Ee=Iv();f(de,Ee)},me=de=>{var Ee=te(),Ge=R(Ee);{var tt=V=>{var _e=Ov();f(V,_e)},Ze=V=>{var _e=Rv();f(V,_e)};E(Ge,V=>{n(a).stockParsed?V(tt):V(Ze,!1)},!0)}f(de,Ee)};E(se,de=>{n(a).hasChanges?.stock?de(xe):de(me,!1)})}var re=d(U,2);re.__click=[qv,o];var ne=c(re);er(ne,{class:"mr-1 h-5 w-5"});var ce=d(ne,2);{var Pe=de=>{var Ee=jv(),Ge=c(Ee);O(()=>I(Ge,n(a).purchasesList.length)),f(de,Ee)},A=de=>{var Ee=Lv();f(de,Ee)};E(ce,de=>{n(a).purchasesList.length>0?de(Pe):de(A,!1)})}var ie=d(x,2),L=c(ie);{var ae=de=>{var Ee=Bv(),Ge=c(Ee);Ct(Ge,{class:"h-4 w-4"});var tt=d(Ge,2),Ze=c(tt);O(()=>I(Ze,`erreur : ${n(a).error??""}`)),f(de,Ee)};E(L,de=>{n(a).error&&de(ae)})}var $e=d(L,2),Ae=c($e);gl(Ae,()=>n(i),de=>{var Ee=te(),Ge=R(Ee);{var tt=V=>{bv(V,{get modalState(){return n(a)},get isArchiveMode(){return n(s)}})},Ze=V=>{var _e=te(),oe=R(_e);{var ve=je=>{Nd(je,{get modalState(){return n(a)},get isArchiveMode(){return n(s)}})},Ne=je=>{var Te=te(),Ke=R(Te);{var lt=Fe=>{Ud(Fe,{get modalState(){return n(a)},get isArchiveMode(){return n(s)}})},rt=Fe=>{var ct=te(),mt=R(ct);{var Ot=he=>{Vd(he,{get modalState(){return n(a)},get isArchiveMode(){return n(s)}})},pe=he=>{var K=te(),Oe=R(K);{var ze=Ve=>{Zd(Ve,{get modalState(){return n(a)},get isArchiveMode(){return n(s)}})};E(Oe,Ve=>{n(i)==="magasins"&&Ve(ze)},!0)}f(he,K)};E(mt,he=>{n(i)==="volontaires"?he(Ot):he(pe,!1)},!0)}f(Fe,ct)};E(Ke,Fe=>{n(i)==="stock"?Fe(lt):Fe(rt,!1)},!0)}f(je,Te)};E(oe,je=>{n(i)==="achats"?je(ve):je(Ne,!1)},!0)}f(V,_e)};E(Ge,V=>{n(i)==="recettes"?V(tt):V(Ze,!1)})}f(de,Ee)});var Me=d(ie,2),ue=c(Me);ue.__click=function(...de){e.onClose?.apply(this,de)};var ke=c(ue),Ce=d(ue,2);Ce.__click=[yv,a,e];var Re=c(Ce);{var Xe=de=>{var Ee=zv();f(de,Ee)},Ye=de=>{var Ee=Pt("Tout enregistrer");f(de,Ee)};E(Re,de=>{n(a).loading?de(Xe):de(Ye,!1)})}O(()=>{Ie(T,1,`tab ${n(i)==="recettes"?"tab-active":""}`),Ie(D,1,`tab ${n(i)==="magasins"?"tab-active":""}`),Ie(le,1,`tab ${n(i)==="volontaires"?"tab-active":""}`),Ie(U,1,`tab ${n(i)==="stock"?"tab-active":""}`),Ie(re,1,`tab ${n(i)==="achats"?"tab-active":""}`),I(ke,n(a)?.hasAnyChanges?"Annuler":"Fermer"),Ce.disabled=n(a).loading||!n(a).hasAnyChanges}),f(P,C)};E(S,P=>{n(a)&&P(w)})}O(()=>Ie(l,1,`modal ${(e.productId&&"modal-open")??""}`)),f(t,l),X()}et(["click"]);var Wv=(t,e,r)=>e(r),Gv=y("<button><span> </span> <!></button>"),Vv=y('<div class="text-base-content/60 p-1 text-end text-xs italic">événement terminé</div>'),Kv=(t,e)=>e(),Jv=y('<button class="btn btn-xs btn-link text-primary/80" type="button">Dates à venir</button>'),Yv=(t,e)=>e(),Fv=y('<button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button>'),Zv=y('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),Xv=y('<div class="flex flex-wrap justify-end gap-2"><!> <!></div>'),ef=y('<div class=" flex flex-wrap gap-1"></div> <!>',1);function tf(t,e){Z(e,!0);let r=Se(e,"availableDates",19,()=>[]),a=Se(e,"currentRange",19,()=>({start:null,end:null})),s=H(Be(a().start)),i=H(Be(a().end));const o=J(()=>r().length>0&&n(s)===r()[0]&&n(i)===r()[r().length-1]),l=J(()=>{if(r().length===0)return!1;const x=new Date;x.setHours(0,0,0,0);const $=[...r()].sort().find(M=>new Date(M)>=x);return $&&n(s)===$&&n(i)===r()[r().length-1]}),u=J(()=>{if(r().length===0)return!0;const x=new Date(r()[r().length-1]);return x.setHours(23,59,59,999),x<new Date}),h=J(()=>{if(r().length===0)return!1;const x=new Date;return x.setHours(0,0,0,0),[...r()].some(T=>new Date(T)>=x)});It(()=>{b(s,a().start,!0),b(i,a().end,!0)});function v(x){n(s)===x&&n(i)===x?p():new Date(x)<new Date(n(s))?b(s,x,!0):(new Date(x)>new Date(n(i))||b(s,x,!0),b(i,x,!0)),e.onRangeChange(n(s),n(i))}function g(x){return n(o)?"btn-soft":new Date(x)>=new Date(n(s))&&new Date(x)<=new Date(n(i))?"":"btn-dash"}function p(){r().length!==0&&(b(s,r()[0],!0),b(i,r()[r().length-1],!0),e.onRangeChange(n(s),n(i)))}function m(){if(r().length===0)return;const x=new Date;x.setHours(0,0,0,0);const $=[...r()].sort().find(M=>new Date(M)>=x);$&&(b(s,$,!0),b(i,r()[r().length-1],!0),e.onRangeChange(n(s),n(i)))}var _=ef(),S=R(_);it(S,22,r,x=>x,(x,T)=>{var $=Gv();$.__click=[Wv,v,T];var M=c($),k=c(M),N=d(M,2);{var D=Q=>{Uo(Q,{size:16})},W=Q=>{var Y=te(),le=R(Y);{var z=q=>{Bo(q,{size:16})},j=q=>{var ee=te(),U=R(ee);{var G=se=>{Hc(se,{size:16})};E(U,se=>{Ha(T)==="cloud"&&se(G)},!0)}f(q,ee)};E(le,q=>{Ha(T)==="moon"?q(z):q(j,!1)},!0)}f(Q,Y)};E(N,Q=>{Ha(T)==="sun"?Q(D):Q(W,!1)})}O((Q,Y)=>{Ie($,1,`btn btn-sm btn-secondary ${Q??""}`),I(k,Y)},[()=>g(T),()=>ec(T)]),f(x,$)});var w=d(S,2);{var P=x=>{var T=Vv();f(x,T)},C=x=>{var T=Xv(),$=c(T);{var M=W=>{var Q=Jv();Q.__click=[Kv,m],f(W,Q)};E($,W=>{n(h)&&!n(l)&&W(M)})}var k=d($,2);{var N=W=>{var Q=Fv();Q.__click=[Yv,p],f(W,Q)},D=W=>{var Q=Zv();f(W,Q)};E(k,W=>{n(o)?W(D,!1):W(N)})}f(x,T)};E(w,x=>{n(u)?x(P):x(C,!1)})}f(t,_),X()}et(["click"]);var rf=()=>F.clearFilters(),af=t=>F.setSearchQuery(t.currentTarget.value),nf=()=>F.setSearchQuery(""),sf=()=>F.setGroupBy("none"),of=()=>F.setGroupBy("store"),lf=()=>F.setGroupBy("productType"),cf=(t,e)=>F.toggleProductType(e),uf=y("<button><!> </button>"),df=()=>F.toggleTemperature("frais"),vf=()=>F.toggleTemperature("surgele"),ff=()=>F.clearTypeAndTemperatureFilters(),hf=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),pf=y('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),gf=y('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div> <!>',1),mf=(t,e)=>F.toggleStore(e),_f=y("<button> </button>"),bf=()=>F.clearStoreFilters(),yf=y('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),wf=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),xf=(t,e)=>F.toggleWho(e),Sf=y("<button> </button>"),Pf=()=>F.clearWhoFilters(),$f=y('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),kf=y('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Ef=y('<div class="mb-4 flex items-center justify-between pt-10"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function Af(t,e){Z(e,!0);const r=J(()=>F.filters),a=J(()=>F.uniqueStores),s=J(()=>F.uniqueWho),i=J(()=>F.uniqueProductTypes);var o=Ef(),l=R(o),u=c(l),h=c(u);qo(h,{class:"h-5 w-5"});var v=d(u,2);v.__click=[rf];var g=c(v);ca(g,{class:"h-4 w-4"});var p=d(l,2),m=c(p),_=d(c(m),2),S=c(_);ou(S,{class:"h-4 w-4"});var w=d(S,2);w.__input=[af];var P=d(w,2);P.__click=[nf];var C=c(P);Ct(C,{class:"h-4 w-4"});var x=d(m,2),T=d(c(x),2),$=c(T);$.__change=[sf];var M=d($,2);M.__change=[of];var k=d(M,2);k.__change=[lf];var N=d(x,2);{var D=q=>{Hr(q,{legend:"Date incluses",bgClass:"bg-base-100",children:(ee,U)=>{tf(ee,{get availableDates(){return F.availableDates},get currentRange(){return F.dateRange},onRangeChange:(G,se)=>F.setDateRange(G,se)})},$$slots:{default:!0}})};E(N,q=>{F.hasSingleDateEvent||q(D)})}var W=d(N,2);{var Q=q=>{Hr(q,{legend:"Types & Température",get iconComponent(){return Ho},children:(ee,U)=>{var G=gf(),se=R(G);it(se,20,()=>n(i),L=>L,(L,ae)=>{const $e=J(()=>rn(ae));var Ae=uf();Ae.__click=[cf,ae];var Me=c(Ae);dr(Me,()=>n($e).icon,(ke,Ce)=>{Ce(ke,{class:"mr-1 h-5 w-5"})});var ue=d(Me);O(ke=>{Ie(Ae,1,`btn btn-sm ${ke??""}`),I(ue,` ${n($e).displayName??""}`)},[()=>n(r).selectedProductTypes.length===0?"btn-soft btn-secondary":n(r).selectedProductTypes.includes(ae)?"btn-secondary":"btn-dash btn-secondary"]),f(L,Ae)});var xe=d(se,2),me=c(xe);me.__click=[df];var re=c(me);zo(re,{class:"h-5 w-5"});var ne=d(me,2);ne.__click=[vf];var ce=c(ne);En(ce,{class:"h-5 w-5"});var Pe=d(xe,2);{var A=L=>{var ae=hf();ae.__click=[ff];var $e=c(ae);ca($e,{size:16}),f(L,ae)},ie=L=>{var ae=pf();f(L,ae)};E(Pe,L=>{n(r).selectedProductTypes.length>0||n(r).selectedTemperatures.length>0?L(A):L(ie,!1)})}O((L,ae)=>{Ie(me,1,`btn btn-sm ${L??""}`),Ie(ne,1,`btn btn-sm ${ae??""}`)},[()=>n(r).selectedTemperatures.length===0?"btn-soft btn-success":n(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>n(r).selectedTemperatures.length===0?"btn-soft btn-info":n(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),f(ee,G)},$$slots:{default:!0}})};E(W,q=>{n(i).length>0&&q(Q)})}var Y=d(W,2);{var le=q=>{Hr(q,{legend:"Magasins",get iconComponent(){return Lt},children:(ee,U)=>{var G=wf(),se=c(G);it(se,16,()=>n(a),re=>re,(re,ne)=>{var ce=_f();ce.__click=[mf,ne];var Pe=c(ce);O(A=>{Ie(ce,1,`btn btn-sm ${A??""}`),I(Pe,ne)},[()=>n(r).selectedStores.length===0?"btn-soft btn-secondary":n(r).selectedStores.includes(ne)?"btn-secondary":"btn-dash btn-secondary"]),f(re,ce)});var xe=d(se,2);{var me=re=>{var ne=yf();ne.__click=[bf];var ce=c(ne);ca(ce,{size:16}),f(re,ne)};E(xe,re=>{n(r).selectedStores.length>0&&re(me)})}f(ee,G)},$$slots:{default:!0}})};E(Y,q=>{n(a).length>0&&q(le)})}var z=d(Y,2);{var j=q=>{Hr(q,{legend:"Qui",get iconComponent(){return qr},children:(ee,U)=>{var G=kf(),se=c(G);it(se,16,()=>n(s),re=>re,(re,ne)=>{var ce=Sf();ce.__click=[xf,ne];var Pe=c(ce);O(A=>{Ie(ce,1,`btn btn-sm ${A??""}`),I(Pe,ne)},[()=>n(r).selectedWho.length===0?" btn-soft btn-secondary":n(r).selectedWho.includes(ne)?" btn-secondary":"btn-dash btn-secondary"]),f(re,ce)});var xe=d(se,2);{var me=re=>{var ne=$f();ne.__click=[Pf];var ce=c(ne);ca(ce,{size:16}),f(re,ne)};E(xe,re=>{n(r).selectedWho.length>0&&re(me)})}f(ee,G)},$$slots:{default:!0}})};E(z,q=>{n(s).length>0&&q(j)})}O(()=>{v.disabled=!F.hasFilters,$l(w,n(r).searchQuery),P.disabled=!n(r).searchQuery,Ba($,n(r).groupBy==="none"),Ba(M,n(r).groupBy==="store"),Ba(k,n(r).groupBy==="productType")}),f(t,o),X()}et(["click","input","change"]);var Tf=y('<div class="tooltip text-xs font-normal"><!></div>');function Mf(t,e){let r=Se(e,"iconSize",3,24),a=e.icon||void 0;var s=Tf(),i=c(s);{var o=l=>{a(l,{get size(){return r()},class:`align-top
`})};E(i,l=>{e.icon&&l(o)})}O(()=>ar(s,"data-tip",e.tip)),f(t,s)}var Nf=y('<div class="text-primary-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Df=y('du <span class="font-semibold"> </span> au <span class="font-semibold"> </span>',1),Cf=y('le <span class="font-semibold"> </span>',1),If=(t,e,r)=>e.onOpenGroupEditModal("store",n(r).map(a=>a.data.$id),n(r).map(a=>a.data)),Of=(t,e,r)=>e.onOpenGroupEditModal("who",n(r).map(a=>a.data.$id),n(r).map(a=>a.data)),Rf=(t,e,r)=>e.onOpenGroupPurchaseModal(n(r).map(a=>a.data)),qf=y(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),jf=y('<div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div>'),Lf=y('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 font-semibold @md:min-w-48"><!></div> <div class="text-primary-content"><!></div> <!></div>'),Bf=(t,e,r)=>e.onOpenModal(n(r).$id,"recettes"),zf=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(n(r).$id,"recettes"),Uf=y('<div class="text-base-content/60 text-sm font-normal"> </div>'),Hf=y('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),Qf=y('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),Wf=y('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),Gf=y('<div class="tooltip"><div class="badge badge-outline badge-sm hover:badge-primary"> </div></div>'),Vf=y('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),Kf=y('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),Jf=(t,e,r)=>e.onOpenModal(n(r).$id,"magasins"),Yf=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(n(r).$id,"magasins"),Ff=y('<div class="ml-1"><!></div>'),Zf=y('<div class="ml-1"> </div> <!>',1),Xf=y('<div class="ml-1 text-sm font-medium">?</div>'),eh=(t,e,r)=>e.onOpenModal(n(r).$id,"volontaires"),th=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(n(r).$id,"volontaires"),rh=y('<span class="text-base-content/50 text-xs"> </span>'),ah=y('<div class="ml-1 flex gap-1"> <!></div>'),nh=y('<div class="ml-1 text-sm font-medium">?</div>'),sh=y('<div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div>'),oh=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),ih=y('<div class="flex items-center gap-1 text-sm"><!> </div>'),lh=y('<div class="mx-4 flex gap-2 opacity-60"><!> <!></div>'),ch=(t,e,r)=>e.onOpenModal(n(r).$id,"recettes"),uh=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(n(r).$id,"recettes"),dh=y('<div class="tooltip flex items-center gap-2" data-tip="Besoin total modifié manuellement"><span class="text-base-content/70 line-through"> </span> <!> </div>'),vh=y("<span> </span>"),fh=y('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),hh=(t,e,r,a)=>{t.stopPropagation(),e.onQuickValidation(n(r),n(a))},ph=y('<button class="btn btn-sm btn-soft btn-accent hover:bg-success/70 hover:border-success/70 ms-auto"><div class="cart-icon"></div> <span class="text-xs"> </span> <!></button>'),gh=y(`<div id="override_alert" class="alert alert-warning alert-soft mt-1 px-1 py-0.5"><!> <span>Les quantités des menus ont été modifiées depuis
                      l'attribution manuelle des "besoins"</span></div>`),mh=(t,e,r)=>e.onOpenModal(n(r).$id,"achats"),_h=(t,e,r)=>t.key==="Enter"&&e.onOpenModal(n(r).$id,"achats"),bh=y('<span class="text-xs opacity-75"> </span>'),yh=y('<div><div class="flex items-center gap-1"><!> <span class="text-sm font-medium text-nowrap"> </span></div> <!></div>'),wh=y('<span class="text-base-content/50 text-xs italic">aucun</span>'),xh=y('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <!></div> <div class="flex min-h-14 flex-wrap gap-3" id="card-needs-missing"><div id="needs-card" class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex flex-wrap gap-x-4 gap-y-0"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins</div> <div class="ms-auto flex items-center gap-4 self-end"><div><!></div> <!></div></div> <!> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative flex min-w-[200px] flex-1 cursor-pointer items-center justify-between gap-2 rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex flex-wrap items-start gap-0 self-start"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div>ajouter un achat</div></div> <div class="flex flex-wrap justify-end gap-1.5"><!> <!></div></div></div></div></div>'),Sh=y('<!> <div class="space-y-1"></div>',1),Ph=y('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),$h=y('<div class="space-y-4 rounded-lg"></div> <!>',1);function kh(t,e){Z(e,!0);const r={Package:ra,MessageCircleQuestionMark:Zc,ShoppingCart:er,Clock:Uc,CircleCheck:jc,CircleX:Lc,ClipboardCheck:Bc,PackageCheck:Xc,Check:Dr},a=J(()=>F.groupedFilteredProducts),s=J(()=>F.filters),i=J(()=>Vr(F.dateRange.start)),o=J(()=>Vr(F.dateRange.end));var l=$h(),u=R(l);it(u,21,()=>Object.entries(n(a)),([g,p])=>g,(g,p)=>{var m=J(()=>ha(n(p),2));let _=()=>n(m)[0];const w=J(()=>n(m)[1]);var P=Sh(),C=R(P);{var x=$=>{const M=J(()=>rn(_()));var k=Lf(),N=c(k),D=c(N);{var W=U=>{var G=Pt();O(()=>I(G,`🏪 ${_()??""} (${n(w).length??""})`)),f(U,G)},Q=U=>{var G=te(),se=R(G);{var xe=re=>{var ne=Nf(),ce=c(ne);dr(ce,()=>n(M).icon,(ae,$e)=>{$e(ae,{class:"h-4 w-4"})});var Pe=d(ce,2),A=c(Pe),ie=d(Pe,2),L=c(ie);O(()=>{I(A,n(M).displayName),I(L,`(${n(w).length??""})`)}),f(re,ne)},me=re=>{var ne=Pt();O(()=>I(ne,`📦 ${_()??""} (${n(w).length??""})`)),f(re,ne)};E(se,re=>{n(s).groupBy==="productType"?re(xe):re(me,!1)},!0)}f(U,G)};E(D,U=>{n(s).groupBy==="store"?U(W):U(Q,!1)})}var Y=d(N,2),le=c(Y);{var z=U=>{var G=Df(),se=d(R(G)),xe=c(se),me=d(se,2),re=c(me);O(()=>{I(xe,n(i)),I(re,n(o))}),f(U,G)},j=U=>{var G=Cf(),se=d(R(G)),xe=c(se);O(()=>I(xe,n(i))),f(U,G)};E(le,U=>{F.dateRange.start!==F.dateRange.end?U(z):U(j,!1)})}var q=d(Y,2);{var ee=U=>{var G=jf(),se=c(G);se.__click=[If,e,w];var xe=c(se);Lt(xe,{size:16});var me=d(xe,4);_a(me,{size:16});var re=d(se,2);re.__click=[Of,e,w];var ne=c(re);fa(ne,{size:16});var ce=d(ne,4);_a(ce,{size:16});var Pe=d(re,2);{var A=ie=>{var L=qf();L.__click=[Rf,e,w];var ae=c(L);er(ae,{size:16});var $e=d(ae,4);us($e,{size:16}),f(ie,L)};E(Pe,ie=>{n(w).some(L=>L.data.displayMissingQuantity!=="✅ Complet")&&ie(A)})}f(U,G)};E(q,U=>{F.isEventPassed||U(ee)})}f($,k)};E(C,$=>{_()!==""&&$(x)})}var T=d(C,2);it(T,21,()=>n(w),$=>$.data.$id,($,M)=>{const k=J(()=>n(M).data),N=J(()=>n(M).stats),D=J(()=>rn(n(k).productType)),W=J(()=>Gu(n(k).purchases||[])),Q=J(()=>n(k).totalNeededOverrideParsed);var Y=xh(),le=c(Y),z=c(le),j=c(z);j.__click=[Bf,e,k],j.__keydown=[zf,e,k];var q=c(j),ee=c(q);dr(ee,()=>n(D).icon,(pe,he)=>{he(pe,{class:"text-base-content/80 h-4 w-4"})});var U=d(ee),G=d(U);{var se=pe=>{var he=Uf(),K=c(he);O(()=>I(K,`Ancien: ${n(k).previousNames[0]??""}`)),f(pe,he)};E(G,pe=>{n(k).previousNames&&n(k).previousNames.length>0&&pe(se)})}var xe=d(q,2),me=c(xe);{var re=pe=>{var he=Hf(),K=c(he);zo(K,{class:"text-success h-4 w-4"}),f(pe,he)};E(me,pe=>{n(k).pFrais&&pe(re)})}var ne=d(me,2);{var ce=pe=>{var he=Qf(),K=c(he);En(K,{class:"text-info h-4 w-4"}),f(pe,he)};E(ne,pe=>{n(k).pSurgel&&pe(ce)})}var Pe=d(xe,2);{var A=pe=>{var he=Wf(),K=c(he);Lo(K,{class:"h-4 w-4 animate-spin"}),f(pe,he)};E(Pe,pe=>{n(k).status==="isSyncing"&&pe(A)})}var ie=d(Pe,2);{var L=pe=>{var he=Kf(),K=c(he);it(K,20,()=>n(N).concernedDates,Oe=>Oe,(Oe,ze)=>{const Ve=J(()=>n(N).recipesByDate.get(ze)||[]);var Qe=te(),He=R(Qe);{var st=Ue=>{var nt=Gf(),Je=c(nt),vt=c(Je);O((Tt,jr)=>{ar(nt,"data-tip",Tt),I(vt,jr)},[()=>n(Ve).map(Tt=>Tt.r).join(", "),()=>new Date(ze).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),f(Ue,nt)},wt=Ue=>{var nt=Vf(),Je=c(nt);O(vt=>I(Je,vt),[()=>new Date(ze).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),f(Ue,nt)};E(He,Ue=>{n(Ve).length>0?Ue(st):Ue(wt,!1)})}f(Oe,Qe)}),f(pe,he)};E(ie,pe=>{n(N).concernedDates.length>0&&pe(L)})}var ae=d(j,2);{var $e=pe=>{var he=sh(),K=c(he);K.__click=[Jf,e,k],K.__keydown=[Yf,e,k];var Oe=c(K);Lt(Oe,{size:18});var ze=d(Oe,2);{var Ve=Je=>{var vt=Zf(),Tt=R(vt),jr=c(Tt),Ra=d(Tt,2);{var zt=xr=>{var na=Ff(),Vo=c(na);Mf(Vo,{get tip(){return n(k).storeInfo.storeComment},get icon(){return Fc},iconSize:14}),f(xr,na)};E(Ra,xr=>{n(k).storeInfo?.storeComment&&xr(zt)})}O(()=>I(jr,n(k).storeInfo.storeName)),f(Je,vt)},Qe=Je=>{var vt=Xf();f(Je,vt)};E(ze,Je=>{n(k).storeInfo?.storeName?Je(Ve):Je(Qe,!1)})}var He=d(K,2);He.__click=[eh,e,k],He.__keydown=[th,e,k];var st=c(He);fa(st,{size:18});var wt=d(st,2);{var Ue=Je=>{var vt=ah(),Tt=c(vt),jr=d(Tt);{var Ra=zt=>{var xr=rh(),na=c(xr);O(()=>I(na,`+${n(k).who.length-2}`)),f(zt,xr)};E(jr,zt=>{n(k).who.length>2&&zt(Ra)})}O(zt=>I(Tt,`${zt??""} `),[()=>n(k).who.slice(0,2).map(zt=>zt.slice(0,3)).join(" | ")]),f(Je,vt)},nt=Je=>{var vt=nh();f(Je,vt)};E(wt,Je=>{n(k).who&&n(k).who.length>0?Je(Ue):Je(nt,!1)})}O(()=>{Ie(K,1,`btn btn-soft btn-sm group relative ${n(k).storeInfo?.storeName?"btn-success":""}`),Ie(He,1,`btn btn-sm btn-soft group relative ${n(k).who&&n(k).who?.length>0?"btn-success":""}`)}),f(pe,he)},Ae=pe=>{var he=lh(),K=c(he);{var Oe=Qe=>{var He=oh(),st=c(He);Lt(st,{size:16});var wt=d(st);O(()=>I(wt,` ${n(k).storeInfo.storeName??""}`)),f(Qe,He)};E(K,Qe=>{n(k).storeInfo?.storeName&&Qe(Oe)})}var ze=d(K,2);{var Ve=Qe=>{var He=ih(),st=c(He);fa(st,{size:16});var wt=d(st);O(Ue=>I(wt,` ${Ue??""}`),[()=>n(k).who.join(", ")]),f(Qe,He)};E(ze,Qe=>{n(k).who&&n(k).who.length>0&&Qe(Ve)})}f(pe,he)};E(ae,pe=>{F.isEventPassed?pe(Ae,!1):pe($e)})}var Me=d(z,2),ue=c(Me);ue.__click=[ch,e,k],ue.__keydown=[uh,e,k];var ke=c(ue),Ce=c(ke),Re=c(Ce);Kc(Re,{class:"h-4 w-4"});var Xe=d(Ce,2),Ye=c(Xe),de=c(Ye);{var Ee=pe=>{var he=dh(),K=c(he),Oe=c(K),ze=d(K,2);zc(ze,{class:"h-4 w-4"});var Ve=d(ze);O(()=>{I(Oe,n(N).formattedQuantities),I(Ve,` ${n(Q).totalOverride.q??""}
                          ${n(Q).totalOverride.u??""}`)}),f(pe,he)},Ge=pe=>{var he=vh(),K=c(he);O(()=>I(K,n(N).formattedQuantities)),f(pe,he)};E(de,pe=>{n(Q)?.totalOverride?pe(Ee):pe(Ge,!1)})}var tt=d(Ye,2);{var Ze=pe=>{var he=fh(),K=c(he),Oe=c(K),ze=d(Oe);$n(ze,{class:"h-3 w-3"});var Ve=d(K,2),Qe=c(Ve),He=d(Qe);lu(He,{class:"h-3 w-3"}),O(()=>{I(Oe,`${n(N).nbRecipes??""} `),I(Qe,`${n(N).totalAssiettes??""} `)}),f(pe,he)};E(tt,pe=>{(n(N).nbRecipes||n(N).totalAssiettes)&&pe(Ze)})}var V=d(ke,2);{var _e=pe=>{var he=ph();he.__click=[hh,e,k,N];var K=d(c(he),2),Oe=c(K),ze=d(K,2);{var Ve=He=>{Rc(He,{size:18})},Qe=He=>{qc(He,{size:18})};E(ze,He=>{Nr.isMobile?He(Ve):He(Qe,!1)})}O(()=>{ar(he,"title",`Acheter le manquant (${n(N).formattedMissingQuantities??""})`),I(Oe,n(N).formattedMissingQuantities)}),f(pe,he)},oe=pe=>{var he=te(),K=R(he);{var Oe=ze=>{us(ze,{size:24,class:"text-success ms-auto"})};E(K,ze=>{F.isEventPassed||ze(Oe)},!0)}f(pe,he)};E(V,pe=>{!F.isEventPassed&&n(N).hasMissing?pe(_e):pe(oe,!1)})}var ve=d(V,2);{var Ne=pe=>{var he=gh(),K=c(he);Oc(K,{size:18}),f(pe,he)};E(ve,pe=>{!F.isEventPassed&&n(Q)?.hasUnresolvedChangedSinceOverride&&pe(Ne)})}var je=d(ue,2);je.__click=[mh,e,k],je.__keydown=[_h,e,k];var Te=c(je),Ke=c(Te),lt=c(Ke);er(lt,{class:"h-4 w-4"});var rt=d(Ke,2),Fe=d(Te,2),ct=c(Fe);it(ct,17,()=>n(W),pr,(pe,he)=>{const K=J(()=>r[n(he).icon]);var Oe=yh(),ze=c(Oe),Ve=c(ze);dr(Ve,()=>n(K),(Ue,nt)=>{nt(Ue,{class:"h-4 w-4"})});var Qe=d(Ve,2),He=c(Qe),st=d(ze,2);{var wt=Ue=>{var nt=bh(),Je=c(nt);O(()=>I(Je,`livré le: ${n(he).deliveryDate??""}`)),f(Ue,nt)};E(st,Ue=>{n(he).deliveryDate&&Ue(wt)})}O(()=>{Ie(Oe,1,`badge badge-outline flex h-fit flex-col items-center gap-1 py-1 ${n(he).badgeClass??""}`),I(He,`${n(he).quantity??""}
                          ${n(he).unit??""}`)}),f(pe,Oe)});var mt=d(ct,2);{var Ot=pe=>{var he=wh();f(pe,he)};E(mt,pe=>{n(W).length===0&&pe(Ot)})}O(()=>{Ie(Y,1,`card bg-base-100 border-base-300 ${n(k).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),I(U,`${n(k).productName??""} `),Ie(Ye,1,`text-base font-bold ${n(N).hasMissing&&!F.isEventPassed?"text-error":"text-success"}`),Ie(rt,1,`text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity ${F.isEventPassed?"":"group-hover:opacity-100"} sm:opacity-0`)}),f($,Y)}),f(g,P)});var h=d(u,2);{var v=g=>{var p=Ph();f(g,p)};E(h,g=>{Object.values(n(a)).flat().length===0&&g(v)})}f(t,l),X()}et(["click","keydown"]);async function Eh(t,e,r,a,s,i,o,l,u){if(!(!n(e)||n(r))){b(a,null),b(s,null);try{const h=n(i).map(m=>m.id),v=o.products.filter(m=>h.includes(m.$id));F.setSyncStatus(h,!0),o.onClose();const g={storeName:n(l).trim(),storeComment:n(u).trim()},p=await To(h,v,g);if(b(s,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),o.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(h){const v=h instanceof Error?h.message:"Erreur inconnue";b(a,v,!0),console.error("[StoreEditModal] Erreur mise à jour:",h),F.clearSyncStatus()}finally{b(r,!1)}}}function fs(t,e,r){n(e)||r.onClose()}var Ah=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Th=(t,e)=>b(e,"empty"),Mh=(t,e)=>b(e,"all"),Nh=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Dh=y("<!> ",1),Ch=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Ih(t,e){Z(e,!0);let r=H(!1),a=H(null),s=H(null),i=H(Be(e.products.length>0&&e.products[0].storeInfo?e.products[0].storeInfo.storeName:"")),o=H(Be(e.products.length>0&&e.products[0].storeInfo&&e.products[0].storeInfo.storeComment||"")),l=H(Be({})),u=H("empty");It(()=>{const A={};e.products.forEach(ie=>{e.productIds.includes(ie.$id)&&(n(u)==="empty"?A[ie.$id]=!ie.storeInfo||!ie.storeInfo.storeName:A[ie.$id]=!0)}),b(l,A,!0)});const h=J(()=>e.products.map(A=>({id:A.$id,label:A.productName,title:A.productName,selected:n(l)[A.$id]}))),v=J(()=>n(h).filter(A=>A.selected)),g=J(()=>`Attribuer un magasin (${n(v).length} produits sélectionnés)`),p=J(()=>n(v).length===0?!1:n(i).trim().length>0);function m(A){n(l)[A]=!n(l)[A]}var _=Ch(),S=c(_),w=c(S),P=c(w),C=c(P),x=d(P,2);x.__click=[fs,r,e];var T=c(x);Ct(T,{class:"h-4 w-4"});var $=d(w,2),M=c($);{var k=A=>{var ie=Ah(),L=c(ie);aa(L,{class:"h-4 w-4"});var ae=d(L,2),$e=c(ae);O(()=>I($e,n(a))),f(A,ie)};E(M,A=>{n(a)&&A(k)})}var N=d(M,2),D=c(N),W=c(D),Q=c(W);Lt(Q,{class:"h-4 w-4 opacity-50"});var Y=d(Q,2),le=d(W,2);{let A=J(()=>F.uniqueStores.map(ie=>({id:ie,label:ie,disabled:ie===n(i)})));tr(le,{get suggestions(){return n(A)},onSuggestionClick:ie=>{b(i,ie.label,!0)},title:"Suggestions de magasins :"})}var z=d(D,2),j=c(z),q=d(N,2),ee=d(c(q),2),U=c(ee);U.__click=[Th,u];var G=d(U,2);G.__click=[Mh,u];var se=d(ee,2);Yr(se,{get items(){return n(h)},onToggleItem:m,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var xe=d($,2),me=c(xe);me.__click=[fs,r,e];var re=d(me,2);re.__click=[Eh,p,r,a,s,v,e,i,o];var ne=c(re);{var ce=A=>{var ie=Nh();f(A,ie)},Pe=A=>{var ie=Dh(),L=R(ie);Dr(L,{class:"h-4 w-4"});var ae=d(L);O(()=>I(ae,` Appliquer à ${n(v).length??""} produit(s)`)),f(A,ie)};E(ne,A=>{n(r)?A(ce):A(Pe,!1)})}O(()=>{I(C,n(g)),x.disabled=n(r),Y.disabled=n(r),j.disabled=n(r),Ie(U,1,`tab ${n(u)==="empty"?"tab-active":""}`),Ie(G,1,`tab ${n(u)==="all"?"tab-active":""}`),me.disabled=n(r),re.disabled=n(r)||!n(p)}),De(Y,()=>n(i),A=>b(i,A)),De(j,()=>n(o),A=>b(o,A)),f(t,_),X()}et(["click"]);async function Oh(t,e,r,a,s,i,o,l){if(!(!n(e)||n(r))){b(a,null),b(s,null);try{const u=n(i).map(g=>g.id),h=o.products.filter(g=>u.includes(g.$id));F.setSyncStatus(u,!0),o.onClose();const v=await Mo(u,h,n(l),"replace");if(b(s,v,!0),v.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${v.updatedCount} produits modifiés`),o.onSuccess?.(v);else throw new Error(v.error||"Erreur lors de la mise à jour")}catch(u){const h=u instanceof Error?u.message:"Erreur inconnue";b(a,h,!0),console.error("[WhoEditModal] Erreur mise à jour:",u),F.clearSyncStatus()}finally{b(r,!1)}}}function hs(t,e,r){n(e)||r.onClose()}var Rh=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),qh=(t,e)=>{t.key==="Enter"&&(t.preventDefault(),e())},jh=(t,e)=>b(e,"empty"),Lh=(t,e)=>b(e,"all"),Bh=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),zh=y("<!> ",1),Uh=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Hh(t,e){Z(e,!0);let r=H(!1),a=H(null),s=H(null),i=H(Be([])),o=H(""),l=H("empty"),u=H(Be({}));It(()=>{const ue={};e.products.forEach(ke=>{e.productIds.includes(ke.$id)&&(n(l)==="empty"?ue[ke.$id]=!ke.who||ke.who.length===0:ue[ke.$id]=!0)}),b(u,ue,!0)});const h=J(()=>e.products.map(ue=>({id:ue.$id,label:ue.productName,title:ue.productName,selected:n(u)[ue.$id]}))),v=J(()=>n(h).filter(ue=>ue.selected)),g=J(()=>{const ue=new Set([...F.uniqueWho,...n(i)]);return Array.from(ue).map(ke=>({id:ke,label:ke,selected:n(i).includes(ke)}))}),p=J(()=>`Gérer les volontaires (${n(v).length} produits sélectionnés)`),m=J(()=>n(v).length===0?!1:n(i).length>0);function _(ue){const ke=ue.trim();ke&&!n(i).includes(ke)&&b(i,[...n(i),ke],!0)}function S(ue){b(i,n(i).filter(ke=>ke!==ue),!0)}function w(ue){n(i).includes(ue)?S(ue):_(ue)}function P(){n(o).trim()&&(_(n(o)),b(o,""))}function C(ue){n(u)[ue]=!n(u)[ue]}var x=Uh(),T=c(x),$=c(T),M=c($),k=c(M),N=d(M,2);N.__click=[hs,r,e];var D=c(N);Ct(D,{class:"h-4 w-4"});var W=d($,2),Q=c(W);{var Y=ue=>{var ke=Rh(),Ce=c(ke);aa(Ce,{class:"h-4 w-4"});var Re=d(Ce,2),Xe=c(Re);O(()=>I(Xe,n(a))),f(ue,ke)};E(Q,ue=>{n(a)&&ue(Y)})}var le=d(Q,2),z=c(le),j=c(z),q=c(j),ee=c(q);qr(ee,{class:"h-4 w-4 opacity-50"});var U=d(ee,2);U.__keydown=[qh,P];var G=d(q,2);G.__click=P;var se=c(G);Qo(se,{size:16});var xe=d(j,2),me=d(c(xe),2);Yr(me,{get items(){return n(g)},onToggleItem:w,showIcon:!0,badgeSize:"btn-sm",badgeStyle:"btn-soft"});var re=d(le,2),ne=d(c(re),2),ce=c(ne);ce.__click=[jh,l];var Pe=d(ce,2);Pe.__click=[Lh,l];var A=d(ne,2);Yr(A,{get items(){return n(h)},onToggleItem:C,badgeSize:"btn-sm",badgeStyle:"btn-soft",color:"success"});var ie=d(W,2),L=c(ie);L.__click=[hs,r,e];var ae=d(L,2);ae.__click=[Oh,m,r,a,s,v,e,i];var $e=c(ae);{var Ae=ue=>{var ke=Bh();f(ue,ke)},Me=ue=>{var ke=zh(),Ce=R(ke);Dr(Ce,{class:"h-4 w-4"});var Re=d(Ce);O(()=>I(Re,` Appliquer à ${n(v).length??""} produit(s)`)),f(ue,ke)};E($e,ue=>{n(r)?ue(Ae):ue(Me,!1)})}O(ue=>{I(k,n(p)),N.disabled=n(r),U.disabled=n(r),G.disabled=ue,Ie(ce,1,`tab ${n(l)==="empty"?"tab-active":""}`),Ie(Pe,1,`tab ${n(l)==="all"?"tab-active":""}`),L.disabled=n(r),ae.disabled=n(r)||!n(m)},[()=>n(r)||!n(o).trim()]),De(U,()=>n(o),ue=>b(o,ue)),f(t,x),X()}et(["click","keydown"]);async function Qh(t,e,r,a,s,i){if(!n(e).invoiceTotal||n(e).invoiceTotal<=0){b(r,"Le montant doit être supérieur à 0");return}b(a,!0),b(r,null);try{const o=F.currentMainId;if(!o)throw new Error("Aucun événement principal actif");n(s)?await Sn(n(s),{price:n(e).invoiceTotal,invoiceTotal:n(e).invoiceTotal,store:n(e).store,notes:n(e).notes,who:n(e).who}):await Do(o,void 0,n(e).invoiceTotal,n(e).store,n(e).notes,n(e).who),i()}catch(o){console.error("Erreur sauvegarde dépense:",o),b(r,o.message,!0)}finally{b(a,!1)}}var Wh=(t,e)=>e(!1),Gh=y('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),Vh=y('<div class="flex justify-between"><span> </span> <span class="font-mono"> </span></div>'),Kh=(t,e)=>b(e,!0),Jh=y('<button class="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg> Ajouter une dépense</button>'),Yh=y('<span class="loading loading-spinner loading-xs"></span>'),Fh=y('<div class="text-error text-xs mt-2"> </div>'),Zh=y('<div class="card bg-base-200 shadow-md animate-in fade-in slide-in-from-top-4 duration-300"><div class="card-body p-4"><h4 class="card-title text-sm"> </h4> <div class="grid grid-cols-1 md:grid-cols-4 gap-4"><div class="form-control"><label class="label text-xs" for="expense-amount">Montant (€)</label> <input id="expense-amount" type="number" step="0.01" class="input input-sm input-bordered" placeholder="0.00"/></div> <div class="form-control"><label class="label text-xs" for="expense-store">Magasin</label> <input id="expense-store" type="text" class="input input-sm input-bordered" placeholder="Ex: Lidl"/></div> <div class="form-control"><label class="label text-xs" for="expense-who">Qui</label> <input id="expense-who" type="text" class="input input-sm input-bordered" placeholder="Nom"/></div> <div class="form-control"><label class="label text-xs" for="expense-notes">Notes</label> <input id="expense-notes" type="text" class="input input-sm input-bordered" placeholder="Description..."/></div></div> <div class="card-actions justify-end mt-2"><button class="btn btn-sm btn-ghost">Annuler</button> <button class="btn btn-sm btn-primary"><!> </button></div> <!></div></div>'),Xh=(t,e)=>e("date"),ep=(t,e)=>e("store"),tp=(t,e)=>e("who"),rp=(t,e)=>e("amount"),ap=y('<span class="italic text-base-content/70"> </span>'),np=y('<span class="text-xs text-base-content/50 ml-1"> </span>'),sp=y('<span class="font-medium"> </span> <!>',1),op=(t,e,r)=>e(n(r)),ip=y('<tr class="hover"><td class="whitespace-nowrap"> </td><td class="max-w-xs truncate"><!></td><td> </td><td> </td><td class="text-right font-mono font-bold"> </td><td><button class="btn btn-ghost btn-square"><!></button></td></tr>'),lp=y('<tr><td colspan="7" class="text-center py-8 text-base-content/50">Aucune dépense trouvée</td></tr>'),cp=(t,e)=>e(!1),up=(t,e)=>e(!1),dp=y('<dialog><div class="modal-box w-11/12 max-w-5xl h-[90vh] flex flex-col p-0 bg-base-100"><div class="p-4 border-b border-base-300 flex justify-between items-center bg-base-200 sticky top-0 z-10"><h3 class="font-bold text-lg flex items-center gap-2"><!> Gestion des Dépenses</h3> <button class="btn btn-sm btn-circle btn-ghost">✕</button></div> <div class="flex-1 overflow-y-auto p-4 space-y-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="stats shadow bg-primary text-primary-content"><div class="stat"><div class="stat-title text-primary-content/80">Total Global</div> <div class="stat-value"> </div> <div class="stat-desc text-primary-content/80"> </div></div></div> <div class="card bg-base-200 shadow-sm p-4"><h4 class="font-semibold mb-2 text-sm uppercase tracking-wider opacity-70">Par Magasin</h4> <div class="overflow-y-auto max-h-24 text-sm space-y-1"></div></div> <div class="card bg-base-200 shadow-sm p-4"><h4 class="font-semibold mb-2 text-sm uppercase tracking-wider opacity-70">Par Acheteur</h4> <div class="overflow-y-auto max-h-24 text-sm space-y-1"></div></div></div> <div class="flex justify-between items-center"><h4 class="font-bold text-sm uppercase opacity-70">Liste des transactions</h4> <!></div> <!> <div class="overflow-x-auto bg-base-100 rounded-lg border border-base-200"><table class="table table-zebra table-xs w-full"><thead class="bg-base-200 sticky top-0"><tr><th class="cursor-pointer hover:bg-base-300"> </th><th>Description</th><th class="cursor-pointer hover:bg-base-300"> </th><th class="cursor-pointer hover:bg-base-300"> </th><th class="cursor-pointer hover:bg-base-300 text-right"> </th><th><!></th></tr></thead><tbody><!><!></tbody></table></div></div> <div class="py-1 px-4 border-t border-base-300 bg-base-200 flex justify-between items-center sticky bottom-0 z-10"><button class="btn btn-ghost ms-auto">Fermer</button></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');function vp(t,e){Z(e,!0);let r=Se(e,"isOpen",15,!1),a=H(!1),s=H(null),i=H(!1),o=H(Be({invoiceTotal:0,store:"",notes:"",who:""})),l=H(null);It(()=>{if(r()&&!n(l)){const oe=localStorage.getItem("appwrite-user-name");oe&&(n(o).who=oe)}});let u=H("date"),h=H("desc"),v=J(()=>F.financialStats),g=J(()=>n(v).allPurchases),p=J(()=>{let oe=[...n(g)];return oe.sort((ve,Ne)=>{let je,Te;switch(n(u)){case"date":je=new Date(ve.orderDate||ve.$createdAt).getTime(),Te=new Date(Ne.orderDate||Ne.$createdAt).getTime();break;case"amount":je=ve.invoiceTotal||ve.price||0,Te=Ne.invoiceTotal||Ne.price||0;break;case"store":je=(ve.store||"").toLowerCase(),Te=(Ne.store||"").toLowerCase();break;case"who":je=(ve.who||"").toLowerCase(),Te=(Ne.who||"").toLowerCase();break}return je<Te?n(h)==="asc"?-1:1:je>Te?n(h)==="asc"?1:-1:0}),oe});function m(oe){n(u)===oe?b(h,n(h)==="asc"?"desc":"asc",!0):(b(u,oe,!0),b(h,"desc"))}function _(){const oe=localStorage.getItem("appwrite-user-name")||"";b(o,{invoiceTotal:0,store:"",notes:"",who:oe},!0),b(l,null),b(i,!1)}function S(oe){b(o,{invoiceTotal:oe.invoiceTotal||oe.price||0,store:oe.store||"",notes:oe.notes||"",who:oe.who||""},!0),b(l,oe.$id,!0),b(i,!0)}function w(oe){return oe?new Date(oe).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}):"-"}function P(oe){return(oe||0).toFixed(2)+" €"}var C=dp(),x=c(C),T=c(x),$=c(T),M=c($);Io(M,{});var k=d($,2);k.__click=[Wh,r];var N=d(T,2),D=c(N),W=c(D),Q=c(W),Y=d(c(Q),2),le=c(Y),z=d(Y,2),j=c(z),q=d(W,2),ee=d(c(q),2);it(ee,21,()=>Object.entries(n(v).byStore).sort((oe,ve)=>ve[1]-oe[1]),pr,(oe,ve)=>{var Ne=J(()=>ha(n(ve),2));let je=()=>n(Ne)[0],Te=()=>n(Ne)[1];var Ke=Gh(),lt=c(Ke),rt=c(lt),Fe=d(lt,2),ct=c(Fe);O(mt=>{I(rt,je()),I(ct,mt)},[()=>P(Te())]),f(oe,Ke)});var U=d(q,2),G=d(c(U),2);it(G,21,()=>Object.entries(n(v).byWho).sort((oe,ve)=>ve[1]-oe[1]),pr,(oe,ve)=>{var Ne=J(()=>ha(n(ve),2));let je=()=>n(Ne)[0],Te=()=>n(Ne)[1];var Ke=Vh(),lt=c(Ke),rt=c(lt),Fe=d(lt,2),ct=c(Fe);O(mt=>{I(rt,je()),I(ct,mt)},[()=>P(Te())]),f(oe,Ke)});var se=d(D,2),xe=d(c(se),2);{var me=oe=>{var ve=Jh();ve.__click=[Kh,i],f(oe,ve)};E(xe,oe=>{n(i)||oe(me)})}var re=d(se,2);{var ne=oe=>{var ve=Zh(),Ne=c(ve),je=c(Ne),Te=c(je),Ke=d(je,2),lt=c(Ke),rt=d(c(lt),2),Fe=d(lt,2),ct=d(c(Fe),2),mt=d(Fe,2),Ot=d(c(mt),2),pe=d(mt,2),he=d(c(pe),2),K=d(Ke,2),Oe=c(K);Oe.__click=_;var ze=d(Oe,2);ze.__click=[Qh,o,s,a,l,_];var Ve=c(ze);{var Qe=Ue=>{var nt=Yh();f(Ue,nt)};E(Ve,Ue=>{n(a)&&Ue(Qe)})}var He=d(Ve),st=d(K,2);{var wt=Ue=>{var nt=Fh(),Je=c(nt);O(()=>I(Je,n(s))),f(Ue,nt)};E(st,Ue=>{n(s)&&Ue(wt)})}O(()=>{I(Te,n(l)?"Modifier la dépense":"Nouvelle Dépense"),ze.disabled=n(a),I(He,` ${n(l)?"Enregistrer":"Ajouter"}`)}),De(rt,()=>n(o).invoiceTotal,Ue=>n(o).invoiceTotal=Ue),De(ct,()=>n(o).store,Ue=>n(o).store=Ue),De(Ot,()=>n(o).who,Ue=>n(o).who=Ue),De(he,()=>n(o).notes,Ue=>n(o).notes=Ue),f(oe,ve)};E(re,oe=>{n(i)&&oe(ne)})}var ce=d(re,2),Pe=c(ce),A=c(Pe),ie=c(A),L=c(ie);L.__click=[Xh,m];var ae=c(L),$e=d(L,2);$e.__click=[ep,m];var Ae=c($e),Me=d($e);Me.__click=[tp,m];var ue=c(Me),ke=d(Me);ke.__click=[rp,m];var Ce=c(ke),Re=d(ke),Xe=c(Re);tu(Xe,{size:14});var Ye=d(A),de=c(Ye);it(de,17,()=>n(p),oe=>oe.$id,(oe,ve)=>{var Ne=ip(),je=c(Ne),Te=c(je),Ke=d(je),lt=c(Ke);{var rt=Qe=>{var He=ap(),st=c(He);O(()=>I(st,n(ve).notes||"-")),f(Qe,He)},Fe=Qe=>{var He=sp(),st=R(He),wt=c(st),Ue=d(st,2);{var nt=Je=>{var vt=np(),Tt=c(vt);O(()=>I(Tt,`- ${n(ve).notes??""}`)),f(Je,vt)};E(Ue,Je=>{n(ve).notes&&Je(nt)})}O(()=>I(wt,n(ve)._productName||"Produit inconnu")),f(Qe,He)};E(lt,Qe=>{n(ve).status==="expense"?Qe(rt):Qe(Fe,!1)})}var ct=d(Ke),mt=c(ct),Ot=d(ct),pe=c(Ot),he=d(Ot),K=c(he),Oe=d(he),ze=c(Oe);ze.__click=[op,S,ve];var Ve=c(ze);_a(Ve,{size:14}),O((Qe,He)=>{I(Te,Qe),I(mt,n(ve).store||"-"),I(pe,n(ve).who||"-"),I(K,He)},[()=>w(n(ve).orderDate||n(ve).$createdAt),()=>P(n(ve).invoiceTotal||n(ve).price)]),f(oe,Ne)});var Ee=d(de);{var Ge=oe=>{var ve=lp();f(oe,ve)};E(Ee,oe=>{n(p).length===0&&oe(Ge)})}var tt=d(N,2),Ze=c(tt);Ze.__click=[cp,r];var V=d(x,2),_e=c(V);_e.__click=[up,r],O(oe=>{Ie(C,1,`modal ${r()?"modal-open":""}`),I(le,oe),I(j,`${n(g).length??""} transactions`),I(ae,`Date ${n(u)==="date"?n(h)==="asc"?"↑":"↓":""}`),I(Ae,`Magasin ${n(u)==="store"?n(h)==="asc"?"↑":"↓":""}`),I(ue,`Qui ${n(u)==="who"?n(h)==="asc"?"↑":"↓":""}`),I(Ce,`Montant ${n(u)==="amount"?n(h)==="asc"?"↑":"↓":""}`)},[()=>P(n(v).totalGlobal)]),f(t,C),X()}et(["click"]);var fp=y("<div><!></div>"),hp=y('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function pp(t,e){Z(e,!0);let r=H(!1),a=Se(e,"width",3,"80"),s=Se(e,"bgClass",3,"bg-base-300");const i=J(()=>"w-"+a());var o=te(),l=R(o);{var u=v=>{var g=fp(),p=c(g);ge(p,()=>e.children??fe),O(()=>Ie(g,1,`${s()??""} ${(n(i)?n(i):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),f(v,g)},h=v=>{var g=hp(),p=R(g),m=c(p),_=d(m,2),S=d(c(_),2),w=c(S);ge(w,()=>e.children??fe);var P=d(p,2),C=c(P),x=c(C);qo(x,{class:"h-6 w-6"}),Za(m,()=>n(r),T=>b(r,T)),f(v,g)};E(l,v=>{Nr.isMobile?v(h,!1):v(u)})}f(t,o),X()}function gp(t,e){b(e,!0)}var mp=(t,e)=>b(e,!0),_p=y('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button> <button class="btn btn-sm btn-primary" title="Ajouter un produit manuellement"><!> Produit</button></div> <!> <!> <!> <!> <!> <!> <!> <!></div>');function bp(t,e){Z(e,!0);const r="100",a=J(()=>F.stats);let s=H(null),i=H("recettes"),o=H(!1),l=H(!1),u=H(Be([])),h=H(Be([])),v=H(!1),g=H(Be([])),p=H(!1);function m(A,ie="recettes"){b(i,ie,!0),b(s,A,!0)}function _(){b(s,null)}function S(A,ie,L){b(u,ie,!0),b(h,L,!0),b(A==="who"?o:l,!0)}function w(A){(!A||A==="who")&&b(o,!1),(!A||A==="store")&&b(l,!1),b(u,[],!0),b(h,[],!0)}function P(A){console.log(`[ProductsTable] Modification groupée réussie: ${A.updatedCount} produits`)}function C(A){const ie=A.filter(L=>F.getProductModelById(L.$id)?.stats.hasMissing);console.log(`[ProductsTable] openGroupPurchaseModal: ${A.length} produits reçus → ${ie.length} produits avec quantités manquantes`),b(g,ie,!0),b(v,!0)}function x(){b(v,!1),b(g,[],!0)}function T(){console.log("[ProductsTable] Achat groupé créé avec succès"),x()}async function $(A,ie){try{if(!F.currentMainId)throw new Error("mainId non disponible");const L=ie.missingQuantities||[];if(L.length===0){console.log("Aucune quantité manquante à valider pour ce produit dans cette période");return}const ae=L.filter(Ae=>Ae.q<0).map(Ae=>({...Ae,q:Math.abs(Ae.q)})).map(Ae=>{const{quantity:Me,unit:ue}=an(Ae.q,Ae.u);return{q:Me,u:ue}});let $e=A.$id;A.isSynced||(console.log(`[ProductsTable] Produit ${A.$id} local, création pour validation rapide...`),$e=(await Ut(A.$id,{},Me=>F.getEnrichedProductById(Me))).$id,console.log(`[ProductsTable] Produit sync créé: ${$e}`)),await No(F.currentMainId,$e,ae,{store:A.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${A.productName}`)}catch(L){console.error("[ProductsTable] Erreur validation rapide:",L),alert("Erreur lors de la validation rapide: "+L.message)}}let M=H(!1);var k=_p(),N=c(k),D=c(N),W=c(D);Gc(W,{class:"mr-1 h-4 w-4"});var Q=d(W),Y=d(D,2);Y.__click=[mp,M];var le=c(Y);Io(le,{class:"mr-1 h-4 w-4"});var z=d(Y,2);z.__click=[gp,p];var j=c(z);kn(j,{class:"mr-1 h-4 w-4"});var q=d(N,2);pp(q,{width:r,children:(A,ie)=>{Af(A,{})},$$slots:{default:!0}});var ee=d(q,2);kh(ee,{onOpenModal:m,onOpenGroupEditModal:S,onOpenGroupPurchaseModal:C,onQuickValidation:$});var U=d(ee,2);{let A=J(()=>n(s)||"");Qv(U,{get productId(){return n(A)},get initialTab(){return n(i)},onClose:_})}var G=d(U,2);{var se=A=>{Hh(A,{get productIds(){return n(u)},get products(){return n(h)},onClose:()=>w("who"),onSuccess:P})};E(G,A=>{n(o)&&A(se)})}var xe=d(G,2);{var me=A=>{Ih(A,{get productIds(){return n(u)},get products(){return n(h)},onClose:()=>w("store"),onSuccess:P})};E(xe,A=>{n(l)&&A(me)})}var re=d(xe,2);{var ne=A=>{ju(A,{get products(){return n(g)},onClose:x,onSuccess:T})};E(re,A=>{n(v)&&A(ne)})}var ce=d(re,2);Qu(ce,{get open(){return n(p)},set open(A){b(p,A,!0)}});var Pe=d(ce,2);vp(Pe,{get isOpen(){return n(M)},set isOpen(A){b(M,A,!0)}}),O(()=>{Ie(k,1,`space-y-6 ${Nr.isMobile?"":"ml-100"}`),I(Q,` ${n(a).total??""}`)}),f(t,k),X()}et(["click"]);Ai();var yp=y('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function wp(t){var e=yp();f(t,e)}var xp=y('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Sp(t,e){var r=xp(),a=d(c(r),2),s=d(c(a),2),i=c(s);O(()=>I(i,e.message)),f(t,r)}var Pp=y('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function $p(t,e){var r=Pp(),a=c(r),s=c(a);aa(s,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=d(s,2),o=d(c(i),2),l=c(o);O(()=>I(l,e.message||"Erreur inconnue")),f(t,r)}function kp(t){t.stopPropagation()}var Ep=(t,e)=>t.key==="Escape"&&e(),Ap=y('<div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert"> </div>'),Tp=y('<div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded" role="status"> </div>'),Mp=(t,e)=>b(e,!1),Np=y('<form><div class="mb-4"><label for="forgot-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="forgot-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center"><button class="text-blue-600 hover:text-blue-800 text-sm">← Retour à la connexion</button></div>',1),Dp=(t,e)=>b(e,!0),Cp=(t,e)=>b(e,!1),Ip=y(`<form><div class="mb-4"><label for="login-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="login-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="login-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="login-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center space-y-2"><button class="text-blue-600 hover:text-blue-800 text-sm">Mot de passe oublié ?</button> <div class="text-sm text-gray-600">Pas encore de compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">S'inscrire</button></div></div>`,1),Op=(t,e)=>b(e,!0),Rp=y('<form><div class="mb-4"><label for="register-name" class="block text-sm font-medium text-gray-700 mb-2">Nom</label> <input id="register-name" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" required/></div> <div class="mb-4"><label for="register-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label> <input id="register-email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="votre@email.com" required/></div> <div class="mb-4"><label for="register-password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label> <input id="register-password" type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required/></div> <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"> </button></form> <div class="mt-4 text-center text-sm text-gray-600">Déjà un compte ? <button class="text-blue-600 hover:text-blue-800 ml-1">Se connecter</button></div>',1),qp=y('<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"><div class="flex items-center justify-between p-6 border-b"><h2 id="modal-title" class="text-xl font-semibold text-gray-900"> </h2> <button class="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Fermer la modale"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="p-6"><!> <!> <!></div></div></div>');function jp(t,e){Z(e,!0);let r=Se(e,"onClose",3,()=>{}),a=Se(e,"onAuthSuccess",3,()=>{}),s=H(!0),i=H(!1),o=H(""),l=H(""),u=H(""),h=H(""),v=H(""),g=H(""),p=H(""),m=H(""),_=H(!1);function S(){if(typeof window<"u"&&window.AppwriteClient)return window.AppwriteClient;throw new Error("AppwriteClient non disponible")}async function w(U){if(U.preventDefault(),!n(u)||!n(h)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{await(await S().getAccount()).createEmailPasswordSession(n(u),n(h)),b(l,"Connexion réussie !"),setTimeout(()=>{a()()},1e3)}catch(G){console.error("Erreur de connexion:",G),b(o,G.message||"Erreur lors de la connexion",!0)}finally{b(i,!1)}}async function P(U){if(U.preventDefault(),!n(v)||!n(g)||!n(p)){b(o,"Veuillez remplir tous les champs");return}b(i,!0),b(o,"");try{const se=await S().getAccount();await se.create("unique()",n(g),n(p),n(v)),await se.createEmailPasswordSession(n(g),n(p)),b(l,"Compte créé et connecté !"),setTimeout(()=>{a()()},1e3)}catch(G){console.error("Erreur d'inscription:",G),b(o,G.message||"Erreur lors de la création du compte",!0)}finally{b(i,!1)}}async function C(U){if(U.preventDefault(),!n(m)){b(o,"Veuillez entrer votre email");return}b(i,!0),b(o,"");try{await(await S().getAccount()).createRecovery(n(m),`${window.location.origin}/reset-password`),b(l,"Email de réinitialisation envoyé !"),setTimeout(()=>{b(_,!1),b(m,"")},2e3)}catch(G){console.error("Erreur mot de passe oublié:",G),b(o,G.message||"Erreur lors de l'envoi de l'email",!0)}finally{b(i,!1)}}function x(){n(i)||r()()}It(()=>{(n(s)||n(_))&&(b(o,""),b(l,""))});var T=qp();T.__click=x,T.__keydown=[Ep,x];var $=c(T);$.__click=[kp];var M=c($),k=c(M),N=c(k),D=d(k,2);D.__click=x;var W=d(M,2),Q=c(W);{var Y=U=>{var G=Ap(),se=c(G);O(()=>I(se,n(o))),f(U,G)};E(Q,U=>{n(o)&&U(Y)})}var le=d(Q,2);{var z=U=>{var G=Tp(),se=c(G);O(()=>I(se,n(l))),f(U,G)};E(le,U=>{n(l)&&U(z)})}var j=d(le,2);{var q=U=>{var G=Np(),se=R(G),xe=c(se),me=d(c(xe),2),re=d(xe,2),ne=c(re),ce=d(se,2),Pe=c(ce);Pe.__click=[Mp,_],O(()=>{me.disabled=n(i),re.disabled=n(i),I(ne,n(i)?"Envoi...":"Envoyer l'email de réinitialisation"),Pe.disabled=n(i)}),va("submit",se,C),De(me,()=>n(m),A=>b(m,A)),f(U,G)},ee=U=>{var G=te(),se=R(G);{var xe=re=>{var ne=Ip(),ce=R(ne),Pe=c(ce),A=d(c(Pe),2),ie=d(Pe,2),L=d(c(ie),2),ae=d(ie,2),$e=c(ae),Ae=d(ce,2),Me=c(Ae);Me.__click=[Dp,_];var ue=d(Me,2),ke=d(c(ue));ke.__click=[Cp,s],O(()=>{A.disabled=n(i),L.disabled=n(i),ae.disabled=n(i),I($e,n(i)?"Connexion...":"Se connecter"),Me.disabled=n(i),ke.disabled=n(i)}),va("submit",ce,w),De(A,()=>n(u),Ce=>b(u,Ce)),De(L,()=>n(h),Ce=>b(h,Ce)),f(re,ne)},me=re=>{var ne=Rp(),ce=R(ne),Pe=c(ce),A=d(c(Pe),2),ie=d(Pe,2),L=d(c(ie),2),ae=d(ie,2),$e=d(c(ae),2),Ae=d(ae,2),Me=c(Ae),ue=d(ce,2),ke=d(c(ue));ke.__click=[Op,s],O(()=>{A.disabled=n(i),L.disabled=n(i),$e.disabled=n(i),Ae.disabled=n(i),I(Me,n(i)?"Création...":"Créer un compte"),ke.disabled=n(i)}),va("submit",ce,P),De(A,()=>n(v),Ce=>b(v,Ce)),De(L,()=>n(g),Ce=>b(g,Ce)),De($e,()=>n(p),Ce=>b(p,Ce)),f(re,ne)};E(se,re=>{n(s)?re(xe):re(me,!1)},!0)}f(U,G)};E(j,U=>{n(_)?U(q):U(ee,!1)})}O(()=>{I(N,n(_)?"Mot de passe oublié":n(s)?"Connexion":"Inscription"),D.disabled=n(i)}),f(t,T),X()}et(["click","keydown"]);var Lp=(t,e,r)=>e(n(r)),Bp=y('<button class="btn btn-ghost btn-xs btn-square" title="Voir les détails" aria-label="Voir les détails"><!></button>'),zp=(t,e,r)=>e(n(r)),Up=y('<button class="btn btn-ghost btn-sm btn-square" title="Fermer" aria-label="Fermer la notification"><!></button>'),Hp=y('<div><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <div class="flex items-center gap-1"><!> <!></div></div></div>'),Qp=y("<div></div>");function Wp(t,e){Z(e,!0);let r=Se(e,"position",3,"toast-right toast-bottom"),a=Se(e,"padding",3,"md");const s=J(()=>a()==="sm"?"px-2 py-0.5":""),i=J(()=>kt.toasts);function o(v){return v==="success"||v==="info"}function l(v){kt.dismiss(v.id)}function u(v){e.onShowDetails?.({id:v.id,message:v.message,details:v.details})}var h=Qp();it(h,21,()=>n(i),v=>v.id,(v,g)=>{var p=Hp(),m=c(p),_=c(m),S=c(_);{var w=N=>{Lo(N,{class:"h-5 w-5 animate-spin"})};E(S,N=>{n(g).state==="loading"&&N(w)})}var P=d(S,2),C=c(P),x=d(_,2),T=c(x);{var $=N=>{var D=Bp();D.__click=[Lp,u,g];var W=c(D);Oo(W,{class:"h-3 w-3"}),f(N,D)};E(T,N=>{n(g).details&&N($)})}var M=d(T,2);{var k=N=>{var D=Up();D.__click=[zp,l,g];var W=c(D);Ct(W,{class:"ms-1 h-4 w-4"}),f(N,D)};E(M,N=>{(n(g).state==="error"||!o(n(g).state))&&N(k)})}O(()=>{Ie(p,1,`alert alert-${n(g).state??""} max-w-sm ${n(s)??""} shadow-lg ${n(g).state==="error"?"":"alert-soft"}`),I(C,n(g).message)}),f(v,p)}),O(()=>Ie(h,1,`toast ${r()??""} z-50`)),f(t,h),X()}et(["click"]);var Gp=y('<label class="swap swap-rotate"><input type="checkbox" class="theme-controller" value="another"/> <!> <!></label>');function Vp(t){var e=Gp(),r=c(e),a=d(r,2);Uo(a,{class:"swap-on fill-current"});var s=d(a,2);Bo(s,{class:"swap-off fill-current"}),f(t,e)}function Kp(t,e){b(e,!0)}var Jp=y('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),Yp=y('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),Fp=y('<div class="text-base-content/60"> </div>'),Zp=y('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),Xp=y('<div><button class="btn btn-primary btn-sm"><!> Se connecter</button></div>'),eg=y('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),tg=y('<header class="bg-base-300 top-10 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!></main>',1),rg=y('<div class="bg-base-200 min-h-screen"><!>  <!></div> <!>',1);function ag(t,e){Z(e,!0);let r,a=H(null),s=H(!0),i=H(!1),o=H(!1);function l($,M,k){localStorage.setItem("appwrite-user-email",$),localStorage.setItem("appwrite-user-name",M)}async function u(){const $=cs();r=Ec($);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store...");const N=await(await window.AppwriteClient.getAccount()).get();l(N.email,N.name),await F.initialize(r,$)}catch(M){const k=M instanceof Error?M.message:"Erreur lors de l'initialisation";b(a,k,!0),console.error("[App] Erreur initialisation:",M)}finally{b(s,!1)}}so(async()=>{await u()});async function h(){b(o,!1),b(s,!0),b(a,null),await u()}Nl(()=>{F.destroy()});async function v(){if(!(!r||n(i))){b(i,!0);try{const $=cs();await F.forceReload(r,$)}catch($){console.error("[App] Erreur lors du rechargement forcé:",$)}finally{b(i,!1)}}}const g=J(()=>n(a)||F.error),p=J(()=>n(s)||F.loading);var m=rg(),_=R(m),S=c(_);Wp(S,{});var w=d(S,2);{var P=$=>{wp($)},C=$=>{var M=tg(),k=R(M),N=c(k),D=c(N),W=d(c(D),2),Q=c(W);{var Y=L=>{var ae=Jp();f(L,ae)};E(Q,L=>{F.realtimeConnected&&L(Y)})}var le=d(Q,2);{var z=L=>{var ae=Yp();f(L,ae)};E(le,L=>{F.syncing&&L(z)})}var j=d(le,2);{var q=L=>{var ae=Fp(),$e=c(ae);O(Ae=>I($e,`Maj: ${Ae??""}`),[()=>new Date(F.lastSync).toLocaleTimeString()]),f(L,ae)};E(j,L=>{F.lastSync&&L(q)})}var ee=d(j,2);Vp(ee);var U=d(ee,2);{var G=L=>{var ae=Zp();let $e;ae.__click=v;var Ae=c(ae);au(Ae,{class:"h-4 w-4"}),O(Me=>{$e=Ie(ae,1,"btn btn-outline btn-sm",null,$e,Me),ae.disabled=n(i)||F.loading},[()=>({loading:n(i)||F.loading})]),f(L,ae)};E(U,L=>{n(a)||L(G)})}var se=d(U,2);{var xe=L=>{var ae=Xp(),$e=c(ae);$e.__click=[Kp,o];var Ae=c($e);Yc(Ae,{class:"mr-2 h-4 w-4"}),f(L,ae)};E(se,L=>{n(a)&&L(xe)})}var me=d(k,2),re=c(me);{var ne=L=>{$p(L,{get message(){return n(g)}})},ce=L=>{var ae=te(),$e=R(ae);{var Ae=Me=>{Sp(Me,{get message(){return n(g)}})};E($e,Me=>{n(g)&&Me(Ae)},!0)}f(L,ae)};E(re,L=>{n(a)?L(ne):L(ce,!1)})}var Pe=d(re,2);{var A=L=>{bp(L,{})},ie=L=>{var ae=te(),$e=R(ae);{var Ae=Me=>{var ue=eg();f(Me,ue)};E($e,Me=>{!F.loading&&!n(a)&&Me(Ae)},!0)}f(L,ae)};E(Pe,L=>{F.enrichedProducts.length>0?L(A):L(ie,!1)})}f($,M)};E(w,$=>{n(p)?$(P):$(C,!1)})}var x=d(_,2);{var T=$=>{jp($,{onClose:()=>b(o,!1),onAuthSuccess:h})};E(x,$=>{n(o)&&$(T)})}f(t,m),X()}et(["click"]);const Go=document.getElementById("app_products");if(!Go)throw new Error("Élément target non trouvé: #app_products");fl(ag,{target:Go});
