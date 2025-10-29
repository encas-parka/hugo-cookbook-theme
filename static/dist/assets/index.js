(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const xa=!1;var Tn=Array.isArray,vo=Array.prototype.indexOf,ys=Array.from,ns=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,ho=Object.getOwnPropertyDescriptors,po=Object.prototype,_o=Array.prototype,$a=Object.getPrototypeOf,Us=Object.isExtensible;function Gr(e){return typeof e=="function"}const F=()=>{};function mo(e){for(var t=0;t<e.length;t++)e[t]()}function ka(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function Na(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const rt=2,ws=4,Ss=8,pr=16,Qt=32,_r=64,Ps=128,_t=256,xn=512,Ge=1024,ct=2048,ar=4096,Pt=8192,mr=16384,Es=32768,gr=65536,Gs=1<<17,go=1<<18,Dr=1<<19,bo=1<<20,ss=1<<21,An=1<<22,dr=1<<23,fr=Symbol("$state"),Ta=Symbol("legacy props"),yo=Symbol(""),tn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Aa(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function wo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function So(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Po(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Eo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function xo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function $o(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ko(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function No(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function To(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ao(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const In=1,Mn=2,Ia=4,Io=8,Mo=16,Co=1,Do=2,Ro=4,Oo=8,qo=16,Bo=1,Lo=2,Me=Symbol(),jo="http://www.w3.org/1999/xhtml",zo="http://www.w3.org/2000/svg",Vo="@attach";function Wo(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Uo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Go=!1;function Ma(e){return e===this.v}function Ca(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ho(e,t){return e!==t}function Da(e){return!Ca(e,this.v)}let Rr=!1,Qo=!1;function Ko(){Rr=!0}let Ne=null;function Nr(e){Ne=e}function G(e,t=!1,r){Ne={p:Ne,c:null,e:null,s:e,x:null,l:Rr&&!t?{s:null,u:null,$:[]}:null}}function H(e){var t=Ne,r=t.e;if(r!==null){t.e=null;for(var n of r)Ja(n)}return Ne=t.p,{}}function Or(){return!Rr||Ne!==null&&Ne.l===null}let ur=[];function Ra(){var e=ur;ur=[],mo(e)}function vr(e){if(ur.length===0&&!rn){var t=ur;queueMicrotask(()=>{t===ur&&Ra()})}ur.push(e)}function Yo(){for(;ur.length>0;)Ra()}const Jo=new WeakMap;function Oa(e){var t=X;if(t===null)return te.f|=dr,e;if((t.f&Es)===0){if((t.f&Ps)===0)throw!t.parent&&e instanceof Error&&qa(e),e;t.b.error(e)}else Tr(e,t)}function Tr(e,t){for(;t!==null;){if((t.f&Ps)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&qa(e),e}function qa(e){const t=Jo.get(e);t&&(ns(e,"message",{value:t.message}),ns(e,"stack",{value:t.stack}))}const yn=new Set;let ge=null,Sn=null,as=new Set,Ct=[],Cn=null,is=!1,rn=!1;class vt{current=new Map;#e=new Map;#r=new Set;#d=0;#f=null;#c=[];#i=[];#o=[];#n=[];#l=[];#s=[];skipped_effects=new Set;process(t){Ct=[],Sn=null;var r=vt.apply(this);for(const i of t)this.#a(i);if(this.#d===0){this.#v();var n=this.#i,s=this.#o;this.#i=[],this.#o=[],this.#n=[],Sn=this,ge=null,Hs(n),Hs(s),Sn=null,this.#f?.resolve()}else this.#u(this.#i),this.#u(this.#o),this.#u(this.#n);r();for(const i of this.#c)on(i);this.#c=[]}#a(t){t.f^=Ge;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Qt|_r))!==0,i=s&&(n&Ge)!==0,o=i||(n&Pt)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=Ge:(n&ws)!==0?this.#o.push(r):(n&Ge)===0&&((n&An)!==0&&r.b?.is_pending()?this.#c.push(r):Bn(r)&&((r.f&pr)!==0&&this.#n.push(r),on(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#u(t){for(const r of t)((r.f&ct)!==0?this.#l:this.#s).push(r),Je(r,Ge);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){ge=this}deactivate(){ge=null}flush(){if(Ct.length>0){if(this.activate(),Ba(),ge!==null&&ge!==this)return}else this.#d===0&&this.#v();this.deactivate();for(const t of as)if(as.delete(t),t(),ge!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),yn.size>1){this.#e.clear();let t=!0;for(const r of yn){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;La(n)}if(Ct.length>0){ge=r;const n=vt.apply(r);for(const s of Ct)r.#a(s);Ct=[],n()}}ge=null}yn.delete(this)}increment(){this.#d+=1}decrement(){this.#d-=1;for(const t of this.#l)Je(t,ct),hr(t);for(const t of this.#s)Je(t,ar),hr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#f??=ka()).promise}static ensure(){if(ge===null){const t=ge=new vt;yn.add(ge),rn||vt.enqueue(()=>{ge===t&&t.flush()})}return ge}static enqueue(t){vr(t)}static apply(t){return F}}function Zo(e){var t=rn;rn=!0;try{for(var r;;){if(Yo(),Ct.length===0&&(ge?.flush(),Ct.length===0))return Cn=null,r;Ba()}}finally{rn=t}}function Ba(){var e=$r;is=!0;try{var t=0;for(Js(!0);Ct.length>0;){var r=vt.ensure();if(t++>1e3){var n,s;Xo()}r.process(Ct),rr.clear()}}finally{is=!1,Js(e),Cn=null}}function Xo(){try{xo()}catch(e){Tr(e,Cn)}}let cr=null;function Hs(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(mr|Pt))===0&&Bn(n)&&(cr=[],on(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Fa(n):n.fn=null),cr?.length>0)){rr.clear();for(const s of cr)on(s);cr=[]}}cr=null}}function La(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&rt)!==0?La(t):(r&(An|pr))!==0&&(Je(t,ct),hr(t))}}function hr(e){for(var t=Cn=e;t.parent!==null;){t=t.parent;var r=t.f;if(is&&t===X&&(r&pr)!==0)return;if((r&(_r|Qt))!==0){if((r&Ge)===0)return;t.f^=Ge}}Ct.push(t)}function ja(e){let t=0,r=nr(0),n;return()=>{hl()&&(a(r),As(()=>(t===0&&(n=qr(()=>e(()=>Dt(r)))),t+=1,()=>{vr(()=>{t-=1,t===0&&(n?.(),n=void 0,Dt(r))})})))}}var Fo=gr|Dr|Ps;function el(e,t,r){new tl(e,t,r)}class tl{parent;#e=!1;#r;#d=null;#f;#c;#i;#o=null;#n=null;#l=null;#s=null;#a=0;#u=0;#v=!1;#h=null;#p=()=>{this.#h&&Ar(this.#h,this.#a)};#P=ja(()=>(this.#h=nr(this.#a),()=>{this.#h=null}));constructor(t,r,n){this.#r=t,this.#f=r,this.#c=n,this.parent=X.b,this.#e=!!this.#f.pending,this.#i=Jt(()=>{X.b=this;{try{this.#o=Le(()=>n(this.#r))}catch(s){this.error(s)}this.#u>0?this.#m():this.#e=!1}},Fo)}#t(){try{this.#o=Le(()=>this.#c(this.#r))}catch(t){this.error(t)}this.#e=!1}#E(){const t=this.#f.pending;t&&(this.#n=Le(()=>t(this.#r)),vt.enqueue(()=>{this.#o=this.#_(()=>(vt.ensure(),Le(()=>this.#c(this.#r)))),this.#u>0?this.#m():(Ut(this.#n,()=>{this.#n=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#f.pending}#_(t){var r=X,n=te,s=Ne;Rt(this.#i),tt(this.#i),Nr(this.#i.ctx);try{return t()}catch(i){return Oa(i),null}finally{Rt(r),tt(n),Nr(s)}}#m(){const t=this.#f.pending;this.#o!==null&&(this.#s=document.createDocumentFragment(),rl(this.#o,this.#s)),this.#n===null&&(this.#n=Le(()=>t(this.#r)))}#y(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#y(t);return}this.#u+=t,this.#u===0&&(this.#e=!1,this.#n&&Ut(this.#n,()=>{this.#n=null}),this.#s&&(this.#r.before(this.#s),this.#s=null),vr(()=>{vt.ensure().flush()}))}update_pending_count(t){this.#y(t),this.#a+=t,as.add(this.#p)}get_effect_pending(){return this.#P(),a(this.#h)}error(t){var r=this.#f.onerror;let n=this.#f.failed;if(this.#v||!r&&!n)throw t;this.#o&&(ze(this.#o),this.#o=null),this.#n&&(ze(this.#n),this.#n=null),this.#l&&(ze(this.#l),this.#l=null);var s=!1,i=!1;const o=()=>{if(s){Uo();return}s=!0,i&&Ao(),vt.ensure(),this.#a=0,this.#l!==null&&Ut(this.#l,()=>{this.#l=null}),this.#e=this.has_pending_snippet(),this.#o=this.#_(()=>(this.#v=!1,Le(()=>this.#c(this.#r)))),this.#u>0?this.#m():this.#e=!1};var l=te;try{tt(null),i=!0,r?.(t,o),i=!1}catch(c){Tr(c,this.#i&&this.#i.parent)}finally{tt(l)}n&&vr(()=>{this.#l=this.#_(()=>{this.#v=!0;try{return Le(()=>{n(this.#r,()=>t,()=>o)})}catch(c){return Tr(c,this.#i.parent),null}finally{this.#v=!1}})})}}function rl(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:hn(r);t.append(r),r=s}}function za(e,t,r){const n=Or()?Dn:xs;if(t.length===0){r(e.map(n));return}var s=ge,i=X,o=nl();Promise.all(t.map(l=>sl(l))).then(l=>{o();try{r([...e.map(n),...l])}catch(c){(i.f&mr)===0&&Tr(c,i)}s?.deactivate(),Va()}).catch(l=>{Tr(l,i)})}function nl(){var e=X,t=te,r=Ne,n=ge;return function(){Rt(e),tt(t),Nr(r),n?.activate()}}function Va(){Rt(null),tt(null),Nr(null)}function Dn(e){var t=rt|ct,r=te!==null&&(te.f&rt)!==0?te:null;return X===null||r!==null&&(r.f&_t)!==0?t|=_t:X.f|=Dr,{ctx:Ne,deps:null,effects:null,equals:Ma,f:t,fn:e,reactions:null,rv:0,v:Me,wv:0,parent:r??X,ac:null}}function sl(e,t){let r=X;r===null&&wo();var n=r.b,s=void 0,i=nr(Me),o=!te,l=new Map;return _l(()=>{var c=ka();s=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(g){c.reject(g)}var f=ge,v=n.is_pending();o&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(tn),l.set(f,c)));const m=(g,h=void 0)=>{v||f.activate(),h?h!==tn&&(i.f|=dr,Ar(i,h)):((i.f&dr)!==0&&(i.f^=dr),Ar(i,g)),o&&(n.update_pending_count(-1),v||f.decrement()),Va()};c.promise.then(m,g=>m(null,g||"unknown"))}),Ya(()=>{for(const c of l.values())c.reject(tn)}),new Promise(c=>{function f(v){function m(){v===s?c(i):f(s)}v.then(m,m)}f(s)})}function W(e){const t=Dn(e);return ri(t),t}function xs(e){const t=Dn(e);return t.equals=Da,t}function Wa(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)ze(t[r])}}function al(e){for(var t=e.parent;t!==null;){if((t.f&rt)===0)return t;t=t.parent}return null}function $s(e){var t,r=X;Rt(al(e));try{Wa(e),t=ii(e)}finally{Rt(r)}return t}function Ua(e){var t=$s(e);if(e.equals(t)||(e.v=t,e.wv=si()),!br){var r=(er||(e.f&_t)!==0)&&e.deps!==null?ar:Ge;Je(e,r)}}const rr=new Map;function nr(e,t){var r={f:0,v:e,reactions:null,equals:Ma,rv:0,wv:0};return r}function J(e,t){const r=nr(e);return ri(r),r}function il(e,t=!1,r=!0){const n=nr(e);return t||(n.equals=Da),Rr&&r&&Ne!==null&&Ne.l!==null&&(Ne.l.s??=[]).push(n),n}function k(e,t,r=!1){te!==null&&(!St||(te.f&Gs)!==0)&&Or()&&(te.f&(rt|pr|An|Gs))!==0&&!Gt?.includes(e)&&To();let n=r?ht(t):t;return Ar(e,n)}function Ar(e,t){if(!e.equals(t)){var r=e.v;br?rr.set(e,t):rr.set(e,r),e.v=t;var n=vt.ensure();n.capture(e,r),(e.f&rt)!==0&&((e.f&ct)!==0&&$s(e),Je(e,(e.f&_t)===0?Ge:ar)),e.wv=si(),Ga(e,ct),Or()&&X!==null&&(X.f&Ge)!==0&&(X.f&(Qt|_r))===0&&(ft===null?bl([e]):ft.push(e))}return t}function Dt(e){k(e,e.v+1)}function Ga(e,t){var r=e.reactions;if(r!==null)for(var n=Or(),s=r.length,i=0;i<s;i++){var o=r[i],l=o.f;if(!(!n&&o===X)){var c=(l&ct)===0;c&&Je(o,t),(l&rt)!==0?Ga(o,ar):c&&((l&pr)!==0&&cr!==null&&cr.push(o),hr(o))}}}function ht(e){if(typeof e!="object"||e===null||fr in e)return e;const t=$a(e);if(t!==po&&t!==_o)return e;var r=new Map,n=Tn(e),s=J(0),i=Ht,o=l=>{if(Ht===i)return l();var c=te,f=Ht;tt(null),Xs(i);var v=l();return tt(c),Xs(f),v};return n&&r.set("length",J(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&ko();var v=r.get(c);return v===void 0?v=o(()=>{var m=J(f.value);return r.set(c,m),m}):k(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=o(()=>J(Me));r.set(c,v),Dt(s)}}else k(f,Me),Dt(s);return!0},get(l,c,f){if(c===fr)return e;var v=r.get(c),m=c in l;if(v===void 0&&(!m||tr(l,c)?.writable)&&(v=o(()=>{var h=ht(m?l[c]:Me),_=J(h);return _}),r.set(c,v)),v!==void 0){var g=a(v);return g===Me?void 0:g}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=a(v))}else if(f===void 0){var m=r.get(c),g=m?.v;if(m!==void 0&&g!==Me)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return f},has(l,c){if(c===fr)return!0;var f=r.get(c),v=f!==void 0&&f.v!==Me||Reflect.has(l,c);if(f!==void 0||X!==null&&(!v||tr(l,c)?.writable)){f===void 0&&(f=o(()=>{var g=v?ht(l[c]):Me,h=J(g);return h}),r.set(c,f));var m=a(f);if(m===Me)return!1}return v},set(l,c,f,v){var m=r.get(c),g=c in l;if(n&&c==="length")for(var h=f;h<m.v;h+=1){var _=r.get(h+"");_!==void 0?k(_,Me):h in l&&(_=o(()=>J(Me)),r.set(h+"",_))}if(m===void 0)(!g||tr(l,c)?.writable)&&(m=o(()=>J(void 0)),k(m,ht(f)),r.set(c,m));else{g=m.v!==Me;var w=o(()=>ht(f));k(m,w)}var S=Reflect.getOwnPropertyDescriptor(l,c);if(S?.set&&S.set.call(v,f),!g){if(n&&typeof c=="string"){var $=r.get("length"),M=Number(c);Number.isInteger(M)&&M>=$.v&&k($,M+1)}Dt(s)}return!0},ownKeys(l){a(s);var c=Reflect.ownKeys(l).filter(m=>{var g=r.get(m);return g===void 0||g.v!==Me});for(var[f,v]of r)v.v!==Me&&!(f in l)&&c.push(f);return c},setPrototypeOf(){No()}})}function Qs(e){try{if(e!==null&&typeof e=="object"&&fr in e)return e[fr]}catch{}return e}function ol(e,t){return Object.is(Qs(e),Qs(t))}var Ks,Ha,Qa,Ka;function ll(){if(Ks===void 0){Ks=window,Ha=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Qa=tr(t,"firstChild").get,Ka=tr(t,"nextSibling").get,Us(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Us(r)&&(r.__t=void 0)}}function Kt(e=""){return document.createTextNode(e)}function Ir(e){return Qa.call(e)}function hn(e){return Ka.call(e)}function u(e,t){return Ir(e)}function L(e,t=!1){{var r=Ir(e);return r instanceof Comment&&r.data===""?hn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=hn(n);return n}function cl(e){e.textContent=""}function Rn(){return!1}function ul(e,t){if(t){const r=document.body;e.autofocus=!0,vr(()=>{document.activeElement===r&&e.focus()})}}let Ys=!1;function dl(){Ys||(Ys=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function On(e){var t=te,r=X;tt(null),Rt(null);try{return e()}finally{tt(t),Rt(r)}}function ks(e,t,r,n=r){e.addEventListener(t,()=>On(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),dl()}function fl(e){X===null&&te===null&&Eo(),te!==null&&(te.f&_t)!==0&&X===null&&Po(),br&&So()}function vl(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Yt(e,t,r,n=!0){var s=X;s!==null&&(s.f&Pt)!==0&&(e|=Pt);var i={ctx:Ne,deps:null,nodes_start:null,nodes_end:null,f:e|ct,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{on(i),i.f|=Es}catch(c){throw ze(i),c}else t!==null&&hr(i);if(n){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Dr)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&vl(o,s),te!==null&&(te.f&rt)!==0&&(e&_r)===0)){var l=te;(l.effects??=[]).push(o)}}return i}function hl(){return te!==null&&!St}function Ya(e){const t=Yt(Ss,null,!1);return Je(t,Ge),t.teardown=e,t}function Ns(e){fl();var t=X.f,r=!te&&(t&Qt)!==0&&(t&Es)===0;if(r){var n=Ne;(n.e??=[]).push(e)}else return Ja(e)}function Ja(e){return Yt(ws|bo,e,!1)}function pl(e){vt.ensure();const t=Yt(_r|Dr,e,!0);return(r={})=>new Promise(n=>{r.outro?Ut(t,()=>{ze(t),n(void 0)}):(ze(t),n(void 0))})}function Ts(e){return Yt(ws,e,!1)}function _l(e){return Yt(An|Dr,e,!0)}function As(e,t=0){return Yt(Ss|t,e,!0)}function V(e,t=[],r=[]){za(t,r,n=>{Yt(Ss,()=>e(...n.map(a)),!0)})}function Jt(e,t=0){var r=Yt(pr|t,e,!0);return r}function Le(e,t=!0){return Yt(Qt|Dr,e,!0,t)}function Za(e){var t=e.teardown;if(t!==null){const r=br,n=te;Zs(!0),tt(null);try{t.call(null)}finally{Zs(r),tt(n)}}}function Xa(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&On(()=>{s.abort(tn)});var n=r.next;(r.f&_r)!==0?r.parent=null:ze(r,t),r=n}}function ml(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Qt)===0&&ze(t),t=r}}function ze(e,t=!0){var r=!1;(t||(e.f&go)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(gl(e.nodes_start,e.nodes_end),r=!0),Xa(e,t&&!r),$n(e,0),Je(e,mr);var n=e.transitions;if(n!==null)for(const i of n)i.stop();Za(e);var s=e.parent;s!==null&&s.first!==null&&Fa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function gl(e,t){for(;e!==null;){var r=e===t?null:hn(e);e.remove(),e=r}}function Fa(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Ut(e,t){var r=[];Is(e,r,!0),ei(r,()=>{ze(e),t&&t()})}function ei(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function Is(e,t,r){if((e.f&Pt)===0){if(e.f^=Pt,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var s=n.next,i=(n.f&gr)!==0||(n.f&Qt)!==0;Is(n,t,i?r:!1),n=s}}}function qn(e){ti(e,!0)}function ti(e,t){if((e.f&Pt)!==0){e.f^=Pt,(e.f&Ge)===0&&(Je(e,ct),hr(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&gr)!==0||(r.f&Qt)!==0;ti(r,s?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let $r=!1;function Js(e){$r=e}let br=!1;function Zs(e){br=e}let te=null,St=!1;function tt(e){te=e}let X=null;function Rt(e){X=e}let Gt=null;function ri(e){te!==null&&(Gt===null?Gt=[e]:Gt.push(e))}let Ye=null,ot=0,ft=null;function bl(e){ft=e}let ni=1,an=0,Ht=an;function Xs(e){Ht=e}let er=!1;function si(){return++ni}function Bn(e){var t=e.f;if((t&ct)!==0)return!0;if((t&ar)!==0){var r=e.deps,n=(t&_t)!==0;if(r!==null){var s,i,o=(t&xn)!==0,l=n&&X!==null&&!er,c=r.length;if((o||l)&&(X===null||(X.f&mr)===0)){var f=e,v=f.parent;for(s=0;s<c;s++)i=r[s],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=xn),l&&v!==null&&(v.f&_t)===0&&(f.f^=_t)}for(s=0;s<c;s++)if(i=r[s],Bn(i)&&Ua(i),i.wv>e.wv)return!0}(!n||X!==null&&!er)&&Je(e,Ge)}return!1}function ai(e,t,r=!0){var n=e.reactions;if(n!==null&&!Gt?.includes(e))for(var s=0;s<n.length;s++){var i=n[s];(i.f&rt)!==0?ai(i,t,!1):t===i&&(r?Je(i,ct):(i.f&Ge)!==0&&Je(i,ar),hr(i))}}function ii(e){var t=Ye,r=ot,n=ft,s=te,i=er,o=Gt,l=Ne,c=St,f=Ht,v=e.f;Ye=null,ot=0,ft=null,er=(v&_t)!==0&&(St||!$r||te===null),te=(v&(Qt|_r))===0?e:null,Gt=null,Nr(e.ctx),St=!1,Ht=++an,e.ac!==null&&(On(()=>{e.ac.abort(tn)}),e.ac=null);try{e.f|=ss;var m=e.fn,g=m(),h=e.deps;if(Ye!==null){var _;if($n(e,ot),h!==null&&ot>0)for(h.length=ot+Ye.length,_=0;_<Ye.length;_++)h[ot+_]=Ye[_];else e.deps=h=Ye;if(!er||(v&rt)!==0&&e.reactions!==null)for(_=ot;_<h.length;_++)(h[_].reactions??=[]).push(e)}else h!==null&&ot<h.length&&($n(e,ot),h.length=ot);if(Or()&&ft!==null&&!St&&h!==null&&(e.f&(rt|ar|ct))===0)for(_=0;_<ft.length;_++)ai(ft[_],e);return s!==null&&s!==e&&(an++,ft!==null&&(n===null?n=ft:n.push(...ft))),(e.f&dr)!==0&&(e.f^=dr),g}catch(w){return Oa(w)}finally{e.f^=ss,Ye=t,ot=r,ft=n,te=s,er=i,Gt=o,Nr(l),St=c,Ht=f}}function yl(e,t){let r=t.reactions;if(r!==null){var n=vo.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&rt)!==0&&(Ye===null||!Ye.includes(t))&&(Je(t,ar),(t.f&(_t|xn))===0&&(t.f^=xn),Wa(t),$n(t,0))}function $n(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)yl(e,r[n])}function on(e){var t=e.f;if((t&mr)===0){Je(e,Ge);var r=X,n=$r;X=e,$r=!0;try{(t&pr)!==0?ml(e):Xa(e),Za(e);var s=ii(e);e.teardown=typeof s=="function"?s:null,e.wv=ni;var i;xa&&Qo&&(e.f&ct)!==0&&e.deps}finally{$r=n,X=r}}}async function wl(){await Promise.resolve(),Zo()}function a(e){var t=e.f,r=(t&rt)!==0;if(te!==null&&!St){var n=X!==null&&(X.f&mr)!==0;if(!n&&!Gt?.includes(e)){var s=te.deps;if((te.f&ss)!==0)e.rv<an&&(e.rv=an,Ye===null&&s!==null&&s[ot]===e?ot++:Ye===null?Ye=[e]:(!er||!Ye.includes(e))&&Ye.push(e));else{(te.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[te]:i.includes(te)||i.push(te)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,l=o.parent;l!==null&&(l.f&_t)===0&&(o.f^=_t)}if(br){if(rr.has(e))return rr.get(e);if(r){o=e;var c=o.v;return((o.f&Ge)===0&&o.reactions!==null||oi(o))&&(c=$s(o)),rr.set(o,c),c}}else r&&(o=e,Bn(o)&&Ua(o));if((e.f&dr)!==0)throw e.v;return e.v}function oi(e){if(e.v===Me)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(rr.has(t)||(t.f&rt)!==0&&oi(t))return!0;return!1}function qr(e){var t=St;try{return St=!0,e()}finally{St=t}}const Sl=-7169;function Je(e,t){e.f=e.f&Sl|t}function Pl(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const El=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function xl(e){return El.includes(e)}const $l={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function kl(e){return e=e.toLowerCase(),$l[e]??e}const Nl=["touchstart","touchmove"];function Tl(e){return Nl.includes(e)}const li=new Set,os=new Set;function ci(e,t,r,n={}){function s(i){if(n.capture||Jr.call(t,i),!i.cancelBubble)return On(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?vr(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Fs(e,t,r,n={}){var s=ci(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function Ot(e){for(var t=0;t<e.length;t++)li.add(e[t]);for(var r of os)r(e)}let ea=null;function Jr(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],i=s[0]||e.target;ea=e;var o=0,l=ea===e&&e.__root;if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=s.indexOf(t);if(f===-1)return;c<=f&&(o=c)}if(i=s[o]||e.target,i!==t){ns(e,"currentTarget",{configurable:!0,get(){return i||r}});var v=te,m=X;tt(null),Rt(null);try{for(var g,h=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var w=i["__"+n];if(w!=null&&(!i.disabled||e.target===i))if(Tn(w)){var[S,...$]=w;S.apply(i,[e,...$])}else w.call(i,e)}catch(M){g?h.push(M):g=M}if(e.cancelBubble||_===t||_===null)break;i=_}if(g){for(let M of h)queueMicrotask(()=>{throw M});throw g}}finally{e.__root=t,delete e.currentTarget,tt(v),Rt(m)}}}function ui(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Mr(e,t){var r=X;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function E(e,t){var r=(t&Bo)!==0,n=(t&Lo)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=ui(i?e:"<!>"+e),r||(s=Ir(s)));var o=n||Ha?document.importNode(s,!0):s.cloneNode(!0);if(r){var l=Ir(o),c=o.lastChild;Mr(l,c)}else Mr(o,o);return o}}function Al(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=ui(s),l=Ir(o);i=Ir(l)}var c=i.cloneNode(!0);return Mr(c,c),c}}function Il(e,t){return Al(e,t,"svg")}function lt(e=""){{var t=Kt(e+"");return Mr(t,t),t}}function Q(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Kt();return e.append(t,r),Mr(t,r),e}function p(e,t){e!==null&&e.before(t)}function q(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function Ml(e,t){return Cl(e,t)}const Er=new Map;function Cl(e,{target:t,anchor:r,props:n={},events:s,context:i,intro:o=!0}){ll();var l=new Set,c=m=>{for(var g=0;g<m.length;g++){var h=m[g];if(!l.has(h)){l.add(h);var _=Tl(h);t.addEventListener(h,Jr,{passive:_});var w=Er.get(h);w===void 0?(document.addEventListener(h,Jr,{passive:_}),Er.set(h,1)):Er.set(h,w+1)}}};c(ys(li)),os.add(c);var f=void 0,v=pl(()=>{var m=r??t.appendChild(Kt());return el(m,{pending:()=>{}},g=>{if(i){G({});var h=Ne;h.c=i}s&&(n.$$events=s),f=e(g,n)||{},i&&H()}),()=>{for(var g of l){t.removeEventListener(g,Jr);var h=Er.get(g);--h===0?(document.removeEventListener(g,Jr),Er.delete(g)):Er.set(g,h)}os.delete(c),m!==r&&m.parentNode?.removeChild(m)}});return Dl.set(f,v),f}let Dl=new WeakMap;function D(e,t,r=!1){var n=e,s=null,i=null,o=Me,l=r?gr:0,c=!1;const f=(h,_=!0)=>{c=!0,g(_,h)};var v=null;function m(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var h=o?s:i,_=o?i:s;h&&qn(h),_&&Ut(_,()=>{o?i=null:s=null})}const g=(h,_)=>{if(o!==(o=h)){var w=Rn(),S=n;if(w&&(v=document.createDocumentFragment(),v.append(S=Kt())),o?s??=_&&Le(()=>_(S)):i??=_&&Le(()=>_(S)),w){var $=ge,M=o?s:i,T=o?i:s;M&&$.skipped_effects.delete(M),T&&$.skipped_effects.add(T),$.add_callback(m)}else m()}};Jt(()=>{c=!1,t(f),c||g(null,null)},l)}function Rl(e,t,r){var n=e,s=Me,i,o,l=null,c=Or()?Ho:Ca;function f(){i&&Ut(i),l!==null&&(l.lastChild.remove(),n.before(l),l=null),i=o}Jt(()=>{if(c(s,s=t())){var v=n,m=Rn();m&&(l=document.createDocumentFragment(),l.append(v=Kt())),o=Le(()=>r(v)),m?ge.add_callback(f):f()}})}function Ms(e,t){return t}function Ol(e,t,r){for(var n=e.items,s=[],i=t.length,o=0;o<i;o++)Is(t[o].e,s,!0);var l=i>0&&s.length===0&&r!==null;if(l){var c=r.parentNode;cl(c),c.append(r),n.clear(),Mt(e,t[0].prev,t[i-1].next)}ei(s,()=>{for(var f=0;f<i;f++){var v=t[f];l||(n.delete(v.k),Mt(e,v.prev,v.next)),ze(v.e,!l)}})}function je(e,t,r,n,s,i=null){var o=e,l={flags:t,items:new Map,first:null},c=(t&Ia)!==0;if(c){var f=e;o=f.appendChild(Kt())}var v=null,m=!1,g=new Map,h=xs(()=>{var $=r();return Tn($)?$:$==null?[]:ys($)}),_,w;function S(){ql(w,_,l,g,o,s,t,n,r),i!==null&&(_.length===0?v?qn(v):v=Le(()=>i(o)):v!==null&&Ut(v,()=>{v=null}))}Jt(()=>{w??=X,_=a(h);var $=_.length;if(!(m&&$===0)){m=$===0;var M,T,P,x;if(Rn()){var N=new Set,R=ge;for(T=0;T<$;T+=1){P=_[T],x=n(P,T);var y=l.items.get(x)??g.get(x);y?(t&(In|Mn))!==0&&di(y,P,T,t):(M=fi(null,l,null,null,P,x,T,s,t,r,!0),g.set(x,M)),N.add(x)}for(const[C,B]of l.items)N.has(C)||R.skipped_effects.add(B.e);R.add_callback(S)}else S();a(h)}})}function ql(e,t,r,n,s,i,o,l,c){var f=(o&Io)!==0,v=(o&(In|Mn))!==0,m=t.length,g=r.items,h=r.first,_=h,w,S=null,$,M=[],T=[],P,x,N,R;if(f)for(R=0;R<m;R+=1)P=t[R],x=l(P,R),N=g.get(x),N!==void 0&&(N.a?.measure(),($??=new Set).add(N));for(R=0;R<m;R+=1){if(P=t[R],x=l(P,R),N=g.get(x),N===void 0){var y=n.get(x);if(y!==void 0){n.delete(x),g.set(x,y);var C=S?S.next:_;Mt(r,S,y),Mt(r,y,C),Yn(y,C,s),S=y}else{var B=_?_.e.nodes_start:s;S=fi(B,r,S,S===null?r.first:S.next,P,x,R,i,o,c)}g.set(x,S),M=[],T=[],_=S.next;continue}if(v&&di(N,P,R,o),(N.e.f&Pt)!==0&&(qn(N.e),f&&(N.a?.unfix(),($??=new Set).delete(N))),N!==_){if(w!==void 0&&w.has(N)){if(M.length<T.length){var be=T[0],he;S=be.prev;var He=M[0],Ve=M[M.length-1];for(he=0;he<M.length;he+=1)Yn(M[he],be,s);for(he=0;he<T.length;he+=1)w.delete(T[he]);Mt(r,He.prev,Ve.next),Mt(r,S,He),Mt(r,Ve,be),_=be,S=Ve,R-=1,M=[],T=[]}else w.delete(N),Yn(N,_,s),Mt(r,N.prev,N.next),Mt(r,N,S===null?r.first:S.next),Mt(r,S,N),S=N;continue}for(M=[],T=[];_!==null&&_.k!==x;)(_.e.f&Pt)===0&&(w??=new Set).add(_),T.push(_),_=_.next;if(_===null)continue;N=_}M.push(N),S=N,_=N.next}if(_!==null||w!==void 0){for(var xe=w===void 0?[]:ys(w);_!==null;)(_.e.f&Pt)===0&&xe.push(_),_=_.next;var Z=xe.length;if(Z>0){var $e=(o&Ia)!==0&&m===0?s:null;if(f){for(R=0;R<Z;R+=1)xe[R].a?.measure();for(R=0;R<Z;R+=1)xe[R].a?.fix()}Ol(r,xe,$e)}}f&&vr(()=>{if($!==void 0)for(N of $)N.a?.apply()}),e.first=r.first&&r.first.e,e.last=S&&S.e;for(var A of n.values())ze(A.e);n.clear()}function di(e,t,r,n){(n&In)!==0&&Ar(e.v,t),(n&Mn)!==0?Ar(e.i,r):e.i=r}function fi(e,t,r,n,s,i,o,l,c,f,v){var m=(c&In)!==0,g=(c&Mo)===0,h=m?g?il(s,!1,!1):nr(s):s,_=(c&Mn)===0?o:nr(o),w={i:_,v:h,k:i,a:null,e:null,prev:r,next:n};try{if(e===null){var S=document.createDocumentFragment();S.append(e=Kt())}return w.e=Le(()=>l(e,h,_,f),Go),w.e.prev=r&&r.e,w.e.next=n&&n.e,r===null?v||(t.first=w):(r.next=w,r.e.next=w.e),n!==null&&(n.prev=w,n.e.prev=w.e),w}finally{}}function Yn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==null&&i!==n;){var o=hn(i);s.before(i),i=o}}function Mt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ae(e,t,...r){var n=e,s=F,i;Jt(()=>{s!==(s=t())&&(i&&(ze(i),i=null),i=Le(()=>s(n,...r)))},gr)}function Zr(e,t,r){var n=e,s,i,o=null,l=null;function c(){i&&(Ut(i),i=null),o&&(o.lastChild.remove(),n.before(o),o=null),i=l,l=null}Jt(()=>{if(s!==(s=t())){var f=Rn();if(s){var v=n;f&&(o=document.createDocumentFragment(),o.append(v=Kt()),i&&ge.skipped_effects.add(i)),l=Le(()=>r(v,s))}f?ge.add_callback(c):c()}},gr)}function Bl(e,t,r,n,s,i){var o,l,c=null,f=e,v;Jt(()=>{const m=t()||null;var g=zo;m!==o&&(v&&(m===null?Ut(v,()=>{v=null,l=null}):m===l?qn(v):ze(v)),m&&m!==l&&(v=Le(()=>{if(c=document.createElementNS(g,m),Mr(c,c),n){var h=c.appendChild(Kt());n(c,h)}X.nodes_end=c,f.before(c)})),o=m,o&&(l=o))},gr)}function Ll(e,t){var r=void 0,n;Jt(()=>{r!==(r=t())&&(n&&(ze(n),n=null),r&&(n=Le(()=>{Ts(()=>r(e))})))})}function vi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=vi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function jl(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=vi(e))&&(n&&(n+=" "),n+=t);return n}function hi(e){return typeof e=="object"?jl(e):e??""}const ta=[...` 	
\r\f \v\uFEFF`];function zl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var l=o+i;(o===0||ta.includes(n[o-1]))&&(l===n.length||ta.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function ra(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var i=e[s];i!=null&&i!==""&&(n+=" "+s+": "+i+r)}return n}function Jn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Vl(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Jn)),s&&c.push(...Object.keys(s).map(Jn));var f=0,v=-1;const w=e.length;for(var m=0;m<w;m++){var g=e[m];if(l?g==="/"&&e[m-1]==="*"&&(l=!1):i?i===g&&(i=!1):g==="/"&&e[m+1]==="*"?l=!0:g==='"'||g==="'"?i=g:g==="("?o++:g===")"&&o--,!l&&i===!1&&o===0){if(g===":"&&v===-1)v=m;else if(g===";"||m===w-1){if(v!==-1){var h=Jn(e.substring(f,v).trim());if(!c.includes(h)){g!==";"&&m++;var _=e.substring(f,m).trim();r+=" "+_+";"}}f=m+1,v=-1}}}}return n&&(r+=ra(n)),s&&(r+=ra(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ee(e,t,r,n,s,i){var o=e.__className;if(o!==r||o===void 0){var l=zl(r,n,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(i&&s!==i)for(var c in i){var f=!!i[c];(s==null||f!==!!s[c])&&e.classList.toggle(c,f)}return i}function Zn(e,t={},r,n){for(var s in r){var i=r[s];t[s]!==i&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,n))}}function Wl(e,t,r,n){var s=e.__style;if(s!==t){var i=Vl(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(Zn(e,r?.[0],n[0]),Zn(e,r?.[1],n[1],"important")):Zn(e,r,n));return n}function kn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Tn(t))return Wo();for(var n of e.options)n.selected=t.includes(nn(n));return}for(n of e.options){var s=nn(n);if(ol(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function pi(e){var t=new MutationObserver(()=>{kn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ya(()=>{t.disconnect()})}function Xr(e,t,r=t){var n=!0;ks(e,"change",s=>{var i=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),nn);else{var l=e.querySelector(i)??e.querySelector("option:not([disabled])");o=l&&nn(l)}r(o)}),Ts(()=>{var s=t();if(kn(e,s,n),n&&s===void 0){var i=e.querySelector(":checked");i!==null&&(s=nn(i),r(s))}e.__value=s,n=!1}),pi(e)}function nn(e){return"__value"in e?e.__value:e.value}const Hr=Symbol("class"),Qr=Symbol("style"),_i=Symbol("is custom element"),mi=Symbol("is html");function Cs(e,t){var r=Ln(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function kr(e,t){var r=Ln(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Ul(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Nn(e,t,r,n){var s=Ln(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[yo]=r),r==null?e.removeAttribute(t):typeof r!="string"&&gi(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Gl(e,t,r,n,s=!1,i=!1){var o=Ln(e),l=o[_i],c=!o[mi],f=t||{},v=e.tagName==="OPTION";for(var m in t)m in r||(r[m]=null);r.class?r.class=hi(r.class):r[Hr]&&(r.class=null),r[Qr]&&(r.style??=null);var g=gi(e);for(const P in r){let x=r[P];if(v&&P==="value"&&x==null){e.value=e.__value="",f[P]=x;continue}if(P==="class"){var h=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ee(e,h,x,n,t?.[Hr],r[Hr]),f[P]=x,f[Hr]=r[Hr];continue}if(P==="style"){Wl(e,x,t?.[Qr],r[Qr]),f[P]=x,f[Qr]=r[Qr];continue}var _=f[P];if(!(x===_&&!(x===void 0&&e.hasAttribute(P)))){f[P]=x;var w=P[0]+P[1];if(w!=="$$")if(w==="on"){const N={},R="$$"+P;let y=P.slice(2);var S=xl(y);if(Pl(y)&&(y=y.slice(0,-7),N.capture=!0),!S&&_){if(x!=null)continue;e.removeEventListener(y,f[R],N),f[R]=null}if(x!=null)if(S)e[`__${y}`]=x,Ot([y]);else{let C=function(B){f[P].call(this,B)};var T=C;f[R]=ci(y,e,C,N)}else S&&(e[`__${y}`]=void 0)}else if(P==="style")Nn(e,P,x);else if(P==="autofocus")ul(e,!!x);else if(!l&&(P==="__value"||P==="value"&&x!=null))e.value=e.__value=x;else if(P==="selected"&&v)Ul(e,x);else{var $=P;c||($=kl($));var M=$==="defaultValue"||$==="defaultChecked";if(x==null&&!l&&!M)if(o[P]=null,$==="value"||$==="checked"){let N=e;const R=t===void 0;if($==="value"){let y=N.defaultValue;N.removeAttribute($),N.defaultValue=y,N.value=N.__value=R?y:null}else{let y=N.defaultChecked;N.removeAttribute($),N.defaultChecked=y,N.checked=R?y:!1}}else e.removeAttribute(P);else M||g.includes($)&&(l||typeof x!="string")?(e[$]=x,$ in o&&(o[$]=Me)):typeof x!="function"&&Nn(e,$,x)}}}return f}function na(e,t,r=[],n=[],s,i=!1,o=!1){za(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",m=!1;if(Jt(()=>{var h=t(...l.map(a)),_=Gl(e,c,h,s,i,o);m&&v&&"value"in h&&kn(e,h.value);for(let S of Object.getOwnPropertySymbols(f))h[S]||ze(f[S]);for(let S of Object.getOwnPropertySymbols(h)){var w=h[S];S.description===Vo&&(!c||w!==c[S])&&(f[S]&&ze(f[S]),f[S]=Le(()=>Ll(e,()=>w))),_[S]=w}c=_}),v){var g=e;Ts(()=>{kn(g,c.value,!0),pi(g)})}m=!0})}function Ln(e){return e.__attributes??={[_i]:e.nodeName.includes("-"),[mi]:e.namespaceURI===jo}}var sa=new Map;function gi(e){var t=e.getAttribute("is")||e.nodeName,r=sa.get(t);if(r)return r;sa.set(t,r=[]);for(var n,s=e,i=Element.prototype;i!==s;){n=ho(s);for(var o in n)n[o].set&&r.push(o);s=$a(s)}return r}function qe(e,t,r=t){var n=new WeakSet;ks(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=Xn(e)?Fn(i):i,r(i),ge!==null&&n.add(ge),await wl(),i!==(i=t())){var o=e.selectionStart,l=e.selectionEnd;e.value=i??"",l!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(l,e.value.length))}}),qr(t)==null&&e.value&&(r(Xn(e)?Fn(e.value):e.value),ge!==null&&n.add(ge)),As(()=>{var s=t();if(e===document.activeElement){var i=Sn??ge;if(n.has(i))return}Xn(e)&&s===Fn(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Hl(e,t,r=t){ks(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),qr(t)==null&&r(e.checked),As(()=>{var n=t();e.checked=!!n})}function Xn(e){var t=e.type;return t==="number"||t==="range"}function Fn(e){return e===""?null:+e}let wn=!1;function Ql(e){var t=wn;try{return wn=!1,[e(),wn]}finally{wn=t}}const Kl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ie(e,t,r){return new Proxy({props:e,exclude:t},Kl)}const Yl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Gr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];Gr(s)&&(s=s());const i=tr(s,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Gr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=tr(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===fr||t===Ta)return!1;for(let r of e.props)if(Gr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Gr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function oe(...e){return new Proxy({props:e},Yl)}function Ft(e,t,r,n){var s=!Rr||(r&Do)!==0,i=(r&Oo)!==0,o=(r&qo)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=o?qr(n):n),l),v;if(i){var m=fr in e||Ta in e;v=tr(e,t)?.set??(m&&t in e?T=>e[t]=T:void 0)}var g,h=!1;i?[g,h]=Ql(()=>e[t]):g=e[t],g===void 0&&n!==void 0&&(g=f(),v&&(s&&$o(),v(g)));var _;if(s?_=()=>{var T=e[t];return T===void 0?f():(c=!0,T)}:_=()=>{var T=e[t];return T!==void 0&&(l=void 0),T===void 0?l:T},s&&(r&Ro)===0)return _;if(v){var w=e.$$legacy;return(function(T,P){return arguments.length>0?((!s||!P||w||h)&&v(P?_():T),T):_()})}var S=!1,$=((r&Co)!==0?Dn:xs)(()=>(S=!1,_()));i&&a($);var M=X;return(function(T,P){if(arguments.length>0){const x=P?a($):s&&i?ht(T):T;return k($,x),S=!0,l!==void 0&&(l=x),T}return br&&S||(M.f&mr)!==0?$.v:a($)})}function bi(e){Ne===null&&Aa(),Rr&&Ne.l!==null?Zl(Ne).m.push(e):Ns(()=>{const t=qr(e);if(typeof t=="function")return t})}function Jl(e){Ne===null&&Aa(),bi(()=>()=>qr(e))}function Zl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Xl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Xl);const Fl="modulepreload",ec=function(e){return"/"+e},aa={},es=function(t,r,n){let s=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};var o=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");s=f(r.map(v=>{if(v=ec(v),v in aa)return;aa[v]=!0;const m=v.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${g}`))return;const h=document.createElement("link");if(h.rel=m?"stylesheet":Fl,m||(h.as="script"),h.crossOrigin="",h.href=v,c&&h.setAttribute("nonce",c),document.head.appendChild(h),m)return new Promise((_,w)=>{h.addEventListener("load",_),h.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${v}`)))})}))}function i(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return s.then(l=>{for(const c of l||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})};class tc extends Map{#e=new Map;#r=J(0);#d=J(0);#f=Ht||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#d.v=super.size}}#c(t){return Ht===this.#f?J(t):nr(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#c(0),r.set(t,n);else return a(this.#r),!1}return a(n),!0}forEach(t,r){this.#i(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var s=super.get(t);if(s!==void 0)n=this.#c(0),r.set(t,n);else{a(this.#r);return}}return a(n),super.get(t)}set(t,r){var n=this.#e,s=n.get(t),i=super.get(t),o=super.set(t,r),l=this.#r;if(s===void 0)s=this.#c(0),n.set(t,s),k(this.#d,super.size),Dt(l);else if(i!==r){Dt(s);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!s.reactions?.every(v=>c.has(v));f&&Dt(l)}return o}delete(t){var r=this.#e,n=r.get(t),s=super.delete(t);return n!==void 0&&(r.delete(t),k(this.#d,super.size),k(n,-1),Dt(this.#r)),s}clear(){if(super.size!==0){super.clear();var t=this.#e;k(this.#d,0);for(var r of t.values())k(r,-1);Dt(this.#r),t.clear()}}#i(){a(this.#r);var t=this.#e;if(this.#d.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#c(0);t.set(r,n)}}for([,n]of this.#e)a(n)}keys(){return a(this.#r),super.keys()}values(){return this.#i(),super.values()}entries(){return this.#i(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return a(this.#d),super.size}}class rc{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class yi{constructor(t){this.generateIdentifier=t,this.kv=new rc}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class nc extends yi{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function sc(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function ac(e,t){const r=sc(e);if("find"in r)return r.find(t);const n=r;for(let s=0;s<n.length;s++){const i=n[s];if(t(i))return i}}function Cr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function Pn(e,t){return e.indexOf(t)!==-1}function ia(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class ic{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return ac(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const oc=e=>Object.prototype.toString.call(e).slice(8,-1),wi=e=>typeof e>"u",lc=e=>e===null,ln=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,ls=e=>ln(e)&&Object.keys(e).length===0,sr=e=>Array.isArray(e),cc=e=>typeof e=="string",uc=e=>typeof e=="number"&&!isNaN(e),dc=e=>typeof e=="boolean",fc=e=>e instanceof RegExp,cn=e=>e instanceof Map,un=e=>e instanceof Set,Si=e=>oc(e)==="Symbol",vc=e=>e instanceof Date&&!isNaN(e.valueOf()),hc=e=>e instanceof Error,oa=e=>typeof e=="number"&&isNaN(e),pc=e=>dc(e)||lc(e)||wi(e)||uc(e)||cc(e)||Si(e),_c=e=>typeof e=="bigint",mc=e=>e===1/0||e===-1/0,gc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),bc=e=>e instanceof URL,Pi=e=>e.replace(/\./g,"\\."),ts=e=>e.map(String).map(Pi).join("."),sn=e=>{const t=[];let r="";for(let s=0;s<e.length;s++){let i=e.charAt(s);if(i==="\\"&&e.charAt(s+1)==="."){r+=".",s++;continue}if(i==="."){t.push(r),r="";continue}r+=i}const n=r;return t.push(n),t};function It(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const Ei=[It(wi,"undefined",()=>null,()=>{}),It(_c,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),It(vc,"Date",e=>e.toISOString(),e=>new Date(e)),It(hc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),It(fc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),It(un,"set",e=>[...e.values()],e=>new Set(e)),It(cn,"map",e=>[...e.entries()],e=>new Map(e)),It(e=>oa(e)||mc(e),"number",e=>oa(e)?"NaN":e>0?"Infinity":"-Infinity",Number),It(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),It(bc,"URL",e=>e.toString(),e=>new URL(e))];function jn(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const xi=jn((e,t)=>Si(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),yc=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),$i=jn(gc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=yc[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function ki(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const Ni=jn(ki,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(s=>{n[s]=e[s]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),Ti=jn((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),wc=[Ni,xi,Ti,$i],la=(e,t)=>{const r=ia(wc,s=>s.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=ia(Ei,s=>s.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},Ai={};Ei.forEach(e=>{Ai[e.annotation]=e});const Sc=(e,t,r)=>{if(sr(t))switch(t[0]){case"symbol":return xi.untransform(e,t,r);case"class":return Ni.untransform(e,t,r);case"custom":return Ti.untransform(e,t,r);case"typed-array":return $i.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=Ai[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},xr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function Ii(e){if(Pn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(Pn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(Pn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const Pc=(e,t)=>{Ii(t);for(let r=0;r<t.length;r++){const n=t[r];if(un(e))e=xr(e,+n);else if(cn(e)){const s=+n,i=+t[++r]==0?"key":"value",o=xr(e,s);switch(i){case"key":e=o;break;case"value":e=e.get(o);break}}else e=e[n]}return e},cs=(e,t,r)=>{if(Ii(t),t.length===0)return r(e);let n=e;for(let i=0;i<t.length-1;i++){const o=t[i];if(sr(n)){const l=+o;n=n[l]}else if(ln(n))n=n[o];else if(un(n)){const l=+o;n=xr(n,l)}else if(cn(n)){if(i===t.length-2)break;const c=+o,f=+t[++i]==0?"key":"value",v=xr(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const s=t[t.length-1];if(sr(n)?n[+s]=r(n[+s]):ln(n)&&(n[s]=r(n[s])),un(n)){const i=xr(n,+s),o=r(i);i!==o&&(n.delete(i),n.add(o))}if(cn(n)){const i=+t[t.length-2],o=xr(n,i);switch(+s==0?"key":"value"){case"key":{const c=r(o);n.set(c,n.get(o)),c!==o&&n.delete(o);break}case"value":{n.set(o,r(n.get(o)));break}}}return e};function us(e,t,r=[]){if(!e)return;if(!sr(e)){Cr(e,(i,o)=>us(i,t,[...r,...sn(o)]));return}const[n,s]=e;s&&Cr(s,(i,o)=>{us(i,t,[...r,...sn(o)])}),t(n,r)}function Ec(e,t,r){return us(t,(n,s)=>{e=cs(e,s,i=>Sc(i,n,r))}),e}function xc(e,t){function r(n,s){const i=Pc(e,sn(s));n.map(sn).forEach(o=>{e=cs(e,o,()=>i)})}if(sr(t)){const[n,s]=t;n.forEach(i=>{e=cs(e,sn(i),()=>e)}),s&&Cr(s,r)}else Cr(t,r);return e}const $c=(e,t)=>ln(e)||sr(e)||cn(e)||un(e)||ki(e,t);function kc(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Nc(e,t){const r={};let n;return e.forEach(s=>{if(s.length<=1)return;t||(s=s.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[i,...o]=s;i.length===0?n=o.map(ts):r[ts(i)]=o.map(ts)}),n?ls(r)?[n]:[n,r]:ls(r)?void 0:r}const Mi=(e,t,r,n,s=[],i=[],o=new Map)=>{const l=pc(e);if(!l){kc(e,s,t);const h=o.get(e);if(h)return n?{transformedValue:null}:h}if(!$c(e,r)){const h=la(e,r),_=h?{transformedValue:h.value,annotations:[h.type]}:{transformedValue:e};return l||o.set(e,_),_}if(Pn(i,e))return{transformedValue:null};const c=la(e,r),f=c?.value??e,v=sr(f)?[]:{},m={};Cr(f,(h,_)=>{if(_==="__proto__"||_==="constructor"||_==="prototype")throw new Error(`Detected property ${_}. This is a prototype pollution risk, please remove it from your object.`);const w=Mi(h,t,r,n,[...s,_],[...i,e],o);v[_]=w.transformedValue,sr(w.annotations)?m[_]=w.annotations:ln(w.annotations)&&Cr(w.annotations,(S,$)=>{m[Pi(_)+"."+$]=S})});const g=ls(m)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,m]:m};return l||o.set(e,g),g};function Ci(e){return Object.prototype.toString.call(e).slice(8,-1)}function ca(e){return Ci(e)==="Array"}function Tc(e){if(Ci(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Ac(e,t,r,n,s){const i={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";i==="enumerable"&&(e[t]=r),s&&i==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function ds(e,t={}){if(ca(e))return e.map(s=>ds(s,t));if(!Tc(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((s,i)=>{if(ca(t.props)&&!t.props.includes(i))return s;const o=e[i],l=ds(o,t);return Ac(s,i,l,e,t.nonenumerable),s},{})}class re{constructor({dedupe:t=!1}={}){this.classRegistry=new nc,this.symbolRegistry=new yi(r=>r.description??""),this.customTransformerRegistry=new ic,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=Mi(t,r,this,this.dedupe),s={json:n.transformedValue};n.annotations&&(s.meta={...s.meta,values:n.annotations});const i=Nc(r,this.dedupe);return i&&(s.meta={...s.meta,referentialEqualities:i}),s}deserialize(t){const{json:r,meta:n}=t;let s=ds(r);return n?.values&&(s=Ec(s,n.values,this)),n?.referentialEqualities&&(s=xc(s,n.referentialEqualities)),s}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}re.defaultInstance=new re;re.serialize=re.defaultInstance.serialize.bind(re.defaultInstance);re.deserialize=re.defaultInstance.deserialize.bind(re.defaultInstance);re.stringify=re.defaultInstance.stringify.bind(re.defaultInstance);re.parse=re.defaultInstance.parse.bind(re.defaultInstance);re.registerClass=re.defaultInstance.registerClass.bind(re.defaultInstance);re.registerSymbol=re.defaultInstance.registerSymbol.bind(re.defaultInstance);re.registerCustom=re.defaultInstance.registerCustom.bind(re.defaultInstance);re.allowErrorProps=re.defaultInstance.allowErrorProps.bind(re.defaultInstance);re.serialize;re.deserialize;re.stringify;re.parse;re.registerClass;re.registerCustom;re.registerSymbol;re.allowErrorProps;function Ic(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}function Mc(e,t){return`${e}_${t}`}const Cc=typeof window<"u"?window:void 0;function Dc(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Rc{#e;#r;constructor(t={}){const{window:r=Cc,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=ja(s=>{const i=Fs(r,"focusin",s),o=Fs(r,"focusout",s);return()=>{i(),o()}}))}get current(){return this.#r?.(),this.#e?Dc(this.#e):null}}new Rc;function Oc(e){return typeof e=="function"}function qc(e,t){if(Oc(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Bc(e,t){let r=J(null);const n=W(()=>qc(t,250));function s(...i){if(a(r))a(r).timeout&&clearTimeout(a(r).timeout);else{let o,l;const c=new Promise((f,v)=>{o=f,l=v});k(r,{timeout:null,runner:null,promise:c,resolve:o,reject:l},!0)}return a(r).runner=async()=>{if(!a(r))return;const o=a(r);k(r,null);try{o.resolve(await e.apply(this,i))}catch(l){o.reject(l)}},a(r).timeout=setTimeout(a(r).runner,a(n)),a(r).promise}return s.cancel=async()=>{(!a(r)||a(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||a(r).timeout===null)||(clearTimeout(a(r).timeout),a(r).reject("Cancelled"),k(r,null))},s.runScheduledNow=async()=>{(!a(r)||!a(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||!a(r).timeout)||(clearTimeout(a(r).timeout),a(r).timeout=null,await a(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!a(r)?.timeout}}),s}function Fr(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function Lc(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function jc(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function zc(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>fs(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const s=[],i=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(s.push({q:v,u:c}),i.push(fs(v.toString(),c)))});const o=i.length>0?i.join(" et "):"✅ Complet";return{numeric:s,display:o}}function Kr(e){return e?.length?e.map(t=>fs(t.q.toString(),t.u)).join(" et "):"-"}function fs(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,s=t==="gr."?"kg":"l.";let o=(Math.round(n*100)/100).toString();return o.endsWith(",0")&&(o=o.slice(0,-2)),o.endsWith(",00")&&(o=o.slice(0,-3)),`${o} ${s}`}if(!["gr.","ml","kg","l."].includes(t)){let s=(Math.round(r*10)/10).toString();return s.endsWith(",0")&&(s=s.slice(0,-2)),`${s} ${t}`}return`${r} ${t}`}function Vc(e){return Fr(e)}function Wc(e,t,r){if(!e||Object.keys(e).length===0)return[];const n=typeof t=="string"?new Date(t):t,s=typeof r=="string"?new Date(r):r,i=Object.entries(e).filter(([o])=>{const l=new Date(o);return l>=n&&l<=s}).flatMap(([o,l])=>l.totalConsolidated);return Di(i)}function Di(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const s=t.get(n)||0;t.set(n,s+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Uc(e,t){return e[t]?.recipes||[]}function Gc(e){return e?Object.values(e).flatMap(t=>t.recipes||[]):[]}function Hc(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,s=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([i])=>{const o=new Date(i);return o>=n&&o<=s}).reduce((i,[o,l])=>i+(l.totalAssiettes||0),0)}function Qc(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Kc(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function ua(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return Di(t)}function Yc(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class b{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}b.equal=(e,t)=>new b("equal",e,t).toString();b.notEqual=(e,t)=>new b("notEqual",e,t).toString();b.lessThan=(e,t)=>new b("lessThan",e,t).toString();b.lessThanEqual=(e,t)=>new b("lessThanEqual",e,t).toString();b.greaterThan=(e,t)=>new b("greaterThan",e,t).toString();b.greaterThanEqual=(e,t)=>new b("greaterThanEqual",e,t).toString();b.isNull=e=>new b("isNull",e).toString();b.isNotNull=e=>new b("isNotNull",e).toString();b.between=(e,t,r)=>new b("between",e,[t,r]).toString();b.startsWith=(e,t)=>new b("startsWith",e,t).toString();b.endsWith=(e,t)=>new b("endsWith",e,t).toString();b.select=e=>new b("select",void 0,e).toString();b.search=(e,t)=>new b("search",e,t).toString();b.orderDesc=e=>new b("orderDesc",e).toString();b.orderAsc=e=>new b("orderAsc",e).toString();b.orderRandom=()=>new b("orderRandom").toString();b.cursorAfter=e=>new b("cursorAfter",void 0,e).toString();b.cursorBefore=e=>new b("cursorBefore",void 0,e).toString();b.limit=e=>new b("limit",void 0,e).toString();b.offset=e=>new b("offset",void 0,e).toString();b.contains=(e,t)=>new b("contains",e,t).toString();b.notContains=(e,t)=>new b("notContains",e,t).toString();b.notSearch=(e,t)=>new b("notSearch",e,t).toString();b.notBetween=(e,t,r)=>new b("notBetween",e,[t,r]).toString();b.notStartsWith=(e,t)=>new b("notStartsWith",e,t).toString();b.notEndsWith=(e,t)=>new b("notEndsWith",e,t).toString();b.createdBefore=e=>new b("createdBefore",void 0,e).toString();b.createdAfter=e=>new b("createdAfter",void 0,e).toString();b.createdBetween=(e,t)=>new b("createdBetween",void 0,[e,t]).toString();b.updatedBefore=e=>new b("updatedBefore",void 0,e).toString();b.updatedAfter=e=>new b("updatedAfter",void 0,e).toString();b.updatedBetween=(e,t)=>new b("updatedBetween",void 0,[e,t]).toString();b.or=e=>new b("or",void 0,e.map(t=>JSON.parse(t))).toString();b.and=e=>new b("and",void 0,e.map(t=>JSON.parse(t))).toString();b.distanceEqual=(e,t,r,n=!0)=>new b("distanceEqual",e,[[t,r,n]]).toString();b.distanceNotEqual=(e,t,r,n=!0)=>new b("distanceNotEqual",e,[[t,r,n]]).toString();b.distanceGreaterThan=(e,t,r,n=!0)=>new b("distanceGreaterThan",e,[[t,r,n]]).toString();b.distanceLessThan=(e,t,r,n=!0)=>new b("distanceLessThan",e,[[t,r,n]]).toString();b.intersects=(e,t)=>new b("intersects",e,[t]).toString();b.notIntersects=(e,t)=>new b("notIntersects",e,[t]).toString();b.crosses=(e,t)=>new b("crosses",e,[t]).toString();b.notCrosses=(e,t)=>new b("notCrosses",e,[t]).toString();b.overlaps=(e,t)=>new b("overlaps",e,[t]).toString();b.notOverlaps=(e,t)=>new b("notOverlaps",e,[t]).toString();b.touches=(e,t)=>new b("touches",e,[t]).toString();b.notTouches=(e,t)=>new b("notTouches",e,[t]).toString();var Ri,Oi;class dn{static custom(t){return t}static unique(t=7){const r=Yc(dn,Ri,"m",Oi).call(dn);let n="";for(let s=0;s<t;s++){const i=Math.floor(Math.random()*16).toString(16);n+=i}return r+n}}Ri=dn,Oi=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var da;(function(e){e.Totp="totp"})(da||(da={}));var fa;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(fa||(fa={}));var va;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(va||(va={}));var ha;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(ha||(ha={}));var pa;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(pa||(pa={}));var _a;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(_a||(_a={}));var ma;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(ma||(ma={}));var ga;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(ga||(ga={}));var ba;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(ba||(ba={}));function qi(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,productType:e.productType,pFrais:e.pFrais,pSurgel:e.pSurgel,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,byDate:e.byDate,...t}}async function qt(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Jc(e,t,r=100){try{const{databases:n,config:s}=await qt(),i=await n.listDocuments(s.APPWRITE_CONFIG.databaseId,s.APPWRITE_CONFIG.collections.purchases,[b.greaterThan("$updatedAt",t),b.equal("mainId",e),b.limit(r),b.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${i.documents.length} purchases modifiés chargés`),i.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function Bi(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:s,config:i}=await qt();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[b.equal("mainId",e),b.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),b.limit(n)])).documents;const o=await s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.limit(n),b.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} produits synchronisés avec leurs purchases`),o.documents}catch(s){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,s);const i=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function zn(e,t){try{const{databases:r,config:n}=await qt();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function en(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const s=qi(n,t),{databases:i,config:o}=await qt(),l=await i.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,e,s);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const s=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${s}`)}}async function Li(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await zn(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function vs(e,t){return zn(e,{who:t})}async function hs(e,t){return zn(e,{stockReel:t})}async function ji(e){try{const{databases:t,config:r}=await qt(),i=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:i.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,dn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function zi(e,t){try{const{databases:r,config:n}=await qt(),s=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),i={...t,products:t.products||s.products},o=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,i);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,i),o}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Vi(e){try{const{databases:t,config:r}=await qt();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Wi(e){if(!e?.length)return[];try{const{databases:t,config:r}=await qt(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[b.equal("$id",e),b.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Ui(e,t={}){let r=null;const n=i=>{const{events:o,payload:l}=i;if(!l)return;const c=o.some(h=>h.includes("products.")),f=o.some(h=>h.includes("purchases.")),v=o.some(h=>h.includes(".create")),m=o.some(h=>h.includes(".update")),g=o.some(h=>h.includes(".delete"));if(c){const h=l;v&&t.onProductCreate?t.onProductCreate(h):m&&t.onProductUpdate?t.onProductUpdate(h):g&&t.onProductDelete&&t.onProductDelete(h.$id)}else if(f){const h=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(h):m&&t.onPurchaseUpdate?t.onPurchaseUpdate(h):g&&t.onPurchaseDelete&&t.onPurchaseDelete(h.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),t.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),t.onError?.(i)}})(),()=>{r&&(r(),r=null)}}async function Gi(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await qt(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Hi(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:s}=await qt(),i=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await s.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(s){throw console.error("[Appwrite Interactions] Erreur création Main document:",s),s}}const rs=Object.freeze(Object.defineProperty({__proto__:null,createMainDocument:Hi,createPurchase:ji,deletePurchase:Vi,enrichedProductToAppwriteProduct:qi,loadMainEventData:Gi,loadPurchasesListByIds:Wi,loadUpdatedPurchases:Jc,subscribeToRealtime:Ui,syncProductsWithPurchases:Bi,updateProduct:zn,updateProductStock:hs,updateProductStore:Li,updateProductWho:vs,updatePurchase:zi,upsertProduct:en},Symbol.toStringTag,{value:"Module"}));async function Zc(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Xc(e,t,r){return{$id:`${t}_${e.ingredientHugoUuid}`,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,byDate:JSON.stringify(e.byDate),nbRecipes:e.nbRecipes||0,totalAssiettes:e.totalAssiettes||0,status:"",purchases:[],store:"",who:null,stockReel:null,isMerged:!1,mergedInto:null,mergedFrom:null,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,mainId:t}}const ya=1e3,Fc=500;class eu{#e=new tc;#r=J(null);#d=J(!1);#f=J(!1);#c=J(null);#i=J(!1);#o=J(!1);#n=J(ht([]));#l=J(null);#s=J(null);#a=J(null);#u=null;#v=null;#h=null;#p=null;#P=J(!1);#t=J(ht({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return a(this.#t)}get currentMainId(){return a(this.#r)}get isInitialized(){return a(this.#d)}get loading(){return a(this.#f)}get error(){return a(this.#c)}get allDates(){return a(this.#n)}get syncing(){return a(this.#i)}get startDate(){return a(this.#s)}get endDate(){return a(this.#a)}setStartDate(t){k(this.#s,t,!0)}setEndDate(t){k(this.#a,t,!0)}setDateRange(t,r){k(this.#s,t,!0),k(this.#a,r,!0)}initializeDateRange(){if((!a(this.#s)||!a(this.#a))&&a(this.#n).length>0){const t=[...a(this.#n)].sort();k(this.#s,t[0],!0),k(this.#a,t[t.length-1],!0)}}get firstDate(){return a(this.#n).length===0?null:[...a(this.#n)].sort()[0]}get lastDate(){return a(this.#n).length===0?null:[...a(this.#n)].sort().pop()}get realtimeConnected(){return a(this.#o)}get hugoContentChanged(){return a(this.#P)}#E=W(()=>{console.time("[ProductsStore] enrichedProducts conversion time");const t=Array.from(this.#e.values());return console.timeEnd("[ProductsStore] enrichedProducts conversion time"),console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return a(this.#E)}set enrichedProducts(t){k(this.#E,t)}#_=new Map;#m={start:"",end:""};#y=W(()=>{const t={start:a(this.#s)||"",end:a(this.#a)||""};if(!(t.start!==this.#m.start||t.end!==this.#m.end)&&this.#_.size>0)return this.#_;this.#m=t,this.#_.clear();const n=new Map,s=this.enrichedProducts;for(const i of s){if(i.totalNeededIsManualOverride&&i.totalNeededConsolidated){const l=Fr(i.totalNeededConsolidated);l&&l.length>0&&(n.set(i.$id,l),this.#_.set(i.$id,l));continue}if(!i.byDateParsed||!a(this.#s)||!a(this.#a))continue;const o=Wc(i.byDateParsed,a(this.#s),a(this.#a));o&&o.length>0&&(n.set(i.$id,o),this.#_.set(i.$id,o))}return n});get totalNeededByDateRange(){return a(this.#y)}set totalNeededByDateRange(t){k(this.#y,t)}#k=W(()=>{const t=new Map;return this.totalNeededByDateRange.forEach((r,n)=>{const s=Kr(r);t.set(n,s)}),t});get formattedTotalNeededByDateRange(){return a(this.#k)}set formattedTotalNeededByDateRange(t){k(this.#k,t)}#N=W(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return a(this.#N)}set stats(t){k(this.#N,t)}#T=W(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return a(this.#T)}set uniqueStores(t){k(this.#T,t)}#A=W(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return a(this.#A)}set uniqueWho(t){k(this.#A,t)}#I=W(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return a(this.#I)}set uniqueProductTypes(t){k(this.#I,t)}#M=W(()=>this.enrichedProducts.filter(t=>this.#U(t)));get filteredProducts(){return a(this.#M)}set filteredProducts(t){k(this.#M,t)}#C=W(()=>{const t=this.filteredProducts;return a(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>a(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return a(this.#C)}set filteredGroupedProducts(t){k(this.#C,t)}#D=W(()=>this.filteredGroupedProducts);get groupedFormattedProducts(){return a(this.#D)}set groupedFormattedProducts(t){k(this.#D,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(a(this.#d)&&a(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),k(this.#r,t,!0),this.#u=Mc("products-enriched",t),k(this.#c,null);try{if(await this.#q(),this.#e.size===0){const n=await Zc(t);console.log(`[ProductsStore] Données Hugo chargées: ${n.ingredients.length} ingredients`),n.ingredients.forEach(i=>{const o=Xc(i,t,n.hugoContentHash),l=this.#x(o);this.#e.set(l.$id,l)}),k(this.#n,n.allDates,!0),this.initializeDateRange(),await Gi(t)||await Hi(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),this.#w()}this.#B(),k(this.#d,!0);const r=this.#W();this.#h=Ui(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw k(this.#c,n,!0),console.error("[ProductsStore]",n,r),r}}async#q(){if(this.#u)try{const t=localStorage.getItem(this.#u);if(!t){console.log("[ProductsStore] Aucun cache trouvé");return}const{products:r,lastSync:n,allDates:s}=re.parse(t);r.forEach(([i,o])=>this.#e.set(i,o)),k(this.#l,n,!0),k(this.#n,s||[],!0),console.log(`[ProductsStore] ${r.length} produits chargés du cache, lastSync: ${n}, allDates: ${s?.length||0} dates`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache, ignoré:",t)}}async#B(){if(a(this.#r)){k(this.#i,!0);try{const t=await Bi(a(this.#r),{lastSync:a(this.#l),limit:ya});if(a(this.#l)){const{loadUpdatedPurchases:r}=await es(async()=>{const{loadUpdatedPurchases:s}=await Promise.resolve().then(()=>rs);return{loadUpdatedPurchases:s}},void 0);(await r(a(this.#r),a(this.#l),ya)).forEach(s=>{if(s.products?.length){const i=s.products.map(o=>typeof o=="string"?o:o.$id);this.#$(i,s)}})}t.forEach(r=>{const n=this.#x(r);n.isSynced=!0,this.#e.set(r.$id,n)}),this.#b(),this.#g()}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{k(this.#i,!1)}}}#w(){if(this.#u)try{const t={lastSync:a(this.#l),products:Array.from(this.#e.entries()),allDates:a(this.#n)};localStorage.setItem(this.#u,re.stringify(t))}catch(t){console.error("[ProductsStore] Erreur persist cache:",t)}}#g(){this.#p&&clearTimeout(this.#p),this.#p=setTimeout(()=>{this.#w(),this.#p=null},Fc)}#b(){k(this.#l,new Date().toISOString(),!0)}#x(t){const r=jc(Lc(t.purchases??[])),n=Vc(t.byDate);let s,i,o,l;n?(s=ua(n),i=Kc(n),o=Gc(n),t.totalNeededConsolidated&&t.totalNeededIsManualOverride&&(l=Fr(t.totalNeededConsolidated)||void 0)):(console.error(`[ProductsStore] Product ${t.productName} n'a pas de structure byDate - migration requise`),s=[],i=[],o=[]);const{numeric:c,display:f}=zc(s,r),v=Fr(t.stockReel)??[],m=Kr(r),g=v.length>0?`${v[v.length-1].quantity} ${v[v.length-1].unit}`:m;return{...t,storeInfo:t.store?Fr(t.store):null,totalNeededArray:s,totalPurchasesArray:r,recipesArray:o,stockArray:v,stockOrTotalPurchases:g,missingQuantityArray:c,neededConsolidatedByDateArray:i,displayTotalNeeded:Kr(s),displayTotalPurchases:m,displayMissingQuantity:f,byDateParsed:n||void 0,totalNeededRawArray:l,totalNeededIsManualOverride:t.totalNeededIsManualOverride??!1,totalNeededOverrideReason:t.totalNeededOverrideReason}}#R(t){t.length&&(t.forEach(r=>this.#S(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#S(t){const r=this.#x(t);this.#e.set(t.$id,r)}#L(t){this.#e.delete(t)}async#j(t){if(!t.products?.length){console.warn("[ProductsStore] Purchase créé sans products:",t.$id);return}const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#V(r,t)}async#z(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);this.#$(r,t);return}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Wi([t.$id]);if(r?.products?.length){const n=r.products.map(s=>typeof s=="string"?s:s.$id).filter(Boolean);this.#$(n,r)}}catch(r){console.error("[ProductsStore] Erreur rechargement purchase:",r)}}#O(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:typeof t.mainId=="string"?t.mainId:t.mainId.$id}}#V(t,r){const n=this.#O(r),s=[];t.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.purchases||[];l.some(c=>c.$id===n.$id)||s.push({...o,purchases:[...l,n]})}}),this.#R(s)}#$(t,r){const n=this.#O(r),s=[];t.forEach(i=>{const o=this.#e.get(i);if(o){const l=o.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n,s.push({...o,purchases:f})}else s.push({...o,purchases:[...l,r]})}}),this.#R(s)}#W(){return{onProductCreate:t=>{this.#S(t),this.#b(),this.#g()},onProductUpdate:t=>{this.#S(t),this.#b(),this.#g()},onProductDelete:t=>{this.#L(t),this.#b(),this.#g()},onPurchaseCreate:t=>{this.#j(t),this.#b(),this.#g()},onPurchaseUpdate:t=>{this.#z(t),this.#b(),this.#g()},onPurchaseDelete:t=>{Array.from(this.#e.values()).filter(n=>n.purchases?.some(s=>s.$id===t)).forEach(n=>{this.#S(n)}),this.#b(),this.#g()},onConnect:()=>{k(this.#o,!0)},onDisconnect:()=>{k(this.#o,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#U(t){if(a(this.#t).searchQuery.trim()){const r=a(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(a(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!a(this.#t).selectedStores.includes(t.storeInfo.storeName))||a(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>a(this.#t).selectedWho.includes(r)))||a(this.#t).selectedProductTypes.length>0&&(!t.productType||!a(this.#t).selectedProductTypes.includes(t.productType))||a(this.#t).selectedTemperatures.length>0&&!(a(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||a(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Bc(t=>{a(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=a(this.#t).selectedProductTypes.indexOf(t);r>-1?a(this.#t).selectedProductTypes.splice(r,1):a(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=a(this.#t).selectedTemperatures.indexOf(t);r>-1?a(this.#t).selectedTemperatures.splice(r,1):a(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){a(this.#t).selectedProductTypes=[],a(this.#t).selectedTemperatures=[]}setGroupBy(t){a(this.#t).groupBy=t}toggleStore(t){const r=a(this.#t).selectedStores.indexOf(t);r>-1?a(this.#t).selectedStores.splice(r,1):a(this.#t).selectedStores.push(t)}toggleWho(t){const r=a(this.#t).selectedWho.indexOf(t);r>-1?a(this.#t).selectedWho.splice(r,1):a(this.#t).selectedWho.push(t)}clearStoreFilters(){a(this.#t).selectedStores=[]}clearWhoFilters(){a(this.#t).selectedWho=[]}handleSort(t){a(this.#t).sortColumn===t?a(this.#t).sortDirection=a(this.#t).sortDirection==="asc"?"desc":"asc":(a(this.#t).sortColumn=t,a(this.#t).sortDirection="asc")}clearFilters(){k(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return a(this.#t).sortColumn?[...t].sort((r,n)=>{let s=r[a(this.#t).sortColumn],i=n[a(this.#t).sortColumn];return a(this.#t).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,i=parseFloat(i)||0):a(this.#t).sortColumn==="purchases"&&(s=r.purchases?.length||0,i=n.purchases?.length||0),s<i?a(this.#t).sortDirection==="asc"?-1:1:s>i?a(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}getNeededForProduct(t){return this.totalNeededByDateRange.get(t)??[]}async applyManualOverride(t,r,n=null){const s=this.#e.get(t);if(!s)throw new Error(`Product ${t} not found`);const{updateProduct:i}=await es(async()=>{const{updateProduct:o}=await Promise.resolve().then(()=>rs);return{updateProduct:o}},void 0);await i(t,{totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n}),this.#e.set(t,{...s,totalNeededConsolidated:JSON.stringify(r),totalNeededIsManualOverride:!0,totalNeededOverrideReason:n,totalNeededArray:r,displayTotalNeeded:Kr(r)}),this.#w()}async removeManualOverride(t){const r=this.#e.get(t);if(!r)throw new Error(`Product ${t} not found`);const{updateProduct:n}=await es(async()=>{const{updateProduct:i}=await Promise.resolve().then(()=>rs);return{updateProduct:i}},void 0);await n(t,{totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null});const s=r.byDateParsed?ua(r.byDateParsed):[];this.#e.set(t,{...r,totalNeededConsolidated:null,totalNeededIsManualOverride:!1,totalNeededOverrideReason:null,totalNeededArray:s,displayTotalNeeded:Kr(s)}),this.#w()}hasManualOverride(t){return this.#e.get(t)?.totalNeededIsManualOverride??!1}getRecipesForDate(t,r){const n=this.#e.get(t);return n?.byDateParsed?Uc(n.byDateParsed,r):[]}getTotalAssiettesForDate(t,r){const n=this.#e.get(t);return n?.byDateParsed&&n.byDateParsed[r]?.totalAssiettes||0}hasConversions(t){const r=this.#e.get(t);return r?.byDateParsed?Qc(r.byDateParsed):!1}getProductDates(t){const r=this.#e.get(t);return r?.byDateParsed?Object.keys(r.byDateParsed).sort():[]}getTotalAssiettesInRange(t){const r=this.#e.get(t);return!r?.byDateParsed||!a(this.#s)||!a(this.#a)?0:Hc(r.byDateParsed,a(this.#s),a(this.#a))}getRecipesInRange(t){const r=this.#e.get(t);return!r?.byDateParsed||!a(this.#s)||!a(this.#a)?[]:Object.keys(r.byDateParsed).filter(s=>{const i=new Date(s),o=a(this.#s)?new Date(a(this.#s)):null,l=a(this.#a)?new Date(a(this.#a)):null;return o&&l&&i>=o&&i<=l}).flatMap(s=>r.byDateParsed[s]?.recipes||[])}get enrichedProductsCount(){return this.#e.size}async forceReload(t){this.clearCache(),await this.initialize(t)}clearCache(){this.#e.clear(),k(this.#n,[],!0),k(this.#l,null),this.#u&&localStorage.removeItem(this.#u),this.#v&&localStorage.removeItem(this.#v),console.log("[ProductsStore] Cache vidé")}destroy(){this.#h?.(),this.#h=null,this.#p&&(clearTimeout(this.#p),this.#p=null),console.log("[ProductsStore] Ressources nettoyées")}}const I=new eu;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const tu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var ru=Il("<svg><!><!></svg>");function le(e,t){G(t,!0);const r=Ft(t,"color",3,"currentColor"),n=Ft(t,"size",3,24),s=Ft(t,"strokeWidth",3,2),i=Ft(t,"absoluteStrokeWidth",3,!1),o=Ft(t,"iconNode",19,()=>[]),l=ie(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=ru();na(c,m=>({...tu,...l,width:n(),height:n(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>i()?Number(s())*24/Number(n()):s()]);var f=u(c);je(f,17,o,Ms,(m,g)=>{var h=W(()=>Na(a(g),2));let _=()=>a(h)[0],w=()=>a(h)[1];var S=Q(),$=L(S);Bl($,_,!0,(M,T)=>{na(M,()=>({...w()}))}),p(m,S)});var v=d(f);ae(v,()=>t.children??F),p(e,c),H()}function ps(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];le(e,oe({name:"archive"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function nu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];le(e,oe({name:"bean"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function su(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];le(e,oe({name:"beef"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function au(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];le(e,oe({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function iu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];le(e,oe({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function ou(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];le(e,oe({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function lu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];le(e,oe({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function cu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];le(e,oe({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function uu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];le(e,oe({name:"circle-x"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function du(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];le(e,oe({name:"clock"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function Ds(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];le(e,oe({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function fu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];le(e,oe({name:"egg"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function _s(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];le(e,oe({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function wa(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];le(e,oe({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function vu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];le(e,oe({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function hu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];le(e,oe({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function pu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];le(e,oe({name:"log-in"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function _u(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];le(e,oe({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function mu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];le(e,oe({name:"message-circle"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function pn(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];le(e,oe({name:"package"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function gu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];le(e,oe({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function bu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];le(e,oe({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function yu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];le(e,oe({name:"save"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function wu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];le(e,oe({name:"search"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function ms(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];le(e,oe({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function fn(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];le(e,oe({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function gs(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];le(e,oe({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function Qi(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];le(e,oe({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function vn(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];le(e,oe({name:"store"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function Su(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];le(e,oe({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function Rs(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];le(e,oe({name:"user"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function Ki(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];le(e,oe({name:"users"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function Pu(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];le(e,oe({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function pt(e,t){G(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ie(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];le(e,oe({name:"x"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Q(),l=L(o);ae(l,()=>t.children??F),p(s,o)},$$slots:{default:!0}})),H()}function En(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:nu};case"animaux":return{displayName:"Viandes et Poissons",icon:su};case"legumes":return{displayName:"Fruits et Légumes",icon:iu};case"sucres":return{displayName:"Sucrées",icon:au};case"lof":return{displayName:"L.O.F",icon:fu};case"autres":return{displayName:"Autres",icon:ou};case"epices":return{displayName:"Assaisonnements",icon:vu};case"frais":return{displayName:"Produits Frais",icon:bu};default:return{displayName:e,icon:pn}}}function Sa(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Os(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function qs(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function Eu(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function xu(e,t){return t.sortColumn?[...e].sort((r,n)=>{let s=r[t.sortColumn],i=n[t.sortColumn];return s<i?t.sortDirection==="asc"?-1:1:s>i?t.sortDirection==="asc"?1:-1:0}):e}function bs(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function Pa(e){return e?qs(e):"-"}function $u(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const s=n.status||"direct",i=n.unit||"unit",o=`${s}_${i}`;if(!r[o]){const l=bs(s);r[o]={status:s,unit:i,quantity:0,badgeClass:l.class,badgeText:l.text,icon:ku(s)}}return r[o].quantity+=n.quantity||0,r},{});return Object.values(t)}function ku(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ShoppingCart";case"pending":return"Clock";case"delivered":return"CircleCheck";case"cancelled":return"CircleX";default:return"Package"}}let Ea=()=>localStorage.getItem("appwrite-user-name")||"";function Nu(e){let t=J(!1),r=J(null);const n=W(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),I.getEnrichedProductById(e))),s=W(()=>a(n)?.recipesArray??[]),i=W(()=>a(n)?.who??[]),o=W(()=>a(n)?.stockArray??[]),l=W(()=>a(n)?.purchases??[]),c=ht({purchase:{quantity:null,unit:"",store:"",who:Ea()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:{name:""}});let f=J(!1);Ns(()=>{!a(n)||a(f)||(console.log(`[ProductModalState] Initializing forms for ${e}`),c.purchase.quantity=a(n).missingQuantityArray[0]?.q??null,c.purchase.unit=a(n).totalNeededArray[0]?.u??"",c.purchase.store=a(n).storeInfo?.storeName??"",c.purchase.who=Ea()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=a(n).totalNeededArray[0]?.u??"",c.store.name=a(n).storeInfo?.storeName??null,c.store.comment=a(n).storeInfo?.storeComment??null,k(f,!0))});let v=J(null);const m=W(()=>a(v)?a(l).find(y=>y.$id===a(v))??null:null);async function g(y,C){k(t,!0),k(r,null);try{const B=await y();return C&&h("success",C),B}catch(B){const be=B instanceof Error?B.message:"Une erreur est survenue";return k(r,be,!0),h("error",be),console.error("[ProductModalState]",B),null}finally{k(t,!1)}}function h(y,C){const B=new CustomEvent("toast",{detail:{type:y,message:C}});window.dispatchEvent(B)}async function _(){a(n)&&await g(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!I.currentMainId)throw new Error("mainId non disponible");const{quantity:y,unit:C}=Sa(c.purchase.quantity,c.purchase.unit);a(n).isSynced||(console.log(`[ProductModalState] Produit ${a(n).$id} local, création pour purchase...`),await en(a(n).$id,{},B=>I.getEnrichedProductById(B))),await ji({products:[a(n).$id],mainId:I.currentMainId,unit:C,quantity:y,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:c.purchase.status||"delivered",orderDate:c.purchase.orderDate||null,deliveryDate:c.purchase.deliveryDate||null}),c.purchase={quantity:a(n).missingQuantityArray[0]?.q??null,unit:a(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function w(y){k(v,y.$id,!0)}function S(){k(v,null)}async function $(y){y.$id&&await g(async()=>{const{quantity:C,unit:B}=Sa(y.quantity,y.unit);await zi(y.$id,{unit:B,quantity:C,store:y.store||null,who:y.who||null,notes:y.notes||"",price:y.price||null,status:y.status||null,orderDate:y.orderDate||null,deliveryDate:y.deliveryDate||null}),k(v,null)},"Achat modifié avec succès")}async function M(y){const C=a(l).find(B=>B.$id===y);C&&confirm(`Supprimer cet achat (${C.quantity} ${C.unit}) ?`)&&await g(async()=>{await Vi(y)},"Achat supprimé avec succès")}async function T(){a(n)&&await g(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const y={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime},C=[...a(o),y];a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update stock normal...`),await hs(a(n).$id,JSON.stringify(C))):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création stock avec upsert...`),await en(a(n).$id,{stockReel:JSON.stringify(C)},B=>I.getEnrichedProductById(B))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Relevé de stock ajouté")}async function P(y){a(n)&&confirm("Supprimer ce relevé de stock ?")&&await g(async()=>{const C=a(o).filter((B,be)=>be!==y);await hs(a(n).$id,JSON.stringify(C))},"Relevé de stock supprimé")}async function x(y){!a(n)||!y.trim()||await g(async()=>{if(a(i).includes(y))throw new Error("Ce volontaire est déjà ajouté");const C=[...a(i),y.trim()];a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update normal...`),await vs(a(n).$id,C)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création avec upsert...`),await en(a(n).$id,{who:C},B=>I.getEnrichedProductById(B)))},"Volontaire ajouté")}async function N(y){a(n)&&confirm(`Retirer ${y} ?`)&&await g(async()=>{await vs(a(n).$id,a(i).filter(C=>C!==y))},"Volontaire retiré")}async function R(y){a(n)&&await g(async()=>{a(n).isSynced?(console.log(`[ProductModalState] Produit ${a(n).$id} déjà sync, update store normal...`),await Li(a(n).$id,y)):(console.log(`[ProductModalState] Produit ${a(n).$id} local, création store avec upsert...`),await en(a(n).$id,{store:JSON.stringify(y)},C=>I.getEnrichedProductById(C)))},"Magasin mis à jour")}return{get loading(){return a(t)},get error(){return a(r)},get product(){return a(n)},get recipes(){return a(s)},get whoList(){return a(i)},get stockEntries(){return a(o)},get purchasesList(){return a(l)},get editingPurchaseId(){return a(v)},get editingPurchaseData(){return a(m)},forms:c,addPurchase:_,startEditPurchase:w,cancelEditPurchase:S,updateEditedPurchase:$,removePurchase:M,addStock:T,removeStock:P,addVolunteer:x,removeVolunteer:N,updateStore:R,formatQuantity:Os,formatDate:qs,formatDisplayQuantity:Eu}}function Tu(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function Au(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Iu(e,t){t().cancelEditPurchase()}var Mu=E('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Cu=E('<span class="loading loading-spinner loading-sm"></span>'),Du=E('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Ru=E('<span class="loading loading-spinner loading-sm"></span>'),Ou=E('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),qu=(e,t,r)=>t(a(r)),Bu=(e,t,r)=>t(a(r).$id),Lu=E('<span class="loading loading-spinner loading-sm"></span>'),ju=E('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),zu=E('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Vu=E(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Notes" maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option title="La commande à été passée">Commandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Wu(e,t){G(t,!0);let r=Ft(t,"modalState",7);function n(){return r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function s(U){return U.quantity!==null&&U.quantity!==0&&U.unit?.trim()!==""}function i(U){r().removePurchase(U)}function o(U){r().startEditPurchase(U)}var l=Vu(),c=u(l),f=u(c);fn(f,{class:"h-5 w-5"});var v=d(c,2),m=u(v),g=d(u(m),2),h=u(g),_=u(h);pn(_,{class:"h-4 w-4 opacity-50"});var w=d(_,2),S=d(h,2),$=u(S);$.value=$.__value="";var M=d($);M.value=M.__value="kg";var T=d(M);T.value=T.__value="gr.";var P=d(T);P.value=P.__value="l.";var x=d(P);x.value=x.__value="ml";var N=d(x);N.value=N.__value="unité";var R=d(N);R.value=R.__value="bottes";var y=d(S,2),C=u(y);vn(C,{class:"h-4 w-4 opacity-50"});var B=d(C,2),be=d(y,2),he=u(be);Rs(he,{class:"h-4 w-4 opacity-50"});var He=d(he,2),Ve=d(be,2),xe=d(u(Ve),2),Z=d(g,2),$e=u(Z),A=u($e);mu(A,{class:"h-4 w-4 opacity-50"});var ne=d(A,2),ve=d(Z,2),Se=u(ve),ke=u(Se),nt=u(ke),ut=u(nt);ut.value=ut.__value="delivered";var de=d(ut);de.value=de.__value="requested";var _e=d(de);_e.value=_e.__value="ordered";var We=d(ke,2),Be=d(Se,2);{var Ce=U=>{var O=Mu(),ce=d(u(O),2);qe(ce,()=>r().forms.purchase.deliveryDate,Ae=>r().forms.purchase.deliveryDate=Ae),p(U,O)};D(Be,U=>{r().forms.purchase.status==="ordered"&&U(Ce)})}var Te=d(ve,2),ye=u(Te);ye.__click=[Tu,n,r];var Qe=u(ye);{var dt=U=>{var O=Cu();p(U,O)},Bt=U=>{var O=lt("Ajouter l'achat");p(U,O)};D(Qe,U=>{r().loading?U(dt):U(Bt,!1)})}var Ze=d(v,2);{var Et=U=>{var O=Du(),ce=u(O);fn(ce,{class:"mx-auto mb-2 h-12 w-12"}),p(U,O)},Br=U=>{var O=zu(),ce=u(O),Ae=d(u(ce));je(Ae,21,()=>r().purchasesList,Lt=>Lt.$id,(Lt,Y,mt)=>{var ir=Q(),yr=L(ir);{var Lr=De=>{var xt=Ou(),jt=u(xt),or=u(jt),$t=u(or),st=d($t,2),gt=u(st);gt.value=gt.__value="kg";var zt=d(gt);zt.value=zt.__value="gr.";var kt=d(zt);kt.value=kt.__value="l.";var Nt=d(kt);Nt.value=Nt.__value="ml";var Xe=d(Nt);Xe.value=Xe.__value="unité";var Tt=d(Xe);Tt.value=Tt.__value="bottes";var Zt=d(jt),Vt=u(Zt),At=d(Zt),wr=u(At),j=d(At),ue=u(j),Fe=u(ue);Fe.value=Fe.__value="requested";var Ue=d(Fe);Ue.value=Ue.__value="ordered";var Ie=d(Ue);Ie.value=Ie.__value="delivered";var Re=d(Ie);Re.value=Re.__value="cancelled";var at=d(j),pe=u(at),Pe=d(at),me=u(Pe),K=d(Pe),fe=u(K),we=d(K),it=u(we),et=d(we),bt=u(et),yt=u(bt);yt.__click=[Au,r,s];var Ke=u(yt);{var wt=ee=>{var Wt=Ru();p(ee,Wt)},zr=ee=>{yu(ee,{class:"h-3 w-3"})};D(Ke,ee=>{r().loading?ee(wt):ee(zr,!1)})}var Sr=d(yt,2);Sr.__click=[Iu,r];var Vr=u(Sr);pt(Vr,{class:"h-3 w-3"}),V(ee=>yt.disabled=ee,[()=>r().loading||!s(a(Y))]),qe($t,()=>a(Y).quantity,ee=>a(Y).quantity=ee),Xr(st,()=>a(Y).unit,ee=>a(Y).unit=ee),qe(Vt,()=>a(Y).store,ee=>a(Y).store=ee),qe(wr,()=>a(Y).who,ee=>a(Y).who=ee),Xr(ue,()=>a(Y).status,ee=>a(Y).status=ee),qe(pe,()=>a(Y).orderDate,ee=>a(Y).orderDate=ee),qe(me,()=>a(Y).deliveryDate,ee=>a(Y).deliveryDate=ee),qe(fe,()=>a(Y).price,ee=>a(Y).price=ee),qe(it,()=>a(Y).notes,ee=>a(Y).notes=ee),p(De,xt)},jr=De=>{var xt=ju(),jt=u(xt),or=u(jt),$t=d(jt),st=u($t),gt=d($t),zt=u(gt),kt=d(gt),Nt=u(kt),Xe=u(Nt),Tt=d(kt),Zt=u(Tt),Vt=d(Tt),At=u(Vt),wr=d(Vt),j=u(wr),ue=d(wr),Fe=u(ue),Ue=d(ue),Ie=u(Ue),Re=u(Ie);Re.__click=[qu,o,Y];var at=u(Re);Qi(at,{class:"h-4 w-4"});var pe=d(Re,2);pe.__click=[Bu,i,Y];var Pe=u(pe);{var me=fe=>{var we=Lu();p(fe,we)},K=fe=>{pt(fe,{class:"h-4 w-4"})};D(Pe,fe=>{r().loading?fe(me):fe(K,!1)})}V((fe,we,it,et,bt)=>{q(or,fe),q(st,a(Y).store||"-"),q(zt,a(Y).who||"-"),Ee(Nt,1,`badge badge-sm ${we??""}`),q(Xe,it),q(Zt,et),q(At,bt),q(j,a(Y).price?`${a(Y).price}€`:"-"),q(Fe,a(Y).notes||"-"),pe.disabled=r().loading},[()=>Os(a(Y).quantity,a(Y).unit),()=>bs(a(Y).status).class,()=>bs(a(Y).status).text,()=>Pa(a(Y).orderDate),()=>Pa(a(Y).deliveryDate)]),p(De,xt)};D(yr,De=>{r().editingPurchaseId===a(Y).$id?De(Lr):De(jr,!1)})}p(Lt,ir)}),p(U,O)};D(Ze,U=>{r().purchasesList.length===0?U(Et):U(Br,!1)})}V(U=>{Ee(We,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),ye.disabled=U},[()=>r().loading||!n()]),qe(w,()=>r().forms.purchase.quantity,U=>r().forms.purchase.quantity=U),Xr(S,()=>r().forms.purchase.unit,U=>r().forms.purchase.unit=U),qe(B,()=>r().forms.purchase.store,U=>r().forms.purchase.store=U),qe(He,()=>r().forms.purchase.who,U=>r().forms.purchase.who=U),qe(xe,()=>r().forms.purchase.price,U=>r().forms.purchase.price=U),qe(ne,()=>r().forms.purchase.notes,U=>r().forms.purchase.notes=U),Xr(nt,()=>r().forms.purchase.status,U=>r().forms.purchase.status=U),p(e,l),H()}Ot(["click"]);async function Uu(e,t){await t()?.addStock()}var Gu=E('<span class="loading loading-spinner loading-sm"></span>'),Hu=E('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Qu=E('<span class="loading loading-spinner loading-xs"></span>'),Ku=E('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),Yu=E('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Ju=E(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Zu(e,t){G(t,!0);let r=Ft(t,"modalState",7),n=W(()=>r()&&r().forms.stock.quantity&&r().forms.stock.quantity>0&&r().forms.stock.unit);async function s(Z){await r()?.removeStock(Z)}var i=Ju(),o=u(i),l=u(o);ps(l,{class:"h-5 w-5"});var c=d(o,2),f=u(c),v=d(u(f),2),m=u(v),g=u(m);pn(g,{class:"h-4 w-4 opacity-50"});var h=d(g,2),_=d(m,2),w=u(_);w.value=w.__value="";var S=d(w);S.value=S.__value="kg";var $=d(S);$.value=$.__value="gr.";var M=d($);M.value=M.__value="l.";var T=d(M);T.value=T.__value="ml";var P=d(T);P.value=P.__value="unité";var x=d(P);x.value=x.__value="bottes";var N=d(v,2),R=u(N),y=d(N,2),C=u(y);C.__click=[Uu,r];var B=u(C);{var be=Z=>{var $e=Gu();p(Z,$e)},he=Z=>{var $e=lt("Ajouter au stock");p(Z,$e)};D(B,Z=>{r().loading?Z(be):Z(he,!1)})}var He=d(c,2);{var Ve=Z=>{var $e=Hu(),A=u($e);ps(A,{class:"mx-auto mb-2 h-12 w-12"}),p(Z,$e)},xe=Z=>{var $e=Yu(),A=u($e),ne=d(u(A));je(ne,23,()=>r().stockEntries,ve=>ve.dateTime,(ve,Se,ke)=>{var nt=Ku(),ut=u(nt),de=u(ut),_e=d(ut),We=u(_e),Be=d(_e),Ce=u(Be),Te=d(Be),ye=u(Te);ye.__click=()=>s(a(ke));var Qe=u(ye);{var dt=Ze=>{var Et=Qu();p(Ze,Et)},Bt=Ze=>{var Et=lt("Supprimer");p(Ze,Et)};D(Qe,Ze=>{r().loading?Ze(dt):Ze(Bt,!1)})}V(Ze=>{q(de,`${a(Se).quantity??""}
                ${a(Se).unit??""}`),q(We,Ze),q(Ce,a(Se).notes||"-"),ye.disabled=r().loading},[()=>qs(a(Se).dateTime)]),p(ve,nt)}),p(Z,$e)};D(He,Z=>{r().stockEntries.length===0?Z(Ve):Z(xe,!1)})}V(()=>{Cs(R,`          ${r().forms.stock.notes??""}
        `),C.disabled=r().loading||!a(n)}),qe(h,()=>r().forms.stock.quantity,Z=>r().forms.stock.quantity=Z),Xr(_,()=>r().forms.stock.unit,Z=>r().forms.stock.unit=Z),qe(R,()=>r().forms.stock.notes,Z=>r().forms.stock.notes=Z),p(e,i),H()}Ot(["click"]);var Xu=(e,t)=>{e.key==="Enter"&&t()},Fu=E("<option> </option>"),ed=(e,t,r)=>t(r),td=E('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs hover:text-error p-0"><!></button></div>'),rd=E('<span class="loading loading-spinner loading-sm"></span>'),nd=E('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <label class="input"><!> <input type="text" placeholder="Nom du volontaire" list="volunteers"/> <datalist id="volunteers"></datalist></label> <div class="grid-col mt-6 grid gap-2"><div class="text-base-content/70">Volontaires actuels:</div> <div class="flex flex-wrap gap-2"></div></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div></div>');function sd(e,t){G(t,!0);let r=J("");const n=W(()=>a(r).trim().length>0&&!t.modalState.whoList.includes(a(r).trim()));async function s(){!a(n)||!t.modalState||(await t.modalState.addVolunteer(a(r).trim()),k(r,""))}async function i(P){await t.modalState?.removeVolunteer(P)}var o=nd(),l=u(o),c=u(l),f=d(u(c),2),v=u(f);Rs(v,{class:"h-4 w-4 opacity-50"});var m=d(v,2);m.__keydown=[Xu,s];var g=d(m,2);je(g,21,()=>I.uniqueWho,Ms,(P,x)=>{var N=Fu(),R=u(N),y={};V(()=>{q(R,a(x)),y!==(y=a(x))&&(N.value=(N.__value=a(x))??"")}),p(P,N)});var h=d(f,2),_=d(u(h),2);je(_,20,()=>t.modalState.whoList,P=>P,(P,x)=>{var N=td(),R=u(N),y=d(R);y.__click=[ed,i,x];var C=u(y);pt(C,{class:"h-3 w-3"}),V(()=>{q(R,`${x??""} `),y.disabled=t.modalState.loading}),p(P,N)});var w=d(h,2),S=u(w);S.__click=s;var $=u(S);{var M=P=>{var x=rd();p(P,x)},T=P=>{var x=lt("Ajouter");p(P,x)};D($,P=>{t.modalState.loading?P(M):P(T,!1)})}V(()=>S.disabled=t.modalState.loading||!a(n)),qe(m,()=>a(r),P=>k(r,P)),p(e,o),H()}Ot(["keydown","click"]);var ad=(e,t)=>{e.key==="Enter"&&t()},id=E("<option> </option>"),od=E('<span class="loading loading-spinner loading-sm"></span>'),ld=(e,t,r)=>{k(t,""),k(r,"")},cd=E(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/> <datalist id="stores"></datalist></label> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250"></textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function ud(e,t){G(t,!0);const r=W(()=>t.modalState.forms.store),n=W(()=>a(r).name||""),s=W(()=>a(r).comment||"");let i=J(ht(a(n))),o=J(ht(a(s)));const l=W(()=>a(i).trim()!==(a(r).name||"")||a(o).trim()!==(a(r).comment||""));async function c(){if(!a(l))return;const y={storeName:a(i).trim(),storeComment:a(o).trim()};await t.modalState.updateStore(y)}var f=cd(),v=u(f),m=u(v),g=d(u(m),4),h=u(g),_=u(h);vn(_,{class:"h-4 w-4 opacity-50"});var w=d(_,2);w.__keydown=[ad,c];var S=d(w,2);je(S,21,()=>I.uniqueStores,Ms,(y,C)=>{var B=id(),be=u(B),he={};V(()=>{q(be,a(C)),he!==(he=a(C))&&(B.value=(B.__value=a(C))??"")}),p(y,B)});var $=d(h,2),M=d(g,2),T=u(M);T.__click=c;var P=u(T);{var x=y=>{var C=od();p(y,C)},N=y=>{var C=lt("Mettre à jour");p(y,C)};D(P,y=>{t.modalState.loading?y(x):y(N,!1)})}var R=d(T,2);R.__click=[ld,i,o],V(()=>{Cs($,`          ${a(o)??""}
        `),T.disabled=t.modalState.loading||!a(l),R.disabled=t.modalState.loading}),qe(w,()=>a(i),y=>k(i,y)),qe($,()=>a(o),y=>k(o,y)),p(e,f),H()}Ot(["keydown","click"]);var dd=E('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),fd=E('<tr><td class="font-medium"> </td><td> </td><td>-</td><td>-</td><td> </td></tr>'),vd=E('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),hd=E('<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>');function pd(e,t){G(t,!0);const r=W(()=>t.modalState.recipes);var n=hd(),s=u(n),i=u(s);Ds(i,{class:"h-5 w-5"});var o=d(s,2);{var l=f=>{var v=dd(),m=u(v);pn(m,{class:"mx-auto mb-2 h-12 w-12"}),p(f,v)},c=f=>{var v=vd(),m=u(v),g=d(u(m));je(g,21,()=>a(r),h=>h.r,(h,_)=>{var w=fd(),S=u(w),$=u(S),M=d(S),T=u(M),P=d(M,3),x=u(P);V(()=>{q($,a(_).r),q(T,`${(a(_).q||a(_).qEq)??""} ${(a(_).u||a(_).uEq)??""}`),q(x,a(_).a||"-")}),p(h,w)}),p(f,v)};D(o,f=>{a(r).length===0?f(l):f(c,!1)})}p(e,n),H()}var _d=E('<div class="flex h-full items-center justify-center"><div class="text-xl font-bold">Chargement...</div></div>'),md=(e,t)=>t("recettes"),gd=E('<span class="badge badge-sm badge-secondary ml-1"> </span>'),bd=E('<span class="badge badge-sm badge-ghost ml-1">0</span>'),yd=(e,t)=>t("achats"),wd=E('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Sd=E('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Pd=(e,t)=>t("stock"),Ed=E('<span class="badge badge-sm badge-secondary ml-1"> </span>'),xd=E('<span class="badge badge-sm badge-ghost ml-1">0</span>'),$d=(e,t)=>t("volontaires"),kd=E('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Nd=E('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Td=(e,t)=>t("magasins"),Ad=E('<div class="alert alert-error mb-4"><!> <span> </span></div>'),Id=E('<div class="flex items-center justify-between border-b p-4 pt-0"><div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div>',1),Md=E('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><!></div></div>');function Cd(e,t){G(t,!0);let r=Ft(t,"initialTab",3,"recettes"),n=J(null),s=J(ht(r())),i=W(()=>a(n)!==null&&!a(n).loading),o=null;Ns(()=>{o||(o=(async()=>{const h=Nu(t.productId);await new Promise(_=>{const w=()=>{h.product?_(void 0):requestAnimationFrame(w)};w()}),k(n,h,!0)})())});function l(h){k(s,h,!0)}var c=Md(),f=u(c),v=u(f);{var m=h=>{var _=_d();p(h,_)},g=h=>{var _=Id(),w=L(_),S=u(w),$=u(S),M=d(S,2),T=u(M),P=u(T),x=d(T,2),N=d(u(x)),R=d(M,2);R.__click=function(...O){t.onClose?.apply(this,O)};var y=u(R);pt(y,{class:"h-4 w-4"});var C=d(w,2),B=u(C);B.__click=[md,l];var be=u(B);Ds(be,{class:"mr-1 h-5 w-5"});var he=d(be,2);{var He=O=>{var ce=gd(),Ae=u(ce);V(()=>q(Ae,a(n).recipes.length)),p(O,ce)},Ve=O=>{var ce=bd();p(O,ce)};D(he,O=>{a(n).recipes.length>0?O(He):O(Ve,!1)})}var xe=d(B,2);xe.__click=[yd,l];var Z=u(xe);fn(Z,{class:"mr-1 h-5 w-5"});var $e=d(Z,2);{var A=O=>{var ce=wd(),Ae=u(ce);V(()=>q(Ae,a(n).purchasesList.length)),p(O,ce)},ne=O=>{var ce=Sd();p(O,ce)};D($e,O=>{a(n).purchasesList.length>0?O(A):O(ne,!1)})}var ve=d(xe,2);ve.__click=[Pd,l];var Se=u(ve);ps(Se,{class:"mr-1 h-5 w-5"});var ke=d(Se,2);{var nt=O=>{var ce=Ed(),Ae=u(ce);V(()=>q(Ae,a(n).stockEntries.length)),p(O,ce)},ut=O=>{var ce=xd();p(O,ce)};D(ke,O=>{a(n).stockEntries.length>0?O(nt):O(ut,!1)})}var de=d(ve,2);de.__click=[$d,l];var _e=u(de);Ki(_e,{class:"mr-1 h-5 w-5"});var We=d(_e,2);{var Be=O=>{var ce=kd(),Ae=u(ce);V(()=>q(Ae,a(n).product?.who.length)),p(O,ce)},Ce=O=>{var ce=Nd();p(O,ce)};D(We,O=>{a(n).product?.who&&a(n).product?.who.length>0?O(Be):O(Ce,!1)})}var Te=d(de,2);Te.__click=[Td,l];var ye=u(Te);vn(ye,{class:"mr-1 h-5 w-5"});var Qe=d(C,2),dt=u(Qe);{var Bt=O=>{var ce=Ad(),Ae=u(ce);pt(Ae,{class:"h-4 w-4"});var Lt=d(Ae,2),Y=u(Lt);V(()=>q(Y,`erreur : ${a(n).error??""}`)),p(O,ce)};D(dt,O=>{a(n).error&&O(Bt)})}var Ze=d(dt,2),Et=u(Ze);Rl(Et,()=>a(s),O=>{var ce=Q(),Ae=L(ce);{var Lt=mt=>{pd(mt,{get modalState(){return a(n)}})},Y=mt=>{var ir=Q(),yr=L(ir);{var Lr=De=>{Wu(De,{get modalState(){return a(n)}})},jr=De=>{var xt=Q(),jt=L(xt);{var or=st=>{Zu(st,{get modalState(){return a(n)}})},$t=st=>{var gt=Q(),zt=L(gt);{var kt=Xe=>{sd(Xe,{get modalState(){return a(n)}})},Nt=Xe=>{var Tt=Q(),Zt=L(Tt);{var Vt=At=>{ud(At,{get modalState(){return a(n)}})};D(Zt,At=>{a(s)==="magasins"&&At(Vt)},!0)}p(Xe,Tt)};D(zt,Xe=>{a(s)==="volontaires"?Xe(kt):Xe(Nt,!1)},!0)}p(st,gt)};D(jt,st=>{a(s)==="stock"?st(or):st($t,!1)},!0)}p(De,xt)};D(yr,De=>{a(s)==="achats"?De(Lr):De(jr,!1)},!0)}p(mt,ir)};D(Ae,mt=>{a(s)==="recettes"?mt(Lt):mt(Y,!1)})}p(O,ce)});var Br=d(Qe,2),U=u(Br);U.__click=function(...O){t.onClose?.apply(this,O)},V(()=>{q($,a(n).product?.productName),q(P,a(n).product?.productType),q(N,` ${a(n).product?.displayTotalNeeded??""}`),Ee(B,1,`tab ${a(s)==="recettes"?"tab-active":""}`),Ee(xe,1,`tab ${a(s)==="achats"?"tab-active":""}`),Ee(ve,1,`tab ${a(s)==="stock"?"tab-active":""}`),Ee(de,1,`tab ${a(s)==="volontaires"?"tab-active":""}`),Ee(Te,1,`tab ${a(s)==="magasins"?"tab-active":""}`)}),p(h,_)};D(v,h=>{a(i)?h(g,!1):h(m)})}p(e,c),H()}Ot(["click"]);var Dd=()=>I.setGroupBy("none"),Rd=()=>I.setGroupBy("store"),Od=()=>I.setGroupBy("productType"),qd=(e,t)=>I.toggleProductType(t),Bd=E("<button><!> </button>"),Ld=()=>I.toggleTemperature("frais"),jd=()=>I.toggleTemperature("surgele"),zd=()=>I.clearTypeAndTemperatureFilters(),Vd=E('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Wd=(e,t)=>I.toggleStore(t),Ud=E("<button> </button>"),Gd=E('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Hd=(e,t)=>I.toggleWho(t),Qd=E("<button> </button>"),Kd=E('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Yd=(e,t)=>{I.clearFilters(),k(t,!1)},Jd=E('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Zd(e,t){G(t,!0);let r=J(!1);const n=W(()=>I.filters),s=W(()=>I.uniqueStores),i=W(()=>I.uniqueWho),o=W(()=>I.uniqueProductTypes);var l=Jd(),c=L(l),f=u(c),v=d(f,2),m=d(u(v),2),g=u(m),h=u(g),_=u(h);_s(_,{class:"w-5 h-5"});var w=d(h,2),S=u(w);pt(S,{class:"w-4 h-4"});var $=d(g,2),M=d(u($),2),T=u(M);T.__change=[Dd];var P=d(T,2);P.__change=[Rd];var x=d(P,2);x.__change=[Od];var N=d($,2),R=u(N),y=d(u(R),2);je(y,20,()=>a(o),de=>de,(de,_e)=>{const We=W(()=>En(_e));var Be=Bd();Be.__click=[qd,_e];var Ce=u(Be);Zr(Ce,()=>a(We).icon,(ye,Qe)=>{Qe(ye,{class:"w-3 h-3 mr-1"})});var Te=d(Ce);V(ye=>{Ee(Be,1,`btn btn-sm ${ye??""}`),q(Te,` ${a(We).displayName??""}`)},[()=>a(n).selectedProductTypes.length===0?"btn-soft btn-accent":a(n).selectedProductTypes.includes(_e)?"btn-accent":"btn-dash btn-accent"]),p(de,Be)});var C=d(y,2),B=u(C);B.__click=[Ld];var be=u(B);ms(be,{class:"w-3 h-3"});var he=d(B,2);he.__click=[jd];var He=u(he);gs(He,{class:"w-3 h-3"});var Ve=d(he,2);{var xe=de=>{var _e=Vd();_e.__click=[zd];var We=u(_e);pt(We,{class:"w-3 h-3"}),p(de,_e)};D(Ve,de=>{(a(n).selectedProductTypes.length>0||a(n).selectedTemperatures.length>0)&&de(xe)})}var Z=d(N,2);{var $e=de=>{var _e=Gd(),We=u(_e),Be=d(u(We),2);je(Be,20,()=>a(s),Ce=>Ce,(Ce,Te)=>{var ye=Ud();ye.__click=[Wd,Te];var Qe=u(ye);V(dt=>{Ee(ye,1,`btn btn-sm ${dt??""}`),q(Qe,Te)},[()=>a(n).selectedStores.length===0?"btn-soft btn-accent":a(n).selectedStores.includes(Te)?"btn-accent":"btn-dash btn-accent"]),p(Ce,ye)}),p(de,_e)};D(Z,de=>{a(s).length>0&&de($e)})}var A=d(Z,2);{var ne=de=>{var _e=Kd(),We=u(_e),Be=d(u(We),2);je(Be,20,()=>a(i),Ce=>Ce,(Ce,Te)=>{var ye=Qd();ye.__click=[Hd,Te];var Qe=u(ye);V(dt=>{Ee(ye,1,`btn btn-sm ${dt??""}`),q(Qe,Te)},[()=>a(n).selectedWho.length===0?"btn-soft btn-accent":a(n).selectedWho.includes(Te)?"btn-accent":"btn-dash btn-accent"]),p(Ce,ye)}),p(de,_e)};D(A,de=>{a(i).length>0&&de(ne)})}var ve=d(A,4);ve.__click=[Yd,r];var Se=u(ve);pt(Se,{class:"w-4 h-4 mr-2"});var ke=d(c,2),nt=u(ke),ut=u(nt);_s(ut,{class:"w-6 h-6"}),V((de,_e)=>{kr(T,a(n).groupBy==="none"),kr(P,a(n).groupBy==="store"),kr(x,a(n).groupBy==="productType"),Ee(B,1,`btn btn-sm ${de??""}`),Ee(he,1,`btn btn-sm ${_e??""}`)},[()=>a(n).selectedTemperatures.length===0?"btn-soft btn-success":a(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(n).selectedTemperatures.length===0?"btn-soft btn-info":a(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Hl(f,()=>a(r),de=>k(r,de)),p(e,l),H()}Ot(["change","click"]);Ot(["mousedown"]);const Yr=e=>{var t=Xd(),r=u(t);Qi(r,{class:"h-4 w-4 text-amber-600"}),p(e,t)};var Xd=E('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),Fd=()=>I.clearFilters(),ef=e=>I.setSearchQuery(e.currentTarget.value),tf=()=>I.setGroupBy("none"),rf=()=>I.setGroupBy("store"),nf=()=>I.setGroupBy("productType"),sf=(e,t)=>I.toggleProductType(t),af=E("<button><!> </button>"),of=()=>I.toggleTemperature("frais"),lf=()=>I.toggleTemperature("surgele"),cf=()=>I.clearTypeAndTemperatureFilters(),uf=E('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),df=E('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),ff=(e,t)=>I.toggleStore(t),vf=E("<button><!> </button>"),hf=()=>I.clearStoreFilters(),pf=E('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),_f=E('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),mf=(e,t)=>I.toggleWho(t),gf=E("<button><!> </button>"),bf=()=>I.clearWhoFilters(),yf=E('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),wf=E('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),Sf=()=>I.handleSort("productName"),Pf=()=>I.handleSort("store"),Ef=()=>I.handleSort("who"),xf=()=>I.handleSort("productType"),$f=E('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),kf=E('<tr class="bg-base-200 sticky top-10 z-10 font-semibold"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),Nf=(e,t,r)=>t(a(r).$id,"recettes"),Tf=E('<div class="text-base-content/60 text-xs"> </div>'),Af=E('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),If=E('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Mf=(e,t,r)=>t(a(r).$id,"magasins"),Cf=E('<div class="tooltip tooltip-info"> </div>'),Df=(e,t,r)=>t(a(r).$id,"volontaires"),Rf=E('<span class="badge badge-soft badge-info badge-sm"> </span>'),Of=E('<div class="flex flex-wrap gap-1 pr-8"></div>'),qf=(e,t,r)=>t(a(r).$id,"recettes"),Bf=E('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),Lf=(e,t,r)=>t(a(r).$id,"achats"),jf=E("<div><!> <span> </span></div>"),zf=E('<span class="text-sm">-</span>'),Vf=E('<div class="bg-warning m-auto rounded px-2 py-1"> </div>'),Wf=E('<tr class="hover:bg-base-200/20 transition-colors"><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!></td></tr>'),Uf=E("<!> <!>",1),Gf=E('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Hf=E('<div class="space-y-6"><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="mt-4 flex"><!></div> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div></div> <div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function Qf(e,t){G(t,!0);const r={Package:pn,MessageCircleQuestionMark:_u,ShoppingCart:fn,Clock:du,CircleCheck:cu,CircleX:uu},n=W(()=>I.filteredProducts),s=W(()=>I.filteredGroupedProducts),i=W(()=>I.stats),o=W(()=>I.uniqueStores),l=W(()=>I.uniqueWho),c=W(()=>I.uniqueProductTypes),f=W(()=>I.filters);let v=J(null),m=J("recettes");function g(j,ue="recettes"){k(m,ue,!0),k(v,j,!0)}function h(){k(v,null)}var _=Hf(),w=L(_),S=u(w),$=u(S),M=u($);wa(M,{class:"mr-1 h-4 w-4"});var T=d(M),P=d(S,2),x=u(P),N=u(x),R=u(N),y=u(R);_s(y,{class:"h-5 w-5"});var C=d(R,2);C.__click=[Fd];var B=u(C);pt(B,{class:"h-4 w-4"});var be=d(x,2),he=u(be),He=d(u(he),2),Ve=u(He);wu(Ve,{class:"h-4 w-4"});var xe=d(Ve,2);xe.__input=[ef];var Z=d(he,2),$e=d(u(Z),2),A=u($e);A.__change=[tf];var ne=d(A,2);ne.__change=[rf];var ve=d(ne,2);ve.__change=[nf];var Se=d(be,2),ke=u(Se),nt=u(ke);{var ut=j=>{var ue=df(),Fe=u(ue),Ue=d(u(Fe),2),Ie=u(Ue);je(Ie,16,()=>a(c),fe=>fe,(fe,we)=>{const it=W(()=>En(we));var et=af();et.__click=[sf,we];var bt=u(et);Zr(bt,()=>a(it).icon,(Ke,wt)=>{wt(Ke,{class:"mr-1 h-5 w-5"})});var yt=d(bt);V(Ke=>{Ee(et,1,`btn btn-sm ${Ke??""}`),q(yt,` ${a(it).displayName??""}`)},[()=>a(f).selectedProductTypes.length===0?"btn-soft btn-accent":a(f).selectedProductTypes.includes(we)?"btn-accent":"btn-dash btn-accent"]),p(fe,et)});var Re=d(Ie,2);Re.__click=[of];var at=u(Re);ms(at,{class:"h-5 w-5"});var pe=d(Re,2);pe.__click=[lf];var Pe=u(pe);gs(Pe,{class:"h-5 w-5"});var me=d(pe,2);{var K=fe=>{var we=uf();we.__click=[cf];var it=u(we);pt(it,{class:"h-3 w-3"}),p(fe,we)};D(me,fe=>{(a(f).selectedProductTypes.length>0||a(f).selectedTemperatures.length>0)&&fe(K)})}V((fe,we)=>{Ee(Re,1,`btn btn-sm ms-4 ${fe??""}`),Ee(pe,1,`btn btn-sm ${we??""}`)},[()=>a(f).selectedTemperatures.length===0?"btn-soft btn-success":a(f).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(f).selectedTemperatures.length===0?"btn-soft btn-info":a(f).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),p(j,ue)};D(nt,j=>{a(c).length>0&&j(ut)})}var de=d(ke,2),_e=u(de);{var We=j=>{var ue=_f(),Fe=u(ue),Ue=d(u(Fe),2),Ie=u(Ue);je(Ie,16,()=>a(o),pe=>pe,(pe,Pe)=>{var me=vf();me.__click=[ff,Pe];var K=u(me);vn(K,{class:"mr-1 h-3 w-3"});var fe=d(K);V(we=>{Ee(me,1,`btn btn-xs ${we??""}`),q(fe,` ${Pe??""}`)},[()=>a(f).selectedStores.length===0?"btn-soft btn-accent":a(f).selectedStores.includes(Pe)?"btn-accent":"btn-dash btn-accent"]),p(pe,me)});var Re=d(Ie,2);{var at=pe=>{var Pe=pf();Pe.__click=[hf];var me=u(Pe);pt(me,{class:"h-3 w-3"}),p(pe,Pe)};D(Re,pe=>{a(f).selectedStores.length>0&&pe(at)})}p(j,ue)};D(_e,j=>{a(o).length>0&&j(We)})}var Be=d(_e,2);{var Ce=j=>{var ue=wf(),Fe=u(ue),Ue=d(u(Fe),2),Ie=u(Ue);je(Ie,16,()=>a(l),pe=>pe,(pe,Pe)=>{var me=gf();me.__click=[mf,Pe];var K=u(me);Rs(K,{class:"mr-1 h-3 w-3"});var fe=d(K);V(we=>{Ee(me,1,`btn btn-xs ${we??""}`),q(fe,` ${Pe??""}`)},[()=>a(f).selectedWho.length===0?" btn-soft btn-info":a(f).selectedWho.includes(Pe)?" btn-info":"btn-dash btn-info"]),p(pe,me)});var Re=d(Ie,2);{var at=pe=>{var Pe=yf();Pe.__click=[bf];var me=u(Pe);pt(me,{class:"h-3 w-3"}),p(pe,Pe)};D(Re,pe=>{a(f).selectedWho.length>0&&pe(at)})}p(j,ue)};D(Be,j=>{a(l).length>0&&j(Ce)})}var Te=d(P,2),ye=u(Te),Qe=u(ye),dt=u(Qe),Bt=u(dt);Bt.__click=[Sf];var Ze=u(Bt),Et=u(Ze);wa(Et,{class:"h-4 w-4"});var Br=d(Et,2);{var U=j=>{var ue=lt();V(()=>q(ue,a(f).sortDirection==="asc"?"↑":"↓")),p(j,ue)};D(Br,j=>{a(f).sortColumn==="productName"&&j(U)})}var O=d(Bt);O.__click=[Pf];var ce=u(O),Ae=u(ce);vn(Ae,{class:"h-4 w-4"});var Lt=d(Ae,2);{var Y=j=>{var ue=lt();V(()=>q(ue,a(f).sortDirection==="asc"?"↑":"↓")),p(j,ue)};D(Lt,j=>{a(f).sortColumn==="store"&&j(Y)})}var mt=d(O);mt.__click=[Ef];var ir=u(mt),yr=u(ir);Ki(yr,{class:"h-4 w-4"});var Lr=d(yr,2);{var jr=j=>{var ue=lt();V(()=>q(ue,a(f).sortDirection==="asc"?"↑":"↓")),p(j,ue)};D(Lr,j=>{a(f).sortColumn==="who"&&j(jr)})}var De=d(mt);De.__click=[xf];var xt=u(De),jt=d(u(xt));{var or=j=>{var ue=lt();V(()=>q(ue,a(f).sortDirection==="asc"?"↑":"↓")),p(j,ue)};D(jt,j=>{a(f).sortColumn==="productType"&&j(or)})}var $t=d(De,2),st=u($t),gt=u(st);fn(gt,{class:"h-4 w-4"});var zt=d($t),kt=u(zt),Nt=u(kt);hu(Nt,{class:"h-4 w-4"});var Xe=d(Qe);je(Xe,21,()=>Object.entries(a(s)),([j,ue])=>j,(j,ue)=>{var Fe=W(()=>Na(a(ue),2));let Ue=()=>a(Fe)[0],Ie=()=>a(Fe)[1];var Re=Uf(),at=L(Re);{var pe=me=>{const K=W(()=>En(Ue()));var fe=kf(),we=u(fe),it=u(we),et=u(it);{var bt=Ke=>{var wt=lt();V(()=>q(wt,`🏪 ${Ue()??""} (${Ie().length??""})`)),p(Ke,wt)},yt=Ke=>{var wt=Q(),zr=L(wt);{var Sr=ee=>{var Wt=$f(),_n=u(Wt);Zr(_n,()=>a(K).icon,(Wn,Un)=>{Un(Wn,{class:"h-4 w-4"})});var mn=d(_n,2),Vn=u(mn),Pr=d(mn,2),gn=u(Pr);V(()=>{q(Vn,a(K).displayName),q(gn,`(${Ie().length??""})`)}),p(ee,Wt)},Vr=ee=>{var Wt=lt();V(()=>q(Wt,`📦 ${Ue()??""} (${Ie().length??""})`)),p(ee,Wt)};D(zr,ee=>{a(f).groupBy==="productType"?ee(Sr):ee(Vr,!1)},!0)}p(Ke,wt)};D(et,Ke=>{a(f).groupBy==="store"?Ke(bt):Ke(yt,!1)})}p(me,fe)};D(at,me=>{Ue()!==""&&me(pe)})}var Pe=d(at,2);je(Pe,17,()=>xu(Ie(),a(f)),me=>me.$id,(me,K)=>{const fe=W(()=>En(a(K).productType)),we=W(()=>$u(a(K).purchases||[]));var it=Wf(),et=u(it);et.__click=[Nf,g,K];var bt=u(et),yt=u(bt),Ke=u(yt),wt=u(Ke),zr=d(Ke,2);{var Sr=z=>{var se=Tf(),Oe=u(se);V(()=>q(Oe,`Ancien: ${a(K).previousNames[0]??""}`)),p(z,se)};D(zr,z=>{a(K).previousNames&&a(K).previousNames.length>0&&z(Sr)})}var Vr=d(yt,2),ee=u(Vr);{var Wt=z=>{var se=Af(),Oe=u(se);ms(Oe,{class:"text-success h-4 w-4"}),p(z,se)};D(ee,z=>{a(K).pFrais&&z(Wt)})}var _n=d(ee,2);{var mn=z=>{var se=If(),Oe=u(se);gs(Oe,{class:"text-info h-4 w-4"}),p(z,se)};D(_n,z=>{a(K).pSurgel&&z(mn)})}var Vn=d(bt,2);Yr(Vn);var Pr=d(et);Pr.__click=[Mf,g,K];var gn=u(Pr);{var Wn=z=>{var se=Cf(),Oe=u(se);V(()=>{Nn(se,"data-tip",a(K).storeInfo.storeComment),q(Oe,a(K).storeInfo.storeName||"-")}),p(z,se)},Un=z=>{var se=lt();V(()=>q(se,a(K).storeInfo?.storeName||"-")),p(z,se)};D(gn,z=>{a(K).storeInfo?.storeComment?z(Wn):z(Un,!1)})}var Yi=d(gn,2);Yr(Yi);var Gn=d(Pr);Gn.__click=[Df,g,K];var Bs=u(Gn);{var Ji=z=>{var se=Of();je(se,20,()=>a(K).who,Oe=>Oe,(Oe,Xt)=>{var lr=Rf(),Wr=u(lr);V(()=>q(Wr,Xt)),p(Oe,lr)}),p(z,se)},Zi=z=>{var se=lt("-");p(z,se)};D(Bs,z=>{a(K).who&&a(K).who.length>0?z(Ji):z(Zi,!1)})}var Xi=d(Bs,2);Yr(Xi);var Hn=d(Gn),Fi=u(Hn),Ls=u(Fi);Zr(Ls,()=>a(fe).icon,(z,se)=>{se(z,{class:"h-3 w-3"})});var eo=d(Ls),Qn=d(Hn);Qn.__click=[qf,g,K];var js=u(Qn),to=u(js),zs=d(js,2);{var ro=z=>{var se=Bf(),Oe=u(se),Xt=u(Oe),lr=d(Xt);Ds(lr,{class:"h-3 w-3"});var Wr=d(Oe,2),bn=u(Wr),Ur=d(bn);Pu(Ur,{class:"h-3 w-3"}),V(()=>{q(Xt,`${a(K)?.nbRecipes??""} `),q(bn,`${a(K)?.totalAssiettes??""} `)}),p(z,se)};D(zs,z=>{(a(K).nbRecipes||a(K).totalAssiettes)&&z(ro)})}var no=d(zs,2);Yr(no);var Kn=d(Qn);Kn.__click=[Lf,g,K];var Vs=u(Kn),Ws=u(Vs);je(Ws,17,()=>a(we),z=>z.status,(z,se)=>{const Oe=W(()=>r[a(se).icon]);var Xt=jf(),lr=u(Xt);Zr(lr,()=>a(Oe),(Ur,fo)=>{fo(Ur,{class:"h-4 w-4"})});var Wr=d(lr,2),bn=u(Wr);V(Ur=>{Ee(Xt,1,`badge badge-soft flex items-center gap-2 ${a(se).badgeClass??""}`),q(bn,Ur)},[()=>Os(a(se).quantity,a(se).unit)]),p(z,Xt)});var so=d(Ws,2);{var ao=z=>{var se=zf();p(z,se)};D(so,z=>{a(we).length===0&&z(ao)})}var io=d(Vs,2);Yr(io);var oo=d(Kn),lo=u(oo);{var co=z=>{var se=Vf(),Oe=u(se);V(()=>q(Oe,a(K).displayMissingQuantity)),p(z,se)},uo=z=>{lu(z,{size:28,strokeWidth:3,class:"text-success m-auto"})};D(lo,z=>{a(K).displayMissingQuantity!=="✅ Complet"?z(co):z(uo,!1)})}V(()=>{q(wt,a(K).productName),Ee(Pr,1,`${a(f).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),Ee(Hn,1,hi(a(f).groupBy==="productType"?"hidden":"")),q(eo,` ${a(fe).displayName??""}`),q(to,a(K).displayTotalNeeded??"-")}),p(me,it)}),p(j,Re)});var Tt=d(ye,2);{var Zt=j=>{var ue=Gf();p(j,ue)};D(Tt,j=>{a(n).length===0&&j(Zt)})}var Vt=d(w,2);{var At=j=>{Cd(j,{get productId(){return a(v)},get initialTab(){return a(m)},onClose:h})};D(Vt,j=>{a(v)&&j(At)})}var wr=d(Vt,2);Zd(wr,{}),V(()=>{q(T,` ${a(i).total??""}`),Cs(xe,a(f).searchQuery),kr(A,a(f).groupBy==="none"),kr(ne,a(f).groupBy==="store"),kr(ve,a(f).groupBy==="productType"),Ee(O,1,`hover:bg-base-100 cursor-pointer text-center ${a(f).groupBy==="store"?"hidden":""}`),Ee(De,1,`hover:bg-base-100 cursor-pointer text-center ${a(f).groupBy==="productType"?"hidden":""}`)}),p(e,_),H()}Ot(["click","input","change"]);Ko();var Kf=E('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function Yf(e){var t=Kf();p(e,t)}var Jf=E('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function Zf(e,t){var r=Jf(),n=d(u(r),2),s=d(u(n),2),i=u(s);V(()=>q(i,t.message)),p(e,r)}var Xf=E('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function Ff(e,t){var r=Xf(),n=u(r),s=u(n);Su(s,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var i=d(s,2),o=d(u(i),2),l=u(o);V(()=>q(l,t.message||"Erreur inconnue")),p(e,r)}var ev=E('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),tv=E('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),rv=E('<div class="text-base-content/60"> </div>'),nv=E('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),sv=E('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),av=E('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),iv=E('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function ov(e,t){G(t,!0);let r,n=J(null),s=J(!0),i=J(!1);bi(async()=>{r=Ic();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await I.initialize(r)}catch(A){const ne=A instanceof Error?A.message:"Erreur lors de l'initialisation";k(n,ne,!0),console.error("[App] Erreur initialisation:",A)}finally{k(s,!1)}}),Jl(()=>{I.destroy()});async function o(){if(!(!r||a(i))){k(i,!0);try{await I.forceReload(r)}catch(A){console.error("[App] Erreur lors du rechargement forcé:",A)}finally{k(i,!1)}}}const l=W(()=>a(n)||I.error),c=W(()=>a(s)||I.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=iv(),m=u(v),g=u(m),h=u(g),_=d(u(h),2),w=u(_);{var S=A=>{var ne=ev();p(A,ne)};D(w,A=>{I.realtimeConnected&&A(S)})}var $=d(w,2);{var M=A=>{var ne=tv();p(A,ne)};D($,A=>{I.syncing&&A(M)})}var T=d($,2);{var P=A=>{var ne=rv(),ve=u(ne);V(Se=>q(ve,`Maj: ${Se??""}`),[()=>new Date(I.lastSync).toLocaleTimeString()]),p(A,ne)};D(T,A=>{I.lastSync&&A(P)})}var x=d(T,2);{var N=A=>{var ne=nv();let ve;ne.__click=o;var Se=u(ne);gu(Se,{class:"h-4 w-4"}),V(ke=>{ve=Ee(ne,1,"btn btn-outline btn-sm",null,ve,ke),ne.disabled=a(i)||I.loading},[()=>({loading:a(i)||I.loading})]),p(A,ne)};D(x,A=>{a(n)||A(N)})}var R=d(x,2);{var y=A=>{var ne=sv(),ve=u(ne),Se=u(ve);pu(Se,{class:"mr-2 h-4 w-4"}),V(()=>Nn(ve,"href",f)),p(A,ne)};D(R,A=>{a(n)&&A(y)})}var C=d(m,2),B=u(C);{var be=A=>{Ff(A,{get message(){return a(l)}})},he=A=>{var ne=Q(),ve=L(ne);{var Se=ke=>{Zf(ke,{get message(){return a(l)}})};D(ve,ke=>{a(l)&&ke(Se)},!0)}p(A,ne)};D(B,A=>{a(n)?A(be):A(he,!1)})}var He=d(B,2);{var Ve=A=>{Yf(A)};D(He,A=>{a(c)&&A(Ve)})}var xe=d(He,2);{var Z=A=>{Qf(A,{})},$e=A=>{var ne=Q(),ve=L(ne);{var Se=ke=>{var nt=av();p(ke,nt)};D(ve,ke=>{!I.loading&&!a(n)&&ke(Se)},!0)}p(A,ne)};D(xe,A=>{I.enrichedProducts.length>0?A(Z):A($e,!1)})}p(e,v),H()}Ot(["click"]);Ml(ov,{target:document.getElementById("app_products")});
