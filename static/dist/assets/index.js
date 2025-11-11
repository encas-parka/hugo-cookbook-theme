(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const ia=!1;var _n=Array.isArray,Ho=Array.prototype.indexOf,is=Array.from,Wn=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Go=Object.getOwnPropertyDescriptors,Qo=Object.prototype,Ko=Array.prototype,la=Object.getPrototypeOf,Ps=Object.isExtensible;function qr(e){return typeof e=="function"}const F=()=>{};function Yo(e){for(var t=0;t<e.length;t++)e[t]()}function ca(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function ua(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const dt=2,ls=4,cs=8,vr=16,zt=32,hr=64,us=128,bt=256,pn=512,nt=1024,ht=2048,tr=4096,Pt=8192,pr=16384,ds=32768,mr=65536,Es=1<<17,Jo=1<<18,Nr=1<<19,Zo=1<<20,Hn=1<<21,bn=1<<22,ir=1<<23,lr=Symbol("$state"),da=Symbol("legacy props"),Xo=Symbol(""),Vr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function fa(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Fo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ei(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ti(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ri(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ni(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function si(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ai(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function oi(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ii(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function li(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const yn=1,wn=2,va=4,ci=8,ui=16,di=1,fi=2,vi=4,hi=8,pi=16,mi=1,gi=2,Je=Symbol(),_i="http://www.w3.org/1999/xhtml",bi="http://www.w3.org/2000/svg",yi="@attach";function wi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Si(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let xi=!1;function ha(e){return e===this.v}function pa(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Pi(e,t){return e!==t}function ma(e){return!pa(e,this.v)}let Ir=!1,Ei=!1;function $i(){Ir=!0}let Ke=null;function Pr(e){Ke=e}function U(e,t=!1,r){Ke={p:Ke,c:null,e:null,s:e,x:null,l:Ir&&!t?{s:null,u:null,$:[]}:null}}function V(e){var t=Ke,r=t.e;if(r!==null){t.e=null;for(var n of r)Na(n)}return Ke=t.p,{}}function Mr(){return!Ir||Ke!==null&&Ke.l===null}let sr=[];function ga(){var e=sr;sr=[],Yo(e)}function ur(e){if(sr.length===0&&!Wr){var t=sr;queueMicrotask(()=>{t===sr&&ga()})}sr.push(e)}function ki(){for(;sr.length>0;)ga()}const Ai=new WeakMap;function _a(e){var t=Ee;if(t===null)return $e.f|=ir,e;if((t.f&ds)===0){if((t.f&us)===0)throw!t.parent&&e instanceof Error&&ba(e),e;t.b.error(e)}else Er(e,t)}function Er(e,t){for(;t!==null;){if((t.f&us)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&ba(e),e}function ba(e){const t=Ai.get(e);t&&(Wn(e,"message",{value:t.message}),Wn(e,"stack",{value:t.stack}))}const on=new Set;let Oe=null,dn=null,Gn=new Set,Ct=[],Sn=null,Qn=!1,Wr=!1;class _t{current=new Map;#e=new Map;#r=new Set;#a=0;#u=null;#d=[];#i=[];#c=[];#l=[];#s=[];#f=[];skipped_effects=new Set;process(t){Ct=[],dn=null;var r=_t.apply(this);for(const o of t)this.#o(o);if(this.#a===0){this.#h();var n=this.#i,s=this.#c;this.#i=[],this.#c=[],this.#l=[],dn=this,Oe=null,$s(n),$s(s),dn=null,this.#u?.resolve()}else this.#v(this.#i),this.#v(this.#c),this.#v(this.#l);r();for(const o of this.#d)Yr(o);this.#d=[]}#o(t){t.f^=nt;for(var r=t.first;r!==null;){var n=r.f,s=(n&(zt|hr))!==0,o=s&&(n&nt)!==0,i=o||(n&Pt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){s?r.f^=nt:(n&ls)!==0?this.#c.push(r):(n&nt)===0&&((n&bn)!==0&&r.b?.is_pending()?this.#d.push(r):kn(r)&&((r.f&vr)!==0&&this.#l.push(r),Yr(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#v(t){for(const r of t)((r.f&ht)!==0?this.#s:this.#f).push(r),lt(r,nt);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){Oe=this}deactivate(){Oe=null}flush(){if(Ct.length>0){if(this.activate(),ya(),Oe!==null&&Oe!==this)return}else this.#a===0&&this.#h();this.deactivate();for(const t of Gn)if(Gn.delete(t),t(),Oe!==null)break}#h(){for(const t of this.#r)t();if(this.#r.clear(),on.size>1){this.#e.clear();let t=!0;for(const r of on){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;wa(n)}if(Ct.length>0){Oe=r;const n=_t.apply(r);for(const s of Ct)r.#o(s);Ct=[],n()}}Oe=null}on.delete(this)}increment(){this.#a+=1}decrement(){this.#a-=1;for(const t of this.#s)lt(t,ht),dr(t);for(const t of this.#f)lt(t,tr),dr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=ca()).promise}static ensure(){if(Oe===null){const t=Oe=new _t;on.add(Oe),Wr||_t.enqueue(()=>{Oe===t&&t.flush()})}return Oe}static enqueue(t){ur(t)}static apply(t){return F}}function Ti(e){var t=Wr;Wr=!0;try{for(var r;;){if(ki(),Ct.length===0&&(Oe?.flush(),Ct.length===0))return Sn=null,r;ya()}}finally{Wr=t}}function ya(){var e=xr;Qn=!0;try{var t=0;for(Cs(!0);Ct.length>0;){var r=_t.ensure();if(t++>1e3){var n,s;Ci()}r.process(Ct),Jt.clear()}}finally{Qn=!1,Cs(e),Sn=null}}function Ci(){try{ni()}catch(e){Er(e,Sn)}}let nr=null;function $s(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(pr|Pt))===0&&kn(n)&&(nr=[],Yr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Da(n):n.fn=null),nr?.length>0)){Jt.clear();for(const s of nr)Yr(s);nr=[]}}nr=null}}function wa(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&dt)!==0?wa(t):(r&(bn|vr))!==0&&(lt(t,ht),dr(t))}}function dr(e){for(var t=Sn=e;t.parent!==null;){t=t.parent;var r=t.f;if(Qn&&t===Ee&&(r&vr)!==0)return;if((r&(hr|zt))!==0){if((r&nt)===0)return;t.f^=nt}}Ct.push(t)}function fs(e){let t=0,r=Xt(0),n;return()=>{Gi()&&(a(r),gs(()=>(t===0&&(n=Dr(()=>e(()=>Nt(r)))),t+=1,()=>{ur(()=>{t-=1,t===0&&(n?.(),n=void 0,Nt(r))})})))}}var Ni=mr|Nr|us;function Ii(e,t,r){new Mi(e,t,r)}class Mi{parent;#e=!1;#r;#a=null;#u;#d;#i;#c=null;#l=null;#s=null;#f=null;#o=0;#v=0;#h=!1;#p=null;#n=()=>{this.#p&&$r(this.#p,this.#o)};#g=fs(()=>(this.#p=Xt(this.#o),()=>{this.#p=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#d=n,this.parent=Ee.b,this.#e=!!this.#u.pending,this.#i=Wt(()=>{Ee.b=this;{try{this.#c=tt(()=>n(this.#r))}catch(s){this.error(s)}this.#v>0?this.#t():this.#e=!1}},Ni)}#S(){try{this.#c=tt(()=>this.#d(this.#r))}catch(t){this.error(t)}this.#e=!1}#m(){const t=this.#u.pending;t&&(this.#l=tt(()=>t(this.#r)),_t.enqueue(()=>{this.#c=this.#_(()=>(_t.ensure(),tt(()=>this.#d(this.#r)))),this.#v>0?this.#t():(qt(this.#l,()=>{this.#l=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#_(t){var r=Ee,n=$e,s=Ke;It(this.#i),ut(this.#i),Pr(this.#i.ctx);try{return t()}catch(o){return _a(o),null}finally{It(r),ut(n),Pr(s)}}#t(){const t=this.#u.pending;this.#c!==null&&(this.#f=document.createDocumentFragment(),Di(this.#c,this.#f)),this.#l===null&&(this.#l=tt(()=>t(this.#r)))}#b(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#b(t);return}this.#v+=t,this.#v===0&&(this.#e=!1,this.#l&&qt(this.#l,()=>{this.#l=null}),this.#f&&(this.#r.before(this.#f),this.#f=null),ur(()=>{_t.ensure().flush()}))}update_pending_count(t){this.#b(t),this.#o+=t,Gn.add(this.#n)}get_effect_pending(){return this.#g(),a(this.#p)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#h||!r&&!n)throw t;this.#c&&(rt(this.#c),this.#c=null),this.#l&&(rt(this.#l),this.#l=null),this.#s&&(rt(this.#s),this.#s=null);var s=!1,o=!1;const i=()=>{if(s){Si();return}s=!0,o&&li(),_t.ensure(),this.#o=0,this.#s!==null&&qt(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#c=this.#_(()=>(this.#h=!1,tt(()=>this.#d(this.#r)))),this.#v>0?this.#t():this.#e=!1};var l=$e;try{ut(null),o=!0,r?.(t,i),o=!1}catch(c){Er(c,this.#i&&this.#i.parent)}finally{ut(l)}n&&ur(()=>{this.#s=this.#_(()=>{this.#h=!0;try{return tt(()=>{n(this.#r,()=>t,()=>i)})}catch(c){return Er(c,this.#i.parent),null}finally{this.#h=!1}})})}}function Di(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:rn(r);t.append(r),r=s}}function Sa(e,t,r){const n=Mr()?xn:vs;if(t.length===0){r(e.map(n));return}var s=Oe,o=Ee,i=Ri();Promise.all(t.map(l=>Oi(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(o.f&pr)===0&&Er(c,o)}s?.deactivate(),xa()}).catch(l=>{Er(l,o)})}function Ri(){var e=Ee,t=$e,r=Ke,n=Oe;return function(){It(e),ut(t),Pr(r),n?.activate()}}function xa(){It(null),ut(null),Pr(null)}function xn(e){var t=dt|ht,r=$e!==null&&($e.f&dt)!==0?$e:null;return Ee===null||r!==null&&(r.f&bt)!==0?t|=bt:Ee.f|=Nr,{ctx:Ke,deps:null,effects:null,equals:ha,f:t,fn:e,reactions:null,rv:0,v:Je,wv:0,parent:r??Ee,ac:null}}function Oi(e,t){let r=Ee;r===null&&Fo();var n=r.b,s=void 0,o=Xt(Je),i=!$e,l=new Map;return Ki(()=>{var c=ca();s=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var f=Oe,v=n.is_pending();i&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(Vr),l.set(f,c)));const g=(p,m=void 0)=>{v||f.activate(),m?m!==Vr&&(o.f|=ir,$r(o,m)):((o.f&ir)!==0&&(o.f^=ir),$r(o,p)),i&&(n.update_pending_count(-1),v||f.decrement()),xa()};c.promise.then(g,p=>g(null,p||"unknown"))}),Ca(()=>{for(const c of l.values())c.reject(Vr)}),new Promise(c=>{function f(v){function g(){v===s?c(o):f(s)}v.then(g,g)}f(s)})}function Y(e){const t=xn(e);return qa(t),t}function vs(e){const t=xn(e);return t.equals=ma,t}function Pa(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)rt(t[r])}}function qi(e){for(var t=e.parent;t!==null;){if((t.f&dt)===0)return t;t=t.parent}return null}function hs(e){var t,r=Ee;It(qi(e));try{Pa(e),t=za(e)}finally{It(r)}return t}function Ea(e){var t=hs(e);if(e.equals(t)||(e.v=t,e.wv=Ba()),!_r){var r=(Kt||(e.f&bt)!==0)&&e.deps!==null?tr:nt;lt(e,r)}}const Jt=new Map;function Xt(e,t){var r={f:0,v:e,reactions:null,equals:ha,rv:0,wv:0};return r}function W(e,t){const r=Xt(e);return qa(r),r}function ji(e,t=!1,r=!0){const n=Xt(e);return t||(n.equals=ma),Ir&&r&&Ke!==null&&Ke.l!==null&&(Ke.l.s??=[]).push(n),n}function $(e,t,r=!1){$e!==null&&(!xt||($e.f&Es)!==0)&&Mr()&&($e.f&(dt|vr|bn|Es))!==0&&!jt?.includes(e)&&ii();let n=r?Ne(t):t;return $r(e,n)}function $r(e,t){if(!e.equals(t)){var r=e.v;_r?Jt.set(e,t):Jt.set(e,r),e.v=t;var n=_t.ensure();n.capture(e,r),(e.f&dt)!==0&&((e.f&ht)!==0&&hs(e),lt(e,(e.f&bt)===0?nt:tr)),e.wv=Ba(),$a(e,ht),Mr()&&Ee!==null&&(Ee.f&nt)!==0&&(Ee.f&(zt|hr))===0&&(gt===null?Zi([e]):gt.push(e))}return t}function Nt(e){$(e,e.v+1)}function $a(e,t){var r=e.reactions;if(r!==null)for(var n=Mr(),s=r.length,o=0;o<s;o++){var i=r[o],l=i.f;if(!(!n&&i===Ee)){var c=(l&ht)===0;c&&lt(i,t),(l&dt)!==0?$a(i,tr):c&&((l&vr)!==0&&nr!==null&&nr.push(i),dr(i))}}}function Ne(e){if(typeof e!="object"||e===null||lr in e)return e;const t=la(e);if(t!==Qo&&t!==Ko)return e;var r=new Map,n=_n(e),s=W(0),o=Bt,i=l=>{if(Bt===o)return l();var c=$e,f=Bt;ut(null),Is(o);var v=l();return ut(c),Is(f),v};return n&&r.set("length",W(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&ai();var v=r.get(c);return v===void 0?v=i(()=>{var g=W(f.value);return r.set(c,g),g}):$(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=i(()=>W(Je));r.set(c,v),Nt(s)}}else $(f,Je),Nt(s);return!0},get(l,c,f){if(c===lr)return e;var v=r.get(c),g=c in l;if(v===void 0&&(!g||Yt(l,c)?.writable)&&(v=i(()=>{var m=Ne(g?l[c]:Je),_=W(m);return _}),r.set(c,v)),v!==void 0){var p=a(v);return p===Je?void 0:p}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=a(v))}else if(f===void 0){var g=r.get(c),p=g?.v;if(g!==void 0&&p!==Je)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,c){if(c===lr)return!0;var f=r.get(c),v=f!==void 0&&f.v!==Je||Reflect.has(l,c);if(f!==void 0||Ee!==null&&(!v||Yt(l,c)?.writable)){f===void 0&&(f=i(()=>{var p=v?Ne(l[c]):Je,m=W(p);return m}),r.set(c,f));var g=a(f);if(g===Je)return!1}return v},set(l,c,f,v){var g=r.get(c),p=c in l;if(n&&c==="length")for(var m=f;m<g.v;m+=1){var _=r.get(m+"");_!==void 0?$(_,Je):m in l&&(_=i(()=>W(Je)),r.set(m+"",_))}if(g===void 0)(!p||Yt(l,c)?.writable)&&(g=i(()=>W(void 0)),$(g,Ne(f)),r.set(c,g));else{p=g.v!==Je;var S=i(()=>Ne(f));$(g,S)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(v,f),!p){if(n&&typeof c=="string"){var y=r.get("length"),P=Number(c);Number.isInteger(P)&&P>=y.v&&$(y,P+1)}Nt(s)}return!0},ownKeys(l){a(s);var c=Reflect.ownKeys(l).filter(g=>{var p=r.get(g);return p===void 0||p.v!==Je});for(var[f,v]of r)v.v!==Je&&!(f in l)&&c.push(f);return c},setPrototypeOf(){oi()}})}function ks(e){try{if(e!==null&&typeof e=="object"&&lr in e)return e[lr]}catch{}return e}function Bi(e,t){return Object.is(ks(e),ks(t))}var As,ka,Aa,Ta;function Li(){if(As===void 0){As=window,ka=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Aa=Yt(t,"firstChild").get,Ta=Yt(t,"nextSibling").get,Ps(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Ps(r)&&(r.__t=void 0)}}function Ut(e=""){return document.createTextNode(e)}function kr(e){return Aa.call(e)}function rn(e){return Ta.call(e)}function u(e,t){return kr(e)}function I(e,t=!1){{var r=kr(e);return r instanceof Comment&&r.data===""?rn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=rn(n);return n}function zi(e){e.textContent=""}function Pn(){return!1}function Ui(e,t){if(t){const r=document.body;e.autofocus=!0,ur(()=>{document.activeElement===r&&e.focus()})}}let Ts=!1;function Vi(){Ts||(Ts=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function En(e){var t=$e,r=Ee;ut(null),It(null);try{return e()}finally{ut(t),It(r)}}function ps(e,t,r,n=r){e.addEventListener(t,()=>En(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),Vi()}function Wi(e){Ee===null&&$e===null&&ri(),$e!==null&&($e.f&bt)!==0&&Ee===null&&ti(),_r&&ei()}function Hi(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Vt(e,t,r,n=!0){var s=Ee;s!==null&&(s.f&Pt)!==0&&(e|=Pt);var o={ctx:Ke,deps:null,nodes_start:null,nodes_end:null,f:e|ht,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Yr(o),o.f|=ds}catch(c){throw rt(o),c}else t!==null&&dr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Nr)===0&&(i=i.first),i!==null&&(i.parent=s,s!==null&&Hi(i,s),$e!==null&&($e.f&dt)!==0&&(e&hr)===0)){var l=$e;(l.effects??=[]).push(i)}}return o}function Gi(){return $e!==null&&!xt}function Ca(e){const t=Vt(cs,null,!1);return lt(t,nt),t.teardown=e,t}function gr(e){Wi();var t=Ee.f,r=!$e&&(t&zt)!==0&&(t&ds)===0;if(r){var n=Ke;(n.e??=[]).push(e)}else return Na(e)}function Na(e){return Vt(ls|Zo,e,!1)}function Qi(e){_t.ensure();const t=Vt(hr|Nr,e,!0);return(r={})=>new Promise(n=>{r.outro?qt(t,()=>{rt(t),n(void 0)}):(rt(t),n(void 0))})}function ms(e){return Vt(ls,e,!1)}function Ki(e){return Vt(bn|Nr,e,!0)}function gs(e,t=0){return Vt(cs|t,e,!0)}function L(e,t=[],r=[]){Sa(t,r,n=>{Vt(cs,()=>e(...n.map(a)),!0)})}function Wt(e,t=0){var r=Vt(vr|t,e,!0);return r}function tt(e,t=!0){return Vt(zt|Nr,e,!0,t)}function Ia(e){var t=e.teardown;if(t!==null){const r=_r,n=$e;Ns(!0),ut(null);try{t.call(null)}finally{Ns(r),ut(n)}}}function Ma(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&En(()=>{s.abort(Vr)});var n=r.next;(r.f&hr)!==0?r.parent=null:rt(r,t),r=n}}function Yi(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&zt)===0&&rt(t),t=r}}function rt(e,t=!0){var r=!1;(t||(e.f&Jo)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Ji(e.nodes_start,e.nodes_end),r=!0),Ma(e,t&&!r),mn(e,0),lt(e,pr);var n=e.transitions;if(n!==null)for(const o of n)o.stop();Ia(e);var s=e.parent;s!==null&&s.first!==null&&Da(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Ji(e,t){for(;e!==null;){var r=e===t?null:rn(e);e.remove(),e=r}}function Da(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function qt(e,t){var r=[];_s(e,r,!0),Ra(r,()=>{rt(e),t&&t()})}function Ra(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function _s(e,t,r){if((e.f&Pt)===0){if(e.f^=Pt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var s=n.next,o=(n.f&mr)!==0||(n.f&zt)!==0;_s(n,t,o?r:!1),n=s}}}function $n(e){Oa(e,!0)}function Oa(e,t){if((e.f&Pt)!==0){e.f^=Pt,(e.f&nt)===0&&(lt(e,ht),dr(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&mr)!==0||(r.f&zt)!==0;Oa(r,s?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let xr=!1;function Cs(e){xr=e}let _r=!1;function Ns(e){_r=e}let $e=null,xt=!1;function ut(e){$e=e}let Ee=null;function It(e){Ee=e}let jt=null;function qa(e){$e!==null&&(jt===null?jt=[e]:jt.push(e))}let it=null,vt=0,gt=null;function Zi(e){gt=e}let ja=1,Kr=0,Bt=Kr;function Is(e){Bt=e}let Kt=!1;function Ba(){return++ja}function kn(e){var t=e.f;if((t&ht)!==0)return!0;if((t&tr)!==0){var r=e.deps,n=(t&bt)!==0;if(r!==null){var s,o,i=(t&pn)!==0,l=n&&Ee!==null&&!Kt,c=r.length;if((i||l)&&(Ee===null||(Ee.f&pr)===0)){var f=e,v=f.parent;for(s=0;s<c;s++)o=r[s],(i||!o?.reactions?.includes(f))&&(o.reactions??=[]).push(f);i&&(f.f^=pn),l&&v!==null&&(v.f&bt)===0&&(f.f^=bt)}for(s=0;s<c;s++)if(o=r[s],kn(o)&&Ea(o),o.wv>e.wv)return!0}(!n||Ee!==null&&!Kt)&&lt(e,nt)}return!1}function La(e,t,r=!0){var n=e.reactions;if(n!==null&&!jt?.includes(e))for(var s=0;s<n.length;s++){var o=n[s];(o.f&dt)!==0?La(o,t,!1):t===o&&(r?lt(o,ht):(o.f&nt)!==0&&lt(o,tr),dr(o))}}function za(e){var t=it,r=vt,n=gt,s=$e,o=Kt,i=jt,l=Ke,c=xt,f=Bt,v=e.f;it=null,vt=0,gt=null,Kt=(v&bt)!==0&&(xt||!xr||$e===null),$e=(v&(zt|hr))===0?e:null,jt=null,Pr(e.ctx),xt=!1,Bt=++Kr,e.ac!==null&&(En(()=>{e.ac.abort(Vr)}),e.ac=null);try{e.f|=Hn;var g=e.fn,p=g(),m=e.deps;if(it!==null){var _;if(mn(e,vt),m!==null&&vt>0)for(m.length=vt+it.length,_=0;_<it.length;_++)m[vt+_]=it[_];else e.deps=m=it;if(!Kt||(v&dt)!==0&&e.reactions!==null)for(_=vt;_<m.length;_++)(m[_].reactions??=[]).push(e)}else m!==null&&vt<m.length&&(mn(e,vt),m.length=vt);if(Mr()&&gt!==null&&!xt&&m!==null&&(e.f&(dt|tr|ht))===0)for(_=0;_<gt.length;_++)La(gt[_],e);return s!==null&&s!==e&&(Kr++,gt!==null&&(n===null?n=gt:n.push(...gt))),(e.f&ir)!==0&&(e.f^=ir),p}catch(S){return _a(S)}finally{e.f^=Hn,it=t,vt=r,gt=n,$e=s,Kt=o,jt=i,Pr(l),xt=c,Bt=f}}function Xi(e,t){let r=t.reactions;if(r!==null){var n=Ho.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&dt)!==0&&(it===null||!it.includes(t))&&(lt(t,tr),(t.f&(bt|pn))===0&&(t.f^=pn),Pa(t),mn(t,0))}function mn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Xi(e,r[n])}function Yr(e){var t=e.f;if((t&pr)===0){lt(e,nt);var r=Ee,n=xr;Ee=e,xr=!0;try{(t&vr)!==0?Yi(e):Ma(e),Ia(e);var s=za(e);e.teardown=typeof s=="function"?s:null,e.wv=ja;var o;ia&&Ei&&(e.f&ht)!==0&&e.deps}finally{xr=n,Ee=r}}}async function Fi(){await Promise.resolve(),Ti()}function a(e){var t=e.f,r=(t&dt)!==0;if($e!==null&&!xt){var n=Ee!==null&&(Ee.f&pr)!==0;if(!n&&!jt?.includes(e)){var s=$e.deps;if(($e.f&Hn)!==0)e.rv<Kr&&(e.rv=Kr,it===null&&s!==null&&s[vt]===e?vt++:it===null?it=[e]:(!Kt||!it.includes(e))&&it.push(e));else{($e.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[$e]:o.includes($e)||o.push($e)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&bt)===0&&(i.f^=bt)}if(_r){if(Jt.has(e))return Jt.get(e);if(r){i=e;var c=i.v;return((i.f&nt)===0&&i.reactions!==null||Ua(i))&&(c=hs(i)),Jt.set(i,c),c}}else r&&(i=e,kn(i)&&Ea(i));if((e.f&ir)!==0)throw e.v;return e.v}function Ua(e){if(e.v===Je)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Jt.has(t)||(t.f&dt)!==0&&Ua(t))return!0;return!1}function Dr(e){var t=xt;try{return xt=!0,e()}finally{xt=t}}const el=-7169;function lt(e,t){e.f=e.f&el|t}function tl(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const rl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function nl(e){return rl.includes(e)}const sl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function al(e){return e=e.toLowerCase(),sl[e]??e}const ol=["touchstart","touchmove"];function il(e){return ol.includes(e)}const Va=new Set,Kn=new Set;function Wa(e,t,r,n={}){function s(o){if(n.capture||Lr.call(t,o),!o.cancelBubble)return En(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ur(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Yn(e,t,r,n={}){var s=Wa(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function Ze(e){for(var t=0;t<e.length;t++)Va.add(e[t]);for(var r of Kn)r(e)}let Ms=null;function Lr(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],o=s[0]||e.target;Ms=e;var i=0,l=Ms===e&&e.__root;if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=s.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(o=s[i]||e.target,o!==t){Wn(e,"currentTarget",{configurable:!0,get(){return o||r}});var v=$e,g=Ee;ut(null),It(null);try{for(var p,m=[];o!==null;){var _=o.assignedSlot||o.parentNode||o.host||null;try{var S=o["__"+n];if(S!=null&&(!o.disabled||e.target===o))if(_n(S)){var[b,...y]=S;b.apply(o,[e,...y])}else S.call(o,e)}catch(P){p?m.push(P):p=P}if(e.cancelBubble||_===t||_===null)break;o=_}if(p){for(let P of m)queueMicrotask(()=>{throw P});throw p}}finally{e.__root=t,delete e.currentTarget,ut(v),It(g)}}}function Ha(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Ar(e,t){var r=Ee;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function x(e,t){var r=(t&mi)!==0,n=(t&gi)!==0,s,o=!e.startsWith("<!>");return()=>{s===void 0&&(s=Ha(o?e:"<!>"+e),r||(s=kr(s)));var i=n||ka?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=kr(i),c=i.lastChild;Ar(l,c)}else Ar(i,i);return i}}function ll(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Ha(s),l=kr(i);o=kr(l)}var c=o.cloneNode(!0);return Ar(c,c),c}}function cl(e,t){return ll(e,t,"svg")}function yt(e=""){{var t=Ut(e+"");return Ar(t,t),t}}function z(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Ut();return e.append(t,r),Ar(t,r),e}function h(e,t){e!==null&&e.before(t)}function B(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function ul(e,t){return dl(e,t)}const wr=new Map;function dl(e,{target:t,anchor:r,props:n={},events:s,context:o,intro:i=!0}){Li();var l=new Set,c=g=>{for(var p=0;p<g.length;p++){var m=g[p];if(!l.has(m)){l.add(m);var _=il(m);t.addEventListener(m,Lr,{passive:_});var S=wr.get(m);S===void 0?(document.addEventListener(m,Lr,{passive:_}),wr.set(m,1)):wr.set(m,S+1)}}};c(is(Va)),Kn.add(c);var f=void 0,v=Qi(()=>{var g=r??t.appendChild(Ut());return Ii(g,{pending:()=>{}},p=>{if(o){U({});var m=Ke;m.c=o}s&&(n.$$events=s),f=e(p,n)||{},o&&V()}),()=>{for(var p of l){t.removeEventListener(p,Lr);var m=wr.get(p);--m===0?(document.removeEventListener(p,Lr),wr.delete(p)):wr.set(p,m)}Kn.delete(c),g!==r&&g.parentNode?.removeChild(g)}});return fl.set(f,v),f}let fl=new WeakMap;function T(e,t,r=!1){var n=e,s=null,o=null,i=Je,l=r?mr:0,c=!1;const f=(m,_=!0)=>{c=!0,p(_,m)};var v=null;function g(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var m=i?s:o,_=i?o:s;m&&$n(m),_&&qt(_,()=>{i?o=null:s=null})}const p=(m,_)=>{if(i!==(i=m)){var S=Pn(),b=n;if(S&&(v=document.createDocumentFragment(),v.append(b=Ut())),i?s??=_&&tt(()=>_(b)):o??=_&&tt(()=>_(b)),S){var y=Oe,P=i?s:o,w=i?o:s;P&&y.skipped_effects.delete(P),w&&y.skipped_effects.add(w),y.add_callback(g)}else g()}};Wt(()=>{c=!1,t(f),c||p(null,null)},l)}function vl(e,t,r){var n=e,s=Je,o,i,l=null,c=Mr()?Pi:pa;function f(){o&&qt(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}Wt(()=>{if(c(s,s=t())){var v=n,g=Pn();g&&(l=document.createDocumentFragment(),l.append(v=Ut())),i=tt(()=>r(v)),g?Oe.add_callback(f):f()}})}function Jn(e,t){return t}function hl(e,t,r){for(var n=e.items,s=[],o=t.length,i=0;i<o;i++)_s(t[i].e,s,!0);var l=o>0&&s.length===0&&r!==null;if(l){var c=r.parentNode;zi(c),c.append(r),n.clear(),Tt(e,t[0].prev,t[o-1].next)}Ra(s,()=>{for(var f=0;f<o;f++){var v=t[f];l||(n.delete(v.k),Tt(e,v.prev,v.next)),rt(v.e,!l)}})}function st(e,t,r,n,s,o=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&va)!==0;if(c){var f=e;i=f.appendChild(Ut())}var v=null,g=!1,p=new Map,m=vs(()=>{var y=r();return _n(y)?y:y==null?[]:is(y)}),_,S;function b(){pl(S,_,l,p,i,s,t,n,r),o!==null&&(_.length===0?v?$n(v):v=tt(()=>o(i)):v!==null&&qt(v,()=>{v=null}))}Wt(()=>{S??=Ee,_=a(m);var y=_.length;if(!(g&&y===0)){g=y===0;var P,w,E,k;if(Pn()){var A=new Set,N=Oe;for(w=0;w<y;w+=1){E=_[w],k=n(E,w);var M=l.items.get(k)??p.get(k);M?(t&(yn|wn))!==0&&Ga(M,E,w,t):(P=Qa(null,l,null,null,E,k,w,s,t,r,!0),p.set(k,P)),A.add(k)}for(const[X,j]of l.items)A.has(X)||N.skipped_effects.add(j.e);N.add_callback(b)}else b();a(m)}})}function pl(e,t,r,n,s,o,i,l,c){var f=(i&ci)!==0,v=(i&(yn|wn))!==0,g=t.length,p=r.items,m=r.first,_=m,S,b=null,y,P=[],w=[],E,k,A,N;if(f)for(N=0;N<g;N+=1)E=t[N],k=l(E,N),A=p.get(k),A!==void 0&&(A.a?.measure(),(y??=new Set).add(A));for(N=0;N<g;N+=1){if(E=t[N],k=l(E,N),A=p.get(k),A===void 0){var M=n.get(k);if(M!==void 0){n.delete(k),p.set(k,M);var X=b?b.next:_;Tt(r,b,M),Tt(r,M,X),Rn(M,X,s),b=M}else{var j=_?_.e.nodes_start:s;b=Qa(j,r,b,b===null?r.first:b.next,E,k,N,o,i,c)}p.set(k,b),P=[],w=[],_=b.next;continue}if(v&&Ga(A,E,N,i),(A.e.f&Pt)!==0&&($n(A.e),f&&(A.a?.unfix(),(y??=new Set).delete(A))),A!==_){if(S!==void 0&&S.has(A)){if(P.length<w.length){var H=w[0],ee;b=H.prev;var ge=P[0],q=P[P.length-1];for(ee=0;ee<P.length;ee+=1)Rn(P[ee],H,s);for(ee=0;ee<w.length;ee+=1)S.delete(w[ee]);Tt(r,ge.prev,q.next),Tt(r,b,ge),Tt(r,q,H),_=H,b=q,N-=1,P=[],w=[]}else S.delete(A),Rn(A,_,s),Tt(r,A.prev,A.next),Tt(r,A,b===null?r.first:b.next),Tt(r,b,A),b=A;continue}for(P=[],w=[];_!==null&&_.k!==k;)(_.e.f&Pt)===0&&(S??=new Set).add(_),w.push(_),_=_.next;if(_===null)continue;A=_}P.push(A),b=A,_=A.next}if(_!==null||S!==void 0){for(var D=S===void 0?[]:is(S);_!==null;)(_.e.f&Pt)===0&&D.push(_),_=_.next;var G=D.length;if(G>0){var se=(i&va)!==0&&g===0?s:null;if(f){for(N=0;N<G;N+=1)D[N].a?.measure();for(N=0;N<G;N+=1)D[N].a?.fix()}hl(r,D,se)}}f&&ur(()=>{if(y!==void 0)for(A of y)A.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var ae of n.values())rt(ae.e);n.clear()}function Ga(e,t,r,n){(n&yn)!==0&&$r(e.v,t),(n&wn)!==0?$r(e.i,r):e.i=r}function Qa(e,t,r,n,s,o,i,l,c,f,v){var g=(c&yn)!==0,p=(c&ui)===0,m=g?p?ji(s,!1,!1):Xt(s):s,_=(c&wn)===0?i:Xt(i),S={i:_,v:m,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=Ut())}return S.e=tt(()=>l(e,m,_,f),xi),S.e.prev=r&&r.e,S.e.next=n&&n.e,r===null?v||(t.first=S):(r.next=S,r.e.next=S.e),n!==null&&(n.prev=S,n.e.prev=S.e),S}finally{}}function Rn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=rn(o);s.before(o),o=i}}function Tt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ne(e,t,...r){var n=e,s=F,o;Wt(()=>{s!==(s=t())&&(o&&(rt(o),o=null),o=tt(()=>s(n,...r)))},mr)}function cr(e,t,r){var n=e,s,o,i=null,l=null;function c(){o&&(qt(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}Wt(()=>{if(s!==(s=t())){var f=Pn();if(s){var v=n;f&&(i=document.createDocumentFragment(),i.append(v=Ut()),o&&Oe.skipped_effects.add(o)),l=tt(()=>r(v,s))}f?Oe.add_callback(c):c()}},mr)}function ml(e,t,r,n,s,o){var i,l,c=null,f=e,v;Wt(()=>{const g=t()||null;var p=bi;g!==i&&(v&&(g===null?qt(v,()=>{v=null,l=null}):g===l?$n(v):rt(v)),g&&g!==l&&(v=tt(()=>{if(c=document.createElementNS(p,g),Ar(c,c),n){var m=c.appendChild(Ut());n(c,m)}Ee.nodes_end=c,f.before(c)})),i=g,i&&(l=i))},mr)}function gl(e,t){var r=void 0,n;Wt(()=>{r!==(r=t())&&(n&&(rt(n),n=null),r&&(n=tt(()=>{ms(()=>r(e))})))})}function Ka(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Ka(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function _l(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Ka(e))&&(n&&(n+=" "),n+=t);return n}function bl(e){return typeof e=="object"?_l(e):e??""}const Ds=[...` 	
\r\f \v\uFEFF`];function yl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var o=s.length,i=0;(i=n.indexOf(s,i))>=0;){var l=i+o;(i===0||Ds.includes(n[i-1]))&&(l===n.length||Ds.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Rs(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var o=e[s];o!=null&&o!==""&&(n+=" "+s+": "+o+r)}return n}function On(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function wl(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(On)),s&&c.push(...Object.keys(s).map(On));var f=0,v=-1;const S=e.length;for(var g=0;g<S;g++){var p=e[g];if(l?p==="/"&&e[g-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[g+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?i++:p===")"&&i--,!l&&o===!1&&i===0){if(p===":"&&v===-1)v=g;else if(p===";"||g===S-1){if(v!==-1){var m=On(e.substring(f,v).trim());if(!c.includes(m)){p!==";"&&g++;var _=e.substring(f,g).trim();r+=" "+_+";"}}f=g+1,v=-1}}}}return n&&(r+=Rs(n)),s&&(r+=Rs(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Pe(e,t,r,n,s,o){var i=e.__className;if(i!==r||i===void 0){var l=yl(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&s!==o)for(var c in o){var f=!!o[c];(s==null||f!==!!s[c])&&e.classList.toggle(c,f)}return o}function qn(e,t={},r,n){for(var s in r){var o=r[s];t[s]!==o&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,o,n))}}function Ya(e,t,r,n){var s=e.__style;if(s!==t){var o=wl(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(qn(e,r?.[0],n[0]),qn(e,r?.[1],n[1],"important")):qn(e,r,n));return n}function gn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!_n(t))return wi();for(var n of e.options)n.selected=t.includes(Hr(n));return}for(n of e.options){var s=Hr(n);if(Bi(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Ja(e){var t=new MutationObserver(()=>{gn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ca(()=>{t.disconnect()})}function ar(e,t,r=t){var n=!0;ps(e,"change",s=>{var o=s?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),Hr);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&Hr(l)}r(i)}),ms(()=>{var s=t();if(gn(e,s,n),n&&s===void 0){var o=e.querySelector(":checked");o!==null&&(s=Hr(o),r(s))}e.__value=s,n=!1}),Ja(e)}function Hr(e){return"__value"in e?e.__value:e.value}const jr=Symbol("class"),Br=Symbol("style"),Za=Symbol("is custom element"),Xa=Symbol("is html");function Sl(e,t){var r=An(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function jn(e,t){var r=An(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function xl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Lt(e,t,r,n){var s=An(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[Xo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Fa(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Pl(e,t,r,n,s=!1,o=!1){var i=An(e),l=i[Za],c=!i[Xa],f=t||{},v=e.tagName==="OPTION";for(var g in t)g in r||(r[g]=null);r.class?r.class=bl(r.class):r[jr]&&(r.class=null),r[Br]&&(r.style??=null);var p=Fa(e);for(const E in r){let k=r[E];if(v&&E==="value"&&k==null){e.value=e.__value="",f[E]=k;continue}if(E==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Pe(e,m,k,n,t?.[jr],r[jr]),f[E]=k,f[jr]=r[jr];continue}if(E==="style"){Ya(e,k,t?.[Br],r[Br]),f[E]=k,f[Br]=r[Br];continue}var _=f[E];if(!(k===_&&!(k===void 0&&e.hasAttribute(E)))){f[E]=k;var S=E[0]+E[1];if(S!=="$$")if(S==="on"){const A={},N="$$"+E;let M=E.slice(2);var b=nl(M);if(tl(M)&&(M=M.slice(0,-7),A.capture=!0),!b&&_){if(k!=null)continue;e.removeEventListener(M,f[N],A),f[N]=null}if(k!=null)if(b)e[`__${M}`]=k,Ze([M]);else{let X=function(j){f[E].call(this,j)};var w=X;f[N]=Wa(M,e,X,A)}else b&&(e[`__${M}`]=void 0)}else if(E==="style")Lt(e,E,k);else if(E==="autofocus")Ui(e,!!k);else if(!l&&(E==="__value"||E==="value"&&k!=null))e.value=e.__value=k;else if(E==="selected"&&v)xl(e,k);else{var y=E;c||(y=al(y));var P=y==="defaultValue"||y==="defaultChecked";if(k==null&&!l&&!P)if(i[E]=null,y==="value"||y==="checked"){let A=e;const N=t===void 0;if(y==="value"){let M=A.defaultValue;A.removeAttribute(y),A.defaultValue=M,A.value=A.__value=N?M:null}else{let M=A.defaultChecked;A.removeAttribute(y),A.defaultChecked=M,A.checked=N?M:!1}}else e.removeAttribute(E);else P||p.includes(y)&&(l||typeof k!="string")?(e[y]=k,y in i&&(i[y]=Je)):typeof k!="function"&&Lt(e,y,k)}}}return f}function Os(e,t,r=[],n=[],s,o=!1,i=!1){Sa(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",g=!1;if(Wt(()=>{var m=t(...l.map(a)),_=Pl(e,c,m,s,o,i);g&&v&&"value"in m&&gn(e,m.value);for(let b of Object.getOwnPropertySymbols(f))m[b]||rt(f[b]);for(let b of Object.getOwnPropertySymbols(m)){var S=m[b];b.description===yi&&(!c||S!==c[b])&&(f[b]&&rt(f[b]),f[b]=tt(()=>gl(e,()=>S))),_[b]=S}c=_}),v){var p=e;ms(()=>{gn(p,c.value,!0),Ja(p)})}g=!0})}function An(e){return e.__attributes??={[Za]:e.nodeName.includes("-"),[Xa]:e.namespaceURI===_i}}var qs=new Map;function Fa(e){var t=e.getAttribute("is")||e.nodeName,r=qs.get(t);if(r)return r;qs.set(t,r=[]);for(var n,s=e,o=Element.prototype;o!==s;){n=Go(s);for(var i in n)n[i].set&&r.push(i);s=la(s)}return r}function Me(e,t,r=t){var n=new WeakSet;ps(e,"input",async s=>{var o=s?e.defaultValue:e.value;if(o=Bn(e)?Ln(o):o,r(o),Oe!==null&&n.add(Oe),await Fi(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),Dr(t)==null&&e.value&&(r(Bn(e)?Ln(e.value):e.value),Oe!==null&&n.add(Oe)),gs(()=>{var s=t();if(e===document.activeElement){var o=dn??Oe;if(n.has(o))return}Bn(e)&&s===Ln(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function El(e,t,r=t){ps(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),Dr(t)==null&&r(e.checked),gs(()=>{var n=t();e.checked=!!n})}function Bn(e){var t=e.type;return t==="number"||t==="range"}function Ln(e){return e===""?null:+e}let ln=!1;function $l(e){var t=ln;try{return ln=!1,[e(),ln]}finally{ln=t}}const kl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ce(e,t,r){return new Proxy({props:e,exclude:t},kl)}const Al={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(qr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];qr(s)&&(s=s());const o=Yt(s,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(qr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=Yt(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===lr||t===da)return!1;for(let r of e.props)if(qr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(qr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ue(...e){return new Proxy({props:e},Al)}function Ce(e,t,r,n){var s=!Ir||(r&fi)!==0,o=(r&hi)!==0,i=(r&pi)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?Dr(n):n),l),v;if(o){var g=lr in e||da in e;v=Yt(e,t)?.set??(g&&t in e?w=>e[t]=w:void 0)}var p,m=!1;o?[p,m]=$l(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),v&&(s&&si(),v(p)));var _;if(s?_=()=>{var w=e[t];return w===void 0?f():(c=!0,w)}:_=()=>{var w=e[t];return w!==void 0&&(l=void 0),w===void 0?l:w},s&&(r&vi)===0)return _;if(v){var S=e.$$legacy;return(function(w,E){return arguments.length>0?((!s||!E||S||m)&&v(E?_():w),w):_()})}var b=!1,y=((r&di)!==0?xn:vs)(()=>(b=!1,_()));o&&a(y);var P=Ee;return(function(w,E){if(arguments.length>0){const k=E?a(y):s&&o?Ne(w):w;return $(y,k),b=!0,l!==void 0&&(l=k),w}return _r&&b||(P.f&pr)!==0?y.v:a(y)})}function eo(e){Ke===null&&fa(),Ir&&Ke.l!==null?Cl(Ke).m.push(e):gr(()=>{const t=Dr(e);if(typeof t=="function")return t})}function Tl(e){Ke===null&&fa(),eo(()=>()=>Dr(e))}function Cl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Nl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Nl);const Il="modulepreload",Ml=function(e){return"/"+e},js={},Dl=function(t,r,n){let s=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(g=>Promise.resolve(g).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");s=f(r.map(v=>{if(v=Ml(v),v in js)return;js[v]=!0;const g=v.endsWith(".css"),p=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${p}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":Il,g||(m.as="script"),m.crossOrigin="",m.href=v,c&&m.setAttribute("nonce",c),document.head.appendChild(m),g)return new Promise((_,S)=>{m.addEventListener("load",_),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${v}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return s.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};class Rl extends Map{#e=new Map;#r=W(0);#a=W(0);#u=Bt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#a.v=super.size}}#d(t){return Bt===this.#u?W(t):Xt(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#d(0),r.set(t,n);else return a(this.#r),!1}return a(n),!0}forEach(t,r){this.#i(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#d(0),r.set(t,n);else{a(this.#r);return}}return a(n),super.get(t)}set(t,r){var n=this.#e,s=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#r;if(s===void 0)s=this.#d(0),n.set(t,s),$(this.#a,super.size),Nt(l);else if(o!==r){Nt(s);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!s.reactions?.every(v=>c.has(v));f&&Nt(l)}return i}delete(t){var r=this.#e,n=r.get(t),s=super.delete(t);return n!==void 0&&(r.delete(t),$(this.#a,super.size),$(n,-1),Nt(this.#r)),s}clear(){if(super.size!==0){super.clear();var t=this.#e;$(this.#a,0);for(var r of t.values())$(r,-1);Nt(this.#r),t.clear()}}#i(){a(this.#r);var t=this.#e;if(this.#a.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#d(0);t.set(r,n)}}for([,n]of this.#e)a(n)}keys(){return a(this.#r),super.keys()}values(){return this.#i(),super.values()}entries(){return this.#i(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return a(this.#a),super.size}}class Ol{#e;#r;constructor(t,r){this.#e=t,this.#r=fs(r)}get current(){return this.#r(),this.#e()}}const ql=/\(.+\)/,jl=new Set(["all","print","screen","and","or","not","only"]);class Bl extends Ol{constructor(t,r){let n=ql.test(t)||t.split(/[\s,]+/).some(o=>jl.has(o.trim()))?t:`(${t})`;const s=window.matchMedia(n);super(()=>s.matches,o=>Yn(s,"change",o))}}const Ll=typeof window<"u"?window:void 0;function zl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Ul{#e;#r;constructor(t={}){const{window:r=Ll,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=fs(s=>{const o=Yn(r,"focusin",s),i=Yn(r,"focusout",s);return()=>{o(),i()}}))}get current(){return this.#r?.(),this.#e?zl(this.#e):null}}new Ul;function Vl(e){return typeof e=="function"}function Wl(e,t){if(Vl(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Hl(e,t){let r=W(null);const n=Y(()=>Wl(t,250));function s(...o){if(a(r))a(r).timeout&&clearTimeout(a(r).timeout);else{let i,l;const c=new Promise((f,v)=>{i=f,l=v});$(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return a(r).runner=async()=>{if(!a(r))return;const i=a(r);$(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},a(r).timeout=setTimeout(a(r).runner,a(n)),a(r).promise}return s.cancel=async()=>{(!a(r)||a(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!a(r)||a(r).timeout===null)||(clearTimeout(a(r).timeout),a(r).reject("Cancelled"),$(r,null))},s.runScheduledNow=async()=>{(!a(r)||!a(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!a(r)||!a(r).timeout)||(clearTimeout(a(r).timeout),a(r).timeout=null,await a(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!a(r)?.timeout}}),s}function Gl(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),s=new Date(r),o=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=s});return o.length?Gr(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function zr(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function fn(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function Gr(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function vn(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>or(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const s=[],o=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(s.push({q:v,u:c}),o.push(or(v.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:s,display:i}}function rr(e){return e?.length?e.map(t=>or(t.q.toString(),t.u)).join(" et "):"-"}function or(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,s=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${s}`}if(!["gr.","ml","kg","l."].includes(t)){let s=(Math.round(r*10)/10).toString();return s.endsWith(",0")&&(s=s.slice(0,-2)),`${s} ${t}`}return`${r} ${t}`}function Bs(e){return zr(e)}function bs(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const s=t.get(n)||0;t.set(n,s+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Ql(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,s=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([o])=>{const i=new Date(o);return i>=n&&i<=s}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function Kl(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Yl(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Jl(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(s=>{t.push({...s,date:r,dateTimeService:r})})}),t}function Zl(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return bs(t)}function Xl(e,t,r=""){if(e.status==="cancelled")return!1;const n=e.deliveryDate||e.$createdAt;return!n||n>t||r&&e.$createdAt<r?!1:e.status==="delivered"||e.status==="pending"||e.status==="ordered"&&n<=t}function zn(e,t){let r=[],n="";e.stockParsed?.dateTime&&e.stockParsed.dateTime<=t&&(r=[{q:parseFloat(e.stockParsed.quantity),u:e.stockParsed.unit}],n=e.stockParsed.dateTime);const s=[];if(e.purchases)for(const c of e.purchases)Xl(c,t,n)&&s.push({q:c.quantity,u:c.unit});const o=Fl(e,t),i=[...r,...s],l=bs(i);return ec(l,o)}function Fl(e,t){if(!e.byDate)return[];const r=[];for(const[n,s]of Object.entries(e.byDate))if(n<=t){const i=s.totalConsolidated;i&&r.push(...i)}return bs(r)}function ec(e,t){const r=new Map,n=new Map;e.forEach(({q:i,u:l})=>{r.set(l,(r.get(l)||0)+i)}),t.forEach(({q:i,u:l})=>{n.set(l,(n.get(l)||0)+i)});const s=[],o=new Set([...r.keys(),...n.keys()]);for(const i of o){const l=r.get(i)||0,c=n.get(i)||0,f=l-c;Math.abs(f)>.001&&s.push({q:f,u:i})}return s}function Un(e){if(!e?.length)return"Équilibré";const t=e.filter(n=>n.q>0),r=e.filter(n=>n.q<0);if(t.length>0&&r.length>0){const n=t.map(o=>or(o.q.toString(),o.u)).join(" et "),s=r.map(o=>or(Math.abs(o.q).toString(),o.u)).join(" et ");return`${n} disponibles, ${s} manquant${r.length>1?"s":""}`}else return t.length>0?t.map(n=>"+"+or(n.q.toString(),n.u)).join(" et ")+" disponibles":r.length>0?r.map(n=>or(Math.abs(n.q).toString(),n.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function tc(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class C{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}C.equal=(e,t)=>new C("equal",e,t).toString();C.notEqual=(e,t)=>new C("notEqual",e,t).toString();C.lessThan=(e,t)=>new C("lessThan",e,t).toString();C.lessThanEqual=(e,t)=>new C("lessThanEqual",e,t).toString();C.greaterThan=(e,t)=>new C("greaterThan",e,t).toString();C.greaterThanEqual=(e,t)=>new C("greaterThanEqual",e,t).toString();C.isNull=e=>new C("isNull",e).toString();C.isNotNull=e=>new C("isNotNull",e).toString();C.between=(e,t,r)=>new C("between",e,[t,r]).toString();C.startsWith=(e,t)=>new C("startsWith",e,t).toString();C.endsWith=(e,t)=>new C("endsWith",e,t).toString();C.select=e=>new C("select",void 0,e).toString();C.search=(e,t)=>new C("search",e,t).toString();C.orderDesc=e=>new C("orderDesc",e).toString();C.orderAsc=e=>new C("orderAsc",e).toString();C.orderRandom=()=>new C("orderRandom").toString();C.cursorAfter=e=>new C("cursorAfter",void 0,e).toString();C.cursorBefore=e=>new C("cursorBefore",void 0,e).toString();C.limit=e=>new C("limit",void 0,e).toString();C.offset=e=>new C("offset",void 0,e).toString();C.contains=(e,t)=>new C("contains",e,t).toString();C.notContains=(e,t)=>new C("notContains",e,t).toString();C.notSearch=(e,t)=>new C("notSearch",e,t).toString();C.notBetween=(e,t,r)=>new C("notBetween",e,[t,r]).toString();C.notStartsWith=(e,t)=>new C("notStartsWith",e,t).toString();C.notEndsWith=(e,t)=>new C("notEndsWith",e,t).toString();C.createdBefore=e=>new C("createdBefore",void 0,e).toString();C.createdAfter=e=>new C("createdAfter",void 0,e).toString();C.createdBetween=(e,t)=>new C("createdBetween",void 0,[e,t]).toString();C.updatedBefore=e=>new C("updatedBefore",void 0,e).toString();C.updatedAfter=e=>new C("updatedAfter",void 0,e).toString();C.updatedBetween=(e,t)=>new C("updatedBetween",void 0,[e,t]).toString();C.or=e=>new C("or",void 0,e.map(t=>JSON.parse(t))).toString();C.and=e=>new C("and",void 0,e.map(t=>JSON.parse(t))).toString();C.distanceEqual=(e,t,r,n=!0)=>new C("distanceEqual",e,[[t,r,n]]).toString();C.distanceNotEqual=(e,t,r,n=!0)=>new C("distanceNotEqual",e,[[t,r,n]]).toString();C.distanceGreaterThan=(e,t,r,n=!0)=>new C("distanceGreaterThan",e,[[t,r,n]]).toString();C.distanceLessThan=(e,t,r,n=!0)=>new C("distanceLessThan",e,[[t,r,n]]).toString();C.intersects=(e,t)=>new C("intersects",e,[t]).toString();C.notIntersects=(e,t)=>new C("notIntersects",e,[t]).toString();C.crosses=(e,t)=>new C("crosses",e,[t]).toString();C.notCrosses=(e,t)=>new C("notCrosses",e,[t]).toString();C.overlaps=(e,t)=>new C("overlaps",e,[t]).toString();C.notOverlaps=(e,t)=>new C("notOverlaps",e,[t]).toString();C.touches=(e,t)=>new C("touches",e,[t]).toString();C.notTouches=(e,t)=>new C("notTouches",e,[t]).toString();var to,ro;class Tr{static custom(t){return t}static unique(t=7){const r=tc(Tr,to,"m",ro).call(Tr);let n="";for(let s=0;s<t;s++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}to=Tr,ro=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Ls;(function(e){e.Totp="totp"})(Ls||(Ls={}));var zs;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(zs||(zs={}));var Us;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Us||(Us={}));var Vs;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Vs||(Vs={}));var Ws;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Ws||(Ws={}));var Hs;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Hs||(Hs={}));var Gs;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Gs||(Gs={}));var Qs;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Qs||(Qs={}));var Ks;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Ks||(Ks={}));class rc{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class no{constructor(t){this.generateIdentifier=t,this.kv=new rc}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class nc extends no{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function sc(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function ac(e,t){const r=sc(e);if("find"in r)return r.find(t);const n=r;for(let s=0;s<n.length;s++){const o=n[s];if(t(o))return o}}function Cr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function hn(e,t){return e.indexOf(t)!==-1}function Ys(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class oc{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return ac(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const ic=e=>Object.prototype.toString.call(e).slice(8,-1),so=e=>typeof e>"u",lc=e=>e===null,Jr=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,Zn=e=>Jr(e)&&Object.keys(e).length===0,Ft=e=>Array.isArray(e),cc=e=>typeof e=="string",uc=e=>typeof e=="number"&&!isNaN(e),dc=e=>typeof e=="boolean",fc=e=>e instanceof RegExp,Zr=e=>e instanceof Map,Xr=e=>e instanceof Set,ao=e=>ic(e)==="Symbol",vc=e=>e instanceof Date&&!isNaN(e.valueOf()),hc=e=>e instanceof Error,Js=e=>typeof e=="number"&&isNaN(e),pc=e=>dc(e)||lc(e)||so(e)||uc(e)||cc(e)||ao(e),mc=e=>typeof e=="bigint",gc=e=>e===1/0||e===-1/0,_c=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),bc=e=>e instanceof URL,oo=e=>e.replace(/\./g,"\\."),Vn=e=>e.map(String).map(oo).join("."),Qr=e=>{const t=[];let r="";for(let s=0;s<e.length;s++){let o=e.charAt(s);if(o==="\\"&&e.charAt(s+1)==="."){r+=".",s++;continue}if(o==="."){t.push(r),r="";continue}r+=o}const n=r;return t.push(n),t};function At(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const io=[At(so,"undefined",()=>null,()=>{}),At(mc,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),At(vc,"Date",e=>e.toISOString(),e=>new Date(e)),At(hc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),At(fc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),At(Xr,"set",e=>[...e.values()],e=>new Set(e)),At(Zr,"map",e=>[...e.entries()],e=>new Map(e)),At(e=>Js(e)||gc(e),"number",e=>Js(e)?"NaN":e>0?"Infinity":"-Infinity",Number),At(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),At(bc,"URL",e=>e.toString(),e=>new URL(e))];function Tn(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const lo=Tn((e,t)=>ao(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),yc=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),co=Tn(_c,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=yc[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function uo(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const fo=Tn(uo,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(s=>{n[s]=e[s]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),vo=Tn((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),wc=[fo,lo,vo,co],Zs=(e,t)=>{const r=Ys(wc,s=>s.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Ys(io,s=>s.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},ho={};io.forEach(e=>{ho[e.annotation]=e});const Sc=(e,t,r)=>{if(Ft(t))switch(t[0]){case"symbol":return lo.untransform(e,t,r);case"class":return fo.untransform(e,t,r);case"custom":return vo.untransform(e,t,r);case"typed-array":return co.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=ho[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Sr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function po(e){if(hn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(hn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(hn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const xc=(e,t)=>{po(t);for(let r=0;r<t.length;r++){const n=t[r];if(Xr(e))e=Sr(e,+n);else if(Zr(e)){const s=+n,o=+t[++r]==0?"key":"value",i=Sr(e,s);switch(o){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},Xn=(e,t,r)=>{if(po(t),t.length===0)return r(e);let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];if(Ft(n)){const l=+i;n=n[l]}else if(Jr(n))n=n[i];else if(Xr(n)){const l=+i;n=Sr(n,l)}else if(Zr(n)){if(o===t.length-2)break;const c=+i,f=+t[++o]==0?"key":"value",v=Sr(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const s=t[t.length-1];if(Ft(n)?n[+s]=r(n[+s]):Jr(n)&&(n[s]=r(n[s])),Xr(n)){const o=Sr(n,+s),i=r(o);o!==i&&(n.delete(o),n.add(i))}if(Zr(n)){const o=+t[t.length-2],i=Sr(n,o);switch(+s==0?"key":"value"){case"key":{const c=r(i);n.set(c,n.get(i)),c!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function Fn(e,t,r=[]){if(!e)return;if(!Ft(e)){Cr(e,(o,i)=>Fn(o,t,[...r,...Qr(i)]));return}const[n,s]=e;s&&Cr(s,(o,i)=>{Fn(o,t,[...r,...Qr(i)])}),t(n,r)}function Pc(e,t,r){return Fn(t,(n,s)=>{e=Xn(e,s,o=>Sc(o,n,r))}),e}function Ec(e,t){function r(n,s){const o=xc(e,Qr(s));n.map(Qr).forEach(i=>{e=Xn(e,i,()=>o)})}if(Ft(t)){const[n,s]=t;n.forEach(o=>{e=Xn(e,Qr(o),()=>e)}),s&&Cr(s,r)}else Cr(t,r);return e}const $c=(e,t)=>Jr(e)||Ft(e)||Zr(e)||Xr(e)||uo(e,t);function kc(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Ac(e,t){const r={};let n;return e.forEach(s=>{if(s.length<=1)return;t||(s=s.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[o,...i]=s;o.length===0?n=i.map(Vn):r[Vn(o)]=i.map(Vn)}),n?Zn(r)?[n]:[n,r]:Zn(r)?void 0:r}const mo=(e,t,r,n,s=[],o=[],i=new Map)=>{const l=pc(e);if(!l){kc(e,s,t);const m=i.get(e);if(m)return n?{transformedValue:null}:m}if(!$c(e,r)){const m=Zs(e,r),_=m?{transformedValue:m.value,annotations:[m.type]}:{transformedValue:e};return l||i.set(e,_),_}if(hn(o,e))return{transformedValue:null};const c=Zs(e,r),f=c?.value??e,v=Ft(f)?[]:{},g={};Cr(f,(m,_)=>{if(_==="__proto__"||_==="constructor"||_==="prototype")throw new Error(`Detected property ${_}. This is a prototype pollution risk, please remove it from your object.`);const S=mo(m,t,r,n,[...s,_],[...o,e],i);v[_]=S.transformedValue,Ft(S.annotations)?g[_]=S.annotations:Jr(S.annotations)&&Cr(S.annotations,(b,y)=>{g[oo(_)+"."+y]=b})});const p=Zn(g)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,g]:g};return l||i.set(e,p),p};function go(e){return Object.prototype.toString.call(e).slice(8,-1)}function Xs(e){return go(e)==="Array"}function Tc(e){if(go(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Cc(e,t,r,n,s){const o={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),s&&o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function es(e,t={}){if(Xs(e))return e.map(s=>es(s,t));if(!Tc(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((s,o)=>{if(Xs(t.props)&&!t.props.includes(o))return s;const i=e[o],l=es(i,t);return Cc(s,o,l,e,t.nonenumerable),s},{})}class je{constructor({dedupe:t=!1}={}){this.classRegistry=new nc,this.symbolRegistry=new no(r=>r.description??""),this.customTransformerRegistry=new oc,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=mo(t,r,this,this.dedupe),s={json:n.transformedValue};n.annotations&&(s.meta={...s.meta,values:n.annotations});const o=Ac(r,this.dedupe);return o&&(s.meta={...s.meta,referentialEqualities:o}),s}deserialize(t){const{json:r,meta:n}=t;let s=es(r);return n?.values&&(s=Pc(s,n.values,this)),n?.referentialEqualities&&(s=Ec(s,n.referentialEqualities)),s}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}je.defaultInstance=new je;je.serialize=je.defaultInstance.serialize.bind(je.defaultInstance);je.deserialize=je.defaultInstance.deserialize.bind(je.defaultInstance);je.stringify=je.defaultInstance.stringify.bind(je.defaultInstance);je.parse=je.defaultInstance.parse.bind(je.defaultInstance);je.registerClass=je.defaultInstance.registerClass.bind(je.defaultInstance);je.registerSymbol=je.defaultInstance.registerSymbol.bind(je.defaultInstance);je.registerCustom=je.defaultInstance.registerCustom.bind(je.defaultInstance);je.allowErrorProps=je.defaultInstance.allowErrorProps.bind(je.defaultInstance);class Nc{#e=W(Ne([]));MAX_TOASTS=3;get toasts(){return a(this.#e).sort((t,r)=>r.timestamp-t.timestamp)}create(t){const r=t.id||crypto.randomUUID(),n={id:r,state:t.state,message:t.message,timestamp:Date.now(),source:t.source||"user",timeoutId:void 0};return this.#r(n),r}update(t,r){const n=a(this.#e).findIndex(o=>o.id===t);if(n===-1)return;const s=a(this.#e)[n];s.timeoutId&&clearTimeout(s.timeoutId),a(this.#e)[n]={...s,state:r.state||s.state,message:r.message||s.message,source:r.source||s.source},this.#a(a(this.#e)[n])}async track(t,r){const n=this.create({id:r.id,state:"loading",message:r.loading,source:"user"});try{const s=await t;return this.update(n,{state:"success",message:r.success||"Opération réussie"}),s}catch(s){throw this.update(n,{state:"error",message:r.error||"Erreur lors de l'opération"}),s}}dismiss(t){const r=a(this.#e).findIndex(s=>s.id===t);if(r===-1)return;const n=a(this.#e)[r];n.timeoutId&&clearTimeout(n.timeoutId),a(this.#e).splice(r,1)}dismissAll(){a(this.#e).forEach(t=>{t.timeoutId&&clearTimeout(t.timeoutId)}),$(this.#e,[],!0)}#r(t){if(t.source==="user"){const r=a(this.#e).findIndex(n=>n.source==="user");r>=0?a(this.#e)[r]=t:a(this.#e).push(t)}else{const r=a(this.#e).filter(n=>n.source!=="user");if(r.length>=2){const n=r[0];this.dismiss(n.id)}a(this.#e).push(t)}a(this.#e).length>this.MAX_TOASTS&&a(this.#e).splice(0,a(this.#e).length-this.MAX_TOASTS),this.#a(t)}#a(t){if(t.state!=="success"&&t.state!=="info")return;const r=t.source==="realtime-other"?24e3:23e3;t.timeoutId=setTimeout(()=>{this.dismiss(t.id)},r)}success(t){return this.create({state:"success",message:t})}error(t){return this.create({state:"error",message:t})}info(t,r="system"){return this.create({state:"info",message:t,source:r})}loading(t){return this.create({state:"loading",message:t})}}const Ot=new Nc;function _o(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function Et(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function bo(e){const n=await(await window.AppwriteClient.getAccount()).get();return{...e,updatedBy:n.name}}function Ur(){return localStorage.getItem("appwrite-user-name")||""}async function Ic(e,t,r=100){try{const{databases:n,config:s}=await Et(),o=await n.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.purchases,[C.greaterThan("$updatedAt",t),C.equal("mainId",e),C.limit(r),C.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function yo(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:s,config:o}=await Et();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await s.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[C.equal("mainId",e),C.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),C.limit(n)])).documents;const i=await s.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[C.greaterThan("$updatedAt",r),C.equal("mainId",e),C.limit(n),C.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(s){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,s);const o=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function fr(e,t){const{databases:r,config:n}=await Et(),s=await bo(t);return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,s)}async function Qt(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const s=_o(n,t),o=await bo(s),{databases:i,config:l}=await Et(),c=await i.createDocument(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,e,o);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),c}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const s=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${s}`)}}async function wo(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await fr(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function So(e,t){return fr(e,{who:t})}async function ts(e,t){return fr(e,{stockReel:t})}async function xo(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const s={};return t.stockReel!==void 0&&(s.stockReel=t.stockReel),t.who!==void 0&&(s.who=t.who),t.storeInfo!==void 0&&(s.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await fr(e,s)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await Qt(e,s,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function Po(e){const{databases:t,config:r}=await Et(),n={...e,createdBy:Ur()},s=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,Tr.unique(),n);return console.log("[Appwrite Interactions] Achat créé:",s),s}async function Eo(e,t){try{const{databases:r,config:n}=await Et(),s=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||s.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function $o(e){try{const{databases:t,config:r}=await Et();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function ko(e){if(!e?.length)return[];try{const{databases:t,config:r}=await Et(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[C.equal("$id",e),C.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Ao(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(m=>m.includes("products.")),f=i.some(m=>m.includes("purchases.")),v=i.some(m=>m.includes(".create")),g=i.some(m=>m.includes(".update")),p=i.some(m=>m.includes(".delete"));if(c){const m=l;m.updatedBy&&m.updatedBy!==Ur()&&(v||g?Ot.info(`${m.updatedBy} a modifié le produit "${m.productName}"`,"realtime-other"):p&&Ot.info(`${m.updatedBy} a supprimé un produit`,"realtime-other")),v&&t.onProductCreate?t.onProductCreate(m):g&&t.onProductUpdate?t.onProductUpdate(m):p&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(f){const m=l;if(m.createdBy&&m.createdBy!==Ur()){const _=m.products?.[0]?.productName||"un produit";v&&m.who!==Ur()?Ot.info(`${m.who} a ajouté un achat pour ${_}`,"realtime-other"):g&&m.who!==Ur()?Ot.info(`${m.who} a modifié un achat pour ${_}`,"realtime-other"):p&&Ot.info(`${m.who} a supprimé un achat pour ${_}`,"realtime-other")}v&&t.onPurchaseCreate?t.onPurchaseCreate(m):g&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):p&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function To(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await Et(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Co(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:s}=await Et(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await s.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(s){throw console.error("[Appwrite Interactions] Erreur création Main document:",s),s}}async function ys(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const s=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(s.status!=="completed")throw new Error(`Exécution échouée avec statut: ${s.status}. Erreur: ${s.stderr}`);const o=JSON.parse(s.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function No(e,t,r,n){return ys({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function Io(e,t,r,n="replace"){return ys({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function Mo(e,t,r,n={}){try{const{databases:s,config:o}=await Et(),c=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const v of r){const g={products:[t],mainId:e,quantity:v.q,unit:v.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await s.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,Tr.unique(),g);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${t}`),f}catch(s){console.error("[Appwrite Interactions] Erreur création validation rapide:",s);const o=s instanceof Error?s.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const Mc=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:ys,batchUpdateStore:No,batchUpdateWho:Io,createMainDocument:Co,createPurchase:Po,createQuickValidationPurchases:Mo,deletePurchase:$o,enrichedProductToAppwriteProduct:_o,loadMainEventData:To,loadPurchasesListByIds:ko,loadUpdatedPurchases:Ic,subscribeToRealtime:Ao,syncProductsWithPurchases:yo,updateProduct:fr,updateProductBatch:xo,updateProductStock:ts,updateProductStore:wo,updateProductWho:So,updatePurchase:Eo,upsertProduct:Qt},Symbol.toStringTag,{value:"Module"}));async function Dc(e){const t=await fetch(`/evenements/${e}/metadata.json`);if(!t.ok)throw new Error(`Impossible de charger les métadonnées Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.hugoContentHash)throw new Error("Format de métadonnées Hugo invalide");return r}async function Rc(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}async function Oc(e,t){if(!e)return!0;try{return(await Dc(t)).hugoContentHash!==e}catch(r){return console.warn("Impossible de vérifier le hash Hugo:",r),!1}}function qc(e,t){const r=Zl(e.byDate),n=Gr(fn([])),{numeric:s,display:o}=vn(r,n);return{$id:`${e.productSemanticKey}`||`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:s,stockOrTotalPurchases:"-",displayTotalNeeded:rr(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function jc(e,t){return e.map(r=>qc(r,t))}class Bc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";LAST_SYNC_KEY="lastSync";ALL_DATES_KEY="allDates";HUGO_HASH_KEY="hugoContentHash";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=s=>{const o=s.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE,{keyPath:"key"}),console.log("[IDBCache] Object store 'metadata' créé avec keyPath"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).getAll();o.onsuccess=()=>{const i=o.result,l={lastSync:null,allDates:[],hugoContentHash:null};i.forEach(c=>{c.key===this.LAST_SYNC_KEY?l.lastSync=c.value:c.key===this.ALL_DATES_KEY?l.allDates=c.value||[]:c.key===this.HUGO_HASH_KEY&&(l.hugoContentHash=c.value)}),console.log(`[IDBCache] Metadata chargées: lastSync=${l.lastSync}, dates=${l.allDates?.length||0}, hash=${l.hugoContentHash}`),t(l)},o.onerror=()=>r(o.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const s=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=s.objectStore(this.PRODUCTS_STORE);o.clear(),t.forEach(i=>{o.put(i)}),s.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},s.onerror=()=>n(s.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const s=this.db.transaction(this.METADATA_STORE,"readwrite"),o=s.objectStore(this.METADATA_STORE);o.put({key:this.LAST_SYNC_KEY,value:t.lastSync}),o.put({key:this.ALL_DATES_KEY,value:t.allDates}),t.hugoContentHash!==void 0&&o.put({key:this.HUGO_HASH_KEY,value:t.hugoContentHash}),s.oncomplete=()=>{console.log("[IDBCache] Metadata sauvegardées (objets {key, value})"),r()},s.onerror=()=>n(s.error)})}async updateLastSync(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.LAST_SYNC_KEY,value:t});i.onsuccess=()=>{console.log(`[IDBCache] lastSync mis à jour: ${t}`),r()},i.onerror=()=>n(i.error)})}async updateAllDates(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.ALL_DATES_KEY,value:t});i.onsuccess=()=>{console.log(`[IDBCache] allDates mis à jour: ${t.length} dates`),r()},i.onerror=()=>n(i.error)})}async updateHugoContentHash(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put({key:this.HUGO_HASH_KEY,value:t});i.onsuccess=()=>{console.log(`[IDBCache] hugoContentHash mis à jour: ${t}`),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function Lc(e){const t=new Bc(e);return await t.open(),t}const Fs=1e3;class zc{#e=new Rl;#r=W(null);#a=W(null);#u=W(!1);#d=W(!1);#i=W(null);#c=W(!1);#l=W(!1);#s=W(null);#f=W(null);#o=W(Ne([]));#v=W(Ne({start:null,end:null}));get dateRange(){return a(this.#v)}set dateRange(t){$(this.#v,t,!0)}#h=Y(()=>!!(this.dateRange.start&&this.dateRange.start===this.dateRange.end));get hasSingleDateInRange(){return a(this.#h)}set hasSingleDateInRange(t){$(this.#h,t)}#p=Y(()=>a(this.#o).length===1);get hasSingleDateEvent(){return a(this.#p)}set hasSingleDateEvent(t){$(this.#p,t)}#n=null;#g=null;#S=W(!1);#m=null;#_=W(!1);#t=W(Ne({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return a(this.#t)}get hasFilters(){return this.filters.searchQuery!==""||this.filters.selectedStores.length>0||this.filters.selectedWho.length>0||this.filters.selectedProductTypes.length>0||this.filters.selectedTemperatures.length>0}get currentMainId(){return a(this.#r)}get isInitialized(){return a(this.#u)}get loading(){return a(this.#d)}get error(){return a(this.#i)}get lastSync(){return a(this.#s)}get hugoContentHash(){return a(this.#f)}get syncing(){return a(this.#c)}get availableDates(){return a(this.#o)}setDateRange(t,r){if(!t&&!r){this.dateRange={start:null,end:null};return}if(!t||!r){this.dateRange={start:t||r,end:t||r};return}const n=new Date(t)<=new Date(r)?t:r,s=new Date(t)>=new Date(r)?t:r;this.dateRange={start:n,end:s}}isFullRange(){return this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate}initializeDateRange(){if((!this.dateRange.start||!this.dateRange.end)&&a(this.#o).length>0){const t=[...a(this.#o)].sort();this.dateRange={start:t[0],end:t[t.length-1]}}console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}get firstAvailableDate(){return a(this.#o).length===0?null:[...a(this.#o)].sort()[0]}get lastAvailableDate(){return a(this.#o).length===0?null:[...a(this.#o)].sort().pop()}get realtimeConnected(){return a(this.#l)}get hugoContentChanged(){return a(this.#_)}#b=Y(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return a(this.#b)}set enrichedProducts(t){$(this.#b,t)}#E=Y(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const t=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[s,o]of this.#e){if(!o.byDate||!this.#J(o))continue;Object.keys(o.byDate).some(c=>{const f=new Date(c);return f>=t&&f<=r})&&n.set(s,o)}return n});get filteredProductsMap(){return a(this.#E)}set filteredProductsMap(t){$(this.#E,t)}#D(){console.log("[Store] ⚡ Single date mode - optimized calculation");const t=new Map,r=this.dateRange.start;for(const[n,s]of this.#e){if(!s.byDate?.[r])continue;const o=s.byDate[r],i=[r],l=new Map;o.recipes&&o.recipes.length>0&&l.set(r,o.recipes);const c=zn(s,r),f=c.filter(g=>g.q>0),v=c.filter(g=>g.q<0).map(g=>({q:Math.abs(g.q),u:g.u}));t.set(n,{quantities:o.totalConsolidated||[],formattedQuantities:rr(o.totalConsolidated||[]),nbRecipes:o.recipes?.length||0,totalAssiettes:o.totalAssiettes||0,stockResult:c,availableQuantities:f,missingQuantities:v,formattedAvailableQuantities:Un(c),hasAvailable:f.length>0,hasMissing:v.length>0,concernedDates:i,recipesByDate:l})}return t}#$=Y(()=>{if(console.log("[Store] Calcul unifié des stats par produit (1 itération)"),this.hasSingleDateInRange)return this.#D();const t=new Map;if(this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate){console.log("[Store] Full date range - using precomputed data");for(const[n,s]of this.#e){const o=zn(s,this.dateRange.end),i=o.filter(g=>g.q>0),l=o.filter(g=>g.q<0).map(g=>({q:Math.abs(g.q),u:g.u})),c=s.byDate?Object.keys(s.byDate).sort():[],f=new Map;let v=0;if(s.byDate)for(const[g,p]of Object.entries(s.byDate))p.recipes&&p.recipes.length>0&&(f.set(g,p.recipes),v+=p.recipes.length);t.set(n,{quantities:s.totalNeededArray,formattedQuantities:rr(s.totalNeededArray),nbRecipes:s.nbRecipes||0,totalAssiettes:s.totalAssiettes||0,stockResult:o,availableQuantities:i,missingQuantities:l,formattedAvailableQuantities:Un(o),hasAvailable:i.length>0,hasMissing:l.length>0,concernedDates:c,recipesByDate:f})}return t}for(const[n,s]of this.filteredProductsMap){if(!s.byDate)continue;const o=Yl(s.byDate),i=Gl(o,this.dateRange.start,this.dateRange.end),l=i.length>0?rr(i):"",c=Ql(s.byDate,this.dateRange.start,this.dateRange.end),f=Object.keys(s.byDate).filter(S=>{const b=new Date(S),y=new Date(this.dateRange.start),P=new Date(this.dateRange.end);return b>=y&&b<=P}).sort(),v=new Map;let g=0;f.forEach(S=>{const b=s.byDate[S]?.recipes||[];b.length>0&&(v.set(S,b),g+=b.length)});const p=zn(s,this.dateRange.end),m=p.filter(S=>S.q>0),_=p.filter(S=>S.q<0).map(S=>({q:Math.abs(S.q),u:S.u}));t.set(n,{quantities:i,formattedQuantities:l,nbRecipes:g,totalAssiettes:c,stockResult:p,availableQuantities:m,missingQuantities:_,formattedAvailableQuantities:Un(p),hasAvailable:m.length>0,hasMissing:_.length>0,concernedDates:f,recipesByDate:v})}return t});get productsStatsByDateRange(){return a(this.#$)}set productsStatsByDateRange(t){$(this.#$,t)}#k=Y(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return a(this.#k)}set stats(t){$(this.#k,t)}#A=Y(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return a(this.#A)}set uniqueStores(t){$(this.#A,t)}#T=Y(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return a(this.#T)}set uniqueWho(t){$(this.#T,t)}#C=Y(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return a(this.#C)}set uniqueProductTypes(t){$(this.#C,t)}#N=Y(()=>{const r=Array.from(this.filteredProductsMap.values()).sort((i,l)=>i.$id.localeCompare(l.$id));if(a(this.#t).groupBy==="none")return{"":r};const n=Object.groupBy(r,i=>a(this.#t).groupBy==="store"?i.storeInfo?.storeName||"Non défini":i.productType||"Non défini"),s=Object.keys(n).sort((i,l)=>i===""?1:l===""?-1:i.localeCompare(l)),o={};return s.forEach(i=>{o[i]=n[i]}),o});get groupedFilteredProducts(){return a(this.#N)}set groupedFilteredProducts(t){$(this.#N,t)}async initialize(t,r){if(!t?.trim())throw new Error("mainId invalide fourni");if(a(this.#u)&&a(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),$(this.#r,t,!0),$(this.#a,r,!0);try{this.#n=await Lc(t)}catch(n){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",n),new Error("Impossible d'initialiser le cache IndexedDB")}$(this.#i,null);try{if(await this.#R(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const s=await Rc(r);console.log(`[ProductsStore] Hugo chargé: ${s.ingredients.length} ingrédients`),$(this.#f,s.hugoContentHash,!0),jc(s.ingredients,t).forEach(l=>{this.#e.set(l.$id,l)}),$(this.#o,[...s.allDates],!0),await To(t)||await Co(s.mainGroup_id,s.hugoContentHash,s.allDates,s.name),await this.#j()}this.initializeDateRange(),await this.#O(),$(this.#u,!0);const n=this.#Y();this.#g=Ao(t,n),this.#z(),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(n){const s=n instanceof Error?n.message:"Erreur lors de l'initialisation";throw $(this.#i,s,!0),console.error("[ProductsStore]",s,n),n}}async#R(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,s)=>{this.#e.set(s,n)});const r=await this.#n.loadMetadata();$(this.#s,r.lastSync,!0),$(this.#o,[...r.allDates],!0),$(this.#f,r.hugoContentHash||null,!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#O(){if(a(this.#r)){$(this.#c,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${a(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${a(this.#s)}`);const t=await yo(a(this.#r),{lastSync:a(this.#s),limit:Fs});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const s=this.#I(r,n);s.isSynced=!0,this.#e.set(r.$id,s)}),a(this.#s)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${a(this.#s)}`);const{loadUpdatedPurchases:r}=await Dl(async()=>{const{loadUpdatedPurchases:s}=await Promise.resolve().then(()=>Mc);return{loadUpdatedPurchases:s}},void 0),n=await r(a(this.#r),a(this.#s),Fs);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(s=>{if(s.products?.length){const o=s.products.map(i=>typeof i=="string"?i:i.$id);this.#P(o,s)}})}this.#B(),await this.#q(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{$(this.#c,!1)}}}async#q(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:a(this.#s),allDates:[...a(this.#o)],hugoContentHash:a(this.#f)}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#j(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.updateLastSync(a(this.#s)),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#x(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#B(){$(this.#s,new Date().toISOString(),!0)}async#L(){if(!a(this.#a)||a(this.#d))return!1;try{const t=await Oc(a(this.#f),a(this.#a));return t&&!a(this.#S)&&(console.log(`[ProductsStore] Changement Hugo détecté pour ${a(this.#a)}`),$(this.#S,!0)),t}catch(t){return console.warn("[ProductsStore] Erreur lors de la vérification du contenu Hugo:",t),!1}}#z(){this.#m&&clearInterval(this.#m),this.#m=setInterval(async()=>{await this.#L()},6e4)}#U(){this.#m&&(clearInterval(this.#m),this.#m=null)}#I(t,r){return r?this.#y(t,r):this.#V(t)}#V(t){const r=Gr(fn(t.purchases??[])),n=[],{numeric:s,display:o}=vn(n,r),i=zr(t.stockReel)??null,l=rr(r),c=t.store?zr(t.store):null,f=i?`${i.quantity} ${i.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:c,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:s,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:o,totalNeededOverrideParsed:Bs(t.totalNeededOverride)}}#y(t,r){const n=t.purchases??r.purchases,s=Gr(fn(n??[])),o=rr(s),{numeric:i,display:l}=vn(r.totalNeededArray,s),c=t.stockReel??r.stockReel,f=c?zr(c):r.stockParsed,v=t.store??r.store,g=v?zr(v):r.storeInfo,p=f?`${f.quantity} ${f.unit}`:o;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:v,stockReel:c,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:g,stockParsed:f,totalPurchasesArray:s,missingQuantityArray:i,stockOrTotalPurchases:p,displayTotalPurchases:o,displayMissingQuantity:l,totalNeededOverrideParsed:Bs(t.totalNeededOverride??r.totalNeededOverride)}}#Z(t){t.totalPurchasesArray=Gr(fn(t.purchases??[]));const{numeric:r,display:n}=vn(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=rr(t.totalPurchasesArray)}#X(t){t.length&&(t.forEach(r=>this.#w(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#w(t){const r=this.#e.get(t.$id),n=this.#I(t,r);this.#e.set(t.$id,n)}#W(t){this.#e.delete(t)}async#H(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#K(r,t),r}async#G(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await ko([t.$id]);if(r?.products?.length){const n=r.products.map(s=>typeof s=="string"?s:s.$id).filter(Boolean);return this.#P(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#Q(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(s=>s.$id===t));return r.forEach(n=>{this.#w(n)}),r.map(n=>n.$id)}#M(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#K(t,r){const n=this.#M(r),s=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#y({...i,purchases:[...l,n],status:"active"},i);s.push(c)}}}),s.forEach(o=>{this.#e.set(o.$id,o)})}#P(t,r){const n=this.#M(r),s=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const v=this.#y({...i,purchases:f,status:"active"},i);s.push(v)}else{const f=this.#y({...i,purchases:[...l,r],status:"active"},i);s.push(f)}}}),s.forEach(o=>{this.#e.set(o.$id,o)})}#Y(){return{onProductCreate:t=>{if(this.#w(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#w(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#W(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#H(t);await this.#x(r)},onPurchaseUpdate:async t=>{const r=await this.#G(t);await this.#x(r)},onPurchaseDelete:async t=>{const r=await this.#Q(t);await this.#x(r)},onConnect:()=>{$(this.#l,!0)},onDisconnect:()=>{$(this.#l,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#J(t){if(a(this.#t).searchQuery.trim()){const r=a(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(a(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!a(this.#t).selectedStores.includes(t.storeInfo.storeName))||a(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>a(this.#t).selectedWho.includes(r)))||a(this.#t).selectedProductTypes.length>0&&(!t.productType||!a(this.#t).selectedProductTypes.includes(t.productType))||a(this.#t).selectedTemperatures.length>0&&!(a(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||a(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Hl(t=>{a(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=a(this.#t).selectedProductTypes.indexOf(t);r>-1?a(this.#t).selectedProductTypes.splice(r,1):a(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=a(this.#t).selectedTemperatures.indexOf(t);r>-1?a(this.#t).selectedTemperatures.splice(r,1):a(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){a(this.#t).selectedProductTypes=[],a(this.#t).selectedTemperatures=[]}setGroupBy(t){a(this.#t).groupBy=t}toggleStore(t){const r=a(this.#t).selectedStores.indexOf(t);r>-1?a(this.#t).selectedStores.splice(r,1):a(this.#t).selectedStores.push(t)}toggleWho(t){const r=a(this.#t).selectedWho.indexOf(t);r>-1?a(this.#t).selectedWho.splice(r,1):a(this.#t).selectedWho.push(t)}clearStoreFilters(){a(this.#t).selectedStores=[]}clearWhoFilters(){a(this.#t).selectedWho=[]}handleSort(t){a(this.#t).sortColumn===t?a(this.#t).sortDirection=a(this.#t).sortDirection==="asc"?"desc":"asc":(a(this.#t).sortColumn=t,a(this.#t).sortDirection="asc")}clearFilters(){$(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return a(this.#t).sortColumn?[...t].sort((r,n)=>{let s=r[a(this.#t).sortColumn],o=n[a(this.#t).sortColumn];return a(this.#t).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,o=parseFloat(o)||0):a(this.#t).sortColumn==="purchases"&&(s=r.purchases?.length||0,o=n.purchases?.length||0),s<o?a(this.#t).sortDirection==="asc"?-1:1:s>o?a(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Kl(r.byDate):!1}get enrichedProductsCount(){return this.#e.size}async forceReload(t,r){await this.clearCache(),await this.initialize(t,r)}async clearCache(){this.#e.clear(),$(this.#o,[],!0),$(this.#s,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(s=>{const o=this.#e.get(s);if(o){const i={...o,status:n};this.#e.set(s,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#g?.(),this.#g=null,this.#U(),this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const J=new zc;function ea(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function Uc(e){const t=e.substring(0,4),r=e.slice(-10);return`${t}_${r}`}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Vc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Wc=cl("<svg><!><!></svg>");function de(e,t){U(t,!0);const r=Ce(t,"color",3,"currentColor"),n=Ce(t,"size",3,24),s=Ce(t,"strokeWidth",3,2),o=Ce(t,"absoluteStrokeWidth",3,!1),i=Ce(t,"iconNode",19,()=>[]),l=ce(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=Wc();Os(c,g=>({...Vc,...l,width:n(),height:n(),stroke:r(),"stroke-width":g,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(s())*24/Number(n()):s()]);var f=u(c);st(f,17,i,Jn,(g,p)=>{var m=Y(()=>ua(a(p),2));let _=()=>a(m)[0],S=()=>a(m)[1];var b=z(),y=I(b);ml(y,_,!0,(P,w)=>{Os(P,()=>({...S()}))}),h(g,b)});var v=d(f);ne(v,()=>t.children??F),h(e,c),V()}function rs(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];de(e,ue({name:"archive"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Hc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];de(e,ue({name:"bean"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Gc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];de(e,ue({name:"beef"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Qc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];de(e,ue({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Kc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];de(e,ue({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Fr(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];de(e,ue({name:"check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Yc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];de(e,ue({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Jc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];de(e,ue({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Zc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];de(e,ue({name:"circle-arrow-down"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Xc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m12 16 4-4-4-4"}],["path",{d:"M8 12h8"}]];de(e,ue({name:"circle-arrow-right"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function ta(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];de(e,ue({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Fc(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];de(e,ue({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function eu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];de(e,ue({name:"circle-x"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function tu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];de(e,ue({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function ru(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];de(e,ue({name:"clock"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function nu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];de(e,ue({name:"cloud"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function ws(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];de(e,ue({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function su(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];de(e,ue({name:"egg"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function au(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];de(e,ue({name:"euro"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function cn(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];de(e,ue({name:"funnel-x"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Do(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];de(e,ue({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function ou(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];de(e,ue({name:"info"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function iu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];de(e,ue({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function lu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];de(e,ue({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function cu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];de(e,ue({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Ro(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];de(e,ue({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function uu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];de(e,ue({name:"log-in"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function du(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]];de(e,ue({name:"message-circle-more"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function fu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];de(e,ue({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Ss(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];de(e,ue({name:"message-circle"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function vu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];de(e,ue({name:"moon"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function hu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];de(e,ue({name:"package-check"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function nn(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];de(e,ue({name:"package"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function pu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];de(e,ue({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function mu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];de(e,ue({name:"plus"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function gu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];de(e,ue({name:"receipt"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function _u(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];de(e,ue({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function bu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];de(e,ue({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function yu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];de(e,ue({name:"save"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function wu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];de(e,ue({name:"search"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Oo(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];de(e,ue({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Zt(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];de(e,ue({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function qo(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];de(e,ue({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function ns(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];de(e,ue({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function er(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];de(e,ue({name:"store"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Su(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];de(e,ue({name:"sun"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function xu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];de(e,ue({name:"thermometer"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Cn(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];de(e,ue({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function jo(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];de(e,ue({name:"user-plus"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function sn(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];de(e,ue({name:"user"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function ss(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];de(e,ue({name:"users"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Pu(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];de(e,ue({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}function Mt(e,t){U(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ce(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];de(e,ue({name:"x"},()=>r,{get iconNode(){return n},children:(s,o)=>{var i=z(),l=I(i);ne(l,()=>t.children??F),h(s,i)},$$slots:{default:!0}})),V()}class Eu{isMobileQuery=new Bl("max-width: 1024px");get isMobile(){return this.isMobileQuery.current}get isDesktop(){return!this.isMobile}userName(){return localStorage.getItem("appwrite-user-name")||""}get toasts(){return Ot.toasts}get toast(){return Ot}}const en=new Eu;function $u(e,t){const r=e.reduce((s,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return s+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function ku(e,t){const r=e.filter(c=>!c.isSynced).map(c=>({productId:c.productId,productData:c.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(c){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",c)}const s=t.purchaseStatus||"delivered";let o=t.purchaseDeliveryDate||null;s==="delivered"&&!o&&(o=new Date().toISOString());const i=e.flatMap(c=>c.missingQuantities.map(f=>({productId:c.productId,quantity:f.q,unit:f.u,status:s,notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:o,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:i},invoiceData:t}}async function Au(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=$u(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const s=100,o=[];if(n<=s)o.push(t);else{let p=[],m=0;for(const _ of t){const S=(_.isSynced?0:1)+_.missingQuantities.length;m+S>s?(p.length>0&&o.push(p),p=[_],m=S):(p.push(_),m+=S)}p.length>0&&o.push(p)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,f=0;for(let p=0;p<o.length;p++){const m=o[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${o.length} (${m.length} produits)`);try{const _=await ku(m,r),S=await Tu(_);if(i.push(S),S.success)l+=S.productsCreated,c+=S.purchasesCreated,f+=S.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${S.error}`);break}}catch(_){const S=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,_),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:S,timestamp:new Date().toISOString()});break}}const v=i.every(p=>p.success),g=i.some(p=>!p.success);return{success:v,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:f,error:g?"Un ou plusieurs lots ont échoué":void 0}}async function Tu(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const s=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(s.status!=="completed")throw new Error(`Exécution échouée avec statut: ${s.status}. Erreur: ${s.stderr}`);const o=JSON.parse(s.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}var Cu=(e,t,r)=>t(a(r).id),Nu=x('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),Iu=x('<span class="flex items-center gap-1"><!> </span>'),Mu=x('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),Du=x('<div class="flex flex-wrap gap-2"></div> <!>',1);function tn(e,t){U(t,!0);let r=Ce(t,"badgeSize",3,"badge-lg"),n=Ce(t,"color",3,"primary"),s=Ce(t,"badgeStyle",3,""),o=Ce(t,"onToggleItem",3,()=>{}),i=Ce(t,"showStats",3,!1),l=Ce(t,"showIcon",3,!0),c=W(Ne({}));gr(()=>{const b={};t.items.forEach(y=>{b[y.id]=y.selected??!0}),$(c,b,!0)});function f(b){a(c)[b]=!a(c)[b],o()(b)}const v=Y(()=>Object.values(a(c)).filter(Boolean).length),g=Y(()=>Object.values(a(c)).filter(b=>!b).length);var p=Du(),m=I(p);st(m,21,()=>t.items,b=>b.id,(b,y)=>{const P=Y(()=>a(c)[a(y).id]);var w=Nu();w.__click=[Cu,f,y];var E=u(w);{var k=j=>{var H=z(),ee=I(H);cr(ee,()=>a(y).icon,(ge,q)=>{q(ge,{class:"h-3 w-3",get title(){return a(y).title}})}),h(j,H)};T(E,j=>{a(y).icon&&j(k)})}var A=d(E,2),N=u(A),M=d(A,2);{var X=j=>{var H=z(),ee=I(H);{var ge=D=>{Fr(D,{size:16})},q=D=>{mu(D,{size:16})};T(ee,D=>{a(P)?D(ge):D(q,!1)})}h(j,H)};T(M,j=>{l()&&j(X)})}L(()=>{Pe(w,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${a(P)?`${s()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),Lt(w,"title",a(P)?"Retirer de la liste":"Réajouter à la liste"),B(N,a(y).label)}),h(b,w)});var _=d(m,2);{var S=b=>{var y=Mu(),P=u(y),w=u(P),E=u(w);Fr(E,{class:"text-success h-3 w-3"});var k=d(E),A=d(w,2);{var N=j=>{var H=Iu(),ee=u(H);Mt(ee,{class:"text-error h-3 w-3"});var ge=d(ee);L(()=>B(ge,` ${a(g)??""} retirés`)),h(j,H)};T(A,j=>{a(g)>0&&j(N)})}var M=d(P,2),X=u(M);L(()=>{B(k,` ${a(v)??""} actifs`),B(X,`Total: ${t.items.length??""} items`)}),h(b,y)};T(_,b=>{i()&&b(S)})}h(e,p),V()}Ze(["click"]);function Ru(e,t){$(t,!a(t))}var Ou=x('<span class="text-base-content font-semibold"> </span>'),qu=x('<div class="text-base-content/80 flex-1"> </div>'),ju=x('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Bu=x('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Lu=x('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Bo(e,t){let r=Ce(t,"icon",3,ou),n=Ce(t,"class",3,""),s=Ce(t,"initiallyOpen",3,!1),o=r(),i=W(Ne(s())),l=Ne(t.children);var c=Lu(),f=u(c);f.__click=[Ru,i];var v=u(f),g=u(v);o(g,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(g,2);{var m=E=>{var k=Ou(),A=u(k);L(()=>B(A,t.title)),h(E,k)};T(p,E=>{t.title&&E(m)})}var _=d(v,2);{var S=E=>{var k=qu(),A=u(k);L(()=>B(A,t.contentVisible)),h(E,k)};T(_,E=>{t.contentVisible&&E(S)})}var b=d(_,2);{var y=E=>{var k=ju(),A=u(k),N=u(A);{var M=H=>{var ee=yt("en savoir plus");h(H,ee)},X=H=>{var ee=yt("masquer");h(H,ee)};T(N,H=>{a(i)?H(X,!1):H(M)})}var j=d(A,2);{let H=Y(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${a(i)?"rotate-180":""}`);Jc(j,{get class(){return a(H)}})}h(E,k)};T(b,E=>{l&&E(y)})}var P=d(f,2);{var w=E=>{var k=Bu(),A=u(k),N=u(A);ne(N,()=>t.children??F),L(()=>Pe(k,1,`overflow-hidden transition-all duration-200 ${a(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),h(E,k)};T(P,E=>{l&&E(w)})}L(()=>{Pe(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),Ya(c,t.style),Pe(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),Lt(f,"aria-expanded",a(i))}),h(e,c)}Ze(["click"]);async function zu(e,t,r,n,s,o,i,l){if(!(!a(t)||a(r))){$(r,!0),$(n,null),$(s,null);try{const c=`FACTURE_${Date.now()}`,f=a(o).map(m=>m.$id);J.setSyncStatus(f,!0);const v=[];for(const m of a(o))v.push({productId:m.$id,isSynced:m.isSynced,productData:m,missingQuantities:m.missingQuantityArray||[]});const g={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${a(o).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${v.length} produits...`),l.onClose();const p=await Au(J.currentMainId,v,g);if(p.success)$(s,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";$(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),J.clearSyncStatus()}finally{$(r,!1)}}}function ra(e,t,r){a(t)||r.onClose()}var Uu=x('<div class="alert alert-error"><!> <span> </span></div>'),Vu=x('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),Wu=x(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),Hu=x("<option> </option>"),Gu=x("<option> </option>"),Qu=x('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),Ku=x('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Yu=x("<!> ",1),Ju=x(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option></select> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function Zu(e,t){U(t,!0);let r=W(!1),n=W(null),s=W(null),o=Ne({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=W(Ne(new Set));gr(()=>{$(i,new Set(t.products.map(fe=>fe.$id)),!0)});const l=Y(()=>t.products.filter(fe=>a(i).has(fe.$id))),c=Y(()=>a(l).length!==0),f=Y(()=>`Achat groupé (${a(l).length} produits sélectionnés)`);function v(fe){const Se=new Set(a(i));Se.has(fe)?Se.delete(fe):Se.add(fe),$(i,Se,!0)}const g=Y(()=>t.products.map(fe=>({id:fe.$id,label:fe.productName,title:fe.productName})));var p=Ju(),m=u(p),_=u(m),S=u(_),b=u(S);Zt(b,{class:"h-5 w-5"});var y=d(b),P=d(S,2);P.__click=[ra,r,t];var w=u(P);Mt(w,{class:"h-4 w-4"});var E=d(_,2),k=u(E);{var A=fe=>{var Se=Uu(),we=u(Se);Cn(we,{class:"h-4 w-4"});var ze=d(we,2),He=u(ze);L(()=>B(He,a(n))),h(fe,Se)};T(k,fe=>{a(n)&&fe(A)})}var N=d(k,2);{var M=fe=>{var Se=Vu(),we=u(Se);Fr(we,{class:"h-4 w-4"});var ze=d(we,2),He=u(ze),pt=d(He);{var $t=Xe=>{var ot=yt("+ 1 dépense globale");h(Xe,ot)};T(pt,Xe=>{a(s).expense&&Xe($t)})}var et=d(pt,2);{var ft=Xe=>{var ot=yt();L(()=>B(ot,`(traité en ${a(s).batches??""} lots)`)),h(Xe,ot)};T(et,Xe=>{a(s).batches&&a(s).batches>1&&Xe(ft)})}L(()=>B(He,`Achat groupé créé avec succès ! ${a(s).purchases??""} produit(s) validés `)),h(fe,Se)};T(N,fe=>{a(s)&&fe(M)})}var X=d(N,2),j=u(X);Bo(j,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(fe,Se)=>{var we=Wu();h(fe,we)},$$slots:{default:!0}});var H=d(X,2),ee=d(u(H),2),ge=u(ee),q=u(ge),D=u(q);er(D,{class:"h-4 w-4 opacity-50"});var G=d(D,2),se=d(q,2);st(se,21,()=>J.uniqueStores,Jn,(fe,Se)=>{var we=Hu(),ze=u(we),He={};L(()=>{B(ze,a(Se)),He!==(He=a(Se))&&(we.value=(we.__value=a(Se))??"")}),h(fe,we)});var ae=d(ge,2),ve=u(ae),xe=u(ve);sn(xe,{class:"h-4 w-4 opacity-50"});var Ae=d(xe,2),K=d(ve,2);st(K,21,()=>J.uniqueWho,Jn,(fe,Se)=>{var we=Gu(),ze=u(we),He={};L(()=>{B(ze,a(Se)),He!==(He=a(Se))&&(we.value=(we.__value=a(Se))??"")}),h(fe,we)});var Q=d(ae,2),te=u(Q),O=u(te);au(O,{class:"h-4 w-4 opacity-50"});var ie=d(O,2),R=d(ee,2),he=u(R),_e=u(he),ke=u(_e);ke.value=ke.__value="delivered";var Le=d(ke);Le.value=Le.__value="ordered";var Ie=d(_e,2),We=d(he,2);{var pe=fe=>{var Se=Qu(),we=u(Se),ze=d(u(we),2);L(()=>ze.disabled=a(r)),Me(ze,()=>o.deliveryDate,He=>o.deliveryDate=He),h(fe,Se)};T(We,fe=>{o.status==="ordered"&&fe(pe)})}var be=d(R,2),at=u(be),oe=u(at);Ss(oe,{class:"h-4 w-4 opacity-50"});var Ve=d(oe,2),re=d(H,2),ye=d(u(re),2);tn(ye,{get items(){return a(g)},onToggleItem:v,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Ye=d(re,2),me=u(Ye);me.__click=[ra,r,t];var ct=d(me,2);ct.__click=[zu,c,r,n,s,l,o,t];var De=u(ct);{var Fe=fe=>{var Se=Ku();h(fe,Se)},Dt=fe=>{var Se=Yu(),we=I(Se);Zt(we,{class:"h-4 w-4"});var ze=d(we);L(()=>B(ze,` Valider ${a(l).length??""} produit(s)`)),h(fe,Se)};T(De,fe=>{a(r)?fe(Fe):fe(Dt,!1)})}L(()=>{B(y,` ${a(f)??""}`),P.disabled=a(r),G.disabled=a(r),Ae.disabled=a(r),ie.disabled=a(r),_e.disabled=a(r),Pe(Ie,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),Ve.disabled=a(r),me.disabled=a(r),ct.disabled=a(r)||!a(c)}),Me(G,()=>o.store,fe=>o.store=fe),Me(Ae,()=>o.who,fe=>o.who=fe),Me(ie,()=>o.expense,fe=>o.expense=fe),ar(_e,()=>o.status,fe=>o.status=fe),Me(Ve,()=>o.notes,fe=>o.notes=fe),h(e,p),V()}Ze(["click"]);function as(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Hc};case"animaux":return{displayName:"Viandes et Poissons",icon:Gc};case"legumes":return{displayName:"Fruits et Légumes",icon:Kc};case"sucres":return{displayName:"Sucrées",icon:Qc};case"lof":return{displayName:"L.O.F",icon:su};case"autres":return{displayName:"Autres",icon:Yc};case"epices":return{displayName:"Assaisonnements",icon:lu};case"frais":return{displayName:"Produits Frais",icon:bu};default:return{displayName:e,icon:nn}}}function na(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Nn(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function In(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Xu(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function os(e){switch(e){case"requested":return{text:"Demandé",class:"text-amber-600"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-accent"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Livré",class:"badge-success"}}}function sa(e){return e?In(e):"-"}function Fu(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const s=n.status||"direct",o=n.unit||"unit",i=`${s}_${o}`;if(!r[i]){const l=os(s);r[i]={status:s,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:ed(s)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function ed(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"ShoppingCart";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}function td(e){let t=W(!1),r=W(null);const n=Y(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),J.getEnrichedProductById(e))),s=Y(()=>a(n)?.who??[]),o=Y(()=>a(n)?.stockParsed??null),i=Y(()=>a(n)?.purchases??[]),l=Y(()=>a(n)?.byDate?Jl(a(n).byDate):[]),c=Ne({purchase:{quantity:null,unit:"",store:"",who:en.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let f=W(!1),v=W(null);gr(()=>{!a(n)||a(f)||(c.purchase.quantity=a(n).missingQuantityArray[0]?.q??null,c.purchase.unit=a(n).totalNeededArray[0]?.u??"",c.purchase.store=a(n).storeInfo?.storeName??"",c.purchase.who=en.userName()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=a(n).totalNeededArray[0]?.u??"",c.store.name=a(n).storeInfo?.storeName??"",c.store.comment=a(n).storeInfo?.storeComment??null,c.who=a(n)?.who?[...a(n).who]:[],$(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),$(f,!0))});const g=Y(()=>a(v)?{store:JSON.stringify(c.store)!==JSON.stringify(a(v).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(a(v).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?a(o)?c.stock.quantity.toString()!==a(o).quantity||c.stock.unit!==a(o).unit||(c.stock.notes||"")!==(a(o).notes||""):!0:!1}const m=Y(()=>!!(a(v)&&(a(g).store||a(g).stock||a(g).who)));let _=W(null);const S=Y(()=>a(_)?a(i).find(q=>q.$id===a(_))??null:null);async function b(q,D){$(t,!0),$(r,null);try{const G=await q();return D&&y("success",D),G}catch(G){const se=G instanceof Error?G.message:"Une erreur est survenue";return $(r,se,!0),y("error",se),console.error("[ProductModalState]",G),null}finally{$(t,!1)}}function y(q,D){const G=new CustomEvent("toast",{detail:{type:q,message:D}});window.dispatchEvent(G)}async function P(){a(n)&&await b(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!J.currentMainId)throw new Error("mainId non disponible");const{quantity:q,unit:D}=na(c.purchase.quantity,c.purchase.unit);a(n).isSynced||(console.log(`[ProductModalState] Produit ${a(n).$id} local, création pour purchase...`),await Qt(a(n).$id,{},ae=>J.getEnrichedProductById(ae)));const G=c.purchase.status||"delivered";let se=c.purchase.deliveryDate||null;G==="delivered"&&!se&&(se=new Date().toISOString()),await Po({products:[a(n).$id],mainId:J.currentMainId,unit:D,quantity:q,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:G,orderDate:c.purchase.orderDate||null,deliveryDate:se}),c.purchase={quantity:a(n).missingQuantityArray[0]?.q??null,unit:a(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function w(q){$(_,q.$id,!0)}function E(){$(_,null)}async function k(q){q.$id&&await b(async()=>{const{quantity:D,unit:G}=na(q.quantity,q.unit),se=q.status||null;let ae=q.deliveryDate||null;se==="delivered"&&!ae&&(ae=new Date().toISOString()),await Eo(q.$id,{unit:G,quantity:D,store:q.store||null,who:q.who||null,notes:q.notes||"",price:q.price||null,status:se,orderDate:q.orderDate||null,deliveryDate:ae}),$(_,null)},"Achat modifié avec succès")}async function A(q){const D=a(i).find(G=>G.$id===q);D&&confirm(`Supprimer cet achat (${D.quantity} ${D.unit}) ?`)&&await b(async()=>{await $o(q)},"Achat supprimé avec succès")}async function N(){a(n)&&await b(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const q={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update stock normal...`),await ts(a(n).$id,JSON.stringify(q))):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création stock avec upsert...`),await Qt(a(n).$id,{stockReel:JSON.stringify(q)},D=>J.getEnrichedProductById(D))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function M(){a(n)&&confirm("Supprimer le stock actuel ?")&&await b(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, suppression stock normal...`),await ts(a(n).$id,null)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, suppression stock avec upsert...`),await Qt(a(n).$id,{stockReel:null},q=>J.getEnrichedProductById(q)))},"Stock supprimé")}async function X(q){a(n)&&await b(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, setWho normal...`),await So(a(n).$id,q)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création who avec upsert...`),await Qt(a(n).$id,{who:q},D=>J.getEnrichedProductById(D)))},"Volontaires mis à jour")}async function j(q){a(n)&&await b(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update store normal...`),await wo(a(n).$id,q)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création store avec upsert...`),await Qt(a(n).$id,{store:JSON.stringify(q)},D=>J.getEnrichedProductById(D)))},"Magasin mis à jour")}async function H(q){a(n)&&await b(async()=>{await fr(a(n).$id,{totalNeededOverride:JSON.stringify(q)})},"Override appliqué")}async function ee(){a(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await b(async()=>{await fr(a(n).$id,{totalNeededOverride:null})},"Override supprimé")}async function ge(){!a(n)||!a(m)||await b(async()=>{const q={};if(a(g).stock&&c.stock.quantity&&c.stock.unit){const D={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};q.stockReel=JSON.stringify(D)}if(a(g).who&&(q.who=c.who),a(g).store){const D={storeName:c.store.name||"",storeComment:c.store.comment||void 0};q.storeInfo=D}Object.keys(q).length>0&&(await xo(a(n).$id,q,D=>J.getEnrichedProductById(D)),$(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return a(t)},get error(){return a(r)},get product(){return a(n)},get recipes(){return a(l)},get whoList(){return a(s)},get stockParsed(){return a(o)},get purchasesList(){return a(i)},get editingPurchaseId(){return a(_)},get editingPurchaseData(){return a(S)},forms:c,addPurchase:P,startEditPurchase:w,cancelEditPurchase:E,updateEditedPurchase:k,removePurchase:A,setStock:N,removeStock:M,setWho:X,updateStore:j,setOverride:H,removeOverride:ee,saveAllChanges:ge,get hasChanges(){return a(g)},get hasAnyChanges(){return a(m)},formatQuantity:Nn,formatDate:In,formatDisplayQuantity:Xu}}function rd(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function nd(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function sd(e,t){t().cancelEditPurchase()}var ad=x('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),od=x('<span class="loading loading-spinner loading-sm"></span>'),id=x('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),ld=x('<span class="loading loading-spinner loading-sm"></span>'),cd=x('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Commandé</option><option>Livré</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),ud=(e,t,r)=>t(a(r)),dd=(e,t,r)=>t(a(r).$id),fd=x('<span class="loading loading-spinner loading-sm"></span>'),vd=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),hd=x('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),pd=x(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function md(e,t){U(t,!0);let r=Ce(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function s(oe){return oe.quantity!==null&&oe.quantity!==0&&oe.unit?.trim()!==""}function o(oe){r().removePurchase(oe)}function i(oe){r().startEditPurchase(oe)}var l=pd(),c=u(l),f=u(c);Zt(f,{class:"h-5 w-5"});var v=d(c,2),g=u(v),p=d(u(g),2),m=u(p),_=u(m);nn(_,{class:"h-4 w-4 opacity-50"});var S=d(_,2),b=d(m,2),y=u(b);y.value=y.__value="";var P=d(y);P.value=P.__value="kg";var w=d(P);w.value=w.__value="gr.";var E=d(w);E.value=E.__value="l.";var k=d(E);k.value=k.__value="ml";var A=d(k);A.value=A.__value="unité";var N=d(A);N.value=N.__value="bottes";var M=d(b,2),X=u(M);er(X,{class:"h-4 w-4 opacity-50"});var j=d(X,2),H=d(M,2),ee=u(H);sn(ee,{class:"h-4 w-4 opacity-50"});var ge=d(ee,2),q=d(H,2),D=d(u(q),2),G=d(p,2),se=u(G),ae=u(se);Ss(ae,{class:"h-4 w-4 opacity-50"});var ve=d(ae,2),xe=d(G,2),Ae=u(xe),K=u(Ae),Q=u(K),te=u(Q);te.value=te.__value="delivered";var O=d(te);O.value=O.__value="ordered";var ie=d(K,2),R=d(Ae,2);{var he=oe=>{var Ve=ad(),re=d(u(Ve),2);Me(re,()=>r().forms.purchase.deliveryDate,ye=>r().forms.purchase.deliveryDate=ye),h(oe,Ve)};T(R,oe=>{r().forms.purchase.status==="ordered"&&oe(he)})}var _e=d(xe,2),ke=u(_e);ke.__click=[rd,n,r];var Le=u(ke);{var Ie=oe=>{var Ve=od();h(oe,Ve)},We=oe=>{var Ve=yt("Ajouter l'achat");h(oe,Ve)};T(Le,oe=>{r().loading?oe(Ie):oe(We,!1)})}var pe=d(v,2);{var be=oe=>{var Ve=id(),re=u(Ve);Zt(re,{class:"mx-auto mb-2 h-12 w-12"}),h(oe,Ve)},at=oe=>{var Ve=hd(),re=u(Ve),ye=d(u(re));st(ye,21,()=>r().purchasesList,Ye=>Ye.$id,(Ye,me,ct)=>{var De=z(),Fe=I(De);{var Dt=Se=>{var we=cd(),ze=u(we),He=u(ze),pt=u(He),$t=d(pt,2),et=u($t);et.value=et.__value="kg";var ft=d(et);ft.value=ft.__value="gr.";var Xe=d(ft);Xe.value=Xe.__value="l.";var ot=d(Xe);ot.value=ot.__value="ml";var Z=d(ot);Z.value=Z.__value="unité";var le=d(Z);le.value=le.__value="bottes";var Te=d(ze),Ue=u(Te),Ge=d(Te),Re=u(Ge),Qe=d(Ge),Be=u(Qe),wt=u(Be);wt.value=wt.__value="ordered";var br=d(wt);br.value=br.__value="delivered";var St=d(Qe),mt=u(St),Ht=d(St),Rt=u(Ht),Gt=d(Ht),Rr=u(Gt),an=d(Gt),kt=u(an),Or=d(an),Mn=u(Or),yr=u(Mn);yr.__click=[nd,r,s];var Dn=u(yr);{var zo=qe=>{var Wo=ld();h(qe,Wo)},Uo=qe=>{yu(qe,{class:"h-3 w-3"})};T(Dn,qe=>{r().loading?qe(zo):qe(Uo,!1)})}var xs=d(yr,2);xs.__click=[sd,r];var Vo=u(xs);Mt(Vo,{class:"h-3 w-3"}),L(qe=>yr.disabled=qe,[()=>r().loading||!s(a(me))]),Me(pt,()=>a(me).quantity,qe=>a(me).quantity=qe),ar($t,()=>a(me).unit,qe=>a(me).unit=qe),Me(Ue,()=>a(me).store,qe=>a(me).store=qe),Me(Re,()=>a(me).who,qe=>a(me).who=qe),ar(Be,()=>a(me).status,qe=>a(me).status=qe),Me(mt,()=>a(me).orderDate,qe=>a(me).orderDate=qe),Me(Rt,()=>a(me).deliveryDate,qe=>a(me).deliveryDate=qe),Me(Rr,()=>a(me).price,qe=>a(me).price=qe),Me(kt,()=>a(me).notes,qe=>a(me).notes=qe),h(Se,we)},fe=Se=>{var we=vd(),ze=u(we),He=u(ze),pt=d(ze),$t=u(pt),et=d(pt),ft=u(et),Xe=d(et),ot=u(Xe),Z=u(ot),le=d(Xe),Te=u(le),Ue=d(le),Ge=u(Ue),Re=d(Ue),Qe=u(Re),Be=d(Re),wt=u(Be),br=d(Be),St=u(br),mt=u(St);mt.__click=[ud,i,me];var Ht=u(mt);ns(Ht,{class:"h-4 w-4"});var Rt=d(mt,2);Rt.__click=[dd,o,me];var Gt=u(Rt);{var Rr=kt=>{var Or=fd();h(kt,Or)},an=kt=>{Mt(kt,{class:"h-4 w-4"})};T(Gt,kt=>{r().loading?kt(Rr):kt(an,!1)})}L((kt,Or,Mn,yr,Dn)=>{B(He,kt),B($t,a(me).store||"-"),B(ft,a(me).who||"-"),Pe(ot,1,`badge badge-sm ${Or??""}`),B(Z,Mn),B(Te,yr),B(Ge,Dn),B(Qe,a(me).price?`${a(me).price}€`:"-"),B(wt,a(me).notes||"-"),Rt.disabled=r().loading},[()=>Nn(a(me).quantity,a(me).unit),()=>os(a(me).status).class,()=>os(a(me).status).text,()=>sa(a(me).orderDate),()=>sa(a(me).deliveryDate)]),h(Se,we)};T(Fe,Se=>{r().editingPurchaseId===a(me).$id?Se(Dt):Se(fe,!1)})}h(Ye,De)}),h(oe,Ve)};T(pe,oe=>{r().purchasesList.length===0?oe(be):oe(at,!1)})}L(oe=>{Pe(ie,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),ke.disabled=oe},[()=>r().loading||!n()]),Me(S,()=>r().forms.purchase.quantity,oe=>r().forms.purchase.quantity=oe),ar(b,()=>r().forms.purchase.unit,oe=>r().forms.purchase.unit=oe),Me(j,()=>r().forms.purchase.store,oe=>r().forms.purchase.store=oe),Me(ge,()=>r().forms.purchase.who,oe=>r().forms.purchase.who=oe),Me(D,()=>r().forms.purchase.price,oe=>r().forms.purchase.price=oe),Me(ve,()=>r().forms.purchase.notes,oe=>r().forms.purchase.notes=oe),ar(Q,()=>r().forms.purchase.status,oe=>r().forms.purchase.status=oe),h(e,l),V()}Ze(["click"]);async function gd(e,t){await t()?.removeStock()}var _d=x(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),bd=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},yd=x('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),wd=x('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),Sd=x('<span class="loading loading-spinner loading-xs"></span>'),xd=x('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),Pd=x(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div> <!></div>`);function Ed(e,t){U(t,!0);let r=Ce(t,"modalState",7);var n=Pd(),s=u(n),o=u(s);rs(o,{class:"h-5 w-5"});var i=d(s,2),l=u(i),c=u(l),f=u(c),v=d(c,2),g=u(v);Bo(g,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(D,G)=>{var se=_d();h(D,se)},$$slots:{default:!0}});var p=d(v,2),m=u(p),_=u(m);nn(_,{class:"h-4 w-4 opacity-50"});var S=d(_,2),b=d(m,2),y=u(b);y.value=y.__value="";var P=d(y);P.value=P.__value="kg";var w=d(P);w.value=w.__value="gr.";var E=d(w);E.value=E.__value="l.";var k=d(E);k.value=k.__value="ml";var A=d(k);A.value=A.__value="unité";var N=d(A);N.value=N.__value="bottes";var M=d(p,2),X=u(M),j=d(M,2),H=u(j);H.__click=[bd,r];var ee=d(i,2);{var ge=D=>{var G=yd(),se=u(G);rs(se,{class:"mx-auto mb-2 h-12 w-12"}),h(D,G)},q=D=>{var G=xd(),se=u(G),ae=d(u(se),2),ve=u(ae),xe=d(u(ve),2),Ae=u(xe),K=d(ve,2),Q=d(u(K),2),te=u(Q),O=d(K,2);{var ie=Ie=>{var We=wd(),pe=d(u(We),2),be=u(pe);L(()=>B(be,r().stockParsed.notes)),h(Ie,We)};T(O,Ie=>{r().stockParsed.notes&&Ie(ie)})}var R=d(ae,2),he=u(R);he.__click=[gd,r];var _e=u(he);{var ke=Ie=>{var We=Sd();h(Ie,We)},Le=Ie=>{var We=yt("Supprimer le stock");h(Ie,We)};T(_e,Ie=>{r().loading?Ie(ke):Ie(Le,!1)})}L(Ie=>{B(Ae,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),B(te,Ie),he.disabled=r().loading},[()=>In(r().stockParsed.dateTime)]),h(D,G)};T(ee,D=>{r().stockParsed?D(q,!1):D(ge)})}L(D=>{B(f,`Déclarer le stock réel du ${D??""}`),H.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),Me(S,()=>r().forms.stock.quantity,D=>r().forms.stock.quantity=D),ar(b,()=>r().forms.stock.unit,D=>r().forms.stock.unit=D),Me(X,()=>r().forms.stock.notes,D=>r().forms.stock.notes=D),h(e,n),V()}Ze(["click"]);function $d(e,t,r){t().forms.who=[...t().whoList],$(r,"")}var kd=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},Ad=x('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div></div></div>');function Td(e,t){U(t,!0);let r=Ce(t,"modalState",7),n=W("");const s=Y(()=>{const N=new Set([...J.uniqueWho,...r().forms.who]);return Array.from(N).map(M=>({id:M,label:M,selected:r().forms.who.includes(M)}))});function o(N){const M=N.trim();M&&!r().forms.who.includes(M)&&(r().forms.who=[...r().forms.who,M])}function i(N){r().forms.who=r().forms.who.filter(M=>M!==N)}function l(N){r().forms.who.includes(N)?i(N):o(N)}function c(){a(n).trim()&&(o(a(n)),$(n,""))}var f=Ad(),v=u(f),g=u(v),p=d(u(g),4),m=u(p),_=u(m),S=u(_);sn(S,{class:"h-4 w-4 opacity-50"});var b=d(S,2);b.__keydown=[kd,c];var y=d(_,2);y.__click=c;var P=u(y);jo(P,{size:16});var w=d(m,2),E=d(u(w),2);tn(E,{get items(){return a(s)},onToggleItem:l,showIcon:!0});var k=d(p,2),A=u(k);A.__click=[$d,r,n],L(N=>{b.disabled=r().loading,y.disabled=N,A.disabled=r().loading},[()=>r().loading||!a(n).trim()]),Me(b,()=>a(n),N=>$(n,N)),h(e,f),V()}Ze(["keydown","click"]);var Cd=x('<div class="mb-1 text-xs opacity-70"> </div>'),Nd=(e,t,r)=>t(a(r)),Id=x("<button><!> </button>"),Md=x('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function Lo(e,t){U(t,!0);let r=Ce(t,"maxSuggestions",3,8),n=Ce(t,"title",3,"Suggestions :"),s=Ce(t,"buttonSize",3,"btn-xs"),o=Ce(t,"buttonVariant",3,"btn-soft"),i=Ce(t,"disabled",3,!1);const l=Y(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var f=z(),v=I(f);{var g=p=>{var m=Md(),_=u(m);{var S=y=>{var P=Cd(),w=u(P);L(()=>B(w,n())),h(y,P)};T(_,y=>{n()&&y(S)})}var b=d(_,2);st(b,21,()=>a(l),y=>y.id,(y,P)=>{var w=Id();w.__click=[Nd,c,P];var E=u(w);{var k=N=>{var M=z(),X=I(M);cr(X,()=>a(P).icon,(j,H)=>{H(j,{class:"h-3 w-3"})}),h(N,M)};T(E,N=>{a(P).icon&&N(k)})}var A=d(E);L(()=>{Pe(w,1,`btn ${s()??""} ${o()??""}`),w.disabled=i()||a(P).disabled,Lt(w,"title",a(P).disabled?"Déjà sélectionné":a(P).label),B(A,` ${a(P).label??""}`)}),h(y,w)}),h(p,m)};T(v,p=>{a(l).length>0&&p(g)})}h(e,f),V()}Ze(["click"]);var Dd=(e,t)=>{e.key==="Enter"&&t()},Rd=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},Od=x(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function qd(e,t){U(t,!0);let r=Ce(t,"modalState",7);const n=Y(()=>r()?.hasChanges?.store||!1);async function s(){if(!a(n))return;const P={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(P)}var o=Od(),i=u(o),l=u(i),c=d(u(l),4),f=u(c),v=u(f),g=u(v);er(g,{class:"h-4 w-4 opacity-50"});var p=d(g,2);p.__keydown=[Dd,s];var m=d(v,2);{var _=P=>{{let w=Y(()=>J.uniqueStores.map(E=>({id:E,label:E,disabled:E===r().forms.store.name})));Lo(P,{get suggestions(){return a(w)},onSuggestionClick:E=>{r().forms.store.name=E.label},buttonVariant:"btn-outline"})}};T(m,P=>{J.uniqueStores.length>0&&P(_)})}var S=d(f,2),b=d(c,2),y=u(b);y.__click=[Rd,r],L(()=>y.disabled=r().loading),Me(p,()=>r().forms.store.name,P=>r().forms.store.name=P),Me(S,()=>r().forms.store.comment,P=>r().forms.store.comment=P),h(e,o),V()}Ze(["keydown","click"]);async function jd(e,t,r,n,s,o){if(!t.modalState)return;const i={totalOverride:{q:a(r),u:a(n)},comment:a(s)};await t.modalState.setOverride(i),$(o,!1)}async function Bd(e,t,r){t.modalState&&(await t.modalState.removeOverride(),$(r,!1))}var Ld=x('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),zd=x('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),Ud=x(" <!>",1),Vd=(e,t)=>$(t,!0),Wd=x('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),Hd=x('<div class="text-error text-sm">Limite de caractères atteinte</div>'),Gd=x('<span class="loading loading-spinner loading-sm"></span>'),Qd=x('<span class="loading loading-spinner loading-sm"></span>'),Kd=x(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),Yd=x('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function Jd(e,t){U(t,!0);const r=Y(()=>t.modalState.product?.totalNeededOverrideParsed),n=Y(()=>t.modalState.product?.displayTotalNeeded||[]);let s=W(!1),o=W(Ne(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=W(Ne(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=W(Ne(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),c=Y(()=>a(o)>0&&a(i).trim()!=="");var f=Yd(),v=u(f),g=u(v),p=u(g);{var m=S=>{var b=Wd(),y=I(b),P=u(y),w=d(u(P),2);{var E=j=>{var H=Ld();h(j,H)};T(w,j=>{a(r)&&j(E)})}var k=d(w,2),A=u(k);{var N=j=>{var H=Ud(),ee=I(H),ge=d(ee);{var q=D=>{var G=zd(),se=u(G);Ss(se,{});var ae=d(se);L(()=>B(ae,` ${a(r).comment??""}`)),h(D,G)};T(ge,D=>{a(r).comment&&D(q)})}L(D=>B(ee,`${D??""} `),[()=>Nn(a(r).totalOverride.q,a(r).totalOverride.u)]),h(j,H)},M=j=>{var H=yt();L(()=>B(H,a(n))),h(j,H)};T(A,j=>{a(r)?j(N):j(M,!1)})}var X=d(y,2);X.__click=[Vd,s],h(S,b)},_=S=>{var b=Kd(),y=I(b),P=u(y),w=u(P);pu(w,{class:"h-4 w-4 opacity-50"});var E=d(w,2),k=d(P,2),A=u(k);A.value=A.__value="";var N=d(A);N.value=N.__value="kg";var M=d(N);M.value=M.__value="gr.";var X=d(M);X.value=X.__value="l.";var j=d(X);j.value=j.__value="ml";var H=d(j);H.value=H.__value="unité";var ee=d(H);ee.value=ee.__value="bottes";var ge=d(y,2),q=u(ge),D=d(u(q),2),G=d(D,2);{var se=R=>{var he=Hd();h(R,he)};T(G,R=>{a(l).length>=250&&R(se)})}var ae=d(ge,2),ve=u(ae);ve.__click=[Bd,t,s];var xe=u(ve);{var Ae=R=>{var he=Gd();h(R,he)},K=R=>{var he=yt();L(()=>B(he,`Réinitialiser le total calculé (${a(n)??""}).`)),h(R,he)};T(xe,R=>{t.modalState.loading?R(Ae):R(K,!1)})}var Q=d(ve,2);Q.__click=[jd,t,o,i,l,s];var te=u(Q);{var O=R=>{var he=Qd();h(R,he)},ie=R=>{var he=yt("Appliquer");h(R,he)};T(te,R=>{t.modalState.loading?R(O):R(ie,!1)})}L(()=>{ve.disabled=t.modalState.loading,Q.disabled=t.modalState.loading||!a(c)}),Me(E,()=>a(o),R=>$(o,R)),ar(k,()=>a(i),R=>$(i,R)),Me(D,()=>a(l),R=>$(l,R)),h(S,b)};T(p,S=>{a(s)?S(_,!1):S(m)})}L(()=>Pe(v,1,`card border-base-300 border ${a(s)?"bg-base-200":"bg-base-100"}`)),h(e,f),V()}Ze(["click"]);var Zd=x('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Xd=x('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Fd=x('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),ef=x('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function tf(e,t){U(t,!0);const r=Y(()=>t.modalState.recipes);var n=ef(),s=I(n);Jd(s,{get modalState(){return t.modalState}});var o=d(s,2),i=u(o),l=u(i);ws(l,{class:"h-5 w-5"});var c=d(i,2);{var f=g=>{var p=Zd(),m=u(p);nn(m,{class:"mx-auto mb-2 h-12 w-12"}),h(g,p)},v=g=>{var p=Fd(),m=u(p),_=d(u(m));st(_,21,()=>a(r),S=>S.r,(S,b)=>{var y=Xd(),P=u(y),w=u(P),E=d(P),k=u(E),A=d(E),N=u(A);L(M=>{B(w,`${a(b).r??""} (${(a(b).a||"-")??""} c.)`),B(k,`${(a(b).q||a(b).qEq)??""} ${(a(b).u||a(b).uEq)??""}`),B(N,M)},[()=>In(a(b).date)]),h(S,y)}),h(g,p)};T(c,g=>{a(r).length===0?g(f):g(v,!1)})}h(e,n),V()}function rf(e,t,r){a(t).saveAllChanges().then(()=>{r.onClose()})}var nf=x('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),sf=x('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),af=(e,t)=>t("recettes"),of=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),lf=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),cf=(e,t)=>t("magasins"),uf=x('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),df=(e,t)=>t("volontaires"),ff=x('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),vf=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),hf=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),pf=(e,t)=>t("stock"),mf=x('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),gf=x('<span class="badge badge-sm badge-secondary ml-1">1</span>'),_f=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),bf=(e,t)=>t("achats"),yf=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),wf=x('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Sf=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),xf=x('<span class="loading loading-spinner loading-sm"></span>'),Pf=x('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),Ef=x('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function $f(e,t){U(t,!0);let r=Ce(t,"initialTab",3,"recettes"),n=Y(()=>td(t.productId)),s=W(Ne(r()));function o(b){$(s,b,!0)}var i=Ef(),l=u(i),c=u(l),f=u(c);{var v=b=>{var y=nf(),P=I(y),w=u(P),E=d(P,2),k=u(E),A=u(k),N=d(k,2),M=d(u(N));L(()=>{B(w,a(n).product?.productName),B(A,a(n).product?.productType),B(M,` ${a(n).product?.displayTotalNeeded??""}`)}),h(b,y)},g=b=>{var y=sf();h(b,y)};T(f,b=>{a(n)&&a(n).product?b(v):b(g,!1)})}var p=d(f,2);p.__click=function(...b){t.onClose?.apply(this,b)};var m=u(p);Mt(m,{class:"h-4 w-4"});var _=d(c,2);{var S=b=>{var y=Pf(),P=I(y),w=u(P);w.__click=[af,o];var E=u(w);ws(E,{class:"mr-1 h-5 w-5"});var k=d(E,2);{var A=re=>{var ye=of(),Ye=u(ye);L(()=>B(Ye,a(n).product?.nbRecipes)),h(re,ye)},N=re=>{var ye=lf();h(re,ye)};T(k,re=>{a(n).product?.nbRecipes&&a(n).product?.nbRecipes>0?re(A):re(N,!1)})}var M=d(w,2);M.__click=[cf,o];var X=u(M);er(X,{class:"mr-1 h-5 w-5"});var j=d(X,2);{var H=re=>{var ye=uf();h(re,ye)};T(j,re=>{a(n).hasChanges?.store&&re(H)})}var ee=d(M,2);ee.__click=[df,o];var ge=u(ee);ss(ge,{class:"mr-1 h-5 w-5"});var q=d(ge,2);{var D=re=>{var ye=ff();h(re,ye)},G=re=>{var ye=z(),Ye=I(ye);{var me=De=>{var Fe=vf(),Dt=u(Fe);L(()=>B(Dt,a(n).product?.who.length)),h(De,Fe)},ct=De=>{var Fe=hf();h(De,Fe)};T(Ye,De=>{a(n).product?.who&&a(n).product?.who.length>0?De(me):De(ct,!1)},!0)}h(re,ye)};T(q,re=>{a(n).hasChanges?.who?re(D):re(G,!1)})}var se=d(ee,2);se.__click=[pf,o];var ae=u(se);rs(ae,{class:"mr-1 h-5 w-5"});var ve=d(ae,2);{var xe=re=>{var ye=mf();h(re,ye)},Ae=re=>{var ye=z(),Ye=I(ye);{var me=De=>{var Fe=gf();h(De,Fe)},ct=De=>{var Fe=_f();h(De,Fe)};T(Ye,De=>{a(n).stockParsed?De(me):De(ct,!1)},!0)}h(re,ye)};T(ve,re=>{a(n).hasChanges?.stock?re(xe):re(Ae,!1)})}var K=d(se,2);K.__click=[bf,o];var Q=u(K);Zt(Q,{class:"mr-1 h-5 w-5"});var te=d(Q,2);{var O=re=>{var ye=yf(),Ye=u(ye);L(()=>B(Ye,a(n).purchasesList.length)),h(re,ye)},ie=re=>{var ye=wf();h(re,ye)};T(te,re=>{a(n).purchasesList.length>0?re(O):re(ie,!1)})}var R=d(P,2),he=u(R);{var _e=re=>{var ye=Sf(),Ye=u(ye);Mt(Ye,{class:"h-4 w-4"});var me=d(Ye,2),ct=u(me);L(()=>B(ct,`erreur : ${a(n).error??""}`)),h(re,ye)};T(he,re=>{a(n).error&&re(_e)})}var ke=d(he,2),Le=u(ke);vl(Le,()=>a(s),re=>{var ye=z(),Ye=I(ye);{var me=De=>{tf(De,{get modalState(){return a(n)}})},ct=De=>{var Fe=z(),Dt=I(Fe);{var fe=we=>{md(we,{get modalState(){return a(n)}})},Se=we=>{var ze=z(),He=I(ze);{var pt=et=>{Ed(et,{get modalState(){return a(n)}})},$t=et=>{var ft=z(),Xe=I(ft);{var ot=le=>{Td(le,{get modalState(){return a(n)}})},Z=le=>{var Te=z(),Ue=I(Te);{var Ge=Re=>{qd(Re,{get modalState(){return a(n)}})};T(Ue,Re=>{a(s)==="magasins"&&Re(Ge)},!0)}h(le,Te)};T(Xe,le=>{a(s)==="volontaires"?le(ot):le(Z,!1)},!0)}h(et,ft)};T(He,et=>{a(s)==="stock"?et(pt):et($t,!1)},!0)}h(we,ze)};T(Dt,we=>{a(s)==="achats"?we(fe):we(Se,!1)},!0)}h(De,Fe)};T(Ye,De=>{a(s)==="recettes"?De(me):De(ct,!1)})}h(re,ye)});var Ie=d(R,2),We=u(Ie);We.__click=function(...re){t.onClose?.apply(this,re)};var pe=u(We),be=d(We,2);be.__click=[rf,n,t];var at=u(be);{var oe=re=>{var ye=xf();h(re,ye)},Ve=re=>{var ye=yt("Tout enregistrer");h(re,ye)};T(at,re=>{a(n).loading?re(oe):re(Ve,!1)})}L(()=>{Pe(w,1,`tab ${a(s)==="recettes"?"tab-active":""}`),Pe(M,1,`tab ${a(s)==="magasins"?"tab-active":""}`),Pe(ee,1,`tab ${a(s)==="volontaires"?"tab-active":""}`),Pe(se,1,`tab ${a(s)==="stock"?"tab-active":""}`),Pe(K,1,`tab ${a(s)==="achats"?"tab-active":""}`),B(pe,a(n)?.hasAnyChanges?"Annuler":"Fermer"),be.disabled=a(n).loading||!a(n).hasAnyChanges}),h(b,y)};T(_,b=>{a(n)&&b(S)})}h(e,i),V()}Ze(["click"]);var kf=(e,t,r)=>t(r),Af=x("<button><span> </span> <!></button>"),Tf=(e,t)=>t(),Cf=x('<div class="flex justify-end"><button class="btn btn-xs btn-link text-primary/80" type="button">Toutes les dates</button></div>'),Nf=x('<div class="text-base-content/60 p-1 text-end text-xs italic">toutes les dates sont incluses</div>'),If=x('<div class=" flex flex-wrap gap-1"></div> <!>',1);function Mf(e,t){U(t,!0);let r=Ce(t,"availableDates",19,()=>[]),n=Ce(t,"currentRange",19,()=>({start:null,end:null})),s=W(Ne(n().start)),o=W(Ne(n().end));const i=Y(()=>r().length>0&&a(s)===r()[0]&&a(o)===r()[r().length-1]);gr(()=>{$(s,n().start,!0),$(o,n().end,!0)});function l(y){a(s)===y&&a(o)===y?g():new Date(y)<new Date(a(s))?$(s,y,!0):(new Date(y)>new Date(a(o))||$(s,y,!0),$(o,y,!0)),t.onRangeChange(a(s),a(o))}function c(y){return new Date(y)>=new Date(a(s))&&new Date(y)<=new Date(a(o))?"btn-soft btn-secondary":"btn-dash btn-secondary opacity-80"}function f(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function v(y){const w=new Date(y).getUTCHours();return w===12?"sun":w===20?"moon":w===8?"cloud":null}function g(){r().length!==0&&($(s,r()[0],!0),$(o,r()[r().length-1],!0),t.onRangeChange(a(s),a(o)))}var p=If(),m=I(p);st(m,22,r,y=>y,(y,P)=>{var w=Af();w.__click=[kf,l,P];var E=u(w),k=u(E),A=d(E,2);{var N=X=>{Su(X,{size:16})},M=X=>{var j=z(),H=I(j);{var ee=q=>{vu(q,{size:16})},ge=q=>{var D=z(),G=I(D);{var se=ae=>{nu(ae,{size:16})};T(G,ae=>{v(P)==="cloud"&&ae(se)},!0)}h(q,D)};T(H,q=>{v(P)==="moon"?q(ee):q(ge,!1)},!0)}h(X,j)};T(A,X=>{v(P)==="sun"?X(N):X(M,!1)})}L((X,j)=>{Pe(w,1,`btn btn-sm ${X??""}`),B(k,j)},[()=>c(P),()=>f(P)]),h(y,w)});var _=d(m,2);{var S=y=>{var P=Cf(),w=u(P);w.__click=[Tf,g],h(y,P)},b=y=>{var P=Nf();h(y,P)};T(_,y=>{a(i)?y(b,!1):y(S)})}h(e,p),V()}Ze(["click"]);var Df=x("<fieldset><legend><!> </legend> <!></fieldset>");function un(e,t){let r=Ce(t,"bgClass",3,"bg-base-100");var n=Df(),s=u(n),o=u(s);{var i=f=>{const v=Y(()=>t.iconComponent);var g=z(),p=I(g);cr(p,()=>a(v),(m,_)=>{_(m,{size:16,class:"mr-1"})}),h(f,g)};T(o,f=>{t.iconComponent&&f(i)})}var l=d(o),c=d(s,2);ne(c,()=>t.children??F),L(()=>{Pe(n,1,`fieldset ${r()??""} border-base-200 rounded-box border p-4`),Pe(s,1,`fieldset-legend ${r()??""} rounded-box text-base-content/80 px-4 py-1`),B(l,` ${t.legend??""}`)}),h(e,n)}var Rf=()=>J.clearFilters(),Of=e=>J.setSearchQuery(e.currentTarget.value),qf=()=>J.setSearchQuery(""),jf=()=>J.setGroupBy("none"),Bf=()=>J.setGroupBy("store"),Lf=()=>J.setGroupBy("productType"),zf=(e,t)=>J.toggleProductType(t),Uf=x("<button><!> </button>"),Vf=()=>J.toggleTemperature("frais"),Wf=()=>J.toggleTemperature("surgele"),Hf=()=>J.clearTypeAndTemperatureFilters(),Gf=x('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de types et température"><!></button>'),Qf=x('<div class="text-base-content/60 p-1 text-end text-xs italic">aucun filtre sélectionné</div>'),Kf=x('<div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div> <!>',1),Yf=(e,t)=>J.toggleStore(t),Jf=x("<button> </button>"),Zf=()=>J.clearStoreFilters(),Xf=x('<button class="btn btn-xs btn-circle btn-outline text-error ms-auto" title="Effacer les filtres de magasins"><!></button>'),Ff=x('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),ev=(e,t)=>J.toggleWho(t),tv=x("<button> </button>"),rv=()=>J.clearWhoFilters(),nv=x('<button class="btn btn-xs btn-circle btn-outline btn-error ms-auto" title="Effacer les filtres de qui"><!></button>'),sv=x('<div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div>'),av=x('<div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-error btn-outline"><!> Tout effacer</button></div> <div class="mb-4 grid grid-cols-1 items-center justify-between gap-4"><div><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/> <button class="btn btn-xs btn-circle btn-error btn-outline opacity-60"><!></button></div></div> <div class="mb-4"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div> <!> <!> <!> <!></div>',1);function ov(e,t){U(t,!0);const r=Y(()=>J.filters),n=Y(()=>J.uniqueStores),s=Y(()=>J.uniqueWho),o=Y(()=>J.uniqueProductTypes);var i=av(),l=I(i),c=u(l),f=u(c);Do(f,{class:"h-5 w-5"});var v=d(c,2);v.__click=[Rf];var g=u(v);cn(g,{class:"h-4 w-4"});var p=d(l,2),m=u(p),_=d(u(m),2),S=u(_);wu(S,{class:"h-4 w-4"});var b=d(S,2);b.__input=[Of];var y=d(b,2);y.__click=[qf];var P=u(y);Mt(P,{class:"h-4 w-4"});var w=d(m,2),E=d(u(w),2),k=u(E);k.__change=[jf];var A=d(k,2);A.__change=[Bf];var N=d(A,2);N.__change=[Lf];var M=d(w,2);{var X=G=>{un(G,{legend:"Date incluses",bgClass:"bg-base-100",children:(se,ae)=>{Mf(se,{get availableDates(){return J.availableDates},get currentRange(){return J.dateRange},onRangeChange:(ve,xe)=>J.setDateRange(ve,xe)})},$$slots:{default:!0}})};T(M,G=>{J.hasSingleDateEvent||G(X)})}var j=d(M,2);{var H=G=>{un(G,{legend:"Types & Température",get iconComponent(){return xu},children:(se,ae)=>{var ve=Kf(),xe=I(ve);st(xe,20,()=>a(o),_e=>_e,(_e,ke)=>{const Le=Y(()=>as(ke));var Ie=Uf();Ie.__click=[zf,ke];var We=u(Ie);cr(We,()=>a(Le).icon,(be,at)=>{at(be,{class:"mr-1 h-5 w-5"})});var pe=d(We);L(be=>{Pe(Ie,1,`btn btn-sm ${be??""}`),B(pe,` ${a(Le).displayName??""}`)},[()=>a(r).selectedProductTypes.length===0?"btn-soft btn-secondary":a(r).selectedProductTypes.includes(ke)?"btn-secondary":"btn-dash btn-secondary"]),h(_e,Ie)});var Ae=d(xe,2),K=u(Ae);K.__click=[Vf];var Q=u(K);Oo(Q,{class:"h-5 w-5"});var te=d(K,2);te.__click=[Wf];var O=u(te);qo(O,{class:"h-5 w-5"});var ie=d(Ae,2);{var R=_e=>{var ke=Gf();ke.__click=[Hf];var Le=u(ke);cn(Le,{size:16}),h(_e,ke)},he=_e=>{var ke=Qf();h(_e,ke)};T(ie,_e=>{a(r).selectedProductTypes.length>0||a(r).selectedTemperatures.length>0?_e(R):_e(he,!1)})}L((_e,ke)=>{Pe(K,1,`btn btn-sm ${_e??""}`),Pe(te,1,`btn btn-sm ${ke??""}`)},[()=>a(r).selectedTemperatures.length===0?"btn-soft btn-success":a(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(r).selectedTemperatures.length===0?"btn-soft btn-info":a(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(se,ve)},$$slots:{default:!0}})};T(j,G=>{a(o).length>0&&G(H)})}var ee=d(j,2);{var ge=G=>{un(G,{legend:"Magasins",get iconComponent(){return er},children:(se,ae)=>{var ve=Ff(),xe=u(ve);st(xe,16,()=>a(n),Q=>Q,(Q,te)=>{var O=Jf();O.__click=[Yf,te];var ie=u(O);L(R=>{Pe(O,1,`btn btn-sm ${R??""}`),B(ie,te)},[()=>a(r).selectedStores.length===0?"btn-soft btn-secondary":a(r).selectedStores.includes(te)?"btn-secondary":"btn-dash btn-secondary"]),h(Q,O)});var Ae=d(xe,2);{var K=Q=>{var te=Xf();te.__click=[Zf];var O=u(te);cn(O,{size:16}),h(Q,te)};T(Ae,Q=>{a(r).selectedStores.length>0&&Q(K)})}h(se,ve)},$$slots:{default:!0}})};T(ee,G=>{a(n).length>0&&G(ge)})}var q=d(ee,2);{var D=G=>{un(G,{legend:"Qui",get iconComponent(){return sn},children:(se,ae)=>{var ve=sv(),xe=u(ve);st(xe,16,()=>a(s),Q=>Q,(Q,te)=>{var O=tv();O.__click=[ev,te];var ie=u(O);L(R=>{Pe(O,1,`btn btn-sm ${R??""}`),B(ie,te)},[()=>a(r).selectedWho.length===0?" btn-soft btn-secondary":a(r).selectedWho.includes(te)?" btn-secondary":"btn-dash btn-secondary"]),h(Q,O)});var Ae=d(xe,2);{var K=Q=>{var te=nv();te.__click=[rv];var O=u(te);cn(O,{size:16}),h(Q,te)};T(Ae,Q=>{a(r).selectedWho.length>0&&Q(K)})}h(se,ve)},$$slots:{default:!0}})};T(q,G=>{a(s).length>0&&G(D)})}L(()=>{v.disabled=!J.hasFilters,Sl(b,a(r).searchQuery),y.disabled=!a(r).searchQuery,jn(k,a(r).groupBy==="none"),jn(A,a(r).groupBy==="store"),jn(N,a(r).groupBy==="productType")}),h(e,i),V()}Ze(["click","input","change"]);var iv=x('<div class="tooltip text-xs font-normal"><!></div>');function lv(e,t){let r=Ce(t,"iconSize",3,24),n=t.icon||void 0;var s=iv(),o=u(s);{var i=l=>{n(l,{get size(){return r()},class:`align-top
`})};T(o,l=>{t.icon&&l(i)})}L(()=>Lt(s,"data-tip",t.tip)),h(e,s)}var cv=x('<div class="text-neutral-content flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),uv=(e,t,r)=>t.onOpenGroupEditModal("store",r().map(n=>n.$id),r()),dv=(e,t,r)=>t.onOpenGroupEditModal("who",r().map(n=>n.$id),r()),fv=(e,t,r)=>t.onOpenGroupPurchaseModal(r()),vv=x(`<button class="btn btn-sm btn-primary btn-soft" title="Ouvrir le modal d'achat groupé"><!> <span class="hidden @md:block">Achat groupé</span> <!></button>`),hv=x('<div class="bg-primary @container sticky top-0 z-2 flex flex-wrap items-center justify-between rounded-lg px-4 py-2 font-semibold shadow-lg brightness-100 drop-shadow-xl @md:flex-nowrap"><div class="flex items-center gap-2 @md:min-w-48"><!></div> <div class="flex flex-wrap items-center justify-end gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> <span class="hidden @md:block">Magasin</span> <!></button> <button class="btn btn-sm btn-primary btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> <span class="hidden @md:block">Volontaires</span> <!></button> <!></div></div>'),pv=(e,t,r)=>t.onOpenModal(a(r).$id,"recettes"),mv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(a(r).$id,"recettes"),gv=x('<div class="text-base-content/60 text-sm font-normal"> </div>'),_v=x('<div class="bg-success/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit frais"><!></div>'),bv=x('<div class="bg-info/20 flex h-6 w-6 items-center justify-center rounded-full" title="Produit surgelé"><!></div>'),yv=x('<div class="text-accent flex items-center gap-1" title="Synchronisation en cours..."><!></div>'),wv=x('<div class="tooltip"><div class="badge badge-outline badge-sm hover:badge-primary"> </div></div>'),Sv=x('<div class="badge badge-outline badge-xs hover:badge-primary"> </div>'),xv=x('<div class="text-base-content/60"><div class="flex flex-wrap gap-1"></div></div>'),Pv=(e,t,r)=>t.onOpenModal(a(r).$id,"magasins"),Ev=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(a(r).$id,"magasins"),$v=x('<div class="ml-1"><!></div>'),kv=x('<div class="ml-1"> </div> <!>',1),Av=x('<div class="ml-1 text-sm font-medium">?</div>'),Tv=(e,t,r)=>t.onOpenModal(a(r).$id,"volontaires"),Cv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(a(r).$id,"volontaires"),Nv=x('<span class="text-base-content/50 text-xs"> </span>'),Iv=x('<div class="ml-1 flex gap-1"> <!></div>'),Mv=x('<div class="ml-1 text-sm font-medium">?</div>'),Dv=(e,t,r)=>t.onOpenModal(a(r).$id,"recettes"),Rv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(a(r).$id,"recettes"),Ov=x('<div class="text-base-content/70 flex items-center gap-2 text-sm"><span class="flex items-center gap-1"> <!></span> <span class="flex items-center gap-1"> <!></span></div>'),qv=(e,t,r)=>{e.stopPropagation(),t.onQuickValidation(a(r))},jv=x('<button class="btn btn-sm btn-soft btn-warning hover:bg-success/70 hover:border-success/70 ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M.625 0a.625.625 0 1 0 0 1.25h1.818l.205 1.94l.644 6.105a1.626 1.626 0 0 0 1.619 1.455h6.208c.746 0 1.397-.506 1.579-1.23l1.253-5a1.626 1.626 0 0 0-1.579-2.02h-8.54L3.627.56A.625.625 0 0 0 3.006 0zm3.91 9.164L3.964 3.75h8.408c.247 0 .425.23.366.466l-1.253 5a.38.38 0 0 1-.366.284H4.911a.376.376 0 0 1-.376-.336m5.72-3.134a.75.75 0 0 0-1.129-.988l-1.48 1.69l-.526-.395a.75.75 0 1 0-.9 1.2l1.083.813a.75.75 0 0 0 1.015-.106zm1.816 6.845a1.125 1.125 0 1 0-2.25 0a1.125 1.125 0 0 0 2.25 0M4.446 11.75a1.125 1.125 0 1 1 0 2.25a1.125 1.125 0 0 1 0-2.25" clip-rule="evenodd"></path></svg> <span class="text-xs"> </span> <!></button>'),Bv=(e,t,r)=>t.onOpenModal(a(r).$id,"achats"),Lv=(e,t,r)=>e.key==="Enter"&&t.onOpenModal(a(r).$id,"achats"),zv=x('<div><!> <span class="text-sm font-medium"> </span></div>'),Uv=x('<span class="text-base-content/50 text-xs italic">aucun</span>'),Vv=x('<div><div class="card-body p-2"><div class="flex items-center justify-between"><div class="flex flex-1 cursor-pointer gap-4" role="button" tabindex="0"><div class="ms-4 flex items-center gap-2 text-base font-semibold"><!> <!></div> <div class="flex gap-1"><!> <!></div> <!> <!></div> <div class="ml-4 flex gap-2"><button title="Modifier le magasin"><!> <!></button> <button title="Modifier les volontaires"><!> <!></button></div></div> <div class="flex flex-wrap gap-3"><div class="bg-base-200/40 hover:bg-base-200/50 relative flex min-w-[200px] flex-1 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg p-3 transition-colors hover:shadow-sm" role="button" tabindex="0"><div class="flex gap-4"><div class="text-base-content/80 flex items-center gap-2 text-sm font-medium"><!> Besoins:</div> <div class="flex items-center gap-4"><div> </div> <!></div></div> <!></div> <div class="group bg-base-200/40 hover:bg-base-200/50 hover:ring-accent/60 relative min-w-[200px] flex-1 cursor-pointer rounded-lg p-3 transition-colors hover:ring-2" role="button" tabindex="0"><div class="flex items-center justify-between gap-2"><div class="flex flex-col gap-0"><div class="text-base-content/80 flex items-center justify-between gap-2 text-sm font-medium"><!> Achats / Récup:</div> <div class="text-base-content/30 ms-4 text-xs italic opacity-100 transition-opacity group-hover:opacity-100 sm:opacity-0">ajouter un achat</div></div> <div class="flex flex-wrap gap-1.5"><!> <!></div></div></div></div></div></div>'),Wv=x('<!> <div class="space-y-1"></div>',1),Hv=x('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Gv=x('<div class="space-y-4 rounded-lg"></div> <!>',1);function Qv(e,t){U(t,!0);const r={Package:nn,MessageCircleQuestionMark:fu,ShoppingCart:Zt,Clock:ru,CircleCheck:Fc,CircleX:eu,ClipboardCheck:tu,PackageCheck:hu},n=Y(()=>J.groupedFilteredProducts),s=Y(()=>J.filters);var o=Gv(),i=I(o);st(i,21,()=>Object.entries(a(n)),([f,v])=>f,(f,v)=>{var g=Y(()=>ua(a(v),2));let p=()=>a(g)[0],m=()=>a(g)[1];var _=Wv(),S=I(_);{var b=P=>{const w=Y(()=>as(p()));var E=hv(),k=u(E),A=u(k);{var N=ae=>{var ve=yt();L(()=>B(ve,`🏪 ${p()??""} (${m().length??""})`)),h(ae,ve)},M=ae=>{var ve=z(),xe=I(ve);{var Ae=Q=>{var te=cv(),O=u(te);cr(O,()=>a(w).icon,(ke,Le)=>{Le(ke,{class:"h-4 w-4"})});var ie=d(O,2),R=u(ie),he=d(ie,2),_e=u(he);L(()=>{B(R,a(w).displayName),B(_e,`(${m().length??""})`)}),h(Q,te)},K=Q=>{var te=yt();L(()=>B(te,`📦 ${p()??""} (${m().length??""})`)),h(Q,te)};T(xe,Q=>{a(s).groupBy==="productType"?Q(Ae):Q(K,!1)},!0)}h(ae,ve)};T(A,ae=>{a(s).groupBy==="store"?ae(N):ae(M,!1)})}var X=d(k,2),j=u(X);j.__click=[uv,t,m];var H=u(j);er(H,{size:16});var ee=d(H,4);ns(ee,{size:16});var ge=d(j,2);ge.__click=[dv,t,m];var q=u(ge);ss(q,{size:16});var D=d(q,4);ns(D,{size:16});var G=d(ge,2);{var se=ae=>{var ve=vv();ve.__click=[fv,t,m];var xe=u(ve);Zt(xe,{size:16});var Ae=d(xe,4);ta(Ae,{size:16}),h(ae,ve)};T(G,ae=>{m().some(ve=>ve.displayMissingQuantity!=="✅ Complet")&&ae(se)})}h(P,E)};T(S,P=>{p()!==""&&P(b)})}var y=d(S,2);st(y,21,()=>m()||[],P=>P.$id,(P,w)=>{const E=Y(()=>J.productsStatsByDateRange.get(a(w).$id)||{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedAvailableQuantities:"Équilibré",hasAvailable:!1,hasMissing:!1,concernedDates:[],recipesByDate:new Map}),k=Y(()=>as(a(w).productType)),A=Y(()=>Fu(a(w).purchases||[]));var N=Vv(),M=u(N),X=u(M),j=u(X);j.__click=[pv,t,w],j.__keydown=[mv,t,w];var H=u(j),ee=u(H);cr(ee,()=>a(k).icon,(Z,le)=>{le(Z,{class:"text-base-content/80 h-4 w-4"})});var ge=d(ee),q=d(ge);{var D=Z=>{var le=gv(),Te=u(le);L(()=>B(Te,`Ancien: ${a(w).previousNames[0]??""}`)),h(Z,le)};T(q,Z=>{a(w).previousNames&&a(w).previousNames.length>0&&Z(D)})}var G=d(H,2),se=u(G);{var ae=Z=>{var le=_v(),Te=u(le);Oo(Te,{class:"text-success h-4 w-4"}),h(Z,le)};T(se,Z=>{a(w).pFrais&&Z(ae)})}var ve=d(se,2);{var xe=Z=>{var le=bv(),Te=u(le);qo(Te,{class:"text-info h-4 w-4"}),h(Z,le)};T(ve,Z=>{a(w).pSurgel&&Z(xe)})}var Ae=d(G,2);{var K=Z=>{var le=yv(),Te=u(le);Ro(Te,{class:"h-4 w-4 animate-spin"}),h(Z,le)};T(Ae,Z=>{a(w).status==="isSyncing"&&Z(K)})}var Q=d(Ae,2);{var te=Z=>{var le=xv(),Te=u(le);st(Te,20,()=>a(E).concernedDates,Ue=>Ue,(Ue,Ge)=>{const Re=Y(()=>a(E).recipesByDate.get(Ge)||[]);var Qe=z(),Be=I(Qe);{var wt=St=>{var mt=wv(),Ht=u(mt),Rt=u(Ht);L((Gt,Rr)=>{Lt(mt,"data-tip",Gt),B(Rt,Rr)},[()=>a(Re).map(Gt=>Gt.r).join(", "),()=>new Date(Ge).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),h(St,mt)},br=St=>{var mt=Sv(),Ht=u(mt);L(Rt=>B(Ht,Rt),[()=>new Date(Ge).toLocaleDateString("fr-FR",{weekday:"short",day:"numeric"})]),h(St,mt)};T(Be,St=>{a(Re).length>0?St(wt):St(br,!1)})}h(Ue,Qe)}),h(Z,le)};T(Q,Z=>{a(E).concernedDates.length>0&&Z(te)})}var O=d(j,2),ie=u(O);ie.__click=[Pv,t,w],ie.__keydown=[Ev,t,w];var R=u(ie);er(R,{size:18});var he=d(R,2);{var _e=Z=>{var le=kv(),Te=I(le),Ue=u(Te),Ge=d(Te,2);{var Re=Qe=>{var Be=$v(),wt=u(Be);lv(wt,{get tip(){return a(w).storeInfo.storeComment},get icon(){return du},iconSize:14}),h(Qe,Be)};T(Ge,Qe=>{a(w).storeInfo?.storeComment&&Qe(Re)})}L(()=>B(Ue,a(w).storeInfo.storeName)),h(Z,le)},ke=Z=>{var le=Av();h(Z,le)};T(he,Z=>{a(w).storeInfo?.storeName?Z(_e):Z(ke,!1)})}var Le=d(ie,2);Le.__click=[Tv,t,w],Le.__keydown=[Cv,t,w];var Ie=u(Le);ss(Ie,{size:18});var We=d(Ie,2);{var pe=Z=>{var le=Iv(),Te=u(le),Ue=d(Te);{var Ge=Re=>{var Qe=Nv(),Be=u(Qe);L(()=>B(Be,`+${a(w).who.length-2}`)),h(Re,Qe)};T(Ue,Re=>{a(w).who.length>2&&Re(Ge)})}L(Re=>B(Te,`${Re??""} `),[()=>a(w).who.slice(0,2).map(Re=>Re.slice(0,3)).join(" | ")]),h(Z,le)},be=Z=>{var le=Mv();h(Z,le)};T(We,Z=>{a(w).who&&a(w).who.length>0?Z(pe):Z(be,!1)})}var at=d(X,2),oe=u(at);oe.__click=[Dv,t,w],oe.__keydown=[Rv,t,w];var Ve=u(oe),re=u(Ve),ye=u(re);cu(ye,{class:"h-4 w-4"});var Ye=d(re,2),me=u(Ye),ct=u(me),De=d(me,2);{var Fe=Z=>{var le=Ov(),Te=u(le),Ue=u(Te),Ge=d(Ue);ws(Ge,{class:"h-3 w-3"});var Re=d(Te,2),Qe=u(Re),Be=d(Qe);Pu(Be,{class:"h-3 w-3"}),L(()=>{B(Ue,`${a(E).nbRecipes??""} `),B(Qe,`${a(E).totalAssiettes??""} `)}),h(Z,le)};T(De,Z=>{(a(E).nbRecipes||a(E).totalAssiettes)&&Z(Fe)})}var Dt=d(Ve,2);{var fe=Z=>{var le=jv();le.__click=[qv,t,w];var Te=d(u(le),2),Ue=u(Te),Ge=d(Te,2);{var Re=Be=>{Zc(Be,{size:18})},Qe=Be=>{Xc(Be,{size:18})};T(Ge,Be=>{en.isMobile?Be(Re):Be(Qe,!1)})}L(()=>{Lt(le,"title",`Acheter le manquant (${a(E).formattedAvailableQuantities??""})`),B(Ue,a(E).formattedAvailableQuantities)}),h(Z,le)},Se=Z=>{ta(Z,{size:24,class:"text-success"})};T(Dt,Z=>{a(E).hasMissing?Z(fe):Z(Se,!1)})}var we=d(oe,2);we.__click=[Bv,t,w],we.__keydown=[Lv,t,w];var ze=u(we),He=u(ze),pt=u(He),$t=u(pt);Zt($t,{class:"h-4 w-4"});var et=d(He,2),ft=u(et);st(ft,17,()=>a(A),Z=>Z.status,(Z,le)=>{const Te=Y(()=>r[a(le).icon]);var Ue=zv(),Ge=u(Ue);cr(Ge,()=>a(Te),(Be,wt)=>{wt(Be,{class:"h-4 w-4"})});var Re=d(Ge,2),Qe=u(Re);L(Be=>{Pe(Ue,1,`badge badge-outline flex items-center gap-1 ${a(le).badgeClass??""}`),B(Qe,Be)},[()=>Nn(a(le).quantity,a(le).unit)]),h(Z,Ue)});var Xe=d(ft,2);{var ot=Z=>{var le=Uv();h(Z,le)};T(Xe,Z=>{a(A).length===0&&Z(ot)})}L(()=>{Pe(N,1,`card bg-base-100 border-base-300 ${a(w).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-500 bg-blue-50/40":""}`),B(ge,`${a(w).productName??""} `),Pe(ie,1,`btn btn-soft btn-sm group relative ${a(w).storeInfo?.storeName?"btn-success":""}`),Pe(Le,1,`btn btn-sm btn-soft group relative ${a(w).who?.length>0?"btn-success":""}`),Pe(me,1,`font-bold ${a(E).hasMissing?"text-error":"text-success"}`),B(ct,a(E).formattedQuantities)}),h(P,N)}),h(f,_)});var l=d(i,2);{var c=f=>{var v=Hv();h(f,v)};T(l,f=>{Object.values(a(n)).flat().length===0&&f(c)})}h(e,o),V()}Ze(["click","keydown"]);async function Kv(e,t,r,n,s,o,i,l,c){if(!(!a(t)||a(r))){$(n,null),$(s,null);try{const f=a(o).map(m=>m.id),v=i.products.filter(m=>f.includes(m.$id));J.setSyncStatus(f,!0),i.onClose();const g={storeName:a(l).trim(),storeComment:a(c).trim()},p=await No(f,v,g);if($(s,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(f){const v=f instanceof Error?f.message:"Erreur inconnue";$(n,v,!0),console.error("[StoreEditModal] Erreur mise à jour:",f),J.clearSyncStatus()}finally{$(r,!1)}}}function aa(e,t,r){a(t)||r.onClose()}var Yv=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Jv=(e,t)=>$(t,"empty"),Zv=(e,t)=>$(t,"all"),Xv=x('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Fv=x("<!> ",1),eh=x('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function th(e,t){U(t,!0);let r=W(!1),n=W(null),s=W(null),o=W(Ne(t.products.length>0&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"")),i=W(Ne(t.products.length>0&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"")),l=W(Ne({})),c=W("empty");gr(()=>{const R={};t.products.forEach(he=>{t.productIds.includes(he.$id)&&(a(c)==="empty"?R[he.$id]=!he.storeInfo||!he.storeInfo.storeName:R[he.$id]=!0)}),$(l,R,!0)});const f=Y(()=>t.products.map(R=>({id:R.$id,label:R.productName,title:R.productName,selected:a(l)[R.$id]}))),v=Y(()=>a(f).filter(R=>R.selected)),g=Y(()=>`Attribuer un magasin (${a(v).length} produits sélectionnés)`),p=Y(()=>a(v).length===0?!1:a(o).trim().length>0);function m(R){a(l)[R]=!a(l)[R]}var _=eh(),S=u(_),b=u(S),y=u(b),P=u(y),w=d(y,2);w.__click=[aa,r,t];var E=u(w);Mt(E,{class:"h-4 w-4"});var k=d(b,2),A=u(k);{var N=R=>{var he=Yv(),_e=u(he);Cn(_e,{class:"h-4 w-4"});var ke=d(_e,2),Le=u(ke);L(()=>B(Le,a(n))),h(R,he)};T(A,R=>{a(n)&&R(N)})}var M=d(A,2),X=u(M),j=u(X),H=u(j);er(H,{class:"h-4 w-4 opacity-50"});var ee=d(H,2),ge=d(j,2);{let R=Y(()=>J.uniqueStores.map(he=>({id:he,label:he,disabled:he===a(o)})));Lo(ge,{get suggestions(){return a(R)},onSuggestionClick:he=>{$(o,he.label,!0)},title:"Suggestions de magasins :"})}var q=d(X,2),D=u(q),G=d(M,2),se=d(u(G),2),ae=u(se);ae.__click=[Jv,c];var ve=d(ae,2);ve.__click=[Zv,c];var xe=d(se,2);tn(xe,{get items(){return a(f)},onToggleItem:m,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var Ae=d(k,2),K=u(Ae);K.__click=[aa,r,t];var Q=d(K,2);Q.__click=[Kv,p,r,n,s,v,t,o,i];var te=u(Q);{var O=R=>{var he=Xv();h(R,he)},ie=R=>{var he=Fv(),_e=I(he);Fr(_e,{class:"h-4 w-4"});var ke=d(_e);L(()=>B(ke,` Appliquer à ${a(v).length??""} produit(s)`)),h(R,he)};T(te,R=>{a(r)?R(O):R(ie,!1)})}L(()=>{B(P,a(g)),w.disabled=a(r),ee.disabled=a(r),D.disabled=a(r),Pe(ae,1,`tab ${a(c)==="empty"?"tab-active":""}`),Pe(ve,1,`tab ${a(c)==="all"?"tab-active":""}`),K.disabled=a(r),Q.disabled=a(r)||!a(p)}),Me(ee,()=>a(o),R=>$(o,R)),Me(D,()=>a(i),R=>$(i,R)),h(e,_),V()}Ze(["click"]);async function rh(e,t,r,n,s,o,i,l){if(!(!a(t)||a(r))){$(n,null),$(s,null);try{const c=a(o).map(g=>g.id),f=i.products.filter(g=>c.includes(g.$id));J.setSyncStatus(c,!0),i.onClose();const v=await Io(c,f,a(l),"replace");if($(s,v,!0),v.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${v.updatedCount} produits modifiés`),i.onSuccess?.(v);else throw new Error(v.error||"Erreur lors de la mise à jour")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";$(n,f,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),J.clearSyncStatus()}finally{$(r,!1)}}}function oa(e,t,r){a(t)||r.onClose()}var nh=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),sh=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},ah=(e,t)=>$(t,"empty"),oh=(e,t)=>$(t,"all"),ih=x('<span class="loading loading-spinner loading-sm"></span> En cours...',1),lh=x("<!> ",1),ch=x('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function uh(e,t){U(t,!0);let r=W(!1),n=W(null),s=W(null),o=W(Ne([])),i=W(""),l=W("empty"),c=W(Ne({}));gr(()=>{const pe={};t.products.forEach(be=>{t.productIds.includes(be.$id)&&(a(l)==="empty"?pe[be.$id]=!be.who||be.who.length===0:pe[be.$id]=!0)}),$(c,pe,!0)});const f=Y(()=>t.products.map(pe=>({id:pe.$id,label:pe.productName,title:pe.productName,selected:a(c)[pe.$id]}))),v=Y(()=>a(f).filter(pe=>pe.selected)),g=Y(()=>{const pe=new Set([...J.uniqueWho,...a(o)]);return Array.from(pe).map(be=>({id:be,label:be,selected:a(o).includes(be)}))}),p=Y(()=>`Gérer les volontaires (${a(v).length} produits sélectionnés)`),m=Y(()=>a(v).length===0?!1:a(o).length>0);function _(pe){const be=pe.trim();be&&!a(o).includes(be)&&$(o,[...a(o),be],!0)}function S(pe){$(o,a(o).filter(be=>be!==pe),!0)}function b(pe){a(o).includes(pe)?S(pe):_(pe)}function y(){a(i).trim()&&(_(a(i)),$(i,""))}function P(pe){a(c)[pe]=!a(c)[pe]}var w=ch(),E=u(w),k=u(E),A=u(k),N=u(A),M=d(A,2);M.__click=[oa,r,t];var X=u(M);Mt(X,{class:"h-4 w-4"});var j=d(k,2),H=u(j);{var ee=pe=>{var be=nh(),at=u(be);Cn(at,{class:"h-4 w-4"});var oe=d(at,2),Ve=u(oe);L(()=>B(Ve,a(n))),h(pe,be)};T(H,pe=>{a(n)&&pe(ee)})}var ge=d(H,2),q=u(ge),D=u(q),G=u(D),se=u(G);sn(se,{class:"h-4 w-4 opacity-50"});var ae=d(se,2);ae.__keydown=[sh,y];var ve=d(G,2);ve.__click=y;var xe=u(ve);jo(xe,{size:16});var Ae=d(D,2),K=d(u(Ae),2);tn(K,{get items(){return a(g)},onToggleItem:b,showIcon:!0});var Q=d(ge,2),te=d(u(Q),2),O=u(te);O.__click=[ah,l];var ie=d(O,2);ie.__click=[oh,l];var R=d(te,2);tn(R,{get items(){return a(f)},onToggleItem:P,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var he=d(j,2),_e=u(he);_e.__click=[oa,r,t];var ke=d(_e,2);ke.__click=[rh,m,r,n,s,v,t,o];var Le=u(ke);{var Ie=pe=>{var be=ih();h(pe,be)},We=pe=>{var be=lh(),at=I(be);Fr(at,{class:"h-4 w-4"});var oe=d(at);L(()=>B(oe,` Appliquer à ${a(v).length??""} produit(s)`)),h(pe,be)};T(Le,pe=>{a(r)?pe(Ie):pe(We,!1)})}L(pe=>{B(N,a(p)),M.disabled=a(r),ae.disabled=a(r),ve.disabled=pe,Pe(O,1,`tab ${a(l)==="empty"?"tab-active":""}`),Pe(ie,1,`tab ${a(l)==="all"?"tab-active":""}`),_e.disabled=a(r),ke.disabled=a(r)||!a(m)},[()=>a(r)||!a(i).trim()]),Me(ae,()=>a(i),pe=>$(i,pe)),h(e,w),V()}Ze(["click","keydown"]);var dh=x("<div><!></div>"),fh=x('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-screen p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function vh(e,t){U(t,!0);let r=W(!1),n=Ce(t,"width",3,"80"),s=Ce(t,"bgClass",3,"bg-base-300");const o=Y(()=>"w-"+n());var i=z(),l=I(i);{var c=v=>{var g=dh(),p=u(g);ne(p,()=>t.children??F),L(()=>Pe(g,1,`${s()??""} ${(a(o)?a(o):"w-100")??""} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4`)),h(v,g)},f=v=>{var g=fh(),p=I(g),m=u(p),_=d(m,2),S=d(u(_),2),b=u(S);ne(b,()=>t.children??F);var y=d(p,2),P=u(y),w=u(P);Do(w,{class:"h-6 w-6"}),El(m,()=>a(r),E=>$(r,E)),h(v,g)};T(l,v=>{en.isMobile?v(f,!1):v(c)})}h(e,i),V()}function hh(){}var ph=x('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <!> <!></div> <!> <!> <!> <!>',1);function mh(e,t){U(t,!0);const r="100",s="ml"+"-"+r;console.log("PANEL_SIDE_WIDTH →",s);const o=Y(()=>J.stats);let i=W(null),l=W("recettes"),c=W(!1),f=W(!1),v=W(Ne([])),g=W(Ne([])),p=W(!1),m=W(Ne([]));function _(O,ie="recettes"){$(l,ie,!0),$(i,O,!0)}function S(){$(i,null)}function b(O,ie,R){$(v,ie,!0),$(g,R,!0),$(O==="who"?c:f,!0)}function y(O){(!O||O==="who")&&$(c,!1),(!O||O==="store")&&$(f,!1),$(v,[],!0),$(g,[],!0)}function P(O){console.log(`[ProductsTable] Modification groupée réussie: ${O.updatedCount} produits`)}function w(O){const ie=O.filter(R=>R.displayMissingQuantity!=="✅ Complet"&&R.missingQuantityArray&&R.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${O.length} produits reçus → ${ie.length} produits avec quantités manquantes`),$(m,ie,!0),$(p,!0)}function E(){$(p,!1),$(m,[],!0)}function k(){console.log("[ProductsTable] Achat groupé créé avec succès"),E()}async function A(O){try{if(!J.currentMainId)throw new Error("mainId non disponible");const ie=O.missingQuantityArray||[];if(ie.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let R=O.$id;O.isSynced||(console.log(`[ProductsTable] Produit ${O.$id} local, création pour validation rapide...`),R=(await Qt(O.$id,{},_e=>J.getEnrichedProductById(_e))).$id,console.log(`[ProductsTable] Produit sync créé: ${R}`)),await Mo(J.currentMainId,R,ie,{store:O.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${O.productName}`)}catch(ie){console.error("[ProductsTable] Erreur validation rapide:",ie),alert("Erreur lors de la validation rapide: "+ie.message)}}var N=ph(),M=I(N),X=u(M),j=u(X),H=u(j);iu(H,{class:"mr-1 h-4 w-4"});var ee=d(H),ge=d(j,2);ge.__click=[hh];var q=u(ge);gu(q,{class:"mr-1 h-4 w-4"});var D=d(X,2);vh(D,{width:r,children:(O,ie)=>{ov(O,{})},$$slots:{default:!0}});var G=d(D,2);Qv(G,{onOpenModal:_,onOpenGroupEditModal:b,onOpenGroupPurchaseModal:w,onQuickValidation:A});var se=d(M,2);{var ae=O=>{$f(O,{get productId(){return a(i)},get initialTab(){return a(l)},onClose:S})};T(se,O=>{a(i)&&O(ae)})}var ve=d(se,2);{var xe=O=>{uh(O,{get productIds(){return a(v)},get products(){return a(g)},onClose:()=>y("who"),onSuccess:P})};T(ve,O=>{a(c)&&O(xe)})}var Ae=d(ve,2);{var K=O=>{th(O,{get productIds(){return a(v)},get products(){return a(g)},onClose:()=>y("store"),onSuccess:P})};T(Ae,O=>{a(f)&&O(K)})}var Q=d(Ae,2);{var te=O=>{Zu(O,{get products(){return a(m)},onClose:E,onSuccess:k})};T(Q,O=>{a(p)&&O(te)})}L(()=>{Pe(M,1,`space-y-6 ${en.isMobile?"":"ml-100"}`),B(ee,` ${a(o).total??""}`)}),h(e,N),V()}Ze(["click"]);$i();var gh=x('<div class="fixed inset-0 flex items-center justify-center"><div class="flex flex-col items-center justify-center gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div></div>');function _h(e){var t=gh();h(e,t)}var bh=x('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function yh(e,t){var r=bh(),n=d(u(r),2),s=d(u(n),2),o=u(s);L(()=>B(o,t.message)),h(e,r)}var wh=x('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Sh(e,t){var r=wh(),n=u(r),s=u(n);Cn(s,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(s,2),i=d(u(o),2),l=u(i);L(()=>B(l,t.message||"Erreur inconnue")),h(e,r)}var xh=(e,t,r)=>t(a(r)),Ph=x('<button class="btn btn-ghost btn-sm btn-square" title="Fermer" aria-label="Fermer la notification"><!></button>'),Eh=x('<div><div class="flex items-center gap-2"><!> <span class="text-xs"> </span></div> <!></div>'),$h=x("<div></div>");function kh(e,t){U(t,!0);let r=Ce(t,"position",3,"toast-right toast-bottom");const n=Y(()=>Ot.toasts);function s(l){return l==="success"||l==="info"}function o(l){Ot.dismiss(l.id)}var i=$h();st(i,21,()=>a(n),l=>l.id,(l,c)=>{var f=Eh(),v=u(f),g=u(v);{var p=y=>{Ro(y,{class:"h-5 w-5 animate-spin"})};T(g,y=>{a(c).state==="loading"&&y(p)})}var m=d(g,2),_=u(m),S=d(v,2);{var b=y=>{var P=Ph();P.__click=[xh,o,c];var w=u(P);Mt(w,{class:"ms-1 h-4 w-4"}),h(y,P)};T(S,y=>{(a(c).state==="error"||!s(a(c).state))&&y(b)})}L(()=>{Pe(f,1,`alert alert-${a(c).state??""} max-w-sm px-2 py-0.5 shadow-lg ${a(c).state==="error"?"":"alert-soft"}`),B(_,a(c).message)}),h(l,f)}),L(()=>Pe(i,1,`toast ${r()??""} z-50`)),h(e,i),V()}Ze(["click"]);var Ah=x('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),Th=x('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),Ch=x('<div class="text-base-content/60"> </div>'),Nh=x('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),Ih=x('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),Mh=x('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),Dh=x('<header class="bg-base-300 top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!></main>',1),Rh=x('<div class="bg-base-200 min-h-screen"><!> <!></div>');function Oh(e,t){U(t,!0);let r,n=W(null),s=W(!0),o=W(!1);eo(async()=>{const S=ea();r=Uc(S);try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await J.initialize(r,S)}catch(b){const y=b instanceof Error?b.message:"Erreur lors de l'initialisation";$(n,y,!0),console.error("[App] Erreur initialisation:",b)}finally{$(s,!1)}}),Tl(()=>{J.destroy()});async function i(){if(!(!r||a(o))){$(o,!0);try{const S=ea();await J.forceReload(r,S)}catch(S){console.error("[App] Erreur lors du rechargement forcé:",S)}finally{$(o,!1)}}}const l=Y(()=>a(n)||J.error),c=Y(()=>a(s)||J.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=Rh(),g=u(v);kh(g,{});var p=d(g,2);{var m=S=>{_h(S)},_=S=>{var b=Dh(),y=I(b),P=u(y),w=u(P),E=d(u(w),2),k=u(E);{var A=K=>{var Q=Ah();h(K,Q)};T(k,K=>{J.realtimeConnected&&K(A)})}var N=d(k,2);{var M=K=>{var Q=Th();h(K,Q)};T(N,K=>{J.syncing&&K(M)})}var X=d(N,2);{var j=K=>{var Q=Ch(),te=u(Q);L(O=>B(te,`Maj: ${O??""}`),[()=>new Date(J.lastSync).toLocaleTimeString()]),h(K,Q)};T(X,K=>{J.lastSync&&K(j)})}var H=d(X,2);{var ee=K=>{var Q=Nh();let te;Q.__click=i;var O=u(Q);_u(O,{class:"h-4 w-4"}),L(ie=>{te=Pe(Q,1,"btn btn-outline btn-sm",null,te,ie),Q.disabled=a(o)||J.loading},[()=>({loading:a(o)||J.loading})]),h(K,Q)};T(H,K=>{a(n)||K(ee)})}var ge=d(H,2);{var q=K=>{var Q=Ih(),te=u(Q),O=u(te);uu(O,{class:"mr-2 h-4 w-4"}),L(()=>Lt(te,"href",f)),h(K,Q)};T(ge,K=>{a(n)&&K(q)})}var D=d(y,2),G=u(D);{var se=K=>{Sh(K,{get message(){return a(l)}})},ae=K=>{var Q=z(),te=I(Q);{var O=ie=>{yh(ie,{get message(){return a(l)}})};T(te,ie=>{a(l)&&ie(O)},!0)}h(K,Q)};T(G,K=>{a(n)?K(se):K(ae,!1)})}var ve=d(G,2);{var xe=K=>{mh(K,{})},Ae=K=>{var Q=z(),te=I(Q);{var O=ie=>{var R=Mh();h(ie,R)};T(te,ie=>{!J.loading&&!a(n)&&ie(O)},!0)}h(K,Q)};T(ve,K=>{J.enrichedProducts.length>0?K(xe):K(Ae,!1)})}h(S,b)};T(p,S=>{a(c)?S(m):S(_,!1)})}h(e,v),V()}Ze(["click"]);ul(Oh,{target:document.getElementById("app_products")});
