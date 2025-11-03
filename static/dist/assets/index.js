(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const Gs=!1;var Un=Array.isArray,Io=Array.prototype.indexOf,Va=Array.from,Ea=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,Do=Object.getOwnPropertyDescriptors,Mo=Object.prototype,Co=Array.prototype,Hs=Object.getPrototypeOf,os=Object.isExtensible;function sn(e){return typeof e=="function"}const ne=()=>{};function Ro(e){for(var t=0;t<e.length;t++)e[t]()}function Qs(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function Ks(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const _t=2,Wa=4,Ua=8,xr=16,Ut=32,Pr=64,Ga=128,$t=256,Bn=512,it=1024,bt=2048,cr=4096,Tt=8192,Er=16384,Ha=32768,$r=65536,ls=1<<17,Oo=1<<18,Jr=1<<19,qo=1<<20,$a=1<<21,Gn=1<<22,yr=1<<23,wr=Symbol("$state"),Ys=Symbol("legacy props"),jo=Symbol(""),vn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Zs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Bo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Lo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function zo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Vo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Wo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Uo(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Go(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ho(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Qo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ko(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Hn=1,Qn=2,Js=4,Yo=8,Zo=16,Jo=1,Xo=2,Fo=4,el=8,tl=16,rl=1,nl=2,Qe=Symbol(),al="http://www.w3.org/1999/xhtml",sl="http://www.w3.org/2000/svg",il="@attach";function ol(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function ll(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let cl=!1;function Xs(e){return e===this.v}function Fs(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ul(e,t){return e!==t}function ei(e){return!Fs(e,this.v)}let Xr=!1,dl=!1;function fl(){Xr=!0}let Be=null;function Ur(e){Be=e}function U(e,t=!1,r){Be={p:Be,c:null,e:null,s:e,x:null,l:Xr&&!t?{s:null,u:null,$:[]}:null}}function G(e){var t=Be,r=t.e;if(r!==null){t.e=null;for(var n of r)_i(n)}return Be=t.p,{}}function Fr(){return!Xr||Be!==null&&Be.l===null}let br=[];function ti(){var e=br;br=[],Ro(e)}function Wt(e){if(br.length===0&&!hn){var t=br;queueMicrotask(()=>{t===br&&ti()})}br.push(e)}function vl(){for(;br.length>0;)ti()}const hl=new WeakMap;function ri(e){var t=fe;if(t===null)return he.f|=yr,e;if((t.f&Ha)===0){if((t.f&Ga)===0)throw!t.parent&&e instanceof Error&&ni(e),e;t.b.error(e)}else Gr(e,t)}function Gr(e,t){for(;t!==null;){if((t.f&Ga)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&ni(e),e}function ni(e){const t=hl.get(e);t&&(Ea(e,"message",{value:t.message}),Ea(e,"stack",{value:t.stack}))}const Dn=new Set;let $e=null,Cn=null,ka=new Set,Ct=[],Kn=null,Na=!1,hn=!1;class Et{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#o=[];#s=[];#i=[];#n=[];#a=[];#d=[];skipped_effects=new Set;process(t){Ct=[],Cn=null;var r=Et.apply(this);for(const o of t)this.#f(o);if(this.#c===0){this.#v();var n=this.#s,a=this.#i;this.#s=[],this.#i=[],this.#n=[],Cn=this,$e=null,cs(n),cs(a),Cn=null,this.#u?.resolve()}else this.#l(this.#s),this.#l(this.#i),this.#l(this.#n);r();for(const o of this.#o)bn(o);this.#o=[]}#f(t){t.f^=it;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Ut|Pr))!==0,o=a&&(n&it)!==0,i=o||(n&Tt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=it:(n&Wa)!==0?this.#i.push(r):(n&it)===0&&((n&Gn)!==0&&r.b?.is_pending()?this.#o.push(r):ta(r)&&((r.f&xr)!==0&&this.#n.push(r),bn(r)));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#l(t){for(const r of t)((r.f&bt)!==0?this.#a:this.#d).push(r),ut(r,it);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){$e=this}deactivate(){$e=null}flush(){if(Ct.length>0){if(this.activate(),ai(),$e!==null&&$e!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of ka)if(ka.delete(t),t(),$e!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),Dn.size>1){this.#e.clear();let t=!0;for(const r of Dn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;si(n)}if(Ct.length>0){$e=r;const n=Et.apply(r);for(const a of Ct)r.#f(a);Ct=[],n()}}$e=null}Dn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#a)ut(t,bt),Sr(t);for(const t of this.#d)ut(t,cr),Sr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=Qs()).promise}static ensure(){if($e===null){const t=$e=new Et;Dn.add($e),hn||Et.enqueue(()=>{$e===t&&t.flush()})}return $e}static enqueue(t){Wt(t)}static apply(t){return ne}}function pl(e){var t=hn;hn=!0;try{for(var r;;){if(vl(),Ct.length===0&&($e?.flush(),Ct.length===0))return Kn=null,r;ai()}}finally{hn=t}}function ai(){var e=Vr;Na=!0;try{var t=0;for(vs(!0);Ct.length>0;){var r=Et.ensure();if(t++>1e3){var n,a;_l()}r.process(Ct),sr.clear()}}finally{Na=!1,vs(e),Kn=null}}function _l(){try{Wo()}catch(e){Gr(e,Kn)}}let gr=null;function cs(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Er|Tt))===0&&ta(n)&&(gr=[],bn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?bi(n):n.fn=null),gr?.length>0)){sr.clear();for(const a of gr)bn(a);gr=[]}}gr=null}}function si(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&_t)!==0?si(t):(r&(Gn|xr))!==0&&(ut(t,bt),Sr(t))}}function Sr(e){for(var t=Kn=e;t.parent!==null;){t=t.parent;var r=t.f;if(Na&&t===fe&&(r&xr)!==0)return;if((r&(Pr|Ut))!==0){if((r&it)===0)return;t.f^=it}}Ct.push(t)}function ii(e){let t=0,r=or(0),n;return()=>{Il()&&(s(r),Fn(()=>(t===0&&(n=en(()=>e(()=>Rt(r)))),t+=1,()=>{Wt(()=>{t-=1,t===0&&(n?.(),n=void 0,Rt(r))})})))}}var ml=$r|Jr|Ga;function gl(e,t,r){new bl(e,t,r)}class bl{parent;#e=!1;#r;#c=null;#u;#o;#s;#i=null;#n=null;#a=null;#d=null;#f=0;#l=0;#v=!1;#h=null;#p=()=>{this.#h&&Hr(this.#h,this.#f)};#x=ii(()=>(this.#h=or(this.#f),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#o=n,this.parent=fe.b,this.#e=!!this.#u.pending,this.#s=Qt(()=>{fe.b=this;{try{this.#i=Fe(()=>n(this.#r))}catch(a){this.error(a)}this.#l>0?this.#b():this.#e=!1}},ml)}#t(){try{this.#i=Fe(()=>this.#o(this.#r))}catch(t){this.error(t)}this.#e=!1}#P(){const t=this.#u.pending;t&&(this.#n=Fe(()=>t(this.#r)),Et.enqueue(()=>{this.#i=this.#g(()=>(Et.ensure(),Fe(()=>this.#o(this.#r)))),this.#l>0?this.#b():(Lt(this.#n,()=>{this.#n=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#g(t){var r=fe,n=he,a=Be;Ot(this.#s),ht(this.#s),Ur(this.#s.ctx);try{return t()}catch(o){return ri(o),null}finally{Ot(r),ht(n),Ur(a)}}#b(){const t=this.#u.pending;this.#i!==null&&(this.#d=document.createDocumentFragment(),yl(this.#i,this.#d)),this.#n===null&&(this.#n=Fe(()=>t(this.#r)))}#y(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#y(t);return}this.#l+=t,this.#l===0&&(this.#e=!1,this.#n&&Lt(this.#n,()=>{this.#n=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),Wt(()=>{Et.ensure().flush()}))}update_pending_count(t){this.#y(t),this.#f+=t,ka.add(this.#p)}get_effect_pending(){return this.#x(),s(this.#h)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#i&&(et(this.#i),this.#i=null),this.#n&&(et(this.#n),this.#n=null),this.#a&&(et(this.#a),this.#a=null);var a=!1,o=!1;const i=()=>{if(a){ll();return}a=!0,o&&Ko(),Et.ensure(),this.#f=0,this.#a!==null&&Lt(this.#a,()=>{this.#a=null}),this.#e=this.has_pending_snippet(),this.#i=this.#g(()=>(this.#v=!1,Fe(()=>this.#o(this.#r)))),this.#l>0?this.#b():this.#e=!1};var l=he;try{ht(null),o=!0,r?.(t,i),o=!1}catch(u){Gr(u,this.#s&&this.#s.parent)}finally{ht(l)}n&&Wt(()=>{this.#a=this.#g(()=>{this.#v=!0;try{return Fe(()=>{n(this.#r,()=>t,()=>i)})}catch(u){return Gr(u,this.#s.parent),null}finally{this.#v=!1}})})}}function yl(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:En(r);t.append(r),r=a}}function oi(e,t,r){const n=Fr()?Yn:Qa;if(t.length===0){r(e.map(n));return}var a=$e,o=fe,i=wl();Promise.all(t.map(l=>Sl(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(u){(o.f&Er)===0&&Gr(u,o)}a?.deactivate(),li()}).catch(l=>{Gr(l,o)})}function wl(){var e=fe,t=he,r=Be,n=$e;return function(){Ot(e),ht(t),Ur(r),n?.activate()}}function li(){Ot(null),ht(null),Ur(null)}function Yn(e){var t=_t|bt,r=he!==null&&(he.f&_t)!==0?he:null;return fe===null||r!==null&&(r.f&$t)!==0?t|=$t:fe.f|=Jr,{ctx:Be,deps:null,effects:null,equals:Xs,f:t,fn:e,reactions:null,rv:0,v:Qe,wv:0,parent:r??fe,ac:null}}function Sl(e,t){let r=fe;r===null&&Bo();var n=r.b,a=void 0,o=or(Qe),i=!he,l=new Map;return Ml(()=>{var u=Qs();a=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(m){u.reject(m)}var f=$e,h=n.is_pending();i&&(n.update_pending_count(1),h||(f.increment(),l.get(f)?.reject(vn),l.set(f,u)));const _=(m,p=void 0)=>{h||f.activate(),p?p!==vn&&(o.f|=yr,Hr(o,p)):((o.f&yr)!==0&&(o.f^=yr),Hr(o,m)),i&&(n.update_pending_count(-1),h||f.decrement()),li()};u.promise.then(_,m=>_(null,m||"unknown"))}),Ya(()=>{for(const u of l.values())u.reject(vn)}),new Promise(u=>{function f(h){function _(){h===a?u(o):f(a)}h.then(_,_)}f(a)})}function W(e){const t=Yn(e);return Si(t),t}function Qa(e){const t=Yn(e);return t.equals=ei,t}function ci(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)et(t[r])}}function xl(e){for(var t=e.parent;t!==null;){if((t.f&_t)===0)return t;t=t.parent}return null}function Ka(e){var t,r=fe;Ot(xl(e));try{ci(e),t=$i(e)}finally{Ot(r)}return t}function ui(e){var t=Ka(e);if(e.equals(t)||(e.v=t,e.wv=Pi()),!kr){var r=(nr||(e.f&$t)!==0)&&e.deps!==null?cr:it;ut(e,r)}}const sr=new Map;function or(e,t){var r={f:0,v:e,reactions:null,equals:Xs,rv:0,wv:0};return r}function J(e,t){const r=or(e);return Si(r),r}function Pl(e,t=!1,r=!0){const n=or(e);return t||(n.equals=ei),Xr&&r&&Be!==null&&Be.l!==null&&(Be.l.s??=[]).push(n),n}function k(e,t,r=!1){he!==null&&(!Nt||(he.f&ls)!==0)&&Fr()&&(he.f&(_t|xr|Gn|ls))!==0&&!zt?.includes(e)&&Qo();let n=r?Ge(t):t;return Hr(e,n)}function Hr(e,t){if(!e.equals(t)){var r=e.v;kr?sr.set(e,t):sr.set(e,r),e.v=t;var n=Et.ensure();n.capture(e,r),(e.f&_t)!==0&&((e.f&bt)!==0&&Ka(e),ut(e,(e.f&$t)===0?it:cr)),e.wv=Pi(),di(e,bt),Fr()&&fe!==null&&(fe.f&it)!==0&&(fe.f&(Ut|Pr))===0&&(Pt===null?Ol([e]):Pt.push(e))}return t}function Rt(e){k(e,e.v+1)}function di(e,t){var r=e.reactions;if(r!==null)for(var n=Fr(),a=r.length,o=0;o<a;o++){var i=r[o],l=i.f;if(!(!n&&i===fe)){var u=(l&bt)===0;u&&ut(i,t),(l&_t)!==0?di(i,cr):u&&((l&xr)!==0&&gr!==null&&gr.push(i),Sr(i))}}}function Ge(e){if(typeof e!="object"||e===null||wr in e)return e;const t=Hs(e);if(t!==Mo&&t!==Co)return e;var r=new Map,n=Un(e),a=J(0),o=Vt,i=l=>{if(Vt===o)return l();var u=he,f=Vt;ht(null),ps(o);var h=l();return ht(u),ps(f),h};return n&&r.set("length",J(e.length)),new Proxy(e,{defineProperty(l,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Go();var h=r.get(u);return h===void 0?h=i(()=>{var _=J(f.value);return r.set(u,_),_}):k(h,f.value,!0),!0},deleteProperty(l,u){var f=r.get(u);if(f===void 0){if(u in l){const h=i(()=>J(Qe));r.set(u,h),Rt(a)}}else k(f,Qe),Rt(a);return!0},get(l,u,f){if(u===wr)return e;var h=r.get(u),_=u in l;if(h===void 0&&(!_||ar(l,u)?.writable)&&(h=i(()=>{var p=Ge(_?l[u]:Qe),g=J(p);return g}),r.set(u,h)),h!==void 0){var m=s(h);return m===Qe?void 0:m}return Reflect.get(l,u,f)},getOwnPropertyDescriptor(l,u){var f=Reflect.getOwnPropertyDescriptor(l,u);if(f&&"value"in f){var h=r.get(u);h&&(f.value=s(h))}else if(f===void 0){var _=r.get(u),m=_?.v;if(_!==void 0&&m!==Qe)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(l,u){if(u===wr)return!0;var f=r.get(u),h=f!==void 0&&f.v!==Qe||Reflect.has(l,u);if(f!==void 0||fe!==null&&(!h||ar(l,u)?.writable)){f===void 0&&(f=i(()=>{var m=h?Ge(l[u]):Qe,p=J(m);return p}),r.set(u,f));var _=s(f);if(_===Qe)return!1}return h},set(l,u,f,h){var _=r.get(u),m=u in l;if(n&&u==="length")for(var p=f;p<_.v;p+=1){var g=r.get(p+"");g!==void 0?k(g,Qe):p in l&&(g=i(()=>J(Qe)),r.set(p+"",g))}if(_===void 0)(!m||ar(l,u)?.writable)&&(_=i(()=>J(void 0)),k(_,Ge(f)),r.set(u,_));else{m=_.v!==Qe;var x=i(()=>Ge(f));k(_,x)}var b=Reflect.getOwnPropertyDescriptor(l,u);if(b?.set&&b.set.call(h,f),!m){if(n&&typeof u=="string"){var $=r.get("length"),M=Number(u);Number.isInteger(M)&&M>=$.v&&k($,M+1)}Rt(a)}return!0},ownKeys(l){s(a);var u=Reflect.ownKeys(l).filter(_=>{var m=r.get(_);return m===void 0||m.v!==Qe});for(var[f,h]of r)h.v!==Qe&&!(f in l)&&u.push(f);return u},setPrototypeOf(){Ho()}})}function us(e){try{if(e!==null&&typeof e=="object"&&wr in e)return e[wr]}catch{}return e}function fi(e,t){return Object.is(us(e),us(t))}var ds,vi,hi,pi;function El(){if(ds===void 0){ds=window,vi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;hi=ar(t,"firstChild").get,pi=ar(t,"nextSibling").get,os(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),os(r)&&(r.__t=void 0)}}function Gt(e=""){return document.createTextNode(e)}function Qr(e){return hi.call(e)}function En(e){return pi.call(e)}function c(e,t){return Qr(e)}function L(e,t=!1){{var r=Qr(e);return r instanceof Comment&&r.data===""?En(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=En(n);return n}function $l(e){e.textContent=""}function Zn(){return!1}function kl(e,t){if(t){const r=document.body;e.autofocus=!0,Wt(()=>{document.activeElement===r&&e.focus()})}}let fs=!1;function Nl(){fs||(fs=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Jn(e){var t=he,r=fe;ht(null),Ot(null);try{return e()}finally{ht(t),Ot(r)}}function Xn(e,t,r,n=r){e.addEventListener(t,()=>Jn(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Nl()}function Tl(e){fe===null&&he===null&&Vo(),he!==null&&(he.f&$t)!==0&&fe===null&&zo(),kr&&Lo()}function Al(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Ht(e,t,r,n=!0){var a=fe;a!==null&&(a.f&Tt)!==0&&(e|=Tt);var o={ctx:Be,deps:null,nodes_start:null,nodes_end:null,f:e|bt,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{bn(o),o.f|=Ha}catch(u){throw et(o),u}else t!==null&&Sr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Jr)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&Al(i,a),he!==null&&(he.f&_t)!==0&&(e&Pr)===0)){var l=he;(l.effects??=[]).push(i)}}return o}function Il(){return he!==null&&!Nt}function Ya(e){const t=Ht(Ua,null,!1);return ut(t,it),t.teardown=e,t}function Za(e){Tl();var t=fe.f,r=!he&&(t&Ut)!==0&&(t&Ha)===0;if(r){var n=Be;(n.e??=[]).push(e)}else return _i(e)}function _i(e){return Ht(Wa|qo,e,!1)}function Dl(e){Et.ensure();const t=Ht(Pr|Jr,e,!0);return(r={})=>new Promise(n=>{r.outro?Lt(t,()=>{et(t),n(void 0)}):(et(t),n(void 0))})}function Ja(e){return Ht(Wa,e,!1)}function Ml(e){return Ht(Gn|Jr,e,!0)}function Fn(e,t=0){return Ht(Ua|t,e,!0)}function j(e,t=[],r=[]){oi(t,r,n=>{Ht(Ua,()=>e(...n.map(s)),!0)})}function Qt(e,t=0){var r=Ht(xr|t,e,!0);return r}function Fe(e,t=!0){return Ht(Ut|Jr,e,!0,t)}function mi(e){var t=e.teardown;if(t!==null){const r=kr,n=he;hs(!0),ht(null);try{t.call(null)}finally{hs(r),ht(n)}}}function gi(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&Jn(()=>{a.abort(vn)});var n=r.next;(r.f&Pr)!==0?r.parent=null:et(r,t),r=n}}function Cl(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Ut)===0&&et(t),t=r}}function et(e,t=!0){var r=!1;(t||(e.f&Oo)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Rl(e.nodes_start,e.nodes_end),r=!0),gi(e,t&&!r),Ln(e,0),ut(e,Er);var n=e.transitions;if(n!==null)for(const o of n)o.stop();mi(e);var a=e.parent;a!==null&&a.first!==null&&bi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Rl(e,t){for(;e!==null;){var r=e===t?null:En(e);e.remove(),e=r}}function bi(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Lt(e,t){var r=[];Xa(e,r,!0),yi(r,()=>{et(e),t&&t()})}function yi(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function Xa(e,t,r){if((e.f&Tt)===0){if(e.f^=Tt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,o=(n.f&$r)!==0||(n.f&Ut)!==0;Xa(n,t,o?r:!1),n=a}}}function ea(e){wi(e,!0)}function wi(e,t){if((e.f&Tt)!==0){e.f^=Tt,(e.f&it)===0&&(ut(e,bt),Sr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&$r)!==0||(r.f&Ut)!==0;wi(r,a?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let Vr=!1;function vs(e){Vr=e}let kr=!1;function hs(e){kr=e}let he=null,Nt=!1;function ht(e){he=e}let fe=null;function Ot(e){fe=e}let zt=null;function Si(e){he!==null&&(zt===null?zt=[e]:zt.push(e))}let ct=null,gt=0,Pt=null;function Ol(e){Pt=e}let xi=1,gn=0,Vt=gn;function ps(e){Vt=e}let nr=!1;function Pi(){return++xi}function ta(e){var t=e.f;if((t&bt)!==0)return!0;if((t&cr)!==0){var r=e.deps,n=(t&$t)!==0;if(r!==null){var a,o,i=(t&Bn)!==0,l=n&&fe!==null&&!nr,u=r.length;if((i||l)&&(fe===null||(fe.f&Er)===0)){var f=e,h=f.parent;for(a=0;a<u;a++)o=r[a],(i||!o?.reactions?.includes(f))&&(o.reactions??=[]).push(f);i&&(f.f^=Bn),l&&h!==null&&(h.f&$t)===0&&(f.f^=$t)}for(a=0;a<u;a++)if(o=r[a],ta(o)&&ui(o),o.wv>e.wv)return!0}(!n||fe!==null&&!nr)&&ut(e,it)}return!1}function Ei(e,t,r=!0){var n=e.reactions;if(n!==null&&!zt?.includes(e))for(var a=0;a<n.length;a++){var o=n[a];(o.f&_t)!==0?Ei(o,t,!1):t===o&&(r?ut(o,bt):(o.f&it)!==0&&ut(o,cr),Sr(o))}}function $i(e){var t=ct,r=gt,n=Pt,a=he,o=nr,i=zt,l=Be,u=Nt,f=Vt,h=e.f;ct=null,gt=0,Pt=null,nr=(h&$t)!==0&&(Nt||!Vr||he===null),he=(h&(Ut|Pr))===0?e:null,zt=null,Ur(e.ctx),Nt=!1,Vt=++gn,e.ac!==null&&(Jn(()=>{e.ac.abort(vn)}),e.ac=null);try{e.f|=$a;var _=e.fn,m=_(),p=e.deps;if(ct!==null){var g;if(Ln(e,gt),p!==null&&gt>0)for(p.length=gt+ct.length,g=0;g<ct.length;g++)p[gt+g]=ct[g];else e.deps=p=ct;if(!nr||(h&_t)!==0&&e.reactions!==null)for(g=gt;g<p.length;g++)(p[g].reactions??=[]).push(e)}else p!==null&&gt<p.length&&(Ln(e,gt),p.length=gt);if(Fr()&&Pt!==null&&!Nt&&p!==null&&(e.f&(_t|cr|bt))===0)for(g=0;g<Pt.length;g++)Ei(Pt[g],e);return a!==null&&a!==e&&(gn++,Pt!==null&&(n===null?n=Pt:n.push(...Pt))),(e.f&yr)!==0&&(e.f^=yr),m}catch(x){return ri(x)}finally{e.f^=$a,ct=t,gt=r,Pt=n,he=a,nr=o,zt=i,Ur(l),Nt=u,Vt=f}}function ql(e,t){let r=t.reactions;if(r!==null){var n=Io.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&_t)!==0&&(ct===null||!ct.includes(t))&&(ut(t,cr),(t.f&($t|Bn))===0&&(t.f^=Bn),ci(t),Ln(t,0))}function Ln(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)ql(e,r[n])}function bn(e){var t=e.f;if((t&Er)===0){ut(e,it);var r=fe,n=Vr;fe=e,Vr=!0;try{(t&xr)!==0?Cl(e):gi(e),mi(e);var a=$i(e);e.teardown=typeof a=="function"?a:null,e.wv=xi;var o;Gs&&dl&&(e.f&bt)!==0&&e.deps}finally{Vr=n,fe=r}}}async function jl(){await Promise.resolve(),pl()}function s(e){var t=e.f,r=(t&_t)!==0;if(he!==null&&!Nt){var n=fe!==null&&(fe.f&Er)!==0;if(!n&&!zt?.includes(e)){var a=he.deps;if((he.f&$a)!==0)e.rv<gn&&(e.rv=gn,ct===null&&a!==null&&a[gt]===e?gt++:ct===null?ct=[e]:(!nr||!ct.includes(e))&&ct.push(e));else{(he.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[he]:o.includes(he)||o.push(he)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&$t)===0&&(i.f^=$t)}if(kr){if(sr.has(e))return sr.get(e);if(r){i=e;var u=i.v;return((i.f&it)===0&&i.reactions!==null||ki(i))&&(u=Ka(i)),sr.set(i,u),u}}else r&&(i=e,ta(i)&&ui(i));if((e.f&yr)!==0)throw e.v;return e.v}function ki(e){if(e.v===Qe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(sr.has(t)||(t.f&_t)!==0&&ki(t))return!0;return!1}function en(e){var t=Nt;try{return Nt=!0,e()}finally{Nt=t}}const Bl=-7169;function ut(e,t){e.f=e.f&Bl|t}function Ll(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const zl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Vl(e){return zl.includes(e)}const Wl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ul(e){return e=e.toLowerCase(),Wl[e]??e}const Gl=["touchstart","touchmove"];function Hl(e){return Gl.includes(e)}const Ni=new Set,Ta=new Set;function Ti(e,t,r,n={}){function a(o){if(n.capture||un.call(t,o),!o.cancelBubble)return Jn(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Wt(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function _s(e,t,r,n={}){var a=Ti(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function yt(e){for(var t=0;t<e.length;t++)Ni.add(e[t]);for(var r of Ta)r(e)}let ms=null;function un(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;ms=e;var i=0,l=ms===e&&e.__root;if(l){var u=a.indexOf(l);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;u<=f&&(i=u)}if(o=a[i]||e.target,o!==t){Ea(e,"currentTarget",{configurable:!0,get(){return o||r}});var h=he,_=fe;ht(null),Ot(null);try{for(var m,p=[];o!==null;){var g=o.assignedSlot||o.parentNode||o.host||null;try{var x=o["__"+n];if(x!=null&&(!o.disabled||e.target===o))if(Un(x)){var[b,...$]=x;b.apply(o,[e,...$])}else x.call(o,e)}catch(M){m?p.push(M):m=M}if(e.cancelBubble||g===t||g===null)break;o=g}if(m){for(let M of p)queueMicrotask(()=>{throw M});throw m}}finally{e.__root=t,delete e.currentTarget,ht(h),Ot(_)}}}function Ai(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Kr(e,t){var r=fe;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function y(e,t){var r=(t&rl)!==0,n=(t&nl)!==0,a,o=!e.startsWith("<!>");return()=>{a===void 0&&(a=Ai(o?e:"<!>"+e),r||(a=Qr(a)));var i=n||vi?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Qr(i),u=i.lastChild;Kr(l,u)}else Kr(i,i);return i}}function Ql(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Ai(a),l=Qr(i);o=Qr(l)}var u=o.cloneNode(!0);return Kr(u,u),u}}function Kl(e,t){return Ql(e,t,"svg")}function vt(e=""){{var t=Gt(e+"");return Kr(t,t),t}}function Y(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Gt();return e.append(t,r),Kr(t,r),e}function v(e,t){e!==null&&e.before(t)}function C(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function Yl(e,t){return Zl(e,t)}const qr=new Map;function Zl(e,{target:t,anchor:r,props:n={},events:a,context:o,intro:i=!0}){El();var l=new Set,u=_=>{for(var m=0;m<_.length;m++){var p=_[m];if(!l.has(p)){l.add(p);var g=Hl(p);t.addEventListener(p,un,{passive:g});var x=qr.get(p);x===void 0?(document.addEventListener(p,un,{passive:g}),qr.set(p,1)):qr.set(p,x+1)}}};u(Va(Ni)),Ta.add(u);var f=void 0,h=Dl(()=>{var _=r??t.appendChild(Gt());return gl(_,{pending:()=>{}},m=>{if(o){U({});var p=Be;p.c=o}a&&(n.$$events=a),f=e(m,n)||{},o&&G()}),()=>{for(var m of l){t.removeEventListener(m,un);var p=qr.get(m);--p===0?(document.removeEventListener(m,un),qr.delete(m)):qr.set(m,p)}Ta.delete(u),_!==r&&_.parentNode?.removeChild(_)}});return Jl.set(f,h),f}let Jl=new WeakMap;function I(e,t,r=!1){var n=e,a=null,o=null,i=Qe,l=r?$r:0,u=!1;const f=(p,g=!0)=>{u=!0,m(g,p)};var h=null;function _(){h!==null&&(h.lastChild.remove(),n.before(h),h=null);var p=i?a:o,g=i?o:a;p&&ea(p),g&&Lt(g,()=>{i?o=null:a=null})}const m=(p,g)=>{if(i!==(i=p)){var x=Zn(),b=n;if(x&&(h=document.createDocumentFragment(),h.append(b=Gt())),i?a??=g&&Fe(()=>g(b)):o??=g&&Fe(()=>g(b)),x){var $=$e,M=i?a:o,P=i?o:a;M&&$.skipped_effects.delete(M),P&&$.skipped_effects.add(P),$.add_callback(_)}else _()}};Qt(()=>{u=!1,t(f),u||m(null,null)},l)}function Xl(e,t,r){var n=e,a=Qe,o,i,l=null,u=Fr()?ul:Fs;function f(){o&&Lt(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}Qt(()=>{if(u(a,a=t())){var h=n,_=Zn();_&&(l=document.createDocumentFragment(),l.append(h=Gt())),i=Fe(()=>r(h)),_?$e.add_callback(f):f()}})}function ra(e,t){return t}function Fl(e,t,r){for(var n=e.items,a=[],o=t.length,i=0;i<o;i++)Xa(t[i].e,a,!0);var l=o>0&&a.length===0&&r!==null;if(l){var u=r.parentNode;$l(u),u.append(r),n.clear(),Mt(e,t[0].prev,t[o-1].next)}yi(a,()=>{for(var f=0;f<o;f++){var h=t[f];l||(n.delete(h.k),Mt(e,h.prev,h.next)),et(h.e,!l)}})}function Ue(e,t,r,n,a,o=null){var i=e,l={flags:t,items:new Map,first:null},u=(t&Js)!==0;if(u){var f=e;i=f.appendChild(Gt())}var h=null,_=!1,m=new Map,p=Qa(()=>{var $=r();return Un($)?$:$==null?[]:Va($)}),g,x;function b(){ec(x,g,l,m,i,a,t,n,r),o!==null&&(g.length===0?h?ea(h):h=Fe(()=>o(i)):h!==null&&Lt(h,()=>{h=null}))}Qt(()=>{x??=fe,g=s(p);var $=g.length;if(!(_&&$===0)){_=$===0;var M,P,S,E;if(Zn()){var T=new Set,R=$e;for(P=0;P<$;P+=1){S=g[P],E=n(S,P);var A=l.items.get(E)??m.get(E);A?(t&(Hn|Qn))!==0&&Ii(A,S,P,t):(M=Di(null,l,null,null,S,E,P,a,t,r,!0),m.set(E,M)),T.add(E)}for(const[ee,N]of l.items)T.has(ee)||R.skipped_effects.add(N.e);R.add_callback(b)}else b();s(p)}})}function ec(e,t,r,n,a,o,i,l,u){var f=(i&Yo)!==0,h=(i&(Hn|Qn))!==0,_=t.length,m=r.items,p=r.first,g=p,x,b=null,$,M=[],P=[],S,E,T,R;if(f)for(R=0;R<_;R+=1)S=t[R],E=l(S,R),T=m.get(E),T!==void 0&&(T.a?.measure(),($??=new Set).add(T));for(R=0;R<_;R+=1){if(S=t[R],E=l(S,R),T=m.get(E),T===void 0){var A=n.get(E);if(A!==void 0){n.delete(E),m.set(E,A);var ee=b?b.next:g;Mt(r,b,A),Mt(r,A,ee),ga(A,ee,a),b=A}else{var N=g?g.e.nodes_start:a;b=Di(N,r,b,b===null?r.first:b.next,S,E,R,o,i,u)}m.set(E,b),M=[],P=[],g=b.next;continue}if(h&&Ii(T,S,R,i),(T.e.f&Tt)!==0&&(ea(T.e),f&&(T.a?.unfix(),($??=new Set).delete(T))),T!==g){if(x!==void 0&&x.has(T)){if(M.length<P.length){var q=P[0],V;b=q.prev;var we=M[0],Ie=M[M.length-1];for(V=0;V<M.length;V+=1)ga(M[V],q,a);for(V=0;V<P.length;V+=1)x.delete(P[V]);Mt(r,we.prev,Ie.next),Mt(r,b,we),Mt(r,Ie,q),g=q,b=Ie,R-=1,M=[],P=[]}else x.delete(T),ga(T,g,a),Mt(r,T.prev,T.next),Mt(r,T,b===null?r.first:b.next),Mt(r,b,T),b=T;continue}for(M=[],P=[];g!==null&&g.k!==E;)(g.e.f&Tt)===0&&(x??=new Set).add(g),P.push(g),g=g.next;if(g===null)continue;T=g}M.push(T),b=T,g=T.next}if(g!==null||x!==void 0){for(var Se=x===void 0?[]:Va(x);g!==null;)(g.e.f&Tt)===0&&Se.push(g),g=g.next;var be=Se.length;if(be>0){var ae=(i&Js)!==0&&_===0?a:null;if(f){for(R=0;R<be;R+=1)Se[R].a?.measure();for(R=0;R<be;R+=1)Se[R].a?.fix()}Fl(r,Se,ae)}}f&&Wt(()=>{if($!==void 0)for(T of $)T.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var D of n.values())et(D.e);n.clear()}function Ii(e,t,r,n){(n&Hn)!==0&&Hr(e.v,t),(n&Qn)!==0?Hr(e.i,r):e.i=r}function Di(e,t,r,n,a,o,i,l,u,f,h){var _=(u&Hn)!==0,m=(u&Zo)===0,p=_?m?Pl(a,!1,!1):or(a):a,g=(u&Qn)===0?i:or(i),x={i:g,v:p,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=Gt())}return x.e=Fe(()=>l(e,p,g,f),cl),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?h||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function ga(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=En(o);a.before(o),o=i}}function Mt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ie(e,t,...r){var n=e,a=ne,o;Qt(()=>{a!==(a=t())&&(o&&(et(o),o=null),o=Fe(()=>a(n,...r)))},$r)}function dn(e,t,r){var n=e,a,o,i=null,l=null;function u(){o&&(Lt(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}Qt(()=>{if(a!==(a=t())){var f=Zn();if(a){var h=n;f&&(i=document.createDocumentFragment(),i.append(h=Gt()),o&&$e.skipped_effects.add(o)),l=Fe(()=>r(h,a))}f?$e.add_callback(u):u()}},$r)}function tc(e,t,r,n,a,o){var i,l,u=null,f=e,h;Qt(()=>{const _=t()||null;var m=sl;_!==i&&(h&&(_===null?Lt(h,()=>{h=null,l=null}):_===l?ea(h):et(h)),_&&_!==l&&(h=Fe(()=>{if(u=document.createElementNS(m,_),Kr(u,u),n){var p=u.appendChild(Gt());n(u,p)}fe.nodes_end=u,f.before(u)})),i=_,i&&(l=i))},$r)}function rc(e,t){var r=void 0,n;Qt(()=>{r!==(r=t())&&(n&&(et(n),n=null),r&&(n=Fe(()=>{Ja(()=>r(e))})))})}function Mi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Mi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function nc(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Mi(e))&&(n&&(n+=" "),n+=t);return n}function Ci(e){return typeof e=="object"?nc(e):e??""}const gs=[...` 	
\r\f \v\uFEFF`];function ac(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+o;(i===0||gs.includes(n[i-1]))&&(l===n.length||gs.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function bs(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var o=e[a];o!=null&&o!==""&&(n+=" "+a+": "+o+r)}return n}function ba(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function sc(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,u=[];n&&u.push(...Object.keys(n).map(ba)),a&&u.push(...Object.keys(a).map(ba));var f=0,h=-1;const x=e.length;for(var _=0;_<x;_++){var m=e[_];if(l?m==="/"&&e[_-1]==="*"&&(l=!1):o?o===m&&(o=!1):m==="/"&&e[_+1]==="*"?l=!0:m==='"'||m==="'"?o=m:m==="("?i++:m===")"&&i--,!l&&o===!1&&i===0){if(m===":"&&h===-1)h=_;else if(m===";"||_===x-1){if(h!==-1){var p=ba(e.substring(f,h).trim());if(!u.includes(p)){m!==";"&&_++;var g=e.substring(f,_).trim();r+=" "+g+";"}}f=_+1,h=-1}}}}return n&&(r+=bs(n)),a&&(r+=bs(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Te(e,t,r,n,a,o){var i=e.__className;if(i!==r||i===void 0){var l=ac(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&a!==o)for(var u in o){var f=!!o[u];(a==null||f!==!!a[u])&&e.classList.toggle(u,f)}return o}function ya(e,t={},r,n){for(var a in r){var o=r[a];t[a]!==o&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,n))}}function ic(e,t,r,n){var a=e.__style;if(a!==t){var o=sc(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(ya(e,r?.[0],n[0]),ya(e,r?.[1],n[1],"important")):ya(e,r,n));return n}function zn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Un(t))return ol();for(var n of e.options)n.selected=t.includes(pn(n));return}for(n of e.options){var a=pn(n);if(fi(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Ri(e){var t=new MutationObserver(()=>{zn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ya(()=>{t.disconnect()})}function Lr(e,t,r=t){var n=!0;Xn(e,"change",a=>{var o=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),pn);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&pn(l)}r(i)}),Ja(()=>{var a=t();if(zn(e,a,n),n&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=pn(o),r(a))}e.__value=a,n=!1}),Ri(e)}function pn(e){return"__value"in e?e.__value:e.value}const on=Symbol("class"),ln=Symbol("style"),Oi=Symbol("is custom element"),qi=Symbol("is html");function oc(e,t){var r=na(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Wr(e,t){var r=na(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function lc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Vn(e,t,r,n){var a=na(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[jo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ji(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function cc(e,t,r,n,a=!1,o=!1){var i=na(e),l=i[Oi],u=!i[qi],f=t||{},h=e.tagName==="OPTION";for(var _ in t)_ in r||(r[_]=null);r.class?r.class=Ci(r.class):r[on]&&(r.class=null),r[ln]&&(r.style??=null);var m=ji(e);for(const S in r){let E=r[S];if(h&&S==="value"&&E==null){e.value=e.__value="",f[S]=E;continue}if(S==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";Te(e,p,E,n,t?.[on],r[on]),f[S]=E,f[on]=r[on];continue}if(S==="style"){ic(e,E,t?.[ln],r[ln]),f[S]=E,f[ln]=r[ln];continue}var g=f[S];if(!(E===g&&!(E===void 0&&e.hasAttribute(S)))){f[S]=E;var x=S[0]+S[1];if(x!=="$$")if(x==="on"){const T={},R="$$"+S;let A=S.slice(2);var b=Vl(A);if(Ll(A)&&(A=A.slice(0,-7),T.capture=!0),!b&&g){if(E!=null)continue;e.removeEventListener(A,f[R],T),f[R]=null}if(E!=null)if(b)e[`__${A}`]=E,yt([A]);else{let ee=function(N){f[S].call(this,N)};var P=ee;f[R]=Ti(A,e,ee,T)}else b&&(e[`__${A}`]=void 0)}else if(S==="style")Vn(e,S,E);else if(S==="autofocus")kl(e,!!E);else if(!l&&(S==="__value"||S==="value"&&E!=null))e.value=e.__value=E;else if(S==="selected"&&h)lc(e,E);else{var $=S;u||($=Ul($));var M=$==="defaultValue"||$==="defaultChecked";if(E==null&&!l&&!M)if(i[S]=null,$==="value"||$==="checked"){let T=e;const R=t===void 0;if($==="value"){let A=T.defaultValue;T.removeAttribute($),T.defaultValue=A,T.value=T.__value=R?A:null}else{let A=T.defaultChecked;T.removeAttribute($),T.defaultChecked=A,T.checked=R?A:!1}}else e.removeAttribute(S);else M||m.includes($)&&(l||typeof E!="string")?(e[$]=E,$ in i&&(i[$]=Qe)):typeof E!="function"&&Vn(e,$,E)}}}return f}function ys(e,t,r=[],n=[],a,o=!1,i=!1){oi(r,n,l=>{var u=void 0,f={},h=e.nodeName==="SELECT",_=!1;if(Qt(()=>{var p=t(...l.map(s)),g=cc(e,u,p,a,o,i);_&&h&&"value"in p&&zn(e,p.value);for(let b of Object.getOwnPropertySymbols(f))p[b]||et(f[b]);for(let b of Object.getOwnPropertySymbols(p)){var x=p[b];b.description===il&&(!u||x!==u[b])&&(f[b]&&et(f[b]),f[b]=Fe(()=>rc(e,()=>x))),g[b]=x}u=g}),h){var m=e;Ja(()=>{zn(m,u.value,!0),Ri(m)})}_=!0})}function na(e){return e.__attributes??={[Oi]:e.nodeName.includes("-"),[qi]:e.namespaceURI===al}}var ws=new Map;function ji(e){var t=e.getAttribute("is")||e.nodeName,r=ws.get(t);if(r)return r;ws.set(t,r=[]);for(var n,a=e,o=Element.prototype;o!==a;){n=Do(a);for(var i in n)n[i].set&&r.push(i);a=Hs(a)}return r}function Ce(e,t,r=t){var n=new WeakSet;Xn(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Sa(e)?xa(o):o,r(o),$e!==null&&n.add($e),await jl(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),en(t)==null&&e.value&&(r(Sa(e)?xa(e.value):e.value),$e!==null&&n.add($e)),Fn(()=>{var a=t();if(e===document.activeElement){var o=Cn??$e;if(n.has(o))return}Sa(e)&&a===xa(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}const wa=new Set;function Ss(e,t,r,n,a=n){var o=r.getAttribute("type")==="checkbox",i=e;if(t!==null)for(var l of t)i=i[l]??=[];i.push(r),Xn(r,"change",()=>{var u=r.__value;o&&(u=dc(i,u,r.checked)),a(u)},()=>a(o?[]:null)),Fn(()=>{var u=n();o?(u=u||[],r.checked=u.includes(r.__value)):r.checked=fi(r.__value,u)}),Ya(()=>{var u=i.indexOf(r);u!==-1&&i.splice(u,1)}),wa.has(i)||(wa.add(i),Wt(()=>{i.sort((u,f)=>u.compareDocumentPosition(f)===4?-1:1),wa.delete(i)})),Wt(()=>{})}function uc(e,t,r=t){Xn(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),en(t)==null&&r(e.checked),Fn(()=>{var n=t();e.checked=!!n})}function dc(e,t,r){for(var n=new Set,a=0;a<e.length;a+=1)e[a].checked&&n.add(e[a].__value);return r||n.delete(t),Array.from(n)}function Sa(e){var t=e.type;return t==="number"||t==="range"}function xa(e){return e===""?null:+e}let Mn=!1;function fc(e){var t=Mn;try{return Mn=!1,[e(),Mn]}finally{Mn=t}}const vc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function oe(e,t,r){return new Proxy({props:e,exclude:t},vc)}const hc={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(sn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];sn(a)&&(a=a());const o=ar(a,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(sn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=ar(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===wr||t===Ys)return!1;for(let r of e.props)if(sn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(sn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ce(...e){return new Proxy({props:e},hc)}function Bt(e,t,r,n){var a=!Xr||(r&Xo)!==0,o=(r&el)!==0,i=(r&tl)!==0,l=n,u=!0,f=()=>(u&&(u=!1,l=i?en(n):n),l),h;if(o){var _=wr in e||Ys in e;h=ar(e,t)?.set??(_&&t in e?P=>e[t]=P:void 0)}var m,p=!1;o?[m,p]=fc(()=>e[t]):m=e[t],m===void 0&&n!==void 0&&(m=f(),h&&(a&&Uo(),h(m)));var g;if(a?g=()=>{var P=e[t];return P===void 0?f():(u=!0,P)}:g=()=>{var P=e[t];return P!==void 0&&(l=void 0),P===void 0?l:P},a&&(r&Fo)===0)return g;if(h){var x=e.$$legacy;return(function(P,S){return arguments.length>0?((!a||!S||x||p)&&h(S?g():P),P):g()})}var b=!1,$=((r&Jo)!==0?Yn:Qa)(()=>(b=!1,g()));o&&s($);var M=fe;return(function(P,S){if(arguments.length>0){const E=S?s($):a&&o?Ge(P):P;return k($,E),b=!0,l!==void 0&&(l=E),P}return kr&&b||(M.f&Er)!==0?$.v:s($)})}function Bi(e){Be===null&&Zs(),Xr&&Be.l!==null?_c(Be).m.push(e):Za(()=>{const t=en(e);if(typeof t=="function")return t})}function pc(e){Be===null&&Zs(),Bi(()=>()=>en(e))}function _c(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const mc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(mc);const gc="modulepreload",bc=function(e){return"/"+e},xs={},yc=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(h){return Promise.all(h.map(_=>Promise.resolve(_).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");a=f(r.map(h=>{if(h=bc(h),h in xs)return;xs[h]=!0;const _=h.endsWith(".css"),m=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const p=document.createElement("link");if(p.rel=_?"stylesheet":gc,_||(p.as="script"),p.crossOrigin="",p.href=h,u&&p.setAttribute("nonce",u),document.head.appendChild(p),_)return new Promise((g,x)=>{p.addEventListener("load",g),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return a.then(l=>{for(const u of l||[])u.status==="rejected"&&o(u.reason);return t().catch(o)})};class wc extends Map{#e=new Map;#r=J(0);#c=J(0);#u=Vt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#o(t){return Vt===this.#u?J(t):or(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#o(0),r.set(t,n);else return s(this.#r),!1}return s(n),!0}forEach(t,r){this.#s(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#o(0),r.set(t,n);else{s(this.#r);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#r;if(a===void 0)a=this.#o(0),n.set(t,a),k(this.#c,super.size),Rt(l);else if(o!==r){Rt(a);var u=l.reactions===null?null:new Set(l.reactions),f=u===null||!a.reactions?.every(h=>u.has(h));f&&Rt(l)}return i}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),k(this.#c,super.size),k(n,-1),Rt(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;k(this.#c,0);for(var r of t.values())k(r,-1);Rt(this.#r),t.clear()}}#s(){s(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#o(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#s(),super.values()}entries(){return this.#s(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#c),super.size}}class Sc{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class Li{constructor(t){this.generateIdentifier=t,this.kv=new Sc}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class xc extends Li{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function Pc(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function Ec(e,t){const r=Pc(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const o=n[a];if(t(o))return o}}function Yr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function Rn(e,t){return e.indexOf(t)!==-1}function Ps(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class $c{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return Ec(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const kc=e=>Object.prototype.toString.call(e).slice(8,-1),zi=e=>typeof e>"u",Nc=e=>e===null,yn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Aa=e=>yn(e)&&Object.keys(e).length===0,lr=e=>Array.isArray(e),Tc=e=>typeof e=="string",Ac=e=>typeof e=="number"&&!isNaN(e),Ic=e=>typeof e=="boolean",Dc=e=>e instanceof RegExp,wn=e=>e instanceof Map,Sn=e=>e instanceof Set,Vi=e=>kc(e)==="Symbol",Mc=e=>e instanceof Date&&!isNaN(e.valueOf()),Cc=e=>e instanceof Error,Es=e=>typeof e=="number"&&isNaN(e),Rc=e=>Ic(e)||Nc(e)||zi(e)||Ac(e)||Tc(e)||Vi(e),Oc=e=>typeof e=="bigint",qc=e=>e===1/0||e===-1/0,jc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),Bc=e=>e instanceof URL,Wi=e=>e.replace(/\./g,"\\."),Pa=e=>e.map(String).map(Wi).join("."),_n=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let o=e.charAt(a);if(o==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(o==="."){t.push(r),r="";continue}r+=o}const n=r;return t.push(n),t};function Dt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const Ui=[Dt(zi,"undefined",()=>null,()=>{}),Dt(Oc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Dt(Mc,"Date",e=>e.toISOString(),e=>new Date(e)),Dt(Cc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Dt(Dc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Dt(Sn,"set",e=>[...e.values()],e=>new Set(e)),Dt(wn,"map",e=>[...e.entries()],e=>new Map(e)),Dt(e=>Es(e)||qc(e),"number",e=>Es(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Dt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Dt(Bc,"URL",e=>e.toString(),e=>new URL(e))];function aa(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const Gi=aa((e,t)=>Vi(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),Lc=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),Hi=aa(jc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=Lc[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function Qi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const Ki=aa(Qi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),Yi=aa((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),zc=[Ki,Gi,Yi,Hi],$s=(e,t)=>{const r=Ps(zc,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Ps(Ui,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},Zi={};Ui.forEach(e=>{Zi[e.annotation]=e});const Vc=(e,t,r)=>{if(lr(t))switch(t[0]){case"symbol":return Gi.untransform(e,t,r);case"class":return Ki.untransform(e,t,r);case"custom":return Yi.untransform(e,t,r);case"typed-array":return Hi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=Zi[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},zr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function Ji(e){if(Rn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(Rn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(Rn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const Wc=(e,t)=>{Ji(t);for(let r=0;r<t.length;r++){const n=t[r];if(Sn(e))e=zr(e,+n);else if(wn(e)){const a=+n,o=+t[++r]==0?"key":"value",i=zr(e,a);switch(o){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},Ia=(e,t,r)=>{if(Ji(t),t.length===0)return r(e);let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];if(lr(n)){const l=+i;n=n[l]}else if(yn(n))n=n[i];else if(Sn(n)){const l=+i;n=zr(n,l)}else if(wn(n)){if(o===t.length-2)break;const u=+i,f=+t[++o]==0?"key":"value",h=zr(n,u);switch(f){case"key":n=h;break;case"value":n=n.get(h);break}}}const a=t[t.length-1];if(lr(n)?n[+a]=r(n[+a]):yn(n)&&(n[a]=r(n[a])),Sn(n)){const o=zr(n,+a),i=r(o);o!==i&&(n.delete(o),n.add(i))}if(wn(n)){const o=+t[t.length-2],i=zr(n,o);switch(+a==0?"key":"value"){case"key":{const u=r(i);n.set(u,n.get(i)),u!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function Da(e,t,r=[]){if(!e)return;if(!lr(e)){Yr(e,(o,i)=>Da(o,t,[...r,..._n(i)]));return}const[n,a]=e;a&&Yr(a,(o,i)=>{Da(o,t,[...r,..._n(i)])}),t(n,r)}function Uc(e,t,r){return Da(t,(n,a)=>{e=Ia(e,a,o=>Vc(o,n,r))}),e}function Gc(e,t){function r(n,a){const o=Wc(e,_n(a));n.map(_n).forEach(i=>{e=Ia(e,i,()=>o)})}if(lr(t)){const[n,a]=t;n.forEach(o=>{e=Ia(e,_n(o),()=>e)}),a&&Yr(a,r)}else Yr(t,r);return e}const Hc=(e,t)=>yn(e)||lr(e)||wn(e)||Sn(e)||Qi(e,t);function Qc(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Kc(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,u)=>l.length-u.length));const[o,...i]=a;o.length===0?n=i.map(Pa):r[Pa(o)]=i.map(Pa)}),n?Aa(r)?[n]:[n,r]:Aa(r)?void 0:r}const Xi=(e,t,r,n,a=[],o=[],i=new Map)=>{const l=Rc(e);if(!l){Qc(e,a,t);const p=i.get(e);if(p)return n?{transformedValue:null}:p}if(!Hc(e,r)){const p=$s(e,r),g=p?{transformedValue:p.value,annotations:[p.type]}:{transformedValue:e};return l||i.set(e,g),g}if(Rn(o,e))return{transformedValue:null};const u=$s(e,r),f=u?.value??e,h=lr(f)?[]:{},_={};Yr(f,(p,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const x=Xi(p,t,r,n,[...a,g],[...o,e],i);h[g]=x.transformedValue,lr(x.annotations)?_[g]=x.annotations:yn(x.annotations)&&Yr(x.annotations,(b,$)=>{_[Wi(g)+"."+$]=b})});const m=Aa(_)?{transformedValue:h,annotations:u?[u.type]:void 0}:{transformedValue:h,annotations:u?[u.type,_]:_};return l||i.set(e,m),m};function Fi(e){return Object.prototype.toString.call(e).slice(8,-1)}function ks(e){return Fi(e)==="Array"}function Yc(e){if(Fi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Zc(e,t,r,n,a){const o={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),a&&o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Ma(e,t={}){if(ks(e))return e.map(a=>Ma(a,t));if(!Yc(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,o)=>{if(ks(t.props)&&!t.props.includes(o))return a;const i=e[o],l=Ma(i,t);return Zc(a,o,l,e,t.nonenumerable),a},{})}class pe{constructor({dedupe:t=!1}={}){this.classRegistry=new xc,this.symbolRegistry=new Li(r=>r.description??""),this.customTransformerRegistry=new $c,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=Xi(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const o=Kc(r,this.dedupe);return o&&(a.meta={...a.meta,referentialEqualities:o}),a}deserialize(t){const{json:r,meta:n}=t;let a=Ma(r);return n?.values&&(a=Uc(a,n.values,this)),n?.referentialEqualities&&(a=Gc(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}pe.defaultInstance=new pe;pe.serialize=pe.defaultInstance.serialize.bind(pe.defaultInstance);pe.deserialize=pe.defaultInstance.deserialize.bind(pe.defaultInstance);pe.stringify=pe.defaultInstance.stringify.bind(pe.defaultInstance);pe.parse=pe.defaultInstance.parse.bind(pe.defaultInstance);pe.registerClass=pe.defaultInstance.registerClass.bind(pe.defaultInstance);pe.registerSymbol=pe.defaultInstance.registerSymbol.bind(pe.defaultInstance);pe.registerCustom=pe.defaultInstance.registerCustom.bind(pe.defaultInstance);pe.allowErrorProps=pe.defaultInstance.allowErrorProps.bind(pe.defaultInstance);pe.serialize;pe.deserialize;pe.stringify;pe.parse;pe.registerClass;pe.registerCustom;pe.registerSymbol;pe.allowErrorProps;function Jc(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function Xc(e,t){return`${e}_${t}`}const Fc=typeof window<"u"?window:void 0;function eu(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class tu{#e;#r;constructor(t={}){const{window:r=Fc,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=ii(a=>{const o=_s(r,"focusin",a),i=_s(r,"focusout",a);return()=>{o(),i()}}))}get current(){return this.#r?.(),this.#e?eu(this.#e):null}}new tu;function ru(e){return typeof e=="function"}function nu(e,t){if(ru(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function au(e,t){let r=J(null);const n=W(()=>nu(t,250));function a(...o){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let i,l;const u=new Promise((f,h)=>{i=f,l=h});k(r,{timeout:null,runner:null,promise:u,resolve:i,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const i=s(r);k(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),k(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function su(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),o=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return o.length?mn(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function fn(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function On(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function mn(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function qn(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(u=>Ca(u.q.toString(),u.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const u=parseFloat(l.q);isNaN(u)||r.set(l.u,(r.get(l.u)||0)+u)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],o=[];r.forEach((l,u)=>{const f=n.get(u)||0,h=l-f;h>0&&(a.push({q:h,u}),o.push(Ca(h.toString(),u)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:i}}function jr(e){return e?.length?e.map(t=>Ca(t.q.toString(),t.u)).join(" et "):"-"}function Ca(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Ns(e){return fn(e)}function iu(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function ou(e,t){return e[t]?.recipes||[]}function lu(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([o])=>{const i=new Date(o);return i>=n&&i<=a}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function cu(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function uu(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function du(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function fu(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return iu(t)}function vu(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class w{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}w.equal=(e,t)=>new w("equal",e,t).toString();w.notEqual=(e,t)=>new w("notEqual",e,t).toString();w.lessThan=(e,t)=>new w("lessThan",e,t).toString();w.lessThanEqual=(e,t)=>new w("lessThanEqual",e,t).toString();w.greaterThan=(e,t)=>new w("greaterThan",e,t).toString();w.greaterThanEqual=(e,t)=>new w("greaterThanEqual",e,t).toString();w.isNull=e=>new w("isNull",e).toString();w.isNotNull=e=>new w("isNotNull",e).toString();w.between=(e,t,r)=>new w("between",e,[t,r]).toString();w.startsWith=(e,t)=>new w("startsWith",e,t).toString();w.endsWith=(e,t)=>new w("endsWith",e,t).toString();w.select=e=>new w("select",void 0,e).toString();w.search=(e,t)=>new w("search",e,t).toString();w.orderDesc=e=>new w("orderDesc",e).toString();w.orderAsc=e=>new w("orderAsc",e).toString();w.orderRandom=()=>new w("orderRandom").toString();w.cursorAfter=e=>new w("cursorAfter",void 0,e).toString();w.cursorBefore=e=>new w("cursorBefore",void 0,e).toString();w.limit=e=>new w("limit",void 0,e).toString();w.offset=e=>new w("offset",void 0,e).toString();w.contains=(e,t)=>new w("contains",e,t).toString();w.notContains=(e,t)=>new w("notContains",e,t).toString();w.notSearch=(e,t)=>new w("notSearch",e,t).toString();w.notBetween=(e,t,r)=>new w("notBetween",e,[t,r]).toString();w.notStartsWith=(e,t)=>new w("notStartsWith",e,t).toString();w.notEndsWith=(e,t)=>new w("notEndsWith",e,t).toString();w.createdBefore=e=>new w("createdBefore",void 0,e).toString();w.createdAfter=e=>new w("createdAfter",void 0,e).toString();w.createdBetween=(e,t)=>new w("createdBetween",void 0,[e,t]).toString();w.updatedBefore=e=>new w("updatedBefore",void 0,e).toString();w.updatedAfter=e=>new w("updatedAfter",void 0,e).toString();w.updatedBetween=(e,t)=>new w("updatedBetween",void 0,[e,t]).toString();w.or=e=>new w("or",void 0,e.map(t=>JSON.parse(t))).toString();w.and=e=>new w("and",void 0,e.map(t=>JSON.parse(t))).toString();w.distanceEqual=(e,t,r,n=!0)=>new w("distanceEqual",e,[[t,r,n]]).toString();w.distanceNotEqual=(e,t,r,n=!0)=>new w("distanceNotEqual",e,[[t,r,n]]).toString();w.distanceGreaterThan=(e,t,r,n=!0)=>new w("distanceGreaterThan",e,[[t,r,n]]).toString();w.distanceLessThan=(e,t,r,n=!0)=>new w("distanceLessThan",e,[[t,r,n]]).toString();w.intersects=(e,t)=>new w("intersects",e,[t]).toString();w.notIntersects=(e,t)=>new w("notIntersects",e,[t]).toString();w.crosses=(e,t)=>new w("crosses",e,[t]).toString();w.notCrosses=(e,t)=>new w("notCrosses",e,[t]).toString();w.overlaps=(e,t)=>new w("overlaps",e,[t]).toString();w.notOverlaps=(e,t)=>new w("notOverlaps",e,[t]).toString();w.touches=(e,t)=>new w("touches",e,[t]).toString();w.notTouches=(e,t)=>new w("notTouches",e,[t]).toString();var eo,to;class xn{static custom(t){return t}static unique(t=7){const r=vu(xn,eo,"m",to).call(xn);let n="";for(let a=0;a<t;a++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}eo=xn,to=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Ts;(function(e){e.Totp="totp"})(Ts||(Ts={}));var As;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(As||(As={}));var Is;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Is||(Is={}));var Ds;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Ds||(Ds={}));var Ms;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Ms||(Ms={}));var Cs;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Cs||(Cs={}));var Rs;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Rs||(Rs={}));var Os;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Os||(Os={}));var qs;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(qs||(qs={}));function ro(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function qt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function hu(e,t,r=100){try{const{databases:n,config:a}=await qt(),o=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[w.greaterThan("$updatedAt",t),w.equal("mainId",e),w.limit(r),w.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function no(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:o}=await qt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[w.equal("mainId",e),w.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),w.limit(n)])).documents;const i=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[w.greaterThan("$updatedAt",r),w.equal("mainId",e),w.limit(n),w.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const o=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function Zr(e,t){try{const{databases:r,config:n}=await qt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function Br(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=ro(n,t),{databases:o,config:i}=await qt(),l=await o.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function ao(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await Zr(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function Ra(e,t){return Zr(e,{who:t})}async function Oa(e,t){return Zr(e,{stockReel:t})}async function so(e){try{const{databases:t,config:r}=await qt(),o=await(await window.AppwriteClient.getAccount()).get(),i={...e,createdBy:o.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,xn.unique(),i);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function io(e,t){try{const{databases:r,config:n}=await qt(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function oo(e){try{const{databases:t,config:r}=await qt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function lo(e){if(!e?.length)return[];try{const{databases:t,config:r}=await qt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[w.equal("$id",e),w.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function co(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const u=i.some(p=>p.includes("products.")),f=i.some(p=>p.includes("purchases.")),h=i.some(p=>p.includes(".create")),_=i.some(p=>p.includes(".update")),m=i.some(p=>p.includes(".delete"));if(u){const p=l;h&&t.onProductCreate?t.onProductCreate(p):_&&t.onProductUpdate?t.onProductUpdate(p):m&&t.onProductDelete&&t.onProductDelete(p.$id)}else if(f){const p=l;h&&t.onPurchaseCreate?t.onPurchaseCreate(p):_&&t.onPurchaseUpdate?t.onPurchaseUpdate(p):m&&t.onPurchaseDelete&&t.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function uo(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await qt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function fo(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await qt(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function Fa(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function vo(e,t,r,n){return Fa({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function ho(e,t,r,n="replace"){return Fa({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}const pu=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:Fa,batchUpdateStore:vo,batchUpdateWho:ho,createMainDocument:fo,createPurchase:so,deletePurchase:oo,enrichedProductToAppwriteProduct:ro,loadMainEventData:uo,loadPurchasesListByIds:lo,loadUpdatedPurchases:hu,subscribeToRealtime:co,syncProductsWithPurchases:no,updateProduct:Zr,updateProductStock:Oa,updateProductStore:ao,updateProductWho:Ra,updatePurchase:io,upsertProduct:Br},Symbol.toStringTag,{value:"Module"}));async function _u(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function mu(e,t){const r=fu(e.byDate),n=mn(On([])),{numeric:a,display:o}=qn(r,n);return{$id:`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:jr(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function gu(e,t){return e.map(r=>mu(r,t))}const js=1e3,bu=500;class yu{#e=new wc;#r=J(null);#c=J(!1);#u=J(!1);#o=J(null);#s=J(!1);#i=J(!1);#n=J(Ge([]));#a=J(null);#d=J(null);get startDate(){return s(this.#d)}set startDate(t){k(this.#d,t,!0)}#f=J(null);get endDate(){return s(this.#f)}set endDate(t){k(this.#f,t,!0)}#l=null;#v=null;#h=null;#p=null;#x=J(!1);#t=J(Ge({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get currentMainId(){return s(this.#r)}get isInitialized(){return s(this.#c)}get loading(){return s(this.#u)}get error(){return s(this.#o)}get allDates(){return s(this.#n)}get syncing(){return s(this.#s)}setDateRange(t,r){this.startDate=t,this.endDate=r}initializeDateRange(){if((!this.startDate||!this.endDate)&&s(this.#n).length>0){const t=[...s(this.#n)].sort();this.startDate=t[0],this.endDate=t[t.length-1]}console.log(`[ProductsStore] Date range initialized: ${this.startDate} - ${this.endDate}`)}get firstDate(){return s(this.#n).length===0?null:[...s(this.#n)].sort()[0]}get lastDate(){return s(this.#n).length===0?null:[...s(this.#n)].sort().pop()}get realtimeConnected(){return s(this.#i)}get hugoContentChanged(){return s(this.#x)}getTotalNeededInRange(t){return this.totalNeededByDateRange.get(t)??[]}getFormattedTotalNeeded(t){const r=this.getTotalNeededInRange(t);return r.length>0?jr(r):"-"}#P=W(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#P)}set enrichedProducts(t){k(this.#P,t)}#g=W(()=>{if(console.log("[Store] Recalcul totalNeededByDateRange"),this.startDate===this.firstDate&&this.endDate===this.lastDate)return console.log("[Store] Full date range - using totalNeededArray (no calculation)"),new Map(this.enrichedProducts.map(n=>[n.$id,n.totalNeededArray]));const r=new Map;for(const n of this.enrichedProducts)if(n.byDate){const a=uu(n.byDate),o=su(a,this.startDate,this.endDate);o.length>0&&r.set(n.$id,o)}return r});get totalNeededByDateRange(){return s(this.#g)}set totalNeededByDateRange(t){k(this.#g,t)}#b=W(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const a=jr(r);t.set(n,a)}),t});get formattedTotalNeededByDateRange(){return s(this.#b)}set formattedTotalNeededByDateRange(t){k(this.#b,t)}#y=W(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#y)}set stats(t){k(this.#y,t)}#$=W(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#$)}set uniqueStores(t){k(this.#$,t)}#k=W(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#k)}set uniqueWho(t){k(this.#k,t)}#N=W(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#N)}set uniqueProductTypes(t){k(this.#N,t)}#T=W(()=>new Set(this.totalNeededByDateRange.keys()));get relevantProductIds(){return s(this.#T)}set relevantProductIds(t){k(this.#T,t)}#A=W(()=>{const t=this.enrichedProducts.filter(r=>this.#V(r)&&this.relevantProductIds.has(r.$id));return s(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>s(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get displayProducts(){return s(this.#A)}set displayProducts(t){k(this.#A,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#c)&&s(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),k(this.#r,t,!0),this.#l=Xc("products-enriched",t),k(this.#o,null);try{if(await this.#C(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await _u(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),gu(n.ingredients,t).forEach(i=>{this.#e.set(i.$id,i)}),k(this.#n,n.allDates,!0),await uo(t)||await fo(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),this.#I()}this.initializeDateRange(),await this.#R(),k(this.#c,!0);const r=this.#z();this.#h=co(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw k(this.#o,n,!0),console.error("[ProductsStore]",n,r),r}}async#C(){if(this.#l)try{const t=localStorage.getItem(this.#l);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n,allDates:a}=pe.parse(t);r.forEach(([o,i])=>this.#e.set(o,i)),k(this.#a,n,!0),k(this.#n,a||[],!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}, allDates: ${a?.length||0} dates`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}async#R(){if(s(this.#r)){k(this.#s,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#a)}`);const t=await no(s(this.#r),{lastSync:s(this.#a),limit:js});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#D(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#a)}`);const{loadUpdatedPurchases:r}=await yc(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>pu);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#r),s(this.#a),js);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const o=a.products.map(i=>typeof i=="string"?i:i.$id);this.#E(o,a)}})}this.#m(),this.#_(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{k(this.#s,!1)}}}#I(){if(this.#l)try{const t={lastSync:s(this.#a),products:Array.from(this.#e.entries()),allDates:s(this.#n)};localStorage.setItem(this.#l,pe.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}#_(){this.#p&&clearTimeout(this.#p),this.#p=setTimeout(()=>{this.#I(),this.#p=null},bu)}#m(){k(this.#a,new Date().toISOString(),!0)}#D(t,r){return r?this.#w(t,r):this.#O(t)}#O(t){const r=mn(On(t.purchases??[])),n=[],{numeric:a,display:o}=qn(n,r),i=fn(t.stockReel)??null,l=jr(r),u=t.store?fn(t.store):null,f=i?`${i.quantity} ${i.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:u,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:o,totalNeededOverrideParsed:Ns(t.totalNeededOverride)}}#w(t,r){const n=t.purchases??r.purchases,a=mn(On(n??[])),o=jr(a),{numeric:i,display:l}=qn(r.totalNeededArray,a),u=t.stockReel??r.stockReel,f=u?fn(u):r.stockParsed,h=t.store??r.store,_=h?fn(h):r.storeInfo,m=f?`${f.quantity} ${f.unit}`:o;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:h,stockReel:u,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:_,stockParsed:f,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:m,displayTotalPurchases:o,displayMissingQuantity:l,totalNeededOverrideParsed:Ns(t.totalNeededOverride??r.totalNeededOverride)}}#W(t){t.totalPurchasesArray=mn(On(t.purchases??[]));const{numeric:r,display:n}=qn(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=jr(t.totalPurchasesArray)}#U(t){t.length&&(t.forEach(r=>this.#S(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#S(t){const r=this.#e.get(t.$id),n=this.#D(t,r);this.#e.set(t.$id,n)}#q(t){this.#e.delete(t)}async#j(t){if(!t.products?.length){console.warn("[ProductsStore] Purchase créé sans products:",t.$id);return}const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#L(r,t)}async#B(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#E(r,t);return}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await lo([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);this.#E(n,r)}}catch(r){console.error("[ProductsStore] Erreur rechargement purchase:",r)}}#M(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#L(t,r){const n=this.#M(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(u=>u.$id===n.$id)){const u=this.#w({...i,purchases:[...l,n]},i);a.push(u)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#E(t,r){const n=this.#M(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],u=l.findIndex(f=>f.$id===n.$id);if(u>=0){const f=[...l];f[u]=n;const h=this.#w({...i,purchases:f},i);a.push(h)}else{const f=this.#w({...i,purchases:[...l,r]},i);a.push(f)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#z(){return{onProductCreate:t=>{this.#S(t),this.#m(),this.#_()},onProductUpdate:t=>{this.#S(t),this.#m(),this.#_()},onProductDelete:t=>{this.#q(t),this.#m(),this.#_()},onPurchaseCreate:t=>{this.#j(t),this.#m(),this.#_()},onPurchaseUpdate:t=>{this.#B(t),this.#m(),this.#_()},onPurchaseDelete:t=>{Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t)).forEach(n=>{this.#S(n)}),this.#m(),this.#_()},onConnect:()=>{k(this.#i,!0)},onDisconnect:()=>{k(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#V(t){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#t).selectedStores.includes(t.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!t.productType||!s(this.#t).selectedProductTypes.includes(t.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=au(t=>{s(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#t).selectedProductTypes.indexOf(t);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#t).selectedTemperatures.indexOf(t);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(t){s(this.#t).groupBy=t}toggleStore(t){const r=s(this.#t).selectedStores.indexOf(t);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(t)}toggleWho(t){const r=s(this.#t).selectedWho.indexOf(t);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(t)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(t){s(this.#t).sortColumn===t?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=t,s(this.#t).sortDirection="asc")}clearFilters(){k(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#t).sortColumn],o=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,o=parseFloat(o)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,o=n.purchases?.length||0),a<o?s(this.#t).sortDirection==="asc"?-1:1:a>o?s(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDate?ou(n.byDate,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDate&&n.byDate[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDate?cu(r.byDate):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDate?Object.keys(r.byDate).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?0:lu(r.byDate,this.startDate,this.endDate)}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?[]:Object.keys(r.byDate).filter(a=>{const o=new Date(a),i=this.startDate?new Date(this.startDate):null,l=this.endDate?new Date(this.endDate):null;return i&&l&&o>=i&&o<=l}).flatMap(a=>r.byDate[a]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){this.clearCache(),await this.initialize(t)}clearCache(){this.#e.clear(),k(this.#n,[],!0),k(this.#a,null),this.#l&&localStorage.removeItem(this.#l),this.#v&&localStorage.removeItem(this.#v),console.log("[ProductsStore] Cache vidé")}destroy(){this.#h?.(),this.#h=null,this.#p&&(clearTimeout(this.#p),this.#p=null),console.log("[ProductsStore] Ressources nettoyées")}}const B=new yu;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const wu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Su=Kl("<svg><!><!></svg>");function ue(e,t){U(t,!0);const r=Bt(t,"color",3,"currentColor"),n=Bt(t,"size",3,24),a=Bt(t,"strokeWidth",3,2),o=Bt(t,"absoluteStrokeWidth",3,!1),i=Bt(t,"iconNode",19,()=>[]),l=oe(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=Su();ys(u,_=>({...wu,...l,width:n(),height:n(),stroke:r(),"stroke-width":_,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(a())*24/Number(n()):a()]);var f=c(u);Ue(f,17,i,ra,(_,m)=>{var p=W(()=>Ks(s(m),2));let g=()=>s(p)[0],x=()=>s(p)[1];var b=Y(),$=L(b);tc($,g,!0,(M,P)=>{ys(M,()=>({...x()}))}),v(_,b)});var h=d(f);ie(h,()=>t.children??ne),v(e,u),G()}function qa(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ue(e,ce({name:"archive"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function xu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ue(e,ce({name:"bean"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Pu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ue(e,ce({name:"beef"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Eu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ue(e,ce({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function $u(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ue(e,ce({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Bs(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];ue(e,ce({name:"check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function ku(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ue(e,ce({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Nu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ue(e,ce({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Tu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ue(e,ce({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Au(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];ue(e,ce({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Iu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];ue(e,ce({name:"clock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Du(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];ue(e,ce({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function es(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ue(e,ce({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Mu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ue(e,ce({name:"egg"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function ja(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ue(e,ce({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Ls(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ue(e,ce({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Cu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ue(e,ce({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Ru(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ue(e,ce({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Ou(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ue(e,ce({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function qu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ue(e,ce({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function po(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ue(e,ce({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function ju(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];ue(e,ce({name:"moon"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function $n(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ue(e,ce({name:"package"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Bu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];ue(e,ce({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Lu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ue(e,ce({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function zu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ue(e,ce({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Vu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ue(e,ce({name:"save"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Wu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ue(e,ce({name:"search"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Ba(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ue(e,ce({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Pn(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ue(e,ce({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function La(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ue(e,ce({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function _o(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ue(e,ce({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function ir(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ue(e,ce({name:"store"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Uu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];ue(e,ce({name:"sun"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function mo(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ue(e,ce({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Gu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];ue(e,ce({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function ts(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ue(e,ce({name:"user"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Wn(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ue(e,ce({name:"users"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function Hu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ue(e,ce({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function pt(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=oe(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ue(e,ce({name:"x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=Y(),l=L(i);ie(l,()=>t.children??ne),v(a,i)},$$slots:{default:!0}})),G()}function jn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:xu};case"animaux":return{displayName:"Viandes et Poissons",icon:Pu};case"legumes":return{displayName:"Fruits et Légumes",icon:$u};case"sucres":return{displayName:"Sucrées",icon:Eu};case"lof":return{displayName:"L.O.F",icon:Mu};case"autres":return{displayName:"Autres",icon:ku};case"epices":return{displayName:"Assaisonnements",icon:Cu};case"frais":return{displayName:"Produits Frais",icon:zu};default:return{displayName:e,icon:$n}}}function zs(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function sa(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function ia(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Qu(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function Ku(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],o=n[t.sortColumn];return a<o?t.sortDirection==="asc"?-1:1:a>o?t.sortDirection==="asc"?1:-1:0}):e}function za(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function Vs(e){return e?ia(e):"-"}function Yu(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",o=n.unit||"unit",i=`${a}_${o}`;if(!r[i]){const l=za(a);r[i]={status:a,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Zu(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function Zu(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ShoppingCart";case"pending":return"Clock";case"delivered":return"CircleCheck";case"cancelled":return"CircleX";default:return"Package"}}let Ws=()=>localStorage.getItem("appwrite-user-name")||"";function Ju(e){let t=J(!1),r=J(null);const n=W(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),B.getEnrichedProductById(e))),a=W(()=>s(n)?.who??[]),o=W(()=>s(n)?.stockParsed??null),i=W(()=>s(n)?.purchases??[]),l=W(()=>s(n)?.byDate?du(s(n).byDate):[]),u=Ge({purchase:{quantity:null,unit:"",store:"",who:Ws()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});let f=J(!1);Za(()=>{!s(n)||s(f)||(u.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,u.purchase.unit=s(n).totalNeededArray[0]?.u??"",u.purchase.store=s(n).storeInfo?.storeName??"",u.purchase.who=Ws()??"",u.purchase.status=u.purchase.status||"delivered",u.stock.unit=s(n).totalNeededArray[0]?.u??"",u.store.name=s(n).storeInfo?.storeName??null,u.store.comment=s(n).storeInfo?.storeComment??null,k(f,!0))});let h=J(null);const _=W(()=>s(h)?s(i).find(N=>N.$id===s(h))??null:null);async function m(N,q){k(t,!0),k(r,null);try{const V=await N();return q&&p("success",q),V}catch(V){const we=V instanceof Error?V.message:"Une erreur est survenue";return k(r,we,!0),p("error",we),console.error("[ProductModalState]",V),null}finally{k(t,!1)}}function p(N,q){const V=new CustomEvent("toast",{detail:{type:N,message:q}});window.dispatchEvent(V)}async function g(){s(n)&&await m(async()=>{if(!u.purchase.quantity||!u.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!B.currentMainId)throw new Error("mainId non disponible");const{quantity:N,unit:q}=zs(u.purchase.quantity,u.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await Br(s(n).$id,{},V=>B.getEnrichedProductById(V))),await so({products:[s(n).$id],mainId:B.currentMainId,unit:q,quantity:N,store:u.purchase.store||null,who:u.purchase.who||null,notes:u.purchase.notes||"",price:u.purchase.price||null,status:u.purchase.status||"delivered",orderDate:u.purchase.orderDate||null,deliveryDate:u.purchase.deliveryDate||null}),u.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:u.purchase.store,who:u.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function x(N){k(h,N.$id,!0)}function b(){k(h,null)}async function $(N){N.$id&&await m(async()=>{const{quantity:q,unit:V}=zs(N.quantity,N.unit);await io(N.$id,{unit:V,quantity:q,store:N.store||null,who:N.who||null,notes:N.notes||"",price:N.price||null,status:N.status||null,orderDate:N.orderDate||null,deliveryDate:N.deliveryDate||null}),k(h,null)},"Achat modifié avec succès")}async function M(N){const q=s(i).find(V=>V.$id===N);q&&confirm(`Supprimer cet achat (${q.quantity} ${q.unit}) ?`)&&await m(async()=>{await oo(N)},"Achat supprimé avec succès")}async function P(){s(n)&&await m(async()=>{if(!u.stock.quantity||!u.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const N={quantity:u.stock.quantity.toString(),unit:u.stock.unit,notes:u.stock.notes,dateTime:u.stock.dateTime};s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await Oa(s(n).$id,JSON.stringify(N))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await Br(s(n).$id,{stockReel:JSON.stringify(N)},q=>B.getEnrichedProductById(q))),u.stock.quantity=null,u.stock.notes="",u.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function S(){s(n)&&confirm("Supprimer le stock actuel ?")&&await m(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, suppression stock normal...`),await Oa(s(n).$id,null)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, suppression stock avec upsert...`),await Br(s(n).$id,{stockReel:null},N=>B.getEnrichedProductById(N)))},"Stock supprimé")}async function E(N){!s(n)||!N.trim()||await m(async()=>{if(s(a).includes(N))throw new Error("Ce volontaire est déjà ajouté");const q=[...s(a),N.trim()];s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update normal...`),await Ra(s(n).$id,q)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création avec upsert...`),await Br(s(n).$id,{who:q},V=>B.getEnrichedProductById(V)))},"Volontaire ajouté")}async function T(N){s(n)&&confirm(`Retirer ${N} ?`)&&await m(async()=>{await Ra(s(n).$id,s(a).filter(q=>q!==N))},"Volontaire retiré")}async function R(N){s(n)&&await m(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await ao(s(n).$id,N)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await Br(s(n).$id,{store:JSON.stringify(N)},q=>B.getEnrichedProductById(q)))},"Magasin mis à jour")}async function A(N){s(n)&&await m(async()=>{await Zr(s(n).$id,{totalNeededOverride:JSON.stringify(N)})},"Override appliqué")}async function ee(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await m(async()=>{await Zr(s(n).$id,{totalNeededOverride:null})},"Override supprimé")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockParsed(){return s(o)},get purchasesList(){return s(i)},get editingPurchaseId(){return s(h)},get editingPurchaseData(){return s(_)},forms:u,addPurchase:g,startEditPurchase:x,cancelEditPurchase:b,updateEditedPurchase:$,removePurchase:M,setStock:P,removeStock:S,addVolunteer:E,removeVolunteer:T,updateStore:R,setOverride:A,removeOverride:ee,formatQuantity:sa,formatDate:ia,formatDisplayQuantity:Qu}}function Xu(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Fu(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function ed(e,t){t().cancelEditPurchase()}var td=y('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),rd=y('<span class="loading loading-spinner loading-sm"></span>'),nd=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),ad=y('<span class="loading loading-spinner loading-sm"></span>'),sd=y('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),id=(e,t,r)=>t(s(r)),od=(e,t,r)=>t(s(r).$id),ld=y('<span class="loading loading-spinner loading-sm"></span>'),cd=y('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),ud=y('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),dd=y(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Notes" maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function fd(e,t){U(t,!0);let r=Bt(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(K){return K.quantity!==null&&K.quantity!==0&&K.unit?.trim()!==""}function o(K){r().removePurchase(K)}function i(K){r().startEditPurchase(K)}var l=dd(),u=c(l),f=c(u);Pn(f,{class:"h-5 w-5"});var h=d(u,2),_=c(h),m=d(c(_),2),p=c(m),g=c(p);$n(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2),b=d(p,2),$=c(b);$.value=$.__value="";var M=d($);M.value=M.__value="kg";var P=d(M);P.value=P.__value="gr.";var S=d(P);S.value=S.__value="l.";var E=d(S);E.value=E.__value="ml";var T=d(E);T.value=T.__value="unité";var R=d(T);R.value=R.__value="bottes";var A=d(b,2),ee=c(A);ir(ee,{class:"h-4 w-4 opacity-50"});var N=d(ee,2),q=d(A,2),V=c(q);ts(V,{class:"h-4 w-4 opacity-50"});var we=d(V,2),Ie=d(q,2),Se=d(c(Ie),2),be=d(m,2),ae=c(be),D=c(ae);po(D,{class:"h-4 w-4 opacity-50"});var X=d(D,2),_e=d(be,2),ke=c(_e),De=c(ke),Le=c(De),Ke=c(Le);Ke.value=Ke.__value="delivered";var de=d(Ke);de.value=de.__value="requested";var ye=d(de);ye.value=ye.__value="ordered";var se=d(De,2),xe=d(ke,2);{var Re=K=>{var Ne=td(),Je=d(c(Ne),2);Ce(Je,()=>r().forms.purchase.deliveryDate,Ye=>r().forms.purchase.deliveryDate=Ye),v(K,Ne)};I(xe,K=>{r().forms.purchase.status==="ordered"&&K(Re)})}var z=d(_e,2),Q=c(z);Q.__click=[Xu,n,r];var O=c(Q);{var Z=K=>{var Ne=rd();v(K,Ne)},te=K=>{var Ne=vt("Ajouter l'achat");v(K,Ne)};I(O,K=>{r().loading?K(Z):K(te,!1)})}var Me=d(h,2);{var mt=K=>{var Ne=nd(),Je=c(Ne);Pn(Je,{class:"mx-auto mb-2 h-12 w-12"}),v(K,Ne)},tt=K=>{var Ne=ud(),Je=c(Ne),Ye=d(c(Je));Ue(Ye,21,()=>r().purchasesList,rt=>rt.$id,(rt,F,Nr)=>{var Kt=Y(),At=L(Kt);{var Pe=at=>{var st=sd(),Ze=c(st),ze=c(Ze),ot=c(ze),dt=d(ot,2),wt=c(dt);wt.value=wt.__value="kg";var ft=d(wt);ft.value=ft.__value="gr.";var Yt=d(ft);Yt.value=Yt.__value="l.";var Zt=d(Yt);Zt.value=Zt.__value="ml";var ur=d(Zt);ur.value=ur.__value="unité";var Jt=d(ur);Jt.value=Jt.__value="bottes";var Tr=d(Ze),Ar=c(Tr),Ir=d(Tr),Dr=c(Ir),Mr=d(Ir),dr=c(Mr),fr=c(dr);fr.value=fr.__value="requested";var vr=d(fr);vr.value=vr.__value="ordered";var Xt=d(vr);Xt.value=Xt.__value="delivered";var Ft=d(Xt);Ft.value=Ft.__value="cancelled";var hr=d(Mr),pr=c(hr),Cr=d(hr),H=c(Cr),me=d(Cr),Oe=c(me),Xe=d(me),He=c(Xe),lt=d(Xe),St=c(lt),Ee=c(St);Ee.__click=[Fu,r,a];var qe=c(Ee);{var Ae=ve=>{var xt=ad();v(ve,xt)},le=ve=>{Vu(ve,{class:"h-3 w-3"})};I(qe,ve=>{r().loading?ve(Ae):ve(le,!1)})}var je=d(Ee,2);je.__click=[ed,r];var Ve=c(je);pt(Ve,{class:"h-3 w-3"}),j(ve=>Ee.disabled=ve,[()=>r().loading||!a(s(F))]),Ce(ot,()=>s(F).quantity,ve=>s(F).quantity=ve),Lr(dt,()=>s(F).unit,ve=>s(F).unit=ve),Ce(Ar,()=>s(F).store,ve=>s(F).store=ve),Ce(Dr,()=>s(F).who,ve=>s(F).who=ve),Lr(dr,()=>s(F).status,ve=>s(F).status=ve),Ce(pr,()=>s(F).orderDate,ve=>s(F).orderDate=ve),Ce(H,()=>s(F).deliveryDate,ve=>s(F).deliveryDate=ve),Ce(Oe,()=>s(F).price,ve=>s(F).price=ve),Ce(He,()=>s(F).notes,ve=>s(F).notes=ve),v(at,st)},nt=at=>{var st=cd(),Ze=c(st),ze=c(Ze),ot=d(Ze),dt=c(ot),wt=d(ot),ft=c(wt),Yt=d(wt),Zt=c(Yt),ur=c(Zt),Jt=d(Yt),Tr=c(Jt),Ar=d(Jt),Ir=c(Ar),Dr=d(Ar),Mr=c(Dr),dr=d(Dr),fr=c(dr),vr=d(dr),Xt=c(vr),Ft=c(Xt);Ft.__click=[id,i,F];var hr=c(Ft);_o(hr,{class:"h-4 w-4"});var pr=d(Ft,2);pr.__click=[od,o,F];var Cr=c(pr);{var H=Oe=>{var Xe=ld();v(Oe,Xe)},me=Oe=>{pt(Oe,{class:"h-4 w-4"})};I(Cr,Oe=>{r().loading?Oe(H):Oe(me,!1)})}j((Oe,Xe,He,lt,St)=>{C(ze,Oe),C(dt,s(F).store||"-"),C(ft,s(F).who||"-"),Te(Zt,1,`badge badge-sm ${Xe??""}`),C(ur,He),C(Tr,lt),C(Ir,St),C(Mr,s(F).price?`${s(F).price}€`:"-"),C(fr,s(F).notes||"-"),pr.disabled=r().loading},[()=>sa(s(F).quantity,s(F).unit),()=>za(s(F).status).class,()=>za(s(F).status).text,()=>Vs(s(F).orderDate),()=>Vs(s(F).deliveryDate)]),v(at,st)};I(At,at=>{r().editingPurchaseId===s(F).$id?at(Pe):at(nt,!1)})}v(rt,Kt)}),v(K,Ne)};I(Me,K=>{r().purchasesList.length===0?K(mt):K(tt,!1)})}j(K=>{Te(se,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),Q.disabled=K},[()=>r().loading||!n()]),Ce(x,()=>r().forms.purchase.quantity,K=>r().forms.purchase.quantity=K),Lr(b,()=>r().forms.purchase.unit,K=>r().forms.purchase.unit=K),Ce(N,()=>r().forms.purchase.store,K=>r().forms.purchase.store=K),Ce(we,()=>r().forms.purchase.who,K=>r().forms.purchase.who=K),Ce(Se,()=>r().forms.purchase.price,K=>r().forms.purchase.price=K),Ce(X,()=>r().forms.purchase.notes,K=>r().forms.purchase.notes=K),Lr(Le,()=>r().forms.purchase.status,K=>r().forms.purchase.status=K),v(e,l),G()}yt(["click"]);async function vd(e,t){await t()?.setStock()}async function hd(e,t){await t()?.removeStock()}var pd=y('<span class="loading loading-spinner loading-sm"></span>'),_d=y('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),md=y('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),gd=y('<span class="loading loading-spinner loading-xs"></span>'),bd=y('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),yd=y(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function wd(e,t){U(t,!0);let r=Bt(t,"modalState",7),n=W(()=>r()&&r().forms&&r().forms.stock.quantity&&r().forms.stock.quantity>0&&r().forms.stock.unit);var a=yd(),o=c(a),i=c(o);qa(i,{class:"h-5 w-5"});var l=d(o,2),u=c(l),f=c(u),h=c(f),_=d(f,2),m=c(_),p=c(m);$n(p,{class:"h-4 w-4 opacity-50"});var g=d(p,2),x=d(m,2),b=c(x);b.value=b.__value="";var $=d(b);$.value=$.__value="kg";var M=d($);M.value=M.__value="gr.";var P=d(M);P.value=P.__value="l.";var S=d(P);S.value=S.__value="ml";var E=d(S);E.value=E.__value="unité";var T=d(E);T.value=T.__value="bottes";var R=d(_,2),A=c(R),ee=d(R,2),N=c(ee);N.__click=[vd,r];var q=c(N);{var V=ae=>{var D=pd();v(ae,D)},we=ae=>{var D=vt();j(()=>C(D,r().stockParsed?"Mettre à jour":"Ajouter au stock")),v(ae,D)};I(q,ae=>{r().loading?ae(V):ae(we,!1)})}var Ie=d(l,2);{var Se=ae=>{var D=_d(),X=c(D);qa(X,{class:"mx-auto mb-2 h-12 w-12"}),v(ae,D)},be=ae=>{var D=bd(),X=c(D),_e=d(c(X),2),ke=c(_e),De=d(c(ke),2),Le=c(De),Ke=d(ke,2),de=d(c(Ke),2),ye=c(de),se=d(Ke,2);{var xe=te=>{var Me=md(),mt=d(c(Me),2),tt=c(mt);j(()=>C(tt,r().stockParsed.notes)),v(te,Me)};I(se,te=>{r().stockParsed.notes&&te(xe)})}var Re=d(_e,2),z=c(Re);z.__click=[hd,r];var Q=c(z);{var O=te=>{var Me=gd();v(te,Me)},Z=te=>{var Me=vt("Supprimer le stock");v(te,Me)};I(Q,te=>{r().loading?te(O):te(Z,!1)})}j(te=>{C(Le,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),C(ye,te),z.disabled=r().loading},[()=>ia(r().stockParsed.dateTime)]),v(ae,D)};I(Ie,ae=>{r().stockParsed?ae(be,!1):ae(Se)})}j(()=>{C(h,r().stockParsed?"Modifier le stock":"Ajouter un stock"),N.disabled=r().loading||!s(n)}),Ce(g,()=>r().forms.stock.quantity,ae=>r().forms.stock.quantity=ae),Lr(x,()=>r().forms.stock.unit,ae=>r().forms.stock.unit=ae),Ce(A,()=>r().forms.stock.notes,ae=>r().forms.stock.notes=ae),v(e,a),G()}yt(["click"]);var Sd=(e,t)=>{e.key==="Enter"&&t()},xd=y("<option> </option>"),Pd=(e,t,r)=>t(r),Ed=y('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs hover:text-error p-0"><!></button></div>'),$d=y('<span class="loading loading-spinner loading-sm"></span>'),kd=y('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <label class="input"><!> <input type="text" placeholder="Nom du volontaire" list="volunteers"/> <datalist id="volunteers"></datalist></label> <div class="grid-col mt-6 grid gap-2"><div class="text-base-content/70">Volontaires actuels:</div> <div class="flex flex-wrap gap-2"></div></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function Nd(e,t){U(t,!0);let r=J("");const n=W(()=>s(r).trim().length>0&&!t.modalState.whoList.includes(s(r).trim()));async function a(){!s(n)||!t.modalState||(await t.modalState.addVolunteer(s(r).trim()),k(r,""))}async function o(S){await t.modalState?.removeVolunteer(S)}var i=kd(),l=c(i),u=c(l),f=d(c(u),2),h=c(f);ts(h,{class:"h-4 w-4 opacity-50"});var _=d(h,2);_.__keydown=[Sd,a];var m=d(_,2);Ue(m,21,()=>B.uniqueWho,ra,(S,E)=>{var T=xd(),R=c(T),A={};j(()=>{C(R,s(E)),A!==(A=s(E))&&(T.value=(T.__value=s(E))??"")}),v(S,T)});var p=d(f,2),g=d(c(p),2);Ue(g,20,()=>t.modalState.whoList,S=>S,(S,E)=>{var T=Ed(),R=c(T),A=d(R);A.__click=[Pd,o,E];var ee=c(A);pt(ee,{class:"h-3 w-3"}),j(()=>{C(R,`${E??""} `),A.disabled=t.modalState.loading}),v(S,T)});var x=d(p,2),b=c(x);b.__click=a;var $=c(b);{var M=S=>{var E=$d();v(S,E)},P=S=>{var E=vt("Ajouter");v(S,E)};I($,S=>{t.modalState.loading?S(M):S(P,!1)})}j(()=>b.disabled=t.modalState.loading||!s(n)),Ce(_,()=>s(r),S=>k(r,S)),v(e,i),G()}yt(["keydown","click"]);var Td=(e,t)=>{e.key==="Enter"&&t()},Ad=y("<option> </option>"),Id=y('<span class="loading loading-spinner loading-sm"></span>'),Dd=(e,t,r)=>{k(t,""),k(r,"")},Md=y(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/> <datalist id="stores"></datalist></label> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function Cd(e,t){U(t,!0);const r=W(()=>t.modalState?.forms?.store||{name:null,comment:null}),n=W(()=>s(r).name||""),a=W(()=>s(r).comment||"");let o=J(Ge(s(n))),i=J(Ge(s(a)));const l=W(()=>s(o).trim()!==(s(r).name||"")||s(i).trim()!==(s(r).comment||""));async function u(){if(!s(l))return;const A={storeName:s(o).trim(),storeComment:s(i).trim()};await t.modalState.updateStore(A)}var f=Md(),h=c(f),_=c(h),m=d(c(_),4),p=c(m),g=c(p);ir(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2);x.__keydown=[Td,u];var b=d(x,2);Ue(b,21,()=>B.uniqueStores,ra,(A,ee)=>{var N=Ad(),q=c(N),V={};j(()=>{C(q,s(ee)),V!==(V=s(ee))&&(N.value=(N.__value=s(ee))??"")}),v(A,N)});var $=d(p,2),M=d(m,2),P=c(M);P.__click=u;var S=c(P);{var E=A=>{var ee=Id();v(A,ee)},T=A=>{var ee=vt("Mettre à jour");v(A,ee)};I(S,A=>{t.modalState.loading?A(E):A(T,!1)})}var R=d(P,2);R.__click=[Dd,o,i],j(()=>{P.disabled=t.modalState.loading||!s(l),R.disabled=t.modalState.loading}),Ce(x,()=>s(o),A=>k(o,A)),Ce($,()=>s(i),A=>k(i,A)),v(e,f),G()}yt(["keydown","click"]);async function Rd(e,t,r,n,a,o){if(!t.modalState)return;const i={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await t.modalState.setOverride(i),k(o,!1)}async function Od(e,t,r){t.modalState&&(await t.modalState.removeOverride(),k(r,!1))}var qd=y('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),jd=y('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),Bd=y(" <!>",1),Ld=(e,t)=>k(t,!0),zd=y('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),Vd=y('<div class="text-error text-sm">Limite de caractères atteinte</div>'),Wd=y('<span class="loading loading-spinner loading-sm"></span>'),Ud=y('<span class="loading loading-spinner loading-sm"></span>'),Gd=y(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div class="form-control"><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),Hd=y('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function Qd(e,t){U(t,!0);const r=W(()=>t.modalState.product?.totalNeededOverride),n=W(()=>t.modalState.product?.displayTotalNeeded||[]);let a=J(!1),o=J(Ge(t.modalState.product?.totalNeededOverride?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=J(Ge(t.modalState.product?.totalNeededOverride?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=J(Ge(t.modalState.product?.totalNeededOverride?.comment||"")),u=W(()=>s(o)>0&&s(i).trim()!=="");var f=Hd(),h=c(f),_=c(h),m=c(_);{var p=x=>{var b=zd(),$=L(b),M=c($),P=d(c(M),2);{var S=N=>{var q=qd();v(N,q)};I(P,N=>{s(r)&&N(S)})}var E=d(P,2),T=c(E);{var R=N=>{var q=Bd(),V=L(q),we=d(V);{var Ie=Se=>{var be=jd(),ae=c(be);po(ae,{});var D=d(ae);j(()=>C(D,` ${s(r).comment??""}`)),v(Se,be)};I(we,Se=>{s(r).comment&&Se(Ie)})}j(Se=>C(V,`${Se??""} `),[()=>sa(s(r).totalOverride.q,s(r).totalOverride.u)]),v(N,q)},A=N=>{var q=vt();j(()=>C(q,s(n))),v(N,q)};I(T,N=>{s(r)?N(R):N(A,!1)})}var ee=d($,2);ee.__click=[Ld,a],v(x,b)},g=x=>{var b=Gd(),$=L(b),M=c($),P=c(M);Bu(P,{class:"h-4 w-4 opacity-50"});var S=d(P,2),E=d(M,2),T=c(E);T.value=T.__value="";var R=d(T);R.value=R.__value="kg";var A=d(R);A.value=A.__value="gr.";var ee=d(A);ee.value=ee.__value="l.";var N=d(ee);N.value=N.__value="ml";var q=d(N);q.value=q.__value="unité";var V=d(q);V.value=V.__value="bottes";var we=d($,2),Ie=c(we),Se=d(c(Ie),2),be=d(Se,2);{var ae=se=>{var xe=Vd();v(se,xe)};I(be,se=>{s(l).length>=250&&se(ae)})}var D=d(we,2),X=c(D);X.__click=[Od,t,a];var _e=c(X);{var ke=se=>{var xe=Wd();v(se,xe)},De=se=>{var xe=vt();j(()=>C(xe,`Réinitialiser le total calculé (${s(n)??""}).`)),v(se,xe)};I(_e,se=>{t.modalState.loading?se(ke):se(De,!1)})}var Le=d(X,2);Le.__click=[Rd,t,o,i,l,a];var Ke=c(Le);{var de=se=>{var xe=Ud();v(se,xe)},ye=se=>{var xe=vt("Appliquer");v(se,xe)};I(Ke,se=>{t.modalState.loading?se(de):se(ye,!1)})}j(()=>{X.disabled=t.modalState.loading,Le.disabled=t.modalState.loading||!s(u)}),Ce(S,()=>s(o),se=>k(o,se)),Lr(E,()=>s(i),se=>k(i,se)),Ce(Se,()=>s(l),se=>k(l,se)),v(x,b)};I(m,x=>{s(a)?x(g,!1):x(p)})}j(()=>Te(h,1,`card border-base-300 border ${s(a)?"bg-base-200":"bg-base-100"}`)),v(e,f),G()}yt(["click"]);var Kd=y('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Yd=y('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Zd=y('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Jd=y('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Xd(e,t){U(t,!0);const r=W(()=>t.modalState.recipes);var n=Jd(),a=L(n);Qd(a,{get modalState(){return t.modalState}});var o=d(a,2),i=c(o),l=c(i);es(l,{class:"h-5 w-5"});var u=d(i,2);{var f=_=>{var m=Kd(),p=c(m);$n(p,{class:"mx-auto mb-2 h-12 w-12"}),v(_,m)},h=_=>{var m=Zd(),p=c(m),g=d(c(p));Ue(g,21,()=>s(r),x=>x.r,(x,b)=>{var $=Yd(),M=c($),P=c(M),S=d(M),E=c(S),T=d(S),R=c(T);j(A=>{C(P,`${s(b).r??""} (${(s(b).a||"-")??""} c.)`),C(E,`${(s(b).q||s(b).qEq)??""} ${(s(b).u||s(b).uEq)??""}`),C(R,A)},[()=>ia(s(b).date)]),v(x,$)}),v(_,m)};I(u,_=>{s(r).length===0?_(f):_(h,!1)})}v(e,n),G()}var Fd=y('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),ef=y('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),tf=(e,t)=>t("recettes"),rf=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),nf=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),af=(e,t)=>t("achats"),sf=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),of=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),lf=(e,t)=>t("stock"),cf=y('<span class="badge badge-sm badge-secondary ml-1">1</span>'),uf=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),df=(e,t)=>t("volontaires"),ff=y('<span class="badge badge-sm badge-secondary ml-1"> </span>'),vf=y('<span class="badge badge-sm badge-ghost ml-1">0</span>'),hf=(e,t)=>t("magasins"),pf=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),_f=y('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div>',1),mf=y('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function gf(e,t){U(t,!0);let r=Bt(t,"initialTab",3,"recettes"),n=W(()=>Ju(t.productId)),a=J(Ge(r()));function o(b){k(a,b,!0)}var i=mf(),l=c(i),u=c(l),f=c(u);{var h=b=>{var $=Fd(),M=L($),P=c(M),S=d(M,2),E=c(S),T=c(E),R=d(E,2),A=d(c(R));j(()=>{C(P,s(n).product?.productName),C(T,s(n).product?.productType),C(A,` ${s(n).product?.displayTotalNeeded??""}`)}),v(b,$)},_=b=>{var $=ef();v(b,$)};I(f,b=>{s(n)&&s(n).product?b(h):b(_,!1)})}var m=d(f,2);m.__click=function(...b){t.onClose?.apply(this,b)};var p=c(m);pt(p,{class:"h-4 w-4"});var g=d(u,2);{var x=b=>{var $=_f(),M=L($),P=c(M);P.__click=[tf,o];var S=c(P);es(S,{class:"mr-1 h-5 w-5"});var E=d(S,2);{var T=O=>{var Z=rf(),te=c(Z);j(()=>C(te,s(n).product?.nbRecipes)),v(O,Z)},R=O=>{var Z=nf();v(O,Z)};I(E,O=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?O(T):O(R,!1)})}var A=d(P,2);A.__click=[af,o];var ee=c(A);Pn(ee,{class:"mr-1 h-5 w-5"});var N=d(ee,2);{var q=O=>{var Z=sf(),te=c(Z);j(()=>C(te,s(n).purchasesList.length)),v(O,Z)},V=O=>{var Z=of();v(O,Z)};I(N,O=>{s(n).purchasesList.length>0?O(q):O(V,!1)})}var we=d(A,2);we.__click=[lf,o];var Ie=c(we);qa(Ie,{class:"mr-1 h-5 w-5"});var Se=d(Ie,2);{var be=O=>{var Z=cf();v(O,Z)},ae=O=>{var Z=uf();v(O,Z)};I(Se,O=>{s(n).stockParsed?O(be):O(ae,!1)})}var D=d(we,2);D.__click=[df,o];var X=c(D);Wn(X,{class:"mr-1 h-5 w-5"});var _e=d(X,2);{var ke=O=>{var Z=ff(),te=c(Z);j(()=>C(te,s(n).product?.who.length)),v(O,Z)},De=O=>{var Z=vf();v(O,Z)};I(_e,O=>{s(n).product?.who&&s(n).product?.who.length>0?O(ke):O(De,!1)})}var Le=d(D,2);Le.__click=[hf,o];var Ke=c(Le);ir(Ke,{class:"mr-1 h-5 w-5"});var de=d(M,2),ye=c(de);{var se=O=>{var Z=pf(),te=c(Z);pt(te,{class:"h-4 w-4"});var Me=d(te,2),mt=c(Me);j(()=>C(mt,`erreur : ${s(n).error??""}`)),v(O,Z)};I(ye,O=>{s(n).error&&O(se)})}var xe=d(ye,2),Re=c(xe);Xl(Re,()=>s(a),O=>{var Z=Y(),te=L(Z);{var Me=tt=>{Xd(tt,{get modalState(){return s(n)}})},mt=tt=>{var K=Y(),Ne=L(K);{var Je=rt=>{fd(rt,{get modalState(){return s(n)}})},Ye=rt=>{var F=Y(),Nr=L(F);{var Kt=Pe=>{wd(Pe,{get modalState(){return s(n)}})},At=Pe=>{var nt=Y(),at=L(nt);{var st=ze=>{Nd(ze,{get modalState(){return s(n)}})},Ze=ze=>{var ot=Y(),dt=L(ot);{var wt=ft=>{Cd(ft,{get modalState(){return s(n)}})};I(dt,ft=>{s(a)==="magasins"&&ft(wt)},!0)}v(ze,ot)};I(at,ze=>{s(a)==="volontaires"?ze(st):ze(Ze,!1)},!0)}v(Pe,nt)};I(Nr,Pe=>{s(a)==="stock"?Pe(Kt):Pe(At,!1)},!0)}v(rt,F)};I(Ne,rt=>{s(a)==="achats"?rt(Je):rt(Ye,!1)},!0)}v(tt,K)};I(te,tt=>{s(a)==="recettes"?tt(Me):tt(mt,!1)})}v(O,Z)});var z=d(de,2),Q=c(z);Q.__click=function(...O){t.onClose?.apply(this,O)},j(()=>{Te(P,1,`tab ${s(a)==="recettes"?"tab-active":""}`),Te(A,1,`tab ${s(a)==="achats"?"tab-active":""}`),Te(we,1,`tab ${s(a)==="stock"?"tab-active":""}`),Te(D,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),Te(Le,1,`tab ${s(a)==="magasins"?"tab-active":""}`)}),v(b,$)};I(g,b=>{s(n)&&b(x)})}v(e,i),G()}yt(["click"]);async function bf(e,t,r,n,a,o,i,l,u){if(!(!s(t)||s(r))){k(r,!0),k(n,null),k(a,null);try{let f;if(s(o)){const h={storeName:i.storeName.trim(),storeComment:i.storeComment.trim()};f=await vo(l.productIds,l.products,h)}else if(s(u))f=await ho(l.productIds,l.products,i.whoNames,i.whoMode);else throw new Error("Type d'édition non supporté");k(a,f,!0),f.success?(l.onSuccess?.(f),setTimeout(()=>{l.onClose()},1500)):k(n,f.error||"Erreur lors de la mise à jour",!0)}catch(f){const h=f instanceof Error?f.message:"Erreur inconnue";k(n,h,!0),console.error("[GroupEditModal] Erreur mise à jour:",f)}finally{k(r,!1)}}}function Us(e,t,r){s(t)||r.onClose()}var yf=y('<div class="flex items-center gap-2"><!> <span> </span></div>'),wf=y('<div class="flex items-center gap-2"><!> <span> </span></div>'),Sf=y('<div class="alert alert-error mb-4"><!> <span> </span></div>'),xf=y('<div class="alert alert-success mb-4"><!> <span> </span></div>'),Pf=y("<option> </option>"),Ef=y('<div class="space-y-4"><div><label class="label"><span class="label-text">Nom du magasin</span></label> <label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="label"><span class="label-text">Commentaire (optionnel)</span></label> <textarea class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div>'),$f=(e,t,r)=>t(r),kf=y('<div class="badge badge-primary badge-lg flex items-center gap-1"><span> </span> <button class="btn btn-xs btn-circle btn-ghost hover:bg-error/20"><!></button></div>'),Nf=y('<div class="mt-2 flex flex-wrap gap-2"></div>'),Tf=(e,t,r)=>t(r),Af=y('<button class="btn btn-xs btn-soft btn-outline"> </button>'),If=y('<div class="mt-3"><div class="mb-1 text-xs opacity-70">Suggestions :</div> <div class="flex flex-wrap gap-1"></div></div>'),Df=y(`<div class="space-y-4"><div><label class="label"><span class="label-text">Mode d'application</span></label> <div class="join"><input class="join-item btn btn-sm" type="radio" name="who-mode" aria-label="Remplacer"/> <input class="join-item btn btn-sm" type="radio" name="who-mode" aria-label="Ajouter"/></div> <div class="mt-1 text-xs opacity-70"> </div></div> <div><label class="label"><span class="label-text">Volontaires</span></label> <div class="flex gap-2"><input type="text" class="input input-sm flex-1" placeholder="Ajouter un volontaire..."/> <button class="btn btn-sm btn-primary"><!></button></div> <!> <!></div></div>`),Mf=y('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Cf=y("<!> ",1),Rf=y('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><div class="bg-base-200 mb-6 rounded-lg p-4"><h4 class="mb-2 font-medium">État actuel de ce groupe :</h4> <div class="flex flex-wrap gap-4 text-sm"><!> <!> <div class="flex items-center gap-2"><div class="bg-primary h-4 w-4 rounded-full"></div> <span> </span></div></div></div> <!> <!> <!> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Of(e,t){U(t,!0);const r=[];let n=J(!1),a=J(null),o=J(null),i=Ge({storeName:t.products.length>0&&t.editType==="store"&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"",storeComment:t.products.length>0&&t.editType==="store"&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"",whoNames:t.products.length>0&&t.editType==="who"&&t.products[0].who?[...t.products[0].who]:[],whoMode:"replace"});const l=W(()=>t.editType==="store"),u=W(()=>t.editType==="who"),f=W(()=>s(l)?`Attribuer un magasin (${t.products.length} produits)`:`Gérer les volontaires (${t.products.length} produits)`),h=W(()=>s(l)?i.storeName.trim().length>0:s(u)?i.whoNames.length>0:!1);function _(z){z.trim()&&!i.whoNames.includes(z.trim())&&(i.whoNames=[...i.whoNames,z.trim()])}function m(z){i.whoNames=i.whoNames.filter(Q=>Q!==z)}const p=W(()=>{const z=new Set(t.products.map(Q=>Q.storeInfo?.storeName).filter(Boolean));return Array.from(z)}),g=W(()=>{const z=t.products.flatMap(Q=>Q.who||[]);return new Set(z).size});var x=Rf(),b=c(x),$=c(b),M=c($),P=c(M),S=d(M,2);S.__click=[Us,n,t];var E=c(S);pt(E,{class:"h-4 w-4"});var T=d($,2),R=c(T),A=d(c(R),2),ee=c(A);{var N=z=>{var Q=yf(),O=c(Q);ir(O,{class:"h-4 w-4"});var Z=d(O,2),te=c(Z);j(Me=>C(te,Me),[()=>s(p).length>0?`Magasins: ${s(p).join(", ")}`:"Aucun magasin défini"]),v(z,Q)};I(ee,z=>{s(l)&&z(N)})}var q=d(ee,2);{var V=z=>{var Q=wf(),O=c(Q);Wn(O,{class:"h-4 w-4"});var Z=d(O,2),te=c(Z);j(()=>C(te,`Volontaires: ${s(g)??""} personne(s)`)),v(z,Q)};I(q,z=>{s(u)&&z(V)})}var we=d(q,2),Ie=d(c(we),2),Se=c(Ie),be=d(R,2);{var ae=z=>{var Q=Sf(),O=c(Q);mo(O,{class:"h-4 w-4"});var Z=d(O,2),te=c(Z);j(()=>C(te,s(a))),v(z,Q)};I(be,z=>{s(a)&&z(ae)})}var D=d(be,2);{var X=z=>{var Q=xf(),O=c(Q);Bs(O,{class:"h-4 w-4"});var Z=d(O,2),te=c(Z);j(()=>C(te,`${s(o).updatedCount??""} produit(s) mis à jour avec succès !`)),v(z,Q)};I(D,z=>{s(o)?.success&&z(X)})}var _e=d(D,2);{var ke=z=>{var Q=Ef(),O=c(Q),Z=d(c(O),2),te=c(Z);ir(te,{class:"h-4 w-4 opacity-50"});var Me=d(te,2),mt=d(Z,2);Ue(mt,21,()=>B.uniqueStores,ra,(Ne,Je)=>{var Ye=Pf(),rt=c(Ye),F={};j(()=>{C(rt,s(Je)),F!==(F=s(Je))&&(Ye.value=(Ye.__value=s(Je))??"")}),v(Ne,Ye)});var tt=d(O,2),K=d(c(tt),2);j(()=>{Me.disabled=s(n),K.disabled=s(n)}),Ce(Me,()=>i.storeName,Ne=>i.storeName=Ne),Ce(K,()=>i.storeComment,Ne=>i.storeComment=Ne),v(z,Q)};I(_e,z=>{s(l)&&z(ke)})}var De=d(_e,2);{var Le=z=>{var Q=Df(),O=c(Q),Z=d(c(O),2),te=c(Z);te.value=te.__value="replace";var Me=d(te,2);Me.value=Me.__value="add";var mt=d(Z,2),tt=c(mt),K=d(O,2),Ne=d(c(K),2),Je=c(Ne);Je.__keydown=Pe=>{Pe.key==="Enter"&&(Pe.preventDefault(),_(Pe.currentTarget.value),Pe.currentTarget.value="")};var Ye=d(Je,2);Ye.__click=Pe=>{const nt=Pe.currentTarget.previousElementSibling;_(nt.value),nt.value=""};var rt=c(Ye);Gu(rt,{class:"h-4 w-4"});var F=d(Ne,2);{var Nr=Pe=>{var nt=Nf();Ue(nt,20,()=>i.whoNames,at=>at,(at,st)=>{var Ze=kf(),ze=c(Ze),ot=c(ze),dt=d(ze,2);dt.__click=[$f,m,st];var wt=c(dt);pt(wt,{class:"h-3 w-3"}),j(()=>{C(ot,st),dt.disabled=s(n)}),v(at,Ze)}),v(Pe,nt)};I(F,Pe=>{i.whoNames.length>0&&Pe(Nr)})}var Kt=d(F,2);{var At=Pe=>{var nt=If(),at=d(c(nt),2);Ue(at,20,()=>B.uniqueWho.slice(0,8),st=>st,(st,Ze)=>{var ze=Af();ze.__click=[Tf,_,Ze];var ot=c(ze);j(dt=>{ze.disabled=dt,C(ot,Ze)},[()=>s(n)||i.whoNames.includes(Ze)]),v(st,ze)}),v(Pe,nt)};I(Kt,Pe=>{B.uniqueWho.length>0&&Pe(At)})}j(()=>{te.disabled=s(n),Me.disabled=s(n),C(tt,i.whoMode==="replace"?"Remplacera tous les volontaires existants":"Ajoutera aux volontaires existants"),Je.disabled=s(n),Ye.disabled=s(n)}),Ss(r,[],te,()=>i.whoMode,Pe=>i.whoMode=Pe),Ss(r,[],Me,()=>i.whoMode,Pe=>i.whoMode=Pe),v(z,Q)};I(De,z=>{s(u)&&z(Le)})}var Ke=d(T,2),de=c(Ke);de.__click=[Us,n,t];var ye=d(de,2);ye.__click=[bf,h,n,a,o,l,i,t,u];var se=c(ye);{var xe=z=>{var Q=Mf();v(z,Q)},Re=z=>{var Q=Cf(),O=L(Q);Bs(O,{class:"h-4 w-4"});var Z=d(O);j(()=>C(Z,` Appliquer à ${t.products.length??""} produit(s)`)),v(z,Q)};I(se,z=>{s(n)?z(xe):z(Re,!1)})}j(()=>{C(P,s(f)),S.disabled=s(n),C(Se,`${t.products.length??""} produit(s) concerné(s)`),de.disabled=s(n),ye.disabled=s(n)||!s(h)}),v(e,x),G()}yt(["click","keydown"]);var qf=()=>B.setGroupBy("none"),jf=()=>B.setGroupBy("store"),Bf=()=>B.setGroupBy("productType"),Lf=(e,t)=>B.toggleProductType(t),zf=y("<button><!> </button>"),Vf=()=>B.toggleTemperature("frais"),Wf=()=>B.toggleTemperature("surgele"),Uf=()=>B.clearTypeAndTemperatureFilters(),Gf=y('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Hf=(e,t)=>B.toggleStore(t),Qf=y("<button> </button>"),Kf=y('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Yf=(e,t)=>B.toggleWho(t),Zf=y("<button> </button>"),Jf=y('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Xf=(e,t)=>{B.clearFilters(),k(t,!1)},Ff=y('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function ev(e,t){U(t,!0);let r=J(!1);const n=W(()=>B.filters),a=W(()=>B.uniqueStores),o=W(()=>B.uniqueWho),i=W(()=>B.uniqueProductTypes);var l=Ff(),u=L(l),f=c(u),h=d(f,2),_=d(c(h),2),m=c(_),p=c(m),g=c(p);ja(g,{class:"w-5 h-5"});var x=d(p,2),b=c(x);pt(b,{class:"w-4 h-4"});var $=d(m,2),M=d(c($),2),P=c(M);P.__change=[qf];var S=d(P,2);S.__change=[jf];var E=d(S,2);E.__change=[Bf];var T=d($,2),R=c(T),A=d(c(R),2);Ue(A,20,()=>s(i),de=>de,(de,ye)=>{const se=W(()=>jn(ye));var xe=zf();xe.__click=[Lf,ye];var Re=c(xe);dn(Re,()=>s(se).icon,(Q,O)=>{O(Q,{class:"w-3 h-3 mr-1"})});var z=d(Re);j(Q=>{Te(xe,1,`btn btn-sm ${Q??""}`),C(z,` ${s(se).displayName??""}`)},[()=>s(n).selectedProductTypes.length===0?"btn-soft btn-accent":s(n).selectedProductTypes.includes(ye)?"btn-accent":"btn-dash btn-accent"]),v(de,xe)});var ee=d(A,2),N=c(ee);N.__click=[Vf];var q=c(N);Ba(q,{class:"w-3 h-3"});var V=d(N,2);V.__click=[Wf];var we=c(V);La(we,{class:"w-3 h-3"});var Ie=d(V,2);{var Se=de=>{var ye=Gf();ye.__click=[Uf];var se=c(ye);pt(se,{class:"w-3 h-3"}),v(de,ye)};I(Ie,de=>{(s(n).selectedProductTypes.length>0||s(n).selectedTemperatures.length>0)&&de(Se)})}var be=d(T,2);{var ae=de=>{var ye=Kf(),se=c(ye),xe=d(c(se),2);Ue(xe,20,()=>s(a),Re=>Re,(Re,z)=>{var Q=Qf();Q.__click=[Hf,z];var O=c(Q);j(Z=>{Te(Q,1,`btn btn-sm ${Z??""}`),C(O,z)},[()=>s(n).selectedStores.length===0?"btn-soft btn-accent":s(n).selectedStores.includes(z)?"btn-accent":"btn-dash btn-accent"]),v(Re,Q)}),v(de,ye)};I(be,de=>{s(a).length>0&&de(ae)})}var D=d(be,2);{var X=de=>{var ye=Jf(),se=c(ye),xe=d(c(se),2);Ue(xe,20,()=>s(o),Re=>Re,(Re,z)=>{var Q=Zf();Q.__click=[Yf,z];var O=c(Q);j(Z=>{Te(Q,1,`btn btn-sm ${Z??""}`),C(O,z)},[()=>s(n).selectedWho.length===0?"btn-soft btn-accent":s(n).selectedWho.includes(z)?"btn-accent":"btn-dash btn-accent"]),v(Re,Q)}),v(de,ye)};I(D,de=>{s(o).length>0&&de(X)})}var _e=d(D,4);_e.__click=[Xf,r];var ke=c(_e);pt(ke,{class:"w-4 h-4 mr-2"});var De=d(u,2),Le=c(De),Ke=c(Le);ja(Ke,{class:"w-6 h-6"}),j((de,ye)=>{Wr(P,s(n).groupBy==="none"),Wr(S,s(n).groupBy==="store"),Wr(E,s(n).groupBy==="productType"),Te(N,1,`btn btn-sm ${de??""}`),Te(V,1,`btn btn-sm ${ye??""}`)},[()=>s(n).selectedTemperatures.length===0?"btn-soft btn-success":s(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(n).selectedTemperatures.length===0?"btn-soft btn-info":s(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),uc(f,()=>s(r),de=>k(r,de)),v(e,l),G()}yt(["change","click"]);yt(["mousedown"]);var tv=(e,t,r)=>t(r),rv=y("<button><span> </span> <!></button>"),nv=(e,t)=>t(),av=y('<div class="space-y-4"><div class="space-y-2"><fieldset><legend class="label"><span class="label-text">Dates incluses</span></legend> <div class="flex flex-wrap gap-1"><!> <button class="btn btn-sm btn-primary btn-outline ms-4" type="button"><span>Toutes les dates</span></button></div></fieldset></div></div>');function sv(e,t){U(t,!0);const n=[...Bt(t,"allDates",19,()=>[])()].sort();let a=n[0],o=n[n.length-1],i=J(Ge(a)),l=J(Ge(o));function u(P){s(i)===P&&s(l)===P?m():new Date(P)<new Date(s(i))?k(i,P,!0):(new Date(P)>new Date(s(l))||k(i,P,!0),k(l,P,!0))}function f(P){return new Date(P)>=new Date(s(i))&&new Date(P)<=new Date(s(l))?"btn-soft btn-primary":"btn-dash btn-primary opacity-80"}function h(P){return new Date(P).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function _(P){const E=new Date(P).getUTCHours();return E===12?"sun":E===20?"moon":E===8?"cloud":null}function m(){k(i,a,!0),k(l,o,!0)}Za(()=>{B.setDateRange(s(i),s(l))});var p=av(),g=c(p),x=c(g),b=d(c(x),2),$=c(b);Ue($,18,()=>n,P=>P,(P,S)=>{var E=rv();E.__click=[tv,u,S];var T=c(E),R=c(T),A=d(T,2);{var ee=q=>{Uu(q,{size:16})},N=q=>{var V=Y(),we=L(V);{var Ie=be=>{ju(be,{size:16})},Se=be=>{var ae=Y(),D=L(ae);{var X=_e=>{Du(_e,{size:16})};I(D,_e=>{_(S)==="cloud"&&_e(X)},!0)}v(be,ae)};I(we,be=>{_(S)==="moon"?be(Ie):be(Se,!1)},!0)}v(q,V)};I(A,q=>{_(S)==="sun"?q(ee):q(N,!1)})}j((q,V)=>{Te(E,1,`btn btn-sm ${q??""}`),C(R,V)},[()=>f(S),()=>h(S)]),v(P,E)});var M=d($,2);M.__click=[nv,m],v(e,p),G()}yt(["click"]);const cn=e=>{var t=iv(),r=c(t);_o(r,{class:"h-4 w-4 text-amber-600"}),v(e,t)};var iv=y('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),ov=()=>B.clearFilters(),lv=e=>B.setSearchQuery(e.currentTarget.value),cv=()=>B.setGroupBy("none"),uv=()=>B.setGroupBy("store"),dv=()=>B.setGroupBy("productType"),fv=(e,t)=>B.toggleProductType(t),vv=y("<button><!> </button>"),hv=()=>B.toggleTemperature("frais"),pv=()=>B.toggleTemperature("surgele"),_v=()=>B.clearTypeAndTemperatureFilters(),mv=y('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),gv=y('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),bv=(e,t)=>B.toggleStore(t),yv=y("<button><!> </button>"),wv=()=>B.clearStoreFilters(),Sv=y('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),xv=y('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Pv=(e,t)=>B.toggleWho(t),Ev=y("<button><!> </button>"),$v=()=>B.clearWhoFilters(),kv=y('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Nv=y('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Tv=()=>B.handleSort("productName"),Av=()=>B.handleSort("store"),Iv=()=>B.handleSort("who"),Dv=()=>B.handleSort("productType"),Mv=y('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Cv=(e,t,r)=>t("store",r().map(n=>n.$id),r()),Rv=(e,t,r)=>t("who",r().map(n=>n.$id),r()),Ov=y('<tr class="bg-base-200 sticky top-11 z-10 font-semibold"><td colspan="7" class="py-3"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!></div> <div class="flex items-center gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> Magasin</button> <button class="btn btn-sm btn-info btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> Volontaires</button></div></div></td></tr>'),qv=(e,t,r)=>t(s(r).$id,"recettes"),jv=y('<div class="text-base-content/60 text-xs"> </div>'),Bv=y('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Lv=y('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),zv=(e,t,r)=>t(s(r).$id,"magasins"),Vv=y('<div class="tooltip tooltip-info"><div class="text-center"> </div></div>'),Wv=y('<div class="text-center"> </div>'),Uv=(e,t,r)=>t(s(r).$id,"volontaires"),Gv=y('<span class="badge badge-soft badge-info badge-sm"> </span>'),Hv=y('<div class="flex flex-wrap justify-center gap-2 pr-8"></div>'),Qv=(e,t,r)=>t(s(r).$id,"recettes"),Kv=y('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),Yv=(e,t,r)=>t(s(r).$id,"achats"),Zv=y("<div><!> <span> </span></div>"),Jv=y('<span class="text-center">-</span>'),Xv=y('<div class="bg-warning m-auto rounded px-2 py-1"> </div>'),Fv=y('<tr class="hover:bg-base-200/20 transition-colors"><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-2 text-center text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap justify-center gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!></td></tr>'),eh=y("<!> <!>",1),th=y('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),rh=y('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><!> <div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!> <!>',1);function nh(e,t){U(t,!0);const r={Package:$n,MessageCircleQuestionMark:qu,ShoppingCart:Pn,Clock:Iu,CircleCheck:Tu,CircleX:Au},n=W(()=>B.displayProducts),a=W(()=>B.stats),o=W(()=>B.uniqueStores),i=W(()=>B.uniqueWho),l=W(()=>B.uniqueProductTypes),u=W(()=>B.filters);let f=J(null),h=J("recettes"),_=J(!1),m=J("store"),p=J(Ge([])),g=J(Ge([]));function x(H,me="recettes"){k(h,me,!0),k(f,H,!0)}function b(){k(f,null)}function $(H,me,Oe){k(m,H,!0),k(p,me,!0),k(g,Oe,!0),k(_,!0)}function M(){k(_,!1),k(m,"store"),k(p,[],!0),k(g,[],!0)}function P(H){console.log(`[ProductsTable] Modification groupée réussie: ${H.updatedCount} produits`)}var S=rh(),E=L(S),T=c(E),R=c(T),A=c(R);Ls(A,{class:"mr-1 h-4 w-4"});var ee=d(A),N=d(T,2),q=c(N),V=c(q),we=c(V),Ie=c(we);ja(Ie,{class:"h-5 w-5"});var Se=d(we,2);Se.__click=[ov];var be=c(Se);pt(be,{class:"h-4 w-4"});var ae=d(q,2),D=c(ae),X=d(c(D),2),_e=c(X);Wu(_e,{class:"h-4 w-4"});var ke=d(_e,2);ke.__input=[lv];var De=d(D,2),Le=d(c(De),2),Ke=c(Le);Ke.__change=[cv];var de=d(Ke,2);de.__change=[uv];var ye=d(de,2);ye.__change=[dv];var se=d(ae,2),xe=c(se);sv(xe,{get allDates(){return B.allDates}});var Re=d(xe,2),z=c(Re);{var Q=H=>{var me=gv(),Oe=c(me),Xe=d(c(Oe),2),He=c(Xe);Ue(He,16,()=>s(l),je=>je,(je,Ve)=>{const ve=W(()=>jn(Ve));var xt=vv();xt.__click=[fv,Ve];var er=c(xt);dn(er,()=>s(ve).icon,(tr,Or)=>{Or(tr,{class:"mr-1 h-5 w-5"})});var Rr=d(er);j(tr=>{Te(xt,1,`btn btn-sm ${tr??""}`),C(Rr,` ${s(ve).displayName??""}`)},[()=>s(u).selectedProductTypes.length===0?"btn-soft btn-accent":s(u).selectedProductTypes.includes(Ve)?"btn-accent":"btn-dash btn-accent"]),v(je,xt)});var lt=d(He,2);lt.__click=[hv];var St=c(lt);Ba(St,{class:"h-5 w-5"});var Ee=d(lt,2);Ee.__click=[pv];var qe=c(Ee);La(qe,{class:"h-5 w-5"});var Ae=d(Ee,2);{var le=je=>{var Ve=mv();Ve.__click=[_v];var ve=c(Ve);pt(ve,{class:"h-3 w-3"}),v(je,Ve)};I(Ae,je=>{(s(u).selectedProductTypes.length>0||s(u).selectedTemperatures.length>0)&&je(le)})}j((je,Ve)=>{Te(lt,1,`btn btn-sm ms-4 ${je??""}`),Te(Ee,1,`btn btn-sm ${Ve??""}`)},[()=>s(u).selectedTemperatures.length===0?"btn-soft btn-success":s(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(u).selectedTemperatures.length===0?"btn-soft btn-info":s(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),v(H,me)};I(z,H=>{s(l).length>0&&H(Q)})}var O=d(Re,2),Z=c(O);{var te=H=>{var me=xv(),Oe=c(me),Xe=d(c(Oe),2),He=c(Xe);Ue(He,16,()=>s(o),Ee=>Ee,(Ee,qe)=>{var Ae=yv();Ae.__click=[bv,qe];var le=c(Ae);ir(le,{class:"mr-1 h-3 w-3"});var je=d(le);j(Ve=>{Te(Ae,1,`btn btn-xs ${Ve??""}`),C(je,` ${qe??""}`)},[()=>s(u).selectedStores.length===0?"btn-soft btn-accent":s(u).selectedStores.includes(qe)?"btn-accent":"btn-dash btn-accent"]),v(Ee,Ae)});var lt=d(He,2);{var St=Ee=>{var qe=Sv();qe.__click=[wv];var Ae=c(qe);pt(Ae,{class:"h-3 w-3"}),v(Ee,qe)};I(lt,Ee=>{s(u).selectedStores.length>0&&Ee(St)})}v(H,me)};I(Z,H=>{s(o).length>0&&H(te)})}var Me=d(Z,2);{var mt=H=>{var me=Nv(),Oe=c(me),Xe=d(c(Oe),2),He=c(Xe);Ue(He,16,()=>s(i),Ee=>Ee,(Ee,qe)=>{var Ae=Ev();Ae.__click=[Pv,qe];var le=c(Ae);ts(le,{class:"mr-1 h-3 w-3"});var je=d(le);j(Ve=>{Te(Ae,1,`btn btn-xs ${Ve??""}`),C(je,` ${qe??""}`)},[()=>s(u).selectedWho.length===0?" btn-soft btn-info":s(u).selectedWho.includes(qe)?" btn-info":"btn-dash btn-info"]),v(Ee,Ae)});var lt=d(He,2);{var St=Ee=>{var qe=kv();qe.__click=[$v];var Ae=c(qe);pt(Ae,{class:"h-3 w-3"}),v(Ee,qe)};I(lt,Ee=>{s(u).selectedWho.length>0&&Ee(St)})}v(H,me)};I(Me,H=>{s(i).length>0&&H(mt)})}var tt=d(N,2),K=c(tt),Ne=c(K),Je=c(Ne),Ye=c(Je);Ye.__click=[Tv];var rt=c(Ye),F=c(rt);Ls(F,{class:"h-4 w-4"});var Nr=d(F,2);{var Kt=H=>{var me=vt();j(()=>C(me,s(u).sortDirection==="asc"?"↑":"↓")),v(H,me)};I(Nr,H=>{s(u).sortColumn==="productName"&&H(Kt)})}var At=d(Ye);At.__click=[Av];var Pe=c(At),nt=c(Pe);ir(nt,{class:"h-4 w-4"});var at=d(nt,2);{var st=H=>{var me=vt();j(()=>C(me,s(u).sortDirection==="asc"?"↑":"↓")),v(H,me)};I(at,H=>{s(u).sortColumn==="store"&&H(st)})}var Ze=d(At);Ze.__click=[Iv];var ze=c(Ze),ot=c(ze);Wn(ot,{class:"h-4 w-4"});var dt=d(ot,2);{var wt=H=>{var me=vt();j(()=>C(me,s(u).sortDirection==="asc"?"↑":"↓")),v(H,me)};I(dt,H=>{s(u).sortColumn==="who"&&H(wt)})}var ft=d(Ze);ft.__click=[Dv];var Yt=c(ft),Zt=d(c(Yt));{var ur=H=>{var me=vt();j(()=>C(me,s(u).sortDirection==="asc"?"↑":"↓")),v(H,me)};I(Zt,H=>{s(u).sortColumn==="productType"&&H(ur)})}var Jt=d(ft,2),Tr=c(Jt),Ar=c(Tr);Pn(Ar,{class:"h-4 w-4"});var Ir=d(Jt),Dr=c(Ir),Mr=c(Dr);Ru(Mr,{class:"h-4 w-4"});var dr=d(Ne);Ue(dr,21,()=>Object.entries(s(n)),([H,me])=>H,(H,me)=>{var Oe=W(()=>Ks(s(me),2));let Xe=()=>s(Oe)[0],He=()=>s(Oe)[1];var lt=eh(),St=L(lt);{var Ee=Ae=>{const le=W(()=>jn(Xe()));var je=Ov(),Ve=c(je),ve=c(Ve),xt=c(ve),er=c(xt);{var Rr=jt=>{var _r=vt();j(()=>C(_r,`🏪 ${Xe()??""} (${He().length??""})`)),v(jt,_r)},tr=jt=>{var _r=Y(),ca=L(_r);{var ua=kt=>{var rr=Mv(),Nn=c(rr);dn(Nn,()=>s(le).icon,(va,ha)=>{ha(va,{class:"h-4 w-4"})});var Tn=d(Nn,2),fa=c(Tn),rn=d(Tn,2),An=c(rn);j(()=>{C(fa,s(le).displayName),C(An,`(${He().length??""})`)}),v(kt,rr)},da=kt=>{var rr=vt();j(()=>C(rr,`📦 ${Xe()??""} (${He().length??""})`)),v(kt,rr)};I(ca,kt=>{s(u).groupBy==="productType"?kt(ua):kt(da,!1)},!0)}v(jt,_r)};I(er,jt=>{s(u).groupBy==="store"?jt(Rr):jt(tr,!1)})}var Or=d(xt,2),tn=c(Or);tn.__click=[Cv,$,He];var oa=c(tn);ir(oa,{class:"h-3 w-3"});var kn=d(tn,2);kn.__click=[Rv,$,He];var la=c(kn);Wn(la,{class:"h-3 w-3"}),v(Ae,je)};I(St,Ae=>{Xe()!==""&&Ae(Ee)})}var qe=d(St,2);Ue(qe,17,()=>Ku(He(),s(u)),Ae=>Ae.$id,(Ae,le)=>{const je=W(()=>B.getFormattedTotalNeeded(s(le).$id)),Ve=W(()=>jn(s(le).productType)),ve=W(()=>Yu(s(le).purchases||[]));var xt=Fv(),er=c(xt);er.__click=[qv,x,le];var Rr=c(er),tr=c(Rr),Or=c(tr),tn=c(Or),oa=d(Or,2);{var kn=re=>{var ge=jv(),We=c(ge);j(()=>C(We,`Ancien: ${s(le).previousNames[0]??""}`)),v(re,ge)};I(oa,re=>{s(le).previousNames&&s(le).previousNames.length>0&&re(kn)})}var la=d(tr,2),jt=c(la);{var _r=re=>{var ge=Bv(),We=c(ge);Ba(We,{class:"text-success h-4 w-4"}),v(re,ge)};I(jt,re=>{s(le).pFrais&&re(_r)})}var ca=d(jt,2);{var ua=re=>{var ge=Lv(),We=c(ge);La(We,{class:"text-info h-4 w-4"}),v(re,ge)};I(ca,re=>{s(le).pSurgel&&re(ua)})}var da=d(Rr,2);cn(da);var kt=d(er);kt.__click=[zv,x,le];var rr=c(kt);{var Nn=re=>{var ge=Vv(),We=c(ge),It=c(We);j(()=>{Vn(ge,"data-tip",s(le).storeInfo?.storeComment),C(It,s(le).storeInfo?.storeName||"-")}),v(re,ge)},Tn=re=>{var ge=Wv(),We=c(ge);j(()=>C(We,s(le).storeInfo?.storeName||"-")),v(re,ge)};I(rr,re=>{s(le).storeInfo?.storeComment?re(Nn):re(Tn,!1)})}var fa=d(rr,2);cn(fa);var rn=d(kt);rn.__click=[Uv,x,le];var An=c(rn);{var va=re=>{var ge=Hv();Ue(ge,20,()=>s(le).who,We=>We,(We,It)=>{var mr=Gv(),nn=c(mr);j(()=>C(nn,It)),v(We,mr)}),v(re,ge)};I(An,re=>{s(le).who&&s(le).who.length>0&&re(va)})}var ha=d(An,2);cn(ha);var pa=d(rn),go=c(pa),rs=c(go);dn(rs,()=>s(Ve).icon,(re,ge)=>{ge(re,{class:"h-3 w-3"})});var bo=d(rs),_a=d(pa);_a.__click=[Qv,x,le];var ns=c(_a),yo=c(ns),as=d(ns,2);{var wo=re=>{var ge=Kv(),We=c(ge),It=c(We),mr=d(It);es(mr,{class:"h-3 w-3"});var nn=d(We,2),In=c(nn),an=d(In);Hu(an,{class:"h-3 w-3"}),j(()=>{C(It,`${s(le)?.nbRecipes??""} `),C(In,`${s(le)?.totalAssiettes??""} `)}),v(re,ge)};I(as,re=>{(s(le).nbRecipes||s(le).totalAssiettes)&&re(wo)})}var So=d(as,2);cn(So);var ma=d(_a);ma.__click=[Yv,x,le];var ss=c(ma),is=c(ss);Ue(is,17,()=>s(ve),re=>re.status,(re,ge)=>{const We=W(()=>r[s(ge).icon]);var It=Zv(),mr=c(It);dn(mr,()=>s(We),(an,Ao)=>{Ao(an,{class:"h-4 w-4"})});var nn=d(mr,2),In=c(nn);j(an=>{Te(It,1,`badge badge-soft flex items-center gap-2 ${s(ge).badgeClass??""}`),C(In,an)},[()=>sa(s(ge).quantity,s(ge).unit)]),v(re,It)});var xo=d(is,2);{var Po=re=>{var ge=Jv();v(re,ge)};I(xo,re=>{s(ve).length===0&&re(Po)})}var Eo=d(ss,2);cn(Eo);var $o=d(ma),ko=c($o);{var No=re=>{var ge=Xv(),We=c(ge);j(()=>C(We,s(le).displayMissingQuantity)),v(re,ge)},To=re=>{Nu(re,{size:28,strokeWidth:3,class:"text-success m-auto"})};I(ko,re=>{s(le).displayMissingQuantity!=="✅ Complet"?re(No):re(To,!1)})}j(()=>{C(tn,s(le).productName),Te(kt,1,`${s(u).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),Te(pa,1,Ci(s(u).groupBy==="productType"?"hidden":"")),C(bo,` ${s(Ve).displayName??""}`),C(yo,s(je))}),v(Ae,xt)}),v(H,lt)});var fr=d(K,2);{var vr=H=>{var me=th();v(H,me)};I(fr,H=>{Object.values(s(n)).flat().length===0&&H(vr)})}var Xt=d(E,2);{var Ft=H=>{gf(H,{get productId(){return s(f)},get initialTab(){return s(h)},onClose:b})};I(Xt,H=>{s(f)&&H(Ft)})}var hr=d(Xt,2);{var pr=H=>{Of(H,{get productIds(){return s(p)},get products(){return s(g)},get editType(){return s(m)},onClose:M,onSuccess:P})};I(hr,H=>{s(_)&&H(pr)})}var Cr=d(hr,2);ev(Cr,{}),j(()=>{C(ee,` ${s(a).total??""}`),oc(ke,s(u).searchQuery),Wr(Ke,s(u).groupBy==="none"),Wr(de,s(u).groupBy==="store"),Wr(ye,s(u).groupBy==="productType"),Te(At,1,`hover:bg-base-100 cursor-pointer text-center ${s(u).groupBy==="store"?"hidden":""}`),Te(ft,1,`hover:bg-base-100 cursor-pointer text-center ${s(u).groupBy==="productType"?"hidden":""}`)}),v(e,S),G()}yt(["click","input","change"]);fl();var ah=y('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function sh(e){var t=ah();v(e,t)}var ih=y('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function oh(e,t){var r=ih(),n=d(c(r),2),a=d(c(n),2),o=c(a);j(()=>C(o,t.message)),v(e,r)}var lh=y('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function ch(e,t){var r=lh(),n=c(r),a=c(n);mo(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(a,2),i=d(c(o),2),l=c(i);j(()=>C(l,t.message||"Erreur inconnue")),v(e,r)}var uh=y('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),dh=y('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),fh=y('<div class="text-base-content/60"> </div>'),vh=y('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),hh=y('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),ph=y('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),_h=y('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function mh(e,t){U(t,!0);let r,n=J(null),a=J(!0),o=J(!1);Bi(async()=>{r=Jc();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await B.initialize(r)}catch(D){const X=D instanceof Error?D.message:"Erreur lors de l'initialisation";k(n,X,!0),console.error("[App] Erreur initialisation:",D)}finally{k(a,!1)}}),pc(()=>{B.destroy()});async function i(){if(!(!r||s(o))){k(o,!0);try{await B.forceReload(r)}catch(D){console.error("[App] Erreur lors du rechargement forcé:",D)}finally{k(o,!1)}}}const l=W(()=>s(n)||B.error),u=W(()=>s(a)||B.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var h=_h(),_=c(h),m=c(_),p=c(m),g=d(c(p),2),x=c(g);{var b=D=>{var X=uh();v(D,X)};I(x,D=>{B.realtimeConnected&&D(b)})}var $=d(x,2);{var M=D=>{var X=dh();v(D,X)};I($,D=>{B.syncing&&D(M)})}var P=d($,2);{var S=D=>{var X=fh(),_e=c(X);j(ke=>C(_e,`Maj: ${ke??""}`),[()=>new Date(B.lastSync).toLocaleTimeString()]),v(D,X)};I(P,D=>{B.lastSync&&D(S)})}var E=d(P,2);{var T=D=>{var X=vh();let _e;X.__click=i;var ke=c(X);Lu(ke,{class:"h-4 w-4"}),j(De=>{_e=Te(X,1,"btn btn-outline btn-sm",null,_e,De),X.disabled=s(o)||B.loading},[()=>({loading:s(o)||B.loading})]),v(D,X)};I(E,D=>{s(n)||D(T)})}var R=d(E,2);{var A=D=>{var X=hh(),_e=c(X),ke=c(_e);Ou(ke,{class:"mr-2 h-4 w-4"}),j(()=>Vn(_e,"href",f)),v(D,X)};I(R,D=>{s(n)&&D(A)})}var ee=d(_,2),N=c(ee);{var q=D=>{ch(D,{get message(){return s(l)}})},V=D=>{var X=Y(),_e=L(X);{var ke=De=>{oh(De,{get message(){return s(l)}})};I(_e,De=>{s(l)&&De(ke)},!0)}v(D,X)};I(N,D=>{s(n)?D(q):D(V,!1)})}var we=d(N,2);{var Ie=D=>{sh(D)};I(we,D=>{s(u)&&D(Ie)})}var Se=d(we,2);{var be=D=>{nh(D,{})},ae=D=>{var X=Y(),_e=L(X);{var ke=De=>{var Le=ph();v(De,Le)};I(_e,De=>{!B.loading&&!s(n)&&De(ke)},!0)}v(D,X)};I(Se,D=>{B.enrichedProducts.length>0?D(be):D(ae,!1)})}v(e,h),G()}yt(["click"]);Yl(mh,{target:document.getElementById("app_products")});
