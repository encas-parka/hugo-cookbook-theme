(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const lo=!1;var oa=Array.isArray,Qi=Array.prototype.indexOf,ss=Array.from,Va=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,Ki=Object.getOwnPropertyDescriptors,Yi=Object.prototype,Zi=Array.prototype,co=Object.getPrototypeOf,Ss=Object.isExtensible;function Pn(e){return typeof e=="function"}const te=()=>{};function Ji(e){for(var t=0;t<e.length;t++)e[t]()}function uo(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function vo(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const bt=2,os=4,is=8,Cr=16,Ft=32,Rr=64,ls=128,Nt=256,ta=512,ft=1024,wt=2048,mr=4096,Mt=8192,Or=16384,cs=32768,qr=65536,Ps=1<<17,Xi=1<<18,un=1<<19,Fi=1<<20,Wa=1<<21,ia=1<<22,Ar=1<<23,Ir=Symbol("$state"),fo=Symbol("legacy props"),el=Symbol(""),An=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function po(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function tl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function rl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function nl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function al(e){throw new Error("https://svelte.dev/e/effect_orphan")}function sl(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ol(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function il(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ll(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ul(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const la=1,ca=2,ho=4,dl=8,vl=16,fl=1,pl=2,hl=4,_l=8,ml=16,gl=1,bl=2,Xe=Symbol(),yl="http://www.w3.org/1999/xhtml",wl="http://www.w3.org/2000/svg",xl="@attach";function Sl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Pl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let $l=!1;function _o(e){return e===this.v}function mo(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function El(e,t){return e!==t}function go(e){return!mo(e,this.v)}let dn=!1,kl=!1;function Nl(){dn=!0}let He=null;function en(e){He=e}function H(e,t=!1,r){He={p:He,c:null,e:null,s:e,x:null,l:dn&&!t?{s:null,u:null,$:[]}:null}}function Q(e){var t=He,r=t.e;if(r!==null){t.e=null;for(var n of r)Co(n)}return He=t.p,{}}function vn(){return!dn||He!==null&&He.l===null}let Nr=[];function bo(){var e=Nr;Nr=[],Ji(e)}function Xt(e){if(Nr.length===0&&!In){var t=Nr;queueMicrotask(()=>{t===Nr&&bo()})}Nr.push(e)}function Tl(){for(;Nr.length>0;)bo()}const Al=new WeakMap;function yo(e){var t=me;if(t===null)return we.f|=Ar,e;if((t.f&cs)===0){if((t.f&ls)===0)throw!t.parent&&e instanceof Error&&wo(e),e;t.b.error(e)}else tn(e,t)}function tn(e,t){for(;t!==null;){if((t.f&ls)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&wo(e),e}function wo(e){const t=Al.get(e);t&&(Va(e,"message",{value:t.message}),Va(e,"stack",{value:t.stack}))}const Kn=new Set;let Ce=null,Zn=null,Ua=new Set,Lt=[],ua=null,Ga=!1,In=!1;class kt{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#i=[];#s=[];#o=[];#n=[];#a=[];#d=[];skipped_effects=new Set;process(t){Lt=[],Zn=null;var r=kt.apply(this);for(const i of t)this.#v(i);if(this.#c===0){this.#f();var n=this.#s,a=this.#o;this.#s=[],this.#o=[],this.#n=[],Zn=this,Ce=null,$s(n),$s(a),Zn=null,this.#u?.resolve()}else this.#l(this.#s),this.#l(this.#o),this.#l(this.#n);r();for(const i of this.#i)On(i);this.#i=[]}#v(t){t.f^=ft;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Ft|Rr))!==0,i=a&&(n&ft)!==0,o=i||(n&Mt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){a?r.f^=ft:(n&os)!==0?this.#o.push(r):(n&ft)===0&&((n&ia)!==0&&r.b?.is_pending()?this.#i.push(r):ma(r)&&((r.f&Cr)!==0&&this.#n.push(r),On(r)));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#l(t){for(const r of t)((r.f&wt)!==0?this.#a:this.#d).push(r),_t(r,ft);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){Ce=this}deactivate(){Ce=null}flush(){if(Lt.length>0){if(this.activate(),xo(),Ce!==null&&Ce!==this)return}else this.#c===0&&this.#f();this.deactivate();for(const t of Ua)if(Ua.delete(t),t(),Ce!==null)break}#f(){for(const t of this.#r)t();if(this.#r.clear(),Kn.size>1){this.#e.clear();let t=!0;for(const r of Kn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;So(n)}if(Lt.length>0){Ce=r;const n=kt.apply(r);for(const a of Lt)r.#v(a);Lt=[],n()}}Ce=null}Kn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#a)_t(t,wt),Mr(t);for(const t of this.#d)_t(t,mr),Mr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=uo()).promise}static ensure(){if(Ce===null){const t=Ce=new kt;Kn.add(Ce),In||kt.enqueue(()=>{Ce===t&&t.flush()})}return Ce}static enqueue(t){Xt(t)}static apply(t){return te}}function Il(e){var t=In;In=!0;try{for(var r;;){if(Tl(),Lt.length===0&&(Ce?.flush(),Lt.length===0))return ua=null,r;xo()}}finally{In=t}}function xo(){var e=Xr;Ga=!0;try{var t=0;for(Ts(!0);Lt.length>0;){var r=kt.ensure();if(t++>1e3){var n,a;Ml()}r.process(Lt),fr.clear()}}finally{Ga=!1,Ts(e),ua=null}}function Ml(){try{sl()}catch(e){tn(e,ua)}}let kr=null;function $s(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Or|Mt))===0&&ma(n)&&(kr=[],On(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?qo(n):n.fn=null),kr?.length>0)){fr.clear();for(const a of kr)On(a);kr=[]}}kr=null}}function So(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&bt)!==0?So(t):(r&(ia|Cr))!==0&&(_t(t,wt),Mr(t))}}function Mr(e){for(var t=ua=e;t.parent!==null;){t=t.parent;var r=t.f;if(Ga&&t===me&&(r&Cr)!==0)return;if((r&(Rr|Ft))!==0){if((r&ft)===0)return;t.f^=ft}}Lt.push(t)}function Po(e){let t=0,r=hr(0),n;return()=>{Ql()&&(s(r),ha(()=>(t===0&&(n=fn(()=>e(()=>zt(r)))),t+=1,()=>{Xt(()=>{t-=1,t===0&&(n?.(),n=void 0,zt(r))})})))}}var Dl=qr|un|ls;function Cl(e,t,r){new Rl(e,t,r)}class Rl{parent;#e=!1;#r;#c=null;#u;#i;#s;#o=null;#n=null;#a=null;#d=null;#v=0;#l=0;#f=!1;#p=null;#h=()=>{this.#p&&rn(this.#p,this.#v)};#S=Po(()=>(this.#p=hr(this.#v),()=>{this.#p=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#i=n,this.parent=me.b,this.#e=!!this.#u.pending,this.#s=rr(()=>{me.b=this;{try{this.#o=at(()=>n(this.#r))}catch(a){this.error(a)}this.#l>0?this.#b():this.#e=!1}},Dl)}#t(){try{this.#o=at(()=>this.#i(this.#r))}catch(t){this.error(t)}this.#e=!1}#P(){const t=this.#u.pending;t&&(this.#n=at(()=>t(this.#r)),kt.enqueue(()=>{this.#o=this.#g(()=>(kt.ensure(),at(()=>this.#i(this.#r)))),this.#l>0?this.#b():(Kt(this.#n,()=>{this.#n=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#g(t){var r=me,n=we,a=He;Vt(this.#s),gt(this.#s),en(this.#s.ctx);try{return t()}catch(i){return yo(i),null}finally{Vt(r),gt(n),en(a)}}#b(){const t=this.#u.pending;this.#o!==null&&(this.#d=document.createDocumentFragment(),Ol(this.#o,this.#d)),this.#n===null&&(this.#n=at(()=>t(this.#r)))}#y(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#y(t);return}this.#l+=t,this.#l===0&&(this.#e=!1,this.#n&&Kt(this.#n,()=>{this.#n=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),Xt(()=>{kt.ensure().flush()}))}update_pending_count(t){this.#y(t),this.#v+=t,Ua.add(this.#h)}get_effect_pending(){return this.#S(),s(this.#p)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#f||!r&&!n)throw t;this.#o&&(lt(this.#o),this.#o=null),this.#n&&(lt(this.#n),this.#n=null),this.#a&&(lt(this.#a),this.#a=null);var a=!1,i=!1;const o=()=>{if(a){Pl();return}a=!0,i&&ul(),kt.ensure(),this.#v=0,this.#a!==null&&Kt(this.#a,()=>{this.#a=null}),this.#e=this.has_pending_snippet(),this.#o=this.#g(()=>(this.#f=!1,at(()=>this.#i(this.#r)))),this.#l>0?this.#b():this.#e=!1};var l=we;try{gt(null),i=!0,r?.(t,o),i=!1}catch(u){tn(u,this.#s&&this.#s.parent)}finally{gt(l)}n&&Xt(()=>{this.#a=this.#g(()=>{this.#f=!0;try{return at(()=>{n(this.#r,()=>t,()=>o)})}catch(u){return tn(u,this.#s.parent),null}finally{this.#f=!1}})})}}function Ol(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:zn(r);t.append(r),r=a}}function $o(e,t,r){const n=vn()?da:us;if(t.length===0){r(e.map(n));return}var a=Ce,i=me,o=ql();Promise.all(t.map(l=>jl(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(u){(i.f&Or)===0&&tn(u,i)}a?.deactivate(),Eo()}).catch(l=>{tn(l,i)})}function ql(){var e=me,t=we,r=He,n=Ce;return function(){Vt(e),gt(t),en(r),n?.activate()}}function Eo(){Vt(null),gt(null),en(null)}function da(e){var t=bt|wt,r=we!==null&&(we.f&bt)!==0?we:null;return me===null||r!==null&&(r.f&Nt)!==0?t|=Nt:me.f|=un,{ctx:He,deps:null,effects:null,equals:_o,f:t,fn:e,reactions:null,rv:0,v:Xe,wv:0,parent:r??me,ac:null}}function jl(e,t){let r=me;r===null&&tl();var n=r.b,a=void 0,i=hr(Xe),o=!we,l=new Map;return Yl(()=>{var u=uo();a=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(m){u.reject(m)}var v=Ce,p=n.is_pending();o&&(n.update_pending_count(1),p||(v.increment(),l.get(v)?.reject(An),l.set(v,u)));const h=(m,_=void 0)=>{p||v.activate(),_?_!==An&&(i.f|=Ar,rn(i,_)):((i.f&Ar)!==0&&(i.f^=Ar),rn(i,m)),o&&(n.update_pending_count(-1),p||v.decrement()),Eo()};u.promise.then(h,m=>h(null,m||"unknown"))}),vs(()=>{for(const u of l.values())u.reject(An)}),new Promise(u=>{function v(p){function h(){p===a?u(i):v(a)}p.then(h,h)}v(a)})}function G(e){const t=da(e);return Lo(t),t}function us(e){const t=da(e);return t.equals=go,t}function ko(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)lt(t[r])}}function Bl(e){for(var t=e.parent;t!==null;){if((t.f&bt)===0)return t;t=t.parent}return null}function ds(e){var t,r=me;Vt(Bl(e));try{ko(e),t=Uo(e)}finally{Vt(r)}return t}function No(e){var t=ds(e);if(e.equals(t)||(e.v=t,e.wv=Vo()),!jr){var r=(dr||(e.f&Nt)!==0)&&e.deps!==null?mr:ft;_t(e,r)}}const fr=new Map;function hr(e,t){var r={f:0,v:e,reactions:null,equals:_o,rv:0,wv:0};return r}function K(e,t){const r=hr(e);return Lo(r),r}function Ll(e,t=!1,r=!0){const n=hr(e);return t||(n.equals=go),dn&&r&&He!==null&&He.l!==null&&(He.l.s??=[]).push(n),n}function E(e,t,r=!1){we!==null&&(!It||(we.f&Ps)!==0)&&vn()&&(we.f&(bt|Cr|ia|Ps))!==0&&!Yt?.includes(e)&&cl();let n=r?Be(t):t;return rn(e,n)}function rn(e,t){if(!e.equals(t)){var r=e.v;jr?fr.set(e,t):fr.set(e,r),e.v=t;var n=kt.ensure();n.capture(e,r),(e.f&bt)!==0&&((e.f&wt)!==0&&ds(e),_t(e,(e.f&Nt)===0?ft:mr)),e.wv=Vo(),To(e,wt),vn()&&me!==null&&(me.f&ft)!==0&&(me.f&(Ft|Rr))===0&&(Et===null?Xl([e]):Et.push(e))}return t}function zt(e){E(e,e.v+1)}function To(e,t){var r=e.reactions;if(r!==null)for(var n=vn(),a=r.length,i=0;i<a;i++){var o=r[i],l=o.f;if(!(!n&&o===me)){var u=(l&wt)===0;u&&_t(o,t),(l&bt)!==0?To(o,mr):u&&((l&Cr)!==0&&kr!==null&&kr.push(o),Mr(o))}}}function Be(e){if(typeof e!="object"||e===null||Ir in e)return e;const t=co(e);if(t!==Yi&&t!==Zi)return e;var r=new Map,n=oa(e),a=K(0),i=Zt,o=l=>{if(Zt===i)return l();var u=we,v=Zt;gt(null),Is(i);var p=l();return gt(u),Is(v),p};return n&&r.set("length",K(e.length)),new Proxy(e,{defineProperty(l,u,v){(!("value"in v)||v.configurable===!1||v.enumerable===!1||v.writable===!1)&&il();var p=r.get(u);return p===void 0?p=o(()=>{var h=K(v.value);return r.set(u,h),h}):E(p,v.value,!0),!0},deleteProperty(l,u){var v=r.get(u);if(v===void 0){if(u in l){const p=o(()=>K(Xe));r.set(u,p),zt(a)}}else E(v,Xe),zt(a);return!0},get(l,u,v){if(u===Ir)return e;var p=r.get(u),h=u in l;if(p===void 0&&(!h||vr(l,u)?.writable)&&(p=o(()=>{var _=Be(h?l[u]:Xe),g=K(_);return g}),r.set(u,p)),p!==void 0){var m=s(p);return m===Xe?void 0:m}return Reflect.get(l,u,v)},getOwnPropertyDescriptor(l,u){var v=Reflect.getOwnPropertyDescriptor(l,u);if(v&&"value"in v){var p=r.get(u);p&&(v.value=s(p))}else if(v===void 0){var h=r.get(u),m=h?.v;if(h!==void 0&&m!==Xe)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return v},has(l,u){if(u===Ir)return!0;var v=r.get(u),p=v!==void 0&&v.v!==Xe||Reflect.has(l,u);if(v!==void 0||me!==null&&(!p||vr(l,u)?.writable)){v===void 0&&(v=o(()=>{var m=p?Be(l[u]):Xe,_=K(m);return _}),r.set(u,v));var h=s(v);if(h===Xe)return!1}return p},set(l,u,v,p){var h=r.get(u),m=u in l;if(n&&u==="length")for(var _=v;_<h.v;_+=1){var g=r.get(_+"");g!==void 0?E(g,Xe):_ in l&&(g=o(()=>K(Xe)),r.set(_+"",g))}if(h===void 0)(!m||vr(l,u)?.writable)&&(h=o(()=>K(void 0)),E(h,Be(v)),r.set(u,h));else{m=h.v!==Xe;var x=o(()=>Be(v));E(h,x)}var b=Reflect.getOwnPropertyDescriptor(l,u);if(b?.set&&b.set.call(p,v),!m){if(n&&typeof u=="string"){var $=r.get("length"),D=Number(u);Number.isInteger(D)&&D>=$.v&&E($,D+1)}zt(a)}return!0},ownKeys(l){s(a);var u=Reflect.ownKeys(l).filter(h=>{var m=r.get(h);return m===void 0||m.v!==Xe});for(var[v,p]of r)p.v!==Xe&&!(v in l)&&u.push(v);return u},setPrototypeOf(){ll()}})}function Es(e){try{if(e!==null&&typeof e=="object"&&Ir in e)return e[Ir]}catch{}return e}function Ao(e,t){return Object.is(Es(e),Es(t))}var ks,Io,Mo,Do;function zl(){if(ks===void 0){ks=window,Io=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Mo=vr(t,"firstChild").get,Do=vr(t,"nextSibling").get,Ss(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Ss(r)&&(r.__t=void 0)}}function er(e=""){return document.createTextNode(e)}function nn(e){return Mo.call(e)}function zn(e){return Do.call(e)}function c(e,t){return nn(e)}function L(e,t=!1){{var r=nn(e);return r instanceof Comment&&r.data===""?zn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=zn(n);return n}function Vl(e){e.textContent=""}function va(){return!1}function Wl(e,t){if(t){const r=document.body;e.autofocus=!0,Xt(()=>{document.activeElement===r&&e.focus()})}}let Ns=!1;function Ul(){Ns||(Ns=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function fa(e){var t=we,r=me;gt(null),Vt(null);try{return e()}finally{gt(t),Vt(r)}}function pa(e,t,r,n=r){e.addEventListener(t,()=>fa(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Ul()}function Gl(e){me===null&&we===null&&al(),we!==null&&(we.f&Nt)!==0&&me===null&&nl(),jr&&rl()}function Hl(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function tr(e,t,r,n=!0){var a=me;a!==null&&(a.f&Mt)!==0&&(e|=Mt);var i={ctx:He,deps:null,nodes_start:null,nodes_end:null,f:e|wt,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{On(i),i.f|=cs}catch(u){throw lt(i),u}else t!==null&&Mr(i);if(n){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&un)===0&&(o=o.first),o!==null&&(o.parent=a,a!==null&&Hl(o,a),we!==null&&(we.f&bt)!==0&&(e&Rr)===0)){var l=we;(l.effects??=[]).push(o)}}return i}function Ql(){return we!==null&&!It}function vs(e){const t=tr(is,null,!1);return _t(t,ft),t.teardown=e,t}function Vn(e){Gl();var t=me.f,r=!we&&(t&Ft)!==0&&(t&cs)===0;if(r){var n=He;(n.e??=[]).push(e)}else return Co(e)}function Co(e){return tr(os|Fi,e,!1)}function Kl(e){kt.ensure();const t=tr(Rr|un,e,!0);return(r={})=>new Promise(n=>{r.outro?Kt(t,()=>{lt(t),n(void 0)}):(lt(t),n(void 0))})}function fs(e){return tr(os,e,!1)}function Yl(e){return tr(ia|un,e,!0)}function ha(e,t=0){return tr(is|t,e,!0)}function q(e,t=[],r=[]){$o(t,r,n=>{tr(is,()=>e(...n.map(s)),!0)})}function rr(e,t=0){var r=tr(Cr|t,e,!0);return r}function at(e,t=!0){return tr(Ft|un,e,!0,t)}function Ro(e){var t=e.teardown;if(t!==null){const r=jr,n=we;As(!0),gt(null);try{t.call(null)}finally{As(r),gt(n)}}}function Oo(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&fa(()=>{a.abort(An)});var n=r.next;(r.f&Rr)!==0?r.parent=null:lt(r,t),r=n}}function Zl(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Ft)===0&&lt(t),t=r}}function lt(e,t=!0){var r=!1;(t||(e.f&Xi)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Jl(e.nodes_start,e.nodes_end),r=!0),Oo(e,t&&!r),ra(e,0),_t(e,Or);var n=e.transitions;if(n!==null)for(const i of n)i.stop();Ro(e);var a=e.parent;a!==null&&a.first!==null&&qo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Jl(e,t){for(;e!==null;){var r=e===t?null:zn(e);e.remove(),e=r}}function qo(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Kt(e,t){var r=[];ps(e,r,!0),jo(r,()=>{lt(e),t&&t()})}function jo(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function ps(e,t,r){if((e.f&Mt)===0){if(e.f^=Mt,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var a=n.next,i=(n.f&qr)!==0||(n.f&Ft)!==0;ps(n,t,i?r:!1),n=a}}}function _a(e){Bo(e,!0)}function Bo(e,t){if((e.f&Mt)!==0){e.f^=Mt,(e.f&ft)===0&&(_t(e,wt),Mr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&qr)!==0||(r.f&Ft)!==0;Bo(r,a?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let Xr=!1;function Ts(e){Xr=e}let jr=!1;function As(e){jr=e}let we=null,It=!1;function gt(e){we=e}let me=null;function Vt(e){me=e}let Yt=null;function Lo(e){we!==null&&(Yt===null?Yt=[e]:Yt.push(e))}let ht=null,yt=0,Et=null;function Xl(e){Et=e}let zo=1,Rn=0,Zt=Rn;function Is(e){Zt=e}let dr=!1;function Vo(){return++zo}function ma(e){var t=e.f;if((t&wt)!==0)return!0;if((t&mr)!==0){var r=e.deps,n=(t&Nt)!==0;if(r!==null){var a,i,o=(t&ta)!==0,l=n&&me!==null&&!dr,u=r.length;if((o||l)&&(me===null||(me.f&Or)===0)){var v=e,p=v.parent;for(a=0;a<u;a++)i=r[a],(o||!i?.reactions?.includes(v))&&(i.reactions??=[]).push(v);o&&(v.f^=ta),l&&p!==null&&(p.f&Nt)===0&&(v.f^=Nt)}for(a=0;a<u;a++)if(i=r[a],ma(i)&&No(i),i.wv>e.wv)return!0}(!n||me!==null&&!dr)&&_t(e,ft)}return!1}function Wo(e,t,r=!0){var n=e.reactions;if(n!==null&&!Yt?.includes(e))for(var a=0;a<n.length;a++){var i=n[a];(i.f&bt)!==0?Wo(i,t,!1):t===i&&(r?_t(i,wt):(i.f&ft)!==0&&_t(i,mr),Mr(i))}}function Uo(e){var t=ht,r=yt,n=Et,a=we,i=dr,o=Yt,l=He,u=It,v=Zt,p=e.f;ht=null,yt=0,Et=null,dr=(p&Nt)!==0&&(It||!Xr||we===null),we=(p&(Ft|Rr))===0?e:null,Yt=null,en(e.ctx),It=!1,Zt=++Rn,e.ac!==null&&(fa(()=>{e.ac.abort(An)}),e.ac=null);try{e.f|=Wa;var h=e.fn,m=h(),_=e.deps;if(ht!==null){var g;if(ra(e,yt),_!==null&&yt>0)for(_.length=yt+ht.length,g=0;g<ht.length;g++)_[yt+g]=ht[g];else e.deps=_=ht;if(!dr||(p&bt)!==0&&e.reactions!==null)for(g=yt;g<_.length;g++)(_[g].reactions??=[]).push(e)}else _!==null&&yt<_.length&&(ra(e,yt),_.length=yt);if(vn()&&Et!==null&&!It&&_!==null&&(e.f&(bt|mr|wt))===0)for(g=0;g<Et.length;g++)Wo(Et[g],e);return a!==null&&a!==e&&(Rn++,Et!==null&&(n===null?n=Et:n.push(...Et))),(e.f&Ar)!==0&&(e.f^=Ar),m}catch(x){return yo(x)}finally{e.f^=Wa,ht=t,yt=r,Et=n,we=a,dr=i,Yt=o,en(l),It=u,Zt=v}}function Fl(e,t){let r=t.reactions;if(r!==null){var n=Qi.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&bt)!==0&&(ht===null||!ht.includes(t))&&(_t(t,mr),(t.f&(Nt|ta))===0&&(t.f^=ta),ko(t),ra(t,0))}function ra(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Fl(e,r[n])}function On(e){var t=e.f;if((t&Or)===0){_t(e,ft);var r=me,n=Xr;me=e,Xr=!0;try{(t&Cr)!==0?Zl(e):Oo(e),Ro(e);var a=Uo(e);e.teardown=typeof a=="function"?a:null,e.wv=zo;var i;lo&&kl&&(e.f&wt)!==0&&e.deps}finally{Xr=n,me=r}}}async function ec(){await Promise.resolve(),Il()}function s(e){var t=e.f,r=(t&bt)!==0;if(we!==null&&!It){var n=me!==null&&(me.f&Or)!==0;if(!n&&!Yt?.includes(e)){var a=we.deps;if((we.f&Wa)!==0)e.rv<Rn&&(e.rv=Rn,ht===null&&a!==null&&a[yt]===e?yt++:ht===null?ht=[e]:(!dr||!ht.includes(e))&&ht.push(e));else{(we.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[we]:i.includes(we)||i.push(we)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&Nt)===0&&(o.f^=Nt)}if(jr){if(fr.has(e))return fr.get(e);if(r){o=e;var u=o.v;return((o.f&ft)===0&&o.reactions!==null||Go(o))&&(u=ds(o)),fr.set(o,u),u}}else r&&(o=e,ma(o)&&No(o));if((e.f&Ar)!==0)throw e.v;return e.v}function Go(e){if(e.v===Xe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(fr.has(t)||(t.f&bt)!==0&&Go(t))return!0;return!1}function fn(e){var t=It;try{return It=!0,e()}finally{It=t}}const tc=-7169;function _t(e,t){e.f=e.f&tc|t}function rc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const nc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ac(e){return nc.includes(e)}const sc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function oc(e){return e=e.toLowerCase(),sc[e]??e}const ic=["touchstart","touchmove"];function lc(e){return ic.includes(e)}const Ho=new Set,Ha=new Set;function Qo(e,t,r,n={}){function a(i){if(n.capture||Nn.call(t,i),!i.cancelBubble)return fa(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Xt(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Ms(e,t,r,n={}){var a=Qo(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function pt(e){for(var t=0;t<e.length;t++)Ho.add(e[t]);for(var r of Ha)r(e)}let Ds=null;function Nn(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],i=a[0]||e.target;Ds=e;var o=0,l=Ds===e&&e.__root;if(l){var u=a.indexOf(l);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var v=a.indexOf(t);if(v===-1)return;u<=v&&(o=u)}if(i=a[o]||e.target,i!==t){Va(e,"currentTarget",{configurable:!0,get(){return i||r}});var p=we,h=me;gt(null),Vt(null);try{for(var m,_=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var x=i["__"+n];if(x!=null&&(!i.disabled||e.target===i))if(oa(x)){var[b,...$]=x;b.apply(i,[e,...$])}else x.call(i,e)}catch(D){m?_.push(D):m=D}if(e.cancelBubble||g===t||g===null)break;i=g}if(m){for(let D of _)queueMicrotask(()=>{throw D});throw m}}finally{e.__root=t,delete e.currentTarget,gt(p),Vt(h)}}}function Ko(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function an(e,t){var r=me;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function y(e,t){var r=(t&gl)!==0,n=(t&bl)!==0,a,i=!e.startsWith("<!>");return()=>{a===void 0&&(a=Ko(i?e:"<!>"+e),r||(a=nn(a)));var o=n||Io?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=nn(o),u=o.lastChild;an(l,u)}else an(o,o);return o}}function cc(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=Ko(a),l=nn(o);i=nn(l)}var u=i.cloneNode(!0);return an(u,u),u}}function uc(e,t){return cc(e,t,"svg")}function st(e=""){{var t=er(e+"");return an(t,t),t}}function Y(){var e=document.createDocumentFragment(),t=document.createComment(""),r=er();return e.append(t,r),an(t,r),e}function f(e,t){e!==null&&e.before(t)}function O(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function dc(e,t){return vc(e,t)}const Kr=new Map;function vc(e,{target:t,anchor:r,props:n={},events:a,context:i,intro:o=!0}){zl();var l=new Set,u=h=>{for(var m=0;m<h.length;m++){var _=h[m];if(!l.has(_)){l.add(_);var g=lc(_);t.addEventListener(_,Nn,{passive:g});var x=Kr.get(_);x===void 0?(document.addEventListener(_,Nn,{passive:g}),Kr.set(_,1)):Kr.set(_,x+1)}}};u(ss(Ho)),Ha.add(u);var v=void 0,p=Kl(()=>{var h=r??t.appendChild(er());return Cl(h,{pending:()=>{}},m=>{if(i){H({});var _=He;_.c=i}a&&(n.$$events=a),v=e(m,n)||{},i&&Q()}),()=>{for(var m of l){t.removeEventListener(m,Nn);var _=Kr.get(m);--_===0?(document.removeEventListener(m,Nn),Kr.delete(m)):Kr.set(m,_)}Ha.delete(u),h!==r&&h.parentNode?.removeChild(h)}});return fc.set(v,p),v}let fc=new WeakMap;function A(e,t,r=!1){var n=e,a=null,i=null,o=Xe,l=r?qr:0,u=!1;const v=(_,g=!0)=>{u=!0,m(g,_)};var p=null;function h(){p!==null&&(p.lastChild.remove(),n.before(p),p=null);var _=o?a:i,g=o?i:a;_&&_a(_),g&&Kt(g,()=>{o?i=null:a=null})}const m=(_,g)=>{if(o!==(o=_)){var x=va(),b=n;if(x&&(p=document.createDocumentFragment(),p.append(b=er())),o?a??=g&&at(()=>g(b)):i??=g&&at(()=>g(b)),x){var $=Ce,D=o?a:i,P=o?i:a;D&&$.skipped_effects.delete(D),P&&$.skipped_effects.add(P),$.add_callback(h)}else h()}};rr(()=>{u=!1,t(v),u||m(null,null)},l)}function pc(e,t,r){var n=e,a=Xe,i,o,l=null,u=vn()?El:mo;function v(){i&&Kt(i),l!==null&&(l.lastChild.remove(),n.before(l),l=null),i=o}rr(()=>{if(u(a,a=t())){var p=n,h=va();h&&(l=document.createDocumentFragment(),l.append(p=er())),o=at(()=>r(p)),h?Ce.add_callback(v):v()}})}function sn(e,t){return t}function hc(e,t,r){for(var n=e.items,a=[],i=t.length,o=0;o<i;o++)ps(t[o].e,a,!0);var l=i>0&&a.length===0&&r!==null;if(l){var u=r.parentNode;Vl(u),u.append(r),n.clear(),Bt(e,t[0].prev,t[i-1].next)}jo(a,()=>{for(var v=0;v<i;v++){var p=t[v];l||(n.delete(p.k),Bt(e,p.prev,p.next)),lt(p.e,!l)}})}function Ve(e,t,r,n,a,i=null){var o=e,l={flags:t,items:new Map,first:null},u=(t&ho)!==0;if(u){var v=e;o=v.appendChild(er())}var p=null,h=!1,m=new Map,_=us(()=>{var $=r();return oa($)?$:$==null?[]:ss($)}),g,x;function b(){_c(x,g,l,m,o,a,t,n,r),i!==null&&(g.length===0?p?_a(p):p=at(()=>i(o)):p!==null&&Kt(p,()=>{p=null}))}rr(()=>{x??=me,g=s(_);var $=g.length;if(!(h&&$===0)){h=$===0;var D,P,w,S;if(va()){var N=new Set,C=Ce;for(P=0;P<$;P+=1){w=g[P],S=n(w,P);var M=l.items.get(S)??m.get(S);M?(t&(la|ca))!==0&&Yo(M,w,P,t):(D=Zo(null,l,null,null,w,S,P,a,t,r,!0),m.set(S,D)),N.add(S)}for(const[J,T]of l.items)N.has(J)||C.skipped_effects.add(T.e);C.add_callback(b)}else b();s(_)}})}function _c(e,t,r,n,a,i,o,l,u){var v=(o&dl)!==0,p=(o&(la|ca))!==0,h=t.length,m=r.items,_=r.first,g=_,x,b=null,$,D=[],P=[],w,S,N,C;if(v)for(C=0;C<h;C+=1)w=t[C],S=l(w,C),N=m.get(S),N!==void 0&&(N.a?.measure(),($??=new Set).add(N));for(C=0;C<h;C+=1){if(w=t[C],S=l(w,C),N=m.get(S),N===void 0){var M=n.get(S);if(M!==void 0){n.delete(S),m.set(S,M);var J=b?b.next:g;Bt(r,b,M),Bt(r,M,J),Ra(M,J,a),b=M}else{var T=g?g.e.nodes_start:a;b=Zo(T,r,b,b===null?r.first:b.next,w,S,C,i,o,u)}m.set(S,b),D=[],P=[],g=b.next;continue}if(p&&Yo(N,w,C,o),(N.e.f&Mt)!==0&&(_a(N.e),v&&(N.a?.unfix(),($??=new Set).delete(N))),N!==g){if(x!==void 0&&x.has(N)){if(D.length<P.length){var I=P[0],z;b=I.prev;var ge=D[0],Ae=D[D.length-1];for(z=0;z<D.length;z+=1)Ra(D[z],I,a);for(z=0;z<P.length;z+=1)x.delete(P[z]);Bt(r,ge.prev,Ae.next),Bt(r,b,ge),Bt(r,Ae,I),g=I,b=Ae,C-=1,D=[],P=[]}else x.delete(N),Ra(N,g,a),Bt(r,N.prev,N.next),Bt(r,N,b===null?r.first:b.next),Bt(r,b,N),b=N;continue}for(D=[],P=[];g!==null&&g.k!==S;)(g.e.f&Mt)===0&&(x??=new Set).add(g),P.push(g),g=g.next;if(g===null)continue;N=g}D.push(N),b=N,g=N.next}if(g!==null||x!==void 0){for(var Se=x===void 0?[]:ss(x);g!==null;)(g.e.f&Mt)===0&&Se.push(g),g=g.next;var be=Se.length;if(be>0){var ue=(o&ho)!==0&&h===0?a:null;if(v){for(C=0;C<be;C+=1)Se[C].a?.measure();for(C=0;C<be;C+=1)Se[C].a?.fix()}hc(r,Se,ue)}}v&&Xt(()=>{if($!==void 0)for(N of $)N.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var R of n.values())lt(R.e);n.clear()}function Yo(e,t,r,n){(n&la)!==0&&rn(e.v,t),(n&ca)!==0?rn(e.i,r):e.i=r}function Zo(e,t,r,n,a,i,o,l,u,v,p){var h=(u&la)!==0,m=(u&vl)===0,_=h?m?Ll(a,!1,!1):hr(a):a,g=(u&ca)===0?o:hr(o),x={i:g,v:_,k:i,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=er())}return x.e=at(()=>l(e,_,g,v),$l),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?p||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function Ra(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==null&&i!==n;){var o=zn(i);a.before(i),i=o}}function Bt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ne(e,t,...r){var n=e,a=te,i;rr(()=>{a!==(a=t())&&(i&&(lt(i),i=null),i=at(()=>a(n,...r)))},qr)}function Zr(e,t,r){var n=e,a,i,o=null,l=null;function u(){i&&(Kt(i),i=null),o&&(o.lastChild.remove(),n.before(o),o=null),i=l,l=null}rr(()=>{if(a!==(a=t())){var v=va();if(a){var p=n;v&&(o=document.createDocumentFragment(),o.append(p=er()),i&&Ce.skipped_effects.add(i)),l=at(()=>r(p,a))}v?Ce.add_callback(u):u()}},qr)}function mc(e,t,r,n,a,i){var o,l,u=null,v=e,p;rr(()=>{const h=t()||null;var m=wl;h!==o&&(p&&(h===null?Kt(p,()=>{p=null,l=null}):h===l?_a(p):lt(p)),h&&h!==l&&(p=at(()=>{if(u=document.createElementNS(m,h),an(u,u),n){var _=u.appendChild(er());n(u,_)}me.nodes_end=u,v.before(u)})),o=h,o&&(l=o))},qr)}function gc(e,t){var r=void 0,n;rr(()=>{r!==(r=t())&&(n&&(lt(n),n=null),r&&(n=at(()=>{fs(()=>r(e))})))})}function Jo(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Jo(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function bc(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Jo(e))&&(n&&(n+=" "),n+=t);return n}function Xo(e){return typeof e=="object"?bc(e):e??""}const Cs=[...` 	
\r\f \v\uFEFF`];function yc(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var i=a.length,o=0;(o=n.indexOf(a,o))>=0;){var l=o+i;(o===0||Cs.includes(n[o-1]))&&(l===n.length||Cs.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Rs(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var i=e[a];i!=null&&i!==""&&(n+=" "+a+": "+i+r)}return n}function Oa(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function wc(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,u=[];n&&u.push(...Object.keys(n).map(Oa)),a&&u.push(...Object.keys(a).map(Oa));var v=0,p=-1;const x=e.length;for(var h=0;h<x;h++){var m=e[h];if(l?m==="/"&&e[h-1]==="*"&&(l=!1):i?i===m&&(i=!1):m==="/"&&e[h+1]==="*"?l=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!l&&i===!1&&o===0){if(m===":"&&p===-1)p=h;else if(m===";"||h===x-1){if(p!==-1){var _=Oa(e.substring(v,p).trim());if(!u.includes(_)){m!==";"&&h++;var g=e.substring(v,h).trim();r+=" "+g+";"}}v=h+1,p=-1}}}}return n&&(r+=Rs(n)),a&&(r+=Rs(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Te(e,t,r,n,a,i){var o=e.__className;if(o!==r||o===void 0){var l=yc(r,n,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(i&&a!==i)for(var u in i){var v=!!i[u];(a==null||v!==!!a[u])&&e.classList.toggle(u,v)}return i}function qa(e,t={},r,n){for(var a in r){var i=r[a];t[a]!==i&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,n))}}function Fo(e,t,r,n){var a=e.__style;if(a!==t){var i=wc(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(qa(e,r?.[0],n[0]),qa(e,r?.[1],n[1],"important")):qa(e,r,n));return n}function na(e,t,r=!1){if(e.multiple){if(t==null)return;if(!oa(t))return Sl();for(var n of e.options)n.selected=t.includes(Mn(n));return}for(n of e.options){var a=Mn(n);if(Ao(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ei(e){var t=new MutationObserver(()=>{na(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),vs(()=>{t.disconnect()})}function Tr(e,t,r=t){var n=!0;pa(e,"change",a=>{var i=a?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),Mn);else{var l=e.querySelector(i)??e.querySelector("option:not([disabled])");o=l&&Mn(l)}r(o)}),fs(()=>{var a=t();if(na(e,a,n),n&&a===void 0){var i=e.querySelector(":checked");i!==null&&(a=Mn(i),r(a))}e.__value=a,n=!1}),ei(e)}function Mn(e){return"__value"in e?e.__value:e.value}const $n=Symbol("class"),En=Symbol("style"),ti=Symbol("is custom element"),ri=Symbol("is html");function xc(e,t){var r=ga(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Fr(e,t){var r=ga(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Sc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function on(e,t,r,n){var a=ga(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[el]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ni(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Pc(e,t,r,n,a=!1,i=!1){var o=ga(e),l=o[ti],u=!o[ri],v=t||{},p=e.tagName==="OPTION";for(var h in t)h in r||(r[h]=null);r.class?r.class=Xo(r.class):r[$n]&&(r.class=null),r[En]&&(r.style??=null);var m=ni(e);for(const w in r){let S=r[w];if(p&&w==="value"&&S==null){e.value=e.__value="",v[w]=S;continue}if(w==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";Te(e,_,S,n,t?.[$n],r[$n]),v[w]=S,v[$n]=r[$n];continue}if(w==="style"){Fo(e,S,t?.[En],r[En]),v[w]=S,v[En]=r[En];continue}var g=v[w];if(!(S===g&&!(S===void 0&&e.hasAttribute(w)))){v[w]=S;var x=w[0]+w[1];if(x!=="$$")if(x==="on"){const N={},C="$$"+w;let M=w.slice(2);var b=ac(M);if(rc(M)&&(M=M.slice(0,-7),N.capture=!0),!b&&g){if(S!=null)continue;e.removeEventListener(M,v[C],N),v[C]=null}if(S!=null)if(b)e[`__${M}`]=S,pt([M]);else{let J=function(T){v[w].call(this,T)};var P=J;v[C]=Qo(M,e,J,N)}else b&&(e[`__${M}`]=void 0)}else if(w==="style")on(e,w,S);else if(w==="autofocus")Wl(e,!!S);else if(!l&&(w==="__value"||w==="value"&&S!=null))e.value=e.__value=S;else if(w==="selected"&&p)Sc(e,S);else{var $=w;u||($=oc($));var D=$==="defaultValue"||$==="defaultChecked";if(S==null&&!l&&!D)if(o[w]=null,$==="value"||$==="checked"){let N=e;const C=t===void 0;if($==="value"){let M=N.defaultValue;N.removeAttribute($),N.defaultValue=M,N.value=N.__value=C?M:null}else{let M=N.defaultChecked;N.removeAttribute($),N.defaultChecked=M,N.checked=C?M:!1}}else e.removeAttribute(w);else D||m.includes($)&&(l||typeof S!="string")?(e[$]=S,$ in o&&(o[$]=Xe)):typeof S!="function"&&on(e,$,S)}}}return v}function Os(e,t,r=[],n=[],a,i=!1,o=!1){$o(r,n,l=>{var u=void 0,v={},p=e.nodeName==="SELECT",h=!1;if(rr(()=>{var _=t(...l.map(s)),g=Pc(e,u,_,a,i,o);h&&p&&"value"in _&&na(e,_.value);for(let b of Object.getOwnPropertySymbols(v))_[b]||lt(v[b]);for(let b of Object.getOwnPropertySymbols(_)){var x=_[b];b.description===xl&&(!u||x!==u[b])&&(v[b]&&lt(v[b]),v[b]=at(()=>gc(e,()=>x))),g[b]=x}u=g}),p){var m=e;fs(()=>{na(m,u.value,!0),ei(m)})}h=!0})}function ga(e){return e.__attributes??={[ti]:e.nodeName.includes("-"),[ri]:e.namespaceURI===yl}}var qs=new Map;function ni(e){var t=e.getAttribute("is")||e.nodeName,r=qs.get(t);if(r)return r;qs.set(t,r=[]);for(var n,a=e,i=Element.prototype;i!==a;){n=Ki(a);for(var o in n)n[o].set&&r.push(o);a=co(a)}return r}function Re(e,t,r=t){var n=new WeakSet;pa(e,"input",async a=>{var i=a?e.defaultValue:e.value;if(i=Ba(e)?La(i):i,r(i),Ce!==null&&n.add(Ce),await ec(),i!==(i=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=i??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),fn(t)==null&&e.value&&(r(Ba(e)?La(e.value):e.value),Ce!==null&&n.add(Ce)),ha(()=>{var a=t();if(e===document.activeElement){var i=Zn??Ce;if(n.has(i))return}Ba(e)&&a===La(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}const ja=new Set;function js(e,t,r,n,a=n){var i=r.getAttribute("type")==="checkbox",o=e;if(t!==null)for(var l of t)o=o[l]??=[];o.push(r),pa(r,"change",()=>{var u=r.__value;i&&(u=Ec(o,u,r.checked)),a(u)},()=>a(i?[]:null)),ha(()=>{var u=n();i?(u=u||[],r.checked=u.includes(r.__value)):r.checked=Ao(r.__value,u)}),vs(()=>{var u=o.indexOf(r);u!==-1&&o.splice(u,1)}),ja.has(o)||(ja.add(o),Xt(()=>{o.sort((u,v)=>u.compareDocumentPosition(v)===4?-1:1),ja.delete(o)})),Xt(()=>{})}function $c(e,t,r=t){pa(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),fn(t)==null&&r(e.checked),ha(()=>{var n=t();e.checked=!!n})}function Ec(e,t,r){for(var n=new Set,a=0;a<e.length;a+=1)e[a].checked&&n.add(e[a].__value);return r||n.delete(t),Array.from(n)}function Ba(e){var t=e.type;return t==="number"||t==="range"}function La(e){return e===""?null:+e}let Yn=!1;function kc(e){var t=Yn;try{return Yn=!1,[e(),Yn]}finally{Yn=t}}const Nc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function se(e,t,r){return new Proxy({props:e,exclude:t},Nc)}const Tc={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Pn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Pn(a)&&(a=a());const i=vr(a,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Pn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=vr(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===Ir||t===fo)return!1;for(let r of e.props)if(Pn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Pn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ie(...e){return new Proxy({props:e},Tc)}function ot(e,t,r,n){var a=!dn||(r&pl)!==0,i=(r&_l)!==0,o=(r&ml)!==0,l=n,u=!0,v=()=>(u&&(u=!1,l=o?fn(n):n),l),p;if(i){var h=Ir in e||fo in e;p=vr(e,t)?.set??(h&&t in e?P=>e[t]=P:void 0)}var m,_=!1;i?[m,_]=kc(()=>e[t]):m=e[t],m===void 0&&n!==void 0&&(m=v(),p&&(a&&ol(),p(m)));var g;if(a?g=()=>{var P=e[t];return P===void 0?v():(u=!0,P)}:g=()=>{var P=e[t];return P!==void 0&&(l=void 0),P===void 0?l:P},a&&(r&hl)===0)return g;if(p){var x=e.$$legacy;return(function(P,w){return arguments.length>0?((!a||!w||x||_)&&p(w?g():P),P):g()})}var b=!1,$=((r&fl)!==0?da:us)(()=>(b=!1,g()));i&&s($);var D=me;return(function(P,w){if(arguments.length>0){const S=w?s($):a&&i?Be(P):P;return E($,S),b=!0,l!==void 0&&(l=S),P}return jr&&b||(D.f&Or)!==0?$.v:s($)})}function ai(e){He===null&&po(),dn&&He.l!==null?Ic(He).m.push(e):Vn(()=>{const t=fn(e);if(typeof t=="function")return t})}function Ac(e){He===null&&po(),ai(()=>()=>fn(e))}function Ic(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Mc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Mc);const Dc="modulepreload",Cc=function(e){return"/"+e},Bs={},Rc=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let v=function(p){return Promise.all(p.map(h=>Promise.resolve(h).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var o=v;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");a=v(r.map(p=>{if(p=Cc(p),p in Bs)return;Bs[p]=!0;const h=p.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${m}`))return;const _=document.createElement("link");if(_.rel=h?"stylesheet":Dc,h||(_.as="script"),_.crossOrigin="",_.href=p,u&&_.setAttribute("nonce",u),document.head.appendChild(_),h)return new Promise((g,x)=>{_.addEventListener("load",g),_.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${p}`)))})}))}function i(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return a.then(l=>{for(const u of l||[])u.status==="rejected"&&i(u.reason);return t().catch(i)})};class Oc extends Map{#e=new Map;#r=K(0);#c=K(0);#u=Zt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#i(t){return Zt===this.#u?K(t):hr(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#i(0),r.set(t,n);else return s(this.#r),!1}return s(n),!0}forEach(t,r){this.#s(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#i(0),r.set(t,n);else{s(this.#r);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),i=super.get(t),o=super.set(t,r),l=this.#r;if(a===void 0)a=this.#i(0),n.set(t,a),E(this.#c,super.size),zt(l);else if(i!==r){zt(a);var u=l.reactions===null?null:new Set(l.reactions),v=u===null||!a.reactions?.every(p=>u.has(p));v&&zt(l)}return o}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),E(this.#c,super.size),E(n,-1),zt(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;E(this.#c,0);for(var r of t.values())E(r,-1);zt(this.#r),t.clear()}}#s(){s(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#i(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#s(),super.values()}entries(){return this.#s(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#c),super.size}}class qc{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class si{constructor(t){this.generateIdentifier=t,this.kv=new qc}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class jc extends si{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function Bc(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function Lc(e,t){const r=Bc(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const i=n[a];if(t(i))return i}}function ln(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function Jn(e,t){return e.indexOf(t)!==-1}function Ls(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class zc{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return Lc(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const Vc=e=>Object.prototype.toString.call(e).slice(8,-1),oi=e=>typeof e>"u",Wc=e=>e===null,qn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Qa=e=>qn(e)&&Object.keys(e).length===0,_r=e=>Array.isArray(e),Uc=e=>typeof e=="string",Gc=e=>typeof e=="number"&&!isNaN(e),Hc=e=>typeof e=="boolean",Qc=e=>e instanceof RegExp,jn=e=>e instanceof Map,Bn=e=>e instanceof Set,ii=e=>Vc(e)==="Symbol",Kc=e=>e instanceof Date&&!isNaN(e.valueOf()),Yc=e=>e instanceof Error,zs=e=>typeof e=="number"&&isNaN(e),Zc=e=>Hc(e)||Wc(e)||oi(e)||Gc(e)||Uc(e)||ii(e),Jc=e=>typeof e=="bigint",Xc=e=>e===1/0||e===-1/0,Fc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),eu=e=>e instanceof URL,li=e=>e.replace(/\./g,"\\."),za=e=>e.map(String).map(li).join("."),Dn=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let i=e.charAt(a);if(i==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(i==="."){t.push(r),r="";continue}r+=i}const n=r;return t.push(n),t};function jt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const ci=[jt(oi,"undefined",()=>null,()=>{}),jt(Jc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),jt(Kc,"Date",e=>e.toISOString(),e=>new Date(e)),jt(Yc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),jt(Qc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),jt(Bn,"set",e=>[...e.values()],e=>new Set(e)),jt(jn,"map",e=>[...e.entries()],e=>new Map(e)),jt(e=>zs(e)||Xc(e),"number",e=>zs(e)?"NaN":e>0?"Infinity":"-Infinity",Number),jt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),jt(eu,"URL",e=>e.toString(),e=>new URL(e))];function ba(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const ui=ba((e,t)=>ii(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),tu=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),di=ba(Fc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=tu[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function vi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const fi=ba(vi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),pi=ba((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),ru=[fi,ui,pi,di],Vs=(e,t)=>{const r=Ls(ru,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Ls(ci,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},hi={};ci.forEach(e=>{hi[e.annotation]=e});const nu=(e,t,r)=>{if(_r(t))switch(t[0]){case"symbol":return ui.untransform(e,t,r);case"class":return fi.untransform(e,t,r);case"custom":return pi.untransform(e,t,r);case"typed-array":return di.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=hi[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Jr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function _i(e){if(Jn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(Jn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(Jn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const au=(e,t)=>{_i(t);for(let r=0;r<t.length;r++){const n=t[r];if(Bn(e))e=Jr(e,+n);else if(jn(e)){const a=+n,i=+t[++r]==0?"key":"value",o=Jr(e,a);switch(i){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},Ka=(e,t,r)=>{if(_i(t),t.length===0)return r(e);let n=e;for(let i=0;i<t.length-1;i++){const o=t[i];if(_r(n)){const l=+o;n=n[l]}else if(qn(n))n=n[o];else if(Bn(n)){const l=+o;n=Jr(n,l)}else if(jn(n)){if(i===t.length-2)break;const u=+o,v=+t[++i]==0?"key":"value",p=Jr(n,u);switch(v){case"key":n=p;break;case"value":n=n.get(p);break}}}const a=t[t.length-1];if(_r(n)?n[+a]=r(n[+a]):qn(n)&&(n[a]=r(n[a])),Bn(n)){const i=Jr(n,+a),o=r(i);i!==o&&(n.delete(i),n.add(o))}if(jn(n)){const i=+t[t.length-2],o=Jr(n,i);switch(+a==0?"key":"value"){case"key":{const u=r(o);n.set(u,n.get(o)),u!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function Ya(e,t,r=[]){if(!e)return;if(!_r(e)){ln(e,(i,o)=>Ya(i,t,[...r,...Dn(o)]));return}const[n,a]=e;a&&ln(a,(i,o)=>{Ya(i,t,[...r,...Dn(o)])}),t(n,r)}function su(e,t,r){return Ya(t,(n,a)=>{e=Ka(e,a,i=>nu(i,n,r))}),e}function ou(e,t){function r(n,a){const i=au(e,Dn(a));n.map(Dn).forEach(o=>{e=Ka(e,o,()=>i)})}if(_r(t)){const[n,a]=t;n.forEach(i=>{e=Ka(e,Dn(i),()=>e)}),a&&ln(a,r)}else ln(t,r);return e}const iu=(e,t)=>qn(e)||_r(e)||jn(e)||Bn(e)||vi(e,t);function lu(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function cu(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,u)=>l.length-u.length));const[i,...o]=a;i.length===0?n=o.map(za):r[za(i)]=o.map(za)}),n?Qa(r)?[n]:[n,r]:Qa(r)?void 0:r}const mi=(e,t,r,n,a=[],i=[],o=new Map)=>{const l=Zc(e);if(!l){lu(e,a,t);const _=o.get(e);if(_)return n?{transformedValue:null}:_}if(!iu(e,r)){const _=Vs(e,r),g=_?{transformedValue:_.value,annotations:[_.type]}:{transformedValue:e};return l||o.set(e,g),g}if(Jn(i,e))return{transformedValue:null};const u=Vs(e,r),v=u?.value??e,p=_r(v)?[]:{},h={};ln(v,(_,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const x=mi(_,t,r,n,[...a,g],[...i,e],o);p[g]=x.transformedValue,_r(x.annotations)?h[g]=x.annotations:qn(x.annotations)&&ln(x.annotations,(b,$)=>{h[li(g)+"."+$]=b})});const m=Qa(h)?{transformedValue:p,annotations:u?[u.type]:void 0}:{transformedValue:p,annotations:u?[u.type,h]:h};return l||o.set(e,m),m};function gi(e){return Object.prototype.toString.call(e).slice(8,-1)}function Ws(e){return gi(e)==="Array"}function uu(e){if(gi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function du(e,t,r,n,a){const i={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";i==="enumerable"&&(e[t]=r),a&&i==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Za(e,t={}){if(Ws(e))return e.map(a=>Za(a,t));if(!uu(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,i)=>{if(Ws(t.props)&&!t.props.includes(i))return a;const o=e[i],l=Za(o,t);return du(a,i,l,e,t.nonenumerable),a},{})}class xe{constructor({dedupe:t=!1}={}){this.classRegistry=new jc,this.symbolRegistry=new si(r=>r.description??""),this.customTransformerRegistry=new zc,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=mi(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const i=cu(r,this.dedupe);return i&&(a.meta={...a.meta,referentialEqualities:i}),a}deserialize(t){const{json:r,meta:n}=t;let a=Za(r);return n?.values&&(a=su(a,n.values,this)),n?.referentialEqualities&&(a=ou(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}xe.defaultInstance=new xe;xe.serialize=xe.defaultInstance.serialize.bind(xe.defaultInstance);xe.deserialize=xe.defaultInstance.deserialize.bind(xe.defaultInstance);xe.stringify=xe.defaultInstance.stringify.bind(xe.defaultInstance);xe.parse=xe.defaultInstance.parse.bind(xe.defaultInstance);xe.registerClass=xe.defaultInstance.registerClass.bind(xe.defaultInstance);xe.registerSymbol=xe.defaultInstance.registerSymbol.bind(xe.defaultInstance);xe.registerCustom=xe.defaultInstance.registerCustom.bind(xe.defaultInstance);xe.allowErrorProps=xe.defaultInstance.allowErrorProps.bind(xe.defaultInstance);xe.serialize;xe.deserialize;xe.stringify;xe.parse;xe.registerClass;xe.registerCustom;xe.registerSymbol;xe.allowErrorProps;function vu(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function fu(e,t){return`${e}_${t}`}const pu=typeof window<"u"?window:void 0;function hu(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class _u{#e;#r;constructor(t={}){const{window:r=pu,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=Po(a=>{const i=Ms(r,"focusin",a),o=Ms(r,"focusout",a);return()=>{i(),o()}}))}get current(){return this.#r?.(),this.#e?hu(this.#e):null}}new _u;function mu(e){return typeof e=="function"}function gu(e,t){if(mu(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function bu(e,t){let r=K(null);const n=G(()=>gu(t,250));function a(...i){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let o,l;const u=new Promise((v,p)=>{o=v,l=p});E(r,{timeout:null,runner:null,promise:u,resolve:o,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const o=s(r);E(r,null);try{o.resolve(await e.apply(this,i))}catch(l){o.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),E(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function yu(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),i=e.filter(o=>{const l=new Date(o.dateTimeService);return l>=n&&l<=a});return i.length?Cn(i.flatMap(o=>o.neededConsolidatedForDate)):[]}function Tn(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function Xn(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Cn(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Fn(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(u=>Ja(u.q.toString(),u.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const u=parseFloat(l.q);isNaN(u)||r.set(l.u,(r.get(l.u)||0)+u)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],i=[];r.forEach((l,u)=>{const v=n.get(u)||0,p=l-v;p>0&&(a.push({q:p,u}),i.push(Ja(p.toString(),u)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:a,display:o}}function Yr(e){return e?.length?e.map(t=>Ja(t.q.toString(),t.u)).join(" et "):"-"}function Ja(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let o=(Math.round(n*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Us(e){return Tn(e)}function wu(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function xu(e,t){return e[t]?.recipes||[]}function Su(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([i])=>{const o=new Date(i);return o>=n&&o<=a}).reduce((i,[o,l])=>i+(l.totalAssiettes||0),0)}function Pu(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function $u(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Eu(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function ku(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return wu(t)}function Nu(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class k{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}k.equal=(e,t)=>new k("equal",e,t).toString();k.notEqual=(e,t)=>new k("notEqual",e,t).toString();k.lessThan=(e,t)=>new k("lessThan",e,t).toString();k.lessThanEqual=(e,t)=>new k("lessThanEqual",e,t).toString();k.greaterThan=(e,t)=>new k("greaterThan",e,t).toString();k.greaterThanEqual=(e,t)=>new k("greaterThanEqual",e,t).toString();k.isNull=e=>new k("isNull",e).toString();k.isNotNull=e=>new k("isNotNull",e).toString();k.between=(e,t,r)=>new k("between",e,[t,r]).toString();k.startsWith=(e,t)=>new k("startsWith",e,t).toString();k.endsWith=(e,t)=>new k("endsWith",e,t).toString();k.select=e=>new k("select",void 0,e).toString();k.search=(e,t)=>new k("search",e,t).toString();k.orderDesc=e=>new k("orderDesc",e).toString();k.orderAsc=e=>new k("orderAsc",e).toString();k.orderRandom=()=>new k("orderRandom").toString();k.cursorAfter=e=>new k("cursorAfter",void 0,e).toString();k.cursorBefore=e=>new k("cursorBefore",void 0,e).toString();k.limit=e=>new k("limit",void 0,e).toString();k.offset=e=>new k("offset",void 0,e).toString();k.contains=(e,t)=>new k("contains",e,t).toString();k.notContains=(e,t)=>new k("notContains",e,t).toString();k.notSearch=(e,t)=>new k("notSearch",e,t).toString();k.notBetween=(e,t,r)=>new k("notBetween",e,[t,r]).toString();k.notStartsWith=(e,t)=>new k("notStartsWith",e,t).toString();k.notEndsWith=(e,t)=>new k("notEndsWith",e,t).toString();k.createdBefore=e=>new k("createdBefore",void 0,e).toString();k.createdAfter=e=>new k("createdAfter",void 0,e).toString();k.createdBetween=(e,t)=>new k("createdBetween",void 0,[e,t]).toString();k.updatedBefore=e=>new k("updatedBefore",void 0,e).toString();k.updatedAfter=e=>new k("updatedAfter",void 0,e).toString();k.updatedBetween=(e,t)=>new k("updatedBetween",void 0,[e,t]).toString();k.or=e=>new k("or",void 0,e.map(t=>JSON.parse(t))).toString();k.and=e=>new k("and",void 0,e.map(t=>JSON.parse(t))).toString();k.distanceEqual=(e,t,r,n=!0)=>new k("distanceEqual",e,[[t,r,n]]).toString();k.distanceNotEqual=(e,t,r,n=!0)=>new k("distanceNotEqual",e,[[t,r,n]]).toString();k.distanceGreaterThan=(e,t,r,n=!0)=>new k("distanceGreaterThan",e,[[t,r,n]]).toString();k.distanceLessThan=(e,t,r,n=!0)=>new k("distanceLessThan",e,[[t,r,n]]).toString();k.intersects=(e,t)=>new k("intersects",e,[t]).toString();k.notIntersects=(e,t)=>new k("notIntersects",e,[t]).toString();k.crosses=(e,t)=>new k("crosses",e,[t]).toString();k.notCrosses=(e,t)=>new k("notCrosses",e,[t]).toString();k.overlaps=(e,t)=>new k("overlaps",e,[t]).toString();k.notOverlaps=(e,t)=>new k("notOverlaps",e,[t]).toString();k.touches=(e,t)=>new k("touches",e,[t]).toString();k.notTouches=(e,t)=>new k("notTouches",e,[t]).toString();var bi,yi;class Dr{static custom(t){return t}static unique(t=7){const r=Nu(Dr,bi,"m",yi).call(Dr);let n="";for(let a=0;a<t;a++){const i=Math.floor(Math.random()*16).toString(16);n+=i}return r+n}}bi=Dr,yi=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Gs;(function(e){e.Totp="totp"})(Gs||(Gs={}));var Hs;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Hs||(Hs={}));var Qs;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Qs||(Qs={}));var Ks;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Ks||(Ks={}));var Ys;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Ys||(Ys={}));var Zs;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Zs||(Zs={}));var Js;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Js||(Js={}));var Xs;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Xs||(Xs={}));var Fs;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Fs||(Fs={}));function wi(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function Tt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Tu(e,t,r=100){try{const{databases:n,config:a}=await Tt(),i=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[k.greaterThan("$updatedAt",t),k.equal("mainId",e),k.limit(r),k.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function xi(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:i}=await Tt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[k.equal("mainId",e),k.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),k.limit(n)])).documents;const o=await a.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[k.greaterThan("$updatedAt",r),k.equal("mainId",e),k.limit(n),k.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const i=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function cn(e,t){try{const{databases:r,config:n}=await Tt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function ur(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=wi(n,t),{databases:i,config:o}=await Tt(),l=await i.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function Si(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await cn(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function Xa(e,t){return cn(e,{who:t})}async function Fa(e,t){return cn(e,{stockReel:t})}async function Pi(e){try{const{databases:t,config:r}=await Tt(),i=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:i.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,Dr.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function $i(e,t){try{const{databases:r,config:n}=await Tt(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),i={...t,products:t.products||a.products},o=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,i);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Ei(e){try{const{databases:t,config:r}=await Tt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function ki(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Tt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[k.equal("$id",e),k.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Ni(e,t={}){let r=null;const n=i=>{const{events:o,payload:l}=i;if(!l)return;const u=o.some(_=>_.includes("products.")),v=o.some(_=>_.includes("purchases.")),p=o.some(_=>_.includes(".create")),h=o.some(_=>_.includes(".update")),m=o.some(_=>_.includes(".delete"));if(u){const _=l;p&&t.onProductCreate?t.onProductCreate(_):h&&t.onProductUpdate?t.onProductUpdate(_):m&&t.onProductDelete&&t.onProductDelete(_.$id)}else if(v){const _=l;p&&t.onPurchaseCreate?t.onPurchaseCreate(_):h&&t.onPurchaseUpdate?t.onPurchaseUpdate(_):m&&t.onPurchaseDelete&&t.onPurchaseDelete(_.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),t.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),t.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function Ti(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Tt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Ai(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await Tt(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function hs(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const i=JSON.parse(a.responseBody);return i.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${i.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",i.error),i}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function Ii(e,t,r,n){return hs({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function Mi(e,t,r,n="replace"){return hs({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function _s(e,t,r,n={}){try{const{databases:a,config:i}=await Tt(),u=await(await window.AppwriteClient.getAccount()).get(),v=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const p of r){const h={products:[t],mainId:e,quantity:p.q,unit:p.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:u.name,price:null,orderDate:null,deliveryDate:null,createdBy:u.$id,invoiceId:n.invoiceId,invoiceTotal:null},m=await a.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.purchases,Dr.unique(),h);v.push(m)}return console.log(`[Appwrite Interactions] ${v.length} validations rapides créées pour produit ${t}`),v}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const i=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${i}`)}}async function Di(e,t,r,n,a){try{const{databases:i,config:o}=await Tt(),v=await(await window.AppwriteClient.getAccount()).get();if(!t||!r)throw new Error("invoiceId et invoiceTotal sont requis pour une dépense");const p={products:[],mainId:e,quantity:1,unit:"global",status:"expense",notes:a||"",store:n??null,who:v.name,price:r,invoiceId:t,invoiceTotal:r,orderDate:null,deliveryDate:null,createdBy:v.$id},h=await i.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,Dr.unique(),p);return console.log("[Appwrite Interactions] Dépense créée:",h),h}catch(i){console.error("[Appwrite Interactions] Erreur création dépense:",i);const o=i instanceof Error?i.message:"Erreur inconnue";throw new Error(`Échec de la création de la dépense: ${o}`)}}async function Ci(e,t,r){try{const n=[];for(const i of t){const o=await _s(e,i.productId,i.missingQuantities,{invoiceId:r.invoiceId,notes:r.notes,store:r.store});n.push(...o)}let a;return r.invoiceTotal&&(a=await Di(e,r.invoiceId,r.invoiceTotal,r.store,`${r.notes||"(Facture globale pour ${productsData.length} produits)"} `)),console.log(`[Appwrite Interactions] Validation groupée créée: ${n.length} purchases + ${a?"1 expense":"0 expense"}`),{purchases:n,expense:a}}catch(n){console.error("[Appwrite Interactions] Erreur validation groupée:",n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la validation groupée: ${a}`)}}const Au=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:hs,batchUpdateStore:Ii,batchUpdateWho:Mi,createExpensePurchase:Di,createGroupQuickValidation:Ci,createMainDocument:Ai,createPurchase:Pi,createQuickValidationPurchases:_s,deletePurchase:Ei,enrichedProductToAppwriteProduct:wi,loadMainEventData:Ti,loadPurchasesListByIds:ki,loadUpdatedPurchases:Tu,subscribeToRealtime:Ni,syncProductsWithPurchases:xi,updateProduct:cn,updateProductStock:Fa,updateProductStore:Si,updateProductWho:Xa,updatePurchase:$i,upsertProduct:ur},Symbol.toStringTag,{value:"Module"}));async function Iu(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Mu(e,t){const r=ku(e.byDate),n=Cn(Xn([])),{numeric:a,display:i}=Fn(r,n);return{$id:`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:Yr(r),displayTotalPurchases:"-",displayMissingQuantity:i,totalNeededOverrideParsed:null}}function Du(e,t){return e.map(r=>Mu(r,t))}const eo=1e3,Cu=500;class Ru{#e=new Oc;#r=K(null);#c=K(!1);#u=K(!1);#i=K(null);#s=K(!1);#o=K(!1);#n=K(Be([]));#a=K(null);#d=K(null);get startDate(){return s(this.#d)}set startDate(t){E(this.#d,t,!0)}#v=K(null);get endDate(){return s(this.#v)}set endDate(t){E(this.#v,t,!0)}#l=null;#f=null;#p=null;#h=null;#S=K(!1);#t=K(Be({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get currentMainId(){return s(this.#r)}get isInitialized(){return s(this.#c)}get loading(){return s(this.#u)}get error(){return s(this.#i)}get allDates(){return s(this.#n)}get syncing(){return s(this.#s)}setDateRange(t,r){this.startDate=t,this.endDate=r}initializeDateRange(){if((!this.startDate||!this.endDate)&&s(this.#n).length>0){const t=[...s(this.#n)].sort();this.startDate=t[0],this.endDate=t[t.length-1]}console.log(`[ProductsStore] Date range initialized: ${this.startDate} - ${this.endDate}`)}get firstDate(){return s(this.#n).length===0?null:[...s(this.#n)].sort()[0]}get lastDate(){return s(this.#n).length===0?null:[...s(this.#n)].sort().pop()}get realtimeConnected(){return s(this.#o)}get hugoContentChanged(){return s(this.#S)}getTotalNeededInRange(t){return this.totalNeededByDateRange.get(t)??[]}getFormattedTotalNeeded(t){const r=this.getTotalNeededInRange(t);return r.length>0?Yr(r):"-"}#P=G(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#P)}set enrichedProducts(t){E(this.#P,t)}#g=G(()=>{if(console.log("[Store] Recalcul totalNeededByDateRange"),this.startDate===this.firstDate&&this.endDate===this.lastDate)return console.log("[Store] Full date range - using totalNeededArray (no calculation)"),new Map(this.enrichedProducts.map(n=>[n.$id,n.totalNeededArray]));const r=new Map;for(const n of this.enrichedProducts)if(n.byDate){const a=$u(n.byDate),i=yu(a,this.startDate,this.endDate);i.length>0&&r.set(n.$id,i)}return r});get totalNeededByDateRange(){return s(this.#g)}set totalNeededByDateRange(t){E(this.#g,t)}#b=G(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const a=Yr(r);t.set(n,a)}),t});get formattedTotalNeededByDateRange(){return s(this.#b)}set formattedTotalNeededByDateRange(t){E(this.#b,t)}#y=G(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#y)}set stats(t){E(this.#y,t)}#E=G(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#E)}set uniqueStores(t){E(this.#E,t)}#k=G(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#k)}set uniqueWho(t){E(this.#k,t)}#N=G(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#N)}set uniqueProductTypes(t){E(this.#N,t)}#T=G(()=>new Set(this.totalNeededByDateRange.keys()));get relevantProductIds(){return s(this.#T)}set relevantProductIds(t){E(this.#T,t)}#A=G(()=>{const t=this.enrichedProducts.filter(r=>this.#V(r)&&this.relevantProductIds.has(r.$id));return s(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>s(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get displayProducts(){return s(this.#A)}set displayProducts(t){E(this.#A,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#c)&&s(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),E(this.#r,t,!0),this.#l=fu("products-enriched",t),E(this.#i,null);try{if(await this.#C(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await Iu(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),Du(n.ingredients,t).forEach(o=>{this.#e.set(o.$id,o)}),E(this.#n,n.allDates,!0),await Ti(t)||await Ai(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),this.#I()}this.initializeDateRange(),await this.#R(),E(this.#c,!0);const r=this.#z();this.#p=Ni(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw E(this.#i,n,!0),console.error("[ProductsStore]",n,r),r}}async#C(){if(this.#l)try{const t=localStorage.getItem(this.#l);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n,allDates:a}=xe.parse(t);r.forEach(([i,o])=>this.#e.set(i,o)),E(this.#a,n,!0),E(this.#n,a||[],!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}, allDates: ${a?.length||0} dates`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}async#R(){if(s(this.#r)){E(this.#s,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#a)}`);const t=await xi(s(this.#r),{lastSync:s(this.#a),limit:eo});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#M(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#a)}`);const{loadUpdatedPurchases:r}=await Rc(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Au);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#r),s(this.#a),eo);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const i=a.products.map(o=>typeof o=="string"?o:o.$id);this.#$(i,a)}})}this.#m(),this.#_(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{E(this.#s,!1)}}}#I(){if(this.#l)try{const t={lastSync:s(this.#a),products:Array.from(this.#e.entries()),allDates:s(this.#n)};localStorage.setItem(this.#l,xe.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}#_(){this.#h&&clearTimeout(this.#h),this.#h=setTimeout(()=>{this.#I(),this.#h=null},Cu)}#m(){E(this.#a,new Date().toISOString(),!0)}#M(t,r){return r?this.#w(t,r):this.#O(t)}#O(t){const r=Cn(Xn(t.purchases??[])),n=[],{numeric:a,display:i}=Fn(n,r),o=Tn(t.stockReel)??null,l=Yr(r),u=t.store?Tn(t.store):null,v=o?`${o.quantity} ${o.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:u,stockParsed:o,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:v,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:i,totalNeededOverrideParsed:Us(t.totalNeededOverride)}}#w(t,r){const n=t.purchases??r.purchases,a=Cn(Xn(n??[])),i=Yr(a),{numeric:o,display:l}=Fn(r.totalNeededArray,a),u=t.stockReel??r.stockReel,v=u?Tn(u):r.stockParsed,p=t.store??r.store,h=p?Tn(p):r.storeInfo,m=v?`${v.quantity} ${v.unit}`:i;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:p,stockReel:u,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:h,stockParsed:v,totalPurchasesArray:a,missingQuantityArray:o,stockOrTotalPurchases:m,displayTotalPurchases:i,displayMissingQuantity:l,totalNeededOverrideParsed:Us(t.totalNeededOverride??r.totalNeededOverride)}}#W(t){t.totalPurchasesArray=Cn(Xn(t.purchases??[]));const{numeric:r,display:n}=Fn(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=Yr(t.totalPurchasesArray)}#U(t){t.length&&(t.forEach(r=>this.#x(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#x(t){const r=this.#e.get(t.$id),n=this.#M(t,r);this.#e.set(t.$id,n)}#q(t){this.#e.delete(t)}async#j(t){if(!t.products?.length){console.warn("[ProductsStore] Purchase créé sans products:",t.$id);return}const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#L(r,t)}async#B(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#$(r,t);return}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await ki([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);this.#$(n,r)}}catch(r){console.error("[ProductsStore] Erreur rechargement purchase:",r)}}#D(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#L(t,r){const n=this.#D(r),a=[];t.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.purchases||[];if(!l.some(u=>u.$id===n.$id)){const u=this.#w({...o,purchases:[...l,n]},o);a.push(u)}}}),a.forEach(i=>{this.#e.set(i.$id,i)})}#$(t,r){const n=this.#D(r),a=[];t.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.purchases||[],u=l.findIndex(v=>v.$id===n.$id);if(u>=0){const v=[...l];v[u]=n;const p=this.#w({...o,purchases:v},o);a.push(p)}else{const v=this.#w({...o,purchases:[...l,r]},o);a.push(v)}}}),a.forEach(i=>{this.#e.set(i.$id,i)})}#z(){return{onProductCreate:t=>{this.#x(t),this.#m(),this.#_()},onProductUpdate:t=>{this.#x(t),this.#m(),this.#_()},onProductDelete:t=>{this.#q(t),this.#m(),this.#_()},onPurchaseCreate:t=>{this.#j(t),this.#m(),this.#_()},onPurchaseUpdate:t=>{this.#B(t),this.#m(),this.#_()},onPurchaseDelete:t=>{Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t)).forEach(n=>{this.#x(n)}),this.#m(),this.#_()},onConnect:()=>{E(this.#o,!0)},onDisconnect:()=>{E(this.#o,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#V(t){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#t).selectedStores.includes(t.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!t.productType||!s(this.#t).selectedProductTypes.includes(t.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=bu(t=>{s(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#t).selectedProductTypes.indexOf(t);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#t).selectedTemperatures.indexOf(t);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(t){s(this.#t).groupBy=t}toggleStore(t){const r=s(this.#t).selectedStores.indexOf(t);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(t)}toggleWho(t){const r=s(this.#t).selectedWho.indexOf(t);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(t)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(t){s(this.#t).sortColumn===t?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=t,s(this.#t).sortDirection="asc")}clearFilters(){E(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#t).sortColumn],i=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,i=parseFloat(i)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,i=n.purchases?.length||0),a<i?s(this.#t).sortDirection==="asc"?-1:1:a>i?s(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDate?xu(n.byDate,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDate&&n.byDate[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Pu(r.byDate):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDate?Object.keys(r.byDate).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?0:Su(r.byDate,this.startDate,this.endDate)}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?[]:Object.keys(r.byDate).filter(a=>{const i=new Date(a),o=this.startDate?new Date(this.startDate):null,l=this.endDate?new Date(this.endDate):null;return o&&l&&i>=o&&i<=l}).flatMap(a=>r.byDate[a]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){this.clearCache(),await this.initialize(t)}clearCache(){this.#e.clear(),E(this.#n,[],!0),E(this.#a,null),this.#l&&localStorage.removeItem(this.#l),this.#f&&localStorage.removeItem(this.#f),console.log("[ProductsStore] Cache vidé")}destroy(){this.#p?.(),this.#p=null,this.#h&&(clearTimeout(this.#h),this.#h=null),console.log("[ProductsStore] Ressources nettoyées")}}const B=new Ru;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Ou={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var qu=uc("<svg><!><!></svg>");function le(e,t){H(t,!0);const r=ot(t,"color",3,"currentColor"),n=ot(t,"size",3,24),a=ot(t,"strokeWidth",3,2),i=ot(t,"absoluteStrokeWidth",3,!1),o=ot(t,"iconNode",19,()=>[]),l=se(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=qu();Os(u,h=>({...Ou,...l,width:n(),height:n(),stroke:r(),"stroke-width":h,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>i()?Number(a())*24/Number(n()):a()]);var v=c(u);Ve(v,17,o,sn,(h,m)=>{var _=G(()=>vo(s(m),2));let g=()=>s(_)[0],x=()=>s(_)[1];var b=Y(),$=L(b);mc($,g,!0,(D,P)=>{Os(D,()=>({...x()}))}),f(h,b)});var p=d(v);ne(p,()=>t.children??te),f(e,u),Q()}function es(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];le(e,ie({name:"archive"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function ju(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];le(e,ie({name:"bean"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Bu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];le(e,ie({name:"beef"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Lu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];le(e,ie({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function zu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];le(e,ie({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Ln(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];le(e,ie({name:"check"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Vu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];le(e,ie({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Wu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];le(e,ie({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function to(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];le(e,ie({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Uu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];le(e,ie({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Gu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];le(e,ie({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Hu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];le(e,ie({name:"clock"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Qu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];le(e,ie({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function ms(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];le(e,ie({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Ku(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];le(e,ie({name:"egg"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Yu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];le(e,ie({name:"euro"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function ts(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];le(e,ie({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Zu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];le(e,ie({name:"info"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function ro(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];le(e,ie({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Ju(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];le(e,ie({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Xu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];le(e,ie({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Fu(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];le(e,ie({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function ed(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];le(e,ie({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function gs(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];le(e,ie({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function td(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];le(e,ie({name:"moon"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Wn(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];le(e,ie({name:"package"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function rd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];le(e,ie({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function nd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];le(e,ie({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function ad(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];le(e,ie({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function sd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];le(e,ie({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function od(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];le(e,ie({name:"rotate-ccw"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function id(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];le(e,ie({name:"save"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function ld(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];le(e,ie({name:"search"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function rs(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];le(e,ie({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function pr(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];le(e,ie({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function ns(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];le(e,ie({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function aa(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];le(e,ie({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Jt(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];le(e,ie({name:"store"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function cd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];le(e,ie({name:"sun"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function Ri(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];le(e,ie({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function ud(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];le(e,ie({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function ya(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];le(e,ie({name:"user"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function sa(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];le(e,ie({name:"users"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function dd(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];le(e,ie({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function it(e,t){H(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=se(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];le(e,ie({name:"x"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=Y(),l=L(o);ne(l,()=>t.children??te),f(a,o)},$$slots:{default:!0}})),Q()}function ea(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:ju};case"animaux":return{displayName:"Viandes et Poissons",icon:Bu};case"legumes":return{displayName:"Fruits et Légumes",icon:zu};case"sucres":return{displayName:"Sucrées",icon:Lu};case"lof":return{displayName:"L.O.F",icon:Ku};case"autres":return{displayName:"Autres",icon:Vu};case"epices":return{displayName:"Assaisonnements",icon:Ju};case"frais":return{displayName:"Produits Frais",icon:sd};default:return{displayName:e,icon:Wn}}}function no(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function wa(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function xa(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function vd(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function fd(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],i=n[t.sortColumn];return a<i?t.sortDirection==="asc"?-1:1:a>i?t.sortDirection==="asc"?1:-1:0}):e}function as(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function ao(e){return e?xa(e):"-"}function pd(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",i=n.unit||"unit",o=`${a}_${i}`;if(!r[o]){const l=as(a);r[o]={status:a,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:hd(a)}}return r[o].quantity+=n.quantity||0,r},{});return Object.values(t)}function hd(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ShoppingCart";case"pending":return"Clock";case"delivered":return"CircleCheck";case"cancelled":return"CircleX";default:return"Package"}}let so=()=>localStorage.getItem("appwrite-user-name")||"";function _d(e){let t=K(!1),r=K(null);const n=G(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),B.getEnrichedProductById(e))),a=G(()=>s(n)?.who??[]),i=G(()=>s(n)?.stockParsed??null),o=G(()=>s(n)?.purchases??[]),l=G(()=>s(n)?.byDate?Eu(s(n).byDate):[]),u=Be({purchase:{quantity:null,unit:"",store:"",who:so()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});let v=K(!1);Vn(()=>{!s(n)||s(v)||(u.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,u.purchase.unit=s(n).totalNeededArray[0]?.u??"",u.purchase.store=s(n).storeInfo?.storeName??"",u.purchase.who=so()??"",u.purchase.status=u.purchase.status||"delivered",u.stock.unit=s(n).totalNeededArray[0]?.u??"",u.store.name=s(n).storeInfo?.storeName??null,u.store.comment=s(n).storeInfo?.storeComment??null,E(v,!0))});let p=K(null);const h=G(()=>s(p)?s(o).find(T=>T.$id===s(p))??null:null);async function m(T,I){E(t,!0),E(r,null);try{const z=await T();return I&&_("success",I),z}catch(z){const ge=z instanceof Error?z.message:"Une erreur est survenue";return E(r,ge,!0),_("error",ge),console.error("[ProductModalState]",z),null}finally{E(t,!1)}}function _(T,I){const z=new CustomEvent("toast",{detail:{type:T,message:I}});window.dispatchEvent(z)}async function g(){s(n)&&await m(async()=>{if(!u.purchase.quantity||!u.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!B.currentMainId)throw new Error("mainId non disponible");const{quantity:T,unit:I}=no(u.purchase.quantity,u.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await ur(s(n).$id,{},z=>B.getEnrichedProductById(z))),await Pi({products:[s(n).$id],mainId:B.currentMainId,unit:I,quantity:T,store:u.purchase.store||null,who:u.purchase.who||null,notes:u.purchase.notes||"",price:u.purchase.price||null,status:u.purchase.status||"delivered",orderDate:u.purchase.orderDate||null,deliveryDate:u.purchase.deliveryDate||null}),u.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:u.purchase.store,who:u.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function x(T){E(p,T.$id,!0)}function b(){E(p,null)}async function $(T){T.$id&&await m(async()=>{const{quantity:I,unit:z}=no(T.quantity,T.unit);await $i(T.$id,{unit:z,quantity:I,store:T.store||null,who:T.who||null,notes:T.notes||"",price:T.price||null,status:T.status||null,orderDate:T.orderDate||null,deliveryDate:T.deliveryDate||null}),E(p,null)},"Achat modifié avec succès")}async function D(T){const I=s(o).find(z=>z.$id===T);I&&confirm(`Supprimer cet achat (${I.quantity} ${I.unit}) ?`)&&await m(async()=>{await Ei(T)},"Achat supprimé avec succès")}async function P(){s(n)&&await m(async()=>{if(!u.stock.quantity||!u.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const T={quantity:u.stock.quantity.toString(),unit:u.stock.unit,notes:u.stock.notes,dateTime:u.stock.dateTime};s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await Fa(s(n).$id,JSON.stringify(T))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await ur(s(n).$id,{stockReel:JSON.stringify(T)},I=>B.getEnrichedProductById(I))),u.stock.quantity=null,u.stock.notes="",u.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function w(){s(n)&&confirm("Supprimer le stock actuel ?")&&await m(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, suppression stock normal...`),await Fa(s(n).$id,null)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, suppression stock avec upsert...`),await ur(s(n).$id,{stockReel:null},T=>B.getEnrichedProductById(T)))},"Stock supprimé")}async function S(T){!s(n)||!T.trim()||await m(async()=>{if(s(a).includes(T))throw new Error("Ce volontaire est déjà ajouté");const I=[...s(a),T.trim()];s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update normal...`),await Xa(s(n).$id,I)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création avec upsert...`),await ur(s(n).$id,{who:I},z=>B.getEnrichedProductById(z)))},"Volontaire ajouté")}async function N(T){s(n)&&confirm(`Retirer ${T} ?`)&&await m(async()=>{await Xa(s(n).$id,s(a).filter(I=>I!==T))},"Volontaire retiré")}async function C(T){s(n)&&await m(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await Si(s(n).$id,T)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await ur(s(n).$id,{store:JSON.stringify(T)},I=>B.getEnrichedProductById(I)))},"Magasin mis à jour")}async function M(T){s(n)&&await m(async()=>{await cn(s(n).$id,{totalNeededOverride:JSON.stringify(T)})},"Override appliqué")}async function J(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await m(async()=>{await cn(s(n).$id,{totalNeededOverride:null})},"Override supprimé")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockParsed(){return s(i)},get purchasesList(){return s(o)},get editingPurchaseId(){return s(p)},get editingPurchaseData(){return s(h)},forms:u,addPurchase:g,startEditPurchase:x,cancelEditPurchase:b,updateEditedPurchase:$,removePurchase:D,setStock:P,removeStock:w,addVolunteer:S,removeVolunteer:N,updateStore:C,setOverride:M,removeOverride:J,formatQuantity:wa,formatDate:xa,formatDisplayQuantity:vd}}function md(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function gd(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function bd(e,t){t().cancelEditPurchase()}var yd=y('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),wd=y('<span class="loading loading-spinner loading-sm"></span>'),xd=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Sd=y('<span class="loading loading-spinner loading-sm"></span>'),Pd=y('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),$d=(e,t,r)=>t(s(r)),Ed=(e,t,r)=>t(s(r).$id),kd=y('<span class="loading loading-spinner loading-sm"></span>'),Nd=y('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Td=y('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Ad=y(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Id(e,t){H(t,!0);let r=ot(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(F){return F.quantity!==null&&F.quantity!==0&&F.unit?.trim()!==""}function i(F){r().removePurchase(F)}function o(F){r().startEditPurchase(F)}var l=Ad(),u=c(l),v=c(u);pr(v,{class:"h-5 w-5"});var p=d(u,2),h=c(p),m=d(c(h),2),_=c(m),g=c(_);Wn(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2),b=d(_,2),$=c(b);$.value=$.__value="";var D=d($);D.value=D.__value="kg";var P=d(D);P.value=P.__value="gr.";var w=d(P);w.value=w.__value="l.";var S=d(w);S.value=S.__value="ml";var N=d(S);N.value=N.__value="unité";var C=d(N);C.value=C.__value="bottes";var M=d(b,2),J=c(M);Jt(J,{class:"h-4 w-4 opacity-50"});var T=d(J,2),I=d(M,2),z=c(I);ya(z,{class:"h-4 w-4 opacity-50"});var ge=d(z,2),Ae=d(I,2),Se=d(c(Ae),2),be=d(m,2),ue=c(be),R=c(ue);gs(R,{class:"h-4 w-4 opacity-50"});var ee=d(R,2),ye=d(be,2),Ie=c(ye),Oe=c(Ie),Le=c(Oe),Fe=c(Le);Fe.value=Fe.__value="delivered";var ve=d(Fe);ve.value=ve.__value="ordered";var Pe=d(ve);Pe.value=Pe.__value="requested";var oe=d(Oe,2),$e=d(Ie,2);{var qe=F=>{var Me=yd(),Qe=d(c(Me),2);Re(Qe,()=>r().forms.purchase.deliveryDate,Ke=>r().forms.purchase.deliveryDate=Ke),f(F,Me)};A($e,F=>{r().forms.purchase.status==="ordered"&&F(qe)})}var U=d(ye,2),Z=c(U);Z.__click=[md,n,r];var j=c(Z);{var X=F=>{var Me=wd();f(F,Me)},re=F=>{var Me=st("Ajouter l'achat");f(F,Me)};A(j,F=>{r().loading?F(X):F(re,!1)})}var je=d(p,2);{var ct=F=>{var Me=xd(),Qe=c(Me);pr(Qe,{class:"mx-auto mb-2 h-12 w-12"}),f(F,Me)},Ye=F=>{var Me=Td(),Qe=c(Me),Ke=d(c(Qe));Ve(Ke,21,()=>r().purchasesList,et=>et.$id,(et,ae,Dt)=>{var xt=Y(),Ct=L(xt);{var Ne=V=>{var ce=Pd(),fe=c(ce),Ee=c(fe),De=c(Ee),Ze=d(De,2),mt=c(Ze);mt.value=mt.__value="kg";var ut=d(mt);ut.value=ut.__value="gr.";var Rt=d(ut);Rt.value=Rt.__value="l.";var nr=d(Rt);nr.value=nr.__value="ml";var Wt=d(nr);Wt.value=Wt.__value="unité";var gr=d(Wt);gr.value=gr.__value="bottes";var br=d(fe),Br=c(br),Lr=d(br),Ut=c(Lr),zr=d(Lr),yr=c(zr),wr=c(yr);wr.value=wr.__value="requested";var ar=d(wr);ar.value=ar.__value="ordered";var xr=d(ar);xr.value=xr.__value="delivered";var sr=d(xr);sr.value=sr.__value="cancelled";var Vr=d(zr),Sr=c(Vr),Wr=d(Vr),pn=c(Wr),Ur=d(Wr),St=c(Ur),Gt=d(Ur),hn=c(Gt),Gr=d(Gt),_n=c(Gr),Pr=c(_n);Pr.__click=[gd,r,a];var Sa=c(Pr);{var Pa=_e=>{var Ue=Sd();f(_e,Ue)},W=_e=>{id(_e,{class:"h-3 w-3"})};A(Sa,_e=>{r().loading?_e(Pa):_e(W,!1)})}var he=d(Pr,2);he.__click=[bd,r];var dt=c(he);it(dt,{class:"h-3 w-3"}),q(_e=>Pr.disabled=_e,[()=>r().loading||!a(s(ae))]),Re(De,()=>s(ae).quantity,_e=>s(ae).quantity=_e),Tr(Ze,()=>s(ae).unit,_e=>s(ae).unit=_e),Re(Br,()=>s(ae).store,_e=>s(ae).store=_e),Re(Ut,()=>s(ae).who,_e=>s(ae).who=_e),Tr(yr,()=>s(ae).status,_e=>s(ae).status=_e),Re(Sr,()=>s(ae).orderDate,_e=>s(ae).orderDate=_e),Re(pn,()=>s(ae).deliveryDate,_e=>s(ae).deliveryDate=_e),Re(St,()=>s(ae).price,_e=>s(ae).price=_e),Re(hn,()=>s(ae).notes,_e=>s(ae).notes=_e),f(V,ce)},nt=V=>{var ce=Nd(),fe=c(ce),Ee=c(fe),De=d(fe),Ze=c(De),mt=d(De),ut=c(mt),Rt=d(mt),nr=c(Rt),Wt=c(nr),gr=d(Rt),br=c(gr),Br=d(gr),Lr=c(Br),Ut=d(Br),zr=c(Ut),yr=d(Ut),wr=c(yr),ar=d(yr),xr=c(ar),sr=c(xr);sr.__click=[$d,o,ae];var Vr=c(sr);aa(Vr,{class:"h-4 w-4"});var Sr=d(sr,2);Sr.__click=[Ed,i,ae];var Wr=c(Sr);{var pn=St=>{var Gt=kd();f(St,Gt)},Ur=St=>{it(St,{class:"h-4 w-4"})};A(Wr,St=>{r().loading?St(pn):St(Ur,!1)})}q((St,Gt,hn,Gr,_n)=>{O(Ee,St),O(Ze,s(ae).store||"-"),O(ut,s(ae).who||"-"),Te(nr,1,`badge badge-sm ${Gt??""}`),O(Wt,hn),O(br,Gr),O(Lr,_n),O(zr,s(ae).price?`${s(ae).price}€`:"-"),O(wr,s(ae).notes||"-"),Sr.disabled=r().loading},[()=>wa(s(ae).quantity,s(ae).unit),()=>as(s(ae).status).class,()=>as(s(ae).status).text,()=>ao(s(ae).orderDate),()=>ao(s(ae).deliveryDate)]),f(V,ce)};A(Ct,V=>{r().editingPurchaseId===s(ae).$id?V(Ne):V(nt,!1)})}f(et,xt)}),f(F,Me)};A(je,F=>{r().purchasesList.length===0?F(ct):F(Ye,!1)})}q(F=>{Te(oe,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),Z.disabled=F},[()=>r().loading||!n()]),Re(x,()=>r().forms.purchase.quantity,F=>r().forms.purchase.quantity=F),Tr(b,()=>r().forms.purchase.unit,F=>r().forms.purchase.unit=F),Re(T,()=>r().forms.purchase.store,F=>r().forms.purchase.store=F),Re(ge,()=>r().forms.purchase.who,F=>r().forms.purchase.who=F),Re(Se,()=>r().forms.purchase.price,F=>r().forms.purchase.price=F),Re(ee,()=>r().forms.purchase.notes,F=>r().forms.purchase.notes=F),Tr(Le,()=>r().forms.purchase.status,F=>r().forms.purchase.status=F),f(e,l),Q()}pt(["click"]);async function Md(e,t){await t()?.setStock()}async function Dd(e,t){await t()?.removeStock()}var Cd=y('<span class="loading loading-spinner loading-sm"></span>'),Rd=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Od=y('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),qd=y('<span class="loading loading-spinner loading-xs"></span>'),jd=y('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),Bd=y(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Ld(e,t){H(t,!0);let r=ot(t,"modalState",7),n=G(()=>r()&&r().forms&&r().forms.stock.quantity&&r().forms.stock.quantity>0&&r().forms.stock.unit);var a=Bd(),i=c(a),o=c(i);es(o,{class:"h-5 w-5"});var l=d(i,2),u=c(l),v=c(u),p=c(v),h=d(v,2),m=c(h),_=c(m);Wn(_,{class:"h-4 w-4 opacity-50"});var g=d(_,2),x=d(m,2),b=c(x);b.value=b.__value="";var $=d(b);$.value=$.__value="kg";var D=d($);D.value=D.__value="gr.";var P=d(D);P.value=P.__value="l.";var w=d(P);w.value=w.__value="ml";var S=d(w);S.value=S.__value="unité";var N=d(S);N.value=N.__value="bottes";var C=d(h,2),M=c(C),J=d(C,2),T=c(J);T.__click=[Md,r];var I=c(T);{var z=ue=>{var R=Cd();f(ue,R)},ge=ue=>{var R=st();q(()=>O(R,r().stockParsed?"Mettre à jour":"Ajouter au stock")),f(ue,R)};A(I,ue=>{r().loading?ue(z):ue(ge,!1)})}var Ae=d(l,2);{var Se=ue=>{var R=Rd(),ee=c(R);es(ee,{class:"mx-auto mb-2 h-12 w-12"}),f(ue,R)},be=ue=>{var R=jd(),ee=c(R),ye=d(c(ee),2),Ie=c(ye),Oe=d(c(Ie),2),Le=c(Oe),Fe=d(Ie,2),ve=d(c(Fe),2),Pe=c(ve),oe=d(Fe,2);{var $e=re=>{var je=Od(),ct=d(c(je),2),Ye=c(ct);q(()=>O(Ye,r().stockParsed.notes)),f(re,je)};A(oe,re=>{r().stockParsed.notes&&re($e)})}var qe=d(ye,2),U=c(qe);U.__click=[Dd,r];var Z=c(U);{var j=re=>{var je=qd();f(re,je)},X=re=>{var je=st("Supprimer le stock");f(re,je)};A(Z,re=>{r().loading?re(j):re(X,!1)})}q(re=>{O(Le,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),O(Pe,re),U.disabled=r().loading},[()=>xa(r().stockParsed.dateTime)]),f(ue,R)};A(Ae,ue=>{r().stockParsed?ue(be,!1):ue(Se)})}q(()=>{O(p,r().stockParsed?"Modifier le stock":"Ajouter un stock"),T.disabled=r().loading||!s(n)}),Re(g,()=>r().forms.stock.quantity,ue=>r().forms.stock.quantity=ue),Tr(x,()=>r().forms.stock.unit,ue=>r().forms.stock.unit=ue),Re(M,()=>r().forms.stock.notes,ue=>r().forms.stock.notes=ue),f(e,a),Q()}pt(["click"]);var zd=(e,t)=>{e.key==="Enter"&&t()},Vd=y("<option> </option>"),Wd=(e,t,r)=>t(r),Ud=y('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs hover:text-error p-0"><!></button></div>'),Gd=y('<span class="loading loading-spinner loading-sm"></span>'),Hd=y('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <label class="input"><!> <input type="text" placeholder="Nom du volontaire" list="volunteers"/> <datalist id="volunteers"></datalist></label> <div class="grid-col mt-6 grid gap-2"><div class="text-base-content/70">Volontaires actuels:</div> <div class="flex flex-wrap gap-2"></div></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function Qd(e,t){H(t,!0);let r=K("");const n=G(()=>s(r).trim().length>0&&!t.modalState.whoList.includes(s(r).trim()));async function a(){!s(n)||!t.modalState||(await t.modalState.addVolunteer(s(r).trim()),E(r,""))}async function i(w){await t.modalState?.removeVolunteer(w)}var o=Hd(),l=c(o),u=c(l),v=d(c(u),2),p=c(v);ya(p,{class:"h-4 w-4 opacity-50"});var h=d(p,2);h.__keydown=[zd,a];var m=d(h,2);Ve(m,21,()=>B.uniqueWho,sn,(w,S)=>{var N=Vd(),C=c(N),M={};q(()=>{O(C,s(S)),M!==(M=s(S))&&(N.value=(N.__value=s(S))??"")}),f(w,N)});var _=d(v,2),g=d(c(_),2);Ve(g,20,()=>t.modalState.whoList,w=>w,(w,S)=>{var N=Ud(),C=c(N),M=d(C);M.__click=[Wd,i,S];var J=c(M);it(J,{class:"h-3 w-3"}),q(()=>{O(C,`${S??""} `),M.disabled=t.modalState.loading}),f(w,N)});var x=d(_,2),b=c(x);b.__click=a;var $=c(b);{var D=w=>{var S=Gd();f(w,S)},P=w=>{var S=st("Ajouter");f(w,S)};A($,w=>{t.modalState.loading?w(D):w(P,!1)})}q(()=>b.disabled=t.modalState.loading||!s(n)),Re(h,()=>s(r),w=>E(r,w)),f(e,o),Q()}pt(["keydown","click"]);var Kd=(e,t)=>{e.key==="Enter"&&t()},Yd=y("<option> </option>"),Zd=y('<span class="loading loading-spinner loading-sm"></span>'),Jd=(e,t,r)=>{E(t,""),E(r,"")},Xd=y(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/> <datalist id="stores"></datalist></label> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function Fd(e,t){H(t,!0);const r=G(()=>t.modalState?.forms?.store||{name:null,comment:null}),n=G(()=>s(r).name||""),a=G(()=>s(r).comment||"");let i=K(Be(s(n))),o=K(Be(s(a)));const l=G(()=>s(i).trim()!==(s(r).name||"")||s(o).trim()!==(s(r).comment||""));async function u(){if(!s(l))return;const M={storeName:s(i).trim(),storeComment:s(o).trim()};await t.modalState.updateStore(M)}var v=Xd(),p=c(v),h=c(p),m=d(c(h),4),_=c(m),g=c(_);Jt(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2);x.__keydown=[Kd,u];var b=d(x,2);Ve(b,21,()=>B.uniqueStores,sn,(M,J)=>{var T=Yd(),I=c(T),z={};q(()=>{O(I,s(J)),z!==(z=s(J))&&(T.value=(T.__value=s(J))??"")}),f(M,T)});var $=d(_,2),D=d(m,2),P=c(D);P.__click=u;var w=c(P);{var S=M=>{var J=Zd();f(M,J)},N=M=>{var J=st("Mettre à jour");f(M,J)};A(w,M=>{t.modalState.loading?M(S):M(N,!1)})}var C=d(P,2);C.__click=[Jd,i,o],q(()=>{P.disabled=t.modalState.loading||!s(l),C.disabled=t.modalState.loading}),Re(x,()=>s(i),M=>E(i,M)),Re($,()=>s(o),M=>E(o,M)),f(e,v),Q()}pt(["keydown","click"]);async function ev(e,t,r,n,a,i){if(!t.modalState)return;const o={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await t.modalState.setOverride(o),E(i,!1)}async function tv(e,t,r){t.modalState&&(await t.modalState.removeOverride(),E(r,!1))}var rv=y('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),nv=y('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),av=y(" <!>",1),sv=(e,t)=>E(t,!0),ov=y('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),iv=y('<div class="text-error text-sm">Limite de caractères atteinte</div>'),lv=y('<span class="loading loading-spinner loading-sm"></span>'),cv=y('<span class="loading loading-spinner loading-sm"></span>'),uv=y(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div class="form-control"><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),dv=y('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function vv(e,t){H(t,!0);const r=G(()=>t.modalState.product?.totalNeededOverride),n=G(()=>t.modalState.product?.displayTotalNeeded||[]);let a=K(!1),i=K(Be(t.modalState.product?.totalNeededOverride?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),o=K(Be(t.modalState.product?.totalNeededOverride?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=K(Be(t.modalState.product?.totalNeededOverride?.comment||"")),u=G(()=>s(i)>0&&s(o).trim()!=="");var v=dv(),p=c(v),h=c(p),m=c(h);{var _=x=>{var b=ov(),$=L(b),D=c($),P=d(c(D),2);{var w=T=>{var I=rv();f(T,I)};A(P,T=>{s(r)&&T(w)})}var S=d(P,2),N=c(S);{var C=T=>{var I=av(),z=L(I),ge=d(z);{var Ae=Se=>{var be=nv(),ue=c(be);gs(ue,{});var R=d(ue);q(()=>O(R,` ${s(r).comment??""}`)),f(Se,be)};A(ge,Se=>{s(r).comment&&Se(Ae)})}q(Se=>O(z,`${Se??""} `),[()=>wa(s(r).totalOverride.q,s(r).totalOverride.u)]),f(T,I)},M=T=>{var I=st();q(()=>O(I,s(n))),f(T,I)};A(N,T=>{s(r)?T(C):T(M,!1)})}var J=d($,2);J.__click=[sv,a],f(x,b)},g=x=>{var b=uv(),$=L(b),D=c($),P=c(D);rd(P,{class:"h-4 w-4 opacity-50"});var w=d(P,2),S=d(D,2),N=c(S);N.value=N.__value="";var C=d(N);C.value=C.__value="kg";var M=d(C);M.value=M.__value="gr.";var J=d(M);J.value=J.__value="l.";var T=d(J);T.value=T.__value="ml";var I=d(T);I.value=I.__value="unité";var z=d(I);z.value=z.__value="bottes";var ge=d($,2),Ae=c(ge),Se=d(c(Ae),2),be=d(Se,2);{var ue=oe=>{var $e=iv();f(oe,$e)};A(be,oe=>{s(l).length>=250&&oe(ue)})}var R=d(ge,2),ee=c(R);ee.__click=[tv,t,a];var ye=c(ee);{var Ie=oe=>{var $e=lv();f(oe,$e)},Oe=oe=>{var $e=st();q(()=>O($e,`Réinitialiser le total calculé (${s(n)??""}).`)),f(oe,$e)};A(ye,oe=>{t.modalState.loading?oe(Ie):oe(Oe,!1)})}var Le=d(ee,2);Le.__click=[ev,t,i,o,l,a];var Fe=c(Le);{var ve=oe=>{var $e=cv();f(oe,$e)},Pe=oe=>{var $e=st("Appliquer");f(oe,$e)};A(Fe,oe=>{t.modalState.loading?oe(ve):oe(Pe,!1)})}q(()=>{ee.disabled=t.modalState.loading,Le.disabled=t.modalState.loading||!s(u)}),Re(w,()=>s(i),oe=>E(i,oe)),Tr(S,()=>s(o),oe=>E(o,oe)),Re(Se,()=>s(l),oe=>E(l,oe)),f(x,b)};A(m,x=>{s(a)?x(g,!1):x(_)})}q(()=>Te(p,1,`card border-base-300 border ${s(a)?"bg-base-200":"bg-base-100"}`)),f(e,v),Q()}pt(["click"]);var fv=y('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),pv=y('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),hv=y('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),_v=y('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function mv(e,t){H(t,!0);const r=G(()=>t.modalState.recipes);var n=_v(),a=L(n);vv(a,{get modalState(){return t.modalState}});var i=d(a,2),o=c(i),l=c(o);ms(l,{class:"h-5 w-5"});var u=d(o,2);{var v=h=>{var m=fv(),_=c(m);Wn(_,{class:"mx-auto mb-2 h-12 w-12"}),f(h,m)},p=h=>{var m=hv(),_=c(m),g=d(c(_));Ve(g,21,()=>s(r),x=>x.r,(x,b)=>{var $=pv(),D=c($),P=c(D),w=d(D),S=c(w),N=d(w),C=c(N);q(M=>{O(P,`${s(b).r??""} (${(s(b).a||"-")??""} c.)`),O(S,`${(s(b).q||s(b).qEq)??""} ${(s(b).u||s(b).uEq)??""}`),O(C,M)},[()=>xa(s(b).date)]),f(x,$)}),f(h,m)};A(u,h=>{s(r).length===0?h(v):h(p,!1)})}f(e,n),Q()}var gv=y('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),bv=y('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),yv=(e,t)=>t("recettes"),wv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),xv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Sv=(e,t)=>t("achats"),Pv=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),$v=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Ev=(e,t)=>t("stock"),kv=y('<span class="badge badge-sm badge-secondary ml-1">1</span>'),Nv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Tv=(e,t)=>t("volontaires"),Av=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Iv=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Mv=(e,t)=>t("magasins"),Dv=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Cv=y('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div>',1),Rv=y('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Ov(e,t){H(t,!0);let r=ot(t,"initialTab",3,"recettes"),n=G(()=>_d(t.productId)),a=K(Be(r()));function i(b){E(a,b,!0)}var o=Rv(),l=c(o),u=c(l),v=c(u);{var p=b=>{var $=gv(),D=L($),P=c(D),w=d(D,2),S=c(w),N=c(S),C=d(S,2),M=d(c(C));q(()=>{O(P,s(n).product?.productName),O(N,s(n).product?.productType),O(M,` ${s(n).product?.displayTotalNeeded??""}`)}),f(b,$)},h=b=>{var $=bv();f(b,$)};A(v,b=>{s(n)&&s(n).product?b(p):b(h,!1)})}var m=d(v,2);m.__click=function(...b){t.onClose?.apply(this,b)};var _=c(m);it(_,{class:"h-4 w-4"});var g=d(u,2);{var x=b=>{var $=Cv(),D=L($),P=c(D);P.__click=[yv,i];var w=c(P);ms(w,{class:"mr-1 h-5 w-5"});var S=d(w,2);{var N=j=>{var X=wv(),re=c(X);q(()=>O(re,s(n).product?.nbRecipes)),f(j,X)},C=j=>{var X=xv();f(j,X)};A(S,j=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?j(N):j(C,!1)})}var M=d(P,2);M.__click=[Sv,i];var J=c(M);pr(J,{class:"mr-1 h-5 w-5"});var T=d(J,2);{var I=j=>{var X=Pv(),re=c(X);q(()=>O(re,s(n).purchasesList.length)),f(j,X)},z=j=>{var X=$v();f(j,X)};A(T,j=>{s(n).purchasesList.length>0?j(I):j(z,!1)})}var ge=d(M,2);ge.__click=[Ev,i];var Ae=c(ge);es(Ae,{class:"mr-1 h-5 w-5"});var Se=d(Ae,2);{var be=j=>{var X=kv();f(j,X)},ue=j=>{var X=Nv();f(j,X)};A(Se,j=>{s(n).stockParsed?j(be):j(ue,!1)})}var R=d(ge,2);R.__click=[Tv,i];var ee=c(R);sa(ee,{class:"mr-1 h-5 w-5"});var ye=d(ee,2);{var Ie=j=>{var X=Av(),re=c(X);q(()=>O(re,s(n).product?.who.length)),f(j,X)},Oe=j=>{var X=Iv();f(j,X)};A(ye,j=>{s(n).product?.who&&s(n).product?.who.length>0?j(Ie):j(Oe,!1)})}var Le=d(R,2);Le.__click=[Mv,i];var Fe=c(Le);Jt(Fe,{class:"mr-1 h-5 w-5"});var ve=d(D,2),Pe=c(ve);{var oe=j=>{var X=Dv(),re=c(X);it(re,{class:"h-4 w-4"});var je=d(re,2),ct=c(je);q(()=>O(ct,`erreur : ${s(n).error??""}`)),f(j,X)};A(Pe,j=>{s(n).error&&j(oe)})}var $e=d(Pe,2),qe=c($e);pc(qe,()=>s(a),j=>{var X=Y(),re=L(X);{var je=Ye=>{mv(Ye,{get modalState(){return s(n)}})},ct=Ye=>{var F=Y(),Me=L(F);{var Qe=et=>{Id(et,{get modalState(){return s(n)}})},Ke=et=>{var ae=Y(),Dt=L(ae);{var xt=Ne=>{Ld(Ne,{get modalState(){return s(n)}})},Ct=Ne=>{var nt=Y(),V=L(nt);{var ce=Ee=>{Qd(Ee,{get modalState(){return s(n)}})},fe=Ee=>{var De=Y(),Ze=L(De);{var mt=ut=>{Fd(ut,{get modalState(){return s(n)}})};A(Ze,ut=>{s(a)==="magasins"&&ut(mt)},!0)}f(Ee,De)};A(V,Ee=>{s(a)==="volontaires"?Ee(ce):Ee(fe,!1)},!0)}f(Ne,nt)};A(Dt,Ne=>{s(a)==="stock"?Ne(xt):Ne(Ct,!1)},!0)}f(et,ae)};A(Me,et=>{s(a)==="achats"?et(Qe):et(Ke,!1)},!0)}f(Ye,F)};A(re,Ye=>{s(a)==="recettes"?Ye(je):Ye(ct,!1)})}f(j,X)});var U=d(ve,2),Z=c(U);Z.__click=function(...j){t.onClose?.apply(this,j)},q(()=>{Te(P,1,`tab ${s(a)==="recettes"?"tab-active":""}`),Te(M,1,`tab ${s(a)==="achats"?"tab-active":""}`),Te(ge,1,`tab ${s(a)==="stock"?"tab-active":""}`),Te(R,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),Te(Le,1,`tab ${s(a)==="magasins"?"tab-active":""}`)}),f(b,$)};A(g,b=>{s(n)&&b(x)})}f(e,o),Q()}pt(["click"]);async function qv(e,t,r,n,a,i,o,l,u){if(!(!s(t)||s(r))){E(r,!0),E(n,null),E(a,null);try{let v;if(s(i)){const p={storeName:o.storeName.trim(),storeComment:o.storeComment.trim()};v=await Ii(l.productIds,l.products,p)}else if(s(u))v=await Mi(l.productIds,l.products,o.whoNames,o.whoMode);else throw new Error("Type d'édition non supporté");E(a,v,!0),v.success?(l.onSuccess?.(v),setTimeout(()=>{l.onClose()},1500)):E(n,v.error||"Erreur lors de la mise à jour",!0)}catch(v){const p=v instanceof Error?v.message:"Erreur inconnue";E(n,p,!0),console.error("[GroupEditModal] Erreur mise à jour:",v)}finally{E(r,!1)}}}function oo(e,t,r){s(t)||r.onClose()}var jv=y('<div class="flex items-center gap-2"><!> <span> </span></div>'),Bv=y('<div class="flex items-center gap-2"><!> <span> </span></div>'),Lv=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),zv=y('<div class="alert alert-success mb-4"><!> <span> </span></div>'),Vv=y("<option> </option>"),Wv=y('<div class="space-y-4"><div><label class="label"><span class="label-text">Nom du magasin</span></label> <label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="label"><span class="label-text">Commentaire (optionnel)</span></label> <textarea class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div>'),Uv=(e,t,r)=>t(r),Gv=y('<div class="badge badge-primary badge-lg flex items-center gap-1"><span> </span> <button class="btn btn-xs btn-circle btn-ghost hover:bg-error/20"><!></button></div>'),Hv=y('<div class="mt-2 flex flex-wrap gap-2"></div>'),Qv=(e,t,r)=>t(r),Kv=y('<button class="btn btn-xs btn-soft btn-outline"> </button>'),Yv=y('<div class="mt-3"><div class="mb-1 text-xs opacity-70">Suggestions :</div> <div class="flex flex-wrap gap-1"></div></div>'),Zv=y(`<div class="space-y-4"><div><label class="label"><span class="label-text">Mode d'application</span></label> <div class="join"><input class="join-item btn btn-sm" type="radio" name="who-mode" aria-label="Remplacer"/> <input class="join-item btn btn-sm" type="radio" name="who-mode" aria-label="Ajouter"/></div> <div class="mt-1 text-xs opacity-70"> </div></div> <div><label class="label"><span class="label-text">Volontaires</span></label> <div class="flex gap-2"><input type="text" class="input input-sm flex-1" placeholder="Ajouter un volontaire..."/> <button class="btn btn-sm btn-primary"><!></button></div> <!> <!></div></div>`),Jv=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Xv=y("<!> ",1),Fv=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><div class="bg-base-200 mb-6 rounded-lg p-4"><h4 class="mb-2 font-medium">État actuel de ce groupe :</h4> <div class="flex flex-wrap gap-4 text-sm"><!> <!> <div class="flex items-center gap-2"><div class="bg-primary h-4 w-4 rounded-full"></div> <span> </span></div></div></div> <!> <!> <!> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function ef(e,t){H(t,!0);const r=[];let n=K(!1),a=K(null),i=K(null),o=Be({storeName:t.products.length>0&&t.editType==="store"&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"",storeComment:t.products.length>0&&t.editType==="store"&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"",whoNames:t.products.length>0&&t.editType==="who"&&t.products[0].who?[...t.products[0].who]:[],whoMode:"replace"});const l=G(()=>t.editType==="store"),u=G(()=>t.editType==="who"),v=G(()=>s(l)?`Attribuer un magasin (${t.products.length} produits)`:`Gérer les volontaires (${t.products.length} produits)`),p=G(()=>s(l)?o.storeName.trim().length>0:s(u)?o.whoNames.length>0:!1);function h(U){U.trim()&&!o.whoNames.includes(U.trim())&&(o.whoNames=[...o.whoNames,U.trim()])}function m(U){o.whoNames=o.whoNames.filter(Z=>Z!==U)}const _=G(()=>{const U=new Set(t.products.map(Z=>Z.storeInfo?.storeName).filter(Boolean));return Array.from(U)}),g=G(()=>{const U=t.products.flatMap(Z=>Z.who||[]);return new Set(U).size});var x=Fv(),b=c(x),$=c(b),D=c($),P=c(D),w=d(D,2);w.__click=[oo,n,t];var S=c(w);it(S,{class:"h-4 w-4"});var N=d($,2),C=c(N),M=d(c(C),2),J=c(M);{var T=U=>{var Z=jv(),j=c(Z);Jt(j,{class:"h-4 w-4"});var X=d(j,2),re=c(X);q(je=>O(re,je),[()=>s(_).length>0?`Magasins: ${s(_).join(", ")}`:"Aucun magasin défini"]),f(U,Z)};A(J,U=>{s(l)&&U(T)})}var I=d(J,2);{var z=U=>{var Z=Bv(),j=c(Z);sa(j,{class:"h-4 w-4"});var X=d(j,2),re=c(X);q(()=>O(re,`Volontaires: ${s(g)??""} personne(s)`)),f(U,Z)};A(I,U=>{s(u)&&U(z)})}var ge=d(I,2),Ae=d(c(ge),2),Se=c(Ae),be=d(C,2);{var ue=U=>{var Z=Lv(),j=c(Z);Ri(j,{class:"h-4 w-4"});var X=d(j,2),re=c(X);q(()=>O(re,s(a))),f(U,Z)};A(be,U=>{s(a)&&U(ue)})}var R=d(be,2);{var ee=U=>{var Z=zv(),j=c(Z);Ln(j,{class:"h-4 w-4"});var X=d(j,2),re=c(X);q(()=>O(re,`${s(i).updatedCount??""} produit(s) mis à jour avec succès !`)),f(U,Z)};A(R,U=>{s(i)?.success&&U(ee)})}var ye=d(R,2);{var Ie=U=>{var Z=Wv(),j=c(Z),X=d(c(j),2),re=c(X);Jt(re,{class:"h-4 w-4 opacity-50"});var je=d(re,2),ct=d(X,2);Ve(ct,21,()=>B.uniqueStores,sn,(Me,Qe)=>{var Ke=Vv(),et=c(Ke),ae={};q(()=>{O(et,s(Qe)),ae!==(ae=s(Qe))&&(Ke.value=(Ke.__value=s(Qe))??"")}),f(Me,Ke)});var Ye=d(j,2),F=d(c(Ye),2);q(()=>{je.disabled=s(n),F.disabled=s(n)}),Re(je,()=>o.storeName,Me=>o.storeName=Me),Re(F,()=>o.storeComment,Me=>o.storeComment=Me),f(U,Z)};A(ye,U=>{s(l)&&U(Ie)})}var Oe=d(ye,2);{var Le=U=>{var Z=Zv(),j=c(Z),X=d(c(j),2),re=c(X);re.value=re.__value="replace";var je=d(re,2);je.value=je.__value="add";var ct=d(X,2),Ye=c(ct),F=d(j,2),Me=d(c(F),2),Qe=c(Me);Qe.__keydown=Ne=>{Ne.key==="Enter"&&(Ne.preventDefault(),h(Ne.currentTarget.value),Ne.currentTarget.value="")};var Ke=d(Qe,2);Ke.__click=Ne=>{const nt=Ne.currentTarget.previousElementSibling;h(nt.value),nt.value=""};var et=c(Ke);ud(et,{class:"h-4 w-4"});var ae=d(Me,2);{var Dt=Ne=>{var nt=Hv();Ve(nt,20,()=>o.whoNames,V=>V,(V,ce)=>{var fe=Gv(),Ee=c(fe),De=c(Ee),Ze=d(Ee,2);Ze.__click=[Uv,m,ce];var mt=c(Ze);it(mt,{class:"h-3 w-3"}),q(()=>{O(De,ce),Ze.disabled=s(n)}),f(V,fe)}),f(Ne,nt)};A(ae,Ne=>{o.whoNames.length>0&&Ne(Dt)})}var xt=d(ae,2);{var Ct=Ne=>{var nt=Yv(),V=d(c(nt),2);Ve(V,20,()=>B.uniqueWho.slice(0,8),ce=>ce,(ce,fe)=>{var Ee=Kv();Ee.__click=[Qv,h,fe];var De=c(Ee);q(Ze=>{Ee.disabled=Ze,O(De,fe)},[()=>s(n)||o.whoNames.includes(fe)]),f(ce,Ee)}),f(Ne,nt)};A(xt,Ne=>{B.uniqueWho.length>0&&Ne(Ct)})}q(()=>{re.disabled=s(n),je.disabled=s(n),O(Ye,o.whoMode==="replace"?"Remplacera tous les volontaires existants":"Ajoutera aux volontaires existants"),Qe.disabled=s(n),Ke.disabled=s(n)}),js(r,[],re,()=>o.whoMode,Ne=>o.whoMode=Ne),js(r,[],je,()=>o.whoMode,Ne=>o.whoMode=Ne),f(U,Z)};A(Oe,U=>{s(u)&&U(Le)})}var Fe=d(N,2),ve=c(Fe);ve.__click=[oo,n,t];var Pe=d(ve,2);Pe.__click=[qv,p,n,a,i,l,o,t,u];var oe=c(Pe);{var $e=U=>{var Z=Jv();f(U,Z)},qe=U=>{var Z=Xv(),j=L(Z);Ln(j,{class:"h-4 w-4"});var X=d(j);q(()=>O(X,` Appliquer à ${t.products.length??""} produit(s)`)),f(U,Z)};A(oe,U=>{s(n)?U($e):U(qe,!1)})}q(()=>{O(P,s(v)),w.disabled=s(n),O(Se,`${t.products.length??""} produit(s) concerné(s)`),ve.disabled=s(n),Pe.disabled=s(n)||!s(p)}),f(e,x),Q()}pt(["click","keydown"]);var tf=(e,t,r)=>t(s(r).id),rf=y('<div><!> <span class="max-w-32 truncate"> </span> <button class="btn btn-xs btn-circle btn-ghost ml-1 flex-shrink-0 p-0"><!></button></div>'),nf=y('<span class="flex items-center gap-1"><!> </span>'),af=y('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),sf=y('<div class="flex flex-wrap gap-2"></div> <!>',1);function of(e,t){H(t,!0);let r=ot(t,"badgeSize",3,"badge-lg"),n=ot(t,"badgeColor",3,"badge-success"),a=ot(t,"badgeStyle",3,"badge-soft"),i=ot(t,"onToggleItem",3,()=>{}),o=ot(t,"showStats",3,!0),l=K(Be({}));Vn(()=>{const x={};t.items.forEach(b=>{s(l)[b.id]!==void 0?x[b.id]=s(l)[b.id]:x[b.id]=!0}),JSON.stringify(Object.keys(x).sort())!==JSON.stringify(Object.keys(s(l)).sort())&&E(l,x,!0)});function u(x){s(l)[x]=!s(l)[x],i()(x)}const v=G(()=>Object.values(s(l)).filter(Boolean).length),p=G(()=>Object.values(s(l)).filter(x=>!x).length);var h=sf(),m=L(h);Ve(m,21,()=>t.items,x=>x.id,(x,b)=>{const $=G(()=>s(l)[s(b).id]);var D=rf(),P=c(D);{var w=I=>{var z=Y(),ge=L(z);Zr(ge,()=>s(b).icon,(Ae,Se)=>{Se(Ae,{class:"h-3 w-3",get title(){return s(b).title}})}),f(I,z)};A(P,I=>{s(b).icon&&I(w)})}var S=d(P,2),N=c(S),C=d(S,2);C.__click=[tf,u,b];var M=c(C);{var J=I=>{it(I,{})},T=I=>{od(I,{})};A(M,I=>{s($)?I(J):I(T,!1)})}q(()=>{Te(D,1,`badge ${r()??""} ${n()??""} flex items-center gap-2 transition-all duration-200
        ${s($)?`${a()}`:"badge-dash opacity-70 hover:opacity-90"}`),O(N,s(b).label),on(C,"title",s($)?"Retirer de la liste":"Réajouter à la liste")}),f(x,D)});var _=d(m,2);{var g=x=>{var b=af(),$=c(b),D=c($),P=c(D);Ln(P,{class:"text-success h-3 w-3"});var w=d(P),S=d(D,2);{var N=J=>{var T=nf(),I=c(T);it(I,{class:"text-error h-3 w-3"});var z=d(I);q(()=>O(z,` ${s(p)??""} retirés`)),f(J,T)};A(S,J=>{s(p)>0&&J(N)})}var C=d($,2),M=c(C);q(()=>{O(w,` ${s(v)??""} actifs`),O(M,`Total: ${t.items.length??""} items`)}),f(x,b)};A(_,x=>{o()&&x(g)})}f(e,h),Q()}pt(["click"]);function lf(e,t){E(t,!s(t))}var cf=y('<span class="text-base-content font-semibold"> </span>'),uf=y('<div class="text-base-content/80 flex-1"> </div>'),df=y('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),vf=y('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),ff=y('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function pf(e,t){let r=ot(t,"icon",3,Zu),n=ot(t,"class",3,""),a=ot(t,"initiallyOpen",3,!1),i=r(),o=K(Be(a())),l=Be(t.children);var u=ff(),v=c(u);v.__click=[lf,o];var p=c(v),h=c(p);i(h,{size:24,class:"text-base-content me-4 flex-shrink-0"});var m=d(h,2);{var _=w=>{var S=cf(),N=c(S);q(()=>O(N,t.title)),f(w,S)};A(m,w=>{t.title&&w(_)})}var g=d(p,2);{var x=w=>{var S=uf(),N=c(S);q(()=>O(N,t.contentVisible)),f(w,S)};A(g,w=>{t.contentVisible&&w(x)})}var b=d(g,2);{var $=w=>{var S=df(),N=c(S),C=c(N);{var M=I=>{var z=st("en savoir plus");f(I,z)},J=I=>{var z=st("masquer");f(I,z)};A(C,I=>{s(o)?I(J,!1):I(M)})}var T=d(N,2);{let I=G(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(o)?"rotate-180":""}`);Wu(T,{get class(){return s(I)}})}f(w,S)};A(b,w=>{l&&w($)})}var D=d(v,2);{var P=w=>{var S=vf(),N=c(S),C=c(N);ne(C,()=>t.children??te),q(()=>Te(S,1,`overflow-hidden transition-all duration-200 ${s(o)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),f(w,S)};A(D,w=>{l&&w(P)})}q(()=>{Te(u,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Fo(u,t.style),Te(v,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),on(v,"aria-expanded",s(o))}),f(e,u)}pt(["click"]);async function hf(e,t,r,n,a,i,o,l){if(!(!s(t)||s(r))){E(r,!0),E(n,null),E(a,null);try{const u=`FACTURE_${Date.now()}`,v=[];for(const h of s(i)){let m=h.$id;h.isSynced||(console.log(`[GroupPurchaseModal] Produit ${h.$id} local, création pour achat groupé...`),m=(await ur(h.$id,{},g=>B.getEnrichedProductById(g))).$id),v.push({productId:m,missingQuantities:h.missingQuantityArray||[]})}const p=await Ci(B.currentMainId,v,{invoiceId:u,notes:o.notes||`Achat groupé pour ${s(i).length} produits`,store:o.store.trim(),invoiceTotal:o.expense||void 0});E(a,{purchases:p.purchases.length,expense:!!p.expense},!0),console.log(`[GroupPurchaseModal] Achat groupé créé: ${p.purchases.length} achats`),l.onSuccess?.(),setTimeout(()=>{l.onClose()},1500)}catch(u){const v=u instanceof Error?u.message:"Erreur inconnue";E(n,v,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",u)}finally{E(r,!1)}}}function io(e,t,r){s(t)||r.onClose()}var _f=y('<div class="alert alert-error"><!> <span> </span></div>'),mf=y('<div class="alert alert-success"><!> <span> <!></span></div>'),gf=y(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),bf=y("<option> </option>"),yf=y("<option> </option>"),wf=y('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),xf=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Sf=y("<!> ",1),Pf=y(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option>Annulé</option></select> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function $f(e,t){H(t,!0);let r=K(!1),n=K(null),a=K(null),i=Be({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),o=K(Be(new Set));Vn(()=>{E(o,new Set(t.products.map(V=>V.$id)),!0)});const l=G(()=>t.products.filter(V=>s(o).has(V.$id))),u=G(()=>s(l).length!==0),v=G(()=>`Achat groupé (${s(l).length} produits sélectionnés)`);function p(V){const ce=new Set(s(o));ce.has(V)?ce.delete(V):ce.add(V),E(o,ce,!0)}const h=G(()=>t.products.map(V=>({id:V.$id,label:V.productName,title:V.productName})));var m=Pf(),_=c(m),g=c(_),x=c(g),b=c(x);pr(b,{class:"h-5 w-5"});var $=d(b),D=d(x,2);D.__click=[io,r,t];var P=c(D);it(P,{class:"h-4 w-4"});var w=d(g,2),S=c(w);{var N=V=>{var ce=_f(),fe=c(ce);AlertTriangle(fe,{class:"h-4 w-4"});var Ee=d(fe,2),De=c(Ee);q(()=>O(De,s(n))),f(V,ce)};A(S,V=>{s(n)&&V(N)})}var C=d(S,2);{var M=V=>{var ce=mf(),fe=c(ce);Ln(fe,{class:"h-4 w-4"});var Ee=d(fe,2),De=c(Ee),Ze=d(De);{var mt=ut=>{var Rt=st("+ 1 dépense globale");f(ut,Rt)};A(Ze,ut=>{s(a).expense&&ut(mt)})}q(()=>O(De,`Achat groupé créé avec succès ! ${s(a).purchases??""} produit(s) validés `)),f(V,ce)};A(C,V=>{s(a)&&V(M)})}var J=d(C,2),T=c(J);pf(T,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(V,ce)=>{var fe=gf();f(V,fe)},$$slots:{default:!0}});var I=d(J,2),z=d(c(I),2),ge=c(z),Ae=c(ge),Se=c(Ae);Jt(Se,{class:"h-4 w-4 opacity-50"});var be=d(Se,2),ue=d(Ae,2);Ve(ue,21,()=>B.uniqueStores,sn,(V,ce)=>{var fe=bf(),Ee=c(fe),De={};q(()=>{O(Ee,s(ce)),De!==(De=s(ce))&&(fe.value=(fe.__value=s(ce))??"")}),f(V,fe)});var R=d(ge,2),ee=c(R),ye=c(ee);ya(ye,{class:"h-4 w-4 opacity-50"});var Ie=d(ye,2),Oe=d(ee,2);Ve(Oe,21,()=>B.uniqueWho,sn,(V,ce)=>{var fe=yf(),Ee=c(fe),De={};q(()=>{O(Ee,s(ce)),De!==(De=s(ce))&&(fe.value=(fe.__value=s(ce))??"")}),f(V,fe)});var Le=d(R,2),Fe=c(Le),ve=c(Fe);Yu(ve,{class:"h-4 w-4 opacity-50"});var Pe=d(ve,2),oe=d(z,2),$e=c(oe),qe=c($e),U=c(qe);U.value=U.__value="delivered";var Z=d(U);Z.value=Z.__value="ordered";var j=d(Z);j.value=j.__value="requested";var X=d(j);X.value=X.__value="cancelled";var re=d(qe,2),je=d($e,2);{var ct=V=>{var ce=wf(),fe=c(ce),Ee=d(c(fe),2);q(()=>Ee.disabled=s(r)),Re(Ee,()=>i.deliveryDate,De=>i.deliveryDate=De),f(V,ce)};A(je,V=>{i.status==="ordered"&&V(ct)})}var Ye=d(oe,2),F=c(Ye),Me=c(F);gs(Me,{class:"h-4 w-4 opacity-50"});var Qe=d(Me,2),Ke=d(I,2),et=d(c(Ke),2);of(et,{get items(){return s(h)},onToggleItem:p,badgeSize:"badge-md"});var ae=d(Ke,2),Dt=c(ae);Dt.__click=[io,r,t];var xt=d(Dt,2);xt.__click=[hf,u,r,n,a,l,i,t];var Ct=c(xt);{var Ne=V=>{var ce=xf();f(V,ce)},nt=V=>{var ce=Sf(),fe=L(ce);pr(fe,{class:"h-4 w-4"});var Ee=d(fe);q(()=>O(Ee,` Valider ${s(l).length??""} produit(s)`)),f(V,ce)};A(Ct,V=>{s(r)?V(Ne):V(nt,!1)})}q(()=>{O($,` ${s(v)??""}`),D.disabled=s(r),be.disabled=s(r),Ie.disabled=s(r),Pe.disabled=s(r),qe.disabled=s(r),Te(re,1,`label text-sm ${i.status==="delivered"?"":"hidden"}`),Qe.disabled=s(r),Dt.disabled=s(r),xt.disabled=s(r)||!s(u)}),Re(be,()=>i.store,V=>i.store=V),Re(Ie,()=>i.who,V=>i.who=V),Re(Pe,()=>i.expense,V=>i.expense=V),Tr(qe,()=>i.status,V=>i.status=V),Re(Qe,()=>i.notes,V=>i.notes=V),f(e,m),Q()}pt(["click"]);var Ef=()=>B.setGroupBy("none"),kf=()=>B.setGroupBy("store"),Nf=()=>B.setGroupBy("productType"),Tf=(e,t)=>B.toggleProductType(t),Af=y("<button><!> </button>"),If=()=>B.toggleTemperature("frais"),Mf=()=>B.toggleTemperature("surgele"),Df=()=>B.clearTypeAndTemperatureFilters(),Cf=y('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Rf=(e,t)=>B.toggleStore(t),Of=y("<button> </button>"),qf=y('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),jf=(e,t)=>B.toggleWho(t),Bf=y("<button> </button>"),Lf=y('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),zf=(e,t)=>{B.clearFilters(),E(t,!1)},Vf=y('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Wf(e,t){H(t,!0);let r=K(!1);const n=G(()=>B.filters),a=G(()=>B.uniqueStores),i=G(()=>B.uniqueWho),o=G(()=>B.uniqueProductTypes);var l=Vf(),u=L(l),v=c(u),p=d(v,2),h=d(c(p),2),m=c(h),_=c(m),g=c(_);ts(g,{class:"w-5 h-5"});var x=d(_,2),b=c(x);it(b,{class:"w-4 h-4"});var $=d(m,2),D=d(c($),2),P=c(D);P.__change=[Ef];var w=d(P,2);w.__change=[kf];var S=d(w,2);S.__change=[Nf];var N=d($,2),C=c(N),M=d(c(C),2);Ve(M,20,()=>s(o),ve=>ve,(ve,Pe)=>{const oe=G(()=>ea(Pe));var $e=Af();$e.__click=[Tf,Pe];var qe=c($e);Zr(qe,()=>s(oe).icon,(Z,j)=>{j(Z,{class:"w-3 h-3 mr-1"})});var U=d(qe);q(Z=>{Te($e,1,`btn btn-sm ${Z??""}`),O(U,` ${s(oe).displayName??""}`)},[()=>s(n).selectedProductTypes.length===0?"btn-soft btn-accent":s(n).selectedProductTypes.includes(Pe)?"btn-accent":"btn-dash btn-accent"]),f(ve,$e)});var J=d(M,2),T=c(J);T.__click=[If];var I=c(T);rs(I,{class:"w-3 h-3"});var z=d(T,2);z.__click=[Mf];var ge=c(z);ns(ge,{class:"w-3 h-3"});var Ae=d(z,2);{var Se=ve=>{var Pe=Cf();Pe.__click=[Df];var oe=c(Pe);it(oe,{class:"w-3 h-3"}),f(ve,Pe)};A(Ae,ve=>{(s(n).selectedProductTypes.length>0||s(n).selectedTemperatures.length>0)&&ve(Se)})}var be=d(N,2);{var ue=ve=>{var Pe=qf(),oe=c(Pe),$e=d(c(oe),2);Ve($e,20,()=>s(a),qe=>qe,(qe,U)=>{var Z=Of();Z.__click=[Rf,U];var j=c(Z);q(X=>{Te(Z,1,`btn btn-sm ${X??""}`),O(j,U)},[()=>s(n).selectedStores.length===0?"btn-soft btn-accent":s(n).selectedStores.includes(U)?"btn-accent":"btn-dash btn-accent"]),f(qe,Z)}),f(ve,Pe)};A(be,ve=>{s(a).length>0&&ve(ue)})}var R=d(be,2);{var ee=ve=>{var Pe=Lf(),oe=c(Pe),$e=d(c(oe),2);Ve($e,20,()=>s(i),qe=>qe,(qe,U)=>{var Z=Bf();Z.__click=[jf,U];var j=c(Z);q(X=>{Te(Z,1,`btn btn-sm ${X??""}`),O(j,U)},[()=>s(n).selectedWho.length===0?"btn-soft btn-accent":s(n).selectedWho.includes(U)?"btn-accent":"btn-dash btn-accent"]),f(qe,Z)}),f(ve,Pe)};A(R,ve=>{s(i).length>0&&ve(ee)})}var ye=d(R,4);ye.__click=[zf,r];var Ie=c(ye);it(Ie,{class:"w-4 h-4 mr-2"});var Oe=d(u,2),Le=c(Oe),Fe=c(Le);ts(Fe,{class:"w-6 h-6"}),q((ve,Pe)=>{Fr(P,s(n).groupBy==="none"),Fr(w,s(n).groupBy==="store"),Fr(S,s(n).groupBy==="productType"),Te(T,1,`btn btn-sm ${ve??""}`),Te(z,1,`btn btn-sm ${Pe??""}`)},[()=>s(n).selectedTemperatures.length===0?"btn-soft btn-success":s(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(n).selectedTemperatures.length===0?"btn-soft btn-info":s(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),$c(v,()=>s(r),ve=>E(r,ve)),f(e,l),Q()}pt(["change","click"]);pt(["mousedown"]);var Uf=(e,t,r)=>t(r),Gf=y("<button><span> </span> <!></button>"),Hf=(e,t)=>t(),Qf=y('<div class="space-y-4"><div class="space-y-2"><fieldset><legend class="label"><span class="label-text">Dates incluses</span></legend> <div class="flex flex-wrap gap-1"><!> <button class="btn btn-sm btn-primary btn-outline ms-4" type="button"><span>Toutes les dates</span></button></div></fieldset></div></div>');function Kf(e,t){H(t,!0);const n=[...ot(t,"allDates",19,()=>[])()].sort();let a=n[0],i=n[n.length-1],o=K(Be(a)),l=K(Be(i));function u(P){s(o)===P&&s(l)===P?m():new Date(P)<new Date(s(o))?E(o,P,!0):(new Date(P)>new Date(s(l))||E(o,P,!0),E(l,P,!0))}function v(P){return new Date(P)>=new Date(s(o))&&new Date(P)<=new Date(s(l))?"btn-soft btn-primary":"btn-dash btn-primary opacity-80"}function p(P){return new Date(P).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function h(P){const S=new Date(P).getUTCHours();return S===12?"sun":S===20?"moon":S===8?"cloud":null}function m(){E(o,a,!0),E(l,i,!0)}Vn(()=>{B.setDateRange(s(o),s(l))});var _=Qf(),g=c(_),x=c(g),b=d(c(x),2),$=c(b);Ve($,18,()=>n,P=>P,(P,w)=>{var S=Gf();S.__click=[Uf,u,w];var N=c(S),C=c(N),M=d(N,2);{var J=I=>{cd(I,{size:16})},T=I=>{var z=Y(),ge=L(z);{var Ae=be=>{td(be,{size:16})},Se=be=>{var ue=Y(),R=L(ue);{var ee=ye=>{Qu(ye,{size:16})};A(R,ye=>{h(w)==="cloud"&&ye(ee)},!0)}f(be,ue)};A(ge,be=>{h(w)==="moon"?be(Ae):be(Se,!1)},!0)}f(I,z)};A(M,I=>{h(w)==="sun"?I(J):I(T,!1)})}q((I,z)=>{Te(S,1,`btn btn-sm ${I??""}`),O(C,z)},[()=>v(w),()=>p(w)]),f(P,S)});var D=d($,2);D.__click=[Hf,m],f(e,_),Q()}pt(["click"]);const kn=e=>{var t=Zf(),r=c(t);aa(r,{class:"h-4 w-4 text-amber-600"}),f(e,t)};function Yf(){}var Zf=y('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),Jf=()=>B.clearFilters(),Xf=e=>B.setSearchQuery(e.currentTarget.value),Ff=()=>B.setGroupBy("none"),ep=()=>B.setGroupBy("store"),tp=()=>B.setGroupBy("productType"),rp=(e,t)=>B.toggleProductType(t),np=y("<button><!> </button>"),ap=()=>B.toggleTemperature("frais"),sp=()=>B.toggleTemperature("surgele"),op=()=>B.clearTypeAndTemperatureFilters(),ip=y('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),lp=y('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),cp=(e,t)=>B.toggleStore(t),up=y("<button><!> </button>"),dp=()=>B.clearStoreFilters(),vp=y('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),fp=y('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),pp=(e,t)=>B.toggleWho(t),hp=y("<button><!> </button>"),_p=()=>B.clearWhoFilters(),mp=y('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),gp=y('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),bp=()=>B.handleSort("productName"),yp=()=>B.handleSort("store"),wp=()=>B.handleSort("who"),xp=()=>B.handleSort("productType"),Sp=y('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Pp=(e,t,r)=>t("store",r().map(n=>n.$id),r()),$p=(e,t,r)=>t("who",r().map(n=>n.$id),r()),Ep=(e,t,r)=>t(r()),kp=y(`<button class="btn btn-sm btn-success btn-soft" title="Ouvrir le modal d'achat groupé"><!> Achat groupé <!></button>`),Np=y('<tr class="bg-base-200 sticky top-11 z-10 font-semibold"><td colspan="7" class="py-3"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!></div> <div class="flex items-center gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> Magasin <!></button> <button class="btn btn-sm btn-info btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> Volontaires <!></button> <!></div></div></td></tr>'),Tp=(e,t,r)=>t(s(r).$id,"recettes"),Ap=y('<div class="text-base-content/60 text-xs"> </div>'),Ip=y('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Mp=y('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Dp=(e,t,r)=>t(s(r).$id,"magasins"),Cp=y('<div class="tooltip tooltip-info"><div class="text-center"> </div></div>'),Rp=y('<div class="text-center"> </div>'),Op=(e,t,r)=>t(s(r).$id,"volontaires"),qp=y('<span class="badge badge-soft badge-info badge-sm"> </span>'),jp=y('<div class="flex flex-wrap justify-center gap-2 pr-8"></div>'),Bp=(e,t,r)=>t(s(r).$id,"recettes"),Lp=y('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),zp=(e,t,r)=>t(s(r).$id,"achats"),Vp=y("<div><!> <span> </span></div>"),Wp=y('<span class="text-center">-</span>'),Up=(e,t,r)=>t(s(r)),Gp=y('<div class="flex items-center justify-center gap-2"><div class="bg-warning m-auto rounded px-2 py-1"> </div> <button class="btn btn-success btn-xs opacity-0 transition-all group-hover:opacity-100 hover:scale-105" title="Valider comme reçu"><!></button></div>'),Hp=y('<tr class="hover:bg-base-200/20 transition-colors"><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-2 text-center text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap justify-center gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!></td></tr>'),Qp=y("<!> <!>",1),Kp=y('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Yp=y('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><!> <div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!> <!> <!>',1);function Zp(e,t){H(t,!0);const r={Package:Wn,MessageCircleQuestionMark:ed,ShoppingCart:pr,Clock:Hu,CircleCheck:Uu,CircleX:Gu},n=G(()=>B.displayProducts),a=G(()=>B.stats),i=G(()=>B.uniqueStores),o=G(()=>B.uniqueWho),l=G(()=>B.uniqueProductTypes),u=G(()=>B.filters);let v=K(null),p=K("recettes"),h=K(!1),m=K("store"),_=K(Be([])),g=K(Be([])),x=K(!1),b=K(Be([]));function $(W,he="recettes"){E(p,he,!0),E(v,W,!0)}function D(){E(v,null)}function P(W,he,dt){E(m,W,!0),E(_,he,!0),E(g,dt,!0),E(h,!0)}function w(){E(h,!1),E(m,"store"),E(_,[],!0),E(g,[],!0)}function S(W){console.log(`[ProductsTable] Modification groupée réussie: ${W.updatedCount} produits`)}function N(W){E(b,W,!0),E(x,!0)}function C(){E(x,!1),E(b,[],!0)}function M(){console.log("[ProductsTable] Achat groupé créé avec succès"),C()}async function J(W){try{if(!B.currentMainId)throw new Error("mainId non disponible");const he=W.missingQuantityArray||[];if(he.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let dt=W.$id;W.isSynced||(console.log(`[ProductsTable] Produit ${W.$id} local, création pour validation rapide...`),dt=(await ur(W.$id,{},Ue=>B.getEnrichedProductById(Ue))).$id,console.log(`[ProductsTable] Produit sync créé: ${dt}`)),await _s(B.currentMainId,dt,he,{store:W.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${W.productName}`)}catch(he){console.error("[ProductsTable] Erreur validation rapide:",he),alert("Erreur lors de la validation rapide: "+he.message)}}var T=Yp(),I=L(T),z=c(I),ge=c(z),Ae=c(ge);ro(Ae,{class:"mr-1 h-4 w-4"});var Se=d(Ae),be=d(ge,2);be.__click=[Yf];var ue=c(be);nd(ue,{class:"mr-1 h-4 w-4"});var R=d(z,2),ee=c(R),ye=c(ee),Ie=c(ye),Oe=c(Ie);ts(Oe,{class:"h-5 w-5"});var Le=d(Ie,2);Le.__click=[Jf];var Fe=c(Le);it(Fe,{class:"h-4 w-4"});var ve=d(ee,2),Pe=c(ve),oe=d(c(Pe),2),$e=c(oe);ld($e,{class:"h-4 w-4"});var qe=d($e,2);qe.__input=[Xf];var U=d(Pe,2),Z=d(c(U),2),j=c(Z);j.__change=[Ff];var X=d(j,2);X.__change=[ep];var re=d(X,2);re.__change=[tp];var je=d(ve,2),ct=c(je);Kf(ct,{get allDates(){return B.allDates}});var Ye=d(ct,2),F=c(Ye);{var Me=W=>{var he=lp(),dt=c(he),_e=d(c(dt),2),Ue=c(_e);Ve(Ue,16,()=>s(l),tt=>tt,(tt,rt)=>{const Ht=G(()=>ea(rt));var Ot=np();Ot.__click=[rp,rt];var ir=c(Ot);Zr(ir,()=>s(Ht).icon,(lr,Qr)=>{Qr(lr,{class:"mr-1 h-5 w-5"})});var Hr=d(ir);q(lr=>{Te(Ot,1,`btn btn-sm ${lr??""}`),O(Hr,` ${s(Ht).displayName??""}`)},[()=>s(u).selectedProductTypes.length===0?"btn-soft btn-accent":s(u).selectedProductTypes.includes(rt)?"btn-accent":"btn-dash btn-accent"]),f(tt,Ot)});var At=d(Ue,2);At.__click=[ap];var or=c(At);rs(or,{class:"h-5 w-5"});var We=d(At,2);We.__click=[sp];var Je=c(We);ns(Je,{class:"h-5 w-5"});var ze=d(We,2);{var pe=tt=>{var rt=ip();rt.__click=[op];var Ht=c(rt);it(Ht,{class:"h-3 w-3"}),f(tt,rt)};A(ze,tt=>{(s(u).selectedProductTypes.length>0||s(u).selectedTemperatures.length>0)&&tt(pe)})}q((tt,rt)=>{Te(At,1,`btn btn-sm ms-4 ${tt??""}`),Te(We,1,`btn btn-sm ${rt??""}`)},[()=>s(u).selectedTemperatures.length===0?"btn-soft btn-success":s(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(u).selectedTemperatures.length===0?"btn-soft btn-info":s(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),f(W,he)};A(F,W=>{s(l).length>0&&W(Me)})}var Qe=d(Ye,2),Ke=c(Qe);{var et=W=>{var he=fp(),dt=c(he),_e=d(c(dt),2),Ue=c(_e);Ve(Ue,16,()=>s(i),We=>We,(We,Je)=>{var ze=up();ze.__click=[cp,Je];var pe=c(ze);Jt(pe,{class:"mr-1 h-3 w-3"});var tt=d(pe);q(rt=>{Te(ze,1,`btn btn-xs ${rt??""}`),O(tt,` ${Je??""}`)},[()=>s(u).selectedStores.length===0?"btn-soft btn-accent":s(u).selectedStores.includes(Je)?"btn-accent":"btn-dash btn-accent"]),f(We,ze)});var At=d(Ue,2);{var or=We=>{var Je=vp();Je.__click=[dp];var ze=c(Je);it(ze,{class:"h-3 w-3"}),f(We,Je)};A(At,We=>{s(u).selectedStores.length>0&&We(or)})}f(W,he)};A(Ke,W=>{s(i).length>0&&W(et)})}var ae=d(Ke,2);{var Dt=W=>{var he=gp(),dt=c(he),_e=d(c(dt),2),Ue=c(_e);Ve(Ue,16,()=>s(o),We=>We,(We,Je)=>{var ze=hp();ze.__click=[pp,Je];var pe=c(ze);ya(pe,{class:"mr-1 h-3 w-3"});var tt=d(pe);q(rt=>{Te(ze,1,`btn btn-xs ${rt??""}`),O(tt,` ${Je??""}`)},[()=>s(u).selectedWho.length===0?" btn-soft btn-info":s(u).selectedWho.includes(Je)?" btn-info":"btn-dash btn-info"]),f(We,ze)});var At=d(Ue,2);{var or=We=>{var Je=mp();Je.__click=[_p];var ze=c(Je);it(ze,{class:"h-3 w-3"}),f(We,Je)};A(At,We=>{s(u).selectedWho.length>0&&We(or)})}f(W,he)};A(ae,W=>{s(o).length>0&&W(Dt)})}var xt=d(R,2),Ct=c(xt),Ne=c(Ct),nt=c(Ne),V=c(nt);V.__click=[bp];var ce=c(V),fe=c(ce);ro(fe,{class:"h-4 w-4"});var Ee=d(fe,2);{var De=W=>{var he=st();q(()=>O(he,s(u).sortDirection==="asc"?"↑":"↓")),f(W,he)};A(Ee,W=>{s(u).sortColumn==="productName"&&W(De)})}var Ze=d(V);Ze.__click=[yp];var mt=c(Ze),ut=c(mt);Jt(ut,{class:"h-4 w-4"});var Rt=d(ut,2);{var nr=W=>{var he=st();q(()=>O(he,s(u).sortDirection==="asc"?"↑":"↓")),f(W,he)};A(Rt,W=>{s(u).sortColumn==="store"&&W(nr)})}var Wt=d(Ze);Wt.__click=[wp];var gr=c(Wt),br=c(gr);sa(br,{class:"h-4 w-4"});var Br=d(br,2);{var Lr=W=>{var he=st();q(()=>O(he,s(u).sortDirection==="asc"?"↑":"↓")),f(W,he)};A(Br,W=>{s(u).sortColumn==="who"&&W(Lr)})}var Ut=d(Wt);Ut.__click=[xp];var zr=c(Ut),yr=d(c(zr));{var wr=W=>{var he=st();q(()=>O(he,s(u).sortDirection==="asc"?"↑":"↓")),f(W,he)};A(yr,W=>{s(u).sortColumn==="productType"&&W(wr)})}var ar=d(Ut,2),xr=c(ar),sr=c(xr);pr(sr,{class:"h-4 w-4"});var Vr=d(ar),Sr=c(Vr),Wr=c(Sr);Xu(Wr,{class:"h-4 w-4"});var pn=d(Ne);Ve(pn,21,()=>Object.entries(s(n)),([W,he])=>W,(W,he)=>{var dt=G(()=>vo(s(he),2));let _e=()=>s(dt)[0],Ue=()=>s(dt)[1];var At=Qp(),or=L(At);{var We=ze=>{const pe=G(()=>ea(_e()));var tt=Np(),rt=c(tt),Ht=c(rt),Ot=c(Ht),ir=c(Ot);{var Hr=Pt=>{var vt=st();q(()=>O(vt,`🏪 ${_e()??""} (${Ue().length??""})`)),f(Pt,vt)},lr=Pt=>{var vt=Y(),$r=L(vt);{var yn=cr=>{var Qt=Sp(),wn=c(Qt);Zr(wn,()=>s(pe).icon,(Hn,Ma)=>{Ma(Hn,{class:"h-4 w-4"})});var Gn=d(wn,2),Aa=c(Gn),xn=d(Gn,2),Ia=c(xn);q(()=>{O(Aa,s(pe).displayName),O(Ia,`(${Ue().length??""})`)}),f(cr,Qt)},Ta=cr=>{var Qt=st();q(()=>O(Qt,`📦 ${_e()??""} (${Ue().length??""})`)),f(cr,Qt)};A($r,cr=>{s(u).groupBy==="productType"?cr(yn):cr(Ta,!1)},!0)}f(Pt,vt)};A(ir,Pt=>{s(u).groupBy==="store"?Pt(Hr):Pt(lr,!1)})}var Qr=d(Ot,2),mn=c(Qr);mn.__click=[Pp,P,Ue];var Un=c(mn);Jt(Un,{size:16});var $a=d(Un,2);aa($a,{size:16});var gn=d(mn,2);gn.__click=[$p,P,Ue];var bn=c(gn);sa(bn,{size:16});var Ea=d(bn,2);aa(Ea,{size:16});var ka=d(gn,2);{var Na=Pt=>{var vt=kp();vt.__click=[Ep,N,Ue];var $r=c(vt);pr($r,{size:16});var yn=d($r,2);to(yn,{size:16}),f(Pt,vt)};A(ka,Pt=>{Ue().some(vt=>vt.displayMissingQuantity!=="✅ Complet")&&Pt(Na)})}f(ze,tt)};A(or,ze=>{_e()!==""&&ze(We)})}var Je=d(or,2);Ve(Je,17,()=>fd(Ue(),s(u)),ze=>ze.$id,(ze,pe)=>{const tt=G(()=>B.getFormattedTotalNeeded(s(pe).$id)),rt=G(()=>ea(s(pe).productType)),Ht=G(()=>pd(s(pe).purchases||[]));var Ot=Hp(),ir=c(Ot);ir.__click=[Tp,$,pe];var Hr=c(ir),lr=c(Hr),Qr=c(lr),mn=c(Qr),Un=d(Qr,2);{var $a=de=>{var ke=Ap(),Ge=c(ke);q(()=>O(Ge,`Ancien: ${s(pe).previousNames[0]??""}`)),f(de,ke)};A(Un,de=>{s(pe).previousNames&&s(pe).previousNames.length>0&&de($a)})}var gn=d(lr,2),bn=c(gn);{var Ea=de=>{var ke=Ip(),Ge=c(ke);rs(Ge,{class:"text-success h-4 w-4"}),f(de,ke)};A(bn,de=>{s(pe).pFrais&&de(Ea)})}var ka=d(bn,2);{var Na=de=>{var ke=Mp(),Ge=c(ke);ns(Ge,{class:"text-info h-4 w-4"}),f(de,ke)};A(ka,de=>{s(pe).pSurgel&&de(Na)})}var Pt=d(Hr,2);kn(Pt);var vt=d(ir);vt.__click=[Dp,$,pe];var $r=c(vt);{var yn=de=>{var ke=Cp(),Ge=c(ke),$t=c(Ge);q(()=>{on(ke,"data-tip",s(pe).storeInfo?.storeComment),O($t,s(pe).storeInfo?.storeName||"-")}),f(de,ke)},Ta=de=>{var ke=Rp(),Ge=c(ke);q(()=>O(Ge,s(pe).storeInfo?.storeName||"-")),f(de,ke)};A($r,de=>{s(pe).storeInfo?.storeComment?de(yn):de(Ta,!1)})}var cr=d($r,2);kn(cr);var Qt=d(vt);Qt.__click=[Op,$,pe];var wn=c(Qt);{var Gn=de=>{var ke=jp();Ve(ke,20,()=>s(pe).who,Ge=>Ge,(Ge,$t)=>{var qt=qp(),Er=c(qt);q(()=>O(Er,$t)),f(Ge,qt)}),f(de,ke)};A(wn,de=>{s(pe).who&&s(pe).who.length>0&&de(Gn)})}var Aa=d(wn,2);kn(Aa);var xn=d(Qt),Ia=c(xn),Hn=c(Ia);Zr(Hn,()=>s(rt).icon,(de,ke)=>{ke(de,{class:"h-3 w-3"})});var Ma=d(Hn),Da=d(xn);Da.__click=[Bp,$,pe];var bs=c(Da),Oi=c(bs),ys=d(bs,2);{var qi=de=>{var ke=Lp(),Ge=c(ke),$t=c(Ge),qt=d($t);ms(qt,{class:"h-3 w-3"});var Er=d(Ge,2),Qn=c(Er),Sn=d(Qn);dd(Sn,{class:"h-3 w-3"}),q(()=>{O($t,`${s(pe)?.nbRecipes??""} `),O(Qn,`${s(pe)?.totalAssiettes??""} `)}),f(de,ke)};A(ys,de=>{(s(pe).nbRecipes||s(pe).totalAssiettes)&&de(qi)})}var ji=d(ys,2);kn(ji);var Ca=d(Da);Ca.__click=[zp,$,pe];var ws=c(Ca),xs=c(ws);Ve(xs,17,()=>s(Ht),de=>de.status,(de,ke)=>{const Ge=G(()=>r[s(ke).icon]);var $t=Vp(),qt=c($t);Zr(qt,()=>s(Ge),(Sn,Hi)=>{Hi(Sn,{class:"h-4 w-4"})});var Er=d(qt,2),Qn=c(Er);q(Sn=>{Te($t,1,`badge badge-soft flex items-center gap-2 ${s(ke).badgeClass??""}`),O(Qn,Sn)},[()=>wa(s(ke).quantity,s(ke).unit)]),f(de,$t)});var Bi=d(xs,2);{var Li=de=>{var ke=Wp();f(de,ke)};A(Bi,de=>{s(Ht).length===0&&de(Li)})}var zi=d(ws,2);kn(zi);var Vi=d(Ca),Wi=c(Vi);{var Ui=de=>{var ke=Gp(),Ge=c(ke),$t=c(Ge),qt=d(Ge,2);qt.__click=[Up,J,pe];var Er=c(qt);Ln(Er,{class:"h-3 w-3"}),q(()=>O($t,s(pe).displayMissingQuantity)),f(de,ke)},Gi=de=>{to(de,{size:28,strokeWidth:3,class:"text-success m-auto"})};A(Wi,de=>{s(pe).displayMissingQuantity!=="✅ Complet"?de(Ui):de(Gi,!1)})}q(()=>{O(mn,s(pe).productName),Te(vt,1,`${s(u).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),Te(xn,1,Xo(s(u).groupBy==="productType"?"hidden":"")),O(Ma,` ${s(rt).displayName??""}`),O(Oi,s(tt))}),f(ze,Ot)}),f(W,At)});var Ur=d(Ct,2);{var St=W=>{var he=Kp();f(W,he)};A(Ur,W=>{Object.values(s(n)).flat().length===0&&W(St)})}var Gt=d(I,2);{var hn=W=>{Ov(W,{get productId(){return s(v)},get initialTab(){return s(p)},onClose:D})};A(Gt,W=>{s(v)&&W(hn)})}var Gr=d(Gt,2);{var _n=W=>{ef(W,{get productIds(){return s(_)},get products(){return s(g)},get editType(){return s(m)},onClose:w,onSuccess:S})};A(Gr,W=>{s(h)&&W(_n)})}var Pr=d(Gr,2);{var Sa=W=>{$f(W,{get products(){return s(b)},onClose:C,onSuccess:M})};A(Pr,W=>{s(x)&&W(Sa)})}var Pa=d(Pr,2);Wf(Pa,{}),q(()=>{O(Se,` ${s(a).total??""}`),xc(qe,s(u).searchQuery),Fr(j,s(u).groupBy==="none"),Fr(X,s(u).groupBy==="store"),Fr(re,s(u).groupBy==="productType"),Te(Ze,1,`hover:bg-base-100 cursor-pointer text-center ${s(u).groupBy==="store"?"hidden":""}`),Te(Ut,1,`hover:bg-base-100 cursor-pointer text-center ${s(u).groupBy==="productType"?"hidden":""}`)}),f(e,T),Q()}pt(["click","input","change"]);Nl();var Jp=y('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function Xp(e){var t=Jp();f(e,t)}var Fp=y('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function eh(e,t){var r=Fp(),n=d(c(r),2),a=d(c(n),2),i=c(a);q(()=>O(i,t.message)),f(e,r)}var th=y('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function rh(e,t){var r=th(),n=c(r),a=c(n);Ri(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=d(a,2),o=d(c(i),2),l=c(o);q(()=>O(l,t.message||"Erreur inconnue")),f(e,r)}var nh=y('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),ah=y('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),sh=y('<div class="text-base-content/60"> </div>'),oh=y('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),ih=y('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),lh=y('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),ch=y('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function uh(e,t){H(t,!0);let r,n=K(null),a=K(!0),i=K(!1);ai(async()=>{r=vu();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await B.initialize(r)}catch(R){const ee=R instanceof Error?R.message:"Erreur lors de l'initialisation";E(n,ee,!0),console.error("[App] Erreur initialisation:",R)}finally{E(a,!1)}}),Ac(()=>{B.destroy()});async function o(){if(!(!r||s(i))){E(i,!0);try{await B.forceReload(r)}catch(R){console.error("[App] Erreur lors du rechargement forcé:",R)}finally{E(i,!1)}}}const l=G(()=>s(n)||B.error),u=G(()=>s(a)||B.loading),v=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var p=ch(),h=c(p),m=c(h),_=c(m),g=d(c(_),2),x=c(g);{var b=R=>{var ee=nh();f(R,ee)};A(x,R=>{B.realtimeConnected&&R(b)})}var $=d(x,2);{var D=R=>{var ee=ah();f(R,ee)};A($,R=>{B.syncing&&R(D)})}var P=d($,2);{var w=R=>{var ee=sh(),ye=c(ee);q(Ie=>O(ye,`Maj: ${Ie??""}`),[()=>new Date(B.lastSync).toLocaleTimeString()]),f(R,ee)};A(P,R=>{B.lastSync&&R(w)})}var S=d(P,2);{var N=R=>{var ee=oh();let ye;ee.__click=o;var Ie=c(ee);ad(Ie,{class:"h-4 w-4"}),q(Oe=>{ye=Te(ee,1,"btn btn-outline btn-sm",null,ye,Oe),ee.disabled=s(i)||B.loading},[()=>({loading:s(i)||B.loading})]),f(R,ee)};A(S,R=>{s(n)||R(N)})}var C=d(S,2);{var M=R=>{var ee=ih(),ye=c(ee),Ie=c(ye);Fu(Ie,{class:"mr-2 h-4 w-4"}),q(()=>on(ye,"href",v)),f(R,ee)};A(C,R=>{s(n)&&R(M)})}var J=d(h,2),T=c(J);{var I=R=>{rh(R,{get message(){return s(l)}})},z=R=>{var ee=Y(),ye=L(ee);{var Ie=Oe=>{eh(Oe,{get message(){return s(l)}})};A(ye,Oe=>{s(l)&&Oe(Ie)},!0)}f(R,ee)};A(T,R=>{s(n)?R(I):R(z,!1)})}var ge=d(T,2);{var Ae=R=>{Xp(R)};A(ge,R=>{s(u)&&R(Ae)})}var Se=d(ge,2);{var be=R=>{Zp(R,{})},ue=R=>{var ee=Y(),ye=L(ee);{var Ie=Oe=>{var Le=lh();f(Oe,Le)};A(ye,Oe=>{!B.loading&&!s(n)&&Oe(Ie)},!0)}f(R,ee)};A(Se,R=>{B.enrichedProducts.length>0?R(be):R(ue,!1)})}f(e,p),Q()}pt(["click"]);dc(uh,{target:document.getElementById("app_products")});
