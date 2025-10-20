(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const da=!1;var $n=Array.isArray,ji=Array.prototype.indexOf,vs=Array.from,ts=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,zi=Object.getOwnPropertyDescriptors,Vi=Object.prototype,Wi=Array.prototype,fa=Object.getPrototypeOf,Is=Object.isExtensible;function Ur(e){return typeof e=="function"}const ce=()=>{};function Ui(e){for(var t=0;t<e.length;t++)e[t]()}function va(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function ha(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const nt=2,hs=4,ps=8,gr=16,Qt=32,br=64,_s=128,_t=256,En=512,He=1024,ut=2048,sr=4096,kt=8192,yr=16384,ms=32768,wr=65536,Ms=1<<17,Gi=1<<18,Dr=1<<19,Hi=1<<20,rs=1<<21,In=1<<22,hr=1<<23,pr=Symbol("$state"),pa=Symbol("legacy props"),Qi=Symbol(""),Yr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function _a(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ki(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Yi(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Zi(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ji(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Xi(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Fi(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function eo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function to(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ro(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function no(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Mn=1,Cn=2,ma=4,so=8,ao=16,io=1,oo=2,lo=4,co=8,uo=16,fo=1,vo=2,De=Symbol(),ho="http://www.w3.org/1999/xhtml",po="http://www.w3.org/2000/svg",_o="@attach";function mo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function go(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let bo=!1;function ga(e){return e===this.v}function yo(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ba(e){return!yo(e,this.v)}let qr=!1,wo=!1;function So(){qr=!0}let Ne=null;function $r(e){Ne=e}function Z(e,t=!1,r){Ne={p:Ne,c:null,e:null,s:e,x:null,l:qr&&!t?{s:null,u:null,$:[]}:null}}function J(e){var t=Ne,r=t.e;if(r!==null){t.e=null;for(var n of r)Da(n)}return Ne=t.p,{}}function on(){return!qr||Ne!==null&&Ne.l===null}let vr=[];function ya(){var e=vr;vr=[],Ui(e)}function _r(e){if(vr.length===0&&!Zr){var t=vr;queueMicrotask(()=>{t===vr&&ya()})}vr.push(e)}function xo(){for(;vr.length>0;)ya()}const Eo=new WeakMap;function wa(e){var t=ee;if(t===null)return ne.f|=hr,e;if((t.f&ms)===0){if((t.f&_s)===0)throw!t.parent&&e instanceof Error&&Sa(e),e;t.b.error(e)}else Ir(e,t)}function Ir(e,t){for(;t!==null;){if((t.f&_s)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&Sa(e),e}function Sa(e){const t=Eo.get(e);t&&(ts(e,"message",{value:t.message}),ts(e,"stack",{value:t.stack}))}const pn=new Set;let we=null,mn=null,ns=new Set,Rt=[],Rn=null,ss=!1,Zr=!1;class ht{current=new Map;#t=new Map;#r=new Set;#l=0;#c=null;#a=[];#s=[];#i=[];#n=[];#o=[];#u=[];skipped_effects=new Set;process(t){Rt=[],mn=null;var r=ht.apply(this);for(const a of t)this.#d(a);if(this.#l===0){this.#e();var n=this.#s,s=this.#i;this.#s=[],this.#i=[],this.#n=[],mn=this,we=null,Cs(n),Cs(s),mn=null,this.#c?.resolve()}else this.#f(this.#s),this.#f(this.#i),this.#f(this.#n);r();for(const a of this.#a)en(a);this.#a=[]}#d(t){t.f^=He;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Qt|br))!==0,a=s&&(n&He)!==0,o=a||(n&kt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=He:(n&hs)!==0?this.#i.push(r):(n&He)===0&&((n&In)!==0&&r.b?.is_pending()?this.#a.push(r):Ln(r)&&((r.f&gr)!==0&&this.#n.push(r),en(r)));var l=r.first;if(l!==null){r=l;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#f(t){for(const r of t)((r.f&ut)!==0?this.#o:this.#u).push(r),Xe(r,He);t.length=0}capture(t,r){this.#t.has(t)||this.#t.set(t,r),this.current.set(t,t.v)}activate(){we=this}deactivate(){we=null}flush(){if(Rt.length>0){if(this.activate(),xa(),we!==null&&we!==this)return}else this.#l===0&&this.#e();this.deactivate();for(const t of ns)if(ns.delete(t),t(),we!==null)break}#e(){for(const t of this.#r)t();if(this.#r.clear(),pn.size>1){this.#t.clear();let t=!0;for(const r of pn){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;Ea(n)}if(Rt.length>0){we=r;const n=ht.apply(r);for(const s of Rt)r.#d(s);Rt=[],n()}}we=null}pn.delete(this)}increment(){this.#l+=1}decrement(){this.#l-=1;for(const t of this.#o)Xe(t,ut),mr(t);for(const t of this.#u)Xe(t,sr),mr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#c??=va()).promise}static ensure(){if(we===null){const t=we=new ht;pn.add(we),Zr||ht.enqueue(()=>{we===t&&t.flush()})}return we}static enqueue(t){_r(t)}static apply(t){return ce}}function Po(e){var t=Zr;Zr=!0;try{for(var r;;){if(xo(),Rt.length===0&&(we?.flush(),Rt.length===0))return Rn=null,r;xa()}}finally{Zr=t}}function xa(){var e=Nr;ss=!0;try{var t=0;for(qs(!0);Rt.length>0;){var r=ht.ensure();if(t++>1e3){var n,s;ko()}r.process(Rt),er.clear()}}finally{ss=!1,qs(e),Rn=null}}function ko(){try{Xi()}catch(e){Ir(e,Rn)}}let fr=null;function Cs(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(yr|kt))===0&&Ln(n)&&(fr=[],en(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Ba(n):n.fn=null),fr?.length>0)){er.clear();for(const s of fr)en(s);fr=[]}}fr=null}}function Ea(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&nt)!==0?Ea(t):(r&(In|gr))!==0&&(Xe(t,ut),mr(t))}}function mr(e){for(var t=Rn=e;t.parent!==null;){t=t.parent;var r=t.f;if(ss&&t===ee&&(r&gr)!==0)return;if((r&(br|Qt))!==0){if((r&He)===0)return;t.f^=He}}Rt.push(t)}function Pa(e){let t=0,r=rr(0),n;return()=>{Vo()&&(i(r),xs(()=>(t===0&&(n=Lr(()=>e(()=>Ot(r)))),t+=1,()=>{_r(()=>{t-=1,t===0&&(n?.(),n=void 0,Ot(r))})})))}}var To=wr|Dr|_s;function No(e,t,r){new Ao(e,t,r)}class Ao{parent;#t=!1;#r;#l=null;#c;#a;#s;#i=null;#n=null;#o=null;#u=null;#d=0;#f=0;#e=!1;#v=null;#b=()=>{this.#v&&Mr(this.#v,this.#d)};#y=Pa(()=>(this.#v=rr(this.#d),()=>{this.#v=null}));constructor(t,r,n){this.#r=t,this.#c=r,this.#a=n,this.parent=ee.b,this.#t=!!this.#c.pending,this.#s=ir(()=>{ee.b=this;{try{this.#i=Ge(()=>n(this.#r))}catch(s){this.error(s)}this.#f>0?this.#m():this.#t=!1}},To)}#S(){try{this.#i=Ge(()=>this.#a(this.#r))}catch(t){this.error(t)}this.#t=!1}#x(){const t=this.#c.pending;t&&(this.#n=Ge(()=>t(this.#r)),ht.enqueue(()=>{this.#i=this.#_(()=>(ht.ensure(),Ge(()=>this.#a(this.#r)))),this.#f>0?this.#m():(tr(this.#n,()=>{this.#n=null}),this.#t=!1)}))}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#c.pending}#_(t){var r=ee,n=ne,s=Ne;qt(this.#s),rt(this.#s),$r(this.#s.ctx);try{return t()}catch(a){return wa(a),null}finally{qt(r),rt(n),$r(s)}}#m(){const t=this.#c.pending;this.#i!==null&&(this.#u=document.createDocumentFragment(),$o(this.#i,this.#u)),this.#n===null&&(this.#n=Ge(()=>t(this.#r)))}#w(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#w(t);return}this.#f+=t,this.#f===0&&(this.#t=!1,this.#n&&tr(this.#n,()=>{this.#n=null}),this.#u&&(this.#r.before(this.#u),this.#u=null),_r(()=>{ht.ensure().flush()}))}update_pending_count(t){this.#w(t),this.#d+=t,ns.add(this.#b)}get_effect_pending(){return this.#y(),i(this.#v)}error(t){var r=this.#c.onerror;let n=this.#c.failed;if(this.#e||!r&&!n)throw t;this.#i&&(Le(this.#i),this.#i=null),this.#n&&(Le(this.#n),this.#n=null),this.#o&&(Le(this.#o),this.#o=null);var s=!1,a=!1;const o=()=>{if(s){go();return}s=!0,a&&no(),ht.ensure(),this.#d=0,this.#o!==null&&tr(this.#o,()=>{this.#o=null}),this.#t=this.has_pending_snippet(),this.#i=this.#_(()=>(this.#e=!1,Ge(()=>this.#a(this.#r)))),this.#f>0?this.#m():this.#t=!1};var l=ne;try{rt(null),a=!0,r?.(t,o),a=!1}catch(u){Ir(u,this.#s&&this.#s.parent)}finally{rt(l)}n&&_r(()=>{this.#o=this.#_(()=>{this.#e=!0;try{return Ge(()=>{n(this.#r,()=>t,()=>o)})}catch(u){return Ir(u,this.#s.parent),null}finally{this.#e=!1}})})}}function $o(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:ln(r);t.append(r),r=s}}function ka(e,t,r){const n=on()?On:gs;if(t.length===0){r(e.map(n));return}var s=we,a=ee,o=Io();Promise.all(t.map(l=>Mo(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(u){(a.f&yr)===0&&Ir(u,a)}s?.deactivate(),Ta()}).catch(l=>{Ir(l,a)})}function Io(){var e=ee,t=ne,r=Ne,n=we;return function(){qt(e),rt(t),$r(r),n?.activate()}}function Ta(){qt(null),rt(null),$r(null)}function On(e){var t=nt|ut,r=ne!==null&&(ne.f&nt)!==0?ne:null;return ee===null||r!==null&&(r.f&_t)!==0?t|=_t:ee.f|=Dr,{ctx:Ne,deps:null,effects:null,equals:ga,f:t,fn:e,reactions:null,rv:0,v:De,wv:0,parent:r??ee,ac:null}}function Mo(e,t){let r=ee;r===null&&Ki();var n=r.b,s=void 0,a=rr(De),o=!ne,l=new Map;return Uo(()=>{var u=va();s=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(m){u.reject(m)}var f=we,v=n.is_pending();o&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(Yr),l.set(f,u)));const _=(m,p=void 0)=>{v||f.activate(),p?p!==Yr&&(a.f|=hr,Mr(a,p)):((a.f&hr)!==0&&(a.f^=hr),Mr(a,m)),o&&(n.update_pending_count(-1),v||f.decrement()),Ta()};u.promise.then(_,m=>_(null,m||"unknown"))}),Ra(()=>{for(const u of l.values())u.reject(Yr)}),new Promise(u=>{function f(v){function _(){v===s?u(a):f(s)}v.then(_,_)}f(s)})}function ae(e){const t=On(e);return Va(t),t}function gs(e){const t=On(e);return t.equals=ba,t}function Na(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Le(t[r])}}function Co(e){for(var t=e.parent;t!==null;){if((t.f&nt)===0)return t;t=t.parent}return null}function bs(e){var t,r=ee;qt(Co(e));try{Na(e),t=Ha(e)}finally{qt(r)}return t}function Aa(e){var t=bs(e);if(e.equals(t)||(e.v=t,e.wv=Ua()),!Sr){var r=(Xt||(e.f&_t)!==0)&&e.deps!==null?sr:He;Xe(e,r)}}const er=new Map;function rr(e,t){var r={f:0,v:e,reactions:null,equals:ga,rv:0,wv:0};return r}function le(e,t){const r=rr(e);return Va(r),r}function Ro(e,t=!1,r=!0){const n=rr(e);return t||(n.equals=ba),qr&&r&&Ne!==null&&Ne.l!==null&&(Ne.l.s??=[]).push(n),n}function k(e,t,r=!1){ne!==null&&(!Pt||(ne.f&Ms)!==0)&&on()&&(ne.f&(nt|gr|In|Ms))!==0&&!Gt?.includes(e)&&ro();let n=r?ct(t):t;return Mr(e,n)}function Mr(e,t){if(!e.equals(t)){var r=e.v;Sr?er.set(e,t):er.set(e,r),e.v=t;var n=ht.ensure();n.capture(e,r),(e.f&nt)!==0&&((e.f&ut)!==0&&bs(e),Xe(e,(e.f&_t)===0?He:sr)),e.wv=Ua(),$a(e,ut),on()&&ee!==null&&(ee.f&He)!==0&&(ee.f&(Qt|br))===0&&(vt===null?Qo([e]):vt.push(e))}return t}function Ot(e){k(e,e.v+1)}function $a(e,t){var r=e.reactions;if(r!==null)for(var n=on(),s=r.length,a=0;a<s;a++){var o=r[a],l=o.f;if(!(!n&&o===ee)){var u=(l&ut)===0;u&&Xe(o,t),(l&nt)!==0?$a(o,sr):u&&((l&gr)!==0&&fr!==null&&fr.push(o),mr(o))}}}function ct(e){if(typeof e!="object"||e===null||pr in e)return e;const t=fa(e);if(t!==Vi&&t!==Wi)return e;var r=new Map,n=$n(e),s=le(0),a=Ht,o=l=>{if(Ht===a)return l();var u=ne,f=Ht;rt(null),Bs(a);var v=l();return rt(u),Bs(f),v};return n&&r.set("length",le(e.length)),new Proxy(e,{defineProperty(l,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&eo();var v=r.get(u);return v===void 0?v=o(()=>{var _=le(f.value);return r.set(u,_),_}):k(v,f.value,!0),!0},deleteProperty(l,u){var f=r.get(u);if(f===void 0){if(u in l){const v=o(()=>le(De));r.set(u,v),Ot(s)}}else k(f,De),Ot(s);return!0},get(l,u,f){if(u===pr)return e;var v=r.get(u),_=u in l;if(v===void 0&&(!_||Ft(l,u)?.writable)&&(v=o(()=>{var p=ct(_?l[u]:De),g=le(p);return g}),r.set(u,v)),v!==void 0){var m=i(v);return m===De?void 0:m}return Reflect.get(l,u,f)},getOwnPropertyDescriptor(l,u){var f=Reflect.getOwnPropertyDescriptor(l,u);if(f&&"value"in f){var v=r.get(u);v&&(f.value=i(v))}else if(f===void 0){var _=r.get(u),m=_?.v;if(_!==void 0&&m!==De)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return f},has(l,u){if(u===pr)return!0;var f=r.get(u),v=f!==void 0&&f.v!==De||Reflect.has(l,u);if(f!==void 0||ee!==null&&(!v||Ft(l,u)?.writable)){f===void 0&&(f=o(()=>{var m=v?ct(l[u]):De,p=le(m);return p}),r.set(u,f));var _=i(f);if(_===De)return!1}return v},set(l,u,f,v){var _=r.get(u),m=u in l;if(n&&u==="length")for(var p=f;p<_.v;p+=1){var g=r.get(p+"");g!==void 0?k(g,De):p in l&&(g=o(()=>le(De)),r.set(p+"",g))}if(_===void 0)(!m||Ft(l,u)?.writable)&&(_=o(()=>le(void 0)),k(_,ct(f)),r.set(u,_));else{m=_.v!==De;var x=o(()=>ct(f));k(_,x)}var w=Reflect.getOwnPropertyDescriptor(l,u);if(w?.set&&w.set.call(v,f),!m){if(n&&typeof u=="string"){var P=r.get("length"),O=Number(u);Number.isInteger(O)&&O>=P.v&&k(P,O+1)}Ot(s)}return!0},ownKeys(l){i(s);var u=Reflect.ownKeys(l).filter(_=>{var m=r.get(_);return m===void 0||m.v!==De});for(var[f,v]of r)v.v!==De&&!(f in l)&&u.push(f);return u},setPrototypeOf(){to()}})}function Rs(e){try{if(e!==null&&typeof e=="object"&&pr in e)return e[pr]}catch{}return e}function Oo(e,t){return Object.is(Rs(e),Rs(t))}var Os,Ia,Ma,Ca;function Do(){if(Os===void 0){Os=window,Ia=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ma=Ft(t,"firstChild").get,Ca=Ft(t,"nextSibling").get,Is(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Is(r)&&(r.__t=void 0)}}function ar(e=""){return document.createTextNode(e)}function Cr(e){return Ma.call(e)}function ln(e){return Ca.call(e)}function c(e,t){return Cr(e)}function G(e,t=!1){{var r=Cr(e);return r instanceof Comment&&r.data===""?ln(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=ln(n);return n}function qo(e){e.textContent=""}function ys(){return!1}function Lo(e,t){if(t){const r=document.body;e.autofocus=!0,_r(()=>{document.activeElement===r&&e.focus()})}}let Ds=!1;function Bo(){Ds||(Ds=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Dn(e){var t=ne,r=ee;rt(null),qt(null);try{return e()}finally{rt(t),qt(r)}}function ws(e,t,r,n=r){e.addEventListener(t,()=>Dn(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),Bo()}function jo(e){ee===null&&ne===null&&Ji(),ne!==null&&(ne.f&_t)!==0&&ee===null&&Zi(),Sr&&Yi()}function zo(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Kt(e,t,r,n=!0){var s=ee;s!==null&&(s.f&kt)!==0&&(e|=kt);var a={ctx:Ne,deps:null,nodes_start:null,nodes_end:null,f:e|ut,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{en(a),a.f|=ms}catch(u){throw Le(a),u}else t!==null&&mr(a);if(n){var o=a;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Dr)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&zo(o,s),ne!==null&&(ne.f&nt)!==0&&(e&br)===0)){var l=ne;(l.effects??=[]).push(o)}}return a}function Vo(){return ne!==null&&!Pt}function Ra(e){const t=Kt(ps,null,!1);return Xe(t,He),t.teardown=e,t}function Oa(e){jo();var t=ee.f,r=!ne&&(t&Qt)!==0&&(t&ms)===0;if(r){var n=Ne;(n.e??=[]).push(e)}else return Da(e)}function Da(e){return Kt(hs|Hi,e,!1)}function Wo(e){ht.ensure();const t=Kt(br|Dr,e,!0);return(r={})=>new Promise(n=>{r.outro?tr(t,()=>{Le(t),n(void 0)}):(Le(t),n(void 0))})}function Ss(e){return Kt(hs,e,!1)}function Uo(e){return Kt(In|Dr,e,!0)}function xs(e,t=0){return Kt(ps|t,e,!0)}function j(e,t=[],r=[]){ka(t,r,n=>{Kt(ps,()=>e(...n.map(i)),!0)})}function ir(e,t=0){var r=Kt(gr|t,e,!0);return r}function Ge(e,t=!0){return Kt(Qt|Dr,e,!0,t)}function qa(e){var t=e.teardown;if(t!==null){const r=Sr,n=ne;Ls(!0),rt(null);try{t.call(null)}finally{Ls(r),rt(n)}}}function La(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&Dn(()=>{s.abort(Yr)});var n=r.next;(r.f&br)!==0?r.parent=null:Le(r,t),r=n}}function Go(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Qt)===0&&Le(t),t=r}}function Le(e,t=!0){var r=!1;(t||(e.f&Gi)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Ho(e.nodes_start,e.nodes_end),r=!0),La(e,t&&!r),Pn(e,0),Xe(e,yr);var n=e.transitions;if(n!==null)for(const a of n)a.stop();qa(e);var s=e.parent;s!==null&&s.first!==null&&Ba(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Ho(e,t){for(;e!==null;){var r=e===t?null:ln(e);e.remove(),e=r}}function Ba(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function tr(e,t){var r=[];Es(e,r,!0),ja(r,()=>{Le(e),t&&t()})}function ja(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function Es(e,t,r){if((e.f&kt)===0){if(e.f^=kt,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var s=n.next,a=(n.f&wr)!==0||(n.f&Qt)!==0;Es(n,t,a?r:!1),n=s}}}function qn(e){za(e,!0)}function za(e,t){if((e.f&kt)!==0){e.f^=kt,(e.f&He)===0&&(Xe(e,ut),mr(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&wr)!==0||(r.f&Qt)!==0;za(r,s?t:!1),r=n}if(e.transitions!==null)for(const a of e.transitions)(a.is_global||t)&&a.in()}}let Nr=!1;function qs(e){Nr=e}let Sr=!1;function Ls(e){Sr=e}let ne=null,Pt=!1;function rt(e){ne=e}let ee=null;function qt(e){ee=e}let Gt=null;function Va(e){ne!==null&&(Gt===null?Gt=[e]:Gt.push(e))}let Ze=null,ot=0,vt=null;function Qo(e){vt=e}let Wa=1,Fr=0,Ht=Fr;function Bs(e){Ht=e}let Xt=!1;function Ua(){return++Wa}function Ln(e){var t=e.f;if((t&ut)!==0)return!0;if((t&sr)!==0){var r=e.deps,n=(t&_t)!==0;if(r!==null){var s,a,o=(t&En)!==0,l=n&&ee!==null&&!Xt,u=r.length;if((o||l)&&(ee===null||(ee.f&yr)===0)){var f=e,v=f.parent;for(s=0;s<u;s++)a=r[s],(o||!a?.reactions?.includes(f))&&(a.reactions??=[]).push(f);o&&(f.f^=En),l&&v!==null&&(v.f&_t)===0&&(f.f^=_t)}for(s=0;s<u;s++)if(a=r[s],Ln(a)&&Aa(a),a.wv>e.wv)return!0}(!n||ee!==null&&!Xt)&&Xe(e,He)}return!1}function Ga(e,t,r=!0){var n=e.reactions;if(n!==null&&!Gt?.includes(e))for(var s=0;s<n.length;s++){var a=n[s];(a.f&nt)!==0?Ga(a,t,!1):t===a&&(r?Xe(a,ut):(a.f&He)!==0&&Xe(a,sr),mr(a))}}function Ha(e){var t=Ze,r=ot,n=vt,s=ne,a=Xt,o=Gt,l=Ne,u=Pt,f=Ht,v=e.f;Ze=null,ot=0,vt=null,Xt=(v&_t)!==0&&(Pt||!Nr||ne===null),ne=(v&(Qt|br))===0?e:null,Gt=null,$r(e.ctx),Pt=!1,Ht=++Fr,e.ac!==null&&(Dn(()=>{e.ac.abort(Yr)}),e.ac=null);try{e.f|=rs;var _=e.fn,m=_(),p=e.deps;if(Ze!==null){var g;if(Pn(e,ot),p!==null&&ot>0)for(p.length=ot+Ze.length,g=0;g<Ze.length;g++)p[ot+g]=Ze[g];else e.deps=p=Ze;if(!Xt||(v&nt)!==0&&e.reactions!==null)for(g=ot;g<p.length;g++)(p[g].reactions??=[]).push(e)}else p!==null&&ot<p.length&&(Pn(e,ot),p.length=ot);if(on()&&vt!==null&&!Pt&&p!==null&&(e.f&(nt|sr|ut))===0)for(g=0;g<vt.length;g++)Ga(vt[g],e);return s!==null&&s!==e&&(Fr++,vt!==null&&(n===null?n=vt:n.push(...vt))),(e.f&hr)!==0&&(e.f^=hr),m}catch(x){return wa(x)}finally{e.f^=rs,Ze=t,ot=r,vt=n,ne=s,Xt=a,Gt=o,$r(l),Pt=u,Ht=f}}function Ko(e,t){let r=t.reactions;if(r!==null){var n=ji.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&nt)!==0&&(Ze===null||!Ze.includes(t))&&(Xe(t,sr),(t.f&(_t|En))===0&&(t.f^=En),Na(t),Pn(t,0))}function Pn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Ko(e,r[n])}function en(e){var t=e.f;if((t&yr)===0){Xe(e,He);var r=ee,n=Nr;ee=e,Nr=!0;try{(t&gr)!==0?Go(e):La(e),qa(e);var s=Ha(e);e.teardown=typeof s=="function"?s:null,e.wv=Wa;var a;da&&wo&&(e.f&ut)!==0&&e.deps}finally{Nr=n,ee=r}}}async function Yo(){await Promise.resolve(),Po()}function i(e){var t=e.f,r=(t&nt)!==0;if(ne!==null&&!Pt){var n=ee!==null&&(ee.f&yr)!==0;if(!n&&!Gt?.includes(e)){var s=ne.deps;if((ne.f&rs)!==0)e.rv<Fr&&(e.rv=Fr,Ze===null&&s!==null&&s[ot]===e?ot++:Ze===null?Ze=[e]:(!Xt||!Ze.includes(e))&&Ze.push(e));else{(ne.deps??=[]).push(e);var a=e.reactions;a===null?e.reactions=[ne]:a.includes(ne)||a.push(ne)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&_t)===0&&(o.f^=_t)}if(Sr){if(er.has(e))return er.get(e);if(r){o=e;var u=o.v;return((o.f&He)===0&&o.reactions!==null||Qa(o))&&(u=bs(o)),er.set(o,u),u}}else r&&(o=e,Ln(o)&&Aa(o));if((e.f&hr)!==0)throw e.v;return e.v}function Qa(e){if(e.v===De)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(er.has(t)||(t.f&nt)!==0&&Qa(t))return!0;return!1}function Lr(e){var t=Pt;try{return Pt=!0,e()}finally{Pt=t}}const Zo=-7169;function Xe(e,t){e.f=e.f&Zo|t}function Jo(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Xo=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Fo(e){return Xo.includes(e)}const el={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function tl(e){return e=e.toLowerCase(),el[e]??e}const rl=["touchstart","touchmove"];function nl(e){return rl.includes(e)}const Ka=new Set,as=new Set;function Ya(e,t,r,n={}){function s(a){if(n.capture||Qr.call(t,a),!a.cancelBubble)return Dn(()=>r?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?_r(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function js(e,t,r,n={}){var s=Ya(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function or(e){for(var t=0;t<e.length;t++)Ka.add(e[t]);for(var r of as)r(e)}let zs=null;function Qr(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],a=s[0]||e.target;zs=e;var o=0,l=zs===e&&e.__root;if(l){var u=s.indexOf(l);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var f=s.indexOf(t);if(f===-1)return;u<=f&&(o=u)}if(a=s[o]||e.target,a!==t){ts(e,"currentTarget",{configurable:!0,get(){return a||r}});var v=ne,_=ee;rt(null),qt(null);try{for(var m,p=[];a!==null;){var g=a.assignedSlot||a.parentNode||a.host||null;try{var x=a["__"+n];if(x!=null&&(!a.disabled||e.target===a))if($n(x)){var[w,...P]=x;w.apply(a,[e,...P])}else x.call(a,e)}catch(O){m?p.push(O):m=O}if(e.cancelBubble||g===t||g===null)break;a=g}if(m){for(let O of p)queueMicrotask(()=>{throw O});throw m}}finally{e.__root=t,delete e.currentTarget,rt(v),qt(_)}}}function Za(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Rr(e,t){var r=ee;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function E(e,t){var r=(t&fo)!==0,n=(t&vo)!==0,s,a=!e.startsWith("<!>");return()=>{s===void 0&&(s=Za(a?e:"<!>"+e),r||(s=Cr(s)));var o=n||Ia?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=Cr(o),u=o.lastChild;Rr(l,u)}else Rr(o,o);return o}}function sl(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var o=Za(s),l=Cr(o);a=Cr(l)}var u=a.cloneNode(!0);return Rr(u,u),u}}function al(e,t){return sl(e,t,"svg")}function lt(e=""){{var t=ar(e+"");return Rr(t,t),t}}function Y(){var e=document.createDocumentFragment(),t=document.createComment(""),r=ar();return e.append(t,r),Rr(t,r),e}function h(e,t){e!==null&&e.before(t)}function M(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function il(e,t){return ol(e,t)}const Pr=new Map;function ol(e,{target:t,anchor:r,props:n={},events:s,context:a,intro:o=!0}){Do();var l=new Set,u=_=>{for(var m=0;m<_.length;m++){var p=_[m];if(!l.has(p)){l.add(p);var g=nl(p);t.addEventListener(p,Qr,{passive:g});var x=Pr.get(p);x===void 0?(document.addEventListener(p,Qr,{passive:g}),Pr.set(p,1)):Pr.set(p,x+1)}}};u(vs(Ka)),as.add(u);var f=void 0,v=Wo(()=>{var _=r??t.appendChild(ar());return No(_,{pending:()=>{}},m=>{if(a){Z({});var p=Ne;p.c=a}s&&(n.$$events=s),f=e(m,n)||{},a&&J()}),()=>{for(var m of l){t.removeEventListener(m,Qr);var p=Pr.get(m);--p===0?(document.removeEventListener(m,Qr),Pr.delete(m)):Pr.set(m,p)}as.delete(u),_!==r&&_.parentNode?.removeChild(_)}});return ll.set(f,v),f}let ll=new WeakMap;function R(e,t,r=!1){var n=e,s=null,a=null,o=De,l=r?wr:0,u=!1;const f=(p,g=!0)=>{u=!0,m(g,p)};var v=null;function _(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var p=o?s:a,g=o?a:s;p&&qn(p),g&&tr(g,()=>{o?a=null:s=null})}const m=(p,g)=>{if(o!==(o=p)){var x=ys(),w=n;if(x&&(v=document.createDocumentFragment(),v.append(w=ar())),o?s??=g&&Ge(()=>g(w)):a??=g&&Ge(()=>g(w)),x){var P=we,O=o?s:a,C=o?a:s;O&&P.skipped_effects.delete(O),C&&P.skipped_effects.add(C),P.add_callback(_)}else _()}};ir(()=>{u=!1,t(f),u||m(null,null)},l)}function cl(e,t){return t}function ul(e,t,r){for(var n=e.items,s=[],a=t.length,o=0;o<a;o++)Es(t[o].e,s,!0);var l=a>0&&s.length===0&&r!==null;if(l){var u=r.parentNode;qo(u),u.append(r),n.clear(),Ct(e,t[0].prev,t[a-1].next)}ja(s,()=>{for(var f=0;f<a;f++){var v=t[f];l||(n.delete(v.k),Ct(e,v.prev,v.next)),Le(v.e,!l)}})}function Je(e,t,r,n,s,a=null){var o=e,l={flags:t,items:new Map,first:null},u=(t&ma)!==0;if(u){var f=e;o=f.appendChild(ar())}var v=null,_=!1,m=new Map,p=gs(()=>{var P=r();return $n(P)?P:P==null?[]:vs(P)}),g,x;function w(){dl(x,g,l,m,o,s,t,n,r),a!==null&&(g.length===0?v?qn(v):v=Ge(()=>a(o)):v!==null&&tr(v,()=>{v=null}))}ir(()=>{x??=ee,g=i(p);var P=g.length;if(!(_&&P===0)){_=P===0;var O,C,A,$;if(ys()){var I=new Set,q=we;for(C=0;C<P;C+=1){A=g[C],$=n(A,C);var W=l.items.get($)??m.get($);W?(t&(Mn|Cn))!==0&&Ja(W,A,C,t):(O=Xa(null,l,null,null,A,$,C,s,t,r,!0),m.set($,O)),I.add($)}for(const[V,te]of l.items)I.has(V)||q.skipped_effects.add(te.e);q.add_callback(w)}else w();i(p)}})}function dl(e,t,r,n,s,a,o,l,u){var f=(o&so)!==0,v=(o&(Mn|Cn))!==0,_=t.length,m=r.items,p=r.first,g=p,x,w=null,P,O=[],C=[],A,$,I,q;if(f)for(q=0;q<_;q+=1)A=t[q],$=l(A,q),I=m.get($),I!==void 0&&(I.a?.measure(),(P??=new Set).add(I));for(q=0;q<_;q+=1){if(A=t[q],$=l(A,q),I=m.get($),I===void 0){var W=n.get($);if(W!==void 0){n.delete($),m.set($,W);var V=w?w.next:g;Ct(r,w,W),Ct(r,W,V),Kn(W,V,s),w=W}else{var te=g?g.e.nodes_start:s;w=Xa(te,r,w,w===null?r.first:w.next,A,$,q,a,o,u)}m.set($,w),O=[],C=[],g=w.next;continue}if(v&&Ja(I,A,q,o),(I.e.f&kt)!==0&&(qn(I.e),f&&(I.a?.unfix(),(P??=new Set).delete(I))),I!==g){if(x!==void 0&&x.has(I)){if(O.length<C.length){var be=C[0],ue;w=be.prev;var z=O[0],T=O[O.length-1];for(ue=0;ue<O.length;ue+=1)Kn(O[ue],be,s);for(ue=0;ue<C.length;ue+=1)x.delete(C[ue]);Ct(r,z.prev,T.next),Ct(r,w,z),Ct(r,T,be),g=be,w=T,q-=1,O=[],C=[]}else x.delete(I),Kn(I,g,s),Ct(r,I.prev,I.next),Ct(r,I,w===null?r.first:w.next),Ct(r,w,I),w=I;continue}for(O=[],C=[];g!==null&&g.k!==$;)(g.e.f&kt)===0&&(x??=new Set).add(g),C.push(g),g=g.next;if(g===null)continue;I=g}O.push(I),w=I,g=I.next}if(g!==null||x!==void 0){for(var B=x===void 0?[]:vs(x);g!==null;)(g.e.f&kt)===0&&B.push(g),g=g.next;var ie=B.length;if(ie>0){var Se=(o&ma)!==0&&_===0?s:null;if(f){for(q=0;q<ie;q+=1)B[q].a?.measure();for(q=0;q<ie;q+=1)B[q].a?.fix()}ul(r,B,Se)}}f&&_r(()=>{if(P!==void 0)for(I of P)I.a?.apply()}),e.first=r.first&&r.first.e,e.last=w&&w.e;for(var S of n.values())Le(S.e);n.clear()}function Ja(e,t,r,n){(n&Mn)!==0&&Mr(e.v,t),(n&Cn)!==0?Mr(e.i,r):e.i=r}function Xa(e,t,r,n,s,a,o,l,u,f,v){var _=(u&Mn)!==0,m=(u&ao)===0,p=_?m?Ro(s,!1,!1):rr(s):s,g=(u&Cn)===0?o:rr(o),x={i:g,v:p,k:a,a:null,e:null,prev:r,next:n};try{if(e===null){var w=document.createDocumentFragment();w.append(e=ar())}return x.e=Ge(()=>l(e,p,g,f),bo),x.e.prev=r&&r.e,x.e.next=n&&n.e,r===null?v||(t.first=x):(r.next=x,r.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{}}function Kn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,a=e.e.nodes_start;a!==null&&a!==n;){var o=ln(a);s.before(a),a=o}}function Ct(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function fe(e,t,...r){var n=e,s=ce,a;ir(()=>{s!==(s=t())&&(a&&(Le(a),a=null),a=Ge(()=>s(n,...r)))},wr)}function gn(e,t,r){var n=e,s,a,o=null,l=null;function u(){a&&(tr(a),a=null),o&&(o.lastChild.remove(),n.before(o),o=null),a=l,l=null}ir(()=>{if(s!==(s=t())){var f=ys();if(s){var v=n;f&&(o=document.createDocumentFragment(),o.append(v=ar()),a&&we.skipped_effects.add(a)),l=Ge(()=>r(v,s))}f?we.add_callback(u):u()}},wr)}function fl(e,t,r,n,s,a){var o,l,u=null,f=e,v;ir(()=>{const _=t()||null;var m=po;_!==o&&(v&&(_===null?tr(v,()=>{v=null,l=null}):_===l?qn(v):Le(v)),_&&_!==l&&(v=Ge(()=>{if(u=document.createElementNS(m,_),Rr(u,u),n){var p=u.appendChild(ar());n(u,p)}ee.nodes_end=u,f.before(u)})),o=_,o&&(l=o))},wr)}function vl(e,t){var r=void 0,n;ir(()=>{r!==(r=t())&&(n&&(Le(n),n=null),r&&(n=Ge(()=>{Ss(()=>r(e))})))})}function Fa(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Fa(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function hl(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Fa(e))&&(n&&(n+=" "),n+=t);return n}function pl(e){return typeof e=="object"?hl(e):e??""}const Vs=[...` 	
\r\f \v\uFEFF`];function _l(e,t,r){var n=e==null?"":""+e;if(r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var a=s.length,o=0;(o=n.indexOf(s,o))>=0;){var l=o+a;(o===0||Vs.includes(n[o-1]))&&(l===n.length||Vs.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Ws(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var a=e[s];a!=null&&a!==""&&(n+=" "+s+": "+a+r)}return n}function Yn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ml(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,o=0,l=!1,u=[];n&&u.push(...Object.keys(n).map(Yn)),s&&u.push(...Object.keys(s).map(Yn));var f=0,v=-1;const x=e.length;for(var _=0;_<x;_++){var m=e[_];if(l?m==="/"&&e[_-1]==="*"&&(l=!1):a?a===m&&(a=!1):m==="/"&&e[_+1]==="*"?l=!0:m==='"'||m==="'"?a=m:m==="("?o++:m===")"&&o--,!l&&a===!1&&o===0){if(m===":"&&v===-1)v=_;else if(m===";"||_===x-1){if(v!==-1){var p=Yn(e.substring(f,v).trim());if(!u.includes(p)){m!==";"&&_++;var g=e.substring(f,_).trim();r+=" "+g+";"}}f=_+1,v=-1}}}}return n&&(r+=Ws(n)),s&&(r+=Ws(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ie(e,t,r,n,s,a){var o=e.__className;if(o!==r||o===void 0){var l=_l(r,n,a);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(a&&s!==a)for(var u in a){var f=!!a[u];(s==null||f!==!!s[u])&&e.classList.toggle(u,f)}return a}function Zn(e,t={},r,n){for(var s in r){var a=r[s];t[s]!==a&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,a,n))}}function gl(e,t,r,n){var s=e.__style;if(s!==t){var a=ml(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else n&&(Array.isArray(n)?(Zn(e,r?.[0],n[0]),Zn(e,r?.[1],n[1],"important")):Zn(e,r,n));return n}function kn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!$n(t))return mo();for(var n of e.options)n.selected=t.includes(Jr(n));return}for(n of e.options){var s=Jr(n);if(Oo(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ei(e){var t=new MutationObserver(()=>{kn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ra(()=>{t.disconnect()})}function is(e,t,r=t){var n=!0;ws(e,"change",s=>{var a=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(a),Jr);else{var l=e.querySelector(a)??e.querySelector("option:not([disabled])");o=l&&Jr(l)}r(o)}),Ss(()=>{var s=t();if(kn(e,s,n),n&&s===void 0){var a=e.querySelector(":checked");a!==null&&(s=Jr(a),r(s))}e.__value=s,n=!1}),ei(e)}function Jr(e){return"__value"in e?e.__value:e.value}const Gr=Symbol("class"),Hr=Symbol("style"),ti=Symbol("is custom element"),ri=Symbol("is html");function bl(e,t){var r=Bn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Ar(e,t){var r=Bn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function yl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Tn(e,t,r,n){var s=Bn(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[Qi]=r),r==null?e.removeAttribute(t):typeof r!="string"&&ni(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function wl(e,t,r,n,s=!1,a=!1){var o=Bn(e),l=o[ti],u=!o[ri],f=t||{},v=e.tagName==="OPTION";for(var _ in t)_ in r||(r[_]=null);r.class?r.class=pl(r.class):r[Gr]&&(r.class=null),r[Hr]&&(r.style??=null);var m=ni(e);for(const A in r){let $=r[A];if(v&&A==="value"&&$==null){e.value=e.__value="",f[A]=$;continue}if(A==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ie(e,p,$,n,t?.[Gr],r[Gr]),f[A]=$,f[Gr]=r[Gr];continue}if(A==="style"){gl(e,$,t?.[Hr],r[Hr]),f[A]=$,f[Hr]=r[Hr];continue}var g=f[A];if(!($===g&&!($===void 0&&e.hasAttribute(A)))){f[A]=$;var x=A[0]+A[1];if(x!=="$$")if(x==="on"){const I={},q="$$"+A;let W=A.slice(2);var w=Fo(W);if(Jo(W)&&(W=W.slice(0,-7),I.capture=!0),!w&&g){if($!=null)continue;e.removeEventListener(W,f[q],I),f[q]=null}if($!=null)if(w)e[`__${W}`]=$,or([W]);else{let V=function(te){f[A].call(this,te)};var C=V;f[q]=Ya(W,e,V,I)}else w&&(e[`__${W}`]=void 0)}else if(A==="style")Tn(e,A,$);else if(A==="autofocus")Lo(e,!!$);else if(!l&&(A==="__value"||A==="value"&&$!=null))e.value=e.__value=$;else if(A==="selected"&&v)yl(e,$);else{var P=A;u||(P=tl(P));var O=P==="defaultValue"||P==="defaultChecked";if($==null&&!l&&!O)if(o[A]=null,P==="value"||P==="checked"){let I=e;const q=t===void 0;if(P==="value"){let W=I.defaultValue;I.removeAttribute(P),I.defaultValue=W,I.value=I.__value=q?W:null}else{let W=I.defaultChecked;I.removeAttribute(P),I.defaultChecked=W,I.checked=q?W:!1}}else e.removeAttribute(A);else O||m.includes(P)&&(l||typeof $!="string")?(e[P]=$,P in o&&(o[P]=De)):typeof $!="function"&&Tn(e,P,$)}}}return f}function Us(e,t,r=[],n=[],s,a=!1,o=!1){ka(r,n,l=>{var u=void 0,f={},v=e.nodeName==="SELECT",_=!1;if(ir(()=>{var p=t(...l.map(i)),g=wl(e,u,p,s,a,o);_&&v&&"value"in p&&kn(e,p.value);for(let w of Object.getOwnPropertySymbols(f))p[w]||Le(f[w]);for(let w of Object.getOwnPropertySymbols(p)){var x=p[w];w.description===_o&&(!u||x!==u[w])&&(f[w]&&Le(f[w]),f[w]=Ge(()=>vl(e,()=>x))),g[w]=x}u=g}),v){var m=e;Ss(()=>{kn(m,u.value,!0),ei(m)})}_=!0})}function Bn(e){return e.__attributes??={[ti]:e.nodeName.includes("-"),[ri]:e.namespaceURI===ho}}var Gs=new Map;function ni(e){var t=e.getAttribute("is")||e.nodeName,r=Gs.get(t);if(r)return r;Gs.set(t,r=[]);for(var n,s=e,a=Element.prototype;a!==s;){n=zi(s);for(var o in n)n[o].set&&r.push(o);s=fa(s)}return r}function Ue(e,t,r=t){var n=new WeakSet;ws(e,"input",async s=>{var a=s?e.defaultValue:e.value;if(a=Jn(e)?Xn(a):a,r(a),we!==null&&n.add(we),await Yo(),a!==(a=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=a??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),Lr(t)==null&&e.value&&(r(Jn(e)?Xn(e.value):e.value),we!==null&&n.add(we)),xs(()=>{var s=t();if(e===document.activeElement){var a=mn??we;if(n.has(a))return}Jn(e)&&s===Xn(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Sl(e,t,r=t){ws(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),Lr(t)==null&&r(e.checked),xs(()=>{var n=t();e.checked=!!n})}function Jn(e){var t=e.type;return t==="number"||t==="range"}function Xn(e){return e===""?null:+e}let _n=!1;function xl(e){var t=_n;try{return _n=!1,[e(),_n]}finally{_n=t}}const El={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ve(e,t,r){return new Proxy({props:e,exclude:t},El)}const Pl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Ur(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];Ur(s)&&(s=s());const a=Ft(s,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Ur(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=Ft(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===pr||t===pa)return!1;for(let r of e.props)if(Ur(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Ur(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function _e(...e){return new Proxy({props:e},Pl)}function kr(e,t,r,n){var s=!qr||(r&oo)!==0,a=(r&co)!==0,o=(r&uo)!==0,l=n,u=!0,f=()=>(u&&(u=!1,l=o?Lr(n):n),l),v;if(a){var _=pr in e||pa in e;v=Ft(e,t)?.set??(_&&t in e?C=>e[t]=C:void 0)}var m,p=!1;a?[m,p]=xl(()=>e[t]):m=e[t],m===void 0&&n!==void 0&&(m=f(),v&&(s&&Fi(),v(m)));var g;if(s?g=()=>{var C=e[t];return C===void 0?f():(u=!0,C)}:g=()=>{var C=e[t];return C!==void 0&&(l=void 0),C===void 0?l:C},s&&(r&lo)===0)return g;if(v){var x=e.$$legacy;return(function(C,A){return arguments.length>0?((!s||!A||x||p)&&v(A?g():C),C):g()})}var w=!1,P=((r&io)!==0?On:gs)(()=>(w=!1,g()));a&&i(P);var O=ee;return(function(C,A){if(arguments.length>0){const $=A?i(P):s&&a?ct(C):C;return k(P,$),w=!0,l!==void 0&&(l=$),C}return Sr&&w||(O.f&yr)!==0?P.v:i(P)})}function si(e){Ne===null&&_a(),qr&&Ne.l!==null?Tl(Ne).m.push(e):Oa(()=>{const t=Lr(e);if(typeof t=="function")return t})}function kl(e){Ne===null&&_a(),si(()=>()=>Lr(e))}function Tl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Nl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Nl);class Al extends Map{#t=new Map;#r=le(0);#l=le(0);#c=Ht||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#l.v=super.size}}#a(t){return Ht===this.#c?le(t):rr(t)}has(t){var r=this.#t,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#a(0),r.set(t,n);else return i(this.#r),!1}return i(n),!0}forEach(t,r){this.#s(),super.forEach(t,r)}get(t){var r=this.#t,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#a(0),r.set(t,n);else{i(this.#r);return}}return i(n),super.get(t)}set(t,r){var n=this.#t,s=n.get(t),a=super.get(t),o=super.set(t,r),l=this.#r;if(s===void 0)s=this.#a(0),n.set(t,s),k(this.#l,super.size),Ot(l);else if(a!==r){Ot(s);var u=l.reactions===null?null:new Set(l.reactions),f=u===null||!s.reactions?.every(v=>u.has(v));f&&Ot(l)}return o}delete(t){var r=this.#t,n=r.get(t),s=super.delete(t);return n!==void 0&&(r.delete(t),k(this.#l,super.size),k(n,-1),Ot(this.#r)),s}clear(){if(super.size!==0){super.clear();var t=this.#t;k(this.#l,0);for(var r of t.values())k(r,-1);Ot(this.#r),t.clear()}}#s(){i(this.#r);var t=this.#t;if(this.#l.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#a(0);t.set(r,n)}}for([,n]of this.#t)i(n)}keys(){return i(this.#r),super.keys()}values(){return this.#s(),super.values()}entries(){return this.#s(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return i(this.#l),super.size}}class $l{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class ai{constructor(t){this.generateIdentifier=t,this.kv=new $l}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class Il extends ai{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function Ml(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function Cl(e,t){const r=Ml(e);if("find"in r)return r.find(t);const n=r;for(let s=0;s<n.length;s++){const a=n[s];if(t(a))return a}}function Or(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function bn(e,t){return e.indexOf(t)!==-1}function Hs(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class Rl{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return Cl(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const Ol=e=>Object.prototype.toString.call(e).slice(8,-1),ii=e=>typeof e>"u",Dl=e=>e===null,tn=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,os=e=>tn(e)&&Object.keys(e).length===0,nr=e=>Array.isArray(e),ql=e=>typeof e=="string",Ll=e=>typeof e=="number"&&!isNaN(e),Bl=e=>typeof e=="boolean",jl=e=>e instanceof RegExp,rn=e=>e instanceof Map,nn=e=>e instanceof Set,oi=e=>Ol(e)==="Symbol",zl=e=>e instanceof Date&&!isNaN(e.valueOf()),Vl=e=>e instanceof Error,Qs=e=>typeof e=="number"&&isNaN(e),Wl=e=>Bl(e)||Dl(e)||ii(e)||Ll(e)||ql(e)||oi(e),Ul=e=>typeof e=="bigint",Gl=e=>e===1/0||e===-1/0,Hl=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),Ql=e=>e instanceof URL,li=e=>e.replace(/\./g,"\\."),Fn=e=>e.map(String).map(li).join("."),Xr=e=>{const t=[];let r="";for(let s=0;s<e.length;s++){let a=e.charAt(s);if(a==="\\"&&e.charAt(s+1)==="."){r+=".",s++;continue}if(a==="."){t.push(r),r="";continue}r+=a}const n=r;return t.push(n),t};function Mt(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const ci=[Mt(ii,"undefined",()=>null,()=>{}),Mt(Ul,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Mt(zl,"Date",e=>e.toISOString(),e=>new Date(e)),Mt(Vl,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),Mt(jl,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),Mt(nn,"set",e=>[...e.values()],e=>new Set(e)),Mt(rn,"map",e=>[...e.entries()],e=>new Map(e)),Mt(e=>Qs(e)||Gl(e),"number",e=>Qs(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Mt(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Mt(Ql,"URL",e=>e.toString(),e=>new URL(e))];function jn(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const ui=jn((e,t)=>oi(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),Kl=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),di=jn(Hl,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=Kl[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function fi(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const vi=jn(fi,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(s=>{n[s]=e[s]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),hi=jn((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),Yl=[vi,ui,hi,di],Ks=(e,t)=>{const r=Hs(Yl,s=>s.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=Hs(ci,s=>s.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},pi={};ci.forEach(e=>{pi[e.annotation]=e});const Zl=(e,t,r)=>{if(nr(t))switch(t[0]){case"symbol":return ui.untransform(e,t,r);case"class":return vi.untransform(e,t,r);case"custom":return hi.untransform(e,t,r);case"typed-array":return di.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=pi[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Tr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function _i(e){if(bn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(bn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(bn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const Jl=(e,t)=>{_i(t);for(let r=0;r<t.length;r++){const n=t[r];if(nn(e))e=Tr(e,+n);else if(rn(e)){const s=+n,a=+t[++r]==0?"key":"value",o=Tr(e,s);switch(a){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},ls=(e,t,r)=>{if(_i(t),t.length===0)return r(e);let n=e;for(let a=0;a<t.length-1;a++){const o=t[a];if(nr(n)){const l=+o;n=n[l]}else if(tn(n))n=n[o];else if(nn(n)){const l=+o;n=Tr(n,l)}else if(rn(n)){if(a===t.length-2)break;const u=+o,f=+t[++a]==0?"key":"value",v=Tr(n,u);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const s=t[t.length-1];if(nr(n)?n[+s]=r(n[+s]):tn(n)&&(n[s]=r(n[s])),nn(n)){const a=Tr(n,+s),o=r(a);a!==o&&(n.delete(a),n.add(o))}if(rn(n)){const a=+t[t.length-2],o=Tr(n,a);switch(+s==0?"key":"value"){case"key":{const u=r(o);n.set(u,n.get(o)),u!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function cs(e,t,r=[]){if(!e)return;if(!nr(e)){Or(e,(a,o)=>cs(a,t,[...r,...Xr(o)]));return}const[n,s]=e;s&&Or(s,(a,o)=>{cs(a,t,[...r,...Xr(o)])}),t(n,r)}function Xl(e,t,r){return cs(t,(n,s)=>{e=ls(e,s,a=>Zl(a,n,r))}),e}function Fl(e,t){function r(n,s){const a=Jl(e,Xr(s));n.map(Xr).forEach(o=>{e=ls(e,o,()=>a)})}if(nr(t)){const[n,s]=t;n.forEach(a=>{e=ls(e,Xr(a),()=>e)}),s&&Or(s,r)}else Or(t,r);return e}const ec=(e,t)=>tn(e)||nr(e)||rn(e)||nn(e)||fi(e,t);function tc(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function rc(e,t){const r={};let n;return e.forEach(s=>{if(s.length<=1)return;t||(s=s.map(l=>l.map(String)).sort((l,u)=>l.length-u.length));const[a,...o]=s;a.length===0?n=o.map(Fn):r[Fn(a)]=o.map(Fn)}),n?os(r)?[n]:[n,r]:os(r)?void 0:r}const mi=(e,t,r,n,s=[],a=[],o=new Map)=>{const l=Wl(e);if(!l){tc(e,s,t);const p=o.get(e);if(p)return n?{transformedValue:null}:p}if(!ec(e,r)){const p=Ks(e,r),g=p?{transformedValue:p.value,annotations:[p.type]}:{transformedValue:e};return l||o.set(e,g),g}if(bn(a,e))return{transformedValue:null};const u=Ks(e,r),f=u?.value??e,v=nr(f)?[]:{},_={};Or(f,(p,g)=>{if(g==="__proto__"||g==="constructor"||g==="prototype")throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);const x=mi(p,t,r,n,[...s,g],[...a,e],o);v[g]=x.transformedValue,nr(x.annotations)?_[g]=x.annotations:tn(x.annotations)&&Or(x.annotations,(w,P)=>{_[li(g)+"."+P]=w})});const m=os(_)?{transformedValue:v,annotations:u?[u.type]:void 0}:{transformedValue:v,annotations:u?[u.type,_]:_};return l||o.set(e,m),m};function gi(e){return Object.prototype.toString.call(e).slice(8,-1)}function Ys(e){return gi(e)==="Array"}function nc(e){if(gi(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function sc(e,t,r,n,s){const a={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";a==="enumerable"&&(e[t]=r),s&&a==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function us(e,t={}){if(Ys(e))return e.map(s=>us(s,t));if(!nc(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((s,a)=>{if(Ys(t.props)&&!t.props.includes(a))return s;const o=e[a],l=us(o,t);return sc(s,a,l,e,t.nonenumerable),s},{})}class se{constructor({dedupe:t=!1}={}){this.classRegistry=new Il,this.symbolRegistry=new ai(r=>r.description??""),this.customTransformerRegistry=new Rl,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=mi(t,r,this,this.dedupe),s={json:n.transformedValue};n.annotations&&(s.meta={...s.meta,values:n.annotations});const a=rc(r,this.dedupe);return a&&(s.meta={...s.meta,referentialEqualities:a}),s}deserialize(t){const{json:r,meta:n}=t;let s=us(r);return n?.values&&(s=Xl(s,n.values,this)),n?.referentialEqualities&&(s=Fl(s,n.referentialEqualities)),s}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}se.defaultInstance=new se;se.serialize=se.defaultInstance.serialize.bind(se.defaultInstance);se.deserialize=se.defaultInstance.deserialize.bind(se.defaultInstance);se.stringify=se.defaultInstance.stringify.bind(se.defaultInstance);se.parse=se.defaultInstance.parse.bind(se.defaultInstance);se.registerClass=se.defaultInstance.registerClass.bind(se.defaultInstance);se.registerSymbol=se.defaultInstance.registerSymbol.bind(se.defaultInstance);se.registerCustom=se.defaultInstance.registerCustom.bind(se.defaultInstance);se.allowErrorProps=se.defaultInstance.allowErrorProps.bind(se.defaultInstance);se.serialize;se.deserialize;se.stringify;se.parse;se.registerClass;se.registerCustom;se.registerSymbol;se.allowErrorProps;function ac(e="your-main-id"){return typeof window>"u"?e:new URLSearchParams(window.location.search).get("listId")||e}function Zs(e,t){return`${e}_${t}`}const ic=typeof window<"u"?window:void 0;function oc(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class lc{#t;#r;constructor(t={}){const{window:r=ic,document:n=r?.document}=t;r!==void 0&&(this.#t=n,this.#r=Pa(s=>{const a=js(r,"focusin",s),o=js(r,"focusout",s);return()=>{a(),o()}}))}get current(){return this.#r?.(),this.#t?oc(this.#t):null}}new lc;function cc(e){return typeof e=="function"}function uc(e,t){if(cc(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function dc(e,t){let r=le(null);const n=ae(()=>uc(t,250));function s(...a){if(i(r))i(r).timeout&&clearTimeout(i(r).timeout);else{let o,l;const u=new Promise((f,v)=>{o=f,l=v});k(r,{timeout:null,runner:null,promise:u,resolve:o,reject:l},!0)}return i(r).runner=async()=>{if(!i(r))return;const o=i(r);k(r,null);try{o.resolve(await e.apply(this,a))}catch(l){o.reject(l)}},i(r).timeout=setTimeout(i(r).runner,i(n)),i(r).promise}return s.cancel=async()=>{(!i(r)||i(r).timeout===null)&&(await new Promise(a=>setTimeout(a,0)),!i(r)||i(r).timeout===null)||(clearTimeout(i(r).timeout),i(r).reject("Cancelled"),k(r,null))},s.runScheduledNow=async()=>{(!i(r)||!i(r).timeout)&&(await new Promise(a=>setTimeout(a,0)),!i(r)||!i(r).timeout)||(clearTimeout(i(r).timeout),i(r).timeout=null,await i(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!i(r)?.timeout}}),s}function fc(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class b{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}b.equal=(e,t)=>new b("equal",e,t).toString();b.notEqual=(e,t)=>new b("notEqual",e,t).toString();b.lessThan=(e,t)=>new b("lessThan",e,t).toString();b.lessThanEqual=(e,t)=>new b("lessThanEqual",e,t).toString();b.greaterThan=(e,t)=>new b("greaterThan",e,t).toString();b.greaterThanEqual=(e,t)=>new b("greaterThanEqual",e,t).toString();b.isNull=e=>new b("isNull",e).toString();b.isNotNull=e=>new b("isNotNull",e).toString();b.between=(e,t,r)=>new b("between",e,[t,r]).toString();b.startsWith=(e,t)=>new b("startsWith",e,t).toString();b.endsWith=(e,t)=>new b("endsWith",e,t).toString();b.select=e=>new b("select",void 0,e).toString();b.search=(e,t)=>new b("search",e,t).toString();b.orderDesc=e=>new b("orderDesc",e).toString();b.orderAsc=e=>new b("orderAsc",e).toString();b.orderRandom=()=>new b("orderRandom").toString();b.cursorAfter=e=>new b("cursorAfter",void 0,e).toString();b.cursorBefore=e=>new b("cursorBefore",void 0,e).toString();b.limit=e=>new b("limit",void 0,e).toString();b.offset=e=>new b("offset",void 0,e).toString();b.contains=(e,t)=>new b("contains",e,t).toString();b.notContains=(e,t)=>new b("notContains",e,t).toString();b.notSearch=(e,t)=>new b("notSearch",e,t).toString();b.notBetween=(e,t,r)=>new b("notBetween",e,[t,r]).toString();b.notStartsWith=(e,t)=>new b("notStartsWith",e,t).toString();b.notEndsWith=(e,t)=>new b("notEndsWith",e,t).toString();b.createdBefore=e=>new b("createdBefore",void 0,e).toString();b.createdAfter=e=>new b("createdAfter",void 0,e).toString();b.createdBetween=(e,t)=>new b("createdBetween",void 0,[e,t]).toString();b.updatedBefore=e=>new b("updatedBefore",void 0,e).toString();b.updatedAfter=e=>new b("updatedAfter",void 0,e).toString();b.updatedBetween=(e,t)=>new b("updatedBetween",void 0,[e,t]).toString();b.or=e=>new b("or",void 0,e.map(t=>JSON.parse(t))).toString();b.and=e=>new b("and",void 0,e.map(t=>JSON.parse(t))).toString();b.distanceEqual=(e,t,r,n=!0)=>new b("distanceEqual",e,[[t,r,n]]).toString();b.distanceNotEqual=(e,t,r,n=!0)=>new b("distanceNotEqual",e,[[t,r,n]]).toString();b.distanceGreaterThan=(e,t,r,n=!0)=>new b("distanceGreaterThan",e,[[t,r,n]]).toString();b.distanceLessThan=(e,t,r,n=!0)=>new b("distanceLessThan",e,[[t,r,n]]).toString();b.intersects=(e,t)=>new b("intersects",e,[t]).toString();b.notIntersects=(e,t)=>new b("notIntersects",e,[t]).toString();b.crosses=(e,t)=>new b("crosses",e,[t]).toString();b.notCrosses=(e,t)=>new b("notCrosses",e,[t]).toString();b.overlaps=(e,t)=>new b("overlaps",e,[t]).toString();b.notOverlaps=(e,t)=>new b("notOverlaps",e,[t]).toString();b.touches=(e,t)=>new b("touches",e,[t]).toString();b.notTouches=(e,t)=>new b("notTouches",e,[t]).toString();var bi,yi;class sn{static custom(t){return t}static unique(t=7){const r=fc(sn,bi,"m",yi).call(sn);let n="";for(let s=0;s<t;s++){const a=Math.floor(Math.random()*16).toString(16);n+=a}return r+n}}bi=sn,yi=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Js;(function(e){e.Totp="totp"})(Js||(Js={}));var Xs;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Xs||(Xs={}));var Fs;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Fs||(Fs={}));var ea;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(ea||(ea={}));var ta;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(ta||(ta={}));var ra;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(ra||(ra={}));var na;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(na||(na={}));var sa;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(sa||(sa={}));var aa;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(aa||(aa={}));async function xr(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function vc(e,t={}){const{includePurchases:r=!0,limit:n=100,orderBy:s="productName",orderDirection:a="asc"}=t;try{const{databases:o,config:l}=await xr(),u=await o.listDocuments(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.products,[b.equal("mainId",e),b.orderAsc(s==="productName"?"productName":"$updatedAt"),b.limit(n)]),f=u.documents;if(!r)return f;const v=await o.listDocuments(l.APPWRITE_CONFIG.databaseId,l.APPWRITE_CONFIG.collections.purchases,[b.equal("mainId",e)]),_=v.documents,m=bc(f,_);return console.log(`[Appwrite Interactions] ${u.documents.length} produits chargés avec ${v.documents.length} achats`),m}catch(o){console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${e}:`,o);const l=o instanceof Error?o.message:"Erreur lors du chargement des produits";throw new Error(`Échec du chargement des produits: ${l}`)}}async function es(e){try{const{databases:t,config:r}=await xr();return(await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.products,[b.equal("$id",e)])).documents}catch(t){return console.error("[Appwrite Interactions] Erreur chargement produits:",t),[]}}async function hc(e,t){const{lastSync:r,limit:n=100}=t;if(!r)return console.log("[Appwrite Interactions] Aucune dernière sync fournie, retour vide pour sync hybride"),{products:[],purchases:[]};try{const{databases:s,config:a}=await xr(),[o,l]=await Promise.all([s.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.products,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.limit(n)]),s.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.limit(n)])]),u=o.documents,f=l.documents;return(u.length>0||f.length>0)&&console.log(`[Appwrite Interactions] Sync hybride: ${u.length} produits et ${f.length} achats synchronisés`),{products:u,purchases:f}}catch(s){console.error(`[Appwrite Interactions] Erreur sync hybride pour mainId ${e}:`,s);const a=s instanceof Error?s.message:"Erreur lors de la synchronisation hybride";throw new Error(`Échec de la synchronisation hybride: ${a}`)}}async function Ps(e,t){try{const{databases:r,config:n}=await xr();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function pc(e,t){if(console.log(`[Appwrite Interactions] Mise à jour du magasin pour produit ${e}:`,t),!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await Ps(e,{store:r});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function ia(e,t){return Ps(e,{who:t})}async function oa(e,t){return Ps(e,{stockReel:t})}async function _c(e){try{const{databases:t,config:r}=await xr(),a=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:a.$id,status:"active"},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,sn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function mc(e,t){try{const{databases:r,config:n}=await xr(),s=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,t);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,t),s}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function gc(e){try{const{databases:t,config:r}=await xr();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}function bc(e,t){return e.map(r=>({...r,purchases:t.filter(n=>n.products.some(s=>s.$id===r.$id))}))}function yc(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing stock data:",t),[]}}function wc(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing recipes occurrences:",t),[]}}function Sc(e,t={}){let r=null;const n=a=>{const{events:o,payload:l}=a;if(!l)return;const u=o.some(p=>p.includes("products.")),f=o.some(p=>p.includes("purchases.")),v=o.some(p=>p.includes(".create")),_=o.some(p=>p.includes(".update")),m=o.some(p=>p.includes(".delete"));if(u){const p=l;v&&t.onProductCreate?t.onProductCreate(p):_&&t.onProductUpdate?t.onProductUpdate(p):m&&t.onProductDelete&&t.onProductDelete(p.$id)}else if(f){const p=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(p):_&&t.onPurchaseUpdate?t.onPurchaseUpdate(p):m&&t.onPurchaseDelete&&t.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:a=>{console.error("[Appwrite Interactions] Erreur realtime:",a),t.onError?.(a)}}))}catch(a){console.error("[Appwrite Interactions] Impossible de configurer realtime:",a),t.onError?.(a)}})(),()=>{r&&(r(),r=null)}}const xc=1e3,Ec=500;class Pc{#t=new Al;#r=le(null);#l=le(!1);#c=le(!1);#a=le(null);#s=le(!1);#i=le(!1);#n=le(null);#o=null;#u=null;#d=null;#f=null;#e=le(ct({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return i(this.#e)}get currentMainId(){return i(this.#r)}get isInitialized(){return i(this.#l)}get loading(){return i(this.#c)}get error(){return i(this.#a)}get syncing(){return i(this.#s)}get realtimeConnected(){return i(this.#i)}get lastSync(){return i(this.#n)}#v=ae(()=>Array.from(this.#t.values()));get enrichedProducts(){return i(this.#v)}set enrichedProducts(t){k(this.#v,t)}#b=ae(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return i(this.#b)}set stats(t){k(this.#b,t)}#y=ae(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return i(this.#y)}set uniqueStores(t){k(this.#y,t)}#S=ae(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return i(this.#S)}set uniqueWho(t){k(this.#S,t)}#x=ae(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return i(this.#x)}set uniqueProductTypes(t){k(this.#x,t)}#_=ae(()=>this.enrichedProducts.filter(t=>this.#D(t)));get filteredProducts(){return i(this.#_)}set filteredProducts(t){k(this.#_,t)}#m=ae(()=>{const t=this.filteredProducts;return i(this.#e).groupBy==="none"?{"":t}:Object.groupBy(t,r=>i(this.#e).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return i(this.#m)}set filteredGroupedProducts(t){k(this.#m,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(i(this.#l)&&i(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),k(this.#r,t,!0),this.#o=Zs("products-enriched",t),this.#u=Zs("products-sync-metadata",t);try{await this.#w(),this.#t.size===0?await this.#A(t):await this.#C(),k(this.#l,!0);const r=this.#O();this.#d=Sc(t,r)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw k(this.#a,n,!0),console.error("[ProductsStore]",n,r),r}}async#w(){if(this.#o)try{const t=localStorage.getItem(this.#o);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const r=se.parse(t);r.forEach(([n,s])=>this.#t.set(n,s)),this.#M(),console.log(`[ProductsStore] ${r.length} produits chargés du cache`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}#E(){if(this.#o)try{const t=se.stringify(Array.from(this.#t.entries()));localStorage.setItem(this.#o,t)}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}#P(){if(!this.#u||!i(this.#r))return;const t={lastSync:i(this.#n),mainId:i(this.#r)};try{localStorage.setItem(this.#u,JSON.stringify(t))}catch(r){console.error("[ProductsStore] Erreur persist metadata:",r)}}#M(){if(this.#u)try{const t=localStorage.getItem(this.#u);if(t){const r=JSON.parse(t);k(this.#n,r.lastSync,!0)}}catch(t){console.warn("[ProductsStore] Erreur restauration metadata:",t)}}async#A(t){k(this.#c,!0),k(this.#a,null);try{const n=await vc(t,{includePurchases:!0,limit:xc,orderBy:"productName",orderDirection:"asc"});n.forEach(s=>{const a=this.#p(s);this.#t.set(s.$id,a)}),this.#h(),this.#E(),this.#P(),console.log(`[ProductsStore] ${n.length} produits chargés et enrichis`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors du chargement";throw k(this.#a,n,!0),console.error("[ProductsStore]",n,r),r}finally{k(this.#c,!1)}}async#C(){if(i(this.#n)){k(this.#s,!0);try{const{products:t,purchases:r}=await hc(i(this.#r),options),n=new Map(t.map(s=>[s.$id,s]));if(t.length>0&&t.forEach(s=>{const a=this.#p(s);this.#t.set(s.$id,a)}),r.length>0){const s=new Set;r.forEach(o=>{o.products?.forEach(l=>{const u=typeof l=="string"?l:l.$id;u&&s.add(u)})});const a=Array.from(s).filter(o=>!n.has(o));a.length>0&&(console.log(`[ProductsStore] Rechargement de ${a.length} produits affectés par purchases`),(await es(a)).forEach(l=>{const u=this.#p(l);this.#t.set(l.$id,u)}))}(t.length>0||r.length>0)&&(this.#h(),this.#E(),this.#P())}catch(t){console.error("[ProductsStore] Erreur sync:",t)}finally{k(this.#s,!1)}}}#p(t){const r=this.#L(t.purchases??[]),n=t.totalNeededConsolidated?this.#q(t.totalNeededConsolidated):[],{numeric:s,display:a}=this.#B(n,r);return{...t,storeInfo:t.store?this.#T(t.store):null,totalNeededArray:n,totalPurchasesArray:r,recipesArray:this.#T(t.recipesOccurrences)??[],stockArray:this.#T(t.stockReel)??[],missingQuantityArray:s,displayTotalNeeded:this.#I(n),displayTotalPurchases:this.#I(r),displayMissingQuantity:a}}#k(t){const r=this.#p(t);this.#t.set(t.$id,r)}#R(t){this.#t.delete(t)}async#j(t){if(!t?.length)return;const r=new Set;if(t.forEach(n=>{n.products?.forEach(s=>{const a=typeof s=="string"?s:s.$id;a&&r.add(a)})}),r.size===0){console.log("[ProductsStore] Aucun produit affecté par ces purchases");return}try{const n=await es(Array.from(r));if(n.length===0){console.warn("[ProductsStore] Impossible de charger les produits affectés");return}n.forEach(s=>{const a=this.#p(s);this.#t.set(s.$id,a)}),console.log(`[ProductsStore] ${t.length} purchases appliqués à ${n.length} produit(s)`)}catch(n){console.error("[ProductsStore] Erreur application purchases:",n)}}async#$(t){if(!t?.length)return;const r=new Set;if(t.forEach(n=>{n.products?.forEach(s=>{const a=typeof s=="string"?s:s.$id;a&&r.add(a)})}),r.size!==0){for(const n of r){const s=this.#t.get(n);if(s){const a=s.purchases||[];t.forEach(l=>{a.some(u=>u.$id===l.$id)||a.push(l)});const o=this.#p({...s,purchases:a});this.#t.set(n,o)}}try{(await es(Array.from(r))).forEach(s=>{const a=this.#p(s);this.#t.set(s.$id,a)})}catch(n){console.warn("[ProductsStore] Erreur rechargement async:",n)}}}#O(){return{onProductCreate:t=>{this.#k(t),this.#h(),this.#g()},onProductUpdate:t=>{this.#k(t),this.#h(),this.#g()},onProductDelete:t=>{this.#R(t),this.#h(),this.#g()},onPurchaseCreate:t=>{this.#$([t]),this.#h(),this.#g()},onPurchaseUpdate:t=>{this.#$([t]),this.#h(),this.#g()},onPurchaseDelete:t=>{Array.from(this.#t.values()).filter(n=>n.purchases?.some(s=>s.$id===t)).forEach(n=>{this.#k(n)}),this.#h(),this.#g()},onConnect:()=>{k(this.#i,!0)},onDisconnect:()=>{k(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#g=(()=>{let t=null;return()=>{t&&clearTimeout(t),t=setTimeout(()=>{this.#E(),this.#P(),t=null},Ec)}})();#h(){k(this.#n,new Date().toISOString(),!0)}#D(t){if(i(this.#e).searchQuery.trim()){const r=i(this.#e).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(i(this.#e).selectedStores.length>0&&(!t.storeInfo?.storeName||!i(this.#e).selectedStores.includes(t.storeInfo.storeName))||i(this.#e).selectedWho.length>0&&(!t.who||!t.who.some(r=>i(this.#e).selectedWho.includes(r)))||i(this.#e).selectedProductTypes.length>0&&(!t.productType||!i(this.#e).selectedProductTypes.includes(t.productType))||i(this.#e).selectedTemperatures.length>0&&!(i(this.#e).selectedTemperatures.includes("frais")&&t.pFrais||i(this.#e).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=dc(t=>{i(this.#e).searchQuery=t},()=>500);toggleProductType(t){const r=i(this.#e).selectedProductTypes.indexOf(t);r>-1?i(this.#e).selectedProductTypes.splice(r,1):i(this.#e).selectedProductTypes.push(t)}toggleTemperature(t){const r=i(this.#e).selectedTemperatures.indexOf(t);r>-1?i(this.#e).selectedTemperatures.splice(r,1):i(this.#e).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){i(this.#e).selectedProductTypes=[],i(this.#e).selectedTemperatures=[]}setGroupBy(t){i(this.#e).groupBy=t}toggleStore(t){const r=i(this.#e).selectedStores.indexOf(t);r>-1?i(this.#e).selectedStores.splice(r,1):i(this.#e).selectedStores.push(t)}toggleWho(t){const r=i(this.#e).selectedWho.indexOf(t);r>-1?i(this.#e).selectedWho.splice(r,1):i(this.#e).selectedWho.push(t)}clearStoreFilters(){i(this.#e).selectedStores=[]}clearWhoFilters(){i(this.#e).selectedWho=[]}handleSort(t){i(this.#e).sortColumn===t?i(this.#e).sortDirection=i(this.#e).sortDirection==="asc"?"desc":"asc":(i(this.#e).sortColumn=t,i(this.#e).sortDirection="asc")}clearFilters(){k(this.#e,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return i(this.#e).sortColumn?[...t].sort((r,n)=>{let s=r[i(this.#e).sortColumn],a=n[i(this.#e).sortColumn];return i(this.#e).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,a=parseFloat(a)||0):i(this.#e).sortColumn==="purchases"&&(s=r.purchases?.length||0,a=n.purchases?.length||0),s<a?i(this.#e).sortDirection==="asc"?-1:1:s>a?i(this.#e).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#t.get(t)??null}get enrichedProductsCount(){return this.#t.size}async forceReload(t){this.#t.clear(),k(this.#n,null),await this.#A(t)}clearCache(){this.#t.clear(),k(this.#n,null),this.#o&&localStorage.removeItem(this.#o),this.#u&&localStorage.removeItem(this.#u),console.log("[ProductsStore] Cache vidé")}destroy(){this.#d?.(),this.#d=null,console.log("[ProductsStore] Ressources nettoyées")}#T(t){if(!t?.trim())return null;try{return JSON.parse(t)}catch(r){return console.warn("[ProductsStore] Erreur parsing JSON:",r),null}}#q(t){try{return JSON.parse(t).map(n=>({quantity:parseFloat(n.quantity),unit:n.unit})).filter(n=>!isNaN(n.quantity))}catch(r){return console.error("[ProductsStore] Erreur parsing NumericQuantity:",r),[]}}#L(t){if(!t?.length)return[];const r=new Map;return t.forEach(n=>{if(!n.quantity||!n.unit)return;const s=parseFloat(n.quantity);if(isNaN(s))return;const a=r.get(n.unit)||0;r.set(n.unit,a+s)}),Array.from(r.entries()).map(([n,s])=>({quantity:s,unit:n}))}#B(t,r){if(!t?.length)return{numeric:[],display:"✅ Complet"};if(!r?.length){const u=t.map(f=>this.#N(f.quantity.toString(),f.unit)).join(" et ");return{numeric:t,display:u}}const n=new Map,s=new Map;t.forEach(u=>{const f=parseFloat(u.quantity);isNaN(f)||n.set(u.unit,(n.get(u.unit)||0)+f)}),r.forEach(u=>{s.set(u.unit,(s.get(u.unit)||0)+u.quantity)});const a=[],o=[];n.forEach((u,f)=>{const v=s.get(f)||0,_=u-v;_>0&&(a.push({quantity:_,unit:f}),o.push(this.#N(_.toString(),f)))});const l=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:l}}#I(t){return t?.length?t.map(r=>this.#N(r.quantity.toString(),r.unit)).join(" et "):"-"}#N(t,r){const n=parseFloat(t);if(isNaN(n))return`${t} ${r}`;if((r==="gr."||r==="ml")&&n>=1e3){const s=n/1e3,a=r==="gr."?"kg":"l.";let l=(Math.round(s*100)/100).toString();return l.endsWith(",0")&&(l=l.slice(0,-2)),l.endsWith(",00")&&(l=l.slice(0,-3)),`${l} ${a}`}if(!["gr.","ml","kg","l."].includes(r)){let a=(Math.round(n*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${r}`}return`${n} ${r}`}}const L=new Pc;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const kc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Tc=al("<svg><!><!></svg>");function me(e,t){Z(t,!0);const r=kr(t,"color",3,"currentColor"),n=kr(t,"size",3,24),s=kr(t,"strokeWidth",3,2),a=kr(t,"absoluteStrokeWidth",3,!1),o=kr(t,"iconNode",19,()=>[]),l=ve(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=Tc();Us(u,_=>({...kc,...l,width:n(),height:n(),stroke:r(),"stroke-width":_,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>a()?Number(s())*24/Number(n()):s()]);var f=c(u);Je(f,17,o,cl,(_,m)=>{var p=ae(()=>ha(i(m),2));let g=()=>i(p)[0],x=()=>i(p)[1];var w=Y(),P=G(w);fl(P,g,!0,(O,C)=>{Us(O,()=>({...x()}))}),h(_,w)});var v=d(f);fe(v,()=>t.children??ce),h(e,u),J()}function ds(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];me(e,_e({name:"archive"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Nc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];me(e,_e({name:"bean"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Ac(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];me(e,_e({name:"beef"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function $c(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];me(e,_e({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Ic(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];me(e,_e({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Mc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];me(e,_e({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Cc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];me(e,_e({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Rc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];me(e,_e({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Oc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];me(e,_e({name:"combine"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Dc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];me(e,_e({name:"egg"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function fs(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];me(e,_e({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function la(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];me(e,_e({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function qc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];me(e,_e({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Lc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];me(e,_e({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Bc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];me(e,_e({name:"log-in"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function yn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];me(e,_e({name:"package"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function jc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];me(e,_e({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function zc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];me(e,_e({name:"save"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Vc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];me(e,_e({name:"search"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function wn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];me(e,_e({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Nn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];me(e,_e({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Sn(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];me(e,_e({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Kr(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];me(e,_e({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function an(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];me(e,_e({name:"store"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function wi(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];me(e,_e({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Wc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];me(e,_e({name:"user"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function An(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];me(e,_e({name:"users"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function Uc(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];me(e,_e({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}function pt(e,t){Z(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ve(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];me(e,_e({name:"x"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=Y(),l=G(o);fe(l,()=>t.children??ce),h(s,o)},$$slots:{default:!0}})),J()}const Dt=ct({product:{id:"",isOpen:!1,tab:"recettes"}});function Gc(e,t){Dt.product.tab=e,Dt.product.isOpen=!0,Dt.product.id=t}function ca(){Dt.product.isOpen=!1,Dt.product.tab="",Dt.product.id=""}let ua=()=>localStorage.getItem("appwrite-user-name")||"";function Hc(e,t,r){k(t,null),r.onCancelEditPurchase()}async function Qc(e,t,r){await t.onSavePurchase(),k(r,null)}var Kc=E('<span class="loading loading-spinner loading-sm"></span>'),Yc=E('<div class="text-center py-8 opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Zc=E('<span class="loading loading-spinner loading-sm"></span>'),Jc=E('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input input-bordered w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input input-bordered w-24"/></td><td><input type="text" class="input input-bordered w-20"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="0.01" class="input input-bordered w-16"/></td><td><input type="text" class="input input-bordered w-24"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Xc=(e,t,r)=>t(i(r)),Fc=(e,t,r)=>t(i(r).$id),eu=E('<span class="loading loading-spinner loading-sm"></span>'),tu=E('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),ru=E('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),nu=E('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"><div class="form-control"><label for="purchase-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="purchase-quantity" type="number" step="0.01" class="input input-bordered validator" required/></div> <div class="form-control"><label for="purchase-unit" class="label"><span class="label-text">Unité</span></label> <select id="purchase-unit" class="select select-bordered validator" required><option disabled selected>Sélectionner</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></div> <div class="form-control"><label for="purchase-store" class="label"><span class="label-text">Magasin</span></label> <input id="purchase-store" type="text" class="input input-bordered" placeholder="Ex: Marché"/></div> <div class="form-control"><label for="purchase-who" class="label"><span class="label-text">Qui a acheté ?</span></label> <input id="purchase-who" type="text" class="input input-bordered" placeholder="Votre nom"/></div> <div class="form-control"><label for="purchase-price" class="label"><span class="label-text">Prix (€)</span></label> <input id="purchase-price" type="number" step="1" class="input input-bordered" placeholder="0.00"/></div> <div class="form-control"><label for="purchase-notes" class="label"><span class="label-text">Notes</span></label> <input id="purchase-notes" type="text" class="input input-bordered" placeholder="Promotion, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function su(e,t){Z(t,!0);let r=kr(t,"newPurchase",7),n=le(null);function s(N,F){return F==="gr."&&N>=1e3?`${(N/1e3).toFixed(1)} kg`:F==="ml"&&N>=1e3?`${(N/1e3).toFixed(1)} l`:`${N} ${F}`}function a(N){return new Date(N).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function o(N){k(n,{...N},!0),t.onStartEditPurchase(N)}async function l(N){await t.onDeletePurchase(N)}var u=nu(),f=c(u),v=c(f);Nn(v,{class:"w-5 h-5"});var _=d(f,2),m=c(_),p=d(c(m),2),g=c(p),x=d(c(g),2),w=d(g,2),P=d(c(w),2),O=c(P);O.value=O.__value="";var C=d(O);C.value=C.__value="kg";var A=d(C);A.value=A.__value="gr.";var $=d(A);$.value=$.__value="l.";var I=d($);I.value=I.__value="ml";var q=d(I);q.value=q.__value="unité";var W=d(q);W.value=W.__value="bottes";var V=d(w,2),te=d(c(V),2),be=d(V,2),ue=d(c(be),2),z=d(be,2),T=d(c(z),2),B=d(z,2),ie=d(c(B),2),Se=d(p,2),S=c(Se);S.__click=function(...N){t.onAddPurchase?.apply(this,N)};var y=c(S);{var D=N=>{var F=Kc();h(N,F)},he=N=>{var F=lt("Ajouter l'achat");h(N,F)};R(y,N=>{t.loading?N(D):N(he,!1)})}var qe=d(_,2);{var Be=N=>{var F=Yc(),Me=c(F);Nn(Me,{class:"w-12 h-12 mx-auto mb-2"}),h(N,F)},Qe=N=>{var F=ru(),Me=c(F),Re=d(c(Me));Je(Re,21,()=>t.currentProductPurchases,Ae=>Ae.$id,(Ae,pe)=>{var Ee=Y(),st=G(Ee);{var Fe=at=>{var Ke=Jc(),$e=c(Ke),it=c($e),mt=c(it),gt=d(mt,2),dt=c(gt);dt.value=dt.__value="kg";var Lt=d(dt);Lt.value=Lt.__value="gr.";var Tt=d(Lt);Tt.value=Tt.__value="l.";var Ye=d(Tt);Ye.value=Ye.__value="ml";var bt=d(Ye);bt.value=bt.__value="unité";var Bt=d(bt);Bt.value=Bt.__value="bottes";var jt=d($e),Nt=c(jt),yt=d(jt),cr=c(yt),wt=d(yt),zt=c(wt),At=d(wt),St=c(At),Vt=d(At),ur=c(Vt),et=d(Vt),$t=c(et),Yt=c($t);Yt.__click=[Qc,t,n];var Br=c(Yt);{var jr=H=>{var xt=Zc();h(H,xt)},zr=H=>{zc(H,{class:"w-3 h-3"})};R(Br,H=>{t.loading?H(jr):H(zr,!1)})}var U=d(Yt,2);U.__click=[Hc,n,t];var de=c(U);pt(de,{class:"w-3 h-3"}),j(H=>{M(zt,H),Yt.disabled=t.loading},[()=>a(i(pe).$createdAt)]),Ue(mt,()=>i(n).quantity,H=>i(n).quantity=H),is(gt,()=>i(n).unit,H=>i(n).unit=H),Ue(Nt,()=>i(n).store,H=>i(n).store=H),Ue(cr,()=>i(n).who,H=>i(n).who=H),Ue(St,()=>i(n).price,H=>i(n).price=H),Ue(ur,()=>i(n).notes,H=>i(n).notes=H),h(at,Ke)},lr=at=>{var Ke=tu(),$e=c(Ke),it=c($e),mt=d($e),gt=c(mt),dt=d(mt),Lt=c(dt),Tt=d(dt),Ye=c(Tt),bt=d(Tt),Bt=c(bt),jt=d(bt),Nt=c(jt),yt=d(jt),cr=c(yt),wt=c(cr);wt.__click=[Xc,o,pe];var zt=c(wt);Kr(zt,{class:"w-4 h-4"});var At=d(wt,2);At.__click=[Fc,l,pe];var St=c(At);{var Vt=et=>{var $t=eu();h(et,$t)},ur=et=>{pt(et,{class:"w-4 h-4"})};R(St,et=>{t.loading?et(Vt):et(ur,!1)})}j((et,$t)=>{M(it,et),M(gt,i(pe).store),M(Lt,i(pe).who),M(Ye,$t),M(Bt,i(pe).price?`${i(pe).price}€`:"-"),M(Nt,i(pe).notes||"-"),At.disabled=t.loading},[()=>s(i(pe).quantity,i(pe).unit),()=>a(i(pe).$createdAt)]),h(at,Ke)};R(st,at=>{i(n)?.$id===i(pe).$id?at(Fe):at(lr,!1)})}h(Ae,Ee)}),h(N,F)};R(qe,N=>{t.currentProductPurchases.length===0?N(Be):N(Qe,!1)})}j(()=>S.disabled=t.loading),Ue(x,()=>r().quantity,N=>r().quantity=N),is(P,()=>r().unit,N=>r().unit=N),Ue(te,()=>r().store,N=>r().store=N),Ue(ue,()=>r().who,N=>r().who=N),Ue(T,()=>r().price,N=>r().price=N),Ue(ie,()=>r().notes,N=>r().notes=N),h(e,u),J()}or(["click"]);var au=E('<span class="loading loading-spinner loading-sm"></span>'),iu=E('<div class="text-center py-8 opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),ou=(e,t,r)=>t(i(r).dateTime),lu=E('<span class="loading loading-spinner loading-xs"></span>'),cu=E('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),uu=E('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),du=E('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"><div class="form-control"><label for="stock-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="stock-quantity" type="number" step="0.01" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-unit" class="label"><span class="label-text">Unité</span></label> <select id="stock-unit" class="select select-bordered select-sm" required><option>Sélectionner</option><option>kg</option><option>g</option><option>l</option><option>ml</option><option>unités</option><option>pièces</option></select></div> <div class="form-control"><label for="stock-datetime" class="label"><span class="label-text">Date du stock</span></label> <input id="stock-datetime" type="datetime-local" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-notes" class="label"><span class="label-text">Notes</span></label> <input id="stock-notes" type="text" class="input input-bordered input-sm" placeholder="Origine, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function fu(e,t){Z(t,!0);let r={quantity:"",unit:"",dateTime:"",notes:""};function n(y,D){return D==="g"&&y>=1e3?`${(y/1e3).toFixed(1)} kg`:D==="ml"&&y>=1e3?`${(y/1e3).toFixed(1)} l`:D==="unités"||D==="pièces"?`${y} ${D}`:`${y} ${D}`}function s(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}async function a(y){await t.onDeleteStock(y)}var o=du(),l=c(o),u=c(l);ds(u,{class:"w-5 h-5"});var f=d(l,2),v=c(f),_=d(c(v),2),m=c(_),p=d(c(m),2),g=d(m,2),x=d(c(g),2),w=c(x);w.value=w.__value="";var P=d(w);P.value=P.__value="kg";var O=d(P);O.value=O.__value="g";var C=d(O);C.value=C.__value="l";var A=d(C);A.value=A.__value="ml";var $=d(A);$.value=$.__value="unités";var I=d($);I.value=I.__value="pièces";var q=d(g,2),W=d(c(q),2),V=d(q,2),te=d(c(V),2),be=d(_,2),ue=c(be);ue.__click=function(...y){t.onAddStock?.apply(this,y)};var z=c(ue);{var T=y=>{var D=au();h(y,D)},B=y=>{var D=lt("Ajouter au stock");h(y,D)};R(z,y=>{t.loading?y(T):y(B,!1)})}var ie=d(f,2);{var Se=y=>{var D=iu(),he=c(D);ds(he,{class:"w-12 h-12 mx-auto mb-2"}),h(y,D)},S=y=>{var D=uu(),he=c(D),qe=d(c(he));Je(qe,23,()=>t.stockEntries,Be=>Be.dateTime,(Be,Qe)=>{var N=cu(),F=c(N),Me=c(F),Re=d(F),Ae=c(Re),pe=d(Re),Ee=c(pe),st=d(pe),Fe=c(st);Fe.__click=[ou,a,Qe];var lr=c(Fe);{var at=$e=>{var it=lu();h($e,it)},Ke=$e=>{var it=lt("Supprimer");h($e,it)};R(lr,$e=>{t.loading?$e(at):$e(Ke,!1)})}j(($e,it)=>{M(Me,$e),M(Ae,it),M(Ee,i(Qe).notes||"-"),Fe.disabled=t.loading},[()=>n(i(Qe).quantity,i(Qe).unit),()=>s(i(Qe).dateTime)]),h(Be,N)}),h(y,D)};R(ie,y=>{t.stockEntries.length===0?y(Se):y(S,!1)})}j(()=>ue.disabled=t.loading),Ue(p,()=>r.quantity,y=>r.quantity=y),is(x,()=>r.unit,y=>r.unit=y),Ue(W,()=>r.dateTime,y=>r.dateTime=y),Ue(te,()=>r.notes,y=>r.notes=y),h(e,o),J()}or(["click"]);var vu=(e,t)=>{e.key==="Enter"&&t()},hu=E('<span class="loading loading-spinner loading-sm"></span>'),pu=E('<span class="badge badge-primary badge-sm"> </span>'),_u=E('<div class="text-center py-8 opacity-50"><!> <p>Aucun volontaire assigné à ce produit</p></div>'),mu=(e,t,r)=>t(r),gu=E('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs p-0 hover:text-error"><!></button></div>'),bu=E('<div class="flex flex-wrap gap-2"></div>'),yu=E('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des volontaires</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <div class="flex gap-2"><div class="form-control flex-1"><input type="text" class="input input-bordered input-sm" placeholder="Nom du volontaire"/></div> <button class="btn btn-primary btn-sm"><!></button></div></div></div> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Volontaires <!></h4> <!></div></div></div>');function wu(e,t){Z(t,!0);let r=le("");async function n(){i(r).trim()&&(await t.onAddVolunteer(i(r).trim()),k(r,""))}async function s(V){await t.onRemoveVolunteer(V)}var a=yu(),o=c(a),l=c(o);An(l,{class:"w-5 h-5"});var u=d(o,2),f=c(u),v=d(c(f),2),_=c(v),m=c(_);m.__keydown=[vu,n];var p=d(_,2);p.__click=n;var g=c(p);{var x=V=>{var te=hu();h(V,te)},w=V=>{var te=lt("Ajouter");h(V,te)};R(g,V=>{t.loading?V(x):V(w,!1)})}var P=d(u,2),O=c(P),C=c(O),A=d(c(C));{var $=V=>{var te=pu(),be=c(te);j(()=>M(be,t.editingWho.length)),h(V,te)};R(A,V=>{t.editingWho.length>0&&V($)})}var I=d(C,2);{var q=V=>{var te=_u(),be=c(te);An(be,{class:"w-12 h-12 mx-auto mb-2"}),h(V,te)},W=V=>{var te=bu();Je(te,20,()=>t.editingWho,be=>be,(be,ue)=>{var z=gu(),T=c(z),B=d(T);B.__click=[mu,s,ue];var ie=c(B);pt(ie,{class:"w-3 h-3"}),j(()=>{M(T,`${ue??""} `),B.disabled=t.loading}),h(be,z)}),h(V,te)};R(I,V=>{t.editingWho.length===0?V(q):V(W,!1)})}j(()=>p.disabled=t.loading),Ue(m,()=>i(r),V=>k(r,V)),h(e,a),J()}or(["keydown","click"]);var Su=(e,t)=>{e.key==="Enter"&&t()},xu=E('<span class="loading loading-spinner loading-sm"></span>'),Eu=(e,t,r)=>{k(t,""),k(r,"")},Pu=(e,t,r)=>t(r),ku=E('<button class="btn btn-outline btn-xs"> </button>'),Tu=E('<br/><small class="opacity-75"> </small>',1),Nu=E('<p class="text-sm"><strong>Magasin défini :</strong> <!></p>'),Au=E('<p class="text-sm"><strong>Magasin défini :</strong> </p>'),$u=E(`<p class="text-sm">Aucun magasin n'est encore défini pour ce produit</p>`),Iu=E('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des magasins</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin principal</h4> <p class="text-sm opacity-75 mb-4">Définissez le magasin où ce produit est généralement acheté</p> <div class="form-control mb-3"><label class="label" for="store-name"><span class="label-text">Nom du magasin</span></label> <input id="store-name" type="text" class="input input-bordered input-sm" placeholder="Ex: Carrefour, Leclerc..."/></div> <div class="form-control mb-4"><label class="label" for="store-comment"><span class="label-text">Commentaire (optionnel)</span></label> <textarea id="store-comment" class="textarea textarea-bordered textarea-sm" placeholder="Ex: Près de la caisse, rayon frais, etc." rows="2"></textarea></div> <div class="flex gap-2 mb-4"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div> <div class="divider"></div> <div class="form-control"><label class="label" for="suggested-stores"><span class="label-text text-sm">Suggestions rapides</span></label> <div class="flex flex-wrap gap-2" id="suggested-stores"></div></div> <div class="divider"></div> <div class="alert alert-info"><!> <div><h4 class="font-semibold">Information sur le magasin actuel</h4> <!></div></div></div></div></div>');function Mu(e,t){Z(t,!0);let r=le(ct(t.editingStore?.storeName||"")),n=le(ct(t.editingStore?.storeComment||""));Oa(()=>{if(t.product?.storeInfo)k(r,t.product.storeInfo.storeName||"",!0),k(n,t.product.storeInfo.storeComment||"",!0);else if(t.product?.store)try{const z=JSON.parse(t.product.store);k(r,z.storeName||"",!0),k(n,z.storeComment||"",!0)}catch{k(r,t.product.store||"",!0),k(n,"")}else k(r,""),k(n,"")});async function s(){const z=i(r).trim()?{storeName:i(r).trim(),storeComment:i(n).trim()||""}:null;await t.onUpdateStore(z)}function a(z){k(r,z,!0)}var o=Iu(),l=c(o),u=c(l);an(u,{class:"w-5 h-5"});var f=d(l,2),v=c(f),_=d(c(v),4),m=d(c(_),2);m.__keydown=[Su,s];var p=d(_,2),g=d(c(p),2),x=d(p,2),w=c(x);w.__click=s;var P=c(w);{var O=z=>{var T=xu();h(z,T)},C=z=>{var T=lt("Mettre à jour");h(z,T)};R(P,z=>{t.loading?z(O):z(C,!1)})}var A=d(w,2);A.__click=[Eu,r,n];var $=d(x,4),I=d(c($),2);Je(I,20,()=>["Carrefour","Intermarché","Leclerc","Auchan","Lidl","Aldi","Casino","Monoprix","Franprix","Bio c' Bon","Naturalia"],z=>z,(z,T)=>{var B=ku();B.__click=[Pu,a,T];var ie=c(B);j(()=>{B.disabled=t.loading,M(ie,T)}),h(z,B)});var q=d($,4),W=c(q);an(W,{class:"w-4 h-4"});var V=d(W,2),te=d(c(V),2);{var be=z=>{var T=Nu(),B=d(c(T)),ie=d(B);{var Se=S=>{var y=Tu(),D=d(G(y)),he=c(D);j(()=>M(he,t.product.storeInfo.storeComment)),h(S,y)};R(ie,S=>{t.product.storeInfo.storeComment&&S(Se)})}j(()=>M(B,` ${t.product.storeInfo.storeName??""} `)),h(z,T)},ue=z=>{var T=Y(),B=G(T);{var ie=S=>{var y=Au(),D=d(c(y));j(()=>M(D,` ${t.product.store??""}`)),h(S,y)},Se=S=>{var y=$u();h(S,y)};R(B,S=>{t.product?.store?S(ie):S(Se,!1)},!0)}h(z,T)};R(te,z=>{t.product?.storeInfo?z(be):z(ue,!1)})}j(()=>{w.disabled=t.loading,A.disabled=t.loading}),Ue(m,()=>i(r),z=>k(r,z)),Ue(g,()=>i(n),z=>k(n,z)),h(e,o),J()}or(["keydown","click"]);var Cu=E('<div class="badge badge-success gap-1"><!> Actif</div>'),Ru=E('<div class="badge badge-warning gap-1"><!> </div>'),Ou=(e,t)=>t("recettes"),Du=E('<span class="badge badge-sm badge-secondary ml-1"> </span>'),qu=(e,t)=>t("achats"),Lu=E('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Bu=(e,t)=>t("stock"),ju=E('<span class="badge badge-sm badge-secondary ml-1"> </span>'),zu=(e,t)=>t("volontaires"),Vu=E('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Wu=(e,t)=>t("magasins"),Uu=E('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Gu=E('<div class="text-center py-8 opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Hu=E('<tr><td class="font-medium"> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>'),Qu=E('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Horaire</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),Ku=E('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Recettes utilisant ce produit</h3> <!></div>'),Yu=E('<div class="modal modal-open"><div class="modal-box max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"><div class="flex items-center justify-between p-4 border-b"><div class="flex-1"><h2 class="text-xl font-bold"> </h2> <div class="flex items-center gap-3 mt-2"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div></div> <button class="btn btn-circle btn-ghost btn-sm" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="flex-1 overflow-y-auto p-4 min-h-96"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function Zu(e,t){Z(t,!0);let r=ae(()=>Dt.product.tab),n=ae(()=>Dt.product.id),s=ae(()=>Dt.product.isOpen),a=ae(()=>L.getEnrichedProductById(i(n))),o=le(!1),l=le(null),u=ct(i(a)?.storeInfo||null),f=le(ct({quantity:null,unit:"",store:i(a)?.storeInfo?.storeName||"",who:ua()||"",price:null,notes:""})),v=le(ct({quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()})),_=ae(()=>i(a)?.stockReel?yc(i(a).stockReel):[]),m=le(null),p=ae(()=>{const S=i(a)?.purchases;if(!S||!Array.isArray(S))return console.warn("[ProductModal] Purchases is not a valid array:",S),[];const y=S.filter(D=>!D||typeof D!="object"?(console.warn("[ProductModal] Invalid purchase object:",D),!1):D.$id?!0:(console.warn("[ProductModal] Purchase missing $id:",D),!1));return y.length!==S.length&&console.warn(`[ProductModal] Filtered ${S.length-y.length} invalid purchases`),y}),g=ae(()=>wc(i(a)?.recipesOccurrences||null)),x=ae(()=>i(a)?.who||[]);function w(){k(f,{quantity:null,unit:"",store:i(a)?.storeInfo?.storeName||"",who:ua(),price:null,notes:""},!0),k(v,{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString().slice(0,16)},!0)}function P(S){Dt.product.tab=S}async function O(S){k(o,!0),k(l,null);try{return await S()}catch(y){return k(l,y instanceof Error?y.message:"Une erreur est survenue",!0),console.error("[ProductModal] Erreur:",y),null}finally{k(o,!1)}}function C(S){if(!S)return"-";try{return new Date(S).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return S}}function A(S){if(!S)return"-";try{const y=JSON.parse(S);if(Array.isArray(y)&&y.length>0)return y.map(D=>`${D.value} ${D.unit}`).join(" et ")}catch{return S}return S}async function $(){i(a)&&(k(o,!0),await O(async()=>{if(!i(f).quantity||!i(f).unit.trim())throw new Error("Veuillez remplir les champs obligatoires");let S=i(f).quantity,y=i(f).unit;if(i(f).unit==="kg"?(S=i(f).quantity*1e3,y="gr."):i(f).unit==="l."&&(S=i(f).quantity*1e3,y="ml"),await _c({products:[i(a).$id],mainId:L.currentMainId,unit:y,quantity:S,store:i(f).store||null,who:i(f).who||null,notes:i(f).notes||"",price:i(f).price||null})){w();const he=new CustomEvent("toast",{detail:{type:"success",message:"Achat ajouté avec succès"}});window.dispatchEvent(he)}}))}function I(S){k(m,{...S},!0)}function q(){k(m,null)}async function W(){i(m)&&await O(async()=>{const S=i(m).$id;let y=i(m).quantity,D=i(m).unit;i(m).unit==="kg"?(y=i(m).quantity*1e3,D="gr."):i(m).unit==="l."&&(y=i(m).quantity*1e3,D="ml");const he={unit:D,quantity:y,store:i(m)?.store||null,who:i(m)?.who||null,notes:i(m)?.notes||"",price:i(m)?.price||null};if(await mc(S,he)){k(m,null);const Be=new CustomEvent("toast",{detail:{type:"success",message:"Achat modifié avec succès"}});window.dispatchEvent(Be)}})}async function V(S){const y=i(p).find(D=>D.$id===S);confirm(`Êtes-vous sûr de vouloir supprimer cet achat (${y?.quantity} ${y?.unit}) ?`)&&await O(async()=>{await gc(S);const D=new CustomEvent("toast",{detail:{type:"success",message:"Achat supprimé avec succès"}});window.dispatchEvent(D)})}async function te(){i(a)&&await O(async()=>{if(!i(v).quantity||!i(v).unit)throw new Error("Veuillez remplir les champs obligatoires");const S={quantity:i(v).quantity.toString(),unit:i(v).unit,notes:i(v).notes||"",dateTime:i(v).dateTime||new Date().toISOString()},y=[...i(_),S],D=i(a).$id;if(await oa(D,JSON.stringify(y))){k(_,y),w();const qe=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock ajouté avec succès"}});window.dispatchEvent(qe)}})}async function be(S){confirm("Êtes-vous sûr de vouloir supprimer ce relevé de stock ?")&&i(a)&&await O(async()=>{const y=i(_).filter((he,qe)=>qe!==S);if(await oa(i(a).$id,JSON.stringify(y))){k(_,y);const he=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock supprimé avec succès"}});window.dispatchEvent(he)}})}async function ue(S){!i(a)||!S.trim()||await O(async()=>{const y=S.trim();if(i(x).includes(y))throw new Error("Ce volontaire est déjà ajouté");const D=[...i(x),y];if(await ia(i(a).$id,D)){const qe=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire ajouté avec succès"}});window.dispatchEvent(qe)}})}async function z(S){i(a)&&confirm(`Retirer ${S} de la liste des volontaires ?`)&&await O(async()=>{const y=i(x).filter(he=>he!==S);if(await ia(i(a).$id,y)){const he=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire retiré avec succès"}});window.dispatchEvent(he)}})}async function T(S){i(a)&&await O(async()=>{const y=S!==void 0?S:u?.storeName&&u.storeName.trim()!==""?u.storeName.trim():i(a).store;if(console.log("[ProductModal] handleUpdateStore called with:",{storeInfo:S,editingStore:u,finalStoreValue:y}),await pc(i(a).$id,y)){const he=new CustomEvent("toast",{detail:{type:"success",message:"Magasin mis à jour avec succès"}});window.dispatchEvent(he)}})}var B=Y(),ie=G(B);{var Se=S=>{var y=Yu(),D=c(y),he=c(D),qe=c(he),Be=c(qe),Qe=c(Be),N=d(Be,2),F=c(N),Me=c(F),Re=d(F,2);{var Ae=U=>{var de=Cu(),H=c(de);Rc(H,{class:"w-3 h-3"}),h(U,de)},pe=U=>{var de=Ru(),H=c(de);wi(H,{class:"w-3 h-3"});var xt=d(H);j(()=>M(xt,` ${i(a).status??""}`)),h(U,de)};R(Re,U=>{i(a).status==="active"?U(Ae):U(pe,!1)})}var Ee=d(Re,2),st=d(c(Ee)),Fe=d(qe,2);Fe.__click=function(...U){ca?.apply(this,U)};var lr=c(Fe);pt(lr,{class:"w-4 h-4"});var at=d(he,2),Ke=c(at);Ke.__click=[Ou,P];var $e=c(Ke);yn($e,{class:"w-4 h-4 mr-1"});var it=d($e,2);{var mt=U=>{var de=Du(),H=c(de);j(()=>M(H,i(g).length)),h(U,de)};R(it,U=>{i(g).length>0&&U(mt)})}var gt=d(Ke,2);gt.__click=[qu,P];var dt=c(gt);Nn(dt,{class:"w-4 h-4 mr-1"});var Lt=d(dt,2);{var Tt=U=>{var de=Lu(),H=c(de);j(()=>M(H,i(p).length)),h(U,de)};R(Lt,U=>{i(p).length>0&&U(Tt)})}var Ye=d(gt,2);Ye.__click=[Bu,P];var bt=c(Ye);ds(bt,{class:"w-4 h-4 mr-1"});var Bt=d(bt,2);{var jt=U=>{var de=ju(),H=c(de);j(()=>M(H,i(_).length)),h(U,de)};R(Bt,U=>{i(_).length>0&&U(jt)})}var Nt=d(Ye,2);Nt.__click=[zu,P];var yt=c(Nt);An(yt,{class:"w-4 h-4 mr-1"});var cr=d(yt,2);{var wt=U=>{var de=Vu(),H=c(de);j(()=>M(H,i(a).who.length)),h(U,de)};R(cr,U=>{i(a).who&&i(a).who.length>0&&U(wt)})}var zt=d(Nt,2);zt.__click=[Wu,P];var At=c(zt);an(At,{class:"w-4 h-4 mr-1"});var St=d(at,2),Vt=c(St);{var ur=U=>{var de=Uu(),H=c(de);pt(H,{class:"w-4 h-4"});var xt=d(H,2),Zt=c(xt);j(()=>M(Zt,`erreur : ${i(l)??""}`)),h(U,de)};R(Vt,U=>{i(l)&&U(ur)})}var et=d(Vt,2),$t=c(et);{var Yt=U=>{var de=Ku(),H=c(de),xt=c(H);yn(xt,{class:"w-5 h-5"});var Zt=d(H,2);{var It=re=>{var je=Gu(),ze=c(je);yn(ze,{class:"w-12 h-12 mx-auto mb-2"}),h(re,je)},K=re=>{var je=Qu(),ze=c(je),Te=d(c(ze));Je(Te,21,()=>i(g),Ce=>Ce.recipeName+Ce.dateTimeService,(Ce,Oe)=>{var ye=Hu(),xe=c(ye),oe=c(xe),Q=d(xe),Pe=c(Q),ke=d(Q),Ve=c(ke),ft=d(ke),Wt=c(ft),Ut=d(ft),tt=c(Ut),Et=d(Ut),Vr=c(Et);j(Wr=>{M(oe,i(Oe).recipeName),M(Pe,`${i(Oe).quantity??""} ${i(Oe).unit??""}`),M(Ve,Wr),M(Wt,i(Oe).horaire||"-"),M(tt,i(Oe).typePlat||"-"),M(Vr,i(Oe).assiettes||"-")},[()=>C(i(Oe).dateTimeService)]),h(Ce,ye)}),h(re,je)};R(Zt,re=>{i(g).length===0?re(It):re(K,!1)})}h(U,de)},Br=U=>{var de=Y(),H=G(de);{var xt=It=>{su(It,{get product(){return i(a)},get currentProductPurchases(){return i(p)},get loading(){return i(o)},get newPurchase(){return i(f)},onAddPurchase:$,onStartEditPurchase:I,onCancelEditPurchase:q,onSavePurchase:W,onDeletePurchase:V})},Zt=It=>{var K=Y(),re=G(K);{var je=Te=>{fu(Te,{get product(){return i(a)},get stockEntries(){return i(_)},get loading(){return i(o)},onAddStock:te,onDeleteStock:be})},ze=Te=>{var Ce=Y(),Oe=G(Ce);{var ye=oe=>{wu(oe,{get product(){return i(a)},get editingWho(){return i(x)},get loading(){return i(o)},onAddVolunteer:ue,onRemoveVolunteer:z})},xe=oe=>{var Q=Y(),Pe=G(Q);{var ke=Ve=>{Mu(Ve,{get product(){return i(a)},get editingStore(){return u},get loading(){return i(o)},onUpdateStore:T})};R(Pe,Ve=>{i(r)==="magasins"&&Ve(ke)},!0)}h(oe,Q)};R(Oe,oe=>{i(r)==="volontaires"?oe(ye):oe(xe,!1)},!0)}h(Te,Ce)};R(re,Te=>{i(r)==="stock"?Te(je):Te(ze,!1)},!0)}h(It,K)};R(H,It=>{i(r)==="achats"?It(xt):It(Zt,!1)},!0)}h(U,de)};R($t,U=>{i(r)==="recettes"?U(Yt):U(Br,!1)})}var jr=d(St,2),zr=c(jr);zr.__click=function(...U){ca?.apply(this,U)},j(U=>{M(Qe,i(a).productName),M(Me,i(a).productType),M(st,` ${U??""}`),Ie(Ke,1,`tab ${i(r)==="recettes"?"tab-active":""}`),Ie(gt,1,`tab ${i(r)==="achats"?"tab-active":""}`),Ie(Ye,1,`tab ${i(r)==="stock"?"tab-active":""}`),Ie(Nt,1,`tab ${i(r)==="volontaires"?"tab-active":""}`),Ie(zt,1,`tab ${i(r)==="magasins"?"tab-active":""}`)},[()=>A(i(a).totalNeededConsolidated)]),h(S,y)};R(ie,S=>{i(s)&&i(a)&&S(Se)})}h(e,B),J()}or(["click"]);function xn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Nc};case"animaux":return{displayName:"Viandes et Poissons",icon:Ac};case"legumes":return{displayName:"Fruits et Légumes",icon:Ic};case"sucres":return{displayName:"Sucrées",icon:$c};case"lof":return{displayName:"L.O.F",icon:Dc};case"autres":return{displayName:"Autres",icon:Mc};case"epices":return{displayName:"Assaisonnements",icon:qc};case"frais":return{displayName:"Produits Frais",icon:jc};default:return{displayName:e,icon:yn}}}function Ju(e,t){return t.sortColumn?[...e].sort((r,n)=>{let s=r[t.sortColumn],a=n[t.sortColumn];return s<a?t.sortDirection==="asc"?-1:1:s>a?t.sortDirection==="asc"?1:-1:0}):e}var Xu=()=>L.setGroupBy("none"),Fu=()=>L.setGroupBy("store"),ed=()=>L.setGroupBy("productType"),td=(e,t)=>L.toggleProductType(t),rd=E("<button><!> </button>"),nd=()=>L.toggleTemperature("frais"),sd=()=>L.toggleTemperature("surgele"),ad=()=>L.clearTypeAndTemperatureFilters(),id=E('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),od=(e,t)=>L.toggleStore(t),ld=E("<button> </button>"),cd=E('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),ud=(e,t)=>L.toggleWho(t),dd=E("<button> </button>"),fd=E('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),vd=(e,t)=>{L.clearFilters(),k(t,!1)},hd=E('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function pd(e,t){Z(t,!0);let r=le(!1);const n=ae(()=>L.filters),s=ae(()=>L.uniqueStores),a=ae(()=>L.uniqueWho),o=ae(()=>L.uniqueProductTypes);var l=hd(),u=G(l),f=c(u),v=d(f,2),_=d(c(v),2),m=c(_),p=c(m),g=c(p);fs(g,{class:"w-5 h-5"});var x=d(p,2),w=c(x);pt(w,{class:"w-4 h-4"});var P=d(m,2),O=d(c(P),2),C=c(O);C.__change=[Xu];var A=d(C,2);A.__change=[Fu];var $=d(A,2);$.__change=[ed];var I=d(P,2),q=c(I),W=d(c(q),2);Je(W,20,()=>i(o),N=>N,(N,F)=>{const Me=ae(()=>xn(F));var Re=rd();Re.__click=[td,F];var Ae=c(Re);gn(Ae,()=>i(Me).icon,(Ee,st)=>{st(Ee,{class:"w-3 h-3 mr-1"})});var pe=d(Ae);j(Ee=>{Ie(Re,1,`btn btn-sm ${Ee??""}`),M(pe,` ${i(Me).displayName??""}`)},[()=>i(n).selectedProductTypes.length===0?"btn-soft btn-accent":i(n).selectedProductTypes.includes(F)?"btn-accent":"btn-dash btn-accent"]),h(N,Re)});var V=d(W,2),te=c(V);te.__click=[nd];var be=c(te);wn(be,{class:"w-3 h-3"});var ue=d(te,2);ue.__click=[sd];var z=c(ue);Sn(z,{class:"w-3 h-3"});var T=d(ue,2);{var B=N=>{var F=id();F.__click=[ad];var Me=c(F);pt(Me,{class:"w-3 h-3"}),h(N,F)};R(T,N=>{(i(n).selectedProductTypes.length>0||i(n).selectedTemperatures.length>0)&&N(B)})}var ie=d(I,2);{var Se=N=>{var F=cd(),Me=c(F),Re=d(c(Me),2);Je(Re,20,()=>i(s),Ae=>Ae,(Ae,pe)=>{var Ee=ld();Ee.__click=[od,pe];var st=c(Ee);j(Fe=>{Ie(Ee,1,`btn btn-sm ${Fe??""}`),M(st,pe)},[()=>i(n).selectedStores.length===0?"btn-soft btn-accent":i(n).selectedStores.includes(pe)?"btn-accent":"btn-dash btn-accent"]),h(Ae,Ee)}),h(N,F)};R(ie,N=>{i(s).length>0&&N(Se)})}var S=d(ie,2);{var y=N=>{var F=fd(),Me=c(F),Re=d(c(Me),2);Je(Re,20,()=>i(a),Ae=>Ae,(Ae,pe)=>{var Ee=dd();Ee.__click=[ud,pe];var st=c(Ee);j(Fe=>{Ie(Ee,1,`btn btn-sm ${Fe??""}`),M(st,pe)},[()=>i(n).selectedWho.length===0?"btn-soft btn-accent":i(n).selectedWho.includes(pe)?"btn-accent":"btn-dash btn-accent"]),h(Ae,Ee)}),h(N,F)};R(S,N=>{i(a).length>0&&N(y)})}var D=d(S,4);D.__click=[vd,r];var he=c(D);pt(he,{class:"w-4 h-4 mr-2"});var qe=d(u,2),Be=c(qe),Qe=c(Be);fs(Qe,{class:"w-6 h-6"}),j((N,F)=>{Ar(C,i(n).groupBy==="none"),Ar(A,i(n).groupBy==="store"),Ar($,i(n).groupBy==="productType"),Ie(te,1,`btn btn-sm ${N??""}`),Ie(ue,1,`btn btn-sm ${F??""}`)},[()=>i(n).selectedTemperatures.length===0?"btn-soft btn-success":i(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(n).selectedTemperatures.length===0?"btn-soft btn-info":i(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Sl(f,()=>i(r),N=>k(r,N)),h(e,l),J()}or(["change","click"]);var _d=()=>L.clearFilters(),md=e=>L.setSearchQuery(e.currentTarget.value),gd=()=>L.setGroupBy("none"),bd=()=>L.setGroupBy("store"),yd=()=>L.setGroupBy("productType"),wd=(e,t)=>L.toggleProductType(t),Sd=E("<button><!> </button>"),xd=()=>L.toggleTemperature("frais"),Ed=()=>L.toggleTemperature("surgele"),Pd=()=>L.clearTypeAndTemperatureFilters(),kd=E('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Td=E('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),Nd=(e,t)=>L.toggleStore(t),Ad=E("<button><!> </button>"),$d=()=>L.clearStoreFilters(),Id=E('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Md=E('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Cd=(e,t)=>L.toggleWho(t),Rd=E("<button><!> </button>"),Od=()=>L.clearWhoFilters(),Dd=E('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),qd=E('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Ld=()=>L.handleSort("productName"),Bd=()=>L.handleSort("store"),jd=()=>L.handleSort("who"),zd=()=>L.handleSort("productType"),Vd=E('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Wd=E('<tr class="bg-base-200 font-semibold sticky top-10 z-10"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),Ud=(e,t,r)=>t("recettes",i(r).$id),Gd=E('<div class="text-xs text-base-content/60"> </div>'),Hd=E('<div class="w-7 h-7 bg-success/20 rounded-full flex items-center justify-center"><!></div>'),Qd=E('<div class="w-7 h-7 bg-info/20 rounded-full flex items-center justify-center"><!></div>'),Kd=(e,t,r)=>t("magasins",i(r).$id),Yd=E('<div class="tooltip tooltip-info"> </div>'),Zd=(e,t,r)=>t("volontaires",i(r).$id),Jd=E('<span class="badge badge-soft badge-info badge-sm"> </span>'),Xd=E('<div class="flex flex-wrap gap-1 pr-8"></div>'),Fd=E('<div class="text-xs text-base-content/70 flex gap-2 items-center justify-center"><!> <span class="text-center "> </span> <span class="text-center "> </span></div>'),ef=(e,t,r)=>t("achats",i(r).$id),tf=E('<div class="bg-warning px-2 py-1 rounded m-auto"> </div>'),rf=E('<tr class="hover:bg-base-200/20 transition-colors"><td class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="text-center font-semibold"><div class="pb-1 text-center font-semibold"> </div> <!></td><td class="text-center font-medium cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="relative group text-center"><!></td></tr>'),nf=E("<!> <!>",1),sf=E('<div class="text-center py-8"><div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),af=E('<div class="space-y-6"><div class="flex flex-wrap gap-2 items-center"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="flex  md:mb-4 justify-between mb-4 flex-wrap items-center gap-4 "><div class="form-control "><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input input-bordered flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="flex mt-4"><!></div> <div class="flex flex-col lg:flex-row gap-6 mt-4"><!> <!></div></div></div> <div class="hidden md:block bg-base-100 rounded-lg "><table class="table w-full"><thead class="sticky top-0 z-10 bg-base-200"><tr class="bg-base-200"><th class="cursor-pointer hover:bg-base-100 text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="cursor-pointer hover:bg-base-100 text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function of(e,t){Z(t,!0);const r=ae(()=>L.filteredProducts),n=ae(()=>L.filteredGroupedProducts),s=ae(()=>L.stats),a=ae(()=>L.uniqueStores),o=ae(()=>L.uniqueWho),l=ae(()=>L.uniqueProductTypes),u=ae(()=>L.filters);function f(K,re){Gc(K,re)}var v=af(),_=G(v),m=c(_),p=c(m),g=c(p);la(g,{class:"w-4 h-4 mr-1"});var x=d(g),w=d(p,2),P=c(w);wn(P,{class:"w-4 h-4 mr-1"});var O=d(P),C=d(w,2),A=c(C);Sn(A,{class:"w-4 h-4 mr-1"});var $=d(A),I=d(C,2),q=c(I);Oc(q,{class:"w-4 h-4 mr-1"});var W=d(q),V=d(m,2),te=c(V),be=c(te),ue=c(be),z=c(ue);fs(z,{class:"w-5 h-5"});var T=d(ue,2);T.__click=[_d];var B=c(T);pt(B,{class:"w-4 h-4"});var ie=d(te,2),Se=c(ie),S=d(c(Se),2),y=c(S);Vc(y,{class:"w-4 h-4"});var D=d(y,2);D.__input=[md];var he=d(Se,2),qe=d(c(he),2),Be=c(qe);Be.__change=[gd];var Qe=d(Be,2);Qe.__change=[bd];var N=d(Qe,2);N.__change=[yd];var F=d(ie,2),Me=c(F),Re=c(Me);{var Ae=K=>{var re=Td(),je=c(re),ze=d(c(je),2),Te=c(ze);Je(Te,16,()=>i(l),Pe=>Pe,(Pe,ke)=>{const Ve=ae(()=>xn(ke));var ft=Sd();ft.__click=[wd,ke];var Wt=c(ft);gn(Wt,()=>i(Ve).icon,(tt,Et)=>{Et(tt,{class:"w-5 h-5 mr-1"})});var Ut=d(Wt);j(tt=>{Ie(ft,1,`btn btn-sm ${tt??""}`),M(Ut,` ${i(Ve).displayName??""}`)},[()=>i(u).selectedProductTypes.length===0?"btn-soft btn-accent":i(u).selectedProductTypes.includes(ke)?"btn-accent":"btn-dash btn-accent"]),h(Pe,ft)});var Ce=d(Te,2);Ce.__click=[xd];var Oe=c(Ce);wn(Oe,{class:"w-5 h-5"});var ye=d(Ce,2);ye.__click=[Ed];var xe=c(ye);Sn(xe,{class:"w-5 h-5"});var oe=d(ye,2);{var Q=Pe=>{var ke=kd();ke.__click=[Pd];var Ve=c(ke);pt(Ve,{class:"w-3 h-3"}),h(Pe,ke)};R(oe,Pe=>{(i(u).selectedProductTypes.length>0||i(u).selectedTemperatures.length>0)&&Pe(Q)})}j((Pe,ke)=>{Ie(Ce,1,`btn btn-sm ms-4 ${Pe??""}`),Ie(ye,1,`btn btn-sm ${ke??""}`)},[()=>i(u).selectedTemperatures.length===0?"btn-soft btn-success":i(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>i(u).selectedTemperatures.length===0?"btn-soft btn-info":i(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(K,re)};R(Re,K=>{i(l).length>0&&K(Ae)})}var pe=d(Me,2),Ee=c(pe);{var st=K=>{var re=Md(),je=c(re),ze=d(c(je),2),Te=c(ze);Je(Te,16,()=>i(a),ye=>ye,(ye,xe)=>{var oe=Ad();oe.__click=[Nd,xe];var Q=c(oe);an(Q,{class:"w-3 h-3 mr-1"});var Pe=d(Q);j(ke=>{Ie(oe,1,`btn btn-xs ${ke??""}`),M(Pe,` ${xe??""}`)},[()=>i(u).selectedStores.length===0?"btn-soft btn-accent":i(u).selectedStores.includes(xe)?"btn-accent":"btn-dash btn-accent"]),h(ye,oe)});var Ce=d(Te,2);{var Oe=ye=>{var xe=Id();xe.__click=[$d];var oe=c(xe);pt(oe,{class:"w-3 h-3"}),h(ye,xe)};R(Ce,ye=>{i(u).selectedStores.length>0&&ye(Oe)})}h(K,re)};R(Ee,K=>{i(a).length>0&&K(st)})}var Fe=d(Ee,2);{var lr=K=>{var re=qd(),je=c(re),ze=d(c(je),2),Te=c(ze);Je(Te,16,()=>i(o),ye=>ye,(ye,xe)=>{var oe=Rd();oe.__click=[Cd,xe];var Q=c(oe);Wc(Q,{class:"w-3 h-3 mr-1"});var Pe=d(Q);j(ke=>{Ie(oe,1,`btn btn-xs ${ke??""}`),M(Pe,` ${xe??""}`)},[()=>i(u).selectedWho.length===0?" btn-soft btn-info":i(u).selectedWho.includes(xe)?" btn-info":"btn-dash btn-info"]),h(ye,oe)});var Ce=d(Te,2);{var Oe=ye=>{var xe=Dd();xe.__click=[Od];var oe=c(xe);pt(oe,{class:"w-3 h-3"}),h(ye,xe)};R(Ce,ye=>{i(u).selectedWho.length>0&&ye(Oe)})}h(K,re)};R(Fe,K=>{i(o).length>0&&K(lr)})}var at=d(V,2),Ke=c(at),$e=c(Ke),it=c($e),mt=c(it);mt.__click=[Ld];var gt=c(mt),dt=c(gt);la(dt,{class:"w-4 h-4"});var Lt=d(dt,2);{var Tt=K=>{var re=lt();j(()=>M(re,i(u).sortDirection==="asc"?"↑":"↓")),h(K,re)};R(Lt,K=>{i(u).sortColumn==="productName"&&K(Tt)})}var Ye=d(mt);Ye.__click=[Bd];var bt=c(Ye),Bt=c(bt);an(Bt,{class:"w-4 h-4"});var jt=d(Bt,2);{var Nt=K=>{var re=lt();j(()=>M(re,i(u).sortDirection==="asc"?"↑":"↓")),h(K,re)};R(jt,K=>{i(u).sortColumn==="store"&&K(Nt)})}var yt=d(Ye);yt.__click=[jd];var cr=c(yt),wt=c(cr);An(wt,{class:"w-4 h-4"});var zt=d(wt,2);{var At=K=>{var re=lt();j(()=>M(re,i(u).sortDirection==="asc"?"↑":"↓")),h(K,re)};R(zt,K=>{i(u).sortColumn==="who"&&K(At)})}var St=d(yt);St.__click=[zd];var Vt=c(St),ur=d(c(Vt));{var et=K=>{var re=lt();j(()=>M(re,i(u).sortDirection==="asc"?"↑":"↓")),h(K,re)};R(ur,K=>{i(u).sortColumn==="productType"&&K(et)})}var $t=d(St,2),Yt=c($t),Br=c(Yt);Nn(Br,{class:"w-4 h-4"});var jr=d($t),zr=c(jr),U=c(zr);Lc(U,{class:"w-4 h-4"});var de=d($e);Je(de,21,()=>Object.entries(i(n)),([K,re])=>K,(K,re)=>{var je=ae(()=>ha(i(re),2));let ze=()=>i(je)[0],Te=()=>i(je)[1];var Ce=nf(),Oe=G(Ce);{var ye=oe=>{const Q=ae(()=>xn(ze()));var Pe=Wd(),ke=c(Pe),Ve=c(ke),ft=c(Ve);{var Wt=tt=>{var Et=lt();j(()=>M(Et,`🏪 ${ze()??""} (${Te().length??""})`)),h(tt,Et)},Ut=tt=>{var Et=Y(),Vr=G(Et);{var Wr=Jt=>{var dr=Vd(),un=c(dr);gn(un,()=>i(Q).icon,(Vn,Wn)=>{Wn(Vn,{class:"w-4 h-4"})});var dn=d(un,2),zn=c(dn),Er=d(dn,2),fn=c(Er);j(()=>{M(zn,i(Q).displayName),M(fn,`(${Te().length??""})`)}),h(Jt,dr)},cn=Jt=>{var dr=lt();j(()=>M(dr,`📦 ${ze()??""} (${Te().length??""})`)),h(Jt,dr)};R(Vr,Jt=>{i(u).groupBy==="productType"?Jt(Wr):Jt(cn,!1)},!0)}h(tt,Et)};R(ft,tt=>{i(u).groupBy==="store"?tt(Wt):tt(Ut,!1)})}h(oe,Pe)};R(Oe,oe=>{ze()!==""&&oe(ye)})}var xe=d(Oe,2);Je(xe,17,()=>Ju(Te(),i(u)),oe=>oe.$id,(oe,Q)=>{const Pe=ae(()=>xn(i(Q).productType));var ke=rf(),Ve=c(ke);Ve.__click=[Ud,f,Q];var ft=c(Ve),Wt=c(ft),Ut=c(Wt),tt=c(Ut),Et=d(Ut,2);{var Vr=X=>{var ge=Gd(),We=c(ge);j(()=>M(We,`Ancien: ${i(Q).previousNames[0]??""}`)),h(X,ge)};R(Et,X=>{i(Q).previousNames&&i(Q).previousNames.length>0&&X(Vr)})}var Wr=d(Wt,2),cn=c(Wr);{var Jt=X=>{var ge=Hd(),We=c(ge);wn(We,{class:"w-4 h-4 text-success"}),h(X,ge)};R(cn,X=>{i(Q).pFrais&&X(Jt)})}var dr=d(cn,2);{var un=X=>{var ge=Qd(),We=c(ge);Sn(We,{class:"w-4 h-4 text-info"}),h(X,ge)};R(dr,X=>{i(Q).pSurgel&&X(un)})}var dn=d(ft,2),zn=c(dn);Kr(zn,{class:"w-4 h-4 text-amber-600"});var Er=d(Ve);Er.__click=[Kd,f,Q];var fn=c(Er);{var Vn=X=>{var ge=Yd(),We=c(ge);j(()=>{Tn(ge,"data-tip",i(Q).storeInfo.storeComment),M(We,i(Q).storeInfo.storeName||"-")}),h(X,ge)},Wn=X=>{var ge=lt();j(()=>M(ge,i(Q).storeInfo?.storeName||"-")),h(X,ge)};R(fn,X=>{i(Q).storeInfo?.storeComment?X(Vn):X(Wn,!1)})}var Si=d(fn,2),xi=c(Si);Kr(xi,{class:"w-4 h-4 text-amber-600"});var Un=d(Er);Un.__click=[Zd,f,Q];var ks=c(Un);{var Ei=X=>{var ge=Xd();Je(ge,20,()=>i(Q).who,We=>We,(We,vn)=>{var hn=Jd(),Qn=c(hn);j(()=>M(Qn,vn)),h(We,hn)}),h(X,ge)},Pi=X=>{var ge=lt("-");h(X,ge)};R(ks,X=>{i(Q).who&&i(Q).who.length>0?X(Ei):X(Pi,!1)})}var ki=d(ks,2),Ti=c(ki);Kr(Ti,{class:"w-4 h-4 text-amber-600"});var Gn=d(Un),Ni=c(Gn),Ts=c(Ni);gn(Ts,()=>i(Pe).icon,(X,ge)=>{ge(X,{class:"w-3 h-3"})});var Ai=d(Ts),Ns=d(Gn),As=c(Ns),$i=c(As),Ii=d(As,2);{var Mi=X=>{var ge=Fd(),We=c(ge);Uc(We,{class:"w-3 h-3"});var vn=d(We,2),hn=c(vn),Qn=d(vn,2),Bi=c(Qn);j(()=>{M(hn,`${i(Q)?.nbRecipes??""} r.`),M(Bi,`${i(Q)?.totalAssiettes??""} c.`)}),h(X,ge)};R(Ii,X=>{(i(Q).nbRecipes||i(Q).totalAssiettes)&&X(Mi)})}var Hn=d(Ns);Hn.__click=[ef,f,Q];var $s=c(Hn),Ci=d($s),Ri=c(Ci);Kr(Ri,{class:"w-4 h-4 text-amber-600"});var Oi=d(Hn),Di=c(Oi);{var qi=X=>{var ge=tf(),We=c(ge);j(()=>M(We,i(Q).displayMissingQuantity)),h(X,ge)},Li=X=>{Cc(X,{size:28,strokeWidth:3,class:"text-success m-auto"})};R(Di,X=>{i(Q).displayMissingQuantity!=="✅ Complet"?X(qi):X(Li,!1)})}j(()=>{M(tt,i(Q).productName),Ie(Er,1,`${i(u).groupBy==="store"?"hidden":""} cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded font-medium relative group`),Ie(Gn,1,i(u).groupBy==="productType"?"hidden":""),M(Ai,` ${i(Pe).displayName??""}`),M($i,i(Q).displayTotalNeeded||"-"),M($s,`${(i(Q).displayTotalPurchases||"-")??""} `)}),h(oe,ke)}),h(K,Ce)});var H=d(Ke,2);{var xt=K=>{var re=sf();h(K,re)};R(H,K=>{i(r).length===0&&K(xt)})}var Zt=d(_,2);Zu(Zt,{});var It=d(Zt,2);pd(It,{}),j(()=>{M(x,` ${i(s).total??""}`),M(O,` frais:
      ${i(s).frais??""}`),M($,` surgelés:
      ${i(s).surgel??""}`),M(W,` fusionnés:
      ${i(s).merged??""}`),bl(D,i(u).searchQuery),Ar(Be,i(u).groupBy==="none"),Ar(Qe,i(u).groupBy==="store"),Ar(N,i(u).groupBy==="productType"),Ie(Ye,1,`cursor-pointer hover:bg-base-100 text-center ${i(u).groupBy==="store"?"hidden":""}`),Ie(St,1,`cursor-pointer hover:bg-base-100 text-center ${i(u).groupBy==="productType"?"hidden":""}`)}),h(e,v),J()}or(["click","input","change"]);So();var lf=E('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function cf(e){var t=lf();h(e,t)}var uf=E('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function df(e,t){var r=uf(),n=d(c(r),2),s=d(c(n),2),a=c(s);j(()=>M(a,t.message)),h(e,r)}var ff=E('<div class="alert bg-error/20"><div class="flex items-start gap-3 "><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function vf(e,t){var r=ff(),n=c(r),s=c(n);wi(s,{class:"stroke-current shrink-0 h-6 w-6 mt-0.5"});var a=d(s,2),o=d(c(a),2),l=c(o);j(()=>M(l,t.message)),h(e,r)}var hf=E('<div class="flex items-center gap-2 text-success"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),pf=E('<div class="flex items-center gap-2 text-info"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),_f=E('<div class="text-base-content/60"> </div>'),mf=E('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),gf=E('<div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),bf=E('<div class="min-h-screen bg-base-100"><header class="sticky top-0 z-10 bg-base-200 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl font-bold text-base-content">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function yf(e,t){Z(t,!0);let r,n=le(null),s=le(!0);si(async()=>{r=ac();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await L.initialize(r)}catch(T){const B=T instanceof Error?T.message:"Erreur lors de l'initialisation";k(n,B,!0),console.error("[App] Erreur initialisation:",T)}finally{k(s,!1)}}),kl(()=>{L.destroy()});const a=ae(()=>i(n)||L.error),o=ae(()=>i(s)||L.loading),l=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var u=bf(),f=c(u),v=c(f),_=c(v),m=d(c(_),2),p=c(m);{var g=T=>{var B=hf();h(T,B)};R(p,T=>{L.realtimeConnected&&T(g)})}var x=d(p,2);{var w=T=>{var B=pf();h(T,B)};R(x,T=>{L.syncing&&T(w)})}var P=d(x,2);{var O=T=>{var B=_f(),ie=c(B);j(Se=>M(ie,`Maj: ${Se??""}`),[()=>new Date(L.lastSync).toLocaleTimeString()]),h(T,B)};R(P,T=>{L.lastSync&&T(O)})}var C=d(P,2);{var A=T=>{var B=mf(),ie=c(B),Se=c(ie);Bc(Se,{class:"w-4 h-4 mr-2"}),j(()=>Tn(ie,"href",l)),h(T,B)};R(C,T=>{i(n)&&T(A)})}var $=d(f,2),I=c($);{var q=T=>{vf(T,{get message(){return i(a)}})},W=T=>{var B=Y(),ie=G(B);{var Se=S=>{df(S,{get message(){return i(a)}})};R(ie,S=>{i(a)&&S(Se)},!0)}h(T,B)};R(I,T=>{i(n)?T(q):T(W,!1)})}var V=d(I,2);{var te=T=>{cf(T)};R(V,T=>{i(o)&&T(te)})}var be=d(V,2);{var ue=T=>{of(T,{})},z=T=>{var B=Y(),ie=G(B);{var Se=S=>{var y=gf();h(S,y)};R(ie,S=>{!L.loading&&!i(n)&&S(Se)},!0)}h(T,B)};R(be,T=>{L.enrichedProducts.length>0?T(ue):T(z,!1)})}h(e,u),J()}il(yf,{target:document.getElementById("app_products")});
