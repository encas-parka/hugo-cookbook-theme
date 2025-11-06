(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const fs=!1;var $n=Array.isArray,Ko=Array.prototype.indexOf,fa=Array.from,Jn=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Jo=Object.getOwnPropertyDescriptors,Yo=Object.prototype,Zo=Array.prototype,vs=Object.getPrototypeOf,Aa=Object.isExtensible;function Kr(e){return typeof e=="function"}const ne=()=>{};function Xo(e){for(var t=0;t<e.length;t++)e[t]()}function hs(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function ps(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const ft=2,va=4,ha=8,_r=16,qt=32,gr=64,pa=128,yt=256,Sn=512,st=1024,ht=2048,nr=4096,Pt=8192,br=16384,ma=32768,yr=65536,Ta=1<<17,Fo=1<<18,Lr=1<<19,ei=1<<20,Yn=1<<21,kn=1<<22,dr=1<<23,fr=Symbol("$state"),ms=Symbol("legacy props"),ti=Symbol(""),en=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function _s(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ri(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ni(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ai(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function si(e){throw new Error("https://svelte.dev/e/effect_orphan")}function oi(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ii(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function li(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ci(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ui(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function di(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const An=1,Tn=2,gs=4,fi=8,vi=16,hi=1,pi=2,mi=4,_i=8,gi=16,bi=1,yi=2,Ke=Symbol(),wi="http://www.w3.org/1999/xhtml",Si="http://www.w3.org/2000/svg",xi="@attach";function Pi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ei(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let $i=!1;function bs(e){return e===this.v}function ys(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ki(e,t){return e!==t}function ws(e){return!ys(e,this.v)}let zr=!1,Ai=!1;function Ti(){zr=!0}let He=null;function Mr(e){He=e}function V(e,t=!1,r){He={p:He,c:null,e:null,s:e,x:null,l:zr&&!t?{s:null,u:null,$:[]}:null}}function U(e){var t=He,r=t.e;if(r!==null){t.e=null;for(var n of r)Os(n)}return He=t.p,{}}function Vr(){return!zr||He!==null&&He.l===null}let lr=[];function Ss(){var e=lr;lr=[],Xo(e)}function vr(e){if(lr.length===0&&!tn){var t=lr;queueMicrotask(()=>{t===lr&&Ss()})}lr.push(e)}function Ni(){for(;lr.length>0;)Ss()}const Ci=new WeakMap;function xs(e){var t=Ee;if(t===null)return ke.f|=dr,e;if((t.f&ma)===0){if((t.f&pa)===0)throw!t.parent&&e instanceof Error&&Ps(e),e;t.b.error(e)}else Ir(e,t)}function Ir(e,t){for(;t!==null;){if((t.f&pa)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&Ps(e),e}function Ps(e){const t=Ci.get(e);t&&(Jn(e,"message",{value:t.message}),Jn(e,"stack",{value:t.stack}))}const mn=new Set;let qe=null,gn=null,Zn=new Set,Nt=[],Nn=null,Xn=!1,tn=!1;class bt{current=new Map;#e=new Map;#r=new Set;#c=0;#u=null;#l=[];#o=[];#i=[];#a=[];#s=[];#f=[];skipped_effects=new Set;process(t){Nt=[],gn=null;var r=bt.apply(this);for(const o of t)this.#n(o);if(this.#c===0){this.#v();var n=this.#o,a=this.#i;this.#o=[],this.#i=[],this.#a=[],gn=this,qe=null,Na(n),Na(a),gn=null,this.#u?.resolve()}else this.#d(this.#o),this.#d(this.#i),this.#d(this.#a);r();for(const o of this.#l)on(o);this.#l=[]}#n(t){t.f^=st;for(var r=t.first;r!==null;){var n=r.f,a=(n&(qt|gr))!==0,o=a&&(n&st)!==0,i=o||(n&Pt)!==0||this.skipped_effects.has(r);if(!i&&r.fn!==null){a?r.f^=st:(n&va)!==0?this.#i.push(r):(n&st)===0&&((n&kn)!==0&&r.b?.is_pending()?this.#l.push(r):Rn(r)&&((r.f&_r)!==0&&this.#a.push(r),on(r)));var l=r.first;if(l!==null){r=l;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}}#d(t){for(const r of t)((r.f&ht)!==0?this.#s:this.#f).push(r),lt(r,st);t.length=0}capture(t,r){this.#e.has(t)||this.#e.set(t,r),this.current.set(t,t.v)}activate(){qe=this}deactivate(){qe=null}flush(){if(Nt.length>0){if(this.activate(),Es(),qe!==null&&qe!==this)return}else this.#c===0&&this.#v();this.deactivate();for(const t of Zn)if(Zn.delete(t),t(),qe!==null)break}#v(){for(const t of this.#r)t();if(this.#r.clear(),mn.size>1){this.#e.clear();let t=!0;for(const r of mn){if(r===this){t=!1;continue}for(const[n,a]of this.current){if(r.current.has(n))if(t)r.current.set(n,a);else continue;$s(n)}if(Nt.length>0){qe=r;const n=bt.apply(r);for(const a of Nt)r.#n(a);Nt=[],n()}}qe=null}mn.delete(this)}increment(){this.#c+=1}decrement(){this.#c-=1;for(const t of this.#s)lt(t,ht),hr(t);for(const t of this.#f)lt(t,nr),hr(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#u??=hs()).promise}static ensure(){if(qe===null){const t=qe=new bt;mn.add(qe),tn||bt.enqueue(()=>{qe===t&&t.flush()})}return qe}static enqueue(t){vr(t)}static apply(t){return ne}}function Mi(e){var t=tn;tn=!0;try{for(var r;;){if(Ni(),Nt.length===0&&(qe?.flush(),Nt.length===0))return Nn=null,r;Es()}}finally{tn=t}}function Es(){var e=Nr;Xn=!0;try{var t=0;for(Da(!0);Nt.length>0;){var r=bt.ensure();if(t++>1e3){var n,a;Ii()}r.process(Nt),Xt.clear()}}finally{Xn=!1,Da(e),Nn=null}}function Ii(){try{oi()}catch(e){Ir(e,Nn)}}let ir=null;function Na(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(br|Pt))===0&&Rn(n)&&(ir=[],on(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?Bs(n):n.fn=null),ir?.length>0)){Xt.clear();for(const a of ir)on(a);ir=[]}}ir=null}}function $s(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&ft)!==0?$s(t):(r&(kn|_r))!==0&&(lt(t,ht),hr(t))}}function hr(e){for(var t=Nn=e;t.parent!==null;){t=t.parent;var r=t.f;if(Xn&&t===Ee&&(r&_r)!==0)return;if((r&(gr|qt))!==0){if((r&st)===0)return;t.f^=st}}Nt.push(t)}function _a(e){let t=0,r=er(0),n;return()=>{Ji()&&(s(r),Sa(()=>(t===0&&(n=Ur(()=>e(()=>Ct(r)))),t+=1,()=>{vr(()=>{t-=1,t===0&&(n?.(),n=void 0,Ct(r))})})))}}var Di=yr|Lr|pa;function Ri(e,t,r){new Oi(e,t,r)}class Oi{parent;#e=!1;#r;#c=null;#u;#l;#o;#i=null;#a=null;#s=null;#f=null;#n=0;#d=0;#v=!1;#t=null;#_=()=>{this.#t&&Dr(this.#t,this.#n)};#g=_a(()=>(this.#t=er(this.#n),()=>{this.#t=null}));constructor(t,r,n){this.#r=t,this.#u=r,this.#l=n,this.parent=Ee.b,this.#e=!!this.#u.pending,this.#o=Lt(()=>{Ee.b=this;{try{this.#i=et(()=>n(this.#r))}catch(a){this.error(a)}this.#d>0?this.#p():this.#e=!1}},Di)}#w(){try{this.#i=et(()=>this.#l(this.#r))}catch(t){this.error(t)}this.#e=!1}#S(){const t=this.#u.pending;t&&(this.#a=et(()=>t(this.#r)),bt.enqueue(()=>{this.#i=this.#h(()=>(bt.ensure(),et(()=>this.#l(this.#r)))),this.#d>0?this.#p():(Dt(this.#a,()=>{this.#a=null}),this.#e=!1)}))}is_pending(){return this.#e||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#u.pending}#h(t){var r=Ee,n=ke,a=He;Mt(this.#o),dt(this.#o),Mr(this.#o.ctx);try{return t()}catch(o){return xs(o),null}finally{Mt(r),dt(n),Mr(a)}}#p(){const t=this.#u.pending;this.#i!==null&&(this.#f=document.createDocumentFragment(),qi(this.#i,this.#f)),this.#a===null&&(this.#a=et(()=>t(this.#r)))}#m(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#m(t);return}this.#d+=t,this.#d===0&&(this.#e=!1,this.#a&&Dt(this.#a,()=>{this.#a=null}),this.#f&&(this.#r.before(this.#f),this.#f=null),vr(()=>{bt.ensure().flush()}))}update_pending_count(t){this.#m(t),this.#n+=t,Zn.add(this.#_)}get_effect_pending(){return this.#g(),s(this.#t)}error(t){var r=this.#u.onerror;let n=this.#u.failed;if(this.#v||!r&&!n)throw t;this.#i&&(tt(this.#i),this.#i=null),this.#a&&(tt(this.#a),this.#a=null),this.#s&&(tt(this.#s),this.#s=null);var a=!1,o=!1;const i=()=>{if(a){Ei();return}a=!0,o&&di(),bt.ensure(),this.#n=0,this.#s!==null&&Dt(this.#s,()=>{this.#s=null}),this.#e=this.has_pending_snippet(),this.#i=this.#h(()=>(this.#v=!1,et(()=>this.#l(this.#r)))),this.#d>0?this.#p():this.#e=!1};var l=ke;try{dt(null),o=!0,r?.(t,i),o=!1}catch(c){Ir(c,this.#o&&this.#o.parent)}finally{dt(l)}n&&vr(()=>{this.#s=this.#h(()=>{this.#v=!0;try{return et(()=>{n(this.#r,()=>t,()=>i)})}catch(c){return Ir(c,this.#o.parent),null}finally{this.#v=!1}})})}}function qi(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var a=r===n?null:fn(r);t.append(r),r=a}}function ks(e,t,r){const n=Vr()?Cn:ga;if(t.length===0){r(e.map(n));return}var a=qe,o=Ee,i=ji();Promise.all(t.map(l=>Bi(l))).then(l=>{i();try{r([...e.map(n),...l])}catch(c){(o.f&br)===0&&Ir(c,o)}a?.deactivate(),As()}).catch(l=>{Ir(l,o)})}function ji(){var e=Ee,t=ke,r=He,n=qe;return function(){Mt(e),dt(t),Mr(r),n?.activate()}}function As(){Mt(null),dt(null),Mr(null)}function Cn(e){var t=ft|ht,r=ke!==null&&(ke.f&ft)!==0?ke:null;return Ee===null||r!==null&&(r.f&yt)!==0?t|=yt:Ee.f|=Lr,{ctx:He,deps:null,effects:null,equals:bs,f:t,fn:e,reactions:null,rv:0,v:Ke,wv:0,parent:r??Ee,ac:null}}function Bi(e,t){let r=Ee;r===null&&ri();var n=r.b,a=void 0,o=er(Ke),i=!ke,l=new Map;return Zi(()=>{var c=hs();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject)}catch(p){c.reject(p)}var f=qe,v=n.is_pending();i&&(n.update_pending_count(1),v||(f.increment(),l.get(f)?.reject(en),l.set(f,c)));const g=(p,m=void 0)=>{v||f.activate(),m?m!==en&&(o.f|=dr,Dr(o,m)):((o.f&dr)!==0&&(o.f^=dr),Dr(o,p)),i&&(n.update_pending_count(-1),v||f.decrement()),As()};c.promise.then(g,p=>g(null,p||"unknown"))}),Rs(()=>{for(const c of l.values())c.reject(en)}),new Promise(c=>{function f(v){function g(){v===a?c(o):f(a)}v.then(g,g)}f(a)})}function Z(e){const t=Cn(e);return Vs(t),t}function ga(e){const t=Cn(e);return t.equals=ws,t}function Ts(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)tt(t[r])}}function Li(e){for(var t=e.parent;t!==null;){if((t.f&ft)===0)return t;t=t.parent}return null}function ba(e){var t,r=Ee;Mt(Li(e));try{Ts(e),t=Qs(e)}finally{Mt(r)}return t}function Ns(e){var t=ba(e);if(e.equals(t)||(e.v=t,e.wv=Ws()),!Sr){var r=(Yt||(e.f&yt)!==0)&&e.deps!==null?nr:st;lt(e,r)}}const Xt=new Map;function er(e,t){var r={f:0,v:e,reactions:null,equals:bs,rv:0,wv:0};return r}function W(e,t){const r=er(e);return Vs(r),r}function zi(e,t=!1,r=!0){const n=er(e);return t||(n.equals=ws),zr&&r&&He!==null&&He.l!==null&&(He.l.s??=[]).push(n),n}function x(e,t,r=!1){ke!==null&&(!xt||(ke.f&Ta)!==0)&&Vr()&&(ke.f&(ft|_r|kn|Ta))!==0&&!Rt?.includes(e)&&ui();let n=r?Me(t):t;return Dr(e,n)}function Dr(e,t){if(!e.equals(t)){var r=e.v;Sr?Xt.set(e,t):Xt.set(e,r),e.v=t;var n=bt.ensure();n.capture(e,r),(e.f&ft)!==0&&((e.f&ht)!==0&&ba(e),lt(e,(e.f&yt)===0?st:nr)),e.wv=Ws(),Cs(e,ht),Vr()&&Ee!==null&&(Ee.f&st)!==0&&(Ee.f&(qt|gr))===0&&(gt===null?el([e]):gt.push(e))}return t}function Ct(e){x(e,e.v+1)}function Cs(e,t){var r=e.reactions;if(r!==null)for(var n=Vr(),a=r.length,o=0;o<a;o++){var i=r[o],l=i.f;if(!(!n&&i===Ee)){var c=(l&ht)===0;c&&lt(i,t),(l&ft)!==0?Cs(i,nr):c&&((l&_r)!==0&&ir!==null&&ir.push(i),hr(i))}}}function Me(e){if(typeof e!="object"||e===null||fr in e)return e;const t=vs(e);if(t!==Yo&&t!==Zo)return e;var r=new Map,n=$n(e),a=W(0),o=Ot,i=l=>{if(Ot===o)return l();var c=ke,f=Ot;dt(null),Oa(o);var v=l();return dt(c),Oa(f),v};return n&&r.set("length",W(e.length)),new Proxy(e,{defineProperty(l,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&li();var v=r.get(c);return v===void 0?v=i(()=>{var g=W(f.value);return r.set(c,g),g}):x(v,f.value,!0),!0},deleteProperty(l,c){var f=r.get(c);if(f===void 0){if(c in l){const v=i(()=>W(Ke));r.set(c,v),Ct(a)}}else x(f,Ke),Ct(a);return!0},get(l,c,f){if(c===fr)return e;var v=r.get(c),g=c in l;if(v===void 0&&(!g||Zt(l,c)?.writable)&&(v=i(()=>{var m=Me(g?l[c]:Ke),_=W(m);return _}),r.set(c,v)),v!==void 0){var p=s(v);return p===Ke?void 0:p}return Reflect.get(l,c,f)},getOwnPropertyDescriptor(l,c){var f=Reflect.getOwnPropertyDescriptor(l,c);if(f&&"value"in f){var v=r.get(c);v&&(f.value=s(v))}else if(f===void 0){var g=r.get(c),p=g?.v;if(g!==void 0&&p!==Ke)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(l,c){if(c===fr)return!0;var f=r.get(c),v=f!==void 0&&f.v!==Ke||Reflect.has(l,c);if(f!==void 0||Ee!==null&&(!v||Zt(l,c)?.writable)){f===void 0&&(f=i(()=>{var p=v?Me(l[c]):Ke,m=W(p);return m}),r.set(c,f));var g=s(f);if(g===Ke)return!1}return v},set(l,c,f,v){var g=r.get(c),p=c in l;if(n&&c==="length")for(var m=f;m<g.v;m+=1){var _=r.get(m+"");_!==void 0?x(_,Ke):m in l&&(_=i(()=>W(Ke)),r.set(m+"",_))}if(g===void 0)(!p||Zt(l,c)?.writable)&&(g=i(()=>W(void 0)),x(g,Me(f)),r.set(c,g));else{p=g.v!==Ke;var w=i(()=>Me(f));x(g,w)}var b=Reflect.getOwnPropertyDescriptor(l,c);if(b?.set&&b.set.call(v,f),!p){if(n&&typeof c=="string"){var y=r.get("length"),P=Number(c);Number.isInteger(P)&&P>=y.v&&x(y,P+1)}Ct(a)}return!0},ownKeys(l){s(a);var c=Reflect.ownKeys(l).filter(g=>{var p=r.get(g);return p===void 0||p.v!==Ke});for(var[f,v]of r)v.v!==Ke&&!(f in l)&&c.push(f);return c},setPrototypeOf(){ci()}})}function Ca(e){try{if(e!==null&&typeof e=="object"&&fr in e)return e[fr]}catch{}return e}function Vi(e,t){return Object.is(Ca(e),Ca(t))}var Ma,Ms,Is,Ds;function Ui(){if(Ma===void 0){Ma=window,Ms=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Is=Zt(t,"firstChild").get,Ds=Zt(t,"nextSibling").get,Aa(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Aa(r)&&(r.__t=void 0)}}function jt(e=""){return document.createTextNode(e)}function Rr(e){return Is.call(e)}function fn(e){return Ds.call(e)}function u(e,t){return Rr(e)}function q(e,t=!1){{var r=Rr(e);return r instanceof Comment&&r.data===""?fn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=fn(n);return n}function Wi(e){e.textContent=""}function Mn(){return!1}function Gi(e,t){if(t){const r=document.body;e.autofocus=!0,vr(()=>{document.activeElement===r&&e.focus()})}}let Ia=!1;function Qi(){Ia||(Ia=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function In(e){var t=ke,r=Ee;dt(null),Mt(null);try{return e()}finally{dt(t),Mt(r)}}function ya(e,t,r,n=r){e.addEventListener(t,()=>In(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Qi()}function Hi(e){Ee===null&&ke===null&&si(),ke!==null&&(ke.f&yt)!==0&&Ee===null&&ai(),Sr&&ni()}function Ki(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Bt(e,t,r,n=!0){var a=Ee;a!==null&&(a.f&Pt)!==0&&(e|=Pt);var o={ctx:He,deps:null,nodes_start:null,nodes_end:null,f:e|ht,first:null,fn:t,last:null,next:null,parent:a,b:a&&a.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{on(o),o.f|=ma}catch(c){throw tt(o),c}else t!==null&&hr(o);if(n){var i=o;if(r&&i.deps===null&&i.teardown===null&&i.nodes_start===null&&i.first===i.last&&(i.f&Lr)===0&&(i=i.first),i!==null&&(i.parent=a,a!==null&&Ki(i,a),ke!==null&&(ke.f&ft)!==0&&(e&gr)===0)){var l=ke;(l.effects??=[]).push(i)}}return o}function Ji(){return ke!==null&&!xt}function Rs(e){const t=Bt(ha,null,!1);return lt(t,st),t.teardown=e,t}function wr(e){Hi();var t=Ee.f,r=!ke&&(t&qt)!==0&&(t&ma)===0;if(r){var n=He;(n.e??=[]).push(e)}else return Os(e)}function Os(e){return Bt(va|ei,e,!1)}function Yi(e){bt.ensure();const t=Bt(gr|Lr,e,!0);return(r={})=>new Promise(n=>{r.outro?Dt(t,()=>{tt(t),n(void 0)}):(tt(t),n(void 0))})}function wa(e){return Bt(va,e,!1)}function Zi(e){return Bt(kn|Lr,e,!0)}function Sa(e,t=0){return Bt(ha|t,e,!0)}function z(e,t=[],r=[]){ks(t,r,n=>{Bt(ha,()=>e(...n.map(s)),!0)})}function Lt(e,t=0){var r=Bt(_r|t,e,!0);return r}function et(e,t=!0){return Bt(qt|Lr,e,!0,t)}function qs(e){var t=e.teardown;if(t!==null){const r=Sr,n=ke;Ra(!0),dt(null);try{t.call(null)}finally{Ra(r),dt(n)}}}function js(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&In(()=>{a.abort(en)});var n=r.next;(r.f&gr)!==0?r.parent=null:tt(r,t),r=n}}function Xi(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&qt)===0&&tt(t),t=r}}function tt(e,t=!0){var r=!1;(t||(e.f&Fo)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(Fi(e.nodes_start,e.nodes_end),r=!0),js(e,t&&!r),xn(e,0),lt(e,br);var n=e.transitions;if(n!==null)for(const o of n)o.stop();qs(e);var a=e.parent;a!==null&&a.first!==null&&Bs(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function Fi(e,t){for(;e!==null;){var r=e===t?null:fn(e);e.remove(),e=r}}function Bs(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Dt(e,t){var r=[];xa(e,r,!0),Ls(r,()=>{tt(e),t&&t()})}function Ls(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var a of e)a.out(n)}else t()}function xa(e,t,r){if((e.f&Pt)===0){if(e.f^=Pt,e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&t.push(i);for(var n=e.first;n!==null;){var a=n.next,o=(n.f&yr)!==0||(n.f&qt)!==0;xa(n,t,o?r:!1),n=a}}}function Dn(e){zs(e,!0)}function zs(e,t){if((e.f&Pt)!==0){e.f^=Pt,(e.f&st)===0&&(lt(e,ht),hr(e));for(var r=e.first;r!==null;){var n=r.next,a=(r.f&yr)!==0||(r.f&qt)!==0;zs(r,a?t:!1),r=n}if(e.transitions!==null)for(const o of e.transitions)(o.is_global||t)&&o.in()}}let Nr=!1;function Da(e){Nr=e}let Sr=!1;function Ra(e){Sr=e}let ke=null,xt=!1;function dt(e){ke=e}let Ee=null;function Mt(e){Ee=e}let Rt=null;function Vs(e){ke!==null&&(Rt===null?Rt=[e]:Rt.push(e))}let ot=null,vt=0,gt=null;function el(e){gt=e}let Us=1,sn=0,Ot=sn;function Oa(e){Ot=e}let Yt=!1;function Ws(){return++Us}function Rn(e){var t=e.f;if((t&ht)!==0)return!0;if((t&nr)!==0){var r=e.deps,n=(t&yt)!==0;if(r!==null){var a,o,i=(t&Sn)!==0,l=n&&Ee!==null&&!Yt,c=r.length;if((i||l)&&(Ee===null||(Ee.f&br)===0)){var f=e,v=f.parent;for(a=0;a<c;a++)o=r[a],(i||!o?.reactions?.includes(f))&&(o.reactions??=[]).push(f);i&&(f.f^=Sn),l&&v!==null&&(v.f&yt)===0&&(f.f^=yt)}for(a=0;a<c;a++)if(o=r[a],Rn(o)&&Ns(o),o.wv>e.wv)return!0}(!n||Ee!==null&&!Yt)&&lt(e,st)}return!1}function Gs(e,t,r=!0){var n=e.reactions;if(n!==null&&!Rt?.includes(e))for(var a=0;a<n.length;a++){var o=n[a];(o.f&ft)!==0?Gs(o,t,!1):t===o&&(r?lt(o,ht):(o.f&st)!==0&&lt(o,nr),hr(o))}}function Qs(e){var t=ot,r=vt,n=gt,a=ke,o=Yt,i=Rt,l=He,c=xt,f=Ot,v=e.f;ot=null,vt=0,gt=null,Yt=(v&yt)!==0&&(xt||!Nr||ke===null),ke=(v&(qt|gr))===0?e:null,Rt=null,Mr(e.ctx),xt=!1,Ot=++sn,e.ac!==null&&(In(()=>{e.ac.abort(en)}),e.ac=null);try{e.f|=Yn;var g=e.fn,p=g(),m=e.deps;if(ot!==null){var _;if(xn(e,vt),m!==null&&vt>0)for(m.length=vt+ot.length,_=0;_<ot.length;_++)m[vt+_]=ot[_];else e.deps=m=ot;if(!Yt||(v&ft)!==0&&e.reactions!==null)for(_=vt;_<m.length;_++)(m[_].reactions??=[]).push(e)}else m!==null&&vt<m.length&&(xn(e,vt),m.length=vt);if(Vr()&&gt!==null&&!xt&&m!==null&&(e.f&(ft|nr|ht))===0)for(_=0;_<gt.length;_++)Gs(gt[_],e);return a!==null&&a!==e&&(sn++,gt!==null&&(n===null?n=gt:n.push(...gt))),(e.f&dr)!==0&&(e.f^=dr),p}catch(w){return xs(w)}finally{e.f^=Yn,ot=t,vt=r,gt=n,ke=a,Yt=o,Rt=i,Mr(l),xt=c,Ot=f}}function tl(e,t){let r=t.reactions;if(r!==null){var n=Ko.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}r===null&&(t.f&ft)!==0&&(ot===null||!ot.includes(t))&&(lt(t,nr),(t.f&(yt|Sn))===0&&(t.f^=Sn),Ts(t),xn(t,0))}function xn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)tl(e,r[n])}function on(e){var t=e.f;if((t&br)===0){lt(e,st);var r=Ee,n=Nr;Ee=e,Nr=!0;try{(t&_r)!==0?Xi(e):js(e),qs(e);var a=Qs(e);e.teardown=typeof a=="function"?a:null,e.wv=Us;var o;fs&&Ai&&(e.f&ht)!==0&&e.deps}finally{Nr=n,Ee=r}}}async function rl(){await Promise.resolve(),Mi()}function s(e){var t=e.f,r=(t&ft)!==0;if(ke!==null&&!xt){var n=Ee!==null&&(Ee.f&br)!==0;if(!n&&!Rt?.includes(e)){var a=ke.deps;if((ke.f&Yn)!==0)e.rv<sn&&(e.rv=sn,ot===null&&a!==null&&a[vt]===e?vt++:ot===null?ot=[e]:(!Yt||!ot.includes(e))&&ot.push(e));else{(ke.deps??=[]).push(e);var o=e.reactions;o===null?e.reactions=[ke]:o.includes(ke)||o.push(ke)}}}else if(r&&e.deps===null&&e.effects===null){var i=e,l=i.parent;l!==null&&(l.f&yt)===0&&(i.f^=yt)}if(Sr){if(Xt.has(e))return Xt.get(e);if(r){i=e;var c=i.v;return((i.f&st)===0&&i.reactions!==null||Hs(i))&&(c=ba(i)),Xt.set(i,c),c}}else r&&(i=e,Rn(i)&&Ns(i));if((e.f&dr)!==0)throw e.v;return e.v}function Hs(e){if(e.v===Ke)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Xt.has(t)||(t.f&ft)!==0&&Hs(t))return!0;return!1}function Ur(e){var t=xt;try{return xt=!0,e()}finally{xt=t}}const nl=-7169;function lt(e,t){e.f=e.f&nl|t}function al(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const sl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ol(e){return sl.includes(e)}const il={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ll(e){return e=e.toLowerCase(),il[e]??e}const cl=["touchstart","touchmove"];function ul(e){return cl.includes(e)}const Ks=new Set,Fn=new Set;function Js(e,t,r,n={}){function a(o){if(n.capture||Xr.call(t,o),!o.cancelBubble)return In(()=>r?.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?vr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function ea(e,t,r,n={}){var a=Js(t,e,r,n);return()=>{e.removeEventListener(t,a,n)}}function Ze(e){for(var t=0;t<e.length;t++)Ks.add(e[t]);for(var r of Fn)r(e)}let qa=null;function Xr(e){var t=this,r=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;qa=e;var i=0,l=qa===e&&e.__root;if(l){var c=a.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=a.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(o=a[i]||e.target,o!==t){Jn(e,"currentTarget",{configurable:!0,get(){return o||r}});var v=ke,g=Ee;dt(null),Mt(null);try{for(var p,m=[];o!==null;){var _=o.assignedSlot||o.parentNode||o.host||null;try{var w=o["__"+n];if(w!=null&&(!o.disabled||e.target===o))if($n(w)){var[b,...y]=w;b.apply(o,[e,...y])}else w.call(o,e)}catch(P){p?m.push(P):p=P}if(e.cancelBubble||_===t||_===null)break;o=_}if(p){for(let P of m)queueMicrotask(()=>{throw P});throw p}}finally{e.__root=t,delete e.currentTarget,dt(v),Mt(g)}}}function Ys(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Or(e,t){var r=Ee;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function S(e,t){var r=(t&bi)!==0,n=(t&yi)!==0,a,o=!e.startsWith("<!>");return()=>{a===void 0&&(a=Ys(o?e:"<!>"+e),r||(a=Rr(a)));var i=n||Ms?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Rr(i),c=i.lastChild;Or(l,c)}else Or(i,i);return i}}function dl(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,o;return()=>{if(!o){var i=Ys(a),l=Rr(i);o=Rr(l)}var c=o.cloneNode(!0);return Or(c,c),c}}function fl(e,t){return dl(e,t,"svg")}function at(e=""){{var t=jt(e+"");return Or(t,t),t}}function G(){var e=document.createDocumentFragment(),t=document.createComment(""),r=jt();return e.append(t,r),Or(t,r),e}function h(e,t){e!==null&&e.before(t)}function B(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function vl(e,t){return hl(e,t)}const kr=new Map;function hl(e,{target:t,anchor:r,props:n={},events:a,context:o,intro:i=!0}){Ui();var l=new Set,c=g=>{for(var p=0;p<g.length;p++){var m=g[p];if(!l.has(m)){l.add(m);var _=ul(m);t.addEventListener(m,Xr,{passive:_});var w=kr.get(m);w===void 0?(document.addEventListener(m,Xr,{passive:_}),kr.set(m,1)):kr.set(m,w+1)}}};c(fa(Ks)),Fn.add(c);var f=void 0,v=Yi(()=>{var g=r??t.appendChild(jt());return Ri(g,{pending:()=>{}},p=>{if(o){V({});var m=He;m.c=o}a&&(n.$$events=a),f=e(p,n)||{},o&&U()}),()=>{for(var p of l){t.removeEventListener(p,Xr);var m=kr.get(p);--m===0?(document.removeEventListener(p,Xr),kr.delete(p)):kr.set(p,m)}Fn.delete(c),g!==r&&g.parentNode?.removeChild(g)}});return pl.set(f,v),f}let pl=new WeakMap;function C(e,t,r=!1){var n=e,a=null,o=null,i=Ke,l=r?yr:0,c=!1;const f=(m,_=!0)=>{c=!0,p(_,m)};var v=null;function g(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var m=i?a:o,_=i?o:a;m&&Dn(m),_&&Dt(_,()=>{i?o=null:a=null})}const p=(m,_)=>{if(i!==(i=m)){var w=Mn(),b=n;if(w&&(v=document.createDocumentFragment(),v.append(b=jt())),i?a??=_&&et(()=>_(b)):o??=_&&et(()=>_(b)),w){var y=qe,P=i?a:o,$=i?o:a;P&&y.skipped_effects.delete(P),$&&y.skipped_effects.add($),y.add_callback(g)}else g()}};Lt(()=>{c=!1,t(f),c||p(null,null)},l)}function ml(e,t,r){var n=e,a=Ke,o,i,l=null,c=Vr()?ki:ys;function f(){o&&Dt(o),l!==null&&(l.lastChild.remove(),n.before(l),l=null),o=i}Lt(()=>{if(c(a,a=t())){var v=n,g=Mn();g&&(l=document.createDocumentFragment(),l.append(v=jt())),i=et(()=>r(v)),g?qe.add_callback(f):f()}})}function ta(e,t){return t}function _l(e,t,r){for(var n=e.items,a=[],o=t.length,i=0;i<o;i++)xa(t[i].e,a,!0);var l=o>0&&a.length===0&&r!==null;if(l){var c=r.parentNode;Wi(c),c.append(r),n.clear(),Tt(e,t[0].prev,t[o-1].next)}Ls(a,()=>{for(var f=0;f<o;f++){var v=t[f];l||(n.delete(v.k),Tt(e,v.prev,v.next)),tt(v.e,!l)}})}function it(e,t,r,n,a,o=null){var i=e,l={flags:t,items:new Map,first:null},c=(t&gs)!==0;if(c){var f=e;i=f.appendChild(jt())}var v=null,g=!1,p=new Map,m=ga(()=>{var y=r();return $n(y)?y:y==null?[]:fa(y)}),_,w;function b(){gl(w,_,l,p,i,a,t,n,r),o!==null&&(_.length===0?v?Dn(v):v=et(()=>o(i)):v!==null&&Dt(v,()=>{v=null}))}Lt(()=>{w??=Ee,_=s(m);var y=_.length;if(!(g&&y===0)){g=y===0;var P,$,E,k;if(Mn()){var T=new Set,D=qe;for($=0;$<y;$+=1){E=_[$],k=n(E,$);var M=l.items.get(k)??p.get(k);M?(t&(An|Tn))!==0&&Zs(M,E,$,t):(P=Xs(null,l,null,null,E,k,$,a,t,r,!0),p.set(k,P)),T.add(k)}for(const[le,J]of l.items)T.has(le)||D.skipped_effects.add(J.e);D.add_callback(b)}else b();s(m)}})}function gl(e,t,r,n,a,o,i,l,c){var f=(i&fi)!==0,v=(i&(An|Tn))!==0,g=t.length,p=r.items,m=r.first,_=m,w,b=null,y,P=[],$=[],E,k,T,D;if(f)for(D=0;D<g;D+=1)E=t[D],k=l(E,D),T=p.get(k),T!==void 0&&(T.a?.measure(),(y??=new Set).add(T));for(D=0;D<g;D+=1){if(E=t[D],k=l(E,D),T=p.get(k),T===void 0){var M=n.get(k);if(M!==void 0){n.delete(k),p.set(k,M);var le=b?b.next:_;Tt(r,b,M),Tt(r,M,le),Vn(M,le,a),b=M}else{var J=_?_.e.nodes_start:a;b=Xs(J,r,b,b===null?r.first:b.next,E,k,D,o,i,c)}p.set(k,b),P=[],$=[],_=b.next;continue}if(v&&Zs(T,E,D,i),(T.e.f&Pt)!==0&&(Dn(T.e),f&&(T.a?.unfix(),(y??=new Set).delete(T))),T!==_){if(w!==void 0&&w.has(T)){if(P.length<$.length){var K=$[0],ee;b=K.prev;var me=P[0],j=P[P.length-1];for(ee=0;ee<P.length;ee+=1)Vn(P[ee],K,a);for(ee=0;ee<$.length;ee+=1)w.delete($[ee]);Tt(r,me.prev,j.next),Tt(r,b,me),Tt(r,j,K),_=K,b=j,D-=1,P=[],$=[]}else w.delete(T),Vn(T,_,a),Tt(r,T.prev,T.next),Tt(r,T,b===null?r.first:b.next),Tt(r,b,T),b=T;continue}for(P=[],$=[];_!==null&&_.k!==k;)(_.e.f&Pt)===0&&(w??=new Set).add(_),$.push(_),_=_.next;if(_===null)continue;T=_}P.push(T),b=T,_=T.next}if(_!==null||w!==void 0){for(var I=w===void 0?[]:fa(w);_!==null;)(_.e.f&Pt)===0&&I.push(_),_=_.next;var Y=I.length;if(Y>0){var ae=(i&gs)!==0&&g===0?a:null;if(f){for(D=0;D<Y;D+=1)I[D].a?.measure();for(D=0;D<Y;D+=1)I[D].a?.fix()}_l(r,I,ae)}}f&&vr(()=>{if(y!==void 0)for(T of y)T.a?.apply()}),e.first=r.first&&r.first.e,e.last=b&&b.e;for(var R of n.values())tt(R.e);n.clear()}function Zs(e,t,r,n){(n&An)!==0&&Dr(e.v,t),(n&Tn)!==0?Dr(e.i,r):e.i=r}function Xs(e,t,r,n,a,o,i,l,c,f,v){var g=(c&An)!==0,p=(c&vi)===0,m=g?p?zi(a,!1,!1):er(a):a,_=(c&Tn)===0?i:er(i),w={i:_,v:m,k:o,a:null,e:null,prev:r,next:n};try{if(e===null){var b=document.createDocumentFragment();b.append(e=jt())}return w.e=et(()=>l(e,m,_,f),$i),w.e.prev=r&&r.e,w.e.next=n&&n.e,r===null?v||(t.first=w):(r.next=w,r.e.next=w.e),n!==null&&(n.prev=w,n.e.prev=w.e),w}finally{}}function Vn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,a=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==null&&o!==n;){var i=fn(o);a.before(o),o=i}}function Tt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ie(e,t,...r){var n=e,a=ne,o;Lt(()=>{a!==(a=t())&&(o&&(tt(o),o=null),o=et(()=>a(n,...r)))},yr)}function Cr(e,t,r){var n=e,a,o,i=null,l=null;function c(){o&&(Dt(o),o=null),i&&(i.lastChild.remove(),n.before(i),i=null),o=l,l=null}Lt(()=>{if(a!==(a=t())){var f=Mn();if(a){var v=n;f&&(i=document.createDocumentFragment(),i.append(v=jt()),o&&qe.skipped_effects.add(o)),l=et(()=>r(v,a))}f?qe.add_callback(c):c()}},yr)}function bl(e,t,r,n,a,o){var i,l,c=null,f=e,v;Lt(()=>{const g=t()||null;var p=Si;g!==i&&(v&&(g===null?Dt(v,()=>{v=null,l=null}):g===l?Dn(v):tt(v)),g&&g!==l&&(v=et(()=>{if(c=document.createElementNS(p,g),Or(c,c),n){var m=c.appendChild(jt());n(c,m)}Ee.nodes_end=c,f.before(c)})),i=g,i&&(l=i))},yr)}function yl(e,t){var r=void 0,n;Lt(()=>{r!==(r=t())&&(n&&(tt(n),n=null),r&&(n=et(()=>{wa(()=>r(e))})))})}function Fs(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Fs(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function wl(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Fs(e))&&(n&&(n+=" "),n+=t);return n}function eo(e){return typeof e=="object"?wl(e):e??""}const ja=[...` 	
\r\f \v\uFEFF`];function Sl(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var a in r)if(r[a])n=n?n+" "+a:a;else if(n.length)for(var o=a.length,i=0;(i=n.indexOf(a,i))>=0;){var l=i+o;(i===0||ja.includes(n[i-1]))&&(l===n.length||ja.includes(n[l]))?n=(i===0?"":n.substring(0,i))+n.substring(l+1):i=l}}return n===""?null:n}function Ba(e,t=!1){var r=t?" !important;":";",n="";for(var a in e){var o=e[a];o!=null&&o!==""&&(n+=" "+a+": "+o+r)}return n}function Un(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function xl(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,i=0,l=!1,c=[];n&&c.push(...Object.keys(n).map(Un)),a&&c.push(...Object.keys(a).map(Un));var f=0,v=-1;const w=e.length;for(var g=0;g<w;g++){var p=e[g];if(l?p==="/"&&e[g-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[g+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?i++:p===")"&&i--,!l&&o===!1&&i===0){if(p===":"&&v===-1)v=g;else if(p===";"||g===w-1){if(v!==-1){var m=Un(e.substring(f,v).trim());if(!c.includes(m)){p!==";"&&g++;var _=e.substring(f,g).trim();r+=" "+_+";"}}f=g+1,v=-1}}}}return n&&(r+=Ba(n)),a&&(r+=Ba(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ae(e,t,r,n,a,o){var i=e.__className;if(i!==r||i===void 0){var l=Sl(r,n,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(o&&a!==o)for(var c in o){var f=!!o[c];(a==null||f!==!!a[c])&&e.classList.toggle(c,f)}return o}function Wn(e,t={},r,n){for(var a in r){var o=r[a];t[a]!==o&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,n))}}function to(e,t,r,n){var a=e.__style;if(a!==t){var o=xl(t,n);o==null?e.removeAttribute("style"):e.style.cssText=o,e.__style=t}else n&&(Array.isArray(n)?(Wn(e,r?.[0],n[0]),Wn(e,r?.[1],n[1],"important")):Wn(e,r,n));return n}function Pn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!$n(t))return Pi();for(var n of e.options)n.selected=t.includes(rn(n));return}for(n of e.options){var a=rn(n);if(Vi(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ro(e){var t=new MutationObserver(()=>{Pn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Rs(()=>{t.disconnect()})}function cr(e,t,r=t){var n=!0;ya(e,"change",a=>{var o=a?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(o),rn);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");i=l&&rn(l)}r(i)}),wa(()=>{var a=t();if(Pn(e,a,n),n&&a===void 0){var o=e.querySelector(":checked");o!==null&&(a=rn(o),r(a))}e.__value=a,n=!1}),ro(e)}function rn(e){return"__value"in e?e.__value:e.value}const Jr=Symbol("class"),Yr=Symbol("style"),no=Symbol("is custom element"),ao=Symbol("is html");function Pl(e,t){var r=On(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Gn(e,t){var r=On(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function El(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function pr(e,t,r,n){var a=On(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[ti]=r),r==null?e.removeAttribute(t):typeof r!="string"&&so(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function $l(e,t,r,n,a=!1,o=!1){var i=On(e),l=i[no],c=!i[ao],f=t||{},v=e.tagName==="OPTION";for(var g in t)g in r||(r[g]=null);r.class?r.class=eo(r.class):r[Jr]&&(r.class=null),r[Yr]&&(r.style??=null);var p=so(e);for(const E in r){let k=r[E];if(v&&E==="value"&&k==null){e.value=e.__value="",f[E]=k;continue}if(E==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ae(e,m,k,n,t?.[Jr],r[Jr]),f[E]=k,f[Jr]=r[Jr];continue}if(E==="style"){to(e,k,t?.[Yr],r[Yr]),f[E]=k,f[Yr]=r[Yr];continue}var _=f[E];if(!(k===_&&!(k===void 0&&e.hasAttribute(E)))){f[E]=k;var w=E[0]+E[1];if(w!=="$$")if(w==="on"){const T={},D="$$"+E;let M=E.slice(2);var b=ol(M);if(al(M)&&(M=M.slice(0,-7),T.capture=!0),!b&&_){if(k!=null)continue;e.removeEventListener(M,f[D],T),f[D]=null}if(k!=null)if(b)e[`__${M}`]=k,Ze([M]);else{let le=function(J){f[E].call(this,J)};var $=le;f[D]=Js(M,e,le,T)}else b&&(e[`__${M}`]=void 0)}else if(E==="style")pr(e,E,k);else if(E==="autofocus")Gi(e,!!k);else if(!l&&(E==="__value"||E==="value"&&k!=null))e.value=e.__value=k;else if(E==="selected"&&v)El(e,k);else{var y=E;c||(y=ll(y));var P=y==="defaultValue"||y==="defaultChecked";if(k==null&&!l&&!P)if(i[E]=null,y==="value"||y==="checked"){let T=e;const D=t===void 0;if(y==="value"){let M=T.defaultValue;T.removeAttribute(y),T.defaultValue=M,T.value=T.__value=D?M:null}else{let M=T.defaultChecked;T.removeAttribute(y),T.defaultChecked=M,T.checked=D?M:!1}}else e.removeAttribute(E);else P||p.includes(y)&&(l||typeof k!="string")?(e[y]=k,y in i&&(i[y]=Ke)):typeof k!="function"&&pr(e,y,k)}}}return f}function La(e,t,r=[],n=[],a,o=!1,i=!1){ks(r,n,l=>{var c=void 0,f={},v=e.nodeName==="SELECT",g=!1;if(Lt(()=>{var m=t(...l.map(s)),_=$l(e,c,m,a,o,i);g&&v&&"value"in m&&Pn(e,m.value);for(let b of Object.getOwnPropertySymbols(f))m[b]||tt(f[b]);for(let b of Object.getOwnPropertySymbols(m)){var w=m[b];b.description===xi&&(!c||w!==c[b])&&(f[b]&&tt(f[b]),f[b]=et(()=>yl(e,()=>w))),_[b]=w}c=_}),v){var p=e;wa(()=>{Pn(p,c.value,!0),ro(p)})}g=!0})}function On(e){return e.__attributes??={[no]:e.nodeName.includes("-"),[ao]:e.namespaceURI===wi}}var za=new Map;function so(e){var t=e.getAttribute("is")||e.nodeName,r=za.get(t);if(r)return r;za.set(t,r=[]);for(var n,a=e,o=Element.prototype;o!==a;){n=Jo(a);for(var i in n)n[i].set&&r.push(i);a=vs(a)}return r}function De(e,t,r=t){var n=new WeakSet;ya(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Qn(e)?Hn(o):o,r(o),qe!==null&&n.add(qe),await rl(),o!==(o=t())){var i=e.selectionStart,l=e.selectionEnd;e.value=o??"",l!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(l,e.value.length))}}),Ur(t)==null&&e.value&&(r(Qn(e)?Hn(e.value):e.value),qe!==null&&n.add(qe)),Sa(()=>{var a=t();if(e===document.activeElement){var o=gn??qe;if(n.has(o))return}Qn(e)&&a===Hn(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function kl(e,t,r=t){ya(e,"change",n=>{var a=n?e.defaultChecked:e.checked;r(a)}),Ur(t)==null&&r(e.checked),Sa(()=>{var n=t();e.checked=!!n})}function Qn(e){var t=e.type;return t==="number"||t==="range"}function Hn(e){return e===""?null:+e}let _n=!1;function Al(e){var t=_n;try{return _n=!1,[e(),_n]}finally{_n=t}}const Tl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ue(e,t,r){return new Proxy({props:e,exclude:t},Tl)}const Nl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Kr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Kr(a)&&(a=a());const o=Zt(a,t);if(o&&o.set)return o.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Kr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Zt(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===fr||t===ms)return!1;for(let r of e.props)if(Kr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Kr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function fe(...e){return new Proxy({props:e},Nl)}function Be(e,t,r,n){var a=!zr||(r&pi)!==0,o=(r&_i)!==0,i=(r&gi)!==0,l=n,c=!0,f=()=>(c&&(c=!1,l=i?Ur(n):n),l),v;if(o){var g=fr in e||ms in e;v=Zt(e,t)?.set??(g&&t in e?$=>e[t]=$:void 0)}var p,m=!1;o?[p,m]=Al(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),v&&(a&&ii(),v(p)));var _;if(a?_=()=>{var $=e[t];return $===void 0?f():(c=!0,$)}:_=()=>{var $=e[t];return $!==void 0&&(l=void 0),$===void 0?l:$},a&&(r&mi)===0)return _;if(v){var w=e.$$legacy;return(function($,E){return arguments.length>0?((!a||!E||w||m)&&v(E?_():$),$):_()})}var b=!1,y=((r&hi)!==0?Cn:ga)(()=>(b=!1,_()));o&&s(y);var P=Ee;return(function($,E){if(arguments.length>0){const k=E?s(y):a&&o?Me($):$;return x(y,k),b=!0,l!==void 0&&(l=k),$}return Sr&&b||(P.f&br)!==0?y.v:s(y)})}function oo(e){He===null&&_s(),zr&&He.l!==null?Ml(He).m.push(e):wr(()=>{const t=Ur(e);if(typeof t=="function")return t})}function Cl(e){He===null&&_s(),oo(()=>()=>Ur(e))}function Ml(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Il="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Il);const Dl="modulepreload",Rl=function(e){return"/"+e},Va={},Ol=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){let f=function(v){return Promise.all(v.map(g=>Promise.resolve(g).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var i=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");a=f(r.map(v=>{if(v=Rl(v),v in Va)return;Va[v]=!0;const g=v.endsWith(".css"),p=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${p}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":Dl,g||(m.as="script"),m.crossOrigin="",m.href=v,c&&m.setAttribute("nonce",c),document.head.appendChild(m),g)return new Promise((_,w)=>{m.addEventListener("load",_),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${v}`)))})}))}function o(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return a.then(l=>{for(const c of l||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};class ql extends Map{#e=new Map;#r=W(0);#c=W(0);#u=Ot||-1;constructor(t){if(super(),t){for(var[r,n]of t)super.set(r,n);this.#c.v=super.size}}#l(t){return Ot===this.#u?W(t):er(t)}has(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else return s(this.#r),!1}return s(n),!0}forEach(t,r){this.#o(),super.forEach(t,r)}get(t){var r=this.#e,n=r.get(t);if(n===void 0){var a=super.get(t);if(a!==void 0)n=this.#l(0),r.set(t,n);else{s(this.#r);return}}return s(n),super.get(t)}set(t,r){var n=this.#e,a=n.get(t),o=super.get(t),i=super.set(t,r),l=this.#r;if(a===void 0)a=this.#l(0),n.set(t,a),x(this.#c,super.size),Ct(l);else if(o!==r){Ct(a);var c=l.reactions===null?null:new Set(l.reactions),f=c===null||!a.reactions?.every(v=>c.has(v));f&&Ct(l)}return i}delete(t){var r=this.#e,n=r.get(t),a=super.delete(t);return n!==void 0&&(r.delete(t),x(this.#c,super.size),x(n,-1),Ct(this.#r)),a}clear(){if(super.size!==0){super.clear();var t=this.#e;x(this.#c,0);for(var r of t.values())x(r,-1);Ct(this.#r),t.clear()}}#o(){s(this.#r);var t=this.#e;if(this.#c.v!==t.size){for(var r of super.keys())if(!t.has(r)){var n=this.#l(0);t.set(r,n)}}for([,n]of this.#e)s(n)}keys(){return s(this.#r),super.keys()}values(){return this.#o(),super.values()}entries(){return this.#o(),super.entries()}[Symbol.iterator](){return this.entries()}get size(){return s(this.#c),super.size}}class jl{#e;#r;constructor(t,r){this.#e=t,this.#r=_a(r)}get current(){return this.#r(),this.#e()}}const Bl=/\(.+\)/,Ll=new Set(["all","print","screen","and","or","not","only"]);class io extends jl{constructor(t,r){let n=Bl.test(t)||t.split(/[\s,]+/).some(o=>Ll.has(o.trim()))?t:`(${t})`;const a=window.matchMedia(n);super(()=>a.matches,o=>ea(a,"change",o))}}const zl=typeof window<"u"?window:void 0;function Vl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Ul{#e;#r;constructor(t={}){const{window:r=zl,document:n=r?.document}=t;r!==void 0&&(this.#e=n,this.#r=_a(a=>{const o=ea(r,"focusin",a),i=ea(r,"focusout",a);return()=>{o(),i()}}))}get current(){return this.#r?.(),this.#e?Vl(this.#e):null}}new Ul;function Wl(e){return typeof e=="function"}function Gl(e,t){if(Wl(e)){const n=e();return n===void 0?t:n}return e===void 0?t:e}function Ql(e,t){let r=W(null);const n=Z(()=>Gl(t,250));function a(...o){if(s(r))s(r).timeout&&clearTimeout(s(r).timeout);else{let i,l;const c=new Promise((f,v)=>{i=f,l=v});x(r,{timeout:null,runner:null,promise:c,resolve:i,reject:l},!0)}return s(r).runner=async()=>{if(!s(r))return;const i=s(r);x(r,null);try{i.resolve(await e.apply(this,o))}catch(l){i.reject(l)}},s(r).timeout=setTimeout(s(r).runner,s(n)),s(r).promise}return a.cancel=async()=>{(!s(r)||s(r).timeout===null)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||s(r).timeout===null)||(clearTimeout(s(r).timeout),s(r).reject("Cancelled"),x(r,null))},a.runScheduledNow=async()=>{(!s(r)||!s(r).timeout)&&(await new Promise(o=>setTimeout(o,0)),!s(r)||!s(r).timeout)||(clearTimeout(s(r).timeout),s(r).timeout=null,await s(r).runner?.())},Object.defineProperty(a,"pending",{enumerable:!0,get(){return!!s(r)?.timeout}}),a}function Hl(e,t,r){if(!t||!r||!e.length)return[];const n=new Date(t),a=new Date(r),o=e.filter(i=>{const l=new Date(i.dateTimeService);return l>=n&&l<=a});return o.length?nn(o.flatMap(i=>i.neededConsolidatedForDate)):[]}function Fr(e){if(!e?.trim())return null;try{return JSON.parse(e)}catch(t){return console.warn("[ProductsStore] Erreur parsing JSON:",t),null}}function bn(e){return e?.length?e.filter(t=>t.quantity!=null&&t.unit).map(t=>({q:typeof t.quantity=="number"?t.quantity:parseFloat(t.quantity),u:t.unit})).filter(t=>!isNaN(t.q)):[]}function nn(e){if(!e?.length)return[];const t=new Map;return e.forEach(r=>{if(!r.q||!r.u||typeof r.q!="number"||isNaN(r.q))return;const n=t.get(r.u)||0;t.set(r.u,n+r.q)}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function yn(e,t){if(!e?.length)return{numeric:[],display:"✅ Complet"};if(!t?.length){const l=e.map(c=>ur(c.q.toString(),c.u)).join(" et ");return{numeric:e,display:l}}const r=new Map,n=new Map;e.forEach(l=>{const c=parseFloat(l.q);isNaN(c)||r.set(l.u,(r.get(l.u)||0)+c)}),t.forEach(l=>{n.set(l.u,(n.get(l.u)||0)+l.q)});const a=[],o=[];r.forEach((l,c)=>{const f=n.get(c)||0,v=l-f;v>0&&(a.push({q:v,u:c}),o.push(ur(v.toString(),c)))});const i=o.length>0?o.join(" et "):"✅ Complet";return{numeric:a,display:i}}function Ar(e){return e?.length?e.map(t=>ur(t.q.toString(),t.u)).join(" et "):"-"}function ur(e,t){const r=parseFloat(e);if(isNaN(r))return`${e} ${t}`;if((t==="gr."||t==="ml")&&r>=1e3){const n=r/1e3,a=t==="gr."?"kg":"l.";let i=(Math.round(n*100)/100).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),i.endsWith(",00")&&(i=i.slice(0,-3)),`${i} ${a}`}if(!["gr.","ml","kg","l."].includes(t)){let a=(Math.round(r*10)/10).toString();return a.endsWith(",0")&&(a=a.slice(0,-2)),`${a} ${t}`}return`${r} ${t}`}function Ua(e){return Fr(e)}function Pa(e){if(!e?.length)return[];const t=new Map;return e.forEach(({q:r,u:n})=>{if(typeof r=="number"&&!isNaN(r)){const a=t.get(n)||0;t.set(n,a+r)}}),Array.from(t.entries()).map(([r,n])=>({q:n,u:r}))}function Kl(e,t,r){if(!e)return 0;const n=typeof t=="string"?new Date(t):t,a=typeof r=="string"?new Date(r):r;return Object.entries(e).filter(([o])=>{const i=new Date(o);return i>=n&&i<=a}).reduce((o,[i,l])=>o+(l.totalAssiettes||0),0)}function Jl(e){return e?Object.values(e).some(t=>t.recipes?.some(r=>r.q!==void 0||r.u!==void 0)):!1}function Yl(e){return e?Object.entries(e).map(([t,r])=>({dateTimeService:t,neededConsolidatedForDate:r.totalConsolidated.map(n=>({q:n.q,u:n.u})),recipeNames:r.recipes?.map(n=>n.r)||[],totalAssiettes:r.totalAssiettes||0})):[]}function Zl(e){if(!e)return[];const t=[];return Object.entries(e).forEach(([r,n])=>{n.recipes?.forEach(a=>{t.push({...a,date:r,dateTimeService:r})})}),t}function Xl(e){if(!e)return[];const t=Object.values(e).flatMap(r=>r.totalConsolidated);return Pa(t)}function Fl(e,t,r=""){if(e.status==="cancelled")return!1;const n=e.deliveryDate||e.$createdAt;return!n||n>t||r&&e.$createdAt<r?!1:e.status==="delivered"||e.status==="pending"||e.status==="ordered"&&n<=t}function Wa(e,t){let r=[],n="";e.stockParsed?.dateTime&&e.stockParsed.dateTime<=t&&(r=[{q:parseFloat(e.stockParsed.quantity),u:e.stockParsed.unit}],n=e.stockParsed.dateTime);const a=[];if(e.purchases)for(const c of e.purchases)Fl(c,t,n)&&a.push({q:c.quantity,u:c.unit});const o=ec(e,t),i=[...r,...a],l=Pa(i);return tc(l,o)}function ec(e,t){if(!e.byDate)return[];const r=[];for(const[n,a]of Object.entries(e.byDate))if(n<=t){const i=a.totalConsolidated;i&&r.push(...i)}return Pa(r)}function tc(e,t){const r=new Map,n=new Map;e.forEach(({q:i,u:l})=>{r.set(l,(r.get(l)||0)+i)}),t.forEach(({q:i,u:l})=>{n.set(l,(n.get(l)||0)+i)});const a=[],o=new Set([...r.keys(),...n.keys()]);for(const i of o){const l=r.get(i)||0,c=n.get(i)||0,f=l-c;Math.abs(f)>.001&&a.push({q:f,u:i})}return a}function Ga(e){if(!e?.length)return"Équilibré";const t=e.filter(n=>n.q>0),r=e.filter(n=>n.q<0);if(t.length>0&&r.length>0){const n=t.map(o=>ur(o.q.toString(),o.u)).join(" et "),a=r.map(o=>ur(Math.abs(o.q).toString(),o.u)).join(" et ");return`${n} disponibles, ${a} manquant${r.length>1?"s":""}`}else return t.length>0?t.map(n=>ur(n.q.toString(),n.u)).join(" et ")+" disponibles":r.length>0?r.map(n=>ur(Math.abs(n.q).toString(),n.u)).join(" et ")+` manquant${r.length>1?"s":""}`:"Équilibré"}function rc(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}class A{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}}A.equal=(e,t)=>new A("equal",e,t).toString();A.notEqual=(e,t)=>new A("notEqual",e,t).toString();A.lessThan=(e,t)=>new A("lessThan",e,t).toString();A.lessThanEqual=(e,t)=>new A("lessThanEqual",e,t).toString();A.greaterThan=(e,t)=>new A("greaterThan",e,t).toString();A.greaterThanEqual=(e,t)=>new A("greaterThanEqual",e,t).toString();A.isNull=e=>new A("isNull",e).toString();A.isNotNull=e=>new A("isNotNull",e).toString();A.between=(e,t,r)=>new A("between",e,[t,r]).toString();A.startsWith=(e,t)=>new A("startsWith",e,t).toString();A.endsWith=(e,t)=>new A("endsWith",e,t).toString();A.select=e=>new A("select",void 0,e).toString();A.search=(e,t)=>new A("search",e,t).toString();A.orderDesc=e=>new A("orderDesc",e).toString();A.orderAsc=e=>new A("orderAsc",e).toString();A.orderRandom=()=>new A("orderRandom").toString();A.cursorAfter=e=>new A("cursorAfter",void 0,e).toString();A.cursorBefore=e=>new A("cursorBefore",void 0,e).toString();A.limit=e=>new A("limit",void 0,e).toString();A.offset=e=>new A("offset",void 0,e).toString();A.contains=(e,t)=>new A("contains",e,t).toString();A.notContains=(e,t)=>new A("notContains",e,t).toString();A.notSearch=(e,t)=>new A("notSearch",e,t).toString();A.notBetween=(e,t,r)=>new A("notBetween",e,[t,r]).toString();A.notStartsWith=(e,t)=>new A("notStartsWith",e,t).toString();A.notEndsWith=(e,t)=>new A("notEndsWith",e,t).toString();A.createdBefore=e=>new A("createdBefore",void 0,e).toString();A.createdAfter=e=>new A("createdAfter",void 0,e).toString();A.createdBetween=(e,t)=>new A("createdBetween",void 0,[e,t]).toString();A.updatedBefore=e=>new A("updatedBefore",void 0,e).toString();A.updatedAfter=e=>new A("updatedAfter",void 0,e).toString();A.updatedBetween=(e,t)=>new A("updatedBetween",void 0,[e,t]).toString();A.or=e=>new A("or",void 0,e.map(t=>JSON.parse(t))).toString();A.and=e=>new A("and",void 0,e.map(t=>JSON.parse(t))).toString();A.distanceEqual=(e,t,r,n=!0)=>new A("distanceEqual",e,[[t,r,n]]).toString();A.distanceNotEqual=(e,t,r,n=!0)=>new A("distanceNotEqual",e,[[t,r,n]]).toString();A.distanceGreaterThan=(e,t,r,n=!0)=>new A("distanceGreaterThan",e,[[t,r,n]]).toString();A.distanceLessThan=(e,t,r,n=!0)=>new A("distanceLessThan",e,[[t,r,n]]).toString();A.intersects=(e,t)=>new A("intersects",e,[t]).toString();A.notIntersects=(e,t)=>new A("notIntersects",e,[t]).toString();A.crosses=(e,t)=>new A("crosses",e,[t]).toString();A.notCrosses=(e,t)=>new A("notCrosses",e,[t]).toString();A.overlaps=(e,t)=>new A("overlaps",e,[t]).toString();A.notOverlaps=(e,t)=>new A("notOverlaps",e,[t]).toString();A.touches=(e,t)=>new A("touches",e,[t]).toString();A.notTouches=(e,t)=>new A("notTouches",e,[t]).toString();var lo,co;class qr{static custom(t){return t}static unique(t=7){const r=rc(qr,lo,"m",co).call(qr);let n="";for(let a=0;a<t;a++){const o=Math.floor(Math.random()*16).toString(16);n+=o}return r+n}}lo=qr,co=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Qa;(function(e){e.Totp="totp"})(Qa||(Qa={}));var Ha;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Ha||(Ha={}));var Ka;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Ka||(Ka={}));var Ja;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Ja||(Ja={}));var Ya;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Ya||(Ya={}));var Za;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Za||(Za={}));var Xa;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Xa||(Xa={}));var Fa;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Fa||(Fa={}));var es;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(es||(es={}));class nc{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(t,r){this.keyToValue.set(t,r),this.valueToKey.set(r,t)}getByKey(t){return this.keyToValue.get(t)}getByValue(t){return this.valueToKey.get(t)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class uo{constructor(t){this.generateIdentifier=t,this.kv=new nc}register(t,r){this.kv.getByValue(t)||(r||(r=this.generateIdentifier(t)),this.kv.set(r,t))}clear(){this.kv.clear()}getIdentifier(t){return this.kv.getByValue(t)}getValue(t){return this.kv.getByKey(t)}}class ac extends uo{constructor(){super(t=>t.name),this.classToAllowedProps=new Map}register(t,r){typeof r=="object"?(r.allowProps&&this.classToAllowedProps.set(t,r.allowProps),super.register(t,r.identifier)):super.register(t,r)}getAllowedProps(t){return this.classToAllowedProps.get(t)}}function sc(e){if("values"in Object)return Object.values(e);const t=[];for(const r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}function oc(e,t){const r=sc(e);if("find"in r)return r.find(t);const n=r;for(let a=0;a<n.length;a++){const o=n[a];if(t(o))return o}}function jr(e,t){Object.entries(e).forEach(([r,n])=>t(n,r))}function wn(e,t){return e.indexOf(t)!==-1}function ts(e,t){for(let r=0;r<e.length;r++){const n=e[r];if(t(n))return n}}class ic{constructor(){this.transfomers={}}register(t){this.transfomers[t.name]=t}findApplicable(t){return oc(this.transfomers,r=>r.isApplicable(t))}findByName(t){return this.transfomers[t]}}const lc=e=>Object.prototype.toString.call(e).slice(8,-1),fo=e=>typeof e>"u",cc=e=>e===null,ln=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,ra=e=>ln(e)&&Object.keys(e).length===0,tr=e=>Array.isArray(e),uc=e=>typeof e=="string",dc=e=>typeof e=="number"&&!isNaN(e),fc=e=>typeof e=="boolean",vc=e=>e instanceof RegExp,cn=e=>e instanceof Map,un=e=>e instanceof Set,vo=e=>lc(e)==="Symbol",hc=e=>e instanceof Date&&!isNaN(e.valueOf()),pc=e=>e instanceof Error,rs=e=>typeof e=="number"&&isNaN(e),mc=e=>fc(e)||cc(e)||fo(e)||dc(e)||uc(e)||vo(e),_c=e=>typeof e=="bigint",gc=e=>e===1/0||e===-1/0,bc=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),yc=e=>e instanceof URL,ho=e=>e.replace(/\./g,"\\."),Kn=e=>e.map(String).map(ho).join("."),an=e=>{const t=[];let r="";for(let a=0;a<e.length;a++){let o=e.charAt(a);if(o==="\\"&&e.charAt(a+1)==="."){r+=".",a++;continue}if(o==="."){t.push(r),r="";continue}r+=o}const n=r;return t.push(n),t};function At(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const po=[At(fo,"undefined",()=>null,()=>{}),At(_c,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),At(hc,"Date",e=>e.toISOString(),e=>new Date(e)),At(pc,"Error",(e,t)=>{const r={name:e.name,message:e.message};return t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r},(e,t)=>{const r=new Error(e.message);return r.name=e.name,r.stack=e.stack,t.allowedErrorProps.forEach(n=>{r[n]=e[n]}),r}),At(vc,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),r=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,r)}),At(un,"set",e=>[...e.values()],e=>new Set(e)),At(cn,"map",e=>[...e.entries()],e=>new Map(e)),At(e=>rs(e)||gc(e),"number",e=>rs(e)?"NaN":e>0?"Infinity":"-Infinity",Number),At(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),At(yc,"URL",e=>e.toString(),e=>new URL(e))];function qn(e,t,r,n){return{isApplicable:e,annotation:t,transform:r,untransform:n}}const mo=qn((e,t)=>vo(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,r)=>{const n=r.symbolRegistry.getValue(t[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),wc=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),_o=qn(bc,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const r=wc[t[1]];if(!r)throw new Error("Trying to deserialize unknown typed array");return new r(e)});function go(e,t){return e?.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}const bo=qn(go,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const r=t.classRegistry.getAllowedProps(e.constructor);if(!r)return{...e};const n={};return r.forEach(a=>{n[a]=e[a]}),n},(e,t,r)=>{const n=r.classRegistry.getValue(t[1]);if(!n)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(n.prototype),e)}),yo=qn((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,r)=>{const n=r.customTransformerRegistry.findByName(t[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(e)}),Sc=[bo,mo,yo,_o],ns=(e,t)=>{const r=ts(Sc,a=>a.isApplicable(e,t));if(r)return{value:r.transform(e,t),type:r.annotation(e,t)};const n=ts(po,a=>a.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation}},wo={};po.forEach(e=>{wo[e.annotation]=e});const xc=(e,t,r)=>{if(tr(t))switch(t[0]){case"symbol":return mo.untransform(e,t,r);case"class":return bo.untransform(e,t,r);case"custom":return yo.untransform(e,t,r);case"typed-array":return _o.untransform(e,t,r);default:throw new Error("Unknown transformation: "+t)}else{const n=wo[t];if(!n)throw new Error("Unknown transformation: "+t);return n.untransform(e,r)}},Tr=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const r=e.keys();for(;t>0;)r.next(),t--;return r.next().value};function So(e){if(wn(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(wn(e,"prototype"))throw new Error("prototype is not allowed as a property");if(wn(e,"constructor"))throw new Error("constructor is not allowed as a property")}const Pc=(e,t)=>{So(t);for(let r=0;r<t.length;r++){const n=t[r];if(un(e))e=Tr(e,+n);else if(cn(e)){const a=+n,o=+t[++r]==0?"key":"value",i=Tr(e,a);switch(o){case"key":e=i;break;case"value":e=e.get(i);break}}else e=e[n]}return e},na=(e,t,r)=>{if(So(t),t.length===0)return r(e);let n=e;for(let o=0;o<t.length-1;o++){const i=t[o];if(tr(n)){const l=+i;n=n[l]}else if(ln(n))n=n[i];else if(un(n)){const l=+i;n=Tr(n,l)}else if(cn(n)){if(o===t.length-2)break;const c=+i,f=+t[++o]==0?"key":"value",v=Tr(n,c);switch(f){case"key":n=v;break;case"value":n=n.get(v);break}}}const a=t[t.length-1];if(tr(n)?n[+a]=r(n[+a]):ln(n)&&(n[a]=r(n[a])),un(n)){const o=Tr(n,+a),i=r(o);o!==i&&(n.delete(o),n.add(i))}if(cn(n)){const o=+t[t.length-2],i=Tr(n,o);switch(+a==0?"key":"value"){case"key":{const c=r(i);n.set(c,n.get(i)),c!==i&&n.delete(i);break}case"value":{n.set(i,r(n.get(i)));break}}}return e};function aa(e,t,r=[]){if(!e)return;if(!tr(e)){jr(e,(o,i)=>aa(o,t,[...r,...an(i)]));return}const[n,a]=e;a&&jr(a,(o,i)=>{aa(o,t,[...r,...an(i)])}),t(n,r)}function Ec(e,t,r){return aa(t,(n,a)=>{e=na(e,a,o=>xc(o,n,r))}),e}function $c(e,t){function r(n,a){const o=Pc(e,an(a));n.map(an).forEach(i=>{e=na(e,i,()=>o)})}if(tr(t)){const[n,a]=t;n.forEach(o=>{e=na(e,an(o),()=>e)}),a&&jr(a,r)}else jr(t,r);return e}const kc=(e,t)=>ln(e)||tr(e)||cn(e)||un(e)||go(e,t);function Ac(e,t,r){const n=r.get(e);n?n.push(t):r.set(e,[t])}function Tc(e,t){const r={};let n;return e.forEach(a=>{if(a.length<=1)return;t||(a=a.map(l=>l.map(String)).sort((l,c)=>l.length-c.length));const[o,...i]=a;o.length===0?n=i.map(Kn):r[Kn(o)]=i.map(Kn)}),n?ra(r)?[n]:[n,r]:ra(r)?void 0:r}const xo=(e,t,r,n,a=[],o=[],i=new Map)=>{const l=mc(e);if(!l){Ac(e,a,t);const m=i.get(e);if(m)return n?{transformedValue:null}:m}if(!kc(e,r)){const m=ns(e,r),_=m?{transformedValue:m.value,annotations:[m.type]}:{transformedValue:e};return l||i.set(e,_),_}if(wn(o,e))return{transformedValue:null};const c=ns(e,r),f=c?.value??e,v=tr(f)?[]:{},g={};jr(f,(m,_)=>{if(_==="__proto__"||_==="constructor"||_==="prototype")throw new Error(`Detected property ${_}. This is a prototype pollution risk, please remove it from your object.`);const w=xo(m,t,r,n,[...a,_],[...o,e],i);v[_]=w.transformedValue,tr(w.annotations)?g[_]=w.annotations:ln(w.annotations)&&jr(w.annotations,(b,y)=>{g[ho(_)+"."+y]=b})});const p=ra(g)?{transformedValue:v,annotations:c?[c.type]:void 0}:{transformedValue:v,annotations:c?[c.type,g]:g};return l||i.set(e,p),p};function Po(e){return Object.prototype.toString.call(e).slice(8,-1)}function as(e){return Po(e)==="Array"}function Nc(e){if(Po(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function Cc(e,t,r,n,a){const o={}.propertyIsEnumerable.call(n,t)?"enumerable":"nonenumerable";o==="enumerable"&&(e[t]=r),a&&o==="nonenumerable"&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}function sa(e,t={}){if(as(e))return e.map(a=>sa(a,t));if(!Nc(e))return e;const r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertySymbols(e);return[...r,...n].reduce((a,o)=>{if(as(t.props)&&!t.props.includes(o))return a;const i=e[o],l=sa(i,t);return Cc(a,o,l,e,t.nonenumerable),a},{})}class Le{constructor({dedupe:t=!1}={}){this.classRegistry=new ac,this.symbolRegistry=new uo(r=>r.description??""),this.customTransformerRegistry=new ic,this.allowedErrorProps=[],this.dedupe=t}serialize(t){const r=new Map,n=xo(t,r,this,this.dedupe),a={json:n.transformedValue};n.annotations&&(a.meta={...a.meta,values:n.annotations});const o=Tc(r,this.dedupe);return o&&(a.meta={...a.meta,referentialEqualities:o}),a}deserialize(t){const{json:r,meta:n}=t;let a=sa(r);return n?.values&&(a=Ec(a,n.values,this)),n?.referentialEqualities&&(a=$c(a,n.referentialEqualities)),a}stringify(t){return JSON.stringify(this.serialize(t))}parse(t){return this.deserialize(JSON.parse(t))}registerClass(t,r){this.classRegistry.register(t,r)}registerSymbol(t,r){this.symbolRegistry.register(t,r)}registerCustom(t,r){this.customTransformerRegistry.register({name:r,...t})}allowErrorProps(...t){this.allowedErrorProps.push(...t)}}Le.defaultInstance=new Le;Le.serialize=Le.defaultInstance.serialize.bind(Le.defaultInstance);Le.deserialize=Le.defaultInstance.deserialize.bind(Le.defaultInstance);Le.stringify=Le.defaultInstance.stringify.bind(Le.defaultInstance);Le.parse=Le.defaultInstance.parse.bind(Le.defaultInstance);Le.registerClass=Le.defaultInstance.registerClass.bind(Le.defaultInstance);Le.registerSymbol=Le.defaultInstance.registerSymbol.bind(Le.defaultInstance);Le.registerCustom=Le.defaultInstance.registerCustom.bind(Le.defaultInstance);Le.allowErrorProps=Le.defaultInstance.allowErrorProps.bind(Le.defaultInstance);function Eo(e,t){return{$id:e.$id,mainId:e.mainId,productHugoUuid:e.productHugoUuid,productName:e.productName,...t}}async function $t(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Mc(e,t,r=100){try{const{databases:n,config:a}=await $t(),o=await n.listDocuments(a.APPWRITE_CONFIG.databaseId,a.APPWRITE_CONFIG.collections.purchases,[A.greaterThan("$updatedAt",t),A.equal("mainId",e),A.limit(r),A.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${o.documents.length} purchases modifiés chargés`),o.documents}catch(n){return console.error("[Appwrite Interactions] Erreur chargement purchases modifiés:",n),[]}}async function $o(e,t){const{lastSync:r,limit:n=100}=t;try{const{databases:a,config:o}=await $t();if(!r)return console.log("[Appwrite Interactions] Chargement complet des produits"),(await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[A.equal("mainId",e),A.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"]),A.limit(n)])).documents;const i=await a.listDocuments(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.products,[A.greaterThan("$updatedAt",r),A.equal("mainId",e),A.limit(n),A.select(["*","purchases.$id","purchases.unit","purchases.quantity","purchases.store","purchases.who","purchases.notes","purchases.price","purchases.status","purchases.deliveryDate","purchases.orderDate","purchases.createdBy","purchases.products.$id"])]);return i.documents.length>0&&console.log(`[Appwrite Interactions] ${i.documents.length} produits synchronisés avec leurs purchases`),i.documents}catch(a){console.error(`[Appwrite Interactions] Erreur sync produits avec purchases pour mainId ${e}:`,a);const o=a instanceof Error?a.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${o}`)}}async function mr(e,t){try{const{databases:r,config:n}=await $t();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function Jt(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour création`);console.log(`[Appwrite Interactions] Création produit ${e} sur Appwrite...`);const a=Eo(n,t),{databases:o,config:i}=await $t(),l=await o.createDocument(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,e,a);return console.log(`[Appwrite Interactions] Produit ${e} créé avec succès`),l}catch(n){console.error(`[Appwrite Interactions] Erreur création produit ${e}:`,n);const a=n instanceof Error?n.message:"Erreur inconnue";throw new Error(`Échec de la création du produit: ${a}`)}}async function ko(e,t){if(!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await mr(e,{store:r||void 0});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function Ao(e,t){return mr(e,{who:t})}async function oa(e,t){return mr(e,{stockReel:t})}async function To(e,t,r){try{const n=r(e);if(!n)throw new Error(`Produit ${e} non trouvé localement pour mise à jour batch`);const a={};return t.stockReel!==void 0&&(a.stockReel=t.stockReel),t.who!==void 0&&(a.who=t.who),t.storeInfo!==void 0&&(a.store=JSON.stringify(t.storeInfo)),n.isSynced?(console.log(`[Appwrite Interactions] Produit ${e} déjà sync, update batch normal...`),await mr(e,a)):(console.log(`[Appwrite Interactions] Produit ${e} local, création batch avec upsert...`),await Jt(e,a,r))}catch(n){throw console.error(`[Appwrite Interactions] Erreur lors de la mise à jour batch du produit ${e}:`,n),n}}async function No(e){try{const{databases:t,config:r}=await $t(),o=await(await window.AppwriteClient.getAccount()).get(),i={...e,createdBy:o.$id},l=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,qr.unique(),i);return console.log("[Appwrite Interactions] Achat créé:",l),l}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Co(e,t){try{const{databases:r,config:n}=await $t(),a=await r.getDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e),o={...t,products:t.products||a.products},i=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,o);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,o),i}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Mo(e){try{const{databases:t,config:r}=await $t();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}async function Io(e){if(!e?.length)return[];try{const{databases:t,config:r}=await $t(),n=await t.listDocuments(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,[A.equal("$id",e),A.select(["*","products.$id"])]);return console.log(`[Appwrite Interactions] ${n.documents.length} purchases chargés avec relations products`),n.documents}catch(t){console.error("[Appwrite Interactions] Erreur chargement purchases avec relations:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec du chargement des purchases: ${r}`)}}function Do(e,t={}){let r=null;const n=o=>{const{events:i,payload:l}=o;if(!l)return;const c=i.some(m=>m.includes("products.")),f=i.some(m=>m.includes("purchases.")),v=i.some(m=>m.includes(".create")),g=i.some(m=>m.includes(".update")),p=i.some(m=>m.includes(".delete"));if(c){const m=l;v&&t.onProductCreate?t.onProductCreate(m):g&&t.onProductUpdate?t.onProductUpdate(m):p&&t.onProductDelete&&t.onProductDelete(m.$id)}else if(f){const m=l;v&&t.onPurchaseCreate?t.onPurchaseCreate(m):g&&t.onPurchaseUpdate?t.onPurchaseUpdate(m):p&&t.onPurchaseDelete&&t.onPurchaseDelete(m.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:o=>{console.error("[Appwrite Interactions] Erreur realtime:",o),t.onError?.(o)}}))}catch(o){console.error("[Appwrite Interactions] Impossible de configurer realtime:",o),t.onError?.(o)}})(),()=>{r&&(r(),r=null)}}async function Ro(e){try{console.log(`[Appwrite Interactions] Chargement des données principales pour mainId: ${e}`);const{databases:t}=await $t(),r=window.AppwriteClient.getConfig(),n=await t.getDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.main,e);return console.log(`[Appwrite Interactions] Données principales chargées pour: ${n.name}`),n}catch(t){return console.error(`[Appwrite Interactions] Erreur chargement données principales pour mainId ${e}:`,t),null}}async function Oo(e,t,r,n){try{console.log(`[Appwrite Interactions] Création du Main document: ${e}`);const{databases:a}=await $t(),o=window.AppwriteClient.getConfig(),l=await(await window.AppwriteClient.getAccount()).get();await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.main,e,{name:n,createdBy:l.$id,isActive:!0,originalDataHash:t,allDates:r,status:"active",dateStart:r[0]||null,dateEnd:r[r.length-1]||null}),console.log(`[Appwrite Interactions] Main document créé: ${e}`)}catch(a){throw console.error("[Appwrite Interactions] Erreur création Main document:",a),a}}async function Ea(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"batchUpdateProducts",data:e};console.log(`[Appwrite Interactions] Lancement mise à jour groupée: ${e.productIds.length} produits, type: ${e.updateType}`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Mise à jour groupée réussie: ${o.updatedCount} produits mis à jour`):console.error("[Appwrite Interactions] Mise à jour groupée échouée:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur mise à jour groupée:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,updatedCount:e.productIds.length,updateType:e.updateType,error:r,timestamp:new Date().toISOString()}}}async function qo(e,t,r,n){return Ea({productIds:e,products:t,updateType:"store",updateData:r,options:n})}async function jo(e,t,r,n="replace"){return Ea({productIds:e,products:t,updateType:"who",updateData:{names:r},options:{mode:n}})}async function Bo(e,t,r,n={}){try{const{databases:a,config:o}=await $t(),c=await(await window.AppwriteClient.getAccount()).get(),f=[];console.log("[Appwrite Interactions] Debug createQuickValidationPurchases:",{mainId:e,productId:t,productIdType:typeof t,quantities:r,options:n});for(const v of r){const g={products:[t],mainId:e,quantity:v.q,unit:v.u,status:"delivered",notes:n.notes||`Validation rapide ${new Date().toLocaleDateString("fr-FR")}`,store:n.store??null,who:c.name,price:null,orderDate:null,deliveryDate:null,createdBy:c.$id,invoiceId:n.invoiceId,invoiceTotal:null},p=await a.createDocument(o.APPWRITE_CONFIG.databaseId,o.APPWRITE_CONFIG.collections.purchases,qr.unique(),g);f.push(p)}return console.log(`[Appwrite Interactions] ${f.length} validations rapides créées pour produit ${t}`),f}catch(a){console.error("[Appwrite Interactions] Erreur création validation rapide:",a);const o=a instanceof Error?a.message:"Erreur inconnue";throw new Error(`Échec de la validation rapide: ${o}`)}}const Ic=Object.freeze(Object.defineProperty({__proto__:null,batchUpdateProducts:Ea,batchUpdateStore:qo,batchUpdateWho:jo,createMainDocument:Oo,createPurchase:No,createQuickValidationPurchases:Bo,deletePurchase:Mo,enrichedProductToAppwriteProduct:Eo,loadMainEventData:Ro,loadPurchasesListByIds:Io,loadUpdatedPurchases:Mc,subscribeToRealtime:Do,syncProductsWithPurchases:$o,updateProduct:mr,updateProductBatch:To,updateProductStock:oa,updateProductStore:ko,updateProductWho:Ao,updatePurchase:Co,upsertProduct:Jt},Symbol.toStringTag,{value:"Module"}));async function Dc(e){const t=await fetch(`/evenements/${e}/ingredients_aw/index.json`);if(!t.ok)throw new Error(`Impossible de charger les données Hugo: ${t.status}`);const r=await t.json();if(!r.mainGroup_id||!r.ingredients)throw new Error("Format de données Hugo invalide");return r}function Rc(e,t){const r=Xl(e.byDate),n=nn(bn([])),{numeric:a,display:o}=yn(r,n);return{$id:`${t}_${e.ingredientHugoUuid}`,$updatedAt:void 0,productHugoUuid:e.ingredientHugoUuid,productName:e.ingredientName,productType:e.ingType,pFrais:e.pFrais||!1,pSurgel:e.pSurgel||!1,nbRecipes:e.nbRecipes,totalAssiettes:e.totalAssiettes,isSynced:!1,status:"active",who:null,store:"",stockReel:null,previousNames:null,isMerged:!1,mergedFrom:null,mergeDate:null,mergeReason:null,mergedInto:null,totalNeededOverride:null,mainId:t,purchases:[],byDate:e.byDate,storeInfo:null,stockParsed:null,totalNeededArray:r,totalNeededRawArray:e.totalNeededRaw,totalPurchasesArray:n,missingQuantityArray:a,stockOrTotalPurchases:"-",displayTotalNeeded:Ar(r),displayTotalPurchases:"-",displayMissingQuantity:o,totalNeededOverrideParsed:null}}function Oc(e,t){return e.map(r=>Rc(r,t))}class qc{dbName;db=null;version=1;PRODUCTS_STORE="products";METADATA_STORE="metadata";METADATA_KEY="cache-metadata";constructor(t){this.dbName=`products-cache-${t}`}async open(){if(!this.db)return new Promise((t,r)=>{const n=indexedDB.open(this.dbName,this.version);n.onerror=()=>r(n.error),n.onsuccess=()=>{this.db=n.result,console.log(`[IDBCache] Base ouverte: ${this.dbName}`),t()},n.onupgradeneeded=a=>{const o=a.target.result;o.objectStoreNames.contains(this.PRODUCTS_STORE)||(o.createObjectStore(this.PRODUCTS_STORE,{keyPath:"$id"}),console.log("[IDBCache] Object store 'products' créé")),o.objectStoreNames.contains(this.METADATA_STORE)||(o.createObjectStore(this.METADATA_STORE),console.log("[IDBCache] Object store 'metadata' créé"))}})}async loadProducts(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.PRODUCTS_STORE,"readonly").objectStore(this.PRODUCTS_STORE).getAll();o.onsuccess=()=>{const i=new Map;o.result.forEach(l=>{i.set(l.$id,l)}),console.log(`[IDBCache] ${i.size} produits chargés`),t(i)},o.onerror=()=>r(o.error)})}async loadMetadata(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const o=this.db.transaction(this.METADATA_STORE,"readonly").objectStore(this.METADATA_STORE).get(this.METADATA_KEY);o.onsuccess=()=>{const i=o.result||{lastSync:null,allDates:[]};console.log(`[IDBCache] Metadata chargée: lastSync=${i.lastSync}, dates=${i.allDates?.length||0}`),t(i)},o.onerror=()=>r(o.error)})}async saveProducts(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const a=this.db.transaction(this.PRODUCTS_STORE,"readwrite"),o=a.objectStore(this.PRODUCTS_STORE);o.clear(),t.forEach(i=>{o.put(i)}),a.oncomplete=()=>{console.log(`[IDBCache] ${t.size} produits sauvegardés`),r()},a.onerror=()=>n(a.error)})}async saveMetadata(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.METADATA_STORE,"readwrite").objectStore(this.METADATA_STORE).put(t,this.METADATA_KEY);i.onsuccess=()=>{console.log("[IDBCache] Metadata sauvegardée"),r()},i.onerror=()=>n(i.error)})}async upsertProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).put(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async deleteProduct(t){if(!this.db)throw new Error("DB non ouverte");return new Promise((r,n)=>{const i=this.db.transaction(this.PRODUCTS_STORE,"readwrite").objectStore(this.PRODUCTS_STORE).delete(t);i.onsuccess=()=>r(),i.onerror=()=>n(i.error)})}async clear(){if(!this.db)throw new Error("DB non ouverte");return new Promise((t,r)=>{const n=this.db.transaction([this.PRODUCTS_STORE,this.METADATA_STORE],"readwrite");n.objectStore(this.PRODUCTS_STORE).clear(),n.objectStore(this.METADATA_STORE).clear(),n.oncomplete=()=>{console.log("[IDBCache] Cache vidé"),t()},n.onerror=()=>r(n.error)})}close(){this.db&&(this.db.close(),this.db=null,console.log("[IDBCache] Connexion fermée"))}}async function jc(e){const t=new qc(e);return await t.open(),t}const ss=1e3;class Bc{#e=new ql;#r=W(null);#c=W(!1);#u=W(!1);#l=W(null);#o=W(!1);#i=W(!1);#a=W(null);#s=W(Me([]));#f=W(Me({start:null,end:null}));get dateRange(){return s(this.#f)}set dateRange(t){x(this.#f,t,!0)}#n=null;#d=null;#v=W(!1);#t=W(Me({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return s(this.#t)}get currentMainId(){return s(this.#r)}get isInitialized(){return s(this.#c)}get loading(){return s(this.#u)}get error(){return s(this.#l)}get lastSync(){return s(this.#a)}get syncing(){return s(this.#o)}get availableDates(){return s(this.#s)}setDateRange(t,r){if(!t&&!r){this.dateRange={start:null,end:null};return}if(!t||!r){this.dateRange={start:t||r,end:t||r};return}const n=new Date(t)<=new Date(r)?t:r,a=new Date(t)>=new Date(r)?t:r;this.dateRange={start:n,end:a}}isFullRange(){return this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate}initializeDateRange(){if((!this.dateRange.start||!this.dateRange.end)&&s(this.#s).length>0){const t=[...s(this.#s)].sort();this.dateRange={start:t[0],end:t[t.length-1]}}console.log(`[ProductsStore] Date range initialized: ${this.dateRange.start} - ${this.dateRange.end}`)}get firstAvailableDate(){return s(this.#s).length===0?null:[...s(this.#s)].sort()[0]}get lastAvailableDate(){return s(this.#s).length===0?null:[...s(this.#s)].sort().pop()}get realtimeConnected(){return s(this.#i)}get hugoContentChanged(){return s(this.#v)}#_=Z(()=>{const t=Array.from(this.#e.values());return console.log(`[ProductsStore] enrichedProducts recalculated: ${t.length} products`),t});get enrichedProducts(){return s(this.#_)}set enrichedProducts(t){x(this.#_,t)}#g=Z(()=>{if(console.log("[Store] Filtering products by date range (Map)"),!this.dateRange.start||!this.dateRange.end)return new Map;const t=new Date(this.dateRange.start),r=new Date(this.dateRange.end),n=new Map;for(const[a,o]of this.#e){if(!o.byDate||!this.#B(o))continue;Object.keys(o.byDate).some(c=>{const f=new Date(c);return f>=t&&f<=r})&&n.set(a,o)}return n});get filteredProductsMap(){return s(this.#g)}set filteredProductsMap(t){x(this.#g,t)}#w=Z(()=>{console.log("[Store] Calcul unifié des stats par produit (1 itération)");const t=new Map;if(this.dateRange.start===this.firstAvailableDate&&this.dateRange.end===this.lastAvailableDate){console.log("[Store] Full date range - using precomputed data");for(const[n,a]of this.#e){const o=Wa(a,this.dateRange.end),i=o.filter(c=>c.q>0),l=o.filter(c=>c.q<0).map(c=>({q:Math.abs(c.q),u:c.u}));t.set(n,{quantities:a.totalNeededArray,formattedQuantities:Ar(a.totalNeededArray),nbRecipes:a.nbRecipes||0,totalAssiettes:a.totalAssiettes||0,stockResult:o,availableQuantities:i,missingQuantities:l,formattedAvailableQuantities:Ga(o),hasAvailable:i.length>0,hasMissing:l.length>0})}return t}for(const[n,a]of this.filteredProductsMap){if(!a.byDate)continue;const o=Yl(a.byDate),i=Hl(o,this.dateRange.start,this.dateRange.end),l=i.length>0?Ar(i):"",c=Kl(a.byDate,this.dateRange.start,this.dateRange.end),v=Object.keys(a.byDate).filter(_=>{const w=new Date(_),b=new Date(this.dateRange.start),y=new Date(this.dateRange.end);return w>=b&&w<=y}).flatMap(_=>a.byDate[_]?.recipes||[]),g=Wa(a,this.dateRange.end),p=g.filter(_=>_.q>0),m=g.filter(_=>_.q<0).map(_=>({q:Math.abs(_.q),u:_.u}));t.set(n,{quantities:i,formattedQuantities:l,nbRecipes:v.length,totalAssiettes:c,stockResult:g,availableQuantities:p,missingQuantities:m,formattedAvailableQuantities:Ga(g),hasAvailable:p.length>0,hasMissing:m.length>0})}return t});get productsStatsByDateRange(){return s(this.#w)}set productsStatsByDateRange(t){x(this.#w,t)}#S=Z(()=>({total:this.enrichedProducts.length,frais:this.enrichedProducts.filter(t=>t.pFrais).length,surgel:this.enrichedProducts.filter(t=>t.pSurgel).length,merged:this.enrichedProducts.filter(t=>t.isMerged).length}));get stats(){return s(this.#S)}set stats(t){x(this.#S,t)}#h=Z(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return s(this.#h)}set uniqueStores(t){x(this.#h,t)}#p=Z(()=>{const t=this.enrichedProducts.flatMap(r=>r.who||[]);return[...new Set(t)]});get uniqueWho(){return s(this.#p)}set uniqueWho(t){x(this.#p,t)}#m=Z(()=>{const t=this.enrichedProducts.map(r=>r.productType).filter(Boolean);return[...new Set(t)]});get uniqueProductTypes(){return s(this.#m)}set uniqueProductTypes(t){x(this.#m,t)}#E=Z(()=>{const t=Array.from(this.filteredProductsMap.values());return s(this.#t).groupBy==="none"?{"":t}:Object.groupBy(t,r=>s(this.#t).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get groupedFilteredProducts(){return s(this.#E)}set groupedFilteredProducts(t){x(this.#E,t)}async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(s(this.#c)&&s(this.#r)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),x(this.#r,t,!0);try{this.#n=await jc(t)}catch(r){throw console.error("[ProductsStore] Erreur ouverture IndexedDB:",r),new Error("Impossible d'initialiser le cache IndexedDB")}x(this.#l,null);try{if(await this.#T(),this.#e.size===0){console.log("[ProductsStore] Cache vide, chargement depuis Hugo...");const n=await Dc(t);console.log(`[ProductsStore] Hugo chargé: ${n.ingredients.length} ingrédients`),Oc(n.ingredients,t).forEach(i=>{this.#e.set(i.$id,i)}),x(this.#s,[...n.allDates],!0),await Ro(t)||await Oo(n.mainGroup_id,n.hugoContentHash,n.allDates,n.name),await this.#$()}this.initializeDateRange(),await this.#N(),x(this.#c,!0);const r=this.#j();this.#d=Do(t,r),console.log(`[ProductsStore] Initialisation complétée: ${this.#e.size} produits`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors de l'initialisation";throw x(this.#l,n,!0),console.error("[ProductsStore]",n,r),r}}async#T(){if(this.#n)try{const t=await this.#n.loadProducts();t.forEach((n,a)=>{this.#e.set(a,n)});const r=await this.#n.loadMetadata();x(this.#a,r.lastSync,!0),x(this.#s,[...r.allDates],!0),console.log(`[ProductsStore] ${t.size} produits chargés du cache IDB, lastSync: ${r.lastSync}`)}catch(t){console.warn("[ProductsStore] Erreur lecture cache IDB, ignoré:",t)}}async#N(){if(s(this.#r)){x(this.#o,!0),console.log(`[ProductsStore] Début syncFromAppwrite pour mainId: ${s(this.#r)}`);try{console.log(`[ProductsStore] Récupération des produits modifiés depuis lastSync: ${s(this.#a)}`);const t=await $o(s(this.#r),{lastSync:s(this.#a),limit:ss});if(console.log(`[ProductsStore] ${t.length} produits récupérés depuis Appwrite`),t.forEach(r=>{const n=this.#e.get(r.$id);console.log(`[ProductsStore] Sync produit ${r.$id}: existing=${!!n}, who=${r.who}, store=${r.store}`);const a=this.#k(r,n);a.isSynced=!0,this.#e.set(r.$id,a)}),s(this.#a)){console.log(`[ProductsStore] Récupération des purchases modifiés depuis lastSync: ${s(this.#a)}`);const{loadUpdatedPurchases:r}=await Ol(async()=>{const{loadUpdatedPurchases:a}=await Promise.resolve().then(()=>Ic);return{loadUpdatedPurchases:a}},void 0),n=await r(s(this.#r),s(this.#a),ss);console.log(`[ProductsStore] ${n.length} purchases modifiés récupérés`),n.forEach(a=>{if(a.products?.length){const o=a.products.map(i=>typeof i=="string"?i:i.$id);this.#P(o,a)}})}this.#C(),await this.#$(),console.log("[ProductsStore] SyncFromAppwrite terminé avec succès")}catch(t){throw console.error("[ProductsStore] Erreur lors du sync:",t),t}finally{x(this.#o,!1)}}}async#$(){if(this.#n)try{await this.#n.saveProducts(this.#e),await this.#n.saveMetadata({lastSync:s(this.#a),allDates:[...s(this.#s)]}),console.log("[ProductsStore] Cache IDB persisté")}catch(t){console.error("[ProductsStore] Erreur persist cache IDB:",t)}}async#x(t){if(!(!this.#n||t.length===0))try{const r=t.map(n=>this.#e.get(n)).filter(n=>n!=null).map(n=>this.#n.upsertProduct(n));r.length>0&&(await Promise.all(r),console.log(`[ProductsStore] ${r.length} produits affectés persistés`))}catch(r){console.error("[ProductsStore] Erreur persistence produits affectés:",r)}}#C(){x(this.#a,new Date().toISOString(),!0)}#k(t,r){return r?this.#b(t,r):this.#M(t)}#M(t){const r=nn(bn(t.purchases??[])),n=[],{numeric:a,display:o}=yn(n,r),i=Fr(t.stockReel)??null,l=Ar(r),c=t.store?Fr(t.store):null,f=i?`${i.quantity} ${i.unit}`:l;return{$id:t.$id,$createdAt:t.$createdAt,$updatedAt:t.$updatedAt,productHugoUuid:t.productHugoUuid,productName:t.productName,productType:"none",pFrais:!1,pSurgel:!1,nbRecipes:0,totalAssiettes:0,isSynced:t.isSynced,mainId:t.mainId,status:t.status,who:t.who,store:t.store,stockReel:t.stockReel,previousNames:t.previousNames,isMerged:t.isMerged,mergedFrom:t.mergedFrom,mergeDate:t.mergeDate,mergeReason:t.mergeReason,mergedInto:t.mergedInto,totalNeededOverride:t.totalNeededOverride,purchases:t.purchases,byDate:null,storeInfo:c,stockParsed:i,totalNeededArray:n,totalPurchasesArray:r,missingQuantityArray:a,stockOrTotalPurchases:f,displayTotalNeeded:"-",displayTotalPurchases:l,displayMissingQuantity:o,totalNeededOverrideParsed:Ua(t.totalNeededOverride)}}#b(t,r){const n=t.purchases??r.purchases,a=nn(bn(n??[])),o=Ar(a),{numeric:i,display:l}=yn(r.totalNeededArray,a),c=t.stockReel??r.stockReel,f=c?Fr(c):r.stockParsed,v=t.store??r.store,g=v?Fr(v):r.storeInfo,p=f?`${f.quantity} ${f.unit}`:o;return t.purchases===void 0&&r.purchases?.length&&console.log(`[ProductsStore] Fusion intelligente : préservation de ${r.purchases.length} purchases pour ${r.productName}`),{...r,$updatedAt:t.$updatedAt,productName:t.productName??r.productName,isSynced:t.isSynced??r.isSynced,mainId:t.mainId??r.mainId,status:t.status??r.status,who:t.who??r.who,store:v,stockReel:c,purchases:n,previousNames:t.previousNames??r.previousNames,isMerged:t.isMerged??r.isMerged,mergedFrom:t.mergedFrom??r.mergedFrom,mergeDate:t.mergeDate??r.mergeDate,mergeReason:t.mergeReason??r.mergeReason,mergedInto:t.mergedInto??r.mergedInto,totalNeededOverride:t.totalNeededOverride??r.totalNeededOverride,storeInfo:g,stockParsed:f,totalPurchasesArray:a,missingQuantityArray:i,stockOrTotalPurchases:p,displayTotalPurchases:o,displayMissingQuantity:l,totalNeededOverrideParsed:Ua(t.totalNeededOverride??r.totalNeededOverride)}}#L(t){t.totalPurchasesArray=nn(bn(t.purchases??[]));const{numeric:r,display:n}=yn(t.totalNeededArray,t.totalPurchasesArray);t.missingQuantityArray=r,t.displayMissingQuantity=n,t.displayTotalPurchases=Ar(t.totalPurchasesArray)}#z(t){t.length&&(t.forEach(r=>this.#y(r)),console.log(`[ProductsStore] ${t.length} produits upserted`))}#y(t){const r=this.#e.get(t.$id),n=this.#k(t,r);this.#e.set(t.$id,n)}#I(t){this.#e.delete(t)}async#D(t){if(!t.products?.length)return console.warn("[ProductsStore] Purchase créé sans products:",t.$id),[];const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#q(r,t),r}async#R(t){if(t.products?.length){const r=t.products.map(n=>typeof n=="string"?n:n.$id).filter(Boolean);return this.#P(r,t),r}console.log("[ProductsStore] Purchase update sans products[], rechargement...");try{const[r]=await Io([t.$id]);if(r?.products?.length){const n=r.products.map(a=>typeof a=="string"?a:a.$id).filter(Boolean);return this.#P(n,r),n}return[]}catch(r){return console.error("[ProductsStore] Erreur rechargement purchase:",r),[]}}async#O(t){const r=Array.from(this.#e.values()).filter(n=>n.purchases?.some(a=>a.$id===t));return r.forEach(n=>{this.#y(n)}),r.map(n=>n.$id)}#A(t){return{...t,products:t.products?.map(r=>typeof r=="string"?r:r.$id)||[],mainId:t.mainId}}#q(t,r){const n=this.#A(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[];if(!l.some(c=>c.$id===n.$id)){const c=this.#b({...i,purchases:[...l,n],status:"active"},i);a.push(c)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#P(t,r){const n=this.#A(r),a=[];t.forEach(o=>{const i=this.#e.get(o);if(i){const l=i.purchases||[],c=l.findIndex(f=>f.$id===n.$id);if(c>=0){const f=[...l];f[c]=n;const v=this.#b({...i,purchases:f,status:"active"},i);a.push(v)}else{const f=this.#b({...i,purchases:[...l,r],status:"active"},i);a.push(f)}}}),a.forEach(o=>{this.#e.set(o.$id,o)})}#j(){return{onProductCreate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductUpdate:t=>{if(this.#y(t),this.#n){const r=this.#e.get(t.$id);r&&this.#n.upsertProduct(r).catch(n=>console.error("[ProductsStore] Erreur persistence produit:",n))}},onProductDelete:t=>{this.#I(t),this.#n&&this.#n.deleteProduct(t).catch(r=>console.error("[ProductsStore] Erreur suppression produit:",r))},onPurchaseCreate:async t=>{const r=await this.#D(t);await this.#x(r)},onPurchaseUpdate:async t=>{const r=await this.#R(t);await this.#x(r)},onPurchaseDelete:async t=>{const r=await this.#O(t);await this.#x(r)},onConnect:()=>{x(this.#i,!0)},onDisconnect:()=>{x(this.#i,!1)},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#B(t){if(s(this.#t).searchQuery.trim()){const r=s(this.#t).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(s(this.#t).selectedStores.length>0&&(!t.storeInfo?.storeName||!s(this.#t).selectedStores.includes(t.storeInfo.storeName))||s(this.#t).selectedWho.length>0&&(!t.who||!t.who.some(r=>s(this.#t).selectedWho.includes(r)))||s(this.#t).selectedProductTypes.length>0&&(!t.productType||!s(this.#t).selectedProductTypes.includes(t.productType))||s(this.#t).selectedTemperatures.length>0&&!(s(this.#t).selectedTemperatures.includes("frais")&&t.pFrais||s(this.#t).selectedTemperatures.includes("surgele")&&t.pSurgel))}setSearchQuery=Ql(t=>{s(this.#t).searchQuery=t},()=>500);toggleProductType(t){const r=s(this.#t).selectedProductTypes.indexOf(t);r>-1?s(this.#t).selectedProductTypes.splice(r,1):s(this.#t).selectedProductTypes.push(t)}toggleTemperature(t){const r=s(this.#t).selectedTemperatures.indexOf(t);r>-1?s(this.#t).selectedTemperatures.splice(r,1):s(this.#t).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){s(this.#t).selectedProductTypes=[],s(this.#t).selectedTemperatures=[]}setGroupBy(t){s(this.#t).groupBy=t}toggleStore(t){const r=s(this.#t).selectedStores.indexOf(t);r>-1?s(this.#t).selectedStores.splice(r,1):s(this.#t).selectedStores.push(t)}toggleWho(t){const r=s(this.#t).selectedWho.indexOf(t);r>-1?s(this.#t).selectedWho.splice(r,1):s(this.#t).selectedWho.push(t)}clearStoreFilters(){s(this.#t).selectedStores=[]}clearWhoFilters(){s(this.#t).selectedWho=[]}handleSort(t){s(this.#t).sortColumn===t?s(this.#t).sortDirection=s(this.#t).sortDirection==="asc"?"desc":"asc":(s(this.#t).sortColumn=t,s(this.#t).sortDirection="asc")}clearFilters(){x(this.#t,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return s(this.#t).sortColumn?[...t].sort((r,n)=>{let a=r[s(this.#t).sortColumn],o=n[s(this.#t).sortColumn];return s(this.#t).sortColumn==="totalNeededConsolidated"?(a=parseFloat(a)||0,o=parseFloat(o)||0):s(this.#t).sortColumn==="purchases"&&(a=r.purchases?.length||0,o=n.purchases?.length||0),a<o?s(this.#t).sortDirection==="asc"?-1:1:a>o?s(this.#t).sortDirection==="asc"?1:-1:0}):t}getEnrichedProductById(t){return this.#e.get(t)??null}hasConversions(t){const r=this.#e.get(t);return r?.byDate?Jl(r.byDate):!1}get enrichedProductsCount(){return this.#e.size}async forceReload(t){await this.clearCache(),await this.initialize(t)}async clearCache(){this.#e.clear(),x(this.#s,[],!0),x(this.#a,null),this.#n&&await this.#n.clear(),console.log("[ProductsStore] Cache vidé")}setSyncStatus(t,r){const n=r?"isSyncing":"active";t.forEach(a=>{const o=this.#e.get(a);if(o){const i={...o,status:n};this.#e.set(a,i)}}),console.log(`[ProductsStore] Statut de synchronisation mis à jour: ${t.length} produits → ${n}`)}clearSyncStatus(){const t=[];for(const[r,n]of this.#e)n.status==="isSyncing"&&t.push(r);t.length>0&&(this.setSyncStatus(t,!1),console.log(`[ProductsStore] Nettoyage de ${t.length} produits en statut "isSyncing"`))}destroy(){this.#d?.(),this.#d=null,this.#n&&(this.#n.close(),this.#n=null),console.log("[ProductsStore] Ressources nettoyées")}}const H=new Bc;function Lc(){if(typeof window>"u")throw new Error("getMainIdFromUrl() appelé côté serveur - SSR non supporté");const t=new URLSearchParams(window.location.search).get("listId");if(!t||!t.trim())throw new Error("Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id");return t.trim()}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const zc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Vc=fl("<svg><!><!></svg>");function ve(e,t){V(t,!0);const r=Be(t,"color",3,"currentColor"),n=Be(t,"size",3,24),a=Be(t,"strokeWidth",3,2),o=Be(t,"absoluteStrokeWidth",3,!1),i=Be(t,"iconNode",19,()=>[]),l=ue(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var c=Vc();La(c,g=>({...zc,...l,width:n(),height:n(),stroke:r(),"stroke-width":g,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>o()?Number(a())*24/Number(n()):a()]);var f=u(c);it(f,17,i,ta,(g,p)=>{var m=Z(()=>ps(s(p),2));let _=()=>s(m)[0],w=()=>s(m)[1];var b=G(),y=q(b);bl(y,_,!0,(P,$)=>{La(P,()=>({...w()}))}),h(g,b)});var v=d(f);ie(v,()=>t.children??ne),h(e,c),U()}function ia(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ve(e,fe({name:"archive"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Uc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ve(e,fe({name:"bean"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Wc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ve(e,fe({name:"beef"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Gc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ve(e,fe({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Qc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ve(e,fe({name:"carrot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Br(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20 6 9 17l-5-5"}]];ve(e,fe({name:"check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Hc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ve(e,fe({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Kc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m6 9 6 6 6-6"}]];ve(e,fe({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function os(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ve(e,fe({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Jc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ve(e,fe({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Yc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];ve(e,fe({name:"circle-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Zc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];ve(e,fe({name:"clipboard-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Xc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 6v6l4 2"}],["circle",{cx:"12",cy:"12",r:"10"}]];ve(e,fe({name:"clock"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Fc(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];ve(e,fe({name:"cloud"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function $a(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]];ve(e,fe({name:"cooking-pot"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function eu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ve(e,fe({name:"egg"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function tu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]];ve(e,fe({name:"euro"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function ru(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"}],["path",{d:"m16.5 3.5 5 5"}],["path",{d:"m21.5 3.5-5 5"}]];ve(e,fe({name:"funnel-x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Lo(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ve(e,fe({name:"funnel"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function nu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ve(e,fe({name:"info"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function zo(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ve(e,fe({name:"layout-list"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function au(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ve(e,fe({name:"leaf"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function su(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ve(e,fe({name:"list-todo"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function ou(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];ve(e,fe({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function iu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ve(e,fe({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function lu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];ve(e,fe({name:"message-circle-question-mark"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function ka(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];ve(e,fe({name:"message-circle"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function cu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]];ve(e,fe({name:"moon"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function uu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];ve(e,fe({name:"package-check"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function vn(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ve(e,fe({name:"package"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function du(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 21h8"}],["path",{d:"m15 5 4 4"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]];ve(e,fe({name:"pencil-line"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function fu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ve(e,fe({name:"plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function vu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]];ve(e,fe({name:"receipt"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function hu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ve(e,fe({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function pu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ve(e,fe({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function mu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ve(e,fe({name:"save"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function _u(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ve(e,fe({name:"search"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Vo(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ve(e,fe({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Ft(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ve(e,fe({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Uo(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ve(e,fe({name:"snowflake"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function En(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ve(e,fe({name:"square-pen"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function rr(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ve(e,fe({name:"store"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function gu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];ve(e,fe({name:"sun"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function jn(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ve(e,fe({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Wo(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];ve(e,fe({name:"user-plus"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function hn(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ve(e,fe({name:"user"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function la(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ve(e,fe({name:"users"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function bu(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ve(e,fe({name:"utensils"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function Et(e,t){V(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ve(e,fe({name:"x"},()=>r,{get iconNode(){return n},children:(a,o)=>{var i=G(),l=q(i);ie(l,()=>t.children??ne),h(a,i)},$$slots:{default:!0}})),U()}function ca(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:Uc};case"animaux":return{displayName:"Viandes et Poissons",icon:Wc};case"legumes":return{displayName:"Fruits et Légumes",icon:Qc};case"sucres":return{displayName:"Sucrées",icon:Gc};case"lof":return{displayName:"L.O.F",icon:eu};case"autres":return{displayName:"Autres",icon:Hc};case"epices":return{displayName:"Assaisonnements",icon:au};case"frais":return{displayName:"Produits Frais",icon:pu};default:return{displayName:e,icon:vn}}}function is(e,t){return t==="kg"?{quantity:e*1e3,unit:"gr."}:t==="l."?{quantity:e*1e3,unit:"ml"}:{quantity:e,unit:t}}function Bn(e,t){return t==="gr."&&e>=1e3?`${(e/1e3).toFixed(1)} kg`:t==="ml"&&e>=1e3?`${(e/1e3).toFixed(1)} l`:`${e} ${t}`}function Ln(e){if(!e)return"-";try{return new Date(e).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}function yu(e){if(!e)return"-";try{const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t.map(r=>`${r.value} ${r.unit}`).join(" et ")}catch{return e}return e}function wu(e,t){return t.sortColumn?[...e].sort((r,n)=>{let a=r[t.sortColumn],o=n[t.sortColumn];return a<o?t.sortDirection==="asc"?-1:1:a>o?t.sortDirection==="asc"?1:-1:0}):e}function ua(e){switch(e){case"requested":return{text:"Demandé",class:"badge-warning"};case"ordered":return{text:"Commandé",class:"badge-info"};case"pending":return{text:"En attente",class:"badge-warning"};case"delivered":return{text:"Livré",class:"badge-success"};case"cancelled":return{text:"Annulé",class:"badge-error"};default:return{text:"Achat direct",class:"badge-neutral"}}}function ls(e){return e?Ln(e):"-"}function Su(e){if(!e?.length)return[];const t=e.reduce((r,n)=>{const a=n.status||"direct",o=n.unit||"unit",i=`${a}_${o}`;if(!r[i]){const l=ua(a);r[i]={status:a,unit:o,quantity:0,badgeClass:l.class,badgeText:l.text,icon:xu(a)}}return r[i].quantity+=n.quantity||0,r},{});return Object.values(t)}function xu(e){switch(e){case"requested":return"MessageCircleQuestionMark";case"ordered":return"ClipboardCheck";case"pending":return"Clock";case"delivered":return"ShoppingCart";case"cancelled":return"CircleX";case"inStock":return"PackageCheck";default:return"Package"}}class Pu{isMobileQuery=new io("max-width: 767px");get isMobile(){return this.isMobileQuery.current}userName(){return localStorage.getItem("appwrite-user-name")||""}}const da=new Pu;function Eu(e){let t=W(!1),r=W(null);const n=Z(()=>(console.log(`[ProductModalState] Recalculating product ${e}`),H.getEnrichedProductById(e))),a=Z(()=>s(n)?.who??[]),o=Z(()=>s(n)?.stockParsed??null),i=Z(()=>s(n)?.purchases??[]),l=Z(()=>s(n)?.byDate?Zl(s(n).byDate):[]),c=Me({purchase:{quantity:null,unit:"",store:"",who:da.userName()??"",price:null,notes:"",status:null,orderDate:null,deliveryDate:null},stock:{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()},store:{name:null,comment:null},who:[]});let f=W(!1),v=W(null);wr(()=>{!s(n)||s(f)||(c.purchase.quantity=s(n).missingQuantityArray[0]?.q??null,c.purchase.unit=s(n).totalNeededArray[0]?.u??"",c.purchase.store=s(n).storeInfo?.storeName??"",c.purchase.who=da.userName()??"",c.purchase.status=c.purchase.status||"delivered",c.stock.unit=s(n).totalNeededArray[0]?.u??"",c.store.name=s(n).storeInfo?.storeName??"",c.store.comment=s(n).storeInfo?.storeComment??null,c.who=s(n)?.who?[...s(n).who]:[],x(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0),x(f,!0))});const g=Z(()=>s(v)?{store:JSON.stringify(c.store)!==JSON.stringify(s(v).store),stock:p(),who:JSON.stringify(c.who)!==JSON.stringify(s(v).whoList)}:{store:!1,stock:!1,who:!1});function p(){return c.stock.quantity&&c.stock.quantity>0&&c.stock.unit?s(o)?c.stock.quantity.toString()!==s(o).quantity||c.stock.unit!==s(o).unit||(c.stock.notes||"")!==(s(o).notes||""):!0:!1}const m=Z(()=>!!(s(v)&&(s(g).store||s(g).stock||s(g).who)));let _=W(null);const w=Z(()=>s(_)?s(i).find(j=>j.$id===s(_))??null:null);async function b(j,I){x(t,!0),x(r,null);try{const Y=await j();return I&&y("success",I),Y}catch(Y){const ae=Y instanceof Error?Y.message:"Une erreur est survenue";return x(r,ae,!0),y("error",ae),console.error("[ProductModalState]",Y),null}finally{x(t,!1)}}function y(j,I){const Y=new CustomEvent("toast",{detail:{type:j,message:I}});window.dispatchEvent(Y)}async function P(){s(n)&&await b(async()=>{if(!c.purchase.quantity||!c.purchase.unit.trim())throw new Error("Veuillez remplir les champs obligatoires");if(!H.currentMainId)throw new Error("mainId non disponible");const{quantity:j,unit:I}=is(c.purchase.quantity,c.purchase.unit);s(n).isSynced||(console.log(`[ProductModalState] Produit ${s(n).$id} local, création pour purchase...`),await Jt(s(n).$id,{},R=>H.getEnrichedProductById(R)));const Y=c.purchase.status||"delivered";let ae=c.purchase.deliveryDate||null;Y==="delivered"&&!ae&&(ae=new Date().toISOString()),await No({products:[s(n).$id],mainId:H.currentMainId,unit:I,quantity:j,store:c.purchase.store||null,who:c.purchase.who||null,notes:c.purchase.notes||"",price:c.purchase.price||null,status:Y,orderDate:c.purchase.orderDate||null,deliveryDate:ae}),c.purchase={quantity:s(n).missingQuantityArray[0]?.q??null,unit:s(n).totalNeededArray[0]?.u??"",store:c.purchase.store,who:c.purchase.who,price:null,notes:"",status:null,orderDate:null,deliveryDate:null}},"Achat ajouté avec succès")}function $(j){x(_,j.$id,!0)}function E(){x(_,null)}async function k(j){j.$id&&await b(async()=>{const{quantity:I,unit:Y}=is(j.quantity,j.unit),ae=j.status||null;let R=j.deliveryDate||null;ae==="delivered"&&!R&&(R=new Date().toISOString()),await Co(j.$id,{unit:Y,quantity:I,store:j.store||null,who:j.who||null,notes:j.notes||"",price:j.price||null,status:ae,orderDate:j.orderDate||null,deliveryDate:R}),x(_,null)},"Achat modifié avec succès")}async function T(j){const I=s(i).find(Y=>Y.$id===j);I&&confirm(`Supprimer cet achat (${I.quantity} ${I.unit}) ?`)&&await b(async()=>{await Mo(j)},"Achat supprimé avec succès")}async function D(){s(n)&&await b(async()=>{if(!c.stock.quantity||!c.stock.unit)throw new Error("Veuillez remplir les champs obligatoires");const j={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update stock normal...`),await oa(s(n).$id,JSON.stringify(j))):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création stock avec upsert...`),await Jt(s(n).$id,{stockReel:JSON.stringify(j)},I=>H.getEnrichedProductById(I))),c.stock.quantity=null,c.stock.notes="",c.stock.dateTime=new Date().toISOString()},"Stock mis à jour")}async function M(){s(n)&&confirm("Supprimer le stock actuel ?")&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, suppression stock normal...`),await oa(s(n).$id,null)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, suppression stock avec upsert...`),await Jt(s(n).$id,{stockReel:null},j=>H.getEnrichedProductById(j)))},"Stock supprimé")}async function le(j){s(n)&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, setWho normal...`),await Ao(s(n).$id,j)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création who avec upsert...`),await Jt(s(n).$id,{who:j},I=>H.getEnrichedProductById(I)))},"Volontaires mis à jour")}async function J(j){s(n)&&await b(async()=>{s(n).isSynced?(console.log(`[ProductModalState] Produit ${s(n).$id} déjà sync, update store normal...`),await ko(s(n).$id,j)):(console.log(`[ProductModalState] Produit ${s(n).$id} local, création store avec upsert...`),await Jt(s(n).$id,{store:JSON.stringify(j)},I=>H.getEnrichedProductById(I)))},"Magasin mis à jour")}async function K(j){s(n)&&await b(async()=>{await mr(s(n).$id,{totalNeededOverride:JSON.stringify(j)})},"Override appliqué")}async function ee(){s(n)&&confirm("Supprimer l'override manuel et revenir au calcul automatique ?")&&await b(async()=>{await mr(s(n).$id,{totalNeededOverride:null})},"Override supprimé")}async function me(){!s(n)||!s(m)||await b(async()=>{const j={};if(s(g).stock&&c.stock.quantity&&c.stock.unit){const I={quantity:c.stock.quantity.toString(),unit:c.stock.unit,notes:c.stock.notes,dateTime:c.stock.dateTime};j.stockReel=JSON.stringify(I)}if(s(g).who&&(j.who=c.who),s(g).store){const I={storeName:c.store.name||"",storeComment:c.store.comment||void 0};j.storeInfo=I}Object.keys(j).length>0&&(await To(s(n).$id,j,I=>H.getEnrichedProductById(I)),x(v,{purchase:{...c.purchase},stock:{...c.stock},store:{...c.store},whoList:[...c.who]},!0))},"Modifications enregistrées")}return{get loading(){return s(t)},get error(){return s(r)},get product(){return s(n)},get recipes(){return s(l)},get whoList(){return s(a)},get stockParsed(){return s(o)},get purchasesList(){return s(i)},get editingPurchaseId(){return s(_)},get editingPurchaseData(){return s(w)},forms:c,addPurchase:P,startEditPurchase:$,cancelEditPurchase:E,updateEditedPurchase:k,removePurchase:T,setStock:D,removeStock:M,setWho:le,updateStore:J,setOverride:K,removeOverride:ee,saveAllChanges:me,get hasChanges(){return s(g)},get hasAnyChanges(){return s(m)},formatQuantity:Bn,formatDate:Ln,formatDisplayQuantity:yu}}function $u(e,t,r){t()&&(r().forms.purchase.status==="ordered"&&!r().forms.purchase.orderDate&&(r().forms.purchase.orderDate=new Date().toISOString().split("T")[0]),r().addPurchase())}function ku(e,t,r){const n=t().editingPurchaseData;!n||!r(n)||t().updateEditedPurchase(n)}function Au(e,t){t().cancelEditPurchase()}var Tu=S('<label class="input"><span class="label">Date livraison</span> <input type="date"/></label>'),Nu=S('<span class="loading loading-spinner loading-sm"></span>'),Cu=S('<div class="py-8 text-center opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Mu=S('<span class="loading loading-spinner loading-sm"></span>'),Iu=S('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input w-20"/> <select class="custom-select input w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input w-24" list="stores" placeholder="Magasin" maxlength="25"/></td><td><input type="text" class="input w-20" placeholder="Nom" maxlength="25" list="users"/></td><td><select class="custom-select input w-24"><option>Demandé</option><option>Commandé</option><option>Livré</option><option>Annulé</option></select></td><td><input type="date" class="input w-28"/></td><td><input type="date" class="input w-28"/></td><td><input type="number" step="1" class="input w-16" placeholder="Prix" min="0"/></td><td><input type="text" class="input w-24" placeholder="Notes" maxlength="250"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Du=(e,t,r)=>t(s(r)),Ru=(e,t,r)=>t(s(r).$id),Ou=S('<span class="loading loading-spinner loading-sm"></span>'),qu=S('<tr><td class="font-medium"> </td><td> </td><td> </td><td><div> </div></td><td class="text-xs"> </td><td class="text-xs"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),ju=S('<div class="overflow-x-auto"><table class="table-zebra table-sm table"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Statut</th><th>Date commande</th><th>Date livraison</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Bu=S(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat / une reccup / une commande</h4> <div class="mb-2 flex flex-wrap gap-4"><label class="input validator w-32"><!> <input placeholder="Quantité" type="number" step="1" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled selected>Unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select> <label class="input w-48"><!> <input type="text" placeholder="Magasin" list="stores" maxlength="25"/></label> <label class="input w-48"><!> <input class="w-full" type="text" placeholder="Qui" maxlength="25" list="users"/></label> <label class="input validator w-28"><span class="label">€</span> <input class="w-full" type="number" step="1" placeholder="Prix" min="0"/></label></div> <div class="mb-2 flex min-w-72"><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><label class=" w-52"><select class="custom-select input"><option selected>Acheté</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option></select></label> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>`);function Lu(e,t){V(t,!0);let r=Be(t,"modalState",7);function n(){return r()&&r().forms&&r().forms.purchase.quantity!==null&&r().forms.purchase.quantity!==0&&r().forms.purchase.unit?.trim()!==""}function a(ce){return ce.quantity!==null&&ce.quantity!==0&&ce.unit?.trim()!==""}function o(ce){r().removePurchase(ce)}function i(ce){r().startEditPurchase(ce)}var l=Bu(),c=u(l),f=u(c);Ft(f,{class:"h-5 w-5"});var v=d(c,2),g=u(v),p=d(u(g),2),m=u(p),_=u(m);vn(_,{class:"h-4 w-4 opacity-50"});var w=d(_,2),b=d(m,2),y=u(b);y.value=y.__value="";var P=d(y);P.value=P.__value="kg";var $=d(P);$.value=$.__value="gr.";var E=d($);E.value=E.__value="l.";var k=d(E);k.value=k.__value="ml";var T=d(k);T.value=T.__value="unité";var D=d(T);D.value=D.__value="bottes";var M=d(b,2),le=u(M);rr(le,{class:"h-4 w-4 opacity-50"});var J=d(le,2),K=d(M,2),ee=u(K);hn(ee,{class:"h-4 w-4 opacity-50"});var me=d(ee,2),j=d(K,2),I=d(u(j),2),Y=d(p,2),ae=u(Y),R=u(ae);ka(R,{class:"h-4 w-4 opacity-50"});var te=d(R,2),xe=d(Y,2),F=u(xe),N=u(F),X=u(N),pe=u(X);pe.value=pe.__value="delivered";var Se=d(pe);Se.value=Se.__value="ordered";var Re=d(Se);Re.value=Re.__value="requested";var O=d(N,2),re=d(F,2);{var Oe=ce=>{var Q=Tu(),_e=d(u(Q),2);De(_e,()=>r().forms.purchase.deliveryDate,Ve=>r().forms.purchase.deliveryDate=Ve),h(ce,Q)};C(re,ce=>{r().forms.purchase.status==="ordered"&&ce(Oe)})}var Te=d(xe,2),he=u(Te);he.__click=[$u,n,r];var ye=u(he);{var je=ce=>{var Q=Nu();h(ce,Q)},se=ce=>{var Q=at("Ajouter l'achat");h(ce,Q)};C(ye,ce=>{r().loading?ce(je):ce(se,!1)})}var we=d(v,2);{var Xe=ce=>{var Q=Cu(),_e=u(Q);Ft(_e,{class:"mx-auto mb-2 h-12 w-12"}),h(ce,Q)},ct=ce=>{var Q=ju(),_e=u(Q),Ve=d(u(_e));it(Ve,21,()=>r().purchasesList,Je=>Je.$id,(Je,de,Ne)=>{var Ue=G(),wt=q(Ue);{var kt=L=>{var ge=Iu(),$e=u(ge),ze=u($e),Ce=u(ze),We=d(Ce,2),rt=u(We);rt.value=rt.__value="kg";var ut=d(rt);ut.value=ut.__value="gr.";var nt=d(ut);nt.value=nt.__value="l.";var Ge=d(nt);Ge.value=Ge.__value="ml";var Qe=d(Ge);Qe.value=Qe.__value="unité";var pt=d(Qe);pt.value=pt.__value="bottes";var mt=d($e),zt=u(mt),St=d(mt),xr=u(St),Vt=d(St),Ut=u(Vt),ar=u(Ut);ar.value=ar.__value="requested";var Wt=d(ar);Wt.value=Wt.__value="ordered";var sr=d(Wt);sr.value=sr.__value="delivered";var Gt=d(sr);Gt.value=Gt.__value="cancelled";var Qt=d(Vt),Ht=u(Qt),or=d(Qt),Wr=u(or),Pr=d(or),_t=u(Pr),Kt=d(Pr),Er=u(Kt),Gr=d(Kt),Qr=u(Gr),$r=u(Qr);$r.__click=[ku,r,a];var zn=u($r);{var oe=Pe=>{var It=Mu();h(Pe,It)},be=Pe=>{mu(Pe,{class:"h-3 w-3"})};C(zn,Pe=>{r().loading?Pe(oe):Pe(be,!1)})}var Ie=d($r,2);Ie.__click=[Au,r];var Fe=u(Ie);Et(Fe,{class:"h-3 w-3"}),z(Pe=>$r.disabled=Pe,[()=>r().loading||!a(s(de))]),De(Ce,()=>s(de).quantity,Pe=>s(de).quantity=Pe),cr(We,()=>s(de).unit,Pe=>s(de).unit=Pe),De(zt,()=>s(de).store,Pe=>s(de).store=Pe),De(xr,()=>s(de).who,Pe=>s(de).who=Pe),cr(Ut,()=>s(de).status,Pe=>s(de).status=Pe),De(Ht,()=>s(de).orderDate,Pe=>s(de).orderDate=Pe),De(Wr,()=>s(de).deliveryDate,Pe=>s(de).deliveryDate=Pe),De(_t,()=>s(de).price,Pe=>s(de).price=Pe),De(Er,()=>s(de).notes,Pe=>s(de).notes=Pe),h(L,ge)},Ye=L=>{var ge=qu(),$e=u(ge),ze=u($e),Ce=d($e),We=u(Ce),rt=d(Ce),ut=u(rt),nt=d(rt),Ge=u(nt),Qe=u(Ge),pt=d(nt),mt=u(pt),zt=d(pt),St=u(zt),xr=d(zt),Vt=u(xr),Ut=d(xr),ar=u(Ut),Wt=d(Ut),sr=u(Wt),Gt=u(sr);Gt.__click=[Du,i,de];var Qt=u(Gt);En(Qt,{class:"h-4 w-4"});var Ht=d(Gt,2);Ht.__click=[Ru,o,de];var or=u(Ht);{var Wr=_t=>{var Kt=Ou();h(_t,Kt)},Pr=_t=>{Et(_t,{class:"h-4 w-4"})};C(or,_t=>{r().loading?_t(Wr):_t(Pr,!1)})}z((_t,Kt,Er,Gr,Qr)=>{B(ze,_t),B(We,s(de).store||"-"),B(ut,s(de).who||"-"),Ae(Ge,1,`badge badge-sm ${Kt??""}`),B(Qe,Er),B(mt,Gr),B(St,Qr),B(Vt,s(de).price?`${s(de).price}€`:"-"),B(ar,s(de).notes||"-"),Ht.disabled=r().loading},[()=>Bn(s(de).quantity,s(de).unit),()=>ua(s(de).status).class,()=>ua(s(de).status).text,()=>ls(s(de).orderDate),()=>ls(s(de).deliveryDate)]),h(L,ge)};C(wt,L=>{r().editingPurchaseId===s(de).$id?L(kt):L(Ye,!1)})}h(Je,Ue)}),h(ce,Q)};C(we,ce=>{r().purchasesList.length===0?ce(Xe):ce(ct,!1)})}z(ce=>{Ae(O,1,`label ${r().forms.purchase.status==="delivered"?"":"hidden"}`),he.disabled=ce},[()=>r().loading||!n()]),De(w,()=>r().forms.purchase.quantity,ce=>r().forms.purchase.quantity=ce),cr(b,()=>r().forms.purchase.unit,ce=>r().forms.purchase.unit=ce),De(J,()=>r().forms.purchase.store,ce=>r().forms.purchase.store=ce),De(me,()=>r().forms.purchase.who,ce=>r().forms.purchase.who=ce),De(I,()=>r().forms.purchase.price,ce=>r().forms.purchase.price=ce),De(te,()=>r().forms.purchase.notes,ce=>r().forms.purchase.notes=ce),cr(X,()=>r().forms.purchase.status,ce=>r().forms.purchase.status=ce),h(e,l),U()}Ze(["click"]);function zu(e,t){x(t,!s(t))}var Vu=S('<span class="text-base-content font-semibold"> </span>'),Uu=S('<div class="text-base-content/80 flex-1"> </div>'),Wu=S('<div class="flex gap-1"><span class="text-base-content/70 text-sm italic"><!></span> <!></div>'),Gu=S('<div id="collapse-content"><div class="text-base-content p-4 pt-0 text-sm"><!></div></div>'),Qu=S('<div><button type="button" aria-controls="collapse-content"><div class="flex items-center gap-3"><!> <!></div> <!> <!></button> <!></div>');function Go(e,t){let r=Be(t,"icon",3,nu),n=Be(t,"class",3,""),a=Be(t,"initiallyOpen",3,!1),o=r(),i=W(Me(a())),l=Me(t.children);var c=Qu(),f=u(c);f.__click=[zu,i];var v=u(f),g=u(v);o(g,{size:24,class:"text-base-content me-4 flex-shrink-0"});var p=d(g,2);{var m=E=>{var k=Vu(),T=u(k);z(()=>B(T,t.title)),h(E,k)};C(p,E=>{t.title&&E(m)})}var _=d(v,2);{var w=E=>{var k=Uu(),T=u(k);z(()=>B(T,t.contentVisible)),h(E,k)};C(_,E=>{t.contentVisible&&E(w)})}var b=d(_,2);{var y=E=>{var k=Wu(),T=u(k),D=u(T);{var M=K=>{var ee=at("en savoir plus");h(K,ee)},le=K=>{var ee=at("masquer");h(K,ee)};C(D,K=>{s(i)?K(le,!1):K(M)})}var J=d(T,2);{let K=Z(()=>`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${s(i)?"rotate-180":""}`);Kc(J,{get class(){return s(K)}})}h(E,k)};C(b,E=>{l&&E(y)})}var P=d(f,2);{var $=E=>{var k=Gu(),T=u(k),D=u(T);ie(D,()=>t.children??ne),z(()=>Ae(k,1,`overflow-hidden transition-all duration-200 ${s(i)?"max-h-96 opacity-100":"max-h-0 opacity-0"}`)),h(E,k)};C(P,E=>{l&&E($)})}z(()=>{Ae(c,1,`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${n()}`),to(c,t.style),Ae(f,1,`flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none ${(l&&"hover:cursor-pointer")??""}`),pr(f,"aria-expanded",s(i))}),h(e,c)}Ze(["click"]);async function Hu(e,t){await t()?.removeStock()}var Ku=S(`Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong>il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong> au stock. Les achats / réccup déclarés <strong>ultérieurement</strong> seront pris en compte dans le calcul des quantité manquantes à se fournir.`,1),Ju=(e,t)=>{t().forms.stock.quantity=null,t().forms.store.comment=""},Yu=S('<div class="py-8 text-center opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Zu=S('<div class="md:col-span-2"><span class="font-semibold">Notes:</span> <span class="ml-2"> </span></div>'),Xu=S('<span class="loading loading-spinner loading-xs"></span>'),Fu=S('<div class="card bg-base-100"><div class="card-body"><h4 class="card-title mb-4 text-base">Stock actuel</h4> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"><div><span class="font-semibold">Quantité:</span> <span class="badge badge-primary badge-lg ml-2"> </span></div> <div><span class="font-semibold">Date:</span> <span class="ml-2"> </span></div> <!></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-error btn-sm"><!></button></div></div></div>'),ed=S(`<div class="space-y-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base"> </h4> <div class="mb-4"><!></div> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="1" minlength="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Selectionné l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div> <!></div>`);function td(e,t){V(t,!0);let r=Be(t,"modalState",7);var n=ed(),a=u(n),o=u(a);ia(o,{class:"h-5 w-5"});var i=d(a,2),l=u(i),c=u(l),f=u(c),v=d(c,2),g=u(v);Go(g,{initiallyOpen:!0,contentVisible:`Cette section permet de gérer le stock réel de l'ingrédient.
          `,children:(I,Y)=>{var ae=Ku();h(I,ae)},$$slots:{default:!0}});var p=d(v,2),m=u(p),_=u(m);vn(_,{class:"h-4 w-4 opacity-50"});var w=d(_,2),b=d(m,2),y=u(b);y.value=y.__value="";var P=d(y);P.value=P.__value="kg";var $=d(P);$.value=$.__value="gr.";var E=d($);E.value=E.__value="l.";var k=d(E);k.value=k.__value="ml";var T=d(k);T.value=T.__value="unité";var D=d(T);D.value=D.__value="bottes";var M=d(p,2),le=u(M),J=d(M,2),K=u(J);K.__click=[Ju,r];var ee=d(i,2);{var me=I=>{var Y=Yu(),ae=u(Y);ia(ae,{class:"mx-auto mb-2 h-12 w-12"}),h(I,Y)},j=I=>{var Y=Fu(),ae=u(Y),R=d(u(ae),2),te=u(R),xe=d(u(te),2),F=u(xe),N=d(te,2),X=d(u(N),2),pe=u(X),Se=d(N,2);{var Re=ye=>{var je=Zu(),se=d(u(je),2),we=u(se);z(()=>B(we,r().stockParsed.notes)),h(ye,je)};C(Se,ye=>{r().stockParsed.notes&&ye(Re)})}var O=d(R,2),re=u(O);re.__click=[Hu,r];var Oe=u(re);{var Te=ye=>{var je=Xu();h(ye,je)},he=ye=>{var je=at("Supprimer le stock");h(ye,je)};C(Oe,ye=>{r().loading?ye(Te):ye(he,!1)})}z(ye=>{B(F,`${r().stockParsed.quantity??""}
              ${r().stockParsed.unit??""}`),B(pe,ye),re.disabled=r().loading},[()=>Ln(r().stockParsed.dateTime)]),h(I,Y)};C(ee,I=>{r().stockParsed?I(j,!1):I(me)})}z(I=>{B(f,`Déclarer le stock réel du ${I??""}`),K.disabled=r().loading},[()=>new Date().toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short",year:"numeric"})]),De(w,()=>r().forms.stock.quantity,I=>r().forms.stock.quantity=I),cr(b,()=>r().forms.stock.unit,I=>r().forms.stock.unit=I),De(le,()=>r().forms.stock.notes,I=>r().forms.stock.notes=I),h(e,n),U()}Ze(["click"]);var rd=(e,t,r)=>t(s(r).id),nd=S('<button><!> <span class="max-w-32 truncate"> </span> <!></button>'),ad=S('<span class="flex items-center gap-1"><!> </span>'),sd=S('<div class="mt-4 flex items-center justify-between text-sm opacity-70"><div class="flex items-center gap-4"><span class="flex items-center gap-1"><!> </span> <!></div> <span> </span></div>'),od=S('<div class="flex flex-wrap gap-2"></div> <!>',1);function dn(e,t){V(t,!0);let r=Be(t,"badgeSize",3,"badge-lg"),n=Be(t,"color",3,"primary"),a=Be(t,"badgeStyle",3,""),o=Be(t,"onToggleItem",3,()=>{}),i=Be(t,"showStats",3,!1),l=Be(t,"showIcon",3,!0),c=W(Me({}));wr(()=>{const b={};t.items.forEach(y=>{b[y.id]=y.selected??!0}),x(c,b,!0)});function f(b){s(c)[b]=!s(c)[b],o()(b)}const v=Z(()=>Object.values(s(c)).filter(Boolean).length),g=Z(()=>Object.values(s(c)).filter(b=>!b).length);var p=od(),m=q(p);it(m,21,()=>t.items,b=>b.id,(b,y)=>{const P=Z(()=>s(c)[s(y).id]);var $=nd();$.__click=[rd,f,y];var E=u($);{var k=J=>{var K=G(),ee=q(K);Cr(ee,()=>s(y).icon,(me,j)=>{j(me,{class:"h-3 w-3",get title(){return s(y).title}})}),h(J,K)};C(E,J=>{s(y).icon&&J(k)})}var T=d(E,2),D=u(T),M=d(T,2);{var le=J=>{var K=G(),ee=q(K);{var me=I=>{Br(I,{size:16})},j=I=>{fu(I,{size:16})};C(ee,I=>{s(P)?I(me):I(j,!1)})}h(J,K)};C(M,J=>{l()&&J(le)})}z(()=>{Ae($,1,`badge ${r()??""} badge-${n()??""} flex cursor-pointer items-center gap-2 transition-all duration-200
        ${s(P)?`${a()} hover:opacity-70 `:"badge-dash hover:border-solid "}`),pr($,"title",s(P)?"Retirer de la liste":"Réajouter à la liste"),B(D,s(y).label)}),h(b,$)});var _=d(m,2);{var w=b=>{var y=sd(),P=u(y),$=u(P),E=u($);Br(E,{class:"text-success h-3 w-3"});var k=d(E),T=d($,2);{var D=J=>{var K=ad(),ee=u(K);Et(ee,{class:"text-error h-3 w-3"});var me=d(ee);z(()=>B(me,` ${s(g)??""} retirés`)),h(J,K)};C(T,J=>{s(g)>0&&J(D)})}var M=d(P,2),le=u(M);z(()=>{B(k,` ${s(v)??""} actifs`),B(le,`Total: ${t.items.length??""} items`)}),h(b,y)};C(_,b=>{i()&&b(w)})}h(e,p),U()}Ze(["click"]);function id(e,t,r){t().forms.who=[...t().whoList],x(r,"")}var ld=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},cd=S('<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Gérer les volontaires</h4> <p class="mb-4 text-sm opacity-75">Ajoutez ou retirez des volontaires pour ce produit.</p> <div class="space-y-4"><div class="flex gap-2"><label class="input w-72"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Selection rapide</h5> <!></div></div> <div class="card-actions justify-end"><button class="btn btn-ghost btn-sm">Annuler</button></div></div></div></div>');function ud(e,t){V(t,!0);let r=Be(t,"modalState",7),n=W("");const a=Z(()=>{const D=new Set([...H.uniqueWho,...r().forms.who]);return Array.from(D).map(M=>({id:M,label:M,selected:r().forms.who.includes(M)}))});function o(D){const M=D.trim();M&&!r().forms.who.includes(M)&&(r().forms.who=[...r().forms.who,M])}function i(D){r().forms.who=r().forms.who.filter(M=>M!==D)}function l(D){r().forms.who.includes(D)?i(D):o(D)}function c(){s(n).trim()&&(o(s(n)),x(n,""))}var f=cd(),v=u(f),g=u(v),p=d(u(g),4),m=u(p),_=u(m),w=u(_);hn(w,{class:"h-4 w-4 opacity-50"});var b=d(w,2);b.__keydown=[ld,c];var y=d(_,2);y.__click=c;var P=u(y);Wo(P,{size:16});var $=d(m,2),E=d(u($),2);dn(E,{get items(){return s(a)},onToggleItem:l,showIcon:!0});var k=d(p,2),T=u(k);T.__click=[id,r,n],z(D=>{b.disabled=r().loading,y.disabled=D,T.disabled=r().loading},[()=>r().loading||!s(n).trim()]),De(b,()=>s(n),D=>x(n,D)),h(e,f),U()}Ze(["keydown","click"]);var dd=S('<div class="mb-1 text-xs opacity-70"> </div>'),fd=(e,t,r)=>t(s(r)),vd=S("<button><!> </button>"),hd=S('<div><!> <div class="flex flex-wrap gap-1"></div></div>');function Qo(e,t){V(t,!0);let r=Be(t,"maxSuggestions",3,8),n=Be(t,"title",3,"Suggestions :"),a=Be(t,"buttonSize",3,"btn-xs"),o=Be(t,"buttonVariant",3,"btn-soft"),i=Be(t,"disabled",3,!1);const l=Z(()=>t.suggestions.slice(0,r()));function c(p){!i()&&!p.disabled&&t.onSuggestionClick(p)}var f=G(),v=q(f);{var g=p=>{var m=hd(),_=u(m);{var w=y=>{var P=dd(),$=u(P);z(()=>B($,n())),h(y,P)};C(_,y=>{n()&&y(w)})}var b=d(_,2);it(b,21,()=>s(l),y=>y.id,(y,P)=>{var $=vd();$.__click=[fd,c,P];var E=u($);{var k=D=>{var M=G(),le=q(M);Cr(le,()=>s(P).icon,(J,K)=>{K(J,{class:"h-3 w-3"})}),h(D,M)};C(E,D=>{s(P).icon&&D(k)})}var T=d(E);z(()=>{Ae($,1,`btn ${a()??""} ${o()??""}`),$.disabled=i()||s(P).disabled,pr($,"title",s(P).disabled?"Déjà sélectionné":s(P).label),B(T,` ${s(P).label??""}`)}),h(y,$)}),h(p,m)};C(v,p=>{s(l).length>0&&p(g)})}h(e,f),U()}Ze(["click"]);var pd=(e,t)=>{e.key==="Enter"&&t()},md=(e,t)=>{t().forms.store.name="",t().forms.store.comment=""},_d=S(`<div class="space-y-4"><div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin</h4> <p class="mb-4 text-sm opacity-75">Définissez le magasin où vous prévoyez d'acheter ce produit.</p> <div class="grid-col-1 grid gap-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <textarea class="textarea flex w-full" placeholder="Commentaire (optionnel)" rows="1" maxlength="250">
        </textarea></div> <div class="card-actions mt-4 justify-end"><button class="btn btn-ghost btn-sm">Effacer</button></div></div></div></div>`);function gd(e,t){V(t,!0);let r=Be(t,"modalState",7);const n=Z(()=>r()?.hasChanges?.store||!1);async function a(){if(!s(n))return;const P={storeName:r().forms.store.name?.trim()||"",storeComment:r().forms.store.comment?.trim()||void 0};await r().updateStore(P)}var o=_d(),i=u(o),l=u(i),c=d(u(l),4),f=u(c),v=u(f),g=u(v);rr(g,{class:"h-4 w-4 opacity-50"});var p=d(g,2);p.__keydown=[pd,a];var m=d(v,2);{var _=P=>{{let $=Z(()=>H.uniqueStores.map(E=>({id:E,label:E,disabled:E===r().forms.store.name})));Qo(P,{get suggestions(){return s($)},onSuggestionClick:E=>{r().forms.store.name=E.label},buttonVariant:"btn-outline"})}};C(m,P=>{H.uniqueStores.length>0&&P(_)})}var w=d(f,2),b=d(c,2),y=u(b);y.__click=[md,r],z(()=>y.disabled=r().loading),De(p,()=>r().forms.store.name,P=>r().forms.store.name=P),De(w,()=>r().forms.store.comment,P=>r().forms.store.comment=P),h(e,o),U()}Ze(["keydown","click"]);async function bd(e,t,r,n,a,o){if(!t.modalState)return;const i={totalOverride:{q:s(r),u:s(n)},comment:s(a)};await t.modalState.setOverride(i),x(o,!1)}async function yd(e,t,r){t.modalState&&(await t.modalState.removeOverride(),x(r,!1))}var wd=S('<span class="badge badge-warning badge-sm ms-2">Modifié manuellement</span>'),Sd=S('<div class="bg-base-200 flex gap-2 rounded p-2 text-sm font-normal"><!> </div>'),xd=S(" <!>",1),Pd=(e,t)=>x(t,!0),Ed=S('<div class="flex items-center justify-between"><div><span class="text-base-content/80">Besoin total</span> <!> <div class="text-lg font-medium"><!></div></div></div> <button class="btn btn-sm btn-primary btn-outline ms-auto w-fit">Modifier</button>',1),$d=S('<div class="text-error text-sm">Limite de caractères atteinte</div>'),kd=S('<span class="loading loading-spinner loading-sm"></span>'),Ad=S('<span class="loading loading-spinner loading-sm"></span>'),Td=S(`<div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"><label class="input"><!> <input placeholder="Quantité" type="number" step="0.01" min="0.01" title="La quantité doit être supérieure à 0" required/></label> <select class="custom-select input w-32" required><option disabled>Sélectionner l'unité</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div> <div><div class="form-control"><div class="label"><span class="label-text">Commentaire (optionnel)</span></div> <textarea class="textarea flex w-full" placeholder="" rows="2" maxlength="250"></textarea> <!></div></div> <div class="card-actions mt-4 justify-between"><button class="btn btn-ghost btn-sm text-error"><!></button> <button class="btn btn-primary btn-sm"><!></button></div>`,1),Nd=S('<div class="mb-2 space-y-4"><div><div class="card-body p-4"><!></div></div></div>');function Cd(e,t){V(t,!0);const r=Z(()=>t.modalState.product?.totalNeededOverrideParsed),n=Z(()=>t.modalState.product?.displayTotalNeeded||[]);let a=W(!1),o=W(Me(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.q||t.modalState.product?.totalNeededArray[0]?.q||0)),i=W(Me(t.modalState.product?.totalNeededOverrideParsed?.totalOverride.u||t.modalState.product?.totalNeededArray[0]?.u||"")),l=W(Me(t.modalState.product?.totalNeededOverrideParsed?.comment||"")),c=Z(()=>s(o)>0&&s(i).trim()!=="");var f=Nd(),v=u(f),g=u(v),p=u(g);{var m=w=>{var b=Ed(),y=q(b),P=u(y),$=d(u(P),2);{var E=J=>{var K=wd();h(J,K)};C($,J=>{s(r)&&J(E)})}var k=d($,2),T=u(k);{var D=J=>{var K=xd(),ee=q(K),me=d(ee);{var j=I=>{var Y=Sd(),ae=u(Y);ka(ae,{});var R=d(ae);z(()=>B(R,` ${s(r).comment??""}`)),h(I,Y)};C(me,I=>{s(r).comment&&I(j)})}z(I=>B(ee,`${I??""} `),[()=>Bn(s(r).totalOverride.q,s(r).totalOverride.u)]),h(J,K)},M=J=>{var K=at();z(()=>B(K,s(n))),h(J,K)};C(T,J=>{s(r)?J(D):J(M,!1)})}var le=d(y,2);le.__click=[Pd,a],h(w,b)},_=w=>{var b=Td(),y=q(b),P=u(y),$=u(P);du($,{class:"h-4 w-4 opacity-50"});var E=d($,2),k=d(P,2),T=u(k);T.value=T.__value="";var D=d(T);D.value=D.__value="kg";var M=d(D);M.value=M.__value="gr.";var le=d(M);le.value=le.__value="l.";var J=d(le);J.value=J.__value="ml";var K=d(J);K.value=K.__value="unité";var ee=d(K);ee.value=ee.__value="bottes";var me=d(y,2),j=u(me),I=d(u(j),2),Y=d(I,2);{var ae=O=>{var re=$d();h(O,re)};C(Y,O=>{s(l).length>=250&&O(ae)})}var R=d(me,2),te=u(R);te.__click=[yd,t,a];var xe=u(te);{var F=O=>{var re=kd();h(O,re)},N=O=>{var re=at();z(()=>B(re,`Réinitialiser le total calculé (${s(n)??""}).`)),h(O,re)};C(xe,O=>{t.modalState.loading?O(F):O(N,!1)})}var X=d(te,2);X.__click=[bd,t,o,i,l,a];var pe=u(X);{var Se=O=>{var re=Ad();h(O,re)},Re=O=>{var re=at("Appliquer");h(O,re)};C(pe,O=>{t.modalState.loading?O(Se):O(Re,!1)})}z(()=>{te.disabled=t.modalState.loading,X.disabled=t.modalState.loading||!s(c)}),De(E,()=>s(o),O=>x(o,O)),cr(k,()=>s(i),O=>x(i,O)),De(I,()=>s(l),O=>x(l,O)),h(w,b)};C(p,w=>{s(a)?w(_,!1):w(m)})}z(()=>Ae(v,1,`card border-base-300 border ${s(a)?"bg-base-200":"bg-base-100"}`)),h(e,f),U()}Ze(["click"]);var Md=S('<div class="py-8 text-center opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Id=S('<tr><td class="font-medium"> </td><td> </td><td> </td></tr>'),Dd=S('<div class="overflow-x-auto"><table class="table-zebra table"><thead><tr><th>Recette</th><th>Quantité</th><th>Date</th></tr></thead><tbody></tbody></table></div>'),Rd=S('<!> <div class="space-y-6"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Recettes utilisant ce produit</h3> <!></div>',1);function Od(e,t){V(t,!0);const r=Z(()=>t.modalState.recipes);var n=Rd(),a=q(n);Cd(a,{get modalState(){return t.modalState}});var o=d(a,2),i=u(o),l=u(i);$a(l,{class:"h-5 w-5"});var c=d(i,2);{var f=g=>{var p=Md(),m=u(p);vn(m,{class:"mx-auto mb-2 h-12 w-12"}),h(g,p)},v=g=>{var p=Dd(),m=u(p),_=d(u(m));it(_,21,()=>s(r),w=>w.r,(w,b)=>{var y=Id(),P=u(y),$=u(P),E=d(P),k=u(E),T=d(E),D=u(T);z(M=>{B($,`${s(b).r??""} (${(s(b).a||"-")??""} c.)`),B(k,`${(s(b).q||s(b).qEq)??""} ${(s(b).u||s(b).uEq)??""}`),B(D,M)},[()=>Ln(s(b).date)]),h(w,y)}),h(g,p)};C(c,g=>{s(r).length===0?g(f):g(v,!1)})}h(e,n),U()}function qd(e,t,r){s(t).saveAllChanges().then(()=>{r.onClose()})}var jd=S('<div class="text-xl font-bold"> </div> <div class="me-2 mt-2 flex items-center gap-3"><span class="badge badge-secondary"> </span> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div>',1),Bd=S('<div class="flex items-center gap-3"><div class="loading loading-spinner loading-sm"></div> <span class="text-sm opacity-50">Chargement du produit...</span></div>'),Ld=(e,t)=>t("recettes"),zd=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Vd=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Ud=(e,t)=>t("magasins"),Wd=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Gd=(e,t)=>t("volontaires"),Qd=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Hd=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Kd=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Jd=(e,t)=>t("stock"),Yd=S('<div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>'),Zd=S('<span class="badge badge-sm badge-secondary ml-1">1</span>'),Xd=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),Fd=(e,t)=>t("achats"),ef=S('<span class="badge badge-sm badge-secondary ml-1"> </span>'),tf=S('<span class="badge badge-sm badge-ghost ml-1">0</span>'),rf=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),nf=S('<span class="loading loading-spinner loading-sm"></span>'),af=S('<div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Magasin <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Achats <!></button></div> <div class="min-h-96 flex-1 overflow-y-auto p-4"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost"> </button> <button class="btn btn-primary"><!></button></div>',1),sf=S('<div class="modal modal-open"><div class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"><div class="flex items-center justify-between border-b p-4 pt-0"><!> <button class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" aria-label="Fermer"><!></button></div> <!></div></div>');function of(e,t){V(t,!0);let r=Be(t,"initialTab",3,"recettes"),n=Z(()=>Eu(t.productId)),a=W(Me(r()));function o(b){x(a,b,!0)}var i=sf(),l=u(i),c=u(l),f=u(c);{var v=b=>{var y=jd(),P=q(y),$=u(P),E=d(P,2),k=u(E),T=u(k),D=d(k,2),M=d(u(D));z(()=>{B($,s(n).product?.productName),B(T,s(n).product?.productType),B(M,` ${s(n).product?.displayTotalNeeded??""}`)}),h(b,y)},g=b=>{var y=Bd();h(b,y)};C(f,b=>{s(n)&&s(n).product?b(v):b(g,!1)})}var p=d(f,2);p.__click=function(...b){t.onClose?.apply(this,b)};var m=u(p);Et(m,{class:"h-4 w-4"});var _=d(c,2);{var w=b=>{var y=af(),P=q(y),$=u(P);$.__click=[Ld,o];var E=u($);$a(E,{class:"mr-1 h-5 w-5"});var k=d(E,2);{var T=Q=>{var _e=zd(),Ve=u(_e);z(()=>B(Ve,s(n).product?.nbRecipes)),h(Q,_e)},D=Q=>{var _e=Vd();h(Q,_e)};C(k,Q=>{s(n).product?.nbRecipes&&s(n).product?.nbRecipes>0?Q(T):Q(D,!1)})}var M=d($,2);M.__click=[Ud,o];var le=u(M);rr(le,{class:"mr-1 h-5 w-5"});var J=d(le,2);{var K=Q=>{var _e=Wd();h(Q,_e)};C(J,Q=>{s(n).hasChanges?.store&&Q(K)})}var ee=d(M,2);ee.__click=[Gd,o];var me=u(ee);la(me,{class:"mr-1 h-5 w-5"});var j=d(me,2);{var I=Q=>{var _e=Qd();h(Q,_e)},Y=Q=>{var _e=G(),Ve=q(_e);{var Je=Ne=>{var Ue=Hd(),wt=u(Ue);z(()=>B(wt,s(n).product?.who.length)),h(Ne,Ue)},de=Ne=>{var Ue=Kd();h(Ne,Ue)};C(Ve,Ne=>{s(n).product?.who&&s(n).product?.who.length>0?Ne(Je):Ne(de,!1)},!0)}h(Q,_e)};C(j,Q=>{s(n).hasChanges?.who?Q(I):Q(Y,!1)})}var ae=d(ee,2);ae.__click=[Jd,o];var R=u(ae);ia(R,{class:"mr-1 h-5 w-5"});var te=d(R,2);{var xe=Q=>{var _e=Yd();h(Q,_e)},F=Q=>{var _e=G(),Ve=q(_e);{var Je=Ne=>{var Ue=Zd();h(Ne,Ue)},de=Ne=>{var Ue=Xd();h(Ne,Ue)};C(Ve,Ne=>{s(n).stockParsed?Ne(Je):Ne(de,!1)},!0)}h(Q,_e)};C(te,Q=>{s(n).hasChanges?.stock?Q(xe):Q(F,!1)})}var N=d(ae,2);N.__click=[Fd,o];var X=u(N);Ft(X,{class:"mr-1 h-5 w-5"});var pe=d(X,2);{var Se=Q=>{var _e=ef(),Ve=u(_e);z(()=>B(Ve,s(n).purchasesList.length)),h(Q,_e)},Re=Q=>{var _e=tf();h(Q,_e)};C(pe,Q=>{s(n).purchasesList.length>0?Q(Se):Q(Re,!1)})}var O=d(P,2),re=u(O);{var Oe=Q=>{var _e=rf(),Ve=u(_e);Et(Ve,{class:"h-4 w-4"});var Je=d(Ve,2),de=u(Je);z(()=>B(de,`erreur : ${s(n).error??""}`)),h(Q,_e)};C(re,Q=>{s(n).error&&Q(Oe)})}var Te=d(re,2),he=u(Te);ml(he,()=>s(a),Q=>{var _e=G(),Ve=q(_e);{var Je=Ne=>{Od(Ne,{get modalState(){return s(n)}})},de=Ne=>{var Ue=G(),wt=q(Ue);{var kt=L=>{Lu(L,{get modalState(){return s(n)}})},Ye=L=>{var ge=G(),$e=q(ge);{var ze=We=>{td(We,{get modalState(){return s(n)}})},Ce=We=>{var rt=G(),ut=q(rt);{var nt=Qe=>{ud(Qe,{get modalState(){return s(n)}})},Ge=Qe=>{var pt=G(),mt=q(pt);{var zt=St=>{gd(St,{get modalState(){return s(n)}})};C(mt,St=>{s(a)==="magasins"&&St(zt)},!0)}h(Qe,pt)};C(ut,Qe=>{s(a)==="volontaires"?Qe(nt):Qe(Ge,!1)},!0)}h(We,rt)};C($e,We=>{s(a)==="stock"?We(ze):We(Ce,!1)},!0)}h(L,ge)};C(wt,L=>{s(a)==="achats"?L(kt):L(Ye,!1)},!0)}h(Ne,Ue)};C(Ve,Ne=>{s(a)==="recettes"?Ne(Je):Ne(de,!1)})}h(Q,_e)});var ye=d(O,2),je=u(ye);je.__click=function(...Q){t.onClose?.apply(this,Q)};var se=u(je),we=d(je,2);we.__click=[qd,n,t];var Xe=u(we);{var ct=Q=>{var _e=nf();h(Q,_e)},ce=Q=>{var _e=at("Tout enregistrer");h(Q,_e)};C(Xe,Q=>{s(n).loading?Q(ct):Q(ce,!1)})}z(()=>{Ae($,1,`tab ${s(a)==="recettes"?"tab-active":""}`),Ae(M,1,`tab ${s(a)==="magasins"?"tab-active":""}`),Ae(ee,1,`tab ${s(a)==="volontaires"?"tab-active":""}`),Ae(ae,1,`tab ${s(a)==="stock"?"tab-active":""}`),Ae(N,1,`tab ${s(a)==="achats"?"tab-active":""}`),B(se,s(n)?.hasAnyChanges?"Annuler":"Fermer"),we.disabled=s(n).loading||!s(n).hasAnyChanges}),h(b,y)};C(_,b=>{s(n)&&b(w)})}h(e,i),U()}Ze(["click"]);async function lf(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){x(n,null),x(a,null);try{const c=s(o).map(g=>g.id),f=i.products.filter(g=>c.includes(g.$id));H.setSyncStatus(c,!0),i.onClose();const v=await jo(c,f,s(l),"replace");if(x(a,v,!0),v.success)console.log(`[WhoEditModal] Mise à jour groupée réussie: ${v.updatedCount} produits modifiés`),i.onSuccess?.(v);else throw new Error(v.error||"Erreur lors de la mise à jour")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";x(n,f,!0),console.error("[WhoEditModal] Erreur mise à jour:",c),H.clearSyncStatus()}finally{x(r,!1)}}}function cs(e,t,r){s(t)||r.onClose()}var cf=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),uf=(e,t)=>{e.key==="Enter"&&(e.preventDefault(),t())},df=(e,t)=>x(t,"empty"),ff=(e,t)=>x(t,"all"),vf=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),hf=S("<!> ",1),pf=S('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div><div class="flex gap-2"><label class="input flex-1"><!> <input type="text" class="w-full" placeholder="Ajouter un volontaire..."/></label> <button class="btn btn-square btn-primary"><!></button></div> <div><h5 class="mb-2 font-medium">Sélection rapide</h5> <!></div></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans volontaire attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function mf(e,t){V(t,!0);let r=W(!1),n=W(null),a=W(null),o=W(Me([])),i=W(""),l=W("empty"),c=W(Me({}));wr(()=>{const se={};t.products.forEach(we=>{t.productIds.includes(we.$id)&&(s(l)==="empty"?se[we.$id]=!we.who||we.who.length===0:se[we.$id]=!0)}),x(c,se,!0)});const f=Z(()=>t.products.map(se=>({id:se.$id,label:se.productName,title:se.productName,selected:s(c)[se.$id]}))),v=Z(()=>s(f).filter(se=>se.selected)),g=Z(()=>{const se=new Set([...H.uniqueWho,...s(o)]);return Array.from(se).map(we=>({id:we,label:we,selected:s(o).includes(we)}))}),p=Z(()=>`Gérer les volontaires (${s(v).length} produits sélectionnés)`),m=Z(()=>s(v).length===0?!1:s(o).length>0);function _(se){const we=se.trim();we&&!s(o).includes(we)&&x(o,[...s(o),we],!0)}function w(se){x(o,s(o).filter(we=>we!==se),!0)}function b(se){s(o).includes(se)?w(se):_(se)}function y(){s(i).trim()&&(_(s(i)),x(i,""))}function P(se){s(c)[se]=!s(c)[se]}var $=pf(),E=u($),k=u(E),T=u(k),D=u(T),M=d(T,2);M.__click=[cs,r,t];var le=u(M);Et(le,{class:"h-4 w-4"});var J=d(k,2),K=u(J);{var ee=se=>{var we=cf(),Xe=u(we);jn(Xe,{class:"h-4 w-4"});var ct=d(Xe,2),ce=u(ct);z(()=>B(ce,s(n))),h(se,we)};C(K,se=>{s(n)&&se(ee)})}var me=d(K,2),j=u(me),I=u(j),Y=u(I),ae=u(Y);hn(ae,{class:"h-4 w-4 opacity-50"});var R=d(ae,2);R.__keydown=[uf,y];var te=d(Y,2);te.__click=y;var xe=u(te);Wo(xe,{size:16});var F=d(I,2),N=d(u(F),2);dn(N,{get items(){return s(g)},onToggleItem:b,showIcon:!0});var X=d(me,2),pe=d(u(X),2),Se=u(pe);Se.__click=[df,l];var Re=d(Se,2);Re.__click=[ff,l];var O=d(pe,2);dn(O,{get items(){return s(f)},onToggleItem:P,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var re=d(J,2),Oe=u(re);Oe.__click=[cs,r,t];var Te=d(Oe,2);Te.__click=[lf,m,r,n,a,v,t,o];var he=u(Te);{var ye=se=>{var we=vf();h(se,we)},je=se=>{var we=hf(),Xe=q(we);Br(Xe,{class:"h-4 w-4"});var ct=d(Xe);z(()=>B(ct,` Appliquer à ${s(v).length??""} produit(s)`)),h(se,we)};C(he,se=>{s(r)?se(ye):se(je,!1)})}z(se=>{B(D,s(p)),M.disabled=s(r),R.disabled=s(r),te.disabled=se,Ae(Se,1,`tab ${s(l)==="empty"?"tab-active":""}`),Ae(Re,1,`tab ${s(l)==="all"?"tab-active":""}`),Oe.disabled=s(r),Te.disabled=s(r)||!s(m)},[()=>s(r)||!s(i).trim()]),De(R,()=>s(i),se=>x(i,se)),h(e,$),U()}Ze(["click","keydown"]);async function _f(e,t,r,n,a,o,i,l,c){if(!(!s(t)||s(r))){x(n,null),x(a,null);try{const f=s(o).map(m=>m.id),v=i.products.filter(m=>f.includes(m.$id));H.setSyncStatus(f,!0),i.onClose();const g={storeName:s(l).trim(),storeComment:s(c).trim()},p=await qo(f,v,g);if(x(a,p,!0),p.success)console.log(`[StoreEditModal] Mise à jour groupée réussie: ${p.updatedCount} produits modifiés`),i.onSuccess?.(p);else throw new Error(p.error||"Erreur lors de la mise à jour")}catch(f){const v=f instanceof Error?f.message:"Erreur inconnue";x(n,v,!0),console.error("[StoreEditModal] Erreur mise à jour:",f),H.clearSyncStatus()}finally{x(r,!1)}}}function us(e,t,r){s(t)||r.onClose()}var gf=S('<div class="alert alert-error mb-4"><!> <span> </span></div>'),bf=(e,t)=>x(t,"empty"),yf=(e,t)=>x(t,"all"),wf=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),Sf=S("<!> ",1),xf=S('<div class="modal modal-open"><div class="modal-box max-w-2xl"><div class="flex items-center justify-between border-b pb-4"><h3 class="text-lg font-semibold"> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="py-6"><!> <div class="space-y-4"><div class="flex flex-wrap items-center gap-x-5 gap-y-2"><label class="input"><!> <input id="store-name-input" type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <!></div> <div><textarea id="store-comment-textarea" class="textarea w-full" placeholder="Commentaire sur le magasin..." rows="2" maxlength="250"></textarea></div></div> <div class="my-4"><h4 class="mb-1 font-medium">Produits concernés</h4> <div role="tablist" class="tabs mb-1 flex justify-end"><button>Produits sans magasin attribué</button> <button>Tous les produits du groupe</button></div> <!></div></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div>');function Pf(e,t){V(t,!0);let r=W(!1),n=W(null),a=W(null),o=W(Me(t.products.length>0&&t.products[0].storeInfo?t.products[0].storeInfo.storeName:"")),i=W(Me(t.products.length>0&&t.products[0].storeInfo&&t.products[0].storeInfo.storeComment||"")),l=W(Me({})),c=W("empty");wr(()=>{const O={};t.products.forEach(re=>{t.productIds.includes(re.$id)&&(s(c)==="empty"?O[re.$id]=!re.storeInfo||!re.storeInfo.storeName:O[re.$id]=!0)}),x(l,O,!0)});const f=Z(()=>t.products.map(O=>({id:O.$id,label:O.productName,title:O.productName,selected:s(l)[O.$id]}))),v=Z(()=>s(f).filter(O=>O.selected)),g=Z(()=>`Attribuer un magasin (${s(v).length} produits sélectionnés)`),p=Z(()=>s(v).length===0?!1:s(o).trim().length>0);function m(O){s(l)[O]=!s(l)[O]}var _=xf(),w=u(_),b=u(w),y=u(b),P=u(y),$=d(y,2);$.__click=[us,r,t];var E=u($);Et(E,{class:"h-4 w-4"});var k=d(b,2),T=u(k);{var D=O=>{var re=gf(),Oe=u(re);jn(Oe,{class:"h-4 w-4"});var Te=d(Oe,2),he=u(Te);z(()=>B(he,s(n))),h(O,re)};C(T,O=>{s(n)&&O(D)})}var M=d(T,2),le=u(M),J=u(le),K=u(J);rr(K,{class:"h-4 w-4 opacity-50"});var ee=d(K,2),me=d(J,2);{let O=Z(()=>H.uniqueStores.map(re=>({id:re,label:re,disabled:re===s(o)})));Qo(me,{get suggestions(){return s(O)},onSuggestionClick:re=>{x(o,re.label,!0)},title:"Suggestions de magasins :"})}var j=d(le,2),I=u(j),Y=d(M,2),ae=d(u(Y),2),R=u(ae);R.__click=[bf,c];var te=d(R,2);te.__click=[yf,c];var xe=d(ae,2);dn(xe,{get items(){return s(f)},onToggleItem:m,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var F=d(k,2),N=u(F);N.__click=[us,r,t];var X=d(N,2);X.__click=[_f,p,r,n,a,v,t,o,i];var pe=u(X);{var Se=O=>{var re=wf();h(O,re)},Re=O=>{var re=Sf(),Oe=q(re);Br(Oe,{class:"h-4 w-4"});var Te=d(Oe);z(()=>B(Te,` Appliquer à ${s(v).length??""} produit(s)`)),h(O,re)};C(pe,O=>{s(r)?O(Se):O(Re,!1)})}z(()=>{B(P,s(g)),$.disabled=s(r),ee.disabled=s(r),I.disabled=s(r),Ae(R,1,`tab ${s(c)==="empty"?"tab-active":""}`),Ae(te,1,`tab ${s(c)==="all"?"tab-active":""}`),N.disabled=s(r),X.disabled=s(r)||!s(p)}),De(ee,()=>s(o),O=>x(o,O)),De(I,()=>s(i),O=>x(i,O)),h(e,_),U()}Ze(["click"]);function Ef(e,t){const r=e.reduce((a,o)=>{const i=o.isSynced?0:1,l=o.missingQuantities.length;return a+i+l},0),n=t.invoiceTotal?1:0;return r+n}async function $f(e,t){const r=e.filter(c=>!c.isSynced).map(c=>({productId:c.productId,productData:c.productData}));let n=null;try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");n=(await(await window.AppwriteClient.getAccount()).get()).$id}catch(c){console.warn("[Appwrite Transaction] Impossible de récupérer l'utilisateur connecté:",c)}const a=t.purchaseStatus||"delivered";let o=t.purchaseDeliveryDate||null;a==="delivered"&&!o&&(o=new Date().toISOString());const i=e.flatMap(c=>c.missingQuantities.map(f=>({productId:c.productId,quantity:f.q,unit:f.u,status:a,notes:t.notes||"",store:t.store||"",who:t.who||null,price:null,orderDate:null,deliveryDate:o,createdBy:n})));return{mainId:e[0]?.productData?.mainId,batchData:{productsToCreate:r,purchasesToCreate:i},invoiceData:t}}async function kf(e,t,r){if(!t?.length)return{success:!1,results:[],totalProductsCreated:0,totalPurchasesCreated:0,totalExpensesCreated:0,error:"Aucun produit à traiter"};t.forEach(p=>{p.productData&&(p.productData.mainId=e)});const n=Ef(t,r);console.log(`[Appwrite Interactions] Achat groupé: ${t.length} produits, ${n} opérations totales`);const a=100,o=[];if(n<=a)o.push(t);else{let p=[],m=0;for(const _ of t){const w=(_.isSynced?0:1)+_.missingQuantities.length;m+w>a?(p.length>0&&o.push(p),p=[_],m=w):(p.push(_),m+=w)}p.length>0&&o.push(p)}console.log(`[Appwrite Interactions] Découpage en ${o.length} lots pour respecter la limite de 100 opérations`);const i=[];let l=0,c=0,f=0;for(let p=0;p<o.length;p++){const m=o[p];console.log(`[Appwrite Interactions] Exécution du lot ${p+1}/${o.length} (${m.length} produits)`);try{const _=await $f(m,r),w=await Af(_);if(i.push(w),w.success)l+=w.productsCreated,c+=w.purchasesCreated,f+=w.expenseCreated?1:0;else{console.error(`[Appwrite Interactions] Erreur sur le lot ${p+1}: ${w.error}`);break}}catch(_){const w=_ instanceof Error?_.message:"Erreur inconnue";console.error(`[Appwrite Interactions] Erreur lors de l'exécution du lot ${p+1}:`,_),i.push({success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:r.invoiceId,error:w,timestamp:new Date().toISOString()});break}}const v=i.every(p=>p.success),g=i.some(p=>!p.success);return{success:v,results:i,totalProductsCreated:l,totalPurchasesCreated:c,totalExpensesCreated:f,error:g?"Un ou plusieurs lots ont échoué":void 0}}async function Af(e){try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const t=await window.AppwriteClient.getFunctions(),r=window.AppwriteClient.getConfig(),n={operation:"createGroupPurchaseWithSync",data:e};console.log(`[Appwrite Interactions] Exécution du lot: ${e.batchData.productsToCreate.length} produits à créer, ${e.batchData.purchasesToCreate.length} achats à créer`);const a=await t.createExecution(r.APPWRITE_CONFIG.functions.batchUpdate,JSON.stringify(n),!1,"/","POST");if(a.status!=="completed")throw new Error(`Exécution échouée avec statut: ${a.status}. Erreur: ${a.stderr}`);const o=JSON.parse(a.responseBody);return o.success?console.log(`[Appwrite Interactions] Lot exécuté avec succès: ${o.productsCreated} produits créés, ${o.purchasesCreated} achats créés`):console.error("[Appwrite Interactions] Lot échoué:",o.error),o}catch(t){console.error("[Appwrite Interactions] Erreur exécution lot:",t);const r=t instanceof Error?t.message:"Erreur inconnue";return{success:!1,productsCreated:0,purchasesCreated:0,expenseCreated:!1,totalOperations:0,invoiceId:e.invoiceData.invoiceId,error:r,timestamp:new Date().toISOString()}}}async function Tf(e,t,r,n,a,o,i,l){if(!(!s(t)||s(r))){x(r,!0),x(n,null),x(a,null);try{const c=`FACTURE_${Date.now()}`,f=s(o).map(m=>m.$id);H.setSyncStatus(f,!0);const v=[];for(const m of s(o))v.push({productId:m.$id,isSynced:m.isSynced,productData:m,missingQuantities:m.missingQuantityArray||[]});const g={invoiceId:c,invoiceTotal:i.expense||void 0,store:i.store.trim()||void 0,notes:i.notes||`Achat groupé pour ${s(o).length} produits`,who:i.who.trim()||void 0,purchaseStatus:i.status||"delivered",purchaseDeliveryDate:i.deliveryDate||null};console.log(`[GroupPurchaseModal] Création achat groupé avec sync pour ${v.length} produits...`),l.onClose();const p=await kf(H.currentMainId,v,g);if(p.success)x(a,{purchases:p.totalPurchasesCreated,expense:p.totalExpensesCreated>0,batches:p.results.length},!0),console.log(`[GroupPurchaseModal] Achat groupé créé avec succès: ${p.totalProductsCreated} produits synchronisés, ${p.totalPurchasesCreated} achats créés, ${p.totalExpensesCreated} dépenses globales`),l.onSuccess?.();else throw new Error(p.error||"Erreur lors de la création de l'achat groupé")}catch(c){const f=c instanceof Error?c.message:"Erreur inconnue";x(n,f,!0),console.error("[GroupPurchaseModal] Erreur création achat groupé:",c),H.clearSyncStatus()}finally{x(r,!1)}}}function ds(e,t,r){s(t)||r.onClose()}var Nf=S('<div class="alert alert-error"><!> <span> </span></div>'),Cf=S('<div class="alert alert-success"><!> <span> <!> <!></span></div>'),Mf=S(`<p>Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.</p> <p>Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.</p>`,1),If=S("<option> </option>"),Df=S("<option> </option>"),Rf=S('<div><label class="input"><span class="label">Date de livraison prévue</span> <input type="date"/></label></div>'),Of=S('<span class="loading loading-spinner loading-sm"></span> En cours...',1),qf=S("<!> ",1),jf=S(`<div class="modal modal-open"><div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto"><div class="flex items-center justify-between border-b pb-4"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> </h3> <button class="btn btn-sm btn-circle btn-ghost"><!></button></div> <div class="space-y-6 py-6"><!> <!> <div><!></div> <div class="space-y-4"><h4 class="font-medium">Détails de l'achat</h4> <div class="items-top flex flex-wrap gap-4"><div><label class="input"><!> <input type="text" placeholder="Nom du magasin" list="stores" maxlength="50"/></label> <datalist id="stores"></datalist></div> <div><label class="input"><!> <input type="text" placeholder="Qui" list="users" maxlength="50"/></label> <datalist id="users"></datalist></div> <div><label class="input w-28"><!> <input type="number" placeholder="0.00" step="1" min="0"/></label></div></div> <div class="flex w-full flex-wrap gap-4"><div class="flex flex-col"><select class="custom-select input w-52"><option selected>Livré</option><option title="La commande à été passée">Commandé</option><option title="Le fournisseur doit confirmer la disponibilité du produit">Demandé</option><option>Annulé</option></select> <div>Modifiez s'il s'agit d'une commande / pré-commande</div></div> <!></div> <div><label class="input validator flex w-2/3"><!> <input type="text" placeholder="Commentaires..." maxlength="250"/></label></div></div> <div><h4 class="mb-3 font-medium">Produits concernés</h4> <!></div> <div class="modal-action"><button class="btn btn-ghost">Annuler</button> <button class="btn btn-primary"><!></button></div></div></div></div>`);function Bf(e,t){V(t,!0);let r=W(!1),n=W(null),a=W(null),o=Me({store:"",who:"",expense:null,notes:"",status:"delivered",orderDate:null,deliveryDate:null}),i=W(Me(new Set));wr(()=>{x(i,new Set(t.products.map(L=>L.$id)),!0)});const l=Z(()=>t.products.filter(L=>s(i).has(L.$id))),c=Z(()=>s(l).length!==0),f=Z(()=>`Achat groupé (${s(l).length} produits sélectionnés)`);function v(L){const ge=new Set(s(i));ge.has(L)?ge.delete(L):ge.add(L),x(i,ge,!0)}const g=Z(()=>t.products.map(L=>({id:L.$id,label:L.productName,title:L.productName})));var p=jf(),m=u(p),_=u(m),w=u(_),b=u(w);Ft(b,{class:"h-5 w-5"});var y=d(b),P=d(w,2);P.__click=[ds,r,t];var $=u(P);Et($,{class:"h-4 w-4"});var E=d(_,2),k=u(E);{var T=L=>{var ge=Nf(),$e=u(ge);jn($e,{class:"h-4 w-4"});var ze=d($e,2),Ce=u(ze);z(()=>B(Ce,s(n))),h(L,ge)};C(k,L=>{s(n)&&L(T)})}var D=d(k,2);{var M=L=>{var ge=Cf(),$e=u(ge);Br($e,{class:"h-4 w-4"});var ze=d($e,2),Ce=u(ze),We=d(Ce);{var rt=Ge=>{var Qe=at("+ 1 dépense globale");h(Ge,Qe)};C(We,Ge=>{s(a).expense&&Ge(rt)})}var ut=d(We,2);{var nt=Ge=>{var Qe=at();z(()=>B(Qe,`(traité en ${s(a).batches??""} lots)`)),h(Ge,Qe)};C(ut,Ge=>{s(a).batches&&s(a).batches>1&&Ge(nt)})}z(()=>B(Ce,`Achat groupé créé avec succès ! ${s(a).purchases??""} produit(s) validés `)),h(L,ge)};C(D,L=>{s(a)&&L(M)})}var le=d(D,2),J=u(le);Go(J,{contentVisible:"Un 'achat' sera créé avec les quantités manquantes pour chaque produit.",class:"bg-base-200",children:(L,ge)=>{var $e=Mf();h(L,$e)},$$slots:{default:!0}});var K=d(le,2),ee=d(u(K),2),me=u(ee),j=u(me),I=u(j);rr(I,{class:"h-4 w-4 opacity-50"});var Y=d(I,2),ae=d(j,2);it(ae,21,()=>H.uniqueStores,ta,(L,ge)=>{var $e=If(),ze=u($e),Ce={};z(()=>{B(ze,s(ge)),Ce!==(Ce=s(ge))&&($e.value=($e.__value=s(ge))??"")}),h(L,$e)});var R=d(me,2),te=u(R),xe=u(te);hn(xe,{class:"h-4 w-4 opacity-50"});var F=d(xe,2),N=d(te,2);it(N,21,()=>H.uniqueWho,ta,(L,ge)=>{var $e=Df(),ze=u($e),Ce={};z(()=>{B(ze,s(ge)),Ce!==(Ce=s(ge))&&($e.value=($e.__value=s(ge))??"")}),h(L,$e)});var X=d(R,2),pe=u(X),Se=u(pe);tu(Se,{class:"h-4 w-4 opacity-50"});var Re=d(Se,2),O=d(ee,2),re=u(O),Oe=u(re),Te=u(Oe);Te.value=Te.__value="delivered";var he=d(Te);he.value=he.__value="ordered";var ye=d(he);ye.value=ye.__value="requested";var je=d(ye);je.value=je.__value="cancelled";var se=d(Oe,2),we=d(re,2);{var Xe=L=>{var ge=Rf(),$e=u(ge),ze=d(u($e),2);z(()=>ze.disabled=s(r)),De(ze,()=>o.deliveryDate,Ce=>o.deliveryDate=Ce),h(L,ge)};C(we,L=>{o.status==="ordered"&&L(Xe)})}var ct=d(O,2),ce=u(ct),Q=u(ce);ka(Q,{class:"h-4 w-4 opacity-50"});var _e=d(Q,2),Ve=d(K,2),Je=d(u(Ve),2);dn(Je,{get items(){return s(g)},onToggleItem:v,badgeSize:"badge-md",badgeStyle:"badge-soft",color:"success"});var de=d(Ve,2),Ne=u(de);Ne.__click=[ds,r,t];var Ue=d(Ne,2);Ue.__click=[Tf,c,r,n,a,l,o,t];var wt=u(Ue);{var kt=L=>{var ge=Of();h(L,ge)},Ye=L=>{var ge=qf(),$e=q(ge);Ft($e,{class:"h-4 w-4"});var ze=d($e);z(()=>B(ze,` Valider ${s(l).length??""} produit(s)`)),h(L,ge)};C(wt,L=>{s(r)?L(kt):L(Ye,!1)})}z(()=>{B(y,` ${s(f)??""}`),P.disabled=s(r),Y.disabled=s(r),F.disabled=s(r),Re.disabled=s(r),Oe.disabled=s(r),Ae(se,1,`label text-sm ${o.status==="delivered"?"":"hidden"}`),_e.disabled=s(r),Ne.disabled=s(r),Ue.disabled=s(r)||!s(c)}),De(Y,()=>o.store,L=>o.store=L),De(F,()=>o.who,L=>o.who=L),De(Re,()=>o.expense,L=>o.expense=L),cr(Oe,()=>o.status,L=>o.status=L),De(_e,()=>o.notes,L=>o.notes=L),h(e,p),U()}Ze(["click"]);var Lf=(e,t,r)=>t(r),zf=S("<button><span> </span> <!></button>"),Vf=(e,t)=>t(),Uf=S('<div class="space-y-4"><div class="space-y-2"><fieldset><legend class="label"><span class="label-text">Dates incluses</span></legend> <div class="flex flex-wrap gap-1 mb-2"></div> <button class="btn btn-sm btn-primary btn-outline" type="button"><span>Toutes les dates</span></button></fieldset></div></div>');function Wf(e,t){V(t,!0);let r=Be(t,"availableDates",19,()=>[]),n=Be(t,"currentRange",19,()=>({start:null,end:null})),a=W(Me(n().start)),o=W(Me(n().end));wr(()=>{x(a,n().start,!0),x(o,n().end,!0)});function i(b){s(a)===b&&s(o)===b?v():new Date(b)<new Date(s(a))?x(a,b,!0):(new Date(b)>new Date(s(o))||x(a,b,!0),x(o,b,!0)),t.onRangeChange(s(a),s(o))}function l(b){return new Date(b)>=new Date(s(a))&&new Date(b)<=new Date(s(o))?"btn-soft btn-primary":"btn-dash btn-primary opacity-80"}function c(b){return new Date(b).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}function f(b){const P=new Date(b).getUTCHours();return P===12?"sun":P===20?"moon":P===8?"cloud":null}function v(){r().length!==0&&(x(a,r()[0],!0),x(o,r()[r().length-1],!0),t.onRangeChange(s(a),s(o)))}var g=Uf(),p=u(g),m=u(p),_=d(u(m),2);it(_,22,r,b=>b,(b,y)=>{var P=zf();P.__click=[Lf,i,y];var $=u(P),E=u($),k=d($,2);{var T=M=>{gu(M,{size:16})},D=M=>{var le=G(),J=q(le);{var K=me=>{cu(me,{size:16})},ee=me=>{var j=G(),I=q(j);{var Y=ae=>{Fc(ae,{size:16})};C(I,ae=>{f(y)==="cloud"&&ae(Y)},!0)}h(me,j)};C(J,me=>{f(y)==="moon"?me(K):me(ee,!1)},!0)}h(M,le)};C(k,M=>{f(y)==="sun"?M(T):M(D,!1)})}z((M,le)=>{Ae(P,1,`btn btn-sm ${M??""}`),B(E,le)},[()=>l(y),()=>c(y)]),h(b,P)});var w=d(_,2);w.__click=[Vf,v],h(e,g),U()}Ze(["click"]);var Gf=()=>H.clearFilters(),Qf=e=>H.setSearchQuery(e.currentTarget.value),Hf=()=>H.setGroupBy("none"),Kf=()=>H.setGroupBy("store"),Jf=()=>H.setGroupBy("productType"),Yf=()=>H.clearTypeAndTemperatureFilters(),Zf=S('<button class="btn btn-sm btn-circle btn-outline text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Xf=(e,t)=>H.toggleProductType(t),Ff=S("<button><!> </button>"),ev=()=>H.toggleTemperature("frais"),tv=()=>H.toggleTemperature("surgele"),rv=S('<div class="flex-1"><fieldset><div class="flex items-center justify-between"><legend class="label"><div class="label-text">Types & Température</div></legend> <!></div> <div class="mb-2 flex flex-wrap items-center gap-2" role="group"></div> <div class="flex flex-wrap items-center gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button></div></fieldset></div>'),nv=(e,t)=>H.toggleStore(t),av=S("<button><!> </button>"),sv=()=>H.clearStoreFilters(),ov=S('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),iv=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),lv=(e,t)=>H.toggleWho(t),cv=S("<button><!> </button>"),uv=()=>H.clearWhoFilters(),dv=S('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),fv=S('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap items-center gap-2" role="group"><!> <!></div></fieldset></div>'),vv=S('<div class="mb-4 flex items-center justify-between"><h3 class="flex items-center gap-2 text-lg font-semibold"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div> <div class="mb-4 flex flex-wrap items-center justify-between gap-4"><div class="form-control"><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <!> <div class="mt-4 flex"><!> <div class="mt-4 flex flex-col gap-6 lg:flex-row"><!> <!></div></div>',1);function hv(e,t){V(t,!0);const r=Z(()=>H.filters),n=Z(()=>H.uniqueStores),a=Z(()=>H.uniqueWho),o=Z(()=>H.uniqueProductTypes);var i=vv(),l=q(i),c=u(l),f=u(c);Lo(f,{class:"h-5 w-5"});var v=d(c,2);v.__click=[Gf];var g=u(v);Et(g,{class:"h-4 w-4"});var p=d(l,2),m=u(p),_=d(u(m),2),w=u(_);_u(w,{class:"h-4 w-4"});var b=d(w,2);b.__input=[Qf];var y=d(m,2),P=d(u(y),2),$=u(P);$.__change=[Hf];var E=d($,2);E.__change=[Kf];var k=d(E,2);k.__change=[Jf];var T=d(p,2);Wf(T,{get availableDates(){return H.availableDates},get currentRange(){return H.dateRange},onRangeChange:(I,Y)=>H.setDateRange(I,Y)});var D=d(T,2),M=u(D);{var le=I=>{var Y=rv(),ae=u(Y),R=u(ae),te=d(u(R),2);{var xe=O=>{var re=Zf();re.__click=[Yf];var Oe=u(re);ru(Oe,{}),h(O,re)};C(te,O=>{(s(r).selectedProductTypes.length>0||s(r).selectedTemperatures.length>0)&&O(xe)})}var F=d(R,2);it(F,20,()=>s(o),O=>O,(O,re)=>{const Oe=Z(()=>ca(re));var Te=Ff();Te.__click=[Xf,re];var he=u(Te);Cr(he,()=>s(Oe).icon,(je,se)=>{se(je,{class:"mr-1 h-5 w-5"})});var ye=d(he);z(je=>{Ae(Te,1,`btn btn-sm ${je??""}`),B(ye,` ${s(Oe).displayName??""}`)},[()=>s(r).selectedProductTypes.length===0?"btn-soft btn-accent":s(r).selectedProductTypes.includes(re)?"btn-accent":"btn-dash btn-accent"]),h(O,Te)});var N=d(F,2),X=u(N);X.__click=[ev];var pe=u(X);Vo(pe,{class:"h-5 w-5"});var Se=d(X,2);Se.__click=[tv];var Re=u(Se);Uo(Re,{class:"h-5 w-5"}),z((O,re)=>{Ae(X,1,`btn btn-sm ${O??""}`),Ae(Se,1,`btn btn-sm ${re??""}`)},[()=>s(r).selectedTemperatures.length===0?"btn-soft btn-success":s(r).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>s(r).selectedTemperatures.length===0?"btn-soft btn-info":s(r).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(I,Y)};C(M,I=>{s(o).length>0&&I(le)})}var J=d(M,2),K=u(J);{var ee=I=>{var Y=iv(),ae=u(Y),R=d(u(ae),2),te=u(R);it(te,16,()=>s(n),N=>N,(N,X)=>{var pe=av();pe.__click=[nv,X];var Se=u(pe);rr(Se,{class:"mr-1 h-3 w-3"});var Re=d(Se);z(O=>{Ae(pe,1,`btn btn-xs ${O??""}`),B(Re,` ${X??""}`)},[()=>s(r).selectedStores.length===0?"btn-soft btn-accent":s(r).selectedStores.includes(X)?"btn-accent":"btn-dash btn-accent"]),h(N,pe)});var xe=d(te,2);{var F=N=>{var X=ov();X.__click=[sv];var pe=u(X);Et(pe,{class:"h-3 w-3"}),h(N,X)};C(xe,N=>{s(r).selectedStores.length>0&&N(F)})}h(I,Y)};C(K,I=>{s(n).length>0&&I(ee)})}var me=d(K,2);{var j=I=>{var Y=fv(),ae=u(Y),R=d(u(ae),2),te=u(R);it(te,16,()=>s(a),N=>N,(N,X)=>{var pe=cv();pe.__click=[lv,X];var Se=u(pe);hn(Se,{class:"mr-1 h-3 w-3"});var Re=d(Se);z(O=>{Ae(pe,1,`btn btn-xs ${O??""}`),B(Re,` ${X??""}`)},[()=>s(r).selectedWho.length===0?" btn-soft btn-info":s(r).selectedWho.includes(X)?" btn-info":"btn-dash btn-info"]),h(N,pe)});var xe=d(te,2);{var F=N=>{var X=dv();X.__click=[uv];var pe=u(X);Et(pe,{class:"h-3 w-3"}),h(N,X)};C(xe,N=>{s(r).selectedWho.length>0&&N(F)})}h(I,Y)};C(me,I=>{s(a).length>0&&I(j)})}z(()=>{Pl(b,s(r).searchQuery),Gn($,s(r).groupBy==="none"),Gn(E,s(r).groupBy==="store"),Gn(k,s(r).groupBy==="productType")}),h(e,i),U()}Ze(["click","input","change"]);const Zr=e=>{var t=pv(),r=u(t);En(r,{class:"h-4 w-4 text-amber-600"}),h(e,t)};var pv=S('<div class="absolute right-1 bottom-1 opacity-0 transition-opacity group-hover:opacity-100"><!></div>'),mv=()=>H.handleSort("productName"),_v=()=>H.handleSort("store"),gv=()=>H.handleSort("who"),bv=()=>H.handleSort("productType"),yv=S('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),wv=(e,t,r)=>t.onOpenGroupEditModal("store",r().map(n=>n.$id),r()),Sv=(e,t,r)=>t.onOpenGroupEditModal("who",r().map(n=>n.$id),r()),xv=(e,t,r)=>t.onOpenGroupPurchaseModal(r()),Pv=S(`<button class="btn btn-sm btn-success btn-soft" title="Ouvrir le modal d'achat groupé"><!> Achat groupé <!></button>`),Ev=S('<tr class="bg-base-200 sticky top-11 z-10 font-semibold"><td colspan="7" class="py-3"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!></div> <div class="flex items-center gap-2"><button class="btn btn-sm btn-primary btn-soft" title="Attribuer un magasin à tous les produits de ce groupe"><!> Magasin <!></button> <button class="btn btn-sm btn-info btn-soft" title="Gérer les volontaires pour tous les produits de ce groupe"><!> Volontaires <!></button> <!></div></div></td></tr>'),$v=(e,t,r)=>t.onOpenModal(s(r).$id,"recettes"),kv=S('<div class="flex items-center gap-1 text-blue-600" title="Synchronisation en cours..."><!></div>'),Av=S('<div class="text-base-content/60 text-xs"> </div>'),Tv=S('<div class="bg-success/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Nv=S('<div class="bg-info/20 flex h-7 w-7 items-center justify-center rounded-full"><!></div>'),Cv=(e,t,r)=>t.onOpenModal(s(r).$id,"magasins"),Mv=S('<div class="tooltip tooltip-info"><div class="text-center"> </div></div>'),Iv=S('<div class="text-center"> </div>'),Dv=(e,t,r)=>t.onOpenModal(s(r).$id,"volontaires"),Rv=S('<span class="badge badge-soft badge-info badge-sm"> </span>'),Ov=S('<div class="flex flex-wrap justify-center gap-2 pr-8"></div>'),qv=(e,t,r)=>t.onOpenModal(s(r).$id,"recettes"),jv=S('<div class="text-base-content/70 flex items-center justify-center gap-2 text-xs"><span class="flex items-center gap-1 text-center"> <!></span> <span class="flex items-center gap-1 text-center"> <!></span></div>'),Bv=(e,t,r)=>t.onOpenModal(s(r).$id,"achats"),Lv=S("<div><!> <span> </span></div>"),zv=S('<span class="text-center">-</span>'),Vv=(e,t,r)=>t.onQuickValidation(s(r)),Uv=S('<div class="flex items-center justify-center gap-2"><div class="bg-warning m-auto rounded px-2 py-1"> <button class="btn btn-xs btn-ghost text-base-content/70 btn-circle btn-outline hover:btn-success hover:text-success-content ms-3 transition-all hover:scale-105" title="Déclarer comme acheté"><!></button></div></div>'),Wv=S('<div class="mt-1 text-center"><div title="Bilan à la fin de la période (achats cumulés - besoins cumulés)"> </div></div>'),Gv=S('<tr><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex items-center justify-between pr-8"><div class="flex items-center gap-2"><!> <div><div class="font-medium"> </div> <!></div></div> <div class="flex gap-1"><!> <!></div></div> <!></td><td><!> <!></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><!> <!></td><td><span class="flex items-center gap-2 text-center text-sm"><!> </span></td><td class="group relative cursor-pointer rounded hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="pb-1 text-center font-semibold"> </div> <!> <!></td><td class="group relative cursor-pointer rounded text-center font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50"><div class="flex flex-wrap justify-center gap-1 py-1"><!> <!></div> <!></td><td class="group relative text-center"><!> <!></td></tr>'),Qv=S("<!> <!>",1),Hv=S('<div class="py-8 text-center"><div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Kv=S('<div class="bg-base-100 hidden rounded-lg md:block"><table class="table w-full"><thead class="bg-base-200 sticky top-0 z-10"><tr class="bg-base-200"><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="hover:bg-base-100 cursor-pointer text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats / Reccup</div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div>');function Jv(e,t){V(t,!0);const r={Package:vn,MessageCircleQuestionMark:lu,ShoppingCart:Ft,Clock:Xc,CircleCheck:Jc,CircleX:Yc,ClipboardCheck:Zc,PackageCheck:uu},n=Z(()=>H.groupedFilteredProducts),a=Z(()=>H.filters);var o=Kv(),i=u(o),l=u(i),c=u(l),f=u(c);f.__click=[mv];var v=u(f),g=u(v);zo(g,{class:"h-4 w-4"});var p=d(g,2);{var m=F=>{var N=at();z(()=>B(N,s(a).sortDirection==="asc"?"↑":"↓")),h(F,N)};C(p,F=>{s(a).sortColumn==="productName"&&F(m)})}var _=d(f);_.__click=[_v];var w=u(_),b=u(w);rr(b,{class:"h-4 w-4"});var y=d(b,2);{var P=F=>{var N=at();z(()=>B(N,s(a).sortDirection==="asc"?"↑":"↓")),h(F,N)};C(y,F=>{s(a).sortColumn==="store"&&F(P)})}var $=d(_);$.__click=[gv];var E=u($),k=u(E);la(k,{class:"h-4 w-4"});var T=d(k,2);{var D=F=>{var N=at();z(()=>B(N,s(a).sortDirection==="asc"?"↑":"↓")),h(F,N)};C(T,F=>{s(a).sortColumn==="who"&&F(D)})}var M=d($);M.__click=[bv];var le=u(M),J=d(u(le));{var K=F=>{var N=at();z(()=>B(N,s(a).sortDirection==="asc"?"↑":"↓")),h(F,N)};C(J,F=>{s(a).sortColumn==="productType"&&F(K)})}var ee=d(M,2),me=u(ee),j=u(me);Ft(j,{class:"h-4 w-4"});var I=d(ee),Y=u(I),ae=u(Y);su(ae,{class:"h-4 w-4"});var R=d(l);it(R,21,()=>Object.entries(s(n)),([F,N])=>F,(F,N)=>{var X=Z(()=>ps(s(N),2));let pe=()=>s(X)[0],Se=()=>s(X)[1];var Re=Qv(),O=q(Re);{var re=Te=>{const he=Z(()=>ca(pe()));var ye=Ev(),je=u(ye),se=u(je),we=u(se),Xe=u(we);{var ct=Ye=>{var L=at();z(()=>B(L,`🏪 ${pe()??""} (${Se().length??""})`)),h(Ye,L)},ce=Ye=>{var L=G(),ge=q(L);{var $e=Ce=>{var We=yv(),rt=u(We);Cr(rt,()=>s(he).icon,(pt,mt)=>{mt(pt,{class:"h-4 w-4"})});var ut=d(rt,2),nt=u(ut),Ge=d(ut,2),Qe=u(Ge);z(()=>{B(nt,s(he).displayName),B(Qe,`(${Se().length??""})`)}),h(Ce,We)},ze=Ce=>{var We=at();z(()=>B(We,`📦 ${pe()??""} (${Se().length??""})`)),h(Ce,We)};C(ge,Ce=>{s(a).groupBy==="productType"?Ce($e):Ce(ze,!1)},!0)}h(Ye,L)};C(Xe,Ye=>{s(a).groupBy==="store"?Ye(ct):Ye(ce,!1)})}var Q=d(we,2),_e=u(Q);_e.__click=[wv,t,Se];var Ve=u(_e);rr(Ve,{size:16});var Je=d(Ve,2);En(Je,{size:16});var de=d(_e,2);de.__click=[Sv,t,Se];var Ne=u(de);la(Ne,{size:16});var Ue=d(Ne,2);En(Ue,{size:16});var wt=d(de,2);{var kt=Ye=>{var L=Pv();L.__click=[xv,t,Se];var ge=u(L);Ft(ge,{size:16});var $e=d(ge,2);os($e,{size:16}),h(Ye,L)};C(wt,Ye=>{Se().some(L=>L.displayMissingQuantity!=="✅ Complet")&&Ye(kt)})}h(Te,ye)};C(O,Te=>{pe()!==""&&Te(re)})}var Oe=d(O,2);it(Oe,17,()=>wu(Se()||[],s(a)),Te=>Te.$id,(Te,he)=>{const ye=Z(()=>H.productsStatsByDateRange.get(s(he).$id)||{quantities:[],formattedQuantities:"",nbRecipes:0,totalAssiettes:0,stockResult:[],availableQuantities:[],missingQuantities:[],formattedAvailableQuantities:"Équilibré",hasAvailable:!1,hasMissing:!1}),je=Z(()=>ca(s(he).productType)),se=Z(()=>Su(s(he).purchases||[]));var we=Gv(),Xe=u(we);Xe.__click=[$v,t,he];var ct=u(Xe),ce=u(ct),Q=u(ce);{var _e=oe=>{var be=kv(),Ie=u(be);ou(Ie,{class:"h-4 w-4 animate-spin"}),h(oe,be)};C(Q,oe=>{s(he).status==="isSyncing"&&oe(_e)})}var Ve=d(Q,2),Je=u(Ve),de=u(Je),Ne=d(Je,2);{var Ue=oe=>{var be=Av(),Ie=u(be);z(()=>B(Ie,`Ancien: ${s(he).previousNames[0]??""}`)),h(oe,be)};C(Ne,oe=>{s(he).previousNames&&s(he).previousNames.length>0&&oe(Ue)})}var wt=d(ce,2),kt=u(wt);{var Ye=oe=>{var be=Tv(),Ie=u(be);Vo(Ie,{class:"text-success h-4 w-4"}),h(oe,be)};C(kt,oe=>{s(he).pFrais&&oe(Ye)})}var L=d(kt,2);{var ge=oe=>{var be=Nv(),Ie=u(be);Uo(Ie,{class:"text-info h-4 w-4"}),h(oe,be)};C(L,oe=>{s(he).pSurgel&&oe(ge)})}var $e=d(ct,2);Zr($e);var ze=d(Xe);ze.__click=[Cv,t,he];var Ce=u(ze);{var We=oe=>{var be=Mv(),Ie=u(be),Fe=u(Ie);z(()=>{pr(be,"data-tip",s(he).storeInfo?.storeComment),B(Fe,s(he).storeInfo?.storeName||"-")}),h(oe,be)},rt=oe=>{var be=Iv(),Ie=u(be);z(()=>B(Ie,s(he).storeInfo?.storeName||"-")),h(oe,be)};C(Ce,oe=>{s(he).storeInfo?.storeComment?oe(We):oe(rt,!1)})}var ut=d(Ce,2);Zr(ut);var nt=d(ze);nt.__click=[Dv,t,he];var Ge=u(nt);{var Qe=oe=>{var be=Ov();it(be,20,()=>s(he).who,Ie=>Ie,(Ie,Fe)=>{var Pe=Rv(),It=u(Pe);z(()=>B(It,Fe)),h(Ie,Pe)}),h(oe,be)};C(Ge,oe=>{s(he).who&&s(he).who.length>0&&oe(Qe)})}var pt=d(Ge,2);Zr(pt);var mt=d(nt),zt=u(mt),St=u(zt);Cr(St,()=>s(je).icon,(oe,be)=>{be(oe,{class:"h-3 w-3"})});var xr=d(St),Vt=d(mt);Vt.__click=[qv,t,he];var Ut=u(Vt),ar=u(Ut),Wt=d(Ut,2);{var sr=oe=>{var be=jv(),Ie=u(be),Fe=u(Ie),Pe=d(Fe);$a(Pe,{class:"h-3 w-3"});var It=d(Ie,2),pn=u(It),Hr=d(pn);bu(Hr,{class:"h-3 w-3"}),z(()=>{B(Fe,`${s(ye).nbRecipes??""} `),B(pn,`${s(ye).totalAssiettes??""} `)}),h(oe,be)};C(Wt,oe=>{(s(ye).nbRecipes||s(ye).totalAssiettes)&&oe(sr)})}var Gt=d(Wt,2);Zr(Gt);var Qt=d(Vt);Qt.__click=[Bv,t,he];var Ht=u(Qt),or=u(Ht);it(or,17,()=>s(se),oe=>oe.status,(oe,be)=>{const Ie=Z(()=>r[s(be).icon]);var Fe=Lv(),Pe=u(Fe);Cr(Pe,()=>s(Ie),(Hr,Ho)=>{Ho(Hr,{class:"h-4 w-4"})});var It=d(Pe,2),pn=u(It);z(Hr=>{Ae(Fe,1,`badge badge-soft flex items-center gap-2 ${s(be).badgeClass??""}`),B(pn,Hr)},[()=>Bn(s(be).quantity,s(be).unit)]),h(oe,Fe)});var Wr=d(or,2);{var Pr=oe=>{var be=zv();h(oe,be)};C(Wr,oe=>{s(se).length===0&&oe(Pr)})}var _t=d(Ht,2);Zr(_t);var Kt=d(Qt),Er=u(Kt);{var Gr=oe=>{var be=Uv(),Ie=u(be),Fe=u(Ie),Pe=d(Fe);Pe.__click=[Vv,t,he];var It=u(Pe);Br(It,{size:16}),z(()=>B(Fe,`${s(he).displayMissingQuantity??""} `)),h(oe,be)},Qr=oe=>{os(oe,{size:28,strokeWidth:3,class:"text-success m-auto"})};C(Er,oe=>{s(he).displayMissingQuantity!=="✅ Complet"?oe(Gr):oe(Qr,!1)})}var $r=d(Er,2);{var zn=oe=>{var be=Wv(),Ie=u(be),Fe=u(Ie);z(()=>{Ae(Ie,1,`rounded px-1 py-0.5 text-xs ${s(ye).hasAvailable&&s(ye).hasMissing?"border border-amber-300 bg-amber-100 text-amber-800":s(ye).hasAvailable?"bg-success/10 text-success/80 border-success/30 border":"bg-info/10 text-info/80 border-info/30 border"}`),B(Fe,s(ye).formattedAvailableQuantities)}),h(oe,be)};C($r,oe=>{s(ye)&&s(ye).formattedAvailableQuantities&&s(ye).formattedAvailableQuantities!=="Équilibré"&&oe(zn)})}z(()=>{Ae(we,1,`hover:bg-base-200/20 transition-colors ${s(he).status==="isSyncing"?"animate-pulse border-l-4 border-l-blue-400 bg-blue-50/40":""}`),B(de,s(he).productName),Ae(ze,1,`${s(a).groupBy==="store"?"hidden":""} group relative cursor-pointer rounded font-medium hover:inset-ring-2 hover:inset-ring-amber-400/50`),Ae(mt,1,eo(s(a).groupBy==="productType"?"hidden":"")),B(xr,` ${s(je).displayName??""}`),B(ar,s(ye).formattedQuantities)}),h(Te,we)}),h(F,Re)});var te=d(i,2);{var xe=F=>{var N=Hv();h(F,N)};C(te,F=>{Object.values(s(n)).flat().length===0&&F(xe)})}z(()=>{Ae(_,1,`hover:bg-base-100 cursor-pointer text-center ${s(a).groupBy==="store"?"hidden":""}`),Ae(M,1,`hover:bg-base-100 cursor-pointer text-center ${s(a).groupBy==="productType"?"hidden":""}`)}),h(e,o),U()}Ze(["click"]);var Yv=S('<div class="fixed left-0 top-0 h-screen w-80 overflow-y-auto bg-base-200 border-r border-base-300 z-40 p-4"><!></div>'),Zv=S('<div class="drawer"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><!></div></div></div> <div class="fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Xv(e,t){V(t,!0);const r=new io("min-width: 768px");let n=W(!1);var a=G(),o=q(a);{var i=c=>{var f=Yv(),v=u(f);ie(v,()=>t.children??ne),h(c,f)},l=c=>{var f=Zv(),v=q(f),g=u(v),p=d(g,2),m=d(u(p),2),_=u(m);ie(_,()=>t.children??ne);var w=d(v,2),b=u(w),y=u(b);Lo(y,{class:"w-6 h-6"}),kl(g,()=>s(n),P=>x(n,P)),h(c,f)};C(o,c=>{r.current?c(i):c(l,!1)})}h(e,a),U()}function Fv(){}var eh=S('<div><div class="flex flex-wrap items-center gap-2"><div class="badge badge-neutral badge-lg"><!> </div> <button class="btn btn-sm btn-outline btn-ghost" title="Ajouter une dépense générale"><!> Dépense</button></div> <!> <!></div> <!> <!> <!> <!>',1);function th(e,t){V(t,!0);const r=Z(()=>H.stats);let n=W(null),a=W("recettes"),o=W(!1),i=W(!1),l=W(Me([])),c=W(Me([])),f=W(!1),v=W(Me([]));function g(N,X="recettes"){x(a,X,!0),x(n,N,!0)}function p(){x(n,null)}function m(N,X,pe){x(l,X,!0),x(c,pe,!0),x(N==="who"?o:i,!0)}function _(N){(!N||N==="who")&&x(o,!1),(!N||N==="store")&&x(i,!1),x(l,[],!0),x(c,[],!0)}function w(N){console.log(`[ProductsTable] Modification groupée réussie: ${N.updatedCount} produits`)}function b(N){const X=N.filter(pe=>pe.displayMissingQuantity!=="✅ Complet"&&pe.missingQuantityArray&&pe.missingQuantityArray.length>0);console.log(`[ProductsTable] openGroupPurchaseModal: ${N.length} produits reçus → ${X.length} produits avec quantités manquantes`),x(v,X,!0),x(f,!0)}function y(){x(f,!1),x(v,[],!0)}function P(){console.log("[ProductsTable] Achat groupé créé avec succès"),y()}async function $(N){try{if(!H.currentMainId)throw new Error("mainId non disponible");const X=N.missingQuantityArray||[];if(X.length===0){console.log("Aucune quantité manquante à valider pour ce produit");return}let pe=N.$id;N.isSynced||(console.log(`[ProductsTable] Produit ${N.$id} local, création pour validation rapide...`),pe=(await Jt(N.$id,{},Re=>H.getEnrichedProductById(Re))).$id,console.log(`[ProductsTable] Produit sync créé: ${pe}`)),await Bo(H.currentMainId,pe,X,{store:N.storeInfo?.storeName??null,notes:"",invoiceId:`VALID_${Date.now()}`}),console.log(`[ProductsTable] Validation rapide créée pour ${N.productName}`)}catch(X){console.error("[ProductsTable] Erreur validation rapide:",X),alert("Erreur lors de la validation rapide: "+X.message)}}var E=eh(),k=q(E),T=u(k),D=u(T),M=u(D);zo(M,{class:"mr-1 h-4 w-4"});var le=d(M),J=d(D,2);J.__click=[Fv];var K=u(J);vu(K,{class:"mr-1 h-4 w-4"});var ee=d(T,2);Xv(ee,{children:(N,X)=>{hv(N,{})},$$slots:{default:!0}});var me=d(ee,2);Jv(me,{onOpenModal:g,onOpenGroupEditModal:m,onOpenGroupPurchaseModal:b,onQuickValidation:$});var j=d(k,2);{var I=N=>{of(N,{get productId(){return s(n)},get initialTab(){return s(a)},onClose:p})};C(j,N=>{s(n)&&N(I)})}var Y=d(j,2);{var ae=N=>{mf(N,{get productIds(){return s(l)},get products(){return s(c)},onClose:()=>_("who"),onSuccess:w})};C(Y,N=>{s(o)&&N(ae)})}var R=d(Y,2);{var te=N=>{Pf(N,{get productIds(){return s(l)},get products(){return s(c)},onClose:()=>_("store"),onSuccess:w})};C(R,N=>{s(i)&&N(te)})}var xe=d(R,2);{var F=N=>{Bf(N,{get products(){return s(v)},onClose:y,onSuccess:P})};C(xe,N=>{s(f)&&N(F)})}z(()=>{Ae(k,1,`space-y-6 ${da.isMobile?"":"ml-80"}`),B(le,` ${s(r).total??""}`)}),h(e,E),U()}Ze(["click"]);Ti();var rh=S('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function nh(e){var t=rh();h(e,t)}var ah=S('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function sh(e,t){var r=ah(),n=d(u(r),2),a=d(u(n),2),o=u(a);z(()=>B(o,t.message)),h(e,r)}var oh=S('<div class="alert bg-error/20"><div class="flex items-start gap-3"><!> <div class="flex-1"><h3 class="font-bold">Authentification requise</h3> <div class="text-sm"> </div></div></div></div>');function ih(e,t){var r=oh(),n=u(r),a=u(n);jn(a,{class:"mt-0.5 h-6 w-6 shrink-0 stroke-current"});var o=d(a,2),i=d(u(o),2),l=u(i);z(()=>B(l,t.message||"Erreur inconnue")),h(e,r)}var lh=S('<div class="text-success flex items-center gap-2"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),ch=S('<div class="text-info flex items-center gap-2"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),uh=S('<div class="text-base-content/60"> </div>'),dh=S('<button title="Forcer le rechargement depuis Appwrite"><!></button>'),fh=S('<div><a class="btn btn-primary btn-sm"><!> Se connecter</a></div>'),vh=S('<div class="alert alert-info"><div><svg class="h-6 w-6 shrink-0 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),hh=S('<div class="bg-base-100 min-h-screen"><header class="bg-base-200 sticky top-0 z-10 shadow-sm"><div class="container mx-auto px-4 py-2"><div class="flex items-center justify-between"><div><h1 class="text-1xl text-base-content font-bold">Liste de courses</h1></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function ph(e,t){V(t,!0);let r,n=W(null),a=W(!0),o=W(!1);oo(async()=>{r=Lc();try{if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");if(!await window.AppwriteClient.isConnectedAppwrite())throw new Error("Veuillez vous connecter pour accéder à la liste des produits.");console.log("[App] Utilisateur connecté, initialisation du store..."),await H.initialize(r)}catch(R){const te=R instanceof Error?R.message:"Erreur lors de l'initialisation";x(n,te,!0),console.error("[App] Erreur initialisation:",R)}finally{x(a,!1)}}),Cl(()=>{H.destroy()});async function i(){if(!(!r||s(o))){x(o,!0);try{await H.forceReload(r)}catch(R){console.error("[App] Erreur lors du rechargement forcé:",R)}finally{x(o,!1)}}}const l=Z(()=>s(n)||H.error),c=Z(()=>s(a)||H.loading),f=`/login/?redirect=${encodeURIComponent(window.location.pathname+window.location.search)}`;var v=hh(),g=u(v),p=u(g),m=u(p),_=d(u(m),2),w=u(_);{var b=R=>{var te=lh();h(R,te)};C(w,R=>{H.realtimeConnected&&R(b)})}var y=d(w,2);{var P=R=>{var te=ch();h(R,te)};C(y,R=>{H.syncing&&R(P)})}var $=d(y,2);{var E=R=>{var te=uh(),xe=u(te);z(F=>B(xe,`Maj: ${F??""}`),[()=>new Date(H.lastSync).toLocaleTimeString()]),h(R,te)};C($,R=>{H.lastSync&&R(E)})}var k=d($,2);{var T=R=>{var te=dh();let xe;te.__click=i;var F=u(te);hu(F,{class:"h-4 w-4"}),z(N=>{xe=Ae(te,1,"btn btn-outline btn-sm",null,xe,N),te.disabled=s(o)||H.loading},[()=>({loading:s(o)||H.loading})]),h(R,te)};C(k,R=>{s(n)||R(T)})}var D=d(k,2);{var M=R=>{var te=fh(),xe=u(te),F=u(xe);iu(F,{class:"mr-2 h-4 w-4"}),z(()=>pr(xe,"href",f)),h(R,te)};C(D,R=>{s(n)&&R(M)})}var le=d(g,2),J=u(le);{var K=R=>{ih(R,{get message(){return s(l)}})},ee=R=>{var te=G(),xe=q(te);{var F=N=>{sh(N,{get message(){return s(l)}})};C(xe,N=>{s(l)&&N(F)},!0)}h(R,te)};C(J,R=>{s(n)?R(K):R(ee,!1)})}var me=d(J,2);{var j=R=>{nh(R)};C(me,R=>{s(c)&&R(j)})}var I=d(me,2);{var Y=R=>{th(R,{})},ae=R=>{var te=G(),xe=q(te);{var F=N=>{var X=vh();h(N,X)};C(xe,N=>{!H.loading&&!s(n)&&N(F)},!0)}h(R,te)};C(I,R=>{H.enrichedProducts.length>0?R(Y):R(ae,!1)})}h(e,v),U()}Ze(["click"]);vl(ph,{target:document.getElementById("app_products")});
