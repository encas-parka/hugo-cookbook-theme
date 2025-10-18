(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const qs=!1;var ta=Array.isArray,Zi=Array.prototype.indexOf,Oa=Array.from,Na=Object.defineProperty,yr=Object.getOwnPropertyDescriptor,Xi=Object.getOwnPropertyDescriptors,Fi=Object.prototype,eo=Array.prototype,Os=Object.getPrototypeOf,os=Object.isExtensible;function yn(e){return typeof e=="function"}const ne=()=>{};function to(e){for(var t=0;t<e.length;t++)e[t]()}function Ls(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function $a(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const st=2,La=4,Ba=8,Br=16,ar=32,Wr=64,Wa=128,bt=256,Zn=512,Ue=1024,ct=2048,Sr=4096,At=8192,zr=16384,za=32768,Vr=65536,ls=1<<17,ro=1<<18,ln=1<<19,no=1<<20,Aa=1<<21,ra=1<<22,Dr=1<<23,jr=Symbol("$state"),Bs=Symbol("legacy props"),ao=Symbol(""),kn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function Ws(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function so(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function io(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function oo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function lo(e){throw new Error("https://svelte.dev/e/effect_orphan")}function co(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function uo(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function vo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function fo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ho(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function po(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const na=1,aa=2,zs=4,_o=8,mo=16,go=1,bo=2,yo=4,wo=8,xo=16,So=1,Po=2,qe=Symbol(),ko="http://www.w3.org/1999/xhtml",Eo="http://www.w3.org/2000/svg",To="@attach";function No(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function $o(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let Ao=!1;function Vs(e){return e===this.v}function Mo(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Gs(e){return!Mo(e,this.v)}let cn=!1,Co=!1;function Io(){cn=!0}let Ce=null;function rn(e){Ce=e}function Y(e,t=!1,r){Ce={p:Ce,c:null,e:null,s:e,x:null,l:cn&&!t?{s:null,u:null,$:[]}:null}}function Z(e){var t=Ce,r=t.e;if(r!==null){t.e=null;for(var n of r)si(n)}return Ce=t.p,{}}function Dn(){return!cn||Ce!==null&&Ce.l===null}let Cr=[];function Us(){var e=Cr;Cr=[],to(e)}function qr(e){if(Cr.length===0&&!En){var t=Cr;queueMicrotask(()=>{t===Cr&&Us()})}Cr.push(e)}function Do(){for(;Cr.length>0;)Us()}const jo=new WeakMap;function Qs(e){var t=X;if(t===null)return F.f|=Dr,e;if((t.f&za)===0){if((t.f&Wa)===0)throw!t.parent&&e instanceof Error&&Hs(e),e;t.b.error(e)}else nn(e,t)}function nn(e,t){for(;t!==null;){if((t.f&Wa)!==0)try{t.b.error(e);return}catch(r){e=r}t=t.parent}throw e instanceof Error&&Hs(e),e}function Hs(e){const t=jo.get(e);t&&(Na(e,"message",{value:t.message}),Na(e,"stack",{value:t.stack}))}const Qn=new Set;let he=null,Yn=null,Ma=new Set,Gt=[],sa=null,Ca=!1,En=!1;class gt{current=new Map;#t=new Map;#r=new Set;#a=0;#n=null;#c=[];#s=[];#o=[];#i=[];#l=[];#u=[];skipped_effects=new Set;process(t){Gt=[],Yn=null;var r=gt.apply(this);for(const i of t)this.#f(i);if(this.#a===0){this.#h();var n=this.#s,s=this.#o;this.#s=[],this.#o=[],this.#i=[],Yn=this,he=null,cs(n),cs(s),Yn=null,this.#n?.resolve()}else this.#v(this.#s),this.#v(this.#o),this.#v(this.#i);r();for(const i of this.#c)Mn(i);this.#c=[]}#f(t){t.f^=Ue;for(var r=t.first;r!==null;){var n=r.f,s=(n&(ar|Wr))!==0,i=s&&(n&Ue)!==0,o=i||(n&At)!==0||this.skipped_effects.has(r);if(!o&&r.fn!==null){s?r.f^=Ue:(n&La)!==0?this.#o.push(r):(n&Ue)===0&&((n&ra)!==0&&r.b?.is_pending()?this.#c.push(r):ua(r)&&((r.f&Br)!==0&&this.#i.push(r),Mn(r)));var c=r.first;if(c!==null){r=c;continue}}var u=r.parent;for(r=r.next;r===null&&u!==null;)r=u.next,u=u.parent}}#v(t){for(const r of t)((r.f&ct)!==0?this.#l:this.#u).push(r),Ze(r,Ue);t.length=0}capture(t,r){this.#t.has(t)||this.#t.set(t,r),this.current.set(t,t.v)}activate(){he=this}deactivate(){he=null}flush(){if(Gt.length>0){if(this.activate(),Ks(),he!==null&&he!==this)return}else this.#a===0&&this.#h();this.deactivate();for(const t of Ma)if(Ma.delete(t),t(),he!==null)break}#h(){for(const t of this.#r)t();if(this.#r.clear(),Qn.size>1){this.#t.clear();let t=!0;for(const r of Qn){if(r===this){t=!1;continue}for(const[n,s]of this.current){if(r.current.has(n))if(t)r.current.set(n,s);else continue;Js(n)}if(Gt.length>0){he=r;const n=gt.apply(r);for(const s of Gt)r.#f(s);Gt=[],n()}}he=null}Qn.delete(this)}increment(){this.#a+=1}decrement(){this.#a-=1;for(const t of this.#l)Ze(t,ct),Or(t);for(const t of this.#u)Ze(t,Sr),Or(t);this.flush()}add_callback(t){this.#r.add(t)}settled(){return(this.#n??=Ls()).promise}static ensure(){if(he===null){const t=he=new gt;Qn.add(he),En||gt.enqueue(()=>{he===t&&t.flush()})}return he}static enqueue(t){qr(t)}static apply(t){return ne}}function Ro(e){var t=En;En=!0;try{for(var r;;){if(Do(),Gt.length===0&&(he?.flush(),Gt.length===0))return sa=null,r;Ks()}}finally{En=t}}function Ks(){var e=tn;Ca=!0;try{var t=0;for(fs(!0);Gt.length>0;){var r=gt.ensure();if(t++>1e3){var n,s;qo()}r.process(Gt),wr.clear()}}finally{Ca=!1,fs(e),sa=null}}function qo(){try{co()}catch(e){nn(e,sa)}}let Mr=null;function cs(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(zr|At))===0&&ua(n)&&(Mr=[],Mn(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?li(n):n.fn=null),Mr?.length>0)){wr.clear();for(const s of Mr)Mn(s);Mr=[]}}Mr=null}}function Js(e){if(e.reactions!==null)for(const t of e.reactions){const r=t.f;(r&st)!==0?Js(t):(r&(ra|Br))!==0&&(Ze(t,ct),Or(t))}}function Or(e){for(var t=sa=e;t.parent!==null;){t=t.parent;var r=t.f;if(Ca&&t===X&&(r&Br)!==0)return;if((r&(Wr|ar))!==0){if((r&Ue)===0)return;t.f^=Ue}}Gt.push(t)}function Va(e){let t=0,r=Lr(0),n;return()=>{Fo()&&(a(r),Ja(()=>(t===0&&(n=un(()=>e(()=>Tn(r)))),t+=1,()=>{qr(()=>{t-=1,t===0&&(n?.(),n=void 0,Tn(r))})})))}}var Oo=Vr|ln|Wa;function Lo(e,t,r){new Bo(e,t,r)}class Bo{parent;#t=!1;#r;#a=null;#n;#c;#s;#o=null;#i=null;#l=null;#u=null;#f=0;#v=0;#h=!1;#e=null;#b=()=>{this.#e&&an(this.#e,this.#f)};#y=Va(()=>(this.#e=Lr(this.#f),()=>{this.#e=null}));constructor(t,r,n){this.#r=t,this.#n=r,this.#c=n,this.parent=X.b,this.#t=!!this.#n.pending,this.#s=kr(()=>{X.b=this;{try{this.#o=Ge(()=>n(this.#r))}catch(s){this.error(s)}this.#v>0?this.#_():this.#t=!1}},Oo)}#w(){try{this.#o=Ge(()=>this.#c(this.#r))}catch(t){this.error(t)}this.#t=!1}#x(){const t=this.#n.pending;t&&(this.#i=Ge(()=>t(this.#r)),gt.enqueue(()=>{this.#o=this.#p(()=>(gt.ensure(),Ge(()=>this.#c(this.#r)))),this.#v>0?this.#_():(xr(this.#i,()=>{this.#i=null}),this.#t=!1)}))}is_pending(){return this.#t||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!this.#n.pending}#p(t){var r=X,n=F,s=Ce;Ut(this.#s),at(this.#s),rn(this.#s.ctx);try{return t()}catch(i){return Qs(i),null}finally{Ut(r),at(n),rn(s)}}#_(){const t=this.#n.pending;this.#o!==null&&(this.#u=document.createDocumentFragment(),Wo(this.#o,this.#u)),this.#i===null&&(this.#i=Ge(()=>t(this.#r)))}#g(t){if(!this.has_pending_snippet()){this.parent&&this.parent.#g(t);return}this.#v+=t,this.#v===0&&(this.#t=!1,this.#i&&xr(this.#i,()=>{this.#i=null}),this.#u&&(this.#r.before(this.#u),this.#u=null),qr(()=>{gt.ensure().flush()}))}update_pending_count(t){this.#g(t),this.#f+=t,Ma.add(this.#b)}get_effect_pending(){return this.#y(),a(this.#e)}error(t){var r=this.#n.onerror;let n=this.#n.failed;if(this.#h||!r&&!n)throw t;this.#o&&(Be(this.#o),this.#o=null),this.#i&&(Be(this.#i),this.#i=null),this.#l&&(Be(this.#l),this.#l=null);var s=!1,i=!1;const o=()=>{if(s){$o();return}s=!0,i&&po(),gt.ensure(),this.#f=0,this.#l!==null&&xr(this.#l,()=>{this.#l=null}),this.#t=this.has_pending_snippet(),this.#o=this.#p(()=>(this.#h=!1,Ge(()=>this.#c(this.#r)))),this.#v>0?this.#_():this.#t=!1};var c=F;try{at(null),i=!0,r?.(t,o),i=!1}catch(u){nn(u,this.#s&&this.#s.parent)}finally{at(c)}n&&qr(()=>{this.#l=this.#p(()=>{this.#h=!0;try{return Ge(()=>{n(this.#r,()=>t,()=>o)})}catch(u){return nn(u,this.#s.parent),null}finally{this.#h=!1}})})}}function Wo(e,t){for(var r=e.nodes_start,n=e.nodes_end;r!==null;){var s=r===n?null:jn(r);t.append(r),r=s}}function Ys(e,t,r){const n=Dn()?ia:Ga;if(t.length===0){r(e.map(n));return}var s=he,i=X,o=zo();Promise.all(t.map(c=>Vo(c))).then(c=>{o();try{r([...e.map(n),...c])}catch(u){(i.f&zr)===0&&nn(u,i)}s?.deactivate(),Zs()}).catch(c=>{nn(c,i)})}function zo(){var e=X,t=F,r=Ce,n=he;return function(){Ut(e),at(t),rn(r),n?.activate()}}function Zs(){Ut(null),at(null),rn(null)}function ia(e){var t=st|ct,r=F!==null&&(F.f&st)!==0?F:null;return X===null||r!==null&&(r.f&bt)!==0?t|=bt:X.f|=ln,{ctx:Ce,deps:null,effects:null,equals:Vs,f:t,fn:e,reactions:null,rv:0,v:qe,wv:0,parent:r??X,ac:null}}function Vo(e,t){let r=X;r===null&&so();var n=r.b,s=void 0,i=Lr(qe),o=!F,c=new Map;return tl(()=>{var u=Ls();s=u.promise;try{Promise.resolve(e()).then(u.resolve,u.reject)}catch(m){u.reject(m)}var v=he,h=n.is_pending();o&&(n.update_pending_count(1),h||(v.increment(),c.get(v)?.reject(kn),c.set(v,u)));const _=(m,p=void 0)=>{h||v.activate(),p?p!==kn&&(i.f|=Dr,an(i,p)):((i.f&Dr)!==0&&(i.f^=Dr),an(i,m)),o&&(n.update_pending_count(-1),h||v.decrement()),Zs()};u.promise.then(_,m=>_(null,m||"unknown"))}),ai(()=>{for(const u of c.values())u.reject(kn)}),new Promise(u=>{function v(h){function _(){h===s?u(i):v(s)}h.then(_,_)}v(s)})}function J(e){const t=ia(e);return di(t),t}function Ga(e){const t=ia(e);return t.equals=Gs,t}function Xs(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Be(t[r])}}function Go(e){for(var t=e.parent;t!==null;){if((t.f&st)===0)return t;t=t.parent}return null}function Ua(e){var t,r=X;Ut(Go(e));try{Xs(e),t=pi(e)}finally{Ut(r)}return t}function Fs(e){var t=Ua(e);if(e.equals(t)||(e.v=t,e.wv=fi()),!Gr){var r=(br||(e.f&bt)!==0)&&e.deps!==null?Sr:Ue;Ze(e,r)}}const wr=new Map;function Lr(e,t){var r={f:0,v:e,reactions:null,equals:Vs,rv:0,wv:0};return r}function re(e,t){const r=Lr(e);return di(r),r}function Uo(e,t=!1,r=!0){const n=Lr(e);return t||(n.equals=Gs),cn&&r&&Ce!==null&&Ce.l!==null&&(Ce.l.s??=[]).push(n),n}function x(e,t,r=!1){F!==null&&(!$t||(F.f&ls)!==0)&&Dn()&&(F.f&(st|Br|ra|ls))!==0&&!nr?.includes(e)&&ho();let n=r?lt(t):t;return an(e,n)}function an(e,t){if(!e.equals(t)){var r=e.v;Gr?wr.set(e,t):wr.set(e,r),e.v=t;var n=gt.ensure();n.capture(e,r),(e.f&st)!==0&&((e.f&ct)!==0&&Ua(e),Ze(e,(e.f&bt)===0?Ue:Sr)),e.wv=fi(),ei(e,ct),Dn()&&X!==null&&(X.f&Ue)!==0&&(X.f&(ar|Wr))===0&&(_t===null?al([e]):_t.push(e))}return t}function Tn(e){x(e,e.v+1)}function ei(e,t){var r=e.reactions;if(r!==null)for(var n=Dn(),s=r.length,i=0;i<s;i++){var o=r[i],c=o.f;if(!(!n&&o===X)){var u=(c&ct)===0;u&&Ze(o,t),(c&st)!==0?ei(o,Sr):u&&((c&Br)!==0&&Mr!==null&&Mr.push(o),Or(o))}}}function lt(e){if(typeof e!="object"||e===null||jr in e)return e;const t=Os(e);if(t!==Fi&&t!==eo)return e;var r=new Map,n=ta(e),s=re(0),i=Rr,o=c=>{if(Rr===i)return c();var u=F,v=Rr;at(null),ps(i);var h=c();return at(u),ps(v),h};return n&&r.set("length",re(e.length)),new Proxy(e,{defineProperty(c,u,v){(!("value"in v)||v.configurable===!1||v.enumerable===!1||v.writable===!1)&&vo();var h=r.get(u);return h===void 0?h=o(()=>{var _=re(v.value);return r.set(u,_),_}):x(h,v.value,!0),!0},deleteProperty(c,u){var v=r.get(u);if(v===void 0){if(u in c){const h=o(()=>re(qe));r.set(u,h),Tn(s)}}else x(v,qe),Tn(s);return!0},get(c,u,v){if(u===jr)return e;var h=r.get(u),_=u in c;if(h===void 0&&(!_||yr(c,u)?.writable)&&(h=o(()=>{var p=lt(_?c[u]:qe),g=re(p);return g}),r.set(u,h)),h!==void 0){var m=a(h);return m===qe?void 0:m}return Reflect.get(c,u,v)},getOwnPropertyDescriptor(c,u){var v=Reflect.getOwnPropertyDescriptor(c,u);if(v&&"value"in v){var h=r.get(u);h&&(v.value=a(h))}else if(v===void 0){var _=r.get(u),m=_?.v;if(_!==void 0&&m!==qe)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return v},has(c,u){if(u===jr)return!0;var v=r.get(u),h=v!==void 0&&v.v!==qe||Reflect.has(c,u);if(v!==void 0||X!==null&&(!h||yr(c,u)?.writable)){v===void 0&&(v=o(()=>{var m=h?lt(c[u]):qe,p=re(m);return p}),r.set(u,v));var _=a(v);if(_===qe)return!1}return h},set(c,u,v,h){var _=r.get(u),m=u in c;if(n&&u==="length")for(var p=v;p<_.v;p+=1){var g=r.get(p+"");g!==void 0?x(g,qe):p in c&&(g=o(()=>re(qe)),r.set(p+"",g))}if(_===void 0)(!m||yr(c,u)?.writable)&&(_=o(()=>re(void 0)),x(_,lt(v)),r.set(u,_));else{m=_.v!==qe;var E=o(()=>lt(v));x(_,E)}var S=Reflect.getOwnPropertyDescriptor(c,u);if(S?.set&&S.set.call(h,v),!m){if(n&&typeof u=="string"){var N=r.get("length"),q=Number(u);Number.isInteger(q)&&q>=N.v&&x(N,q+1)}Tn(s)}return!0},ownKeys(c){a(s);var u=Reflect.ownKeys(c).filter(_=>{var m=r.get(_);return m===void 0||m.v!==qe});for(var[v,h]of r)h.v!==qe&&!(v in c)&&u.push(v);return u},setPrototypeOf(){fo()}})}function us(e){try{if(e!==null&&typeof e=="object"&&jr in e)return e[jr]}catch{}return e}function Qo(e,t){return Object.is(us(e),us(t))}var ds,ti,ri,ni;function Ho(){if(ds===void 0){ds=window,ti=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;ri=yr(t,"firstChild").get,ni=yr(t,"nextSibling").get,os(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),os(r)&&(r.__t=void 0)}}function Pr(e=""){return document.createTextNode(e)}function sn(e){return ri.call(e)}function jn(e){return ni.call(e)}function l(e,t){return sn(e)}function G(e,t=!1){{var r=sn(e);return r instanceof Comment&&r.data===""?jn(r):r}}function d(e,t=1,r=!1){let n=e;for(;t--;)n=jn(n);return n}function Ko(e){e.textContent=""}function Qa(){return!1}function Jo(e,t){if(t){const r=document.body;e.autofocus=!0,qr(()=>{document.activeElement===r&&e.focus()})}}let vs=!1;function Yo(){vs||(vs=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function oa(e){var t=F,r=X;at(null),Ut(null);try{return e()}finally{at(t),Ut(r)}}function Ha(e,t,r,n=r){e.addEventListener(t,()=>oa(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),Yo()}function Zo(e){X===null&&F===null&&lo(),F!==null&&(F.f&bt)!==0&&X===null&&oo(),Gr&&io()}function Xo(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function sr(e,t,r,n=!0){var s=X;s!==null&&(s.f&At)!==0&&(e|=At);var i={ctx:Ce,deps:null,nodes_start:null,nodes_end:null,f:e|ct,first:null,fn:t,last:null,next:null,parent:s,b:s&&s.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(r)try{Mn(i),i.f|=za}catch(u){throw Be(i),u}else t!==null&&Or(i);if(n){var o=i;if(r&&o.deps===null&&o.teardown===null&&o.nodes_start===null&&o.first===o.last&&(o.f&ln)===0&&(o=o.first),o!==null&&(o.parent=s,s!==null&&Xo(o,s),F!==null&&(F.f&st)!==0&&(e&Wr)===0)){var c=F;(c.effects??=[]).push(o)}}return i}function Fo(){return F!==null&&!$t}function ai(e){const t=sr(Ba,null,!1);return Ze(t,Ue),t.teardown=e,t}function la(e){Zo();var t=X.f,r=!F&&(t&ar)!==0&&(t&za)===0;if(r){var n=Ce;(n.e??=[]).push(e)}else return si(e)}function si(e){return sr(La|no,e,!1)}function el(e){gt.ensure();const t=sr(Wr|ln,e,!0);return(r={})=>new Promise(n=>{r.outro?xr(t,()=>{Be(t),n(void 0)}):(Be(t),n(void 0))})}function Ka(e){return sr(La,e,!1)}function tl(e){return sr(ra|ln,e,!0)}function Ja(e,t=0){return sr(Ba|t,e,!0)}function R(e,t=[],r=[]){Ys(t,r,n=>{sr(Ba,()=>e(...n.map(a)),!0)})}function kr(e,t=0){var r=sr(Br|t,e,!0);return r}function Ge(e,t=!0){return sr(ar|ln,e,!0,t)}function ii(e){var t=e.teardown;if(t!==null){const r=Gr,n=F;hs(!0),at(null);try{t.call(null)}finally{hs(r),at(n)}}}function oi(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&oa(()=>{s.abort(kn)});var n=r.next;(r.f&Wr)!==0?r.parent=null:Be(r,t),r=n}}function rl(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&ar)===0&&Be(t),t=r}}function Be(e,t=!0){var r=!1;(t||(e.f&ro)!==0)&&e.nodes_start!==null&&e.nodes_end!==null&&(nl(e.nodes_start,e.nodes_end),r=!0),oi(e,t&&!r),Xn(e,0),Ze(e,zr);var n=e.transitions;if(n!==null)for(const i of n)i.stop();ii(e);var s=e.parent;s!==null&&s.first!==null&&li(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=e.ac=null}function nl(e,t){for(;e!==null;){var r=e===t?null:jn(e);e.remove(),e=r}}function li(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function xr(e,t){var r=[];Ya(e,r,!0),ci(r,()=>{Be(e),t&&t()})}function ci(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function Ya(e,t,r){if((e.f&At)===0){if(e.f^=At,e.transitions!==null)for(const o of e.transitions)(o.is_global||r)&&t.push(o);for(var n=e.first;n!==null;){var s=n.next,i=(n.f&Vr)!==0||(n.f&ar)!==0;Ya(n,t,i?r:!1),n=s}}}function ca(e){ui(e,!0)}function ui(e,t){if((e.f&At)!==0){e.f^=At,(e.f&Ue)===0&&(Ze(e,ct),Or(e));for(var r=e.first;r!==null;){var n=r.next,s=(r.f&Vr)!==0||(r.f&ar)!==0;ui(r,s?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let tn=!1;function fs(e){tn=e}let Gr=!1;function hs(e){Gr=e}let F=null,$t=!1;function at(e){F=e}let X=null;function Ut(e){X=e}let nr=null;function di(e){F!==null&&(nr===null?nr=[e]:nr.push(e))}let Ye=null,ot=0,_t=null;function al(e){_t=e}let vi=1,An=0,Rr=An;function ps(e){Rr=e}let br=!1;function fi(){return++vi}function ua(e){var t=e.f;if((t&ct)!==0)return!0;if((t&Sr)!==0){var r=e.deps,n=(t&bt)!==0;if(r!==null){var s,i,o=(t&Zn)!==0,c=n&&X!==null&&!br,u=r.length;if((o||c)&&(X===null||(X.f&zr)===0)){var v=e,h=v.parent;for(s=0;s<u;s++)i=r[s],(o||!i?.reactions?.includes(v))&&(i.reactions??=[]).push(v);o&&(v.f^=Zn),c&&h!==null&&(h.f&bt)===0&&(v.f^=bt)}for(s=0;s<u;s++)if(i=r[s],ua(i)&&Fs(i),i.wv>e.wv)return!0}(!n||X!==null&&!br)&&Ze(e,Ue)}return!1}function hi(e,t,r=!0){var n=e.reactions;if(n!==null&&!nr?.includes(e))for(var s=0;s<n.length;s++){var i=n[s];(i.f&st)!==0?hi(i,t,!1):t===i&&(r?Ze(i,ct):(i.f&Ue)!==0&&Ze(i,Sr),Or(i))}}function pi(e){var t=Ye,r=ot,n=_t,s=F,i=br,o=nr,c=Ce,u=$t,v=Rr,h=e.f;Ye=null,ot=0,_t=null,br=(h&bt)!==0&&($t||!tn||F===null),F=(h&(ar|Wr))===0?e:null,nr=null,rn(e.ctx),$t=!1,Rr=++An,e.ac!==null&&(oa(()=>{e.ac.abort(kn)}),e.ac=null);try{e.f|=Aa;var _=e.fn,m=_(),p=e.deps;if(Ye!==null){var g;if(Xn(e,ot),p!==null&&ot>0)for(p.length=ot+Ye.length,g=0;g<Ye.length;g++)p[ot+g]=Ye[g];else e.deps=p=Ye;if(!br||(h&st)!==0&&e.reactions!==null)for(g=ot;g<p.length;g++)(p[g].reactions??=[]).push(e)}else p!==null&&ot<p.length&&(Xn(e,ot),p.length=ot);if(Dn()&&_t!==null&&!$t&&p!==null&&(e.f&(st|Sr|ct))===0)for(g=0;g<_t.length;g++)hi(_t[g],e);return s!==null&&s!==e&&(An++,_t!==null&&(n===null?n=_t:n.push(..._t))),(e.f&Dr)!==0&&(e.f^=Dr),m}catch(E){return Qs(E)}finally{e.f^=Aa,Ye=t,ot=r,_t=n,F=s,br=i,nr=o,rn(c),$t=u,Rr=v}}function sl(e,t){let r=t.reactions;if(r!==null){var n=Zi.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&(t.f&st)!==0&&(Ye===null||!Ye.includes(t))&&(Ze(t,Sr),(t.f&(bt|Zn))===0&&(t.f^=Zn),Xs(t),Xn(t,0))}function Xn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)sl(e,r[n])}function Mn(e){var t=e.f;if((t&zr)===0){Ze(e,Ue);var r=X,n=tn;X=e,tn=!0;try{(t&Br)!==0?rl(e):oi(e),ii(e);var s=pi(e);e.teardown=typeof s=="function"?s:null,e.wv=vi;var i;qs&&Co&&(e.f&ct)!==0&&e.deps}finally{tn=n,X=r}}}async function il(){await Promise.resolve(),Ro()}function a(e){var t=e.f,r=(t&st)!==0;if(F!==null&&!$t){var n=X!==null&&(X.f&zr)!==0;if(!n&&!nr?.includes(e)){var s=F.deps;if((F.f&Aa)!==0)e.rv<An&&(e.rv=An,Ye===null&&s!==null&&s[ot]===e?ot++:Ye===null?Ye=[e]:(!br||!Ye.includes(e))&&Ye.push(e));else{(F.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[F]:i.includes(F)||i.push(F)}}}else if(r&&e.deps===null&&e.effects===null){var o=e,c=o.parent;c!==null&&(c.f&bt)===0&&(o.f^=bt)}if(Gr){if(wr.has(e))return wr.get(e);if(r){o=e;var u=o.v;return((o.f&Ue)===0&&o.reactions!==null||_i(o))&&(u=Ua(o)),wr.set(o,u),u}}else r&&(o=e,ua(o)&&Fs(o));if((e.f&Dr)!==0)throw e.v;return e.v}function _i(e){if(e.v===qe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(wr.has(t)||(t.f&st)!==0&&_i(t))return!0;return!1}function un(e){var t=$t;try{return $t=!0,e()}finally{$t=t}}const ol=-7169;function Ze(e,t){e.f=e.f&ol|t}function ll(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const cl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ul(e){return cl.includes(e)}const dl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function vl(e){return e=e.toLowerCase(),dl[e]??e}const fl=["touchstart","touchmove"];function hl(e){return fl.includes(e)}const mi=new Set,Ia=new Set;function gi(e,t,r,n={}){function s(i){if(n.capture||Sn.call(t,i),!i.cancelBubble)return oa(()=>r?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?qr(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Da(e,t,r,n={}){var s=gi(t,e,r,n);return()=>{e.removeEventListener(t,s,n)}}function Ur(e){for(var t=0;t<e.length;t++)mi.add(e[t]);for(var r of Ia)r(e)}let _s=null;function Sn(e){var t=this,r=t.ownerDocument,n=e.type,s=e.composedPath?.()||[],i=s[0]||e.target;_s=e;var o=0,c=_s===e&&e.__root;if(c){var u=s.indexOf(c);if(u!==-1&&(t===document||t===window)){e.__root=t;return}var v=s.indexOf(t);if(v===-1)return;u<=v&&(o=u)}if(i=s[o]||e.target,i!==t){Na(e,"currentTarget",{configurable:!0,get(){return i||r}});var h=F,_=X;at(null),Ut(null);try{for(var m,p=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var E=i["__"+n];if(E!=null&&(!i.disabled||e.target===i))if(ta(E)){var[S,...N]=E;S.apply(i,[e,...N])}else E.call(i,e)}catch(q){m?p.push(q):m=q}if(e.cancelBubble||g===t||g===null)break;i=g}if(m){for(let q of p)queueMicrotask(()=>{throw q});throw m}}finally{e.__root=t,delete e.currentTarget,at(h),Ut(_)}}}function bi(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function on(e,t){var r=X;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function w(e,t){var r=(t&So)!==0,n=(t&Po)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=bi(i?e:"<!>"+e),r||(s=sn(s)));var o=n||ti?document.importNode(s,!0):s.cloneNode(!0);if(r){var c=sn(o),u=o.lastChild;on(c,u)}else on(o,o);return o}}function pl(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=bi(s),c=sn(o);i=sn(c)}var u=i.cloneNode(!0);return on(u,u),u}}function _l(e,t){return pl(e,t,"svg")}function Je(e=""){{var t=Pr(e+"");return on(t,t),t}}function K(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Pr();return e.append(t,r),on(t,r),e}function f(e,t){e!==null&&e.before(t)}function k(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r+"")}function ml(e,t){return gl(e,t)}const Xr=new Map;function gl(e,{target:t,anchor:r,props:n={},events:s,context:i,intro:o=!0}){Ho();var c=new Set,u=_=>{for(var m=0;m<_.length;m++){var p=_[m];if(!c.has(p)){c.add(p);var g=hl(p);t.addEventListener(p,Sn,{passive:g});var E=Xr.get(p);E===void 0?(document.addEventListener(p,Sn,{passive:g}),Xr.set(p,1)):Xr.set(p,E+1)}}};u(Oa(mi)),Ia.add(u);var v=void 0,h=el(()=>{var _=r??t.appendChild(Pr());return Lo(_,{pending:()=>{}},m=>{if(i){Y({});var p=Ce;p.c=i}s&&(n.$$events=s),v=e(m,n)||{},i&&Z()}),()=>{for(var m of c){t.removeEventListener(m,Sn);var p=Xr.get(m);--p===0?(document.removeEventListener(m,Sn),Xr.delete(m)):Xr.set(m,p)}Ia.delete(u),_!==r&&_.parentNode?.removeChild(_)}});return bl.set(v,h),v}let bl=new WeakMap;function T(e,t,r=!1){var n=e,s=null,i=null,o=qe,c=r?Vr:0,u=!1;const v=(p,g=!0)=>{u=!0,m(g,p)};var h=null;function _(){h!==null&&(h.lastChild.remove(),n.before(h),h=null);var p=o?s:i,g=o?i:s;p&&ca(p),g&&xr(g,()=>{o?i=null:s=null})}const m=(p,g)=>{if(o!==(o=p)){var E=Qa(),S=n;if(E&&(h=document.createDocumentFragment(),h.append(S=Pr())),o?s??=g&&Ge(()=>g(S)):i??=g&&Ge(()=>g(S)),E){var N=he,q=o?s:i,A=o?i:s;q&&N.skipped_effects.delete(q),A&&N.skipped_effects.add(A),N.add_callback(_)}else _()}};kr(()=>{u=!1,t(v),u||m(null,null)},c)}function yl(e,t){return t}function wl(e,t,r){for(var n=e.items,s=[],i=t.length,o=0;o<i;o++)Ya(t[o].e,s,!0);var c=i>0&&s.length===0&&r!==null;if(c){var u=r.parentNode;Ko(u),u.append(r),n.clear(),Vt(e,t[0].prev,t[i-1].next)}ci(s,()=>{for(var v=0;v<i;v++){var h=t[v];c||(n.delete(h.k),Vt(e,h.prev,h.next)),Be(h.e,!c)}})}function Oe(e,t,r,n,s,i=null){var o=e,c={flags:t,items:new Map,first:null},u=(t&zs)!==0;if(u){var v=e;o=v.appendChild(Pr())}var h=null,_=!1,m=new Map,p=Ga(()=>{var N=r();return ta(N)?N:N==null?[]:Oa(N)}),g,E;function S(){xl(E,g,c,m,o,s,t,n,r),i!==null&&(g.length===0?h?ca(h):h=Ge(()=>i(o)):h!==null&&xr(h,()=>{h=null}))}kr(()=>{E??=X,g=a(p);var N=g.length;if(!(_&&N===0)){_=N===0;var q,A,C,M;if(Qa()){var I=new Set,B=he;for(A=0;A<N;A+=1){C=g[A],M=n(C,A);var Q=c.items.get(M)??m.get(M);Q?(t&(na|aa))!==0&&yi(Q,C,A,t):(q=wi(null,c,null,null,C,M,A,s,t,r,!0),m.set(M,q)),I.add(M)}for(const[U,ae]of c.items)I.has(U)||B.skipped_effects.add(ae.e);B.add_callback(S)}else S();a(p)}})}function xl(e,t,r,n,s,i,o,c,u){var v=(o&_o)!==0,h=(o&(na|aa))!==0,_=t.length,m=r.items,p=r.first,g=p,E,S=null,N,q=[],A=[],C,M,I,B;if(v)for(B=0;B<_;B+=1)C=t[B],M=c(C,B),I=m.get(M),I!==void 0&&(I.a?.measure(),(N??=new Set).add(I));for(B=0;B<_;B+=1){if(C=t[B],M=c(C,B),I=m.get(M),I===void 0){var Q=n.get(M);if(Q!==void 0){n.delete(M),m.set(M,Q);var U=S?S.next:g;Vt(r,S,Q),Vt(r,Q,U),xa(Q,U,s),S=Q}else{var ae=g?g.e.nodes_start:s;S=wi(ae,r,S,S===null?r.first:S.next,C,M,B,i,o,u)}m.set(M,S),q=[],A=[],g=S.next;continue}if(h&&yi(I,C,B,o),(I.e.f&At)!==0&&(ca(I.e),v&&(I.a?.unfix(),(N??=new Set).delete(I))),I!==g){if(E!==void 0&&E.has(I)){if(q.length<A.length){var pe=A[0],O;S=pe.prev;var L=q[0],se=q[q.length-1];for(O=0;O<q.length;O+=1)xa(q[O],pe,s);for(O=0;O<A.length;O+=1)E.delete(A[O]);Vt(r,L.prev,se.next),Vt(r,S,L),Vt(r,se,pe),g=pe,S=se,B-=1,q=[],A=[]}else E.delete(I),xa(I,g,s),Vt(r,I.prev,I.next),Vt(r,I,S===null?r.first:S.next),Vt(r,S,I),S=I;continue}for(q=[],A=[];g!==null&&g.k!==M;)(g.e.f&At)===0&&(E??=new Set).add(g),A.push(g),g=g.next;if(g===null)continue;I=g}q.push(I),S=I,g=I.next}if(g!==null||E!==void 0){for(var te=E===void 0?[]:Oa(E);g!==null;)(g.e.f&At)===0&&te.push(g),g=g.next;var _e=te.length;if(_e>0){var Qe=(o&zs)!==0&&_===0?s:null;if(v){for(B=0;B<_e;B+=1)te[B].a?.measure();for(B=0;B<_e;B+=1)te[B].a?.fix()}wl(r,te,Qe)}}v&&qr(()=>{if(N!==void 0)for(I of N)I.a?.apply()}),e.first=r.first&&r.first.e,e.last=S&&S.e;for(var ke of n.values())Be(ke.e);n.clear()}function yi(e,t,r,n){(n&na)!==0&&an(e.v,t),(n&aa)!==0?an(e.i,r):e.i=r}function wi(e,t,r,n,s,i,o,c,u,v,h){var _=(u&na)!==0,m=(u&mo)===0,p=_?m?Uo(s,!1,!1):Lr(s):s,g=(u&aa)===0?o:Lr(o),E={i:g,v:p,k:i,a:null,e:null,prev:r,next:n};try{if(e===null){var S=document.createDocumentFragment();S.append(e=Pr())}return E.e=Ge(()=>c(e,p,g,v),Ao),E.e.prev=r&&r.e,E.e.next=n&&n.e,r===null?h||(t.first=E):(r.next=E,r.e.next=E.e),n!==null&&(n.prev=E,n.e.prev=E.e),E}finally{}}function xa(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==null&&i!==n;){var o=jn(i);s.before(i),i=o}}function Vt(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function ce(e,t,...r){var n=e,s=ne,i;kr(()=>{s!==(s=t())&&(i&&(Be(i),i=null),i=Ge(()=>s(n,...r)))},Vr)}function Fr(e,t,r){var n=e,s,i,o=null,c=null;function u(){i&&(xr(i),i=null),o&&(o.lastChild.remove(),n.before(o),o=null),i=c,c=null}kr(()=>{if(s!==(s=t())){var v=Qa();if(s){var h=n;v&&(o=document.createDocumentFragment(),o.append(h=Pr()),i&&he.skipped_effects.add(i)),c=Ge(()=>r(h,s))}v?he.add_callback(u):u()}},Vr)}function Sl(e,t,r,n,s,i){var o,c,u=null,v=e,h;kr(()=>{const _=t()||null;var m=Eo;_!==o&&(h&&(_===null?xr(h,()=>{h=null,c=null}):_===c?ca(h):Be(h)),_&&_!==c&&(h=Ge(()=>{if(u=document.createElementNS(m,_),on(u,u),n){var p=u.appendChild(Pr());n(u,p)}X.nodes_end=u,v.before(u)})),o=_,o&&(c=o))},Vr)}function Pl(e,t){var r=void 0,n;kr(()=>{r!==(r=t())&&(n&&(Be(n),n=null),r&&(n=Ge(()=>{Ka(()=>r(e))})))})}function xi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=xi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function kl(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=xi(e))&&(n&&(n+=" "),n+=t);return n}function El(e){return typeof e=="object"?kl(e):e??""}const ms=[...` 	
\r\f \v\uFEFF`];function Tl(e,t,r){var n=e==null?"":""+e;if(r){for(var s in r)if(r[s])n=n?n+" "+s:s;else if(n.length)for(var i=s.length,o=0;(o=n.indexOf(s,o))>=0;){var c=o+i;(o===0||ms.includes(n[o-1]))&&(c===n.length||ms.includes(n[c]))?n=(o===0?"":n.substring(0,o))+n.substring(c+1):o=c}}return n===""?null:n}function gs(e,t=!1){var r=t?" !important;":";",n="";for(var s in e){var i=e[s];i!=null&&i!==""&&(n+=" "+s+": "+i+r)}return n}function Sa(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Nl(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,c=!1,u=[];n&&u.push(...Object.keys(n).map(Sa)),s&&u.push(...Object.keys(s).map(Sa));var v=0,h=-1;const E=e.length;for(var _=0;_<E;_++){var m=e[_];if(c?m==="/"&&e[_-1]==="*"&&(c=!1):i?i===m&&(i=!1):m==="/"&&e[_+1]==="*"?c=!0:m==='"'||m==="'"?i=m:m==="("?o++:m===")"&&o--,!c&&i===!1&&o===0){if(m===":"&&h===-1)h=_;else if(m===";"||_===E-1){if(h!==-1){var p=Sa(e.substring(v,h).trim());if(!u.includes(p)){m!==";"&&_++;var g=e.substring(v,_).trim();r+=" "+g+";"}}v=_+1,h=-1}}}}return n&&(r+=gs(n)),s&&(r+=gs(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Me(e,t,r,n,s,i){var o=e.__className;if(o!==r||o===void 0){var c=Tl(r,n,i);c==null?e.removeAttribute("class"):t?e.className=c:e.setAttribute("class",c),e.__className=r}else if(i&&s!==i)for(var u in i){var v=!!i[u];(s==null||v!==!!s[u])&&e.classList.toggle(u,v)}return i}function Pa(e,t={},r,n){for(var s in r){var i=r[s];t[s]!==i&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,n))}}function $l(e,t,r,n){var s=e.__style;if(s!==t){var i=Nl(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(Pa(e,r?.[0],n[0]),Pa(e,r?.[1],n[1],"important")):Pa(e,r,n));return n}function Fn(e,t,r=!1){if(e.multiple){if(t==null)return;if(!ta(t))return No();for(var n of e.options)n.selected=t.includes(Nn(n));return}for(n of e.options){var s=Nn(n);if(Qo(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Si(e){var t=new MutationObserver(()=>{Fn(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ai(()=>{t.disconnect()})}function ja(e,t,r=t){var n=!0;Ha(e,"change",s=>{var i=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(i),Nn);else{var c=e.querySelector(i)??e.querySelector("option:not([disabled])");o=c&&Nn(c)}r(o)}),Ka(()=>{var s=t();if(Fn(e,s,n),n&&s===void 0){var i=e.querySelector(":checked");i!==null&&(s=Nn(i),r(s))}e.__value=s,n=!1}),Si(e)}function Nn(e){return"__value"in e?e.__value:e.value}const wn=Symbol("class"),xn=Symbol("style"),Pi=Symbol("is custom element"),ki=Symbol("is html");function Al(e,t){var r=da(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function en(e,t){var r=da(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function Ml(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ra(e,t,r,n){var s=da(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[ao]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ei(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Cl(e,t,r,n,s=!1,i=!1){var o=da(e),c=o[Pi],u=!o[ki],v=t||{},h=e.tagName==="OPTION";for(var _ in t)_ in r||(r[_]=null);r.class?r.class=El(r.class):r[wn]&&(r.class=null),r[xn]&&(r.style??=null);var m=Ei(e);for(const C in r){let M=r[C];if(h&&C==="value"&&M==null){e.value=e.__value="",v[C]=M;continue}if(C==="class"){var p=e.namespaceURI==="http://www.w3.org/1999/xhtml";Me(e,p,M,n,t?.[wn],r[wn]),v[C]=M,v[wn]=r[wn];continue}if(C==="style"){$l(e,M,t?.[xn],r[xn]),v[C]=M,v[xn]=r[xn];continue}var g=v[C];if(!(M===g&&!(M===void 0&&e.hasAttribute(C)))){v[C]=M;var E=C[0]+C[1];if(E!=="$$")if(E==="on"){const I={},B="$$"+C;let Q=C.slice(2);var S=ul(Q);if(ll(Q)&&(Q=Q.slice(0,-7),I.capture=!0),!S&&g){if(M!=null)continue;e.removeEventListener(Q,v[B],I),v[B]=null}if(M!=null)if(S)e[`__${Q}`]=M,Ur([Q]);else{let U=function(ae){v[C].call(this,ae)};var A=U;v[B]=gi(Q,e,U,I)}else S&&(e[`__${Q}`]=void 0)}else if(C==="style")Ra(e,C,M);else if(C==="autofocus")Jo(e,!!M);else if(!c&&(C==="__value"||C==="value"&&M!=null))e.value=e.__value=M;else if(C==="selected"&&h)Ml(e,M);else{var N=C;u||(N=vl(N));var q=N==="defaultValue"||N==="defaultChecked";if(M==null&&!c&&!q)if(o[C]=null,N==="value"||N==="checked"){let I=e;const B=t===void 0;if(N==="value"){let Q=I.defaultValue;I.removeAttribute(N),I.defaultValue=Q,I.value=I.__value=B?Q:null}else{let Q=I.defaultChecked;I.removeAttribute(N),I.defaultChecked=Q,I.checked=B?Q:!1}}else e.removeAttribute(C);else q||m.includes(N)&&(c||typeof M!="string")?(e[N]=M,N in o&&(o[N]=qe)):typeof M!="function"&&Ra(e,N,M)}}}return v}function bs(e,t,r=[],n=[],s,i=!1,o=!1){Ys(r,n,c=>{var u=void 0,v={},h=e.nodeName==="SELECT",_=!1;if(kr(()=>{var p=t(...c.map(a)),g=Cl(e,u,p,s,i,o);_&&h&&"value"in p&&Fn(e,p.value);for(let S of Object.getOwnPropertySymbols(v))p[S]||Be(v[S]);for(let S of Object.getOwnPropertySymbols(p)){var E=p[S];S.description===To&&(!u||E!==u[S])&&(v[S]&&Be(v[S]),v[S]=Ge(()=>Pl(e,()=>E))),g[S]=E}u=g}),h){var m=e;Ka(()=>{Fn(m,u.value,!0),Si(m)})}_=!0})}function da(e){return e.__attributes??={[Pi]:e.nodeName.includes("-"),[ki]:e.namespaceURI===ko}}var ys=new Map;function Ei(e){var t=e.getAttribute("is")||e.nodeName,r=ys.get(t);if(r)return r;ys.set(t,r=[]);for(var n,s=e,i=Element.prototype;i!==s;){n=Xi(s);for(var o in n)n[o].set&&r.push(o);s=Os(s)}return r}function Ve(e,t,r=t){var n=new WeakSet;Ha(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=ka(e)?Ea(i):i,r(i),he!==null&&n.add(he),await il(),i!==(i=t())){var o=e.selectionStart,c=e.selectionEnd;e.value=i??"",c!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(c,e.value.length))}}),un(t)==null&&e.value&&(r(ka(e)?Ea(e.value):e.value),he!==null&&n.add(he)),Ja(()=>{var s=t();if(e===document.activeElement){var i=Yn??he;if(n.has(i))return}ka(e)&&s===Ea(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Il(e,t,r=t){Ha(e,"change",n=>{var s=n?e.defaultChecked:e.checked;r(s)}),un(t)==null&&r(e.checked),Ja(()=>{var n=t();e.checked=!!n})}function ka(e){var t=e.type;return t==="number"||t==="range"}function Ea(e){return e===""?null:+e}let Hn=!1;function Dl(e){var t=Hn;try{return Hn=!1,[e(),Hn]}finally{Hn=t}}const jl={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ue(e,t,r){return new Proxy({props:e,exclude:t},jl)}const Rl={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(yn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];yn(s)&&(s=s());const i=yr(s,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(yn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=yr(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===jr||t===Bs)return!1;for(let r of e.props)if(yn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(yn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function de(...e){return new Proxy({props:e},Rl)}function rr(e,t,r,n){var s=!cn||(r&bo)!==0,i=(r&wo)!==0,o=(r&xo)!==0,c=n,u=!0,v=()=>(u&&(u=!1,c=o?un(n):n),c),h;if(i){var _=jr in e||Bs in e;h=yr(e,t)?.set??(_&&t in e?A=>e[t]=A:void 0)}var m,p=!1;i?[m,p]=Dl(()=>e[t]):m=e[t],m===void 0&&n!==void 0&&(m=v(),h&&(s&&uo(),h(m)));var g;if(s?g=()=>{var A=e[t];return A===void 0?v():(u=!0,A)}:g=()=>{var A=e[t];return A!==void 0&&(c=void 0),A===void 0?c:A},s&&(r&yo)===0)return g;if(h){var E=e.$$legacy;return(function(A,C){return arguments.length>0?((!s||!C||E||p)&&h(C?g():A),A):g()})}var S=!1,N=((r&go)!==0?ia:Ga)(()=>(S=!1,g()));i&&a(N);var q=X;return(function(A,C){if(arguments.length>0){const M=C?a(N):s&&i?lt(A):A;return x(N,M),S=!0,c!==void 0&&(c=M),A}return Gr&&S||(q.f&zr)!==0?N.v:a(N)})}function Ti(e){Ce===null&&Ws(),cn&&Ce.l!==null?Ol(Ce).m.push(e):la(()=>{const t=un(e);if(typeof t=="function")return t})}function ql(e){Ce===null&&Ws(),Ti(()=>()=>un(e))}function Ol(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const Ll="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Ll);const Ni=typeof window<"u"?window:void 0;function Bl(e){let t=e.activeElement;for(;t?.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}class Wl{#t;#r;constructor(t={}){const{window:r=Ni,document:n=r?.document}=t;r!==void 0&&(this.#t=n,this.#r=Va(s=>{const i=Da(r,"focusin",s),o=Da(r,"focusout",s);return()=>{i(),o()}}))}get current(){return this.#r?.(),this.#t?Bl(this.#t):null}}new Wl;function zl(e,t){return e}function Vl(e,t){let r=re(null);const n=J(()=>zl(t));function s(...i){if(a(r))a(r).timeout&&clearTimeout(a(r).timeout);else{let o,c;const u=new Promise((v,h)=>{o=v,c=h});x(r,{timeout:null,runner:null,promise:u,resolve:o,reject:c},!0)}return a(r).runner=async()=>{if(!a(r))return;const o=a(r);x(r,null);try{o.resolve(await e.apply(this,i))}catch(c){o.reject(c)}},a(r).timeout=setTimeout(a(r).runner,a(n)),a(r).promise}return s.cancel=async()=>{(!a(r)||a(r).timeout===null)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||a(r).timeout===null)||(clearTimeout(a(r).timeout),a(r).reject("Cancelled"),x(r,null))},s.runScheduledNow=async()=>{(!a(r)||!a(r).timeout)&&(await new Promise(i=>setTimeout(i,0)),!a(r)||!a(r).timeout)||(clearTimeout(a(r).timeout),a(r).timeout=null,await a(r).runner?.())},Object.defineProperty(s,"pending",{enumerable:!0,get(){return!!a(r)?.timeout}}),s}function Gl(e,t){switch(e){case"local":return t.localStorage;case"session":return t.sessionStorage}}function $i(e,t,r,n,s,i){if(e===null||typeof e!="object")return e;const o=Object.getPrototypeOf(e);if(o!==null&&o!==Object.prototype&&!Array.isArray(e))return e;let c=r.get(e);return c||(c=new Proxy(e,{get:(u,v)=>(n?.(),$i(Reflect.get(u,v),t,r,n,s,i)),set:(u,v,h)=>(s?.(),Reflect.set(u,v,h),i(t),!0)}),r.set(e,c)),c}class ws{#t;#r;#a;#n;#c;#s;#o=new WeakMap;constructor(t,r,n={}){const{storage:s="local",serializer:i={serialize:JSON.stringify,deserialize:JSON.parse},syncTabs:o=!0}=n,c="window"in n?n.window:Ni;if(this.#t=r,this.#r=t,this.#a=i,c===void 0)return;const u=Gl(s,c);this.#n=u;const v=u.getItem(t);v!==null?this.#t=this.#l(v):this.#u(r),o&&s==="local"&&(this.#c=Va(h=>{this.#s=h;const _=Da(c,"storage",this.#i);return()=>{_(),this.#s=void 0}}))}get current(){this.#c?.();const t=this.#n?.getItem(this.#r),r=t?this.#l(t):this.#t;return $i(r,r,this.#o,this.#c?.bind(this),this.#s?.bind(this),this.#u.bind(this))}set current(t){this.#u(t),this.#s?.()}#i=t=>{t.key!==this.#r||t.newValue===null||(this.#t=this.#l(t.newValue),this.#s?.())};#l(t){try{return this.#a.deserialize(t)}catch(r){console.error(`Error when parsing "${t}" from persisted store "${this.#r}"`,r);return}}#u(t){try{t!=null&&this.#n?.setItem(this.#r,this.#a.serialize(t))}catch(r){console.error(`Error when writing value from persisted store "${this.#r}" to ${this.#n}`,r)}}}function Ul(e="your-main-id"){return typeof window>"u"?e:new URLSearchParams(window.location.search).get("listId")||e}function xs(e,t){return`${e}_${t}`}function Ql(e,t,r,n){if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}let b=class{constructor(t,r,n){this.method=t,this.attribute=r,n!==void 0&&(Array.isArray(n)?this.values=n:this.values=[n])}toString(){return JSON.stringify({method:this.method,attribute:this.attribute,values:this.values})}};b.equal=(e,t)=>new b("equal",e,t).toString();b.notEqual=(e,t)=>new b("notEqual",e,t).toString();b.lessThan=(e,t)=>new b("lessThan",e,t).toString();b.lessThanEqual=(e,t)=>new b("lessThanEqual",e,t).toString();b.greaterThan=(e,t)=>new b("greaterThan",e,t).toString();b.greaterThanEqual=(e,t)=>new b("greaterThanEqual",e,t).toString();b.isNull=e=>new b("isNull",e).toString();b.isNotNull=e=>new b("isNotNull",e).toString();b.between=(e,t,r)=>new b("between",e,[t,r]).toString();b.startsWith=(e,t)=>new b("startsWith",e,t).toString();b.endsWith=(e,t)=>new b("endsWith",e,t).toString();b.select=e=>new b("select",void 0,e).toString();b.search=(e,t)=>new b("search",e,t).toString();b.orderDesc=e=>new b("orderDesc",e).toString();b.orderAsc=e=>new b("orderAsc",e).toString();b.orderRandom=()=>new b("orderRandom").toString();b.cursorAfter=e=>new b("cursorAfter",void 0,e).toString();b.cursorBefore=e=>new b("cursorBefore",void 0,e).toString();b.limit=e=>new b("limit",void 0,e).toString();b.offset=e=>new b("offset",void 0,e).toString();b.contains=(e,t)=>new b("contains",e,t).toString();b.notContains=(e,t)=>new b("notContains",e,t).toString();b.notSearch=(e,t)=>new b("notSearch",e,t).toString();b.notBetween=(e,t,r)=>new b("notBetween",e,[t,r]).toString();b.notStartsWith=(e,t)=>new b("notStartsWith",e,t).toString();b.notEndsWith=(e,t)=>new b("notEndsWith",e,t).toString();b.createdBefore=e=>new b("createdBefore",void 0,e).toString();b.createdAfter=e=>new b("createdAfter",void 0,e).toString();b.createdBetween=(e,t)=>new b("createdBetween",void 0,[e,t]).toString();b.updatedBefore=e=>new b("updatedBefore",void 0,e).toString();b.updatedAfter=e=>new b("updatedAfter",void 0,e).toString();b.updatedBetween=(e,t)=>new b("updatedBetween",void 0,[e,t]).toString();b.or=e=>new b("or",void 0,e.map(t=>JSON.parse(t))).toString();b.and=e=>new b("and",void 0,e.map(t=>JSON.parse(t))).toString();b.distanceEqual=(e,t,r,n=!0)=>new b("distanceEqual",e,[[t,r,n]]).toString();b.distanceNotEqual=(e,t,r,n=!0)=>new b("distanceNotEqual",e,[[t,r,n]]).toString();b.distanceGreaterThan=(e,t,r,n=!0)=>new b("distanceGreaterThan",e,[[t,r,n]]).toString();b.distanceLessThan=(e,t,r,n=!0)=>new b("distanceLessThan",e,[[t,r,n]]).toString();b.intersects=(e,t)=>new b("intersects",e,[t]).toString();b.notIntersects=(e,t)=>new b("notIntersects",e,[t]).toString();b.crosses=(e,t)=>new b("crosses",e,[t]).toString();b.notCrosses=(e,t)=>new b("notCrosses",e,[t]).toString();b.overlaps=(e,t)=>new b("overlaps",e,[t]).toString();b.notOverlaps=(e,t)=>new b("notOverlaps",e,[t]).toString();b.touches=(e,t)=>new b("touches",e,[t]).toString();b.notTouches=(e,t)=>new b("notTouches",e,[t]).toString();var Ai,Mi;class Cn{static custom(t){return t}static unique(t=7){const r=Ql(Cn,Ai,"m",Mi).call(Cn);let n="";for(let s=0;s<t;s++){const i=Math.floor(Math.random()*16).toString(16);n+=i}return r+n}}Ai=Cn,Mi=function(){const t=new Date,r=Math.floor(t.getTime()/1e3),n=t.getMilliseconds();return r.toString(16)+n.toString(16).padStart(5,"0")};var Ss;(function(e){e.Totp="totp"})(Ss||(Ss={}));var Ps;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(Ps||(Ps={}));var ks;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(ks||(ks={}));var Es;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(Es||(Es={}));var Ts;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionPay="unionpay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(Ts||(Ts={}));var Ns;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(Ns||(Ns={}));var $s;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS",e.HEAD="HEAD"})($s||($s={}));var As;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(As||(As={}));var Ms;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif",e.Gif="gif"})(Ms||(Ms={}));async function dn(){if(!window.AppwriteClient)throw new Error("AppwriteClient non disponible");const e=await window.AppwriteClient.getDatabases(),t=window.AppwriteClient.getConfig();return{databases:e,config:t}}async function Hl(e,t={}){const{includePurchases:r=!0,limit:n=100,orderBy:s="productName",orderDirection:i="asc"}=t;try{const{databases:o,config:c}=await dn(),u=await o.listDocuments(c.APPWRITE_CONFIG.databaseId,c.APPWRITE_CONFIG.collections.products,[b.equal("mainId",e),b.orderAsc(s==="productName"?"productName":"$updatedAt"),b.limit(n)]),v=u.documents;if(!r)return v;const h=await o.listDocuments(c.APPWRITE_CONFIG.databaseId,c.APPWRITE_CONFIG.collections.purchases,[b.equal("mainId",e)]),_=h.documents,m=Fl(v,_);return console.log(`[Appwrite Interactions] ${u.documents.length} produits chargés avec ${h.documents.length} achats`),m}catch(o){console.error(`[Appwrite Interactions] Erreur chargement produits pour mainId ${e}:`,o);const c=o instanceof Error?o.message:"Erreur lors du chargement des produits";throw new Error(`Échec du chargement des produits: ${c}`)}}async function Kl(e,t){const{lastSync:r,limit:n=100}=t;if(!r)return console.log("[Appwrite Interactions] Aucune dernière sync fournie, retour vide"),[];try{const{databases:s,config:i}=await dn(),o=await s.listDocuments(i.APPWRITE_CONFIG.databaseId,i.APPWRITE_CONFIG.collections.products,[b.greaterThan("$updatedAt",r),b.equal("mainId",e),b.limit(n)]);return o.documents.length>0&&console.log(`[Appwrite Interactions] ${o.documents.length} mises à jour synchronisées`),o.documents}catch(s){console.error(`[Appwrite Interactions] Erreur sync produits pour mainId ${e}:`,s);const i=s instanceof Error?s.message:"Erreur lors de la synchronisation";throw new Error(`Échec de la synchronisation: ${i}`)}}async function Za(e,t){try{const{databases:r,config:n}=await dn();return await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.products,e,t)}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour produit ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour du produit: ${n}`)}}async function Jl(e,t){if(console.log(`[Appwrite Interactions] Mise à jour du magasin pour produit ${e}:`,t),!e)throw new Error("ID du produit requis pour la mise à jour du magasin");const r=t?JSON.stringify(t):null,n=await Za(e,{store:r});return console.log(`[Appwrite Interactions] Magasin mis à jour pour produit ${e}, nouvelle valeur:`,n.store),n}async function Cs(e,t){return Za(e,{who:t})}async function Is(e,t){return Za(e,{stockReel:t})}async function Yl(e){try{const{databases:t,config:r}=await dn(),i=await(await window.AppwriteClient.getAccount()).get(),o={...e,createdBy:i.$id,status:"active"},c=await t.createDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,Cn.unique(),o);return console.log("[Appwrite Interactions] Achat créé:",c),c}catch(t){console.error("[Appwrite Interactions] Erreur création achat:",t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la création de l'achat: ${r}`)}}async function Zl(e,t){try{const{databases:r,config:n}=await dn(),s=await r.updateDocument(n.APPWRITE_CONFIG.databaseId,n.APPWRITE_CONFIG.collections.purchases,e,t);return console.log(`[Appwrite Interactions] Achat ${e} mis à jour:`,t),s}catch(r){console.error(`[Appwrite Interactions] Erreur mise à jour achat ${e}:`,r);const n=r instanceof Error?r.message:"Erreur inconnue";throw new Error(`Échec de la mise à jour de l'achat: ${n}`)}}async function Xl(e){try{const{databases:t,config:r}=await dn();await t.deleteDocument(r.APPWRITE_CONFIG.databaseId,r.APPWRITE_CONFIG.collections.purchases,e),console.log(`[Appwrite Interactions] Achat ${e} supprimé`)}catch(t){console.error(`[Appwrite Interactions] Erreur suppression achat ${e}:`,t);const r=t instanceof Error?t.message:"Erreur inconnue";throw new Error(`Échec de la suppression de l'achat: ${r}`)}}function Fl(e,t){return e.map(r=>({...r,purchases:t.filter(n=>n.products.some(s=>s.$id===r.$id))}))}function ec(e,t){const r=new Map(t.map(o=>[o.$id,o])),n=e.map(o=>r.get(o.$id)??o),s=new Set(e.map(o=>o.$id)),i=t.filter(o=>!s.has(o.$id));return[...n,...i]}function tc(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing stock data:",t),[]}}function rc(e){if(!e)return[];try{return JSON.parse(e)}catch(t){return console.error("[Appwrite Interactions] Erreur parsing recipes occurrences:",t),[]}}function nc(e,t={}){let r=null;const n=i=>{const{events:o,payload:c}=i;if(!c)return;const u=o.some(p=>p.includes("products.")),v=o.some(p=>p.includes("purchases.")),h=o.some(p=>p.includes(".create")),_=o.some(p=>p.includes(".update")),m=o.some(p=>p.includes(".delete"));if(u){const p=c;h&&t.onProductCreate?t.onProductCreate(p):_&&t.onProductUpdate?t.onProductUpdate(p):m&&t.onProductDelete&&t.onProductDelete(p.$id)}else if(v){const p=c;h&&t.onPurchaseCreate?t.onPurchaseCreate(p):_&&t.onPurchaseUpdate?t.onPurchaseUpdate(p):m&&t.onPurchaseDelete&&t.onPurchaseDelete(p.$id)}};return(async()=>{try{typeof window<"u"&&window.AppwriteClient&&(await window.AppwriteClient.initializeAppwrite(),r=window.AppwriteClient.subscribeToCollections(["products","purchases"],e,n,{onConnect:()=>{console.log("[Appwrite Interactions] Realtime connecté"),t.onConnect?.()},onDisconnect:()=>{console.log("[Appwrite Interactions] Realtime déconnecté"),t.onDisconnect?.()},onError:i=>{console.error("[Appwrite Interactions] Erreur realtime:",i),t.onError?.(i)}}))}catch(i){console.error("[Appwrite Interactions] Impossible de configurer realtime:",i),t.onError?.(i)}})(),()=>{r&&(r(),r=null)}}const{Query:vv}=window.Appwrite,Ds=1e3,ac=500;class sc{#t=re(null);#r=re(!1);#a=re(null);#n=re(null);#c=re(null);#s(t,r=null){if(!t||t.trim()==="")return r;try{return JSON.parse(t)}catch(n){return console.warn("[ProductsStore] Erreur de parsing JSON, utilisation de la valeur par défaut:",n),r}}#o=J(()=>a(this.#a)?.current.products??[]);get products(){return a(this.#o)}set products(t){x(this.#o,t)}#i=J(()=>a(this.#a)?.current.loading??!1);get loading(){return a(this.#i)}set loading(t){x(this.#i,t)}#l=J(()=>a(this.#a)?.current.error??null);get error(){return a(this.#l)}set error(t){x(this.#l,t)}#u=J(()=>a(this.#a)?.current.syncing??!1);get syncing(){return a(this.#u)}set syncing(t){x(this.#u,t)}#f=J(()=>a(this.#a)?.current.realtimeConnected??!1);get realtimeConnected(){return a(this.#f)}set realtimeConnected(t){x(this.#f,t)}#v=J(()=>a(this.#n)?.current.lastSync??null);get lastSync(){return a(this.#v)}set lastSync(t){x(this.#v,t)}#h=J(()=>a(this.#n)?.current.mainId??null);get mainId(){return a(this.#h)}set mainId(t){x(this.#h,t)}#e=re(lt({searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"productType",sortColumn:"",sortDirection:"asc"}));get filters(){return a(this.#e)}#b=J(()=>this.products.map(t=>{const r=this.#N(t.purchases??[]),n=this.#W(t.totalNeededConsolidated?this.#s(t.totalNeededConsolidated):[],r);return{...t,storeInfo:t.store?this.#s(t.store):null,totalNeededArray:t.totalNeededConsolidated?this.#s(t.totalNeededConsolidated):[],recipesArray:t.recipesOccurrences?this.#s(t.recipesOccurrences):[],stockArray:t.stockReel?this.#s(t.stockReel):[],displayQuantity:this.#L(t.totalNeededConsolidated),displayName:t.productName.trim(),totalPurchases:r,displayTotalPurchases:this.#B(t.purchases??[]),missingQuantity:n,displayMissingQuantity:n.length>0?n.map(s=>this.#P(s.quantity.toString(),s.unit)).join(" et "):"✅ Complet"}}));get enrichedProducts(){return a(this.#b)}set enrichedProducts(t){x(this.#b,t)}#y=J(()=>{const t=this.enrichedProducts.map(r=>r.storeInfo?.storeName).filter(Boolean);return[...new Set(t)]});get uniqueStores(){return a(this.#y)}set uniqueStores(t){x(this.#y,t)}#w=J(()=>[...new Set(this.products.flatMap(t=>t.who||[]).filter(Boolean))]);get uniqueWho(){return a(this.#w)}set uniqueWho(t){x(this.#w,t)}#x=J(()=>[...new Set(this.products.map(t=>t.productType).filter(Boolean))]);get uniqueProductTypes(){return a(this.#x)}set uniqueProductTypes(t){x(this.#x,t)}#p=J(()=>{const t=this.enrichedProducts.filter(r=>this.#O(r));return a(this.#e).groupBy==="none"?{"":t}:Object.groupBy(t,r=>a(this.#e).groupBy==="store"?r.storeInfo?.storeName||"Non défini":r.productType||"Non défini")});get filteredGroupedProducts(){return a(this.#p)}set filteredGroupedProducts(t){x(this.#p,t)}#_=J(()=>Object.values(this.filteredGroupedProducts).flat());get filteredProducts(){return a(this.#_)}set filteredProducts(t){x(this.#_,t)}#g=J(()=>this.filteredGroupedProducts);get groupedFormattedProducts(){return a(this.#g)}set groupedFormattedProducts(t){x(this.#g,t)}#k=J(()=>({total:this.filteredProducts.length,frais:this.filteredProducts.filter(t=>t.pFrais).length,surgel:this.filteredProducts.filter(t=>t.pSurgel).length,merged:this.filteredProducts.filter(t=>t.isMerged).length}));get stats(){return a(this.#k)}set stats(t){x(this.#k,t)}get currentMainId(){return a(this.#t)}get isInitialized(){return a(this.#r)}#m=Vl(()=>{this.#S()},ac);async initialize(t){if(!t?.trim())throw new Error("mainId invalide fourni");if(a(this.#r)&&a(this.#t)===t){console.log(`[ProductsStore] Déjà initialisé pour mainId: ${t}`);return}console.log(`[ProductsStore] Initialisation avec mainId: ${t}`),x(this.#t,t,!0),x(this.#r,!0),this.#$(t),this.products.length>0&&a(this.#n).current.mainId===t?(console.log(`[ProductsStore] Utilisation du cache (${this.products.length} produits)`),await this.#A()):(console.log("[ProductsStore] Chargement initial depuis Appwrite"),await this.#E(t));const n=this.#q();x(this.#c,nc(t,n),!0)}#$(t){if(a(this.#a)&&a(this.#n))return;const r=xs("products-state",t),n=xs("products-sync-state",t);console.log(`[ProductsStore] Clés de stockage: ${r}, ${n}`),x(this.#a,new ws(r,{products:[],loading:!1,error:null,syncing:!1,realtimeConnected:!1}),!0),x(this.#n,new ws(n,{lastSync:null,mainId:null}),!0)}async#E(t){if(!a(this.#a))throw new Error("ProductsStore non initialisé");this.#d({loading:!0,error:null});try{const n=await Hl(t,{includePurchases:!0,limit:Ds,orderBy:"productName",orderDirection:"asc"});this.#d({products:n}),this.#S(),console.log(`[ProductsStore] ${n.length} produits chargés`)}catch(r){const n=r instanceof Error?r.message:"Erreur lors du chargement";throw this.#d({loading:!1,error:n}),console.error("[ProductsStore]",n,r),r}}async#A(){if(a(this.#n)?.current.lastSync){this.#d({syncing:!0});try{const t={lastSync:a(this.#n).current.lastSync,limit:Ds},r=await Kl(a(this.#t),t);r.length>0&&(this.#d({products:ec(this.products,r)}),this.#S(),console.log(`[ProductsStore] ${r.length} mises à jour synchronisées`)),this.#d({syncing:!1})}catch(t){console.error("[ProductsStore] Erreur sync:",t),this.#d({syncing:!1})}}}#M(t){if(!a(this.#a))return;this.products.some(n=>n.$id===t.$id)||this.#d({products:[...this.products,t]})}#C(t){a(this.#a)&&this.#d({products:this.products.map(r=>{if(r.$id===t.$id){const n={...r};return Object.keys(t).forEach(s=>{t[s]!==void 0&&(n[s]=t[s])}),n}return r})})}#I(t){a(this.#a)&&this.#d({products:this.products.filter(r=>r.$id!==t)})}#D(t){console.log("[ProductsStore] Purchase créé, mise à jour des produits concernés..."),this.#T(t)}#j(t){console.log("[ProductsStore] Purchase mis à jour, mise à jour des produits concernés..."),this.#T(t)}#R(t){console.log("[ProductsStore] Purchase supprimé, nettoyage des produits concernés..."),this.#d({products:this.products.map(r=>({...r,purchases:(r.purchases||[]).filter(n=>n.$id!==t)}))})}#T(t){!t.products||t.products.length===0||(this.#d({products:this.products.map(r=>{if(t.products.some(n=>n.$id===r.$id)){const s=(r.purchases||[]).filter(i=>i.$id!==t.$id);return s.push(t),{...r,purchases:s}}return r})}),console.log(`[ProductsStore] ${t.products.length} produit(s) mis à jour avec le purchase ${t.$id}`))}#q(){return{onProductCreate:t=>{this.#M(t),this.#m()},onProductUpdate:t=>{this.#C(t),this.#m()},onProductDelete:t=>{this.#I(t),this.#m()},onPurchaseCreate:t=>{this.#D(t),this.#m()},onPurchaseUpdate:t=>{this.#j(t),this.#m()},onPurchaseDelete:t=>{this.#R(t),this.#m()},onConnect:()=>{console.log("[ProductsStore] Realtime connecté"),this.#d({realtimeConnected:!0})},onDisconnect:()=>{console.log("[ProductsStore] Realtime déconnecté"),this.#d({realtimeConnected:!1})},onError:t=>{console.error("[ProductsStore] Erreur realtime:",t)}}}#S(){if(!a(this.#t)||!a(this.#n))return;const t=new Date().toISOString();a(this.#n).current={lastSync:t,mainId:a(this.#t)},this.lastSync=t,this.mainId=a(this.#t)}#d(t){a(this.#a)&&(a(this.#a).current={...a(this.#a).current,...t})}async forceReload(t){await this.#E(t)}destroy(){a(this.#c)?.(),x(this.#c,null),console.log("[ProductsStore] Ressources nettoyées")}clearCache(){if(!a(this.#a)||!a(this.#n)){console.warn("[ProductsStore] Store non initialisé");return}this.#d({products:[],loading:!1,error:null,syncing:!1,realtimeConnected:!1}),a(this.#n).current={lastSync:null,mainId:null},console.log(`[ProductsStore] Cache vidé pour ${a(this.#t)}`)}setSearchQuery(t){a(this.#e).searchQuery=t}toggleProductType(t){const r=a(this.#e).selectedProductTypes.indexOf(t);r>-1?a(this.#e).selectedProductTypes.splice(r,1):a(this.#e).selectedProductTypes.push(t)}toggleTemperature(t){const r=a(this.#e).selectedTemperatures.indexOf(t);r>-1?a(this.#e).selectedTemperatures.splice(r,1):a(this.#e).selectedTemperatures.push(t)}clearTypeAndTemperatureFilters(){a(this.#e).selectedProductTypes=[],a(this.#e).selectedTemperatures=[]}setGroupBy(t){a(this.#e).groupBy=t}toggleStore(t){const r=a(this.#e).selectedStores.indexOf(t);r>-1?a(this.#e).selectedStores.splice(r,1):a(this.#e).selectedStores.push(t)}toggleWho(t){const r=a(this.#e).selectedWho.indexOf(t);r>-1?a(this.#e).selectedWho.splice(r,1):a(this.#e).selectedWho.push(t)}clearStoreFilters(){a(this.#e).selectedStores=[]}clearWhoFilters(){a(this.#e).selectedWho=[]}handleSort(t){a(this.#e).sortColumn===t?a(this.#e).sortDirection=a(this.#e).sortDirection==="asc"?"desc":"asc":(a(this.#e).sortColumn=t,a(this.#e).sortDirection="asc")}clearFilters(){x(this.#e,{searchQuery:"",selectedStores:[],selectedWho:[],selectedProductTypes:[],selectedTemperatures:[],groupBy:"none",sortColumn:"",sortDirection:"asc"},!0)}sortProducts(t){return a(this.#e).sortColumn?[...t].sort((r,n)=>{let s=r[a(this.#e).sortColumn],i=n[a(this.#e).sortColumn];return a(this.#e).sortColumn==="totalNeededConsolidated"?(s=parseFloat(s)||0,i=parseFloat(i)||0):a(this.#e).sortColumn==="purchases"&&(s=r.purchases?.length||0,i=n.purchases?.length||0),s<i?a(this.#e).sortDirection==="asc"?-1:1:s>i?a(this.#e).sortDirection==="asc"?1:-1:0}):t}#O(t){if(a(this.#e).searchQuery.trim()){const r=a(this.#e).searchQuery.toLowerCase();if(!t.productName.toLowerCase().includes(r))return!1}return!(a(this.#e).selectedStores.length>0&&(!t.storeInfo?.storeName||!a(this.#e).selectedStores.includes(t.storeInfo.storeName))||a(this.#e).selectedWho.length>0&&(!t.who||!t.who.some(r=>a(this.#e).selectedWho.includes(r)))||a(this.#e).selectedProductTypes.length>0&&(!t.productType||!a(this.#e).selectedProductTypes.includes(t.productType))||a(this.#e).selectedTemperatures.length>0&&!(a(this.#e).selectedTemperatures.includes("frais")&&t.pFrais||a(this.#e).selectedTemperatures.includes("surgele")&&t.pSurgel))}#L(t){if(!t)return"-";try{const r=JSON.parse(t);return!Array.isArray(r)||r.length===0?"-":r.map(n=>this.#P(n.value,n.unit)).join(" et ")}catch{return"-"}}#P(t,r){const n=parseFloat(t);if(isNaN(n))return`${t} ${r}`;if((r==="gr."||r==="ml")&&n>=1e3){const s=n/1e3,i=r==="gr."?"kg":"l.";let c=(Math.round(s*100)/100).toString();return c.endsWith(",0")&&(c=c.slice(0,-2)),c.endsWith(",00")&&(c=c.slice(0,-3)),`${c} ${i}`}if(!["gr.","ml","kg","l."].includes(r)){let i=(Math.round(n*10)/10).toString();return i.endsWith(",0")&&(i=i.slice(0,-2)),`${i} ${r}`}return`${n} ${r}`}#B(t){return!t||t.length===0?"-":this.#N(t).map(n=>this.#P(n.quantity.toString(),n.unit)).join(" et ")}#N(t){if(!t||t.length===0)return[];const r=new Map;t.forEach(s=>{if(!s.quantity||!s.unit)return;const i=parseFloat(s.quantity);if(isNaN(i))return;const o=r.get(s.unit)||0;r.set(s.unit,o+i)});const n=[];return r.forEach((s,i)=>{n.push({quantity:s,unit:i})}),n}#W(t,r){if(!t||t.length===0)return[];if(!r||r.length===0)return t.map(o=>({quantity:parseFloat(o.value),unit:o.unit}));const n=new Map,s=new Map;t.forEach(o=>{const c=parseFloat(o.value);isNaN(c)||n.set(o.unit,(n.get(o.unit)||0)+c)}),r.forEach(o=>{s.set(o.unit,(s.get(o.unit)||0)+o.quantity)});const i=[];return n.forEach((o,c)=>{const u=s.get(c)||0,v=o-u;v>0&&i.push({quantity:v,unit:c})}),i}}const V=new sc;/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ic={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var oc=_l("<svg><!><!></svg>");function ve(e,t){Y(t,!0);const r=rr(t,"color",3,"currentColor"),n=rr(t,"size",3,24),s=rr(t,"strokeWidth",3,2),i=rr(t,"absoluteStrokeWidth",3,!1),o=rr(t,"iconNode",19,()=>[]),c=ue(t,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var u=oc();bs(u,_=>({...ic,...c,width:n(),height:n(),stroke:r(),"stroke-width":_,class:["lucide-icon lucide",t.name&&`lucide-${t.name}`,t.class]}),[()=>i()?Number(s())*24/Number(n()):s()]);var v=l(u);Oe(v,17,o,yl,(_,m)=>{var p=J(()=>$a(a(m),2));let g=()=>a(p)[0],E=()=>a(p)[1];var S=K(),N=G(S);Sl(N,g,!0,(q,A)=>{bs(q,()=>({...E()}))}),f(_,S)});var h=d(v);ce(h,()=>t.children??ne),f(e,u),Z()}function qa(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]];ve(e,de({name:"archive"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function lc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]];ve(e,de({name:"bean"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function cc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5"}]];ve(e,de({name:"beef"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function uc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]];ve(e,de({name:"candy-cane"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function dc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]];ve(e,de({name:"carrot"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function vc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];ve(e,de({name:"chef-hat"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function fc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ve(e,de({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function hc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ve(e,de({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function pc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ve(e,de({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function _c(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{d:"m7 15 3 3"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}]];ve(e,de({name:"combine"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function mc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"}]];ve(e,de({name:"egg"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function Ta(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ve(e,de({name:"funnel"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function js(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]];ve(e,de({name:"layout-list"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function gc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]];ve(e,de({name:"leaf"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function bc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M13 5h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 19h8"}],["path",{d:"m3 17 2 2 4-4"}],["rect",{x:"3",y:"4",width:"6",height:"6",rx:"1"}]];ve(e,de({name:"list-todo"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function $n(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"}],["path",{d:"M12 22V12"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["path",{d:"m7.5 4.27 9 5.15"}]];ve(e,de({name:"package"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function yc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]];ve(e,de({name:"refrigerator"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function wc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ve(e,de({name:"save"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function xc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ve(e,de({name:"search"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function Kn(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]];ve(e,de({name:"shopping-basket"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function ea(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]];ve(e,de({name:"shopping-cart"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function Jn(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];ve(e,de({name:"snowflake"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function Pn(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ve(e,de({name:"square-pen"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function Ir(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];ve(e,de({name:"store"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function Sc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ve(e,de({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function Pc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ve(e,de({name:"user"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function In(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ve(e,de({name:"users"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function kc(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]];ve(e,de({name:"utensils"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function mt(e,t){Y(t,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let r=ue(t,["$$slots","$$events","$$legacy"]);const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ve(e,de({name:"x"},()=>r,{get iconNode(){return n},children:(s,i)=>{var o=K(),c=G(o);ce(c,()=>t.children??ne),f(s,o)},$$slots:{default:!0}})),Z()}function Ec(e,t,r){x(t,null),r.onCancelEditPurchase()}async function Tc(e,t,r){await t.onSavePurchase(),x(r,null)}var Nc=w('<span class="loading loading-spinner loading-sm"></span>'),$c=w('<div class="text-center py-8 opacity-50"><!> <p>Aucun achat enregistré pour ce produit</p></div>'),Ac=w('<span class="loading loading-spinner loading-sm"></span>'),Mc=w('<tr class="bg-warning/10"><td><div class="flex gap-2"><input type="number" step="0.01" class="input input-bordered w-20"/> <select class="select select-bordered w-16"><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unité·s</option><option>botte·s</option></select></div></td><td><input type="text" class="input input-bordered w-24"/></td><td><input type="text" class="input input-bordered w-20"/></td><td class="text-xs opacity-75"> </td><td><input type="number" step="0.01" class="input input-bordered w-16"/></td><td><input type="text" class="input input-bordered w-24"/></td><td><div class="btn-group btn-group-sm"><button class="btn btn-success btn-sm"><!></button> <button class="btn btn-ghost btn-sm"><!></button></div></td></tr>'),Cc=(e,t,r)=>t(a(r)),Ic=(e,t,r)=>t(a(r).$id),Dc=w('<span class="loading loading-spinner loading-sm"></span>'),jc=w('<tr><td class="font-medium"> </td><td> </td><td> </td><td class="text-xs opacity-75"> </td><td> </td><td> </td><td><div class="btn-group btn-group-sm"><button class="btn btn-ghost btn-sm"><!></button> <button class="btn btn-ghost btn-sm text-error"><!></button></div></td></tr>'),Rc=w('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Magasin</th><th>Qui</th><th>Date</th><th>Prix</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),qc=w('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des achats</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un achat</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"><div class="form-control"><label for="purchase-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="purchase-quantity" type="number" step="0.01" class="input input-bordered validator" required/></div> <div class="form-control"><label for="purchase-unit" class="label"><span class="label-text">Unité</span></label> <select id="purchase-unit" class="select select-bordered validator" required><option disabled selected>Sélectionner</option><option>kg</option><option>gr.</option><option>l.</option><option>ml</option><option>unités</option><option>botte·s</option></select></div> <div class="form-control"><label for="purchase-store" class="label"><span class="label-text">Magasin</span></label> <input id="purchase-store" type="text" class="input input-bordered" placeholder="Ex: Marché"/></div> <div class="form-control"><label for="purchase-who" class="label"><span class="label-text">Qui a acheté ?</span></label> <input id="purchase-who" type="text" class="input input-bordered" placeholder="Votre nom"/></div> <div class="form-control"><label for="purchase-price" class="label"><span class="label-text">Prix (€)</span></label> <input id="purchase-price" type="number" step="1" class="input input-bordered" placeholder="0.00"/></div> <div class="form-control"><label for="purchase-notes" class="label"><span class="label-text">Notes</span></label> <input id="purchase-notes" type="text" class="input input-bordered" placeholder="Promotion, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function Oc(e,t){Y(t,!0);let r=rr(t,"newPurchase",7),n=re(null);function s(z,$e){return $e==="gr."&&z>=1e3?`${(z/1e3).toFixed(1)} kg`:$e==="ml"&&z>=1e3?`${(z/1e3).toFixed(1)} l`:`${z} ${$e}`}function i(z){return new Date(z).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}function o(z){x(n,{...z},!0),t.onStartEditPurchase(z)}async function c(z){await t.onDeletePurchase(z)}var u=qc(),v=l(u),h=l(v);ea(h,{class:"w-5 h-5"});var _=d(v,2),m=l(_),p=d(l(m),2),g=l(p),E=d(l(g),2),S=d(g,2),N=d(l(S),2),q=l(N);q.value=q.__value="";var A=d(q);A.value=A.__value="kg";var C=d(A);C.value=C.__value="gr.";var M=d(C);M.value=M.__value="l.";var I=d(M);I.value=I.__value="ml";var B=d(I);B.value=B.__value="unité";var Q=d(B);Q.value=Q.__value="bottes";var U=d(S,2),ae=d(l(U),2),pe=d(U,2),O=d(l(pe),2),L=d(pe,2),se=d(l(L),2),te=d(L,2),_e=d(l(te),2),Qe=d(p,2),ke=l(Qe);ke.__click=function(...z){t.onAddPurchase?.apply(this,z)};var y=l(ke);{var $=z=>{var $e=Nc();f(z,$e)},ee=z=>{var $e=Je("Ajouter l'achat");f(z,$e)};T(y,z=>{t.loading?z($):z(ee,!1)})}var ye=d(_,2);{var je=z=>{var $e=$c(),Mt=l($e);ea(Mt,{class:"w-12 h-12 mx-auto mb-2"}),f(z,$e)},Xe=z=>{var $e=Rc(),Mt=l($e),ir=d(l(Mt));Oe(ir,21,()=>t.currentProductPurchases,ut=>ut.$id,(ut,Ae)=>{var Qt=K(),Er=G(Qt);{var Ct=dt=>{var vt=Mc(),Ee=l(vt),Fe=l(Ee),Ht=l(Fe),lr=d(Ht,2),et=l(lr);et.value=et.__value="kg";var yt=d(et);yt.value=yt.__value="gr.";var wt=d(yt);wt.value=wt.__value="l.";var Kt=d(wt);Kt.value=Kt.__value="ml";var He=d(Kt);He.value=He.__value="unité";var Jt=d(He);Jt.value=Jt.__value="bottes";var It=d(Ee),Tr=l(It),xt=d(It),St=l(xt),Dt=d(xt),cr=l(Dt),ft=d(Dt),Nr=l(ft),Pt=d(ft),ur=l(Pt),Ke=d(Pt),Yt=l(Ke),dr=l(Yt);dr.__click=[Tc,t,n];var vr=l(dr);{var vn=W=>{var we=Ac();f(W,we)},fn=W=>{wc(W,{class:"w-3 h-3"})};T(vr,W=>{t.loading?W(vn):W(fn,!1)})}var Qr=d(dr,2);Qr.__click=[Ec,n,t];var H=l(Qr);mt(H,{class:"w-3 h-3"}),R(W=>{k(cr,W),dr.disabled=t.loading},[()=>i(a(Ae).$createdAt)]),Ve(Ht,()=>a(n).quantity,W=>a(n).quantity=W),ja(lr,()=>a(n).unit,W=>a(n).unit=W),Ve(Tr,()=>a(n).store,W=>a(n).store=W),Ve(St,()=>a(n).who,W=>a(n).who=W),Ve(Nr,()=>a(n).price,W=>a(n).price=W),Ve(ur,()=>a(n).notes,W=>a(n).notes=W),f(dt,vt)},or=dt=>{var vt=jc(),Ee=l(vt),Fe=l(Ee),Ht=d(Ee),lr=l(Ht),et=d(Ht),yt=l(et),wt=d(et),Kt=l(wt),He=d(wt),Jt=l(He),It=d(He),Tr=l(It),xt=d(It),St=l(xt),Dt=l(St);Dt.__click=[Cc,o,Ae];var cr=l(Dt);Pn(cr,{class:"w-4 h-4"});var ft=d(Dt,2);ft.__click=[Ic,c,Ae];var Nr=l(ft);{var Pt=Ke=>{var Yt=Dc();f(Ke,Yt)},ur=Ke=>{mt(Ke,{class:"w-4 h-4"})};T(Nr,Ke=>{t.loading?Ke(Pt):Ke(ur,!1)})}R((Ke,Yt)=>{k(Fe,Ke),k(lr,a(Ae).store),k(yt,a(Ae).who),k(Kt,Yt),k(Jt,a(Ae).price?`${a(Ae).price}€`:"-"),k(Tr,a(Ae).notes||"-"),ft.disabled=t.loading},[()=>s(a(Ae).quantity,a(Ae).unit),()=>i(a(Ae).$createdAt)]),f(dt,vt)};T(Er,dt=>{a(n)?.$id===a(Ae).$id?dt(Ct):dt(or,!1)})}f(ut,Qt)}),f(z,$e)};T(ye,z=>{t.currentProductPurchases.length===0?z(je):z(Xe,!1)})}R(()=>ke.disabled=t.loading),Ve(E,()=>r().quantity,z=>r().quantity=z),ja(N,()=>r().unit,z=>r().unit=z),Ve(ae,()=>r().store,z=>r().store=z),Ve(O,()=>r().who,z=>r().who=z),Ve(se,()=>r().price,z=>r().price=z),Ve(_e,()=>r().notes,z=>r().notes=z),f(e,u),Z()}Ur(["click"]);var Lc=w('<span class="loading loading-spinner loading-sm"></span>'),Bc=w('<div class="text-center py-8 opacity-50"><!> <p>Aucun stock enregistré pour ce produit</p></div>'),Wc=(e,t,r)=>t(a(r).dateTime),zc=w('<span class="loading loading-spinner loading-xs"></span>'),Vc=w('<tr><td class="font-medium"> </td><td> </td><td> </td><td><button class="btn btn-ghost btn-xs text-error"><!></button></td></tr>'),Gc=w('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Quantité</th><th>Date</th><th>Notes</th><th>Actions</th></tr></thead><tbody></tbody></table></div>'),Uc=w('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion du stock</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter au stock</h4> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"><div class="form-control"><label for="stock-quantity" class="label"><span class="label-text">Quantité</span></label> <input id="stock-quantity" type="number" step="0.01" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-unit" class="label"><span class="label-text">Unité</span></label> <select id="stock-unit" class="select select-bordered select-sm" required><option>Sélectionner</option><option>kg</option><option>g</option><option>l</option><option>ml</option><option>unités</option><option>pièces</option></select></div> <div class="form-control"><label for="stock-datetime" class="label"><span class="label-text">Date du stock</span></label> <input id="stock-datetime" type="datetime-local" class="input input-bordered input-sm" required/></div> <div class="form-control"><label for="stock-notes" class="label"><span class="label-text">Notes</span></label> <input id="stock-notes" type="text" class="input input-bordered input-sm" placeholder="Origine, remarques..."/></div></div> <div class="card-actions justify-end mt-4"><button class="btn btn-primary btn-sm"><!></button></div></div></div> <!></div>');function Qc(e,t){Y(t,!0);let r={quantity:"",unit:"",dateTime:"",notes:""};function n(y,$){return $==="g"&&y>=1e3?`${(y/1e3).toFixed(1)} kg`:$==="ml"&&y>=1e3?`${(y/1e3).toFixed(1)} l`:$==="unités"||$==="pièces"?`${y} ${$}`:`${y} ${$}`}function s(y){return new Date(y).toLocaleDateString("fr-FR",{day:"numeric",month:"short",year:"numeric"})}async function i(y){await t.onDeleteStock(y)}var o=Uc(),c=l(o),u=l(c);qa(u,{class:"w-5 h-5"});var v=d(c,2),h=l(v),_=d(l(h),2),m=l(_),p=d(l(m),2),g=d(m,2),E=d(l(g),2),S=l(E);S.value=S.__value="";var N=d(S);N.value=N.__value="kg";var q=d(N);q.value=q.__value="g";var A=d(q);A.value=A.__value="l";var C=d(A);C.value=C.__value="ml";var M=d(C);M.value=M.__value="unités";var I=d(M);I.value=I.__value="pièces";var B=d(g,2),Q=d(l(B),2),U=d(B,2),ae=d(l(U),2),pe=d(_,2),O=l(pe);O.__click=function(...y){t.onAddStock?.apply(this,y)};var L=l(O);{var se=y=>{var $=Lc();f(y,$)},te=y=>{var $=Je("Ajouter au stock");f(y,$)};T(L,y=>{t.loading?y(se):y(te,!1)})}var _e=d(v,2);{var Qe=y=>{var $=Bc(),ee=l($);qa(ee,{class:"w-12 h-12 mx-auto mb-2"}),f(y,$)},ke=y=>{var $=Gc(),ee=l($),ye=d(l(ee));Oe(ye,23,()=>t.stockEntries,je=>je.dateTime,(je,Xe)=>{var z=Vc(),$e=l(z),Mt=l($e),ir=d($e),ut=l(ir),Ae=d(ir),Qt=l(Ae),Er=d(Ae),Ct=l(Er);Ct.__click=[Wc,i,Xe];var or=l(Ct);{var dt=Ee=>{var Fe=zc();f(Ee,Fe)},vt=Ee=>{var Fe=Je("Supprimer");f(Ee,Fe)};T(or,Ee=>{t.loading?Ee(dt):Ee(vt,!1)})}R((Ee,Fe)=>{k(Mt,Ee),k(ut,Fe),k(Qt,a(Xe).notes||"-"),Ct.disabled=t.loading},[()=>n(a(Xe).quantity,a(Xe).unit),()=>s(a(Xe).dateTime)]),f(je,z)}),f(y,$)};T(_e,y=>{t.stockEntries.length===0?y(Qe):y(ke,!1)})}R(()=>O.disabled=t.loading),Ve(p,()=>r.quantity,y=>r.quantity=y),ja(E,()=>r.unit,y=>r.unit=y),Ve(Q,()=>r.dateTime,y=>r.dateTime=y),Ve(ae,()=>r.notes,y=>r.notes=y),f(e,o),Z()}Ur(["click"]);var Hc=(e,t)=>{e.key==="Enter"&&t()},Kc=w('<span class="loading loading-spinner loading-sm"></span>'),Jc=w('<span class="badge badge-primary badge-sm"> </span>'),Yc=w('<div class="text-center py-8 opacity-50"><!> <p>Aucun volontaire assigné à ce produit</p></div>'),Zc=(e,t,r)=>t(r),Xc=w('<div class="badge badge-primary badge-lg gap-2"> <button class="btn btn-ghost btn-xs p-0 hover:text-error"><!></button></div>'),Fc=w('<div class="flex flex-wrap gap-2"></div>'),eu=w('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des volontaires</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Ajouter un volontaire</h4> <div class="flex gap-2"><div class="form-control flex-1"><input type="text" class="input input-bordered input-sm" placeholder="Nom du volontaire"/></div> <button class="btn btn-primary btn-sm"><!></button></div></div></div> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Volontaires <!></h4> <!></div></div></div>');function tu(e,t){Y(t,!0);let r=re("");async function n(){a(r).trim()&&(await t.onAddVolunteer(a(r).trim()),x(r,""))}async function s(U){await t.onRemoveVolunteer(U)}var i=eu(),o=l(i),c=l(o);In(c,{class:"w-5 h-5"});var u=d(o,2),v=l(u),h=d(l(v),2),_=l(h),m=l(_);m.__keydown=[Hc,n];var p=d(_,2);p.__click=n;var g=l(p);{var E=U=>{var ae=Kc();f(U,ae)},S=U=>{var ae=Je("Ajouter");f(U,ae)};T(g,U=>{t.loading?U(E):U(S,!1)})}var N=d(u,2),q=l(N),A=l(q),C=d(l(A));{var M=U=>{var ae=Jc(),pe=l(ae);R(()=>k(pe,t.editingWho.length)),f(U,ae)};T(C,U=>{t.editingWho.length>0&&U(M)})}var I=d(A,2);{var B=U=>{var ae=Yc(),pe=l(ae);In(pe,{class:"w-12 h-12 mx-auto mb-2"}),f(U,ae)},Q=U=>{var ae=Fc();Oe(ae,20,()=>t.editingWho,pe=>pe,(pe,O)=>{var L=Xc(),se=l(L),te=d(se);te.__click=[Zc,s,O];var _e=l(te);mt(_e,{class:"w-3 h-3"}),R(()=>{k(se,`${O??""} `),te.disabled=t.loading}),f(pe,L)}),f(U,ae)};T(I,U=>{t.editingWho.length===0?U(B):U(Q,!1)})}R(()=>p.disabled=t.loading),Ve(m,()=>a(r),U=>x(r,U)),f(e,i),Z()}Ur(["keydown","click"]);var ru=(e,t)=>{e.key==="Enter"&&t()},nu=w('<span class="loading loading-spinner loading-sm"></span>'),au=(e,t,r)=>{x(t,""),x(r,"")},su=(e,t,r)=>t(r),iu=w('<button class="btn btn-outline btn-xs"> </button>'),ou=w('<br/><small class="opacity-75"> </small>',1),lu=w('<p class="text-sm"><strong>Magasin défini :</strong> <!></p>'),cu=w('<p class="text-sm"><strong>Magasin défini :</strong> </p>'),uu=w(`<p class="text-sm">Aucun magasin n'est encore défini pour ce produit</p>`),du=w('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Gestion des magasins</h3> <div class="card bg-base-200"><div class="card-body"><h4 class="card-title text-base">Magasin principal</h4> <p class="text-sm opacity-75 mb-4">Définissez le magasin où ce produit est généralement acheté</p> <div class="form-control mb-3"><label class="label" for="store-name"><span class="label-text">Nom du magasin</span></label> <input id="store-name" type="text" class="input input-bordered input-sm" placeholder="Ex: Carrefour, Leclerc..."/></div> <div class="form-control mb-4"><label class="label" for="store-comment"><span class="label-text">Commentaire (optionnel)</span></label> <textarea id="store-comment" class="textarea textarea-bordered textarea-sm" placeholder="Ex: Près de la caisse, rayon frais, etc." rows="2"></textarea></div> <div class="flex gap-2 mb-4"><button class="btn btn-primary btn-sm"><!></button> <button class="btn btn-ghost btn-sm">Effacer</button></div> <div class="divider"></div> <div class="form-control"><label class="label" for="suggested-stores"><span class="label-text text-sm">Suggestions rapides</span></label> <div class="flex flex-wrap gap-2" id="suggested-stores"></div></div> <div class="divider"></div> <div class="alert alert-info"><!> <div><h4 class="font-semibold">Information sur le magasin actuel</h4> <!></div></div></div></div></div>');function vu(e,t){Y(t,!0);let r=re(lt(t.editingStore?.storeName||"")),n=re(lt(t.editingStore?.storeComment||""));la(()=>{if(t.product?.storeInfo)x(r,t.product.storeInfo.storeName||"",!0),x(n,t.product.storeInfo.storeComment||"",!0);else if(t.product?.store)try{const L=JSON.parse(t.product.store);x(r,L.storeName||"",!0),x(n,L.storeComment||"",!0)}catch{x(r,t.product.store||"",!0),x(n,"")}else x(r,""),x(n,"")});async function s(){const L=a(r).trim()?{storeName:a(r).trim(),storeComment:a(n).trim()||void 0}:null;await t.onUpdateStore(L)}function i(L){x(r,L,!0)}var o=du(),c=l(o),u=l(c);Ir(u,{class:"w-5 h-5"});var v=d(c,2),h=l(v),_=d(l(h),4),m=d(l(_),2);m.__keydown=[ru,s];var p=d(_,2),g=d(l(p),2),E=d(p,2),S=l(E);S.__click=s;var N=l(S);{var q=L=>{var se=nu();f(L,se)},A=L=>{var se=Je("Mettre à jour");f(L,se)};T(N,L=>{t.loading?L(q):L(A,!1)})}var C=d(S,2);C.__click=[au,r,n];var M=d(E,4),I=d(l(M),2);Oe(I,20,()=>["Carrefour","Intermarché","Leclerc","Auchan","Lidl","Aldi","Casino","Monoprix","Franprix","Bio c' Bon","Naturalia"],L=>L,(L,se)=>{var te=iu();te.__click=[su,i,se];var _e=l(te);R(()=>{te.disabled=t.loading,k(_e,se)}),f(L,te)});var B=d(M,4),Q=l(B);Ir(Q,{class:"w-4 h-4"});var U=d(Q,2),ae=d(l(U),2);{var pe=L=>{var se=lu(),te=d(l(se)),_e=d(te);{var Qe=ke=>{var y=ou(),$=d(G(y)),ee=l($);R(()=>k(ee,t.product.storeInfo.storeComment)),f(ke,y)};T(_e,ke=>{t.product.storeInfo.storeComment&&ke(Qe)})}R(()=>k(te,` ${t.product.storeInfo.storeName??""} `)),f(L,se)},O=L=>{var se=K(),te=G(se);{var _e=ke=>{var y=cu(),$=d(l(y));R(()=>k($,` ${t.product.store??""}`)),f(ke,y)},Qe=ke=>{var y=uu();f(ke,y)};T(te,ke=>{t.product?.store?ke(_e):ke(Qe,!1)},!0)}f(L,se)};T(ae,L=>{t.product?.storeInfo?L(pe):L(O,!1)})}R(()=>{S.disabled=t.loading,C.disabled=t.loading}),Ve(m,()=>a(r),L=>x(r,L)),Ve(g,()=>a(n),L=>x(n,L)),f(e,o),Z()}Ur(["keydown","click"]);function Rs(e,t,r,n,s,i){t(!1),x(r,n()),x(s,null),i.onclose()}var fu=w('<div class="badge badge-success gap-1"><!> Actif</div>'),hu=w('<div class="badge badge-warning gap-1"><!> </div>'),pu=(e,t)=>t("recettes"),_u=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),mu=(e,t)=>t("achats"),gu=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),bu=(e,t)=>t("stock"),yu=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),wu=(e,t)=>t("volontaires"),xu=w('<span class="badge badge-sm badge-secondary ml-1"> </span>'),Su=(e,t)=>t("magasins"),Pu=w('<div class="alert alert-error mb-4"><!> <span> </span></div>'),ku=w('<div class="text-center py-8 opacity-50"><!> <p>Aucune recette trouvée pour ce produit</p></div>'),Eu=w('<tr><td class="font-medium"> </td><td> </td><td> </td><td> </td><td> </td><td> </td></tr>'),Tu=w('<div class="overflow-x-auto"><table class="table table-zebra table-sm"><thead><tr><th>Recette</th><th>Quantité</th><th>Date service</th><th>Horaire</th><th>Type plat</th><th>Assiettes</th></tr></thead><tbody></tbody></table></div>'),Nu=w('<div class="space-y-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Recettes utilisant ce produit</h3> <!></div>'),$u=w('<div class="modal modal-open"><div class="modal-box max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"><div class="flex items-center justify-between p-4 border-b"><div class="flex-1"><h2 class="text-xl font-bold"> </h2> <div class="flex items-center gap-3 mt-2"><span class="badge badge-secondary"> </span> <!> <div class="text-sm opacity-75"><span class="font-medium">Besoin:</span> </div></div></div> <button class="btn btn-circle btn-ghost btn-sm" aria-label="Fermer"><!></button></div> <div class="tabs tabs-border flex-none" role="tablist"><button role="tab"><!> Recettes <!></button> <button role="tab"><!> Achats <!></button> <button role="tab"><!> Stock <!></button> <button role="tab"><!> Volontaires <!></button> <button role="tab"><!> Magasin</button></div> <div class="flex-1 overflow-y-auto p-4 min-h-96"><!> <div><!></div></div> <div class="modal-action"><button class="btn btn-ghost">Fermer</button></div></div></div>');function Au(e,t){Y(t,!0);let r=rr(t,"isOpen",15,!1),n=rr(t,"productId",11,null),s=rr(t,"initialTab",3,"recettes"),i=J(()=>n()?V.products.find(y=>y.$id===n()):null),o=re(lt(s())),c=re(!1),u=re(null),v=re(""),h=re(lt({quantity:null,unit:"",store:"",who:"",price:null,notes:""})),_=re(lt({quantity:0,unit:"",notes:"",dateTime:""})),m=re(lt([])),p=re(null),g=J(()=>{const y=a(i)?.purchases;if(!y||!Array.isArray(y))return console.warn("[ProductModal] Purchases is not a valid array:",y),[];const $=y.filter(ee=>!ee||typeof ee!="object"?(console.warn("[ProductModal] Invalid purchase object:",ee),!1):ee.$id?!0:(console.warn("[ProductModal] Purchase missing $id:",ee),!1));return $.length!==y.length&&console.warn(`[ProductModal] Filtered ${y.length-$.length} invalid purchases`),$}),E=J(()=>rc(a(i)?.recipesOccurrences||null)),S=J(()=>a(i)?.who||[]);la(()=>{a(i)&&(x(o,s()),x(m,tc(a(i).stockReel),!0),x(v,a(i).store||"",!0),N())});function N(){x(h,{quantity:0,unit:"",store:a(i)?.store||"",who:"",price:null,notes:""},!0),x(_,{quantity:0,unit:"",notes:"",dateTime:new Date().toISOString().slice(0,16)},!0)}function q(y){x(o,y,!0)}async function A(y){x(c,!0),x(u,null);try{return await y()}catch($){return x(u,$ instanceof Error?$.message:"Une erreur est survenue",!0),console.error("[ProductModal] Erreur:",$),null}finally{x(c,!1)}}function C(y){if(!y)return"-";try{return new Date(y).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return y}}function M(y){if(!y)return"-";try{const $=JSON.parse(y);if(Array.isArray($)&&$.length>0)return $.map(ee=>`${ee.value} ${ee.unit}`).join(" et ")}catch{return y}return y}async function I(){a(i)&&(x(c,!0),await A(async()=>{if(!a(h).quantity||!a(h).unit.trim())throw new Error("Veuillez remplir les champs obligatoires");let y=a(h).quantity,$=a(h).unit;if(a(h).unit==="kg"?(y=a(h).quantity*1e3,$="gr."):a(h).unit==="l."&&(y=a(h).quantity*1e3,$="ml"),await Yl({products:[a(i).$id],mainId:a(i).mainId.$id,unit:$,quantity:y,store:a(h).store||null,who:a(h).who||null,notes:a(h).notes||"",price:a(h).price||null})){N();const ye=new CustomEvent("toast",{detail:{type:"success",message:"Achat ajouté avec succès"}});window.dispatchEvent(ye)}}))}function B(y){x(p,{...y},!0)}function Q(){x(p,null)}async function U(){a(p)&&await A(async()=>{const y=a(p).$id;let $=a(p).quantity,ee=a(p).unit;a(p).unit==="kg"?($=a(p).quantity*1e3,ee="gr."):a(p).unit==="l."&&($=a(p).quantity*1e3,ee="ml");const ye={unit:ee,quantity:$,store:a(p)?.store||null,who:a(p)?.who||null,notes:a(p)?.notes||"",price:a(p)?.price||null};if(await Zl(y,ye)){x(p,null);const Xe=new CustomEvent("toast",{detail:{type:"success",message:"Achat modifié avec succès"}});window.dispatchEvent(Xe)}})}async function ae(y){confirm(`Êtes-vous sûr de vouloir supprimer cet achat (${y.quantity} ${y.unit}) ?`)&&await A(async()=>{await Xl(y.$id);const $=new CustomEvent("toast",{detail:{type:"success",message:"Achat supprimé avec succès"}});window.dispatchEvent($)})}async function pe(){a(i)&&await A(async()=>{if(!a(_).quantity||!a(_).unit)throw new Error("Veuillez remplir les champs obligatoires");const y={quantity:a(_).quantity.toString(),unit:a(_).unit,notes:a(_).notes||"",dateTime:a(_).dateTime||new Date().toISOString()},$=[...a(m),y],ee=a(i).$id;if(await Is(ee,JSON.stringify($))){x(m,$,!0),N();const je=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock ajouté avec succès"}});window.dispatchEvent(je)}})}async function O(y){confirm("Êtes-vous sûr de vouloir supprimer ce relevé de stock ?")&&a(i)&&await A(async()=>{const $=a(m).filter((ye,je)=>je!==y);if(await Is(a(i).$id,JSON.stringify($))){x(m,$,!0);const ye=new CustomEvent("toast",{detail:{type:"success",message:"Relevé de stock supprimé avec succès"}});window.dispatchEvent(ye)}})}async function L(y){!a(i)||!y.trim()||await A(async()=>{const $=y.trim();if(a(S).includes($))throw new Error("Ce volontaire est déjà ajouté");const ee=[...a(S),$];if(await Cs(a(i).$id,ee)){const je=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire ajouté avec succès"}});window.dispatchEvent(je)}})}async function se(y){a(i)&&confirm(`Retirer ${y} de la liste des volontaires ?`)&&await A(async()=>{const $=a(S).filter(ye=>ye!==y);if(await Cs(a(i).$id,$)){const ye=new CustomEvent("toast",{detail:{type:"success",message:"Volontaire retiré avec succès"}});window.dispatchEvent(ye)}})}async function te(y){a(i)&&await A(async()=>{const $=y!==void 0?y:a(v)&&a(v).trim()!==""?a(v).trim():a(i).store;console.log("[ProductModal] handleUpdateStore called with:",{storeValue:y,editingStore:a(v),finalStoreValue:$});const ee=await Jl(a(i).$id,$);if(ee){const ye=new CustomEvent("toast",{detail:{type:"success",message:"Magasin mis à jour avec succès"}});window.dispatchEvent(ye),x(v,ee.store||"",!0)}})}var _e=K(),Qe=G(_e);{var ke=y=>{var $=$u(),ee=l($),ye=l(ee),je=l(ye),Xe=l(je),z=l(Xe),$e=d(Xe,2),Mt=l($e),ir=l(Mt),ut=d(Mt,2);{var Ae=H=>{var W=fu(),we=l(W);pc(we,{class:"w-3 h-3"}),f(H,W)},Qt=H=>{var W=hu(),we=l(W);Sc(we,{class:"w-3 h-3"});var Zt=d(we);R(()=>k(Zt,` ${a(i).status??""}`)),f(H,W)};T(ut,H=>{a(i).status==="active"?H(Ae):H(Qt,!1)})}var Er=d(ut,2),Ct=d(l(Er)),or=d(je,2);or.__click=[Rs,r,o,s,u,t];var dt=l(or);mt(dt,{class:"w-4 h-4"});var vt=d(ye,2),Ee=l(vt);Ee.__click=[pu,q];var Fe=l(Ee);$n(Fe,{class:"w-4 h-4 mr-1"});var Ht=d(Fe,2);{var lr=H=>{var W=_u(),we=l(W);R(()=>k(we,a(E).length)),f(H,W)};T(Ht,H=>{a(E).length>0&&H(lr)})}var et=d(Ee,2);et.__click=[mu,q];var yt=l(et);ea(yt,{class:"w-4 h-4 mr-1"});var wt=d(yt,2);{var Kt=H=>{var W=gu(),we=l(W);R(()=>k(we,a(g).length)),f(H,W)};T(wt,H=>{a(g).length>0&&H(Kt)})}var He=d(et,2);He.__click=[bu,q];var Jt=l(He);qa(Jt,{class:"w-4 h-4 mr-1"});var It=d(Jt,2);{var Tr=H=>{var W=yu(),we=l(W);R(()=>k(we,a(m).length)),f(H,W)};T(It,H=>{a(m).length>0&&H(Tr)})}var xt=d(He,2);xt.__click=[wu,q];var St=l(xt);In(St,{class:"w-4 h-4 mr-1"});var Dt=d(St,2);{var cr=H=>{var W=xu(),we=l(W);R(()=>k(we,a(i).who.length)),f(H,W)};T(Dt,H=>{a(i).who&&a(i).who.length>0&&H(cr)})}var ft=d(xt,2);ft.__click=[Su,q];var Nr=l(ft);Ir(Nr,{class:"w-4 h-4 mr-1"});var Pt=d(vt,2),ur=l(Pt);{var Ke=H=>{var W=Pu(),we=l(W);mt(we,{class:"w-4 h-4"});var Zt=d(we,2),fr=l(Zt);R(()=>k(fr,`erreur : ${a(u)??""}`)),f(H,W)};T(ur,H=>{a(u)&&H(Ke)})}var Yt=d(ur,2),dr=l(Yt);{var vr=H=>{var W=Nu(),we=l(W),Zt=l(we);$n(Zt,{class:"w-5 h-5"});var fr=d(we,2);{var jt=Rt=>{var Xt=ku(),Ar=l(Xt);$n(Ar,{class:"w-12 h-12 mx-auto mb-2"}),f(Rt,Xt)},$r=Rt=>{var Xt=Tu(),Ar=l(Xt),qt=d(l(Ar));Oe(qt,21,()=>a(E),Ft=>Ft.recipeName+Ft.dateTimeService,(Ft,kt)=>{var Hr=Eu(),Kr=l(Hr),Ot=l(Kr),hr=d(Kr),hn=l(hr),Jr=d(hr),pr=l(Jr),pn=d(Jr),Rn=l(pn),qn=d(pn),va=l(qn),On=d(qn),Ln=l(On);R(fa=>{k(Ot,a(kt).recipeName),k(hn,`${a(kt).quantity??""} ${a(kt).unit??""}`),k(pr,fa),k(Rn,a(kt).horaire||"-"),k(va,a(kt).typePlat||"-"),k(Ln,a(kt).assiettes||"-")},[()=>C(a(kt).dateTimeService)]),f(Ft,Hr)}),f(Rt,Xt)};T(fr,Rt=>{a(E).length===0?Rt(jt):Rt($r,!1)})}f(H,W)},vn=H=>{var W=K(),we=G(W);{var Zt=jt=>{Oc(jt,{get product(){return a(i)},get currentProductPurchases(){return a(g)},get loading(){return a(c)},get newPurchase(){return a(h)},onAddPurchase:I,onStartEditPurchase:B,onCancelEditPurchase:Q,onSavePurchase:U,onDeletePurchase:ae})},fr=jt=>{var $r=K(),Rt=G($r);{var Xt=qt=>{Qc(qt,{get product(){return a(i)},get stockEntries(){return a(m)},get loading(){return a(c)},onAddStock:pe,onDeleteStock:O})},Ar=qt=>{var Ft=K(),kt=G(Ft);{var Hr=Ot=>{tu(Ot,{get product(){return a(i)},get editingWho(){return a(S)},get loading(){return a(c)},onAddVolunteer:L,onRemoveVolunteer:se})},Kr=Ot=>{var hr=K(),hn=G(hr);{var Jr=pr=>{vu(pr,{get product(){return a(i)},get editingStore(){return a(v)},get loading(){return a(c)},onUpdateStore:te})};T(hn,pr=>{a(o)==="magasins"&&pr(Jr)},!0)}f(Ot,hr)};T(kt,Ot=>{a(o)==="volontaires"?Ot(Hr):Ot(Kr,!1)},!0)}f(qt,Ft)};T(Rt,qt=>{a(o)==="stock"?qt(Xt):qt(Ar,!1)},!0)}f(jt,$r)};T(we,jt=>{a(o)==="achats"?jt(Zt):jt(fr,!1)},!0)}f(H,W)};T(dr,H=>{a(o)==="recettes"?H(vr):H(vn,!1)})}var fn=d(Pt,2),Qr=l(fn);Qr.__click=[Rs,r,o,s,u,t],R(H=>{k(z,a(i).productName),k(ir,a(i).productType),k(Ct,` ${H??""}`),Me(Ee,1,`tab ${a(o)==="recettes"?"tab-active":""}`),Me(et,1,`tab ${a(o)==="achats"?"tab-active":""}`),Me(He,1,`tab ${a(o)==="stock"?"tab-active":""}`),Me(xt,1,`tab ${a(o)==="volontaires"?"tab-active":""}`),Me(ft,1,`tab ${a(o)==="magasins"?"tab-active":""}`)},[()=>M(a(i).totalNeededConsolidated)]),f(y,$)};T(Qe,y=>{r()&&a(i)&&y(ke)})}f(e,_e),Z()}Ur(["click"]);var Mu=()=>V.clearFilters(),Cu=e=>V.setSearchQuery(e.currentTarget.value),Iu=()=>V.setGroupBy("none"),Du=()=>V.setGroupBy("store"),ju=()=>V.setGroupBy("productType"),Ru=(e,t)=>V.toggleProductType(t),qu=w("<button><!> </button>"),Ou=()=>V.toggleTemperature("frais"),Lu=()=>V.toggleTemperature("surgele"),Bu=()=>V.clearTypeAndTemperatureFilters(),Wu=w('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),zu=w('<div class="flex-1"><fieldset><legend class="label"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div>'),Vu=(e,t)=>V.toggleStore(t),Gu=w("<button><!> </button>"),Uu=()=>V.clearStoreFilters(),Qu=w('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de magasins"><!></button>'),Hu=w('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Magasins</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Ku=(e,t)=>V.toggleWho(t),Ju=w("<button><!> </button>"),Yu=()=>V.clearWhoFilters(),Zu=w('<button class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de qui"><!></button>'),Xu=w('<div class="flex-1"><fieldset><legend class="label"><span class="label-text text-sm">Qui</span></legend> <div class="flex flex-wrap gap-2 items-center" role="group"><!> <!></div></fieldset></div>'),Fu=()=>V.handleSort("productName"),ed=()=>V.handleSort("store"),td=()=>V.handleSort("who"),rd=()=>V.handleSort("productType"),nd=w('<div class="flex items-center gap-2"><!> <span> </span> <span class="text-sm opacity-70"> </span></div>'),ad=w('<tr class="bg-base-300 font-semibold sticky top-10 z-10"><td colspan="7" class="py-2"><div class="flex items-center justify-center gap-2"><!></div></td></tr>'),sd=(e,t,r)=>t("productName",a(r)),id=w('<div class="text-xs text-base-content/60"> </div>'),od=w('<div class="w-7 h-7 bg-success/20 rounded-full flex items-center justify-center"><!></div>'),ld=w('<div class="w-7 h-7 bg-info/20 rounded-full flex items-center justify-center"><!></div>'),cd=(e,t,r)=>t("store",a(r)),ud=w('<div class="tooltip tooltip-info"> </div>'),dd=(e,t,r)=>t("who",a(r)),vd=w('<span class="badge badge-soft badge-info badge-sm"> </span>'),fd=w('<div class="flex flex-wrap gap-1 pr-8"></div>'),hd=w('<div class="text-xs text-base-content/70 flex gap-2 items-center justify-center"><!> <span class="text-center "> </span> <span class="text-center "> </span></div>'),pd=(e,t,r)=>t("purchases",a(r)),_d=w('<tr class="hover:bg-base-300 transition-colors"><td class="cursor-pointer hover:bg-blue-50 relative group"><div class="flex items-center justify-between pr-8"><div><div class="font-medium"> </div> <!></div> <div class="flex gap-1"><!> <!></div></div> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td class="cursor-pointer hover:bg-purple-50 relative group"><!> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td><span class="flex items-center gap-1 text-sm"><!> </span></td><td class="text-center font-semibold"><div class="pb-1 text-center font-semibold"> </div> <!></td><td class="text-center font-medium cursor-pointer hover:bg-red-50 relative group"> <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"><!></div></td><td> </td></tr>'),md=w("<!> <!>",1),gd=w('<div class="text-center py-8"><div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),bd=w("<!> <span> </span>",1),yd=w("<!> <span> </span>",1),wd=w("<!> <span> </span>",1),xd=w('<div class="bg-base-300 rounded-lg p-3 mb-3 font-semibold sticky top-0 z-10"><div class="flex items-center justify-center gap-2"><!> <span class="text-sm opacity-70"> </span></div></div>'),Sd=(e,t,r)=>t("productName",a(r)),Pd=w('<div class="badge badge-success badge-sm">F</div>'),kd=w('<div class="badge badge-info badge-sm">S</div>'),Ed=(e,t,r)=>{e.stopPropagation(),t("store",a(r))},Td=w('<span class="badge badge-soft badge-info badge-sm"> </span>'),Nd=w('<span class="badge badge-soft badge-info badge-sm"> </span>'),$d=w('<div class="flex items-center gap-1"><!> <div class="flex gap-1"><!> <!></div></div>'),Ad=(e,t,r)=>{e.stopPropagation(),t("purchases",a(r))},Md=w('<div class="alert alert-success py-2 px-3 cursor-pointer hover:bg-success/10 transition-colors"><!> <span class="text-sm font-medium"> </span></div>'),Cd=w('<div class="alert alert-warning py-2 px-3 cursor-pointer hover:bg-warning/10 transition-colors"><!> <span class="text-sm font-medium"> </span></div>'),Id=w('<div class="indicator"><span class="indicator-item badge badge-soft badge-sm badge-secondary"><!></span> <div class="card bg-base-100 shadow-lg cursor-pointer hover:shadow-xl transition-all"><div class="card-body p-4"><div class="flex items-center justify-between mb-2"><h3 class="font-semibold text-base flex items-center gap-2"><span class="truncate max-w-[180px]"> </span> <div class="flex gap-1"><!> <!></div></h3></div> <div class="flex items-center gap-3 text-md opacity-80 mb-3"><div class="flex items-center gap-1 cursor-pointer hover:bg-green-50 px-2 py-1 rounded transition-colors"><!> <span class="truncate max-w-[80px]"> </span></div> <!></div> <div class="mb-3"><!></div></div></div></div>'),Dd=w('<!> <div class="space-y-3 mb-4"></div>',1),jd=w('<div class="text-center py-8"><div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé avec les filtres actuels</span></div></div></div>'),Rd=()=>V.setGroupBy("none"),qd=()=>V.setGroupBy("store"),Od=()=>V.setGroupBy("productType"),Ld=(e,t)=>V.toggleProductType(t),Bd=w("<button><!> </button>"),Wd=()=>V.toggleTemperature("frais"),zd=()=>V.toggleTemperature("surgele"),Vd=()=>V.clearTypeAndTemperatureFilters(),Gd=w('<button class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10" title="Effacer les filtres de types et température"><!></button>'),Ud=(e,t)=>V.toggleStore(t),Qd=w("<button> </button>"),Hd=w('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Magasins</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Kd=(e,t)=>V.toggleWho(t),Jd=w("<button> </button>"),Yd=w('<div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Qui</span></legend> <div class="flex flex-wrap gap-2" role="group"></div></fieldset></div>'),Zd=(e,t)=>{V.clearFilters(),x(t,!1)},Xd=w('<div class="space-y-6"><div class="flex flex-wrap gap-2 items-center"><div class="badge badge-neutral badge-lg"><!> </div> <div class="badge badge-info badge-lg"><!> </div> <div class="badge badge-success badge-lg"><!> </div> <div class="badge badge-warning badge-lg"><!> </div></div> <div class="bg-base-200 rounded-lg p-4"><div class="hidden md:block"><div class="flex items-center justify-between mb-4"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <button class="btn btn-sm btn-ghost"><!> Tout effacer</button></div></div> <div class="flex  md:mb-4 justify-between mb-4 flex-wrap items-center gap-4 "><div class="form-control "><label class="label" for="search-input"><span class="label-text">Recherche</span></label> <div class="input input-bordered flex items-center gap-2"><!> <input id="search-input" type="text" placeholder="Nom du produit..." class="grow"/></div></div> <div class="form-control"><label class="label flex" for="grouping-select"><span class="label-text">Groupement</span></label> <div class="join" id="grouping-select"><input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Aucun"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par magasin"/> <input class="join-item btn btn-sm md:btn-md" type="radio" name="grouping-options" aria-label="Par type"/></div></div></div> <div class="hidden md:block"><div class="flex mt-4"><!></div> <div class="flex flex-col lg:flex-row gap-6 mt-4"><!> <!></div></div></div> <div class="hidden md:block bg-base-200 rounded-lg overflow-x-auto max-h-[calc(100vh-200px)]"><table class="table w-full"><thead class="sticky top-0 z-10 bg-base-300"><tr class="bg-base-300"><th class="cursor-pointer hover:bg-base-200 text-center"><div class="flex items-center justify-center gap-2"><!> Nom du produit <!></div></th><th><div class="flex items-center justify-center gap-2"><!> Magasin <!></div></th><th class="cursor-pointer hover:bg-base-200 text-center"><div class="flex items-center justify-center gap-2"><!> Qui <!></div></th><th><div class="flex items-center justify-center gap-2">Type <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2">Besoins <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> Achats <!></div></th><th class="text-center"><div class="flex items-center justify-center gap-2"><!> manquant</div></th></tr></thead><tbody></tbody></table> <!></div> <div class="md:hidden bg-base-200 rounded-lg p-1"><!> <!></div></div> <!> <div class="drawer drawer-end"><input id="filters-drawer" type="checkbox" class="drawer-toggle"/> <div class="drawer-side"><label for="filters-drawer" class="drawer-overlay"></label> <div class="menu bg-base-200 min-h-full w-80 p-4"><div class="flex items-center justify-between mb-6"><h3 class="text-lg font-semibold flex items-center gap-2"><!> Filtres</h3> <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle"><!></label></div> <div class="form-control mb-4"><label class="label" for="grouping-select-mobile"><span class="label-text">Groupement</span></label> <div class="join join-vertical"><input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Aucun"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par magasin"/> <input class="join-item btn" type="radio" name="grouping-options-mobile" aria-label="Par type"/></div></div> <div class="mb-6"><fieldset><legend class="label mb-2"><span class="label-text">Types & Température</span></legend> <div class="flex flex-wrap gap-2 mb-3" role="group"></div> <div class="flex flex-wrap gap-2" role="group"><button><!> Frais</button> <button><!> Surgelés</button> <!></div></fieldset></div> <!> <!> <div class="divider"></div> <button class="btn btn-primary w-full mb-2"><!> Tout effacer</button> <label for="filters-drawer" class="btn btn-outline w-full">Appliquer</label></div></div></div> <div class="md:hidden fixed bottom-4 left-4 z-50"><label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg"><!></label></div>',1);function Fd(e,t){Y(t,!0);const r=J(()=>V.filteredProducts),n=J(()=>V.groupedFormattedProducts),s=J(()=>V.stats),i=J(()=>V.uniqueStores),o=J(()=>V.uniqueWho),c=J(()=>V.uniqueProductTypes),u=J(()=>V.filters);let v=re(!1),h=re(!1),_=re(null),m=re("recettes");function p(P,D){switch(console.log(`Cell clicked: ${P}`,D),x(_,D.$id,!0),P){case"store":x(m,"magasins");break;case"who":x(m,"volontaires");break;case"purchases":x(m,"achats");break;case"productName":x(m,"recettes");break;default:x(m,"recettes")}x(h,!0)}function g(){x(h,!1),x(_,null)}function E(P){switch(P.toLowerCase()){case"sec":return{displayName:"Produits Sec",icon:lc};case"animaux":return{displayName:"Viandes et Poissons",icon:cc};case"legumes":return{displayName:"Fruits et Légumes",icon:dc};case"sucres":return{displayName:"Sucrées",icon:uc};case"lof":return{displayName:"L.O.F",icon:mc};case"autres":return{displayName:"Autres",icon:vc};case"epices":return{displayName:"Assaisonnements",icon:gc};case"frais":return{displayName:"Produits Frais",icon:yc};default:return{displayName:P,icon:$n}}}la(()=>{function P(D){D.key==="Escape"&&a(h)&&g()}return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)});var S=Xd(),N=G(S),q=l(N),A=l(q),C=l(A);js(C,{class:"w-4 h-4 mr-1"});var M=d(C),I=d(A,2),B=l(I);Kn(B,{class:"w-4 h-4 mr-1"});var Q=d(B),U=d(I,2),ae=l(U);Jn(ae,{class:"w-4 h-4 mr-1"});var pe=d(ae),O=d(U,2),L=l(O);_c(L,{class:"w-4 h-4 mr-1"});var se=d(L),te=d(q,2),_e=l(te),Qe=l(_e),ke=l(Qe),y=l(ke);Ta(y,{class:"w-5 h-5"});var $=d(ke,2);$.__click=[Mu];var ee=l($);mt(ee,{class:"w-4 h-4"});var ye=d(_e,2),je=l(ye),Xe=d(l(je),2),z=l(Xe);xc(z,{class:"w-4 h-4"});var $e=d(z,2);$e.__input=[Cu];var Mt=d(je,2),ir=d(l(Mt),2),ut=l(ir);ut.__change=[Iu];var Ae=d(ut,2);Ae.__change=[Du];var Qt=d(Ae,2);Qt.__change=[ju];var Er=d(ye,2),Ct=l(Er),or=l(Ct);{var dt=P=>{var D=zu(),Ie=l(D),xe=d(l(Ie),2),fe=l(xe);Oe(fe,16,()=>a(c),Pe=>Pe,(Pe,Te)=>{const We=J(()=>E(Te));var tt=qu();tt.__click=[Ru,Te];var Et=l(tt);Fr(Et,()=>a(We).icon,(ze,De)=>{De(ze,{class:"w-5 h-5 mr-1"})});var Lt=d(Et);R(ze=>{Me(tt,1,`btn btn-sm ${ze??""}`),k(Lt,` ${a(We).displayName??""}`)},[()=>a(u).selectedProductTypes.length===0?"btn-soft btn-accent":a(u).selectedProductTypes.includes(Te)?"btn-accent":"btn-dash btn-accent"]),f(Pe,tt)});var Se=d(fe,2);Se.__click=[Ou];var me=l(Se);Kn(me,{class:"w-5 h-5"});var le=d(Se,2);le.__click=[Lu];var ge=l(le);Jn(ge,{class:"w-5 h-5"});var ie=d(le,2);{var j=Pe=>{var Te=Wu();Te.__click=[Bu];var We=l(Te);mt(We,{class:"w-3 h-3"}),f(Pe,Te)};T(ie,Pe=>{(a(u).selectedProductTypes.length>0||a(u).selectedTemperatures.length>0)&&Pe(j)})}R((Pe,Te)=>{Me(Se,1,`btn btn-sm ${Pe??""}`),Me(le,1,`btn btn-sm ${Te??""}`)},[()=>a(u).selectedTemperatures.length===0?"btn-soft btn-success":a(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(u).selectedTemperatures.length===0?"btn-soft btn-info":a(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),f(P,D)};T(or,P=>{a(c).length>0&&P(dt)})}var vt=d(Ct,2),Ee=l(vt);{var Fe=P=>{var D=Hu(),Ie=l(D),xe=d(l(Ie),2),fe=l(xe);Oe(fe,16,()=>a(i),le=>le,(le,ge)=>{var ie=Gu();ie.__click=[Vu,ge];var j=l(ie);Ir(j,{class:"w-3 h-3 mr-1"});var Pe=d(j);R(Te=>{Me(ie,1,`btn btn-xs ${Te??""}`),k(Pe,` ${ge??""}`)},[()=>a(u).selectedStores.length===0?"btn-soft btn-accent":a(u).selectedStores.includes(ge)?"btn-accent":"btn-dash btn-accent"]),f(le,ie)});var Se=d(fe,2);{var me=le=>{var ge=Qu();ge.__click=[Uu];var ie=l(ge);mt(ie,{class:"w-3 h-3"}),f(le,ge)};T(Se,le=>{a(u).selectedStores.length>0&&le(me)})}f(P,D)};T(Ee,P=>{a(i).length>0&&P(Fe)})}var Ht=d(Ee,2);{var lr=P=>{var D=Xu(),Ie=l(D),xe=d(l(Ie),2),fe=l(xe);Oe(fe,16,()=>a(o),le=>le,(le,ge)=>{var ie=Ju();ie.__click=[Ku,ge];var j=l(ie);Pc(j,{class:"w-3 h-3 mr-1"});var Pe=d(j);R(Te=>{Me(ie,1,`btn btn-xs ${Te??""}`),k(Pe,` ${ge??""}`)},[()=>a(u).selectedWho.length===0?" btn-soft btn-info":a(u).selectedWho.includes(ge)?" btn-info":"btn-dash btn-info"]),f(le,ie)});var Se=d(fe,2);{var me=le=>{var ge=Zu();ge.__click=[Yu];var ie=l(ge);mt(ie,{class:"w-3 h-3"}),f(le,ge)};T(Se,le=>{a(u).selectedWho.length>0&&le(me)})}f(P,D)};T(Ht,P=>{a(o).length>0&&P(lr)})}var et=d(te,2),yt=l(et),wt=l(yt),Kt=l(wt),He=l(Kt);He.__click=[Fu];var Jt=l(He),It=l(Jt);js(It,{class:"w-4 h-4"});var Tr=d(It,2);{var xt=P=>{var D=Je();R(()=>k(D,a(u).sortDirection==="asc"?"↑":"↓")),f(P,D)};T(Tr,P=>{a(u).sortColumn==="productName"&&P(xt)})}var St=d(He);St.__click=[ed];var Dt=l(St),cr=l(Dt);Ir(cr,{class:"w-4 h-4"});var ft=d(cr,2);{var Nr=P=>{var D=Je();R(()=>k(D,a(u).sortDirection==="asc"?"↑":"↓")),f(P,D)};T(ft,P=>{a(u).sortColumn==="store"&&P(Nr)})}var Pt=d(St);Pt.__click=[td];var ur=l(Pt),Ke=l(ur);In(Ke,{class:"w-4 h-4"});var Yt=d(Ke,2);{var dr=P=>{var D=Je();R(()=>k(D,a(u).sortDirection==="asc"?"↑":"↓")),f(P,D)};T(Yt,P=>{a(u).sortColumn==="who"&&P(dr)})}var vr=d(Pt);vr.__click=[rd];var vn=l(vr),fn=d(l(vn));{var Qr=P=>{var D=Je();R(()=>k(D,a(u).sortDirection==="asc"?"↑":"↓")),f(P,D)};T(fn,P=>{a(u).sortColumn==="productType"&&P(Qr)})}var H=d(vr),W=l(H),we=d(l(W));{var Zt=P=>{var D=Je();R(()=>k(D,a(u).sortDirection==="asc"?"↑":"↓")),f(P,D)};T(we,P=>{a(u).sortColumn==="totalNeededConsolidated"&&P(Zt)})}var fr=d(H),jt=l(fr),$r=l(jt);ea($r,{class:"w-4 h-4"});var Rt=d($r,2);{var Xt=P=>{var D=Je();R(()=>k(D,a(u).sortDirection==="asc"?"↑":"↓")),f(P,D)};T(Rt,P=>{a(u).sortColumn==="totalPurchases"&&P(Xt)})}var Ar=d(fr),qt=l(Ar),Ft=l(qt);bc(Ft,{class:"w-4 h-4"});var kt=d(wt);Oe(kt,21,()=>Object.entries(a(n)),([P,D])=>P,(P,D)=>{var Ie=J(()=>$a(a(D),2));let xe=()=>a(Ie)[0],fe=()=>a(Ie)[1];var Se=md(),me=G(Se);{var le=ie=>{const j=J(()=>E(xe()));var Pe=ad(),Te=l(Pe),We=l(Te),tt=l(We);{var Et=ze=>{var De=Je();R(()=>k(De,`🏪 ${xe()??""} (${fe().length??""})`)),f(ze,De)},Lt=ze=>{var De=K(),Tt=G(De);{var Nt=rt=>{var Le=nd(),ht=l(Le);Fr(ht,()=>a(j).icon,(_r,_n)=>{_n(_r,{class:"w-4 h-4"})});var pt=d(ht,2),er=l(pt),it=d(pt,2),Wt=l(it);R(()=>{k(er,a(j).displayName),k(Wt,`(${fe().length??""})`)}),f(rt,Le)},Bt=rt=>{var Le=Je();R(()=>k(Le,`📦 ${xe()??""} (${fe().length??""})`)),f(rt,Le)};T(Tt,rt=>{a(u).groupBy==="productType"?rt(Nt):rt(Bt,!1)},!0)}f(ze,De)};T(tt,ze=>{a(u).groupBy==="store"?ze(Et):ze(Lt,!1)})}f(ie,Pe)};T(me,ie=>{xe()!==""&&ie(le)})}var ge=d(me,2);Oe(ge,17,()=>V.sortProducts(fe()),ie=>ie.$id,(ie,j)=>{const Pe=J(()=>E(a(j).productType));var Te=_d(),We=l(Te);We.__click=[sd,p,j];var tt=l(We),Et=l(tt),Lt=l(Et),ze=l(Lt),De=d(Lt,2);{var Tt=oe=>{var be=id(),nt=l(be);R(()=>k(nt,`Ancien: ${a(j).previousNames[0]??""}`)),f(oe,be)};T(De,oe=>{a(j).previousNames&&a(j).previousNames.length>0&&oe(Tt)})}var Nt=d(Et,2),Bt=l(Nt);{var rt=oe=>{var be=od(),nt=l(be);Kn(nt,{class:"w-4 h-4 text-success"}),f(oe,be)};T(Bt,oe=>{a(j).pFrais&&oe(rt)})}var Le=d(Bt,2);{var ht=oe=>{var be=ld(),nt=l(be);Jn(nt,{class:"w-4 h-4 text-info"}),f(oe,be)};T(Le,oe=>{a(j).pSurgel&&oe(ht)})}var pt=d(tt,2),er=l(pt);Pn(er,{class:"w-3 h-3 text-blue-500"});var it=d(We);it.__click=[cd,p,j];var Wt=l(it);{var _r=oe=>{var be=ud(),nt=l(be);R(()=>{Ra(be,"data-tip",a(j).storeInfo.storeComment),k(nt,a(j).storeInfo.storeName||"-")}),f(oe,be)},_n=oe=>{var be=Je();R(()=>k(be,a(j).storeInfo?.storeName||"-")),f(oe,be)};T(Wt,oe=>{a(j).storeInfo?.storeComment?oe(_r):oe(_n,!1)})}var _a=d(Wt,2),ma=l(_a);Pn(ma,{class:"w-3 h-3 text-green-500"});var mn=d(it);mn.__click=[dd,p,j];var gn=l(mn);{var ga=oe=>{var be=fd();Oe(be,20,()=>a(j).who,nt=>nt,(nt,Gn)=>{var Un=vd(),wa=l(Un);R(()=>k(wa,Gn)),f(nt,Un)}),f(oe,be)},ba=oe=>{var be=Je("-");f(oe,be)};T(gn,oe=>{a(j).who&&a(j).who.length>0?oe(ga):oe(ba,!1)})}var ya=d(gn,2),Ne=l(ya);Pn(Ne,{class:"w-3 h-3 text-purple-500"});var Re=d(mn),zt=l(Re),mr=l(zt);Fr(mr,()=>a(Pe).icon,(oe,be)=>{be(oe,{class:"w-3 h-3"})});var gr=d(mr),zn=d(Re),Vn=l(zn),tr=l(Vn),Yr=d(Vn,2);{var Zr=oe=>{var be=hd(),nt=l(be);kc(nt,{class:"w-3 h-3"});var Gn=d(nt,2),Un=l(Gn),wa=d(Gn,2),Yi=l(wa);R(()=>{k(Un,`${a(j)?.nbRecipes??""} r.`),k(Yi,`${a(j)?.totalAssiettes??""} c.`)}),f(oe,be)};T(Yr,oe=>{(a(j).nbRecipes||a(j).totalAssiettes)&&oe(Zr)})}var bn=d(zn);bn.__click=[pd,p,j];var ss=l(bn),Hi=d(ss),Ki=l(Hi);Pn(Ki,{class:"w-3 h-3 text-red-500"});var is=d(bn),Ji=l(is);R(()=>{k(ze,a(j).productName),Me(it,1,`${a(u).groupBy==="store"?"hidden":""} cursor-pointer hover:bg-green-50 font-medium relative group`),Me(Re,1,a(u).groupBy==="productType"?"hidden":""),k(gr,` ${a(Pe).displayName??""}`),k(tr,a(j).displayQuantity||"-"),k(ss,`${(a(j).displayTotalPurchases||"-")??""} `),Me(is,1,`text-center font-medium ${a(j).displayMissingQuantity==="✅ Complet"?"text-success":"text-warning"}`),k(Ji,a(j).displayMissingQuantity)}),f(ie,Te)}),f(P,Se)});var Hr=d(yt,2);{var Kr=P=>{var D=gd();f(P,D)};T(Hr,P=>{a(r).length===0&&P(Kr)})}var Ot=d(et,2),hr=l(Ot);Oe(hr,17,()=>Object.entries(a(n)),([P,D])=>P,(P,D)=>{var Ie=J(()=>$a(a(D),2));let xe=()=>a(Ie)[0],fe=()=>a(Ie)[1];var Se=Dd(),me=G(Se);{var le=ie=>{const j=J(()=>E(xe()));var Pe=xd(),Te=l(Pe),We=l(Te);{var tt=De=>{var Tt=bd(),Nt=G(Tt);Ir(Nt,{class:"w-4 h-4"});var Bt=d(Nt,2),rt=l(Bt);R(()=>k(rt,xe())),f(De,Tt)},Et=De=>{var Tt=K(),Nt=G(Tt);{var Bt=Le=>{var ht=yd(),pt=G(ht);Fr(pt,()=>a(j).icon,(Wt,_r)=>{_r(Wt,{class:"w-4 h-4"})});var er=d(pt,2),it=l(er);R(()=>k(it,a(j).displayName)),f(Le,ht)},rt=Le=>{var ht=wd(),pt=G(ht);$n(pt,{class:"w-4 h-4"});var er=d(pt,2),it=l(er);R(()=>k(it,xe())),f(Le,ht)};T(Nt,Le=>{a(u).groupBy==="productType"?Le(Bt):Le(rt,!1)},!0)}f(De,Tt)};T(We,De=>{a(u).groupBy==="store"?De(tt):De(Et,!1)})}var Lt=d(We,2),ze=l(Lt);R(()=>k(ze,`(${fe().length??""})`)),f(ie,Pe)};T(me,ie=>{xe()!==""&&ie(le)})}var ge=d(me,2);Oe(ge,21,()=>V.sortProducts(fe()),ie=>ie.$id,(ie,j)=>{const Pe=J(()=>E(a(j).productType)),Te=J(()=>a(j).displayMissingQuantity==="✅ Complet");var We=Id(),tt=l(We),Et=l(tt);Fr(Et,()=>a(Pe).icon,(Ne,Re)=>{Re(Ne,{class:"w-4 h-4 mr-1"})});var Lt=d(tt,2),ze=l(Lt),De=l(ze);De.__click=[Sd,p,j];var Tt=l(De),Nt=l(Tt),Bt=l(Nt),rt=d(Nt,2),Le=l(rt);{var ht=Ne=>{var Re=Pd();f(Ne,Re)};T(Le,Ne=>{a(j).pFrais&&Ne(ht)})}var pt=d(Le,2);{var er=Ne=>{var Re=kd();f(Ne,Re)};T(pt,Ne=>{a(j).pSurgel&&Ne(er)})}var it=d(De,2),Wt=l(it);Wt.__click=[Ed,p,j];var _r=l(Wt);Ir(_r,{class:"w-5 h-5"});var _n=d(_r,2),_a=l(_n),ma=d(Wt,2);{var mn=Ne=>{var Re=$d(),zt=l(Re);In(zt,{class:"w-5 h-5"});var mr=d(zt,2),gr=l(mr);Oe(gr,16,()=>a(j).who.slice(0,2),tr=>tr,(tr,Yr)=>{var Zr=Td(),bn=l(Zr);R(()=>k(bn,Yr)),f(tr,Zr)});var zn=d(gr,2);{var Vn=tr=>{var Yr=Nd(),Zr=l(Yr);R(()=>k(Zr,`+${a(j).who.length-2}`)),f(tr,Yr)};T(zn,tr=>{a(j).who.length>2&&tr(Vn)})}f(Ne,Re)};T(ma,Ne=>{a(j).who&&a(j).who.length>0&&Ne(mn)})}var gn=d(it,2);gn.__click=[Ad,p,j];var ga=l(gn);{var ba=Ne=>{var Re=Md(),zt=l(Re);hc(zt,{class:"w-4 h-4 shrink-0"});var mr=d(zt,2),gr=l(mr);R(()=>k(gr,`${a(j).displayTotalPurchases??""} acheté`)),f(Ne,Re)},ya=Ne=>{var Re=Cd(),zt=l(Re);fc(zt,{class:"w-4 h-4 shrink-0"});var mr=d(zt,2),gr=l(mr);R(()=>k(gr,`Manque ${a(j).displayMissingQuantity??""}`)),f(Ne,Re)};T(ga,Ne=>{a(Te)?Ne(ba):Ne(ya,!1)})}R(()=>{k(Bt,a(j).productName),k(_a,a(j).storeInfo?.storeName||"-")}),f(ie,We)}),f(P,Se)});var hn=d(hr,2);{var Jr=P=>{var D=jd();f(P,D)};T(hn,P=>{a(r).length===0&&P(Jr)})}var pr=d(N,2);Au(pr,{get isOpen(){return a(h)},get productId(){return a(_)},get initialTab(){return a(m)},onclose:g});var pn=d(pr,2),Rn=l(pn),qn=d(Rn,2),va=d(l(qn),2),On=l(va),Ln=l(On),fa=l(Ln);Ta(fa,{class:"w-5 h-5"});var Ci=d(Ln,2),Ii=l(Ci);mt(Ii,{class:"w-4 h-4"});var Xa=d(On,2),Di=d(l(Xa),2),ha=l(Di);ha.__change=[Rd];var pa=d(ha,2);pa.__change=[qd];var Fa=d(pa,2);Fa.__change=[Od];var es=d(Xa,2),ji=l(es),ts=d(l(ji),2);Oe(ts,20,()=>a(c),P=>P,(P,D)=>{const Ie=J(()=>E(D));var xe=Bd();xe.__click=[Ld,D];var fe=l(xe);Fr(fe,()=>a(Ie).icon,(me,le)=>{le(me,{class:"w-3 h-3 mr-1"})});var Se=d(fe);R(me=>{Me(xe,1,`btn btn-sm ${me??""}`),k(Se,` ${a(Ie).displayName??""}`)},[()=>a(u).selectedProductTypes.length===0?"btn-soft btn-accent":a(u).selectedProductTypes.includes(D)?"btn-accent":"btn-dash btn-accent"]),f(P,xe)});var Ri=d(ts,2),Bn=l(Ri);Bn.__click=[Wd];var qi=l(Bn);Kn(qi,{class:"w-3 h-3"});var Wn=d(Bn,2);Wn.__click=[zd];var Oi=l(Wn);Jn(Oi,{class:"w-3 h-3"});var Li=d(Wn,2);{var Bi=P=>{var D=Gd();D.__click=[Vd];var Ie=l(D);mt(Ie,{class:"w-3 h-3"}),f(P,D)};T(Li,P=>{(a(u).selectedProductTypes.length>0||a(u).selectedTemperatures.length>0)&&P(Bi)})}var rs=d(es,2);{var Wi=P=>{var D=Hd(),Ie=l(D),xe=d(l(Ie),2);Oe(xe,20,()=>a(i),fe=>fe,(fe,Se)=>{var me=Qd();me.__click=[Ud,Se];var le=l(me);R(ge=>{Me(me,1,`btn btn-sm ${ge??""}`),k(le,Se)},[()=>a(u).selectedStores.length===0?"btn-soft btn-accent":a(u).selectedStores.includes(Se)?"btn-accent":"btn-dash btn-accent"]),f(fe,me)}),f(P,D)};T(rs,P=>{a(i).length>0&&P(Wi)})}var ns=d(rs,2);{var zi=P=>{var D=Yd(),Ie=l(D),xe=d(l(Ie),2);Oe(xe,20,()=>a(o),fe=>fe,(fe,Se)=>{var me=Jd();me.__click=[Kd,Se];var le=l(me);R(ge=>{Me(me,1,`btn btn-sm ${ge??""}`),k(le,Se)},[()=>a(u).selectedWho.length===0?"btn-soft btn-accent":a(u).selectedWho.includes(Se)?"btn-accent":"btn-dash btn-accent"]),f(fe,me)}),f(P,D)};T(ns,P=>{a(o).length>0&&P(zi)})}var as=d(ns,4);as.__click=[Zd,v];var Vi=l(as);mt(Vi,{class:"w-4 h-4 mr-2"});var Gi=d(pn,2),Ui=l(Gi),Qi=l(Ui);Ta(Qi,{class:"w-6 h-6"}),R((P,D)=>{k(M,` ${a(s).total??""}`),k(Q,` frais:
      ${a(s).frais??""}`),k(pe,` surgelés:
      ${a(s).surgel??""}`),k(se,` fusionnés:
      ${a(s).merged??""}`),Al($e,a(u).searchQuery),en(ut,a(u).groupBy==="none"),en(Ae,a(u).groupBy==="store"),en(Qt,a(u).groupBy==="productType"),Me(St,1,`cursor-pointer hover:bg-base-200 text-center ${a(u).groupBy==="store"?"hidden":""}`),Me(vr,1,`cursor-pointer hover:bg-base-200 text-center ${a(u).groupBy==="productType"?"hidden":""}`),en(ha,a(u).groupBy==="none"),en(pa,a(u).groupBy==="store"),en(Fa,a(u).groupBy==="productType"),Me(Bn,1,`btn btn-sm ${P??""}`),Me(Wn,1,`btn btn-sm ${D??""}`)},[()=>a(u).selectedTemperatures.length===0?"btn-soft btn-success":a(u).selectedTemperatures.includes("frais")?"btn-success":"btn-dash btn-success",()=>a(u).selectedTemperatures.length===0?"btn-soft btn-info":a(u).selectedTemperatures.includes("surgele")?"btn-info":"btn-dash btn-info"]),Il(Rn,()=>a(v),P=>x(v,P)),f(e,S),Z()}Ur(["click","input","change"]);Io();var ev=w('<div class="flex flex-col items-center justify-center py-16 gap-4"><div class="loading loading-spinner loading-lg text-primary"></div> <p class="text-base-content/70">Chargement des produits...</p></div>');function tv(e){var t=ev();f(e,t)}var rv=w('<div class="alert alert-error shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m8-8l2 2m0 0l2 2m-2-2l-2-2m2 2l2 2"></path></svg> <div><h3 class="font-bold">Erreur</h3> <div class="text-sm"> </div></div></div>');function nv(e,t){var r=rv(),n=d(l(r),2),s=d(l(n),2),i=l(s);R(()=>k(i,t.message)),f(e,r)}var av=w('<div class="flex items-center gap-2 text-success"><div class="badge badge-success badge-sm">Temps réel connecté</div></div>'),sv=w('<div class="flex items-center gap-2 text-info"><div class="loading loading-spinner loading-xs"></div> <span>Synchronisation...</span></div>'),iv=w('<div class="text-base-content/60"> </div>'),ov=w('<div class="alert alert-info"><div><svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Aucun produit trouvé</span></div></div>'),lv=w('<div class="min-h-screen bg-base-100"><header class="sticky top-0 z-10 bg-base-200 shadow-sm"><div class="container mx-auto px-4 py-4"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-bold text-base-content">Produits</h1> <p class="text-sm text-base-content/70"> </p></div> <div class="flex items-center gap-4 text-sm"><!> <!> <!></div></div></div></header> <main class="container mx-auto px-4 py-8"><!> <!> <!></main></div>');function cv(e,t){Y(t,!0);let r,n=re(null);Ti(async()=>{r=Ul();try{await V.initialize(r)}catch(O){x(n,O instanceof Error?O.message:"Erreur lors de l'initialisation",!0),console.error("[App] Erreur initialisation:",O)}}),ql(()=>{V.destroy()});const s=J(()=>a(n)||V.error),i=J(()=>V.loading&&V.products.length===0);var o=lv(),c=l(o),u=l(c),v=l(u),h=l(v),_=d(l(h),2),m=l(_),p=d(h,2),g=l(p);{var E=O=>{var L=av();f(O,L)};T(g,O=>{V.realtimeConnected&&O(E)})}var S=d(g,2);{var N=O=>{var L=sv();f(O,L)};T(S,O=>{V.syncing&&O(N)})}var q=d(S,2);{var A=O=>{var L=iv(),se=l(L);R(te=>k(se,`Maj: ${te??""}`),[()=>new Date(V.lastSync).toLocaleTimeString()]),f(O,L)};T(q,O=>{V.lastSync&&O(A)})}var C=d(c,2),M=l(C);{var I=O=>{nv(O,{get message(){return a(s)}})};T(M,O=>{a(s)&&O(I)})}var B=d(M,2);{var Q=O=>{tv(O)};T(B,O=>{a(i)&&O(Q)})}var U=d(B,2);{var ae=O=>{Fd(O,{})},pe=O=>{var L=K(),se=G(L);{var te=_e=>{var Qe=ov();f(_e,Qe)};T(se,_e=>{V.loading||_e(te)},!0)}f(O,L)};T(U,O=>{V.products.length>0?O(ae):O(pe,!1)})}R(()=>k(m,`Liste: ${r??""}`)),f(e,o),Z()}ml(cv,{target:document.getElementById("app_products")});
