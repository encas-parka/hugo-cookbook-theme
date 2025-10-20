(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const va=!1;var $n=Array.isArray,Vi=Array.prototype.indexOf,hs=Array.from,es=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,Wi=Object.getOwnPropertyDescriptors,Ui=Object.prototype,Gi=Array.prototype,ha=Object.getPrototypeOf,Cs=Object.isExtensible;function Wr(e){return typeof e=="function"}const le=()=>{};function Qi(e){for(var t=0;t<e.length;t++)e[t]()}function pa(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function _a(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const nt=2,ps=4,_s=8,mr=16,Gt=32,gr=64,ms=128,_t=256,En=512,Qe=1024,ut=2048,tr=4096,kt=8192,br=16384,gs=32768,yr=65536,Rs=1<<17,Hi=1<<18,Rr=1<<19,Ki=1<<20,ts=1<<21,An=1<<22,dr=1<<23,fr=Symbol("$state"),ma=Symbol("legacy props"),Yi=Symbol(""),Kr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function ga(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Zi(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ji(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Xi(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Fi(e){throw new Error("https://svelte.dev/e/effect_orphan")}function eo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function to(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ro(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function no(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function so(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ao(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const In=1,Mn=2,ba=4,io=8,oo=16,lo=1,co=2,uo=4,fo=8,vo=16,ho=1,po=2,De=Symbol(),_o="http://www.w3.org/1999/xhtml",mo="http://www.w3.org/2000/svg",go="@attach";function bo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function yo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let wo=!1;function ya(e){return e===this.v}function So(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function wa(e){return!So(e,this.v)}let Or=!1,xo=!1;function Eo(){Or=!0}let Te=null;function Nr(e){Te=e}function J(e,t=!1,r){Te={p:Te,c:null,e:null,s:e,x:null,l:Or&&!t?{s:null,u:null,$:[]}:null}}function X(e){var t=Te,r=t.e;if(r!==null){t.e=null;for(var n of r)qa(n)}return Te=t.p,{}}function on(){return!Or||Te!==null&&Te.l===null}let ur=[];function Sa(){var e=ur;ur=[],Qi(e)}function hr(e){if(ur.length===0&&!Yr){var t=ur;queueMicrotask(()=>{t===ur&&Sa()})}ur.push(e)}function Po(){for(;ur.length>0;)Sa()}const ko=new WeakMap;function xa(e){var t=ee;if(t===null)return ne.f|=dr,e;if((t.f&gs)===0){if((t.f&ms)===0)throw!t.parent&&e instanceof Error&&Ea(e),e;t.b.error(e)}else $r(e,t)}function $r(e,t){for(;t!==null;){if((t.f&ms)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&Ea(e),e}function Ea(e){const t=ko.get(e);t&&(es(e,"message",{value:t.message}),es(e,"stack",{value:t.stack}))}const pn=new Set;let we=null,mn=null,rs=new Set,Rt=[],Cn=null,ns=!1,Yr=!1;class ht{current=new Map;#r=new Map;#n=new Set;#a=0;#s=null;#c=[];#t=[];#i=[];#o=[];#l=[];#u=[];skipped_effects=new Set;process(t){Rt=[],mn=null;var r=ht.apply(this);for(const i of t)this.#v(i);if(this.#a===0){this.#h();var n=this.#t,s=this.#i;this.#t=[],this.#i=[],this.#o=[],mn=this,we=null,Os(n),Os(s),mn=null,this.#s?.resolve()}else this.#d(this.#t),this.#d(this.#i),this.#d(this.#o);r();for(const i of this.#c)en(i);this.#c=[]}#v(t){t.f^=Qe;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Gt|gr))!==0,i=s&&(n&Qe)!==0,o=i||(n&kt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=Qe:(n&ps)!==0?this.#i.push(r):(n&Qe)===0&&((n&An)!==0&&r.b?.is_pending()?this.#c.push(r):qn(r)&&((r.f&mr)!==0&&this.#o.push(r),en(r)));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#d(t){for(const r of t)((r.f&ut)!==0?this.#l:this.#u).push(r),Xe(r,Qe);t.length=0}capture(t,r){this.#r.has(t)||this.#r.set(t,r),this.current.set(t,t.v)}activate(){we=this}deactivate(){we=null}flush(){if(Rt.length>0){if(this.activate(),Pa(),we!==null&&we!==this)return}else this.#a===0&&this.#h();this.deactivate();for(const t of rs)if(rs.delete(t),t(),we!==null)break}#h(){for(const t of this.#n)t();if(this.#n.clear(),pn.size>1){this.#r.clear();let t=!0;for(const r of pn){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;ka(n)}if(Rt.length>0){we=r;const n=ht.apply(r);for(const s of Rt)r.#v(s);Rt=[],n()}}we=null}pn.delete(this)}increment(){this.#a+=1}decrement(){this.#a-=1;for(const t of this.#l)Xe(t,ut),pr(t);for(const t of this.#u)Xe(t,tr),pr(t);this.flush()}add_callback(t){this.#n.add(t)}settled(){return(this.#s??=pa()).promise}static ensure(){if(we===null){const t=we=new ht;pn.add(we),Yr||ht.enqueue(()=>{we===t&&t.flush()})}return we}static enqueue(t){hr(t)}static apply(t){return le}}function To(e){var t=Yr;Yr=!0;try{for(var r;;){if(Po(),Rt.length===0&&(we?.flush(),Rt.length===0))return Cn=null,r;Pa()}}finally{Yr=t}}function Pa(){var e=kr;ns=!0;try{var t=0;for(Ls(!0);Rt.length>0;){var r=ht.ensure();if(t++>1e3){var n,s;No()}r.process(Rt),Xt.clear()}}finally{ns=!1,Ls(e),Cn=null}}function No(){try{eo()}catch(e){$r(e,Cn)}}let cr=null;function Os(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(br|kt))===0&&qn(n)&&(cr=[],en(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Ba(n):n.fn=null),cr?.length>0)){Xt.clear();for(const s of cr)en(s);cr=[]}}cr=null}}function ka(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&nt)!==0?ka(t):(r&(An|mr))!==0&&(Xe(t,ut),pr(t))}}function pr(e){for(var t=Cn=e;t.parent!==null;){t=t.parent;var r=t.f;if(ns&&t===ee&&(r&mr)!==0)return;if((r&(gr|Gt))!==0){if((r&Qe)===0)return;t.f^=Qe}}Rt.push(t)}function bs(e){let t=0,r=_r(0),n;return()=>{Uo()&&(a(r),Ps(()=>(t===0&&(n=Dr(()=>e(()=>Zr(r)))),t+=1,()=>{hr(()=>{t-=1,t===0&&(n?.(),n=void 0,Zr(r))})})))}}var $o=yr|Rr|ms;function Ao(e,t,r){new Io(e,t,r)}class Io{parent;#r=!1;#n;#a=null;#s;#c;#t;#i=null;#o=null;#l=null;#u=null;#v=0;#d=0;#h=!1;#p=null;#e=()=>{this.#p&&Ar(this.#p,this.#v)};#w=bs(()=>(this.#p=_r(this.#v),()=>{this.#p=null}));constructor(t,r,n){this.#n=t,this.#s=r,this.#c=n,this.parent=ee.b,this.#r=!!this.#s.pending,this.#t=nr(()=>{ee.b=this;{try{this.#i=Ge(()=>n(this.#n))}catch(s){this.error(s)}this.#d>0?this.#m():this.#r=!1}},$o)}#S(){try{this.#i=Ge(()=>this.#c(this.#n))}catch(t){this.error(t)}this.#r=!1}#x(){const t=this.#s.pending;t&&(this.#o=Ge(()=>t(this.#n)),ht.enqueue(()=>{this.#i=this.#_(()=>(ht.ensure(),Ge(()=>this.#c(this.#n)))),this.#d>0?this.#m():(Ft(this.#o,()=>{this.#o=null}),this.#r=!1)}))}is_pending(){return this.#r||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#s.pending}#_(t){var r=ee,n=ne,s=Te;Dt(this.#t),rt(this.#t),Nr(this.#t.ctx);try{return t()}catch(i){return xa(i),null}finally{Dt(r),rt(n),Nr(s)}}#m(){const t=this.#s.pending;this.#i!==null&&(this.#u=document.createDocumentFragment(),Mo(this.#i,this.#u)),this.#o===null&&(this.#o=Ge(()=>t(this.#n)))}#b(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#b(t);return}this.#d+=t,this.#d===0&&(this.#r=!1,this.#o&&Ft(this.#o,()=>{this.#o=null}),this.#u&&(this.#n.before(this.#u),this.#u=null),hr(()=>{ht.ensure().flush()}))}update_pending_count(t){this.#b(t),this.#v+=t,rs.add(this.#e)}get_effect_pending(){return this.#w(),a(this.#p)}error(t){var r=this.#s.onerror;let n=this.#s.failed;if(this.#h||!r&&!n)throw t;this.#i&&(je(this.#i),this.#i=null),this.#o&&(je(this.#o),this.#o=null),this.#l&&(je(this.#l),this.#l=null);var s=!1,i=!1;const o=()=>{if(s){yo();return}s=!0,i&&ao(),ht.ensure(),this.#v=0,this.#l!==null&&Ft(this.#l,()=>{this.#l=null}),this.#r=this.has_pending_snippet(),this.#i=this.#_(()=>(this.#h=!1,Ge(()=>this.#c(this.#n)))),this.#d>0?this.#m():this.#r=!1};var l=ne;try{rt(null),i=!0,r?.(t,o),i=!1}catch(u){$r(u,this.#t&&this.#t.parent)}finally{rt(l)}n&&hr(()=>{this.#l=this.#_(()=>{this.#h=!0;try{return Ge(()=>{n(this.#n,()=>t,()=>o)})}catch(u){return $r(u,this.#t.parent),null}finally{this.#h=!1}})})}}function Mo(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:ln(r);t.append(r),r=s}}function Ta(e,t,r){const n=on()?Rn:ys;if(t.length===0){r(e.map(n));return}var s=we,i=ee,o=Co();Promise.all(t.map(l=>Ro(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(u){(i.f&br)===0&&$r(u,i)}s?.deactivate(),Na()}).catch(l=>{$r(l,i)})}function Co(){var e=ee,t=ne,r=Te,n=we;return function(){Dt(e),rt(t),Nr(r),n?.activate()}}function Na(){Dt(null),rt(null),Nr(null)}function Rn(e){var t=nt|ut,r=ne!==null&&(ne.f&nt)!==0?ne:null;return ee===null||r!==null&&(r.f&_t)!==0?t|=_t:ee.f|=Rr,{ctx:Te,deps:null,effects:null,equals:ya,f:t,fn:e,reactions:null,rv:0,v:De,wv:0,parent:r??ee,ac:null}}function Ro(e,t){let r=ee;r===null&&Zi();var n=r.b,s=void 0,i=_r(De),o=!ne,l=new Map;return Qo(()=>{var u=pa();s=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(m){u.reject(m)}var f=we,v=n.is_pending();o&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(Kr),l.set(f,u)));const _=(m,p=void 0)=>{v||f.activate(),p?p!==Kr&&(i.f|=dr,Ar(i,p)):((i.f&dr)!==0&&(i.f^=dr),Ar(i,m)),o&&(n.update_pending_count(-1),v||f.decrement()),Na()};u.promise.then(_,m=>_(null,m||"unknown"))}),Oa(()=>{for(const u of l.values())u.reject(Kr)}),new Promise(u=>{function f(v){function _(){v===s?u(i):f(s)}v.then(_,_)}f(s)})}function Q(e){const t=Rn(e);return Wa(t),t}function ys(e){const t=Rn(e);return t.equals=wa,t}function $a(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)je(t[r])}}function Oo(e){for(var t=e.parent;t!==null;){if((t.f&nt)===0)return t;t=t.parent}return null}function ws(e){var t,r=ee;Dt(Oo(e));try{$a(e),t=Ha(e)}finally{Dt(r)}return t}function Aa(e){var t=ws(e);if(e.equals(t)||(e.v=t,e.wv=Ga()),!wr){var r=(Zt||(e.f&_t)!==0)&&e.deps!==null?tr:Qe;Xe(e,r)}}const Xt=new Map;function _r(e,t){var r={f:0,v:e,reactions:null,equals:ya,rv:0,wv:0};return r}function ye(e,t){const r=_r(e);return Wa(r),r}function Do(e,t=!1,r=!0){const n=_r(e);return t||(n.equals=wa),Or&&r&&Te!==null&&Te.l!==null&&(Te.l.s??=[]).push(n),n}function T(e,t,r=!1){ne!==null&&(!Pt||(ne.f&Rs)!==0)&&on()&&(ne.f&(nt|mr|An|Rs))!==0&&!Ut?.includes(e)&&so();let n=r?ct(t):t;return Ar(e,n)}function Ar(e,t){if(!e.equals(t)){var r=e.v;wr?Xt.set(e,t):Xt.set(e,r),e.v=t;var n=ht.ensure();n.capture(e,r),(e.f&nt)!==0&&((e.f&ut)!==0&&ws(e),Xe(e,(e.f&_t)===0?Qe:tr)),e.wv=Ga(),Ia(e,ut),on()&&ee!==null&&(ee.f&Qe)!==0&&(ee.f&(Gt|gr))===0&&(vt===null?Yo([e]):vt.push(e))}return t}function Zr(e){T(e,e.v+1)}function Ia(e,t){var r=e.reactions;if(r!==null)for(var n=on(),s=r.length,i=0;i<s;i++){var o=r[i],l=o.f;if(!(!n&&o===ee)){var u=(l&ut)===0;u&&Xe(o,t),(l&nt)!==0?Ia(o,tr):u&&((l&mr)!==0&&cr!==null&&cr.push(o),pr(o))}}}function ct(e){if(typeof e!="object"||e===null||fr in e)return e;const t=ha(e);if(t!==Ui&&t!==Gi)return e;var r=new Map,n=$n(e),s=ye(0),i=vr,o=l=>{if(vr===i)return l();var u=ne,f=vr;rt(null),zs(i);var v=l();return rt(u),zs(f),v};return n&&r.set("length",ye(e.length)),new Proxy(e,{defineProperty(l,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&ro();var v=r.get(u);return v===void 0?v=o(()=>{var _=ye(f.value);return r.set(u,_),_}):T(v,f.value,!0),!0},deleteProperty(l,u){var f=r.get(u);if(f===void 0){if(u in l){const v=o(()=>ye(De));r.set(u,v),Zr(s)}}else T(f,De),Zr(s);return!0},get(l,u,f){if(u===fr)return e;var v=r.get(u),_=u in l;if(v===void 0&&(!_||Jt(l,u)?.writable)&&(v=o(()=>{var p=ct(_?l[u]:De),g=ye(p);return g}),r.set(u,v)),v!==void 0){var m=a(v);return m===De?void 0:m}return Reflect.get(l,u,f)},getOwnPropertyDescriptor(l,u){var f=Reflect.getOwnPropertyDescriptor(l,u);if(f&&"value"in f){var v=r.get(u);v&&(f.value=a(v))}else if(f===void 0){var _=r.get(u),m=_?.v;if(_!==void 0&&m!==De)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(l,u){if(u===fr)return!0;var f=r.get(u),v=f!==void 0&&f.v!==De||Reflect.has(l,u);if(f!==void 0||ee!==null&&(!v||Jt(l,u)?.writable)){f===void 0&&(f=o(()=>{var m=v?ct(l[u]):De,p=ye(m);return p}),r.set(u,f));var _=a(f);if(_===De)return!1}return v},set(l,u,f,v){var _=r.get(u),m=u in l;if(n&&u==="length")for(var p=f;p<_.v;p+=1){var g=r.get(p+"");g!==void 0?T(g,De):p in l&&(g=o(()=>ye(De)),r.set(p+"",g))}if(_===void 0)(!m||Jt(l,u)?.writable)&&(_=o(()=>ye(void 0)),T(_,ct(f)),r.set(u,_));else{m=_.v!==De;var S=o(()=>ct(f));T(_,S)}var w=Reflect.getOwnPropertyDescriptor(l,u);if(w?.set&&w.set.call(v,f),!m){if(n&&typeof u=="string"){var E=r.get("length"),R=Number(u);Number.isInteger(R)&&R>=E.v&&T(E,R+1)}Zr(s)}return!0},ownKeys(l){a(s);var u=Reflect.ownKeys(l).filter(_=>{var m=r.get(_);return m===void 0||m.v!==De});for(var[f,v]of r)v.v!==De&&!(f in l)&&u.push(f);return u},setPrototypeOf(){no()}})}function Ds(e){try{if(e!==null&&typeof e=="object"&&fr in e)return e[fr]}catch{}return e}function qo(e,t){return Object.is(Ds(e),Ds(t))}var qs,Ma,Ca,Ra;function jo(){if(qs===void 0){qs=window,Ma=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ca=Jt(t,"firstChild").get,Ra=Jt(t,"nextSibling").get,Cs(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Cs(r)&&(r.__t=void 0)}}function rr(e=""){return document.createTextNode(e)}function Ir(e){return Ca.call(e)}function ln(e){return Ra.call(e)}function c(e,t){return Ir(e)}function K(e,t=!1){{var r=Ir(e);return r instanceof Comment&&r.data===""?ln(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=ln(n);return n}function Lo(e){e.textContent=""}function Ss(){return!1}function Bo(e,t){if(t){const r=document.body;e.autofocus=!0,hr(()=>{document.activeElement===r&&e.focus()})}}let js=!1;function zo(){js||(js=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function On(e){var t=ne,r=ee;rt(null),Dt(null);try{return e()}finally{rt(t),Dt(r)}}function xs(e,t,r,n=r){e.addEventListener(t,()=>On(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),zo()}function Vo(e){ee===null&&ne===null&&Fi(),ne!==null&&(ne.f&_t)!==0&&ee===null&&Xi(),wr&&Ji()}function Wo(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Qt(e,t,r,n=!0){var s=ee;s!==null&&(s.f&kt)!==0&&(e|=kt);var i={ctx:Te,deps:null,nodes_start:null,nodes_end:null,f:e|ut,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{en(i),i.f|=gs}catch(u){throw je(i),u}else t!==null&&pr(i);if(n){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Rr)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&Wo(o,s),ne!==null&&(ne.f&nt)!==0&&(e&gr)===0)){var l=ne;(l.effects??=[]).push(o)}}return i}function Uo(){return ne!==null&&!Pt}function Oa(e){const t=Qt(_s,null,!1);return Xe(t,Qe),t.teardown=e,t}function Da(e){Vo();var t=ee.f,r=!ne&&(t&Gt)!==0&&(t&gs)===0;if(r){var n=Te;(n.e??=[]).push(e)}else return qa(e)}function qa(e){return Qt(ps|Ki,e,!1)}function Go(e){ht.ensure();const t=Qt(gr|Rr,e,!0);return(r={})=>new Promise(n=>{r.outro?Ft(t,()=>{je(t),n(void 0)}):(je(t),n(void 0))})}function Es(e){return Qt(ps,e,!1)}function Qo(e){return Qt(An|Rr,e,!0)}function Ps(e,t=0){return Qt(_s|t,e,!0)}function B(e,t=[],r=[]){Ta(t,r,n=>{Qt(_s,()=>e(...n.map(a)),!0)})}function nr(e,t=0){var r=Qt(mr|t,e,!0);return r}function Ge(e,t=!0){return Qt(Gt|Rr,e,!0,t)}function ja(e){var t=e.teardown;if(t!==null){const r=wr,n=ne;Bs(!0),rt(null);try{t.call(null)}finally{Bs(r),rt(n)}}}function La(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&On(()=>{s.abort(Kr)});var n=r.next;(r.f&gr)!==0?r.parent=null:je(r,t),r=n}}function Ho(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Gt)===0&&je(t),t=r}}function je(e,t=!0){var r=!1;(t||(e.f&Hi)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Ko(e.nodes_start,e.nodes_end),r=!0),La(e,t&&!r),Pn(e,0),Xe(e,br);var n=e.transitions;if(n!==null)for(const i of n)i.stop();ja(e);var s=e.parent;s!==null&&s.first!==null&&Ba(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Ko(e,t){for(;e!==null;){var r=e===t?null:ln(e);e.remove(),e=r}}function Ba(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Ft(e,t){var r=[];ks(e,r,!0),za(r,()=>{je(e),t&&t()})}function za(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function ks(e,t,r){if((e.f&kt)===0){if(e.f^=kt,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var s=n.next,i=(n.f&yr)!==0||(n.f&Gt)!==0;ks(n,t,i?r:!1),n=s}}}function Dn(e){Va(e,!0)}function Va(e,t){if((e.f&kt)!==0){e.f^=kt,(e.f&Qe)===0&&(Xe(e,ut),pr(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&yr)!==0||(r.f&Gt)!==0;Va(r,s?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let kr=!1;function Ls(e){kr=e}let wr=!1;function Bs(e){wr=e}let ne=null,Pt=!1;function rt(e){ne=e}let ee=null;function Dt(e){ee=e}let Ut=null;function Wa(e){ne!==null&&(Ut===null?Ut=[e]:Ut.push(e))}let Ze=null,ot=0,vt=null;function Yo(e){vt=e}let Ua=1,Fr=0,vr=Fr;function zs(e){vr=e}let Zt=!1;function Ga(){return++Ua}function qn(e){var t=e.f;if((t&ut)!==0)return!0;if((t&tr)!==0){var r=e.deps,n=(t&_t)!==0;if(r!==null){var s,i,o=(t&En)!==0,l=n&&ee!==null&&!Zt,u=r.length;if((o||l)&&(ee===null||(ee.f&br)===0)){var f=e,v=f.parent;for(s=0;s<u;s++)i=r[s],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=En),l&&v!==null&&(v.f&_t)===0&&(f.f^=_t)}for(s=0;s<u;s++)if(i=r[s],qn(i)&&Aa(i),i.wv>e.wv)return!0}(!n||ee!==null&&!Zt)&&Xe(e,Qe)}return!1}function Qa(e,t,r=!0){var n=e.reactions;if(n!==null&&!Ut?.includes(e))for(var s=0;s<n.length;s++){var i=n[s];(i.f&nt)!==0?Qa(i,t,!1):t===i&&(r?Xe(i,ut):(i.f&Qe)!==0&&Xe(i,tr),pr(i))}}function Ha(e){var t=Ze,r=ot,n=vt,s=ne,i=Zt,o=Ut,l=Te,u=Pt,f=vr,v=e.f;Ze=null,ot=0,vt=null,Zt=(v&_t)!==0&&(Pt||!kr||ne===null),ne=(v&(Gt|gr))===0?e:null,Ut=null,Nr(e.ctx),Pt=!1,vr=++Fr,e.ac!==null&&(On(()=>{e.ac.abort(Kr)}),e.ac=null);try{e.f|=ts;var _=e.fn,m=_(),p=e.deps;if(Ze!==null){var g;if(Pn(e,ot),p!==null&&ot>0)for(p.length=ot+Ze.length,g=0;g<Ze.length;g++)p[ot+g]=Ze[g];else e.deps=p=Ze;if(!Zt||(v&nt)!==0&&e.reactions!==null)for(g=ot;g<p.length;g++)(p[g].reactions??=[]).push(e)}else p!==null&&ot<p.length&&(Pn(e,ot),p.length=ot);if(on()&&vt!==null&&!Pt&&p!==null&&(e.f&(nt|tr|ut))===0)for(g=0;g<vt.length;g++)Qa(vt[g],e);return s!==null&&s!==e&&(Fr++,vt!==null&&(n===null?n=vt:n.push(...vt))),(e.f&dr)!==0&&(e.f^=dr),m}catch(S){return xa(S)}finally{e.f^=ts,Ze=t,ot=r,vt=n,ne=s,Zt=i,Ut=o,Nr(l),Pt=u,vr=f}}function Zo(e,t){let r=t.reactions;if(r!==null){var n=Vi.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&nt)!==0&&(Ze===null||!Ze.includes(t))&&(Xe(t,tr),(t.f&(_t|En))===0&&(t.f^=En),$a(t),Pn(t,0))}function Pn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Zo(e,r[n])}function en(e){var t=e.f;if((t&br)===0){Xe(e,Qe);var r=ee,n=kr;ee=e,kr=!0;try{(t&mr)!==0?Ho(e):La(e),ja(e);var s=Ha(e);e.teardown=typeof s=="function"?s:null,e.wv=Ua;var i;va&&xo&&(e.f&ut)!==0&&e.deps}finally{kr=n,ee=r}}}async function Jo(){await Promise.resolve(),To()}function a(e){var t=e.f,r=(t&nt)!==0;if(ne!==null&&!Pt){var n=ee!==null&&(ee.f&br)!==0;if(!n&&!Ut?.includes(e)){var s=ne.deps;if((ne.f&ts)!==0)e.rv<Fr&&(e.rv=Fr,Ze===null&&s!==null&&s[ot]===e?ot++:Ze===null?Ze=[e]:(!Zt||!Ze.includes(e))&&Ze.push(e));else{(ne.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[ne]:i.includes(ne)||i.push(ne)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&_t)===0&&(o.f^=_t)}if(wr){if(Xt.has(e))return Xt.get(e);if(r){o=e;var u=o.v;return((o.f&Qe)===0&&o.reactions!==null||Ka(o))&&(u=ws(o)),Xt.set(o,u),u}}else r&&(o=e,qn(o)&&Aa(o));if((e.f&dr)!==0)throw e.v;return e.v}function Ka(e){if(e.v===De)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Xt.has(t)||(t.f&nt)!==0&&Ka(t))return!0;return!1}function Dr(e){var t=Pt;try{return Pt=!0,e()}finally{Pt=t}}const Xo=-7169;function Xe(e,t){e.f=e.f&Xo|t}function Fo(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const el=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function tl(e){return el.includes(e)}const rl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function nl(e){return e=e.toLowerCase(),rl[e]??e}const sl=["touchstart","touchmove"];function al(e){return sl.includes(e)}const Ya=new Set,ss=new Set;function Za(e,t,r,n={}){function s(i){if(n.capture||Qr.call(t,i),!i.cancelBubble)return On(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?hr(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function as(e,t,r,n={}){var s=Za(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function sr(e){for(var t=0;t<e.length;t++)Ya.add(e[t]);for(var r of ss)r(e)}let Vs=null;function Qr(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],i=s[0]||e.target;Vs=e;var o=0,l=Vs===e&&e.__root;if(l){var u=s.indexOf(l);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var f=s.indexOf(t);if(f===-1)return;u<=f&&(o=u)}if(i=s[o]||e.target,i!==t){es(e,"currentTarget",{configurable:!0,get(){return i||r}});var v=ne,_=ee;rt(null),Dt(null);try{for(var m,p=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var S=i["__"+n];if(S!=null&&(!i.disabled||e.target===i))if($n(S)){var[w,...E]=S;w.apply(i,[e,...E])}else S.call(i,e)}catch(R){m?p.push(R):m=R}if(e.cancelBubble||g===t||g===null)break;i=g}if(m){for(let R of p)queueMicrotask(()=>{throw R});throw m}}finally{e.__root=t,delete e.currentTarget,rt(v),Dt(_)}}}function Ja(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Mr(e,t){var r=ee;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function x(e,t){var r=(t&ho)!==0,n=(t&po)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=Ja(i?e:"<!>"+e),r||(s=Ir(s)));var o=n||Ma?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=Ir(o),u=o.lastChild;Mr(l,u)}else Mr(o,o);return o}}function il(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=Ja(s),l=Ir(o);i=Ir(l)}var u=i.cloneNode(!0);return Mr(u,u),u}}function ol(e,t){return il(e,t,"svg")}function lt(e=""){{var t=rr(e+"");return Mr(t,t),t}}function Z(){var e=document.createDocumentFragment(),t=document.createComment(""),r=rr();return e.append(t,r),Mr(t,r),e}function h(e,t){e!==null&&e.before(t)}function I(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function ll(e,t){return cl(e,t)}const xr=new Map;function cl(e,{target:t,anchor:r,props:n={},events:s,context:i,intro:o=!0}){jo();var l=new Set,u=_=>{for(var m=0;m<_.length;m++){var p=_[m];if(!l.has(p)){l.add(p);var g=al(p);t.addEventListener(p,Qr,{passive:g});var S=xr.get(p);S===void 0?(document.addEventListener(p,Qr,{passive:g}),xr.set(p,1)):xr.set(p,S+1)}}};u(hs(Ya)),ss.add(u);var f=void 0,v=Go(()=>{var _=r??t.appendChild(rr());return Ao(_,{pending:()=>{}},m=>{if(i){J({});var p=Te;p.c=i}s&&(n.$$events=s),f=e(m,n)||{},i&&X()}),()=>{for(var m of l){t.removeEventListener(m,Qr);var p=xr.get(m);--p===0?(document.removeEventListener(m,Qr),xr.delete(m)):xr.set(m,p)}ss.delete(u),_!==r&&_.parentNode?.removeChild(_)}});return ul.set(f,v),f}let ul=new WeakMap;function O(e,t,r=!1){var n=e,s=null,i=null,o=De,l=r?yr:0,u=!1;const f=(p,g=!0)=>{u=!0,m(g,p)};var v=null;function _(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var p=o?s:i,g=o?i:s;p&&Dn(p),g&&Ft(g,()=>{o?i=null:s=null})}const m=(p,g)=>{if(o!==(o=p)){var S=Ss(),w=n;if(S&&(v=document.createDocumentFragment(),v.append(w=rr())),o?s??=g&&Ge(()=>g(w)):i??=g&&Ge(()=>g(w)),S){var E=we,R=o?s:i,M=o?i:s;R&&E.skipped_effects.delete(R),M&&E.skipped_effects.add(M),E.add_callback(_)}else _()}};nr(()=>{u=!1,t(f),u||m(null,null)},l)}function dl(e,t){return t}function fl(e,t,r){for(var n=e.items,s=[],i=t.length,o=0;o<i;o++)ks(t[o].e,s,!0);var l=i>0&&s.length===0&&r!==null;if(l){var u=r.parentNode;Lo(u),u.append(r),n.clear(),Ct(e,t[0].prev,t[i-1].next)}za(s,()=>{for(var f=0;f<i;f++){var v=t[f];l||(n.delete(v.k),Ct(e,v.prev,v.next)),je(v.e,!l)}})}function Je(e,t,r,n,s,i=null){var o=e,l={flags:t,items:new Map,first:null},u=(t&ba)!==0;if(u){var f=e;o=f.appendChild(rr())}var v=null,_=!1,m=new Map,p=ys(()=>{var E=r();return $n(E)?E:E==null?[]:hs(E)}),g,S;function w(){vl(S,g,l,m,o,s,t,n,r),i!==null&&(g.length===0?v?Dn(v):v=Ge(()=>i(o)):v!==null&&Ft(v,()=>{v=null}))}nr(()=>{S??=ee,g=a(p);var E=g.length;if(!(_&&E===0)){_=E===0;var R,M,$,N;if(Ss()){var A=new Set,j=we;for(M=0;M<E;M+=1){$=g[M],N=n($,M);var V=l.items.get(N)??m.get(N);V?(t&(In|Mn))!==0&&Xa(V,$,M,t):(R=Fa(null,l,null,null,$,N,M,s,t,r,!0),m.set(N,R)),A.add(N)}for(const[z,te]of l.items)A.has(z)||j.skipped_effects.add(te.e);j.add_callback(w)}else w();a(p)}})}function vl(e,t,r,n,s,i,o,l,u){var f=(o&io)!==0,v=(o&(In|Mn))!==0,_=t.length,m=r.items,p=r.first,g=p,S,w=null,E,R=[],M=[],$,N,A,j;if(f)for(j=0;j<_;j+=1)$=t[j],N=l($,j),A=m.get(N),A!==void 0&&(A.a?.measure(),(E??=new Set).add(A));for(j=0;j<_;j+=1){if($=t[j],N=l($,j),A=m.get(N),A===void 0){var V=n.get(N);if(V!==void 0){n.delete(N),m.set(N,V);var z=w?w.next:g;Ct(r,w,V),Ct(r,V,z),Hn(V,z,s),w=V}else{var te=g?g.e.nodes_start:s;w=Fa(te,r,w,w===null?r.first:w.next,$,N,j,i,o,u)}m.set(N,w),R=[],M=[],g=w.next;continue}if(v&&Xa(A,$,j,o),(A.e.f&kt)!==0&&(Dn(A.e),f&&(A.a?.unfix(),(E??=new Set).delete(A))),A!==g){if(S!==void 0&&S.has(A)){if(R.length<M.length){var me=M[0],C;w=me.prev;var D=R[0],ae=R[R.length-1];for(C=0;C<R.length;C+=1)Hn(R[C],me,s);for(C=0;C<M.length;C+=1)S.delete(M[C]);Ct(r,D.prev,ae.next),Ct(r,w,D),Ct(r,ae,me),g=me,w=ae,j-=1,R=[],M=[]}else S.delete(A),Hn(A,g,s),Ct(r,A.prev,A.next),Ct(r,A,w===null?r.first:w.next),Ct(r,w,A),w=A;continue}for(R=[],M=[];g!==null&&g.k!==N;)(g.e.f&kt)===0&&(S??=new Set).add(g),M.push(g),g=g.next;if(g===null)continue;A=g}R.push(A),w=A,g=A.next}if(g!==null||S!==void 0){for(var ie=S===void 0?[]:hs(S);g!==null;)(g.e.f&kt)===0&&ie.push(g),g=g.next;var ge=ie.length;if(ge>0){var Ce=(o&ba)!==0&&_===0?s:null;if(f){for(j=0;j<ge;j+=1)ie[j].a?.measure();for(j=0;j<ge;j+=1)ie[j].a?.fix()}fl(r,ie,Ce)}}f&&hr(()=>{if(E!==void 0)for(A of E)A.a?.apply()}),e.first=r.first&&r.first.e,e.last=w&&w.e;for(var P of n.values())je(P.e);n.clear()}function Xa(e,t,r,n){(n&In)!==0&&Ar(e.v,t),(n&Mn)!==0?Ar(e.i,r):e.i=r}function Fa(e,t,r,n,s,i,o,l,u,f,v){var _=(u&In)!==0,m=(u&oo)===0,p=_?m?Do(s,!1,!1):_r(s):s,g=(u&Mn)===0?o:_r(o),S={i:g,v:p,k:i,a:null,e:null,prev:r,next:n};try{if(e===null){var w=document.createDocumentFragment();w.append(e=rr())}return S.e=Ge(()=>l(e,p,g,f),wo),S.e.prev=r&&r.e,S.e.next=n&&n.e,r===null?v||(t.first=S):(r.next=S,r.e.next=S.e),n!==null&&(n.prev=S,n.e.prev=S.e),S}finally{}}function Hn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==null&&i!==n;){var o=ln(i);s.before(i),i=o}}function Ct(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function fe(e,t,...r){var n=e,s=le,i;nr(()=>{s!==(s=t())&&(i&&(je(i),i=null),i=Ge(()=>s(n,...r)))},yr)}function gn(e,t,r){var n=e,s,i,o=null,l=null;function u(){i&&(Ft(i),i=null),o&&(o.lastChild.remove(),n.before(o),o=null),i=l,l=null}nr(()=>{if(s!==(s=t())){var f=Ss();if(s){var v=n;f&&(o=document.createDocumentFragment(),o.append(v=rr()),i&&we.skipped_effects.add(i)),l=Ge(()=>r(v,s))}f?we.add_callback(u):u()}},yr)}function hl(e,t,r,n,s,i){var o,l,u=null,f=e,v;nr(()=>{const _=t()||null;var m=mo;_!==o&&(v&&(_===null?Ft(v,()=>{v=null,l=null}):_===l?Dn(v):je(v)),_&&_!==l&&(v=Ge(()=>{if(u=document.createElementNS(m,_),Mr(u,u),n){var p=u.appendChild(rr());n(u,p)}ee.nodes_end=u,f.before(u)})),o=_,o&&(l=o))},yr)}function pl(e,t){var r=void 0,n;nr(()=>{r!==(r=t())&&(n&&(je(n),n=null),r&&(n=Ge(()=>{Es(()=>r(e))})))})}function ei(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=ei(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function _l(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=ei(e))&&(n&&(n+=" "),n+=t);return n}function ml(e){return typeof e=="object"?_l(e):e??""}const Ws=[...` 	
\r\f \v\uFEFF`];function gl(e,t,r){var n=e==null?"":""+e;if(r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var l=o+i;(o===0||Ws.includes(n[o-1]))&&(l===n.length||Ws.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Us(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var i=e[s];i!=null&&i!==""&&(n+=" "+s+": "+i+r)}return n}function Kn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function bl(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,u=[];n&&u.push(...Object.keys(n).map(Kn)),s&&u.push(...Object.keys(s).map(Kn));var f=0,v=-1;const S=e.length;for(var _=0;_<S;_++){var m=e[_];if(l?m==="/"&&e[_-1]==="*"&&(l=!1):i?i===m&&(i=!1):m==="/"&&e[_+1]==="*"?l=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!l&&i===!1&&o===0){if(m===":"&&v===-1)v=_;else if(m===";"||_===S-1){if(v!==-1){var p=Kn(e.substring(f,v).trim());if(!u.includes(p)){m!==";"&&_++;var g=e.substring(f,_).trim();r+=" "+g+";"}}f=_+1,v=-1}}}}return n&&(r+=Us(n)),s&&(r+=Us(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ae(e,t,r,n,s,i){var o=e.__className;if(o!==r||o===void 0){var l=gl(r,n,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(i&&s!==i)for(var u in i){var f=!!i[u];(s==null||f!==!!s[u])&&e.classList.toggle(u,f)}return i}function Yn(e,t={},r,n){for(var s in r){var i=r[s];t[s]!==i&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,n))}}function yl(e,t,r,n){var s=e.__style;if(s!==t){var i=bl(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(Yn(e,r?.[0],n[0]),Yn(e,r?.[1],n[1],"important")):Yn(e,r,n));return n}function kn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!$n(t))return bo();for(var n of e.options)n.selected=t.includes(Jr(n));return}for(n of e.options){var s=Jr(n);if(qo(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ti(e){var t=new MutationObserver(()=>{kn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Oa(()=>{t.disconnect()})}function is(e,t,r=t){var n=!0;xs(e,"change",s=>{var i=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),Jr);else{var l=e.querySelector(i)??e.querySelector("option:not([disabled])");o=l&&Jr(l)}r(o)}),Es(()=>{var s=t();if(kn(e,s,n),n&&s===void 0){var i=e.querySelector(":checked");i!==null&&(s=Jr(i),r(s))}e.__value=s,n=!1}),ti(e)}function Jr(e){return"__value"in e?e.__value:e.value}const Ur=Symbol("class"),Gr=Symbol("style"),ri=Symbol("is custom element"),ni=Symbol("is html");function wl(e,t){var r=jn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Tr(e,t){var r=jn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Sl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function os(e,t,r,n){var s=jn(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[Yi]=r),r==null?e.removeAttribute(t):typeof r!="string"&&si(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function xl(e,t,r,n,s=!1,i=!1){var o=jn(e),l=o[ri],u=!o[ni],f=t||{},v=e.tagName==="OPTION";for(var _ in t)_ in r||(r[_]=null);r.class?r.class=ml(r.class):r[Ur]&&(r.class=null),r[Gr]&&(r.style??=null);var m=si(e);for(const $ in r){let N=r[$];if(v&&$==="value"&&N==null){e.value=e.__value="",f[$]=N;continue}if($==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ae(e,p,N,n,t?.[Ur],r[Ur]),f[$]=N,f[Ur]=r[Ur];continue}if($==="style"){yl(e,N,t?.[Gr],r[Gr]),f[$]=N,f[Gr]=r[Gr];continue}var g=f[$];if(!(N===g&&!(N===void 0&&e.hasAttribute($)))){f[$]=N;var S=$[0]+$[1];if(S!=="$$")if(S==="on"){const A={},j="$$"+$;let V=$.slice(2);var w=tl(V);if(Fo(V)&&(V=V.slice(0,-7),A.capture=!0),!w&&g){if(N!=null)continue;e.removeEventListener(V,f[j],A),f[j]=null}if(N!=null)if(w)e[`__${V}`]=N,sr([V]);else{let z=function(te){f[$].call(this,te)};var M=z;f[j]=Za(V,e,z,A)}else w&&(e[`__${V}`]=void 0)}else if($==="style")os(e,$,N);else if($==="autofocus")Bo(e,!!N);else if(!l&&($==="__value"||$==="value"&&N!=null))e.value=e.__value=N;else if($==="selected"&&v)Sl(e,N);else{var E=$;u||(E=nl(E));var R=E==="defaultValue"||E==="defaultChecked";if(N==null&&!l&&!R)if(o[$]=null,E==="value"||E==="checked"){let A=e;const j=t===void 0;if(E==="value"){let V=A.defaultValue;A.removeAttribute(E),A.defaultValue=V,A.value=A.__value=j?V:null}else{let V=A.defaultChecked;A.removeAttribute(E),A.defaultChecked=V,A.checked=j?V:!1}}else e.removeAttribute($);else R||m.includes(E)&&(l||typeof N!="string")?(e[E]=N,E in o&&(o[E]=De)):typeof N!="function"&&os(e,E,N)}}}return f}function Gs(e,t,r=[],n=[],s,i=!1,o=!1){Ta(r,n,l=>{var u=void 0,f={},v=e.nodeName==="SELECT",_=!1;if(nr(()=>{var p=t(...l.map(a)),g=xl(e,u,p,s,i,o);_&&v&&"value"in p&&kn(e,p.value);for(let w of Object.getOwnPropertySymbols(f))p[w]||je(f[w]);for(let w of Object.getOwnPropertySymbols(p)){var S=p[w];w.description===go&&(!u||S!==u[w])&&(f[w]&&je(f[w]),f[w]=Ge(()=>pl(e,()=>S))),g[w]=S}u=g}),v){var m=e;Es(()=>{kn(m,u.value,!0),ti(m)})}_=!0})}function jn(e){return e.__attributes??={[ri]:e.nodeName.includes("-"),[ni]:e.namespaceURI===_o}}var Qs=new Map;function si(e){var t=e.getAttribute("is")||e.nodeName,r=Qs.get(t);if(r)return r;Qs.set(t,r=[]);for(var n,s=e,i=Element.prototype;i!==s;){n=Wi(s);for(var o in n)n[o].set&&r.push(o);s=ha(s)}return r}function Ue(e,t,r=t){var n=new WeakSet;xs(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=Zn(e)?Jn(i):i,r(i),we!==null&&n.add(we),await Jo(),i!==(i=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=i??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),Dr(t)==null&&e.value&&(r(Zn(e)?Jn(e.value):e.value),we!==null&&n.add(we)),Ps(()=>{var s=t();if(e===document.activeElement){var i=mn??we;if(n.has(i))return}Zn(e)&&s===Jn(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function El(e,t,r=t){xs(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),Dr(t)==null&&r(e.checked),Ps(()=>{var n=t();e.checked=!!n})}function Zn(e){var t=e.type;return t==="number"||t==="range"}function Jn(e){return e===""?null:+e}let _n=!1;function Pl(e){var t=_n;try{return _n=!1,[e(),_n]}finally{_n=t}}const kl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ve(e,t,r){return new Proxy({props:e,exclude:t},kl)}const Tl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Wr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];Wr(s)&&(s=s());const i=Jt(s,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Wr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=Jt(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===fr||t===ma)return!1;for(let r of e.props)if(Wr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Wr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function pe(...e){return new Proxy({props:e},Tl)}function Er(e,t,r,n){var s=!Or||(r&co)!==0,i=(r&fo)!==0,o=(r&vo)!==0,l=n,u=!0,f=()=>(u&&(u=!1,l=o?Dr(n):n),l),v;if(i){var _=fr in e||ma in e;v=Jt(e,t)?.set??(_&&t in e?M=>e[t]=M:void 0)}var m,p=!1;i?[m,p]=Pl(()=>e[t]):m=e[t],m===void 0&&n!==void 0&&(m=f(),v&&(s&&to(),v(m)));var g;if(s?g=()=>{var M=e[t];return M===void 0?f():(u=!0,M)}:g=()=>{var M=e[t];return M!==void 0&&(l=void 0),M===void 0?l:M},s&&(r&uo)===0)return g;if(v){var S=e.$$legacy;return(function(M,$){return arguments.length>0?((!s||!$||S||p)&&v($?g():M),M):g()})}var w=!1,E=((r&lo)!==0?Rn:ys)(()=>(w=!1,g()));i&&a(E);var R=ee;return(function(M,$){if(arguments.length>0){const N=$?a(E):s&&i?ct(M):M;return T(E,N),w=!0,l!==void 0&&(l=N),M}return wr&&w||(R.f&br)!==0?E.v:a(E)})}function ai(e){Te===null&&ga(),Or&&Te.l!==null?$l(Te).m.push(e):Da(()=>{const t=Dr(e);if(typeof t=="function")return t})}function Nl(e){Te===null&&ga(),ai(()=>()=>Dr(e))}function $l(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Al="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Al);const ii=typeof window<"u"?window:void 0;function Il(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Ml{#r;#n;constructor(t={}){const{window:r=ii,document:n=r?.document}=t;r!==void 0&&(this.#r=n,this.#n=bs(s=>{const i=as(r,"focusin",s),o=as(r,"focusout",s);return()=>{i(),o()}}))}get current(){return this.#n?.(),this.#r?Il(this.#r):null}}new Ml;function Cl(e,t){return e}function Rl(e,t){let r=ye(null);const n=Q(()=>Cl(t));function s(...i){if(a(r))a(r).timeout&&clearTimeout(a(r).timeout);else{let o,l;const u=new Promise((f,v)=>{o=f,l=v});T(r,{timeout:null,runner:null,promise:u,resolve:o,reject:l},!0)}return a(r).runner=async()=>{if(!a(r))return;const o=a(r);T(r,null);try{o.resolve(await e.apply(this,i))}catch(l){o.reject(l)}},a(r).timeout=setTimeout(a(r).runner,a(n)),a(r).promise}return s.cancel=async()=>{(!a(r)||a(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||a(r).timeout===null)||(clearTimeout(a(r).timeout),a(r).reject("Cancelled"),T(r,null))},s.runScheduledNow=async()=>{(!a(r)||!a(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||!a(r).timeout)||(clearTimeout(a(r).timeout),a(r).timeout=null,await a(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!a(r)?.timeout}}),s}function Ol(e,t){switch(e){case"local":return t.localStorage;case"session":return t.sessionStorage}}function oi(e,t,r,n,s,i){if(e===null||typeof e!="object")return e;const o=Object.getPrototypeOf(e);if(o!==null&&o!==Object.prototype&&!Array.isArray(e))return e;let l=r.get(e);return l||(l=new Proxy(e,{get:(u,f)=>(n?.(),oi(Reflect.get(u,f),t,r,n,s,i)),set:(u,f,v)=>(s?.(),Reflect.set(u,f,v),i(t),!0)}),r.set(e,l)),l}class Xn{#r;#n;#a;#s;#c;#t;#i=new WeakMap;constructor(t,r,n={}){const{storage:s="local",serializer:i={serialize:JSON.stringify,deserialize:JSON.parse},syncTabs:o=!0}=n,l="window"in n?n.window:ii;if(this.#r=r,this.#n=t,this.#a=i,l===void 0)return;const u=Ol(s,l);this.#s=u;const f=u.getItem(t);f!==null?this.#r=this.#l(f):this.#u(r),o&&s==="local"&&(this.#c=bs(v=>{this.#t=v;const _=as(l,"storage",this.#o);return()=>{_(),this.#t=void 0}}))}get current(){this.#c?.();const t=this.#s?.getItem(this.#n),r=t?this.#l(t):this.#r;return oi(r,r,this.#i,this.#c?.bind(this),this.#t?.bind(this),this.#u.bind(this))}set current(t){this.#u(t),this.#t?.()}#o=t=>{t.key!==this.#n||t.newValue===null||(this.#r=this.#l(t.newValue),this.#t?.())};#l(t){try{return this.#a.deserialize(t)}catch(r){console.error(`Error when parsing "${t}" from persisted store "${this.#n}"`,r);return}}#u(t){try{t!=null&&this.#s?.setItem(this.#n,this.#a.serialize(t))}catch(r){console.error(`Error when writing value from persisted store "${this.#n}" to ${this.#s}`,r)}}}class Dl{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class li{constructor(t){this.generateIdentifier=t,this.kv=new Dl}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class ql extends li{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function jl(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function Ll(e,t){const r=jl(e);if("find"in r)return r.find(t);const n=r;for(let s=0;s<n.length;s++){const i=n[s];if(t(i))return i}}function Cr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function bn(e,t){return e.indexOf(t)!==-1}function Hs(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class Bl{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return Ll(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const zl=e=>Object.prototype.toString.call(e).slice(8,-1),ci=e=>typeof e>"u",Vl=e=>e===null,tn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,ls=e=>tn(e)&&Object.keys(e).length===0,er=e=>Array.isArray(e),Wl=e=>typeof e=="string",Ul=e=>typeof e=="number"&&!isNaN(e),Gl=e=>typeof e=="boolean",Ql=e=>e instanceof RegExp,rn=e=>e instanceof Map,nn=e=>e instanceof Set,ui=e=>zl(e)==="Symbol",Hl=e=>e instanceof Date&&!isNaN(e.valueOf()),Kl=e=>e instanceof Error,Ks=e=>typeof e=="number"&&isNaN(e),Yl=e=>Gl(e)||Vl(e)||ci(e)||Ul(e)||Wl(e)||ui(e),Zl=e=>typeof e=="bigint",Jl=e=>e===1/0||e===-1/0,Xl=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),Fl=e=>e instanceof URL,di=e=>e.replace(/\./g,"\\."),Fn=e=>e.map(String).map(di).join("."),Xr=e=>{const t=[];let r="";for(let s=0;s<e.length;s++){let i=e.charAt(s);if(i==="\\"&&e.charAt(s+1)==="."){r+=".",s++;continue}if(i==="."){t.push(r),r="";continue}r+=i}const n=r;return t.push(n),t};function Mt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const fi=[Mt(ci,"undefined",()=>null,()=>{}),Mt(Zl,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Mt(Hl,"Date",e=>e.toISOString(),e=>new Date(e)),Mt(Kl,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Mt(Ql,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Mt(nn,"set",e=>[...e.values()],e=>new Set(e)),Mt(rn,"map",e=>[...e.entries()],e=>new Map(e)),Mt(e=>Ks(e)||Jl(e),"number",e=>Ks(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Mt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Mt(Fl,"URL",e=>e.toString(),e=>new URL(e))];function Ln(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const vi=Ln((e,t)=>ui(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),ec=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),hi=Ln(Xl,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=ec[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function pi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const _i=Ln(pi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(s=>{n[s]=e[s]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),mi=Ln((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),tc=[_i,vi,mi,hi],Ys=(e,t)=>{const r=Hs(tc,s=>s.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Hs(fi,s=>s.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},gi={};fi.forEach(e=>{gi[e.annotation]=e});const rc=(e,t,r)=>{if(er(t))switch(t[0]){case"symbol":return vi.untransform(e,t,r);case"class":return _i.untransform(e,t,r);case"custom":return mi.untransform(e,t,r);case"typed-array":return hi.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=gi[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Pr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function bi(e){if(bn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(bn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(bn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const nc=(e,t)=>{bi(t);for(let r=0;r<t.length;r++){const n=t[r];if(nn(e))e=Pr(e,+n);else if(rn(e)){const s=+n,i=+t[++r]==0?"key":"value",o=Pr(e,s);switch(i){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},cs=(e,t,r)=>{if(bi(t),t.length===0)return r(e);let n=e;for(let i=0;i<t.length-1;i++){const o=t[i];if(er(n)){const l=+o;n=n[l]}else if(tn(n))n=n[o];else if(nn(n)){const l=+o;n=Pr(n,l)}else if(rn(n)){if(i===t.length-2)break;const u=+o,f=+t[++i]==0?"key":"value",v=Pr(n,u);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const s=t[t.length-1];if(er(n)?n[+s]=r(n[+s]):tn(n)&&(n[s]=r(n[s])),nn(n)){const i=Pr(n,+s),o=r(i);i!==o&&(n.delete(i),n.add(o))}if(rn(n)){const i=+t[t.length-2],o=Pr(n,i);switch(+s==0?"key":"value"){case"key":{const u=r(o);n.set(u,n.get(o)),u!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function us(e,t,r=[]){if(!e)return;if(!er(e)){Cr(e,(i,o)=>us(i,t,[...r,...Xr(o)]));return}const[n,s]=e;s&&Cr(s,(i,o)=>{us(i,t,[...r,...Xr(o)])}),t(n,r)}function sc(e,t,r){return us(t,(n,s)=>{e=cs(e,s,i=>rc(i,n,r))}),e}function ac(e,t){function r(n,s){const i=nc(e,Xr(s));n.map(Xr).forEach(o=>{e=cs(e,o,()=>i)})}if(er(t)){const[n,s]=t;n.forEach(i=>{e=cs(e,Xr(i),()=>e)}),s&&Cr(s,r)}else Cr(t,r);return e}const ic=(e,t)=>tn(e)||er(e)||rn(e)||nn(e)||pi(e,t);function oc(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function lc(e,t){const r={};let n;return e.forEach(s=>{if(s.length<=1)return;t||(s=s.map(l=>l.map(String)).sort((l,u)=>l.length-u.length));const[i,...o]=s;i.length===0?n=o.map(Fn):r[Fn(i)]=o.map(Fn)}),n?ls(r)?[n]:[n,r]:ls(r)?void 0:r}const yi=(e,t,r,n,s=[],i=[],o=new Map)=>{const l=Yl(e);if(!l){oc(e,s,t);const p=o.get(e);if(p)return n?{transformedValue:null}:p}if(!ic(e,r)){const p=Ys(e,r),g=p?{transformedValue:p.value,annotations:[p.type]}:{transformedValue:e};return l||o.set(e,g),g}if(bn(i,e))return{transformedValue:null};const u=Ys(e,r),f=u?.value??e,v=er(f)?[]:{},_={};Cr(f,(p,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const S=yi(p,t,r,n,[...s,g],[...i,e],o);v[g]=S.transformedValue,er(S.annotations)?_[g]=S.annotations:tn(S.annotations)&&Cr(S.annotations,(w,E)=>{_[di(g)+"."+E]=w})});const m=ls(_)?{transformedValue:v,annotations:u?[u.type]:void 0}:{transformedValue:v,annotations:u?[u.type,_]:_};return l||o.set(e,m),m};function wi(e){return Object.prototype.toString.call(e).slice(8,-1)}function Zs(e){return wi(e)==="Array"}function cc(e){if(wi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function uc(e,t,r,n,s){const i={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";i==="enumerable"&&(e[t]=r),s&&i==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function ds(e,t={}){if(Zs(e))return e.map(s=>ds(s,t));if(!cc(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((s,i)=>{if(Zs(t.props)&&!t.props.includes(i))return s;const o=e[i],l=ds(o,t);return uc(s,i,l,e,t.nonenumerable),s},{})}class se{constructor({dedupe:t=!1}={}){this.classRegistry=new ql,this.symbolRegistry=new li(r=>r.description??""),this.customTransformerRegistry=new Bl,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=yi(t,r,this,this.dedupe),s={json:n.transformedValue};n.annotations&&(s.meta={...s.meta,values:n.annotations});const i=lc(r,this.dedupe);return i&&(s.meta={...s.meta,referentialEqualities:i}),s}deserialize(t){const{json:r,meta:n}=t;let s=ds(r);return n?.values&&(s=sc(s,n.values,this)),n?.referentialEqualities&&(s=ac(s,n.referentialEqualities)),s}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}se.defaultInstance=new se;se.serialize=se.defaultInstance.serialize.bind(se.defaultInstance);se.deserialize=se.defaultInstance.deserialize.bind(se.defaultInstance);se.stringify=se.defaultInstance.stringify.bind(se.defaultInstance);se.parse=se.defaultInstance.parse.bind(se.defaultInstance);se.registerClass=se.defaultInstance.registerClass.bind(se.defaultInstance);se.registerSymbol=se.defaultInstance.registerSymbol.bind(se.defaultInstance);se.registerCustom=se.defaultInstance.registerCustom.bind(se.defaultInstance);se.allowErrorProps=se.defaultInstance.allowErrorProps.bind(se.defaultInstance);se.serialize;se.deserialize;se.stringify;se.parse;se.registerClass;se.registerCustom;se.registerSymbol;se.allowErrorProps;function dc(e="your-main-id"){return typeof window>"u"?e:new URLSearchParams(window.location.search).get("listId")||e}function Js(e,t){return`${e}_${t}`}function fc(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}let b=class{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}};b.equal=(e,t)=>new b("equal",e,t).toString();b.notEqual=(e,t)=>new b("notEqual",e,t).toString();b.lessThan=(e,t)=>new b("lessThan",e,t).toString();b.lessThanEqual=(e,t)=>new b("lessThanEqual",e,t).toString();b.greaterThan=(e,t)=>new b("greaterThan",e,t).toString();b.greaterThanEqual=(e,t)=>new b("greaterThanEqual",e,t).toString();b.isNull=e=>new b("isNull",e).toString();b.isNotNull=e=>new b("isNotNull",e).toString();b.between=(e,t,r)=>new b("between",e,[t,r]).toString();b.startsWith=(e,t)=>new b("startsWith",e,t).toString();b.endsWith=(e,t)=>new b("endsWith",e,t).toString();b.select=e=>new b("select",void 0,e).toString();b.search=(e,t)=>new b("search",e,t).toString();b.orderDesc=e=>new b("orderDesc",e).toString();b.orderAsc=e=>new b("orderAsc",e).toString();b.orderRandom=()=>new b("orderRandom").toString();b.cursorAfter=e=>new b("cursorAfter",void 0,e).toString();b.cursorBefore=e=>new b("cursorBefore",void 0,e).toString();b.limit=e=>new b("limit",void 0,e).toString();b.offset=e=>new b("offset",void 0,e).toString();b.contains=(e,t)=>new b("contains",e,t).toString();b.notContains=(e,t)=>new b("notContains",e,t).toString();b.notSearch=(e,t)=>new b("notSearch",e,t).toString();b.notBetween=(e,t,r)=>new b("notBetween",e,[t,r]).toString();b.notStartsWith=(e,t)=>new b("notStartsWith",e,t).toString();b.notEndsWith=(e,t)=>new b("notEndsWith",e,t).toString();b.createdBefore=e=>new b("createdBefore",void 0,e).toString();b.createdAfter=e=>new b("createdAfter",void 0,e).toString();b.createdBetween=(e,t)=>new b("createdBetween",void 0,[e,t]).toString();b.updatedBefore=e=>new b("updatedBefore",void 0,e).toString();b.updatedAfter=e=>new b("updatedAfter",void 0,e).toString();b.updatedBetween=(e,t)=>new b("updatedBetween",void 0,[e,t]).toString();b.or=e=>new b("or",void 0,e.map(t=>JSON.parse(t))).toString();b.and=e=>new b("and",void 0,e.map(t=>JSON.parse(t))).toString();b.distanceEqual=(e,t,r,n=!0)=>new b("distanceEqual",e,[[t,r,n]]).toString();b.distanceNotEqual=(e,t,r,n=!0)=>new b("distanceNotEqual",e,[[t,r,n]]).toString();b.distanceGreaterThan=(e,t,r,n=!0)=>new b("distanceGreaterThan",e,[[t,r,n]]).toString();b.distanceLessThan=(e,t,r,n=!0)=>new b("distanceLessThan",e,[[t,r,n]]).toString();b.intersects=(e,t)=>new b("intersects",e,[t]).toString();b.notIntersects=(e,t)=>new b("notIntersects",e,[t]).toString();b.crosses=(e,t)=>new b("crosses",e,[t]).toString();b.notCrosses=(e,t)=>new b("notCrosses",e,[t]).toString();b.overlaps=(e,t)=>new b("overlaps",e,[t]).toString();b.notOverlaps=(e,t)=>new b("notOverlaps",e,[t]).toString();b.touches=(e,t)=>new b("touches",e,[t]).toString();b.notTouches=(e,t)=>new b("notTouches",e,[t]).toString();var Si,xi;class sn{static custom(t){return t}static unique(t=7){const r=fc(sn,Si,"m",xi).call(sn);let n="";for(let s=0;s<t;s++){const i=Math.floor(Math.random()*16).toString(16);n+=i}return r+n}}Si=sn,xi=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Xs;(function(e){e.Totp="totp"})(Xs||(Xs={}));var Fs;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Fs||(Fs={}));var ea;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(ea||(ea={}));var ta;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(ta||(ta={}));var ra;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(ra||(ra={}));var na;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(na||(na={}));var sa;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(sa||(sa={}));var aa;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(aa||(aa={}));var ia;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(ia||(ia={}));async function qr(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function vc(e,t={}){const{includePurchases:r=!0,limit:n=100,orderBy:s="productName",orderDirection:i="asc"}=t;try{const{databases:o,config:l}=await qr(),u=await o.listDocuments(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,[b.equal("mainId",e),b.orderAsc(s==="productName"?"productName":"$updatedAt"),b.limit(n)]),f=u.documents;if(!r)return f;const v=await o.listDocuments(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.purchases,[b.equal("mainId",e)]),_=v.documents,m=bc(f,_);return console.log(`[Appwrite Interactions] ${u.documents.length} produits chargés avec ${v.documents.length} achats`),m}catch(o){console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${e}:`,o);const l=o instanceof Error?o.message:"Erreur lors du chargement des produits";throw new Error(`Échec du chargement des produits: ${l}`)}}async function hc(e,t){const{lastSync:r,limit:n=100}=t;if(!r)return console.log("[Appwrite Interactions] Aucune dernière sync fournie, retour vide pour sync hybride"),{products:[],purchases:[]};try{const{databases:s,config:i}=await qr(),[o,l]=await Promise.all([s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.limit(n)]),s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.purchases,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.limit(n)])]),u=o.documents,f=l.documents;return(u.length>0||f.length>0)&&console.log(`[Appwrite Interactions] Sync hybride: ${u.length} produits et ${f.length} achats synchronisés`),{products:u,purchases:f}}catch(s){console.error(`[Appwrite Interactions] Erreur sync hybride pour mainId ${e}:`,s);const i=s instanceof Error?s.message:"Erreur lors de la synchronisation hybride";throw new Error(`Échec de la synchronisation hybride: ${i}`)}}async function Ts(e,t){try{const{databases:r,config:n}=await qr();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function pc(e,t){if(console.log(`[Appwrite Interactions] Mise à jour du magasin pour produit ${e}:`,t),!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await Ts(e,{store:r});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function oa(e,t){return Ts(e,{who:t})}async function la(e,t){return Ts(e,{stockReel:t})}async function _c(e){try{const{databases:t,config:r}=await qr(),i=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:i.$id,status:"active"},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,sn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function mc(e,t){try{const{databases:r,config:n}=await qr(),s=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,t);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,t),s}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function gc(e){try{const{databases:t,config:r}=await qr();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}function bc(e,t){return e.map(r=>({...r,purchases:t.filter(n=>n.products.some(s=>s.$id===r.$id))}))}function yc(e,t){const r=new Map(t.map(o=>[o.$id,o])),n=e.map(o=>r.get(o.$id)??o),s=new Set(e.map(o=>o.$id)),i=t.filter(o=>!s.has(o.$id));return[...n,...i]}function wc(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing stock data:",t),[]}}function Sc(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing recipes occurrences:",t),[]}}function xc(e,t={}){let r=null;const n=i=>{const{events:o,payload:l}=i;if(!l)return;const u=o.some(p=>p.includes("products.")),f=o.some(p=>p.includes("purchases.")),v=o.some(p=>p.includes(".create")),_=o.some(p=>p.includes(".update")),m=o.some(p=>p.includes(".delete"));if(u){const p=l;v&&t.onProductCreate?t.onProductCreate(p):_&&t.onProductUpdate?t.onProductUpdate(p):m&&t.onProductDelete&&t.onProductDelete(p.$id)}else if(f){const p=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(p):_&&t.onPurchaseUpdate?t.onPurchaseUpdate(p):m&&t.onPurchaseDelete&&t.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),t.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),t.onError?.(i)}})(),()=>{r&&(r(),r=null)}}const{Query:yf}=window.Appwrite,ca=1e3,Ec=500;class Pc{#r=ye(null);#n=ye(!1);#a=ye(null);#s=ye(null);#c=ye(null);#t=ye(null);#i(t,r=null){if(!t||t.trim()==="")return r;try{return JSON.parse(t)}catch(n){return console.warn("[ProductsStore] Erreur de parsing JSON, utilisation de la valeur par défaut:",n),r}}#o=Q(()=>a(this.#a)?.current.products??[]);get products(){return a(this.#o)}set products(t){T(this.#o,t)}#l=Q(()=>a(this.#a)?.current.loading??!1);get loading(){return a(this.#l)}set loading(t){T(this.#l,t)}#u=Q(()=>a(this.#a)?.current.error??null);get error(){return a(this.#u)}set error(t){T(this.#u,t)}#v=Q(()=>a(this.#a)?.current.syncing??!1);get syncing(){return a(this.#v)}set syncing(t){T(this.#v,t)}#d=Q(()=>a(this.#a)?.current.realtimeConnected??!1);get realtimeConnected(){return a(this.#d)}set realtimeConnected(t){T(this.#d,t)}#h=Q(()=>a(this.#s)?.current.lastSync??null);get lastSync(){return a(this.#h)}set lastSync(t){T(this.#h,t)}#p=Q(()=>a(this.#s)?.current.mainId??null);get mainId(){return a(this.#p)}set mainId(t){T(this.#p,t)}#e=ye(ct({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return a(this.#e)}#w=Q(()=>a(this.#t)?Array.from(a(this.#t).current.values()):[]);get enrichedProducts(){return a(this.#w)}set enrichedProducts(t){T(this.#w,t)}#S=Q(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return a(this.#S)}set uniqueStores(t){T(this.#S,t)}#x=Q(()=>[...new Set(this.products.flatMap(t=>t.who||[]).filter(Boolean))]);get uniqueWho(){return a(this.#x)}set uniqueWho(t){T(this.#x,t)}#_=Q(()=>[...new Set(this.products.map(t=>t.productType).filter(Boolean))]);get uniqueProductTypes(){return a(this.#_)}set uniqueProductTypes(t){T(this.#_,t)}#m=Q(()=>{const t=this.enrichedProducts.filter(r=>this.#W(r));return a(this.#e).groupBy==="none"?{"":t}:Object.groupBy(t,r=>a(this.#e).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return a(this.#m)}set filteredGroupedProducts(t){T(this.#m,t)}#b=Q(()=>Object.values(this.filteredGroupedProducts).flat());get filteredProducts(){return a(this.#b)}set filteredProducts(t){T(this.#b,t)}#T=Q(()=>this.filteredGroupedProducts);get groupedFormattedProducts(){return a(this.#T)}set groupedFormattedProducts(t){T(this.#T,t)}#N=Q(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return a(this.#N)}set stats(t){T(this.#N,t)}get currentMainId(){return a(this.#r)}get isInitialized(){return a(this.#n)}#g=Rl(()=>{this.#P()},Ec);async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(a(this.#n)&&a(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),T(this.#r,t,!0),T(this.#n,!0),this.#R(t);const r=a(this.#t).current.size>0,n=this.products.length>0&&a(this.#s).current.mainId===t;r?(console.log(`[ProductsStore] Utilisation du cache SvelteMap (${a(this.#t).current.size} produits enrichis)`),await this.#M()):n?(console.log(`[ProductsStore] Migration depuis le cache legacy (${this.products.length} produits)`),this.#A(this.products),await this.#M()):(console.log("[ProductsStore] Chargement initial depuis Appwrite"),await this.#I(t));const s=this.#V();T(this.#c,xc(t,s),!0)}#R(t){if(a(this.#a)&&a(this.#s)&&a(this.#t))return;const r=Js("products-state",t),n=Js("products-sync-state",t);console.log(`[ProductsStore] Clés de stockage: ${r}, ${n}`),T(this.#a,new Xn(r,{products:[],loading:!1,error:null,syncing:!1,realtimeConnected:!1}),!0),T(this.#t,new Xn(`${r}-enriched`,new Map,{serializer:{serialize:s=>se.stringify(Array.from(s.entries())),deserialize:s=>new Map(se.parse(s))}}),!0),T(this.#s,new Xn(n,{lastSync:null,mainId:null}),!0)}#$(t){const r=this.#G(t.purchases??[]),n=t.totalNeededConsolidated?this.#U(t.totalNeededConsolidated):[],{numeric:s,display:i}=this.#Q(n,r);return{...t,storeInfo:t.store?this.#i(t.store):null,totalNeededArray:n,totalPurchasesArray:r,stockArray:this.#i(t.stockReel)??[],recipesArray:this.#i(t.recipesOccurrences)??[],missingQuantityArray:s,displayTotalNeeded:this.#C(n),displayTotalPurchases:this.#C(r),displayMissingQuantity:i}}#A(t){if(!a(this.#t))return;a(this.#t).current;const r=new Map;for(const n of t){const s=this.#$(n);r.set(n.$id,s)}a(this.#t).current=r}#y(t){if(!a(this.#t))return;const r=new Map(a(this.#t).current),n=this.#$(t);r.set(t.$id,n),a(this.#t).current=r}#O(t){if(!a(this.#t))return;a(this.#t).current.delete(t)}async#I(t){if(!a(this.#a))throw new Error("ProductsStore non initialisé");this.#f({loading:!0,error:null});try{const n=await vc(t,{includePurchases:!0,limit:ca,orderBy:"productName",orderDirection:"asc"});this.#A(n),this.#f({products:n}),this.#P(),console.log(`[ProductsStore] ${n.length} produits chargés et enrichis`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors du chargement";throw this.#f({loading:!1,error:n}),console.error("[ProductsStore]",n,r),r}}async#M(){if(a(this.#s)?.current.lastSync){this.#f({syncing:!0});try{const t={lastSync:a(this.#s).current.lastSync,limit:ca},{products:r,purchases:n}=await hc(a(this.#r),t);let s=!1;r.length>0&&(this.#f({products:yc(this.products,r)}),s=!0,console.log(`[ProductsStore] ${r.length} mises à jour de produits synchronisées`)),n.length>0&&(this.#E(n),s=!0,console.log(`[ProductsStore] ${n.length} mises à jour d'achats synchronisées`)),s&&this.#P(),this.#f({syncing:!1})}catch(t){console.error("[ProductsStore] Erreur sync:",t),this.#f({syncing:!1})}}}#D(t){this.#y(t)}#q(t){this.#y(t)}#j(t){this.#O(t)}#L(t){this.#E([t])}#B(t){this.#E([t])}#z(t){this.products.filter(s=>s.purchases?.some(i=>i.$id===t)).map(s=>({...s,purchases:s.purchases?.filter(i=>i.$id!==t),$updatedAt:new Date().toISOString()})).forEach(s=>this.#y(s))}#E(t){if(!t||t.length===0)return;this.#f({products:this.products.map(n=>{const s=t.filter(i=>i.products&&i.products.some(o=>o.$id===n.$id));if(s.length>0){let o=[...n.purchases||[]];return s.forEach(l=>{o=o.filter(u=>u.$id!==l.$id),o.push(l)}),{...n,purchases:o,$updatedAt:new Date().toISOString()}}return n})}),this.products.filter(n=>t.some(s=>s.products?.some(i=>i.$id===n.$id))).forEach(n=>{this.#y(n)}),console.log(`[ProductsStore] ${t.length} purchases synchronisés`)}#V(){return{onProductCreate:t=>{this.#D(t),this.#g()},onProductUpdate:t=>{this.#q(t),this.#g()},onProductDelete:t=>{this.#j(t),this.#g()},onPurchaseCreate:t=>{this.#L(t),this.#g()},onPurchaseUpdate:t=>{this.#B(t),this.#g()},onPurchaseDelete:t=>{this.#z(t),this.#g()},onConnect:()=>{console.log("[ProductsStore] Realtime connecté"),this.#f({realtimeConnected:!0})},onDisconnect:()=>{console.log("[ProductsStore] Realtime déconnecté"),this.#f({realtimeConnected:!1})},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#P(){if(!a(this.#r)||!a(this.#s))return;const t=new Date().toISOString();a(this.#s).current={lastSync:t,mainId:a(this.#r)},this.lastSync=t,this.mainId=a(this.#r)}#f(t){a(this.#a)&&(a(this.#a).current={...a(this.#a).current,...t})}async forceReload(t){await this.#I(t)}destroy(){a(this.#c)?.(),T(this.#c,null),console.log("[ProductsStore] Ressources nettoyées")}clearCache(){if(!a(this.#a)||!a(this.#s)||!a(this.#t)){console.warn("[ProductsStore] Store non initialisé");return}a(this.#t).current=new Map,this.#f({products:[],loading:!1,error:null,syncing:!1,realtimeConnected:!1}),a(this.#s).current={lastSync:null,mainId:null},console.log(`[ProductsStore] Cache vidé pour ${a(this.#r)} (SvelteMap + legacy)`)}getEnrichedProductById(t){return a(this.#t)?a(this.#t).current.get(t)??null:null}hasEnrichedProduct(t){return a(this.#t)?a(this.#t).current.has(t):!1}get enrichedProductsCount(){return a(this.#t)?a(this.#t).current.size:0}recalculateEnrichedProduct(t){const r=this.products.find(n=>n.$id===t);r&&this.#y(r)}setSearchQuery(t){a(this.#e).searchQuery=t}toggleProductType(t){const r=a(this.#e).selectedProductTypes.indexOf(t);r>-1?a(this.#e).selectedProductTypes.splice(r,1):a(this.#e).selectedProductTypes.push(t)}toggleTemperature(t){const r=a(this.#e).selectedTemperatures.indexOf(t);r>-1?a(this.#e).selectedTemperatures.splice(r,1):a(this.#e).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){a(this.#e).selectedProductTypes=[],a(this.#e).selectedTemperatures=[]}setGroupBy(t){a(this.#e).groupBy=t}toggleStore(t){const r=a(this.#e).selectedStores.indexOf(t);r>-1?a(this.#e).selectedStores.splice(r,1):a(this.#e).selectedStores.push(t)}toggleWho(t){const r=a(this.#e).selectedWho.indexOf(t);r>-1?a(this.#e).selectedWho.splice(r,1):a(this.#e).selectedWho.push(t)}clearStoreFilters(){a(this.#e).selectedStores=[]}clearWhoFilters(){a(this.#e).selectedWho=[]}handleSort(t){a(this.#e).sortColumn===t?a(this.#e).sortDirection=a(this.#e).sortDirection==="asc"?"desc":"asc":(a(this.#e).sortColumn=t,a(this.#e).sortDirection="asc")}clearFilters(){T(this.#e,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"none",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return a(this.#e).sortColumn?[...t].sort((r,n)=>{let s=r[a(this.#e).sortColumn],i=n[a(this.#e).sortColumn];return a(this.#e).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,i=parseFloat(i)||0):a(this.#e).sortColumn==="purchases"&&(s=r.purchases?.length||0,i=n.purchases?.length||0),s<i?a(this.#e).sortDirection==="asc"?-1:1:s>i?a(this.#e).sortDirection==="asc"?1:-1:0}):t}#W(t){if(a(this.#e).searchQuery.trim()){const r=a(this.#e).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(a(this.#e).selectedStores.length>0&&(!t.storeInfo?.storeName||!a(this.#e).selectedStores.includes(t.storeInfo.storeName))||a(this.#e).selectedWho.length>0&&(!t.who||!t.who.some(r=>a(this.#e).selectedWho.includes(r)))||a(this.#e).selectedProductTypes.length>0&&(!t.productType||!a(this.#e).selectedProductTypes.includes(t.productType))||a(this.#e).selectedTemperatures.length>0&&!(a(this.#e).selectedTemperatures.includes("frais")&&t.pFrais||a(this.#e).selectedTemperatures.includes("surgele")&&t.pSurgel))}#k(t,r){const n=parseFloat(t);if(isNaN(n))return`${t} ${r}`;if((r==="gr."||r==="ml")&&n>=1e3){const s=n/1e3,i=r==="gr."?"kg":"l.";let l=(Math.round(s*100)/100).toString();return l.endsWith(",0")&&(l=l.slice(0,-2)),l.endsWith(",00")&&(l=l.slice(0,-3)),`${l} ${i}`}if(!["gr.","ml","kg","l."].includes(r)){let i=(Math.round(n*10)/10).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),`${i} ${r}`}return`${n} ${r}`}#C(t){return!t||t.length===0?"-":t.map(r=>this.#k(r.quantity.toString(),r.unit)).join(" et ")}#U(t){try{return JSON.parse(t).map(n=>({quantity:parseFloat(n.quantity),unit:n.unit})).filter(n=>!isNaN(n.quantity))}catch(r){return console.error("[ProductsStore] Erreur parsing NumericQuantity:",r),[]}}#G(t){if(!t||t.length===0)return[];const r=new Map;t.forEach(s=>{if(!s.quantity||!s.unit)return;const i=parseFloat(s.quantity);if(isNaN(i))return;const o=r.get(s.unit)||0;r.set(s.unit,o+i)});const n=[];return r.forEach((s,i)=>{n.push({quantity:s,unit:i})}),n}#Q(t,r){if(!t||t.length===0)return{numeric:[],display:"✅ Complet"};if(!r||r.length===0){const u=t.map(v=>({quantity:parseFloat(v.quantity),unit:v.unit})),f=u.length>0?u.map(v=>this.#k(v.quantity.toString(),v.unit)).join(" et "):"✅ Complet";return{numeric:u,display:f}}const n=new Map,s=new Map;t.forEach(u=>{const f=parseFloat(u.quantity);isNaN(f)||n.set(u.unit,(n.get(u.unit)||0)+f)}),r.forEach(u=>{s.set(u.unit,(s.get(u.unit)||0)+u.quantity)});const i=[],o=[];n.forEach((u,f)=>{const v=s.get(f)||0,_=u-v;if(_>0){const m={quantity:_,unit:f};i.push(m),o.push(this.#k(_.toString(),f))}});const l=o.length>0?o.join(" et "):"✅ Complet";return{numeric:i,display:l}}}const L=new Pc;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const kc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Tc=ol("<svg><!><!></svg>");function _e(e,t){J(t,!0);const r=Er(t,"color",3,"currentColor"),n=Er(t,"size",3,24),s=Er(t,"strokeWidth",3,2),i=Er(t,"absoluteStrokeWidth",3,!1),o=Er(t,"iconNode",19,()=>[]),l=ve(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=Tc();Gs(u,_=>({...kc,...l,width:n(),height:n(),stroke:r(),"stroke-width":_,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>i()?Number(s())*24/Number(n()):s()]);var f=c(u);Je(f,17,o,dl,(_,m)=>{var p=Q(()=>_a(a(m),2));let g=()=>a(p)[0],S=()=>a(p)[1];var w=Z(),E=K(w);hl(E,g,!0,(R,M)=>{Gs(R,()=>({...S()}))}),h(_,w)});var v=d(f);fe(v,()=>t.children??le),h(e,u),X()}function fs(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];_e(e,pe({name:"archive"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Nc(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];_e(e,pe({name:"bean"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function $c(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];_e(e,pe({name:"beef"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Ac(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];_e(e,pe({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Ic(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];_e(e,pe({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Mc(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];_e(e,pe({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Cc(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];_e(e,pe({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Rc(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];_e(e,pe({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Oc(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];_e(e,pe({name:"combine"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Dc(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];_e(e,pe({name:"egg"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function vs(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];_e(e,pe({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function ua(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];_e(e,pe({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function qc(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];_e(e,pe({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function jc(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];_e(e,pe({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function yn(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];_e(e,pe({name:"package"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Lc(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];_e(e,pe({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Bc(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];_e(e,pe({name:"save"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function zc(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];_e(e,pe({name:"search"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function wn(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];_e(e,pe({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Tn(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];_e(e,pe({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Sn(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];_e(e,pe({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Hr(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];_e(e,pe({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function an(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];_e(e,pe({name:"store"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Vc(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];_e(e,pe({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Wc(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];_e(e,pe({name:"user"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Nn(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];_e(e,pe({name:"users"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function Uc(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];_e(e,pe({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}function pt(e,t){J(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];_e(e,pe({name:"x"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),l=K(o);fe(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),X()}const Ot=ct({product:{id:"",isOpen:!1,tab:"recettes"}});function Gc(e,t){Ot.product.tab=e,Ot.product.isOpen=!0,Ot.product.id=t}function da(){Ot.product.isOpen=!1,Ot.product.tab="",Ot.product.id=""}let fa=()=>localStorage.getItem("appwrite-user-name")||"";function Qc(e,t,r){T(t,null),r.onCancelEditPurchase()}async function Hc(e,t,r){await t.onSavePurchase(),T(r,null)}var Kc=x('<span class="loading loading-spinner loading-sm"></span>'),Yc=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Zc=x('<span class="loading loading-spinner loading-sm"></span>'),Jc=x('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input input-bordered w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input input-bordered w-24"/></td><td><input type="text" class="input input-bordered w-20"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="0.01" class="input input-bordered w-16"/></td><td><input type="text" class="input input-bordered w-24"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Xc=(e,t,r)=>t(a(r)),Fc=(e,t,r)=>t(a(r).$id),eu=x('<span class="loading loading-spinner loading-sm"></span>'),tu=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),ru=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),nu=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"><div class="form-control"><label for="purchase-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="purchase-quantity" type="number" step="0.01" class="input input-bordered validator" required/></div> <div class="form-control"><label for="purchase-unit" class="label"><span class="label-text">Unité</span></label> <select id="purchase-unit" class="select select-bordered validator" required><option disabled selected>Sélectionner</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></div> <div class="form-control"><label for="purchase-store" class="label"><span class="label-text">Magasin</span></label> <input id="purchase-store" type="text" class="input input-bordered" placeholder="Ex: Marché"/></div> <div class="form-control"><label for="purchase-who" class="label"><span class="label-text">Qui a acheté ?</span></label> <input id="purchase-who" type="text" class="input input-bordered" placeholder="Votre nom"/></div> <div class="form-control"><label for="purchase-price" class="label"><span class="label-text">Prix (€)</span></label> <input id="purchase-price" type="number" step="1" class="input input-bordered" placeholder="0.00"/></div> <div class="form-control"><label for="purchase-notes" class="label"><span class="label-text">Notes</span></label> <input id="purchase-notes" type="text" class="input input-bordered" placeholder="Promotion, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function su(e,t){J(t,!0);let r=Er(t,"newPurchase",7),n=ye(null);function s(k,F){return F==="gr."&&k>=1e3?`${(k/1e3).toFixed(1)} kg`:F==="ml"&&k>=1e3?`${(k/1e3).toFixed(1)} l`:`${k} ${F}`}function i(k){return new Date(k).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function o(k){T(n,{...k},!0),t.onStartEditPurchase(k)}async function l(k){await t.onDeletePurchase(k)}var u=nu(),f=c(u),v=c(f);Tn(v,{class:"w-5 h-5"});var _=d(f,2),m=c(_),p=d(c(m),2),g=c(p),S=d(c(g),2),w=d(g,2),E=d(c(w),2),R=c(E);R.value=R.__value="";var M=d(R);M.value=M.__value="kg";var $=d(M);$.value=$.__value="gr.";var N=d($);N.value=N.__value="l.";var A=d(N);A.value=A.__value="ml";var j=d(A);j.value=j.__value="unité";var V=d(j);V.value=V.__value="bottes";var z=d(w,2),te=d(c(z),2),me=d(z,2),C=d(c(me),2),D=d(me,2),ae=d(c(D),2),ie=d(D,2),ge=d(c(ie),2),Ce=d(p,2),P=c(Ce);P.__click=function(...k){t.onAddPurchase?.apply(this,k)};var y=c(P);{var q=k=>{var F=Kc();h(k,F)},ue=k=>{var F=lt("Ajouter l'achat");h(k,F)};O(y,k=>{t.loading?k(q):k(ue,!1)})}var qe=d(_,2);{var Le=k=>{var F=Yc(),Ie=c(F);Tn(Ie,{class:"w-12 h-12 mx-auto mb-2"}),h(k,F)},He=k=>{var F=ru(),Ie=c(F),Re=d(c(Ie));Je(Re,21,()=>t.currentProductPurchases,Ne=>Ne.$id,(Ne,de)=>{var xe=Z(),st=K(xe);{var Fe=at=>{var Ke=Jc(),$e=c(Ke),it=c($e),mt=c(it),gt=d(mt,2),dt=c(gt);dt.value=dt.__value="kg";var qt=d(dt);qt.value=qt.__value="gr.";var Tt=d(qt);Tt.value=Tt.__value="l.";var Ye=d(Tt);Ye.value=Ye.__value="ml";var bt=d(Ye);bt.value=bt.__value="unité";var jt=d(bt);jt.value=jt.__value="bottes";var Lt=d($e),Nt=c(Lt),yt=d(Lt),ir=c(yt),wt=d(yt),Bt=c(wt),$t=d(wt),St=c($t),zt=d($t),or=c(zt),et=d(zt),At=c(et),Ht=c(At);Ht.__click=[Hc,t,n];var jr=c(Ht);{var Lr=U=>{var xt=Zc();h(U,xt)},Br=U=>{Bc(U,{class:"w-3 h-3"})};O(jr,U=>{t.loading?U(Lr):U(Br,!1)})}var W=d(Ht,2);W.__click=[Qc,n,t];var ce=c(W);pt(ce,{class:"w-3 h-3"}),B(U=>{I(Bt,U),Ht.disabled=t.loading},[()=>i(a(de).$createdAt)]),Ue(mt,()=>a(n).quantity,U=>a(n).quantity=U),is(gt,()=>a(n).unit,U=>a(n).unit=U),Ue(Nt,()=>a(n).store,U=>a(n).store=U),Ue(ir,()=>a(n).who,U=>a(n).who=U),Ue(St,()=>a(n).price,U=>a(n).price=U),Ue(or,()=>a(n).notes,U=>a(n).notes=U),h(at,Ke)},ar=at=>{var Ke=tu(),$e=c(Ke),it=c($e),mt=d($e),gt=c(mt),dt=d(mt),qt=c(dt),Tt=d(dt),Ye=c(Tt),bt=d(Tt),jt=c(bt),Lt=d(bt),Nt=c(Lt),yt=d(Lt),ir=c(yt),wt=c(ir);wt.__click=[Xc,o,de];var Bt=c(wt);Hr(Bt,{class:"w-4 h-4"});var $t=d(wt,2);$t.__click=[Fc,l,de];var St=c($t);{var zt=et=>{var At=eu();h(et,At)},or=et=>{pt(et,{class:"w-4 h-4"})};O(St,et=>{t.loading?et(zt):et(or,!1)})}B((et,At)=>{I(it,et),I(gt,a(de).store),I(qt,a(de).who),I(Ye,At),I(jt,a(de).price?`${a(de).price}€`:"-"),I(Nt,a(de).notes||"-"),$t.disabled=t.loading},[()=>s(a(de).quantity,a(de).unit),()=>i(a(de).$createdAt)]),h(at,Ke)};O(st,at=>{a(n)?.$id===a(de).$id?at(Fe):at(ar,!1)})}h(Ne,xe)}),h(k,F)};O(qe,k=>{t.currentProductPurchases.length===0?k(Le):k(He,!1)})}B(()=>P.disabled=t.loading),Ue(S,()=>r().quantity,k=>r().quantity=k),is(E,()=>r().unit,k=>r().unit=k),Ue(te,()=>r().store,k=>r().store=k),Ue(C,()=>r().who,k=>r().who=k),Ue(ae,()=>r().price,k=>r().price=k),Ue(ge,()=>r().notes,k=>r().notes=k),h(e,u),X()}sr(["click"]);var au=x('<span class="loading loading-spinner loading-sm"></span>'),iu=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),ou=(e,t,r)=>t(a(r).dateTime),lu=x('<span class="loading loading-spinner loading-xs"></span>'),cu=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),uu=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),du=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"><div class="form-control"><label for="stock-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="stock-quantity" type="number" step="0.01" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-unit" class="label"><span class="label-text">Unité</span></label> <select id="stock-unit" class="select select-bordered select-sm" required><option>Sélectionner</option><option>kg</option><option>g</option><option>l</option><option>ml</option><option>unités</option><option>pièces</option></select></div> <div class="form-control"><label for="stock-datetime" class="label"><span class="label-text">Date du stock</span></label> <input id="stock-datetime" type="datetime-local" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-notes" class="label"><span class="label-text">Notes</span></label> <input id="stock-notes" type="text" class="input input-bordered input-sm" placeholder="Origine, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function fu(e,t){J(t,!0);let r={quantity:"",unit:"",dateTime:"",notes:""};function n(y,q){return q==="g"&&y>=1e3?`${(y/1e3).toFixed(1)} kg`:q==="ml"&&y>=1e3?`${(y/1e3).toFixed(1)} l`:q==="unités"||q==="pièces"?`${y} ${q}`:`${y} ${q}`}function s(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}async function i(y){await t.onDeleteStock(y)}var o=du(),l=c(o),u=c(l);fs(u,{class:"w-5 h-5"});var f=d(l,2),v=c(f),_=d(c(v),2),m=c(_),p=d(c(m),2),g=d(m,2),S=d(c(g),2),w=c(S);w.value=w.__value="";var E=d(w);E.value=E.__value="kg";var R=d(E);R.value=R.__value="g";var M=d(R);M.value=M.__value="l";var $=d(M);$.value=$.__value="ml";var N=d($);N.value=N.__value="unités";var A=d(N);A.value=A.__value="pièces";var j=d(g,2),V=d(c(j),2),z=d(j,2),te=d(c(z),2),me=d(_,2),C=c(me);C.__click=function(...y){t.onAddStock?.apply(this,y)};var D=c(C);{var ae=y=>{var q=au();h(y,q)},ie=y=>{var q=lt("Ajouter au stock");h(y,q)};O(D,y=>{t.loading?y(ae):y(ie,!1)})}var ge=d(f,2);{var Ce=y=>{var q=iu(),ue=c(q);fs(ue,{class:"w-12 h-12 mx-auto mb-2"}),h(y,q)},P=y=>{var q=uu(),ue=c(q),qe=d(c(ue));Je(qe,23,()=>t.stockEntries,Le=>Le.dateTime,(Le,He)=>{var k=cu(),F=c(k),Ie=c(F),Re=d(F),Ne=c(Re),de=d(Re),xe=c(de),st=d(de),Fe=c(st);Fe.__click=[ou,i,He];var ar=c(Fe);{var at=$e=>{var it=lu();h($e,it)},Ke=$e=>{var it=lt("Supprimer");h($e,it)};O(ar,$e=>{t.loading?$e(at):$e(Ke,!1)})}B(($e,it)=>{I(Ie,$e),I(Ne,it),I(xe,a(He).notes||"-"),Fe.disabled=t.loading},[()=>n(a(He).quantity,a(He).unit),()=>s(a(He).dateTime)]),h(Le,k)}),h(y,q)};O(ge,y=>{t.stockEntries.length===0?y(Ce):y(P,!1)})}B(()=>C.disabled=t.loading),Ue(p,()=>r.quantity,y=>r.quantity=y),is(S,()=>r.unit,y=>r.unit=y),Ue(V,()=>r.dateTime,y=>r.dateTime=y),Ue(te,()=>r.notes,y=>r.notes=y),h(e,o),X()}sr(["click"]);var vu=(e,t)=>{e.key==="Enter"&&t()},hu=x('<span class="loading loading-spinner loading-sm"></span>'),pu=x('<span class="badge badge-primary badge-sm"> </span>'),_u=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun volontaire assigné à ce produit</p></div>'),mu=(e,t,r)=>t(r),gu=x('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs p-0 hover:text-error"><!></button></div>'),bu=x('<div class="flex flex-wrap gap-2"></div>'),yu=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des volontaires</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <div class="flex gap-2"><div class="form-control flex-1"><input type="text" class="input input-bordered input-sm" placeholder="Nom du volontaire"/></div> <button class="btn btn-primary btn-sm"><!></button></div></div></div> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Volontaires <!></h4> <!></div></div></div>');function wu(e,t){J(t,!0);let r=ye("");async function n(){a(r).trim()&&(await t.onAddVolunteer(a(r).trim()),T(r,""))}async function s(z){await t.onRemoveVolunteer(z)}var i=yu(),o=c(i),l=c(o);Nn(l,{class:"w-5 h-5"});var u=d(o,2),f=c(u),v=d(c(f),2),_=c(v),m=c(_);m.__keydown=[vu,n];var p=d(_,2);p.__click=n;var g=c(p);{var S=z=>{var te=hu();h(z,te)},w=z=>{var te=lt("Ajouter");h(z,te)};O(g,z=>{t.loading?z(S):z(w,!1)})}var E=d(u,2),R=c(E),M=c(R),$=d(c(M));{var N=z=>{var te=pu(),me=c(te);B(()=>I(me,t.editingWho.length)),h(z,te)};O($,z=>{t.editingWho.length>0&&z(N)})}var A=d(M,2);{var j=z=>{var te=_u(),me=c(te);Nn(me,{class:"w-12 h-12 mx-auto mb-2"}),h(z,te)},V=z=>{var te=bu();Je(te,20,()=>t.editingWho,me=>me,(me,C)=>{var D=gu(),ae=c(D),ie=d(ae);ie.__click=[mu,s,C];var ge=c(ie);pt(ge,{class:"w-3 h-3"}),B(()=>{I(ae,`${C??""} `),ie.disabled=t.loading}),h(me,D)}),h(z,te)};O(A,z=>{t.editingWho.length===0?z(j):z(V,!1)})}B(()=>p.disabled=t.loading),Ue(m,()=>a(r),z=>T(r,z)),h(e,i),X()}sr(["keydown","click"]);var Su=(e,t)=>{e.key==="Enter"&&t()},xu=x('<span class="loading loading-spinner loading-sm"></span>'),Eu=(e,t,r)=>{T(t,""),T(r,"")},Pu=(e,t,r)=>t(r),ku=x('<button class="btn btn-outline btn-xs"> </button>'),Tu=x('<br/><small class="opacity-75"> </small>',1),Nu=x('<p class="text-sm"><strong>Magasin défini :</strong> <!></p>'),$u=x('<p class="text-sm"><strong>Magasin défini :</strong> </p>'),Au=x(`<p class="text-sm">Aucun magasin n'est encore défini pour ce produit</p>`),Iu=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des magasins</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin principal</h4> <p class="text-sm opacity-75 mb-4">Définissez le magasin où ce produit est généralement acheté</p> <div class="form-control mb-3"><label class="label" for="store-name"><span class="label-text">Nom du magasin</span></label> <input id="store-name" type="text" class="input input-bordered input-sm" placeholder="Ex: Carrefour, Leclerc..."/></div> <div class="form-control mb-4"><label class="label" for="store-comment"><span class="label-text">Commentaire (optionnel)</span></label> <textarea id="store-comment" class="textarea textarea-bordered textarea-sm" placeholder="Ex: Près de la caisse, rayon frais, etc." rows="2"></textarea></div> <div class="flex gap-2 mb-4"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div> <div class="divider"></div> <div class="form-control"><label class="label" for="suggested-stores"><span class="label-text text-sm">Suggestions rapides</span></label> <div class="flex flex-wrap gap-2" id="suggested-stores"></div></div> <div class="divider"></div> <div class="alert alert-info"><!> <div><h4 class="font-semibold">Information sur le magasin actuel</h4> <!></div></div></div></div></div>');function Mu(e,t){J(t,!0);let r=ye(ct(t.editingStore?.storeName||"")),n=ye(ct(t.editingStore?.storeComment||""));Da(()=>{if(t.product?.storeInfo)T(r,t.product.storeInfo.storeName||"",!0),T(n,t.product.storeInfo.storeComment||"",!0);else if(t.product?.store)try{const D=JSON.parse(t.product.store);T(r,D.storeName||"",!0),T(n,D.storeComment||"",!0)}catch{T(r,t.product.store||"",!0),T(n,"")}else T(r,""),T(n,"")});async function s(){const D=a(r).trim()?{storeName:a(r).trim(),storeComment:a(n).trim()||""}:null;await t.onUpdateStore(D)}function i(D){T(r,D,!0)}var o=Iu(),l=c(o),u=c(l);an(u,{class:"w-5 h-5"});var f=d(l,2),v=c(f),_=d(c(v),4),m=d(c(_),2);m.__keydown=[Su,s];var p=d(_,2),g=d(c(p),2),S=d(p,2),w=c(S);w.__click=s;var E=c(w);{var R=D=>{var ae=xu();h(D,ae)},M=D=>{var ae=lt("Mettre à jour");h(D,ae)};O(E,D=>{t.loading?D(R):D(M,!1)})}var $=d(w,2);$.__click=[Eu,r,n];var N=d(S,4),A=d(c(N),2);Je(A,20,()=>["Carrefour","Intermarché","Leclerc","Auchan","Lidl","Aldi","Casino","Monoprix","Franprix","Bio c' Bon","Naturalia"],D=>D,(D,ae)=>{var ie=ku();ie.__click=[Pu,i,ae];var ge=c(ie);B(()=>{ie.disabled=t.loading,I(ge,ae)}),h(D,ie)});var j=d(N,4),V=c(j);an(V,{class:"w-4 h-4"});var z=d(V,2),te=d(c(z),2);{var me=D=>{var ae=Nu(),ie=d(c(ae)),ge=d(ie);{var Ce=P=>{var y=Tu(),q=d(K(y)),ue=c(q);B(()=>I(ue,t.product.storeInfo.storeComment)),h(P,y)};O(ge,P=>{t.product.storeInfo.storeComment&&P(Ce)})}B(()=>I(ie,` ${t.product.storeInfo.storeName??""} `)),h(D,ae)},C=D=>{var ae=Z(),ie=K(ae);{var ge=P=>{var y=$u(),q=d(c(y));B(()=>I(q,` ${t.product.store??""}`)),h(P,y)},Ce=P=>{var y=Au();h(P,y)};O(ie,P=>{t.product?.store?P(ge):P(Ce,!1)},!0)}h(D,ae)};O(te,D=>{t.product?.storeInfo?D(me):D(C,!1)})}B(()=>{w.disabled=t.loading,$.disabled=t.loading}),Ue(m,()=>a(r),D=>T(r,D)),Ue(g,()=>a(n),D=>T(n,D)),h(e,o),X()}sr(["keydown","click"]);var Cu=x('<div class="badge badge-success gap-1"><!> Actif</div>'),Ru=x('<div class="badge badge-warning gap-1"><!> </div>'),Ou=(e,t)=>t("recettes"),Du=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),qu=(e,t)=>t("achats"),ju=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Lu=(e,t)=>t("stock"),Bu=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),zu=(e,t)=>t("volontaires"),Vu=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Wu=(e,t)=>t("magasins"),Uu=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Gu=x('<div class="text-center py-8 opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Qu=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>'),Hu=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Horaire</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),Ku=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Recettes utilisant ce produit</h3> <!></div>'),Yu=x('<div class="modal modal-open"><div class="modal-box max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"><div class="flex items-center justify-between p-4 border-b"><div class="flex-1"><h2 class="text-xl font-bold"> </h2> <div class="flex items-center gap-3 mt-2"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div></div> <button class="btn btn-circle btn-ghost btn-sm" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="flex-1 overflow-y-auto p-4 min-h-96"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function Zu(e,t){J(t,!0);let r=Q(()=>Ot.product.tab),n=Q(()=>Ot.product.id),s=Q(()=>Ot.product.isOpen),i=Q(()=>L.getEnrichedProductById(a(n))),o=ye(!1),l=ye(null),u=ct(a(i)?.storeInfo||null),f=ye(ct({quantity:null,unit:"",store:a(i)?.storeInfo?.storeName||"",who:fa()||"",price:null,notes:""})),v=ye(ct({quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()})),_=Q(()=>a(i)?.stockReel?wc(a(i).stockReel):[]),m=ye(null),p=Q(()=>{const P=a(i)?.purchases;if(!P||!Array.isArray(P))return console.warn("[ProductModal] Purchases is not a valid array:",P),[];const y=P.filter(q=>!q||typeof q!="object"?(console.warn("[ProductModal] Invalid purchase object:",q),!1):q.$id?!0:(console.warn("[ProductModal] Purchase missing $id:",q),!1));return y.length!==P.length&&console.warn(`[ProductModal] Filtered ${P.length-y.length} invalid purchases`),y}),g=Q(()=>Sc(a(i)?.recipesOccurrences||null)),S=Q(()=>a(i)?.who||[]);function w(){T(f,{quantity:null,unit:"",store:a(i)?.storeInfo?.storeName||"",who:fa(),price:null,notes:""},!0),T(v,{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString().slice(0,16)},!0)}function E(P){Ot.product.tab=P}async function R(P){T(o,!0),T(l,null);try{return await P()}catch(y){return T(l,y instanceof Error?y.message:"Une erreur est survenue",!0),console.error("[ProductModal] Erreur:",y),null}finally{T(o,!1)}}function M(P){if(!P)return"-";try{return new Date(P).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return P}}function $(P){if(!P)return"-";try{const y=JSON.parse(P);if(Array.isArray(y)&&y.length>0)return y.map(q=>`${q.value} ${q.unit}`).join(" et ")}catch{return P}return P}async function N(){a(i)&&(T(o,!0),await R(async()=>{if(!a(f).quantity||!a(f).unit.trim())throw new Error("Veuillez remplir les champs obligatoires");let P=a(f).quantity,y=a(f).unit;if(a(f).unit==="kg"?(P=a(f).quantity*1e3,y="gr."):a(f).unit==="l."&&(P=a(f).quantity*1e3,y="ml"),await _c({products:[a(i).$id],mainId:a(i).mainId.$id,unit:y,quantity:P,store:a(f).store||null,who:a(f).who||null,notes:a(f).notes||"",price:a(f).price||null})){w();const ue=new CustomEvent("toast",{detail:{type:"success",message:"Achat ajouté avec succès"}});window.dispatchEvent(ue)}}))}function A(P){T(m,{...P},!0)}function j(){T(m,null)}async function V(){a(m)&&await R(async()=>{const P=a(m).$id;let y=a(m).quantity,q=a(m).unit;a(m).unit==="kg"?(y=a(m).quantity*1e3,q="gr."):a(m).unit==="l."&&(y=a(m).quantity*1e3,q="ml");const ue={unit:q,quantity:y,store:a(m)?.store||null,who:a(m)?.who||null,notes:a(m)?.notes||"",price:a(m)?.price||null};if(await mc(P,ue)){T(m,null);const Le=new CustomEvent("toast",{detail:{type:"success",message:"Achat modifié avec succès"}});window.dispatchEvent(Le)}})}async function z(P){const y=a(p).find(q=>q.$id===P);confirm(`Êtes-vous sûr de vouloir supprimer cet achat (${y?.quantity} ${y?.unit}) ?`)&&await R(async()=>{await gc(P);const q=new CustomEvent("toast",{detail:{type:"success",message:"Achat supprimé avec succès"}});window.dispatchEvent(q)})}async function te(){a(i)&&await R(async()=>{if(!a(v).quantity||!a(v).unit)throw new Error("Veuillez remplir les champs obligatoires");const P={quantity:a(v).quantity.toString(),unit:a(v).unit,notes:a(v).notes||"",dateTime:a(v).dateTime||new Date().toISOString()},y=[...a(_),P],q=a(i).$id;if(await la(q,JSON.stringify(y))){T(_,y),w();const qe=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock ajouté avec succès"}});window.dispatchEvent(qe)}})}async function me(P){confirm("Êtes-vous sûr de vouloir supprimer ce relevé de stock ?")&&a(i)&&await R(async()=>{const y=a(_).filter((ue,qe)=>qe!==P);if(await la(a(i).$id,JSON.stringify(y))){T(_,y);const ue=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock supprimé avec succès"}});window.dispatchEvent(ue)}})}async function C(P){!a(i)||!P.trim()||await R(async()=>{const y=P.trim();if(a(S).includes(y))throw new Error("Ce volontaire est déjà ajouté");const q=[...a(S),y];if(await oa(a(i).$id,q)){const qe=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire ajouté avec succès"}});window.dispatchEvent(qe)}})}async function D(P){a(i)&&confirm(`Retirer ${P} de la liste des volontaires ?`)&&await R(async()=>{const y=a(S).filter(ue=>ue!==P);if(await oa(a(i).$id,y)){const ue=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire retiré avec succès"}});window.dispatchEvent(ue)}})}async function ae(P){a(i)&&await R(async()=>{const y=P!==void 0?P:u?.storeName&&u.storeName.trim()!==""?u.storeName.trim():a(i).store;if(console.log("[ProductModal] handleUpdateStore called with:",{storeInfo:P,editingStore:u,finalStoreValue:y}),await pc(a(i).$id,y)){const ue=new CustomEvent("toast",{detail:{type:"success",message:"Magasin mis à jour avec succès"}});window.dispatchEvent(ue)}})}var ie=Z(),ge=K(ie);{var Ce=P=>{var y=Yu(),q=c(y),ue=c(q),qe=c(ue),Le=c(qe),He=c(Le),k=d(Le,2),F=c(k),Ie=c(F),Re=d(F,2);{var Ne=W=>{var ce=Cu(),U=c(ce);Rc(U,{class:"w-3 h-3"}),h(W,ce)},de=W=>{var ce=Ru(),U=c(ce);Vc(U,{class:"w-3 h-3"});var xt=d(U);B(()=>I(xt,` ${a(i).status??""}`)),h(W,ce)};O(Re,W=>{a(i).status==="active"?W(Ne):W(de,!1)})}var xe=d(Re,2),st=d(c(xe)),Fe=d(qe,2);Fe.__click=function(...W){da?.apply(this,W)};var ar=c(Fe);pt(ar,{class:"w-4 h-4"});var at=d(ue,2),Ke=c(at);Ke.__click=[Ou,E];var $e=c(Ke);yn($e,{class:"w-4 h-4 mr-1"});var it=d($e,2);{var mt=W=>{var ce=Du(),U=c(ce);B(()=>I(U,a(g).length)),h(W,ce)};O(it,W=>{a(g).length>0&&W(mt)})}var gt=d(Ke,2);gt.__click=[qu,E];var dt=c(gt);Tn(dt,{class:"w-4 h-4 mr-1"});var qt=d(dt,2);{var Tt=W=>{var ce=ju(),U=c(ce);B(()=>I(U,a(p).length)),h(W,ce)};O(qt,W=>{a(p).length>0&&W(Tt)})}var Ye=d(gt,2);Ye.__click=[Lu,E];var bt=c(Ye);fs(bt,{class:"w-4 h-4 mr-1"});var jt=d(bt,2);{var Lt=W=>{var ce=Bu(),U=c(ce);B(()=>I(U,a(_).length)),h(W,ce)};O(jt,W=>{a(_).length>0&&W(Lt)})}var Nt=d(Ye,2);Nt.__click=[zu,E];var yt=c(Nt);Nn(yt,{class:"w-4 h-4 mr-1"});var ir=d(yt,2);{var wt=W=>{var ce=Vu(),U=c(ce);B(()=>I(U,a(i).who.length)),h(W,ce)};O(ir,W=>{a(i).who&&a(i).who.length>0&&W(wt)})}var Bt=d(Nt,2);Bt.__click=[Wu,E];var $t=c(Bt);an($t,{class:"w-4 h-4 mr-1"});var St=d(at,2),zt=c(St);{var or=W=>{var ce=Uu(),U=c(ce);pt(U,{class:"w-4 h-4"});var xt=d(U,2),Kt=c(xt);B(()=>I(Kt,`erreur : ${a(l)??""}`)),h(W,ce)};O(zt,W=>{a(l)&&W(or)})}var et=d(zt,2),At=c(et);{var Ht=W=>{var ce=Ku(),U=c(ce),xt=c(U);yn(xt,{class:"w-5 h-5"});var Kt=d(U,2);{var It=re=>{var Be=Gu(),ze=c(Be);yn(ze,{class:"w-12 h-12 mx-auto mb-2"}),h(re,Be)},H=re=>{var Be=Hu(),ze=c(Be),ke=d(c(ze));Je(ke,21,()=>a(g),Me=>Me.recipeName+Me.dateTimeService,(Me,Oe)=>{var be=Qu(),Se=c(be),oe=c(Se),G=d(Se),Ee=c(G),Pe=d(G),Ve=c(Pe),ft=d(Pe),Vt=c(ft),Wt=d(ft),tt=c(Wt),Et=d(Wt),zr=c(Et);B(Vr=>{I(oe,a(Oe).recipeName),I(Ee,`${a(Oe).quantity??""} ${a(Oe).unit??""}`),I(Ve,Vr),I(Vt,a(Oe).horaire||"-"),I(tt,a(Oe).typePlat||"-"),I(zr,a(Oe).assiettes||"-")},[()=>M(a(Oe).dateTimeService)]),h(Me,be)}),h(re,Be)};O(Kt,re=>{a(g).length===0?re(It):re(H,!1)})}h(W,ce)},jr=W=>{var ce=Z(),U=K(ce);{var xt=It=>{su(It,{get product(){return a(i)},get currentProductPurchases(){return a(p)},get loading(){return a(o)},get newPurchase(){return a(f)},onAddPurchase:N,onStartEditPurchase:A,onCancelEditPurchase:j,onSavePurchase:V,onDeletePurchase:z})},Kt=It=>{var H=Z(),re=K(H);{var Be=ke=>{fu(ke,{get product(){return a(i)},get stockEntries(){return a(_)},get loading(){return a(o)},onAddStock:te,onDeleteStock:me})},ze=ke=>{var Me=Z(),Oe=K(Me);{var be=oe=>{wu(oe,{get product(){return a(i)},get editingWho(){return a(S)},get loading(){return a(o)},onAddVolunteer:C,onRemoveVolunteer:D})},Se=oe=>{var G=Z(),Ee=K(G);{var Pe=Ve=>{Mu(Ve,{get product(){return a(i)},get editingStore(){return u},get loading(){return a(o)},onUpdateStore:ae})};O(Ee,Ve=>{a(r)==="magasins"&&Ve(Pe)},!0)}h(oe,G)};O(Oe,oe=>{a(r)==="volontaires"?oe(be):oe(Se,!1)},!0)}h(ke,Me)};O(re,ke=>{a(r)==="stock"?ke(Be):ke(ze,!1)},!0)}h(It,H)};O(U,It=>{a(r)==="achats"?It(xt):It(Kt,!1)},!0)}h(W,ce)};O(At,W=>{a(r)==="recettes"?W(Ht):W(jr,!1)})}var Lr=d(St,2),Br=c(Lr);Br.__click=function(...W){da?.apply(this,W)},B(W=>{I(He,a(i).productName),I(Ie,a(i).productType),I(st,` ${W??""}`),Ae(Ke,1,`tab ${a(r)==="recettes"?"tab-active":""}`),Ae(gt,1,`tab ${a(r)==="achats"?"tab-active":""}`),Ae(Ye,1,`tab ${a(r)==="stock"?"tab-active":""}`),Ae(Nt,1,`tab ${a(r)==="volontaires"?"tab-active":""}`),Ae(Bt,1,`tab ${a(r)==="magasins"?"tab-active":""}`)},[()=>$(a(i).totalNeededConsolidated)]),h(P,y)};O(ge,P=>{a(s)&&a(i)&&P(Ce)})}h(e,ie),X()}sr(["click"]);function xn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Nc};case"animaux":return{displayName:"Viandes et Poissons",icon:$c};case"legumes":return{displayName:"Fruits et Légumes",icon:Ic};case"sucres":return{displayName:"Sucrées",icon:Ac};case"lof":return{displayName:"L.O.F",icon:Dc};case"autres":return{displayName:"Autres",icon:Mc};case"epices":return{displayName:"Assaisonnements",icon:qc};case"frais":return{displayName:"Produits Frais",icon:Lc};default:return{displayName:e,icon:yn}}}function Ju(e,t){return t.sortColumn?[...e].sort((r,n)=>{let s=r[t.sortColumn],i=n[t.sortColumn];return s<i?t.sortDirection==="asc"?-1:1:s>i?t.sortDirection==="asc"?1:-1:0}):e}var Xu=()=>L.setGroupBy("none"),Fu=()=>L.setGroupBy("store"),ed=()=>L.setGroupBy("productType"),td=(e,t)=>L.toggleProductType(t),rd=x("<button><!> </button>"),nd=()=>L.toggleTemperature("frais"),sd=()=>L.toggleTemperature("surgele"),ad=()=>L.clearTypeAndTemperatureFilters(),id=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),od=(e,t)=>L.toggleStore(t),ld=x("<button> </button>"),cd=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),ud=(e,t)=>L.toggleWho(t),dd=x("<button> </button>"),fd=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),vd=(e,t)=>{L.clearFilters(),T(t,!1)},hd=x('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function pd(e,t){J(t,!0);let r=ye(!1);const n=Q(()=>L.filters),s=Q(()=>L.uniqueStores),i=Q(()=>L.uniqueWho),o=Q(()=>L.uniqueProductTypes);var l=hd(),u=K(l),f=c(u),v=d(f,2),_=d(c(v),2),m=c(_),p=c(m),g=c(p);vs(g,{class:"w-5 h-5"});var S=d(p,2),w=c(S);pt(w,{class:"w-4 h-4"});var E=d(m,2),R=d(c(E),2),M=c(R);M.__change=[Xu];var $=d(M,2);$.__change=[Fu];var N=d($,2);N.__change=[ed];var A=d(E,2),j=c(A),V=d(c(j),2);Je(V,20,()=>a(o),k=>k,(k,F)=>{const Ie=Q(()=>xn(F));var Re=rd();Re.__click=[td,F];var Ne=c(Re);gn(Ne,()=>a(Ie).icon,(xe,st)=>{st(xe,{class:"w-3 h-3 mr-1"})});var de=d(Ne);B(xe=>{Ae(Re,1,`btn btn-sm ${xe??""}`),I(de,` ${a(Ie).displayName??""}`)},[()=>a(n).selectedProductTypes.length===0?"btn-soft btn-accent":a(n).selectedProductTypes.includes(F)?"btn-accent":"btn-dash btn-accent"]),h(k,Re)});var z=d(V,2),te=c(z);te.__click=[nd];var me=c(te);wn(me,{class:"w-3 h-3"});var C=d(te,2);C.__click=[sd];var D=c(C);Sn(D,{class:"w-3 h-3"});var ae=d(C,2);{var ie=k=>{var F=id();F.__click=[ad];var Ie=c(F);pt(Ie,{class:"w-3 h-3"}),h(k,F)};O(ae,k=>{(a(n).selectedProductTypes.length>0||a(n).selectedTemperatures.length>0)&&k(ie)})}var ge=d(A,2);{var Ce=k=>{var F=cd(),Ie=c(F),Re=d(c(Ie),2);Je(Re,20,()=>a(s),Ne=>Ne,(Ne,de)=>{var xe=ld();xe.__click=[od,de];var st=c(xe);B(Fe=>{Ae(xe,1,`btn btn-sm ${Fe??""}`),I(st,de)},[()=>a(n).selectedStores.length===0?"btn-soft btn-accent":a(n).selectedStores.includes(de)?"btn-accent":"btn-dash btn-accent"]),h(Ne,xe)}),h(k,F)};O(ge,k=>{a(s).length>0&&k(Ce)})}var P=d(ge,2);{var y=k=>{var F=fd(),Ie=c(F),Re=d(c(Ie),2);Je(Re,20,()=>a(i),Ne=>Ne,(Ne,de)=>{var xe=dd();xe.__click=[ud,de];var st=c(xe);B(Fe=>{Ae(xe,1,`btn btn-sm ${Fe??""}`),I(st,de)},[()=>a(n).selectedWho.length===0?"btn-soft btn-accent":a(n).selectedWho.includes(de)?"btn-accent":"btn-dash btn-accent"]),h(Ne,xe)}),h(k,F)};O(P,k=>{a(i).length>0&&k(y)})}var q=d(P,4);q.__click=[vd,r];var ue=c(q);pt(ue,{class:"w-4 h-4 mr-2"});var qe=d(u,2),Le=c(qe),He=c(Le);vs(He,{class:"w-6 h-6"}),B((k,F)=>{Tr(M,a(n).groupBy==="none"),Tr($,a(n).groupBy==="store"),Tr(N,a(n).groupBy==="productType"),Ae(te,1,`btn btn-sm ${k??""}`),Ae(C,1,`btn btn-sm ${F??""}`)},[()=>a(n).selectedTemperatures.length===0?"btn-soft btn-success":a(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(n).selectedTemperatures.length===0?"btn-soft btn-info":a(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),El(f,()=>a(r),k=>T(r,k)),h(e,l),X()}sr(["change","click"]);var _d=()=>L.clearFilters(),md=e=>L.setSearchQuery(e.currentTarget.value),gd=()=>L.setGroupBy("none"),bd=()=>L.setGroupBy("store"),yd=()=>L.setGroupBy("productType"),wd=(e,t)=>L.toggleProductType(t),Sd=x("<button><!> </button>"),xd=()=>L.toggleTemperature("frais"),Ed=()=>L.toggleTemperature("surgele"),Pd=()=>L.clearTypeAndTemperatureFilters(),kd=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Td=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),Nd=(e,t)=>L.toggleStore(t),$d=x("<button><!> </button>"),Ad=()=>L.clearStoreFilters(),Id=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Md=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Cd=(e,t)=>L.toggleWho(t),Rd=x("<button><!> </button>"),Od=()=>L.clearWhoFilters(),Dd=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),qd=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),jd=()=>L.handleSort("productName"),Ld=()=>L.handleSort("store"),Bd=()=>L.handleSort("who"),zd=()=>L.handleSort("productType"),Vd=x('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Wd=x('<tr class="bg-base-200 font-semibold sticky top-10 z-10"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),Ud=(e,t,r)=>t("recettes",a(r).$id),Gd=x('<div class="text-xs text-base-content/60"> </div>'),Qd=x('<div class="w-7 h-7 bg-success/20 rounded-full flex items-center justify-center"><!></div>'),Hd=x('<div class="w-7 h-7 bg-info/20 rounded-full flex items-center justify-center"><!></div>'),Kd=(e,t,r)=>t("magasins",a(r).$id),Yd=x('<div class="tooltip tooltip-info"> </div>'),Zd=(e,t,r)=>t("volontaires",a(r).$id),Jd=x('<span class="badge badge-soft badge-info badge-sm"> </span>'),Xd=x('<div class="flex flex-wrap gap-1 pr-8"></div>'),Fd=x('<div class="text-xs text-base-content/70 flex gap-2 items-center justify-center"><!> <span class="text-center "> </span> <span class="text-center "> </span></div>'),ef=(e,t,r)=>t("achats",a(r).$id),tf=x('<div class="bg-warning px-2 py-1 rounded m-auto"> </div>'),rf=x('<tr class="hover:bg-base-200/20 transition-colors"><td class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="text-center font-semibold"><div class="pb-1 text-center font-semibold"> </div> <!></td><td class="text-center font-medium cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="relative group text-center"><!></td></tr>'),nf=x("<!> <!>",1),sf=x('<div class="text-center py-8"><div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),af=x('<div class="space-y-6"><div class="flex flex-wrap gap-2 items-center"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="flex  md:mb-4 justify-between mb-4 flex-wrap items-center gap-4 "><div class="form-control "><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input input-bordered flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="flex mt-4"><!></div> <div class="flex flex-col lg:flex-row gap-6 mt-4"><!> <!></div></div></div> <div class="hidden md:block bg-base-100 rounded-lg "><table class="table w-full"><thead class="sticky top-0 z-10 bg-base-200"><tr class="bg-base-200"><th class="cursor-pointer hover:bg-base-100 text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="cursor-pointer hover:bg-base-100 text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function of(e,t){J(t,!0);const r=Q(()=>L.filteredProducts),n=Q(()=>L.groupedFormattedProducts),s=Q(()=>L.stats),i=Q(()=>L.uniqueStores),o=Q(()=>L.uniqueWho),l=Q(()=>L.uniqueProductTypes),u=Q(()=>L.filters);function f(H,re){Gc(H,re)}var v=af(),_=K(v),m=c(_),p=c(m),g=c(p);ua(g,{class:"w-4 h-4 mr-1"});var S=d(g),w=d(p,2),E=c(w);wn(E,{class:"w-4 h-4 mr-1"});var R=d(E),M=d(w,2),$=c(M);Sn($,{class:"w-4 h-4 mr-1"});var N=d($),A=d(M,2),j=c(A);Oc(j,{class:"w-4 h-4 mr-1"});var V=d(j),z=d(m,2),te=c(z),me=c(te),C=c(me),D=c(C);vs(D,{class:"w-5 h-5"});var ae=d(C,2);ae.__click=[_d];var ie=c(ae);pt(ie,{class:"w-4 h-4"});var ge=d(te,2),Ce=c(ge),P=d(c(Ce),2),y=c(P);zc(y,{class:"w-4 h-4"});var q=d(y,2);q.__input=[md];var ue=d(Ce,2),qe=d(c(ue),2),Le=c(qe);Le.__change=[gd];var He=d(Le,2);He.__change=[bd];var k=d(He,2);k.__change=[yd];var F=d(ge,2),Ie=c(F),Re=c(Ie);{var Ne=H=>{var re=Td(),Be=c(re),ze=d(c(Be),2),ke=c(ze);Je(ke,16,()=>a(l),Ee=>Ee,(Ee,Pe)=>{const Ve=Q(()=>xn(Pe));var ft=Sd();ft.__click=[wd,Pe];var Vt=c(ft);gn(Vt,()=>a(Ve).icon,(tt,Et)=>{Et(tt,{class:"w-5 h-5 mr-1"})});var Wt=d(Vt);B(tt=>{Ae(ft,1,`btn btn-sm ${tt??""}`),I(Wt,` ${a(Ve).displayName??""}`)},[()=>a(u).selectedProductTypes.length===0?"btn-soft btn-accent":a(u).selectedProductTypes.includes(Pe)?"btn-accent":"btn-dash btn-accent"]),h(Ee,ft)});var Me=d(ke,2);Me.__click=[xd];var Oe=c(Me);wn(Oe,{class:"w-5 h-5"});var be=d(Me,2);be.__click=[Ed];var Se=c(be);Sn(Se,{class:"w-5 h-5"});var oe=d(be,2);{var G=Ee=>{var Pe=kd();Pe.__click=[Pd];var Ve=c(Pe);pt(Ve,{class:"w-3 h-3"}),h(Ee,Pe)};O(oe,Ee=>{(a(u).selectedProductTypes.length>0||a(u).selectedTemperatures.length>0)&&Ee(G)})}B((Ee,Pe)=>{Ae(Me,1,`btn btn-sm ${Ee??""}`),Ae(be,1,`btn btn-sm ${Pe??""}`)},[()=>a(u).selectedTemperatures.length===0?"btn-soft btn-success":a(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(u).selectedTemperatures.length===0?"btn-soft btn-info":a(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(H,re)};O(Re,H=>{a(l).length>0&&H(Ne)})}var de=d(Ie,2),xe=c(de);{var st=H=>{var re=Md(),Be=c(re),ze=d(c(Be),2),ke=c(ze);Je(ke,16,()=>a(i),be=>be,(be,Se)=>{var oe=$d();oe.__click=[Nd,Se];var G=c(oe);an(G,{class:"w-3 h-3 mr-1"});var Ee=d(G);B(Pe=>{Ae(oe,1,`btn btn-xs ${Pe??""}`),I(Ee,` ${Se??""}`)},[()=>a(u).selectedStores.length===0?"btn-soft btn-accent":a(u).selectedStores.includes(Se)?"btn-accent":"btn-dash btn-accent"]),h(be,oe)});var Me=d(ke,2);{var Oe=be=>{var Se=Id();Se.__click=[Ad];var oe=c(Se);pt(oe,{class:"w-3 h-3"}),h(be,Se)};O(Me,be=>{a(u).selectedStores.length>0&&be(Oe)})}h(H,re)};O(xe,H=>{a(i).length>0&&H(st)})}var Fe=d(xe,2);{var ar=H=>{var re=qd(),Be=c(re),ze=d(c(Be),2),ke=c(ze);Je(ke,16,()=>a(o),be=>be,(be,Se)=>{var oe=Rd();oe.__click=[Cd,Se];var G=c(oe);Wc(G,{class:"w-3 h-3 mr-1"});var Ee=d(G);B(Pe=>{Ae(oe,1,`btn btn-xs ${Pe??""}`),I(Ee,` ${Se??""}`)},[()=>a(u).selectedWho.length===0?" btn-soft btn-info":a(u).selectedWho.includes(Se)?" btn-info":"btn-dash btn-info"]),h(be,oe)});var Me=d(ke,2);{var Oe=be=>{var Se=Dd();Se.__click=[Od];var oe=c(Se);pt(oe,{class:"w-3 h-3"}),h(be,Se)};O(Me,be=>{a(u).selectedWho.length>0&&be(Oe)})}h(H,re)};O(Fe,H=>{a(o).length>0&&H(ar)})}var at=d(z,2),Ke=c(at),$e=c(Ke),it=c($e),mt=c(it);mt.__click=[jd];var gt=c(mt),dt=c(gt);ua(dt,{class:"w-4 h-4"});var qt=d(dt,2);{var Tt=H=>{var re=lt();B(()=>I(re,a(u).sortDirection==="asc"?"↑":"↓")),h(H,re)};O(qt,H=>{a(u).sortColumn==="productName"&&H(Tt)})}var Ye=d(mt);Ye.__click=[Ld];var bt=c(Ye),jt=c(bt);an(jt,{class:"w-4 h-4"});var Lt=d(jt,2);{var Nt=H=>{var re=lt();B(()=>I(re,a(u).sortDirection==="asc"?"↑":"↓")),h(H,re)};O(Lt,H=>{a(u).sortColumn==="store"&&H(Nt)})}var yt=d(Ye);yt.__click=[Bd];var ir=c(yt),wt=c(ir);Nn(wt,{class:"w-4 h-4"});var Bt=d(wt,2);{var $t=H=>{var re=lt();B(()=>I(re,a(u).sortDirection==="asc"?"↑":"↓")),h(H,re)};O(Bt,H=>{a(u).sortColumn==="who"&&H($t)})}var St=d(yt);St.__click=[zd];var zt=c(St),or=d(c(zt));{var et=H=>{var re=lt();B(()=>I(re,a(u).sortDirection==="asc"?"↑":"↓")),h(H,re)};O(or,H=>{a(u).sortColumn==="productType"&&H(et)})}var At=d(St,2),Ht=c(At),jr=c(Ht);Tn(jr,{class:"w-4 h-4"});var Lr=d(At),Br=c(Lr),W=c(Br);jc(W,{class:"w-4 h-4"});var ce=d($e);Je(ce,21,()=>Object.entries(a(n)),([H,re])=>H,(H,re)=>{var Be=Q(()=>_a(a(re),2));let ze=()=>a(Be)[0],ke=()=>a(Be)[1];var Me=nf(),Oe=K(Me);{var be=oe=>{const G=Q(()=>xn(ze()));var Ee=Wd(),Pe=c(Ee),Ve=c(Pe),ft=c(Ve);{var Vt=tt=>{var Et=lt();B(()=>I(Et,`🏪 ${ze()??""} (${ke().length??""})`)),h(tt,Et)},Wt=tt=>{var Et=Z(),zr=K(Et);{var Vr=Yt=>{var lr=Vd(),un=c(lr);gn(un,()=>a(G).icon,(zn,Vn)=>{Vn(zn,{class:"w-4 h-4"})});var dn=d(un,2),Bn=c(dn),Sr=d(dn,2),fn=c(Sr);B(()=>{I(Bn,a(G).displayName),I(fn,`(${ke().length??""})`)}),h(Yt,lr)},cn=Yt=>{var lr=lt();B(()=>I(lr,`📦 ${ze()??""} (${ke().length??""})`)),h(Yt,lr)};O(zr,Yt=>{a(u).groupBy==="productType"?Yt(Vr):Yt(cn,!1)},!0)}h(tt,Et)};O(ft,tt=>{a(u).groupBy==="store"?tt(Vt):tt(Wt,!1)})}h(oe,Ee)};O(Oe,oe=>{ze()!==""&&oe(be)})}var Se=d(Oe,2);Je(Se,17,()=>Ju(ke(),a(u)),oe=>oe.$id,(oe,G)=>{const Ee=Q(()=>xn(a(G).productType));var Pe=rf(),Ve=c(Pe);Ve.__click=[Ud,f,G];var ft=c(Ve),Vt=c(ft),Wt=c(Vt),tt=c(Wt),Et=d(Wt,2);{var zr=Y=>{var he=Gd(),We=c(he);B(()=>I(We,`Ancien: ${a(G).previousNames[0]??""}`)),h(Y,he)};O(Et,Y=>{a(G).previousNames&&a(G).previousNames.length>0&&Y(zr)})}var Vr=d(Vt,2),cn=c(Vr);{var Yt=Y=>{var he=Qd(),We=c(he);wn(We,{class:"w-4 h-4 text-success"}),h(Y,he)};O(cn,Y=>{a(G).pFrais&&Y(Yt)})}var lr=d(cn,2);{var un=Y=>{var he=Hd(),We=c(he);Sn(We,{class:"w-4 h-4 text-info"}),h(Y,he)};O(lr,Y=>{a(G).pSurgel&&Y(un)})}var dn=d(ft,2),Bn=c(dn);Hr(Bn,{class:"w-4 h-4 text-amber-600"});var Sr=d(Ve);Sr.__click=[Kd,f,G];var fn=c(Sr);{var zn=Y=>{var he=Yd(),We=c(he);B(()=>{os(he,"data-tip",a(G).storeInfo.storeComment),I(We,a(G).storeInfo.storeName||"-")}),h(Y,he)},Vn=Y=>{var he=lt();B(()=>I(he,a(G).storeInfo?.storeName||"-")),h(Y,he)};O(fn,Y=>{a(G).storeInfo?.storeComment?Y(zn):Y(Vn,!1)})}var Ei=d(fn,2),Pi=c(Ei);Hr(Pi,{class:"w-4 h-4 text-amber-600"});var Wn=d(Sr);Wn.__click=[Zd,f,G];var Ns=c(Wn);{var ki=Y=>{var he=Xd();Je(he,20,()=>a(G).who,We=>We,(We,vn)=>{var hn=Jd(),Qn=c(hn);B(()=>I(Qn,vn)),h(We,hn)}),h(Y,he)},Ti=Y=>{var he=lt("-");h(Y,he)};O(Ns,Y=>{a(G).who&&a(G).who.length>0?Y(ki):Y(Ti,!1)})}var Ni=d(Ns,2),$i=c(Ni);Hr($i,{class:"w-4 h-4 text-amber-600"});var Un=d(Wn),Ai=c(Un),$s=c(Ai);gn($s,()=>a(Ee).icon,(Y,he)=>{he(Y,{class:"w-3 h-3"})});var Ii=d($s),As=d(Un),Is=c(As),Mi=c(Is),Ci=d(Is,2);{var Ri=Y=>{var he=Fd(),We=c(he);Uc(We,{class:"w-3 h-3"});var vn=d(We,2),hn=c(vn),Qn=d(vn,2),zi=c(Qn);B(()=>{I(hn,`${a(G)?.nbRecipes??""} r.`),I(zi,`${a(G)?.totalAssiettes??""} c.`)}),h(Y,he)};O(Ci,Y=>{(a(G).nbRecipes||a(G).totalAssiettes)&&Y(Ri)})}var Gn=d(As);Gn.__click=[ef,f,G];var Ms=c(Gn),Oi=d(Ms),Di=c(Oi);Hr(Di,{class:"w-4 h-4 text-amber-600"});var qi=d(Gn),ji=c(qi);{var Li=Y=>{var he=tf(),We=c(he);B(()=>I(We,a(G).displayMissingQuantity)),h(Y,he)},Bi=Y=>{Cc(Y,{size:28,strokeWidth:3,class:"text-success m-auto"})};O(ji,Y=>{a(G).displayMissingQuantity!=="✅ Complet"?Y(Li):Y(Bi,!1)})}B(()=>{I(tt,a(G).productName),Ae(Sr,1,`${a(u).groupBy==="store"?"hidden":""} cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded font-medium relative group`),Ae(Un,1,a(u).groupBy==="productType"?"hidden":""),I(Ii,` ${a(Ee).displayName??""}`),I(Mi,a(G).displayTotalNeeded||"-"),I(Ms,`${(a(G).displayTotalPurchases||"-")??""} `)}),h(oe,Pe)}),h(H,Me)});var U=d(Ke,2);{var xt=H=>{var re=sf();h(H,re)};O(U,H=>{a(r).length===0&&H(xt)})}var Kt=d(_,2);Zu(Kt,{});var It=d(Kt,2);pd(It,{}),B(()=>{I(S,` ${a(s).total??""}`),I(R,` frais:
      ${a(s).frais??""}`),I(N,` surgelés:
      ${a(s).surgel??""}`),I(V,` fusionnés:
      ${a(s).merged??""}`),wl(q,a(u).searchQuery),Tr(Le,a(u).groupBy==="none"),Tr(He,a(u).groupBy==="store"),Tr(k,a(u).groupBy==="productType"),Ae(Ye,1,`cursor-pointer hover:bg-base-100 text-center ${a(u).groupBy==="store"?"hidden":""}`),Ae(St,1,`cursor-pointer hover:bg-base-100 text-center ${a(u).groupBy==="productType"?"hidden":""}`)}),h(e,v),X()}sr(["click","input","change"]);Eo();var lf=x('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function cf(e){var t=lf();h(e,t)}var uf=x('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function df(e,t){var r=uf(),n=d(c(r),2),s=d(c(n),2),i=c(s);B(()=>I(i,t.message)),h(e,r)}var ff=x('<div class="flex items-center gap-2 text-success"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),vf=x('<div class="flex items-center gap-2 text-info"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),hf=x('<div class="text-base-content/60"> </div>'),pf=x('<div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),_f=x('<div class="min-h-screen bg-base-100"><header class="sticky top-0 z-10 bg-base-200 shadow-sm"><div class="container mx-auto px-4 py-4"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-base-content">Produits</h1> <p class="text-sm text-base-content/70"> </p></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function mf(e,t){J(t,!0);let r,n=ye(null);ai(async()=>{r=dc();try{await L.initialize(r)}catch(C){T(n,C instanceof Error?C.message:"Erreur lors de l'initialisation",!0),console.error("[App] Erreur initialisation:",C)}}),Nl(()=>{L.destroy()});const s=Q(()=>a(n)||L.error),i=Q(()=>L.loading&&L.products.length===0);var o=_f(),l=c(o),u=c(l),f=c(u),v=c(f),_=d(c(v),2),m=c(_),p=d(v,2),g=c(p);{var S=C=>{var D=ff();h(C,D)};O(g,C=>{L.realtimeConnected&&C(S)})}var w=d(g,2);{var E=C=>{var D=vf();h(C,D)};O(w,C=>{L.syncing&&C(E)})}var R=d(w,2);{var M=C=>{var D=hf(),ae=c(D);B(ie=>I(ae,`Maj: ${ie??""}`),[()=>new Date(L.lastSync).toLocaleTimeString()]),h(C,D)};O(R,C=>{L.lastSync&&C(M)})}var $=d(l,2),N=c($);{var A=C=>{df(C,{get message(){return a(s)}})};O(N,C=>{a(s)&&C(A)})}var j=d(N,2);{var V=C=>{cf(C)};O(j,C=>{a(i)&&C(V)})}var z=d(j,2);{var te=C=>{of(C,{})},me=C=>{var D=Z(),ae=K(D);{var ie=ge=>{var Ce=pf();h(ge,Ce)};O(ae,ge=>{L.loading||ge(ie)},!0)}h(C,D)};O(z,C=>{L.products.length>0?C(te):C(me,!1)})}B(()=>I(m,`Liste: ${r??""}`)),h(e,o),X()}ll(mf,{target:document.getElementById("app_products")});
