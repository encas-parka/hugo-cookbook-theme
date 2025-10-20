(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const ua=!1;var An=Array.isArray,Oi=Array.prototype.indexOf,fs=Array.from,Fn=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,qi=Object.getOwnPropertyDescriptors,Bi=Object.prototype,Li=Array.prototype,da=Object.getPrototypeOf,$s=Object.isExtensible;function Ur(e){return typeof e=="function"}const le=()=>{};function ji(e){for(var t=0;t<e.length;t++)e[t]()}function fa(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function va(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const nt=2,vs=4,hs=8,gr=16,Ht=32,br=64,ps=128,_t=256,En=512,Qe=1024,ut=2048,sr=4096,kt=8192,yr=16384,_s=32768,wr=65536,Is=1<<17,zi=1<<18,Dr=1<<19,Vi=1<<20,es=1<<21,$n=1<<22,hr=1<<23,pr=Symbol("$state"),ha=Symbol("legacy props"),Wi=Symbol(""),Yr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function pa(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ui(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Gi(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qi(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Hi(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Ki(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Yi(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Zi(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ji(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Xi(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Fi(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const In=1,Mn=2,_a=4,eo=8,to=16,ro=1,no=2,so=4,ao=8,io=16,oo=1,lo=2,Oe=Symbol(),co="http://www.w3.org/1999/xhtml",uo="http://www.w3.org/2000/svg",fo="@attach";function vo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function ho(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let po=!1;function ma(e){return e===this.v}function _o(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ga(e){return!_o(e,this.v)}let Or=!1,mo=!1;function go(){Or=!0}let Te=null;function Ar(e){Te=e}function Z(e,t=!1,r){Te={p:Te,c:null,e:null,s:e,x:null,l:Or&&!t?{s:null,u:null,$:[]}:null}}function J(e){var t=Te,r=t.e;if(r!==null){t.e=null;for(var n of r)Ra(n)}return Te=t.p,{}}function on(){return!Or||Te!==null&&Te.l===null}let vr=[];function ba(){var e=vr;vr=[],ji(e)}function _r(e){if(vr.length===0&&!Zr){var t=vr;queueMicrotask(()=>{t===vr&&ba()})}vr.push(e)}function bo(){for(;vr.length>0;)ba()}const yo=new WeakMap;function ya(e){var t=F;if(t===null)return re.f|=hr,e;if((t.f&_s)===0){if((t.f&ps)===0)throw!t.parent&&e instanceof Error&&wa(e),e;t.b.error(e)}else $r(e,t)}function $r(e,t){for(;t!==null;){if((t.f&ps)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&wa(e),e}function wa(e){const t=yo.get(e);t&&(Fn(e,"message",{value:t.message}),Fn(e,"stack",{value:t.stack}))}const pn=new Set;let we=null,mn=null,ts=new Set,Rt=[],Cn=null,rs=!1,Zr=!1;class ht{current=new Map;#t=new Map;#r=new Set;#l=0;#c=null;#a=[];#s=[];#i=[];#n=[];#o=[];#u=[];skipped_effects=new Set;process(t){Rt=[],mn=null;var r=ht.apply(this);for(const a of t)this.#d(a);if(this.#l===0){this.#e();var n=this.#s,s=this.#i;this.#s=[],this.#i=[],this.#n=[],mn=this,we=null,Ms(n),Ms(s),mn=null,this.#c?.resolve()}else this.#f(this.#s),this.#f(this.#i),this.#f(this.#n);r();for(const a of this.#a)en(a);this.#a=[]}#d(t){t.f^=Qe;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Ht|br))!==0,a=s&&(n&Qe)!==0,o=a||(n&kt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=Qe:(n&vs)!==0?this.#i.push(r):(n&Qe)===0&&((n&$n)!==0&&r.b?.is_pending()?this.#a.push(r):qn(r)&&((r.f&gr)!==0&&this.#n.push(r),en(r)));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#f(t){for(const r of t)((r.f&ut)!==0?this.#o:this.#u).push(r),Xe(r,Qe);t.length=0}capture(t,r){this.#t.has(t)||this.#t.set(t,r),this.current.set(t,t.v)}activate(){we=this}deactivate(){we=null}flush(){if(Rt.length>0){if(this.activate(),Sa(),we!==null&&we!==this)return}else this.#l===0&&this.#e();this.deactivate();for(const t of ts)if(ts.delete(t),t(),we!==null)break}#e(){for(const t of this.#r)t();if(this.#r.clear(),pn.size>1){this.#t.clear();let t=!0;for(const r of pn){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;xa(n)}if(Rt.length>0){we=r;const n=ht.apply(r);for(const s of Rt)r.#d(s);Rt=[],n()}}we=null}pn.delete(this)}increment(){this.#l+=1}decrement(){this.#l-=1;for(const t of this.#o)Xe(t,ut),mr(t);for(const t of this.#u)Xe(t,sr),mr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#c??=fa()).promise}static ensure(){if(we===null){const t=we=new ht;pn.add(we),Zr||ht.enqueue(()=>{we===t&&t.flush()})}return we}static enqueue(t){_r(t)}static apply(t){return le}}function wo(e){var t=Zr;Zr=!0;try{for(var r;;){if(bo(),Rt.length===0&&(we?.flush(),Rt.length===0))return Cn=null,r;Sa()}}finally{Zr=t}}function Sa(){var e=Tr;rs=!0;try{var t=0;for(Os(!0);Rt.length>0;){var r=ht.ensure();if(t++>1e3){var n,s;So()}r.process(Rt),er.clear()}}finally{rs=!1,Os(e),Cn=null}}function So(){try{Ki()}catch(e){$r(e,Cn)}}let fr=null;function Ms(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(yr|kt))===0&&qn(n)&&(fr=[],en(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?qa(n):n.fn=null),fr?.length>0)){er.clear();for(const s of fr)en(s);fr=[]}}fr=null}}function xa(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&nt)!==0?xa(t):(r&($n|gr))!==0&&(Xe(t,ut),mr(t))}}function mr(e){for(var t=Cn=e;t.parent!==null;){t=t.parent;var r=t.f;if(rs&&t===F&&(r&gr)!==0)return;if((r&(br|Ht))!==0){if((r&Qe)===0)return;t.f^=Qe}}Rt.push(t)}function xo(e){let t=0,r=rr(0),n;return()=>{Lo()&&(i(r),Ss(()=>(t===0&&(n=qr(()=>e(()=>Dt(r)))),t+=1,()=>{_r(()=>{t-=1,t===0&&(n?.(),n=void 0,Dt(r))})})))}}var Eo=wr|Dr|ps;function Po(e,t,r){new ko(e,t,r)}class ko{parent;#t=!1;#r;#l=null;#c;#a;#s;#i=null;#n=null;#o=null;#u=null;#d=0;#f=0;#e=!1;#v=null;#g=()=>{this.#v&&Ir(this.#v,this.#d)};#b=xo(()=>(this.#v=rr(this.#d),()=>{this.#v=null}));constructor(t,r,n){this.#r=t,this.#c=r,this.#a=n,this.parent=F.b,this.#t=!!this.#c.pending,this.#s=ir(()=>{F.b=this;{try{this.#i=Ge(()=>n(this.#r))}catch(s){this.error(s)}this.#f>0?this.#_():this.#t=!1}},Eo)}#S(){try{this.#i=Ge(()=>this.#a(this.#r))}catch(t){this.error(t)}this.#t=!1}#x(){const t=this.#c.pending;t&&(this.#n=Ge(()=>t(this.#r)),ht.enqueue(()=>{this.#i=this.#p(()=>(ht.ensure(),Ge(()=>this.#a(this.#r)))),this.#f>0?this.#_():(tr(this.#n,()=>{this.#n=null}),this.#t=!1)}))}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#c.pending}#p(t){var r=F,n=re,s=Te;qt(this.#s),rt(this.#s),Ar(this.#s.ctx);try{return t()}catch(a){return ya(a),null}finally{qt(r),rt(n),Ar(s)}}#_(){const t=this.#c.pending;this.#i!==null&&(this.#u=document.createDocumentFragment(),To(this.#i,this.#u)),this.#n===null&&(this.#n=Ge(()=>t(this.#r)))}#y(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#y(t);return}this.#f+=t,this.#f===0&&(this.#t=!1,this.#n&&tr(this.#n,()=>{this.#n=null}),this.#u&&(this.#r.before(this.#u),this.#u=null),_r(()=>{ht.ensure().flush()}))}update_pending_count(t){this.#y(t),this.#d+=t,ts.add(this.#g)}get_effect_pending(){return this.#b(),i(this.#v)}error(t){var r=this.#c.onerror;let n=this.#c.failed;if(this.#e||!r&&!n)throw t;this.#i&&(Be(this.#i),this.#i=null),this.#n&&(Be(this.#n),this.#n=null),this.#o&&(Be(this.#o),this.#o=null);var s=!1,a=!1;const o=()=>{if(s){ho();return}s=!0,a&&Fi(),ht.ensure(),this.#d=0,this.#o!==null&&tr(this.#o,()=>{this.#o=null}),this.#t=this.has_pending_snippet(),this.#i=this.#p(()=>(this.#e=!1,Ge(()=>this.#a(this.#r)))),this.#f>0?this.#_():this.#t=!1};var l=re;try{rt(null),a=!0,r?.(t,o),a=!1}catch(u){$r(u,this.#s&&this.#s.parent)}finally{rt(l)}n&&_r(()=>{this.#o=this.#p(()=>{this.#e=!0;try{return Ge(()=>{n(this.#r,()=>t,()=>o)})}catch(u){return $r(u,this.#s.parent),null}finally{this.#e=!1}})})}}function To(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:ln(r);t.append(r),r=s}}function Ea(e,t,r){const n=on()?Rn:ms;if(t.length===0){r(e.map(n));return}var s=we,a=F,o=No();Promise.all(t.map(l=>Ao(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(u){(a.f&yr)===0&&$r(u,a)}s?.deactivate(),Pa()}).catch(l=>{$r(l,a)})}function No(){var e=F,t=re,r=Te,n=we;return function(){qt(e),rt(t),Ar(r),n?.activate()}}function Pa(){qt(null),rt(null),Ar(null)}function Rn(e){var t=nt|ut,r=re!==null&&(re.f&nt)!==0?re:null;return F===null||r!==null&&(r.f&_t)!==0?t|=_t:F.f|=Dr,{ctx:Te,deps:null,effects:null,equals:ma,f:t,fn:e,reactions:null,rv:0,v:Oe,wv:0,parent:r??F,ac:null}}function Ao(e,t){let r=F;r===null&&Ui();var n=r.b,s=void 0,a=rr(Oe),o=!re,l=new Map;return zo(()=>{var u=fa();s=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(m){u.reject(m)}var f=we,v=n.is_pending();o&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(Yr),l.set(f,u)));const _=(m,p=void 0)=>{v||f.activate(),p?p!==Yr&&(a.f|=hr,Ir(a,p)):((a.f&hr)!==0&&(a.f^=hr),Ir(a,m)),o&&(n.update_pending_count(-1),v||f.decrement()),Pa()};u.promise.then(_,m=>_(null,m||"unknown"))}),Ma(()=>{for(const u of l.values())u.reject(Yr)}),new Promise(u=>{function f(v){function _(){v===s?u(a):f(s)}v.then(_,_)}f(s)})}function ie(e){const t=Rn(e);return ja(t),t}function ms(e){const t=Rn(e);return t.equals=ga,t}function ka(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Be(t[r])}}function $o(e){for(var t=e.parent;t!==null;){if((t.f&nt)===0)return t;t=t.parent}return null}function gs(e){var t,r=F;qt($o(e));try{ka(e),t=Ua(e)}finally{qt(r)}return t}function Ta(e){var t=gs(e);if(e.equals(t)||(e.v=t,e.wv=Va()),!Sr){var r=(Xt||(e.f&_t)!==0)&&e.deps!==null?sr:Qe;Xe(e,r)}}const er=new Map;function rr(e,t){var r={f:0,v:e,reactions:null,equals:ma,rv:0,wv:0};return r}function ue(e,t){const r=rr(e);return ja(r),r}function Io(e,t=!1,r=!0){const n=rr(e);return t||(n.equals=ga),Or&&r&&Te!==null&&Te.l!==null&&(Te.l.s??=[]).push(n),n}function k(e,t,r=!1){re!==null&&(!Pt||(re.f&Is)!==0)&&on()&&(re.f&(nt|gr|$n|Is))!==0&&!Gt?.includes(e)&&Xi();let n=r?ct(t):t;return Ir(e,n)}function Ir(e,t){if(!e.equals(t)){var r=e.v;Sr?er.set(e,t):er.set(e,r),e.v=t;var n=ht.ensure();n.capture(e,r),(e.f&nt)!==0&&((e.f&ut)!==0&&gs(e),Xe(e,(e.f&_t)===0?Qe:sr)),e.wv=Va(),Na(e,ut),on()&&F!==null&&(F.f&Qe)!==0&&(F.f&(Ht|br))===0&&(vt===null?Uo([e]):vt.push(e))}return t}function Dt(e){k(e,e.v+1)}function Na(e,t){var r=e.reactions;if(r!==null)for(var n=on(),s=r.length,a=0;a<s;a++){var o=r[a],l=o.f;if(!(!n&&o===F)){var u=(l&ut)===0;u&&Xe(o,t),(l&nt)!==0?Na(o,sr):u&&((l&gr)!==0&&fr!==null&&fr.push(o),mr(o))}}}function ct(e){if(typeof e!="object"||e===null||pr in e)return e;const t=da(e);if(t!==Bi&&t!==Li)return e;var r=new Map,n=An(e),s=ue(0),a=Qt,o=l=>{if(Qt===a)return l();var u=re,f=Qt;rt(null),Bs(a);var v=l();return rt(u),Bs(f),v};return n&&r.set("length",ue(e.length)),new Proxy(e,{defineProperty(l,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Zi();var v=r.get(u);return v===void 0?v=o(()=>{var _=ue(f.value);return r.set(u,_),_}):k(v,f.value,!0),!0},deleteProperty(l,u){var f=r.get(u);if(f===void 0){if(u in l){const v=o(()=>ue(Oe));r.set(u,v),Dt(s)}}else k(f,Oe),Dt(s);return!0},get(l,u,f){if(u===pr)return e;var v=r.get(u),_=u in l;if(v===void 0&&(!_||Ft(l,u)?.writable)&&(v=o(()=>{var p=ct(_?l[u]:Oe),g=ue(p);return g}),r.set(u,v)),v!==void 0){var m=i(v);return m===Oe?void 0:m}return Reflect.get(l,u,f)},getOwnPropertyDescriptor(l,u){var f=Reflect.getOwnPropertyDescriptor(l,u);if(f&&"value"in f){var v=r.get(u);v&&(f.value=i(v))}else if(f===void 0){var _=r.get(u),m=_?.v;if(_!==void 0&&m!==Oe)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(l,u){if(u===pr)return!0;var f=r.get(u),v=f!==void 0&&f.v!==Oe||Reflect.has(l,u);if(f!==void 0||F!==null&&(!v||Ft(l,u)?.writable)){f===void 0&&(f=o(()=>{var m=v?ct(l[u]):Oe,p=ue(m);return p}),r.set(u,f));var _=i(f);if(_===Oe)return!1}return v},set(l,u,f,v){var _=r.get(u),m=u in l;if(n&&u==="length")for(var p=f;p<_.v;p+=1){var g=r.get(p+"");g!==void 0?k(g,Oe):p in l&&(g=o(()=>ue(Oe)),r.set(p+"",g))}if(_===void 0)(!m||Ft(l,u)?.writable)&&(_=o(()=>ue(void 0)),k(_,ct(f)),r.set(u,_));else{m=_.v!==Oe;var S=o(()=>ct(f));k(_,S)}var w=Reflect.getOwnPropertyDescriptor(l,u);if(w?.set&&w.set.call(v,f),!m){if(n&&typeof u=="string"){var E=r.get("length"),R=Number(u);Number.isInteger(R)&&R>=E.v&&k(E,R+1)}Dt(s)}return!0},ownKeys(l){i(s);var u=Reflect.ownKeys(l).filter(_=>{var m=r.get(_);return m===void 0||m.v!==Oe});for(var[f,v]of r)v.v!==Oe&&!(f in l)&&u.push(f);return u},setPrototypeOf(){Ji()}})}function Cs(e){try{if(e!==null&&typeof e=="object"&&pr in e)return e[pr]}catch{}return e}function Mo(e,t){return Object.is(Cs(e),Cs(t))}var Rs,Aa,$a,Ia;function Co(){if(Rs===void 0){Rs=window,Aa=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;$a=Ft(t,"firstChild").get,Ia=Ft(t,"nextSibling").get,$s(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),$s(r)&&(r.__t=void 0)}}function ar(e=""){return document.createTextNode(e)}function Mr(e){return $a.call(e)}function ln(e){return Ia.call(e)}function c(e,t){return Mr(e)}function H(e,t=!1){{var r=Mr(e);return r instanceof Comment&&r.data===""?ln(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=ln(n);return n}function Ro(e){e.textContent=""}function bs(){return!1}function Do(e,t){if(t){const r=document.body;e.autofocus=!0,_r(()=>{document.activeElement===r&&e.focus()})}}let Ds=!1;function Oo(){Ds||(Ds=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Dn(e){var t=re,r=F;rt(null),qt(null);try{return e()}finally{rt(t),qt(r)}}function ys(e,t,r,n=r){e.addEventListener(t,()=>Dn(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),Oo()}function qo(e){F===null&&re===null&&Hi(),re!==null&&(re.f&_t)!==0&&F===null&&Qi(),Sr&&Gi()}function Bo(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Kt(e,t,r,n=!0){var s=F;s!==null&&(s.f&kt)!==0&&(e|=kt);var a={ctx:Te,deps:null,nodes_start:null,nodes_end:null,f:e|ut,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{en(a),a.f|=_s}catch(u){throw Be(a),u}else t!==null&&mr(a);if(n){var o=a;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Dr)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&Bo(o,s),re!==null&&(re.f&nt)!==0&&(e&br)===0)){var l=re;(l.effects??=[]).push(o)}}return a}function Lo(){return re!==null&&!Pt}function Ma(e){const t=Kt(hs,null,!1);return Xe(t,Qe),t.teardown=e,t}function Ca(e){qo();var t=F.f,r=!re&&(t&Ht)!==0&&(t&_s)===0;if(r){var n=Te;(n.e??=[]).push(e)}else return Ra(e)}function Ra(e){return Kt(vs|Vi,e,!1)}function jo(e){ht.ensure();const t=Kt(br|Dr,e,!0);return(r={})=>new Promise(n=>{r.outro?tr(t,()=>{Be(t),n(void 0)}):(Be(t),n(void 0))})}function ws(e){return Kt(vs,e,!1)}function zo(e){return Kt($n|Dr,e,!0)}function Ss(e,t=0){return Kt(hs|t,e,!0)}function j(e,t=[],r=[]){Ea(t,r,n=>{Kt(hs,()=>e(...n.map(i)),!0)})}function ir(e,t=0){var r=Kt(gr|t,e,!0);return r}function Ge(e,t=!0){return Kt(Ht|Dr,e,!0,t)}function Da(e){var t=e.teardown;if(t!==null){const r=Sr,n=re;qs(!0),rt(null);try{t.call(null)}finally{qs(r),rt(n)}}}function Oa(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&Dn(()=>{s.abort(Yr)});var n=r.next;(r.f&br)!==0?r.parent=null:Be(r,t),r=n}}function Vo(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Ht)===0&&Be(t),t=r}}function Be(e,t=!0){var r=!1;(t||(e.f&zi)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Wo(e.nodes_start,e.nodes_end),r=!0),Oa(e,t&&!r),Pn(e,0),Xe(e,yr);var n=e.transitions;if(n!==null)for(const a of n)a.stop();Da(e);var s=e.parent;s!==null&&s.first!==null&&qa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Wo(e,t){for(;e!==null;){var r=e===t?null:ln(e);e.remove(),e=r}}function qa(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function tr(e,t){var r=[];xs(e,r,!0),Ba(r,()=>{Be(e),t&&t()})}function Ba(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function xs(e,t,r){if((e.f&kt)===0){if(e.f^=kt,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var s=n.next,a=(n.f&wr)!==0||(n.f&Ht)!==0;xs(n,t,a?r:!1),n=s}}}function On(e){La(e,!0)}function La(e,t){if((e.f&kt)!==0){e.f^=kt,(e.f&Qe)===0&&(Xe(e,ut),mr(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&wr)!==0||(r.f&Ht)!==0;La(r,s?t:!1),r=n}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in()}}let Tr=!1;function Os(e){Tr=e}let Sr=!1;function qs(e){Sr=e}let re=null,Pt=!1;function rt(e){re=e}let F=null;function qt(e){F=e}let Gt=null;function ja(e){re!==null&&(Gt===null?Gt=[e]:Gt.push(e))}let Ze=null,ot=0,vt=null;function Uo(e){vt=e}let za=1,Fr=0,Qt=Fr;function Bs(e){Qt=e}let Xt=!1;function Va(){return++za}function qn(e){var t=e.f;if((t&ut)!==0)return!0;if((t&sr)!==0){var r=e.deps,n=(t&_t)!==0;if(r!==null){var s,a,o=(t&En)!==0,l=n&&F!==null&&!Xt,u=r.length;if((o||l)&&(F===null||(F.f&yr)===0)){var f=e,v=f.parent;for(s=0;s<u;s++)a=r[s],(o||!a?.reactions?.includes(f))&&(a.reactions??=[]).push(f);o&&(f.f^=En),l&&v!==null&&(v.f&_t)===0&&(f.f^=_t)}for(s=0;s<u;s++)if(a=r[s],qn(a)&&Ta(a),a.wv>e.wv)return!0}(!n||F!==null&&!Xt)&&Xe(e,Qe)}return!1}function Wa(e,t,r=!0){var n=e.reactions;if(n!==null&&!Gt?.includes(e))for(var s=0;s<n.length;s++){var a=n[s];(a.f&nt)!==0?Wa(a,t,!1):t===a&&(r?Xe(a,ut):(a.f&Qe)!==0&&Xe(a,sr),mr(a))}}function Ua(e){var t=Ze,r=ot,n=vt,s=re,a=Xt,o=Gt,l=Te,u=Pt,f=Qt,v=e.f;Ze=null,ot=0,vt=null,Xt=(v&_t)!==0&&(Pt||!Tr||re===null),re=(v&(Ht|br))===0?e:null,Gt=null,Ar(e.ctx),Pt=!1,Qt=++Fr,e.ac!==null&&(Dn(()=>{e.ac.abort(Yr)}),e.ac=null);try{e.f|=es;var _=e.fn,m=_(),p=e.deps;if(Ze!==null){var g;if(Pn(e,ot),p!==null&&ot>0)for(p.length=ot+Ze.length,g=0;g<Ze.length;g++)p[ot+g]=Ze[g];else e.deps=p=Ze;if(!Xt||(v&nt)!==0&&e.reactions!==null)for(g=ot;g<p.length;g++)(p[g].reactions??=[]).push(e)}else p!==null&&ot<p.length&&(Pn(e,ot),p.length=ot);if(on()&&vt!==null&&!Pt&&p!==null&&(e.f&(nt|sr|ut))===0)for(g=0;g<vt.length;g++)Wa(vt[g],e);return s!==null&&s!==e&&(Fr++,vt!==null&&(n===null?n=vt:n.push(...vt))),(e.f&hr)!==0&&(e.f^=hr),m}catch(S){return ya(S)}finally{e.f^=es,Ze=t,ot=r,vt=n,re=s,Xt=a,Gt=o,Ar(l),Pt=u,Qt=f}}function Go(e,t){let r=t.reactions;if(r!==null){var n=Oi.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&nt)!==0&&(Ze===null||!Ze.includes(t))&&(Xe(t,sr),(t.f&(_t|En))===0&&(t.f^=En),ka(t),Pn(t,0))}function Pn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Go(e,r[n])}function en(e){var t=e.f;if((t&yr)===0){Xe(e,Qe);var r=F,n=Tr;F=e,Tr=!0;try{(t&gr)!==0?Vo(e):Oa(e),Da(e);var s=Ua(e);e.teardown=typeof s=="function"?s:null,e.wv=za;var a;ua&&mo&&(e.f&ut)!==0&&e.deps}finally{Tr=n,F=r}}}async function Qo(){await Promise.resolve(),wo()}function i(e){var t=e.f,r=(t&nt)!==0;if(re!==null&&!Pt){var n=F!==null&&(F.f&yr)!==0;if(!n&&!Gt?.includes(e)){var s=re.deps;if((re.f&es)!==0)e.rv<Fr&&(e.rv=Fr,Ze===null&&s!==null&&s[ot]===e?ot++:Ze===null?Ze=[e]:(!Xt||!Ze.includes(e))&&Ze.push(e));else{(re.deps??=[]).push(e);var a=e.reactions;a===null?e.reactions=[re]:a.includes(re)||a.push(re)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&_t)===0&&(o.f^=_t)}if(Sr){if(er.has(e))return er.get(e);if(r){o=e;var u=o.v;return((o.f&Qe)===0&&o.reactions!==null||Ga(o))&&(u=gs(o)),er.set(o,u),u}}else r&&(o=e,qn(o)&&Ta(o));if((e.f&hr)!==0)throw e.v;return e.v}function Ga(e){if(e.v===Oe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(er.has(t)||(t.f&nt)!==0&&Ga(t))return!0;return!1}function qr(e){var t=Pt;try{return Pt=!0,e()}finally{Pt=t}}const Ho=-7169;function Xe(e,t){e.f=e.f&Ho|t}function Ko(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Yo=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Zo(e){return Yo.includes(e)}const Jo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Xo(e){return e=e.toLowerCase(),Jo[e]??e}const Fo=["touchstart","touchmove"];function el(e){return Fo.includes(e)}const Qa=new Set,ns=new Set;function tl(e,t,r,n={}){function s(a){if(n.capture||Hr.call(t,a),!a.cancelBubble)return Dn(()=>r?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?_r(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function or(e){for(var t=0;t<e.length;t++)Qa.add(e[t]);for(var r of ns)r(e)}let Ls=null;function Hr(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],a=s[0]||e.target;Ls=e;var o=0,l=Ls===e&&e.__root;if(l){var u=s.indexOf(l);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var f=s.indexOf(t);if(f===-1)return;u<=f&&(o=u)}if(a=s[o]||e.target,a!==t){Fn(e,"currentTarget",{configurable:!0,get(){return a||r}});var v=re,_=F;rt(null),qt(null);try{for(var m,p=[];a!==null;){var g=a.assignedSlot||a.parentNode||a.host||null;try{var S=a["__"+n];if(S!=null&&(!a.disabled||e.target===a))if(An(S)){var[w,...E]=S;w.apply(a,[e,...E])}else S.call(a,e)}catch(R){m?p.push(R):m=R}if(e.cancelBubble||g===t||g===null)break;a=g}if(m){for(let R of p)queueMicrotask(()=>{throw R});throw m}}finally{e.__root=t,delete e.currentTarget,rt(v),qt(_)}}}function Ha(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Cr(e,t){var r=F;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function x(e,t){var r=(t&oo)!==0,n=(t&lo)!==0,s,a=!e.startsWith("<!>");return()=>{s===void 0&&(s=Ha(a?e:"<!>"+e),r||(s=Mr(s)));var o=n||Aa?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=Mr(o),u=o.lastChild;Cr(l,u)}else Cr(o,o);return o}}function rl(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var o=Ha(s),l=Mr(o);a=Mr(l)}var u=a.cloneNode(!0);return Cr(u,u),u}}function nl(e,t){return rl(e,t,"svg")}function lt(e=""){{var t=ar(e+"");return Cr(t,t),t}}function Y(){var e=document.createDocumentFragment(),t=document.createComment(""),r=ar();return e.append(t,r),Cr(t,r),e}function h(e,t){e!==null&&e.before(t)}function I(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function sl(e,t){return al(e,t)}const Er=new Map;function al(e,{target:t,anchor:r,props:n={},events:s,context:a,intro:o=!0}){Co();var l=new Set,u=_=>{for(var m=0;m<_.length;m++){var p=_[m];if(!l.has(p)){l.add(p);var g=el(p);t.addEventListener(p,Hr,{passive:g});var S=Er.get(p);S===void 0?(document.addEventListener(p,Hr,{passive:g}),Er.set(p,1)):Er.set(p,S+1)}}};u(fs(Qa)),ns.add(u);var f=void 0,v=jo(()=>{var _=r??t.appendChild(ar());return Po(_,{pending:()=>{}},m=>{if(a){Z({});var p=Te;p.c=a}s&&(n.$$events=s),f=e(m,n)||{},a&&J()}),()=>{for(var m of l){t.removeEventListener(m,Hr);var p=Er.get(m);--p===0?(document.removeEventListener(m,Hr),Er.delete(m)):Er.set(m,p)}ns.delete(u),_!==r&&_.parentNode?.removeChild(_)}});return il.set(f,v),f}let il=new WeakMap;function D(e,t,r=!1){var n=e,s=null,a=null,o=Oe,l=r?wr:0,u=!1;const f=(p,g=!0)=>{u=!0,m(g,p)};var v=null;function _(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var p=o?s:a,g=o?a:s;p&&On(p),g&&tr(g,()=>{o?a=null:s=null})}const m=(p,g)=>{if(o!==(o=p)){var S=bs(),w=n;if(S&&(v=document.createDocumentFragment(),v.append(w=ar())),o?s??=g&&Ge(()=>g(w)):a??=g&&Ge(()=>g(w)),S){var E=we,R=o?s:a,M=o?a:s;R&&E.skipped_effects.delete(R),M&&E.skipped_effects.add(M),E.add_callback(_)}else _()}};ir(()=>{u=!1,t(f),u||m(null,null)},l)}function ol(e,t){return t}function ll(e,t,r){for(var n=e.items,s=[],a=t.length,o=0;o<a;o++)xs(t[o].e,s,!0);var l=a>0&&s.length===0&&r!==null;if(l){var u=r.parentNode;Ro(u),u.append(r),n.clear(),Ct(e,t[0].prev,t[a-1].next)}Ba(s,()=>{for(var f=0;f<a;f++){var v=t[f];l||(n.delete(v.k),Ct(e,v.prev,v.next)),Be(v.e,!l)}})}function Je(e,t,r,n,s,a=null){var o=e,l={flags:t,items:new Map,first:null},u=(t&_a)!==0;if(u){var f=e;o=f.appendChild(ar())}var v=null,_=!1,m=new Map,p=ms(()=>{var E=r();return An(E)?E:E==null?[]:fs(E)}),g,S;function w(){cl(S,g,l,m,o,s,t,n,r),a!==null&&(g.length===0?v?On(v):v=Ge(()=>a(o)):v!==null&&tr(v,()=>{v=null}))}ir(()=>{S??=F,g=i(p);var E=g.length;if(!(_&&E===0)){_=E===0;var R,M,A,N;if(bs()){var $=new Set,B=we;for(M=0;M<E;M+=1){A=g[M],N=n(A,M);var V=l.items.get(N)??m.get(N);V?(t&(In|Mn))!==0&&Ka(V,A,M,t):(R=Ya(null,l,null,null,A,N,M,s,t,r,!0),m.set(N,R)),$.add(N)}for(const[z,ee]of l.items)$.has(z)||B.skipped_effects.add(ee.e);B.add_callback(w)}else w();i(p)}})}function cl(e,t,r,n,s,a,o,l,u){var f=(o&eo)!==0,v=(o&(In|Mn))!==0,_=t.length,m=r.items,p=r.first,g=p,S,w=null,E,R=[],M=[],A,N,$,B;if(f)for(B=0;B<_;B+=1)A=t[B],N=l(A,B),$=m.get(N),$!==void 0&&($.a?.measure(),(E??=new Set).add($));for(B=0;B<_;B+=1){if(A=t[B],N=l(A,B),$=m.get(N),$===void 0){var V=n.get(N);if(V!==void 0){n.delete(N),m.set(N,V);var z=w?w.next:g;Ct(r,w,V),Ct(r,V,z),Hn(V,z,s),w=V}else{var ee=g?g.e.nodes_start:s;w=Ya(ee,r,w,w===null?r.first:w.next,A,N,B,a,o,u)}m.set(N,w),R=[],M=[],g=w.next;continue}if(v&&Ka($,A,B,o),($.e.f&kt)!==0&&(On($.e),f&&($.a?.unfix(),(E??=new Set).delete($))),$!==g){if(S!==void 0&&S.has($)){if(R.length<M.length){var ge=M[0],C;w=ge.prev;var O=R[0],se=R[R.length-1];for(C=0;C<R.length;C+=1)Hn(R[C],ge,s);for(C=0;C<M.length;C+=1)S.delete(M[C]);Ct(r,O.prev,se.next),Ct(r,w,O),Ct(r,se,ge),g=ge,w=se,B-=1,R=[],M=[]}else S.delete($),Hn($,g,s),Ct(r,$.prev,$.next),Ct(r,$,w===null?r.first:w.next),Ct(r,w,$),w=$;continue}for(R=[],M=[];g!==null&&g.k!==N;)(g.e.f&kt)===0&&(S??=new Set).add(g),M.push(g),g=g.next;if(g===null)continue;$=g}R.push($),w=$,g=$.next}if(g!==null||S!==void 0){for(var ae=S===void 0?[]:fs(S);g!==null;)(g.e.f&kt)===0&&ae.push(g),g=g.next;var be=ae.length;if(be>0){var Ce=(o&_a)!==0&&_===0?s:null;if(f){for(B=0;B<be;B+=1)ae[B].a?.measure();for(B=0;B<be;B+=1)ae[B].a?.fix()}ll(r,ae,Ce)}}f&&_r(()=>{if(E!==void 0)for($ of E)$.a?.apply()}),e.first=r.first&&r.first.e,e.last=w&&w.e;for(var P of n.values())Be(P.e);n.clear()}function Ka(e,t,r,n){(n&In)!==0&&Ir(e.v,t),(n&Mn)!==0?Ir(e.i,r):e.i=r}function Ya(e,t,r,n,s,a,o,l,u,f,v){var _=(u&In)!==0,m=(u&to)===0,p=_?m?Io(s,!1,!1):rr(s):s,g=(u&Mn)===0?o:rr(o),S={i:g,v:p,k:a,a:null,e:null,prev:r,next:n};try{if(e===null){var w=document.createDocumentFragment();w.append(e=ar())}return S.e=Ge(()=>l(e,p,g,f),po),S.e.prev=r&&r.e,S.e.next=n&&n.e,r===null?v||(t.first=S):(r.next=S,r.e.next=S.e),n!==null&&(n.prev=S,n.e.prev=S.e),S}finally{}}function Hn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,a=e.e.nodes_start;a!==null&&a!==n;){var o=ln(a);s.before(a),a=o}}function Ct(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ve(e,t,...r){var n=e,s=le,a;ir(()=>{s!==(s=t())&&(a&&(Be(a),a=null),a=Ge(()=>s(n,...r)))},wr)}function gn(e,t,r){var n=e,s,a,o=null,l=null;function u(){a&&(tr(a),a=null),o&&(o.lastChild.remove(),n.before(o),o=null),a=l,l=null}ir(()=>{if(s!==(s=t())){var f=bs();if(s){var v=n;f&&(o=document.createDocumentFragment(),o.append(v=ar()),a&&we.skipped_effects.add(a)),l=Ge(()=>r(v,s))}f?we.add_callback(u):u()}},wr)}function ul(e,t,r,n,s,a){var o,l,u=null,f=e,v;ir(()=>{const _=t()||null;var m=uo;_!==o&&(v&&(_===null?tr(v,()=>{v=null,l=null}):_===l?On(v):Be(v)),_&&_!==l&&(v=Ge(()=>{if(u=document.createElementNS(m,_),Cr(u,u),n){var p=u.appendChild(ar());n(u,p)}F.nodes_end=u,f.before(u)})),o=_,o&&(l=o))},wr)}function dl(e,t){var r=void 0,n;ir(()=>{r!==(r=t())&&(n&&(Be(n),n=null),r&&(n=Ge(()=>{ws(()=>r(e))})))})}function Za(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Za(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function fl(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Za(e))&&(n&&(n+=" "),n+=t);return n}function vl(e){return typeof e=="object"?fl(e):e??""}const js=[...` 	
\r\f \v\uFEFF`];function hl(e,t,r){var n=e==null?"":""+e;if(r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var a=s.length,o=0;(o=n.indexOf(s,o))>=0;){var l=o+a;(o===0||js.includes(n[o-1]))&&(l===n.length||js.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function zs(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var a=e[s];a!=null&&a!==""&&(n+=" "+s+": "+a+r)}return n}function Kn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function pl(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,o=0,l=!1,u=[];n&&u.push(...Object.keys(n).map(Kn)),s&&u.push(...Object.keys(s).map(Kn));var f=0,v=-1;const S=e.length;for(var _=0;_<S;_++){var m=e[_];if(l?m==="/"&&e[_-1]==="*"&&(l=!1):a?a===m&&(a=!1):m==="/"&&e[_+1]==="*"?l=!0:m==='"'||m==="'"?a=m:m==="("?o++:m===")"&&o--,!l&&a===!1&&o===0){if(m===":"&&v===-1)v=_;else if(m===";"||_===S-1){if(v!==-1){var p=Kn(e.substring(f,v).trim());if(!u.includes(p)){m!==";"&&_++;var g=e.substring(f,_).trim();r+=" "+g+";"}}f=_+1,v=-1}}}}return n&&(r+=zs(n)),s&&(r+=zs(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function $e(e,t,r,n,s,a){var o=e.__className;if(o!==r||o===void 0){var l=hl(r,n,a);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(a&&s!==a)for(var u in a){var f=!!a[u];(s==null||f!==!!s[u])&&e.classList.toggle(u,f)}return a}function Yn(e,t={},r,n){for(var s in r){var a=r[s];t[s]!==a&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,a,n))}}function _l(e,t,r,n){var s=e.__style;if(s!==t){var a=pl(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else n&&(Array.isArray(n)?(Yn(e,r?.[0],n[0]),Yn(e,r?.[1],n[1],"important")):Yn(e,r,n));return n}function kn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!An(t))return vo();for(var n of e.options)n.selected=t.includes(Jr(n));return}for(n of e.options){var s=Jr(n);if(Mo(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Ja(e){var t=new MutationObserver(()=>{kn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ma(()=>{t.disconnect()})}function ss(e,t,r=t){var n=!0;ys(e,"change",s=>{var a=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(a),Jr);else{var l=e.querySelector(a)??e.querySelector("option:not([disabled])");o=l&&Jr(l)}r(o)}),ws(()=>{var s=t();if(kn(e,s,n),n&&s===void 0){var a=e.querySelector(":checked");a!==null&&(s=Jr(a),r(s))}e.__value=s,n=!1}),Ja(e)}function Jr(e){return"__value"in e?e.__value:e.value}const Gr=Symbol("class"),Qr=Symbol("style"),Xa=Symbol("is custom element"),Fa=Symbol("is html");function ml(e,t){var r=Bn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Nr(e,t){var r=Bn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function gl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function as(e,t,r,n){var s=Bn(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[Wi]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ei(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function bl(e,t,r,n,s=!1,a=!1){var o=Bn(e),l=o[Xa],u=!o[Fa],f=t||{},v=e.tagName==="OPTION";for(var _ in t)_ in r||(r[_]=null);r.class?r.class=vl(r.class):r[Gr]&&(r.class=null),r[Qr]&&(r.style??=null);var m=ei(e);for(const A in r){let N=r[A];if(v&&A==="value"&&N==null){e.value=e.__value="",f[A]=N;continue}if(A==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";$e(e,p,N,n,t?.[Gr],r[Gr]),f[A]=N,f[Gr]=r[Gr];continue}if(A==="style"){_l(e,N,t?.[Qr],r[Qr]),f[A]=N,f[Qr]=r[Qr];continue}var g=f[A];if(!(N===g&&!(N===void 0&&e.hasAttribute(A)))){f[A]=N;var S=A[0]+A[1];if(S!=="$$")if(S==="on"){const $={},B="$$"+A;let V=A.slice(2);var w=Zo(V);if(Ko(V)&&(V=V.slice(0,-7),$.capture=!0),!w&&g){if(N!=null)continue;e.removeEventListener(V,f[B],$),f[B]=null}if(N!=null)if(w)e[`__${V}`]=N,or([V]);else{let z=function(ee){f[A].call(this,ee)};var M=z;f[B]=tl(V,e,z,$)}else w&&(e[`__${V}`]=void 0)}else if(A==="style")as(e,A,N);else if(A==="autofocus")Do(e,!!N);else if(!l&&(A==="__value"||A==="value"&&N!=null))e.value=e.__value=N;else if(A==="selected"&&v)gl(e,N);else{var E=A;u||(E=Xo(E));var R=E==="defaultValue"||E==="defaultChecked";if(N==null&&!l&&!R)if(o[A]=null,E==="value"||E==="checked"){let $=e;const B=t===void 0;if(E==="value"){let V=$.defaultValue;$.removeAttribute(E),$.defaultValue=V,$.value=$.__value=B?V:null}else{let V=$.defaultChecked;$.removeAttribute(E),$.defaultChecked=V,$.checked=B?V:!1}}else e.removeAttribute(A);else R||m.includes(E)&&(l||typeof N!="string")?(e[E]=N,E in o&&(o[E]=Oe)):typeof N!="function"&&as(e,E,N)}}}return f}function Vs(e,t,r=[],n=[],s,a=!1,o=!1){Ea(r,n,l=>{var u=void 0,f={},v=e.nodeName==="SELECT",_=!1;if(ir(()=>{var p=t(...l.map(i)),g=bl(e,u,p,s,a,o);_&&v&&"value"in p&&kn(e,p.value);for(let w of Object.getOwnPropertySymbols(f))p[w]||Be(f[w]);for(let w of Object.getOwnPropertySymbols(p)){var S=p[w];w.description===fo&&(!u||S!==u[w])&&(f[w]&&Be(f[w]),f[w]=Ge(()=>dl(e,()=>S))),g[w]=S}u=g}),v){var m=e;ws(()=>{kn(m,u.value,!0),Ja(m)})}_=!0})}function Bn(e){return e.__attributes??={[Xa]:e.nodeName.includes("-"),[Fa]:e.namespaceURI===co}}var Ws=new Map;function ei(e){var t=e.getAttribute("is")||e.nodeName,r=Ws.get(t);if(r)return r;Ws.set(t,r=[]);for(var n,s=e,a=Element.prototype;a!==s;){n=qi(s);for(var o in n)n[o].set&&r.push(o);s=da(s)}return r}function Ue(e,t,r=t){var n=new WeakSet;ys(e,"input",async s=>{var a=s?e.defaultValue:e.value;if(a=Zn(e)?Jn(a):a,r(a),we!==null&&n.add(we),await Qo(),a!==(a=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=a??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),qr(t)==null&&e.value&&(r(Zn(e)?Jn(e.value):e.value),we!==null&&n.add(we)),Ss(()=>{var s=t();if(e===document.activeElement){var a=mn??we;if(n.has(a))return}Zn(e)&&s===Jn(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function yl(e,t,r=t){ys(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),qr(t)==null&&r(e.checked),Ss(()=>{var n=t();e.checked=!!n})}function Zn(e){var t=e.type;return t==="number"||t==="range"}function Jn(e){return e===""?null:+e}let _n=!1;function wl(e){var t=_n;try{return _n=!1,[e(),_n]}finally{_n=t}}const Sl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function he(e,t,r){return new Proxy({props:e,exclude:t},Sl)}const xl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Ur(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];Ur(s)&&(s=s());const a=Ft(s,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Ur(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=Ft(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===pr||t===ha)return!1;for(let r of e.props)if(Ur(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Ur(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function _e(...e){return new Proxy({props:e},xl)}function Pr(e,t,r,n){var s=!Or||(r&no)!==0,a=(r&ao)!==0,o=(r&io)!==0,l=n,u=!0,f=()=>(u&&(u=!1,l=o?qr(n):n),l),v;if(a){var _=pr in e||ha in e;v=Ft(e,t)?.set??(_&&t in e?M=>e[t]=M:void 0)}var m,p=!1;a?[m,p]=wl(()=>e[t]):m=e[t],m===void 0&&n!==void 0&&(m=f(),v&&(s&&Yi(),v(m)));var g;if(s?g=()=>{var M=e[t];return M===void 0?f():(u=!0,M)}:g=()=>{var M=e[t];return M!==void 0&&(l=void 0),M===void 0?l:M},s&&(r&so)===0)return g;if(v){var S=e.$$legacy;return(function(M,A){return arguments.length>0?((!s||!A||S||p)&&v(A?g():M),M):g()})}var w=!1,E=((r&ro)!==0?Rn:ms)(()=>(w=!1,g()));a&&i(E);var R=F;return(function(M,A){if(arguments.length>0){const N=A?i(E):s&&a?ct(M):M;return k(E,N),w=!0,l!==void 0&&(l=N),M}return Sr&&w||(R.f&yr)!==0?E.v:i(E)})}function ti(e){Te===null&&pa(),Or&&Te.l!==null?Pl(Te).m.push(e):Ca(()=>{const t=qr(e);if(typeof t=="function")return t})}function El(e){Te===null&&pa(),ti(()=>()=>qr(e))}function Pl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const kl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(kl);class Tl extends Map{#t=new Map;#r=ue(0);#l=ue(0);#c=Qt||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#l.v=super.size}}#a(t){return Qt===this.#c?ue(t):rr(t)}has(t){var r=this.#t,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#a(0),r.set(t,n);else return i(this.#r),!1}return i(n),!0}forEach(t,r){this.#s(),super.forEach(t,r)}get(t){var r=this.#t,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#a(0),r.set(t,n);else{i(this.#r);return}}return i(n),super.get(t)}set(t,r){var n=this.#t,s=n.get(t),a=super.get(t),o=super.set(t,r),l=this.#r;if(s===void 0)s=this.#a(0),n.set(t,s),k(this.#l,super.size),Dt(l);else if(a!==r){Dt(s);var u=l.reactions===null?null:new Set(l.reactions),f=u===null||!s.reactions?.every(v=>u.has(v));f&&Dt(l)}return o}delete(t){var r=this.#t,n=r.get(t),s=super.delete(t);return n!==void 0&&(r.delete(t),k(this.#l,super.size),k(n,-1),Dt(this.#r)),s}clear(){if(super.size!==0){super.clear();var t=this.#t;k(this.#l,0);for(var r of t.values())k(r,-1);Dt(this.#r),t.clear()}}#s(){i(this.#r);var t=this.#t;if(this.#l.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#a(0);t.set(r,n)}}for([,n]of this.#t)i(n)}keys(){return i(this.#r),super.keys()}values(){return this.#s(),super.values()}entries(){return this.#s(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return i(this.#l),super.size}}class Nl{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class ri{constructor(t){this.generateIdentifier=t,this.kv=new Nl}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class Al extends ri{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function $l(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function Il(e,t){const r=$l(e);if("find"in r)return r.find(t);const n=r;for(let s=0;s<n.length;s++){const a=n[s];if(t(a))return a}}function Rr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function bn(e,t){return e.indexOf(t)!==-1}function Us(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class Ml{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return Il(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const Cl=e=>Object.prototype.toString.call(e).slice(8,-1),ni=e=>typeof e>"u",Rl=e=>e===null,tn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,is=e=>tn(e)&&Object.keys(e).length===0,nr=e=>Array.isArray(e),Dl=e=>typeof e=="string",Ol=e=>typeof e=="number"&&!isNaN(e),ql=e=>typeof e=="boolean",Bl=e=>e instanceof RegExp,rn=e=>e instanceof Map,nn=e=>e instanceof Set,si=e=>Cl(e)==="Symbol",Ll=e=>e instanceof Date&&!isNaN(e.valueOf()),jl=e=>e instanceof Error,Gs=e=>typeof e=="number"&&isNaN(e),zl=e=>ql(e)||Rl(e)||ni(e)||Ol(e)||Dl(e)||si(e),Vl=e=>typeof e=="bigint",Wl=e=>e===1/0||e===-1/0,Ul=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),Gl=e=>e instanceof URL,ai=e=>e.replace(/\./g,"\\."),Xn=e=>e.map(String).map(ai).join("."),Xr=e=>{const t=[];let r="";for(let s=0;s<e.length;s++){let a=e.charAt(s);if(a==="\\"&&e.charAt(s+1)==="."){r+=".",s++;continue}if(a==="."){t.push(r),r="";continue}r+=a}const n=r;return t.push(n),t};function Mt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const ii=[Mt(ni,"undefined",()=>null,()=>{}),Mt(Vl,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Mt(Ll,"Date",e=>e.toISOString(),e=>new Date(e)),Mt(jl,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Mt(Bl,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Mt(nn,"set",e=>[...e.values()],e=>new Set(e)),Mt(rn,"map",e=>[...e.entries()],e=>new Map(e)),Mt(e=>Gs(e)||Wl(e),"number",e=>Gs(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Mt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Mt(Gl,"URL",e=>e.toString(),e=>new URL(e))];function Ln(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const oi=Ln((e,t)=>si(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),Ql=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),li=Ln(Ul,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=Ql[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function ci(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const ui=Ln(ci,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(s=>{n[s]=e[s]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),di=Ln((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),Hl=[ui,oi,di,li],Qs=(e,t)=>{const r=Us(Hl,s=>s.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Us(ii,s=>s.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},fi={};ii.forEach(e=>{fi[e.annotation]=e});const Kl=(e,t,r)=>{if(nr(t))switch(t[0]){case"symbol":return oi.untransform(e,t,r);case"class":return ui.untransform(e,t,r);case"custom":return di.untransform(e,t,r);case"typed-array":return li.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=fi[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},kr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function vi(e){if(bn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(bn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(bn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const Yl=(e,t)=>{vi(t);for(let r=0;r<t.length;r++){const n=t[r];if(nn(e))e=kr(e,+n);else if(rn(e)){const s=+n,a=+t[++r]==0?"key":"value",o=kr(e,s);switch(a){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},os=(e,t,r)=>{if(vi(t),t.length===0)return r(e);let n=e;for(let a=0;a<t.length-1;a++){const o=t[a];if(nr(n)){const l=+o;n=n[l]}else if(tn(n))n=n[o];else if(nn(n)){const l=+o;n=kr(n,l)}else if(rn(n)){if(a===t.length-2)break;const u=+o,f=+t[++a]==0?"key":"value",v=kr(n,u);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const s=t[t.length-1];if(nr(n)?n[+s]=r(n[+s]):tn(n)&&(n[s]=r(n[s])),nn(n)){const a=kr(n,+s),o=r(a);a!==o&&(n.delete(a),n.add(o))}if(rn(n)){const a=+t[t.length-2],o=kr(n,a);switch(+s==0?"key":"value"){case"key":{const u=r(o);n.set(u,n.get(o)),u!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function ls(e,t,r=[]){if(!e)return;if(!nr(e)){Rr(e,(a,o)=>ls(a,t,[...r,...Xr(o)]));return}const[n,s]=e;s&&Rr(s,(a,o)=>{ls(a,t,[...r,...Xr(o)])}),t(n,r)}function Zl(e,t,r){return ls(t,(n,s)=>{e=os(e,s,a=>Kl(a,n,r))}),e}function Jl(e,t){function r(n,s){const a=Yl(e,Xr(s));n.map(Xr).forEach(o=>{e=os(e,o,()=>a)})}if(nr(t)){const[n,s]=t;n.forEach(a=>{e=os(e,Xr(a),()=>e)}),s&&Rr(s,r)}else Rr(t,r);return e}const Xl=(e,t)=>tn(e)||nr(e)||rn(e)||nn(e)||ci(e,t);function Fl(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function ec(e,t){const r={};let n;return e.forEach(s=>{if(s.length<=1)return;t||(s=s.map(l=>l.map(String)).sort((l,u)=>l.length-u.length));const[a,...o]=s;a.length===0?n=o.map(Xn):r[Xn(a)]=o.map(Xn)}),n?is(r)?[n]:[n,r]:is(r)?void 0:r}const hi=(e,t,r,n,s=[],a=[],o=new Map)=>{const l=zl(e);if(!l){Fl(e,s,t);const p=o.get(e);if(p)return n?{transformedValue:null}:p}if(!Xl(e,r)){const p=Qs(e,r),g=p?{transformedValue:p.value,annotations:[p.type]}:{transformedValue:e};return l||o.set(e,g),g}if(bn(a,e))return{transformedValue:null};const u=Qs(e,r),f=u?.value??e,v=nr(f)?[]:{},_={};Rr(f,(p,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const S=hi(p,t,r,n,[...s,g],[...a,e],o);v[g]=S.transformedValue,nr(S.annotations)?_[g]=S.annotations:tn(S.annotations)&&Rr(S.annotations,(w,E)=>{_[ai(g)+"."+E]=w})});const m=is(_)?{transformedValue:v,annotations:u?[u.type]:void 0}:{transformedValue:v,annotations:u?[u.type,_]:_};return l||o.set(e,m),m};function pi(e){return Object.prototype.toString.call(e).slice(8,-1)}function Hs(e){return pi(e)==="Array"}function tc(e){if(pi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function rc(e,t,r,n,s){const a={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";a==="enumerable"&&(e[t]=r),s&&a==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function cs(e,t={}){if(Hs(e))return e.map(s=>cs(s,t));if(!tc(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((s,a)=>{if(Hs(t.props)&&!t.props.includes(a))return s;const o=e[a],l=cs(o,t);return rc(s,a,l,e,t.nonenumerable),s},{})}class ne{constructor({dedupe:t=!1}={}){this.classRegistry=new Al,this.symbolRegistry=new ri(r=>r.description??""),this.customTransformerRegistry=new Ml,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=hi(t,r,this,this.dedupe),s={json:n.transformedValue};n.annotations&&(s.meta={...s.meta,values:n.annotations});const a=ec(r,this.dedupe);return a&&(s.meta={...s.meta,referentialEqualities:a}),s}deserialize(t){const{json:r,meta:n}=t;let s=cs(r);return n?.values&&(s=Zl(s,n.values,this)),n?.referentialEqualities&&(s=Jl(s,n.referentialEqualities)),s}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}ne.defaultInstance=new ne;ne.serialize=ne.defaultInstance.serialize.bind(ne.defaultInstance);ne.deserialize=ne.defaultInstance.deserialize.bind(ne.defaultInstance);ne.stringify=ne.defaultInstance.stringify.bind(ne.defaultInstance);ne.parse=ne.defaultInstance.parse.bind(ne.defaultInstance);ne.registerClass=ne.defaultInstance.registerClass.bind(ne.defaultInstance);ne.registerSymbol=ne.defaultInstance.registerSymbol.bind(ne.defaultInstance);ne.registerCustom=ne.defaultInstance.registerCustom.bind(ne.defaultInstance);ne.allowErrorProps=ne.defaultInstance.allowErrorProps.bind(ne.defaultInstance);ne.serialize;ne.deserialize;ne.stringify;ne.parse;ne.registerClass;ne.registerCustom;ne.registerSymbol;ne.allowErrorProps;function nc(e="your-main-id"){return typeof window>"u"?e:new URLSearchParams(window.location.search).get("listId")||e}function Ks(e,t){return`${e}_${t}`}function sc(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class b{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}b.equal=(e,t)=>new b("equal",e,t).toString();b.notEqual=(e,t)=>new b("notEqual",e,t).toString();b.lessThan=(e,t)=>new b("lessThan",e,t).toString();b.lessThanEqual=(e,t)=>new b("lessThanEqual",e,t).toString();b.greaterThan=(e,t)=>new b("greaterThan",e,t).toString();b.greaterThanEqual=(e,t)=>new b("greaterThanEqual",e,t).toString();b.isNull=e=>new b("isNull",e).toString();b.isNotNull=e=>new b("isNotNull",e).toString();b.between=(e,t,r)=>new b("between",e,[t,r]).toString();b.startsWith=(e,t)=>new b("startsWith",e,t).toString();b.endsWith=(e,t)=>new b("endsWith",e,t).toString();b.select=e=>new b("select",void 0,e).toString();b.search=(e,t)=>new b("search",e,t).toString();b.orderDesc=e=>new b("orderDesc",e).toString();b.orderAsc=e=>new b("orderAsc",e).toString();b.orderRandom=()=>new b("orderRandom").toString();b.cursorAfter=e=>new b("cursorAfter",void 0,e).toString();b.cursorBefore=e=>new b("cursorBefore",void 0,e).toString();b.limit=e=>new b("limit",void 0,e).toString();b.offset=e=>new b("offset",void 0,e).toString();b.contains=(e,t)=>new b("contains",e,t).toString();b.notContains=(e,t)=>new b("notContains",e,t).toString();b.notSearch=(e,t)=>new b("notSearch",e,t).toString();b.notBetween=(e,t,r)=>new b("notBetween",e,[t,r]).toString();b.notStartsWith=(e,t)=>new b("notStartsWith",e,t).toString();b.notEndsWith=(e,t)=>new b("notEndsWith",e,t).toString();b.createdBefore=e=>new b("createdBefore",void 0,e).toString();b.createdAfter=e=>new b("createdAfter",void 0,e).toString();b.createdBetween=(e,t)=>new b("createdBetween",void 0,[e,t]).toString();b.updatedBefore=e=>new b("updatedBefore",void 0,e).toString();b.updatedAfter=e=>new b("updatedAfter",void 0,e).toString();b.updatedBetween=(e,t)=>new b("updatedBetween",void 0,[e,t]).toString();b.or=e=>new b("or",void 0,e.map(t=>JSON.parse(t))).toString();b.and=e=>new b("and",void 0,e.map(t=>JSON.parse(t))).toString();b.distanceEqual=(e,t,r,n=!0)=>new b("distanceEqual",e,[[t,r,n]]).toString();b.distanceNotEqual=(e,t,r,n=!0)=>new b("distanceNotEqual",e,[[t,r,n]]).toString();b.distanceGreaterThan=(e,t,r,n=!0)=>new b("distanceGreaterThan",e,[[t,r,n]]).toString();b.distanceLessThan=(e,t,r,n=!0)=>new b("distanceLessThan",e,[[t,r,n]]).toString();b.intersects=(e,t)=>new b("intersects",e,[t]).toString();b.notIntersects=(e,t)=>new b("notIntersects",e,[t]).toString();b.crosses=(e,t)=>new b("crosses",e,[t]).toString();b.notCrosses=(e,t)=>new b("notCrosses",e,[t]).toString();b.overlaps=(e,t)=>new b("overlaps",e,[t]).toString();b.notOverlaps=(e,t)=>new b("notOverlaps",e,[t]).toString();b.touches=(e,t)=>new b("touches",e,[t]).toString();b.notTouches=(e,t)=>new b("notTouches",e,[t]).toString();var _i,mi;class sn{static custom(t){return t}static unique(t=7){const r=sc(sn,_i,"m",mi).call(sn);let n="";for(let s=0;s<t;s++){const a=Math.floor(Math.random()*16).toString(16);n+=a}return r+n}}_i=sn,mi=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Ys;(function(e){e.Totp="totp"})(Ys||(Ys={}));var Zs;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Zs||(Zs={}));var Js;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Js||(Js={}));var Xs;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Xs||(Xs={}));var Fs;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Fs||(Fs={}));var ea;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(ea||(ea={}));var ta;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(ta||(ta={}));var ra;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(ra||(ra={}));var na;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(na||(na={}));async function Br(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function ac(e,t={}){const{includePurchases:r=!0,limit:n=100,orderBy:s="productName",orderDirection:a="asc"}=t;try{const{databases:o,config:l}=await Br(),u=await o.listDocuments(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,[b.equal("mainId",e),b.orderAsc(s==="productName"?"productName":"$updatedAt"),b.limit(n)]),f=u.documents;if(!r)return f;const v=await o.listDocuments(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.purchases,[b.equal("mainId",e)]),_=v.documents,m=dc(f,_);return console.log(`[Appwrite Interactions] ${u.documents.length} produits chargés avec ${v.documents.length} achats`),m}catch(o){console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${e}:`,o);const l=o instanceof Error?o.message:"Erreur lors du chargement des produits";throw new Error(`Échec du chargement des produits: ${l}`)}}async function ic(e,t){const{lastSync:r,limit:n=100}=t;if(!r)return console.log("[Appwrite Interactions] Aucune dernière sync fournie, retour vide pour sync hybride"),{products:[],purchases:[]};try{const{databases:s,config:a}=await Br(),[o,l]=await Promise.all([s.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.limit(n)]),s.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.limit(n)])]),u=o.documents,f=l.documents;return(u.length>0||f.length>0)&&console.log(`[Appwrite Interactions] Sync hybride: ${u.length} produits et ${f.length} achats synchronisés`),{products:u,purchases:f}}catch(s){console.error(`[Appwrite Interactions] Erreur sync hybride pour mainId ${e}:`,s);const a=s instanceof Error?s.message:"Erreur lors de la synchronisation hybride";throw new Error(`Échec de la synchronisation hybride: ${a}`)}}async function Es(e,t){try{const{databases:r,config:n}=await Br();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function oc(e,t){if(console.log(`[Appwrite Interactions] Mise à jour du magasin pour produit ${e}:`,t),!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await Es(e,{store:r});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function sa(e,t){return Es(e,{who:t})}async function aa(e,t){return Es(e,{stockReel:t})}async function lc(e){try{const{databases:t,config:r}=await Br(),a=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:a.$id,status:"active"},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,sn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function cc(e,t){try{const{databases:r,config:n}=await Br(),s=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,t);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,t),s}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function uc(e){try{const{databases:t,config:r}=await Br();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}function dc(e,t){return e.map(r=>({...r,purchases:t.filter(n=>n.products.some(s=>s.$id===r.$id))}))}function fc(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing stock data:",t),[]}}function vc(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing recipes occurrences:",t),[]}}function hc(e,t={}){let r=null;const n=a=>{const{events:o,payload:l}=a;if(!l)return;const u=o.some(p=>p.includes("products.")),f=o.some(p=>p.includes("purchases.")),v=o.some(p=>p.includes(".create")),_=o.some(p=>p.includes(".update")),m=o.some(p=>p.includes(".delete"));if(u){const p=l;v&&t.onProductCreate?t.onProductCreate(p):_&&t.onProductUpdate?t.onProductUpdate(p):m&&t.onProductDelete&&t.onProductDelete(p.$id)}else if(f){const p=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(p):_&&t.onPurchaseUpdate?t.onPurchaseUpdate(p):m&&t.onPurchaseDelete&&t.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:a=>{console.error("[Appwrite Interactions] Erreur realtime:",a),t.onError?.(a)}}))}catch(a){console.error("[Appwrite Interactions] Impossible de configurer realtime:",a),t.onError?.(a)}})(),()=>{r&&(r(),r=null)}}const ia=1e3,pc=500;class _c{#t=new Tl;#r=ue(null);#l=ue(!1);#c=ue(!1);#a=ue(null);#s=ue(!1);#i=ue(!1);#n=ue(null);#o=null;#u=null;#d=null;#f=null;#e=ue(ct({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return i(this.#e)}get currentMainId(){return i(this.#r)}get isInitialized(){return i(this.#l)}get loading(){return i(this.#c)}get error(){return i(this.#a)}get syncing(){return i(this.#s)}get realtimeConnected(){return i(this.#i)}get lastSync(){return i(this.#n)}#v=ie(()=>Array.from(this.#t.values()));get enrichedProducts(){return i(this.#v)}set enrichedProducts(t){k(this.#v,t)}#g=ie(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return i(this.#g)}set stats(t){k(this.#g,t)}#b=ie(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return i(this.#b)}set uniqueStores(t){k(this.#b,t)}#S=ie(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return i(this.#S)}set uniqueWho(t){k(this.#S,t)}#x=ie(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return i(this.#x)}set uniqueProductTypes(t){k(this.#x,t)}#p=ie(()=>this.enrichedProducts.filter(t=>this.#O(t)));get filteredProducts(){return i(this.#p)}set filteredProducts(t){k(this.#p,t)}#_=ie(()=>{const t=this.filteredProducts;return i(this.#e).groupBy==="none"?{"":t}:Object.groupBy(t,r=>i(this.#e).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return i(this.#_)}set filteredGroupedProducts(t){k(this.#_,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(i(this.#l)&&i(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),k(this.#r,t,!0),this.#o=Ks("products-enriched",t),this.#u=Ks("products-sync-metadata",t);try{await this.#y(),this.#t.size===0?await this.#$(t):await this.#C(),k(this.#l,!0);const r=this.#D();this.#d=hc(t,r)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw k(this.#a,n,!0),console.error("[ProductsStore]",n,r),r}}async#y(){if(this.#o)try{const t=localStorage.getItem(this.#o);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const r=ne.parse(t);r.forEach(([n,s])=>this.#t.set(n,s)),this.#M(),console.log(`[ProductsStore] ${r.length} produits chargés du cache`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}#E(){if(this.#o)try{const t=ne.stringify(Array.from(this.#t.entries()));localStorage.setItem(this.#o,t)}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}#P(){if(!this.#u||!i(this.#r))return;const t={lastSync:i(this.#n),mainId:i(this.#r)};try{localStorage.setItem(this.#u,JSON.stringify(t))}catch(r){console.error("[ProductsStore] Erreur persist metadata:",r)}}#M(){if(this.#u)try{const t=localStorage.getItem(this.#u);if(t){const r=JSON.parse(t);k(this.#n,r.lastSync,!0)}}catch(t){console.warn("[ProductsStore] Erreur restauration metadata:",t)}}async#$(t){k(this.#c,!0),k(this.#a,null);try{const n=await ac(t,{includePurchases:!0,limit:ia,orderBy:"productName",orderDirection:"asc"});n.forEach(s=>{const a=this.#k(s);this.#t.set(s.$id,a)}),this.#h(),this.#E(),this.#P(),console.log(`[ProductsStore] ${n.length} produits chargés et enrichis`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors du chargement";throw k(this.#a,n,!0),console.error("[ProductsStore]",n,r),r}finally{k(this.#c,!1)}}async#C(){if(i(this.#n)){k(this.#s,!0);try{const t={lastSync:i(this.#n),limit:ia},{products:r,purchases:n}=await ic(i(this.#r),t);r.length>0&&(r.forEach(s=>{const a=this.#k(s);this.#t.set(s.$id,a)}),console.log(`[ProductsStore] ${r.length} produits synchronisés`)),n.length>0&&this.#T(n),(r.length>0||n.length>0)&&(this.#h(),this.#E(),this.#P())}catch(t){console.error("[ProductsStore] Erreur sync:",t)}finally{k(this.#s,!1)}}}#k(t){const r=this.#B(t.purchases??[]),n=t.totalNeededConsolidated?this.#q(t.totalNeededConsolidated):[],{numeric:s,display:a}=this.#L(n,r);return{...t,storeInfo:t.store?this.#N(t.store):null,totalNeededArray:n,totalPurchasesArray:r,recipesArray:this.#N(t.recipesOccurrences)??[],stockArray:this.#N(t.stockReel)??[],missingQuantityArray:s,displayTotalNeeded:this.#I(n),displayTotalPurchases:this.#I(r),displayMissingQuantity:a}}#w(t){const r=this.#k(t);this.#t.set(t.$id,r)}#R(t){this.#t.delete(t)}#T(t){if(!t?.length)return;const r=new Set;t.forEach(s=>{s.products?.forEach(a=>{r.add(a.$id)})});const n=Array.from(this.#t.values()).filter(s=>r.has(s.$id));n.forEach(s=>{this.#w(s)}),console.log(`[ProductsStore] ${t.length} purchases appliqués à ${n.length} produit(s)`)}#D(){return{onProductCreate:t=>{this.#w(t),this.#h(),this.#m()},onProductUpdate:t=>{this.#w(t),this.#h(),this.#m()},onProductDelete:t=>{this.#R(t),this.#h(),this.#m()},onPurchaseCreate:t=>{this.#T([t]),this.#h(),this.#m()},onPurchaseUpdate:t=>{this.#T([t]),this.#h(),this.#m()},onPurchaseDelete:t=>{Array.from(this.#t.values()).filter(n=>n.purchases?.some(s=>s.$id===t)).forEach(n=>{this.#w(n)}),this.#h(),this.#m()},onConnect:()=>{k(this.#i,!0)},onDisconnect:()=>{k(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#m=(()=>{let t=null;return()=>{t&&clearTimeout(t),t=setTimeout(()=>{this.#E(),this.#P(),t=null},pc)}})();#h(){k(this.#n,new Date().toISOString(),!0)}#O(t){if(i(this.#e).searchQuery.trim()){const r=i(this.#e).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(i(this.#e).selectedStores.length>0&&(!t.storeInfo?.storeName||!i(this.#e).selectedStores.includes(t.storeInfo.storeName))||i(this.#e).selectedWho.length>0&&(!t.who||!t.who.some(r=>i(this.#e).selectedWho.includes(r)))||i(this.#e).selectedProductTypes.length>0&&(!t.productType||!i(this.#e).selectedProductTypes.includes(t.productType))||i(this.#e).selectedTemperatures.length>0&&!(i(this.#e).selectedTemperatures.includes("frais")&&t.pFrais||i(this.#e).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery(t){i(this.#e).searchQuery=t}toggleProductType(t){const r=i(this.#e).selectedProductTypes.indexOf(t);r>-1?i(this.#e).selectedProductTypes.splice(r,1):i(this.#e).selectedProductTypes.push(t)}toggleTemperature(t){const r=i(this.#e).selectedTemperatures.indexOf(t);r>-1?i(this.#e).selectedTemperatures.splice(r,1):i(this.#e).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){i(this.#e).selectedProductTypes=[],i(this.#e).selectedTemperatures=[]}setGroupBy(t){i(this.#e).groupBy=t}toggleStore(t){const r=i(this.#e).selectedStores.indexOf(t);r>-1?i(this.#e).selectedStores.splice(r,1):i(this.#e).selectedStores.push(t)}toggleWho(t){const r=i(this.#e).selectedWho.indexOf(t);r>-1?i(this.#e).selectedWho.splice(r,1):i(this.#e).selectedWho.push(t)}clearStoreFilters(){i(this.#e).selectedStores=[]}clearWhoFilters(){i(this.#e).selectedWho=[]}handleSort(t){i(this.#e).sortColumn===t?i(this.#e).sortDirection=i(this.#e).sortDirection==="asc"?"desc":"asc":(i(this.#e).sortColumn=t,i(this.#e).sortDirection="asc")}clearFilters(){k(this.#e,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return i(this.#e).sortColumn?[...t].sort((r,n)=>{let s=r[i(this.#e).sortColumn],a=n[i(this.#e).sortColumn];return i(this.#e).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,a=parseFloat(a)||0):i(this.#e).sortColumn==="purchases"&&(s=r.purchases?.length||0,a=n.purchases?.length||0),s<a?i(this.#e).sortDirection==="asc"?-1:1:s>a?i(this.#e).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#t.get(t)??null}get enrichedProductsCount(){return this.#t.size}async forceReload(t){this.#t.clear(),k(this.#n,null),await this.#$(t)}clearCache(){this.#t.clear(),k(this.#n,null),this.#o&&localStorage.removeItem(this.#o),this.#u&&localStorage.removeItem(this.#u),console.log("[ProductsStore] Cache vidé")}destroy(){this.#d?.(),this.#d=null,console.log("[ProductsStore] Ressources nettoyées")}#N(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(r){return console.warn("[ProductsStore] Erreur parsing JSON:",r),null}}#q(t){try{return JSON.parse(t).map(n=>({quantity:parseFloat(n.quantity),unit:n.unit})).filter(n=>!isNaN(n.quantity))}catch(r){return console.error("[ProductsStore] Erreur parsing NumericQuantity:",r),[]}}#B(t){if(!t?.length)return[];const r=new Map;return t.forEach(n=>{if(!n.quantity||!n.unit)return;const s=parseFloat(n.quantity);if(isNaN(s))return;const a=r.get(n.unit)||0;r.set(n.unit,a+s)}),Array.from(r.entries()).map(([n,s])=>({quantity:s,unit:n}))}#L(t,r){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!r?.length){const u=t.map(f=>this.#A(f.quantity.toString(),f.unit)).join(" et ");return{numeric:t,display:u}}const n=new Map,s=new Map;t.forEach(u=>{const f=parseFloat(u.quantity);isNaN(f)||n.set(u.unit,(n.get(u.unit)||0)+f)}),r.forEach(u=>{s.set(u.unit,(s.get(u.unit)||0)+u.quantity)});const a=[],o=[];n.forEach((u,f)=>{const v=s.get(f)||0,_=u-v;_>0&&(a.push({quantity:_,unit:f}),o.push(this.#A(_.toString(),f)))});const l=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:l}}#I(t){return t?.length?t.map(r=>this.#A(r.quantity.toString(),r.unit)).join(" et "):"-"}#A(t,r){const n=parseFloat(t);if(isNaN(n))return`${t} ${r}`;if((r==="gr."||r==="ml")&&n>=1e3){const s=n/1e3,a=r==="gr."?"kg":"l.";let l=(Math.round(s*100)/100).toString();return l.endsWith(",0")&&(l=l.slice(0,-2)),l.endsWith(",00")&&(l=l.slice(0,-3)),`${l} ${a}`}if(!["gr.","ml","kg","l."].includes(r)){let a=(Math.round(n*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${r}`}return`${n} ${r}`}}const L=new _c;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const mc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var gc=nl("<svg><!><!></svg>");function me(e,t){Z(t,!0);const r=Pr(t,"color",3,"currentColor"),n=Pr(t,"size",3,24),s=Pr(t,"strokeWidth",3,2),a=Pr(t,"absoluteStrokeWidth",3,!1),o=Pr(t,"iconNode",19,()=>[]),l=he(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=gc();Vs(u,_=>({...mc,...l,width:n(),height:n(),stroke:r(),"stroke-width":_,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>a()?Number(s())*24/Number(n()):s()]);var f=c(u);Je(f,17,o,ol,(_,m)=>{var p=ie(()=>va(i(m),2));let g=()=>i(p)[0],S=()=>i(p)[1];var w=Y(),E=H(w);ul(E,g,!0,(R,M)=>{Vs(R,()=>({...S()}))}),h(_,w)});var v=d(f);ve(v,()=>t.children??le),h(e,u),J()}function us(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];me(e,_e({name:"archive"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function bc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];me(e,_e({name:"bean"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function yc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];me(e,_e({name:"beef"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function wc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];me(e,_e({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function Sc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];me(e,_e({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function xc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];me(e,_e({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function Ec(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];me(e,_e({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function Pc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];me(e,_e({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function kc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];me(e,_e({name:"combine"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function Tc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];me(e,_e({name:"egg"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function ds(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];me(e,_e({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function oa(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];me(e,_e({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function Nc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];me(e,_e({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function Ac(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];me(e,_e({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function yn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];me(e,_e({name:"package"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function $c(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];me(e,_e({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function Ic(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];me(e,_e({name:"save"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function Mc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];me(e,_e({name:"search"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function wn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];me(e,_e({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function Tn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];me(e,_e({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function Sn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];me(e,_e({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function Kr(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];me(e,_e({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function an(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];me(e,_e({name:"store"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function Cc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];me(e,_e({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function Rc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];me(e,_e({name:"user"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function Nn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];me(e,_e({name:"users"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function Dc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];me(e,_e({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}function pt(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=he(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];me(e,_e({name:"x"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=H(o);ve(l,()=>t.children??le),h(s,o)},$$slots:{default:!0}})),J()}const Ot=ct({product:{id:"",isOpen:!1,tab:"recettes"}});function Oc(e,t){Ot.product.tab=e,Ot.product.isOpen=!0,Ot.product.id=t}function la(){Ot.product.isOpen=!1,Ot.product.tab="",Ot.product.id=""}let ca=()=>localStorage.getItem("appwrite-user-name")||"";function qc(e,t,r){k(t,null),r.onCancelEditPurchase()}async function Bc(e,t,r){await t.onSavePurchase(),k(r,null)}var Lc=x('<span class="loading loading-spinner loading-sm"></span>'),jc=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),zc=x('<span class="loading loading-spinner loading-sm"></span>'),Vc=x('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input input-bordered w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input input-bordered w-24"/></td><td><input type="text" class="input input-bordered w-20"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="0.01" class="input input-bordered w-16"/></td><td><input type="text" class="input input-bordered w-24"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Wc=(e,t,r)=>t(i(r)),Uc=(e,t,r)=>t(i(r).$id),Gc=x('<span class="loading loading-spinner loading-sm"></span>'),Qc=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Hc=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Kc=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"><div class="form-control"><label for="purchase-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="purchase-quantity" type="number" step="0.01" class="input input-bordered validator" required/></div> <div class="form-control"><label for="purchase-unit" class="label"><span class="label-text">Unité</span></label> <select id="purchase-unit" class="select select-bordered validator" required><option disabled selected>Sélectionner</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></div> <div class="form-control"><label for="purchase-store" class="label"><span class="label-text">Magasin</span></label> <input id="purchase-store" type="text" class="input input-bordered" placeholder="Ex: Marché"/></div> <div class="form-control"><label for="purchase-who" class="label"><span class="label-text">Qui a acheté ?</span></label> <input id="purchase-who" type="text" class="input input-bordered" placeholder="Votre nom"/></div> <div class="form-control"><label for="purchase-price" class="label"><span class="label-text">Prix (€)</span></label> <input id="purchase-price" type="number" step="1" class="input input-bordered" placeholder="0.00"/></div> <div class="form-control"><label for="purchase-notes" class="label"><span class="label-text">Notes</span></label> <input id="purchase-notes" type="text" class="input input-bordered" placeholder="Promotion, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function Yc(e,t){Z(t,!0);let r=Pr(t,"newPurchase",7),n=ue(null);function s(T,X){return X==="gr."&&T>=1e3?`${(T/1e3).toFixed(1)} kg`:X==="ml"&&T>=1e3?`${(T/1e3).toFixed(1)} l`:`${T} ${X}`}function a(T){return new Date(T).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function o(T){k(n,{...T},!0),t.onStartEditPurchase(T)}async function l(T){await t.onDeletePurchase(T)}var u=Kc(),f=c(u),v=c(f);Tn(v,{class:"w-5 h-5"});var _=d(f,2),m=c(_),p=d(c(m),2),g=c(p),S=d(c(g),2),w=d(g,2),E=d(c(w),2),R=c(E);R.value=R.__value="";var M=d(R);M.value=M.__value="kg";var A=d(M);A.value=A.__value="gr.";var N=d(A);N.value=N.__value="l.";var $=d(N);$.value=$.__value="ml";var B=d($);B.value=B.__value="unité";var V=d(B);V.value=V.__value="bottes";var z=d(w,2),ee=d(c(z),2),ge=d(z,2),C=d(c(ge),2),O=d(ge,2),se=d(c(O),2),ae=d(O,2),be=d(c(ae),2),Ce=d(p,2),P=c(Ce);P.__click=function(...T){t.onAddPurchase?.apply(this,T)};var y=c(P);{var q=T=>{var X=Lc();h(T,X)},de=T=>{var X=lt("Ajouter l'achat");h(T,X)};D(y,T=>{t.loading?T(q):T(de,!1)})}var qe=d(_,2);{var Le=T=>{var X=jc(),Ie=c(X);Tn(Ie,{class:"w-12 h-12 mx-auto mb-2"}),h(T,X)},He=T=>{var X=Hc(),Ie=c(X),Re=d(c(Ie));Je(Re,21,()=>t.currentProductPurchases,Ne=>Ne.$id,(Ne,fe)=>{var xe=Y(),st=H(xe);{var Fe=at=>{var Ke=Vc(),Ae=c(Ke),it=c(Ae),mt=c(it),gt=d(mt,2),dt=c(gt);dt.value=dt.__value="kg";var Bt=d(dt);Bt.value=Bt.__value="gr.";var Tt=d(Bt);Tt.value=Tt.__value="l.";var Ye=d(Tt);Ye.value=Ye.__value="ml";var bt=d(Ye);bt.value=bt.__value="unité";var Lt=d(bt);Lt.value=Lt.__value="bottes";var jt=d(Ae),Nt=c(jt),yt=d(jt),cr=c(yt),wt=d(yt),zt=c(wt),At=d(wt),St=c(At),Vt=d(At),ur=c(Vt),et=d(Vt),$t=c(et),Yt=c($t);Yt.__click=[Bc,t,n];var Lr=c(Yt);{var jr=U=>{var xt=zc();h(U,xt)},zr=U=>{Ic(U,{class:"w-3 h-3"})};D(Lr,U=>{t.loading?U(jr):U(zr,!1)})}var W=d(Yt,2);W.__click=[qc,n,t];var ce=c(W);pt(ce,{class:"w-3 h-3"}),j(U=>{I(zt,U),Yt.disabled=t.loading},[()=>a(i(fe).$createdAt)]),Ue(mt,()=>i(n).quantity,U=>i(n).quantity=U),ss(gt,()=>i(n).unit,U=>i(n).unit=U),Ue(Nt,()=>i(n).store,U=>i(n).store=U),Ue(cr,()=>i(n).who,U=>i(n).who=U),Ue(St,()=>i(n).price,U=>i(n).price=U),Ue(ur,()=>i(n).notes,U=>i(n).notes=U),h(at,Ke)},lr=at=>{var Ke=Qc(),Ae=c(Ke),it=c(Ae),mt=d(Ae),gt=c(mt),dt=d(mt),Bt=c(dt),Tt=d(dt),Ye=c(Tt),bt=d(Tt),Lt=c(bt),jt=d(bt),Nt=c(jt),yt=d(jt),cr=c(yt),wt=c(cr);wt.__click=[Wc,o,fe];var zt=c(wt);Kr(zt,{class:"w-4 h-4"});var At=d(wt,2);At.__click=[Uc,l,fe];var St=c(At);{var Vt=et=>{var $t=Gc();h(et,$t)},ur=et=>{pt(et,{class:"w-4 h-4"})};D(St,et=>{t.loading?et(Vt):et(ur,!1)})}j((et,$t)=>{I(it,et),I(gt,i(fe).store),I(Bt,i(fe).who),I(Ye,$t),I(Lt,i(fe).price?`${i(fe).price}€`:"-"),I(Nt,i(fe).notes||"-"),At.disabled=t.loading},[()=>s(i(fe).quantity,i(fe).unit),()=>a(i(fe).$createdAt)]),h(at,Ke)};D(st,at=>{i(n)?.$id===i(fe).$id?at(Fe):at(lr,!1)})}h(Ne,xe)}),h(T,X)};D(qe,T=>{t.currentProductPurchases.length===0?T(Le):T(He,!1)})}j(()=>P.disabled=t.loading),Ue(S,()=>r().quantity,T=>r().quantity=T),ss(E,()=>r().unit,T=>r().unit=T),Ue(ee,()=>r().store,T=>r().store=T),Ue(C,()=>r().who,T=>r().who=T),Ue(se,()=>r().price,T=>r().price=T),Ue(be,()=>r().notes,T=>r().notes=T),h(e,u),J()}or(["click"]);var Zc=x('<span class="loading loading-spinner loading-sm"></span>'),Jc=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Xc=(e,t,r)=>t(i(r).dateTime),Fc=x('<span class="loading loading-spinner loading-xs"></span>'),eu=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),tu=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),ru=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"><div class="form-control"><label for="stock-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="stock-quantity" type="number" step="0.01" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-unit" class="label"><span class="label-text">Unité</span></label> <select id="stock-unit" class="select select-bordered select-sm" required><option>Sélectionner</option><option>kg</option><option>g</option><option>l</option><option>ml</option><option>unités</option><option>pièces</option></select></div> <div class="form-control"><label for="stock-datetime" class="label"><span class="label-text">Date du stock</span></label> <input id="stock-datetime" type="datetime-local" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-notes" class="label"><span class="label-text">Notes</span></label> <input id="stock-notes" type="text" class="input input-bordered input-sm" placeholder="Origine, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function nu(e,t){Z(t,!0);let r={quantity:"",unit:"",dateTime:"",notes:""};function n(y,q){return q==="g"&&y>=1e3?`${(y/1e3).toFixed(1)} kg`:q==="ml"&&y>=1e3?`${(y/1e3).toFixed(1)} l`:q==="unités"||q==="pièces"?`${y} ${q}`:`${y} ${q}`}function s(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}async function a(y){await t.onDeleteStock(y)}var o=ru(),l=c(o),u=c(l);us(u,{class:"w-5 h-5"});var f=d(l,2),v=c(f),_=d(c(v),2),m=c(_),p=d(c(m),2),g=d(m,2),S=d(c(g),2),w=c(S);w.value=w.__value="";var E=d(w);E.value=E.__value="kg";var R=d(E);R.value=R.__value="g";var M=d(R);M.value=M.__value="l";var A=d(M);A.value=A.__value="ml";var N=d(A);N.value=N.__value="unités";var $=d(N);$.value=$.__value="pièces";var B=d(g,2),V=d(c(B),2),z=d(B,2),ee=d(c(z),2),ge=d(_,2),C=c(ge);C.__click=function(...y){t.onAddStock?.apply(this,y)};var O=c(C);{var se=y=>{var q=Zc();h(y,q)},ae=y=>{var q=lt("Ajouter au stock");h(y,q)};D(O,y=>{t.loading?y(se):y(ae,!1)})}var be=d(f,2);{var Ce=y=>{var q=Jc(),de=c(q);us(de,{class:"w-12 h-12 mx-auto mb-2"}),h(y,q)},P=y=>{var q=tu(),de=c(q),qe=d(c(de));Je(qe,23,()=>t.stockEntries,Le=>Le.dateTime,(Le,He)=>{var T=eu(),X=c(T),Ie=c(X),Re=d(X),Ne=c(Re),fe=d(Re),xe=c(fe),st=d(fe),Fe=c(st);Fe.__click=[Xc,a,He];var lr=c(Fe);{var at=Ae=>{var it=Fc();h(Ae,it)},Ke=Ae=>{var it=lt("Supprimer");h(Ae,it)};D(lr,Ae=>{t.loading?Ae(at):Ae(Ke,!1)})}j((Ae,it)=>{I(Ie,Ae),I(Ne,it),I(xe,i(He).notes||"-"),Fe.disabled=t.loading},[()=>n(i(He).quantity,i(He).unit),()=>s(i(He).dateTime)]),h(Le,T)}),h(y,q)};D(be,y=>{t.stockEntries.length===0?y(Ce):y(P,!1)})}j(()=>C.disabled=t.loading),Ue(p,()=>r.quantity,y=>r.quantity=y),ss(S,()=>r.unit,y=>r.unit=y),Ue(V,()=>r.dateTime,y=>r.dateTime=y),Ue(ee,()=>r.notes,y=>r.notes=y),h(e,o),J()}or(["click"]);var su=(e,t)=>{e.key==="Enter"&&t()},au=x('<span class="loading loading-spinner loading-sm"></span>'),iu=x('<span class="badge badge-primary badge-sm"> </span>'),ou=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun volontaire assigné à ce produit</p></div>'),lu=(e,t,r)=>t(r),cu=x('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs p-0 hover:text-error"><!></button></div>'),uu=x('<div class="flex flex-wrap gap-2"></div>'),du=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des volontaires</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <div class="flex gap-2"><div class="form-control flex-1"><input type="text" class="input input-bordered input-sm" placeholder="Nom du volontaire"/></div> <button class="btn btn-primary btn-sm"><!></button></div></div></div> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Volontaires <!></h4> <!></div></div></div>');function fu(e,t){Z(t,!0);let r=ue("");async function n(){i(r).trim()&&(await t.onAddVolunteer(i(r).trim()),k(r,""))}async function s(z){await t.onRemoveVolunteer(z)}var a=du(),o=c(a),l=c(o);Nn(l,{class:"w-5 h-5"});var u=d(o,2),f=c(u),v=d(c(f),2),_=c(v),m=c(_);m.__keydown=[su,n];var p=d(_,2);p.__click=n;var g=c(p);{var S=z=>{var ee=au();h(z,ee)},w=z=>{var ee=lt("Ajouter");h(z,ee)};D(g,z=>{t.loading?z(S):z(w,!1)})}var E=d(u,2),R=c(E),M=c(R),A=d(c(M));{var N=z=>{var ee=iu(),ge=c(ee);j(()=>I(ge,t.editingWho.length)),h(z,ee)};D(A,z=>{t.editingWho.length>0&&z(N)})}var $=d(M,2);{var B=z=>{var ee=ou(),ge=c(ee);Nn(ge,{class:"w-12 h-12 mx-auto mb-2"}),h(z,ee)},V=z=>{var ee=uu();Je(ee,20,()=>t.editingWho,ge=>ge,(ge,C)=>{var O=cu(),se=c(O),ae=d(se);ae.__click=[lu,s,C];var be=c(ae);pt(be,{class:"w-3 h-3"}),j(()=>{I(se,`${C??""} `),ae.disabled=t.loading}),h(ge,O)}),h(z,ee)};D($,z=>{t.editingWho.length===0?z(B):z(V,!1)})}j(()=>p.disabled=t.loading),Ue(m,()=>i(r),z=>k(r,z)),h(e,a),J()}or(["keydown","click"]);var vu=(e,t)=>{e.key==="Enter"&&t()},hu=x('<span class="loading loading-spinner loading-sm"></span>'),pu=(e,t,r)=>{k(t,""),k(r,"")},_u=(e,t,r)=>t(r),mu=x('<button class="btn btn-outline btn-xs"> </button>'),gu=x('<br/><small class="opacity-75"> </small>',1),bu=x('<p class="text-sm"><strong>Magasin défini :</strong> <!></p>'),yu=x('<p class="text-sm"><strong>Magasin défini :</strong> </p>'),wu=x(`<p class="text-sm">Aucun magasin n'est encore défini pour ce produit</p>`),Su=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des magasins</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin principal</h4> <p class="text-sm opacity-75 mb-4">Définissez le magasin où ce produit est généralement acheté</p> <div class="form-control mb-3"><label class="label" for="store-name"><span class="label-text">Nom du magasin</span></label> <input id="store-name" type="text" class="input input-bordered input-sm" placeholder="Ex: Carrefour, Leclerc..."/></div> <div class="form-control mb-4"><label class="label" for="store-comment"><span class="label-text">Commentaire (optionnel)</span></label> <textarea id="store-comment" class="textarea textarea-bordered textarea-sm" placeholder="Ex: Près de la caisse, rayon frais, etc." rows="2"></textarea></div> <div class="flex gap-2 mb-4"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div> <div class="divider"></div> <div class="form-control"><label class="label" for="suggested-stores"><span class="label-text text-sm">Suggestions rapides</span></label> <div class="flex flex-wrap gap-2" id="suggested-stores"></div></div> <div class="divider"></div> <div class="alert alert-info"><!> <div><h4 class="font-semibold">Information sur le magasin actuel</h4> <!></div></div></div></div></div>');function xu(e,t){Z(t,!0);let r=ue(ct(t.editingStore?.storeName||"")),n=ue(ct(t.editingStore?.storeComment||""));Ca(()=>{if(t.product?.storeInfo)k(r,t.product.storeInfo.storeName||"",!0),k(n,t.product.storeInfo.storeComment||"",!0);else if(t.product?.store)try{const O=JSON.parse(t.product.store);k(r,O.storeName||"",!0),k(n,O.storeComment||"",!0)}catch{k(r,t.product.store||"",!0),k(n,"")}else k(r,""),k(n,"")});async function s(){const O=i(r).trim()?{storeName:i(r).trim(),storeComment:i(n).trim()||""}:null;await t.onUpdateStore(O)}function a(O){k(r,O,!0)}var o=Su(),l=c(o),u=c(l);an(u,{class:"w-5 h-5"});var f=d(l,2),v=c(f),_=d(c(v),4),m=d(c(_),2);m.__keydown=[vu,s];var p=d(_,2),g=d(c(p),2),S=d(p,2),w=c(S);w.__click=s;var E=c(w);{var R=O=>{var se=hu();h(O,se)},M=O=>{var se=lt("Mettre à jour");h(O,se)};D(E,O=>{t.loading?O(R):O(M,!1)})}var A=d(w,2);A.__click=[pu,r,n];var N=d(S,4),$=d(c(N),2);Je($,20,()=>["Carrefour","Intermarché","Leclerc","Auchan","Lidl","Aldi","Casino","Monoprix","Franprix","Bio c' Bon","Naturalia"],O=>O,(O,se)=>{var ae=mu();ae.__click=[_u,a,se];var be=c(ae);j(()=>{ae.disabled=t.loading,I(be,se)}),h(O,ae)});var B=d(N,4),V=c(B);an(V,{class:"w-4 h-4"});var z=d(V,2),ee=d(c(z),2);{var ge=O=>{var se=bu(),ae=d(c(se)),be=d(ae);{var Ce=P=>{var y=gu(),q=d(H(y)),de=c(q);j(()=>I(de,t.product.storeInfo.storeComment)),h(P,y)};D(be,P=>{t.product.storeInfo.storeComment&&P(Ce)})}j(()=>I(ae,` ${t.product.storeInfo.storeName??""} `)),h(O,se)},C=O=>{var se=Y(),ae=H(se);{var be=P=>{var y=yu(),q=d(c(y));j(()=>I(q,` ${t.product.store??""}`)),h(P,y)},Ce=P=>{var y=wu();h(P,y)};D(ae,P=>{t.product?.store?P(be):P(Ce,!1)},!0)}h(O,se)};D(ee,O=>{t.product?.storeInfo?O(ge):O(C,!1)})}j(()=>{w.disabled=t.loading,A.disabled=t.loading}),Ue(m,()=>i(r),O=>k(r,O)),Ue(g,()=>i(n),O=>k(n,O)),h(e,o),J()}or(["keydown","click"]);var Eu=x('<div class="badge badge-success gap-1"><!> Actif</div>'),Pu=x('<div class="badge badge-warning gap-1"><!> </div>'),ku=(e,t)=>t("recettes"),Tu=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Nu=(e,t)=>t("achats"),Au=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),$u=(e,t)=>t("stock"),Iu=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Mu=(e,t)=>t("volontaires"),Cu=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Ru=(e,t)=>t("magasins"),Du=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Ou=x('<div class="text-center py-8 opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),qu=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>'),Bu=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Horaire</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),Lu=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Recettes utilisant ce produit</h3> <!></div>'),ju=x('<div class="modal modal-open"><div class="modal-box max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"><div class="flex items-center justify-between p-4 border-b"><div class="flex-1"><h2 class="text-xl font-bold"> </h2> <div class="flex items-center gap-3 mt-2"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div></div> <button class="btn btn-circle btn-ghost btn-sm" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="flex-1 overflow-y-auto p-4 min-h-96"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function zu(e,t){Z(t,!0);let r=ie(()=>Ot.product.tab),n=ie(()=>Ot.product.id),s=ie(()=>Ot.product.isOpen),a=ie(()=>L.getEnrichedProductById(i(n))),o=ue(!1),l=ue(null),u=ct(i(a)?.storeInfo||null),f=ue(ct({quantity:null,unit:"",store:i(a)?.storeInfo?.storeName||"",who:ca()||"",price:null,notes:""})),v=ue(ct({quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()})),_=ie(()=>i(a)?.stockReel?fc(i(a).stockReel):[]),m=ue(null),p=ie(()=>{const P=i(a)?.purchases;if(!P||!Array.isArray(P))return console.warn("[ProductModal] Purchases is not a valid array:",P),[];const y=P.filter(q=>!q||typeof q!="object"?(console.warn("[ProductModal] Invalid purchase object:",q),!1):q.$id?!0:(console.warn("[ProductModal] Purchase missing $id:",q),!1));return y.length!==P.length&&console.warn(`[ProductModal] Filtered ${P.length-y.length} invalid purchases`),y}),g=ie(()=>vc(i(a)?.recipesOccurrences||null)),S=ie(()=>i(a)?.who||[]);function w(){k(f,{quantity:null,unit:"",store:i(a)?.storeInfo?.storeName||"",who:ca(),price:null,notes:""},!0),k(v,{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString().slice(0,16)},!0)}function E(P){Ot.product.tab=P}async function R(P){k(o,!0),k(l,null);try{return await P()}catch(y){return k(l,y instanceof Error?y.message:"Une erreur est survenue",!0),console.error("[ProductModal] Erreur:",y),null}finally{k(o,!1)}}function M(P){if(!P)return"-";try{return new Date(P).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return P}}function A(P){if(!P)return"-";try{const y=JSON.parse(P);if(Array.isArray(y)&&y.length>0)return y.map(q=>`${q.value} ${q.unit}`).join(" et ")}catch{return P}return P}async function N(){i(a)&&(k(o,!0),await R(async()=>{if(!i(f).quantity||!i(f).unit.trim())throw new Error("Veuillez remplir les champs obligatoires");let P=i(f).quantity,y=i(f).unit;if(i(f).unit==="kg"?(P=i(f).quantity*1e3,y="gr."):i(f).unit==="l."&&(P=i(f).quantity*1e3,y="ml"),await lc({products:[i(a).$id],mainId:i(a).mainId,unit:y,quantity:P,store:i(f).store||null,who:i(f).who||null,notes:i(f).notes||"",price:i(f).price||null})){w();const de=new CustomEvent("toast",{detail:{type:"success",message:"Achat ajouté avec succès"}});window.dispatchEvent(de)}}))}function $(P){k(m,{...P},!0)}function B(){k(m,null)}async function V(){i(m)&&await R(async()=>{const P=i(m).$id;let y=i(m).quantity,q=i(m).unit;i(m).unit==="kg"?(y=i(m).quantity*1e3,q="gr."):i(m).unit==="l."&&(y=i(m).quantity*1e3,q="ml");const de={unit:q,quantity:y,store:i(m)?.store||null,who:i(m)?.who||null,notes:i(m)?.notes||"",price:i(m)?.price||null};if(await cc(P,de)){k(m,null);const Le=new CustomEvent("toast",{detail:{type:"success",message:"Achat modifié avec succès"}});window.dispatchEvent(Le)}})}async function z(P){const y=i(p).find(q=>q.$id===P);confirm(`Êtes-vous sûr de vouloir supprimer cet achat (${y?.quantity} ${y?.unit}) ?`)&&await R(async()=>{await uc(P);const q=new CustomEvent("toast",{detail:{type:"success",message:"Achat supprimé avec succès"}});window.dispatchEvent(q)})}async function ee(){i(a)&&await R(async()=>{if(!i(v).quantity||!i(v).unit)throw new Error("Veuillez remplir les champs obligatoires");const P={quantity:i(v).quantity.toString(),unit:i(v).unit,notes:i(v).notes||"",dateTime:i(v).dateTime||new Date().toISOString()},y=[...i(_),P],q=i(a).$id;if(await aa(q,JSON.stringify(y))){k(_,y),w();const qe=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock ajouté avec succès"}});window.dispatchEvent(qe)}})}async function ge(P){confirm("Êtes-vous sûr de vouloir supprimer ce relevé de stock ?")&&i(a)&&await R(async()=>{const y=i(_).filter((de,qe)=>qe!==P);if(await aa(i(a).$id,JSON.stringify(y))){k(_,y);const de=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock supprimé avec succès"}});window.dispatchEvent(de)}})}async function C(P){!i(a)||!P.trim()||await R(async()=>{const y=P.trim();if(i(S).includes(y))throw new Error("Ce volontaire est déjà ajouté");const q=[...i(S),y];if(await sa(i(a).$id,q)){const qe=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire ajouté avec succès"}});window.dispatchEvent(qe)}})}async function O(P){i(a)&&confirm(`Retirer ${P} de la liste des volontaires ?`)&&await R(async()=>{const y=i(S).filter(de=>de!==P);if(await sa(i(a).$id,y)){const de=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire retiré avec succès"}});window.dispatchEvent(de)}})}async function se(P){i(a)&&await R(async()=>{const y=P!==void 0?P:u?.storeName&&u.storeName.trim()!==""?u.storeName.trim():i(a).store;if(console.log("[ProductModal] handleUpdateStore called with:",{storeInfo:P,editingStore:u,finalStoreValue:y}),await oc(i(a).$id,y)){const de=new CustomEvent("toast",{detail:{type:"success",message:"Magasin mis à jour avec succès"}});window.dispatchEvent(de)}})}var ae=Y(),be=H(ae);{var Ce=P=>{var y=ju(),q=c(y),de=c(q),qe=c(de),Le=c(qe),He=c(Le),T=d(Le,2),X=c(T),Ie=c(X),Re=d(X,2);{var Ne=W=>{var ce=Eu(),U=c(ce);Pc(U,{class:"w-3 h-3"}),h(W,ce)},fe=W=>{var ce=Pu(),U=c(ce);Cc(U,{class:"w-3 h-3"});var xt=d(U);j(()=>I(xt,` ${i(a).status??""}`)),h(W,ce)};D(Re,W=>{i(a).status==="active"?W(Ne):W(fe,!1)})}var xe=d(Re,2),st=d(c(xe)),Fe=d(qe,2);Fe.__click=function(...W){la?.apply(this,W)};var lr=c(Fe);pt(lr,{class:"w-4 h-4"});var at=d(de,2),Ke=c(at);Ke.__click=[ku,E];var Ae=c(Ke);yn(Ae,{class:"w-4 h-4 mr-1"});var it=d(Ae,2);{var mt=W=>{var ce=Tu(),U=c(ce);j(()=>I(U,i(g).length)),h(W,ce)};D(it,W=>{i(g).length>0&&W(mt)})}var gt=d(Ke,2);gt.__click=[Nu,E];var dt=c(gt);Tn(dt,{class:"w-4 h-4 mr-1"});var Bt=d(dt,2);{var Tt=W=>{var ce=Au(),U=c(ce);j(()=>I(U,i(p).length)),h(W,ce)};D(Bt,W=>{i(p).length>0&&W(Tt)})}var Ye=d(gt,2);Ye.__click=[$u,E];var bt=c(Ye);us(bt,{class:"w-4 h-4 mr-1"});var Lt=d(bt,2);{var jt=W=>{var ce=Iu(),U=c(ce);j(()=>I(U,i(_).length)),h(W,ce)};D(Lt,W=>{i(_).length>0&&W(jt)})}var Nt=d(Ye,2);Nt.__click=[Mu,E];var yt=c(Nt);Nn(yt,{class:"w-4 h-4 mr-1"});var cr=d(yt,2);{var wt=W=>{var ce=Cu(),U=c(ce);j(()=>I(U,i(a).who.length)),h(W,ce)};D(cr,W=>{i(a).who&&i(a).who.length>0&&W(wt)})}var zt=d(Nt,2);zt.__click=[Ru,E];var At=c(zt);an(At,{class:"w-4 h-4 mr-1"});var St=d(at,2),Vt=c(St);{var ur=W=>{var ce=Du(),U=c(ce);pt(U,{class:"w-4 h-4"});var xt=d(U,2),Zt=c(xt);j(()=>I(Zt,`erreur : ${i(l)??""}`)),h(W,ce)};D(Vt,W=>{i(l)&&W(ur)})}var et=d(Vt,2),$t=c(et);{var Yt=W=>{var ce=Lu(),U=c(ce),xt=c(U);yn(xt,{class:"w-5 h-5"});var Zt=d(U,2);{var It=te=>{var je=Ou(),ze=c(je);yn(ze,{class:"w-12 h-12 mx-auto mb-2"}),h(te,je)},Q=te=>{var je=Bu(),ze=c(je),ke=d(c(ze));Je(ke,21,()=>i(g),Me=>Me.recipeName+Me.dateTimeService,(Me,De)=>{var ye=qu(),Se=c(ye),oe=c(Se),G=d(Se),Ee=c(G),Pe=d(G),Ve=c(Pe),ft=d(Pe),Wt=c(ft),Ut=d(ft),tt=c(Ut),Et=d(Ut),Vr=c(Et);j(Wr=>{I(oe,i(De).recipeName),I(Ee,`${i(De).quantity??""} ${i(De).unit??""}`),I(Ve,Wr),I(Wt,i(De).horaire||"-"),I(tt,i(De).typePlat||"-"),I(Vr,i(De).assiettes||"-")},[()=>M(i(De).dateTimeService)]),h(Me,ye)}),h(te,je)};D(Zt,te=>{i(g).length===0?te(It):te(Q,!1)})}h(W,ce)},Lr=W=>{var ce=Y(),U=H(ce);{var xt=It=>{Yc(It,{get product(){return i(a)},get currentProductPurchases(){return i(p)},get loading(){return i(o)},get newPurchase(){return i(f)},onAddPurchase:N,onStartEditPurchase:$,onCancelEditPurchase:B,onSavePurchase:V,onDeletePurchase:z})},Zt=It=>{var Q=Y(),te=H(Q);{var je=ke=>{nu(ke,{get product(){return i(a)},get stockEntries(){return i(_)},get loading(){return i(o)},onAddStock:ee,onDeleteStock:ge})},ze=ke=>{var Me=Y(),De=H(Me);{var ye=oe=>{fu(oe,{get product(){return i(a)},get editingWho(){return i(S)},get loading(){return i(o)},onAddVolunteer:C,onRemoveVolunteer:O})},Se=oe=>{var G=Y(),Ee=H(G);{var Pe=Ve=>{xu(Ve,{get product(){return i(a)},get editingStore(){return u},get loading(){return i(o)},onUpdateStore:se})};D(Ee,Ve=>{i(r)==="magasins"&&Ve(Pe)},!0)}h(oe,G)};D(De,oe=>{i(r)==="volontaires"?oe(ye):oe(Se,!1)},!0)}h(ke,Me)};D(te,ke=>{i(r)==="stock"?ke(je):ke(ze,!1)},!0)}h(It,Q)};D(U,It=>{i(r)==="achats"?It(xt):It(Zt,!1)},!0)}h(W,ce)};D($t,W=>{i(r)==="recettes"?W(Yt):W(Lr,!1)})}var jr=d(St,2),zr=c(jr);zr.__click=function(...W){la?.apply(this,W)},j(W=>{I(He,i(a).productName),I(Ie,i(a).productType),I(st,` ${W??""}`),$e(Ke,1,`tab ${i(r)==="recettes"?"tab-active":""}`),$e(gt,1,`tab ${i(r)==="achats"?"tab-active":""}`),$e(Ye,1,`tab ${i(r)==="stock"?"tab-active":""}`),$e(Nt,1,`tab ${i(r)==="volontaires"?"tab-active":""}`),$e(zt,1,`tab ${i(r)==="magasins"?"tab-active":""}`)},[()=>A(i(a).totalNeededConsolidated)]),h(P,y)};D(be,P=>{i(s)&&i(a)&&P(Ce)})}h(e,ae),J()}or(["click"]);function xn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:bc};case"animaux":return{displayName:"Viandes et Poissons",icon:yc};case"legumes":return{displayName:"Fruits et Légumes",icon:Sc};case"sucres":return{displayName:"Sucrées",icon:wc};case"lof":return{displayName:"L.O.F",icon:Tc};case"autres":return{displayName:"Autres",icon:xc};case"epices":return{displayName:"Assaisonnements",icon:Nc};case"frais":return{displayName:"Produits Frais",icon:$c};default:return{displayName:e,icon:yn}}}function Vu(e,t){return t.sortColumn?[...e].sort((r,n)=>{let s=r[t.sortColumn],a=n[t.sortColumn];return s<a?t.sortDirection==="asc"?-1:1:s>a?t.sortDirection==="asc"?1:-1:0}):e}var Wu=()=>L.setGroupBy("none"),Uu=()=>L.setGroupBy("store"),Gu=()=>L.setGroupBy("productType"),Qu=(e,t)=>L.toggleProductType(t),Hu=x("<button><!> </button>"),Ku=()=>L.toggleTemperature("frais"),Yu=()=>L.toggleTemperature("surgele"),Zu=()=>L.clearTypeAndTemperatureFilters(),Ju=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Xu=(e,t)=>L.toggleStore(t),Fu=x("<button> </button>"),ed=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),td=(e,t)=>L.toggleWho(t),rd=x("<button> </button>"),nd=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),sd=(e,t)=>{L.clearFilters(),k(t,!1)},ad=x('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function id(e,t){Z(t,!0);let r=ue(!1);const n=ie(()=>L.filters),s=ie(()=>L.uniqueStores),a=ie(()=>L.uniqueWho),o=ie(()=>L.uniqueProductTypes);var l=ad(),u=H(l),f=c(u),v=d(f,2),_=d(c(v),2),m=c(_),p=c(m),g=c(p);ds(g,{class:"w-5 h-5"});var S=d(p,2),w=c(S);pt(w,{class:"w-4 h-4"});var E=d(m,2),R=d(c(E),2),M=c(R);M.__change=[Wu];var A=d(M,2);A.__change=[Uu];var N=d(A,2);N.__change=[Gu];var $=d(E,2),B=c($),V=d(c(B),2);Je(V,20,()=>i(o),T=>T,(T,X)=>{const Ie=ie(()=>xn(X));var Re=Hu();Re.__click=[Qu,X];var Ne=c(Re);gn(Ne,()=>i(Ie).icon,(xe,st)=>{st(xe,{class:"w-3 h-3 mr-1"})});var fe=d(Ne);j(xe=>{$e(Re,1,`btn btn-sm ${xe??""}`),I(fe,` ${i(Ie).displayName??""}`)},[()=>i(n).selectedProductTypes.length===0?"btn-soft btn-accent":i(n).selectedProductTypes.includes(X)?"btn-accent":"btn-dash btn-accent"]),h(T,Re)});var z=d(V,2),ee=c(z);ee.__click=[Ku];var ge=c(ee);wn(ge,{class:"w-3 h-3"});var C=d(ee,2);C.__click=[Yu];var O=c(C);Sn(O,{class:"w-3 h-3"});var se=d(C,2);{var ae=T=>{var X=Ju();X.__click=[Zu];var Ie=c(X);pt(Ie,{class:"w-3 h-3"}),h(T,X)};D(se,T=>{(i(n).selectedProductTypes.length>0||i(n).selectedTemperatures.length>0)&&T(ae)})}var be=d($,2);{var Ce=T=>{var X=ed(),Ie=c(X),Re=d(c(Ie),2);Je(Re,20,()=>i(s),Ne=>Ne,(Ne,fe)=>{var xe=Fu();xe.__click=[Xu,fe];var st=c(xe);j(Fe=>{$e(xe,1,`btn btn-sm ${Fe??""}`),I(st,fe)},[()=>i(n).selectedStores.length===0?"btn-soft btn-accent":i(n).selectedStores.includes(fe)?"btn-accent":"btn-dash btn-accent"]),h(Ne,xe)}),h(T,X)};D(be,T=>{i(s).length>0&&T(Ce)})}var P=d(be,2);{var y=T=>{var X=nd(),Ie=c(X),Re=d(c(Ie),2);Je(Re,20,()=>i(a),Ne=>Ne,(Ne,fe)=>{var xe=rd();xe.__click=[td,fe];var st=c(xe);j(Fe=>{$e(xe,1,`btn btn-sm ${Fe??""}`),I(st,fe)},[()=>i(n).selectedWho.length===0?"btn-soft btn-accent":i(n).selectedWho.includes(fe)?"btn-accent":"btn-dash btn-accent"]),h(Ne,xe)}),h(T,X)};D(P,T=>{i(a).length>0&&T(y)})}var q=d(P,4);q.__click=[sd,r];var de=c(q);pt(de,{class:"w-4 h-4 mr-2"});var qe=d(u,2),Le=c(qe),He=c(Le);ds(He,{class:"w-6 h-6"}),j((T,X)=>{Nr(M,i(n).groupBy==="none"),Nr(A,i(n).groupBy==="store"),Nr(N,i(n).groupBy==="productType"),$e(ee,1,`btn btn-sm ${T??""}`),$e(C,1,`btn btn-sm ${X??""}`)},[()=>i(n).selectedTemperatures.length===0?"btn-soft btn-success":i(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(n).selectedTemperatures.length===0?"btn-soft btn-info":i(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),yl(f,()=>i(r),T=>k(r,T)),h(e,l),J()}or(["change","click"]);var od=()=>L.clearFilters(),ld=e=>L.setSearchQuery(e.currentTarget.value),cd=()=>L.setGroupBy("none"),ud=()=>L.setGroupBy("store"),dd=()=>L.setGroupBy("productType"),fd=(e,t)=>L.toggleProductType(t),vd=x("<button><!> </button>"),hd=()=>L.toggleTemperature("frais"),pd=()=>L.toggleTemperature("surgele"),_d=()=>L.clearTypeAndTemperatureFilters,md=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),gd=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),bd=(e,t)=>L.toggleStore(t),yd=x("<button><!> </button>"),wd=()=>L.clearStoreFilters(),Sd=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),xd=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Ed=(e,t)=>L.toggleWho(t),Pd=x("<button><!> </button>"),kd=()=>L.clearWhoFilters(),Td=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Nd=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Ad=()=>L.handleSort("productName"),$d=()=>L.handleSort("store"),Id=()=>L.handleSort("who"),Md=()=>L.handleSort("productType"),Cd=x('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Rd=x('<tr class="bg-base-200 font-semibold sticky top-10 z-10"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),Dd=(e,t,r)=>t("recettes",i(r).$id),Od=x('<div class="text-xs text-base-content/60"> </div>'),qd=x('<div class="w-7 h-7 bg-success/20 rounded-full flex items-center justify-center"><!></div>'),Bd=x('<div class="w-7 h-7 bg-info/20 rounded-full flex items-center justify-center"><!></div>'),Ld=(e,t,r)=>t("magasins",i(r).$id),jd=x('<div class="tooltip tooltip-info"> </div>'),zd=(e,t,r)=>t("volontaires",i(r).$id),Vd=x('<span class="badge badge-soft badge-info badge-sm"> </span>'),Wd=x('<div class="flex flex-wrap gap-1 pr-8"></div>'),Ud=x('<div class="text-xs text-base-content/70 flex gap-2 items-center justify-center"><!> <span class="text-center "> </span> <span class="text-center "> </span></div>'),Gd=(e,t,r)=>t("achats",i(r).$id),Qd=x('<div class="bg-warning px-2 py-1 rounded m-auto"> </div>'),Hd=x('<tr class="hover:bg-base-200/20 transition-colors"><td class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="text-center font-semibold"><div class="pb-1 text-center font-semibold"> </div> <!></td><td class="text-center font-medium cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="relative group text-center"><!></td></tr>'),Kd=x("<!> <!>",1),Yd=x('<div class="text-center py-8"><div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Zd=x('<div class="space-y-6"><div class="flex flex-wrap gap-2 items-center"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="flex  md:mb-4 justify-between mb-4 flex-wrap items-center gap-4 "><div class="form-control "><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input input-bordered flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="flex mt-4"><!></div> <div class="flex flex-col lg:flex-row gap-6 mt-4"><!> <!></div></div></div> <div class="hidden md:block bg-base-100 rounded-lg "><table class="table w-full"><thead class="sticky top-0 z-10 bg-base-200"><tr class="bg-base-200"><th class="cursor-pointer hover:bg-base-100 text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="cursor-pointer hover:bg-base-100 text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function Jd(e,t){Z(t,!0);const r=ie(()=>L.filteredProducts),n=ie(()=>L.filteredGroupedProducts),s=ie(()=>L.stats),a=ie(()=>L.uniqueStores),o=ie(()=>L.uniqueWho),l=ie(()=>L.uniqueProductTypes),u=ie(()=>L.filters);function f(Q,te){Oc(Q,te)}var v=Zd(),_=H(v),m=c(_),p=c(m),g=c(p);oa(g,{class:"w-4 h-4 mr-1"});var S=d(g),w=d(p,2),E=c(w);wn(E,{class:"w-4 h-4 mr-1"});var R=d(E),M=d(w,2),A=c(M);Sn(A,{class:"w-4 h-4 mr-1"});var N=d(A),$=d(M,2),B=c($);kc(B,{class:"w-4 h-4 mr-1"});var V=d(B),z=d(m,2),ee=c(z),ge=c(ee),C=c(ge),O=c(C);ds(O,{class:"w-5 h-5"});var se=d(C,2);se.__click=[od];var ae=c(se);pt(ae,{class:"w-4 h-4"});var be=d(ee,2),Ce=c(be),P=d(c(Ce),2),y=c(P);Mc(y,{class:"w-4 h-4"});var q=d(y,2);q.__input=[ld];var de=d(Ce,2),qe=d(c(de),2),Le=c(qe);Le.__change=[cd];var He=d(Le,2);He.__change=[ud];var T=d(He,2);T.__change=[dd];var X=d(be,2),Ie=c(X),Re=c(Ie);{var Ne=Q=>{var te=gd(),je=c(te),ze=d(c(je),2),ke=c(ze);Je(ke,16,()=>i(l),Ee=>Ee,(Ee,Pe)=>{const Ve=ie(()=>xn(Pe));var ft=vd();ft.__click=[fd,Pe];var Wt=c(ft);gn(Wt,()=>i(Ve).icon,(tt,Et)=>{Et(tt,{class:"w-5 h-5 mr-1"})});var Ut=d(Wt);j(tt=>{$e(ft,1,`btn btn-sm ${tt??""}`),I(Ut,` ${i(Ve).displayName??""}`)},[()=>i(u).selectedProductTypes.length===0?"btn-soft btn-accent":i(u).selectedProductTypes.includes(Pe)?"btn-accent":"btn-dash btn-accent"]),h(Ee,ft)});var Me=d(ke,2);Me.__click=[hd];var De=c(Me);wn(De,{class:"w-5 h-5"});var ye=d(Me,2);ye.__click=[pd];var Se=c(ye);Sn(Se,{class:"w-5 h-5"});var oe=d(ye,2);{var G=Ee=>{var Pe=md();Pe.__click=[_d];var Ve=c(Pe);pt(Ve,{class:"w-3 h-3"}),h(Ee,Pe)};D(oe,Ee=>{(i(u).selectedProductTypes.length>0||i(u).selectedTemperatures.length>0)&&Ee(G)})}j((Ee,Pe)=>{$e(Me,1,`btn btn-sm ${Ee??""}`),$e(ye,1,`btn btn-sm ${Pe??""}`)},[()=>i(u).selectedTemperatures.length===0?"btn-soft btn-success":i(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(u).selectedTemperatures.length===0?"btn-soft btn-info":i(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(Q,te)};D(Re,Q=>{i(l).length>0&&Q(Ne)})}var fe=d(Ie,2),xe=c(fe);{var st=Q=>{var te=xd(),je=c(te),ze=d(c(je),2),ke=c(ze);Je(ke,16,()=>i(a),ye=>ye,(ye,Se)=>{var oe=yd();oe.__click=[bd,Se];var G=c(oe);an(G,{class:"w-3 h-3 mr-1"});var Ee=d(G);j(Pe=>{$e(oe,1,`btn btn-xs ${Pe??""}`),I(Ee,` ${Se??""}`)},[()=>i(u).selectedStores.length===0?"btn-soft btn-accent":i(u).selectedStores.includes(Se)?"btn-accent":"btn-dash btn-accent"]),h(ye,oe)});var Me=d(ke,2);{var De=ye=>{var Se=Sd();Se.__click=[wd];var oe=c(Se);pt(oe,{class:"w-3 h-3"}),h(ye,Se)};D(Me,ye=>{i(u).selectedStores.length>0&&ye(De)})}h(Q,te)};D(xe,Q=>{i(a).length>0&&Q(st)})}var Fe=d(xe,2);{var lr=Q=>{var te=Nd(),je=c(te),ze=d(c(je),2),ke=c(ze);Je(ke,16,()=>i(o),ye=>ye,(ye,Se)=>{var oe=Pd();oe.__click=[Ed,Se];var G=c(oe);Rc(G,{class:"w-3 h-3 mr-1"});var Ee=d(G);j(Pe=>{$e(oe,1,`btn btn-xs ${Pe??""}`),I(Ee,` ${Se??""}`)},[()=>i(u).selectedWho.length===0?" btn-soft btn-info":i(u).selectedWho.includes(Se)?" btn-info":"btn-dash btn-info"]),h(ye,oe)});var Me=d(ke,2);{var De=ye=>{var Se=Td();Se.__click=[kd];var oe=c(Se);pt(oe,{class:"w-3 h-3"}),h(ye,Se)};D(Me,ye=>{i(u).selectedWho.length>0&&ye(De)})}h(Q,te)};D(Fe,Q=>{i(o).length>0&&Q(lr)})}var at=d(z,2),Ke=c(at),Ae=c(Ke),it=c(Ae),mt=c(it);mt.__click=[Ad];var gt=c(mt),dt=c(gt);oa(dt,{class:"w-4 h-4"});var Bt=d(dt,2);{var Tt=Q=>{var te=lt();j(()=>I(te,i(u).sortDirection==="asc"?"↑":"↓")),h(Q,te)};D(Bt,Q=>{i(u).sortColumn==="productName"&&Q(Tt)})}var Ye=d(mt);Ye.__click=[$d];var bt=c(Ye),Lt=c(bt);an(Lt,{class:"w-4 h-4"});var jt=d(Lt,2);{var Nt=Q=>{var te=lt();j(()=>I(te,i(u).sortDirection==="asc"?"↑":"↓")),h(Q,te)};D(jt,Q=>{i(u).sortColumn==="store"&&Q(Nt)})}var yt=d(Ye);yt.__click=[Id];var cr=c(yt),wt=c(cr);Nn(wt,{class:"w-4 h-4"});var zt=d(wt,2);{var At=Q=>{var te=lt();j(()=>I(te,i(u).sortDirection==="asc"?"↑":"↓")),h(Q,te)};D(zt,Q=>{i(u).sortColumn==="who"&&Q(At)})}var St=d(yt);St.__click=[Md];var Vt=c(St),ur=d(c(Vt));{var et=Q=>{var te=lt();j(()=>I(te,i(u).sortDirection==="asc"?"↑":"↓")),h(Q,te)};D(ur,Q=>{i(u).sortColumn==="productType"&&Q(et)})}var $t=d(St,2),Yt=c($t),Lr=c(Yt);Tn(Lr,{class:"w-4 h-4"});var jr=d($t),zr=c(jr),W=c(zr);Ac(W,{class:"w-4 h-4"});var ce=d(Ae);Je(ce,21,()=>Object.entries(i(n)),([Q,te])=>Q,(Q,te)=>{var je=ie(()=>va(i(te),2));let ze=()=>i(je)[0],ke=()=>i(je)[1];var Me=Kd(),De=H(Me);{var ye=oe=>{const G=ie(()=>xn(ze()));var Ee=Rd(),Pe=c(Ee),Ve=c(Pe),ft=c(Ve);{var Wt=tt=>{var Et=lt();j(()=>I(Et,`🏪 ${ze()??""} (${ke().length??""})`)),h(tt,Et)},Ut=tt=>{var Et=Y(),Vr=H(Et);{var Wr=Jt=>{var dr=Cd(),un=c(dr);gn(un,()=>i(G).icon,(zn,Vn)=>{Vn(zn,{class:"w-4 h-4"})});var dn=d(un,2),jn=c(dn),xr=d(dn,2),fn=c(xr);j(()=>{I(jn,i(G).displayName),I(fn,`(${ke().length??""})`)}),h(Jt,dr)},cn=Jt=>{var dr=lt();j(()=>I(dr,`📦 ${ze()??""} (${ke().length??""})`)),h(Jt,dr)};D(Vr,Jt=>{i(u).groupBy==="productType"?Jt(Wr):Jt(cn,!1)},!0)}h(tt,Et)};D(ft,tt=>{i(u).groupBy==="store"?tt(Wt):tt(Ut,!1)})}h(oe,Ee)};D(De,oe=>{ze()!==""&&oe(ye)})}var Se=d(De,2);Je(Se,17,()=>Vu(ke(),i(u)),oe=>oe.$id,(oe,G)=>{const Ee=ie(()=>xn(i(G).productType));var Pe=Hd(),Ve=c(Pe);Ve.__click=[Dd,f,G];var ft=c(Ve),Wt=c(ft),Ut=c(Wt),tt=c(Ut),Et=d(Ut,2);{var Vr=K=>{var pe=Od(),We=c(pe);j(()=>I(We,`Ancien: ${i(G).previousNames[0]??""}`)),h(K,pe)};D(Et,K=>{i(G).previousNames&&i(G).previousNames.length>0&&K(Vr)})}var Wr=d(Wt,2),cn=c(Wr);{var Jt=K=>{var pe=qd(),We=c(pe);wn(We,{class:"w-4 h-4 text-success"}),h(K,pe)};D(cn,K=>{i(G).pFrais&&K(Jt)})}var dr=d(cn,2);{var un=K=>{var pe=Bd(),We=c(pe);Sn(We,{class:"w-4 h-4 text-info"}),h(K,pe)};D(dr,K=>{i(G).pSurgel&&K(un)})}var dn=d(ft,2),jn=c(dn);Kr(jn,{class:"w-4 h-4 text-amber-600"});var xr=d(Ve);xr.__click=[Ld,f,G];var fn=c(xr);{var zn=K=>{var pe=jd(),We=c(pe);j(()=>{as(pe,"data-tip",i(G).storeInfo.storeComment),I(We,i(G).storeInfo.storeName||"-")}),h(K,pe)},Vn=K=>{var pe=lt();j(()=>I(pe,i(G).storeInfo?.storeName||"-")),h(K,pe)};D(fn,K=>{i(G).storeInfo?.storeComment?K(zn):K(Vn,!1)})}var gi=d(fn,2),bi=c(gi);Kr(bi,{class:"w-4 h-4 text-amber-600"});var Wn=d(xr);Wn.__click=[zd,f,G];var Ps=c(Wn);{var yi=K=>{var pe=Wd();Je(pe,20,()=>i(G).who,We=>We,(We,vn)=>{var hn=Vd(),Qn=c(hn);j(()=>I(Qn,vn)),h(We,hn)}),h(K,pe)},wi=K=>{var pe=lt("-");h(K,pe)};D(Ps,K=>{i(G).who&&i(G).who.length>0?K(yi):K(wi,!1)})}var Si=d(Ps,2),xi=c(Si);Kr(xi,{class:"w-4 h-4 text-amber-600"});var Un=d(Wn),Ei=c(Un),ks=c(Ei);gn(ks,()=>i(Ee).icon,(K,pe)=>{pe(K,{class:"w-3 h-3"})});var Pi=d(ks),Ts=d(Un),Ns=c(Ts),ki=c(Ns),Ti=d(Ns,2);{var Ni=K=>{var pe=Ud(),We=c(pe);Dc(We,{class:"w-3 h-3"});var vn=d(We,2),hn=c(vn),Qn=d(vn,2),Di=c(Qn);j(()=>{I(hn,`${i(G)?.nbRecipes??""} r.`),I(Di,`${i(G)?.totalAssiettes??""} c.`)}),h(K,pe)};D(Ti,K=>{(i(G).nbRecipes||i(G).totalAssiettes)&&K(Ni)})}var Gn=d(Ts);Gn.__click=[Gd,f,G];var As=c(Gn),Ai=d(As),$i=c(Ai);Kr($i,{class:"w-4 h-4 text-amber-600"});var Ii=d(Gn),Mi=c(Ii);{var Ci=K=>{var pe=Qd(),We=c(pe);j(()=>I(We,i(G).displayMissingQuantity)),h(K,pe)},Ri=K=>{Ec(K,{size:28,strokeWidth:3,class:"text-success m-auto"})};D(Mi,K=>{i(G).displayMissingQuantity!=="✅ Complet"?K(Ci):K(Ri,!1)})}j(()=>{I(tt,i(G).productName),$e(xr,1,`${i(u).groupBy==="store"?"hidden":""} cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded font-medium relative group`),$e(Un,1,i(u).groupBy==="productType"?"hidden":""),I(Pi,` ${i(Ee).displayName??""}`),I(ki,i(G).displayTotalNeeded||"-"),I(As,`${(i(G).displayTotalPurchases||"-")??""} `)}),h(oe,Pe)}),h(Q,Me)});var U=d(Ke,2);{var xt=Q=>{var te=Yd();h(Q,te)};D(U,Q=>{i(r).length===0&&Q(xt)})}var Zt=d(_,2);zu(Zt,{});var It=d(Zt,2);id(It,{}),j(()=>{I(S,` ${i(s).total??""}`),I(R,` frais:
      ${i(s).frais??""}`),I(N,` surgelés:
      ${i(s).surgel??""}`),I(V,` fusionnés:
      ${i(s).merged??""}`),ml(q,i(u).searchQuery),Nr(Le,i(u).groupBy==="none"),Nr(He,i(u).groupBy==="store"),Nr(T,i(u).groupBy==="productType"),$e(Ye,1,`cursor-pointer hover:bg-base-100 text-center ${i(u).groupBy==="store"?"hidden":""}`),$e(St,1,`cursor-pointer hover:bg-base-100 text-center ${i(u).groupBy==="productType"?"hidden":""}`)}),h(e,v),J()}or(["click","input","change"]);go();var Xd=x('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function Fd(e){var t=Xd();h(e,t)}var ef=x('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function tf(e,t){var r=ef(),n=d(c(r),2),s=d(c(n),2),a=c(s);j(()=>I(a,t.message)),h(e,r)}var rf=x('<div class="flex items-center gap-2 text-success"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),nf=x('<div class="flex items-center gap-2 text-info"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),sf=x('<div class="text-base-content/60"> </div>'),af=x('<div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),of=x('<div class="min-h-screen bg-base-100"><header class="sticky top-0 z-10 bg-base-200 shadow-sm"><div class="container mx-auto px-4 py-4"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-base-content">Produits</h1> <p class="text-sm text-base-content/70"> </p></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function lf(e,t){Z(t,!0);let r,n=ue(null);ti(async()=>{r=nc();try{await L.initialize(r)}catch(C){k(n,C instanceof Error?C.message:"Erreur lors de l'initialisation",!0),console.error("[App] Erreur initialisation:",C)}}),El(()=>{L.destroy()});const s=ie(()=>i(n)||L.error),a=ie(()=>L.loading);var o=of(),l=c(o),u=c(l),f=c(u),v=c(f),_=d(c(v),2),m=c(_),p=d(v,2),g=c(p);{var S=C=>{var O=rf();h(C,O)};D(g,C=>{L.realtimeConnected&&C(S)})}var w=d(g,2);{var E=C=>{var O=nf();h(C,O)};D(w,C=>{L.syncing&&C(E)})}var R=d(w,2);{var M=C=>{var O=sf(),se=c(O);j(ae=>I(se,`Maj: ${ae??""}`),[()=>new Date(L.lastSync).toLocaleTimeString()]),h(C,O)};D(R,C=>{L.lastSync&&C(M)})}var A=d(l,2),N=c(A);{var $=C=>{tf(C,{get message(){return i(s)}})};D(N,C=>{i(s)&&C($)})}var B=d(N,2);{var V=C=>{Fd(C)};D(B,C=>{i(a)&&C(V)})}var z=d(B,2);{var ee=C=>{Jd(C,{})},ge=C=>{var O=Y(),se=H(O);{var ae=be=>{var Ce=af();h(be,Ce)};D(se,be=>{L.loading||be(ae)},!0)}h(C,O)};D(z,C=>{L.enrichedProducts.length>0?C(ee):C(ge,!1)})}j(()=>I(m,`Liste: ${r??""}`)),h(e,o),J()}sl(lf,{target:document.getElementById("app_products")});
