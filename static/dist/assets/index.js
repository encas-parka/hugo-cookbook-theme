(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const ha=!1;var Nn=Array.isArray,Ui=Array.prototype.indexOf,_s=Array.from,ns=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,Gi=Object.getOwnPropertyDescriptors,Qi=Object.prototype,Hi=Array.prototype,pa=Object.getPrototypeOf,Rs=Object.isExtensible;function jr(e){return typeof e=="function"}const oe=()=>{};function Ki(e){for(var t=0;t<e.length;t++)e[t]()}function _a(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function ma(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const it=2,ms=4,gs=8,mr=16,Qt=32,gr=64,bs=128,St=256,En=512,He=1024,dt=2048,nr=4096,At=8192,br=16384,ys=32768,yr=65536,Os=1<<17,Yi=1<<18,qr=1<<19,Zi=1<<20,ss=1<<21,In=1<<22,vr=1<<23,hr=Symbol("$state"),ga=Symbol("legacy props"),Ji=Symbol(""),Hr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function ba(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Xi(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Fi(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function eo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function to(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ro(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function no(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function so(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ao(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function io(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function oo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Mn=1,Cn=2,ya=4,lo=8,co=16,uo=1,fo=2,vo=4,ho=8,po=16,_o=1,mo=2,Be=Symbol(),go="http://www.w3.org/1999/xhtml",bo="http://www.w3.org/2000/svg",yo="@attach";function wo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function xo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let So=!1;function wa(e){return e===this.v}function Eo(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function xa(e){return!Eo(e,this.v)}let Dr=!1,Po=!1;function $o(){Dr=!0}let ke=null;function Nr(e){ke=e}function Y(e,t=!1,r){ke={p:ke,c:null,e:null,s:e,x:null,l:Dr&&!t?{s:null,u:null,$:[]}:null}}function Z(e){var t=ke,r=t.e;if(r!==null){t.e=null;for(var n of r)La(n)}return ke=t.p,{}}function an(){return!Dr||ke!==null&&ke.l===null}let fr=[];function Sa(){var e=fr;fr=[],Ki(e)}function pr(e){if(fr.length===0&&!Kr){var t=fr;queueMicrotask(()=>{t===fr&&Sa()})}fr.push(e)}function ko(){for(;fr.length>0;)Sa()}const To=new WeakMap;function Ea(e){var t=ee;if(t===null)return te.f|=vr,e;if((t.f&ys)===0){if((t.f&bs)===0)throw!t.parent&&e instanceof Error&&Pa(e),e;t.b.error(e)}else Ir(e,t)}function Ir(e,t){for(;t!==null;){if((t.f&bs)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&Pa(e),e}function Pa(e){const t=To.get(e);t&&(ns(e,"message",{value:t.message}),ns(e,"stack",{value:t.stack}))}const pn=new Set;let we=null,mn=null,as=new Set,Ot=[],Rn=null,is=!1,Kr=!1;class yt{current=new Map;#t=new Map;#r=new Set;#c=0;#u=null;#a=[];#s=[];#i=[];#n=[];#o=[];#d=[];skipped_effects=new Set;process(t){Ot=[],mn=null;var r=yt.apply(this);for(const i of t)this.#f(i);if(this.#c===0){this.#e();var n=this.#s,s=this.#i;this.#s=[],this.#i=[],this.#n=[],mn=this,we=null,qs(n),qs(s),mn=null,this.#u?.resolve()}else this.#l(this.#s),this.#l(this.#i),this.#l(this.#n);r();for(const i of this.#a)Xr(i);this.#a=[]}#f(t){t.f^=He;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Qt|gr))!==0,i=s&&(n&He)!==0,o=i||(n&At)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=He:(n&ms)!==0?this.#i.push(r):(n&He)===0&&((n&In)!==0&&r.b?.is_pending()?this.#a.push(r):Ln(r)&&((r.f&mr)!==0&&this.#n.push(r),Xr(r)));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#l(t){for(const r of t)((r.f&dt)!==0?this.#o:this.#d).push(r),tt(r,He);t.length=0}capture(t,r){this.#t.has(t)||this.#t.set(t,r),this.current.set(t,t.v)}activate(){we=this}deactivate(){we=null}flush(){if(Ot.length>0){if(this.activate(),$a(),we!==null&&we!==this)return}else this.#c===0&&this.#e();this.deactivate();for(const t of as)if(as.delete(t),t(),we!==null)break}#e(){for(const t of this.#r)t();if(this.#r.clear(),pn.size>1){this.#t.clear();let t=!0;for(const r of pn){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;ka(n)}if(Ot.length>0){we=r;const n=yt.apply(r);for(const s of Ot)r.#f(s);Ot=[],n()}}we=null}pn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#o)tt(t,dt),_r(t);for(const t of this.#d)tt(t,nr),_r(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=_a()).promise}static ensure(){if(we===null){const t=we=new yt;pn.add(we),Kr||yt.enqueue(()=>{we===t&&t.flush()})}return we}static enqueue(t){pr(t)}static apply(t){return oe}}function Ao(e){var t=Kr;Kr=!0;try{for(var r;;){if(ko(),Ot.length===0&&(we?.flush(),Ot.length===0))return Rn=null,r;$a()}}finally{Kr=t}}function $a(){var e=Tr;is=!0;try{var t=0;for(js(!0);Ot.length>0;){var r=yt.ensure();if(t++>1e3){var n,s;No()}r.process(Ot),Ft.clear()}}finally{is=!1,js(e),Rn=null}}function No(){try{ro()}catch(e){Ir(e,Rn)}}let dr=null;function qs(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(br|At))===0&&Ln(n)&&(dr=[],Xr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?za(n):n.fn=null),dr?.length>0)){Ft.clear();for(const s of dr)Xr(s);dr=[]}}dr=null}}function ka(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&it)!==0?ka(t):(r&(In|mr))!==0&&(tt(t,dt),_r(t))}}function _r(e){for(var t=Rn=e;t.parent!==null;){t=t.parent;var r=t.f;if(is&&t===ee&&(r&mr)!==0)return;if((r&(gr|Qt))!==0){if((r&He)===0)return;t.f^=He}}Ot.push(t)}function Ta(e){let t=0,r=tr(0),n;return()=>{Qo()&&(a(r),$s(()=>(t===0&&(n=Lr(()=>e(()=>qt(r)))),t+=1,()=>{pr(()=>{t-=1,t===0&&(n?.(),n=void 0,qt(r))})})))}}var Io=yr|qr|bs;function Mo(e,t,r){new Co(e,t,r)}class Co{parent;#t=!1;#r;#c=null;#u;#a;#s;#i=null;#n=null;#o=null;#d=null;#f=0;#l=0;#e=!1;#v=null;#b=()=>{this.#v&&Mr(this.#v,this.#f)};#y=Ta(()=>(this.#v=tr(this.#f),()=>{this.#v=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#a=n,this.parent=ee.b,this.#t=!!this.#u.pending,this.#s=ar(()=>{ee.b=this;{try{this.#i=Qe(()=>n(this.#r))}catch(s){this.error(s)}this.#l>0?this.#_():this.#t=!1}},Io)}#x(){try{this.#i=Qe(()=>this.#a(this.#r))}catch(t){this.error(t)}this.#t=!1}#S(){const t=this.#u.pending;t&&(this.#n=Qe(()=>t(this.#r)),yt.enqueue(()=>{this.#i=this.#p(()=>(yt.ensure(),Qe(()=>this.#a(this.#r)))),this.#l>0?this.#_():(er(this.#n,()=>{this.#n=null}),this.#t=!1)}))}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#p(t){var r=ee,n=te,s=ke;Lt(this.#s),at(this.#s),Nr(this.#s.ctx);try{return t()}catch(i){return Ea(i),null}finally{Lt(r),at(n),Nr(s)}}#_(){const t=this.#u.pending;this.#i!==null&&(this.#d=document.createDocumentFragment(),Ro(this.#i,this.#d)),this.#n===null&&(this.#n=Qe(()=>t(this.#r)))}#w(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#w(t);return}this.#l+=t,this.#l===0&&(this.#t=!1,this.#n&&er(this.#n,()=>{this.#n=null}),this.#d&&(this.#r.before(this.#d),this.#d=null),pr(()=>{yt.ensure().flush()}))}update_pending_count(t){this.#w(t),this.#f+=t,as.add(this.#b)}get_effect_pending(){return this.#y(),a(this.#v)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#e||!r&&!n)throw t;this.#i&&(We(this.#i),this.#i=null),this.#n&&(We(this.#n),this.#n=null),this.#o&&(We(this.#o),this.#o=null);var s=!1,i=!1;const o=()=>{if(s){xo();return}s=!0,i&&oo(),yt.ensure(),this.#f=0,this.#o!==null&&er(this.#o,()=>{this.#o=null}),this.#t=this.has_pending_snippet(),this.#i=this.#p(()=>(this.#e=!1,Qe(()=>this.#a(this.#r)))),this.#l>0?this.#_():this.#t=!1};var l=te;try{at(null),i=!0,r?.(t,o),i=!1}catch(u){Ir(u,this.#s&&this.#s.parent)}finally{at(l)}n&&pr(()=>{this.#o=this.#p(()=>{this.#e=!0;try{return Qe(()=>{n(this.#r,()=>t,()=>o)})}catch(u){return Ir(u,this.#s.parent),null}finally{this.#e=!1}})})}}function Ro(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:on(r);t.append(r),r=s}}function Aa(e,t,r){const n=an()?On:ws;if(t.length===0){r(e.map(n));return}var s=we,i=ee,o=Oo();Promise.all(t.map(l=>qo(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(u){(i.f&br)===0&&Ir(u,i)}s?.deactivate(),Na()}).catch(l=>{Ir(l,i)})}function Oo(){var e=ee,t=te,r=ke,n=we;return function(){Lt(e),at(t),Nr(r),n?.activate()}}function Na(){Lt(null),at(null),Nr(null)}function On(e){var t=it|dt,r=te!==null&&(te.f&it)!==0?te:null;return ee===null||r!==null&&(r.f&St)!==0?t|=St:ee.f|=qr,{ctx:ke,deps:null,effects:null,equals:wa,f:t,fn:e,reactions:null,rv:0,v:Be,wv:0,parent:r??ee,ac:null}}function qo(e,t){let r=ee;r===null&&Xi();var n=r.b,s=void 0,i=tr(Be),o=!te,l=new Map;return Yo(()=>{var u=_a();s=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(m){u.reject(m)}var f=we,v=n.is_pending();o&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(Hr),l.set(f,u)));const h=(m,_=void 0)=>{v||f.activate(),_?_!==Hr&&(i.f|=vr,Mr(i,_)):((i.f&vr)!==0&&(i.f^=vr),Mr(i,m)),o&&(n.update_pending_count(-1),v||f.decrement()),Na()};u.promise.then(h,m=>h(null,m||"unknown"))}),Da(()=>{for(const u of l.values())u.reject(Hr)}),new Promise(u=>{function f(v){function h(){v===s?u(i):f(s)}v.then(h,h)}f(s)})}function N(e){const t=On(e);return Ua(t),t}function ws(e){const t=On(e);return t.equals=xa,t}function Ia(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)We(t[r])}}function Do(e){for(var t=e.parent;t!==null;){if((t.f&it)===0)return t;t=t.parent}return null}function xs(e){var t,r=ee;Lt(Do(e));try{Ia(e),t=Ka(e)}finally{Lt(r)}return t}function Ma(e){var t=xs(e);if(e.equals(t)||(e.v=t,e.wv=Qa()),!wr){var r=(Jt||(e.f&St)!==0)&&e.deps!==null?nr:He;tt(e,r)}}const Ft=new Map;function tr(e,t){var r={f:0,v:e,reactions:null,equals:wa,rv:0,wv:0};return r}function de(e,t){const r=tr(e);return Ua(r),r}function Lo(e,t=!1,r=!0){const n=tr(e);return t||(n.equals=xa),Dr&&r&&ke!==null&&ke.l!==null&&(ke.l.s??=[]).push(n),n}function M(e,t,r=!1){te!==null&&(!Tt||(te.f&Os)!==0)&&an()&&(te.f&(it|mr|In|Os))!==0&&!Ut?.includes(e)&&io();let n=r?wt(t):t;return Mr(e,n)}function Mr(e,t){if(!e.equals(t)){var r=e.v;wr?Ft.set(e,t):Ft.set(e,r),e.v=t;var n=yt.ensure();n.capture(e,r),(e.f&it)!==0&&((e.f&dt)!==0&&xs(e),tt(e,(e.f&St)===0?He:nr)),e.wv=Qa(),Ca(e,dt),an()&&ee!==null&&(ee.f&He)!==0&&(ee.f&(Qt|gr))===0&&(bt===null?Xo([e]):bt.push(e))}return t}function qt(e){M(e,e.v+1)}function Ca(e,t){var r=e.reactions;if(r!==null)for(var n=an(),s=r.length,i=0;i<s;i++){var o=r[i],l=o.f;if(!(!n&&o===ee)){var u=(l&dt)===0;u&&tt(o,t),(l&it)!==0?Ca(o,nr):u&&((l&mr)!==0&&dr!==null&&dr.push(o),_r(o))}}}function wt(e){if(typeof e!="object"||e===null||hr in e)return e;const t=pa(e);if(t!==Qi&&t!==Hi)return e;var r=new Map,n=Nn(e),s=de(0),i=Gt,o=l=>{if(Gt===i)return l();var u=te,f=Gt;at(null),Vs(i);var v=l();return at(u),Vs(f),v};return n&&r.set("length",de(e.length)),new Proxy(e,{defineProperty(l,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&so();var v=r.get(u);return v===void 0?v=o(()=>{var h=de(f.value);return r.set(u,h),h}):M(v,f.value,!0),!0},deleteProperty(l,u){var f=r.get(u);if(f===void 0){if(u in l){const v=o(()=>de(Be));r.set(u,v),qt(s)}}else M(f,Be),qt(s);return!0},get(l,u,f){if(u===hr)return e;var v=r.get(u),h=u in l;if(v===void 0&&(!h||Xt(l,u)?.writable)&&(v=o(()=>{var _=wt(h?l[u]:Be),g=de(_);return g}),r.set(u,v)),v!==void 0){var m=a(v);return m===Be?void 0:m}return Reflect.get(l,u,f)},getOwnPropertyDescriptor(l,u){var f=Reflect.getOwnPropertyDescriptor(l,u);if(f&&"value"in f){var v=r.get(u);v&&(f.value=a(v))}else if(f===void 0){var h=r.get(u),m=h?.v;if(h!==void 0&&m!==Be)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(l,u){if(u===hr)return!0;var f=r.get(u),v=f!==void 0&&f.v!==Be||Reflect.has(l,u);if(f!==void 0||ee!==null&&(!v||Xt(l,u)?.writable)){f===void 0&&(f=o(()=>{var m=v?wt(l[u]):Be,_=de(m);return _}),r.set(u,f));var h=a(f);if(h===Be)return!1}return v},set(l,u,f,v){var h=r.get(u),m=u in l;if(n&&u==="length")for(var _=f;_<h.v;_+=1){var g=r.get(_+"");g!==void 0?M(g,Be):_ in l&&(g=o(()=>de(Be)),r.set(_+"",g))}if(h===void 0)(!m||Xt(l,u)?.writable)&&(h=o(()=>de(void 0)),M(h,wt(f)),r.set(u,h));else{m=h.v!==Be;var y=o(()=>wt(f));M(h,y)}var w=Reflect.getOwnPropertyDescriptor(l,u);if(w?.set&&w.set.call(v,f),!m){if(n&&typeof u=="string"){var S=r.get("length"),R=Number(u);Number.isInteger(R)&&R>=S.v&&M(S,R+1)}qt(s)}return!0},ownKeys(l){a(s);var u=Reflect.ownKeys(l).filter(h=>{var m=r.get(h);return m===void 0||m.v!==Be});for(var[f,v]of r)v.v!==Be&&!(f in l)&&u.push(f);return u},setPrototypeOf(){ao()}})}function Ds(e){try{if(e!==null&&typeof e=="object"&&hr in e)return e[hr]}catch{}return e}function Bo(e,t){return Object.is(Ds(e),Ds(t))}var Ls,Ra,Oa,qa;function jo(){if(Ls===void 0){Ls=window,Ra=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Oa=Xt(t,"firstChild").get,qa=Xt(t,"nextSibling").get,Rs(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Rs(r)&&(r.__t=void 0)}}function sr(e=""){return document.createTextNode(e)}function Cr(e){return Oa.call(e)}function on(e){return qa.call(e)}function c(e,t){return Cr(e)}function W(e,t=!1){{var r=Cr(e);return r instanceof Comment&&r.data===""?on(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=on(n);return n}function zo(e){e.textContent=""}function Ss(){return!1}function Vo(e,t){if(t){const r=document.body;e.autofocus=!0,pr(()=>{document.activeElement===r&&e.focus()})}}let Bs=!1;function Wo(){Bs||(Bs=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function qn(e){var t=te,r=ee;at(null),Lt(null);try{return e()}finally{at(t),Lt(r)}}function Es(e,t,r,n=r){e.addEventListener(t,()=>qn(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),Wo()}function Uo(e){ee===null&&te===null&&to(),te!==null&&(te.f&St)!==0&&ee===null&&eo(),wr&&Fi()}function Go(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Ht(e,t,r,n=!0){var s=ee;s!==null&&(s.f&At)!==0&&(e|=At);var i={ctx:ke,deps:null,nodes_start:null,nodes_end:null,f:e|dt,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Xr(i),i.f|=ys}catch(u){throw We(i),u}else t!==null&&_r(i);if(n){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&qr)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&Go(o,s),te!==null&&(te.f&it)!==0&&(e&gr)===0)){var l=te;(l.effects??=[]).push(o)}}return i}function Qo(){return te!==null&&!Tt}function Da(e){const t=Ht(gs,null,!1);return tt(t,He),t.teardown=e,t}function Ho(e){Uo();var t=ee.f,r=!te&&(t&Qt)!==0&&(t&ys)===0;if(r){var n=ke;(n.e??=[]).push(e)}else return La(e)}function La(e){return Ht(ms|Zi,e,!1)}function Ko(e){yt.ensure();const t=Ht(gr|qr,e,!0);return(r={})=>new Promise(n=>{r.outro?er(t,()=>{We(t),n(void 0)}):(We(t),n(void 0))})}function Ps(e){return Ht(ms,e,!1)}function Yo(e){return Ht(In|qr,e,!0)}function $s(e,t=0){return Ht(gs|t,e,!0)}function j(e,t=[],r=[]){Aa(t,r,n=>{Ht(gs,()=>e(...n.map(a)),!0)})}function ar(e,t=0){var r=Ht(mr|t,e,!0);return r}function Qe(e,t=!0){return Ht(Qt|qr,e,!0,t)}function Ba(e){var t=e.teardown;if(t!==null){const r=wr,n=te;zs(!0),at(null);try{t.call(null)}finally{zs(r),at(n)}}}function ja(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&qn(()=>{s.abort(Hr)});var n=r.next;(r.f&gr)!==0?r.parent=null:We(r,t),r=n}}function Zo(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Qt)===0&&We(t),t=r}}function We(e,t=!0){var r=!1;(t||(e.f&Yi)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Jo(e.nodes_start,e.nodes_end),r=!0),ja(e,t&&!r),Pn(e,0),tt(e,br);var n=e.transitions;if(n!==null)for(const i of n)i.stop();Ba(e);var s=e.parent;s!==null&&s.first!==null&&za(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Jo(e,t){for(;e!==null;){var r=e===t?null:on(e);e.remove(),e=r}}function za(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function er(e,t){var r=[];ks(e,r,!0),Va(r,()=>{We(e),t&&t()})}function Va(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function ks(e,t,r){if((e.f&At)===0){if(e.f^=At,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var s=n.next,i=(n.f&yr)!==0||(n.f&Qt)!==0;ks(n,t,i?r:!1),n=s}}}function Dn(e){Wa(e,!0)}function Wa(e,t){if((e.f&At)!==0){e.f^=At,(e.f&He)===0&&(tt(e,dt),_r(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&yr)!==0||(r.f&Qt)!==0;Wa(r,s?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let Tr=!1;function js(e){Tr=e}let wr=!1;function zs(e){wr=e}let te=null,Tt=!1;function at(e){te=e}let ee=null;function Lt(e){ee=e}let Ut=null;function Ua(e){te!==null&&(Ut===null?Ut=[e]:Ut.push(e))}let Fe=null,ct=0,bt=null;function Xo(e){bt=e}let Ga=1,Jr=0,Gt=Jr;function Vs(e){Gt=e}let Jt=!1;function Qa(){return++Ga}function Ln(e){var t=e.f;if((t&dt)!==0)return!0;if((t&nr)!==0){var r=e.deps,n=(t&St)!==0;if(r!==null){var s,i,o=(t&En)!==0,l=n&&ee!==null&&!Jt,u=r.length;if((o||l)&&(ee===null||(ee.f&br)===0)){var f=e,v=f.parent;for(s=0;s<u;s++)i=r[s],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=En),l&&v!==null&&(v.f&St)===0&&(f.f^=St)}for(s=0;s<u;s++)if(i=r[s],Ln(i)&&Ma(i),i.wv>e.wv)return!0}(!n||ee!==null&&!Jt)&&tt(e,He)}return!1}function Ha(e,t,r=!0){var n=e.reactions;if(n!==null&&!Ut?.includes(e))for(var s=0;s<n.length;s++){var i=n[s];(i.f&it)!==0?Ha(i,t,!1):t===i&&(r?tt(i,dt):(i.f&He)!==0&&tt(i,nr),_r(i))}}function Ka(e){var t=Fe,r=ct,n=bt,s=te,i=Jt,o=Ut,l=ke,u=Tt,f=Gt,v=e.f;Fe=null,ct=0,bt=null,Jt=(v&St)!==0&&(Tt||!Tr||te===null),te=(v&(Qt|gr))===0?e:null,Ut=null,Nr(e.ctx),Tt=!1,Gt=++Jr,e.ac!==null&&(qn(()=>{e.ac.abort(Hr)}),e.ac=null);try{e.f|=ss;var h=e.fn,m=h(),_=e.deps;if(Fe!==null){var g;if(Pn(e,ct),_!==null&&ct>0)for(_.length=ct+Fe.length,g=0;g<Fe.length;g++)_[ct+g]=Fe[g];else e.deps=_=Fe;if(!Jt||(v&it)!==0&&e.reactions!==null)for(g=ct;g<_.length;g++)(_[g].reactions??=[]).push(e)}else _!==null&&ct<_.length&&(Pn(e,ct),_.length=ct);if(an()&&bt!==null&&!Tt&&_!==null&&(e.f&(it|nr|dt))===0)for(g=0;g<bt.length;g++)Ha(bt[g],e);return s!==null&&s!==e&&(Jr++,bt!==null&&(n===null?n=bt:n.push(...bt))),(e.f&vr)!==0&&(e.f^=vr),m}catch(y){return Ea(y)}finally{e.f^=ss,Fe=t,ct=r,bt=n,te=s,Jt=i,Ut=o,Nr(l),Tt=u,Gt=f}}function Fo(e,t){let r=t.reactions;if(r!==null){var n=Ui.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&it)!==0&&(Fe===null||!Fe.includes(t))&&(tt(t,nr),(t.f&(St|En))===0&&(t.f^=En),Ia(t),Pn(t,0))}function Pn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Fo(e,r[n])}function Xr(e){var t=e.f;if((t&br)===0){tt(e,He);var r=ee,n=Tr;ee=e,Tr=!0;try{(t&mr)!==0?Zo(e):ja(e),Ba(e);var s=Ka(e);e.teardown=typeof s=="function"?s:null,e.wv=Ga;var i;ha&&Po&&(e.f&dt)!==0&&e.deps}finally{Tr=n,ee=r}}}async function el(){await Promise.resolve(),Ao()}function a(e){var t=e.f,r=(t&it)!==0;if(te!==null&&!Tt){var n=ee!==null&&(ee.f&br)!==0;if(!n&&!Ut?.includes(e)){var s=te.deps;if((te.f&ss)!==0)e.rv<Jr&&(e.rv=Jr,Fe===null&&s!==null&&s[ct]===e?ct++:Fe===null?Fe=[e]:(!Jt||!Fe.includes(e))&&Fe.push(e));else{(te.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[te]:i.includes(te)||i.push(te)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&St)===0&&(o.f^=St)}if(wr){if(Ft.has(e))return Ft.get(e);if(r){o=e;var u=o.v;return((o.f&He)===0&&o.reactions!==null||Ya(o))&&(u=xs(o)),Ft.set(o,u),u}}else r&&(o=e,Ln(o)&&Ma(o));if((e.f&vr)!==0)throw e.v;return e.v}function Ya(e){if(e.v===Be)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ft.has(t)||(t.f&it)!==0&&Ya(t))return!0;return!1}function Lr(e){var t=Tt;try{return Tt=!0,e()}finally{Tt=t}}const tl=-7169;function tt(e,t){e.f=e.f&tl|t}function rl(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const nl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function sl(e){return nl.includes(e)}const al={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function il(e){return e=e.toLowerCase(),al[e]??e}const ol=["touchstart","touchmove"];function ll(e){return ol.includes(e)}const Za=new Set,os=new Set;function Ja(e,t,r,n={}){function s(i){if(n.capture||Gr.call(t,i),!i.cancelBubble)return qn(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?pr(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Ws(e,t,r,n={}){var s=Ja(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function ir(e){for(var t=0;t<e.length;t++)Za.add(e[t]);for(var r of os)r(e)}let Us=null;function Gr(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],i=s[0]||e.target;Us=e;var o=0,l=Us===e&&e.__root;if(l){var u=s.indexOf(l);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var f=s.indexOf(t);if(f===-1)return;u<=f&&(o=u)}if(i=s[o]||e.target,i!==t){ns(e,"currentTarget",{configurable:!0,get(){return i||r}});var v=te,h=ee;at(null),Lt(null);try{for(var m,_=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var y=i["__"+n];if(y!=null&&(!i.disabled||e.target===i))if(Nn(y)){var[w,...S]=y;w.apply(i,[e,...S])}else y.call(i,e)}catch(R){m?_.push(R):m=R}if(e.cancelBubble||g===t||g===null)break;i=g}if(m){for(let R of _)queueMicrotask(()=>{throw R});throw m}}finally{e.__root=t,delete e.currentTarget,at(v),Lt(h)}}}function Xa(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Rr(e,t){var r=ee;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function x(e,t){var r=(t&_o)!==0,n=(t&mo)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=Xa(i?e:"<!>"+e),r||(s=Cr(s)));var o=n||Ra?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=Cr(o),u=o.lastChild;Rr(l,u)}else Rr(o,o);return o}}function cl(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=Xa(s),l=Cr(o);i=Cr(l)}var u=i.cloneNode(!0);return Rr(u,u),u}}function ul(e,t){return cl(e,t,"svg")}function ut(e=""){{var t=sr(e+"");return Rr(t,t),t}}function H(){var e=document.createDocumentFragment(),t=document.createComment(""),r=sr();return e.append(t,r),Rr(t,r),e}function p(e,t){e!==null&&e.before(t)}function I(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function dl(e,t){return fl(e,t)}const $r=new Map;function fl(e,{target:t,anchor:r,props:n={},events:s,context:i,intro:o=!0}){jo();var l=new Set,u=h=>{for(var m=0;m<h.length;m++){var _=h[m];if(!l.has(_)){l.add(_);var g=ll(_);t.addEventListener(_,Gr,{passive:g});var y=$r.get(_);y===void 0?(document.addEventListener(_,Gr,{passive:g}),$r.set(_,1)):$r.set(_,y+1)}}};u(_s(Za)),os.add(u);var f=void 0,v=Ko(()=>{var h=r??t.appendChild(sr());return Mo(h,{pending:()=>{}},m=>{if(i){Y({});var _=ke;_.c=i}s&&(n.$$events=s),f=e(m,n)||{},i&&Z()}),()=>{for(var m of l){t.removeEventListener(m,Gr);var _=$r.get(m);--_===0?(document.removeEventListener(m,Gr),$r.delete(m)):$r.set(m,_)}os.delete(u),h!==r&&h.parentNode?.removeChild(h)}});return vl.set(f,v),f}let vl=new WeakMap;function A(e,t,r=!1){var n=e,s=null,i=null,o=Be,l=r?yr:0,u=!1;const f=(_,g=!0)=>{u=!0,m(g,_)};var v=null;function h(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var _=o?s:i,g=o?i:s;_&&Dn(_),g&&er(g,()=>{o?i=null:s=null})}const m=(_,g)=>{if(o!==(o=_)){var y=Ss(),w=n;if(y&&(v=document.createDocumentFragment(),v.append(w=sr())),o?s??=g&&Qe(()=>g(w)):i??=g&&Qe(()=>g(w)),y){var S=we,R=o?s:i,T=o?i:s;R&&S.skipped_effects.delete(R),T&&S.skipped_effects.add(T),S.add_callback(h)}else h()}};ar(()=>{u=!1,t(f),u||m(null,null)},l)}function Fa(e,t){return t}function hl(e,t,r){for(var n=e.items,s=[],i=t.length,o=0;o<i;o++)ks(t[o].e,s,!0);var l=i>0&&s.length===0&&r!==null;if(l){var u=r.parentNode;zo(u),u.append(r),n.clear(),Rt(e,t[0].prev,t[i-1].next)}Va(s,()=>{for(var f=0;f<i;f++){var v=t[f];l||(n.delete(v.k),Rt(e,v.prev,v.next)),We(v.e,!l)}})}function et(e,t,r,n,s,i=null){var o=e,l={flags:t,items:new Map,first:null},u=(t&ya)!==0;if(u){var f=e;o=f.appendChild(sr())}var v=null,h=!1,m=new Map,_=ws(()=>{var S=r();return Nn(S)?S:S==null?[]:_s(S)}),g,y;function w(){pl(y,g,l,m,o,s,t,n,r),i!==null&&(g.length===0?v?Dn(v):v=Qe(()=>i(o)):v!==null&&er(v,()=>{v=null}))}ar(()=>{y??=ee,g=a(_);var S=g.length;if(!(h&&S===0)){h=S===0;var R,T,k,$;if(Ss()){var P=new Set,O=we;for(T=0;T<S;T+=1){k=g[T],$=n(k,T);var z=l.items.get($)??m.get($);z?(t&(Mn|Cn))!==0&&ei(z,k,T,t):(R=ti(null,l,null,null,k,$,T,s,t,r,!0),m.set($,R)),P.add($)}for(const[C,q]of l.items)P.has(C)||O.skipped_effects.add(q.e);O.add_callback(w)}else w();a(_)}})}function pl(e,t,r,n,s,i,o,l,u){var f=(o&lo)!==0,v=(o&(Mn|Cn))!==0,h=t.length,m=r.items,_=r.first,g=_,y,w=null,S,R=[],T=[],k,$,P,O;if(f)for(O=0;O<h;O+=1)k=t[O],$=l(k,O),P=m.get($),P!==void 0&&(P.a?.measure(),(S??=new Set).add(P));for(O=0;O<h;O+=1){if(k=t[O],$=l(k,O),P=m.get($),P===void 0){var z=n.get($);if(z!==void 0){n.delete($),m.set($,z);var C=w?w.next:g;Rt(r,w,z),Rt(r,z,C),Jn(z,C,s),w=z}else{var q=g?g.e.nodes_start:s;w=ti(q,r,w,w===null?r.first:w.next,k,$,O,i,o,u)}m.set($,w),R=[],T=[],g=w.next;continue}if(v&&ei(P,k,O,o),(P.e.f&At)!==0&&(Dn(P.e),f&&(P.a?.unfix(),(S??=new Set).delete(P))),P!==g){if(y!==void 0&&y.has(P)){if(R.length<T.length){var ne=T[0],se;w=ne.prev;var U=R[0],E=R[R.length-1];for(se=0;se<R.length;se+=1)Jn(R[se],ne,s);for(se=0;se<T.length;se+=1)y.delete(T[se]);Rt(r,U.prev,E.next),Rt(r,w,U),Rt(r,E,ne),g=ne,w=E,O-=1,R=[],T=[]}else y.delete(P),Jn(P,g,s),Rt(r,P.prev,P.next),Rt(r,P,w===null?r.first:w.next),Rt(r,w,P),w=P;continue}for(R=[],T=[];g!==null&&g.k!==$;)(g.e.f&At)===0&&(y??=new Set).add(g),T.push(g),g=g.next;if(g===null)continue;P=g}R.push(P),w=P,g=P.next}if(g!==null||y!==void 0){for(var V=y===void 0?[]:_s(y);g!==null;)(g.e.f&At)===0&&V.push(g),g=g.next;var le=V.length;if(le>0){var he=(o&ya)!==0&&h===0?s:null;if(f){for(O=0;O<le;O+=1)V[O].a?.measure();for(O=0;O<le;O+=1)V[O].a?.fix()}hl(r,V,he)}}f&&pr(()=>{if(S!==void 0)for(P of S)P.a?.apply()}),e.first=r.first&&r.first.e,e.last=w&&w.e;for(var ye of n.values())We(ye.e);n.clear()}function ei(e,t,r,n){(n&Mn)!==0&&Mr(e.v,t),(n&Cn)!==0?Mr(e.i,r):e.i=r}function ti(e,t,r,n,s,i,o,l,u,f,v){var h=(u&Mn)!==0,m=(u&co)===0,_=h?m?Lo(s,!1,!1):tr(s):s,g=(u&Cn)===0?o:tr(o),y={i:g,v:_,k:i,a:null,e:null,prev:r,next:n};try{if(e===null){var w=document.createDocumentFragment();w.append(e=sr())}return y.e=Qe(()=>l(e,_,g,f),So),y.e.prev=r&&r.e,y.e.next=n&&n.e,r===null?v||(t.first=y):(r.next=y,r.e.next=y.e),n!==null&&(n.prev=y,n.e.prev=y.e),y}finally{}}function Jn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==null&&i!==n;){var o=on(i);s.before(i),i=o}}function Rt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function fe(e,t,...r){var n=e,s=oe,i;ar(()=>{s!==(s=t())&&(i&&(We(i),i=null),i=Qe(()=>s(n,...r)))},yr)}function gn(e,t,r){var n=e,s,i,o=null,l=null;function u(){i&&(er(i),i=null),o&&(o.lastChild.remove(),n.before(o),o=null),i=l,l=null}ar(()=>{if(s!==(s=t())){var f=Ss();if(s){var v=n;f&&(o=document.createDocumentFragment(),o.append(v=sr()),i&&we.skipped_effects.add(i)),l=Qe(()=>r(v,s))}f?we.add_callback(u):u()}},yr)}function _l(e,t,r,n,s,i){var o,l,u=null,f=e,v;ar(()=>{const h=t()||null;var m=bo;h!==o&&(v&&(h===null?er(v,()=>{v=null,l=null}):h===l?Dn(v):We(v)),h&&h!==l&&(v=Qe(()=>{if(u=document.createElementNS(m,h),Rr(u,u),n){var _=u.appendChild(sr());n(u,_)}ee.nodes_end=u,f.before(u)})),o=h,o&&(l=o))},yr)}function ml(e,t){var r=void 0,n;ar(()=>{r!==(r=t())&&(n&&(We(n),n=null),r&&(n=Qe(()=>{Ps(()=>r(e))})))})}function ri(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=ri(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function gl(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=ri(e))&&(n&&(n+=" "),n+=t);return n}function bl(e){return typeof e=="object"?gl(e):e??""}const Gs=[...` 	
\r\f \v\uFEFF`];function yl(e,t,r){var n=e==null?"":""+e;if(r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var l=o+i;(o===0||Gs.includes(n[o-1]))&&(l===n.length||Gs.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Qs(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var i=e[s];i!=null&&i!==""&&(n+=" "+s+": "+i+r)}return n}function Xn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function wl(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,u=[];n&&u.push(...Object.keys(n).map(Xn)),s&&u.push(...Object.keys(s).map(Xn));var f=0,v=-1;const y=e.length;for(var h=0;h<y;h++){var m=e[h];if(l?m==="/"&&e[h-1]==="*"&&(l=!1):i?i===m&&(i=!1):m==="/"&&e[h+1]==="*"?l=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!l&&i===!1&&o===0){if(m===":"&&v===-1)v=h;else if(m===";"||h===y-1){if(v!==-1){var _=Xn(e.substring(f,v).trim());if(!u.includes(_)){m!==";"&&h++;var g=e.substring(f,h).trim();r+=" "+g+";"}}f=h+1,v=-1}}}}return n&&(r+=Qs(n)),s&&(r+=Qs(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ae(e,t,r,n,s,i){var o=e.__className;if(o!==r||o===void 0){var l=yl(r,n,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(i&&s!==i)for(var u in i){var f=!!i[u];(s==null||f!==!!s[u])&&e.classList.toggle(u,f)}return i}function Fn(e,t={},r,n){for(var s in r){var i=r[s];t[s]!==i&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,n))}}function xl(e,t,r,n){var s=e.__style;if(s!==t){var i=wl(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(Fn(e,r?.[0],n[0]),Fn(e,r?.[1],n[1],"important")):Fn(e,r,n));return n}function $n(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Nn(t))return wo();for(var n of e.options)n.selected=t.includes(Yr(n));return}for(n of e.options){var s=Yr(n);if(Bo(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ni(e){var t=new MutationObserver(()=>{$n(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Da(()=>{t.disconnect()})}function ls(e,t,r=t){var n=!0;Es(e,"change",s=>{var i=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),Yr);else{var l=e.querySelector(i)??e.querySelector("option:not([disabled])");o=l&&Yr(l)}r(o)}),Ps(()=>{var s=t();if($n(e,s,n),n&&s===void 0){var i=e.querySelector(":checked");i!==null&&(s=Yr(i),r(s))}e.__value=s,n=!1}),ni(e)}function Yr(e){return"__value"in e?e.__value:e.value}const zr=Symbol("class"),Vr=Symbol("style"),si=Symbol("is custom element"),ai=Symbol("is html");function Sl(e,t){var r=Bn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Ar(e,t){var r=Bn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function El(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function kn(e,t,r,n){var s=Bn(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[Ji]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ii(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Pl(e,t,r,n,s=!1,i=!1){var o=Bn(e),l=o[si],u=!o[ai],f=t||{},v=e.tagName==="OPTION";for(var h in t)h in r||(r[h]=null);r.class?r.class=bl(r.class):r[zr]&&(r.class=null),r[Vr]&&(r.style??=null);var m=ii(e);for(const k in r){let $=r[k];if(v&&k==="value"&&$==null){e.value=e.__value="",f[k]=$;continue}if(k==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ae(e,_,$,n,t?.[zr],r[zr]),f[k]=$,f[zr]=r[zr];continue}if(k==="style"){xl(e,$,t?.[Vr],r[Vr]),f[k]=$,f[Vr]=r[Vr];continue}var g=f[k];if(!($===g&&!($===void 0&&e.hasAttribute(k)))){f[k]=$;var y=k[0]+k[1];if(y!=="$$")if(y==="on"){const P={},O="$$"+k;let z=k.slice(2);var w=sl(z);if(rl(z)&&(z=z.slice(0,-7),P.capture=!0),!w&&g){if($!=null)continue;e.removeEventListener(z,f[O],P),f[O]=null}if($!=null)if(w)e[`__${z}`]=$,ir([z]);else{let C=function(q){f[k].call(this,q)};var T=C;f[O]=Ja(z,e,C,P)}else w&&(e[`__${z}`]=void 0)}else if(k==="style")kn(e,k,$);else if(k==="autofocus")Vo(e,!!$);else if(!l&&(k==="__value"||k==="value"&&$!=null))e.value=e.__value=$;else if(k==="selected"&&v)El(e,$);else{var S=k;u||(S=il(S));var R=S==="defaultValue"||S==="defaultChecked";if($==null&&!l&&!R)if(o[k]=null,S==="value"||S==="checked"){let P=e;const O=t===void 0;if(S==="value"){let z=P.defaultValue;P.removeAttribute(S),P.defaultValue=z,P.value=P.__value=O?z:null}else{let z=P.defaultChecked;P.removeAttribute(S),P.defaultChecked=z,P.checked=O?z:!1}}else e.removeAttribute(k);else R||m.includes(S)&&(l||typeof $!="string")?(e[S]=$,S in o&&(o[S]=Be)):typeof $!="function"&&kn(e,S,$)}}}return f}function Hs(e,t,r=[],n=[],s,i=!1,o=!1){Aa(r,n,l=>{var u=void 0,f={},v=e.nodeName==="SELECT",h=!1;if(ar(()=>{var _=t(...l.map(a)),g=Pl(e,u,_,s,i,o);h&&v&&"value"in _&&$n(e,_.value);for(let w of Object.getOwnPropertySymbols(f))_[w]||We(f[w]);for(let w of Object.getOwnPropertySymbols(_)){var y=_[w];w.description===yo&&(!u||y!==u[w])&&(f[w]&&We(f[w]),f[w]=Qe(()=>ml(e,()=>y))),g[w]=y}u=g}),v){var m=e;Ps(()=>{$n(m,u.value,!0),ni(m)})}h=!0})}function Bn(e){return e.__attributes??={[si]:e.nodeName.includes("-"),[ai]:e.namespaceURI===go}}var Ks=new Map;function ii(e){var t=e.getAttribute("is")||e.nodeName,r=Ks.get(t);if(r)return r;Ks.set(t,r=[]);for(var n,s=e,i=Element.prototype;i!==s;){n=Gi(s);for(var o in n)n[o].set&&r.push(o);s=pa(s)}return r}function Ge(e,t,r=t){var n=new WeakSet;Es(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=es(e)?ts(i):i,r(i),we!==null&&n.add(we),await el(),i!==(i=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=i??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),Lr(t)==null&&e.value&&(r(es(e)?ts(e.value):e.value),we!==null&&n.add(we)),$s(()=>{var s=t();if(e===document.activeElement){var i=mn??we;if(n.has(i))return}es(e)&&s===ts(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function $l(e,t,r=t){Es(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),Lr(t)==null&&r(e.checked),$s(()=>{var n=t();e.checked=!!n})}function es(e){var t=e.type;return t==="number"||t==="range"}function ts(e){return e===""?null:+e}let _n=!1;function kl(e){var t=_n;try{return _n=!1,[e(),_n]}finally{_n=t}}const Tl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ve(e,t,r){return new Proxy({props:e,exclude:t},Tl)}const Al={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(jr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];jr(s)&&(s=s());const i=Xt(s,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(jr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=Xt(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===hr||t===ga)return!1;for(let r of e.props)if(jr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(jr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function _e(...e){return new Proxy({props:e},Al)}function Wr(e,t,r,n){var s=!Dr||(r&fo)!==0,i=(r&ho)!==0,o=(r&po)!==0,l=n,u=!0,f=()=>(u&&(u=!1,l=o?Lr(n):n),l),v;if(i){var h=hr in e||ga in e;v=Xt(e,t)?.set??(h&&t in e?T=>e[t]=T:void 0)}var m,_=!1;i?[m,_]=kl(()=>e[t]):m=e[t],m===void 0&&n!==void 0&&(m=f(),v&&(s&&no(),v(m)));var g;if(s?g=()=>{var T=e[t];return T===void 0?f():(u=!0,T)}:g=()=>{var T=e[t];return T!==void 0&&(l=void 0),T===void 0?l:T},s&&(r&vo)===0)return g;if(v){var y=e.$$legacy;return(function(T,k){return arguments.length>0?((!s||!k||y||_)&&v(k?g():T),T):g()})}var w=!1,S=((r&uo)!==0?On:ws)(()=>(w=!1,g()));i&&a(S);var R=ee;return(function(T,k){if(arguments.length>0){const $=k?a(S):s&&i?wt(T):T;return M(S,$),w=!0,l!==void 0&&(l=$),T}return wr&&w||(R.f&br)!==0?S.v:a(S)})}function oi(e){ke===null&&ba(),Dr&&ke.l!==null?Il(ke).m.push(e):Ho(()=>{const t=Lr(e);if(typeof t=="function")return t})}function Nl(e){ke===null&&ba(),oi(()=>()=>Lr(e))}function Il(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Ml="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Ml);class Cl extends Map{#t=new Map;#r=de(0);#c=de(0);#u=Gt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#a(t){return Gt===this.#u?de(t):tr(t)}has(t){var r=this.#t,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#a(0),r.set(t,n);else return a(this.#r),!1}return a(n),!0}forEach(t,r){this.#s(),super.forEach(t,r)}get(t){var r=this.#t,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#a(0),r.set(t,n);else{a(this.#r);return}}return a(n),super.get(t)}set(t,r){var n=this.#t,s=n.get(t),i=super.get(t),o=super.set(t,r),l=this.#r;if(s===void 0)s=this.#a(0),n.set(t,s),M(this.#c,super.size),qt(l);else if(i!==r){qt(s);var u=l.reactions===null?null:new Set(l.reactions),f=u===null||!s.reactions?.every(v=>u.has(v));f&&qt(l)}return o}delete(t){var r=this.#t,n=r.get(t),s=super.delete(t);return n!==void 0&&(r.delete(t),M(this.#c,super.size),M(n,-1),qt(this.#r)),s}clear(){if(super.size!==0){super.clear();var t=this.#t;M(this.#c,0);for(var r of t.values())M(r,-1);qt(this.#r),t.clear()}}#s(){a(this.#r);var t=this.#t;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#a(0);t.set(r,n)}}for([,n]of this.#t)a(n)}keys(){return a(this.#r),super.keys()}values(){return this.#s(),super.values()}entries(){return this.#s(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return a(this.#c),super.size}}class Rl{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class li{constructor(t){this.generateIdentifier=t,this.kv=new Rl}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class Ol extends li{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function ql(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function Dl(e,t){const r=ql(e);if("find"in r)return r.find(t);const n=r;for(let s=0;s<n.length;s++){const i=n[s];if(t(i))return i}}function Or(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function bn(e,t){return e.indexOf(t)!==-1}function Ys(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class Ll{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return Dl(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const Bl=e=>Object.prototype.toString.call(e).slice(8,-1),ci=e=>typeof e>"u",jl=e=>e===null,Fr=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,cs=e=>Fr(e)&&Object.keys(e).length===0,rr=e=>Array.isArray(e),zl=e=>typeof e=="string",Vl=e=>typeof e=="number"&&!isNaN(e),Wl=e=>typeof e=="boolean",Ul=e=>e instanceof RegExp,en=e=>e instanceof Map,tn=e=>e instanceof Set,ui=e=>Bl(e)==="Symbol",Gl=e=>e instanceof Date&&!isNaN(e.valueOf()),Ql=e=>e instanceof Error,Zs=e=>typeof e=="number"&&isNaN(e),Hl=e=>Wl(e)||jl(e)||ci(e)||Vl(e)||zl(e)||ui(e),Kl=e=>typeof e=="bigint",Yl=e=>e===1/0||e===-1/0,Zl=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),Jl=e=>e instanceof URL,di=e=>e.replace(/\./g,"\\."),rs=e=>e.map(String).map(di).join("."),Zr=e=>{const t=[];let r="";for(let s=0;s<e.length;s++){let i=e.charAt(s);if(i==="\\"&&e.charAt(s+1)==="."){r+=".",s++;continue}if(i==="."){t.push(r),r="";continue}r+=i}const n=r;return t.push(n),t};function Ct(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const fi=[Ct(ci,"undefined",()=>null,()=>{}),Ct(Kl,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Ct(Gl,"Date",e=>e.toISOString(),e=>new Date(e)),Ct(Ql,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Ct(Ul,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Ct(tn,"set",e=>[...e.values()],e=>new Set(e)),Ct(en,"map",e=>[...e.entries()],e=>new Map(e)),Ct(e=>Zs(e)||Yl(e),"number",e=>Zs(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Ct(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Ct(Jl,"URL",e=>e.toString(),e=>new URL(e))];function jn(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const vi=jn((e,t)=>ui(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),Xl=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),hi=jn(Zl,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=Xl[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function pi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const _i=jn(pi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(s=>{n[s]=e[s]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),mi=jn((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),Fl=[_i,vi,mi,hi],Js=(e,t)=>{const r=Ys(Fl,s=>s.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Ys(fi,s=>s.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},gi={};fi.forEach(e=>{gi[e.annotation]=e});const ec=(e,t,r)=>{if(rr(t))switch(t[0]){case"symbol":return vi.untransform(e,t,r);case"class":return _i.untransform(e,t,r);case"custom":return mi.untransform(e,t,r);case"typed-array":return hi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=gi[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},kr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function bi(e){if(bn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(bn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(bn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const tc=(e,t)=>{bi(t);for(let r=0;r<t.length;r++){const n=t[r];if(tn(e))e=kr(e,+n);else if(en(e)){const s=+n,i=+t[++r]==0?"key":"value",o=kr(e,s);switch(i){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},us=(e,t,r)=>{if(bi(t),t.length===0)return r(e);let n=e;for(let i=0;i<t.length-1;i++){const o=t[i];if(rr(n)){const l=+o;n=n[l]}else if(Fr(n))n=n[o];else if(tn(n)){const l=+o;n=kr(n,l)}else if(en(n)){if(i===t.length-2)break;const u=+o,f=+t[++i]==0?"key":"value",v=kr(n,u);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const s=t[t.length-1];if(rr(n)?n[+s]=r(n[+s]):Fr(n)&&(n[s]=r(n[s])),tn(n)){const i=kr(n,+s),o=r(i);i!==o&&(n.delete(i),n.add(o))}if(en(n)){const i=+t[t.length-2],o=kr(n,i);switch(+s==0?"key":"value"){case"key":{const u=r(o);n.set(u,n.get(o)),u!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function ds(e,t,r=[]){if(!e)return;if(!rr(e)){Or(e,(i,o)=>ds(i,t,[...r,...Zr(o)]));return}const[n,s]=e;s&&Or(s,(i,o)=>{ds(i,t,[...r,...Zr(o)])}),t(n,r)}function rc(e,t,r){return ds(t,(n,s)=>{e=us(e,s,i=>ec(i,n,r))}),e}function nc(e,t){function r(n,s){const i=tc(e,Zr(s));n.map(Zr).forEach(o=>{e=us(e,o,()=>i)})}if(rr(t)){const[n,s]=t;n.forEach(i=>{e=us(e,Zr(i),()=>e)}),s&&Or(s,r)}else Or(t,r);return e}const sc=(e,t)=>Fr(e)||rr(e)||en(e)||tn(e)||pi(e,t);function ac(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function ic(e,t){const r={};let n;return e.forEach(s=>{if(s.length<=1)return;t||(s=s.map(l=>l.map(String)).sort((l,u)=>l.length-u.length));const[i,...o]=s;i.length===0?n=o.map(rs):r[rs(i)]=o.map(rs)}),n?cs(r)?[n]:[n,r]:cs(r)?void 0:r}const yi=(e,t,r,n,s=[],i=[],o=new Map)=>{const l=Hl(e);if(!l){ac(e,s,t);const _=o.get(e);if(_)return n?{transformedValue:null}:_}if(!sc(e,r)){const _=Js(e,r),g=_?{transformedValue:_.value,annotations:[_.type]}:{transformedValue:e};return l||o.set(e,g),g}if(bn(i,e))return{transformedValue:null};const u=Js(e,r),f=u?.value??e,v=rr(f)?[]:{},h={};Or(f,(_,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const y=yi(_,t,r,n,[...s,g],[...i,e],o);v[g]=y.transformedValue,rr(y.annotations)?h[g]=y.annotations:Fr(y.annotations)&&Or(y.annotations,(w,S)=>{h[di(g)+"."+S]=w})});const m=cs(h)?{transformedValue:v,annotations:u?[u.type]:void 0}:{transformedValue:v,annotations:u?[u.type,h]:h};return l||o.set(e,m),m};function wi(e){return Object.prototype.toString.call(e).slice(8,-1)}function Xs(e){return wi(e)==="Array"}function oc(e){if(wi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function lc(e,t,r,n,s){const i={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";i==="enumerable"&&(e[t]=r),s&&i==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function fs(e,t={}){if(Xs(e))return e.map(s=>fs(s,t));if(!oc(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((s,i)=>{if(Xs(t.props)&&!t.props.includes(i))return s;const o=e[i],l=fs(o,t);return lc(s,i,l,e,t.nonenumerable),s},{})}class re{constructor({dedupe:t=!1}={}){this.classRegistry=new Ol,this.symbolRegistry=new li(r=>r.description??""),this.customTransformerRegistry=new Ll,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=yi(t,r,this,this.dedupe),s={json:n.transformedValue};n.annotations&&(s.meta={...s.meta,values:n.annotations});const i=ic(r,this.dedupe);return i&&(s.meta={...s.meta,referentialEqualities:i}),s}deserialize(t){const{json:r,meta:n}=t;let s=fs(r);return n?.values&&(s=rc(s,n.values,this)),n?.referentialEqualities&&(s=nc(s,n.referentialEqualities)),s}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}re.defaultInstance=new re;re.serialize=re.defaultInstance.serialize.bind(re.defaultInstance);re.deserialize=re.defaultInstance.deserialize.bind(re.defaultInstance);re.stringify=re.defaultInstance.stringify.bind(re.defaultInstance);re.parse=re.defaultInstance.parse.bind(re.defaultInstance);re.registerClass=re.defaultInstance.registerClass.bind(re.defaultInstance);re.registerSymbol=re.defaultInstance.registerSymbol.bind(re.defaultInstance);re.registerCustom=re.defaultInstance.registerCustom.bind(re.defaultInstance);re.allowErrorProps=re.defaultInstance.allowErrorProps.bind(re.defaultInstance);re.serialize;re.deserialize;re.stringify;re.parse;re.registerClass;re.registerCustom;re.registerSymbol;re.allowErrorProps;function cc(e="your-main-id"){return typeof window>"u"?e:new URLSearchParams(window.location.search).get("listId")||e}function uc(e,t){return`${e}_${t}`}const dc=typeof window<"u"?window:void 0;function fc(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class vc{#t;#r;constructor(t={}){const{window:r=dc,document:n=r?.document}=t;r!==void 0&&(this.#t=n,this.#r=Ta(s=>{const i=Ws(r,"focusin",s),o=Ws(r,"focusout",s);return()=>{i(),o()}}))}get current(){return this.#r?.(),this.#t?fc(this.#t):null}}new vc;function hc(e){return typeof e=="function"}function pc(e,t){if(hc(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function _c(e,t){let r=de(null);const n=N(()=>pc(t,250));function s(...i){if(a(r))a(r).timeout&&clearTimeout(a(r).timeout);else{let o,l;const u=new Promise((f,v)=>{o=f,l=v});M(r,{timeout:null,runner:null,promise:u,resolve:o,reject:l},!0)}return a(r).runner=async()=>{if(!a(r))return;const o=a(r);M(r,null);try{o.resolve(await e.apply(this,i))}catch(l){o.reject(l)}},a(r).timeout=setTimeout(a(r).runner,a(n)),a(r).promise}return s.cancel=async()=>{(!a(r)||a(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||a(r).timeout===null)||(clearTimeout(a(r).timeout),a(r).reject("Cancelled"),M(r,null))},s.runScheduledNow=async()=>{(!a(r)||!a(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||!a(r).timeout)||(clearTimeout(a(r).timeout),a(r).timeout=null,await a(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!a(r)?.timeout}}),s}function mc(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class b{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}b.equal=(e,t)=>new b("equal",e,t).toString();b.notEqual=(e,t)=>new b("notEqual",e,t).toString();b.lessThan=(e,t)=>new b("lessThan",e,t).toString();b.lessThanEqual=(e,t)=>new b("lessThanEqual",e,t).toString();b.greaterThan=(e,t)=>new b("greaterThan",e,t).toString();b.greaterThanEqual=(e,t)=>new b("greaterThanEqual",e,t).toString();b.isNull=e=>new b("isNull",e).toString();b.isNotNull=e=>new b("isNotNull",e).toString();b.between=(e,t,r)=>new b("between",e,[t,r]).toString();b.startsWith=(e,t)=>new b("startsWith",e,t).toString();b.endsWith=(e,t)=>new b("endsWith",e,t).toString();b.select=e=>new b("select",void 0,e).toString();b.search=(e,t)=>new b("search",e,t).toString();b.orderDesc=e=>new b("orderDesc",e).toString();b.orderAsc=e=>new b("orderAsc",e).toString();b.orderRandom=()=>new b("orderRandom").toString();b.cursorAfter=e=>new b("cursorAfter",void 0,e).toString();b.cursorBefore=e=>new b("cursorBefore",void 0,e).toString();b.limit=e=>new b("limit",void 0,e).toString();b.offset=e=>new b("offset",void 0,e).toString();b.contains=(e,t)=>new b("contains",e,t).toString();b.notContains=(e,t)=>new b("notContains",e,t).toString();b.notSearch=(e,t)=>new b("notSearch",e,t).toString();b.notBetween=(e,t,r)=>new b("notBetween",e,[t,r]).toString();b.notStartsWith=(e,t)=>new b("notStartsWith",e,t).toString();b.notEndsWith=(e,t)=>new b("notEndsWith",e,t).toString();b.createdBefore=e=>new b("createdBefore",void 0,e).toString();b.createdAfter=e=>new b("createdAfter",void 0,e).toString();b.createdBetween=(e,t)=>new b("createdBetween",void 0,[e,t]).toString();b.updatedBefore=e=>new b("updatedBefore",void 0,e).toString();b.updatedAfter=e=>new b("updatedAfter",void 0,e).toString();b.updatedBetween=(e,t)=>new b("updatedBetween",void 0,[e,t]).toString();b.or=e=>new b("or",void 0,e.map(t=>JSON.parse(t))).toString();b.and=e=>new b("and",void 0,e.map(t=>JSON.parse(t))).toString();b.distanceEqual=(e,t,r,n=!0)=>new b("distanceEqual",e,[[t,r,n]]).toString();b.distanceNotEqual=(e,t,r,n=!0)=>new b("distanceNotEqual",e,[[t,r,n]]).toString();b.distanceGreaterThan=(e,t,r,n=!0)=>new b("distanceGreaterThan",e,[[t,r,n]]).toString();b.distanceLessThan=(e,t,r,n=!0)=>new b("distanceLessThan",e,[[t,r,n]]).toString();b.intersects=(e,t)=>new b("intersects",e,[t]).toString();b.notIntersects=(e,t)=>new b("notIntersects",e,[t]).toString();b.crosses=(e,t)=>new b("crosses",e,[t]).toString();b.notCrosses=(e,t)=>new b("notCrosses",e,[t]).toString();b.overlaps=(e,t)=>new b("overlaps",e,[t]).toString();b.notOverlaps=(e,t)=>new b("notOverlaps",e,[t]).toString();b.touches=(e,t)=>new b("touches",e,[t]).toString();b.notTouches=(e,t)=>new b("notTouches",e,[t]).toString();var xi,Si;class rn{static custom(t){return t}static unique(t=7){const r=mc(rn,xi,"m",Si).call(rn);let n="";for(let s=0;s<t;s++){const i=Math.floor(Math.random()*16).toString(16);n+=i}return r+n}}xi=rn,Si=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Fs;(function(e){e.Totp="totp"})(Fs||(Fs={}));var ea;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(ea||(ea={}));var ta;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(ta||(ta={}));var ra;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(ra||(ra={}));var na;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(na||(na={}));var sa;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(sa||(sa={}));var aa;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(aa||(aa={}));var ia;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(ia||(ia={}));var oa;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(oa||(oa={}));async function xr(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function gc(e,t={}){const{limit:r=100,orderBy:n="productName",orderDirection:s="asc"}=t;try{const{databases:i,config:o}=await xr(),l=await i.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[b.equal("mainId",e),b.orderAsc(n==="productName"?"productName":"$updatedAt"),b.limit(r),b.select(["*","purchases.*"])]),f=l.documents;return console.log(`[Appwrite Interactions] ${l.documents.length} produits chargés avec achats`),f}catch(i){console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${e}:`,i);const o=i instanceof Error?i.message:"Erreur lors du chargement des produits";throw new Error(`Échec du chargement des produits: ${o}`)}}async function vs(e){try{const{databases:t,config:r}=await xr();return(await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.products,[b.equal("$id",e),b.select(["*","purchases.*"])])).documents}catch(t){return console.error("[Appwrite Interactions] Erreur chargement produits:",t),[]}}async function bc(e,t){const{lastSync:r,limit:n=100}=t;if(!r)return console.log("[Appwrite Interactions] Aucune dernière sync fournie, retour vide pour sync hybride"),{allProducts:[]};try{const{databases:s,config:i}=await xr(),[o,l]=await Promise.all([s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.select(["*","purchases.*"]),b.limit(n)]),s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.purchases,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.select(["products.$id"]),b.limit(n)])]);let u=o.documents;const f=new Set(u.map(v=>v.$id));if(l.documents.length>0){const v=l.documents.flatMap(h=>Array.isArray(h.products)?h.products.map(m=>m.$id):[]).filter((h,m,_)=>_.indexOf(h)===m).filter(h=>!f.has(h));if(console.log(`[Appwrite Interactions] Affected products from purchases: ${v.length}`),console.log("[Appwrite Interactions] Affected product IDs:",v),v.length>0)try{console.log("[Appwrite Interactions] Appel loadProductsListByIds avec IDs:",v);const h=await vs(v);console.log(`[Appwrite Interactions] Reloaded ${h.length} products:`,JSON.stringify(h,null,2)),u=[...u,...h]}catch(h){throw console.error("[Appwrite Interactions] Erreur lors du rechargement des products:",h),h}}return u.length>0&&console.log(`[Appwrite Interactions] Sync total: ${u.length} produits synchronisés`),{allProducts:u}}catch(s){console.error(`[Appwrite Interactions] Erreur sync pour mainId ${e}:`,s);const i=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function Ts(e,t){try{const{databases:r,config:n}=await xr();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function yc(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await Ts(e,{store:r});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function la(e,t){return Ts(e,{who:t})}async function ca(e,t){return Ts(e,{stockReel:t})}async function wc(e){try{const{databases:t,config:r}=await xr(),i=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:i.$id,status:"active"},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,rn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function xc(e,t){try{const{databases:r,config:n}=await xr(),s=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),i={...t,products:t.products||s.products},o=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,i);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Sc(e){if(!e?.length)return[];try{const{databases:t,config:r}=await xr(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[b.equal("$id",e),b.select(["*","products"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Ec(e,t={}){let r=null;const n=i=>{const{events:o,payload:l}=i;if(!l)return;const u=o.some(_=>_.includes("products.")),f=o.some(_=>_.includes("purchases.")),v=o.some(_=>_.includes(".create")),h=o.some(_=>_.includes(".update")),m=o.some(_=>_.includes(".delete"));if(u){const _=l;v&&t.onProductCreate?t.onProductCreate(_):h&&t.onProductUpdate?t.onProductUpdate(_):m&&t.onProductDelete&&t.onProductDelete(_.$id)}else if(f){const _=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(_):h&&t.onPurchaseUpdate?t.onPurchaseUpdate(_):m&&t.onPurchaseDelete&&t.onPurchaseDelete(_.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),t.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),t.onError?.(i)}})(),()=>{r&&(r(),r=null)}}const ua=1e3,Pc=500;class $c{#t=new Cl;#r=de(null);#c=de(!1);#u=de(!1);#a=de(null);#s=de(!1);#i=de(!1);#n=de(null);#o=null;#d=null;#f=null;#l=null;#e=de(wt({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return a(this.#e)}get currentMainId(){return a(this.#r)}get isInitialized(){return a(this.#c)}get loading(){return a(this.#u)}get error(){return a(this.#a)}get syncing(){return a(this.#s)}get realtimeConnected(){return a(this.#i)}get lastSync(){return a(this.#n)}#v=N(()=>Array.from(this.#t.values()));get enrichedProducts(){return a(this.#v)}set enrichedProducts(t){M(this.#v,t)}#b=N(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return a(this.#b)}set stats(t){M(this.#b,t)}#y=N(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return a(this.#y)}set uniqueStores(t){M(this.#y,t)}#x=N(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return a(this.#x)}set uniqueWho(t){M(this.#x,t)}#S=N(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return a(this.#S)}set uniqueProductTypes(t){M(this.#S,t)}#p=N(()=>this.enrichedProducts.filter(t=>this.#R(t)));get filteredProducts(){return a(this.#p)}set filteredProducts(t){M(this.#p,t)}#_=N(()=>{const t=this.filteredProducts;return a(this.#e).groupBy==="none"?{"":t}:Object.groupBy(t,r=>a(this.#e).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return a(this.#_)}set filteredGroupedProducts(t){M(this.#_,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(a(this.#c)&&a(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),M(this.#r,t,!0),this.#o=uc("products-enriched",t);try{await this.#w(),this.#t.size===0?await this.#T(t):await this.#I(),M(this.#c,!0);const r=this.#C();this.#f=Ec(t,r)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw M(this.#a,n,!0),console.error("[ProductsStore]",n,r),r}}async#w(){if(this.#o)try{const t=localStorage.getItem(this.#o);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n}=re.parse(t);r.forEach(([s,i])=>this.#t.set(s,i)),M(this.#n,n,!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}#E(){if(this.#o)try{const t={lastSync:a(this.#n),products:Array.from(this.#t.entries())};localStorage.setItem(this.#o,re.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}async#T(t){M(this.#u,!0),M(this.#a,null);try{const n=await gc(t,{limit:ua,orderBy:"productName",orderDirection:"asc"});n.forEach(s=>{const i=this.#m(s);this.#t.set(s.$id,i)}),this.#h(),this.#E(),console.log(`[ProductsStore] ${n.length} produits chargés et enrichis`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors du chargement";throw M(this.#a,n,!0),console.error("[ProductsStore]",n,r),r}finally{M(this.#u,!1)}}async#I(){if(!(!a(this.#n)||!a(this.#r))){M(this.#s,!0);try{const t={lastSync:a(this.#n),limit:ua},{allProducts:r}=await bc(a(this.#r),t),n=new Map(r.map(s=>[s.$id,s]));r.length>0&&(r.forEach(s=>{const i=this.#m(s);this.#t.set(s.$id,i)}),console.log(`[ProductsStore] ${r.length} produits appliqués du sync`)),r.length>0&&(this.#h(),this.#E(),console.log(`[ProductsStore] Sync complétée: ${r.length} produits`))}catch(t){console.error("[ProductsStore] Erreur sync:",t)}finally{M(this.#s,!1)}}}#m(t){const r=this.#q(t.purchases??[]),n=t.totalNeededConsolidated?this.#O(t.totalNeededConsolidated):[],{numeric:s,display:i}=this.#D(n,r);return{...t,storeInfo:t.store?this.#$(t.store):null,totalNeededArray:n,totalPurchasesArray:r,recipesArray:this.#$(t.recipesOccurrences)??[],stockArray:this.#$(t.stockReel)??[],missingQuantityArray:s,displayTotalNeeded:this.#N(n),displayTotalPurchases:this.#N(r),displayMissingQuantity:i}}#P(t){const r=this.#m(t);this.#t.set(t.$id,r)}#M(t){this.#t.delete(t)}async#L(t){if(!t?.length)return;const r=new Set(t.filter(n=>n.products?.length>0).flatMap(n=>n.products).map(n=>typeof n=="string"?n:n.$id).filter(Boolean));if(r.size===0){console.log("[ProductsStore] Aucun produit affecté par ces purchases");return}try{const n=await vs(Array.from(r));if(n.length===0){console.warn("[ProductsStore] Impossible de charger les produits affectés");return}n.forEach(s=>{const i=this.#m(s);this.#t.set(s.$id,i)}),console.log(`[ProductsStore] ${t.length} purchases appliqués à ${n.length} produit(s)`)}catch(n){console.error("[ProductsStore] Erreur application purchases:",n)}}async#A(t){if(!t?.length)return;const r=new Set,n=[],s=t.filter(o=>o.products?.length>0);if(n.push(...t.filter(o=>!o.products?.length)),s.flatMap(o=>o.products).map(o=>typeof o=="string"?o:o.$id).filter(Boolean).forEach(o=>r.add(o)),n.length>0){console.log(`[ProductsStore] ${n.length} purchases sans relation products, rechargement ciblé depuis Appwrite...`);try{(await Sc(n.map(l=>l.$id))).forEach(l=>{if(l.products?.length>0){l.products.map(v=>typeof v=="string"?v:v.$id).filter(Boolean).forEach(v=>r.add(v));const f=t.findIndex(v=>v.$id===l.$id);f>=0&&(t[f]=l)}})}catch(o){console.error("[ProductsStore] Erreur rechargement ciblé des purchases:",o)}}if(r.size!==0){for(const o of r){const l=this.#t.get(o);if(l){let u=l.purchases||[];t.forEach(v=>{const h=u.findIndex(m=>m.$id===v.$id);h>=0?u[h]=v:u.push(v)});const f=this.#m({...l,purchases:u});this.#t.set(o,f)}}try{(await vs(Array.from(r))).forEach(l=>{const u=this.#m(l);this.#t.set(l.$id,u)})}catch(o){console.warn("[ProductsStore] Erreur rechargement async:",o)}}}#C(){return{onProductCreate:t=>{this.#P(t),this.#h(),this.#g()},onProductUpdate:t=>{this.#P(t),this.#h(),this.#g()},onProductDelete:t=>{this.#M(t),this.#h(),this.#g()},onPurchaseCreate:t=>{this.#A([t]),this.#h(),this.#g()},onPurchaseUpdate:t=>{this.#A([t]),this.#h(),this.#g()},onPurchaseDelete:t=>{Array.from(this.#t.values()).filter(n=>n.purchases?.some(s=>s.$id===t)).forEach(n=>{this.#P(n)}),this.#h(),this.#g()},onConnect:()=>{M(this.#i,!0)},onDisconnect:()=>{M(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#g(){this.#l&&clearTimeout(this.#l),this.#l=setTimeout(()=>{this.#E(),this.#l=null},Pc)}#h(){M(this.#n,new Date().toISOString(),!0)}#R(t){if(a(this.#e).searchQuery.trim()){const r=a(this.#e).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(a(this.#e).selectedStores.length>0&&(!t.storeInfo?.storeName||!a(this.#e).selectedStores.includes(t.storeInfo.storeName))||a(this.#e).selectedWho.length>0&&(!t.who||!t.who.some(r=>a(this.#e).selectedWho.includes(r)))||a(this.#e).selectedProductTypes.length>0&&(!t.productType||!a(this.#e).selectedProductTypes.includes(t.productType))||a(this.#e).selectedTemperatures.length>0&&!(a(this.#e).selectedTemperatures.includes("frais")&&t.pFrais||a(this.#e).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=_c(t=>{a(this.#e).searchQuery=t},()=>500);toggleProductType(t){const r=a(this.#e).selectedProductTypes.indexOf(t);r>-1?a(this.#e).selectedProductTypes.splice(r,1):a(this.#e).selectedProductTypes.push(t)}toggleTemperature(t){const r=a(this.#e).selectedTemperatures.indexOf(t);r>-1?a(this.#e).selectedTemperatures.splice(r,1):a(this.#e).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){a(this.#e).selectedProductTypes=[],a(this.#e).selectedTemperatures=[]}setGroupBy(t){a(this.#e).groupBy=t}toggleStore(t){const r=a(this.#e).selectedStores.indexOf(t);r>-1?a(this.#e).selectedStores.splice(r,1):a(this.#e).selectedStores.push(t)}toggleWho(t){const r=a(this.#e).selectedWho.indexOf(t);r>-1?a(this.#e).selectedWho.splice(r,1):a(this.#e).selectedWho.push(t)}clearStoreFilters(){a(this.#e).selectedStores=[]}clearWhoFilters(){a(this.#e).selectedWho=[]}handleSort(t){a(this.#e).sortColumn===t?a(this.#e).sortDirection=a(this.#e).sortDirection==="asc"?"desc":"asc":(a(this.#e).sortColumn=t,a(this.#e).sortDirection="asc")}clearFilters(){M(this.#e,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return a(this.#e).sortColumn?[...t].sort((r,n)=>{let s=r[a(this.#e).sortColumn],i=n[a(this.#e).sortColumn];return a(this.#e).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,i=parseFloat(i)||0):a(this.#e).sortColumn==="purchases"&&(s=r.purchases?.length||0,i=n.purchases?.length||0),s<i?a(this.#e).sortDirection==="asc"?-1:1:s>i?a(this.#e).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#t.get(t)??null}get enrichedProductsCount(){return this.#t.size}async forceReload(t){this.#t.clear(),M(this.#n,null),await this.#T(t)}clearCache(){this.#t.clear(),M(this.#n,null),this.#o&&localStorage.removeItem(this.#o),this.#d&&localStorage.removeItem(this.#d),console.log("[ProductsStore] Cache vidé")}destroy(){this.#f?.(),this.#f=null,this.#l&&(clearTimeout(this.#l),this.#l=null),console.log("[ProductsStore] Ressources nettoyées")}#$(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(r){return console.warn("[ProductsStore] Erreur parsing JSON:",r),null}}#O(t){try{return JSON.parse(t).map(n=>({quantity:parseFloat(n.quantity),unit:n.unit})).filter(n=>!isNaN(n.quantity))}catch(r){return console.error("[ProductsStore] Erreur parsing NumericQuantity:",r),[]}}#q(t){if(!t?.length)return[];const r=new Map;return t.forEach(n=>{if(!n.quantity||!n.unit)return;const s=parseFloat(n.quantity);if(isNaN(s))return;const i=r.get(n.unit)||0;r.set(n.unit,i+s)}),Array.from(r.entries()).map(([n,s])=>({quantity:s,unit:n}))}#D(t,r){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!r?.length){const u=t.map(f=>this.#k(f.quantity.toString(),f.unit)).join(" et ");return{numeric:t,display:u}}const n=new Map,s=new Map;t.forEach(u=>{const f=parseFloat(u.quantity);isNaN(f)||n.set(u.unit,(n.get(u.unit)||0)+f)}),r.forEach(u=>{s.set(u.unit,(s.get(u.unit)||0)+u.quantity)});const i=[],o=[];n.forEach((u,f)=>{const v=s.get(f)||0,h=u-v;h>0&&(i.push({quantity:h,unit:f}),o.push(this.#k(h.toString(),f)))});const l=o.length>0?o.join(" et "):"✅ Complet";return{numeric:i,display:l}}#N(t){return t?.length?t.map(r=>this.#k(r.quantity.toString(),r.unit)).join(" et "):"-"}#k(t,r){const n=parseFloat(t);if(isNaN(n))return`${t} ${r}`;if((r==="gr."||r==="ml")&&n>=1e3){const s=n/1e3,i=r==="gr."?"kg":"l.";let l=(Math.round(s*100)/100).toString();return l.endsWith(",0")&&(l=l.slice(0,-2)),l.endsWith(",00")&&(l=l.slice(0,-3)),`${l} ${i}`}if(!["gr.","ml","kg","l."].includes(r)){let i=(Math.round(n*10)/10).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),`${i} ${r}`}return`${n} ${r}`}}const D=new $c;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const kc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Tc=ul("<svg><!><!></svg>");function me(e,t){Y(t,!0);const r=Wr(t,"color",3,"currentColor"),n=Wr(t,"size",3,24),s=Wr(t,"strokeWidth",3,2),i=Wr(t,"absoluteStrokeWidth",3,!1),o=Wr(t,"iconNode",19,()=>[]),l=ve(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=Tc();Hs(u,h=>({...kc,...l,width:n(),height:n(),stroke:r(),"stroke-width":h,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>i()?Number(s())*24/Number(n()):s()]);var f=c(u);et(f,17,o,Fa,(h,m)=>{var _=N(()=>ma(a(m),2));let g=()=>a(_)[0],y=()=>a(_)[1];var w=H(),S=W(w);_l(S,g,!0,(R,T)=>{Hs(R,()=>({...y()}))}),p(h,w)});var v=d(f);fe(v,()=>t.children??oe),p(e,u),Z()}function hs(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];me(e,_e({name:"archive"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Ac(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];me(e,_e({name:"bean"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Nc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];me(e,_e({name:"beef"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Ic(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];me(e,_e({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Mc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];me(e,_e({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Cc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];me(e,_e({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Rc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];me(e,_e({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Oc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];me(e,_e({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function qc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];me(e,_e({name:"combine"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Dc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];me(e,_e({name:"egg"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function ps(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];me(e,_e({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function da(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];me(e,_e({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Lc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];me(e,_e({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Bc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];me(e,_e({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function jc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];me(e,_e({name:"log-in"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function yn(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];me(e,_e({name:"package"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function zc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];me(e,_e({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Vc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];me(e,_e({name:"save"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Wc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];me(e,_e({name:"search"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function wn(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];me(e,_e({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Tn(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];me(e,_e({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function xn(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];me(e,_e({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Qr(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];me(e,_e({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function nn(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];me(e,_e({name:"store"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Ei(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];me(e,_e({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Uc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];me(e,_e({name:"user"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function An(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];me(e,_e({name:"users"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function Gc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];me(e,_e({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}function xt(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];me(e,_e({name:"x"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=H(),l=W(o);fe(l,()=>t.children??oe),p(s,o)},$$slots:{default:!0}})),Z()}const Dt=wt({product:{id:"",isOpen:!1,tab:"recettes"}});function Qc(e,t){Dt.product.tab=e,Dt.product.isOpen=!0,Dt.product.id=t}function fa(){Dt.product.isOpen=!1,Dt.product.tab="",Dt.product.id=""}let Ur=()=>localStorage.getItem("appwrite-user-name")||"";function Sn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Ac};case"animaux":return{displayName:"Viandes et Poissons",icon:Nc};case"legumes":return{displayName:"Fruits et Légumes",icon:Mc};case"sucres":return{displayName:"Sucrées",icon:Ic};case"lof":return{displayName:"L.O.F",icon:Dc};case"autres":return{displayName:"Autres",icon:Cc};case"epices":return{displayName:"Assaisonnements",icon:Lc};case"frais":return{displayName:"Produits Frais",icon:zc};default:return{displayName:e,icon:yn}}}function va(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Pi(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function sn(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Hc(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function Kc(e,t){return t.sortColumn?[...e].sort((r,n)=>{let s=r[t.sortColumn],i=n[t.sortColumn];return s<i?t.sortDirection==="asc"?-1:1:s>i?t.sortDirection==="asc"?1:-1:0}):e}function ln(e){let t=de(!1),r=de(null),n=de("recettes");const s=wt({purchase:{quantity:e.missingQuantityArray[0].quantity||0,unit:e.totalNeededArray[0]?.unit||"",store:e.storeInfo?.storeName||"",who:Ur()||"",price:null,notes:""},stock:{quantity:0,unit:e.totalNeededArray[0]?.unit||"",notes:"",dateTime:new Date().toISOString()},store:{name:e.storeInfo?.storeName||null,comment:e.storeInfo?.storeComment||null},who:{name:Ur()||""}}),i=N(()=>e?.recipesArray||[]),o=N(()=>e?.who||[]),l=N(()=>e?.stockArray||[]),u=N(()=>e?.purchases||[]);let f=wt({purchase:{quantity:0,unit:"",store:"",who:"",price:null,notes:""},store:e.storeInfo||{storeName:"",storeComment:""},whoList:[]}),v=de(null);async function h(C){M(t,!0),M(r,null);try{return await C()}catch(q){return M(r,q instanceof Error?q.message:"Une erreur est survenue",!0),console.error("[ProductModalState] Erreur:",q),null}finally{M(t,!1)}}function m(C,q){const ne=new CustomEvent("toast",{detail:{type:C,message:q}});window.dispatchEvent(ne)}function _(){s.purchase={quantity:e.missingQuantityArray[0].quantity||0,unit:e.totalNeededArray[0]?.unit||"",store:e.storeInfo?.storeName||"",who:Ur()||"",price:null,notes:""},s.stock={quantity:0,unit:e.totalNeededArray[0]?.unit||"",notes:"",dateTime:new Date().toISOString()},f.purchase={quantity:0,unit:e.totalNeededArray[0]?.unit||"",store:e.storeInfo?.storeName||"",who:Ur()||"",price:null,notes:""}}async function g(){await h(async()=>{if(!s.purchase.quantity||!s.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!D||!D.currentMainId)throw new Error("Une erreur est survenue");const{quantity:C,unit:q}=va(s.purchase.quantity,s.purchase.unit);await wc({products:[e.$id],mainId:D.currentMainId,unit:q,quantity:C,store:s.purchase.store||null,who:s.purchase.who||null,notes:s.purchase.notes||"",price:s.purchase.price||null})&&(_(),m("success","Achat ajouté avec succès"))})}function y(C){f.purchase={...C},M(v,C.$id,!0),console.log("startEditPurchase",C)}function w(){f.purchase={$id:"",quantity:0,unit:e.totalNeededArray[0]?.unit||"",store:e.storeInfo?.storeName||"",who:Ur()||"",price:null,notes:"",$createdAt:"",$updatedAt:"",$permissions:[]},M(v,null)}async function S(){console.log("savePurchase",f.purchase),!(!f.purchase||!f.purchase.$id)&&await h(async()=>{const{quantity:C,unit:q}=va(f.purchase.quantity,f.purchase.unit),ne={unit:q,quantity:C,store:f.purchase?.store||null,who:f.purchase?.who||null,notes:f.purchase?.notes||"",price:f.purchase?.price||null};await xc(f.purchase.$id,ne)&&(M(v,null),m("success","Achat modifié avec succès"))})}async function R(C){const q=a(u).find(ne=>ne.$id===C);confirm(`Êtes-vous sûr de vouloir supprimer cet achat (${q?.quantity} ${q?.unit}) ?`)&&await h(async()=>{await R(C),m("success","Achat supprimé avec succès")})}async function T(){await h(async()=>{if(!s.stock.quantity||!s.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const C={quantity:s.stock.quantity.toString(),unit:s.stock.unit,notes:s.stock.notes||"",dateTime:s.stock.dateTime||new Date().toISOString()},q=[...a(l),C];await ca(e.$id,JSON.stringify(q))&&(s.stock.quantity=null,s.stock.notes="",s.stock.dateTime=new Date().toISOString(),m("success","Relevé de stock ajouté avec succès"))})}async function k(C){confirm("Êtes-vous sûr de vouloir supprimer ce relevé de stock ?")&&await h(async()=>{const q=a(l).filter((se,U)=>U!==C);await ca(e.$id,JSON.stringify(q))&&m("success","Relevé de stock supprimé avec succès")})}async function $(C){C.trim()&&await h(async()=>{const q=C.trim();if(a(o).includes(q))throw new Error("Ce volontaire est déjà ajouté");const ne=[...a(o),q];await la(e.$id,ne)&&m("success","Volontaire ajouté avec succès")})}async function P(C){confirm(`Retirer ${C} de la liste des volontaires ?`)&&await h(async()=>{const q=a(o).filter(se=>se!==C);await la(e.$id,q)&&m("success","Volontaire retiré avec succès")})}async function O(C){await h(async()=>{await yc(e.$id,C)&&m("success","Magasin mis à jour avec succès")})}function z(C){M(n,C,!0)}return{get loading(){return a(t)},get error(){return a(r)},get currentTab(){return a(n)},get editingPurchaseId(){return a(v)},forms:s,edit:f,get recipes(){return a(i)},get whoList(){return a(o)},get stockEntries(){return a(l)},get purchasesList(){return a(u)},addPurchase:g,startEditPurchase:y,cancelEditPurchase:w,updateEditedPurchase:S,deletePurchase:R,addStock:T,deleteStock:k,addVolunteer:$,removeVolunteer:P,updateStore:O,resetForms:_,setCurrentTab:z,formatQuantity:Pi,formatDate:sn,formatDisplayQuantity:Hc}}function Yc(e,t){a(t)?.cancelEditPurchase()}async function Zc(e,t,r){a(t)&&await a(r).updateEditedPurchase()}async function Jc(e,t){await a(t)?.addPurchase()}var Xc=x('<span class="loading loading-spinner loading-sm"></span>'),Fc=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),eu=x('<span class="loading loading-spinner loading-sm"></span>'),tu=x('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input input-bordered w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input input-bordered w-24"/></td><td><input type="text" class="input input-bordered w-20"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="1" class="input input-bordered w-16"/></td><td><input type="text" class="input input-bordered w-24"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),ru=(e,t,r)=>t(a(r)),nu=(e,t,r)=>t(a(r).$id),su=x('<span class="loading loading-spinner loading-sm"></span>'),au=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),iu=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),ou=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"><div class="form-control"><label for="purchase-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="purchase-quantity" type="number" step="0.01" class="input input-bordered validator" required/></div> <div class="form-control"><label for="purchase-unit" class="label"><span class="label-text">Unité</span></label> <select id="purchase-unit" class="select select-bordered validator" required><option disabled selected>Sélectionner</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></div> <div class="form-control"><label for="purchase-store" class="label"><span class="label-text">Magasin</span></label> <input id="purchase-store" type="text" class="input input-bordered" placeholder="Ex: Marché"/></div> <div class="form-control"><label for="purchase-who" class="label"><span class="label-text">Qui a acheté ?</span></label> <input id="purchase-who" type="text" class="input input-bordered" placeholder="Votre nom"/></div> <div class="form-control"><label for="purchase-price" class="label"><span class="label-text">Prix (€)</span></label> <input id="purchase-price" type="number" step="1" class="input input-bordered" placeholder="0.00"/></div> <div class="form-control"><label for="purchase-notes" class="label"><span class="label-text">Notes</span></label> <input id="purchase-notes" type="text" class="input input-bordered" placeholder="Promotion, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function lu(e,t){Y(t,!0);const r=N(()=>ln(t.product)),n=N(()=>a(r).purchasesList),s=N(()=>a(r).loading??!1),i=N(()=>a(r).forms.purchase),o=N(()=>a(r)?.edit.purchase),l=N(()=>a(r)?.editingPurchaseId??null),u=N(()=>a(r)&&a(i).quantity!==null&&a(i).quantity!==0&&a(i).unit?.trim()!==""),f=N(()=>a(r)&&a(o).quantity!==null&&a(o).quantity!==0&&a(o).unit?.trim()!=="");function v(y){a(r)?.startEditPurchase(y)}async function h(y){await a(r)?.deletePurchase(y)}var m=H(),_=W(m);{var g=y=>{var w=ou(),S=c(w),R=c(S);Tn(R,{class:"w-5 h-5"});var T=d(S,2),k=c(T),$=d(c(k),2),P=c($),O=d(c(P),2),z=d(P,2),C=d(c(z),2),q=c(C);q.value=q.__value="";var ne=d(q);ne.value=ne.__value="kg";var se=d(ne);se.value=se.__value="gr.";var U=d(se);U.value=U.__value="l.";var E=d(U);E.value=E.__value="ml";var V=d(E);V.value=V.__value="unité";var le=d(V);le.value=le.__value="bottes";var he=d(z,2),ye=d(c(he),2),G=d(he,2),L=d(c(G),2),ce=d(G,2),Re=d(c(ce),2),Ke=d(ce,2),xe=d(c(Ke),2),Q=d($,2),ue=c(Q);ue.__click=[Jc,r];var Te=c(ue);{var je=X=>{var Ye=Xc();p(X,Ye)},$e=X=>{var Ye=ut("Ajouter l'achat");p(X,Ye)};A(Te,X=>{a(s)?X(je):X($e,!1)})}var Ne=d(T,2);{var Ee=X=>{var Ye=Fc(),ft=c(Ye);Tn(ft,{class:"w-12 h-12 mx-auto mb-2"}),p(X,Ye)},rt=X=>{var Ye=iu(),ft=c(Ye),Bt=d(c(ft));et(Bt,21,()=>a(n),Fa,(Kt,Oe)=>{var ze=H(),jt=W(ze);{var Sr=Nt=>{var B=tu(),ae=c(B),be=c(ae),Ze=c(be),vt=d(Ze,2),Ie=c(vt);Ie.value=Ie.__value="kg";var ht=d(Ie);ht.value=ht.__value="gr.";var qe=d(ht);qe.value=qe.__value="l.";var Je=d(qe);Je.value=Je.__value="ml";var nt=d(Je);nt.value=nt.__value="unité";var De=d(nt);De.value=De.__value="bottes";var Xe=d(ae),ot=c(Xe),Et=d(Xe),Pt=c(Et),Ve=d(Et),$t=c(Ve),pt=d(Ve),It=c(pt),_t=d(pt),or=c(_t),st=d(_t),zt=c(st),lr=c(zt);lr.__click=[Zc,f,r];var zn=c(lr);{var K=ie=>{var lt=eu();p(ie,lt)},pe=ie=>{Vc(ie,{class:"w-3 h-3"})};A(zn,ie=>{a(s)?ie(K):ie(pe,!1)})}var kt=d(lr,2);kt.__click=[Yc,r];var mt=c(kt);xt(mt,{class:"w-3 h-3"}),j(ie=>{I($t,ie),lr.disabled=a(s)||!a(f)},[()=>sn(a(Oe).$createdAt)]),Ge(Ze,()=>a(o).quantity,ie=>a(o).quantity=ie),ls(vt,()=>a(o).unit,ie=>a(o).unit=ie),Ge(ot,()=>a(o).store,ie=>a(o).store=ie),Ge(Pt,()=>a(o).who,ie=>a(o).who=ie),Ge(It,()=>a(o).price,ie=>a(o).price=ie),Ge(or,()=>a(o).notes,ie=>a(o).notes=ie),p(Nt,B)},Br=Nt=>{var B=au(),ae=c(B),be=c(ae),Ze=d(ae),vt=c(Ze),Ie=d(Ze),ht=c(Ie),qe=d(Ie),Je=c(qe),nt=d(qe),De=c(nt),Xe=d(nt),ot=c(Xe),Et=d(Xe),Pt=c(Et),Ve=c(Pt);Ve.__click=[ru,v,Oe];var $t=c(Ve);Qr($t,{class:"w-4 h-4"});var pt=d(Ve,2);pt.__click=[nu,h,Oe];var It=c(pt);{var _t=st=>{var zt=su();p(st,zt)},or=st=>{xt(st,{class:"w-4 h-4"})};A(It,st=>{a(s)?st(_t):st(or,!1)})}j((st,zt)=>{I(be,st),I(vt,a(Oe).store),I(ht,a(Oe).who),I(Je,zt),I(De,a(Oe).price?`${a(Oe).price}€`:"-"),I(ot,a(Oe).notes||"-"),pt.disabled=a(s)},[()=>Pi(a(Oe).quantity,a(Oe).unit),()=>sn(a(Oe).$createdAt)]),p(Nt,B)};A(jt,Nt=>{a(l)===a(Oe).$id?Nt(Sr):Nt(Br,!1)})}p(Kt,ze)}),p(X,Ye)};A(Ne,X=>{a(n).length===0?X(Ee):X(rt,!1)})}j(()=>ue.disabled=a(s)||!a(u)),Ge(O,()=>a(i).quantity,X=>a(i).quantity=X),ls(C,()=>a(i).unit,X=>a(i).unit=X),Ge(ye,()=>a(i).store,X=>a(i).store=X),Ge(L,()=>a(i).who,X=>a(i).who=X),Ge(Re,()=>a(i).price,X=>a(i).price=X),Ge(xe,()=>a(i).notes,X=>a(i).notes=X),p(y,w)};A(_,y=>{t.product&&a(r)&&y(g)})}p(e,m),Z()}ir(["click"]);async function cu(e,t){await a(t)?.addStock()}var uu=x('<span class="loading loading-spinner loading-sm"></span>'),du=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),fu=x('<span class="loading loading-spinner loading-xs"></span>'),vu=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),hu=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),pu=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"><div class="form-control"><label for="stock-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="stock-quantity" type="number" step="0.01" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-unit" class="label"><span class="label-text">Unité</span></label> <select id="stock-unit" class="select select-bordered select-sm" required><option>Sélectionner</option><option>kg</option><option>g</option><option>l</option><option>ml</option><option>unités</option><option>pièces</option></select></div> <div class="form-control"><label for="stock-datetime" class="label"><span class="label-text">Date du stock</span></label> <input id="stock-datetime" type="datetime-local" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-notes" class="label"><span class="label-text">Notes</span></label> <input id="stock-notes" type="text" class="input input-bordered input-sm" placeholder="Origine, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function _u(e,t){Y(t,!0);const r=N(()=>t.product?ln(t.product):null),n=N(()=>a(r)?.stockEntries??[]),s=N(()=>a(r)?.loading??!1),i=N(()=>a(r).forms.stock);async function o(L){await a(r)?.deleteStock(L)}var l=pu(),u=c(l),f=c(u);hs(f,{class:"w-5 h-5"});var v=d(u,2),h=c(v),m=d(c(h),2),_=c(m),g=d(c(_),2),y=d(_,2),w=d(c(y),2),S=c(w);S.value=S.__value="";var R=d(S);R.value=R.__value="kg";var T=d(R);T.value=T.__value="g";var k=d(T);k.value=k.__value="l";var $=d(k);$.value=$.__value="ml";var P=d($);P.value=P.__value="unités";var O=d(P);O.value=O.__value="pièces";var z=d(y,2),C=d(c(z),2),q=d(z,2),ne=d(c(q),2),se=d(m,2),U=c(se);U.__click=[cu,r];var E=c(U);{var V=L=>{var ce=uu();p(L,ce)},le=L=>{var ce=ut("Ajouter au stock");p(L,ce)};A(E,L=>{a(s)?L(V):L(le,!1)})}var he=d(v,2);{var ye=L=>{var ce=du(),Re=c(ce);hs(Re,{class:"w-12 h-12 mx-auto mb-2"}),p(L,ce)},G=L=>{var ce=hu(),Re=c(ce),Ke=d(c(Re));et(Ke,23,()=>a(n),xe=>xe.dateTime,(xe,Q,ue)=>{var Te=vu(),je=c(Te),$e=c(je),Ne=d(je),Ee=c(Ne),rt=d(Ne),X=c(rt),Ye=d(rt),ft=c(Ye);ft.__click=()=>o(a(ue));var Bt=c(ft);{var Kt=ze=>{var jt=fu();p(ze,jt)},Oe=ze=>{var jt=ut("Supprimer");p(ze,jt)};A(Bt,ze=>{a(s)?ze(Kt):ze(Oe,!1)})}j(ze=>{I($e,`${a(Q).quantity??""} ${a(Q).unit??""}`),I(Ee,ze),I(X,a(Q).notes||"-"),ft.disabled=a(s)},[()=>sn(a(Q).dateTime)]),p(xe,Te)}),p(L,ce)};A(he,L=>{a(n).length===0?L(ye):L(G,!1)})}j(()=>U.disabled=a(s)),Ge(g,()=>a(i).quantity,L=>a(i).quantity=L),ls(w,()=>a(i).unit,L=>a(i).unit=L),Ge(C,()=>a(i).dateTime,L=>a(i).dateTime=L),Ge(ne,()=>a(i).notes,L=>a(i).notes=L),p(e,l),Z()}ir(["click"]);var mu=(e,t)=>{e.key==="Enter"&&t()},gu=x('<span class="loading loading-spinner loading-sm"></span>'),bu=x('<span class="badge badge-primary badge-sm"> </span>'),yu=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun volontaire assigné à ce produit</p></div>'),wu=(e,t,r)=>t(r),xu=x('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs p-0 hover:text-error"><!></button></div>'),Su=x('<div class="flex flex-wrap gap-2"></div>'),Eu=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des volontaires</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <div class="flex gap-2"><div class="form-control flex-1"><input type="text" class="input input-bordered input-sm" placeholder="Nom du volontaire"/></div> <button class="btn btn-primary btn-sm"><!></button></div></div></div> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Volontaires <!></h4> <!></div></div></div>');function Pu(e,t){Y(t,!0);const r=N(()=>t.product?ln(t.product):null),n=N(()=>a(r)?.whoList??[]),s=N(()=>a(r)?.loading??!1);let i=de("");const o=N(()=>a(i).trim().length>0&&!a(n).includes(a(i).trim()));async function l(){!a(o)||!a(r)||(await a(r).addVolunteer(a(i).trim()),M(i,""))}async function u(U){await a(r)?.removeVolunteer(U)}var f=Eu(),v=c(f),h=c(v);An(h,{class:"w-5 h-5"});var m=d(v,2),_=c(m),g=d(c(_),2),y=c(g),w=c(y);w.__keydown=[mu,l];var S=d(y,2);S.__click=l;var R=c(S);{var T=U=>{var E=gu();p(U,E)},k=U=>{var E=ut("Ajouter");p(U,E)};A(R,U=>{a(s)?U(T):U(k,!1)})}var $=d(m,2),P=c($),O=c(P),z=d(c(O));{var C=U=>{var E=bu(),V=c(E);j(()=>I(V,a(n).length)),p(U,E)};A(z,U=>{a(n).length>0&&U(C)})}var q=d(O,2);{var ne=U=>{var E=yu(),V=c(E);An(V,{class:"w-12 h-12 mx-auto mb-2"}),p(U,E)},se=U=>{var E=Su();et(E,20,()=>a(n),V=>V,(V,le)=>{var he=xu(),ye=c(he),G=d(ye);G.__click=[wu,u,le];var L=c(G);xt(L,{class:"w-3 h-3"}),j(()=>{I(ye,`${le??""} `),G.disabled=a(s)}),p(V,he)}),p(U,E)};A(q,U=>{a(n).length===0?U(ne):U(se,!1)})}j(()=>S.disabled=a(s)||!a(o)),Ge(w,()=>a(i),U=>M(i,U)),p(e,f),Z()}ir(["keydown","click"]);var $u=(e,t)=>{e.key==="Enter"&&t()},ku=x('<span class="loading loading-spinner loading-sm"></span>'),Tu=(e,t,r)=>{M(t,""),M(r,"")},Au=(e,t,r)=>t(r),Nu=x('<button class="btn btn-outline btn-xs"> </button>'),Iu=x('<br/><small class="opacity-75"> </small>',1),Mu=x('<p class="text-sm"><strong>Magasin défini :</strong> <!></p>'),Cu=x('<p class="text-sm"><strong>Magasin défini :</strong> </p>'),Ru=x(`<p class="text-sm">Aucun magasin n'est encore défini pour ce produit</p>`),Ou=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des magasins</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin principal</h4> <p class="text-sm opacity-75 mb-4">Définissez le magasin où ce produit est généralement acheté</p> <div class="form-control mb-3"><label class="label" for="store-name"><span class="label-text">Nom du magasin</span></label> <input id="store-name" type="text" class="input input-bordered input-sm" placeholder="Ex: Carrefour, Leclerc..."/></div> <div class="form-control mb-4"><label class="label" for="store-comment"><span class="label-text">Commentaire (optionnel)</span></label> <textarea id="store-comment" class="textarea textarea-bordered textarea-sm" placeholder="Ex: Près de la caisse, rayon frais, etc." rows="2"></textarea></div> <div class="flex gap-2 mb-4"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div> <div class="divider"></div> <div class="form-control"><label class="label" for="suggested-stores"><span class="label-text text-sm">Suggestions rapides</span></label> <div class="flex flex-wrap gap-2" id="suggested-stores"></div></div> <div class="divider"></div> <div class="alert alert-info"><!> <div><h4 class="font-semibold">Information sur le magasin actuel</h4> <!></div></div></div></div></div>');function qu(e,t){Y(t,!0);const r=N(()=>t.product?ln(t.product):null),n=N(()=>a(r)?.forms.store),s=N(()=>a(n)?.name||""),i=N(()=>a(n)?.comment||"");let o=de(wt(a(s))),l=de(wt(a(i)));const u=N(()=>a(r)?.loading??!1),f=N(()=>a(o).trim()!==(a(n)?.name||"")||a(l).trim()!==(a(n)?.comment||""));async function v(){if(!a(f))return;const G={storeName:a(o).trim(),storeComment:a(l).trim()};await a(r)?.updateStore(G)}function h(G){M(o,G,!0)}var m=Ou(),_=c(m),g=c(_);nn(g,{class:"w-5 h-5"});var y=d(_,2),w=c(y),S=d(c(w),4),R=d(c(S),2);R.__keydown=[$u,v];var T=d(S,2),k=d(c(T),2),$=d(T,2),P=c($);P.__click=v;var O=c(P);{var z=G=>{var L=ku();p(G,L)},C=G=>{var L=ut("Mettre à jour");p(G,L)};A(O,G=>{a(u)?G(z):G(C,!1)})}var q=d(P,2);q.__click=[Tu,o,l];var ne=d($,4),se=d(c(ne),2);et(se,20,()=>["Carrefour","Intermarché","Leclerc","Auchan","Lidl","Aldi","Casino","Monoprix","Franprix","Bio c' Bon","Naturalia"],G=>G,(G,L)=>{var ce=Nu();ce.__click=[Au,h,L];var Re=c(ce);j(()=>{ce.disabled=a(u),I(Re,L)}),p(G,ce)});var U=d(ne,4),E=c(U);nn(E,{class:"w-4 h-4"});var V=d(E,2),le=d(c(V),2);{var he=G=>{var L=Mu(),ce=d(c(L)),Re=d(ce);{var Ke=xe=>{var Q=Iu(),ue=d(W(Q)),Te=c(ue);j(()=>I(Te,t.product.storeInfo.storeComment)),p(xe,Q)};A(Re,xe=>{t.product.storeInfo.storeComment&&xe(Ke)})}j(()=>I(ce,` ${t.product.storeInfo.storeName??""} `)),p(G,L)},ye=G=>{var L=H(),ce=W(L);{var Re=xe=>{var Q=Cu(),ue=d(c(Q));j(()=>I(ue,` ${t.product.store??""}`)),p(xe,Q)},Ke=xe=>{var Q=Ru();p(xe,Q)};A(ce,xe=>{t.product?.store?xe(Re):xe(Ke,!1)},!0)}p(G,L)};A(le,G=>{t.product?.storeInfo?G(he):G(ye,!1)})}j(()=>{P.disabled=a(u)||!a(f),q.disabled=a(u)}),Ge(R,()=>a(o),G=>M(o,G)),Ge(k,()=>a(l),G=>M(l,G)),p(e,m),Z()}ir(["keydown","click"]);var Du=x('<div class="badge badge-success gap-1"><!> Actif</div>'),Lu=x('<div class="badge badge-warning gap-1"><!> </div>'),Bu=(e,t)=>t("recettes"),ju=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),zu=(e,t)=>t("achats"),Vu=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Wu=(e,t)=>t("stock"),Uu=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Gu=(e,t)=>t("volontaires"),Qu=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Hu=(e,t)=>t("magasins"),Ku=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Yu=x('<div class="text-center py-8 opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Zu=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td> </td></tr>'),Ju=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),Xu=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Recettes utilisant ce produit</h3> <!></div>'),Fu=x('<div class="modal modal-open"><div class="modal-box max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"><div class="flex items-center justify-between p-4 border-b"><div class="flex-1"><h2 class="text-xl font-bold"> </h2> <div class="flex items-center gap-3 mt-2"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div></div> <button class="btn btn-circle btn-ghost btn-sm" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="flex-1 overflow-y-auto p-4 min-h-96"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function ed(e,t){Y(t,!0);let r=N(()=>Dt.product.tab),n=N(()=>Dt.product.id),s=N(()=>Dt.product.isOpen),i=N(()=>D.getEnrichedProductById(a(n))),o=N(()=>a(i)?ln(a(i)):null);const l=N(()=>a(o)?.error??null),u=N(()=>a(o)?.stockEntries??[]),f=N(()=>a(o)?.purchasesList??[]),v=N(()=>a(o)?.recipes??[]);function h(y){Dt.product.tab=y}var m=H(),_=W(m);{var g=y=>{var w=Fu(),S=c(w),R=c(S),T=c(R),k=c(T),$=c(k),P=d(k,2),O=c(P),z=c(O),C=d(O,2);{var q=B=>{var ae=Du(),be=c(ae);Oc(be,{class:"w-3 h-3"}),p(B,ae)},ne=B=>{var ae=Lu(),be=c(ae);Ei(be,{class:"w-3 h-3"});var Ze=d(be);j(()=>I(Ze,` ${a(i).status??""}`)),p(B,ae)};A(C,B=>{a(i).status==="active"?B(q):B(ne,!1)})}var se=d(C,2),U=d(c(se)),E=d(T,2);E.__click=function(...B){fa?.apply(this,B)};var V=c(E);xt(V,{class:"w-4 h-4"});var le=d(R,2),he=c(le);he.__click=[Bu,h];var ye=c(he);yn(ye,{class:"w-4 h-4 mr-1"});var G=d(ye,2);{var L=B=>{var ae=ju(),be=c(ae);j(()=>I(be,a(v).length)),p(B,ae)};A(G,B=>{a(v).length>0&&B(L)})}var ce=d(he,2);ce.__click=[zu,h];var Re=c(ce);Tn(Re,{class:"w-4 h-4 mr-1"});var Ke=d(Re,2);{var xe=B=>{var ae=Vu(),be=c(ae);j(()=>I(be,a(f).length)),p(B,ae)};A(Ke,B=>{a(f).length>0&&B(xe)})}var Q=d(ce,2);Q.__click=[Wu,h];var ue=c(Q);hs(ue,{class:"w-4 h-4 mr-1"});var Te=d(ue,2);{var je=B=>{var ae=Uu(),be=c(ae);j(()=>I(be,a(u).length)),p(B,ae)};A(Te,B=>{a(u).length>0&&B(je)})}var $e=d(Q,2);$e.__click=[Gu,h];var Ne=c($e);An(Ne,{class:"w-4 h-4 mr-1"});var Ee=d(Ne,2);{var rt=B=>{var ae=Qu(),be=c(ae);j(()=>I(be,a(i).who.length)),p(B,ae)};A(Ee,B=>{a(i).who&&a(i).who.length>0&&B(rt)})}var X=d($e,2);X.__click=[Hu,h];var Ye=c(X);nn(Ye,{class:"w-4 h-4 mr-1"});var ft=d(le,2),Bt=c(ft);{var Kt=B=>{var ae=Ku(),be=c(ae);xt(be,{class:"w-4 h-4"});var Ze=d(be,2),vt=c(Ze);j(()=>I(vt,`erreur : ${a(l)??""}`)),p(B,ae)};A(Bt,B=>{a(l)&&B(Kt)})}var Oe=d(Bt,2),ze=c(Oe);{var jt=B=>{var ae=Xu(),be=c(ae),Ze=c(be);yn(Ze,{class:"w-5 h-5"});var vt=d(be,2);{var Ie=qe=>{var Je=Yu(),nt=c(Je);yn(nt,{class:"w-12 h-12 mx-auto mb-2"}),p(qe,Je)},ht=qe=>{var Je=Ju(),nt=c(Je),De=d(c(nt));et(De,21,()=>a(v),Xe=>Xe.recipeName+Xe.dateTimeService,(Xe,ot)=>{var Et=Zu(),Pt=c(Et),Ve=c(Pt),$t=d(Pt),pt=c($t),It=d($t),_t=c(It),or=d(It),st=c(or);j(zt=>{I(Ve,a(ot).recipeName),I(pt,`${a(ot).quantity??""} ${a(ot).unit??""}`),I(_t,zt),I(st,a(ot).assiettes||"-")},[()=>sn(a(ot).dateTimeService)]),p(Xe,Et)}),p(qe,Je)};A(vt,qe=>{a(v).length===0?qe(Ie):qe(ht,!1)})}p(B,ae)},Sr=B=>{var ae=H(),be=W(ae);{var Ze=Ie=>{lu(Ie,{get product(){return a(i)}})},vt=Ie=>{var ht=H(),qe=W(ht);{var Je=De=>{_u(De,{get product(){return a(i)}})},nt=De=>{var Xe=H(),ot=W(Xe);{var Et=Ve=>{Pu(Ve,{get product(){return a(i)}})},Pt=Ve=>{var $t=H(),pt=W($t);{var It=_t=>{qu(_t,{get product(){return a(i)}})};A(pt,_t=>{a(r)==="magasins"&&_t(It)},!0)}p(Ve,$t)};A(ot,Ve=>{a(r)==="volontaires"?Ve(Et):Ve(Pt,!1)},!0)}p(De,Xe)};A(qe,De=>{a(r)==="stock"?De(Je):De(nt,!1)},!0)}p(Ie,ht)};A(be,Ie=>{a(r)==="achats"?Ie(Ze):Ie(vt,!1)},!0)}p(B,ae)};A(ze,B=>{a(r)==="recettes"?B(jt):B(Sr,!1)})}var Br=d(ft,2),Nt=c(Br);Nt.__click=function(...B){fa?.apply(this,B)},j(()=>{I($,a(i).productName),I(z,a(i).productType),I(U,` ${a(i).displayTotalNeeded??""}`),Ae(he,1,`tab ${a(r)==="recettes"?"tab-active":""}`),Ae(ce,1,`tab ${a(r)==="achats"?"tab-active":""}`),Ae(Q,1,`tab ${a(r)==="stock"?"tab-active":""}`),Ae($e,1,`tab ${a(r)==="volontaires"?"tab-active":""}`),Ae(X,1,`tab ${a(r)==="magasins"?"tab-active":""}`)}),p(y,w)};A(_,y=>{a(s)&&a(i)&&y(g)})}p(e,m),Z()}ir(["click"]);var td=()=>D.setGroupBy("none"),rd=()=>D.setGroupBy("store"),nd=()=>D.setGroupBy("productType"),sd=(e,t)=>D.toggleProductType(t),ad=x("<button><!> </button>"),id=()=>D.toggleTemperature("frais"),od=()=>D.toggleTemperature("surgele"),ld=()=>D.clearTypeAndTemperatureFilters(),cd=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),ud=(e,t)=>D.toggleStore(t),dd=x("<button> </button>"),fd=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),vd=(e,t)=>D.toggleWho(t),hd=x("<button> </button>"),pd=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),_d=(e,t)=>{D.clearFilters(),M(t,!1)},md=x('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function gd(e,t){Y(t,!0);let r=de(!1);const n=N(()=>D.filters),s=N(()=>D.uniqueStores),i=N(()=>D.uniqueWho),o=N(()=>D.uniqueProductTypes);var l=md(),u=W(l),f=c(u),v=d(f,2),h=d(c(v),2),m=c(h),_=c(m),g=c(_);ps(g,{class:"w-5 h-5"});var y=d(_,2),w=c(y);xt(w,{class:"w-4 h-4"});var S=d(m,2),R=d(c(S),2),T=c(R);T.__change=[td];var k=d(T,2);k.__change=[rd];var $=d(k,2);$.__change=[nd];var P=d(S,2),O=c(P),z=d(c(O),2);et(z,20,()=>a(o),Q=>Q,(Q,ue)=>{const Te=N(()=>Sn(ue));var je=ad();je.__click=[sd,ue];var $e=c(je);gn($e,()=>a(Te).icon,(Ee,rt)=>{rt(Ee,{class:"w-3 h-3 mr-1"})});var Ne=d($e);j(Ee=>{Ae(je,1,`btn btn-sm ${Ee??""}`),I(Ne,` ${a(Te).displayName??""}`)},[()=>a(n).selectedProductTypes.length===0?"btn-soft btn-accent":a(n).selectedProductTypes.includes(ue)?"btn-accent":"btn-dash btn-accent"]),p(Q,je)});var C=d(z,2),q=c(C);q.__click=[id];var ne=c(q);wn(ne,{class:"w-3 h-3"});var se=d(q,2);se.__click=[od];var U=c(se);xn(U,{class:"w-3 h-3"});var E=d(se,2);{var V=Q=>{var ue=cd();ue.__click=[ld];var Te=c(ue);xt(Te,{class:"w-3 h-3"}),p(Q,ue)};A(E,Q=>{(a(n).selectedProductTypes.length>0||a(n).selectedTemperatures.length>0)&&Q(V)})}var le=d(P,2);{var he=Q=>{var ue=fd(),Te=c(ue),je=d(c(Te),2);et(je,20,()=>a(s),$e=>$e,($e,Ne)=>{var Ee=dd();Ee.__click=[ud,Ne];var rt=c(Ee);j(X=>{Ae(Ee,1,`btn btn-sm ${X??""}`),I(rt,Ne)},[()=>a(n).selectedStores.length===0?"btn-soft btn-accent":a(n).selectedStores.includes(Ne)?"btn-accent":"btn-dash btn-accent"]),p($e,Ee)}),p(Q,ue)};A(le,Q=>{a(s).length>0&&Q(he)})}var ye=d(le,2);{var G=Q=>{var ue=pd(),Te=c(ue),je=d(c(Te),2);et(je,20,()=>a(i),$e=>$e,($e,Ne)=>{var Ee=hd();Ee.__click=[vd,Ne];var rt=c(Ee);j(X=>{Ae(Ee,1,`btn btn-sm ${X??""}`),I(rt,Ne)},[()=>a(n).selectedWho.length===0?"btn-soft btn-accent":a(n).selectedWho.includes(Ne)?"btn-accent":"btn-dash btn-accent"]),p($e,Ee)}),p(Q,ue)};A(ye,Q=>{a(i).length>0&&Q(G)})}var L=d(ye,4);L.__click=[_d,r];var ce=c(L);xt(ce,{class:"w-4 h-4 mr-2"});var Re=d(u,2),Ke=c(Re),xe=c(Ke);ps(xe,{class:"w-6 h-6"}),j((Q,ue)=>{Ar(T,a(n).groupBy==="none"),Ar(k,a(n).groupBy==="store"),Ar($,a(n).groupBy==="productType"),Ae(q,1,`btn btn-sm ${Q??""}`),Ae(se,1,`btn btn-sm ${ue??""}`)},[()=>a(n).selectedTemperatures.length===0?"btn-soft btn-success":a(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(n).selectedTemperatures.length===0?"btn-soft btn-info":a(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),$l(f,()=>a(r),Q=>M(r,Q)),p(e,l),Z()}ir(["change","click"]);var bd=()=>D.clearFilters(),yd=e=>D.setSearchQuery(e.currentTarget.value),wd=()=>D.setGroupBy("none"),xd=()=>D.setGroupBy("store"),Sd=()=>D.setGroupBy("productType"),Ed=(e,t)=>D.toggleProductType(t),Pd=x("<button><!> </button>"),$d=()=>D.toggleTemperature("frais"),kd=()=>D.toggleTemperature("surgele"),Td=()=>D.clearTypeAndTemperatureFilters(),Ad=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Nd=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),Id=(e,t)=>D.toggleStore(t),Md=x("<button><!> </button>"),Cd=()=>D.clearStoreFilters(),Rd=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Od=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),qd=(e,t)=>D.toggleWho(t),Dd=x("<button><!> </button>"),Ld=()=>D.clearWhoFilters(),Bd=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),jd=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),zd=()=>D.handleSort("productName"),Vd=()=>D.handleSort("store"),Wd=()=>D.handleSort("who"),Ud=()=>D.handleSort("productType"),Gd=x('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Qd=x('<tr class="bg-base-200 font-semibold sticky top-10 z-10"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),Hd=(e,t,r)=>t("recettes",a(r).$id),Kd=x('<div class="text-xs text-base-content/60"> </div>'),Yd=x('<div class="w-7 h-7 bg-success/20 rounded-full flex items-center justify-center"><!></div>'),Zd=x('<div class="w-7 h-7 bg-info/20 rounded-full flex items-center justify-center"><!></div>'),Jd=(e,t,r)=>t("magasins",a(r).$id),Xd=x('<div class="tooltip tooltip-info"> </div>'),Fd=(e,t,r)=>t("volontaires",a(r).$id),ef=x('<span class="badge badge-soft badge-info badge-sm"> </span>'),tf=x('<div class="flex flex-wrap gap-1 pr-8"></div>'),rf=x('<div class="text-xs text-base-content/70 flex gap-2 items-center justify-center"><!> <span class="text-center "> </span> <span class="text-center "> </span></div>'),nf=(e,t,r)=>t("achats",a(r).$id),sf=x('<div class="bg-warning px-2 py-1 rounded m-auto"> </div>'),af=x('<tr class="hover:bg-base-200/20 transition-colors"><td class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="text-center font-semibold"><div class="pb-1 text-center font-semibold"> </div> <!></td><td class="text-center font-medium cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="relative group text-center"><!></td></tr>'),of=x("<!> <!>",1),lf=x('<div class="text-center py-8"><div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),cf=x('<div class="space-y-6"><div class="flex flex-wrap gap-2 items-center"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="flex  md:mb-4 justify-between mb-4 flex-wrap items-center gap-4 "><div class="form-control "><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input input-bordered flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="flex mt-4"><!></div> <div class="flex flex-col lg:flex-row gap-6 mt-4"><!> <!></div></div></div> <div class="hidden md:block bg-base-100 rounded-lg "><table class="table w-full"><thead class="sticky top-0 z-10 bg-base-200"><tr class="bg-base-200"><th class="cursor-pointer hover:bg-base-100 text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="cursor-pointer hover:bg-base-100 text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function uf(e,t){Y(t,!0);const r=N(()=>D.filteredProducts),n=N(()=>D.filteredGroupedProducts),s=N(()=>D.stats),i=N(()=>D.uniqueStores),o=N(()=>D.uniqueWho),l=N(()=>D.uniqueProductTypes),u=N(()=>D.filters);function f(K,pe){Qc(K,pe)}var v=cf(),h=W(v),m=c(h),_=c(m),g=c(_);da(g,{class:"w-4 h-4 mr-1"});var y=d(g),w=d(_,2),S=c(w);wn(S,{class:"w-4 h-4 mr-1"});var R=d(S),T=d(w,2),k=c(T);xn(k,{class:"w-4 h-4 mr-1"});var $=d(k),P=d(T,2),O=c(P);qc(O,{class:"w-4 h-4 mr-1"});var z=d(O),C=d(m,2),q=c(C),ne=c(q),se=c(ne),U=c(se);ps(U,{class:"w-5 h-5"});var E=d(se,2);E.__click=[bd];var V=c(E);xt(V,{class:"w-4 h-4"});var le=d(q,2),he=c(le),ye=d(c(he),2),G=c(ye);Wc(G,{class:"w-4 h-4"});var L=d(G,2);L.__input=[yd];var ce=d(he,2),Re=d(c(ce),2),Ke=c(Re);Ke.__change=[wd];var xe=d(Ke,2);xe.__change=[xd];var Q=d(xe,2);Q.__change=[Sd];var ue=d(le,2),Te=c(ue),je=c(Te);{var $e=K=>{var pe=Nd(),kt=c(pe),mt=d(c(kt),2),ie=c(mt);et(ie,16,()=>a(l),Ce=>Ce,(Ce,Le)=>{const Mt=N(()=>Sn(Le));var Vt=Pd();Vt.__click=[Ed,Le];var cr=c(Vt);gn(cr,()=>a(Mt).icon,(gt,Wt)=>{Wt(gt,{class:"w-5 h-5 mr-1"})});var Er=d(cr);j(gt=>{Ae(Vt,1,`btn btn-sm ${gt??""}`),I(Er,` ${a(Mt).displayName??""}`)},[()=>a(u).selectedProductTypes.length===0?"btn-soft btn-accent":a(u).selectedProductTypes.includes(Le)?"btn-accent":"btn-dash btn-accent"]),p(Ce,Vt)});var lt=d(ie,2);lt.__click=[$d];var Yt=c(lt);wn(Yt,{class:"w-5 h-5"});var Pe=d(lt,2);Pe.__click=[kd];var Me=c(Pe);xn(Me,{class:"w-5 h-5"});var Se=d(Pe,2);{var F=Ce=>{var Le=Ad();Le.__click=[Td];var Mt=c(Le);xt(Mt,{class:"w-3 h-3"}),p(Ce,Le)};A(Se,Ce=>{(a(u).selectedProductTypes.length>0||a(u).selectedTemperatures.length>0)&&Ce(F)})}j((Ce,Le)=>{Ae(lt,1,`btn btn-sm ms-4 ${Ce??""}`),Ae(Pe,1,`btn btn-sm ${Le??""}`)},[()=>a(u).selectedTemperatures.length===0?"btn-soft btn-success":a(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(u).selectedTemperatures.length===0?"btn-soft btn-info":a(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),p(K,pe)};A(je,K=>{a(l).length>0&&K($e)})}var Ne=d(Te,2),Ee=c(Ne);{var rt=K=>{var pe=Od(),kt=c(pe),mt=d(c(kt),2),ie=c(mt);et(ie,16,()=>a(i),Pe=>Pe,(Pe,Me)=>{var Se=Md();Se.__click=[Id,Me];var F=c(Se);nn(F,{class:"w-3 h-3 mr-1"});var Ce=d(F);j(Le=>{Ae(Se,1,`btn btn-xs ${Le??""}`),I(Ce,` ${Me??""}`)},[()=>a(u).selectedStores.length===0?"btn-soft btn-accent":a(u).selectedStores.includes(Me)?"btn-accent":"btn-dash btn-accent"]),p(Pe,Se)});var lt=d(ie,2);{var Yt=Pe=>{var Me=Rd();Me.__click=[Cd];var Se=c(Me);xt(Se,{class:"w-3 h-3"}),p(Pe,Me)};A(lt,Pe=>{a(u).selectedStores.length>0&&Pe(Yt)})}p(K,pe)};A(Ee,K=>{a(i).length>0&&K(rt)})}var X=d(Ee,2);{var Ye=K=>{var pe=jd(),kt=c(pe),mt=d(c(kt),2),ie=c(mt);et(ie,16,()=>a(o),Pe=>Pe,(Pe,Me)=>{var Se=Dd();Se.__click=[qd,Me];var F=c(Se);Uc(F,{class:"w-3 h-3 mr-1"});var Ce=d(F);j(Le=>{Ae(Se,1,`btn btn-xs ${Le??""}`),I(Ce,` ${Me??""}`)},[()=>a(u).selectedWho.length===0?" btn-soft btn-info":a(u).selectedWho.includes(Me)?" btn-info":"btn-dash btn-info"]),p(Pe,Se)});var lt=d(ie,2);{var Yt=Pe=>{var Me=Bd();Me.__click=[Ld];var Se=c(Me);xt(Se,{class:"w-3 h-3"}),p(Pe,Me)};A(lt,Pe=>{a(u).selectedWho.length>0&&Pe(Yt)})}p(K,pe)};A(X,K=>{a(o).length>0&&K(Ye)})}var ft=d(C,2),Bt=c(ft),Kt=c(Bt),Oe=c(Kt),ze=c(Oe);ze.__click=[zd];var jt=c(ze),Sr=c(jt);da(Sr,{class:"w-4 h-4"});var Br=d(Sr,2);{var Nt=K=>{var pe=ut();j(()=>I(pe,a(u).sortDirection==="asc"?"↑":"↓")),p(K,pe)};A(Br,K=>{a(u).sortColumn==="productName"&&K(Nt)})}var B=d(ze);B.__click=[Vd];var ae=c(B),be=c(ae);nn(be,{class:"w-4 h-4"});var Ze=d(be,2);{var vt=K=>{var pe=ut();j(()=>I(pe,a(u).sortDirection==="asc"?"↑":"↓")),p(K,pe)};A(Ze,K=>{a(u).sortColumn==="store"&&K(vt)})}var Ie=d(B);Ie.__click=[Wd];var ht=c(Ie),qe=c(ht);An(qe,{class:"w-4 h-4"});var Je=d(qe,2);{var nt=K=>{var pe=ut();j(()=>I(pe,a(u).sortDirection==="asc"?"↑":"↓")),p(K,pe)};A(Je,K=>{a(u).sortColumn==="who"&&K(nt)})}var De=d(Ie);De.__click=[Ud];var Xe=c(De),ot=d(c(Xe));{var Et=K=>{var pe=ut();j(()=>I(pe,a(u).sortDirection==="asc"?"↑":"↓")),p(K,pe)};A(ot,K=>{a(u).sortColumn==="productType"&&K(Et)})}var Pt=d(De,2),Ve=c(Pt),$t=c(Ve);Tn($t,{class:"w-4 h-4"});var pt=d(Pt),It=c(pt),_t=c(It);Bc(_t,{class:"w-4 h-4"});var or=d(Kt);et(or,21,()=>Object.entries(a(n)),([K,pe])=>K,(K,pe)=>{var kt=N(()=>ma(a(pe),2));let mt=()=>a(kt)[0],ie=()=>a(kt)[1];var lt=of(),Yt=W(lt);{var Pe=Se=>{const F=N(()=>Sn(mt()));var Ce=Qd(),Le=c(Ce),Mt=c(Le),Vt=c(Mt);{var cr=gt=>{var Wt=ut();j(()=>I(Wt,`🏪 ${mt()??""} (${ie().length??""})`)),p(gt,Wt)},Er=gt=>{var Wt=H(),Vn=W(Wt);{var Wn=Zt=>{var ur=Gd(),un=c(ur);gn(un,()=>a(F).icon,(Gn,Qn)=>{Qn(Gn,{class:"w-4 h-4"})});var dn=d(un,2),Un=c(dn),Pr=d(dn,2),fn=c(Pr);j(()=>{I(Un,a(F).displayName),I(fn,`(${ie().length??""})`)}),p(Zt,ur)},cn=Zt=>{var ur=ut();j(()=>I(ur,`📦 ${mt()??""} (${ie().length??""})`)),p(Zt,ur)};A(Vn,Zt=>{a(u).groupBy==="productType"?Zt(Wn):Zt(cn,!1)},!0)}p(gt,Wt)};A(Vt,gt=>{a(u).groupBy==="store"?gt(cr):gt(Er,!1)})}p(Se,Ce)};A(Yt,Se=>{mt()!==""&&Se(Pe)})}var Me=d(Yt,2);et(Me,17,()=>Kc(ie(),a(u)),Se=>Se.$id,(Se,F)=>{const Ce=N(()=>Sn(a(F).productType));var Le=af(),Mt=c(Le);Mt.__click=[Hd,f,F];var Vt=c(Mt),cr=c(Vt),Er=c(cr),gt=c(Er),Wt=d(Er,2);{var Vn=J=>{var ge=Kd(),Ue=c(ge);j(()=>I(Ue,`Ancien: ${a(F).previousNames[0]??""}`)),p(J,ge)};A(Wt,J=>{a(F).previousNames&&a(F).previousNames.length>0&&J(Vn)})}var Wn=d(cr,2),cn=c(Wn);{var Zt=J=>{var ge=Yd(),Ue=c(ge);wn(Ue,{class:"w-4 h-4 text-success"}),p(J,ge)};A(cn,J=>{a(F).pFrais&&J(Zt)})}var ur=d(cn,2);{var un=J=>{var ge=Zd(),Ue=c(ge);xn(Ue,{class:"w-4 h-4 text-info"}),p(J,ge)};A(ur,J=>{a(F).pSurgel&&J(un)})}var dn=d(Vt,2),Un=c(dn);Qr(Un,{class:"w-4 h-4 text-amber-600"});var Pr=d(Mt);Pr.__click=[Jd,f,F];var fn=c(Pr);{var Gn=J=>{var ge=Xd(),Ue=c(ge);j(()=>{kn(ge,"data-tip",a(F).storeInfo.storeComment),I(Ue,a(F).storeInfo.storeName||"-")}),p(J,ge)},Qn=J=>{var ge=ut();j(()=>I(ge,a(F).storeInfo?.storeName||"-")),p(J,ge)};A(fn,J=>{a(F).storeInfo?.storeComment?J(Gn):J(Qn,!1)})}var $i=d(fn,2),ki=c($i);Qr(ki,{class:"w-4 h-4 text-amber-600"});var Hn=d(Pr);Hn.__click=[Fd,f,F];var As=c(Hn);{var Ti=J=>{var ge=tf();et(ge,20,()=>a(F).who,Ue=>Ue,(Ue,vn)=>{var hn=ef(),Zn=c(hn);j(()=>I(Zn,vn)),p(Ue,hn)}),p(J,ge)},Ai=J=>{var ge=ut("-");p(J,ge)};A(As,J=>{a(F).who&&a(F).who.length>0?J(Ti):J(Ai,!1)})}var Ni=d(As,2),Ii=c(Ni);Qr(Ii,{class:"w-4 h-4 text-amber-600"});var Kn=d(Hn),Mi=c(Kn),Ns=c(Mi);gn(Ns,()=>a(Ce).icon,(J,ge)=>{ge(J,{class:"w-3 h-3"})});var Ci=d(Ns),Is=d(Kn),Ms=c(Is),Ri=c(Ms),Oi=d(Ms,2);{var qi=J=>{var ge=rf(),Ue=c(ge);Gc(Ue,{class:"w-3 h-3"});var vn=d(Ue,2),hn=c(vn),Zn=d(vn,2),Wi=c(Zn);j(()=>{I(hn,`${a(F)?.nbRecipes??""} r.`),I(Wi,`${a(F)?.totalAssiettes??""} c.`)}),p(J,ge)};A(Oi,J=>{(a(F).nbRecipes||a(F).totalAssiettes)&&J(qi)})}var Yn=d(Is);Yn.__click=[nf,f,F];var Cs=c(Yn),Di=d(Cs),Li=c(Di);Qr(Li,{class:"w-4 h-4 text-amber-600"});var Bi=d(Yn),ji=c(Bi);{var zi=J=>{var ge=sf(),Ue=c(ge);j(()=>I(Ue,a(F).displayMissingQuantity)),p(J,ge)},Vi=J=>{Rc(J,{size:28,strokeWidth:3,class:"text-success m-auto"})};A(ji,J=>{a(F).displayMissingQuantity!=="✅ Complet"?J(zi):J(Vi,!1)})}j(()=>{I(gt,a(F).productName),Ae(Pr,1,`${a(u).groupBy==="store"?"hidden":""} cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded font-medium relative group`),Ae(Kn,1,a(u).groupBy==="productType"?"hidden":""),I(Ci,` ${a(Ce).displayName??""}`),I(Ri,a(F).displayTotalNeeded||"-"),I(Cs,`${(a(F).displayTotalPurchases||"-")??""} `)}),p(Se,Le)}),p(K,lt)});var st=d(Bt,2);{var zt=K=>{var pe=lf();p(K,pe)};A(st,K=>{a(r).length===0&&K(zt)})}var lr=d(h,2);ed(lr,{});var zn=d(lr,2);gd(zn,{}),j(()=>{I(y,` ${a(s).total??""}`),I(R,` frais:
      ${a(s).frais??""}`),I($,` surgelés:
      ${a(s).surgel??""}`),I(z,` fusionnés:
      ${a(s).merged??""}`),Sl(L,a(u).searchQuery),Ar(Ke,a(u).groupBy==="none"),Ar(xe,a(u).groupBy==="store"),Ar(Q,a(u).groupBy==="productType"),Ae(B,1,`cursor-pointer hover:bg-base-100 text-center ${a(u).groupBy==="store"?"hidden":""}`),Ae(De,1,`cursor-pointer hover:bg-base-100 text-center ${a(u).groupBy==="productType"?"hidden":""}`)}),p(e,v),Z()}ir(["click","input","change"]);$o();var df=x('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function ff(e){var t=df();p(e,t)}var vf=x('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function hf(e,t){var r=vf(),n=d(c(r),2),s=d(c(n),2),i=c(s);j(()=>I(i,t.message)),p(e,r)}var pf=x('<div class="alert bg-error/20"><div class="flex items-start gap-3 "><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function _f(e,t){var r=pf(),n=c(r),s=c(n);Ei(s,{class:"stroke-current shrink-0 h-6 w-6 mt-0.5"});var i=d(s,2),o=d(c(i),2),l=c(o);j(()=>I(l,t.message)),p(e,r)}var mf=x('<div class="flex items-center gap-2 text-success"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),gf=x('<div class="flex items-center gap-2 text-info"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),bf=x('<div class="text-base-content/60"> </div>'),yf=x('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),wf=x('<div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),xf=x('<div class="min-h-screen bg-base-100"><header class="sticky top-0 z-10 bg-base-200 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl font-bold text-base-content">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function Sf(e,t){Y(t,!0);let r,n=de(null),s=de(!0);oi(async()=>{r=cc();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await D.initialize(r)}catch(E){const V=E instanceof Error?E.message:"Erreur lors de l'initialisation";M(n,V,!0),console.error("[App] Erreur initialisation:",E)}finally{M(s,!1)}}),Nl(()=>{D.destroy()});const i=N(()=>a(n)||D.error),o=N(()=>a(s)||D.loading),l=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var u=xf(),f=c(u),v=c(f),h=c(v),m=d(c(h),2),_=c(m);{var g=E=>{var V=mf();p(E,V)};A(_,E=>{D.realtimeConnected&&E(g)})}var y=d(_,2);{var w=E=>{var V=gf();p(E,V)};A(y,E=>{D.syncing&&E(w)})}var S=d(y,2);{var R=E=>{var V=bf(),le=c(V);j(he=>I(le,`Maj: ${he??""}`),[()=>new Date(D.lastSync).toLocaleTimeString()]),p(E,V)};A(S,E=>{D.lastSync&&E(R)})}var T=d(S,2);{var k=E=>{var V=yf(),le=c(V),he=c(le);jc(he,{class:"w-4 h-4 mr-2"}),j(()=>kn(le,"href",l)),p(E,V)};A(T,E=>{a(n)&&E(k)})}var $=d(f,2),P=c($);{var O=E=>{_f(E,{get message(){return a(i)}})},z=E=>{var V=H(),le=W(V);{var he=ye=>{hf(ye,{get message(){return a(i)}})};A(le,ye=>{a(i)&&ye(he)},!0)}p(E,V)};A(P,E=>{a(n)?E(O):E(z,!1)})}var C=d(P,2);{var q=E=>{ff(E)};A(C,E=>{a(o)&&E(q)})}var ne=d(C,2);{var se=E=>{uf(E,{})},U=E=>{var V=H(),le=W(V);{var he=ye=>{var G=wf();p(ye,G)};A(le,ye=>{!D.loading&&!a(n)&&ye(he)},!0)}p(E,V)};A(ne,E=>{D.enrichedProducts.length>0?E(se):E(U,!1)})}p(e,u),Z()}dl(Sf,{target:document.getElementById("app_products")});
