(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const Ts=!1;var An=Array.isArray,go=Array.prototype.indexOf,xa=Array.from,sa=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,bo=Object.getOwnPropertyDescriptors,yo=Object.prototype,wo=Array.prototype,As=Object.getPrototypeOf,Ga=Object.isExtensible;function Yr(e){return typeof e=="function"}const ee=()=>{};function So(e){for(var t=0;t<e.length;t++)e[t]()}function Ds(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function Is(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const nt=2,$a=4,Pa=8,hr=16,Vt=32,pr=64,Ea=128,gt=256,En=512,Je=1024,ct=2048,rr=4096,$t=8192,_r=16384,Na=32768,mr=65536,Ha=1<<17,xo=1<<18,zr=1<<19,$o=1<<20,ia=1<<21,Dn=1<<22,ur=1<<23,dr=Symbol("$state"),Ms=Symbol("legacy props"),Po=Symbol(""),rn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Cs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Eo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function No(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ko(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function To(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Ao(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Do(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Io(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Mo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Co(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ro(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const In=1,Mn=2,Rs=4,Oo=8,qo=16,Bo=1,Lo=2,jo=4,zo=8,Vo=16,Wo=1,Uo=2,Be=Symbol(),Go="http://www.w3.org/1999/xhtml",Ho="http://www.w3.org/2000/svg",Qo="@attach";function Ko(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Yo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Jo=!1;function Os(e){return e===this.v}function qs(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Zo(e,t){return e!==t}function Bs(e){return!qs(e,this.v)}let Vr=!1,Xo=!1;function Fo(){Vr=!0}let Ie=null;function Cr(e){Ie=e}function z(e,t=!1,r){Ie={p:Ie,c:null,e:null,s:e,x:null,l:Vr&&!t?{s:null,u:null,$:[]}:null}}function V(e){var t=Ie,r=t.e;if(r!==null){t.e=null;for(var n of r)ei(n)}return Ie=t.p,{}}function Wr(){return!Vr||Ie!==null&&Ie.l===null}let cr=[];function Ls(){var e=cr;cr=[],So(e)}function fr(e){if(cr.length===0&&!nn){var t=cr;queueMicrotask(()=>{t===cr&&Ls()})}cr.push(e)}function el(){for(;cr.length>0;)Ls()}const tl=new WeakMap;function js(e){var t=oe;if(t===null)return le.f|=ur,e;if((t.f&Na)===0){if((t.f&Ea)===0)throw!t.parent&&e instanceof Error&&zs(e),e;t.b.error(e)}else Rr(e,t)}function Rr(e,t){for(;t!==null;){if((t.f&Ea)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&zs(e),e}function zs(e){const t=tl.get(e);t&&(sa(e,"message",{value:t.message}),sa(e,"stack",{value:t.stack}))}const wn=new Set;let $e=null,xn=null,oa=new Set,Dt=[],Cn=null,la=!1,nn=!1;class _t{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#o=[];#s=[];#i=[];#n=[];#a=[];#d=[];skipped_effects=new Set;process(t){Dt=[],xn=null;var r=_t.apply(this);for(const i of t)this.#f(i);if(this.#c===0){this.#v();var n=this.#s,a=this.#i;this.#s=[],this.#i=[],this.#n=[],xn=this,$e=null,Qa(n),Qa(a),xn=null,this.#u?.resolve()}else this.#l(this.#s),this.#l(this.#i),this.#l(this.#n);r();for(const i of this.#o)ln(i);this.#o=[]}#f(t){t.f^=Je;for(var r=t.first;r!==null;){var n=r.f,a=(n&(Vt|pr))!==0,i=a&&(n&Je)!==0,o=i||(n&$t)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){a?r.f^=Je:(n&$a)!==0?this.#i.push(r):(n&Je)===0&&((n&Dn)!==0&&r.b?.is_pending()?this.#o.push(r):Ln(r)&&((r.f&hr)!==0&&this.#n.push(r),ln(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#l(t){for(const r of t)((r.f&ct)!==0?this.#a:this.#d).push(r),Fe(r,Je);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){$e=this}deactivate(){$e=null}flush(){if(Dt.length>0){if(this.activate(),Vs(),$e!==null&&$e!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of oa)if(oa.delete(t),t(),$e!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),wn.size>1){this.#e.clear();let t=!0;for(const r of wn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;Ws(n)}if(Dt.length>0){$e=r;const n=_t.apply(r);for(const a of Dt)r.#f(a);Dt=[],n()}}$e=null}wn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#a)Fe(t,ct),vr(t);for(const t of this.#d)Fe(t,rr),vr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=Ds()).promise}static ensure(){if($e===null){const t=$e=new _t;wn.add($e),nn||_t.enqueue(()=>{$e===t&&t.flush()})}return $e}static enqueue(t){fr(t)}static apply(t){return ee}}function rl(e){var t=nn;nn=!0;try{for(var r;;){if(el(),Dt.length===0&&($e?.flush(),Dt.length===0))return Cn=null,r;Vs()}}finally{nn=t}}function Vs(){var e=Ir;la=!0;try{var t=0;for(Za(!0);Dt.length>0;){var r=_t.ensure();if(t++>1e3){var n,a;nl()}r.process(Dt),Ft.clear()}}finally{la=!1,Za(e),Cn=null}}function nl(){try{Ao()}catch(e){Rr(e,Cn)}}let lr=null;function Qa(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(_r|$t))===0&&Ln(n)&&(lr=[],ln(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?ni(n):n.fn=null),lr?.length>0)){Ft.clear();for(const a of lr)ln(a);lr=[]}}lr=null}}function Ws(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&nt)!==0?Ws(t):(r&(Dn|hr))!==0&&(Fe(t,ct),vr(t))}}function vr(e){for(var t=Cn=e;t.parent!==null;){t=t.parent;var r=t.f;if(la&&t===oe&&(r&hr)!==0)return;if((r&(pr|Vt))!==0){if((r&Je)===0)return;t.f^=Je}}Dt.push(t)}function Us(e){let t=0,r=er(0),n;return()=>{bl()&&(s(r),Ma(()=>(t===0&&(n=Ur(()=>e(()=>It(r)))),t+=1,()=>{fr(()=>{t-=1,t===0&&(n?.(),n=void 0,It(r))})})))}}var al=mr|zr|Ea;function sl(e,t,r){new il(e,t,r)}class il{parent;#e=!1;#r;#c=null;#u;#o;#s;#i=null;#n=null;#a=null;#d=null;#f=0;#l=0;#v=!1;#h=null;#p=()=>{this.#h&&Or(this.#h,this.#f)};#$=Us(()=>(this.#h=er(this.#f),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#o=n,this.parent=oe.b,this.#e=!!this.#u.pending,this.#s=Gt(()=>{oe.b=this;{try{this.#i=Ue(()=>n(this.#r))}catch(a){this.error(a)}this.#l>0?this.#b():this.#e=!1}},al)}#t(){try{this.#i=Ue(()=>this.#o(this.#r))}catch(t){this.error(t)}this.#e=!1}#P(){const t=this.#u.pending;t&&(this.#n=Ue(()=>t(this.#r)),_t.enqueue(()=>{this.#i=this.#g(()=>(_t.ensure(),Ue(()=>this.#o(this.#r)))),this.#l>0?this.#b():(Lt(this.#n,()=>{this.#n=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#g(t){var r=oe,n=le,a=Ie;Mt(this.#s),rt(this.#s),Cr(this.#s.ctx);try{return t()}catch(i){return js(i),null}finally{Mt(r),rt(n),Cr(a)}}#b(){const t=this.#u.pending;this.#i!==null&&(this.#d=document.createDocumentFragment(),ol(this.#i,this.#d)),this.#n===null&&(this.#n=Ue(()=>t(this.#r)))}#y(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#y(t);return}this.#l+=t,this.#l===0&&(this.#e=!1,this.#n&&Lt(this.#n,()=>{this.#n=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),fr(()=>{_t.ensure().flush()}))}update_pending_count(t){this.#y(t),this.#f+=t,oa.add(this.#p)}get_effect_pending(){return this.#$(),s(this.#h)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#i&&(He(this.#i),this.#i=null),this.#n&&(He(this.#n),this.#n=null),this.#a&&(He(this.#a),this.#a=null);var a=!1,i=!1;const o=()=>{if(a){Yo();return}a=!0,i&&Ro(),_t.ensure(),this.#f=0,this.#a!==null&&Lt(this.#a,()=>{this.#a=null}),this.#e=this.has_pending_snippet(),this.#i=this.#g(()=>(this.#v=!1,Ue(()=>this.#o(this.#r)))),this.#l>0?this.#b():this.#e=!1};var l=le;try{rt(null),i=!0,r?.(t,o),i=!1}catch(c){Rr(c,this.#s&&this.#s.parent)}finally{rt(l)}n&&fr(()=>{this.#a=this.#g(()=>{this.#v=!0;try{return Ue(()=>{n(this.#r,()=>t,()=>o)})}catch(c){return Rr(c,this.#s.parent),null}finally{this.#v=!1}})})}}function ol(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:pn(r);t.append(r),r=a}}function Gs(e,t,r){const n=Wr()?Rn:ka;if(t.length===0){r(e.map(n));return}var a=$e,i=oe,o=ll();Promise.all(t.map(l=>cl(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(c){(i.f&_r)===0&&Rr(c,i)}a?.deactivate(),Hs()}).catch(l=>{Rr(l,i)})}function ll(){var e=oe,t=le,r=Ie,n=$e;return function(){Mt(e),rt(t),Cr(r),n?.activate()}}function Hs(){Mt(null),rt(null),Cr(null)}function Rn(e){var t=nt|ct,r=le!==null&&(le.f&nt)!==0?le:null;return oe===null||r!==null&&(r.f&gt)!==0?t|=gt:oe.f|=zr,{ctx:Ie,deps:null,effects:null,equals:Os,f:t,fn:e,reactions:null,rv:0,v:Be,wv:0,parent:r??oe,ac:null}}function cl(e,t){let r=oe;r===null&&Eo();var n=r.b,a=void 0,i=er(Be),o=!le,l=new Map;return wl(()=>{var c=Ds();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(m){c.reject(m)}var f=$e,v=n.is_pending();o&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(rn),l.set(f,c)));const _=(m,p=void 0)=>{v||f.activate(),p?p!==rn&&(i.f|=ur,Or(i,p)):((i.f&ur)!==0&&(i.f^=ur),Or(i,m)),o&&(n.update_pending_count(-1),v||f.decrement()),Hs()};c.promise.then(_,m=>_(null,m||"unknown"))}),Fs(()=>{for(const c of l.values())c.reject(rn)}),new Promise(c=>{function f(v){function _(){v===a?c(i):f(a)}v.then(_,_)}f(a)})}function H(e){const t=Rn(e);return ii(t),t}function ka(e){const t=Rn(e);return t.equals=Bs,t}function Qs(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)He(t[r])}}function ul(e){for(var t=e.parent;t!==null;){if((t.f&nt)===0)return t;t=t.parent}return null}function Ta(e){var t,r=oe;Mt(ul(e));try{Qs(e),t=ui(e)}finally{Mt(r)}return t}function Ks(e){var t=Ta(e);if(e.equals(t)||(e.v=t,e.wv=li()),!gr){var r=(Zt||(e.f&gt)!==0)&&e.deps!==null?rr:Je;Fe(e,r)}}const Ft=new Map;function er(e,t){var r={f:0,v:e,reactions:null,equals:Os,rv:0,wv:0};return r}function J(e,t){const r=er(e);return ii(r),r}function dl(e,t=!1,r=!0){const n=er(e);return t||(n.equals=Bs),Vr&&r&&Ie!==null&&Ie.l!==null&&(Ie.l.s??=[]).push(n),n}function A(e,t,r=!1){le!==null&&(!xt||(le.f&Ha)!==0)&&Wr()&&(le.f&(nt|hr|Dn|Ha))!==0&&!jt?.includes(e)&&Co();let n=r?Ge(t):t;return Or(e,n)}function Or(e,t){if(!e.equals(t)){var r=e.v;gr?Ft.set(e,t):Ft.set(e,r),e.v=t;var n=_t.ensure();n.capture(e,r),(e.f&nt)!==0&&((e.f&ct)!==0&&Ta(e),Fe(e,(e.f&gt)===0?Je:rr)),e.wv=li(),Ys(e,ct),Wr()&&oe!==null&&(oe.f&Je)!==0&&(oe.f&(Vt|pr))===0&&(pt===null?$l([e]):pt.push(e))}return t}function It(e){A(e,e.v+1)}function Ys(e,t){var r=e.reactions;if(r!==null)for(var n=Wr(),a=r.length,i=0;i<a;i++){var o=r[i],l=o.f;if(!(!n&&o===oe)){var c=(l&ct)===0;c&&Fe(o,t),(l&nt)!==0?Ys(o,rr):c&&((l&hr)!==0&&lr!==null&&lr.push(o),vr(o))}}}function Ge(e){if(typeof e!="object"||e===null||dr in e)return e;const t=As(e);if(t!==yo&&t!==wo)return e;var r=new Map,n=An(e),a=J(0),i=zt,o=l=>{if(zt===i)return l();var c=le,f=zt;rt(null),Fa(i);var v=l();return rt(c),Fa(f),v};return n&&r.set("length",J(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Io();var v=r.get(c);return v===void 0?v=o(()=>{var _=J(f.value);return r.set(c,_),_}):A(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=o(()=>J(Be));r.set(c,v),It(a)}}else A(f,Be),It(a);return!0},get(l,c,f){if(c===dr)return e;var v=r.get(c),_=c in l;if(v===void 0&&(!_||Xt(l,c)?.writable)&&(v=o(()=>{var p=Ge(_?l[c]:Be),g=J(p);return g}),r.set(c,v)),v!==void 0){var m=s(v);return m===Be?void 0:m}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=s(v))}else if(f===void 0){var _=r.get(c),m=_?.v;if(_!==void 0&&m!==Be)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(l,c){if(c===dr)return!0;var f=r.get(c),v=f!==void 0&&f.v!==Be||Reflect.has(l,c);if(f!==void 0||oe!==null&&(!v||Xt(l,c)?.writable)){f===void 0&&(f=o(()=>{var m=v?Ge(l[c]):Be,p=J(m);return p}),r.set(c,f));var _=s(f);if(_===Be)return!1}return v},set(l,c,f,v){var _=r.get(c),m=c in l;if(n&&c==="length")for(var p=f;p<_.v;p+=1){var g=r.get(p+"");g!==void 0?A(g,Be):p in l&&(g=o(()=>J(Be)),r.set(p+"",g))}if(_===void 0)(!m||Xt(l,c)?.writable)&&(_=o(()=>J(void 0)),A(_,Ge(f)),r.set(c,_));else{m=_.v!==Be;var x=o(()=>Ge(f));A(_,x)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(v,f),!m){if(n&&typeof c=="string"){var E=r.get("length"),M=Number(c);Number.isInteger(M)&&M>=E.v&&A(E,M+1)}It(a)}return!0},ownKeys(l){s(a);var c=Reflect.ownKeys(l).filter(_=>{var m=r.get(_);return m===void 0||m.v!==Be});for(var[f,v]of r)v.v!==Be&&!(f in l)&&c.push(f);return c},setPrototypeOf(){Mo()}})}function Ka(e){try{if(e!==null&&typeof e=="object"&&dr in e)return e[dr]}catch{}return e}function fl(e,t){return Object.is(Ka(e),Ka(t))}var Ya,Js,Zs,Xs;function vl(){if(Ya===void 0){Ya=window,Js=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Zs=Xt(t,"firstChild").get,Xs=Xt(t,"nextSibling").get,Ga(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Ga(r)&&(r.__t=void 0)}}function Wt(e=""){return document.createTextNode(e)}function qr(e){return Zs.call(e)}function pn(e){return Xs.call(e)}function u(e,t){return qr(e)}function B(e,t=!1){{var r=qr(e);return r instanceof Comment&&r.data===""?pn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=pn(n);return n}function hl(e){e.textContent=""}function On(){return!1}function pl(e,t){if(t){const r=document.body;e.autofocus=!0,fr(()=>{document.activeElement===r&&e.focus()})}}let Ja=!1;function _l(){Ja||(Ja=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function qn(e){var t=le,r=oe;rt(null),Mt(null);try{return e()}finally{rt(t),Mt(r)}}function Aa(e,t,r,n=r){e.addEventListener(t,()=>qn(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),_l()}function ml(e){oe===null&&le===null&&To(),le!==null&&(le.f&gt)!==0&&oe===null&&ko(),gr&&No()}function gl(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Ut(e,t,r,n=!0){var a=oe;a!==null&&(a.f&$t)!==0&&(e|=$t);var i={ctx:Ie,deps:null,nodes_start:null,nodes_end:null,f:e|ct,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{ln(i),i.f|=Na}catch(c){throw He(i),c}else t!==null&&vr(i);if(n){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&zr)===0&&(o=o.first),o!==null&&(o.parent=a,a!==null&&gl(o,a),le!==null&&(le.f&nt)!==0&&(e&pr)===0)){var l=le;(l.effects??=[]).push(o)}}return i}function bl(){return le!==null&&!xt}function Fs(e){const t=Ut(Pa,null,!1);return Fe(t,Je),t.teardown=e,t}function Da(e){ml();var t=oe.f,r=!le&&(t&Vt)!==0&&(t&Na)===0;if(r){var n=Ie;(n.e??=[]).push(e)}else return ei(e)}function ei(e){return Ut($a|$o,e,!1)}function yl(e){_t.ensure();const t=Ut(pr|zr,e,!0);return(r={})=>new Promise(n=>{r.outro?Lt(t,()=>{He(t),n(void 0)}):(He(t),n(void 0))})}function Ia(e){return Ut($a,e,!1)}function wl(e){return Ut(Dn|zr,e,!0)}function Ma(e,t=0){return Ut(Pa|t,e,!0)}function j(e,t=[],r=[]){Gs(t,r,n=>{Ut(Pa,()=>e(...n.map(s)),!0)})}function Gt(e,t=0){var r=Ut(hr|t,e,!0);return r}function Ue(e,t=!0){return Ut(Vt|zr,e,!0,t)}function ti(e){var t=e.teardown;if(t!==null){const r=gr,n=le;Xa(!0),rt(null);try{t.call(null)}finally{Xa(r),rt(n)}}}function ri(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&qn(()=>{a.abort(rn)});var n=r.next;(r.f&pr)!==0?r.parent=null:He(r,t),r=n}}function Sl(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Vt)===0&&He(t),t=r}}function He(e,t=!0){var r=!1;(t||(e.f&xo)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(xl(e.nodes_start,e.nodes_end),r=!0),ri(e,t&&!r),Nn(e,0),Fe(e,_r);var n=e.transitions;if(n!==null)for(const i of n)i.stop();ti(e);var a=e.parent;a!==null&&a.first!==null&&ni(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function xl(e,t){for(;e!==null;){var r=e===t?null:pn(e);e.remove(),e=r}}function ni(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Lt(e,t){var r=[];Ca(e,r,!0),ai(r,()=>{He(e),t&&t()})}function ai(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function Ca(e,t,r){if((e.f&$t)===0){if(e.f^=$t,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var a=n.next,i=(n.f&mr)!==0||(n.f&Vt)!==0;Ca(n,t,i?r:!1),n=a}}}function Bn(e){si(e,!0)}function si(e,t){if((e.f&$t)!==0){e.f^=$t,(e.f&Je)===0&&(Fe(e,ct),vr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&mr)!==0||(r.f&Vt)!==0;si(r,a?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let Ir=!1;function Za(e){Ir=e}let gr=!1;function Xa(e){gr=e}let le=null,xt=!1;function rt(e){le=e}let oe=null;function Mt(e){oe=e}let jt=null;function ii(e){le!==null&&(jt===null?jt=[e]:jt.push(e))}let Xe=null,lt=0,pt=null;function $l(e){pt=e}let oi=1,on=0,zt=on;function Fa(e){zt=e}let Zt=!1;function li(){return++oi}function Ln(e){var t=e.f;if((t&ct)!==0)return!0;if((t&rr)!==0){var r=e.deps,n=(t&gt)!==0;if(r!==null){var a,i,o=(t&En)!==0,l=n&&oe!==null&&!Zt,c=r.length;if((o||l)&&(oe===null||(oe.f&_r)===0)){var f=e,v=f.parent;for(a=0;a<c;a++)i=r[a],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=En),l&&v!==null&&(v.f&gt)===0&&(f.f^=gt)}for(a=0;a<c;a++)if(i=r[a],Ln(i)&&Ks(i),i.wv>e.wv)return!0}(!n||oe!==null&&!Zt)&&Fe(e,Je)}return!1}function ci(e,t,r=!0){var n=e.reactions;if(n!==null&&!jt?.includes(e))for(var a=0;a<n.length;a++){var i=n[a];(i.f&nt)!==0?ci(i,t,!1):t===i&&(r?Fe(i,ct):(i.f&Je)!==0&&Fe(i,rr),vr(i))}}function ui(e){var t=Xe,r=lt,n=pt,a=le,i=Zt,o=jt,l=Ie,c=xt,f=zt,v=e.f;Xe=null,lt=0,pt=null,Zt=(v&gt)!==0&&(xt||!Ir||le===null),le=(v&(Vt|pr))===0?e:null,jt=null,Cr(e.ctx),xt=!1,zt=++on,e.ac!==null&&(qn(()=>{e.ac.abort(rn)}),e.ac=null);try{e.f|=ia;var _=e.fn,m=_(),p=e.deps;if(Xe!==null){var g;if(Nn(e,lt),p!==null&&lt>0)for(p.length=lt+Xe.length,g=0;g<Xe.length;g++)p[lt+g]=Xe[g];else e.deps=p=Xe;if(!Zt||(v&nt)!==0&&e.reactions!==null)for(g=lt;g<p.length;g++)(p[g].reactions??=[]).push(e)}else p!==null&&lt<p.length&&(Nn(e,lt),p.length=lt);if(Wr()&&pt!==null&&!xt&&p!==null&&(e.f&(nt|rr|ct))===0)for(g=0;g<pt.length;g++)ci(pt[g],e);return a!==null&&a!==e&&(on++,pt!==null&&(n===null?n=pt:n.push(...pt))),(e.f&ur)!==0&&(e.f^=ur),m}catch(x){return js(x)}finally{e.f^=ia,Xe=t,lt=r,pt=n,le=a,Zt=i,jt=o,Cr(l),xt=c,zt=f}}function Pl(e,t){let r=t.reactions;if(r!==null){var n=go.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&nt)!==0&&(Xe===null||!Xe.includes(t))&&(Fe(t,rr),(t.f&(gt|En))===0&&(t.f^=En),Qs(t),Nn(t,0))}function Nn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Pl(e,r[n])}function ln(e){var t=e.f;if((t&_r)===0){Fe(e,Je);var r=oe,n=Ir;oe=e,Ir=!0;try{(t&hr)!==0?Sl(e):ri(e),ti(e);var a=ui(e);e.teardown=typeof a=="function"?a:null,e.wv=oi;var i;Ts&&Xo&&(e.f&ct)!==0&&e.deps}finally{Ir=n,oe=r}}}async function El(){await Promise.resolve(),rl()}function s(e){var t=e.f,r=(t&nt)!==0;if(le!==null&&!xt){var n=oe!==null&&(oe.f&_r)!==0;if(!n&&!jt?.includes(e)){var a=le.deps;if((le.f&ia)!==0)e.rv<on&&(e.rv=on,Xe===null&&a!==null&&a[lt]===e?lt++:Xe===null?Xe=[e]:(!Zt||!Xe.includes(e))&&Xe.push(e));else{(le.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[le]:i.includes(le)||i.push(le)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&gt)===0&&(o.f^=gt)}if(gr){if(Ft.has(e))return Ft.get(e);if(r){o=e;var c=o.v;return((o.f&Je)===0&&o.reactions!==null||di(o))&&(c=Ta(o)),Ft.set(o,c),c}}else r&&(o=e,Ln(o)&&Ks(o));if((e.f&ur)!==0)throw e.v;return e.v}function di(e){if(e.v===Be)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ft.has(t)||(t.f&nt)!==0&&di(t))return!0;return!1}function Ur(e){var t=xt;try{return xt=!0,e()}finally{xt=t}}const Nl=-7169;function Fe(e,t){e.f=e.f&Nl|t}function kl(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Tl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Al(e){return Tl.includes(e)}const Dl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Il(e){return e=e.toLowerCase(),Dl[e]??e}const Ml=["touchstart","touchmove"];function Cl(e){return Ml.includes(e)}const fi=new Set,ca=new Set;function vi(e,t,r,n={}){function a(i){if(n.capture||Fr.call(t,i),!i.cancelBubble)return qn(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?fr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function es(e,t,r,n={}){var a=vi(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function bt(e){for(var t=0;t<e.length;t++)fi.add(e[t]);for(var r of ca)r(e)}let ts=null;function Fr(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],i=a[0]||e.target;ts=e;var o=0,l=ts===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(o=c)}if(i=a[o]||e.target,i!==t){sa(e,"currentTarget",{configurable:!0,get(){return i||r}});var v=le,_=oe;rt(null),Mt(null);try{for(var m,p=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var x=i["__"+n];if(x!=null&&(!i.disabled||e.target===i))if(An(x)){var[b,...E]=x;b.apply(i,[e,...E])}else x.call(i,e)}catch(M){m?p.push(M):m=M}if(e.cancelBubble||g===t||g===null)break;i=g}if(m){for(let M of p)queueMicrotask(()=>{throw M});throw m}}finally{e.__root=t,delete e.currentTarget,rt(v),Mt(_)}}}function hi(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Br(e,t){var r=oe;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function P(e,t){var r=(t&Wo)!==0,n=(t&Uo)!==0,a,i=!e.startsWith("<!>");return()=>{a===void 0&&(a=hi(i?e:"<!>"+e),r||(a=qr(a)));var o=n||Js?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=qr(o),c=o.lastChild;Br(l,c)}else Br(o,o);return o}}function Rl(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=hi(a),l=qr(o);i=qr(l)}var c=i.cloneNode(!0);return Br(c,c),c}}function Ol(e,t){return Rl(e,t,"svg")}function Ye(e=""){{var t=Wt(e+"");return Br(t,t),t}}function W(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Wt();return e.append(t,r),Br(t,r),e}function h(e,t){e!==null&&e.before(t)}function q(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function ql(e,t){return Bl(e,t)}const kr=new Map;function Bl(e,{target:t,anchor:r,props:n={},events:a,context:i,intro:o=!0}){vl();var l=new Set,c=_=>{for(var m=0;m<_.length;m++){var p=_[m];if(!l.has(p)){l.add(p);var g=Cl(p);t.addEventListener(p,Fr,{passive:g});var x=kr.get(p);x===void 0?(document.addEventListener(p,Fr,{passive:g}),kr.set(p,1)):kr.set(p,x+1)}}};c(xa(fi)),ca.add(c);var f=void 0,v=yl(()=>{var _=r??t.appendChild(Wt());return sl(_,{pending:()=>{}},m=>{if(i){z({});var p=Ie;p.c=i}a&&(n.$$events=a),f=e(m,n)||{},i&&V()}),()=>{for(var m of l){t.removeEventListener(m,Fr);var p=kr.get(m);--p===0?(document.removeEventListener(m,Fr),kr.delete(m)):kr.set(m,p)}ca.delete(c),_!==r&&_.parentNode?.removeChild(_)}});return Ll.set(f,v),f}let Ll=new WeakMap;function I(e,t,r=!1){var n=e,a=null,i=null,o=Be,l=r?mr:0,c=!1;const f=(p,g=!0)=>{c=!0,m(g,p)};var v=null;function _(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var p=o?a:i,g=o?i:a;p&&Bn(p),g&&Lt(g,()=>{o?i=null:a=null})}const m=(p,g)=>{if(o!==(o=p)){var x=On(),b=n;if(x&&(v=document.createDocumentFragment(),v.append(b=Wt())),o?a??=g&&Ue(()=>g(b)):i??=g&&Ue(()=>g(b)),x){var E=$e,M=o?a:i,S=o?i:a;M&&E.skipped_effects.delete(M),S&&E.skipped_effects.add(S),E.add_callback(_)}else _()}};Gt(()=>{c=!1,t(f),c||m(null,null)},l)}function jl(e,t,r){var n=e,a=Be,i,o,l=null,c=Wr()?Zo:qs;function f(){i&&Lt(i),l!==null&&(l.lastChild.remove(),n.before(l),l=null),i=o}Gt(()=>{if(c(a,a=t())){var v=n,_=On();_&&(l=document.createDocumentFragment(),l.append(v=Wt())),o=Ue(()=>r(v)),_?$e.add_callback(f):f()}})}function Ra(e,t){return t}function zl(e,t,r){for(var n=e.items,a=[],i=t.length,o=0;o<i;o++)Ca(t[o].e,a,!0);var l=i>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;hl(c),c.append(r),n.clear(),At(e,t[0].prev,t[i-1].next)}ai(a,()=>{for(var f=0;f<i;f++){var v=t[f];l||(n.delete(v.k),At(e,v.prev,v.next)),He(v.e,!l)}})}function Ve(e,t,r,n,a,i=null){var o=e,l={flags:t,items:new Map,first:null},c=(t&Rs)!==0;if(c){var f=e;o=f.appendChild(Wt())}var v=null,_=!1,m=new Map,p=ka(()=>{var E=r();return An(E)?E:E==null?[]:xa(E)}),g,x;function b(){Vl(x,g,l,m,o,a,t,n,r),i!==null&&(g.length===0?v?Bn(v):v=Ue(()=>i(o)):v!==null&&Lt(v,()=>{v=null}))}Gt(()=>{x??=oe,g=s(p);var E=g.length;if(!(_&&E===0)){_=E===0;var M,S,w,$;if(On()){var N=new Set,C=$e;for(S=0;S<E;S+=1){w=g[S],$=n(w,S);var T=l.items.get($)??m.get($);T?(t&(In|Mn))!==0&&pi(T,w,S,t):(M=_i(null,l,null,null,w,$,S,a,t,r,!0),m.set($,M)),N.add($)}for(const[Z,k]of l.items)N.has(Z)||C.skipped_effects.add(k.e);C.add_callback(b)}else b();s(p)}})}function Vl(e,t,r,n,a,i,o,l,c){var f=(o&Oo)!==0,v=(o&(In|Mn))!==0,_=t.length,m=r.items,p=r.first,g=p,x,b=null,E,M=[],S=[],w,$,N,C;if(f)for(C=0;C<_;C+=1)w=t[C],$=l(w,C),N=m.get($),N!==void 0&&(N.a?.measure(),(E??=new Set).add(N));for(C=0;C<_;C+=1){if(w=t[C],$=l(w,C),N=m.get($),N===void 0){var T=n.get($);if(T!==void 0){n.delete($),m.set($,T);var Z=b?b.next:g;At(r,b,T),At(r,T,Z),Zn(T,Z,a),b=T}else{var k=g?g.e.nodes_start:a;b=_i(k,r,b,b===null?r.first:b.next,w,$,C,i,o,c)}m.set($,b),M=[],S=[],g=b.next;continue}if(v&&pi(N,w,C,o),(N.e.f&$t)!==0&&(Bn(N.e),f&&(N.a?.unfix(),(E??=new Set).delete(N))),N!==g){if(x!==void 0&&x.has(N)){if(M.length<S.length){var R=S[0],L;b=R.prev;var pe=M[0],Ae=M[M.length-1];for(L=0;L<M.length;L+=1)Zn(M[L],R,a);for(L=0;L<S.length;L+=1)x.delete(S[L]);At(r,pe.prev,Ae.next),At(r,b,pe),At(r,Ae,R),g=R,b=Ae,C-=1,M=[],S=[]}else x.delete(N),Zn(N,g,a),At(r,N.prev,N.next),At(r,N,b===null?r.first:b.next),At(r,b,N),b=N;continue}for(M=[],S=[];g!==null&&g.k!==$;)(g.e.f&$t)===0&&(x??=new Set).add(g),S.push(g),g=g.next;if(g===null)continue;N=g}M.push(N),b=N,g=N.next}if(g!==null||x!==void 0){for(var ye=x===void 0?[]:xa(x);g!==null;)(g.e.f&$t)===0&&ye.push(g),g=g.next;var U=ye.length;if(U>0){var _e=(o&Rs)!==0&&_===0?a:null;if(f){for(C=0;C<U;C+=1)ye[C].a?.measure();for(C=0;C<U;C+=1)ye[C].a?.fix()}zl(r,ye,_e)}}f&&fr(()=>{if(E!==void 0)for(N of E)N.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var D of n.values())He(D.e);n.clear()}function pi(e,t,r,n){(n&In)!==0&&Or(e.v,t),(n&Mn)!==0?Or(e.i,r):e.i=r}function _i(e,t,r,n,a,i,o,l,c,f,v){var _=(c&In)!==0,m=(c&qo)===0,p=_?m?dl(a,!1,!1):er(a):a,g=(c&Mn)===0?o:er(o),x={i:g,v:p,k:i,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=Wt())}return x.e=Ue(()=>l(e,p,g,f),Jo),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?v||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function Zn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==null&&i!==n;){var o=pn(i);a.before(i),i=o}}function At(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function re(e,t,...r){var n=e,a=ee,i;Gt(()=>{a!==(a=t())&&(i&&(He(i),i=null),i=Ue(()=>a(n,...r)))},mr)}function en(e,t,r){var n=e,a,i,o=null,l=null;function c(){i&&(Lt(i),i=null),o&&(o.lastChild.remove(),n.before(o),o=null),i=l,l=null}Gt(()=>{if(a!==(a=t())){var f=On();if(a){var v=n;f&&(o=document.createDocumentFragment(),o.append(v=Wt()),i&&$e.skipped_effects.add(i)),l=Ue(()=>r(v,a))}f?$e.add_callback(c):c()}},mr)}function Wl(e,t,r,n,a,i){var o,l,c=null,f=e,v;Gt(()=>{const _=t()||null;var m=Ho;_!==o&&(v&&(_===null?Lt(v,()=>{v=null,l=null}):_===l?Bn(v):He(v)),_&&_!==l&&(v=Ue(()=>{if(c=document.createElementNS(m,_),Br(c,c),n){var p=c.appendChild(Wt());n(c,p)}oe.nodes_end=c,f.before(c)})),o=_,o&&(l=o))},mr)}function Ul(e,t){var r=void 0,n;Gt(()=>{r!==(r=t())&&(n&&(He(n),n=null),r&&(n=Ue(()=>{Ia(()=>r(e))})))})}function mi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=mi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Gl(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=mi(e))&&(n&&(n+=" "),n+=t);return n}function gi(e){return typeof e=="object"?Gl(e):e??""}const rs=[...` 	
\r\f \v\uFEFF`];function Hl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var i=a.length,o=0;(o=n.indexOf(a,o))>=0;){var l=o+i;(o===0||rs.includes(n[o-1]))&&(l===n.length||rs.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function ns(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var i=e[a];i!=null&&i!==""&&(n+=" "+a+": "+i+r)}return n}function Xn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Ql(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Xn)),a&&c.push(...Object.keys(a).map(Xn));var f=0,v=-1;const x=e.length;for(var _=0;_<x;_++){var m=e[_];if(l?m==="/"&&e[_-1]==="*"&&(l=!1):i?i===m&&(i=!1):m==="/"&&e[_+1]==="*"?l=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!l&&i===!1&&o===0){if(m===":"&&v===-1)v=_;else if(m===";"||_===x-1){if(v!==-1){var p=Xn(e.substring(f,v).trim());if(!c.includes(p)){m!==";"&&_++;var g=e.substring(f,_).trim();r+=" "+g+";"}}f=_+1,v=-1}}}}return n&&(r+=ns(n)),a&&(r+=ns(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ne(e,t,r,n,a,i){var o=e.__className;if(o!==r||o===void 0){var l=Hl(r,n,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(i&&a!==i)for(var c in i){var f=!!i[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return i}function Fn(e,t={},r,n){for(var a in r){var i=r[a];t[a]!==i&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,n))}}function Kl(e,t,r,n){var a=e.__style;if(a!==t){var i=Ql(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(Fn(e,r?.[0],n[0]),Fn(e,r?.[1],n[1],"important")):Fn(e,r,n));return n}function kn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!An(t))return Ko();for(var n of e.options)n.selected=t.includes(an(n));return}for(n of e.options){var a=an(n);if(fl(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function bi(e){var t=new MutationObserver(()=>{kn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Fs(()=>{t.disconnect()})}function Tr(e,t,r=t){var n=!0;Aa(e,"change",a=>{var i=a?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),an);else{var l=e.querySelector(i)??e.querySelector("option:not([disabled])");o=l&&an(l)}r(o)}),Ia(()=>{var a=t();if(kn(e,a,n),n&&a===void 0){var i=e.querySelector(":checked");i!==null&&(a=an(i),r(a))}e.__value=a,n=!1}),bi(e)}function an(e){return"__value"in e?e.__value:e.value}const Jr=Symbol("class"),Zr=Symbol("style"),yi=Symbol("is custom element"),wi=Symbol("is html");function Oa(e,t){var r=jn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Mr(e,t){var r=jn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Yl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Tn(e,t,r,n){var a=jn(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Po]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Si(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Jl(e,t,r,n,a=!1,i=!1){var o=jn(e),l=o[yi],c=!o[wi],f=t||{},v=e.tagName==="OPTION";for(var _ in t)_ in r||(r[_]=null);r.class?r.class=gi(r.class):r[Jr]&&(r.class=null),r[Zr]&&(r.style??=null);var m=Si(e);for(const w in r){let $=r[w];if(v&&w==="value"&&$==null){e.value=e.__value="",f[w]=$;continue}if(w==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ne(e,p,$,n,t?.[Jr],r[Jr]),f[w]=$,f[Jr]=r[Jr];continue}if(w==="style"){Kl(e,$,t?.[Zr],r[Zr]),f[w]=$,f[Zr]=r[Zr];continue}var g=f[w];if(!($===g&&!($===void 0&&e.hasAttribute(w)))){f[w]=$;var x=w[0]+w[1];if(x!=="$$")if(x==="on"){const N={},C="$$"+w;let T=w.slice(2);var b=Al(T);if(kl(T)&&(T=T.slice(0,-7),N.capture=!0),!b&&g){if($!=null)continue;e.removeEventListener(T,f[C],N),f[C]=null}if($!=null)if(b)e[`__${T}`]=$,bt([T]);else{let Z=function(k){f[w].call(this,k)};var S=Z;f[C]=vi(T,e,Z,N)}else b&&(e[`__${T}`]=void 0)}else if(w==="style")Tn(e,w,$);else if(w==="autofocus")pl(e,!!$);else if(!l&&(w==="__value"||w==="value"&&$!=null))e.value=e.__value=$;else if(w==="selected"&&v)Yl(e,$);else{var E=w;c||(E=Il(E));var M=E==="defaultValue"||E==="defaultChecked";if($==null&&!l&&!M)if(o[w]=null,E==="value"||E==="checked"){let N=e;const C=t===void 0;if(E==="value"){let T=N.defaultValue;N.removeAttribute(E),N.defaultValue=T,N.value=N.__value=C?T:null}else{let T=N.defaultChecked;N.removeAttribute(E),N.defaultChecked=T,N.checked=C?T:!1}}else e.removeAttribute(w);else M||m.includes(E)&&(l||typeof $!="string")?(e[E]=$,E in o&&(o[E]=Be)):typeof $!="function"&&Tn(e,E,$)}}}return f}function as(e,t,r=[],n=[],a,i=!1,o=!1){Gs(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",_=!1;if(Gt(()=>{var p=t(...l.map(s)),g=Jl(e,c,p,a,i,o);_&&v&&"value"in p&&kn(e,p.value);for(let b of Object.getOwnPropertySymbols(f))p[b]||He(f[b]);for(let b of Object.getOwnPropertySymbols(p)){var x=p[b];b.description===Qo&&(!c||x!==c[b])&&(f[b]&&He(f[b]),f[b]=Ue(()=>Ul(e,()=>x))),g[b]=x}c=g}),v){var m=e;Ia(()=>{kn(m,c.value,!0),bi(m)})}_=!0})}function jn(e){return e.__attributes??={[yi]:e.nodeName.includes("-"),[wi]:e.namespaceURI===Go}}var ss=new Map;function Si(e){var t=e.getAttribute("is")||e.nodeName,r=ss.get(t);if(r)return r;ss.set(t,r=[]);for(var n,a=e,i=Element.prototype;i!==a;){n=bo(a);for(var o in n)n[o].set&&r.push(o);a=As(a)}return r}function Ce(e,t,r=t){var n=new WeakSet;Aa(e,"input",async a=>{var i=a?e.defaultValue:e.value;if(i=ea(e)?ta(i):i,r(i),$e!==null&&n.add($e),await El(),i!==(i=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=i??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),Ur(t)==null&&e.value&&(r(ea(e)?ta(e.value):e.value),$e!==null&&n.add($e)),Ma(()=>{var a=t();if(e===document.activeElement){var i=xn??$e;if(n.has(i))return}ea(e)&&a===ta(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Zl(e,t,r=t){Aa(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),Ur(t)==null&&r(e.checked),Ma(()=>{var n=t();e.checked=!!n})}function ea(e){var t=e.type;return t==="number"||t==="range"}function ta(e){return e===""?null:+e}let Sn=!1;function Xl(e){var t=Sn;try{return Sn=!1,[e(),Sn]}finally{Sn=t}}const Fl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ne(e,t,r){return new Proxy({props:e,exclude:t},Fl)}const ec={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Yr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Yr(a)&&(a=a());const i=Xt(a,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Yr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Xt(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===dr||t===Ms)return!1;for(let r of e.props)if(Yr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Yr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function se(...e){return new Proxy({props:e},ec)}function Bt(e,t,r,n){var a=!Vr||(r&Lo)!==0,i=(r&zo)!==0,o=(r&Vo)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=o?Ur(n):n),l),v;if(i){var _=dr in e||Ms in e;v=Xt(e,t)?.set??(_&&t in e?S=>e[t]=S:void 0)}var m,p=!1;i?[m,p]=Xl(()=>e[t]):m=e[t],m===void 0&&n!==void 0&&(m=f(),v&&(a&&Do(),v(m)));var g;if(a?g=()=>{var S=e[t];return S===void 0?f():(c=!0,S)}:g=()=>{var S=e[t];return S!==void 0&&(l=void 0),S===void 0?l:S},a&&(r&jo)===0)return g;if(v){var x=e.$$legacy;return(function(S,w){return arguments.length>0?((!a||!w||x||p)&&v(w?g():S),S):g()})}var b=!1,E=((r&Bo)!==0?Rn:ka)(()=>(b=!1,g()));i&&s(E);var M=oe;return(function(S,w){if(arguments.length>0){const $=w?s(E):a&&i?Ge(S):S;return A(E,$),b=!0,l!==void 0&&(l=$),S}return gr&&b||(M.f&_r)!==0?E.v:s(E)})}function xi(e){Ie===null&&Cs(),Vr&&Ie.l!==null?rc(Ie).m.push(e):Da(()=>{const t=Ur(e);if(typeof t=="function")return t})}function tc(e){Ie===null&&Cs(),xi(()=>()=>Ur(e))}function rc(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const nc="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(nc);const ac="modulepreload",sc=function(e){return"/"+e},is={},ra=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(_=>Promise.resolve(_).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var o=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(v=>{if(v=sc(v),v in is)return;is[v]=!0;const _=v.endsWith(".css"),m=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${m}`))return;const p=document.createElement("link");if(p.rel=_?"stylesheet":ac,_||(p.as="script"),p.crossOrigin="",p.href=v,c&&p.setAttribute("nonce",c),document.head.appendChild(p),_)return new Promise((g,x)=>{p.addEventListener("load",g),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${v}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})};class ic extends Map{#e=new Map;#r=J(0);#c=J(0);#u=zt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#o(t){return zt===this.#u?J(t):er(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#o(0),r.set(t,n);else return s(this.#r),!1}return s(n),!0}forEach(t,r){this.#s(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#o(0),r.set(t,n);else{s(this.#r);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),i=super.get(t),o=super.set(t,r),l=this.#r;if(a===void 0)a=this.#o(0),n.set(t,a),A(this.#c,super.size),It(l);else if(i!==r){It(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(v=>c.has(v));f&&It(l)}return o}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),A(this.#c,super.size),A(n,-1),It(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;A(this.#c,0);for(var r of t.values())A(r,-1);It(this.#r),t.clear()}}#s(){s(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#o(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#s(),super.values()}entries(){return this.#s(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#c),super.size}}class oc{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class $i{constructor(t){this.generateIdentifier=t,this.kv=new oc}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class lc extends $i{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function cc(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function uc(e,t){const r=cc(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const i=n[a];if(t(i))return i}}function Lr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function $n(e,t){return e.indexOf(t)!==-1}function os(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class dc{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return uc(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const fc=e=>Object.prototype.toString.call(e).slice(8,-1),Pi=e=>typeof e>"u",vc=e=>e===null,cn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,ua=e=>cn(e)&&Object.keys(e).length===0,tr=e=>Array.isArray(e),hc=e=>typeof e=="string",pc=e=>typeof e=="number"&&!isNaN(e),_c=e=>typeof e=="boolean",mc=e=>e instanceof RegExp,un=e=>e instanceof Map,dn=e=>e instanceof Set,Ei=e=>fc(e)==="Symbol",gc=e=>e instanceof Date&&!isNaN(e.valueOf()),bc=e=>e instanceof Error,ls=e=>typeof e=="number"&&isNaN(e),yc=e=>_c(e)||vc(e)||Pi(e)||pc(e)||hc(e)||Ei(e),wc=e=>typeof e=="bigint",Sc=e=>e===1/0||e===-1/0,xc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),$c=e=>e instanceof URL,Ni=e=>e.replace(/\./g,"\\."),na=e=>e.map(String).map(Ni).join("."),sn=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let i=e.charAt(a);if(i==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(i==="."){t.push(r),r="";continue}r+=i}const n=r;return t.push(n),t};function Tt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const ki=[Tt(Pi,"undefined",()=>null,()=>{}),Tt(wc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Tt(gc,"Date",e=>e.toISOString(),e=>new Date(e)),Tt(bc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Tt(mc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Tt(dn,"set",e=>[...e.values()],e=>new Set(e)),Tt(un,"map",e=>[...e.entries()],e=>new Map(e)),Tt(e=>ls(e)||Sc(e),"number",e=>ls(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Tt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Tt($c,"URL",e=>e.toString(),e=>new URL(e))];function zn(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const Ti=zn((e,t)=>Ei(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),Pc=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),Ai=zn(xc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=Pc[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function Di(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const Ii=zn(Di,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),Mi=zn((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),Ec=[Ii,Ti,Mi,Ai],cs=(e,t)=>{const r=os(Ec,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=os(ki,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},Ci={};ki.forEach(e=>{Ci[e.annotation]=e});const Nc=(e,t,r)=>{if(tr(t))switch(t[0]){case"symbol":return Ti.untransform(e,t,r);case"class":return Ii.untransform(e,t,r);case"custom":return Mi.untransform(e,t,r);case"typed-array":return Ai.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=Ci[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Ar=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function Ri(e){if($n(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if($n(e,"prototype"))throw new Error("prototype is not allowed as a property");if($n(e,"constructor"))throw new Error("constructor is not allowed as a property")}const kc=(e,t)=>{Ri(t);for(let r=0;r<t.length;r++){const n=t[r];if(dn(e))e=Ar(e,+n);else if(un(e)){const a=+n,i=+t[++r]==0?"key":"value",o=Ar(e,a);switch(i){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},da=(e,t,r)=>{if(Ri(t),t.length===0)return r(e);let n=e;for(let i=0;i<t.length-1;i++){const o=t[i];if(tr(n)){const l=+o;n=n[l]}else if(cn(n))n=n[o];else if(dn(n)){const l=+o;n=Ar(n,l)}else if(un(n)){if(i===t.length-2)break;const c=+o,f=+t[++i]==0?"key":"value",v=Ar(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const a=t[t.length-1];if(tr(n)?n[+a]=r(n[+a]):cn(n)&&(n[a]=r(n[a])),dn(n)){const i=Ar(n,+a),o=r(i);i!==o&&(n.delete(i),n.add(o))}if(un(n)){const i=+t[t.length-2],o=Ar(n,i);switch(+a==0?"key":"value"){case"key":{const c=r(o);n.set(c,n.get(o)),c!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function fa(e,t,r=[]){if(!e)return;if(!tr(e)){Lr(e,(i,o)=>fa(i,t,[...r,...sn(o)]));return}const[n,a]=e;a&&Lr(a,(i,o)=>{fa(i,t,[...r,...sn(o)])}),t(n,r)}function Tc(e,t,r){return fa(t,(n,a)=>{e=da(e,a,i=>Nc(i,n,r))}),e}function Ac(e,t){function r(n,a){const i=kc(e,sn(a));n.map(sn).forEach(o=>{e=da(e,o,()=>i)})}if(tr(t)){const[n,a]=t;n.forEach(i=>{e=da(e,sn(i),()=>e)}),a&&Lr(a,r)}else Lr(t,r);return e}const Dc=(e,t)=>cn(e)||tr(e)||un(e)||dn(e)||Di(e,t);function Ic(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Mc(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[i,...o]=a;i.length===0?n=o.map(na):r[na(i)]=o.map(na)}),n?ua(r)?[n]:[n,r]:ua(r)?void 0:r}const Oi=(e,t,r,n,a=[],i=[],o=new Map)=>{const l=yc(e);if(!l){Ic(e,a,t);const p=o.get(e);if(p)return n?{transformedValue:null}:p}if(!Dc(e,r)){const p=cs(e,r),g=p?{transformedValue:p.value,annotations:[p.type]}:{transformedValue:e};return l||o.set(e,g),g}if($n(i,e))return{transformedValue:null};const c=cs(e,r),f=c?.value??e,v=tr(f)?[]:{},_={};Lr(f,(p,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const x=Oi(p,t,r,n,[...a,g],[...i,e],o);v[g]=x.transformedValue,tr(x.annotations)?_[g]=x.annotations:cn(x.annotations)&&Lr(x.annotations,(b,E)=>{_[Ni(g)+"."+E]=b})});const m=ua(_)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,_]:_};return l||o.set(e,m),m};function qi(e){return Object.prototype.toString.call(e).slice(8,-1)}function us(e){return qi(e)==="Array"}function Cc(e){if(qi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Rc(e,t,r,n,a){const i={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";i==="enumerable"&&(e[t]=r),a&&i==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function va(e,t={}){if(us(e))return e.map(a=>va(a,t));if(!Cc(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,i)=>{if(us(t.props)&&!t.props.includes(i))return a;const o=e[i],l=va(o,t);return Rc(a,i,l,e,t.nonenumerable),a},{})}class ce{constructor({dedupe:t=!1}={}){this.classRegistry=new lc,this.symbolRegistry=new $i(r=>r.description??""),this.customTransformerRegistry=new dc,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=Oi(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const i=Mc(r,this.dedupe);return i&&(a.meta={...a.meta,referentialEqualities:i}),a}deserialize(t){const{json:r,meta:n}=t;let a=va(r);return n?.values&&(a=Tc(a,n.values,this)),n?.referentialEqualities&&(a=Ac(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}ce.defaultInstance=new ce;ce.serialize=ce.defaultInstance.serialize.bind(ce.defaultInstance);ce.deserialize=ce.defaultInstance.deserialize.bind(ce.defaultInstance);ce.stringify=ce.defaultInstance.stringify.bind(ce.defaultInstance);ce.parse=ce.defaultInstance.parse.bind(ce.defaultInstance);ce.registerClass=ce.defaultInstance.registerClass.bind(ce.defaultInstance);ce.registerSymbol=ce.defaultInstance.registerSymbol.bind(ce.defaultInstance);ce.registerCustom=ce.defaultInstance.registerCustom.bind(ce.defaultInstance);ce.allowErrorProps=ce.defaultInstance.allowErrorProps.bind(ce.defaultInstance);ce.serialize;ce.deserialize;ce.stringify;ce.parse;ce.registerClass;ce.registerCustom;ce.registerSymbol;ce.allowErrorProps;function Oc(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function qc(e,t){return`${e}_${t}`}const Bc=typeof window<"u"?window:void 0;function Lc(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class jc{#e;#r;constructor(t={}){const{window:r=Bc,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=Us(a=>{const i=es(r,"focusin",a),o=es(r,"focusout",a);return()=>{i(),o()}}))}get current(){return this.#r?.(),this.#e?Lc(this.#e):null}}new jc;function zc(e){return typeof e=="function"}function Vc(e,t){if(zc(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Wc(e,t){let r=J(null);const n=H(()=>Vc(t,250));function a(...i){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let o,l;const c=new Promise((f,v)=>{o=f,l=v});A(r,{timeout:null,runner:null,promise:c,resolve:o,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const o=s(r);A(r,null);try{o.resolve(await e.apply(this,i))}catch(l){o.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),A(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Uc(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),i=e.filter(o=>{const l=new Date(o.dateTimeService);return l>=n&&l<=a});return i.length?ha(i.flatMap(o=>o.neededConsolidatedForDate)):[]}function Dr(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function ds(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function ha(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function fs(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>pa(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],i=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(a.push({q:v,u:c}),i.push(pa(v.toString(),c)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:a,display:o}}function or(e){return e?.length?e.map(t=>pa(t.q.toString(),t.u)).join(" et "):"-"}function pa(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let o=(Math.round(n*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Gc(e){return Dr(e)}function vs(e){return Dr(e)}function Hc(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Qc(e,t){return e[t]?.recipes||[]}function Kc(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([i])=>{const o=new Date(i);return o>=n&&o<=a}).reduce((i,[o,l])=>i+(l.totalAssiettes||0),0)}function Yc(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Jc(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Zc(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function hs(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return Hc(t)}function Xc(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class y{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}y.equal=(e,t)=>new y("equal",e,t).toString();y.notEqual=(e,t)=>new y("notEqual",e,t).toString();y.lessThan=(e,t)=>new y("lessThan",e,t).toString();y.lessThanEqual=(e,t)=>new y("lessThanEqual",e,t).toString();y.greaterThan=(e,t)=>new y("greaterThan",e,t).toString();y.greaterThanEqual=(e,t)=>new y("greaterThanEqual",e,t).toString();y.isNull=e=>new y("isNull",e).toString();y.isNotNull=e=>new y("isNotNull",e).toString();y.between=(e,t,r)=>new y("between",e,[t,r]).toString();y.startsWith=(e,t)=>new y("startsWith",e,t).toString();y.endsWith=(e,t)=>new y("endsWith",e,t).toString();y.select=e=>new y("select",void 0,e).toString();y.search=(e,t)=>new y("search",e,t).toString();y.orderDesc=e=>new y("orderDesc",e).toString();y.orderAsc=e=>new y("orderAsc",e).toString();y.orderRandom=()=>new y("orderRandom").toString();y.cursorAfter=e=>new y("cursorAfter",void 0,e).toString();y.cursorBefore=e=>new y("cursorBefore",void 0,e).toString();y.limit=e=>new y("limit",void 0,e).toString();y.offset=e=>new y("offset",void 0,e).toString();y.contains=(e,t)=>new y("contains",e,t).toString();y.notContains=(e,t)=>new y("notContains",e,t).toString();y.notSearch=(e,t)=>new y("notSearch",e,t).toString();y.notBetween=(e,t,r)=>new y("notBetween",e,[t,r]).toString();y.notStartsWith=(e,t)=>new y("notStartsWith",e,t).toString();y.notEndsWith=(e,t)=>new y("notEndsWith",e,t).toString();y.createdBefore=e=>new y("createdBefore",void 0,e).toString();y.createdAfter=e=>new y("createdAfter",void 0,e).toString();y.createdBetween=(e,t)=>new y("createdBetween",void 0,[e,t]).toString();y.updatedBefore=e=>new y("updatedBefore",void 0,e).toString();y.updatedAfter=e=>new y("updatedAfter",void 0,e).toString();y.updatedBetween=(e,t)=>new y("updatedBetween",void 0,[e,t]).toString();y.or=e=>new y("or",void 0,e.map(t=>JSON.parse(t))).toString();y.and=e=>new y("and",void 0,e.map(t=>JSON.parse(t))).toString();y.distanceEqual=(e,t,r,n=!0)=>new y("distanceEqual",e,[[t,r,n]]).toString();y.distanceNotEqual=(e,t,r,n=!0)=>new y("distanceNotEqual",e,[[t,r,n]]).toString();y.distanceGreaterThan=(e,t,r,n=!0)=>new y("distanceGreaterThan",e,[[t,r,n]]).toString();y.distanceLessThan=(e,t,r,n=!0)=>new y("distanceLessThan",e,[[t,r,n]]).toString();y.intersects=(e,t)=>new y("intersects",e,[t]).toString();y.notIntersects=(e,t)=>new y("notIntersects",e,[t]).toString();y.crosses=(e,t)=>new y("crosses",e,[t]).toString();y.notCrosses=(e,t)=>new y("notCrosses",e,[t]).toString();y.overlaps=(e,t)=>new y("overlaps",e,[t]).toString();y.notOverlaps=(e,t)=>new y("notOverlaps",e,[t]).toString();y.touches=(e,t)=>new y("touches",e,[t]).toString();y.notTouches=(e,t)=>new y("notTouches",e,[t]).toString();var Bi,Li;class fn{static custom(t){return t}static unique(t=7){const r=Xc(fn,Bi,"m",Li).call(fn);let n="";for(let a=0;a<t;a++){const i=Math.floor(Math.random()*16).toString(16);n+=i}return r+n}}Bi=fn,Li=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var ps;(function(e){e.Totp="totp"})(ps||(ps={}));var _s;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(_s||(_s={}));var ms;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(ms||(ms={}));var gs;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(gs||(gs={}));var bs;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(bs||(bs={}));var ys;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(ys||(ys={}));var ws;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(ws||(ws={}));var Ss;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Ss||(Ss={}));var xs;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(xs||(xs={}));function ji(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,productType:e.productType,pFrais:e.pFrais,pSurgel:e.pSurgel,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,...t}}async function Ct(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Fc(e,t,r=100){try{const{databases:n,config:a}=await Ct(),i=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[y.greaterThan("$updatedAt",t),y.equal("mainId",e),y.limit(r),y.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function zi(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:i}=await Ct();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[y.equal("mainId",e),y.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),y.limit(n)])).documents;const o=await a.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[y.greaterThan("$updatedAt",r),y.equal("mainId",e),y.limit(n),y.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const i=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function jr(e,t){try{const{databases:r,config:n}=await Ct();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function tn(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=ji(n,t),{databases:i,config:o}=await Ct(),l=await i.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function Vi(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await jr(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function _a(e,t){return jr(e,{who:t})}async function ma(e,t){return jr(e,{stockReel:t})}async function Wi(e){try{const{databases:t,config:r}=await Ct(),i=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:i.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,fn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Ui(e,t){try{const{databases:r,config:n}=await Ct(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),i={...t,products:t.products||a.products},o=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,i);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Gi(e){try{const{databases:t,config:r}=await Ct();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Hi(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Ct(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[y.equal("$id",e),y.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Qi(e,t={}){let r=null;const n=i=>{const{events:o,payload:l}=i;if(!l)return;const c=o.some(p=>p.includes("products.")),f=o.some(p=>p.includes("purchases.")),v=o.some(p=>p.includes(".create")),_=o.some(p=>p.includes(".update")),m=o.some(p=>p.includes(".delete"));if(c){const p=l;v&&t.onProductCreate?t.onProductCreate(p):_&&t.onProductUpdate?t.onProductUpdate(p):m&&t.onProductDelete&&t.onProductDelete(p.$id)}else if(f){const p=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(p):_&&t.onPurchaseUpdate?t.onPurchaseUpdate(p):m&&t.onPurchaseDelete&&t.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),t.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),t.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function Ki(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Ct(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Yi(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await Ct(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}const aa=Object.freeze(Object.defineProperty({__proto__:null,createMainDocument:Yi,createPurchase:Wi,deletePurchase:Gi,enrichedProductToAppwriteProduct:ji,loadMainEventData:Ki,loadPurchasesListByIds:Hi,loadUpdatedPurchases:Fc,subscribeToRealtime:Qi,syncProductsWithPurchases:zi,updateProduct:jr,updateProductStock:ma,updateProductStore:Vi,updateProductWho:_a,updatePurchase:Ui,upsertProduct:tn},Symbol.toStringTag,{value:"Module"}));async function eu(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function tu(e,t,r){return{$id:`${t}_${e.ingredientHugoUuid}`,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,byDate:JSON.stringify(e.byDate),nbRecipes:e.nbRecipes||0,totalAssiettes:e.totalAssiettes||0,status:"",purchases:[],store:"",who:null,stockReel:null,isMerged:!1,mergedInto:null,mergedFrom:null,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,mainId:t}}const $s=1e3,ru=500;class nu{#e=new ic;#r=J(null);#c=J(!1);#u=J(!1);#o=J(null);#s=J(!1);#i=J(!1);#n=J(Ge([]));#a=J(null);#d=J(null);get startDate(){return s(this.#d)}set startDate(t){A(this.#d,t,!0)}#f=J(null);get endDate(){return s(this.#f)}set endDate(t){A(this.#f,t,!0)}#l=null;#v=null;#h=null;#p=null;#$=J(!1);#t=J(Ge({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get currentMainId(){return s(this.#r)}get isInitialized(){return s(this.#c)}get loading(){return s(this.#u)}get error(){return s(this.#o)}get allDates(){return s(this.#n)}get syncing(){return s(this.#s)}setDateRange(t,r){this.startDate=t,this.endDate=r}initializeDateRange(){if((!this.startDate||!this.endDate)&&s(this.#n).length>0){const t=[...s(this.#n)].sort();this.startDate=t[0],this.endDate=t[t.length-1]}console.log(`[ProductsStore] Date range initialized: ${this.startDate} - ${this.endDate}`)}get firstDate(){return s(this.#n).length===0?null:[...s(this.#n)].sort()[0]}get lastDate(){return s(this.#n).length===0?null:[...s(this.#n)].sort().pop()}get realtimeConnected(){return s(this.#i)}get hugoContentChanged(){return s(this.#$)}getTotalNeededInRange(t){return this.totalNeededByDateRange.get(t)??[]}getFormattedTotalNeeded(t){const r=this.getTotalNeededInRange(t);return r.length>0?or(r):"-"}#P=H(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#P)}set enrichedProducts(t){A(this.#P,t)}#g=H(()=>{if(console.log("[Store] Recalcul totalNeededByDateRange"),this.startDate===this.firstDate&&this.endDate===this.lastDate)return console.log("[Store] Full date range - using totalNeededArray (no calculation)"),new Map(this.enrichedProducts.map(n=>[n.$id,n.totalNeededArray]));const r=new Map;for(const n of this.enrichedProducts)if(n.byDate){const a=Jc(n.byDate),i=Uc(a,this.startDate,this.endDate);i.length>0&&r.set(n.$id,i)}return r});get totalNeededByDateRange(){return s(this.#g)}set totalNeededByDateRange(t){A(this.#g,t)}#b=H(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const a=or(r);t.set(n,a)}),t});get formattedTotalNeededByDateRange(){return s(this.#b)}set formattedTotalNeededByDateRange(t){A(this.#b,t)}#y=H(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#y)}set stats(t){A(this.#y,t)}#k=H(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#k)}set uniqueStores(t){A(this.#k,t)}#T=H(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#T)}set uniqueWho(t){A(this.#T,t)}#A=H(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#A)}set uniqueProductTypes(t){A(this.#A,t)}#D=H(()=>new Set(this.totalNeededByDateRange.keys()));get relevantProductIds(){return s(this.#D)}set relevantProductIds(t){A(this.#D,t)}#I=H(()=>{const t=this.enrichedProducts.filter(r=>this.#W(r)&&this.relevantProductIds.has(r.$id));return s(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>s(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get displayProducts(){return s(this.#I)}set displayProducts(t){A(this.#I,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#c)&&s(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),A(this.#r,t,!0),this.#l=qc("products-enriched",t),A(this.#o,null);try{if(await this.#C(),this.#e.size===0){const n=await eu(t);console.log(`[ProductsStore] Données Hugo chargées: ${n.ingredients.length} ingredients`),n.ingredients.forEach(i=>{const o=tu(i,t,n.hugoContentHash),l=this.#E(o);l.isSynced=!1,this.#e.set(l.$id,l)}),A(this.#n,n.allDates,!0),await Ki(t)||await Yi(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),this.#w()}this.initializeDateRange(),await this.#R(),A(this.#c,!0);const r=this.#V();this.#h=Qi(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw A(this.#o,n,!0),console.error("[ProductsStore]",n,r),r}}async#C(){if(this.#l)try{const t=localStorage.getItem(this.#l);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n,allDates:a}=ce.parse(t);r.forEach(([i,o])=>this.#e.set(i,o)),A(this.#a,n,!0),A(this.#n,a||[],!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}, allDates: ${a?.length||0} dates`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}async#R(){if(s(this.#r)){A(this.#s,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#a)}`);const t=await zi(s(this.#r),{lastSync:s(this.#a),limit:$s});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#E(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#a)}`);const{loadUpdatedPurchases:r}=await ra(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>aa);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#r),s(this.#a),$s);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const i=a.products.map(o=>typeof o=="string"?o:o.$id);this.#N(i,a)}})}this.#m(),this.#_(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{A(this.#s,!1)}}}#w(){if(this.#l)try{const t={lastSync:s(this.#a),products:Array.from(this.#e.entries()),allDates:s(this.#n)};localStorage.setItem(this.#l,ce.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}#_(){this.#p&&clearTimeout(this.#p),this.#p=setTimeout(()=>{this.#w(),this.#p=null},ru)}#m(){A(this.#a,new Date().toISOString(),!0)}#E(t,r){return r?this.#S(t,r):this.#O(t)}#O(t){const r=ha(ds(t.purchases??[])),n=Gc(t.byDate);let a,i;n?a=hs(n):(console.error(`[ProductsStore] Product ${t.productName} n'a pas de structure byDate - migration requise`),a=[]);const{numeric:o,display:l}=fs(a,r),c=Dr(t.stockReel)??[],f=or(r),v=c.length>0?`${c[c.length-1].quantity} ${c[c.length-1].unit}`:f;return{$id:t.$id,$updatedAt:t.$updatedAt,productName:t.productName,productHugoUuid:t.productHugoUuid,productType:t.productType,pFrais:t.pFrais,pSurgel:t.pSurgel,who:t.who,nbRecipes:t.nbRecipes,totalAssiettes:t.totalAssiettes,isSynced:t.isSynced,purchases:t.purchases,mainId:t.mainId,storeInfo:t.store?Dr(t.store):null,totalNeededArray:a,totalPurchasesArray:r,stockArray:c,stockOrTotalPurchases:v,missingQuantityArray:o,displayTotalNeeded:or(a),displayTotalPurchases:f,displayMissingQuantity:l,byDate:n||void 0,totalNeededOverride:vs(t.totalNeededOverride),totalNeededRawArray:i}}#S(t,r){const n={...r};if(n.$id=t.$id,n.$updatedAt=t.$updatedAt,n.isSynced=!0,n.mainId=t.mainId,t.who!==void 0&&(n.who=t.who),t.purchases!==void 0&&(n.purchases=t.purchases,this.#q(n)),t.store!==void 0&&(n.storeInfo=t.store?Dr(t.store):null),t.stockReel!==void 0){const a=Dr(t.stockReel)??[];n.stockArray=a,n.stockOrTotalPurchases=a.length>0?`${a[a.length-1].quantity} ${a[a.length-1].unit}`:n.displayTotalPurchases}return t.totalNeededConsolidated!==void 0&&(n.totalNeededConsolidated=t.totalNeededConsolidated),t.totalNeededOverride!==void 0&&(n.totalNeededOverride=vs(t.totalNeededOverride)),n}#q(t){t.totalPurchasesArray=ha(ds(t.purchases??[]));const{numeric:r,display:n}=fs(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=or(t.totalPurchasesArray)}#U(t){t.length&&(t.forEach(r=>this.#x(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#x(t){const r=this.#e.get(t.$id),n=this.#E(t,r);this.#e.set(t.$id,n)}#B(t){this.#e.delete(t)}async#L(t){if(!t.products?.length){console.warn("[ProductsStore] Purchase créé sans products:",t.$id);return}const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#z(r,t)}async#j(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#N(r,t);return}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Hi([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);this.#N(n,r)}}catch(r){console.error("[ProductsStore] Erreur rechargement purchase:",r)}}#M(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:typeof t.mainId=="string"?t.mainId:t.mainId.$id}}#z(t,r){const n=this.#M(r),a=[];t.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#S({...o,purchases:[...l,n]},o);a.push(c)}}}),a.forEach(i=>{this.#e.set(i.$id,i)})}#N(t,r){const n=this.#M(r),a=[];t.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const v=this.#S({...o,purchases:f},o);a.push(v)}else{const f=this.#S({...o,purchases:[...l,r]},o);a.push(f)}}}),a.forEach(i=>{this.#e.set(i.$id,i)})}#V(){return{onProductCreate:t=>{this.#x(t),this.#m(),this.#_()},onProductUpdate:t=>{this.#x(t),this.#m(),this.#_()},onProductDelete:t=>{this.#B(t),this.#m(),this.#_()},onPurchaseCreate:t=>{this.#L(t),this.#m(),this.#_()},onPurchaseUpdate:t=>{this.#j(t),this.#m(),this.#_()},onPurchaseDelete:t=>{Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t)).forEach(n=>{this.#x(n)}),this.#m(),this.#_()},onConnect:()=>{A(this.#i,!0)},onDisconnect:()=>{A(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#W(t){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#t).selectedStores.includes(t.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!t.productType||!s(this.#t).selectedProductTypes.includes(t.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Wc(t=>{s(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#t).selectedProductTypes.indexOf(t);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#t).selectedTemperatures.indexOf(t);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(t){s(this.#t).groupBy=t}toggleStore(t){const r=s(this.#t).selectedStores.indexOf(t);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(t)}toggleWho(t){const r=s(this.#t).selectedWho.indexOf(t);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(t)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(t){s(this.#t).sortColumn===t?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=t,s(this.#t).sortDirection="asc")}clearFilters(){A(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#t).sortColumn],i=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,i=parseFloat(i)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,i=n.purchases?.length||0),a<i?s(this.#t).sortDirection==="asc"?-1:1:a>i?s(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}async applyManualOverride(t,r,n=null){const a=this.#e.get(t);if(!a)throw new Error(`Product ${t} not found`);const{updateProduct:i}=await ra(async()=>{const{updateProduct:o}=await Promise.resolve().then(()=>aa);return{updateProduct:o}},void 0);await i(t,{totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n}),this.#e.set(t,{...a,totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n,totalNeededArray:r,displayTotalNeeded:or(r)}),this.#w()}async removeManualOverride(t){const r=this.#e.get(t);if(!r)throw new Error(`Product ${t} not found`);const{updateProduct:n}=await ra(async()=>{const{updateProduct:i}=await Promise.resolve().then(()=>aa);return{updateProduct:i}},void 0);await n(t,{totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null});const a=r.byDate?hs(r.byDate):[];this.#e.set(t,{...r,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,totalNeededArray:a,displayTotalNeeded:or(a)}),this.#w()}hasManualOverride(t){return this.#e.get(t)?.totalNeededIsManualOverride??!1}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDate?Qc(n.byDate,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDate&&n.byDate[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Yc(r.byDate):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDate?Object.keys(r.byDate).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?0:Kc(r.byDate,this.startDate,this.endDate)}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDate||!this.startDate||!this.endDate?[]:Object.keys(r.byDate).filter(a=>{const i=new Date(a),o=this.startDate?new Date(this.startDate):null,l=this.endDate?new Date(this.endDate):null;return o&&l&&i>=o&&i<=l}).flatMap(a=>r.byDate[a]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){this.clearCache(),await this.initialize(t)}clearCache(){this.#e.clear(),A(this.#n,[],!0),A(this.#a,null),this.#l&&localStorage.removeItem(this.#l),this.#v&&localStorage.removeItem(this.#v),console.log("[ProductsStore] Cache vidé")}destroy(){this.#h?.(),this.#h=null,this.#p&&(clearTimeout(this.#p),this.#p=null),console.log("[ProductsStore] Ressources nettoyées")}}const O=new nu;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const au={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var su=Ol("<svg><!><!></svg>");function ie(e,t){z(t,!0);const r=Bt(t,"color",3,"currentColor"),n=Bt(t,"size",3,24),a=Bt(t,"strokeWidth",3,2),i=Bt(t,"absoluteStrokeWidth",3,!1),o=Bt(t,"iconNode",19,()=>[]),l=ne(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=su();as(c,_=>({...au,...l,width:n(),height:n(),stroke:r(),"stroke-width":_,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>i()?Number(a())*24/Number(n()):a()]);var f=u(c);Ve(f,17,o,Ra,(_,m)=>{var p=H(()=>Is(s(m),2));let g=()=>s(p)[0],x=()=>s(p)[1];var b=W(),E=B(b);Wl(E,g,!0,(M,S)=>{as(M,()=>({...x()}))}),h(_,b)});var v=d(f);re(v,()=>t.children??ee),h(e,c),V()}function ga(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ie(e,se({name:"archive"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function iu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ie(e,se({name:"bean"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function ou(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ie(e,se({name:"beef"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function lu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ie(e,se({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function cu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ie(e,se({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function uu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ie(e,se({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function du(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ie(e,se({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function fu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ie(e,se({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function vu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];ie(e,se({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function hu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];ie(e,se({name:"clock"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function pu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];ie(e,se({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function qa(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ie(e,se({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function _u(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ie(e,se({name:"egg"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function ba(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ie(e,se({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function Ps(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ie(e,se({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function mu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ie(e,se({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function gu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ie(e,se({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function bu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ie(e,se({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function yu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ie(e,se({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function Ji(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ie(e,se({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function wu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];ie(e,se({name:"moon"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function _n(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ie(e,se({name:"package"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function Su(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];ie(e,se({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function xu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ie(e,se({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function $u(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ie(e,se({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function Pu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ie(e,se({name:"save"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function Eu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ie(e,se({name:"search"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function ya(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ie(e,se({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function vn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ie(e,se({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function wa(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ie(e,se({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function Zi(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ie(e,se({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function hn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ie(e,se({name:"store"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function Nu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];ie(e,se({name:"sun"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function ku(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ie(e,se({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function Ba(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ie(e,se({name:"user"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function Xi(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ie(e,se({name:"users"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function Tu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ie(e,se({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function mt(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ne(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ie(e,se({name:"x"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=W(),l=B(o);re(l,()=>t.children??ee),h(a,o)},$$slots:{default:!0}})),V()}function Pn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:iu};case"animaux":return{displayName:"Viandes et Poissons",icon:ou};case"legumes":return{displayName:"Fruits et Légumes",icon:cu};case"sucres":return{displayName:"Sucrées",icon:lu};case"lof":return{displayName:"L.O.F",icon:_u};case"autres":return{displayName:"Autres",icon:uu};case"epices":return{displayName:"Assaisonnements",icon:mu};case"frais":return{displayName:"Produits Frais",icon:$u};default:return{displayName:e,icon:_n}}}function Es(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Vn(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Wn(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Au(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function Du(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],i=n[t.sortColumn];return a<i?t.sortDirection==="asc"?-1:1:a>i?t.sortDirection==="asc"?1:-1:0}):e}function Sa(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function Ns(e){return e?Wn(e):"-"}function Iu(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",i=n.unit||"unit",o=`${a}_${i}`;if(!r[o]){const l=Sa(a);r[o]={status:a,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Mu(a)}}return r[o].quantity+=n.quantity||0,r},{});return Object.values(t)}function Mu(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ShoppingCart";case"pending":return"Clock";case"delivered":return"CircleCheck";case"cancelled":return"CircleX";default:return"Package"}}let ks=()=>localStorage.getItem("appwrite-user-name")||"";function Cu(e){let t=J(!1),r=J(null);const n=H(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),O.getEnrichedProductById(e))),a=H(()=>s(n)?.who??[]),i=H(()=>s(n)?.stockArray??[]),o=H(()=>s(n)?.purchases??[]),l=H(()=>s(n)?.byDate?Zc(s(n).byDate):[]),c=Ge({purchase:{quantity:null,unit:"",store:"",who:ks()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});let f=J(!1);Da(()=>{!s(n)||s(f)||(c.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,c.purchase.unit=s(n).totalNeededArray[0]?.u??"",c.purchase.store=s(n).storeInfo?.storeName??"",c.purchase.who=ks()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=s(n).totalNeededArray[0]?.u??"",c.store.name=s(n).storeInfo?.storeName??null,c.store.comment=s(n).storeInfo?.storeComment??null,A(f,!0))});let v=J(null);const _=H(()=>s(v)?s(o).find(k=>k.$id===s(v))??null:null);async function m(k,R){A(t,!0),A(r,null);try{const L=await k();return R&&p("success",R),L}catch(L){const pe=L instanceof Error?L.message:"Une erreur est survenue";return A(r,pe,!0),p("error",pe),console.error("[ProductModalState]",L),null}finally{A(t,!1)}}function p(k,R){const L=new CustomEvent("toast",{detail:{type:k,message:R}});window.dispatchEvent(L)}async function g(){s(n)&&await m(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!O.currentMainId)throw new Error("mainId non disponible");const{quantity:k,unit:R}=Es(c.purchase.quantity,c.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await tn(s(n).$id,{},L=>O.getEnrichedProductById(L))),await Wi({products:[s(n).$id],mainId:O.currentMainId,unit:R,quantity:k,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:c.purchase.status||"delivered",orderDate:c.purchase.orderDate||null,deliveryDate:c.purchase.deliveryDate||null}),c.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function x(k){A(v,k.$id,!0)}function b(){A(v,null)}async function E(k){k.$id&&await m(async()=>{const{quantity:R,unit:L}=Es(k.quantity,k.unit);await Ui(k.$id,{unit:L,quantity:R,store:k.store||null,who:k.who||null,notes:k.notes||"",price:k.price||null,status:k.status||null,orderDate:k.orderDate||null,deliveryDate:k.deliveryDate||null}),A(v,null)},"Achat modifié avec succès")}async function M(k){const R=s(o).find(L=>L.$id===k);R&&confirm(`Supprimer cet achat (${R.quantity} ${R.unit}) ?`)&&await m(async()=>{await Gi(k)},"Achat supprimé avec succès")}async function S(){s(n)&&await m(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const k={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime},R=[...s(i),k];s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await ma(s(n).$id,JSON.stringify(R))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await tn(s(n).$id,{stockReel:JSON.stringify(R)},L=>O.getEnrichedProductById(L))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Relevé de stock ajouté")}async function w(k){s(n)&&confirm("Supprimer ce relevé de stock ?")&&await m(async()=>{const R=s(i).filter((L,pe)=>pe!==k);await ma(s(n).$id,JSON.stringify(R))},"Relevé de stock supprimé")}async function $(k){!s(n)||!k.trim()||await m(async()=>{if(s(a).includes(k))throw new Error("Ce volontaire est déjà ajouté");const R=[...s(a),k.trim()];s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update normal...`),await _a(s(n).$id,R)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création avec upsert...`),await tn(s(n).$id,{who:R},L=>O.getEnrichedProductById(L)))},"Volontaire ajouté")}async function N(k){s(n)&&confirm(`Retirer ${k} ?`)&&await m(async()=>{await _a(s(n).$id,s(a).filter(R=>R!==k))},"Volontaire retiré")}async function C(k){s(n)&&await m(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await Vi(s(n).$id,k)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await tn(s(n).$id,{store:JSON.stringify(k)},R=>O.getEnrichedProductById(R)))},"Magasin mis à jour")}async function T(k){s(n)&&await m(async()=>{await jr(s(n).$id,{totalNeededOverride:JSON.stringify(k)})},"Override appliqué")}async function Z(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await m(async()=>{await jr(s(n).$id,{totalNeededOverride:null})},"Override supprimé")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockEntries(){return s(i)},get purchasesList(){return s(o)},get editingPurchaseId(){return s(v)},get editingPurchaseData(){return s(_)},forms:c,addPurchase:g,startEditPurchase:x,cancelEditPurchase:b,updateEditedPurchase:E,removePurchase:M,addStock:S,removeStock:w,addVolunteer:$,removeVolunteer:N,updateStore:C,setOverride:T,removeOverride:Z,formatQuantity:Vn,formatDate:Wn,formatDisplayQuantity:Au}}function Ru(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Ou(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function qu(e,t){t().cancelEditPurchase()}var Bu=P('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Lu=P('<span class="loading loading-spinner loading-sm"></span>'),ju=P('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),zu=P('<span class="loading loading-spinner loading-sm"></span>'),Vu=P('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Wu=(e,t,r)=>t(s(r)),Uu=(e,t,r)=>t(s(r).$id),Gu=P('<span class="loading loading-spinner loading-sm"></span>'),Hu=P('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Qu=P('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Ku=P(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Notes" maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Yu(e,t){z(t,!0);let r=Bt(t,"modalState",7);function n(){return r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(Q){return Q.quantity!==null&&Q.quantity!==0&&Q.unit?.trim()!==""}function i(Q){r().removePurchase(Q)}function o(Q){r().startEditPurchase(Q)}var l=Ku(),c=u(l),f=u(c);vn(f,{class:"h-5 w-5"});var v=d(c,2),_=u(v),m=d(u(_),2),p=u(m),g=u(p);_n(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2),b=d(p,2),E=u(b);E.value=E.__value="";var M=d(E);M.value=M.__value="kg";var S=d(M);S.value=S.__value="gr.";var w=d(S);w.value=w.__value="l.";var $=d(w);$.value=$.__value="ml";var N=d($);N.value=N.__value="unité";var C=d(N);C.value=C.__value="bottes";var T=d(b,2),Z=u(T);hn(Z,{class:"h-4 w-4 opacity-50"});var k=d(Z,2),R=d(T,2),L=u(R);Ba(L,{class:"h-4 w-4 opacity-50"});var pe=d(L,2),Ae=d(R,2),ye=d(u(Ae),2),U=d(m,2),_e=u(U),D=u(_e);Ji(D,{class:"h-4 w-4 opacity-50"});var F=d(D,2),me=d(U,2),Pe=u(me),De=u(Pe),Re=u(De),et=u(Re);et.value=et.__value="delivered";var he=d(et);he.value=he.__value="requested";var ge=d(he);ge.value=ge.__value="ordered";var te=d(De,2),we=d(Pe,2);{var Le=Q=>{var Oe=Bu(),Rt=d(u(Oe),2);Ce(Rt,()=>r().forms.purchase.deliveryDate,Ht=>r().forms.purchase.deliveryDate=Ht),h(Q,Oe)};I(we,Q=>{r().forms.purchase.status==="ordered"&&Q(Le)})}var We=d(me,2),Ee=u(We);Ee.__click=[Ru,n,r];var G=u(Ee);{var ue=Q=>{var Oe=Lu();h(Q,Oe)},Me=Q=>{var Oe=Ye("Ajouter l'achat");h(Q,Oe)};I(G,Q=>{r().loading?Q(ue):Q(Me,!1)})}var Qe=d(v,2);{var ut=Q=>{var Oe=ju(),Rt=u(Oe);vn(Rt,{class:"mx-auto mb-2 h-12 w-12"}),h(Q,Oe)},Pt=Q=>{var Oe=Qu(),Rt=u(Oe),Ht=d(u(Rt));Ve(Ht,21,()=>r().purchasesList,dt=>dt.$id,(dt,ae,br)=>{var yr=W(),wr=B(yr);{var Et=at=>{var Ot=Vu(),qt=u(Ot),ft=u(qt),yt=u(ft),Qt=d(yt,2),Nt=u(Qt);Nt.value=Nt.__value="kg";var wt=d(Nt);wt.value=wt.__value="gr.";var Kt=d(wt);Kt.value=Kt.__value="l.";var Yt=d(Kt);Yt.value=Yt.__value="ml";var nr=d(Yt);nr.value=nr.__value="unité";var ar=d(nr);ar.value=ar.__value="bottes";var xr=d(qt),sr=u(xr),$r=d(xr),Pr=u($r),K=d($r),ve=u(K),tt=u(ve);tt.value=tt.__value="requested";var Ke=d(tt);Ke.value=Ke.__value="ordered";var qe=d(Ke);qe.value=qe.__value="delivered";var je=d(qe);je.value=je.__value="cancelled";var st=d(K),Se=u(st),Te=d(st),xe=u(Te),X=d(Te),be=u(X),ke=d(X),it=u(ke),ot=d(ke),vt=u(ot),St=u(vt);St.__click=[Ou,r,a];var Ze=u(St);{var ht=de=>{var kt=zu();h(de,kt)},Gr=de=>{Pu(de,{class:"h-3 w-3"})};I(Ze,de=>{r().loading?de(ht):de(Gr,!1)})}var Er=d(St,2);Er.__click=[qu,r];var Hr=u(Er);mt(Hr,{class:"h-3 w-3"}),j(de=>St.disabled=de,[()=>r().loading||!a(s(ae))]),Ce(yt,()=>s(ae).quantity,de=>s(ae).quantity=de),Tr(Qt,()=>s(ae).unit,de=>s(ae).unit=de),Ce(sr,()=>s(ae).store,de=>s(ae).store=de),Ce(Pr,()=>s(ae).who,de=>s(ae).who=de),Tr(ve,()=>s(ae).status,de=>s(ae).status=de),Ce(Se,()=>s(ae).orderDate,de=>s(ae).orderDate=de),Ce(xe,()=>s(ae).deliveryDate,de=>s(ae).deliveryDate=de),Ce(be,()=>s(ae).price,de=>s(ae).price=de),Ce(it,()=>s(ae).notes,de=>s(ae).notes=de),h(at,Ot)},Sr=at=>{var Ot=Hu(),qt=u(Ot),ft=u(qt),yt=d(qt),Qt=u(yt),Nt=d(yt),wt=u(Nt),Kt=d(Nt),Yt=u(Kt),nr=u(Yt),ar=d(Kt),xr=u(ar),sr=d(ar),$r=u(sr),Pr=d(sr),K=u(Pr),ve=d(Pr),tt=u(ve),Ke=d(ve),qe=u(Ke),je=u(qe);je.__click=[Wu,o,ae];var st=u(je);Zi(st,{class:"h-4 w-4"});var Se=d(je,2);Se.__click=[Uu,i,ae];var Te=u(Se);{var xe=be=>{var ke=Gu();h(be,ke)},X=be=>{mt(be,{class:"h-4 w-4"})};I(Te,be=>{r().loading?be(xe):be(X,!1)})}j((be,ke,it,ot,vt)=>{q(ft,be),q(Qt,s(ae).store||"-"),q(wt,s(ae).who||"-"),Ne(Yt,1,`badge badge-sm ${ke??""}`),q(nr,it),q(xr,ot),q($r,vt),q(K,s(ae).price?`${s(ae).price}€`:"-"),q(tt,s(ae).notes||"-"),Se.disabled=r().loading},[()=>Vn(s(ae).quantity,s(ae).unit),()=>Sa(s(ae).status).class,()=>Sa(s(ae).status).text,()=>Ns(s(ae).orderDate),()=>Ns(s(ae).deliveryDate)]),h(at,Ot)};I(wr,at=>{r().editingPurchaseId===s(ae).$id?at(Et):at(Sr,!1)})}h(dt,yr)}),h(Q,Oe)};I(Qe,Q=>{r().purchasesList.length===0?Q(ut):Q(Pt,!1)})}j(Q=>{Ne(te,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),Ee.disabled=Q},[()=>r().loading||!n()]),Ce(x,()=>r().forms.purchase.quantity,Q=>r().forms.purchase.quantity=Q),Tr(b,()=>r().forms.purchase.unit,Q=>r().forms.purchase.unit=Q),Ce(k,()=>r().forms.purchase.store,Q=>r().forms.purchase.store=Q),Ce(pe,()=>r().forms.purchase.who,Q=>r().forms.purchase.who=Q),Ce(ye,()=>r().forms.purchase.price,Q=>r().forms.purchase.price=Q),Ce(F,()=>r().forms.purchase.notes,Q=>r().forms.purchase.notes=Q),Tr(Re,()=>r().forms.purchase.status,Q=>r().forms.purchase.status=Q),h(e,l),V()}bt(["click"]);async function Ju(e,t){await t()?.addStock()}var Zu=P('<span class="loading loading-spinner loading-sm"></span>'),Xu=P('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Fu=P('<span class="loading loading-spinner loading-xs"></span>'),ed=P('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),td=P('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),rd=P(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function nd(e,t){z(t,!0);let r=Bt(t,"modalState",7),n=H(()=>r()&&r().forms.stock.quantity&&r().forms.stock.quantity>0&&r().forms.stock.unit);async function a(U){await r()?.removeStock(U)}var i=rd(),o=u(i),l=u(o);ga(l,{class:"h-5 w-5"});var c=d(o,2),f=u(c),v=d(u(f),2),_=u(v),m=u(_);_n(m,{class:"h-4 w-4 opacity-50"});var p=d(m,2),g=d(_,2),x=u(g);x.value=x.__value="";var b=d(x);b.value=b.__value="kg";var E=d(b);E.value=E.__value="gr.";var M=d(E);M.value=M.__value="l.";var S=d(M);S.value=S.__value="ml";var w=d(S);w.value=w.__value="unité";var $=d(w);$.value=$.__value="bottes";var N=d(v,2),C=u(N),T=d(N,2),Z=u(T);Z.__click=[Ju,r];var k=u(Z);{var R=U=>{var _e=Zu();h(U,_e)},L=U=>{var _e=Ye("Ajouter au stock");h(U,_e)};I(k,U=>{r().loading?U(R):U(L,!1)})}var pe=d(c,2);{var Ae=U=>{var _e=Xu(),D=u(_e);ga(D,{class:"mx-auto mb-2 h-12 w-12"}),h(U,_e)},ye=U=>{var _e=td(),D=u(_e),F=d(u(D));Ve(F,23,()=>r().stockEntries,me=>me.dateTime,(me,Pe,De)=>{var Re=ed(),et=u(Re),he=u(et),ge=d(et),te=u(ge),we=d(ge),Le=u(we),We=d(we),Ee=u(We);Ee.__click=()=>a(s(De));var G=u(Ee);{var ue=Qe=>{var ut=Fu();h(Qe,ut)},Me=Qe=>{var ut=Ye("Supprimer");h(Qe,ut)};I(G,Qe=>{r().loading?Qe(ue):Qe(Me,!1)})}j(Qe=>{q(he,`${s(Pe).quantity??""}
                ${s(Pe).unit??""}`),q(te,Qe),q(Le,s(Pe).notes||"-"),Ee.disabled=r().loading},[()=>Wn(s(Pe).dateTime)]),h(me,Re)}),h(U,_e)};I(pe,U=>{r().stockEntries.length===0?U(Ae):U(ye,!1)})}j(()=>{Oa(C,`          ${r().forms.stock.notes??""}
        `),Z.disabled=r().loading||!s(n)}),Ce(p,()=>r().forms.stock.quantity,U=>r().forms.stock.quantity=U),Tr(g,()=>r().forms.stock.unit,U=>r().forms.stock.unit=U),Ce(C,()=>r().forms.stock.notes,U=>r().forms.stock.notes=U),h(e,i),V()}bt(["click"]);var ad=(e,t)=>{e.key==="Enter"&&t()},sd=P("<option> </option>"),id=(e,t,r)=>t(r),od=P('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs hover:text-error p-0"><!></button></div>'),ld=P('<span class="loading loading-spinner loading-sm"></span>'),cd=P('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <label class="input"><!> <input type="text" placeholder="Nom du volontaire" list="volunteers"/> <datalist id="volunteers"></datalist></label> <div class="grid-col mt-6 grid gap-2"><div class="text-base-content/70">Volontaires actuels:</div> <div class="flex flex-wrap gap-2"></div></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function ud(e,t){z(t,!0);let r=J("");const n=H(()=>s(r).trim().length>0&&!t.modalState.whoList.includes(s(r).trim()));async function a(){!s(n)||!t.modalState||(await t.modalState.addVolunteer(s(r).trim()),A(r,""))}async function i(w){await t.modalState?.removeVolunteer(w)}var o=cd(),l=u(o),c=u(l),f=d(u(c),2),v=u(f);Ba(v,{class:"h-4 w-4 opacity-50"});var _=d(v,2);_.__keydown=[ad,a];var m=d(_,2);Ve(m,21,()=>O.uniqueWho,Ra,(w,$)=>{var N=sd(),C=u(N),T={};j(()=>{q(C,s($)),T!==(T=s($))&&(N.value=(N.__value=s($))??"")}),h(w,N)});var p=d(f,2),g=d(u(p),2);Ve(g,20,()=>t.modalState.whoList,w=>w,(w,$)=>{var N=od(),C=u(N),T=d(C);T.__click=[id,i,$];var Z=u(T);mt(Z,{class:"h-3 w-3"}),j(()=>{q(C,`${$??""} `),T.disabled=t.modalState.loading}),h(w,N)});var x=d(p,2),b=u(x);b.__click=a;var E=u(b);{var M=w=>{var $=ld();h(w,$)},S=w=>{var $=Ye("Ajouter");h(w,$)};I(E,w=>{t.modalState.loading?w(M):w(S,!1)})}j(()=>b.disabled=t.modalState.loading||!s(n)),Ce(_,()=>s(r),w=>A(r,w)),h(e,o),V()}bt(["keydown","click"]);var dd=(e,t)=>{e.key==="Enter"&&t()},fd=P("<option> </option>"),vd=P('<span class="loading loading-spinner loading-sm"></span>'),hd=(e,t,r)=>{A(t,""),A(r,"")},pd=P(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/> <datalist id="stores"></datalist></label> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function _d(e,t){z(t,!0);const r=H(()=>t.modalState.forms.store),n=H(()=>s(r).name||""),a=H(()=>s(r).comment||"");let i=J(Ge(s(n))),o=J(Ge(s(a)));const l=H(()=>s(i).trim()!==(s(r).name||"")||s(o).trim()!==(s(r).comment||""));async function c(){if(!s(l))return;const T={storeName:s(i).trim(),storeComment:s(o).trim()};await t.modalState.updateStore(T)}var f=pd(),v=u(f),_=u(v),m=d(u(_),4),p=u(m),g=u(p);hn(g,{class:"h-4 w-4 opacity-50"});var x=d(g,2);x.__keydown=[dd,c];var b=d(x,2);Ve(b,21,()=>O.uniqueStores,Ra,(T,Z)=>{var k=fd(),R=u(k),L={};j(()=>{q(R,s(Z)),L!==(L=s(Z))&&(k.value=(k.__value=s(Z))??"")}),h(T,k)});var E=d(p,2),M=d(m,2),S=u(M);S.__click=c;var w=u(S);{var $=T=>{var Z=vd();h(T,Z)},N=T=>{var Z=Ye("Mettre à jour");h(T,Z)};I(w,T=>{t.modalState.loading?T($):T(N,!1)})}var C=d(S,2);C.__click=[hd,i,o],j(()=>{Oa(E,`          ${s(o)??""}
        `),S.disabled=t.modalState.loading||!s(l),C.disabled=t.modalState.loading}),Ce(x,()=>s(i),T=>A(i,T)),Ce(E,()=>s(o),T=>A(o,T)),h(e,f),V()}bt(["keydown","click"]);async function md(e,t,r,n,a,i){if(!t.modalState)return;const o={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await t.modalState.setOverride(o),A(i,!1)}async function gd(e,t,r){t.modalState&&(await t.modalState.removeOverride(),A(r,!1))}var bd=P('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),yd=P('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),wd=P(" <!>",1),Sd=(e,t)=>A(t,!0),xd=P('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),$d=P('<div class="text-error text-sm">Limite de caractères atteinte</div>'),Pd=P('<span class="loading loading-spinner loading-sm"></span>'),Ed=P('<span class="loading loading-spinner loading-sm"></span>'),Nd=P(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div class="form-control"><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),kd=P('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function Td(e,t){z(t,!0);const r=H(()=>t.modalState.product?.totalNeededOverride),n=H(()=>t.modalState.product?.displayTotalNeeded||[]);let a=J(!1),i=J(Ge(t.modalState.product?.totalNeededOverride?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),o=J(Ge(t.modalState.product?.totalNeededOverride?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=J(Ge(t.modalState.product?.totalNeededOverride?.comment||"")),c=H(()=>s(i)>0&&s(o).trim()!=="");var f=kd(),v=u(f),_=u(v),m=u(_);{var p=x=>{var b=xd(),E=B(b),M=u(E),S=d(u(M),2);{var w=k=>{var R=bd();h(k,R)};I(S,k=>{s(r)&&k(w)})}var $=d(S,2),N=u($);{var C=k=>{var R=wd(),L=B(R),pe=d(L);{var Ae=ye=>{var U=yd(),_e=u(U);Ji(_e,{});var D=d(_e);j(()=>q(D,` ${s(r).comment??""}`)),h(ye,U)};I(pe,ye=>{s(r).comment&&ye(Ae)})}j(ye=>q(L,`${ye??""} `),[()=>Vn(s(r).totalOverride.q,s(r).totalOverride.u)]),h(k,R)},T=k=>{var R=Ye();j(()=>q(R,s(n))),h(k,R)};I(N,k=>{s(r)?k(C):k(T,!1)})}var Z=d(E,2);Z.__click=[Sd,a],h(x,b)},g=x=>{var b=Nd(),E=B(b),M=u(E),S=u(M);Su(S,{class:"h-4 w-4 opacity-50"});var w=d(S,2),$=d(M,2),N=u($);N.value=N.__value="";var C=d(N);C.value=C.__value="kg";var T=d(C);T.value=T.__value="gr.";var Z=d(T);Z.value=Z.__value="l.";var k=d(Z);k.value=k.__value="ml";var R=d(k);R.value=R.__value="unité";var L=d(R);L.value=L.__value="bottes";var pe=d(E,2),Ae=u(pe),ye=d(u(Ae),2),U=d(ye,2);{var _e=te=>{var we=$d();h(te,we)};I(U,te=>{s(l).length>=250&&te(_e)})}var D=d(pe,2),F=u(D);F.__click=[gd,t,a];var me=u(F);{var Pe=te=>{var we=Pd();h(te,we)},De=te=>{var we=Ye();j(()=>q(we,`Réinitialiser le total calculé (${s(n)??""}).`)),h(te,we)};I(me,te=>{t.modalState.loading?te(Pe):te(De,!1)})}var Re=d(F,2);Re.__click=[md,t,i,o,l,a];var et=u(Re);{var he=te=>{var we=Ed();h(te,we)},ge=te=>{var we=Ye("Appliquer");h(te,we)};I(et,te=>{t.modalState.loading?te(he):te(ge,!1)})}j(()=>{F.disabled=t.modalState.loading,Re.disabled=t.modalState.loading||!s(c)}),Ce(w,()=>s(i),te=>A(i,te)),Tr($,()=>s(o),te=>A(o,te)),Ce(ye,()=>s(l),te=>A(l,te)),h(x,b)};I(m,x=>{s(a)?x(g,!1):x(p)})}j(()=>Ne(v,1,`card border-base-300 border ${s(a)?"bg-base-200":"bg-base-100"}`)),h(e,f),V()}bt(["click"]);var Ad=P('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Dd=P('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Id=P('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Md=P('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Cd(e,t){z(t,!0);const r=H(()=>t.modalState.recipes);var n=Md(),a=B(n);Td(a,{get modalState(){return t.modalState}});var i=d(a,2),o=u(i),l=u(o);qa(l,{class:"h-5 w-5"});var c=d(o,2);{var f=_=>{var m=Ad(),p=u(m);_n(p,{class:"mx-auto mb-2 h-12 w-12"}),h(_,m)},v=_=>{var m=Id(),p=u(m),g=d(u(p));Ve(g,21,()=>s(r),x=>x.r,(x,b)=>{var E=Dd(),M=u(E),S=u(M),w=d(M),$=u(w),N=d(w),C=u(N);j(T=>{q(S,`${s(b).r??""} (${(s(b).a||"-")??""} c.)`),q($,`${(s(b).q||s(b).qEq)??""} ${(s(b).u||s(b).uEq)??""}`),q(C,T)},[()=>Wn(s(b).date)]),h(x,E)}),h(_,m)};I(c,_=>{s(r).length===0?_(f):_(v,!1)})}h(e,n),V()}var Rd=P('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Od=P('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),qd=(e,t)=>t("recettes"),Bd=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Ld=P('<span class="badge badge-sm badge-ghost ml-1">0</span>'),jd=(e,t)=>t("achats"),zd=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Vd=P('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Wd=(e,t)=>t("stock"),Ud=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Gd=P('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Hd=(e,t)=>t("volontaires"),Qd=P('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Kd=P('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Yd=(e,t)=>t("magasins"),Jd=P('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Zd=P('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div>',1),Xd=P('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function Fd(e,t){z(t,!0);let r=Bt(t,"initialTab",3,"recettes"),n=H(()=>Cu(t.productId)),a=J(Ge(r()));function i(b){A(a,b,!0)}var o=Xd(),l=u(o),c=u(l),f=u(c);{var v=b=>{var E=Rd(),M=B(E),S=u(M),w=d(M,2),$=u(w),N=u($),C=d($,2),T=d(u(C));j(()=>{q(S,s(n).product?.productName),q(N,s(n).product?.productType),q(T,` ${s(n).product?.displayTotalNeeded??""}`)}),h(b,E)},_=b=>{var E=Od();h(b,E)};I(f,b=>{s(n)&&s(n).product?b(v):b(_,!1)})}var m=d(f,2);m.__click=function(...b){t.onClose?.apply(this,b)};var p=u(m);mt(p,{class:"h-4 w-4"});var g=d(c,2);{var x=b=>{var E=Zd(),M=B(E),S=u(M);S.__click=[qd,i];var w=u(S);qa(w,{class:"mr-1 h-5 w-5"});var $=d(w,2);{var N=G=>{var ue=Bd(),Me=u(ue);j(()=>q(Me,s(n).product?.nbRecipes)),h(G,ue)},C=G=>{var ue=Ld();h(G,ue)};I($,G=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?G(N):G(C,!1)})}var T=d(S,2);T.__click=[jd,i];var Z=u(T);vn(Z,{class:"mr-1 h-5 w-5"});var k=d(Z,2);{var R=G=>{var ue=zd(),Me=u(ue);j(()=>q(Me,s(n).purchasesList.length)),h(G,ue)},L=G=>{var ue=Vd();h(G,ue)};I(k,G=>{s(n).purchasesList.length>0?G(R):G(L,!1)})}var pe=d(T,2);pe.__click=[Wd,i];var Ae=u(pe);ga(Ae,{class:"mr-1 h-5 w-5"});var ye=d(Ae,2);{var U=G=>{var ue=Ud(),Me=u(ue);j(()=>q(Me,s(n).stockEntries.length)),h(G,ue)},_e=G=>{var ue=Gd();h(G,ue)};I(ye,G=>{s(n).stockEntries.length>0?G(U):G(_e,!1)})}var D=d(pe,2);D.__click=[Hd,i];var F=u(D);Xi(F,{class:"mr-1 h-5 w-5"});var me=d(F,2);{var Pe=G=>{var ue=Qd(),Me=u(ue);j(()=>q(Me,s(n).product?.who.length)),h(G,ue)},De=G=>{var ue=Kd();h(G,ue)};I(me,G=>{s(n).product?.who&&s(n).product?.who.length>0?G(Pe):G(De,!1)})}var Re=d(D,2);Re.__click=[Yd,i];var et=u(Re);hn(et,{class:"mr-1 h-5 w-5"});var he=d(M,2),ge=u(he);{var te=G=>{var ue=Jd(),Me=u(ue);mt(Me,{class:"h-4 w-4"});var Qe=d(Me,2),ut=u(Qe);j(()=>q(ut,`erreur : ${s(n).error??""}`)),h(G,ue)};I(ge,G=>{s(n).error&&G(te)})}var we=d(ge,2),Le=u(we);jl(Le,()=>s(a),G=>{var ue=W(),Me=B(ue);{var Qe=Pt=>{Cd(Pt,{get modalState(){return s(n)}})},ut=Pt=>{var Q=W(),Oe=B(Q);{var Rt=dt=>{Yu(dt,{get modalState(){return s(n)}})},Ht=dt=>{var ae=W(),br=B(ae);{var yr=Et=>{nd(Et,{get modalState(){return s(n)}})},wr=Et=>{var Sr=W(),at=B(Sr);{var Ot=ft=>{ud(ft,{get modalState(){return s(n)}})},qt=ft=>{var yt=W(),Qt=B(yt);{var Nt=wt=>{_d(wt,{get modalState(){return s(n)}})};I(Qt,wt=>{s(a)==="magasins"&&wt(Nt)},!0)}h(ft,yt)};I(at,ft=>{s(a)==="volontaires"?ft(Ot):ft(qt,!1)},!0)}h(Et,Sr)};I(br,Et=>{s(a)==="stock"?Et(yr):Et(wr,!1)},!0)}h(dt,ae)};I(Oe,dt=>{s(a)==="achats"?dt(Rt):dt(Ht,!1)},!0)}h(Pt,Q)};I(Me,Pt=>{s(a)==="recettes"?Pt(Qe):Pt(ut,!1)})}h(G,ue)});var We=d(he,2),Ee=u(We);Ee.__click=function(...G){t.onClose?.apply(this,G)},j(()=>{Ne(S,1,`tab ${s(a)==="recettes"?"tab-active":""}`),Ne(T,1,`tab ${s(a)==="achats"?"tab-active":""}`),Ne(pe,1,`tab ${s(a)==="stock"?"tab-active":""}`),Ne(D,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),Ne(Re,1,`tab ${s(a)==="magasins"?"tab-active":""}`)}),h(b,E)};I(g,b=>{s(n)&&b(x)})}h(e,o),V()}bt(["click"]);var ef=()=>O.setGroupBy("none"),tf=()=>O.setGroupBy("store"),rf=()=>O.setGroupBy("productType"),nf=(e,t)=>O.toggleProductType(t),af=P("<button><!> </button>"),sf=()=>O.toggleTemperature("frais"),of=()=>O.toggleTemperature("surgele"),lf=()=>O.clearTypeAndTemperatureFilters(),cf=P('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),uf=(e,t)=>O.toggleStore(t),df=P("<button> </button>"),ff=P('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),vf=(e,t)=>O.toggleWho(t),hf=P("<button> </button>"),pf=P('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),_f=(e,t)=>{O.clearFilters(),A(t,!1)},mf=P('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function gf(e,t){z(t,!0);let r=J(!1);const n=H(()=>O.filters),a=H(()=>O.uniqueStores),i=H(()=>O.uniqueWho),o=H(()=>O.uniqueProductTypes);var l=mf(),c=B(l),f=u(c),v=d(f,2),_=d(u(v),2),m=u(_),p=u(m),g=u(p);ba(g,{class:"w-5 h-5"});var x=d(p,2),b=u(x);mt(b,{class:"w-4 h-4"});var E=d(m,2),M=d(u(E),2),S=u(M);S.__change=[ef];var w=d(S,2);w.__change=[tf];var $=d(w,2);$.__change=[rf];var N=d(E,2),C=u(N),T=d(u(C),2);Ve(T,20,()=>s(o),he=>he,(he,ge)=>{const te=H(()=>Pn(ge));var we=af();we.__click=[nf,ge];var Le=u(we);en(Le,()=>s(te).icon,(Ee,G)=>{G(Ee,{class:"w-3 h-3 mr-1"})});var We=d(Le);j(Ee=>{Ne(we,1,`btn btn-sm ${Ee??""}`),q(We,` ${s(te).displayName??""}`)},[()=>s(n).selectedProductTypes.length===0?"btn-soft btn-accent":s(n).selectedProductTypes.includes(ge)?"btn-accent":"btn-dash btn-accent"]),h(he,we)});var Z=d(T,2),k=u(Z);k.__click=[sf];var R=u(k);ya(R,{class:"w-3 h-3"});var L=d(k,2);L.__click=[of];var pe=u(L);wa(pe,{class:"w-3 h-3"});var Ae=d(L,2);{var ye=he=>{var ge=cf();ge.__click=[lf];var te=u(ge);mt(te,{class:"w-3 h-3"}),h(he,ge)};I(Ae,he=>{(s(n).selectedProductTypes.length>0||s(n).selectedTemperatures.length>0)&&he(ye)})}var U=d(N,2);{var _e=he=>{var ge=ff(),te=u(ge),we=d(u(te),2);Ve(we,20,()=>s(a),Le=>Le,(Le,We)=>{var Ee=df();Ee.__click=[uf,We];var G=u(Ee);j(ue=>{Ne(Ee,1,`btn btn-sm ${ue??""}`),q(G,We)},[()=>s(n).selectedStores.length===0?"btn-soft btn-accent":s(n).selectedStores.includes(We)?"btn-accent":"btn-dash btn-accent"]),h(Le,Ee)}),h(he,ge)};I(U,he=>{s(a).length>0&&he(_e)})}var D=d(U,2);{var F=he=>{var ge=pf(),te=u(ge),we=d(u(te),2);Ve(we,20,()=>s(i),Le=>Le,(Le,We)=>{var Ee=hf();Ee.__click=[vf,We];var G=u(Ee);j(ue=>{Ne(Ee,1,`btn btn-sm ${ue??""}`),q(G,We)},[()=>s(n).selectedWho.length===0?"btn-soft btn-accent":s(n).selectedWho.includes(We)?"btn-accent":"btn-dash btn-accent"]),h(Le,Ee)}),h(he,ge)};I(D,he=>{s(i).length>0&&he(F)})}var me=d(D,4);me.__click=[_f,r];var Pe=u(me);mt(Pe,{class:"w-4 h-4 mr-2"});var De=d(c,2),Re=u(De),et=u(Re);ba(et,{class:"w-6 h-6"}),j((he,ge)=>{Mr(S,s(n).groupBy==="none"),Mr(w,s(n).groupBy==="store"),Mr($,s(n).groupBy==="productType"),Ne(k,1,`btn btn-sm ${he??""}`),Ne(L,1,`btn btn-sm ${ge??""}`)},[()=>s(n).selectedTemperatures.length===0?"btn-soft btn-success":s(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(n).selectedTemperatures.length===0?"btn-soft btn-info":s(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Zl(f,()=>s(r),he=>A(r,he)),h(e,l),V()}bt(["change","click"]);bt(["mousedown"]);var bf=(e,t,r)=>t(r),yf=P("<button><span> </span> <!></button>"),wf=(e,t)=>t(),Sf=P('<div class="space-y-4"><div class="space-y-2"><fieldset><legend class="label"><span class="label-text">Dates incluses</span></legend> <div class="flex flex-wrap gap-1"><!> <button class="btn btn-sm btn-primary btn-outline ms-4" type="button"><span>Toutes les dates</span></button></div></fieldset></div></div>');function xf(e,t){z(t,!0);const n=[...Bt(t,"allDates",19,()=>[])()].sort();let a=n[0],i=n[n.length-1],o=J(Ge(a)),l=J(Ge(i));function c(S){s(o)===S&&s(l)===S?m():new Date(S)<new Date(s(o))?A(o,S,!0):(new Date(S)>new Date(s(l))||A(o,S,!0),A(l,S,!0))}function f(S){return new Date(S)>=new Date(s(o))&&new Date(S)<=new Date(s(l))?"btn-soft btn-primary":"btn-dash btn-primary opacity-80"}function v(S){return new Date(S).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function _(S){const $=new Date(S).getUTCHours();return $===12?"sun":$===20?"moon":$===8?"cloud":null}function m(){A(o,a,!0),A(l,i,!0)}Da(()=>{O.setDateRange(s(o),s(l))});var p=Sf(),g=u(p),x=u(g),b=d(u(x),2),E=u(b);Ve(E,18,()=>n,S=>S,(S,w)=>{var $=yf();$.__click=[bf,c,w];var N=u($),C=u(N),T=d(N,2);{var Z=R=>{Nu(R,{size:16})},k=R=>{var L=W(),pe=B(L);{var Ae=U=>{wu(U,{size:16})},ye=U=>{var _e=W(),D=B(_e);{var F=me=>{pu(me,{size:16})};I(D,me=>{_(w)==="cloud"&&me(F)},!0)}h(U,_e)};I(pe,U=>{_(w)==="moon"?U(Ae):U(ye,!1)},!0)}h(R,L)};I(T,R=>{_(w)==="sun"?R(Z):R(k,!1)})}j((R,L)=>{Ne($,1,`btn btn-sm ${R??""}`),q(C,L)},[()=>f(w),()=>v(w)]),h(S,$)});var M=d(E,2);M.__click=[wf,m],h(e,p),V()}bt(["click"]);const Xr=e=>{var t=$f(),r=u(t);Zi(r,{class:"h-4 w-4 text-amber-600"}),h(e,t)};var $f=P('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),Pf=()=>O.clearFilters(),Ef=e=>O.setSearchQuery(e.currentTarget.value),Nf=()=>O.setGroupBy("none"),kf=()=>O.setGroupBy("store"),Tf=()=>O.setGroupBy("productType"),Af=(e,t)=>O.toggleProductType(t),Df=P("<button><!> </button>"),If=()=>O.toggleTemperature("frais"),Mf=()=>O.toggleTemperature("surgele"),Cf=()=>O.clearTypeAndTemperatureFilters(),Rf=P('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Of=P('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),qf=(e,t)=>O.toggleStore(t),Bf=P("<button><!> </button>"),Lf=()=>O.clearStoreFilters(),jf=P('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),zf=P('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Vf=(e,t)=>O.toggleWho(t),Wf=P("<button><!> </button>"),Uf=()=>O.clearWhoFilters(),Gf=P('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Hf=P('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Qf=()=>O.handleSort("productName"),Kf=()=>O.handleSort("store"),Yf=()=>O.handleSort("who"),Jf=()=>O.handleSort("productType"),Zf=P('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Xf=P('<tr class="bg-base-200 sticky top-10 z-10 font-semibold"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),Ff=(e,t,r)=>t(s(r).$id,"recettes"),ev=P('<div class="text-base-content/60 text-xs"> </div>'),tv=P('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),rv=P('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),nv=(e,t,r)=>t(s(r).$id,"magasins"),av=P('<div class="tooltip tooltip-info"> </div>'),sv=(e,t,r)=>t(s(r).$id,"volontaires"),iv=P('<span class="badge badge-soft badge-info badge-sm"> </span>'),ov=P('<div class="flex flex-wrap gap-1 pr-8"></div>'),lv=(e,t,r)=>t(s(r).$id,"recettes"),cv=P('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),uv=(e,t,r)=>t(s(r).$id,"achats"),dv=P("<div><!> <span> </span></div>"),fv=P('<span class="text-sm">-</span>'),vv=P('<div class="bg-warning m-auto rounded px-2 py-1"> </div>'),hv=P('<tr class="hover:bg-base-200/20 transition-colors"><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!></td></tr>'),pv=P("<!> <!>",1),_v=P('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),mv=P('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><!> <div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function gv(e,t){z(t,!0);const r={Package:_n,MessageCircleQuestionMark:yu,ShoppingCart:vn,Clock:hu,CircleCheck:fu,CircleX:vu},n=H(()=>O.displayProducts),a=H(()=>O.stats),i=H(()=>O.uniqueStores),o=H(()=>O.uniqueWho),l=H(()=>O.uniqueProductTypes),c=H(()=>O.filters);let f=J(null),v=J("recettes");function _(K,ve="recettes"){A(v,ve,!0),A(f,K,!0)}function m(){A(f,null)}var p=mv(),g=B(p),x=u(g),b=u(x),E=u(b);Ps(E,{class:"mr-1 h-4 w-4"});var M=d(E),S=d(x,2),w=u(S),$=u(w),N=u($),C=u(N);ba(C,{class:"h-5 w-5"});var T=d(N,2);T.__click=[Pf];var Z=u(T);mt(Z,{class:"h-4 w-4"});var k=d(w,2),R=u(k),L=d(u(R),2),pe=u(L);Eu(pe,{class:"h-4 w-4"});var Ae=d(pe,2);Ae.__input=[Ef];var ye=d(R,2),U=d(u(ye),2),_e=u(U);_e.__change=[Nf];var D=d(_e,2);D.__change=[kf];var F=d(D,2);F.__change=[Tf];var me=d(k,2),Pe=u(me);xf(Pe,{get allDates(){return O.allDates}});var De=d(Pe,2),Re=u(De);{var et=K=>{var ve=Of(),tt=u(ve),Ke=d(u(tt),2),qe=u(Ke);Ve(qe,16,()=>s(l),be=>be,(be,ke)=>{const it=H(()=>Pn(ke));var ot=Df();ot.__click=[Af,ke];var vt=u(ot);en(vt,()=>s(it).icon,(Ze,ht)=>{ht(Ze,{class:"mr-1 h-5 w-5"})});var St=d(vt);j(Ze=>{Ne(ot,1,`btn btn-sm ${Ze??""}`),q(St,` ${s(it).displayName??""}`)},[()=>s(c).selectedProductTypes.length===0?"btn-soft btn-accent":s(c).selectedProductTypes.includes(ke)?"btn-accent":"btn-dash btn-accent"]),h(be,ot)});var je=d(qe,2);je.__click=[If];var st=u(je);ya(st,{class:"h-5 w-5"});var Se=d(je,2);Se.__click=[Mf];var Te=u(Se);wa(Te,{class:"h-5 w-5"});var xe=d(Se,2);{var X=be=>{var ke=Rf();ke.__click=[Cf];var it=u(ke);mt(it,{class:"h-3 w-3"}),h(be,ke)};I(xe,be=>{(s(c).selectedProductTypes.length>0||s(c).selectedTemperatures.length>0)&&be(X)})}j((be,ke)=>{Ne(je,1,`btn btn-sm ms-4 ${be??""}`),Ne(Se,1,`btn btn-sm ${ke??""}`)},[()=>s(c).selectedTemperatures.length===0?"btn-soft btn-success":s(c).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(c).selectedTemperatures.length===0?"btn-soft btn-info":s(c).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(K,ve)};I(Re,K=>{s(l).length>0&&K(et)})}var he=d(De,2),ge=u(he);{var te=K=>{var ve=zf(),tt=u(ve),Ke=d(u(tt),2),qe=u(Ke);Ve(qe,16,()=>s(i),Se=>Se,(Se,Te)=>{var xe=Bf();xe.__click=[qf,Te];var X=u(xe);hn(X,{class:"mr-1 h-3 w-3"});var be=d(X);j(ke=>{Ne(xe,1,`btn btn-xs ${ke??""}`),q(be,` ${Te??""}`)},[()=>s(c).selectedStores.length===0?"btn-soft btn-accent":s(c).selectedStores.includes(Te)?"btn-accent":"btn-dash btn-accent"]),h(Se,xe)});var je=d(qe,2);{var st=Se=>{var Te=jf();Te.__click=[Lf];var xe=u(Te);mt(xe,{class:"h-3 w-3"}),h(Se,Te)};I(je,Se=>{s(c).selectedStores.length>0&&Se(st)})}h(K,ve)};I(ge,K=>{s(i).length>0&&K(te)})}var we=d(ge,2);{var Le=K=>{var ve=Hf(),tt=u(ve),Ke=d(u(tt),2),qe=u(Ke);Ve(qe,16,()=>s(o),Se=>Se,(Se,Te)=>{var xe=Wf();xe.__click=[Vf,Te];var X=u(xe);Ba(X,{class:"mr-1 h-3 w-3"});var be=d(X);j(ke=>{Ne(xe,1,`btn btn-xs ${ke??""}`),q(be,` ${Te??""}`)},[()=>s(c).selectedWho.length===0?" btn-soft btn-info":s(c).selectedWho.includes(Te)?" btn-info":"btn-dash btn-info"]),h(Se,xe)});var je=d(qe,2);{var st=Se=>{var Te=Gf();Te.__click=[Uf];var xe=u(Te);mt(xe,{class:"h-3 w-3"}),h(Se,Te)};I(je,Se=>{s(c).selectedWho.length>0&&Se(st)})}h(K,ve)};I(we,K=>{s(o).length>0&&K(Le)})}var We=d(S,2),Ee=u(We),G=u(Ee),ue=u(G),Me=u(ue);Me.__click=[Qf];var Qe=u(Me),ut=u(Qe);Ps(ut,{class:"h-4 w-4"});var Pt=d(ut,2);{var Q=K=>{var ve=Ye();j(()=>q(ve,s(c).sortDirection==="asc"?"↑":"↓")),h(K,ve)};I(Pt,K=>{s(c).sortColumn==="productName"&&K(Q)})}var Oe=d(Me);Oe.__click=[Kf];var Rt=u(Oe),Ht=u(Rt);hn(Ht,{class:"h-4 w-4"});var dt=d(Ht,2);{var ae=K=>{var ve=Ye();j(()=>q(ve,s(c).sortDirection==="asc"?"↑":"↓")),h(K,ve)};I(dt,K=>{s(c).sortColumn==="store"&&K(ae)})}var br=d(Oe);br.__click=[Yf];var yr=u(br),wr=u(yr);Xi(wr,{class:"h-4 w-4"});var Et=d(wr,2);{var Sr=K=>{var ve=Ye();j(()=>q(ve,s(c).sortDirection==="asc"?"↑":"↓")),h(K,ve)};I(Et,K=>{s(c).sortColumn==="who"&&K(Sr)})}var at=d(br);at.__click=[Jf];var Ot=u(at),qt=d(u(Ot));{var ft=K=>{var ve=Ye();j(()=>q(ve,s(c).sortDirection==="asc"?"↑":"↓")),h(K,ve)};I(qt,K=>{s(c).sortColumn==="productType"&&K(ft)})}var yt=d(at,2),Qt=u(yt),Nt=u(Qt);vn(Nt,{class:"h-4 w-4"});var wt=d(yt),Kt=u(wt),Yt=u(Kt);gu(Yt,{class:"h-4 w-4"});var nr=d(G);Ve(nr,21,()=>Object.entries(s(n)),([K,ve])=>K,(K,ve)=>{var tt=H(()=>Is(s(ve),2));let Ke=()=>s(tt)[0],qe=()=>s(tt)[1];var je=pv(),st=B(je);{var Se=xe=>{const X=H(()=>Pn(Ke()));var be=Xf(),ke=u(be),it=u(ke),ot=u(it);{var vt=Ze=>{var ht=Ye();j(()=>q(ht,`🏪 ${Ke()??""} (${qe().length??""})`)),h(Ze,ht)},St=Ze=>{var ht=W(),Gr=B(ht);{var Er=de=>{var kt=Zf(),mn=u(kt);en(mn,()=>s(X).icon,(bn,Hn)=>{Hn(bn,{class:"h-4 w-4"})});var gn=d(mn,2),Un=u(gn),Gn=d(gn,2),Nr=u(Gn);j(()=>{q(Un,s(X).displayName),q(Nr,`(${qe().length??""})`)}),h(de,kt)},Hr=de=>{var kt=Ye();j(()=>q(kt,`📦 ${Ke()??""} (${qe().length??""})`)),h(de,kt)};I(Gr,de=>{s(c).groupBy==="productType"?de(Er):de(Hr,!1)},!0)}h(Ze,ht)};I(ot,Ze=>{s(c).groupBy==="store"?Ze(vt):Ze(St,!1)})}h(xe,be)};I(st,xe=>{Ke()!==""&&xe(Se)})}var Te=d(st,2);Ve(Te,17,()=>Du(qe(),s(c)),xe=>xe.$id,(xe,X)=>{const be=H(()=>O.getFormattedTotalNeeded(s(X).$id)),ke=H(()=>Pn(s(X).productType)),it=H(()=>Iu(s(X).purchases||[]));var ot=hv(),vt=u(ot);vt.__click=[Ff,_,X];var St=u(vt),Ze=u(St),ht=u(Ze),Gr=u(ht),Er=d(ht,2);{var Hr=Y=>{var fe=ev(),ze=u(fe);j(()=>q(ze,`Ancien: ${s(X).previousNames[0]??""}`)),h(Y,fe)};I(Er,Y=>{s(X).previousNames&&s(X).previousNames.length>0&&Y(Hr)})}var de=d(Ze,2),kt=u(de);{var mn=Y=>{var fe=tv(),ze=u(fe);ya(ze,{class:"text-success h-4 w-4"}),h(Y,fe)};I(kt,Y=>{s(X).pFrais&&Y(mn)})}var gn=d(kt,2);{var Un=Y=>{var fe=rv(),ze=u(fe);wa(ze,{class:"text-info h-4 w-4"}),h(Y,fe)};I(gn,Y=>{s(X).pSurgel&&Y(Un)})}var Gn=d(St,2);Xr(Gn);var Nr=d(vt);Nr.__click=[nv,_,X];var bn=u(Nr);{var Hn=Y=>{var fe=av(),ze=u(fe);j(()=>{Tn(fe,"data-tip",s(X).storeInfo.storeComment),q(ze,s(X).storeInfo.storeName||"-")}),h(Y,fe)},Fi=Y=>{var fe=Ye();j(()=>q(fe,s(X).storeInfo?.storeName||"-")),h(Y,fe)};I(bn,Y=>{s(X).storeInfo?.storeComment?Y(Hn):Y(Fi,!1)})}var eo=d(bn,2);Xr(eo);var Qn=d(Nr);Qn.__click=[sv,_,X];var La=u(Qn);{var to=Y=>{var fe=ov();Ve(fe,20,()=>s(X).who,ze=>ze,(ze,Jt)=>{var ir=iv(),Qr=u(ir);j(()=>q(Qr,Jt)),h(ze,ir)}),h(Y,fe)},ro=Y=>{var fe=Ye("-");h(Y,fe)};I(La,Y=>{s(X).who&&s(X).who.length>0?Y(to):Y(ro,!1)})}var no=d(La,2);Xr(no);var Kn=d(Qn),ao=u(Kn),ja=u(ao);en(ja,()=>s(ke).icon,(Y,fe)=>{fe(Y,{class:"h-3 w-3"})});var so=d(ja),Yn=d(Kn);Yn.__click=[lv,_,X];var za=u(Yn),io=u(za),Va=d(za,2);{var oo=Y=>{var fe=cv(),ze=u(fe),Jt=u(ze),ir=d(Jt);qa(ir,{class:"h-3 w-3"});var Qr=d(ze,2),yn=u(Qr),Kr=d(yn);Tu(Kr,{class:"h-3 w-3"}),j(()=>{q(Jt,`${s(X)?.nbRecipes??""} `),q(yn,`${s(X)?.totalAssiettes??""} `)}),h(Y,fe)};I(Va,Y=>{(s(X).nbRecipes||s(X).totalAssiettes)&&Y(oo)})}var lo=d(Va,2);Xr(lo);var Jn=d(Yn);Jn.__click=[uv,_,X];var Wa=u(Jn),Ua=u(Wa);Ve(Ua,17,()=>s(it),Y=>Y.status,(Y,fe)=>{const ze=H(()=>r[s(fe).icon]);var Jt=dv(),ir=u(Jt);en(ir,()=>s(ze),(Kr,mo)=>{mo(Kr,{class:"h-4 w-4"})});var Qr=d(ir,2),yn=u(Qr);j(Kr=>{Ne(Jt,1,`badge badge-soft flex items-center gap-2 ${s(fe).badgeClass??""}`),q(yn,Kr)},[()=>Vn(s(fe).quantity,s(fe).unit)]),h(Y,Jt)});var co=d(Ua,2);{var uo=Y=>{var fe=fv();h(Y,fe)};I(co,Y=>{s(it).length===0&&Y(uo)})}var fo=d(Wa,2);Xr(fo);var vo=d(Jn),ho=u(vo);{var po=Y=>{var fe=vv(),ze=u(fe);j(()=>q(ze,s(X).displayMissingQuantity)),h(Y,fe)},_o=Y=>{du(Y,{size:28,strokeWidth:3,class:"text-success m-auto"})};I(ho,Y=>{s(X).displayMissingQuantity!=="✅ Complet"?Y(po):Y(_o,!1)})}j(()=>{q(Gr,s(X).productName),Ne(Nr,1,`${s(c).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),Ne(Kn,1,gi(s(c).groupBy==="productType"?"hidden":"")),q(so,` ${s(ke).displayName??""}`),q(io,s(be))}),h(xe,ot)}),h(K,je)});var ar=d(Ee,2);{var xr=K=>{var ve=_v();h(K,ve)};I(ar,K=>{Object.values(s(n)).flat().length===0&&K(xr)})}var sr=d(g,2);{var $r=K=>{Fd(K,{get productId(){return s(f)},get initialTab(){return s(v)},onClose:m})};I(sr,K=>{s(f)&&K($r)})}var Pr=d(sr,2);gf(Pr,{}),j(()=>{q(M,` ${s(a).total??""}`),Oa(Ae,s(c).searchQuery),Mr(_e,s(c).groupBy==="none"),Mr(D,s(c).groupBy==="store"),Mr(F,s(c).groupBy==="productType"),Ne(Oe,1,`hover:bg-base-100 cursor-pointer text-center ${s(c).groupBy==="store"?"hidden":""}`),Ne(at,1,`hover:bg-base-100 cursor-pointer text-center ${s(c).groupBy==="productType"?"hidden":""}`)}),h(e,p),V()}bt(["click","input","change"]);Fo();var bv=P('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function yv(e){var t=bv();h(e,t)}var wv=P('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Sv(e,t){var r=wv(),n=d(u(r),2),a=d(u(n),2),i=u(a);j(()=>q(i,t.message)),h(e,r)}var xv=P('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function $v(e,t){var r=xv(),n=u(r),a=u(n);ku(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=d(a,2),o=d(u(i),2),l=u(o);j(()=>q(l,t.message||"Erreur inconnue")),h(e,r)}var Pv=P('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),Ev=P('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),Nv=P('<div class="text-base-content/60"> </div>'),kv=P('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),Tv=P('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),Av=P('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),Dv=P('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function Iv(e,t){z(t,!0);let r,n=J(null),a=J(!0),i=J(!1);xi(async()=>{r=Oc();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await O.initialize(r)}catch(D){const F=D instanceof Error?D.message:"Erreur lors de l'initialisation";A(n,F,!0),console.error("[App] Erreur initialisation:",D)}finally{A(a,!1)}}),tc(()=>{O.destroy()});async function o(){if(!(!r||s(i))){A(i,!0);try{await O.forceReload(r)}catch(D){console.error("[App] Erreur lors du rechargement forcé:",D)}finally{A(i,!1)}}}const l=H(()=>s(n)||O.error),c=H(()=>s(a)||O.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=Dv(),_=u(v),m=u(_),p=u(m),g=d(u(p),2),x=u(g);{var b=D=>{var F=Pv();h(D,F)};I(x,D=>{O.realtimeConnected&&D(b)})}var E=d(x,2);{var M=D=>{var F=Ev();h(D,F)};I(E,D=>{O.syncing&&D(M)})}var S=d(E,2);{var w=D=>{var F=Nv(),me=u(F);j(Pe=>q(me,`Maj: ${Pe??""}`),[()=>new Date(O.lastSync).toLocaleTimeString()]),h(D,F)};I(S,D=>{O.lastSync&&D(w)})}var $=d(S,2);{var N=D=>{var F=kv();let me;F.__click=o;var Pe=u(F);xu(Pe,{class:"h-4 w-4"}),j(De=>{me=Ne(F,1,"btn btn-outline btn-sm",null,me,De),F.disabled=s(i)||O.loading},[()=>({loading:s(i)||O.loading})]),h(D,F)};I($,D=>{s(n)||D(N)})}var C=d($,2);{var T=D=>{var F=Tv(),me=u(F),Pe=u(me);bu(Pe,{class:"mr-2 h-4 w-4"}),j(()=>Tn(me,"href",f)),h(D,F)};I(C,D=>{s(n)&&D(T)})}var Z=d(_,2),k=u(Z);{var R=D=>{$v(D,{get message(){return s(l)}})},L=D=>{var F=W(),me=B(F);{var Pe=De=>{Sv(De,{get message(){return s(l)}})};I(me,De=>{s(l)&&De(Pe)},!0)}h(D,F)};I(k,D=>{s(n)?D(R):D(L,!1)})}var pe=d(k,2);{var Ae=D=>{yv(D)};I(pe,D=>{s(c)&&D(Ae)})}var ye=d(pe,2);{var U=D=>{gv(D,{})},_e=D=>{var F=W(),me=B(F);{var Pe=De=>{var Re=Av();h(De,Re)};I(me,De=>{!O.loading&&!s(n)&&De(Pe)},!0)}h(D,F)};I(ye,D=>{O.enrichedProducts.length>0?D(U):D(_e,!1)})}h(e,v),V()}bt(["click"]);ql(Iv,{target:document.getElementById("app_products")});
