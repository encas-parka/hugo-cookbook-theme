(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();const ns=!1;var hn=Array.isArray,Bo=Array.prototype.indexOf,ra=Array.from,Bn=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,Lo=Object.getOwnPropertyDescriptors,zo=Object.prototype,Vo=Array.prototype,as=Object.getPrototypeOf,ba=Object.isExtensible;function Mr(e){return typeof e=="function"}const F=()=>{};function Uo(e){for(var t=0;t<e.length;t++)e[t]()}function ss(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function os(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const ct=2,na=4,aa=8,ar=16,It=32,sr=64,sa=128,mt=256,dn=512,rt=1024,dt=2048,Ht=4096,yt=8192,or=16384,oa=32768,ir=65536,ya=1<<17,Wo=1<<18,Sr=1<<19,Go=1<<20,Ln=1<<21,pn=1<<22,Xt=1<<23,Ft=Symbol("$state"),is=Symbol("legacy props"),Qo=Symbol(""),Or=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function ls(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ho(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ko(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Jo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Yo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Zo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Xo(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Fo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ei(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ti(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ri(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const mn=1,gn=2,cs=4,ni=8,ai=16,si=1,oi=2,ii=4,li=8,ci=16,ui=1,di=2,Ke=Symbol(),fi="http://www.w3.org/1999/xhtml",vi="http://www.w3.org/2000/svg",hi="@attach";function pi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function mi(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let gi=!1;function us(e){return e===this.v}function ds(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function _i(e,t){return e!==t}function fs(e){return!ds(e,this.v)}let Pr=!1,bi=!1;function yi(){Pr=!0}let Ue=null;function pr(e){Ue=e}function z(e,t=!1,r){Ue={p:Ue,c:null,e:null,s:e,x:null,l:Pr&&!t?{s:null,u:null,$:[]}:null}}function V(e){var t=Ue,r=t.e;if(r!==null){t.e=null;for(var n of r)ks(n)}return Ue=t.p,{}}function xr(){return!Pr||Ue!==null&&Ue.l===null}let Jt=[];function vs(){var e=Jt;Jt=[],Uo(e)}function tr(e){if(Jt.length===0&&!qr){var t=Jt;queueMicrotask(()=>{t===Jt&&vs()})}Jt.push(e)}function wi(){for(;Jt.length>0;)vs()}const Si=new WeakMap;function hs(e){var t=Pe;if(t===null)return $e.f|=Xt,e;if((t.f&oa)===0){if((t.f&sa)===0)throw!t.parent&&e instanceof Error&&ps(e),e;t.b.error(e)}else mr(e,t)}function mr(e,t){for(;t!==null;){if((t.f&sa)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&ps(e),e}function ps(e){const t=Si.get(e);t&&(Bn(e,"message",{value:t.message}),Bn(e,"stack",{value:t.stack}))}const nn=new Set;let Ie=null,on=null,zn=new Set,Et=[],_n=null,Vn=!1,qr=!1;class pt{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#l=[];#o=[];#i=[];#a=[];#s=[];#f=[];skipped_effects=new Set;process(t){Et=[],on=null;var r=pt.apply(this);for(const s of t)this.#n(s);if(this.#c===0){this.#v();var n=this.#o,a=this.#i;this.#o=[],this.#i=[],this.#a=[],on=this,Ie=null,wa(n),wa(a),on=null,this.#u?.resolve()}else this.#d(this.#o),this.#d(this.#i),this.#d(this.#a);r();for(const s of this.#l)Vr(s);this.#l=[]}#n(t){t.f^=rt;for(var r=t.first;r!==null;){var n=r.f,a=(n&(It|sr))!==0,s=a&&(n&rt)!==0,i=s||(n&yt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=rt:(n&na)!==0?this.#i.push(r):(n&rt)===0&&((n&pn)!==0&&r.b?.is_pending()?this.#l.push(r):Pn(r)&&((r.f&ar)!==0&&this.#a.push(r),Vr(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#d(t){for(const r of t)((r.f&dt)!==0?this.#s:this.#f).push(r),at(r,rt);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){Ie=this}deactivate(){Ie=null}flush(){if(Et.length>0){if(this.activate(),ms(),Ie!==null&&Ie!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of zn)if(zn.delete(t),t(),Ie!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),nn.size>1){this.#e.clear();let t=!0;for(const r of nn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;gs(n)}if(Et.length>0){Ie=r;const n=pt.apply(r);for(const a of Et)r.#n(a);Et=[],n()}}Ie=null}nn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#s)at(t,dt),rr(t);for(const t of this.#f)at(t,Ht),rr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=ss()).promise}static ensure(){if(Ie===null){const t=Ie=new pt;nn.add(Ie),qr||pt.enqueue(()=>{Ie===t&&t.flush()})}return Ie}static enqueue(t){tr(t)}static apply(t){return F}}function Pi(e){var t=qr;qr=!0;try{for(var r;;){if(wi(),Et.length===0&&(Ie?.flush(),Et.length===0))return _n=null,r;ms()}}finally{qr=t}}function ms(){var e=hr;Vn=!0;try{var t=0;for($a(!0);Et.length>0;){var r=pt.ensure();if(t++>1e3){var n,a;xi()}r.process(Et),zt.clear()}}finally{Vn=!1,$a(e),_n=null}}function xi(){try{Zo()}catch(e){mr(e,_n)}}let Kt=null;function wa(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(or|yt))===0&&Pn(n)&&(Kt=[],Vr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Ns(n):n.fn=null),Kt?.length>0)){zt.clear();for(const a of Kt)Vr(a);Kt=[]}}Kt=null}}function gs(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&ct)!==0?gs(t):(r&(pn|ar))!==0&&(at(t,dt),rr(t))}}function rr(e){for(var t=_n=e;t.parent!==null;){t=t.parent;var r=t.f;if(Vn&&t===Pe&&(r&ar)!==0)return;if((r&(sr|It))!==0){if((r&rt)===0)return;t.f^=rt}}Et.push(t)}function ia(e){let t=0,r=Ut(0),n;return()=>{Li()&&(o(r),fa(()=>(t===0&&(n=$r(()=>e(()=>kt(r)))),t+=1,()=>{tr(()=>{t-=1,t===0&&(n?.(),n=void 0,kt(r))})})))}}var $i=ir|Sr|sa;function Ei(e,t,r){new ki(e,t,r)}class ki{parent;#e=!1;#r;#c=null;#u;#l;#o;#i=null;#a=null;#s=null;#f=null;#n=0;#d=0;#v=!1;#t=null;#g=()=>{this.#t&&gr(this.#t,this.#n)};#_=ia(()=>(this.#t=Ut(this.#n),()=>{this.#t=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#l=n,this.parent=Pe.b,this.#e=!!this.#u.pending,this.#o=Ot(()=>{Pe.b=this;{try{this.#i=et(()=>n(this.#r))}catch(a){this.error(a)}this.#d>0?this.#p():this.#e=!1}},$i)}#w(){try{this.#i=et(()=>this.#l(this.#r))}catch(t){this.error(t)}this.#e=!1}#S(){const t=this.#u.pending;t&&(this.#a=et(()=>t(this.#r)),pt.enqueue(()=>{this.#i=this.#h(()=>(pt.ensure(),et(()=>this.#l(this.#r)))),this.#d>0?this.#p():(Nt(this.#a,()=>{this.#a=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#h(t){var r=Pe,n=$e,a=Ue;At(this.#o),it(this.#o),pr(this.#o.ctx);try{return t()}catch(s){return hs(s),null}finally{At(r),it(n),pr(a)}}#p(){const t=this.#u.pending;this.#i!==null&&(this.#f=document.createDocumentFragment(),Ai(this.#i,this.#f)),this.#a===null&&(this.#a=et(()=>t(this.#r)))}#m(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t);return}this.#d+=t,this.#d===0&&(this.#e=!1,this.#a&&Nt(this.#a,()=>{this.#a=null}),this.#f&&(this.#r.before(this.#f),this.#f=null),tr(()=>{pt.ensure().flush()}))}update_pending_count(t){this.#m(t),this.#n+=t,zn.add(this.#g)}get_effect_pending(){return this.#_(),o(this.#t)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#i&&(tt(this.#i),this.#i=null),this.#a&&(tt(this.#a),this.#a=null),this.#s&&(tt(this.#s),this.#s=null);var a=!1,s=!1;const i=()=>{if(a){mi();return}a=!0,s&&ri(),pt.ensure(),this.#n=0,this.#s!==null&&Nt(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#i=this.#h(()=>(this.#v=!1,et(()=>this.#l(this.#r)))),this.#d>0?this.#p():this.#e=!1};var l=$e;try{it(null),s=!0,r?.(t,i),s=!1}catch(c){mr(c,this.#o&&this.#o.parent)}finally{it(l)}n&&tr(()=>{this.#s=this.#h(()=>{this.#v=!0;try{return et(()=>{n(this.#r,()=>t,()=>i)})}catch(c){return mr(c,this.#o.parent),null}finally{this.#v=!1}})})}}function Ai(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:Jr(r);t.append(r),r=a}}function _s(e,t,r){const n=xr()?bn:la;if(t.length===0){r(e.map(n));return}var a=Ie,s=Pe,i=Ti();Promise.all(t.map(l=>Ni(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(s.f&or)===0&&mr(c,s)}a?.deactivate(),bs()}).catch(l=>{mr(l,s)})}function Ti(){var e=Pe,t=$e,r=Ue,n=Ie;return function(){At(e),it(t),pr(r),n?.activate()}}function bs(){At(null),it(null),pr(null)}function bn(e){var t=ct|dt,r=$e!==null&&($e.f&ct)!==0?$e:null;return Pe===null||r!==null&&(r.f&mt)!==0?t|=mt:Pe.f|=Sr,{ctx:Ue,deps:null,effects:null,equals:us,f:t,fn:e,reactions:null,rv:0,v:Ke,wv:0,parent:r??Pe,ac:null}}function Ni(e,t){let r=Pe;r===null&&Ho();var n=r.b,a=void 0,s=Ut(Ke),i=!$e,l=new Map;return Vi(()=>{var c=ss();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var f=Ie,v=n.is_pending();i&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(Or),l.set(f,c)));const g=(p,m=void 0)=>{v||f.activate(),m?m!==Or&&(s.f|=Xt,gr(s,m)):((s.f&Xt)!==0&&(s.f^=Xt),gr(s,p)),i&&(n.update_pending_count(-1),v||f.decrement()),bs()};c.promise.then(g,p=>g(null,p||"unknown"))}),Es(()=>{for(const c of l.values())c.reject(Or)}),new Promise(c=>{function f(v){function g(){v===a?c(s):f(a)}v.then(g,g)}f(a)})}function Y(e){const t=bn(e);return Is(t),t}function la(e){const t=bn(e);return t.equals=fs,t}function ys(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)tt(t[r])}}function Mi(e){for(var t=e.parent;t!==null;){if((t.f&ct)===0)return t;t=t.parent}return null}function ca(e){var t,r=Pe;At(Mi(e));try{ys(e),t=qs(e)}finally{At(r)}return t}function ws(e){var t=ca(e);if(e.equals(t)||(e.v=t,e.wv=Rs()),!cr){var r=(Bt||(e.f&mt)!==0)&&e.deps!==null?Ht:rt;at(e,r)}}const zt=new Map;function Ut(e,t){var r={f:0,v:e,reactions:null,equals:us,rv:0,wv:0};return r}function H(e,t){const r=Ut(e);return Is(r),r}function Ci(e,t=!1,r=!0){const n=Ut(e);return t||(n.equals=fs),Pr&&r&&Ue!==null&&Ue.l!==null&&(Ue.l.s??=[]).push(n),n}function E(e,t,r=!1){$e!==null&&(!bt||($e.f&ya)!==0)&&xr()&&($e.f&(ct|ar|pn|ya))!==0&&!Mt?.includes(e)&&ti();let n=r?Ne(t):t;return gr(e,n)}function gr(e,t){if(!e.equals(t)){var r=e.v;cr?zt.set(e,t):zt.set(e,r),e.v=t;var n=pt.ensure();n.capture(e,r),(e.f&ct)!==0&&((e.f&dt)!==0&&ca(e),at(e,(e.f&mt)===0?rt:Ht)),e.wv=Rs(),Ss(e,dt),xr()&&Pe!==null&&(Pe.f&rt)!==0&&(Pe.f&(It|sr))===0&&(ht===null?Gi([e]):ht.push(e))}return t}function kt(e){E(e,e.v+1)}function Ss(e,t){var r=e.reactions;if(r!==null)for(var n=xr(),a=r.length,s=0;s<a;s++){var i=r[s],l=i.f;if(!(!n&&i===Pe)){var c=(l&dt)===0;c&&at(i,t),(l&ct)!==0?Ss(i,Ht):c&&((l&ar)!==0&&Kt!==null&&Kt.push(i),rr(i))}}}function Ne(e){if(typeof e!="object"||e===null||Ft in e)return e;const t=as(e);if(t!==zo&&t!==Vo)return e;var r=new Map,n=hn(e),a=H(0),s=Ct,i=l=>{if(Ct===s)return l();var c=$e,f=Ct;it(null),ka(s);var v=l();return it(c),ka(f),v};return n&&r.set("length",H(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Fo();var v=r.get(c);return v===void 0?v=i(()=>{var g=H(f.value);return r.set(c,g),g}):E(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=i(()=>H(Ke));r.set(c,v),kt(a)}}else E(f,Ke),kt(a);return!0},get(l,c,f){if(c===Ft)return e;var v=r.get(c),g=c in l;if(v===void 0&&(!g||Lt(l,c)?.writable)&&(v=i(()=>{var m=Ne(g?l[c]:Ke),_=H(m);return _}),r.set(c,v)),v!==void 0){var p=o(v);return p===Ke?void 0:p}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=o(v))}else if(f===void 0){var g=r.get(c),p=g?.v;if(g!==void 0&&p!==Ke)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,c){if(c===Ft)return!0;var f=r.get(c),v=f!==void 0&&f.v!==Ke||Reflect.has(l,c);if(f!==void 0||Pe!==null&&(!v||Lt(l,c)?.writable)){f===void 0&&(f=i(()=>{var p=v?Ne(l[c]):Ke,m=H(p);return m}),r.set(c,f));var g=o(f);if(g===Ke)return!1}return v},set(l,c,f,v){var g=r.get(c),p=c in l;if(n&&c==="length")for(var m=f;m<g.v;m+=1){var _=r.get(m+"");_!==void 0?E(_,Ke):m in l&&(_=i(()=>H(Ke)),r.set(m+"",_))}if(g===void 0)(!p||Lt(l,c)?.writable)&&(g=i(()=>H(void 0)),E(g,Ne(f)),r.set(c,g));else{p=g.v!==Ke;var x=i(()=>Ne(f));E(g,x)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(v,f),!p){if(n&&typeof c=="string"){var y=r.get("length"),P=Number(c);Number.isInteger(P)&&P>=y.v&&E(y,P+1)}kt(a)}return!0},ownKeys(l){o(a);var c=Reflect.ownKeys(l).filter(g=>{var p=r.get(g);return p===void 0||p.v!==Ke});for(var[f,v]of r)v.v!==Ke&&!(f in l)&&c.push(f);return c},setPrototypeOf(){ei()}})}function Sa(e){try{if(e!==null&&typeof e=="object"&&Ft in e)return e[Ft]}catch{}return e}function Ii(e,t){return Object.is(Sa(e),Sa(t))}var Pa,Ps,xs,$s;function Di(){if(Pa===void 0){Pa=window,Ps=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;xs=Lt(t,"firstChild").get,$s=Lt(t,"nextSibling").get,ba(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),ba(r)&&(r.__t=void 0)}}function Dt(e=""){return document.createTextNode(e)}function _r(e){return xs.call(e)}function Jr(e){return $s.call(e)}function u(e,t){return _r(e)}function R(e,t=!1){{var r=_r(e);return r instanceof Comment&&r.data===""?Jr(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=Jr(n);return n}function Ri(e){e.textContent=""}function yn(){return!1}function Oi(e,t){if(t){const r=document.body;e.autofocus=!0,tr(()=>{document.activeElement===r&&e.focus()})}}let xa=!1;function qi(){xa||(xa=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function wn(e){var t=$e,r=Pe;it(null),At(null);try{return e()}finally{it(t),At(r)}}function ua(e,t,r,n=r){e.addEventListener(t,()=>wn(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),qi()}function ji(e){Pe===null&&$e===null&&Yo(),$e!==null&&($e.f&mt)!==0&&Pe===null&&Jo(),cr&&Ko()}function Bi(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Rt(e,t,r,n=!0){var a=Pe;a!==null&&(a.f&yt)!==0&&(e|=yt);var s={ctx:Ue,deps:null,nodes_start:null,nodes_end:null,f:e|dt,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Vr(s),s.f|=oa}catch(c){throw tt(s),c}else t!==null&&rr(s);if(n){var i=s;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Sr)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&Bi(i,a),$e!==null&&($e.f&ct)!==0&&(e&sr)===0)){var l=$e;(l.effects??=[]).push(i)}}return s}function Li(){return $e!==null&&!bt}function Es(e){const t=Rt(aa,null,!1);return at(t,rt),t.teardown=e,t}function lr(e){ji();var t=Pe.f,r=!$e&&(t&It)!==0&&(t&oa)===0;if(r){var n=Ue;(n.e??=[]).push(e)}else return ks(e)}function ks(e){return Rt(na|Go,e,!1)}function zi(e){pt.ensure();const t=Rt(sr|Sr,e,!0);return(r={})=>new Promise(n=>{r.outro?Nt(t,()=>{tt(t),n(void 0)}):(tt(t),n(void 0))})}function da(e){return Rt(na,e,!1)}function Vi(e){return Rt(pn|Sr,e,!0)}function fa(e,t=0){return Rt(aa|t,e,!0)}function G(e,t=[],r=[]){_s(t,r,n=>{Rt(aa,()=>e(...n.map(o)),!0)})}function Ot(e,t=0){var r=Rt(ar|t,e,!0);return r}function et(e,t=!0){return Rt(It|Sr,e,!0,t)}function As(e){var t=e.teardown;if(t!==null){const r=cr,n=$e;Ea(!0),it(null);try{t.call(null)}finally{Ea(r),it(n)}}}function Ts(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&wn(()=>{a.abort(Or)});var n=r.next;(r.f&sr)!==0?r.parent=null:tt(r,t),r=n}}function Ui(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&It)===0&&tt(t),t=r}}function tt(e,t=!0){var r=!1;(t||(e.f&Wo)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Wi(e.nodes_start,e.nodes_end),r=!0),Ts(e,t&&!r),fn(e,0),at(e,or);var n=e.transitions;if(n!==null)for(const s of n)s.stop();As(e);var a=e.parent;a!==null&&a.first!==null&&Ns(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Wi(e,t){for(;e!==null;){var r=e===t?null:Jr(e);e.remove(),e=r}}function Ns(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Nt(e,t){var r=[];va(e,r,!0),Ms(r,()=>{tt(e),t&&t()})}function Ms(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function va(e,t,r){if((e.f&yt)===0){if(e.f^=yt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,s=(n.f&ir)!==0||(n.f&It)!==0;va(n,t,s?r:!1),n=a}}}function Sn(e){Cs(e,!0)}function Cs(e,t){if((e.f&yt)!==0){e.f^=yt,(e.f&rt)===0&&(at(e,dt),rr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&ir)!==0||(r.f&It)!==0;Cs(r,a?t:!1),r=n}if(e.transitions!==null)for(const s of e.transitions)(s.is_global||t)&&s.in()}}let hr=!1;function $a(e){hr=e}let cr=!1;function Ea(e){cr=e}let $e=null,bt=!1;function it(e){$e=e}let Pe=null;function At(e){Pe=e}let Mt=null;function Is(e){$e!==null&&(Mt===null?Mt=[e]:Mt.push(e))}let nt=null,ut=0,ht=null;function Gi(e){ht=e}let Ds=1,zr=0,Ct=zr;function ka(e){Ct=e}let Bt=!1;function Rs(){return++Ds}function Pn(e){var t=e.f;if((t&dt)!==0)return!0;if((t&Ht)!==0){var r=e.deps,n=(t&mt)!==0;if(r!==null){var a,s,i=(t&dn)!==0,l=n&&Pe!==null&&!Bt,c=r.length;if((i||l)&&(Pe===null||(Pe.f&or)===0)){var f=e,v=f.parent;for(a=0;a<c;a++)s=r[a],(i||!s?.reactions?.includes(f))&&(s.reactions??=[]).push(f);i&&(f.f^=dn),l&&v!==null&&(v.f&mt)===0&&(f.f^=mt)}for(a=0;a<c;a++)if(s=r[a],Pn(s)&&ws(s),s.wv>e.wv)return!0}(!n||Pe!==null&&!Bt)&&at(e,rt)}return!1}function Os(e,t,r=!0){var n=e.reactions;if(n!==null&&!Mt?.includes(e))for(var a=0;a<n.length;a++){var s=n[a];(s.f&ct)!==0?Os(s,t,!1):t===s&&(r?at(s,dt):(s.f&rt)!==0&&at(s,Ht),rr(s))}}function qs(e){var t=nt,r=ut,n=ht,a=$e,s=Bt,i=Mt,l=Ue,c=bt,f=Ct,v=e.f;nt=null,ut=0,ht=null,Bt=(v&mt)!==0&&(bt||!hr||$e===null),$e=(v&(It|sr))===0?e:null,Mt=null,pr(e.ctx),bt=!1,Ct=++zr,e.ac!==null&&(wn(()=>{e.ac.abort(Or)}),e.ac=null);try{e.f|=Ln;var g=e.fn,p=g(),m=e.deps;if(nt!==null){var _;if(fn(e,ut),m!==null&&ut>0)for(m.length=ut+nt.length,_=0;_<nt.length;_++)m[ut+_]=nt[_];else e.deps=m=nt;if(!Bt||(v&ct)!==0&&e.reactions!==null)for(_=ut;_<m.length;_++)(m[_].reactions??=[]).push(e)}else m!==null&&ut<m.length&&(fn(e,ut),m.length=ut);if(xr()&&ht!==null&&!bt&&m!==null&&(e.f&(ct|Ht|dt))===0)for(_=0;_<ht.length;_++)Os(ht[_],e);return a!==null&&a!==e&&(zr++,ht!==null&&(n===null?n=ht:n.push(...ht))),(e.f&Xt)!==0&&(e.f^=Xt),p}catch(x){return hs(x)}finally{e.f^=Ln,nt=t,ut=r,ht=n,$e=a,Bt=s,Mt=i,pr(l),bt=c,Ct=f}}function Qi(e,t){let r=t.reactions;if(r!==null){var n=Bo.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&ct)!==0&&(nt===null||!nt.includes(t))&&(at(t,Ht),(t.f&(mt|dn))===0&&(t.f^=dn),ys(t),fn(t,0))}function fn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Qi(e,r[n])}function Vr(e){var t=e.f;if((t&or)===0){at(e,rt);var r=Pe,n=hr;Pe=e,hr=!0;try{(t&ar)!==0?Ui(e):Ts(e),As(e);var a=qs(e);e.teardown=typeof a=="function"?a:null,e.wv=Ds;var s;ns&&bi&&(e.f&dt)!==0&&e.deps}finally{hr=n,Pe=r}}}async function Hi(){await Promise.resolve(),Pi()}function o(e){var t=e.f,r=(t&ct)!==0;if($e!==null&&!bt){var n=Pe!==null&&(Pe.f&or)!==0;if(!n&&!Mt?.includes(e)){var a=$e.deps;if(($e.f&Ln)!==0)e.rv<zr&&(e.rv=zr,nt===null&&a!==null&&a[ut]===e?ut++:nt===null?nt=[e]:(!Bt||!nt.includes(e))&&nt.push(e));else{($e.deps??=[]).push(e);var s=e.reactions;s===null?e.reactions=[$e]:s.includes($e)||s.push($e)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&mt)===0&&(i.f^=mt)}if(cr){if(zt.has(e))return zt.get(e);if(r){i=e;var c=i.v;return((i.f&rt)===0&&i.reactions!==null||js(i))&&(c=ca(i)),zt.set(i,c),c}}else r&&(i=e,Pn(i)&&ws(i));if((e.f&Xt)!==0)throw e.v;return e.v}function js(e){if(e.v===Ke)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(zt.has(t)||(t.f&ct)!==0&&js(t))return!0;return!1}function $r(e){var t=bt;try{return bt=!0,e()}finally{bt=t}}const Ki=-7169;function at(e,t){e.f=e.f&Ki|t}function Ji(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Yi=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Zi(e){return Yi.includes(e)}const Xi={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Fi(e){return e=e.toLowerCase(),Xi[e]??e}const el=["touchstart","touchmove"];function tl(e){return el.includes(e)}const Bs=new Set,Un=new Set;function Ls(e,t,r,n={}){function a(s){if(n.capture||Dr.call(t,s),!s.cancelBubble)return wn(()=>r?.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?tr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Wn(e,t,r,n={}){var a=Ls(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function Je(e){for(var t=0;t<e.length;t++)Bs.add(e[t]);for(var r of Un)r(e)}let Aa=null;function Dr(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],s=a[0]||e.target;Aa=e;var i=0,l=Aa===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(s=a[i]||e.target,s!==t){Bn(e,"currentTarget",{configurable:!0,get(){return s||r}});var v=$e,g=Pe;it(null),At(null);try{for(var p,m=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var x=s["__"+n];if(x!=null&&(!s.disabled||e.target===s))if(hn(x)){var[b,...y]=x;b.apply(s,[e,...y])}else x.call(s,e)}catch(P){p?m.push(P):p=P}if(e.cancelBubble||_===t||_===null)break;s=_}if(p){for(let P of m)queueMicrotask(()=>{throw P});throw p}}finally{e.__root=t,delete e.currentTarget,it(v),At(g)}}}function zs(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function br(e,t){var r=Pe;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function $(e,t){var r=(t&ui)!==0,n=(t&di)!==0,a,s=!e.startsWith("<!>");return()=>{a===void 0&&(a=zs(s?e:"<!>"+e),r||(a=_r(a)));var i=n||Ps?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=_r(i),c=i.lastChild;br(l,c)}else br(i,i);return i}}function rl(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var i=zs(a),l=_r(i);s=_r(l)}var c=s.cloneNode(!0);return br(c,c),c}}function nl(e,t){return rl(e,t,"svg")}function gt(e=""){{var t=Dt(e+"");return br(t,t),t}}function L(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Dt();return e.append(t,r),br(t,r),e}function h(e,t){e!==null&&e.before(t)}function U(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function al(e,t){return sl(e,t)}const dr=new Map;function sl(e,{target:t,anchor:r,props:n={},events:a,context:s,intro:i=!0}){Di();var l=new Set,c=g=>{for(var p=0;p<g.length;p++){var m=g[p];if(!l.has(m)){l.add(m);var _=tl(m);t.addEventListener(m,Dr,{passive:_});var x=dr.get(m);x===void 0?(document.addEventListener(m,Dr,{passive:_}),dr.set(m,1)):dr.set(m,x+1)}}};c(ra(Bs)),Un.add(c);var f=void 0,v=zi(()=>{var g=r??t.appendChild(Dt());return Ei(g,{pending:()=>{}},p=>{if(s){z({});var m=Ue;m.c=s}a&&(n.$$events=a),f=e(p,n)||{},s&&V()}),()=>{for(var p of l){t.removeEventListener(p,Dr);var m=dr.get(p);--m===0?(document.removeEventListener(p,Dr),dr.delete(p)):dr.set(p,m)}Un.delete(c),g!==r&&g.parentNode?.removeChild(g)}});return ol.set(f,v),f}let ol=new WeakMap;function M(e,t,r=!1){var n=e,a=null,s=null,i=Ke,l=r?ir:0,c=!1;const f=(m,_=!0)=>{c=!0,p(_,m)};var v=null;function g(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var m=i?a:s,_=i?s:a;m&&Sn(m),_&&Nt(_,()=>{i?s=null:a=null})}const p=(m,_)=>{if(i!==(i=m)){var x=yn(),b=n;if(x&&(v=document.createDocumentFragment(),v.append(b=Dt())),i?a??=_&&et(()=>_(b)):s??=_&&et(()=>_(b)),x){var y=Ie,P=i?a:s,w=i?s:a;P&&y.skipped_effects.delete(P),w&&y.skipped_effects.add(w),y.add_callback(g)}else g()}};Ot(()=>{c=!1,t(f),c||p(null,null)},l)}function il(e,t,r){var n=e,a=Ke,s,i,l=null,c=xr()?_i:ds;function f(){s&&Nt(s),l!==null&&(l.lastChild.remove(),n.before(l),l=null),s=i}Ot(()=>{if(c(a,a=t())){var v=n,g=yn();g&&(l=document.createDocumentFragment(),l.append(v=Dt())),i=et(()=>r(v)),g?Ie.add_callback(f):f()}})}function Gn(e,t){return t}function ll(e,t,r){for(var n=e.items,a=[],s=t.length,i=0;i<s;i++)va(t[i].e,a,!0);var l=s>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;Ri(c),c.append(r),n.clear(),$t(e,t[0].prev,t[s-1].next)}Ms(a,()=>{for(var f=0;f<s;f++){var v=t[f];l||(n.delete(v.k),$t(e,v.prev,v.next)),tt(v.e,!l)}})}function lt(e,t,r,n,a,s=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&cs)!==0;if(c){var f=e;i=f.appendChild(Dt())}var v=null,g=!1,p=new Map,m=la(()=>{var y=r();return hn(y)?y:y==null?[]:ra(y)}),_,x;function b(){cl(x,_,l,p,i,a,t,n,r),s!==null&&(_.length===0?v?Sn(v):v=et(()=>s(i)):v!==null&&Nt(v,()=>{v=null}))}Ot(()=>{x??=Pe,_=o(m);var y=_.length;if(!(g&&y===0)){g=y===0;var P,w,S,k;if(yn()){var A=new Set,C=Ie;for(w=0;w<y;w+=1){S=_[w],k=n(S,w);var O=l.items.get(k)??p.get(k);O?(t&(mn|gn))!==0&&Vs(O,S,w,t):(P=Us(null,l,null,null,S,k,w,a,t,r,!0),p.set(k,P)),A.add(k)}for(const[X,j]of l.items)A.has(X)||C.skipped_effects.add(j.e);C.add_callback(b)}else b();o(m)}})}function cl(e,t,r,n,a,s,i,l,c){var f=(i&ni)!==0,v=(i&(mn|gn))!==0,g=t.length,p=r.items,m=r.first,_=m,x,b=null,y,P=[],w=[],S,k,A,C;if(f)for(C=0;C<g;C+=1)S=t[C],k=l(S,C),A=p.get(k),A!==void 0&&(A.a?.measure(),(y??=new Set).add(A));for(C=0;C<g;C+=1){if(S=t[C],k=l(S,C),A=p.get(k),A===void 0){var O=n.get(k);if(O!==void 0){n.delete(k),p.set(k,O);var X=b?b.next:_;$t(r,b,O),$t(r,O,X),Cn(O,X,a),b=O}else{var j=_?_.e.nodes_start:a;b=Us(j,r,b,b===null?r.first:b.next,S,k,C,s,i,c)}p.set(k,b),P=[],w=[],_=b.next;continue}if(v&&Vs(A,S,C,i),(A.e.f&yt)!==0&&(Sn(A.e),f&&(A.a?.unfix(),(y??=new Set).delete(A))),A!==_){if(x!==void 0&&x.has(A)){if(P.length<w.length){var W=w[0],te;b=W.prev;var ee=P[0],D=P[P.length-1];for(te=0;te<P.length;te+=1)Cn(P[te],W,a);for(te=0;te<w.length;te+=1)x.delete(w[te]);$t(r,ee.prev,D.next),$t(r,b,ee),$t(r,D,W),_=W,b=D,C-=1,P=[],w=[]}else x.delete(A),Cn(A,_,a),$t(r,A.prev,A.next),$t(r,A,b===null?r.first:b.next),$t(r,b,A),b=A;continue}for(P=[],w=[];_!==null&&_.k!==k;)(_.e.f&yt)===0&&(x??=new Set).add(_),w.push(_),_=_.next;if(_===null)continue;A=_}P.push(A),b=A,_=A.next}if(_!==null||x!==void 0){for(var I=x===void 0?[]:ra(x);_!==null;)(_.e.f&yt)===0&&I.push(_),_=_.next;var J=I.length;if(J>0){var re=(i&cs)!==0&&g===0?a:null;if(f){for(C=0;C<J;C+=1)I[C].a?.measure();for(C=0;C<J;C+=1)I[C].a?.fix()}ll(r,I,re)}}f&&tr(()=>{if(y!==void 0)for(A of y)A.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var N of n.values())tt(N.e);n.clear()}function Vs(e,t,r,n){(n&mn)!==0&&gr(e.v,t),(n&gn)!==0?gr(e.i,r):e.i=r}function Us(e,t,r,n,a,s,i,l,c,f,v){var g=(c&mn)!==0,p=(c&ai)===0,m=g?p?Ci(a,!1,!1):Ut(a):a,_=(c&gn)===0?i:Ut(i),x={i:_,v:m,k:s,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=Dt())}return x.e=et(()=>l(e,m,_,f),gi),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?v||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function Cn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,s=e.e.nodes_start;s!==null&&s!==n;){var i=Jr(s);a.before(s),s=i}}function $t(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ne(e,t,...r){var n=e,a=F,s;Ot(()=>{a!==(a=t())&&(s&&(tt(s),s=null),s=et(()=>a(n,...r)))},ir)}function er(e,t,r){var n=e,a,s,i=null,l=null;function c(){s&&(Nt(s),s=null),i&&(i.lastChild.remove(),n.before(i),i=null),s=l,l=null}Ot(()=>{if(a!==(a=t())){var f=yn();if(a){var v=n;f&&(i=document.createDocumentFragment(),i.append(v=Dt()),s&&Ie.skipped_effects.add(s)),l=et(()=>r(v,a))}f?Ie.add_callback(c):c()}},ir)}function ul(e,t,r,n,a,s){var i,l,c=null,f=e,v;Ot(()=>{const g=t()||null;var p=vi;g!==i&&(v&&(g===null?Nt(v,()=>{v=null,l=null}):g===l?Sn(v):tt(v)),g&&g!==l&&(v=et(()=>{if(c=document.createElementNS(p,g),br(c,c),n){var m=c.appendChild(Dt());n(c,m)}Pe.nodes_end=c,f.before(c)})),i=g,i&&(l=i))},ir)}function dl(e,t){var r=void 0,n;Ot(()=>{r!==(r=t())&&(n&&(tt(n),n=null),r&&(n=et(()=>{da(()=>r(e))})))})}function Ws(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Ws(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function fl(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Ws(e))&&(n&&(n+=" "),n+=t);return n}function vl(e){return typeof e=="object"?fl(e):e??""}const Ta=[...` 	
\r\f \v\uFEFF`];function hl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var s=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+s;(i===0||Ta.includes(n[i-1]))&&(l===n.length||Ta.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Na(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var s=e[a];s!=null&&s!==""&&(n+=" "+a+": "+s+r)}return n}function In(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function pl(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(In)),a&&c.push(...Object.keys(a).map(In));var f=0,v=-1;const x=e.length;for(var g=0;g<x;g++){var p=e[g];if(l?p==="/"&&e[g-1]==="*"&&(l=!1):s?s===p&&(s=!1):p==="/"&&e[g+1]==="*"?l=!0:p==='"'||p==="'"?s=p:p==="("?i++:p===")"&&i--,!l&&s===!1&&i===0){if(p===":"&&v===-1)v=g;else if(p===";"||g===x-1){if(v!==-1){var m=In(e.substring(f,v).trim());if(!c.includes(m)){p!==";"&&g++;var _=e.substring(f,g).trim();r+=" "+_+";"}}f=g+1,v=-1}}}}return n&&(r+=Na(n)),a&&(r+=Na(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ee(e,t,r,n,a,s){var i=e.__className;if(i!==r||i===void 0){var l=hl(r,n,s);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(s&&a!==s)for(var c in s){var f=!!s[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return s}function Dn(e,t={},r,n){for(var a in r){var s=r[a];t[a]!==s&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,s,n))}}function Gs(e,t,r,n){var a=e.__style;if(a!==t){var s=pl(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else n&&(Array.isArray(n)?(Dn(e,r?.[0],n[0]),Dn(e,r?.[1],n[1],"important")):Dn(e,r,n));return n}function vn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!hn(t))return pi();for(var n of e.options)n.selected=t.includes(jr(n));return}for(n of e.options){var a=jr(n);if(Ii(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Qs(e){var t=new MutationObserver(()=>{vn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Es(()=>{t.disconnect()})}function Yt(e,t,r=t){var n=!0;ua(e,"change",a=>{var s=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(s),jr);else{var l=e.querySelector(s)??e.querySelector("option:not([disabled])");i=l&&jr(l)}r(i)}),da(()=>{var a=t();if(vn(e,a,n),n&&a===void 0){var s=e.querySelector(":checked");s!==null&&(a=jr(s),r(a))}e.__value=a,n=!1}),Qs(e)}function jr(e){return"__value"in e?e.__value:e.value}const Cr=Symbol("class"),Ir=Symbol("style"),Hs=Symbol("is custom element"),Ks=Symbol("is html");function ml(e,t){var r=xn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Rn(e,t){var r=xn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function gl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Wt(e,t,r,n){var a=xn(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Qo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Js(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function _l(e,t,r,n,a=!1,s=!1){var i=xn(e),l=i[Hs],c=!i[Ks],f=t||{},v=e.tagName==="OPTION";for(var g in t)g in r||(r[g]=null);r.class?r.class=vl(r.class):r[Cr]&&(r.class=null),r[Ir]&&(r.style??=null);var p=Js(e);for(const S in r){let k=r[S];if(v&&S==="value"&&k==null){e.value=e.__value="",f[S]=k;continue}if(S==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ee(e,m,k,n,t?.[Cr],r[Cr]),f[S]=k,f[Cr]=r[Cr];continue}if(S==="style"){Gs(e,k,t?.[Ir],r[Ir]),f[S]=k,f[Ir]=r[Ir];continue}var _=f[S];if(!(k===_&&!(k===void 0&&e.hasAttribute(S)))){f[S]=k;var x=S[0]+S[1];if(x!=="$$")if(x==="on"){const A={},C="$$"+S;let O=S.slice(2);var b=Zi(O);if(Ji(O)&&(O=O.slice(0,-7),A.capture=!0),!b&&_){if(k!=null)continue;e.removeEventListener(O,f[C],A),f[C]=null}if(k!=null)if(b)e[`__${O}`]=k,Je([O]);else{let X=function(j){f[S].call(this,j)};var w=X;f[C]=Ls(O,e,X,A)}else b&&(e[`__${O}`]=void 0)}else if(S==="style")Wt(e,S,k);else if(S==="autofocus")Oi(e,!!k);else if(!l&&(S==="__value"||S==="value"&&k!=null))e.value=e.__value=k;else if(S==="selected"&&v)gl(e,k);else{var y=S;c||(y=Fi(y));var P=y==="defaultValue"||y==="defaultChecked";if(k==null&&!l&&!P)if(i[S]=null,y==="value"||y==="checked"){let A=e;const C=t===void 0;if(y==="value"){let O=A.defaultValue;A.removeAttribute(y),A.defaultValue=O,A.value=A.__value=C?O:null}else{let O=A.defaultChecked;A.removeAttribute(y),A.defaultChecked=O,A.checked=C?O:!1}}else e.removeAttribute(S);else P||p.includes(y)&&(l||typeof k!="string")?(e[y]=k,y in i&&(i[y]=Ke)):typeof k!="function"&&Wt(e,y,k)}}}return f}function Ma(e,t,r=[],n=[],a,s=!1,i=!1){_s(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",g=!1;if(Ot(()=>{var m=t(...l.map(o)),_=_l(e,c,m,a,s,i);g&&v&&"value"in m&&vn(e,m.value);for(let b of Object.getOwnPropertySymbols(f))m[b]||tt(f[b]);for(let b of Object.getOwnPropertySymbols(m)){var x=m[b];b.description===hi&&(!c||x!==c[b])&&(f[b]&&tt(f[b]),f[b]=et(()=>dl(e,()=>x))),_[b]=x}c=_}),v){var p=e;da(()=>{vn(p,c.value,!0),Qs(p)})}g=!0})}function xn(e){return e.__attributes??={[Hs]:e.nodeName.includes("-"),[Ks]:e.namespaceURI===fi}}var Ca=new Map;function Js(e){var t=e.getAttribute("is")||e.nodeName,r=Ca.get(t);if(r)return r;Ca.set(t,r=[]);for(var n,a=e,s=Element.prototype;s!==a;){n=Lo(a);for(var i in n)n[i].set&&r.push(i);a=as(a)}return r}function Me(e,t,r=t){var n=new WeakSet;ua(e,"input",async a=>{var s=a?e.defaultValue:e.value;if(s=On(e)?qn(s):s,r(s),Ie!==null&&n.add(Ie),await Hi(),s!==(s=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=s??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),$r(t)==null&&e.value&&(r(On(e)?qn(e.value):e.value),Ie!==null&&n.add(Ie)),fa(()=>{var a=t();if(e===document.activeElement){var s=on??Ie;if(n.has(s))return}On(e)&&a===qn(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function bl(e,t,r=t){ua(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),$r(t)==null&&r(e.checked),fa(()=>{var n=t();e.checked=!!n})}function On(e){var t=e.type;return t==="number"||t==="range"}function qn(e){return e===""?null:+e}let an=!1;function yl(e){var t=an;try{return an=!1,[e(),an]}finally{an=t}}const wl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ce(e,t,r){return new Proxy({props:e,exclude:t},wl)}const Sl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Mr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Mr(a)&&(a=a());const s=Lt(a,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Mr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Lt(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===Ft||t===is)return!1;for(let r of e.props)if(Mr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Mr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function de(...e){return new Proxy({props:e},Sl)}function Ae(e,t,r,n){var a=!Pr||(r&oi)!==0,s=(r&li)!==0,i=(r&ci)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?$r(n):n),l),v;if(s){var g=Ft in e||is in e;v=Lt(e,t)?.set??(g&&t in e?w=>e[t]=w:void 0)}var p,m=!1;s?[p,m]=yl(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),v&&(a&&Xo(),v(p)));var _;if(a?_=()=>{var w=e[t];return w===void 0?f():(c=!0,w)}:_=()=>{var w=e[t];return w!==void 0&&(l=void 0),w===void 0?l:w},a&&(r&ii)===0)return _;if(v){var x=e.$$legacy;return(function(w,S){return arguments.length>0?((!a||!S||x||m)&&v(S?_():w),w):_()})}var b=!1,y=((r&si)!==0?bn:la)(()=>(b=!1,_()));s&&o(y);var P=Pe;return(function(w,S){if(arguments.length>0){const k=S?o(y):a&&s?Ne(w):w;return E(y,k),b=!0,l!==void 0&&(l=k),w}return cr&&b||(P.f&or)!==0?y.v:o(y)})}function Ys(e){Ue===null&&ls(),Pr&&Ue.l!==null?xl(Ue).m.push(e):lr(()=>{const t=$r(e);if(typeof t=="function")return t})}function Pl(e){Ue===null&&ls(),Ys(()=>()=>$r(e))}function xl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const $l="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add($l);const El="modulepreload",kl=function(e){return"/"+e},Ia={},Al=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(g=>Promise.resolve(g).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(v=>{if(v=kl(v),v in Ia)return;Ia[v]=!0;const g=v.endsWith(".css"),p=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${p}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":El,g||(m.as="script"),m.crossOrigin="",m.href=v,c&&m.setAttribute("nonce",c),document.head.appendChild(m),g)return new Promise((_,x)=>{m.addEventListener("load",_),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${v}`)))})}))}function s(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})};class Tl extends Map{#e=new Map;#r=H(0);#c=H(0);#u=Ct||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#l(t){return Ct===this.#u?H(t):Ut(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else return o(this.#r),!1}return o(n),!0}forEach(t,r){this.#o(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else{o(this.#r);return}}return o(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),s=super.get(t),i=super.set(t,r),l=this.#r;if(a===void 0)a=this.#l(0),n.set(t,a),E(this.#c,super.size),kt(l);else if(s!==r){kt(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(v=>c.has(v));f&&kt(l)}return i}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),E(this.#c,super.size),E(n,-1),kt(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;E(this.#c,0);for(var r of t.values())E(r,-1);kt(this.#r),t.clear()}}#o(){o(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#l(0);t.set(r,n)}}for([,n]of this.#e)o(n)}keys(){return o(this.#r),super.keys()}values(){return this.#o(),super.values()}entries(){return this.#o(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return o(this.#c),super.size}}class Nl{#e;#r;constructor(t,r){this.#e=t,this.#r=ia(r)}get current(){return this.#r(),this.#e()}}const Ml=/\(.+\)/,Cl=new Set(["all","print","screen","and","or","not","only"]);class Il extends Nl{constructor(t,r){let n=Ml.test(t)||t.split(/[\s,]+/).some(s=>Cl.has(s.trim()))?t:`(${t})`;const a=window.matchMedia(n);super(()=>a.matches,s=>Wn(a,"change",s))}}const Dl=typeof window<"u"?window:void 0;function Rl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Ol{#e;#r;constructor(t={}){const{window:r=Dl,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=ia(a=>{const s=Wn(r,"focusin",a),i=Wn(r,"focusout",a);return()=>{s(),i()}}))}get current(){return this.#r?.(),this.#e?Rl(this.#e):null}}new Ol;function ql(e){return typeof e=="function"}function jl(e,t){if(ql(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Bl(e,t){let r=H(null);const n=Y(()=>jl(t,250));function a(...s){if(o(r))o(r).timeout&&clearTimeout(o(r).timeout);else{let i,l;const c=new Promise((f,v)=>{i=f,l=v});E(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return o(r).runner=async()=>{if(!o(r))return;const i=o(r);E(r,null);try{i.resolve(await e.apply(this,s))}catch(l){i.reject(l)}},o(r).timeout=setTimeout(o(r).runner,o(n)),o(r).promise}return a.cancel=async()=>{(!o(r)||o(r).timeout===null)&&(await new Promise(s=>setTimeout(s,0)),!o(r)||o(r).timeout===null)||(clearTimeout(o(r).timeout),o(r).reject("Cancelled"),E(r,null))},a.runScheduledNow=async()=>{(!o(r)||!o(r).timeout)&&(await new Promise(s=>setTimeout(s,0)),!o(r)||!o(r).timeout)||(clearTimeout(o(r).timeout),o(r).timeout=null,await o(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!o(r)?.timeout}}),a}function Ll(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),s=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return s.length?Br(s.flatMap(i=>i.neededConsolidatedForDate)):[]}function Rr(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function ln(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Br(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function cn(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>Zt(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],s=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(a.push({q:v,u:c}),s.push(Zt(v.toString(),c)))});const i=s.length>0?s.join(" et "):"✅ Complet";return{numeric:a,display:i}}function fr(e){return e?.length?e.map(t=>Zt(t.q.toString(),t.u)).join(" et "):"-"}function Zt(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Da(e){return Rr(e)}function ha(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function zl(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([s])=>{const i=new Date(s);return i>=n&&i<=a}).reduce((s,[i,l])=>s+(l.totalAssiettes||0),0)}function Vl(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Ul(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Wl(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function Gl(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return ha(t)}function Ql(e,t,r=""){if(e.status==="cancelled")return!1;const n=e.deliveryDate||e.$createdAt;return!n||n>t||r&&e.$createdAt<r?!1:e.status==="delivered"||e.status==="pending"||e.status==="ordered"&&n<=t}function Ra(e,t){let r=[],n="";e.stockParsed?.dateTime&&e.stockParsed.dateTime<=t&&(r=[{q:parseFloat(e.stockParsed.quantity),u:e.stockParsed.unit}],n=e.stockParsed.dateTime);const a=[];if(e.purchases)for(const c of e.purchases)Ql(c,t,n)&&a.push({q:c.quantity,u:c.unit});const s=Hl(e,t),i=[...r,...a],l=ha(i);return Kl(l,s)}function Hl(e,t){if(!e.byDate)return[];const r=[];for(const[n,a]of Object.entries(e.byDate))if(n<=t){const i=a.totalConsolidated;i&&r.push(...i)}return ha(r)}function Kl(e,t){const r=new Map,n=new Map;e.forEach(({q:i,u:l})=>{r.set(l,(r.get(l)||0)+i)}),t.forEach(({q:i,u:l})=>{n.set(l,(n.get(l)||0)+i)});const a=[],s=new Set([...r.keys(),...n.keys()]);for(const i of s){const l=r.get(i)||0,c=n.get(i)||0,f=l-c;Math.abs(f)>.001&&a.push({q:f,u:i})}return a}function Oa(e){if(!e?.length)return"Équilibré";const t=e.filter(n=>n.q>0),r=e.filter(n=>n.q<0);if(t.length>0&&r.length>0){const n=t.map(s=>Zt(s.q.toString(),s.u)).join(" et "),a=r.map(s=>Zt(Math.abs(s.q).toString(),s.u)).join(" et ");return`${n} disponibles, ${a} manquant${r.length>1?"s":""}`}else return t.length>0?t.map(n=>"+"+Zt(n.q.toString(),n.u)).join(" et ")+" disponibles":r.length>0?r.map(n=>Zt(Math.abs(n.q).toString(),n.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function Jl(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class T{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}T.equal=(e,t)=>new T("equal",e,t).toString();T.notEqual=(e,t)=>new T("notEqual",e,t).toString();T.lessThan=(e,t)=>new T("lessThan",e,t).toString();T.lessThanEqual=(e,t)=>new T("lessThanEqual",e,t).toString();T.greaterThan=(e,t)=>new T("greaterThan",e,t).toString();T.greaterThanEqual=(e,t)=>new T("greaterThanEqual",e,t).toString();T.isNull=e=>new T("isNull",e).toString();T.isNotNull=e=>new T("isNotNull",e).toString();T.between=(e,t,r)=>new T("between",e,[t,r]).toString();T.startsWith=(e,t)=>new T("startsWith",e,t).toString();T.endsWith=(e,t)=>new T("endsWith",e,t).toString();T.select=e=>new T("select",void 0,e).toString();T.search=(e,t)=>new T("search",e,t).toString();T.orderDesc=e=>new T("orderDesc",e).toString();T.orderAsc=e=>new T("orderAsc",e).toString();T.orderRandom=()=>new T("orderRandom").toString();T.cursorAfter=e=>new T("cursorAfter",void 0,e).toString();T.cursorBefore=e=>new T("cursorBefore",void 0,e).toString();T.limit=e=>new T("limit",void 0,e).toString();T.offset=e=>new T("offset",void 0,e).toString();T.contains=(e,t)=>new T("contains",e,t).toString();T.notContains=(e,t)=>new T("notContains",e,t).toString();T.notSearch=(e,t)=>new T("notSearch",e,t).toString();T.notBetween=(e,t,r)=>new T("notBetween",e,[t,r]).toString();T.notStartsWith=(e,t)=>new T("notStartsWith",e,t).toString();T.notEndsWith=(e,t)=>new T("notEndsWith",e,t).toString();T.createdBefore=e=>new T("createdBefore",void 0,e).toString();T.createdAfter=e=>new T("createdAfter",void 0,e).toString();T.createdBetween=(e,t)=>new T("createdBetween",void 0,[e,t]).toString();T.updatedBefore=e=>new T("updatedBefore",void 0,e).toString();T.updatedAfter=e=>new T("updatedAfter",void 0,e).toString();T.updatedBetween=(e,t)=>new T("updatedBetween",void 0,[e,t]).toString();T.or=e=>new T("or",void 0,e.map(t=>JSON.parse(t))).toString();T.and=e=>new T("and",void 0,e.map(t=>JSON.parse(t))).toString();T.distanceEqual=(e,t,r,n=!0)=>new T("distanceEqual",e,[[t,r,n]]).toString();T.distanceNotEqual=(e,t,r,n=!0)=>new T("distanceNotEqual",e,[[t,r,n]]).toString();T.distanceGreaterThan=(e,t,r,n=!0)=>new T("distanceGreaterThan",e,[[t,r,n]]).toString();T.distanceLessThan=(e,t,r,n=!0)=>new T("distanceLessThan",e,[[t,r,n]]).toString();T.intersects=(e,t)=>new T("intersects",e,[t]).toString();T.notIntersects=(e,t)=>new T("notIntersects",e,[t]).toString();T.crosses=(e,t)=>new T("crosses",e,[t]).toString();T.notCrosses=(e,t)=>new T("notCrosses",e,[t]).toString();T.overlaps=(e,t)=>new T("overlaps",e,[t]).toString();T.notOverlaps=(e,t)=>new T("notOverlaps",e,[t]).toString();T.touches=(e,t)=>new T("touches",e,[t]).toString();T.notTouches=(e,t)=>new T("notTouches",e,[t]).toString();var Zs,Xs;class yr{static custom(t){return t}static unique(t=7){const r=Jl(yr,Zs,"m",Xs).call(yr);let n="";for(let a=0;a<t;a++){const s=Math.floor(Math.random()*16).toString(16);n+=s}return r+n}}Zs=yr,Xs=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var qa;(function(e){e.Totp="totp"})(qa||(qa={}));var ja;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(ja||(ja={}));var Ba;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Ba||(Ba={}));var La;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(La||(La={}));var za;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(za||(za={}));var Va;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Va||(Va={}));var Ua;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Ua||(Ua={}));var Wa;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Wa||(Wa={}));var Ga;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Ga||(Ga={}));class Yl{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class Fs{constructor(t){this.generateIdentifier=t,this.kv=new Yl}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class Zl extends Fs{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function Xl(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function Fl(e,t){const r=Xl(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const s=n[a];if(t(s))return s}}function wr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function un(e,t){return e.indexOf(t)!==-1}function Qa(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class ec{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return Fl(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const tc=e=>Object.prototype.toString.call(e).slice(8,-1),eo=e=>typeof e>"u",rc=e=>e===null,Ur=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Qn=e=>Ur(e)&&Object.keys(e).length===0,Gt=e=>Array.isArray(e),nc=e=>typeof e=="string",ac=e=>typeof e=="number"&&!isNaN(e),sc=e=>typeof e=="boolean",oc=e=>e instanceof RegExp,Wr=e=>e instanceof Map,Gr=e=>e instanceof Set,to=e=>tc(e)==="Symbol",ic=e=>e instanceof Date&&!isNaN(e.valueOf()),lc=e=>e instanceof Error,Ha=e=>typeof e=="number"&&isNaN(e),cc=e=>sc(e)||rc(e)||eo(e)||ac(e)||nc(e)||to(e),uc=e=>typeof e=="bigint",dc=e=>e===1/0||e===-1/0,fc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),vc=e=>e instanceof URL,ro=e=>e.replace(/\./g,"\\."),jn=e=>e.map(String).map(ro).join("."),Lr=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let s=e.charAt(a);if(s==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(s==="."){t.push(r),r="";continue}r+=s}const n=r;return t.push(n),t};function xt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const no=[xt(eo,"undefined",()=>null,()=>{}),xt(uc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),xt(ic,"Date",e=>e.toISOString(),e=>new Date(e)),xt(lc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),xt(oc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),xt(Gr,"set",e=>[...e.values()],e=>new Set(e)),xt(Wr,"map",e=>[...e.entries()],e=>new Map(e)),xt(e=>Ha(e)||dc(e),"number",e=>Ha(e)?"NaN":e>0?"Infinity":"-Infinity",Number),xt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),xt(vc,"URL",e=>e.toString(),e=>new URL(e))];function $n(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const ao=$n((e,t)=>to(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),hc=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),so=$n(fc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=hc[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function oo(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const io=$n(oo,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),lo=$n((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),pc=[io,ao,lo,so],Ka=(e,t)=>{const r=Qa(pc,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Qa(no,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},co={};no.forEach(e=>{co[e.annotation]=e});const mc=(e,t,r)=>{if(Gt(t))switch(t[0]){case"symbol":return ao.untransform(e,t,r);case"class":return io.untransform(e,t,r);case"custom":return lo.untransform(e,t,r);case"typed-array":return so.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=co[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},vr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function uo(e){if(un(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(un(e,"prototype"))throw new Error("prototype is not allowed as a property");if(un(e,"constructor"))throw new Error("constructor is not allowed as a property")}const gc=(e,t)=>{uo(t);for(let r=0;r<t.length;r++){const n=t[r];if(Gr(e))e=vr(e,+n);else if(Wr(e)){const a=+n,s=+t[++r]==0?"key":"value",i=vr(e,a);switch(s){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},Hn=(e,t,r)=>{if(uo(t),t.length===0)return r(e);let n=e;for(let s=0;s<t.length-1;s++){const i=t[s];if(Gt(n)){const l=+i;n=n[l]}else if(Ur(n))n=n[i];else if(Gr(n)){const l=+i;n=vr(n,l)}else if(Wr(n)){if(s===t.length-2)break;const c=+i,f=+t[++s]==0?"key":"value",v=vr(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const a=t[t.length-1];if(Gt(n)?n[+a]=r(n[+a]):Ur(n)&&(n[a]=r(n[a])),Gr(n)){const s=vr(n,+a),i=r(s);s!==i&&(n.delete(s),n.add(i))}if(Wr(n)){const s=+t[t.length-2],i=vr(n,s);switch(+a==0?"key":"value"){case"key":{const c=r(i);n.set(c,n.get(i)),c!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function Kn(e,t,r=[]){if(!e)return;if(!Gt(e)){wr(e,(s,i)=>Kn(s,t,[...r,...Lr(i)]));return}const[n,a]=e;a&&wr(a,(s,i)=>{Kn(s,t,[...r,...Lr(i)])}),t(n,r)}function _c(e,t,r){return Kn(t,(n,a)=>{e=Hn(e,a,s=>mc(s,n,r))}),e}function bc(e,t){function r(n,a){const s=gc(e,Lr(a));n.map(Lr).forEach(i=>{e=Hn(e,i,()=>s)})}if(Gt(t)){const[n,a]=t;n.forEach(s=>{e=Hn(e,Lr(s),()=>e)}),a&&wr(a,r)}else wr(t,r);return e}const yc=(e,t)=>Ur(e)||Gt(e)||Wr(e)||Gr(e)||oo(e,t);function wc(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Sc(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[s,...i]=a;s.length===0?n=i.map(jn):r[jn(s)]=i.map(jn)}),n?Qn(r)?[n]:[n,r]:Qn(r)?void 0:r}const fo=(e,t,r,n,a=[],s=[],i=new Map)=>{const l=cc(e);if(!l){wc(e,a,t);const m=i.get(e);if(m)return n?{transformedValue:null}:m}if(!yc(e,r)){const m=Ka(e,r),_=m?{transformedValue:m.value,annotations:[m.type]}:{transformedValue:e};return l||i.set(e,_),_}if(un(s,e))return{transformedValue:null};const c=Ka(e,r),f=c?.value??e,v=Gt(f)?[]:{},g={};wr(f,(m,_)=>{if(_==="__proto__"||_==="constructor"||_==="prototype")throw new Error(`Detected property ${_}. This is a prototype pollution risk, please remove it from your object.`);const x=fo(m,t,r,n,[...a,_],[...s,e],i);v[_]=x.transformedValue,Gt(x.annotations)?g[_]=x.annotations:Ur(x.annotations)&&wr(x.annotations,(b,y)=>{g[ro(_)+"."+y]=b})});const p=Qn(g)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,g]:g};return l||i.set(e,p),p};function vo(e){return Object.prototype.toString.call(e).slice(8,-1)}function Ja(e){return vo(e)==="Array"}function Pc(e){if(vo(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function xc(e,t,r,n,a){const s={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";s==="enumerable"&&(e[t]=r),a&&s==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function Jn(e,t={}){if(Ja(e))return e.map(a=>Jn(a,t));if(!Pc(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,s)=>{if(Ja(t.props)&&!t.props.includes(s))return a;const i=e[s],l=Jn(i,t);return xc(a,s,l,e,t.nonenumerable),a},{})}class qe{constructor({dedupe:t=!1}={}){this.classRegistry=new Zl,this.symbolRegistry=new Fs(r=>r.description??""),this.customTransformerRegistry=new ec,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=fo(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const s=Sc(r,this.dedupe);return s&&(a.meta={...a.meta,referentialEqualities:s}),a}deserialize(t){const{json:r,meta:n}=t;let a=Jn(r);return n?.values&&(a=_c(a,n.values,this)),n?.referentialEqualities&&(a=bc(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}qe.defaultInstance=new qe;qe.serialize=qe.defaultInstance.serialize.bind(qe.defaultInstance);qe.deserialize=qe.defaultInstance.deserialize.bind(qe.defaultInstance);qe.stringify=qe.defaultInstance.stringify.bind(qe.defaultInstance);qe.parse=qe.defaultInstance.parse.bind(qe.defaultInstance);qe.registerClass=qe.defaultInstance.registerClass.bind(qe.defaultInstance);qe.registerSymbol=qe.defaultInstance.registerSymbol.bind(qe.defaultInstance);qe.registerCustom=qe.defaultInstance.registerCustom.bind(qe.defaultInstance);qe.allowErrorProps=qe.defaultInstance.allowErrorProps.bind(qe.defaultInstance);function ho(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function St(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function $c(e,t,r=100){try{const{databases:n,config:a}=await St(),s=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[T.greaterThan("$updatedAt",t),T.equal("mainId",e),T.limit(r),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${s.documents.length} purchases modifiés chargés`),s.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function po(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:s}=await St();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,[T.equal("mainId",e),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),T.limit(n)])).documents;const i=await a.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.products,[T.greaterThan("$updatedAt",r),T.equal("mainId",e),T.limit(n),T.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const s=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${s}`)}}async function nr(e,t){try{const{databases:r,config:n}=await St();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function jt(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=ho(n,t),{databases:s,config:i}=await St(),l=await s.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function mo(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await nr(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function go(e,t){return nr(e,{who:t})}async function Yn(e,t){return nr(e,{stockReel:t})}async function _o(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const a={};return t.stockReel!==void 0&&(a.stockReel=t.stockReel),t.who!==void 0&&(a.who=t.who),t.storeInfo!==void 0&&(a.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await nr(e,a)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await jt(e,a,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function bo(e){try{const{databases:t,config:r}=await St(),s=await(await window.AppwriteClient.getAccount()).get(),i={...e,createdBy:s.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,yr.unique(),i);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function yo(e,t){try{const{databases:r,config:n}=await St(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),s={...t,products:t.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,s);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,s),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function wo(e){try{const{databases:t,config:r}=await St();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function So(e){if(!e?.length)return[];try{const{databases:t,config:r}=await St(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[T.equal("$id",e),T.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Po(e,t={}){let r=null;const n=s=>{const{events:i,payload:l}=s;if(!l)return;const c=i.some(m=>m.includes("products.")),f=i.some(m=>m.includes("purchases.")),v=i.some(m=>m.includes(".create")),g=i.some(m=>m.includes(".update")),p=i.some(m=>m.includes(".delete"));if(c){const m=l;v&&t.onProductCreate?t.onProductCreate(m):g&&t.onProductUpdate?t.onProductUpdate(m):p&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(f){const m=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(m):g&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):p&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:s=>{console.error("[Appwrite Interactions] Erreur realtime:",s),t.onError?.(s)}}))}catch(s){console.error("[Appwrite Interactions] Impossible de configurer realtime:",s),t.onError?.(s)}})(),()=>{r&&(r(),r=null)}}async function xo(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await St(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function $o(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await St(),s=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function pa(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const s=JSON.parse(a.responseBody);return s.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${s.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",s.error),s}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function Eo(e,t,r,n){return pa({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function ko(e,t,r,n="replace"){return pa({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function Ao(e,t,r,n={}){try{const{databases:a,config:s}=await St(),c=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const v of r){const g={products:[t],mainId:e,quantity:v.q,unit:v.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await a.createDocument(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.purchases,yr.unique(),g);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${t}`),f}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const s=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${s}`)}}const Ec=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:pa,batchUpdateStore:Eo,batchUpdateWho:ko,createMainDocument:$o,createPurchase:bo,createQuickValidationPurchases:Ao,deletePurchase:wo,enrichedProductToAppwriteProduct:ho,loadMainEventData:xo,loadPurchasesListByIds:So,loadUpdatedPurchases:$c,subscribeToRealtime:Po,syncProductsWithPurchases:po,updateProduct:nr,updateProductBatch:_o,updateProductStock:Yn,updateProductStore:mo,updateProductWho:go,updatePurchase:yo,upsertProduct:jt},Symbol.toStringTag,{value:"Module"}));async function kc(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Ac(e,t){const r=Gl(e.byDate),n=Br(ln([])),{numeric:a,display:s}=cn(r,n);return{$id:e.productSemanticKey||`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:fr(r),displayTotalPurchases:"-",displayMissingQuantity:s,totalNeededOverrideParsed:null}}function Tc(e,t){return e.map(r=>Ac(r,t))}class Nc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";METADATA_KEY="cache-metadata";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=a=>{const s=a.target.result;s.objectStoreNames.contains(this.PRODUCTS_STORE)||(s.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),s.objectStoreNames.contains(this.METADATA_STORE)||(s.createObjectStore(this.METADATA_STORE),console.log("[IDBCache] Object store 'metadata' créé"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const s=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();s.onsuccess=()=>{const i=new Map;s.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},s.onerror=()=>r(s.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const s=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).get(this.METADATA_KEY);s.onsuccess=()=>{const i=s.result||{lastSync:null,allDates:[]};console.log(`[IDBCache] Metadata chargée: lastSync=${i.lastSync}, dates=${i.allDates?.length||0}`),t(i)},s.onerror=()=>r(s.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),s=a.objectStore(this.PRODUCTS_STORE);s.clear(),t.forEach(i=>{s.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put(t,this.METADATA_KEY);i.onsuccess=()=>{console.log("[IDBCache] Metadata sauvegardée"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Mc(e){const t=new Nc(e);return await t.open(),t}const Ya=1e3;class Cc{#e=new Tl;#r=H(null);#c=H(!1);#u=H(!1);#l=H(null);#o=H(!1);#i=H(!1);#a=H(null);#s=H(Ne([]));#f=H(Ne({start:null,end:null}));get dateRange(){return o(this.#f)}set dateRange(t){E(this.#f,t,!0)}#n=null;#d=null;#v=H(!1);#t=H(Ne({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return o(this.#t)}get currentMainId(){return o(this.#r)}get isInitialized(){return o(this.#c)}get loading(){return o(this.#u)}get error(){return o(this.#l)}get lastSync(){return o(this.#a)}get syncing(){return o(this.#o)}get availableDates(){return o(this.#s)}setDateRange(t,r){if(!t&&!r){this.dateRange={start:null,end:null};return}if(!t||!r){this.dateRange={start:t||r,end:t||r};return}const n=new Date(t)<=new Date(r)?t:r,a=new Date(t)>=new Date(r)?t:r;this.dateRange={start:n,end:a}}isFullRange(){return this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate}initializeDateRange(){if((!this.dateRange.start||!this.dateRange.end)&&o(this.#s).length>0){const t=[...o(this.#s)].sort();this.dateRange={start:t[0],end:t[t.length-1]}}console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}get firstAvailableDate(){return o(this.#s).length===0?null:[...o(this.#s)].sort()[0]}get lastAvailableDate(){return o(this.#s).length===0?null:[...o(this.#s)].sort().pop()}get realtimeConnected(){return o(this.#i)}get hugoContentChanged(){return o(this.#v)}#g=Y(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return o(this.#g)}set enrichedProducts(t){E(this.#g,t)}#_=Y(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const t=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[a,s]of this.#e){if(!s.byDate||!this.#B(s))continue;Object.keys(s.byDate).some(c=>{const f=new Date(c);return f>=t&&f<=r})&&n.set(a,s)}return n});get filteredProductsMap(){return o(this.#_)}set filteredProductsMap(t){E(this.#_,t)}#w=Y(()=>{console.log("[Store] Calcul unifié des stats par produit (1 itération)");const t=new Map;if(this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate){console.log("[Store] Full date range - using precomputed data");for(const[n,a]of this.#e){const s=Ra(a,this.dateRange.end),i=s.filter(c=>c.q>0),l=s.filter(c=>c.q<0).map(c=>({q:Math.abs(c.q),u:c.u}));t.set(n,{quantities:a.totalNeededArray,formattedQuantities:fr(a.totalNeededArray),nbRecipes:a.nbRecipes||0,totalAssiettes:a.totalAssiettes||0,stockResult:s,availableQuantities:i,missingQuantities:l,formattedAvailableQuantities:Oa(s),hasAvailable:i.length>0,hasMissing:l.length>0})}return t}for(const[n,a]of this.filteredProductsMap){if(!a.byDate)continue;const s=Ul(a.byDate),i=Ll(s,this.dateRange.start,this.dateRange.end),l=i.length>0?fr(i):"",c=zl(a.byDate,this.dateRange.start,this.dateRange.end),v=Object.keys(a.byDate).filter(_=>{const x=new Date(_),b=new Date(this.dateRange.start),y=new Date(this.dateRange.end);return x>=b&&x<=y}).flatMap(_=>a.byDate[_]?.recipes||[]),g=Ra(a,this.dateRange.end),p=g.filter(_=>_.q>0),m=g.filter(_=>_.q<0).map(_=>({q:Math.abs(_.q),u:_.u}));t.set(n,{quantities:i,formattedQuantities:l,nbRecipes:v.length,totalAssiettes:c,stockResult:g,availableQuantities:p,missingQuantities:m,formattedAvailableQuantities:Oa(g),hasAvailable:p.length>0,hasMissing:m.length>0})}return t});get productsStatsByDateRange(){return o(this.#w)}set productsStatsByDateRange(t){E(this.#w,t)}#S=Y(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return o(this.#S)}set stats(t){E(this.#S,t)}#h=Y(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return o(this.#h)}set uniqueStores(t){E(this.#h,t)}#p=Y(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return o(this.#p)}set uniqueWho(t){E(this.#p,t)}#m=Y(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return o(this.#m)}set uniqueProductTypes(t){E(this.#m,t)}#$=Y(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((i,l)=>i.$id.localeCompare(l.$id));if(o(this.#t).groupBy==="none")return{"":r};const n=Object.groupBy(r,i=>o(this.#t).groupBy==="store"?i.storeInfo?.storeName||"Non défini":i.productType||"Non défini"),a=Object.keys(n).sort((i,l)=>i===""?1:l===""?-1:i.localeCompare(l)),s={};return a.forEach(i=>{s[i]=n[i]}),s});get groupedFilteredProducts(){return o(this.#$)}set groupedFilteredProducts(t){E(this.#$,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(o(this.#c)&&o(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),E(this.#r,t,!0);try{this.#n=await Mc(t)}catch(r){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",r),new Error("Impossible d'initialiser le cache IndexedDB")}E(this.#l,null);try{if(await this.#T(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await kc(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),Tc(n.ingredients,t).forEach(i=>{this.#e.set(i.$id,i)}),E(this.#s,[...n.allDates],!0),await xo(t)||await $o(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#E()}this.initializeDateRange(),await this.#N(),E(this.#c,!0);const r=this.#j();this.#d=Po(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw E(this.#l,n,!0),console.error("[ProductsStore]",n,r),r}}async#T(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();E(this.#a,r.lastSync,!0),E(this.#s,[...r.allDates],!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#N(){if(o(this.#r)){E(this.#o,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${o(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${o(this.#a)}`);const t=await po(o(this.#r),{lastSync:o(this.#a),limit:Ya});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#k(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),o(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${o(this.#a)}`);const{loadUpdatedPurchases:r}=await Al(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Ec);return{loadUpdatedPurchases:a}},void 0),n=await r(o(this.#r),o(this.#a),Ya);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const s=a.products.map(i=>typeof i=="string"?i:i.$id);this.#x(s,a)}})}this.#M(),await this.#E(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{E(this.#o,!1)}}}async#E(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:o(this.#a),allDates:[...o(this.#s)]}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#P(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#M(){E(this.#a,new Date().toISOString(),!0)}#k(t,r){return r?this.#b(t,r):this.#C(t)}#C(t){const r=Br(ln(t.purchases??[])),n=[],{numeric:a,display:s}=cn(n,r),i=Rr(t.stockReel)??null,l=fr(r),c=t.store?Rr(t.store):null,f=i?`${i.quantity} ${i.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:c,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:s,totalNeededOverrideParsed:Da(t.totalNeededOverride)}}#b(t,r){const n=t.purchases??r.purchases,a=Br(ln(n??[])),s=fr(a),{numeric:i,display:l}=cn(r.totalNeededArray,a),c=t.stockReel??r.stockReel,f=c?Rr(c):r.stockParsed,v=t.store??r.store,g=v?Rr(v):r.storeInfo,p=f?`${f.quantity} ${f.unit}`:s;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:v,stockReel:c,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:g,stockParsed:f,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:p,displayTotalPurchases:s,displayMissingQuantity:l,totalNeededOverrideParsed:Da(t.totalNeededOverride??r.totalNeededOverride)}}#L(t){t.totalPurchasesArray=Br(ln(t.purchases??[]));const{numeric:r,display:n}=cn(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=fr(t.totalPurchasesArray)}#z(t){t.length&&(t.forEach(r=>this.#y(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#y(t){const r=this.#e.get(t.$id),n=this.#k(t,r);this.#e.set(t.$id,n)}#I(t){this.#e.delete(t)}async#D(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#q(r,t),r}async#R(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#x(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await So([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#x(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#O(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t));return r.forEach(n=>{this.#y(n)}),r.map(n=>n.$id)}#A(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#q(t,r){const n=this.#A(r),a=[];t.forEach(s=>{const i=this.#e.get(s);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#b({...i,purchases:[...l,n],status:"active"},i);a.push(c)}}}),a.forEach(s=>{this.#e.set(s.$id,s)})}#x(t,r){const n=this.#A(r),a=[];t.forEach(s=>{const i=this.#e.get(s);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const v=this.#b({...i,purchases:f,status:"active"},i);a.push(v)}else{const f=this.#b({...i,purchases:[...l,r],status:"active"},i);a.push(f)}}}),a.forEach(s=>{this.#e.set(s.$id,s)})}#j(){return{onProductCreate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#I(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#D(t);await this.#P(r)},onPurchaseUpdate:async t=>{const r=await this.#R(t);await this.#P(r)},onPurchaseDelete:async t=>{const r=await this.#O(t);await this.#P(r)},onConnect:()=>{E(this.#i,!0)},onDisconnect:()=>{E(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#B(t){if(o(this.#t).searchQuery.trim()){const r=o(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(o(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!o(this.#t).selectedStores.includes(t.storeInfo.storeName))||o(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>o(this.#t).selectedWho.includes(r)))||o(this.#t).selectedProductTypes.length>0&&(!t.productType||!o(this.#t).selectedProductTypes.includes(t.productType))||o(this.#t).selectedTemperatures.length>0&&!(o(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||o(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Bl(t=>{o(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=o(this.#t).selectedProductTypes.indexOf(t);r>-1?o(this.#t).selectedProductTypes.splice(r,1):o(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=o(this.#t).selectedTemperatures.indexOf(t);r>-1?o(this.#t).selectedTemperatures.splice(r,1):o(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){o(this.#t).selectedProductTypes=[],o(this.#t).selectedTemperatures=[]}setGroupBy(t){o(this.#t).groupBy=t}toggleStore(t){const r=o(this.#t).selectedStores.indexOf(t);r>-1?o(this.#t).selectedStores.splice(r,1):o(this.#t).selectedStores.push(t)}toggleWho(t){const r=o(this.#t).selectedWho.indexOf(t);r>-1?o(this.#t).selectedWho.splice(r,1):o(this.#t).selectedWho.push(t)}clearStoreFilters(){o(this.#t).selectedStores=[]}clearWhoFilters(){o(this.#t).selectedWho=[]}handleSort(t){o(this.#t).sortColumn===t?o(this.#t).sortDirection=o(this.#t).sortDirection==="asc"?"desc":"asc":(o(this.#t).sortColumn=t,o(this.#t).sortDirection="asc")}clearFilters(){E(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return o(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[o(this.#t).sortColumn],s=n[o(this.#t).sortColumn];return o(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,s=parseFloat(s)||0):o(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,s=n.purchases?.length||0),a<s?o(this.#t).sortDirection==="asc"?-1:1:a>s?o(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Vl(r.byDate):!1}get enrichedProductsCount(){return this.#e.size}async forceReload(t){await this.clearCache(),await this.initialize(t)}async clearCache(){this.#e.clear(),E(this.#s,[],!0),E(this.#a,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(a=>{const s=this.#e.get(a);if(s){const i={...s,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#d?.(),this.#d=null,this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const Z=new Cc;function Ic(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Dc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Rc=nl("<svg><!><!></svg>");function fe(e,t){z(t,!0);const r=Ae(t,"color",3,"currentColor"),n=Ae(t,"size",3,24),a=Ae(t,"strokeWidth",3,2),s=Ae(t,"absoluteStrokeWidth",3,!1),i=Ae(t,"iconNode",19,()=>[]),l=ce(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=Rc();Ma(c,g=>({...Dc,...l,width:n(),height:n(),stroke:r(),"stroke-width":g,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>s()?Number(a())*24/Number(n()):a()]);var f=u(c);lt(f,17,i,Gn,(g,p)=>{var m=Y(()=>os(o(p),2));let _=()=>o(m)[0],x=()=>o(m)[1];var b=L(),y=R(b);ul(y,_,!0,(P,w)=>{Ma(P,()=>({...x()}))}),h(g,b)});var v=d(f);ne(v,()=>t.children??F),h(e,c),V()}function Zn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];fe(e,de({name:"archive"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Oc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];fe(e,de({name:"bean"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function qc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];fe(e,de({name:"beef"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function jc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];fe(e,de({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Bc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];fe(e,de({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Qr(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];fe(e,de({name:"check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Lc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];fe(e,de({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function zc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];fe(e,de({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Vc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];fe(e,de({name:"circle-arrow-down"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Uc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];fe(e,de({name:"circle-arrow-right"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Za(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];fe(e,de({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Wc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];fe(e,de({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Gc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];fe(e,de({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Qc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];fe(e,de({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Hc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];fe(e,de({name:"clock"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Kc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];fe(e,de({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function ma(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];fe(e,de({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Jc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];fe(e,de({name:"egg"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Yc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];fe(e,de({name:"euro"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Zc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];fe(e,de({name:"funnel-x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function To(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];fe(e,de({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Xc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];fe(e,de({name:"info"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Fc(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];fe(e,de({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function eu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];fe(e,de({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function tu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];fe(e,de({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function ru(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];fe(e,de({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function nu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];fe(e,de({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function au(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];fe(e,de({name:"message-circle-more"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function su(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];fe(e,de({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function ga(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];fe(e,de({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function ou(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];fe(e,de({name:"moon"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function iu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];fe(e,de({name:"package-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Yr(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];fe(e,de({name:"package"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function lu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];fe(e,de({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function cu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];fe(e,de({name:"plus"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function uu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];fe(e,de({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function du(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];fe(e,de({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function fu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];fe(e,de({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function vu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];fe(e,de({name:"save"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function hu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];fe(e,de({name:"search"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function No(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];fe(e,de({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Vt(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];fe(e,de({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Mo(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];fe(e,de({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Xn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];fe(e,de({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Qt(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];fe(e,de({name:"store"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function pu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];fe(e,de({name:"sun"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function mu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];fe(e,de({name:"thermometer"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function En(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];fe(e,de({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Co(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];fe(e,de({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Zr(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];fe(e,de({name:"user"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function Fn(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];fe(e,de({name:"users"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function gu(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];fe(e,de({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}function wt(e,t){z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];fe(e,de({name:"x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=L(),l=R(i);ne(l,()=>t.children??F),h(a,i)},$$slots:{default:!0}})),V()}class _u{isMobileQuery=new Il("max-width: 767px");get isMobile(){return this.isMobileQuery.current}userName(){return localStorage.getItem("appwrite-user-name")||""}}const Hr=new _u;function bu(e,t){const r=e.reduce((a,s)=>{const i=s.isSynced?0:1,l=s.missingQuantities.length;return a+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function yu(e,t){const r=e.filter(c=>!c.isSynced).map(c=>({productId:c.productId,productData:c.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(c){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",c)}const a=t.purchaseStatus||"delivered";let s=t.purchaseDeliveryDate||null;a==="delivered"&&!s&&(s=new Date().toISOString());const i=e.flatMap(c=>c.missingQuantities.map(f=>({productId:c.productId,quantity:f.q,unit:f.u,status:a,notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:s,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:i},invoiceData:t}}async function wu(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=bu(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const a=100,s=[];if(n<=a)s.push(t);else{let p=[],m=0;for(const _ of t){const x=(_.isSynced?0:1)+_.missingQuantities.length;m+x>a?(p.length>0&&s.push(p),p=[_],m=x):(p.push(_),m+=x)}p.length>0&&s.push(p)}console.log(`[Appwrite Interactions] Découpage en ${s.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,f=0;for(let p=0;p<s.length;p++){const m=s[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${s.length} (${m.length} produits)`);try{const _=await yu(m,r),x=await Su(_);if(i.push(x),x.success)l+=x.productsCreated,c+=x.purchasesCreated,f+=x.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${x.error}`);break}}catch(_){const x=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,_),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:x,timestamp:new Date().toISOString()});break}}const v=i.every(p=>p.success),g=i.some(p=>!p.success);return{success:v,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:f,error:g?"Un ou plusieurs lots ont échoué":void 0}}async function Su(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const s=JSON.parse(a.responseBody);return s.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${s.productsCreated} produits créés, ${s.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",s.error),s}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var Pu=(e,t,r)=>t(o(r).id),xu=$('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),$u=$('<span class="flex items-center gap-1"><!> </span>'),Eu=$('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),ku=$('<div class="flex flex-wrap gap-2"></div> <!>',1);function Kr(e,t){z(t,!0);let r=Ae(t,"badgeSize",3,"badge-lg"),n=Ae(t,"color",3,"primary"),a=Ae(t,"badgeStyle",3,""),s=Ae(t,"onToggleItem",3,()=>{}),i=Ae(t,"showStats",3,!1),l=Ae(t,"showIcon",3,!0),c=H(Ne({}));lr(()=>{const b={};t.items.forEach(y=>{b[y.id]=y.selected??!0}),E(c,b,!0)});function f(b){o(c)[b]=!o(c)[b],s()(b)}const v=Y(()=>Object.values(o(c)).filter(Boolean).length),g=Y(()=>Object.values(o(c)).filter(b=>!b).length);var p=ku(),m=R(p);lt(m,21,()=>t.items,b=>b.id,(b,y)=>{const P=Y(()=>o(c)[o(y).id]);var w=xu();w.__click=[Pu,f,y];var S=u(w);{var k=j=>{var W=L(),te=R(W);er(te,()=>o(y).icon,(ee,D)=>{D(ee,{class:"h-3 w-3",get title(){return o(y).title}})}),h(j,W)};M(S,j=>{o(y).icon&&j(k)})}var A=d(S,2),C=u(A),O=d(A,2);{var X=j=>{var W=L(),te=R(W);{var ee=I=>{Qr(I,{size:16})},D=I=>{cu(I,{size:16})};M(te,I=>{o(P)?I(ee):I(D,!1)})}h(j,W)};M(O,j=>{l()&&j(X)})}G(()=>{Ee(w,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${o(P)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),Wt(w,"title",o(P)?"Retirer de la liste":"Réajouter à la liste"),U(C,o(y).label)}),h(b,w)});var _=d(m,2);{var x=b=>{var y=Eu(),P=u(y),w=u(P),S=u(w);Qr(S,{class:"text-success h-3 w-3"});var k=d(S),A=d(w,2);{var C=j=>{var W=$u(),te=u(W);wt(te,{class:"text-error h-3 w-3"});var ee=d(te);G(()=>U(ee,` ${o(g)??""} retirés`)),h(j,W)};M(A,j=>{o(g)>0&&j(C)})}var O=d(P,2),X=u(O);G(()=>{U(k,` ${o(v)??""} actifs`),U(X,`Total: ${t.items.length??""} items`)}),h(b,y)};M(_,b=>{i()&&b(x)})}h(e,p),V()}Je(["click"]);function Au(e,t){E(t,!o(t))}var Tu=$('<span class="text-base-content font-semibold"> </span>'),Nu=$('<div class="text-base-content/80 flex-1"> </div>'),Mu=$('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Cu=$('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Iu=$('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Io(e,t){let r=Ae(t,"icon",3,Xc),n=Ae(t,"class",3,""),a=Ae(t,"initiallyOpen",3,!1),s=r(),i=H(Ne(a())),l=Ne(t.children);var c=Iu(),f=u(c);f.__click=[Au,i];var v=u(f),g=u(v);s(g,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(g,2);{var m=S=>{var k=Tu(),A=u(k);G(()=>U(A,t.title)),h(S,k)};M(p,S=>{t.title&&S(m)})}var _=d(v,2);{var x=S=>{var k=Nu(),A=u(k);G(()=>U(A,t.contentVisible)),h(S,k)};M(_,S=>{t.contentVisible&&S(x)})}var b=d(_,2);{var y=S=>{var k=Mu(),A=u(k),C=u(A);{var O=W=>{var te=gt("en savoir plus");h(W,te)},X=W=>{var te=gt("masquer");h(W,te)};M(C,W=>{o(i)?W(X,!1):W(O)})}var j=d(A,2);{let W=Y(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${o(i)?"rotate-180":""}`);zc(j,{get class(){return o(W)}})}h(S,k)};M(b,S=>{l&&S(y)})}var P=d(f,2);{var w=S=>{var k=Cu(),A=u(k),C=u(A);ne(C,()=>t.children??F),G(()=>Ee(k,1,`overflow-hidden transition-all duration-200 ${o(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),h(S,k)};M(P,S=>{l&&S(w)})}G(()=>{Ee(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Gs(c,t.style),Ee(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),Wt(f,"aria-expanded",o(i))}),h(e,c)}Je(["click"]);async function Du(e,t,r,n,a,s,i,l){if(!(!o(t)||o(r))){E(r,!0),E(n,null),E(a,null);try{const c=`FACTURE_${Date.now()}`,f=o(s).map(m=>m.$id);Z.setSyncStatus(f,!0);const v=[];for(const m of o(s))v.push({productId:m.$id,isSynced:m.isSynced,productData:m,missingQuantities:m.missingQuantityArray||[]});const g={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${o(s).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${v.length} produits...`),l.onClose();const p=await wu(Z.currentMainId,v,g);if(p.success)E(a,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";E(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),Z.clearSyncStatus()}finally{E(r,!1)}}}function Xa(e,t,r){o(t)||r.onClose()}var Ru=$('<div class="alert alert-error"><!> <span> </span></div>'),Ou=$('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),qu=$(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),ju=$("<option> </option>"),Bu=$("<option> </option>"),Lu=$('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),zu=$('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Vu=$("<!> ",1),Uu=$(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function Wu(e,t){z(t,!0);let r=H(!1),n=H(null),a=H(null),s=Ne({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=H(Ne(new Set));lr(()=>{E(i,new Set(t.products.map(le=>le.$id)),!0)});const l=Y(()=>t.products.filter(le=>o(i).has(le.$id))),c=Y(()=>o(l).length!==0),f=Y(()=>`Achat groupé (${o(l).length} produits sélectionnés)`);function v(le){const we=new Set(o(i));we.has(le)?we.delete(le):we.add(le),E(i,we,!0)}const g=Y(()=>t.products.map(le=>({id:le.$id,label:le.productName,title:le.productName})));var p=Uu(),m=u(p),_=u(m),x=u(_),b=u(x);Vt(b,{class:"h-5 w-5"});var y=d(b),P=d(x,2);P.__click=[Xa,r,t];var w=u(P);wt(w,{class:"h-4 w-4"});var S=d(_,2),k=u(S);{var A=le=>{var we=Ru(),Se=u(we);En(Se,{class:"h-4 w-4"});var Le=d(Se,2),Qe=u(Le);G(()=>U(Qe,o(n))),h(le,we)};M(k,le=>{o(n)&&le(A)})}var C=d(k,2);{var O=le=>{var we=Ou(),Se=u(we);Qr(Se,{class:"h-4 w-4"});var Le=d(Se,2),Qe=u(Le),ft=d(Qe);{var _t=K=>{var ve=gt("+ 1 dépense globale");h(K,ve)};M(ft,K=>{o(a).expense&&K(_t)})}var Fe=d(ft,2);{var vt=K=>{var ve=gt();G(()=>U(ve,`(traité en ${o(a).batches??""} lots)`)),h(K,ve)};M(Fe,K=>{o(a).batches&&o(a).batches>1&&K(vt)})}G(()=>U(Qe,`Achat groupé créé avec succès ! ${o(a).purchases??""} produit(s) validés `)),h(le,we)};M(C,le=>{o(a)&&le(O)})}var X=d(C,2),j=u(X);Io(j,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(le,we)=>{var Se=qu();h(le,Se)},$$slots:{default:!0}});var W=d(X,2),te=d(u(W),2),ee=u(te),D=u(ee),I=u(D);Qt(I,{class:"h-4 w-4 opacity-50"});var J=d(I,2),re=d(D,2);lt(re,21,()=>Z.uniqueStores,Gn,(le,we)=>{var Se=ju(),Le=u(Se),Qe={};G(()=>{U(Le,o(we)),Qe!==(Qe=o(we))&&(Se.value=(Se.__value=o(we))??"")}),h(le,Se)});var N=d(ee,2),Q=u(N),oe=u(Q);Zr(oe,{class:"h-4 w-4 opacity-50"});var se=d(oe,2),he=d(Q,2);lt(he,21,()=>Z.uniqueWho,Gn,(le,we)=>{var Se=Bu(),Le=u(Se),Qe={};G(()=>{U(Le,o(we)),Qe!==(Qe=o(we))&&(Se.value=(Se.__value=o(we))??"")}),h(le,Se)});var be=d(N,2),xe=u(be),B=u(xe);Yc(B,{class:"h-4 w-4 opacity-50"});var ge=d(B,2),q=d(te,2),ie=u(q),ke=u(ie),De=u(ke);De.value=De.__value="delivered";var We=d(De);We.value=We.__value="ordered";var Be=d(ke,2),Ye=d(ie,2);{var pe=le=>{var we=Lu(),Se=u(we),Le=d(u(Se),2);G(()=>Le.disabled=o(r)),Me(Le,()=>s.deliveryDate,Qe=>s.deliveryDate=Qe),h(le,we)};M(Ye,le=>{s.status==="ordered"&&le(pe)})}var ye=d(q,2),st=u(ye),ue=u(st);ga(ue,{class:"h-4 w-4 opacity-50"});var Ve=d(ue,2),ae=d(W,2),_e=d(u(ae),2);Kr(_e,{get items(){return o(g)},onToggleItem:v,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Ge=d(ae,2),me=u(Ge);me.__click=[Xa,r,t];var ot=d(me,2);ot.__click=[Du,c,r,n,a,l,s,t];var Ce=u(ot);{var Xe=le=>{var we=zu();h(le,we)},Tt=le=>{var we=Vu(),Se=R(we);Vt(Se,{class:"h-4 w-4"});var Le=d(Se);G(()=>U(Le,` Valider ${o(l).length??""} produit(s)`)),h(le,we)};M(Ce,le=>{o(r)?le(Xe):le(Tt,!1)})}G(()=>{U(y,` ${o(f)??""}`),P.disabled=o(r),J.disabled=o(r),se.disabled=o(r),ge.disabled=o(r),ke.disabled=o(r),Ee(Be,1,`label text-sm ${s.status==="delivered"?"":"hidden"}`),Ve.disabled=o(r),me.disabled=o(r),ot.disabled=o(r)||!o(c)}),Me(J,()=>s.store,le=>s.store=le),Me(se,()=>s.who,le=>s.who=le),Me(ge,()=>s.expense,le=>s.expense=le),Yt(ke,()=>s.status,le=>s.status=le),Me(Ve,()=>s.notes,le=>s.notes=le),h(e,p),V()}Je(["click"]);function ea(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Oc};case"animaux":return{displayName:"Viandes et Poissons",icon:qc};case"legumes":return{displayName:"Fruits et Légumes",icon:Bc};case"sucres":return{displayName:"Sucrées",icon:jc};case"lof":return{displayName:"L.O.F",icon:Jc};case"autres":return{displayName:"Autres",icon:Lc};case"epices":return{displayName:"Assaisonnements",icon:eu};case"frais":return{displayName:"Produits Frais",icon:fu};default:return{displayName:e,icon:Yr}}}function Fa(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function kn(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function An(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Gu(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function ta(e){switch(e){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function es(e){return e?An(e):"-"}function Qu(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",s=n.unit||"unit",i=`${a}_${s}`;if(!r[i]){const l=ta(a);r[i]={status:a,unit:s,quantity:0,badgeClass:l.class,badgeText:l.text,icon:Hu(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function Hu(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"ShoppingCart";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function Ku(e){let t=H(!1),r=H(null);const n=Y(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),Z.getEnrichedProductById(e))),a=Y(()=>o(n)?.who??[]),s=Y(()=>o(n)?.stockParsed??null),i=Y(()=>o(n)?.purchases??[]),l=Y(()=>o(n)?.byDate?Wl(o(n).byDate):[]),c=Ne({purchase:{quantity:null,unit:"",store:"",who:Hr.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let f=H(!1),v=H(null);lr(()=>{!o(n)||o(f)||(c.purchase.quantity=o(n).missingQuantityArray[0]?.q??null,c.purchase.unit=o(n).totalNeededArray[0]?.u??"",c.purchase.store=o(n).storeInfo?.storeName??"",c.purchase.who=Hr.userName()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=o(n).totalNeededArray[0]?.u??"",c.store.name=o(n).storeInfo?.storeName??"",c.store.comment=o(n).storeInfo?.storeComment??null,c.who=o(n)?.who?[...o(n).who]:[],E(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),E(f,!0))});const g=Y(()=>o(v)?{store:JSON.stringify(c.store)!==JSON.stringify(o(v).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(o(v).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?o(s)?c.stock.quantity.toString()!==o(s).quantity||c.stock.unit!==o(s).unit||(c.stock.notes||"")!==(o(s).notes||""):!0:!1}const m=Y(()=>!!(o(v)&&(o(g).store||o(g).stock||o(g).who)));let _=H(null);const x=Y(()=>o(_)?o(i).find(D=>D.$id===o(_))??null:null);async function b(D,I){E(t,!0),E(r,null);try{const J=await D();return I&&y("success",I),J}catch(J){const re=J instanceof Error?J.message:"Une erreur est survenue";return E(r,re,!0),y("error",re),console.error("[ProductModalState]",J),null}finally{E(t,!1)}}function y(D,I){const J=new CustomEvent("toast",{detail:{type:D,message:I}});window.dispatchEvent(J)}async function P(){o(n)&&await b(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!Z.currentMainId)throw new Error("mainId non disponible");const{quantity:D,unit:I}=Fa(c.purchase.quantity,c.purchase.unit);o(n).isSynced||(console.log(`[ProductModalState] Produit ${o(n).$id} local, création pour purchase...`),await jt(o(n).$id,{},N=>Z.getEnrichedProductById(N)));const J=c.purchase.status||"delivered";let re=c.purchase.deliveryDate||null;J==="delivered"&&!re&&(re=new Date().toISOString()),await bo({products:[o(n).$id],mainId:Z.currentMainId,unit:I,quantity:D,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:J,orderDate:c.purchase.orderDate||null,deliveryDate:re}),c.purchase={quantity:o(n).missingQuantityArray[0]?.q??null,unit:o(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function w(D){E(_,D.$id,!0)}function S(){E(_,null)}async function k(D){D.$id&&await b(async()=>{const{quantity:I,unit:J}=Fa(D.quantity,D.unit),re=D.status||null;let N=D.deliveryDate||null;re==="delivered"&&!N&&(N=new Date().toISOString()),await yo(D.$id,{unit:J,quantity:I,store:D.store||null,who:D.who||null,notes:D.notes||"",price:D.price||null,status:re,orderDate:D.orderDate||null,deliveryDate:N}),E(_,null)},"Achat modifié avec succès")}async function A(D){const I=o(i).find(J=>J.$id===D);I&&confirm(`Supprimer cet achat (${I.quantity} ${I.unit}) ?`)&&await b(async()=>{await wo(D)},"Achat supprimé avec succès")}async function C(){o(n)&&await b(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const D={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, update stock normal...`),await Yn(o(n).$id,JSON.stringify(D))):(console.log(`[ProductModalState] Produit ${o(n).$id} local, création stock avec upsert...`),await jt(o(n).$id,{stockReel:JSON.stringify(D)},I=>Z.getEnrichedProductById(I))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function O(){o(n)&&confirm("Supprimer le stock actuel ?")&&await b(async()=>{o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, suppression stock normal...`),await Yn(o(n).$id,null)):(console.log(`[ProductModalState] Produit ${o(n).$id} local, suppression stock avec upsert...`),await jt(o(n).$id,{stockReel:null},D=>Z.getEnrichedProductById(D)))},"Stock supprimé")}async function X(D){o(n)&&await b(async()=>{o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, setWho normal...`),await go(o(n).$id,D)):(console.log(`[ProductModalState] Produit ${o(n).$id} local, création who avec upsert...`),await jt(o(n).$id,{who:D},I=>Z.getEnrichedProductById(I)))},"Volontaires mis à jour")}async function j(D){o(n)&&await b(async()=>{o(n).isSynced?(console.log(`[ProductModalState] Produit ${o(n).$id} déjà sync, update store normal...`),await mo(o(n).$id,D)):(console.log(`[ProductModalState] Produit ${o(n).$id} local, création store avec upsert...`),await jt(o(n).$id,{store:JSON.stringify(D)},I=>Z.getEnrichedProductById(I)))},"Magasin mis à jour")}async function W(D){o(n)&&await b(async()=>{await nr(o(n).$id,{totalNeededOverride:JSON.stringify(D)})},"Override appliqué")}async function te(){o(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await b(async()=>{await nr(o(n).$id,{totalNeededOverride:null})},"Override supprimé")}async function ee(){!o(n)||!o(m)||await b(async()=>{const D={};if(o(g).stock&&c.stock.quantity&&c.stock.unit){const I={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};D.stockReel=JSON.stringify(I)}if(o(g).who&&(D.who=c.who),o(g).store){const I={storeName:c.store.name||"",storeComment:c.store.comment||void 0};D.storeInfo=I}Object.keys(D).length>0&&(await _o(o(n).$id,D,I=>Z.getEnrichedProductById(I)),E(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return o(t)},get error(){return o(r)},get product(){return o(n)},get recipes(){return o(l)},get whoList(){return o(a)},get stockParsed(){return o(s)},get purchasesList(){return o(i)},get editingPurchaseId(){return o(_)},get editingPurchaseData(){return o(x)},forms:c,addPurchase:P,startEditPurchase:w,cancelEditPurchase:S,updateEditedPurchase:k,removePurchase:A,setStock:C,removeStock:O,setWho:X,updateStore:j,setOverride:W,removeOverride:te,saveAllChanges:ee,get hasChanges(){return o(g)},get hasAnyChanges(){return o(m)},formatQuantity:kn,formatDate:An,formatDisplayQuantity:Gu}}function Ju(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Yu(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Zu(e,t){t().cancelEditPurchase()}var Xu=$('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Fu=$('<span class="loading loading-spinner loading-sm"></span>'),ed=$('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),td=$('<span class="loading loading-spinner loading-sm"></span>'),rd=$('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Livré</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),nd=(e,t,r)=>t(o(r)),ad=(e,t,r)=>t(o(r).$id),sd=$('<span class="loading loading-spinner loading-sm"></span>'),od=$('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),id=$('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),ld=$(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function cd(e,t){z(t,!0);let r=Ae(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(ue){return ue.quantity!==null&&ue.quantity!==0&&ue.unit?.trim()!==""}function s(ue){r().removePurchase(ue)}function i(ue){r().startEditPurchase(ue)}var l=ld(),c=u(l),f=u(c);Vt(f,{class:"h-5 w-5"});var v=d(c,2),g=u(v),p=d(u(g),2),m=u(p),_=u(m);Yr(_,{class:"h-4 w-4 opacity-50"});var x=d(_,2),b=d(m,2),y=u(b);y.value=y.__value="";var P=d(y);P.value=P.__value="kg";var w=d(P);w.value=w.__value="gr.";var S=d(w);S.value=S.__value="l.";var k=d(S);k.value=k.__value="ml";var A=d(k);A.value=A.__value="unité";var C=d(A);C.value=C.__value="bottes";var O=d(b,2),X=u(O);Qt(X,{class:"h-4 w-4 opacity-50"});var j=d(X,2),W=d(O,2),te=u(W);Zr(te,{class:"h-4 w-4 opacity-50"});var ee=d(te,2),D=d(W,2),I=d(u(D),2),J=d(p,2),re=u(J),N=u(re);ga(N,{class:"h-4 w-4 opacity-50"});var Q=d(N,2),oe=d(J,2),se=u(oe),he=u(se),be=u(he),xe=u(be);xe.value=xe.__value="delivered";var B=d(xe);B.value=B.__value="ordered";var ge=d(he,2),q=d(se,2);{var ie=ue=>{var Ve=Xu(),ae=d(u(Ve),2);Me(ae,()=>r().forms.purchase.deliveryDate,_e=>r().forms.purchase.deliveryDate=_e),h(ue,Ve)};M(q,ue=>{r().forms.purchase.status==="ordered"&&ue(ie)})}var ke=d(oe,2),De=u(ke);De.__click=[Ju,n,r];var We=u(De);{var Be=ue=>{var Ve=Fu();h(ue,Ve)},Ye=ue=>{var Ve=gt("Ajouter l'achat");h(ue,Ve)};M(We,ue=>{r().loading?ue(Be):ue(Ye,!1)})}var pe=d(v,2);{var ye=ue=>{var Ve=ed(),ae=u(Ve);Vt(ae,{class:"mx-auto mb-2 h-12 w-12"}),h(ue,Ve)},st=ue=>{var Ve=id(),ae=u(Ve),_e=d(u(ae));lt(_e,21,()=>r().purchasesList,Ge=>Ge.$id,(Ge,me,ot)=>{var Ce=L(),Xe=R(Ce);{var Tt=we=>{var Se=rd(),Le=u(Se),Qe=u(Le),ft=u(Qe),_t=d(ft,2),Fe=u(_t);Fe.value=Fe.__value="kg";var vt=d(Fe);vt.value=vt.__value="gr.";var K=d(vt);K.value=K.__value="l.";var ve=d(K);ve.value=ve.__value="ml";var Te=d(ve);Te.value=Te.__value="unité";var je=d(Te);je.value=je.__value="bottes";var Ze=d(Le),ze=u(Ze),He=d(Ze),Re=u(He),qt=d(He),Er=u(qt),kr=u(Er);kr.value=kr.__value="ordered";var Xr=d(kr);Xr.value=Xr.__value="delivered";var Fr=d(qt),Ar=u(Fr),en=d(Fr),Tr=u(en),tn=d(en),Tn=u(tn),rn=d(tn),Pt=u(rn),Nr=d(rn),Nn=u(Nr),ur=u(Nn);ur.__click=[Yu,r,a];var Mn=u(ur);{var Ro=Oe=>{var jo=td();h(Oe,jo)},Oo=Oe=>{vu(Oe,{class:"h-3 w-3"})};M(Mn,Oe=>{r().loading?Oe(Ro):Oe(Oo,!1)})}var _a=d(ur,2);_a.__click=[Zu,r];var qo=u(_a);wt(qo,{class:"h-3 w-3"}),G(Oe=>ur.disabled=Oe,[()=>r().loading||!a(o(me))]),Me(ft,()=>o(me).quantity,Oe=>o(me).quantity=Oe),Yt(_t,()=>o(me).unit,Oe=>o(me).unit=Oe),Me(ze,()=>o(me).store,Oe=>o(me).store=Oe),Me(Re,()=>o(me).who,Oe=>o(me).who=Oe),Yt(Er,()=>o(me).status,Oe=>o(me).status=Oe),Me(Ar,()=>o(me).orderDate,Oe=>o(me).orderDate=Oe),Me(Tr,()=>o(me).deliveryDate,Oe=>o(me).deliveryDate=Oe),Me(Tn,()=>o(me).price,Oe=>o(me).price=Oe),Me(Pt,()=>o(me).notes,Oe=>o(me).notes=Oe),h(we,Se)},le=we=>{var Se=od(),Le=u(Se),Qe=u(Le),ft=d(Le),_t=u(ft),Fe=d(ft),vt=u(Fe),K=d(Fe),ve=u(K),Te=u(ve),je=d(K),Ze=u(je),ze=d(je),He=u(ze),Re=d(ze),qt=u(Re),Er=d(Re),kr=u(Er),Xr=d(Er),Fr=u(Xr),Ar=u(Fr);Ar.__click=[nd,i,me];var en=u(Ar);Xn(en,{class:"h-4 w-4"});var Tr=d(Ar,2);Tr.__click=[ad,s,me];var tn=u(Tr);{var Tn=Pt=>{var Nr=sd();h(Pt,Nr)},rn=Pt=>{wt(Pt,{class:"h-4 w-4"})};M(tn,Pt=>{r().loading?Pt(Tn):Pt(rn,!1)})}G((Pt,Nr,Nn,ur,Mn)=>{U(Qe,Pt),U(_t,o(me).store||"-"),U(vt,o(me).who||"-"),Ee(ve,1,`badge badge-sm ${Nr??""}`),U(Te,Nn),U(Ze,ur),U(He,Mn),U(qt,o(me).price?`${o(me).price}€`:"-"),U(kr,o(me).notes||"-"),Tr.disabled=r().loading},[()=>kn(o(me).quantity,o(me).unit),()=>ta(o(me).status).class,()=>ta(o(me).status).text,()=>es(o(me).orderDate),()=>es(o(me).deliveryDate)]),h(we,Se)};M(Xe,we=>{r().editingPurchaseId===o(me).$id?we(Tt):we(le,!1)})}h(Ge,Ce)}),h(ue,Ve)};M(pe,ue=>{r().purchasesList.length===0?ue(ye):ue(st,!1)})}G(ue=>{Ee(ge,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),De.disabled=ue},[()=>r().loading||!n()]),Me(x,()=>r().forms.purchase.quantity,ue=>r().forms.purchase.quantity=ue),Yt(b,()=>r().forms.purchase.unit,ue=>r().forms.purchase.unit=ue),Me(j,()=>r().forms.purchase.store,ue=>r().forms.purchase.store=ue),Me(ee,()=>r().forms.purchase.who,ue=>r().forms.purchase.who=ue),Me(I,()=>r().forms.purchase.price,ue=>r().forms.purchase.price=ue),Me(Q,()=>r().forms.purchase.notes,ue=>r().forms.purchase.notes=ue),Yt(be,()=>r().forms.purchase.status,ue=>r().forms.purchase.status=ue),h(e,l),V()}Je(["click"]);async function ud(e,t){await t()?.removeStock()}var dd=$(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),fd=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},vd=$('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),hd=$('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),pd=$('<span class="loading loading-spinner loading-xs"></span>'),md=$('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),gd=$(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div> <!></div>`);function _d(e,t){z(t,!0);let r=Ae(t,"modalState",7);var n=gd(),a=u(n),s=u(a);Zn(s,{class:"h-5 w-5"});var i=d(a,2),l=u(i),c=u(l),f=u(c),v=d(c,2),g=u(v);Io(g,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(I,J)=>{var re=dd();h(I,re)},$$slots:{default:!0}});var p=d(v,2),m=u(p),_=u(m);Yr(_,{class:"h-4 w-4 opacity-50"});var x=d(_,2),b=d(m,2),y=u(b);y.value=y.__value="";var P=d(y);P.value=P.__value="kg";var w=d(P);w.value=w.__value="gr.";var S=d(w);S.value=S.__value="l.";var k=d(S);k.value=k.__value="ml";var A=d(k);A.value=A.__value="unité";var C=d(A);C.value=C.__value="bottes";var O=d(p,2),X=u(O),j=d(O,2),W=u(j);W.__click=[fd,r];var te=d(i,2);{var ee=I=>{var J=vd(),re=u(J);Zn(re,{class:"mx-auto mb-2 h-12 w-12"}),h(I,J)},D=I=>{var J=md(),re=u(J),N=d(u(re),2),Q=u(N),oe=d(u(Q),2),se=u(oe),he=d(Q,2),be=d(u(he),2),xe=u(be),B=d(he,2);{var ge=Be=>{var Ye=hd(),pe=d(u(Ye),2),ye=u(pe);G(()=>U(ye,r().stockParsed.notes)),h(Be,Ye)};M(B,Be=>{r().stockParsed.notes&&Be(ge)})}var q=d(N,2),ie=u(q);ie.__click=[ud,r];var ke=u(ie);{var De=Be=>{var Ye=pd();h(Be,Ye)},We=Be=>{var Ye=gt("Supprimer le stock");h(Be,Ye)};M(ke,Be=>{r().loading?Be(De):Be(We,!1)})}G(Be=>{U(se,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),U(xe,Be),ie.disabled=r().loading},[()=>An(r().stockParsed.dateTime)]),h(I,J)};M(te,I=>{r().stockParsed?I(D,!1):I(ee)})}G(I=>{U(f,`Déclarer le stock réel du ${I??""}`),W.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),Me(x,()=>r().forms.stock.quantity,I=>r().forms.stock.quantity=I),Yt(b,()=>r().forms.stock.unit,I=>r().forms.stock.unit=I),Me(X,()=>r().forms.stock.notes,I=>r().forms.stock.notes=I),h(e,n),V()}Je(["click"]);function bd(e,t,r){t().forms.who=[...t().whoList],E(r,"")}var yd=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},wd=$('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div></div></div>');function Sd(e,t){z(t,!0);let r=Ae(t,"modalState",7),n=H("");const a=Y(()=>{const C=new Set([...Z.uniqueWho,...r().forms.who]);return Array.from(C).map(O=>({id:O,label:O,selected:r().forms.who.includes(O)}))});function s(C){const O=C.trim();O&&!r().forms.who.includes(O)&&(r().forms.who=[...r().forms.who,O])}function i(C){r().forms.who=r().forms.who.filter(O=>O!==C)}function l(C){r().forms.who.includes(C)?i(C):s(C)}function c(){o(n).trim()&&(s(o(n)),E(n,""))}var f=wd(),v=u(f),g=u(v),p=d(u(g),4),m=u(p),_=u(m),x=u(_);Zr(x,{class:"h-4 w-4 opacity-50"});var b=d(x,2);b.__keydown=[yd,c];var y=d(_,2);y.__click=c;var P=u(y);Co(P,{size:16});var w=d(m,2),S=d(u(w),2);Kr(S,{get items(){return o(a)},onToggleItem:l,showIcon:!0});var k=d(p,2),A=u(k);A.__click=[bd,r,n],G(C=>{b.disabled=r().loading,y.disabled=C,A.disabled=r().loading},[()=>r().loading||!o(n).trim()]),Me(b,()=>o(n),C=>E(n,C)),h(e,f),V()}Je(["keydown","click"]);var Pd=$('<div class="mb-1 text-xs opacity-70"> </div>'),xd=(e,t,r)=>t(o(r)),$d=$("<button><!> </button>"),Ed=$('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function Do(e,t){z(t,!0);let r=Ae(t,"maxSuggestions",3,8),n=Ae(t,"title",3,"Suggestions :"),a=Ae(t,"buttonSize",3,"btn-xs"),s=Ae(t,"buttonVariant",3,"btn-soft"),i=Ae(t,"disabled",3,!1);const l=Y(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var f=L(),v=R(f);{var g=p=>{var m=Ed(),_=u(m);{var x=y=>{var P=Pd(),w=u(P);G(()=>U(w,n())),h(y,P)};M(_,y=>{n()&&y(x)})}var b=d(_,2);lt(b,21,()=>o(l),y=>y.id,(y,P)=>{var w=$d();w.__click=[xd,c,P];var S=u(w);{var k=C=>{var O=L(),X=R(O);er(X,()=>o(P).icon,(j,W)=>{W(j,{class:"h-3 w-3"})}),h(C,O)};M(S,C=>{o(P).icon&&C(k)})}var A=d(S);G(()=>{Ee(w,1,`btn ${a()??""} ${s()??""}`),w.disabled=i()||o(P).disabled,Wt(w,"title",o(P).disabled?"Déjà sélectionné":o(P).label),U(A,` ${o(P).label??""}`)}),h(y,w)}),h(p,m)};M(v,p=>{o(l).length>0&&p(g)})}h(e,f),V()}Je(["click"]);var kd=(e,t)=>{e.key==="Enter"&&t()},Ad=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},Td=$(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function Nd(e,t){z(t,!0);let r=Ae(t,"modalState",7);const n=Y(()=>r()?.hasChanges?.store||!1);async function a(){if(!o(n))return;const P={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(P)}var s=Td(),i=u(s),l=u(i),c=d(u(l),4),f=u(c),v=u(f),g=u(v);Qt(g,{class:"h-4 w-4 opacity-50"});var p=d(g,2);p.__keydown=[kd,a];var m=d(v,2);{var _=P=>{{let w=Y(()=>Z.uniqueStores.map(S=>({id:S,label:S,disabled:S===r().forms.store.name})));Do(P,{get suggestions(){return o(w)},onSuggestionClick:S=>{r().forms.store.name=S.label},buttonVariant:"btn-outline"})}};M(m,P=>{Z.uniqueStores.length>0&&P(_)})}var x=d(f,2),b=d(c,2),y=u(b);y.__click=[Ad,r],G(()=>y.disabled=r().loading),Me(p,()=>r().forms.store.name,P=>r().forms.store.name=P),Me(x,()=>r().forms.store.comment,P=>r().forms.store.comment=P),h(e,s),V()}Je(["keydown","click"]);async function Md(e,t,r,n,a,s){if(!t.modalState)return;const i={totalOverride:{q:o(r),u:o(n)},comment:o(a)};await t.modalState.setOverride(i),E(s,!1)}async function Cd(e,t,r){t.modalState&&(await t.modalState.removeOverride(),E(r,!1))}var Id=$('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),Dd=$('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),Rd=$(" <!>",1),Od=(e,t)=>E(t,!0),qd=$('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),jd=$('<div class="text-error text-sm">Limite de caractères atteinte</div>'),Bd=$('<span class="loading loading-spinner loading-sm"></span>'),Ld=$('<span class="loading loading-spinner loading-sm"></span>'),zd=$(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),Vd=$('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function Ud(e,t){z(t,!0);const r=Y(()=>t.modalState.product?.totalNeededOverrideParsed),n=Y(()=>t.modalState.product?.displayTotalNeeded||[]);let a=H(!1),s=H(Ne(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=H(Ne(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=H(Ne(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),c=Y(()=>o(s)>0&&o(i).trim()!=="");var f=Vd(),v=u(f),g=u(v),p=u(g);{var m=x=>{var b=qd(),y=R(b),P=u(y),w=d(u(P),2);{var S=j=>{var W=Id();h(j,W)};M(w,j=>{o(r)&&j(S)})}var k=d(w,2),A=u(k);{var C=j=>{var W=Rd(),te=R(W),ee=d(te);{var D=I=>{var J=Dd(),re=u(J);ga(re,{});var N=d(re);G(()=>U(N,` ${o(r).comment??""}`)),h(I,J)};M(ee,I=>{o(r).comment&&I(D)})}G(I=>U(te,`${I??""} `),[()=>kn(o(r).totalOverride.q,o(r).totalOverride.u)]),h(j,W)},O=j=>{var W=gt();G(()=>U(W,o(n))),h(j,W)};M(A,j=>{o(r)?j(C):j(O,!1)})}var X=d(y,2);X.__click=[Od,a],h(x,b)},_=x=>{var b=zd(),y=R(b),P=u(y),w=u(P);lu(w,{class:"h-4 w-4 opacity-50"});var S=d(w,2),k=d(P,2),A=u(k);A.value=A.__value="";var C=d(A);C.value=C.__value="kg";var O=d(C);O.value=O.__value="gr.";var X=d(O);X.value=X.__value="l.";var j=d(X);j.value=j.__value="ml";var W=d(j);W.value=W.__value="unité";var te=d(W);te.value=te.__value="bottes";var ee=d(y,2),D=u(ee),I=d(u(D),2),J=d(I,2);{var re=q=>{var ie=jd();h(q,ie)};M(J,q=>{o(l).length>=250&&q(re)})}var N=d(ee,2),Q=u(N);Q.__click=[Cd,t,a];var oe=u(Q);{var se=q=>{var ie=Bd();h(q,ie)},he=q=>{var ie=gt();G(()=>U(ie,`Réinitialiser le total calculé (${o(n)??""}).`)),h(q,ie)};M(oe,q=>{t.modalState.loading?q(se):q(he,!1)})}var be=d(Q,2);be.__click=[Md,t,s,i,l,a];var xe=u(be);{var B=q=>{var ie=Ld();h(q,ie)},ge=q=>{var ie=gt("Appliquer");h(q,ie)};M(xe,q=>{t.modalState.loading?q(B):q(ge,!1)})}G(()=>{Q.disabled=t.modalState.loading,be.disabled=t.modalState.loading||!o(c)}),Me(S,()=>o(s),q=>E(s,q)),Yt(k,()=>o(i),q=>E(i,q)),Me(I,()=>o(l),q=>E(l,q)),h(x,b)};M(p,x=>{o(a)?x(_,!1):x(m)})}G(()=>Ee(v,1,`card border-base-300 border ${o(a)?"bg-base-200":"bg-base-100"}`)),h(e,f),V()}Je(["click"]);var Wd=$('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Gd=$('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Qd=$('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Hd=$('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Kd(e,t){z(t,!0);const r=Y(()=>t.modalState.recipes);var n=Hd(),a=R(n);Ud(a,{get modalState(){return t.modalState}});var s=d(a,2),i=u(s),l=u(i);ma(l,{class:"h-5 w-5"});var c=d(i,2);{var f=g=>{var p=Wd(),m=u(p);Yr(m,{class:"mx-auto mb-2 h-12 w-12"}),h(g,p)},v=g=>{var p=Qd(),m=u(p),_=d(u(m));lt(_,21,()=>o(r),x=>x.r,(x,b)=>{var y=Gd(),P=u(y),w=u(P),S=d(P),k=u(S),A=d(S),C=u(A);G(O=>{U(w,`${o(b).r??""} (${(o(b).a||"-")??""} c.)`),U(k,`${(o(b).q||o(b).qEq)??""} ${(o(b).u||o(b).uEq)??""}`),U(C,O)},[()=>An(o(b).date)]),h(x,y)}),h(g,p)};M(c,g=>{o(r).length===0?g(f):g(v,!1)})}h(e,n),V()}function Jd(e,t,r){o(t).saveAllChanges().then(()=>{r.onClose()})}var Yd=$('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Zd=$('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Xd=(e,t)=>t("recettes"),Fd=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),ef=$('<span class="badge badge-sm badge-ghost ml-1">0</span>'),tf=(e,t)=>t("magasins"),rf=$('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),nf=(e,t)=>t("volontaires"),af=$('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),sf=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),of=$('<span class="badge badge-sm badge-ghost ml-1">0</span>'),lf=(e,t)=>t("stock"),cf=$('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),uf=$('<span class="badge badge-sm badge-secondary ml-1">1</span>'),df=$('<span class="badge badge-sm badge-ghost ml-1">0</span>'),ff=(e,t)=>t("achats"),vf=$('<span class="badge badge-sm badge-secondary ml-1"> </span>'),hf=$('<span class="badge badge-sm badge-ghost ml-1">0</span>'),pf=$('<div class="alert alert-error mb-4"><!> <span> </span></div>'),mf=$('<span class="loading loading-spinner loading-sm"></span>'),gf=$('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),_f=$('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function bf(e,t){z(t,!0);let r=Ae(t,"initialTab",3,"recettes"),n=Y(()=>Ku(t.productId)),a=H(Ne(r()));function s(b){E(a,b,!0)}var i=_f(),l=u(i),c=u(l),f=u(c);{var v=b=>{var y=Yd(),P=R(y),w=u(P),S=d(P,2),k=u(S),A=u(k),C=d(k,2),O=d(u(C));G(()=>{U(w,o(n).product?.productName),U(A,o(n).product?.productType),U(O,` ${o(n).product?.displayTotalNeeded??""}`)}),h(b,y)},g=b=>{var y=Zd();h(b,y)};M(f,b=>{o(n)&&o(n).product?b(v):b(g,!1)})}var p=d(f,2);p.__click=function(...b){t.onClose?.apply(this,b)};var m=u(p);wt(m,{class:"h-4 w-4"});var _=d(c,2);{var x=b=>{var y=gf(),P=R(y),w=u(P);w.__click=[Xd,s];var S=u(w);ma(S,{class:"mr-1 h-5 w-5"});var k=d(S,2);{var A=ae=>{var _e=Fd(),Ge=u(_e);G(()=>U(Ge,o(n).product?.nbRecipes)),h(ae,_e)},C=ae=>{var _e=ef();h(ae,_e)};M(k,ae=>{o(n).product?.nbRecipes&&o(n).product?.nbRecipes>0?ae(A):ae(C,!1)})}var O=d(w,2);O.__click=[tf,s];var X=u(O);Qt(X,{class:"mr-1 h-5 w-5"});var j=d(X,2);{var W=ae=>{var _e=rf();h(ae,_e)};M(j,ae=>{o(n).hasChanges?.store&&ae(W)})}var te=d(O,2);te.__click=[nf,s];var ee=u(te);Fn(ee,{class:"mr-1 h-5 w-5"});var D=d(ee,2);{var I=ae=>{var _e=af();h(ae,_e)},J=ae=>{var _e=L(),Ge=R(_e);{var me=Ce=>{var Xe=sf(),Tt=u(Xe);G(()=>U(Tt,o(n).product?.who.length)),h(Ce,Xe)},ot=Ce=>{var Xe=of();h(Ce,Xe)};M(Ge,Ce=>{o(n).product?.who&&o(n).product?.who.length>0?Ce(me):Ce(ot,!1)},!0)}h(ae,_e)};M(D,ae=>{o(n).hasChanges?.who?ae(I):ae(J,!1)})}var re=d(te,2);re.__click=[lf,s];var N=u(re);Zn(N,{class:"mr-1 h-5 w-5"});var Q=d(N,2);{var oe=ae=>{var _e=cf();h(ae,_e)},se=ae=>{var _e=L(),Ge=R(_e);{var me=Ce=>{var Xe=uf();h(Ce,Xe)},ot=Ce=>{var Xe=df();h(Ce,Xe)};M(Ge,Ce=>{o(n).stockParsed?Ce(me):Ce(ot,!1)},!0)}h(ae,_e)};M(Q,ae=>{o(n).hasChanges?.stock?ae(oe):ae(se,!1)})}var he=d(re,2);he.__click=[ff,s];var be=u(he);Vt(be,{class:"mr-1 h-5 w-5"});var xe=d(be,2);{var B=ae=>{var _e=vf(),Ge=u(_e);G(()=>U(Ge,o(n).purchasesList.length)),h(ae,_e)},ge=ae=>{var _e=hf();h(ae,_e)};M(xe,ae=>{o(n).purchasesList.length>0?ae(B):ae(ge,!1)})}var q=d(P,2),ie=u(q);{var ke=ae=>{var _e=pf(),Ge=u(_e);wt(Ge,{class:"h-4 w-4"});var me=d(Ge,2),ot=u(me);G(()=>U(ot,`erreur : ${o(n).error??""}`)),h(ae,_e)};M(ie,ae=>{o(n).error&&ae(ke)})}var De=d(ie,2),We=u(De);il(We,()=>o(a),ae=>{var _e=L(),Ge=R(_e);{var me=Ce=>{Kd(Ce,{get modalState(){return o(n)}})},ot=Ce=>{var Xe=L(),Tt=R(Xe);{var le=Se=>{cd(Se,{get modalState(){return o(n)}})},we=Se=>{var Le=L(),Qe=R(Le);{var ft=Fe=>{_d(Fe,{get modalState(){return o(n)}})},_t=Fe=>{var vt=L(),K=R(vt);{var ve=je=>{Sd(je,{get modalState(){return o(n)}})},Te=je=>{var Ze=L(),ze=R(Ze);{var He=Re=>{Nd(Re,{get modalState(){return o(n)}})};M(ze,Re=>{o(a)==="magasins"&&Re(He)},!0)}h(je,Ze)};M(K,je=>{o(a)==="volontaires"?je(ve):je(Te,!1)},!0)}h(Fe,vt)};M(Qe,Fe=>{o(a)==="stock"?Fe(ft):Fe(_t,!1)},!0)}h(Se,Le)};M(Tt,Se=>{o(a)==="achats"?Se(le):Se(we,!1)},!0)}h(Ce,Xe)};M(Ge,Ce=>{o(a)==="recettes"?Ce(me):Ce(ot,!1)})}h(ae,_e)});var Be=d(q,2),Ye=u(Be);Ye.__click=function(...ae){t.onClose?.apply(this,ae)};var pe=u(Ye),ye=d(Ye,2);ye.__click=[Jd,n,t];var st=u(ye);{var ue=ae=>{var _e=mf();h(ae,_e)},Ve=ae=>{var _e=gt("Tout enregistrer");h(ae,_e)};M(st,ae=>{o(n).loading?ae(ue):ae(Ve,!1)})}G(()=>{Ee(w,1,`tab ${o(a)==="recettes"?"tab-active":""}`),Ee(O,1,`tab ${o(a)==="magasins"?"tab-active":""}`),Ee(te,1,`tab ${o(a)==="volontaires"?"tab-active":""}`),Ee(re,1,`tab ${o(a)==="stock"?"tab-active":""}`),Ee(he,1,`tab ${o(a)==="achats"?"tab-active":""}`),U(pe,o(n)?.hasAnyChanges?"Annuler":"Fermer"),ye.disabled=o(n).loading||!o(n).hasAnyChanges}),h(b,y)};M(_,b=>{o(n)&&b(x)})}h(e,i),V()}Je(["click"]);var yf=(e,t,r)=>t(r),wf=$("<button><span> </span> <!></button>"),Sf=(e,t)=>t(),Pf=$('<div class="flex justify-end"><button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button></div>'),xf=$('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),$f=$('<div class=" flex flex-wrap gap-1"></div> <!>',1);function Ef(e,t){z(t,!0);let r=Ae(t,"availableDates",19,()=>[]),n=Ae(t,"currentRange",19,()=>({start:null,end:null})),a=H(Ne(n().start)),s=H(Ne(n().end));const i=Y(()=>r().length>0&&o(a)===r()[0]&&o(s)===r()[r().length-1]);lr(()=>{E(a,n().start,!0),E(s,n().end,!0)});function l(y){o(a)===y&&o(s)===y?g():new Date(y)<new Date(o(a))?E(a,y,!0):(new Date(y)>new Date(o(s))||E(a,y,!0),E(s,y,!0)),t.onRangeChange(o(a),o(s))}function c(y){return new Date(y)>=new Date(o(a))&&new Date(y)<=new Date(o(s))?"btn-soft btn-secondary":"btn-dash btn-secondary opacity-80"}function f(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function v(y){const w=new Date(y).getUTCHours();return w===12?"sun":w===20?"moon":w===8?"cloud":null}function g(){r().length!==0&&(E(a,r()[0],!0),E(s,r()[r().length-1],!0),t.onRangeChange(o(a),o(s)))}var p=$f(),m=R(p);lt(m,22,r,y=>y,(y,P)=>{var w=wf();w.__click=[yf,l,P];var S=u(w),k=u(S),A=d(S,2);{var C=X=>{pu(X,{size:16})},O=X=>{var j=L(),W=R(j);{var te=D=>{ou(D,{size:16})},ee=D=>{var I=L(),J=R(I);{var re=N=>{Kc(N,{size:16})};M(J,N=>{v(P)==="cloud"&&N(re)},!0)}h(D,I)};M(W,D=>{v(P)==="moon"?D(te):D(ee,!1)},!0)}h(X,j)};M(A,X=>{v(P)==="sun"?X(C):X(O,!1)})}G((X,j)=>{Ee(w,1,`btn btn-sm ${X??""}`),U(k,j)},[()=>c(P),()=>f(P)]),h(y,w)});var _=d(m,2);{var x=y=>{var P=Pf(),w=u(P);w.__click=[Sf,g],h(y,P)},b=y=>{var P=xf();h(y,P)};M(_,y=>{o(i)?y(b,!1):y(x)})}h(e,p),V()}Je(["click"]);var kf=$("<fieldset><legend><!> </legend> <!></fieldset>");function sn(e,t){let r=Ae(t,"bgClass",3,"bg-base-100");var n=kf(),a=u(n),s=u(a);{var i=f=>{const v=Y(()=>t.iconComponent);var g=L(),p=R(g);er(p,()=>o(v),(m,_)=>{_(m,{size:16,class:"mr-1"})}),h(f,g)};M(s,f=>{t.iconComponent&&f(i)})}var l=d(s),c=d(a,2);ne(c,()=>t.children??F),G(()=>{Ee(n,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Ee(a,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),U(l,` ${t.legend??""}`)}),h(e,n)}var Af=()=>Z.clearFilters(),Tf=e=>Z.setSearchQuery(e.currentTarget.value),Nf=()=>Z.setGroupBy("none"),Mf=()=>Z.setGroupBy("store"),Cf=()=>Z.setGroupBy("productType"),If=()=>Z.clearTypeAndTemperatureFilters(),Df=$('<button class="btn btn-xs btn-link text-accent flex items-center text-end" title="Effacer les filtres de types et température"><!> Réinitialiser les filtres</button>'),Rf=(e,t)=>Z.toggleProductType(t),Of=$("<button><!> </button>"),qf=()=>Z.toggleTemperature("frais"),jf=()=>Z.toggleTemperature("surgele"),Bf=$('<!> <div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div>',1),Lf=(e,t)=>Z.toggleStore(t),zf=$("<button> </button>"),Vf=()=>Z.clearStoreFilters(),Uf=$('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Wf=$('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Gf=(e,t)=>Z.toggleWho(t),Qf=$("<button> </button>"),Hf=()=>Z.clearWhoFilters(),Kf=$('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Jf=$('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),Yf=$('<div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function Zf(e,t){z(t,!0);const r=Y(()=>Z.filters),n=Y(()=>Z.uniqueStores),a=Y(()=>Z.uniqueWho),s=Y(()=>Z.uniqueProductTypes);var i=Yf(),l=R(i),c=u(l),f=u(c);To(f,{class:"h-5 w-5"});var v=d(c,2);v.__click=[Af];var g=u(v);wt(g,{class:"h-4 w-4"});var p=d(l,2),m=u(p),_=d(u(m),2),x=u(_);hu(x,{class:"h-4 w-4"});var b=d(x,2);b.__input=[Tf];var y=d(m,2),P=d(u(y),2),w=u(P);w.__change=[Nf];var S=d(w,2);S.__change=[Mf];var k=d(S,2);k.__change=[Cf];var A=d(y,2);sn(A,{legend:"Date incluses",bgClass:"bg-base-100",children:(ee,D)=>{Ef(ee,{get availableDates(){return Z.availableDates},get currentRange(){return Z.dateRange},onRangeChange:(I,J)=>Z.setDateRange(I,J)})},$$slots:{default:!0}});var C=d(A,2);{var O=ee=>{sn(ee,{legend:"Types & Température",get iconComponent(){return mu},children:(D,I)=>{var J=Bf(),re=R(J);{var N=B=>{var ge=Df();ge.__click=[If];var q=u(ge);Zc(q,{size:14}),h(B,ge)};M(re,B=>{(o(r).selectedProductTypes.length>0||o(r).selectedTemperatures.length>0)&&B(N)})}var Q=d(re,2);lt(Q,20,()=>o(s),B=>B,(B,ge)=>{const q=Y(()=>ea(ge));var ie=Of();ie.__click=[Rf,ge];var ke=u(ie);er(ke,()=>o(q).icon,(We,Be)=>{Be(We,{class:"mr-1 h-5 w-5"})});var De=d(ke);G(We=>{Ee(ie,1,`btn btn-sm ${We??""}`),U(De,` ${o(q).displayName??""}`)},[()=>o(r).selectedProductTypes.length===0?"btn-soft btn-secondary":o(r).selectedProductTypes.includes(ge)?"btn-secondary":"btn-dash btn-secondary"]),h(B,ie)});var oe=d(Q,2),se=u(oe);se.__click=[qf];var he=u(se);No(he,{class:"h-5 w-5"});var be=d(se,2);be.__click=[jf];var xe=u(be);Mo(xe,{class:"h-5 w-5"}),G((B,ge)=>{Ee(se,1,`btn btn-sm ${B??""}`),Ee(be,1,`btn btn-sm ${ge??""}`)},[()=>o(r).selectedTemperatures.length===0?"btn-soft btn-success":o(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>o(r).selectedTemperatures.length===0?"btn-soft btn-info":o(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(D,J)},$$slots:{default:!0}})};M(C,ee=>{o(s).length>0&&ee(O)})}var X=d(C,2);{var j=ee=>{sn(ee,{legend:"Magasins",get iconComponent(){return Qt},children:(D,I)=>{var J=Wf(),re=u(J);lt(re,16,()=>o(n),oe=>oe,(oe,se)=>{var he=zf();he.__click=[Lf,se];var be=u(he);G(xe=>{Ee(he,1,`btn btn-xs ${xe??""}`),U(be,se)},[()=>o(r).selectedStores.length===0?"btn-soft btn-secondary":o(r).selectedStores.includes(se)?"btn-secondary":"btn-dash btn-secondary"]),h(oe,he)});var N=d(re,2);{var Q=oe=>{var se=Uf();se.__click=[Vf];var he=u(se);wt(he,{class:"h-3 w-3"}),h(oe,se)};M(N,oe=>{o(r).selectedStores.length>0&&oe(Q)})}h(D,J)},$$slots:{default:!0}})};M(X,ee=>{o(n).length>0&&ee(j)})}var W=d(X,2);{var te=ee=>{sn(ee,{legend:"Qui",get iconComponent(){return Zr},children:(D,I)=>{var J=Jf(),re=u(J);lt(re,16,()=>o(a),oe=>oe,(oe,se)=>{var he=Qf();he.__click=[Gf,se];var be=u(he);G(xe=>{Ee(he,1,`btn btn-xs ${xe??""}`),U(be,se)},[()=>o(r).selectedWho.length===0?" btn-soft btn-secondary":o(r).selectedWho.includes(se)?" btn-secondary":"btn-dash btn-secondary"]),h(oe,he)});var N=d(re,2);{var Q=oe=>{var se=Kf();se.__click=[Hf];var he=u(se);wt(he,{class:"h-3 w-3"}),h(oe,se)};M(N,oe=>{o(r).selectedWho.length>0&&oe(Q)})}h(D,J)},$$slots:{default:!0}})};M(W,ee=>{o(a).length>0&&ee(te)})}G(()=>{ml(b,o(r).searchQuery),Rn(w,o(r).groupBy==="none"),Rn(S,o(r).groupBy==="store"),Rn(k,o(r).groupBy==="productType")}),h(e,i),V()}Je(["click","input","change"]);Je(["click"]);var Xf=$('<div class="tooltip text-xs font-normal"><!></div>');function Ff(e,t){let r=Ae(t,"iconSize",3,24),n=t.icon||void 0;var a=Xf(),s=u(a);{var i=l=>{n(l,{get size(){return r()},class:`align-top
`})};M(s,l=>{t.icon&&l(i)})}G(()=>Wt(a,"data-tip",t.tip)),h(e,a)}var ev=$('<div class="text-neutral-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),tv=(e,t,r)=>t.onOpenGroupEditModal("store",r().map(n=>n.$id),r()),rv=(e,t,r)=>t.onOpenGroupEditModal("who",r().map(n=>n.$id),r()),nv=(e,t,r)=>t.onOpenGroupPurchaseModal(r()),av=$(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),sv=$('<div class="bg-primary @container sticky top-0 z-10 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 @md:min-w-48"><!></div> <div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div></div>'),ov=(e,t,r)=>t.onOpenModal(o(r).$id,"recettes"),iv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"recettes"),lv=$('<div class="text-base-content/60 text-sm font-normal"> </div>'),cv=$('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),uv=$('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),dv=$('<div class="flex items-center gap-1 text-blue-600" title="Synchronisation en cours..."><!></div>'),fv=(e,t,r)=>t.onOpenModal(o(r).$id,"magasins"),vv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"magasins"),hv=$('<div class="ml-1"><!></div>'),pv=$('<div class="ml-1"> </div> <!>',1),mv=$('<div class="ml-1 text-sm font-medium">?</div>'),gv=(e,t,r)=>t.onOpenModal(o(r).$id,"volontaires"),_v=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"volontaires"),bv=$('<span class="text-base-content/50 text-xs"> </span>'),yv=$('<div class="ml-1 flex gap-1"> <!></div>'),wv=$('<div class="ml-1 text-sm font-medium">?</div>'),Sv=(e,t,r)=>t.onOpenModal(o(r).$id,"recettes"),Pv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"recettes"),xv=$('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),$v=(e,t,r)=>{e.stopPropagation(),t.onQuickValidation(o(r))},Ev=$('<button class="btn btn-sm btn-soft btn-warning hover:bg-success/70 hover:border-success/70 ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M.625 0a.625.625 0 1 0 0 1.25h1.818l.205 1.94l.644 6.105a1.626 1.626 0 0 0 1.619 1.455h6.208c.746 0 1.397-.506 1.579-1.23l1.253-5a1.626 1.626 0 0 0-1.579-2.02h-8.54L3.627.56A.625.625 0 0 0 3.006 0zm3.91 9.164L3.964 3.75h8.408c.247 0 .425.23.366.466l-1.253 5a.38.38 0 0 1-.366.284H4.911a.376.376 0 0 1-.376-.336m5.72-3.134a.75.75 0 0 0-1.129-.988l-1.48 1.69l-.526-.395a.75.75 0 1 0-.9 1.2l1.083.813a.75.75 0 0 0 1.015-.106zm1.816 6.845a1.125 1.125 0 1 0-2.25 0a1.125 1.125 0 0 0 2.25 0M4.446 11.75a1.125 1.125 0 1 1 0 2.25a1.125 1.125 0 0 1 0-2.25" clip-rule="evenodd"></path></svg> <span class="text-xs"> </span> <!></button>'),kv=(e,t,r)=>t.onOpenModal(o(r).$id,"achats"),Av=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(o(r).$id,"achats"),Tv=$('<div><!> <span class="text-sm font-medium"> </span></div>'),Nv=$('<span class="text-base-content/50 text-xs italic">aucun</span>'),Mv=$('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!></div> <div class="flex gap-1"><!> <!></div> <!></div> <div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div></div> <div class="flex flex-wrap gap-3"><div class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex gap-4"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins:</div> <div class="flex items-center gap-4"><div> </div> <!></div></div> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative min-w-[200px] flex-1 cursor-pointer rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex items-center justify-between gap-2"><div class="flex flex-col gap-0"><div class="text-base-content/80 flex items-center justify-between gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div class="text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity group-hover:opacity-100 sm:opacity-0">ajouter un achat</div></div> <div class="flex flex-wrap gap-1.5"><!> <!></div></div></div></div></div></div>'),Cv=$('<!> <div class="space-y-1"></div>',1),Iv=$('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Dv=$('<div class="space-y-4 rounded-lg"></div> <!>',1);function Rv(e,t){z(t,!0);const r={Package:Yr,MessageCircleQuestionMark:su,ShoppingCart:Vt,Clock:Hc,CircleCheck:Wc,CircleX:Gc,ClipboardCheck:Qc,PackageCheck:iu},n=Y(()=>Z.groupedFilteredProducts),a=Y(()=>Z.filters);var s=Dv(),i=R(s);lt(i,21,()=>Object.entries(o(n)),([f,v])=>f,(f,v)=>{var g=Y(()=>os(o(v),2));let p=()=>o(g)[0],m=()=>o(g)[1];var _=Cv(),x=R(_);{var b=P=>{const w=Y(()=>ea(p()));var S=sv(),k=u(S),A=u(k);{var C=N=>{var Q=gt();G(()=>U(Q,`🏪 ${p()??""} (${m().length??""})`)),h(N,Q)},O=N=>{var Q=L(),oe=R(Q);{var se=be=>{var xe=ev(),B=u(xe);er(B,()=>o(w).icon,(De,We)=>{We(De,{class:"h-4 w-4"})});var ge=d(B,2),q=u(ge),ie=d(ge,2),ke=u(ie);G(()=>{U(q,o(w).displayName),U(ke,`(${m().length??""})`)}),h(be,xe)},he=be=>{var xe=gt();G(()=>U(xe,`📦 ${p()??""} (${m().length??""})`)),h(be,xe)};M(oe,be=>{o(a).groupBy==="productType"?be(se):be(he,!1)},!0)}h(N,Q)};M(A,N=>{o(a).groupBy==="store"?N(C):N(O,!1)})}var X=d(k,2),j=u(X);j.__click=[tv,t,m];var W=u(j);Qt(W,{size:16});var te=d(W,4);Xn(te,{size:16});var ee=d(j,2);ee.__click=[rv,t,m];var D=u(ee);Fn(D,{size:16});var I=d(D,4);Xn(I,{size:16});var J=d(ee,2);{var re=N=>{var Q=av();Q.__click=[nv,t,m];var oe=u(Q);Vt(oe,{size:16});var se=d(oe,4);Za(se,{size:16}),h(N,Q)};M(J,N=>{m().some(Q=>Q.displayMissingQuantity!=="✅ Complet")&&N(re)})}h(P,S)};M(x,P=>{p()!==""&&P(b)})}var y=d(x,2);lt(y,21,()=>m()||[],P=>P.$id,(P,w)=>{const S=Y(()=>Z.productsStatsByDateRange.get(o(w).$id)||{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedAvailableQuantities:"Équilibré",hasAvailable:!1,hasMissing:!1}),k=Y(()=>ea(o(w).productType)),A=Y(()=>Qu(o(w).purchases||[]));var C=Mv(),O=u(C),X=u(O),j=u(X);j.__click=[ov,t,w],j.__keydown=[iv,t,w];var W=u(j),te=u(W);er(te,()=>o(k).icon,(K,ve)=>{ve(K,{class:"text-base-content/80 h-4 w-4"})});var ee=d(te),D=d(ee);{var I=K=>{var ve=lv(),Te=u(ve);G(()=>U(Te,`Ancien: ${o(w).previousNames[0]??""}`)),h(K,ve)};M(D,K=>{o(w).previousNames&&o(w).previousNames.length>0&&K(I)})}var J=d(W,2),re=u(J);{var N=K=>{var ve=cv(),Te=u(ve);No(Te,{class:"text-success h-4 w-4"}),h(K,ve)};M(re,K=>{o(w).pFrais&&K(N)})}var Q=d(re,2);{var oe=K=>{var ve=uv(),Te=u(ve);Mo(Te,{class:"text-info h-4 w-4"}),h(K,ve)};M(Q,K=>{o(w).pSurgel&&K(oe)})}var se=d(J,2);{var he=K=>{var ve=dv(),Te=u(ve);ru(Te,{class:"h-4 w-4 animate-spin"}),h(K,ve)};M(se,K=>{o(w).status==="isSyncing"&&K(he)})}var be=d(j,2),xe=u(be);xe.__click=[fv,t,w],xe.__keydown=[vv,t,w];var B=u(xe);Qt(B,{size:18});var ge=d(B,2);{var q=K=>{var ve=pv(),Te=R(ve),je=u(Te),Ze=d(Te,2);{var ze=He=>{var Re=hv(),qt=u(Re);Ff(qt,{get tip(){return o(w).storeInfo.storeComment},get icon(){return au},iconSize:14}),h(He,Re)};M(Ze,He=>{o(w).storeInfo?.storeComment&&He(ze)})}G(()=>U(je,o(w).storeInfo.storeName)),h(K,ve)},ie=K=>{var ve=mv();h(K,ve)};M(ge,K=>{o(w).storeInfo?.storeName?K(q):K(ie,!1)})}var ke=d(xe,2);ke.__click=[gv,t,w],ke.__keydown=[_v,t,w];var De=u(ke);Fn(De,{size:18});var We=d(De,2);{var Be=K=>{var ve=yv(),Te=u(ve),je=d(Te);{var Ze=ze=>{var He=bv(),Re=u(He);G(()=>U(Re,`+${o(w).who.length-2}`)),h(ze,He)};M(je,ze=>{o(w).who.length>2&&ze(Ze)})}G(ze=>U(Te,`${ze??""} `),[()=>o(w).who.slice(0,2).map(ze=>ze.slice(0,3)).join(" | ")]),h(K,ve)},Ye=K=>{var ve=wv();h(K,ve)};M(We,K=>{o(w).who&&o(w).who.length>0?K(Be):K(Ye,!1)})}var pe=d(X,2),ye=u(pe);ye.__click=[Sv,t,w],ye.__keydown=[Pv,t,w];var st=u(ye),ue=u(st),Ve=u(ue);tu(Ve,{class:"h-4 w-4"});var ae=d(ue,2),_e=u(ae),Ge=u(_e),me=d(_e,2);{var ot=K=>{var ve=xv(),Te=u(ve),je=u(Te),Ze=d(je);ma(Ze,{class:"h-3 w-3"});var ze=d(Te,2),He=u(ze),Re=d(He);gu(Re,{class:"h-3 w-3"}),G(()=>{U(je,`${o(S).nbRecipes??""} `),U(He,`${o(S).totalAssiettes??""} `)}),h(K,ve)};M(me,K=>{(o(S).nbRecipes||o(S).totalAssiettes)&&K(ot)})}var Ce=d(st,2);{var Xe=K=>{var ve=Ev();ve.__click=[$v,t,w];var Te=d(u(ve),2),je=u(Te),Ze=d(Te,2);{var ze=Re=>{Vc(Re,{size:18})},He=Re=>{Uc(Re,{size:18})};M(Ze,Re=>{Hr.isMobile?Re(ze):Re(He,!1)})}G(()=>{Wt(ve,"title",`Acheter le manquant (${o(S).formattedAvailableQuantities??""})`),U(je,o(S).formattedAvailableQuantities)}),h(K,ve)},Tt=K=>{Za(K,{size:24,class:"text-success"})};M(Ce,K=>{o(S).hasMissing?K(Xe):K(Tt,!1)})}var le=d(ye,2);le.__click=[kv,t,w],le.__keydown=[Av,t,w];var we=u(le),Se=u(we),Le=u(Se),Qe=u(Le);Vt(Qe,{class:"h-4 w-4"});var ft=d(Se,2),_t=u(ft);lt(_t,17,()=>o(A),K=>K.status,(K,ve)=>{const Te=Y(()=>r[o(ve).icon]);var je=Tv(),Ze=u(je);er(Ze,()=>o(Te),(Re,qt)=>{qt(Re,{class:"h-4 w-4"})});var ze=d(Ze,2),He=u(ze);G(Re=>{Ee(je,1,`badge badge-outline flex items-center gap-1 ${o(ve).badgeClass??""}`),U(He,Re)},[()=>kn(o(ve).quantity,o(ve).unit)]),h(K,je)});var Fe=d(_t,2);{var vt=K=>{var ve=Nv();h(K,ve)};M(Fe,K=>{o(A).length===0&&K(vt)})}G(()=>{Ee(C,1,`card bg-base-100 border-base-300 ${o(w).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),U(ee,`${o(w).productName??""} `),Ee(xe,1,`btn btn-soft btn-sm group relative ${o(w).storeInfo?.storeName?"btn-success":""}`),Ee(ke,1,`btn btn-sm btn-soft group relative ${o(w).who?.length>0?"btn-success":""}`),Ee(_e,1,`font-bold ${o(S).hasMissing?"text-error":"text-success"}`),U(Ge,o(S).formattedQuantities)}),h(P,C)}),h(f,_)});var l=d(i,2);{var c=f=>{var v=Iv();h(f,v)};M(l,f=>{Object.values(o(n)).flat().length===0&&f(c)})}h(e,s),V()}Je(["click","keydown"]);async function Ov(e,t,r,n,a,s,i,l,c){if(!(!o(t)||o(r))){E(n,null),E(a,null);try{const f=o(s).map(m=>m.id),v=i.products.filter(m=>f.includes(m.$id));Z.setSyncStatus(f,!0),i.onClose();const g={storeName:o(l).trim(),storeComment:o(c).trim()},p=await Eo(f,v,g);if(E(a,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(f){const v=f instanceof Error?f.message:"Erreur inconnue";E(n,v,!0),console.error("[StoreEditModal] Erreur mise à jour:",f),Z.clearSyncStatus()}finally{E(r,!1)}}}function ts(e,t,r){o(t)||r.onClose()}var qv=$('<div class="alert alert-error mb-4"><!> <span> </span></div>'),jv=(e,t)=>E(t,"empty"),Bv=(e,t)=>E(t,"all"),Lv=$('<span class="loading loading-spinner loading-sm"></span> En cours...',1),zv=$("<!> ",1),Vv=$('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Uv(e,t){z(t,!0);let r=H(!1),n=H(null),a=H(null),s=H(Ne(t.products.length>0&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"")),i=H(Ne(t.products.length>0&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"")),l=H(Ne({})),c=H("empty");lr(()=>{const q={};t.products.forEach(ie=>{t.productIds.includes(ie.$id)&&(o(c)==="empty"?q[ie.$id]=!ie.storeInfo||!ie.storeInfo.storeName:q[ie.$id]=!0)}),E(l,q,!0)});const f=Y(()=>t.products.map(q=>({id:q.$id,label:q.productName,title:q.productName,selected:o(l)[q.$id]}))),v=Y(()=>o(f).filter(q=>q.selected)),g=Y(()=>`Attribuer un magasin (${o(v).length} produits sélectionnés)`),p=Y(()=>o(v).length===0?!1:o(s).trim().length>0);function m(q){o(l)[q]=!o(l)[q]}var _=Vv(),x=u(_),b=u(x),y=u(b),P=u(y),w=d(y,2);w.__click=[ts,r,t];var S=u(w);wt(S,{class:"h-4 w-4"});var k=d(b,2),A=u(k);{var C=q=>{var ie=qv(),ke=u(ie);En(ke,{class:"h-4 w-4"});var De=d(ke,2),We=u(De);G(()=>U(We,o(n))),h(q,ie)};M(A,q=>{o(n)&&q(C)})}var O=d(A,2),X=u(O),j=u(X),W=u(j);Qt(W,{class:"h-4 w-4 opacity-50"});var te=d(W,2),ee=d(j,2);{let q=Y(()=>Z.uniqueStores.map(ie=>({id:ie,label:ie,disabled:ie===o(s)})));Do(ee,{get suggestions(){return o(q)},onSuggestionClick:ie=>{E(s,ie.label,!0)},title:"Suggestions de magasins :"})}var D=d(X,2),I=u(D),J=d(O,2),re=d(u(J),2),N=u(re);N.__click=[jv,c];var Q=d(N,2);Q.__click=[Bv,c];var oe=d(re,2);Kr(oe,{get items(){return o(f)},onToggleItem:m,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var se=d(k,2),he=u(se);he.__click=[ts,r,t];var be=d(he,2);be.__click=[Ov,p,r,n,a,v,t,s,i];var xe=u(be);{var B=q=>{var ie=Lv();h(q,ie)},ge=q=>{var ie=zv(),ke=R(ie);Qr(ke,{class:"h-4 w-4"});var De=d(ke);G(()=>U(De,` Appliquer à ${o(v).length??""} produit(s)`)),h(q,ie)};M(xe,q=>{o(r)?q(B):q(ge,!1)})}G(()=>{U(P,o(g)),w.disabled=o(r),te.disabled=o(r),I.disabled=o(r),Ee(N,1,`tab ${o(c)==="empty"?"tab-active":""}`),Ee(Q,1,`tab ${o(c)==="all"?"tab-active":""}`),he.disabled=o(r),be.disabled=o(r)||!o(p)}),Me(te,()=>o(s),q=>E(s,q)),Me(I,()=>o(i),q=>E(i,q)),h(e,_),V()}Je(["click"]);async function Wv(e,t,r,n,a,s,i,l){if(!(!o(t)||o(r))){E(n,null),E(a,null);try{const c=o(s).map(g=>g.id),f=i.products.filter(g=>c.includes(g.$id));Z.setSyncStatus(c,!0),i.onClose();const v=await ko(c,f,o(l),"replace");if(E(a,v,!0),v.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${v.updatedCount} produits modifiés`),i.onSuccess?.(v);else throw new Error(v.error||"Erreur lors de la mise à jour")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";E(n,f,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),Z.clearSyncStatus()}finally{E(r,!1)}}}function rs(e,t,r){o(t)||r.onClose()}var Gv=$('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Qv=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},Hv=(e,t)=>E(t,"empty"),Kv=(e,t)=>E(t,"all"),Jv=$('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Yv=$("<!> ",1),Zv=$('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Xv(e,t){z(t,!0);let r=H(!1),n=H(null),a=H(null),s=H(Ne([])),i=H(""),l=H("empty"),c=H(Ne({}));lr(()=>{const pe={};t.products.forEach(ye=>{t.productIds.includes(ye.$id)&&(o(l)==="empty"?pe[ye.$id]=!ye.who||ye.who.length===0:pe[ye.$id]=!0)}),E(c,pe,!0)});const f=Y(()=>t.products.map(pe=>({id:pe.$id,label:pe.productName,title:pe.productName,selected:o(c)[pe.$id]}))),v=Y(()=>o(f).filter(pe=>pe.selected)),g=Y(()=>{const pe=new Set([...Z.uniqueWho,...o(s)]);return Array.from(pe).map(ye=>({id:ye,label:ye,selected:o(s).includes(ye)}))}),p=Y(()=>`Gérer les volontaires (${o(v).length} produits sélectionnés)`),m=Y(()=>o(v).length===0?!1:o(s).length>0);function _(pe){const ye=pe.trim();ye&&!o(s).includes(ye)&&E(s,[...o(s),ye],!0)}function x(pe){E(s,o(s).filter(ye=>ye!==pe),!0)}function b(pe){o(s).includes(pe)?x(pe):_(pe)}function y(){o(i).trim()&&(_(o(i)),E(i,""))}function P(pe){o(c)[pe]=!o(c)[pe]}var w=Zv(),S=u(w),k=u(S),A=u(k),C=u(A),O=d(A,2);O.__click=[rs,r,t];var X=u(O);wt(X,{class:"h-4 w-4"});var j=d(k,2),W=u(j);{var te=pe=>{var ye=Gv(),st=u(ye);En(st,{class:"h-4 w-4"});var ue=d(st,2),Ve=u(ue);G(()=>U(Ve,o(n))),h(pe,ye)};M(W,pe=>{o(n)&&pe(te)})}var ee=d(W,2),D=u(ee),I=u(D),J=u(I),re=u(J);Zr(re,{class:"h-4 w-4 opacity-50"});var N=d(re,2);N.__keydown=[Qv,y];var Q=d(J,2);Q.__click=y;var oe=u(Q);Co(oe,{size:16});var se=d(I,2),he=d(u(se),2);Kr(he,{get items(){return o(g)},onToggleItem:b,showIcon:!0});var be=d(ee,2),xe=d(u(be),2),B=u(xe);B.__click=[Hv,l];var ge=d(B,2);ge.__click=[Kv,l];var q=d(xe,2);Kr(q,{get items(){return o(f)},onToggleItem:P,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var ie=d(j,2),ke=u(ie);ke.__click=[rs,r,t];var De=d(ke,2);De.__click=[Wv,m,r,n,a,v,t,s];var We=u(De);{var Be=pe=>{var ye=Jv();h(pe,ye)},Ye=pe=>{var ye=Yv(),st=R(ye);Qr(st,{class:"h-4 w-4"});var ue=d(st);G(()=>U(ue,` Appliquer à ${o(v).length??""} produit(s)`)),h(pe,ye)};M(We,pe=>{o(r)?pe(Be):pe(Ye,!1)})}G(pe=>{U(C,o(p)),O.disabled=o(r),N.disabled=o(r),Q.disabled=pe,Ee(B,1,`tab ${o(l)==="empty"?"tab-active":""}`),Ee(ge,1,`tab ${o(l)==="all"?"tab-active":""}`),ke.disabled=o(r),De.disabled=o(r)||!o(m)},[()=>o(r)||!o(i).trim()]),Me(N,()=>o(i),pe=>E(i,pe)),h(e,w),V()}Je(["click","keydown"]);var Fv=$("<div><!></div>"),eh=$('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function th(e,t){z(t,!0);let r=H(!1),n=Ae(t,"width",3,"80"),a=Ae(t,"bgClass",3,"bg-base-300");const s=Y(()=>"w-"+n());var i=L(),l=R(i);{var c=v=>{var g=Fv(),p=u(g);ne(p,()=>t.children??F),G(()=>Ee(g,1,`${a()??""} ${(o(s)?o(s):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),h(v,g)},f=v=>{var g=eh(),p=R(g),m=u(p),_=d(m,2),x=d(u(_),2),b=u(x);ne(b,()=>t.children??F);var y=d(p,2),P=u(y),w=u(P);To(w,{class:"h-6 w-6"}),bl(m,()=>o(r),S=>E(r,S)),h(v,g)};M(l,v=>{Hr.isMobile?v(f,!1):v(c)})}h(e,i),V()}function rh(){}var nh=$('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <!> <!></div> <!> <!> <!> <!>',1);function ah(e,t){z(t,!0);const r="100",a="ml"+"-"+r;console.log("PANEL_SIDE_WIDTH →",a);const s=Y(()=>Z.stats);let i=H(null),l=H("recettes"),c=H(!1),f=H(!1),v=H(Ne([])),g=H(Ne([])),p=H(!1),m=H(Ne([]));function _(B,ge="recettes"){E(l,ge,!0),E(i,B,!0)}function x(){E(i,null)}function b(B,ge,q){E(v,ge,!0),E(g,q,!0),E(B==="who"?c:f,!0)}function y(B){(!B||B==="who")&&E(c,!1),(!B||B==="store")&&E(f,!1),E(v,[],!0),E(g,[],!0)}function P(B){console.log(`[ProductsTable] Modification groupée réussie: ${B.updatedCount} produits`)}function w(B){const ge=B.filter(q=>q.displayMissingQuantity!=="✅ Complet"&&q.missingQuantityArray&&q.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${B.length} produits reçus → ${ge.length} produits avec quantités manquantes`),E(m,ge,!0),E(p,!0)}function S(){E(p,!1),E(m,[],!0)}function k(){console.log("[ProductsTable] Achat groupé créé avec succès"),S()}async function A(B){try{if(!Z.currentMainId)throw new Error("mainId non disponible");const ge=B.missingQuantityArray||[];if(ge.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let q=B.$id;B.isSynced||(console.log(`[ProductsTable] Produit ${B.$id} local, création pour validation rapide...`),q=(await jt(B.$id,{},ke=>Z.getEnrichedProductById(ke))).$id,console.log(`[ProductsTable] Produit sync créé: ${q}`)),await Ao(Z.currentMainId,q,ge,{store:B.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${B.productName}`)}catch(ge){console.error("[ProductsTable] Erreur validation rapide:",ge),alert("Erreur lors de la validation rapide: "+ge.message)}}var C=nh(),O=R(C),X=u(O),j=u(X),W=u(j);Fc(W,{class:"mr-1 h-4 w-4"});var te=d(W),ee=d(j,2);ee.__click=[rh];var D=u(ee);uu(D,{class:"mr-1 h-4 w-4"});var I=d(X,2);th(I,{width:r,children:(B,ge)=>{Zf(B,{})},$$slots:{default:!0}});var J=d(I,2);Rv(J,{onOpenModal:_,onOpenGroupEditModal:b,onOpenGroupPurchaseModal:w,onQuickValidation:A});var re=d(O,2);{var N=B=>{bf(B,{get productId(){return o(i)},get initialTab(){return o(l)},onClose:x})};M(re,B=>{o(i)&&B(N)})}var Q=d(re,2);{var oe=B=>{Xv(B,{get productIds(){return o(v)},get products(){return o(g)},onClose:()=>y("who"),onSuccess:P})};M(Q,B=>{o(c)&&B(oe)})}var se=d(Q,2);{var he=B=>{Uv(B,{get productIds(){return o(v)},get products(){return o(g)},onClose:()=>y("store"),onSuccess:P})};M(se,B=>{o(f)&&B(he)})}var be=d(se,2);{var xe=B=>{Wu(B,{get products(){return o(m)},onClose:S,onSuccess:k})};M(be,B=>{o(p)&&B(xe)})}G(()=>{Ee(O,1,`space-y-6 ${Hr.isMobile?"":"ml-100"}`),U(te,` ${o(s).total??""}`)}),h(e,C),V()}Je(["click"]);yi();var sh=$('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function oh(e){var t=sh();h(e,t)}var ih=$('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function lh(e,t){var r=ih(),n=d(u(r),2),a=d(u(n),2),s=u(a);G(()=>U(s,t.message)),h(e,r)}var ch=$('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function uh(e,t){var r=ch(),n=u(r),a=u(n);En(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var s=d(a,2),i=d(u(s),2),l=u(i);G(()=>U(l,t.message||"Erreur inconnue")),h(e,r)}var dh=$('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),fh=$('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),vh=$('<div class="text-base-content/60"> </div>'),hh=$('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),ph=$('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),mh=$('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),gh=$('<div class="bg-base-200 min-h-screen"><header class="bg-base-300 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function _h(e,t){z(t,!0);let r,n=H(null),a=H(!0),s=H(!1);Ys(async()=>{r=Ic();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await Z.initialize(r)}catch(N){const Q=N instanceof Error?N.message:"Erreur lors de l'initialisation";E(n,Q,!0),console.error("[App] Erreur initialisation:",N)}finally{E(a,!1)}}),Pl(()=>{Z.destroy()});async function i(){if(!(!r||o(s))){E(s,!0);try{await Z.forceReload(r)}catch(N){console.error("[App] Erreur lors du rechargement forcé:",N)}finally{E(s,!1)}}}const l=Y(()=>o(n)||Z.error),c=Y(()=>o(a)||Z.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=gh(),g=u(v),p=u(g),m=u(p),_=d(u(m),2),x=u(_);{var b=N=>{var Q=dh();h(N,Q)};M(x,N=>{Z.realtimeConnected&&N(b)})}var y=d(x,2);{var P=N=>{var Q=fh();h(N,Q)};M(y,N=>{Z.syncing&&N(P)})}var w=d(y,2);{var S=N=>{var Q=vh(),oe=u(Q);G(se=>U(oe,`Maj: ${se??""}`),[()=>new Date(Z.lastSync).toLocaleTimeString()]),h(N,Q)};M(w,N=>{Z.lastSync&&N(S)})}var k=d(w,2);{var A=N=>{var Q=hh();let oe;Q.__click=i;var se=u(Q);du(se,{class:"h-4 w-4"}),G(he=>{oe=Ee(Q,1,"btn btn-outline btn-sm",null,oe,he),Q.disabled=o(s)||Z.loading},[()=>({loading:o(s)||Z.loading})]),h(N,Q)};M(k,N=>{o(n)||N(A)})}var C=d(k,2);{var O=N=>{var Q=ph(),oe=u(Q),se=u(oe);nu(se,{class:"mr-2 h-4 w-4"}),G(()=>Wt(oe,"href",f)),h(N,Q)};M(C,N=>{o(n)&&N(O)})}var X=d(g,2),j=u(X);{var W=N=>{uh(N,{get message(){return o(l)}})},te=N=>{var Q=L(),oe=R(Q);{var se=he=>{lh(he,{get message(){return o(l)}})};M(oe,he=>{o(l)&&he(se)},!0)}h(N,Q)};M(j,N=>{o(n)?N(W):N(te,!1)})}var ee=d(j,2);{var D=N=>{oh(N)};M(ee,N=>{o(c)&&N(D)})}var I=d(ee,2);{var J=N=>{ah(N,{})},re=N=>{var Q=L(),oe=R(Q);{var se=he=>{var be=mh();h(he,be)};M(oe,he=>{!Z.loading&&!o(n)&&he(se)},!0)}h(N,Q)};M(I,N=>{Z.enrichedProducts.length>0?N(J):N(re,!1)})}h(e,v),V()}Je(["click"]);al(_h,{target:document.getElementById("app_products")});
