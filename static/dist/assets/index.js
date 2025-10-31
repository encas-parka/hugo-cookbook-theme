(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const Ps=!1;var Tn=Array.isArray,vo=Array.prototype.indexOf,wa=Array.from,aa=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,ho=Object.getOwnPropertyDescriptors,po=Object.prototype,_o=Array.prototype,xs=Object.getPrototypeOf,Wa=Object.isExtensible;function Gr(e){return typeof e=="function"}const J=()=>{};function mo(e){for(var t=0;t<e.length;t++)e[t]()}function Es(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function ks(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const nt=2,Sa=4,$a=8,hr=16,Vt=32,pr=64,Pa=128,_t=256,xn=512,Ye=1024,ct=2048,nr=4096,$t=8192,_r=16384,xa=32768,mr=65536,Ua=1<<17,go=1<<18,qr=1<<19,bo=1<<20,sa=1<<21,An=1<<22,ur=1<<23,dr=Symbol("$state"),Ns=Symbol("legacy props"),yo=Symbol(""),tn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Ts(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function wo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function So(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function $o(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Po(e){throw new Error("https://svelte.dev/e/effect_orphan")}function xo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Eo(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ko(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function No(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function To(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ao(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Dn=1,In=2,As=4,Do=8,Io=16,Mo=1,Co=2,Ro=4,Oo=8,qo=16,Bo=1,Lo=2,Be=Symbol(),jo="http://www.w3.org/1999/xhtml",zo="http://www.w3.org/2000/svg",Vo="@attach";function Wo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Uo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Go=!1;function Ds(e){return e===this.v}function Is(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ho(e,t){return e!==t}function Ms(e){return!Is(e,this.v)}let Br=!1,Qo=!1;function Ko(){Br=!0}let De=null;function Dr(e){De=e}function z(e,t=!1,r){De={p:De,c:null,e:null,s:e,x:null,l:Br&&!t?{s:null,u:null,$:[]}:null}}function V(e){var t=De,r=t.e;if(r!==null){t.e=null;for(var n of r)Zs(n)}return De=t.p,{}}function Lr(){return!Br||De!==null&&De.l===null}let cr=[];function Cs(){var e=cr;cr=[],mo(e)}function fr(e){if(cr.length===0&&!rn){var t=cr;queueMicrotask(()=>{t===cr&&Cs()})}cr.push(e)}function Yo(){for(;cr.length>0;)Cs()}const Zo=new WeakMap;function Rs(e){var t=re;if(t===null)return ie.f|=ur,e;if((t.f&xa)===0){if((t.f&Pa)===0)throw!t.parent&&e instanceof Error&&Os(e),e;t.b.error(e)}else Ir(e,t)}function Ir(e,t){for(;t!==null;){if((t.f&Pa)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&Os(e),e}function Os(e){const t=Zo.get(e);t&&(aa(e,"message",{value:t.message}),aa(e,"stack",{value:t.stack}))}const yn=new Set;let ye=null,Sn=null,ia=new Set,At=[],Mn=null,oa=!1,rn=!1;class ht{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#o=[];#a=[];#s=[];#n=[];#i=[];#d=[];skipped_effects=new Set;process(t){At=[],Sn=null;var r=ht.apply(this);for(const i of t)this.#f(i);if(this.#c===0){this.#v();var n=this.#a,a=this.#s;this.#a=[],this.#s=[],this.#n=[],Sn=this,ye=null,Ga(n),Ga(a),Sn=null,this.#u?.resolve()}else this.#l(this.#a),this.#l(this.#s),this.#l(this.#n);r();for(const i of this.#o)on(i);this.#o=[]}#f(t){t.f^=Ye;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Vt|pr))!==0,i=a&&(n&Ye)!==0,o=i||(n&$t)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){a?r.f^=Ye:(n&Sa)!==0?this.#s.push(r):(n&Ye)===0&&((n&An)!==0&&r.b?.is_pending()?this.#o.push(r):Bn(r)&&((r.f&hr)!==0&&this.#n.push(r),on(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#l(t){for(const r of t)((r.f&ct)!==0?this.#i:this.#d).push(r),Xe(r,Ye);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){ye=this}deactivate(){ye=null}flush(){if(At.length>0){if(this.activate(),qs(),ye!==null&&ye!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of ia)if(ia.delete(t),t(),ye!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),yn.size>1){this.#e.clear();let t=!0;for(const r of yn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;Bs(n)}if(At.length>0){ye=r;const n=ht.apply(r);for(const a of At)r.#f(a);At=[],n()}}ye=null}yn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#i)Xe(t,ct),vr(t);for(const t of this.#d)Xe(t,nr),vr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=Es()).promise}static ensure(){if(ye===null){const t=ye=new ht;yn.add(ye),rn||ht.enqueue(()=>{ye===t&&t.flush()})}return ye}static enqueue(t){fr(t)}static apply(t){return J}}function Jo(e){var t=rn;rn=!0;try{for(var r;;){if(Yo(),At.length===0&&(ye?.flush(),At.length===0))return Mn=null,r;qs()}}finally{rn=t}}function qs(){var e=Ar;oa=!0;try{var t=0;for(Ya(!0);At.length>0;){var r=ht.ensure();if(t++>1e3){var n,a;Xo()}r.process(At),Ft.clear()}}finally{oa=!1,Ya(e),Mn=null}}function Xo(){try{xo()}catch(e){Ir(e,Mn)}}let lr=null;function Ga(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(_r|$t))===0&&Bn(n)&&(lr=[],on(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Fs(n):n.fn=null),lr?.length>0)){Ft.clear();for(const a of lr)on(a);lr=[]}}lr=null}}function Bs(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&nt)!==0?Bs(t):(r&(An|hr))!==0&&(Xe(t,ct),vr(t))}}function vr(e){for(var t=Mn=e;t.parent!==null;){t=t.parent;var r=t.f;if(oa&&t===re&&(r&hr)!==0)return;if((r&(pr|Vt))!==0){if((r&Ye)===0)return;t.f^=Ye}}At.push(t)}function Ls(e){let t=0,r=tr(0),n;return()=>{hl()&&(s(r),Aa(()=>(t===0&&(n=jr(()=>e(()=>Dt(r)))),t+=1,()=>{fr(()=>{t-=1,t===0&&(n?.(),n=void 0,Dt(r))})})))}}var Fo=mr|qr|Pa;function el(e,t,r){new tl(e,t,r)}class tl{parent;#e=!1;#r;#c=null;#u;#o;#a;#s=null;#n=null;#i=null;#d=null;#f=0;#l=0;#v=!1;#h=null;#p=()=>{this.#h&&Mr(this.#h,this.#f)};#$=Ls(()=>(this.#h=tr(this.#f),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#o=n,this.parent=re.b,this.#e=!!this.#u.pending,this.#a=Gt(()=>{re.b=this;{try{this.#s=Ge(()=>n(this.#r))}catch(a){this.error(a)}this.#l>0?this.#m():this.#e=!1}},Fo)}#t(){try{this.#s=Ge(()=>this.#o(this.#r))}catch(t){this.error(t)}this.#e=!1}#P(){const t=this.#u.pending;t&&(this.#n=Ge(()=>t(this.#r)),ht.enqueue(()=>{this.#s=this.#_(()=>(ht.ensure(),Ge(()=>this.#o(this.#r)))),this.#l>0?this.#m():(Lt(this.#n,()=>{this.#n=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#_(t){var r=re,n=ie,a=De;It(this.#a),rt(this.#a),Dr(this.#a.ctx);try{return t()}catch(i){return Rs(i),null}finally{It(r),rt(n),Dr(a)}}#m(){const t=this.#u.pending;this.#s!==null&&(this.#d=document.createDocumentFragment(),rl(this.#s,this.#d)),this.#n===null&&(this.#n=Ge(()=>t(this.#r)))}#y(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#y(t);return}this.#l+=t,this.#l===0&&(this.#e=!1,this.#n&&Lt(this.#n,()=>{this.#n=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),fr(()=>{ht.ensure().flush()}))}update_pending_count(t){this.#y(t),this.#f+=t,ia.add(this.#p)}get_effect_pending(){return this.#$(),s(this.#h)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#s&&(He(this.#s),this.#s=null),this.#n&&(He(this.#n),this.#n=null),this.#i&&(He(this.#i),this.#i=null);var a=!1,i=!1;const o=()=>{if(a){Uo();return}a=!0,i&&Ao(),ht.ensure(),this.#f=0,this.#i!==null&&Lt(this.#i,()=>{this.#i=null}),this.#e=this.has_pending_snippet(),this.#s=this.#_(()=>(this.#v=!1,Ge(()=>this.#o(this.#r)))),this.#l>0?this.#m():this.#e=!1};var l=ie;try{rt(null),i=!0,r?.(t,o),i=!1}catch(c){Ir(c,this.#a&&this.#a.parent)}finally{rt(l)}n&&fr(()=>{this.#i=this.#_(()=>{this.#v=!0;try{return Ge(()=>{n(this.#r,()=>t,()=>o)})}catch(c){return Ir(c,this.#a.parent),null}finally{this.#v=!1}})})}}function rl(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:hn(r);t.append(r),r=a}}function js(e,t,r){const n=Lr()?Cn:Ea;if(t.length===0){r(e.map(n));return}var a=ye,i=re,o=nl();Promise.all(t.map(l=>al(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(c){(i.f&_r)===0&&Ir(c,i)}a?.deactivate(),zs()}).catch(l=>{Ir(l,i)})}function nl(){var e=re,t=ie,r=De,n=ye;return function(){It(e),rt(t),Dr(r),n?.activate()}}function zs(){It(null),rt(null),Dr(null)}function Cn(e){var t=nt|ct,r=ie!==null&&(ie.f&nt)!==0?ie:null;return re===null||r!==null&&(r.f&_t)!==0?t|=_t:re.f|=qr,{ctx:De,deps:null,effects:null,equals:Ds,f:t,fn:e,reactions:null,rv:0,v:Be,wv:0,parent:r??re,ac:null}}function al(e,t){let r=re;r===null&&wo();var n=r.b,a=void 0,i=tr(Be),o=!ie,l=new Map;return _l(()=>{var c=Es();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(g){c.reject(g)}var f=ye,v=n.is_pending();o&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(tn),l.set(f,c)));const _=(g,p=void 0)=>{v||f.activate(),p?p!==tn&&(i.f|=ur,Mr(i,p)):((i.f&ur)!==0&&(i.f^=ur),Mr(i,g)),o&&(n.update_pending_count(-1),v||f.decrement()),zs()};c.promise.then(_,g=>_(null,g||"unknown"))}),Ks(()=>{for(const c of l.values())c.reject(tn)}),new Promise(c=>{function f(v){function _(){v===a?c(i):f(a)}v.then(_,_)}f(a)})}function Y(e){const t=Cn(e);return ri(t),t}function Ea(e){const t=Cn(e);return t.equals=Ms,t}function Vs(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)He(t[r])}}function sl(e){for(var t=e.parent;t!==null;){if((t.f&nt)===0)return t;t=t.parent}return null}function ka(e){var t,r=re;It(sl(e));try{Vs(e),t=ii(e)}finally{It(r)}return t}function Ws(e){var t=ka(e);if(e.equals(t)||(e.v=t,e.wv=ai()),!gr){var r=(Jt||(e.f&_t)!==0)&&e.deps!==null?nr:Ye;Xe(e,r)}}const Ft=new Map;function tr(e,t){var r={f:0,v:e,reactions:null,equals:Ds,rv:0,wv:0};return r}function Z(e,t){const r=tr(e);return ri(r),r}function il(e,t=!1,r=!0){const n=tr(e);return t||(n.equals=Ms),Br&&r&&De!==null&&De.l!==null&&(De.l.s??=[]).push(n),n}function N(e,t,r=!1){ie!==null&&(!St||(ie.f&Ua)!==0)&&Lr()&&(ie.f&(nt|hr|An|Ua))!==0&&!jt?.includes(e)&&To();let n=r?tt(t):t;return Mr(e,n)}function Mr(e,t){if(!e.equals(t)){var r=e.v;gr?Ft.set(e,t):Ft.set(e,r),e.v=t;var n=ht.ensure();n.capture(e,r),(e.f&nt)!==0&&((e.f&ct)!==0&&ka(e),Xe(e,(e.f&_t)===0?Ye:nr)),e.wv=ai(),Us(e,ct),Lr()&&re!==null&&(re.f&Ye)!==0&&(re.f&(Vt|pr))===0&&(vt===null?bl([e]):vt.push(e))}return t}function Dt(e){N(e,e.v+1)}function Us(e,t){var r=e.reactions;if(r!==null)for(var n=Lr(),a=r.length,i=0;i<a;i++){var o=r[i],l=o.f;if(!(!n&&o===re)){var c=(l&ct)===0;c&&Xe(o,t),(l&nt)!==0?Us(o,nr):c&&((l&hr)!==0&&lr!==null&&lr.push(o),vr(o))}}}function tt(e){if(typeof e!="object"||e===null||dr in e)return e;const t=xs(e);if(t!==po&&t!==_o)return e;var r=new Map,n=Tn(e),a=Z(0),i=zt,o=l=>{if(zt===i)return l();var c=ie,f=zt;rt(null),Ja(i);var v=l();return rt(c),Ja(f),v};return n&&r.set("length",Z(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&ko();var v=r.get(c);return v===void 0?v=o(()=>{var _=Z(f.value);return r.set(c,_),_}):N(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=o(()=>Z(Be));r.set(c,v),Dt(a)}}else N(f,Be),Dt(a);return!0},get(l,c,f){if(c===dr)return e;var v=r.get(c),_=c in l;if(v===void 0&&(!_||Xt(l,c)?.writable)&&(v=o(()=>{var p=tt(_?l[c]:Be),m=Z(p);return m}),r.set(c,v)),v!==void 0){var g=s(v);return g===Be?void 0:g}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=s(v))}else if(f===void 0){var _=r.get(c),g=_?.v;if(_!==void 0&&g!==Be)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return f},has(l,c){if(c===dr)return!0;var f=r.get(c),v=f!==void 0&&f.v!==Be||Reflect.has(l,c);if(f!==void 0||re!==null&&(!v||Xt(l,c)?.writable)){f===void 0&&(f=o(()=>{var g=v?tt(l[c]):Be,p=Z(g);return p}),r.set(c,f));var _=s(f);if(_===Be)return!1}return v},set(l,c,f,v){var _=r.get(c),g=c in l;if(n&&c==="length")for(var p=f;p<_.v;p+=1){var m=r.get(p+"");m!==void 0?N(m,Be):p in l&&(m=o(()=>Z(Be)),r.set(p+"",m))}if(_===void 0)(!g||Xt(l,c)?.writable)&&(_=o(()=>Z(void 0)),N(_,tt(f)),r.set(c,_));else{g=_.v!==Be;var $=o(()=>tt(f));N(_,$)}var w=Reflect.getOwnPropertyDescriptor(l,c);if(w?.set&&w.set.call(v,f),!g){if(n&&typeof c=="string"){var E=r.get("length"),D=Number(c);Number.isInteger(D)&&D>=E.v&&N(E,D+1)}Dt(a)}return!0},ownKeys(l){s(a);var c=Reflect.ownKeys(l).filter(_=>{var g=r.get(_);return g===void 0||g.v!==Be});for(var[f,v]of r)v.v!==Be&&!(f in l)&&c.push(f);return c},setPrototypeOf(){No()}})}function Ha(e){try{if(e!==null&&typeof e=="object"&&dr in e)return e[dr]}catch{}return e}function ol(e,t){return Object.is(Ha(e),Ha(t))}var Qa,Gs,Hs,Qs;function ll(){if(Qa===void 0){Qa=window,Gs=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Hs=Xt(t,"firstChild").get,Qs=Xt(t,"nextSibling").get,Wa(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Wa(r)&&(r.__t=void 0)}}function Wt(e=""){return document.createTextNode(e)}function Cr(e){return Hs.call(e)}function hn(e){return Qs.call(e)}function u(e,t){return Cr(e)}function q(e,t=!1){{var r=Cr(e);return r instanceof Comment&&r.data===""?hn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=hn(n);return n}function cl(e){e.textContent=""}function Rn(){return!1}function ul(e,t){if(t){const r=document.body;e.autofocus=!0,fr(()=>{document.activeElement===r&&e.focus()})}}let Ka=!1;function dl(){Ka||(Ka=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function On(e){var t=ie,r=re;rt(null),It(null);try{return e()}finally{rt(t),It(r)}}function Na(e,t,r,n=r){e.addEventListener(t,()=>On(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),dl()}function fl(e){re===null&&ie===null&&Po(),ie!==null&&(ie.f&_t)!==0&&re===null&&$o(),gr&&So()}function vl(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Ut(e,t,r,n=!0){var a=re;a!==null&&(a.f&$t)!==0&&(e|=$t);var i={ctx:De,deps:null,nodes_start:null,nodes_end:null,f:e|ct,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{on(i),i.f|=xa}catch(c){throw He(i),c}else t!==null&&vr(i);if(n){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&qr)===0&&(o=o.first),o!==null&&(o.parent=a,a!==null&&vl(o,a),ie!==null&&(ie.f&nt)!==0&&(e&pr)===0)){var l=ie;(l.effects??=[]).push(o)}}return i}function hl(){return ie!==null&&!St}function Ks(e){const t=Ut($a,null,!1);return Xe(t,Ye),t.teardown=e,t}function Ys(e){fl();var t=re.f,r=!ie&&(t&Vt)!==0&&(t&xa)===0;if(r){var n=De;(n.e??=[]).push(e)}else return Zs(e)}function Zs(e){return Ut(Sa|bo,e,!1)}function pl(e){ht.ensure();const t=Ut(pr|qr,e,!0);return(r={})=>new Promise(n=>{r.outro?Lt(t,()=>{He(t),n(void 0)}):(He(t),n(void 0))})}function Ta(e){return Ut(Sa,e,!1)}function _l(e){return Ut(An|qr,e,!0)}function Aa(e,t=0){return Ut($a|t,e,!0)}function L(e,t=[],r=[]){js(t,r,n=>{Ut($a,()=>e(...n.map(s)),!0)})}function Gt(e,t=0){var r=Ut(hr|t,e,!0);return r}function Ge(e,t=!0){return Ut(Vt|qr,e,!0,t)}function Js(e){var t=e.teardown;if(t!==null){const r=gr,n=ie;Za(!0),rt(null);try{t.call(null)}finally{Za(r),rt(n)}}}function Xs(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&On(()=>{a.abort(tn)});var n=r.next;(r.f&pr)!==0?r.parent=null:He(r,t),r=n}}function ml(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Vt)===0&&He(t),t=r}}function He(e,t=!0){var r=!1;(t||(e.f&go)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(gl(e.nodes_start,e.nodes_end),r=!0),Xs(e,t&&!r),En(e,0),Xe(e,_r);var n=e.transitions;if(n!==null)for(const i of n)i.stop();Js(e);var a=e.parent;a!==null&&a.first!==null&&Fs(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function gl(e,t){for(;e!==null;){var r=e===t?null:hn(e);e.remove(),e=r}}function Fs(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Lt(e,t){var r=[];Da(e,r,!0),ei(r,()=>{He(e),t&&t()})}function ei(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function Da(e,t,r){if((e.f&$t)===0){if(e.f^=$t,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var a=n.next,i=(n.f&mr)!==0||(n.f&Vt)!==0;Da(n,t,i?r:!1),n=a}}}function qn(e){ti(e,!0)}function ti(e,t){if((e.f&$t)!==0){e.f^=$t,(e.f&Ye)===0&&(Xe(e,ct),vr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&mr)!==0||(r.f&Vt)!==0;ti(r,a?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let Ar=!1;function Ya(e){Ar=e}let gr=!1;function Za(e){gr=e}let ie=null,St=!1;function rt(e){ie=e}let re=null;function It(e){re=e}let jt=null;function ri(e){ie!==null&&(jt===null?jt=[e]:jt.push(e))}let Je=null,ot=0,vt=null;function bl(e){vt=e}let ni=1,sn=0,zt=sn;function Ja(e){zt=e}let Jt=!1;function ai(){return++ni}function Bn(e){var t=e.f;if((t&ct)!==0)return!0;if((t&nr)!==0){var r=e.deps,n=(t&_t)!==0;if(r!==null){var a,i,o=(t&xn)!==0,l=n&&re!==null&&!Jt,c=r.length;if((o||l)&&(re===null||(re.f&_r)===0)){var f=e,v=f.parent;for(a=0;a<c;a++)i=r[a],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=xn),l&&v!==null&&(v.f&_t)===0&&(f.f^=_t)}for(a=0;a<c;a++)if(i=r[a],Bn(i)&&Ws(i),i.wv>e.wv)return!0}(!n||re!==null&&!Jt)&&Xe(e,Ye)}return!1}function si(e,t,r=!0){var n=e.reactions;if(n!==null&&!jt?.includes(e))for(var a=0;a<n.length;a++){var i=n[a];(i.f&nt)!==0?si(i,t,!1):t===i&&(r?Xe(i,ct):(i.f&Ye)!==0&&Xe(i,nr),vr(i))}}function ii(e){var t=Je,r=ot,n=vt,a=ie,i=Jt,o=jt,l=De,c=St,f=zt,v=e.f;Je=null,ot=0,vt=null,Jt=(v&_t)!==0&&(St||!Ar||ie===null),ie=(v&(Vt|pr))===0?e:null,jt=null,Dr(e.ctx),St=!1,zt=++sn,e.ac!==null&&(On(()=>{e.ac.abort(tn)}),e.ac=null);try{e.f|=sa;var _=e.fn,g=_(),p=e.deps;if(Je!==null){var m;if(En(e,ot),p!==null&&ot>0)for(p.length=ot+Je.length,m=0;m<Je.length;m++)p[ot+m]=Je[m];else e.deps=p=Je;if(!Jt||(v&nt)!==0&&e.reactions!==null)for(m=ot;m<p.length;m++)(p[m].reactions??=[]).push(e)}else p!==null&&ot<p.length&&(En(e,ot),p.length=ot);if(Lr()&&vt!==null&&!St&&p!==null&&(e.f&(nt|nr|ct))===0)for(m=0;m<vt.length;m++)si(vt[m],e);return a!==null&&a!==e&&(sn++,vt!==null&&(n===null?n=vt:n.push(...vt))),(e.f&ur)!==0&&(e.f^=ur),g}catch($){return Rs($)}finally{e.f^=sa,Je=t,ot=r,vt=n,ie=a,Jt=i,jt=o,Dr(l),St=c,zt=f}}function yl(e,t){let r=t.reactions;if(r!==null){var n=vo.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&nt)!==0&&(Je===null||!Je.includes(t))&&(Xe(t,nr),(t.f&(_t|xn))===0&&(t.f^=xn),Vs(t),En(t,0))}function En(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)yl(e,r[n])}function on(e){var t=e.f;if((t&_r)===0){Xe(e,Ye);var r=re,n=Ar;re=e,Ar=!0;try{(t&hr)!==0?ml(e):Xs(e),Js(e);var a=ii(e);e.teardown=typeof a=="function"?a:null,e.wv=ni;var i;Ps&&Qo&&(e.f&ct)!==0&&e.deps}finally{Ar=n,re=r}}}async function wl(){await Promise.resolve(),Jo()}function s(e){var t=e.f,r=(t&nt)!==0;if(ie!==null&&!St){var n=re!==null&&(re.f&_r)!==0;if(!n&&!jt?.includes(e)){var a=ie.deps;if((ie.f&sa)!==0)e.rv<sn&&(e.rv=sn,Je===null&&a!==null&&a[ot]===e?ot++:Je===null?Je=[e]:(!Jt||!Je.includes(e))&&Je.push(e));else{(ie.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[ie]:i.includes(ie)||i.push(ie)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&_t)===0&&(o.f^=_t)}if(gr){if(Ft.has(e))return Ft.get(e);if(r){o=e;var c=o.v;return((o.f&Ye)===0&&o.reactions!==null||oi(o))&&(c=ka(o)),Ft.set(o,c),c}}else r&&(o=e,Bn(o)&&Ws(o));if((e.f&ur)!==0)throw e.v;return e.v}function oi(e){if(e.v===Be)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ft.has(t)||(t.f&nt)!==0&&oi(t))return!0;return!1}function jr(e){var t=St;try{return St=!0,e()}finally{St=t}}const Sl=-7169;function Xe(e,t){e.f=e.f&Sl|t}function $l(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Pl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function xl(e){return Pl.includes(e)}const El={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function kl(e){return e=e.toLowerCase(),El[e]??e}const Nl=["touchstart","touchmove"];function Tl(e){return Nl.includes(e)}const li=new Set,la=new Set;function ci(e,t,r,n={}){function a(i){if(n.capture||Zr.call(t,i),!i.cancelBubble)return On(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?fr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Xa(e,t,r,n={}){var a=ci(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function Pt(e){for(var t=0;t<e.length;t++)li.add(e[t]);for(var r of la)r(e)}let Fa=null;function Zr(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],i=a[0]||e.target;Fa=e;var o=0,l=Fa===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(o=c)}if(i=a[o]||e.target,i!==t){aa(e,"currentTarget",{configurable:!0,get(){return i||r}});var v=ie,_=re;rt(null),It(null);try{for(var g,p=[];i!==null;){var m=i.assignedSlot||i.parentNode||i.host||null;try{var $=i["__"+n];if($!=null&&(!i.disabled||e.target===i))if(Tn($)){var[w,...E]=$;w.apply(i,[e,...E])}else $.call(i,e)}catch(D){g?p.push(D):g=D}if(e.cancelBubble||m===t||m===null)break;i=m}if(g){for(let D of p)queueMicrotask(()=>{throw D});throw g}}finally{e.__root=t,delete e.currentTarget,rt(v),It(_)}}}function ui(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Rr(e,t){var r=re;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function x(e,t){var r=(t&Bo)!==0,n=(t&Lo)!==0,a,i=!e.startsWith("<!>");return()=>{a===void 0&&(a=ui(i?e:"<!>"+e),r||(a=Cr(a)));var o=n||Gs?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Cr(o),c=o.lastChild;Rr(l,c)}else Rr(o,o);return o}}function Al(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=ui(a),l=Cr(o);i=Cr(l)}var c=i.cloneNode(!0);return Rr(c,c),c}}function Dl(e,t){return Al(e,t,"svg")}function lt(e=""){{var t=Wt(e+"");return Rr(t,t),t}}function j(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Wt();return e.append(t,r),Rr(t,r),e}function h(e,t){e!==null&&e.before(t)}function O(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function Il(e,t){return Ml(e,t)}const Nr=new Map;function Ml(e,{target:t,anchor:r,props:n={},events:a,context:i,intro:o=!0}){ll();var l=new Set,c=_=>{for(var g=0;g<_.length;g++){var p=_[g];if(!l.has(p)){l.add(p);var m=Tl(p);t.addEventListener(p,Zr,{passive:m});var $=Nr.get(p);$===void 0?(document.addEventListener(p,Zr,{passive:m}),Nr.set(p,1)):Nr.set(p,$+1)}}};c(wa(li)),la.add(c);var f=void 0,v=pl(()=>{var _=r??t.appendChild(Wt());return el(_,{pending:()=>{}},g=>{if(i){z({});var p=De;p.c=i}a&&(n.$$events=a),f=e(g,n)||{},i&&V()}),()=>{for(var g of l){t.removeEventListener(g,Zr);var p=Nr.get(g);--p===0?(document.removeEventListener(g,Zr),Nr.delete(g)):Nr.set(g,p)}la.delete(c),_!==r&&_.parentNode?.removeChild(_)}});return Cl.set(f,v),f}let Cl=new WeakMap;function I(e,t,r=!1){var n=e,a=null,i=null,o=Be,l=r?mr:0,c=!1;const f=(p,m=!0)=>{c=!0,g(m,p)};var v=null;function _(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var p=o?a:i,m=o?i:a;p&&qn(p),m&&Lt(m,()=>{o?i=null:a=null})}const g=(p,m)=>{if(o!==(o=p)){var $=Rn(),w=n;if($&&(v=document.createDocumentFragment(),v.append(w=Wt())),o?a??=m&&Ge(()=>m(w)):i??=m&&Ge(()=>m(w)),$){var E=ye,D=o?a:i,T=o?i:a;D&&E.skipped_effects.delete(D),T&&E.skipped_effects.add(T),E.add_callback(_)}else _()}};Gt(()=>{c=!1,t(f),c||g(null,null)},l)}function Rl(e,t,r){var n=e,a=Be,i,o,l=null,c=Lr()?Ho:Is;function f(){i&&Lt(i),l!==null&&(l.lastChild.remove(),n.before(l),l=null),i=o}Gt(()=>{if(c(a,a=t())){var v=n,_=Rn();_&&(l=document.createDocumentFragment(),l.append(v=Wt())),o=Ge(()=>r(v)),_?ye.add_callback(f):f()}})}function Ln(e,t){return t}function Ol(e,t,r){for(var n=e.items,a=[],i=t.length,o=0;o<i;o++)Da(t[o].e,a,!0);var l=i>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;cl(c),c.append(r),n.clear(),Tt(e,t[0].prev,t[i-1].next)}ei(a,()=>{for(var f=0;f<i;f++){var v=t[f];l||(n.delete(v.k),Tt(e,v.prev,v.next)),He(v.e,!l)}})}function We(e,t,r,n,a,i=null){var o=e,l={flags:t,items:new Map,first:null},c=(t&As)!==0;if(c){var f=e;o=f.appendChild(Wt())}var v=null,_=!1,g=new Map,p=Ea(()=>{var E=r();return Tn(E)?E:E==null?[]:wa(E)}),m,$;function w(){ql($,m,l,g,o,a,t,n,r),i!==null&&(m.length===0?v?qn(v):v=Ge(()=>i(o)):v!==null&&Lt(v,()=>{v=null}))}Gt(()=>{$??=re,m=s(p);var E=m.length;if(!(_&&E===0)){_=E===0;var D,T,P,k;if(Rn()){var S=new Set,M=ye;for(T=0;T<E;T+=1){P=m[T],k=n(P,T);var b=l.items.get(k)??g.get(k);b?(t&(Dn|In))!==0&&di(b,P,T,t):(D=fi(null,l,null,null,P,k,T,a,t,r,!0),g.set(k,D)),S.add(k)}for(const[C,W]of l.items)S.has(C)||M.skipped_effects.add(W.e);M.add_callback(w)}else w();s(p)}})}function ql(e,t,r,n,a,i,o,l,c){var f=(o&Do)!==0,v=(o&(Dn|In))!==0,_=t.length,g=r.items,p=r.first,m=p,$,w=null,E,D=[],T=[],P,k,S,M;if(f)for(M=0;M<_;M+=1)P=t[M],k=l(P,M),S=g.get(k),S!==void 0&&(S.a?.measure(),(E??=new Set).add(S));for(M=0;M<_;M+=1){if(P=t[M],k=l(P,M),S=g.get(k),S===void 0){var b=n.get(k);if(b!==void 0){n.delete(k),g.set(k,b);var C=w?w.next:m;Tt(r,w,b),Tt(r,b,C),Zn(b,C,a),w=b}else{var W=m?m.e.nodes_start:a;w=fi(W,r,w,w===null?r.first:w.next,P,k,M,i,o,c)}g.set(k,w),D=[],T=[],m=w.next;continue}if(v&&di(S,P,M,o),(S.e.f&$t)!==0&&(qn(S.e),f&&(S.a?.unfix(),(E??=new Set).delete(S))),S!==m){if($!==void 0&&$.has(S)){if(D.length<T.length){var ge=T[0],fe;w=ge.prev;var Te=D[0],Ce=D[D.length-1];for(fe=0;fe<D.length;fe+=1)Zn(D[fe],ge,a);for(fe=0;fe<T.length;fe+=1)$.delete(T[fe]);Tt(r,Te.prev,Ce.next),Tt(r,w,Te),Tt(r,Ce,ge),m=ge,w=Ce,M-=1,D=[],T=[]}else $.delete(S),Zn(S,m,a),Tt(r,S.prev,S.next),Tt(r,S,w===null?r.first:w.next),Tt(r,w,S),w=S;continue}for(D=[],T=[];m!==null&&m.k!==k;)(m.e.f&$t)===0&&($??=new Set).add(m),T.push(m),m=m.next;if(m===null)continue;S=m}D.push(S),w=S,m=S.next}if(m!==null||$!==void 0){for(var Ie=$===void 0?[]:wa($);m!==null;)(m.e.f&$t)===0&&Ie.push(m),m=m.next;var Q=Ie.length;if(Q>0){var we=(o&As)!==0&&_===0?a:null;if(f){for(M=0;M<Q;M+=1)Ie[M].a?.measure();for(M=0;M<Q;M+=1)Ie[M].a?.fix()}Ol(r,Ie,we)}}f&&fr(()=>{if(E!==void 0)for(S of E)S.a?.apply()}),e.first=r.first&&r.first.e,e.last=w&&w.e;for(var A of n.values())He(A.e);n.clear()}function di(e,t,r,n){(n&Dn)!==0&&Mr(e.v,t),(n&In)!==0?Mr(e.i,r):e.i=r}function fi(e,t,r,n,a,i,o,l,c,f,v){var _=(c&Dn)!==0,g=(c&Io)===0,p=_?g?il(a,!1,!1):tr(a):a,m=(c&In)===0?o:tr(o),$={i:m,v:p,k:i,a:null,e:null,prev:r,next:n};try{if(e===null){var w=document.createDocumentFragment();w.append(e=Wt())}return $.e=Ge(()=>l(e,p,m,f),Go),$.e.prev=r&&r.e,$.e.next=n&&n.e,r===null?v||(t.first=$):(r.next=$,r.e.next=$.e),n!==null&&(n.prev=$,n.e.prev=$.e),$}finally{}}function Zn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==null&&i!==n;){var o=hn(i);a.before(i),i=o}}function Tt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ee(e,t,...r){var n=e,a=J,i;Gt(()=>{a!==(a=t())&&(i&&(He(i),i=null),i=Ge(()=>a(n,...r)))},mr)}function Jr(e,t,r){var n=e,a,i,o=null,l=null;function c(){i&&(Lt(i),i=null),o&&(o.lastChild.remove(),n.before(o),o=null),i=l,l=null}Gt(()=>{if(a!==(a=t())){var f=Rn();if(a){var v=n;f&&(o=document.createDocumentFragment(),o.append(v=Wt()),i&&ye.skipped_effects.add(i)),l=Ge(()=>r(v,a))}f?ye.add_callback(c):c()}},mr)}function Bl(e,t,r,n,a,i){var o,l,c=null,f=e,v;Gt(()=>{const _=t()||null;var g=zo;_!==o&&(v&&(_===null?Lt(v,()=>{v=null,l=null}):_===l?qn(v):He(v)),_&&_!==l&&(v=Ge(()=>{if(c=document.createElementNS(g,_),Rr(c,c),n){var p=c.appendChild(Wt());n(c,p)}re.nodes_end=c,f.before(c)})),o=_,o&&(l=o))},mr)}function Ll(e,t){var r=void 0,n;Gt(()=>{r!==(r=t())&&(n&&(He(n),n=null),r&&(n=Ge(()=>{Ta(()=>r(e))})))})}function vi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=vi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function jl(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=vi(e))&&(n&&(n+=" "),n+=t);return n}function hi(e){return typeof e=="object"?jl(e):e??""}const es=[...` 	
\r\f \v\uFEFF`];function zl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var i=a.length,o=0;(o=n.indexOf(a,o))>=0;){var l=o+i;(o===0||es.includes(n[o-1]))&&(l===n.length||es.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function ts(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var i=e[a];i!=null&&i!==""&&(n+=" "+a+": "+i+r)}return n}function Jn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Vl(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Jn)),a&&c.push(...Object.keys(a).map(Jn));var f=0,v=-1;const $=e.length;for(var _=0;_<$;_++){var g=e[_];if(l?g==="/"&&e[_-1]==="*"&&(l=!1):i?i===g&&(i=!1):g==="/"&&e[_+1]==="*"?l=!0:g==='"'||g==="'"?i=g:g==="("?o++:g===")"&&o--,!l&&i===!1&&o===0){if(g===":"&&v===-1)v=_;else if(g===";"||_===$-1){if(v!==-1){var p=Jn(e.substring(f,v).trim());if(!c.includes(p)){g!==";"&&_++;var m=e.substring(f,_).trim();r+=" "+m+";"}}f=_+1,v=-1}}}}return n&&(r+=ts(n)),a&&(r+=ts(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Pe(e,t,r,n,a,i){var o=e.__className;if(o!==r||o===void 0){var l=zl(r,n,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(i&&a!==i)for(var c in i){var f=!!i[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return i}function Xn(e,t={},r,n){for(var a in r){var i=r[a];t[a]!==i&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,n))}}function Wl(e,t,r,n){var a=e.__style;if(a!==t){var i=Vl(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(Xn(e,r?.[0],n[0]),Xn(e,r?.[1],n[1],"important")):Xn(e,r,n));return n}function kn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Tn(t))return Wo();for(var n of e.options)n.selected=t.includes(nn(n));return}for(n of e.options){var a=nn(n);if(ol(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function pi(e){var t=new MutationObserver(()=>{kn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ks(()=>{t.disconnect()})}function Xr(e,t,r=t){var n=!0;Na(e,"change",a=>{var i=a?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),nn);else{var l=e.querySelector(i)??e.querySelector("option:not([disabled])");o=l&&nn(l)}r(o)}),Ta(()=>{var a=t();if(kn(e,a,n),n&&a===void 0){var i=e.querySelector(":checked");i!==null&&(a=nn(i),r(a))}e.__value=a,n=!1}),pi(e)}function nn(e){return"__value"in e?e.__value:e.value}const Hr=Symbol("class"),Qr=Symbol("style"),_i=Symbol("is custom element"),mi=Symbol("is html");function Ia(e,t){var r=jn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function er(e,t){var r=jn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Ul(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Nn(e,t,r,n){var a=jn(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[yo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&gi(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Gl(e,t,r,n,a=!1,i=!1){var o=jn(e),l=o[_i],c=!o[mi],f=t||{},v=e.tagName==="OPTION";for(var _ in t)_ in r||(r[_]=null);r.class?r.class=hi(r.class):r[Hr]&&(r.class=null),r[Qr]&&(r.style??=null);var g=gi(e);for(const P in r){let k=r[P];if(v&&P==="value"&&k==null){e.value=e.__value="",f[P]=k;continue}if(P==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";Pe(e,p,k,n,t?.[Hr],r[Hr]),f[P]=k,f[Hr]=r[Hr];continue}if(P==="style"){Wl(e,k,t?.[Qr],r[Qr]),f[P]=k,f[Qr]=r[Qr];continue}var m=f[P];if(!(k===m&&!(k===void 0&&e.hasAttribute(P)))){f[P]=k;var $=P[0]+P[1];if($!=="$$")if($==="on"){const S={},M="$$"+P;let b=P.slice(2);var w=xl(b);if($l(b)&&(b=b.slice(0,-7),S.capture=!0),!w&&m){if(k!=null)continue;e.removeEventListener(b,f[M],S),f[M]=null}if(k!=null)if(w)e[`__${b}`]=k,Pt([b]);else{let C=function(W){f[P].call(this,W)};var T=C;f[M]=ci(b,e,C,S)}else w&&(e[`__${b}`]=void 0)}else if(P==="style")Nn(e,P,k);else if(P==="autofocus")ul(e,!!k);else if(!l&&(P==="__value"||P==="value"&&k!=null))e.value=e.__value=k;else if(P==="selected"&&v)Ul(e,k);else{var E=P;c||(E=kl(E));var D=E==="defaultValue"||E==="defaultChecked";if(k==null&&!l&&!D)if(o[P]=null,E==="value"||E==="checked"){let S=e;const M=t===void 0;if(E==="value"){let b=S.defaultValue;S.removeAttribute(E),S.defaultValue=b,S.value=S.__value=M?b:null}else{let b=S.defaultChecked;S.removeAttribute(E),S.defaultChecked=b,S.checked=M?b:!1}}else e.removeAttribute(P);else D||g.includes(E)&&(l||typeof k!="string")?(e[E]=k,E in o&&(o[E]=Be)):typeof k!="function"&&Nn(e,E,k)}}}return f}function rs(e,t,r=[],n=[],a,i=!1,o=!1){js(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",_=!1;if(Gt(()=>{var p=t(...l.map(s)),m=Gl(e,c,p,a,i,o);_&&v&&"value"in p&&kn(e,p.value);for(let w of Object.getOwnPropertySymbols(f))p[w]||He(f[w]);for(let w of Object.getOwnPropertySymbols(p)){var $=p[w];w.description===Vo&&(!c||$!==c[w])&&(f[w]&&He(f[w]),f[w]=Ge(()=>Ll(e,()=>$))),m[w]=$}c=m}),v){var g=e;Ta(()=>{kn(g,c.value,!0),pi(g)})}_=!0})}function jn(e){return e.__attributes??={[_i]:e.nodeName.includes("-"),[mi]:e.namespaceURI===jo}}var ns=new Map;function gi(e){var t=e.getAttribute("is")||e.nodeName,r=ns.get(t);if(r)return r;ns.set(t,r=[]);for(var n,a=e,i=Element.prototype;i!==a;){n=ho(a);for(var o in n)n[o].set&&r.push(o);a=xs(a)}return r}function Ve(e,t,r=t){var n=new WeakSet;Na(e,"input",async a=>{var i=a?e.defaultValue:e.value;if(i=Fn(e)?ea(i):i,r(i),ye!==null&&n.add(ye),await wl(),i!==(i=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=i??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),jr(t)==null&&e.value&&(r(Fn(e)?ea(e.value):e.value),ye!==null&&n.add(ye)),Aa(()=>{var a=t();if(e===document.activeElement){var i=Sn??ye;if(n.has(i))return}Fn(e)&&a===ea(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Hl(e,t,r=t){Na(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),jr(t)==null&&r(e.checked),Aa(()=>{var n=t();e.checked=!!n})}function Fn(e){var t=e.type;return t==="number"||t==="range"}function ea(e){return e===""?null:+e}let wn=!1;function Ql(e){var t=wn;try{return wn=!1,[e(),wn]}finally{wn=t}}const Kl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function te(e,t,r){return new Proxy({props:e,exclude:t},Kl)}const Yl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Gr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Gr(a)&&(a=a());const i=Xt(a,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Gr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Xt(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===dr||t===Ns)return!1;for(let r of e.props)if(Gr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Gr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ne(...e){return new Proxy({props:e},Yl)}function Bt(e,t,r,n){var a=!Br||(r&Co)!==0,i=(r&Oo)!==0,o=(r&qo)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=o?jr(n):n),l),v;if(i){var _=dr in e||Ns in e;v=Xt(e,t)?.set??(_&&t in e?T=>e[t]=T:void 0)}var g,p=!1;i?[g,p]=Ql(()=>e[t]):g=e[t],g===void 0&&n!==void 0&&(g=f(),v&&(a&&Eo(),v(g)));var m;if(a?m=()=>{var T=e[t];return T===void 0?f():(c=!0,T)}:m=()=>{var T=e[t];return T!==void 0&&(l=void 0),T===void 0?l:T},a&&(r&Ro)===0)return m;if(v){var $=e.$$legacy;return(function(T,P){return arguments.length>0?((!a||!P||$||p)&&v(P?m():T),T):m()})}var w=!1,E=((r&Mo)!==0?Cn:Ea)(()=>(w=!1,m()));i&&s(E);var D=re;return(function(T,P){if(arguments.length>0){const k=P?s(E):a&&i?tt(T):T;return N(E,k),w=!0,l!==void 0&&(l=k),T}return gr&&w||(D.f&_r)!==0?E.v:s(E)})}function bi(e){De===null&&Ts(),Br&&De.l!==null?Jl(De).m.push(e):Ys(()=>{const t=jr(e);if(typeof t=="function")return t})}function Zl(e){De===null&&Ts(),bi(()=>()=>jr(e))}function Jl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Xl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Xl);const Fl="modulepreload",ec=function(e){return"/"+e},as={},ta=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(_=>Promise.resolve(_).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};var o=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(v=>{if(v=ec(v),v in as)return;as[v]=!0;const _=v.endsWith(".css"),g=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${g}`))return;const p=document.createElement("link");if(p.rel=_?"stylesheet":Fl,_||(p.as="script"),p.crossOrigin="",p.href=v,c&&p.setAttribute("nonce",c),document.head.appendChild(p),_)return new Promise((m,$)=>{p.addEventListener("load",m),p.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${v}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})};class tc extends Map{#e=new Map;#r=Z(0);#c=Z(0);#u=zt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#o(t){return zt===this.#u?Z(t):tr(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#o(0),r.set(t,n);else return s(this.#r),!1}return s(n),!0}forEach(t,r){this.#a(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#o(0),r.set(t,n);else{s(this.#r);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),i=super.get(t),o=super.set(t,r),l=this.#r;if(a===void 0)a=this.#o(0),n.set(t,a),N(this.#c,super.size),Dt(l);else if(i!==r){Dt(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(v=>c.has(v));f&&Dt(l)}return o}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),N(this.#c,super.size),N(n,-1),Dt(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;N(this.#c,0);for(var r of t.values())N(r,-1);Dt(this.#r),t.clear()}}#a(){s(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#o(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#a(),super.values()}entries(){return this.#a(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#c),super.size}}class rc{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class yi{constructor(t){this.generateIdentifier=t,this.kv=new rc}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class nc extends yi{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function ac(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function sc(e,t){const r=ac(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const i=n[a];if(t(i))return i}}function Or(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function $n(e,t){return e.indexOf(t)!==-1}function ss(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class ic{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return sc(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const oc=e=>Object.prototype.toString.call(e).slice(8,-1),wi=e=>typeof e>"u",lc=e=>e===null,ln=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,ca=e=>ln(e)&&Object.keys(e).length===0,rr=e=>Array.isArray(e),cc=e=>typeof e=="string",uc=e=>typeof e=="number"&&!isNaN(e),dc=e=>typeof e=="boolean",fc=e=>e instanceof RegExp,cn=e=>e instanceof Map,un=e=>e instanceof Set,Si=e=>oc(e)==="Symbol",vc=e=>e instanceof Date&&!isNaN(e.valueOf()),hc=e=>e instanceof Error,is=e=>typeof e=="number"&&isNaN(e),pc=e=>dc(e)||lc(e)||wi(e)||uc(e)||cc(e)||Si(e),_c=e=>typeof e=="bigint",mc=e=>e===1/0||e===-1/0,gc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),bc=e=>e instanceof URL,$i=e=>e.replace(/\./g,"\\."),ra=e=>e.map(String).map($i).join("."),an=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let i=e.charAt(a);if(i==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(i==="."){t.push(r),r="";continue}r+=i}const n=r;return t.push(n),t};function Nt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const Pi=[Nt(wi,"undefined",()=>null,()=>{}),Nt(_c,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Nt(vc,"Date",e=>e.toISOString(),e=>new Date(e)),Nt(hc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Nt(fc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Nt(un,"set",e=>[...e.values()],e=>new Set(e)),Nt(cn,"map",e=>[...e.entries()],e=>new Map(e)),Nt(e=>is(e)||mc(e),"number",e=>is(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Nt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Nt(bc,"URL",e=>e.toString(),e=>new URL(e))];function zn(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const xi=zn((e,t)=>Si(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),yc=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),Ei=zn(gc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=yc[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function ki(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const Ni=zn(ki,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),Ti=zn((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),wc=[Ni,xi,Ti,Ei],os=(e,t)=>{const r=ss(wc,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=ss(Pi,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},Ai={};Pi.forEach(e=>{Ai[e.annotation]=e});const Sc=(e,t,r)=>{if(rr(t))switch(t[0]){case"symbol":return xi.untransform(e,t,r);case"class":return Ni.untransform(e,t,r);case"custom":return Ti.untransform(e,t,r);case"typed-array":return Ei.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=Ai[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Tr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function Di(e){if($n(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if($n(e,"prototype"))throw new Error("prototype is not allowed as a property");if($n(e,"constructor"))throw new Error("constructor is not allowed as a property")}const $c=(e,t)=>{Di(t);for(let r=0;r<t.length;r++){const n=t[r];if(un(e))e=Tr(e,+n);else if(cn(e)){const a=+n,i=+t[++r]==0?"key":"value",o=Tr(e,a);switch(i){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},ua=(e,t,r)=>{if(Di(t),t.length===0)return r(e);let n=e;for(let i=0;i<t.length-1;i++){const o=t[i];if(rr(n)){const l=+o;n=n[l]}else if(ln(n))n=n[o];else if(un(n)){const l=+o;n=Tr(n,l)}else if(cn(n)){if(i===t.length-2)break;const c=+o,f=+t[++i]==0?"key":"value",v=Tr(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const a=t[t.length-1];if(rr(n)?n[+a]=r(n[+a]):ln(n)&&(n[a]=r(n[a])),un(n)){const i=Tr(n,+a),o=r(i);i!==o&&(n.delete(i),n.add(o))}if(cn(n)){const i=+t[t.length-2],o=Tr(n,i);switch(+a==0?"key":"value"){case"key":{const c=r(o);n.set(c,n.get(o)),c!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function da(e,t,r=[]){if(!e)return;if(!rr(e)){Or(e,(i,o)=>da(i,t,[...r,...an(o)]));return}const[n,a]=e;a&&Or(a,(i,o)=>{da(i,t,[...r,...an(o)])}),t(n,r)}function Pc(e,t,r){return da(t,(n,a)=>{e=ua(e,a,i=>Sc(i,n,r))}),e}function xc(e,t){function r(n,a){const i=$c(e,an(a));n.map(an).forEach(o=>{e=ua(e,o,()=>i)})}if(rr(t)){const[n,a]=t;n.forEach(i=>{e=ua(e,an(i),()=>e)}),a&&Or(a,r)}else Or(t,r);return e}const Ec=(e,t)=>ln(e)||rr(e)||cn(e)||un(e)||ki(e,t);function kc(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Nc(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[i,...o]=a;i.length===0?n=o.map(ra):r[ra(i)]=o.map(ra)}),n?ca(r)?[n]:[n,r]:ca(r)?void 0:r}const Ii=(e,t,r,n,a=[],i=[],o=new Map)=>{const l=pc(e);if(!l){kc(e,a,t);const p=o.get(e);if(p)return n?{transformedValue:null}:p}if(!Ec(e,r)){const p=os(e,r),m=p?{transformedValue:p.value,annotations:[p.type]}:{transformedValue:e};return l||o.set(e,m),m}if($n(i,e))return{transformedValue:null};const c=os(e,r),f=c?.value??e,v=rr(f)?[]:{},_={};Or(f,(p,m)=>{if(m==="__proto__"||m==="constructor"||m==="prototype")throw new Error(`Detected property ${m}. This is a prototype pollution risk, please remove it from your object.`);const $=Ii(p,t,r,n,[...a,m],[...i,e],o);v[m]=$.transformedValue,rr($.annotations)?_[m]=$.annotations:ln($.annotations)&&Or($.annotations,(w,E)=>{_[$i(m)+"."+E]=w})});const g=ca(_)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,_]:_};return l||o.set(e,g),g};function Mi(e){return Object.prototype.toString.call(e).slice(8,-1)}function ls(e){return Mi(e)==="Array"}function Tc(e){if(Mi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Ac(e,t,r,n,a){const i={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";i==="enumerable"&&(e[t]=r),a&&i==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function fa(e,t={}){if(ls(e))return e.map(a=>fa(a,t));if(!Tc(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,i)=>{if(ls(t.props)&&!t.props.includes(i))return a;const o=e[i],l=fa(o,t);return Ac(a,i,l,e,t.nonenumerable),a},{})}class oe{constructor({dedupe:t=!1}={}){this.classRegistry=new nc,this.symbolRegistry=new yi(r=>r.description??""),this.customTransformerRegistry=new ic,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=Ii(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const i=Nc(r,this.dedupe);return i&&(a.meta={...a.meta,referentialEqualities:i}),a}deserialize(t){const{json:r,meta:n}=t;let a=fa(r);return n?.values&&(a=Pc(a,n.values,this)),n?.referentialEqualities&&(a=xc(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}oe.defaultInstance=new oe;oe.serialize=oe.defaultInstance.serialize.bind(oe.defaultInstance);oe.deserialize=oe.defaultInstance.deserialize.bind(oe.defaultInstance);oe.stringify=oe.defaultInstance.stringify.bind(oe.defaultInstance);oe.parse=oe.defaultInstance.parse.bind(oe.defaultInstance);oe.registerClass=oe.defaultInstance.registerClass.bind(oe.defaultInstance);oe.registerSymbol=oe.defaultInstance.registerSymbol.bind(oe.defaultInstance);oe.registerCustom=oe.defaultInstance.registerCustom.bind(oe.defaultInstance);oe.allowErrorProps=oe.defaultInstance.allowErrorProps.bind(oe.defaultInstance);oe.serialize;oe.deserialize;oe.stringify;oe.parse;oe.registerClass;oe.registerCustom;oe.registerSymbol;oe.allowErrorProps;function Dc(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function Ic(e,t){return`${e}_${t}`}const Mc=typeof window<"u"?window:void 0;function Cc(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Rc{#e;#r;constructor(t={}){const{window:r=Mc,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=Ls(a=>{const i=Xa(r,"focusin",a),o=Xa(r,"focusout",a);return()=>{i(),o()}}))}get current(){return this.#r?.(),this.#e?Cc(this.#e):null}}new Rc;function Oc(e){return typeof e=="function"}function qc(e,t){if(Oc(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Bc(e,t){let r=Z(null);const n=Y(()=>qc(t,250));function a(...i){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let o,l;const c=new Promise((f,v)=>{o=f,l=v});N(r,{timeout:null,runner:null,promise:c,resolve:o,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const o=s(r);N(r,null);try{o.resolve(await e.apply(this,i))}catch(l){o.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),N(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Fr(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function Lc(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function jc(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function zc(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>va(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],i=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(a.push({q:v,u:c}),i.push(va(v.toString(),c)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:a,display:o}}function Kr(e){return e?.length?e.map(t=>va(t.q.toString(),t.u)).join(" et "):"-"}function va(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let o=(Math.round(n*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Vc(e){return Fr(e)}function Wc(e,t,r){if(!e||Object.keys(e).length===0)return[];const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r,i=Object.entries(e).filter(([o])=>{const l=new Date(o);return l>=n&&l<=a}).flatMap(([o,l])=>l.totalConsolidated);return Ci(i)}function Ci(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Uc(e,t){return e[t]?.recipes||[]}function Gc(e){return e?Object.values(e).flatMap(t=>t.recipes||[]):[]}function Hc(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([i])=>{const o=new Date(i);return o>=n&&o<=a}).reduce((i,[o,l])=>i+(l.totalAssiettes||0),0)}function Qc(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Kc(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function cs(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return Ci(t)}function Yc(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class y{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}y.equal=(e,t)=>new y("equal",e,t).toString();y.notEqual=(e,t)=>new y("notEqual",e,t).toString();y.lessThan=(e,t)=>new y("lessThan",e,t).toString();y.lessThanEqual=(e,t)=>new y("lessThanEqual",e,t).toString();y.greaterThan=(e,t)=>new y("greaterThan",e,t).toString();y.greaterThanEqual=(e,t)=>new y("greaterThanEqual",e,t).toString();y.isNull=e=>new y("isNull",e).toString();y.isNotNull=e=>new y("isNotNull",e).toString();y.between=(e,t,r)=>new y("between",e,[t,r]).toString();y.startsWith=(e,t)=>new y("startsWith",e,t).toString();y.endsWith=(e,t)=>new y("endsWith",e,t).toString();y.select=e=>new y("select",void 0,e).toString();y.search=(e,t)=>new y("search",e,t).toString();y.orderDesc=e=>new y("orderDesc",e).toString();y.orderAsc=e=>new y("orderAsc",e).toString();y.orderRandom=()=>new y("orderRandom").toString();y.cursorAfter=e=>new y("cursorAfter",void 0,e).toString();y.cursorBefore=e=>new y("cursorBefore",void 0,e).toString();y.limit=e=>new y("limit",void 0,e).toString();y.offset=e=>new y("offset",void 0,e).toString();y.contains=(e,t)=>new y("contains",e,t).toString();y.notContains=(e,t)=>new y("notContains",e,t).toString();y.notSearch=(e,t)=>new y("notSearch",e,t).toString();y.notBetween=(e,t,r)=>new y("notBetween",e,[t,r]).toString();y.notStartsWith=(e,t)=>new y("notStartsWith",e,t).toString();y.notEndsWith=(e,t)=>new y("notEndsWith",e,t).toString();y.createdBefore=e=>new y("createdBefore",void 0,e).toString();y.createdAfter=e=>new y("createdAfter",void 0,e).toString();y.createdBetween=(e,t)=>new y("createdBetween",void 0,[e,t]).toString();y.updatedBefore=e=>new y("updatedBefore",void 0,e).toString();y.updatedAfter=e=>new y("updatedAfter",void 0,e).toString();y.updatedBetween=(e,t)=>new y("updatedBetween",void 0,[e,t]).toString();y.or=e=>new y("or",void 0,e.map(t=>JSON.parse(t))).toString();y.and=e=>new y("and",void 0,e.map(t=>JSON.parse(t))).toString();y.distanceEqual=(e,t,r,n=!0)=>new y("distanceEqual",e,[[t,r,n]]).toString();y.distanceNotEqual=(e,t,r,n=!0)=>new y("distanceNotEqual",e,[[t,r,n]]).toString();y.distanceGreaterThan=(e,t,r,n=!0)=>new y("distanceGreaterThan",e,[[t,r,n]]).toString();y.distanceLessThan=(e,t,r,n=!0)=>new y("distanceLessThan",e,[[t,r,n]]).toString();y.intersects=(e,t)=>new y("intersects",e,[t]).toString();y.notIntersects=(e,t)=>new y("notIntersects",e,[t]).toString();y.crosses=(e,t)=>new y("crosses",e,[t]).toString();y.notCrosses=(e,t)=>new y("notCrosses",e,[t]).toString();y.overlaps=(e,t)=>new y("overlaps",e,[t]).toString();y.notOverlaps=(e,t)=>new y("notOverlaps",e,[t]).toString();y.touches=(e,t)=>new y("touches",e,[t]).toString();y.notTouches=(e,t)=>new y("notTouches",e,[t]).toString();var Ri,Oi;class dn{static custom(t){return t}static unique(t=7){const r=Yc(dn,Ri,"m",Oi).call(dn);let n="";for(let a=0;a<t;a++){const i=Math.floor(Math.random()*16).toString(16);n+=i}return r+n}}Ri=dn,Oi=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var us;(function(e){e.Totp="totp"})(us||(us={}));var ds;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(ds||(ds={}));var fs;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(fs||(fs={}));var vs;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(vs||(vs={}));var hs;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(hs||(hs={}));var ps;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(ps||(ps={}));var _s;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(_s||(_s={}));var ms;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(ms||(ms={}));var gs;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(gs||(gs={}));function qi(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,productType:e.productType,pFrais:e.pFrais,pSurgel:e.pSurgel,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,byDate:e.byDate,...t}}async function Mt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Zc(e,t,r=100){try{const{databases:n,config:a}=await Mt(),i=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[y.greaterThan("$updatedAt",t),y.equal("mainId",e),y.limit(r),y.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function Bi(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:i}=await Mt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[y.equal("mainId",e),y.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),y.limit(n)])).documents;const o=await a.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[y.greaterThan("$updatedAt",r),y.equal("mainId",e),y.limit(n),y.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const i=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function Vn(e,t){try{const{databases:r,config:n}=await Mt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function en(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=qi(n,t),{databases:i,config:o}=await Mt(),l=await i.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function Li(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await Vn(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function ha(e,t){return Vn(e,{who:t})}async function pa(e,t){return Vn(e,{stockReel:t})}async function ji(e){try{const{databases:t,config:r}=await Mt(),i=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:i.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,dn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function zi(e,t){try{const{databases:r,config:n}=await Mt(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),i={...t,products:t.products||a.products},o=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,i);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Vi(e){try{const{databases:t,config:r}=await Mt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Wi(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Mt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[y.equal("$id",e),y.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Ui(e,t={}){let r=null;const n=i=>{const{events:o,payload:l}=i;if(!l)return;const c=o.some(p=>p.includes("products.")),f=o.some(p=>p.includes("purchases.")),v=o.some(p=>p.includes(".create")),_=o.some(p=>p.includes(".update")),g=o.some(p=>p.includes(".delete"));if(c){const p=l;v&&t.onProductCreate?t.onProductCreate(p):_&&t.onProductUpdate?t.onProductUpdate(p):g&&t.onProductDelete&&t.onProductDelete(p.$id)}else if(f){const p=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(p):_&&t.onPurchaseUpdate?t.onPurchaseUpdate(p):g&&t.onPurchaseDelete&&t.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),t.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),t.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function Gi(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Mt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Hi(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await Mt(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}const na=Object.freeze(Object.defineProperty({__proto__:null,createMainDocument:Hi,createPurchase:ji,deletePurchase:Vi,enrichedProductToAppwriteProduct:qi,loadMainEventData:Gi,loadPurchasesListByIds:Wi,loadUpdatedPurchases:Zc,subscribeToRealtime:Ui,syncProductsWithPurchases:Bi,updateProduct:Vn,updateProductStock:pa,updateProductStore:Li,updateProductWho:ha,updatePurchase:zi,upsertProduct:en},Symbol.toStringTag,{value:"Module"}));async function Jc(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Xc(e,t,r){return{$id:`${t}_${e.ingredientHugoUuid}`,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,byDate:JSON.stringify(e.byDate),nbRecipes:e.nbRecipes||0,totalAssiettes:e.totalAssiettes||0,status:"",purchases:[],store:"",who:null,stockReel:null,isMerged:!1,mergedInto:null,mergedFrom:null,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,mainId:t}}const bs=1e3,Fc=500;class eu{#e=new tc;#r=Z(null);#c=Z(!1);#u=Z(!1);#o=Z(null);#a=Z(!1);#s=Z(!1);#n=Z(tt([]));#i=Z(null);#d=Z(null);get startDate(){return s(this.#d)}set startDate(t){N(this.#d,t,!0)}#f=Z(null);get endDate(){return s(this.#f)}set endDate(t){N(this.#f,t,!0)}#l=null;#v=null;#h=null;#p=null;#$=Z(!1);#t=Z(tt({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get currentMainId(){return s(this.#r)}get isInitialized(){return s(this.#c)}get loading(){return s(this.#u)}get error(){return s(this.#o)}get allDates(){return s(this.#n)}get syncing(){return s(this.#a)}setStartDate(t){this.startDate=t}setEndDate(t){this.endDate=t}setDateRange(t,r){this.startDate=t,this.endDate=r}initializeDateRange(){if((!this.startDate||!this.endDate)&&s(this.#n).length>0){const t=[...s(this.#n)].sort();this.startDate=t[0],this.endDate=t[t.length-1]}console.log(`[ProductsStore] Date range initialized: ${this.startDate} - ${this.endDate}`)}get firstDate(){return s(this.#n).length===0?null:[...s(this.#n)].sort()[0]}get lastDate(){return s(this.#n).length===0?null:[...s(this.#n)].sort().pop()}get realtimeConnected(){return s(this.#s)}get hugoContentChanged(){return s(this.#$)}#P=Y(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#P)}set enrichedProducts(t){N(this.#P,t)}#_=new Map;#m={start:"",end:""};#y=Y(()=>{console.log("[ProductsStore] totalNeededByDateRange recalculated");const t={start:this.startDate||"",end:this.endDate||""},r=t.start!==this.#m.start||t.end!==this.#m.end;if(!r&&this.#_.size>0)return this.#_;console.log("Range Changed:",r),console.log("Current Range:",t),console.log("Last Range:",this.#m),console.log("date",t.start,t.end),this.#m=t,this.#_.clear();const n=new Map,a=this.enrichedProducts;for(const i of a){if(i.totalNeededIsManualOverride&&i.totalNeededConsolidated){const l=Fr(i.totalNeededConsolidated);l&&l.length>0&&(n.set(i.$id,l),this.#_.set(i.$id,l));continue}if(!i.byDateParsed||!this.startDate||!this.endDate)continue;const o=Wc(i.byDateParsed,this.startDate,this.endDate);o&&o.length>0&&(n.set(i.$id,o),this.#_.set(i.$id,o))}return n});get totalNeededByDateRange(){return s(this.#y)}set totalNeededByDateRange(t){N(this.#y,t)}#k=Y(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const a=Kr(r);t.set(n,a)}),t});get formattedTotalNeededByDateRange(){return s(this.#k)}set formattedTotalNeededByDateRange(t){N(this.#k,t)}#N=Y(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#N)}set stats(t){N(this.#N,t)}#T=Y(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#T)}set uniqueStores(t){N(this.#T,t)}#A=Y(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#A)}set uniqueWho(t){N(this.#A,t)}#D=Y(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#D)}set uniqueProductTypes(t){N(this.#D,t)}#I=Y(()=>{const t=this.enrichedProducts.filter(r=>this.#V(r)&&this.totalNeededByDateRange.has(r.$id));return s(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>s(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get displayProducts(){return s(this.#I)}set displayProducts(t){N(this.#I,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#c)&&s(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),N(this.#r,t,!0),this.#l=Ic("products-enriched",t),N(this.#o,null);try{if(await this.#R(),this.#e.size===0){const n=await Jc(t);console.log(`[ProductsStore] Données Hugo chargées: ${n.ingredients.length} ingredients`),n.ingredients.forEach(i=>{const o=Xc(i,t,n.hugoContentHash),l=this.#x(o);this.#e.set(l.$id,l)}),N(this.#n,n.allDates,!0),await Gi(t)||await Hi(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),this.#w()}this.initializeDateRange(),this.#O(),N(this.#c,!0);const r=this.#z();this.#h=Ui(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw N(this.#o,n,!0),console.error("[ProductsStore]",n,r),r}}async#R(){if(this.#l)try{const t=localStorage.getItem(this.#l);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n,allDates:a}=oe.parse(t);r.forEach(([i,o])=>this.#e.set(i,o)),N(this.#i,n,!0),N(this.#n,a||[],!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}, allDates: ${a?.length||0} dates`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}async#O(){if(s(this.#r)){N(this.#a,!0);try{const t=await Bi(s(this.#r),{lastSync:s(this.#i),limit:bs});if(s(this.#i)){const{loadUpdatedPurchases:r}=await ta(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>na);return{loadUpdatedPurchases:a}},void 0);(await r(s(this.#r),s(this.#i),bs)).forEach(a=>{if(a.products?.length){const i=a.products.map(o=>typeof o=="string"?o:o.$id);this.#E(i,a)}})}t.forEach(r=>{const n=this.#x(r);n.isSynced=!0,this.#e.set(r.$id,n)}),this.#b(),this.#g()}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{N(this.#a,!1)}}}#w(){if(this.#l)try{const t={lastSync:s(this.#i),products:Array.from(this.#e.entries()),allDates:s(this.#n)};localStorage.setItem(this.#l,oe.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}#g(){this.#p&&clearTimeout(this.#p),this.#p=setTimeout(()=>{this.#w(),this.#p=null},Fc)}#b(){N(this.#i,new Date().toISOString(),!0)}#x(t){const r=jc(Lc(t.purchases??[])),n=Vc(t.byDate);let a,i,o,l;n?(a=cs(n),i=Kc(n),o=Gc(n),t.totalNeededConsolidated&&t.totalNeededIsManualOverride&&(l=Fr(t.totalNeededConsolidated)||void 0)):(console.error(`[ProductsStore] Product ${t.productName} n'a pas de structure byDate - migration requise`),a=[],i=[],o=[]);const{numeric:c,display:f}=zc(a,r),v=Fr(t.stockReel)??[],_=Kr(r),g=v.length>0?`${v[v.length-1].quantity} ${v[v.length-1].unit}`:_;return{...t,storeInfo:t.store?Fr(t.store):null,totalNeededArray:a,totalPurchasesArray:r,recipesArray:o,stockArray:v,stockOrTotalPurchases:g,missingQuantityArray:c,neededConsolidatedByDateArray:i,displayTotalNeeded:Kr(a),displayTotalPurchases:_,displayMissingQuantity:f,byDateParsed:n||void 0,totalNeededRawArray:l,totalNeededIsManualOverride:t.totalNeededIsManualOverride??!1,totalNeededOverrideReason:t.totalNeededOverrideReason}}#M(t){t.length&&(t.forEach(r=>this.#S(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#S(t){const r=this.#x(t);this.#e.set(t.$id,r)}#q(t){this.#e.delete(t)}async#B(t){if(!t.products?.length){console.warn("[ProductsStore] Purchase créé sans products:",t.$id);return}const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#j(r,t)}async#L(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#E(r,t);return}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Wi([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);this.#E(n,r)}}catch(r){console.error("[ProductsStore] Erreur rechargement purchase:",r)}}#C(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:typeof t.mainId=="string"?t.mainId:t.mainId.$id}}#j(t,r){const n=this.#C(r),a=[];t.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.purchases||[];l.some(c=>c.$id===n.$id)||a.push({...o,purchases:[...l,n]})}}),this.#M(a)}#E(t,r){const n=this.#C(r),a=[];t.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n,a.push({...o,purchases:f})}else a.push({...o,purchases:[...l,r]})}}),this.#M(a)}#z(){return{onProductCreate:t=>{this.#S(t),this.#b(),this.#g()},onProductUpdate:t=>{this.#S(t),this.#b(),this.#g()},onProductDelete:t=>{this.#q(t),this.#b(),this.#g()},onPurchaseCreate:t=>{this.#B(t),this.#b(),this.#g()},onPurchaseUpdate:t=>{this.#L(t),this.#b(),this.#g()},onPurchaseDelete:t=>{Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t)).forEach(n=>{this.#S(n)}),this.#b(),this.#g()},onConnect:()=>{N(this.#s,!0)},onDisconnect:()=>{N(this.#s,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#V(t){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#t).selectedStores.includes(t.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!t.productType||!s(this.#t).selectedProductTypes.includes(t.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Bc(t=>{s(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#t).selectedProductTypes.indexOf(t);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#t).selectedTemperatures.indexOf(t);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(t){s(this.#t).groupBy=t}toggleStore(t){const r=s(this.#t).selectedStores.indexOf(t);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(t)}toggleWho(t){const r=s(this.#t).selectedWho.indexOf(t);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(t)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(t){s(this.#t).sortColumn===t?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=t,s(this.#t).sortDirection="asc")}clearFilters(){N(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#t).sortColumn],i=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,i=parseFloat(i)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,i=n.purchases?.length||0),a<i?s(this.#t).sortDirection==="asc"?-1:1:a>i?s(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}getNeededForProduct(t){return this.totalNeededByDateRange.get(t)??[]}async applyManualOverride(t,r,n=null){const a=this.#e.get(t);if(!a)throw new Error(`Product ${t} not found`);const{updateProduct:i}=await ta(async()=>{const{updateProduct:o}=await Promise.resolve().then(()=>na);return{updateProduct:o}},void 0);await i(t,{totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n}),this.#e.set(t,{...a,totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n,totalNeededArray:r,displayTotalNeeded:Kr(r)}),this.#w()}async removeManualOverride(t){const r=this.#e.get(t);if(!r)throw new Error(`Product ${t} not found`);const{updateProduct:n}=await ta(async()=>{const{updateProduct:i}=await Promise.resolve().then(()=>na);return{updateProduct:i}},void 0);await n(t,{totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null});const a=r.byDateParsed?cs(r.byDateParsed):[];this.#e.set(t,{...r,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,totalNeededArray:a,displayTotalNeeded:Kr(a)}),this.#w()}hasManualOverride(t){return this.#e.get(t)?.totalNeededIsManualOverride??!1}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDateParsed?Uc(n.byDateParsed,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDateParsed&&n.byDateParsed[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDateParsed?Qc(r.byDateParsed):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDateParsed?Object.keys(r.byDateParsed).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDateParsed||!this.startDate||!this.endDate?0:Hc(r.byDateParsed,this.startDate,this.endDate)}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDateParsed||!this.startDate||!this.endDate?[]:Object.keys(r.byDateParsed).filter(a=>{const i=new Date(a),o=this.startDate?new Date(this.startDate):null,l=this.endDate?new Date(this.endDate):null;return o&&l&&i>=o&&i<=l}).flatMap(a=>r.byDateParsed[a]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){this.clearCache(),await this.initialize(t)}clearCache(){this.#e.clear(),N(this.#n,[],!0),N(this.#i,null),this.#l&&localStorage.removeItem(this.#l),this.#v&&localStorage.removeItem(this.#v),console.log("[ProductsStore] Cache vidé")}destroy(){this.#h?.(),this.#h=null,this.#p&&(clearTimeout(this.#p),this.#p=null),console.log("[ProductsStore] Ressources nettoyées")}}const R=new eu;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const tu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ru=Dl("<svg><!><!></svg>");function ae(e,t){z(t,!0);const r=Bt(t,"color",3,"currentColor"),n=Bt(t,"size",3,24),a=Bt(t,"strokeWidth",3,2),i=Bt(t,"absoluteStrokeWidth",3,!1),o=Bt(t,"iconNode",19,()=>[]),l=te(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=ru();rs(c,_=>({...tu,...l,width:n(),height:n(),stroke:r(),"stroke-width":_,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>i()?Number(a())*24/Number(n()):a()]);var f=u(c);We(f,17,o,Ln,(_,g)=>{var p=Y(()=>ks(s(g),2));let m=()=>s(p)[0],$=()=>s(p)[1];var w=j(),E=q(w);Bl(E,m,!0,(D,T)=>{rs(D,()=>({...$()}))}),h(_,w)});var v=d(f);ee(v,()=>t.children??J),h(e,c),V()}function _a(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ae(e,ne({name:"archive"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function nu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ae(e,ne({name:"bean"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function au(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ae(e,ne({name:"beef"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function su(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ae(e,ne({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function iu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ae(e,ne({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function ou(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ae(e,ne({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function lu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ae(e,ne({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function cu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ae(e,ne({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function uu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];ae(e,ne({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function du(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];ae(e,ne({name:"clock"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function fu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];ae(e,ne({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function Ma(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ae(e,ne({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function vu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ae(e,ne({name:"egg"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function ma(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ae(e,ne({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function ys(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ae(e,ne({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function hu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ae(e,ne({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function pu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ae(e,ne({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function _u(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ae(e,ne({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function mu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ae(e,ne({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function gu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ae(e,ne({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function bu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];ae(e,ne({name:"moon"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function pn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ae(e,ne({name:"package"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function yu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ae(e,ne({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function wu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ae(e,ne({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function Su(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ae(e,ne({name:"save"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function $u(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ae(e,ne({name:"search"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function ga(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ae(e,ne({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function fn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ae(e,ne({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function ba(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ae(e,ne({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function Qi(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ae(e,ne({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function vn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ae(e,ne({name:"store"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function Pu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];ae(e,ne({name:"sun"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function xu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ae(e,ne({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function Ca(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ae(e,ne({name:"user"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function Ki(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ae(e,ne({name:"users"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function Eu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ae(e,ne({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function pt(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=te(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ae(e,ne({name:"x"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=j(),l=q(o);ee(l,()=>t.children??J),h(a,o)},$$slots:{default:!0}})),V()}function Pn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:nu};case"animaux":return{displayName:"Viandes et Poissons",icon:au};case"legumes":return{displayName:"Fruits et Légumes",icon:iu};case"sucres":return{displayName:"Sucrées",icon:su};case"lof":return{displayName:"L.O.F",icon:vu};case"autres":return{displayName:"Autres",icon:ou};case"epices":return{displayName:"Assaisonnements",icon:hu};case"frais":return{displayName:"Produits Frais",icon:wu};default:return{displayName:e,icon:pn}}}function ws(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Ra(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Oa(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function ku(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function Nu(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],i=n[t.sortColumn];return a<i?t.sortDirection==="asc"?-1:1:a>i?t.sortDirection==="asc"?1:-1:0}):e}function ya(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function Ss(e){return e?Oa(e):"-"}function Tu(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",i=n.unit||"unit",o=`${a}_${i}`;if(!r[o]){const l=ya(a);r[o]={status:a,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Au(a)}}return r[o].quantity+=n.quantity||0,r},{});return Object.values(t)}function Au(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ShoppingCart";case"pending":return"Clock";case"delivered":return"CircleCheck";case"cancelled":return"CircleX";default:return"Package"}}let $s=()=>localStorage.getItem("appwrite-user-name")||"";function Du(e){let t=Z(!1),r=Z(null);const n=Y(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),R.getEnrichedProductById(e))),a=Y(()=>s(n)?.recipesArray??[]),i=Y(()=>s(n)?.who??[]),o=Y(()=>s(n)?.stockArray??[]),l=Y(()=>s(n)?.purchases??[]),c=tt({purchase:{quantity:null,unit:"",store:"",who:$s()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});let f=Z(!1);Ys(()=>{!s(n)||s(f)||(c.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,c.purchase.unit=s(n).totalNeededArray[0]?.u??"",c.purchase.store=s(n).storeInfo?.storeName??"",c.purchase.who=$s()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=s(n).totalNeededArray[0]?.u??"",c.store.name=s(n).storeInfo?.storeName??null,c.store.comment=s(n).storeInfo?.storeComment??null,N(f,!0))});let v=Z(null);const _=Y(()=>s(v)?s(l).find(b=>b.$id===s(v))??null:null);async function g(b,C){N(t,!0),N(r,null);try{const W=await b();return C&&p("success",C),W}catch(W){const ge=W instanceof Error?W.message:"Une erreur est survenue";return N(r,ge,!0),p("error",ge),console.error("[ProductModalState]",W),null}finally{N(t,!1)}}function p(b,C){const W=new CustomEvent("toast",{detail:{type:b,message:C}});window.dispatchEvent(W)}async function m(){s(n)&&await g(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!R.currentMainId)throw new Error("mainId non disponible");const{quantity:b,unit:C}=ws(c.purchase.quantity,c.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await en(s(n).$id,{},W=>R.getEnrichedProductById(W))),await ji({products:[s(n).$id],mainId:R.currentMainId,unit:C,quantity:b,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:c.purchase.status||"delivered",orderDate:c.purchase.orderDate||null,deliveryDate:c.purchase.deliveryDate||null}),c.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function $(b){N(v,b.$id,!0)}function w(){N(v,null)}async function E(b){b.$id&&await g(async()=>{const{quantity:C,unit:W}=ws(b.quantity,b.unit);await zi(b.$id,{unit:W,quantity:C,store:b.store||null,who:b.who||null,notes:b.notes||"",price:b.price||null,status:b.status||null,orderDate:b.orderDate||null,deliveryDate:b.deliveryDate||null}),N(v,null)},"Achat modifié avec succès")}async function D(b){const C=s(l).find(W=>W.$id===b);C&&confirm(`Supprimer cet achat (${C.quantity} ${C.unit}) ?`)&&await g(async()=>{await Vi(b)},"Achat supprimé avec succès")}async function T(){s(n)&&await g(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const b={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime},C=[...s(o),b];s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await pa(s(n).$id,JSON.stringify(C))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await en(s(n).$id,{stockReel:JSON.stringify(C)},W=>R.getEnrichedProductById(W))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Relevé de stock ajouté")}async function P(b){s(n)&&confirm("Supprimer ce relevé de stock ?")&&await g(async()=>{const C=s(o).filter((W,ge)=>ge!==b);await pa(s(n).$id,JSON.stringify(C))},"Relevé de stock supprimé")}async function k(b){!s(n)||!b.trim()||await g(async()=>{if(s(i).includes(b))throw new Error("Ce volontaire est déjà ajouté");const C=[...s(i),b.trim()];s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update normal...`),await ha(s(n).$id,C)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création avec upsert...`),await en(s(n).$id,{who:C},W=>R.getEnrichedProductById(W)))},"Volontaire ajouté")}async function S(b){s(n)&&confirm(`Retirer ${b} ?`)&&await g(async()=>{await ha(s(n).$id,s(i).filter(C=>C!==b))},"Volontaire retiré")}async function M(b){s(n)&&await g(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await Li(s(n).$id,b)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await en(s(n).$id,{store:JSON.stringify(b)},C=>R.getEnrichedProductById(C)))},"Magasin mis à jour")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(a)},get whoList(){return s(i)},get stockEntries(){return s(o)},get purchasesList(){return s(l)},get editingPurchaseId(){return s(v)},get editingPurchaseData(){return s(_)},forms:c,addPurchase:m,startEditPurchase:$,cancelEditPurchase:w,updateEditedPurchase:E,removePurchase:D,addStock:T,removeStock:P,addVolunteer:k,removeVolunteer:S,updateStore:M,formatQuantity:Ra,formatDate:Oa,formatDisplayQuantity:ku}}function Iu(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Mu(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Cu(e,t){t().cancelEditPurchase()}var Ru=x('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Ou=x('<span class="loading loading-spinner loading-sm"></span>'),qu=x('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Bu=x('<span class="loading loading-spinner loading-sm"></span>'),Lu=x('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),ju=(e,t,r)=>t(s(r)),zu=(e,t,r)=>t(s(r).$id),Vu=x('<span class="loading loading-spinner loading-sm"></span>'),Wu=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Uu=x('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Gu=x(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Notes" maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Hu(e,t){z(t,!0);let r=Bt(t,"modalState",7);function n(){return r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(U){return U.quantity!==null&&U.quantity!==0&&U.unit?.trim()!==""}function i(U){r().removePurchase(U)}function o(U){r().startEditPurchase(U)}var l=Gu(),c=u(l),f=u(c);fn(f,{class:"h-5 w-5"});var v=d(c,2),_=u(v),g=d(u(_),2),p=u(g),m=u(p);pn(m,{class:"h-4 w-4 opacity-50"});var $=d(m,2),w=d(p,2),E=u(w);E.value=E.__value="";var D=d(E);D.value=D.__value="kg";var T=d(D);T.value=T.__value="gr.";var P=d(T);P.value=P.__value="l.";var k=d(P);k.value=k.__value="ml";var S=d(k);S.value=S.__value="unité";var M=d(S);M.value=M.__value="bottes";var b=d(w,2),C=u(b);vn(C,{class:"h-4 w-4 opacity-50"});var W=d(C,2),ge=d(b,2),fe=u(ge);Ca(fe,{class:"h-4 w-4 opacity-50"});var Te=d(fe,2),Ce=d(ge,2),Ie=d(u(Ce),2),Q=d(g,2),we=u(Q),A=u(we);gu(A,{class:"h-4 w-4 opacity-50"});var X=d(A,2),pe=d(Q,2),Se=u(pe),Ne=u(Se),xe=u(Ne),Ue=u(xe);Ue.value=Ue.__value="delivered";var de=d(Ue);de.value=de.__value="requested";var he=d(de);he.value=he.__value="ordered";var Le=d(Ne,2),Ee=d(Se,2);{var Ae=U=>{var Oe=Ru(),Ct=d(u(Oe),2);Ve(Ct,()=>r().forms.purchase.deliveryDate,Ht=>r().forms.purchase.deliveryDate=Ht),h(U,Oe)};I(Ee,U=>{r().forms.purchase.status==="ordered"&&U(Ae)})}var Re=d(pe,2),_e=u(Re);_e.__click=[Iu,n,r];var B=u(_e);{var le=U=>{var Oe=Ou();h(U,Oe)},Me=U=>{var Oe=lt("Ajouter l'achat");h(U,Oe)};I(B,U=>{r().loading?U(le):U(Me,!1)})}var Qe=d(v,2);{var ut=U=>{var Oe=qu(),Ct=u(Oe);fn(Ct,{class:"mx-auto mb-2 h-12 w-12"}),h(U,Oe)},xt=U=>{var Oe=Uu(),Ct=u(Oe),Ht=d(u(Ct));We(Ht,21,()=>r().purchasesList,dt=>dt.$id,(dt,F,br)=>{var yr=j(),wr=q(yr);{var Et=at=>{var Rt=Lu(),Ot=u(Rt),ft=u(Ot),mt=u(ft),Qt=d(mt,2),kt=u(Qt);kt.value=kt.__value="kg";var gt=d(kt);gt.value=gt.__value="gr.";var Kt=d(gt);Kt.value=Kt.__value="l.";var Yt=d(Kt);Yt.value=Yt.__value="ml";var ar=d(Yt);ar.value=ar.__value="unité";var sr=d(ar);sr.value=sr.__value="bottes";var $r=d(Ot),ir=u($r),Pr=d($r),xr=u(Pr),G=d(Pr),ue=u(G),Fe=u(ue);Fe.value=Fe.__value="requested";var Ke=d(Fe);Ke.value=Ke.__value="ordered";var qe=d(Ke);qe.value=qe.__value="delivered";var je=d(qe);je.value=je.__value="cancelled";var st=d(G),me=u(st),ke=d(st),be=u(ke),K=d(ke),ve=u(K),$e=d(K),it=u($e),et=d($e),bt=u(et),yt=u(bt);yt.__click=[Mu,r,a];var Ze=u(yt);{var wt=se=>{var qt=Bu();h(se,qt)},zr=se=>{Su(se,{class:"h-3 w-3"})};I(Ze,se=>{r().loading?se(wt):se(zr,!1)})}var Er=d(yt,2);Er.__click=[Cu,r];var Vr=u(Er);pt(Vr,{class:"h-3 w-3"}),L(se=>yt.disabled=se,[()=>r().loading||!a(s(F))]),Ve(mt,()=>s(F).quantity,se=>s(F).quantity=se),Xr(Qt,()=>s(F).unit,se=>s(F).unit=se),Ve(ir,()=>s(F).store,se=>s(F).store=se),Ve(xr,()=>s(F).who,se=>s(F).who=se),Xr(ue,()=>s(F).status,se=>s(F).status=se),Ve(me,()=>s(F).orderDate,se=>s(F).orderDate=se),Ve(be,()=>s(F).deliveryDate,se=>s(F).deliveryDate=se),Ve(ve,()=>s(F).price,se=>s(F).price=se),Ve(it,()=>s(F).notes,se=>s(F).notes=se),h(at,Rt)},Sr=at=>{var Rt=Wu(),Ot=u(Rt),ft=u(Ot),mt=d(Ot),Qt=u(mt),kt=d(mt),gt=u(kt),Kt=d(kt),Yt=u(Kt),ar=u(Yt),sr=d(Kt),$r=u(sr),ir=d(sr),Pr=u(ir),xr=d(ir),G=u(xr),ue=d(xr),Fe=u(ue),Ke=d(ue),qe=u(Ke),je=u(qe);je.__click=[ju,o,F];var st=u(je);Qi(st,{class:"h-4 w-4"});var me=d(je,2);me.__click=[zu,i,F];var ke=u(me);{var be=ve=>{var $e=Vu();h(ve,$e)},K=ve=>{pt(ve,{class:"h-4 w-4"})};I(ke,ve=>{r().loading?ve(be):ve(K,!1)})}L((ve,$e,it,et,bt)=>{O(ft,ve),O(Qt,s(F).store||"-"),O(gt,s(F).who||"-"),Pe(Yt,1,`badge badge-sm ${$e??""}`),O(ar,it),O($r,et),O(Pr,bt),O(G,s(F).price?`${s(F).price}€`:"-"),O(Fe,s(F).notes||"-"),me.disabled=r().loading},[()=>Ra(s(F).quantity,s(F).unit),()=>ya(s(F).status).class,()=>ya(s(F).status).text,()=>Ss(s(F).orderDate),()=>Ss(s(F).deliveryDate)]),h(at,Rt)};I(wr,at=>{r().editingPurchaseId===s(F).$id?at(Et):at(Sr,!1)})}h(dt,yr)}),h(U,Oe)};I(Qe,U=>{r().purchasesList.length===0?U(ut):U(xt,!1)})}L(U=>{Pe(Le,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),_e.disabled=U},[()=>r().loading||!n()]),Ve($,()=>r().forms.purchase.quantity,U=>r().forms.purchase.quantity=U),Xr(w,()=>r().forms.purchase.unit,U=>r().forms.purchase.unit=U),Ve(W,()=>r().forms.purchase.store,U=>r().forms.purchase.store=U),Ve(Te,()=>r().forms.purchase.who,U=>r().forms.purchase.who=U),Ve(Ie,()=>r().forms.purchase.price,U=>r().forms.purchase.price=U),Ve(X,()=>r().forms.purchase.notes,U=>r().forms.purchase.notes=U),Xr(xe,()=>r().forms.purchase.status,U=>r().forms.purchase.status=U),h(e,l),V()}Pt(["click"]);async function Qu(e,t){await t()?.addStock()}var Ku=x('<span class="loading loading-spinner loading-sm"></span>'),Yu=x('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Zu=x('<span class="loading loading-spinner loading-xs"></span>'),Ju=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),Xu=x('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Fu=x(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function ed(e,t){z(t,!0);let r=Bt(t,"modalState",7),n=Y(()=>r()&&r().forms.stock.quantity&&r().forms.stock.quantity>0&&r().forms.stock.unit);async function a(Q){await r()?.removeStock(Q)}var i=Fu(),o=u(i),l=u(o);_a(l,{class:"h-5 w-5"});var c=d(o,2),f=u(c),v=d(u(f),2),_=u(v),g=u(_);pn(g,{class:"h-4 w-4 opacity-50"});var p=d(g,2),m=d(_,2),$=u(m);$.value=$.__value="";var w=d($);w.value=w.__value="kg";var E=d(w);E.value=E.__value="gr.";var D=d(E);D.value=D.__value="l.";var T=d(D);T.value=T.__value="ml";var P=d(T);P.value=P.__value="unité";var k=d(P);k.value=k.__value="bottes";var S=d(v,2),M=u(S),b=d(S,2),C=u(b);C.__click=[Qu,r];var W=u(C);{var ge=Q=>{var we=Ku();h(Q,we)},fe=Q=>{var we=lt("Ajouter au stock");h(Q,we)};I(W,Q=>{r().loading?Q(ge):Q(fe,!1)})}var Te=d(c,2);{var Ce=Q=>{var we=Yu(),A=u(we);_a(A,{class:"mx-auto mb-2 h-12 w-12"}),h(Q,we)},Ie=Q=>{var we=Xu(),A=u(we),X=d(u(A));We(X,23,()=>r().stockEntries,pe=>pe.dateTime,(pe,Se,Ne)=>{var xe=Ju(),Ue=u(xe),de=u(Ue),he=d(Ue),Le=u(he),Ee=d(he),Ae=u(Ee),Re=d(Ee),_e=u(Re);_e.__click=()=>a(s(Ne));var B=u(_e);{var le=Qe=>{var ut=Zu();h(Qe,ut)},Me=Qe=>{var ut=lt("Supprimer");h(Qe,ut)};I(B,Qe=>{r().loading?Qe(le):Qe(Me,!1)})}L(Qe=>{O(de,`${s(Se).quantity??""}
                ${s(Se).unit??""}`),O(Le,Qe),O(Ae,s(Se).notes||"-"),_e.disabled=r().loading},[()=>Oa(s(Se).dateTime)]),h(pe,xe)}),h(Q,we)};I(Te,Q=>{r().stockEntries.length===0?Q(Ce):Q(Ie,!1)})}L(()=>{Ia(M,`          ${r().forms.stock.notes??""}
        `),C.disabled=r().loading||!s(n)}),Ve(p,()=>r().forms.stock.quantity,Q=>r().forms.stock.quantity=Q),Xr(m,()=>r().forms.stock.unit,Q=>r().forms.stock.unit=Q),Ve(M,()=>r().forms.stock.notes,Q=>r().forms.stock.notes=Q),h(e,i),V()}Pt(["click"]);var td=(e,t)=>{e.key==="Enter"&&t()},rd=x("<option> </option>"),nd=(e,t,r)=>t(r),ad=x('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs hover:text-error p-0"><!></button></div>'),sd=x('<span class="loading loading-spinner loading-sm"></span>'),id=x('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <label class="input"><!> <input type="text" placeholder="Nom du volontaire" list="volunteers"/> <datalist id="volunteers"></datalist></label> <div class="grid-col mt-6 grid gap-2"><div class="text-base-content/70">Volontaires actuels:</div> <div class="flex flex-wrap gap-2"></div></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function od(e,t){z(t,!0);let r=Z("");const n=Y(()=>s(r).trim().length>0&&!t.modalState.whoList.includes(s(r).trim()));async function a(){!s(n)||!t.modalState||(await t.modalState.addVolunteer(s(r).trim()),N(r,""))}async function i(P){await t.modalState?.removeVolunteer(P)}var o=id(),l=u(o),c=u(l),f=d(u(c),2),v=u(f);Ca(v,{class:"h-4 w-4 opacity-50"});var _=d(v,2);_.__keydown=[td,a];var g=d(_,2);We(g,21,()=>R.uniqueWho,Ln,(P,k)=>{var S=rd(),M=u(S),b={};L(()=>{O(M,s(k)),b!==(b=s(k))&&(S.value=(S.__value=s(k))??"")}),h(P,S)});var p=d(f,2),m=d(u(p),2);We(m,20,()=>t.modalState.whoList,P=>P,(P,k)=>{var S=ad(),M=u(S),b=d(M);b.__click=[nd,i,k];var C=u(b);pt(C,{class:"h-3 w-3"}),L(()=>{O(M,`${k??""} `),b.disabled=t.modalState.loading}),h(P,S)});var $=d(p,2),w=u($);w.__click=a;var E=u(w);{var D=P=>{var k=sd();h(P,k)},T=P=>{var k=lt("Ajouter");h(P,k)};I(E,P=>{t.modalState.loading?P(D):P(T,!1)})}L(()=>w.disabled=t.modalState.loading||!s(n)),Ve(_,()=>s(r),P=>N(r,P)),h(e,o),V()}Pt(["keydown","click"]);var ld=(e,t)=>{e.key==="Enter"&&t()},cd=x("<option> </option>"),ud=x('<span class="loading loading-spinner loading-sm"></span>'),dd=(e,t,r)=>{N(t,""),N(r,"")},fd=x(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/> <datalist id="stores"></datalist></label> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function vd(e,t){z(t,!0);const r=Y(()=>t.modalState.forms.store),n=Y(()=>s(r).name||""),a=Y(()=>s(r).comment||"");let i=Z(tt(s(n))),o=Z(tt(s(a)));const l=Y(()=>s(i).trim()!==(s(r).name||"")||s(o).trim()!==(s(r).comment||""));async function c(){if(!s(l))return;const b={storeName:s(i).trim(),storeComment:s(o).trim()};await t.modalState.updateStore(b)}var f=fd(),v=u(f),_=u(v),g=d(u(_),4),p=u(g),m=u(p);vn(m,{class:"h-4 w-4 opacity-50"});var $=d(m,2);$.__keydown=[ld,c];var w=d($,2);We(w,21,()=>R.uniqueStores,Ln,(b,C)=>{var W=cd(),ge=u(W),fe={};L(()=>{O(ge,s(C)),fe!==(fe=s(C))&&(W.value=(W.__value=s(C))??"")}),h(b,W)});var E=d(p,2),D=d(g,2),T=u(D);T.__click=c;var P=u(T);{var k=b=>{var C=ud();h(b,C)},S=b=>{var C=lt("Mettre à jour");h(b,C)};I(P,b=>{t.modalState.loading?b(k):b(S,!1)})}var M=d(T,2);M.__click=[dd,i,o],L(()=>{Ia(E,`          ${s(o)??""}
        `),T.disabled=t.modalState.loading||!s(l),M.disabled=t.modalState.loading}),Ve($,()=>s(i),b=>N(i,b)),Ve(E,()=>s(o),b=>N(o,b)),h(e,f),V()}Pt(["keydown","click"]);var hd=x('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),pd=x('<tr><td class="font-medium"> </td><td> </td><td>-</td><td>-</td><td> </td></tr>'),_d=x('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),md=x('<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>');function gd(e,t){z(t,!0);const r=Y(()=>t.modalState.recipes);var n=md(),a=u(n),i=u(a);Ma(i,{class:"h-5 w-5"});var o=d(a,2);{var l=f=>{var v=hd(),_=u(v);pn(_,{class:"mx-auto mb-2 h-12 w-12"}),h(f,v)},c=f=>{var v=_d(),_=u(v),g=d(u(_));We(g,21,()=>s(r),p=>p.r,(p,m)=>{var $=pd(),w=u($),E=u(w),D=d(w),T=u(D),P=d(D,3),k=u(P);L(()=>{O(E,s(m).r),O(T,`${(s(m).q||s(m).qEq)??""} ${(s(m).u||s(m).uEq)??""}`),O(k,s(m).a||"-")}),h(p,$)}),h(f,v)};I(o,f=>{s(r).length===0?f(l):f(c,!1)})}h(e,n),V()}var bd=x('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),yd=x('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),wd=(e,t)=>t("recettes"),Sd=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),$d=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Pd=(e,t)=>t("achats"),xd=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Ed=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),kd=(e,t)=>t("stock"),Nd=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Td=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Ad=(e,t)=>t("volontaires"),Dd=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Id=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Md=(e,t)=>t("magasins"),Cd=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Rd=x('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div>',1),Od=x('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function qd(e,t){z(t,!0);let r=Bt(t,"initialTab",3,"recettes"),n=Y(()=>Du(t.productId)),a=Z(tt(r()));function i(w){N(a,w,!0)}var o=Od(),l=u(o),c=u(l),f=u(c);{var v=w=>{var E=bd(),D=q(E),T=u(D),P=d(D,2),k=u(P),S=u(k),M=d(k,2),b=d(u(M));L(()=>{O(T,s(n).product?.productName),O(S,s(n).product?.productType),O(b,` ${s(n).product?.displayTotalNeeded??""}`)}),h(w,E)},_=w=>{var E=yd();h(w,E)};I(f,w=>{s(n)&&s(n).product?w(v):w(_,!1)})}var g=d(f,2);g.__click=function(...w){t.onClose?.apply(this,w)};var p=u(g);pt(p,{class:"h-4 w-4"});var m=d(c,2);{var $=w=>{var E=Rd(),D=q(E),T=u(D);T.__click=[wd,i];var P=u(T);Ma(P,{class:"mr-1 h-5 w-5"});var k=d(P,2);{var S=B=>{var le=Sd(),Me=u(le);L(()=>O(Me,s(n).recipes.length)),h(B,le)},M=B=>{var le=$d();h(B,le)};I(k,B=>{s(n).recipes.length>0?B(S):B(M,!1)})}var b=d(T,2);b.__click=[Pd,i];var C=u(b);fn(C,{class:"mr-1 h-5 w-5"});var W=d(C,2);{var ge=B=>{var le=xd(),Me=u(le);L(()=>O(Me,s(n).purchasesList.length)),h(B,le)},fe=B=>{var le=Ed();h(B,le)};I(W,B=>{s(n).purchasesList.length>0?B(ge):B(fe,!1)})}var Te=d(b,2);Te.__click=[kd,i];var Ce=u(Te);_a(Ce,{class:"mr-1 h-5 w-5"});var Ie=d(Ce,2);{var Q=B=>{var le=Nd(),Me=u(le);L(()=>O(Me,s(n).stockEntries.length)),h(B,le)},we=B=>{var le=Td();h(B,le)};I(Ie,B=>{s(n).stockEntries.length>0?B(Q):B(we,!1)})}var A=d(Te,2);A.__click=[Ad,i];var X=u(A);Ki(X,{class:"mr-1 h-5 w-5"});var pe=d(X,2);{var Se=B=>{var le=Dd(),Me=u(le);L(()=>O(Me,s(n).product?.who.length)),h(B,le)},Ne=B=>{var le=Id();h(B,le)};I(pe,B=>{s(n).product?.who&&s(n).product?.who.length>0?B(Se):B(Ne,!1)})}var xe=d(A,2);xe.__click=[Md,i];var Ue=u(xe);vn(Ue,{class:"mr-1 h-5 w-5"});var de=d(D,2),he=u(de);{var Le=B=>{var le=Cd(),Me=u(le);pt(Me,{class:"h-4 w-4"});var Qe=d(Me,2),ut=u(Qe);L(()=>O(ut,`erreur : ${s(n).error??""}`)),h(B,le)};I(he,B=>{s(n).error&&B(Le)})}var Ee=d(he,2),Ae=u(Ee);Rl(Ae,()=>s(a),B=>{var le=j(),Me=q(le);{var Qe=xt=>{gd(xt,{get modalState(){return s(n)}})},ut=xt=>{var U=j(),Oe=q(U);{var Ct=dt=>{Hu(dt,{get modalState(){return s(n)}})},Ht=dt=>{var F=j(),br=q(F);{var yr=Et=>{ed(Et,{get modalState(){return s(n)}})},wr=Et=>{var Sr=j(),at=q(Sr);{var Rt=ft=>{od(ft,{get modalState(){return s(n)}})},Ot=ft=>{var mt=j(),Qt=q(mt);{var kt=gt=>{vd(gt,{get modalState(){return s(n)}})};I(Qt,gt=>{s(a)==="magasins"&&gt(kt)},!0)}h(ft,mt)};I(at,ft=>{s(a)==="volontaires"?ft(Rt):ft(Ot,!1)},!0)}h(Et,Sr)};I(br,Et=>{s(a)==="stock"?Et(yr):Et(wr,!1)},!0)}h(dt,F)};I(Oe,dt=>{s(a)==="achats"?dt(Ct):dt(Ht,!1)},!0)}h(xt,U)};I(Me,xt=>{s(a)==="recettes"?xt(Qe):xt(ut,!1)})}h(B,le)});var Re=d(de,2),_e=u(Re);_e.__click=function(...B){t.onClose?.apply(this,B)},L(()=>{Pe(T,1,`tab ${s(a)==="recettes"?"tab-active":""}`),Pe(b,1,`tab ${s(a)==="achats"?"tab-active":""}`),Pe(Te,1,`tab ${s(a)==="stock"?"tab-active":""}`),Pe(A,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),Pe(xe,1,`tab ${s(a)==="magasins"?"tab-active":""}`)}),h(w,E)};I(m,w=>{s(n)&&w($)})}h(e,o),V()}Pt(["click"]);var Bd=()=>R.setGroupBy("none"),Ld=()=>R.setGroupBy("store"),jd=()=>R.setGroupBy("productType"),zd=(e,t)=>R.toggleProductType(t),Vd=x("<button><!> </button>"),Wd=()=>R.toggleTemperature("frais"),Ud=()=>R.toggleTemperature("surgele"),Gd=()=>R.clearTypeAndTemperatureFilters(),Hd=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Qd=(e,t)=>R.toggleStore(t),Kd=x("<button> </button>"),Yd=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Zd=(e,t)=>R.toggleWho(t),Jd=x("<button> </button>"),Xd=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Fd=(e,t)=>{R.clearFilters(),N(t,!1)},ef=x('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function tf(e,t){z(t,!0);let r=Z(!1);const n=Y(()=>R.filters),a=Y(()=>R.uniqueStores),i=Y(()=>R.uniqueWho),o=Y(()=>R.uniqueProductTypes);var l=ef(),c=q(l),f=u(c),v=d(f,2),_=d(u(v),2),g=u(_),p=u(g),m=u(p);ma(m,{class:"w-5 h-5"});var $=d(p,2),w=u($);pt(w,{class:"w-4 h-4"});var E=d(g,2),D=d(u(E),2),T=u(D);T.__change=[Bd];var P=d(T,2);P.__change=[Ld];var k=d(P,2);k.__change=[jd];var S=d(E,2),M=u(S),b=d(u(M),2);We(b,20,()=>s(o),de=>de,(de,he)=>{const Le=Y(()=>Pn(he));var Ee=Vd();Ee.__click=[zd,he];var Ae=u(Ee);Jr(Ae,()=>s(Le).icon,(_e,B)=>{B(_e,{class:"w-3 h-3 mr-1"})});var Re=d(Ae);L(_e=>{Pe(Ee,1,`btn btn-sm ${_e??""}`),O(Re,` ${s(Le).displayName??""}`)},[()=>s(n).selectedProductTypes.length===0?"btn-soft btn-accent":s(n).selectedProductTypes.includes(he)?"btn-accent":"btn-dash btn-accent"]),h(de,Ee)});var C=d(b,2),W=u(C);W.__click=[Wd];var ge=u(W);ga(ge,{class:"w-3 h-3"});var fe=d(W,2);fe.__click=[Ud];var Te=u(fe);ba(Te,{class:"w-3 h-3"});var Ce=d(fe,2);{var Ie=de=>{var he=Hd();he.__click=[Gd];var Le=u(he);pt(Le,{class:"w-3 h-3"}),h(de,he)};I(Ce,de=>{(s(n).selectedProductTypes.length>0||s(n).selectedTemperatures.length>0)&&de(Ie)})}var Q=d(S,2);{var we=de=>{var he=Yd(),Le=u(he),Ee=d(u(Le),2);We(Ee,20,()=>s(a),Ae=>Ae,(Ae,Re)=>{var _e=Kd();_e.__click=[Qd,Re];var B=u(_e);L(le=>{Pe(_e,1,`btn btn-sm ${le??""}`),O(B,Re)},[()=>s(n).selectedStores.length===0?"btn-soft btn-accent":s(n).selectedStores.includes(Re)?"btn-accent":"btn-dash btn-accent"]),h(Ae,_e)}),h(de,he)};I(Q,de=>{s(a).length>0&&de(we)})}var A=d(Q,2);{var X=de=>{var he=Xd(),Le=u(he),Ee=d(u(Le),2);We(Ee,20,()=>s(i),Ae=>Ae,(Ae,Re)=>{var _e=Jd();_e.__click=[Zd,Re];var B=u(_e);L(le=>{Pe(_e,1,`btn btn-sm ${le??""}`),O(B,Re)},[()=>s(n).selectedWho.length===0?"btn-soft btn-accent":s(n).selectedWho.includes(Re)?"btn-accent":"btn-dash btn-accent"]),h(Ae,_e)}),h(de,he)};I(A,de=>{s(i).length>0&&de(X)})}var pe=d(A,4);pe.__click=[Fd,r];var Se=u(pe);pt(Se,{class:"w-4 h-4 mr-2"});var Ne=d(c,2),xe=u(Ne),Ue=u(xe);ma(Ue,{class:"w-6 h-6"}),L((de,he)=>{er(T,s(n).groupBy==="none"),er(P,s(n).groupBy==="store"),er(k,s(n).groupBy==="productType"),Pe(W,1,`btn btn-sm ${de??""}`),Pe(fe,1,`btn btn-sm ${he??""}`)},[()=>s(n).selectedTemperatures.length===0?"btn-soft btn-success":s(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(n).selectedTemperatures.length===0?"btn-soft btn-info":s(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Hl(f,()=>s(r),de=>N(r,de)),h(e,l),V()}Pt(["change","click"]);Pt(["mousedown"]);function rf(e,t,r,n,a){t.setDateRange(s(r),s(n)),N(a,!1)}var nf=(e,t)=>t("all"),af=(e,t)=>t("select"),sf=(e,t,r)=>t(s(r)),of=x("<button><span> </span> <!></button>"),lf=(e,t,r)=>{N(t,!1),N(r,"all")},cf=x('<div class="modal modal-open"><div class="modal-box w-full"><h3 class="mb-4 text-lg font-bold">Sélectionner une plage de dates</h3> <div class="mb-6 space-y-2"><button class="btn btn-sm btn-outline w-full">Toutes les dates</button> <div class="flex flex-wrap gap-1"></div></div> <div class="modal-action"><button class="btn">Annuler</button> <button class="btn btn-primary">Confirmer</button></div></div></div>'),uf=x('<div class="space-y-4"><div class="join w-full"><input class="join-item btn flex-1" type="radio" name="date-mode" aria-label="Toutes les dates"/> <input class="join-item btn flex-1" type="radio" name="date-mode" aria-label="Sélectionner dates"/></div> <!></div>');function df(e,t){z(t,!0);const n=[...Bt(t,"allDates",19,()=>[])()].sort();let a=Z("all"),i=n[0],o=n[n.length-1],l=Z(tt(i)),c=Z(tt(o)),f=Z(!1);function v(S){s(l)===S&&s(c)===S?(N(l,n[0],!0),N(c,n[n.length-1],!0)):new Date(S)<new Date(s(l))?N(l,S,!0):(new Date(S)>new Date(s(c))||N(l,S,!0),N(c,S,!0))}function _(S){return new Date(S)>=new Date(s(l))&&new Date(S)<=new Date(s(c))}function g(S){return new Date(S).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function p(S){const b=new Date(S).getUTCHours();return b===12?"sun":b===20?"moon":b===8?"cloud":null}function m(){N(l,n[0],!0),N(c,n[n.length-1],!0)}function $(S){N(a,S,!0),S==="all"?(t.setDateRange(i,o),m(),N(f,!1)):N(f,!0)}var w=uf(),E=u(w),D=u(E);D.__change=[nf,$];var T=d(D,2);T.__change=[af,$];var P=d(E,2);{var k=S=>{var M=cf(),b=u(M),C=d(u(b),2),W=u(C);W.__click=m;var ge=d(W,2);We(ge,21,()=>n,Ln,(Ie,Q)=>{var we=of();we.__click=[sf,v,Q];var A=u(we),X=u(A),pe=d(A,2);{var Se=xe=>{Pu(xe,{size:16})},Ne=xe=>{var Ue=j(),de=q(Ue);{var he=Ee=>{bu(Ee,{size:16})},Le=Ee=>{var Ae=j(),Re=q(Ae);{var _e=B=>{fu(B,{size:16})};I(Re,B=>{p(s(Q))==="cloud"&&B(_e)},!0)}h(Ee,Ae)};I(de,Ee=>{p(s(Q))==="moon"?Ee(he):Ee(Le,!1)},!0)}h(xe,Ue)};I(pe,xe=>{p(s(Q))==="sun"?xe(Se):xe(Ne,!1)})}L((xe,Ue)=>{Pe(we,1,`btn btn-sm ${xe??""}`),O(X,Ue)},[()=>_(s(Q))?"btn-primary":"btn-ghost",()=>g(s(Q))]),h(Ie,we)});var fe=d(C,2),Te=u(fe);Te.__click=[lf,f,a];var Ce=d(Te,2);Ce.__click=[rf,t,l,c,f],h(S,M)};I(P,S=>{s(f)&&S(k)})}L(()=>{er(D,s(a)==="all"),er(T,s(a)==="select")}),h(e,w),V()}Pt(["change","click"]);const Yr=e=>{var t=ff(),r=u(t);Qi(r,{class:"h-4 w-4 text-amber-600"}),h(e,t)};var ff=x('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),vf=()=>R.clearFilters(),hf=e=>R.setSearchQuery(e.currentTarget.value),pf=()=>R.setGroupBy("none"),_f=()=>R.setGroupBy("store"),mf=()=>R.setGroupBy("productType"),gf=(e,t)=>R.toggleProductType(t),bf=x("<button><!> </button>"),yf=()=>R.toggleTemperature("frais"),wf=()=>R.toggleTemperature("surgele"),Sf=()=>R.clearTypeAndTemperatureFilters(),$f=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Pf=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),xf=(e,t)=>R.toggleStore(t),Ef=x("<button><!> </button>"),kf=()=>R.clearStoreFilters(),Nf=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Tf=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Af=(e,t)=>R.toggleWho(t),Df=x("<button><!> </button>"),If=()=>R.clearWhoFilters(),Mf=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Cf=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Rf=()=>R.handleSort("productName"),Of=()=>R.handleSort("store"),qf=()=>R.handleSort("who"),Bf=()=>R.handleSort("productType"),Lf=x('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),jf=x('<tr class="bg-base-200 sticky top-10 z-10 font-semibold"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),zf=(e,t,r)=>t(s(r).$id,"recettes"),Vf=x('<div class="text-base-content/60 text-xs"> </div>'),Wf=x('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Uf=x('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Gf=(e,t,r)=>t(s(r).$id,"magasins"),Hf=x('<div class="tooltip tooltip-info"> </div>'),Qf=(e,t,r)=>t(s(r).$id,"volontaires"),Kf=x('<span class="badge badge-soft badge-info badge-sm"> </span>'),Yf=x('<div class="flex flex-wrap gap-1 pr-8"></div>'),Zf=(e,t,r)=>t(s(r).$id,"recettes"),Jf=x('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),Xf=(e,t,r)=>t(s(r).$id,"achats"),Ff=x("<div><!> <span> </span></div>"),ev=x('<span class="text-sm">-</span>'),tv=x('<div class="bg-warning m-auto rounded px-2 py-1"> </div>'),rv=x('<tr class="hover:bg-base-200/20 transition-colors"><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!></td></tr>'),nv=x("<!> <!>",1),av=x('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),sv=x('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div></div> <!> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function iv(e,t){z(t,!0);const r={Package:pn,MessageCircleQuestionMark:mu,ShoppingCart:fn,Clock:du,CircleCheck:cu,CircleX:uu},n=Y(()=>R.displayProducts),a=Y(()=>R.stats),i=Y(()=>R.uniqueStores),o=Y(()=>R.uniqueWho),l=Y(()=>R.uniqueProductTypes),c=Y(()=>R.filters);let f=Z(null),v=Z("recettes");function _(G,ue="recettes"){N(v,ue,!0),N(f,G,!0)}function g(){N(f,null)}var p=sv(),m=q(p),$=u(m),w=u($),E=u(w);ys(E,{class:"mr-1 h-4 w-4"});var D=d(E),T=d($,2);df(T,{get allDates(){return R.allDates},get setDateRange(){return R.setDateRange}});var P=d(T,2),k=u(P),S=u(k),M=u(S),b=u(M);ma(b,{class:"h-5 w-5"});var C=d(M,2);C.__click=[vf];var W=u(C);pt(W,{class:"h-4 w-4"});var ge=d(k,2),fe=u(ge),Te=d(u(fe),2),Ce=u(Te);$u(Ce,{class:"h-4 w-4"});var Ie=d(Ce,2);Ie.__input=[hf];var Q=d(fe,2),we=d(u(Q),2),A=u(we);A.__change=[pf];var X=d(A,2);X.__change=[_f];var pe=d(X,2);pe.__change=[mf];var Se=d(ge,2),Ne=u(Se),xe=u(Ne);{var Ue=G=>{var ue=Pf(),Fe=u(ue),Ke=d(u(Fe),2),qe=u(Ke);We(qe,16,()=>s(l),ve=>ve,(ve,$e)=>{const it=Y(()=>Pn($e));var et=bf();et.__click=[gf,$e];var bt=u(et);Jr(bt,()=>s(it).icon,(Ze,wt)=>{wt(Ze,{class:"mr-1 h-5 w-5"})});var yt=d(bt);L(Ze=>{Pe(et,1,`btn btn-sm ${Ze??""}`),O(yt,` ${s(it).displayName??""}`)},[()=>s(c).selectedProductTypes.length===0?"btn-soft btn-accent":s(c).selectedProductTypes.includes($e)?"btn-accent":"btn-dash btn-accent"]),h(ve,et)});var je=d(qe,2);je.__click=[yf];var st=u(je);ga(st,{class:"h-5 w-5"});var me=d(je,2);me.__click=[wf];var ke=u(me);ba(ke,{class:"h-5 w-5"});var be=d(me,2);{var K=ve=>{var $e=$f();$e.__click=[Sf];var it=u($e);pt(it,{class:"h-3 w-3"}),h(ve,$e)};I(be,ve=>{(s(c).selectedProductTypes.length>0||s(c).selectedTemperatures.length>0)&&ve(K)})}L((ve,$e)=>{Pe(je,1,`btn btn-sm ms-4 ${ve??""}`),Pe(me,1,`btn btn-sm ${$e??""}`)},[()=>s(c).selectedTemperatures.length===0?"btn-soft btn-success":s(c).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(c).selectedTemperatures.length===0?"btn-soft btn-info":s(c).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(G,ue)};I(xe,G=>{s(l).length>0&&G(Ue)})}var de=d(Ne,2),he=u(de);{var Le=G=>{var ue=Tf(),Fe=u(ue),Ke=d(u(Fe),2),qe=u(Ke);We(qe,16,()=>s(i),me=>me,(me,ke)=>{var be=Ef();be.__click=[xf,ke];var K=u(be);vn(K,{class:"mr-1 h-3 w-3"});var ve=d(K);L($e=>{Pe(be,1,`btn btn-xs ${$e??""}`),O(ve,` ${ke??""}`)},[()=>s(c).selectedStores.length===0?"btn-soft btn-accent":s(c).selectedStores.includes(ke)?"btn-accent":"btn-dash btn-accent"]),h(me,be)});var je=d(qe,2);{var st=me=>{var ke=Nf();ke.__click=[kf];var be=u(ke);pt(be,{class:"h-3 w-3"}),h(me,ke)};I(je,me=>{s(c).selectedStores.length>0&&me(st)})}h(G,ue)};I(he,G=>{s(i).length>0&&G(Le)})}var Ee=d(he,2);{var Ae=G=>{var ue=Cf(),Fe=u(ue),Ke=d(u(Fe),2),qe=u(Ke);We(qe,16,()=>s(o),me=>me,(me,ke)=>{var be=Df();be.__click=[Af,ke];var K=u(be);Ca(K,{class:"mr-1 h-3 w-3"});var ve=d(K);L($e=>{Pe(be,1,`btn btn-xs ${$e??""}`),O(ve,` ${ke??""}`)},[()=>s(c).selectedWho.length===0?" btn-soft btn-info":s(c).selectedWho.includes(ke)?" btn-info":"btn-dash btn-info"]),h(me,be)});var je=d(qe,2);{var st=me=>{var ke=Mf();ke.__click=[If];var be=u(ke);pt(be,{class:"h-3 w-3"}),h(me,ke)};I(je,me=>{s(c).selectedWho.length>0&&me(st)})}h(G,ue)};I(Ee,G=>{s(o).length>0&&G(Ae)})}var Re=d(P,2),_e=u(Re),B=u(_e),le=u(B),Me=u(le);Me.__click=[Rf];var Qe=u(Me),ut=u(Qe);ys(ut,{class:"h-4 w-4"});var xt=d(ut,2);{var U=G=>{var ue=lt();L(()=>O(ue,s(c).sortDirection==="asc"?"↑":"↓")),h(G,ue)};I(xt,G=>{s(c).sortColumn==="productName"&&G(U)})}var Oe=d(Me);Oe.__click=[Of];var Ct=u(Oe),Ht=u(Ct);vn(Ht,{class:"h-4 w-4"});var dt=d(Ht,2);{var F=G=>{var ue=lt();L(()=>O(ue,s(c).sortDirection==="asc"?"↑":"↓")),h(G,ue)};I(dt,G=>{s(c).sortColumn==="store"&&G(F)})}var br=d(Oe);br.__click=[qf];var yr=u(br),wr=u(yr);Ki(wr,{class:"h-4 w-4"});var Et=d(wr,2);{var Sr=G=>{var ue=lt();L(()=>O(ue,s(c).sortDirection==="asc"?"↑":"↓")),h(G,ue)};I(Et,G=>{s(c).sortColumn==="who"&&G(Sr)})}var at=d(br);at.__click=[Bf];var Rt=u(at),Ot=d(u(Rt));{var ft=G=>{var ue=lt();L(()=>O(ue,s(c).sortDirection==="asc"?"↑":"↓")),h(G,ue)};I(Ot,G=>{s(c).sortColumn==="productType"&&G(ft)})}var mt=d(at,2),Qt=u(mt),kt=u(Qt);fn(kt,{class:"h-4 w-4"});var gt=d(mt),Kt=u(gt),Yt=u(Kt);pu(Yt,{class:"h-4 w-4"});var ar=d(B);We(ar,21,()=>Object.entries(s(n)),([G,ue])=>G,(G,ue)=>{var Fe=Y(()=>ks(s(ue),2));let Ke=()=>s(Fe)[0],qe=()=>s(Fe)[1];var je=nv(),st=q(je);{var me=be=>{const K=Y(()=>Pn(Ke()));var ve=jf(),$e=u(ve),it=u($e),et=u(it);{var bt=Ze=>{var wt=lt();L(()=>O(wt,`🏪 ${Ke()??""} (${qe().length??""})`)),h(Ze,wt)},yt=Ze=>{var wt=j(),zr=q(wt);{var Er=se=>{var qt=Lf(),_n=u(qt);Jr(_n,()=>s(K).icon,(Un,Gn)=>{Gn(Un,{class:"h-4 w-4"})});var mn=d(_n,2),Wn=u(mn),kr=d(mn,2),gn=u(kr);L(()=>{O(Wn,s(K).displayName),O(gn,`(${qe().length??""})`)}),h(se,qt)},Vr=se=>{var qt=lt();L(()=>O(qt,`📦 ${Ke()??""} (${qe().length??""})`)),h(se,qt)};I(zr,se=>{s(c).groupBy==="productType"?se(Er):se(Vr,!1)},!0)}h(Ze,wt)};I(et,Ze=>{s(c).groupBy==="store"?Ze(bt):Ze(yt,!1)})}h(be,ve)};I(st,be=>{Ke()!==""&&be(me)})}var ke=d(st,2);We(ke,17,()=>Nu(qe(),s(c)),be=>be.$id,(be,K)=>{const ve=Y(()=>Pn(s(K).productType)),$e=Y(()=>Tu(s(K).purchases||[]));var it=rv(),et=u(it);et.__click=[zf,_,K];var bt=u(et),yt=u(bt),Ze=u(yt),wt=u(Ze),zr=d(Ze,2);{var Er=H=>{var ce=Vf(),ze=u(ce);L(()=>O(ze,`Ancien: ${s(K).previousNames[0]??""}`)),h(H,ce)};I(zr,H=>{s(K).previousNames&&s(K).previousNames.length>0&&H(Er)})}var Vr=d(yt,2),se=u(Vr);{var qt=H=>{var ce=Wf(),ze=u(ce);ga(ze,{class:"text-success h-4 w-4"}),h(H,ce)};I(se,H=>{s(K).pFrais&&H(qt)})}var _n=d(se,2);{var mn=H=>{var ce=Uf(),ze=u(ce);ba(ze,{class:"text-info h-4 w-4"}),h(H,ce)};I(_n,H=>{s(K).pSurgel&&H(mn)})}var Wn=d(bt,2);Yr(Wn);var kr=d(et);kr.__click=[Gf,_,K];var gn=u(kr);{var Un=H=>{var ce=Hf(),ze=u(ce);L(()=>{Nn(ce,"data-tip",s(K).storeInfo.storeComment),O(ze,s(K).storeInfo.storeName||"-")}),h(H,ce)},Gn=H=>{var ce=lt();L(()=>O(ce,s(K).storeInfo?.storeName||"-")),h(H,ce)};I(gn,H=>{s(K).storeInfo?.storeComment?H(Un):H(Gn,!1)})}var Yi=d(gn,2);Yr(Yi);var Hn=d(kr);Hn.__click=[Qf,_,K];var qa=u(Hn);{var Zi=H=>{var ce=Yf();We(ce,20,()=>s(K).who,ze=>ze,(ze,Zt)=>{var or=Kf(),Wr=u(or);L(()=>O(Wr,Zt)),h(ze,or)}),h(H,ce)},Ji=H=>{var ce=lt("-");h(H,ce)};I(qa,H=>{s(K).who&&s(K).who.length>0?H(Zi):H(Ji,!1)})}var Xi=d(qa,2);Yr(Xi);var Qn=d(Hn),Fi=u(Qn),Ba=u(Fi);Jr(Ba,()=>s(ve).icon,(H,ce)=>{ce(H,{class:"h-3 w-3"})});var eo=d(Ba),Kn=d(Qn);Kn.__click=[Zf,_,K];var La=u(Kn),to=u(La),ja=d(La,2);{var ro=H=>{var ce=Jf(),ze=u(ce),Zt=u(ze),or=d(Zt);Ma(or,{class:"h-3 w-3"});var Wr=d(ze,2),bn=u(Wr),Ur=d(bn);Eu(Ur,{class:"h-3 w-3"}),L(()=>{O(Zt,`${s(K)?.nbRecipes??""} `),O(bn,`${s(K)?.totalAssiettes??""} `)}),h(H,ce)};I(ja,H=>{(s(K).nbRecipes||s(K).totalAssiettes)&&H(ro)})}var no=d(ja,2);Yr(no);var Yn=d(Kn);Yn.__click=[Xf,_,K];var za=u(Yn),Va=u(za);We(Va,17,()=>s($e),H=>H.status,(H,ce)=>{const ze=Y(()=>r[s(ce).icon]);var Zt=Ff(),or=u(Zt);Jr(or,()=>s(ze),(Ur,fo)=>{fo(Ur,{class:"h-4 w-4"})});var Wr=d(or,2),bn=u(Wr);L(Ur=>{Pe(Zt,1,`badge badge-soft flex items-center gap-2 ${s(ce).badgeClass??""}`),O(bn,Ur)},[()=>Ra(s(ce).quantity,s(ce).unit)]),h(H,Zt)});var ao=d(Va,2);{var so=H=>{var ce=ev();h(H,ce)};I(ao,H=>{s($e).length===0&&H(so)})}var io=d(za,2);Yr(io);var oo=d(Yn),lo=u(oo);{var co=H=>{var ce=tv(),ze=u(ce);L(()=>O(ze,s(K).displayMissingQuantity)),h(H,ce)},uo=H=>{lu(H,{size:28,strokeWidth:3,class:"text-success m-auto"})};I(lo,H=>{s(K).displayMissingQuantity!=="✅ Complet"?H(co):H(uo,!1)})}L(()=>{O(wt,s(K).productName),Pe(kr,1,`${s(c).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),Pe(Qn,1,hi(s(c).groupBy==="productType"?"hidden":"")),O(eo,` ${s(ve).displayName??""}`),O(to,s(K).displayTotalNeeded??"-")}),h(be,it)}),h(G,je)});var sr=d(_e,2);{var $r=G=>{var ue=av();h(G,ue)};I(sr,G=>{Object.values(s(n)).flat().length===0&&G($r)})}var ir=d(m,2);{var Pr=G=>{qd(G,{get productId(){return s(f)},get initialTab(){return s(v)},onClose:g})};I(ir,G=>{s(f)&&G(Pr)})}var xr=d(ir,2);tf(xr,{}),L(()=>{O(D,` ${s(a).total??""}`),Ia(Ie,s(c).searchQuery),er(A,s(c).groupBy==="none"),er(X,s(c).groupBy==="store"),er(pe,s(c).groupBy==="productType"),Pe(Oe,1,`hover:bg-base-100 cursor-pointer text-center ${s(c).groupBy==="store"?"hidden":""}`),Pe(at,1,`hover:bg-base-100 cursor-pointer text-center ${s(c).groupBy==="productType"?"hidden":""}`)}),h(e,p),V()}Pt(["click","input","change"]);Ko();var ov=x('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function lv(e){var t=ov();h(e,t)}var cv=x('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function uv(e,t){var r=cv(),n=d(u(r),2),a=d(u(n),2),i=u(a);L(()=>O(i,t.message)),h(e,r)}var dv=x('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function fv(e,t){var r=dv(),n=u(r),a=u(n);xu(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=d(a,2),o=d(u(i),2),l=u(o);L(()=>O(l,t.message||"Erreur inconnue")),h(e,r)}var vv=x('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),hv=x('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),pv=x('<div class="text-base-content/60"> </div>'),_v=x('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),mv=x('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),gv=x('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),bv=x('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function yv(e,t){z(t,!0);let r,n=Z(null),a=Z(!0),i=Z(!1);bi(async()=>{r=Dc();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await R.initialize(r)}catch(A){const X=A instanceof Error?A.message:"Erreur lors de l'initialisation";N(n,X,!0),console.error("[App] Erreur initialisation:",A)}finally{N(a,!1)}}),Zl(()=>{R.destroy()});async function o(){if(!(!r||s(i))){N(i,!0);try{await R.forceReload(r)}catch(A){console.error("[App] Erreur lors du rechargement forcé:",A)}finally{N(i,!1)}}}const l=Y(()=>s(n)||R.error),c=Y(()=>s(a)||R.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=bv(),_=u(v),g=u(_),p=u(g),m=d(u(p),2),$=u(m);{var w=A=>{var X=vv();h(A,X)};I($,A=>{R.realtimeConnected&&A(w)})}var E=d($,2);{var D=A=>{var X=hv();h(A,X)};I(E,A=>{R.syncing&&A(D)})}var T=d(E,2);{var P=A=>{var X=pv(),pe=u(X);L(Se=>O(pe,`Maj: ${Se??""}`),[()=>new Date(R.lastSync).toLocaleTimeString()]),h(A,X)};I(T,A=>{R.lastSync&&A(P)})}var k=d(T,2);{var S=A=>{var X=_v();let pe;X.__click=o;var Se=u(X);yu(Se,{class:"h-4 w-4"}),L(Ne=>{pe=Pe(X,1,"btn btn-outline btn-sm",null,pe,Ne),X.disabled=s(i)||R.loading},[()=>({loading:s(i)||R.loading})]),h(A,X)};I(k,A=>{s(n)||A(S)})}var M=d(k,2);{var b=A=>{var X=mv(),pe=u(X),Se=u(pe);_u(Se,{class:"mr-2 h-4 w-4"}),L(()=>Nn(pe,"href",f)),h(A,X)};I(M,A=>{s(n)&&A(b)})}var C=d(_,2),W=u(C);{var ge=A=>{fv(A,{get message(){return s(l)}})},fe=A=>{var X=j(),pe=q(X);{var Se=Ne=>{uv(Ne,{get message(){return s(l)}})};I(pe,Ne=>{s(l)&&Ne(Se)},!0)}h(A,X)};I(W,A=>{s(n)?A(ge):A(fe,!1)})}var Te=d(W,2);{var Ce=A=>{lv(A)};I(Te,A=>{s(c)&&A(Ce)})}var Ie=d(Te,2);{var Q=A=>{iv(A,{})},we=A=>{var X=j(),pe=q(X);{var Se=Ne=>{var xe=gv();h(Ne,xe)};I(pe,Ne=>{!R.loading&&!s(n)&&Ne(Se)},!0)}h(A,X)};I(Ie,A=>{R.enrichedProducts.length>0?A(Q):A(we,!1)})}h(e,v),V()}Pt(["click"]);Il(yv,{target:document.getElementById("app_products")});
