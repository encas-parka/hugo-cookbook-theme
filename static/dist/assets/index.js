(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const Fs=!1;var Sn=Array.isArray,hi=Array.prototype.indexOf,ns=Array.from,Hn=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,pi=Object.getOwnPropertyDescriptors,_i=Object.prototype,mi=Array.prototype,ea=Object.getPrototypeOf,xs=Object.isExtensible;function zr(e){return typeof e=="function"}const oe=()=>{};function gi(e){for(var t=0;t<e.length;t++)e[t]()}function ta(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function ra(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Fe=2,ss=4,as=8,gr=16,Ut=32,br=64,is=128,ht=256,gn=512,We=1024,ot=2048,Ft=4096,Et=8192,yr=16384,os=32768,wr=65536,Ss=1<<17,bi=1<<18,Rr=1<<19,yi=1<<20,Kn=1<<21,Pn=1<<22,fr=1<<23,vr=Symbol("$state"),na=Symbol("legacy props"),wi=Symbol(""),Hr=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function sa(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function xi(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Si(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Pi(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ei(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ki(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ti(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function $i(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ni(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ai(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Mi(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const En=1,kn=2,aa=4,Ci=8,Ii=16,Di=1,ji=2,Ri=4,qi=8,Oi=16,Li=1,Bi=2,De=Symbol(),Wi="http://www.w3.org/1999/xhtml",zi="http://www.w3.org/2000/svg",Vi="@attach";function Gi(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ui(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Qi=!1;function ia(e){return e===this.v}function Hi(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function oa(e){return!Hi(e,this.v)}let qr=!1,Ki=!1;function Ji(){qr=!0}let Pe=null;function Mr(e){Pe=e}function X(e,t=!1,r){Pe={p:Pe,c:null,e:null,s:e,x:null,l:qr&&!t?{s:null,u:null,$:[]}:null}}function F(e){var t=Pe,r=t.e;if(r!==null){t.e=null;for(var n of r)Sa(n)}return Pe=t.p,{}}function tn(){return!qr||Pe!==null&&Pe.l===null}let dr=[];function la(){var e=dr;dr=[],gi(e)}function pr(e){if(dr.length===0&&!Kr){var t=dr;queueMicrotask(()=>{t===dr&&la()})}dr.push(e)}function Yi(){for(;dr.length>0;)la()}const Zi=new WeakMap;function ca(e){var t=te;if(t===null)return ne.f|=fr,e;if((t.f&os)===0){if((t.f&is)===0)throw!t.parent&&e instanceof Error&&ua(e),e;t.b.error(e)}else Cr(e,t)}function Cr(e,t){for(;t!==null;){if((t.f&is)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&ua(e),e}function ua(e){const t=Zi.get(e);t&&(Hn(e,"message",{value:t.message}),Hn(e,"stack",{value:t.stack}))}const un=new Set;let ge=null,fn=null,Jn=new Set,It=[],Tn=null,Yn=!1,Kr=!1;class ft{current=new Map;#t=new Map;#r=new Set;#s=0;#n=null;#c=[];#a=[];#o=[];#i=[];#l=[];#u=[];skipped_effects=new Set;process(t){It=[],fn=null;var r=ft.apply(this);for(const i of t)this.#v(i);if(this.#s===0){this.#h();var n=this.#a,s=this.#o;this.#a=[],this.#o=[],this.#i=[],fn=this,ge=null,Ps(n),Ps(s),fn=null,this.#n?.resolve()}else this.#f(this.#a),this.#f(this.#o),this.#f(this.#i);r();for(const i of this.#c)Xr(i);this.#c=[]}#v(t){t.f^=We;for(var r=t.first;r!==null;){var n=r.f,s=(n&(Ut|br))!==0,i=s&&(n&We)!==0,o=i||(n&Et)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=We:(n&ss)!==0?this.#o.push(r):(n&We)===0&&((n&Pn)!==0&&r.b?.is_pending()?this.#c.push(r):Mn(r)&&((r.f&gr)!==0&&this.#i.push(r),Xr(r)));var c=r.first;if(c!==null){r=c;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#f(t){for(const r of t)((r.f&ot)!==0?this.#l:this.#u).push(r),Je(r,We);t.length=0}capture(t,r){this.#t.has(t)||this.#t.set(t,r),this.current.set(t,t.v)}activate(){ge=this}deactivate(){ge=null}flush(){if(It.length>0){if(this.activate(),da(),ge!==null&&ge!==this)return}else this.#s===0&&this.#h();this.deactivate();for(const t of Jn)if(Jn.delete(t),t(),ge!==null)break}#h(){for(const t of this.#r)t();if(this.#r.clear(),un.size>1){this.#t.clear();let t=!0;for(const r of un){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;fa(n)}if(It.length>0){ge=r;const n=ft.apply(r);for(const s of It)r.#v(s);It=[],n()}}ge=null}un.delete(this)}increment(){this.#s+=1}decrement(){this.#s-=1;for(const t of this.#l)Je(t,ot),_r(t);for(const t of this.#u)Je(t,Ft),_r(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#n??=ta()).promise}static ensure(){if(ge===null){const t=ge=new ft;un.add(ge),Kr||ft.enqueue(()=>{ge===t&&t.flush()})}return ge}static enqueue(t){pr(t)}static apply(t){return oe}}function Xi(e){var t=Kr;Kr=!0;try{for(var r;;){if(Yi(),It.length===0&&(ge?.flush(),It.length===0))return Tn=null,r;da()}}finally{Kr=t}}function da(){var e=Nr;Yn=!0;try{var t=0;for($s(!0);It.length>0;){var r=ft.ensure();if(t++>1e3){var n,s;Fi()}r.process(It),Zt.clear()}}finally{Yn=!1,$s(e),Tn=null}}function Fi(){try{ki()}catch(e){Cr(e,Tn)}}let ur=null;function Ps(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(yr|Et))===0&&Mn(n)&&(ur=[],Xr(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?ka(n):n.fn=null),ur?.length>0)){Zt.clear();for(const s of ur)Xr(s);ur=[]}}ur=null}}function fa(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&Fe)!==0?fa(t):(r&(Pn|gr))!==0&&(Je(t,ot),_r(t))}}function _r(e){for(var t=Tn=e;t.parent!==null;){t=t.parent;var r=t.f;if(Yn&&t===te&&(r&gr)!==0)return;if((r&(br|Ut))!==0){if((r&We)===0)return;t.f^=We}}It.push(t)}function ls(e){let t=0,r=mr(0),n;return()=>{_o()&&(a(r),hs(()=>(t===0&&(n=Or(()=>e(()=>Jr(r)))),t+=1,()=>{pr(()=>{t-=1,t===0&&(n?.(),n=void 0,Jr(r))})})))}}var eo=wr|Rr|is;function to(e,t,r){new ro(e,t,r)}class ro{parent;#t=!1;#r;#s=null;#n;#c;#a;#o=null;#i=null;#l=null;#u=null;#v=0;#f=0;#h=!1;#e=null;#b=()=>{this.#e&&Ir(this.#e,this.#v)};#y=ls(()=>(this.#e=mr(this.#v),()=>{this.#e=null}));constructor(t,r,n){this.#r=t,this.#n=r,this.#c=n,this.parent=te.b,this.#t=!!this.#n.pending,this.#a=tr(()=>{te.b=this;{try{this.#o=Be(()=>n(this.#r))}catch(s){this.error(s)}this.#f>0?this.#_():this.#t=!1}},eo)}#w(){try{this.#o=Be(()=>this.#c(this.#r))}catch(t){this.error(t)}this.#t=!1}#x(){const t=this.#n.pending;t&&(this.#i=Be(()=>t(this.#r)),ft.enqueue(()=>{this.#o=this.#p(()=>(ft.ensure(),Be(()=>this.#c(this.#r)))),this.#f>0?this.#_():(Xt(this.#i,()=>{this.#i=null}),this.#t=!1)}))}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#n.pending}#p(t){var r=te,n=ne,s=Pe;jt(this.#a),Xe(this.#a),Mr(this.#a.ctx);try{return t()}catch(i){return ca(i),null}finally{jt(r),Xe(n),Mr(s)}}#_(){const t=this.#n.pending;this.#o!==null&&(this.#u=document.createDocumentFragment(),no(this.#o,this.#u)),this.#i===null&&(this.#i=Be(()=>t(this.#r)))}#g(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#g(t);return}this.#f+=t,this.#f===0&&(this.#t=!1,this.#i&&Xt(this.#i,()=>{this.#i=null}),this.#u&&(this.#r.before(this.#u),this.#u=null),pr(()=>{ft.ensure().flush()}))}update_pending_count(t){this.#g(t),this.#v+=t,Jn.add(this.#b)}get_effect_pending(){return this.#y(),a(this.#e)}error(t){var r=this.#n.onerror;let n=this.#n.failed;if(this.#h||!r&&!n)throw t;this.#o&&(Re(this.#o),this.#o=null),this.#i&&(Re(this.#i),this.#i=null),this.#l&&(Re(this.#l),this.#l=null);var s=!1,i=!1;const o=()=>{if(s){Ui();return}s=!0,i&&Mi(),ft.ensure(),this.#v=0,this.#l!==null&&Xt(this.#l,()=>{this.#l=null}),this.#t=this.has_pending_snippet(),this.#o=this.#p(()=>(this.#h=!1,Be(()=>this.#c(this.#r)))),this.#f>0?this.#_():this.#t=!1};var c=ne;try{Xe(null),i=!0,r?.(t,o),i=!1}catch(u){Cr(u,this.#a&&this.#a.parent)}finally{Xe(c)}n&&pr(()=>{this.#l=this.#p(()=>{this.#h=!0;try{return Be(()=>{n(this.#r,()=>t,()=>o)})}catch(u){return Cr(u,this.#a.parent),null}finally{this.#h=!1}})})}}function no(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:rn(r);t.append(r),r=s}}function va(e,t,r){const n=tn()?$n:cs;if(t.length===0){r(e.map(n));return}var s=ge,i=te,o=so();Promise.all(t.map(c=>ao(c))).then(c=>{o();try{r([...e.map(n),...c])}catch(u){(i.f&yr)===0&&Cr(u,i)}s?.deactivate(),ha()}).catch(c=>{Cr(c,i)})}function so(){var e=te,t=ne,r=Pe,n=ge;return function(){jt(e),Xe(t),Mr(r),n?.activate()}}function ha(){jt(null),Xe(null),Mr(null)}function $n(e){var t=Fe|ot,r=ne!==null&&(ne.f&Fe)!==0?ne:null;return te===null||r!==null&&(r.f&ht)!==0?t|=ht:te.f|=Rr,{ctx:Pe,deps:null,effects:null,equals:ia,f:t,fn:e,reactions:null,rv:0,v:De,wv:0,parent:r??te,ac:null}}function ao(e,t){let r=te;r===null&&xi();var n=r.b,s=void 0,i=mr(De),o=!ne,c=new Map;return go(()=>{var u=ta();s=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(p){u.reject(p)}var f=ge,v=n.is_pending();o&&(n.update_pending_count(1),v||(f.increment(),c.get(f)?.reject(Hr),c.set(f,u)));const m=(p,_=void 0)=>{v||f.activate(),_?_!==Hr&&(i.f|=fr,Ir(i,_)):((i.f&fr)!==0&&(i.f^=fr),Ir(i,p)),o&&(n.update_pending_count(-1),v||f.decrement()),ha()};u.promise.then(m,p=>m(null,p||"unknown"))}),wa(()=>{for(const u of c.values())u.reject(Hr)}),new Promise(u=>{function f(v){function m(){v===s?u(i):f(s)}v.then(m,m)}f(s)})}function Q(e){const t=$n(e);return Na(t),t}function cs(e){const t=$n(e);return t.equals=oa,t}function pa(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Re(t[r])}}function io(e){for(var t=e.parent;t!==null;){if((t.f&Fe)===0)return t;t=t.parent}return null}function us(e){var t,r=te;jt(io(e));try{pa(e),t=Ia(e)}finally{jt(r)}return t}function _a(e){var t=us(e);if(e.equals(t)||(e.v=t,e.wv=Ma()),!xr){var r=(Jt||(e.f&ht)!==0)&&e.deps!==null?Ft:We;Je(e,r)}}const Zt=new Map;function mr(e,t){var r={f:0,v:e,reactions:null,equals:ia,rv:0,wv:0};return r}function be(e,t){const r=mr(e);return Na(r),r}function oo(e,t=!1,r=!0){const n=mr(e);return t||(n.equals=oa),qr&&r&&Pe!==null&&Pe.l!==null&&(Pe.l.s??=[]).push(n),n}function $(e,t,r=!1){ne!==null&&(!Pt||(ne.f&Ss)!==0)&&tn()&&(ne.f&(Fe|gr|Pn|Ss))!==0&&!Gt?.includes(e)&&Ai();let n=r?it(t):t;return Ir(e,n)}function Ir(e,t){if(!e.equals(t)){var r=e.v;xr?Zt.set(e,t):Zt.set(e,r),e.v=t;var n=ft.ensure();n.capture(e,r),(e.f&Fe)!==0&&((e.f&ot)!==0&&us(e),Je(e,(e.f&ht)===0?We:Ft)),e.wv=Ma(),ma(e,ot),tn()&&te!==null&&(te.f&We)!==0&&(te.f&(Ut|br))===0&&(dt===null?wo([e]):dt.push(e))}return t}function Jr(e){$(e,e.v+1)}function ma(e,t){var r=e.reactions;if(r!==null)for(var n=tn(),s=r.length,i=0;i<s;i++){var o=r[i],c=o.f;if(!(!n&&o===te)){var u=(c&ot)===0;u&&Je(o,t),(c&Fe)!==0?ma(o,Ft):u&&((c&gr)!==0&&ur!==null&&ur.push(o),_r(o))}}}function it(e){if(typeof e!="object"||e===null||vr in e)return e;const t=ea(e);if(t!==_i&&t!==mi)return e;var r=new Map,n=Sn(e),s=be(0),i=hr,o=c=>{if(hr===i)return c();var u=ne,f=hr;Xe(null),As(i);var v=c();return Xe(u),As(f),v};return n&&r.set("length",be(e.length)),new Proxy(e,{defineProperty(c,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&$i();var v=r.get(u);return v===void 0?v=o(()=>{var m=be(f.value);return r.set(u,m),m}):$(v,f.value,!0),!0},deleteProperty(c,u){var f=r.get(u);if(f===void 0){if(u in c){const v=o(()=>be(De));r.set(u,v),Jr(s)}}else $(f,De),Jr(s);return!0},get(c,u,f){if(u===vr)return e;var v=r.get(u),m=u in c;if(v===void 0&&(!m||Yt(c,u)?.writable)&&(v=o(()=>{var _=it(m?c[u]:De),g=be(_);return g}),r.set(u,v)),v!==void 0){var p=a(v);return p===De?void 0:p}return Reflect.get(c,u,f)},getOwnPropertyDescriptor(c,u){var f=Reflect.getOwnPropertyDescriptor(c,u);if(f&&"value"in f){var v=r.get(u);v&&(f.value=a(v))}else if(f===void 0){var m=r.get(u),p=m?.v;if(m!==void 0&&p!==De)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(c,u){if(u===vr)return!0;var f=r.get(u),v=f!==void 0&&f.v!==De||Reflect.has(c,u);if(f!==void 0||te!==null&&(!v||Yt(c,u)?.writable)){f===void 0&&(f=o(()=>{var p=v?it(c[u]):De,_=be(p);return _}),r.set(u,f));var m=a(f);if(m===De)return!1}return v},set(c,u,f,v){var m=r.get(u),p=u in c;if(n&&u==="length")for(var _=f;_<m.v;_+=1){var g=r.get(_+"");g!==void 0?$(g,De):_ in c&&(g=o(()=>be(De)),r.set(_+"",g))}if(m===void 0)(!p||Yt(c,u)?.writable)&&(m=o(()=>be(void 0)),$(m,it(f)),r.set(u,m));else{p=m.v!==De;var P=o(()=>it(f));$(m,P)}var w=Reflect.getOwnPropertyDescriptor(c,u);if(w?.set&&w.set.call(v,f),!p){if(n&&typeof u=="string"){var E=r.get("length"),j=Number(u);Number.isInteger(j)&&j>=E.v&&$(E,j+1)}Jr(s)}return!0},ownKeys(c){a(s);var u=Reflect.ownKeys(c).filter(m=>{var p=r.get(m);return p===void 0||p.v!==De});for(var[f,v]of r)v.v!==De&&!(f in c)&&u.push(f);return u},setPrototypeOf(){Ni()}})}function Es(e){try{if(e!==null&&typeof e=="object"&&vr in e)return e[vr]}catch{}return e}function lo(e,t){return Object.is(Es(e),Es(t))}var ks,ga,ba,ya;function co(){if(ks===void 0){ks=window,ga=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;ba=Yt(t,"firstChild").get,ya=Yt(t,"nextSibling").get,xs(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),xs(r)&&(r.__t=void 0)}}function er(e=""){return document.createTextNode(e)}function Dr(e){return ba.call(e)}function rn(e){return ya.call(e)}function l(e,t){return Dr(e)}function H(e,t=!1){{var r=Dr(e);return r instanceof Comment&&r.data===""?rn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=rn(n);return n}function uo(e){e.textContent=""}function ds(){return!1}function fo(e,t){if(t){const r=document.body;e.autofocus=!0,pr(()=>{document.activeElement===r&&e.focus()})}}let Ts=!1;function vo(){Ts||(Ts=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function Nn(e){var t=ne,r=te;Xe(null),jt(null);try{return e()}finally{Xe(t),jt(r)}}function fs(e,t,r,n=r){e.addEventListener(t,()=>Nn(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),vo()}function ho(e){te===null&&ne===null&&Ei(),ne!==null&&(ne.f&ht)!==0&&te===null&&Pi(),xr&&Si()}function po(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Qt(e,t,r,n=!0){var s=te;s!==null&&(s.f&Et)!==0&&(e|=Et);var i={ctx:Pe,deps:null,nodes_start:null,nodes_end:null,f:e|ot,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Xr(i),i.f|=os}catch(u){throw Re(i),u}else t!==null&&_r(i);if(n){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&Rr)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&po(o,s),ne!==null&&(ne.f&Fe)!==0&&(e&br)===0)){var c=ne;(c.effects??=[]).push(o)}}return i}function _o(){return ne!==null&&!Pt}function wa(e){const t=Qt(as,null,!1);return Je(t,We),t.teardown=e,t}function xa(e){ho();var t=te.f,r=!ne&&(t&Ut)!==0&&(t&os)===0;if(r){var n=Pe;(n.e??=[]).push(e)}else return Sa(e)}function Sa(e){return Qt(ss|yi,e,!1)}function mo(e){ft.ensure();const t=Qt(br|Rr,e,!0);return(r={})=>new Promise(n=>{r.outro?Xt(t,()=>{Re(t),n(void 0)}):(Re(t),n(void 0))})}function vs(e){return Qt(ss,e,!1)}function go(e){return Qt(Pn|Rr,e,!0)}function hs(e,t=0){return Qt(as|t,e,!0)}function W(e,t=[],r=[]){va(t,r,n=>{Qt(as,()=>e(...n.map(a)),!0)})}function tr(e,t=0){var r=Qt(gr|t,e,!0);return r}function Be(e,t=!0){return Qt(Ut|Rr,e,!0,t)}function Pa(e){var t=e.teardown;if(t!==null){const r=xr,n=ne;Ns(!0),Xe(null);try{t.call(null)}finally{Ns(r),Xe(n)}}}function Ea(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&Nn(()=>{s.abort(Hr)});var n=r.next;(r.f&br)!==0?r.parent=null:Re(r,t),r=n}}function bo(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Ut)===0&&Re(t),t=r}}function Re(e,t=!0){var r=!1;(t||(e.f&bi)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(yo(e.nodes_start,e.nodes_end),r=!0),Ea(e,t&&!r),bn(e,0),Je(e,yr);var n=e.transitions;if(n!==null)for(const i of n)i.stop();Pa(e);var s=e.parent;s!==null&&s.first!==null&&ka(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function yo(e,t){for(;e!==null;){var r=e===t?null:rn(e);e.remove(),e=r}}function ka(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Xt(e,t){var r=[];ps(e,r,!0),Ta(r,()=>{Re(e),t&&t()})}function Ta(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function ps(e,t,r){if((e.f&Et)===0){if(e.f^=Et,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var s=n.next,i=(n.f&wr)!==0||(n.f&Ut)!==0;ps(n,t,i?r:!1),n=s}}}function An(e){$a(e,!0)}function $a(e,t){if((e.f&Et)!==0){e.f^=Et,(e.f&We)===0&&(Je(e,ot),_r(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&wr)!==0||(r.f&Ut)!==0;$a(r,s?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let Nr=!1;function $s(e){Nr=e}let xr=!1;function Ns(e){xr=e}let ne=null,Pt=!1;function Xe(e){ne=e}let te=null;function jt(e){te=e}let Gt=null;function Na(e){ne!==null&&(Gt===null?Gt=[e]:Gt.push(e))}let He=null,at=0,dt=null;function wo(e){dt=e}let Aa=1,Zr=0,hr=Zr;function As(e){hr=e}let Jt=!1;function Ma(){return++Aa}function Mn(e){var t=e.f;if((t&ot)!==0)return!0;if((t&Ft)!==0){var r=e.deps,n=(t&ht)!==0;if(r!==null){var s,i,o=(t&gn)!==0,c=n&&te!==null&&!Jt,u=r.length;if((o||c)&&(te===null||(te.f&yr)===0)){var f=e,v=f.parent;for(s=0;s<u;s++)i=r[s],(o||!i?.reactions?.includes(f))&&(i.reactions??=[]).push(f);o&&(f.f^=gn),c&&v!==null&&(v.f&ht)===0&&(f.f^=ht)}for(s=0;s<u;s++)if(i=r[s],Mn(i)&&_a(i),i.wv>e.wv)return!0}(!n||te!==null&&!Jt)&&Je(e,We)}return!1}function Ca(e,t,r=!0){var n=e.reactions;if(n!==null&&!Gt?.includes(e))for(var s=0;s<n.length;s++){var i=n[s];(i.f&Fe)!==0?Ca(i,t,!1):t===i&&(r?Je(i,ot):(i.f&We)!==0&&Je(i,Ft),_r(i))}}function Ia(e){var t=He,r=at,n=dt,s=ne,i=Jt,o=Gt,c=Pe,u=Pt,f=hr,v=e.f;He=null,at=0,dt=null,Jt=(v&ht)!==0&&(Pt||!Nr||ne===null),ne=(v&(Ut|br))===0?e:null,Gt=null,Mr(e.ctx),Pt=!1,hr=++Zr,e.ac!==null&&(Nn(()=>{e.ac.abort(Hr)}),e.ac=null);try{e.f|=Kn;var m=e.fn,p=m(),_=e.deps;if(He!==null){var g;if(bn(e,at),_!==null&&at>0)for(_.length=at+He.length,g=0;g<He.length;g++)_[at+g]=He[g];else e.deps=_=He;if(!Jt||(v&Fe)!==0&&e.reactions!==null)for(g=at;g<_.length;g++)(_[g].reactions??=[]).push(e)}else _!==null&&at<_.length&&(bn(e,at),_.length=at);if(tn()&&dt!==null&&!Pt&&_!==null&&(e.f&(Fe|Ft|ot))===0)for(g=0;g<dt.length;g++)Ca(dt[g],e);return s!==null&&s!==e&&(Zr++,dt!==null&&(n===null?n=dt:n.push(...dt))),(e.f&fr)!==0&&(e.f^=fr),p}catch(P){return ca(P)}finally{e.f^=Kn,He=t,at=r,dt=n,ne=s,Jt=i,Gt=o,Mr(c),Pt=u,hr=f}}function xo(e,t){let r=t.reactions;if(r!==null){var n=hi.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&Fe)!==0&&(He===null||!He.includes(t))&&(Je(t,Ft),(t.f&(ht|gn))===0&&(t.f^=gn),pa(t),bn(t,0))}function bn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)xo(e,r[n])}function Xr(e){var t=e.f;if((t&yr)===0){Je(e,We);var r=te,n=Nr;te=e,Nr=!0;try{(t&gr)!==0?bo(e):Ea(e),Pa(e);var s=Ia(e);e.teardown=typeof s=="function"?s:null,e.wv=Aa;var i;Fs&&Ki&&(e.f&ot)!==0&&e.deps}finally{Nr=n,te=r}}}async function So(){await Promise.resolve(),Xi()}function a(e){var t=e.f,r=(t&Fe)!==0;if(ne!==null&&!Pt){var n=te!==null&&(te.f&yr)!==0;if(!n&&!Gt?.includes(e)){var s=ne.deps;if((ne.f&Kn)!==0)e.rv<Zr&&(e.rv=Zr,He===null&&s!==null&&s[at]===e?at++:He===null?He=[e]:(!Jt||!He.includes(e))&&He.push(e));else{(ne.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[ne]:i.includes(ne)||i.push(ne)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,c=o.parent;c!==null&&(c.f&ht)===0&&(o.f^=ht)}if(xr){if(Zt.has(e))return Zt.get(e);if(r){o=e;var u=o.v;return((o.f&We)===0&&o.reactions!==null||Da(o))&&(u=us(o)),Zt.set(o,u),u}}else r&&(o=e,Mn(o)&&_a(o));if((e.f&fr)!==0)throw e.v;return e.v}function Da(e){if(e.v===De)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Zt.has(t)||(t.f&Fe)!==0&&Da(t))return!0;return!1}function Or(e){var t=Pt;try{return Pt=!0,e()}finally{Pt=t}}const Po=-7169;function Je(e,t){e.f=e.f&Po|t}function Eo(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ko=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function To(e){return ko.includes(e)}const $o={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function No(e){return e=e.toLowerCase(),$o[e]??e}const Ao=["touchstart","touchmove"];function Mo(e){return Ao.includes(e)}const ja=new Set,Zn=new Set;function Ra(e,t,r,n={}){function s(i){if(n.capture||Ur.call(t,i),!i.cancelBubble)return Nn(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?pr(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Xn(e,t,r,n={}){var s=Ra(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function rr(e){for(var t=0;t<e.length;t++)ja.add(e[t]);for(var r of Zn)r(e)}let Ms=null;function Ur(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],i=s[0]||e.target;Ms=e;var o=0,c=Ms===e&&e.__root;if(c){var u=s.indexOf(c);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var f=s.indexOf(t);if(f===-1)return;u<=f&&(o=u)}if(i=s[o]||e.target,i!==t){Hn(e,"currentTarget",{configurable:!0,get(){return i||r}});var v=ne,m=te;Xe(null),jt(null);try{for(var p,_=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var P=i["__"+n];if(P!=null&&(!i.disabled||e.target===i))if(Sn(P)){var[w,...E]=P;w.apply(i,[e,...E])}else P.call(i,e)}catch(j){p?_.push(j):p=j}if(e.cancelBubble||g===t||g===null)break;i=g}if(p){for(let j of _)queueMicrotask(()=>{throw j});throw p}}finally{e.__root=t,delete e.currentTarget,Xe(v),jt(m)}}}function qa(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function jr(e,t){var r=te;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function x(e,t){var r=(t&Li)!==0,n=(t&Bi)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=qa(i?e:"<!>"+e),r||(s=Dr(s)));var o=n||ga?document.importNode(s,!0):s.cloneNode(!0);if(r){var c=Dr(o),u=o.lastChild;jr(c,u)}else jr(o,o);return o}}function Co(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=qa(s),c=Dr(o);i=Dr(c)}var u=i.cloneNode(!0);return jr(u,u),u}}function Io(e,t){return Co(e,t,"svg")}function Qe(e=""){{var t=er(e+"");return jr(t,t),t}}function Z(){var e=document.createDocumentFragment(),t=document.createComment(""),r=er();return e.append(t,r),jr(t,r),e}function h(e,t){e!==null&&e.before(t)}function A(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function Do(e,t){return jo(e,t)}const Tr=new Map;function jo(e,{target:t,anchor:r,props:n={},events:s,context:i,intro:o=!0}){co();var c=new Set,u=m=>{for(var p=0;p<m.length;p++){var _=m[p];if(!c.has(_)){c.add(_);var g=Mo(_);t.addEventListener(_,Ur,{passive:g});var P=Tr.get(_);P===void 0?(document.addEventListener(_,Ur,{passive:g}),Tr.set(_,1)):Tr.set(_,P+1)}}};u(ns(ja)),Zn.add(u);var f=void 0,v=mo(()=>{var m=r??t.appendChild(er());return to(m,{pending:()=>{}},p=>{if(i){X({});var _=Pe;_.c=i}s&&(n.$$events=s),f=e(p,n)||{},i&&F()}),()=>{for(var p of c){t.removeEventListener(p,Ur);var _=Tr.get(p);--_===0?(document.removeEventListener(p,Ur),Tr.delete(p)):Tr.set(p,_)}Zn.delete(u),m!==r&&m.parentNode?.removeChild(m)}});return Ro.set(f,v),f}let Ro=new WeakMap;function I(e,t,r=!1){var n=e,s=null,i=null,o=De,c=r?wr:0,u=!1;const f=(_,g=!0)=>{u=!0,p(g,_)};var v=null;function m(){v!==null&&(v.lastChild.remove(),n.before(v),v=null);var _=o?s:i,g=o?i:s;_&&An(_),g&&Xt(g,()=>{o?i=null:s=null})}const p=(_,g)=>{if(o!==(o=_)){var P=ds(),w=n;if(P&&(v=document.createDocumentFragment(),v.append(w=er())),o?s??=g&&Be(()=>g(w)):i??=g&&Be(()=>g(w)),P){var E=ge,j=o?s:i,C=o?i:s;j&&E.skipped_effects.delete(j),C&&E.skipped_effects.add(C),E.add_callback(m)}else m()}};tr(()=>{u=!1,t(f),u||p(null,null)},c)}function qo(e,t){return t}function Oo(e,t,r){for(var n=e.items,s=[],i=t.length,o=0;o<i;o++)ps(t[o].e,s,!0);var c=i>0&&s.length===0&&r!==null;if(c){var u=r.parentNode;uo(u),u.append(r),n.clear(),Ct(e,t[0].prev,t[i-1].next)}Ta(s,()=>{for(var f=0;f<i;f++){var v=t[f];c||(n.delete(v.k),Ct(e,v.prev,v.next)),Re(v.e,!c)}})}function Ke(e,t,r,n,s,i=null){var o=e,c={flags:t,items:new Map,first:null},u=(t&aa)!==0;if(u){var f=e;o=f.appendChild(er())}var v=null,m=!1,p=new Map,_=cs(()=>{var E=r();return Sn(E)?E:E==null?[]:ns(E)}),g,P;function w(){Lo(P,g,c,p,o,s,t,n,r),i!==null&&(g.length===0?v?An(v):v=Be(()=>i(o)):v!==null&&Xt(v,()=>{v=null}))}tr(()=>{P??=te,g=a(_);var E=g.length;if(!(m&&E===0)){m=E===0;var j,C,N,T;if(ds()){var M=new Set,L=ge;for(C=0;C<E;C+=1){N=g[C],T=n(N,C);var V=c.items.get(T)??p.get(T);V?(t&(En|kn))!==0&&Oa(V,N,C,t):(j=La(null,c,null,null,N,T,C,s,t,r,!0),p.set(T,j)),M.add(T)}for(const[z,re]of c.items)M.has(z)||L.skipped_effects.add(re.e);L.add_callback(w)}else w();a(_)}})}function Lo(e,t,r,n,s,i,o,c,u){var f=(o&Ci)!==0,v=(o&(En|kn))!==0,m=t.length,p=r.items,_=r.first,g=_,P,w=null,E,j=[],C=[],N,T,M,L;if(f)for(L=0;L<m;L+=1)N=t[L],T=c(N,L),M=p.get(T),M!==void 0&&(M.a?.measure(),(E??=new Set).add(M));for(L=0;L<m;L+=1){if(N=t[L],T=c(N,L),M=p.get(T),M===void 0){var V=n.get(T);if(V!==void 0){n.delete(T),p.set(T,V);var z=w?w.next:g;Ct(r,w,V),Ct(r,V,z),zn(V,z,s),w=V}else{var re=g?g.e.nodes_start:s;w=La(re,r,w,w===null?r.first:w.next,N,T,L,i,o,u)}p.set(T,w),j=[],C=[],g=w.next;continue}if(v&&Oa(M,N,L,o),(M.e.f&Et)!==0&&(An(M.e),f&&(M.a?.unfix(),(E??=new Set).delete(M))),M!==g){if(P!==void 0&&P.has(M)){if(j.length<C.length){var _e=C[0],D;w=_e.prev;var R=j[0],se=j[j.length-1];for(D=0;D<j.length;D+=1)zn(j[D],_e,s);for(D=0;D<C.length;D+=1)P.delete(C[D]);Ct(r,R.prev,se.next),Ct(r,w,R),Ct(r,se,_e),g=_e,w=se,L-=1,j=[],C=[]}else P.delete(M),zn(M,g,s),Ct(r,M.prev,M.next),Ct(r,M,w===null?r.first:w.next),Ct(r,w,M),w=M;continue}for(j=[],C=[];g!==null&&g.k!==T;)(g.e.f&Et)===0&&(P??=new Set).add(g),C.push(g),g=g.next;if(g===null)continue;M=g}j.push(M),w=M,g=M.next}if(g!==null||P!==void 0){for(var ae=P===void 0?[]:ns(P);g!==null;)(g.e.f&Et)===0&&ae.push(g),g=g.next;var me=ae.length;if(me>0){var Ce=(o&aa)!==0&&m===0?s:null;if(f){for(L=0;L<me;L+=1)ae[L].a?.measure();for(L=0;L<me;L+=1)ae[L].a?.fix()}Oo(r,ae,Ce)}}f&&pr(()=>{if(E!==void 0)for(M of E)M.a?.apply()}),e.first=r.first&&r.first.e,e.last=w&&w.e;for(var S of n.values())Re(S.e);n.clear()}function Oa(e,t,r,n){(n&En)!==0&&Ir(e.v,t),(n&kn)!==0?Ir(e.i,r):e.i=r}function La(e,t,r,n,s,i,o,c,u,f,v){var m=(u&En)!==0,p=(u&Ii)===0,_=m?p?oo(s,!1,!1):mr(s):s,g=(u&kn)===0?o:mr(o),P={i:g,v:_,k:i,a:null,e:null,prev:r,next:n};try{if(e===null){var w=document.createDocumentFragment();w.append(e=er())}return P.e=Be(()=>c(e,_,g,f),Qi),P.e.prev=r&&r.e,P.e.next=n&&n.e,r===null?v||(t.first=P):(r.next=P,r.e.next=P.e),n!==null&&(n.prev=P,n.e.prev=P.e),P}finally{}}function zn(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==null&&i!==n;){var o=rn(i);s.before(i),i=o}}function Ct(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ue(e,t,...r){var n=e,s=oe,i;tr(()=>{s!==(s=t())&&(i&&(Re(i),i=null),i=Be(()=>s(n,...r)))},wr)}function vn(e,t,r){var n=e,s,i,o=null,c=null;function u(){i&&(Xt(i),i=null),o&&(o.lastChild.remove(),n.before(o),o=null),i=c,c=null}tr(()=>{if(s!==(s=t())){var f=ds();if(s){var v=n;f&&(o=document.createDocumentFragment(),o.append(v=er()),i&&ge.skipped_effects.add(i)),c=Be(()=>r(v,s))}f?ge.add_callback(u):u()}},wr)}function Bo(e,t,r,n,s,i){var o,c,u=null,f=e,v;tr(()=>{const m=t()||null;var p=zi;m!==o&&(v&&(m===null?Xt(v,()=>{v=null,c=null}):m===c?An(v):Re(v)),m&&m!==c&&(v=Be(()=>{if(u=document.createElementNS(p,m),jr(u,u),n){var _=u.appendChild(er());n(u,_)}te.nodes_end=u,f.before(u)})),o=m,o&&(c=o))},wr)}function Wo(e,t){var r=void 0,n;tr(()=>{r!==(r=t())&&(n&&(Re(n),n=null),r&&(n=Be(()=>{vs(()=>r(e))})))})}function Ba(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Ba(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function zo(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Ba(e))&&(n&&(n+=" "),n+=t);return n}function Vo(e){return typeof e=="object"?zo(e):e??""}const Cs=[...` 	
\r\f \v\uFEFF`];function Go(e,t,r){var n=e==null?"":""+e;if(r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var c=o+i;(o===0||Cs.includes(n[o-1]))&&(c===n.length||Cs.includes(n[c]))?n=(o===0?"":n.substring(0,o))+n.substring(c+1):o=c}}return n===""?null:n}function Is(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var i=e[s];i!=null&&i!==""&&(n+=" "+s+": "+i+r)}return n}function Vn(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Uo(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,c=!1,u=[];n&&u.push(...Object.keys(n).map(Vn)),s&&u.push(...Object.keys(s).map(Vn));var f=0,v=-1;const P=e.length;for(var m=0;m<P;m++){var p=e[m];if(c?p==="/"&&e[m-1]==="*"&&(c=!1):i?i===p&&(i=!1):p==="/"&&e[m+1]==="*"?c=!0:p==='"'||p==="'"?i=p:p==="("?o++:p===")"&&o--,!c&&i===!1&&o===0){if(p===":"&&v===-1)v=m;else if(p===";"||m===P-1){if(v!==-1){var _=Vn(e.substring(f,v).trim());if(!u.includes(_)){p!==";"&&m++;var g=e.substring(f,m).trim();r+=" "+g+";"}}f=m+1,v=-1}}}}return n&&(r+=Is(n)),s&&(r+=Is(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function $e(e,t,r,n,s,i){var o=e.__className;if(o!==r||o===void 0){var c=Go(r,n,i);c==null?e.removeAttribute("class"):t?e.className=c:e.setAttribute("class",c),e.__className=r}else if(i&&s!==i)for(var u in i){var f=!!i[u];(s==null||f!==!!s[u])&&e.classList.toggle(u,f)}return i}function Gn(e,t={},r,n){for(var s in r){var i=r[s];t[s]!==i&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,n))}}function Qo(e,t,r,n){var s=e.__style;if(s!==t){var i=Uo(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(Gn(e,r?.[0],n[0]),Gn(e,r?.[1],n[1],"important")):Gn(e,r,n));return n}function yn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Sn(t))return Gi();for(var n of e.options)n.selected=t.includes(Yr(n));return}for(n of e.options){var s=Yr(n);if(lo(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Wa(e){var t=new MutationObserver(()=>{yn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),wa(()=>{t.disconnect()})}function Fn(e,t,r=t){var n=!0;fs(e,"change",s=>{var i=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),Yr);else{var c=e.querySelector(i)??e.querySelector("option:not([disabled])");o=c&&Yr(c)}r(o)}),vs(()=>{var s=t();if(yn(e,s,n),n&&s===void 0){var i=e.querySelector(":checked");i!==null&&(s=Yr(i),r(s))}e.__value=s,n=!1}),Wa(e)}function Yr(e){return"__value"in e?e.__value:e.value}const Vr=Symbol("class"),Gr=Symbol("style"),za=Symbol("is custom element"),Va=Symbol("is html");function Ho(e,t){var r=Cn(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function Ar(e,t){var r=Cn(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Ko(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function es(e,t,r,n){var s=Cn(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[wi]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ga(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Jo(e,t,r,n,s=!1,i=!1){var o=Cn(e),c=o[za],u=!o[Va],f=t||{},v=e.tagName==="OPTION";for(var m in t)m in r||(r[m]=null);r.class?r.class=Vo(r.class):r[Vr]&&(r.class=null),r[Gr]&&(r.style??=null);var p=Ga(e);for(const N in r){let T=r[N];if(v&&N==="value"&&T==null){e.value=e.__value="",f[N]=T;continue}if(N==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";$e(e,_,T,n,t?.[Vr],r[Vr]),f[N]=T,f[Vr]=r[Vr];continue}if(N==="style"){Qo(e,T,t?.[Gr],r[Gr]),f[N]=T,f[Gr]=r[Gr];continue}var g=f[N];if(!(T===g&&!(T===void 0&&e.hasAttribute(N)))){f[N]=T;var P=N[0]+N[1];if(P!=="$$")if(P==="on"){const M={},L="$$"+N;let V=N.slice(2);var w=To(V);if(Eo(V)&&(V=V.slice(0,-7),M.capture=!0),!w&&g){if(T!=null)continue;e.removeEventListener(V,f[L],M),f[L]=null}if(T!=null)if(w)e[`__${V}`]=T,rr([V]);else{let z=function(re){f[N].call(this,re)};var C=z;f[L]=Ra(V,e,z,M)}else w&&(e[`__${V}`]=void 0)}else if(N==="style")es(e,N,T);else if(N==="autofocus")fo(e,!!T);else if(!c&&(N==="__value"||N==="value"&&T!=null))e.value=e.__value=T;else if(N==="selected"&&v)Ko(e,T);else{var E=N;u||(E=No(E));var j=E==="defaultValue"||E==="defaultChecked";if(T==null&&!c&&!j)if(o[N]=null,E==="value"||E==="checked"){let M=e;const L=t===void 0;if(E==="value"){let V=M.defaultValue;M.removeAttribute(E),M.defaultValue=V,M.value=M.__value=L?V:null}else{let V=M.defaultChecked;M.removeAttribute(E),M.defaultChecked=V,M.checked=L?V:!1}}else e.removeAttribute(N);else j||p.includes(E)&&(c||typeof T!="string")?(e[E]=T,E in o&&(o[E]=De)):typeof T!="function"&&es(e,E,T)}}}return f}function Ds(e,t,r=[],n=[],s,i=!1,o=!1){va(r,n,c=>{var u=void 0,f={},v=e.nodeName==="SELECT",m=!1;if(tr(()=>{var _=t(...c.map(a)),g=Jo(e,u,_,s,i,o);m&&v&&"value"in _&&yn(e,_.value);for(let w of Object.getOwnPropertySymbols(f))_[w]||Re(f[w]);for(let w of Object.getOwnPropertySymbols(_)){var P=_[w];w.description===Vi&&(!u||P!==u[w])&&(f[w]&&Re(f[w]),f[w]=Be(()=>Wo(e,()=>P))),g[w]=P}u=g}),v){var p=e;vs(()=>{yn(p,u.value,!0),Wa(p)})}m=!0})}function Cn(e){return e.__attributes??={[za]:e.nodeName.includes("-"),[Va]:e.namespaceURI===Wi}}var js=new Map;function Ga(e){var t=e.getAttribute("is")||e.nodeName,r=js.get(t);if(r)return r;js.set(t,r=[]);for(var n,s=e,i=Element.prototype;i!==s;){n=pi(s);for(var o in n)n[o].set&&r.push(o);s=ea(s)}return r}function Le(e,t,r=t){var n=new WeakSet;fs(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=Un(e)?Qn(i):i,r(i),ge!==null&&n.add(ge),await So(),i!==(i=t())){var o=e.selectionStart,c=e.selectionEnd;e.value=i??"",c!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(c,e.value.length))}}),Or(t)==null&&e.value&&(r(Un(e)?Qn(e.value):e.value),ge!==null&&n.add(ge)),hs(()=>{var s=t();if(e===document.activeElement){var i=fn??ge;if(n.has(i))return}Un(e)&&s===Qn(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Yo(e,t,r=t){fs(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),Or(t)==null&&r(e.checked),hs(()=>{var n=t();e.checked=!!n})}function Un(e){var t=e.type;return t==="number"||t==="range"}function Qn(e){return e===""?null:+e}let dn=!1;function Zo(e){var t=dn;try{return dn=!1,[e(),dn]}finally{dn=t}}const Xo={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function de(e,t,r){return new Proxy({props:e,exclude:t},Xo)}const Fo={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(zr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];zr(s)&&(s=s());const i=Yt(s,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(zr(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=Yt(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===vr||t===na)return!1;for(let r of e.props)if(zr(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(zr(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function he(...e){return new Proxy({props:e},Fo)}function $r(e,t,r,n){var s=!qr||(r&ji)!==0,i=(r&qi)!==0,o=(r&Oi)!==0,c=n,u=!0,f=()=>(u&&(u=!1,c=o?Or(n):n),c),v;if(i){var m=vr in e||na in e;v=Yt(e,t)?.set??(m&&t in e?C=>e[t]=C:void 0)}var p,_=!1;i?[p,_]=Zo(()=>e[t]):p=e[t],p===void 0&&n!==void 0&&(p=f(),v&&(s&&Ti(),v(p)));var g;if(s?g=()=>{var C=e[t];return C===void 0?f():(u=!0,C)}:g=()=>{var C=e[t];return C!==void 0&&(c=void 0),C===void 0?c:C},s&&(r&Ri)===0)return g;if(v){var P=e.$$legacy;return(function(C,N){return arguments.length>0?((!s||!N||P||_)&&v(N?g():C),C):g()})}var w=!1,E=((r&Di)!==0?$n:cs)(()=>(w=!1,g()));i&&a(E);var j=te;return(function(C,N){if(arguments.length>0){const T=N?a(E):s&&i?it(C):C;return $(E,T),w=!0,c!==void 0&&(c=T),C}return xr&&w||(j.f&yr)!==0?E.v:a(E)})}function Ua(e){Pe===null&&sa(),qr&&Pe.l!==null?tl(Pe).m.push(e):xa(()=>{const t=Or(e);if(typeof t=="function")return t})}function el(e){Pe===null&&sa(),Ua(()=>()=>Or(e))}function tl(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const rl="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(rl);const Qa=typeof window<"u"?window:void 0;function nl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class sl{#t;#r;constructor(t={}){const{window:r=Qa,document:n=r?.document}=t;r!==void 0&&(this.#t=n,this.#r=ls(s=>{const i=Xn(r,"focusin",s),o=Xn(r,"focusout",s);return()=>{i(),o()}}))}get current(){return this.#r?.(),this.#t?nl(this.#t):null}}new sl;function al(e,t){return e}function il(e,t){let r=be(null);const n=Q(()=>al(t));function s(...i){if(a(r))a(r).timeout&&clearTimeout(a(r).timeout);else{let o,c;const u=new Promise((f,v)=>{o=f,c=v});$(r,{timeout:null,runner:null,promise:u,resolve:o,reject:c},!0)}return a(r).runner=async()=>{if(!a(r))return;const o=a(r);$(r,null);try{o.resolve(await e.apply(this,i))}catch(c){o.reject(c)}},a(r).timeout=setTimeout(a(r).runner,a(n)),a(r).promise}return s.cancel=async()=>{(!a(r)||a(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||a(r).timeout===null)||(clearTimeout(a(r).timeout),a(r).reject("Cancelled"),$(r,null))},s.runScheduledNow=async()=>{(!a(r)||!a(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||!a(r).timeout)||(clearTimeout(a(r).timeout),a(r).timeout=null,await a(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!a(r)?.timeout}}),s}function ol(e,t){switch(e){case"local":return t.localStorage;case"session":return t.sessionStorage}}function Ha(e,t,r,n,s,i){if(e===null||typeof e!="object")return e;const o=Object.getPrototypeOf(e);if(o!==null&&o!==Object.prototype&&!Array.isArray(e))return e;let c=r.get(e);return c||(c=new Proxy(e,{get:(u,f)=>(n?.(),Ha(Reflect.get(u,f),t,r,n,s,i)),set:(u,f,v)=>(s?.(),Reflect.set(u,f,v),i(t),!0)}),r.set(e,c)),c}class Rs{#t;#r;#s;#n;#c;#a;#o=new WeakMap;constructor(t,r,n={}){const{storage:s="local",serializer:i={serialize:JSON.stringify,deserialize:JSON.parse},syncTabs:o=!0}=n,c="window"in n?n.window:Qa;if(this.#t=r,this.#r=t,this.#s=i,c===void 0)return;const u=ol(s,c);this.#n=u;const f=u.getItem(t);f!==null?this.#t=this.#l(f):this.#u(r),o&&s==="local"&&(this.#c=ls(v=>{this.#a=v;const m=Xn(c,"storage",this.#i);return()=>{m(),this.#a=void 0}}))}get current(){this.#c?.();const t=this.#n?.getItem(this.#r),r=t?this.#l(t):this.#t;return Ha(r,r,this.#o,this.#c?.bind(this),this.#a?.bind(this),this.#u.bind(this))}set current(t){this.#u(t),this.#a?.()}#i=t=>{t.key!==this.#r||t.newValue===null||(this.#t=this.#l(t.newValue),this.#a?.())};#l(t){try{return this.#s.deserialize(t)}catch(r){console.error(`Error when parsing "${t}" from persisted store "${this.#r}"`,r);return}}#u(t){try{t!=null&&this.#n?.setItem(this.#r,this.#s.serialize(t))}catch(r){console.error(`Error when writing value from persisted store "${this.#r}" to ${this.#n}`,r)}}}function ll(e="your-main-id"){return typeof window>"u"?e:new URLSearchParams(window.location.search).get("listId")||e}function qs(e,t){return`${e}_${t}`}function cl(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}let b=class{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}};b.equal=(e,t)=>new b("equal",e,t).toString();b.notEqual=(e,t)=>new b("notEqual",e,t).toString();b.lessThan=(e,t)=>new b("lessThan",e,t).toString();b.lessThanEqual=(e,t)=>new b("lessThanEqual",e,t).toString();b.greaterThan=(e,t)=>new b("greaterThan",e,t).toString();b.greaterThanEqual=(e,t)=>new b("greaterThanEqual",e,t).toString();b.isNull=e=>new b("isNull",e).toString();b.isNotNull=e=>new b("isNotNull",e).toString();b.between=(e,t,r)=>new b("between",e,[t,r]).toString();b.startsWith=(e,t)=>new b("startsWith",e,t).toString();b.endsWith=(e,t)=>new b("endsWith",e,t).toString();b.select=e=>new b("select",void 0,e).toString();b.search=(e,t)=>new b("search",e,t).toString();b.orderDesc=e=>new b("orderDesc",e).toString();b.orderAsc=e=>new b("orderAsc",e).toString();b.orderRandom=()=>new b("orderRandom").toString();b.cursorAfter=e=>new b("cursorAfter",void 0,e).toString();b.cursorBefore=e=>new b("cursorBefore",void 0,e).toString();b.limit=e=>new b("limit",void 0,e).toString();b.offset=e=>new b("offset",void 0,e).toString();b.contains=(e,t)=>new b("contains",e,t).toString();b.notContains=(e,t)=>new b("notContains",e,t).toString();b.notSearch=(e,t)=>new b("notSearch",e,t).toString();b.notBetween=(e,t,r)=>new b("notBetween",e,[t,r]).toString();b.notStartsWith=(e,t)=>new b("notStartsWith",e,t).toString();b.notEndsWith=(e,t)=>new b("notEndsWith",e,t).toString();b.createdBefore=e=>new b("createdBefore",void 0,e).toString();b.createdAfter=e=>new b("createdAfter",void 0,e).toString();b.createdBetween=(e,t)=>new b("createdBetween",void 0,[e,t]).toString();b.updatedBefore=e=>new b("updatedBefore",void 0,e).toString();b.updatedAfter=e=>new b("updatedAfter",void 0,e).toString();b.updatedBetween=(e,t)=>new b("updatedBetween",void 0,[e,t]).toString();b.or=e=>new b("or",void 0,e.map(t=>JSON.parse(t))).toString();b.and=e=>new b("and",void 0,e.map(t=>JSON.parse(t))).toString();b.distanceEqual=(e,t,r,n=!0)=>new b("distanceEqual",e,[[t,r,n]]).toString();b.distanceNotEqual=(e,t,r,n=!0)=>new b("distanceNotEqual",e,[[t,r,n]]).toString();b.distanceGreaterThan=(e,t,r,n=!0)=>new b("distanceGreaterThan",e,[[t,r,n]]).toString();b.distanceLessThan=(e,t,r,n=!0)=>new b("distanceLessThan",e,[[t,r,n]]).toString();b.intersects=(e,t)=>new b("intersects",e,[t]).toString();b.notIntersects=(e,t)=>new b("notIntersects",e,[t]).toString();b.crosses=(e,t)=>new b("crosses",e,[t]).toString();b.notCrosses=(e,t)=>new b("notCrosses",e,[t]).toString();b.overlaps=(e,t)=>new b("overlaps",e,[t]).toString();b.notOverlaps=(e,t)=>new b("notOverlaps",e,[t]).toString();b.touches=(e,t)=>new b("touches",e,[t]).toString();b.notTouches=(e,t)=>new b("notTouches",e,[t]).toString();var Ka,Ja;class Fr{static custom(t){return t}static unique(t=7){const r=cl(Fr,Ka,"m",Ja).call(Fr);let n="";for(let s=0;s<t;s++){const i=Math.floor(Math.random()*16).toString(16);n+=i}return r+n}}Ka=Fr,Ja=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Os;(function(e){e.Totp="totp"})(Os||(Os={}));var Ls;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Ls||(Ls={}));var Bs;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(Bs||(Bs={}));var Ws;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Ws||(Ws={}));var zs;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(zs||(zs={}));var Vs;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Vs||(Vs={}));var Gs;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})(Gs||(Gs={}));var Us;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(Us||(Us={}));var Qs;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Qs||(Qs={}));async function Lr(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function ul(e,t={}){const{includePurchases:r=!0,limit:n=100,orderBy:s="productName",orderDirection:i="asc"}=t;try{const{databases:o,config:c}=await Lr(),u=await o.listDocuments(c.APPWRITE_CONFIG.databaseId,c.APPWRITE_CONFIG.collections.products,[b.equal("mainId",e),b.orderAsc(s==="productName"?"productName":"$updatedAt"),b.limit(n)]),f=u.documents;if(!r)return f;const v=await o.listDocuments(c.APPWRITE_CONFIG.databaseId,c.APPWRITE_CONFIG.collections.purchases,[b.equal("mainId",e)]),m=v.documents,p=_l(f,m);return console.log(`[Appwrite Interactions] ${u.documents.length} produits chargés avec ${v.documents.length} achats`),p}catch(o){console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${e}:`,o);const c=o instanceof Error?o.message:"Erreur lors du chargement des produits";throw new Error(`Échec du chargement des produits: ${c}`)}}async function dl(e,t){const{lastSync:r,limit:n=100}=t;if(!r)return console.log("[Appwrite Interactions] Aucune dernière sync fournie, retour vide"),[];try{const{databases:s,config:i}=await Lr(),o=await s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.limit(n)]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} mises à jour synchronisées`),o.documents}catch(s){console.error(`[Appwrite Interactions] Erreur sync produits pour mainId ${e}:`,s);const i=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function _s(e,t){try{const{databases:r,config:n}=await Lr();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function fl(e,t){if(console.log(`[Appwrite Interactions] Mise à jour du magasin pour produit ${e}:`,t),!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await _s(e,{store:r});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function Hs(e,t){return _s(e,{who:t})}async function Ks(e,t){return _s(e,{stockReel:t})}async function vl(e){try{const{databases:t,config:r}=await Lr(),i=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:i.$id,status:"active"},c=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,Fr.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",c),c}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function hl(e,t){try{const{databases:r,config:n}=await Lr(),s=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,t);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,t),s}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function pl(e){try{const{databases:t,config:r}=await Lr();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}function _l(e,t){return e.map(r=>({...r,purchases:t.filter(n=>n.products.some(s=>s.$id===r.$id))}))}function ml(e,t){const r=new Map(t.map(o=>[o.$id,o])),n=e.map(o=>r.get(o.$id)??o),s=new Set(e.map(o=>o.$id)),i=t.filter(o=>!s.has(o.$id));return[...n,...i]}function gl(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing stock data:",t),[]}}function bl(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing recipes occurrences:",t),[]}}function yl(e,t={}){let r=null;const n=i=>{const{events:o,payload:c}=i;if(!c)return;const u=o.some(_=>_.includes("products.")),f=o.some(_=>_.includes("purchases.")),v=o.some(_=>_.includes(".create")),m=o.some(_=>_.includes(".update")),p=o.some(_=>_.includes(".delete"));if(u){const _=c;v&&t.onProductCreate?t.onProductCreate(_):m&&t.onProductUpdate?t.onProductUpdate(_):p&&t.onProductDelete&&t.onProductDelete(_.$id)}else if(f){const _=c;v&&t.onPurchaseCreate?t.onPurchaseCreate(_):m&&t.onPurchaseUpdate?t.onPurchaseUpdate(_):p&&t.onPurchaseDelete&&t.onPurchaseDelete(_.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),t.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),t.onError?.(i)}})(),()=>{r&&(r(),r=null)}}const{Query:_d}=window.Appwrite,Js=1e3,wl=500;class xl{#t=be(null);#r=be(!1);#s=be(null);#n=be(null);#c=be(null);#a(t,r=null){if(!t||t.trim()==="")return r;try{return JSON.parse(t)}catch(n){return console.warn("[ProductsStore] Erreur de parsing JSON, utilisation de la valeur par défaut:",n),r}}#o=Q(()=>a(this.#s)?.current.products??[]);get products(){return a(this.#o)}set products(t){$(this.#o,t)}#i=Q(()=>a(this.#s)?.current.loading??!1);get loading(){return a(this.#i)}set loading(t){$(this.#i,t)}#l=Q(()=>a(this.#s)?.current.error??null);get error(){return a(this.#l)}set error(t){$(this.#l,t)}#u=Q(()=>a(this.#s)?.current.syncing??!1);get syncing(){return a(this.#u)}set syncing(t){$(this.#u,t)}#v=Q(()=>a(this.#s)?.current.realtimeConnected??!1);get realtimeConnected(){return a(this.#v)}set realtimeConnected(t){$(this.#v,t)}#f=Q(()=>a(this.#n)?.current.lastSync??null);get lastSync(){return a(this.#f)}set lastSync(t){$(this.#f,t)}#h=Q(()=>a(this.#n)?.current.mainId??null);get mainId(){return a(this.#h)}set mainId(t){$(this.#h,t)}#e=be(it({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return a(this.#e)}#b=Q(()=>this.products.map(t=>{const r=this.#$(t.purchases??[]),n=t.totalNeededConsolidated?this.#a(t.totalNeededConsolidated):[],s=this.#W(n,r);return{...t,storeInfo:t.store?this.#a(t.store):null,totalNeededArray:n,recipesArray:t.recipesOccurrences?this.#a(t.recipesOccurrences):[],stockArray:t.stockReel?this.#a(t.stockReel):[],displayQuantity:this.#L(t.totalNeededConsolidated),displayName:t.productName.trim(),totalPurchases:r,displayTotalPurchases:this.#B(t.purchases??[]),missingQuantity:s,displayMissingQuantity:s.length>0?s.map(i=>this.#P(i.quantity.toString(),i.unit)).join(" et "):"✅ Complet"}}));get enrichedProducts(){return a(this.#b)}set enrichedProducts(t){$(this.#b,t)}#y=Q(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return a(this.#y)}set uniqueStores(t){$(this.#y,t)}#w=Q(()=>[...new Set(this.products.flatMap(t=>t.who||[]).filter(Boolean))]);get uniqueWho(){return a(this.#w)}set uniqueWho(t){$(this.#w,t)}#x=Q(()=>[...new Set(this.products.map(t=>t.productType).filter(Boolean))]);get uniqueProductTypes(){return a(this.#x)}set uniqueProductTypes(t){$(this.#x,t)}#p=Q(()=>{const t=this.enrichedProducts.filter(r=>this.#O(r));return a(this.#e).groupBy==="none"?{"":t}:Object.groupBy(t,r=>a(this.#e).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return a(this.#p)}set filteredGroupedProducts(t){$(this.#p,t)}#_=Q(()=>Object.values(this.filteredGroupedProducts).flat());get filteredProducts(){return a(this.#_)}set filteredProducts(t){$(this.#_,t)}#g=Q(()=>this.filteredGroupedProducts);get groupedFormattedProducts(){return a(this.#g)}set groupedFormattedProducts(t){$(this.#g,t)}#E=Q(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return a(this.#E)}set stats(t){$(this.#E,t)}get currentMainId(){return a(this.#t)}get isInitialized(){return a(this.#r)}#m=il(()=>{this.#S()},wl);async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(a(this.#r)&&a(this.#t)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),$(this.#t,t,!0),$(this.#r,!0),this.#N(t),this.products.length>0&&a(this.#n).current.mainId===t?(console.log(`[ProductsStore] Utilisation du cache (${this.products.length} produits)`),await this.#A()):(console.log("[ProductsStore] Chargement initial depuis Appwrite"),await this.#k(t));const n=this.#q();$(this.#c,yl(t,n),!0)}#N(t){if(a(this.#s)&&a(this.#n))return;const r=qs("products-state",t),n=qs("products-sync-state",t);console.log(`[ProductsStore] Clés de stockage: ${r}, ${n}`),$(this.#s,new Rs(r,{products:[],loading:!1,error:null,syncing:!1,realtimeConnected:!1}),!0),$(this.#n,new Rs(n,{lastSync:null,mainId:null}),!0)}async#k(t){if(!a(this.#s))throw new Error("ProductsStore non initialisé");this.#d({loading:!0,error:null});try{const n=await ul(t,{includePurchases:!0,limit:Js,orderBy:"productName",orderDirection:"asc"});this.#d({products:n}),this.#S(),console.log(`[ProductsStore] ${n.length} produits chargés`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors du chargement";throw this.#d({loading:!1,error:n}),console.error("[ProductsStore]",n,r),r}}async#A(){if(a(this.#n)?.current.lastSync){this.#d({syncing:!0});try{const t={lastSync:a(this.#n).current.lastSync,limit:Js},r=await dl(a(this.#t),t);r.length>0&&(this.#d({products:ml(this.products,r)}),this.#S(),console.log(`[ProductsStore] ${r.length} mises à jour synchronisées`)),this.#d({syncing:!1})}catch(t){console.error("[ProductsStore] Erreur sync:",t),this.#d({syncing:!1})}}}#M(t){if(!a(this.#s))return;this.products.some(n=>n.$id===t.$id)||this.#d({products:[...this.products,t]})}#C(t){a(this.#s)&&this.#d({products:this.products.map(r=>{if(r.$id===t.$id){const n={...r};return Object.keys(t).forEach(s=>{t[s]!==void 0&&(n[s]=t[s])}),n}return r})})}#I(t){a(this.#s)&&this.#d({products:this.products.filter(r=>r.$id!==t)})}#D(t){console.log("[ProductsStore] Purchase créé, mise à jour des produits concernés..."),this.#T(t)}#j(t){console.log("[ProductsStore] Purchase mis à jour, mise à jour des produits concernés..."),this.#T(t)}#R(t){console.log("[ProductsStore] Purchase supprimé, nettoyage des produits concernés..."),this.#d({products:this.products.map(r=>({...r,purchases:(r.purchases||[]).filter(n=>n.$id!==t)}))})}#T(t){!t.products||t.products.length===0||(this.#d({products:this.products.map(r=>{if(t.products.some(n=>n.$id===r.$id)){const s=(r.purchases||[]).filter(i=>i.$id!==t.$id);return s.push(t),{...r,purchases:s}}return r})}),console.log(`[ProductsStore] ${t.products.length} produit(s) mis à jour avec le purchase ${t.$id}`))}#q(){return{onProductCreate:t=>{this.#M(t),this.#m()},onProductUpdate:t=>{this.#C(t),this.#m()},onProductDelete:t=>{this.#I(t),this.#m()},onPurchaseCreate:t=>{this.#D(t),this.#m()},onPurchaseUpdate:t=>{this.#j(t),this.#m()},onPurchaseDelete:t=>{this.#R(t),this.#m()},onConnect:()=>{console.log("[ProductsStore] Realtime connecté"),this.#d({realtimeConnected:!0})},onDisconnect:()=>{console.log("[ProductsStore] Realtime déconnecté"),this.#d({realtimeConnected:!1})},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#S(){if(!a(this.#t)||!a(this.#n))return;const t=new Date().toISOString();a(this.#n).current={lastSync:t,mainId:a(this.#t)},this.lastSync=t,this.mainId=a(this.#t)}#d(t){a(this.#s)&&(a(this.#s).current={...a(this.#s).current,...t})}async forceReload(t){await this.#k(t)}destroy(){a(this.#c)?.(),$(this.#c,null),console.log("[ProductsStore] Ressources nettoyées")}clearCache(){if(!a(this.#s)||!a(this.#n)){console.warn("[ProductsStore] Store non initialisé");return}this.#d({products:[],loading:!1,error:null,syncing:!1,realtimeConnected:!1}),a(this.#n).current={lastSync:null,mainId:null},console.log(`[ProductsStore] Cache vidé pour ${a(this.#t)}`)}setSearchQuery(t){a(this.#e).searchQuery=t}toggleProductType(t){const r=a(this.#e).selectedProductTypes.indexOf(t);r>-1?a(this.#e).selectedProductTypes.splice(r,1):a(this.#e).selectedProductTypes.push(t)}toggleTemperature(t){const r=a(this.#e).selectedTemperatures.indexOf(t);r>-1?a(this.#e).selectedTemperatures.splice(r,1):a(this.#e).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){a(this.#e).selectedProductTypes=[],a(this.#e).selectedTemperatures=[]}setGroupBy(t){a(this.#e).groupBy=t}toggleStore(t){const r=a(this.#e).selectedStores.indexOf(t);r>-1?a(this.#e).selectedStores.splice(r,1):a(this.#e).selectedStores.push(t)}toggleWho(t){const r=a(this.#e).selectedWho.indexOf(t);r>-1?a(this.#e).selectedWho.splice(r,1):a(this.#e).selectedWho.push(t)}clearStoreFilters(){a(this.#e).selectedStores=[]}clearWhoFilters(){a(this.#e).selectedWho=[]}handleSort(t){a(this.#e).sortColumn===t?a(this.#e).sortDirection=a(this.#e).sortDirection==="asc"?"desc":"asc":(a(this.#e).sortColumn=t,a(this.#e).sortDirection="asc")}clearFilters(){$(this.#e,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"none",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return a(this.#e).sortColumn?[...t].sort((r,n)=>{let s=r[a(this.#e).sortColumn],i=n[a(this.#e).sortColumn];return a(this.#e).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,i=parseFloat(i)||0):a(this.#e).sortColumn==="purchases"&&(s=r.purchases?.length||0,i=n.purchases?.length||0),s<i?a(this.#e).sortDirection==="asc"?-1:1:s>i?a(this.#e).sortDirection==="asc"?1:-1:0}):t}#O(t){if(a(this.#e).searchQuery.trim()){const r=a(this.#e).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(a(this.#e).selectedStores.length>0&&(!t.storeInfo?.storeName||!a(this.#e).selectedStores.includes(t.storeInfo.storeName))||a(this.#e).selectedWho.length>0&&(!t.who||!t.who.some(r=>a(this.#e).selectedWho.includes(r)))||a(this.#e).selectedProductTypes.length>0&&(!t.productType||!a(this.#e).selectedProductTypes.includes(t.productType))||a(this.#e).selectedTemperatures.length>0&&!(a(this.#e).selectedTemperatures.includes("frais")&&t.pFrais||a(this.#e).selectedTemperatures.includes("surgele")&&t.pSurgel))}#L(t){if(!t)return"-";try{const r=JSON.parse(t);return!Array.isArray(r)||r.length===0?"-":r.map(n=>this.#P(n.quantity,n.unit)).join(" et ")}catch{return"-"}}#P(t,r){const n=parseFloat(t);if(isNaN(n))return`${t} ${r}`;if((r==="gr."||r==="ml")&&n>=1e3){const s=n/1e3,i=r==="gr."?"kg":"l.";let c=(Math.round(s*100)/100).toString();return c.endsWith(",0")&&(c=c.slice(0,-2)),c.endsWith(",00")&&(c=c.slice(0,-3)),`${c} ${i}`}if(!["gr.","ml","kg","l."].includes(r)){let i=(Math.round(n*10)/10).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),`${i} ${r}`}return`${n} ${r}`}#B(t){return!t||t.length===0?"-":this.#$(t).map(n=>this.#P(n.quantity.toString(),n.unit)).join(" et ")}#$(t){if(!t||t.length===0)return[];const r=new Map;t.forEach(s=>{if(!s.quantity||!s.unit)return;const i=parseFloat(s.quantity);if(isNaN(i))return;const o=r.get(s.unit)||0;r.set(s.unit,o+i)});const n=[];return r.forEach((s,i)=>{n.push({quantity:s,unit:i})}),n}#W(t,r){if(!t||t.length===0)return[];if(!r||r.length===0)return t.map(o=>({quantity:parseFloat(o.quantity),unit:o.unit}));const n=new Map,s=new Map;t.forEach(o=>{const c=parseFloat(o.quantity);isNaN(c)||n.set(o.unit,(n.get(o.unit)||0)+c)}),r.forEach(o=>{s.set(o.unit,(s.get(o.unit)||0)+o.quantity)});const i=[];return n.forEach((o,c)=>{const u=s.get(c)||0,f=o-u;f>0&&i.push({quantity:f,unit:c})}),i}}const B=new xl;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Sl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Pl=Io("<svg><!><!></svg>");function pe(e,t){X(t,!0);const r=$r(t,"color",3,"currentColor"),n=$r(t,"size",3,24),s=$r(t,"strokeWidth",3,2),i=$r(t,"absoluteStrokeWidth",3,!1),o=$r(t,"iconNode",19,()=>[]),c=de(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=Pl();Ds(u,m=>({...Sl,...c,width:n(),height:n(),stroke:r(),"stroke-width":m,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>i()?Number(s())*24/Number(n()):s()]);var f=l(u);Ke(f,17,o,qo,(m,p)=>{var _=Q(()=>ra(a(p),2));let g=()=>a(_)[0],P=()=>a(_)[1];var w=Z(),E=H(w);Bo(E,g,!0,(j,C)=>{Ds(j,()=>({...P()}))}),h(m,w)});var v=d(f);ue(v,()=>t.children??oe),h(e,u),F()}function ts(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];pe(e,he({name:"archive"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function El(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];pe(e,he({name:"bean"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function kl(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];pe(e,he({name:"beef"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function Tl(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];pe(e,he({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function $l(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];pe(e,he({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function Nl(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];pe(e,he({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function Al(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];pe(e,he({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function Ml(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];pe(e,he({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function Cl(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];pe(e,he({name:"combine"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function Il(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];pe(e,he({name:"egg"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function rs(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];pe(e,he({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function Ys(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];pe(e,he({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function Dl(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];pe(e,he({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function jl(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];pe(e,he({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function hn(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];pe(e,he({name:"package"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function Rl(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];pe(e,he({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function ql(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];pe(e,he({name:"save"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function Ol(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];pe(e,he({name:"search"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function pn(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];pe(e,he({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function wn(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];pe(e,he({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function _n(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];pe(e,he({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function Qr(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];pe(e,he({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function en(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];pe(e,he({name:"store"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function Ll(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];pe(e,he({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function Bl(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];pe(e,he({name:"user"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function xn(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];pe(e,he({name:"users"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function Wl(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];pe(e,he({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}function vt(e,t){X(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=de(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];pe(e,he({name:"x"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=Z(),c=H(o);ue(c,()=>t.children??oe),h(s,o)},$$slots:{default:!0}})),F()}const Dt=it({product:{id:"",isOpen:!1,tab:"recettes"}});function zl(e,t){Dt.product.tab=e,Dt.product.isOpen=!0,Dt.product.id=t}function Zs(){Dt.product.isOpen=!1,Dt.product.tab="",Dt.product.id=""}let Xs=()=>localStorage.getItem("appwrite-user-name")||"";function Vl(e,t,r){$(t,null),r.onCancelEditPurchase()}async function Gl(e,t,r){await t.onSavePurchase(),$(r,null)}var Ul=x('<span class="loading loading-spinner loading-sm"></span>'),Ql=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Hl=x('<span class="loading loading-spinner loading-sm"></span>'),Kl=x('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input input-bordered w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input input-bordered w-24"/></td><td><input type="text" class="input input-bordered w-20"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="0.01" class="input input-bordered w-16"/></td><td><input type="text" class="input input-bordered w-24"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Jl=(e,t,r)=>t(a(r)),Yl=(e,t,r)=>t(a(r).$id),Zl=x('<span class="loading loading-spinner loading-sm"></span>'),Xl=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Fl=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),ec=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"><div class="form-control"><label for="purchase-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="purchase-quantity" type="number" step="0.01" class="input input-bordered validator" required/></div> <div class="form-control"><label for="purchase-unit" class="label"><span class="label-text">Unité</span></label> <select id="purchase-unit" class="select select-bordered validator" required><option disabled selected>Sélectionner</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></div> <div class="form-control"><label for="purchase-store" class="label"><span class="label-text">Magasin</span></label> <input id="purchase-store" type="text" class="input input-bordered" placeholder="Ex: Marché"/></div> <div class="form-control"><label for="purchase-who" class="label"><span class="label-text">Qui a acheté ?</span></label> <input id="purchase-who" type="text" class="input input-bordered" placeholder="Votre nom"/></div> <div class="form-control"><label for="purchase-price" class="label"><span class="label-text">Prix (€)</span></label> <input id="purchase-price" type="number" step="1" class="input input-bordered" placeholder="0.00"/></div> <div class="form-control"><label for="purchase-notes" class="label"><span class="label-text">Notes</span></label> <input id="purchase-notes" type="text" class="input input-bordered" placeholder="Promotion, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function tc(e,t){X(t,!0);let r=$r(t,"newPurchase",7),n=be(null);function s(k,ee){return ee==="gr."&&k>=1e3?`${(k/1e3).toFixed(1)} kg`:ee==="ml"&&k>=1e3?`${(k/1e3).toFixed(1)} l`:`${k} ${ee}`}function i(k){return new Date(k).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function o(k){$(n,{...k},!0),t.onStartEditPurchase(k)}async function c(k){await t.onDeletePurchase(k)}var u=ec(),f=l(u),v=l(f);wn(v,{class:"w-5 h-5"});var m=d(f,2),p=l(m),_=d(l(p),2),g=l(_),P=d(l(g),2),w=d(g,2),E=d(l(w),2),j=l(E);j.value=j.__value="";var C=d(j);C.value=C.__value="kg";var N=d(C);N.value=N.__value="gr.";var T=d(N);T.value=T.__value="l.";var M=d(T);M.value=M.__value="ml";var L=d(M);L.value=L.__value="unité";var V=d(L);V.value=V.__value="bottes";var z=d(w,2),re=d(l(z),2),_e=d(z,2),D=d(l(_e),2),R=d(_e,2),se=d(l(R),2),ae=d(R,2),me=d(l(ae),2),Ce=d(_,2),S=l(Ce);S.__click=function(...k){t.onAddPurchase?.apply(this,k)};var y=l(S);{var q=k=>{var ee=Ul();h(k,ee)},le=k=>{var ee=Qe("Ajouter l'achat");h(k,ee)};I(y,k=>{t.loading?k(q):k(le,!1)})}var je=d(m,2);{var qe=k=>{var ee=Ql(),Ne=l(ee);wn(Ne,{class:"w-12 h-12 mx-auto mb-2"}),h(k,ee)},ze=k=>{var ee=Fl(),Ne=l(ee),Ie=d(l(Ne));Ke(Ie,21,()=>t.currentProductPurchases,Ee=>Ee.$id,(Ee,ce)=>{var we=Z(),et=H(we);{var Ye=tt=>{var Ve=Kl(),ke=l(Ve),rt=l(ke),pt=l(rt),_t=d(pt,2),lt=l(_t);lt.value=lt.__value="kg";var Rt=d(lt);Rt.value=Rt.__value="gr.";var kt=d(Rt);kt.value=kt.__value="l.";var Ge=d(kt);Ge.value=Ge.__value="ml";var mt=d(Ge);mt.value=mt.__value="unité";var qt=d(mt);qt.value=qt.__value="bottes";var Ot=d(ke),Tt=l(Ot),gt=d(Ot),sr=l(gt),bt=d(gt),Lt=l(bt),$t=d(bt),yt=l($t),Bt=d($t),ar=l(Bt),Ze=d(Bt),Nt=l(Ze),Ht=l(Nt);Ht.__click=[Gl,t,n];var Br=l(Ht);{var Wr=U=>{var wt=Hl();h(U,wt)},Sr=U=>{ql(U,{class:"w-3 h-3"})};I(Br,U=>{t.loading?U(Wr):U(Sr,!1)})}var G=d(Ht,2);G.__click=[Vl,n,t];var ie=l(G);vt(ie,{class:"w-3 h-3"}),W(U=>{A(Lt,U),Ht.disabled=t.loading},[()=>i(a(ce).$createdAt)]),Le(pt,()=>a(n).quantity,U=>a(n).quantity=U),Fn(_t,()=>a(n).unit,U=>a(n).unit=U),Le(Tt,()=>a(n).store,U=>a(n).store=U),Le(sr,()=>a(n).who,U=>a(n).who=U),Le(yt,()=>a(n).price,U=>a(n).price=U),Le(ar,()=>a(n).notes,U=>a(n).notes=U),h(tt,Ve)},nr=tt=>{var Ve=Xl(),ke=l(Ve),rt=l(ke),pt=d(ke),_t=l(pt),lt=d(pt),Rt=l(lt),kt=d(lt),Ge=l(kt),mt=d(kt),qt=l(mt),Ot=d(mt),Tt=l(Ot),gt=d(Ot),sr=l(gt),bt=l(sr);bt.__click=[Jl,o,ce];var Lt=l(bt);Qr(Lt,{class:"w-4 h-4"});var $t=d(bt,2);$t.__click=[Yl,c,ce];var yt=l($t);{var Bt=Ze=>{var Nt=Zl();h(Ze,Nt)},ar=Ze=>{vt(Ze,{class:"w-4 h-4"})};I(yt,Ze=>{t.loading?Ze(Bt):Ze(ar,!1)})}W((Ze,Nt)=>{A(rt,Ze),A(_t,a(ce).store),A(Rt,a(ce).who),A(Ge,Nt),A(qt,a(ce).price?`${a(ce).price}€`:"-"),A(Tt,a(ce).notes||"-"),$t.disabled=t.loading},[()=>s(a(ce).quantity,a(ce).unit),()=>i(a(ce).$createdAt)]),h(tt,Ve)};I(et,tt=>{a(n)?.$id===a(ce).$id?tt(Ye):tt(nr,!1)})}h(Ee,we)}),h(k,ee)};I(je,k=>{t.currentProductPurchases.length===0?k(qe):k(ze,!1)})}W(()=>S.disabled=t.loading),Le(P,()=>r().quantity,k=>r().quantity=k),Fn(E,()=>r().unit,k=>r().unit=k),Le(re,()=>r().store,k=>r().store=k),Le(D,()=>r().who,k=>r().who=k),Le(se,()=>r().price,k=>r().price=k),Le(me,()=>r().notes,k=>r().notes=k),h(e,u),F()}rr(["click"]);var rc=x('<span class="loading loading-spinner loading-sm"></span>'),nc=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),sc=(e,t,r)=>t(a(r).dateTime),ac=x('<span class="loading loading-spinner loading-xs"></span>'),ic=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),oc=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),lc=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"><div class="form-control"><label for="stock-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="stock-quantity" type="number" step="0.01" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-unit" class="label"><span class="label-text">Unité</span></label> <select id="stock-unit" class="select select-bordered select-sm" required><option>Sélectionner</option><option>kg</option><option>g</option><option>l</option><option>ml</option><option>unités</option><option>pièces</option></select></div> <div class="form-control"><label for="stock-datetime" class="label"><span class="label-text">Date du stock</span></label> <input id="stock-datetime" type="datetime-local" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-notes" class="label"><span class="label-text">Notes</span></label> <input id="stock-notes" type="text" class="input input-bordered input-sm" placeholder="Origine, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function cc(e,t){X(t,!0);let r={quantity:"",unit:"",dateTime:"",notes:""};function n(y,q){return q==="g"&&y>=1e3?`${(y/1e3).toFixed(1)} kg`:q==="ml"&&y>=1e3?`${(y/1e3).toFixed(1)} l`:q==="unités"||q==="pièces"?`${y} ${q}`:`${y} ${q}`}function s(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}async function i(y){await t.onDeleteStock(y)}var o=lc(),c=l(o),u=l(c);ts(u,{class:"w-5 h-5"});var f=d(c,2),v=l(f),m=d(l(v),2),p=l(m),_=d(l(p),2),g=d(p,2),P=d(l(g),2),w=l(P);w.value=w.__value="";var E=d(w);E.value=E.__value="kg";var j=d(E);j.value=j.__value="g";var C=d(j);C.value=C.__value="l";var N=d(C);N.value=N.__value="ml";var T=d(N);T.value=T.__value="unités";var M=d(T);M.value=M.__value="pièces";var L=d(g,2),V=d(l(L),2),z=d(L,2),re=d(l(z),2),_e=d(m,2),D=l(_e);D.__click=function(...y){t.onAddStock?.apply(this,y)};var R=l(D);{var se=y=>{var q=rc();h(y,q)},ae=y=>{var q=Qe("Ajouter au stock");h(y,q)};I(R,y=>{t.loading?y(se):y(ae,!1)})}var me=d(f,2);{var Ce=y=>{var q=nc(),le=l(q);ts(le,{class:"w-12 h-12 mx-auto mb-2"}),h(y,q)},S=y=>{var q=oc(),le=l(q),je=d(l(le));Ke(je,23,()=>t.stockEntries,qe=>qe.dateTime,(qe,ze)=>{var k=ic(),ee=l(k),Ne=l(ee),Ie=d(ee),Ee=l(Ie),ce=d(Ie),we=l(ce),et=d(ce),Ye=l(et);Ye.__click=[sc,i,ze];var nr=l(Ye);{var tt=ke=>{var rt=ac();h(ke,rt)},Ve=ke=>{var rt=Qe("Supprimer");h(ke,rt)};I(nr,ke=>{t.loading?ke(tt):ke(Ve,!1)})}W((ke,rt)=>{A(Ne,ke),A(Ee,rt),A(we,a(ze).notes||"-"),Ye.disabled=t.loading},[()=>n(a(ze).quantity,a(ze).unit),()=>s(a(ze).dateTime)]),h(qe,k)}),h(y,q)};I(me,y=>{t.stockEntries.length===0?y(Ce):y(S,!1)})}W(()=>D.disabled=t.loading),Le(_,()=>r.quantity,y=>r.quantity=y),Fn(P,()=>r.unit,y=>r.unit=y),Le(V,()=>r.dateTime,y=>r.dateTime=y),Le(re,()=>r.notes,y=>r.notes=y),h(e,o),F()}rr(["click"]);var uc=(e,t)=>{e.key==="Enter"&&t()},dc=x('<span class="loading loading-spinner loading-sm"></span>'),fc=x('<span class="badge badge-primary badge-sm"> </span>'),vc=x('<div class="text-center py-8 opacity-50"><!> <p>Aucun volontaire assigné à ce produit</p></div>'),hc=(e,t,r)=>t(r),pc=x('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs p-0 hover:text-error"><!></button></div>'),_c=x('<div class="flex flex-wrap gap-2"></div>'),mc=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des volontaires</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <div class="flex gap-2"><div class="form-control flex-1"><input type="text" class="input input-bordered input-sm" placeholder="Nom du volontaire"/></div> <button class="btn btn-primary btn-sm"><!></button></div></div></div> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Volontaires <!></h4> <!></div></div></div>');function gc(e,t){X(t,!0);let r=be("");async function n(){a(r).trim()&&(await t.onAddVolunteer(a(r).trim()),$(r,""))}async function s(z){await t.onRemoveVolunteer(z)}var i=mc(),o=l(i),c=l(o);xn(c,{class:"w-5 h-5"});var u=d(o,2),f=l(u),v=d(l(f),2),m=l(v),p=l(m);p.__keydown=[uc,n];var _=d(m,2);_.__click=n;var g=l(_);{var P=z=>{var re=dc();h(z,re)},w=z=>{var re=Qe("Ajouter");h(z,re)};I(g,z=>{t.loading?z(P):z(w,!1)})}var E=d(u,2),j=l(E),C=l(j),N=d(l(C));{var T=z=>{var re=fc(),_e=l(re);W(()=>A(_e,t.editingWho.length)),h(z,re)};I(N,z=>{t.editingWho.length>0&&z(T)})}var M=d(C,2);{var L=z=>{var re=vc(),_e=l(re);xn(_e,{class:"w-12 h-12 mx-auto mb-2"}),h(z,re)},V=z=>{var re=_c();Ke(re,20,()=>t.editingWho,_e=>_e,(_e,D)=>{var R=pc(),se=l(R),ae=d(se);ae.__click=[hc,s,D];var me=l(ae);vt(me,{class:"w-3 h-3"}),W(()=>{A(se,`${D??""} `),ae.disabled=t.loading}),h(_e,R)}),h(z,re)};I(M,z=>{t.editingWho.length===0?z(L):z(V,!1)})}W(()=>_.disabled=t.loading),Le(p,()=>a(r),z=>$(r,z)),h(e,i),F()}rr(["keydown","click"]);var bc=(e,t)=>{e.key==="Enter"&&t()},yc=x('<span class="loading loading-spinner loading-sm"></span>'),wc=(e,t,r)=>{$(t,""),$(r,"")},xc=(e,t,r)=>t(r),Sc=x('<button class="btn btn-outline btn-xs"> </button>'),Pc=x('<br/><small class="opacity-75"> </small>',1),Ec=x('<p class="text-sm"><strong>Magasin défini :</strong> <!></p>'),kc=x('<p class="text-sm"><strong>Magasin défini :</strong> </p>'),Tc=x(`<p class="text-sm">Aucun magasin n'est encore défini pour ce produit</p>`),$c=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des magasins</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin principal</h4> <p class="text-sm opacity-75 mb-4">Définissez le magasin où ce produit est généralement acheté</p> <div class="form-control mb-3"><label class="label" for="store-name"><span class="label-text">Nom du magasin</span></label> <input id="store-name" type="text" class="input input-bordered input-sm" placeholder="Ex: Carrefour, Leclerc..."/></div> <div class="form-control mb-4"><label class="label" for="store-comment"><span class="label-text">Commentaire (optionnel)</span></label> <textarea id="store-comment" class="textarea textarea-bordered textarea-sm" placeholder="Ex: Près de la caisse, rayon frais, etc." rows="2"></textarea></div> <div class="flex gap-2 mb-4"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div> <div class="divider"></div> <div class="form-control"><label class="label" for="suggested-stores"><span class="label-text text-sm">Suggestions rapides</span></label> <div class="flex flex-wrap gap-2" id="suggested-stores"></div></div> <div class="divider"></div> <div class="alert alert-info"><!> <div><h4 class="font-semibold">Information sur le magasin actuel</h4> <!></div></div></div></div></div>');function Nc(e,t){X(t,!0);let r=be(it(t.editingStore?.storeName||"")),n=be(it(t.editingStore?.storeComment||""));xa(()=>{if(t.product?.storeInfo)$(r,t.product.storeInfo.storeName||"",!0),$(n,t.product.storeInfo.storeComment||"",!0);else if(t.product?.store)try{const R=JSON.parse(t.product.store);$(r,R.storeName||"",!0),$(n,R.storeComment||"",!0)}catch{$(r,t.product.store||"",!0),$(n,"")}else $(r,""),$(n,"")});async function s(){const R=a(r).trim()?{storeName:a(r).trim(),storeComment:a(n).trim()||""}:null;await t.onUpdateStore(R)}function i(R){$(r,R,!0)}var o=$c(),c=l(o),u=l(c);en(u,{class:"w-5 h-5"});var f=d(c,2),v=l(f),m=d(l(v),4),p=d(l(m),2);p.__keydown=[bc,s];var _=d(m,2),g=d(l(_),2),P=d(_,2),w=l(P);w.__click=s;var E=l(w);{var j=R=>{var se=yc();h(R,se)},C=R=>{var se=Qe("Mettre à jour");h(R,se)};I(E,R=>{t.loading?R(j):R(C,!1)})}var N=d(w,2);N.__click=[wc,r,n];var T=d(P,4),M=d(l(T),2);Ke(M,20,()=>["Carrefour","Intermarché","Leclerc","Auchan","Lidl","Aldi","Casino","Monoprix","Franprix","Bio c' Bon","Naturalia"],R=>R,(R,se)=>{var ae=Sc();ae.__click=[xc,i,se];var me=l(ae);W(()=>{ae.disabled=t.loading,A(me,se)}),h(R,ae)});var L=d(T,4),V=l(L);en(V,{class:"w-4 h-4"});var z=d(V,2),re=d(l(z),2);{var _e=R=>{var se=Ec(),ae=d(l(se)),me=d(ae);{var Ce=S=>{var y=Pc(),q=d(H(y)),le=l(q);W(()=>A(le,t.product.storeInfo.storeComment)),h(S,y)};I(me,S=>{t.product.storeInfo.storeComment&&S(Ce)})}W(()=>A(ae,` ${t.product.storeInfo.storeName??""} `)),h(R,se)},D=R=>{var se=Z(),ae=H(se);{var me=S=>{var y=kc(),q=d(l(y));W(()=>A(q,` ${t.product.store??""}`)),h(S,y)},Ce=S=>{var y=Tc();h(S,y)};I(ae,S=>{t.product?.store?S(me):S(Ce,!1)},!0)}h(R,se)};I(re,R=>{t.product?.storeInfo?R(_e):R(D,!1)})}W(()=>{w.disabled=t.loading,N.disabled=t.loading}),Le(p,()=>a(r),R=>$(r,R)),Le(g,()=>a(n),R=>$(n,R)),h(e,o),F()}rr(["keydown","click"]);var Ac=x('<div class="badge badge-success gap-1"><!> Actif</div>'),Mc=x('<div class="badge badge-warning gap-1"><!> </div>'),Cc=(e,t)=>t("recettes"),Ic=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Dc=(e,t)=>t("achats"),jc=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Rc=(e,t)=>t("stock"),qc=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Oc=(e,t)=>t("volontaires"),Lc=x('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Bc=(e,t)=>t("magasins"),Wc=x('<div class="alert alert-error mb-4"><!> <span> </span></div>'),zc=x('<div class="text-center py-8 opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Vc=x('<tr><td class="font-medium"> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>'),Gc=x('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Horaire</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),Uc=x('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Recettes utilisant ce produit</h3> <!></div>'),Qc=x('<div class="modal modal-open"><div class="modal-box max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"><div class="flex items-center justify-between p-4 border-b"><div class="flex-1"><h2 class="text-xl font-bold"> </h2> <div class="flex items-center gap-3 mt-2"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div></div> <button class="btn btn-circle btn-ghost btn-sm" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="flex-1 overflow-y-auto p-4 min-h-96"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function Hc(e,t){X(t,!0);let r=Q(()=>Dt.product.tab),n=Q(()=>Dt.product.id),s=Q(()=>Dt.product.isOpen),i=Q(()=>B.enrichedProducts.find(S=>S.$id===a(n))),o=be(!1),c=be(null),u=it(a(i)?.storeInfo||null),f=be(it({quantity:null,unit:"",store:a(i)?.storeInfo?.storeName||"",who:Xs()||"",price:null,notes:""})),v=be(it({quantity:null,unit:"",notes:"",dateTime:new Date().toISOString()})),m=Q(()=>a(i)?.stockReel?gl(a(i).stockReel):[]),p=be(null),_=Q(()=>{const S=a(i)?.purchases;if(!S||!Array.isArray(S))return console.warn("[ProductModal] Purchases is not a valid array:",S),[];const y=S.filter(q=>!q||typeof q!="object"?(console.warn("[ProductModal] Invalid purchase object:",q),!1):q.$id?!0:(console.warn("[ProductModal] Purchase missing $id:",q),!1));return y.length!==S.length&&console.warn(`[ProductModal] Filtered ${S.length-y.length} invalid purchases`),y}),g=Q(()=>bl(a(i)?.recipesOccurrences||null)),P=Q(()=>a(i)?.who||[]);function w(){$(f,{quantity:null,unit:"",store:a(i)?.storeInfo?.storeName||"",who:Xs(),price:null,notes:""},!0),$(v,{quantity:null,unit:"",notes:"",dateTime:new Date().toISOString().slice(0,16)},!0)}function E(S){Dt.product.tab=S}async function j(S){$(o,!0),$(c,null);try{return await S()}catch(y){return $(c,y instanceof Error?y.message:"Une erreur est survenue",!0),console.error("[ProductModal] Erreur:",y),null}finally{$(o,!1)}}function C(S){if(!S)return"-";try{return new Date(S).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return S}}function N(S){if(!S)return"-";try{const y=JSON.parse(S);if(Array.isArray(y)&&y.length>0)return y.map(q=>`${q.value} ${q.unit}`).join(" et ")}catch{return S}return S}async function T(){a(i)&&($(o,!0),await j(async()=>{if(!a(f).quantity||!a(f).unit.trim())throw new Error("Veuillez remplir les champs obligatoires");let S=a(f).quantity,y=a(f).unit;if(a(f).unit==="kg"?(S=a(f).quantity*1e3,y="gr."):a(f).unit==="l."&&(S=a(f).quantity*1e3,y="ml"),await vl({products:[a(i).$id],mainId:a(i).mainId.$id,unit:y,quantity:S,store:a(f).store||null,who:a(f).who||null,notes:a(f).notes||"",price:a(f).price||null})){w();const le=new CustomEvent("toast",{detail:{type:"success",message:"Achat ajouté avec succès"}});window.dispatchEvent(le)}}))}function M(S){$(p,{...S},!0)}function L(){$(p,null)}async function V(){a(p)&&await j(async()=>{const S=a(p).$id;let y=a(p).quantity,q=a(p).unit;a(p).unit==="kg"?(y=a(p).quantity*1e3,q="gr."):a(p).unit==="l."&&(y=a(p).quantity*1e3,q="ml");const le={unit:q,quantity:y,store:a(p)?.store||null,who:a(p)?.who||null,notes:a(p)?.notes||"",price:a(p)?.price||null};if(await hl(S,le)){$(p,null);const qe=new CustomEvent("toast",{detail:{type:"success",message:"Achat modifié avec succès"}});window.dispatchEvent(qe)}})}async function z(S){const y=a(_).find(q=>q.$id===S);confirm(`Êtes-vous sûr de vouloir supprimer cet achat (${y?.quantity} ${y?.unit}) ?`)&&await j(async()=>{await pl(S);const q=new CustomEvent("toast",{detail:{type:"success",message:"Achat supprimé avec succès"}});window.dispatchEvent(q)})}async function re(){a(i)&&await j(async()=>{if(!a(v).quantity||!a(v).unit)throw new Error("Veuillez remplir les champs obligatoires");const S={quantity:a(v).quantity.toString(),unit:a(v).unit,notes:a(v).notes||"",dateTime:a(v).dateTime||new Date().toISOString()},y=[...a(m),S],q=a(i).$id;if(await Ks(q,JSON.stringify(y))){$(m,y),w();const je=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock ajouté avec succès"}});window.dispatchEvent(je)}})}async function _e(S){confirm("Êtes-vous sûr de vouloir supprimer ce relevé de stock ?")&&a(i)&&await j(async()=>{const y=a(m).filter((le,je)=>je!==S);if(await Ks(a(i).$id,JSON.stringify(y))){$(m,y);const le=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock supprimé avec succès"}});window.dispatchEvent(le)}})}async function D(S){!a(i)||!S.trim()||await j(async()=>{const y=S.trim();if(a(P).includes(y))throw new Error("Ce volontaire est déjà ajouté");const q=[...a(P),y];if(await Hs(a(i).$id,q)){const je=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire ajouté avec succès"}});window.dispatchEvent(je)}})}async function R(S){a(i)&&confirm(`Retirer ${S} de la liste des volontaires ?`)&&await j(async()=>{const y=a(P).filter(le=>le!==S);if(await Hs(a(i).$id,y)){const le=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire retiré avec succès"}});window.dispatchEvent(le)}})}async function se(S){a(i)&&await j(async()=>{const y=S!==void 0?S:u?.storeName&&u.storeName.trim()!==""?u.storeName.trim():a(i).store;if(console.log("[ProductModal] handleUpdateStore called with:",{storeInfo:S,editingStore:u,finalStoreValue:y}),await fl(a(i).$id,y)){const le=new CustomEvent("toast",{detail:{type:"success",message:"Magasin mis à jour avec succès"}});window.dispatchEvent(le)}})}var ae=Z(),me=H(ae);{var Ce=S=>{var y=Qc(),q=l(y),le=l(q),je=l(le),qe=l(je),ze=l(qe),k=d(qe,2),ee=l(k),Ne=l(ee),Ie=d(ee,2);{var Ee=G=>{var ie=Ac(),U=l(ie);Ml(U,{class:"w-3 h-3"}),h(G,ie)},ce=G=>{var ie=Mc(),U=l(ie);Ll(U,{class:"w-3 h-3"});var wt=d(U);W(()=>A(wt,` ${a(i).status??""}`)),h(G,ie)};I(Ie,G=>{a(i).status==="active"?G(Ee):G(ce,!1)})}var we=d(Ie,2),et=d(l(we)),Ye=d(je,2);Ye.__click=function(...G){Zs?.apply(this,G)};var nr=l(Ye);vt(nr,{class:"w-4 h-4"});var tt=d(le,2),Ve=l(tt);Ve.__click=[Cc,E];var ke=l(Ve);hn(ke,{class:"w-4 h-4 mr-1"});var rt=d(ke,2);{var pt=G=>{var ie=Ic(),U=l(ie);W(()=>A(U,a(g).length)),h(G,ie)};I(rt,G=>{a(g).length>0&&G(pt)})}var _t=d(Ve,2);_t.__click=[Dc,E];var lt=l(_t);wn(lt,{class:"w-4 h-4 mr-1"});var Rt=d(lt,2);{var kt=G=>{var ie=jc(),U=l(ie);W(()=>A(U,a(_).length)),h(G,ie)};I(Rt,G=>{a(_).length>0&&G(kt)})}var Ge=d(_t,2);Ge.__click=[Rc,E];var mt=l(Ge);ts(mt,{class:"w-4 h-4 mr-1"});var qt=d(mt,2);{var Ot=G=>{var ie=qc(),U=l(ie);W(()=>A(U,a(m).length)),h(G,ie)};I(qt,G=>{a(m).length>0&&G(Ot)})}var Tt=d(Ge,2);Tt.__click=[Oc,E];var gt=l(Tt);xn(gt,{class:"w-4 h-4 mr-1"});var sr=d(gt,2);{var bt=G=>{var ie=Lc(),U=l(ie);W(()=>A(U,a(i).who.length)),h(G,ie)};I(sr,G=>{a(i).who&&a(i).who.length>0&&G(bt)})}var Lt=d(Tt,2);Lt.__click=[Bc,E];var $t=l(Lt);en($t,{class:"w-4 h-4 mr-1"});var yt=d(tt,2),Bt=l(yt);{var ar=G=>{var ie=Wc(),U=l(ie);vt(U,{class:"w-4 h-4"});var wt=d(U,2),ir=l(wt);W(()=>A(ir,`erreur : ${a(c)??""}`)),h(G,ie)};I(Bt,G=>{a(c)&&G(ar)})}var Ze=d(Bt,2),Nt=l(Ze);{var Ht=G=>{var ie=Uc(),U=l(ie),wt=l(U);hn(wt,{class:"w-5 h-5"});var ir=d(U,2);{var At=Mt=>{var Wt=zc(),or=l(Wt);hn(or,{class:"w-12 h-12 mx-auto mb-2"}),h(Mt,Wt)},Pr=Mt=>{var Wt=Gc(),or=l(Wt),xt=d(l(or));Ke(xt,21,()=>a(g),zt=>zt.recipeName+zt.dateTimeService,(zt,O)=>{var J=Vc(),nt=l(J),Ae=l(nt),Me=d(nt),Ue=l(Me),st=d(Me),fe=l(st),xe=d(st),ye=l(xe),K=d(xe),Se=l(K),Te=d(K),ct=l(Te);W(St=>{A(Ae,a(O).recipeName),A(Ue,`${a(O).quantity??""} ${a(O).unit??""}`),A(fe,St),A(ye,a(O).horaire||"-"),A(Se,a(O).typePlat||"-"),A(ct,a(O).assiettes||"-")},[()=>C(a(O).dateTimeService)]),h(zt,J)}),h(Mt,Wt)};I(ir,Mt=>{a(g).length===0?Mt(At):Mt(Pr,!1)})}h(G,ie)},Br=G=>{var ie=Z(),U=H(ie);{var wt=At=>{tc(At,{get product(){return a(i)},get currentProductPurchases(){return a(_)},get loading(){return a(o)},get newPurchase(){return a(f)},onAddPurchase:T,onStartEditPurchase:M,onCancelEditPurchase:L,onSavePurchase:V,onDeletePurchase:z})},ir=At=>{var Pr=Z(),Mt=H(Pr);{var Wt=xt=>{cc(xt,{get product(){return a(i)},get stockEntries(){return a(m)},get loading(){return a(o)},onAddStock:re,onDeleteStock:_e})},or=xt=>{var zt=Z(),O=H(zt);{var J=Ae=>{gc(Ae,{get product(){return a(i)},get editingWho(){return a(P)},get loading(){return a(o)},onAddVolunteer:D,onRemoveVolunteer:R})},nt=Ae=>{var Me=Z(),Ue=H(Me);{var st=fe=>{Nc(fe,{get product(){return a(i)},get editingStore(){return u},get loading(){return a(o)},onUpdateStore:se})};I(Ue,fe=>{a(r)==="magasins"&&fe(st)},!0)}h(Ae,Me)};I(O,Ae=>{a(r)==="volontaires"?Ae(J):Ae(nt,!1)},!0)}h(xt,zt)};I(Mt,xt=>{a(r)==="stock"?xt(Wt):xt(or,!1)},!0)}h(At,Pr)};I(U,At=>{a(r)==="achats"?At(wt):At(ir,!1)},!0)}h(G,ie)};I(Nt,G=>{a(r)==="recettes"?G(Ht):G(Br,!1)})}var Wr=d(yt,2),Sr=l(Wr);Sr.__click=function(...G){Zs?.apply(this,G)},W(G=>{A(ze,a(i).productName),A(Ne,a(i).productType),A(et,` ${G??""}`),$e(Ve,1,`tab ${a(r)==="recettes"?"tab-active":""}`),$e(_t,1,`tab ${a(r)==="achats"?"tab-active":""}`),$e(Ge,1,`tab ${a(r)==="stock"?"tab-active":""}`),$e(Tt,1,`tab ${a(r)==="volontaires"?"tab-active":""}`),$e(Lt,1,`tab ${a(r)==="magasins"?"tab-active":""}`)},[()=>N(a(i).totalNeededConsolidated)]),h(S,y)};I(me,S=>{a(s)&&a(i)&&S(Ce)})}h(e,ae),F()}rr(["click"]);function mn(e){switch(e.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:El};case"animaux":return{displayName:"Viandes et Poissons",icon:kl};case"legumes":return{displayName:"Fruits et Légumes",icon:$l};case"sucres":return{displayName:"Sucrées",icon:Tl};case"lof":return{displayName:"L.O.F",icon:Il};case"autres":return{displayName:"Autres",icon:Nl};case"epices":return{displayName:"Assaisonnements",icon:Dl};case"frais":return{displayName:"Produits Frais",icon:Rl};default:return{displayName:e,icon:hn}}}function Kc(e,t){return t.sortColumn?[...e].sort((r,n)=>{let s=r[t.sortColumn],i=n[t.sortColumn];return s<i?t.sortDirection==="asc"?-1:1:s>i?t.sortDirection==="asc"?1:-1:0}):e}var Jc=()=>B.setGroupBy("none"),Yc=()=>B.setGroupBy("store"),Zc=()=>B.setGroupBy("productType"),Xc=(e,t)=>B.toggleProductType(t),Fc=x("<button><!> </button>"),eu=()=>B.toggleTemperature("frais"),tu=()=>B.toggleTemperature("surgele"),ru=()=>B.clearTypeAndTemperatureFilters(),nu=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),su=(e,t)=>B.toggleStore(t),au=x("<button> </button>"),iu=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),ou=(e,t)=>B.toggleWho(t),lu=x("<button> </button>"),cu=x('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),uu=(e,t)=>{B.clearFilters(),$(t,!1)},du=x('<div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function fu(e,t){X(t,!0);let r=be(!1);const n=Q(()=>B.filters),s=Q(()=>B.uniqueStores),i=Q(()=>B.uniqueWho),o=Q(()=>B.uniqueProductTypes);var c=du(),u=H(c),f=l(u),v=d(f,2),m=d(l(v),2),p=l(m),_=l(p),g=l(_);rs(g,{class:"w-5 h-5"});var P=d(_,2),w=l(P);vt(w,{class:"w-4 h-4"});var E=d(p,2),j=d(l(E),2),C=l(j);C.__change=[Jc];var N=d(C,2);N.__change=[Yc];var T=d(N,2);T.__change=[Zc];var M=d(E,2),L=l(M),V=d(l(L),2);Ke(V,20,()=>a(o),k=>k,(k,ee)=>{const Ne=Q(()=>mn(ee));var Ie=Fc();Ie.__click=[Xc,ee];var Ee=l(Ie);vn(Ee,()=>a(Ne).icon,(we,et)=>{et(we,{class:"w-3 h-3 mr-1"})});var ce=d(Ee);W(we=>{$e(Ie,1,`btn btn-sm ${we??""}`),A(ce,` ${a(Ne).displayName??""}`)},[()=>a(n).selectedProductTypes.length===0?"btn-soft btn-accent":a(n).selectedProductTypes.includes(ee)?"btn-accent":"btn-dash btn-accent"]),h(k,Ie)});var z=d(V,2),re=l(z);re.__click=[eu];var _e=l(re);pn(_e,{class:"w-3 h-3"});var D=d(re,2);D.__click=[tu];var R=l(D);_n(R,{class:"w-3 h-3"});var se=d(D,2);{var ae=k=>{var ee=nu();ee.__click=[ru];var Ne=l(ee);vt(Ne,{class:"w-3 h-3"}),h(k,ee)};I(se,k=>{(a(n).selectedProductTypes.length>0||a(n).selectedTemperatures.length>0)&&k(ae)})}var me=d(M,2);{var Ce=k=>{var ee=iu(),Ne=l(ee),Ie=d(l(Ne),2);Ke(Ie,20,()=>a(s),Ee=>Ee,(Ee,ce)=>{var we=au();we.__click=[su,ce];var et=l(we);W(Ye=>{$e(we,1,`btn btn-sm ${Ye??""}`),A(et,ce)},[()=>a(n).selectedStores.length===0?"btn-soft btn-accent":a(n).selectedStores.includes(ce)?"btn-accent":"btn-dash btn-accent"]),h(Ee,we)}),h(k,ee)};I(me,k=>{a(s).length>0&&k(Ce)})}var S=d(me,2);{var y=k=>{var ee=cu(),Ne=l(ee),Ie=d(l(Ne),2);Ke(Ie,20,()=>a(i),Ee=>Ee,(Ee,ce)=>{var we=lu();we.__click=[ou,ce];var et=l(we);W(Ye=>{$e(we,1,`btn btn-sm ${Ye??""}`),A(et,ce)},[()=>a(n).selectedWho.length===0?"btn-soft btn-accent":a(n).selectedWho.includes(ce)?"btn-accent":"btn-dash btn-accent"]),h(Ee,we)}),h(k,ee)};I(S,k=>{a(i).length>0&&k(y)})}var q=d(S,4);q.__click=[uu,r];var le=l(q);vt(le,{class:"w-4 h-4 mr-2"});var je=d(u,2),qe=l(je),ze=l(qe);rs(ze,{class:"w-6 h-6"}),W((k,ee)=>{Ar(C,a(n).groupBy==="none"),Ar(N,a(n).groupBy==="store"),Ar(T,a(n).groupBy==="productType"),$e(re,1,`btn btn-sm ${k??""}`),$e(D,1,`btn btn-sm ${ee??""}`)},[()=>a(n).selectedTemperatures.length===0?"btn-soft btn-success":a(n).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(n).selectedTemperatures.length===0?"btn-soft btn-info":a(n).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Yo(f,()=>a(r),k=>$(r,k)),h(e,c),F()}rr(["change","click"]);var vu=()=>B.clearFilters(),hu=e=>B.setSearchQuery(e.currentTarget.value),pu=()=>B.setGroupBy("none"),_u=()=>B.setGroupBy("store"),mu=()=>B.setGroupBy("productType"),gu=(e,t)=>B.toggleProductType(t),bu=x("<button><!> </button>"),yu=()=>B.toggleTemperature("frais"),wu=()=>B.toggleTemperature("surgele"),xu=()=>B.clearTypeAndTemperatureFilters(),Su=x('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Pu=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),Eu=(e,t)=>B.toggleStore(t),ku=x("<button><!> </button>"),Tu=()=>B.clearStoreFilters(),$u=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Nu=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Au=(e,t)=>B.toggleWho(t),Mu=x("<button><!> </button>"),Cu=()=>B.clearWhoFilters(),Iu=x('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Du=x('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),ju=()=>B.handleSort("productName"),Ru=()=>B.handleSort("store"),qu=()=>B.handleSort("who"),Ou=()=>B.handleSort("productType"),Lu=x('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),Bu=x('<tr class="bg-base-200 font-semibold sticky top-10 z-10"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),Wu=(e,t,r)=>t("recettes",a(r).$id),zu=x('<div class="text-xs text-base-content/60"> </div>'),Vu=x('<div class="w-7 h-7 bg-success/20 rounded-full flex items-center justify-center"><!></div>'),Gu=x('<div class="w-7 h-7 bg-info/20 rounded-full flex items-center justify-center"><!></div>'),Uu=(e,t,r)=>t("magasins",a(r).$id),Qu=x('<div class="tooltip tooltip-info"> </div>'),Hu=(e,t,r)=>t("volontaires",a(r).$id),Ku=x('<span class="badge badge-soft badge-info badge-sm"> </span>'),Ju=x('<div class="flex flex-wrap gap-1 pr-8"></div>'),Yu=x('<div class="text-xs text-base-content/70 flex gap-2 items-center justify-center"><!> <span class="text-center "> </span> <span class="text-center "> </span></div>'),Zu=(e,t,r)=>t("achats",a(r).$id),Xu=x('<div class="bg-warning px-2 py-1 rounded m-auto"> </div>'),Fu=x('<tr class="hover:bg-base-200/20 transition-colors"><td class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="text-center font-semibold"><div class="pb-1 text-center font-semibold"> </div> <!></td><td class="text-center font-medium cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="relative group text-center"><!></td></tr>'),ed=x("<!> <!>",1),td=x('<div class="text-center py-8"><div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),rd=x('<div class="space-y-6"><div class="flex flex-wrap gap-2 items-center"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="flex  md:mb-4 justify-between mb-4 flex-wrap items-center gap-4 "><div class="form-control "><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input input-bordered flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="flex mt-4"><!></div> <div class="flex flex-col lg:flex-row gap-6 mt-4"><!> <!></div></div></div> <div class="hidden md:block bg-base-100 rounded-lg overflow-x-auto max-h-[calc(100vh-200px)]"><table class="table w-full"><thead class="sticky top-0 z-10 bg-base-200"><tr class="bg-base-200"><th class="cursor-pointer hover:bg-base-100 text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="cursor-pointer hover:bg-base-100 text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div></div> <!> <!>',1);function nd(e,t){X(t,!0);const r=Q(()=>B.filteredProducts),n=Q(()=>B.groupedFormattedProducts),s=Q(()=>B.stats),i=Q(()=>B.uniqueStores),o=Q(()=>B.uniqueWho),c=Q(()=>B.uniqueProductTypes),u=Q(()=>B.filters);function f(O,J){zl(O,J)}var v=rd(),m=H(v),p=l(m),_=l(p),g=l(_);Ys(g,{class:"w-4 h-4 mr-1"});var P=d(g),w=d(_,2),E=l(w);pn(E,{class:"w-4 h-4 mr-1"});var j=d(E),C=d(w,2),N=l(C);_n(N,{class:"w-4 h-4 mr-1"});var T=d(N),M=d(C,2),L=l(M);Cl(L,{class:"w-4 h-4 mr-1"});var V=d(L),z=d(p,2),re=l(z),_e=l(re),D=l(_e),R=l(D);rs(R,{class:"w-5 h-5"});var se=d(D,2);se.__click=[vu];var ae=l(se);vt(ae,{class:"w-4 h-4"});var me=d(re,2),Ce=l(me),S=d(l(Ce),2),y=l(S);Ol(y,{class:"w-4 h-4"});var q=d(y,2);q.__input=[hu];var le=d(Ce,2),je=d(l(le),2),qe=l(je);qe.__change=[pu];var ze=d(qe,2);ze.__change=[_u];var k=d(ze,2);k.__change=[mu];var ee=d(me,2),Ne=l(ee),Ie=l(Ne);{var Ee=O=>{var J=Pu(),nt=l(J),Ae=d(l(nt),2),Me=l(Ae);Ke(Me,16,()=>a(c),Se=>Se,(Se,Te)=>{const ct=Q(()=>mn(Te));var St=bu();St.__click=[gu,Te];var lr=l(St);vn(lr,()=>a(ct).icon,(ut,Vt)=>{Vt(ut,{class:"w-5 h-5 mr-1"})});var Er=d(lr);W(ut=>{$e(St,1,`btn btn-sm ${ut??""}`),A(Er,` ${a(ct).displayName??""}`)},[()=>a(u).selectedProductTypes.length===0?"btn-soft btn-accent":a(u).selectedProductTypes.includes(Te)?"btn-accent":"btn-dash btn-accent"]),h(Se,St)});var Ue=d(Me,2);Ue.__click=[yu];var st=l(Ue);pn(st,{class:"w-5 h-5"});var fe=d(Ue,2);fe.__click=[wu];var xe=l(fe);_n(xe,{class:"w-5 h-5"});var ye=d(fe,2);{var K=Se=>{var Te=Su();Te.__click=[xu];var ct=l(Te);vt(ct,{class:"w-3 h-3"}),h(Se,Te)};I(ye,Se=>{(a(u).selectedProductTypes.length>0||a(u).selectedTemperatures.length>0)&&Se(K)})}W((Se,Te)=>{$e(Ue,1,`btn btn-sm ${Se??""}`),$e(fe,1,`btn btn-sm ${Te??""}`)},[()=>a(u).selectedTemperatures.length===0?"btn-soft btn-success":a(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(u).selectedTemperatures.length===0?"btn-soft btn-info":a(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),h(O,J)};I(Ie,O=>{a(c).length>0&&O(Ee)})}var ce=d(Ne,2),we=l(ce);{var et=O=>{var J=Nu(),nt=l(J),Ae=d(l(nt),2),Me=l(Ae);Ke(Me,16,()=>a(i),fe=>fe,(fe,xe)=>{var ye=ku();ye.__click=[Eu,xe];var K=l(ye);en(K,{class:"w-3 h-3 mr-1"});var Se=d(K);W(Te=>{$e(ye,1,`btn btn-xs ${Te??""}`),A(Se,` ${xe??""}`)},[()=>a(u).selectedStores.length===0?"btn-soft btn-accent":a(u).selectedStores.includes(xe)?"btn-accent":"btn-dash btn-accent"]),h(fe,ye)});var Ue=d(Me,2);{var st=fe=>{var xe=$u();xe.__click=[Tu];var ye=l(xe);vt(ye,{class:"w-3 h-3"}),h(fe,xe)};I(Ue,fe=>{a(u).selectedStores.length>0&&fe(st)})}h(O,J)};I(we,O=>{a(i).length>0&&O(et)})}var Ye=d(we,2);{var nr=O=>{var J=Du(),nt=l(J),Ae=d(l(nt),2),Me=l(Ae);Ke(Me,16,()=>a(o),fe=>fe,(fe,xe)=>{var ye=Mu();ye.__click=[Au,xe];var K=l(ye);Bl(K,{class:"w-3 h-3 mr-1"});var Se=d(K);W(Te=>{$e(ye,1,`btn btn-xs ${Te??""}`),A(Se,` ${xe??""}`)},[()=>a(u).selectedWho.length===0?" btn-soft btn-info":a(u).selectedWho.includes(xe)?" btn-info":"btn-dash btn-info"]),h(fe,ye)});var Ue=d(Me,2);{var st=fe=>{var xe=Iu();xe.__click=[Cu];var ye=l(xe);vt(ye,{class:"w-3 h-3"}),h(fe,xe)};I(Ue,fe=>{a(u).selectedWho.length>0&&fe(st)})}h(O,J)};I(Ye,O=>{a(o).length>0&&O(nr)})}var tt=d(z,2),Ve=l(tt),ke=l(Ve),rt=l(ke),pt=l(rt);pt.__click=[ju];var _t=l(pt),lt=l(_t);Ys(lt,{class:"w-4 h-4"});var Rt=d(lt,2);{var kt=O=>{var J=Qe();W(()=>A(J,a(u).sortDirection==="asc"?"↑":"↓")),h(O,J)};I(Rt,O=>{a(u).sortColumn==="productName"&&O(kt)})}var Ge=d(pt);Ge.__click=[Ru];var mt=l(Ge),qt=l(mt);en(qt,{class:"w-4 h-4"});var Ot=d(qt,2);{var Tt=O=>{var J=Qe();W(()=>A(J,a(u).sortDirection==="asc"?"↑":"↓")),h(O,J)};I(Ot,O=>{a(u).sortColumn==="store"&&O(Tt)})}var gt=d(Ge);gt.__click=[qu];var sr=l(gt),bt=l(sr);xn(bt,{class:"w-4 h-4"});var Lt=d(bt,2);{var $t=O=>{var J=Qe();W(()=>A(J,a(u).sortDirection==="asc"?"↑":"↓")),h(O,J)};I(Lt,O=>{a(u).sortColumn==="who"&&O($t)})}var yt=d(gt);yt.__click=[Ou];var Bt=l(yt),ar=d(l(Bt));{var Ze=O=>{var J=Qe();W(()=>A(J,a(u).sortDirection==="asc"?"↑":"↓")),h(O,J)};I(ar,O=>{a(u).sortColumn==="productType"&&O(Ze)})}var Nt=d(yt),Ht=l(Nt),Br=d(l(Ht));{var Wr=O=>{var J=Qe();W(()=>A(J,a(u).sortDirection==="asc"?"↑":"↓")),h(O,J)};I(Br,O=>{a(u).sortColumn==="totalNeededConsolidated"&&O(Wr)})}var Sr=d(Nt),G=l(Sr),ie=l(G);wn(ie,{class:"w-4 h-4"});var U=d(ie,2);{var wt=O=>{var J=Qe();W(()=>A(J,a(u).sortDirection==="asc"?"↑":"↓")),h(O,J)};I(U,O=>{a(u).sortColumn==="totalPurchases"&&O(wt)})}var ir=d(Sr),At=l(ir),Pr=l(At);jl(Pr,{class:"w-4 h-4"});var Mt=d(ke);Ke(Mt,21,()=>Object.entries(a(n)),([O,J])=>O,(O,J)=>{var nt=Q(()=>ra(a(J),2));let Ae=()=>a(nt)[0],Me=()=>a(nt)[1];var Ue=ed(),st=H(Ue);{var fe=ye=>{const K=Q(()=>mn(Ae()));var Se=Bu(),Te=l(Se),ct=l(Te),St=l(ct);{var lr=ut=>{var Vt=Qe();W(()=>A(Vt,`🏪 ${Ae()??""} (${Me().length??""})`)),h(ut,Vt)},Er=ut=>{var Vt=Z(),In=H(Vt);{var Dn=Kt=>{var cr=Lu(),sn=l(cr);vn(sn,()=>a(K).icon,(Rn,qn)=>{qn(Rn,{class:"w-4 h-4"})});var an=d(sn,2),jn=l(an),kr=d(an,2),on=l(kr);W(()=>{A(jn,a(K).displayName),A(on,`(${Me().length??""})`)}),h(Kt,cr)},nn=Kt=>{var cr=Qe();W(()=>A(cr,`📦 ${Ae()??""} (${Me().length??""})`)),h(Kt,cr)};I(In,Kt=>{a(u).groupBy==="productType"?Kt(Dn):Kt(nn,!1)},!0)}h(ut,Vt)};I(St,ut=>{a(u).groupBy==="store"?ut(lr):ut(Er,!1)})}h(ye,Se)};I(st,ye=>{Ae()!==""&&ye(fe)})}var xe=d(st,2);Ke(xe,17,()=>Kc(Me(),a(u)),ye=>ye.$id,(ye,K)=>{const Se=Q(()=>mn(a(K).productType));var Te=Fu(),ct=l(Te);ct.__click=[Wu,f,K];var St=l(ct),lr=l(St),Er=l(lr),ut=l(Er),Vt=d(Er,2);{var In=Y=>{var ve=zu(),Oe=l(ve);W(()=>A(Oe,`Ancien: ${a(K).previousNames[0]??""}`)),h(Y,ve)};I(Vt,Y=>{a(K).previousNames&&a(K).previousNames.length>0&&Y(In)})}var Dn=d(lr,2),nn=l(Dn);{var Kt=Y=>{var ve=Vu(),Oe=l(ve);pn(Oe,{class:"w-4 h-4 text-success"}),h(Y,ve)};I(nn,Y=>{a(K).pFrais&&Y(Kt)})}var cr=d(nn,2);{var sn=Y=>{var ve=Gu(),Oe=l(ve);_n(Oe,{class:"w-4 h-4 text-info"}),h(Y,ve)};I(cr,Y=>{a(K).pSurgel&&Y(sn)})}var an=d(St,2),jn=l(an);Qr(jn,{class:"w-4 h-4 text-amber-600"});var kr=d(ct);kr.__click=[Uu,f,K];var on=l(kr);{var Rn=Y=>{var ve=Qu(),Oe=l(ve);W(()=>{es(ve,"data-tip",a(K).storeInfo.storeComment),A(Oe,a(K).storeInfo.storeName||"-")}),h(Y,ve)},qn=Y=>{var ve=Qe();W(()=>A(ve,a(K).storeInfo?.storeName||"-")),h(Y,ve)};I(on,Y=>{a(K).storeInfo?.storeComment?Y(Rn):Y(qn,!1)})}var Ya=d(on,2),Za=l(Ya);Qr(Za,{class:"w-4 h-4 text-amber-600"});var On=d(kr);On.__click=[Hu,f,K];var ms=l(On);{var Xa=Y=>{var ve=Ju();Ke(ve,20,()=>a(K).who,Oe=>Oe,(Oe,ln)=>{var cn=Ku(),Wn=l(cn);W(()=>A(Wn,ln)),h(Oe,cn)}),h(Y,ve)},Fa=Y=>{var ve=Qe("-");h(Y,ve)};I(ms,Y=>{a(K).who&&a(K).who.length>0?Y(Xa):Y(Fa,!1)})}var ei=d(ms,2),ti=l(ei);Qr(ti,{class:"w-4 h-4 text-amber-600"});var Ln=d(On),ri=l(Ln),gs=l(ri);vn(gs,()=>a(Se).icon,(Y,ve)=>{ve(Y,{class:"w-3 h-3"})});var ni=d(gs),bs=d(Ln),ys=l(bs),si=l(ys),ai=d(ys,2);{var ii=Y=>{var ve=Yu(),Oe=l(ve);Wl(Oe,{class:"w-3 h-3"});var ln=d(Oe,2),cn=l(ln),Wn=d(ln,2),vi=l(Wn);W(()=>{A(cn,`${a(K)?.nbRecipes??""} r.`),A(vi,`${a(K)?.totalAssiettes??""} c.`)}),h(Y,ve)};I(ai,Y=>{(a(K).nbRecipes||a(K).totalAssiettes)&&Y(ii)})}var Bn=d(bs);Bn.__click=[Zu,f,K];var ws=l(Bn),oi=d(ws),li=l(oi);Qr(li,{class:"w-4 h-4 text-amber-600"});var ci=d(Bn),ui=l(ci);{var di=Y=>{var ve=Xu(),Oe=l(ve);W(()=>A(Oe,a(K).displayMissingQuantity)),h(Y,ve)},fi=Y=>{Al(Y,{size:28,strokeWidth:3,class:"text-success m-auto"})};I(ui,Y=>{a(K).displayMissingQuantity!=="✅ Complet"?Y(di):Y(fi,!1)})}W(()=>{A(ut,a(K).productName),$e(kr,1,`${a(u).groupBy==="store"?"hidden":""} cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded font-medium relative group`),$e(Ln,1,a(u).groupBy==="productType"?"hidden":""),A(ni,` ${a(Se).displayName??""}`),A(si,a(K).displayQuantity||"-"),A(ws,`${(a(K).displayTotalPurchases||"-")??""} `)}),h(ye,Te)}),h(O,Ue)});var Wt=d(Ve,2);{var or=O=>{var J=td();h(O,J)};I(Wt,O=>{a(r).length===0&&O(or)})}var xt=d(m,2);Hc(xt,{});var zt=d(xt,2);fu(zt,{}),W(()=>{A(P,` ${a(s).total??""}`),A(j,` frais:
      ${a(s).frais??""}`),A(T,` surgelés:
      ${a(s).surgel??""}`),A(V,` fusionnés:
      ${a(s).merged??""}`),Ho(q,a(u).searchQuery),Ar(qe,a(u).groupBy==="none"),Ar(ze,a(u).groupBy==="store"),Ar(k,a(u).groupBy==="productType"),$e(Ge,1,`cursor-pointer hover:bg-base-100 text-center ${a(u).groupBy==="store"?"hidden":""}`),$e(yt,1,`cursor-pointer hover:bg-base-100 text-center ${a(u).groupBy==="productType"?"hidden":""}`)}),h(e,v),F()}rr(["click","input","change"]);Ji();var sd=x('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function ad(e){var t=sd();h(e,t)}var id=x('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function od(e,t){var r=id(),n=d(l(r),2),s=d(l(n),2),i=l(s);W(()=>A(i,t.message)),h(e,r)}var ld=x('<div class="flex items-center gap-2 text-success"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),cd=x('<div class="flex items-center gap-2 text-info"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),ud=x('<div class="text-base-content/60"> </div>'),dd=x('<div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),fd=x('<div class="min-h-screen bg-base-100"><header class="sticky top-0 z-10 bg-base-200 shadow-sm"><div class="container mx-auto px-4 py-4"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-base-content">Produits</h1> <p class="text-sm text-base-content/70"> </p></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function vd(e,t){X(t,!0);let r,n=be(null);Ua(async()=>{r=ll();try{await B.initialize(r)}catch(D){$(n,D instanceof Error?D.message:"Erreur lors de l'initialisation",!0),console.error("[App] Erreur initialisation:",D)}}),el(()=>{B.destroy()});const s=Q(()=>a(n)||B.error),i=Q(()=>B.loading&&B.products.length===0);var o=fd(),c=l(o),u=l(c),f=l(u),v=l(f),m=d(l(v),2),p=l(m),_=d(v,2),g=l(_);{var P=D=>{var R=ld();h(D,R)};I(g,D=>{B.realtimeConnected&&D(P)})}var w=d(g,2);{var E=D=>{var R=cd();h(D,R)};I(w,D=>{B.syncing&&D(E)})}var j=d(w,2);{var C=D=>{var R=ud(),se=l(R);W(ae=>A(se,`Maj: ${ae??""}`),[()=>new Date(B.lastSync).toLocaleTimeString()]),h(D,R)};I(j,D=>{B.lastSync&&D(C)})}var N=d(c,2),T=l(N);{var M=D=>{od(D,{get message(){return a(s)}})};I(T,D=>{a(s)&&D(M)})}var L=d(T,2);{var V=D=>{ad(D)};I(L,D=>{a(i)&&D(V)})}var z=d(L,2);{var re=D=>{nd(D,{})},_e=D=>{var R=Z(),se=H(R);{var ae=me=>{var Ce=dd();h(me,Ce)};I(se,me=>{B.loading||me(ae)},!0)}h(D,R)};I(z,D=>{B.products.length>0?D(re):D(_e,!1)})}W(()=>A(p,`Liste: ${r??""}`)),h(e,o),F()}Do(vd,{target:document.getElementById("app_products")});
