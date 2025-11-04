(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const co=!1;var ua=Array.isArray,Ki=Array.prototype.indexOf,ss=Array.from,Va=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,Yi=Object.getOwnPropertyDescriptors,Ji=Object.prototype,Zi=Array.prototype,uo=Object.getPrototypeOf,Ps=Object.isExtensible;function Pn(e){return typeof e=="function"}const ee=()=>{};function Xi(e){for(var t=0;t<e.length;t++)e[t]()}function vo(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function fo(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const yt=2,os=4,is=8,Cr=16,er=32,Mr=64,ls=128,Tt=256,sa=512,vt=1024,Pt=2048,hr=4096,Dt=8192,Dr=16384,cs=32768,Rr=65536,$s=1<<17,Fi=1<<18,dn=1<<19,el=1<<20,Wa=1<<21,da=1<<22,Ar=1<<23,Tr=Symbol("$state"),po=Symbol("legacy props"),tl=Symbol(""),Tn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function ho(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function rl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function nl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function al(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ol(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function il(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ll(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function cl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ul(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function dl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const va=1,fa=2,_o=4,vl=8,fl=16,pl=1,hl=2,_l=4,ml=8,gl=16,bl=1,yl=2,Fe=Symbol(),wl="http://www.w3.org/1999/xhtml",xl="http://www.w3.org/2000/svg",Sl="@attach";function Pl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function $l(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let El=!1;function mo(e){return e===this.v}function go(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function kl(e,t){return e!==t}function bo(e){return!go(e,this.v)}let vn=!1,Nl=!1;function Al(){vn=!0}let Qe=null;function en(e){Qe=e}function Q(e,t=!1,r){Qe={p:Qe,c:null,e:null,s:e,x:null,l:vn&&!t?{s:null,u:null,$:[]}:null}}function H(e){var t=Qe,r=t.e;if(r!==null){t.e=null;for(var n of r)Ro(n)}return Qe=t.p,{}}function fn(){return!vn||Qe!==null&&Qe.l===null}let kr=[];function yo(){var e=kr;kr=[],Xi(e)}function Ft(e){if(kr.length===0&&!In){var t=kr;queueMicrotask(()=>{t===kr&&yo()})}kr.push(e)}function Tl(){for(;kr.length>0;)yo()}const Il=new WeakMap;function wo(e){var t=me;if(t===null)return xe.f|=Ar,e;if((t.f&cs)===0){if((t.f&ls)===0)throw!t.parent&&e instanceof Error&&xo(e),e;t.b.error(e)}else tn(e,t)}function tn(e,t){for(;t!==null;){if((t.f&ls)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&xo(e),e}function xo(e){const t=Il.get(e);t&&(Va(e,"message",{value:t.message}),Va(e,"stack",{value:t.stack}))}const Xn=new Set;let De=null,ea=null,Ua=new Set,Vt=[],pa=null,Ga=!1,In=!1;class At{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#i=[];#s=[];#o=[];#n=[];#a=[];#d=[];skipped_effects=new Set;process(t){Vt=[],ea=null;var r=At.apply(this);for(const i of t)this.#v(i);if(this.#c===0){this.#f();var n=this.#s,a=this.#o;this.#s=[],this.#o=[],this.#n=[],ea=this,De=null,Es(n),Es(a),ea=null,this.#u?.resolve()}else this.#l(this.#s),this.#l(this.#o),this.#l(this.#n);r();for(const i of this.#i)On(i);this.#i=[]}#v(t){t.f^=vt;for(var r=t.first;r!==null;){var n=r.f,a=(n&(er|Mr))!==0,i=a&&(n&vt)!==0,o=i||(n&Dt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){a?r.f^=vt:(n&os)!==0?this.#o.push(r):(n&vt)===0&&((n&da)!==0&&r.b?.is_pending()?this.#i.push(r):wa(r)&&((r.f&Cr)!==0&&this.#n.push(r),On(r)));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#l(t){for(const r of t)((r.f&Pt)!==0?this.#a:this.#d).push(r),pt(r,vt);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){De=this}deactivate(){De=null}flush(){if(Vt.length>0){if(this.activate(),So(),De!==null&&De!==this)return}else this.#c===0&&this.#f();this.deactivate();for(const t of Ua)if(Ua.delete(t),t(),De!==null)break}#f(){for(const t of this.#r)t();if(this.#r.clear(),Xn.size>1){this.#e.clear();let t=!0;for(const r of Xn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;Po(n)}if(Vt.length>0){De=r;const n=At.apply(r);for(const a of Vt)r.#v(a);Vt=[],n()}}De=null}Xn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#a)pt(t,Pt),Ir(t);for(const t of this.#d)pt(t,hr),Ir(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=vo()).promise}static ensure(){if(De===null){const t=De=new At;Xn.add(De),In||At.enqueue(()=>{De===t&&t.flush()})}return De}static enqueue(t){Ft(t)}static apply(t){return ee}}function Cl(e){var t=In;In=!0;try{for(var r;;){if(Tl(),Vt.length===0&&(De?.flush(),Vt.length===0))return pa=null,r;So()}}finally{In=t}}function So(){var e=Xr;Ga=!0;try{var t=0;for(Ts(!0);Vt.length>0;){var r=At.ensure();if(t++>1e3){var n,a;Ml()}r.process(Vt),dr.clear()}}finally{Ga=!1,Ts(e),pa=null}}function Ml(){try{ol()}catch(e){tn(e,pa)}}let $r=null;function Es(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Dr|Dt))===0&&wa(n)&&($r=[],On(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?jo(n):n.fn=null),$r?.length>0)){dr.clear();for(const a of $r)On(a);$r=[]}}$r=null}}function Po(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&yt)!==0?Po(t):(r&(da|Cr))!==0&&(pt(t,Pt),Ir(t))}}function Ir(e){for(var t=pa=e;t.parent!==null;){t=t.parent;var r=t.f;if(Ga&&t===me&&(r&Cr)!==0)return;if((r&(Mr|er))!==0){if((r&vt)===0)return;t.f^=vt}}Vt.push(t)}function $o(e){let t=0,r=fr(0),n;return()=>{Kl()&&(s(r),ba(()=>(t===0&&(n=pn(()=>e(()=>Wt(r)))),t+=1,()=>{Ft(()=>{t-=1,t===0&&(n?.(),n=void 0,Wt(r))})})))}}var Dl=Rr|dn|ls;function Rl(e,t,r){new Ol(e,t,r)}class Ol{parent;#e=!1;#r;#c=null;#u;#i;#s;#o=null;#n=null;#a=null;#d=null;#v=0;#l=0;#f=!1;#p=null;#h=()=>{this.#p&&rn(this.#p,this.#v)};#x=$o(()=>(this.#p=fr(this.#v),()=>{this.#p=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#i=n,this.parent=me.b,this.#e=!!this.#u.pending,this.#s=nr(()=>{me.b=this;{try{this.#o=ot(()=>n(this.#r))}catch(a){this.error(a)}this.#l>0?this.#g():this.#e=!1}},Dl)}#t(){try{this.#o=ot(()=>this.#i(this.#r))}catch(t){this.error(t)}this.#e=!1}#S(){const t=this.#u.pending;t&&(this.#n=ot(()=>t(this.#r)),At.enqueue(()=>{this.#o=this.#m(()=>(At.ensure(),ot(()=>this.#i(this.#r)))),this.#l>0?this.#g():(Yt(this.#n,()=>{this.#n=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#m(t){var r=me,n=xe,a=Qe;Ut(this.#s),bt(this.#s),en(this.#s.ctx);try{return t()}catch(i){return wo(i),null}finally{Ut(r),bt(n),en(a)}}#g(){const t=this.#u.pending;this.#o!==null&&(this.#d=document.createDocumentFragment(),ql(this.#o,this.#d)),this.#n===null&&(this.#n=ot(()=>t(this.#r)))}#b(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#b(t);return}this.#l+=t,this.#l===0&&(this.#e=!1,this.#n&&Yt(this.#n,()=>{this.#n=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),Ft(()=>{At.ensure().flush()}))}update_pending_count(t){this.#b(t),this.#v+=t,Ua.add(this.#h)}get_effect_pending(){return this.#x(),s(this.#p)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#f||!r&&!n)throw t;this.#o&&(ct(this.#o),this.#o=null),this.#n&&(ct(this.#n),this.#n=null),this.#a&&(ct(this.#a),this.#a=null);var a=!1,i=!1;const o=()=>{if(a){$l();return}a=!0,i&&dl(),At.ensure(),this.#v=0,this.#a!==null&&Yt(this.#a,()=>{this.#a=null}),this.#e=this.has_pending_snippet(),this.#o=this.#m(()=>(this.#f=!1,ot(()=>this.#i(this.#r)))),this.#l>0?this.#g():this.#e=!1};var l=xe;try{bt(null),i=!0,r?.(t,o),i=!1}catch(u){tn(u,this.#s&&this.#s.parent)}finally{bt(l)}n&&Ft(()=>{this.#a=this.#m(()=>{this.#f=!0;try{return ot(()=>{n(this.#r,()=>t,()=>o)})}catch(u){return tn(u,this.#s.parent),null}finally{this.#f=!1}})})}}function ql(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:zn(r);t.append(r),r=a}}function Eo(e,t,r){const n=fn()?ha:us;if(t.length===0){r(e.map(n));return}var a=De,i=me,o=jl();Promise.all(t.map(l=>Bl(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(u){(i.f&Dr)===0&&tn(u,i)}a?.deactivate(),ko()}).catch(l=>{tn(l,i)})}function jl(){var e=me,t=xe,r=Qe,n=De;return function(){Ut(e),bt(t),en(r),n?.activate()}}function ko(){Ut(null),bt(null),en(null)}function ha(e){var t=yt|Pt,r=xe!==null&&(xe.f&yt)!==0?xe:null;return me===null||r!==null&&(r.f&Tt)!==0?t|=Tt:me.f|=dn,{ctx:Qe,deps:null,effects:null,equals:mo,f:t,fn:e,reactions:null,rv:0,v:Fe,wv:0,parent:r??me,ac:null}}function Bl(e,t){let r=me;r===null&&rl();var n=r.b,a=void 0,i=fr(Fe),o=!xe,l=new Map;return Jl(()=>{var u=vo();a=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(h){u.reject(h)}var v=De,p=n.is_pending();o&&(n.update_pending_count(1),p||(v.increment(),l.get(v)?.reject(Tn),l.set(v,u)));const m=(h,_=void 0)=>{p||v.activate(),_?_!==Tn&&(i.f|=Ar,rn(i,_)):((i.f&Ar)!==0&&(i.f^=Ar),rn(i,h)),o&&(n.update_pending_count(-1),p||v.decrement()),ko()};u.promise.then(m,h=>m(null,h||"unknown"))}),vs(()=>{for(const u of l.values())u.reject(Tn)}),new Promise(u=>{function v(p){function m(){p===a?u(i):v(a)}p.then(m,m)}v(a)})}function G(e){const t=ha(e);return zo(t),t}function us(e){const t=ha(e);return t.equals=bo,t}function No(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)ct(t[r])}}function Ll(e){for(var t=e.parent;t!==null;){if((t.f&yt)===0)return t;t=t.parent}return null}function ds(e){var t,r=me;Ut(Ll(e));try{No(e),t=Go(e)}finally{Ut(r)}return t}function Ao(e){var t=ds(e);if(e.equals(t)||(e.v=t,e.wv=Wo()),!Or){var r=(cr||(e.f&Tt)!==0)&&e.deps!==null?hr:vt;pt(e,r)}}const dr=new Map;function fr(e,t){var r={f:0,v:e,reactions:null,equals:mo,rv:0,wv:0};return r}function K(e,t){const r=fr(e);return zo(r),r}function zl(e,t=!1,r=!0){const n=fr(e);return t||(n.equals=bo),vn&&r&&Qe!==null&&Qe.l!==null&&(Qe.l.s??=[]).push(n),n}function E(e,t,r=!1){xe!==null&&(!Mt||(xe.f&$s)!==0)&&fn()&&(xe.f&(yt|Cr|da|$s))!==0&&!Jt?.includes(e)&&ul();let n=r?Be(t):t;return rn(e,n)}function rn(e,t){if(!e.equals(t)){var r=e.v;Or?dr.set(e,t):dr.set(e,r),e.v=t;var n=At.ensure();n.capture(e,r),(e.f&yt)!==0&&((e.f&Pt)!==0&&ds(e),pt(e,(e.f&Tt)===0?vt:hr)),e.wv=Wo(),To(e,Pt),fn()&&me!==null&&(me.f&vt)!==0&&(me.f&(er|Mr))===0&&(Nt===null?Fl([e]):Nt.push(e))}return t}function Wt(e){E(e,e.v+1)}function To(e,t){var r=e.reactions;if(r!==null)for(var n=fn(),a=r.length,i=0;i<a;i++){var o=r[i],l=o.f;if(!(!n&&o===me)){var u=(l&Pt)===0;u&&pt(o,t),(l&yt)!==0?To(o,hr):u&&((l&Cr)!==0&&$r!==null&&$r.push(o),Ir(o))}}}function Be(e){if(typeof e!="object"||e===null||Tr in e)return e;const t=uo(e);if(t!==Ji&&t!==Zi)return e;var r=new Map,n=ua(e),a=K(0),i=Zt,o=l=>{if(Zt===i)return l();var u=xe,v=Zt;bt(null),Cs(i);var p=l();return bt(u),Cs(v),p};return n&&r.set("length",K(e.length)),new Proxy(e,{defineProperty(l,u,v){(!("value"in v)||v.configurable===!1||v.enumerable===!1||v.writable===!1)&&ll();var p=r.get(u);return p===void 0?p=o(()=>{var m=K(v.value);return r.set(u,m),m}):E(p,v.value,!0),!0},deleteProperty(l,u){var v=r.get(u);if(v===void 0){if(u in l){const p=o(()=>K(Fe));r.set(u,p),Wt(a)}}else E(v,Fe),Wt(a);return!0},get(l,u,v){if(u===Tr)return e;var p=r.get(u),m=u in l;if(p===void 0&&(!m||ur(l,u)?.writable)&&(p=o(()=>{var _=Be(m?l[u]:Fe),g=K(_);return g}),r.set(u,p)),p!==void 0){var h=s(p);return h===Fe?void 0:h}return Reflect.get(l,u,v)},getOwnPropertyDescriptor(l,u){var v=Reflect.getOwnPropertyDescriptor(l,u);if(v&&"value"in v){var p=r.get(u);p&&(v.value=s(p))}else if(v===void 0){var m=r.get(u),h=m?.v;if(m!==void 0&&h!==Fe)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return v},has(l,u){if(u===Tr)return!0;var v=r.get(u),p=v!==void 0&&v.v!==Fe||Reflect.has(l,u);if(v!==void 0||me!==null&&(!p||ur(l,u)?.writable)){v===void 0&&(v=o(()=>{var h=p?Be(l[u]):Fe,_=K(h);return _}),r.set(u,v));var m=s(v);if(m===Fe)return!1}return p},set(l,u,v,p){var m=r.get(u),h=u in l;if(n&&u==="length")for(var _=v;_<m.v;_+=1){var g=r.get(_+"");g!==void 0?E(g,Fe):_ in l&&(g=o(()=>K(Fe)),r.set(_+"",g))}if(m===void 0)(!h||ur(l,u)?.writable)&&(m=o(()=>K(void 0)),E(m,Be(v)),r.set(u,m));else{h=m.v!==Fe;var b=o(()=>Be(v));E(m,b)}var y=Reflect.getOwnPropertyDescriptor(l,u);if(y?.set&&y.set.call(p,v),!h){if(n&&typeof u=="string"){var $=r.get("length"),M=Number(u);Number.isInteger(M)&&M>=$.v&&E($,M+1)}Wt(a)}return!0},ownKeys(l){s(a);var u=Reflect.ownKeys(l).filter(m=>{var h=r.get(m);return h===void 0||h.v!==Fe});for(var[v,p]of r)p.v!==Fe&&!(v in l)&&u.push(v);return u},setPrototypeOf(){cl()}})}function ks(e){try{if(e!==null&&typeof e=="object"&&Tr in e)return e[Tr]}catch{}return e}function Io(e,t){return Object.is(ks(e),ks(t))}var Ns,Co,Mo,Do;function Vl(){if(Ns===void 0){Ns=window,Co=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Mo=ur(t,"firstChild").get,Do=ur(t,"nextSibling").get,Ps(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Ps(r)&&(r.__t=void 0)}}function tr(e=""){return document.createTextNode(e)}function nn(e){return Mo.call(e)}function zn(e){return Do.call(e)}function c(e,t){return nn(e)}function L(e,t=!1){{var r=nn(e);return r instanceof Comment&&r.data===""?zn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=zn(n);return n}function Wl(e){e.textContent=""}function _a(){return!1}function Ul(e,t){if(t){const r=document.body;e.autofocus=!0,Ft(()=>{document.activeElement===r&&e.focus()})}}let As=!1;function Gl(){As||(As=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function ma(e){var t=xe,r=me;bt(null),Ut(null);try{return e()}finally{bt(t),Ut(r)}}function ga(e,t,r,n=r){e.addEventListener(t,()=>ma(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Gl()}function Ql(e){me===null&&xe===null&&sl(),xe!==null&&(xe.f&Tt)!==0&&me===null&&al(),Or&&nl()}function Hl(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function rr(e,t,r,n=!0){var a=me;a!==null&&(a.f&Dt)!==0&&(e|=Dt);var i={ctx:Qe,deps:null,nodes_start:null,nodes_end:null,f:e|Pt,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{On(i),i.f|=cs}catch(u){throw ct(i),u}else t!==null&&Ir(i);if(n){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&dn)===0&&(o=o.first),o!==null&&(o.parent=a,a!==null&&Hl(o,a),xe!==null&&(xe.f&yt)!==0&&(e&Mr)===0)){var l=xe;(l.effects??=[]).push(o)}}return i}function Kl(){return xe!==null&&!Mt}function vs(e){const t=rr(is,null,!1);return pt(t,vt),t.teardown=e,t}function Vn(e){Ql();var t=me.f,r=!xe&&(t&er)!==0&&(t&cs)===0;if(r){var n=Qe;(n.e??=[]).push(e)}else return Ro(e)}function Ro(e){return rr(os|el,e,!1)}function Yl(e){At.ensure();const t=rr(Mr|dn,e,!0);return(r={})=>new Promise(n=>{r.outro?Yt(t,()=>{ct(t),n(void 0)}):(ct(t),n(void 0))})}function fs(e){return rr(os,e,!1)}function Jl(e){return rr(da|dn,e,!0)}function ba(e,t=0){return rr(is|t,e,!0)}function q(e,t=[],r=[]){Eo(t,r,n=>{rr(is,()=>e(...n.map(s)),!0)})}function nr(e,t=0){var r=rr(Cr|t,e,!0);return r}function ot(e,t=!0){return rr(er|dn,e,!0,t)}function Oo(e){var t=e.teardown;if(t!==null){const r=Or,n=xe;Is(!0),bt(null);try{t.call(null)}finally{Is(r),bt(n)}}}function qo(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&ma(()=>{a.abort(Tn)});var n=r.next;(r.f&Mr)!==0?r.parent=null:ct(r,t),r=n}}function Zl(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&er)===0&&ct(t),t=r}}function ct(e,t=!0){var r=!1;(t||(e.f&Fi)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Xl(e.nodes_start,e.nodes_end),r=!0),qo(e,t&&!r),oa(e,0),pt(e,Dr);var n=e.transitions;if(n!==null)for(const i of n)i.stop();Oo(e);var a=e.parent;a!==null&&a.first!==null&&jo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Xl(e,t){for(;e!==null;){var r=e===t?null:zn(e);e.remove(),e=r}}function jo(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Yt(e,t){var r=[];ps(e,r,!0),Bo(r,()=>{ct(e),t&&t()})}function Bo(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function ps(e,t,r){if((e.f&Dt)===0){if(e.f^=Dt,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var a=n.next,i=(n.f&Rr)!==0||(n.f&er)!==0;ps(n,t,i?r:!1),n=a}}}function ya(e){Lo(e,!0)}function Lo(e,t){if((e.f&Dt)!==0){e.f^=Dt,(e.f&vt)===0&&(pt(e,Pt),Ir(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&Rr)!==0||(r.f&er)!==0;Lo(r,a?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let Xr=!1;function Ts(e){Xr=e}let Or=!1;function Is(e){Or=e}let xe=null,Mt=!1;function bt(e){xe=e}let me=null;function Ut(e){me=e}let Jt=null;function zo(e){xe!==null&&(Jt===null?Jt=[e]:Jt.push(e))}let ft=null,St=0,Nt=null;function Fl(e){Nt=e}let Vo=1,Rn=0,Zt=Rn;function Cs(e){Zt=e}let cr=!1;function Wo(){return++Vo}function wa(e){var t=e.f;if((t&Pt)!==0)return!0;if((t&hr)!==0){var r=e.deps,n=(t&Tt)!==0;if(r!==null){var a,i,o=(t&sa)!==0,l=n&&me!==null&&!cr,u=r.length;if((o||l)&&(me===null||(me.f&Dr)===0)){var v=e,p=v.parent;for(a=0;a<u;a++)i=r[a],(o||!i?.reactions?.includes(v))&&(i.reactions??=[]).push(v);o&&(v.f^=sa),l&&p!==null&&(p.f&Tt)===0&&(v.f^=Tt)}for(a=0;a<u;a++)if(i=r[a],wa(i)&&Ao(i),i.wv>e.wv)return!0}(!n||me!==null&&!cr)&&pt(e,vt)}return!1}function Uo(e,t,r=!0){var n=e.reactions;if(n!==null&&!Jt?.includes(e))for(var a=0;a<n.length;a++){var i=n[a];(i.f&yt)!==0?Uo(i,t,!1):t===i&&(r?pt(i,Pt):(i.f&vt)!==0&&pt(i,hr),Ir(i))}}function Go(e){var t=ft,r=St,n=Nt,a=xe,i=cr,o=Jt,l=Qe,u=Mt,v=Zt,p=e.f;ft=null,St=0,Nt=null,cr=(p&Tt)!==0&&(Mt||!Xr||xe===null),xe=(p&(er|Mr))===0?e:null,Jt=null,en(e.ctx),Mt=!1,Zt=++Rn,e.ac!==null&&(ma(()=>{e.ac.abort(Tn)}),e.ac=null);try{e.f|=Wa;var m=e.fn,h=m(),_=e.deps;if(ft!==null){var g;if(oa(e,St),_!==null&&St>0)for(_.length=St+ft.length,g=0;g<ft.length;g++)_[St+g]=ft[g];else e.deps=_=ft;if(!cr||(p&yt)!==0&&e.reactions!==null)for(g=St;g<_.length;g++)(_[g].reactions??=[]).push(e)}else _!==null&&St<_.length&&(oa(e,St),_.length=St);if(fn()&&Nt!==null&&!Mt&&_!==null&&(e.f&(yt|hr|Pt))===0)for(g=0;g<Nt.length;g++)Uo(Nt[g],e);return a!==null&&a!==e&&(Rn++,Nt!==null&&(n===null?n=Nt:n.push(...Nt))),(e.f&Ar)!==0&&(e.f^=Ar),h}catch(b){return wo(b)}finally{e.f^=Wa,ft=t,St=r,Nt=n,xe=a,cr=i,Jt=o,en(l),Mt=u,Zt=v}}function ec(e,t){let r=t.reactions;if(r!==null){var n=Ki.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&yt)!==0&&(ft===null||!ft.includes(t))&&(pt(t,hr),(t.f&(Tt|sa))===0&&(t.f^=sa),No(t),oa(t,0))}function oa(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)ec(e,r[n])}function On(e){var t=e.f;if((t&Dr)===0){pt(e,vt);var r=me,n=Xr;me=e,Xr=!0;try{(t&Cr)!==0?Zl(e):qo(e),Oo(e);var a=Go(e);e.teardown=typeof a=="function"?a:null,e.wv=Vo;var i;co&&Nl&&(e.f&Pt)!==0&&e.deps}finally{Xr=n,me=r}}}async function tc(){await Promise.resolve(),Cl()}function s(e){var t=e.f,r=(t&yt)!==0;if(xe!==null&&!Mt){var n=me!==null&&(me.f&Dr)!==0;if(!n&&!Jt?.includes(e)){var a=xe.deps;if((xe.f&Wa)!==0)e.rv<Rn&&(e.rv=Rn,ft===null&&a!==null&&a[St]===e?St++:ft===null?ft=[e]:(!cr||!ft.includes(e))&&ft.push(e));else{(xe.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[xe]:i.includes(xe)||i.push(xe)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&Tt)===0&&(o.f^=Tt)}if(Or){if(dr.has(e))return dr.get(e);if(r){o=e;var u=o.v;return((o.f&vt)===0&&o.reactions!==null||Qo(o))&&(u=ds(o)),dr.set(o,u),u}}else r&&(o=e,wa(o)&&Ao(o));if((e.f&Ar)!==0)throw e.v;return e.v}function Qo(e){if(e.v===Fe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(dr.has(t)||(t.f&yt)!==0&&Qo(t))return!0;return!1}function pn(e){var t=Mt;try{return Mt=!0,e()}finally{Mt=t}}const rc=-7169;function pt(e,t){e.f=e.f&rc|t}function nc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ac=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function sc(e){return ac.includes(e)}const oc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ic(e){return e=e.toLowerCase(),oc[e]??e}const lc=["touchstart","touchmove"];function cc(e){return lc.includes(e)}const Ho=new Set,Qa=new Set;function Ko(e,t,r,n={}){function a(i){if(n.capture||Nn.call(t,i),!i.cancelBubble)return ma(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Ft(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Ms(e,t,r,n={}){var a=Ko(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function ht(e){for(var t=0;t<e.length;t++)Ho.add(e[t]);for(var r of Qa)r(e)}let Ds=null;function Nn(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],i=a[0]||e.target;Ds=e;var o=0,l=Ds===e&&e.__root;if(l){var u=a.indexOf(l);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var v=a.indexOf(t);if(v===-1)return;u<=v&&(o=u)}if(i=a[o]||e.target,i!==t){Va(e,"currentTarget",{configurable:!0,get(){return i||r}});var p=xe,m=me;bt(null),Ut(null);try{for(var h,_=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var b=i["__"+n];if(b!=null&&(!i.disabled||e.target===i))if(ua(b)){var[y,...$]=b;y.apply(i,[e,...$])}else b.call(i,e)}catch(M){h?_.push(M):h=M}if(e.cancelBubble||g===t||g===null)break;i=g}if(h){for(let M of _)queueMicrotask(()=>{throw M});throw h}}finally{e.__root=t,delete e.currentTarget,bt(p),Ut(m)}}}function Yo(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function an(e,t){var r=me;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function w(e,t){var r=(t&bl)!==0,n=(t&yl)!==0,a,i=!e.startsWith("<!>");return()=>{a===void 0&&(a=Yo(i?e:"<!>"+e),r||(a=nn(a)));var o=n||Co?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=nn(o),u=o.lastChild;an(l,u)}else an(o,o);return o}}function uc(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=Yo(a),l=nn(o);i=nn(l)}var u=i.cloneNode(!0);return an(u,u),u}}function dc(e,t){return uc(e,t,"svg")}function at(e=""){{var t=tr(e+"");return an(t,t),t}}function Y(){var e=document.createDocumentFragment(),t=document.createComment(""),r=tr();return e.append(t,r),an(t,r),e}function f(e,t){e!==null&&e.before(t)}function R(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function vc(e,t){return fc(e,t)}const Kr=new Map;function fc(e,{target:t,anchor:r,props:n={},events:a,context:i,intro:o=!0}){Vl();var l=new Set,u=m=>{for(var h=0;h<m.length;h++){var _=m[h];if(!l.has(_)){l.add(_);var g=cc(_);t.addEventListener(_,Nn,{passive:g});var b=Kr.get(_);b===void 0?(document.addEventListener(_,Nn,{passive:g}),Kr.set(_,1)):Kr.set(_,b+1)}}};u(ss(Ho)),Qa.add(u);var v=void 0,p=Yl(()=>{var m=r??t.appendChild(tr());return Rl(m,{pending:()=>{}},h=>{if(i){Q({});var _=Qe;_.c=i}a&&(n.$$events=a),v=e(h,n)||{},i&&H()}),()=>{for(var h of l){t.removeEventListener(h,Nn);var _=Kr.get(h);--_===0?(document.removeEventListener(h,Nn),Kr.delete(h)):Kr.set(h,_)}Qa.delete(u),m!==r&&m.parentNode?.removeChild(m)}});return pc.set(v,p),v}let pc=new WeakMap;function T(e,t,r=!1){var n=e,a=null,i=null,o=Fe,l=r?Rr:0,u=!1;const v=(_,g=!0)=>{u=!0,h(g,_)};var p=null;function m(){p!==null&&(p.lastChild.remove(),n.before(p),p=null);var _=o?a:i,g=o?i:a;_&&ya(_),g&&Yt(g,()=>{o?i=null:a=null})}const h=(_,g)=>{if(o!==(o=_)){var b=_a(),y=n;if(b&&(p=document.createDocumentFragment(),p.append(y=tr())),o?a??=g&&ot(()=>g(y)):i??=g&&ot(()=>g(y)),b){var $=De,M=o?a:i,P=o?i:a;M&&$.skipped_effects.delete(M),P&&$.skipped_effects.add(P),$.add_callback(m)}else m()}};nr(()=>{u=!1,t(v),u||h(null,null)},l)}function hc(e,t,r){var n=e,a=Fe,i,o,l=null,u=fn()?kl:go;function v(){i&&Yt(i),l!==null&&(l.lastChild.remove(),n.before(l),l=null),i=o}nr(()=>{if(u(a,a=t())){var p=n,m=_a();m&&(l=document.createDocumentFragment(),l.append(p=tr())),o=ot(()=>r(p)),m?De.add_callback(v):v()}})}function sn(e,t){return t}function _c(e,t,r){for(var n=e.items,a=[],i=t.length,o=0;o<i;o++)ps(t[o].e,a,!0);var l=i>0&&a.length===0&&r!==null;if(l){var u=r.parentNode;Wl(u),u.append(r),n.clear(),zt(e,t[0].prev,t[i-1].next)}Bo(a,()=>{for(var v=0;v<i;v++){var p=t[v];l||(n.delete(p.k),zt(e,p.prev,p.next)),ct(p.e,!l)}})}function Ve(e,t,r,n,a,i=null){var o=e,l={flags:t,items:new Map,first:null},u=(t&_o)!==0;if(u){var v=e;o=v.appendChild(tr())}var p=null,m=!1,h=new Map,_=us(()=>{var $=r();return ua($)?$:$==null?[]:ss($)}),g,b;function y(){mc(b,g,l,h,o,a,t,n,r),i!==null&&(g.length===0?p?ya(p):p=ot(()=>i(o)):p!==null&&Yt(p,()=>{p=null}))}nr(()=>{b??=me,g=s(_);var $=g.length;if(!(m&&$===0)){m=$===0;var M,P,x,S;if(_a()){var N=new Set,D=De;for(P=0;P<$;P+=1){x=g[P],S=n(x,P);var C=l.items.get(S)??h.get(S);C?(t&(va|fa))!==0&&Jo(C,x,P,t):(M=Zo(null,l,null,null,x,S,P,a,t,r,!0),h.set(S,M)),N.add(S)}for(const[Z,A]of l.items)N.has(Z)||D.skipped_effects.add(A.e);D.add_callback(y)}else y();s(_)}})}function mc(e,t,r,n,a,i,o,l,u){var v=(o&vl)!==0,p=(o&(va|fa))!==0,m=t.length,h=r.items,_=r.first,g=_,b,y=null,$,M=[],P=[],x,S,N,D;if(v)for(D=0;D<m;D+=1)x=t[D],S=l(x,D),N=h.get(S),N!==void 0&&(N.a?.measure(),($??=new Set).add(N));for(D=0;D<m;D+=1){if(x=t[D],S=l(x,D),N=h.get(S),N===void 0){var C=n.get(S);if(C!==void 0){n.delete(S),h.set(S,C);var Z=y?y.next:g;zt(r,y,C),zt(r,C,Z),Ra(C,Z,a),y=C}else{var A=g?g.e.nodes_start:a;y=Zo(A,r,y,y===null?r.first:y.next,x,S,D,i,o,u)}h.set(S,y),M=[],P=[],g=y.next;continue}if(p&&Jo(N,x,D,o),(N.e.f&Dt)!==0&&(ya(N.e),v&&(N.a?.unfix(),($??=new Set).delete(N))),N!==g){if(b!==void 0&&b.has(N)){if(M.length<P.length){var I=P[0],z;y=I.prev;var ge=M[0],Te=M[M.length-1];for(z=0;z<M.length;z+=1)Ra(M[z],I,a);for(z=0;z<P.length;z+=1)b.delete(P[z]);zt(r,ge.prev,Te.next),zt(r,y,ge),zt(r,Te,I),g=I,y=Te,D-=1,M=[],P=[]}else b.delete(N),Ra(N,g,a),zt(r,N.prev,N.next),zt(r,N,y===null?r.first:y.next),zt(r,y,N),y=N;continue}for(M=[],P=[];g!==null&&g.k!==S;)(g.e.f&Dt)===0&&(b??=new Set).add(g),P.push(g),g=g.next;if(g===null)continue;N=g}M.push(N),y=N,g=N.next}if(g!==null||b!==void 0){for(var Pe=b===void 0?[]:ss(b);g!==null;)(g.e.f&Dt)===0&&Pe.push(g),g=g.next;var be=Pe.length;if(be>0){var de=(o&_o)!==0&&m===0?a:null;if(v){for(D=0;D<be;D+=1)Pe[D].a?.measure();for(D=0;D<be;D+=1)Pe[D].a?.fix()}_c(r,Pe,de)}}v&&Ft(()=>{if($!==void 0)for(N of $)N.a?.apply()}),e.first=r.first&&r.first.e,e.last=y&&y.e;for(var O of n.values())ct(O.e);n.clear()}function Jo(e,t,r,n){(n&va)!==0&&rn(e.v,t),(n&fa)!==0?rn(e.i,r):e.i=r}function Zo(e,t,r,n,a,i,o,l,u,v,p){var m=(u&va)!==0,h=(u&fl)===0,_=m?h?zl(a,!1,!1):fr(a):a,g=(u&fa)===0?o:fr(o),b={i:g,v:_,k:i,a:null,e:null,prev:r,next:n};try{if(e===null){var y=document.createDocumentFragment();y.append(e=tr())}return b.e=ot(()=>l(e,_,g,v),El),b.e.prev=r&&r.e,b.e.next=n&&n.e,r===null?p||(t.first=b):(r.next=b,r.e.next=b.e),n!==null&&(n.prev=b,n.e.prev=b.e),b}finally{}}function Ra(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==null&&i!==n;){var o=zn(i);a.before(i),i=o}}function zt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function re(e,t,...r){var n=e,a=ee,i;nr(()=>{a!==(a=t())&&(i&&(ct(i),i=null),i=ot(()=>a(n,...r)))},Rr)}function Jr(e,t,r){var n=e,a,i,o=null,l=null;function u(){i&&(Yt(i),i=null),o&&(o.lastChild.remove(),n.before(o),o=null),i=l,l=null}nr(()=>{if(a!==(a=t())){var v=_a();if(a){var p=n;v&&(o=document.createDocumentFragment(),o.append(p=tr()),i&&De.skipped_effects.add(i)),l=ot(()=>r(p,a))}v?De.add_callback(u):u()}},Rr)}function gc(e,t,r,n,a,i){var o,l,u=null,v=e,p;nr(()=>{const m=t()||null;var h=xl;m!==o&&(p&&(m===null?Yt(p,()=>{p=null,l=null}):m===l?ya(p):ct(p)),m&&m!==l&&(p=ot(()=>{if(u=document.createElementNS(h,m),an(u,u),n){var _=u.appendChild(tr());n(u,_)}me.nodes_end=u,v.before(u)})),o=m,o&&(l=o))},Rr)}function bc(e,t){var r=void 0,n;nr(()=>{r!==(r=t())&&(n&&(ct(n),n=null),r&&(n=ot(()=>{fs(()=>r(e))})))})}function Xo(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Xo(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function yc(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Xo(e))&&(n&&(n+=" "),n+=t);return n}function Fo(e){return typeof e=="object"?yc(e):e??""}const Rs=[...` 	
\r\f \v\uFEFF`];function wc(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var i=a.length,o=0;(o=n.indexOf(a,o))>=0;){var l=o+i;(o===0||Rs.includes(n[o-1]))&&(l===n.length||Rs.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Os(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var i=e[a];i!=null&&i!==""&&(n+=" "+a+": "+i+r)}return n}function Oa(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function xc(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,u=[];n&&u.push(...Object.keys(n).map(Oa)),a&&u.push(...Object.keys(a).map(Oa));var v=0,p=-1;const b=e.length;for(var m=0;m<b;m++){var h=e[m];if(l?h==="/"&&e[m-1]==="*"&&(l=!1):i?i===h&&(i=!1):h==="/"&&e[m+1]==="*"?l=!0:h==='"'||h==="'"?i=h:h==="("?o++:h===")"&&o--,!l&&i===!1&&o===0){if(h===":"&&p===-1)p=m;else if(h===";"||m===b-1){if(p!==-1){var _=Oa(e.substring(v,p).trim());if(!u.includes(_)){h!==";"&&m++;var g=e.substring(v,m).trim();r+=" "+g+";"}}v=m+1,p=-1}}}}return n&&(r+=Os(n)),a&&(r+=Os(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ae(e,t,r,n,a,i){var o=e.__className;if(o!==r||o===void 0){var l=wc(r,n,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(i&&a!==i)for(var u in i){var v=!!i[u];(a==null||v!==!!a[u])&&e.classList.toggle(u,v)}return i}function qa(e,t={},r,n){for(var a in r){var i=r[a];t[a]!==i&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,n))}}function ei(e,t,r,n){var a=e.__style;if(a!==t){var i=xc(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(qa(e,r?.[0],n[0]),qa(e,r?.[1],n[1],"important")):qa(e,r,n));return n}function ia(e,t,r=!1){if(e.multiple){if(t==null)return;if(!ua(t))return Pl();for(var n of e.options)n.selected=t.includes(Cn(n));return}for(n of e.options){var a=Cn(n);if(Io(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ti(e){var t=new MutationObserver(()=>{ia(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),vs(()=>{t.disconnect()})}function Nr(e,t,r=t){var n=!0;ga(e,"change",a=>{var i=a?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),Cn);else{var l=e.querySelector(i)??e.querySelector("option:not([disabled])");o=l&&Cn(l)}r(o)}),fs(()=>{var a=t();if(ia(e,a,n),n&&a===void 0){var i=e.querySelector(":checked");i!==null&&(a=Cn(i),r(a))}e.__value=a,n=!1}),ti(e)}function Cn(e){return"__value"in e?e.__value:e.value}const $n=Symbol("class"),En=Symbol("style"),ri=Symbol("is custom element"),ni=Symbol("is html");function Sc(e,t){var r=xa(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Fr(e,t){var r=xa(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Pc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function on(e,t,r,n){var a=xa(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[tl]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ai(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function $c(e,t,r,n,a=!1,i=!1){var o=xa(e),l=o[ri],u=!o[ni],v=t||{},p=e.tagName==="OPTION";for(var m in t)m in r||(r[m]=null);r.class?r.class=Fo(r.class):r[$n]&&(r.class=null),r[En]&&(r.style??=null);var h=ai(e);for(const x in r){let S=r[x];if(p&&x==="value"&&S==null){e.value=e.__value="",v[x]=S;continue}if(x==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ae(e,_,S,n,t?.[$n],r[$n]),v[x]=S,v[$n]=r[$n];continue}if(x==="style"){ei(e,S,t?.[En],r[En]),v[x]=S,v[En]=r[En];continue}var g=v[x];if(!(S===g&&!(S===void 0&&e.hasAttribute(x)))){v[x]=S;var b=x[0]+x[1];if(b!=="$$")if(b==="on"){const N={},D="$$"+x;let C=x.slice(2);var y=sc(C);if(nc(C)&&(C=C.slice(0,-7),N.capture=!0),!y&&g){if(S!=null)continue;e.removeEventListener(C,v[D],N),v[D]=null}if(S!=null)if(y)e[`__${C}`]=S,ht([C]);else{let Z=function(A){v[x].call(this,A)};var P=Z;v[D]=Ko(C,e,Z,N)}else y&&(e[`__${C}`]=void 0)}else if(x==="style")on(e,x,S);else if(x==="autofocus")Ul(e,!!S);else if(!l&&(x==="__value"||x==="value"&&S!=null))e.value=e.__value=S;else if(x==="selected"&&p)Pc(e,S);else{var $=x;u||($=ic($));var M=$==="defaultValue"||$==="defaultChecked";if(S==null&&!l&&!M)if(o[x]=null,$==="value"||$==="checked"){let N=e;const D=t===void 0;if($==="value"){let C=N.defaultValue;N.removeAttribute($),N.defaultValue=C,N.value=N.__value=D?C:null}else{let C=N.defaultChecked;N.removeAttribute($),N.defaultChecked=C,N.checked=D?C:!1}}else e.removeAttribute(x);else M||h.includes($)&&(l||typeof S!="string")?(e[$]=S,$ in o&&(o[$]=Fe)):typeof S!="function"&&on(e,$,S)}}}return v}function qs(e,t,r=[],n=[],a,i=!1,o=!1){Eo(r,n,l=>{var u=void 0,v={},p=e.nodeName==="SELECT",m=!1;if(nr(()=>{var _=t(...l.map(s)),g=$c(e,u,_,a,i,o);m&&p&&"value"in _&&ia(e,_.value);for(let y of Object.getOwnPropertySymbols(v))_[y]||ct(v[y]);for(let y of Object.getOwnPropertySymbols(_)){var b=_[y];y.description===Sl&&(!u||b!==u[y])&&(v[y]&&ct(v[y]),v[y]=ot(()=>bc(e,()=>b))),g[y]=b}u=g}),p){var h=e;fs(()=>{ia(h,u.value,!0),ti(h)})}m=!0})}function xa(e){return e.__attributes??={[ri]:e.nodeName.includes("-"),[ni]:e.namespaceURI===wl}}var js=new Map;function ai(e){var t=e.getAttribute("is")||e.nodeName,r=js.get(t);if(r)return r;js.set(t,r=[]);for(var n,a=e,i=Element.prototype;i!==a;){n=Yi(a);for(var o in n)n[o].set&&r.push(o);a=uo(a)}return r}function Re(e,t,r=t){var n=new WeakSet;ga(e,"input",async a=>{var i=a?e.defaultValue:e.value;if(i=Ba(e)?La(i):i,r(i),De!==null&&n.add(De),await tc(),i!==(i=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=i??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),pn(t)==null&&e.value&&(r(Ba(e)?La(e.value):e.value),De!==null&&n.add(De)),ba(()=>{var a=t();if(e===document.activeElement){var i=ea??De;if(n.has(i))return}Ba(e)&&a===La(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}const ja=new Set;function Bs(e,t,r,n,a=n){var i=r.getAttribute("type")==="checkbox",o=e;if(t!==null)for(var l of t)o=o[l]??=[];o.push(r),ga(r,"change",()=>{var u=r.__value;i&&(u=kc(o,u,r.checked)),a(u)},()=>a(i?[]:null)),ba(()=>{var u=n();i?(u=u||[],r.checked=u.includes(r.__value)):r.checked=Io(r.__value,u)}),vs(()=>{var u=o.indexOf(r);u!==-1&&o.splice(u,1)}),ja.has(o)||(ja.add(o),Ft(()=>{o.sort((u,v)=>u.compareDocumentPosition(v)===4?-1:1),ja.delete(o)})),Ft(()=>{})}function Ec(e,t,r=t){ga(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),pn(t)==null&&r(e.checked),ba(()=>{var n=t();e.checked=!!n})}function kc(e,t,r){for(var n=new Set,a=0;a<e.length;a+=1)e[a].checked&&n.add(e[a].__value);return r||n.delete(t),Array.from(n)}function Ba(e){var t=e.type;return t==="number"||t==="range"}function La(e){return e===""?null:+e}let Fn=!1;function Nc(e){var t=Fn;try{return Fn=!1,[e(),Fn]}finally{Fn=t}}const Ac={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function se(e,t,r){return new Proxy({props:e,exclude:t},Ac)}const Tc={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Pn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Pn(a)&&(a=a());const i=ur(a,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Pn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=ur(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===Tr||t===po)return!1;for(let r of e.props)if(Pn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Pn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ie(...e){return new Proxy({props:e},Tc)}function it(e,t,r,n){var a=!vn||(r&hl)!==0,i=(r&ml)!==0,o=(r&gl)!==0,l=n,u=!0,v=()=>(u&&(u=!1,l=o?pn(n):n),l),p;if(i){var m=Tr in e||po in e;p=ur(e,t)?.set??(m&&t in e?P=>e[t]=P:void 0)}var h,_=!1;i?[h,_]=Nc(()=>e[t]):h=e[t],h===void 0&&n!==void 0&&(h=v(),p&&(a&&il(),p(h)));var g;if(a?g=()=>{var P=e[t];return P===void 0?v():(u=!0,P)}:g=()=>{var P=e[t];return P!==void 0&&(l=void 0),P===void 0?l:P},a&&(r&_l)===0)return g;if(p){var b=e.$$legacy;return(function(P,x){return arguments.length>0?((!a||!x||b||_)&&p(x?g():P),P):g()})}var y=!1,$=((r&pl)!==0?ha:us)(()=>(y=!1,g()));i&&s($);var M=me;return(function(P,x){if(arguments.length>0){const S=x?s($):a&&i?Be(P):P;return E($,S),y=!0,l!==void 0&&(l=S),P}return Or&&y||(M.f&Dr)!==0?$.v:s($)})}function si(e){Qe===null&&ho(),vn&&Qe.l!==null?Cc(Qe).m.push(e):Vn(()=>{const t=pn(e);if(typeof t=="function")return t})}function Ic(e){Qe===null&&ho(),si(()=>()=>pn(e))}function Cc(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Mc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Mc);const Dc="modulepreload",Rc=function(e){return"/"+e},Ls={},Oc=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let v=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};var o=v;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");a=v(r.map(p=>{if(p=Rc(p),p in Ls)return;Ls[p]=!0;const m=p.endsWith(".css"),h=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${h}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":Dc,m||(_.as="script"),_.crossOrigin="",_.href=p,u&&_.setAttribute("nonce",u),document.head.appendChild(_),m)return new Promise((g,b)=>{_.addEventListener("load",g),_.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${p}`)))})}))}function i(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return a.then(l=>{for(const u of l||[])u.status==="rejected"&&i(u.reason);return t().catch(i)})};class qc extends Map{#e=new Map;#r=K(0);#c=K(0);#u=Zt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#i(t){return Zt===this.#u?K(t):fr(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#i(0),r.set(t,n);else return s(this.#r),!1}return s(n),!0}forEach(t,r){this.#s(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#i(0),r.set(t,n);else{s(this.#r);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),i=super.get(t),o=super.set(t,r),l=this.#r;if(a===void 0)a=this.#i(0),n.set(t,a),E(this.#c,super.size),Wt(l);else if(i!==r){Wt(a);var u=l.reactions===null?null:new Set(l.reactions),v=u===null||!a.reactions?.every(p=>u.has(p));v&&Wt(l)}return o}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),E(this.#c,super.size),E(n,-1),Wt(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;E(this.#c,0);for(var r of t.values())E(r,-1);Wt(this.#r),t.clear()}}#s(){s(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#i(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#s(),super.values()}entries(){return this.#s(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#c),super.size}}class jc{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class oi{constructor(t){this.generateIdentifier=t,this.kv=new jc}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class Bc extends oi{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function Lc(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function zc(e,t){const r=Lc(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const i=n[a];if(t(i))return i}}function ln(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function ta(e,t){return e.indexOf(t)!==-1}function zs(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class Vc{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return zc(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const Wc=e=>Object.prototype.toString.call(e).slice(8,-1),ii=e=>typeof e>"u",Uc=e=>e===null,qn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Ha=e=>qn(e)&&Object.keys(e).length===0,pr=e=>Array.isArray(e),Gc=e=>typeof e=="string",Qc=e=>typeof e=="number"&&!isNaN(e),Hc=e=>typeof e=="boolean",Kc=e=>e instanceof RegExp,jn=e=>e instanceof Map,Bn=e=>e instanceof Set,li=e=>Wc(e)==="Symbol",Yc=e=>e instanceof Date&&!isNaN(e.valueOf()),Jc=e=>e instanceof Error,Vs=e=>typeof e=="number"&&isNaN(e),Zc=e=>Hc(e)||Uc(e)||ii(e)||Qc(e)||Gc(e)||li(e),Xc=e=>typeof e=="bigint",Fc=e=>e===1/0||e===-1/0,eu=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),tu=e=>e instanceof URL,ci=e=>e.replace(/\./g,"\\."),za=e=>e.map(String).map(ci).join("."),Mn=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let i=e.charAt(a);if(i==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(i==="."){t.push(r),r="";continue}r+=i}const n=r;return t.push(n),t};function Lt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const ui=[Lt(ii,"undefined",()=>null,()=>{}),Lt(Xc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Lt(Yc,"Date",e=>e.toISOString(),e=>new Date(e)),Lt(Jc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Lt(Kc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Lt(Bn,"set",e=>[...e.values()],e=>new Set(e)),Lt(jn,"map",e=>[...e.entries()],e=>new Map(e)),Lt(e=>Vs(e)||Fc(e),"number",e=>Vs(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Lt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Lt(tu,"URL",e=>e.toString(),e=>new URL(e))];function Sa(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const di=Sa((e,t)=>li(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),ru=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),vi=Sa(eu,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=ru[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function fi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const pi=Sa(fi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),hi=Sa((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),nu=[pi,di,hi,vi],Ws=(e,t)=>{const r=zs(nu,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=zs(ui,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},_i={};ui.forEach(e=>{_i[e.annotation]=e});const au=(e,t,r)=>{if(pr(t))switch(t[0]){case"symbol":return di.untransform(e,t,r);case"class":return pi.untransform(e,t,r);case"custom":return hi.untransform(e,t,r);case"typed-array":return vi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=_i[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Zr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function mi(e){if(ta(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(ta(e,"prototype"))throw new Error("prototype is not allowed as a property");if(ta(e,"constructor"))throw new Error("constructor is not allowed as a property")}const su=(e,t)=>{mi(t);for(let r=0;r<t.length;r++){const n=t[r];if(Bn(e))e=Zr(e,+n);else if(jn(e)){const a=+n,i=+t[++r]==0?"key":"value",o=Zr(e,a);switch(i){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},Ka=(e,t,r)=>{if(mi(t),t.length===0)return r(e);let n=e;for(let i=0;i<t.length-1;i++){const o=t[i];if(pr(n)){const l=+o;n=n[l]}else if(qn(n))n=n[o];else if(Bn(n)){const l=+o;n=Zr(n,l)}else if(jn(n)){if(i===t.length-2)break;const u=+o,v=+t[++i]==0?"key":"value",p=Zr(n,u);switch(v){case"key":n=p;break;case"value":n=n.get(p);break}}}const a=t[t.length-1];if(pr(n)?n[+a]=r(n[+a]):qn(n)&&(n[a]=r(n[a])),Bn(n)){const i=Zr(n,+a),o=r(i);i!==o&&(n.delete(i),n.add(o))}if(jn(n)){const i=+t[t.length-2],o=Zr(n,i);switch(+a==0?"key":"value"){case"key":{const u=r(o);n.set(u,n.get(o)),u!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function Ya(e,t,r=[]){if(!e)return;if(!pr(e)){ln(e,(i,o)=>Ya(i,t,[...r,...Mn(o)]));return}const[n,a]=e;a&&ln(a,(i,o)=>{Ya(i,t,[...r,...Mn(o)])}),t(n,r)}function ou(e,t,r){return Ya(t,(n,a)=>{e=Ka(e,a,i=>au(i,n,r))}),e}function iu(e,t){function r(n,a){const i=su(e,Mn(a));n.map(Mn).forEach(o=>{e=Ka(e,o,()=>i)})}if(pr(t)){const[n,a]=t;n.forEach(i=>{e=Ka(e,Mn(i),()=>e)}),a&&ln(a,r)}else ln(t,r);return e}const lu=(e,t)=>qn(e)||pr(e)||jn(e)||Bn(e)||fi(e,t);function cu(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function uu(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,u)=>l.length-u.length));const[i,...o]=a;i.length===0?n=o.map(za):r[za(i)]=o.map(za)}),n?Ha(r)?[n]:[n,r]:Ha(r)?void 0:r}const gi=(e,t,r,n,a=[],i=[],o=new Map)=>{const l=Zc(e);if(!l){cu(e,a,t);const _=o.get(e);if(_)return n?{transformedValue:null}:_}if(!lu(e,r)){const _=Ws(e,r),g=_?{transformedValue:_.value,annotations:[_.type]}:{transformedValue:e};return l||o.set(e,g),g}if(ta(i,e))return{transformedValue:null};const u=Ws(e,r),v=u?.value??e,p=pr(v)?[]:{},m={};ln(v,(_,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const b=gi(_,t,r,n,[...a,g],[...i,e],o);p[g]=b.transformedValue,pr(b.annotations)?m[g]=b.annotations:qn(b.annotations)&&ln(b.annotations,(y,$)=>{m[ci(g)+"."+$]=y})});const h=Ha(m)?{transformedValue:p,annotations:u?[u.type]:void 0}:{transformedValue:p,annotations:u?[u.type,m]:m};return l||o.set(e,h),h};function bi(e){return Object.prototype.toString.call(e).slice(8,-1)}function Us(e){return bi(e)==="Array"}function du(e){if(bi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function vu(e,t,r,n,a){const i={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";i==="enumerable"&&(e[t]=r),a&&i==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Ja(e,t={}){if(Us(e))return e.map(a=>Ja(a,t));if(!du(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,i)=>{if(Us(t.props)&&!t.props.includes(i))return a;const o=e[i],l=Ja(o,t);return vu(a,i,l,e,t.nonenumerable),a},{})}class Se{constructor({dedupe:t=!1}={}){this.classRegistry=new Bc,this.symbolRegistry=new oi(r=>r.description??""),this.customTransformerRegistry=new Vc,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=gi(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const i=uu(r,this.dedupe);return i&&(a.meta={...a.meta,referentialEqualities:i}),a}deserialize(t){const{json:r,meta:n}=t;let a=Ja(r);return n?.values&&(a=ou(a,n.values,this)),n?.referentialEqualities&&(a=iu(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}Se.defaultInstance=new Se;Se.serialize=Se.defaultInstance.serialize.bind(Se.defaultInstance);Se.deserialize=Se.defaultInstance.deserialize.bind(Se.defaultInstance);Se.stringify=Se.defaultInstance.stringify.bind(Se.defaultInstance);Se.parse=Se.defaultInstance.parse.bind(Se.defaultInstance);Se.registerClass=Se.defaultInstance.registerClass.bind(Se.defaultInstance);Se.registerSymbol=Se.defaultInstance.registerSymbol.bind(Se.defaultInstance);Se.registerCustom=Se.defaultInstance.registerCustom.bind(Se.defaultInstance);Se.allowErrorProps=Se.defaultInstance.allowErrorProps.bind(Se.defaultInstance);Se.serialize;Se.deserialize;Se.stringify;Se.parse;Se.registerClass;Se.registerCustom;Se.registerSymbol;Se.allowErrorProps;function fu(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function pu(e,t){return`${e}_${t}`}const hu=typeof window<"u"?window:void 0;function _u(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class mu{#e;#r;constructor(t={}){const{window:r=hu,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=$o(a=>{const i=Ms(r,"focusin",a),o=Ms(r,"focusout",a);return()=>{i(),o()}}))}get current(){return this.#r?.(),this.#e?_u(this.#e):null}}new mu;function gu(e){return typeof e=="function"}function bu(e,t){if(gu(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function yu(e,t){let r=K(null);const n=G(()=>bu(t,250));function a(...i){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let o,l;const u=new Promise((v,p)=>{o=v,l=p});E(r,{timeout:null,runner:null,promise:u,resolve:o,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const o=s(r);E(r,null);try{o.resolve(await e.apply(this,i))}catch(l){o.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),E(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function wu(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),i=e.filter(o=>{const l=new Date(o.dateTimeService);return l>=n&&l<=a});return i.length?Dn(i.flatMap(o=>o.neededConsolidatedForDate)):[]}function An(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function ra(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Dn(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function na(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(u=>Za(u.q.toString(),u.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const u=parseFloat(l.q);isNaN(u)||r.set(l.u,(r.get(l.u)||0)+u)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],i=[];r.forEach((l,u)=>{const v=n.get(u)||0,p=l-v;p>0&&(a.push({q:p,u}),i.push(Za(p.toString(),u)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:a,display:o}}function Yr(e){return e?.length?e.map(t=>Za(t.q.toString(),t.u)).join(" et "):"-"}function Za(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let o=(Math.round(n*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Gs(e){return An(e)}function xu(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Su(e,t){return e[t]?.recipes||[]}function Pu(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([i])=>{const o=new Date(i);return o>=n&&o<=a}).reduce((i,[o,l])=>i+(l.totalAssiettes||0),0)}function $u(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Eu(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function ku(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function Nu(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return xu(t)}function Au(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class k{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}k.equal=(e,t)=>new k("equal",e,t).toString();k.notEqual=(e,t)=>new k("notEqual",e,t).toString();k.lessThan=(e,t)=>new k("lessThan",e,t).toString();k.lessThanEqual=(e,t)=>new k("lessThanEqual",e,t).toString();k.greaterThan=(e,t)=>new k("greaterThan",e,t).toString();k.greaterThanEqual=(e,t)=>new k("greaterThanEqual",e,t).toString();k.isNull=e=>new k("isNull",e).toString();k.isNotNull=e=>new k("isNotNull",e).toString();k.between=(e,t,r)=>new k("between",e,[t,r]).toString();k.startsWith=(e,t)=>new k("startsWith",e,t).toString();k.endsWith=(e,t)=>new k("endsWith",e,t).toString();k.select=e=>new k("select",void 0,e).toString();k.search=(e,t)=>new k("search",e,t).toString();k.orderDesc=e=>new k("orderDesc",e).toString();k.orderAsc=e=>new k("orderAsc",e).toString();k.orderRandom=()=>new k("orderRandom").toString();k.cursorAfter=e=>new k("cursorAfter",void 0,e).toString();k.cursorBefore=e=>new k("cursorBefore",void 0,e).toString();k.limit=e=>new k("limit",void 0,e).toString();k.offset=e=>new k("offset",void 0,e).toString();k.contains=(e,t)=>new k("contains",e,t).toString();k.notContains=(e,t)=>new k("notContains",e,t).toString();k.notSearch=(e,t)=>new k("notSearch",e,t).toString();k.notBetween=(e,t,r)=>new k("notBetween",e,[t,r]).toString();k.notStartsWith=(e,t)=>new k("notStartsWith",e,t).toString();k.notEndsWith=(e,t)=>new k("notEndsWith",e,t).toString();k.createdBefore=e=>new k("createdBefore",void 0,e).toString();k.createdAfter=e=>new k("createdAfter",void 0,e).toString();k.createdBetween=(e,t)=>new k("createdBetween",void 0,[e,t]).toString();k.updatedBefore=e=>new k("updatedBefore",void 0,e).toString();k.updatedAfter=e=>new k("updatedAfter",void 0,e).toString();k.updatedBetween=(e,t)=>new k("updatedBetween",void 0,[e,t]).toString();k.or=e=>new k("or",void 0,e.map(t=>JSON.parse(t))).toString();k.and=e=>new k("and",void 0,e.map(t=>JSON.parse(t))).toString();k.distanceEqual=(e,t,r,n=!0)=>new k("distanceEqual",e,[[t,r,n]]).toString();k.distanceNotEqual=(e,t,r,n=!0)=>new k("distanceNotEqual",e,[[t,r,n]]).toString();k.distanceGreaterThan=(e,t,r,n=!0)=>new k("distanceGreaterThan",e,[[t,r,n]]).toString();k.distanceLessThan=(e,t,r,n=!0)=>new k("distanceLessThan",e,[[t,r,n]]).toString();k.intersects=(e,t)=>new k("intersects",e,[t]).toString();k.notIntersects=(e,t)=>new k("notIntersects",e,[t]).toString();k.crosses=(e,t)=>new k("crosses",e,[t]).toString();k.notCrosses=(e,t)=>new k("notCrosses",e,[t]).toString();k.overlaps=(e,t)=>new k("overlaps",e,[t]).toString();k.notOverlaps=(e,t)=>new k("notOverlaps",e,[t]).toString();k.touches=(e,t)=>new k("touches",e,[t]).toString();k.notTouches=(e,t)=>new k("notTouches",e,[t]).toString();var yi,wi;class cn{static custom(t){return t}static unique(t=7){const r=Au(cn,yi,"m",wi).call(cn);let n="";for(let a=0;a<t;a++){const i=Math.floor(Math.random()*16).toString(16);n+=i}return r+n}}yi=cn,wi=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Qs;(function(e){e.Totp="totp"})(Qs||(Qs={}));var Hs;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Hs||(Hs={}));var Ks;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Ks||(Ks={}));var Ys;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Ys||(Ys={}));var Js;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Js||(Js={}));var Zs;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Zs||(Zs={}));var Xs;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Xs||(Xs={}));var Fs;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Fs||(Fs={}));var eo;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(eo||(eo={}));function xi(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function Rt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Tu(e,t,r=100){try{const{databases:n,config:a}=await Rt(),i=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[k.greaterThan("$updatedAt",t),k.equal("mainId",e),k.limit(r),k.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function Si(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:i}=await Rt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[k.equal("mainId",e),k.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),k.limit(n)])).documents;const o=await a.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[k.greaterThan("$updatedAt",r),k.equal("mainId",e),k.limit(n),k.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const i=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function un(e,t){try{const{databases:r,config:n}=await Rt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function Er(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=xi(n,t),{databases:i,config:o}=await Rt(),l=await i.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function Pi(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await un(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function Xa(e,t){return un(e,{who:t})}async function Fa(e,t){return un(e,{stockReel:t})}async function $i(e){try{const{databases:t,config:r}=await Rt(),i=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:i.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,cn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Ei(e,t){try{const{databases:r,config:n}=await Rt(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),i={...t,products:t.products||a.products},o=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,i);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function ki(e){try{const{databases:t,config:r}=await Rt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Ni(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Rt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[k.equal("$id",e),k.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Ai(e,t={}){let r=null;const n=i=>{const{events:o,payload:l}=i;if(!l)return;const u=o.some(_=>_.includes("products.")),v=o.some(_=>_.includes("purchases.")),p=o.some(_=>_.includes(".create")),m=o.some(_=>_.includes(".update")),h=o.some(_=>_.includes(".delete"));if(u){const _=l;p&&t.onProductCreate?t.onProductCreate(_):m&&t.onProductUpdate?t.onProductUpdate(_):h&&t.onProductDelete&&t.onProductDelete(_.$id)}else if(v){const _=l;p&&t.onPurchaseCreate?t.onPurchaseCreate(_):m&&t.onPurchaseUpdate?t.onPurchaseUpdate(_):h&&t.onPurchaseDelete&&t.onPurchaseDelete(_.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),t.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),t.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function Ti(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Rt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Ii(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await Rt(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function hs(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const i=JSON.parse(a.responseBody);return i.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${i.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",i.error),i}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function Ci(e,t,r,n){return hs({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function Mi(e,t,r,n="replace"){return hs({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function Di(e,t,r,n={}){try{const{databases:a,config:i}=await Rt(),u=await(await window.AppwriteClient.getAccount()).get(),v=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const p of r){const m={products:[t],mainId:e,quantity:p.q,unit:p.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:u.name,price:null,orderDate:null,deliveryDate:null,createdBy:u.$id,invoiceId:n.invoiceId,invoiceTotal:null},h=await a.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.purchases,cn.unique(),m);v.push(h)}return console.log(`[Appwrite Interactions] ${v.length} validations rapides créées pour produit ${t}`),v}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const i=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${i}`)}}const Iu=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:hs,batchUpdateStore:Ci,batchUpdateWho:Mi,createMainDocument:Ii,createPurchase:$i,createQuickValidationPurchases:Di,deletePurchase:ki,enrichedProductToAppwriteProduct:xi,loadMainEventData:Ti,loadPurchasesListByIds:Ni,loadUpdatedPurchases:Tu,subscribeToRealtime:Ai,syncProductsWithPurchases:Si,updateProduct:un,updateProductStock:Fa,updateProductStore:Pi,updateProductWho:Xa,updatePurchase:Ei,upsertProduct:Er},Symbol.toStringTag,{value:"Module"}));async function Cu(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Mu(e,t){const r=Nu(e.byDate),n=Dn(ra([])),{numeric:a,display:i}=na(r,n);return{$id:`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:Yr(r),displayTotalPurchases:"-",displayMissingQuantity:i,totalNeededOverrideParsed:null}}function Du(e,t){return e.map(r=>Mu(r,t))}const to=1e3,Ru=500;class Ou{#e=new qc;#r=K(null);#c=K(!1);#u=K(!1);#i=K(null);#s=K(!1);#o=K(!1);#n=K(Be([]));#a=K(null);#d=K(null);get startDate(){return s(this.#d)}set startDate(t){E(this.#d,t,!0)}#v=K(null);get endDate(){return s(this.#v)}set endDate(t){E(this.#v,t,!0)}#l=null;#f=null;#p=null;#h=null;#x=K(!1);#t=K(Be({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get currentMainId(){return s(this.#r)}get isInitialized(){return s(this.#c)}get loading(){return s(this.#u)}get error(){return s(this.#i)}get allDates(){return s(this.#n)}get syncing(){return s(this.#s)}setDateRange(t,r){this.startDate=t,this.endDate=r}initializeDateRange(){if((!this.startDate||!this.endDate)&&s(this.#n).length>0){const t=[...s(this.#n)].sort();this.startDate=t[0],this.endDate=t[t.length-1]}console.log(`[ProductsStore] Date range initialized: ${this.startDate} - ${this.endDate}`)}get firstDate(){return s(this.#n).length===0?null:[...s(this.#n)].sort()[0]}get lastDate(){return s(this.#n).length===0?null:[...s(this.#n)].sort().pop()}get realtimeConnected(){return s(this.#o)}get hugoContentChanged(){return s(this.#x)}getTotalNeededInRange(t){return this.totalNeededByDateRange.get(t)??[]}getFormattedTotalNeeded(t){const r=this.getTotalNeededInRange(t);return r.length>0?Yr(r):"-"}#S=G(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#S)}set enrichedProducts(t){E(this.#S,t)}#m=G(()=>{if(console.log("[Store] Recalcul totalNeededByDateRange"),this.startDate===this.firstDate&&this.endDate===this.lastDate)return console.log("[Store] Full date range - using totalNeededArray (no calculation)"),new Map(this.enrichedProducts.map(n=>[n.$id,n.totalNeededArray]));const r=new Map;for(const n of this.enrichedProducts)if(n.byDate){const a=Eu(n.byDate),i=wu(a,this.startDate,this.endDate);i.length>0&&r.set(n.$id,i)}return r});get totalNeededByDateRange(){return s(this.#m)}set totalNeededByDateRange(t){E(this.#m,t)}#g=G(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const a=Yr(r);t.set(n,a)}),t});get formattedTotalNeededByDateRange(){return s(this.#g)}set formattedTotalNeededByDateRange(t){E(this.#g,t)}#b=G(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#b)}set stats(t){E(this.#b,t)}#$=G(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#$)}set uniqueStores(t){E(this.#$,t)}#E=G(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#E)}set uniqueWho(t){E(this.#E,t)}#k=G(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#k)}set uniqueProductTypes(t){E(this.#k,t)}#N=G(()=>new Set(this.totalNeededByDateRange.keys()));get relevantProductIds(){return s(this.#N)}set relevantProductIds(t){E(this.#N,t)}#A=G(()=>{const t=this.enrichedProducts.filter(r=>this.#V(r)&&this.relevantProductIds.has(r.$id));return s(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>s(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get displayProducts(){return s(this.#A)}set displayProducts(t){E(this.#A,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#c)&&s(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),E(this.#r,t,!0),this.#l=pu("products-enriched",t),E(this.#i,null);try{if(await this.#D(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await Cu(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),Du(n.ingredients,t).forEach(o=>{this.#e.set(o.$id,o)}),E(this.#n,n.allDates,!0),await Ti(t)||await Ii(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),this.#T()}this.initializeDateRange(),await this.#R(),E(this.#c,!0);const r=this.#z();this.#p=Ai(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw E(this.#i,n,!0),console.error("[ProductsStore]",n,r),r}}async#D(){if(this.#l)try{const t=localStorage.getItem(this.#l);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n,allDates:a}=Se.parse(t);r.forEach(([i,o])=>this.#e.set(i,o)),E(this.#a,n,!0),E(this.#n,a||[],!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}, allDates: ${a?.length||0} dates`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}async#R(){if(s(this.#r)){E(this.#s,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#a)}`);const t=await Si(s(this.#r),{lastSync:s(this.#a),limit:to});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#C(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#a)}`);const{loadUpdatedPurchases:r}=await Oc(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Iu);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#r),s(this.#a),to);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const i=a.products.map(o=>typeof o=="string"?o:o.$id);this.#P(i,a)}})}this.#I(),this.#_(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{E(this.#s,!1)}}}#T(){if(this.#l)try{const t={lastSync:s(this.#a),products:Array.from(this.#e.entries()),allDates:s(this.#n)};localStorage.setItem(this.#l,Se.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}#_(){this.#h&&clearTimeout(this.#h),this.#h=setTimeout(()=>{this.#I(),this.#T(),this.#h=null},Ru)}#I(){E(this.#a,new Date().toISOString(),!0)}#C(t,r){return r?this.#y(t,r):this.#O(t)}#O(t){const r=Dn(ra(t.purchases??[])),n=[],{numeric:a,display:i}=na(n,r),o=An(t.stockReel)??null,l=Yr(r),u=t.store?An(t.store):null,v=o?`${o.quantity} ${o.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:u,stockParsed:o,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:v,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:i,totalNeededOverrideParsed:Gs(t.totalNeededOverride)}}#y(t,r){const n=t.purchases??r.purchases,a=Dn(ra(n??[])),i=Yr(a),{numeric:o,display:l}=na(r.totalNeededArray,a),u=t.stockReel??r.stockReel,v=u?An(u):r.stockParsed,p=t.store??r.store,m=p?An(p):r.storeInfo,h=v?`${v.quantity} ${v.unit}`:i;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:p,stockReel:u,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:m,stockParsed:v,totalPurchasesArray:a,missingQuantityArray:o,stockOrTotalPurchases:h,displayTotalPurchases:i,displayMissingQuantity:l,totalNeededOverrideParsed:Gs(t.totalNeededOverride??r.totalNeededOverride)}}#W(t){t.totalPurchasesArray=Dn(ra(t.purchases??[]));const{numeric:r,display:n}=na(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=Yr(t.totalPurchasesArray)}#U(t){t.length&&(t.forEach(r=>this.#w(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#w(t){const r=this.#e.get(t.$id),n=this.#C(t,r);this.#e.set(t.$id,n)}#q(t){this.#e.delete(t)}async#j(t){if(!t.products?.length){console.warn("[ProductsStore] Purchase créé sans products:",t.$id);return}const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#L(r,t)}async#B(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#P(r,t);return}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Ni([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);this.#P(n,r)}}catch(r){console.error("[ProductsStore] Erreur rechargement purchase:",r)}}#M(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#L(t,r){const n=this.#M(r),a=[];t.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.purchases||[];if(!l.some(u=>u.$id===n.$id)){const u=this.#y({...o,purchases:[...l,n],status:"active"},o);a.push(u)}}}),a.forEach(i=>{this.#e.set(i.$id,i)})}#P(t,r){const n=this.#M(r),a=[];t.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.purchases||[],u=l.findIndex(v=>v.$id===n.$id);if(u>=0){const v=[...l];v[u]=n;const p=this.#y({...o,purchases:v,status:"active"},o);a.push(p)}else{const v=this.#y({...o,purchases:[...l,r],status:"active"},o);a.push(v)}}}),a.forEach(i=>{this.#e.set(i.$id,i)})}#z(){return{onProductCreate:t=>{this.#w(t),this.#_()},onProductUpdate:t=>{this.#w(t),this.#_()},onProductDelete:t=>{this.#q(t),this.#_()},onPurchaseCreate:t=>{this.#j(t),this.#_()},onPurchaseUpdate:t=>{this.#B(t),this.#_()},onPurchaseDelete:t=>{Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t)).forEach(n=>{this.#w(n)}),this.#_()},onConnect:()=>{E(this.#o,!0)},onDisconnect:()=>{E(this.#o,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#V(t){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#t).selectedStores.includes(t.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!t.productType||!s(this.#t).selectedProductTypes.includes(t.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=yu(t=>{s(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#t).selectedProductTypes.indexOf(t);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#t).selectedTemperatures.indexOf(t);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(t){s(this.#t).groupBy=t}toggleStore(t){const r=s(this.#t).selectedStores.indexOf(t);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(t)}toggleWho(t){const r=s(this.#t).selectedWho.indexOf(t);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(t)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(t){s(this.#t).sortColumn===t?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=t,s(this.#t).sortDirection="asc")}clearFilters(){E(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#t).sortColumn],i=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,i=parseFloat(i)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,i=n.purchases?.length||0),a<i?s(this.#t).sortDirection==="asc"?-1:1:a>i?s(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDate?Su(n.byDate,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDate&&n.byDate[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDate?$u(r.byDate):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDate?Object.keys(r.byDate).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?0:Pu(r.byDate,this.startDate,this.endDate)}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?[]:Object.keys(r.byDate).filter(a=>{const i=new Date(a),o=this.startDate?new Date(this.startDate):null,l=this.endDate?new Date(this.endDate):null;return o&&l&&i>=o&&i<=l}).flatMap(a=>r.byDate[a]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){this.clearCache(),await this.initialize(t)}clearCache(){this.#e.clear(),E(this.#n,[],!0),E(this.#a,null),this.#l&&localStorage.removeItem(this.#l),this.#f&&localStorage.removeItem(this.#f),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(a=>{const i=this.#e.get(a);if(i){const o={...i,status:n};this.#e.set(a,o)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#p?.(),this.#p=null,this.#h&&(clearTimeout(this.#h),this.#h=null),console.log("[ProductsStore] Ressources nettoyées")}}const B=new Ou;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const qu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ju=dc("<svg><!><!></svg>");function le(e,t){Q(t,!0);const r=it(t,"color",3,"currentColor"),n=it(t,"size",3,24),a=it(t,"strokeWidth",3,2),i=it(t,"absoluteStrokeWidth",3,!1),o=it(t,"iconNode",19,()=>[]),l=se(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=ju();qs(u,m=>({...qu,...l,width:n(),height:n(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>i()?Number(a())*24/Number(n()):a()]);var v=c(u);Ve(v,17,o,sn,(m,h)=>{var _=G(()=>fo(s(h),2));let g=()=>s(_)[0],b=()=>s(_)[1];var y=Y(),$=L(y);gc($,g,!0,(M,P)=>{qs(M,()=>({...b()}))}),f(m,y)});var p=d(v);re(p,()=>t.children??ee),f(e,u),H()}function es(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];le(e,ie({name:"archive"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Bu(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];le(e,ie({name:"bean"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Lu(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];le(e,ie({name:"beef"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function zu(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];le(e,ie({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Vu(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];le(e,ie({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Ln(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];le(e,ie({name:"check"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Wu(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];le(e,ie({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Uu(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];le(e,ie({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function ro(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];le(e,ie({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Gu(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];le(e,ie({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Qu(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];le(e,ie({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Hu(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];le(e,ie({name:"clock"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Ku(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];le(e,ie({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function _s(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];le(e,ie({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Yu(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];le(e,ie({name:"egg"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Ju(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];le(e,ie({name:"euro"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function ts(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];le(e,ie({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Zu(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];le(e,ie({name:"info"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function no(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];le(e,ie({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Xu(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];le(e,ie({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Fu(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];le(e,ie({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function ed(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];le(e,ie({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function td(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];le(e,ie({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function rd(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];le(e,ie({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function ms(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];le(e,ie({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function nd(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];le(e,ie({name:"moon"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Wn(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];le(e,ie({name:"package"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function ad(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];le(e,ie({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function sd(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];le(e,ie({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function od(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];le(e,ie({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function id(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];le(e,ie({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function ld(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];le(e,ie({name:"rotate-ccw"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function cd(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];le(e,ie({name:"save"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function ud(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];le(e,ie({name:"search"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function rs(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];le(e,ie({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function vr(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];le(e,ie({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function ns(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];le(e,ie({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function la(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];le(e,ie({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Xt(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];le(e,ie({name:"store"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function dd(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];le(e,ie({name:"sun"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function gs(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];le(e,ie({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function vd(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];le(e,ie({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function Pa(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];le(e,ie({name:"user"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function ca(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];le(e,ie({name:"users"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function fd(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];le(e,ie({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function lt(e,t){Q(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];le(e,ie({name:"x"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);re(l,()=>t.children??ee),f(a,o)},$$slots:{default:!0}})),H()}function aa(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Bu};case"animaux":return{displayName:"Viandes et Poissons",icon:Lu};case"legumes":return{displayName:"Fruits et Légumes",icon:Vu};case"sucres":return{displayName:"Sucrées",icon:zu};case"lof":return{displayName:"L.O.F",icon:Yu};case"autres":return{displayName:"Autres",icon:Wu};case"epices":return{displayName:"Assaisonnements",icon:Xu};case"frais":return{displayName:"Produits Frais",icon:id};default:return{displayName:e,icon:Wn}}}function ao(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function $a(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Ea(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function pd(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function hd(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],i=n[t.sortColumn];return a<i?t.sortDirection==="asc"?-1:1:a>i?t.sortDirection==="asc"?1:-1:0}):e}function as(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function so(e){return e?Ea(e):"-"}function _d(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",i=n.unit||"unit",o=`${a}_${i}`;if(!r[o]){const l=as(a);r[o]={status:a,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:md(a)}}return r[o].quantity+=n.quantity||0,r},{});return Object.values(t)}function md(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ShoppingCart";case"pending":return"Clock";case"delivered":return"CircleCheck";case"cancelled":return"CircleX";default:return"Package"}}let oo=()=>localStorage.getItem("appwrite-user-name")||"";function gd(e){let t=K(!1),r=K(null);const n=G(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),B.getEnrichedProductById(e))),a=G(()=>s(n)?.who??[]),i=G(()=>s(n)?.stockParsed??null),o=G(()=>s(n)?.purchases??[]),l=G(()=>s(n)?.byDate?ku(s(n).byDate):[]),u=Be({purchase:{quantity:null,unit:"",store:"",who:oo()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});let v=K(!1);Vn(()=>{!s(n)||s(v)||(u.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,u.purchase.unit=s(n).totalNeededArray[0]?.u??"",u.purchase.store=s(n).storeInfo?.storeName??"",u.purchase.who=oo()??"",u.purchase.status=u.purchase.status||"delivered",u.stock.unit=s(n).totalNeededArray[0]?.u??"",u.store.name=s(n).storeInfo?.storeName??null,u.store.comment=s(n).storeInfo?.storeComment??null,E(v,!0))});let p=K(null);const m=G(()=>s(p)?s(o).find(A=>A.$id===s(p))??null:null);async function h(A,I){E(t,!0),E(r,null);try{const z=await A();return I&&_("success",I),z}catch(z){const ge=z instanceof Error?z.message:"Une erreur est survenue";return E(r,ge,!0),_("error",ge),console.error("[ProductModalState]",z),null}finally{E(t,!1)}}function _(A,I){const z=new CustomEvent("toast",{detail:{type:A,message:I}});window.dispatchEvent(z)}async function g(){s(n)&&await h(async()=>{if(!u.purchase.quantity||!u.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!B.currentMainId)throw new Error("mainId non disponible");const{quantity:A,unit:I}=ao(u.purchase.quantity,u.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await Er(s(n).$id,{},z=>B.getEnrichedProductById(z))),await $i({products:[s(n).$id],mainId:B.currentMainId,unit:I,quantity:A,store:u.purchase.store||null,who:u.purchase.who||null,notes:u.purchase.notes||"",price:u.purchase.price||null,status:u.purchase.status||"delivered",orderDate:u.purchase.orderDate||null,deliveryDate:u.purchase.deliveryDate||null}),u.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:u.purchase.store,who:u.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function b(A){E(p,A.$id,!0)}function y(){E(p,null)}async function $(A){A.$id&&await h(async()=>{const{quantity:I,unit:z}=ao(A.quantity,A.unit);await Ei(A.$id,{unit:z,quantity:I,store:A.store||null,who:A.who||null,notes:A.notes||"",price:A.price||null,status:A.status||null,orderDate:A.orderDate||null,deliveryDate:A.deliveryDate||null}),E(p,null)},"Achat modifié avec succès")}async function M(A){const I=s(o).find(z=>z.$id===A);I&&confirm(`Supprimer cet achat (${I.quantity} ${I.unit}) ?`)&&await h(async()=>{await ki(A)},"Achat supprimé avec succès")}async function P(){s(n)&&await h(async()=>{if(!u.stock.quantity||!u.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const A={quantity:u.stock.quantity.toString(),unit:u.stock.unit,notes:u.stock.notes,dateTime:u.stock.dateTime};s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await Fa(s(n).$id,JSON.stringify(A))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await Er(s(n).$id,{stockReel:JSON.stringify(A)},I=>B.getEnrichedProductById(I))),u.stock.quantity=null,u.stock.notes="",u.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function x(){s(n)&&confirm("Supprimer le stock actuel ?")&&await h(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, suppression stock normal...`),await Fa(s(n).$id,null)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, suppression stock avec upsert...`),await Er(s(n).$id,{stockReel:null},A=>B.getEnrichedProductById(A)))},"Stock supprimé")}async function S(A){!s(n)||!A.trim()||await h(async()=>{if(s(a).includes(A))throw new Error("Ce volontaire est déjà ajouté");const I=[...s(a),A.trim()];s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update normal...`),await Xa(s(n).$id,I)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création avec upsert...`),await Er(s(n).$id,{who:I},z=>B.getEnrichedProductById(z)))},"Volontaire ajouté")}async function N(A){s(n)&&confirm(`Retirer ${A} ?`)&&await h(async()=>{await Xa(s(n).$id,s(a).filter(I=>I!==A))},"Volontaire retiré")}async function D(A){s(n)&&await h(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await Pi(s(n).$id,A)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await Er(s(n).$id,{store:JSON.stringify(A)},I=>B.getEnrichedProductById(I)))},"Magasin mis à jour")}async function C(A){s(n)&&await h(async()=>{await un(s(n).$id,{totalNeededOverride:JSON.stringify(A)})},"Override appliqué")}async function Z(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await h(async()=>{await un(s(n).$id,{totalNeededOverride:null})},"Override supprimé")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockParsed(){return s(i)},get purchasesList(){return s(o)},get editingPurchaseId(){return s(p)},get editingPurchaseData(){return s(m)},forms:u,addPurchase:g,startEditPurchase:b,cancelEditPurchase:y,updateEditedPurchase:$,removePurchase:M,setStock:P,removeStock:x,addVolunteer:S,removeVolunteer:N,updateStore:D,setOverride:C,removeOverride:Z,formatQuantity:$a,formatDate:Ea,formatDisplayQuantity:pd}}function bd(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function yd(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function wd(e,t){t().cancelEditPurchase()}var xd=w('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Sd=w('<span class="loading loading-spinner loading-sm"></span>'),Pd=w('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),$d=w('<span class="loading loading-spinner loading-sm"></span>'),Ed=w('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),kd=(e,t,r)=>t(s(r)),Nd=(e,t,r)=>t(s(r).$id),Ad=w('<span class="loading loading-spinner loading-sm"></span>'),Td=w('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Id=w('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Cd=w(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Md(e,t){Q(t,!0);let r=it(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(F){return F.quantity!==null&&F.quantity!==0&&F.unit?.trim()!==""}function i(F){r().removePurchase(F)}function o(F){r().startEditPurchase(F)}var l=Cd(),u=c(l),v=c(u);vr(v,{class:"h-5 w-5"});var p=d(u,2),m=c(p),h=d(c(m),2),_=c(h),g=c(_);Wn(g,{class:"h-4 w-4 opacity-50"});var b=d(g,2),y=d(_,2),$=c(y);$.value=$.__value="";var M=d($);M.value=M.__value="kg";var P=d(M);P.value=P.__value="gr.";var x=d(P);x.value=x.__value="l.";var S=d(x);S.value=S.__value="ml";var N=d(S);N.value=N.__value="unité";var D=d(N);D.value=D.__value="bottes";var C=d(y,2),Z=c(C);Xt(Z,{class:"h-4 w-4 opacity-50"});var A=d(Z,2),I=d(C,2),z=c(I);Pa(z,{class:"h-4 w-4 opacity-50"});var ge=d(z,2),Te=d(I,2),Pe=d(c(Te),2),be=d(h,2),de=c(be),O=c(de);ms(O,{class:"h-4 w-4 opacity-50"});var te=d(O,2),ye=d(be,2),Ie=c(ye),Oe=c(Ie),Le=c(Oe),et=c(Le);et.value=et.__value="delivered";var pe=d(et);pe.value=pe.__value="ordered";var $e=d(pe);$e.value=$e.__value="requested";var ce=d(Oe,2),Ee=d(Ie,2);{var qe=F=>{var Ce=xd(),He=d(c(Ce),2);Re(He,()=>r().forms.purchase.deliveryDate,Ke=>r().forms.purchase.deliveryDate=Ke),f(F,Ce)};T(Ee,F=>{r().forms.purchase.status==="ordered"&&F(qe)})}var U=d(ye,2),J=c(U);J.__click=[bd,n,r];var j=c(J);{var X=F=>{var Ce=Sd();f(F,Ce)},ne=F=>{var Ce=at("Ajouter l'achat");f(F,Ce)};T(j,F=>{r().loading?F(X):F(ne,!1)})}var je=d(p,2);{var ut=F=>{var Ce=Pd(),He=c(Ce);vr(He,{class:"mx-auto mb-2 h-12 w-12"}),f(F,Ce)},Ze=F=>{var Ce=Id(),He=c(Ce),Ke=d(c(He));Ve(Ke,21,()=>r().purchasesList,tt=>tt.$id,(tt,oe,Ot)=>{var $t=Y(),qt=L($t);{var Ne=W=>{var ue=Ed(),he=c(ue),ke=c(he),Me=c(ke),Ye=d(Me,2),_t=c(Ye);_t.value=_t.__value="kg";var mt=d(_t);mt.value=mt.__value="gr.";var jt=d(mt);jt.value=jt.__value="l.";var dt=d(jt);dt.value=dt.__value="ml";var gt=d(dt);gt.value=gt.__value="unité";var _r=d(gt);_r.value=_r.__value="bottes";var mr=d(he),qr=c(mr),jr=d(mr),Gt=c(jr),Br=d(jr),gr=c(Br),br=c(gr);br.value=br.__value="requested";var ar=d(br);ar.value=ar.__value="ordered";var yr=d(ar);yr.value=yr.__value="delivered";var sr=d(yr);sr.value=sr.__value="cancelled";var Lr=d(Br),wr=c(Lr),zr=d(Lr),hn=c(zr),Vr=d(zr),Et=c(Vr),Qt=d(Vr),_n=c(Qt),Wr=d(Qt),mn=c(Wr),xr=c(mn);xr.__click=[yd,r,a];var ka=c(xr);{var Na=_e=>{var Ge=$d();f(_e,Ge)},V=_e=>{cd(_e,{class:"h-3 w-3"})};T(ka,_e=>{r().loading?_e(Na):_e(V,!1)})}var ve=d(xr,2);ve.__click=[wd,r];var Je=c(ve);lt(Je,{class:"h-3 w-3"}),q(_e=>xr.disabled=_e,[()=>r().loading||!a(s(oe))]),Re(Me,()=>s(oe).quantity,_e=>s(oe).quantity=_e),Nr(Ye,()=>s(oe).unit,_e=>s(oe).unit=_e),Re(qr,()=>s(oe).store,_e=>s(oe).store=_e),Re(Gt,()=>s(oe).who,_e=>s(oe).who=_e),Nr(gr,()=>s(oe).status,_e=>s(oe).status=_e),Re(wr,()=>s(oe).orderDate,_e=>s(oe).orderDate=_e),Re(hn,()=>s(oe).deliveryDate,_e=>s(oe).deliveryDate=_e),Re(Et,()=>s(oe).price,_e=>s(oe).price=_e),Re(_n,()=>s(oe).notes,_e=>s(oe).notes=_e),f(W,ue)},st=W=>{var ue=Td(),he=c(ue),ke=c(he),Me=d(he),Ye=c(Me),_t=d(Me),mt=c(_t),jt=d(_t),dt=c(jt),gt=c(dt),_r=d(jt),mr=c(_r),qr=d(_r),jr=c(qr),Gt=d(qr),Br=c(Gt),gr=d(Gt),br=c(gr),ar=d(gr),yr=c(ar),sr=c(yr);sr.__click=[kd,o,oe];var Lr=c(sr);la(Lr,{class:"h-4 w-4"});var wr=d(sr,2);wr.__click=[Nd,i,oe];var zr=c(wr);{var hn=Et=>{var Qt=Ad();f(Et,Qt)},Vr=Et=>{lt(Et,{class:"h-4 w-4"})};T(zr,Et=>{r().loading?Et(hn):Et(Vr,!1)})}q((Et,Qt,_n,Wr,mn)=>{R(ke,Et),R(Ye,s(oe).store||"-"),R(mt,s(oe).who||"-"),Ae(dt,1,`badge badge-sm ${Qt??""}`),R(gt,_n),R(mr,Wr),R(jr,mn),R(Br,s(oe).price?`${s(oe).price}€`:"-"),R(br,s(oe).notes||"-"),wr.disabled=r().loading},[()=>$a(s(oe).quantity,s(oe).unit),()=>as(s(oe).status).class,()=>as(s(oe).status).text,()=>so(s(oe).orderDate),()=>so(s(oe).deliveryDate)]),f(W,ue)};T(qt,W=>{r().editingPurchaseId===s(oe).$id?W(Ne):W(st,!1)})}f(tt,$t)}),f(F,Ce)};T(je,F=>{r().purchasesList.length===0?F(ut):F(Ze,!1)})}q(F=>{Ae(ce,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),J.disabled=F},[()=>r().loading||!n()]),Re(b,()=>r().forms.purchase.quantity,F=>r().forms.purchase.quantity=F),Nr(y,()=>r().forms.purchase.unit,F=>r().forms.purchase.unit=F),Re(A,()=>r().forms.purchase.store,F=>r().forms.purchase.store=F),Re(ge,()=>r().forms.purchase.who,F=>r().forms.purchase.who=F),Re(Pe,()=>r().forms.purchase.price,F=>r().forms.purchase.price=F),Re(te,()=>r().forms.purchase.notes,F=>r().forms.purchase.notes=F),Nr(Le,()=>r().forms.purchase.status,F=>r().forms.purchase.status=F),f(e,l),H()}ht(["click"]);async function Dd(e,t){await t()?.setStock()}async function Rd(e,t){await t()?.removeStock()}var Od=w('<span class="loading loading-spinner loading-sm"></span>'),qd=w('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),jd=w('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),Bd=w('<span class="loading loading-spinner loading-xs"></span>'),Ld=w('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),zd=w(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Vd(e,t){Q(t,!0);let r=it(t,"modalState",7),n=G(()=>r()&&r().forms&&r().forms.stock.quantity&&r().forms.stock.quantity>0&&r().forms.stock.unit);var a=zd(),i=c(a),o=c(i);es(o,{class:"h-5 w-5"});var l=d(i,2),u=c(l),v=c(u),p=c(v),m=d(v,2),h=c(m),_=c(h);Wn(_,{class:"h-4 w-4 opacity-50"});var g=d(_,2),b=d(h,2),y=c(b);y.value=y.__value="";var $=d(y);$.value=$.__value="kg";var M=d($);M.value=M.__value="gr.";var P=d(M);P.value=P.__value="l.";var x=d(P);x.value=x.__value="ml";var S=d(x);S.value=S.__value="unité";var N=d(S);N.value=N.__value="bottes";var D=d(m,2),C=c(D),Z=d(D,2),A=c(Z);A.__click=[Dd,r];var I=c(A);{var z=de=>{var O=Od();f(de,O)},ge=de=>{var O=at();q(()=>R(O,r().stockParsed?"Mettre à jour":"Ajouter au stock")),f(de,O)};T(I,de=>{r().loading?de(z):de(ge,!1)})}var Te=d(l,2);{var Pe=de=>{var O=qd(),te=c(O);es(te,{class:"mx-auto mb-2 h-12 w-12"}),f(de,O)},be=de=>{var O=Ld(),te=c(O),ye=d(c(te),2),Ie=c(ye),Oe=d(c(Ie),2),Le=c(Oe),et=d(Ie,2),pe=d(c(et),2),$e=c(pe),ce=d(et,2);{var Ee=ne=>{var je=jd(),ut=d(c(je),2),Ze=c(ut);q(()=>R(Ze,r().stockParsed.notes)),f(ne,je)};T(ce,ne=>{r().stockParsed.notes&&ne(Ee)})}var qe=d(ye,2),U=c(qe);U.__click=[Rd,r];var J=c(U);{var j=ne=>{var je=Bd();f(ne,je)},X=ne=>{var je=at("Supprimer le stock");f(ne,je)};T(J,ne=>{r().loading?ne(j):ne(X,!1)})}q(ne=>{R(Le,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),R($e,ne),U.disabled=r().loading},[()=>Ea(r().stockParsed.dateTime)]),f(de,O)};T(Te,de=>{r().stockParsed?de(be,!1):de(Pe)})}q(()=>{R(p,r().stockParsed?"Modifier le stock":"Ajouter un stock"),A.disabled=r().loading||!s(n)}),Re(g,()=>r().forms.stock.quantity,de=>r().forms.stock.quantity=de),Nr(b,()=>r().forms.stock.unit,de=>r().forms.stock.unit=de),Re(C,()=>r().forms.stock.notes,de=>r().forms.stock.notes=de),f(e,a),H()}ht(["click"]);var Wd=(e,t)=>{e.key==="Enter"&&t()},Ud=w("<option> </option>"),Gd=(e,t,r)=>t(r),Qd=w('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs hover:text-error p-0"><!></button></div>'),Hd=w('<span class="loading loading-spinner loading-sm"></span>'),Kd=w('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <label class="input"><!> <input type="text" placeholder="Nom du volontaire" list="volunteers"/> <datalist id="volunteers"></datalist></label> <div class="grid-col mt-6 grid gap-2"><div class="text-base-content/70">Volontaires actuels:</div> <div class="flex flex-wrap gap-2"></div></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function Yd(e,t){Q(t,!0);let r=K("");const n=G(()=>s(r).trim().length>0&&!t.modalState.whoList.includes(s(r).trim()));async function a(){!s(n)||!t.modalState||(await t.modalState.addVolunteer(s(r).trim()),E(r,""))}async function i(x){await t.modalState?.removeVolunteer(x)}var o=Kd(),l=c(o),u=c(l),v=d(c(u),2),p=c(v);Pa(p,{class:"h-4 w-4 opacity-50"});var m=d(p,2);m.__keydown=[Wd,a];var h=d(m,2);Ve(h,21,()=>B.uniqueWho,sn,(x,S)=>{var N=Ud(),D=c(N),C={};q(()=>{R(D,s(S)),C!==(C=s(S))&&(N.value=(N.__value=s(S))??"")}),f(x,N)});var _=d(v,2),g=d(c(_),2);Ve(g,20,()=>t.modalState.whoList,x=>x,(x,S)=>{var N=Qd(),D=c(N),C=d(D);C.__click=[Gd,i,S];var Z=c(C);lt(Z,{class:"h-3 w-3"}),q(()=>{R(D,`${S??""} `),C.disabled=t.modalState.loading}),f(x,N)});var b=d(_,2),y=c(b);y.__click=a;var $=c(y);{var M=x=>{var S=Hd();f(x,S)},P=x=>{var S=at("Ajouter");f(x,S)};T($,x=>{t.modalState.loading?x(M):x(P,!1)})}q(()=>y.disabled=t.modalState.loading||!s(n)),Re(m,()=>s(r),x=>E(r,x)),f(e,o),H()}ht(["keydown","click"]);var Jd=(e,t)=>{e.key==="Enter"&&t()},Zd=w("<option> </option>"),Xd=w('<span class="loading loading-spinner loading-sm"></span>'),Fd=(e,t,r)=>{E(t,""),E(r,"")},ev=w(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/> <datalist id="stores"></datalist></label> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function tv(e,t){Q(t,!0);const r=G(()=>t.modalState?.forms?.store||{name:null,comment:null}),n=G(()=>s(r).name||""),a=G(()=>s(r).comment||"");let i=K(Be(s(n))),o=K(Be(s(a)));const l=G(()=>s(i).trim()!==(s(r).name||"")||s(o).trim()!==(s(r).comment||""));async function u(){if(!s(l))return;const C={storeName:s(i).trim(),storeComment:s(o).trim()};await t.modalState.updateStore(C)}var v=ev(),p=c(v),m=c(p),h=d(c(m),4),_=c(h),g=c(_);Xt(g,{class:"h-4 w-4 opacity-50"});var b=d(g,2);b.__keydown=[Jd,u];var y=d(b,2);Ve(y,21,()=>B.uniqueStores,sn,(C,Z)=>{var A=Zd(),I=c(A),z={};q(()=>{R(I,s(Z)),z!==(z=s(Z))&&(A.value=(A.__value=s(Z))??"")}),f(C,A)});var $=d(_,2),M=d(h,2),P=c(M);P.__click=u;var x=c(P);{var S=C=>{var Z=Xd();f(C,Z)},N=C=>{var Z=at("Mettre à jour");f(C,Z)};T(x,C=>{t.modalState.loading?C(S):C(N,!1)})}var D=d(P,2);D.__click=[Fd,i,o],q(()=>{P.disabled=t.modalState.loading||!s(l),D.disabled=t.modalState.loading}),Re(b,()=>s(i),C=>E(i,C)),Re($,()=>s(o),C=>E(o,C)),f(e,v),H()}ht(["keydown","click"]);async function rv(e,t,r,n,a,i){if(!t.modalState)return;const o={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await t.modalState.setOverride(o),E(i,!1)}async function nv(e,t,r){t.modalState&&(await t.modalState.removeOverride(),E(r,!1))}var av=w('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),sv=w('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),ov=w(" <!>",1),iv=(e,t)=>E(t,!0),lv=w('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),cv=w('<div class="text-error text-sm">Limite de caractères atteinte</div>'),uv=w('<span class="loading loading-spinner loading-sm"></span>'),dv=w('<span class="loading loading-spinner loading-sm"></span>'),vv=w(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div class="form-control"><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),fv=w('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function pv(e,t){Q(t,!0);const r=G(()=>t.modalState.product?.totalNeededOverride),n=G(()=>t.modalState.product?.displayTotalNeeded||[]);let a=K(!1),i=K(Be(t.modalState.product?.totalNeededOverride?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),o=K(Be(t.modalState.product?.totalNeededOverride?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=K(Be(t.modalState.product?.totalNeededOverride?.comment||"")),u=G(()=>s(i)>0&&s(o).trim()!=="");var v=fv(),p=c(v),m=c(p),h=c(m);{var _=b=>{var y=lv(),$=L(y),M=c($),P=d(c(M),2);{var x=A=>{var I=av();f(A,I)};T(P,A=>{s(r)&&A(x)})}var S=d(P,2),N=c(S);{var D=A=>{var I=ov(),z=L(I),ge=d(z);{var Te=Pe=>{var be=sv(),de=c(be);ms(de,{});var O=d(de);q(()=>R(O,` ${s(r).comment??""}`)),f(Pe,be)};T(ge,Pe=>{s(r).comment&&Pe(Te)})}q(Pe=>R(z,`${Pe??""} `),[()=>$a(s(r).totalOverride.q,s(r).totalOverride.u)]),f(A,I)},C=A=>{var I=at();q(()=>R(I,s(n))),f(A,I)};T(N,A=>{s(r)?A(D):A(C,!1)})}var Z=d($,2);Z.__click=[iv,a],f(b,y)},g=b=>{var y=vv(),$=L(y),M=c($),P=c(M);ad(P,{class:"h-4 w-4 opacity-50"});var x=d(P,2),S=d(M,2),N=c(S);N.value=N.__value="";var D=d(N);D.value=D.__value="kg";var C=d(D);C.value=C.__value="gr.";var Z=d(C);Z.value=Z.__value="l.";var A=d(Z);A.value=A.__value="ml";var I=d(A);I.value=I.__value="unité";var z=d(I);z.value=z.__value="bottes";var ge=d($,2),Te=c(ge),Pe=d(c(Te),2),be=d(Pe,2);{var de=ce=>{var Ee=cv();f(ce,Ee)};T(be,ce=>{s(l).length>=250&&ce(de)})}var O=d(ge,2),te=c(O);te.__click=[nv,t,a];var ye=c(te);{var Ie=ce=>{var Ee=uv();f(ce,Ee)},Oe=ce=>{var Ee=at();q(()=>R(Ee,`Réinitialiser le total calculé (${s(n)??""}).`)),f(ce,Ee)};T(ye,ce=>{t.modalState.loading?ce(Ie):ce(Oe,!1)})}var Le=d(te,2);Le.__click=[rv,t,i,o,l,a];var et=c(Le);{var pe=ce=>{var Ee=dv();f(ce,Ee)},$e=ce=>{var Ee=at("Appliquer");f(ce,Ee)};T(et,ce=>{t.modalState.loading?ce(pe):ce($e,!1)})}q(()=>{te.disabled=t.modalState.loading,Le.disabled=t.modalState.loading||!s(u)}),Re(x,()=>s(i),ce=>E(i,ce)),Nr(S,()=>s(o),ce=>E(o,ce)),Re(Pe,()=>s(l),ce=>E(l,ce)),f(b,y)};T(h,b=>{s(a)?b(g,!1):b(_)})}q(()=>Ae(p,1,`card border-base-300 border ${s(a)?"bg-base-200":"bg-base-100"}`)),f(e,v),H()}ht(["click"]);var hv=w('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),_v=w('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),mv=w('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),gv=w('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function bv(e,t){Q(t,!0);const r=G(()=>t.modalState.recipes);var n=gv(),a=L(n);pv(a,{get modalState(){return t.modalState}});var i=d(a,2),o=c(i),l=c(o);_s(l,{class:"h-5 w-5"});var u=d(o,2);{var v=m=>{var h=hv(),_=c(h);Wn(_,{class:"mx-auto mb-2 h-12 w-12"}),f(m,h)},p=m=>{var h=mv(),_=c(h),g=d(c(_));Ve(g,21,()=>s(r),b=>b.r,(b,y)=>{var $=_v(),M=c($),P=c(M),x=d(M),S=c(x),N=d(x),D=c(N);q(C=>{R(P,`${s(y).r??""} (${(s(y).a||"-")??""} c.)`),R(S,`${(s(y).q||s(y).qEq)??""} ${(s(y).u||s(y).uEq)??""}`),R(D,C)},[()=>Ea(s(y).date)]),f(b,$)}),f(m,h)};T(u,m=>{s(r).length===0?m(v):m(p,!1)})}f(e,n),H()}var yv=w('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),wv=w('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),xv=(e,t)=>t("recettes"),Sv=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Pv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),$v=(e,t)=>t("achats"),Ev=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),kv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Nv=(e,t)=>t("stock"),Av=w('<span class="badge badge-sm badge-secondary ml-1">1</span>'),Tv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Iv=(e,t)=>t("volontaires"),Cv=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Mv=w('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Dv=(e,t)=>t("magasins"),Rv=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Ov=w('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div>',1),qv=w('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function jv(e,t){Q(t,!0);let r=it(t,"initialTab",3,"recettes"),n=G(()=>gd(t.productId)),a=K(Be(r()));function i(y){E(a,y,!0)}var o=qv(),l=c(o),u=c(l),v=c(u);{var p=y=>{var $=yv(),M=L($),P=c(M),x=d(M,2),S=c(x),N=c(S),D=d(S,2),C=d(c(D));q(()=>{R(P,s(n).product?.productName),R(N,s(n).product?.productType),R(C,` ${s(n).product?.displayTotalNeeded??""}`)}),f(y,$)},m=y=>{var $=wv();f(y,$)};T(v,y=>{s(n)&&s(n).product?y(p):y(m,!1)})}var h=d(v,2);h.__click=function(...y){t.onClose?.apply(this,y)};var _=c(h);lt(_,{class:"h-4 w-4"});var g=d(u,2);{var b=y=>{var $=Ov(),M=L($),P=c(M);P.__click=[xv,i];var x=c(P);_s(x,{class:"mr-1 h-5 w-5"});var S=d(x,2);{var N=j=>{var X=Sv(),ne=c(X);q(()=>R(ne,s(n).product?.nbRecipes)),f(j,X)},D=j=>{var X=Pv();f(j,X)};T(S,j=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?j(N):j(D,!1)})}var C=d(P,2);C.__click=[$v,i];var Z=c(C);vr(Z,{class:"mr-1 h-5 w-5"});var A=d(Z,2);{var I=j=>{var X=Ev(),ne=c(X);q(()=>R(ne,s(n).purchasesList.length)),f(j,X)},z=j=>{var X=kv();f(j,X)};T(A,j=>{s(n).purchasesList.length>0?j(I):j(z,!1)})}var ge=d(C,2);ge.__click=[Nv,i];var Te=c(ge);es(Te,{class:"mr-1 h-5 w-5"});var Pe=d(Te,2);{var be=j=>{var X=Av();f(j,X)},de=j=>{var X=Tv();f(j,X)};T(Pe,j=>{s(n).stockParsed?j(be):j(de,!1)})}var O=d(ge,2);O.__click=[Iv,i];var te=c(O);ca(te,{class:"mr-1 h-5 w-5"});var ye=d(te,2);{var Ie=j=>{var X=Cv(),ne=c(X);q(()=>R(ne,s(n).product?.who.length)),f(j,X)},Oe=j=>{var X=Mv();f(j,X)};T(ye,j=>{s(n).product?.who&&s(n).product?.who.length>0?j(Ie):j(Oe,!1)})}var Le=d(O,2);Le.__click=[Dv,i];var et=c(Le);Xt(et,{class:"mr-1 h-5 w-5"});var pe=d(M,2),$e=c(pe);{var ce=j=>{var X=Rv(),ne=c(X);lt(ne,{class:"h-4 w-4"});var je=d(ne,2),ut=c(je);q(()=>R(ut,`erreur : ${s(n).error??""}`)),f(j,X)};T($e,j=>{s(n).error&&j(ce)})}var Ee=d($e,2),qe=c(Ee);hc(qe,()=>s(a),j=>{var X=Y(),ne=L(X);{var je=Ze=>{bv(Ze,{get modalState(){return s(n)}})},ut=Ze=>{var F=Y(),Ce=L(F);{var He=tt=>{Md(tt,{get modalState(){return s(n)}})},Ke=tt=>{var oe=Y(),Ot=L(oe);{var $t=Ne=>{Vd(Ne,{get modalState(){return s(n)}})},qt=Ne=>{var st=Y(),W=L(st);{var ue=ke=>{Yd(ke,{get modalState(){return s(n)}})},he=ke=>{var Me=Y(),Ye=L(Me);{var _t=mt=>{tv(mt,{get modalState(){return s(n)}})};T(Ye,mt=>{s(a)==="magasins"&&mt(_t)},!0)}f(ke,Me)};T(W,ke=>{s(a)==="volontaires"?ke(ue):ke(he,!1)},!0)}f(Ne,st)};T(Ot,Ne=>{s(a)==="stock"?Ne($t):Ne(qt,!1)},!0)}f(tt,oe)};T(Ce,tt=>{s(a)==="achats"?tt(He):tt(Ke,!1)},!0)}f(Ze,F)};T(ne,Ze=>{s(a)==="recettes"?Ze(je):Ze(ut,!1)})}f(j,X)});var U=d(pe,2),J=c(U);J.__click=function(...j){t.onClose?.apply(this,j)},q(()=>{Ae(P,1,`tab ${s(a)==="recettes"?"tab-active":""}`),Ae(C,1,`tab ${s(a)==="achats"?"tab-active":""}`),Ae(ge,1,`tab ${s(a)==="stock"?"tab-active":""}`),Ae(O,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),Ae(Le,1,`tab ${s(a)==="magasins"?"tab-active":""}`)}),f(y,$)};T(g,y=>{s(n)&&y(b)})}f(e,o),H()}ht(["click"]);async function Bv(e,t,r,n,a,i,o,l,u){if(!(!s(t)||s(r))){E(r,!0),E(n,null),E(a,null);try{let v;if(s(i)){const p={storeName:o.storeName.trim(),storeComment:o.storeComment.trim()};v=await Ci(l.productIds,l.products,p)}else if(s(u))v=await Mi(l.productIds,l.products,o.whoNames,o.whoMode);else throw new Error("Type d'édition non supporté");E(a,v,!0),v.success?(l.onSuccess?.(v),setTimeout(()=>{l.onClose()},1500)):E(n,v.error||"Erreur lors de la mise à jour",!0)}catch(v){const p=v instanceof Error?v.message:"Erreur inconnue";E(n,p,!0),console.error("[GroupEditModal] Erreur mise à jour:",v)}finally{E(r,!1)}}}function io(e,t,r){s(t)||r.onClose()}var Lv=w('<div class="flex items-center gap-2"><!> <span> </span></div>'),zv=w('<div class="flex items-center gap-2"><!> <span> </span></div>'),Vv=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Wv=w('<div class="alert alert-success mb-4"><!> <span> </span></div>'),Uv=w("<option> </option>"),Gv=w('<div class="space-y-4"><div><label class="label"><span class="label-text">Nom du magasin</span></label> <label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="label"><span class="label-text">Commentaire (optionnel)</span></label> <textarea class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div>'),Qv=(e,t,r)=>t(r),Hv=w('<div class="badge badge-primary badge-lg flex items-center gap-1"><span> </span> <button class="btn btn-xs btn-circle btn-ghost hover:bg-error/20"><!></button></div>'),Kv=w('<div class="mt-2 flex flex-wrap gap-2"></div>'),Yv=(e,t,r)=>t(r),Jv=w('<button class="btn btn-xs btn-soft btn-outline"> </button>'),Zv=w('<div class="mt-3"><div class="mb-1 text-xs opacity-70">Suggestions :</div> <div class="flex flex-wrap gap-1"></div></div>'),Xv=w(`<div class="space-y-4"><div><label class="label"><span class="label-text">Mode d'application</span></label> <div class="join"><input class="join-item btn btn-sm" type="radio" name="who-mode" aria-label="Remplacer"/> <input class="join-item btn btn-sm" type="radio" name="who-mode" aria-label="Ajouter"/></div> <div class="mt-1 text-xs opacity-70"> </div></div> <div><label class="label"><span class="label-text">Volontaires</span></label> <div class="flex gap-2"><input type="text" class="input input-sm flex-1" placeholder="Ajouter un volontaire..."/> <button class="btn btn-sm btn-primary"><!></button></div> <!> <!></div></div>`),Fv=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),ef=w("<!> ",1),tf=w('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><div class="bg-base-200 mb-6 rounded-lg p-4"><h4 class="mb-2 font-medium">État actuel de ce groupe :</h4> <div class="flex flex-wrap gap-4 text-sm"><!> <!> <div class="flex items-center gap-2"><div class="bg-primary h-4 w-4 rounded-full"></div> <span> </span></div></div></div> <!> <!> <!> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function rf(e,t){Q(t,!0);const r=[];let n=K(!1),a=K(null),i=K(null),o=Be({storeName:t.products.length>0&&t.editType==="store"&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"",storeComment:t.products.length>0&&t.editType==="store"&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"",whoNames:t.products.length>0&&t.editType==="who"&&t.products[0].who?[...t.products[0].who]:[],whoMode:"replace"});const l=G(()=>t.editType==="store"),u=G(()=>t.editType==="who"),v=G(()=>s(l)?`Attribuer un magasin (${t.products.length} produits)`:`Gérer les volontaires (${t.products.length} produits)`),p=G(()=>s(l)?o.storeName.trim().length>0:s(u)?o.whoNames.length>0:!1);function m(U){U.trim()&&!o.whoNames.includes(U.trim())&&(o.whoNames=[...o.whoNames,U.trim()])}function h(U){o.whoNames=o.whoNames.filter(J=>J!==U)}const _=G(()=>{const U=new Set(t.products.map(J=>J.storeInfo?.storeName).filter(Boolean));return Array.from(U)}),g=G(()=>{const U=t.products.flatMap(J=>J.who||[]);return new Set(U).size});var b=tf(),y=c(b),$=c(y),M=c($),P=c(M),x=d(M,2);x.__click=[io,n,t];var S=c(x);lt(S,{class:"h-4 w-4"});var N=d($,2),D=c(N),C=d(c(D),2),Z=c(C);{var A=U=>{var J=Lv(),j=c(J);Xt(j,{class:"h-4 w-4"});var X=d(j,2),ne=c(X);q(je=>R(ne,je),[()=>s(_).length>0?`Magasins: ${s(_).join(", ")}`:"Aucun magasin défini"]),f(U,J)};T(Z,U=>{s(l)&&U(A)})}var I=d(Z,2);{var z=U=>{var J=zv(),j=c(J);ca(j,{class:"h-4 w-4"});var X=d(j,2),ne=c(X);q(()=>R(ne,`Volontaires: ${s(g)??""} personne(s)`)),f(U,J)};T(I,U=>{s(u)&&U(z)})}var ge=d(I,2),Te=d(c(ge),2),Pe=c(Te),be=d(D,2);{var de=U=>{var J=Vv(),j=c(J);gs(j,{class:"h-4 w-4"});var X=d(j,2),ne=c(X);q(()=>R(ne,s(a))),f(U,J)};T(be,U=>{s(a)&&U(de)})}var O=d(be,2);{var te=U=>{var J=Wv(),j=c(J);Ln(j,{class:"h-4 w-4"});var X=d(j,2),ne=c(X);q(()=>R(ne,`${s(i).updatedCount??""} produit(s) mis à jour avec succès !`)),f(U,J)};T(O,U=>{s(i)?.success&&U(te)})}var ye=d(O,2);{var Ie=U=>{var J=Gv(),j=c(J),X=d(c(j),2),ne=c(X);Xt(ne,{class:"h-4 w-4 opacity-50"});var je=d(ne,2),ut=d(X,2);Ve(ut,21,()=>B.uniqueStores,sn,(Ce,He)=>{var Ke=Uv(),tt=c(Ke),oe={};q(()=>{R(tt,s(He)),oe!==(oe=s(He))&&(Ke.value=(Ke.__value=s(He))??"")}),f(Ce,Ke)});var Ze=d(j,2),F=d(c(Ze),2);q(()=>{je.disabled=s(n),F.disabled=s(n)}),Re(je,()=>o.storeName,Ce=>o.storeName=Ce),Re(F,()=>o.storeComment,Ce=>o.storeComment=Ce),f(U,J)};T(ye,U=>{s(l)&&U(Ie)})}var Oe=d(ye,2);{var Le=U=>{var J=Xv(),j=c(J),X=d(c(j),2),ne=c(X);ne.value=ne.__value="replace";var je=d(ne,2);je.value=je.__value="add";var ut=d(X,2),Ze=c(ut),F=d(j,2),Ce=d(c(F),2),He=c(Ce);He.__keydown=Ne=>{Ne.key==="Enter"&&(Ne.preventDefault(),m(Ne.currentTarget.value),Ne.currentTarget.value="")};var Ke=d(He,2);Ke.__click=Ne=>{const st=Ne.currentTarget.previousElementSibling;m(st.value),st.value=""};var tt=c(Ke);vd(tt,{class:"h-4 w-4"});var oe=d(Ce,2);{var Ot=Ne=>{var st=Kv();Ve(st,20,()=>o.whoNames,W=>W,(W,ue)=>{var he=Hv(),ke=c(he),Me=c(ke),Ye=d(ke,2);Ye.__click=[Qv,h,ue];var _t=c(Ye);lt(_t,{class:"h-3 w-3"}),q(()=>{R(Me,ue),Ye.disabled=s(n)}),f(W,he)}),f(Ne,st)};T(oe,Ne=>{o.whoNames.length>0&&Ne(Ot)})}var $t=d(oe,2);{var qt=Ne=>{var st=Zv(),W=d(c(st),2);Ve(W,20,()=>B.uniqueWho.slice(0,8),ue=>ue,(ue,he)=>{var ke=Jv();ke.__click=[Yv,m,he];var Me=c(ke);q(Ye=>{ke.disabled=Ye,R(Me,he)},[()=>s(n)||o.whoNames.includes(he)]),f(ue,ke)}),f(Ne,st)};T($t,Ne=>{B.uniqueWho.length>0&&Ne(qt)})}q(()=>{ne.disabled=s(n),je.disabled=s(n),R(Ze,o.whoMode==="replace"?"Remplacera tous les volontaires existants":"Ajoutera aux volontaires existants"),He.disabled=s(n),Ke.disabled=s(n)}),Bs(r,[],ne,()=>o.whoMode,Ne=>o.whoMode=Ne),Bs(r,[],je,()=>o.whoMode,Ne=>o.whoMode=Ne),f(U,J)};T(Oe,U=>{s(u)&&U(Le)})}var et=d(N,2),pe=c(et);pe.__click=[io,n,t];var $e=d(pe,2);$e.__click=[Bv,p,n,a,i,l,o,t,u];var ce=c($e);{var Ee=U=>{var J=Fv();f(U,J)},qe=U=>{var J=ef(),j=L(J);Ln(j,{class:"h-4 w-4"});var X=d(j);q(()=>R(X,` Appliquer à ${t.products.length??""} produit(s)`)),f(U,J)};T(ce,U=>{s(n)?U(Ee):U(qe,!1)})}q(()=>{R(P,s(v)),x.disabled=s(n),R(Pe,`${t.products.length??""} produit(s) concerné(s)`),pe.disabled=s(n),$e.disabled=s(n)||!s(p)}),f(e,b),H()}ht(["click","keydown"]);function nf(e,t){const r=e.reduce((a,i)=>{const o=i.isSynced?0:1,l=i.missingQuantities.length;return a+o+l},0),n=t.invoiceTotal?1:0;return r+n}async function af(e,t){const r=e.filter(o=>!o.isSynced).map(o=>({productId:o.productId,productData:o.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(o){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",o)}const a=e.flatMap(o=>o.missingQuantities.map(l=>({productId:o.productId,quantity:l.q,unit:l.u,status:"delivered",notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:null,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:a},invoiceData:t}}async function sf(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(h=>{h.productData&&(h.productData.mainId=e)});const n=nf(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const a=100,i=[];if(n<=a)i.push(t);else{let h=[],_=0;for(const g of t){const b=(g.isSynced?0:1)+g.missingQuantities.length;_+b>a?(h.length>0&&i.push(h),h=[g],_=b):(h.push(g),_+=b)}h.length>0&&i.push(h)}console.log(`[Appwrite Interactions] Découpage en ${i.length} lots pour respecter la limite de 100 opérations`);const o=[];let l=0,u=0,v=0;for(let h=0;h<i.length;h++){const _=i[h];console.log(`[Appwrite Interactions] Exécution du lot ${h+1}/${i.length} (${_.length} produits)`);try{const g=await af(_,r),b=await of(g);if(o.push(b),b.success)l+=b.productsCreated,u+=b.purchasesCreated,v+=b.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${h+1}: ${b.error}`);break}}catch(g){const b=g instanceof Error?g.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${h+1}:`,g),o.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:b,timestamp:new Date().toISOString()});break}}const p=o.every(h=>h.success),m=o.some(h=>!h.success);return{success:p,results:o,totalProductsCreated:l,totalPurchasesCreated:u,totalExpensesCreated:v,error:m?"Un ou plusieurs lots ont échoué":void 0}}async function of(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const i=JSON.parse(a.responseBody);return i.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${i.productsCreated} produits créés, ${i.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",i.error),i}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var lf=(e,t,r)=>t(s(r).id),cf=w('<div><!> <span class="max-w-32 truncate"> </span> <button class="btn btn-xs btn-circle btn-ghost ml-1 flex-shrink-0 p-0"><!></button></div>'),uf=w('<span class="flex items-center gap-1"><!> </span>'),df=w('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),vf=w('<div class="flex flex-wrap gap-2"></div> <!>',1);function ff(e,t){Q(t,!0);let r=it(t,"badgeSize",3,"badge-lg"),n=it(t,"badgeColor",3,"badge-success"),a=it(t,"badgeStyle",3,"badge-soft"),i=it(t,"onToggleItem",3,()=>{}),o=it(t,"showStats",3,!0),l=K(Be({}));Vn(()=>{const b={};t.items.forEach(y=>{s(l)[y.id]!==void 0?b[y.id]=s(l)[y.id]:b[y.id]=!0}),JSON.stringify(Object.keys(b).sort())!==JSON.stringify(Object.keys(s(l)).sort())&&E(l,b,!0)});function u(b){s(l)[b]=!s(l)[b],i()(b)}const v=G(()=>Object.values(s(l)).filter(Boolean).length),p=G(()=>Object.values(s(l)).filter(b=>!b).length);var m=vf(),h=L(m);Ve(h,21,()=>t.items,b=>b.id,(b,y)=>{const $=G(()=>s(l)[s(y).id]);var M=cf(),P=c(M);{var x=I=>{var z=Y(),ge=L(z);Jr(ge,()=>s(y).icon,(Te,Pe)=>{Pe(Te,{class:"h-3 w-3",get title(){return s(y).title}})}),f(I,z)};T(P,I=>{s(y).icon&&I(x)})}var S=d(P,2),N=c(S),D=d(S,2);D.__click=[lf,u,y];var C=c(D);{var Z=I=>{lt(I,{})},A=I=>{ld(I,{})};T(C,I=>{s($)?I(Z):I(A,!1)})}q(()=>{Ae(M,1,`badge ${r()??""} ${n()??""} flex items-center gap-2 transition-all duration-200
        ${s($)?`${a()}`:"badge-dash opacity-70 hover:opacity-90"}`),R(N,s(y).label),on(D,"title",s($)?"Retirer de la liste":"Réajouter à la liste")}),f(b,M)});var _=d(h,2);{var g=b=>{var y=df(),$=c(y),M=c($),P=c(M);Ln(P,{class:"text-success h-3 w-3"});var x=d(P),S=d(M,2);{var N=Z=>{var A=uf(),I=c(A);lt(I,{class:"text-error h-3 w-3"});var z=d(I);q(()=>R(z,` ${s(p)??""} retirés`)),f(Z,A)};T(S,Z=>{s(p)>0&&Z(N)})}var D=d($,2),C=c(D);q(()=>{R(x,` ${s(v)??""} actifs`),R(C,`Total: ${t.items.length??""} items`)}),f(b,y)};T(_,b=>{o()&&b(g)})}f(e,m),H()}ht(["click"]);function pf(e,t){E(t,!s(t))}var hf=w('<span class="text-base-content font-semibold"> </span>'),_f=w('<div class="text-base-content/80 flex-1"> </div>'),mf=w('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),gf=w('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),bf=w('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function yf(e,t){let r=it(t,"icon",3,Zu),n=it(t,"class",3,""),a=it(t,"initiallyOpen",3,!1),i=r(),o=K(Be(a())),l=Be(t.children);var u=bf(),v=c(u);v.__click=[pf,o];var p=c(v),m=c(p);i(m,{size:24,class:"text-base-content me-4 flex-shrink-0"});var h=d(m,2);{var _=x=>{var S=hf(),N=c(S);q(()=>R(N,t.title)),f(x,S)};T(h,x=>{t.title&&x(_)})}var g=d(p,2);{var b=x=>{var S=_f(),N=c(S);q(()=>R(N,t.contentVisible)),f(x,S)};T(g,x=>{t.contentVisible&&x(b)})}var y=d(g,2);{var $=x=>{var S=mf(),N=c(S),D=c(N);{var C=I=>{var z=at("en savoir plus");f(I,z)},Z=I=>{var z=at("masquer");f(I,z)};T(D,I=>{s(o)?I(Z,!1):I(C)})}var A=d(N,2);{let I=G(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(o)?"rotate-180":""}`);Uu(A,{get class(){return s(I)}})}f(x,S)};T(y,x=>{l&&x($)})}var M=d(v,2);{var P=x=>{var S=gf(),N=c(S),D=c(N);re(D,()=>t.children??ee),q(()=>Ae(S,1,`overflow-hidden transition-all duration-200 ${s(o)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),f(x,S)};T(M,x=>{l&&x(P)})}q(()=>{Ae(u,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),ei(u,t.style),Ae(v,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),on(v,"aria-expanded",s(o))}),f(e,u)}ht(["click"]);async function wf(e,t,r,n,a,i,o,l){if(!(!s(t)||s(r))){E(r,!0),E(n,null),E(a,null);try{const u=`FACTURE_${Date.now()}`,v=s(i).map(_=>_.$id);B.setSyncStatus(v,!0);const p=[];for(const _ of s(i))p.push({productId:_.$id,isSynced:_.isSynced,productData:_,missingQuantities:_.missingQuantityArray||[]});const m={invoiceId:u,invoiceTotal:o.expense||void 0,store:o.store.trim()||void 0,notes:o.notes||`Achat groupé pour ${s(i).length} produits`,who:o.who.trim()||void 0};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${p.length} produits...`),l.onClose();const h=await sf(B.currentMainId,p,m);if(h.success)E(a,{purchases:h.totalPurchasesCreated,expense:h.totalExpensesCreated>0,batches:h.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${h.totalProductsCreated} produits synchronisés, ${h.totalPurchasesCreated} achats créés, ${h.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(h.error||"Erreur lors de la création de l'achat groupé")}catch(u){const v=u instanceof Error?u.message:"Erreur inconnue";E(n,v,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",u),B.clearSyncStatus()}finally{E(r,!1)}}}function lo(e,t,r){s(t)||r.onClose()}var xf=w('<div class="alert alert-error"><!> <span> </span></div>'),Sf=w('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),Pf=w(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),$f=w("<option> </option>"),Ef=w("<option> </option>"),kf=w('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),Nf=w('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Af=w("<!> ",1),Tf=w(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option>Annulé</option></select> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function If(e,t){Q(t,!0);let r=K(!1),n=K(null),a=K(null),i=Be({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),o=K(Be(new Set));Vn(()=>{E(o,new Set(t.products.map(W=>W.$id)),!0)});const l=G(()=>t.products.filter(W=>s(o).has(W.$id))),u=G(()=>s(l).length!==0),v=G(()=>`Achat groupé (${s(l).length} produits sélectionnés)`);function p(W){const ue=new Set(s(o));ue.has(W)?ue.delete(W):ue.add(W),E(o,ue,!0)}const m=G(()=>t.products.map(W=>({id:W.$id,label:W.productName,title:W.productName})));var h=Tf(),_=c(h),g=c(_),b=c(g),y=c(b);vr(y,{class:"h-5 w-5"});var $=d(y),M=d(b,2);M.__click=[lo,r,t];var P=c(M);lt(P,{class:"h-4 w-4"});var x=d(g,2),S=c(x);{var N=W=>{var ue=xf(),he=c(ue);gs(he,{class:"h-4 w-4"});var ke=d(he,2),Me=c(ke);q(()=>R(Me,s(n))),f(W,ue)};T(S,W=>{s(n)&&W(N)})}var D=d(S,2);{var C=W=>{var ue=Sf(),he=c(ue);Ln(he,{class:"h-4 w-4"});var ke=d(he,2),Me=c(ke),Ye=d(Me);{var _t=dt=>{var gt=at("+ 1 dépense globale");f(dt,gt)};T(Ye,dt=>{s(a).expense&&dt(_t)})}var mt=d(Ye,2);{var jt=dt=>{var gt=at();q(()=>R(gt,`(traité en ${s(a).batches??""} lots)`)),f(dt,gt)};T(mt,dt=>{s(a).batches&&s(a).batches>1&&dt(jt)})}q(()=>R(Me,`Achat groupé créé avec succès ! ${s(a).purchases??""} produit(s) validés `)),f(W,ue)};T(D,W=>{s(a)&&W(C)})}var Z=d(D,2),A=c(Z);yf(A,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(W,ue)=>{var he=Pf();f(W,he)},$$slots:{default:!0}});var I=d(Z,2),z=d(c(I),2),ge=c(z),Te=c(ge),Pe=c(Te);Xt(Pe,{class:"h-4 w-4 opacity-50"});var be=d(Pe,2),de=d(Te,2);Ve(de,21,()=>B.uniqueStores,sn,(W,ue)=>{var he=$f(),ke=c(he),Me={};q(()=>{R(ke,s(ue)),Me!==(Me=s(ue))&&(he.value=(he.__value=s(ue))??"")}),f(W,he)});var O=d(ge,2),te=c(O),ye=c(te);Pa(ye,{class:"h-4 w-4 opacity-50"});var Ie=d(ye,2),Oe=d(te,2);Ve(Oe,21,()=>B.uniqueWho,sn,(W,ue)=>{var he=Ef(),ke=c(he),Me={};q(()=>{R(ke,s(ue)),Me!==(Me=s(ue))&&(he.value=(he.__value=s(ue))??"")}),f(W,he)});var Le=d(O,2),et=c(Le),pe=c(et);Ju(pe,{class:"h-4 w-4 opacity-50"});var $e=d(pe,2),ce=d(z,2),Ee=c(ce),qe=c(Ee),U=c(qe);U.value=U.__value="delivered";var J=d(U);J.value=J.__value="ordered";var j=d(J);j.value=j.__value="requested";var X=d(j);X.value=X.__value="cancelled";var ne=d(qe,2),je=d(Ee,2);{var ut=W=>{var ue=kf(),he=c(ue),ke=d(c(he),2);q(()=>ke.disabled=s(r)),Re(ke,()=>i.deliveryDate,Me=>i.deliveryDate=Me),f(W,ue)};T(je,W=>{i.status==="ordered"&&W(ut)})}var Ze=d(ce,2),F=c(Ze),Ce=c(F);ms(Ce,{class:"h-4 w-4 opacity-50"});var He=d(Ce,2),Ke=d(I,2),tt=d(c(Ke),2);ff(tt,{get items(){return s(m)},onToggleItem:p,badgeSize:"badge-md"});var oe=d(Ke,2),Ot=c(oe);Ot.__click=[lo,r,t];var $t=d(Ot,2);$t.__click=[wf,u,r,n,a,l,i,t];var qt=c($t);{var Ne=W=>{var ue=Nf();f(W,ue)},st=W=>{var ue=Af(),he=L(ue);vr(he,{class:"h-4 w-4"});var ke=d(he);q(()=>R(ke,` Valider ${s(l).length??""} produit(s)`)),f(W,ue)};T(qt,W=>{s(r)?W(Ne):W(st,!1)})}q(()=>{R($,` ${s(v)??""}`),M.disabled=s(r),be.disabled=s(r),Ie.disabled=s(r),$e.disabled=s(r),qe.disabled=s(r),Ae(ne,1,`label text-sm ${i.status==="delivered"?"":"hidden"}`),He.disabled=s(r),Ot.disabled=s(r),$t.disabled=s(r)||!s(u)}),Re(be,()=>i.store,W=>i.store=W),Re(Ie,()=>i.who,W=>i.who=W),Re($e,()=>i.expense,W=>i.expense=W),Nr(qe,()=>i.status,W=>i.status=W),Re(He,()=>i.notes,W=>i.notes=W),f(e,h),H()}ht(["click"]);var Cf=()=>B.setGroupBy("none"),Mf=()=>B.setGroupBy("store"),Df=()=>B.setGroupBy("productType"),Rf=(e,t)=>B.toggleProductType(t),Of=w("<button><!> </button>"),qf=()=>B.toggleTemperature("frais"),jf=()=>B.toggleTemperature("surgele"),Bf=()=>B.clearTypeAndTemperatureFilters(),Lf=w('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),zf=(e,t)=>B.toggleStore(t),Vf=w("<button> </button>"),Wf=w('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Uf=(e,t)=>B.toggleWho(t),Gf=w("<button> </button>"),Qf=w('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Hf=(e,t)=>{B.clearFilters(),E(t,!1)},Kf=w('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Yf(e,t){Q(t,!0);let r=K(!1);const n=G(()=>B.filters),a=G(()=>B.uniqueStores),i=G(()=>B.uniqueWho),o=G(()=>B.uniqueProductTypes);var l=Kf(),u=L(l),v=c(u),p=d(v,2),m=d(c(p),2),h=c(m),_=c(h),g=c(_);ts(g,{class:"w-5 h-5"});var b=d(_,2),y=c(b);lt(y,{class:"w-4 h-4"});var $=d(h,2),M=d(c($),2),P=c(M);P.__change=[Cf];var x=d(P,2);x.__change=[Mf];var S=d(x,2);S.__change=[Df];var N=d($,2),D=c(N),C=d(c(D),2);Ve(C,20,()=>s(o),pe=>pe,(pe,$e)=>{const ce=G(()=>aa($e));var Ee=Of();Ee.__click=[Rf,$e];var qe=c(Ee);Jr(qe,()=>s(ce).icon,(J,j)=>{j(J,{class:"w-3 h-3 mr-1"})});var U=d(qe);q(J=>{Ae(Ee,1,`btn btn-sm ${J??""}`),R(U,` ${s(ce).displayName??""}`)},[()=>s(n).selectedProductTypes.length===0?"btn-soft btn-accent":s(n).selectedProductTypes.includes($e)?"btn-accent":"btn-dash btn-accent"]),f(pe,Ee)});var Z=d(C,2),A=c(Z);A.__click=[qf];var I=c(A);rs(I,{class:"w-3 h-3"});var z=d(A,2);z.__click=[jf];var ge=c(z);ns(ge,{class:"w-3 h-3"});var Te=d(z,2);{var Pe=pe=>{var $e=Lf();$e.__click=[Bf];var ce=c($e);lt(ce,{class:"w-3 h-3"}),f(pe,$e)};T(Te,pe=>{(s(n).selectedProductTypes.length>0||s(n).selectedTemperatures.length>0)&&pe(Pe)})}var be=d(N,2);{var de=pe=>{var $e=Wf(),ce=c($e),Ee=d(c(ce),2);Ve(Ee,20,()=>s(a),qe=>qe,(qe,U)=>{var J=Vf();J.__click=[zf,U];var j=c(J);q(X=>{Ae(J,1,`btn btn-sm ${X??""}`),R(j,U)},[()=>s(n).selectedStores.length===0?"btn-soft btn-accent":s(n).selectedStores.includes(U)?"btn-accent":"btn-dash btn-accent"]),f(qe,J)}),f(pe,$e)};T(be,pe=>{s(a).length>0&&pe(de)})}var O=d(be,2);{var te=pe=>{var $e=Qf(),ce=c($e),Ee=d(c(ce),2);Ve(Ee,20,()=>s(i),qe=>qe,(qe,U)=>{var J=Gf();J.__click=[Uf,U];var j=c(J);q(X=>{Ae(J,1,`btn btn-sm ${X??""}`),R(j,U)},[()=>s(n).selectedWho.length===0?"btn-soft btn-accent":s(n).selectedWho.includes(U)?"btn-accent":"btn-dash btn-accent"]),f(qe,J)}),f(pe,$e)};T(O,pe=>{s(i).length>0&&pe(te)})}var ye=d(O,4);ye.__click=[Hf,r];var Ie=c(ye);lt(Ie,{class:"w-4 h-4 mr-2"});var Oe=d(u,2),Le=c(Oe),et=c(Le);ts(et,{class:"w-6 h-6"}),q((pe,$e)=>{Fr(P,s(n).groupBy==="none"),Fr(x,s(n).groupBy==="store"),Fr(S,s(n).groupBy==="productType"),Ae(A,1,`btn btn-sm ${pe??""}`),Ae(z,1,`btn btn-sm ${$e??""}`)},[()=>s(n).selectedTemperatures.length===0?"btn-soft btn-success":s(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(n).selectedTemperatures.length===0?"btn-soft btn-info":s(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Ec(v,()=>s(r),pe=>E(r,pe)),f(e,l),H()}ht(["change","click"]);var Jf=(e,t,r)=>t(r),Zf=w("<button><span> </span> <!></button>"),Xf=(e,t)=>t(),Ff=w('<div class="space-y-4"><div class="space-y-2"><fieldset><legend class="label"><span class="label-text">Dates incluses</span></legend> <div class="flex flex-wrap gap-1"><!> <button class="btn btn-sm btn-primary btn-outline ms-4" type="button"><span>Toutes les dates</span></button></div></fieldset></div></div>');function ep(e,t){Q(t,!0);const n=[...it(t,"allDates",19,()=>[])()].sort();let a=n[0],i=n[n.length-1],o=K(Be(a)),l=K(Be(i));function u(P){s(o)===P&&s(l)===P?h():new Date(P)<new Date(s(o))?E(o,P,!0):(new Date(P)>new Date(s(l))||E(o,P,!0),E(l,P,!0))}function v(P){return new Date(P)>=new Date(s(o))&&new Date(P)<=new Date(s(l))?"btn-soft btn-primary":"btn-dash btn-primary opacity-80"}function p(P){return new Date(P).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function m(P){const S=new Date(P).getUTCHours();return S===12?"sun":S===20?"moon":S===8?"cloud":null}function h(){E(o,a,!0),E(l,i,!0)}Vn(()=>{B.setDateRange(s(o),s(l))});var _=Ff(),g=c(_),b=c(g),y=d(c(b),2),$=c(y);Ve($,18,()=>n,P=>P,(P,x)=>{var S=Zf();S.__click=[Jf,u,x];var N=c(S),D=c(N),C=d(N,2);{var Z=I=>{dd(I,{size:16})},A=I=>{var z=Y(),ge=L(z);{var Te=be=>{nd(be,{size:16})},Pe=be=>{var de=Y(),O=L(de);{var te=ye=>{Ku(ye,{size:16})};T(O,ye=>{m(x)==="cloud"&&ye(te)},!0)}f(be,de)};T(ge,be=>{m(x)==="moon"?be(Te):be(Pe,!1)},!0)}f(I,z)};T(C,I=>{m(x)==="sun"?I(Z):I(A,!1)})}q((I,z)=>{Ae(S,1,`btn btn-sm ${I??""}`),R(D,z)},[()=>v(x),()=>p(x)]),f(P,S)});var M=d($,2);M.__click=[Xf,h],f(e,_),H()}ht(["click"]);const kn=e=>{var t=rp(),r=c(t);la(r,{class:"h-4 w-4 text-amber-600"}),f(e,t)};function tp(){}var rp=w('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),np=()=>B.clearFilters(),ap=e=>B.setSearchQuery(e.currentTarget.value),sp=()=>B.setGroupBy("none"),op=()=>B.setGroupBy("store"),ip=()=>B.setGroupBy("productType"),lp=(e,t)=>B.toggleProductType(t),cp=w("<button><!> </button>"),up=()=>B.toggleTemperature("frais"),dp=()=>B.toggleTemperature("surgele"),vp=()=>B.clearTypeAndTemperatureFilters(),fp=w('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),pp=w('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),hp=(e,t)=>B.toggleStore(t),_p=w("<button><!> </button>"),mp=()=>B.clearStoreFilters(),gp=w('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),bp=w('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),yp=(e,t)=>B.toggleWho(t),wp=w("<button><!> </button>"),xp=()=>B.clearWhoFilters(),Sp=w('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Pp=w('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),$p=()=>B.handleSort("productName"),Ep=()=>B.handleSort("store"),kp=()=>B.handleSort("who"),Np=()=>B.handleSort("productType"),Ap=w('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Tp=(e,t,r)=>t("store",r().map(n=>n.$id),r()),Ip=(e,t,r)=>t("who",r().map(n=>n.$id),r()),Cp=(e,t,r)=>t(r()),Mp=w(`<button class="btn btn-sm btn-success btn-soft" title="Ouvrir le modal d'achat groupé"><!> Achat groupé <!></button>`),Dp=w('<tr class="bg-base-200 sticky top-11 z-10 font-semibold"><td colspan="7" class="py-3"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!></div> <div class="flex items-center gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> Magasin <!></button> <button class="btn btn-sm btn-info btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> Volontaires <!></button> <!></div></div></td></tr>'),Rp=(e,t,r)=>t(s(r).$id,"recettes"),Op=w('<div class="flex items-center gap-1 text-blue-600" title="Synchronisation en cours..."><!></div>'),qp=w('<div class="text-base-content/60 text-xs"> </div>'),jp=w('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Bp=w('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Lp=(e,t,r)=>t(s(r).$id,"magasins"),zp=w('<div class="tooltip tooltip-info"><div class="text-center"> </div></div>'),Vp=w('<div class="text-center"> </div>'),Wp=(e,t,r)=>t(s(r).$id,"volontaires"),Up=w('<span class="badge badge-soft badge-info badge-sm"> </span>'),Gp=w('<div class="flex flex-wrap justify-center gap-2 pr-8"></div>'),Qp=(e,t,r)=>t(s(r).$id,"recettes"),Hp=w('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),Kp=(e,t,r)=>t(s(r).$id,"achats"),Yp=w("<div><!> <span> </span></div>"),Jp=w('<span class="text-center">-</span>'),Zp=(e,t,r)=>t(s(r)),Xp=w('<div class="flex items-center justify-center gap-2"><div class="bg-warning m-auto rounded px-2 py-1"> <button class="btn btn-xs btn-ghost text-base-content/70 btn-circle btn-outline hover:btn-success hover:text-success-content ms-3 transition-all hover:scale-105" title="Déclarer comme acheté"><!></button></div></div>'),Fp=w('<tr><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><!> <div><div class="font-medium"> </div> <!></div></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-2 text-center text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap justify-center gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!></td></tr>'),eh=w("<!> <!>",1),th=w('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),rh=w('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><!> <div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!> <!> <!>',1);function nh(e,t){Q(t,!0);const r={Package:Wn,MessageCircleQuestionMark:rd,ShoppingCart:vr,Clock:Hu,CircleCheck:Gu,CircleX:Qu},n=G(()=>B.displayProducts),a=G(()=>B.stats),i=G(()=>B.uniqueStores),o=G(()=>B.uniqueWho),l=G(()=>B.uniqueProductTypes),u=G(()=>B.filters);let v=K(null),p=K("recettes"),m=K(!1),h=K("store"),_=K(Be([])),g=K(Be([])),b=K(!1),y=K(Be([]));function $(V,ve="recettes"){E(p,ve,!0),E(v,V,!0)}function M(){E(v,null)}function P(V,ve,Je){E(h,V,!0),E(_,ve,!0),E(g,Je,!0),E(m,!0)}function x(){E(m,!1),E(h,"store"),E(_,[],!0),E(g,[],!0)}function S(V){console.log(`[ProductsTable] Modification groupée réussie: ${V.updatedCount} produits`)}function N(V){const ve=V.filter(Je=>Je.displayMissingQuantity!=="✅ Complet"&&Je.missingQuantityArray&&Je.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${V.length} produits reçus → ${ve.length} produits avec quantités manquantes`),E(y,ve,!0),E(b,!0)}function D(){E(b,!1),E(y,[],!0)}function C(){console.log("[ProductsTable] Achat groupé créé avec succès"),D()}async function Z(V){try{if(!B.currentMainId)throw new Error("mainId non disponible");const ve=V.missingQuantityArray||[];if(ve.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let Je=V.$id;V.isSynced||(console.log(`[ProductsTable] Produit ${V.$id} local, création pour validation rapide...`),Je=(await Er(V.$id,{},Ge=>B.getEnrichedProductById(Ge))).$id,console.log(`[ProductsTable] Produit sync créé: ${Je}`)),await Di(B.currentMainId,Je,ve,{store:V.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${V.productName}`)}catch(ve){console.error("[ProductsTable] Erreur validation rapide:",ve),alert("Erreur lors de la validation rapide: "+ve.message)}}var A=rh(),I=L(A),z=c(I),ge=c(z),Te=c(ge);no(Te,{class:"mr-1 h-4 w-4"});var Pe=d(Te),be=d(ge,2);be.__click=[tp];var de=c(be);sd(de,{class:"mr-1 h-4 w-4"});var O=d(z,2),te=c(O),ye=c(te),Ie=c(ye),Oe=c(Ie);ts(Oe,{class:"h-5 w-5"});var Le=d(Ie,2);Le.__click=[np];var et=c(Le);lt(et,{class:"h-4 w-4"});var pe=d(te,2),$e=c(pe),ce=d(c($e),2),Ee=c(ce);ud(Ee,{class:"h-4 w-4"});var qe=d(Ee,2);qe.__input=[ap];var U=d($e,2),J=d(c(U),2),j=c(J);j.__change=[sp];var X=d(j,2);X.__change=[op];var ne=d(X,2);ne.__change=[ip];var je=d(pe,2),ut=c(je);ep(ut,{get allDates(){return B.allDates}});var Ze=d(ut,2),F=c(Ze);{var Ce=V=>{var ve=pp(),Je=c(ve),_e=d(c(Je),2),Ge=c(_e);Ve(Ge,16,()=>s(l),rt=>rt,(rt,nt)=>{const Ht=G(()=>aa(nt));var Ct=cp();Ct.__click=[lp,nt];var ir=c(Ct);Jr(ir,()=>s(Ht).icon,(lr,Gr)=>{Gr(lr,{class:"mr-1 h-5 w-5"})});var Ur=d(ir);q(lr=>{Ae(Ct,1,`btn btn-sm ${lr??""}`),R(Ur,` ${s(Ht).displayName??""}`)},[()=>s(u).selectedProductTypes.length===0?"btn-soft btn-accent":s(u).selectedProductTypes.includes(nt)?"btn-accent":"btn-dash btn-accent"]),f(rt,Ct)});var It=d(Ge,2);It.__click=[up];var or=c(It);rs(or,{class:"h-5 w-5"});var We=d(It,2);We.__click=[dp];var Xe=c(We);ns(Xe,{class:"h-5 w-5"});var ze=d(We,2);{var fe=rt=>{var nt=fp();nt.__click=[vp];var Ht=c(nt);lt(Ht,{class:"h-3 w-3"}),f(rt,nt)};T(ze,rt=>{(s(u).selectedProductTypes.length>0||s(u).selectedTemperatures.length>0)&&rt(fe)})}q((rt,nt)=>{Ae(It,1,`btn btn-sm ms-4 ${rt??""}`),Ae(We,1,`btn btn-sm ${nt??""}`)},[()=>s(u).selectedTemperatures.length===0?"btn-soft btn-success":s(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(u).selectedTemperatures.length===0?"btn-soft btn-info":s(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),f(V,ve)};T(F,V=>{s(l).length>0&&V(Ce)})}var He=d(Ze,2),Ke=c(He);{var tt=V=>{var ve=bp(),Je=c(ve),_e=d(c(Je),2),Ge=c(_e);Ve(Ge,16,()=>s(i),We=>We,(We,Xe)=>{var ze=_p();ze.__click=[hp,Xe];var fe=c(ze);Xt(fe,{class:"mr-1 h-3 w-3"});var rt=d(fe);q(nt=>{Ae(ze,1,`btn btn-xs ${nt??""}`),R(rt,` ${Xe??""}`)},[()=>s(u).selectedStores.length===0?"btn-soft btn-accent":s(u).selectedStores.includes(Xe)?"btn-accent":"btn-dash btn-accent"]),f(We,ze)});var It=d(Ge,2);{var or=We=>{var Xe=gp();Xe.__click=[mp];var ze=c(Xe);lt(ze,{class:"h-3 w-3"}),f(We,Xe)};T(It,We=>{s(u).selectedStores.length>0&&We(or)})}f(V,ve)};T(Ke,V=>{s(i).length>0&&V(tt)})}var oe=d(Ke,2);{var Ot=V=>{var ve=Pp(),Je=c(ve),_e=d(c(Je),2),Ge=c(_e);Ve(Ge,16,()=>s(o),We=>We,(We,Xe)=>{var ze=wp();ze.__click=[yp,Xe];var fe=c(ze);Pa(fe,{class:"mr-1 h-3 w-3"});var rt=d(fe);q(nt=>{Ae(ze,1,`btn btn-xs ${nt??""}`),R(rt,` ${Xe??""}`)},[()=>s(u).selectedWho.length===0?" btn-soft btn-info":s(u).selectedWho.includes(Xe)?" btn-info":"btn-dash btn-info"]),f(We,ze)});var It=d(Ge,2);{var or=We=>{var Xe=Sp();Xe.__click=[xp];var ze=c(Xe);lt(ze,{class:"h-3 w-3"}),f(We,Xe)};T(It,We=>{s(u).selectedWho.length>0&&We(or)})}f(V,ve)};T(oe,V=>{s(o).length>0&&V(Ot)})}var $t=d(O,2),qt=c($t),Ne=c(qt),st=c(Ne),W=c(st);W.__click=[$p];var ue=c(W),he=c(ue);no(he,{class:"h-4 w-4"});var ke=d(he,2);{var Me=V=>{var ve=at();q(()=>R(ve,s(u).sortDirection==="asc"?"↑":"↓")),f(V,ve)};T(ke,V=>{s(u).sortColumn==="productName"&&V(Me)})}var Ye=d(W);Ye.__click=[Ep];var _t=c(Ye),mt=c(_t);Xt(mt,{class:"h-4 w-4"});var jt=d(mt,2);{var dt=V=>{var ve=at();q(()=>R(ve,s(u).sortDirection==="asc"?"↑":"↓")),f(V,ve)};T(jt,V=>{s(u).sortColumn==="store"&&V(dt)})}var gt=d(Ye);gt.__click=[kp];var _r=c(gt),mr=c(_r);ca(mr,{class:"h-4 w-4"});var qr=d(mr,2);{var jr=V=>{var ve=at();q(()=>R(ve,s(u).sortDirection==="asc"?"↑":"↓")),f(V,ve)};T(qr,V=>{s(u).sortColumn==="who"&&V(jr)})}var Gt=d(gt);Gt.__click=[Np];var Br=c(Gt),gr=d(c(Br));{var br=V=>{var ve=at();q(()=>R(ve,s(u).sortDirection==="asc"?"↑":"↓")),f(V,ve)};T(gr,V=>{s(u).sortColumn==="productType"&&V(br)})}var ar=d(Gt,2),yr=c(ar),sr=c(yr);vr(sr,{class:"h-4 w-4"});var Lr=d(ar),wr=c(Lr),zr=c(wr);Fu(zr,{class:"h-4 w-4"});var hn=d(Ne);Ve(hn,21,()=>Object.entries(s(n)),([V,ve])=>V,(V,ve)=>{var Je=G(()=>fo(s(ve),2));let _e=()=>s(Je)[0],Ge=()=>s(Je)[1];var It=eh(),or=L(It);{var We=ze=>{const fe=G(()=>aa(_e()));var rt=Dp(),nt=c(rt),Ht=c(nt),Ct=c(Ht),ir=c(Ct);{var Ur=kt=>{var wt=at();q(()=>R(wt,`🏪 ${_e()??""} (${Ge().length??""})`)),f(kt,wt)},lr=kt=>{var wt=Y(),Qr=L(wt);{var yn=Kt=>{var Sr=Ap(),Kn=c(Sr);Jr(Kn,()=>s(fe).icon,(Ca,xn)=>{xn(Ca,{class:"h-4 w-4"})});var Yn=d(Kn,2),wn=c(Yn),Jn=d(Yn,2),Ia=c(Jn);q(()=>{R(wn,s(fe).displayName),R(Ia,`(${Ge().length??""})`)}),f(Kt,Sr)},Hr=Kt=>{var Sr=at();q(()=>R(Sr,`📦 ${_e()??""} (${Ge().length??""})`)),f(Kt,Sr)};T(Qr,Kt=>{s(u).groupBy==="productType"?Kt(yn):Kt(Hr,!1)},!0)}f(kt,wt)};T(ir,kt=>{s(u).groupBy==="store"?kt(Ur):kt(lr,!1)})}var Gr=d(Ct,2),gn=c(Gr);gn.__click=[Tp,P,Ge];var Un=c(gn);Xt(Un,{size:16});var Gn=d(Un,2);la(Gn,{size:16});var bn=d(gn,2);bn.__click=[Ip,P,Ge];var Qn=c(bn);ca(Qn,{size:16});var Aa=d(Qn,2);la(Aa,{size:16});var Ta=d(bn,2);{var Hn=kt=>{var wt=Mp();wt.__click=[Cp,N,Ge];var Qr=c(wt);vr(Qr,{size:16});var yn=d(Qr,2);ro(yn,{size:16}),f(kt,wt)};T(Ta,kt=>{Ge().some(wt=>wt.displayMissingQuantity!=="✅ Complet")&&kt(Hn)})}f(ze,rt)};T(or,ze=>{_e()!==""&&ze(We)})}var Xe=d(or,2);Ve(Xe,17,()=>hd(Ge(),s(u)),ze=>ze.$id,(ze,fe)=>{const rt=G(()=>B.getFormattedTotalNeeded(s(fe).$id)),nt=G(()=>aa(s(fe).productType)),Ht=G(()=>_d(s(fe).purchases||[]));var Ct=Fp(),ir=c(Ct);ir.__click=[Rp,$,fe];var Ur=c(ir),lr=c(Ur),Gr=c(lr);{var gn=ae=>{var we=Op(),Ue=c(we);ed(Ue,{class:"h-4 w-4 animate-spin"}),f(ae,we)};T(Gr,ae=>{s(fe).status==="isSyncing"&&ae(gn)})}var Un=d(Gr,2),Gn=c(Un),bn=c(Gn),Qn=d(Gn,2);{var Aa=ae=>{var we=qp(),Ue=c(we);q(()=>R(Ue,`Ancien: ${s(fe).previousNames[0]??""}`)),f(ae,we)};T(Qn,ae=>{s(fe).previousNames&&s(fe).previousNames.length>0&&ae(Aa)})}var Ta=d(lr,2),Hn=c(Ta);{var kt=ae=>{var we=jp(),Ue=c(we);rs(Ue,{class:"text-success h-4 w-4"}),f(ae,we)};T(Hn,ae=>{s(fe).pFrais&&ae(kt)})}var wt=d(Hn,2);{var Qr=ae=>{var we=Bp(),Ue=c(we);ns(Ue,{class:"text-info h-4 w-4"}),f(ae,we)};T(wt,ae=>{s(fe).pSurgel&&ae(Qr)})}var yn=d(Ur,2);kn(yn);var Hr=d(ir);Hr.__click=[Lp,$,fe];var Kt=c(Hr);{var Sr=ae=>{var we=zp(),Ue=c(we),xt=c(Ue);q(()=>{on(we,"data-tip",s(fe).storeInfo?.storeComment),R(xt,s(fe).storeInfo?.storeName||"-")}),f(ae,we)},Kn=ae=>{var we=Vp(),Ue=c(we);q(()=>R(Ue,s(fe).storeInfo?.storeName||"-")),f(ae,we)};T(Kt,ae=>{s(fe).storeInfo?.storeComment?ae(Sr):ae(Kn,!1)})}var Yn=d(Kt,2);kn(Yn);var wn=d(Hr);wn.__click=[Wp,$,fe];var Jn=c(wn);{var Ia=ae=>{var we=Gp();Ve(we,20,()=>s(fe).who,Ue=>Ue,(Ue,xt)=>{var Bt=Up(),Pr=c(Bt);q(()=>R(Pr,xt)),f(Ue,Bt)}),f(ae,we)};T(Jn,ae=>{s(fe).who&&s(fe).who.length>0&&ae(Ia)})}var Ca=d(Jn,2);kn(Ca);var xn=d(wn),Ri=c(xn),bs=c(Ri);Jr(bs,()=>s(nt).icon,(ae,we)=>{we(ae,{class:"h-3 w-3"})});var Oi=d(bs),Ma=d(xn);Ma.__click=[Qp,$,fe];var ys=c(Ma),qi=c(ys),ws=d(ys,2);{var ji=ae=>{var we=Hp(),Ue=c(we),xt=c(Ue),Bt=d(xt);_s(Bt,{class:"h-3 w-3"});var Pr=d(Ue,2),Zn=c(Pr),Sn=d(Zn);fd(Sn,{class:"h-3 w-3"}),q(()=>{R(xt,`${s(fe)?.nbRecipes??""} `),R(Zn,`${s(fe)?.totalAssiettes??""} `)}),f(ae,we)};T(ws,ae=>{(s(fe).nbRecipes||s(fe).totalAssiettes)&&ae(ji)})}var Bi=d(ws,2);kn(Bi);var Da=d(Ma);Da.__click=[Kp,$,fe];var xs=c(Da),Ss=c(xs);Ve(Ss,17,()=>s(Ht),ae=>ae.status,(ae,we)=>{const Ue=G(()=>r[s(we).icon]);var xt=Yp(),Bt=c(xt);Jr(Bt,()=>s(Ue),(Sn,Hi)=>{Hi(Sn,{class:"h-4 w-4"})});var Pr=d(Bt,2),Zn=c(Pr);q(Sn=>{Ae(xt,1,`badge badge-soft flex items-center gap-2 ${s(we).badgeClass??""}`),R(Zn,Sn)},[()=>$a(s(we).quantity,s(we).unit)]),f(ae,xt)});var Li=d(Ss,2);{var zi=ae=>{var we=Jp();f(ae,we)};T(Li,ae=>{s(Ht).length===0&&ae(zi)})}var Vi=d(xs,2);kn(Vi);var Wi=d(Da),Ui=c(Wi);{var Gi=ae=>{var we=Xp(),Ue=c(we),xt=c(Ue),Bt=d(xt);Bt.__click=[Zp,Z,fe];var Pr=c(Bt);Ln(Pr,{size:16}),q(()=>R(xt,`${s(fe).displayMissingQuantity??""} `)),f(ae,we)},Qi=ae=>{ro(ae,{size:28,strokeWidth:3,class:"text-success m-auto"})};T(Ui,ae=>{s(fe).displayMissingQuantity!=="✅ Complet"?ae(Gi):ae(Qi,!1)})}q(()=>{Ae(Ct,1,`hover:bg-base-200/20 transition-colors ${s(fe).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-400 bg-blue-50/30":""}`),R(bn,s(fe).productName),Ae(Hr,1,`${s(u).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),Ae(xn,1,Fo(s(u).groupBy==="productType"?"hidden":"")),R(Oi,` ${s(nt).displayName??""}`),R(qi,s(rt))}),f(ze,Ct)}),f(V,It)});var Vr=d(qt,2);{var Et=V=>{var ve=th();f(V,ve)};T(Vr,V=>{Object.values(s(n)).flat().length===0&&V(Et)})}var Qt=d(I,2);{var _n=V=>{jv(V,{get productId(){return s(v)},get initialTab(){return s(p)},onClose:M})};T(Qt,V=>{s(v)&&V(_n)})}var Wr=d(Qt,2);{var mn=V=>{rf(V,{get productIds(){return s(_)},get products(){return s(g)},get editType(){return s(h)},onClose:x,onSuccess:S})};T(Wr,V=>{s(m)&&V(mn)})}var xr=d(Wr,2);{var ka=V=>{If(V,{get products(){return s(y)},onClose:D,onSuccess:C})};T(xr,V=>{s(b)&&V(ka)})}var Na=d(xr,2);Yf(Na,{}),q(()=>{R(Pe,` ${s(a).total??""}`),Sc(qe,s(u).searchQuery),Fr(j,s(u).groupBy==="none"),Fr(X,s(u).groupBy==="store"),Fr(ne,s(u).groupBy==="productType"),Ae(Ye,1,`hover:bg-base-100 cursor-pointer text-center ${s(u).groupBy==="store"?"hidden":""}`),Ae(Gt,1,`hover:bg-base-100 cursor-pointer text-center ${s(u).groupBy==="productType"?"hidden":""}`)}),f(e,A),H()}ht(["click","input","change"]);Al();var ah=w('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function sh(e){var t=ah();f(e,t)}var oh=w('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function ih(e,t){var r=oh(),n=d(c(r),2),a=d(c(n),2),i=c(a);q(()=>R(i,t.message)),f(e,r)}var lh=w('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function ch(e,t){var r=lh(),n=c(r),a=c(n);gs(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=d(a,2),o=d(c(i),2),l=c(o);q(()=>R(l,t.message||"Erreur inconnue")),f(e,r)}var uh=w('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),dh=w('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),vh=w('<div class="text-base-content/60"> </div>'),fh=w('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),ph=w('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),hh=w('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),_h=w('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function mh(e,t){Q(t,!0);let r,n=K(null),a=K(!0),i=K(!1);si(async()=>{r=fu();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await B.initialize(r)}catch(O){const te=O instanceof Error?O.message:"Erreur lors de l'initialisation";E(n,te,!0),console.error("[App] Erreur initialisation:",O)}finally{E(a,!1)}}),Ic(()=>{B.destroy()});async function o(){if(!(!r||s(i))){E(i,!0);try{await B.forceReload(r)}catch(O){console.error("[App] Erreur lors du rechargement forcé:",O)}finally{E(i,!1)}}}const l=G(()=>s(n)||B.error),u=G(()=>s(a)||B.loading),v=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var p=_h(),m=c(p),h=c(m),_=c(h),g=d(c(_),2),b=c(g);{var y=O=>{var te=uh();f(O,te)};T(b,O=>{B.realtimeConnected&&O(y)})}var $=d(b,2);{var M=O=>{var te=dh();f(O,te)};T($,O=>{B.syncing&&O(M)})}var P=d($,2);{var x=O=>{var te=vh(),ye=c(te);q(Ie=>R(ye,`Maj: ${Ie??""}`),[()=>new Date(B.lastSync).toLocaleTimeString()]),f(O,te)};T(P,O=>{B.lastSync&&O(x)})}var S=d(P,2);{var N=O=>{var te=fh();let ye;te.__click=o;var Ie=c(te);od(Ie,{class:"h-4 w-4"}),q(Oe=>{ye=Ae(te,1,"btn btn-outline btn-sm",null,ye,Oe),te.disabled=s(i)||B.loading},[()=>({loading:s(i)||B.loading})]),f(O,te)};T(S,O=>{s(n)||O(N)})}var D=d(S,2);{var C=O=>{var te=ph(),ye=c(te),Ie=c(ye);td(Ie,{class:"mr-2 h-4 w-4"}),q(()=>on(ye,"href",v)),f(O,te)};T(D,O=>{s(n)&&O(C)})}var Z=d(m,2),A=c(Z);{var I=O=>{ch(O,{get message(){return s(l)}})},z=O=>{var te=Y(),ye=L(te);{var Ie=Oe=>{ih(Oe,{get message(){return s(l)}})};T(ye,Oe=>{s(l)&&Oe(Ie)},!0)}f(O,te)};T(A,O=>{s(n)?O(I):O(z,!1)})}var ge=d(A,2);{var Te=O=>{sh(O)};T(ge,O=>{s(u)&&O(Te)})}var Pe=d(ge,2);{var be=O=>{nh(O,{})},de=O=>{var te=Y(),ye=L(te);{var Ie=Oe=>{var Le=hh();f(Oe,Le)};T(ye,Oe=>{!B.loading&&!s(n)&&Oe(Ie)},!0)}f(O,te)};T(Pe,O=>{B.enrichedProducts.length>0?O(be):O(de,!1)})}f(e,p),H()}ht(["click"]);vc(mh,{target:document.getElementById("app_products")});
